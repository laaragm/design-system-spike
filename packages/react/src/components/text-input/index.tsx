import { ComponentProps, ElementRef, forwardRef } from "react";

import { StyledInput } from "./styles";

export interface TextInputProps extends ComponentProps<typeof StyledInput> {}

export const TextInput = forwardRef<ElementRef<typeof StyledInput>, TextInputProps>((props, ref) => {
    return <StyledInput ref={ref} {...props} />;
});

TextInput.displayName = "TextInput";
