const webpack = require('webpack');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        corelib: './src/index.js',
    },
    // devtool: 'eval-source-map',
    devtool: 'source-map',
    target: 'node16.5',

    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: '[name].js',
        library: {
            name: 'corelib',
            type: 'umd',
            // type: 'commonjs2',
            umdNamedDefine: true,
        },
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true
                    }
                }
            },
        ]
    },
    plugins: [],
    externals: {
        jquery: 'jQuery',
    }
};
