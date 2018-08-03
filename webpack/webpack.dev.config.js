const path = require('path');
const webpack = require('webpack');
const merge = require( 'webpack-merge' );
const CleanWebpackPlugin = require('clean-webpack-plugin');
const base = require( './webpack.common.config' );

module.exports = merge( base, {
    mode: 'development',
    devServer: {
        contentBase: path.resolve( __dirname, '../runtime' ),
        hot: true,
        port: 1111,
        inline: true,
        compress: true,
        open: true,
        proxy: {

        }
    },
    devtool: 'cheap-module-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin(['runtime'],{root:path.resolve(__dirname, '../')}),
    ],
    performance: {
        hints: false
    },
} )