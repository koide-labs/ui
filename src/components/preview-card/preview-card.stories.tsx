import type { Meta, StoryObj } from "@storybook/react-vite";

import { surfaceBackgrounds } from "~/stories/data";
import { disable } from "~/stories/utils";
import { tokens } from "~/styles/tokens";

import { PreviewCard } from ".";
import { Anchor } from "../anchor";
import { Text } from "../text";

const meta = {
  title: "Preview Card",
  component: PreviewCard,
  parameters: { layout: "centered" },
  argTypes: {
    ...disable(["trigger", "className", "children"]),
    background: {
      control: "select",
      options: surfaceBackgrounds,
    },
  },
} satisfies Meta<typeof PreviewCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    background: "highest",
  },
  render: (args) => (
    <Text>
      The principles of good{" "}
      <PreviewCard {...args} trigger={<Anchor>typography</Anchor>}>
        <img
          width="448"
          height="300"
          src="https://images.unsplash.com/photo-1619615391095-dfa29e1672ef?q=80&w=448&h=300"
          alt="Station Hofplein signage in Rotterdam, Netherlands"
          style={{
            borderRadius: tokens.borderRadiusDefault,
            width: "100%",
            height: "auto",
          }}
        />
        <Text style={{ flex: "1 1 auto" }} multiline>
          <strong style={{ fontWeight: tokens.fontWeightMedium }}>
            Typography
          </strong>{" "}
          is the art and science of arranging type to make written language
          clear, visually appealing, and effective in communication.
        </Text>
      </PreviewCard>{" "}
      remain into the digital age.
    </Text>
  ),
};
