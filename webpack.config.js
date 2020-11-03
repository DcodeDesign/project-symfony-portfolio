const path = require('path');

/*let buildTypescript = {
    entry: ['./assets/js/main.ts'],
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: 'ts-loader'
            },
            {
                test: /\.scss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader'
                ],
            },{
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                loader: "file-loader"
            }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js', 'woff' ],
    },
    output: {
        filename: '[name]'.js,
        path: path.resolve(__dirname, 'public/assets/'),
    }
};*/

let buildPortfolio = {
    mode:'production',
    entry: ['./assets/js/portfolio-v2.ts' ],
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: 'ts-loader'
            },
            {
                test: /\.scss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                loader: 'file-loader',
                options: {
                    publicPath: 'assets/',
                },
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                loader: "file-loader"
            }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },
    output: {
        filename: 'portfolio.js',
        path: path.resolve(__dirname, 'public/assets/'),
    }
};

// module.exports = [buildTypescript, buildPortfolio];
module.exports = [buildPortfolio];