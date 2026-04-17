module.exports = function (CC, yC) {
  var IC = yC[0];
  var fC = yC[1];
  var ky = yC[2];
  var gC = IC * IC + fC * fC + ky * ky;
  gC > 0 && (gC = 1 / Math.sqrt(gC), CC[0] = yC[0] * gC, CC[1] = yC[1] * gC, CC[2] = yC[2] * gC);
  return CC;
};