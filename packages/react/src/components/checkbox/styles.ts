import * as CheckboxPrimitive from "@radix-ui/react-checkbox";

import { styled } from "../../styles";

export const StyledCheckbox = styled(CheckboxPrimitive.Root, {
    all: "unset",
    backgroundColor: "$backgroundSecondary",
    borderRadius: "$sm",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid $borderSelected",
    "&:hover": { backgroundColor: "$backgroundTertiary" },
    "&:disabled": { opacity: 0.3, cursor: "not-allowed" },
    '&[data-state="checked"]': { backgroundColor: "backgroundSecondary" },
    variants: {
        size: {
            sm: {
                width: "$4",
                height: "$4",
            },
            md: {
                width: "$6",
                height: "$6",
            },
            lg: {
                width: "$8",
                height: "$8",
            },
        },
    },
    defaultVariants: {
        size: "md",
    },
});

export const StyledIndicator = styled(CheckboxPrimitive.Indicator, {
    color: "$contentAccent",
    variants: {
        size: {
            sm: {
                width: "$3",
                height: "$3",
            },
            md: {
                width: "$5",
                height: "$5",
            },
            lg: {
                width: "$7",
                height: "$7",
            },
        },
    },
});
