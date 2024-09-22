import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
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
    certificates: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Certificate",  // Reference to Certificate model
        },
    ],
}, { timestamps: true });

serviceSchema.pre('save', function (next) {
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

export default serviceSchema;
