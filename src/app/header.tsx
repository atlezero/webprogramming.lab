"use client";


export default function Header({ setSelectedLab }: { setSelectedLab: (lab: string) => void }) {
    return (
        <div className="header">
            <select defaultValue="" onChange={(e) => setSelectedLab(e.target.value)}>
                <option value="" disabled>Choose a lab</option>
                <option value="lab21">Lab2.1</option>
                <option value="lab22">Lab2.2</option>
                <option value="lab25">Lab2.5</option>
            </select>
        </div>
    );
}
