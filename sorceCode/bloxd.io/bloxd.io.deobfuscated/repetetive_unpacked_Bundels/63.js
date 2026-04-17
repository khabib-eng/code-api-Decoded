var yC = Object.getOwnPropertySymbols;
var IC = Object.prototype.hasOwnProperty;
var fC = Object.prototype.propertyIsEnumerable;
module.exports = function () {
  try {
    if (!Object.assign) {
      return !1;
    }
    var CC = new String("abc");
    CC[5] = "de";
    if ("5" === Object.getOwnPropertyNames(CC)[0]) {
      return !1;
    }
    for (var yC = {}, IC = 0; IC < 10; IC++) {
      yC["_" + String.fromCharCode(IC)] = IC;
    }
    if ("0123456789" !== Object.getOwnPropertyNames(yC).map(function (CC) {
      return yC[CC];
    }).join("")) {
      return !1;
    }
    var fC = {};
    "abcdefghijklmnopqrst".split("").forEach(function (CC) {
      fC[CC] = CC;
    });
    return "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, fC)).join("");
  } catch (ky) {
    return !1;
  }
}() ? Object.assign : function (CC, ky) {
  for (var gC, AC, my = function (CC) {
      if (null === CC || void 0 === CC) {
        throw new TypeError("Object.assign cannot be called with null or undefined");
      }
      return Object(CC);
    }(CC), XC = 1; XC < arguments.length; XC++) {
    for (var iy in gC = Object(arguments[XC])) {
      IC.call(gC, iy) && (my[iy] = gC[iy]);
    }
    if (yC) {
      AC = yC(gC);
      for (var LC = 0; LC < AC.length; LC++) {
        fC.call(gC, AC[LC]) && (my[AC[LC]] = gC[AC[LC]]);
      }
    }
  }
  return my;
};