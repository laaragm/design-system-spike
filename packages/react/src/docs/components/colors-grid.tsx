import { getContrast } from "polished";
import { baseColors, core } from "@larag-ui/tokens";

import "../styles/colors-grid.css";

interface ColorsGridProps {
    type: "base" | "core";
}

export function ColorsGrid({ type }: ColorsGridProps) {
    const colors = type === "core" ? core : baseColors;

    return (
        <div>
            {Object.entries(colors).map(([key, value]) => (
                <ColorBox key={key} colorKey={key} colorValue={value} />
            ))}
        </div>
    );
}

interface ColorBoxProps {
    colorKey: string;
    colorValue: string;
}

const ColorBox: React.FC<ColorBoxProps> = ({ colorKey, colorValue }) => (
    <div className="color-box" style={{ backgroundColor: colorValue }}>
        <div className={`color-content ${getContrast(colorValue, "#FFF") < 3 ? "dark-text" : "light-text"}`}>
            <strong>${colorKey}</strong>
            <span>{colorValue}</span>
        </div>
    </div>
);
