module.exports = function (CC, yC, IC) {
  CC[0] = yC[0] + IC[0];
  CC[1] = yC[1] + IC[1];
  CC[2] = yC[2] + IC[2];
  return CC;
};