import type { Meta, StoryObj } from "@storybook/react-vite";

import { AllVariants } from "~/stories/components/all-variants";
import { surfaceBackgrounds } from "~/stories/data";
import { tokens } from "~/styles/tokens";

import { Slider } from ".";
import { Surface } from "../surface";

const meta = {
  title: "Input/Slider",
  component: Slider,
  parameters: { layout: "centered" },
} satisfies Meta<typeof Slider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValue: 25,
    disabled: false,
  },
  render: (args) => <Slider style={{ width: tokens.space256 }} {...args} />,
};

export const AllInteractiveStyles: Story = {
  args: {
    color: "primary",
    defaultValue: 25,
    disabled: false,
  },
  render: (args) => (
    <AllVariants
      variantName="background"
      variants={surfaceBackgrounds}
      style={{ backgroundColor: "transparent" }}
      element={
        <Surface
          style={{
            padding: tokens.space16,
            gap: tokens.space8,
            borderWidth: "1px",
            borderColor: tokens.outlineDimmest,
          }}
        >
          <Slider style={{ width: tokens.space256 }} {...args} />{" "}
        </Surface>
      }
    />
  ),
};
