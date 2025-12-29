/**
 * @filename prettier.config.cjs
 * @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig}
 */
export default {
  singleQuote: false,
  semi: true,
  plugins: ["@ianvs/prettier-plugin-sort-imports"],
  importOrder: ["^@core/(.*)$", "", "^[./]"],
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  importOrderTypeScriptVersion: "5.0.0",
};
