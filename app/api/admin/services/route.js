import { updateIndicesEdit } from "@/app/api/lib/updateIndicesEdit";
import { updateIndicesUpload } from "@/app/api/lib/updateIndicesUpload";
import dbConnect from "@/app/lib/mongodb";
import { Service } from "@/app/Models/models";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const body = await req.json();
        const { title, imageSquareLink, index, imageSquarePublicId, imageCoverLink, imageCoverPublicId } = body;
        const newIndex = Number(index);
        // Check if all required fields have values
        if (!title || !newIndex || !imageSquareLink || !imageSquarePublicId || !imageCoverLink || !imageCoverPublicId) {
            return new Response(
                JSON.stringify({ message: 'All fields are required. Please fill in all fields.' }),
                { status: 400 }
            );
        }

        await dbConnect();

        // Check if the index already exists
        const existingService = await Service.findOne({ index: newIndex });
        if (existingService) {
            // If the index exists, update indices of other services
            await updateIndicesUpload(newIndex);
        }

        // Create a new service with the given index
        const newService = new Service({
            title,
            imageSquareLink,
            imageSquarePublicId,
            imageCoverLink,
            imageCoverPublicId,
            index: newIndex
        });

        // Save the new service to the database
        const savedService = await newService.save();

        // Send back a success response with the saved service data
        return NextResponse.json({ success: true, data: savedService });
    } catch (error) {
        console.error('Error saving service:', error);
        // Send an error response
        return new Response(JSON.stringify({ message: 'Error uploading data', error: error.message }), { status: 500 });
    }
}


export async function PUT(req) {
    try {
        // Parse the JSON body from the request
        const body = await req.json();
        const { id, title, imageSquareLink, index, imageSquarePublicId, imageCoverLink, imageCoverPublicId } = body;
        const newIndex = Number(index);

        // Check if all required fields have values
        if (!id || !title || !newIndex || !imageSquareLink || !imageSquarePublicId || !imageCoverLink || !imageCoverPublicId) {
            return new Response(
                JSON.stringify({ message: 'All fields are required. Please fill in all fields.' }),
                { status: 400 }
            );
        }

        // Connect to the database
        await dbConnect();

        // Find the existing service by ID
        const existingService = await Service.findById(id);

        if (!existingService) {
            return new Response(
                JSON.stringify({ message: 'Service not found.' }),
                { status: 404 }
            );
        }

        // If index has changed, update the indices of other services
        if (existingService.index !== newIndex) {
            await updateIndicesEdit(newIndex, existingService.index);
        }

        // Update the service with new data
        existingService.title = title;
        existingService.imageSquareLink = imageSquareLink;
        existingService.imageSquarePublicId = imageSquarePublicId;
        existingService.imageCoverLink = imageCoverLink;
        existingService.imageCoverPublicId = imageCoverPublicId;
        existingService.index = newIndex;

        // Save the updated service to the database
        const updatedService = await existingService.save();

        // Send back a success response with the updated service data
        return NextResponse.json({ success: true, data: updatedService });
    } catch (error) {
        console.error('Error updating service:', error);
        // Send an error response
        return new Response(JSON.stringify({ message: 'Error updating data', error: error.message }), { status: 500 });
    }
}

export async function GET(req) {
    try {
        await dbConnect();
        const services = await Service.find({})
            .sort({ index: 1 })
            .populate({
                path: 'certificates',   // Field to populate
                select: 'index title _id',  // Fields to select
                options: { sort: { index: 1 } }  // Sort the populated documents
            });
        return NextResponse.json({ success: true, data: services });
    } catch (error) {
        console.error('Error fetching services:', error);
        return new Response(
            JSON.stringify({ message: 'Error fetching services', error: error.message }),
            { status: 500 }
        );
    }
}
