const HtmlWebpackPlugin = require("html-webpack-plugin")
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")

module.exports = {
    entry: "./src/index",
    devtool: false,
    devServer: {
        port: 4002,
    },
    plugins: [
        new ModuleFederationPlugin({
           name: "sidebar",
           filename: "remoteEntry.js",
           exposes: {
               "./SidebarIndex": "./src/sidebarPage",
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