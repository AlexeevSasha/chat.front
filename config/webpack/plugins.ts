import { DefinePlugin, ProgressPlugin, WebpackPluginInstance, HotModuleReplacementPlugin } from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { WebpackOptions } from "./types/webpack";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

export const plugins = (options: WebpackOptions): WebpackPluginInstance[] => [
  new HTMLWebpackPlugin({
    template: options.paths.html,
  }),
  new ProgressPlugin(),
  new MiniCssExtractPlugin({
    filename: "css/[name].[contenthash:8].css",
    chunkFilename: "css/[name].[contenthash:8].css",
  }),
  new DefinePlugin({
    __IS_DEV__: JSON.stringify({ isDev: options.isDev }),
  }),
  new HotModuleReplacementPlugin(),
  new BundleAnalyzerPlugin({ openAnalyzer: false }),
];
