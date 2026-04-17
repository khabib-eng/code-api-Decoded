var yC;
var IC;
var fC = Function.prototype.toString;
var ky = "object" === typeof Reflect && null !== Reflect && Reflect.apply;
if ("function" === typeof ky && "function" === typeof Object.defineProperty) {
  try {
    yC = Object.defineProperty({}, "length", {
      get: function () {
        throw IC;
      }
    });
    IC = {};
    ky(function () {
      throw 42;
    }, null, yC);
  } catch (LC) {
    LC !== IC && (ky = null);
  }
} else {
  ky = null;
}
var gC = /^\s*class\b/;
function AC(CC) {
  try {
    var yC = fC.call(CC);
    return gC.test(yC);
  } catch (IC) {
    return !1;
  }
}
var my = Object.prototype.toString;
var XC = "function" === typeof Symbol && !!Symbol.toStringTag;
var iy = "object" === typeof document && "undefined" === typeof document.all && void 0 !== document.all ? document.all : {};
module.exports = ky ? function (CC) {
  if (CC === iy) {
    return !0;
  }
  if (!CC) {
    return !1;
  }
  if ("function" !== typeof CC && "object" !== typeof CC) {
    return !1;
  }
  if ("function" === typeof CC && !CC.prototype) {
    return !0;
  }
  try {
    ky(CC, null, yC);
  } catch (fC) {
    if (fC !== IC) {
      return !1;
    }
  }
  return !AC(CC);
} : function (CC) {
  if (CC === iy) {
    return !0;
  }
  if (!CC) {
    return !1;
  }
  if ("function" !== typeof CC && "object" !== typeof CC) {
    return !1;
  }
  if ("function" === typeof CC && !CC.prototype) {
    return !0;
  }
  if (XC) {
    return function (CC) {
      try {
        return !AC(CC) && (fC.call(CC), !0);
      } catch (yC) {
        return !1;
      }
    }(CC);
  }
  if (AC(CC)) {
    return !1;
  }
  var yC = my.call(CC);
  return "[object Function]" === yC || "[object GeneratorFunction]" === yC;
};