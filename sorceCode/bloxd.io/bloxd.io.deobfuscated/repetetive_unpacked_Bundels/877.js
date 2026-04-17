var yC = Object.prototype.toString;
var IC = Math.max;
function fC(CC, yC) {
  for (var IC = [], fC = 0; fC < CC.length; fC += 1) {
    IC[fC] = CC[fC];
  }
  for (var ky = 0; ky < yC.length; ky += 1) {
    IC[ky + CC.length] = yC[ky];
  }
  return IC;
}
module.exports = function (CC) {
  var ky = this;
  if ("function" !== typeof ky || "[object Function]" !== yC.apply(ky)) {
    throw new TypeError("Function.prototype.bind called on incompatible " + ky);
  }
  for (var gC, AC = function (CC, yC) {
      for (var IC = [], fC = yC || 0, ky = 0; fC < CC.length; fC += 1, ky += 1) {
        IC[ky] = CC[fC];
      }
      return IC;
    }(arguments, 1), my = IC(0, ky.length - AC.length), XC = [], iy = 0; iy < my; iy++) {
    XC[iy] = "$" + iy;
  }
  gC = Function("binder", "return function (" + function (CC, yC) {
    for (var IC = "", fC = 0; fC < CC.length; fC += 1) {
      IC += CC[fC];
      fC + 1 < CC.length && (IC += yC);
    }
    return IC;
  }(XC, ",") + "){ return binder.apply(this,arguments); }")(function () {
    if (this instanceof gC) {
      var yC = ky.apply(this, fC(AC, arguments));
      return Object(yC) === yC ? yC : this;
    }
    return ky.apply(CC, fC(AC, arguments));
  });
  if (ky.prototype) {
    function LC() {}
    LC.prototype = ky.prototype;
    gC.prototype = new LC();
    LC.prototype = null;
  }
  return gC;
};