/**
 * Shorthand to disable many properties in a story
 * @param keys List of controls to disable
 * @returns
 *
 * @example
 * { argTypes: { message: { table: { disable: true } } } }
 * disable(["message"])
 */
export function disable<T extends string>(keys: T[]) {
  const result = {} as Record<T, { table: { disable: true } }>;
  for (const key of keys) {
    result[key] = {
      table: {
        disable: true,
      },
    };
  }
  return result;
}
