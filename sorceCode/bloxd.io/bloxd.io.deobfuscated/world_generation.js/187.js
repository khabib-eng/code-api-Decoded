var js = require("./103.js");
var v = js.HU;
function f(p, p2) {
  for (var v2 in p) {
    p2[v2] = p[v2];
  }
}
function f2(p3, p4, p5) {
  return v(p3, p4, p5);
}
if (v.from && v.alloc && v.allocUnsafe && v.allocUnsafeSlow) {
  module.exports = js;
} else {
  f(js, exports);
  exports.HU = f2;
}
f2.prototype = Object.create(v.prototype);
f(v, f2);
f2.from = function (p6, p7, p8) {
  if (typeof p6 === "number") {
    throw new TypeError("Argument must not be a number");
  }
  return v(p6, p7, p8);
};
f2.alloc = function (p9, p10, p11) {
  if (typeof p9 !== "number") {
    throw new TypeError("Argument must be a number");
  }
  var vV = v(p9);
  if (p10 !== undefined) {
    if (typeof p11 === "string") {
      vV.fill(p10, p11);
    } else {
      vV.fill(p10);
    }
  } else {
    vV.fill(0);
  }
  return vV;
};
f2.allocUnsafe = function (p12) {
  if (typeof p12 !== "number") {
    throw new TypeError("Argument must be a number");
  }
  return v(p12);
};
f2.allocUnsafeSlow = function (p13) {
  if (typeof p13 !== "number") {
    throw new TypeError("Argument must be a number");
  }
  return js.SlowBuffer(p13);
};