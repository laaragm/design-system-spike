import { ElementType } from "react";
import { ComponentProps } from "@stitches/react";

import { styled } from "../../styles";

export const Button = styled("button", {
    all: "unset",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    userSelect: "none",
    whiteSpace: "nowrap",
    fontFamily: "$default",
    boxSizing: "border-box",
    cursor: "pointer",
    transition: "background-color 0.2s ease-in-out, color 0.2s ease-in-out",
    fontSize: "$sm",
    fontWeight: "$medium",
    borderRadius: "$md",
    padding: "0 $4",
    variants: {
        variant: {
            primary: {
                color: "$contentInversePrimary",
                background: "$contentAccent",
                "&:not(:disabled):hover": {
                    background: "$placeholder",
                },
                "&:disabled": {
                    backgroundColor: "$backgroundTertiary",
                },
            },
            secondary: {
                color: "$contentAccent",
                border: `2px solid $contentAccent`,
                "&:not(:disabled):hover": {
                    background: "$contentAccent",
                    color: "$contentInversePrimary",
                },
                "&:disabled": {
                    color: "$borderOpaque",
                    borderColor: "$borderOpaque",
                },
            },
            tertiary: {
                color: "$contentInversePrimary",
                background: "$contentSecondary",
                "&:not(:disabled):hover": {
                    background: "$contentInverseTertiary",
                },
                "&:disabled": {
                    color: "$contentTertiary",
                },
            },
        },
        size: {
            sm: {
                minWidth: 100,
                height: "2.25rem",
            },
            md: {
                minWidth: 120,
                height: "2.75rem",
            },
            lg: {
                minWidth: 140,
                height: "3rem",
            },
        },
    },
    defaultVariants: {
        variant: "primary",
        size: "md",
    },
});

export type ButtonProps = ComponentProps<typeof Button> & { as?: ElementType };
