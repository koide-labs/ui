import type { Meta, StoryObj } from "@storybook/react-vite";

import { colors } from "~/stories/data";
import { disable } from "~/stories/utils";
import { tokens } from "~/styles/tokens";

import { Badge } from ".";
import { View } from "../view";

const meta = {
  title: "Badge",
  component: Badge,
  parameters: { layout: "centered" },
  argTypes: {
    color: {
      control: "select",
      options: colors,
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: "orange",
    icon: "sparkling-line",
    name: "Pro",
    shiny: true,
  },
  render: (args) => <Badge {...args} />,
};

export const ExampleBadges: Story = {
  argTypes: {
    ...disable(["icon", "name", "color", "shiny", "tagline"]),
  },
  args: {
    name: "",
    color: "primary",
  },
  render: () => (
    <View
      style={{
        flexDirection: "row",
        flexWrap: "wrap",
        gap: tokens.space8,
        maxWidth: tokens.space256,
      }}
    >
      <Badge name="Admin" color="yellow" />
      <Badge name="Detective" color="green" />
      <Badge icon="checkbox-circle-line" name="Verified" color="green" />
      <Badge name="Language Jammer" color="purple" />
      <Badge name="Community Monitor" color="teal" />
    </View>
  ),
};
