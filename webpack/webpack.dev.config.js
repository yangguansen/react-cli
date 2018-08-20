const path = require( 'path' );
const webpack = require( 'webpack' );
const merge = require( 'webpack-merge' );
const autoprefixer = require('autoprefixer');
const CleanWebpackPlugin = require( 'clean-webpack-plugin' );
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const base = require( './webpack.common.config' );

module.exports = merge( base, {
    mode: 'development',
    devServer: {
        contentBase: path.resolve( __dirname, '../runtime' ),
        hot: true,
        port: 1111,
        compress: true,
        open: true,
        proxy: {}
    },
    module:{
        rules:[

        ]

    },
    devtool: 'eval',

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new CleanWebpackPlugin( [ 'runtime' ], { root: path.resolve( __dirname, '../' ) } ),
    ],
    performance: {
        hints: false
    },
} )