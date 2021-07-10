const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: process.env.NODE_ENV,
    entry: path.resolve(__dirname, "client/index.js"),

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },

    devServer: {
        port: 8080,
        hot: true,
        // publicPath: path.resolve(__dirname, '/dist'),

        // proxy: {
        //   '/': 'http://localhost:3000',
        // },
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader']
            }
        ],
    },

    // allows us to "import" files with these extensions without having to specify the extension
    resolve: {
        extensions: ["*", ".js", ".jsx", ".json", ".css"]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "index.html")
        }),

    ],
};



