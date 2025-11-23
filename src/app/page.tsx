"use client";
import { useState } from "react";

export default function lab() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState("")

  return (
    <div className="home">
      <h1>Web Programming Lab</h1>
    </div>
  )
}