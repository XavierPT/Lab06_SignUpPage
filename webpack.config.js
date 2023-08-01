const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'), // Ruta a tu carpeta de archivos estáticos
  },
  plugins: [
    new Dotenv(),
  ],
};
