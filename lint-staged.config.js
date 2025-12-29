/**
 * @filename lint-staged.config.cjs
 * @type {import("lint-staged").Configuration}
 */
export default {
  "*": ["npm run lint", "npm run format"],
};
