import { Meta, StoryObj } from "@storybook/react";

import { Checkbox } from "../../components";

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
