var yC = "undefined" !== typeof Element;
var IC = "function" === typeof Map;
var fC = "function" === typeof Set;
var ky = "function" === typeof ArrayBuffer && !!ArrayBuffer.isView;
function gC(CC, AC) {
  if (CC === AC) {
    return !0;
  }
  if (CC && AC && "object" == typeof CC && "object" == typeof AC) {
    if (CC.constructor !== AC.constructor) {
      return !1;
    }
    var my;
    var XC;
    var iy;
    var LC;
    if (Array.isArray(CC)) {
      if ((my = CC.length) != AC.length) {
        return !1;
      }
      for (XC = my; 0 !== XC--;) {
        if (!gC(CC[XC], AC[XC])) {
          return !1;
        }
      }
      return !0;
    }
    if (IC && CC instanceof Map && AC instanceof Map) {
      if (CC.size !== AC.size) {
        return !1;
      }
      for (LC = CC.entries(); !(XC = LC.next()).done;) {
        if (!AC.has(XC.value[0])) {
          return !1;
        }
      }
      for (LC = CC.entries(); !(XC = LC.next()).done;) {
        if (!gC(XC.value[1], AC.get(XC.value[0]))) {
          return !1;
        }
      }
      return !0;
    }
    if (fC && CC instanceof Set && AC instanceof Set) {
      if (CC.size !== AC.size) {
        return !1;
      }
      for (LC = CC.entries(); !(XC = LC.next()).done;) {
        if (!AC.has(XC.value[0])) {
          return !1;
        }
      }
      return !0;
    }
    if (ky && ArrayBuffer.isView(CC) && ArrayBuffer.isView(AC)) {
      if ((my = CC.length) != AC.length) {
        return !1;
      }
      for (XC = my; 0 !== XC--;) {
        if (CC[XC] !== AC[XC]) {
          return !1;
        }
      }
      return !0;
    }
    if (CC.constructor === RegExp) {
      return CC.source === AC.source && CC.flags === AC.flags;
    }
    if (CC.valueOf !== Object.prototype.valueOf && "function" === typeof CC.valueOf && "function" === typeof AC.valueOf) {
      return CC.valueOf() === AC.valueOf();
    }
    if (CC.toString !== Object.prototype.toString && "function" === typeof CC.toString && "function" === typeof AC.toString) {
      return CC.toString() === AC.toString();
    }
    if ((my = (iy = Object.keys(CC)).length) !== Object.keys(AC).length) {
      return !1;
    }
    for (XC = my; 0 !== XC--;) {
      if (!Object.prototype.hasOwnProperty.call(AC, iy[XC])) {
        return !1;
      }
    }
    if (yC && CC instanceof Element) {
      return !1;
    }
    for (XC = my; 0 !== XC--;) {
      if (("_owner" !== iy[XC] && "__v" !== iy[XC] && "__o" !== iy[XC] || !CC.$$typeof) && !gC(CC[iy[XC]], AC[iy[XC]])) {
        return !1;
      }
    }
    return !0;
  }
  return CC !== CC && AC !== AC;
}
module.exports = function (CC, yC) {
  try {
    return gC(CC, yC);
  } catch (IC) {
    if ((IC.message || "").match(/stack|recursion/i)) {
      console.warn("react-fast-compare cannot handle circular refs");
      return !1;
    }
    throw IC;
  }
};