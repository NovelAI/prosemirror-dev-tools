const path = require("path");

module.exports = {
  entry: "./src/index.js",
  experiments: {
    outputModule:true
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    library: {
      type: "commonjs2",
    }
  },
  optimization: {
    minimize: false
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
