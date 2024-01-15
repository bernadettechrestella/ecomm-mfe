const path = require("path")
const config = require("./webpack.config")
const { merge } = require("webpack-merge")

module.exports = merge (config, {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        static: {
            directory: path.resolve(__dirname, "dist"),
        },
        port: 4004,
        compress: true,
    }
});