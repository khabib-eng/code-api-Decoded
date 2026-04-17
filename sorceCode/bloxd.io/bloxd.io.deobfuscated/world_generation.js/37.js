module.exports = {
  integer: function (p) {
    var v;
    var v2 = p.length;
    var vLN1 = 1;
    var v3 = new Array(v2);
    for (v = v2; v > 0; v--) {
      v3[v - 1] = vLN1;
      vLN1 *= p[v - 1];
    }
    return {
      stride: v3,
      data: new Uint32Array(vLN1)
    };
  },
  array: function (p2) {
    var v4;
    var v5;
    var v6 = p2.length;
    var vLN12 = 1;
    var v7 = new Array(v6);
    var vA = [];
    for (v4 = v6; v4 > 0; v4--) {
      v7[v4 - 1] = vLN12;
      vLN12 *= p2[v4 - 1];
    }
    for (v5 = 0; v5 < vLN12; v5++) {
      vA.push([]);
    }
    return {
      stride: v7,
      data: vA
    };
  }
};