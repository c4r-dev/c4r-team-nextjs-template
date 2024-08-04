import connectMongoDB from "../../libs/mongodb"
import User from "../../models/User"
import { NextResponse } from "next/server";

export async function GET() {
  
  try {
    console.log(name)
    await connectMongoDB();
    const users = await User.findById({name});
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json({ message: "No Users Found" });
  }
}