import { NextResponse } from "next/server";
import connectDB from "@/lib/connectDB";
import { Property } from "@/lib/Models"; // adjust path if needed

export async function GET() {
  try {
    await connectDB();

    const properties = await Property.find();

    return NextResponse.json({
      success: true,
      count: properties.length,
      data: properties,
    });
  } catch (error) {
    console.error("Error fetching Properties:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch properties" },
      { status: 500 }
    );
  }
}
