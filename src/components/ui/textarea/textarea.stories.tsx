import { TextArea } from "./textarea";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TextArea> = {
  component: TextArea,
};

export default meta;

type Story = StoryObj<typeof TextArea>;

const render = (props: Story["args"]) => <TextArea {...props} />;

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

export const WithLabel: Story = {
  render,
  args: {
    label: "Description",
  },
};

export const Block: Story = {
  render,
  args: {
    block: true,
  },
};

export const WithValidation: Story = {
  render,
  args: {
    required: true,
    error: "This field is required",
  },
};

export const WithMaxLength: Story = {
  render,
  args: {
    maxLength: 10,
  },
};

export const WithCustomSize: Story = {
  render,
  args: {
    rows: 10,
    cols: 50,
  },
};
