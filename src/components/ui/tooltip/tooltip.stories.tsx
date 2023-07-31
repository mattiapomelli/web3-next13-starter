import { Tooltip } from "./tooltip";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

const Template = (props: Story["args"]) => (
  <div className="flex w-full justify-center py-8">
    <Tooltip {...props} content={<>Tooltip content</>}>
      <p>Hover me</p>
    </Tooltip>
  </div>
);

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

export const AlignStart: Story = {
  render: Template,
  args: {
    align: "start",
  },
};

export const AlignCenter: Story = {
  render: Template,
  args: {
    align: "center",
  },
};

export const AlignEnd: Story = {
  render: Template,
  args: {
    align: "end",
  },
};

export const SideTop: Story = {
  render: Template,
  args: {
    side: "top",
  },
};

export const SideRight: Story = {
  render: Template,
  args: {
    side: "right",
  },
};

export const SideBottom: Story = {
  render: Template,
  args: {
    side: "bottom",
  },
};

export const SideLeft: Story = {
  render: Template,
  args: {
    side: "left",
  },
};

export const WithAlignOffset: Story = {
  render: Template,
  args: {
    align: "start",
    alignOffset: 20,
  },
};

export const WithSideOffset: Story = {
  render: Template,
  args: {
    side: "bottom",
    sideOffset: 20,
  },
};
