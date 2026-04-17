module.exports = function (CC, yC, IC, fC) {
  var ky = yC[0];
  var gC = yC[1];
  var AC = yC[2];
  CC[0] = ky + fC * (IC[0] - ky);
  CC[1] = gC + fC * (IC[1] - gC);
  CC[2] = AC + fC * (IC[2] - AC);
  return CC;
};