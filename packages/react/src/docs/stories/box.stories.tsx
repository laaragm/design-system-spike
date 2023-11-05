import type { Meta, StoryObj } from "@storybook/react";

import { Text } from "../../components/text";
import { Box, BoxProps } from "../../components";

export default {
    type: "Components/Box",
    component: Box,
    args: {},
    parameters: {
        docs: {
            description: {
                component: "The 'Box' component serves as a wrapper for layout and spacing purposes.",
            },
        },
    },
} as Meta<BoxProps>;

export const Primary: StoryObj<BoxProps> = {
    args: {
        children: <Text>Lorem Ipsum</Text>,
    },
};
