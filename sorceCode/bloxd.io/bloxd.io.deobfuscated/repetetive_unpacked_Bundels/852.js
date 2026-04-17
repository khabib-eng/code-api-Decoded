var fC = require("./860.js");
var ky = require("./862.js");
var gC = require("./868.js");
module.exports = fC ? function (CC) {
  return fC(CC);
} : ky ? function (CC) {
  if (!CC || "object" !== typeof CC && "function" !== typeof CC) {
    throw new TypeError("getProto: not an object");
  }
  return ky(CC);
} : gC ? function (CC) {
  return gC(CC);
} : null;