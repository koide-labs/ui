import { Separator as SeparatorPrimitive } from "@base-ui/react/separator";
import clsx from "clsx";
import type { ComponentProps } from "react";

import styles from "./separator.module.css";

export type SeparatorProps = ComponentProps<typeof SeparatorPrimitive> & {
  /** Separator color */
  color?: "default" | "stronger";
};

export function Separator({
  color = "default",
  className,
  ...props
}: SeparatorProps) {
  return (
    <SeparatorPrimitive
      className={clsx(
        styles["separator"],
        styles[`separator_color_${color}`],
        styles[`separator_orientation_${props.orientation || "horizontal"}`],
        className,
      )}
      {...props}
    />
  );
}
