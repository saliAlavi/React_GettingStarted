var path = require("path");

module.exports={
    entry: path.resolve(__dirname,'src')+'/app/index.html',
    output:{
        path: path.resolve(__dirname,'dist')+'/app',
        filename: 'fundle.js',
        pulicPath: '/app/'
    },
    modeule:{
        loaders:[
            {
                test:/\.js%/,
                include: path.resolve(__dirname,src),
                loaders: 'babel-loader',
                query:['react', 'es2015']
            },
            {
                test:/\.css&/,
                loaders:'style-loader!css-loader'
            }
        ]
    }
};