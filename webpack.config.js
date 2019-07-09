const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, "./dist"),
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [{loader: "style-loader"}, {loader: "css-loader"}]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: [
                    {loader: "html-loader"}
                ]
            }
        ]
    },
    devServer: {
        hot: true,
        port: 3000
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}
