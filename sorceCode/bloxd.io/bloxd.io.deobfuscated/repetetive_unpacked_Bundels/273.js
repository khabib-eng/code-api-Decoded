module.exports = function (CC, yC, IC) {
  CC[0] = Math.max(yC[0], IC[0]);
  CC[1] = Math.max(yC[1], IC[1]);
  CC[2] = Math.max(yC[2], IC[2]);
  return CC;
};