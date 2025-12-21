"use client"

import { useState } from "react"

export default function Home(){
    const [list , setList] = useState<number[]>([])
    const [value , setValue] = useState(0)
    const [sum , setSum] = useState(0)


    function handlerAdd(){
        setList([...list,value])
        setSum(sum+value)
    }

    return (
        <div>
            {list.map((e,index) => (
                <div key={index}>{e}</div>
            ))}
            <p>Sum : {sum}</p>

            <input type="number" name="" id="" onChange={(e) => setValue(Number(e.target.value))}/>
            <button onClick={handlerAdd}>Add</button>
        </div>
    )
}