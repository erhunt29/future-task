const path = require('path');

module.exports= {
    mode: "development",
    devtool: "source-map",

    entry: [path.join(__dirname, 'src/components', 'App.js')],

    output: {

        path: path.join(__dirname, 'src'),
        filename: 'main.js',
        publicPath: "/static/"

    },

    module: {

        rules: [{

            test : /\.jsx?/,

            loader: 'babel-loader',

            exclude: '/node_modules/'

        }]

    }

};