// let webpack know the entry point (src/app.js) and the output file
const path = require('path');
// path to current location
console.log(path.join(__dirname, 'public'));
// all our configurations
module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  }
};