var fC = require("./27.js");
function ky(CC, yC) {
  var IC = Object.keys(CC);
  if (Object.getOwnPropertySymbols) {
    var fC = Object.getOwnPropertySymbols(CC);
    yC && (fC = fC.filter(function (yC) {
      return Object.getOwnPropertyDescriptor(CC, yC).enumerable;
    }));
    IC.push.apply(IC, fC);
  }
  return IC;
}
export function d(CC) {
  for (var yC = 1; yC < arguments.length; yC++) {
    var IC = null != arguments[yC] ? arguments[yC] : {};
    yC % 2 ? ky(Object(IC), !0).forEach(function (yC) {
      (0, fC.c)(CC, yC, IC[yC]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(CC, Object.getOwnPropertyDescriptors(IC)) : ky(Object(IC)).forEach(function (yC) {
      Object.defineProperty(CC, yC, Object.getOwnPropertyDescriptor(IC, yC));
    });
  }
  return CC;
}