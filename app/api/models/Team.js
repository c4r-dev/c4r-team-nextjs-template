// models/Team.js
import mongoose from 'mongoose';

const TeamSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});

export default mongoose.models.Team || mongoose.model('Team', TeamSchema);
