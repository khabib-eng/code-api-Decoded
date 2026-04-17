var fC = require("./710.js");
var ky = require("./939.js");
var gC = require("./941.js");
var AC = require("./956.js");
function my(CC) {
  return CC.call.bind(CC);
}
var XC = "undefined" !== typeof BigInt;
var iy = "undefined" !== typeof Symbol;
var LC = my(Object.prototype.toString);
var YC = my(Number.prototype.valueOf);
var bC = my(String.prototype.valueOf);
var rC = my(Boolean.prototype.valueOf);
if (XC) {
  var GC = my(BigInt.prototype.valueOf);
}
if (iy) {
  var eC = my(Symbol.prototype.valueOf);
}
function OC(CC, yC) {
  if ("object" !== typeof CC) {
    return !1;
  }
  try {
    yC(CC);
    return !0;
  } catch (IC) {
    return !1;
  }
}
function SC(CC) {
  return "[object Map]" === LC(CC);
}
function TC(CC) {
  return "[object Set]" === LC(CC);
}
function NC(CC) {
  return "[object WeakMap]" === LC(CC);
}
function sC(CC) {
  return "[object WeakSet]" === LC(CC);
}
function jy(CC) {
  return "[object ArrayBuffer]" === LC(CC);
}
function qC(CC) {
  return "undefined" !== typeof ArrayBuffer && (jy.working ? jy(CC) : CC instanceof ArrayBuffer);
}
function KC(CC) {
  return "[object DataView]" === LC(CC);
}
function pC(CC) {
  return "undefined" !== typeof DataView && (KC.working ? KC(CC) : CC instanceof DataView);
}
exports.isArgumentsObject = fC;
exports.isGeneratorFunction = ky;
exports.isTypedArray = AC;
exports.isPromise = function (CC) {
  return "undefined" !== typeof Promise && CC instanceof Promise || null !== CC && "object" === typeof CC && "function" === typeof CC.then && "function" === typeof CC.catch;
};
exports.isArrayBufferView = function (CC) {
  return "undefined" !== typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(CC) : AC(CC) || pC(CC);
};
exports.isUint8Array = function (CC) {
  return "Uint8Array" === gC(CC);
};
exports.isUint8ClampedArray = function (CC) {
  return "Uint8ClampedArray" === gC(CC);
};
exports.isUint16Array = function (CC) {
  return "Uint16Array" === gC(CC);
};
exports.isUint32Array = function (CC) {
  return "Uint32Array" === gC(CC);
};
exports.isInt8Array = function (CC) {
  return "Int8Array" === gC(CC);
};
exports.isInt16Array = function (CC) {
  return "Int16Array" === gC(CC);
};
exports.isInt32Array = function (CC) {
  return "Int32Array" === gC(CC);
};
exports.isFloat32Array = function (CC) {
  return "Float32Array" === gC(CC);
};
exports.isFloat64Array = function (CC) {
  return "Float64Array" === gC(CC);
};
exports.isBigInt64Array = function (CC) {
  return "BigInt64Array" === gC(CC);
};
exports.isBigUint64Array = function (CC) {
  return "BigUint64Array" === gC(CC);
};
SC.working = "undefined" !== typeof Map && SC(new Map());
exports.isMap = function (CC) {
  return "undefined" !== typeof Map && (SC.working ? SC(CC) : CC instanceof Map);
};
TC.working = "undefined" !== typeof Set && TC(new Set());
exports.isSet = function (CC) {
  return "undefined" !== typeof Set && (TC.working ? TC(CC) : CC instanceof Set);
};
NC.working = "undefined" !== typeof WeakMap && NC(new WeakMap());
exports.isWeakMap = function (CC) {
  return "undefined" !== typeof WeakMap && (NC.working ? NC(CC) : CC instanceof WeakMap);
};
sC.working = "undefined" !== typeof WeakSet && sC(new WeakSet());
exports.isWeakSet = function (CC) {
  return sC(CC);
};
jy.working = "undefined" !== typeof ArrayBuffer && jy(new ArrayBuffer());
exports.isArrayBuffer = qC;
KC.working = "undefined" !== typeof ArrayBuffer && "undefined" !== typeof DataView && KC(new DataView(new ArrayBuffer(1), 0, 1));
exports.isDataView = pC;
var wC = "undefined" !== typeof SharedArrayBuffer ? SharedArrayBuffer : void 0;
function HC(CC) {
  return "[object SharedArrayBuffer]" === LC(CC);
}
function aC(CC) {
  return "undefined" !== typeof wC && ("undefined" === typeof HC.working && (HC.working = HC(new wC())), HC.working ? HC(CC) : CC instanceof wC);
}
function cC(CC) {
  return OC(CC, YC);
}
function UC(CC) {
  return OC(CC, bC);
}
function EC(CC) {
  return OC(CC, rC);
}
function VC(CC) {
  return XC && OC(CC, GC);
}
function WC(CC) {
  return iy && OC(CC, eC);
}
exports.isSharedArrayBuffer = aC;
exports.isAsyncFunction = function (CC) {
  return "[object AsyncFunction]" === LC(CC);
};
exports.isMapIterator = function (CC) {
  return "[object Map Iterator]" === LC(CC);
};
exports.isSetIterator = function (CC) {
  return "[object Set Iterator]" === LC(CC);
};
exports.isGeneratorObject = function (CC) {
  return "[object Generator]" === LC(CC);
};
exports.isWebAssemblyCompiledModule = function (CC) {
  return "[object WebAssembly.Module]" === LC(CC);
};
exports.isNumberObject = cC;
exports.isStringObject = UC;
exports.isBooleanObject = EC;
exports.isBigIntObject = VC;
exports.isSymbolObject = WC;
exports.isBoxedPrimitive = function (CC) {
  return cC(CC) || UC(CC) || EC(CC) || VC(CC) || WC(CC);
};
exports.isAnyArrayBuffer = function (CC) {
  return "undefined" !== typeof Uint8Array && (qC(CC) || aC(CC));
};
["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(function (CC) {
  Object.defineProperty(exports, CC, {
    enumerable: !1,
    value: function () {
      throw new Error(CC + " is not supported in userland");
    }
  });
});