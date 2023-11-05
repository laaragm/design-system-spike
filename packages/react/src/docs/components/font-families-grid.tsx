import { fonts } from "@larag-ui/tokens";
import "../styles/font-families-grid.css";

export const FontFamiliesGrid = () => {
    return (
        <div className="font-families-grid">
            {Object.entries(fonts).map(([name, family]) => (
                <div className="font-family-box">
                    <h2 style={{ fontFamily: family }}>{name.charAt(0).toUpperCase() + name.slice(1)}</h2>
                    <p style={{ fontFamily: family }}>{family}</p>
                </div>
            ))}
        </div>
    );
};
