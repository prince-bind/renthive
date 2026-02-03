import { prisma } from "@/lib/prisma";

export async function getColleges() {
  return prisma.college.findMany({
    select: {
      id: true,
      name: true,
    },
    orderBy: {
      name: "asc",
    },
  });
}
