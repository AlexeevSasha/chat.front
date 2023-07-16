import { RuleSetRule } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { WebpackOptions } from "./types/webpack";

const tsLoader = {
  test: /\.tsx?$/,
  use: "ts-loader",
  exclude: /node_modules/,
};
const babelLoader = {
  test: /\.(js|jsx|tsx)$/,
  exclude: /node_modules/,
  use: {
    loader: "babel-loader",
    options: {
      presets: ["@babel/preset-env"],
    },
  },
};
const cssLoader = (isDev: boolean) => ({
  test: /\.s[ac]ss?$/,
  use: [
    isDev ? "style-loader" : MiniCssExtractPlugin.loader,
    {
      loader: "css-loader",
      options: {
        modules: {
          auto: /\.module\.scss$/,
          localIdentName: isDev ? "[path][name]__[local]--[hash:base64:5]" : "[hash:base64:8]",
        },
      },
    },
    "sass-loader",
  ],
});
const svgLoader = {
  test: /\.svg$/,
  use: ["@svgr/webpack"],
};
const fileLoader = {
  test: /\.(png|jpe?g|gif)$/i,
  use: [
    {
      loader: "file-loader",
    },
  ],
};

export const loaders = (options: WebpackOptions): RuleSetRule[] => [fileLoader, svgLoader, babelLoader, tsLoader, cssLoader(options.isDev)];
