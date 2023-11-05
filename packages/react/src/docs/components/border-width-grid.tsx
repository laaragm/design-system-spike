import { borderWidths } from "@larag-ui/tokens";

import "../styles/border-width-grid.css";

export function BorderWidthGrid() {
    return (
        <div className="border-width-grid">
            {Object.entries(borderWidths).map(([key, value]) => (
                <BorderWidthBox key={key} borderWidthKey={key} borderWidthValue={value} />
            ))}
        </div>
    );
}

interface BorderWidthBoxProps {
    borderWidthKey: string;
    borderWidthValue: string;
}

const BorderWidthBox: React.FC<BorderWidthBoxProps> = ({ borderWidthKey, borderWidthValue }) => (
    <div className="border-width-box">
        <div className="border-width-content">
            <strong>${borderWidthKey}</strong>
            <span>{borderWidthValue}</span>
            <div className="border-sample" style={{ borderWidth: borderWidthValue }}></div>
        </div>
    </div>
);
