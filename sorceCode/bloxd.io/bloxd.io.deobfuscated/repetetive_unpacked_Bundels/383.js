module.exports = function (CC, yC, IC, fC) {
  var ky = IC[1];
  var gC = IC[2];
  var AC = yC[1] - ky;
  var my = yC[2] - gC;
  var XC = Math.sin(fC);
  var iy = Math.cos(fC);
  CC[0] = yC[0];
  CC[1] = ky + AC * iy - my * XC;
  CC[2] = gC + AC * XC + my * iy;
  return CC;
};