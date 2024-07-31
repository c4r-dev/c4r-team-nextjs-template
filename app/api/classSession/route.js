import connectMongoDB from "../../libs/mongodb"
import Classsession from "../../models/classsession"
import { NextResponse } from "next/server";

export async function PUT() {
  try {
    await connectMongoDB();
    const users = await Classsession.find({});
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json({ message: "No Users Found" });
  }
}