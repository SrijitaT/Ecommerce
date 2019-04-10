const webpack = require('webpack');
module.exports = {
    entry: './index.js',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        {
          test: /\.(pdf|jpg|png|gif|svg|ico)$/,
          use: [
              {
                  loader: 'url-loader'
              },
          ]
        },
        {
          test:/\.css$/,
          use:['style-loader','css-loader']
        }
      ]
    },
    resolve: {
      extensions: ['*', '.js', '.jsx']
    },
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: 'bundle.js'
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
      contentBase: './dist',
      historyApiFallback:true
    }
  };
  