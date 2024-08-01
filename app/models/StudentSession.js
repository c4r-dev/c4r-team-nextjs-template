import mongoose from 'mongoose';

const StudentSessionSchema = new mongoose.Schema({
  name: String,
  type: String,
  session: String
});

const StudentSession = mongoose.models.StudentSession || mongoose.model('StudentSession', StudentSessionSchema);

export default StudentSession;