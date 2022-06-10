const { override, addWebpackAlias } = require("customize-cra");
const path = require("path");

module.exports = override(
  addWebpackAlias({
    "@Assets": path.resolve(__dirname, "src/assets"),
    "@Components": path.resolve(__dirname, "src/components"),
    "@Constants": path.resolve(__dirname, "src/constants"),
    "@Layouts": path.resolve(__dirname, "src/layouts"),
    "@Pages": path.resolve(__dirname, "src/pages"),
    "@Utils": path.resolve(__dirname, "src/utils"),
  })
);
