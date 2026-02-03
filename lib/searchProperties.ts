import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

type Filters = {
  city?: string;
  collegeId?: string;
  type?: "PG" | "FLAT";
  gender?: "BOYS" | "GIRLS" | "UNISEX";
  occupancy?: "SINGLE" | "DOUBLE" | "TRIPLE";
  rentMin?: number;
  rentMax?: number;
  page?: number;
  pageSize?: number;
};

export async function searchProperties(filters: Filters) {
  const page = filters.page ?? 1;
  const pageSize = filters.pageSize ?? 6;

  const where: Prisma.PropertyWhereInput = {
    isAvailable: true,

    city: filters.city
      ? {
          contains: filters.city,
          mode: Prisma.QueryMode.insensitive, // ✅ FIX
        }
      : undefined,

    collegeId: filters.collegeId || undefined,
    type: filters.type,
    gender: filters.gender,
    occupancy: filters.occupancy,

    rent: {
      gte: filters.rentMin,
      lte: filters.rentMax,
    },
  };

  const [properties, total] = await Promise.all([
    prisma.property.findMany({
      where,
      skip: (page - 1) * pageSize,
      take: pageSize,
      orderBy: { createdAt: "desc" },
      include: {
        images: true,
        college: true,
        owner: {
          select: { isVerified: true },
        },
      },
    }),
    prisma.property.count({ where }),
  ]);

  return {
    properties,
    total,
    page,
    pageSize,
    totalPages: Math.ceil(total / pageSize),
  };
}
