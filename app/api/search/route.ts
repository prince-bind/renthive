import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { Prisma, PropertyType, GenderType, OccupancyType } from "@prisma/client";

function isEnumValue(
  value: string | null,
  enumObj: Record<string, string>
): value is string {
  return !!value && Object.values(enumObj).includes(value);
}

async function withRetry<T>(
  fn: () => Promise<T>,
  retries = 1,
  delayMs = 300
): Promise<T> {
  try {
    return await fn();
  } catch (error) {
    if (retries <= 0) throw error;

    // Neon often recovers quickly
    await new Promise((res) => setTimeout(res, delayMs));
    return withRetry(fn, retries - 1, delayMs);
  }
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

    const page = Number(searchParams.get("page") || 1);
    const pageSize = Number(searchParams.get("pageSize") || 6);

    const where: Prisma.PropertyWhereInput = {
      isAvailable: true,
    };

    // ✅ City
    const city = searchParams.get("city");
    if (city) {
      where.city = {
        contains: city,
        mode: Prisma.QueryMode.insensitive,
      };
    }

    // ✅ College (many-to-many)
    const collegeId = searchParams.get("collegeId");
    if (collegeId) {
      where.colleges = {
        some: { collegeId },
      };
    }

    // ✅ Enum-safe filters (CRITICAL FIX)
    const type = searchParams.get("type");
    if (isEnumValue(type, PropertyType)) {
      where.type = type as PropertyType;
    }

    const gender = searchParams.get("gender");
    if (isEnumValue(gender, GenderType)) {
      where.gender = gender as GenderType;
    }

    const occupancy = searchParams.get("occupancy");
    if (isEnumValue(occupancy, OccupancyType)) {
      where.occupancy = occupancy as OccupancyType;
    }

    // ✅ Rent
    const rentMin = searchParams.get("rentMin");
    const rentMax = searchParams.get("rentMax");

    if (rentMin || rentMax) {
      where.rent = {};
      if (rentMin) where.rent.gte = Number(rentMin);
      if (rentMax) where.rent.lte = Number(rentMax);
    }

    const [properties, total] = await Promise.all([
      withRetry(() =>
        prisma.property.findMany({
          where,
          skip: (page - 1) * pageSize,
          take: pageSize,
          orderBy: { createdAt: "desc" },
          include: {
            images: true,
            colleges: {
              include: { college: true },
            },
            owner: {
              select: { isVerified: true },
            },
          },
        })
      ),

      withRetry(() =>
        prisma.property.count({ where })
      ),
    ]);


    return NextResponse.json({
      properties,
      total,
      page,
      pageSize,
      totalPages: Math.ceil(total / pageSize),
    });
  } catch (error) {
    console.error("API /search error:", error);

    return NextResponse.json(
      {
        properties: [],
        total: 0,
        page: 1,
        pageSize: 6,
        totalPages: 0,
      },
      { status: 200 } // graceful fallback
    );
  }
}
