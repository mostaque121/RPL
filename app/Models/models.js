// app/Models/models.js
import mongoose from 'mongoose';
import certificateSchema from './Certificate';
import serviceSchema from './Service';

const Service = mongoose.models.Service || mongoose.model('Service', serviceSchema);
const Certificate = mongoose.models.Certificate || mongoose.model('Certificate', certificateSchema);

export { Certificate, Service };

