const path = require('path');

module.exports = {
    entry: "./src/index.tsx",
    devtool: "inline-source-map",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node-modules/
            },
            {
                test: /\.css?$/,
                use: ['style-loader', 'css-loader'],
                exclude: /node-modules/
            }
        ]
    },
    watch: true,
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    }
}
