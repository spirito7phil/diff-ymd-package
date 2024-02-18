const path = require('path');

module.exports = {
  entry: './src/index.js', // Entry point of your application
  output: {
    path: path.resolve(__dirname, 'lib'), // Output directory
    filename: 'index.js', // Output filename
    library: 'DatesYMD', // Name of your library
    libraryTarget: 'umd', // Universal Module Definition
    // Expose the default export as a global variable
    globalObject: 'this',
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Apply Babel only to JavaScript files
        exclude: /node_modules/, // Exclude node_modules directory
        use: {
          loader: 'babel-loader', // Use babel-loader for transpilation
          options: {
            presets: ['@babel/preset-env'], // Use @babel/preset-env for compatibility
          },
        },
      },
    ],
  },
};
