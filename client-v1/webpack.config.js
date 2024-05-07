const path = require('path');

module.exports = {
  entry: './src/main.ts', // Entry point of your application
  mode: 'development', // Choose development or production mode
  output: {
    filename: 'bundle.js', // Output bundle file name
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  resolve: {
    extensions: ['.ts', '.js'], // Resolve TypeScript and JavaScript files
  },
  module: {
    rules: [
      {
        test: /\.ts?$/, // Match TypeScript files
        use: 'ts-loader', // Use ts-loader for TypeScript compilation
        exclude: /node_modules/, // Exclude node_modules directory
      },
    ],
  },
};
