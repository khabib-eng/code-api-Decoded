var fC = require("./18.js");
var ky = require("./516.js");
var gC = require("./1397.js");
var AC = require("./49.js");
var my = require("./518.js");
function XC(CC) {
  if (null == CC) {
    return window;
  }
  if ("[object Window]" !== CC.toString()) {
    var yC = CC.ownerDocument;
    return yC && yC.defaultView || window;
  }
  return CC;
}
function iy(CC) {
  return CC instanceof XC(CC).Element || CC instanceof Element;
}
function LC(CC) {
  return CC instanceof XC(CC).HTMLElement || CC instanceof HTMLElement;
}
function YC(CC) {
  return "undefined" !== typeof ShadowRoot && (CC instanceof XC(CC).ShadowRoot || CC instanceof ShadowRoot);
}
var bC = Math.max;
var rC = Math.min;
var GC = Math.round;
function eC(CC, yC) {
  void 0 === yC && (yC = !1);
  var IC = CC.getBoundingClientRect();
  var fC = 1;
  var ky = 1;
  if (LC(CC) && yC) {
    var gC = CC.offsetHeight;
    var AC = CC.offsetWidth;
    AC > 0 && (fC = GC(IC.width) / AC || 1);
    gC > 0 && (ky = GC(IC.height) / gC || 1);
  }
  return {
    width: IC.width / fC,
    height: IC.height / ky,
    top: IC.top / ky,
    right: IC.right / fC,
    bottom: IC.bottom / ky,
    left: IC.left / fC,
    x: IC.left / fC,
    y: IC.top / ky
  };
}
function OC(CC) {
  var yC = XC(CC);
  return {
    scrollLeft: yC.pageXOffset,
    scrollTop: yC.pageYOffset
  };
}
function SC(CC) {
  return CC ? (CC.nodeName || "").toLowerCase() : null;
}
function TC(CC) {
  return ((iy(CC) ? CC.ownerDocument : CC.document) || window.document).documentElement;
}
function NC(CC) {
  return eC(TC(CC)).left + OC(CC).scrollLeft;
}
function sC(CC) {
  return XC(CC).getComputedStyle(CC);
}
function jy(CC) {
  var yC = sC(CC);
  var IC = yC.overflow;
  var fC = yC.overflowX;
  var ky = yC.overflowY;
  return /auto|scroll|overlay|hidden/.test(IC + ky + fC);
}
function qC(CC, yC, IC) {
  void 0 === IC && (IC = !1);
  var fC = LC(yC);
  var ky = LC(yC) && function (CC) {
    var yC = CC.getBoundingClientRect();
    var IC = GC(yC.width) / CC.offsetWidth || 1;
    var fC = GC(yC.height) / CC.offsetHeight || 1;
    return 1 !== IC || 1 !== fC;
  }(yC);
  var gC = TC(yC);
  var AC = eC(CC, ky);
  var my = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var iy = {
    x: 0,
    y: 0
  };
  (fC || !fC && !IC) && (("body" !== SC(yC) || jy(gC)) && (my = function (CC) {
    return CC !== XC(CC) && LC(CC) ? {
      scrollLeft: (yC = CC).scrollLeft,
      scrollTop: yC.scrollTop
    } : OC(CC);
    var yC;
  }(yC)), LC(yC) ? ((iy = eC(yC, !0)).x += yC.clientLeft, iy.y += yC.clientTop) : gC && (iy.x = NC(gC)));
  return {
    x: AC.left + my.scrollLeft - iy.x,
    y: AC.top + my.scrollTop - iy.y,
    width: AC.width,
    height: AC.height
  };
}
function KC(CC) {
  var yC = eC(CC);
  var IC = CC.offsetWidth;
  var fC = CC.offsetHeight;
  Math.abs(yC.width - IC) <= 1 && (IC = yC.width);
  Math.abs(yC.height - fC) <= 1 && (fC = yC.height);
  return {
    x: CC.offsetLeft,
    y: CC.offsetTop,
    width: IC,
    height: fC
  };
}
function pC(CC) {
  return "html" === SC(CC) ? CC : CC.assignedSlot || CC.parentNode || (YC(CC) ? CC.host : null) || TC(CC);
}
function wC(CC) {
  return ["html", "body", "#document"].indexOf(SC(CC)) >= 0 ? CC.ownerDocument.body : LC(CC) && jy(CC) ? CC : wC(pC(CC));
}
function HC(CC, yC) {
  var IC;
  void 0 === yC && (yC = []);
  var fC = wC(CC);
  var ky = fC === (null == (IC = CC.ownerDocument) ? void 0 : IC.body);
  var gC = XC(fC);
  var AC = ky ? [gC].concat(gC.visualViewport || [], jy(fC) ? fC : []) : fC;
  var my = yC.concat(AC);
  return ky ? my : my.concat(HC(pC(AC)));
}
function aC(CC) {
  return ["table", "td", "th"].indexOf(SC(CC)) >= 0;
}
function cC(CC) {
  return LC(CC) && "fixed" !== sC(CC).position ? CC.offsetParent : null;
}
function UC(CC) {
  for (var yC = XC(CC), IC = cC(CC); IC && aC(IC) && "static" === sC(IC).position;) {
    IC = cC(IC);
  }
  return IC && ("html" === SC(IC) || "body" === SC(IC) && "static" === sC(IC).position) ? yC : IC || function (CC) {
    var yC = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
    if (-1 !== navigator.userAgent.indexOf("Trident") && LC(CC) && "fixed" === sC(CC).position) {
      return null;
    }
    var IC = pC(CC);
    for (YC(IC) && (IC = IC.host); LC(IC) && ["html", "body"].indexOf(SC(IC)) < 0;) {
      var fC = sC(IC);
      if ("none" !== fC.transform || "none" !== fC.perspective || "paint" === fC.contain || -1 !== ["transform", "perspective"].indexOf(fC.willChange) || yC && "filter" === fC.willChange || yC && fC.filter && "none" !== fC.filter) {
        return IC;
      }
      IC = IC.parentNode;
    }
    return null;
  }(CC) || yC;
}
var EC = "top";
var VC = "bottom";
var WC = "right";
var xC = "left";
var PC = "auto";
var zC = [EC, VC, WC, xC];
var BC = "start";
var tC = "end";
var JC = "viewport";
var nC = "popper";
var FC = zC.reduce(function (CC, yC) {
  return CC.concat([yC + "-" + BC, yC + "-" + tC]);
}, []);
var uC = [].concat(zC, [PC]).reduce(function (CC, yC) {
  return CC.concat([yC, yC + "-" + BC, yC + "-" + tC]);
}, []);
var DC = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];
function ZC(CC) {
  var yC = new Map();
  var IC = new Set();
  var fC = [];
  function ky(CC) {
    IC.add(CC.name);
    [].concat(CC.requires || [], CC.requiresIfExists || []).forEach(function (CC) {
      if (!IC.has(CC)) {
        var fC = yC.get(CC);
        fC && ky(fC);
      }
    });
    fC.push(CC);
  }
  CC.forEach(function (CC) {
    yC.set(CC.name, CC);
  });
  CC.forEach(function (CC) {
    IC.has(CC.name) || ky(CC);
  });
  return fC;
}
function lC(CC) {
  var yC;
  return function () {
    yC || (yC = new Promise(function (IC) {
      Promise.resolve().then(function () {
        yC = void 0;
        IC(CC());
      });
    }));
    return yC;
  };
}
var oC = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function vC() {
  for (var CC = arguments.length, yC = new Array(CC), IC = 0; IC < CC; IC++) {
    yC[IC] = arguments[IC];
  }
  return !yC.some(function (CC) {
    return !(CC && "function" === typeof CC.getBoundingClientRect);
  });
}
function hC(CC) {
  void 0 === CC && (CC = {});
  var yC = CC;
  var IC = yC.defaultModifiers;
  var fC = void 0 === IC ? [] : IC;
  var ky = yC.defaultOptions;
  var gC = void 0 === ky ? oC : ky;
  return function (CC, yC, IC) {
    void 0 === IC && (IC = gC);
    var ky = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, oC, gC),
      modifiersData: {},
      elements: {
        reference: CC,
        popper: yC
      },
      attributes: {},
      styles: {}
    };
    var AC = [];
    var my = !1;
    var XC = {
      state: ky,
      setOptions: function (IC) {
        var my = "function" === typeof IC ? IC(ky.options) : IC;
        LC();
        ky.options = Object.assign({}, gC, ky.options, my);
        ky.scrollParents = {
          reference: iy(CC) ? HC(CC) : CC.contextElement ? HC(CC.contextElement) : [],
          popper: HC(yC)
        };
        var YC = function (CC) {
          var yC = ZC(CC);
          return DC.reduce(function (CC, IC) {
            return CC.concat(yC.filter(function (CC) {
              return CC.phase === IC;
            }));
          }, []);
        }(function (CC) {
          var yC = CC.reduce(function (CC, yC) {
            var IC = CC[yC.name];
            CC[yC.name] = IC ? Object.assign({}, IC, yC, {
              options: Object.assign({}, IC.options, yC.options),
              data: Object.assign({}, IC.data, yC.data)
            }) : yC;
            return CC;
          }, {});
          return Object.keys(yC).map(function (CC) {
            return yC[CC];
          });
        }([].concat(fC, ky.options.modifiers)));
        ky.orderedModifiers = YC.filter(function (CC) {
          return CC.enabled;
        });
        ky.orderedModifiers.forEach(function (CC) {
          var yC = CC.name;
          var IC = CC.options;
          var fC = void 0 === IC ? {} : IC;
          var gC = CC.effect;
          if ("function" === typeof gC) {
            var my = gC({
              state: ky,
              name: yC,
              instance: XC,
              options: fC
            });
            function iy() {}
            AC.push(my || iy);
          }
        });
        return XC.update();
      },
      forceUpdate: function () {
        if (!my) {
          var CC = ky.elements;
          var yC = CC.reference;
          var IC = CC.popper;
          if (vC(yC, IC)) {
            ky.rects = {
              reference: qC(yC, UC(IC), "fixed" === ky.options.strategy),
              popper: KC(IC)
            };
            ky.reset = !1;
            ky.placement = ky.options.placement;
            ky.orderedModifiers.forEach(function (CC) {
              return ky.modifiersData[CC.name] = Object.assign({}, CC.data);
            });
            for (var fC = 0; fC < ky.orderedModifiers.length; fC++) {
              if (!0 !== ky.reset) {
                var gC = ky.orderedModifiers[fC];
                var AC = gC.Ky;
                var iy = gC.options;
                var LC = void 0 === iy ? {} : iy;
                var YC = gC.name;
                "function" === typeof AC && (ky = AC({
                  state: ky,
                  options: LC,
                  name: YC,
                  instance: XC
                }) || ky);
              } else {
                ky.reset = !1;
                fC = -1;
              }
            }
          }
        }
      },
      update: lC(function () {
        return new Promise(function (CC) {
          XC.forceUpdate();
          CC(ky);
        });
      }),
      destroy: function () {
        LC();
        my = !0;
      }
    };
    if (!vC(CC, yC)) {
      return XC;
    }
    function LC() {
      AC.forEach(function (CC) {
        return CC();
      });
      AC = [];
    }
    XC.setOptions(IC).then(function (CC) {
      !my && IC.onFirstUpdate && IC.onFirstUpdate(CC);
    });
    return XC;
  };
}
var RC = {
  passive: !0
};
function dC(CC) {
  return CC.split("-")[0];
}
function QC(CC) {
  return CC.split("-")[1];
}
function MC(CC) {
  return ["top", "bottom"].indexOf(CC) >= 0 ? "x" : "y";
}
function Cy(CC) {
  var yC;
  var IC = CC.reference;
  var fC = CC.element;
  var ky = CC.placement;
  var gC = ky ? dC(ky) : null;
  var AC = ky ? QC(ky) : null;
  var my = IC.x + IC.width / 2 - fC.width / 2;
  var XC = IC.y + IC.height / 2 - fC.height / 2;
  switch (gC) {
    case EC:
      yC = {
        x: my,
        y: IC.y - fC.height
      };
      break;
    case VC:
      yC = {
        x: my,
        y: IC.y + IC.height
      };
      break;
    case WC:
      yC = {
        x: IC.x + IC.width,
        y: XC
      };
      break;
    case xC:
      yC = {
        x: IC.x - fC.width,
        y: XC
      };
      break;
    default:
      yC = {
        x: IC.x,
        y: IC.y
      };
  }
  var iy = gC ? MC(gC) : null;
  if (null != iy) {
    var LC = "y" === iy ? "height" : "width";
    switch (AC) {
      case BC:
        yC[iy] = yC[iy] - (IC[LC] / 2 - fC[LC] / 2);
        break;
      case tC:
        yC[iy] = yC[iy] + (IC[LC] / 2 - fC[LC] / 2);
    }
  }
  return yC;
}
var yy = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Iy(CC) {
  var yC;
  var IC = CC.popper;
  var fC = CC.popperRect;
  var ky = CC.placement;
  var gC = CC.variation;
  var AC = CC.offsets;
  var my = CC.position;
  var iy = CC.gpuAcceleration;
  var LC = CC.adaptive;
  var YC = CC.roundOffsets;
  var bC = CC.isFixed;
  var rC = AC.x;
  var eC = void 0 === rC ? 0 : rC;
  var OC = AC.y;
  var SC = void 0 === OC ? 0 : OC;
  var NC = "function" === typeof YC ? YC({
    x: eC,
    y: SC
  }) : {
    x: eC,
    y: SC
  };
  eC = NC.x;
  SC = NC.y;
  var jy = AC.hasOwnProperty("x");
  var qC = AC.hasOwnProperty("y");
  var KC = xC;
  var pC = EC;
  var wC = window;
  if (LC) {
    var HC = UC(IC);
    var aC = "clientHeight";
    var cC = "clientWidth";
    HC === XC(IC) && "static" !== sC(HC = TC(IC)).position && "absolute" === my && (aC = "scrollHeight", cC = "scrollWidth");
    if (ky === EC || (ky === xC || ky === WC) && gC === tC) {
      pC = VC;
      SC -= (bC && HC === wC && wC.visualViewport ? wC.visualViewport.height : HC[aC]) - fC.height;
      SC *= iy ? 1 : -1;
    }
    if (ky === xC || (ky === EC || ky === VC) && gC === tC) {
      KC = WC;
      eC -= (bC && HC === wC && wC.visualViewport ? wC.visualViewport.width : HC[cC]) - fC.width;
      eC *= iy ? 1 : -1;
    }
  }
  var PC;
  var zC = Object.assign({
    position: my
  }, LC && yy);
  var BC = !0 === YC ? function (CC) {
    var yC = CC.x;
    var IC = CC.y;
    var fC = window.devicePixelRatio || 1;
    return {
      x: GC(yC * fC) / fC || 0,
      y: GC(IC * fC) / fC || 0
    };
  }({
    x: eC,
    y: SC
  }) : {
    x: eC,
    y: SC
  };
  eC = BC.x;
  SC = BC.y;
  return iy ? Object.assign({}, zC, ((PC = {})[pC] = qC ? "0" : "", PC[KC] = jy ? "0" : "", PC.transform = (wC.devicePixelRatio || 1) <= 1 ? "translate(" + eC + "px, " + SC + "px)" : "translate3d(" + eC + "px, " + SC + "px, 0)", PC)) : Object.assign({}, zC, ((yC = {})[pC] = qC ? SC + "px" : "", yC[KC] = jy ? eC + "px" : "", yC.transform = "", yC));
}
const fy = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  Ky: function (CC) {
    var yC = CC.state;
    var IC = CC.options;
    var fC = CC.name;
    var ky = IC.offset;
    var gC = void 0 === ky ? [0, 0] : ky;
    var AC = uC.reduce(function (CC, IC) {
      CC[IC] = function (CC, yC, IC) {
        var fC = dC(CC);
        var ky = [xC, EC].indexOf(fC) >= 0 ? -1 : 1;
        var gC = "function" === typeof IC ? IC(Object.assign({}, yC, {
          placement: CC
        })) : IC;
        var AC = gC[0];
        var my = gC[1];
        AC = AC || 0;
        my = (my || 0) * ky;
        return [xC, WC].indexOf(fC) >= 0 ? {
          x: my,
          y: AC
        } : {
          x: AC,
          y: my
        };
      }(IC, yC.rects, gC);
      return CC;
    }, {});
    var my = AC[yC.placement];
    var XC = my.x;
    var iy = my.y;
    null != yC.modifiersData.popperOffsets && (yC.modifiersData.popperOffsets.x += XC, yC.modifiersData.popperOffsets.y += iy);
    yC.modifiersData[fC] = AC;
  }
};
var kI = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function gy(CC) {
  return CC.replace(/left|right|bottom|top/g, function (CC) {
    return kI[CC];
  });
}
var Ay = {
  start: "end",
  end: "start"
};
function mI(CC) {
  return CC.replace(/start|end/g, function (CC) {
    return Ay[CC];
  });
}
function Xy(CC, yC) {
  var IC = yC.getRootNode && yC.getRootNode();
  if (CC.contains(yC)) {
    return !0;
  }
  if (IC && YC(IC)) {
    var fC = yC;
    do {
      if (fC && CC.isSameNode(fC)) {
        return !0;
      }
      fC = fC.parentNode || fC.host;
    } while (fC);
  }
  return !1;
}
function iI(CC) {
  return Object.assign({}, CC, {
    left: CC.x,
    top: CC.y,
    right: CC.x + CC.width,
    bottom: CC.y + CC.height
  });
}
function Ly(CC, yC) {
  return yC === JC ? iI(function (CC) {
    var yC = XC(CC);
    var IC = TC(CC);
    var fC = yC.visualViewport;
    var ky = IC.clientWidth;
    var gC = IC.clientHeight;
    var AC = 0;
    var my = 0;
    fC && (ky = fC.width, gC = fC.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (AC = fC.offsetLeft, my = fC.offsetTop));
    return {
      width: ky,
      height: gC,
      x: AC + NC(CC),
      y: my
    };
  }(CC)) : iy(yC) ? function (CC) {
    var yC = eC(CC);
    yC.top = yC.top + CC.clientTop;
    yC.left = yC.left + CC.clientLeft;
    yC.bottom = yC.top + CC.clientHeight;
    yC.right = yC.left + CC.clientWidth;
    yC.width = CC.clientWidth;
    yC.height = CC.clientHeight;
    yC.x = yC.left;
    yC.y = yC.top;
    return yC;
  }(yC) : iI(function (CC) {
    var yC;
    var IC = TC(CC);
    var fC = OC(CC);
    var ky = null == (yC = CC.ownerDocument) ? void 0 : yC.body;
    var gC = bC(IC.scrollWidth, IC.clientWidth, ky ? ky.scrollWidth : 0, ky ? ky.clientWidth : 0);
    var AC = bC(IC.scrollHeight, IC.clientHeight, ky ? ky.scrollHeight : 0, ky ? ky.clientHeight : 0);
    var my = -fC.scrollLeft + NC(CC);
    var XC = -fC.scrollTop;
    "rtl" === sC(ky || IC).direction && (my += bC(IC.clientWidth, ky ? ky.clientWidth : 0) - gC);
    return {
      width: gC,
      height: AC,
      x: my,
      y: XC
    };
  }(TC(CC)));
}
function Yy(CC, yC, IC) {
  var fC = "clippingParents" === yC ? function (CC) {
    var yC = HC(pC(CC));
    var IC = ["absolute", "fixed"].indexOf(sC(CC).position) >= 0 && LC(CC) ? UC(CC) : CC;
    return iy(IC) ? yC.filter(function (CC) {
      return iy(CC) && Xy(CC, IC) && "body" !== SC(CC);
    }) : [];
  }(CC) : [].concat(yC);
  var ky = [].concat(fC, [IC]);
  var gC = ky[0];
  var AC = ky.reduce(function (yC, IC) {
    var fC = Ly(CC, IC);
    yC.top = bC(fC.top, yC.top);
    yC.right = rC(fC.right, yC.right);
    yC.bottom = rC(fC.bottom, yC.bottom);
    yC.left = bC(fC.left, yC.left);
    return yC;
  }, Ly(CC, gC));
  AC.width = AC.right - AC.left;
  AC.height = AC.bottom - AC.top;
  AC.x = AC.left;
  AC.y = AC.top;
  return AC;
}
function by(CC) {
  return Object.assign({}, {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }, CC);
}
function ry(CC, yC) {
  return yC.reduce(function (yC, IC) {
    yC[IC] = CC;
    return yC;
  }, {});
}
function Gy(CC, yC) {
  void 0 === yC && (yC = {});
  var IC = yC;
  var fC = IC.placement;
  var ky = void 0 === fC ? CC.placement : fC;
  var gC = IC.boundary;
  var AC = void 0 === gC ? "clippingParents" : gC;
  var my = IC.rootBoundary;
  var XC = void 0 === my ? JC : my;
  var LC = IC.elementContext;
  var YC = void 0 === LC ? nC : LC;
  var bC = IC.altBoundary;
  var rC = void 0 !== bC && bC;
  var GC = IC.padding;
  var OC = void 0 === GC ? 0 : GC;
  var SC = by("number" !== typeof OC ? OC : ry(OC, zC));
  var NC = YC === nC ? "reference" : nC;
  var sC = CC.rects.popper;
  var jy = CC.elements[rC ? NC : YC];
  var qC = Yy(iy(jy) ? jy : jy.contextElement || TC(CC.elements.popper), AC, XC);
  var KC = eC(CC.elements.reference);
  var pC = Cy({
    reference: KC,
    element: sC,
    strategy: "absolute",
    placement: ky
  });
  var wC = iI(Object.assign({}, sC, pC));
  var HC = YC === nC ? wC : KC;
  var aC = {
    top: qC.top - HC.top + SC.top,
    bottom: HC.bottom - qC.bottom + SC.bottom,
    left: qC.left - HC.left + SC.left,
    right: HC.right - qC.right + SC.right
  };
  var cC = CC.modifiersData.offset;
  if (YC === nC && cC) {
    var UC = cC[ky];
    Object.keys(aC).forEach(function (CC) {
      var yC = [WC, VC].indexOf(CC) >= 0 ? 1 : -1;
      var IC = [EC, VC].indexOf(CC) >= 0 ? "y" : "x";
      aC[CC] += UC[IC] * yC;
    });
  }
  return aC;
}
function ey(CC, yC, IC) {
  return bC(CC, rC(yC, IC));
}
const Oy = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  Ky: function (CC) {
    var yC = CC.state;
    var IC = CC.options;
    var fC = CC.name;
    var ky = IC.mainAxis;
    var gC = void 0 === ky || ky;
    var AC = IC.altAxis;
    var my = void 0 !== AC && AC;
    var XC = IC.boundary;
    var iy = IC.rootBoundary;
    var LC = IC.altBoundary;
    var YC = IC.padding;
    var GC = IC.tether;
    var eC = void 0 === GC || GC;
    var OC = IC.tetherOffset;
    var SC = void 0 === OC ? 0 : OC;
    var TC = Gy(yC, {
      boundary: XC,
      rootBoundary: iy,
      padding: YC,
      altBoundary: LC
    });
    var NC = dC(yC.placement);
    var sC = QC(yC.placement);
    var jy = !sC;
    var qC = MC(NC);
    var pC = "x" === qC ? "y" : "x";
    var wC = yC.modifiersData.popperOffsets;
    var HC = yC.rects.reference;
    var aC = yC.rects.popper;
    var cC = "function" === typeof SC ? SC(Object.assign({}, yC.rects, {
      placement: yC.placement
    })) : SC;
    var PC = "number" === typeof cC ? {
      mainAxis: cC,
      altAxis: cC
    } : Object.assign({
      mainAxis: 0,
      altAxis: 0
    }, cC);
    var zC = yC.modifiersData.offset ? yC.modifiersData.offset[yC.placement] : null;
    var tC = {
      x: 0,
      y: 0
    };
    if (wC) {
      if (gC) {
        var JC;
        var nC = "y" === qC ? EC : xC;
        var FC = "y" === qC ? VC : WC;
        var uC = "y" === qC ? "height" : "width";
        var DC = wC[qC];
        var ZC = DC + TC[nC];
        var lC = DC - TC[FC];
        var oC = eC ? -aC[uC] / 2 : 0;
        var vC = sC === BC ? HC[uC] : aC[uC];
        var hC = sC === BC ? -aC[uC] : -HC[uC];
        var RC = yC.elements.arrow;
        var Cy = eC && RC ? KC(RC) : {
          width: 0,
          height: 0
        };
        var yy = yC.modifiersData["arrow#persistent"] ? yC.modifiersData["arrow#persistent"].padding : {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        };
        var Iy = yy[nC];
        var fy = yy[FC];
        var kI = ey(0, HC[uC], Cy[uC]);
        var gy = jy ? HC[uC] / 2 - oC - kI - Iy - PC.mainAxis : vC - kI - Iy - PC.mainAxis;
        var Ay = jy ? -HC[uC] / 2 + oC + kI + fy + PC.mainAxis : hC + kI + fy + PC.mainAxis;
        var mI = yC.elements.arrow && UC(yC.elements.arrow);
        var Xy = mI ? "y" === qC ? mI.clientTop || 0 : mI.clientLeft || 0 : 0;
        var iI = null != (JC = null == zC ? void 0 : zC[qC]) ? JC : 0;
        var Ly = DC + Ay - iI;
        var Yy = ey(eC ? rC(ZC, DC + gy - iI - Xy) : ZC, DC, eC ? bC(lC, Ly) : lC);
        wC[qC] = Yy;
        tC[qC] = Yy - DC;
      }
      if (my) {
        var by;
        var ry = "x" === qC ? EC : xC;
        var Oy = "x" === qC ? VC : WC;
        var Sy = wC[pC];
        var Ty = "y" === pC ? "height" : "width";
        var Ny = Sy + TC[ry];
        var sy = Sy - TC[Oy];
        var jI = -1 !== [EC, xC].indexOf(NC);
        var qy = null != (by = null == zC ? void 0 : zC[pC]) ? by : 0;
        var Ky = jI ? Ny : Sy - HC[Ty] - aC[Ty] - qy + PC.altAxis;
        var py = jI ? Sy + HC[Ty] + aC[Ty] - qy - PC.altAxis : sy;
        var wy = eC && jI ? function (CC, yC, IC) {
          var fC = ey(CC, yC, IC);
          return fC > IC ? IC : fC;
        }(Ky, Sy, py) : ey(eC ? Ky : Ny, Sy, eC ? py : sy);
        wC[pC] = wy;
        tC[pC] = wy - Sy;
      }
      yC.modifiersData[fC] = tC;
    }
  },
  requiresIfExists: ["offset"]
};
const Sy = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  Ky: function (CC) {
    var yC;
    var IC = CC.state;
    var fC = CC.name;
    var ky = CC.options;
    var gC = IC.elements.arrow;
    var AC = IC.modifiersData.popperOffsets;
    var my = dC(IC.placement);
    var XC = MC(my);
    var iy = [xC, WC].indexOf(my) >= 0 ? "height" : "width";
    if (gC && AC) {
      var LC = function (CC, yC) {
        return by("number" !== typeof (CC = "function" === typeof CC ? CC(Object.assign({}, yC.rects, {
          placement: yC.placement
        })) : CC) ? CC : ry(CC, zC));
      }(ky.padding, IC);
      var YC = KC(gC);
      var bC = "y" === XC ? EC : xC;
      var rC = "y" === XC ? VC : WC;
      var GC = IC.rects.reference[iy] + IC.rects.reference[XC] - AC[XC] - IC.rects.popper[iy];
      var eC = AC[XC] - IC.rects.reference[XC];
      var OC = UC(gC);
      var SC = OC ? "y" === XC ? OC.clientHeight || 0 : OC.clientWidth || 0 : 0;
      var TC = GC / 2 - eC / 2;
      var NC = LC[bC];
      var sC = SC - YC[iy] - LC[rC];
      var jy = SC / 2 - YC[iy] / 2 + TC;
      var qC = ey(NC, jy, sC);
      var pC = XC;
      IC.modifiersData[fC] = ((yC = {})[pC] = qC, yC.centerOffset = qC - jy, yC);
    }
  },
  effect: function (CC) {
    var yC = CC.state;
    var IC = CC.options.element;
    var fC = void 0 === IC ? "[data-popper-arrow]" : IC;
    null != fC && ("string" !== typeof fC || (fC = yC.elements.popper.querySelector(fC))) && Xy(yC.elements.popper, fC) && (yC.elements.arrow = fC);
  },
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Ty(CC, yC, IC) {
  void 0 === IC && (IC = {
    x: 0,
    y: 0
  });
  return {
    top: CC.top - yC.height - IC.y,
    right: CC.right - yC.width + IC.x,
    bottom: CC.bottom - yC.height + IC.y,
    left: CC.left - yC.width - IC.x
  };
}
function Ny(CC) {
  return [EC, WC, VC, xC].some(function (yC) {
    return CC[yC] >= 0;
  });
}
var sy = hC({
  defaultModifiers: [{
    name: "eventListeners",
    enabled: !0,
    phase: "write",
    Ky: function () {},
    effect: function (CC) {
      var yC = CC.state;
      var IC = CC.instance;
      var fC = CC.options;
      var ky = fC.scroll;
      var gC = void 0 === ky || ky;
      var AC = fC.resize;
      var my = void 0 === AC || AC;
      var iy = XC(yC.elements.popper);
      var LC = [].concat(yC.scrollParents.reference, yC.scrollParents.popper);
      gC && LC.forEach(function (CC) {
        CC.addEventListener("scroll", IC.update, RC);
      });
      my && iy.addEventListener("resize", IC.update, RC);
      return function () {
        gC && LC.forEach(function (CC) {
          CC.removeEventListener("scroll", IC.update, RC);
        });
        my && iy.removeEventListener("resize", IC.update, RC);
      };
    },
    data: {}
  }, {
    name: "popperOffsets",
    enabled: !0,
    phase: "read",
    Ky: function (CC) {
      var yC = CC.state;
      var IC = CC.name;
      yC.modifiersData[IC] = Cy({
        reference: yC.rects.reference,
        element: yC.rects.popper,
        strategy: "absolute",
        placement: yC.placement
      });
    },
    data: {}
  }, {
    name: "computeStyles",
    enabled: !0,
    phase: "beforeWrite",
    Ky: function (CC) {
      var yC = CC.state;
      var IC = CC.options;
      var fC = IC.gpuAcceleration;
      var ky = void 0 === fC || fC;
      var gC = IC.adaptive;
      var AC = void 0 === gC || gC;
      var my = IC.roundOffsets;
      var XC = void 0 === my || my;
      var iy = {
        placement: dC(yC.placement),
        variation: QC(yC.placement),
        popper: yC.elements.popper,
        popperRect: yC.rects.popper,
        gpuAcceleration: ky,
        isFixed: "fixed" === yC.options.strategy
      };
      null != yC.modifiersData.popperOffsets && (yC.styles.popper = Object.assign({}, yC.styles.popper, Iy(Object.assign({}, iy, {
        offsets: yC.modifiersData.popperOffsets,
        position: yC.options.strategy,
        adaptive: AC,
        roundOffsets: XC
      }))));
      null != yC.modifiersData.arrow && (yC.styles.arrow = Object.assign({}, yC.styles.arrow, Iy(Object.assign({}, iy, {
        offsets: yC.modifiersData.arrow,
        position: "absolute",
        adaptive: !1,
        roundOffsets: XC
      }))));
      yC.attributes.popper = Object.assign({}, yC.attributes.popper, {
        "data-popper-placement": yC.placement
      });
    },
    data: {}
  }, {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    Ky: function (CC) {
      var yC = CC.state;
      Object.keys(yC.elements).forEach(function (CC) {
        var IC = yC.styles[CC] || {};
        var fC = yC.attributes[CC] || {};
        var ky = yC.elements[CC];
        LC(ky) && SC(ky) && (Object.assign(ky.style, IC), Object.keys(fC).forEach(function (CC) {
          var yC = fC[CC];
          !1 === yC ? ky.removeAttribute(CC) : ky.setAttribute(CC, !0 === yC ? "" : yC);
        }));
      });
    },
    effect: function (CC) {
      var yC = CC.state;
      var IC = {
        popper: {
          position: yC.options.strategy,
          left: "0",
          top: "0",
          margin: "0"
        },
        arrow: {
          position: "absolute"
        },
        reference: {}
      };
      Object.assign(yC.elements.popper.style, IC.popper);
      yC.styles = IC;
      yC.elements.arrow && Object.assign(yC.elements.arrow.style, IC.arrow);
      return function () {
        Object.keys(yC.elements).forEach(function (CC) {
          var fC = yC.elements[CC];
          var ky = yC.attributes[CC] || {};
          var gC = Object.keys(yC.styles.hasOwnProperty(CC) ? yC.styles[CC] : IC[CC]).reduce(function (CC, yC) {
            CC[yC] = "";
            return CC;
          }, {});
          LC(fC) && SC(fC) && (Object.assign(fC.style, gC), Object.keys(ky).forEach(function (CC) {
            fC.removeAttribute(CC);
          }));
        });
      };
    },
    requires: ["computeStyles"]
  }, fy, {
    name: "flip",
    enabled: !0,
    phase: "main",
    Ky: function (CC) {
      var yC = CC.state;
      var IC = CC.options;
      var fC = CC.name;
      if (!yC.modifiersData[fC]._skip) {
        for (var ky = IC.mainAxis, gC = void 0 === ky || ky, AC = IC.altAxis, my = void 0 === AC || AC, XC = IC.fallbackPlacements, iy = IC.padding, LC = IC.boundary, YC = IC.rootBoundary, bC = IC.altBoundary, rC = IC.flipVariations, GC = void 0 === rC || rC, eC = IC.allowedAutoPlacements, OC = yC.options.placement, SC = dC(OC), TC = XC || (SC === OC || !GC ? [gy(OC)] : function (CC) {
            if (dC(CC) === PC) {
              return [];
            }
            var yC = gy(CC);
            return [mI(CC), yC, mI(yC)];
          }(OC)), NC = [OC].concat(TC).reduce(function (CC, IC) {
            return CC.concat(dC(IC) === PC ? function (CC, yC) {
              void 0 === yC && (yC = {});
              var IC = yC;
              var fC = IC.placement;
              var ky = IC.boundary;
              var gC = IC.rootBoundary;
              var AC = IC.padding;
              var my = IC.flipVariations;
              var XC = IC.allowedAutoPlacements;
              var iy = void 0 === XC ? uC : XC;
              var LC = QC(fC);
              var YC = LC ? my ? FC : FC.filter(function (CC) {
                return QC(CC) === LC;
              }) : zC;
              var bC = YC.filter(function (CC) {
                return iy.indexOf(CC) >= 0;
              });
              0 === bC.length && (bC = YC);
              var rC = bC.reduce(function (yC, IC) {
                yC[IC] = Gy(CC, {
                  placement: IC,
                  boundary: ky,
                  rootBoundary: gC,
                  padding: AC
                })[dC(IC)];
                return yC;
              }, {});
              return Object.keys(rC).sort(function (CC, yC) {
                return rC[CC] - rC[yC];
              });
            }(yC, {
              placement: IC,
              boundary: LC,
              rootBoundary: YC,
              padding: iy,
              flipVariations: GC,
              allowedAutoPlacements: eC
            }) : IC);
          }, []), sC = yC.rects.reference, jy = yC.rects.popper, qC = new Map(), KC = !0, pC = NC[0], wC = 0; wC < NC.length; wC++) {
          var HC = NC[wC];
          var aC = dC(HC);
          var cC = QC(HC) === BC;
          var UC = [EC, VC].indexOf(aC) >= 0;
          var tC = UC ? "width" : "height";
          var JC = Gy(yC, {
            placement: HC,
            boundary: LC,
            rootBoundary: YC,
            altBoundary: bC,
            padding: iy
          });
          var nC = UC ? cC ? WC : xC : cC ? VC : EC;
          sC[tC] > jy[tC] && (nC = gy(nC));
          var DC = gy(nC);
          var ZC = [];
          gC && ZC.push(JC[aC] <= 0);
          my && ZC.push(JC[nC] <= 0, JC[DC] <= 0);
          if (ZC.every(function (CC) {
            return CC;
          })) {
            pC = HC;
            KC = !1;
            break;
          }
          qC.set(HC, ZC);
        }
        if (KC) {
          for (var lC = function (CC) {
              var yC = NC.find(function (yC) {
                var IC = qC.get(yC);
                if (IC) {
                  return IC.slice(0, CC).every(function (CC) {
                    return CC;
                  });
                }
              });
              if (yC) {
                pC = yC;
                return "break";
              }
            }, oC = GC ? 3 : 1; oC > 0; oC--) {
            if ("break" === lC(oC)) {
              break;
            }
          }
        }
        yC.placement !== pC && (yC.modifiersData[fC]._skip = !0, yC.placement = pC, yC.reset = !0);
      }
    },
    requiresIfExists: ["offset"],
    data: {
      _skip: !1
    }
  }, Oy, Sy, {
    name: "hide",
    enabled: !0,
    phase: "main",
    requiresIfExists: ["preventOverflow"],
    Ky: function (CC) {
      var yC = CC.state;
      var IC = CC.name;
      var fC = yC.rects.reference;
      var ky = yC.rects.popper;
      var gC = yC.modifiersData.preventOverflow;
      var AC = Gy(yC, {
        elementContext: "reference"
      });
      var my = Gy(yC, {
        altBoundary: !0
      });
      var XC = Ty(AC, fC);
      var iy = Ty(my, ky, gC);
      var LC = Ny(XC);
      var YC = Ny(iy);
      yC.modifiersData[IC] = {
        referenceClippingOffsets: XC,
        popperEscapeOffsets: iy,
        isReferenceHidden: LC,
        hasPopperEscaped: YC
      };
      yC.attributes.popper = Object.assign({}, yC.attributes.popper, {
        "data-popper-reference-hidden": LC,
        "data-popper-escaped": YC
      });
    }
  }]
});
var jI = require("./1406.js");
var qy = jI;
function Ky(CC) {
  return CC.reduce(function (CC, yC) {
    var IC = yC[0];
    var fC = yC[1];
    CC[IC] = fC;
    return CC;
  }, {});
}
var py = "undefined" !== typeof window && window.document && window.document.createElement ? AC.useLayoutEffect : AC.Oy;
var wy = [];
function Hy(CC, yC, IC) {
  void 0 === IC && (IC = {});
  var fC = AC.useRef(null);
  var ky = {
    onFirstUpdate: IC.onFirstUpdate,
    placement: IC.placement || "bottom",
    strategy: IC.strategy || "absolute",
    modifiers: IC.modifiers || wy
  };
  var gC = AC.ey({
    styles: {
      popper: {
        position: ky.strategy,
        left: "0",
        top: "0"
      },
      arrow: {
        position: "absolute"
      }
    },
    attributes: {}
  });
  var XC = gC[0];
  var iy = gC[1];
  var LC = AC.useMemo(function () {
    return {
      name: "updateState",
      enabled: !0,
      phase: "write",
      Ky: function (CC) {
        var yC = CC.state;
        var IC = Object.keys(yC.elements);
        my.flushSync(function () {
          iy({
            styles: Ky(IC.map(function (CC) {
              return [CC, yC.styles[CC] || {}];
            })),
            attributes: Ky(IC.map(function (CC) {
              return [CC, yC.attributes[CC]];
            }))
          });
        });
      },
      requires: ["computeStyles"]
    };
  }, []);
  var YC = AC.useMemo(function () {
    var CC = {
      onFirstUpdate: ky.onFirstUpdate,
      placement: ky.placement,
      strategy: ky.strategy,
      modifiers: [].concat(ky.modifiers, [LC, {
        name: "applyStyles",
        enabled: !1
      }])
    };
    return qy(fC.current, CC) ? fC.current || CC : (fC.current = CC, CC);
  }, [ky.onFirstUpdate, ky.placement, ky.strategy, ky.modifiers, LC]);
  var bC = AC.useRef();
  py(function () {
    bC.current && bC.current.setOptions(YC);
  }, [YC]);
  py(function () {
    if (null != CC && null != yC) {
      var fC = (IC.createPopper || sy)(CC, yC, YC);
      bC.current = fC;
      return function () {
        fC.destroy();
        bC.current = null;
      };
    }
  }, [CC, yC, IC.createPopper]);
  return {
    state: bC.current ? bC.current.state : null,
    styles: XC.styles,
    attributes: XC.attributes,
    update: bC.current ? bC.current.update : null,
    forceUpdate: bC.current ? bC.current.forceUpdate : null
  };
}
function ay(CC) {
  var yC = AC.useRef(CC);
  yC.current = CC;
  return AC.useCallback(function () {
    return yC.current;
  }, []);
}
function cy() {}
function Uy(CC, yC) {
  void 0 === CC && (CC = 0);
  void 0 === yC && (yC = 0);
  return function () {
    return {
      width: 0,
      height: 0,
      top: yC,
      right: CC,
      bottom: yC,
      left: CC,
      x: 0,
      y: 0,
      toJSON: function () {
        return null;
      }
    };
  };
}
var Ey = ["styles", "attributes"];
var Vy = {
  getBoundingClientRect: Uy()
};
var Wy = {
  closeOnOutsideClick: !0,
  closeOnTriggerHidden: !1,
  defaultVisible: !1,
  delayHide: 0,
  delayShow: 0,
  followCursor: !1,
  interactive: !1,
  mutationObserverOptions: {
    attributes: !0,
    childList: !0,
    subtree: !0
  },
  offset: [0, 6],
  trigger: "hover"
};
function xy(CC, yC) {
  var IC;
  var fC;
  var my;
  void 0 === CC && (CC = {});
  void 0 === yC && (yC = {});
  var XC = Object.keys(Wy).reduce(function (CC, yC) {
    var IC;
    return (0, gC.b)({}, CC, ((IC = {})[yC] = void 0 !== CC[yC] ? CC[yC] : Wy[yC], IC));
  }, CC);
  var iy = AC.useMemo(function () {
    return [{
      name: "offset",
      options: {
        offset: XC.offset
      }
    }];
  }, Array.isArray(XC.offset) ? XC.offset : []);
  var LC = (0, gC.b)({}, yC, {
    placement: yC.placement || XC.placement,
    modifiers: yC.modifiers || iy
  });
  var YC = AC.ey(null);
  var bC = YC[0];
  var rC = YC[1];
  var GC = AC.ey(null);
  var eC = GC[0];
  var OC = GC[1];
  var SC = function (CC) {
    var yC = CC.initial;
    var IC = CC.value;
    var fC = CC.onChange;
    var ky = void 0 === fC ? cy : fC;
    if (void 0 === yC && void 0 === IC) {
      throw new TypeError('Either "value" or "initial" variable must be set. Now both are undefined');
    }
    var gC = AC.ey(yC);
    var my = gC[0];
    var XC = gC[1];
    var iy = ay(my);
    var LC = AC.useCallback(function (CC) {
      var yC = iy();
      var IC = "function" === typeof CC ? CC(yC) : CC;
      "function" === typeof IC.persist && IC.persist();
      XC(IC);
      "function" === typeof ky && ky(IC);
    }, [iy, ky]);
    var YC = void 0 !== IC;
    return [YC ? IC : my, YC ? ky : LC];
  }({
    initial: XC.defaultVisible,
    value: XC.visible,
    onChange: XC.onVisibleChange
  });
  var TC = SC[0];
  var NC = SC[1];
  var sC = AC.useRef();
  AC.Oy(function () {
    return function () {
      return clearTimeout(sC.current);
    };
  }, []);
  var jy = Hy(XC.followCursor ? Vy : bC, eC, LC);
  var qC = jy.styles;
  var KC = jy.attributes;
  var pC = (0, ky.d)(jy, Ey);
  var wC = pC.update;
  var HC = ay({
    visible: TC,
    triggerRef: bC,
    tooltipRef: eC,
    finalConfig: XC
  });
  var aC = AC.useCallback(function (CC) {
    return Array.isArray(XC.trigger) ? XC.trigger.includes(CC) : XC.trigger === CC;
  }, Array.isArray(XC.trigger) ? XC.trigger : [XC.trigger]);
  var cC = AC.useCallback(function () {
    clearTimeout(sC.current);
    sC.current = window.setTimeout(function () {
      return NC(!1);
    }, XC.delayHide);
  }, [XC.delayHide, NC]);
  var UC = AC.useCallback(function () {
    clearTimeout(sC.current);
    sC.current = window.setTimeout(function () {
      return NC(!0);
    }, XC.delayShow);
  }, [XC.delayShow, NC]);
  var EC = AC.useCallback(function () {
    HC().visible ? cC() : UC();
  }, [HC, cC, UC]);
  AC.Oy(function () {
    if (HC().finalConfig.closeOnOutsideClick) {
      function CC(CC) {
        var yC;
        var IC = HC();
        var fC = IC.tooltipRef;
        var ky = IC.triggerRef;
        var gC = (null == CC.composedPath || null == (yC = CC.composedPath()) ? void 0 : yC[0]) || CC.target;
        gC instanceof Node && (null == fC || null == ky || fC.contains(gC) || ky.contains(gC) || cC());
      }
      document.addEventListener("mousedown", CC);
      return function () {
        return document.removeEventListener("mousedown", CC);
      };
    }
  }, [HC, cC]);
  AC.Oy(function () {
    if (null != bC && aC("click")) {
      bC.addEventListener("click", EC);
      return function () {
        return bC.removeEventListener("click", EC);
      };
    }
  }, [bC, aC, EC]);
  AC.Oy(function () {
    if (null != bC && aC("double-click")) {
      bC.addEventListener("dblclick", EC);
      return function () {
        return bC.removeEventListener("dblclick", EC);
      };
    }
  }, [bC, aC, EC]);
  AC.Oy(function () {
    if (null != bC && aC("right-click")) {
      function CC(CC) {
        CC.preventDefault();
        EC();
      }
      bC.addEventListener("contextmenu", CC);
      return function () {
        return bC.removeEventListener("contextmenu", CC);
      };
    }
  }, [bC, aC, EC]);
  AC.Oy(function () {
    if (null != bC && aC("focus")) {
      bC.addEventListener("focus", UC);
      bC.addEventListener("blur", cC);
      return function () {
        bC.removeEventListener("focus", UC);
        bC.removeEventListener("blur", cC);
      };
    }
  }, [bC, aC, UC, cC]);
  AC.Oy(function () {
    if (null != bC && aC("hover")) {
      bC.addEventListener("mouseenter", UC);
      bC.addEventListener("mouseleave", cC);
      return function () {
        bC.removeEventListener("mouseenter", UC);
        bC.removeEventListener("mouseleave", cC);
      };
    }
  }, [bC, aC, UC, cC]);
  AC.Oy(function () {
    if (null != eC && aC("hover") && HC().finalConfig.interactive) {
      eC.addEventListener("mouseenter", UC);
      eC.addEventListener("mouseleave", cC);
      return function () {
        eC.removeEventListener("mouseenter", UC);
        eC.removeEventListener("mouseleave", cC);
      };
    }
  }, [eC, aC, UC, cC, HC]);
  var VC = null == pC || null == (IC = pC.state) || null == (fC = IC.modifiersData) || null == (my = fC.hide) ? void 0 : my.isReferenceHidden;
  AC.Oy(function () {
    XC.closeOnTriggerHidden && VC && cC();
  }, [XC.closeOnTriggerHidden, cC, VC]);
  AC.Oy(function () {
    if (XC.followCursor && null != bC) {
      bC.addEventListener("mousemove", CC);
      return function () {
        return bC.removeEventListener("mousemove", CC);
      };
    }
    function CC(CC) {
      var yC = CC.clientX;
      var IC = CC.clientY;
      Vy.getBoundingClientRect = Uy(yC, IC);
      null == wC || wC();
    }
  }, [XC.followCursor, bC, wC]);
  AC.Oy(function () {
    if (null != eC && null != wC && null != XC.mutationObserverOptions) {
      var CC = new MutationObserver(wC);
      CC.observe(eC, XC.mutationObserverOptions);
      return function () {
        return CC.disconnect();
      };
    }
  }, [XC.mutationObserverOptions, eC, wC]);
  return (0, gC.b)({
    getArrowProps: function (CC) {
      void 0 === CC && (CC = {});
      return (0, gC.b)({}, CC, KC.arrow, {
        style: (0, gC.b)({}, CC.style, qC.arrow),
        "data-popper-arrow": !0
      });
    },
    getTooltipProps: function (CC) {
      void 0 === CC && (CC = {});
      return (0, gC.b)({}, CC, {
        style: (0, gC.b)({}, CC.style, qC.popper)
      }, KC.popper, {
        "data-popper-interactive": XC.interactive
      });
    },
    setTooltipRef: OC,
    setTriggerRef: rC,
    tooltipRef: eC,
    triggerRef: bC,
    visible: TC
  }, pC);
}
var Py = require("./534.js");
export function b(CC) {
  let {
    className: yC = "",
    hoverInfo: IC
  } = CC;
  return (0, Py.jsx)(f, {
    tooltipInner: (0, Py.jsx)("div", {
      className: "CircleInfoTooltip",
      children: IC
    }),
    children: (0, Py.jsx)("i", {
      className: "fas fa-circle-info CircleInfo ".concat(yC)
    })
  });
}
export function f(CC) {
  let {
    children: yC,
    tooltipInner: IC,
    hideTooltip: ky = !1,
    delayShow: gC = 600,
    delayHide: my = 100
  } = CC;
  const {
    getArrowProps: XC,
    getTooltipProps: iy,
    setTooltipRef: LC,
    setTriggerRef: YC,
    visible: bC
  } = xy({
    placement: "bottom",
    delayShow: gC,
    delayHide: my
  });
  return (0, Py.jsxs)(Py.Fragment, {
    children: [(0, AC.cloneElement)(yC, {
      ref: YC
    }), bC && !ky && (0, Py.jsxs)("div", (0, fC.d)((0, fC.d)({
      ref: LC
    }, iy({
      className: "tooltip-container SmallTextLight"
    })), {}, {
      children: [IC, (0, Py.jsx)("div", (0, fC.d)({}, XC({
        className: "tooltip-arrow"
      })))]
    }))]
  });
}