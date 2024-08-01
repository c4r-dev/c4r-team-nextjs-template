'use client'

import React, { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import Image from 'next/image';
import Raven1 from "../assets/feedback-button-1.svg"

export default function InputSession() {

  const [session, setSession] = useState('')
  const [name, setName] = useState('')
  const [type, setType] = useState('')

  function Search() {
    const searchParams = useSearchParams()
    setName(searchParams.get("name"))
    setType(searchParams.get("type"))
    return
  }

  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!session) {
      alert("Session is required to continue.");
      return;
    }

    router.push(`/studentTeams?name=${name}&type=${type}&session=${session}`);

  };

  return (

    <>
      <Suspense>
        <Search />
      </Suspense>

      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setSession(e.target.value)}
          value={session}
          type="text"
          placeholder="Input Session"
        />
        <div>
          <br></br>
          <button type="submit">
            JOIN SESSION and JOIN A TEAM
          </button>
        </div>
      </form>

      <br></br>
      <Image
        priority
        src={Raven1}
        alt="Follow us at c4r.io"
      />
    </>
  );
}

export const dynamic = 'force-dynamic';