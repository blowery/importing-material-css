const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    index: path.join(__dirname, "src", "index.js")
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js"
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          {
            loader: "sass-loader",
            options: {
              includePaths: ["node_modules"]
            }
          }
        ]
      }
    ]
  }
};
