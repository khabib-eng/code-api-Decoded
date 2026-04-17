var IC;
var fC;
var ky;
var gC;
if ("object" === typeof performance && "function" === typeof performance.now) {
  var AC = performance;
  exports.unstable_now = function () {
    return AC.now();
  };
} else {
  var my = Date;
  var XC = my.now();
  exports.unstable_now = function () {
    return my.now() - XC;
  };
}
if ("undefined" === typeof window || "function" !== typeof MessageChannel) {
  var iy = null;
  var LC = null;
  function YC() {
    if (null !== iy) {
      try {
        var CC = exports.unstable_now();
        iy(!0, CC);
        iy = null;
      } catch (IC) {
        setTimeout(YC, 0);
        throw IC;
      }
    }
  }
  IC = function (CC) {
    null !== iy ? setTimeout(IC, 0, CC) : (iy = CC, setTimeout(YC, 0));
  };
  fC = function (CC, yC) {
    LC = setTimeout(CC, yC);
  };
  ky = function () {
    clearTimeout(LC);
  };
  exports.unstable_shouldYield = function () {
    return !1;
  };
  gC = exports.unstable_forceFrameRate = function () {};
} else {
  var bC = window.setTimeout;
  var rC = window.clearTimeout;
  if ("undefined" !== typeof console) {
    var GC = window.cancelAnimationFrame;
    "function" !== typeof window.requestAnimationFrame && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
    "function" !== typeof GC && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
  }
  var eC = !1;
  var OC = null;
  var SC = -1;
  var TC = 5;
  var NC = 0;
  exports.unstable_shouldYield = function () {
    return exports.unstable_now() >= NC;
  };
  gC = function () {};
  exports.unstable_forceFrameRate = function (CC) {
    0 > CC || 125 < CC ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : TC = 0 < CC ? Math.floor(1e3 / CC) : 5;
  };
  var sC = new MessageChannel();
  var jy = sC.port2;
  sC.port1.onmessage = function () {
    if (null !== OC) {
      var CC = exports.unstable_now();
      NC = CC + TC;
      try {
        OC(!0, CC) ? jy.postMessage(null) : (eC = !1, OC = null);
      } catch (IC) {
        jy.postMessage(null);
        throw IC;
      }
    } else {
      eC = !1;
    }
  };
  IC = function (CC) {
    OC = CC;
    eC || (eC = !0, jy.postMessage(null));
  };
  fC = function (CC, IC) {
    SC = bC(function () {
      CC(exports.unstable_now());
    }, IC);
  };
  ky = function () {
    rC(SC);
    SC = -1;
  };
}
function qC(CC, yC) {
  var IC = CC.length;
  CC.push(yC);
  CC: for (;;) {
    var fC = IC - 1 >>> 1;
    var ky = CC[fC];
    if (!(void 0 !== ky && 0 < wC(ky, yC))) {
      break CC;
    }
    CC[fC] = yC;
    CC[IC] = ky;
    IC = fC;
  }
}
function KC(CC) {
  return void 0 === (CC = CC[0]) ? null : CC;
}
function pC(CC) {
  var yC = CC[0];
  if (void 0 !== yC) {
    var IC = CC.pop();
    if (IC !== yC) {
      CC[0] = IC;
      CC: for (var fC = 0, ky = CC.length; fC < ky;) {
        var gC = 2 * (fC + 1) - 1;
        var AC = CC[gC];
        var my = gC + 1;
        var XC = CC[my];
        if (void 0 !== AC && 0 > wC(AC, IC)) {
          void 0 !== XC && 0 > wC(XC, AC) ? (CC[fC] = XC, CC[my] = IC, fC = my) : (CC[fC] = AC, CC[gC] = IC, fC = gC);
        } else {
          if (!(void 0 !== XC && 0 > wC(XC, IC))) {
            break CC;
          }
          CC[fC] = XC;
          CC[my] = IC;
          fC = my;
        }
      }
    }
    return yC;
  }
  return null;
}
function wC(CC, yC) {
  var IC = CC.sortIndex - yC.sortIndex;
  return 0 !== IC ? IC : CC.id - yC.id;
}
var HC = [];
var aC = [];
var cC = 1;
var UC = null;
var EC = 3;
var VC = !1;
var WC = !1;
var xC = !1;
function PC(CC) {
  for (var yC = KC(aC); null !== yC;) {
    if (null === yC.callback) {
      pC(aC);
    } else {
      if (!(yC.startTime <= CC)) {
        break;
      }
      pC(aC);
      yC.sortIndex = yC.expirationTime;
      qC(HC, yC);
    }
    yC = KC(aC);
  }
}
function zC(CC) {
  xC = !1;
  PC(CC);
  if (!WC) {
    if (null !== KC(HC)) {
      WC = !0;
      IC(BC);
    } else {
      var yC = KC(aC);
      null !== yC && fC(zC, yC.startTime - CC);
    }
  }
}
function BC(CC, IC) {
  WC = !1;
  xC && (xC = !1, ky());
  VC = !0;
  var gC = EC;
  try {
    PC(IC);
    UC = KC(HC);
    for (; null !== UC && (!(UC.expirationTime > IC) || CC && !exports.unstable_shouldYield());) {
      var AC = UC.callback;
      if ("function" === typeof AC) {
        UC.callback = null;
        EC = UC.priorityLevel;
        var my = AC(UC.expirationTime <= IC);
        IC = exports.unstable_now();
        "function" === typeof my ? UC.callback = my : UC === KC(HC) && pC(HC);
        PC(IC);
      } else {
        pC(HC);
      }
      UC = KC(HC);
    }
    if (null !== UC) {
      var XC = !0;
    } else {
      var iy = KC(aC);
      null !== iy && fC(zC, iy.startTime - IC);
      XC = !1;
    }
    return XC;
  } finally {
    UC = null;
    EC = gC;
    VC = !1;
  }
}
var tC = gC;
exports.unstable_IdlePriority = 5;
exports.unstable_ImmediatePriority = 1;
exports.unstable_LowPriority = 4;
exports.unstable_NormalPriority = 3;
exports.unstable_Profiling = null;
exports.unstable_UserBlockingPriority = 2;
exports.unstable_cancelCallback = function (CC) {
  CC.callback = null;
};
exports.unstable_continueExecution = function () {
  WC || VC || (WC = !0, IC(BC));
};
exports.unstable_getCurrentPriorityLevel = function () {
  return EC;
};
exports.unstable_getFirstCallbackNode = function () {
  return KC(HC);
};
exports.unstable_next = function (CC) {
  switch (EC) {
    case 1:
    case 2:
    case 3:
      var yC = 3;
      break;
    default:
      yC = EC;
  }
  var IC = EC;
  EC = yC;
  try {
    return CC();
  } finally {
    EC = IC;
  }
};
exports.unstable_pauseExecution = function () {};
exports.unstable_requestPaint = tC;
exports.unstable_runWithPriority = function (CC, yC) {
  switch (CC) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      break;
    default:
      CC = 3;
  }
  var IC = EC;
  EC = CC;
  try {
    return yC();
  } finally {
    EC = IC;
  }
};
exports.unstable_scheduleCallback = function (CC, gC, AC) {
  var my = exports.unstable_now();
  "object" === typeof AC && null !== AC ? AC = "number" === typeof (AC = AC.delay) && 0 < AC ? my + AC : my : AC = my;
  switch (CC) {
    case 1:
      var XC = -1;
      break;
    case 2:
      XC = 250;
      break;
    case 5:
      XC = 1073741823;
      break;
    case 4:
      XC = 1e4;
      break;
    default:
      XC = 5e3;
  }
  CC = {
    id: cC++,
    callback: gC,
    priorityLevel: CC,
    startTime: AC,
    expirationTime: XC = AC + XC,
    sortIndex: -1
  };
  AC > my ? (CC.sortIndex = AC, qC(aC, CC), null === KC(HC) && CC === KC(aC) && (xC ? ky() : xC = !0, fC(zC, AC - my))) : (CC.sortIndex = XC, qC(HC, CC), WC || VC || (WC = !0, IC(BC)));
  return CC;
};
exports.unstable_wrapCallback = function (CC) {
  var yC = EC;
  return function () {
    var IC = EC;
    EC = yC;
    try {
      return CC.apply(this, arguments);
    } finally {
      EC = IC;
    }
  };
};