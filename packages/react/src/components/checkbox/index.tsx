import React, { ComponentProps } from "react";
import { Check } from "phosphor-react";

import { StyledCheckbox, StyledIndicator } from "./styles";

export interface CheckboxProps extends ComponentProps<typeof StyledCheckbox> {
    size?: "sm" | "md" | "lg";
}

export const Checkbox = React.forwardRef<HTMLButtonElement, CheckboxProps>(({ size = "md", ...props }, ref) => (
    <StyledCheckbox size={size} ref={ref} {...props}>
        <StyledIndicator size={size} asChild>
            <Check weight="bold" />
        </StyledIndicator>
    </StyledCheckbox>
));

Checkbox.displayName = "Checkbox";
