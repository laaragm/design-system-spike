import { ElementType } from "react";
import { ComponentProps } from "@stitches/react";

import { styled } from "../styles";

export const Text = styled("p", {
    fontFamily: "$default",
    lineHeight: "$body",
    color: "$contentPrimary",
    margin: 0,
    variants: {
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
        size: "md",
    },
});

export type TextProps = ComponentProps<typeof Text> & { as?: ElementType };
