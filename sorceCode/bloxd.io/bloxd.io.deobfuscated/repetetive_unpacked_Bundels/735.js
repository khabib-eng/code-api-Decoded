var fC;
var ky = require("./742.js");
var gC = require("./749.js");
var AC = require("./754.js");
var my = require("./759.js");
var XC = require("./764.js");
var iy = require("./770.js");
var LC = require("./777.js");
var YC = require("./785.js");
var bC = require("./790.js");
var rC = require("./792.js");
var GC = require("./797.js");
var eC = require("./799.js");
var OC = require("./808.js");
var SC = require("./817.js");
var TC = require("./819.js");
var NC = Function;
function sC(CC) {
  try {
    return NC('"use strict"; return (' + CC + ").constructor;")();
  } catch (yC) {}
}
var jy = require("./831.js");
var qC = require("./842.js");
function KC() {
  throw new LC();
}
var pC = jy ? function () {
  try {
    return KC;
  } catch (CC) {
    try {
      return jy(arguments, "callee").get;
    } catch (yC) {
      return KC;
    }
  }
}() : KC;
var wC = require("./849.js")();
var HC = require("./852.js");
var aC = require("./862.js");
var cC = require("./860.js");
var UC = require("./890.js");
var EC = require("./883.js");
var VC = {};
var WC = "undefined" !== typeof Uint8Array && HC ? HC(Uint8Array) : fC;
var xC = {
  __proto__: null,
  "%AggregateError%": "undefined" === typeof AggregateError ? fC : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": "undefined" === typeof ArrayBuffer ? fC : ArrayBuffer,
  "%ArrayIteratorPrototype%": wC && HC ? HC([][Symbol.iterator]()) : fC,
  "%AsyncFromSyncIteratorPrototype%": fC,
  "%AsyncFunction%": VC,
  "%AsyncGenerator%": VC,
  "%AsyncGeneratorFunction%": VC,
  "%AsyncIteratorPrototype%": VC,
  "%Atomics%": "undefined" === typeof Atomics ? fC : Atomics,
  "%BigInt%": "undefined" === typeof BigInt ? fC : BigInt,
  "%BigInt64Array%": "undefined" === typeof BigInt64Array ? fC : BigInt64Array,
  "%BigUint64Array%": "undefined" === typeof BigUint64Array ? fC : BigUint64Array,
  "%Boolean%": Boolean,
  "%DataView%": "undefined" === typeof DataView ? fC : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": gC,
  "%eval%": eval,
  "%EvalError%": AC,
  "%Float16Array%": "undefined" === typeof Float16Array ? fC : Float16Array,
  "%Float32Array%": "undefined" === typeof Float32Array ? fC : Float32Array,
  "%Float64Array%": "undefined" === typeof Float64Array ? fC : Float64Array,
  "%FinalizationRegistry%": "undefined" === typeof FinalizationRegistry ? fC : FinalizationRegistry,
  "%Function%": NC,
  "%GeneratorFunction%": VC,
  "%Int8Array%": "undefined" === typeof Int8Array ? fC : Int8Array,
  "%Int16Array%": "undefined" === typeof Int16Array ? fC : Int16Array,
  "%Int32Array%": "undefined" === typeof Int32Array ? fC : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": wC && HC ? HC(HC([][Symbol.iterator]())) : fC,
  "%JSON%": "object" === typeof JSON ? JSON : fC,
  "%Map%": "undefined" === typeof Map ? fC : Map,
  "%MapIteratorPrototype%": "undefined" !== typeof Map && wC && HC ? HC(new Map()[Symbol.iterator]()) : fC,
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": ky,
  "%Object.getOwnPropertyDescriptor%": jy,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": "undefined" === typeof Promise ? fC : Promise,
  "%Proxy%": "undefined" === typeof Proxy ? fC : Proxy,
  "%RangeError%": my,
  "%ReferenceError%": XC,
  "%Reflect%": "undefined" === typeof Reflect ? fC : Reflect,
  "%RegExp%": RegExp,
  "%Set%": "undefined" === typeof Set ? fC : Set,
  "%SetIteratorPrototype%": "undefined" !== typeof Set && wC && HC ? HC(new Set()[Symbol.iterator]()) : fC,
  "%SharedArrayBuffer%": "undefined" === typeof SharedArrayBuffer ? fC : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": wC && HC ? HC(""[Symbol.iterator]()) : fC,
  "%Symbol%": wC ? Symbol : fC,
  "%SyntaxError%": iy,
  "%ThrowTypeError%": pC,
  "%TypedArray%": WC,
  "%TypeError%": LC,
  "%Uint8Array%": "undefined" === typeof Uint8Array ? fC : Uint8Array,
  "%Uint8ClampedArray%": "undefined" === typeof Uint8ClampedArray ? fC : Uint8ClampedArray,
  "%Uint16Array%": "undefined" === typeof Uint16Array ? fC : Uint16Array,
  "%Uint32Array%": "undefined" === typeof Uint32Array ? fC : Uint32Array,
  "%URIError%": YC,
  "%WeakMap%": "undefined" === typeof WeakMap ? fC : WeakMap,
  "%WeakRef%": "undefined" === typeof WeakRef ? fC : WeakRef,
  "%WeakSet%": "undefined" === typeof WeakSet ? fC : WeakSet,
  "%Function.prototype.call%": EC,
  "%Function.prototype.apply%": UC,
  "%Object.defineProperty%": qC,
  "%Object.getPrototypeOf%": aC,
  "%Math.abs%": bC,
  "%Math.floor%": rC,
  "%Math.max%": GC,
  "%Math.min%": eC,
  "%Math.pow%": OC,
  "%Math.round%": SC,
  "%Math.sign%": TC,
  "%Reflect.getPrototypeOf%": cC
};
if (HC) {
  try {
    null.error;
  } catch (hC) {
    var PC = HC(HC(hC));
    xC["%Error.prototype%"] = PC;
  }
}
var zC = function CC(yC) {
  var IC;
  if ("%AsyncFunction%" === yC) {
    IC = sC("async function () {}");
  } else {
    if ("%GeneratorFunction%" === yC) {
      IC = sC("function* () {}");
    } else {
      if ("%AsyncGeneratorFunction%" === yC) {
        IC = sC("async function* () {}");
      } else {
        if ("%AsyncGenerator%" === yC) {
          var fC = CC("%AsyncGeneratorFunction%");
          fC && (IC = fC.prototype);
        } else {
          if ("%AsyncIteratorPrototype%" === yC) {
            var ky = CC("%AsyncGenerator%");
            ky && HC && (IC = HC(ky.prototype));
          }
        }
      }
    }
  }
  xC[yC] = IC;
  return IC;
};
var BC = {
  __proto__: null,
  "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
  "%ArrayPrototype%": ["Array", "prototype"],
  "%ArrayProto_entries%": ["Array", "prototype", "entries"],
  "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
  "%ArrayProto_keys%": ["Array", "prototype", "keys"],
  "%ArrayProto_values%": ["Array", "prototype", "values"],
  "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
  "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
  "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
  "%BooleanPrototype%": ["Boolean", "prototype"],
  "%DataViewPrototype%": ["DataView", "prototype"],
  "%DatePrototype%": ["Date", "prototype"],
  "%ErrorPrototype%": ["Error", "prototype"],
  "%EvalErrorPrototype%": ["EvalError", "prototype"],
  "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
  "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
  "%FunctionPrototype%": ["Function", "prototype"],
  "%Generator%": ["GeneratorFunction", "prototype"],
  "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
  "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
  "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
  "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
  "%JSONParse%": ["JSON", "parse"],
  "%JSONStringify%": ["JSON", "stringify"],
  "%MapPrototype%": ["Map", "prototype"],
  "%NumberPrototype%": ["Number", "prototype"],
  "%ObjectPrototype%": ["Object", "prototype"],
  "%ObjProto_toString%": ["Object", "prototype", "toString"],
  "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
  "%PromisePrototype%": ["Promise", "prototype"],
  "%PromiseProto_then%": ["Promise", "prototype", "then"],
  "%Promise_all%": ["Promise", "all"],
  "%Promise_reject%": ["Promise", "reject"],
  "%Promise_resolve%": ["Promise", "resolve"],
  "%RangeErrorPrototype%": ["RangeError", "prototype"],
  "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
  "%RegExpPrototype%": ["RegExp", "prototype"],
  "%SetPrototype%": ["Set", "prototype"],
  "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
  "%StringPrototype%": ["String", "prototype"],
  "%SymbolPrototype%": ["Symbol", "prototype"],
  "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
  "%TypedArrayPrototype%": ["TypedArray", "prototype"],
  "%TypeErrorPrototype%": ["TypeError", "prototype"],
  "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
  "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
  "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
  "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
  "%URIErrorPrototype%": ["URIError", "prototype"],
  "%WeakMapPrototype%": ["WeakMap", "prototype"],
  "%WeakSetPrototype%": ["WeakSet", "prototype"]
};
var tC = require("./874.js");
var JC = require("./899.js");
var nC = tC.call(EC, Array.prototype.concat);
var FC = tC.call(UC, Array.prototype.splice);
var uC = tC.call(EC, String.prototype.replace);
var DC = tC.call(EC, String.prototype.slice);
var ZC = tC.call(EC, RegExp.prototype.exec);
var lC = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var oC = /\\(\\)?/g;
function vC(CC, yC) {
  var IC;
  var fC = CC;
  JC(BC, fC) && (fC = "%" + (IC = BC[fC])[0] + "%");
  if (JC(xC, fC)) {
    var ky = xC[fC];
    ky === VC && (ky = zC(fC));
    if ("undefined" === typeof ky && !yC) {
      throw new LC("intrinsic " + CC + " exists, but is not available. Please file an issue!");
    }
    return {
      alias: IC,
      name: fC,
      value: ky
    };
  }
  throw new iy("intrinsic " + CC + " does not exist!");
}
module.exports = function (CC, yC) {
  if ("string" !== typeof CC || 0 === CC.length) {
    throw new LC("intrinsic name must be a non-empty string");
  }
  if (arguments.length > 1 && "boolean" !== typeof yC) {
    throw new LC('"allowMissing" argument must be a boolean');
  }
  if (null === ZC(/^%?[^%]*%?$/, CC)) {
    throw new iy("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  }
  var IC = function (CC) {
    var yC = DC(CC, 0, 1);
    var IC = DC(CC, -1);
    if ("%" === yC && "%" !== IC) {
      throw new iy("invalid intrinsic syntax, expected closing `%`");
    }
    if ("%" === IC && "%" !== yC) {
      throw new iy("invalid intrinsic syntax, expected opening `%`");
    }
    var fC = [];
    uC(CC, lC, function (CC, yC, IC, ky) {
      fC[fC.length] = IC ? uC(ky, oC, "$1") : yC || CC;
    });
    return fC;
  }(CC);
  var fC = IC.length > 0 ? IC[0] : "";
  var ky = vC("%" + fC + "%", yC);
  var gC = ky.name;
  var AC = ky.value;
  var my = !1;
  var XC = ky.alias;
  XC && (fC = XC[0], FC(IC, nC([0, 1], XC)));
  for (var YC = 1, bC = !0; YC < IC.length; YC += 1) {
    var rC = IC[YC];
    var GC = DC(rC, 0, 1);
    var eC = DC(rC, -1);
    if (('"' === GC || "'" === GC || "`" === GC || '"' === eC || "'" === eC || "`" === eC) && GC !== eC) {
      throw new iy("property names with quotes must have matching quotes");
    }
    "constructor" !== rC && bC || (my = !0);
    if (JC(xC, gC = "%" + (fC += "." + rC) + "%")) {
      AC = xC[gC];
    } else {
      if (null != AC) {
        if (!(rC in AC)) {
          if (!yC) {
            throw new LC("base intrinsic for " + CC + " exists, but the property is not available.");
          }
          return;
        }
        if (jy && YC + 1 >= IC.length) {
          var OC = jy(AC, rC);
          AC = (bC = !!OC) && "get" in OC && !("originalValue" in OC.get) ? OC.get : AC[rC];
        } else {
          bC = JC(AC, rC);
          AC = AC[rC];
        }
        bC && !my && (xC[gC] = AC);
      }
    }
  }
  return AC;
};