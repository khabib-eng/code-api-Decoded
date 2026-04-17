var fC = require("./1295.js").default;
var ky = require("./1300.js");
module.exports = function (CC) {
  var yC = ky(CC, "string");
  return "symbol" == fC(yC) ? yC : yC + "";
};
module.exports.__esModule = !0;
module.exports.default = module.exports;