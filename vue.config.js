const path = require('path');

let plugins;

if (process.env.NODE_ENV === "development") {
  const SwapWebpackPlugin = require("@tencent/swap/webpackPlugin");
  plugins = [new SwapWebpackPlugin()];
}

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "@": resolve("src"),
      },
    },
    plugins,
  },
};
