import { Service } from "@/app/Models/models";


// Function to move an item from SourceModel to DestinationModel

export async function updateService(itemId, sourceId, destinationId) {

    try {
        // Step 1: Find the source document and remove the item from it
        const sourceDoc = await Service.findById(sourceId);
        if (!sourceDoc) {
            throw new Error('Source document not found');
        }

        // Remove the item from the source model's items array
        sourceDoc.certificates.pull(itemId);
        await sourceDoc.save(); // Save the updated source document

        // Step 2: Find or create the destination document
        const destinationDoc = await Service.findById(destinationId);
        if (!destinationDoc) {
            throw new Error('Source document not found');
        }

        // Add the item to the destination model's items array
        destinationDoc.certificates.push(itemId);
        await destinationDoc.save(); // Save the updated destination document
    } catch (error) {
        console.error('Error moving item:', error);
    }
};

