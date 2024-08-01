import connectMongoDB from "../../libs/mongodb"
import StudentSession from "../../models/StudentSession"
import { NextResponse } from "next/server";

export async function PUT() {
  try {
    await connectMongoDB();
    const session = await StudentSession.find({});
    return NextResponse.json(session);
  } catch (error) {
    return NextResponse.json({ message: "No Student Session Created" });
  }
}