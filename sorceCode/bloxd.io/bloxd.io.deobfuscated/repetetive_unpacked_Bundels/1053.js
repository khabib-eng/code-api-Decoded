var fC = require("./675.js");
var ky = fC.iI;
function gC(CC, yC) {
  for (var IC in CC) {
    yC[IC] = CC[IC];
  }
}
function AC(CC, yC, IC) {
  return ky(CC, yC, IC);
}
ky.from && ky.alloc && ky.allocUnsafe && ky.allocUnsafeSlow ? module.exports = fC : (gC(fC, exports), exports.iI = AC);
AC.prototype = Object.create(ky.prototype);
gC(ky, AC);
AC.from = function (CC, yC, IC) {
  if ("number" === typeof CC) {
    throw new TypeError("Argument must not be a number");
  }
  return ky(CC, yC, IC);
};
AC.alloc = function (CC, yC, IC) {
  if ("number" !== typeof CC) {
    throw new TypeError("Argument must be a number");
  }
  var fC = ky(CC);
  void 0 !== yC ? "string" === typeof IC ? fC.fill(yC, IC) : fC.fill(yC) : fC.fill(0);
  return fC;
};
AC.allocUnsafe = function (CC) {
  if ("number" !== typeof CC) {
    throw new TypeError("Argument must be a number");
  }
  return ky(CC);
};
AC.allocUnsafeSlow = function (CC) {
  if ("number" !== typeof CC) {
    throw new TypeError("Argument must be a number");
  }
  return fC.SlowBuffer(CC);
};