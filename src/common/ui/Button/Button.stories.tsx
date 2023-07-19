import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/common/ui/Button/Button";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof Button>;

export default meta;

export const Large: Story = {
  args: {
    size: "lg",
    children: "Text",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    children: "Text",
  },
};
