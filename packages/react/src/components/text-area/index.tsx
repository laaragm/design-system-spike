import { ComponentProps, ElementRef, forwardRef } from "react";

import { StyledTextArea } from "./styles";

export interface TextAreaProps extends ComponentProps<typeof StyledTextArea> {}

export const TextArea = forwardRef<ElementRef<typeof StyledTextArea>, TextAreaProps>((props, ref) => {
    return <StyledTextArea ref={ref} {...props} />;
});

TextArea.displayName = "TextArea";
