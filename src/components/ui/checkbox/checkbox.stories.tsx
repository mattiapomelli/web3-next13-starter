import { useState } from "react";

import { Checkbox } from "./checkbox";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  decorators: [(Story) => <Story />],
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

const Template = (props: Story["args"]) => {
  const [checked, setChecked] = useState(false);

  return <Checkbox {...props} checked={checked} onValueChange={setChecked} />;
};

export const Primary: Story = {
  render: Template,
  args: {
    color: "primary",
  },
};

export const Secondary: Story = {
  render: Template,
  args: {
    color: "secondary",
  },
};

export const Accent: Story = {
  render: Template,
  args: {
    color: "accent",
  },
};

export const Tiny: Story = {
  render: Template,
  args: {
    size: "xs",
  },
};

export const Small: Story = {
  render: Template,
  args: {
    size: "sm",
  },
};

export const Normal: Story = {
  render: Template,
  args: {
    size: "md",
  },
};

export const Large: Story = {
  render: Template,
  args: {
    size: "lg",
  },
};

export const WithLabelTiny: Story = {
  render: Template,
  args: {
    label: "Checked",
    labelSize: "xs",
  },
};

export const WithLabelSmall: Story = {
  render: Template,
  args: {
    label: "Checked",
    labelSize: "sm",
  },
};

export const WithLabelNormal: Story = {
  render: Template,
  args: {
    label: "Checked",
    labelSize: "md",
  },
};

export const WithLabelLarge: Story = {
  render: Template,
  args: {
    label: "Checked",
    labelSize: "lg",
  },
};

export const Disabled: Story = {
  render: Template,
  args: {
    disabled: true,
  },
};

export const DisabledWithLabel: Story = {
  render: Template,
  args: {
    label: "Checked",
    disabled: true,
  },
};
