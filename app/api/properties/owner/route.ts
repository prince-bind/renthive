import { NextResponse } from "next/server";
import { Property } from "@/lib/Models";
import connectDB from "@/lib/connectDB";

export async function GET(req: Request) {
    try {
        await connectDB();

        const { searchParams } = new URL(req.url);
        const ownerId = searchParams.get("id")

        const properties = await Property.find({ user: ownerId });

        return NextResponse.json({ success: true, data: properties }, { status: 200 });
    } catch (error: unknown) {
        console.error("Error fetching Properties:", error);
        return NextResponse.json(
            { success: false, message: "Failed to fetch properties" },
            { status: 500 }
        );
    }
}
