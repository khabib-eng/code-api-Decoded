var fC = "undefined" !== typeof Symbol && Symbol;
var ky = require("./724.js");
module.exports = function () {
  return "function" === typeof fC && "function" === typeof Symbol && "symbol" === typeof fC("foo") && "symbol" === typeof Symbol("bar") && ky();
};