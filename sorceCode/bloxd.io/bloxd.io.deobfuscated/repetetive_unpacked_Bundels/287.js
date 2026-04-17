module.exports = function (CC, yC) {
  CC[0] = Math.round(yC[0]);
  CC[1] = Math.round(yC[1]);
  CC[2] = Math.round(yC[2]);
  return CC;
};