import mongoose from 'mongoose';

const ImageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  publicId: {
    type: String,
  },
});

export const ImageModel = mongoose.models.Image || mongoose.model('Image', ImageSchema);
