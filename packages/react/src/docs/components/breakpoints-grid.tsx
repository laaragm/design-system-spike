import { breakpoints } from "@larag-ui/tokens";

import "../styles/breakpoints-grid.css";

export const BreakpointsGrid = () => {
    return (
        <table className="breakpoints-table">
            <thead>
                <tr>
                    <th>Breakpoint</th>
                    <th>Minimum Width</th>
                </tr>
            </thead>
            <tbody>
                {Object.entries(breakpoints).map(([device, minWidth]) => (
                    <tr key={device}>
                        <td>{device.charAt(0).toUpperCase() + device.slice(1)}</td>
                        <td>{minWidth}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
