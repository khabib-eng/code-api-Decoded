module.exports = function (CC, yC, IC) {
  var fC = yC[0];
  var ky = yC[1];
  var gC = yC[2];
  CC[0] = fC * IC[0] + ky * IC[3] + gC * IC[6];
  CC[1] = fC * IC[1] + ky * IC[4] + gC * IC[7];
  CC[2] = fC * IC[2] + ky * IC[5] + gC * IC[8];
  return CC;
};