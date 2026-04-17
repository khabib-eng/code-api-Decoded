module.exports = function (CC, yC) {
  var IC = CC[0];
  var ky = CC[1];
  var gC = CC[2];
  var AC = yC[0];
  var my = yC[1];
  var XC = yC[2];
  return Math.abs(IC - AC) <= fC * Math.max(1, Math.abs(IC), Math.abs(AC)) && Math.abs(ky - my) <= fC * Math.max(1, Math.abs(ky), Math.abs(my)) && Math.abs(gC - XC) <= fC * Math.max(1, Math.abs(gC), Math.abs(XC));
};
var fC = require("./160.js");