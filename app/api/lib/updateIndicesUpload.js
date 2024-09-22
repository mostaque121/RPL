import { Service } from "@/app/Models/models";

export async function updateIndicesUpload(newIndex) {
    // Find all services with an index greater than or equal to newIndex
    const servicesToUpdate = await Service.find({ index: { $gte: newIndex } });

    // Increment the index of each service by 1
    for (const service of servicesToUpdate) {
        service.index += 1;
        await service.save();
    }
}
