module.exports = function (CC, yC, IC) {
  var fC = yC[0];
  var ky = yC[1];
  var gC = yC[2];
  var AC = IC[0];
  var my = IC[1];
  var XC = IC[2];
  CC[0] = ky * XC - gC * my;
  CC[1] = gC * AC - fC * XC;
  CC[2] = fC * my - ky * AC;
  return CC;
};