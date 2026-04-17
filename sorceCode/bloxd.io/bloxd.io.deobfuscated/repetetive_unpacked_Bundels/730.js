var fC = require("./735.js");
var ky = require("./907.js");
var gC = ky(fC("String.prototype.indexOf"));
module.exports = function (CC, yC) {
  var IC = fC(CC, !!yC);
  return "function" === typeof IC && gC(CC, ".prototype.") > -1 ? ky(IC) : IC;
};