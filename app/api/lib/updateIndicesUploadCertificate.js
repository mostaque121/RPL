import { Certificate } from "@/app/Models/models";

export async function updateIndicesUploadCertificate(newIndex, serviceRef) {
    // Find all services with an index greater than or equal to newIndex
    const certificateToUpdate = await Certificate.find({ service: serviceRef, index: { $gte: newIndex } });

    // Increment the index of each service by 1
    for (const certificate of certificateToUpdate) {
        certificate.index += 1;
        await certificate.save();
    }
}
