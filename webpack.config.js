var path = require('path')

module.exports ={
    entry:"./client.js",
    output:{
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
     devtool: 'inline-source-map',
    module:{
        loaders:[
        {
            exclude:/(node_modules|server.js)/,
            loader:'babel-loader',
            query: {
                presets: ['es2015','react'],
            }
        },
        {
            test: /\.css$/,
             use: [ 'style-loader', 'css-loader' ]
        }, 
        ]
        
    },
       devServer: {
     contentBase: './public',
    //  host:'0.0.0.0', This is used to host the server on a public ip
      historyApiFallback: true,
    //   hot:true
  }
}