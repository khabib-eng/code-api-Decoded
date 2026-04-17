var fC = require("./1053.js").iI;
var ky = fC.isEncoding || function (CC) {
  switch ((CC = "" + CC) && CC.toLowerCase()) {
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
      return !0;
    default:
      return !1;
  }
};
function gC(CC) {
  var yC;
  this.encoding = function (CC) {
    var yC = function (CC) {
      if (!CC) {
        return "utf8";
      }
      for (var yC;;) {
        switch (CC) {
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
            return CC;
          default:
            if (yC) {
              return;
            }
            CC = ("" + CC).toLowerCase();
            yC = !0;
        }
      }
    }(CC);
    if ("string" !== typeof yC && (fC.isEncoding === ky || !ky(CC))) {
      throw new Error("Unknown encoding: " + CC);
    }
    return yC || CC;
  }(CC);
  switch (this.encoding) {
    case "utf16le":
      this.text = XC;
      this.end = iy;
      yC = 4;
      break;
    case "utf8":
      this.fillLast = my;
      yC = 4;
      break;
    case "base64":
      this.text = LC;
      this.end = YC;
      yC = 3;
      break;
    default:
      this.write = bC;
      return void (this.end = rC);
  }
  this.lastNeed = 0;
  this.lastTotal = 0;
  this.lastChar = fC.allocUnsafe(yC);
}
function AC(CC) {
  return CC <= 127 ? 0 : CC >> 5 === 6 ? 2 : CC >> 4 === 14 ? 3 : CC >> 3 === 30 ? 4 : CC >> 6 === 2 ? -1 : -2;
}
function my(CC) {
  var yC = this.lastTotal - this.lastNeed;
  var IC = function (CC, yC) {
    if (128 !== (192 & yC[0])) {
      CC.lastNeed = 0;
      return "\ufffd";
    }
    if (CC.lastNeed > 1 && yC.length > 1) {
      if (128 !== (192 & yC[1])) {
        CC.lastNeed = 1;
        return "\ufffd";
      }
      if (CC.lastNeed > 2 && yC.length > 2 && 128 !== (192 & yC[2])) {
        CC.lastNeed = 2;
        return "\ufffd";
      }
    }
  }(this, CC);
  return void 0 !== IC ? IC : this.lastNeed <= CC.length ? (CC.Ly(this.lastChar, yC, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal)) : (CC.Ly(this.lastChar, yC, 0, CC.length), void (this.lastNeed -= CC.length));
}
function XC(CC, yC) {
  if ((CC.length - yC) % 2 === 0) {
    var IC = CC.toString("utf16le", yC);
    if (IC) {
      var fC = IC.charCodeAt(IC.length - 1);
      if (fC >= 55296 && fC <= 56319) {
        this.lastNeed = 2;
        this.lastTotal = 4;
        this.lastChar[0] = CC[CC.length - 2];
        this.lastChar[1] = CC[CC.length - 1];
        return IC.slice(0, -1);
      }
    }
    return IC;
  }
  this.lastNeed = 1;
  this.lastTotal = 2;
  this.lastChar[0] = CC[CC.length - 1];
  return CC.toString("utf16le", yC, CC.length - 1);
}
function iy(CC) {
  var yC = CC && CC.length ? this.write(CC) : "";
  if (this.lastNeed) {
    var IC = this.lastTotal - this.lastNeed;
    return yC + this.lastChar.toString("utf16le", 0, IC);
  }
  return yC;
}
function LC(CC, yC) {
  var IC = (CC.length - yC) % 3;
  return 0 === IC ? CC.toString("base64", yC) : (this.lastNeed = 3 - IC, this.lastTotal = 3, 1 === IC ? this.lastChar[0] = CC[CC.length - 1] : (this.lastChar[0] = CC[CC.length - 2], this.lastChar[1] = CC[CC.length - 1]), CC.toString("base64", yC, CC.length - IC));
}
function YC(CC) {
  var yC = CC && CC.length ? this.write(CC) : "";
  return this.lastNeed ? yC + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : yC;
}
function bC(CC) {
  return CC.toString(this.encoding);
}
function rC(CC) {
  return CC && CC.length ? this.write(CC) : "";
}
exports.d = gC;
gC.prototype.write = function (CC) {
  if (0 === CC.length) {
    return "";
  }
  var yC;
  var IC;
  if (this.lastNeed) {
    if (void 0 === (yC = this.fillLast(CC))) {
      return "";
    }
    IC = this.lastNeed;
    this.lastNeed = 0;
  } else {
    IC = 0;
  }
  return IC < CC.length ? yC ? yC + this.text(CC, IC) : this.text(CC, IC) : yC || "";
};
gC.prototype.end = function (CC) {
  var yC = CC && CC.length ? this.write(CC) : "";
  return this.lastNeed ? yC + "\ufffd" : yC;
};
gC.prototype.text = function (CC, yC) {
  var IC = function (CC, yC, IC) {
    var fC = yC.length - 1;
    if (fC < IC) {
      return 0;
    }
    var ky = AC(yC[fC]);
    if (ky >= 0) {
      ky > 0 && (CC.lastNeed = ky - 1);
      return ky;
    }
    if (--fC < IC || -2 === ky) {
      return 0;
    }
    ky = AC(yC[fC]);
    if (ky >= 0) {
      ky > 0 && (CC.lastNeed = ky - 2);
      return ky;
    }
    if (--fC < IC || -2 === ky) {
      return 0;
    }
    ky = AC(yC[fC]);
    if (ky >= 0) {
      ky > 0 && (2 === ky ? ky = 0 : CC.lastNeed = ky - 3);
      return ky;
    }
    return 0;
  }(this, CC, yC);
  if (!this.lastNeed) {
    return CC.toString("utf8", yC);
  }
  this.lastTotal = IC;
  var fC = CC.length - (IC - this.lastNeed);
  CC.Ly(this.lastChar, 0, fC);
  return CC.toString("utf8", yC, fC);
};
gC.prototype.fillLast = function (CC) {
  if (this.lastNeed <= CC.length) {
    CC.Ly(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
    return this.lastChar.toString(this.encoding, 0, this.lastTotal);
  }
  CC.Ly(this.lastChar, this.lastTotal - this.lastNeed, 0, CC.length);
  this.lastNeed -= CC.length;
};