'use client'

import React, { useState, Suspense } from 'react';
import { useSearchParams } from "next/navigation";

const [name, setName] = useState('')

const getData = async () => {
    const searchParams = useSearchParams()
    setName(searchParams.get("name"))
}

const GetParam = React.lazy(() =>
        getData()
)

const ParamFetchingComponent = () => (
    <Suspense fallback={<div>Get params...</div>}>
        <GetParam />
    </Suspense>
)

export default ParamFetchingComponent;