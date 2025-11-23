"use client"

import { useState } from "react"
import "./style.css"

export default function Home() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState("")
  return (
    <div className="lab">
      <div className="lab1">
        {count}
        <button onClick={() => setCount(count + 1)}>add</button>
        <button onClick={() => setCount(count - 1)}>del</button>
      </div>
      <div className="lab2">
        {text}
        <input type="text" name="text" id="#" onChange={(e) => setText(e.target.value)} />
      </div>
    </div>
  )
}