import type { Meta, StoryObj } from "@storybook/react";

import { Heading, HeadingProps } from "../../components/heading";

export default {
    type: "Heading",
    component: Heading,
    args: {},
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
