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
                component:
                    "The 'Heading' component is used to render semantic heading elements on the page. It's important for accessibility and SEO to ensure that the headings are used in a hierarchical order.",
            },
        },
    },
} as Meta<HeadingProps>;

export const Title1: StoryObj<HeadingProps> = {
    args: {
        children: <Heading as="h1">Title 1</Heading>,
    },
};

export const Title2: StoryObj<HeadingProps> = {
    args: {
        children: <Heading as="h2">Title 2</Heading>,
    },
};

export const Title3: StoryObj<HeadingProps> = {
    args: {
        children: <Heading as="h3">Title 3</Heading>,
    },
};

export const Title4: StoryObj<HeadingProps> = {
    args: {
        children: <Heading as="h4">Title 4</Heading>,
    },
};

export const Title5: StoryObj<HeadingProps> = {
    args: {
        children: <Heading as="h5">Title 5</Heading>,
    },
};

export const Title6: StoryObj<HeadingProps> = {
    args: {
        children: <Heading as="h6">Title 6</Heading>,
    },
};
