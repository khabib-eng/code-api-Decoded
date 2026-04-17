var fC = require("./675.js");
var ky = require("./691.js");
var gC = require("./700.js");
var AC = fC.iI;
var my = new GC(4096);
var XC = /^[A-Za-z_][A-Za-z0-9_]*$/;
var iy = gC.format;
function LC(CC) {
  return "function" == typeof AC.alloc ? AC.alloc(CC) : new AC(CC);
}
function YC(CC, yC) {
  return "function" == typeof AC.from ? AC.from(CC, yC) : new AC(CC, yC);
}
function bC(CC) {
  return CC.charAt(0).toUpperCase() + CC.slice(1);
}
function rC(CC) {
  return XC.test(CC);
}
function GC(CC) {
  this._len = 0 | CC;
  this._pos = 0;
  this._slab = LC(this._len);
}
function eC(CC) {
  var yC = Math.pow(2, 31);
  var IC = Math.floor(CC || Math.random() * (yC - 1));
  this._max = yC;
  this._nextInt = function () {
    return IC = (1103515245 * IC + 12345) % yC;
  };
}
function OC() {
  this._index = 0;
  this._items = [];
}
function SC(CC, yC) {
  this.buf = CC;
  this.pos = 0 | yC;
  if (this.pos < 0) {
    throw new Error("negative offset");
  }
}
function TC(CC, yC) {
  for (; yC--;) {
    CC[yC] = ~CC[yC];
  }
}
GC.prototype.alloc = function (CC) {
  if (CC < 0) {
    throw new Error("negative length");
  }
  var yC = this._len;
  return CC > yC ? LC(CC) : (this._pos + CC > yC && (this._slab = LC(yC), this._pos = 0), this._slab.slice(this._pos, this._pos += CC));
};
eC.prototype.nextBoolean = function () {
  return !!(this._nextInt() % 2);
};
eC.prototype.nextInt = function (CC, yC) {
  void 0 === yC && (yC = CC, CC = 0);
  yC = void 0 === yC ? this._max : yC;
  return CC + Math.floor(this.nextFloat() * (yC - CC));
};
eC.prototype.nextFloat = function (CC, yC) {
  void 0 === yC && (yC = CC, CC = 0);
  return CC + ((yC = void 0 === yC ? 1 : yC) - CC) * this._nextInt() / this._max;
};
eC.prototype.nextString = function (CC, yC) {
  CC |= 0;
  var IC = "";
  (yC = yC || "aA").indexOf("a") > -1 && (IC += "abcdefghijklmnopqrstuvwxyz");
  yC.indexOf("A") > -1 && (IC += "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  yC.indexOf("#") > -1 && (IC += "0123456789");
  yC.indexOf("!") > -1 && (IC += "~`!@#$%^&*()_+-={}[]:\";'<>?,./|\\");
  for (var fC = [], ky = 0; ky < CC; ky++) {
    fC.push(this.choice(IC));
  }
  return fC.join("");
};
eC.prototype.nextBuffer = function (CC) {
  var yC;
  var IC = [];
  for (yC = 0; yC < CC; yC++) {
    IC.push(this.nextInt(256));
  }
  return YC(IC);
};
eC.prototype.choice = function (CC) {
  var yC = CC.length;
  if (!yC) {
    throw new Error("choosing from empty array");
  }
  return CC[this.nextInt(yC)];
};
OC.prototype.push = function (CC) {
  var yC;
  var IC = this._items;
  var fC = 0 | IC.length;
  for (IC.push(CC); fC > 0 && IC[fC].index < IC[yC = fC - 1 >> 1].index;) {
    CC = IC[fC];
    IC[fC] = IC[yC];
    IC[yC] = CC;
    fC = yC;
  }
};
OC.prototype.pop = function () {
  var CC = this._items;
  var yC = CC.length - 1 | 0;
  var IC = CC[0];
  if (!IC || IC.index > this._index) {
    return null;
  }
  this._index++;
  if (!yC) {
    CC.pop();
    return IC;
  }
  CC[0] = CC.pop();
  for (var fC, ky, gC, AC, my, XC, iy, LC = yC >> 1, YC = 0; YC < LC && (AC = CC[YC], ky = YC + 1 << 1, XC = CC[fC = 1 + (YC << 1)], !(iy = CC[ky]) || XC.index <= iy.index ? (my = XC, gC = fC) : (my = iy, gC = ky), !(my.index >= AC.index));) {
    CC[gC] = AC;
    CC[YC] = my;
    YC = gC;
  }
  return IC;
};
SC.prototype.isValid = function () {
  return this.pos <= this.buf.length;
};
SC.prototype._invalidate = function () {
  this.pos = this.buf.length + 1;
};
SC.prototype.readBoolean = function () {
  return !!this.buf[this.pos++];
};
SC.prototype.skipBoolean = function () {
  this.pos++;
};
SC.prototype.writeBoolean = function (CC) {
  this.buf[this.pos++] = !!CC;
};
SC.prototype.readInt = SC.prototype.readLong = function () {
  var CC;
  var yC;
  var IC;
  var fC;
  var ky = 0;
  var gC = 0;
  var AC = this.buf;
  do {
    yC = 128 & (CC = AC[this.pos++]);
    ky |= (127 & CC) << gC;
    gC += 7;
  } while (yC && gC < 28);
  if (yC) {
    IC = ky;
    fC = 268435456;
    do {
      IC += (127 & (CC = AC[this.pos++])) * fC;
      fC *= 128;
    } while (128 & CC);
    return (IC % 2 ? -(IC + 1) : IC) / 2;
  }
  return ky >> 1 ^ -(1 & ky);
};
SC.prototype.skipInt = SC.prototype.skipLong = function () {
  for (var CC = this.buf; 128 & CC[this.pos++];);
};
SC.prototype.writeInt = SC.prototype.writeLong = function (CC) {
  var yC;
  var IC;
  var fC = this.buf;
  if (CC >= -1073741824 && CC < 1073741824) {
    IC = CC >= 0 ? CC << 1 : ~CC << 1 | 1;
    do {
      fC[this.pos] = 127 & IC;
      IC >>= 7;
    } while (IC && (fC[this.pos++] |= 128));
  } else {
    yC = CC >= 0 ? 2 * CC : 2 * -CC - 1;
    do {
      fC[this.pos] = 127 & yC;
      yC /= 128;
    } while (yC >= 1 && (fC[this.pos++] |= 128));
  }
  this.pos++;
};
SC.prototype.readFloat = function () {
  var CC = this.buf;
  var yC = this.pos;
  this.pos += 4;
  return this.pos > CC.length ? 0 : this.buf.readFloatLE(yC);
};
SC.prototype.skipFloat = function () {
  this.pos += 4;
};
SC.prototype.writeFloat = function (CC) {
  var yC = this.buf;
  var IC = this.pos;
  this.pos += 4;
  if (!(this.pos > yC.length)) {
    return this.buf.writeFloatLE(CC, IC);
  }
};
SC.prototype.readDouble = function () {
  var CC = this.buf;
  var yC = this.pos;
  this.pos += 8;
  return this.pos > CC.length ? 0 : this.buf.readDoubleLE(yC);
};
SC.prototype.skipDouble = function () {
  this.pos += 8;
};
SC.prototype.writeDouble = function (CC) {
  var yC = this.buf;
  var IC = this.pos;
  this.pos += 8;
  if (!(this.pos > yC.length)) {
    return this.buf.writeDoubleLE(CC, IC);
  }
};
SC.prototype.readFixed = function (CC) {
  var yC = this.pos;
  this.pos += CC;
  if (!(this.pos > this.buf.length)) {
    var IC = my.alloc(CC);
    this.buf.Ly(IC, 0, yC, yC + CC);
    return IC;
  }
};
SC.prototype.skipFixed = function (CC) {
  this.pos += CC;
};
SC.prototype.writeFixed = function (CC, yC) {
  yC = yC || CC.length;
  var IC = this.pos;
  this.pos += yC;
  this.pos > this.buf.length || CC.Ly(this.buf, IC, 0, yC);
};
SC.prototype.readBytes = function () {
  var CC = this.readLong();
  if (!(CC < 0)) {
    return this.readFixed(CC);
  }
  this._invalidate();
};
SC.prototype.skipBytes = function () {
  var CC = this.readLong();
  CC < 0 ? this._invalidate() : this.pos += CC;
};
SC.prototype.writeBytes = function (CC) {
  var yC = CC.length;
  this.writeLong(yC);
  this.writeFixed(CC, yC);
};
"function" == typeof AC.prototype.utf8Slice ? SC.prototype.readString = function () {
  var CC = this.readLong();
  if (CC < 0) {
    this._invalidate();
    return "";
  }
  var yC = this.pos;
  var IC = this.buf;
  this.pos += CC;
  return this.pos > IC.length ? void 0 : this.buf.utf8Slice(yC, yC + CC);
} : SC.prototype.readString = function () {
  var CC = this.readLong();
  if (CC < 0) {
    this._invalidate();
    return "";
  }
  var yC = this.pos;
  var IC = this.buf;
  this.pos += CC;
  return this.pos > IC.length ? void 0 : this.buf.slice(yC, yC + CC).toString();
};
SC.prototype.skipString = function () {
  var CC = this.readLong();
  CC < 0 ? this._invalidate() : this.pos += CC;
};
SC.prototype.writeString = function (CC) {
  var yC = AC.byteLength(CC);
  var IC = this.buf;
  this.writeLong(yC);
  var fC;
  var ky;
  var gC;
  var my;
  var XC = this.pos;
  this.pos += yC;
  if (!(this.pos > IC.length)) {
    if (yC > 64 && "function" == typeof AC.prototype.utf8Write) {
      IC.utf8Write(CC, XC, yC);
    } else {
      fC = 0;
      ky = yC;
      for (; fC < ky; fC++) {
        (gC = CC.charCodeAt(fC)) < 128 ? IC[XC++] = gC : gC < 2048 ? (IC[XC++] = gC >> 6 | 192, IC[XC++] = 63 & gC | 128) : 55296 === (64512 & gC) && 56320 === (64512 & (my = CC.charCodeAt(fC + 1))) ? (gC = 65536 + ((1023 & gC) << 10) + (1023 & my), fC++, IC[XC++] = gC >> 18 | 240, IC[XC++] = gC >> 12 & 63 | 128, IC[XC++] = gC >> 6 & 63 | 128, IC[XC++] = 63 & gC | 128) : (IC[XC++] = gC >> 12 | 224, IC[XC++] = gC >> 6 & 63 | 128, IC[XC++] = 63 & gC | 128);
      }
    }
  }
};
"function" == typeof AC.prototype.latin1Write ? SC.prototype.writeBinary = function (CC, yC) {
  var IC = this.pos;
  this.pos += yC;
  this.pos > this.buf.length || this.buf.latin1Write(CC, IC, yC);
} : "function" == typeof AC.prototype.binaryWrite ? SC.prototype.writeBinary = function (CC, yC) {
  var IC = this.pos;
  this.pos += yC;
  this.pos > this.buf.length || this.buf.binaryWrite(CC, IC, yC);
} : SC.prototype.writeBinary = function (CC, yC) {
  var IC = this.pos;
  this.pos += yC;
  this.pos > this.buf.length || this.buf.write(CC, IC, yC, "binary");
};
SC.prototype.matchBoolean = function (CC) {
  return this.buf[this.pos++] - CC.buf[CC.pos++];
};
SC.prototype.matchInt = SC.prototype.matchLong = function (CC) {
  var yC = this.readLong();
  var IC = CC.readLong();
  return yC === IC ? 0 : yC < IC ? -1 : 1;
};
SC.prototype.matchFloat = function (CC) {
  var yC = this.readFloat();
  var IC = CC.readFloat();
  return yC === IC ? 0 : yC < IC ? -1 : 1;
};
SC.prototype.matchDouble = function (CC) {
  var yC = this.readDouble();
  var IC = CC.readDouble();
  return yC === IC ? 0 : yC < IC ? -1 : 1;
};
SC.prototype.matchFixed = function (CC, yC) {
  return this.readFixed(yC).compare(CC.readFixed(yC));
};
SC.prototype.matchBytes = SC.prototype.matchString = function (CC) {
  var yC = this.readLong();
  var IC = this.pos;
  this.pos += yC;
  var fC = CC.readLong();
  var ky = CC.pos;
  CC.pos += fC;
  var gC = this.buf.slice(IC, this.pos);
  var AC = CC.buf.slice(ky, CC.pos);
  return gC.compare(AC);
};
SC.prototype.unpackLongBytes = function () {
  var CC;
  var yC;
  var IC = LC(8);
  var fC = 0;
  var ky = 0;
  var gC = 6;
  var AC = this.buf;
  yC = 1 & (CC = AC[this.pos++]);
  IC.fill(0);
  fC |= (127 & CC) >> 1;
  for (; 128 & CC;) {
    fC |= (127 & (CC = AC[this.pos++])) << gC;
    (gC += 7) >= 8 && (gC -= 8, IC[ky++] = fC, fC >>= 8);
  }
  IC[ky] = fC;
  yC && TC(IC, 8);
  return IC;
};
SC.prototype.packLongBytes = function (CC) {
  var yC;
  var IC = (128 & CC[7]) >> 7;
  var fC = this.buf;
  var ky = 1;
  var gC = 0;
  var AC = 3;
  IC ? (TC(CC, 8), yC = 1) : yC = 0;
  for (var my = [CC.readUIntLE(0, 3), CC.readUIntLE(3, 3), CC.readUIntLE(6, 2)]; AC && !my[--AC];);
  for (; gC < AC;) {
    yC |= my[gC++] << ky;
    ky += 24;
    for (; ky > 7;) {
      fC[this.pos++] = 127 & yC | 128;
      yC >>= 7;
      ky -= 7;
    }
  }
  yC |= my[AC] << ky;
  do {
    fC[this.pos] = 127 & yC;
    yC >>= 7;
  } while (yC && (fC[this.pos++] |= 128));
  this.pos++;
  IC && TC(CC, 8);
};
module.exports = {
  abstractFunction: function () {
    throw new Error("abstract");
  },
  addDeprecatedGetters: function (CC, yC) {
    var IC;
    var fC;
    var ky;
    var AC;
    var my = CC.prototype;
    IC = 0;
    fC = yC.length;
    for (; IC < fC; IC++) {
      my[AC = "get" + bC(ky = yC[IC])] = gC.deprecate(XC(ky), "use `." + ky + "` instead of `." + AC + "()`");
    }
    function XC(CC) {
      return function () {
        var yC = this[CC];
        return "function" == typeof yC ? yC.apply(this, arguments) : yC;
      };
    }
  },
  bufferFrom: YC,
  capitalize: bC,
  copyOwnProperties: function (CC, yC, IC) {
    var fC;
    var ky;
    var gC;
    var AC = Object.getOwnPropertyNames(CC);
    fC = 0;
    ky = AC.length;
    for (; fC < ky; fC++) {
      gC = AC[fC];
      if (!yC.hasOwnProperty(gC) || IC) {
        var my = Object.getOwnPropertyDescriptor(CC, gC);
        Object.defineProperty(yC, gC, my);
      }
    }
    return yC;
  },
  getHash: function (CC, yC) {
    yC = yC || "md5";
    var IC = ky.createHash(yC);
    IC.end(CC);
    return IC.read();
  },
  compare: function (CC, yC) {
    return CC === yC ? 0 : CC < yC ? -1 : 1;
  },
  getOption: function (CC, yC, IC) {
    var fC = CC[yC];
    return void 0 === fC ? IC : fC;
  },
  impliedNamespace: function (CC) {
    var yC = /^(.*)\.[^.]+$/.exec(CC);
    return yC ? yC[1] : void 0;
  },
  isValidName: rC,
  jsonEnd: function (CC, yC) {
    yC |= 0;
    var IC = CC.charAt(yC++);
    if (/[\d-]/.test(IC)) {
      for (; /[eE\d.+-]/.test(CC.charAt(yC));) {
        yC++;
      }
      return yC;
    }
    if (/true|null/.test(CC.slice(yC - 1, yC + 3))) {
      return yC + 3;
    }
    if (/false/.test(CC.slice(yC - 1, yC + 4))) {
      return yC + 4;
    }
    var fC = 0;
    var ky = !1;
    do {
      switch (IC) {
        case "{":
        case "[":
          ky || fC++;
          break;
        case "}":
        case "]":
          if (!ky && ! --fC) {
            return yC;
          }
          break;
        case '"':
          ky = !ky;
          if (!fC && !ky) {
            return yC;
          }
          break;
        case "\\":
          yC++;
      }
    } while (IC = CC.charAt(yC++));
    return -1;
  },
  newBuffer: LC,
  objectValues: function (CC) {
    return Object.keys(CC).map(function (yC) {
      return CC[yC];
    });
  },
  qualify: function (CC, yC) {
    ~CC.indexOf(".") ? CC = CC.replace(/^\./, "") : yC && (CC = yC + "." + CC);
    CC.split(".").forEach(function (yC) {
      if (!rC(yC)) {
        throw new Error(iy("invalid name: %j", CC));
      }
    });
    return CC;
  },
  toMap: function (CC, yC) {
    var IC;
    var fC;
    var ky = {};
    for (IC = 0; IC < CC.length; IC++) {
      ky[yC(fC = CC[IC])] = fC;
    }
    return ky;
  },
  singleIndexOf: function (CC, yC) {
    var IC;
    var fC;
    var ky = -1;
    if (!CC) {
      return -1;
    }
    IC = 0;
    fC = CC.length;
    for (; IC < fC; IC++) {
      if (CC[IC] === yC) {
        if (ky >= 0) {
          return -2;
        }
        ky = IC;
      }
    }
    return ky;
  },
  hasDuplicates: function (CC, yC) {
    var IC;
    var fC;
    var ky;
    var gC = Object.create(null);
    IC = 0;
    fC = CC.length;
    for (; IC < fC; IC++) {
      ky = CC[IC];
      yC && (ky = yC(ky));
      if (gC[ky]) {
        return !0;
      }
      gC[ky] = !0;
    }
    return !1;
  },
  unqualify: function (CC) {
    var yC = CC.split(".");
    return yC[yC.length - 1];
  },
  BufferPool: GC,
  Lcg: eC,
  OrderedQueue: OC,
  Tap: SC
};