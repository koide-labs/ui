import type { Meta, StoryObj } from "@storybook/react-vite";

import { sizes, textColors } from "~/stories/data";
import { disable } from "~/stories/utils";

import { Timestamp } from ".";

const meta = {
  title: "Timestamp",
  component: Timestamp,
  parameters: { layout: "centered" },
  argTypes: {
    color: {
      control: "select",
      options: textColors,
    },
    size: {
      control: "select",
      options: sizes,
    },
    ...disable(["className"]),
  },
} satisfies Meta<typeof Timestamp>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    date: new Date(),
    dateFormat: "relative",
    size: "md",
    color: "default",
  },
  render: (args) => <Timestamp key={args.dateFormat} {...args} />,
};
