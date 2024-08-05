'use client'

import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from "next/navigation";

import Image from 'next/image';
import Raven1 from "../assets/feedback-button-1.svg"

export default function SingleUser() {

  const [name, setName] = useState('')
  const [data, setData] = useState('')
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  function Search() {

    const searchParams = useSearchParams()
    setName(searchParams.get("name"))
    console.log(name)

    const fetchData = async () => {
      try {
        const response = await fetch(`/api/singleuser?name=${name}`, {
          method: 'GET'
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return
  }

  // useEffect(() => {

  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(`/api/singleuser?name=${name}`, {
  //         method: 'GET'
  //       });
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       const result = await response.json();
  //       setData(result);
  //     } catch (error) {
  //       setError(error.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);



  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Suspense>
        <Search />
      </Suspense>

      <div>
        <h1>{data.name}</h1>
        <p>{data.type}</p>
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