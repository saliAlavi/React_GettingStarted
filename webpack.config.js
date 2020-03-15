var path = require("path");

module.exports={
    entry: path.resolve(__dirname,'src')+'/app/index.js',
    output:{
        path: path.resolve(__dirname,'dist')+'/app',
        filename: 'bundle.js',
        publicPath: '/app/'
    },
    module:{
        rules:[
            {
                test:/\.js%/,
                include: path.resolve(__dirname,'src'),
                use: {
                  loader: "babel-loader"
                }
            },
            {
                test:/\.css&/,
                use:{
                  loader:'style-loader!css-loader'
                }

            }
        ]
    }
};
