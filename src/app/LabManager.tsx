"use client";

import { useState } from "react";
import Header from "./header";
import LabContent from "./labContent";

export default function LabManager() {
    const [selectedLab, setSelectedLab] = useState("");

    return (
        <div>
            <Header setSelectedLab={setSelectedLab} />
            <LabContent selectedLab={selectedLab} />
        </div>
    );
}
