"use client";


export default function Header({ setSelectedLab }: { setSelectedLab: (lab: string) => void }) {
    return (
        <div className="header">
            <select defaultValue="" onChange={(e) => setSelectedLab(e.target.value)}>
                <option value="" disabled>Choose a lab</option>
                <option value="lab21">Lab2.1</option>
                <option value="lab22">Lab2.2</option>
                <option value="lab25_1">Lab2.5_1</option>
                <option value="lab25_2">Lab2.5_2</option>
                <option value="lab31">Lab3.1</option>
                <option value="lab32">Lab3.2</option>
                <option value="lab41">Lab4.1 (Login)</option>
                <option value="lab42">Lab4.2 (Register)</option>
            </select>
        </div>
    );
}
