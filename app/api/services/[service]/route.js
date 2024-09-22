import { Service } from '@/app/Models/models';
import dbConnect from '@/app/lib/mongodb';
import { NextResponse } from 'next/server';

export async function GET(req, { params }) {
  const { service } = params;
  try {
    await dbConnect();
    // Find the service and populate certificates, sorted by the index field
    const data = await Service.findOne({ link: service }).populate({
      path: 'certificates',
      options: { sort: { index: 1 } },
    });

    return NextResponse.json({ success: true, data: data });
  } catch (error) {
    console.error('Error fetching services:', error);
    return new Response(
      JSON.stringify({ message: 'Error fetching services', error: error.message }),
      { status: 500 }
    );
  }
}