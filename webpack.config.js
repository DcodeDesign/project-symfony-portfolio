const path = require('path');

let buildTypescript = {
    entry: ['./assets/js/main.ts','./assets/js/portfolio.ts' ],
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
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },
    output: {
        filename: '[name]'.js,
        path: path.resolve(__dirname, 'public/assets/js'),
    }
};

let buildPortfolio = {
    mode:'production',
    entry: ['./assets/js/portfolio.ts' ],
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
                    publicPath: 'assets/js',
                },
            },
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },
    output: {
        filename: 'portfolio.js',
        path: path.resolve(__dirname, 'public/assets/js'),
    }
};

module.exports = [buildTypescript, buildPortfolio];