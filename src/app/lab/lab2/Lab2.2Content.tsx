"use client"

import { useState } from "react"

export default function Lab22Content() {
    const [text, setText] = useState("")
    return (
        <div className="lab22 lab-con ">
            <h1>Lab2.2</h1>
            <input type="text" name="" id="" onChange={(e) => setText(e.target.value)} />
            {text}
        </div>
    )
}