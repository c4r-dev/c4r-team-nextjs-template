import connectToDatabase from "../lib/mongoose"
import User from "../models/User"
import { NextResponse } from "next/server";

export default async function handler(req, res) {
  await connectToDatabase();

  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
}