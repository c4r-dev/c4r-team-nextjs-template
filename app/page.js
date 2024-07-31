

import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  const handleNavigation = () => {
    router.push('/joinTeam');
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={handleNavigation}>Join Team</button>
    </div>
  );
}
