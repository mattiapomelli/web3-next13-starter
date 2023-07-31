import { Dropdown, DropdownContent, DropdownItem, DropdownTrigger, WrappedLink } from "./dropdown";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Dropdown> = {
  component: Dropdown,
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

const render = () => (
  <div className="flex justify-center">
    <Dropdown className="inline-flex">
      <DropdownTrigger>Open</DropdownTrigger>
      <DropdownContent className="mt-8">
        <DropdownItem href="/" as={WrappedLink}>
          Profile
        </DropdownItem>
        <DropdownItem onClick={() => console.log("Logout")}>Logout</DropdownItem>
      </DropdownContent>
    </Dropdown>
  </div>
);

export const Default: Story = {
  render,
};
