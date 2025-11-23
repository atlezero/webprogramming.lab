"use client";
import { useState } from "react";

export default function lab() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState("")

  return (
    <div className="home">
      <h1>Web Programming Lab</h1>
      <select name="" id="">
        <option value="">Select</option>
        <option value="">Lab 1</option>
        <option value="">Lab 2</option>
        <option value="">Lab 3</option>
      </select>
    </div>
  )
}