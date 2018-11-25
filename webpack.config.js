const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module:{
        rules:[{
            test: /\.jsx?$/,
            use: ['babel-loader']
        },
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    }
}

// module.exports = config