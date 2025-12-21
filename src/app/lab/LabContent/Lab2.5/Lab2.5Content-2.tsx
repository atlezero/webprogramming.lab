"use client"

import { useState } from "react"

interface Data{
    name : string
    price : string
}

export default function Home(){
    const [list , setList] = useState<Data[]>([])
    const [name ,setName] = useState('')
    const [price , setPrice] = useState('')

    function handlerAdd(){
        if (name && price){
            setList([...list , {name ,price}])
            setName('')
            setPrice('')
        }
    }

    return(
        <div>
            {list.map((item , index) => (
                <div key={index}>
                    {item.name} - {item.price}
                </div>
            ))}
            <input type="text" onChange={(e) => setName(e.target.value)}/>
            <input type="text" onChange={(e) => setPrice(e.target.value)}/>
            <button onClick={handlerAdd}>Add</button>
        </div>
    )
}