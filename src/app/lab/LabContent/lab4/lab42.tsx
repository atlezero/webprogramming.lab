"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Lab42() {
    const [user, setUser] = useState({ userName: "", passWord: "" });
    const router = useRouter();

    const reg = async (e: React.FormEvent) => {
        e.preventDefault();
        const res = await fetch("https://weblab.localapp.cc/user-profile/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...user, id: "" }),
        }).then(r => r.json());

        if (res.data?.dataStatus === 1) router.push("/lab4/landing");
        else alert("Fail: " + (res.message || "User exists"));
    };

    return (
        <div>
            <h2>Register (4.2)</h2>
            <form onSubmit={reg}>
                <input placeholder="Username" onChange={e => setUser({ ...user, userName: e.target.value })} required />
                <input placeholder="Password" type="password" onChange={e => setUser({ ...user, passWord: e.target.value })} required />
                <button>Register</button>
            </form>
        </div>
    );
}
