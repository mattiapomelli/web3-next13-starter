import { useState } from "react";

import { RadioGroup } from "./radio-group";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof RadioGroup> = {
  component: RadioGroup,
  decorators: [(Story) => <Story />],
};

export default meta;

type Story = StoryObj<typeof RadioGroup>;

const Template = (props: Story["args"]) => {
  const { items = [] } = props || {};
  const [selected, setSelected] = useState<string | undefined>();

  return <RadioGroup {...props} value={selected} onValueChange={setSelected} items={items} />;
};

export const Default: Story = {
  render: Template,
  args: {
    items: ["Option 1", "Option 2", "Option 3"],
  },
};
