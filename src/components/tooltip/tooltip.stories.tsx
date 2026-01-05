import type { Meta, StoryObj } from "@storybook/react-vite";

import { disable } from "~/stories/utils";
import { tokens } from "~/styles/tokens";

import { Tooltip, TooltipProvider } from ".";
import { IconButton } from "../icon-button";
import { View } from "../view";

const meta = {
  title: "Tooltip",
  component: Tooltip,
  parameters: { layout: "centered" },
  argTypes: {
    message: {
      control: "text",
    },
    align: {
      control: "inline-radio",
      options: ["start", "center", "end"],
    },
    open: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  argTypes: {
    trigger: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    message: "Bold",
    align: "center",
    open: true,
  },
  render: (args) => (
    <Tooltip
      trigger={<IconButton name="bold" alt="Bold" interactive />}
      {...args}
    />
  ),
};

export const Provider: Story = {
  argTypes: {
    ...disable(["message", "trigger", "open"]),
  },
  render: () => (
    <TooltipProvider>
      <View style={{ flexDirection: "row", gap: tokens.space4 }}>
        <Tooltip
          message="Bold"
          trigger={<IconButton name="bold" alt="Bold" interactive />}
        />
        <Tooltip
          message="Italic"
          trigger={<IconButton name="italic" alt="Italic" interactive />}
        />
        <Tooltip
          message="Underline"
          trigger={<IconButton name="underline" alt="Underline" interactive />}
        />
      </View>
    </TooltipProvider>
  ),
};
