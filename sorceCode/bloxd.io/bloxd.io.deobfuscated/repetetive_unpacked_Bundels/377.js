module.exports = function (CC, yC, IC) {
  var fC = yC[0];
  var ky = yC[1];
  var gC = yC[2];
  var AC = IC[0];
  var my = IC[1];
  var XC = IC[2];
  var iy = IC[3];
  var LC = iy * fC + my * gC - XC * ky;
  var YC = iy * ky + XC * fC - AC * gC;
  var bC = iy * gC + AC * ky - my * fC;
  var rC = -AC * fC - my * ky - XC * gC;
  CC[0] = LC * iy + rC * -AC + YC * -XC - bC * -my;
  CC[1] = YC * iy + rC * -my + bC * -AC - LC * -XC;
  CC[2] = bC * iy + rC * -XC + LC * -my - YC * -AC;
  return CC;
};