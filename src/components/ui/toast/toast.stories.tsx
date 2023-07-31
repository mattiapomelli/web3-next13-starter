import { Button } from "../button";

import { Toast } from "./toast";
import { Toaster } from "./toaster";
import { toast } from "./use-toast";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Toast> = {
  component: Toast,
};

export default meta;

type Story = StoryObj<typeof Toast>;

const render = (props: Story["args"]) => {
  const openToast = () => {
    toast({
      title: `Toast title`,
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas officia aliquid modi.",
      ...props,
    });
  };

  return (
    <>
      <Toaster />
      <Button onClick={openToast}>Open toast</Button>
    </>
  );
};

export const Default: Story = {
  render,
};

export const WithAction: Story = {
  render,
  args: {
    action: (
      <Button onClick={() => console.log("Undone")} size="xs">
        Undo
      </Button>
    ),
  },
};

export const Success: Story = {
  render,
  args: {
    type: "success",
  },
};

export const Warning: Story = {
  render,
  args: {
    type: "warning",
  },
};

export const Error: Story = {
  render,
  args: {
    type: "error",
  },
};
