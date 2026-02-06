import { prisma } from "@/lib/prisma";

export async function getPropertyById(id: string) {
  return prisma.property.findUnique({
    where: { id },
    include: {
      images: true,

      // ✅ UPDATE: Many-to-Many handling for Colleges
      colleges: {
        include: {
          college: true, // Fetches details like name, city, state
        },
      },

      // ✅ UPDATE: Many-to-Many handling for Amenities
      amenities: {
        include: {
          amenity: true, // Fetches the amenity name (e.g., "WiFi")
        },
      },

      owner: {
        select: {
          name: true,
          phone: true,
          isVerified: true,
          // profileImageUrl: true, // Optional: useful if you want to show the owner's face
        },
      },
    },
  });
}