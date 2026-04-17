var fC;
var ky = require("./1465.js");
var gC = require("./49.js");
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
const my = "function" === typeof Object.is ? Object.is : function (CC, yC) {
  return CC === yC && (0 !== CC || 1 / CC === 1 / yC) || CC !== CC && yC !== yC;
};
const {
  ey: XC,
  Oy: iy,
  useLayoutEffect: LC,
  useDebugValue: YC
} = fC || (fC = require.t(gC, 2));
function bC(CC) {
  const yC = CC.getSnapshot;
  const IC = CC.value;
  try {
    const CC = yC();
    return !my(IC, CC);
  } catch (fC) {
    return !0;
  }
}
const rC = !!("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement) ? function (CC, yC, IC) {
  return yC();
} : function (CC, yC, IC) {
  const fC = yC();
  const [{
    inst: ky
  }, gC] = XC({
    inst: {
      value: fC,
      getSnapshot: yC
    }
  });
  LC(() => {
    ky.value = fC;
    ky.getSnapshot = yC;
    bC(ky) && gC({
      inst: ky
    });
  }, [CC, fC, yC]);
  iy(() => {
    bC(ky) && gC({
      inst: ky
    });
    return CC(() => {
      bC(ky) && gC({
        inst: ky
      });
    });
  }, [CC]);
  YC(fC);
  return fC;
};
const GC = gC.createContext(null);
const eC = gC.createContext(null);
const OC = gC.createContext(null);
const SC = gC.createContext(null);
const TC = gC.createContext({
  outlet: null,
  matches: []
});
const NC = gC.createContext(null);
export function q(CC, yC) {
  let {
    relative: IC
  } = void 0 === yC ? {} : yC;
  jy() || (0, ky.u)(!1);
  let {
    basename: fC,
    navigator: AC
  } = gC.useContext(OC);
  let {
    hash: my,
    pathname: XC,
    search: iy
  } = D(CC, {
    relative: IC
  });
  let LC = XC;
  "/" !== fC && (LC = "/" === XC ? fC : (0, ky.z)([fC, XC]));
  return AC.createHref({
    pathname: LC,
    search: iy,
    hash: my
  });
}
function jy() {
  return null != gC.useContext(SC);
}
export function u() {
  jy() || (0, ky.u)(!1);
  return gC.useContext(SC).location;
}
export function x() {
  return gC.useContext(SC).navigationType;
}
export function v() {
  jy() || (0, ky.u)(!1);
  let {
    basename: CC,
    navigator: yC
  } = gC.useContext(OC);
  let {
    matches: IC
  } = gC.useContext(TC);
  let {
    pathname: fC
  } = u();
  let AC = JSON.stringify((0, ky.i)(IC).map(CC => CC.pathnameBase));
  let my = gC.useRef(!1);
  gC.Oy(() => {
    my.current = !0;
  });
  return gC.useCallback(function (IC, gC) {
    void 0 === gC && (gC = {});
    if (!my.current) {
      return;
    }
    if ("number" === typeof IC) {
      return void yC.go(IC);
    }
    let XC = (0, ky.I)(IC, JSON.parse(AC), fC, "path" === gC.relative);
    "/" !== CC && (XC.pathname = "/" === XC.pathname ? CC : (0, ky.z)([CC, XC.pathname]));
    (gC.replace ? yC.replace : yC.push)(XC, gC.state, gC);
  }, [CC, yC, AC, fC]);
}
const wC = gC.createContext(null);
export function z() {
  let {
    matches: CC
  } = gC.useContext(TC);
  let yC = CC[CC.length - 1];
  return yC ? yC.params : {};
}
export function D(CC, yC) {
  let {
    relative: IC
  } = void 0 === yC ? {} : yC;
  let {
    matches: fC
  } = gC.useContext(TC);
  let {
    pathname: AC
  } = u();
  let my = JSON.stringify((0, ky.i)(fC).map(CC => CC.pathnameBase));
  return gC.useMemo(() => (0, ky.I)(CC, JSON.parse(my), AC, "path" === IC), [CC, my, AC, IC]);
}
function cC() {
  let CC = E();
  let yC = (0, ky.w)(CC) ? CC.status + " " + CC.statusText : CC instanceof Error ? CC.message : JSON.stringify(CC);
  let IC = CC instanceof Error ? CC.stack : null;
  let fC = "rgba(200,200,200, 0.5)";
  let AC = {
    padding: "0.5rem",
    backgroundColor: fC
  };
  return gC.createElement(gC.Fragment, null, gC.createElement("h2", null, "Unexpected Application Error!"), gC.createElement("h3", {
    style: {
      fontStyle: "italic"
    }
  }, yC), IC ? gC.createElement("Ai", {
    style: AC
  }, IC) : null, null);
}
class UC extends gC.Component {
  constructor(CC) {
    super(CC);
    this.state = {
      location: CC.location,
      error: CC.error
    };
  }
  static getDerivedStateFromError(CC) {
    return {
      error: CC
    };
  }
  static getDerivedStateFromProps(CC, yC) {
    return yC.location !== CC.location ? {
      error: CC.error,
      location: CC.location
    } : {
      error: CC.error || yC.error,
      location: yC.location
    };
  }
  componentDidCatch(CC, yC) {
    console.error("React Router caught the following error during render", CC, yC);
  }
  render() {
    return this.state.error ? gC.createElement(TC.Provider, {
      value: this.props.routeContext
    }, gC.createElement(NC.Provider, {
      value: this.state.error,
      children: this.props.component
    })) : this.props.children;
  }
}
function EC(CC) {
  let {
    routeContext: yC,
    match: IC,
    children: fC
  } = CC;
  let ky = gC.useContext(GC);
  ky && ky.static && ky.staticContext && IC.route.errorElement && (ky.staticContext._deepestRenderedBoundaryId = IC.route.id);
  return gC.createElement(TC.Provider, {
    value: yC
  }, fC);
}
function VC(CC, yC, IC) {
  void 0 === yC && (yC = []);
  if (null == CC) {
    if (null == IC || !IC.errors) {
      return null;
    }
    CC = IC.matches;
  }
  let fC = CC;
  let AC = null == IC ? void 0 : IC.errors;
  if (null != AC) {
    let CC = fC.findIndex(CC => CC.route.id && (null == AC ? void 0 : AC[CC.route.id]));
    CC >= 0 || (0, ky.u)(!1);
    fC = fC.slice(0, Math.min(fC.length, CC + 1));
  }
  return fC.reduceRight((CC, ky, my) => {
    let XC = ky.route.id ? null == AC ? void 0 : AC[ky.route.id] : null;
    let iy = IC ? ky.route.errorElement || gC.createElement(cC, null) : null;
    let LC = yC.concat(fC.slice(0, my + 1));
    let YC = () => gC.createElement(EC, {
      match: ky,
      routeContext: {
        outlet: CC,
        matches: LC
      }
    }, XC ? iy : void 0 !== ky.route.element ? ky.route.element : CC);
    return IC && (ky.route.errorElement || 0 === my) ? gC.createElement(UC, {
      location: IC.location,
      component: iy,
      error: XC,
      children: YC(),
      routeContext: {
        outlet: null,
        matches: LC
      }
    }) : YC();
  }, null);
}
var WC;
var xC;
function PC(CC) {
  let yC = gC.useContext(eC);
  yC || (0, ky.u)(!1);
  return yC;
}
function zC(CC) {
  let yC = function () {
    let CC = gC.useContext(TC);
    CC || (0, ky.u)(!1);
    return CC;
  }();
  let IC = yC.matches[yC.matches.length - 1];
  IC.route.id || (0, ky.u)(!1);
  return IC.route.id;
}
export function E() {
  var CC;
  let yC = gC.useContext(NC);
  let IC = PC(xC.UseRouteError);
  let fC = zC(xC.UseRouteError);
  return yC || (null == (CC = IC.errors) ? void 0 : CC[fC]);
}
!function (CC) {
  CC.UseBlocker = "useBlocker";
  CC.UseRevalidator = "useRevalidator";
}(WC || (WC = {}));
(function (CC) {
  CC.UseLoaderData = "useLoaderData";
  CC.UseActionData = "useActionData";
  CC.UseRouteError = "useRouteError";
  CC.UseNavigation = "useNavigation";
  CC.UseRouteLoaderData = "useRouteLoaderData";
  CC.UseMatches = "useMatches";
  CC.UseRevalidator = "useRevalidator";
})(xC || (xC = {}));
export function l(CC) {
  let {
    fallbackElement: yC,
    router: IC
  } = CC;
  let fC = rC(IC.subscribe, () => IC.state, () => IC.state);
  let ky = gC.useMemo(() => ({
    createHref: IC.createHref,
    encodeLocation: IC.encodeLocation,
    go: CC => IC.navigate(CC),
    push: (CC, yC, fC) => IC.navigate(CC, {
      state: yC,
      preventScrollReset: null == fC ? void 0 : fC.preventScrollReset
    }),
    replace: (CC, yC, fC) => IC.navigate(CC, {
      replace: !0,
      state: yC,
      preventScrollReset: null == fC ? void 0 : fC.preventScrollReset
    })
  }), [IC]);
  let AC = IC.basename || "/";
  return gC.createElement(gC.Fragment, null, gC.createElement(GC.Provider, {
    value: {
      router: IC,
      navigator: ky,
      static: !1,
      basename: AC
    }
  }, gC.createElement(eC.Provider, {
    value: fC
  }, gC.createElement(uC, {
    basename: IC.basename,
    location: IC.state.location,
    navigationType: IC.state.historyAction,
    navigator: ky
  }, IC.state.initialized ? gC.createElement(DC, null) : yC))), null);
}
export function e(CC) {
  let {
    to: yC,
    replace: IC,
    state: fC,
    relative: AC
  } = CC;
  jy() || (0, ky.u)(!1);
  let my = gC.useContext(eC);
  let XC = v();
  gC.Oy(() => {
    my && "idle" !== my.navigation.state || XC(yC, {
      replace: IC,
      state: fC,
      relative: AC
    });
  });
  return null;
}
export function i(CC) {
  return function (CC) {
    let yC = gC.useContext(TC).outlet;
    return yC ? gC.createElement(wC.Provider, {
      value: CC
    }, yC) : yC;
  }(CC.context);
}
function FC(CC) {
  (0, ky.u)(!1);
}
function uC(CC) {
  let {
    basename: yC = "/",
    children: IC = null,
    location: fC,
    navigationType: AC = ky.e.Pop,
    navigator: my,
    static: XC = !1
  } = CC;
  jy() && (0, ky.u)(!1);
  let iy = yC.replace(/^\/*/, "/");
  let LC = gC.useMemo(() => ({
    basename: iy,
    navigator: my,
    static: XC
  }), [iy, my, XC]);
  "string" === typeof fC && (fC = (0, ky.E)(fC));
  let {
    pathname: YC = "/",
    search: bC = "",
    hash: rC = "",
    state: GC = null,
    key: eC = "default"
  } = fC;
  let TC = gC.useMemo(() => {
    let CC = (0, ky.M)(YC, iy);
    return null == CC ? null : {
      pathname: CC,
      search: bC,
      hash: rC,
      state: GC,
      key: eC
    };
  }, [iy, YC, bC, rC, GC, eC]);
  return null == TC ? null : gC.createElement(OC.Provider, {
    value: LC
  }, gC.createElement(SC.Provider, {
    children: IC,
    value: {
      location: TC,
      navigationType: AC
    }
  }));
}
function DC(CC) {
  let {
    children: yC,
    location: IC
  } = CC;
  let fC = gC.useContext(GC);
  return function (CC, yC) {
    jy() || (0, ky.u)(!1);
    let {
      navigator: IC
    } = gC.useContext(OC);
    let fC = gC.useContext(eC);
    let {
      matches: my
    } = gC.useContext(TC);
    let XC = my[my.length - 1];
    let iy = XC ? XC.params : {};
    XC && XC.pathname;
    let LC = XC ? XC.pathnameBase : "/";
    XC && XC.route;
    let YC;
    let bC = u();
    if (yC) {
      var rC;
      let CC = "string" === typeof yC ? (0, ky.E)(yC) : yC;
      "/" === LC || (null == (rC = CC.pathname) ? void 0 : rC.startsWith(LC)) || (0, ky.u)(!1);
      YC = CC;
    } else {
      YC = bC;
    }
    let GC = YC.pathname || "/";
    let NC = "/" === LC ? GC : GC.slice(LC.length) || "/";
    let sC = (0, ky.D)(CC, {
      pathname: NC
    });
    let KC = VC(sC && sC.map(CC => Object.assign({}, CC, {
      params: Object.assign({}, iy, CC.params),
      pathname: (0, ky.z)([LC, IC.encodeLocation ? IC.encodeLocation(CC.pathname).pathname : CC.pathname]),
      pathnameBase: "/" === CC.pathnameBase ? LC : (0, ky.z)([LC, IC.encodeLocation ? IC.encodeLocation(CC.pathnameBase).pathname : CC.pathnameBase])
    })), my, fC || void 0);
    return yC && KC ? gC.createElement(SC.Provider, {
      value: {
        location: AC({
          pathname: "/",
          search: "",
          hash: "",
          state: null,
          key: "default"
        }, YC),
        navigationType: ky.e.Pop
      }
    }, KC) : KC;
  }(fC && !yC ? fC.router.routes : lC(yC), IC);
}
var ZC;
!function (CC) {
  CC[CC.pending = 0] = "pending";
  CC[CC.success = 1] = "success";
  CC[CC.error = 2] = "error";
}(ZC || (ZC = {}));
new Promise(() => {});
gC.Component;
function lC(CC, yC) {
  void 0 === yC && (yC = []);
  let IC = [];
  gC.Children.forEach(CC, (CC, fC) => {
    if (!gC.isValidElement(CC)) {
      return;
    }
    if (CC.type === gC.Fragment) {
      return void IC.push.apply(IC, lC(CC.props.children, yC));
    }
    CC.type !== FC && (0, ky.u)(!1);
    CC.props.index && CC.props.children && (0, ky.u)(!1);
    let AC = [...yC, fC];
    let my = {
      id: CC.props.id || AC.join("-"),
      caseSensitive: CC.props.caseSensitive,
      element: CC.props.element,
      index: CC.props.index,
      path: CC.props.path,
      loader: CC.props.loader,
      action: CC.props.action,
      errorElement: CC.props.errorElement,
      hasErrorBoundary: null != CC.props.errorElement,
      shouldRevalidate: CC.props.shouldRevalidate,
      handle: CC.props.handle
    };
    CC.props.children && (my.children = lC(CC.props.children, AC));
    IC.push(my);
  });
  return IC;
}
export function n(CC) {
  return CC.map(CC => {
    let yC = AC({}, CC);
    null == yC.hasErrorBoundary && (yC.hasErrorBoundary = null != yC.errorElement);
    yC.children && (yC.children = n(yC.children));
    return yC;
  });
}