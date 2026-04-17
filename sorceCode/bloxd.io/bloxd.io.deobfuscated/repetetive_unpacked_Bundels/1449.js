var fC = require("./49.js");
var ky = require("./1458.js");
var gC = require("./1465.js");
function AC() {
  AC = Object.assign ? Object.assign.bind() : function (CC) {
    for (var yC = 1; yC < arguments.length; yC++) {
      var IC = arguments[yC];
      for (var fC in IC) {
        Object.prototype.hasOwnProperty.call(IC, fC) && (CC[fC] = IC[fC]);
      }
    }
    return CC;
  };
  return AC.apply(this, arguments);
}
function my(CC, yC) {
  if (null == CC) {
    return {};
  }
  var IC;
  var fC;
  var ky = {};
  var gC = Object.keys(CC);
  for (fC = 0; fC < gC.length; fC++) {
    IC = gC[fC];
    yC.indexOf(IC) >= 0 || (ky[IC] = CC[IC]);
  }
  return ky;
}
const XC = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset"];
export function i(CC, yC) {
  return (0, gC.s)({
    basename: null == yC ? void 0 : yC.basename,
    history: (0, gC.m)({
      window: null == yC ? void 0 : yC.window
    }),
    hydrationData: (null == yC ? void 0 : yC.hydrationData) || LC(),
    routes: (0, ky.n)(CC)
  }).initialize();
}
function LC() {
  var CC;
  let yC = null == (CC = window) ? void 0 : CC.__staticRouterHydrationData;
  yC && yC.errors && (yC = AC({}, yC, {
    errors: YC(yC.errors)
  }));
  return yC;
}
function YC(CC) {
  if (!CC) {
    return null;
  }
  let yC = Object.entries(CC);
  let IC = {};
  for (let [fC, ky] of yC) {
    if (ky && "RouteErrorResponse" === ky.__type) {
      IC[fC] = new gC.h(ky.status, ky.statusText, ky.data, !0 === ky.internal);
    } else {
      if (ky && "Error" === ky.__type) {
        let CC = new Error(ky.message);
        CC.stack = "";
        IC[fC] = CC;
      } else {
        IC[fC] = ky;
      }
    }
  }
  return IC;
}
const bC = "undefined" !== typeof window && "undefined" !== typeof window.document && "undefined" !== typeof window.document.createElement;
export const e = fC.forwardRef(function (CC, yC) {
  let IC;
  let {
    onClick: iy,
    relative: LC,
    reloadDocument: YC,
    replace: rC,
    state: GC,
    target: eC,
    to: OC,
    preventScrollReset: SC
  } = CC;
  let TC = my(CC, XC);
  let NC = !1;
  if (bC && "string" === typeof OC && /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(OC)) {
    IC = OC;
    let CC = new URL(window.location.href);
    let yC = OC.startsWith("//") ? new URL(CC.protocol + OC) : new URL(OC);
    yC.origin === CC.origin ? OC = yC.pathname + yC.search + yC.hash : NC = !0;
  }
  let sC = (0, ky.q)(OC, {
    relative: LC
  });
  let jy = function (CC, yC) {
    let {
      target: IC,
      replace: AC,
      state: my,
      preventScrollReset: XC,
      relative: iy
    } = void 0 === yC ? {} : yC;
    let LC = (0, ky.v)();
    let YC = (0, ky.u)();
    let bC = (0, ky.D)(CC, {
      relative: iy
    });
    return fC.useCallback(yC => {
      if (function (CC, yC) {
        return 0 === CC.button && (!yC || "_self" === yC) && !function (CC) {
          return !!(CC.metaKey || CC.altKey || CC.ctrlKey || CC.shiftKey);
        }(CC);
      }(yC, IC)) {
        yC.preventDefault();
        let IC = void 0 !== AC ? AC : (0, gC.o)(YC) === (0, gC.o)(bC);
        LC(CC, {
          replace: IC,
          state: my,
          preventScrollReset: XC,
          relative: iy
        });
      }
    }, [YC, LC, bC, AC, my, IC, CC, XC, iy]);
  }(OC, {
    replace: rC,
    state: GC,
    target: eC,
    preventScrollReset: SC,
    relative: LC
  });
  return fC.createElement("a", AC({}, TC, {
    href: IC || sC,
    onClick: NC || YC ? iy : function (CC) {
      iy && iy(CC);
      CC.defaultPrevented || jy(CC);
    },
    ref: yC,
    target: eC
  }));
});
var GC;
var eC;
(function (CC) {
  CC.UseScrollRestoration = "useScrollRestoration";
  CC.UseSubmitImpl = "useSubmitImpl";
  CC.UseFetcher = "useFetcher";
})(GC || (GC = {}));
(function (CC) {
  CC.UseFetchers = "useFetchers";
  CC.UseScrollRestoration = "useScrollRestoration";
})(eC || (eC = {}));