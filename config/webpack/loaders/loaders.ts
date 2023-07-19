import { RuleSetRule } from "webpack";
import { WebpackOptions } from "../types/webpack";
import { cssLoader } from "./cssLoader";

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
const svgLoader = {
  test: /\.svg$/,
  use: ["@svgr/webpack"],
};
const fileLoader = {
  test: /\.(png|jpe?g|gif|woff2|woff|ttf)$/i,
  use: [
    {
      loader: "file-loader",
    },
  ],
};

export const loaders = (options: WebpackOptions): RuleSetRule[] => [fileLoader, svgLoader, babelLoader, tsLoader, cssLoader(options.isDev)];
