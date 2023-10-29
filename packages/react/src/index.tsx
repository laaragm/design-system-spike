import { ComponentProps } from "react";

import { styled } from "./styles";

export const Button = styled("button", {
    fontFamily: "$default",
    fontWeight: "$semiBold",
    color: "$black",
    backgroundColor: "$blue100",
    borderRadius: "$md",
    border: 0,

    variants: {
        size: {
            small: {
                fontSize: "$sm",
                padding: "0.5rem 1rem",
            },
            medium: {
                fontSize: "$md",
                padding: "0.75rem 2rem",
            },
            large: {
                fontSize: "$lg",
                padding: "0.75rem 2.5rem",
            },
        },
    },

    defaultVariants: {
        size: "medium",
    },
});

export type ButtonProps = ComponentProps<typeof Button>;
