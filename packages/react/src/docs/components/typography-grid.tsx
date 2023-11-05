import React from "react";

import "../styles/typography-grid.css";

interface TypographyProps {
    items: { [key: string]: string };
    type: StyleType;
}

interface TypographyBoxProps {
    itemKey: string;
    value: string | number;
    type: StyleType;
}

type StyleType = "family" | "size" | "weight" | "lineHeight";

export const TypographyGrid = ({ items, type }: TypographyProps) => {
    return (
        <div className="typography-grid">
            {Object.entries(items).map(([key, value]) => (
                <TypographyBox key={key} itemKey={key} value={value} type={type} />
            ))}
        </div>
    );
};

const styleTypes: { [key in StyleType]: React.CSSProperties } = {
    family: { fontFamily: "" },
    size: { fontSize: "" },
    weight: { fontWeight: "" },
    lineHeight: { lineHeight: "" },
};

const generateStyle = (type: StyleType, value: string | number): React.CSSProperties => {
    return { ...(styleTypes[type] || {}), [styleTypes[type] ? type : ""]: value };
};

const TypographyBox: React.FC<TypographyBoxProps> = ({ itemKey, value, type }) => {
    const style = generateStyle(type, value);
    return (
        <div className="typography-box">
            <div className="typography-content">
                <strong>{itemKey}</strong>
                <span style={style}>{value}</span>
            </div>
        </div>
    );
};
