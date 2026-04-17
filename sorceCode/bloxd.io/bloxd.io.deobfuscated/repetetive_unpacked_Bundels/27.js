var fC = require("./32.js");
export function c(CC, yC, IC) {
  (yC = (0, fC.d)(yC)) in CC ? Object.defineProperty(CC, yC, {
    value: IC,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : CC[yC] = IC;
  return CC;
}