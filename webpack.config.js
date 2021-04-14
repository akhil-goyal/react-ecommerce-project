const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');

module.exports = () => {

    const environment = dotenv.config().parsed;

    const env = Object.keys(environment).reduce((previous, next) => {
        previous[`process.env.${next}`] = JSON.stringify(environment[next]);
        return previous;
    }, {});

    return {
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: ['babel-loader']
                }, {
                    test: /\.html$/,
                    use: ['html-loader']
                }, {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                }, {
                    test: /\.(png|svg|jpg|jpeg|gif)$/,
                    use: ['file-loader']
                }
            ],
        },
        plugins: [
            new HtmlWebPackPlugin({
                template: './src/index.html',
                filename: './index.html',
            }),
            new webpack.DefinePlugin(env)
        ],
        resolve: {
            alias: {
                components: path.resolve(__dirname, 'src/components'),
                pages: path.resolve(__dirname, 'src/pages'),
                css: path.resolve(__dirname, 'src/css/'),
                img: path.resolve(__dirname, 'src/img/'),
            }
        },
        devServer: {
            port: 3000,
            historyApiFallback: {
                index: `index.html`
            }
        },
        output: {
            publicPath: 'auto'
        }
    }
}