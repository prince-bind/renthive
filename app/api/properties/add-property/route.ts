import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/authOptions";
import { Property } from "@/lib/Models";
import connectDB from "@/lib/connectDB";

export async function POST(req: Request) {
    try {
        await connectDB();

        const session = await getServerSession(authOptions);

        if (!session || !session.user?.id) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const userId = session.user.id; // ✅ logged-in owner ID
        const body = await req.json();

        const newProperty = await Property.create({
            ...body,
            user: userId, // attach owner
        });

        return NextResponse.json({ success: true, data: newProperty }, { status: 201 });
    } catch (error: unknown) {
        console.error("Error adding property:", error);
        const message = error instanceof Error ? error.message : "Unknown server error";
        return NextResponse.json({ error: message }, { status: 500 });
    }
}
