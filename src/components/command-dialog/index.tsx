import clsx from "clsx";
import { Command as CommandPrimitive } from "cmdk";
import type { ComponentProps } from "react";

import { textify } from "~/-utils";

import { Dialog, type BaseDialogProps } from "../dialog";
import { Icon } from "../icon";
import type { IconName } from "../icon/icon-names";
import { Separator } from "../separator";
import { Text } from "../text";
import { View } from "../view";

import styles from "./command-dialog.module.css";

// TODO put background in dialog base props
export type CommandDialogProps = Omit<
  BaseDialogProps,
  "title" | "description"
> & {
  placeholder?: string;
};

export function CommandDialog({
  placeholder,
  children,
  ...props
}: CommandDialogProps) {
  return (
    <Dialog width="sm" className={styles["command-dialog"]} {...props} closable>
      <CommandPrimitive>
        <View className={styles["command-dialog__input-root"]}>
          <View
            interactive="fill-outline"
            className={styles["command-dialog__input"]}
            render={<CommandPrimitive.Input placeholder={placeholder} />}
          />
          <Icon
            name="search-line"
            className={styles["command-dialog__input-icon"]}
          />
        </View>

        <CommandPrimitive.List className={styles["command-dialog__list"]}>
          <CommandPrimitive.Empty>
            <View className={styles["command-dialog__empty"]}>
              <Text color="dimmer">No results found.</Text>
            </View>
          </CommandPrimitive.Empty>

          {children}
        </CommandPrimitive.List>
      </CommandPrimitive>
    </Dialog>
  );
}

export function CommandGroup({
  className,
  ...props
}: ComponentProps<typeof CommandPrimitive.Group>) {
  return (
    <CommandPrimitive.Group
      className={clsx(styles["commmand-dialog__group"], className)}
      {...props}
    />
  );
}

export function CommandSeparator(
  props: ComponentProps<typeof CommandPrimitive.Separator>,
) {
  return <Separator render={<CommandPrimitive.Separator {...props} />} />;
}

export function CommandItem({
  shortcut,
  icon,
  className,
  children,
  ...props
}: ComponentProps<typeof CommandPrimitive.Item> & {
  shortcut?: string;
  icon?: IconName;
}) {
  return (
    <View
      interactive="list-item"
      className={clsx(styles["command-dialog__item"], className)}
      render={<CommandPrimitive.Item {...props} />}
    >
      {icon ? <Icon name={icon} /> : undefined}
      {textify(children)}
      {shortcut ? (
        <Text
          className={clsx(styles["command-dialog__shortcut"], className)}
          color="dimmest"
          size="sm"
        >
          {null}
        </Text>
      ) : null}
    </View>
  );
}
