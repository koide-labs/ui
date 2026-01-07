import clsx from "clsx";

import styles from "./tooltip.module.css";

export function TooltipArrow(props: { className?: string }) {
  return (
    <svg
      width="10"
      height="5"
      viewBox="0 0 30 10"
      preserveAspectRatio="none"
      className={clsx(styles["tooltip__arrow-icon"], props.className)}
    >
      <polygon points="0,0 30,0 15,10"></polygon>
    </svg>
  );
}
