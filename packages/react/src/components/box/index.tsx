import { ElementType } from "react";
import { ComponentProps } from "@stitches/react";

import { styled } from "../../styles";

export const Box = styled("div", {
    backgroundColor: "$backgroundSecondary",
    border: "1px solid $borderOpaque",
    padding: "$4",
    borderRadius: "$sm",
});

export type BoxProps = ComponentProps<typeof Box> & { as?: ElementType };
