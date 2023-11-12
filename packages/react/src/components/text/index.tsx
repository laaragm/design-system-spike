import { ElementType } from "react";
import { ComponentProps } from "@stitches/react";

import { styled } from "../../styles";

export const Text = styled("p", {
    fontFamily: "$default",
    lineHeight: "$body",
    margin: 0,
    fontSize: "$md",
    "@mobile": {
        fontSize: "$sm",
    },
    "@tablet": {
        fontSize: "$md",
    },
    "@laptop": {
        fontSize: "$lg",
    },
    "@desktop": {
        fontSize: "$xl",
    },
    variants: {
        color: {
            primary: { color: "$contentPrimary" },
            secondary: { color: "$contentSecondary" },
            tertiary: { color: "$contentTertiary" },
            accent: { color: "$contentAccent" },
            placeholder: { color: "$placeholder" },
            error: { color: "$error" },
            success: { color: "$success" },
            info: { color: "$info" },
            warning: { color: "$warning" },
        },
        size: {
            xxs: { fontSize: "$xxs" },
            xs: { fontSize: "$xs" },
            sm: { fontSize: "$sm" },
            md: { fontSize: "$md" },
            lg: { fontSize: "$lg" },
            xl: { fontSize: "$xl" },
            "2xl": { fontSize: "$2xl" },
            "3xl": { fontSize: "$3xl" },
            "4xl": { fontSize: "$4xl" },
        },
    },
    defaultVariants: {
        color: "primary",
        size: "md",
    },
});

export type TextProps = ComponentProps<typeof Text> & { as?: ElementType };
