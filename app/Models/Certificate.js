import mongoose from 'mongoose';

const certificateSchema = new mongoose.Schema({
  service: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Service",  // Reference to Service model
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
  link: {
    type: String,
    unique: true,
  },
  imageSquareLink: {
    type: String,
    required: true,
  },
  imageSquarePublicId: {
    type: String,
    required: true,
  },
  imageCoverLink: {
    type: String,
    required: true,
  },
  imageCoverPublicId: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  jobOpportunity: {
    type: String,
    required: true,
  },
  entryRequirement: {
    type: String,
    required: true,
  },
  packagingRule: {
    type: String,
    required: true,
  },
  coreUnits: {
    type: String,  // Core units as a string
    required: true,
  },
  electiveUnits: {
    type: String,  // Elective units as a string
    required: true,
  },
}, { timestamps: true });

certificateSchema.pre('save', function (next) {
  if (this.isModified('title')) {
    this.link = this.title
      .replace(/[^a-zA-Z0-9\s]/g, '')   // Remove non-alphanumeric characters
      .toLowerCase()
      .replace(/\s+/g, '-')             // Replace spaces with hyphens
      .replace(/-+/g, '-')              // Remove consecutive hyphens
      .replace(/^-|-$/g, '');           // Trim hyphens from the start and end
  }
  next();
});

export default certificateSchema;
