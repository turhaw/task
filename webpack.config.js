//// webpack optimization see documentation
/// table ekox param-neric araji search@ => sort => pagination
/// TREE SHAKING MENAK OGTAGORCVOX IMPORTNER@


const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './index.tsx',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
    filename: 'index_bundle.js',
  },
  target: 'web',
  mode: 'development',
  devServer: {
    port: '3000',
    historyApiFallback: true,
    // static: {
    //   directory: path.join(__dirname, 'public')
    // },
    open: true,
    hot: true,
    liveReload: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.json', '.ts'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html')
    })
  ]
};