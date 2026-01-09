import type { Meta, StoryObj } from "@storybook/react-vite";

import { Collapse } from ".";
import { Text } from "../text";

const meta = {
  title: "Collapse",
  component: Collapse,
  parameters: { layout: "centered" },
} satisfies Meta<typeof Collapse>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    expand: true,
  },
  render: (args) => (
    <Collapse {...args}>
      <Text color="inherit" multiline>
        Hello world
      </Text>
    </Collapse>
  ),
};
