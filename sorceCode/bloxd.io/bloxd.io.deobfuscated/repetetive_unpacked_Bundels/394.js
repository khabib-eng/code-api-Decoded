module.exports = function (CC, yC, IC, fC) {
  var ky = IC[0];
  var gC = IC[1];
  var AC = yC[0] - ky;
  var my = yC[1] - gC;
  var XC = Math.sin(fC);
  var iy = Math.cos(fC);
  CC[0] = ky + AC * iy - my * XC;
  CC[1] = gC + AC * XC + my * iy;
  CC[2] = yC[2];
  return CC;
};