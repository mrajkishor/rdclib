import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@rdc/ui-web";

const meta: Meta<typeof Button> = {
    title: "Components/Button",
    component: Button,
    argTypes: {
        size: {
            control: "select",
            options: ["xs", "sm", "md", "lg"],
        },
        intent: {
            control: "select",
            options: ["primary", "secondary", "danger"],
        },
        disabled: {
            control: "boolean",
        },
        loading: {
            control: "boolean",
        },
        onClick: { action: "clicked" },
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: "Primary Button",
        intent: "primary",
        size: "md",
    },
};

export const Secondary: Story = {
    args: {
        children: "Secondary Button",
        intent: "secondary",
    },
};

export const Loading: Story = {
    args: {
        children: "Saving",
        loading: true,
    },
};

export const Disabled: Story = {
    args: {
        children: "Disabled",
        disabled: true,
    },
};
