import type { Meta, StoryObj } from "@storybook/react";

import { TextInput, TextInputProps } from "../../components";

export default {
    title: "Components/Text Input",
    component: TextInput,
    args: {},
    parameters: {
        docs: {
            description: {
                story: "The `TextInput` component serves as a basic input component.",
            },
        },
    },
} as Meta<TextInputProps>;

export const Primary: StoryObj<TextInputProps> = {
    args: {
        placeholder: "Phone number",
    },
};

export const Disabled: StoryObj<TextInputProps> = {
    args: {
        disabled: true,
    },
};
