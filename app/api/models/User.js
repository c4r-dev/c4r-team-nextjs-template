// models/User.js
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  team: { type: mongoose.Schema.Types.ObjectId, ref: 'Team' },
});

export default mongoose.models.User || mongoose.model('User', UserSchema);
