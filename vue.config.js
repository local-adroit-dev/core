const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;

module.exports = {
  publicPath: "http://localhost:8080/",
  configureWebpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: "core",
        filename: "remoteEntry.js",
        remotes: {
          main: "main@http://localhost:8081/remoteEntry.js",
        },
        exposes: {
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
