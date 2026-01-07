import type { Meta, StoryObj } from "@storybook/react-vite";

import { sizes } from "~/stories/data";

import { StackedAvatars } from ".";

const meta = {
  title: "Stacked Avatars",
  component: StackedAvatars,
  parameters: { layout: "centered" },
  argTypes: {
    size: {
      control: "select",
      options: sizes,
    },
  },
} satisfies Meta<typeof StackedAvatars>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    users: [
      {
        color: "red",
        image: "https://natmfat.com/logo.png",
        username: "natmfat",
      },
      {
        color: "green",
        username: "green",
      },
      {
        color: "blue",
        username: "blue",
      },
      {
        color: "yellow",
        username: "yellow",
      },
    ],
    visibleUsers: 3,
    size: "md",
  },
  render: (args) => <StackedAvatars {...args} />,
};
