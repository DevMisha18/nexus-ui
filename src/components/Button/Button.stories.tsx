import { Button } from "./Button";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Components/Button",
  component: Button,
  args: {
    children: "Click me!",
  },
  argTypes: {
    variant: { control: "select" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OutlinedMd = {
  args: {
    variant: "outlined",
    size: "md",
    onClick: () => console.log("Clicked!"),
  },
} satisfies Story;

export const ContainedLg = {
  args: {
    variant: "contained",
    size: "lg",
    disabled: true,
  },
} satisfies Story;
