module.exports = {
  // where all our files are is the entry
  entry: './src',
  // where we want the built part to go
  output: {
    // folder
    path: 'builds',
    // file name
    filename: 'bundle.js',
  },
  module: {
    // what loaders
    loaders: [{
      test: /\.js/,
      loader: 'babel',
      include: __dirname + '/src',
    }, {
      test: /\.scss/,
      loaders: ['style', 'css', 'sass'],
    }, {
      test: /\.html/,
      loader: 'html',
    }]
  }
};
