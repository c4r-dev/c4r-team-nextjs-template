'use client'

import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/router';

import Image from 'next/image';
import Raven1 from "../assets/feedback-button-1.svg"

export default function SingleUser() {

  const [name, setName] = useState('')
  const [user, setUser] = useState('')
  const [loading, setLoading] = useState(true)

  function Search() {
    const searchParams = useSearchParams()
    setName(searchParams.get("name"))
    return
  }

  useEffect(() => {
    if (name) {
      fetch(`/api/singleuser/${name}`)
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
  }, []);

  if (loading) return <p>Loading...</p>;
  if (!user) return <p>No user found</p>;

  return (
    <>
      <Suspense>
        <Search />
      </Suspense>

      <div>
        <h1>{user.name}</h1>
        <p>{user.type}</p>
      </div>

      <br></br>
      <Image
        priority
        src={Raven1}
        alt="Follow us at c4r.io"
      />

    </>
  );
}