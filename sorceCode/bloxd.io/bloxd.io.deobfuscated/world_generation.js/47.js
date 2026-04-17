var js = require("./49.js");
var vO = {};
module.exports = function (p) {
  vO[p] ||= function (p2) {
    var v;
    var vJs = js(2, p2);
    var vA = [];
    vJs = vJs.filter(function (p3) {
      var vLN0 = 0;
      for (var vLN02 = 0; vLN02 < p2; vLN02++) {
        vLN0 += Math.pow(Math.max(0, Math.abs(p3[vLN02]) - 1), 2);
      }
      return vLN0 < p2;
    });
    v = 0;
    for (; v < p2; v++) {
      vA.push(0);
    }
    vJs.push(vA);
    vJs.sort(function (p4, p5) {
      var v2;
      var vLN03 = 0;
      var vLN04 = 0;
      for (v2 = 0; v2 < p2; v2++) {
        vLN03 += Math.pow(p4[v2], 2);
        vLN04 += Math.pow(p5[v2], 2);
      }
      if (vLN03 < vLN04) {
        return -1;
      } else if (vLN03 > vLN04) {
        return 1;
      } else {
        return 0;
      }
    });
    return vJs;
  }(p);
  return vO[p];
};