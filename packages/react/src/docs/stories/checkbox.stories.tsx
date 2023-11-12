import { Meta, StoryObj } from "@storybook/react";

import { Box, Checkbox, Text } from "../../components";

export default {
    title: "Components/Checkbox",
    component: Checkbox,
    args: {
        size: "md",
    },
    argTypes: {
        size: {
            options: ["sm", "md", "lg"],
            control: {
                type: "inline-radio",
            },
        },
    },
    decorators: [
        (Story) => {
            return (
                <Box as="label" css={{ display: "flex", flexDirection: "row", gap: "$2", alignItems: "center" }}>
                    {Story()}
                    <Text size="sm">Suggest follow-up questions</Text>
                </Box>
            );
        },
    ],
    parameters: {
        docs: {
            description: {
                story: "The `Checkbox` component allows users to select one or more items from a set.",
            },
        },
    },
} as Meta;

export const Default: StoryObj = {
    args: {},
};

export const Disabled: StoryObj = {
    args: {
        disabled: true,
    },
};
