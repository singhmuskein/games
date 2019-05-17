const webpack = require("webpack");
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const DEV = process.env.NODE_ENV !== "production";

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.join(__dirname, "bundle"),
    filename: "bundle.js"
  },
  devtool: DEV ? "source-map" : "",
  plugins: [
    new webpack.DefinePlugin({
      PLATFORM: JSON.stringify("web"),
      "process.env.NODE_ENV": JSON.stringify("development")
    }),
    new ExtractTextPlugin("style.css")
  ],
  module: {
    loaders: [
      {
        test: /\.tsx$/,
        loader: "awesome-typescript-loader" //typescript compiler
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader" //debugging purpose for tsx files
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules\/.*/,
        loader: "babel-loader",
        query: {
          presets: [["es2015", { loose: true }], "react", "stage-2"],
          plugins: [
            ["add-module-exports", { loose: true }],
            "transform-class-properties"
          ]
        }
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "sass-loader" // compiles Sass to CSS
          }
        ]
      },
      {
        test: /\.(png|jpe?g|svg)$/,
        loader: "file-loader",
        options: {
          name: "assets/[name].[ext]"
        }
      }
    ]
  },
  resolve: {
    extensions: [
      ".web.js",
      ".js",
      ".web.jsx",
      ".jsx",
      ".web.ts",
      ".ts",
      ".web.tsx",
      ".tsx",
      ".android.js"
    ]
  },
  devServer: {
    disableHostCheck: true,
    host: "0.0.0.0",
    compress: true,
    proxy: {
      "/api": {
        target: "https://www.flipkart.com",
        changeOrigin: true
      }
    },
    historyApiFallback: {
      rewrites: [
        {
          from: /index.html/,
          to: "index.html"
        }
      ]
    }
  }
};
