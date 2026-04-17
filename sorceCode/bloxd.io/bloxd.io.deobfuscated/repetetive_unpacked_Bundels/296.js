module.exports = function (CC, yC, IC) {
  CC[0] = yC[0] * IC;
  CC[1] = yC[1] * IC;
  CC[2] = yC[2] * IC;
  return CC;
};