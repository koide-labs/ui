import type { Meta, StoryObj } from "@storybook/react-vite";
import { tokens, type SizeVariant } from "~/styles/tokens";

import { Button } from ".";
import { Surface } from "../surface";
import { Text } from "../text";
import { View, type ColorVariant } from "../view";

const sizeVariants: SizeVariant[] = ["sm", "md", "lg", "xl", "2xl", "3xl"];
const colorVariants: ColorVariant[] = [
  "outline",
  "no-fill",
  "fill",
  "fill-outline",
];

const meta = {
  title: "Button",
  component: Button,
  parameters: { layout: "centered" },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (props) => (
    <Button {...props} colorway="primary_fill" leftIcon="square-line">
      Hello World
    </Button>
  ),
};

export const Link: Story = {
  render: (props) => (
    <Button
      {...props}
      colorway="primary_fill"
      leftIcon="external-link-line"
      render={<a href="https://natmfat.com" target="_blank" rel="noreferrer" />}
      nativeButton={false}
    >
      Open Website
    </Button>
  ),
};

export const AllSizes: Story = {
  render: (props) => (
    <View style={{ gap: tokens.space16 }}>
      {sizeVariants.map((variant) => (
        <View key={variant} style={{ gap: tokens.space2 }}>
          <Text color="dimmest">{variant}</Text>
          <Button
            style={{ width: "fit-content" }}
            {...props}
            interactive="fill"
            size={variant}
            leftIcon="square-line"
          >
            Hello World
          </Button>
        </View>
      ))}
    </View>
  ),
};

export const AllColorwayVariants: Story = {
  render: (props) => (
    <Surface elevated style={{ gap: tokens.space16, padding: tokens.space16 }}>
      {colorVariants.map((variant) => (
        <View key={variant} style={{ gap: tokens.space2 }}>
          <Text color="dimmest">{variant}</Text>
          <Button
            style={{ width: "fit-content" }}
            {...props}
            colorway={`primary_${variant}`}
            leftIcon="square-line"
          >
            Hello World
          </Button>
        </View>
      ))}
    </Surface>
  ),
};
