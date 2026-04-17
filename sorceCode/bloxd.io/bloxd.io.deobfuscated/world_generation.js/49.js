module.exports = function (p, p2) {
  p2 = p2 || 2;
  var v = (p = p || 1) * 2 + 1;
  for (var v2 = Math.pow(v, p2) - 1, v3 = new Array(v2), vLN0 = 0; vLN0 < v2; vLN0++) {
    var v4 = v3[vLN0] = new Array(p2);
    var v5 = vLN0 < v2 / 2 ? vLN0 : vLN0 + 1;
    for (var vLN1 = 1; vLN1 <= p2; vLN1++) {
      var v6 = v5 % Math.pow(v, vLN1);
      v4[vLN1 - 1] = v6 / Math.pow(v, vLN1 - 1) - p;
      v5 -= v6;
    }
  }
  return v3;
};