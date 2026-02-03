import { prisma } from "@/lib/prisma";

export async function getPropertyById(id: string) {
  return prisma.property.findUnique({
    where: { id },
    include: {
      images: true,
      college: true,
      amenities: {
        include: {
          amenity: true,
        },
      },
      owner: {
        select: {
          name: true,
          phone: true,
          isVerified: true,
        },
      },
    },
  });
}
