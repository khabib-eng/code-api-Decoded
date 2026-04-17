function yC(IC) {
  module.exports = yC = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (CC) {
    return typeof CC;
  } : function (CC) {
    return CC && "function" == typeof Symbol && CC.constructor === Symbol && CC !== Symbol.prototype ? "symbol" : typeof CC;
  };
  module.exports.__esModule = !0;
  module.exports.default = module.exports;
  return yC(IC);
}
module.exports = yC;
module.exports.__esModule = !0;
module.exports.default = module.exports;