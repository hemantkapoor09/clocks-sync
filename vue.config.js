const StyleLintPlugin = require("stylelint-webpack-plugin");

module.exports = {
  lintOnSave: false,
  configureWebpack: {
    plugins: [
      new StyleLintPlugin({
        syntax: "scss",
        fix: true,
      }),
    ],
  },
  css: {
    extract: false,
  },
};
