import { Certificate, Service } from '@/app/Models/models';
import { updateIndicesEditCertificate } from '@/app/api/lib/updateIndicesEditCertificate';
import { updateIndicesUploadCertificate } from '@/app/api/lib/updateIndicesUploadCertificate';
import { updateService } from '@/app/api/lib/updateService';
import dbConnect from '@/app/lib/mongodb';
import { NextResponse } from 'next/server';

export async function POST(req) {
    try {
        const body = await req.json();

        const { index, service, title, imageSquareLink, imageSquarePublicId, imageCoverLink, imageCoverPublicId, description, jobOpportunity, entryRequirement, packagingRule, coreUnits, electiveUnits } = body;
        const newIndex = Number(index);

        if (!service || !newIndex || !title || !imageSquareLink || !imageSquarePublicId || !imageCoverLink || !imageCoverPublicId || !description || !jobOpportunity || !entryRequirement || !packagingRule || !coreUnits || !electiveUnits) {
            return new Response(
                JSON.stringify({ message: 'All fields are required. Please fill in all fields.' }),
                { status: 400 }
            );
        }

        await dbConnect();

        // Check if the index already exists
        const existingCertificate = await Certificate.findOne({ service: service, index: newIndex });
        if (existingCertificate) {
            // If the index exists, update indices of other services
            await updateIndicesUploadCertificate(service, newIndex);
        }

        const newCertificate = new Certificate({
            service,
            title,
            imageSquareLink,
            imageSquarePublicId,
            imageCoverLink,
            imageCoverPublicId,
            description,
            jobOpportunity,
            entryRequirement,
            packagingRule,
            coreUnits,
            electiveUnits,
            index: newIndex
        });

        const savedCertificate = await newCertificate.save();

        await Service.findByIdAndUpdate(
            service,
            { $push: { certificates: savedCertificate._id } },
            { new: true }
        );

        return NextResponse.json({ success: true, data: savedCertificate });
    } catch (error) {
        console.error('Error saving service:', error);
        return new Response(JSON.stringify({ message: 'Error uploading data', error: error.message }), { status: 500 });
    }
}

export async function PUT(req) {
    try {
        // Parse the JSON body from the request
        const body = await req.json();
        const { id, index, service, title, imageSquareLink, imageSquarePublicId, imageCoverLink, imageCoverPublicId, description, jobOpportunity, entryRequirement, packagingRule, coreUnits, electiveUnits } = body;
        const newIndex = Number(index);

        if (!id || !service || !newIndex || !title || !imageSquareLink || !imageSquarePublicId || !imageCoverLink || !imageCoverPublicId || !description || !jobOpportunity || !entryRequirement || !packagingRule || !coreUnits || !electiveUnits) {
            return new Response(
                JSON.stringify({ message: 'All fields are required. Please fill in all fields.' }),
                { status: 400 }
            );
        }

        // Connect to the database
        await dbConnect();

        // Find the existing service by ID
        const existingCertificate = await Certificate.findById(id);

        if (!existingCertificate) {
            return new Response(
                JSON.stringify({ message: 'Service not found.' }),
                { status: 404 }
            );
        }

        if (existingCertificate.service !== service) {
            await updateService(id, existingCertificate.service, service);
        }

        // If index has changed, update the indices of other services
        if (existingCertificate.index !== newIndex) {
            await updateIndicesEditCertificate(service, newIndex, existingCertificate.index);
        }



        // Update the service with new data
        existingCertificate.title = title;
        existingCertificate.service = service;
        existingCertificate.description = description;
        existingCertificate.imageSquareLink = imageSquareLink;
        existingCertificate.imageSquarePublicId = imageSquarePublicId;
        existingCertificate.imageCoverLink = imageCoverLink;
        existingCertificate.imageCoverPublicId = imageCoverPublicId;
        existingCertificate.jobOpportunity = jobOpportunity;
        existingCertificate.entryRequirement = entryRequirement;
        existingCertificate.packagingRule = packagingRule;
        existingCertificate.coreUnits = coreUnits;
        existingCertificate.electiveUnits = electiveUnits;
        existingCertificate.index = newIndex;

        // Save the updated service to the database
        const updatedService = await existingCertificate.save();

        // Send back a success response with the updated service data
        return NextResponse.json({ success: true, data: updatedService });
    } catch (error) {
        console.error('Error updating service:', error);
        // Send an error response
        return new Response(JSON.stringify({ message: 'Error updating data', error: error.message }), { status: 500 });
    }
}
