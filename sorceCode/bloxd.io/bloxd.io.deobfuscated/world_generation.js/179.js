var v = require("./187.js").HU;
var v2 = v.isEncoding || function (p) {
  switch ((p = "" + p) && p.toLowerCase()) {
    case "hex":
    case "utf8":
    case "utf-8":
    case "ascii":
    case "binary":
    case "base64":
    case "ucs2":
    case "ucs-2":
    case "utf16le":
    case "utf-16le":
    case "raw":
      return true;
    default:
      return false;
  }
};
function f(p2) {
  var v3;
  this.encoding = function (p3) {
    var vF = function (p4) {
      if (!p4) {
        return "utf8";
      }
      var v4;
      while (true) {
        switch (p4) {
          case "utf8":
          case "utf-8":
            return "utf8";
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return "utf16le";
          case "latin1":
          case "binary":
            return "latin1";
          case "base64":
          case "ascii":
          case "hex":
            return p4;
          default:
            if (v4) {
              return;
            }
            p4 = ("" + p4).toLowerCase();
            v4 = true;
        }
      }
    }(p3);
    if (typeof vF !== "string" && (v.isEncoding === v2 || !v2(p3))) {
      throw new Error("Unknown encoding: " + p3);
    }
    return vF || p3;
  }(p2);
  switch (this.encoding) {
    case "utf16le":
      this.text = f4;
      this.end = f5;
      v3 = 4;
      break;
    case "utf8":
      this.fillLast = f3;
      v3 = 4;
      break;
    case "base64":
      this.text = f6;
      this.end = f7;
      v3 = 3;
      break;
    default:
      this.write = f8;
      this.end = f9;
      return;
  }
  this.lastNeed = 0;
  this.lastTotal = 0;
  this.lastChar = v.allocUnsafe(v3);
}
function f2(p5) {
  if (p5 <= 127) {
    return 0;
  } else if (p5 >> 5 === 6) {
    return 2;
  } else if (p5 >> 4 === 14) {
    return 3;
  } else if (p5 >> 3 === 30) {
    return 4;
  } else if (p5 >> 6 === 2) {
    return -1;
  } else {
    return -2;
  }
}
function f3(p6) {
  var v5 = this.lastTotal - this.lastNeed;
  var vF2 = function (p7, p8) {
    if ((p8[0] & 192) !== 128) {
      p7.lastNeed = 0;
      return "ufffd";
    }
    if (p7.lastNeed > 1 && p8.length > 1) {
      if ((p8[1] & 192) !== 128) {
        p7.lastNeed = 1;
        return "ufffd";
      }
      if (p7.lastNeed > 2 && p8.length > 2 && (p8[2] & 192) !== 128) {
        p7.lastNeed = 2;
        return "ufffd";
      }
    }
  }(this, p6);
  if (vF2 !== undefined) {
    return vF2;
  } else if (this.lastNeed <= p6.length) {
    p6.YU(this.lastChar, v5, 0, this.lastNeed);
    return this.lastChar.toString(this.encoding, 0, this.lastTotal);
  } else {
    p6.YU(this.lastChar, v5, 0, p6.length);
    this.lastNeed -= p6.length;
    return;
  }
}
function f4(p9, p10) {
  if ((p9.length - p10) % 2 === 0) {
    var v6 = p9.toString("utf16le", p10);
    if (v6) {
      var v7 = v6.charCodeAt(v6.length - 1);
      if (v7 >= 55296 && v7 <= 56319) {
        this.lastNeed = 2;
        this.lastTotal = 4;
        this.lastChar[0] = p9[p9.length - 2];
        this.lastChar[1] = p9[p9.length - 1];
        return v6.slice(0, -1);
      }
    }
    return v6;
  }
  this.lastNeed = 1;
  this.lastTotal = 2;
  this.lastChar[0] = p9[p9.length - 1];
  return p9.toString("utf16le", p10, p9.length - 1);
}
function f5(p11) {
  var v8 = p11 && p11.length ? this.write(p11) : "";
  if (this.lastNeed) {
    var v9 = this.lastTotal - this.lastNeed;
    return v8 + this.lastChar.toString("utf16le", 0, v9);
  }
  return v8;
}
function f6(p12, p13) {
  var v10 = (p12.length - p13) % 3;
  if (v10 === 0) {
    return p12.toString("base64", p13);
  } else {
    this.lastNeed = 3 - v10;
    this.lastTotal = 3;
    if (v10 === 1) {
      this.lastChar[0] = p12[p12.length - 1];
    } else {
      this.lastChar[0] = p12[p12.length - 2];
      this.lastChar[1] = p12[p12.length - 1];
    }
    return p12.toString("base64", p13, p12.length - v10);
  }
}
function f7(p14) {
  var v11 = p14 && p14.length ? this.write(p14) : "";
  if (this.lastNeed) {
    return v11 + this.lastChar.toString("base64", 0, 3 - this.lastNeed);
  } else {
    return v11;
  }
}
function f8(p15) {
  return p15.toString(this.encoding);
}
function f9(p16) {
  if (p16 && p16.length) {
    return this.write(p16);
  } else {
    return "";
  }
}
exports.c = f;
f.prototype.write = function (p17) {
  if (p17.length === 0) {
    return "";
  }
  var v12;
  var v13;
  if (this.lastNeed) {
    if ((v12 = this.fillLast(p17)) === undefined) {
      return "";
    }
    v13 = this.lastNeed;
    this.lastNeed = 0;
  } else {
    v13 = 0;
  }
  if (v13 < p17.length) {
    if (v12) {
      return v12 + this.text(p17, v13);
    } else {
      return this.text(p17, v13);
    }
  } else {
    return v12 || "";
  }
};
f.prototype.end = function (p18) {
  var v14 = p18 && p18.length ? this.write(p18) : "";
  if (this.lastNeed) {
    return v14 + "ufffd";
  } else {
    return v14;
  }
};
f.prototype.text = function (p19, p20) {
  var vF3 = function (p21, p22, p23) {
    var v15 = p22.length - 1;
    if (v15 < p23) {
      return 0;
    }
    var vF22 = f2(p22[v15]);
    if (vF22 >= 0) {
      if (vF22 > 0) {
        p21.lastNeed = vF22 - 1;
      }
      return vF22;
    }
    if (--v15 < p23 || vF22 === -2) {
      return 0;
    }
    vF22 = f2(p22[v15]);
    if (vF22 >= 0) {
      if (vF22 > 0) {
        p21.lastNeed = vF22 - 2;
      }
      return vF22;
    }
    if (--v15 < p23 || vF22 === -2) {
      return 0;
    }
    vF22 = f2(p22[v15]);
    if (vF22 >= 0) {
      if (vF22 > 0) {
        if (vF22 === 2) {
          vF22 = 0;
        } else {
          p21.lastNeed = vF22 - 3;
        }
      }
      return vF22;
    }
    return 0;
  }(this, p19, p20);
  if (!this.lastNeed) {
    return p19.toString("utf8", p20);
  }
  this.lastTotal = vF3;
  var v16 = p19.length - (vF3 - this.lastNeed);
  p19.YU(this.lastChar, 0, v16);
  return p19.toString("utf8", p20, v16);
};
f.prototype.fillLast = function (p24) {
  if (this.lastNeed <= p24.length) {
    p24.YU(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
    return this.lastChar.toString(this.encoding, 0, this.lastTotal);
  }
  p24.YU(this.lastChar, this.lastTotal - this.lastNeed, 0, p24.length);
  this.lastNeed -= p24.length;
};