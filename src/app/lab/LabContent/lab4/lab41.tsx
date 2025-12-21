"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Lab41() {
    const [user, setUser] = useState({ userName: "", passWord: "" });
    const router = useRouter();

    const login = async (e: React.FormEvent) => {
        e.preventDefault();
        const res = await fetch("https://weblab.localapp.cc/user-profile/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...user, id: "" }),
        }).then(r => r.json());

        if (res.data?.dataStatus === 1) router.push("/lab4/landing");
        else alert("Fail: " + (res.message || "Invalid"));
    };

    return (
        <div>
            <h2>Login (4.1)</h2>
            <form onSubmit={login}>
                <input placeholder="Username" onChange={e => setUser({ ...user, userName: e.target.value })} required />
                <input placeholder="Password" type="password" onChange={e => setUser({ ...user, passWord: e.target.value })} required />
                <button>Login</button>
            </form>
        </div>
    );
}
