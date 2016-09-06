var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index.jsx'
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, 'src'),
        loaders: ['react-hot', 'babel-loader'],
      },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      {
        test: /\.js$/,
        include: /semantic/,
        loaders: ['imports-loader?this=>window']
      },
      {
        test: /\.(png|jpg|jpeg|svg|woff|woff2|ttf|eot)$/i,
        loaders: ['file-loader']
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      'react': path.join(__dirname, 'node_modules', 'react')
    },
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.ProvidePlugin({
      'jQuery': 'jquery',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
