const path = require( 'path' );
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require( 'html-webpack-plugin' )
const MiniCssExtractPlugin = require( "mini-css-extract-plugin" );
const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
    entry: path.resolve( __dirname, '../index.js' ),
    output: {
        path: path.resolve( __dirname, '../runtime' ),
        filename: 'js/[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.(css|less)$/,
                // include: /node_modules|antd\.(css|less)/,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
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
                    {
                        loader: require.resolve('less-loader')
                    }
                ],
            },
            // {
            //     test: /\.(css|less)$/,
            //     exclude: /node_modules|antd\.(css|less)/,
            //     use: [
            //         devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
            //         {
            //             loader: require.resolve('css-loader'),
            //             options: {
            //                 importLoaders: 1,
            //                 modules: true,
            //                 localIdentName: "[local]_[hash:base64:5]"
            //             },
            //         },
            //         {
            //             loader: require.resolve('postcss-loader'),
            //             options: {
            //                 // Necessary for external CSS imports to work
            //                 // https://github.com/facebookincubator/create-react-app/issues/2677
            //                 ident: 'postcss',
            //                 plugins: () => [
            //                     require('postcss-flexbugs-fixes'),
            //                     autoprefixer({
            //                         browsers: [
            //                             '>1%',
            //                             'last 4 versions',
            //                             'Firefox ESR',
            //                             'not ie < 9', // React doesn't support IE8 anyway
            //                         ],
            //                         flexbox: 'no-2009',
            //                     }),
            //                 ],
            //             },
            //         },
            //         {
            //             loader: require.resolve('less-loader')
            //         }
            //     ],
            // },
        ]
    },
    resolve: {
        extensions: ['.js', '.css', 'less', '.json']
    },
    plugins: [
        new MiniCssExtractPlugin({
            publicPath: '../dist',
            filename: "[name].css",
        }),
        new HtmlWebpackPlugin( { template: path.resolve( __dirname, '../index.html' ) } ),
        new webpack.NamedModulesPlugin(),
    ],

}