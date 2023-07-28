import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "@/common/ui/Input/Input";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "Input",
  component: Input,
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;

export const Text: Story = {
  args: {
    type: "text",
    placeholder: "Placeholder",
  },
};

export const Password: Story = {
  args: {
    type: "password",
    placeholder: "Placeholder",
  },
};

export const Error: Story = {
  args: {
    type: "test",
    placeholder: "Placeholder",
    value: "error",
    error: "Error text",
  },
};

export const Disable: Story = {
  args: {
    type: "test",
    placeholder: "Placeholder",
    disabled: true,
  },
};
