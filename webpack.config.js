const HtmlWebpackPlugin = require("html-webpack-plugin");
const loader = require("url-loader");

const htmlPlugin = new HtmlWebpackPlugin({
  template: "./src/index.html",
  filename: "./index.html",
});

module.exports = {
  output: {
    filename: "main.js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: ["style-loader", "css-loader","postcss-loader","sass-loader"]
      },
      {
        test: /\.(jp|pn|sv)g$/,
        type: 'asset/resource'
      }
    ],
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [htmlPlugin],
};
