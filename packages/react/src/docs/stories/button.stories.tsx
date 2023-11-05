import { Meta, StoryObj } from "@storybook/react";
import { Trash } from "phosphor-react";

import { Button, ButtonProps } from "../../components";

export default {
    title: "Components/Button",
    component: Button,
    args: {
        variant: "primary",
        size: "md",
        disabled: false,
    },
    argTypes: {
        size: {
            options: ["sm", "md", "lg"],
            control: {
                type: "inline-radio",
            },
        },
        disabled: {
            control: {
                type: "boolean",
            },
        },
        onClick: { action: "Clicked!" },
    },
} as Meta<ButtonProps>;

export const Primary: StoryObj<ButtonProps> = {
    args: {
        children: "Primary",
    },
};

export const Secondary: StoryObj<ButtonProps> = {
    args: {
        variant: "secondary",
        children: "Secondary",
    },
};

export const Tertiary: StoryObj<ButtonProps> = {
    args: {
        variant: "tertiary",
        children: "Tertiary",
    },
};

export const WithIcon: StoryObj<ButtonProps> = {
    args: {
        children: (
            <>
                Delete &nbsp;
                <Trash weight="bold" />
            </>
        ),
    },
};
