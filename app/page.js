"use client"

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Image from 'next/image';
import Raven1 from "./assets/feedback-button-1.svg";

export default function Home() {

  const router = useRouter();

  const [inputValue, setInputValue] = useState('');
  const [users, setUsers] = useState([])

  useEffect(() => {

    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/users');
        const data = await response.json();
        setUsers(data)
      } catch (error) {
        alert("User Invalid", error);
      }
    };

    fetchUsers()
  }, [])

  if (!users) return <div>Searching...</div>

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleNavigation = () => {

    users.forEach((user) => {
      if (user.name === inputValue) {
        router.push(`/inputSession?name=${user.name}&type=${user.type}`);
      }
    })

  };

  return (
    <>
      <div>
        <h1>Login Page</h1>
      </div>

      <div>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Input Login Name"
        />
      </div>
      <div>
        <br></br>
        <button onClick={handleNavigation}>Login</button>
      </div>
      <div>
        <br></br>
        <Image
          priority
          src={Raven1}
          alt="Follow us at c4r.io"
        />
      </div>
    </>
  );
}
