"use client"

import { useState } from "react"

interface Store{
    name:string
    address:string
}

export default function Home(){
    const [data ,setData] = useState<Store[]>([])

    const handleGet = async() => {
        const res = await fetch('https://weblab.localapp.cc/store')
        const result = await res.json()
        setData(result)
    }

    return(
        <div>
            <button onClick={handleGet}>Get</button>

            {data.map((e , index) => (
                <div key={index}>
                    {e.name}{e.address}
                </div>
            ))}
        </div>
    )
}