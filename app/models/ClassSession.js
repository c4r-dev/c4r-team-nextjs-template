import mongoose from 'mongoose';

const ClassSessionSchema = new mongoose.Schema({
  name: String,
  type: String,
  session: String
});

const User = mongoose.models.ClassSessionSchema || mongoose.model('ClassSession', ClassSessionSchema);

export default User;