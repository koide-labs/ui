import type { Meta, StoryObj } from "@storybook/react-vite";

import { tokens } from "~/styles/tokens";

import { InlineCode } from ".";
import { Surface } from "../surface";
import { Text } from "../text";

const meta = {
  title: "Code/Inline Code",
  component: InlineCode,
  parameters: { layout: "centered" },
} satisfies Meta<typeof InlineCode>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: undefined,
  },
  render: (args) => (
    <Surface style={{ padding: tokens.space16 }} elevated>
      <Text>
        Import the library with{" "}
        <InlineCode {...args}>import * from "natmfat"</InlineCode>
      </Text>
    </Surface>
  ),
};
