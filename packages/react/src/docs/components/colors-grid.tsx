import { getContrast } from "polished";
import { baseColors, core } from "@larag-ui/tokens";

interface ColorsGridProps {
    type: "base" | "core";
}

interface ColorBoxProps {
    name: string;
    value: string;
}

const colorBoxStyle = {
    border: "1px solid #000000",
    padding: "1.5rem",
    margin: "1rem 0",
};

const getBoxStyles = (bgColor: string) => ({
    color: getContrast(bgColor, "#FFF") < 3 ? "#000" : "#FFF",
    display: "flex",
    justifyContent: "space-between",
});

const ColorBox: React.FC<ColorBoxProps> = ({ name, value }) => (
    <div style={{ ...colorBoxStyle, backgroundColor: value }}>
        <div style={getBoxStyles(value)}>
            <strong>${name}</strong>
            <span>{value}</span>
        </div>
    </div>
);

export function ColorsGrid({ type }: ColorsGridProps) {
    const colors = type === "core" ? core : baseColors;

    return (
        <div>
            {Object.entries(colors).map(([key, value]) => (
                <ColorBox key={key} name={key} value={value} />
            ))}
        </div>
    );
}
