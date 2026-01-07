import { Tooltip as TooltipPrimitive } from "@base-ui/react/tooltip";
import clsx from "clsx";
import type { ReactElement, ReactNode } from "react";

import { textify } from "~/-utils";

import { Surface } from "../surface";
import { TooltipArrow } from "./tooltip-arrow";

import transitionStyles from "../../styles/transitions.module.css";
import styles from "./tooltip.module.css";

export const TooltipProvider = TooltipPrimitive.Provider;

type TooltipRootProps = Omit<TooltipPrimitive.Root.Props, "children">;
type TooltipPositionerProps = Pick<
  TooltipPrimitive.Positioner.Props,
  "align" | "side"
>;
export type TooltipProps = TooltipRootProps &
  TooltipPositionerProps & {
    children?: ReactNode;

    /** Specify trigger to open tooltip. */
    trigger?: ReactElement;

    /** Apply className to tooltip content */
    className?: string;
  };

export function Tooltip({
  children,
  trigger,
  align,
  side,
  className,
  ...props
}: TooltipProps) {
  return (
    <TooltipPrimitive.Root {...props}>
      {trigger ? <TooltipPrimitive.Trigger render={trigger} /> : null}
      <TooltipPrimitive.Portal>
        <TooltipPrimitive.Positioner align={align} side={side} sideOffset={8}>
          <TooltipPrimitive.Popup
            render={<Surface background="highest" />}
            className={clsx(
              styles["tooltip"],
              transitionStyles["transition_scale"],
              className,
            )}
          >
            <TooltipPrimitive.Arrow className={styles["tooltip__arrow"]}>
              <TooltipArrow />
            </TooltipPrimitive.Arrow>
            {textify(children)}
          </TooltipPrimitive.Popup>
        </TooltipPrimitive.Positioner>
      </TooltipPrimitive.Portal>
    </TooltipPrimitive.Root>
  );
}
