import type { useRender } from "@base-ui/react";
import clsx from "clsx";

import { Surface } from "../surface";
import { Text } from "../text";
import type { Color } from "../view";

import styles from "./inline-code.module.css";

export interface InlineCodeProps extends useRender.ComponentProps<"span"> {
  color?: Color;
}

export const InlineCode = ({ color, ...props }: InlineCodeProps) => {
  return (
    <Surface
      elevated
      className={clsx(
        styles["inline-code"],
        color && styles["inline-code_colorway"],
      )}
      color={color}
    >
      <Text size="sm" color="inherit">
        <code {...props} />
      </Text>
    </Surface>
  );
};
