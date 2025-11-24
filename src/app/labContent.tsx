"use client"

import Lab21Content from "./lab/lab2/Lab2.1Content";
import Lab22Content from "./lab/lab2/Lab2.2Content";
import Lab25Content from "./lab/lab2/Lab2.5Content";

export default function LabContent({ selectedLab }: { selectedLab: string }) {
    return (
        <div className="lab-content">
            {selectedLab === "" && <p>Please select a lab.</p>}
            {selectedLab === "lab21" && <Lab21Content />}
            {selectedLab === "lab22" && <Lab22Content />}
            {selectedLab === "lab25" && <Lab25Content />}
        </div>
    )
}