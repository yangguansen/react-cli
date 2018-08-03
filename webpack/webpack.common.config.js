const path = require( 'path' );
const webpack = require('webpack');
const HtmlWebpackPlugin = require( 'html-webpack-plugin' )

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
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin( {
            'process.env': { NODE_ENV: '"development"' }
        } ),
        new HtmlWebpackPlugin( { template: path.resolve( __dirname, '../index.html' ) } ),
        new webpack.NamedModulesPlugin(),
    ],

}