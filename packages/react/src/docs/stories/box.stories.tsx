import type { Meta, StoryObj } from "@storybook/react";

import { Text } from "../../components/text";
import { Box, BoxProps } from "../../components/box";

export default {
    type: "Box",
    component: Box,
    args: {},
} as Meta<BoxProps>;

export const Primary: StoryObj<BoxProps> = {
    args: {
        children: <Text>Lorem Ipsum</Text>,
    },
};
