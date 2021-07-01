const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports={
    entry:'./src/js/index.js',
    output:{
        filename: 'main.js',
        path: path.resolve(__dirname,'dist')
    },
    module:{
        rules:[
            {
                test: /\.(sa|sc|c)ss$/,
                use:[
                    miniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.css$/i,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options:{
                        presets:[
                            '@babel/preset-env'
                        ]
                    }
                }
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'file-loader',
                options:{
                    name: '[name].[ext]'
                }
            }
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        }),
        new htmlWebpackPlugin({
            filename: 'login.html',
            template: './src/login.html'
        }),
        new miniCssExtractPlugin({
            filename: 'styles.css'
        })
    ]
}