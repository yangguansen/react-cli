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
    module:{
        rules:[
            {
                test: /\.(css|less)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: require.resolve('css-loader'),
                        options: {
                            importLoaders: 1
                        },
                    },
                    {
                        loader: require.resolve('postcss-loader'),
                        options: {
                            // Necessary for external CSS imports to work
                            // https://github.com/facebookincubator/create-react-app/issues/2677
                            ident: 'postcss',
                            plugins: () => [
                                require('postcss-flexbugs-fixes'),
                                autoprefixer({
                                    browsers: [
                                        '>1%',
                                        'last 4 versions',
                                        'Firefox ESR',
                                        'not ie < 9', // React doesn't support IE8 anyway
                                    ],
                                    flexbox: 'no-2009',
                                }),
                            ],
                        },
                    },
                    'less-loader'
                ],
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            publicPath: '../dist',
            filename: "[name].css",
        }),
        new CleanWebpackPlugin( [ 'dist' ], { root: path.resolve( __dirname, '../' ) } ),
    ]
} )