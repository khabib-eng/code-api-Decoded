exports.byteLength = function (CC) {
  var yC = my(CC);
  var IC = yC[0];
  var fC = yC[1];
  return 3 * (IC + fC) / 4 - fC;
};
exports.toByteArray = function (CC) {
  var yC;
  var IC;
  var gC = my(CC);
  var AC = gC[0];
  var XC = gC[1];
  var iy = new ky(function (CC, yC, IC) {
    return 3 * (yC + IC) / 4 - IC;
  }(0, AC, XC));
  var LC = 0;
  var YC = XC > 0 ? AC - 4 : AC;
  for (IC = 0; IC < YC; IC += 4) {
    yC = fC[CC.charCodeAt(IC)] << 18 | fC[CC.charCodeAt(IC + 1)] << 12 | fC[CC.charCodeAt(IC + 2)] << 6 | fC[CC.charCodeAt(IC + 3)];
    iy[LC++] = yC >> 16 & 255;
    iy[LC++] = yC >> 8 & 255;
    iy[LC++] = 255 & yC;
  }
  2 === XC && (yC = fC[CC.charCodeAt(IC)] << 2 | fC[CC.charCodeAt(IC + 1)] >> 4, iy[LC++] = 255 & yC);
  1 === XC && (yC = fC[CC.charCodeAt(IC)] << 10 | fC[CC.charCodeAt(IC + 1)] << 4 | fC[CC.charCodeAt(IC + 2)] >> 2, iy[LC++] = yC >> 8 & 255, iy[LC++] = 255 & yC);
  return iy;
};
exports.fromByteArray = function (CC) {
  for (var yC, fC = CC.length, ky = fC % 3, gC = [], AC = 16383, my = 0, iy = fC - ky; my < iy; my += AC) {
    gC.push(XC(CC, my, my + AC > iy ? iy : my + AC));
  }
  1 === ky ? (yC = CC[fC - 1], gC.push(IC[yC >> 2] + IC[yC << 4 & 63] + "==")) : 2 === ky && (yC = (CC[fC - 2] << 8) + CC[fC - 1], gC.push(IC[yC >> 10] + IC[yC >> 4 & 63] + IC[yC << 2 & 63] + "="));
  return gC.join("");
};
for (var IC = [], fC = [], ky = "undefined" !== typeof Uint8Array ? Uint8Array : Array, gC = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", AC = 0; AC < 64; ++AC) {
  IC[AC] = gC[AC];
  fC[gC.charCodeAt(AC)] = AC;
}
function my(CC) {
  var yC = CC.length;
  if (yC % 4 > 0) {
    throw new Error("Invalid string. Length must be a multiple of 4");
  }
  var IC = CC.indexOf("=");
  -1 === IC && (IC = yC);
  return [IC, IC === yC ? 0 : 4 - IC % 4];
}
function XC(CC, yC, fC) {
  for (var ky, gC, AC = [], my = yC; my < fC; my += 3) {
    ky = (CC[my] << 16 & 16711680) + (CC[my + 1] << 8 & 65280) + (255 & CC[my + 2]);
    AC.push(IC[(gC = ky) >> 18 & 63] + IC[gC >> 12 & 63] + IC[gC >> 6 & 63] + IC[63 & gC]);
  }
  return AC.join("");
}
fC["-".charCodeAt(0)] = 62;
fC["_".charCodeAt(0)] = 63;