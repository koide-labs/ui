import type { Meta, StoryObj } from "@storybook/react-vite";

import { colors, colorway, interactiveStyles } from "~/stories/data";
import { disable } from "~/stories/utils";
import { tokens } from "~/styles/tokens";

import { Pill } from ".";
import { Text } from "../text";
import { View } from "../view";

const meta = {
  title: "Pill",
  component: Pill,
  parameters: { layout: "centered" },
  argTypes: {
    ...disable(["color", "loading"]),
    interactive: {
      control: "select",
      options: [...interactiveStyles, ...colorway],
    },
  },
} satisfies Meta<typeof Pill>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    interactive: "primary_mute-static",
    leftIcon: "time-line",
  },
  render: (args) => <Pill {...args} children="Beginner friendly" />,
};

export const AllVariants: Story = {
  argTypes: {
    ...disable(["interactive", "color", "loading"]),
  },
  render: () => (
    <View style={{ gap: tokens.space8 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: tokens.space8,
          width: "100%",
        }}
      >
        <Pill interactive="fill">#python</Pill>
        <Pill interactive="outline">#game</Pill>
        <Text size="sm">interactive</Text>
      </View>

      {colors.map((color) => (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: tokens.space8,
          }}
          key={color}
        >
          <Pill interactive={`${color}_fill`} render={<button />}>
            #python
          </Pill>

          <Pill interactive={`${color}_fill-static`}>#game</Pill>

          <Pill leftIcon="time-line" interactive={`${color}_mute-static`}>
            Beginner friendly
          </Pill>

          <Pill rightIcon="star-line" interactive={`${color}_outline-static`}>
            Beginner friendly
          </Pill>

          <Text size="sm">{color}</Text>
        </View>
      ))}
    </View>
  ),
};
