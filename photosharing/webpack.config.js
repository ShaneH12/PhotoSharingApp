var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry: {
    app: './src/app.js'
  },
  output: {
    filename: './public/bundle.js',
    sourceMapFilename: 'public/bundle.map'
  },
  devtool: '#source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query:{
          presets:['@babel/react', '@babel/preset-env']
        }
      }
    ]
  }
}
