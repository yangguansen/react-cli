const path = require( 'path' );
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: path.resolve( __dirname, '../index.js' ),
    output:{
        path:path.resolve( __dirname, '../runtime' ),
        filename: 'js/[name].bundle.js'
    },
    module:{
        rules: [
            {
                test:/\.(js|jsx)$/,
                use:[
                    'babel-loader'
                ]
            }
        ]
    },
    plugins: [

        new HtmlWebpackPlugin({template: path.resolve(__dirname, '../index.html')})
    ]
}