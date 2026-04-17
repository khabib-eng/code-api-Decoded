var fC;
module.exports = pC;
pC.ReadableState = KC;
require("./983.js").EventEmitter;
function ky(CC, yC) {
  return CC.listeners(yC).length;
}
var gC = require("./1003.js");
var AC = require("./675.js").iI;
var my = require.g.Uint8Array || function () {};
var XC;
var iy = require("./1009.js");
XC = iy && iy.debuglog ? iy.debuglog("stream") : function () {};
var LC;
var YC;
var bC;
var rC = require("./1012.js");
var GC = require("./1023.js");
var eC = require("./1026.js").getHighWaterMark;
var OC = require("./1030.js").b;
var SC = OC.ERR_INVALID_ARG_TYPE;
var TC = OC.ERR_STREAM_PUSH_AFTER_EOF;
var NC = OC.ERR_METHOD_NOT_IMPLEMENTED;
var sC = OC.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
require("./966.js")(pC, gC);
var jy = GC.errorOrDestroy;
var qC = ["error", "close", "destroy", "pause", "resume"];
function KC(CC, yC, ky) {
  fC = fC || require("./1032.js");
  CC = CC || {};
  "boolean" !== typeof ky && (ky = yC instanceof fC);
  this.objectMode = !!CC.objectMode;
  ky && (this.objectMode = this.objectMode || !!CC.readableObjectMode);
  this.highWaterMark = eC(this, CC, "readableHighWaterMark", ky);
  this.buffer = new rC();
  this.length = 0;
  this.pipes = null;
  this.pipesCount = 0;
  this.flowing = null;
  this.ended = !1;
  this.endEmitted = !1;
  this.reading = !1;
  this.sync = !0;
  this.needReadable = !1;
  this.emittedReadable = !1;
  this.readableListening = !1;
  this.resumeScheduled = !1;
  this.paused = !0;
  this.emitClose = !1 !== CC.emitClose;
  this.autoDestroy = !!CC.autoDestroy;
  this.destroyed = !1;
  this.defaultEncoding = CC.defaultEncoding || "utf8";
  this.awaitDrain = 0;
  this.readingMore = !1;
  this.decoder = null;
  this.encoding = null;
  CC.encoding && (LC || (LC = require("./1050.js").d), this.decoder = new LC(CC.encoding), this.encoding = CC.encoding);
}
function pC(CC) {
  fC = fC || require("./1032.js");
  if (!(this instanceof pC)) {
    return new pC(CC);
  }
  var yC = this instanceof fC;
  this._readableState = new KC(CC, this, yC);
  this.readable = !0;
  CC && ("function" === typeof CC.read && (this._read = CC.read), "function" === typeof CC.destroy && (this._destroy = CC.destroy));
  gC.call(this);
}
function wC(CC, yC, IC, fC, ky) {
  XC("readableAddChunk", yC);
  var gC;
  var iy = CC._readableState;
  if (null === yC) {
    iy.reading = !1;
    (function (CC, yC) {
      XC("onEofChunk");
      if (yC.ended) {
        return;
      }
      if (yC.decoder) {
        var IC = yC.decoder.end();
        IC && IC.length && (yC.buffer.push(IC), yC.length += yC.objectMode ? 1 : IC.length);
      }
      yC.ended = !0;
      yC.sync ? UC(CC) : (yC.needReadable = !1, yC.emittedReadable || (yC.emittedReadable = !0, EC(CC)));
    })(CC, iy);
  } else {
    ky || (gC = function (CC, yC) {
      var IC;
      fC = yC;
      AC.isBuffer(fC) || fC instanceof my || "string" === typeof yC || void 0 === yC || CC.objectMode || (IC = new SC("chunk", ["string", "iI", "Uint8Array"], yC));
      var fC;
      return IC;
    }(iy, yC));
    if (gC) {
      jy(CC, gC);
    } else {
      if (iy.objectMode || yC && yC.length > 0) {
        "string" === typeof yC || iy.objectMode || Object.getPrototypeOf(yC) === AC.prototype || (yC = function (CC) {
          return AC.from(CC);
        }(yC));
        if (fC) {
          iy.endEmitted ? jy(CC, new sC()) : HC(CC, iy, yC, !0);
        } else {
          if (iy.ended) {
            jy(CC, new TC());
          } else {
            if (iy.destroyed) {
              return !1;
            }
            iy.reading = !1;
            iy.decoder && !IC ? (yC = iy.decoder.write(yC), iy.objectMode || 0 !== yC.length ? HC(CC, iy, yC, !1) : VC(CC, iy)) : HC(CC, iy, yC, !1);
          }
        }
      } else {
        fC || (iy.reading = !1, VC(CC, iy));
      }
    }
  }
  return !iy.ended && (iy.length < iy.highWaterMark || 0 === iy.length);
}
function HC(CC, yC, IC, fC) {
  yC.flowing && 0 === yC.length && !yC.sync ? (yC.awaitDrain = 0, CC.emit("data", IC)) : (yC.length += yC.objectMode ? 1 : IC.length, fC ? yC.buffer.unshift(IC) : yC.buffer.push(IC), yC.needReadable && UC(CC));
  VC(CC, yC);
}
Object.defineProperty(pC.prototype, "destroyed", {
  enumerable: !1,
  get: function () {
    return void 0 !== this._readableState && this._readableState.destroyed;
  },
  set: function (CC) {
    this._readableState && (this._readableState.destroyed = CC);
  }
});
pC.prototype.destroy = GC.destroy;
pC.prototype._undestroy = GC.undestroy;
pC.prototype._destroy = function (CC, yC) {
  yC(CC);
};
pC.prototype.push = function (CC, yC) {
  var IC;
  var fC = this._readableState;
  fC.objectMode ? IC = !0 : "string" === typeof CC && ((yC = yC || fC.defaultEncoding) !== fC.encoding && (CC = AC.from(CC, yC), yC = ""), IC = !0);
  return wC(this, CC, yC, !1, IC);
};
pC.prototype.unshift = function (CC) {
  return wC(this, CC, null, !0, !1);
};
pC.prototype.isPaused = function () {
  return !1 === this._readableState.flowing;
};
pC.prototype.setEncoding = function (CC) {
  LC || (LC = require("./1050.js").d);
  var yC = new LC(CC);
  this._readableState.decoder = yC;
  this._readableState.encoding = this._readableState.decoder.encoding;
  for (var fC = this._readableState.buffer.head, ky = ""; null !== fC;) {
    ky += yC.write(fC.data);
    fC = fC.next;
  }
  this._readableState.buffer.clear();
  "" !== ky && this._readableState.buffer.push(ky);
  this._readableState.length = ky.length;
  return this;
};
var aC = 1073741824;
function cC(CC, yC) {
  return CC <= 0 || 0 === yC.length && yC.ended ? 0 : yC.objectMode ? 1 : CC !== CC ? yC.flowing && yC.length ? yC.buffer.head.data.length : yC.length : (CC > yC.highWaterMark && (yC.highWaterMark = function (CC) {
    CC >= aC ? CC = aC : (CC--, CC |= CC >>> 1, CC |= CC >>> 2, CC |= CC >>> 4, CC |= CC >>> 8, CC |= CC >>> 16, CC++);
    return CC;
  }(CC)), CC <= yC.length ? CC : yC.ended ? yC.length : (yC.needReadable = !0, 0));
}
function UC(CC) {
  var yC = CC._readableState;
  XC("emitReadable", yC.needReadable, yC.emittedReadable);
  yC.needReadable = !1;
  yC.emittedReadable || (XC("emitReadable", yC.flowing), yC.emittedReadable = !0, process.nextTick(EC, CC));
}
function EC(CC) {
  var yC = CC._readableState;
  XC("emitReadable_", yC.destroyed, yC.length, yC.ended);
  yC.destroyed || !yC.length && !yC.ended || (CC.emit("readable"), yC.emittedReadable = !1);
  yC.needReadable = !yC.flowing && !yC.ended && yC.length <= yC.highWaterMark;
  BC(CC);
}
function VC(CC, yC) {
  yC.readingMore || (yC.readingMore = !0, process.nextTick(WC, CC, yC));
}
function WC(CC, yC) {
  for (; !yC.reading && !yC.ended && (yC.length < yC.highWaterMark || yC.flowing && 0 === yC.length);) {
    var IC = yC.length;
    XC("maybeReadMore read 0");
    CC.read(0);
    if (IC === yC.length) {
      break;
    }
  }
  yC.readingMore = !1;
}
function xC(CC) {
  var yC = CC._readableState;
  yC.readableListening = CC.listenerCount("readable") > 0;
  yC.resumeScheduled && !yC.paused ? yC.flowing = !0 : CC.listenerCount("data") > 0 && CC.resume();
}
function PC(CC) {
  XC("readable nexttick read 0");
  CC.read(0);
}
function zC(CC, yC) {
  XC("resume", yC.reading);
  yC.reading || CC.read(0);
  yC.resumeScheduled = !1;
  CC.emit("resume");
  BC(CC);
  yC.flowing && !yC.reading && CC.read(0);
}
function BC(CC) {
  var yC = CC._readableState;
  for (XC("flow", yC.flowing); yC.flowing && null !== CC.read(););
}
function tC(CC, yC) {
  return 0 === yC.length ? null : (yC.objectMode ? IC = yC.buffer.shift() : !CC || CC >= yC.length ? (IC = yC.decoder ? yC.buffer.join("") : 1 === yC.buffer.length ? yC.buffer.first() : yC.buffer.concat(yC.length), yC.buffer.clear()) : IC = yC.buffer.consume(CC, yC.decoder), IC);
  var IC;
}
function JC(CC) {
  var yC = CC._readableState;
  XC("endReadable", yC.endEmitted);
  yC.endEmitted || (yC.ended = !0, process.nextTick(nC, yC, CC));
}
function nC(CC, yC) {
  XC("endReadableNT", CC.endEmitted, CC.length);
  if (!CC.endEmitted && 0 === CC.length && (CC.endEmitted = !0, yC.readable = !1, yC.emit("end"), CC.autoDestroy)) {
    var IC = yC._writableState;
    (!IC || IC.autoDestroy && IC.finished) && yC.destroy();
  }
}
function FC(CC, yC) {
  for (var IC = 0, fC = CC.length; IC < fC; IC++) {
    if (CC[IC] === yC) {
      return IC;
    }
  }
  return -1;
}
pC.prototype.read = function (CC) {
  XC("read", CC);
  CC = parseInt(CC, 10);
  var yC = this._readableState;
  var IC = CC;
  0 !== CC && (yC.emittedReadable = !1);
  if (0 === CC && yC.needReadable && ((0 !== yC.highWaterMark ? yC.length >= yC.highWaterMark : yC.length > 0) || yC.ended)) {
    XC("read: emitReadable", yC.length, yC.ended);
    0 === yC.length && yC.ended ? JC(this) : UC(this);
    return null;
  }
  if (0 === (CC = cC(CC, yC)) && yC.ended) {
    0 === yC.length && JC(this);
    return null;
  }
  var fC;
  var ky = yC.needReadable;
  XC("need readable", ky);
  (0 === yC.length || yC.length - CC < yC.highWaterMark) && XC("length less than watermark", ky = !0);
  yC.ended || yC.reading ? XC("reading or ended", ky = !1) : ky && (XC("do read"), yC.reading = !0, yC.sync = !0, 0 === yC.length && (yC.needReadable = !0), this._read(yC.highWaterMark), yC.sync = !1, yC.reading || (CC = cC(IC, yC)));
  null === (fC = CC > 0 ? tC(CC, yC) : null) ? (yC.needReadable = yC.length <= yC.highWaterMark, CC = 0) : (yC.length -= CC, yC.awaitDrain = 0);
  0 === yC.length && (yC.ended || (yC.needReadable = !0), IC !== CC && yC.ended && JC(this));
  null !== fC && this.emit("data", fC);
  return fC;
};
pC.prototype._read = function (CC) {
  jy(this, new NC("_read()"));
};
pC.prototype.pipe = function (CC, yC) {
  var IC = this;
  var fC = this._readableState;
  switch (fC.pipesCount) {
    case 0:
      fC.pipes = CC;
      break;
    case 1:
      fC.pipes = [fC.pipes, CC];
      break;
    default:
      fC.pipes.push(CC);
  }
  fC.pipesCount += 1;
  XC("pipe count=%d opts=%j", fC.pipesCount, yC);
  var gC = (!yC || !1 !== yC.end) && CC !== process.stdout && CC !== process.stderr ? my : eC;
  function AC(yC, ky) {
    XC("onunpipe");
    yC === IC && ky && !1 === ky.hasUnpiped && (ky.hasUnpiped = !0, XC("cleanup"), CC.removeListener("close", rC), CC.removeListener("finish", GC), CC.removeListener("drain", iy), CC.removeListener("error", bC), CC.removeListener("unpipe", AC), IC.removeListener("end", my), IC.removeListener("end", eC), IC.removeListener("data", YC), LC = !0, !fC.awaitDrain || CC._writableState && !CC._writableState.needDrain || iy());
  }
  function my() {
    XC("onend");
    CC.end();
  }
  fC.endEmitted ? process.nextTick(gC) : IC.once("end", gC);
  CC.on("unpipe", AC);
  var iy = function (CC) {
    return function () {
      var yC = CC._readableState;
      XC("pipeOnDrain", yC.awaitDrain);
      yC.awaitDrain && yC.awaitDrain--;
      0 === yC.awaitDrain && ky(CC, "data") && (yC.flowing = !0, BC(CC));
    };
  }(IC);
  CC.on("drain", iy);
  var LC = !1;
  function YC(yC) {
    XC("ondata");
    var ky = CC.write(yC);
    XC("dest.write", ky);
    !1 === ky && ((1 === fC.pipesCount && fC.pipes === CC || fC.pipesCount > 1 && -1 !== FC(fC.pipes, CC)) && !LC && (XC("false write response, pause", fC.awaitDrain), fC.awaitDrain++), IC.pause());
  }
  function bC(yC) {
    XC("onerror", yC);
    eC();
    CC.removeListener("error", bC);
    0 === ky(CC, "error") && jy(CC, yC);
  }
  function rC() {
    CC.removeListener("finish", GC);
    eC();
  }
  function GC() {
    XC("onfinish");
    CC.removeListener("close", rC);
    eC();
  }
  function eC() {
    XC("unpipe");
    IC.unpipe(CC);
  }
  IC.on("data", YC);
  (function (CC, yC, IC) {
    if ("function" === typeof CC.prependListener) {
      return CC.prependListener(yC, IC);
    }
    CC._events && CC._events[yC] ? Array.isArray(CC._events[yC]) ? CC._events[yC].unshift(IC) : CC._events[yC] = [IC, CC._events[yC]] : CC.on(yC, IC);
  })(CC, "error", bC);
  CC.once("close", rC);
  CC.once("finish", GC);
  CC.emit("pipe", IC);
  fC.flowing || (XC("pipe resume"), IC.resume());
  return CC;
};
pC.prototype.unpipe = function (CC) {
  var yC = this._readableState;
  var IC = {
    hasUnpiped: !1
  };
  if (0 === yC.pipesCount) {
    return this;
  }
  if (1 === yC.pipesCount) {
    CC && CC !== yC.pipes || (CC || (CC = yC.pipes), yC.pipes = null, yC.pipesCount = 0, yC.flowing = !1, CC && CC.emit("unpipe", this, IC));
    return this;
  }
  if (!CC) {
    var fC = yC.pipes;
    var ky = yC.pipesCount;
    yC.pipes = null;
    yC.pipesCount = 0;
    yC.flowing = !1;
    for (var gC = 0; gC < ky; gC++) {
      fC[gC].emit("unpipe", this, {
        hasUnpiped: !1
      });
    }
    return this;
  }
  var AC = FC(yC.pipes, CC);
  -1 === AC || (yC.pipes.splice(AC, 1), yC.pipesCount -= 1, 1 === yC.pipesCount && (yC.pipes = yC.pipes[0]), CC.emit("unpipe", this, IC));
  return this;
};
pC.prototype.on = function (CC, yC) {
  var IC = gC.prototype.on.call(this, CC, yC);
  var fC = this._readableState;
  "data" === CC ? (fC.readableListening = this.listenerCount("readable") > 0, !1 !== fC.flowing && this.resume()) : "readable" === CC && (fC.endEmitted || fC.readableListening || (fC.readableListening = fC.needReadable = !0, fC.flowing = !1, fC.emittedReadable = !1, XC("on readable", fC.length, fC.reading), fC.length ? UC(this) : fC.reading || process.nextTick(PC, this)));
  return IC;
};
pC.prototype.addListener = pC.prototype.on;
pC.prototype.removeListener = function (CC, yC) {
  var IC = gC.prototype.removeListener.call(this, CC, yC);
  "readable" === CC && process.nextTick(xC, this);
  return IC;
};
pC.prototype.by = function (CC) {
  var yC = gC.prototype.by.apply(this, arguments);
  "readable" !== CC && void 0 !== CC || process.nextTick(xC, this);
  return yC;
};
pC.prototype.resume = function () {
  var CC = this._readableState;
  CC.flowing || (XC("resume"), CC.flowing = !CC.readableListening, function (CC, yC) {
    yC.resumeScheduled || (yC.resumeScheduled = !0, process.nextTick(zC, CC, yC));
  }(this, CC));
  CC.paused = !1;
  return this;
};
pC.prototype.pause = function () {
  XC("call pause flowing=%j", this._readableState.flowing);
  !1 !== this._readableState.flowing && (XC("pause"), this._readableState.flowing = !1, this.emit("pause"));
  this._readableState.paused = !0;
  return this;
};
pC.prototype.wrap = function (CC) {
  var yC = this;
  var IC = this._readableState;
  var fC = !1;
  CC.on("end", function () {
    XC("wrapped end");
    if (IC.decoder && !IC.ended) {
      var CC = IC.decoder.end();
      CC && CC.length && yC.push(CC);
    }
    yC.push(null);
  });
  CC.on("data", function (ky) {
    (XC("wrapped data"), IC.decoder && (ky = IC.decoder.write(ky)), !IC.objectMode || null !== ky && void 0 !== ky) && (IC.objectMode || ky && ky.length) && (yC.push(ky) || (fC = !0, CC.pause()));
  });
  for (var ky in CC) {
    void 0 === this[ky] && "function" === typeof CC[ky] && (this[ky] = function (yC) {
      return function () {
        return CC[yC].apply(CC, arguments);
      };
    }(ky));
  }
  for (var gC = 0; gC < qC.length; gC++) {
    CC.on(qC[gC], this.emit.bind(this, qC[gC]));
  }
  this._read = function (yC) {
    XC("wrapped _read", yC);
    fC && (fC = !1, CC.resume());
  };
  return this;
};
"function" === typeof Symbol && (pC.prototype[Symbol.asyncIterator] = function () {
  void 0 === YC && (YC = require("./1055.js"));
  return YC(this);
});
Object.defineProperty(pC.prototype, "readableHighWaterMark", {
  enumerable: !1,
  get: function () {
    return this._readableState.highWaterMark;
  }
});
Object.defineProperty(pC.prototype, "readableBuffer", {
  enumerable: !1,
  get: function () {
    return this._readableState && this._readableState.buffer;
  }
});
Object.defineProperty(pC.prototype, "readableFlowing", {
  enumerable: !1,
  get: function () {
    return this._readableState.flowing;
  },
  set: function (CC) {
    this._readableState && (this._readableState.flowing = CC);
  }
});
pC._fromList = tC;
Object.defineProperty(pC.prototype, "readableLength", {
  enumerable: !1,
  get: function () {
    return this._readableState.length;
  }
});
"function" === typeof Symbol && (pC.from = function (CC, yC) {
  void 0 === bC && (bC = require("./1065.js"));
  return bC(pC, CC, yC);
});