import { ComponentProps, ElementRef, forwardRef } from "react";

import { styled } from "../../styles";

const Input = styled("input", {
    width: "100%",
    backgroundColor: "$backgroundSecondary",
    padding: "0.75rem",
    fontSize: "$md",
    fontFamily: "$default",
    boxSizing: "border-box",
    borderRadius: "$sm",
    border: "1px solid $borderSelected",
    transition: "border-color 0.3s",
    "&:hover": {
        borderColor: "$contentAccent",
    },
    "&:focus": {
        outline: 0,
        borderColor: "$contentPrimary",
    },
    "&:disabled": {
        opacity: 0.3,
        cursor: "not-allowed",
    },
});

export interface TextInputProps extends ComponentProps<typeof Input> {}

export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>((props, ref) => {
    return <Input ref={ref} {...props} />;
});

TextInput.displayName = "TextInput";
