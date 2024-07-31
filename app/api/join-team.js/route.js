
import dbConnect from '../utils/dbConnect';
import User from '../models/User';
import Team from '../models/Team';

export default async function handler(req, res) {
  const { userId, teamId } = req.body;

  await dbConnect();

  try {
    const team = await Team.findById(teamId);
    if (!team) {
      return res.status(404).json({ message: 'Team not found' });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (user.team) {
      return res.status(400).json({ message: 'User is already in a team' });
    }

    user.team = teamId;
    await user.save();

    team.members.push(userId);
    await team.save();

    res.status(200).json({ message: 'User added to team' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error });
  }
}
