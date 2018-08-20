const path = require( 'path' );
const webpack = require( 'webpack' );
const merge = require( 'webpack-merge' );
const CleanWebpackPlugin = require( 'clean-webpack-plugin' );
const base = require( './webpack.common.config' );

module.exports = merge( base, {
    mode: 'production',
    output: {
        path: path.resolve( __dirname, '../dist/' ),
        filename: 'js/[name].[chunkhash:8].js'
    },
    plugins: [
        new webpack.DefinePlugin( {
            'process.env': { NODE_ENV: '"production"' }
        } ),
        new CleanWebpackPlugin( [ 'dist' ], { root: path.resolve( __dirname, '../' ) } ),
    ]
} )