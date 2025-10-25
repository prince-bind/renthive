import { NextResponse } from "next/server";
import connectDB from "@/lib/connectDB";
import { Property } from "@/lib/Models";

export async function GET(req: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params; // ✅ await params before using
    await connectDB();

    const property = await Property.findById(id).populate("user", "name email phone");
    if (!property) {
      return NextResponse.json({ message: "Property not found" }, { status: 404 });
    }

    return NextResponse.json(property, { status: 200 });
  } catch (error) {
    console.error("Error fetching property:", error);
    return NextResponse.json({ message: "Error fetching property" }, { status: 500 });
  }
}
