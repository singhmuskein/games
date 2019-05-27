const webpack = require("webpack");
const path = require("path");
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
    })
  ],
  module: {
    loaders: [
      {
        test: /\.tsx$/,
        loader: "awesome-typescript-loader" //typescript loader
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
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
        test: /\.css$/,
        use: [
          "style-loader",
          { loader: "css-loader", options: { importLoaders: 1 } },
          "postcss-loader"
        ]
      },
      {
        test: /\.(png|jpe?g|svg|ttf|woff2|woff)$/,
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
