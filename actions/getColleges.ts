import { prisma } from "@/lib/prisma";

export async function getColleges() {
  return prisma.college.findMany({
    select: {
      id: true,
      name: true,
      city: true, // ✅ Added city
    },
    orderBy: {
      name: "asc",
    },
  });
}