var v;
module.exports = f3;
f3.ReadableState = f2;
require("./127.js").EventEmitter;
function f(p, p2) {
  return p.listeners(p2).length;
}
var js = require("./129.js");
var v2 = require("./103.js").HU;
var v3 = require.g.Uint8Array || function () {};
var v4;
var js2 = require("./133.js");
v4 = js2 && js2.debuglog ? js2.debuglog("stream") : function () {};
var v5;
var v6;
var v7;
var js3 = require("./140.js");
var js4 = require("./148.js");
var v8 = require("./153.js").getHighWaterMark;
var v9 = require("./159.js").c;
var v10 = v9.ERR_INVALID_ARG_TYPE;
var v11 = v9.ERR_STREAM_PUSH_AFTER_EOF;
var v12 = v9.ERR_METHOD_NOT_IMPLEMENTED;
var v13 = v9.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
require("./85.js")(f3, js);
var v14 = js4.errorOrDestroy;
var vA = ["error", "close", "destroy", "pause", "resume"];
function f2(p3, p4, p5) {
  v = v || require("./163.js");
  p3 = p3 || {};
  if (typeof p5 !== "boolean") {
    p5 = p4 instanceof v;
  }
  this.objectMode = !!p3.objectMode;
  if (p5) {
    this.objectMode = this.objectMode || !!p3.readableObjectMode;
  }
  this.highWaterMark = v8(this, p3, "readableHighWaterMark", p5);
  this.buffer = new js3();
  this.length = 0;
  this.pipes = null;
  this.pipesCount = 0;
  this.flowing = null;
  this.ended = false;
  this.endEmitted = false;
  this.reading = false;
  this.sync = true;
  this.needReadable = false;
  this.emittedReadable = false;
  this.readableListening = false;
  this.resumeScheduled = false;
  this.paused = true;
  this.emitClose = p3.emitClose !== false;
  this.autoDestroy = !!p3.autoDestroy;
  this.destroyed = false;
  this.defaultEncoding = p3.defaultEncoding || "utf8";
  this.awaitDrain = 0;
  this.readingMore = false;
  this.decoder = null;
  this.encoding = null;
  if (p3.encoding) {
    v5 ||= require("./179.js").c;
    this.decoder = new v5(p3.encoding);
    this.encoding = p3.encoding;
  }
}
function f3(p6) {
  v = v || require("./163.js");
  if (!(this instanceof f3)) {
    return new f3(p6);
  }
  var v15 = this instanceof v;
  this._readableState = new f2(p6, this, v15);
  this.readable = true;
  if (p6) {
    if (typeof p6.read === "function") {
      this._read = p6.read;
    }
    if (typeof p6.destroy === "function") {
      this._destroy = p6.destroy;
    }
  }
  js.call(this);
}
function f4(p7, p8, p9, p10, p11) {
  v4("readableAddChunk", p8);
  var v16;
  var v17 = p7._readableState;
  if (p8 === null) {
    v17.reading = false;
    (function (p12, p13) {
      v4("onEofChunk");
      if (p13.ended) {
        return;
      }
      if (p13.decoder) {
        var v18 = p13.decoder.end();
        if (v18 && v18.length) {
          p13.buffer.push(v18);
          p13.length += p13.objectMode ? 1 : v18.length;
        }
      }
      p13.ended = true;
      if (p13.sync) {
        f7(p12);
      } else {
        p13.needReadable = false;
        if (!p13.emittedReadable) {
          p13.emittedReadable = true;
          f8(p12);
        }
      }
    })(p7, v17);
  } else {
    if (!p11) {
      v16 = function (p14, p15) {
        var v19;
        v20 = p15;
        if (!v2.isBuffer(v20) && !(v20 instanceof v3) && typeof p15 !== "string" && p15 !== undefined && !p14.objectMode) {
          v19 = new v10("chunk", ["string", "HU", "Uint8Array"], p15);
        }
        var v20;
        return v19;
      }(v17, p8);
    }
    if (v16) {
      v14(p7, v16);
    } else if (v17.objectMode || p8 && p8.length > 0) {
      if (typeof p8 !== "string" && !v17.objectMode && Object.getPrototypeOf(p8) !== v2.prototype) {
        p8 = function (p16) {
          return v2.from(p16);
        }(p8);
      }
      if (p10) {
        if (v17.endEmitted) {
          v14(p7, new v13());
        } else {
          f5(p7, v17, p8, true);
        }
      } else if (v17.ended) {
        v14(p7, new v11());
      } else {
        if (v17.destroyed) {
          return false;
        }
        v17.reading = false;
        if (v17.decoder && !p9) {
          p8 = v17.decoder.write(p8);
          if (v17.objectMode || p8.length !== 0) {
            f5(p7, v17, p8, false);
          } else {
            f9(p7, v17);
          }
        } else {
          f5(p7, v17, p8, false);
        }
      }
    } else if (!p10) {
      v17.reading = false;
      f9(p7, v17);
    }
  }
  return !v17.ended && (v17.length < v17.highWaterMark || v17.length === 0);
}
function f5(p17, p18, p19, p20) {
  if (p18.flowing && p18.length === 0 && !p18.sync) {
    p18.awaitDrain = 0;
    p17.emit("data", p19);
  } else {
    p18.length += p18.objectMode ? 1 : p19.length;
    if (p20) {
      p18.buffer.unshift(p19);
    } else {
      p18.buffer.push(p19);
    }
    if (p18.needReadable) {
      f7(p17);
    }
  }
  f9(p17, p18);
}
Object.defineProperty(f3.prototype, "destroyed", {
  enumerable: false,
  get: function () {
    return this._readableState !== undefined && this._readableState.destroyed;
  },
  set: function (p21) {
    if (this._readableState) {
      this._readableState.destroyed = p21;
    }
  }
});
f3.prototype.destroy = js4.destroy;
f3.prototype._undestroy = js4.undestroy;
f3.prototype._destroy = function (p22, p23) {
  p23(p22);
};
f3.prototype.push = function (p24, p25) {
  var v21;
  var v22 = this._readableState;
  if (v22.objectMode) {
    v21 = true;
  } else if (typeof p24 === "string") {
    if ((p25 = p25 || v22.defaultEncoding) !== v22.encoding) {
      p24 = v2.from(p24, p25);
      p25 = "";
    }
    v21 = true;
  }
  return f4(this, p24, p25, false, v21);
};
f3.prototype.unshift = function (p26) {
  return f4(this, p26, null, true, false);
};
f3.prototype.isPaused = function () {
  return this._readableState.flowing === false;
};
f3.prototype.setEncoding = function (p27) {
  v5 ||= require("./179.js").c;
  var v23 = new v5(p27);
  this._readableState.decoder = v23;
  this._readableState.encoding = this._readableState.decoder.encoding;
  for (var v24 = this._readableState.buffer.head, vLS = ""; v24 !== null;) {
    vLS += v23.write(v24.data);
    v24 = v24.next;
  }
  this._readableState.buffer.clear();
  if (vLS !== "") {
    this._readableState.buffer.push(vLS);
  }
  this._readableState.length = vLS.length;
  return this;
};
var vLN10737418242 = 1073741824;
function f6(p28, p29) {
  if (p28 <= 0 || p29.length === 0 && p29.ended) {
    return 0;
  } else if (p29.objectMode) {
    return 1;
  } else if (p28 !== p28) {
    if (p29.flowing && p29.length) {
      return p29.buffer.head.data.length;
    } else {
      return p29.length;
    }
  } else {
    if (p28 > p29.highWaterMark) {
      p29.highWaterMark = function (p30) {
        if (p30 >= vLN10737418242) {
          p30 = vLN10737418242;
        } else {
          p30--;
          p30 |= p30 >>> 1;
          p30 |= p30 >>> 2;
          p30 |= p30 >>> 4;
          p30 |= p30 >>> 8;
          p30 |= p30 >>> 16;
          p30++;
        }
        return p30;
      }(p28);
    }
    if (p28 <= p29.length) {
      return p28;
    } else if (p29.ended) {
      return p29.length;
    } else {
      p29.needReadable = true;
      return 0;
    }
  }
}
function f7(p31) {
  var v25 = p31._readableState;
  v4("emitReadable", v25.needReadable, v25.emittedReadable);
  v25.needReadable = false;
  if (!v25.emittedReadable) {
    v4("emitReadable", v25.flowing);
    v25.emittedReadable = true;
    process.nextTick(f8, p31);
  }
}
function f8(p32) {
  var v26 = p32._readableState;
  v4("emitReadable_", v26.destroyed, v26.length, v26.ended);
  if (!v26.destroyed && (!!v26.length || !!v26.ended)) {
    p32.emit("readable");
    v26.emittedReadable = false;
  }
  v26.needReadable = !v26.flowing && !v26.ended && v26.length <= v26.highWaterMark;
  f14(p32);
}
function f9(p33, p34) {
  if (!p34.readingMore) {
    p34.readingMore = true;
    process.nextTick(f10, p33, p34);
  }
}
function f10(p35, p36) {
  while (!p36.reading && !p36.ended && (p36.length < p36.highWaterMark || p36.flowing && p36.length === 0)) {
    var v27 = p36.length;
    v4("maybeReadMore read 0");
    p35.read(0);
    if (v27 === p36.length) {
      break;
    }
  }
  p36.readingMore = false;
}
function f11(p37) {
  var v28 = p37._readableState;
  v28.readableListening = p37.listenerCount("readable") > 0;
  if (v28.resumeScheduled && !v28.paused) {
    v28.flowing = true;
  } else if (p37.listenerCount("data") > 0) {
    p37.resume();
  }
}
function f12(p38) {
  v4("readable nexttick read 0");
  p38.read(0);
}
function f13(p39, p40) {
  v4("resume", p40.reading);
  if (!p40.reading) {
    p39.read(0);
  }
  p40.resumeScheduled = false;
  p39.emit("resume");
  f14(p39);
  if (p40.flowing && !p40.reading) {
    p39.read(0);
  }
}
function f14(p41) {
  var v29 = p41._readableState;
  for (v4("flow", v29.flowing); v29.flowing && p41.read() !== null;);
}
function f15(p42, p43) {
  if (p43.length === 0) {
    return null;
  } else {
    if (p43.objectMode) {
      v30 = p43.buffer.shift();
    } else if (!p42 || p42 >= p43.length) {
      v30 = p43.decoder ? p43.buffer.join("") : p43.buffer.length === 1 ? p43.buffer.first() : p43.buffer.concat(p43.length);
      p43.buffer.clear();
    } else {
      v30 = p43.buffer.consume(p42, p43.decoder);
    }
    return v30;
  }
  var v30;
}
function f16(p44) {
  var v31 = p44._readableState;
  v4("endReadable", v31.endEmitted);
  if (!v31.endEmitted) {
    v31.ended = true;
    process.nextTick(f17, v31, p44);
  }
}
function f17(p45, p46) {
  v4("endReadableNT", p45.endEmitted, p45.length);
  if (!p45.endEmitted && p45.length === 0 && (p45.endEmitted = true, p46.readable = false, p46.emit("end"), p45.autoDestroy)) {
    var v32 = p46._writableState;
    if (!v32 || v32.autoDestroy && v32.finished) {
      p46.destroy();
    }
  }
}
function f18(p47, p48) {
  for (var vLN0 = 0, v33 = p47.length; vLN0 < v33; vLN0++) {
    if (p47[vLN0] === p48) {
      return vLN0;
    }
  }
  return -1;
}
f3.prototype.read = function (p49) {
  v4("read", p49);
  p49 = parseInt(p49, 10);
  var v34 = this._readableState;
  var vP49 = p49;
  if (p49 !== 0) {
    v34.emittedReadable = false;
  }
  if (p49 === 0 && v34.needReadable && ((v34.highWaterMark !== 0 ? v34.length >= v34.highWaterMark : v34.length > 0) || v34.ended)) {
    v4("read: emitReadable", v34.length, v34.ended);
    if (v34.length === 0 && v34.ended) {
      f16(this);
    } else {
      f7(this);
    }
    return null;
  }
  if ((p49 = f6(p49, v34)) === 0 && v34.ended) {
    if (v34.length === 0) {
      f16(this);
    }
    return null;
  }
  var v35;
  var v36 = v34.needReadable;
  v4("need readable", v36);
  if (v34.length === 0 || v34.length - p49 < v34.highWaterMark) {
    v4("length less than watermark", v36 = true);
  }
  if (v34.ended || v34.reading) {
    v4("reading or ended", v36 = false);
  } else if (v36) {
    v4("do read");
    v34.reading = true;
    v34.sync = true;
    if (v34.length === 0) {
      v34.needReadable = true;
    }
    this._read(v34.highWaterMark);
    v34.sync = false;
    if (!v34.reading) {
      p49 = f6(vP49, v34);
    }
  }
  if ((v35 = p49 > 0 ? f15(p49, v34) : null) === null) {
    v34.needReadable = v34.length <= v34.highWaterMark;
    p49 = 0;
  } else {
    v34.length -= p49;
    v34.awaitDrain = 0;
  }
  if (v34.length === 0) {
    if (!v34.ended) {
      v34.needReadable = true;
    }
    if (vP49 !== p49 && v34.ended) {
      f16(this);
    }
  }
  if (v35 !== null) {
    this.emit("data", v35);
  }
  return v35;
};
f3.prototype._read = function (p50) {
  v14(this, new v12("_read()"));
};
f3.prototype.pipe = function (p51, p52) {
  var vThis3 = this;
  var v37 = this._readableState;
  switch (v37.pipesCount) {
    case 0:
      v37.pipes = p51;
      break;
    case 1:
      v37.pipes = [v37.pipes, p51];
      break;
    default:
      v37.pipes.push(p51);
  }
  v37.pipesCount += 1;
  v4("pipe count=%d opts=%j", v37.pipesCount, p52);
  var v38 = (!p52 || p52.end !== false) && p51 !== process.stdout && p51 !== process.stderr ? f20 : f25;
  function f19(p53, p54) {
    v4("onunpipe");
    if (p53 === vThis3 && p54 && p54.hasUnpiped === false) {
      p54.hasUnpiped = true;
      v4("cleanup");
      p51.removeListener("close", f23);
      p51.removeListener("finish", f24);
      p51.removeListener("drain", vF);
      p51.removeListener("error", f22);
      p51.removeListener("unpipe", f19);
      vThis3.removeListener("end", f20);
      vThis3.removeListener("end", f25);
      vThis3.removeListener("data", f21);
      v40 = true;
      if (!!v37.awaitDrain && (!p51._writableState || !!p51._writableState.needDrain)) {
        vF();
      }
    }
  }
  function f20() {
    v4("onend");
    p51.end();
  }
  if (v37.endEmitted) {
    process.nextTick(v38);
  } else {
    vThis3.once("end", v38);
  }
  p51.on("unpipe", f19);
  var vF = function (p55) {
    return function () {
      var v39 = p55._readableState;
      v4("pipeOnDrain", v39.awaitDrain);
      if (v39.awaitDrain) {
        v39.awaitDrain--;
      }
      if (v39.awaitDrain === 0 && f(p55, "data")) {
        v39.flowing = true;
        f14(p55);
      }
    };
  }(vThis3);
  p51.on("drain", vF);
  var v40 = false;
  function f21(p56) {
    v4("ondata");
    var v41 = p51.write(p56);
    v4("dest.write", v41);
    if (v41 === false) {
      if ((v37.pipesCount === 1 && v37.pipes === p51 || v37.pipesCount > 1 && f18(v37.pipes, p51) !== -1) && !v40) {
        v4("false write response, pause", v37.awaitDrain);
        v37.awaitDrain++;
      }
      vThis3.pause();
    }
  }
  function f22(p57) {
    v4("onerror", p57);
    f25();
    p51.removeListener("error", f22);
    if (f(p51, "error") === 0) {
      v14(p51, p57);
    }
  }
  function f23() {
    p51.removeListener("finish", f24);
    f25();
  }
  function f24() {
    v4("onfinish");
    p51.removeListener("close", f23);
    f25();
  }
  function f25() {
    v4("unpipe");
    vThis3.unpipe(p51);
  }
  vThis3.on("data", f21);
  (function (p58, p59, p60) {
    if (typeof p58.prependListener === "function") {
      return p58.prependListener(p59, p60);
    }
    if (p58._events && p58._events[p59]) {
      if (Array.isArray(p58._events[p59])) {
        p58._events[p59].unshift(p60);
      } else {
        p58._events[p59] = [p60, p58._events[p59]];
      }
    } else {
      p58.on(p59, p60);
    }
  })(p51, "error", f22);
  p51.once("close", f23);
  p51.once("finish", f24);
  p51.emit("pipe", vThis3);
  if (!v37.flowing) {
    v4("pipe resume");
    vThis3.resume();
  }
  return p51;
};
f3.prototype.unpipe = function (p61) {
  var v42 = this._readableState;
  var vO = {
    hasUnpiped: false
  };
  if (v42.pipesCount === 0) {
    return this;
  }
  if (v42.pipesCount === 1) {
    if (!p61 || p61 === v42.pipes) {
      p61 ||= v42.pipes;
      v42.pipes = null;
      v42.pipesCount = 0;
      v42.flowing = false;
      if (p61) {
        p61.emit("unpipe", this, vO);
      }
    }
    return this;
  }
  if (!p61) {
    var v43 = v42.pipes;
    var v44 = v42.pipesCount;
    v42.pipes = null;
    v42.pipesCount = 0;
    v42.flowing = false;
    for (var vLN02 = 0; vLN02 < v44; vLN02++) {
      v43[vLN02].emit("unpipe", this, {
        hasUnpiped: false
      });
    }
    return this;
  }
  var vF18 = f18(v42.pipes, p61);
  if (vF18 !== -1) {
    v42.pipes.splice(vF18, 1);
    v42.pipesCount -= 1;
    if (v42.pipesCount === 1) {
      v42.pipes = v42.pipes[0];
    }
    p61.emit("unpipe", this, vO);
  }
  return this;
};
f3.prototype.on = function (p62, p63) {
  var v45 = js.prototype.on.call(this, p62, p63);
  var v46 = this._readableState;
  if (p62 === "data") {
    v46.readableListening = this.listenerCount("readable") > 0;
    if (v46.flowing !== false) {
      this.resume();
    }
  } else if (p62 === "readable") {
    if (!v46.endEmitted && !v46.readableListening) {
      v46.readableListening = v46.needReadable = true;
      v46.flowing = false;
      v46.emittedReadable = false;
      v4("on readable", v46.length, v46.reading);
      if (v46.length) {
        f7(this);
      } else if (!v46.reading) {
        process.nextTick(f12, this);
      }
    }
  }
  return v45;
};
f3.prototype.addListener = f3.prototype.on;
f3.prototype.removeListener = function (p64, p65) {
  var v47 = js.prototype.removeListener.call(this, p64, p65);
  if (p64 === "readable") {
    process.nextTick(f11, this);
  }
  return v47;
};
f3.prototype.XU = function (p66) {
  var v48 = js.prototype.XU.apply(this, arguments);
  if (p66 === "readable" || p66 === undefined) {
    process.nextTick(f11, this);
  }
  return v48;
};
f3.prototype.resume = function () {
  var v49 = this._readableState;
  if (!v49.flowing) {
    v4("resume");
    v49.flowing = !v49.readableListening;
    (function (p67, p68) {
      if (!p68.resumeScheduled) {
        p68.resumeScheduled = true;
        process.nextTick(f13, p67, p68);
      }
    })(this, v49);
  }
  v49.paused = false;
  return this;
};
f3.prototype.pause = function () {
  v4("call pause flowing=%j", this._readableState.flowing);
  if (this._readableState.flowing !== false) {
    v4("pause");
    this._readableState.flowing = false;
    this.emit("pause");
  }
  this._readableState.paused = true;
  return this;
};
f3.prototype.wrap = function (p69) {
  var vThis4 = this;
  var v50 = this._readableState;
  var v51 = false;
  p69.on("end", function () {
    v4("wrapped end");
    if (v50.decoder && !v50.ended) {
      var v52 = v50.decoder.end();
      if (v52 && v52.length) {
        vThis4.push(v52);
      }
    }
    vThis4.push(null);
  });
  p69.on("data", function (p70) {
    v4("wrapped data");
    if (v50.decoder) {
      p70 = v50.decoder.write(p70);
    }
    if (!v50.objectMode || p70 !== null && p70 !== undefined) {
      if (v50.objectMode || p70 && p70.length) {
        if (!vThis4.push(p70)) {
          v51 = true;
          p69.pause();
        }
      }
    }
  });
  for (var v53 in p69) {
    if (this[v53] === undefined && typeof p69[v53] === "function") {
      this[v53] = function (p71) {
        return function () {
          return p69[p71].apply(p69, arguments);
        };
      }(v53);
    }
  }
  for (var vLN03 = 0; vLN03 < vA.length; vLN03++) {
    p69.on(vA[vLN03], this.emit.bind(this, vA[vLN03]));
  }
  this._read = function (p72) {
    v4("wrapped _read", p72);
    if (v51) {
      v51 = false;
      p69.resume();
    }
  };
  return this;
};
if (typeof Symbol === "function") {
  f3.prototype[Symbol.asyncIterator] = function () {
    if (v6 === undefined) {
      v6 = require("./192.js");
    }
    return v6(this);
  };
}
Object.defineProperty(f3.prototype, "readableHighWaterMark", {
  enumerable: false,
  get: function () {
    return this._readableState.highWaterMark;
  }
});
Object.defineProperty(f3.prototype, "readableBuffer", {
  enumerable: false,
  get: function () {
    return this._readableState && this._readableState.buffer;
  }
});
Object.defineProperty(f3.prototype, "readableFlowing", {
  enumerable: false,
  get: function () {
    return this._readableState.flowing;
  },
  set: function (p73) {
    if (this._readableState) {
      this._readableState.flowing = p73;
    }
  }
});
f3._fromList = f15;
Object.defineProperty(f3.prototype, "readableLength", {
  enumerable: false,
  get: function () {
    return this._readableState.length;
  }
});
if (typeof Symbol === "function") {
  f3.from = function (p74, p75) {
    if (v7 === undefined) {
      v7 = require("./207.js");
    }
    return v7(f3, p74, p75);
  };
}