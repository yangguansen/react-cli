const path = require( 'path' );
const webpack = require( 'webpack' );
const merge = require( 'webpack-merge' );
const CleanWebpackPlugin = require( 'clean-webpack-plugin' );
const base = require( './webpack.common.config' );
const MiniCssExtractPlugin = require( "mini-css-extract-plugin" );

module.exports = merge( base, {
    mode: 'production',
    output: {
        path: path.resolve( __dirname, '../dist/' ),
        filename: 'js/[name].[chunkhash:8].js'
    },
    module: {
        rules: [
            {
                test: /\.(css|less)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: require.resolve( 'css-loader' ),
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
    plugins: [

        new MiniCssExtractPlugin( {
            filename: "css/[name].[chunkhash:8].css",
        } ),
        new webpack.NamedModulesPlugin(),
        new CleanWebpackPlugin( [ 'dist' ], { root: path.resolve( __dirname, '../' ) } ),
    ]
} )