var fC = require("./949.js");
var ky = Object.prototype.toString;
var gC = Object.prototype.hasOwnProperty;
module.exports = function (CC, yC, IC) {
  if (!fC(yC)) {
    throw new TypeError("iterator must be a function");
  }
  var AC;
  arguments.length >= 3 && (AC = IC);
  "[object Array]" === ky.call(CC) ? function (CC, yC, IC) {
    for (var fC = 0, ky = CC.length; fC < ky; fC++) {
      gC.call(CC, fC) && (null == IC ? yC(CC[fC], fC, CC) : yC.call(IC, CC[fC], fC, CC));
    }
  }(CC, yC, AC) : "string" === typeof CC ? function (CC, yC, IC) {
    for (var fC = 0, ky = CC.length; fC < ky; fC++) {
      null == IC ? yC(CC.charAt(fC), fC, CC) : yC.call(IC, CC.charAt(fC), fC, CC);
    }
  }(CC, yC, AC) : function (CC, yC, IC) {
    for (var fC in CC) {
      gC.call(CC, fC) && (null == IC ? yC(CC[fC], fC, CC) : yC.call(IC, CC[fC], fC, CC));
    }
  }(CC, yC, AC);
};