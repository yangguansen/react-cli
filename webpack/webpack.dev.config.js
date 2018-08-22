const path = require( 'path' );
const webpack = require( 'webpack' );
const merge = require( 'webpack-merge' );
const CleanWebpackPlugin = require( 'clean-webpack-plugin' );
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
    module: {
        rules:[
            {
                test: /\.(css|less)$/,
                use: [
                    'style-loader' ,
                    {
                        loader: require.resolve('css-loader'),
                        options: {
                            importLoaders: 1
                        },
                    },
                    'postcss-loader',
                    'less-loader'
                ],
            },
        ]
    },
    devtool: 'eval',

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin( [ 'runtime' ], { root: path.resolve( __dirname, '../' ) } ),
    ],
    performance: {
        hints: false
    },
} )