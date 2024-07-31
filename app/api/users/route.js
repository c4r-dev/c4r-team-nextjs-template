import connectMongoDB from "../../libs/mongodb"
import User from "../../models/User"
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectMongoDB();
    const users = await User.find({});
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json({ message: "No Users Found" });
  }
}