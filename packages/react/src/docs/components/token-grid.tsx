import React from "react";

import "../styles/token-grid.css";

interface TokenProps {
    tokens: { [key: string]: number | string };
    type: TokenType;
}

export type TokenType = "borderRadius" | "opacity";

export const getTokenStyle = (type: TokenType, value: string | number): React.CSSProperties => {
    const styles: { [key in TokenType]: React.CSSProperties } = {
        borderRadius: { borderRadius: value },
        opacity: { opacity: value },
    };
    return styles[type];
};

export const TokenGrid: React.FC<TokenProps> = ({ tokens, type }) => {
    return (
        <div className="token-grid">
            {Object.entries(tokens).map(([key, value]) => {
                const style = getTokenStyle(type, value);
                return (
                    <div key={key} className="token-box">
                        <div className="token-sample" style={style}></div>
                        <div className="token-label">
                            <strong>{key}</strong>
                            <span>{value}</span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
