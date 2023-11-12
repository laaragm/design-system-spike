import type { Meta, StoryObj } from "@storybook/react";

import { Heading, HeadingProps } from "../../components";

export default {
    title: "Components/Heading",
    component: Heading,
    args: {},
    argTypes: {
        color: {
            control: "select",
            options: ["primary", "secondary", "tertiary"],
        },
    },
    parameters: {
        docs: {
            description: {
                story:
                    "The `Heading` component is used to render semantic heading elements on the page. It's important for accessibility and SEO to ensure that the headings " +
                    "are used in a hierarchical order.",
            },
        },
    },
} as Meta<HeadingProps>;

export const Title1: StoryObj<HeadingProps> = {
    args: {
        children: "Title 1",
        as: "h1",
    },
};

export const Title2: StoryObj<HeadingProps> = {
    args: {
        children: "Title 2",
        as: "h2",
    },
};

export const Title3: StoryObj<HeadingProps> = {
    args: {
        children: "Title 3",
        as: "h3",
    },
};

export const Title4: StoryObj<HeadingProps> = {
    args: {
        children: "Title 4",
        as: "h4",
    },
};

export const Title5: StoryObj<HeadingProps> = {
    args: {
        children: "Title 5",
        as: "h5",
    },
};

export const Title6: StoryObj<HeadingProps> = {
    args: {
        children: "Title 6",
        as: "h6",
    },
};
