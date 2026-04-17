function f(p) {
  var vLN32 = 32;
  if (p &= -p) {
    vLN32--;
  }
  if (p & 65535) {
    vLN32 -= 16;
  }
  if (p & 16711935) {
    vLN32 -= 8;
  }
  if (p & 252645135) {
    vLN32 -= 4;
  }
  if (p & 858993459) {
    vLN32 -= 2;
  }
  if (p & 1431655765) {
    vLN32 -= 1;
  }
  return vLN32;
}
exports.INT_BITS = 32;
exports.INT_MAX = 2147483647;
exports.INT_MIN = -2147483648;
exports.sign = function (p2) {
  return (p2 > 0) - (p2 < 0);
};
exports.abs = function (p3) {
  var v = p3 >> 31;
  return (p3 ^ v) - v;
};
exports.min = function (p4, p5) {
  return p5 ^ (p4 ^ p5) & -(p4 < p5);
};
exports.max = function (p6, p7) {
  return p6 ^ (p6 ^ p7) & -(p6 < p7);
};
exports.isPow2 = function (p8) {
  return !(p8 & p8 - 1) && !!p8;
};
exports.log2 = function (p9) {
  var v2;
  var v3;
  v2 = (p9 > 65535) << 4;
  v2 |= v3 = ((p9 >>>= v2) > 255) << 3;
  v2 |= v3 = ((p9 >>>= v3) > 15) << 2;
  return (v2 |= v3 = ((p9 >>>= v3) > 3) << 1) | (p9 >>>= v3) >> 1;
};
exports.log10 = function (p10) {
  if (p10 >= 1000000000) {
    return 9;
  } else if (p10 >= 100000000) {
    return 8;
  } else if (p10 >= 10000000) {
    return 7;
  } else if (p10 >= 1000000) {
    return 6;
  } else if (p10 >= 100000) {
    return 5;
  } else if (p10 >= 10000) {
    return 4;
  } else if (p10 >= 1000) {
    return 3;
  } else if (p10 >= 100) {
    return 2;
  } else if (p10 >= 10) {
    return 1;
  } else {
    return 0;
  }
};
exports.popCount = function (p11) {
  return ((p11 = ((p11 -= p11 >>> 1 & 1431655765) & 858993459) + (p11 >>> 2 & 858993459)) + (p11 >>> 4) & 252645135) * 16843009 >>> 24;
};
exports.countTrailingZeros = f;
exports.nextPow2 = function (p12) {
  p12 += p12 === 0;
  --p12;
  p12 |= p12 >>> 1;
  p12 |= p12 >>> 2;
  p12 |= p12 >>> 4;
  p12 |= p12 >>> 8;
  return (p12 |= p12 >>> 16) + 1;
};
exports.prevPow2 = function (p13) {
  p13 |= p13 >>> 1;
  p13 |= p13 >>> 2;
  p13 |= p13 >>> 4;
  p13 |= p13 >>> 8;
  return (p13 |= p13 >>> 16) - (p13 >>> 1);
};
exports.parity = function (p14) {
  p14 ^= p14 >>> 16;
  p14 ^= p14 >>> 8;
  p14 ^= p14 >>> 4;
  return 27030 >>> (p14 &= 15) & 1;
};
var v4 = new Array(256);
(function (p15) {
  for (var vLN0 = 0; vLN0 < 256; ++vLN0) {
    var vVLN0 = vLN0;
    var vVLN02 = vLN0;
    var vLN72 = 7;
    for (vVLN0 >>>= 1; vVLN0; vVLN0 >>>= 1) {
      vVLN02 <<= 1;
      vVLN02 |= vVLN0 & 1;
      --vLN72;
    }
    p15[vLN0] = vVLN02 << vLN72 & 255;
  }
})(v4);
exports.reverse = function (p16) {
  return v4[p16 & 255] << 24 | v4[p16 >>> 8 & 255] << 16 | v4[p16 >>> 16 & 255] << 8 | v4[p16 >>> 24 & 255];
};
exports.interleave2 = function (p17, p18) {
  return (p17 = ((p17 = ((p17 = ((p17 = ((p17 &= 65535) | p17 << 8) & 16711935) | p17 << 4) & 252645135) | p17 << 2) & 858993459) | p17 << 1) & 1431655765) | (p18 = ((p18 = ((p18 = ((p18 = ((p18 &= 65535) | p18 << 8) & 16711935) | p18 << 4) & 252645135) | p18 << 2) & 858993459) | p18 << 1) & 1431655765) << 1;
};
exports.deinterleave2 = function (p19, p20) {
  return (p19 = ((p19 = ((p19 = ((p19 = ((p19 = p19 >>> p20 & 1431655765) | p19 >>> 1) & 858993459) | p19 >>> 2) & 252645135) | p19 >>> 4) & 16711935) | p19 >>> 16) & 65535) << 16 >> 16;
};
exports.interleave3 = function (p21, p22, p23) {
  p21 = ((p21 = ((p21 = ((p21 = ((p21 &= 1023) | p21 << 16) & -16776961) | p21 << 8) & 251719695) | p21 << 4) & -1022611261) | p21 << 2) & 1227133513;
  return (p21 |= (p22 = ((p22 = ((p22 = ((p22 = ((p22 &= 1023) | p22 << 16) & -16776961) | p22 << 8) & 251719695) | p22 << 4) & -1022611261) | p22 << 2) & 1227133513) << 1) | (p23 = ((p23 = ((p23 = ((p23 = ((p23 &= 1023) | p23 << 16) & -16776961) | p23 << 8) & 251719695) | p23 << 4) & -1022611261) | p23 << 2) & 1227133513) << 2;
};
exports.deinterleave3 = function (p24, p25) {
  return (p24 = ((p24 = ((p24 = ((p24 = ((p24 = p24 >>> p25 & 1227133513) | p24 >>> 2) & -1022611261) | p24 >>> 4) & 251719695) | p24 >>> 8) & -16776961) | p24 >>> 16) & 1023) << 22 >> 22;
};
exports.nextCombination = function (p26) {
  var v5 = p26 | p26 - 1;
  return v5 + 1 | (~v5 & -~v5) - 1 >>> f(p26) + 1;
};