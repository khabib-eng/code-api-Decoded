var fC = require("./944.js");
var ky = require("./951.js");
var gC = require("./907.js");
var AC = require("./730.js");
var my = require("./831.js");
var XC = AC("Object.prototype.toString");
var iy = require("./715.js")();
var LC = "undefined" === typeof globalThis ? require.g : globalThis;
var YC = ky();
var bC = AC("String.prototype.slice");
var rC = Object.getPrototypeOf;
var GC = AC("Array.prototype.indexOf", !0) || function (CC, yC) {
  for (var IC = 0; IC < CC.length; IC += 1) {
    if (CC[IC] === yC) {
      return IC;
    }
  }
  return -1;
};
var eC = {
  __proto__: null
};
fC(YC, iy && my && rC ? function (CC) {
  var yC = new LC[CC]();
  if (Symbol.toStringTag in yC) {
    var IC = rC(yC);
    var fC = my(IC, Symbol.toStringTag);
    if (!fC) {
      var ky = rC(IC);
      fC = my(ky, Symbol.toStringTag);
    }
    eC["$" + CC] = gC(fC.get);
  }
} : function (CC) {
  var yC = new LC[CC]();
  eC["$" + CC] = gC(yC.slice);
});
module.exports = function (CC) {
  if (!CC || "object" !== typeof CC) {
    return !1;
  }
  if (!iy) {
    var yC = bC(XC(CC), 8, -1);
    return GC(YC, yC) > -1 ? yC : "Object" === yC && function (CC) {
      var yC = !1;
      fC(eC, function (IC, fC) {
        if (!yC) {
          try {
            IC(CC);
            yC = bC(fC, 1);
          } catch (ky) {}
        }
      });
      return yC;
    }(CC);
  }
  return my ? function (CC) {
    var yC = !1;
    fC(eC, function (IC, fC) {
      if (!yC) {
        try {
          "$" + IC(CC) === fC && (yC = bC(fC, 1));
        } catch (ky) {}
      }
    });
    return yC;
  }(CC) : null;
};