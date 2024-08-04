'use client'

import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/router';

import Image from 'next/image';
import Raven1 from "../assets/feedback-button-1.svg"

export default function SingleUser() {

  const [name, setName] = useState('')
  const [user, setUser] = useState('')

  function Search() {
    const searchParams = useSearchParams()
    setName(searchParams.get("name"))
    return
  }

  useEffect(() => {

    const fetchUsers = async () => {

      try {
        const response = await fetch(`/api/singleuser/${name}`);
        const data = await response.json();
        setUser(data)
      } catch (error) {
        alert("User Invalid", error);
      }
    };

    fetchUsers()

  }, []);

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