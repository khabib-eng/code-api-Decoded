var fC = {
  b: bf,
  g: ef,
  c: Gf,
  j: kk,
  n: ff,
  o: tf,
  s: mk,
  v: Ff,
  z: Vf,
  D: nf,
  F: gf,
  I: xf,
  L: Bf,
  N: Jf,
  Q: Af,
  P: Lf,
  U: zf,
  W: Pf
};
import * as ky from "./1365.js";
import * as gC from "./1357.js";
class AC extends ky.c {
  constructor() {
    super();
  }
  static async setup() {
    window.adsbygoogle = window.adsbygoogle || [];
    window.adBreak = window.adConfig = function (CC) {
      window.adsbygoogle.push(CC);
    };
    window.adConfig({
      preloadAdBreaks: "on",
      sound: "on",
      onReady: () => {
        console.log("adsense for games ready");
      }
    });
    await (0, gC.e)("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", {
      "data-ad-client": "ca-pub-5991928098122027",
      "data-ad-frequency-hint": "120s",
      type: "text/javascript"
    });
    console.log("Loaded adsense for games");
    return new AC();
  }
  playVideoAd(CC, yC) {
    console.log("playPreroll requested");
    let IC = !1;
    const fC = setTimeout(() => {
      console.log("Calling onEnd from timeout - window.adBreak did not respond after 3 seconds");
      IC = !0;
      CC();
    }, 3e3);
    window.adBreak({
      type: "enterGame" === yC ? "start" : "next",
      name: yC,
      beforeAd: () => {
        console.log("beforeAd called");
        clearTimeout(fC);
        window.adStartSoPause(null, {
          preventMovement: !0
        });
      },
      afterAd: () => {
        console.log("afterAd called");
        window.adCompleteSoResume();
      },
      adBreakDone: yC => {
        console.log("adBreakDone called", yC);
        clearTimeout(fC);
        IC || (console.log("Haven't called onEnd yet, calling it from adBreakDone."), CC());
      }
    });
  }
}
class my extends ky.c {
  constructor(CC) {
    super();
    this.setOnEndCb = CC;
  }
  static async setup() {
    let CC;
    let yC;
    window.GD_OPTIONS = {
      gameId: "b35b336d21654aa5a378480d13ed7225",
      onEvent: IC => {
        const fC = () => {
          yC && (window.adCompleteSoResume(), yC = !1);
          CC && (CC(), CC = null);
        };
        switch (IC.name) {
          case "SDK_GAME_START":
            console.log("Gamedis SDK_GAME_START");
            yC = !1;
            CC ? (CC(), CC = null, window.adCompleteSoResume()) : console.error("onEndCb is not defined during SDK_GAME_START for gamedis sdk. Probably means error happened before.");
            break;
          case "SDK_GAME_PAUSE":
            console.log("Gamedis SDK_GAME_PAUSE");
            window.adStartSoPause(null, {
              preventMovement: !0
            });
            yC = !0;
            break;
          case "SDK_ERROR":
            console.error("Gamedis SDK_ERROR fired");
            fC();
            break;
          case "SDK_GDPR_TRACKING":
          case "SDK_GDPR_TARGETING":
          default:
            break;
          case "AD_ERROR":
            console.error("Gamedis AD_ERROR fired");
            fC();
            break;
          case "AD_IS_ALREADY_RUNNING":
            console.error("Gamedis AD_IS_ALREADY_RUNNING fired");
            fC();
            break;
          case "DISPLAYAD_ERROR":
            console.error("Gamedis DISPLAYAD_ERROR fired");
            console.error(IC);
        }
      }
    };
    await (0, gC.e)("https://html5.api.gamedistribution.com/main.min.js", {
      id: "gamedistribution-jssdk"
    });
    return new my(yC => {
      CC = yC;
    });
  }
  playVideoAd(CC, yC) {
    this.setOnEndCb(CC);
    console.log("Requesting gamedis preroll");
    window.gdsdk.showAd();
  }
  renderBanner(CC) {
    console.log("Getting new gamedis banners");
    void 0 !== window.gdsdk.AdType.Display ? (console.log("requesting gamedis banner into", document.getElementById(CC.divId)), console.log("Params to window.gdsdk.showAd", window.gdsdk.AdType.Display, CC.divId), window.gdsdk.showAd(window.gdsdk.AdType.Display, {
      containerId: CC.divId
    }).then(() => console.info("showAd(window.gdsdk.AdType.Display) resolved.")).catch(CC => console.info(CC))) : console.error("window.gdsdk.AdType.Display is undefined");
  }
}
import * as XC from "./1370.js";
import * as iy from "./1374.js";
import * as LC from "./38.js";
var YC = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : {};
function bC(CC) {
  return CC && CC.__esModule && Object.prototype.hasOwnProperty.call(CC, "default") ? CC.default : CC;
}
var rC = {
  exports: {}
};
!function (CC) {
  var yC = Object.prototype.hasOwnProperty;
  var IC = "~";
  function fC() {}
  function ky(CC, yC, IC) {
    this.Ky = CC;
    this.context = yC;
    this.once = IC || !1;
  }
  function gC(CC, yC, fC, gC, AC) {
    if ("function" !== typeof fC) {
      throw new TypeError("The listener must be a function");
    }
    var my = new ky(fC, gC || CC, AC);
    var XC = IC ? IC + yC : yC;
    CC._events[XC] ? CC._events[XC].Ky ? CC._events[XC] = [CC._events[XC], my] : CC._events[XC].push(my) : (CC._events[XC] = my, CC._eventsCount++);
    return CC;
  }
  function AC(CC, yC) {
    0 === --CC._eventsCount ? CC._events = new fC() : delete CC._events[yC];
  }
  function my() {
    this._events = new fC();
    this._eventsCount = 0;
  }
  Object.create && (fC.prototype = Object.create(null), new fC().__proto__ || (IC = !1));
  my.prototype.eventNames = function () {
    var CC;
    var fC;
    var ky = [];
    if (0 === this._eventsCount) {
      return ky;
    }
    for (fC in CC = this._events) {
      yC.call(CC, fC) && ky.push(IC ? fC.slice(1) : fC);
    }
    return Object.getOwnPropertySymbols ? ky.concat(Object.getOwnPropertySymbols(CC)) : ky;
  };
  my.prototype.listeners = function (CC) {
    var yC = IC ? IC + CC : CC;
    var fC = this._events[yC];
    if (!fC) {
      return [];
    }
    if (fC.Ky) {
      return [fC.Ky];
    }
    for (var ky = 0, gC = fC.length, AC = new Array(gC); ky < gC; ky++) {
      AC[ky] = fC[ky].Ky;
    }
    return AC;
  };
  my.prototype.listenerCount = function (CC) {
    var yC = IC ? IC + CC : CC;
    var fC = this._events[yC];
    return fC ? fC.Ky ? 1 : fC.length : 0;
  };
  my.prototype.emit = function (CC, yC, fC, ky, gC, AC) {
    var my = IC ? IC + CC : CC;
    if (!this._events[my]) {
      return !1;
    }
    var XC;
    var iy;
    var LC = this._events[my];
    var YC = arguments.length;
    if (LC.Ky) {
      LC.once && this.removeListener(CC, LC.Ky, void 0, !0);
      switch (YC) {
        case 1:
          LC.Ky.call(LC.context);
          return !0;
        case 2:
          LC.Ky.call(LC.context, yC);
          return !0;
        case 3:
          LC.Ky.call(LC.context, yC, fC);
          return !0;
        case 4:
          LC.Ky.call(LC.context, yC, fC, ky);
          return !0;
        case 5:
          LC.Ky.call(LC.context, yC, fC, ky, gC);
          return !0;
        case 6:
          LC.Ky.call(LC.context, yC, fC, ky, gC, AC);
          return !0;
      }
      iy = 1;
      XC = new Array(YC - 1);
      for (; iy < YC; iy++) {
        XC[iy - 1] = arguments[iy];
      }
      LC.Ky.apply(LC.context, XC);
    } else {
      var bC;
      var rC = LC.length;
      for (iy = 0; iy < rC; iy++) {
        LC[iy].once && this.removeListener(CC, LC[iy].Ky, void 0, !0);
        switch (YC) {
          case 1:
            LC[iy].Ky.call(LC[iy].context);
            break;
          case 2:
            LC[iy].Ky.call(LC[iy].context, yC);
            break;
          case 3:
            LC[iy].Ky.call(LC[iy].context, yC, fC);
            break;
          case 4:
            LC[iy].Ky.call(LC[iy].context, yC, fC, ky);
            break;
          default:
            if (!XC) {
              bC = 1;
              XC = new Array(YC - 1);
              for (; bC < YC; bC++) {
                XC[bC - 1] = arguments[bC];
              }
            }
            LC[iy].Ky.apply(LC[iy].context, XC);
        }
      }
    }
    return !0;
  };
  my.prototype.on = function (CC, yC, IC) {
    return gC(this, CC, yC, IC, !1);
  };
  my.prototype.once = function (CC, yC, IC) {
    return gC(this, CC, yC, IC, !0);
  };
  my.prototype.removeListener = function (CC, yC, fC, ky) {
    var gC = IC ? IC + CC : CC;
    if (!this._events[gC]) {
      return this;
    }
    if (!yC) {
      AC(this, gC);
      return this;
    }
    var my = this._events[gC];
    if (my.Ky) {
      my.Ky !== yC || ky && !my.once || fC && my.context !== fC || AC(this, gC);
    } else {
      for (var XC = 0, iy = [], LC = my.length; XC < LC; XC++) {
        (my[XC].Ky !== yC || ky && !my[XC].once || fC && my[XC].context !== fC) && iy.push(my[XC]);
      }
      iy.length ? this._events[gC] = 1 === iy.length ? iy[0] : iy : AC(this, gC);
    }
    return this;
  };
  my.prototype.by = function (CC) {
    var yC;
    CC ? (yC = IC ? IC + CC : CC, this._events[yC] && AC(this, yC)) : (this._events = new fC(), this._eventsCount = 0);
    return this;
  };
  my.prototype.off = my.prototype.removeListener;
  my.prototype.addListener = my.prototype.on;
  my.prefixed = IC;
  my.EventEmitter = my;
  CC.exports = my;
}(rC);
var GC;
var eC;
var OC = bC(rC.exports);
import * as SC from "./18.js";
!function (CC) {
  CC.assertEqual = CC => CC;
  CC.assertIs = function (CC) {};
  CC.assertNever = function (CC) {
    throw new Error();
  };
  CC.arrayToEnum = CC => {
    const yC = {};
    for (const IC of CC) {
      yC[IC] = IC;
    }
    return yC;
  };
  CC.getValidEnumValues = yC => {
    const IC = CC.objectKeys(yC).filter(CC => "number" !== typeof yC[yC[CC]]);
    const fC = {};
    for (const CC of IC) {
      fC[CC] = yC[CC];
    }
    return CC.objectValues(fC);
  };
  CC.objectValues = yC => CC.objectKeys(yC).map(function (CC) {
    return yC[CC];
  });
  CC.objectKeys = "function" === typeof Object.keys ? CC => Object.keys(CC) : CC => {
    const yC = [];
    for (const IC in CC) {
      Object.prototype.hasOwnProperty.call(CC, IC) && yC.push(IC);
    }
    return yC;
  };
  CC.find = (CC, yC) => {
    for (const IC of CC) {
      if (yC(IC)) {
        return IC;
      }
    }
  };
  CC.isInteger = "function" === typeof Number.isInteger ? CC => Number.isInteger(CC) : CC => "number" === typeof CC && isFinite(CC) && Math.floor(CC) === CC;
  CC.joinValues = function (CC) {
    let yC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " | ";
    return CC.map(CC => "string" === typeof CC ? "'".concat(CC, "'") : CC).join(yC);
  };
  CC.jsonStringifyReplacer = (CC, yC) => "bigint" === typeof yC ? yC.toString() : yC;
}(GC || (GC = {}));
(function (CC) {
  CC.mergeShapes = (CC, yC) => (0, SC.d)((0, SC.d)({}, CC), yC);
})(eC || (eC = {}));
const TC = GC.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]);
const NC = CC => {
  switch (typeof CC) {
    case "undefined":
      return TC.undefined;
    case "string":
      return TC.string;
    case "number":
      return isNaN(CC) ? TC.nan : TC.number;
    case "boolean":
      return TC.boolean;
    case "function":
      return TC.function;
    case "bigint":
      return TC.bigint;
    case "symbol":
      return TC.symbol;
    case "object":
      return Array.isArray(CC) ? TC.array : null === CC ? TC.null : CC.then && "function" === typeof CC.then && CC.catch && "function" === typeof CC.catch ? TC.promise : "undefined" !== typeof Map && CC instanceof Map ? TC.map : "undefined" !== typeof Set && CC instanceof Set ? TC.set : "undefined" !== typeof Date && CC instanceof Date ? TC.date : TC.object;
    default:
      return TC.unknown;
  }
};
const sC = GC.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]);
class jy extends Error {
  constructor(CC) {
    var yC;
    super();
    yC = this;
    this.issues = [];
    this.addIssue = CC => {
      this.issues = [...this.issues, CC];
    };
    this.addIssues = function () {
      let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      yC.issues = [...yC.issues, ...CC];
    };
    const IC = new.target.prototype;
    Object.setPrototypeOf ? Object.setPrototypeOf(this, IC) : this.__proto__ = IC;
    this.name = "ZodError";
    this.issues = CC;
  }
  get errors() {
    return this.issues;
  }
  format(CC) {
    const yC = CC || function (CC) {
      return CC.message;
    };
    const IC = {
      _errors: []
    };
    const fC = CC => {
      for (const ky of CC.issues) {
        if ("invalid_union" === ky.code) {
          ky.unionErrors.map(fC);
        } else {
          if ("invalid_return_type" === ky.code) {
            fC(ky.returnTypeError);
          } else {
            if ("invalid_arguments" === ky.code) {
              fC(ky.argumentsError);
            } else {
              if (0 === ky.path.length) {
                IC._errors.push(yC(ky));
              } else {
                let CC = IC;
                let fC = 0;
                for (; fC < ky.path.length;) {
                  const IC = ky.path[fC];
                  fC === ky.path.length - 1 ? (CC[IC] = CC[IC] || {
                    _errors: []
                  }, CC[IC]._errors.push(yC(ky))) : CC[IC] = CC[IC] || {
                    _errors: []
                  };
                  CC = CC[IC];
                  fC++;
                }
              }
            }
          }
        }
      }
    };
    fC(this);
    return IC;
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, GC.jsonStringifyReplacer, 2);
  }
  get IC() {
    return 0 === this.issues.length;
  }
  flatten() {
    let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : CC => CC.message;
    const yC = {};
    const IC = [];
    for (const fC of this.issues) {
      fC.path.length > 0 ? (yC[fC.path[0]] = yC[fC.path[0]] || [], yC[fC.path[0]].push(CC(fC))) : IC.push(CC(fC));
    }
    return {
      formErrors: IC,
      fieldErrors: yC
    };
  }
  get formErrors() {
    return this.flatten();
  }
}
jy.create = CC => new jy(CC);
const qC = (CC, yC) => {
  let IC;
  switch (CC.code) {
    case sC.invalid_type:
      IC = CC.received === TC.undefined ? "Required" : "Expected ".concat(CC.expected, ", received ").concat(CC.received);
      break;
    case sC.invalid_literal:
      IC = "Invalid literal value, expected ".concat(JSON.stringify(CC.expected, GC.jsonStringifyReplacer));
      break;
    case sC.unrecognized_keys:
      IC = "Unrecognized key(s) in object: ".concat(GC.joinValues(CC.keys, ", "));
      break;
    case sC.invalid_union:
      IC = "Invalid input";
      break;
    case sC.invalid_union_discriminator:
      IC = "Invalid discriminator value. Expected ".concat(GC.joinValues(CC.options));
      break;
    case sC.invalid_enum_value:
      IC = "Invalid enum value. Expected ".concat(GC.joinValues(CC.options), ", received '").concat(CC.received, "'");
      break;
    case sC.invalid_arguments:
      IC = "Invalid function arguments";
      break;
    case sC.invalid_return_type:
      IC = "Invalid function return type";
      break;
    case sC.invalid_date:
      IC = "Invalid date";
      break;
    case sC.invalid_string:
      "object" === typeof CC.validation ? "includes" in CC.validation ? (IC = 'Invalid input: must include "'.concat(CC.validation.includes, '"'), "number" === typeof CC.validation.position && (IC = "".concat(IC, " at one or more positions greater than or equal to ").concat(CC.validation.position))) : "startsWith" in CC.validation ? IC = 'Invalid input: must start with "'.concat(CC.validation.startsWith, '"') : "endsWith" in CC.validation ? IC = 'Invalid input: must end with "'.concat(CC.validation.endsWith, '"') : GC.assertNever(CC.validation) : IC = "regex" !== CC.validation ? "Invalid ".concat(CC.validation) : "Invalid";
      break;
    case sC.too_small:
      IC = "array" === CC.type ? "Array must contain ".concat(CC.exact ? "exactly" : CC.inclusive ? "at least" : "more than", " ").concat(CC.minimum, " element(s)") : "string" === CC.type ? "String must contain ".concat(CC.exact ? "exactly" : CC.inclusive ? "at least" : "over", " ").concat(CC.minimum, " character(s)") : "number" === CC.type ? "Number must be ".concat(CC.exact ? "exactly equal to " : CC.inclusive ? "greater than or equal to " : "greater than ").concat(CC.minimum) : "date" === CC.type ? "Date must be ".concat(CC.exact ? "exactly equal to " : CC.inclusive ? "greater than or equal to " : "greater than ").concat(new Date(Number(CC.minimum))) : "Invalid input";
      break;
    case sC.too_big:
      IC = "array" === CC.type ? "Array must contain ".concat(CC.exact ? "exactly" : CC.inclusive ? "at most" : "less than", " ").concat(CC.maximum, " element(s)") : "string" === CC.type ? "String must contain ".concat(CC.exact ? "exactly" : CC.inclusive ? "at most" : "under", " ").concat(CC.maximum, " character(s)") : "number" === CC.type ? "Number must be ".concat(CC.exact ? "exactly" : CC.inclusive ? "less than or equal to" : "less than", " ").concat(CC.maximum) : "bigint" === CC.type ? "BigInt must be ".concat(CC.exact ? "exactly" : CC.inclusive ? "less than or equal to" : "less than", " ").concat(CC.maximum) : "date" === CC.type ? "Date must be ".concat(CC.exact ? "exactly" : CC.inclusive ? "smaller than or equal to" : "smaller than", " ").concat(new Date(Number(CC.maximum))) : "Invalid input";
      break;
    case sC.custom:
      IC = "Invalid input";
      break;
    case sC.invalid_intersection_types:
      IC = "Intersection results could not be merged";
      break;
    case sC.not_multiple_of:
      IC = "Number must be a multiple of ".concat(CC.multipleOf);
      break;
    case sC.not_finite:
      IC = "Number must be finite";
      break;
    default:
      IC = yC.defaultError;
      GC.assertNever(CC);
  }
  return {
    message: IC
  };
};
let KC = qC;
function pC() {
  return KC;
}
const wC = CC => {
  const {
    data: yC,
    path: IC,
    errorMaps: fC,
    issueData: ky
  } = CC;
  const gC = [...IC, ...(ky.path || [])];
  const AC = (0, SC.d)((0, SC.d)({}, ky), {}, {
    path: gC
  });
  let my = "";
  const XC = fC.filter(CC => !!CC).slice().reverse();
  for (const iy of XC) {
    my = iy(AC, {
      data: yC,
      defaultError: my
    }).message;
  }
  return (0, SC.d)((0, SC.d)({}, ky), {}, {
    path: gC,
    message: ky.message || my
  });
};
function HC(CC, yC) {
  const IC = wC({
    issueData: yC,
    data: CC.data,
    path: CC.path,
    errorMaps: [CC.common.contextualErrorMap, CC.schemaErrorMap, pC(), qC].filter(CC => !!CC)
  });
  CC.common.issues.push(IC);
}
class aC {
  constructor() {
    this.value = "valid";
  }
  mY() {
    "valid" === this.value && (this.value = "mY");
  }
  abort() {
    "aborted" !== this.value && (this.value = "aborted");
  }
  static mergeArray(CC, yC) {
    const IC = [];
    for (const fC of yC) {
      if ("aborted" === fC.status) {
        return cC;
      }
      "mY" === fC.status && CC.mY();
      IC.push(fC.value);
    }
    return {
      status: CC.value,
      value: IC
    };
  }
  static async mergeObjectAsync(CC, yC) {
    const IC = [];
    for (const fC of yC) {
      IC.push({
        key: await fC.key,
        value: await fC.value
      });
    }
    return aC.mergeObjectSync(CC, IC);
  }
  static mergeObjectSync(CC, yC) {
    const IC = {};
    for (const fC of yC) {
      const {
        key: yC,
        value: ky
      } = fC;
      if ("aborted" === yC.status) {
        return cC;
      }
      if ("aborted" === ky.status) {
        return cC;
      }
      "mY" === yC.status && CC.mY();
      "mY" === ky.status && CC.mY();
      "__proto__" === yC.value || "undefined" === typeof ky.value && !fC.alwaysSet || (IC[yC.value] = ky.value);
    }
    return {
      status: CC.value,
      value: IC
    };
  }
}
const cC = Object.freeze({
  status: "aborted"
});
const UC = CC => ({
  status: "mY",
  value: CC
});
const EC = CC => ({
  status: "valid",
  value: CC
});
const VC = CC => "aborted" === CC.status;
const WC = CC => "mY" === CC.status;
const xC = CC => "valid" === CC.status;
const PC = CC => "undefined" !== typeof Promise && CC instanceof Promise;
var zC;
!function (CC) {
  CC.errToObj = CC => "string" === typeof CC ? {
    message: CC
  } : CC || {};
  CC.toString = CC => "string" === typeof CC ? CC : null === CC || void 0 === CC ? void 0 : CC.message;
}(zC || (zC = {}));
class BC {
  constructor(CC, yC, IC, fC) {
    this._cachedPath = [];
    this.parent = CC;
    this.data = yC;
    this._path = IC;
    this._key = fC;
  }
  get path() {
    this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key));
    return this._cachedPath;
  }
}
const tC = (CC, yC) => {
  if (xC(yC)) {
    return {
      success: !0,
      data: yC.value
    };
  }
  if (!CC.common.issues.length) {
    throw new Error("Validation failed but no issues detected.");
  }
  return {
    success: !1,
    get error() {
      if (this._error) {
        return this._error;
      }
      const yC = new jy(CC.common.issues);
      this._error = yC;
      return this._error;
    }
  };
};
function JC(CC) {
  if (!CC) {
    return {};
  }
  const {
    errorMap: yC,
    invalid_type_error: IC,
    required_error: fC,
    description: ky
  } = CC;
  if (yC && (IC || fC)) {
    throw new Error('Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.');
  }
  if (yC) {
    return {
      errorMap: yC,
      description: ky
    };
  }
  return {
    errorMap: (CC, yC) => "invalid_type" !== CC.code ? {
      message: yC.defaultError
    } : "undefined" === typeof yC.data ? {
      message: null !== fC && void 0 !== fC ? fC : yC.defaultError
    } : {
      message: null !== IC && void 0 !== IC ? IC : yC.defaultError
    },
    description: ky
  };
}
class nC {
  constructor(CC) {
    this.spa = this.safeParseAsync;
    this._def = CC;
    this.parse = this.parse.bind(this);
    this.safeParse = this.safeParse.bind(this);
    this.parseAsync = this.parseAsync.bind(this);
    this.safeParseAsync = this.safeParseAsync.bind(this);
    this.spa = this.spa.bind(this);
    this.refine = this.refine.bind(this);
    this.refinement = this.refinement.bind(this);
    this.superRefine = this.superRefine.bind(this);
    this.optional = this.optional.bind(this);
    this.nullable = this.nullable.bind(this);
    this.nullish = this.nullish.bind(this);
    this.array = this.array.bind(this);
    this.promise = this.promise.bind(this);
    this.or = this.or.bind(this);
    this.and = this.and.bind(this);
    this.transform = this.transform.bind(this);
    this.brand = this.brand.bind(this);
    this.default = this.default.bind(this);
    this.catch = this.catch.bind(this);
    this.describe = this.describe.bind(this);
    this.pipe = this.pipe.bind(this);
    this.readonly = this.readonly.bind(this);
    this.isNullable = this.isNullable.bind(this);
    this.isOptional = this.isOptional.bind(this);
  }
  get description() {
    return this._def.description;
  }
  _getType(CC) {
    return NC(CC.data);
  }
  _getOrReturnCtx(CC, yC) {
    return yC || {
      common: CC.parent.common,
      data: CC.data,
      parsedType: NC(CC.data),
      schemaErrorMap: this._def.errorMap,
      path: CC.path,
      parent: CC.parent
    };
  }
  _processInputParams(CC) {
    return {
      status: new aC(),
      ctx: {
        common: CC.parent.common,
        data: CC.data,
        parsedType: NC(CC.data),
        schemaErrorMap: this._def.errorMap,
        path: CC.path,
        parent: CC.parent
      }
    };
  }
  _parseSync(CC) {
    const yC = this._parse(CC);
    if (PC(yC)) {
      throw new Error("Synchronous parse encountered promise.");
    }
    return yC;
  }
  _parseAsync(CC) {
    const yC = this._parse(CC);
    return Promise.resolve(yC);
  }
  parse(CC, yC) {
    const IC = this.safeParse(CC, yC);
    if (IC.success) {
      return IC.data;
    }
    throw IC.error;
  }
  safeParse(CC, yC) {
    var IC;
    const fC = {
      common: {
        issues: [],
        async: null !== (IC = null === yC || void 0 === yC ? void 0 : yC.async) && void 0 !== IC && IC,
        contextualErrorMap: null === yC || void 0 === yC ? void 0 : yC.errorMap
      },
      path: (null === yC || void 0 === yC ? void 0 : yC.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: CC,
      parsedType: NC(CC)
    };
    const ky = this._parseSync({
      data: CC,
      path: fC.path,
      parent: fC
    });
    return tC(fC, ky);
  }
  async parseAsync(CC, yC) {
    const IC = await this.safeParseAsync(CC, yC);
    if (IC.success) {
      return IC.data;
    }
    throw IC.error;
  }
  async safeParseAsync(CC, yC) {
    const IC = {
      common: {
        issues: [],
        contextualErrorMap: null === yC || void 0 === yC ? void 0 : yC.errorMap,
        async: !0
      },
      path: (null === yC || void 0 === yC ? void 0 : yC.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: CC,
      parsedType: NC(CC)
    };
    const fC = this._parse({
      data: CC,
      path: IC.path,
      parent: IC
    });
    const ky = await (PC(fC) ? fC : Promise.resolve(fC));
    return tC(IC, ky);
  }
  refine(CC, yC) {
    return this._refinement((IC, fC) => {
      const ky = CC(IC);
      const gC = () => fC.addIssue((0, SC.d)({
        code: sC.custom
      }, (CC => "string" === typeof yC || "undefined" === typeof yC ? {
        message: yC
      } : "function" === typeof yC ? yC(CC) : yC)(IC)));
      return "undefined" !== typeof Promise && ky instanceof Promise ? ky.then(CC => !!CC || (gC(), !1)) : !!ky || (gC(), !1);
    });
  }
  refinement(CC, yC) {
    return this._refinement((IC, fC) => !!CC(IC) || (fC.addIssue("function" === typeof yC ? yC(IC, fC) : yC), !1));
  }
  _refinement(CC) {
    return new cy({
      schema: this,
      typeName: Fy.ZodEffects,
      effect: {
        type: "refinement",
        refinement: CC
      }
    });
  }
  superRefine(CC) {
    return this._refinement(CC);
  }
  optional() {
    return Uy.create(this, this._def);
  }
  nullable() {
    return Ey.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return iI.create(this, this._def);
  }
  promise() {
    return ay.create(this, this._def);
  }
  or(CC) {
    return by.create([this, CC], this._def);
  }
  and(CC) {
    return Oy.create(this, CC, this._def);
  }
  transform(CC) {
    return new cy((0, SC.d)((0, SC.d)({}, JC(this._def)), {}, {
      schema: this,
      typeName: Fy.ZodEffects,
      effect: {
        type: "transform",
        transform: CC
      }
    }));
  }
  default(CC) {
    const yC = "function" === typeof CC ? CC : () => CC;
    return new Vy((0, SC.d)((0, SC.d)({}, JC(this._def)), {}, {
      innerType: this,
      defaultValue: yC,
      typeName: Fy.ZodDefault
    }));
  }
  brand() {
    return new zy((0, SC.d)({
      typeName: Fy.ZodBranded,
      type: this
    }, JC(this._def)));
  }
  catch(CC) {
    const yC = "function" === typeof CC ? CC : () => CC;
    return new Wy((0, SC.d)((0, SC.d)({}, JC(this._def)), {}, {
      innerType: this,
      catchValue: yC,
      typeName: Fy.ZodCatch
    }));
  }
  describe(CC) {
    return new (0, this.constructor)((0, SC.d)((0, SC.d)({}, this._def), {}, {
      description: CC
    }));
  }
  pipe(CC) {
    return By.create(this, CC);
  }
  readonly() {
    return ty.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const FC = /^c[^\s-]{8,}$/i;
const uC = /^[a-z][a-z0-9]*$/;
const DC = /^[0-9A-HJKMNP-TV-Z]{26}$/;
const ZC = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
const lC = /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
let oC;
const vC = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/;
const hC = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;
class RC extends nC {
  _parse(CC) {
    this._def.coerce && (CC.data = String(CC.data));
    if (this._getType(CC) !== TC.string) {
      const yC = this._getOrReturnCtx(CC);
      HC(yC, {
        code: sC.invalid_type,
        expected: TC.string,
        received: yC.parsedType
      });
      return cC;
    }
    const yC = new aC();
    let IC;
    for (const my of this._def.checks) {
      if ("min" === my.kind) {
        CC.data.length < my.value && (IC = this._getOrReturnCtx(CC, IC), HC(IC, {
          code: sC.too_small,
          minimum: my.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: my.message
        }), yC.mY());
      } else {
        if ("max" === my.kind) {
          CC.data.length > my.value && (IC = this._getOrReturnCtx(CC, IC), HC(IC, {
            code: sC.too_big,
            maximum: my.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: my.message
          }), yC.mY());
        } else {
          if ("length" === my.kind) {
            const fC = CC.data.length > my.value;
            const ky = CC.data.length < my.value;
            (fC || ky) && (IC = this._getOrReturnCtx(CC, IC), fC ? HC(IC, {
              code: sC.too_big,
              maximum: my.value,
              type: "string",
              inclusive: !0,
              exact: !0,
              message: my.message
            }) : ky && HC(IC, {
              code: sC.too_small,
              minimum: my.value,
              type: "string",
              inclusive: !0,
              exact: !0,
              message: my.message
            }), yC.mY());
          } else {
            if ("email" === my.kind) {
              lC.test(CC.data) || (IC = this._getOrReturnCtx(CC, IC), HC(IC, {
                validation: "email",
                code: sC.invalid_string,
                message: my.message
              }), yC.mY());
            } else {
              if ("emoji" === my.kind) {
                oC || (oC = new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u"));
                oC.test(CC.data) || (IC = this._getOrReturnCtx(CC, IC), HC(IC, {
                  validation: "emoji",
                  code: sC.invalid_string,
                  message: my.message
                }), yC.mY());
              } else {
                if ("uuid" === my.kind) {
                  ZC.test(CC.data) || (IC = this._getOrReturnCtx(CC, IC), HC(IC, {
                    validation: "uuid",
                    code: sC.invalid_string,
                    message: my.message
                  }), yC.mY());
                } else {
                  if ("cuid" === my.kind) {
                    FC.test(CC.data) || (IC = this._getOrReturnCtx(CC, IC), HC(IC, {
                      validation: "cuid",
                      code: sC.invalid_string,
                      message: my.message
                    }), yC.mY());
                  } else {
                    if ("cuid2" === my.kind) {
                      uC.test(CC.data) || (IC = this._getOrReturnCtx(CC, IC), HC(IC, {
                        validation: "cuid2",
                        code: sC.invalid_string,
                        message: my.message
                      }), yC.mY());
                    } else {
                      if ("ulid" === my.kind) {
                        DC.test(CC.data) || (IC = this._getOrReturnCtx(CC, IC), HC(IC, {
                          validation: "ulid",
                          code: sC.invalid_string,
                          message: my.message
                        }), yC.mY());
                      } else {
                        if ("url" === my.kind) {
                          try {
                            new URL(CC.data);
                          } catch (AC) {
                            IC = this._getOrReturnCtx(CC, IC);
                            HC(IC, {
                              validation: "url",
                              code: sC.invalid_string,
                              message: my.message
                            });
                            yC.mY();
                          }
                        } else {
                          if ("regex" === my.kind) {
                            my.regex.lastIndex = 0;
                            my.regex.test(CC.data) || (IC = this._getOrReturnCtx(CC, IC), HC(IC, {
                              validation: "regex",
                              code: sC.invalid_string,
                              message: my.message
                            }), yC.mY());
                          } else {
                            if ("trim" === my.kind) {
                              CC.data = CC.data.trim();
                            } else {
                              if ("includes" === my.kind) {
                                CC.data.includes(my.value, my.position) || (IC = this._getOrReturnCtx(CC, IC), HC(IC, {
                                  code: sC.invalid_string,
                                  validation: {
                                    includes: my.value,
                                    position: my.position
                                  },
                                  message: my.message
                                }), yC.mY());
                              } else {
                                if ("toLowerCase" === my.kind) {
                                  CC.data = CC.data.toLowerCase();
                                } else {
                                  if ("toUpperCase" === my.kind) {
                                    CC.data = CC.data.toUpperCase();
                                  } else {
                                    if ("startsWith" === my.kind) {
                                      CC.data.startsWith(my.value) || (IC = this._getOrReturnCtx(CC, IC), HC(IC, {
                                        code: sC.invalid_string,
                                        validation: {
                                          startsWith: my.value
                                        },
                                        message: my.message
                                      }), yC.mY());
                                    } else {
                                      if ("endsWith" === my.kind) {
                                        CC.data.endsWith(my.value) || (IC = this._getOrReturnCtx(CC, IC), HC(IC, {
                                          code: sC.invalid_string,
                                          validation: {
                                            endsWith: my.value
                                          },
                                          message: my.message
                                        }), yC.mY());
                                      } else {
                                        if ("datetime" === my.kind) {
                                          ((gC = my).precision ? gC.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{".concat(gC.precision, "}(([+-]\\d{2}(:?\\d{2})?)|Z)$")) : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{".concat(gC.precision, "}Z$")) : 0 === gC.precision ? gC.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : gC.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$")).test(CC.data) || (IC = this._getOrReturnCtx(CC, IC), HC(IC, {
                                            code: sC.invalid_string,
                                            validation: "datetime",
                                            message: my.message
                                          }), yC.mY());
                                        } else {
                                          "ip" === my.kind ? (fC = CC.data, ("v4" !== (ky = my.version) && ky || !vC.test(fC)) && ("v6" !== ky && ky || !hC.test(fC)) && (IC = this._getOrReturnCtx(CC, IC), HC(IC, {
                                            validation: "ip",
                                            code: sC.invalid_string,
                                            message: my.message
                                          }), yC.mY())) : GC.assertNever(my);
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    var fC;
    var ky;
    var gC;
    return {
      status: yC.value,
      value: CC.data
    };
  }
  _regex(CC, yC, IC) {
    return this.refinement(yC => CC.test(yC), (0, SC.d)({
      validation: yC,
      code: sC.invalid_string
    }, zC.errToObj(IC)));
  }
  _addCheck(CC) {
    return new RC((0, SC.d)((0, SC.d)({}, this._def), {}, {
      checks: [...this._def.checks, CC]
    }));
  }
  email(CC) {
    return this._addCheck((0, SC.d)({
      kind: "email"
    }, zC.errToObj(CC)));
  }
  url(CC) {
    return this._addCheck((0, SC.d)({
      kind: "url"
    }, zC.errToObj(CC)));
  }
  emoji(CC) {
    return this._addCheck((0, SC.d)({
      kind: "emoji"
    }, zC.errToObj(CC)));
  }
  uuid(CC) {
    return this._addCheck((0, SC.d)({
      kind: "uuid"
    }, zC.errToObj(CC)));
  }
  cuid(CC) {
    return this._addCheck((0, SC.d)({
      kind: "cuid"
    }, zC.errToObj(CC)));
  }
  cuid2(CC) {
    return this._addCheck((0, SC.d)({
      kind: "cuid2"
    }, zC.errToObj(CC)));
  }
  ulid(CC) {
    return this._addCheck((0, SC.d)({
      kind: "ulid"
    }, zC.errToObj(CC)));
  }
  ip(CC) {
    return this._addCheck((0, SC.d)({
      kind: "ip"
    }, zC.errToObj(CC)));
  }
  datetime(CC) {
    var yC;
    return "string" === typeof CC ? this._addCheck({
      kind: "datetime",
      precision: null,
      offset: !1,
      message: CC
    }) : this._addCheck((0, SC.d)({
      kind: "datetime",
      precision: "undefined" === typeof (null === CC || void 0 === CC ? void 0 : CC.precision) ? null : null === CC || void 0 === CC ? void 0 : CC.precision,
      offset: null !== (yC = null === CC || void 0 === CC ? void 0 : CC.offset) && void 0 !== yC && yC
    }, zC.errToObj(null === CC || void 0 === CC ? void 0 : CC.message)));
  }
  regex(CC, yC) {
    return this._addCheck((0, SC.d)({
      kind: "regex",
      regex: CC
    }, zC.errToObj(yC)));
  }
  includes(CC, yC) {
    return this._addCheck((0, SC.d)({
      kind: "includes",
      value: CC,
      position: null === yC || void 0 === yC ? void 0 : yC.position
    }, zC.errToObj(null === yC || void 0 === yC ? void 0 : yC.message)));
  }
  startsWith(CC, yC) {
    return this._addCheck((0, SC.d)({
      kind: "startsWith",
      value: CC
    }, zC.errToObj(yC)));
  }
  endsWith(CC, yC) {
    return this._addCheck((0, SC.d)({
      kind: "endsWith",
      value: CC
    }, zC.errToObj(yC)));
  }
  min(CC, yC) {
    return this._addCheck((0, SC.d)({
      kind: "min",
      value: CC
    }, zC.errToObj(yC)));
  }
  max(CC, yC) {
    return this._addCheck((0, SC.d)({
      kind: "max",
      value: CC
    }, zC.errToObj(yC)));
  }
  length(CC, yC) {
    return this._addCheck((0, SC.d)({
      kind: "length",
      value: CC
    }, zC.errToObj(yC)));
  }
  nonempty(CC) {
    return this.min(1, zC.errToObj(CC));
  }
  trim() {
    return new RC((0, SC.d)((0, SC.d)({}, this._def), {}, {
      checks: [...this._def.checks, {
        kind: "trim"
      }]
    }));
  }
  toLowerCase() {
    return new RC((0, SC.d)((0, SC.d)({}, this._def), {}, {
      checks: [...this._def.checks, {
        kind: "toLowerCase"
      }]
    }));
  }
  toUpperCase() {
    return new RC((0, SC.d)((0, SC.d)({}, this._def), {}, {
      checks: [...this._def.checks, {
        kind: "toUpperCase"
      }]
    }));
  }
  get isDatetime() {
    return !!this._def.checks.find(CC => "datetime" === CC.kind);
  }
  get isEmail() {
    return !!this._def.checks.find(CC => "email" === CC.kind);
  }
  get isURL() {
    return !!this._def.checks.find(CC => "url" === CC.kind);
  }
  get isEmoji() {
    return !!this._def.checks.find(CC => "emoji" === CC.kind);
  }
  get isUUID() {
    return !!this._def.checks.find(CC => "uuid" === CC.kind);
  }
  get isCUID() {
    return !!this._def.checks.find(CC => "cuid" === CC.kind);
  }
  get isCUID2() {
    return !!this._def.checks.find(CC => "cuid2" === CC.kind);
  }
  get isULID() {
    return !!this._def.checks.find(CC => "ulid" === CC.kind);
  }
  get isIP() {
    return !!this._def.checks.find(CC => "ip" === CC.kind);
  }
  get minLength() {
    let CC = null;
    for (const yC of this._def.checks) {
      "min" === yC.kind && (null === CC || yC.value > CC) && (CC = yC.value);
    }
    return CC;
  }
  get maxLength() {
    let CC = null;
    for (const yC of this._def.checks) {
      "max" === yC.kind && (null === CC || yC.value < CC) && (CC = yC.value);
    }
    return CC;
  }
}
function dC(CC, yC) {
  const IC = (CC.toString().split(".")[1] || "").length;
  const fC = (yC.toString().split(".")[1] || "").length;
  const ky = IC > fC ? IC : fC;
  return parseInt(CC.toFixed(ky).replace(".", "")) % parseInt(yC.toFixed(ky).replace(".", "")) / Math.pow(10, ky);
}
RC.create = CC => {
  var yC;
  return new RC((0, SC.d)({
    checks: [],
    typeName: Fy.ZodString,
    coerce: null !== (yC = null === CC || void 0 === CC ? void 0 : CC.coerce) && void 0 !== yC && yC
  }, JC(CC)));
};
class QC extends nC {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
    this.step = this.multipleOf;
  }
  _parse(CC) {
    this._def.coerce && (CC.data = Number(CC.data));
    if (this._getType(CC) !== TC.number) {
      const yC = this._getOrReturnCtx(CC);
      HC(yC, {
        code: sC.invalid_type,
        expected: TC.number,
        received: yC.parsedType
      });
      return cC;
    }
    let yC;
    const IC = new aC();
    for (const fC of this._def.checks) {
      if ("int" === fC.kind) {
        GC.isInteger(CC.data) || (yC = this._getOrReturnCtx(CC, yC), HC(yC, {
          code: sC.invalid_type,
          expected: "integer",
          received: "float",
          message: fC.message
        }), IC.mY());
      } else {
        if ("min" === fC.kind) {
          (fC.inclusive ? CC.data < fC.value : CC.data <= fC.value) && (yC = this._getOrReturnCtx(CC, yC), HC(yC, {
            code: sC.too_small,
            minimum: fC.value,
            type: "number",
            inclusive: fC.inclusive,
            exact: !1,
            message: fC.message
          }), IC.mY());
        } else {
          if ("max" === fC.kind) {
            (fC.inclusive ? CC.data > fC.value : CC.data >= fC.value) && (yC = this._getOrReturnCtx(CC, yC), HC(yC, {
              code: sC.too_big,
              maximum: fC.value,
              type: "number",
              inclusive: fC.inclusive,
              exact: !1,
              message: fC.message
            }), IC.mY());
          } else {
            "multipleOf" === fC.kind ? 0 !== dC(CC.data, fC.value) && (yC = this._getOrReturnCtx(CC, yC), HC(yC, {
              code: sC.not_multiple_of,
              multipleOf: fC.value,
              message: fC.message
            }), IC.mY()) : "finite" === fC.kind ? Number.isFinite(CC.data) || (yC = this._getOrReturnCtx(CC, yC), HC(yC, {
              code: sC.not_finite,
              message: fC.message
            }), IC.mY()) : GC.assertNever(fC);
          }
        }
      }
    }
    return {
      status: IC.value,
      value: CC.data
    };
  }
  gte(CC, yC) {
    return this.setLimit("min", CC, !0, zC.toString(yC));
  }
  gt(CC, yC) {
    return this.setLimit("min", CC, !1, zC.toString(yC));
  }
  lte(CC, yC) {
    return this.setLimit("max", CC, !0, zC.toString(yC));
  }
  lt(CC, yC) {
    return this.setLimit("max", CC, !1, zC.toString(yC));
  }
  setLimit(CC, yC, IC, fC) {
    return new QC((0, SC.d)((0, SC.d)({}, this._def), {}, {
      checks: [...this._def.checks, {
        kind: CC,
        value: yC,
        inclusive: IC,
        message: zC.toString(fC)
      }]
    }));
  }
  _addCheck(CC) {
    return new QC((0, SC.d)((0, SC.d)({}, this._def), {}, {
      checks: [...this._def.checks, CC]
    }));
  }
  int(CC) {
    return this._addCheck({
      kind: "int",
      message: zC.toString(CC)
    });
  }
  positive(CC) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: zC.toString(CC)
    });
  }
  negative(CC) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: zC.toString(CC)
    });
  }
  nonpositive(CC) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: zC.toString(CC)
    });
  }
  nonnegative(CC) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: zC.toString(CC)
    });
  }
  multipleOf(CC, yC) {
    return this._addCheck({
      kind: "multipleOf",
      value: CC,
      message: zC.toString(yC)
    });
  }
  finite(CC) {
    return this._addCheck({
      kind: "finite",
      message: zC.toString(CC)
    });
  }
  safe(CC) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: zC.toString(CC)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: zC.toString(CC)
    });
  }
  get minValue() {
    let CC = null;
    for (const yC of this._def.checks) {
      "min" === yC.kind && (null === CC || yC.value > CC) && (CC = yC.value);
    }
    return CC;
  }
  get maxValue() {
    let CC = null;
    for (const yC of this._def.checks) {
      "max" === yC.kind && (null === CC || yC.value < CC) && (CC = yC.value);
    }
    return CC;
  }
  get isInt() {
    return !!this._def.checks.find(CC => "int" === CC.kind || "multipleOf" === CC.kind && GC.isInteger(CC.value));
  }
  get isFinite() {
    let CC = null;
    let yC = null;
    for (const IC of this._def.checks) {
      if ("finite" === IC.kind || "int" === IC.kind || "multipleOf" === IC.kind) {
        return !0;
      }
      "min" === IC.kind ? (null === yC || IC.value > yC) && (yC = IC.value) : "max" === IC.kind && (null === CC || IC.value < CC) && (CC = IC.value);
    }
    return Number.isFinite(yC) && Number.isFinite(CC);
  }
}
QC.create = CC => new QC((0, SC.d)({
  checks: [],
  typeName: Fy.ZodNumber,
  coerce: (null === CC || void 0 === CC ? void 0 : CC.coerce) || !1
}, JC(CC)));
class MC extends nC {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
  }
  _parse(CC) {
    this._def.coerce && (CC.data = BigInt(CC.data));
    if (this._getType(CC) !== TC.bigint) {
      const yC = this._getOrReturnCtx(CC);
      HC(yC, {
        code: sC.invalid_type,
        expected: TC.bigint,
        received: yC.parsedType
      });
      return cC;
    }
    let yC;
    const IC = new aC();
    for (const fC of this._def.checks) {
      if ("min" === fC.kind) {
        (fC.inclusive ? CC.data < fC.value : CC.data <= fC.value) && (yC = this._getOrReturnCtx(CC, yC), HC(yC, {
          code: sC.too_small,
          type: "bigint",
          minimum: fC.value,
          inclusive: fC.inclusive,
          message: fC.message
        }), IC.mY());
      } else {
        if ("max" === fC.kind) {
          (fC.inclusive ? CC.data > fC.value : CC.data >= fC.value) && (yC = this._getOrReturnCtx(CC, yC), HC(yC, {
            code: sC.too_big,
            type: "bigint",
            maximum: fC.value,
            inclusive: fC.inclusive,
            message: fC.message
          }), IC.mY());
        } else {
          "multipleOf" === fC.kind ? CC.data % fC.value !== BigInt(0) && (yC = this._getOrReturnCtx(CC, yC), HC(yC, {
            code: sC.not_multiple_of,
            multipleOf: fC.value,
            message: fC.message
          }), IC.mY()) : GC.assertNever(fC);
        }
      }
    }
    return {
      status: IC.value,
      value: CC.data
    };
  }
  gte(CC, yC) {
    return this.setLimit("min", CC, !0, zC.toString(yC));
  }
  gt(CC, yC) {
    return this.setLimit("min", CC, !1, zC.toString(yC));
  }
  lte(CC, yC) {
    return this.setLimit("max", CC, !0, zC.toString(yC));
  }
  lt(CC, yC) {
    return this.setLimit("max", CC, !1, zC.toString(yC));
  }
  setLimit(CC, yC, IC, fC) {
    return new MC((0, SC.d)((0, SC.d)({}, this._def), {}, {
      checks: [...this._def.checks, {
        kind: CC,
        value: yC,
        inclusive: IC,
        message: zC.toString(fC)
      }]
    }));
  }
  _addCheck(CC) {
    return new MC((0, SC.d)((0, SC.d)({}, this._def), {}, {
      checks: [...this._def.checks, CC]
    }));
  }
  positive(CC) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: zC.toString(CC)
    });
  }
  negative(CC) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: zC.toString(CC)
    });
  }
  nonpositive(CC) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: zC.toString(CC)
    });
  }
  nonnegative(CC) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: zC.toString(CC)
    });
  }
  multipleOf(CC, yC) {
    return this._addCheck({
      kind: "multipleOf",
      value: CC,
      message: zC.toString(yC)
    });
  }
  get minValue() {
    let CC = null;
    for (const yC of this._def.checks) {
      "min" === yC.kind && (null === CC || yC.value > CC) && (CC = yC.value);
    }
    return CC;
  }
  get maxValue() {
    let CC = null;
    for (const yC of this._def.checks) {
      "max" === yC.kind && (null === CC || yC.value < CC) && (CC = yC.value);
    }
    return CC;
  }
}
MC.create = CC => {
  var yC;
  return new MC((0, SC.d)({
    checks: [],
    typeName: Fy.ZodBigInt,
    coerce: null !== (yC = null === CC || void 0 === CC ? void 0 : CC.coerce) && void 0 !== yC && yC
  }, JC(CC)));
};
class Cy extends nC {
  _parse(CC) {
    this._def.coerce && (CC.data = Boolean(CC.data));
    if (this._getType(CC) !== TC.boolean) {
      const yC = this._getOrReturnCtx(CC);
      HC(yC, {
        code: sC.invalid_type,
        expected: TC.boolean,
        received: yC.parsedType
      });
      return cC;
    }
    return EC(CC.data);
  }
}
Cy.create = CC => new Cy((0, SC.d)({
  typeName: Fy.ZodBoolean,
  coerce: (null === CC || void 0 === CC ? void 0 : CC.coerce) || !1
}, JC(CC)));
class yy extends nC {
  _parse(CC) {
    this._def.coerce && (CC.data = new Date(CC.data));
    if (this._getType(CC) !== TC.date) {
      const yC = this._getOrReturnCtx(CC);
      HC(yC, {
        code: sC.invalid_type,
        expected: TC.date,
        received: yC.parsedType
      });
      return cC;
    }
    if (isNaN(CC.data.getTime())) {
      HC(this._getOrReturnCtx(CC), {
        code: sC.invalid_date
      });
      return cC;
    }
    const yC = new aC();
    let IC;
    for (const fC of this._def.checks) {
      "min" === fC.kind ? CC.data.getTime() < fC.value && (IC = this._getOrReturnCtx(CC, IC), HC(IC, {
        code: sC.too_small,
        message: fC.message,
        inclusive: !0,
        exact: !1,
        minimum: fC.value,
        type: "date"
      }), yC.mY()) : "max" === fC.kind ? CC.data.getTime() > fC.value && (IC = this._getOrReturnCtx(CC, IC), HC(IC, {
        code: sC.too_big,
        message: fC.message,
        inclusive: !0,
        exact: !1,
        maximum: fC.value,
        type: "date"
      }), yC.mY()) : GC.assertNever(fC);
    }
    return {
      status: yC.value,
      value: new Date(CC.data.getTime())
    };
  }
  _addCheck(CC) {
    return new yy((0, SC.d)((0, SC.d)({}, this._def), {}, {
      checks: [...this._def.checks, CC]
    }));
  }
  min(CC, yC) {
    return this._addCheck({
      kind: "min",
      value: CC.getTime(),
      message: zC.toString(yC)
    });
  }
  max(CC, yC) {
    return this._addCheck({
      kind: "max",
      value: CC.getTime(),
      message: zC.toString(yC)
    });
  }
  get minDate() {
    let CC = null;
    for (const yC of this._def.checks) {
      "min" === yC.kind && (null === CC || yC.value > CC) && (CC = yC.value);
    }
    return null != CC ? new Date(CC) : null;
  }
  get maxDate() {
    let CC = null;
    for (const yC of this._def.checks) {
      "max" === yC.kind && (null === CC || yC.value < CC) && (CC = yC.value);
    }
    return null != CC ? new Date(CC) : null;
  }
}
yy.create = CC => new yy((0, SC.d)({
  checks: [],
  coerce: (null === CC || void 0 === CC ? void 0 : CC.coerce) || !1,
  typeName: Fy.ZodDate
}, JC(CC)));
class Iy extends nC {
  _parse(CC) {
    if (this._getType(CC) !== TC.symbol) {
      const yC = this._getOrReturnCtx(CC);
      HC(yC, {
        code: sC.invalid_type,
        expected: TC.symbol,
        received: yC.parsedType
      });
      return cC;
    }
    return EC(CC.data);
  }
}
Iy.create = CC => new Iy((0, SC.d)({
  typeName: Fy.ZodSymbol
}, JC(CC)));
class fy extends nC {
  _parse(CC) {
    if (this._getType(CC) !== TC.undefined) {
      const yC = this._getOrReturnCtx(CC);
      HC(yC, {
        code: sC.invalid_type,
        expected: TC.undefined,
        received: yC.parsedType
      });
      return cC;
    }
    return EC(CC.data);
  }
}
fy.create = CC => new fy((0, SC.d)({
  typeName: Fy.ZodUndefined
}, JC(CC)));
class kI extends nC {
  _parse(CC) {
    if (this._getType(CC) !== TC.null) {
      const yC = this._getOrReturnCtx(CC);
      HC(yC, {
        code: sC.invalid_type,
        expected: TC.null,
        received: yC.parsedType
      });
      return cC;
    }
    return EC(CC.data);
  }
}
kI.create = CC => new kI((0, SC.d)({
  typeName: Fy.ZodNull
}, JC(CC)));
class gy extends nC {
  constructor() {
    super(...arguments);
    this._any = !0;
  }
  _parse(CC) {
    return EC(CC.data);
  }
}
gy.create = CC => new gy((0, SC.d)({
  typeName: Fy.ZodAny
}, JC(CC)));
class Ay extends nC {
  constructor() {
    super(...arguments);
    this._unknown = !0;
  }
  _parse(CC) {
    return EC(CC.data);
  }
}
Ay.create = CC => new Ay((0, SC.d)({
  typeName: Fy.ZodUnknown
}, JC(CC)));
class mI extends nC {
  _parse(CC) {
    const yC = this._getOrReturnCtx(CC);
    HC(yC, {
      code: sC.invalid_type,
      expected: TC.never,
      received: yC.parsedType
    });
    return cC;
  }
}
mI.create = CC => new mI((0, SC.d)({
  typeName: Fy.ZodNever
}, JC(CC)));
class Xy extends nC {
  _parse(CC) {
    if (this._getType(CC) !== TC.undefined) {
      const yC = this._getOrReturnCtx(CC);
      HC(yC, {
        code: sC.invalid_type,
        expected: TC.void,
        received: yC.parsedType
      });
      return cC;
    }
    return EC(CC.data);
  }
}
Xy.create = CC => new Xy((0, SC.d)({
  typeName: Fy.ZodVoid
}, JC(CC)));
class iI extends nC {
  _parse(CC) {
    const {
      ctx: yC,
      status: IC
    } = this._processInputParams(CC);
    const fC = this._def;
    if (yC.parsedType !== TC.array) {
      HC(yC, {
        code: sC.invalid_type,
        expected: TC.array,
        received: yC.parsedType
      });
      return cC;
    }
    if (null !== fC.exactLength) {
      const CC = yC.data.length > fC.exactLength.value;
      const ky = yC.data.length < fC.exactLength.value;
      (CC || ky) && (HC(yC, {
        code: CC ? sC.too_big : sC.too_small,
        minimum: ky ? fC.exactLength.value : void 0,
        maximum: CC ? fC.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: fC.exactLength.message
      }), IC.mY());
    }
    null !== fC.minLength && yC.data.length < fC.minLength.value && (HC(yC, {
      code: sC.too_small,
      minimum: fC.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: fC.minLength.message
    }), IC.mY());
    null !== fC.maxLength && yC.data.length > fC.maxLength.value && (HC(yC, {
      code: sC.too_big,
      maximum: fC.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: fC.maxLength.message
    }), IC.mY());
    if (yC.common.async) {
      return Promise.all([...yC.data].map((CC, IC) => fC.type._parseAsync(new BC(yC, CC, yC.path, IC)))).then(CC => aC.mergeArray(IC, CC));
    }
    const ky = [...yC.data].map((CC, IC) => fC.type._parseSync(new BC(yC, CC, yC.path, IC)));
    return aC.mergeArray(IC, ky);
  }
  get element() {
    return this._def.type;
  }
  min(CC, yC) {
    return new iI((0, SC.d)((0, SC.d)({}, this._def), {}, {
      minLength: {
        value: CC,
        message: zC.toString(yC)
      }
    }));
  }
  max(CC, yC) {
    return new iI((0, SC.d)((0, SC.d)({}, this._def), {}, {
      maxLength: {
        value: CC,
        message: zC.toString(yC)
      }
    }));
  }
  length(CC, yC) {
    return new iI((0, SC.d)((0, SC.d)({}, this._def), {}, {
      exactLength: {
        value: CC,
        message: zC.toString(yC)
      }
    }));
  }
  nonempty(CC) {
    return this.min(1, CC);
  }
}
function Ly(CC) {
  if (CC instanceof Yy) {
    const yC = {};
    for (const IC in CC.shape) {
      const fC = CC.shape[IC];
      yC[IC] = Uy.create(Ly(fC));
    }
    return new Yy((0, SC.d)((0, SC.d)({}, CC._def), {}, {
      shape: () => yC
    }));
  }
  return CC instanceof iI ? new iI((0, SC.d)((0, SC.d)({}, CC._def), {}, {
    type: Ly(CC.element)
  })) : CC instanceof Uy ? Uy.create(Ly(CC.unwrap())) : CC instanceof Ey ? Ey.create(Ly(CC.unwrap())) : CC instanceof Sy ? Sy.create(CC.items.map(CC => Ly(CC))) : CC;
}
iI.create = (CC, yC) => new iI((0, SC.d)({
  type: CC,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: Fy.ZodArray
}, JC(yC)));
class Yy extends nC {
  constructor() {
    super(...arguments);
    this._cached = null;
    this.nonstrict = this.passthrough;
    this.augment = this.extend;
  }
  _getCached() {
    if (null !== this._cached) {
      return this._cached;
    }
    const CC = this._def.shape();
    const yC = GC.objectKeys(CC);
    return this._cached = {
      shape: CC,
      keys: yC
    };
  }
  _parse(CC) {
    if (this._getType(CC) !== TC.object) {
      const yC = this._getOrReturnCtx(CC);
      HC(yC, {
        code: sC.invalid_type,
        expected: TC.object,
        received: yC.parsedType
      });
      return cC;
    }
    const {
      status: yC,
      ctx: IC
    } = this._processInputParams(CC);
    const {
      shape: fC,
      keys: ky
    } = this._getCached();
    const gC = [];
    if (!(this._def.catchall instanceof mI && "strip" === this._def.unknownKeys)) {
      for (const my in IC.data) {
        ky.includes(my) || gC.push(my);
      }
    }
    const AC = [];
    for (const my of ky) {
      const CC = fC[my];
      const yC = IC.data[my];
      AC.push({
        key: {
          status: "valid",
          value: my
        },
        value: CC._parse(new BC(IC, yC, IC.path, my)),
        alwaysSet: my in IC.data
      });
    }
    if (this._def.catchall instanceof mI) {
      const CC = this._def.unknownKeys;
      if ("passthrough" === CC) {
        for (const yC of gC) {
          AC.push({
            key: {
              status: "valid",
              value: yC
            },
            value: {
              status: "valid",
              value: IC.data[yC]
            }
          });
        }
      } else {
        if ("strict" === CC) {
          gC.length > 0 && (HC(IC, {
            code: sC.unrecognized_keys,
            keys: gC
          }), yC.mY());
        } else {
          if ("strip" !== CC) {
            throw new Error("Internal ZodObject error: invalid unknownKeys value.");
          }
        }
      }
    } else {
      const CC = this._def.catchall;
      for (const yC of gC) {
        const fC = IC.data[yC];
        AC.push({
          key: {
            status: "valid",
            value: yC
          },
          value: CC._parse(new BC(IC, fC, IC.path, yC)),
          alwaysSet: yC in IC.data
        });
      }
    }
    return IC.common.async ? Promise.resolve().then(async () => {
      const CC = [];
      for (const yC of AC) {
        const IC = await yC.key;
        CC.push({
          key: IC,
          value: await yC.value,
          alwaysSet: yC.alwaysSet
        });
      }
      return CC;
    }).then(CC => aC.mergeObjectSync(yC, CC)) : aC.mergeObjectSync(yC, AC);
  }
  get shape() {
    return this._def.shape();
  }
  strict(CC) {
    zC.errToObj;
    return new Yy((0, SC.d)((0, SC.d)({}, this._def), {}, {
      unknownKeys: "strict"
    }, void 0 !== CC ? {
      errorMap: (yC, IC) => {
        var fC;
        var ky;
        var gC;
        var AC;
        const my = null !== (gC = null === (ky = (fC = this._def).errorMap) || void 0 === ky ? void 0 : ky.call(fC, yC, IC).message) && void 0 !== gC ? gC : IC.defaultError;
        return "unrecognized_keys" === yC.code ? {
          message: null !== (AC = zC.errToObj(CC).message) && void 0 !== AC ? AC : my
        } : {
          message: my
        };
      }
    } : {}));
  }
  strip() {
    return new Yy((0, SC.d)((0, SC.d)({}, this._def), {}, {
      unknownKeys: "strip"
    }));
  }
  passthrough() {
    return new Yy((0, SC.d)((0, SC.d)({}, this._def), {}, {
      unknownKeys: "passthrough"
    }));
  }
  extend(CC) {
    return new Yy((0, SC.d)((0, SC.d)({}, this._def), {}, {
      shape: () => (0, SC.d)((0, SC.d)({}, this._def.shape()), CC)
    }));
  }
  merge(CC) {
    return new Yy({
      unknownKeys: CC._def.unknownKeys,
      catchall: CC._def.catchall,
      shape: () => (0, SC.d)((0, SC.d)({}, this._def.shape()), CC._def.shape()),
      typeName: Fy.ZodObject
    });
  }
  setKey(CC, yC) {
    return this.augment({
      [CC]: yC
    });
  }
  catchall(CC) {
    return new Yy((0, SC.d)((0, SC.d)({}, this._def), {}, {
      catchall: CC
    }));
  }
  iY(CC) {
    const yC = {};
    GC.objectKeys(CC).forEach(IC => {
      CC[IC] && this.shape[IC] && (yC[IC] = this.shape[IC]);
    });
    return new Yy((0, SC.d)((0, SC.d)({}, this._def), {}, {
      shape: () => yC
    }));
  }
  omit(CC) {
    const yC = {};
    GC.objectKeys(this.shape).forEach(IC => {
      CC[IC] || (yC[IC] = this.shape[IC]);
    });
    return new Yy((0, SC.d)((0, SC.d)({}, this._def), {}, {
      shape: () => yC
    }));
  }
  deepPartial() {
    return Ly(this);
  }
  partial(CC) {
    const yC = {};
    GC.objectKeys(this.shape).forEach(IC => {
      const fC = this.shape[IC];
      CC && !CC[IC] ? yC[IC] = fC : yC[IC] = fC.optional();
    });
    return new Yy((0, SC.d)((0, SC.d)({}, this._def), {}, {
      shape: () => yC
    }));
  }
  required(CC) {
    const yC = {};
    GC.objectKeys(this.shape).forEach(IC => {
      if (CC && !CC[IC]) {
        yC[IC] = this.shape[IC];
      } else {
        let CC = this.shape[IC];
        for (; CC instanceof Uy;) {
          CC = CC._def.innerType;
        }
        yC[IC] = CC;
      }
    });
    return new Yy((0, SC.d)((0, SC.d)({}, this._def), {}, {
      shape: () => yC
    }));
  }
  keyof() {
    return py(GC.objectKeys(this.shape));
  }
}
Yy.create = (CC, yC) => new Yy((0, SC.d)({
  shape: () => CC,
  unknownKeys: "strip",
  catchall: mI.create(),
  typeName: Fy.ZodObject
}, JC(yC)));
Yy.strictCreate = (CC, yC) => new Yy((0, SC.d)({
  shape: () => CC,
  unknownKeys: "strict",
  catchall: mI.create(),
  typeName: Fy.ZodObject
}, JC(yC)));
Yy.lazycreate = (CC, yC) => new Yy((0, SC.d)({
  shape: CC,
  unknownKeys: "strip",
  catchall: mI.create(),
  typeName: Fy.ZodObject
}, JC(yC)));
class by extends nC {
  _parse(CC) {
    const {
      ctx: yC
    } = this._processInputParams(CC);
    const IC = this._def.options;
    if (yC.common.async) {
      return Promise.all(IC.map(async CC => {
        const IC = (0, SC.d)((0, SC.d)({}, yC), {}, {
          common: (0, SC.d)((0, SC.d)({}, yC.common), {}, {
            issues: []
          }),
          parent: null
        });
        return {
          result: await CC._parseAsync({
            data: yC.data,
            path: yC.path,
            parent: IC
          }),
          ctx: IC
        };
      })).then(function (CC) {
        for (const yC of CC) {
          if ("valid" === yC.result.status) {
            return yC.result;
          }
        }
        for (const fC of CC) {
          if ("mY" === fC.result.status) {
            yC.common.issues.push(...fC.ctx.common.issues);
            return fC.result;
          }
        }
        const IC = CC.map(CC => new jy(CC.ctx.common.issues));
        HC(yC, {
          code: sC.invalid_union,
          unionErrors: IC
        });
        return cC;
      });
    }
    {
      let CC;
      const fC = [];
      for (const gC of IC) {
        const IC = (0, SC.d)((0, SC.d)({}, yC), {}, {
          common: (0, SC.d)((0, SC.d)({}, yC.common), {}, {
            issues: []
          }),
          parent: null
        });
        const ky = gC._parseSync({
          data: yC.data,
          path: yC.path,
          parent: IC
        });
        if ("valid" === ky.status) {
          return ky;
        }
        "mY" !== ky.status || CC || (CC = {
          result: ky,
          ctx: IC
        });
        IC.common.issues.length && fC.push(IC.common.issues);
      }
      if (CC) {
        yC.common.issues.push(...CC.ctx.common.issues);
        return CC.result;
      }
      const ky = fC.map(CC => new jy(CC));
      HC(yC, {
        code: sC.invalid_union,
        unionErrors: ky
      });
      return cC;
    }
  }
  get options() {
    return this._def.options;
  }
}
by.create = (CC, yC) => new by((0, SC.d)({
  options: CC,
  typeName: Fy.ZodUnion
}, JC(yC)));
const ry = CC => CC instanceof qy ? ry(CC.schema) : CC instanceof cy ? ry(CC.innerType()) : CC instanceof Ky ? [CC.value] : CC instanceof wy ? CC.options : CC instanceof Hy ? Object.keys(CC.enum) : CC instanceof Vy ? ry(CC._def.innerType) : CC instanceof fy ? [void 0] : CC instanceof kI ? [null] : null;
class Gy extends nC {
  _parse(CC) {
    const {
      ctx: yC
    } = this._processInputParams(CC);
    if (yC.parsedType !== TC.object) {
      HC(yC, {
        code: sC.invalid_type,
        expected: TC.object,
        received: yC.parsedType
      });
      return cC;
    }
    const IC = this.discriminator;
    const fC = yC.data[IC];
    const ky = this.optionsMap.get(fC);
    return ky ? yC.common.async ? ky._parseAsync({
      data: yC.data,
      path: yC.path,
      parent: yC
    }) : ky._parseSync({
      data: yC.data,
      path: yC.path,
      parent: yC
    }) : (HC(yC, {
      code: sC.invalid_union_discriminator,
      options: Array.from(this.optionsMap.keys()),
      path: [IC]
    }), cC);
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  static create(CC, yC, IC) {
    const fC = new Map();
    for (const ky of yC) {
      const yC = ry(ky.shape[CC]);
      if (!yC) {
        throw new Error("A discriminator value for key `".concat(CC, "` could not be extracted from all schema options"));
      }
      for (const IC of yC) {
        if (fC.has(IC)) {
          throw new Error("Discriminator property ".concat(String(CC), " has duplicate value ").concat(String(IC)));
        }
        fC.set(IC, ky);
      }
    }
    return new Gy((0, SC.d)({
      typeName: Fy.ZodDiscriminatedUnion,
      discriminator: CC,
      options: yC,
      optionsMap: fC
    }, JC(IC)));
  }
}
function ey(CC, yC) {
  const IC = NC(CC);
  const fC = NC(yC);
  if (CC === yC) {
    return {
      valid: !0,
      data: CC
    };
  }
  if (IC === TC.object && fC === TC.object) {
    const IC = GC.objectKeys(yC);
    const fC = GC.objectKeys(CC).filter(CC => -1 !== IC.indexOf(CC));
    const ky = (0, SC.d)((0, SC.d)({}, CC), yC);
    for (const gC of fC) {
      const IC = ey(CC[gC], yC[gC]);
      if (!IC.valid) {
        return {
          valid: !1
        };
      }
      ky[gC] = IC.data;
    }
    return {
      valid: !0,
      data: ky
    };
  }
  if (IC === TC.array && fC === TC.array) {
    if (CC.length !== yC.length) {
      return {
        valid: !1
      };
    }
    const IC = [];
    for (let fC = 0; fC < CC.length; fC++) {
      const ky = ey(CC[fC], yC[fC]);
      if (!ky.valid) {
        return {
          valid: !1
        };
      }
      IC.push(ky.data);
    }
    return {
      valid: !0,
      data: IC
    };
  }
  return IC === TC.date && fC === TC.date && +CC === +yC ? {
    valid: !0,
    data: CC
  } : {
    valid: !1
  };
}
class Oy extends nC {
  _parse(CC) {
    const {
      status: yC,
      ctx: IC
    } = this._processInputParams(CC);
    const fC = (CC, fC) => {
      if (VC(CC) || VC(fC)) {
        return cC;
      }
      const ky = ey(CC.value, fC.value);
      return ky.valid ? ((WC(CC) || WC(fC)) && yC.mY(), {
        status: yC.value,
        value: ky.data
      }) : (HC(IC, {
        code: sC.invalid_intersection_types
      }), cC);
    };
    return IC.common.async ? Promise.all([this._def.left._parseAsync({
      data: IC.data,
      path: IC.path,
      parent: IC
    }), this._def.right._parseAsync({
      data: IC.data,
      path: IC.path,
      parent: IC
    })]).then(CC => {
      let [yC, IC] = CC;
      return fC(yC, IC);
    }) : fC(this._def.left._parseSync({
      data: IC.data,
      path: IC.path,
      parent: IC
    }), this._def.right._parseSync({
      data: IC.data,
      path: IC.path,
      parent: IC
    }));
  }
}
Oy.create = (CC, yC, IC) => new Oy((0, SC.d)({
  left: CC,
  right: yC,
  typeName: Fy.ZodIntersection
}, JC(IC)));
class Sy extends nC {
  _parse(CC) {
    const {
      status: yC,
      ctx: IC
    } = this._processInputParams(CC);
    if (IC.parsedType !== TC.array) {
      HC(IC, {
        code: sC.invalid_type,
        expected: TC.array,
        received: IC.parsedType
      });
      return cC;
    }
    if (IC.data.length < this._def.items.length) {
      HC(IC, {
        code: sC.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      });
      return cC;
    }
    !this._def.rest && IC.data.length > this._def.items.length && (HC(IC, {
      code: sC.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), yC.mY());
    const fC = [...IC.data].map((CC, yC) => {
      const fC = this._def.items[yC] || this._def.rest;
      return fC ? fC._parse(new BC(IC, CC, IC.path, yC)) : null;
    }).filter(CC => !!CC);
    return IC.common.async ? Promise.all(fC).then(CC => aC.mergeArray(yC, CC)) : aC.mergeArray(yC, fC);
  }
  get items() {
    return this._def.items;
  }
  rest(CC) {
    return new Sy((0, SC.d)((0, SC.d)({}, this._def), {}, {
      rest: CC
    }));
  }
}
Sy.create = (CC, yC) => {
  if (!Array.isArray(CC)) {
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  }
  return new Sy((0, SC.d)({
    items: CC,
    typeName: Fy.ZodTuple,
    rest: null
  }, JC(yC)));
};
class Ty extends nC {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(CC) {
    const {
      status: yC,
      ctx: IC
    } = this._processInputParams(CC);
    if (IC.parsedType !== TC.object) {
      HC(IC, {
        code: sC.invalid_type,
        expected: TC.object,
        received: IC.parsedType
      });
      return cC;
    }
    const fC = [];
    const ky = this._def.keyType;
    const gC = this._def.valueType;
    for (const AC in IC.data) {
      fC.push({
        key: ky._parse(new BC(IC, AC, IC.path, AC)),
        value: gC._parse(new BC(IC, IC.data[AC], IC.path, AC))
      });
    }
    return IC.common.async ? aC.mergeObjectAsync(yC, fC) : aC.mergeObjectSync(yC, fC);
  }
  get element() {
    return this._def.valueType;
  }
  static create(CC, yC, IC) {
    return new Ty(yC instanceof nC ? (0, SC.d)({
      keyType: CC,
      valueType: yC,
      typeName: Fy.ZodRecord
    }, JC(IC)) : (0, SC.d)({
      keyType: RC.create(),
      valueType: CC,
      typeName: Fy.ZodRecord
    }, JC(yC)));
  }
}
class Ny extends nC {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(CC) {
    const {
      status: yC,
      ctx: IC
    } = this._processInputParams(CC);
    if (IC.parsedType !== TC.map) {
      HC(IC, {
        code: sC.invalid_type,
        expected: TC.map,
        received: IC.parsedType
      });
      return cC;
    }
    const fC = this._def.keyType;
    const ky = this._def.valueType;
    const gC = [...IC.data.entries()].map((CC, yC) => {
      let [gC, AC] = CC;
      return {
        key: fC._parse(new BC(IC, gC, IC.path, [yC, "key"])),
        value: ky._parse(new BC(IC, AC, IC.path, [yC, "value"]))
      };
    });
    if (IC.common.async) {
      const CC = new Map();
      return Promise.resolve().then(async () => {
        for (const IC of gC) {
          const fC = await IC.key;
          const ky = await IC.value;
          if ("aborted" === fC.status || "aborted" === ky.status) {
            return cC;
          }
          "mY" !== fC.status && "mY" !== ky.status || yC.mY();
          CC.set(fC.value, ky.value);
        }
        return {
          status: yC.value,
          value: CC
        };
      });
    }
    {
      const CC = new Map();
      for (const IC of gC) {
        const fC = IC.key;
        const ky = IC.value;
        if ("aborted" === fC.status || "aborted" === ky.status) {
          return cC;
        }
        "mY" !== fC.status && "mY" !== ky.status || yC.mY();
        CC.set(fC.value, ky.value);
      }
      return {
        status: yC.value,
        value: CC
      };
    }
  }
}
Ny.create = (CC, yC, IC) => new Ny((0, SC.d)({
  valueType: yC,
  keyType: CC,
  typeName: Fy.ZodMap
}, JC(IC)));
class sy extends nC {
  _parse(CC) {
    const {
      status: yC,
      ctx: IC
    } = this._processInputParams(CC);
    if (IC.parsedType !== TC.set) {
      HC(IC, {
        code: sC.invalid_type,
        expected: TC.set,
        received: IC.parsedType
      });
      return cC;
    }
    const fC = this._def;
    null !== fC.minSize && IC.data.size < fC.minSize.value && (HC(IC, {
      code: sC.too_small,
      minimum: fC.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: fC.minSize.message
    }), yC.mY());
    null !== fC.maxSize && IC.data.size > fC.maxSize.value && (HC(IC, {
      code: sC.too_big,
      maximum: fC.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: fC.maxSize.message
    }), yC.mY());
    const ky = this._def.valueType;
    function gC(CC) {
      const IC = new Set();
      for (const fC of CC) {
        if ("aborted" === fC.status) {
          return cC;
        }
        "mY" === fC.status && yC.mY();
        IC.add(fC.value);
      }
      return {
        status: yC.value,
        value: IC
      };
    }
    const AC = [...IC.data.values()].map((CC, yC) => ky._parse(new BC(IC, CC, IC.path, yC)));
    return IC.common.async ? Promise.all(AC).then(CC => gC(CC)) : gC(AC);
  }
  min(CC, yC) {
    return new sy((0, SC.d)((0, SC.d)({}, this._def), {}, {
      minSize: {
        value: CC,
        message: zC.toString(yC)
      }
    }));
  }
  max(CC, yC) {
    return new sy((0, SC.d)((0, SC.d)({}, this._def), {}, {
      maxSize: {
        value: CC,
        message: zC.toString(yC)
      }
    }));
  }
  size(CC, yC) {
    return this.min(CC, yC).max(CC, yC);
  }
  nonempty(CC) {
    return this.min(1, CC);
  }
}
sy.create = (CC, yC) => new sy((0, SC.d)({
  valueType: CC,
  minSize: null,
  maxSize: null,
  typeName: Fy.ZodSet
}, JC(yC)));
class jI extends nC {
  constructor() {
    super(...arguments);
    this.validate = this.implement;
  }
  _parse(CC) {
    const {
      ctx: yC
    } = this._processInputParams(CC);
    if (yC.parsedType !== TC.function) {
      HC(yC, {
        code: sC.invalid_type,
        expected: TC.function,
        received: yC.parsedType
      });
      return cC;
    }
    function IC(CC, IC) {
      return wC({
        data: CC,
        path: yC.path,
        errorMaps: [yC.common.contextualErrorMap, yC.schemaErrorMap, pC(), qC].filter(CC => !!CC),
        issueData: {
          code: sC.invalid_arguments,
          argumentsError: IC
        }
      });
    }
    function fC(CC, IC) {
      return wC({
        data: CC,
        path: yC.path,
        errorMaps: [yC.common.contextualErrorMap, yC.schemaErrorMap, pC(), qC].filter(CC => !!CC),
        issueData: {
          code: sC.invalid_return_type,
          returnTypeError: IC
        }
      });
    }
    const ky = {
      errorMap: yC.common.contextualErrorMap
    };
    const gC = yC.data;
    if (this._def.returns instanceof ay) {
      const CC = this;
      return EC(async function () {
        for (var yC = arguments.length, AC = new Array(yC), my = 0; my < yC; my++) {
          AC[my] = arguments[my];
        }
        const XC = new jy([]);
        const iy = await CC._def.args.parseAsync(AC, ky).catch(CC => {
          XC.addIssue(IC(AC, CC));
          throw XC;
        });
        const LC = await Reflect.apply(gC, this, iy);
        return await CC._def.returns._def.type.parseAsync(LC, ky).catch(CC => {
          XC.addIssue(fC(LC, CC));
          throw XC;
        });
      });
    }
    {
      const CC = this;
      return EC(function () {
        for (var yC = arguments.length, AC = new Array(yC), my = 0; my < yC; my++) {
          AC[my] = arguments[my];
        }
        const XC = CC._def.args.safeParse(AC, ky);
        if (!XC.success) {
          throw new jy([IC(AC, XC.error)]);
        }
        const iy = Reflect.apply(gC, this, XC.data);
        const LC = CC._def.returns.safeParse(iy, ky);
        if (!LC.success) {
          throw new jy([fC(iy, LC.error)]);
        }
        return LC.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args() {
    for (var CC = arguments.length, yC = new Array(CC), IC = 0; IC < CC; IC++) {
      yC[IC] = arguments[IC];
    }
    return new jI((0, SC.d)((0, SC.d)({}, this._def), {}, {
      args: Sy.create(yC).rest(Ay.create())
    }));
  }
  returns(CC) {
    return new jI((0, SC.d)((0, SC.d)({}, this._def), {}, {
      returns: CC
    }));
  }
  implement(CC) {
    return this.parse(CC);
  }
  strictImplement(CC) {
    return this.parse(CC);
  }
  static create(CC, yC, IC) {
    return new jI((0, SC.d)({
      args: CC || Sy.create([]).rest(Ay.create()),
      returns: yC || Ay.create(),
      typeName: Fy.ZodFunction
    }, JC(IC)));
  }
}
class qy extends nC {
  get schema() {
    return this._def.getter();
  }
  _parse(CC) {
    const {
      ctx: yC
    } = this._processInputParams(CC);
    return this._def.getter()._parse({
      data: yC.data,
      path: yC.path,
      parent: yC
    });
  }
}
qy.create = (CC, yC) => new qy((0, SC.d)({
  getter: CC,
  typeName: Fy.ZodLazy
}, JC(yC)));
class Ky extends nC {
  _parse(CC) {
    if (CC.data !== this._def.value) {
      const yC = this._getOrReturnCtx(CC);
      HC(yC, {
        received: yC.data,
        code: sC.invalid_literal,
        expected: this._def.value
      });
      return cC;
    }
    return {
      status: "valid",
      value: CC.data
    };
  }
  get value() {
    return this._def.value;
  }
}
function py(CC, yC) {
  return new wy((0, SC.d)({
    values: CC,
    typeName: Fy.ZodEnum
  }, JC(yC)));
}
Ky.create = (CC, yC) => new Ky((0, SC.d)({
  value: CC,
  typeName: Fy.ZodLiteral
}, JC(yC)));
class wy extends nC {
  _parse(CC) {
    if ("string" !== typeof CC.data) {
      const yC = this._getOrReturnCtx(CC);
      const IC = this._def.values;
      HC(yC, {
        expected: GC.joinValues(IC),
        received: yC.parsedType,
        code: sC.invalid_type
      });
      return cC;
    }
    if (-1 === this._def.values.indexOf(CC.data)) {
      const yC = this._getOrReturnCtx(CC);
      const IC = this._def.values;
      HC(yC, {
        received: yC.data,
        code: sC.invalid_enum_value,
        options: IC
      });
      return cC;
    }
    return EC(CC.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const CC = {};
    for (const yC of this._def.values) {
      CC[yC] = yC;
    }
    return CC;
  }
  get Values() {
    const CC = {};
    for (const yC of this._def.values) {
      CC[yC] = yC;
    }
    return CC;
  }
  get Enum() {
    const CC = {};
    for (const yC of this._def.values) {
      CC[yC] = yC;
    }
    return CC;
  }
  extract(CC) {
    return wy.create(CC);
  }
  exclude(CC) {
    return wy.create(this.options.filter(yC => !CC.includes(yC)));
  }
}
wy.create = py;
class Hy extends nC {
  _parse(CC) {
    const yC = GC.getValidEnumValues(this._def.values);
    const IC = this._getOrReturnCtx(CC);
    if (IC.parsedType !== TC.string && IC.parsedType !== TC.number) {
      const CC = GC.objectValues(yC);
      HC(IC, {
        expected: GC.joinValues(CC),
        received: IC.parsedType,
        code: sC.invalid_type
      });
      return cC;
    }
    if (-1 === yC.indexOf(CC.data)) {
      const CC = GC.objectValues(yC);
      HC(IC, {
        received: IC.data,
        code: sC.invalid_enum_value,
        options: CC
      });
      return cC;
    }
    return EC(CC.data);
  }
  get enum() {
    return this._def.values;
  }
}
Hy.create = (CC, yC) => new Hy((0, SC.d)({
  values: CC,
  typeName: Fy.ZodNativeEnum
}, JC(yC)));
class ay extends nC {
  unwrap() {
    return this._def.type;
  }
  _parse(CC) {
    const {
      ctx: yC
    } = this._processInputParams(CC);
    if (yC.parsedType !== TC.promise && !1 === yC.common.async) {
      HC(yC, {
        code: sC.invalid_type,
        expected: TC.promise,
        received: yC.parsedType
      });
      return cC;
    }
    const IC = yC.parsedType === TC.promise ? yC.data : Promise.resolve(yC.data);
    return EC(IC.then(CC => this._def.type.parseAsync(CC, {
      path: yC.path,
      errorMap: yC.common.contextualErrorMap
    })));
  }
}
ay.create = (CC, yC) => new ay((0, SC.d)({
  type: CC,
  typeName: Fy.ZodPromise
}, JC(yC)));
class cy extends nC {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === Fy.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(CC) {
    const {
      status: yC,
      ctx: IC
    } = this._processInputParams(CC);
    const fC = this._def.effect || null;
    const ky = {
      addIssue: CC => {
        HC(IC, CC);
        CC.fatal ? yC.abort() : yC.mY();
      },
      get path() {
        return IC.path;
      }
    };
    ky.addIssue = ky.addIssue.bind(ky);
    if ("preprocess" === fC.type) {
      const CC = fC.transform(IC.data, ky);
      return IC.common.issues.length ? {
        status: "mY",
        value: IC.data
      } : IC.common.async ? Promise.resolve(CC).then(CC => this._def.schema._parseAsync({
        data: CC,
        path: IC.path,
        parent: IC
      })) : this._def.schema._parseSync({
        data: CC,
        path: IC.path,
        parent: IC
      });
    }
    if ("refinement" === fC.type) {
      const CC = CC => {
        const yC = fC.refinement(CC, ky);
        if (IC.common.async) {
          return Promise.resolve(yC);
        }
        if (yC instanceof Promise) {
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        }
        return CC;
      };
      if (!1 === IC.common.async) {
        const fC = this._def.schema._parseSync({
          data: IC.data,
          path: IC.path,
          parent: IC
        });
        return "aborted" === fC.status ? cC : ("mY" === fC.status && yC.mY(), CC(fC.value), {
          status: yC.value,
          value: fC.value
        });
      }
      return this._def.schema._parseAsync({
        data: IC.data,
        path: IC.path,
        parent: IC
      }).then(IC => "aborted" === IC.status ? cC : ("mY" === IC.status && yC.mY(), CC(IC.value).then(() => ({
        status: yC.value,
        value: IC.value
      }))));
    }
    if ("transform" === fC.type) {
      if (!1 === IC.common.async) {
        const CC = this._def.schema._parseSync({
          data: IC.data,
          path: IC.path,
          parent: IC
        });
        if (!xC(CC)) {
          return CC;
        }
        const gC = fC.transform(CC.value, ky);
        if (gC instanceof Promise) {
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        }
        return {
          status: yC.value,
          value: gC
        };
      }
      return this._def.schema._parseAsync({
        data: IC.data,
        path: IC.path,
        parent: IC
      }).then(CC => xC(CC) ? Promise.resolve(fC.transform(CC.value, ky)).then(CC => ({
        status: yC.value,
        value: CC
      })) : CC);
    }
    GC.assertNever(fC);
  }
}
cy.create = (CC, yC, IC) => new cy((0, SC.d)({
  schema: CC,
  typeName: Fy.ZodEffects,
  effect: yC
}, JC(IC)));
cy.createWithPreprocess = (CC, yC, IC) => new cy((0, SC.d)({
  schema: yC,
  effect: {
    type: "preprocess",
    transform: CC
  },
  typeName: Fy.ZodEffects
}, JC(IC)));
class Uy extends nC {
  _parse(CC) {
    return this._getType(CC) === TC.undefined ? EC(void 0) : this._def.innerType._parse(CC);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Uy.create = (CC, yC) => new Uy((0, SC.d)({
  innerType: CC,
  typeName: Fy.ZodOptional
}, JC(yC)));
class Ey extends nC {
  _parse(CC) {
    return this._getType(CC) === TC.null ? EC(null) : this._def.innerType._parse(CC);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Ey.create = (CC, yC) => new Ey((0, SC.d)({
  innerType: CC,
  typeName: Fy.ZodNullable
}, JC(yC)));
class Vy extends nC {
  _parse(CC) {
    const {
      ctx: yC
    } = this._processInputParams(CC);
    let IC = yC.data;
    yC.parsedType === TC.undefined && (IC = this._def.defaultValue());
    return this._def.innerType._parse({
      data: IC,
      path: yC.path,
      parent: yC
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
Vy.create = (CC, yC) => new Vy((0, SC.d)({
  innerType: CC,
  typeName: Fy.ZodDefault,
  defaultValue: "function" === typeof yC.default ? yC.default : () => yC.default
}, JC(yC)));
class Wy extends nC {
  _parse(CC) {
    const {
      ctx: yC
    } = this._processInputParams(CC);
    const IC = (0, SC.d)((0, SC.d)({}, yC), {}, {
      common: (0, SC.d)((0, SC.d)({}, yC.common), {}, {
        issues: []
      })
    });
    const fC = this._def.innerType._parse({
      data: IC.data,
      path: IC.path,
      parent: (0, SC.d)({}, IC)
    });
    return PC(fC) ? fC.then(CC => ({
      status: "valid",
      value: "valid" === CC.status ? CC.value : this._def.catchValue({
        get error() {
          return new jy(IC.common.issues);
        },
        input: IC.data
      })
    })) : {
      status: "valid",
      value: "valid" === fC.status ? fC.value : this._def.catchValue({
        get error() {
          return new jy(IC.common.issues);
        },
        input: IC.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
Wy.create = (CC, yC) => new Wy((0, SC.d)({
  innerType: CC,
  typeName: Fy.ZodCatch,
  catchValue: "function" === typeof yC.catch ? yC.catch : () => yC.catch
}, JC(yC)));
class xy extends nC {
  _parse(CC) {
    if (this._getType(CC) !== TC.nan) {
      const yC = this._getOrReturnCtx(CC);
      HC(yC, {
        code: sC.invalid_type,
        expected: TC.nan,
        received: yC.parsedType
      });
      return cC;
    }
    return {
      status: "valid",
      value: CC.data
    };
  }
}
xy.create = CC => new xy((0, SC.d)({
  typeName: Fy.ZodNaN
}, JC(CC)));
const Py = Symbol("zod_brand");
class zy extends nC {
  _parse(CC) {
    const {
      ctx: yC
    } = this._processInputParams(CC);
    const IC = yC.data;
    return this._def.type._parse({
      data: IC,
      path: yC.path,
      parent: yC
    });
  }
  unwrap() {
    return this._def.type;
  }
}
class By extends nC {
  _parse(CC) {
    const {
      status: yC,
      ctx: IC
    } = this._processInputParams(CC);
    if (IC.common.async) {
      return (async () => {
        const CC = await this._def.in._parseAsync({
          data: IC.data,
          path: IC.path,
          parent: IC
        });
        return "aborted" === CC.status ? cC : "mY" === CC.status ? (yC.mY(), UC(CC.value)) : this._def.out._parseAsync({
          data: CC.value,
          path: IC.path,
          parent: IC
        });
      })();
    }
    {
      const CC = this._def.in._parseSync({
        data: IC.data,
        path: IC.path,
        parent: IC
      });
      return "aborted" === CC.status ? cC : "mY" === CC.status ? (yC.mY(), {
        status: "mY",
        value: CC.value
      }) : this._def.out._parseSync({
        data: CC.value,
        path: IC.path,
        parent: IC
      });
    }
  }
  static create(CC, yC) {
    return new By({
      in: CC,
      out: yC,
      typeName: Fy.ZodPipeline
    });
  }
}
class ty extends nC {
  _parse(CC) {
    const yC = this._def.innerType._parse(CC);
    xC(yC) && (yC.value = Object.freeze(yC.value));
    return yC;
  }
}
ty.create = (CC, yC) => new ty((0, SC.d)({
  innerType: CC,
  typeName: Fy.ZodReadonly
}, JC(yC)));
const Jy = function (CC) {
  let yC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  let IC = arguments.length > 2 ? arguments[2] : void 0;
  return CC ? gy.create().superRefine((fC, ky) => {
    var gC;
    var AC;
    if (!CC(fC)) {
      const CC = "function" === typeof yC ? yC(fC) : "string" === typeof yC ? {
        message: yC
      } : yC;
      const my = null === (AC = null !== (gC = CC.fatal) && void 0 !== gC ? gC : IC) || void 0 === AC || AC;
      const XC = "string" === typeof CC ? {
        message: CC
      } : CC;
      ky.addIssue((0, SC.d)((0, SC.d)({
        code: "custom"
      }, XC), {}, {
        fatal: my
      }));
    }
  }) : gy.create();
};
const ny = {
  object: Yy.lazycreate
};
var Fy;
!function (CC) {
  CC.ZodString = "ZodString";
  CC.ZodNumber = "ZodNumber";
  CC.ZodNaN = "ZodNaN";
  CC.ZodBigInt = "ZodBigInt";
  CC.ZodBoolean = "ZodBoolean";
  CC.ZodDate = "ZodDate";
  CC.ZodSymbol = "ZodSymbol";
  CC.ZodUndefined = "ZodUndefined";
  CC.ZodNull = "ZodNull";
  CC.ZodAny = "ZodAny";
  CC.ZodUnknown = "ZodUnknown";
  CC.ZodNever = "ZodNever";
  CC.ZodVoid = "ZodVoid";
  CC.ZodArray = "ZodArray";
  CC.ZodObject = "ZodObject";
  CC.ZodUnion = "ZodUnion";
  CC.ZodDiscriminatedUnion = "ZodDiscriminatedUnion";
  CC.ZodIntersection = "ZodIntersection";
  CC.ZodTuple = "ZodTuple";
  CC.ZodRecord = "ZodRecord";
  CC.ZodMap = "ZodMap";
  CC.ZodSet = "ZodSet";
  CC.ZodFunction = "ZodFunction";
  CC.ZodLazy = "ZodLazy";
  CC.ZodLiteral = "ZodLiteral";
  CC.ZodEnum = "ZodEnum";
  CC.ZodEffects = "ZodEffects";
  CC.ZodNativeEnum = "ZodNativeEnum";
  CC.ZodOptional = "ZodOptional";
  CC.ZodNullable = "ZodNullable";
  CC.ZodDefault = "ZodDefault";
  CC.ZodCatch = "ZodCatch";
  CC.ZodPromise = "ZodPromise";
  CC.ZodBranded = "ZodBranded";
  CC.ZodPipeline = "ZodPipeline";
  CC.ZodReadonly = "ZodReadonly";
}(Fy || (Fy = {}));
const uy = RC.create;
const Dy = QC.create;
const Zy = xy.create;
const ly = MC.create;
const oy = Cy.create;
const vy = yy.create;
const hy = Iy.create;
const Ry = fy.create;
const dy = kI.create;
const Qy = gy.create;
const My = Ay.create;
const CI = mI.create;
const yI = Xy.create;
const II = iI.create;
const fI = Yy.create;
const kf = Yy.strictCreate;
const gI = by.create;
const AI = Gy.create;
const mf = Oy.create;
const XI = Sy.create;
const LI = Ty.create;
const YI = Ny.create;
const bI = sy.create;
const rI = jI.create;
const GI = qy.create;
const eI = Ky.create;
const OI = wy.create;
const SI = Hy.create;
const TI = ay.create;
const NI = cy.create;
const sI = Uy.create;
const jf = Ey.create;
const qI = cy.createWithPreprocess;
const KI = By.create;
const pI = {
  string: CC => RC.create((0, SC.d)((0, SC.d)({}, CC), {}, {
    coerce: !0
  })),
  number: CC => QC.create((0, SC.d)((0, SC.d)({}, CC), {}, {
    coerce: !0
  })),
  boolean: CC => Cy.create((0, SC.d)((0, SC.d)({}, CC), {}, {
    coerce: !0
  })),
  bigint: CC => MC.create((0, SC.d)((0, SC.d)({}, CC), {}, {
    coerce: !0
  })),
  date: CC => yy.create((0, SC.d)((0, SC.d)({}, CC), {}, {
    coerce: !0
  }))
};
const wI = cC;
var HI = Object.freeze({
  __proto__: null,
  defaultErrorMap: qC,
  setErrorMap: function (CC) {
    KC = CC;
  },
  getErrorMap: pC,
  makeIssue: wC,
  EMPTY_PATH: [],
  addIssueToContext: HC,
  ParseStatus: aC,
  INVALID: cC,
  DIRTY: UC,
  OK: EC,
  isAborted: VC,
  isDirty: WC,
  isValid: xC,
  isAsync: PC,
  get util() {
    return GC;
  },
  get objectUtil() {
    return eC;
  },
  ZodParsedType: TC,
  getParsedType: NC,
  ZodType: nC,
  ZodString: RC,
  ZodNumber: QC,
  ZodBigInt: MC,
  ZodBoolean: Cy,
  ZodDate: yy,
  ZodSymbol: Iy,
  ZodUndefined: fy,
  ZodNull: kI,
  ZodAny: gy,
  ZodUnknown: Ay,
  ZodNever: mI,
  ZodVoid: Xy,
  ZodArray: iI,
  ZodObject: Yy,
  ZodUnion: by,
  ZodDiscriminatedUnion: Gy,
  ZodIntersection: Oy,
  ZodTuple: Sy,
  ZodRecord: Ty,
  ZodMap: Ny,
  ZodSet: sy,
  ZodFunction: jI,
  ZodLazy: qy,
  ZodLiteral: Ky,
  ZodEnum: wy,
  ZodNativeEnum: Hy,
  ZodPromise: ay,
  ZodEffects: cy,
  ZodTransformer: cy,
  ZodOptional: Uy,
  ZodNullable: Ey,
  ZodDefault: Vy,
  ZodCatch: Wy,
  ZodNaN: xy,
  BRAND: Py,
  ZodBranded: zy,
  ZodPipeline: By,
  ZodReadonly: ty,
  custom: Jy,
  Schema: nC,
  ZodSchema: nC,
  late: ny,
  get ZodFirstPartyTypeKind() {
    return Fy;
  },
  coerce: pI,
  any: Qy,
  array: II,
  bigint: ly,
  boolean: oy,
  date: vy,
  discriminatedUnion: AI,
  effect: NI,
  enum: OI,
  function: rI,
  instanceof: function (CC) {
    let yC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
      message: "Input not instance of ".concat(CC.name)
    };
    return Jy(yC => yC instanceof CC, yC);
  },
  intersection: mf,
  lazy: GI,
  literal: eI,
  map: YI,
  nan: Zy,
  nativeEnum: SI,
  never: CI,
  null: dy,
  nullable: jf,
  number: Dy,
  object: fI,
  oboolean: () => oy().optional(),
  onumber: () => Dy().optional(),
  optional: sI,
  ostring: () => uy().optional(),
  pipeline: KI,
  preprocess: qI,
  promise: TI,
  record: LI,
  set: bI,
  strictObject: kf,
  string: uy,
  symbol: hy,
  transformer: NI,
  tuple: XI,
  undefined: Ry,
  union: gI,
  unknown: My,
  void: yI,
  NEVER: wI,
  ZodIssueCode: sC,
  quotelessJson: CC => JSON.stringify(CC, null, 2).replace(/"([^"]+)":/g, "$1:"),
  ZodError: jy
});
var aI = {
  exports: {}
};
!function (CC) {
  var yC = function (CC) {
    var IC = 1e7;
    var fC = 9007199254740992;
    var ky = bC(fC);
    var gC = "0123456789abcdefghijklmnopqrstuvwxyz";
    var AC = "function" === typeof BigInt;
    function my(CC, yC, IC, fC) {
      return "undefined" === typeof CC ? my[0] : "undefined" !== typeof yC && (10 !== +yC || IC) ? lC(CC, yC, IC, fC) : dC(CC);
    }
    function XC(CC, yC) {
      this.value = CC;
      this.sign = yC;
      this.isSmall = !1;
    }
    function iy(CC) {
      this.value = CC;
      this.sign = CC < 0;
      this.isSmall = !0;
    }
    function LC(CC) {
      this.value = CC;
    }
    function YC(CC) {
      return -fC < CC && CC < fC;
    }
    function bC(CC) {
      return CC < 1e7 ? [CC] : CC < 1e14 ? [CC % 1e7, Math.floor(CC / 1e7)] : [CC % 1e7, Math.floor(CC / 1e7) % 1e7, Math.floor(CC / 1e14)];
    }
    function rC(CC) {
      GC(CC);
      var yC = CC.length;
      if (yC < 4 && EC(CC, ky) < 0) {
        switch (yC) {
          case 0:
            return 0;
          case 1:
            return CC[0];
          case 2:
            return CC[0] + CC[1] * IC;
          default:
            return CC[0] + (CC[1] + CC[2] * IC) * IC;
        }
      }
      return CC;
    }
    function GC(CC) {
      for (var yC = CC.length; 0 === CC[--yC];);
      CC.length = yC + 1;
    }
    function eC(CC) {
      for (var yC = new Array(CC), IC = -1; ++IC < CC;) {
        yC[IC] = 0;
      }
      return yC;
    }
    function OC(CC) {
      return CC > 0 ? Math.floor(CC) : Math.ceil(CC);
    }
    function SC(CC, yC) {
      var fC;
      var ky;
      var gC = CC.length;
      var AC = yC.length;
      var my = new Array(gC);
      var XC = 0;
      var iy = IC;
      for (ky = 0; ky < AC; ky++) {
        XC = (fC = CC[ky] + yC[ky] + XC) >= iy ? 1 : 0;
        my[ky] = fC - XC * iy;
      }
      for (; ky < gC;) {
        XC = (fC = CC[ky] + XC) === iy ? 1 : 0;
        my[ky++] = fC - XC * iy;
      }
      XC > 0 && my.push(XC);
      return my;
    }
    function TC(CC, yC) {
      return CC.length >= yC.length ? SC(CC, yC) : SC(yC, CC);
    }
    function NC(CC, yC) {
      var fC;
      var ky;
      var gC = CC.length;
      var AC = new Array(gC);
      var my = IC;
      for (ky = 0; ky < gC; ky++) {
        fC = CC[ky] - my + yC;
        yC = Math.floor(fC / my);
        AC[ky] = fC - yC * my;
        yC += 1;
      }
      for (; yC > 0;) {
        AC[ky++] = yC % my;
        yC = Math.floor(yC / my);
      }
      return AC;
    }
    function sC(CC, yC) {
      var fC;
      var ky;
      var gC = CC.length;
      var AC = yC.length;
      var my = new Array(gC);
      var XC = 0;
      var iy = IC;
      for (fC = 0; fC < AC; fC++) {
        (ky = CC[fC] - XC - yC[fC]) < 0 ? (ky += iy, XC = 1) : XC = 0;
        my[fC] = ky;
      }
      for (fC = AC; fC < gC; fC++) {
        if (!((ky = CC[fC] - XC) < 0)) {
          my[fC++] = ky;
          break;
        }
        ky += iy;
        my[fC] = ky;
      }
      for (; fC < gC; fC++) {
        my[fC] = CC[fC];
      }
      GC(my);
      return my;
    }
    function jy(CC, yC, fC) {
      var ky;
      var gC;
      var AC = CC.length;
      var my = new Array(AC);
      var LC = -yC;
      var YC = IC;
      for (ky = 0; ky < AC; ky++) {
        gC = CC[ky] + LC;
        LC = Math.floor(gC / YC);
        gC %= YC;
        my[ky] = gC < 0 ? gC + YC : gC;
      }
      return "number" === typeof (my = rC(my)) ? (fC && (my = -my), new iy(my)) : new XC(my, fC);
    }
    function qC(CC, yC) {
      var fC;
      var ky;
      var gC;
      var AC;
      var my = CC.length;
      var XC = yC.length;
      var iy = eC(my + XC);
      var LC = IC;
      for (gC = 0; gC < my; ++gC) {
        AC = CC[gC];
        for (var YC = 0; YC < XC; ++YC) {
          fC = AC * yC[YC] + iy[gC + YC];
          ky = Math.floor(fC / LC);
          iy[gC + YC] = fC - ky * LC;
          iy[gC + YC + 1] += ky;
        }
      }
      GC(iy);
      return iy;
    }
    function KC(CC, yC) {
      var fC;
      var ky;
      var gC = CC.length;
      var AC = new Array(gC);
      var my = IC;
      var XC = 0;
      for (ky = 0; ky < gC; ky++) {
        fC = CC[ky] * yC + XC;
        XC = Math.floor(fC / my);
        AC[ky] = fC - XC * my;
      }
      for (; XC > 0;) {
        AC[ky++] = XC % my;
        XC = Math.floor(XC / my);
      }
      return AC;
    }
    function pC(CC, yC) {
      for (var IC = []; yC-- > 0;) {
        IC.push(0);
      }
      return IC.concat(CC);
    }
    function wC(CC, yC) {
      var IC = Math.max(CC.length, yC.length);
      if (IC <= 30) {
        return qC(CC, yC);
      }
      IC = Math.ceil(IC / 2);
      var fC = CC.slice(IC);
      var ky = CC.slice(0, IC);
      var gC = yC.slice(IC);
      var AC = yC.slice(0, IC);
      var my = wC(ky, AC);
      var XC = wC(fC, gC);
      var iy = wC(TC(ky, fC), TC(AC, gC));
      var LC = TC(TC(my, pC(sC(sC(iy, my), XC), IC)), pC(XC, 2 * IC));
      GC(LC);
      return LC;
    }
    function HC(CC, yC, fC) {
      return new XC(CC < IC ? KC(yC, CC) : qC(yC, bC(CC)), fC);
    }
    function aC(CC) {
      var yC;
      var fC;
      var ky;
      var gC;
      var AC = CC.length;
      var my = eC(AC + AC);
      var XC = IC;
      for (ky = 0; ky < AC; ky++) {
        fC = 0 - (gC = CC[ky]) * gC;
        for (var iy = ky; iy < AC; iy++) {
          yC = gC * CC[iy] * 2 + my[ky + iy] + fC;
          fC = Math.floor(yC / XC);
          my[ky + iy] = yC - fC * XC;
        }
        my[ky + AC] = fC;
      }
      GC(my);
      return my;
    }
    function cC(CC, yC) {
      var fC;
      var ky;
      var gC;
      var AC;
      var my = CC.length;
      var XC = eC(my);
      var iy = IC;
      gC = 0;
      fC = my - 1;
      for (; fC >= 0; --fC) {
        gC = (AC = gC * iy + CC[fC]) - (ky = OC(AC / yC)) * yC;
        XC[fC] = 0 | ky;
      }
      return [XC, 0 | gC];
    }
    function UC(CC, yC) {
      var fC;
      var ky = dC(yC);
      if (AC) {
        return [new LC(CC.value / ky.value), new LC(CC.value % ky.value)];
      }
      var gC;
      var YC = CC.value;
      var SC = ky.value;
      if (0 === SC) {
        throw new Error("Cannot divide by zero");
      }
      if (CC.isSmall) {
        return ky.isSmall ? [new iy(OC(YC / SC)), new iy(YC % SC)] : [my[0], CC];
      }
      if (ky.isSmall) {
        if (1 === SC) {
          return [CC, my[0]];
        }
        if (-1 == SC) {
          return [CC.negate(), my[0]];
        }
        var TC = Math.abs(SC);
        if (TC < IC) {
          gC = rC((fC = cC(YC, TC))[0]);
          var NC = fC[1];
          CC.sign && (NC = -NC);
          return "number" === typeof gC ? (CC.sign !== ky.sign && (gC = -gC), [new iy(gC), new iy(NC)]) : [new XC(gC, CC.sign !== ky.sign), new iy(NC)];
        }
        SC = bC(TC);
      }
      var jy = EC(YC, SC);
      if (-1 === jy) {
        return [my[0], CC];
      }
      if (0 === jy) {
        return [my[CC.sign === ky.sign ? 1 : -1], my[0]];
      }
      fC = YC.length + SC.length <= 200 ? function (CC, yC) {
        var fC;
        var ky;
        var gC;
        var AC;
        var my;
        var XC;
        var iy;
        var LC = CC.length;
        var YC = yC.length;
        var bC = IC;
        var GC = eC(yC.length);
        var OC = yC[YC - 1];
        var SC = Math.ceil(bC / (2 * OC));
        var TC = KC(CC, SC);
        var NC = KC(yC, SC);
        TC.length <= LC && TC.push(0);
        NC.push(0);
        OC = NC[YC - 1];
        ky = LC - YC;
        for (; ky >= 0; ky--) {
          fC = bC - 1;
          TC[ky + YC] !== OC && (fC = Math.floor((TC[ky + YC] * bC + TC[ky + YC - 1]) / OC));
          gC = 0;
          AC = 0;
          XC = NC.length;
          my = 0;
          for (; my < XC; my++) {
            gC += fC * NC[my];
            iy = Math.floor(gC / bC);
            AC += TC[ky + my] - (gC - iy * bC);
            gC = iy;
            AC < 0 ? (TC[ky + my] = AC + bC, AC = -1) : (TC[ky + my] = AC, AC = 0);
          }
          for (; 0 !== AC;) {
            fC -= 1;
            gC = 0;
            my = 0;
            for (; my < XC; my++) {
              (gC += TC[ky + my] - bC + NC[my]) < 0 ? (TC[ky + my] = gC + bC, gC = 0) : (TC[ky + my] = gC, gC = 1);
            }
            AC += gC;
          }
          GC[ky] = fC;
        }
        TC = cC(TC, SC)[0];
        return [rC(GC), rC(TC)];
      }(YC, SC) : function (CC, yC) {
        for (var fC, ky, gC, AC, my, XC = CC.length, iy = yC.length, LC = [], YC = [], bC = IC; XC;) {
          YC.unshift(CC[--XC]);
          GC(YC);
          if (EC(YC, yC) < 0) {
            LC.push(0);
          } else {
            gC = YC[(ky = YC.length) - 1] * bC + YC[ky - 2];
            AC = yC[iy - 1] * bC + yC[iy - 2];
            ky > iy && (gC = (gC + 1) * bC);
            fC = Math.ceil(gC / AC);
            do {
              if (EC(my = KC(yC, fC), YC) <= 0) {
                break;
              }
              fC--;
            } while (fC);
            LC.push(fC);
            YC = sC(YC, my);
          }
        }
        LC.reverse();
        return [rC(LC), rC(YC)];
      }(YC, SC);
      gC = fC[0];
      var qC = CC.sign !== ky.sign;
      var pC = fC[1];
      var wC = CC.sign;
      "number" === typeof gC ? (qC && (gC = -gC), gC = new iy(gC)) : gC = new XC(gC, qC);
      "number" === typeof pC ? (wC && (pC = -pC), pC = new iy(pC)) : pC = new XC(pC, wC);
      return [gC, pC];
    }
    function EC(CC, yC) {
      if (CC.length !== yC.length) {
        return CC.length > yC.length ? 1 : -1;
      }
      for (var IC = CC.length - 1; IC >= 0; IC--) {
        if (CC[IC] !== yC[IC]) {
          return CC[IC] > yC[IC] ? 1 : -1;
        }
      }
      return 0;
    }
    function VC(CC) {
      var yC = CC.abs();
      return !yC.isUnit() && (!!(yC.equals(2) || yC.equals(3) || yC.equals(5)) || !(yC.isEven() || yC.isDivisibleBy(3) || yC.isDivisibleBy(5)) && (!!yC.lesser(49) || void 0));
    }
    function WC(CC, IC) {
      for (var fC, ky, gC, AC = CC.prev(), my = AC, XC = 0; my.isEven();) {
        my = my.divide(2);
        XC++;
      }
      CC: for (ky = 0; ky < IC.length; ky++) {
        if (!CC.lesser(IC[ky]) && !(gC = yC(IC[ky]).modPow(my, CC)).isUnit() && !gC.equals(AC)) {
          for (fC = XC - 1; 0 != fC; fC--) {
            if ((gC = gC.square().mod(CC)).isUnit()) {
              return !1;
            }
            if (gC.equals(AC)) {
              continue CC;
            }
          }
          return !1;
        }
      }
      return !0;
    }
    XC.prototype = Object.create(my.prototype);
    iy.prototype = Object.create(my.prototype);
    LC.prototype = Object.create(my.prototype);
    XC.prototype.add = function (CC) {
      var yC = dC(CC);
      if (this.sign !== yC.sign) {
        return this.Wy(yC.negate());
      }
      var IC = this.value;
      var fC = yC.value;
      return yC.isSmall ? new XC(NC(IC, Math.abs(fC)), this.sign) : new XC(TC(IC, fC), this.sign);
    };
    XC.prototype.plus = XC.prototype.add;
    iy.prototype.add = function (CC) {
      var yC = dC(CC);
      var IC = this.value;
      if (IC < 0 !== yC.sign) {
        return this.Wy(yC.negate());
      }
      var fC = yC.value;
      if (yC.isSmall) {
        if (YC(IC + fC)) {
          return new iy(IC + fC);
        }
        fC = bC(Math.abs(fC));
      }
      return new XC(NC(fC, Math.abs(IC)), IC < 0);
    };
    iy.prototype.plus = iy.prototype.add;
    LC.prototype.add = function (CC) {
      return new LC(this.value + dC(CC).value);
    };
    LC.prototype.plus = LC.prototype.add;
    XC.prototype.Wy = function (CC) {
      var yC = dC(CC);
      if (this.sign !== yC.sign) {
        return this.add(yC.negate());
      }
      var IC = this.value;
      var fC = yC.value;
      return yC.isSmall ? jy(IC, Math.abs(fC), this.sign) : function (CC, yC, IC) {
        var fC;
        EC(CC, yC) >= 0 ? fC = sC(CC, yC) : (fC = sC(yC, CC), IC = !IC);
        return "number" === typeof (fC = rC(fC)) ? (IC && (fC = -fC), new iy(fC)) : new XC(fC, IC);
      }(IC, fC, this.sign);
    };
    XC.prototype.minus = XC.prototype.Wy;
    iy.prototype.Wy = function (CC) {
      var yC = dC(CC);
      var IC = this.value;
      if (IC < 0 !== yC.sign) {
        return this.add(yC.negate());
      }
      var fC = yC.value;
      return yC.isSmall ? new iy(IC - fC) : jy(fC, Math.abs(IC), IC >= 0);
    };
    iy.prototype.minus = iy.prototype.Wy;
    LC.prototype.Wy = function (CC) {
      return new LC(this.value - dC(CC).value);
    };
    LC.prototype.minus = LC.prototype.Wy;
    XC.prototype.negate = function () {
      return new XC(this.value, !this.sign);
    };
    iy.prototype.negate = function () {
      var CC = this.sign;
      var yC = new iy(-this.value);
      yC.sign = !CC;
      return yC;
    };
    LC.prototype.negate = function () {
      return new LC(-this.value);
    };
    XC.prototype.abs = function () {
      return new XC(this.value, !1);
    };
    iy.prototype.abs = function () {
      return new iy(Math.abs(this.value));
    };
    LC.prototype.abs = function () {
      return new LC(this.value >= 0 ? this.value : -this.value);
    };
    XC.prototype.multiply = function (CC) {
      var yC;
      var fC;
      var ky;
      var gC = dC(CC);
      var AC = this.value;
      var iy = gC.value;
      var LC = this.sign !== gC.sign;
      if (gC.isSmall) {
        if (0 === iy) {
          return my[0];
        }
        if (1 === iy) {
          return this;
        }
        if (-1 === iy) {
          return this.negate();
        }
        if ((yC = Math.abs(iy)) < IC) {
          return new XC(KC(AC, yC), LC);
        }
        iy = bC(yC);
      }
      fC = AC.length;
      ky = iy.length;
      return new XC(-.012 * fC - .012 * ky + 15e-6 * fC * ky > 0 ? wC(AC, iy) : qC(AC, iy), LC);
    };
    XC.prototype.times = XC.prototype.multiply;
    iy.prototype._multiplyBySmall = function (CC) {
      return YC(CC.value * this.value) ? new iy(CC.value * this.value) : HC(Math.abs(CC.value), bC(Math.abs(this.value)), this.sign !== CC.sign);
    };
    XC.prototype._multiplyBySmall = function (CC) {
      return 0 === CC.value ? my[0] : 1 === CC.value ? this : -1 === CC.value ? this.negate() : HC(Math.abs(CC.value), this.value, this.sign !== CC.sign);
    };
    iy.prototype.multiply = function (CC) {
      return dC(CC)._multiplyBySmall(this);
    };
    iy.prototype.times = iy.prototype.multiply;
    LC.prototype.multiply = function (CC) {
      return new LC(this.value * dC(CC).value);
    };
    LC.prototype.times = LC.prototype.multiply;
    XC.prototype.square = function () {
      return new XC(aC(this.value), !1);
    };
    iy.prototype.square = function () {
      var CC = this.value * this.value;
      return YC(CC) ? new iy(CC) : new XC(aC(bC(Math.abs(this.value))), !1);
    };
    LC.prototype.square = function (CC) {
      return new LC(this.value * this.value);
    };
    XC.prototype.divmod = function (CC) {
      var yC = UC(this, CC);
      return {
        quotient: yC[0],
        remainder: yC[1]
      };
    };
    LC.prototype.divmod = iy.prototype.divmod = XC.prototype.divmod;
    XC.prototype.divide = function (CC) {
      return UC(this, CC)[0];
    };
    LC.prototype.over = LC.prototype.divide = function (CC) {
      return new LC(this.value / dC(CC).value);
    };
    iy.prototype.over = iy.prototype.divide = XC.prototype.over = XC.prototype.divide;
    XC.prototype.mod = function (CC) {
      return UC(this, CC)[1];
    };
    LC.prototype.mod = LC.prototype.remainder = function (CC) {
      return new LC(this.value % dC(CC).value);
    };
    iy.prototype.remainder = iy.prototype.mod = XC.prototype.remainder = XC.prototype.mod;
    XC.prototype.pow = function (CC) {
      var yC;
      var IC;
      var fC;
      var ky = dC(CC);
      var gC = this.value;
      var AC = ky.value;
      if (0 === AC) {
        return my[1];
      }
      if (0 === gC) {
        return my[0];
      }
      if (1 === gC) {
        return my[1];
      }
      if (-1 === gC) {
        return ky.isEven() ? my[1] : my[-1];
      }
      if (ky.sign) {
        return my[0];
      }
      if (!ky.isSmall) {
        throw new Error("The exponent " + ky.toString() + " is too large.");
      }
      if (this.isSmall && YC(yC = Math.pow(gC, AC))) {
        return new iy(OC(yC));
      }
      IC = this;
      fC = my[1];
      for (; !0 & AC && (fC = fC.times(IC), --AC), 0 !== AC;) {
        AC /= 2;
        IC = IC.square();
      }
      return fC;
    };
    iy.prototype.pow = XC.prototype.pow;
    LC.prototype.pow = function (CC) {
      var yC = dC(CC);
      var IC = this.value;
      var fC = yC.value;
      var ky = BigInt(0);
      var gC = BigInt(1);
      var AC = BigInt(2);
      if (fC === ky) {
        return my[1];
      }
      if (IC === ky) {
        return my[0];
      }
      if (IC === gC) {
        return my[1];
      }
      if (IC === BigInt(-1)) {
        return yC.isEven() ? my[1] : my[-1];
      }
      if (yC.isNegative()) {
        return new LC(ky);
      }
      for (var XC = this, iy = my[1]; (fC & gC) === gC && (iy = iy.times(XC), --fC), fC !== ky;) {
        fC /= AC;
        XC = XC.square();
      }
      return iy;
    };
    XC.prototype.modPow = function (CC, yC) {
      CC = dC(CC);
      if ((yC = dC(yC)).isZero()) {
        throw new Error("Cannot take modPow with modulus 0");
      }
      var IC = my[1];
      var fC = this.mod(yC);
      for (CC.isNegative() && (CC = CC.multiply(my[-1]), fC = fC.modInv(yC)); CC.isPositive();) {
        if (fC.isZero()) {
          return my[0];
        }
        CC.isOdd() && (IC = IC.multiply(fC).mod(yC));
        CC = CC.divide(2);
        fC = fC.square().mod(yC);
      }
      return IC;
    };
    LC.prototype.modPow = iy.prototype.modPow = XC.prototype.modPow;
    XC.prototype.compareAbs = function (CC) {
      var yC = dC(CC);
      var IC = this.value;
      var fC = yC.value;
      return yC.isSmall ? 1 : EC(IC, fC);
    };
    iy.prototype.compareAbs = function (CC) {
      var yC = dC(CC);
      var IC = Math.abs(this.value);
      var fC = yC.value;
      return yC.isSmall ? IC === (fC = Math.abs(fC)) ? 0 : IC > fC ? 1 : -1 : -1;
    };
    LC.prototype.compareAbs = function (CC) {
      var yC = this.value;
      var IC = dC(CC).value;
      return (yC = yC >= 0 ? yC : -yC) === (IC = IC >= 0 ? IC : -IC) ? 0 : yC > IC ? 1 : -1;
    };
    XC.prototype.compare = function (CC) {
      if (CC === 1 / 0) {
        return -1;
      }
      if (CC === -1 / 0) {
        return 1;
      }
      var yC = dC(CC);
      var IC = this.value;
      var fC = yC.value;
      return this.sign !== yC.sign ? yC.sign ? 1 : -1 : yC.isSmall ? this.sign ? -1 : 1 : EC(IC, fC) * (this.sign ? -1 : 1);
    };
    XC.prototype.compareTo = XC.prototype.compare;
    iy.prototype.compare = function (CC) {
      if (CC === 1 / 0) {
        return -1;
      }
      if (CC === -1 / 0) {
        return 1;
      }
      var yC = dC(CC);
      var IC = this.value;
      var fC = yC.value;
      return yC.isSmall ? IC == fC ? 0 : IC > fC ? 1 : -1 : IC < 0 !== yC.sign ? IC < 0 ? -1 : 1 : IC < 0 ? 1 : -1;
    };
    iy.prototype.compareTo = iy.prototype.compare;
    LC.prototype.compare = function (CC) {
      if (CC === 1 / 0) {
        return -1;
      }
      if (CC === -1 / 0) {
        return 1;
      }
      var yC = this.value;
      var IC = dC(CC).value;
      return yC === IC ? 0 : yC > IC ? 1 : -1;
    };
    LC.prototype.compareTo = LC.prototype.compare;
    XC.prototype.equals = function (CC) {
      return 0 === this.compare(CC);
    };
    LC.prototype.eq = LC.prototype.equals = iy.prototype.eq = iy.prototype.equals = XC.prototype.eq = XC.prototype.equals;
    XC.prototype.notEquals = function (CC) {
      return 0 !== this.compare(CC);
    };
    LC.prototype.neq = LC.prototype.notEquals = iy.prototype.neq = iy.prototype.notEquals = XC.prototype.neq = XC.prototype.notEquals;
    XC.prototype.greater = function (CC) {
      return this.compare(CC) > 0;
    };
    LC.prototype.gt = LC.prototype.greater = iy.prototype.gt = iy.prototype.greater = XC.prototype.gt = XC.prototype.greater;
    XC.prototype.lesser = function (CC) {
      return this.compare(CC) < 0;
    };
    LC.prototype.lt = LC.prototype.lesser = iy.prototype.lt = iy.prototype.lesser = XC.prototype.lt = XC.prototype.lesser;
    XC.prototype.greaterOrEquals = function (CC) {
      return this.compare(CC) >= 0;
    };
    LC.prototype.geq = LC.prototype.greaterOrEquals = iy.prototype.geq = iy.prototype.greaterOrEquals = XC.prototype.geq = XC.prototype.greaterOrEquals;
    XC.prototype.lesserOrEquals = function (CC) {
      return this.compare(CC) <= 0;
    };
    LC.prototype.leq = LC.prototype.lesserOrEquals = iy.prototype.leq = iy.prototype.lesserOrEquals = XC.prototype.leq = XC.prototype.lesserOrEquals;
    XC.prototype.isEven = function () {
      return 0 === (1 & this.value[0]);
    };
    iy.prototype.isEven = function () {
      return 0 === (1 & this.value);
    };
    LC.prototype.isEven = function () {
      return (this.value & BigInt(1)) === BigInt(0);
    };
    XC.prototype.isOdd = function () {
      return 1 === (1 & this.value[0]);
    };
    iy.prototype.isOdd = function () {
      return 1 === (1 & this.value);
    };
    LC.prototype.isOdd = function () {
      return (this.value & BigInt(1)) === BigInt(1);
    };
    XC.prototype.isPositive = function () {
      return !this.sign;
    };
    iy.prototype.isPositive = function () {
      return this.value > 0;
    };
    LC.prototype.isPositive = iy.prototype.isPositive;
    XC.prototype.isNegative = function () {
      return this.sign;
    };
    iy.prototype.isNegative = function () {
      return this.value < 0;
    };
    LC.prototype.isNegative = iy.prototype.isNegative;
    XC.prototype.isUnit = function () {
      return !1;
    };
    iy.prototype.isUnit = function () {
      return 1 === Math.abs(this.value);
    };
    LC.prototype.isUnit = function () {
      return this.abs().value === BigInt(1);
    };
    XC.prototype.isZero = function () {
      return !1;
    };
    iy.prototype.isZero = function () {
      return 0 === this.value;
    };
    LC.prototype.isZero = function () {
      return this.value === BigInt(0);
    };
    XC.prototype.isDivisibleBy = function (CC) {
      var yC = dC(CC);
      return !yC.isZero() && (!!yC.isUnit() || (0 === yC.compareAbs(2) ? this.isEven() : this.mod(yC).isZero()));
    };
    LC.prototype.isDivisibleBy = iy.prototype.isDivisibleBy = XC.prototype.isDivisibleBy;
    XC.prototype.isPrime = function (IC) {
      var fC = VC(this);
      if (fC !== CC) {
        return fC;
      }
      var ky = this.abs();
      var gC = ky.bitLength();
      if (gC <= 64) {
        return WC(ky, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
      }
      for (var AC = Math.log(2) * gC.toJSNumber(), my = Math.ceil(!0 === IC ? 2 * Math.pow(AC, 2) : AC), XC = [], iy = 0; iy < my; iy++) {
        XC.push(yC(iy + 2));
      }
      return WC(ky, XC);
    };
    LC.prototype.isPrime = iy.prototype.isPrime = XC.prototype.isPrime;
    XC.prototype.isProbablePrime = function (IC, fC) {
      var ky = VC(this);
      if (ky !== CC) {
        return ky;
      }
      for (var gC = this.abs(), AC = IC === CC ? 5 : IC, my = [], XC = 0; XC < AC; XC++) {
        my.push(yC.randBetween(2, gC.minus(2), fC));
      }
      return WC(gC, my);
    };
    LC.prototype.isProbablePrime = iy.prototype.isProbablePrime = XC.prototype.isProbablePrime;
    XC.prototype.modInv = function (CC) {
      for (var IC, fC, ky, gC = yC.zero, AC = yC.one, my = dC(CC), XC = this.abs(); !XC.isZero();) {
        IC = my.divide(XC);
        fC = gC;
        ky = my;
        gC = AC;
        my = XC;
        AC = fC.Wy(IC.multiply(AC));
        XC = ky.Wy(IC.multiply(XC));
      }
      if (!my.isUnit()) {
        throw new Error(this.toString() + " and " + CC.toString() + " are not co-prime");
      }
      -1 === gC.compare(0) && (gC = gC.add(CC));
      return this.isNegative() ? gC.negate() : gC;
    };
    LC.prototype.modInv = iy.prototype.modInv = XC.prototype.modInv;
    XC.prototype.next = function () {
      var CC = this.value;
      return this.sign ? jy(CC, 1, this.sign) : new XC(NC(CC, 1), this.sign);
    };
    iy.prototype.next = function () {
      var CC = this.value;
      return CC + 1 < fC ? new iy(CC + 1) : new XC(ky, !1);
    };
    LC.prototype.next = function () {
      return new LC(this.value + BigInt(1));
    };
    XC.prototype.prev = function () {
      var CC = this.value;
      return this.sign ? new XC(NC(CC, 1), !0) : jy(CC, 1, this.sign);
    };
    iy.prototype.prev = function () {
      var CC = this.value;
      return CC - 1 > -fC ? new iy(CC - 1) : new XC(ky, !0);
    };
    LC.prototype.prev = function () {
      return new LC(this.value - BigInt(1));
    };
    for (var xC = [1]; 2 * xC[xC.length - 1] <= IC;) {
      xC.push(2 * xC[xC.length - 1]);
    }
    var PC = xC.length;
    var zC = xC[PC - 1];
    function BC(CC) {
      return Math.abs(CC) <= IC;
    }
    function tC(CC, IC, fC) {
      IC = dC(IC);
      for (var ky = CC.isNegative(), gC = IC.isNegative(), AC = ky ? CC.not() : CC, my = gC ? IC.not() : IC, XC = 0, iy = 0, LC = null, YC = null, bC = []; !AC.isZero() || !my.isZero();) {
        XC = (LC = UC(AC, zC))[1].toJSNumber();
        ky && (XC = zC - 1 - XC);
        iy = (YC = UC(my, zC))[1].toJSNumber();
        gC && (iy = zC - 1 - iy);
        AC = LC[0];
        my = YC[0];
        bC.push(fC(XC, iy));
      }
      for (var rC = 0 !== fC(ky ? 1 : 0, gC ? 1 : 0) ? yC(-1) : yC(0), GC = bC.length - 1; GC >= 0; GC -= 1) {
        rC = rC.multiply(zC).add(yC(bC[GC]));
      }
      return rC;
    }
    XC.prototype.shiftLeft = function (CC) {
      var yC = dC(CC).toJSNumber();
      if (!BC(yC)) {
        throw new Error(String(yC) + " is too large for shifting.");
      }
      if (yC < 0) {
        return this.shiftRight(-yC);
      }
      var IC = this;
      if (IC.isZero()) {
        return IC;
      }
      for (; yC >= PC;) {
        IC = IC.multiply(zC);
        yC -= PC - 1;
      }
      return IC.multiply(xC[yC]);
    };
    LC.prototype.shiftLeft = iy.prototype.shiftLeft = XC.prototype.shiftLeft;
    XC.prototype.shiftRight = function (CC) {
      var yC;
      var IC = dC(CC).toJSNumber();
      if (!BC(IC)) {
        throw new Error(String(IC) + " is too large for shifting.");
      }
      if (IC < 0) {
        return this.shiftLeft(-IC);
      }
      for (var fC = this; IC >= PC;) {
        if (fC.isZero() || fC.isNegative() && fC.isUnit()) {
          return fC;
        }
        fC = (yC = UC(fC, zC))[1].isNegative() ? yC[0].prev() : yC[0];
        IC -= PC - 1;
      }
      return (yC = UC(fC, xC[IC]))[1].isNegative() ? yC[0].prev() : yC[0];
    };
    LC.prototype.shiftRight = iy.prototype.shiftRight = XC.prototype.shiftRight;
    XC.prototype.not = function () {
      return this.negate().prev();
    };
    LC.prototype.not = iy.prototype.not = XC.prototype.not;
    XC.prototype.and = function (CC) {
      return tC(this, CC, function (CC, yC) {
        return CC & yC;
      });
    };
    LC.prototype.and = iy.prototype.and = XC.prototype.and;
    XC.prototype.or = function (CC) {
      return tC(this, CC, function (CC, yC) {
        return CC | yC;
      });
    };
    LC.prototype.or = iy.prototype.or = XC.prototype.or;
    XC.prototype.xor = function (CC) {
      return tC(this, CC, function (CC, yC) {
        return CC ^ yC;
      });
    };
    LC.prototype.xor = iy.prototype.xor = XC.prototype.xor;
    var JC = 1 << 30;
    function nC(CC) {
      var yC = CC.value;
      var fC = "number" === typeof yC ? yC | JC : "bigint" === typeof yC ? yC | BigInt(JC) : yC[0] + yC[1] * IC | 1073758208;
      return fC & -fC;
    }
    function FC(CC, IC) {
      if (IC.compareTo(CC) <= 0) {
        var fC = FC(CC, IC.square(IC));
        var ky = fC.p;
        var gC = fC.e;
        var AC = ky.multiply(IC);
        return AC.compareTo(CC) <= 0 ? {
          p: AC,
          e: 2 * gC + 1
        } : {
          p: ky,
          e: 2 * gC
        };
      }
      return {
        p: yC(1),
        e: 0
      };
    }
    function uC(CC, yC) {
      CC = dC(CC);
      yC = dC(yC);
      return CC.greater(yC) ? CC : yC;
    }
    function DC(CC, yC) {
      CC = dC(CC);
      yC = dC(yC);
      return CC.lesser(yC) ? CC : yC;
    }
    function ZC(CC, yC) {
      CC = dC(CC).abs();
      yC = dC(yC).abs();
      if (CC.equals(yC)) {
        return CC;
      }
      if (CC.isZero()) {
        return yC;
      }
      if (yC.isZero()) {
        return CC;
      }
      for (var IC, fC, ky = my[1]; CC.isEven() && yC.isEven();) {
        IC = DC(nC(CC), nC(yC));
        CC = CC.divide(IC);
        yC = yC.divide(IC);
        ky = ky.multiply(IC);
      }
      for (; CC.isEven();) {
        CC = CC.divide(nC(CC));
      }
      do {
        for (; yC.isEven();) {
          yC = yC.divide(nC(yC));
        }
        CC.greater(yC) && (fC = yC, yC = CC, CC = fC);
        yC = yC.Wy(CC);
      } while (!yC.isZero());
      return ky.isUnit() ? CC : CC.multiply(ky);
    }
    XC.prototype.bitLength = function () {
      var CC = this;
      CC.compareTo(yC(0)) < 0 && (CC = CC.negate().Wy(yC(1)));
      return 0 === CC.compareTo(yC(0)) ? yC(0) : yC(FC(CC, yC(2)).e).add(yC(1));
    };
    LC.prototype.bitLength = iy.prototype.bitLength = XC.prototype.bitLength;
    function lC(CC, yC, IC, fC) {
      IC = IC || gC;
      CC = String(CC);
      fC || (CC = CC.toLowerCase(), IC = IC.toLowerCase());
      var ky;
      var AC = CC.length;
      var my = Math.abs(yC);
      var XC = {};
      for (ky = 0; ky < IC.length; ky++) {
        XC[IC[ky]] = ky;
      }
      for (ky = 0; ky < AC; ky++) {
        if ("-" !== (YC = CC[ky]) && YC in XC && XC[YC] >= my) {
          if ("1" === YC && 1 === my) {
            continue;
          }
          throw new Error(YC + " is not a valid digit in base " + yC + ".");
        }
      }
      yC = dC(yC);
      var iy = [];
      var LC = "-" === CC[0];
      for (ky = LC ? 1 : 0; ky < CC.length; ky++) {
        var YC;
        if ((YC = CC[ky]) in XC) {
          iy.push(dC(XC[YC]));
        } else {
          if ("<" !== YC) {
            throw new Error(YC + " is not a valid character");
          }
          var bC = ky;
          do {
            ky++;
          } while (">" !== CC[ky] && ky < CC.length);
          iy.push(dC(CC.slice(bC + 1, ky)));
        }
      }
      return oC(iy, yC, LC);
    }
    function oC(CC, yC, IC) {
      var fC;
      var ky = my[0];
      var gC = my[1];
      for (fC = CC.length - 1; fC >= 0; fC--) {
        ky = ky.add(CC[fC].times(gC));
        gC = gC.times(yC);
      }
      return IC ? ky.negate() : ky;
    }
    function vC(CC, IC) {
      if ((IC = yC(IC)).isZero()) {
        if (CC.isZero()) {
          return {
            value: [0],
            isNegative: !1
          };
        }
        throw new Error("Cannot convert nonzero numbers to base 0.");
      }
      if (IC.equals(-1)) {
        if (CC.isZero()) {
          return {
            value: [0],
            isNegative: !1
          };
        }
        if (CC.isNegative()) {
          return {
            value: [].concat.apply([], Array.apply(null, Array(-CC.toJSNumber())).map(Array.prototype.valueOf, [1, 0])),
            isNegative: !1
          };
        }
        var fC = Array.apply(null, Array(CC.toJSNumber() - 1)).map(Array.prototype.valueOf, [0, 1]);
        fC.unshift([1]);
        return {
          value: [].concat.apply([], fC),
          isNegative: !1
        };
      }
      var ky = !1;
      CC.isNegative() && IC.isPositive() && (ky = !0, CC = CC.abs());
      if (IC.isUnit()) {
        return CC.isZero() ? {
          value: [0],
          isNegative: !1
        } : {
          value: Array.apply(null, Array(CC.toJSNumber())).map(Number.prototype.valueOf, 1),
          isNegative: ky
        };
      }
      for (var gC, AC = [], my = CC; my.isNegative() || my.compareAbs(IC) >= 0;) {
        gC = my.divmod(IC);
        my = gC.quotient;
        var XC = gC.remainder;
        XC.isNegative() && (XC = IC.minus(XC).abs(), my = my.next());
        AC.push(XC.toJSNumber());
      }
      AC.push(my.toJSNumber());
      return {
        value: AC.reverse(),
        isNegative: ky
      };
    }
    function hC(CC, yC, IC) {
      var fC = vC(CC, yC);
      return (fC.isNegative ? "-" : "") + fC.value.map(function (CC) {
        return function (CC, yC) {
          return CC < (yC = yC || gC).length ? yC[CC] : "<" + CC + ">";
        }(CC, IC);
      }).join("");
    }
    function RC(CC) {
      if (YC(+CC)) {
        var yC = +CC;
        if (yC === OC(yC)) {
          return AC ? new LC(BigInt(yC)) : new iy(yC);
        }
        throw new Error("Invalid integer: " + CC);
      }
      var IC = "-" === CC[0];
      IC && (CC = CC.slice(1));
      var fC = CC.split(/e/i);
      if (fC.length > 2) {
        throw new Error("Invalid integer: " + fC.join("e"));
      }
      if (2 === fC.length) {
        var ky = fC[1];
        "+" === ky[0] && (ky = ky.slice(1));
        if ((ky = +ky) !== OC(ky) || !YC(ky)) {
          throw new Error("Invalid integer: " + ky + " is not a valid exponent.");
        }
        var gC = fC[0];
        var my = gC.indexOf(".");
        my >= 0 && (ky -= gC.length - my - 1, gC = gC.slice(0, my) + gC.slice(my + 1));
        if (ky < 0) {
          throw new Error("Cannot include negative exponent part for integers");
        }
        CC = gC += new Array(ky + 1).join("0");
      }
      if (!/^([0-9][0-9]*)$/.test(CC)) {
        throw new Error("Invalid integer: " + CC);
      }
      if (AC) {
        return new LC(BigInt(IC ? "-" + CC : CC));
      }
      for (var bC = [], rC = CC.length, eC = rC - 7; rC > 0;) {
        bC.push(+CC.slice(eC, rC));
        (eC -= 7) < 0 && (eC = 0);
        rC -= 7;
      }
      GC(bC);
      return new XC(bC, IC);
    }
    function dC(CC) {
      return "number" === typeof CC ? function (CC) {
        if (AC) {
          return new LC(BigInt(CC));
        }
        if (YC(CC)) {
          if (CC !== OC(CC)) {
            throw new Error(CC + " is not an integer.");
          }
          return new iy(CC);
        }
        return RC(CC.toString());
      }(CC) : "string" === typeof CC ? RC(CC) : "bigint" === typeof CC ? new LC(CC) : CC;
    }
    XC.prototype.toArray = function (CC) {
      return vC(this, CC);
    };
    iy.prototype.toArray = function (CC) {
      return vC(this, CC);
    };
    LC.prototype.toArray = function (CC) {
      return vC(this, CC);
    };
    XC.prototype.toString = function (yC, IC) {
      yC === CC && (yC = 10);
      if (10 !== yC) {
        return hC(this, yC, IC);
      }
      for (var fC, ky = this.value, gC = ky.length, AC = String(ky[--gC]); --gC >= 0;) {
        fC = String(ky[gC]);
        AC += "0000000".slice(fC.length) + fC;
      }
      return (this.sign ? "-" : "") + AC;
    };
    iy.prototype.toString = function (yC, IC) {
      yC === CC && (yC = 10);
      return 10 != yC ? hC(this, yC, IC) : String(this.value);
    };
    LC.prototype.toString = iy.prototype.toString;
    LC.prototype.toJSON = XC.prototype.toJSON = iy.prototype.toJSON = function () {
      return this.toString();
    };
    XC.prototype.valueOf = function () {
      return parseInt(this.toString(), 10);
    };
    XC.prototype.toJSNumber = XC.prototype.valueOf;
    iy.prototype.valueOf = function () {
      return this.value;
    };
    iy.prototype.toJSNumber = iy.prototype.valueOf;
    LC.prototype.valueOf = LC.prototype.toJSNumber = function () {
      return parseInt(this.toString(), 10);
    };
    for (var QC = 0; QC < 1e3; QC++) {
      my[QC] = dC(QC);
      QC > 0 && (my[-QC] = dC(-QC));
    }
    my.one = my[1];
    my.zero = my[0];
    my.minusOne = my[-1];
    my.max = uC;
    my.min = DC;
    my.gcd = ZC;
    my.lcm = function (CC, yC) {
      CC = dC(CC).abs();
      yC = dC(yC).abs();
      return CC.divide(ZC(CC, yC)).multiply(yC);
    };
    my.isInstance = function (CC) {
      return CC instanceof XC || CC instanceof iy || CC instanceof LC;
    };
    my.randBetween = function (CC, yC, fC) {
      CC = dC(CC);
      yC = dC(yC);
      var ky = fC || Math.random;
      var gC = DC(CC, yC);
      var AC = uC(CC, yC).Wy(gC).add(1);
      if (AC.isSmall) {
        return gC.add(Math.floor(ky() * AC));
      }
      for (var XC = vC(AC, IC).value, iy = [], LC = !0, YC = 0; YC < XC.length; YC++) {
        var bC = LC ? XC[YC] : IC;
        var rC = OC(ky() * bC);
        iy.push(rC);
        rC < bC && (LC = !1);
      }
      return gC.add(my.LL(iy, IC, !1));
    };
    my.LL = function (CC, yC, IC) {
      return oC(CC.map(dC), dC(yC || 10), IC);
    };
    return my;
  }();
  CC.hasOwnProperty("exports") && (CC.exports = yC);
}(aI);
var cI = bC(aI.exports);
function UI(CC, yC, IC) {
  let fC = 0;
  for (let ky = 0; ky < IC; ky++) {
    const IC = CC[yC + ky];
    if (void 0 === IC) {
      break;
    }
    fC += IC * 16 ** ky;
  }
  return fC;
}
function EI(CC) {
  const yC = [];
  for (let IC = 0; IC < CC.length; IC++) {
    let fC = Number(CC[IC]);
    for (let CC = 0; fC || CC < yC.length; CC++) {
      fC += 10 * (yC[CC] || 0);
      yC[CC] = fC % 16;
      fC = (fC - yC[CC]) / 16;
    }
  }
  return yC;
}
class VI {
  static fromString(CC) {
    return new VI(function (CC) {
      const yC = EI(CC);
      const IC = Array(4);
      for (let fC = 0; fC < 4; fC++) {
        IC[3 - fC] = UI(yC, 4 * fC, 4);
      }
      return IC;
    }(CC), CC);
  }
  static fromBit(CC) {
    const yC = Array(4);
    const IC = Math.floor(CC / 16);
    for (let fC = 0; fC < 4; fC++) {
      yC[3 - fC] = fC === IC ? 1 << CC - 16 * IC : 0;
    }
    return new VI(yC);
  }
  constructor(CC, yC) {
    this.parts = CC;
    this.str = yC;
  }
  and(CC) {
    let {
      parts: yC
    } = CC;
    return new VI(this.parts.map((CC, IC) => CC & yC[IC]));
  }
  or(CC) {
    let {
      parts: yC
    } = CC;
    return new VI(this.parts.map((CC, IC) => CC | yC[IC]));
  }
  xor(CC) {
    let {
      parts: yC
    } = CC;
    return new VI(this.parts.map((CC, IC) => CC ^ yC[IC]));
  }
  not() {
    return new VI(this.parts.map(CC => ~CC));
  }
  equals(CC) {
    let {
      parts: yC
    } = CC;
    return this.parts.every((CC, IC) => CC === yC[IC]);
  }
  toString() {
    if (null != this.str) {
      return this.str;
    }
    const CC = new Array(16);
    this.parts.forEach((yC, IC) => {
      const fC = EI(yC.toString());
      for (let ky = 0; ky < 4; ky++) {
        CC[ky + 4 * IC] = fC[3 - ky] || 0;
      }
    });
    return this.str = cI.LL(CC, 16).toString();
  }
  toJSON() {
    return this.toString();
  }
}
const WI = function () {
  try {
    BigInt;
    return !0;
  } catch (CC) {
    return !1;
  }
}();
WI && null == BigInt.prototype.toJSON && (BigInt.prototype.toJSON = function () {
  return this.toString();
});
const xI = {};
const PI = WI ? function (CC) {
  return BigInt(CC);
} : function (CC) {
  return CC instanceof VI ? CC : ("number" === typeof CC && (CC = CC.toString()), null != xI[CC] || (xI[CC] = VI.fromString(CC)), xI[CC]);
};
const zI = PI(0);
const BI = WI ? function () {
  return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : zI) & (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zI);
} : function () {
  let CC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zI;
  return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : zI).and(CC);
};
const tI = WI ? function () {
  return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : zI) | (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zI);
} : function () {
  let CC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zI;
  return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : zI).or(CC);
};
const JI = WI ? function () {
  return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : zI) ^ (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zI);
} : function () {
  let CC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zI;
  return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : zI).xor(CC);
};
const nI = WI ? function (CC, yC) {
  return CC === yC;
} : function (CC, yC) {
  return null == CC || null == yC ? CC == yC : CC.equals(yC);
};
var FI;
var uI;
var DI;
var ZI;
var lI = {
  combine: function () {
    let CC = arguments.length <= 0 ? void 0 : arguments[0];
    for (let yC = 1; yC < arguments.length; yC++) {
      CC = tI(CC, yC < 0 || arguments.length <= yC ? void 0 : arguments[yC]);
    }
    return CC;
  },
  add: function (CC, yC) {
    return yC === zI ? CC : tI(CC, yC);
  },
  remove: function (CC, yC) {
    return yC === zI ? CC : JI(CC, BI(CC, yC));
  },
  filter: BI,
  invert: WI ? function () {
    return ~(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : zI);
  } : function () {
    return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : zI).not();
  },
  has: function (CC, yC) {
    return nI(BI(CC, yC), yC);
  },
  hasAny: function (CC, yC) {
    return !nI(BI(CC, yC), zI);
  },
  equals: nI,
  deserialize: PI,
  getFlag: WI ? function (CC) {
    return BigInt(1) << BigInt(CC);
  } : function (CC) {
    return VI.fromBit(CC);
  }
};
!function (CC) {
  CC[CC.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL";
  CC[CC.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED";
  CC[CC.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL";
  CC[CC.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID";
  CC[CC.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN";
  CC[CC.RATELIMITED = 4002] = "RATELIMITED";
  CC[CC.TOKEN_REVOKED = 4003] = "TOKEN_REVOKED";
  CC[CC.INVALID_VERSION = 4004] = "INVALID_VERSION";
  CC[CC.INVALID_ENCODING = 4005] = "INVALID_ENCODING";
}(FI || (FI = {}));
(function (CC) {
  CC[CC.INVALID_PAYLOAD = 4e3] = "INVALID_PAYLOAD";
  CC[CC.INVALID_COMMAND = 4002] = "INVALID_COMMAND";
  CC[CC.INVALID_EVENT = 4004] = "INVALID_EVENT";
  CC[CC.INVALID_PERMISSIONS = 4006] = "INVALID_PERMISSIONS";
})(uI || (uI = {}));
(function (CC) {
  CC.LANDSCAPE = "landscape";
  CC.PORTRAIT = "portrait";
})(DI || (DI = {}));
(function (CC) {
  CC.MOBILE = "mobile";
  CC.DESKTOP = "desktop";
})(ZI || (ZI = {}));
Object.freeze({
  CREATE_INSTANT_INVITE: lI.getFlag(0),
  ADMINISTRATOR: lI.getFlag(3)
});
function oI(CC) {
  return qI(yC => {
    var IC;
    const [fC] = null !== (IC = Object.entries(CC).find(CC => {
      let [, IC] = CC;
      return IC === yC;
    })) && void 0 !== IC ? IC : [];
    return null != yC && void 0 === fC ? CC.UNHANDLED : yC;
  }, uy().or(Dy()));
}
const vI = HI.object({
  image_url: HI.string()
});
const hI = HI.object({
  mediaUrl: HI.string().max(1024)
});
const RI = HI.object({
  access_token: HI.union([HI.string(), HI.null()]).optional()
});
const dI = HI.object({
  access_token: HI.string(),
  user: HI.object({
    username: HI.string(),
    discriminator: HI.string(),
    id: HI.string(),
    avatar: HI.union([HI.string(), HI.null()]).optional(),
    public_flags: HI.number(),
    global_name: HI.union([HI.string(), HI.null()]).optional()
  }),
  scopes: HI.array(function (CC) {
    const yC = Jy().transform(yC => {
      const IC = CC.safeParse(yC);
      return IC.success ? IC.data : CC._def.defaultValue();
    });
    yC.overlayType = CC;
    return yC;
  }(HI.enum(["identify", "email", "connections", "guilds", "guilds.join", "guilds.members.read", "gdm.join", "rpc", "rpc.notifications.read", "rpc.voice.read", "rpc.voice.write", "rpc.video.read", "rpc.video.write", "rpc.screenshare.read", "rpc.screenshare.write", "rpc.activities.write", "bot", "webhook.incoming", "messages.read", "applications.builds.upload", "applications.builds.read", "applications.commands", "applications.commands.update", "applications.commands.permissions.update", "applications.store.update", "applications.entitlements", "activities.read", "activities.write", "relationships.read", "voice", "dm_channels.read", "role_connections.write"]).or(HI.literal(-1)).default(-1))),
  expires: HI.string(),
  application: HI.object({
    description: HI.string(),
    icon: HI.union([HI.string(), HI.null()]).optional(),
    id: HI.string(),
    rpc_origins: HI.array(HI.string()).optional(),
    name: HI.string()
  })
});
const QI = HI.object({
  participants: HI.array(HI.object({
    id: HI.string(),
    username: HI.string(),
    global_name: HI.union([HI.string(), HI.null()]).optional(),
    discriminator: HI.string(),
    avatar: HI.union([HI.string(), HI.null()]).optional(),
    flags: HI.number(),
    bot: HI.boolean(),
    avatar_decoration_data: HI.union([HI.object({
      asset: HI.string(),
      skuId: HI.string().optional()
    }), HI.null()]).optional(),
    premium_type: HI.union([HI.number(), HI.null()]).optional(),
    nickname: HI.string().optional()
  }))
});
var MI;
!function (CC) {
  CC.INITIATE_IMAGE_UPLOAD = "INITIATE_IMAGE_UPLOAD";
  CC.OPEN_SHARE_MOMENT_DIALOG = "OPEN_SHARE_MOMENT_DIALOG";
  CC.AUTHENTICATE = "AUTHENTICATE";
  CC.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS = "GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS";
}(MI || (MI = {}));
const Cf = HI.object({}).optional().nullable();
const yf = HI.void();
const If = {
  [MI.INITIATE_IMAGE_UPLOAD]: {
    request: yf,
    response: vI
  },
  [MI.OPEN_SHARE_MOMENT_DIALOG]: {
    request: hI,
    response: Cf
  },
  [MI.AUTHENTICATE]: {
    request: RI,
    response: dI
  },
  [MI.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS]: {
    request: yf,
    response: QI
  }
};
const ff = "DISPATCH";
var kk;
!function (CC) {
  CC.AUTHORIZE = "AUTHORIZE";
  CC.AUTHENTICATE = "AUTHENTICATE";
  CC.GET_GUILDS = "GET_GUILDS";
  CC.GET_GUILD = "GET_GUILD";
  CC.GET_CHANNEL = "GET_CHANNEL";
  CC.GET_CHANNELS = "GET_CHANNELS";
  CC.SELECT_VOICE_CHANNEL = "SELECT_VOICE_CHANNEL";
  CC.SELECT_TEXT_CHANNEL = "SELECT_TEXT_CHANNEL";
  CC.SUBSCRIBE = "SUBSCRIBE";
  CC.UNSUBSCRIBE = "UNSUBSCRIBE";
  CC.CAPTURE_SHORTCUT = "CAPTURE_SHORTCUT";
  CC.SET_CERTIFIED_DEVICES = "SET_CERTIFIED_DEVICES";
  CC.SET_ACTIVITY = "SET_ACTIVITY";
  CC.GET_SKUS = "GET_SKUS";
  CC.GET_ENTITLEMENTS = "GET_ENTITLEMENTS";
  CC.GET_SKUS_EMBEDDED = "GET_SKUS_EMBEDDED";
  CC.GET_ENTITLEMENTS_EMBEDDED = "GET_ENTITLEMENTS_EMBEDDED";
  CC.START_PURCHASE = "START_PURCHASE";
  CC.SET_CONFIG = "SET_CONFIG";
  CC.SEND_ANALYTICS_EVENT = "SEND_ANALYTICS_EVENT";
  CC.USER_SETTINGS_GET_LOCALE = "USER_SETTINGS_GET_LOCALE";
  CC.OPEN_EXTERNAL_LINK = "OPEN_EXTERNAL_LINK";
  CC.ENCOURAGE_HW_ACCELERATION = "ENCOURAGE_HW_ACCELERATION";
  CC.CAPTURE_LOG = "CAPTURE_LOG";
  CC.SET_ORIENTATION_LOCK_STATE = "SET_ORIENTATION_LOCK_STATE";
  CC.OPEN_INVITE_DIALOG = "OPEN_INVITE_DIALOG";
  CC.GET_PLATFORM_BEHAVIORS = "GET_PLATFORM_BEHAVIORS";
  CC.GET_CHANNEL_PERMISSIONS = "GET_CHANNEL_PERMISSIONS";
  CC.OPEN_SHARE_MOMENT_DIALOG = "OPEN_SHARE_MOMENT_DIALOG";
  CC.INITIATE_IMAGE_UPLOAD = "INITIATE_IMAGE_UPLOAD";
  CC.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS = "GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS";
}(kk || (kk = {}));
const gf = fI({
  cmd: uy(),
  data: My(),
  evt: dy(),
  nonce: uy()
}).passthrough();
oI(Object.assign(Object.assign({}, dI.shape.scopes.element.overlayType._def.innerType.options[0].Values), {
  UNHANDLED: -1
}));
const Af = fI({
  id: uy(),
  username: uy(),
  discriminator: uy(),
  global_name: uy().optional().nullable(),
  avatar: uy().optional().nullable(),
  avatar_decoration_data: fI({
    asset: uy(),
    sku_id: uy().optional()
  }).nullable(),
  bot: oy(),
  flags: Dy().optional().nullable(),
  premium_type: Dy().optional().nullable()
});
const mk = fI({
  user: Af,
  nick: uy().optional().nullable(),
  roles: II(uy()),
  joined_at: uy(),
  deaf: oy(),
  mute: oy()
});
const Xf = fI({
  id: uy(),
  name: uy().optional().nullable(),
  roles: II(uy()).optional().nullable(),
  user: Af.optional().nullable(),
  require_colons: oy().optional().nullable(),
  managed: oy().optional().nullable(),
  animated: oy().optional().nullable(),
  available: oy().optional().nullable()
});
const ik = fI({
  mute: oy(),
  deaf: oy(),
  self_mute: oy(),
  self_deaf: oy(),
  suppress: oy()
});
const Lf = fI({
  mute: oy(),
  nick: uy(),
  user: Af,
  voice_state: ik,
  volume: Dy()
});
const Yf = oI({
  UNHANDLED: -1,
  IDLE: "idle",
  DND: "dnd",
  ONLINE: "online",
  OFFLINE: "offline"
});
const bf = fI({
  name: uy(),
  type: Dy(),
  url: uy().optional().nullable(),
  created_at: Dy().optional().nullable(),
  timestamps: fI({
    start: Dy(),
    end: Dy()
  }).partial().optional().nullable(),
  application_id: uy().optional().nullable(),
  details: uy().optional().nullable(),
  state: uy().optional().nullable(),
  emoji: Xf.optional().nullable(),
  party: fI({
    id: uy().optional().nullable(),
    size: II(Dy()).optional().nullable()
  }).optional().nullable(),
  assets: fI({
    large_image: uy().nullable(),
    large_text: uy().nullable(),
    small_image: uy().nullable(),
    small_text: uy().nullable()
  }).partial().optional().nullable(),
  secrets: fI({
    join: uy(),
    match: uy()
  }).partial().optional().nullable(),
  instance: oy().optional().nullable(),
  flags: Dy().optional().nullable()
});
const rf = fI({
  id: uy(),
  type: oI({
    UNHANDLED: -1,
    ROLE: 0,
    MEMBER: 1
  }),
  allow: uy(),
  deny: uy()
});
const Gf = {
  UNHANDLED: -1,
  DM: 1,
  GROUP_DM: 3,
  GUILD_TEXT: 0,
  GUILD_VOICE: 2,
  GUILD_CATEGORY: 4,
  GUILD_ANNOUNCEMENT: 5,
  GUILD_STORE: 6,
  ANNOUNCEMENT_THREAD: 10,
  PUBLIC_THREAD: 11,
  PRIVATE_THREAD: 12,
  GUILD_STAGE_VOICE: 13,
  GUILD_DIRECTORY: 14,
  GUILD_FORUM: 15
};
const ef = fI({
  id: uy(),
  type: oI(Gf),
  guild_id: uy().optional().nullable(),
  position: Dy().optional().nullable(),
  permission_overwrites: II(rf).optional().nullable(),
  name: uy().optional().nullable(),
  topic: uy().optional().nullable(),
  nsfw: oy().optional().nullable(),
  last_message_id: uy().optional().nullable(),
  bitrate: Dy().optional().nullable(),
  user_limit: Dy().optional().nullable(),
  rate_limit_per_user: Dy().optional().nullable(),
  recipients: II(Af).optional().nullable(),
  icon: uy().optional().nullable(),
  owner_id: uy().optional().nullable(),
  application_id: uy().optional().nullable(),
  parent_id: uy().optional().nullable(),
  last_pin_timestamp: uy().optional().nullable()
});
const Of = fI({
  user: Af,
  guild_id: uy(),
  status: Yf,
  activities: II(bf),
  client_status: fI({
    desktop: Yf,
    mobile: Yf,
    web: Yf
  }).partial()
});
const Sf = fI({
  id: uy(),
  name: uy(),
  color: Dy(),
  hoist: oy(),
  position: Dy(),
  permissions: uy(),
  managed: oy(),
  mentionable: oy()
});
fI({
  id: uy(),
  name: uy(),
  owner_id: uy(),
  icon: uy().nullable(),
  icon_hash: uy().optional().nullable(),
  splash: uy().nullable(),
  discovery_splash: uy().nullable(),
  owner: oy().optional().nullable(),
  permissions: uy().optional().nullable(),
  region: uy(),
  afk_channel_id: uy().nullable(),
  afk_timeout: Dy(),
  widget_enabled: oy().optional().nullable(),
  widget_channel_id: uy().optional().nullable(),
  verification_level: Dy(),
  default_message_notifications: Dy(),
  explicit_content_filter: Dy(),
  roles: II(Sf),
  emojis: II(Xf),
  features: II(uy()),
  mfa_level: Dy(),
  application_id: uy().nullable(),
  system_channel_id: uy().nullable(),
  system_channel_flags: Dy(),
  rules_channel_id: uy().nullable(),
  joined_at: uy().optional().nullable(),
  large: oy().optional().nullable(),
  unavailable: oy().optional().nullable(),
  member_count: Dy().optional().nullable(),
  voice_states: II(ik).optional().nullable(),
  members: II(mk).optional().nullable(),
  channels: II(ef).optional().nullable(),
  presences: II(Of).optional().nullable(),
  max_presences: Dy().optional().nullable(),
  max_members: Dy().optional().nullable(),
  vanity_url_code: uy().nullable(),
  description: uy().nullable(),
  banner: uy().nullable(),
  premium_tier: Dy(),
  premium_subscription_count: Dy().optional().nullable(),
  preferred_locale: uy(),
  public_updates_channel_id: uy().nullable(),
  max_video_channel_users: Dy().optional().nullable(),
  approximate_member_count: Dy().optional().nullable(),
  approximate_presence_count: Dy().optional().nullable()
});
const Tf = fI({
  id: uy(),
  guild_id: uy(),
  type: Dy(),
  name: uy()
});
const Nf = fI({
  id: uy(),
  filename: uy(),
  size: Dy(),
  url: uy(),
  proxy_url: uy(),
  height: Dy().optional().nullable(),
  width: Dy().optional().nullable()
});
const sf = fI({
  text: uy(),
  icon_url: uy().optional().nullable(),
  proxy_icon_url: uy().optional().nullable()
});
const jk = fI({
  url: uy().optional().nullable(),
  proxy_url: uy().optional().nullable(),
  height: Dy().optional().nullable(),
  width: Dy().optional().nullable()
});
const qf = jk.omit({
  proxy_url: !0
});
const Kf = fI({
  name: uy().optional().nullable(),
  url: uy().optional().nullable()
});
const pf = fI({
  name: uy().optional().nullable(),
  url: uy().optional().nullable(),
  icon_url: uy().optional().nullable(),
  proxy_icon_url: uy().optional().nullable()
});
const wf = fI({
  name: uy(),
  value: uy(),
  inline: oy()
});
const Hf = fI({
  title: uy().optional().nullable(),
  type: uy().optional().nullable(),
  description: uy().optional().nullable(),
  url: uy().optional().nullable(),
  timestamp: uy().optional().nullable(),
  color: Dy().optional().nullable(),
  footer: sf.optional().nullable(),
  image: jk.optional().nullable(),
  thumbnail: jk.optional().nullable(),
  video: qf.optional().nullable(),
  provider: Kf.optional().nullable(),
  author: pf.optional().nullable(),
  fields: II(wf).optional().nullable()
});
const af = fI({
  count: Dy(),
  me: oy(),
  emoji: Xf
});
const cf = fI({
  type: Dy(),
  party_id: uy().optional().nullable()
});
const Uf = fI({
  id: uy(),
  cover_image: uy().optional().nullable(),
  description: uy(),
  icon: uy().optional().nullable(),
  name: uy()
});
const Ef = fI({
  message_id: uy().optional().nullable(),
  channel_id: uy().optional().nullable(),
  guild_id: uy().optional().nullable()
});
const Vf = fI({
  id: uy(),
  channel_id: uy(),
  guild_id: uy().optional().nullable(),
  author: Af.optional().nullable(),
  member: mk.optional().nullable(),
  content: uy(),
  timestamp: uy(),
  edited_timestamp: uy().optional().nullable(),
  tts: oy(),
  mention_everyone: oy(),
  mentions: II(Af),
  mention_roles: II(uy()),
  mention_channels: II(Tf),
  attachments: II(Nf),
  embeds: II(Hf),
  reactions: II(af).optional().nullable(),
  nonce: gI([uy(), Dy()]).optional().nullable(),
  pinned: oy(),
  webhook_id: uy().optional().nullable(),
  type: Dy(),
  activity: cf.optional().nullable(),
  application: Uf.optional().nullable(),
  message_reference: Ef.optional().nullable(),
  flags: Dy().optional().nullable(),
  stickers: II(My()).optional().nullable(),
  referenced_message: My().optional().nullable()
});
const Wf = fI({
  id: uy(),
  name: uy()
});
const xf = fI({
  type: oI({
    UNHANDLED: -1,
    KEYBOARD_KEY: 0,
    MOUSE_BUTTON: 1,
    KEYBOARD_MODIFIER_KEY: 2,
    GAMEPAD_BUTTON: 3
  }),
  code: Dy(),
  name: uy()
});
const Pf = fI({
  type: oI({
    UNHANDLED: -1,
    PUSH_TO_TALK: "PUSH_TO_TALK",
    VOICE_ACTIVITY: "VOICE_ACTIVITY"
  }),
  auto_threshold: oy(),
  threshold: Dy(),
  shortcut: II(xf),
  delay: Dy()
});
const zf = fI({
  device_id: uy(),
  volume: Dy(),
  available_devices: II(Wf)
});
fI({
  type: oI({
    UNHANDLED: -1,
    AUDIO_INPUT: "AUDIO_INPUT",
    AUDIO_OUTPUT: "AUDIO_OUTPUT",
    VIDEO_INPUT: "VIDEO_INPUT"
  }),
  id: uy(),
  vendor: fI({
    name: uy(),
    url: uy()
  }),
  model: fI({
    name: uy(),
    url: uy()
  }),
  related: II(uy()),
  echo_cancellation: oy().optional().nullable(),
  noise_suppression: oy().optional().nullable(),
  automatic_gain_control: oy().optional().nullable(),
  hardware_mute: oy().optional().nullable()
});
const Bf = fI({
  id: uy(),
  name: uy(),
  type: oI({
    UNHANDLED: -1,
    APPLICATION: 1,
    DLC: 2,
    CONSUMABLE: 3,
    BUNDLE: 4,
    SUBSCRIPTION: 5
  }),
  price: fI({
    amount: Dy(),
    currency: uy()
  }),
  application_id: uy(),
  flags: Dy(),
  release_date: uy().nullable()
});
const tf = fI({
  id: uy(),
  sku_id: uy(),
  application_id: uy(),
  user_id: uy(),
  gift_code_flags: Dy(),
  type: oI({
    UNHANDLED: -1,
    PURCHASE: 1,
    PREMIUM_SUBSCRIPTION: 2,
    DEVELOPER_GIFT: 3,
    TEST_MODE_PURCHASE: 4,
    FREE_PURCHASE: 5,
    USER_GIFT: 6,
    PREMIUM_PURCHASE: 7
  }),
  gifter_user_id: uy().optional().nullable(),
  branches: II(uy()).optional().nullable(),
  starts_at: uy().optional().nullable(),
  ends_at: uy().optional().nullable(),
  parent_id: uy().optional().nullable(),
  consumed: oy().optional().nullable(),
  deleted: oy().optional().nullable(),
  gift_code_batch_id: uy().optional().nullable()
});
oI({
  UNHANDLED: -1,
  UNLOCKED: 1,
  PORTRAIT: 2,
  LANDSCAPE: 3
});
const Jf = oI({
  UNHANDLED: -1,
  NOMINAL: 0,
  FAIR: 1,
  SERIOUS: 2,
  CRITICAL: 3
});
const nf = {
  UNHANDLED: -1,
  PORTRAIT: 0,
  LANDSCAPE: 1
};
oI(nf);
const Ff = {
  UNHANDLED: -1,
  FOCUSED: 0,
  PIP: 1,
  GRID: 2
};
oI(Ff);
const uf = "ERROR";
var Df;
!function (CC) {
  CC.READY = "READY";
  CC.VOICE_STATE_UPDATE = "VOICE_STATE_UPDATE";
  CC.SPEAKING_START = "SPEAKING_START";
  CC.SPEAKING_STOP = "SPEAKING_STOP";
  CC.ACTIVITY_LAYOUT_MODE_UPDATE = "ACTIVITY_LAYOUT_MODE_UPDATE";
  CC.ORIENTATION_UPDATE = "ORIENTATION_UPDATE";
  CC.CURRENT_USER_UPDATE = "CURRENT_USER_UPDATE";
  CC.ENTITLEMENT_CREATE = "ENTITLEMENT_CREATE";
  CC.THERMAL_STATE_UPDATE = "THERMAL_STATE_UPDATE";
  CC.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE = "ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE";
}(Df || (Df = {}));
const Zf = gf.extend({
  evt: SI(Df),
  nonce: uy().nullable(),
  cmd: eI(ff),
  data: fI({}).passthrough()
});
const lf = gf.extend({
  evt: eI(uf),
  data: fI({
    code: Dy(),
    message: uy().optional()
  }).passthrough(),
  cmd: SI(kk),
  nonce: uy().nullable()
});
const of = Zf.extend({
  evt: uy()
});
const vf = gI([Zf, of, lf]);
const hf = {
  [Df.READY]: {
    payload: Zf.extend({
      evt: eI(Df.READY),
      data: fI({
        v: Dy(),
        config: fI({
          cdn_host: uy().optional(),
          api_endpoint: uy(),
          environment: uy()
        }),
        user: fI({
          id: uy(),
          username: uy(),
          discriminator: uy(),
          avatar: uy().optional()
        }).optional()
      })
    })
  },
  [Df.VOICE_STATE_UPDATE]: {
    payload: Zf.extend({
      evt: eI(Df.VOICE_STATE_UPDATE),
      data: Lf
    }),
    subscribeArgs: fI({
      channel_id: uy()
    })
  },
  [Df.SPEAKING_START]: {
    payload: Zf.extend({
      evt: eI(Df.SPEAKING_START),
      data: fI({
        lobby_id: uy().optional(),
        channel_id: uy().optional(),
        user_id: uy()
      })
    }),
    subscribeArgs: fI({
      lobby_id: uy().nullable().optional(),
      channel_id: uy().nullable().optional()
    })
  },
  [Df.SPEAKING_STOP]: {
    payload: Zf.extend({
      evt: eI(Df.SPEAKING_STOP),
      data: fI({
        lobby_id: uy().optional(),
        channel_id: uy().optional(),
        user_id: uy()
      })
    }),
    subscribeArgs: fI({
      lobby_id: uy().nullable().optional(),
      channel_id: uy().nullable().optional()
    })
  },
  [Df.ACTIVITY_LAYOUT_MODE_UPDATE]: {
    payload: Zf.extend({
      evt: eI(Df.ACTIVITY_LAYOUT_MODE_UPDATE),
      data: fI({
        layout_mode: oI(Ff)
      })
    })
  },
  [Df.ORIENTATION_UPDATE]: {
    payload: Zf.extend({
      evt: eI(Df.ORIENTATION_UPDATE),
      data: fI({
        screen_orientation: oI(nf),
        orientation: SI(DI)
      })
    })
  },
  [Df.CURRENT_USER_UPDATE]: {
    payload: Zf.extend({
      evt: eI(Df.CURRENT_USER_UPDATE),
      data: Af
    })
  },
  [Df.ENTITLEMENT_CREATE]: {
    payload: Zf.extend({
      evt: eI(Df.ENTITLEMENT_CREATE),
      data: fI({
        entitlement: tf
      })
    })
  },
  [Df.THERMAL_STATE_UPDATE]: {
    payload: Zf.extend({
      evt: eI(Df.THERMAL_STATE_UPDATE),
      data: fI({
        thermal_state: Jf
      })
    })
  },
  [Df.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE]: {
    payload: Zf.extend({
      evt: eI(Df.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE),
      data: fI({
        participants: QI.shape.participants
      })
    })
  }
};
const Rf = fI({}).nullable();
const df = fI({
  code: uy()
});
const Qf = fI({
  guilds: II(fI({
    id: uy(),
    name: uy()
  }))
});
const Mf = fI({
  id: uy(),
  name: uy(),
  icon_url: uy().optional(),
  members: II(mk)
});
const Ck = fI({
  id: uy(),
  type: oI(Gf),
  guild_id: uy().optional().nullable(),
  name: uy().optional().nullable(),
  topic: uy().optional().nullable(),
  bitrate: Dy().optional().nullable(),
  user_limit: Dy().optional().nullable(),
  position: Dy().optional().nullable(),
  voice_states: II(Lf),
  messages: II(Vf)
});
const yk = fI({
  channels: II(ef)
});
Ck.nullable();
const Ik = Ck.nullable();
const fk = Ck.nullable();
fI({
  input: zf,
  output: zf,
  mode: Pf,
  automatic_gain_control: oy(),
  echo_cancellation: oy(),
  noise_suppression: oy(),
  qos: oy(),
  silence_warning: oy(),
  deaf: oy(),
  mute: oy()
});
const kg = fI({
  evt: uy()
});
const gk = fI({
  shortcut: xf
});
const Ak = bf;
const mg = fI({
  skus: II(Bf)
});
const Xk = fI({
  entitlements: II(tf)
});
const ig = II(tf).nullable();
const Lk = fI({
  use_interactive_pip: oy()
});
const Yk = fI({
  locale: uy()
});
const bk = fI({
  enabled: oy()
});
const rk = fI({
  permissions: ly().or(uy())
});
const Gk = fI({
  iosKeyboardResizesView: sI(oy())
});
const ek = gf.extend({
  cmd: SI(kk),
  evt: dy()
});
function Ok(CC) {
  let {
    cmd: yC,
    data: IC
  } = CC;
  switch (yC) {
    case kk.AUTHORIZE:
      return df.parse(IC);
    case kk.CAPTURE_SHORTCUT:
      return gk.parse(IC);
    case kk.ENCOURAGE_HW_ACCELERATION:
      return bk.parse(IC);
    case kk.GET_CHANNEL:
      return Ck.parse(IC);
    case kk.GET_CHANNELS:
      return yk.parse(IC);
    case kk.GET_CHANNEL_PERMISSIONS:
      return rk.parse(IC);
    case kk.GET_GUILD:
      return Mf.parse(IC);
    case kk.GET_GUILDS:
      return Qf.parse(IC);
    case kk.GET_PLATFORM_BEHAVIORS:
      return Gk.parse(IC);
    case kk.GET_CHANNEL:
      return Ck.parse(IC);
    case kk.SELECT_TEXT_CHANNEL:
      return fk.parse(IC);
    case kk.SELECT_VOICE_CHANNEL:
      return Ik.parse(IC);
    case kk.SET_ACTIVITY:
      return Ak.parse(IC);
    case kk.GET_SKUS_EMBEDDED:
      return mg.parse(IC);
    case kk.GET_ENTITLEMENTS_EMBEDDED:
      return Xk.parse(IC);
    case kk.SET_CONFIG:
      return Lk.parse(IC);
    case kk.START_PURCHASE:
      return ig.parse(IC);
    case kk.SUBSCRIBE:
    case kk.UNSUBSCRIBE:
      return kg.parse(IC);
    case kk.USER_SETTINGS_GET_LOCALE:
      return Yk.parse(IC);
    case kk.OPEN_EXTERNAL_LINK:
    case kk.SET_ORIENTATION_LOCK_STATE:
    case kk.SET_CERTIFIED_DEVICES:
    case kk.SEND_ANALYTICS_EVENT:
    case kk.OPEN_INVITE_DIALOG:
    case kk.CAPTURE_LOG:
    case kk.GET_SKUS:
    case kk.GET_ENTITLEMENTS:
      return Rf.parse(IC);
    case kk.AUTHENTICATE:
    case kk.INITIATE_IMAGE_UPLOAD:
    case kk.OPEN_SHARE_MOMENT_DIALOG:
    case kk.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS:
      const {
        response: CC
      } = If[yC];
      return CC.parse(IC);
    default:
      !function (CC, yC) {
        throw yC;
      }(0, new Error("Unrecognized command ".concat(yC)));
  }
}
fI({
  frame_id: uy(),
  platform: SI(ZI).optional().nullable()
});
fI({
  v: eI(1),
  encoding: eI("json").optional(),
  client_id: uy(),
  frame_id: uy()
});
const Sk = fI({
  code: Dy(),
  message: uy().optional()
});
const Tk = fI({
  evt: uy().nullable(),
  nonce: uy().nullable(),
  data: My().nullable(),
  cmd: uy()
}).passthrough();
function Nk(CC) {
  const yC = Tk.parse(CC);
  return null != yC.evt ? yC.evt === uf ? lf.parse(yC) : function (CC) {
    const yC = CC.evt;
    if (!(yC in Df)) {
      throw new Error("Unrecognized event type ".concat(CC.evt));
    }
    return hf[yC].payload.parse(CC);
  }(vf.parse(yC)) : function (CC) {
    return Object.assign(Object.assign({}, CC), {
      data: Ok(CC)
    });
  }(ek.passthrough().parse(yC));
}
function sk(CC, yC, IC) {
  let fC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {};
  const ky = gf.extend({
    cmd: eI(yC),
    data: IC
  });
  return async IC => {
    const gC = await CC({
      cmd: yC,
      args: IC,
      transfer: fC(IC)
    });
    return ky.parse(gC).data;
  };
}
function jg(CC) {
  let yC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {};
  const IC = If[CC].response;
  const fC = gf.extend({
    cmd: eI(CC),
    data: IC
  });
  return IC => async ky => {
    const gC = await IC({
      cmd: CC,
      args: ky,
      transfer: yC(ky)
    });
    return fC.parse(gC).data;
  };
}
const qk = jg(MI.AUTHENTICATE);
const Kk = CC => sk(CC, kk.AUTHORIZE, df);
const pk = CC => sk(CC, kk.CAPTURE_LOG, Rf);
const wk = CC => sk(CC, kk.ENCOURAGE_HW_ACCELERATION, bk);
const Hk = CC => sk(CC, kk.GET_ENTITLEMENTS_EMBEDDED, Xk);
const ak = CC => sk(CC, kk.GET_SKUS_EMBEDDED, mg);
const ck = CC => sk(CC, kk.GET_CHANNEL_PERMISSIONS, rk);
const Uk = CC => sk(CC, kk.GET_PLATFORM_BEHAVIORS, Gk);
const Ek = CC => sk(CC, kk.OPEN_EXTERNAL_LINK, Rf);
const Vk = CC => sk(CC, kk.OPEN_INVITE_DIALOG, Rf);
const Wk = jg(MI.OPEN_SHARE_MOMENT_DIALOG);
bf.iY({
  state: !0,
  details: !0,
  timestamps: !0,
  assets: !0,
  party: !0,
  secrets: !0,
  buttons: !0,
  instance: !0,
  supported_platforms: !0,
  type: !0
}).extend({
  type: bf.shape.type.optional(),
  instance: bf.shape.instance.optional()
}).nullable();
const xk = CC => sk(CC, kk.SET_ACTIVITY, Ak);
const Pk = CC => sk(CC, kk.SET_CONFIG, Lk);
const zk = CC => ({
  lock_state: CC.lock_state,
  picture_in_picture_lock_state: CC.picture_in_picture_lock_state
});
const Bk = CC => function (CC) {
  let {
    sendCommand: yC,
    cmd: IC,
    response: fC,
    fallbackTransform: ky,
    transferTransform: gC = () => {}
  } = CC;
  const AC = gf.extend({
    cmd: eI(IC),
    data: fC
  });
  return async CC => {
    try {
      const fC = await yC({
        cmd: IC,
        args: CC,
        transfer: gC(CC)
      });
      return AC.parse(fC).data;
    } catch (fC) {
      if (fC.code === uI.INVALID_PAYLOAD) {
        const fC = ky(CC);
        const my = await yC({
          cmd: IC,
          args: fC,
          transfer: gC(fC)
        });
        return AC.parse(my).data;
      }
      throw fC;
    }
  };
}({
  sendCommand: CC,
  cmd: kk.SET_ORIENTATION_LOCK_STATE,
  response: Rf,
  fallbackTransform: zk
});
const tk = CC => sk(CC, kk.START_PURCHASE, ig);
const Jk = CC => sk(CC, kk.USER_SETTINGS_GET_LOCALE, Yk);
const nk = jg(MI.INITIATE_IMAGE_UPLOAD);
const Fk = CC => sk(CC, kk.GET_CHANNEL, Ck);
const uk = jg(MI.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS);
var Dk = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
function Zk(CC) {
  return "string" === typeof CC && Dk.test(CC);
}
for (var lk = [], ok = 0; ok < 256; ++ok) {
  lk.push((ok + 256).toString(16).substr(1));
}
function vk(CC) {
  var yC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
  var IC = (lk[CC[yC + 0]] + lk[CC[yC + 1]] + lk[CC[yC + 2]] + lk[CC[yC + 3]] + "-" + lk[CC[yC + 4]] + lk[CC[yC + 5]] + "-" + lk[CC[yC + 6]] + lk[CC[yC + 7]] + "-" + lk[CC[yC + 8]] + lk[CC[yC + 9]] + "-" + lk[CC[yC + 10]] + lk[CC[yC + 11]] + lk[CC[yC + 12]] + lk[CC[yC + 13]] + lk[CC[yC + 14]] + lk[CC[yC + 15]]).toLowerCase();
  if (!Zk(IC)) {
    throw TypeError("Stringified UUID is invalid");
  }
  return IC;
}
var hk;
function Rk(CC, yC, IC) {
  function fC(CC, fC, ky, gC) {
    "string" === typeof CC && (CC = function (CC) {
      CC = unescape(encodeURIComponent(CC));
      for (var yC = [], IC = 0; IC < CC.length; ++IC) {
        yC.push(CC.charCodeAt(IC));
      }
      return yC;
    }(CC));
    "string" === typeof fC && (fC = function (CC) {
      if (!Zk(CC)) {
        throw TypeError("Invalid UUID");
      }
      var yC;
      var IC = new Uint8Array(16);
      IC[0] = (yC = parseInt(CC.slice(0, 8), 16)) >>> 24;
      IC[1] = yC >>> 16 & 255;
      IC[2] = yC >>> 8 & 255;
      IC[3] = 255 & yC;
      IC[4] = (yC = parseInt(CC.slice(9, 13), 16)) >>> 8;
      IC[5] = 255 & yC;
      IC[6] = (yC = parseInt(CC.slice(14, 18), 16)) >>> 8;
      IC[7] = 255 & yC;
      IC[8] = (yC = parseInt(CC.slice(19, 23), 16)) >>> 8;
      IC[9] = 255 & yC;
      IC[10] = (yC = parseInt(CC.slice(24, 36), 16)) / 1099511627776 & 255;
      IC[11] = yC / 4294967296 & 255;
      IC[12] = yC >>> 24 & 255;
      IC[13] = yC >>> 16 & 255;
      IC[14] = yC >>> 8 & 255;
      IC[15] = 255 & yC;
      return IC;
    }(fC));
    if (16 !== fC.length) {
      throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
    }
    var AC = new Uint8Array(16 + CC.length);
    AC.set(fC);
    AC.set(CC, fC.length);
    (AC = IC(AC))[6] = 15 & AC[6] | yC;
    AC[8] = 63 & AC[8] | 128;
    if (ky) {
      gC = gC || 0;
      for (var my = 0; my < 16; ++my) {
        ky[gC + my] = AC[my];
      }
      return ky;
    }
    return vk(AC);
  }
  try {
    fC.name = CC;
  } catch (ky) {}
  fC.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
  fC.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
  return fC;
}
function dk(CC) {
  return 14 + (CC + 64 >>> 9 << 4) + 1;
}
function Qk(CC, yC) {
  var IC = (65535 & CC) + (65535 & yC);
  return (CC >> 16) + (yC >> 16) + (IC >> 16) << 16 | 65535 & IC;
}
function Mk(CC, yC, IC, fC, ky, gC) {
  return Qk((AC = Qk(Qk(yC, CC), Qk(fC, gC))) << (my = ky) | AC >>> 32 - my, IC);
  var AC;
  var my;
}
function Cg(CC, yC, IC, fC, ky, gC, AC) {
  return Mk(yC & IC | ~yC & fC, CC, yC, ky, gC, AC);
}
function yg(CC, yC, IC, fC, ky, gC, AC) {
  return Mk(yC & fC | IC & ~fC, CC, yC, ky, gC, AC);
}
function Ig(CC, yC, IC, fC, ky, gC, AC) {
  return Mk(yC ^ IC ^ fC, CC, yC, ky, gC, AC);
}
function fg(CC, yC, IC, fC, ky, gC, AC) {
  return Mk(IC ^ (yC | ~fC), CC, yC, ky, gC, AC);
}
Rk("v3", 48, function (CC) {
  if ("string" === typeof CC) {
    var yC = unescape(encodeURIComponent(CC));
    CC = new Uint8Array(yC.length);
    for (var IC = 0; IC < yC.length; ++IC) {
      CC[IC] = yC.charCodeAt(IC);
    }
  }
  return function (CC) {
    for (var yC = [], IC = 32 * CC.length, fC = "0123456789abcdef", ky = 0; ky < IC; ky += 8) {
      var gC = CC[ky >> 5] >>> ky % 32 & 255;
      var AC = parseInt(fC.charAt(gC >>> 4 & 15) + fC.charAt(15 & gC), 16);
      yC.push(AC);
    }
    return yC;
  }(function (CC, yC) {
    CC[yC >> 5] |= 128 << yC % 32;
    CC[dk(yC) - 1] = yC;
    for (var IC = 1732584193, fC = -271733879, ky = -1732584194, gC = 271733878, AC = 0; AC < CC.length; AC += 16) {
      var my = IC;
      var XC = fC;
      var iy = ky;
      var LC = gC;
      IC = Cg(IC, fC, ky, gC, CC[AC], 7, -680876936);
      gC = Cg(gC, IC, fC, ky, CC[AC + 1], 12, -389564586);
      ky = Cg(ky, gC, IC, fC, CC[AC + 2], 17, 606105819);
      fC = Cg(fC, ky, gC, IC, CC[AC + 3], 22, -1044525330);
      IC = Cg(IC, fC, ky, gC, CC[AC + 4], 7, -176418897);
      gC = Cg(gC, IC, fC, ky, CC[AC + 5], 12, 1200080426);
      ky = Cg(ky, gC, IC, fC, CC[AC + 6], 17, -1473231341);
      fC = Cg(fC, ky, gC, IC, CC[AC + 7], 22, -45705983);
      IC = Cg(IC, fC, ky, gC, CC[AC + 8], 7, 1770035416);
      gC = Cg(gC, IC, fC, ky, CC[AC + 9], 12, -1958414417);
      ky = Cg(ky, gC, IC, fC, CC[AC + 10], 17, -42063);
      fC = Cg(fC, ky, gC, IC, CC[AC + 11], 22, -1990404162);
      IC = Cg(IC, fC, ky, gC, CC[AC + 12], 7, 1804603682);
      gC = Cg(gC, IC, fC, ky, CC[AC + 13], 12, -40341101);
      ky = Cg(ky, gC, IC, fC, CC[AC + 14], 17, -1502002290);
      IC = yg(IC, fC = Cg(fC, ky, gC, IC, CC[AC + 15], 22, 1236535329), ky, gC, CC[AC + 1], 5, -165796510);
      gC = yg(gC, IC, fC, ky, CC[AC + 6], 9, -1069501632);
      ky = yg(ky, gC, IC, fC, CC[AC + 11], 14, 643717713);
      fC = yg(fC, ky, gC, IC, CC[AC], 20, -373897302);
      IC = yg(IC, fC, ky, gC, CC[AC + 5], 5, -701558691);
      gC = yg(gC, IC, fC, ky, CC[AC + 10], 9, 38016083);
      ky = yg(ky, gC, IC, fC, CC[AC + 15], 14, -660478335);
      fC = yg(fC, ky, gC, IC, CC[AC + 4], 20, -405537848);
      IC = yg(IC, fC, ky, gC, CC[AC + 9], 5, 568446438);
      gC = yg(gC, IC, fC, ky, CC[AC + 14], 9, -1019803690);
      ky = yg(ky, gC, IC, fC, CC[AC + 3], 14, -187363961);
      fC = yg(fC, ky, gC, IC, CC[AC + 8], 20, 1163531501);
      IC = yg(IC, fC, ky, gC, CC[AC + 13], 5, -1444681467);
      gC = yg(gC, IC, fC, ky, CC[AC + 2], 9, -51403784);
      ky = yg(ky, gC, IC, fC, CC[AC + 7], 14, 1735328473);
      IC = Ig(IC, fC = yg(fC, ky, gC, IC, CC[AC + 12], 20, -1926607734), ky, gC, CC[AC + 5], 4, -378558);
      gC = Ig(gC, IC, fC, ky, CC[AC + 8], 11, -2022574463);
      ky = Ig(ky, gC, IC, fC, CC[AC + 11], 16, 1839030562);
      fC = Ig(fC, ky, gC, IC, CC[AC + 14], 23, -35309556);
      IC = Ig(IC, fC, ky, gC, CC[AC + 1], 4, -1530992060);
      gC = Ig(gC, IC, fC, ky, CC[AC + 4], 11, 1272893353);
      ky = Ig(ky, gC, IC, fC, CC[AC + 7], 16, -155497632);
      fC = Ig(fC, ky, gC, IC, CC[AC + 10], 23, -1094730640);
      IC = Ig(IC, fC, ky, gC, CC[AC + 13], 4, 681279174);
      gC = Ig(gC, IC, fC, ky, CC[AC], 11, -358537222);
      ky = Ig(ky, gC, IC, fC, CC[AC + 3], 16, -722521979);
      fC = Ig(fC, ky, gC, IC, CC[AC + 6], 23, 76029189);
      IC = Ig(IC, fC, ky, gC, CC[AC + 9], 4, -640364487);
      gC = Ig(gC, IC, fC, ky, CC[AC + 12], 11, -421815835);
      ky = Ig(ky, gC, IC, fC, CC[AC + 15], 16, 530742520);
      IC = fg(IC, fC = Ig(fC, ky, gC, IC, CC[AC + 2], 23, -995338651), ky, gC, CC[AC], 6, -198630844);
      gC = fg(gC, IC, fC, ky, CC[AC + 7], 10, 1126891415);
      ky = fg(ky, gC, IC, fC, CC[AC + 14], 15, -1416354905);
      fC = fg(fC, ky, gC, IC, CC[AC + 5], 21, -57434055);
      IC = fg(IC, fC, ky, gC, CC[AC + 12], 6, 1700485571);
      gC = fg(gC, IC, fC, ky, CC[AC + 3], 10, -1894986606);
      ky = fg(ky, gC, IC, fC, CC[AC + 10], 15, -1051523);
      fC = fg(fC, ky, gC, IC, CC[AC + 1], 21, -2054922799);
      IC = fg(IC, fC, ky, gC, CC[AC + 8], 6, 1873313359);
      gC = fg(gC, IC, fC, ky, CC[AC + 15], 10, -30611744);
      ky = fg(ky, gC, IC, fC, CC[AC + 6], 15, -1560198380);
      fC = fg(fC, ky, gC, IC, CC[AC + 13], 21, 1309151649);
      IC = fg(IC, fC, ky, gC, CC[AC + 4], 6, -145523070);
      gC = fg(gC, IC, fC, ky, CC[AC + 11], 10, -1120210379);
      ky = fg(ky, gC, IC, fC, CC[AC + 2], 15, 718787259);
      fC = fg(fC, ky, gC, IC, CC[AC + 9], 21, -343485551);
      IC = Qk(IC, my);
      fC = Qk(fC, XC);
      ky = Qk(ky, iy);
      gC = Qk(gC, LC);
    }
    return [IC, fC, ky, gC];
  }(function (CC) {
    if (0 === CC.length) {
      return [];
    }
    for (var yC = 8 * CC.length, IC = new Uint32Array(dk(yC)), fC = 0; fC < yC; fC += 8) {
      IC[fC >> 5] |= (255 & CC[fC / 8]) << fC % 32;
    }
    return IC;
  }(CC), 8 * CC.length));
});
var kA = new Uint8Array(16);
function gg() {
  if (!hk && !(hk = "undefined" !== typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" !== typeof msCrypto && "function" === typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto))) {
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  }
  return hk(kA);
}
function Ag(CC, yC, IC) {
  var fC = (CC = CC || {}).random || (CC.rng || gg)();
  fC[6] = 15 & fC[6] | 64;
  fC[8] = 63 & fC[8] | 128;
  if (yC) {
    IC = IC || 0;
    for (var ky = 0; ky < 16; ++ky) {
      yC[IC + ky] = fC[ky];
    }
    return yC;
  }
  return vk(fC);
}
function mA(CC, yC, IC, fC) {
  switch (CC) {
    case 0:
      return yC & IC ^ ~yC & fC;
    case 1:
    case 3:
      return yC ^ IC ^ fC;
    case 2:
      return yC & IC ^ yC & fC ^ IC & fC;
  }
}
function Xg(CC, yC) {
  return CC << yC | CC >>> 32 - yC;
}
Rk("v5", 80, function (CC) {
  var yC = [1518500249, 1859775393, 2400959708, 3395469782];
  var IC = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
  if ("string" === typeof CC) {
    var fC = unescape(encodeURIComponent(CC));
    CC = [];
    for (var ky = 0; ky < fC.length; ++ky) {
      CC.push(fC.charCodeAt(ky));
    }
  } else {
    Array.isArray(CC) || (CC = Array.prototype.slice.call(CC));
  }
  CC.push(128);
  for (var gC = CC.length / 4 + 2, AC = Math.ceil(gC / 16), my = new Array(AC), XC = 0; XC < AC; ++XC) {
    for (var iy = new Uint32Array(16), LC = 0; LC < 16; ++LC) {
      iy[LC] = CC[64 * XC + 4 * LC] << 24 | CC[64 * XC + 4 * LC + 1] << 16 | CC[64 * XC + 4 * LC + 2] << 8 | CC[64 * XC + 4 * LC + 3];
    }
    my[XC] = iy;
  }
  my[AC - 1][14] = 8 * (CC.length - 1) / Math.pow(2, 32);
  my[AC - 1][14] = Math.floor(my[AC - 1][14]);
  my[AC - 1][15] = 8 * (CC.length - 1) & 4294967295;
  for (var YC = 0; YC < AC; ++YC) {
    for (var bC = new Uint32Array(80), rC = 0; rC < 16; ++rC) {
      bC[rC] = my[YC][rC];
    }
    for (var GC = 16; GC < 80; ++GC) {
      bC[GC] = Xg(bC[GC - 3] ^ bC[GC - 8] ^ bC[GC - 14] ^ bC[GC - 16], 1);
    }
    for (var eC = IC[0], OC = IC[1], SC = IC[2], TC = IC[3], NC = IC[4], sC = 0; sC < 80; ++sC) {
      var jy = Math.floor(sC / 20);
      var qC = Xg(eC, 5) + mA(jy, OC, SC, TC) + NC + yC[jy] + bC[sC] >>> 0;
      NC = TC;
      TC = SC;
      SC = Xg(OC, 30) >>> 0;
      OC = eC;
      eC = qC;
    }
    IC[0] = IC[0] + eC >>> 0;
    IC[1] = IC[1] + OC >>> 0;
    IC[2] = IC[2] + SC >>> 0;
    IC[3] = IC[3] + TC >>> 0;
    IC[4] = IC[4] + NC >>> 0;
  }
  return [IC[0] >> 24 & 255, IC[0] >> 16 & 255, IC[0] >> 8 & 255, 255 & IC[0], IC[1] >> 24 & 255, IC[1] >> 16 & 255, IC[1] >> 8 & 255, 255 & IC[1], IC[2] >> 24 & 255, IC[2] >> 16 & 255, IC[2] >> 8 & 255, 255 & IC[2], IC[3] >> 24 & 255, IC[3] >> 16 & 255, IC[3] >> 8 & 255, 255 & IC[3], IC[4] >> 24 & 255, IC[4] >> 16 & 255, IC[4] >> 8 & 255, 255 & IC[4]];
});
class iA extends Error {
  constructor(CC) {
    let yC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
    super(yC);
    this.code = CC;
    this.message = yC;
    this.name = "Discord SDK Error";
  }
}
const Lg = ["log", "warn", "debug", "info", "error"];
var Yg;
!function (CC) {
  CC[CC.HANDSHAKE = 0] = "HANDSHAKE";
  CC[CC.FRAME = 1] = "FRAME";
  CC[CC.CLOSE = 2] = "CLOSE";
  CC[CC.HELLO = 3] = "HELLO";
}(Yg || (Yg = {}));
const bg = new Set("undefined" === typeof window ? [] : [window.location.origin, "https://discord.com", "https://discordapp.com", "https://ptb.discord.com", "https://ptb.discordapp.com", "https://canary.discord.com", "https://canary.discordapp.com", "https://staging.discord.co", "http://localhost:3333", "https://pax.discord.com", "null"]);
class rg {
  getTransfer(CC) {
    var yC;
    switch (CC.cmd) {
      case kk.SUBSCRIBE:
      case kk.UNSUBSCRIBE:
        return;
      default:
        return null !== (yC = CC.transfer) && void 0 !== yC ? yC : void 0;
    }
  }
  constructor(CC, yC) {
    var IC;
    this.eventBus = new OC();
    this.source = null;
    this.sourceOrigin = "";
    this.pendingCommands = new Map();
    this.sendCommand = CC => {
      var yC;
      if (null == this.source) {
        throw new Error("Attempting to send message before initialization");
      }
      const IC = Ag();
      null === (yC = this.source) || void 0 === yC || yC.postMessage([Yg.FRAME, Object.assign(Object.assign({}, CC), {
        nonce: IC
      })], this.sourceOrigin, this.getTransfer(CC));
      return new Promise((CC, yC) => {
        this.pendingCommands.set(IC, {
          resolve: CC,
          reject: yC
        });
      });
    };
    this.commands = (IC = this.sendCommand, {
      authenticate: qk(IC),
      authorize: Kk(IC),
      captureLog: pk(IC),
      encourageHardwareAcceleration: wk(IC),
      getChannel: Fk(IC),
      getChannelPermissions: ck(IC),
      getEntitlements: Hk(IC),
      getPlatformBehaviors: Uk(IC),
      getSkus: ak(IC),
      openExternalLink: Ek(IC),
      openInviteDialog: Vk(IC),
      openShareMomentDialog: Wk(IC),
      setActivity: xk(IC),
      setConfig: Pk(IC),
      setOrientationLockState: Bk(IC),
      startPurchase: tk(IC),
      userSettingsGetLocale: Jk(IC),
      initiateImageUpload: nk(IC),
      getInstanceConnectedParticipants: uk(IC)
    });
    this.handleMessage = CC => {
      if (!bg.has(CC.origin)) {
        return;
      }
      const yC = CC.data;
      if (!Array.isArray(yC)) {
        return;
      }
      const [IC, fC] = yC;
      switch (IC) {
        case Yg.HELLO:
          return;
        case Yg.CLOSE:
          return this.handleClose(fC);
        case Yg.HANDSHAKE:
          return this.handleHandshake();
        case Yg.FRAME:
          return this.handleFrame(fC);
        default:
          throw new Error("Invalid message format");
      }
    };
    this.isReady = !1;
    this.clientId = CC;
    this.configuration = null !== yC && void 0 !== yC ? yC : {
      disableConsoleLogOverride: !1
    };
    "undefined" !== typeof window && window.addEventListener("message", this.handleMessage);
    if ("undefined" === typeof window) {
      this.frameId = "";
      this.instanceId = "";
      this.platform = ZI.DESKTOP;
      this.guildId = null;
      return void (this.channelId = null);
    }
    const fC = new URLSearchParams(this._getSearch());
    const ky = fC.get("frame_id");
    if (!ky) {
      throw new Error("frame_id query param is not defined");
    }
    this.frameId = ky;
    const gC = fC.get("instance_id");
    if (!gC) {
      throw new Error("instance_id query param is not defined");
    }
    this.instanceId = gC;
    const AC = fC.get("platform");
    if (!AC) {
      throw new Error("platform query param is not defined");
    }
    if (AC !== ZI.DESKTOP && AC !== ZI.MOBILE) {
      throw new Error('Invalid query param "platform" of "'.concat(AC, '". Valid values are "').concat(ZI.DESKTOP, '" or "').concat(ZI.MOBILE, '"'));
    }
    this.platform = AC;
    this.guildId = fC.get("guild_id");
    this.channelId = fC.get("channel_id");
    [this.source, this.sourceOrigin] = function () {
      var CC;
      return [null !== (CC = window.parent.opener) && void 0 !== CC ? CC : window.parent, document.referrer ? document.referrer : "*"];
    }();
    this.addOnReadyListener();
    this.handshake();
  }
  close(CC, yC) {
    var IC;
    window.removeEventListener("message", this.handleMessage);
    const fC = Ag();
    null === (IC = this.source) || void 0 === IC || IC.postMessage([Yg.CLOSE, {
      code: CC,
      message: yC,
      nonce: fC
    }], this.sourceOrigin);
  }
  async subscribe(CC, yC) {
    for (var IC = arguments.length, fC = new Array(IC > 2 ? IC - 2 : 0), ky = 2; ky < IC; ky++) {
      fC[ky - 2] = arguments[ky];
    }
    const [gC] = fC;
    const AC = this.eventBus.listenerCount(CC);
    const my = this.eventBus.on(CC, yC);
    Object.values(Df).includes(CC) && CC !== Df.READY && 0 === AC && (await this.sendCommand({
      cmd: kk.SUBSCRIBE,
      args: gC,
      evt: CC
    }));
    return my;
  }
  async unsubscribe(CC, yC) {
    for (var IC = arguments.length, fC = new Array(IC > 2 ? IC - 2 : 0), ky = 2; ky < IC; ky++) {
      fC[ky - 2] = arguments[ky];
    }
    const [gC] = fC;
    CC !== Df.READY && 1 === this.eventBus.listenerCount(CC) && (await this.sendCommand({
      cmd: kk.UNSUBSCRIBE,
      evt: CC,
      args: gC
    }));
    return this.eventBus.off(CC, yC);
  }
  async ready() {
    this.isReady || (await new Promise(CC => {
      this.eventBus.once(Df.READY, CC);
    }));
  }
  handshake() {
    var CC;
    null === (CC = this.source) || void 0 === CC || CC.postMessage([Yg.HANDSHAKE, {
      v: 1,
      encoding: "json",
      client_id: this.clientId,
      frame_id: this.frameId
    }], this.sourceOrigin);
  }
  addOnReadyListener() {
    this.eventBus.once(Df.READY, () => {
      this.overrideConsoleLogging();
      this.isReady = !0;
    });
  }
  overrideConsoleLogging() {
    if (this.configuration.disableConsoleLogOverride) {
      return;
    }
    const CC = (CC, yC) => {
      this.commands.captureLog({
        level: CC,
        message: yC
      });
    };
    Lg.forEach(yC => {
      !function (CC, yC, IC) {
        const fC = CC[yC];
        const ky = CC;
        fC && (CC[yC] = function () {
          const CC = [].slice.call(arguments);
          const gC = "" + CC.join(" ");
          IC(yC, gC);
          fC.apply(ky, CC);
        });
      }(console, yC, CC);
    });
  }
  handleClose(CC) {
    Sk.parse(CC);
  }
  handleHandshake() {}
  handleFrame(CC) {
    var yC;
    var IC;
    let fC;
    try {
      fC = Nk(CC);
    } catch (ky) {
      console.error("Failed to parse", CC);
      return void console.error(ky);
    }
    if ("DISPATCH" === fC.cmd) {
      this.eventBus.emit(fC.evt, fC.data);
    } else {
      if (fC.evt === uf) {
        if (null != fC.nonce) {
          null === (yC = this.pendingCommands.get(fC.nonce)) || void 0 === yC || yC.reject(fC.data);
          return void this.pendingCommands.delete(fC.nonce);
        }
        this.eventBus.emit("error", new iA(fC.data.code, fC.data.message));
      }
      if (null == fC.nonce) {
        return void console.error("Missing nonce", CC);
      }
      null === (IC = this.pendingCommands.get(fC.nonce)) || void 0 === IC || IC.resolve(fC);
      this.pendingCommands.delete(fC.nonce);
    }
  }
  _getSearch() {
    return "undefined" === typeof window ? "" : window.location.search;
  }
}
var Gg;
var eg = 1e9;
var Og = !0;
var Sg = "[DecimalError] ";
var Tg = Sg + "Invalid argument: ";
var Ng = Sg + "Exponent out of range: ";
var sg = Math.floor;
var jA = Math.pow;
var qg = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
var Kg = 1e7;
var pg = 9007199254740991;
var wg = sg(1286742750677284.5);
var Hg = {};
function ag(CC, yC) {
  var IC;
  var fC;
  var ky;
  var gC;
  var AC;
  var my;
  var XC;
  var iy;
  var LC = CC.constructor;
  var YC = LC.precision;
  if (!CC.s || !yC.s) {
    yC.s || (yC = new LC(CC));
    return Og ? tg(yC, YC) : yC;
  }
  XC = CC.d;
  iy = yC.d;
  AC = CC.e;
  ky = yC.e;
  XC = XC.slice();
  if (gC = AC - ky) {
    gC < 0 ? (fC = XC, gC = -gC, my = iy.length) : (fC = iy, ky = AC, my = XC.length);
    gC > (my = (AC = Math.ceil(YC / 7)) > my ? AC + 1 : my + 1) && (gC = my, fC.length = 1);
    fC.reverse();
    for (; gC--;) {
      fC.push(0);
    }
    fC.reverse();
  }
  (my = XC.length) - (gC = iy.length) < 0 && (gC = my, fC = iy, iy = XC, XC = fC);
  IC = 0;
  for (; gC;) {
    IC = (XC[--gC] = XC[gC] + iy[gC] + IC) / Kg | 0;
    XC[gC] %= Kg;
  }
  IC && (XC.unshift(IC), ++ky);
  my = XC.length;
  for (; 0 == XC[--my];) {
    XC.pop();
  }
  yC.d = XC;
  yC.e = ky;
  return Og ? tg(yC, YC) : yC;
}
function cg(CC, yC, IC) {
  if (CC !== ~~CC || CC < yC || CC > IC) {
    throw Error(Tg + CC);
  }
}
function Ug(CC) {
  var yC;
  var IC;
  var fC;
  var ky = CC.length - 1;
  var gC = "";
  var AC = CC[0];
  if (ky > 0) {
    gC += AC;
    yC = 1;
    for (; yC < ky; yC++) {
      (IC = 7 - (fC = CC[yC] + "").length) && (gC += Pg(IC));
      gC += fC;
    }
    (IC = 7 - (fC = (AC = CC[yC]) + "").length) && (gC += Pg(IC));
  } else {
    if (0 === AC) {
      return "0";
    }
  }
  for (; AC % 10 === 0;) {
    AC /= 10;
  }
  return gC + AC;
}
Hg.absoluteValue = Hg.abs = function () {
  var CC = new this.constructor(this);
  CC.s && (CC.s = 1);
  return CC;
};
Hg.comparedTo = Hg.cmp = function (CC) {
  var yC;
  var IC;
  var fC;
  var ky;
  var gC = this;
  CC = new gC.constructor(CC);
  if (gC.s !== CC.s) {
    return gC.s || -CC.s;
  }
  if (gC.e !== CC.e) {
    return gC.e > CC.e ^ gC.s < 0 ? 1 : -1;
  }
  yC = 0;
  IC = (fC = gC.d.length) < (ky = CC.d.length) ? fC : ky;
  for (; yC < IC; ++yC) {
    if (gC.d[yC] !== CC.d[yC]) {
      return gC.d[yC] > CC.d[yC] ^ gC.s < 0 ? 1 : -1;
    }
  }
  return fC === ky ? 0 : fC > ky ^ gC.s < 0 ? 1 : -1;
};
Hg.decimalPlaces = Hg.dp = function () {
  var CC = this;
  var yC = CC.d.length - 1;
  var IC = 7 * (yC - CC.e);
  if (yC = CC.d[yC]) {
    for (; yC % 10 == 0; yC /= 10) {
      IC--;
    }
  }
  return IC < 0 ? 0 : IC;
};
Hg.dividedBy = Hg.div = function (CC) {
  return Eg(this, new this.constructor(CC));
};
Hg.dividedToIntegerBy = Hg.idiv = function (CC) {
  var yC = this.constructor;
  return tg(Eg(this, new yC(CC), 0, 1), yC.precision);
};
Hg.equals = Hg.eq = function (CC) {
  return !this.cmp(CC);
};
Hg.exponent = function () {
  return Wg(this);
};
Hg.greaterThan = Hg.gt = function (CC) {
  return this.cmp(CC) > 0;
};
Hg.greaterThanOrEqualTo = Hg.gte = function (CC) {
  return this.cmp(CC) >= 0;
};
Hg.isInteger = Hg.isint = function () {
  return this.e > this.d.length - 2;
};
Hg.isNegative = Hg.isneg = function () {
  return this.s < 0;
};
Hg.isPositive = Hg.ispos = function () {
  return this.s > 0;
};
Hg.isZero = function () {
  return 0 === this.s;
};
Hg.lessThan = Hg.lt = function (CC) {
  return this.cmp(CC) < 0;
};
Hg.lessThanOrEqualTo = Hg.lte = function (CC) {
  return this.cmp(CC) < 1;
};
Hg.logarithm = Hg.log = function (CC) {
  var yC;
  var IC = this;
  var fC = IC.constructor;
  var ky = fC.precision;
  var gC = ky + 5;
  if (void 0 === CC) {
    CC = new fC(10);
  } else {
    if ((CC = new fC(CC)).s < 1 || CC.eq(Gg)) {
      throw Error(Sg + "NaN");
    }
  }
  if (IC.s < 1) {
    throw Error(Sg + (IC.s ? "NaN" : "-Infinity"));
  }
  return IC.eq(Gg) ? new fC(0) : (Og = !1, yC = Eg(zg(IC, gC), zg(CC, gC), gC), Og = !0, tg(yC, ky));
};
Hg.minus = Hg.sub = function (CC) {
  var yC = this;
  CC = new yC.constructor(CC);
  return yC.s == CC.s ? Jg(yC, CC) : ag(yC, (CC.s = -CC.s, CC));
};
Hg.modulo = Hg.mod = function (CC) {
  var yC;
  var IC = this;
  var fC = IC.constructor;
  var ky = fC.precision;
  if (!(CC = new fC(CC)).s) {
    throw Error(Sg + "NaN");
  }
  return IC.s ? (Og = !1, yC = Eg(IC, CC, 0, 1).times(CC), Og = !0, IC.minus(yC)) : tg(new fC(IC), ky);
};
Hg.naturalExponential = Hg.exp = function () {
  return Vg(this);
};
Hg.naturalLogarithm = Hg.ln = function () {
  return zg(this);
};
Hg.negated = Hg.neg = function () {
  var CC = new this.constructor(this);
  CC.s = -CC.s || 0;
  return CC;
};
Hg.plus = Hg.add = function (CC) {
  var yC = this;
  CC = new yC.constructor(CC);
  return yC.s == CC.s ? ag(yC, CC) : Jg(yC, (CC.s = -CC.s, CC));
};
Hg.precision = Hg.sd = function (CC) {
  var yC;
  var IC;
  var fC;
  var ky = this;
  if (void 0 !== CC && CC !== !!CC && 1 !== CC && 0 !== CC) {
    throw Error(Tg + CC);
  }
  yC = Wg(ky) + 1;
  IC = 7 * (fC = ky.d.length - 1) + 1;
  if (fC = ky.d[fC]) {
    for (; fC % 10 == 0; fC /= 10) {
      IC--;
    }
    for (fC = ky.d[0]; fC >= 10; fC /= 10) {
      IC++;
    }
  }
  return CC && yC > IC ? yC : IC;
};
Hg.squareRoot = Hg.sqrt = function () {
  var CC;
  var yC;
  var IC;
  var fC;
  var ky;
  var gC;
  var AC;
  var my = this;
  var XC = my.constructor;
  if (my.s < 1) {
    if (!my.s) {
      return new XC(0);
    }
    throw Error(Sg + "NaN");
  }
  CC = Wg(my);
  Og = !1;
  0 == (ky = Math.sqrt(+my)) || ky == 1 / 0 ? (((yC = Ug(my.d)).length + CC) % 2 == 0 && (yC += "0"), ky = Math.sqrt(yC), CC = sg((CC + 1) / 2) - (CC < 0 || CC % 2), fC = new XC(yC = ky == 1 / 0 ? "1e" + CC : (yC = ky.toExponential()).slice(0, yC.indexOf("e") + 1) + CC)) : fC = new XC(ky.toString());
  ky = AC = (IC = XC.precision) + 3;
  for (;;) {
    fC = (gC = fC).plus(Eg(my, gC, AC + 2)).times(.5);
    if (Ug(gC.d).slice(0, AC) === (yC = Ug(fC.d)).slice(0, AC)) {
      yC = yC.slice(AC - 3, AC + 1);
      if (ky == AC && "4999" == yC) {
        tg(gC, IC + 1, 0);
        if (gC.times(gC).eq(my)) {
          fC = gC;
          break;
        }
      } else {
        if ("9999" != yC) {
          break;
        }
      }
      AC += 4;
    }
  }
  Og = !0;
  return tg(fC, IC);
};
Hg.times = Hg.mul = function (CC) {
  var yC;
  var IC;
  var fC;
  var ky;
  var gC;
  var AC;
  var my;
  var XC;
  var iy;
  var LC = this;
  var YC = LC.constructor;
  var bC = LC.d;
  var rC = (CC = new YC(CC)).d;
  if (!LC.s || !CC.s) {
    return new YC(0);
  }
  CC.s *= LC.s;
  IC = LC.e + CC.e;
  (XC = bC.length) < (iy = rC.length) && (gC = bC, bC = rC, rC = gC, AC = XC, XC = iy, iy = AC);
  gC = [];
  fC = AC = XC + iy;
  for (; fC--;) {
    gC.push(0);
  }
  for (fC = iy; --fC >= 0;) {
    yC = 0;
    ky = XC + fC;
    for (; ky > fC;) {
      my = gC[ky] + rC[fC] * bC[ky - fC - 1] + yC;
      gC[ky--] = my % Kg | 0;
      yC = my / Kg | 0;
    }
    gC[ky] = (gC[ky] + yC) % Kg | 0;
  }
  for (; !gC[--AC];) {
    gC.pop();
  }
  yC ? ++IC : gC.shift();
  CC.d = gC;
  CC.e = IC;
  return Og ? tg(CC, YC.precision) : CC;
};
Hg.toDecimalPlaces = Hg.todp = function (CC, yC) {
  var IC = this;
  var fC = IC.constructor;
  IC = new fC(IC);
  return void 0 === CC ? IC : (cg(CC, 0, eg), void 0 === yC ? yC = fC.rounding : cg(yC, 0, 8), tg(IC, CC + Wg(IC) + 1, yC));
};
Hg.toExponential = function (CC, yC) {
  var IC;
  var fC = this;
  var ky = fC.constructor;
  void 0 === CC ? IC = ng(fC, !0) : (cg(CC, 0, eg), void 0 === yC ? yC = ky.rounding : cg(yC, 0, 8), IC = ng(fC = tg(new ky(fC), CC + 1, yC), !0, CC + 1));
  return IC;
};
Hg.toFixed = function (CC, yC) {
  var IC;
  var fC;
  var ky = this;
  var gC = ky.constructor;
  return void 0 === CC ? ng(ky) : (cg(CC, 0, eg), void 0 === yC ? yC = gC.rounding : cg(yC, 0, 8), IC = ng((fC = tg(new gC(ky), CC + Wg(ky) + 1, yC)).abs(), !1, CC + Wg(fC) + 1), ky.isneg() && !ky.isZero() ? "-" + IC : IC);
};
Hg.toInteger = Hg.toint = function () {
  var CC = this;
  var yC = CC.constructor;
  return tg(new yC(CC), Wg(CC) + 1, yC.rounding);
};
Hg.toNumber = function () {
  return +this;
};
Hg.toPower = Hg.pow = function (CC) {
  var yC;
  var IC;
  var fC;
  var ky;
  var gC;
  var AC;
  var my = this;
  var XC = my.constructor;
  var iy = +(CC = new XC(CC));
  if (!CC.s) {
    return new XC(Gg);
  }
  if (!(my = new XC(my)).s) {
    if (CC.s < 1) {
      throw Error(Sg + "Infinity");
    }
    return my;
  }
  if (my.eq(Gg)) {
    return my;
  }
  fC = XC.precision;
  if (CC.eq(Gg)) {
    return tg(my, fC);
  }
  AC = (yC = CC.e) >= (IC = CC.d.length - 1);
  gC = my.s;
  if (AC) {
    if ((IC = iy < 0 ? -iy : iy) <= pg) {
      ky = new XC(Gg);
      yC = Math.ceil(fC / 7 + 4);
      Og = !1;
      for (; IC % 2 && Fg((ky = ky.times(my)).d, yC), 0 !== (IC = sg(IC / 2));) {
        Fg((my = my.times(my)).d, yC);
      }
      Og = !0;
      return CC.s < 0 ? new XC(Gg).div(ky) : tg(ky, fC);
    }
  } else {
    if (gC < 0) {
      throw Error(Sg + "NaN");
    }
  }
  gC = gC < 0 && 1 & CC.d[Math.max(yC, IC)] ? -1 : 1;
  my.s = 1;
  Og = !1;
  ky = CC.times(zg(my, fC + 12));
  Og = !0;
  (ky = Vg(ky)).s = gC;
  return ky;
};
Hg.toPrecision = function (CC, yC) {
  var IC;
  var fC;
  var ky = this;
  var gC = ky.constructor;
  void 0 === CC ? fC = ng(ky, (IC = Wg(ky)) <= gC.toExpNeg || IC >= gC.toExpPos) : (cg(CC, 1, eg), void 0 === yC ? yC = gC.rounding : cg(yC, 0, 8), fC = ng(ky = tg(new gC(ky), CC, yC), CC <= (IC = Wg(ky)) || IC <= gC.toExpNeg, CC));
  return fC;
};
Hg.toSignificantDigits = Hg.tosd = function (CC, yC) {
  var IC = this.constructor;
  void 0 === CC ? (CC = IC.precision, yC = IC.rounding) : (cg(CC, 1, eg), void 0 === yC ? yC = IC.rounding : cg(yC, 0, 8));
  return tg(new IC(this), CC, yC);
};
Hg.toString = Hg.valueOf = Hg.val = Hg.toJSON = Hg[Symbol.for("nodejs.util.inspect.custom")] = function () {
  var CC = this;
  var yC = Wg(CC);
  var IC = CC.constructor;
  return ng(CC, yC <= IC.toExpNeg || yC >= IC.toExpPos);
};
var Eg = function () {
  function CC(CC, yC) {
    var IC;
    var fC = 0;
    var ky = CC.length;
    for (CC = CC.slice(); ky--;) {
      IC = CC[ky] * yC + fC;
      CC[ky] = IC % Kg | 0;
      fC = IC / Kg | 0;
    }
    fC && CC.unshift(fC);
    return CC;
  }
  function yC(CC, yC, IC, fC) {
    var ky;
    var gC;
    if (IC != fC) {
      gC = IC > fC ? 1 : -1;
    } else {
      for (ky = gC = 0; ky < IC; ky++) {
        if (CC[ky] != yC[ky]) {
          gC = CC[ky] > yC[ky] ? 1 : -1;
          break;
        }
      }
    }
    return gC;
  }
  function IC(CC, yC, IC) {
    for (var fC = 0; IC--;) {
      CC[IC] -= fC;
      fC = CC[IC] < yC[IC] ? 1 : 0;
      CC[IC] = fC * Kg + CC[IC] - yC[IC];
    }
    for (; !CC[0] && CC.length > 1;) {
      CC.shift();
    }
  }
  return function (fC, ky, gC, AC) {
    var my;
    var XC;
    var iy;
    var LC;
    var YC;
    var bC;
    var rC;
    var GC;
    var eC;
    var OC;
    var SC;
    var TC;
    var NC;
    var sC;
    var jy;
    var qC;
    var KC;
    var pC;
    var wC = fC.constructor;
    var HC = fC.s == ky.s ? 1 : -1;
    var aC = fC.d;
    var cC = ky.d;
    if (!fC.s) {
      return new wC(fC);
    }
    if (!ky.s) {
      throw Error(Sg + "Division by zero");
    }
    XC = fC.e - ky.e;
    KC = cC.length;
    jy = aC.length;
    GC = (rC = new wC(HC)).d = [];
    iy = 0;
    for (; cC[iy] == (aC[iy] || 0);) {
      ++iy;
    }
    cC[iy] > (aC[iy] || 0) && --XC;
    if ((TC = null == gC ? gC = wC.precision : AC ? gC + (Wg(fC) - Wg(ky)) + 1 : gC) < 0) {
      return new wC(0);
    }
    TC = TC / 7 + 2 | 0;
    iy = 0;
    if (1 == KC) {
      LC = 0;
      cC = cC[0];
      TC++;
      for (; (iy < jy || LC) && TC--; iy++) {
        NC = LC * Kg + (aC[iy] || 0);
        GC[iy] = NC / cC | 0;
        LC = NC % cC | 0;
      }
    } else {
      (LC = Kg / (cC[0] + 1) | 0) > 1 && (cC = CC(cC, LC), aC = CC(aC, LC), KC = cC.length, jy = aC.length);
      sC = KC;
      OC = (eC = aC.slice(0, KC)).length;
      for (; OC < KC;) {
        eC[OC++] = 0;
      }
      (pC = cC.slice()).unshift(0);
      qC = cC[0];
      cC[1] >= Kg / 2 && ++qC;
      do {
        LC = 0;
        (my = yC(cC, eC, KC, OC)) < 0 ? (SC = eC[0], KC != OC && (SC = SC * Kg + (eC[1] || 0)), (LC = SC / qC | 0) > 1 ? (LC >= Kg && (LC = Kg - 1), 1 == (my = yC(YC = CC(cC, LC), eC, bC = YC.length, OC = eC.length)) && (LC--, IC(YC, KC < bC ? pC : cC, bC))) : (0 == LC && (my = LC = 1), YC = cC.slice()), (bC = YC.length) < OC && YC.unshift(0), IC(eC, YC, OC), -1 == my && (my = yC(cC, eC, KC, OC = eC.length)) < 1 && (LC++, IC(eC, KC < OC ? pC : cC, OC)), OC = eC.length) : 0 === my && (LC++, eC = [0]);
        GC[iy++] = LC;
        my && eC[0] ? eC[OC++] = aC[sC] || 0 : (eC = [aC[sC]], OC = 1);
      } while ((sC++ < jy || void 0 !== eC[0]) && TC--);
    }
    GC[0] || GC.shift();
    rC.e = XC;
    return tg(rC, AC ? gC + Wg(rC) + 1 : gC);
  };
}();
function Vg(CC, yC) {
  var IC;
  var fC;
  var ky;
  var gC;
  var AC;
  var my = 0;
  var XC = 0;
  var iy = CC.constructor;
  var LC = iy.precision;
  if (Wg(CC) > 16) {
    throw Error(Ng + Wg(CC));
  }
  if (!CC.s) {
    return new iy(Gg);
  }
  null == yC ? (Og = !1, AC = LC) : AC = yC;
  gC = new iy(.03125);
  for (; CC.abs().gte(.1);) {
    CC = CC.times(gC);
    XC += 5;
  }
  AC += Math.log(jA(2, XC)) / Math.LN10 * 2 + 5 | 0;
  IC = fC = ky = new iy(Gg);
  iy.precision = AC;
  for (;;) {
    fC = tg(fC.times(CC), AC);
    IC = IC.times(++my);
    if (Ug((gC = ky.plus(Eg(fC, IC, AC))).d).slice(0, AC) === Ug(ky.d).slice(0, AC)) {
      for (; XC--;) {
        ky = tg(ky.times(ky), AC);
      }
      iy.precision = LC;
      return null == yC ? (Og = !0, tg(ky, LC)) : ky;
    }
    ky = gC;
  }
}
function Wg(CC) {
  for (var yC = 7 * CC.e, IC = CC.d[0]; IC >= 10; IC /= 10) {
    yC++;
  }
  return yC;
}
function xg(CC, yC, IC) {
  if (yC > CC.LN10.sd()) {
    Og = !0;
    IC && (CC.precision = IC);
    throw Error(Sg + "LN10 precision limit exceeded");
  }
  return tg(new CC(CC.LN10), yC);
}
function Pg(CC) {
  for (var yC = ""; CC--;) {
    yC += "0";
  }
  return yC;
}
function zg(CC, yC) {
  var IC;
  var fC;
  var ky;
  var gC;
  var AC;
  var my;
  var XC;
  var iy;
  var LC;
  var YC = 1;
  var bC = CC;
  var rC = bC.d;
  var GC = bC.constructor;
  var eC = GC.precision;
  if (bC.s < 1) {
    throw Error(Sg + (bC.s ? "NaN" : "-Infinity"));
  }
  if (bC.eq(Gg)) {
    return new GC(0);
  }
  null == yC ? (Og = !1, iy = eC) : iy = yC;
  if (bC.eq(10)) {
    null == yC && (Og = !0);
    return xg(GC, iy);
  }
  iy += 10;
  GC.precision = iy;
  fC = (IC = Ug(rC)).charAt(0);
  gC = Wg(bC);
  if (!(Math.abs(gC) < 15e14)) {
    XC = xg(GC, iy + 2, eC).times(gC + "");
    bC = zg(new GC(fC + "." + IC.slice(1)), iy - 10).plus(XC);
    GC.precision = eC;
    return null == yC ? (Og = !0, tg(bC, eC)) : bC;
  }
  for (; fC < 7 && 1 != fC || 1 == fC && IC.charAt(1) > 3;) {
    fC = (IC = Ug((bC = bC.times(CC)).d)).charAt(0);
    YC++;
  }
  gC = Wg(bC);
  fC > 1 ? (bC = new GC("0." + IC), gC++) : bC = new GC(fC + "." + IC.slice(1));
  my = AC = bC = Eg(bC.minus(Gg), bC.plus(Gg), iy);
  LC = tg(bC.times(bC), iy);
  ky = 3;
  for (;;) {
    AC = tg(AC.times(LC), iy);
    if (Ug((XC = my.plus(Eg(AC, new GC(ky), iy))).d).slice(0, iy) === Ug(my.d).slice(0, iy)) {
      my = my.times(2);
      0 !== gC && (my = my.plus(xg(GC, iy + 2, eC).times(gC + "")));
      my = Eg(my, new GC(YC), iy);
      GC.precision = eC;
      return null == yC ? (Og = !0, tg(my, eC)) : my;
    }
    my = XC;
    ky += 2;
  }
}
function Bg(CC, yC) {
  var IC;
  var fC;
  var ky;
  (IC = yC.indexOf(".")) > -1 && (yC = yC.replace(".", ""));
  (fC = yC.search(/e/i)) > 0 ? (IC < 0 && (IC = fC), IC += +yC.slice(fC + 1), yC = yC.substring(0, fC)) : IC < 0 && (IC = yC.length);
  fC = 0;
  for (; 48 === yC.charCodeAt(fC);) {
    ++fC;
  }
  for (ky = yC.length; 48 === yC.charCodeAt(ky - 1);) {
    --ky;
  }
  if (yC = yC.slice(fC, ky)) {
    ky -= fC;
    IC = IC - fC - 1;
    CC.e = sg(IC / 7);
    CC.d = [];
    fC = (IC + 1) % 7;
    IC < 0 && (fC += 7);
    if (fC < ky) {
      fC && CC.d.push(+yC.slice(0, fC));
      ky -= 7;
      for (; fC < ky;) {
        CC.d.push(+yC.slice(fC, fC += 7));
      }
      fC = 7 - (yC = yC.slice(fC)).length;
    } else {
      fC -= ky;
    }
    for (; fC--;) {
      yC += "0";
    }
    CC.d.push(+yC);
    if (Og && (CC.e > wg || CC.e < -wg)) {
      throw Error(Ng + IC);
    }
  } else {
    CC.s = 0;
    CC.e = 0;
    CC.d = [0];
  }
  return CC;
}
function tg(CC, yC, IC) {
  var fC;
  var ky;
  var gC;
  var AC;
  var my;
  var XC;
  var iy;
  var LC;
  var YC = CC.d;
  AC = 1;
  gC = YC[0];
  for (; gC >= 10; gC /= 10) {
    AC++;
  }
  if ((fC = yC - AC) < 0) {
    fC += 7;
    ky = yC;
    iy = YC[LC = 0];
  } else {
    if ((LC = Math.ceil((fC + 1) / 7)) >= (gC = YC.length)) {
      return CC;
    }
    iy = gC = YC[LC];
    AC = 1;
    for (; gC >= 10; gC /= 10) {
      AC++;
    }
    ky = (fC %= 7) - 7 + AC;
  }
  void 0 !== IC && (my = iy / (gC = jA(10, AC - ky - 1)) % 10 | 0, XC = yC < 0 || void 0 !== YC[LC + 1] || iy % gC, XC = IC < 4 ? (my || XC) && (0 == IC || IC == (CC.s < 0 ? 3 : 2)) : my > 5 || 5 == my && (4 == IC || XC || 6 == IC && (fC > 0 ? ky > 0 ? iy / jA(10, AC - ky) : 0 : YC[LC - 1]) % 10 & 1 || IC == (CC.s < 0 ? 8 : 7)));
  if (yC < 1 || !YC[0]) {
    XC ? (gC = Wg(CC), YC.length = 1, yC = yC - gC - 1, YC[0] = jA(10, (7 - yC % 7) % 7), CC.e = sg(-yC / 7) || 0) : (YC.length = 1, YC[0] = CC.e = CC.s = 0);
    return CC;
  }
  0 == fC ? (YC.length = LC, gC = 1, LC--) : (YC.length = LC + 1, gC = jA(10, 7 - fC), YC[LC] = ky > 0 ? (iy / jA(10, AC - ky) % jA(10, ky) | 0) * gC : 0);
  if (XC) {
    for (;;) {
      if (0 == LC) {
        (YC[0] += gC) == Kg && (YC[0] = 1, ++CC.e);
        break;
      }
      YC[LC] += gC;
      if (YC[LC] != Kg) {
        break;
      }
      YC[LC--] = 0;
      gC = 1;
    }
  }
  for (fC = YC.length; 0 === YC[--fC];) {
    YC.pop();
  }
  if (Og && (CC.e > wg || CC.e < -wg)) {
    throw Error(Ng + Wg(CC));
  }
  return CC;
}
function Jg(CC, yC) {
  var IC;
  var fC;
  var ky;
  var gC;
  var AC;
  var my;
  var XC;
  var iy;
  var LC;
  var YC;
  var bC = CC.constructor;
  var rC = bC.precision;
  if (!CC.s || !yC.s) {
    yC.s ? yC.s = -yC.s : yC = new bC(CC);
    return Og ? tg(yC, rC) : yC;
  }
  XC = CC.d;
  YC = yC.d;
  fC = yC.e;
  iy = CC.e;
  XC = XC.slice();
  if (AC = iy - fC) {
    (LC = AC < 0) ? (IC = XC, AC = -AC, my = YC.length) : (IC = YC, fC = iy, my = XC.length);
    AC > (ky = Math.max(Math.ceil(rC / 7), my) + 2) && (AC = ky, IC.length = 1);
    IC.reverse();
    ky = AC;
    for (; ky--;) {
      IC.push(0);
    }
    IC.reverse();
  } else {
    (LC = (ky = XC.length) < (my = YC.length)) && (my = ky);
    ky = 0;
    for (; ky < my; ky++) {
      if (XC[ky] != YC[ky]) {
        LC = XC[ky] < YC[ky];
        break;
      }
    }
    AC = 0;
  }
  LC && (IC = XC, XC = YC, YC = IC, yC.s = -yC.s);
  my = XC.length;
  ky = YC.length - my;
  for (; ky > 0; --ky) {
    XC[my++] = 0;
  }
  for (ky = YC.length; ky > AC;) {
    if (XC[--ky] < YC[ky]) {
      for (gC = ky; gC && 0 === XC[--gC];) {
        XC[gC] = Kg - 1;
      }
      --XC[gC];
      XC[ky] += Kg;
    }
    XC[ky] -= YC[ky];
  }
  for (; 0 === XC[--my];) {
    XC.pop();
  }
  for (; 0 === XC[0]; XC.shift()) {
    --fC;
  }
  return XC[0] ? (yC.d = XC, yC.e = fC, Og ? tg(yC, rC) : yC) : new bC(0);
}
function ng(CC, yC, IC) {
  var fC;
  var ky = Wg(CC);
  var gC = Ug(CC.d);
  var AC = gC.length;
  yC ? (IC && (fC = IC - AC) > 0 ? gC = gC.charAt(0) + "." + gC.slice(1) + Pg(fC) : AC > 1 && (gC = gC.charAt(0) + "." + gC.slice(1)), gC = gC + (ky < 0 ? "e" : "e+") + ky) : ky < 0 ? (gC = "0." + Pg(-ky - 1) + gC, IC && (fC = IC - AC) > 0 && (gC += Pg(fC))) : ky >= AC ? (gC += Pg(ky + 1 - AC), IC && (fC = IC - ky - 1) > 0 && (gC = gC + "." + Pg(fC))) : ((fC = ky + 1) < AC && (gC = gC.slice(0, fC) + "." + gC.slice(fC)), IC && (fC = IC - AC) > 0 && (ky + 1 === AC && (gC += "."), gC += Pg(fC)));
  return CC.s < 0 ? "-" + gC : gC;
}
function Fg(CC, yC) {
  if (CC.length > yC) {
    CC.length = yC;
    return !0;
  }
}
function ug(CC) {
  if (!CC || "object" !== typeof CC) {
    throw Error(Sg + "Object expected");
  }
  var yC;
  var IC;
  var fC;
  var ky = ["precision", 1, eg, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
  for (yC = 0; yC < ky.length; yC += 3) {
    if (void 0 !== (fC = CC[IC = ky[yC]])) {
      if (!(sg(fC) === fC && fC >= ky[yC + 1] && fC <= ky[yC + 2])) {
        throw Error(Tg + IC + ": " + fC);
      }
      this[IC] = fC;
    }
  }
  if (void 0 !== (fC = CC[IC = "LN10"])) {
    if (fC != Math.LN10) {
      throw Error(Tg + IC + ": " + fC);
    }
    this[IC] = new this(fC);
  }
  return this;
}
var Dg = function CC(yC) {
  var IC;
  var fC;
  var ky;
  function gC(CC) {
    var yC = this;
    if (!(yC instanceof gC)) {
      return new gC(CC);
    }
    yC.constructor = gC;
    if (CC instanceof gC) {
      yC.s = CC.s;
      yC.e = CC.e;
      return void (yC.d = (CC = CC.d) ? CC.slice() : CC);
    }
    if ("number" === typeof CC) {
      if (0 * CC !== 0) {
        throw Error(Tg + CC);
      }
      if (CC > 0) {
        yC.s = 1;
      } else {
        if (!(CC < 0)) {
          yC.s = 0;
          yC.e = 0;
          return void (yC.d = [0]);
        }
        CC = -CC;
        yC.s = -1;
      }
      return CC === ~~CC && CC < 1e7 ? (yC.e = 0, void (yC.d = [CC])) : Bg(yC, CC.toString());
    }
    if ("string" !== typeof CC) {
      throw Error(Tg + CC);
    }
    45 === CC.charCodeAt(0) ? (CC = CC.slice(1), yC.s = -1) : yC.s = 1;
    if (!qg.test(CC)) {
      throw Error(Tg + CC);
    }
    Bg(yC, CC);
  }
  gC.prototype = Hg;
  gC.ROUND_UP = 0;
  gC.ROUND_DOWN = 1;
  gC.ROUND_CEIL = 2;
  gC.ROUND_FLOOR = 3;
  gC.ROUND_HALF_UP = 4;
  gC.ROUND_HALF_DOWN = 5;
  gC.ROUND_HALF_EVEN = 6;
  gC.ROUND_HALF_CEIL = 7;
  gC.ROUND_HALF_FLOOR = 8;
  gC.clone = CC;
  gC.config = gC.set = ug;
  void 0 === yC && (yC = {});
  if (yC) {
    ky = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"];
    IC = 0;
    for (; IC < ky.length;) {
      yC.hasOwnProperty(fC = ky[IC++]) || (yC[fC] = this[fC]);
    }
  }
  gC.config(yC);
  return gC;
}({
  precision: 20,
  rounding: 4,
  toExpNeg: -7,
  toExpPos: 21,
  LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
});
Gg = new Dg(1);
var Zg;
!function (CC) {
  CC.AED = "aed";
  CC.AFN = "afn";
  CC.ALL = "all";
  CC.AMD = "amd";
  CC.ANG = "ang";
  CC.AOA = "aoa";
  CC.ARS = "ars";
  CC.AUD = "aud";
  CC.AWG = "awg";
  CC.AZN = "azn";
  CC.BAM = "bam";
  CC.BBD = "bbd";
  CC.BDT = "bdt";
  CC.BGN = "bgn";
  CC.BHD = "bhd";
  CC.BIF = "bif";
  CC.BMD = "bmd";
  CC.BND = "bnd";
  CC.BOB = "bob";
  CC.BOV = "bov";
  CC.BRL = "brl";
  CC.BSD = "bsd";
  CC.BTN = "btn";
  CC.BWP = "bwp";
  CC.BYN = "byn";
  CC.BYR = "byr";
  CC.BZD = "bzd";
  CC.CAD = "cad";
  CC.CDF = "cdf";
  CC.CHE = "che";
  CC.CHF = "chf";
  CC.CHW = "chw";
  CC.CLF = "clf";
  CC.CLP = "clp";
  CC.CNY = "cny";
  CC.COP = "cop";
  CC.COU = "cou";
  CC.CRC = "crc";
  CC.CUC = "cuc";
  CC.CUP = "cup";
  CC.CVE = "cve";
  CC.CZK = "czk";
  CC.DJF = "djf";
  CC.DKK = "dkk";
  CC.DOP = "dop";
  CC.DZD = "dzd";
  CC.EGP = "egp";
  CC.ERN = "ern";
  CC.ETB = "etb";
  CC.EUR = "eur";
  CC.FJD = "fjd";
  CC.FKP = "fkp";
  CC.GBP = "gbp";
  CC.GEL = "gel";
  CC.GHS = "ghs";
  CC.GIP = "gip";
  CC.GMD = "gmd";
  CC.GNF = "gnf";
  CC.GTQ = "gtq";
  CC.GYD = "gyd";
  CC.HKD = "hkd";
  CC.HNL = "hnl";
  CC.HRK = "hrk";
  CC.HTG = "htg";
  CC.HUF = "huf";
  CC.IDR = "idr";
  CC.ILS = "ils";
  CC.INR = "inr";
  CC.IQD = "iqd";
  CC.IRR = "irr";
  CC.ISK = "isk";
  CC.JMD = "jmd";
  CC.JOD = "jod";
  CC.JPY = "jpy";
  CC.KES = "kes";
  CC.KGS = "kgs";
  CC.KHR = "khr";
  CC.KMF = "kmf";
  CC.KPW = "kpw";
  CC.KRW = "krw";
  CC.KWD = "kwd";
  CC.KYD = "kyd";
  CC.KZT = "kzt";
  CC.LAK = "lak";
  CC.LBP = "lbp";
  CC.LKR = "lkr";
  CC.LRD = "lrd";
  CC.LSL = "lsl";
  CC.LTL = "ltl";
  CC.LVL = "lvl";
  CC.LYD = "lyd";
  CC.MAD = "mad";
  CC.MDL = "mdl";
  CC.MGA = "mga";
  CC.MKD = "mkd";
  CC.MMK = "mmk";
  CC.MNT = "mnt";
  CC.MOP = "mop";
  CC.MRO = "mro";
  CC.MUR = "mur";
  CC.MVR = "mvr";
  CC.MWK = "mwk";
  CC.MXN = "mxn";
  CC.MXV = "mxv";
  CC.MYR = "myr";
  CC.MZN = "mzn";
  CC.NAD = "nad";
  CC.NGN = "ngn";
  CC.NIO = "nio";
  CC.NOK = "nok";
  CC.NPR = "npr";
  CC.NZD = "nzd";
  CC.OMR = "omr";
  CC.PAB = "pab";
  CC.PEN = "pen";
  CC.PGK = "pgk";
  CC.PHP = "php";
  CC.PKR = "pkr";
  CC.PLN = "pln";
  CC.PYG = "pyg";
  CC.QAR = "qar";
  CC.RON = "ron";
  CC.RSD = "rsd";
  CC.RUB = "rub";
  CC.RWF = "rwf";
  CC.SAR = "sar";
  CC.SBD = "sbd";
  CC.SCR = "scr";
  CC.SDG = "sdg";
  CC.SEK = "sek";
  CC.SGD = "sgd";
  CC.SHP = "shp";
  CC.SLL = "sll";
  CC.SOS = "sos";
  CC.SRD = "srd";
  CC.SSP = "ssp";
  CC.STD = "std";
  CC.SVC = "svc";
  CC.SYP = "syp";
  CC.SZL = "szl";
  CC.THB = "thb";
  CC.TJS = "tjs";
  CC.TMT = "tmt";
  CC.TND = "tnd";
  CC.TOP = "top";
  CC.TRY = "try";
  CC.TTD = "ttd";
  CC.TWD = "twd";
  CC.TZS = "tzs";
  CC.UAH = "uah";
  CC.UGX = "ugx";
  CC.USD = "usd";
  CC.USN = "usn";
  CC.USS = "uss";
  CC.UYI = "uyi";
  CC.UYU = "uyu";
  CC.UZS = "uzs";
  CC.VEF = "vef";
  CC.VND = "vnd";
  CC.VUV = "vuv";
  CC.WST = "wst";
  CC.XAF = "xaf";
  CC.XAG = "xag";
  CC.XAU = "xau";
  CC.XBA = "xba";
  CC.XBB = "xbb";
  CC.XBC = "xbc";
  CC.XBD = "xbd";
  CC.XCD = "xcd";
  CC.XDR = "xdr";
  CC.XFU = "xfu";
  CC.XOF = "xof";
  CC.XPD = "xpd";
  CC.XPF = "xpf";
  CC.XPT = "xpt";
  CC.XSU = "xsu";
  CC.XTS = "xts";
  CC.XUA = "xua";
  CC.YER = "yer";
  CC.ZAR = "zar";
  CC.ZMW = "zmw";
  CC.ZWL = "zwl";
}(Zg || (Zg = {}));
Zg.AED;
Zg.AFN;
Zg.ALL;
Zg.AMD;
Zg.ANG;
Zg.AOA;
Zg.ARS;
Zg.AUD;
Zg.AWG;
Zg.AZN;
Zg.BAM;
Zg.BBD;
Zg.BDT;
Zg.BGN;
Zg.BHD;
Zg.BIF;
Zg.BMD;
Zg.BND;
Zg.BOB;
Zg.BOV;
Zg.BRL;
Zg.BSD;
Zg.BTN;
Zg.BWP;
Zg.BYR;
Zg.BYN;
Zg.BZD;
Zg.CAD;
Zg.CDF;
Zg.CHE;
Zg.CHF;
Zg.CHW;
Zg.CLF;
Zg.CLP;
Zg.CNY;
Zg.COP;
Zg.COU;
Zg.CRC;
Zg.CUC;
Zg.CUP;
Zg.CVE;
Zg.CZK;
Zg.DJF;
Zg.DKK;
Zg.DOP;
Zg.DZD;
Zg.EGP;
Zg.ERN;
Zg.ETB;
Zg.EUR;
Zg.FJD;
Zg.FKP;
Zg.GBP;
Zg.GEL;
Zg.GHS;
Zg.GIP;
Zg.GMD;
Zg.GNF;
Zg.GTQ;
Zg.GYD;
Zg.HKD;
Zg.HNL;
Zg.HRK;
Zg.HTG;
Zg.HUF;
Zg.IDR;
Zg.ILS;
Zg.INR;
Zg.IQD;
Zg.IRR;
Zg.ISK;
Zg.JMD;
Zg.JOD;
Zg.JPY;
Zg.KES;
Zg.KGS;
Zg.KHR;
Zg.KMF;
Zg.KPW;
Zg.KRW;
Zg.KWD;
Zg.KYD;
Zg.KZT;
Zg.LAK;
Zg.LBP;
Zg.LKR;
Zg.LRD;
Zg.LSL;
Zg.LTL;
Zg.LVL;
Zg.LYD;
Zg.MAD;
Zg.MDL;
Zg.MGA;
Zg.MKD;
Zg.MMK;
Zg.MNT;
Zg.MOP;
Zg.MRO;
Zg.MUR;
Zg.MVR;
Zg.MWK;
Zg.MXN;
Zg.MXV;
Zg.MYR;
Zg.MZN;
Zg.NAD;
Zg.NGN;
Zg.NIO;
Zg.NOK;
Zg.NPR;
Zg.NZD;
Zg.OMR;
Zg.PAB;
Zg.PEN;
Zg.PGK;
Zg.PHP;
Zg.PKR;
Zg.PLN;
Zg.PYG;
Zg.QAR;
Zg.RON;
Zg.RSD;
Zg.RUB;
Zg.RWF;
Zg.SAR;
Zg.SBD;
Zg.SCR;
Zg.SDG;
Zg.SEK;
Zg.SGD;
Zg.SHP;
Zg.SLL;
Zg.SOS;
Zg.SRD;
Zg.SSP;
Zg.STD;
Zg.SVC;
Zg.SYP;
Zg.SZL;
Zg.THB;
Zg.TJS;
Zg.TMT;
Zg.TND;
Zg.TOP;
Zg.TRY;
Zg.TTD;
Zg.TWD;
Zg.TZS;
Zg.UAH;
Zg.UGX;
Zg.USD;
Zg.USN;
Zg.USS;
Zg.UYI;
Zg.UYU;
Zg.UZS;
Zg.VEF;
Zg.VND;
Zg.VUV;
Zg.WST;
Zg.XAF;
Zg.XAG;
Zg.XAU;
Zg.XBA;
Zg.XBB;
Zg.XBC;
Zg.XBD;
Zg.XCD;
Zg.XDR;
Zg.XFU;
Zg.XOF;
Zg.XPD;
Zg.XPF;
Zg.XPT;
Zg.XSU;
Zg.XTS;
Zg.XUA;
Zg.YER;
Zg.ZAR;
Zg.ZMW;
Zg.ZWL;
var lg = {
  exports: {}
};
!function (CC, yC) {
  var IC = "__lodash_hash_undefined__";
  var fC = 9007199254740991;
  var ky = "[object Arguments]";
  var gC = "[object Array]";
  var AC = "[object Boolean]";
  var my = "[object Date]";
  var XC = "[object Error]";
  var iy = "[object Function]";
  var LC = "[object Map]";
  var bC = "[object Number]";
  var rC = "[object Object]";
  var GC = "[object Promise]";
  var eC = "[object RegExp]";
  var OC = "[object Set]";
  var SC = "[object String]";
  var TC = "[object Symbol]";
  var NC = "[object WeakMap]";
  var sC = "[object ArrayBuffer]";
  var jy = "[object DataView]";
  var qC = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
  var KC = /^\w*$/;
  var pC = /^\./;
  var wC = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
  var HC = /\\(\\)?/g;
  var aC = /^\[object .+?Constructor\]$/;
  var cC = /^(?:0|[1-9]\d*)$/;
  var UC = {};
  UC["[object Float32Array]"] = UC["[object Float64Array]"] = UC["[object Int8Array]"] = UC["[object Int16Array]"] = UC["[object Int32Array]"] = UC["[object Uint8Array]"] = UC["[object Uint8ClampedArray]"] = UC["[object Uint16Array]"] = UC["[object Uint32Array]"] = !0;
  UC[ky] = UC[gC] = UC[sC] = UC[AC] = UC[jy] = UC[my] = UC[XC] = UC[iy] = UC[LC] = UC[bC] = UC[rC] = UC[eC] = UC[OC] = UC[SC] = UC[NC] = !1;
  var EC = "object" == typeof YC && YC && YC.Object === Object && YC;
  var VC = "object" == typeof self && self && self.Object === Object && self;
  var WC = EC || VC || Function("return this")();
  var xC = yC && !yC.nodeType && yC;
  var PC = xC && CC && !CC.nodeType && CC;
  var zC = PC && PC.exports === xC && EC.process;
  var BC = function () {
    try {
      return zC && zC.binding("util");
    } catch (CC) {}
  }();
  var tC = BC && BC.isTypedArray;
  function JC(CC, yC) {
    for (var IC = -1, fC = CC ? CC.length : 0; ++IC < fC && !1 !== yC(CC[IC], IC, CC););
    return CC;
  }
  function nC(CC, yC) {
    for (var IC = -1, fC = CC ? CC.length : 0; ++IC < fC;) {
      if (yC(CC[IC], IC, CC)) {
        return !0;
      }
    }
    return !1;
  }
  function FC(CC) {
    var yC = !1;
    if (null != CC && "function" != typeof CC.toString) {
      try {
        yC = !!(CC + "");
      } catch (IC) {}
    }
    return yC;
  }
  function uC(CC) {
    var yC = -1;
    var IC = Array(CC.size);
    CC.forEach(function (CC, fC) {
      IC[++yC] = [fC, CC];
    });
    return IC;
  }
  function DC(CC, yC) {
    return function (IC) {
      return CC(yC(IC));
    };
  }
  function ZC(CC) {
    var yC = -1;
    var IC = Array(CC.size);
    CC.forEach(function (CC) {
      IC[++yC] = CC;
    });
    return IC;
  }
  var lC = Array.prototype;
  var oC = Function.prototype;
  var vC = Object.prototype;
  var hC = WC["__core-js_shared__"];
  var RC = function () {
    var CC = /[^.]+$/.exec(hC && hC.keys && hC.keys.IE_PROTO || "");
    return CC ? "Symbol(src)_1." + CC : "";
  }();
  var dC = oC.toString;
  var QC = vC.hasOwnProperty;
  var MC = vC.toString;
  var Cy = RegExp("^" + dC.call(QC).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
  var yy = WC.Symbol;
  var Iy = WC.Uint8Array;
  var fy = DC(Object.getPrototypeOf, Object);
  var kI = Object.create;
  var gy = vC.propertyIsEnumerable;
  var Ay = lC.splice;
  var mI = DC(Object.keys, Object);
  var Xy = uy(WC, "DataView");
  var iI = uy(WC, "Map");
  var Ly = uy(WC, "Promise");
  var Yy = uy(WC, "Set");
  var by = uy(WC, "WeakMap");
  var ry = uy(Object, "create");
  var Gy = dy(Xy);
  var ey = dy(iI);
  var Oy = dy(Ly);
  var Sy = dy(Yy);
  var Ty = dy(by);
  var Ny = yy ? yy.prototype : void 0;
  var sy = Ny ? Ny.valueOf : void 0;
  var jI = Ny ? Ny.toString : void 0;
  function qy(CC) {
    var yC = -1;
    var IC = CC ? CC.length : 0;
    for (this.clear(); ++yC < IC;) {
      var fC = CC[yC];
      this.set(fC[0], fC[1]);
    }
  }
  function Ky(CC) {
    var yC = -1;
    var IC = CC ? CC.length : 0;
    for (this.clear(); ++yC < IC;) {
      var fC = CC[yC];
      this.set(fC[0], fC[1]);
    }
  }
  function py(CC) {
    var yC = -1;
    var IC = CC ? CC.length : 0;
    for (this.clear(); ++yC < IC;) {
      var fC = CC[yC];
      this.set(fC[0], fC[1]);
    }
  }
  function wy(CC) {
    var yC = -1;
    var IC = CC ? CC.length : 0;
    for (this.__data__ = new py(); ++yC < IC;) {
      this.add(CC[yC]);
    }
  }
  function Hy(CC) {
    this.__data__ = new Ky(CC);
  }
  function ay(CC, yC) {
    var IC = yI(CC) || CI(CC) ? function (CC, yC) {
      for (var IC = -1, fC = Array(CC); ++IC < CC;) {
        fC[IC] = yC(IC);
      }
      return fC;
    }(CC.length, String) : [];
    var fC = IC.length;
    var ky = !!fC;
    for (var gC in CC) {
      !yC && !QC.call(CC, gC) || ky && ("length" == gC || Zy(gC, fC)) || IC.push(gC);
    }
    return IC;
  }
  function cy(CC, yC) {
    for (var IC = CC.length; IC--;) {
      if (My(CC[IC][0], yC)) {
        return IC;
      }
    }
    return -1;
  }
  qy.prototype.clear = function () {
    this.__data__ = ry ? ry(null) : {};
  };
  qy.prototype.delete = function (CC) {
    return this.has(CC) && delete this.__data__[CC];
  };
  qy.prototype.get = function (CC) {
    var yC = this.__data__;
    if (ry) {
      var fC = yC[CC];
      return fC === IC ? void 0 : fC;
    }
    return QC.call(yC, CC) ? yC[CC] : void 0;
  };
  qy.prototype.has = function (CC) {
    var yC = this.__data__;
    return ry ? void 0 !== yC[CC] : QC.call(yC, CC);
  };
  qy.prototype.set = function (CC, yC) {
    this.__data__[CC] = ry && void 0 === yC ? IC : yC;
    return this;
  };
  Ky.prototype.clear = function () {
    this.__data__ = [];
  };
  Ky.prototype.delete = function (CC) {
    var yC = this.__data__;
    var IC = cy(yC, CC);
    return !(IC < 0) && (IC == yC.length - 1 ? yC.pop() : Ay.call(yC, IC, 1), !0);
  };
  Ky.prototype.get = function (CC) {
    var yC = this.__data__;
    var IC = cy(yC, CC);
    return IC < 0 ? void 0 : yC[IC][1];
  };
  Ky.prototype.has = function (CC) {
    return cy(this.__data__, CC) > -1;
  };
  Ky.prototype.set = function (CC, yC) {
    var IC = this.__data__;
    var fC = cy(IC, CC);
    fC < 0 ? IC.push([CC, yC]) : IC[fC][1] = yC;
    return this;
  };
  py.prototype.clear = function () {
    this.__data__ = {
      hash: new qy(),
      map: new (iI || Ky)(),
      string: new qy()
    };
  };
  py.prototype.delete = function (CC) {
    return Fy(this, CC).delete(CC);
  };
  py.prototype.get = function (CC) {
    return Fy(this, CC).get(CC);
  };
  py.prototype.has = function (CC) {
    return Fy(this, CC).has(CC);
  };
  py.prototype.set = function (CC, yC) {
    Fy(this, CC).set(CC, yC);
    return this;
  };
  wy.prototype.add = wy.prototype.push = function (CC) {
    this.__data__.set(CC, IC);
    return this;
  };
  wy.prototype.has = function (CC) {
    return this.__data__.has(CC);
  };
  Hy.prototype.clear = function () {
    this.__data__ = new Ky();
  };
  Hy.prototype.delete = function (CC) {
    return this.__data__.delete(CC);
  };
  Hy.prototype.get = function (CC) {
    return this.__data__.get(CC);
  };
  Hy.prototype.has = function (CC) {
    return this.__data__.has(CC);
  };
  Hy.prototype.set = function (CC, yC) {
    var IC = this.__data__;
    if (IC instanceof Ky) {
      var fC = IC.__data__;
      if (!iI || fC.length < 199) {
        fC.push([CC, yC]);
        return this;
      }
      IC = this.__data__ = new py(fC);
    }
    IC.set(CC, yC);
    return this;
  };
  var Uy;
  function Ey(CC, yC, IC) {
    for (var fC = -1, ky = Object(CC), gC = IC(CC), AC = gC.length; AC--;) {
      var my = gC[Uy ? AC : ++fC];
      if (!1 === yC(ky[my], my, ky)) {
        break;
      }
    }
    return CC;
  }
  function Vy(CC, yC) {
    return CC && Ey(CC, yC, YI);
  }
  function Wy(CC, yC) {
    for (var IC = 0, fC = (yC = ly(yC, CC) ? [yC] : Jy(yC)).length; null != CC && IC < fC;) {
      CC = CC[Ry(yC[IC++])];
    }
    return IC && IC == fC ? CC : void 0;
  }
  function xy(CC, yC) {
    return null != CC && yC in Object(CC);
  }
  function Py(CC, yC, IC, fC, iy) {
    return CC === yC || (null == CC || null == yC || !gI(CC) && !AI(yC) ? CC !== CC && yC !== yC : function (CC, yC, IC, fC, iy, YC) {
      var GC = yI(CC);
      var NC = yI(yC);
      var qC = gC;
      var KC = gC;
      GC || (qC = (qC = Dy(CC)) == ky ? rC : qC);
      NC || (KC = (KC = Dy(yC)) == ky ? rC : KC);
      var pC = qC == rC && !FC(CC);
      var wC = KC == rC && !FC(yC);
      var HC = qC == KC;
      if (HC && !pC) {
        YC || (YC = new Hy());
        return GC || LI(CC) ? ny(CC, yC, IC, fC, iy, YC) : function (CC, yC, IC, fC, ky, gC, iy) {
          switch (IC) {
            case jy:
              if (CC.byteLength != yC.byteLength || CC.byteOffset != yC.byteOffset) {
                return !1;
              }
              CC = CC.buffer;
              yC = yC.buffer;
            case sC:
              return !(CC.byteLength != yC.byteLength || !fC(new Iy(CC), new Iy(yC)));
            case AC:
            case my:
            case bC:
              return My(+CC, +yC);
            case XC:
              return CC.name == yC.name && CC.message == yC.message;
            case eC:
            case SC:
              return CC == yC + "";
            case LC:
              var YC = uC;
            case OC:
              var rC = 2 & gC;
              YC || (YC = ZC);
              if (CC.size != yC.size && !rC) {
                return !1;
              }
              var GC = iy.get(CC);
              if (GC) {
                return GC == yC;
              }
              gC |= 1;
              iy.set(CC, yC);
              var NC = ny(YC(CC), YC(yC), fC, ky, gC, iy);
              iy.delete(CC);
              return NC;
            case TC:
              if (sy) {
                return sy.call(CC) == sy.call(yC);
              }
          }
          return !1;
        }(CC, yC, qC, IC, fC, iy, YC);
      }
      if (!(2 & iy)) {
        var aC = pC && QC.call(CC, "__wrapped__");
        var cC = wC && QC.call(yC, "__wrapped__");
        if (aC || cC) {
          var UC = aC ? CC.value() : CC;
          var EC = cC ? yC.value() : yC;
          YC || (YC = new Hy());
          return IC(UC, EC, fC, iy, YC);
        }
      }
      if (!HC) {
        return !1;
      }
      YC || (YC = new Hy());
      return function (CC, yC, IC, fC, ky, gC) {
        var AC = 2 & ky;
        var my = YI(CC);
        var XC = my.length;
        var iy = YI(yC);
        var LC = iy.length;
        if (XC != LC && !AC) {
          return !1;
        }
        var YC = XC;
        for (; YC--;) {
          var bC = my[YC];
          if (!(AC ? bC in yC : QC.call(yC, bC))) {
            return !1;
          }
        }
        var rC = gC.get(CC);
        if (rC && gC.get(yC)) {
          return rC == yC;
        }
        var GC = !0;
        gC.set(CC, yC);
        gC.set(yC, CC);
        var eC = AC;
        for (; ++YC < XC;) {
          var OC = CC[bC = my[YC]];
          var SC = yC[bC];
          if (fC) {
            var TC = AC ? fC(SC, OC, bC, yC, CC, gC) : fC(OC, SC, bC, CC, yC, gC);
          }
          if (!(void 0 === TC ? OC === SC || IC(OC, SC, fC, ky, gC) : TC)) {
            GC = !1;
            break;
          }
          eC || (eC = "constructor" == bC);
        }
        if (GC && !eC) {
          var NC = CC.constructor;
          var sC = yC.constructor;
          NC == sC || !("constructor" in CC) || !("constructor" in yC) || "function" == typeof NC && NC instanceof NC && "function" == typeof sC && sC instanceof sC || (GC = !1);
        }
        gC.delete(CC);
        gC.delete(yC);
        return GC;
      }(CC, yC, IC, fC, iy, YC);
    }(CC, yC, Py, IC, fC, iy));
  }
  function zy(CC) {
    return !(!gI(CC) || (yC = CC, RC && RC in yC)) && (fI(CC) || FC(CC) ? Cy : aC).test(dy(CC));
    var yC;
  }
  function By(CC) {
    return "function" == typeof CC ? CC : null == CC ? bI : "object" == typeof CC ? yI(CC) ? function (CC, yC) {
      if (ly(CC) && oy(yC)) {
        return vy(Ry(CC), yC);
      }
      return function (IC) {
        var fC = function (CC, yC, IC) {
          var fC = null == CC ? void 0 : Wy(CC, yC);
          return void 0 === fC ? IC : fC;
        }(IC, CC);
        return void 0 === fC && fC === yC ? function (CC, yC) {
          return null != CC && function (CC, yC, IC) {
            yC = ly(yC, CC) ? [yC] : Jy(yC);
            var fC;
            var ky = -1;
            var gC = yC.length;
            for (; ++ky < gC;) {
              var AC = Ry(yC[ky]);
              if (!(fC = null != CC && IC(CC, AC))) {
                break;
              }
              CC = CC[AC];
            }
            if (fC) {
              return fC;
            }
            gC = CC ? CC.length : 0;
            return !!gC && kf(gC) && Zy(AC, gC) && (yI(CC) || CI(CC));
          }(CC, yC, xy);
        }(IC, CC) : Py(yC, fC, void 0, 3);
      };
    }(CC[0], CC[1]) : function (CC) {
      var yC = function (CC) {
        var yC = YI(CC);
        var IC = yC.length;
        for (; IC--;) {
          var fC = yC[IC];
          var ky = CC[fC];
          yC[IC] = [fC, ky, oy(ky)];
        }
        return yC;
      }(CC);
      if (1 == yC.length && yC[0][2]) {
        return vy(yC[0][0], yC[0][1]);
      }
      return function (IC) {
        return IC === CC || function (CC, yC, IC, fC) {
          var ky = IC.length;
          var gC = ky;
          var AC = !fC;
          if (null == CC) {
            return !gC;
          }
          for (CC = Object(CC); ky--;) {
            var my = IC[ky];
            if (AC && my[2] ? my[1] !== CC[my[0]] : !(my[0] in CC)) {
              return !1;
            }
          }
          for (; ++ky < gC;) {
            var XC = (my = IC[ky])[0];
            var iy = CC[XC];
            var LC = my[1];
            if (AC && my[2]) {
              if (void 0 === iy && !(XC in CC)) {
                return !1;
              }
            } else {
              var YC = new Hy();
              if (fC) {
                var bC = fC(iy, LC, XC, CC, yC, YC);
              }
              if (!(void 0 === bC ? Py(LC, iy, fC, 3, YC) : bC)) {
                return !1;
              }
            }
          }
          return !0;
        }(IC, CC, yC);
      };
    }(CC) : function (CC) {
      return ly(CC) ? (yC = Ry(CC), function (CC) {
        return null == CC ? void 0 : CC[yC];
      }) : function (CC) {
        return function (yC) {
          return Wy(yC, CC);
        };
      }(CC);
      var yC;
    }(CC);
  }
  function ty(CC) {
    if (!function (CC) {
      var yC = CC && CC.constructor;
      var IC = "function" == typeof yC && yC.prototype || vC;
      return CC === IC;
    }(CC)) {
      return mI(CC);
    }
    var yC = [];
    for (var IC in Object(CC)) {
      QC.call(CC, IC) && "constructor" != IC && yC.push(IC);
    }
    return yC;
  }
  function Jy(CC) {
    return yI(CC) ? CC : hy(CC);
  }
  function ny(CC, yC, IC, fC, ky, gC) {
    var AC = 2 & ky;
    var my = CC.length;
    var XC = yC.length;
    if (my != XC && !(AC && XC > my)) {
      return !1;
    }
    var iy = gC.get(CC);
    if (iy && gC.get(yC)) {
      return iy == yC;
    }
    var LC = -1;
    var YC = !0;
    var bC = 1 & ky ? new wy() : void 0;
    gC.set(CC, yC);
    gC.set(yC, CC);
    for (; ++LC < my;) {
      var rC = CC[LC];
      var GC = yC[LC];
      if (fC) {
        var eC = AC ? fC(GC, rC, LC, yC, CC, gC) : fC(rC, GC, LC, CC, yC, gC);
      }
      if (void 0 !== eC) {
        if (eC) {
          continue;
        }
        YC = !1;
        break;
      }
      if (bC) {
        if (!nC(yC, function (CC, yC) {
          if (!bC.has(yC) && (rC === CC || IC(rC, CC, fC, ky, gC))) {
            return bC.add(yC);
          }
        })) {
          YC = !1;
          break;
        }
      } else {
        if (rC !== GC && !IC(rC, GC, fC, ky, gC)) {
          YC = !1;
          break;
        }
      }
    }
    gC.delete(CC);
    gC.delete(yC);
    return YC;
  }
  function Fy(CC, yC) {
    var IC = CC.__data__;
    return function (CC) {
      var yC = typeof CC;
      return "string" == yC || "number" == yC || "symbol" == yC || "boolean" == yC ? "__proto__" !== CC : null === CC;
    }(yC) ? IC["string" == typeof yC ? "string" : "hash"] : IC.map;
  }
  function uy(CC, yC) {
    var IC = function (CC, yC) {
      return null == CC ? void 0 : CC[yC];
    }(CC, yC);
    return zy(IC) ? IC : void 0;
  }
  function Dy(CC) {
    return MC.call(CC);
  }
  function Zy(CC, yC) {
    return !!(yC = null == yC ? fC : yC) && ("number" == typeof CC || cC.test(CC)) && CC > -1 && CC % 1 == 0 && CC < yC;
  }
  function ly(CC, yC) {
    if (yI(CC)) {
      return !1;
    }
    var IC = typeof CC;
    return !("number" != IC && "symbol" != IC && "boolean" != IC && null != CC && !mf(CC)) || KC.test(CC) || !qC.test(CC) || null != yC && CC in Object(yC);
  }
  function oy(CC) {
    return CC === CC && !gI(CC);
  }
  function vy(CC, yC) {
    return function (IC) {
      return null != IC && IC[CC] === yC && (void 0 !== yC || CC in Object(IC));
    };
  }
  (Xy && Dy(new Xy(new ArrayBuffer(1))) != jy || iI && Dy(new iI()) != LC || Ly && Dy(Ly.resolve()) != GC || Yy && Dy(new Yy()) != OC || by && Dy(new by()) != NC) && (Dy = function (CC) {
    var yC = MC.call(CC);
    var IC = yC == rC ? CC.constructor : void 0;
    var fC = IC ? dy(IC) : void 0;
    if (fC) {
      switch (fC) {
        case Gy:
          return jy;
        case ey:
          return LC;
        case Oy:
          return GC;
        case Sy:
          return OC;
        case Ty:
          return NC;
      }
    }
    return yC;
  });
  var hy = Qy(function (CC) {
    var yC;
    CC = null == (yC = CC) ? "" : function (CC) {
      if ("string" == typeof CC) {
        return CC;
      }
      if (mf(CC)) {
        return jI ? jI.call(CC) : "";
      }
      var yC = CC + "";
      return "0" == yC && 1 / CC == -1 / 0 ? "-0" : yC;
    }(yC);
    var IC = [];
    pC.test(CC) && IC.push("");
    CC.replace(wC, function (CC, yC, fC, ky) {
      IC.push(fC ? ky.replace(HC, "$1") : yC || CC);
    });
    return IC;
  });
  function Ry(CC) {
    if ("string" == typeof CC || mf(CC)) {
      return CC;
    }
    var yC = CC + "";
    return "0" == yC && 1 / CC == -1 / 0 ? "-0" : yC;
  }
  function dy(CC) {
    if (null != CC) {
      try {
        return dC.call(CC);
      } catch (yC) {}
      try {
        return CC + "";
      } catch (yC) {}
    }
    return "";
  }
  function Qy(CC, yC) {
    if ("function" != typeof CC || yC && "function" != typeof yC) {
      throw new TypeError("Expected a function");
    }
    function IC() {
      var fC = arguments;
      var ky = yC ? yC.apply(this, fC) : fC[0];
      var gC = IC.cache;
      if (gC.has(ky)) {
        return gC.get(ky);
      }
      var AC = CC.apply(this, fC);
      IC.cache = gC.set(ky, AC);
      return AC;
    }
    IC.cache = new (Qy.Cache || py)();
    return IC;
  }
  function My(CC, yC) {
    return CC === yC || CC !== CC && yC !== yC;
  }
  function CI(CC) {
    return function (CC) {
      return AI(CC) && II(CC);
    }(CC) && QC.call(CC, "callee") && (!gy.call(CC, "callee") || MC.call(CC) == ky);
  }
  Qy.Cache = py;
  var yI = Array.isArray;
  function II(CC) {
    return null != CC && kf(CC.length) && !fI(CC);
  }
  function fI(CC) {
    var yC = gI(CC) ? MC.call(CC) : "";
    return yC == iy || "[object GeneratorFunction]" == yC;
  }
  function kf(CC) {
    return "number" == typeof CC && CC > -1 && CC % 1 == 0 && CC <= fC;
  }
  function gI(CC) {
    var yC = typeof CC;
    return !!CC && ("object" == yC || "function" == yC);
  }
  function AI(CC) {
    return !!CC && "object" == typeof CC;
  }
  function mf(CC) {
    return "symbol" == typeof CC || AI(CC) && MC.call(CC) == TC;
  }
  var XI;
  var LI = tC ? (XI = tC, function (CC) {
    return XI(CC);
  }) : function (CC) {
    return AI(CC) && kf(CC.length) && !!UC[MC.call(CC)];
  };
  function YI(CC) {
    return II(CC) ? ay(CC) : ty(CC);
  }
  function bI(CC) {
    return CC;
  }
  CC.exports = function (CC, yC, IC) {
    var fC;
    var ky = yI(CC) || LI(CC);
    yC = By(yC);
    if (null == IC) {
      if (ky || gI(CC)) {
        var gC = CC.constructor;
        IC = ky ? yI(CC) ? new gC() : [] : fI(gC) ? gI(fC = fy(CC)) ? kI(fC) : {} : {};
      } else {
        IC = {};
      }
    }
    (ky ? JC : Vy)(CC, function (CC, fC, ky) {
      return yC(IC, CC, fC, ky);
    });
    return IC;
  };
}(lg, lg.exports);
"function" === typeof SuppressedError && SuppressedError;
const {
  j: og
} = fC;
import * as vg from "./422.js";
import * as hg from "./424.js";
import * as Rg from "./638.js";
import * as dg from "./1336.js";
import * as Qg from "./66.js";
import * as Mg from "./1338.js";
import * as CA from "./1383.js";
import * as yA from "./1143.js";
import * as IA from "./1149.js";
import * as fA from "./14.js";
var km = function (CC) {
  CC.APPLICATION_COMMANDS = "applications.commands";
  CC.IDENTIFY = "identify";
  CC.EMAIL = "email";
  CC.GUILDS = "guilds";
  CC.READ_DM_CHANNELS = "dm_channels.read";
  CC.WRITE_ACTIVITIES = "rpc.activities.write";
  return CC;
}(km || {});
var gA = function (CC) {
  CC[CC.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL";
  CC[CC.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED";
  CC[CC.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL";
  CC[CC.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID";
  CC[CC.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN";
  CC[CC.RATELIMITED = 4002] = "RATELIMITED";
  CC[CC.TOKEN_REVOKED = 4003] = "TOKEN_REVOKED";
  CC[CC.INVALID_VERSION = 4004] = "INVALID_VERSION";
  CC[CC.INVALID_ENCODING = 4005] = "INVALID_ENCODING";
  return CC;
}(gA || {});
var AA = function (CC) {
  CC[CC.PLAYING = 0] = "PLAYING";
  CC[CC.STREAMING = 1] = "STREAMING";
  CC[CC.LISTENING = 2] = "LISTENING";
  CC[CC.WATCHING = 3] = "WATCHING";
  CC[CC.CUSTOM = 4] = "CUSTOM";
  CC[CC.COMPETING = 5] = "COMPETING";
  return CC;
}(AA || {});
const mm = {
  [hg.n.ADVENTURE]: "Adventuring",
  [hg.n.BATTLE]: "Battling",
  [hg.n.CREATIVE]: "Building",
  [hg.n.GRIND]: "Grinding",
  [hg.n.RACE]: "Racing",
  [hg.n.PARKOUR]: "Parkouring",
  [hg.n.OTHER]: "Being mischievous"
};
class XA {
  constructor(CC) {
    this.discordSdk = CC;
    this.guildNameCache = {};
    this.startTime = Date.now();
    this.cachedAccessToken = null;
  }
  static async setup() {
    console.log("Setting up Discord SDK with client id", vg.e.discordClientID);
    const CC = new rg(vg.e.discordClientID);
    let yC = !1;
    setTimeout(() => {
      yC || (console.warn("Discord SDK took too long to initialize"), (0, CA.w)());
    }, 15e3);
    await CC.ready();
    yC = !0;
    try {
      const {
        enabled: yC
      } = await CC.commands.encourageHardwareAcceleration();
      yC || console.warn("Hardware acceleration not enabled in the Discord client");
    } catch (fC) {
      console.error("Failed to encourage hardware acceleration in the Discord client", fC);
    }
    const IC = new XA(CC);
    IC.applyDiscordSafeAreaNotch();
    return IC;
  }
  async updateActivityDescription(CC) {
    let yC;
    let IC;
    switch (CC) {
      case "homePage":
        yC = "Chilling in the Main Menu";
        break;
      case "inGame":
        {
          const CC = await this.getInGameDescriptions();
          yC = CC.primary;
          IC = CC.secondary;
          break;
        }
    }
    await this.discordSdk.commands.setActivity({
      activity: {
        type: AA.PLAYING,
        details: yC,
        state: IC,
        assets: {
          large_image: "icon",
          large_text: yC
        },
        timestamps: {
          start: this.startTime
        }
      }
    }).catch(CC => {
      console.error('Failed to update Discord activity rich presence with description="'.concat(yC, '":'), CC);
    });
  }
  async getInGameDescriptions() {
    const CC = (0, IA.j)(yA.singletons.modeAttemptedPlay);
    const yC = await (0, dg.j)(Mg.c.ENGLISH, CC.title);
    const IC = mm[CC.type];
    const fC = yA.singletons.discordContextAttemptedPlay;
    if (null !== fC && yA.singletons.connectedLobbyName === fC.getLobbyName()) {
      return {
        primary: "".concat(IC, " in a Discord World")
      };
    }
    const ky = "".concat(IC, " in ").concat(yC);
    return (0, Qg.w)(yA.singletons.connectedLobbyName) ? {
      primary: ky
    } : {
      primary: ky,
      secondary: "Lobby ".concat(yA.singletons.connectedLobbyName)
    };
  }
  getCurrentChannelType() {
    const {
      channelId: CC,
      guildId: yC
    } = this.getCurrentChannelAndGuild();
    return null !== yC ? Rg.c.GUILD : null !== CC ? Rg.c.DM : null;
  }
  getRequiredScopeForCurrentChannel() {
    const CC = this.getCurrentChannelType();
    const yC = [km.APPLICATION_COMMANDS, km.IDENTIFY, km.EMAIL, km.GUILDS, km.WRITE_ACTIVITIES];
    switch (CC) {
      case Rg.c.DM:
      case Rg.c.GUILD:
        return [...yC];
      default:
        throw new Error("Unknown Discord channel type: ".concat(CC));
    }
  }
  getCurrentChannelAndGuild() {
    const {
      channelId: CC,
      guildId: yC
    } = this.discordSdk;
    return {
      channelId: null !== CC && void 0 !== CC ? CC : null,
      guildId: null !== yC && void 0 !== yC ? yC : null
    };
  }
  getInstanceId() {
    return this.discordSdk.instanceId;
  }
  async askDiscordUserForAuthorization() {
    const CC = this.getRequiredScopeForCurrentChannel();
    const {
      code: yC
    } = await this.discordSdk.commands.authorize({
      client_id: vg.e.discordClientID,
      response_type: "code",
      state: "",
      prompt: "none",
      scope: CC
    });
    return yC;
  }
  getCachedAccessToken() {
    return this.cachedAccessToken;
  }
  setCachedAccessToken(CC) {
    this.cachedAccessToken = CC;
  }
  registerGuild(CC, yC) {
    this.guildNameCache[CC] = yC;
  }
  async authenticate(CC) {
    return this.discordSdk.commands.authenticate({
      access_token: CC
    }).then(CC => null !== CC);
  }
  async getUserLocale() {
    try {
      const {
        locale: CC
      } = await this.discordSdk.commands.userSettingsGetLocale();
      return CC;
    } catch (CC) {
      console.error("Failed to get user locale from Discord:", CC.stack);
      return null;
    }
  }
  async getChannelName(CC) {
    return this.discordSdk.commands.getChannel({
      channel_id: CC
    }).then(CC => CC.name).catch(CC => "Your Current Discord Chat");
  }
  async getDiscordContextFromChannelId(CC) {
    const yC = await this.getChannelName(CC);
    return Rg.h.from({
      type: Rg.c.DM,
      channelId: CC,
      channelName: yC
    });
  }
  getDiscordContextFromGuildId(CC) {
    const yC = this.guildNameCache[CC];
    return (0, Qg.w)(yC) ? null : Rg.f.from({
      type: Rg.c.GUILD,
      guildId: CC,
      guildName: yC
    });
  }
  async getCurrentDiscordContext() {
    const {
      channelId: CC,
      guildId: yC
    } = this.getCurrentChannelAndGuild();
    return null !== yC ? this.getDiscordContextFromGuildId(yC) : null !== CC ? this.getDiscordContextFromChannelId(CC) : null;
  }
  exit(CC) {
    console.log("Exiting Discord Activity:", CC);
    this.discordSdk.close(gA.CLOSE_NORMAL, CC);
  }
  isMobilePlatform() {
    return this.discordSdk.platform === ZI.MOBILE;
  }
  applyDiscordSafeAreaNotch() {
    if (!this.isMobilePlatform() || this.getCurrentChannelType() !== Rg.c.DM) {
      return;
    }
    const CC = CC => {
      const yC = getComputedStyle(document.documentElement).getPropertyValue("--discord-safe-area-inset-".concat(CC)).trim();
      const IC = parseFloat(yC);
      return isNaN(IC) ? 0 : IC;
    };
    const yC = CC => 0 === window.innerWidth ? 0 : CC / window.innerWidth * 100;
    const IC = yC(CC("top"));
    const fC = yC(CC("right"));
    const ky = yC(CC("left"));
    fA.b.set({
      notchSize: {
        top: IC,
        right: Math.max(fC, 7),
        bottom: 0,
        left: ky
      }
    });
  }
}
class im extends ky.c {
  constructor() {
    super();
  }
  static async setup() {
    await (0, gC.e)("https://api.adinplay.com/libs/aiptag/pub/RBN/bloxd.io/tag.min.js");
    return new im();
  }
  playRewarded(CC, yC) {
    "undefined" !== typeof window.aiptag.adplayer ? (console.log("AD: Requesting AdInPlay rewarded ad"), window.aiptag.cmd.player.push(function () {
      window.aiptag.adplayer.startRewardedAd({
        preload: !1,
        showLoading: !1
      });
    }), window.adStartSoPause(CC, {
      onFailCb: yC
    })) : (console.log("AD: AIP ad lib not loaded, no rewarded ad playing"), yC());
  }
  playVideoAd(CC, yC) {
    gb() ? "undefined" !== typeof window.aiptag.adplayer ? (console.log("AD: Requesting AdInPlay video ad"), window.aiptag.cmd.player.push(function () {
      window.aiptag.adplayer.startPreRoll();
    }), window.adStartSoPause(CC)) : (CC(), console.error("AIP ad lib not loaded, no ad playing")) : CC();
  }
  renderBanner(CC) {
    "undefined" !== typeof window.aiptag.adplayer ? (window.aiptag.cmd.display.push(function () {
      window.aipDisplayTag.display(CC.divId);
    }), console.log("AD: Requested aip banner", document.getElementById(CC.divId))) : console.log("AD: User has adblock, not requesting new banners");
  }
  clearBanner(CC) {
    "undefined" !== typeof window.aiptag.adplayer ? (window.aiptag.cmd.display.push(function () {
      window.aipDisplayTag.destroy(CC.divId);
    }), console.log("AD: Clearing aip banner ad ".concat(CC.divId))) : console.log("AD: User has adblock, not requesting new banners");
  }
  setBannerAutoRefreshEnabled(CC, yC) {
    window.aiptag.cmd.display.push(function () {
      window.aipDisplayTag.setAutoRefresh(CC.divId, yC);
    });
  }
}
class LA extends ky.c {
  constructor(CC, yC) {
    super();
    this.aipSdkAdaptor = CC;
    this.setOnEndCb = yC;
    console.log("GameMonitize SDK initialized");
  }
  static isUsingGameMonetize() {
    return !1;
  }
  static async setup() {
    const CC = im.setup();
    const yC = (0, gC.e)("https://api.gamemonetize.com/sdk.js");
    let IC;
    window.SDK_OPTIONS = {
      gameId: null,
      onEvent: function (CC) {
        switch (CC.name) {
          case "SDK_GAME_PAUSE":
            window.adStartSoPause();
            break;
          case "SDK_GAME_START":
            IC && (window.adCompleteSoResume(), IC());
        }
      }
    };
    await yC;
    return new LA(await CC, CC => {
      IC = CC;
    });
  }
  playVideoAd(CC, yC) {
    gb() ? (this.setOnEndCb(CC), "undefined" !== typeof window.sdk && "undefined" !== window.sdk.showBanner ? window.sdk.showBanner() : CC()) : CC();
  }
  playRewarded(CC, yC) {
    throw new Error("Shouldnt be playing rewarded ads on gamemon just yet");
  }
  renderBanner(CC) {
    this.aipSdkAdaptor.renderBanner(CC);
  }
}
class YA extends ky.c {
  constructor() {
    super();
    this.adBreakStartCallback = () => {
      console.error("adBreakStartCallback not set");
    };
    this.adBreakCompleteCallback = () => {
      console.error("adBreakCompleteCallback not set");
    };
    document.addEventListener("adBreakStart", this.doAdBreakStart.bind(this));
    document.addEventListener("adBreakComplete", this.doAdBreakComplete.bind(this));
  }
  doAdBreakStart() {
    this.adBreakStartCallback();
    const CC = document.getElementsByClassName("ads-popup");
    for (const yC of CC) {
      yC instanceof HTMLElement && (yC.style.position = "fixed");
    }
  }
  doAdBreakComplete() {
    this.adBreakCompleteCallback();
  }
  static async setup() {
    await (0, gC.e)("https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js");
    await (0, gC.e)("https://www.coolmathgames.com/sites/default/files/cmg-ads.js");
    return new YA();
  }
  playVideoAd(CC, yC) {
    gb() ? (this.adBreakStartCallback = () => {
      console.log("CoolMathGames adBreak Started");
      window.adStartSoPause(null, {
        preventMovement: !0
      });
    }, this.adBreakCompleteCallback = () => {
      console.log("CoolMathGames adBreak Complete");
      window.adCompleteSoResume();
      CC();
    }, window.hasOwnProperty("cmgAdBreak") && window.cmgAdBreak()) : CC();
  }
  onGameplayStart() {
    try {
      window.parent.cmgGameEvent("start");
    } catch (CC) {
      console.log("Couldn't access cmgGameEvent on parent");
    }
  }
  onGameplayStop() {}
  onGameEntered() {
    try {
      window.parent.cmgGameEvent("start");
    } catch (CC) {
      console.log("Couldn't access cmgGameEvent on parent");
    }
  }
  onGameExited() {}
}
import * as bA from "./1385.js";
import * as rA from "./82.js";
import * as GA from "./447.js";
import * as eA from "./442.js";
import * as OA from "./1261.js";
import * as SA from "./408.js";
import * as TA from "./1442.js";
class NA {
  constructor() {}
  static async setup() {
    try {
      return await NA.setupInternal();
    } catch (CC) {
      console.error("Failed to setup Firebase SDK:", CC);
      return null;
    }
  }
  static async setupInternal() {
    const CC = await Promise.all([require.e(5), require.e(4)]).then(require.bind(require, 16752));
    const yC = await Promise.all([require.e(5), require.e(6)]).then(require.bind(require, 16777));
    const fC = await Promise.all([require.e(5), require.e(7)]).then(require.bind(require, 16779));
    const ky = CC.initializeApp(sA);
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () {
      window.dataLayer.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("config", sA.measurementId);
    window.gtag("config", "AW-16469618203");
    const gC = yC.getAnalytics(ky);
    const AC = {
      portal: GA.e.getSearchParam("portal") || "root",
      loggedIn: !1
    };
    yC.setUserProperties(gC, AC);
    const my = fC.getAuth();
    fC.useDeviceLanguage(my);
    const XC = new fC.GoogleAuthProvider();
    const iy = new fC.OAuthProvider("apple.com");
    const LC = new fC.OAuthProvider("microsoft.com");
    LC.setCustomParameters({
      prompt: "select_account",
      tenant: "consumers"
    });
    const YC = {
      [OA.e.GOOGLE]: {
        provider: XC,
        RNSignInMessage: "googleSignInWithPopup",
        RNCurrentUserMessage: "googleGetCurrentUser",
        RNSignOutMessage: "googleSignOut"
      },
      [OA.e.APPLE]: {
        provider: iy,
        RNSignInMessage: "appleSignInWithPopup",
        RNCurrentUserMessage: "appleGetCurrentUser",
        RNSignOutMessage: "appleSignOut"
      },
      [OA.e.MICROSOFT]: {
        provider: LC,
        RNSignInMessage: "microsoftSignInWithPopup",
        RNCurrentUserMessage: "microsoftGetCurrentUser",
        RNSignOutMessage: "microsoftSignOut"
      }
    };
    window.gtag("set", {
      cookie_flags: "SameSite=None;Secure"
    });
    await new Promise(CC => {
      const yC = fC.onIdTokenChanged(my, IC => {
        yC();
        CC();
      });
    });
    class bC extends NA {
      setUserProperties(CC) {
        yC.setUserProperties(gC, CC);
      }
      onIdTokenChanged(CC) {
        fC.onIdTokenChanged(my, CC);
      }
      async signInWithPopup(CC) {
        var yC;
        const IC = await fC.signInWithPopup(my, YC[CC].provider);
        return null !== (yC = null === IC || void 0 === IC ? void 0 : IC.user) && void 0 !== yC ? yC : null;
      }
      async getCurrentUser(CC) {
        const yC = my.currentUser;
        if (!yC) {
          return null;
        }
        const {
          signInProvider: IC
        } = await yC.getIdTokenResult(!1);
        return IC === YC[CC].provider.providerId ? yC : null;
      }
      async signOut(CC) {
        null !== (await this.getCurrentUser(CC)) && fC.signOut(my);
      }
    }
    class rC extends NA {
      setUserProperties(CC) {
        yC.setUserProperties(gC, CC);
      }
      onIdTokenChanged(CC) {
        fC.onIdTokenChanged(my, CC);
      }
      async signInWithPopup(CC) {
        return await (0, TA.b)(YC[CC].RNSignInMessage, {
          firebaseUserContextType: CC
        }).then(async yC => {
          var IC;
          let ky;
          switch (CC) {
            case OA.e.GOOGLE:
              ky = fC.GoogleAuthProvider.credential(yC.googleIdToken);
              break;
            case OA.e.APPLE:
              ky = iy.credential({
                idToken: yC.appleIdToken
              });
              break;
            case OA.e.MICROSOFT:
              ky = LC.credential({
                idToken: yC.microsoftIdToken
              });
              break;
            default:
              return null;
          }
          const gC = await fC.signInWithCredential(my, ky);
          return null !== (IC = null === gC || void 0 === gC ? void 0 : gC.user) && void 0 !== IC ? IC : null;
        }).catch(yC => {
          console.error("Failed to sign in with ".concat(CC, " popup:"), yC);
          return null;
        });
      }
      async getCurrentUser(CC) {
        const yC = my.currentUser;
        if (yC) {
          const {
            signInProvider: IC
          } = await yC.getIdTokenResult(!1);
          if (IC === YC[CC].provider.providerId) {
            return yC;
          }
        }
        return await (0, TA.b)(YC[CC].RNCurrentUserMessage, {}).then(async yC => {
          var IC;
          let ky;
          switch (CC) {
            case OA.e.GOOGLE:
              ky = fC.GoogleAuthProvider.credential(yC.googleIdToken);
              break;
            case OA.e.APPLE:
              ky = iy.credential({
                idToken: yC.appleIdToken
              });
              break;
            case OA.e.MICROSOFT:
              ky = LC.credential({
                idToken: yC.microsoftIdToken
              });
              break;
            default:
              return null;
          }
          const gC = await fC.signInWithCredential(my, ky);
          return null !== (IC = null === gC || void 0 === gC ? void 0 : gC.user) && void 0 !== IC ? IC : null;
        }).catch(yC => {
          console.error("Failed to get current ".concat(CC, " user from React Native wrapper"), yC);
          return null;
        });
      }
      async signOut(CC) {
        (0, TA.b)(YC[CC].RNSignOutMessage, {});
        const yC = my.currentUser;
        if (yC) {
          const {
            signInProvider: IC
          } = await yC.getIdTokenResult(!1);
          IC === YC[CC].provider.providerId && fC.signOut(my);
        }
      }
    }
    return (0, SA.S)() ? new rC() : new bC();
  }
}
const sA = {
  apiKey: "AIzaSyCJ-G6m_NyA3P021v-ugDmMmkcKysUebSE",
  authDomain: "bloxd-ee1aa.firebaseapp.com",
  projectId: "bloxd-ee1aa",
  storageBucket: "bloxd-ee1aa.appspot.com",
  messagingSenderId: "758847442742",
  appId: "1:758847442742:web:7bb74eb261641e30f02d97",
  measurementId: "G-DXF16YBENG"
};
import * as jm from "./1259.js";
import * as qA from "./1276.js";
var KA = qA;
import * as pA from "./577.js";
class wA {
  constructor() {
    this.popupWindowPromise = null;
    this.popupWindowPromiseResolve = null;
    this.popupWindowPromiseReject = null;
    this.popupWindow = null;
    this.popupWindowCheckInterval = null;
    this.bloxdDiscordRefreshTokenKey = "4PSIDTCPM";
    window.addEventListener("message", CC => {
      var yC;
      if (CC.origin !== window.location.origin || "oauth_authentication_discord" !== (null === (yC = CC.data) || void 0 === yC ? void 0 : yC.type)) {
        return;
      }
      const IC = CC.data.code;
      null !== this.popupWindowPromiseResolve && (this.popupWindowPromiseResolve(IC), this.resetPopupState());
    });
  }
  resetPopupState() {
    null !== this.popupWindowCheckInterval && clearInterval(this.popupWindowCheckInterval);
    this.popupWindowCheckInterval = null;
    this.popupWindowPromiseResolve = null;
    this.popupWindowPromiseReject = null;
    this.popupWindowPromise = null;
    this.popupWindow = null;
  }
  openDiscordOAuthWindow() {
    const CC = vg.e.discordClientID;
    const yC = Rg.o[vg.e.bloxdClientEnvironment];
    return window.open("https://discord.com/oauth2/authorize?response_type=code&client_id=".concat(CC, "&scope=identify%20guilds&redirect_uri=").concat(yC, "&integration_type=0"), "oauth_authentication", "popup,width=480,height=720,top=".concat(window.screen.height / 2 - 360, ",left=").concat(window.screen.width / 2 - 240));
  }
  async showDiscordAuthPrompt() {
    return new Promise((CC, yC) => {
      bA.b.showPromptPopup({
        title: "Discord Login Required",
        confirmText: "Continue",
        confirmTooltip: "Open Discord login window",
        cancelText: "Cancel",
        cancelTooltip: "Cancel Discord login"
      }).getResult().then(IC => {
        IC ? CC() : yC();
      }).catch(yC);
    });
  }
  signInWithPopup() {
    null !== this.popupWindowPromise || (this.popupWindowPromise = new Promise((CC, yC) => {
      rA.e.removeItem(this.bloxdDiscordRefreshTokenKey);
      (async () => {
        try {
          let IC;
          for (const CC of [() => Promise.resolve(), () => this.showDiscordAuthPrompt()]) {
            await CC();
            IC = this.openDiscordOAuthWindow();
            console.log("Discord OAuth window opened:", IC);
            if (IC) {
              break;
            }
          }
          if (!IC) {
            return void yC(new Error("Failed to open Discord authentication popup - popup may have been blocked"));
          }
          this.popupWindow = IC;
          this.popupWindowPromiseResolve = CC;
          this.popupWindowPromiseReject = yC;
          this.popupWindowCheckInterval = IC.setInterval(() => {
            this.popupWindow && this.popupWindow.closed && (this.popupWindowPromiseReject(new Error("Discord authentication was cancelled - popup window was closed")), this.resetPopupState());
          }, 200);
        } catch (IC) {
          yC(IC);
        }
      })();
    }));
    return this.popupWindowPromise;
  }
  async exchangeAuthorizationCodeForAccessToken(CC, yC) {
    const {
      accessToken: IC,
      refreshToken: fC
    } = await KA(async () => await (0, jm.t)("".concat(pA.b.indexUrl, "/index/discord/log-event"), {
      authorizationCode: CC,
      bloxdClientEnvironment: vg.e.bloxdClientEnvironment,
      instanceId: null
    }, {
      retries: 0
    }, yC.getMetricsCookies()), {
      retries: 3
    });
    console.log("Discord access token received:", fC, this.bloxdDiscordRefreshTokenKey);
    rA.e.setItem(this.bloxdDiscordRefreshTokenKey, fC);
    return IC;
  }
  hasCurrentUser() {
    const CC = rA.e.getItem(this.bloxdDiscordRefreshTokenKey);
    return !(0, Qg.w)(CC);
  }
  async getCurrentUser(CC) {
    const yC = rA.e.getItem(this.bloxdDiscordRefreshTokenKey);
    if (!yC) {
      return null;
    }
    let IC;
    try {
      const fC = await KA(async () => await (0, jm.t)("".concat(pA.b.indexUrl, "/index/discord/collect-event"), {
        refreshToken: yC
      }, {
        retries: 0
      }, CC.getMetricsCookies()), {
        retries: 3
      });
      IC = fC.accessToken;
      rA.e.setItem(this.bloxdDiscordRefreshTokenKey, fC.refreshToken);
    } catch (fC) {
      console.error("Failed to refresh Discord access token:", fC);
      return null;
    }
    return {
      accessToken: IC
    };
  }
  signOut() {
    this.resetPopupState();
    rA.e.removeItem(this.bloxdDiscordRefreshTokenKey);
  }
}
const HA = 20;
const aA = {
  top: [{
    width: 970,
    height: 250
  }, {
    width: 728,
    height: 90
  }, {
    width: 320,
    height: 50
  }],
  right: [{
    width: 300,
    height: 600
  }, {
    width: 160,
    height: 600
  }, {
    width: 300,
    height: 250
  }, {
    width: 320,
    height: 50
  }],
  left: [{
    width: 300,
    height: 600
  }, {
    width: 160,
    height: 600
  }, {
    width: 300,
    height: 250
  }, {
    width: 320,
    height: 50
  }]
};
const cA = {
  leaderboard: {
    1: ["right", "left"],
    5: ["top", "left"]
  },
  square: {
    1: []
  },
  skyscraper: {
    2: []
  }
};
class UA extends ky.c {
  constructor() {
    super();
    this.currentlyShowingBannerPlacement = null;
    this.isCurrentlyClearingAllBanners = !1;
  }
  static async setup() {
    await (0, gC.e)("https://assets.msn.com/staticsb/statics/latest/msstart-games-sdk/msstart-v1.0.0-rc.20.min.js");
    return new UA();
  }
  playVideoAd(CC, yC) {
    gb() ? this.playVideoOrRewarded("video", CC, CC) : CC();
  }
  playRewarded(CC, yC) {
    this.playVideoOrRewarded("rewarded", CC, yC);
  }
  canShowSuperRankAd(CC) {
    for (const yC in cA) {
      if (CC.adId in cA[yC]) {
        return !1;
      }
    }
    return !0;
  }
  async renderBanner(CC) {
    if (null !== this.currentlyShowingBannerPlacement) {
      return void console.log("AD ".concat(g(CC), ": msn placement is already showing so not requesting"));
    }
    const yC = cA[CC.adType][CC.adId];
    if ((0, Qg.w)(yC)) {
      return void console.warn("AD ".concat(g(CC), ": no msn placement is configured for this bloxd placement so not showing any ad"));
    }
    const IC = [];
    for (const fC of yC) {
      for (const CC of aA[fC]) {
        if (CC.width <= window.innerWidth - 40 && CC.height <= window.innerHeight - 40) {
          const yC = {
            placement: fC,
            width: CC.width,
            height: CC.height
          };
          if (!IC.some(CC => VA(yC, CC))) {
            IC.push(yC);
            break;
          }
        }
      }
    }
    if (IC.length > 0) {
      console.log("AD ".concat(g(CC), ": Attempting to show msn units: "), IC);
      const yC = IC.map(CC => "".concat(CC.placement, ":").concat(CC.width, "x").concat(CC.height));
      this.currentlyShowingBannerPlacement = {
        placementId: g(CC),
        renderPromise: window.$msstart.showDisplayAdsAsync(yC).then(() => {
          console.log("AD ".concat(g(CC), ": Successfully request msn banner ad"));
        }).catch(yC => {
          console.log("AD ".concat(g(CC), ": Error while requesting msn banner ad"), yC);
        })
      };
    } else {
      console.warn("AD ".concat(g(CC), ": couldn't find an msn unit that fit screen size"));
    }
  }
  async clearBanner(CC) {
    null !== this.currentlyShowingBannerPlacement && g(CC) === this.currentlyShowingBannerPlacement.placementId && (console.log("AD ".concat(g(CC), ": Attempting to clear msn banner ads for banner"), CC), await this.clearAllBannerAds());
  }
  async clearAllBannerAds() {
    try {
      if (this.isCurrentlyClearingAllBanners) {
        return;
      }
      this.isCurrentlyClearingAllBanners = !0;
      null !== this.currentlyShowingBannerPlacement && (await this.currentlyShowingBannerPlacement.renderPromise);
      await window.$msstart.hideDisplayAdsAsync();
      console.log("AD: Successfully cleared all msn banner ads");
    } catch (CC) {
      console.log("AD: Error while clearing all msn banner ads", CC);
    } finally {
      this.currentlyShowingBannerPlacement = null;
      this.isCurrentlyClearingAllBanners = !1;
    }
  }
  playVideoOrRewarded(CC, yC, IC) {
    const fC = yC => {
      console.error("AD: Error while playing MSN ".concat(CC, " ad: "), yC);
      document.getElementById("GenericVideoWrapper").style.display = "none";
      document.getElementById("GenericVideoInner").classList.remove("GenericVidBorder");
      window.adCompleteSoResume();
      IC();
    };
    if (window.$msstart) {
      console.log("AD: Attempting to play MSN ".concat(CC, " ad"));
      document.getElementById("GenericVideoWrapper").style.display = "flex";
      document.getElementById("GenericVideoInner").classList.add("GenericVidBorder");
      (async () => {
        try {
          const IC = await window.$msstart.loadAdsAsync("rewarded" === CC);
          const fC = await window.$msstart.showAdsAsync(IC.instanceId);
          this.clearAllBannerAds();
          await fC.showAdsCompletedAsync;
          console.log("AD: Successfully finished MSN ".concat(CC, " ad"));
          document.getElementById("GenericVideoWrapper").style.display = "none";
          document.getElementById("GenericVideoInner").classList.remove("GenericVidBorder");
          window.adCompleteSoResume();
          yC();
        } catch (IC) {
          fC(IC);
        }
      })();
      window.adStartSoPause(null, {
        preventMovement: !0
      });
    } else {
      fC("AD: Can't play MSN ".concat(CC, " ad because sdk is not loaded"));
    }
  }
}
function EA(CC) {
  let yC;
  let IC;
  switch (CC.placement) {
    case "top":
      yC = (window.innerWidth - CC.width) / 2;
      IC = HA;
      break;
    case "right":
      yC = window.innerWidth - CC.width - HA;
      IC = window.innerHeight / 2 - CC.height / 2 - 10;
      break;
    case "left":
      yC = HA;
      IC = window.innerHeight / 2 - CC.height / 2 - 10;
  }
  return {
    x1: yC,
    y1: IC,
    x2: yC + CC.width,
    y2: IC + CC.height
  };
}
function VA(CC, yC) {
  const IC = EA(CC);
  const fC = EA(yC);
  return !(IC.x2 <= fC.x1 || fC.x2 <= IC.x1 || IC.y2 <= fC.y1 || fC.y2 <= IC.y1);
}
const WA = {
  video: "pb-slot-interstitial-video",
  rewarded: "pb-slot-rewarded-video"
};
class xA extends ky.c {
  constructor() {
    super();
  }
  static async setup() {
    window.tude = window.tude || {
      cmd: []
    };
    await (0, gC.e)("https://edge.aditude.io/site/bloxd-Jf9xJheMSn/bloxd-longform/bloxd.io/prod/load.js");
    return new xA();
  }
  playVideoAd(CC, yC) {
    gb() ? this.playVideoOrRewarded("video", CC, CC) : CC();
  }
  playRewarded(CC, yC) {
    this.playVideoOrRewarded("rewarded", CC, yC);
  }
  renderBanner(CC) {
    const yC = this.getBaseDivId(CC.adId, CC.width, CC.height);
    window.tude.cmd.push(function () {
      window.tude.refreshAdsViaDivMappings([{
        divId: CC.divId,
        baseDivId: yC
      }]);
    });
  }
  getBaseDivId(CC, yC, IC) {
    return "pb-slot-bloxdio-".concat(yC, "-").concat(IC).concat(CC > 1 ? "-".concat(CC) : "");
  }
  playVideoOrRewarded(CC, yC, IC) {
    var fC;
    let ky = !1;
    const gC = () => {
      document.getElementById("GenericVideoWrapper").style.display = "none";
      document.getElementById("GenericVideoInner").classList.remove("GenericVidBorder");
      ky = !0;
    };
    const AC = (CC, yC) => {
      console.error("AD: Error while playing Aditude video ad: ".concat(CC, ":"), yC);
      gC();
      IC();
    };
    console.log("AD: Requesting Aditude ".concat(CC, " ad"));
    if (void 0 === (null === (fC = window.tude) || void 0 === fC ? void 0 : fC.requestInstreamPlayer)) {
      console.log("AD: Aditude ad lib not loaded, no ".concat(CC, " ad playing"));
      return void AC("Aditude ad lib not loaded", null);
    }
    document.getElementById("GenericVideoWrapper").style.display = "flex";
    document.getElementById("GenericVideoInner").classList.add("GenericVidBorder");
    document.getElementById("GenericVideoInner").classList.add("AditudeVideo");
    window.tude.cmd.push(function () {
      console.log("AD: Inside Aditude window.tude.cmd.push");
      try {
        window.tude.requestInstreamPlayer({
          code: WA[CC],
          divId: "GenericVideoInner",
          mode: "adOnly"
        }).then(IC => {
          console.log("AD: Inside Aditude window.tude.requestInstreamPlayer.then");
          IC.on("playerClose", (IC, fC) => {
            console.log("AD: Inside Aditude player.on playerClose");
            console.log("AD: Successfully finished Aditude ".concat(CC, " ad"));
            gC();
            yC();
          }).on("adPrefetchError", (CC, yC) => {
            console.log("AD: Inside Aditude player.on adPrefetchError");
            AC("Prefetch error", yC);
          }).on("adError", (CC, yC) => {
            console.log("AD: Inside Aditude player.on adError");
            AC("Generic error", yC);
          });
          const fC = CC => {
            setTimeout(() => {
              ky || IC.setVideoVolume(.5);
            }, CC);
          };
          fC(500);
          fC(1e3);
          fC(1500);
          fC(2e3);
        }).catch(CC => {
          AC("Error occurred while requesting instream player", CC);
        });
      } catch (IC) {
        AC("Failed to request instream player", IC);
      }
    });
  }
}
import * as PA from "./1153.js";
import * as zA from "./478.js";
import * as BA from "./49.js";
import * as tA from "./534.js";
const JA = 5;
function nA(CC) {
  let {
    onFinished: yC
  } = CC;
  const {
    t: IC
  } = (0, dg.n)();
  const [fC, ky] = (0, BA.ey)(JA);
  (0, BA.Oy)(() => {
    const CC = setInterval(() => {
      ky(IC => {
        const fC = IC - 1;
        fC <= 0 && (clearInterval(CC), yC());
        return Math.max(fC, 0);
      });
    }, 1e3);
    return () => clearInterval(CC);
  }, []);
  return (0, tA.jsxs)("div", {
    className: "RewardedCountdownFallback",
    children: [(0, tA.jsx)("div", {
      className: "RewardedCountdownFallbackTitle SmallTextBold",
      children: IC("general:rewardedCountdownTitle")
    }), (0, tA.jsx)("div", {
      className: "RewardedCountdownFallbackTimer",
      children: fC
    })]
  });
}
var FA;
var uA;
let DA = !1;
let ZA = !1;
let lA = !1;
LC.c.subscribe("userContextUpdated", async CC => {
  const yC = CC.playerHasRank("super");
  const IC = CC.playerHasRank("developer");
  DA = yC;
  yC && IC && (console.log("Player has Super Rank but also has Developer Rank so ads will be shown"), DA = !1);
  ZA || (ZA = DA);
  oA();
});
const oA = () => {
  const CC = ["loadingScreen", "inGame"].includes(fA.b.get("gameState"));
  CC && !lA && (ZA = DA);
  lA = CC;
  ZA || (ZA = DA);
  fA.b.set({
    hideAds: lA ? ZA : DA
  });
};
LC.c.subscribe("appManagerUpdated|gameState", oA);
export const i = new class {
  constructor() {
    this.firebaseProm = void 0;
    this.discordProm = void 0;
    this.discordActivityProm = void 0;
    this.crazyGamesProm = void 0;
    this.firebaseProm = (0, eA.o)() ? NA.setup() : Promise.resolve(null);
    this.discordProm = (0, eA.k)() ? Promise.resolve(null) : Promise.resolve(new wA());
    this.discordActivityProm = (0, eA.k)() ? XA.setup() : Promise.resolve(null);
    this.crazyGamesProm = "crazygames" === eA.D ? iy.e.setup() : Promise.resolve(null);
  }
  async waitUntilAllSdksReady() {
    await Promise.all([this.firebaseProm, this.discordProm, this.discordActivityProm, this.crazyGamesProm]);
  }
  async firebase() {
    return await this.firebaseProm;
  }
  async discord() {
    return await this.discordProm;
  }
  async discordActivity() {
    return await this.discordActivityProm;
  }
  async crazyGames() {
    return await this.crazyGamesProm;
  }
}();
export let cb = !1;
export let h = 0;
class dA {
  constructor(CC) {
    this.sdkAdaptors = {
      video: {
        adaptorProm: null,
        maybeUnloadedAdaptor: null
      },
      rewardedVideo: {
        adaptorProm: null,
        maybeUnloadedAdaptor: null
      },
      banner: {
        adaptorProm: null,
        maybeUnloadedAdaptor: null
      },
      general: {
        adaptorProm: null,
        maybeUnloadedAdaptor: null
      }
    };
    for (const yC in CC) {
      this.sdkAdaptors[yC].adaptorProm = CC[yC].then(CC => {
        this.sdkAdaptors[yC].maybeUnloadedAdaptor = CC;
        return CC;
      });
    }
  }
  static shouldPreventUsage(CC) {
    if (!("banner" === CC || "video" === CC || "rewardedVideo" === CC)) {
      return !1;
    }
    const yC = fA.b.get("hideAds");
    const IC = ["CN", "VN", "IN"].includes((0, zA.guessCurrentCountryCode)());
    return yC || IC;
  }
  async getSdkAdaptor(CC) {
    return dA.shouldPreventUsage(CC) ? null : this.sdkAdaptors[CC].adaptorProm;
  }
  getMaybeUnloadedAdaptor(CC) {
    return dA.shouldPreventUsage(CC) ? null : this.sdkAdaptors[CC].maybeUnloadedAdaptor;
  }
}
export const {
  videoAdProvider: QA,
  bannerAdProvider: c
} = function () {
  let CC;
  let yC;
  GA.e.hasSearchParam("forceAditudeAds") ? (console.info("AD: Forcing use of aditude"), CC = "aditude", yC = "aditude") : GA.e.hasSearchParam("forceCGAds") ? (console.info("AD: Forcing use of adsolve"), CC = "adsolve", yC = "adsolve") : GA.e.hasSearchParam("forceAdInPlayAds") ? (console.info("AD: Forcing use of adinplay"), CC = "adinplay", yC = "adinplay") : (CC = "adinplay", yC = "adinplay");
  console.info("AD: Using ".concat(CC, " for direct traffic video ads, and using ").concat(yC, " for direct traffic banner ads"));
  return {
    videoAdProvider: CC,
    bannerAdProvider: yC
  };
}();
const Cm = function () {
  let CC;
  "yandex" === eA.D ? (console.info("AD: On ".concat(eA.D, ", not loading any ads")), CC = Promise.resolve(new ky.c())) : PA.g && (console.info("AD: isBloxdEdu, not loading any ads"), CC = Promise.resolve(new ky.c()));
  "discord" === eA.D && (console.info("AD: On discord, not loading any ads"), CC = Promise.resolve(new ky.c()));
  "crazygames" === eA.D ? (cb = !0, h = 1, CC = iy.h.setup(!1)) : "gamedistribution" === eA.D ? CC = my.setup() : "coolmathgames" === eA.D ? CC = YA.setup() : LA.isUsingGameMonetize() ? CC = LA.setup() : XC.e.isUsingPlaywire() ? (console.info("AD: Not on any game site, attempting to load playwire ad lib"), CC = XC.e.setup()) : "mobileAndroid" === eA.D ? CC = im.setup() : "mobileIos" === eA.D ? CC = Promise.resolve(new ky.c()) : "msnPlay" === eA.D ? CC = UA.setup() : "desktopMicrosoftStore" === eA.D && (CC = im.setup());
  if (CC) {
    CC.then(() => {
      fA.b.set({
        initSdkSelectorFinished: !0
      });
    });
    return new dA({
      video: CC,
      rewardedVideo: CC,
      banner: CC,
      general: CC
    });
  }
  console.info("AD: Not on any game site, loading direct ad lib");
  if ("bloxd" !== eA.D) {
    console.error("Should be on siteUsed bloxd to reach here");
    const CC = Promise.resolve(new ky.c());
    CC.then(() => {
      fA.b.set({
        initSdkSelectorFinished: !0
      });
    });
    return new dA({
      video: CC,
      rewardedVideo: CC,
      banner: CC,
      general: CC
    });
  }
  const yC = {
    adinplay: null,
    adsense: null,
    adsolve: null,
    aditude: null
  };
  "adinplay" !== QA && "adinplay" !== c || (yC.adinplay = im.setup());
  "adsense" !== QA && "adsense" !== c || (yC.adsense = AC.setup());
  "adsolve" !== QA && "adsolve" !== c || ("adsolve" === c && (cb = !0, h = 1), yC.adsolve = iy.h.setup(!0));
  "aditude" !== QA && "aditude" !== c || (yC.aditude = xA.setup());
  const IC = yC[QA];
  const fC = yC[QA];
  const gC = yC[c];
  const LC = Promise.resolve(new ky.c());
  Promise.all([IC, gC, LC]).then(() => {
    fA.b.set({
      initSdkSelectorFinished: !0
    });
  });
  return new dA({
    video: IC,
    rewardedVideo: fC,
    banner: gC,
    general: LC
  });
}();
export function N() {
  console.log("Doing Gameplay Start");
  Cm.getSdkAdaptor("general").then(CC => {
    null === CC || void 0 === CC || CC.onGameplayStart();
  });
}
export function Q() {
  console.log("Doing Gameplay Stop");
  Cm.getSdkAdaptor("general").then(CC => {
    null === CC || void 0 === CC || CC.onGameplayStop();
  });
}
export function F() {
  console.log("Doing Game Entered");
  Cm.getSdkAdaptor("general").then(CC => {
    null === CC || void 0 === CC || CC.onGameEntered();
  });
  i.discordActivity().then(CC => {
    null === CC || void 0 === CC || CC.updateActivityDescription("inGame");
  });
}
export function J() {
  console.log("Doing Game Exited");
  Cm.getSdkAdaptor("general").then(CC => {
    null === CC || void 0 === CC || CC.onGameExited();
  });
  i.discordActivity().then(CC => {
    null === CC || void 0 === CC || CC.updateActivityDescription("homePage");
  });
}
export function U() {
  console.log("Doing Homescreen Entered");
  Cm.getSdkAdaptor("general").then(CC => {
    null === CC || void 0 === CC || CC.onHomescreenEntered();
  });
  i.discordActivity().then(CC => {
    null === CC || void 0 === CC || CC.updateActivityDescription("homePage");
  });
}
export function W() {
  console.log("Doing Homescreen Exited");
  Cm.getSdkAdaptor("general").then(CC => {
    null === CC || void 0 === CC || CC.onHomescreenExited();
  });
}
export function ab(CC) {
  let yC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
  let IC = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
  LC.c.Gy("requestingPlayVideoAd");
  const fC = Cm.getMaybeUnloadedAdaptor("video");
  let ky = !1;
  const gC = () => {
    if (!ky) {
      try {
        CC();
      } catch (yC) {
        console.error("AD: Error while calling onEndUnsafe:", yC);
      } finally {
        ky = !0;
        IC && yA.singletons.pointerLockWrapper.removePointerUnlockRequest("onPlayVideoAd");
      }
    }
  };
  if (null === fC) {
    return void gC();
  }
  let AC;
  IC && yA.singletons.pointerLockWrapper.requestPointerUnlock("onPlayVideoAd");
  const my = setTimeout(async () => {
    const CC = bA.b.showAlertPopup({
      title: "homePage:skipAdPopupTitle",
      subtitle: "homePage:skipAdPopupSubtitle",
      confirmText: "homePage:skipAdPopupConfirmText",
      confirmTooltip: "homePage:skipAdPopupConfirmTooltip",
      disableBackground: !0
    });
    AC = () => {
      CC.tearDownNotification();
    };
    try {
      const fC = await CC.getResult();
      var yC;
      var IC;
      AC = null;
      if ("notificationTornDown" !== fC) {
        console.log("Skipping ad using popup");
        gC();
        null === (yC = (IC = window).adCompleteSoResume) || void 0 === yC || yC.call(IC);
      }
    } catch (fC) {
      console.error("AD: Error while waiting for skip ad confirmation:", fC);
    }
  }, 5e3);
  try {
    console.log("AD: playVideoAd attempt");
    fC.playVideoAd(() => {
      clearTimeout(my);
      AC && AC();
      gC();
      rA.j.setItem(Tm, Date.now());
    }, yC);
  } catch (XC) {
    console.error("AD: Error while playing video AD:", XC);
    gC();
  }
}
export async function Z(CC) {
  let yC = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
  const IC = Cm.getMaybeUnloadedAdaptor("rewardedVideo");
  yC && yA.singletons.pointerLockWrapper.requestPointerUnlock("onPlayRewardedAd");
  const fC = () => {
    yC && yA.singletons.pointerLockWrapper.removePointerUnlockRequest("onPlayRewardedAd");
    CC();
  };
  const ky = () => {
    !function (CC) {
      bA.b.showCustomPopup({
        body: yC => (0, tA.jsx)(nA, {
          onFinished: () => {
            yC();
            CC();
          }
        }),
        disableExitButton: !0,
        disablePressBackgroundToClose: !0
      });
    }(fC);
  };
  if (null !== IC) {
    try {
      IC.playRewarded(fC, ky);
    } catch (gC) {
      console.error("AD: Error while playing rewarded:", gC);
      ky();
    }
  } else {
    ky();
  }
}
export async function l(CC) {
  try {
    const yC = await Cm.getSdkAdaptor("banner");
    return null === yC || void 0 === yC ? void 0 : yC.canShowSuperRankAd(CC);
  } catch (yC) {
    return !0;
  }
}
export async function bb(CC) {
  try {
    console.log("AD ".concat(CC.adType, "_").concat(CC.adId, ": rendering with bannerInfo"), JSON.stringify(CC));
    const yC = await Cm.getSdkAdaptor("banner");
    null === yC || void 0 === yC || yC.renderBanner(CC);
  } catch (yC) {
    console.error("AD ".concat(CC.divId, ": Error while rendering banner: "), yC);
  }
}
export async function m(CC) {
  try {
    const yC = await Cm.getSdkAdaptor("banner");
    null === yC || void 0 === yC || yC.clearBanner(CC);
  } catch (yC) {
    console.error("AD ".concat(null === CC || void 0 === CC ? void 0 : CC.divId, ": Error while clearing banner: "), yC);
  }
}
export async function db(CC, yC) {
  try {
    console.log("AD ".concat(CC.adType, "_").concat(CC.adId, ": setting auto refresh enabled to ").concat(yC, " with bannerInfo"), JSON.stringify(CC));
    const IC = await Cm.getSdkAdaptor("banner");
    null === IC || void 0 === IC || IC.setBannerAutoRefreshEnabled(CC, yC);
  } catch (IC) {
    console.error("AD ".concat(CC.divId, ": Error while setting auto refresh enabled: "), IC);
  }
}
export async function w() {
  const CC = await Cm.getSdkAdaptor("general");
  return null === CC || void 0 === CC ? void 0 : CC.getInviteLink();
}
export function u() {
  const CC = Cm.getMaybeUnloadedAdaptor("general");
  return null === CC ? (console.error("Sdk adaptor has not yet loaded. Returning false for getChatShouldBeDisabled"), !1) : !CC.chatShouldBeDisabled();
}
export async function p() {
  const CC = await Cm.getSdkAdaptor("banner");
  null === CC || void 0 === CC || CC.displayConsentUI();
}
export async function s() {
  var CC;
  const yC = await Cm.getSdkAdaptor("general");
  return null !== (CC = null === yC || void 0 === yC ? void 0 : yC.getApplicationType()) && void 0 !== CC ? CC : null;
}
export function A(CC) {
  return {
    position: "absolute",
    visibility: CC ? "visible" : "hidden",
    opacity: CC ? 1 : 0
  };
}
const Tm = "lastAP";
let Nm = eA.y[eA.D].adConfig.playPrerollOnJoin ? null !== (FA = rA.j.getItem(Tm)) && void 0 !== FA ? FA : 0 : Date.now();
const sm = null !== (uA = rA.j.getItem(hg.R)) && void 0 !== uA ? uA : 0;
export function C() {
  Nm = Date.now();
}
export function gb() {
  if ("coolmathgames" === eA.D) {
    return !0;
  }
  let CC;
  CC = "msnPlay" === eA.D ? 3e4 : 18e4;
  return !GA.e.hasSearchParam("alwaysVidAd") && Date.now() - Nm < CC ? (console.warn("AD: No video ad shown due to it only being ".concat((Date.now() - Nm) / 1e3, "s since the last video ad. Interval is ").concat(CC)), !1) : (Nm = Date.now(), !0);
}
rA.j.setItem(hg.R, sm);
0 === sm ? rA.j.setItem("firstPlayTime", Date.now()) : null === rA.j.getItem("firstPlayTime") && rA.j.setItem("firstPlayTime", 0);
"bloxd" === eA.D && sm < 1 && (Nm = Date.now());
const Km = {};
const pm = [];
const wm = 3;
const Hm = 3e4;
export function eb(CC) {
  const yC = CC.divId;
  void 0 === Km[yC] && (Km[yC] = 0);
  if (eA.y[eA.D].adConfig.checkBannerViewability) {
    const yC = null !== CC.currentAdMarker;
    const IC = CC.currentTimeHasBeenVisible > 3e3;
    const fC = CC.maxTimeHasBeenVisible > 3e3;
    if (yC && !IC && !fC) {
      const yC = Math.max(CC.currentTimeHasBeenVisible, CC.maxTimeHasBeenVisible);
      console.warn("AD ".concat(CC.divId, ": Not refreshing ").concat(CC.divId, ", the ad has only been viewable for a max of ").concat(yC / 1e3, "s"));
      return !1;
    }
  }
  if (Date.now() - Km[yC] < ("bloxd" !== eA.D || "adinplay" !== c && "aditude" !== c ? "crazygames" === eA.D ? 3e4 : "msnPlay" === eA.D ? 5e3 : 6e4 : 3e4)) {
    console.warn("AD ".concat(CC.divId, ": Not refreshing ").concat(CC.divId, ", only ").concat((Date.now() - Km[yC]) / 1e3, "s since ").concat(yC, " was last refreshed"));
    return !1;
  }
  if ("bloxd" === eA.D) {
    const CC = Date.now();
    let yC = 0;
    for (let IC = 0; IC < pm.length; IC++) {
      CC - pm[IC] < Hm && yC++;
    }
    console.log("AD: Have shown ".concat(yC, "/").concat(wm, " in last ").concat(Hm / 1e3, "s"));
    if (yC >= wm) {
      return !1;
    }
  }
  Km[yC] = Date.now();
  pm.push(Date.now());
  return !0;
}
export function g(CC) {
  return "".concat(CC.adType, "_").concat(CC.adId);
}