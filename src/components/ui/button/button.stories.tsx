import { FireIcon } from "@heroicons/react/24/solid";

import { Button } from "./button";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

const render = (props: Story["args"]) => <Button {...props}>Button</Button>;

export const Primary: Story = {
  render,
  args: {
    color: "primary",
  },
};

export const Secondary: Story = {
  render,
  args: {
    color: "secondary",
  },
};

export const Accent: Story = {
  render,
  args: {
    color: "accent",
  },
};

export const Info: Story = {
  render,
  args: {
    color: "info",
  },
};

export const Success: Story = {
  render,
  args: {
    color: "success",
  },
};

export const Warning: Story = {
  render,
  args: {
    color: "secondary",
  },
};

export const Error: Story = {
  render,
  args: {
    color: "error",
  },
};

export const Solid: Story = {
  render,
  args: {
    variant: "solid",
  },
};

export const Outline: Story = {
  render,
  args: {
    variant: "outline",
  },
};

export const Ghost: Story = {
  render,
  args: {
    variant: "ghost",
  },
};

export const Link: Story = {
  render,
  args: {
    variant: "link",
  },
};

export const Tiny: Story = {
  render,
  args: {
    size: "xs",
  },
};

export const Small: Story = {
  render,
  args: {
    size: "sm",
  },
};

export const Normal: Story = {
  render,
  args: {
    size: "md",
  },
};

export const Large: Story = {
  render,
  args: {
    size: "lg",
  },
};

export const Block: Story = {
  render,
  args: {
    block: true,
  },
};

export const Disabled: Story = {
  render,
  args: {
    disabled: true,
  },
};

export const Loading: Story = {
  render,
  args: {
    loading: true,
  },
};

export const WithLeftIcon: Story = {
  render,
  args: {
    leftIcon: <FireIcon className="h-5 w-5" />,
  },
};

export const WithRightIcon: Story = {
  render,
  args: {
    rightIcon: <FireIcon className="h-5 w-5" />,
  },
};
