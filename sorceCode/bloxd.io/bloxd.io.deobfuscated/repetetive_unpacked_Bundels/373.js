module.exports = function (CC, yC, IC) {
  var fC = yC[0];
  var ky = yC[1];
  var gC = yC[2];
  var AC = IC[3] * fC + IC[7] * ky + IC[11] * gC + IC[15];
  AC = AC || 1;
  CC[0] = (IC[0] * fC + IC[4] * ky + IC[8] * gC + IC[12]) / AC;
  CC[1] = (IC[1] * fC + IC[5] * ky + IC[9] * gC + IC[13]) / AC;
  CC[2] = (IC[2] * fC + IC[6] * ky + IC[10] * gC + IC[14]) / AC;
  return CC;
};