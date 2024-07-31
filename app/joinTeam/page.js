"use client"

import JoinTeamForm from '../components/JoinTeamForm';
import { useSession } from 'next-auth/client';

export default function JoinTeamPage() {
  const [session, loading] = useSession();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!session) {
    return <p>You need to be authenticated to join a team.</p>;
  }

  return (
    <div>
      <h1>Join a Team</h1>
      <JoinTeamForm userId={session.user.id} />
    </div>
  );
}
