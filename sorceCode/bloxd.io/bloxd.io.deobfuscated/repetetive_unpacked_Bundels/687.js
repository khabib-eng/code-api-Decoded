exports.read = function (CC, yC, IC, fC, ky) {
  var gC;
  var AC;
  var my = 8 * ky - fC - 1;
  var XC = (1 << my) - 1;
  var iy = XC >> 1;
  var LC = -7;
  var YC = IC ? ky - 1 : 0;
  var bC = IC ? -1 : 1;
  var rC = CC[yC + YC];
  YC += bC;
  gC = rC & (1 << -LC) - 1;
  rC >>= -LC;
  LC += my;
  for (; LC > 0; LC -= 8) {
    gC = 256 * gC + CC[yC + YC];
    YC += bC;
  }
  AC = gC & (1 << -LC) - 1;
  gC >>= -LC;
  LC += fC;
  for (; LC > 0; LC -= 8) {
    AC = 256 * AC + CC[yC + YC];
    YC += bC;
  }
  if (0 === gC) {
    gC = 1 - iy;
  } else {
    if (gC === XC) {
      return AC ? NaN : 1 / 0 * (rC ? -1 : 1);
    }
    AC += Math.pow(2, fC);
    gC -= iy;
  }
  return (rC ? -1 : 1) * AC * Math.pow(2, gC - fC);
};
exports.write = function (CC, yC, IC, fC, ky, gC) {
  var AC;
  var my;
  var XC;
  var iy = 8 * gC - ky - 1;
  var LC = (1 << iy) - 1;
  var YC = LC >> 1;
  var bC = 23 === ky ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
  var rC = fC ? 0 : gC - 1;
  var GC = fC ? 1 : -1;
  var eC = yC < 0 || 0 === yC && 1 / yC < 0 ? 1 : 0;
  yC = Math.abs(yC);
  isNaN(yC) || yC === 1 / 0 ? (my = isNaN(yC) ? 1 : 0, AC = LC) : (AC = Math.floor(Math.log(yC) / Math.LN2), yC * (XC = Math.pow(2, -AC)) < 1 && (AC--, XC *= 2), (yC += AC + YC >= 1 ? bC / XC : bC * Math.pow(2, 1 - YC)) * XC >= 2 && (AC++, XC /= 2), AC + YC >= LC ? (my = 0, AC = LC) : AC + YC >= 1 ? (my = (yC * XC - 1) * Math.pow(2, ky), AC += YC) : (my = yC * Math.pow(2, YC - 1) * Math.pow(2, ky), AC = 0));
  for (; ky >= 8; ky -= 8) {
    CC[IC + rC] = 255 & my;
    rC += GC;
    my /= 256;
  }
  AC = AC << ky | my;
  iy += ky;
  for (; iy > 0; iy -= 8) {
    CC[IC + rC] = 255 & AC;
    rC += GC;
    AC /= 256;
  }
  CC[IC + rC - GC] |= 128 * eC;
};