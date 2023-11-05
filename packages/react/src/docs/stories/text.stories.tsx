import type { Meta, StoryObj } from "@storybook/react";

import { Text, TextProps } from "../../components/text";

export default {
    type: "Text",
    component: Text,
    args: {
        children:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu nisl sed urna gravida aliquam. Fusce non tellus pharetra, auctor eros id, tincidunt massa.",
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
