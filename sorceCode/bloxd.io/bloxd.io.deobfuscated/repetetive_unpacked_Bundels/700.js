var fC = Object.getOwnPropertyDescriptors || function (CC) {
  for (var yC = Object.keys(CC), IC = {}, fC = 0; fC < yC.length; fC++) {
    IC[yC[fC]] = Object.getOwnPropertyDescriptor(CC, yC[fC]);
  }
  return IC;
};
var ky = /%[sdj%]/g;
exports.format = function (CC) {
  if (!SC(CC)) {
    for (var yC = [], IC = 0; IC < arguments.length; IC++) {
      yC.push(my(arguments[IC]));
    }
    return yC.join(" ");
  }
  IC = 1;
  for (var fC = arguments, gC = fC.length, AC = String(CC).replace(ky, function (CC) {
      if ("%%" === CC) {
        return "%";
      }
      if (IC >= gC) {
        return CC;
      }
      switch (CC) {
        case "%s":
          return String(fC[IC++]);
        case "%d":
          return Number(fC[IC++]);
        case "%j":
          try {
            return JSON.stringify(fC[IC++]);
          } catch (yC) {
            return "[Circular]";
          }
        default:
          return CC;
      }
    }), XC = fC[IC]; IC < gC; XC = fC[++IC]) {
    eC(XC) || !sC(XC) ? AC += " " + XC : AC += " " + my(XC);
  }
  return AC;
};
exports.deprecate = function (CC, IC) {
  if ("undefined" !== typeof process && !0 === process.noDeprecation) {
    return CC;
  }
  if ("undefined" === typeof process) {
    return function () {
      return exports.deprecate(CC, IC).apply(this, arguments);
    };
  }
  var fC = !1;
  return function () {
    if (!fC) {
      if (process.throwDeprecation) {
        throw new Error(IC);
      }
      process.traceDeprecation ? console.trace(IC) : console.error(IC);
      fC = !0;
    }
    return CC.apply(this, arguments);
  };
};
var gC = {};
var AC = /^$/;
function my(CC, IC) {
  var fC = {
    seen: [],
    stylize: iy
  };
  arguments.length >= 3 && (fC.depth = arguments[2]);
  arguments.length >= 4 && (fC.colors = arguments[3]);
  GC(IC) ? fC.showHidden = IC : IC && exports._extend(fC, IC);
  TC(fC.showHidden) && (fC.showHidden = !1);
  TC(fC.depth) && (fC.depth = 2);
  TC(fC.colors) && (fC.colors = !1);
  TC(fC.customInspect) && (fC.customInspect = !0);
  fC.colors && (fC.stylize = XC);
  return LC(fC, CC, fC.depth);
}
function XC(CC, yC) {
  var IC = my.styles[yC];
  return IC ? "\x1b[" + my.colors[IC][0] + "m" + CC + "\x1b[" + my.colors[IC][1] + "m" : CC;
}
function iy(CC, yC) {
  return CC;
}
function LC(CC, IC, fC) {
  if (CC.customInspect && IC && KC(IC.inspect) && IC.inspect !== exports.inspect && (!IC.constructor || IC.constructor.prototype !== IC)) {
    var ky = IC.inspect(fC, CC);
    SC(ky) || (ky = LC(CC, ky, fC));
    return ky;
  }
  var gC = function (CC, yC) {
    if (TC(yC)) {
      return CC.stylize("undefined", "undefined");
    }
    if (SC(yC)) {
      var IC = "'" + JSON.stringify(yC).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
      return CC.stylize(IC, "string");
    }
    if (OC(yC)) {
      return CC.stylize("" + yC, "number");
    }
    if (GC(yC)) {
      return CC.stylize("" + yC, "boolean");
    }
    if (eC(yC)) {
      return CC.stylize("null", "null");
    }
  }(CC, IC);
  if (gC) {
    return gC;
  }
  var AC = Object.keys(IC);
  var my = function (CC) {
    var yC = {};
    CC.forEach(function (CC, IC) {
      yC[CC] = !0;
    });
    return yC;
  }(AC);
  CC.showHidden && (AC = Object.getOwnPropertyNames(IC));
  if (qC(IC) && (AC.indexOf("message") >= 0 || AC.indexOf("description") >= 0)) {
    return YC(IC);
  }
  if (0 === AC.length) {
    if (KC(IC)) {
      var XC = IC.name ? ": " + IC.name : "";
      return CC.stylize("[Function" + XC + "]", "special");
    }
    if (NC(IC)) {
      return CC.stylize(RegExp.prototype.toString.call(IC), "regexp");
    }
    if (jy(IC)) {
      return CC.stylize(Date.prototype.toString.call(IC), "date");
    }
    if (qC(IC)) {
      return YC(IC);
    }
  }
  var iy;
  var sC = "";
  var pC = !1;
  var wC = ["{", "}"];
  (rC(IC) && (pC = !0, wC = ["[", "]"]), KC(IC)) && (sC = " [Function" + (IC.name ? ": " + IC.name : "") + "]");
  NC(IC) && (sC = " " + RegExp.prototype.toString.call(IC));
  jy(IC) && (sC = " " + Date.prototype.toUTCString.call(IC));
  qC(IC) && (sC = " " + YC(IC));
  return 0 !== AC.length || pC && 0 != IC.length ? fC < 0 ? NC(IC) ? CC.stylize(RegExp.prototype.toString.call(IC), "regexp") : CC.stylize("[Object]", "special") : (CC.seen.push(IC), iy = pC ? function (CC, yC, IC, fC, ky) {
    for (var gC = [], AC = 0, my = yC.length; AC < my; ++AC) {
      aC(yC, String(AC)) ? gC.push(bC(CC, yC, IC, fC, String(AC), !0)) : gC.push("");
    }
    ky.forEach(function (ky) {
      ky.match(/^\d+$/) || gC.push(bC(CC, yC, IC, fC, ky, !0));
    });
    return gC;
  }(CC, IC, fC, my, AC) : AC.map(function (yC) {
    return bC(CC, IC, fC, my, yC, pC);
  }), CC.seen.pop(), function (CC, yC, IC) {
    var fC = CC.reduce(function (CC, yC) {
      yC.indexOf("\n") >= 0 && 0;
      return CC + yC.replace(/\u001b\[\d\d?m/g, "").length + 1;
    }, 0);
    if (fC > 60) {
      return IC[0] + ("" === yC ? "" : yC + "\n ") + " " + CC.join(",\n  ") + " " + IC[1];
    }
    return IC[0] + yC + " " + CC.join(", ") + " " + IC[1];
  }(iy, sC, wC)) : wC[0] + sC + wC[1];
}
function YC(CC) {
  return "[" + Error.prototype.toString.call(CC) + "]";
}
function bC(CC, yC, IC, fC, ky, gC) {
  var AC;
  var my;
  var XC;
  (XC = Object.getOwnPropertyDescriptor(yC, ky) || {
    value: yC[ky]
  }).get ? my = XC.set ? CC.stylize("[Getter/Setter]", "special") : CC.stylize("[Getter]", "special") : XC.set && (my = CC.stylize("[Setter]", "special"));
  aC(fC, ky) || (AC = "[" + ky + "]");
  my || (CC.seen.indexOf(XC.value) < 0 ? (my = eC(IC) ? LC(CC, XC.value, null) : LC(CC, XC.value, IC - 1)).indexOf("\n") > -1 && (my = gC ? my.split("\n").map(function (CC) {
    return "  " + CC;
  }).join("\n").slice(2) : "\n" + my.split("\n").map(function (CC) {
    return "   " + CC;
  }).join("\n")) : my = CC.stylize("[Circular]", "special"));
  if (TC(AC)) {
    if (gC && ky.match(/^\d+$/)) {
      return my;
    }
    (AC = JSON.stringify("" + ky)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (AC = AC.slice(1, -1), AC = CC.stylize(AC, "name")) : (AC = AC.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), AC = CC.stylize(AC, "string"));
  }
  return AC + ": " + my;
}
function rC(CC) {
  return Array.isArray(CC);
}
function GC(CC) {
  return "boolean" === typeof CC;
}
function eC(CC) {
  return null === CC;
}
function OC(CC) {
  return "number" === typeof CC;
}
function SC(CC) {
  return "string" === typeof CC;
}
function TC(CC) {
  return void 0 === CC;
}
function NC(CC) {
  return sC(CC) && "[object RegExp]" === pC(CC);
}
function sC(CC) {
  return "object" === typeof CC && null !== CC;
}
function jy(CC) {
  return sC(CC) && "[object Date]" === pC(CC);
}
function qC(CC) {
  return sC(CC) && ("[object Error]" === pC(CC) || CC instanceof Error);
}
function KC(CC) {
  return "function" === typeof CC;
}
function pC(CC) {
  return Object.prototype.toString.call(CC);
}
function wC(CC) {
  return CC < 10 ? "0" + CC.toString(10) : CC.toString(10);
}
exports.debuglog = function (CC) {
  CC = CC.toUpperCase();
  if (!gC[CC]) {
    if (AC.test(CC)) {
      var IC = process.pid;
      gC[CC] = function () {
        var fC = exports.format.apply(exports, arguments);
        console.error("%s %d: %s", CC, IC, fC);
      };
    } else {
      gC[CC] = function () {};
    }
  }
  return gC[CC];
};
exports.inspect = my;
my.colors = {
  bold: [1, 22],
  italic: [3, 23],
  underline: [4, 24],
  inverse: [7, 27],
  white: [37, 39],
  grey: [90, 39],
  black: [30, 39],
  blue: [34, 39],
  cyan: [36, 39],
  green: [32, 39],
  magenta: [35, 39],
  red: [31, 39],
  yellow: [33, 39]
};
my.styles = {
  special: "cyan",
  number: "yellow",
  boolean: "yellow",
  undefined: "grey",
  null: "bold",
  string: "green",
  date: "magenta",
  regexp: "red"
};
exports.types = require("./702.js");
exports.isArray = rC;
exports.isBoolean = GC;
exports.isNull = eC;
exports.isNullOrUndefined = function (CC) {
  return null == CC;
};
exports.isNumber = OC;
exports.isString = SC;
exports.isSymbol = function (CC) {
  return "symbol" === typeof CC;
};
exports.isUndefined = TC;
exports.isRegExp = NC;
exports.types.isRegExp = NC;
exports.isObject = sC;
exports.isDate = jy;
exports.types.isDate = jy;
exports.isError = qC;
exports.types.isNativeError = qC;
exports.isFunction = KC;
exports.isPrimitive = function (CC) {
  return null === CC || "boolean" === typeof CC || "number" === typeof CC || "string" === typeof CC || "symbol" === typeof CC || "undefined" === typeof CC;
};
exports.isBuffer = require("./960.js");
var HC = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
function aC(CC, yC) {
  return Object.prototype.hasOwnProperty.call(CC, yC);
}
exports.log = function () {
  console.log("%s - %s", function () {
    var CC = new Date();
    var yC = [wC(CC.getHours()), wC(CC.getMinutes()), wC(CC.getSeconds())].join(":");
    return [CC.getDate(), HC[CC.getMonth()], yC].join(" ");
  }(), exports.format.apply(exports, arguments));
};
exports.inherits = require("./966.js");
exports._extend = function (CC, yC) {
  if (!yC || !sC(yC)) {
    return CC;
  }
  for (var IC = Object.keys(yC), fC = IC.length; fC--;) {
    CC[IC[fC]] = yC[IC[fC]];
  }
  return CC;
};
var cC = "undefined" !== typeof Symbol ? Symbol("util.promisify.custom") : void 0;
function UC(CC, yC) {
  if (!CC) {
    var IC = new Error("Promise was rejected with a falsy value");
    IC.reason = CC;
    CC = IC;
  }
  return yC(CC);
}
exports.promisify = function (CC) {
  if ("function" !== typeof CC) {
    throw new TypeError('The "original" argument must be of type Function');
  }
  if (cC && CC[cC]) {
    var yC;
    if ("function" !== typeof (yC = CC[cC])) {
      throw new TypeError('The "util.promisify.custom" argument must be of type Function');
    }
    Object.defineProperty(yC, cC, {
      value: yC,
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
    return yC;
  }
  function yC() {
    for (var yC, IC, fC = new Promise(function (CC, fC) {
        yC = CC;
        IC = fC;
      }), ky = [], gC = 0; gC < arguments.length; gC++) {
      ky.push(arguments[gC]);
    }
    ky.push(function (CC, fC) {
      CC ? IC(CC) : yC(fC);
    });
    try {
      CC.apply(this, ky);
    } catch (AC) {
      IC(AC);
    }
    return fC;
  }
  Object.setPrototypeOf(yC, Object.getPrototypeOf(CC));
  cC && Object.defineProperty(yC, cC, {
    value: yC,
    enumerable: !1,
    writable: !1,
    configurable: !0
  });
  return Object.defineProperties(yC, fC(CC));
};
exports.promisify.custom = cC;
exports.callbackify = function (CC) {
  if ("function" !== typeof CC) {
    throw new TypeError('The "original" argument must be of type Function');
  }
  function yC() {
    for (var yC = [], IC = 0; IC < arguments.length; IC++) {
      yC.push(arguments[IC]);
    }
    var fC = yC.pop();
    if ("function" !== typeof fC) {
      throw new TypeError("The last argument must be of type Function");
    }
    var ky = this;
    function gC() {
      return fC.apply(ky, arguments);
    }
    CC.apply(this, yC).then(function (CC) {
      process.nextTick(gC.bind(null, null, CC));
    }, function (CC) {
      process.nextTick(UC.bind(null, CC, gC));
    });
  }
  Object.setPrototypeOf(yC, Object.getPrototypeOf(CC));
  Object.defineProperties(yC, fC(CC));
  return yC;
};