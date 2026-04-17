module.exports = function (CC, yC, IC, fC) {
  var ky = IC[0];
  var gC = IC[2];
  var AC = yC[0] - ky;
  var my = yC[2] - gC;
  var XC = Math.sin(fC);
  var iy = Math.cos(fC);
  CC[0] = ky + my * XC + AC * iy;
  CC[1] = yC[1];
  CC[2] = gC + my * iy - AC * XC;
  return CC;
};