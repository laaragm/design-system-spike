import type { Meta, StoryObj } from "@storybook/react";

import { Text, TextProps } from "../../components";

export default {
    title: "Components/Text",
    component: Text,
    args: {
        children:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu nisl sed urna gravida aliquam. Fusce non tellus pharetra, auctor eros id, tincidunt massa.",
    },
    argTypes: {
        size: {
            control: "select",
            options: ["xxs", "xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl"],
        },
        color: {
            control: "select",
            options: [
                "primary",
                "secondary",
                "tertiary",
                "accent",
                "placeholder",
                "error",
                "success",
                "info",
                "warning",
            ],
        },
        as: {
            control: "text",
        },
    },
    parameters: {
        docs: {
            description: {
                story: "Use `Text` to display body text, captions, overlines, etc., with appropriate styling.",
            },
        },
    },
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {
    args: {},
};

export const Strong: StoryObj<TextProps> = {
    args: {
        as: "strong",
    },
};
