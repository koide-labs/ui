import type { Meta, StoryObj } from "@storybook/react-vite";

import { colors } from "~/stories/data";
import { tokens } from "~/styles/tokens";

import { Meter } from ".";

const meta = {
  title: "Meter",
  component: Meter,
  parameters: { layout: "centered" },
  argTypes: {
    color: {
      control: "select",
      options: colors,
    },
  },
} satisfies Meta<typeof Meter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: "orange",
    label: "Storage used",
    value: 24,
  },
  render: (args) => <Meter {...args} style={{ width: tokens.space256 }} />,
};
