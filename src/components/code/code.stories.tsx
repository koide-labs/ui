import type { Meta, StoryObj } from "@storybook/react-vite";

import { Code } from ".";

const meta = {
  title: "Code/Code",
  component: Code,
  parameters: { layout: "centered" },
} satisfies Meta<typeof Code>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: `import type { Meta, StoryObj } from "@storybook/react-vite";

import { Code } from ".";

const meta = {
    title: "Code/Code",
    component: Code,
    parameters: { layout: "centered" },
} satisfies Meta<typeof Code>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        value: \`console.log("hello world")\`,
        language: "javascript",
    },
    render: (args) => <Code {...args} />,
};`,
    language: "javascript",
    title: "code.stories.tsx",
  },
  render: (args) => <Code {...args} />,
};
