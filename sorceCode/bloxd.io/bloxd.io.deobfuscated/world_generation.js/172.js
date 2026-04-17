function f(p) {
  var vThis = this;
  this.next = null;
  this.entry = null;
  this.finish = function () {
    (function (p2, p3, p4) {
      var v = p2.entry;
      p2.entry = null;
      while (v) {
        var v2 = v.callback;
        p3.pendingcb--;
        v2(p4);
        v = v.next;
      }
      p3.corkedRequestsFree.next = p2;
    })(vThis, p);
  };
}
var v3;
module.exports = f4;
f4.WritableState = f3;
var vO = {
  deprecate: require("./175.js")
};
var js = require("./129.js");
var v4 = require("./103.js").HU;
var v5 = require.g.Uint8Array || function () {};
var v6;
var js2 = require("./148.js");
var v7 = require("./153.js").getHighWaterMark;
var v8 = require("./159.js").c;
var v9 = v8.ERR_INVALID_ARG_TYPE;
var v10 = v8.ERR_METHOD_NOT_IMPLEMENTED;
var v11 = v8.ERR_MULTIPLE_CALLBACK;
var v12 = v8.ERR_STREAM_CANNOT_PIPE;
var v13 = v8.ERR_STREAM_DESTROYED;
var v14 = v8.ERR_STREAM_NULL_VALUES;
var v15 = v8.ERR_STREAM_WRITE_AFTER_END;
var v16 = v8.ERR_UNKNOWN_ENCODING;
var v17 = js2.errorOrDestroy;
function f2() {}
function f3(p5, p6, p7) {
  v3 = v3 || require("./163.js");
  p5 = p5 || {};
  if (typeof p7 !== "boolean") {
    p7 = p6 instanceof v3;
  }
  this.objectMode = !!p5.objectMode;
  if (p7) {
    this.objectMode = this.objectMode || !!p5.writableObjectMode;
  }
  this.highWaterMark = v7(this, p5, "writableHighWaterMark", p7);
  this.finalCalled = false;
  this.needDrain = false;
  this.ending = false;
  this.ended = false;
  this.finished = false;
  this.destroyed = false;
  var v18 = p5.decodeStrings === false;
  this.decodeStrings = !v18;
  this.defaultEncoding = p5.defaultEncoding || "utf8";
  this.length = 0;
  this.writing = false;
  this.corked = 0;
  this.sync = true;
  this.bufferProcessing = false;
  this.onwrite = function (p8) {
    (function (p9, p10) {
      var v19 = p9._writableState;
      var v20 = v19.sync;
      var v21 = v19.writecb;
      if (typeof v21 !== "function") {
        throw new v11();
      }
      (function (p11) {
        p11.writing = false;
        p11.writecb = null;
        p11.length -= p11.writelen;
        p11.writelen = 0;
      })(v19);
      if (p10) {
        (function (p12, p13, p14, p15, p16) {
          --p13.pendingcb;
          if (p14) {
            process.nextTick(p16, p15);
            process.nextTick(f10, p12, p13);
            p12._writableState.errorEmitted = true;
            v17(p12, p15);
          } else {
            p16(p15);
            p12._writableState.errorEmitted = true;
            v17(p12, p15);
            f10(p12, p13);
          }
        })(p9, v19, v20, p10, v21);
      } else {
        var v22 = f8(v19) || p9.destroyed;
        if (!v22 && !v19.corked && !v19.bufferProcessing && !!v19.bufferedRequest) {
          f7(p9, v19);
        }
        if (v20) {
          process.nextTick(f6, p9, v19, v22, v21);
        } else {
          f6(p9, v19, v22, v21);
        }
      }
    })(p6, p8);
  };
  this.writecb = null;
  this.writelen = 0;
  this.bufferedRequest = null;
  this.lastBufferedRequest = null;
  this.pendingcb = 0;
  this.prefinished = false;
  this.errorEmitted = false;
  this.emitClose = p5.emitClose !== false;
  this.autoDestroy = !!p5.autoDestroy;
  this.bufferedRequestCount = 0;
  this.corkedRequestsFree = new f(this);
}
function f4(p17) {
  var v23 = this instanceof (v3 = v3 || require("./163.js"));
  if (!v23 && !v6.call(f4, this)) {
    return new f4(p17);
  }
  this._writableState = new f3(p17, this, v23);
  this.writable = true;
  if (p17) {
    if (typeof p17.write === "function") {
      this._write = p17.write;
    }
    if (typeof p17.writev === "function") {
      this._writev = p17.writev;
    }
    if (typeof p17.destroy === "function") {
      this._destroy = p17.destroy;
    }
    if (typeof p17.final === "function") {
      this._final = p17.final;
    }
  }
  js.call(this);
}
function f5(p18, p19, p20, p21, p22, p23, p24) {
  p19.writelen = p21;
  p19.writecb = p24;
  p19.writing = true;
  p19.sync = true;
  if (p19.destroyed) {
    p19.onwrite(new v13("write"));
  } else if (p20) {
    p18._writev(p22, p19.onwrite);
  } else {
    p18._write(p22, p23, p19.onwrite);
  }
  p19.sync = false;
}
function f6(p25, p26, p27, p28) {
  if (!p27) {
    (function (p29, p30) {
      if (p30.length === 0 && p30.needDrain) {
        p30.needDrain = false;
        p29.emit("drain");
      }
    })(p25, p26);
  }
  p26.pendingcb--;
  p28();
  f10(p25, p26);
}
function f7(p31, p32) {
  p32.bufferProcessing = true;
  var v24 = p32.bufferedRequest;
  if (p31._writev && v24 && v24.next) {
    var v25 = p32.bufferedRequestCount;
    var v26 = new Array(v25);
    var v27 = p32.corkedRequestsFree;
    v27.entry = v24;
    var vLN0 = 0;
    var v28 = true;
    while (v24) {
      v26[vLN0] = v24;
      if (!v24.isBuf) {
        v28 = false;
      }
      v24 = v24.next;
      vLN0 += 1;
    }
    v26.allBuffers = v28;
    f5(p31, p32, true, p32.length, v26, "", v27.finish);
    p32.pendingcb++;
    p32.lastBufferedRequest = null;
    if (v27.next) {
      p32.corkedRequestsFree = v27.next;
      v27.next = null;
    } else {
      p32.corkedRequestsFree = new f(p32);
    }
    p32.bufferedRequestCount = 0;
  } else {
    while (v24) {
      var v29 = v24.chunk;
      var v30 = v24.encoding;
      var v31 = v24.callback;
      f5(p31, p32, false, p32.objectMode ? 1 : v29.length, v29, v30, v31);
      v24 = v24.next;
      p32.bufferedRequestCount--;
      if (p32.writing) {
        break;
      }
    }
    if (v24 === null) {
      p32.lastBufferedRequest = null;
    }
  }
  p32.bufferedRequest = v24;
  p32.bufferProcessing = false;
}
function f8(p33) {
  return p33.ending && p33.length === 0 && p33.bufferedRequest === null && !p33.finished && !p33.writing;
}
function f9(p34, p35) {
  p34._final(function (p36) {
    p35.pendingcb--;
    if (p36) {
      v17(p34, p36);
    }
    p35.prefinished = true;
    p34.emit("prefinish");
    f10(p34, p35);
  });
}
function f10(p37, p38) {
  var vF8 = f8(p38);
  if (vF8 && (function (p39, p40) {
    if (!p40.prefinished && !p40.finalCalled) {
      if (typeof p39._final !== "function" || p40.destroyed) {
        p40.prefinished = true;
        p39.emit("prefinish");
      } else {
        p40.pendingcb++;
        p40.finalCalled = true;
        process.nextTick(f9, p39, p40);
      }
    }
  }(p37, p38), p38.pendingcb === 0 && (p38.finished = true, p37.emit("finish"), p38.autoDestroy))) {
    var v32 = p37._readableState;
    if (!v32 || v32.autoDestroy && v32.endEmitted) {
      p37.destroy();
    }
  }
  return vF8;
}
require("./85.js")(f4, js);
f3.prototype.getBuffer = function () {
  for (var v33 = this.bufferedRequest, vA = []; v33;) {
    vA.push(v33);
    v33 = v33.next;
  }
  return vA;
};
(function () {
  try {
    Object.defineProperty(f3.prototype, "buffer", {
      get: vO.deprecate(function () {
        return this.getBuffer();
      }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
    });
  } catch (e) {}
})();
if (typeof Symbol === "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === "function") {
  v6 = Function.prototype[Symbol.hasInstance];
  Object.defineProperty(f4, Symbol.hasInstance, {
    value: function (p41) {
      return !!v6.call(this, p41) || this === f4 && p41 && p41._writableState instanceof f3;
    }
  });
} else {
  v6 = function (p42) {
    return p42 instanceof this;
  };
}
f4.prototype.pipe = function () {
  v17(this, new v12());
};
f4.prototype.write = function (p43, p44, p45) {
  var v34;
  var v35 = this._writableState;
  var v36 = false;
  var v37 = !v35.objectMode && (v34 = p43, v4.isBuffer(v34) || v34 instanceof v5);
  if (v37 && !v4.isBuffer(p43)) {
    p43 = function (p46) {
      return v4.from(p46);
    }(p43);
  }
  if (typeof p44 === "function") {
    p45 = p44;
    p44 = null;
  }
  if (v37) {
    p44 = "buffer";
  } else {
    p44 ||= v35.defaultEncoding;
  }
  if (typeof p45 !== "function") {
    p45 = f2;
  }
  if (v35.ending) {
    (function (p47, p48) {
      var v38 = new v15();
      v17(p47, v38);
      process.nextTick(p48, v38);
    })(this, p45);
  } else if (v37 || function (p49, p50, p51, p52) {
    var v39;
    if (p51 === null) {
      v39 = new v14();
    } else if (typeof p51 !== "string" && !p50.objectMode) {
      v39 = new v9("chunk", ["string", "HU"], p51);
    }
    return !v39 || (v17(p49, v39), process.nextTick(p52, v39), false);
  }(this, v35, p43, p45)) {
    v35.pendingcb++;
    v36 = function (p53, p54, p55, p56, p57, p58) {
      if (!p55) {
        var vF = function (p59, p60, p61) {
          if (!p59.objectMode && p59.decodeStrings !== false && typeof p60 === "string") {
            p60 = v4.from(p60, p61);
          }
          return p60;
        }(p54, p56, p57);
        if (p56 !== vF) {
          p55 = true;
          p57 = "buffer";
          p56 = vF;
        }
      }
      var v40 = p54.objectMode ? 1 : p56.length;
      p54.length += v40;
      var v41 = p54.length < p54.highWaterMark;
      if (!v41) {
        p54.needDrain = true;
      }
      if (p54.writing || p54.corked) {
        var v42 = p54.lastBufferedRequest;
        p54.lastBufferedRequest = {
          chunk: p56,
          encoding: p57,
          isBuf: p55,
          callback: p58,
          next: null
        };
        if (v42) {
          v42.next = p54.lastBufferedRequest;
        } else {
          p54.bufferedRequest = p54.lastBufferedRequest;
        }
        p54.bufferedRequestCount += 1;
      } else {
        f5(p53, p54, false, v40, p56, p57, p58);
      }
      return v41;
    }(this, v35, v37, p43, p44, p45);
  }
  return v36;
};
f4.prototype.cork = function () {
  this._writableState.corked++;
};
f4.prototype.uncork = function () {
  var v43 = this._writableState;
  if (v43.corked) {
    v43.corked--;
    if (!v43.writing && !v43.corked && !v43.bufferProcessing && !!v43.bufferedRequest) {
      f7(this, v43);
    }
  }
};
f4.prototype.setDefaultEncoding = function (p62) {
  if (typeof p62 === "string") {
    p62 = p62.toLowerCase();
  }
  if (!(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((p62 + "").toLowerCase()) > -1)) {
    throw new v16(p62);
  }
  this._writableState.defaultEncoding = p62;
  return this;
};
Object.defineProperty(f4.prototype, "writableBuffer", {
  enumerable: false,
  get: function () {
    return this._writableState && this._writableState.getBuffer();
  }
});
Object.defineProperty(f4.prototype, "writableHighWaterMark", {
  enumerable: false,
  get: function () {
    return this._writableState.highWaterMark;
  }
});
f4.prototype._write = function (p63, p64, p65) {
  p65(new v10("_write()"));
};
f4.prototype._writev = null;
f4.prototype.end = function (p66, p67, p68) {
  var v44 = this._writableState;
  if (typeof p66 === "function") {
    p68 = p66;
    p66 = null;
    p67 = null;
  } else if (typeof p67 === "function") {
    p68 = p67;
    p67 = null;
  }
  if (p66 !== null && p66 !== undefined) {
    this.write(p66, p67);
  }
  if (v44.corked) {
    v44.corked = 1;
    this.uncork();
  }
  if (!v44.ending) {
    (function (p69, p70, p71) {
      p70.ending = true;
      f10(p69, p70);
      if (p71) {
        if (p70.finished) {
          process.nextTick(p71);
        } else {
          p69.once("finish", p71);
        }
      }
      p70.ended = true;
      p69.writable = false;
    })(this, v44, p68);
  }
  return this;
};
Object.defineProperty(f4.prototype, "writableLength", {
  enumerable: false,
  get: function () {
    return this._writableState.length;
  }
});
Object.defineProperty(f4.prototype, "destroyed", {
  enumerable: false,
  get: function () {
    return this._writableState !== undefined && this._writableState.destroyed;
  },
  set: function (p72) {
    if (this._writableState) {
      this._writableState.destroyed = p72;
    }
  }
});
f4.prototype.destroy = js2.destroy;
f4.prototype._undestroy = js2.undestroy;
f4.prototype._destroy = function (p73, p74) {
  p74(p73);
};