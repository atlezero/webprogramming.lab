"use client";
import { useRouter } from "next/navigation";

export default function LandingPage() {
    const router = useRouter();
    return (
        <div>
            <h1>Success</h1>
            <p>Welcome to Landing Page</p>
            <button onClick={() => router.back()}>Back</button>
        </div>
    );
}
