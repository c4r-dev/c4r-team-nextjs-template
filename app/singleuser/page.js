'use client'

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from 'react';

import Image from 'next/image';
import Raven1 from "../assets/feedback-button-1.svg"

export default function SingleUser() {

  const searchParams = useSearchParams()
  const [data, setData] = useState('')

  useEffect(() => {

    const fetchData = async () => {

      const name = searchParams.get("name")
      console.log(name)

      try {
        const response = await fetch(`/api/singleuser?name=${name}`)
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [searchParams]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>

      <div>
        <h1>data.name: {data.name}</h1>
        <h1>data.type: {data.type}</h1>
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