import { prisma } from "@/lib/prisma";
import { Prisma, PropertyType, GenderType, OccupancyType } from "@prisma/client";

export type SearchFilters = {
  city?: string;
  collegeId?: string;
  type?: PropertyType;
  gender?: GenderType;
  occupancy?: OccupancyType;
  rentMin?: number;
  rentMax?: number;
  page?: number;
  pageSize?: number;
};

export async function searchProperties(filters: SearchFilters) {
  const page = filters.page ?? 1;
  const pageSize = filters.pageSize ?? 6;

  // Build the WHERE clause dynamically
  const where: Prisma.PropertyWhereInput = {
    isAvailable: true,

    city: filters.city
      ? {
          contains: filters.city,
          mode: Prisma.QueryMode.insensitive,
        }
      : undefined,

    // ✅ NEW: Filter properties where *at least one* connected college matches the ID
    colleges: filters.collegeId
      ? {
          some: {
            collegeId: filters.collegeId,
          },
        }
      : undefined,

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
        // ✅ NEW: Include the join table, then the college details
        colleges: {
          include: {
            college: true,
          },
        },
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