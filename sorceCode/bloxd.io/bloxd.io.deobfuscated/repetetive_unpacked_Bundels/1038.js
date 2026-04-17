function fC(CC) {
  var yC = this;
  this.next = null;
  this.entry = null;
  this.finish = function () {
    !function (CC, yC, IC) {
      var fC = CC.entry;
      CC.entry = null;
      for (; fC;) {
        var ky = fC.callback;
        yC.pendingcb--;
        ky(IC);
        fC = fC.next;
      }
      yC.corkedRequestsFree.next = CC;
    }(yC, CC);
  };
}
var ky;
module.exports = pC;
pC.WritableState = KC;
var gC = {
  deprecate: require("./1047.js")
};
var AC = require("./1003.js");
var my = require("./675.js").iI;
var XC = require.g.Uint8Array || function () {};
var iy;
var LC = require("./1023.js");
var YC = require("./1026.js").getHighWaterMark;
var bC = require("./1030.js").b;
var rC = bC.ERR_INVALID_ARG_TYPE;
var GC = bC.ERR_METHOD_NOT_IMPLEMENTED;
var eC = bC.ERR_MULTIPLE_CALLBACK;
var OC = bC.ERR_STREAM_CANNOT_PIPE;
var SC = bC.ERR_STREAM_DESTROYED;
var TC = bC.ERR_STREAM_NULL_VALUES;
var NC = bC.ERR_STREAM_WRITE_AFTER_END;
var sC = bC.ERR_UNKNOWN_ENCODING;
var jy = LC.errorOrDestroy;
function qC() {}
function KC(CC, yC, gC) {
  ky = ky || require("./1032.js");
  CC = CC || {};
  "boolean" !== typeof gC && (gC = yC instanceof ky);
  this.objectMode = !!CC.objectMode;
  gC && (this.objectMode = this.objectMode || !!CC.writableObjectMode);
  this.highWaterMark = YC(this, CC, "writableHighWaterMark", gC);
  this.finalCalled = !1;
  this.needDrain = !1;
  this.ending = !1;
  this.ended = !1;
  this.finished = !1;
  this.destroyed = !1;
  var AC = !1 === CC.decodeStrings;
  this.decodeStrings = !AC;
  this.defaultEncoding = CC.defaultEncoding || "utf8";
  this.length = 0;
  this.writing = !1;
  this.corked = 0;
  this.sync = !0;
  this.bufferProcessing = !1;
  this.onwrite = function (CC) {
    !function (CC, yC) {
      var IC = CC._writableState;
      var fC = IC.sync;
      var ky = IC.writecb;
      if ("function" !== typeof ky) {
        throw new eC();
      }
      (function (CC) {
        CC.writing = !1;
        CC.writecb = null;
        CC.length -= CC.writelen;
        CC.writelen = 0;
      })(IC);
      if (yC) {
        !function (CC, yC, IC, fC, ky) {
          --yC.pendingcb;
          IC ? (process.nextTick(ky, fC), process.nextTick(EC, CC, yC), CC._writableState.errorEmitted = !0, jy(CC, fC)) : (ky(fC), CC._writableState.errorEmitted = !0, jy(CC, fC), EC(CC, yC));
        }(CC, IC, fC, yC, ky);
      } else {
        var gC = cC(IC) || CC.destroyed;
        gC || IC.corked || IC.bufferProcessing || !IC.bufferedRequest || aC(CC, IC);
        fC ? process.nextTick(HC, CC, IC, gC, ky) : HC(CC, IC, gC, ky);
      }
    }(yC, CC);
  };
  this.writecb = null;
  this.writelen = 0;
  this.bufferedRequest = null;
  this.lastBufferedRequest = null;
  this.pendingcb = 0;
  this.prefinished = !1;
  this.errorEmitted = !1;
  this.emitClose = !1 !== CC.emitClose;
  this.autoDestroy = !!CC.autoDestroy;
  this.bufferedRequestCount = 0;
  this.corkedRequestsFree = new fC(this);
}
function pC(CC) {
  var yC = this instanceof (ky = ky || require("./1032.js"));
  if (!yC && !iy.call(pC, this)) {
    return new pC(CC);
  }
  this._writableState = new KC(CC, this, yC);
  this.writable = !0;
  CC && ("function" === typeof CC.write && (this._write = CC.write), "function" === typeof CC.writev && (this._writev = CC.writev), "function" === typeof CC.destroy && (this._destroy = CC.destroy), "function" === typeof CC.final && (this._final = CC.final));
  AC.call(this);
}
function wC(CC, yC, IC, fC, ky, gC, AC) {
  yC.writelen = fC;
  yC.writecb = AC;
  yC.writing = !0;
  yC.sync = !0;
  yC.destroyed ? yC.onwrite(new SC("write")) : IC ? CC._writev(ky, yC.onwrite) : CC._write(ky, gC, yC.onwrite);
  yC.sync = !1;
}
function HC(CC, yC, IC, fC) {
  IC || function (CC, yC) {
    0 === yC.length && yC.needDrain && (yC.needDrain = !1, CC.emit("drain"));
  }(CC, yC);
  yC.pendingcb--;
  fC();
  EC(CC, yC);
}
function aC(CC, yC) {
  yC.bufferProcessing = !0;
  var IC = yC.bufferedRequest;
  if (CC._writev && IC && IC.next) {
    var ky = yC.bufferedRequestCount;
    var gC = new Array(ky);
    var AC = yC.corkedRequestsFree;
    AC.entry = IC;
    for (var my = 0, XC = !0; IC;) {
      gC[my] = IC;
      IC.isBuf || (XC = !1);
      IC = IC.next;
      my += 1;
    }
    gC.allBuffers = XC;
    wC(CC, yC, !0, yC.length, gC, "", AC.finish);
    yC.pendingcb++;
    yC.lastBufferedRequest = null;
    AC.next ? (yC.corkedRequestsFree = AC.next, AC.next = null) : yC.corkedRequestsFree = new fC(yC);
    yC.bufferedRequestCount = 0;
  } else {
    for (; IC;) {
      var iy = IC.chunk;
      var LC = IC.encoding;
      var YC = IC.callback;
      wC(CC, yC, !1, yC.objectMode ? 1 : iy.length, iy, LC, YC);
      IC = IC.next;
      yC.bufferedRequestCount--;
      if (yC.writing) {
        break;
      }
    }
    null === IC && (yC.lastBufferedRequest = null);
  }
  yC.bufferedRequest = IC;
  yC.bufferProcessing = !1;
}
function cC(CC) {
  return CC.ending && 0 === CC.length && null === CC.bufferedRequest && !CC.finished && !CC.writing;
}
function UC(CC, yC) {
  CC._final(function (IC) {
    yC.pendingcb--;
    IC && jy(CC, IC);
    yC.prefinished = !0;
    CC.emit("prefinish");
    EC(CC, yC);
  });
}
function EC(CC, yC) {
  var IC = cC(yC);
  if (IC && (function (CC, yC) {
    yC.prefinished || yC.finalCalled || ("function" !== typeof CC._final || yC.destroyed ? (yC.prefinished = !0, CC.emit("prefinish")) : (yC.pendingcb++, yC.finalCalled = !0, process.nextTick(UC, CC, yC)));
  }(CC, yC), 0 === yC.pendingcb && (yC.finished = !0, CC.emit("finish"), yC.autoDestroy))) {
    var fC = CC._readableState;
    (!fC || fC.autoDestroy && fC.endEmitted) && CC.destroy();
  }
  return IC;
}
require("./966.js")(pC, AC);
KC.prototype.getBuffer = function () {
  for (var CC = this.bufferedRequest, yC = []; CC;) {
    yC.push(CC);
    CC = CC.next;
  }
  return yC;
};
(function () {
  try {
    Object.defineProperty(KC.prototype, "buffer", {
      get: gC.deprecate(function () {
        return this.getBuffer();
      }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
    });
  } catch (CC) {}
})();
"function" === typeof Symbol && Symbol.hasInstance && "function" === typeof Function.prototype[Symbol.hasInstance] ? (iy = Function.prototype[Symbol.hasInstance], Object.defineProperty(pC, Symbol.hasInstance, {
  value: function (CC) {
    return !!iy.call(this, CC) || this === pC && CC && CC._writableState instanceof KC;
  }
})) : iy = function (CC) {
  return CC instanceof this;
};
pC.prototype.pipe = function () {
  jy(this, new OC());
};
pC.prototype.write = function (CC, yC, IC) {
  var fC;
  var ky = this._writableState;
  var gC = !1;
  var AC = !ky.objectMode && (fC = CC, my.isBuffer(fC) || fC instanceof XC);
  AC && !my.isBuffer(CC) && (CC = function (CC) {
    return my.from(CC);
  }(CC));
  "function" === typeof yC && (IC = yC, yC = null);
  AC ? yC = "buffer" : yC || (yC = ky.defaultEncoding);
  "function" !== typeof IC && (IC = qC);
  ky.ending ? function (CC, yC) {
    var IC = new NC();
    jy(CC, IC);
    process.nextTick(yC, IC);
  }(this, IC) : (AC || function (CC, yC, IC, fC) {
    var ky;
    null === IC ? ky = new TC() : "string" === typeof IC || yC.objectMode || (ky = new rC("chunk", ["string", "iI"], IC));
    return !ky || (jy(CC, ky), process.nextTick(fC, ky), !1);
  }(this, ky, CC, IC)) && (ky.pendingcb++, gC = function (CC, yC, IC, fC, ky, gC) {
    if (!IC) {
      var AC = function (CC, yC, IC) {
        CC.objectMode || !1 === CC.decodeStrings || "string" !== typeof yC || (yC = my.from(yC, IC));
        return yC;
      }(yC, fC, ky);
      fC !== AC && (IC = !0, ky = "buffer", fC = AC);
    }
    var XC = yC.objectMode ? 1 : fC.length;
    yC.length += XC;
    var iy = yC.length < yC.highWaterMark;
    iy || (yC.needDrain = !0);
    if (yC.writing || yC.corked) {
      var LC = yC.lastBufferedRequest;
      yC.lastBufferedRequest = {
        chunk: fC,
        encoding: ky,
        isBuf: IC,
        callback: gC,
        next: null
      };
      LC ? LC.next = yC.lastBufferedRequest : yC.bufferedRequest = yC.lastBufferedRequest;
      yC.bufferedRequestCount += 1;
    } else {
      wC(CC, yC, !1, XC, fC, ky, gC);
    }
    return iy;
  }(this, ky, AC, CC, yC, IC));
  return gC;
};
pC.prototype.cork = function () {
  this._writableState.corked++;
};
pC.prototype.uncork = function () {
  var CC = this._writableState;
  CC.corked && (CC.corked--, CC.writing || CC.corked || CC.bufferProcessing || !CC.bufferedRequest || aC(this, CC));
};
pC.prototype.setDefaultEncoding = function (CC) {
  "string" === typeof CC && (CC = CC.toLowerCase());
  if (!(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((CC + "").toLowerCase()) > -1)) {
    throw new sC(CC);
  }
  this._writableState.defaultEncoding = CC;
  return this;
};
Object.defineProperty(pC.prototype, "writableBuffer", {
  enumerable: !1,
  get: function () {
    return this._writableState && this._writableState.getBuffer();
  }
});
Object.defineProperty(pC.prototype, "writableHighWaterMark", {
  enumerable: !1,
  get: function () {
    return this._writableState.highWaterMark;
  }
});
pC.prototype._write = function (CC, yC, IC) {
  IC(new GC("_write()"));
};
pC.prototype._writev = null;
pC.prototype.end = function (CC, yC, IC) {
  var fC = this._writableState;
  "function" === typeof CC ? (IC = CC, CC = null, yC = null) : "function" === typeof yC && (IC = yC, yC = null);
  null !== CC && void 0 !== CC && this.write(CC, yC);
  fC.corked && (fC.corked = 1, this.uncork());
  fC.ending || function (CC, yC, IC) {
    yC.ending = !0;
    EC(CC, yC);
    IC && (yC.finished ? process.nextTick(IC) : CC.once("finish", IC));
    yC.ended = !0;
    CC.writable = !1;
  }(this, fC, IC);
  return this;
};
Object.defineProperty(pC.prototype, "writableLength", {
  enumerable: !1,
  get: function () {
    return this._writableState.length;
  }
});
Object.defineProperty(pC.prototype, "destroyed", {
  enumerable: !1,
  get: function () {
    return void 0 !== this._writableState && this._writableState.destroyed;
  },
  set: function (CC) {
    this._writableState && (this._writableState.destroyed = CC);
  }
});
pC.prototype.destroy = LC.destroy;
pC.prototype._undestroy = LC.undestroy;
pC.prototype._destroy = function (CC, yC) {
  yC(CC);
};