export function d(CC, yC) {
  if (null == CC) {
    return {};
  }
  var IC;
  var fC;
  var ky = {};
  var gC = Object.keys(CC);
  for (fC = 0; fC < gC.length; fC++) {
    IC = gC[fC];
    yC.indexOf(IC) >= 0 || (ky[IC] = CC[IC]);
  }
  return ky;
}