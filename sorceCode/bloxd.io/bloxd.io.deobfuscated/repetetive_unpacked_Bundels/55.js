var fC = require("./63.js");
var ky = 60103;
var gC = 60106;
exports.Fragment = 60107;
exports.StrictMode = 60108;
exports.Profiler = 60114;
var AC = 60109;
var my = 60110;
var XC = 60112;
exports.Suspense = 60113;
var iy = 60115;
var LC = 60116;
if ("function" === typeof Symbol && Symbol.for) {
  var YC = Symbol.for;
  ky = YC("react.element");
  gC = YC("react.portal");
  exports.Fragment = YC("react.fragment");
  exports.StrictMode = YC("react.strict_mode");
  exports.Profiler = YC("react.profiler");
  AC = YC("react.provider");
  my = YC("react.context");
  XC = YC("react.forward_ref");
  exports.Suspense = YC("react.suspense");
  iy = YC("react.memo");
  LC = YC("react.lazy");
}
var bC = "function" === typeof Symbol && Symbol.iterator;
function rC(CC) {
  for (var yC = "https://reactjs.org/docs/error-decoder.html?invariant=" + CC, IC = 1; IC < arguments.length; IC++) {
    yC += "&args[]=" + encodeURIComponent(arguments[IC]);
  }
  return "Minified React error #" + CC + "; visit " + yC + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var GC = {
  isMounted: function () {
    return !1;
  },
  enqueueForceUpdate: function () {},
  enqueueReplaceState: function () {},
  enqueueSetState: function () {}
};
var eC = {};
function OC(CC, yC, IC) {
  this.props = CC;
  this.context = yC;
  this.refs = eC;
  this.updater = IC || GC;
}
function SC() {}
function TC(CC, yC, IC) {
  this.props = CC;
  this.context = yC;
  this.refs = eC;
  this.updater = IC || GC;
}
OC.prototype.isReactComponent = {};
OC.prototype.setState = function (CC, yC) {
  if ("object" !== typeof CC && "function" !== typeof CC && null != CC) {
    throw Error(rC(85));
  }
  this.updater.enqueueSetState(this, CC, yC, "setState");
};
OC.prototype.forceUpdate = function (CC) {
  this.updater.enqueueForceUpdate(this, CC, "forceUpdate");
};
SC.prototype = OC.prototype;
var NC = TC.prototype = new SC();
NC.constructor = TC;
fC(NC, OC.prototype);
NC.isPureReactComponent = !0;
var sC = {
  current: null
};
var jy = Object.prototype.hasOwnProperty;
var qC = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};
function KC(CC, yC, IC) {
  var fC;
  var gC = {};
  var AC = null;
  var my = null;
  if (null != yC) {
    void 0 !== yC.ref && (my = yC.ref);
    void 0 !== yC.key && (AC = "" + yC.key);
    for (fC in yC) {
      jy.call(yC, fC) && !qC.hasOwnProperty(fC) && (gC[fC] = yC[fC]);
    }
  }
  var XC = arguments.length - 2;
  if (1 === XC) {
    gC.children = IC;
  } else {
    if (1 < XC) {
      for (var iy = Array(XC), LC = 0; LC < XC; LC++) {
        iy[LC] = arguments[LC + 2];
      }
      gC.children = iy;
    }
  }
  if (CC && CC.defaultProps) {
    for (fC in XC = CC.defaultProps) {
      void 0 === gC[fC] && (gC[fC] = XC[fC]);
    }
  }
  return {
    $$typeof: ky,
    type: CC,
    key: AC,
    ref: my,
    props: gC,
    _owner: sC.current
  };
}
function pC(CC) {
  return "object" === typeof CC && null !== CC && CC.$$typeof === ky;
}
var wC = /\/+/g;
function HC(CC, yC) {
  return "object" === typeof CC && null !== CC && null != CC.key ? function (CC) {
    var yC = {
      "=": "=0",
      ":": "=2"
    };
    return "$" + CC.replace(/[=:]/g, function (CC) {
      return yC[CC];
    });
  }("" + CC.key) : yC.toString(36);
}
function aC(CC, yC, IC, fC, AC) {
  var my = typeof CC;
  "undefined" !== my && "boolean" !== my || (CC = null);
  var XC = !1;
  if (null === CC) {
    XC = !0;
  } else {
    switch (my) {
      case "string":
      case "number":
        XC = !0;
        break;
      case "object":
        switch (CC.$$typeof) {
          case ky:
          case gC:
            XC = !0;
        }
    }
  }
  if (XC) {
    AC = AC(XC = CC);
    CC = "" === fC ? "." + HC(XC, 0) : fC;
    Array.isArray(AC) ? (IC = "", null != CC && (IC = CC.replace(wC, "$&/") + "/"), aC(AC, yC, IC, "", function (CC) {
      return CC;
    })) : null != AC && (pC(AC) && (AC = function (CC, yC) {
      return {
        $$typeof: ky,
        type: CC.type,
        key: yC,
        ref: CC.ref,
        props: CC.props,
        _owner: CC._owner
      };
    }(AC, IC + (!AC.key || XC && XC.key === AC.key ? "" : ("" + AC.key).replace(wC, "$&/") + "/") + CC)), yC.push(AC));
    return 1;
  }
  XC = 0;
  fC = "" === fC ? "." : fC + ":";
  if (Array.isArray(CC)) {
    for (var iy = 0; iy < CC.length; iy++) {
      var LC = fC + HC(my = CC[iy], iy);
      XC += aC(my, yC, IC, LC, AC);
    }
  } else {
    LC = function (CC) {
      return null === CC || "object" !== typeof CC ? null : "function" === typeof (CC = bC && CC[bC] || CC["@@iterator"]) ? CC : null;
    }(CC);
    if ("function" === typeof LC) {
      CC = LC.call(CC);
      iy = 0;
      for (; !(my = CC.next()).done;) {
        XC += aC(my = my.value, yC, IC, LC = fC + HC(my, iy++), AC);
      }
    } else {
      if ("object" === my) {
        yC = "" + CC;
        throw Error(rC(31, "[object Object]" === yC ? "object with keys {" + Object.keys(CC).join(", ") + "}" : yC));
      }
    }
  }
  return XC;
}
function cC(CC, yC, IC) {
  if (null == CC) {
    return CC;
  }
  var fC = [];
  var ky = 0;
  aC(CC, fC, "", "", function (CC) {
    return yC.call(IC, CC, ky++);
  });
  return fC;
}
function UC(CC) {
  if (-1 === CC._status) {
    var yC = CC._result;
    yC = yC();
    CC._status = 0;
    CC._result = yC;
    yC.then(function (yC) {
      0 === CC._status && (yC = yC.default, CC._status = 1, CC._result = yC);
    }, function (yC) {
      0 === CC._status && (CC._status = 2, CC._result = yC);
    });
  }
  if (1 === CC._status) {
    return CC._result;
  }
  throw CC._result;
}
var EC = {
  current: null
};
function VC() {
  var CC = EC.current;
  if (null === CC) {
    throw Error(rC(321));
  }
  return CC;
}
var WC = {
  ReactCurrentDispatcher: EC,
  ReactCurrentBatchConfig: {
    transition: 0
  },
  ReactCurrentOwner: sC,
  IsSomeRendererActing: {
    current: !1
  },
  assign: fC
};
exports.Children = {
  map: cC,
  forEach: function (CC, yC, IC) {
    cC(CC, function () {
      yC.apply(this, arguments);
    }, IC);
  },
  count: function (CC) {
    var yC = 0;
    cC(CC, function () {
      yC++;
    });
    return yC;
  },
  toArray: function (CC) {
    return cC(CC, function (CC) {
      return CC;
    }) || [];
  },
  only: function (CC) {
    if (!pC(CC)) {
      throw Error(rC(143));
    }
    return CC;
  }
};
exports.Component = OC;
exports.PureComponent = TC;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = WC;
exports.cloneElement = function (CC, yC, IC) {
  if (null === CC || void 0 === CC) {
    throw Error(rC(267, CC));
  }
  var gC = fC({}, CC.props);
  var AC = CC.key;
  var my = CC.ref;
  var XC = CC._owner;
  if (null != yC) {
    void 0 !== yC.ref && (my = yC.ref, XC = sC.current);
    void 0 !== yC.key && (AC = "" + yC.key);
    if (CC.type && CC.type.defaultProps) {
      var iy = CC.type.defaultProps;
    }
    for (LC in yC) {
      jy.call(yC, LC) && !qC.hasOwnProperty(LC) && (gC[LC] = void 0 === yC[LC] && void 0 !== iy ? iy[LC] : yC[LC]);
    }
  }
  var LC = arguments.length - 2;
  if (1 === LC) {
    gC.children = IC;
  } else {
    if (1 < LC) {
      iy = Array(LC);
      for (var YC = 0; YC < LC; YC++) {
        iy[YC] = arguments[YC + 2];
      }
      gC.children = iy;
    }
  }
  return {
    $$typeof: ky,
    type: CC.type,
    key: AC,
    ref: my,
    props: gC,
    _owner: XC
  };
};
exports.createContext = function (CC, yC) {
  void 0 === yC && (yC = null);
  (CC = {
    $$typeof: my,
    _calculateChangedBits: yC,
    _currentValue: CC,
    _currentValue2: CC,
    _threadCount: 0,
    Provider: null,
    Consumer: null
  }).Provider = {
    $$typeof: AC,
    _context: CC
  };
  return CC.Consumer = CC;
};
exports.createElement = KC;
exports.createFactory = function (CC) {
  var yC = KC.bind(null, CC);
  yC.type = CC;
  return yC;
};
exports.createRef = function () {
  return {
    current: null
  };
};
exports.forwardRef = function (CC) {
  return {
    $$typeof: XC,
    render: CC
  };
};
exports.isValidElement = pC;
exports.lazy = function (CC) {
  return {
    $$typeof: LC,
    _payload: {
      _status: -1,
      _result: CC
    },
    _init: UC
  };
};
exports.memo = function (CC, yC) {
  return {
    $$typeof: iy,
    type: CC,
    compare: void 0 === yC ? null : yC
  };
};
exports.useCallback = function (CC, yC) {
  return VC().useCallback(CC, yC);
};
exports.useContext = function (CC, yC) {
  return VC().useContext(CC, yC);
};
exports.useDebugValue = function () {};
exports.Oy = function (CC, yC) {
  return VC().Oy(CC, yC);
};
exports.useImperativeHandle = function (CC, yC, IC) {
  return VC().useImperativeHandle(CC, yC, IC);
};
exports.useLayoutEffect = function (CC, yC) {
  return VC().useLayoutEffect(CC, yC);
};
exports.useMemo = function (CC, yC) {
  return VC().useMemo(CC, yC);
};
exports.useReducer = function (CC, yC, IC) {
  return VC().useReducer(CC, yC, IC);
};
exports.useRef = function (CC) {
  return VC().useRef(CC);
};
exports.ey = function (CC) {
  return VC().ey(CC);
};
exports.version = "17.0.2";