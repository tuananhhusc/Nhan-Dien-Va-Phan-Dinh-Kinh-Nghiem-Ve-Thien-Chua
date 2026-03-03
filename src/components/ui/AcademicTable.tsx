import React from "react";

interface AcademicTableProps {
    headers: string[];
    rows: string[][];
    caption?: string;
}

export default function AcademicTable({
    headers,
    rows,
    caption,
}: AcademicTableProps) {
    return (
        <div className="my-8 overflow-x-auto animate-fade-in-up">
            {caption && (
                <p
                    className="text-sm font-semibold mb-3 text-center"
                    style={{
                        fontFamily: "var(--font-display)",
                        color: "var(--cardinal-accent)",
                    }}
                >
                    {caption}
                </p>
            )}
            <table className="academic-table">
                <thead>
                    <tr>
                        {headers.map((h, i) => (
                            <th key={i}>{h}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, ri) => (
                        <tr key={ri}>
                            {row.map((cell, ci) => (
                                <td key={ci}>{cell}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
