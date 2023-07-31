import { useState } from "react";

import { Button } from "@/components/ui/button";

import { Modal } from "./modal";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Modal> = {
  component: Modal,
  decorators: [(Story) => <Story />],
};

export default meta;

type Story = StoryObj<typeof Modal>;

const Template = (props: Story["args"]) => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open modal</Button>
      <Modal {...props} open={open} onClose={() => setOpen(false)}>
        Modal Content
      </Modal>
    </>
  );
};

export const Default: Story = {
  render: Template,
};

export const WithTitle: Story = {
  render: Template,
  args: {
    title: "Modal Title",
  },
};
