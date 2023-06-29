const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        'index': './index.html',
        'sign-in/login': './sign-in/login.html',
        'sign-in/register': './sign-in/register.html',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 3002,
        open: true,
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        historyApiFallback: {
            index: 'index.html',
            rewrites: [
                { from: /^\/$/, to: '/index.html' },
                { from: /./, to: '/index.html' }
            ]
        },

    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html',
            chunks: [],
        }),
        new HtmlWebpackPlugin({
            filename: 'sign-in/login.html',
            template: './sign-in/login.html',
            chunks: ['login'],
        }),
        new HtmlWebpackPlugin({
            filename: 'sign-in/register.html',
            template: './sign-in/register.html',
            chunks: ['register'],
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'assets', to: 'assets' },
                { from: 'bootstrap-5.3.0-dist', to: 'bootstrap-5.3.0-dist' },
            ],
        }),
    ],
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    sources: {
                        list: [
                            // All default supported tags and attributes
                            '...',
                            {
                                tag: 'link',
                                attribute: 'href',
                                type: 'src',
                            },
                        ],
                    },
                },
            },
        ],
    },
};
//这个配置文件：
//
// - 将模式设置为开发模式。
// - 将`index.html`作为入口文件。
// - 将打包后的文件输出到`./dist/index.html`中。
// - 配置Webpack Dev Server以在端口3002上启动本地服务器，并将根目录设置为`./dist`。
// - 使用`HtmlWebpackPlugin`插件自动生成HTML文件，并将其输出到`./dist/index.html`中。
// - 使用`CopyWebpackPlugin`插件将`./assets`文件夹中的内容复制到`./dist/assets`文件夹中。