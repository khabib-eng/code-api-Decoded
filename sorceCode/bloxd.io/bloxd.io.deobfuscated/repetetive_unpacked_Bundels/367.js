module.exports = function (CC, yC) {
  yC = yC || 1;
  var IC = 2 * Math.random() * Math.PI;
  var fC = 2 * Math.random() - 1;
  var ky = Math.sqrt(1 - fC * fC) * yC;
  CC[0] = Math.cos(IC) * ky;
  CC[1] = Math.sin(IC) * ky;
  CC[2] = fC * yC;
  return CC;
};