function fC() {
  fC = Object.assign ? Object.assign.bind() : function (CC) {
    for (var yC = 1; yC < arguments.length; yC++) {
      var IC = arguments[yC];
      for (var fC in IC) {
        Object.prototype.hasOwnProperty.call(IC, fC) && (CC[fC] = IC[fC]);
      }
    }
    return CC;
  };
  return fC.apply(this, arguments);
}
export var e;
(function (CC) {
  CC.Pop = "POP";
  CC.Push = "PUSH";
  CC.Replace = "REPLACE";
})(e || (e = {}));
const gC = "popstate";
export function m(CC) {
  void 0 === CC && (CC = {});
  return bC(function (CC, yC) {
    let {
      pathname: IC,
      search: fC,
      hash: ky
    } = CC.location;
    return iy("", {
      pathname: IC,
      search: fC,
      hash: ky
    }, yC.state && yC.state.usr || null, yC.state && yC.state.key || "default");
  }, function (CC, yC) {
    return "string" === typeof yC ? yC : o(yC);
  }, null, CC);
}
export function u(CC, yC) {
  if (!1 === CC || null === CC || "undefined" === typeof CC) {
    throw new Error(yC);
  }
}
function XC(CC, yC) {
  return {
    usr: CC.state,
    key: CC.key,
    idx: yC
  };
}
function iy(CC, yC, IC, ky) {
  void 0 === IC && (IC = null);
  return fC({
    pathname: "string" === typeof CC ? CC : CC.pathname,
    search: "",
    hash: ""
  }, "string" === typeof yC ? E(yC) : yC, {
    state: IC,
    key: yC && yC.key || ky || Math.random().toString(36).substr(2, 8)
  });
}
export function o(CC) {
  let {
    pathname: yC = "/",
    search: IC = "",
    hash: fC = ""
  } = CC;
  IC && "?" !== IC && (yC += "?" === IC.charAt(0) ? IC : "?" + IC);
  fC && "#" !== fC && (yC += "#" === fC.charAt(0) ? fC : "#" + fC);
  return yC;
}
export function E(CC) {
  let yC = {};
  if (CC) {
    let IC = CC.indexOf("#");
    IC >= 0 && (yC.hash = CC.substr(IC), CC = CC.substr(0, IC));
    let fC = CC.indexOf("?");
    fC >= 0 && (yC.search = CC.substr(fC), CC = CC.substr(0, fC));
    CC && (yC.pathname = CC);
  }
  return yC;
}
function bC(CC, yC, IC, AC) {
  void 0 === AC && (AC = {});
  let {
    window: YC = document.defaultView,
    v5Compat: bC = !1
  } = AC;
  let rC = YC.history;
  let GC = e.Pop;
  let eC = null;
  let OC = SC();
  function SC() {
    return (rC.state || {
      idx: null
    }).idx;
  }
  function TC() {
    GC = e.Pop;
    let CC = SC();
    let yC = null == CC ? null : CC - OC;
    OC = CC;
    eC && eC({
      action: GC,
      location: sC.location,
      delta: yC
    });
  }
  function NC(CC) {
    let yC = "null" !== YC.location.origin ? YC.location.origin : YC.location.href;
    let IC = "string" === typeof CC ? CC : o(CC);
    u(yC, "No window.location.(origin|href) available to create URL for href: " + IC);
    return new URL(IC, yC);
  }
  null == OC && (OC = 0, rC.replaceState(fC({}, rC.state, {
    idx: OC
  }), ""));
  let sC = {
    get action() {
      return GC;
    },
    get location() {
      return CC(YC, rC);
    },
    listen(CC) {
      if (eC) {
        throw new Error("A history only accepts one active listener");
      }
      YC.addEventListener(gC, TC);
      eC = CC;
      return () => {
        YC.removeEventListener(gC, TC);
        eC = null;
      };
    },
    createHref: CC => yC(YC, CC),
    createURL: NC,
    encodeLocation(CC) {
      let yC = NC(CC);
      return {
        pathname: yC.pathname,
        search: yC.search,
        hash: yC.hash
      };
    },
    push: function (CC, yC) {
      GC = e.Push;
      let fC = iy(sC.location, CC, yC);
      IC && IC(fC, CC);
      OC = SC() + 1;
      let gC = XC(fC, OC);
      let AC = sC.createHref(fC);
      try {
        rC.pushState(gC, "", AC);
      } catch (my) {
        YC.location.assign(AC);
      }
      bC && eC && eC({
        action: GC,
        location: sC.location,
        delta: 1
      });
    },
    replace: function (CC, yC) {
      GC = e.Replace;
      let fC = iy(sC.location, CC, yC);
      IC && IC(fC, CC);
      OC = SC();
      let gC = XC(fC, OC);
      let AC = sC.createHref(fC);
      rC.replaceState(gC, "", AC);
      bC && eC && eC({
        action: GC,
        location: sC.location,
        delta: 0
      });
    },
    go: CC => rC.go(CC)
  };
  return sC;
}
var rC;
function GC(CC, yC, IC) {
  void 0 === yC && (yC = []);
  void 0 === IC && (IC = new Set());
  return CC.map((CC, ky) => {
    let gC = [...yC, ky];
    let AC = "string" === typeof CC.id ? CC.id : gC.join("-");
    u(!0 !== CC.index || !CC.children, "Cannot specify children on an index route");
    u(!IC.has(AC), 'Found a route id collision on id "' + AC + "\".  Route id's must be globally unique within Data Router usages");
    IC.add(AC);
    if (function (CC) {
      return !0 === CC.index;
    }(CC)) {
      return fC({}, CC, {
        id: AC
      });
    }
    return fC({}, CC, {
      id: AC,
      children: CC.children ? GC(CC.children, gC, IC) : void 0
    });
  });
}
export function D(CC, yC, IC) {
  void 0 === IC && (IC = "/");
  let fC = M(("string" === typeof yC ? E(yC) : yC).pathname || "/", IC);
  if (null == fC) {
    return null;
  }
  let ky = OC(CC);
  !function (CC) {
    CC.sort((CC, yC) => CC.score !== yC.score ? yC.score - CC.score : function (CC, yC) {
      let IC = CC.length === yC.length && CC.slice(0, -1).every((CC, IC) => CC === yC[IC]);
      return IC ? CC[CC.length - 1] - yC[yC.length - 1] : 0;
    }(CC.routesMeta.map(CC => CC.childrenIndex), yC.routesMeta.map(CC => CC.childrenIndex)));
  }(ky);
  let gC = null;
  for (let AC = 0; null == gC && AC < ky.length; ++AC) {
    gC = HC(ky[AC], cC(fC));
  }
  return gC;
}
function OC(CC, yC, IC, fC) {
  void 0 === yC && (yC = []);
  void 0 === IC && (IC = []);
  void 0 === fC && (fC = "");
  let ky = (CC, ky, gC) => {
    let AC = {
      relativePath: void 0 === gC ? CC.path || "" : gC,
      caseSensitive: !0 === CC.caseSensitive,
      childrenIndex: ky,
      route: CC
    };
    AC.relativePath.startsWith("/") && (u(AC.relativePath.startsWith(fC), 'Absolute route path "' + AC.relativePath + '" nested under path "' + fC + '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'), AC.relativePath = AC.relativePath.slice(fC.length));
    let XC = z([fC, AC.relativePath]);
    let iy = IC.concat(AC);
    CC.children && CC.children.length > 0 && (u(!0 !== CC.index, 'Index routes must not have child routes. Please remove all child routes from route path "' + XC + '".'), OC(CC.children, yC, iy, XC));
    (null != CC.path || CC.index) && yC.push({
      path: XC,
      score: wC(XC, CC.index),
      routesMeta: iy
    });
  };
  CC.forEach((CC, yC) => {
    var IC;
    if ("" !== CC.path && null != (IC = CC.path) && IC.includes("?")) {
      for (let fC of SC(CC.path)) {
        ky(CC, yC, fC);
      }
    } else {
      ky(CC, yC);
    }
  });
  return yC;
}
function SC(CC) {
  let yC = CC.split("/");
  if (0 === yC.length) {
    return [];
  }
  let [IC, ...fC] = yC;
  let ky = IC.endsWith("?");
  let gC = IC.replace(/\?$/, "");
  if (0 === fC.length) {
    return ky ? [gC, ""] : [gC];
  }
  let AC = SC(fC.join("/"));
  let my = [];
  my.push(...AC.map(CC => "" === CC ? gC : [gC, CC].join("/")));
  ky && my.push(...AC);
  return my.map(yC => CC.startsWith("/") && "" === yC ? "/" : yC);
}
!function (CC) {
  CC.data = "data";
  CC.deferred = "deferred";
  CC.redirect = "redirect";
  CC.error = "error";
}(rC || (rC = {}));
const TC = /^:\w+$/;
const NC = 3;
const sC = 2;
const jy = 1;
const qC = 10;
const KC = -2;
const pC = CC => "*" === CC;
function wC(CC, yC) {
  let IC = CC.split("/");
  let fC = IC.length;
  IC.some(pC) && (fC += KC);
  yC && (fC += sC);
  return IC.filter(CC => !pC(CC)).reduce((CC, yC) => CC + (TC.test(yC) ? NC : "" === yC ? jy : qC), fC);
}
function HC(CC, yC) {
  let {
    routesMeta: IC
  } = CC;
  let fC = {};
  let ky = "/";
  let gC = [];
  for (let AC = 0; AC < IC.length; ++AC) {
    let CC = IC[AC];
    let my = AC === IC.length - 1;
    let XC = "/" === ky ? yC : yC.slice(ky.length) || "/";
    let iy = aC({
      path: CC.relativePath,
      caseSensitive: CC.caseSensitive,
      end: my
    }, XC);
    if (!iy) {
      return null;
    }
    Object.assign(fC, iy.params);
    let LC = CC.route;
    gC.push({
      params: fC,
      pathname: z([ky, iy.pathname]),
      pathnameBase: zC(z([ky, iy.pathnameBase])),
      route: LC
    });
    "/" !== iy.pathnameBase && (ky = z([ky, iy.pathnameBase]));
  }
  return gC;
}
function aC(CC, yC) {
  "string" === typeof CC && (CC = {
    path: CC,
    caseSensitive: !1,
    end: !0
  });
  let [IC, fC] = function (CC, yC, IC) {
    void 0 === yC && (yC = !1);
    void 0 === IC && (IC = !0);
    EC("*" === CC || !CC.endsWith("*") || CC.endsWith("/*"), 'Route path "' + CC + '" will be treated as if it were "' + CC.replace(/\*$/, "/*") + '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' + CC.replace(/\*$/, "/*") + '".');
    let fC = [];
    let ky = "^" + CC.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/\/:(\w+)/g, (CC, yC) => {
      fC.push(yC);
      return "/([^\\/]+)";
    });
    CC.endsWith("*") ? (fC.push("*"), ky += "*" === CC || "/*" === CC ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : IC ? ky += "\\/*$" : "" !== CC && "/" !== CC && (ky += "(?:(?=\\/|$))");
    let gC = new RegExp(ky, yC ? void 0 : "i");
    return [gC, fC];
  }(CC.path, CC.caseSensitive, CC.end);
  let ky = yC.match(IC);
  if (!ky) {
    return null;
  }
  let gC = ky[0];
  let AC = gC.replace(/(.)\/+$/, "$1");
  let my = ky.slice(1);
  return {
    params: fC.reduce((CC, yC, IC) => {
      if ("*" === yC) {
        let CC = my[IC] || "";
        AC = gC.slice(0, gC.length - CC.length).replace(/(.)\/+$/, "$1");
      }
      CC[yC] = function (CC, yC) {
        try {
          return decodeURIComponent(CC);
        } catch (IC) {
          EC(!1, 'The value for the URL param "' + yC + '" will not be decoded because the string "' + CC + '" is a malformed URL segment. This is probably due to a bad percent encoding (' + IC + ").");
          return CC;
        }
      }(my[IC] || "", yC);
      return CC;
    }, {}),
    pathname: gC,
    pathnameBase: AC,
    pattern: CC
  };
}
function cC(CC) {
  try {
    return decodeURI(CC);
  } catch (yC) {
    EC(!1, 'The URL path "' + CC + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' + yC + ").");
    return CC;
  }
}
export function M(CC, yC) {
  if ("/" === yC) {
    return CC;
  }
  if (!CC.toLowerCase().startsWith(yC.toLowerCase())) {
    return null;
  }
  let IC = yC.endsWith("/") ? yC.length - 1 : yC.length;
  let fC = CC.charAt(IC);
  return fC && "/" !== fC ? null : CC.slice(IC) || "/";
}
function EC(CC, yC) {
  if (!CC) {
    "undefined" !== typeof console && console.warn(yC);
    try {
      throw new Error(yC);
    } catch (IC) {}
  }
}
function VC(CC, yC, IC, fC) {
  return "Cannot include a '" + CC + "' character in a manually specified `to." + yC + "` field [" + JSON.stringify(fC) + "].  Please separate it out to the `to." + IC + '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.';
}
export function i(CC) {
  return CC.filter((CC, yC) => 0 === yC || CC.route.path && CC.route.path.length > 0);
}
export function I(CC, yC, IC, ky) {
  let gC;
  void 0 === ky && (ky = !1);
  "string" === typeof CC ? gC = E(CC) : (gC = fC({}, CC), u(!gC.pathname || !gC.pathname.includes("?"), VC("?", "pathname", "search", gC)), u(!gC.pathname || !gC.pathname.includes("#"), VC("#", "pathname", "hash", gC)), u(!gC.search || !gC.search.includes("#"), VC("#", "search", "hash", gC)));
  let AC;
  let XC = "" === CC || "" === gC.pathname;
  let iy = XC ? "/" : gC.pathname;
  if (ky || null == iy) {
    AC = IC;
  } else {
    let CC = yC.length - 1;
    if (iy.startsWith("..")) {
      let yC = iy.split("/");
      for (; ".." === yC[0];) {
        yC.shift();
        CC -= 1;
      }
      gC.pathname = yC.join("/");
    }
    AC = CC >= 0 ? yC[CC] : "/";
  }
  let LC = function (CC, yC) {
    void 0 === yC && (yC = "/");
    let {
      pathname: IC,
      search: fC = "",
      hash: ky = ""
    } = "string" === typeof CC ? E(CC) : CC;
    let gC = IC ? IC.startsWith("/") ? IC : function (CC, yC) {
      let IC = yC.replace(/\/+$/, "").split("/");
      CC.split("/").forEach(CC => {
        ".." === CC ? IC.length > 1 && IC.pop() : "." !== CC && IC.push(CC);
      });
      return IC.length > 1 ? IC.join("/") : "/";
    }(IC, yC) : yC;
    return {
      pathname: gC,
      search: BC(fC),
      hash: tC(ky)
    };
  }(gC, AC);
  let bC = iy && "/" !== iy && iy.endsWith("/");
  let rC = (XC || "." === iy) && IC.endsWith("/");
  LC.pathname.endsWith("/") || !bC && !rC || (LC.pathname += "/");
  return LC;
}
export const z = CC => CC.join("/").replace(/\/\/+/g, "/");
const zC = CC => CC.replace(/\/+$/, "").replace(/^\/*/, "/");
const BC = CC => CC && "?" !== CC ? CC.startsWith("?") ? CC : "?" + CC : "";
const tC = CC => CC && "#" !== CC ? CC.startsWith("#") ? CC : "#" + CC : "";
export class c extends Error {}
class nC {
  constructor(CC, yC) {
    let IC;
    this.pendingKeysSet = new Set();
    this.subscribers = new Set();
    this.deferredKeys = [];
    u(CC && "object" === typeof CC && !Array.isArray(CC), "defer() only accepts plain objects");
    this.abortPromise = new Promise((CC, yC) => IC = yC);
    this.controller = new AbortController();
    let fC = () => IC(new c("Deferred data aborted"));
    this.unlistenAbortSignal = () => this.controller.signal.removeEventListener("abort", fC);
    this.controller.signal.addEventListener("abort", fC);
    this.data = Object.entries(CC).reduce((CC, yC) => {
      let [IC, fC] = yC;
      return Object.assign(CC, {
        [IC]: this.trackPromise(IC, fC)
      });
    }, {});
    this.done && this.unlistenAbortSignal();
    this.init = yC;
  }
  trackPromise(CC, yC) {
    if (!(yC instanceof Promise)) {
      return yC;
    }
    this.deferredKeys.push(CC);
    this.pendingKeysSet.add(CC);
    let IC = Promise.race([yC, this.abortPromise]).then(yC => this.onSettle(IC, CC, null, yC), yC => this.onSettle(IC, CC, yC));
    IC.catch(() => {});
    Object.defineProperty(IC, "_tracked", {
      get: () => !0
    });
    return IC;
  }
  onSettle(CC, yC, IC, fC) {
    return this.controller.signal.aborted && IC instanceof c ? (this.unlistenAbortSignal(), Object.defineProperty(CC, "_error", {
      get: () => IC
    }), Promise.reject(IC)) : (this.pendingKeysSet.delete(yC), this.done && this.unlistenAbortSignal(), IC ? (Object.defineProperty(CC, "_error", {
      get: () => IC
    }), this.emit(!1, yC), Promise.reject(IC)) : (Object.defineProperty(CC, "_data", {
      get: () => fC
    }), this.emit(!1, yC), fC));
  }
  emit(CC, yC) {
    this.subscribers.forEach(IC => IC(CC, yC));
  }
  subscribe(CC) {
    this.subscribers.add(CC);
    return () => this.subscribers.delete(CC);
  }
  cancel() {
    this.controller.abort();
    this.pendingKeysSet.forEach((CC, yC) => this.pendingKeysSet.delete(yC));
    this.emit(!0);
  }
  async resolveData(CC) {
    let yC = !1;
    if (!this.done) {
      let IC = () => this.cancel();
      CC.addEventListener("abort", IC);
      yC = await new Promise(yC => {
        this.subscribe(fC => {
          CC.removeEventListener("abort", IC);
          (fC || this.done) && yC(fC);
        });
      });
    }
    return yC;
  }
  get done() {
    return 0 === this.pendingKeysSet.size;
  }
  get unwrappedData() {
    u(null !== this.data && this.done, "Can only unwrap data on initialized and settled deferreds");
    return Object.entries(this.data).reduce((CC, yC) => {
      let [IC, fC] = yC;
      return Object.assign(CC, {
        [IC]: FC(fC)
      });
    }, {});
  }
  get pendingKeys() {
    return Array.from(this.pendingKeysSet);
  }
}
function FC(CC) {
  if (!function (CC) {
    return CC instanceof Promise && !0 === CC._tracked;
  }(CC)) {
    return CC;
  }
  if (CC._error) {
    throw CC._error;
  }
  return CC._data;
}
export class h {
  constructor(CC, yC, IC, fC) {
    void 0 === fC && (fC = !1);
    this.status = CC;
    this.statusText = yC || "";
    this.internal = fC;
    IC instanceof Error ? (this.data = IC.toString(), this.error = IC) : this.data = IC;
  }
}
export function w(CC) {
  return null != CC && "number" === typeof CC.status && "string" === typeof CC.statusText && "boolean" === typeof CC.internal && "data" in CC;
}
const ZC = ["mL", "put", "patch", "delete"];
const lC = new Set(ZC);
const oC = ["get", ...ZC];
const vC = new Set(oC);
const hC = new Set([301, 302, 303, 307, 308]);
const RC = new Set([307, 308]);
const dC = {
  state: "idle",
  location: void 0,
  formMethod: void 0,
  formAction: void 0,
  formEncType: void 0,
  formData: void 0
};
const QC = {
  state: "idle",
  data: void 0,
  formMethod: void 0,
  formAction: void 0,
  formEncType: void 0,
  formData: void 0
};
const MC = {
  state: "unblocked",
  proceed: void 0,
  reset: void 0,
  location: void 0
};
const Cy = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
const yy = "undefined" !== typeof window && "undefined" !== typeof window.document && "undefined" !== typeof window.document.createElement;
const Iy = !yy;
export function s(CC) {
  u(CC.routes.length > 0, "You must provide a non-empty routes array to createRouter");
  let yC = GC(CC.routes);
  let IC = null;
  let gC = new Set();
  let AC = null;
  let XC = null;
  let LC = null;
  let YC = null != CC.hydrationData;
  let bC = D(yC, CC.history.location, CC.basename);
  let OC = null;
  if (null == bC) {
    let IC = Sy(404, {
      pathname: CC.history.location.pathname
    });
    let {
      matches: fC,
      route: ky
    } = Oy(yC);
    bC = fC;
    OC = {
      [ky.id]: IC
    };
  }
  let SC;
  let TC;
  let NC = !bC.some(CC => CC.route.loader) || null != CC.hydrationData;
  let sC = {
    historyAction: CC.history.action,
    location: CC.history.location,
    matches: bC,
    initialized: NC,
    navigation: dC,
    restoreScrollPosition: null == CC.hydrationData && null,
    preventScrollReset: !1,
    revalidation: "idle",
    loaderData: CC.hydrationData && CC.hydrationData.loaderData || {},
    actionData: CC.hydrationData && CC.hydrationData.actionData || null,
    errors: CC.hydrationData && CC.hydrationData.errors || OC,
    fetchers: new Map(),
    blockers: new Map()
  };
  let jy = e.Pop;
  let qC = !1;
  let KC = !1;
  let pC = !1;
  let wC = [];
  let HC = [];
  let aC = new Map();
  let cC = 0;
  let UC = -1;
  let VC = new Map();
  let WC = new Set();
  let xC = new Map();
  let PC = new Map();
  let zC = new Map();
  let BC = !1;
  function tC(CC) {
    sC = fC({}, sC, CC);
    gC.forEach(CC => CC(sC));
  }
  function JC(yC, IC) {
    var gC;
    var AC;
    let my;
    let XC = null != sC.actionData && null != sC.navigation.formMethod && wy(sC.navigation.formMethod) && "loading" === sC.navigation.state && !0 !== (null == (gC = yC.state) ? void 0 : gC._isRedirect);
    my = IC.actionData ? Object.keys(IC.actionData).length > 0 ? IC.actionData : null : XC ? sC.actionData : null;
    let iy = IC.loaderData ? Gy(sC.loaderData, IC.loaderData, IC.matches || [], IC.errors) : sC.loaderData;
    for (let [CC] of zC) {
      gy(CC);
    }
    let LC = !0 === qC || null != sC.navigation.formMethod && wy(sC.navigation.formMethod) && !0 !== (null == (AC = yC.state) ? void 0 : AC._isRedirect);
    tC(fC({}, IC, {
      actionData: my,
      loaderData: iy,
      historyAction: jy,
      location: yC,
      initialized: !0,
      navigation: dC,
      revalidation: "idle",
      restoreScrollPosition: by(yC, IC.matches || sC.matches),
      preventScrollReset: LC,
      blockers: new Map(sC.blockers)
    }));
    KC || jy === e.Pop || (jy === e.Push ? CC.history.push(yC, yC.state) : jy === e.Replace && CC.history.replace(yC, yC.state));
    jy = e.Pop;
    qC = !1;
    KC = !1;
    pC = !1;
    wC = [];
    HC = [];
  }
  async function nC(IC, gC, iy) {
    TC && TC.abort();
    TC = null;
    jy = IC;
    KC = !0 === (iy && iy.startUninterruptedRevalidation);
    (function (CC, yC) {
      if (AC && XC && LC) {
        let IC = yC.map(CC => Uy(CC, sC.loaderData));
        let fC = XC(CC, IC) || CC.key;
        AC[fC] = LC();
      }
    })(sC.location, sC.matches);
    qC = !0 === (iy && iy.preventScrollReset);
    let YC = iy && iy.overrideNavigation;
    let bC = D(yC, gC, CC.basename);
    if (!bC) {
      let CC = Sy(404, {
        pathname: gC.pathname
      });
      let {
        matches: IC,
        route: fC
      } = Oy(yC);
      Yy();
      return void JC(gC, {
        matches: IC,
        loaderData: {},
        errors: {
          [fC.id]: CC
        }
      });
    }
    GC = sC.location;
    OC = gC;
    if (GC.pathname === OC.pathname && GC.search === OC.search && GC.hash !== OC.hash && !(iy && iy.submission && wy(iy.submission.formMethod))) {
      return void JC(gC, {
        matches: bC
      });
    }
    var GC;
    var OC;
    TC = new AbortController();
    let NC;
    let EC;
    let VC = Ly(CC.history, gC, TC.signal, iy && iy.submission);
    if (iy && iy.pendingError) {
      EC = {
        [ey(bC).route.id]: iy.pendingError
      };
    } else {
      if (iy && iy.submission && wy(iy.submission.formMethod)) {
        let CC = await async function (CC, yC, IC, gC, AC) {
          ZC();
          let my;
          let XC = fC({
            state: "submitting",
            location: yC
          }, IC);
          tC({
            navigation: XC
          });
          let iy = Ey(gC, yC);
          if (iy.route.action) {
            my = await iI("action", CC, iy, gC, SC.basename);
            if (CC.signal.aborted) {
              return {
                shortCircuited: !0
              };
            }
          } else {
            my = {
              type: rC.error,
              error: Sy(405, {
                method: CC.method,
                pathname: yC.pathname,
                routeId: iy.route.id
              })
            };
          }
          if (qy(my)) {
            let CC;
            CC = AC && null != AC.replace ? AC.replace : my.location === sC.location.pathname + sC.location.search;
            await uC(sC, my, {
              submission: IC,
              replace: CC
            });
            return {
              shortCircuited: !0
            };
          }
          if (jI(my)) {
            let CC = ey(gC, iy.route.id);
            !0 !== (AC && AC.replace) && (jy = e.Push);
            return {
              pendingActionData: {},
              pendingActionError: {
                [CC.route.id]: my.error
              }
            };
          }
          if (sy(my)) {
            throw Sy(400, {
              type: "defer-action"
            });
          }
          return {
            pendingActionData: {
              [iy.route.id]: my.data
            }
          };
        }(VC, gC, iy.submission, bC, {
          replace: iy.replace
        });
        if (CC.shortCircuited) {
          return;
        }
        NC = CC.pendingActionData;
        EC = CC.pendingActionError;
        YC = fC({
          state: "loading",
          location: gC
        }, iy.submission);
        VC = new Request(VC.url, {
          signal: VC.signal
        });
      }
    }
    let {
      shortCircuited: zC,
      loaderData: BC,
      errors: nC
    } = await async function (yC, IC, ky, gC, AC, XC, iy, LC) {
      let YC = gC;
      if (!YC) {
        YC = fC({
          state: "loading",
          location: IC,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0
        }, AC);
      }
      let bC = AC || (YC.formMethod && YC.formAction && YC.formData && YC.formEncType ? {
        formMethod: YC.formMethod,
        formAction: YC.formAction,
        formData: YC.formData,
        formEncType: YC.formEncType
      } : void 0);
      let [rC, GC] = Ay(CC.history, sC, ky, bC, IC, pC, wC, HC, iy, LC, xC);
      Yy(CC => !(ky && ky.some(yC => yC.route.id === CC)) || rC && rC.some(yC => yC.route.id === CC));
      if (0 === rC.length && 0 === GC.length) {
        JC(IC, fC({
          matches: ky,
          loaderData: {},
          errors: LC || null
        }, iy ? {
          actionData: iy
        } : {}));
        return {
          shortCircuited: !0
        };
      }
      if (!KC) {
        GC.forEach(CC => {
          let yC = sC.fetchers.get(CC.key);
          let IC = {
            state: "loading",
            data: yC && yC.data,
            formMethod: void 0,
            formAction: void 0,
            formEncType: void 0,
            formData: void 0,
            " _hasFetcherDoneAnything ": !0
          };
          sC.fetchers.set(CC.key, IC);
        });
        let CC = iy || sC.actionData;
        tC(fC({
          navigation: YC
        }, CC ? 0 === Object.keys(CC).length ? {
          actionData: null
        } : {
          actionData: CC
        } : {}, GC.length > 0 ? {
          fetchers: new Map(sC.fetchers)
        } : {}));
      }
      UC = ++cC;
      GC.forEach(CC => aC.set(CC.key, TC));
      let {
        results: eC,
        loaderResults: OC,
        fetcherResults: SC
      } = await DC(sC.matches, ky, rC, GC, yC);
      if (yC.signal.aborted) {
        return {
          shortCircuited: !0
        };
      }
      GC.forEach(CC => aC.delete(CC.key));
      let NC = Ty(eC);
      if (NC) {
        await uC(sC, NC, {
          replace: XC
        });
        return {
          shortCircuited: !0
        };
      }
      let {
        loaderData: jy,
        errors: qC
      } = ry(sC, ky, rC, OC, LC, GC, SC, PC);
      PC.forEach((CC, yC) => {
        CC.subscribe(IC => {
          (IC || CC.done) && PC.delete(yC);
        });
      });
      (function () {
        let CC = [];
        for (let yC of WC) {
          let IC = sC.fetchers.get(yC);
          u(IC, "Expected fetcher: " + yC);
          "loading" === IC.state && (WC.delete(yC), CC.push(yC));
        }
        hC(CC);
      })();
      let EC = fy(UC);
      return fC({
        loaderData: jy,
        errors: qC
      }, EC || GC.length > 0 ? {
        fetchers: new Map(sC.fetchers)
      } : {});
    }(VC, gC, bC, YC, iy && iy.submission, iy && iy.replace, NC, EC);
    zC || (TC = null, JC(gC, fC({
      matches: bC
    }, NC ? {
      actionData: NC
    } : {}, {
      loaderData: BC,
      errors: nC
    })));
  }
  function FC(CC) {
    return sC.fetchers.get(CC) || QC;
  }
  async function uC(yC, IC, gC) {
    var AC;
    let {
      submission: XC,
      replace: LC,
      isFetchActionRedirect: YC
    } = void 0 === gC ? {} : gC;
    IC.revalidate && (pC = !0);
    let bC = iy(yC.location, IC.location, fC({
      _isRedirect: !0
    }, YC ? {
      _isFetchActionRedirect: !0
    } : {}));
    u(bC, "Expected a location on the redirect navigation");
    if (Cy.test(IC.location) && yy && "undefined" !== typeof (null == (AC = window) ? void 0 : AC.location)) {
      let yC = CC.history.createURL(IC.location).origin;
      if (window.location.origin !== yC) {
        return void (LC ? window.location.replace(IC.location) : window.location.assign(IC.location));
      }
    }
    TC = null;
    let rC = !0 === LC ? e.Replace : e.Push;
    let {
      formMethod: GC,
      formAction: eC,
      formEncType: OC,
      formData: SC
    } = yC.navigation;
    !XC && GC && eC && SC && OC && (XC = {
      formMethod: GC,
      formAction: eC,
      formEncType: OC,
      formData: SC
    });
    RC.has(IC.status) && XC && wy(XC.formMethod) ? await nC(rC, bC, {
      submission: fC({}, XC, {
        formAction: IC.location
      }),
      preventScrollReset: qC
    }) : await nC(rC, bC, {
      overrideNavigation: {
        state: "loading",
        location: bC,
        formMethod: XC ? XC.formMethod : void 0,
        formAction: XC ? XC.formAction : void 0,
        formEncType: XC ? XC.formEncType : void 0,
        formData: XC ? XC.formData : void 0
      },
      preventScrollReset: qC
    });
  }
  async function DC(yC, IC, fC, ky, gC) {
    let AC = await Promise.all([...fC.map(CC => iI("loader", gC, CC, IC, SC.basename)), ...ky.map(yC => iI("loader", Ly(CC.history, yC.path, gC.signal), yC.match, yC.matches, SC.basename))]);
    let my = AC.slice(0, fC.length);
    let XC = AC.slice(fC.length);
    await Promise.all([Hy(yC, fC, my, gC.signal, !1, sC.loaderData), Hy(yC, ky.map(CC => CC.match), XC, gC.signal, !0)]);
    return {
      results: AC,
      loaderResults: my,
      fetcherResults: XC
    };
  }
  function ZC() {
    pC = !0;
    wC.push(...Yy());
    xC.forEach((CC, yC) => {
      aC.has(yC) && (HC.push(yC), vC(yC));
    });
  }
  function lC(CC, yC, IC) {
    let fC = ey(sC.matches, yC);
    oC(CC);
    tC({
      errors: {
        [fC.route.id]: IC
      },
      fetchers: new Map(sC.fetchers)
    });
  }
  function oC(CC) {
    aC.has(CC) && vC(CC);
    xC.delete(CC);
    VC.delete(CC);
    WC.delete(CC);
    sC.fetchers.delete(CC);
  }
  function vC(CC) {
    let yC = aC.get(CC);
    u(yC, "Expected fetch controller: " + CC);
    yC.abort();
    aC.delete(CC);
  }
  function hC(CC) {
    for (let yC of CC) {
      let CC = {
        state: "idle",
        data: FC(yC).data,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        " _hasFetcherDoneAnything ": !0
      };
      sC.fetchers.set(yC, CC);
    }
  }
  function fy(CC) {
    let yC = [];
    for (let [IC, fC] of VC) {
      if (fC < CC) {
        let CC = sC.fetchers.get(IC);
        u(CC, "Expected fetcher: " + IC);
        "loading" === CC.state && (vC(IC), VC.delete(IC), yC.push(IC));
      }
    }
    hC(yC);
    return yC.length > 0;
  }
  function gy(CC) {
    sC.blockers.delete(CC);
    zC.delete(CC);
  }
  function mI(CC, yC) {
    let IC = sC.blockers.get(CC) || MC;
    u("unblocked" === IC.state && "blocked" === yC.state || "blocked" === IC.state && "blocked" === yC.state || "blocked" === IC.state && "proceeding" === yC.state || "blocked" === IC.state && "unblocked" === yC.state || "proceeding" === IC.state && "unblocked" === yC.state, "Invalid blocker state transition: " + IC.state + " -> " + yC.state);
    sC.blockers.set(CC, yC);
    tC({
      blockers: new Map(sC.blockers)
    });
  }
  function Xy(CC) {
    let {
      currentLocation: yC,
      nextLocation: IC,
      historyAction: fC
    } = CC;
    if (0 === zC.size) {
      return;
    }
    zC.size > 1 && EC(!1, "A router only supports one blocker at a time");
    let ky = Array.from(zC.entries());
    let [gC, AC] = ky[ky.length - 1];
    let my = sC.blockers.get(gC);
    return my && "proceeding" === my.state ? void 0 : AC({
      currentLocation: yC,
      nextLocation: IC,
      historyAction: fC
    }) ? gC : void 0;
  }
  function Yy(CC) {
    let yC = [];
    PC.forEach((IC, fC) => {
      CC && !CC(fC) || (IC.cancel(), yC.push(fC), PC.delete(fC));
    });
    return yC;
  }
  function by(CC, yC) {
    if (AC && XC && LC) {
      let IC = yC.map(CC => Uy(CC, sC.loaderData));
      let fC = XC(CC, IC) || CC.key;
      let ky = AC[fC];
      if ("number" === typeof ky) {
        return ky;
      }
    }
    return null;
  }
  SC = {
    get basename() {
      return CC.basename;
    },
    get state() {
      return sC;
    },
    get routes() {
      return yC;
    },
    initialize: function () {
      IC = CC.history.listen(yC => {
        let {
          action: IC,
          location: fC,
          delta: ky
        } = yC;
        if (BC) {
          return void (BC = !1);
        }
        EC(0 === zC.size || null != ky, "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");
        let gC = Xy({
          currentLocation: sC.location,
          nextLocation: fC,
          historyAction: IC
        });
        return gC && null != ky ? (BC = !0, CC.history.go(-1 * ky), void mI(gC, {
          state: "blocked",
          location: fC,
          proceed() {
            mI(gC, {
              state: "proceeding",
              proceed: void 0,
              reset: void 0,
              location: fC
            });
            CC.history.go(ky);
          },
          reset() {
            gy(gC);
            tC({
              blockers: new Map(SC.state.blockers)
            });
          }
        })) : nC(IC, fC);
      });
      sC.initialized || nC(e.Pop, sC.location);
      return SC;
    },
    subscribe: function (CC) {
      gC.add(CC);
      return () => gC.delete(CC);
    },
    enableScrollRestoration: function (CC, yC, IC) {
      AC = CC;
      LC = yC;
      XC = IC || (CC => CC.key);
      if (!YC && sC.navigation === dC) {
        YC = !0;
        let CC = by(sC.location, sC.matches);
        null != CC && tC({
          restoreScrollPosition: CC
        });
      }
      return () => {
        AC = null;
        LC = null;
        XC = null;
      };
    },
    navigate: async function yC(IC, gC) {
      if ("number" === typeof IC) {
        return void CC.history.go(IC);
      }
      let {
        path: AC,
        submission: my,
        error: XC
      } = kI(IC, gC);
      let LC = sC.location;
      let YC = iy(sC.location, AC, gC && gC.state);
      YC = fC({}, YC, CC.history.encodeLocation(YC));
      let bC = gC && null != gC.replace ? gC.replace : void 0;
      let rC = e.Push;
      !0 === bC ? rC = e.Replace : !1 === bC || null != my && wy(my.formMethod) && my.formAction === sC.location.pathname + sC.location.search && (rC = e.Replace);
      let GC = gC && "preventScrollReset" in gC ? !0 === gC.preventScrollReset : void 0;
      let eC = Xy({
        currentLocation: LC,
        nextLocation: YC,
        historyAction: rC
      });
      if (!eC) {
        return await nC(rC, YC, {
          submission: my,
          pendingError: XC,
          preventScrollReset: GC,
          replace: gC && gC.replace
        });
      }
      mI(eC, {
        state: "blocked",
        location: YC,
        proceed() {
          mI(eC, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: YC
          });
          yC(IC, gC);
        },
        reset() {
          gy(eC);
          tC({
            blockers: new Map(sC.blockers)
          });
        }
      });
    },
    fetch: function (IC, ky, gC, AC) {
      if (Iy) {
        throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");
      }
      aC.has(IC) && vC(IC);
      let XC = D(yC, gC, CC.basename);
      if (!XC) {
        return void lC(IC, ky, Sy(404, {
          pathname: gC
        }));
      }
      let {
        path: iy,
        submission: LC
      } = kI(gC, AC, !0);
      let YC = Ey(XC, iy);
      qC = !0 === (AC && AC.preventScrollReset);
      LC && wy(LC.formMethod) ? async function (IC, ky, gC, AC, XC, iy) {
        ZC();
        xC.delete(IC);
        if (!AC.route.action) {
          let CC = Sy(405, {
            method: iy.formMethod,
            pathname: gC,
            routeId: ky
          });
          return void lC(IC, ky, CC);
        }
        let LC = sC.fetchers.get(IC);
        let YC = fC({
          state: "submitting"
        }, iy, {
          data: LC && LC.data,
          " _hasFetcherDoneAnything ": !0
        });
        sC.fetchers.set(IC, YC);
        tC({
          fetchers: new Map(sC.fetchers)
        });
        let bC = new AbortController();
        let rC = Ly(CC.history, gC, bC.signal, iy);
        aC.set(IC, bC);
        let GC = await iI("action", rC, AC, XC, SC.basename);
        if (rC.signal.aborted) {
          return void (aC.get(IC) === bC && aC.delete(IC));
        }
        if (qy(GC)) {
          aC.delete(IC);
          WC.add(IC);
          let CC = fC({
            state: "loading"
          }, iy, {
            data: void 0,
            " _hasFetcherDoneAnything ": !0
          });
          sC.fetchers.set(IC, CC);
          tC({
            fetchers: new Map(sC.fetchers)
          });
          return uC(sC, GC, {
            isFetchActionRedirect: !0
          });
        }
        if (jI(GC)) {
          return void lC(IC, ky, GC.error);
        }
        if (sy(GC)) {
          throw Sy(400, {
            type: "defer-action"
          });
        }
        let OC = sC.navigation.location || sC.location;
        let NC = Ly(CC.history, OC, bC.signal);
        let qC = "idle" !== sC.navigation.state ? D(yC, sC.navigation.location, CC.basename) : sC.matches;
        u(qC, "Didn't find any matches after fetcher action");
        let KC = ++cC;
        VC.set(IC, KC);
        let EC = fC({
          state: "loading",
          data: GC.data
        }, iy, {
          " _hasFetcherDoneAnything ": !0
        });
        sC.fetchers.set(IC, EC);
        let [zC, BC] = Ay(CC.history, sC, qC, iy, OC, pC, wC, HC, {
          [AC.route.id]: GC.data
        }, void 0, xC);
        BC.filter(CC => CC.key !== IC).forEach(CC => {
          let yC = CC.key;
          let IC = sC.fetchers.get(yC);
          let fC = {
            state: "loading",
            data: IC && IC.data,
            formMethod: void 0,
            formAction: void 0,
            formEncType: void 0,
            formData: void 0,
            " _hasFetcherDoneAnything ": !0
          };
          sC.fetchers.set(yC, fC);
          aC.set(yC, bC);
        });
        tC({
          fetchers: new Map(sC.fetchers)
        });
        let {
          results: nC,
          loaderResults: FC,
          fetcherResults: oC
        } = await DC(sC.matches, qC, zC, BC, NC);
        if (bC.signal.aborted) {
          return;
        }
        VC.delete(IC);
        aC.delete(IC);
        BC.forEach(CC => aC.delete(CC.key));
        let vC = Ty(nC);
        if (vC) {
          return uC(sC, vC);
        }
        let {
          loaderData: hC,
          errors: RC
        } = ry(sC, sC.matches, zC, FC, void 0, BC, oC, PC);
        let dC = {
          state: "idle",
          data: GC.data,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
          " _hasFetcherDoneAnything ": !0
        };
        sC.fetchers.set(IC, dC);
        let QC = fy(KC);
        "loading" === sC.navigation.state && KC > UC ? (u(jy, "Expected pending action"), TC && TC.abort(), JC(sC.navigation.location, {
          matches: qC,
          loaderData: hC,
          errors: RC,
          fetchers: new Map(sC.fetchers)
        })) : (tC(fC({
          errors: RC,
          loaderData: Gy(sC.loaderData, hC, qC, RC)
        }, QC ? {
          fetchers: new Map(sC.fetchers)
        } : {})), pC = !1);
      }(IC, ky, iy, YC, XC, LC) : (xC.set(IC, {
        routeId: ky,
        path: iy,
        match: YC,
        matches: XC
      }), async function (yC, IC, ky, gC, AC, XC) {
        let iy = sC.fetchers.get(yC);
        let LC = fC({
          state: "loading",
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0
        }, XC, {
          data: iy && iy.data,
          " _hasFetcherDoneAnything ": !0
        });
        sC.fetchers.set(yC, LC);
        tC({
          fetchers: new Map(sC.fetchers)
        });
        let YC = new AbortController();
        let bC = Ly(CC.history, ky, YC.signal);
        aC.set(yC, YC);
        let rC = await iI("loader", bC, gC, AC, SC.basename);
        sy(rC) && (rC = (await ay(rC, bC.signal, !0)) || rC);
        aC.get(yC) === YC && aC.delete(yC);
        if (bC.signal.aborted) {
          return;
        }
        if (qy(rC)) {
          return void (await uC(sC, rC));
        }
        if (jI(rC)) {
          let CC = ey(sC.matches, IC);
          sC.fetchers.delete(yC);
          return void tC({
            fetchers: new Map(sC.fetchers),
            errors: {
              [CC.route.id]: rC.error
            }
          });
        }
        u(!sy(rC), "Unhandled fetcher deferred data");
        let GC = {
          state: "idle",
          data: rC.data,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
          " _hasFetcherDoneAnything ": !0
        };
        sC.fetchers.set(yC, GC);
        tC({
          fetchers: new Map(sC.fetchers)
        });
      }(IC, ky, iy, YC, XC, LC));
    },
    revalidate: function () {
      ZC();
      tC({
        revalidation: "loading"
      });
      "submitting" !== sC.navigation.state && ("idle" !== sC.navigation.state ? nC(jy || sC.historyAction, sC.navigation.location, {
        overrideNavigation: sC.navigation
      }) : nC(sC.historyAction, sC.location, {
        startUninterruptedRevalidation: !0
      }));
    },
    createHref: yC => CC.history.createHref(yC),
    encodeLocation: yC => CC.history.encodeLocation(yC),
    getFetcher: FC,
    deleteFetcher: oC,
    dispose: function () {
      IC && IC();
      gC.clear();
      TC && TC.abort();
      sC.fetchers.forEach((CC, yC) => oC(yC));
      sC.blockers.forEach((CC, yC) => gy(yC));
    },
    getBlocker: function (CC, yC) {
      let IC = sC.blockers.get(CC) || MC;
      zC.get(CC) !== yC && zC.set(CC, yC);
      return IC;
    },
    deleteBlocker: gy,
    _internalFetchControllers: aC,
    _internalActiveDeferreds: PC
  };
  return SC;
}
Symbol("deferred");
function kI(CC, yC, IC) {
  void 0 === IC && (IC = !1);
  let fC;
  let ky = "string" === typeof CC ? CC : o(CC);
  if (!yC || !function (CC) {
    return null != CC && "formData" in CC;
  }(yC)) {
    return {
      path: ky
    };
  }
  if (yC.formMethod && !py(yC.formMethod)) {
    return {
      path: ky,
      error: Sy(405, {
        method: yC.formMethod
      })
    };
  }
  if (yC.formData && (fC = {
    formMethod: yC.formMethod || "get",
    formAction: Ny(ky),
    formEncType: yC && yC.formEncType || "application/x-www-form-urlencoded",
    formData: yC.formData
  }, wy(fC.formMethod))) {
    return {
      path: ky,
      submission: fC
    };
  }
  let gC = E(ky);
  let AC = Yy(yC.formData);
  IC && gC.search && cy(gC.search) && AC.append("index", "");
  gC.search = "?" + AC;
  return {
    path: o(gC),
    submission: fC
  };
}
function gy(CC, yC) {
  let IC = CC;
  if (yC) {
    let fC = CC.findIndex(CC => CC.route.id === yC);
    fC >= 0 && (IC = CC.slice(0, fC));
  }
  return IC;
}
function Ay(CC, yC, IC, ky, gC, AC, my, XC, iy, LC, YC) {
  let bC = LC ? Object.values(LC)[0] : iy ? Object.values(iy)[0] : void 0;
  let rC = CC.createURL(yC.location);
  let GC = CC.createURL(gC);
  let eC = AC || rC.toString() === GC.toString() || rC.search !== GC.search;
  let OC = LC ? Object.keys(LC)[0] : void 0;
  let SC = gy(IC, OC).filter((CC, IC) => {
    if (null == CC.route.loader) {
      return !1;
    }
    if (function (CC, yC, IC) {
      let fC = !yC || IC.route.id !== yC.route.id;
      let ky = void 0 === CC[IC.route.id];
      return fC || ky;
    }(yC.loaderData, yC.matches[IC], CC) || my.some(yC => yC === CC.route.id)) {
      return !0;
    }
    let gC = yC.matches[IC];
    let AC = CC;
    return Xy(CC, fC({
      currentUrl: rC,
      currentParams: gC.params,
      nextUrl: GC,
      nextParams: AC.params
    }, ky, {
      actionResult: bC,
      defaultShouldRevalidate: eC || mI(gC, AC)
    }));
  });
  let TC = [];
  YC && YC.forEach((CC, gC) => {
    if (IC.some(yC => yC.route.id === CC.routeId)) {
      if (XC.includes(gC)) {
        TC.push(fC({
          key: gC
        }, CC));
      } else {
        Xy(CC.match, fC({
          currentUrl: rC,
          currentParams: yC.matches[yC.matches.length - 1].params,
          nextUrl: GC,
          nextParams: IC[IC.length - 1].params
        }, ky, {
          actionResult: bC,
          defaultShouldRevalidate: eC
        })) && TC.push(fC({
          key: gC
        }, CC));
      }
    }
  });
  return [SC, TC];
}
function mI(CC, yC) {
  let IC = CC.route.path;
  return CC.pathname !== yC.pathname || null != IC && IC.endsWith("*") && CC.params["*"] !== yC.params["*"];
}
function Xy(CC, yC) {
  if (CC.route.shouldRevalidate) {
    let IC = CC.route.shouldRevalidate(yC);
    if ("boolean" === typeof IC) {
      return IC;
    }
  }
  return yC.defaultShouldRevalidate;
}
async function iI(CC, yC, IC, fC, ky, gC, AC, XC) {
  let iy;
  let YC;
  let bC;
  void 0 === ky && (ky = "/");
  void 0 === gC && (gC = !1);
  void 0 === AC && (AC = !1);
  let GC = new Promise((CC, yC) => bC = yC);
  let eC = () => bC();
  yC.signal.addEventListener("abort", eC);
  try {
    let fC = IC.route[CC];
    u(fC, "Could not find the " + CC + ' to run on the "' + IC.route.id + '" route');
    YC = await Promise.race([fC({
      request: yC,
      params: IC.params,
      context: XC
    }), GC]);
    u(void 0 !== YC, "You defined " + ("action" === CC ? "an action" : "a loader") + ' for route "' + IC.route.id + "\" but didn't return anything from your `" + CC + "` function. Please return a value or `null`.");
  } catch (OC) {
    iy = rC.error;
    YC = OC;
  } finally {
    yC.signal.removeEventListener("abort", eC);
  }
  if (Ky(YC)) {
    let CC;
    let XC = YC.status;
    if (hC.has(XC)) {
      let CC = YC.headers.get("Location");
      u(CC, "Redirects returned/thrown from loaders/actions must have a Location header");
      if (Cy.test(CC)) {
        if (!gC) {
          let IC = new URL(yC.url);
          let fC = CC.startsWith("//") ? new URL(IC.protocol + CC) : new URL(CC);
          fC.origin === IC.origin && (CC = fC.pathname + fC.search + fC.hash);
        }
      } else {
        let gC = I(CC, i(fC.slice(0, fC.indexOf(IC) + 1)).map(CC => CC.pathnameBase), new URL(yC.url).pathname);
        u(o(gC), "Unable to resolve redirect location: " + CC);
        if (ky) {
          let CC = gC.pathname;
          gC.pathname = "/" === CC ? ky : z([ky, CC]);
        }
        CC = o(gC);
      }
      if (gC) {
        YC.headers.set("Location", CC);
        throw YC;
      }
      return {
        type: rC.redirect,
        status: XC,
        location: CC,
        revalidate: null !== YC.headers.get("X-Remix-Revalidate")
      };
    }
    if (AC) {
      throw {
        type: iy || rC.data,
        response: YC
      };
    }
    let bC = YC.headers.get("Content-Type");
    CC = bC && /\bapplication\/json\b/.test(bC) ? await YC.json() : await YC.text();
    return iy === rC.error ? {
      type: iy,
      error: new h(XC, YC.statusText, CC),
      headers: YC.headers
    } : {
      type: rC.data,
      data: CC,
      statusCode: YC.status,
      headers: YC.headers
    };
  }
  return iy === rC.error ? {
    type: iy,
    error: YC
  } : YC instanceof nC ? {
    type: rC.deferred,
    deferredData: YC
  } : {
    type: rC.data,
    data: YC
  };
}
function Ly(CC, yC, IC, fC) {
  let ky = CC.createURL(Ny(yC)).toString();
  let gC = {
    signal: IC
  };
  if (fC && wy(fC.formMethod)) {
    let {
      formMethod: CC,
      formEncType: yC,
      formData: IC
    } = fC;
    gC.method = CC.toUpperCase();
    gC.body = "application/x-www-form-urlencoded" === yC ? Yy(IC) : IC;
  }
  return new Request(ky, gC);
}
function Yy(CC) {
  let yC = new URLSearchParams();
  for (let [IC, fC] of CC.entries()) {
    yC.append(IC, fC instanceof File ? fC.name : fC);
  }
  return yC;
}
function by(CC, yC, IC, fC, ky) {
  let gC;
  let AC = {};
  let XC = null;
  let iy = !1;
  let LC = {};
  IC.forEach((IC, YC) => {
    let bC = yC[YC].route.id;
    u(!qy(IC), "Cannot handle redirect results in processLoaderData");
    if (jI(IC)) {
      let yC = ey(CC, bC);
      let ky = IC.error;
      fC && (ky = Object.values(fC)[0], fC = void 0);
      XC = XC || {};
      null == XC[yC.route.id] && (XC[yC.route.id] = ky);
      AC[bC] = void 0;
      iy || (iy = !0, gC = w(IC.error) ? IC.error.status : 500);
      IC.headers && (LC[bC] = IC.headers);
    } else {
      sy(IC) ? (ky.set(bC, IC.deferredData), AC[bC] = IC.deferredData.data) : AC[bC] = IC.data;
      null == IC.statusCode || 200 === IC.statusCode || iy || (gC = IC.statusCode);
      IC.headers && (LC[bC] = IC.headers);
    }
  });
  fC && (XC = fC, AC[Object.keys(fC)[0]] = void 0);
  return {
    loaderData: AC,
    errors: XC,
    statusCode: gC || 200,
    loaderHeaders: LC
  };
}
function ry(CC, yC, IC, ky, gC, AC, XC, iy) {
  let {
    loaderData: LC,
    errors: YC
  } = by(yC, IC, ky, gC, iy);
  for (let bC = 0; bC < AC.length; bC++) {
    let {
      key: yC,
      match: IC
    } = AC[bC];
    u(void 0 !== XC && void 0 !== XC[bC], "Did not find corresponding fetcher result");
    let ky = XC[bC];
    if (jI(ky)) {
      let gC = ey(CC.matches, IC.route.id);
      YC && YC[gC.route.id] || (YC = fC({}, YC, {
        [gC.route.id]: ky.error
      }));
      CC.fetchers.delete(yC);
    } else {
      if (qy(ky)) {
        u(!1, "Unhandled fetcher revalidation redirect");
      } else {
        if (sy(ky)) {
          u(!1, "Unhandled fetcher deferred data");
        } else {
          let IC = {
            state: "idle",
            data: ky.data,
            formMethod: void 0,
            formAction: void 0,
            formEncType: void 0,
            formData: void 0,
            " _hasFetcherDoneAnything ": !0
          };
          CC.fetchers.set(yC, IC);
        }
      }
    }
  }
  return {
    loaderData: LC,
    errors: YC
  };
}
function Gy(CC, yC, IC, ky) {
  let gC = fC({}, yC);
  for (let fC of IC) {
    let IC = fC.route.id;
    yC.hasOwnProperty(IC) ? void 0 !== yC[IC] && (gC[IC] = yC[IC]) : void 0 !== CC[IC] && (gC[IC] = CC[IC]);
    if (ky && ky.hasOwnProperty(IC)) {
      break;
    }
  }
  return gC;
}
function ey(CC, yC) {
  return (yC ? CC.slice(0, CC.findIndex(CC => CC.route.id === yC) + 1) : [...CC]).reverse().find(CC => !0 === CC.route.hasErrorBoundary) || CC[0];
}
function Oy(CC) {
  let yC = CC.find(CC => CC.index || !CC.path || "/" === CC.path) || {
    id: "__shim-error-route__"
  };
  return {
    matches: [{
      params: {},
      pathname: "",
      pathnameBase: "",
      route: yC
    }],
    route: yC
  };
}
function Sy(CC, yC) {
  let {
    pathname: IC,
    routeId: fC,
    method: ky,
    type: gC
  } = void 0 === yC ? {} : yC;
  let AC = "Unknown Server Error";
  let my = "Unknown @remix-run/router error";
  400 === CC ? (AC = "Bad Request", ky && IC && fC ? my = "You made a " + ky + ' request to "' + IC + '" but did not provide a `loader` for route "' + fC + '", so there is no way to handle the request.' : "defer-action" === gC && (my = "defer() is not supported in actions")) : 403 === CC ? (AC = "Forbidden", my = 'Route "' + fC + '" does not match URL "' + IC + '"') : 404 === CC ? (AC = "Not Found", my = 'No route matches URL "' + IC + '"') : 405 === CC && (AC = "Method Not Allowed", ky && IC && fC ? my = "You made a " + ky.toUpperCase() + ' request to "' + IC + '" but did not provide an `action` for route "' + fC + '", so there is no way to handle the request.' : ky && (my = 'Invalid request method "' + ky.toUpperCase() + '"'));
  return new h(CC || 500, AC, new Error(my), !0);
}
function Ty(CC) {
  for (let yC = CC.length - 1; yC >= 0; yC--) {
    let IC = CC[yC];
    if (qy(IC)) {
      return IC;
    }
  }
}
function Ny(CC) {
  return o(fC({}, "string" === typeof CC ? E(CC) : CC, {
    hash: ""
  }));
}
function sy(CC) {
  return CC.type === rC.deferred;
}
function jI(CC) {
  return CC.type === rC.error;
}
function qy(CC) {
  return (CC && CC.type) === rC.redirect;
}
function Ky(CC) {
  return null != CC && "number" === typeof CC.status && "string" === typeof CC.statusText && "object" === typeof CC.headers && "undefined" !== typeof CC.body;
}
function py(CC) {
  return vC.has(CC);
}
function wy(CC) {
  return lC.has(CC);
}
async function Hy(CC, yC, IC, fC, ky, gC) {
  for (let AC = 0; AC < IC.length; AC++) {
    let my = IC[AC];
    let XC = yC[AC];
    let iy = CC.find(CC => CC.route.id === XC.route.id);
    let LC = null != iy && !mI(iy, XC) && void 0 !== (gC && gC[XC.route.id]);
    sy(my) && (ky || LC) && (await ay(my, fC, ky).then(CC => {
      CC && (IC[AC] = CC || IC[AC]);
    }));
  }
}
async function ay(CC, yC, IC) {
  void 0 === IC && (IC = !1);
  if (!(await CC.deferredData.resolveData(yC))) {
    if (IC) {
      try {
        return {
          type: rC.data,
          data: CC.deferredData.unwrappedData
        };
      } catch (fC) {
        return {
          type: rC.error,
          error: fC
        };
      }
    }
    return {
      type: rC.data,
      data: CC.deferredData.data
    };
  }
}
function cy(CC) {
  return new URLSearchParams(CC).getAll("index").some(CC => "" === CC);
}
function Uy(CC, yC) {
  let {
    route: IC,
    pathname: fC,
    params: ky
  } = CC;
  return {
    id: IC.id,
    pathname: fC,
    params: ky,
    data: yC[IC.id],
    handle: IC.handle
  };
}
function Ey(CC, yC) {
  let IC = "string" === typeof yC ? E(yC).search : yC.search;
  if (CC[CC.length - 1].route.index && cy(IC || "")) {
    return CC[CC.length - 1];
  }
  let fC = i(CC);
  return fC[fC.length - 1];
}