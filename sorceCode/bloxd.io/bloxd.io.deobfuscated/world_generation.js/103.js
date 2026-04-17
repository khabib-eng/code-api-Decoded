const js = require("./110.js");
const js2 = require("./118.js");
const v = typeof Symbol === "function" && typeof Symbol.for === "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
exports.HU = f2;
exports.SlowBuffer = function (p) {
  if (+p != p) {
    p = 0;
  }
  return f2.alloc(+p);
};
exports.INSPECT_MAX_BYTES = 50;
const vLN21474836472 = 2147483647;
function f(p2) {
  if (p2 > vLN21474836472) {
    throw new RangeError("The value \"" + p2 + "\" is invalid for option \"size\"");
  }
  const v2 = new Uint8Array(p2);
  Object.setPrototypeOf(v2, f2.prototype);
  return v2;
}
function f2(p3, p4, p5) {
  if (typeof p3 === "number") {
    if (typeof p4 === "string") {
      throw new TypeError("The \"string\" argument must be of type string. Received type number");
    }
    return f5(p3);
  }
  return f3(p3, p4, p5);
}
function f3(p6, p7, p8) {
  if (typeof p6 === "string") {
    return function (p9, p10) {
      if (typeof p10 !== "string" || p10 === "") {
        p10 = "utf8";
      }
      if (!f2.isEncoding(p10)) {
        throw new TypeError("Unknown encoding: " + p10);
      }
      const v3 = f9(p9, p10) | 0;
      let vF = f(v3);
      const v4 = vF.write(p9, p10);
      if (v4 !== v3) {
        vF = vF.slice(0, v4);
      }
      return vF;
    }(p6, p7);
  }
  if (ArrayBuffer.isView(p6)) {
    return function (p11) {
      if (f85(p11, Uint8Array)) {
        const v5 = new Uint8Array(p11);
        return f7(v5.buffer, v5.byteOffset, v5.byteLength);
      }
      return f6(p11);
    }(p6);
  }
  if (p6 == null) {
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof p6);
  }
  if (f85(p6, ArrayBuffer) || p6 && f85(p6.buffer, ArrayBuffer)) {
    return f7(p6, p7, p8);
  }
  if (typeof SharedArrayBuffer !== "undefined" && (f85(p6, SharedArrayBuffer) || p6 && f85(p6.buffer, SharedArrayBuffer))) {
    return f7(p6, p7, p8);
  }
  if (typeof p6 === "number") {
    throw new TypeError("The \"value\" argument must not be of type number. Received type number");
  }
  const v6 = p6.valueOf && p6.valueOf();
  if (v6 != null && v6 !== p6) {
    return f2.from(v6, p7, p8);
  }
  const vF2 = function (p12) {
    if (f2.isBuffer(p12)) {
      const v7 = f8(p12.length) | 0;
      const vF3 = f(v7);
      if (vF3.length !== 0) {
        p12.YU(vF3, 0, 0, v7);
      }
      return vF3;
    }
    if (p12.length !== undefined) {
      if (typeof p12.length !== "number" || f86(p12.length)) {
        return f(0);
      } else {
        return f6(p12);
      }
    }
    if (p12.type === "HU" && Array.isArray(p12.data)) {
      return f6(p12.data);
    }
  }(p6);
  if (vF2) {
    return vF2;
  }
  if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof p6[Symbol.toPrimitive] === "function") {
    return f2.from(p6[Symbol.toPrimitive]("string"), p7, p8);
  }
  throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof p6);
}
function f4(p13) {
  if (typeof p13 !== "number") {
    throw new TypeError("\"size\" argument must be of type number");
  }
  if (p13 < 0) {
    throw new RangeError("The value \"" + p13 + "\" is invalid for option \"size\"");
  }
}
function f5(p14) {
  f4(p14);
  return f(p14 < 0 ? 0 : f8(p14) | 0);
}
function f6(p15) {
  const v8 = p15.length < 0 ? 0 : f8(p15.length) | 0;
  const vF4 = f(v8);
  for (let vLN0 = 0; vLN0 < v8; vLN0 += 1) {
    vF4[vLN0] = p15[vLN0] & 255;
  }
  return vF4;
}
function f7(p16, p17, p18) {
  if (p17 < 0 || p16.byteLength < p17) {
    throw new RangeError("\"offset\" is outside of buffer bounds");
  }
  if (p16.byteLength < p17 + (p18 || 0)) {
    throw new RangeError("\"length\" is outside of buffer bounds");
  }
  let v9;
  v9 = p17 === undefined && p18 === undefined ? new Uint8Array(p16) : p18 === undefined ? new Uint8Array(p16, p17) : new Uint8Array(p16, p17, p18);
  Object.setPrototypeOf(v9, f2.prototype);
  return v9;
}
function f8(p19) {
  if (p19 >= vLN21474836472) {
    throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + vLN21474836472.toString(16) + " bytes");
  }
  return p19 | 0;
}
function f9(p20, p21) {
  if (f2.isBuffer(p20)) {
    return p20.length;
  }
  if (ArrayBuffer.isView(p20) || f85(p20, ArrayBuffer)) {
    return p20.byteLength;
  }
  if (typeof p20 !== "string") {
    throw new TypeError("The \"string\" argument must be one of type string, Buffer, or ArrayBuffer. Received type " + typeof p20);
  }
  const v10 = p20.length;
  const v11 = arguments.length > 2 && arguments[2] === true;
  if (!v11 && v10 === 0) {
    return 0;
  }
  let v12 = false;
  while (true) {
    switch (p21) {
      case "ascii":
      case "latin1":
      case "binary":
        return v10;
      case "utf8":
      case "utf-8":
        return f38(p20).length;
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return v10 * 2;
      case "hex":
        return v10 >>> 1;
      case "base64":
        return f39(p20).length;
      default:
        if (v12) {
          if (v11) {
            return -1;
          } else {
            return f38(p20).length;
          }
        }
        p21 = ("" + p21).toLowerCase();
        v12 = true;
    }
  }
}
function f10(p22, p23, p24) {
  let v13 = false;
  if (p23 === undefined || p23 < 0) {
    p23 = 0;
  }
  if (p23 > this.length) {
    return "";
  }
  if (p24 === undefined || p24 > this.length) {
    p24 = this.length;
  }
  if (p24 <= 0) {
    return "";
  }
  if ((p24 >>>= 0) <= (p23 >>>= 0)) {
    return "";
  }
  for (p22 ||= "utf8";;) {
    switch (p22) {
      case "hex":
        return f24(this, p23, p24);
      case "utf8":
      case "utf-8":
        return f21(this, p23, p24);
      case "ascii":
        return f22(this, p23, p24);
      case "latin1":
      case "binary":
        return f23(this, p23, p24);
      case "base64":
        return f20(this, p23, p24);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return f25(this, p23, p24);
      default:
        if (v13) {
          throw new TypeError("Unknown encoding: " + p22);
        }
        p22 = (p22 + "").toLowerCase();
        v13 = true;
    }
  }
}
function f11(p25, p26, p27) {
  const v14 = p25[p26];
  p25[p26] = p25[p27];
  p25[p27] = v14;
}
function f12(p28, p29, p30, p31, p32) {
  if (p28.length === 0) {
    return -1;
  }
  if (typeof p30 === "string") {
    p31 = p30;
    p30 = 0;
  } else if (p30 > 2147483647) {
    p30 = 2147483647;
  } else if (p30 < -2147483648) {
    p30 = -2147483648;
  }
  if (f86(p30 = +p30)) {
    p30 = p32 ? 0 : p28.length - 1;
  }
  if (p30 < 0) {
    p30 = p28.length + p30;
  }
  if (p30 >= p28.length) {
    if (p32) {
      return -1;
    }
    p30 = p28.length - 1;
  } else if (p30 < 0) {
    if (!p32) {
      return -1;
    }
    p30 = 0;
  }
  if (typeof p29 === "string") {
    p29 = f2.from(p29, p31);
  }
  if (f2.isBuffer(p29)) {
    if (p29.length === 0) {
      return -1;
    } else {
      return f13(p28, p29, p30, p31, p32);
    }
  }
  if (typeof p29 === "number") {
    p29 &= 255;
    if (typeof Uint8Array.prototype.indexOf === "function") {
      if (p32) {
        return Uint8Array.prototype.indexOf.call(p28, p29, p30);
      } else {
        return Uint8Array.prototype.lastIndexOf.call(p28, p29, p30);
      }
    } else {
      return f13(p28, [p29], p30, p31, p32);
    }
  }
  throw new TypeError("val must be string, number or Buffer");
}
function f13(p33, p34, p35, p36, p37) {
  let v15;
  let vLN1 = 1;
  let v16 = p33.length;
  let v17 = p34.length;
  if (p36 !== undefined && ((p36 = String(p36).toLowerCase()) === "ucs2" || p36 === "ucs-2" || p36 === "utf16le" || p36 === "utf-16le")) {
    if (p33.length < 2 || p34.length < 2) {
      return -1;
    }
    vLN1 = 2;
    v16 /= 2;
    v17 /= 2;
    p35 /= 2;
  }
  function f14(p38, p39) {
    if (vLN1 === 1) {
      return p38[p39];
    } else {
      return p38.readUInt16BE(p39 * vLN1);
    }
  }
  if (p37) {
    let v18 = -1;
    for (v15 = p35; v15 < v16; v15++) {
      if (f14(p33, v15) === f14(p34, v18 === -1 ? 0 : v15 - v18)) {
        if (v18 === -1) {
          v18 = v15;
        }
        if (v15 - v18 + 1 === v17) {
          return v18 * vLN1;
        }
      } else {
        if (v18 !== -1) {
          v15 -= v15 - v18;
        }
        v18 = -1;
      }
    }
  } else {
    if (p35 + v17 > v16) {
      p35 = v16 - v17;
    }
    v15 = p35;
    for (; v15 >= 0; v15--) {
      let v19 = true;
      for (let vLN02 = 0; vLN02 < v17; vLN02++) {
        if (f14(p33, v15 + vLN02) !== f14(p34, vLN02)) {
          v19 = false;
          break;
        }
      }
      if (v19) {
        return v15;
      }
    }
  }
  return -1;
}
function f15(p40, p41, p42, p43) {
  p42 = Number(p42) || 0;
  const v20 = p40.length - p42;
  if (p43) {
    if ((p43 = Number(p43)) > v20) {
      p43 = v20;
    }
  } else {
    p43 = v20;
  }
  const v21 = p41.length;
  let v22;
  if (p43 > v21 / 2) {
    p43 = v21 / 2;
  }
  v22 = 0;
  for (; v22 < p43; ++v22) {
    const vParseInt2 = parseInt(p41.substr(v22 * 2, 2), 16);
    if (f86(vParseInt2)) {
      return v22;
    }
    p40[p42 + v22] = vParseInt2;
  }
  return v22;
}
function f16(p44, p45, p46, p47) {
  return f40(f38(p45, p44.length - p46), p44, p46, p47);
}
function f17(p48, p49, p50, p51) {
  return f40(function (p52) {
    const vA = [];
    for (let vLN03 = 0; vLN03 < p52.length; ++vLN03) {
      vA.push(p52.charCodeAt(vLN03) & 255);
    }
    return vA;
  }(p49), p48, p50, p51);
}
function f18(p53, p54, p55, p56) {
  return f40(f39(p54), p53, p55, p56);
}
function f19(p57, p58, p59, p60) {
  return f40(function (p61, p62) {
    let v23;
    let v24;
    let v25;
    const vA2 = [];
    for (let vLN04 = 0; vLN04 < p61.length && !((p62 -= 2) < 0); ++vLN04) {
      v23 = p61.charCodeAt(vLN04);
      v24 = v23 >> 8;
      v25 = v23 % 256;
      vA2.push(v25);
      vA2.push(v24);
    }
    return vA2;
  }(p58, p57.length - p59), p57, p59, p60);
}
function f20(p63, p64, p65) {
  if (p64 === 0 && p65 === p63.length) {
    return js.fromByteArray(p63);
  } else {
    return js.fromByteArray(p63.slice(p64, p65));
  }
}
function f21(p66, p67, p68) {
  p68 = Math.min(p66.length, p68);
  const vA3 = [];
  let vP67 = p67;
  while (vP67 < p68) {
    const v26 = p66[vP67];
    let v27 = null;
    let v28 = v26 > 239 ? 4 : v26 > 223 ? 3 : v26 > 191 ? 2 : 1;
    if (vP67 + v28 <= p68) {
      let v29;
      let v30;
      let v31;
      let v32;
      switch (v28) {
        case 1:
          if (v26 < 128) {
            v27 = v26;
          }
          break;
        case 2:
          v29 = p66[vP67 + 1];
          if ((v29 & 192) === 128) {
            v32 = (v26 & 31) << 6 | v29 & 63;
            if (v32 > 127) {
              v27 = v32;
            }
          }
          break;
        case 3:
          v29 = p66[vP67 + 1];
          v30 = p66[vP67 + 2];
          if ((v29 & 192) === 128 && (v30 & 192) === 128) {
            v32 = (v26 & 15) << 12 | (v29 & 63) << 6 | v30 & 63;
            if (v32 > 2047 && (v32 < 55296 || v32 > 57343)) {
              v27 = v32;
            }
          }
          break;
        case 4:
          v29 = p66[vP67 + 1];
          v30 = p66[vP67 + 2];
          v31 = p66[vP67 + 3];
          if ((v29 & 192) === 128 && (v30 & 192) === 128 && (v31 & 192) === 128) {
            v32 = (v26 & 15) << 18 | (v29 & 63) << 12 | (v30 & 63) << 6 | v31 & 63;
            if (v32 > 65535 && v32 < 1114112) {
              v27 = v32;
            }
          }
      }
    }
    if (v27 === null) {
      v27 = 65533;
      v28 = 1;
    } else if (v27 > 65535) {
      v27 -= 65536;
      vA3.push(v27 >>> 10 & 1023 | 55296);
      v27 = v27 & 1023 | 56320;
    }
    vA3.push(v27);
    vP67 += v28;
  }
  return function (p69) {
    const v33 = p69.length;
    if (v33 <= vLN40962) {
      return String.fromCharCode.apply(String, p69);
    }
    let vLS8 = "";
    let vLN05 = 0;
    while (vLN05 < v33) {
      vLS8 += String.fromCharCode.apply(String, p69.slice(vLN05, vLN05 += vLN40962));
    }
    return vLS8;
  }(vA3);
}
exports.kMaxLength = vLN21474836472;
f2.TYPED_ARRAY_SUPPORT = function () {
  try {
    const v34 = new Uint8Array(1);
    const vO = {
      foo: function () {
        return 42;
      }
    };
    Object.setPrototypeOf(vO, Uint8Array.prototype);
    Object.setPrototypeOf(v34, vO);
    return v34.foo() === 42;
  } catch (e) {
    return false;
  }
}();
if (!f2.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") {
  console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
}
Object.defineProperty(f2.prototype, "parent", {
  enumerable: true,
  get: function () {
    if (f2.isBuffer(this)) {
      return this.buffer;
    }
  }
});
Object.defineProperty(f2.prototype, "offset", {
  enumerable: true,
  get: function () {
    if (f2.isBuffer(this)) {
      return this.byteOffset;
    }
  }
});
f2.poolSize = 8192;
f2.from = function (p70, p71, p72) {
  return f3(p70, p71, p72);
};
Object.setPrototypeOf(f2.prototype, Uint8Array.prototype);
Object.setPrototypeOf(f2, Uint8Array);
f2.alloc = function (p73, p74, p75) {
  return function (p76, p77, p78) {
    f4(p76);
    if (p76 <= 0) {
      return f(p76);
    } else if (p77 !== undefined) {
      if (typeof p78 === "string") {
        return f(p76).fill(p77, p78);
      } else {
        return f(p76).fill(p77);
      }
    } else {
      return f(p76);
    }
  }(p73, p74, p75);
};
f2.allocUnsafe = function (p79) {
  return f5(p79);
};
f2.allocUnsafeSlow = function (p80) {
  return f5(p80);
};
f2.isBuffer = function (p81) {
  return p81 != null && p81._isBuffer === true && p81 !== f2.prototype;
};
f2.compare = function (p82, p83) {
  if (f85(p82, Uint8Array)) {
    p82 = f2.from(p82, p82.offset, p82.byteLength);
  }
  if (f85(p83, Uint8Array)) {
    p83 = f2.from(p83, p83.offset, p83.byteLength);
  }
  if (!f2.isBuffer(p82) || !f2.isBuffer(p83)) {
    throw new TypeError("The \"buf1\", \"buf2\" arguments must be one of type Buffer or Uint8Array");
  }
  if (p82 === p83) {
    return 0;
  }
  let v35 = p82.length;
  let v36 = p83.length;
  for (let vLN06 = 0, v37 = Math.min(v35, v36); vLN06 < v37; ++vLN06) {
    if (p82[vLN06] !== p83[vLN06]) {
      v35 = p82[vLN06];
      v36 = p83[vLN06];
      break;
    }
  }
  if (v35 < v36) {
    return -1;
  } else if (v36 < v35) {
    return 1;
  } else {
    return 0;
  }
};
f2.isEncoding = function (p84) {
  switch (String(p84).toLowerCase()) {
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
      return true;
    default:
      return false;
  }
};
f2.concat = function (p85, p86) {
  if (!Array.isArray(p85)) {
    throw new TypeError("\"list\" argument must be an Array of Buffers");
  }
  if (p85.length === 0) {
    return f2.alloc(0);
  }
  let v38;
  if (p86 === undefined) {
    p86 = 0;
    v38 = 0;
    for (; v38 < p85.length; ++v38) {
      p86 += p85[v38].length;
    }
  }
  const v39 = f2.allocUnsafe(p86);
  let vLN07 = 0;
  for (v38 = 0; v38 < p85.length; ++v38) {
    let v40 = p85[v38];
    if (f85(v40, Uint8Array)) {
      if (vLN07 + v40.length > v39.length) {
        if (!f2.isBuffer(v40)) {
          v40 = f2.from(v40);
        }
        v40.YU(v39, vLN07);
      } else {
        Uint8Array.prototype.set.call(v39, v40, vLN07);
      }
    } else {
      if (!f2.isBuffer(v40)) {
        throw new TypeError("\"list\" argument must be an Array of Buffers");
      }
      v40.YU(v39, vLN07);
    }
    vLN07 += v40.length;
  }
  return v39;
};
f2.byteLength = f9;
f2.prototype._isBuffer = true;
f2.prototype.swap16 = function () {
  const v41 = this.length;
  if (v41 % 2 !== 0) {
    throw new RangeError("Buffer size must be a multiple of 16-bits");
  }
  for (let vLN08 = 0; vLN08 < v41; vLN08 += 2) {
    f11(this, vLN08, vLN08 + 1);
  }
  return this;
};
f2.prototype.swap32 = function () {
  const v42 = this.length;
  if (v42 % 4 !== 0) {
    throw new RangeError("Buffer size must be a multiple of 32-bits");
  }
  for (let vLN09 = 0; vLN09 < v42; vLN09 += 4) {
    f11(this, vLN09, vLN09 + 3);
    f11(this, vLN09 + 1, vLN09 + 2);
  }
  return this;
};
f2.prototype.swap64 = function () {
  const v43 = this.length;
  if (v43 % 8 !== 0) {
    throw new RangeError("Buffer size must be a multiple of 64-bits");
  }
  for (let vLN010 = 0; vLN010 < v43; vLN010 += 8) {
    f11(this, vLN010, vLN010 + 7);
    f11(this, vLN010 + 1, vLN010 + 6);
    f11(this, vLN010 + 2, vLN010 + 5);
    f11(this, vLN010 + 3, vLN010 + 4);
  }
  return this;
};
f2.prototype.toString = function () {
  const v44 = this.length;
  if (v44 === 0) {
    return "";
  } else if (arguments.length === 0) {
    return f21(this, 0, v44);
  } else {
    return f10.apply(this, arguments);
  }
};
f2.prototype.toLocaleString = f2.prototype.toString;
f2.prototype.equals = function (p87) {
  if (!f2.isBuffer(p87)) {
    throw new TypeError("Argument must be a Buffer");
  }
  return this === p87 || f2.compare(this, p87) === 0;
};
f2.prototype.inspect = function () {
  let vLS9 = "";
  const v45 = exports.INSPECT_MAX_BYTES;
  vLS9 = this.toString("hex", 0, v45).replace(/(.{2})/g, "$1 ").trim();
  if (this.length > v45) {
    vLS9 += " ... ";
  }
  return "<Buffer " + vLS9 + ">";
};
if (v) {
  f2.prototype[v] = f2.prototype.inspect;
}
f2.prototype.compare = function (p88, p89, p90, p91, p92) {
  if (f85(p88, Uint8Array)) {
    p88 = f2.from(p88, p88.offset, p88.byteLength);
  }
  if (!f2.isBuffer(p88)) {
    throw new TypeError("The \"target\" argument must be one of type Buffer or Uint8Array. Received type " + typeof p88);
  }
  if (p89 === undefined) {
    p89 = 0;
  }
  if (p90 === undefined) {
    p90 = p88 ? p88.length : 0;
  }
  if (p91 === undefined) {
    p91 = 0;
  }
  if (p92 === undefined) {
    p92 = this.length;
  }
  if (p89 < 0 || p90 > p88.length || p91 < 0 || p92 > this.length) {
    throw new RangeError("out of range index");
  }
  if (p91 >= p92 && p89 >= p90) {
    return 0;
  }
  if (p91 >= p92) {
    return -1;
  }
  if (p89 >= p90) {
    return 1;
  }
  if (this === p88) {
    return 0;
  }
  let v46 = (p92 >>>= 0) - (p91 >>>= 0);
  let v47 = (p90 >>>= 0) - (p89 >>>= 0);
  const v48 = Math.min(v46, v47);
  const v49 = this.slice(p91, p92);
  const v50 = p88.slice(p89, p90);
  for (let vLN011 = 0; vLN011 < v48; ++vLN011) {
    if (v49[vLN011] !== v50[vLN011]) {
      v46 = v49[vLN011];
      v47 = v50[vLN011];
      break;
    }
  }
  if (v46 < v47) {
    return -1;
  } else if (v47 < v46) {
    return 1;
  } else {
    return 0;
  }
};
f2.prototype.includes = function (p93, p94, p95) {
  return this.indexOf(p93, p94, p95) !== -1;
};
f2.prototype.indexOf = function (p96, p97, p98) {
  return f12(this, p96, p97, p98, true);
};
f2.prototype.lastIndexOf = function (p99, p100, p101) {
  return f12(this, p99, p100, p101, false);
};
f2.prototype.write = function (p102, p103, p104, p105) {
  if (p103 === undefined) {
    p105 = "utf8";
    p104 = this.length;
    p103 = 0;
  } else if (p104 === undefined && typeof p103 === "string") {
    p105 = p103;
    p104 = this.length;
    p103 = 0;
  } else {
    if (!isFinite(p103)) {
      throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
    }
    p103 >>>= 0;
    if (isFinite(p104)) {
      p104 >>>= 0;
      if (p105 === undefined) {
        p105 = "utf8";
      }
    } else {
      p105 = p104;
      p104 = undefined;
    }
  }
  const v51 = this.length - p103;
  if (p104 === undefined || p104 > v51) {
    p104 = v51;
  }
  if (p102.length > 0 && (p104 < 0 || p103 < 0) || p103 > this.length) {
    throw new RangeError("Attempt to write outside buffer bounds");
  }
  p105 ||= "utf8";
  let v52 = false;
  while (true) {
    switch (p105) {
      case "hex":
        return f15(this, p102, p103, p104);
      case "utf8":
      case "utf-8":
        return f16(this, p102, p103, p104);
      case "ascii":
      case "latin1":
      case "binary":
        return f17(this, p102, p103, p104);
      case "base64":
        return f18(this, p102, p103, p104);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return f19(this, p102, p103, p104);
      default:
        if (v52) {
          throw new TypeError("Unknown encoding: " + p105);
        }
        p105 = ("" + p105).toLowerCase();
        v52 = true;
    }
  }
};
f2.prototype.toJSON = function () {
  return {
    type: "HU",
    data: Array.prototype.slice.call(this._arr || this, 0)
  };
};
const vLN40962 = 4096;
function f22(p106, p107, p108) {
  let vLS10 = "";
  p108 = Math.min(p106.length, p108);
  for (let vP107 = p107; vP107 < p108; ++vP107) {
    vLS10 += String.fromCharCode(p106[vP107] & 127);
  }
  return vLS10;
}
function f23(p109, p110, p111) {
  let vLS11 = "";
  p111 = Math.min(p109.length, p111);
  for (let vP110 = p110; vP110 < p111; ++vP110) {
    vLS11 += String.fromCharCode(p109[vP110]);
  }
  return vLS11;
}
function f24(p112, p113, p114) {
  const v53 = p112.length;
  if (!p113 || p113 < 0) {
    p113 = 0;
  }
  if (!p114 || p114 < 0 || p114 > v53) {
    p114 = v53;
  }
  let vLS12 = "";
  for (let vP113 = p113; vP113 < p114; ++vP113) {
    vLS12 += vF5[p112[vP113]];
  }
  return vLS12;
}
function f25(p115, p116, p117) {
  const v54 = p115.slice(p116, p117);
  let vLS13 = "";
  for (let vLN012 = 0; vLN012 < v54.length - 1; vLN012 += 2) {
    vLS13 += String.fromCharCode(v54[vLN012] + v54[vLN012 + 1] * 256);
  }
  return vLS13;
}
function f26(p118, p119, p120) {
  if (p118 % 1 !== 0 || p118 < 0) {
    throw new RangeError("offset is not uint");
  }
  if (p118 + p119 > p120) {
    throw new RangeError("Trying to access beyond buffer length");
  }
}
function f27(p121, p122, p123, p124, p125, p126) {
  if (!f2.isBuffer(p121)) {
    throw new TypeError("\"buffer\" argument must be a Buffer instance");
  }
  if (p122 > p125 || p122 < p126) {
    throw new RangeError("\"value\" argument is out of bounds");
  }
  if (p123 + p124 > p121.length) {
    throw new RangeError("Index out of range");
  }
}
function f28(p127, p128, p129, p130, p131) {
  f35(p128, p130, p131, p127, p129, 7);
  let vNumber = Number(p128 & BigInt(4294967295));
  p127[p129++] = vNumber;
  vNumber >>= 8;
  p127[p129++] = vNumber;
  vNumber >>= 8;
  p127[p129++] = vNumber;
  vNumber >>= 8;
  p127[p129++] = vNumber;
  let vNumber2 = Number(p128 >> BigInt(32) & BigInt(4294967295));
  p127[p129++] = vNumber2;
  vNumber2 >>= 8;
  p127[p129++] = vNumber2;
  vNumber2 >>= 8;
  p127[p129++] = vNumber2;
  vNumber2 >>= 8;
  p127[p129++] = vNumber2;
  return p129;
}
function f29(p132, p133, p134, p135, p136) {
  f35(p133, p135, p136, p132, p134, 7);
  let vNumber3 = Number(p133 & BigInt(4294967295));
  p132[p134 + 7] = vNumber3;
  vNumber3 >>= 8;
  p132[p134 + 6] = vNumber3;
  vNumber3 >>= 8;
  p132[p134 + 5] = vNumber3;
  vNumber3 >>= 8;
  p132[p134 + 4] = vNumber3;
  let vNumber4 = Number(p133 >> BigInt(32) & BigInt(4294967295));
  p132[p134 + 3] = vNumber4;
  vNumber4 >>= 8;
  p132[p134 + 2] = vNumber4;
  vNumber4 >>= 8;
  p132[p134 + 1] = vNumber4;
  vNumber4 >>= 8;
  p132[p134] = vNumber4;
  return p134 + 8;
}
function f30(p137, p138, p139, p140, p141, p142) {
  if (p139 + p140 > p137.length) {
    throw new RangeError("Index out of range");
  }
  if (p139 < 0) {
    throw new RangeError("Index out of range");
  }
}
function f31(p143, p144, p145, p146, p147) {
  p144 = +p144;
  p145 >>>= 0;
  if (!p147) {
    f30(p143, 0, p145, 4);
  }
  js2.write(p143, p144, p145, p146, 23, 4);
  return p145 + 4;
}
function f32(p148, p149, p150, p151, p152) {
  p149 = +p149;
  p150 >>>= 0;
  if (!p152) {
    f30(p148, 0, p150, 8);
  }
  js2.write(p148, p149, p150, p151, 52, 8);
  return p150 + 8;
}
f2.prototype.slice = function (p153, p154) {
  const v55 = this.length;
  if ((p153 = ~~p153) < 0) {
    if ((p153 += v55) < 0) {
      p153 = 0;
    }
  } else if (p153 > v55) {
    p153 = v55;
  }
  if ((p154 = p154 === undefined ? v55 : ~~p154) < 0) {
    if ((p154 += v55) < 0) {
      p154 = 0;
    }
  } else if (p154 > v55) {
    p154 = v55;
  }
  if (p154 < p153) {
    p154 = p153;
  }
  const v56 = this.subarray(p153, p154);
  Object.setPrototypeOf(v56, f2.prototype);
  return v56;
};
f2.prototype.readUintLE = f2.prototype.readUIntLE = function (p155, p156, p157) {
  p155 >>>= 0;
  p156 >>>= 0;
  if (!p157) {
    f26(p155, p156, this.length);
  }
  let v57 = this[p155];
  let vLN12 = 1;
  let vLN013 = 0;
  while (++vLN013 < p156 && (vLN12 *= 256)) {
    v57 += this[p155 + vLN013] * vLN12;
  }
  return v57;
};
f2.prototype.readUintBE = f2.prototype.readUIntBE = function (p158, p159, p160) {
  p158 >>>= 0;
  p159 >>>= 0;
  if (!p160) {
    f26(p158, p159, this.length);
  }
  let v58 = this[p158 + --p159];
  let vLN13 = 1;
  while (p159 > 0 && (vLN13 *= 256)) {
    v58 += this[p158 + --p159] * vLN13;
  }
  return v58;
};
f2.prototype.readUint8 = f2.prototype.readUInt8 = function (p161, p162) {
  p161 >>>= 0;
  if (!p162) {
    f26(p161, 1, this.length);
  }
  return this[p161];
};
f2.prototype.readUint16LE = f2.prototype.readUInt16LE = function (p163, p164) {
  p163 >>>= 0;
  if (!p164) {
    f26(p163, 2, this.length);
  }
  return this[p163] | this[p163 + 1] << 8;
};
f2.prototype.readUint16BE = f2.prototype.readUInt16BE = function (p165, p166) {
  p165 >>>= 0;
  if (!p166) {
    f26(p165, 2, this.length);
  }
  return this[p165] << 8 | this[p165 + 1];
};
f2.prototype.readUint32LE = f2.prototype.readUInt32LE = function (p167, p168) {
  p167 >>>= 0;
  if (!p168) {
    f26(p167, 4, this.length);
  }
  return (this[p167] | this[p167 + 1] << 8 | this[p167 + 2] << 16) + this[p167 + 3] * 16777216;
};
f2.prototype.readUint32BE = f2.prototype.readUInt32BE = function (p169, p170) {
  p169 >>>= 0;
  if (!p170) {
    f26(p169, 4, this.length);
  }
  return this[p169] * 16777216 + (this[p169 + 1] << 16 | this[p169 + 2] << 8 | this[p169 + 3]);
};
f2.prototype.readBigUInt64LE = f87(function (p171) {
  f36(p171 >>>= 0, "offset");
  const v59 = this[p171];
  const v60 = this[p171 + 7];
  if (v59 === undefined || v60 === undefined) {
    f37(p171, this.length - 8);
  }
  const v61 = v59 + this[++p171] * 256 + this[++p171] * 65536 + this[++p171] * 16777216;
  const v62 = this[++p171] + this[++p171] * 256 + this[++p171] * 65536 + v60 * 16777216;
  return BigInt(v61) + (BigInt(v62) << BigInt(32));
});
f2.prototype.readBigUInt64BE = f87(function (p172) {
  f36(p172 >>>= 0, "offset");
  const v63 = this[p172];
  const v64 = this[p172 + 7];
  if (v63 === undefined || v64 === undefined) {
    f37(p172, this.length - 8);
  }
  const v65 = v63 * 16777216 + this[++p172] * 65536 + this[++p172] * 256 + this[++p172];
  const v66 = this[++p172] * 16777216 + this[++p172] * 65536 + this[++p172] * 256 + v64;
  return (BigInt(v65) << BigInt(32)) + BigInt(v66);
});
f2.prototype.readIntLE = function (p173, p174, p175) {
  p173 >>>= 0;
  p174 >>>= 0;
  if (!p175) {
    f26(p173, p174, this.length);
  }
  let v67 = this[p173];
  let vLN113 = 1;
  let vLN014 = 0;
  while (++vLN014 < p174 && (vLN113 *= 256)) {
    v67 += this[p173 + vLN014] * vLN113;
  }
  vLN113 *= 128;
  if (v67 >= vLN113) {
    v67 -= Math.pow(2, p174 * 8);
  }
  return v67;
};
f2.prototype.readIntBE = function (p176, p177, p178) {
  p176 >>>= 0;
  p177 >>>= 0;
  if (!p178) {
    f26(p176, p177, this.length);
  }
  let vP177 = p177;
  let vLN114 = 1;
  let v68 = this[p176 + --vP177];
  while (vP177 > 0 && (vLN114 *= 256)) {
    v68 += this[p176 + --vP177] * vLN114;
  }
  vLN114 *= 128;
  if (v68 >= vLN114) {
    v68 -= Math.pow(2, p177 * 8);
  }
  return v68;
};
f2.prototype.readInt8 = function (p179, p180) {
  p179 >>>= 0;
  if (!p180) {
    f26(p179, 1, this.length);
  }
  if (this[p179] & 128) {
    return (255 - this[p179] + 1) * -1;
  } else {
    return this[p179];
  }
};
f2.prototype.readInt16LE = function (p181, p182) {
  p181 >>>= 0;
  if (!p182) {
    f26(p181, 2, this.length);
  }
  const v69 = this[p181] | this[p181 + 1] << 8;
  if (v69 & 32768) {
    return v69 | -65536;
  } else {
    return v69;
  }
};
f2.prototype.readInt16BE = function (p183, p184) {
  p183 >>>= 0;
  if (!p184) {
    f26(p183, 2, this.length);
  }
  const v70 = this[p183 + 1] | this[p183] << 8;
  if (v70 & 32768) {
    return v70 | -65536;
  } else {
    return v70;
  }
};
f2.prototype.readInt32LE = function (p185, p186) {
  p185 >>>= 0;
  if (!p186) {
    f26(p185, 4, this.length);
  }
  return this[p185] | this[p185 + 1] << 8 | this[p185 + 2] << 16 | this[p185 + 3] << 24;
};
f2.prototype.readInt32BE = function (p187, p188) {
  p187 >>>= 0;
  if (!p188) {
    f26(p187, 4, this.length);
  }
  return this[p187] << 24 | this[p187 + 1] << 16 | this[p187 + 2] << 8 | this[p187 + 3];
};
f2.prototype.readBigInt64LE = f87(function (p189) {
  f36(p189 >>>= 0, "offset");
  const v71 = this[p189];
  const v72 = this[p189 + 7];
  if (v71 === undefined || v72 === undefined) {
    f37(p189, this.length - 8);
  }
  const v73 = this[p189 + 4] + this[p189 + 5] * 256 + this[p189 + 6] * 65536 + (v72 << 24);
  return (BigInt(v73) << BigInt(32)) + BigInt(v71 + this[++p189] * 256 + this[++p189] * 65536 + this[++p189] * 16777216);
});
f2.prototype.readBigInt64BE = f87(function (p190) {
  f36(p190 >>>= 0, "offset");
  const v74 = this[p190];
  const v75 = this[p190 + 7];
  if (v74 === undefined || v75 === undefined) {
    f37(p190, this.length - 8);
  }
  const v76 = (v74 << 24) + this[++p190] * 65536 + this[++p190] * 256 + this[++p190];
  return (BigInt(v76) << BigInt(32)) + BigInt(this[++p190] * 16777216 + this[++p190] * 65536 + this[++p190] * 256 + v75);
});
f2.prototype.readFloatLE = function (p191, p192) {
  p191 >>>= 0;
  if (!p192) {
    f26(p191, 4, this.length);
  }
  return js2.read(this, p191, true, 23, 4);
};
f2.prototype.readFloatBE = function (p193, p194) {
  p193 >>>= 0;
  if (!p194) {
    f26(p193, 4, this.length);
  }
  return js2.read(this, p193, false, 23, 4);
};
f2.prototype.readDoubleLE = function (p195, p196) {
  p195 >>>= 0;
  if (!p196) {
    f26(p195, 8, this.length);
  }
  return js2.read(this, p195, true, 52, 8);
};
f2.prototype.readDoubleBE = function (p197, p198) {
  p197 >>>= 0;
  if (!p198) {
    f26(p197, 8, this.length);
  }
  return js2.read(this, p197, false, 52, 8);
};
f2.prototype.writeUintLE = f2.prototype.writeUIntLE = function (p199, p200, p201, p202) {
  p199 = +p199;
  p200 >>>= 0;
  p201 >>>= 0;
  if (!p202) {
    f27(this, p199, p200, p201, Math.pow(2, p201 * 8) - 1, 0);
  }
  let vLN115 = 1;
  let vLN015 = 0;
  for (this[p200] = p199 & 255; ++vLN015 < p201 && (vLN115 *= 256);) {
    this[p200 + vLN015] = p199 / vLN115 & 255;
  }
  return p200 + p201;
};
f2.prototype.writeUintBE = f2.prototype.writeUIntBE = function (p203, p204, p205, p206) {
  p203 = +p203;
  p204 >>>= 0;
  p205 >>>= 0;
  if (!p206) {
    f27(this, p203, p204, p205, Math.pow(2, p205 * 8) - 1, 0);
  }
  let v77 = p205 - 1;
  let vLN116 = 1;
  for (this[p204 + v77] = p203 & 255; --v77 >= 0 && (vLN116 *= 256);) {
    this[p204 + v77] = p203 / vLN116 & 255;
  }
  return p204 + p205;
};
f2.prototype.writeUint8 = f2.prototype.writeUInt8 = function (p207, p208, p209) {
  p207 = +p207;
  p208 >>>= 0;
  if (!p209) {
    f27(this, p207, p208, 1, 255, 0);
  }
  this[p208] = p207 & 255;
  return p208 + 1;
};
f2.prototype.writeUint16LE = f2.prototype.writeUInt16LE = function (p210, p211, p212) {
  p210 = +p210;
  p211 >>>= 0;
  if (!p212) {
    f27(this, p210, p211, 2, 65535, 0);
  }
  this[p211] = p210 & 255;
  this[p211 + 1] = p210 >>> 8;
  return p211 + 2;
};
f2.prototype.writeUint16BE = f2.prototype.writeUInt16BE = function (p213, p214, p215) {
  p213 = +p213;
  p214 >>>= 0;
  if (!p215) {
    f27(this, p213, p214, 2, 65535, 0);
  }
  this[p214] = p213 >>> 8;
  this[p214 + 1] = p213 & 255;
  return p214 + 2;
};
f2.prototype.writeUint32LE = f2.prototype.writeUInt32LE = function (p216, p217, p218) {
  p216 = +p216;
  p217 >>>= 0;
  if (!p218) {
    f27(this, p216, p217, 4, 4294967295, 0);
  }
  this[p217 + 3] = p216 >>> 24;
  this[p217 + 2] = p216 >>> 16;
  this[p217 + 1] = p216 >>> 8;
  this[p217] = p216 & 255;
  return p217 + 4;
};
f2.prototype.writeUint32BE = f2.prototype.writeUInt32BE = function (p219, p220, p221) {
  p219 = +p219;
  p220 >>>= 0;
  if (!p221) {
    f27(this, p219, p220, 4, 4294967295, 0);
  }
  this[p220] = p219 >>> 24;
  this[p220 + 1] = p219 >>> 16;
  this[p220 + 2] = p219 >>> 8;
  this[p220 + 3] = p219 & 255;
  return p220 + 4;
};
f2.prototype.writeBigUInt64LE = f87(function (p222) {
  return f28(this, p222, arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0, BigInt(0), BigInt("0xffffffffffffffff"));
});
f2.prototype.writeBigUInt64BE = f87(function (p223) {
  return f29(this, p223, arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0, BigInt(0), BigInt("0xffffffffffffffff"));
});
f2.prototype.writeIntLE = function (p224, p225, p226, p227) {
  p224 = +p224;
  p225 >>>= 0;
  if (!p227) {
    const v78 = Math.pow(2, p226 * 8 - 1);
    f27(this, p224, p225, p226, v78 - 1, -v78);
  }
  let vLN016 = 0;
  let vLN117 = 1;
  let vLN017 = 0;
  for (this[p225] = p224 & 255; ++vLN016 < p226 && (vLN117 *= 256);) {
    if (p224 < 0 && vLN017 === 0 && this[p225 + vLN016 - 1] !== 0) {
      vLN017 = 1;
    }
    this[p225 + vLN016] = (p224 / vLN117 | 0) - vLN017 & 255;
  }
  return p225 + p226;
};
f2.prototype.writeIntBE = function (p228, p229, p230, p231) {
  p228 = +p228;
  p229 >>>= 0;
  if (!p231) {
    const v79 = Math.pow(2, p230 * 8 - 1);
    f27(this, p228, p229, p230, v79 - 1, -v79);
  }
  let v80 = p230 - 1;
  let vLN118 = 1;
  let vLN018 = 0;
  for (this[p229 + v80] = p228 & 255; --v80 >= 0 && (vLN118 *= 256);) {
    if (p228 < 0 && vLN018 === 0 && this[p229 + v80 + 1] !== 0) {
      vLN018 = 1;
    }
    this[p229 + v80] = (p228 / vLN118 | 0) - vLN018 & 255;
  }
  return p229 + p230;
};
f2.prototype.writeInt8 = function (p232, p233, p234) {
  p232 = +p232;
  p233 >>>= 0;
  if (!p234) {
    f27(this, p232, p233, 1, 127, -128);
  }
  if (p232 < 0) {
    p232 = 255 + p232 + 1;
  }
  this[p233] = p232 & 255;
  return p233 + 1;
};
f2.prototype.writeInt16LE = function (p235, p236, p237) {
  p235 = +p235;
  p236 >>>= 0;
  if (!p237) {
    f27(this, p235, p236, 2, 32767, -32768);
  }
  this[p236] = p235 & 255;
  this[p236 + 1] = p235 >>> 8;
  return p236 + 2;
};
f2.prototype.writeInt16BE = function (p238, p239, p240) {
  p238 = +p238;
  p239 >>>= 0;
  if (!p240) {
    f27(this, p238, p239, 2, 32767, -32768);
  }
  this[p239] = p238 >>> 8;
  this[p239 + 1] = p238 & 255;
  return p239 + 2;
};
f2.prototype.writeInt32LE = function (p241, p242, p243) {
  p241 = +p241;
  p242 >>>= 0;
  if (!p243) {
    f27(this, p241, p242, 4, 2147483647, -2147483648);
  }
  this[p242] = p241 & 255;
  this[p242 + 1] = p241 >>> 8;
  this[p242 + 2] = p241 >>> 16;
  this[p242 + 3] = p241 >>> 24;
  return p242 + 4;
};
f2.prototype.writeInt32BE = function (p244, p245, p246) {
  p244 = +p244;
  p245 >>>= 0;
  if (!p246) {
    f27(this, p244, p245, 4, 2147483647, -2147483648);
  }
  if (p244 < 0) {
    p244 = 4294967295 + p244 + 1;
  }
  this[p245] = p244 >>> 24;
  this[p245 + 1] = p244 >>> 16;
  this[p245 + 2] = p244 >>> 8;
  this[p245 + 3] = p244 & 255;
  return p245 + 4;
};
f2.prototype.writeBigInt64LE = f87(function (p247) {
  return f28(this, p247, arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
});
f2.prototype.writeBigInt64BE = f87(function (p248) {
  return f29(this, p248, arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
});
f2.prototype.writeFloatLE = function (p249, p250, p251) {
  return f31(this, p249, p250, true, p251);
};
f2.prototype.writeFloatBE = function (p252, p253, p254) {
  return f31(this, p252, p253, false, p254);
};
f2.prototype.writeDoubleLE = function (p255, p256, p257) {
  return f32(this, p255, p256, true, p257);
};
f2.prototype.writeDoubleBE = function (p258, p259, p260) {
  return f32(this, p258, p259, false, p260);
};
f2.prototype.YU = function (p261, p262, p263, p264) {
  if (!f2.isBuffer(p261)) {
    throw new TypeError("argument should be a Buffer");
  }
  p263 ||= 0;
  if (!p264 && p264 !== 0) {
    p264 = this.length;
  }
  if (p262 >= p261.length) {
    p262 = p261.length;
  }
  p262 ||= 0;
  if (p264 > 0 && p264 < p263) {
    p264 = p263;
  }
  if (p264 === p263) {
    return 0;
  }
  if (p261.length === 0 || this.length === 0) {
    return 0;
  }
  if (p262 < 0) {
    throw new RangeError("targetStart out of bounds");
  }
  if (p263 < 0 || p263 >= this.length) {
    throw new RangeError("Index out of range");
  }
  if (p264 < 0) {
    throw new RangeError("sourceEnd out of bounds");
  }
  if (p264 > this.length) {
    p264 = this.length;
  }
  if (p261.length - p262 < p264 - p263) {
    p264 = p261.length - p262 + p263;
  }
  const v81 = p264 - p263;
  if (this === p261 && typeof Uint8Array.prototype.copyWithin === "function") {
    this.copyWithin(p262, p263, p264);
  } else {
    Uint8Array.prototype.set.call(p261, this.subarray(p263, p264), p262);
  }
  return v81;
};
f2.prototype.fill = function (p265, p266, p267, p268) {
  if (typeof p265 === "string") {
    if (typeof p266 === "string") {
      p268 = p266;
      p266 = 0;
      p267 = this.length;
    } else if (typeof p267 === "string") {
      p268 = p267;
      p267 = this.length;
    }
    if (p268 !== undefined && typeof p268 !== "string") {
      throw new TypeError("encoding must be a string");
    }
    if (typeof p268 === "string" && !f2.isEncoding(p268)) {
      throw new TypeError("Unknown encoding: " + p268);
    }
    if (p265.length === 1) {
      const v82 = p265.charCodeAt(0);
      if (p268 === "utf8" && v82 < 128 || p268 === "latin1") {
        p265 = v82;
      }
    }
  } else if (typeof p265 === "number") {
    p265 &= 255;
  } else if (typeof p265 === "boolean") {
    p265 = Number(p265);
  }
  if (p266 < 0 || this.length < p266 || this.length < p267) {
    throw new RangeError("Out of range index");
  }
  if (p267 <= p266) {
    return this;
  }
  let v83;
  p266 >>>= 0;
  p267 = p267 === undefined ? this.length : p267 >>> 0;
  p265 ||= 0;
  if (typeof p265 === "number") {
    for (v83 = p266; v83 < p267; ++v83) {
      this[v83] = p265;
    }
  } else {
    const v84 = f2.isBuffer(p265) ? p265 : f2.from(p265, p268);
    const v85 = v84.length;
    if (v85 === 0) {
      throw new TypeError("The value \"" + p265 + "\" is invalid for argument \"value\"");
    }
    for (v83 = 0; v83 < p267 - p266; ++v83) {
      this[v83 + p266] = v84[v83 % v85];
    }
  }
  return this;
};
const vO2 = {};
function f33(p269, p270, p271) {
  vO2[p269] = class extends p271 {
    constructor() {
      super();
      Object.defineProperty(this, "message", {
        value: p270.apply(this, arguments),
        writable: true,
        configurable: true
      });
      this.name = `${this.name} [${p269}]`;
      this.stack;
      delete this.name;
    }
    get code() {
      return p269;
    }
    set code(p272) {
      Object.defineProperty(this, "code", {
        configurable: true,
        enumerable: true,
        value: p272,
        writable: true
      });
    }
    toString() {
      return `${this.name} [${p269}]: ${this.message}`;
    }
  };
}
function f34(p273) {
  let vLS14 = "";
  let v86 = p273.length;
  const v87 = p273[0] === "-" ? 1 : 0;
  for (; v86 >= v87 + 4; v86 -= 3) {
    vLS14 = `_${p273.slice(v86 - 3, v86)}${vLS14}`;
  }
  return `${p273.slice(0, v86)}${vLS14}`;
}
function f35(p274, p275, p276, p277, p278, p279) {
  if (p274 > p276 || p274 < p275) {
    const v88 = typeof p275 === "bigint" ? "n" : "";
    let v89;
    v89 = p279 > 3 ? p275 === 0 || p275 === BigInt(0) ? `>= 0${v88} and < 2${v88} ** ${(p279 + 1) * 8}${v88}` : `>= -(2${v88} ** ${(p279 + 1) * 8 - 1}${v88}) and < 2 ** ${(p279 + 1) * 8 - 1}${v88}` : `>= ${p275}${v88} and <= ${p276}${v88}`;
    throw new vO2.ERR_OUT_OF_RANGE("value", v89, p274);
  }
  (function (p280, p281, p282) {
    f36(p281, "offset");
    if (p280[p281] === undefined || p280[p281 + p282] === undefined) {
      f37(p281, p280.length - (p282 + 1));
    }
  })(p277, p278, p279);
}
function f36(p283, p284) {
  if (typeof p283 !== "number") {
    throw new vO2.ERR_INVALID_ARG_TYPE(p284, "number", p283);
  }
}
function f37(p285, p286, p287) {
  if (Math.floor(p285) !== p285) {
    f36(p285, p287);
    throw new vO2.ERR_OUT_OF_RANGE(p287 || "offset", "an integer", p285);
  }
  if (p286 < 0) {
    throw new vO2.ERR_BUFFER_OUT_OF_BOUNDS();
  }
  throw new vO2.ERR_OUT_OF_RANGE(p287 || "offset", `>= ${p287 ? 1 : 0} and <= ${p286}`, p285);
}
f33("ERR_BUFFER_OUT_OF_BOUNDS", function (p288) {
  if (p288) {
    return `${p288} is outside of buffer bounds`;
  } else {
    return "Attempt to access memory outside buffer bounds";
  }
}, RangeError);
f33("ERR_INVALID_ARG_TYPE", function (p289, p290) {
  return `The "${p289}" argument must be of type number. Received type ${typeof p290}`;
}, TypeError);
f33("ERR_OUT_OF_RANGE", function (p291, p292, p293) {
  let v90 = `The value of "${p291}" is out of range.`;
  let vP293 = p293;
  if (Number.isInteger(p293) && Math.abs(p293) > 4294967296) {
    vP293 = f34(String(p293));
  } else if (typeof p293 === "bigint") {
    vP293 = String(p293);
    if (p293 > BigInt(2) ** BigInt(32) || p293 < -(BigInt(2) ** BigInt(32))) {
      vP293 = f34(vP293);
    }
    vP293 += "n";
  }
  v90 += ` It must be ${p292}. Received ${vP293}`;
  return v90;
}, RangeError);
const v91 = /[^+/0-9A-Za-z-_]/g;
function f38(p294, p295) {
  let v92;
  p295 = p295 || Infinity;
  const v93 = p294.length;
  let v94 = null;
  const vA4 = [];
  for (let vLN019 = 0; vLN019 < v93; ++vLN019) {
    v92 = p294.charCodeAt(vLN019);
    if (v92 > 55295 && v92 < 57344) {
      if (!v94) {
        if (v92 > 56319) {
          if ((p295 -= 3) > -1) {
            vA4.push(239, 191, 189);
          }
          continue;
        }
        if (vLN019 + 1 === v93) {
          if ((p295 -= 3) > -1) {
            vA4.push(239, 191, 189);
          }
          continue;
        }
        v94 = v92;
        continue;
      }
      if (v92 < 56320) {
        if ((p295 -= 3) > -1) {
          vA4.push(239, 191, 189);
        }
        v94 = v92;
        continue;
      }
      v92 = 65536 + (v94 - 55296 << 10 | v92 - 56320);
    } else if (v94 && (p295 -= 3) > -1) {
      vA4.push(239, 191, 189);
    }
    v94 = null;
    if (v92 < 128) {
      if ((p295 -= 1) < 0) {
        break;
      }
      vA4.push(v92);
    } else if (v92 < 2048) {
      if ((p295 -= 2) < 0) {
        break;
      }
      vA4.push(v92 >> 6 | 192, v92 & 63 | 128);
    } else if (v92 < 65536) {
      if ((p295 -= 3) < 0) {
        break;
      }
      vA4.push(v92 >> 12 | 224, v92 >> 6 & 63 | 128, v92 & 63 | 128);
    } else {
      if (!(v92 < 1114112)) {
        throw new Error("Invalid code point");
      }
      if ((p295 -= 4) < 0) {
        break;
      }
      vA4.push(v92 >> 18 | 240, v92 >> 12 & 63 | 128, v92 >> 6 & 63 | 128, v92 & 63 | 128);
    }
  }
  return vA4;
}
function f39(p296) {
  return js.toByteArray(function (p297) {
    if ((p297 = (p297 = p297.split("=")[0]).trim().replace(v91, "")).length < 2) {
      return "";
    }
    while (p297.length % 4 !== 0) {
      p297 += "=";
    }
    return p297;
  }(p296));
}
function f40(p298, p299, p300, p301) {
  let v95;
  for (v95 = 0; v95 < p301 && !(v95 + p300 >= p299.length) && !(v95 >= p298.length); ++v95) {
    p299[v95 + p300] = p298[v95];
  }
  return v95;
}
function f85(p302, p303) {
  return p302 instanceof p303 || p302 != null && p302.constructor != null && p302.constructor.name != null && p302.constructor.name === p303.name;
}
function f86(p304) {
  return p304 !== p304;
}
const vF5 = function () {
  const vLS0123456789abcdef2 = "0123456789abcdef";
  const v96 = new Array(256);
  for (let vLN020 = 0; vLN020 < 16; ++vLN020) {
    const v97 = vLN020 * 16;
    for (let vLN021 = 0; vLN021 < 16; ++vLN021) {
      v96[v97 + vLN021] = vLS0123456789abcdef2[vLN020] + vLS0123456789abcdef2[vLN021];
    }
  }
  return v96;
}();
function f87(p305) {
  if (typeof BigInt === "undefined") {
    return f88;
  } else {
    return p305;
  }
}
function f88() {
  throw new Error("BigInt not supported");
}