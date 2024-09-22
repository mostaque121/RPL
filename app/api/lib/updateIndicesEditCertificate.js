import { Certificate } from "@/app/Models/models";

export async function updateIndicesEditCertificate(serviceRef, newIndex, oldIndex) {
    if (newIndex === oldIndex) return;

    // If new index is lower, increment the indices in the range [newIndex, oldIndex - 1]
    if (newIndex < oldIndex) {
        await Certificate.updateMany(
            { service: serviceRef, index: { $gte: newIndex, $lt: oldIndex } },
            { $inc: { index: 1 } }
        );
    }

    // If new index is higher, decrement the indices in the range [oldIndex + 1, newIndex]
    if (newIndex > oldIndex) {
        await Certificate.updateMany(
            { service: serviceRef, index: { $gt: oldIndex, $lte: newIndex } },
            { $inc: { index: -1 } }
        );
    }

    // Finally, update the index of the item being moved
    await Certificate.updateOne({ index: oldIndex }, { $set: { index: newIndex } });
}
