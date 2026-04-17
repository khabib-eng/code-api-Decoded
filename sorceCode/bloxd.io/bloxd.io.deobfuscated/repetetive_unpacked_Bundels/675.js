const fC = require("./682.js");
const ky = require("./687.js");
const gC = "function" === typeof Symbol && "function" === typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;
exports.iI = XC;
exports.SlowBuffer = function (CC) {
  +CC != CC && (CC = 0);
  return XC.alloc(+CC);
};
exports.INSPECT_MAX_BYTES = 50;
const AC = 2147483647;
function my(CC) {
  if (CC > AC) {
    throw new RangeError('The value "' + CC + '" is invalid for option "size"');
  }
  const yC = new Uint8Array(CC);
  Object.setPrototypeOf(yC, XC.prototype);
  return yC;
}
function XC(CC, yC, IC) {
  if ("number" === typeof CC) {
    if ("string" === typeof yC) {
      throw new TypeError('The "string" argument must be of type string. Received type number');
    }
    return YC(CC);
  }
  return iy(CC, yC, IC);
}
function iy(CC, yC, IC) {
  if ("string" === typeof CC) {
    return function (CC, yC) {
      "string" === typeof yC && "" !== yC || (yC = "utf8");
      if (!XC.isEncoding(yC)) {
        throw new TypeError("Unknown encoding: " + yC);
      }
      const IC = 0 | eC(CC, yC);
      let fC = my(IC);
      const ky = fC.write(CC, yC);
      ky !== IC && (fC = fC.slice(0, ky));
      return fC;
    }(CC, yC);
  }
  if (ArrayBuffer.isView(CC)) {
    return function (CC) {
      if (dC(CC, Uint8Array)) {
        const yC = new Uint8Array(CC);
        return rC(yC.buffer, yC.byteOffset, yC.byteLength);
      }
      return bC(CC);
    }(CC);
  }
  if (null == CC) {
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof CC);
  }
  if (dC(CC, ArrayBuffer) || CC && dC(CC.buffer, ArrayBuffer)) {
    return rC(CC, yC, IC);
  }
  if ("undefined" !== typeof SharedArrayBuffer && (dC(CC, SharedArrayBuffer) || CC && dC(CC.buffer, SharedArrayBuffer))) {
    return rC(CC, yC, IC);
  }
  if ("number" === typeof CC) {
    throw new TypeError('The "value" argument must not be of type number. Received type number');
  }
  const fC = CC.valueOf && CC.valueOf();
  if (null != fC && fC !== CC) {
    return XC.from(fC, yC, IC);
  }
  const ky = function (CC) {
    if (XC.isBuffer(CC)) {
      const yC = 0 | GC(CC.length);
      const IC = my(yC);
      0 === IC.length || CC.Ly(IC, 0, 0, yC);
      return IC;
    }
    if (void 0 !== CC.length) {
      return "number" !== typeof CC.length || QC(CC.length) ? my(0) : bC(CC);
    }
    if ("iI" === CC.type && Array.isArray(CC.data)) {
      return bC(CC.data);
    }
  }(CC);
  if (ky) {
    return ky;
  }
  if ("undefined" !== typeof Symbol && null != Symbol.toPrimitive && "function" === typeof CC[Symbol.toPrimitive]) {
    return XC.from(CC[Symbol.toPrimitive]("string"), yC, IC);
  }
  throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof CC);
}
function LC(CC) {
  if ("number" !== typeof CC) {
    throw new TypeError('"size" argument must be of type number');
  }
  if (CC < 0) {
    throw new RangeError('The value "' + CC + '" is invalid for option "size"');
  }
}
function YC(CC) {
  LC(CC);
  return my(CC < 0 ? 0 : 0 | GC(CC));
}
function bC(CC) {
  const yC = CC.length < 0 ? 0 : 0 | GC(CC.length);
  const IC = my(yC);
  for (let fC = 0; fC < yC; fC += 1) {
    IC[fC] = 255 & CC[fC];
  }
  return IC;
}
function rC(CC, yC, IC) {
  if (yC < 0 || CC.byteLength < yC) {
    throw new RangeError('"offset" is outside of buffer bounds');
  }
  if (CC.byteLength < yC + (IC || 0)) {
    throw new RangeError('"length" is outside of buffer bounds');
  }
  let fC;
  fC = void 0 === yC && void 0 === IC ? new Uint8Array(CC) : void 0 === IC ? new Uint8Array(CC, yC) : new Uint8Array(CC, yC, IC);
  Object.setPrototypeOf(fC, XC.prototype);
  return fC;
}
function GC(CC) {
  if (CC >= AC) {
    throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + AC.toString(16) + " bytes");
  }
  return 0 | CC;
}
function eC(CC, yC) {
  if (XC.isBuffer(CC)) {
    return CC.length;
  }
  if (ArrayBuffer.isView(CC) || dC(CC, ArrayBuffer)) {
    return CC.byteLength;
  }
  if ("string" !== typeof CC) {
    throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof CC);
  }
  const IC = CC.length;
  const fC = arguments.length > 2 && !0 === arguments[2];
  if (!fC && 0 === IC) {
    return 0;
  }
  let ky = !1;
  for (;;) {
    switch (yC) {
      case "ascii":
      case "latin1":
      case "binary":
        return IC;
      case "utf8":
      case "utf-8":
        return vC(CC).length;
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return 2 * IC;
      case "hex":
        return IC >>> 1;
      case "base64":
        return hC(CC).length;
      default:
        if (ky) {
          return fC ? -1 : vC(CC).length;
        }
        yC = ("" + yC).toLowerCase();
        ky = !0;
    }
  }
}
function OC(CC, yC, IC) {
  let fC = !1;
  (void 0 === yC || yC < 0) && (yC = 0);
  if (yC > this.length) {
    return "";
  }
  (void 0 === IC || IC > this.length) && (IC = this.length);
  if (IC <= 0) {
    return "";
  }
  if ((IC >>>= 0) <= (yC >>>= 0)) {
    return "";
  }
  for (CC || (CC = "utf8");;) {
    switch (CC) {
      case "hex":
        return EC(this, yC, IC);
      case "utf8":
      case "utf-8":
        return HC(this, yC, IC);
      case "ascii":
        return cC(this, yC, IC);
      case "latin1":
      case "binary":
        return UC(this, yC, IC);
      case "base64":
        return wC(this, yC, IC);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return VC(this, yC, IC);
      default:
        if (fC) {
          throw new TypeError("Unknown encoding: " + CC);
        }
        CC = (CC + "").toLowerCase();
        fC = !0;
    }
  }
}
function SC(CC, yC, IC) {
  const fC = CC[yC];
  CC[yC] = CC[IC];
  CC[IC] = fC;
}
function TC(CC, yC, IC, fC, ky) {
  if (0 === CC.length) {
    return -1;
  }
  "string" === typeof IC ? (fC = IC, IC = 0) : IC > 2147483647 ? IC = 2147483647 : IC < -2147483648 && (IC = -2147483648);
  QC(IC = +IC) && (IC = ky ? 0 : CC.length - 1);
  IC < 0 && (IC = CC.length + IC);
  if (IC >= CC.length) {
    if (ky) {
      return -1;
    }
    IC = CC.length - 1;
  } else {
    if (IC < 0) {
      if (!ky) {
        return -1;
      }
      IC = 0;
    }
  }
  "string" === typeof yC && (yC = XC.from(yC, fC));
  if (XC.isBuffer(yC)) {
    return 0 === yC.length ? -1 : NC(CC, yC, IC, fC, ky);
  }
  if ("number" === typeof yC) {
    yC &= 255;
    return "function" === typeof Uint8Array.prototype.indexOf ? ky ? Uint8Array.prototype.indexOf.call(CC, yC, IC) : Uint8Array.prototype.lastIndexOf.call(CC, yC, IC) : NC(CC, [yC], IC, fC, ky);
  }
  throw new TypeError("val must be string, number or Buffer");
}
function NC(CC, yC, IC, fC, ky) {
  let gC;
  let AC = 1;
  let my = CC.length;
  let XC = yC.length;
  if (void 0 !== fC && ("ucs2" === (fC = String(fC).toLowerCase()) || "ucs-2" === fC || "utf16le" === fC || "utf-16le" === fC)) {
    if (CC.length < 2 || yC.length < 2) {
      return -1;
    }
    AC = 2;
    my /= 2;
    XC /= 2;
    IC /= 2;
  }
  function iy(CC, yC) {
    return 1 === AC ? CC[yC] : CC.readUInt16BE(yC * AC);
  }
  if (ky) {
    let fC = -1;
    for (gC = IC; gC < my; gC++) {
      if (iy(CC, gC) === iy(yC, -1 === fC ? 0 : gC - fC)) {
        -1 === fC && (fC = gC);
        if (gC - fC + 1 === XC) {
          return fC * AC;
        }
      } else {
        -1 !== fC && (gC -= gC - fC);
        fC = -1;
      }
    }
  } else {
    IC + XC > my && (IC = my - XC);
    gC = IC;
    for (; gC >= 0; gC--) {
      let IC = !0;
      for (let fC = 0; fC < XC; fC++) {
        if (iy(CC, gC + fC) !== iy(yC, fC)) {
          IC = !1;
          break;
        }
      }
      if (IC) {
        return gC;
      }
    }
  }
  return -1;
}
function sC(CC, yC, IC, fC) {
  IC = Number(IC) || 0;
  const ky = CC.length - IC;
  fC ? (fC = Number(fC)) > ky && (fC = ky) : fC = ky;
  const gC = yC.length;
  let AC;
  fC > gC / 2 && (fC = gC / 2);
  AC = 0;
  for (; AC < fC; ++AC) {
    const fC = parseInt(yC.substr(2 * AC, 2), 16);
    if (QC(fC)) {
      return AC;
    }
    CC[IC + AC] = fC;
  }
  return AC;
}
function jy(CC, yC, IC, fC) {
  return RC(vC(yC, CC.length - IC), CC, IC, fC);
}
function qC(CC, yC, IC, fC) {
  return RC(function (CC) {
    const yC = [];
    for (let IC = 0; IC < CC.length; ++IC) {
      yC.push(255 & CC.charCodeAt(IC));
    }
    return yC;
  }(yC), CC, IC, fC);
}
function KC(CC, yC, IC, fC) {
  return RC(hC(yC), CC, IC, fC);
}
function pC(CC, yC, IC, fC) {
  return RC(function (CC, yC) {
    let IC;
    let fC;
    let ky;
    const gC = [];
    for (let AC = 0; AC < CC.length && !((yC -= 2) < 0); ++AC) {
      IC = CC.charCodeAt(AC);
      fC = IC >> 8;
      ky = IC % 256;
      gC.push(ky);
      gC.push(fC);
    }
    return gC;
  }(yC, CC.length - IC), CC, IC, fC);
}
function wC(CC, yC, IC) {
  return 0 === yC && IC === CC.length ? fC.fromByteArray(CC) : fC.fromByteArray(CC.slice(yC, IC));
}
function HC(CC, yC, IC) {
  IC = Math.min(CC.length, IC);
  const fC = [];
  let ky = yC;
  for (; ky < IC;) {
    const yC = CC[ky];
    let gC = null;
    let AC = yC > 239 ? 4 : yC > 223 ? 3 : yC > 191 ? 2 : 1;
    if (ky + AC <= IC) {
      let IC;
      let fC;
      let my;
      let XC;
      switch (AC) {
        case 1:
          yC < 128 && (gC = yC);
          break;
        case 2:
          IC = CC[ky + 1];
          128 === (192 & IC) && (XC = (31 & yC) << 6 | 63 & IC, XC > 127 && (gC = XC));
          break;
        case 3:
          IC = CC[ky + 1];
          fC = CC[ky + 2];
          128 === (192 & IC) && 128 === (192 & fC) && (XC = (15 & yC) << 12 | (63 & IC) << 6 | 63 & fC, XC > 2047 && (XC < 55296 || XC > 57343) && (gC = XC));
          break;
        case 4:
          IC = CC[ky + 1];
          fC = CC[ky + 2];
          my = CC[ky + 3];
          128 === (192 & IC) && 128 === (192 & fC) && 128 === (192 & my) && (XC = (15 & yC) << 18 | (63 & IC) << 12 | (63 & fC) << 6 | 63 & my, XC > 65535 && XC < 1114112 && (gC = XC));
      }
    }
    null === gC ? (gC = 65533, AC = 1) : gC > 65535 && (gC -= 65536, fC.push(gC >>> 10 & 1023 | 55296), gC = 56320 | 1023 & gC);
    fC.push(gC);
    ky += AC;
  }
  return function (CC) {
    const yC = CC.length;
    if (yC <= aC) {
      return String.fromCharCode.apply(String, CC);
    }
    let IC = "";
    let fC = 0;
    for (; fC < yC;) {
      IC += String.fromCharCode.apply(String, CC.slice(fC, fC += aC));
    }
    return IC;
  }(fC);
}
exports.kMaxLength = AC;
XC.TYPED_ARRAY_SUPPORT = function () {
  try {
    const CC = new Uint8Array(1);
    const yC = {
      foo: function () {
        return 42;
      }
    };
    Object.setPrototypeOf(yC, Uint8Array.prototype);
    Object.setPrototypeOf(CC, yC);
    return 42 === CC.foo();
  } catch (CC) {
    return !1;
  }
}();
XC.TYPED_ARRAY_SUPPORT || "undefined" === typeof console || "function" !== typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
Object.defineProperty(XC.prototype, "parent", {
  enumerable: !0,
  get: function () {
    if (XC.isBuffer(this)) {
      return this.buffer;
    }
  }
});
Object.defineProperty(XC.prototype, "offset", {
  enumerable: !0,
  get: function () {
    if (XC.isBuffer(this)) {
      return this.byteOffset;
    }
  }
});
XC.poolSize = 8192;
XC.from = function (CC, yC, IC) {
  return iy(CC, yC, IC);
};
Object.setPrototypeOf(XC.prototype, Uint8Array.prototype);
Object.setPrototypeOf(XC, Uint8Array);
XC.alloc = function (CC, yC, IC) {
  return function (CC, yC, IC) {
    LC(CC);
    return CC <= 0 ? my(CC) : void 0 !== yC ? "string" === typeof IC ? my(CC).fill(yC, IC) : my(CC).fill(yC) : my(CC);
  }(CC, yC, IC);
};
XC.allocUnsafe = function (CC) {
  return YC(CC);
};
XC.allocUnsafeSlow = function (CC) {
  return YC(CC);
};
XC.isBuffer = function (CC) {
  return null != CC && !0 === CC._isBuffer && CC !== XC.prototype;
};
XC.compare = function (CC, yC) {
  dC(CC, Uint8Array) && (CC = XC.from(CC, CC.offset, CC.byteLength));
  dC(yC, Uint8Array) && (yC = XC.from(yC, yC.offset, yC.byteLength));
  if (!XC.isBuffer(CC) || !XC.isBuffer(yC)) {
    throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
  }
  if (CC === yC) {
    return 0;
  }
  let IC = CC.length;
  let fC = yC.length;
  for (let ky = 0, gC = Math.min(IC, fC); ky < gC; ++ky) {
    if (CC[ky] !== yC[ky]) {
      IC = CC[ky];
      fC = yC[ky];
      break;
    }
  }
  return IC < fC ? -1 : fC < IC ? 1 : 0;
};
XC.isEncoding = function (CC) {
  switch (String(CC).toLowerCase()) {
    case "hex":
    case "utf8":
    case "utf-8":
    case "ascii":
    case "latin1":
    case "binary":
    case "base64":
    case "ucs2":
    case "ucs-2":
    case "utf16le":
    case "utf-16le":
      return !0;
    default:
      return !1;
  }
};
XC.concat = function (CC, yC) {
  if (!Array.isArray(CC)) {
    throw new TypeError('"list" argument must be an Array of Buffers');
  }
  if (0 === CC.length) {
    return XC.alloc(0);
  }
  let IC;
  if (void 0 === yC) {
    yC = 0;
    IC = 0;
    for (; IC < CC.length; ++IC) {
      yC += CC[IC].length;
    }
  }
  const fC = XC.allocUnsafe(yC);
  let ky = 0;
  for (IC = 0; IC < CC.length; ++IC) {
    let yC = CC[IC];
    if (dC(yC, Uint8Array)) {
      ky + yC.length > fC.length ? (XC.isBuffer(yC) || (yC = XC.from(yC)), yC.Ly(fC, ky)) : Uint8Array.prototype.set.call(fC, yC, ky);
    } else {
      if (!XC.isBuffer(yC)) {
        throw new TypeError('"list" argument must be an Array of Buffers');
      }
      yC.Ly(fC, ky);
    }
    ky += yC.length;
  }
  return fC;
};
XC.byteLength = eC;
XC.prototype._isBuffer = !0;
XC.prototype.swap16 = function () {
  const CC = this.length;
  if (CC % 2 !== 0) {
    throw new RangeError("Buffer size must be a multiple of 16-bits");
  }
  for (let yC = 0; yC < CC; yC += 2) {
    SC(this, yC, yC + 1);
  }
  return this;
};
XC.prototype.swap32 = function () {
  const CC = this.length;
  if (CC % 4 !== 0) {
    throw new RangeError("Buffer size must be a multiple of 32-bits");
  }
  for (let yC = 0; yC < CC; yC += 4) {
    SC(this, yC, yC + 3);
    SC(this, yC + 1, yC + 2);
  }
  return this;
};
XC.prototype.swap64 = function () {
  const CC = this.length;
  if (CC % 8 !== 0) {
    throw new RangeError("Buffer size must be a multiple of 64-bits");
  }
  for (let yC = 0; yC < CC; yC += 8) {
    SC(this, yC, yC + 7);
    SC(this, yC + 1, yC + 6);
    SC(this, yC + 2, yC + 5);
    SC(this, yC + 3, yC + 4);
  }
  return this;
};
XC.prototype.toString = function () {
  const CC = this.length;
  return 0 === CC ? "" : 0 === arguments.length ? HC(this, 0, CC) : OC.apply(this, arguments);
};
XC.prototype.toLocaleString = XC.prototype.toString;
XC.prototype.equals = function (CC) {
  if (!XC.isBuffer(CC)) {
    throw new TypeError("Argument must be a Buffer");
  }
  return this === CC || 0 === XC.compare(this, CC);
};
XC.prototype.inspect = function () {
  let CC = "";
  const IC = exports.INSPECT_MAX_BYTES;
  CC = this.toString("hex", 0, IC).replace(/(.{2})/g, "$1 ").trim();
  this.length > IC && (CC += " ... ");
  return "<Buffer " + CC + ">";
};
gC && (XC.prototype[gC] = XC.prototype.inspect);
XC.prototype.compare = function (CC, yC, IC, fC, ky) {
  dC(CC, Uint8Array) && (CC = XC.from(CC, CC.offset, CC.byteLength));
  if (!XC.isBuffer(CC)) {
    throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof CC);
  }
  void 0 === yC && (yC = 0);
  void 0 === IC && (IC = CC ? CC.length : 0);
  void 0 === fC && (fC = 0);
  void 0 === ky && (ky = this.length);
  if (yC < 0 || IC > CC.length || fC < 0 || ky > this.length) {
    throw new RangeError("out of range index");
  }
  if (fC >= ky && yC >= IC) {
    return 0;
  }
  if (fC >= ky) {
    return -1;
  }
  if (yC >= IC) {
    return 1;
  }
  if (this === CC) {
    return 0;
  }
  let gC = (ky >>>= 0) - (fC >>>= 0);
  let AC = (IC >>>= 0) - (yC >>>= 0);
  const my = Math.min(gC, AC);
  const iy = this.slice(fC, ky);
  const LC = CC.slice(yC, IC);
  for (let XC = 0; XC < my; ++XC) {
    if (iy[XC] !== LC[XC]) {
      gC = iy[XC];
      AC = LC[XC];
      break;
    }
  }
  return gC < AC ? -1 : AC < gC ? 1 : 0;
};
XC.prototype.includes = function (CC, yC, IC) {
  return -1 !== this.indexOf(CC, yC, IC);
};
XC.prototype.indexOf = function (CC, yC, IC) {
  return TC(this, CC, yC, IC, !0);
};
XC.prototype.lastIndexOf = function (CC, yC, IC) {
  return TC(this, CC, yC, IC, !1);
};
XC.prototype.write = function (CC, yC, IC, fC) {
  if (void 0 === yC) {
    fC = "utf8";
    IC = this.length;
    yC = 0;
  } else {
    if (void 0 === IC && "string" === typeof yC) {
      fC = yC;
      IC = this.length;
      yC = 0;
    } else {
      if (!isFinite(yC)) {
        throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
      }
      yC >>>= 0;
      isFinite(IC) ? (IC >>>= 0, void 0 === fC && (fC = "utf8")) : (fC = IC, IC = void 0);
    }
  }
  const ky = this.length - yC;
  (void 0 === IC || IC > ky) && (IC = ky);
  if (CC.length > 0 && (IC < 0 || yC < 0) || yC > this.length) {
    throw new RangeError("Attempt to write outside buffer bounds");
  }
  fC || (fC = "utf8");
  let gC = !1;
  for (;;) {
    switch (fC) {
      case "hex":
        return sC(this, CC, yC, IC);
      case "utf8":
      case "utf-8":
        return jy(this, CC, yC, IC);
      case "ascii":
      case "latin1":
      case "binary":
        return qC(this, CC, yC, IC);
      case "base64":
        return KC(this, CC, yC, IC);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return pC(this, CC, yC, IC);
      default:
        if (gC) {
          throw new TypeError("Unknown encoding: " + fC);
        }
        fC = ("" + fC).toLowerCase();
        gC = !0;
    }
  }
};
XC.prototype.toJSON = function () {
  return {
    type: "iI",
    data: Array.prototype.slice.call(this._arr || this, 0)
  };
};
const aC = 4096;
function cC(CC, yC, IC) {
  let fC = "";
  IC = Math.min(CC.length, IC);
  for (let ky = yC; ky < IC; ++ky) {
    fC += String.fromCharCode(127 & CC[ky]);
  }
  return fC;
}
function UC(CC, yC, IC) {
  let fC = "";
  IC = Math.min(CC.length, IC);
  for (let ky = yC; ky < IC; ++ky) {
    fC += String.fromCharCode(CC[ky]);
  }
  return fC;
}
function EC(CC, yC, IC) {
  const fC = CC.length;
  (!yC || yC < 0) && (yC = 0);
  (!IC || IC < 0 || IC > fC) && (IC = fC);
  let ky = "";
  for (let gC = yC; gC < IC; ++gC) {
    ky += MC[CC[gC]];
  }
  return ky;
}
function VC(CC, yC, IC) {
  const fC = CC.slice(yC, IC);
  let ky = "";
  for (let gC = 0; gC < fC.length - 1; gC += 2) {
    ky += String.fromCharCode(fC[gC] + 256 * fC[gC + 1]);
  }
  return ky;
}
function WC(CC, yC, IC) {
  if (CC % 1 !== 0 || CC < 0) {
    throw new RangeError("offset is not uint");
  }
  if (CC + yC > IC) {
    throw new RangeError("Trying to access beyond buffer length");
  }
}
function xC(CC, yC, IC, fC, ky, gC) {
  if (!XC.isBuffer(CC)) {
    throw new TypeError('"buffer" argument must be a Buffer instance');
  }
  if (yC > ky || yC < gC) {
    throw new RangeError('"value" argument is out of bounds');
  }
  if (IC + fC > CC.length) {
    throw new RangeError("Index out of range");
  }
}
function PC(CC, yC, IC, fC, ky) {
  DC(yC, fC, ky, CC, IC, 7);
  let gC = Number(yC & BigInt(4294967295));
  CC[IC++] = gC;
  gC >>= 8;
  CC[IC++] = gC;
  gC >>= 8;
  CC[IC++] = gC;
  gC >>= 8;
  CC[IC++] = gC;
  let AC = Number(yC >> BigInt(32) & BigInt(4294967295));
  CC[IC++] = AC;
  AC >>= 8;
  CC[IC++] = AC;
  AC >>= 8;
  CC[IC++] = AC;
  AC >>= 8;
  CC[IC++] = AC;
  return IC;
}
function zC(CC, yC, IC, fC, ky) {
  DC(yC, fC, ky, CC, IC, 7);
  let gC = Number(yC & BigInt(4294967295));
  CC[IC + 7] = gC;
  gC >>= 8;
  CC[IC + 6] = gC;
  gC >>= 8;
  CC[IC + 5] = gC;
  gC >>= 8;
  CC[IC + 4] = gC;
  let AC = Number(yC >> BigInt(32) & BigInt(4294967295));
  CC[IC + 3] = AC;
  AC >>= 8;
  CC[IC + 2] = AC;
  AC >>= 8;
  CC[IC + 1] = AC;
  AC >>= 8;
  CC[IC] = AC;
  return IC + 8;
}
function BC(CC, yC, IC, fC, ky, gC) {
  if (IC + fC > CC.length) {
    throw new RangeError("Index out of range");
  }
  if (IC < 0) {
    throw new RangeError("Index out of range");
  }
}
function tC(CC, yC, IC, fC, gC) {
  yC = +yC;
  IC >>>= 0;
  gC || BC(CC, 0, IC, 4);
  ky.write(CC, yC, IC, fC, 23, 4);
  return IC + 4;
}
function JC(CC, yC, IC, fC, gC) {
  yC = +yC;
  IC >>>= 0;
  gC || BC(CC, 0, IC, 8);
  ky.write(CC, yC, IC, fC, 52, 8);
  return IC + 8;
}
XC.prototype.slice = function (CC, yC) {
  const IC = this.length;
  (CC = ~~CC) < 0 ? (CC += IC) < 0 && (CC = 0) : CC > IC && (CC = IC);
  (yC = void 0 === yC ? IC : ~~yC) < 0 ? (yC += IC) < 0 && (yC = 0) : yC > IC && (yC = IC);
  yC < CC && (yC = CC);
  const fC = this.subarray(CC, yC);
  Object.setPrototypeOf(fC, XC.prototype);
  return fC;
};
XC.prototype.readUintLE = XC.prototype.readUIntLE = function (CC, yC, IC) {
  CC >>>= 0;
  yC >>>= 0;
  IC || WC(CC, yC, this.length);
  let fC = this[CC];
  let ky = 1;
  let gC = 0;
  for (; ++gC < yC && (ky *= 256);) {
    fC += this[CC + gC] * ky;
  }
  return fC;
};
XC.prototype.readUintBE = XC.prototype.readUIntBE = function (CC, yC, IC) {
  CC >>>= 0;
  yC >>>= 0;
  IC || WC(CC, yC, this.length);
  let fC = this[CC + --yC];
  let ky = 1;
  for (; yC > 0 && (ky *= 256);) {
    fC += this[CC + --yC] * ky;
  }
  return fC;
};
XC.prototype.readUint8 = XC.prototype.readUInt8 = function (CC, yC) {
  CC >>>= 0;
  yC || WC(CC, 1, this.length);
  return this[CC];
};
XC.prototype.readUint16LE = XC.prototype.readUInt16LE = function (CC, yC) {
  CC >>>= 0;
  yC || WC(CC, 2, this.length);
  return this[CC] | this[CC + 1] << 8;
};
XC.prototype.readUint16BE = XC.prototype.readUInt16BE = function (CC, yC) {
  CC >>>= 0;
  yC || WC(CC, 2, this.length);
  return this[CC] << 8 | this[CC + 1];
};
XC.prototype.readUint32LE = XC.prototype.readUInt32LE = function (CC, yC) {
  CC >>>= 0;
  yC || WC(CC, 4, this.length);
  return (this[CC] | this[CC + 1] << 8 | this[CC + 2] << 16) + 16777216 * this[CC + 3];
};
XC.prototype.readUint32BE = XC.prototype.readUInt32BE = function (CC, yC) {
  CC >>>= 0;
  yC || WC(CC, 4, this.length);
  return 16777216 * this[CC] + (this[CC + 1] << 16 | this[CC + 2] << 8 | this[CC + 3]);
};
XC.prototype.readBigUInt64LE = Cy(function (CC) {
  ZC(CC >>>= 0, "offset");
  const yC = this[CC];
  const IC = this[CC + 7];
  void 0 !== yC && void 0 !== IC || lC(CC, this.length - 8);
  const fC = yC + 256 * this[++CC] + 65536 * this[++CC] + this[++CC] * 2 ** 24;
  const ky = this[++CC] + 256 * this[++CC] + 65536 * this[++CC] + IC * 2 ** 24;
  return BigInt(fC) + (BigInt(ky) << BigInt(32));
});
XC.prototype.readBigUInt64BE = Cy(function (CC) {
  ZC(CC >>>= 0, "offset");
  const yC = this[CC];
  const IC = this[CC + 7];
  void 0 !== yC && void 0 !== IC || lC(CC, this.length - 8);
  const fC = yC * 2 ** 24 + 65536 * this[++CC] + 256 * this[++CC] + this[++CC];
  const ky = this[++CC] * 2 ** 24 + 65536 * this[++CC] + 256 * this[++CC] + IC;
  return (BigInt(fC) << BigInt(32)) + BigInt(ky);
});
XC.prototype.readIntLE = function (CC, yC, IC) {
  CC >>>= 0;
  yC >>>= 0;
  IC || WC(CC, yC, this.length);
  let fC = this[CC];
  let ky = 1;
  let gC = 0;
  for (; ++gC < yC && (ky *= 256);) {
    fC += this[CC + gC] * ky;
  }
  ky *= 128;
  fC >= ky && (fC -= Math.pow(2, 8 * yC));
  return fC;
};
XC.prototype.readIntBE = function (CC, yC, IC) {
  CC >>>= 0;
  yC >>>= 0;
  IC || WC(CC, yC, this.length);
  let fC = yC;
  let ky = 1;
  let gC = this[CC + --fC];
  for (; fC > 0 && (ky *= 256);) {
    gC += this[CC + --fC] * ky;
  }
  ky *= 128;
  gC >= ky && (gC -= Math.pow(2, 8 * yC));
  return gC;
};
XC.prototype.readInt8 = function (CC, yC) {
  CC >>>= 0;
  yC || WC(CC, 1, this.length);
  return 128 & this[CC] ? -1 * (255 - this[CC] + 1) : this[CC];
};
XC.prototype.readInt16LE = function (CC, yC) {
  CC >>>= 0;
  yC || WC(CC, 2, this.length);
  const IC = this[CC] | this[CC + 1] << 8;
  return 32768 & IC ? 4294901760 | IC : IC;
};
XC.prototype.readInt16BE = function (CC, yC) {
  CC >>>= 0;
  yC || WC(CC, 2, this.length);
  const IC = this[CC + 1] | this[CC] << 8;
  return 32768 & IC ? 4294901760 | IC : IC;
};
XC.prototype.readInt32LE = function (CC, yC) {
  CC >>>= 0;
  yC || WC(CC, 4, this.length);
  return this[CC] | this[CC + 1] << 8 | this[CC + 2] << 16 | this[CC + 3] << 24;
};
XC.prototype.readInt32BE = function (CC, yC) {
  CC >>>= 0;
  yC || WC(CC, 4, this.length);
  return this[CC] << 24 | this[CC + 1] << 16 | this[CC + 2] << 8 | this[CC + 3];
};
XC.prototype.readBigInt64LE = Cy(function (CC) {
  ZC(CC >>>= 0, "offset");
  const yC = this[CC];
  const IC = this[CC + 7];
  void 0 !== yC && void 0 !== IC || lC(CC, this.length - 8);
  const fC = this[CC + 4] + 256 * this[CC + 5] + 65536 * this[CC + 6] + (IC << 24);
  return (BigInt(fC) << BigInt(32)) + BigInt(yC + 256 * this[++CC] + 65536 * this[++CC] + this[++CC] * 2 ** 24);
});
XC.prototype.readBigInt64BE = Cy(function (CC) {
  ZC(CC >>>= 0, "offset");
  const yC = this[CC];
  const IC = this[CC + 7];
  void 0 !== yC && void 0 !== IC || lC(CC, this.length - 8);
  const fC = (yC << 24) + 65536 * this[++CC] + 256 * this[++CC] + this[++CC];
  return (BigInt(fC) << BigInt(32)) + BigInt(this[++CC] * 2 ** 24 + 65536 * this[++CC] + 256 * this[++CC] + IC);
});
XC.prototype.readFloatLE = function (CC, yC) {
  CC >>>= 0;
  yC || WC(CC, 4, this.length);
  return ky.read(this, CC, !0, 23, 4);
};
XC.prototype.readFloatBE = function (CC, yC) {
  CC >>>= 0;
  yC || WC(CC, 4, this.length);
  return ky.read(this, CC, !1, 23, 4);
};
XC.prototype.readDoubleLE = function (CC, yC) {
  CC >>>= 0;
  yC || WC(CC, 8, this.length);
  return ky.read(this, CC, !0, 52, 8);
};
XC.prototype.readDoubleBE = function (CC, yC) {
  CC >>>= 0;
  yC || WC(CC, 8, this.length);
  return ky.read(this, CC, !1, 52, 8);
};
XC.prototype.writeUintLE = XC.prototype.writeUIntLE = function (CC, yC, IC, fC) {
  CC = +CC;
  yC >>>= 0;
  IC >>>= 0;
  if (!fC) {
    xC(this, CC, yC, IC, Math.pow(2, 8 * IC) - 1, 0);
  }
  let ky = 1;
  let gC = 0;
  for (this[yC] = 255 & CC; ++gC < IC && (ky *= 256);) {
    this[yC + gC] = CC / ky & 255;
  }
  return yC + IC;
};
XC.prototype.writeUintBE = XC.prototype.writeUIntBE = function (CC, yC, IC, fC) {
  CC = +CC;
  yC >>>= 0;
  IC >>>= 0;
  if (!fC) {
    xC(this, CC, yC, IC, Math.pow(2, 8 * IC) - 1, 0);
  }
  let ky = IC - 1;
  let gC = 1;
  for (this[yC + ky] = 255 & CC; --ky >= 0 && (gC *= 256);) {
    this[yC + ky] = CC / gC & 255;
  }
  return yC + IC;
};
XC.prototype.writeUint8 = XC.prototype.writeUInt8 = function (CC, yC, IC) {
  CC = +CC;
  yC >>>= 0;
  IC || xC(this, CC, yC, 1, 255, 0);
  this[yC] = 255 & CC;
  return yC + 1;
};
XC.prototype.writeUint16LE = XC.prototype.writeUInt16LE = function (CC, yC, IC) {
  CC = +CC;
  yC >>>= 0;
  IC || xC(this, CC, yC, 2, 65535, 0);
  this[yC] = 255 & CC;
  this[yC + 1] = CC >>> 8;
  return yC + 2;
};
XC.prototype.writeUint16BE = XC.prototype.writeUInt16BE = function (CC, yC, IC) {
  CC = +CC;
  yC >>>= 0;
  IC || xC(this, CC, yC, 2, 65535, 0);
  this[yC] = CC >>> 8;
  this[yC + 1] = 255 & CC;
  return yC + 2;
};
XC.prototype.writeUint32LE = XC.prototype.writeUInt32LE = function (CC, yC, IC) {
  CC = +CC;
  yC >>>= 0;
  IC || xC(this, CC, yC, 4, 4294967295, 0);
  this[yC + 3] = CC >>> 24;
  this[yC + 2] = CC >>> 16;
  this[yC + 1] = CC >>> 8;
  this[yC] = 255 & CC;
  return yC + 4;
};
XC.prototype.writeUint32BE = XC.prototype.writeUInt32BE = function (CC, yC, IC) {
  CC = +CC;
  yC >>>= 0;
  IC || xC(this, CC, yC, 4, 4294967295, 0);
  this[yC] = CC >>> 24;
  this[yC + 1] = CC >>> 16;
  this[yC + 2] = CC >>> 8;
  this[yC + 3] = 255 & CC;
  return yC + 4;
};
XC.prototype.writeBigUInt64LE = Cy(function (CC) {
  return PC(this, CC, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, BigInt(0), BigInt("0xffffffffffffffff"));
});
XC.prototype.writeBigUInt64BE = Cy(function (CC) {
  return zC(this, CC, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, BigInt(0), BigInt("0xffffffffffffffff"));
});
XC.prototype.writeIntLE = function (CC, yC, IC, fC) {
  CC = +CC;
  yC >>>= 0;
  if (!fC) {
    const fC = Math.pow(2, 8 * IC - 1);
    xC(this, CC, yC, IC, fC - 1, -fC);
  }
  let ky = 0;
  let gC = 1;
  let AC = 0;
  for (this[yC] = 255 & CC; ++ky < IC && (gC *= 256);) {
    CC < 0 && 0 === AC && 0 !== this[yC + ky - 1] && (AC = 1);
    this[yC + ky] = (CC / gC | 0) - AC & 255;
  }
  return yC + IC;
};
XC.prototype.writeIntBE = function (CC, yC, IC, fC) {
  CC = +CC;
  yC >>>= 0;
  if (!fC) {
    const fC = Math.pow(2, 8 * IC - 1);
    xC(this, CC, yC, IC, fC - 1, -fC);
  }
  let ky = IC - 1;
  let gC = 1;
  let AC = 0;
  for (this[yC + ky] = 255 & CC; --ky >= 0 && (gC *= 256);) {
    CC < 0 && 0 === AC && 0 !== this[yC + ky + 1] && (AC = 1);
    this[yC + ky] = (CC / gC | 0) - AC & 255;
  }
  return yC + IC;
};
XC.prototype.writeInt8 = function (CC, yC, IC) {
  CC = +CC;
  yC >>>= 0;
  IC || xC(this, CC, yC, 1, 127, -128);
  CC < 0 && (CC = 255 + CC + 1);
  this[yC] = 255 & CC;
  return yC + 1;
};
XC.prototype.writeInt16LE = function (CC, yC, IC) {
  CC = +CC;
  yC >>>= 0;
  IC || xC(this, CC, yC, 2, 32767, -32768);
  this[yC] = 255 & CC;
  this[yC + 1] = CC >>> 8;
  return yC + 2;
};
XC.prototype.writeInt16BE = function (CC, yC, IC) {
  CC = +CC;
  yC >>>= 0;
  IC || xC(this, CC, yC, 2, 32767, -32768);
  this[yC] = CC >>> 8;
  this[yC + 1] = 255 & CC;
  return yC + 2;
};
XC.prototype.writeInt32LE = function (CC, yC, IC) {
  CC = +CC;
  yC >>>= 0;
  IC || xC(this, CC, yC, 4, 2147483647, -2147483648);
  this[yC] = 255 & CC;
  this[yC + 1] = CC >>> 8;
  this[yC + 2] = CC >>> 16;
  this[yC + 3] = CC >>> 24;
  return yC + 4;
};
XC.prototype.writeInt32BE = function (CC, yC, IC) {
  CC = +CC;
  yC >>>= 0;
  IC || xC(this, CC, yC, 4, 2147483647, -2147483648);
  CC < 0 && (CC = 4294967295 + CC + 1);
  this[yC] = CC >>> 24;
  this[yC + 1] = CC >>> 16;
  this[yC + 2] = CC >>> 8;
  this[yC + 3] = 255 & CC;
  return yC + 4;
};
XC.prototype.writeBigInt64LE = Cy(function (CC) {
  return PC(this, CC, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
});
XC.prototype.writeBigInt64BE = Cy(function (CC) {
  return zC(this, CC, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
});
XC.prototype.writeFloatLE = function (CC, yC, IC) {
  return tC(this, CC, yC, !0, IC);
};
XC.prototype.writeFloatBE = function (CC, yC, IC) {
  return tC(this, CC, yC, !1, IC);
};
XC.prototype.writeDoubleLE = function (CC, yC, IC) {
  return JC(this, CC, yC, !0, IC);
};
XC.prototype.writeDoubleBE = function (CC, yC, IC) {
  return JC(this, CC, yC, !1, IC);
};
XC.prototype.Ly = function (CC, yC, IC, fC) {
  if (!XC.isBuffer(CC)) {
    throw new TypeError("argument should be a Buffer");
  }
  IC || (IC = 0);
  fC || 0 === fC || (fC = this.length);
  yC >= CC.length && (yC = CC.length);
  yC || (yC = 0);
  fC > 0 && fC < IC && (fC = IC);
  if (fC === IC) {
    return 0;
  }
  if (0 === CC.length || 0 === this.length) {
    return 0;
  }
  if (yC < 0) {
    throw new RangeError("targetStart out of bounds");
  }
  if (IC < 0 || IC >= this.length) {
    throw new RangeError("Index out of range");
  }
  if (fC < 0) {
    throw new RangeError("sourceEnd out of bounds");
  }
  fC > this.length && (fC = this.length);
  CC.length - yC < fC - IC && (fC = CC.length - yC + IC);
  const ky = fC - IC;
  this === CC && "function" === typeof Uint8Array.prototype.copyWithin ? this.copyWithin(yC, IC, fC) : Uint8Array.prototype.set.call(CC, this.subarray(IC, fC), yC);
  return ky;
};
XC.prototype.fill = function (CC, yC, IC, fC) {
  if ("string" === typeof CC) {
    "string" === typeof yC ? (fC = yC, yC = 0, IC = this.length) : "string" === typeof IC && (fC = IC, IC = this.length);
    if (void 0 !== fC && "string" !== typeof fC) {
      throw new TypeError("encoding must be a string");
    }
    if ("string" === typeof fC && !XC.isEncoding(fC)) {
      throw new TypeError("Unknown encoding: " + fC);
    }
    if (1 === CC.length) {
      const yC = CC.charCodeAt(0);
      ("utf8" === fC && yC < 128 || "latin1" === fC) && (CC = yC);
    }
  } else {
    "number" === typeof CC ? CC &= 255 : "boolean" === typeof CC && (CC = Number(CC));
  }
  if (yC < 0 || this.length < yC || this.length < IC) {
    throw new RangeError("Out of range index");
  }
  if (IC <= yC) {
    return this;
  }
  let ky;
  yC >>>= 0;
  IC = void 0 === IC ? this.length : IC >>> 0;
  CC || (CC = 0);
  if ("number" === typeof CC) {
    for (ky = yC; ky < IC; ++ky) {
      this[ky] = CC;
    }
  } else {
    const gC = XC.isBuffer(CC) ? CC : XC.from(CC, fC);
    const AC = gC.length;
    if (0 === AC) {
      throw new TypeError('The value "' + CC + '" is invalid for argument "value"');
    }
    for (ky = 0; ky < IC - yC; ++ky) {
      this[ky + yC] = gC[ky % AC];
    }
  }
  return this;
};
const nC = {};
function FC(CC, yC, IC) {
  nC[CC] = class extends IC {
    constructor() {
      super();
      Object.defineProperty(this, "message", {
        value: yC.apply(this, arguments),
        writable: !0,
        configurable: !0
      });
      this.name = "".concat(this.name, " [").concat(CC, "]");
      this.stack;
      delete this.name;
    }
    get code() {
      return CC;
    }
    set code(CC) {
      Object.defineProperty(this, "code", {
        configurable: !0,
        enumerable: !0,
        value: CC,
        writable: !0
      });
    }
    toString() {
      return "".concat(this.name, " [").concat(CC, "]: ").concat(this.message);
    }
  };
}
function uC(CC) {
  let yC = "";
  let IC = CC.length;
  const fC = "-" === CC[0] ? 1 : 0;
  for (; IC >= fC + 4; IC -= 3) {
    yC = "_".concat(CC.slice(IC - 3, IC)).concat(yC);
  }
  return "".concat(CC.slice(0, IC)).concat(yC);
}
function DC(CC, yC, IC, fC, ky, gC) {
  if (CC > IC || CC < yC) {
    const fC = "bigint" === typeof yC ? "n" : "";
    let ky;
    ky = gC > 3 ? 0 === yC || yC === BigInt(0) ? ">= 0".concat(fC, " and < 2").concat(fC, " ** ").concat(8 * (gC + 1)).concat(fC) : ">= -(2".concat(fC, " ** ").concat(8 * (gC + 1) - 1).concat(fC, ") and < 2 ** ") + "".concat(8 * (gC + 1) - 1).concat(fC) : ">= ".concat(yC).concat(fC, " and <= ").concat(IC).concat(fC);
    throw new nC.ERR_OUT_OF_RANGE("value", ky, CC);
  }
  !function (CC, yC, IC) {
    ZC(yC, "offset");
    void 0 !== CC[yC] && void 0 !== CC[yC + IC] || lC(yC, CC.length - (IC + 1));
  }(fC, ky, gC);
}
function ZC(CC, yC) {
  if ("number" !== typeof CC) {
    throw new nC.ERR_INVALID_ARG_TYPE(yC, "number", CC);
  }
}
function lC(CC, yC, IC) {
  if (Math.floor(CC) !== CC) {
    ZC(CC, IC);
    throw new nC.ERR_OUT_OF_RANGE(IC || "offset", "an integer", CC);
  }
  if (yC < 0) {
    throw new nC.ERR_BUFFER_OUT_OF_BOUNDS();
  }
  throw new nC.ERR_OUT_OF_RANGE(IC || "offset", ">= ".concat(IC ? 1 : 0, " and <= ").concat(yC), CC);
}
FC("ERR_BUFFER_OUT_OF_BOUNDS", function (CC) {
  return CC ? "".concat(CC, " is outside of buffer bounds") : "Attempt to access memory outside buffer bounds";
}, RangeError);
FC("ERR_INVALID_ARG_TYPE", function (CC, yC) {
  return 'The "'.concat(CC, '" argument must be of type number. Received type ').concat(typeof yC);
}, TypeError);
FC("ERR_OUT_OF_RANGE", function (CC, yC, IC) {
  let fC = 'The value of "'.concat(CC, '" is out of range.');
  let ky = IC;
  Number.isInteger(IC) && Math.abs(IC) > 2 ** 32 ? ky = uC(String(IC)) : "bigint" === typeof IC && (ky = String(IC), (IC > BigInt(2) ** BigInt(32) || IC < -(BigInt(2) ** BigInt(32))) && (ky = uC(ky)), ky += "n");
  fC += " It must be ".concat(yC, ". Received ").concat(ky);
  return fC;
}, RangeError);
const oC = /[^+/0-9A-Za-z-_]/g;
function vC(CC, yC) {
  let IC;
  yC = yC || 1 / 0;
  const fC = CC.length;
  let ky = null;
  const gC = [];
  for (let AC = 0; AC < fC; ++AC) {
    IC = CC.charCodeAt(AC);
    if (IC > 55295 && IC < 57344) {
      if (!ky) {
        if (IC > 56319) {
          (yC -= 3) > -1 && gC.push(239, 191, 189);
          continue;
        }
        if (AC + 1 === fC) {
          (yC -= 3) > -1 && gC.push(239, 191, 189);
          continue;
        }
        ky = IC;
        continue;
      }
      if (IC < 56320) {
        (yC -= 3) > -1 && gC.push(239, 191, 189);
        ky = IC;
        continue;
      }
      IC = 65536 + (ky - 55296 << 10 | IC - 56320);
    } else {
      ky && (yC -= 3) > -1 && gC.push(239, 191, 189);
    }
    ky = null;
    if (IC < 128) {
      if ((yC -= 1) < 0) {
        break;
      }
      gC.push(IC);
    } else {
      if (IC < 2048) {
        if ((yC -= 2) < 0) {
          break;
        }
        gC.push(IC >> 6 | 192, 63 & IC | 128);
      } else {
        if (IC < 65536) {
          if ((yC -= 3) < 0) {
            break;
          }
          gC.push(IC >> 12 | 224, IC >> 6 & 63 | 128, 63 & IC | 128);
        } else {
          if (!(IC < 1114112)) {
            throw new Error("Invalid code point");
          }
          if ((yC -= 4) < 0) {
            break;
          }
          gC.push(IC >> 18 | 240, IC >> 12 & 63 | 128, IC >> 6 & 63 | 128, 63 & IC | 128);
        }
      }
    }
  }
  return gC;
}
function hC(CC) {
  return fC.toByteArray(function (CC) {
    if ((CC = (CC = CC.split("=")[0]).trim().replace(oC, "")).length < 2) {
      return "";
    }
    for (; CC.length % 4 !== 0;) {
      CC += "=";
    }
    return CC;
  }(CC));
}
function RC(CC, yC, IC, fC) {
  let ky;
  for (ky = 0; ky < fC && !(ky + IC >= yC.length || ky >= CC.length); ++ky) {
    yC[ky + IC] = CC[ky];
  }
  return ky;
}
function dC(CC, yC) {
  return CC instanceof yC || null != CC && null != CC.constructor && null != CC.constructor.name && CC.constructor.name === yC.name;
}
function QC(CC) {
  return CC !== CC;
}
const MC = function () {
  const CC = "0123456789abcdef";
  const yC = new Array(256);
  for (let IC = 0; IC < 16; ++IC) {
    const fC = 16 * IC;
    for (let ky = 0; ky < 16; ++ky) {
      yC[fC + ky] = CC[IC] + CC[ky];
    }
  }
  return yC;
}();
function Cy(CC) {
  return "undefined" === typeof BigInt ? yy : CC;
}
function yy() {
  throw new Error("BigInt not supported");
}