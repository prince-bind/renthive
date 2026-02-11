import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  try {
    const property = await prisma.property.findUnique({
      where: { id },
      include: {
        images: true,

        colleges: {
          include: {
            college: true,
          },
        },

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

    if (!property) {
      return NextResponse.json(
        { error: "Property not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(property);
  } catch (error) {
    console.error("API /property/[id] error:", error);
    return NextResponse.json(
      { error: "Failed to fetch property" },
      { status: 500 }
    );
  }
}
