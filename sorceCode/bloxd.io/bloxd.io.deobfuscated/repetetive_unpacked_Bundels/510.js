var fC = require("./516.js");
export function e(CC, yC) {
  if (null == CC) {
    return {};
  }
  var IC;
  var ky;
  var gC = (0, fC.d)(CC, yC);
  if (Object.getOwnPropertySymbols) {
    var AC = Object.getOwnPropertySymbols(CC);
    for (ky = 0; ky < AC.length; ky++) {
      IC = AC[ky];
      yC.indexOf(IC) >= 0 || Object.prototype.propertyIsEnumerable.call(CC, IC) && (gC[IC] = CC[IC]);
    }
  }
  return gC;
}