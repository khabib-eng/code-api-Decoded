var fC = require("./1293.js");
module.exports = function (CC, yC, IC) {
  (yC = fC(yC)) in CC ? Object.defineProperty(CC, yC, {
    value: IC,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : CC[yC] = IC;
  return CC;
};
module.exports.__esModule = !0;
module.exports.default = module.exports;