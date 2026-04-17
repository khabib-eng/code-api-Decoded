module.exports = function (CC, yC) {
  CC[0] = Math.ceil(yC[0]);
  CC[1] = Math.ceil(yC[1]);
  CC[2] = Math.ceil(yC[2]);
  return CC;
};