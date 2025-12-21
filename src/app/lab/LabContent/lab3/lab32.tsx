"use client"

import { useState } from "react"

export default function Home(){
    const [form,setForm] = useState({name: '' , address : ''})

    const handlePsot = async() => {
        const res = await fetch('https://weblab.localapp.cc/store', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form),
        })
        if(res.ok) alert('Saved')
    }
    return (
        <div>
            <input type="text" onChange={e => setForm({...form, name: e.target.value})}/>
            <input type="text" onChange={e => setForm({...form , address: e.target.value})}/>
            <button onClick={handlePsot}>Post</button>
        </div>
    )
}