'use client'

import React, { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import Image from 'next/image';
import Raven1 from "../assets/feedback-button-1.svg"

export default function InputSession() {

  const [name, setName] = useState('')
  const [type, setType] = useState('')
  const [session, setSession] = useState('')

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

    try {
      const res = await fetch("/api/studentInput", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ name, type, session }),
      });

      if (res.ok) {

      } else {
        throw new Error("Failed to create session member.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (

    <>
      <Suspense>
        <Search />
      </Suspense>

      <div className="flex-container2">
        <div>
          {name} | {type}
        </div>
        <input
          onChange={(e) => setSession(e.target.value)}
          value={session}
          className="border border-slate-500 px-8 py-2"
          type="text"
          placeholder="Input Session"
        />
        <div>
          <br></br>
          <button onSubmit={handleSubmit} type="submit">
            JOIN SESSION and JOIN A TEAM
          </button>
        </div>
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

export const dynamic = 'force-dynamic';