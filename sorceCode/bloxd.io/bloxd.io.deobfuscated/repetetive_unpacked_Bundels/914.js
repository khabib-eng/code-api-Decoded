var fC = require("./735.js");
var ky = require("./923.js");
var gC = require("./931.js")();
var AC = require("./831.js");
var my = require("./777.js");
var XC = fC("%Math.floor%");
module.exports = function (CC, yC) {
  if ("function" !== typeof CC) {
    throw new my("`fn` is not a function");
  }
  if ("number" !== typeof yC || yC < 0 || yC > 4294967295 || XC(yC) !== yC) {
    throw new my("`length` must be a positive 32-bit integer");
  }
  var IC = arguments.length > 2 && !!arguments[2];
  var fC = !0;
  var iy = !0;
  if ("length" in CC && AC) {
    var LC = AC(CC, "length");
    LC && !LC.configurable && (fC = !1);
    LC && !LC.writable && (iy = !1);
  }
  (fC || iy || !IC) && (gC ? ky(CC, "length", yC, !0, !0) : ky(CC, "length", yC));
  return CC;
};