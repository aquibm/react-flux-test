const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: './source/main.js',
    output: { path: './source/', filename: 'bundle.js' },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};
