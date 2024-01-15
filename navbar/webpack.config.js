const HtmlWebpackPlugin = require("html-webpack-plugin")
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")

module.exports = {
    mode: "development",
    devServer: {
        port: 4001,
    },
    plugins: [
        new ModuleFederationPlugin({
           name: "navbar",
           filename: "remoteEntry.js",
           exposes: {
               "./NavbarIndex": "./src/navbar",
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