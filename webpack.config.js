const path = require("path");

module.exports = {
  entry: "./src/index.js",
  stats: { maxModules: 50, modulesSort: "size" },
  resolve: {
    alias: {
      //   react: "preact/compat",
      //   "react-dom": "preact/compat",
    },
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    library: "devtools",
    libraryTarget: "umd",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: require.resolve("babel-loader"),
          options: { presets: ["@babel/preset-react"] },
        },
      },
    ],
  },
};
