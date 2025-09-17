import { Button } from "./Button";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Components/Button",
  component: Button,
  args: {
    children: "Click me!",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Interactive = {
  args: {
    variant: "contained",
    size: "md",
    disabled: false,
  },
  render: (args) => <Button {...args} />,
} satisfies Story;

export const AllOutlined = {
  args: {
    variant: "outlined",
    disabled: false,
  },
  parameters: {
    controls: { disable: true },
  },
  render: (args) => (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        alignItems: "center",
      }}
    >
      <Button {...args} size="sm" />
      <Button {...args} size="md" />
      <Button {...args} size="lg" />
    </div>
  ),
} satisfies Story;

export const AllContained = {
  args: {
    variant: "contained",
    disabled: false,
  },
  parameters: {
    controls: { disable: true },
  },
  render: (args) => (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        alignItems: "center",
      }}
    >
      <Button {...args} size="sm" />
      <Button {...args} size="md" />
      <Button {...args} size="lg" />
    </div>
  ),
} satisfies Story;
