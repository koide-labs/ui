import type { Meta, StoryObj } from "@storybook/react-vite";

import { Heading, Section, type HeadingProps } from ".";

const meta = {
  title: "Heading",
  component: Heading,
  parameters: { layout: "centered" },
  argTypes: {
    level: {
      control: "select",
    },
  },
} satisfies Meta<HeadingProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    level: 1,
  },
  render: ({ level }) => (
    <Heading level={level}>Hello World (h{level})</Heading>
  ),
};

export const AutoLevel: Story = {
  args: {
    level: 1,
  },
  parameters: {
    docs: {
      description: {
        story:
          "When nested within `Section` components, `Heading` will automatically determine its level based on the current section depth.",
      },
    },
  },
  render: (props) => (
    <Section {...props}>
      <Heading>Hello World</Heading>
      <Section>
        <Heading>Hello World</Heading>
        <Section>
          <Heading>Hello World</Heading>
        </Section>
      </Section>
    </Section>
  ),
};
