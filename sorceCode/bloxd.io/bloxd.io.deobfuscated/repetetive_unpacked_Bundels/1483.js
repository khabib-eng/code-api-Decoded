module.exports = function (CC, yC, IC, fC) {
  var ky = IC ? IC.call(fC, CC, yC) : void 0;
  if (void 0 !== ky) {
    return !!ky;
  }
  if (CC === yC) {
    return !0;
  }
  if ("object" !== typeof CC || !CC || "object" !== typeof yC || !yC) {
    return !1;
  }
  var gC = Object.keys(CC);
  var AC = Object.keys(yC);
  if (gC.length !== AC.length) {
    return !1;
  }
  for (var my = Object.prototype.hasOwnProperty.bind(yC), XC = 0; XC < gC.length; XC++) {
    var iy = gC[XC];
    if (!my(iy)) {
      return !1;
    }
    var LC = CC[iy];
    var YC = yC[iy];
    if (!1 === (ky = IC ? IC.call(fC, LC, YC, iy) : void 0) || void 0 === ky && LC !== YC) {
      return !1;
    }
  }
  return !0;
};