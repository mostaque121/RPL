import connectDB from "@/app/lib/mongodb";
import { NextResponse } from "next/server";

// Handling GET requests
export async function GET() {
  try {
    await connectDB();
    return NextResponse.json({ message: 'MongoDB is connected' }, { status: 200 });
  } catch (error) {
    console.error('MongoDB connection failed:', error);
    return NextResponse.json(
      { message: 'MongoDB connection failed', error: error.message },
      { status: 500 }
    );
  }
}
