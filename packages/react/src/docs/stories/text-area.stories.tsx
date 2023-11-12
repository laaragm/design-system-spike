import { Meta, StoryObj } from "@storybook/react";

import { TextArea } from "../../components";

export default {
    title: "Components/Text Area",
    component: TextArea,
    argTypes: {
        disabled: {
            control: "boolean",
        },
    },
    parameters: {
        docs: {
            description: {
                story: "The `TextArea` component serves as a multi-line text input field.",
            },
        },
    },
} as Meta;

export const Primary: StoryObj = {
    args: {
        placeholder: "Description",
    },
};

export const Disabled: StoryObj = {
    args: {
        disabled: true,
        placeholder: "Disabled TextArea",
    },
};
