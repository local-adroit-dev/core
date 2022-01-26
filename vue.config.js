const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;
const webpack = require("webpack");
module.exports = {
  publicPath: "http://localhost:8080/",
  configureWebpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: "core",
        filename: "remoteEntry.js",
        remotes: {
          main: "main@http://localhost:8081/remoteEntry.js",
          react: "react@http://localhost:8083/remoteEntry.js",
        },
        exposes: {
          "./breadcrumb": "./src/core/helpers/breadcrumb.ts",
        },
        shared: require("./package.json").dependencies,
      }),
    ],
  },
  devServer: {
    port: 8080,
    historyApiFallback: true,
  },
};
