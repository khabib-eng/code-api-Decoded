var fC = require("./1288.js");
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
module.exports = function (CC) {
  for (var yC = 1; yC < arguments.length; yC++) {
    var IC = null != arguments[yC] ? arguments[yC] : {};
    yC % 2 ? ky(Object(IC), !0).forEach(function (yC) {
      fC(CC, yC, IC[yC]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(CC, Object.getOwnPropertyDescriptors(IC)) : ky(Object(IC)).forEach(function (yC) {
      Object.defineProperty(CC, yC, Object.getOwnPropertyDescriptor(IC, yC));
    });
  }
  return CC;
};
module.exports.__esModule = !0;
module.exports.default = module.exports;