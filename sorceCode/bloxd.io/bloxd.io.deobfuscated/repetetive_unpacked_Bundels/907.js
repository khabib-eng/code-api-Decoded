var fC = require("./874.js");
var ky = require("./735.js");
var gC = require("./914.js");
var AC = require("./777.js");
var my = ky("%Function.prototype.apply%");
var XC = ky("%Function.prototype.call%");
var iy = ky("%Reflect.apply%", !0) || fC.call(XC, my);
var LC = require("./842.js");
var YC = ky("%Math.max%");
module.exports = function (CC) {
  if ("function" !== typeof CC) {
    throw new AC("a function is required");
  }
  var yC = iy(fC, XC, arguments);
  return gC(yC, 1 + YC(0, CC.length - (arguments.length - 1)), !0);
};
function bC() {
  return iy(fC, my, arguments);
}
LC ? LC(module.exports, "apply", {
  value: bC
}) : module.exports.apply = bC;