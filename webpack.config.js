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
        }
        ]
    },
       devServer: {
     contentBase: './public',
      historyApiFallback: true,
    //   hot:true
  }
}