var fC;
var ky = Object.prototype.toString;
var gC = Function.prototype.toString;
var AC = /^\s*(?:function)?\*/;
var my = require("./715.js")();
var XC = Object.getPrototypeOf;
module.exports = function (CC) {
  if ("function" !== typeof CC) {
    return !1;
  }
  if (AC.test(gC.call(CC))) {
    return !0;
  }
  if (!my) {
    return "[object GeneratorFunction]" === ky.call(CC);
  }
  if (!XC) {
    return !1;
  }
  if ("undefined" === typeof fC) {
    var yC = function () {
      if (!my) {
        return !1;
      }
      try {
        return Function("return function*() {}")();
      } catch (CC) {}
    }();
    fC = !!yC && XC(yC);
  }
  return XC(CC) === fC;
};