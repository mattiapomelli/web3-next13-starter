import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

import { Input } from "./input";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Input> = {
  component: Input,
};

export default meta;

type Story = StoryObj<typeof Input>;

const render = (props: Story["args"]) => <Input {...props} />;

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

export const Disabled: Story = {
  render,
  args: {
    disabled: true,
  },
};

export const Block: Story = {
  render,
  args: {
    block: true,
  },
};

export const WithLabels: Story = {
  render,
  args: {
    label: "Main Label",
    topRightLabel: "Alt Label",
    bottomLeftLabel: "Alt Label",
    bottomRightLabel: "Alt Label",
  },
};

export const WithError: Story = {
  render,
  args: {
    error: "This field is required",
  },
};

export const WithLeftIcon: Story = {
  render,
  args: {
    leftIcon: <MagnifyingGlassIcon className="h-5 w-5" />,
  },
};

export const WithRightIcon: Story = {
  render,
  args: {
    rightIcon: <MagnifyingGlassIcon className="h-5 w-5" />,
  },
};
