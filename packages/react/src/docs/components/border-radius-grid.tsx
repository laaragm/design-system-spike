import React, { ReactNode } from "react";

import "../styles/token-grid.css";

interface TokenGridProps {
    tokens: { [key: string]: string | number };
    renderToken: (tokenName: string, tokenValue: string | number) => ReactNode;
}

export const TokenGrid: React.FC<TokenGridProps> = ({ tokens, renderToken }) => {
    return (
        <div className="token-grid">
            {Object.entries(tokens).map(([key, value]) => (
                <div key={key} className="token-box">
                    {renderToken(key, value)}
                    <div className="token-label">
                        <strong>{key}</strong>
                        <span>{value}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};
