var fC = require("./1295.js").default;
module.exports = function (CC, yC) {
  if ("object" != fC(CC) || !CC) {
    return CC;
  }
  var IC = CC[Symbol.toPrimitive];
  if (void 0 !== IC) {
    var ky = IC.call(CC, yC || "default");
    if ("object" != fC(ky)) {
      return ky;
    }
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === yC ? String : Number)(CC);
};
module.exports.__esModule = !0;
module.exports.default = module.exports;