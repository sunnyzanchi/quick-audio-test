const webpack = require('webpack');
const path = require('path');

module.exports = {
  devServer: {
    contentBase: './public',
    hot: true,
    open: true,
    port: 8081,
    publicPath: '/js'
  },
  devtool: 'inline-source-map',
  entry: {
    app: './src/index.js'
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
