import type { Meta, StoryObj } from "@storybook/react-vite";

import { View } from "~/components/view";

import { Markdown } from "./index.tsx";

const meta = {
  title: "Integrations/Markdown",
  component: Markdown,
  parameters: { layout: "centered" },
} satisfies Meta<typeof Markdown>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: `# Introduction

My initial portfolio (v1) was built completely with React and Tailwind. v1.5 is somewhat of a misnomer, considering it is less of a simple upgrade and more an entire rewrite with Remix for routing and serving markdown files.

![Portfolio home page](https://npham.dev/images/portfolio-home.png)
`,
  },
  render: (args) => (
    <View style={{ maxWidth: "30rem", width: "100%" }}>
      <Markdown {...args} />
    </View>
  ),
};
