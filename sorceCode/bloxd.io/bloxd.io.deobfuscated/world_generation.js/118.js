exports.read = function (p, p2, p3, p4, p5) {
  var v;
  var v2;
  var v3 = p5 * 8 - p4 - 1;
  var v4 = (1 << v3) - 1;
  var v5 = v4 >> 1;
  var v6 = -7;
  var v7 = p3 ? p5 - 1 : 0;
  var v8 = p3 ? -1 : 1;
  var v9 = p[p2 + v7];
  v7 += v8;
  v = v9 & (1 << -v6) - 1;
  v9 >>= -v6;
  v6 += v3;
  for (; v6 > 0; v6 -= 8) {
    v = v * 256 + p[p2 + v7];
    v7 += v8;
  }
  v2 = v & (1 << -v6) - 1;
  v >>= -v6;
  v6 += p4;
  for (; v6 > 0; v6 -= 8) {
    v2 = v2 * 256 + p[p2 + v7];
    v7 += v8;
  }
  if (v === 0) {
    v = 1 - v5;
  } else {
    if (v === v4) {
      if (v2) {
        return NaN;
      } else {
        return (v9 ? -1 : 1) * Infinity;
      }
    }
    v2 += Math.pow(2, p4);
    v -= v5;
  }
  return (v9 ? -1 : 1) * v2 * Math.pow(2, v - p4);
};
exports.write = function (p6, p7, p8, p9, p10, p11) {
  var v10;
  var v11;
  var v12;
  var v13 = p11 * 8 - p10 - 1;
  var v14 = (1 << v13) - 1;
  var v15 = v14 >> 1;
  var v16 = p10 === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
  var v17 = p9 ? 0 : p11 - 1;
  var v18 = p9 ? 1 : -1;
  var v19 = p7 < 0 || p7 === 0 && 1 / p7 < 0 ? 1 : 0;
  p7 = Math.abs(p7);
  if (isNaN(p7) || p7 === Infinity) {
    v11 = isNaN(p7) ? 1 : 0;
    v10 = v14;
  } else {
    v10 = Math.floor(Math.log(p7) / Math.LN2);
    if (p7 * (v12 = Math.pow(2, -v10)) < 1) {
      v10--;
      v12 *= 2;
    }
    if ((p7 += v10 + v15 >= 1 ? v16 / v12 : v16 * Math.pow(2, 1 - v15)) * v12 >= 2) {
      v10++;
      v12 /= 2;
    }
    if (v10 + v15 >= v14) {
      v11 = 0;
      v10 = v14;
    } else if (v10 + v15 >= 1) {
      v11 = (p7 * v12 - 1) * Math.pow(2, p10);
      v10 += v15;
    } else {
      v11 = p7 * Math.pow(2, v15 - 1) * Math.pow(2, p10);
      v10 = 0;
    }
  }
  for (; p10 >= 8; p10 -= 8) {
    p6[p8 + v17] = v11 & 255;
    v17 += v18;
    v11 /= 256;
  }
  v10 = v10 << p10 | v11;
  v13 += p10;
  for (; v13 > 0; v13 -= 8) {
    p6[p8 + v17] = v10 & 255;
    v17 += v18;
    v10 /= 256;
  }
  p6[p8 + v17 - v18] |= v19 * 128;
};