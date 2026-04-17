var fC = require("./724.js");
module.exports = function () {
  return fC() && !!Symbol.toStringTag;
};