module.exports = function (p, p2) {
  var v;
  var v2;
  var v3;
  var v4;
  var v5;
  var v6 = new Array(p);
  var v7 = Math.floor(p / 2) << 1;
  var vLN0 = 0;
  for (v5 = 0; v5 < v7; v5 += 2) {
    v = Math.log(p2()) * -2;
    v2 = Math.sqrt(v);
    v3 = Math.PI * 2 * p2();
    vLN0 += v;
    v6[v5] = v2 * Math.cos(v3);
    v6[v5 + 1] = v2 * Math.sin(v3);
  }
  if (p % 2) {
    var v8 = Math.sqrt(Math.log(p2()) * -2) * Math.cos(Math.PI * 2 * p2());
    v6[p - 1] = v8;
    vLN0 += Math.pow(v8, 2);
  }
  v4 = 1 / Math.sqrt(vLN0);
  v5 = 0;
  for (; v5 < p; ++v5) {
    v6[v5] *= v4;
  }
  return v6;
};