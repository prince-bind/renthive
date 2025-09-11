import { NextResponse } from "next/server";
import { User } from "@/lib/Models";
import connectDB from "@/lib/connectDB";
import bcrypt from "bcryptjs";

export const POST = async (req: Request) => {
  try {
    const body = await req.json();
    const { name, email, phone, password, role } = body;

    if (!name || !email || !phone || !password || !role) {
      return NextResponse.json(
        { error: "All fields are mandatory" },
        { status: 400 }
      );
    }

    // connect DB
    await connectDB();

    // check existing user
    const userAvailable = await User.findOne({ email });
    if (userAvailable) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create user
    const newUser = new User({
      name,
      email,
      phone,
      password: hashedPassword,
      role,
    });

    await newUser.save();

    return NextResponse.json(
      { message: "User created successfully" },
      { status: 201 }
    );
  } catch (err: unknown) {
    console.error("Signup error:", err); // <--- log real error
    return NextResponse.json(
      { error: (err as Error).message },
      { status: 500 }
    );
  }
};
