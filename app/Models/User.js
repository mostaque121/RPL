import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, default: '' }, // Optional if you want to store it
  image: { type: String, default: '' },
  signInProvider: { type: String, required: true },
  identifier: { type: String, required: true, unique: true }, 
  role: { type: String, default: 'user' },
});

export default mongoose.models.User || mongoose.model('User', userSchema);
