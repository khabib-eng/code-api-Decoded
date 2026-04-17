var js = require("./76.js");
function f(p) {
  var v;
  var v2;
  var vLN0 = 0;
  var v3 = p.length;
  for (var vLN02 = 0; vLN02 < p.length;) {
    v = p[vLN02];
    v2 = 0;
    while (vLN02 < v3 && p[vLN02] === v) {
      ++vLN02;
      ++v2;
    }
    vLN0 += js.log2(v2) / 7 | 0;
    vLN0 += js.log2(v >>> 0) / 7 | 0;
    vLN0 += 2;
  }
  return vLN0;
}
exports.size = f;
exports.encode = function (p2, p3) {
  p3 ||= new Uint8Array(f(p2));
  var v4;
  var v5;
  var vLN03 = 0;
  var v6 = p3.length;
  for (var vLN04 = 0; vLN04 < p2.length;) {
    v4 = p2[vLN04];
    v5 = 0;
    while (vLN04 < p2.length && p2[vLN04] === v4) {
      ++vLN04;
      ++v5;
    }
    while (vLN03 < v6 && v5 >= 128) {
      p3[vLN03++] = 128 + (v5 & 127);
      v5 >>>= 7;
    }
    if (vLN03 >= v6) {
      throw new Error("RLE buffer overflow");
    }
    p3[vLN03++] = v5;
    v4 >>>= 0;
    while (vLN03 < v6 && v4 >= 128) {
      p3[vLN03++] = 128 + (v4 & 127);
      v4 >>>= 7;
    }
    if (vLN03 >= v6) {
      throw new Error("RLE buffer overflow");
    }
    p3[vLN03++] = v4;
  }
  return p3;
};
exports.decode = function (p4, p5) {
  var v7;
  var v8;
  var v9;
  var v10;
  var v11 = p5.length;
  for (var v12 = p4.length, vLN05 = 0, vLN06 = 0; vLN06 < v12;) {
    v7 = 0;
    v8 = 0;
    while (vLN06 < v12 && p4[vLN06] >= 128) {
      v7 += (p4[vLN06++] & 127) << v8;
      v8 += 7;
    }
    v7 += p4[vLN06++] << v8;
    if (vLN06 >= v12) {
      throw new Error("RLE buffer underrun");
    }
    if (vLN05 + v7 > v11) {
      throw new Error("Chunk buffer overflow");
    }
    v9 = 0;
    v8 = 0;
    while (vLN06 < v12 && p4[vLN06] >= 128) {
      v9 += (p4[vLN06++] & 127) << v8;
      v8 += 7;
    }
    if (vLN06 >= v12) {
      throw new Error("RLE buffer underrun");
    }
    v9 += p4[vLN06++] << v8;
    v10 = 0;
    for (; v10 < v7; ++v10) {
      p5[vLN05++] = v9;
    }
  }
  return p5;
};