import { ComponentProps } from "@stitches/react";

import { styled } from "../styles";

export const Heading = styled("h2", {
    fontFamily: "$default",
    lineHeight: "$heading",
    fontWeight: "$bold",
    margin: 0,
    variants: {
        color: {
            primary: { color: "$contentPrimary" },
            secondary: { color: "$contentSecondary" },
            tertiary: { color: "$contentTertiary" },
        },
        as: {
            h1: {
                fontSize: "$4xl",
                "@mobile": { fontSize: "$3xl" },
                "@tablet": { fontSize: "$4xl" },
                "@laptop": { fontSize: "$4xl" },
                "@desktop": { fontSize: "$4xl" },
            },
            h2: {
                fontSize: "$3xl",
                "@mobile": { fontSize: "$2xl" },
                "@tablet": { fontSize: "$3xl" },
                "@laptop": { fontSize: "$3xl" },
                "@desktop": { fontSize: "$3xl" },
            },
            h3: {
                fontSize: "$2xl",
                "@mobile": { fontSize: "$xl" },
                "@tablet": { fontSize: "$2xl" },
                "@laptop": { fontSize: "$2xl" },
                "@desktop": { fontSize: "$2xl" },
            },
            h4: {
                fontSize: "$xl",
                "@mobile": { fontSize: "$lg" },
                "@tablet": { fontSize: "$xl" },
                "@laptop": { fontSize: "$xl" },
                "@desktop": { fontSize: "$xl" },
            },
            h5: {
                fontSize: "$lg",
                "@mobile": { fontSize: "$md" },
                "@tablet": { fontSize: "$lg" },
                "@laptop": { fontSize: "$lg" },
                "@desktop": { fontSize: "$lg" },
            },
            h6: {
                fontSize: "$md",
                "@mobile": { fontSize: "$sm" },
                "@tablet": { fontSize: "$md" },
                "@laptop": { fontSize: "$md" },
                "@desktop": { fontSize: "$md" },
            },
        },
    },
    defaultVariants: {
        color: "primary",
        as: "h2",
    },
});

export type HeadingProps = ComponentProps<typeof Heading>;
