module.exports = function (CC, yC, IC) {
  var fC = new Float32Array(3);
  fC[0] = CC;
  fC[1] = yC;
  fC[2] = IC;
  return fC;
};