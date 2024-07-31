"use client"

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleNavigation = () => {
    router.push('/');
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={handleNavigation}>Join Team</button>
    </div>
  );
}
