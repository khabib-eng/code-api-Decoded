module.exports = function (CC, yC) {
  var IC = yC[0] - CC[0];
  var fC = yC[1] - CC[1];
  var ky = yC[2] - CC[2];
  return IC * IC + fC * fC + ky * ky;
};