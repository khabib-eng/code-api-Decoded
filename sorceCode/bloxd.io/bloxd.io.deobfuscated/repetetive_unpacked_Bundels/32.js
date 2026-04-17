var fC = require("./34.js");
export function d(CC) {
  var yC = function (CC, yC) {
    if ("object" != (0, fC.e)(CC) || !CC) {
      return CC;
    }
    var IC = CC[Symbol.toPrimitive];
    if (void 0 !== IC) {
      var ky = IC.call(CC, yC || "default");
      if ("object" != (0, fC.e)(ky)) {
        return ky;
      }
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === yC ? String : Number)(CC);
  }(CC, "string");
  return "symbol" == (0, fC.e)(yC) ? yC : yC + "";
}