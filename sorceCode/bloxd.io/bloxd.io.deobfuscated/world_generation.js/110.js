exports.byteLength = function (p) {
  var vF39 = f(p);
  var v = vF39[0];
  var v2 = vF39[1];
  return (v + v2) * 3 / 4 - v2;
};
exports.toByteArray = function (p2) {
  var v3;
  var v4;
  var vF392 = f(p2);
  var v5 = vF392[0];
  var v6 = vF392[1];
  var v7 = new v13(function (p3, p4, p5) {
    return (p4 + p5) * 3 / 4 - p5;
  }(0, v5, v6));
  var vLN0 = 0;
  var v8 = v6 > 0 ? v5 - 4 : v5;
  for (v4 = 0; v4 < v8; v4 += 4) {
    v3 = vA3[p2.charCodeAt(v4)] << 18 | vA3[p2.charCodeAt(v4 + 1)] << 12 | vA3[p2.charCodeAt(v4 + 2)] << 6 | vA3[p2.charCodeAt(v4 + 3)];
    v7[vLN0++] = v3 >> 16 & 255;
    v7[vLN0++] = v3 >> 8 & 255;
    v7[vLN0++] = v3 & 255;
  }
  if (v6 === 2) {
    v3 = vA3[p2.charCodeAt(v4)] << 2 | vA3[p2.charCodeAt(v4 + 1)] >> 4;
    v7[vLN0++] = v3 & 255;
  }
  if (v6 === 1) {
    v3 = vA3[p2.charCodeAt(v4)] << 10 | vA3[p2.charCodeAt(v4 + 1)] << 4 | vA3[p2.charCodeAt(v4 + 2)] >> 2;
    v7[vLN0++] = v3 >> 8 & 255;
    v7[vLN0++] = v3 & 255;
  }
  return v7;
};
exports.fromByteArray = function (p6) {
  var v9;
  var v10 = p6.length;
  var v11 = v10 % 3;
  var vA = [];
  for (var vLN163832 = 16383, vLN02 = 0, v12 = v10 - v11; vLN02 < v12; vLN02 += vLN163832) {
    vA.push(f2(p6, vLN02, vLN02 + vLN163832 > v12 ? v12 : vLN02 + vLN163832));
  }
  if (v11 === 1) {
    v9 = p6[v10 - 1];
    vA.push(vA2[v9 >> 2] + vA2[v9 << 4 & 63] + "==");
  } else if (v11 === 2) {
    v9 = (p6[v10 - 2] << 8) + p6[v10 - 1];
    vA.push(vA2[v9 >> 10] + vA2[v9 >> 4 & 63] + vA2[v9 << 2 & 63] + "=");
  }
  return vA.join("");
};
var vA2 = [];
var vA3 = [];
var v13 = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
var vLSABCDEFGHIJKLMNOPQRST2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var vLN03 = 0; vLN03 < 64; ++vLN03) {
  vA2[vLN03] = vLSABCDEFGHIJKLMNOPQRST2[vLN03];
  vA3[vLSABCDEFGHIJKLMNOPQRST2.charCodeAt(vLN03)] = vLN03;
}
function f(p7) {
  var v14 = p7.length;
  if (v14 % 4 > 0) {
    throw new Error("Invalid string. Length must be a multiple of 4");
  }
  var v15 = p7.indexOf("=");
  if (v15 === -1) {
    v15 = v14;
  }
  return [v15, v15 === v14 ? 0 : 4 - v15 % 4];
}
function f2(p8, p9, p10) {
  var v16;
  var v17;
  var vA4 = [];
  for (var vP9 = p9; vP9 < p10; vP9 += 3) {
    v16 = (p8[vP9] << 16 & 16711680) + (p8[vP9 + 1] << 8 & 65280) + (p8[vP9 + 2] & 255);
    vA4.push(vA2[(v17 = v16) >> 18 & 63] + vA2[v17 >> 12 & 63] + vA2[v17 >> 6 & 63] + vA2[v17 & 63]);
  }
  return vA4.join("");
}
vA3["-".charCodeAt(0)] = 62;
vA3["_".charCodeAt(0)] = 63;