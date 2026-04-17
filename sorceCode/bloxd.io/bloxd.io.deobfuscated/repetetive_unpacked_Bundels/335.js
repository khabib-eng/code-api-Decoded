module.exports = function (CC) {
  var yC = CC[0];
  var IC = CC[1];
  var fC = CC[2];
  return Math.sqrt(yC * yC + IC * IC + fC * fC);
};