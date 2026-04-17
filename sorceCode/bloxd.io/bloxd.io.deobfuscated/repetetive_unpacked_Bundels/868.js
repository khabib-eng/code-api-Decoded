var fC;
var ky = require("./870.js");
var gC = require("./831.js");
try {
  fC = [].__proto__ === Array.prototype;
} catch (iy) {
  if (!iy || "object" !== typeof iy || !("code" in iy) || "ERR_PROTO_ACCESS" !== iy.code) {
    throw iy;
  }
}
var AC = !!fC && gC && gC(Object.prototype, "__proto__");
var my = Object;
var XC = my.getPrototypeOf;
module.exports = AC && "function" === typeof AC.get ? ky([AC.get]) : "function" === typeof XC && function (CC) {
  return XC(null == CC ? CC : my(CC));
};