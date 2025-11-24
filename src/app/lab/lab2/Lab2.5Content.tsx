"use client"

import { useState } from "react"

export default function Lab25Content() {
    const [list, setList] = useState<number[]>([])
    const [value, setValue] = useState<number>(0)
    const [sum, setSum] = useState<number>(0)

    function handleAdd() {
        setSum(sum + value)
        setList([...list, value])
    }

    return (
        <div className="lab25">
            {list.map((e) => {e})}
            <p>Sum : {sum}</p>
            <input
                type="number"
                id="number-in"
                onChange={(e) => setValue(Number(e.target.value))}
            />
            <button onClick={handleAdd}>Add</button>

        </div>
    )
}