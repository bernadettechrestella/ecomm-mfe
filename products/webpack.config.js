const HtmlWebpackPlugin = require("html-webpack-plugin")
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")

module.exports = {
    entry: "./src/index",
    devtool: false,
    devServer: {
        port: 4004,
    },
    plugins: [
        new ModuleFederationPlugin({
           name: "products",
           filename: "remoteEntry.js",
           exposes: {
               "./ProductsIndex": "./src/productPage",
           },
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-react", "@babel/preset-env"]
                    }
                }
            }
        ]
    }
}