"use client"

import Lab21Content from "./lab/LabContent/lab2/Lab2.1Content";
import Lab22Content from "./lab/LabContent/lab2/Lab2.2Content";
import Lab25Content_1 from "./lab/LabContent/Lab2.5/Lab2.5Content-1";
import Lab25Content_2 from "./lab/LabContent/Lab2.5/Lab2.5Content-2";
import Lab31Content from "./lab/LabContent/lab3/lab31";
import Lab32Content from "./lab/LabContent/lab3/lab32";
import Lab41Content from "./lab/LabContent/lab4/lab41";
import Lab42Content from "./lab/LabContent/lab4/lab42";

export default function LabContent({ selectedLab }: { selectedLab: string }) {
    return (
        <div className="lab-content">
            {selectedLab === "" && <p>Please select a lab.</p>}
            {selectedLab === "lab21" && <Lab21Content />}
            {selectedLab === "lab22" && <Lab22Content />}
            {selectedLab === "lab25_1" && <Lab25Content_1 />}
            {selectedLab === "lab25_2" && <Lab25Content_2 />}
            {selectedLab === "lab31" && <Lab31Content />}
            {selectedLab === "lab32" && <Lab32Content />}
            {selectedLab === "lab41" && <Lab41Content />}
            {selectedLab === "lab42" && <Lab42Content />}
        </div>
    )
}