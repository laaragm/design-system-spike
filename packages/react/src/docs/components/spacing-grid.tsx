import React from "react";

import "../styles/spacing-grid.css";

interface SpacingGridProps {
    spacings: Record<number, string>;
}

export const SpacingGrid: React.FC<SpacingGridProps> = ({ spacings }) => {
    return (
        <div className="spacing-grid">
            {Object.entries(spacings).map(([key, value]) => (
                <div key={key} className="spacing-sample" style={{ height: value }}>
                    <span className="spacing-label">{`${key}: ${value}`}</span>
                </div>
            ))}
        </div>
    );
};
