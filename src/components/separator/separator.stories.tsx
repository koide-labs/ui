import type { Meta, StoryObj } from "@storybook/react-vite";

import { tokens } from "~/styles/tokens";

import { Separator } from ".";
import { Heading } from "../heading";
import { Text } from "../text";
import { View } from "../view";

const meta = {
  title: "Separator",
  component: Separator,
  parameters: { layout: "centered" },
} satisfies Meta<typeof Separator>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: "default",
  },
  render: (args) => (
    <View style={{ gap: tokens.space12 }}>
      <View style={{ gap: tokens.space2 }}>
        <Heading level={2}>@koide-labs/ui</Heading>
        <Text>It's @koide-labs/ui, built with CSS Modules and Base UI.</Text>
      </View>
      <Separator {...args} orientation="horizontal" />
      <View style={{ flexDirection: "row", gap: tokens.space12 }}>
        <Text>Home</Text>
        <Separator {...args} orientation="vertical" />
        <Text>Pricing</Text>
        <Separator {...args} orientation="vertical" />
        <Text>Blog</Text>
      </View>
    </View>
  ),
};
