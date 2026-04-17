module.exports = function (CC, yC, IC, fC) {
  CC[0] = yC[0] + IC[0] * fC;
  CC[1] = yC[1] + IC[1] * fC;
  CC[2] = yC[2] + IC[2] * fC;
  return CC;
};