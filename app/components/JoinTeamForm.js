// components/JoinTeamForm.js
import { useState } from 'react';
import { joinTeam } from '../utils/joinTeam';

export default function JoinTeamForm({ userId }) {
  const [teamId, setTeamId] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await joinTeam(userId, teamId);
      setMessage(data.message);
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="teamId">Team ID:</label>
      <input
        type="text"
        id="teamId"
        value={teamId}
        onChange={(e) => setTeamId(e.target.value)}
        required
      />
      <button type="submit">Join Team</button>
      {message && <p>{message}</p>}
    </form>
  );
}
