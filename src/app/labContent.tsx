"use client"

import Lab21Content from "./lab2.1/Lab2.1Content";
import Lab22Content from "./lab2.2/Lab2.2Content";

export default function LabContent({ selectedLab }: { selectedLab: string }) {
    return (
        <div className="lab-content">
            {selectedLab === "" && <p>Please select a lab.</p>}
            {selectedLab === "lab21" && <Lab21Content />}
            {selectedLab === "lab22" && <Lab22Content />}
        </div>
    )
}