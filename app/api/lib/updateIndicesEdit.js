import { Service } from "@/app/Models/models";

export async function updateIndicesEdit(newIndex, oldIndex) {
    if (newIndex === oldIndex) return;

    // If new index is lower, increment the indices in the range [newIndex, oldIndex - 1]
    if (newIndex < oldIndex) {
        await Service.updateMany(
            { index: { $gte: newIndex, $lt: oldIndex } },
            { $inc: { index: 1 } }
        );
    }

    // If new index is higher, decrement the indices in the range [oldIndex + 1, newIndex]
    if (newIndex > oldIndex) {
        await Service.updateMany(
            { index: { $gt: oldIndex, $lte: newIndex } },
            { $inc: { index: -1 } }
        );
    }

    // Finally, update the index of the item being moved
    await Service.updateOne({ index: oldIndex }, { $set: { index: newIndex } });
}
