import clsx from "clsx";

import { textify } from "~/-utils";

import { Icon } from "../icon";
import type { IconName } from "../icon/icon-names";
import { View, type ViewProps } from "../view";

import styles from "./pill.module.css";

export type PillProps = ViewProps & {
  /**
   * Icon to display on the left side of the pill content
   */
  leftIcon?: IconName;

  /**
   * Icon to display on the right side of the pill content
   */
  rightIcon?: IconName;
};

export function Pill({
  leftIcon,
  rightIcon,
  className,
  children,
  ...props
}: PillProps) {
  return (
    <View
      className={clsx(
        styles["pill"],
        leftIcon && styles["pill_icon_left"],
        rightIcon && styles["pill_icon_right"],
        className,
      )}
      {...props}
    >
      {leftIcon ? <Icon name={leftIcon} /> : null}
      {textify(children, { color: "inherit" })}
      {rightIcon ? <Icon name={rightIcon} /> : null}
    </View>
  );
}
