const path = require( 'path' );
const webpack = require('webpack');
const HtmlWebpackPlugin = require( 'html-webpack-plugin' )
const MiniCssExtractPlugin = require( "mini-css-extract-plugin" );

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


        ]
    },
    resolve: {
        extensions: ['.js', '.css', 'less', '.json']
    },
    plugins: [
        new HtmlWebpackPlugin( { template: path.resolve( __dirname, '../index.html' ) } )
    ],

}