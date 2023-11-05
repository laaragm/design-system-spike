import React from "react";

import "../styles/shadow-grid.css";

interface ShadowGridProps {
    shadows: Record<string, string>;
}

export const ShadowGrid: React.FC<ShadowGridProps> = ({ shadows }) => {
    return (
        <div className="shadow-grid">
            {Object.entries(shadows).map(([name, value]) => (
                <div key={name} className="shadow-sample" style={{ boxShadow: value }}>
                    <span>{name}</span>
                </div>
            ))}
        </div>
    );
};
