import { ComponentProps, ElementRef, forwardRef } from "react";

import { styled } from "../../styles";

const StyledTextArea = styled("textarea", {
    width: "100%",
    padding: "$3",
    fontSize: "$md",
    backgroundColor: "$backgroundSecondary",
    fontFamily: "$default",
    boxSizing: "border-box",
    borderRadius: "$sm",
    border: "1px solid $borderSelected",
    transition: "border-color 0.3s",
    resize: "vertical",
    lineHeight: "$body",
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

export interface TextAreaProps extends ComponentProps<typeof StyledTextArea> {}

export const TextArea = forwardRef<ElementRef<typeof StyledTextArea>, TextAreaProps>((props, ref) => {
    return <StyledTextArea ref={ref} {...props} />;
});

TextArea.displayName = "TextArea";
