var fC = require("./842.js");
var ky = require("./770.js");
var gC = require("./777.js");
var AC = require("./831.js");
module.exports = function (CC, yC, IC) {
  if (!CC || "object" !== typeof CC && "function" !== typeof CC) {
    throw new gC("`obj` must be an object or a function`");
  }
  if ("string" !== typeof yC && "symbol" !== typeof yC) {
    throw new gC("`property` must be a string or a symbol`");
  }
  if (arguments.length > 3 && "boolean" !== typeof arguments[3] && null !== arguments[3]) {
    throw new gC("`nonEnumerable`, if provided, must be a boolean or null");
  }
  if (arguments.length > 4 && "boolean" !== typeof arguments[4] && null !== arguments[4]) {
    throw new gC("`nonWritable`, if provided, must be a boolean or null");
  }
  if (arguments.length > 5 && "boolean" !== typeof arguments[5] && null !== arguments[5]) {
    throw new gC("`nonConfigurable`, if provided, must be a boolean or null");
  }
  if (arguments.length > 6 && "boolean" !== typeof arguments[6]) {
    throw new gC("`loose`, if provided, must be a boolean");
  }
  var my = arguments.length > 3 ? arguments[3] : null;
  var XC = arguments.length > 4 ? arguments[4] : null;
  var iy = arguments.length > 5 ? arguments[5] : null;
  var LC = arguments.length > 6 && arguments[6];
  var YC = !!AC && AC(CC, yC);
  if (fC) {
    fC(CC, yC, {
      configurable: null === iy && YC ? YC.configurable : !iy,
      enumerable: null === my && YC ? YC.enumerable : !my,
      value: IC,
      writable: null === XC && YC ? YC.writable : !XC
    });
  } else {
    if (!LC && (my || XC || iy)) {
      throw new ky("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
    }
    CC[yC] = IC;
  }
};