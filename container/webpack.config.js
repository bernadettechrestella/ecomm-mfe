const HtmlWebpackPlugin = require("html-webpack-plugin")
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")

module.exports = {
    mode: "development",
    devServer: {
        port: 4000
    },
    plugins: [
        new ModuleFederationPlugin({
           name: "container",
           remotes: {
               navbar: "navbar@http://localhost:4001/remoteEntry.js",
               sidebar: "sidebar@http://localhost:4002/remoteEntry.js",
               products: "products@http://localhost:4004/remoteEntry.js",
           } 
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ]
}