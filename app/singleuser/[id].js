
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const UserPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetch(`/api/singleuser/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setUser(data.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!user) return <p>No user found</p>;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.type}</p>
    </div>
  );
};

export default UserPage;
