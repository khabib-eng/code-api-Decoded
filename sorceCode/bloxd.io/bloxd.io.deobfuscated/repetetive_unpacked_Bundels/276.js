module.exports = function (CC, yC) {
  CC[0] = Math.floor(yC[0]);
  CC[1] = Math.floor(yC[1]);
  CC[2] = Math.floor(yC[2]);
  return CC;
};