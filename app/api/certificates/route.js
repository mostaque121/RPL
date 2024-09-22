import { Certificate } from '@/app/Models/models';
import dbConnect from '@/app/lib/mongodb';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        await dbConnect();
        const data = await Certificate.find({});
        return NextResponse.json({ success: true, data: data });
    } catch (error) {
        console.error('Error fetching services:', error);
        return new Response(
            JSON.stringify({ message: 'Error fetching services', error: error.message }),
            { status: 500 }
        );
    }
}