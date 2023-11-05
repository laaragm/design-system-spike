import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "../../index";

export default {
    type: "Button",
    component: Button,
    args: {
        children: "Test",
    },
    argTypes: {
        children: {
            control: {
                type: "text",
            },
        },
        size: {
            control: {
                type: "select",
                options: ["small", "medium", "large"],
            },
        },
    },
} as Meta<ButtonProps>;

export const Primary: StoryObj<ButtonProps> = {
    args: {
        size: "small",
    },
};

export const Secondary: StoryObj<ButtonProps> = {
    args: {
        size: "medium",
    },
};

export const Tertiary: StoryObj<ButtonProps> = {
    args: {
        size: "large",
    },
};
