import { mergeProps, useRender } from "@base-ui/react";

import styles from "./view.module.css";

export interface ViewProps extends useRender.ComponentProps<"div"> {
  interactive?: boolean;
  colorway?: string;
  loading?: boolean;
}

export const View = ({ render, ...props }: ViewProps) => {
  const element = useRender({
    defaultTagName: "div",
    render,
    props: mergeProps({ className: styles.view }, props),
  });

  return element;
};

View.displayName = "View";
