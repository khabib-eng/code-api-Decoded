module.exports = function (CC, yC, IC, ky, gC, AC) {
  var my;
  var XC;
  yC || (yC = 3);
  IC || (IC = 0);
  XC = ky ? Math.min(ky * yC + IC, CC.length) : CC.length;
  for (my = IC; my < XC; my += yC) {
    fC[0] = CC[my];
    fC[1] = CC[my + 1];
    fC[2] = CC[my + 2];
    gC(fC, fC, AC);
    CC[my] = fC[0];
    CC[my + 1] = fC[1];
    CC[my + 2] = fC[2];
  }
  return CC;
};
var fC = require("./156.js")();