const path = require("path");

module.exports = {
  mode: "development",

  entry: path.join(__dirname, "../src/absolute/main-esm.mjs"),
  output: {
    path: __dirname,
    filename: "output-absolute.js",
    hashFunction: "sha256",
  },

  devtool: false,
};
