import dbConnect from '@/app/lib/mongodb';
import { Service } from '@/app/Models/models';
import { NextResponse } from 'next/server';

export async function GET(req) {
  try {
    await dbConnect();
    const services = await Service.find({})
      .sort({ index: 1 })
      .populate({
        path: 'certificates',   // Field to populate
        select: 'link title ',  // Fields to select
        options: { sort: { index: 1 } }  // Sort the populated documents
      });
    console.log(services);
    return NextResponse.json({ success: true, data: services });
  } catch (error) {
    console.error('Error fetching services:', error);
    return new Response(
      JSON.stringify({ message: 'Error fetching services', error: error.message }),
      { status: 500 }
    );
  }
}


