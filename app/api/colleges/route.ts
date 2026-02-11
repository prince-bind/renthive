// export const revalidate = 3600; // 1 hour

import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const colleges = await prisma.college.findMany({
      select: {
        id: true,
        name: true,
        city: true,
      },
      orderBy: {
        name: "asc",
      },
    });

    return NextResponse.json(colleges);
  } catch (error) {
    console.error("API /colleges error:", error);
    return NextResponse.json([], { status: 200 });
  }
}