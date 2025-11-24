"use client"

import { useState } from "react"

export default function Lab21Content() {
    const [num,setNum] = useState(0)
    return (
        <div className="lab21 lab-con">
            <h1>Lab2.1</h1>
            {num}
            <br />
            <div className="lab21-btn">
            <button onClick={() => setNum(num + 1)}>add</button>
            <button onClick={() => setNum(num - 1)}>del</button>
            </div>
        </div>
    )
}