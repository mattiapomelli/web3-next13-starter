import { MapPinIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

import { Select } from "./select";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Select> = {
  component: Select,
  decorators: [(Story) => <Story />],
};

export default meta;

type Story = StoryObj<typeof Select>;

const options = ["America", "Europe", "Asia", "Africa", "Oceania"];

const Template = (props: Story["args"]) => {
  const [selected, setSelected] = useState<string | undefined>();

  return (
    <Select
      {...props}
      value={selected}
      placeholder="Select an option"
      onValueChange={setSelected}
      items={options}
    />
  );
};

export const Solid: Story = {
  render: Template,
  args: {
    variant: "solid",
  },
};

export const Outline: Story = {
  render: Template,
  args: {
    variant: "outline",
  },
};

export const Ghost: Story = {
  render: Template,
  args: {
    variant: "ghost",
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

export const Block: Story = {
  render: Template,
  args: {
    block: true,
  },
};

export const WithLabel: Story = {
  render: Template,
  args: {
    label: "Name",
  },
};

export const WithIcon: Story = {
  render: Template,
  args: {
    icon: <MapPinIcon className="h-5 w-5" />,
  },
};
