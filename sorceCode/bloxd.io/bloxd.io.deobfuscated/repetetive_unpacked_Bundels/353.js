module.exports = function (CC, yC) {
  CC[0] = 1 / yC[0];
  CC[1] = 1 / yC[1];
  CC[2] = 1 / yC[2];
  return CC;
};