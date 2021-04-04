const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

const config = {
  output: {
    path: path.resolve(__dirname, './'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'template', 'index.html')
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css',
      ignoreOrder: false // Enable to remove warnings about conflicting order
    })
  ],
  module: {
    rules: [{
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: [path.join(__dirname, '../node_modules')]
    }, 
    {
      test: /\.(css|less)$/i,
      use: [{
        loader: MiniCssExtractPlugin.loader
      },
      {
        loader: 'css-loader'
      },        
      {
        loader: "less-loader",
        options: {
          lessOptions: {
            javascriptEnabled: true
          }
        }
      }]
    }]
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin(),
      new CssMinimizerPlugin()
    ],
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ]
  },
    devServer: {
    contentBase: './'
  }
}
  
module.exports = config