import { Dialog as DialogPrimitive } from "@base-ui/react/dialog";
import clsx from "clsx";
import type { ComponentProps, ReactElement, ReactNode } from "react";

import type { Size } from "~/styles/tokens";

import { IconButton } from "../icon-button";
import { Surface } from "../surface";
import { Text } from "../text";
import { View } from "../view";

import transitionStyles from "../../styles/transitions.module.css";
import styles from "./dialog.module.css";

export const DialogClose = DialogPrimitive.Close;

export type BaseDialogProps = {
  /**
   * The title of the dialog.
   * Renders DialogPrimitive.Title at "2xl" size.
   */
  title?: string;

  /**
   * The description of the dialog.
   * Renders DialogPrimitive.Description at default size & dimmer color.
   */
  description?: string;

  /** Dialog content */
  children?: ReactNode;

  /**
   * Specify trigger to open alert. You can still used a {@link https://base-ui.com/react/components/dialog#detached-triggers detached trigger}
   */
  trigger?: ReactElement;

  /**
   * Maximum width of the dialog. Defaults to "md".
   */
  width?: Extract<Size, "sm" | "md" | "lg">;

  /**
   * Vertically center dialog (or not). You probably shouldn't if you suspect
   * content will overflow.
   */
  centered?: boolean;

  /**
   * Apply className to the dialog content
   */
  className?: string;
};

export type DialogProps = ComponentProps<typeof DialogPrimitive.Root> &
  BaseDialogProps & {
    /**
     * Show close icon
     */
    closable?: boolean;
  };

export function Dialog({
  title,
  description,
  trigger,
  width = "md",
  centered,
  closable,
  children,
  className,
  ...props
}: DialogProps) {
  return (
    <DialogPrimitive.Root {...props}>
      {trigger ? <DialogPrimitive.Trigger render={trigger} /> : null}
      <DialogPrimitive.Portal>
        <DialogPrimitive.Backdrop
          className={clsx(
            styles["dialog__backdrop"],
            transitionStyles["transition_opacity"],
          )}
        />
        <DialogPrimitive.Popup
          className={clsx(
            styles["dialog__popup"],
            centered && styles["dialog__popup_centered"],
            transitionStyles["transition_scale"],
          )}
        >
          <Surface
            background="root"
            className={clsx(
              styles["dialog__content"],
              styles[`dialog__content_width_${width}`],
              className,
            )}
          >
            {title || description ? (
              <View className={styles["dialog__header"]}>
                {title ? (
                  <Text render={<DialogPrimitive.Title />} size="2xl">
                    {title}
                  </Text>
                ) : null}
                {description ? (
                  <Text
                    multiline
                    color="dimmer"
                    render={<DialogPrimitive.Description />}
                  >
                    {description}
                  </Text>
                ) : null}
              </View>
            ) : null}

            {children}

            {closable ? (
              <DialogPrimitive.Close
                data-framework-close
                className={styles["dialog__close"]}
                render={
                  <IconButton
                    size="sm"
                    name="close-line"
                    alt="Close"
                    interactive="no-fill"
                  />
                }
              />
            ) : null}
          </Surface>
        </DialogPrimitive.Popup>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
