var v;
var v2 = typeof Reflect === "object" ? Reflect : null;
function f(p, p2, p3) {
  return Function.prototype.apply.call(p, p2, p3);
}
v = v2 && typeof v2.ownKeys === "function" ? v2.ownKeys : Object.getOwnPropertySymbols ? function (p4) {
  return Object.getOwnPropertyNames(p4).concat(Object.getOwnPropertySymbols(p4));
} : function (p5) {
  return Object.getOwnPropertyNames(p5);
};
var v3 = Number.isNaN || function (p6) {
  return p6 !== p6;
};
function f2() {
  f2.init.call(this);
}
module.exports = f2;
module.exports.once = function (p7, p8) {
  return new Promise(function (p9, p10) {
    function f3(p11) {
      p7.removeListener(p8, f4);
      p10(p11);
    }
    function f4() {
      if (typeof p7.removeListener === "function") {
        p7.removeListener("error", f3);
      }
      p9([].slice.call(arguments));
    }
    f13(p7, p8, f4, {
      once: true
    });
    if (p8 !== "error") {
      (function (p12, p13, p14) {
        if (typeof p12.on === "function") {
          f13(p12, "error", p13, p14);
        }
      })(p7, f3, {
        once: true
      });
    }
  });
};
f2.EventEmitter = f2;
f2.prototype._events = undefined;
f2.prototype._eventsCount = 0;
f2.prototype._maxListeners = undefined;
var vLN102 = 10;
function f5(p15) {
  if (typeof p15 !== "function") {
    throw new TypeError("The \"listener\" argument must be of type Function. Received type " + typeof p15);
  }
}
function f6(p16) {
  if (p16._maxListeners === undefined) {
    return f2.defaultMaxListeners;
  } else {
    return p16._maxListeners;
  }
}
function f7(p17, p18, p19, p20) {
  var v4;
  var v5;
  var v6;
  var v7;
  f5(p19);
  if ((v5 = p17._events) === undefined) {
    v5 = p17._events = Object.create(null);
    p17._eventsCount = 0;
  } else {
    if (v5.newListener !== undefined) {
      p17.emit("newListener", p18, p19.listener ? p19.listener : p19);
      v5 = p17._events;
    }
    v6 = v5[p18];
  }
  if (v6 === undefined) {
    v6 = v5[p18] = p19;
    ++p17._eventsCount;
  } else {
    if (typeof v6 === "function") {
      v6 = v5[p18] = p20 ? [p19, v6] : [v6, p19];
    } else if (p20) {
      v6.unshift(p19);
    } else {
      v6.push(p19);
    }
    if ((v4 = f6(p17)) > 0 && v6.length > v4 && !v6.warned) {
      v6.warned = true;
      var v8 = new Error("Possible EventEmitter memory leak detected. " + v6.length + " " + String(p18) + " listeners added. Use emitter.setMaxListeners() to increase limit");
      v8.name = "MaxListenersExceededWarning";
      v8.RU = p17;
      v8.type = p18;
      v8.count = v6.length;
      v7 = v8;
      if (console && console.warn) {
        console.warn(v7);
      }
    }
  }
  return p17;
}
function f8() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0) {
      return this.listener.call(this.target);
    } else {
      return this.listener.apply(this.target, arguments);
    }
  }
}
function f9(p21, p22, p23) {
  var vO = {
    fired: false,
    wrapFn: undefined,
    target: p21,
    type: p22,
    listener: p23
  };
  var v9 = f8.bind(vO);
  v9.listener = p23;
  vO.wrapFn = v9;
  return v9;
}
function f10(p24, p25, p26) {
  var v10 = p24._events;
  if (v10 === undefined) {
    return [];
  }
  var v11 = v10[p25];
  if (v11 === undefined) {
    return [];
  } else if (typeof v11 === "function") {
    if (p26) {
      return [v11.listener || v11];
    } else {
      return [v11];
    }
  } else if (p26) {
    return function (p27) {
      for (var v12 = new Array(p27.length), vLN0 = 0; vLN0 < v12.length; ++vLN0) {
        v12[vLN0] = p27[vLN0].listener || p27[vLN0];
      }
      return v12;
    }(v11);
  } else {
    return f12(v11, v11.length);
  }
}
function f11(p28) {
  var v13 = this._events;
  if (v13 !== undefined) {
    var v14 = v13[p28];
    if (typeof v14 === "function") {
      return 1;
    }
    if (v14 !== undefined) {
      return v14.length;
    }
  }
  return 0;
}
function f12(p29, p30) {
  var v15 = new Array(p30);
  for (var vLN02 = 0; vLN02 < p30; ++vLN02) {
    v15[vLN02] = p29[vLN02];
  }
  return v15;
}
function f13(p31, p32, p33, p34) {
  if (typeof p31.on === "function") {
    if (p34.once) {
      p31.once(p32, p33);
    } else {
      p31.on(p32, p33);
    }
  } else {
    if (typeof p31.addEventListener !== "function") {
      throw new TypeError("The \"emitter\" argument must be of type EventEmitter. Received type " + typeof p31);
    }
    p31.addEventListener(p32, function f14(p35) {
      if (p34.once) {
        p31.removeEventListener(p32, f14);
      }
      p33(p35);
    });
  }
}
Object.defineProperty(f2, "defaultMaxListeners", {
  enumerable: true,
  get: function () {
    return vLN102;
  },
  set: function (p36) {
    if (typeof p36 !== "number" || p36 < 0 || v3(p36)) {
      throw new RangeError("The value of \"defaultMaxListeners\" is out of range. It must be a non-negative number. Received " + p36 + ".");
    }
    vLN102 = p36;
  }
});
f2.init = function () {
  if (this._events === undefined || this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }
  this._maxListeners = this._maxListeners || undefined;
};
f2.prototype.setMaxListeners = function (p37) {
  if (typeof p37 !== "number" || p37 < 0 || v3(p37)) {
    throw new RangeError("The value of \"n\" is out of range. It must be a non-negative number. Received " + p37 + ".");
  }
  this._maxListeners = p37;
  return this;
};
f2.prototype.getMaxListeners = function () {
  return f6(this);
};
f2.prototype.emit = function (p38) {
  var vA = [];
  for (var vLN1 = 1; vLN1 < arguments.length; vLN1++) {
    vA.push(arguments[vLN1]);
  }
  var v16 = p38 === "error";
  var v17 = this._events;
  if (v17 !== undefined) {
    v16 = v16 && v17.error === undefined;
  } else if (!v16) {
    return false;
  }
  if (v16) {
    var v18;
    if (vA.length > 0) {
      v18 = vA[0];
    }
    if (v18 instanceof Error) {
      throw v18;
    }
    var v19 = new Error("Unhandled error." + (v18 ? " (" + v18.message + ")" : ""));
    v19.context = v18;
    throw v19;
  }
  var v20 = v17[p38];
  if (v20 === undefined) {
    return false;
  }
  if (typeof v20 === "function") {
    f(v20, this, vA);
  } else {
    var v21 = v20.length;
    var vF12 = f12(v20, v21);
    for (vLN1 = 0; vLN1 < v21; ++vLN1) {
      f(vF12[vLN1], this, vA);
    }
  }
  return true;
};
f2.prototype.addListener = function (p39, p40) {
  return f7(this, p39, p40, false);
};
f2.prototype.on = f2.prototype.addListener;
f2.prototype.prependListener = function (p41, p42) {
  return f7(this, p41, p42, true);
};
f2.prototype.once = function (p43, p44) {
  f5(p44);
  this.on(p43, f9(this, p43, p44));
  return this;
};
f2.prototype.prependOnceListener = function (p45, p46) {
  f5(p46);
  this.prependListener(p45, f9(this, p45, p46));
  return this;
};
f2.prototype.removeListener = function (p47, p48) {
  var v22;
  var v23;
  var v24;
  var v25;
  var v26;
  f5(p48);
  if ((v23 = this._events) === undefined) {
    return this;
  }
  if ((v22 = v23[p47]) === undefined) {
    return this;
  }
  if (v22 === p48 || v22.listener === p48) {
    if (--this._eventsCount === 0) {
      this._events = Object.create(null);
    } else {
      delete v23[p47];
      if (v23.removeListener) {
        this.emit("removeListener", p47, v22.listener || p48);
      }
    }
  } else if (typeof v22 !== "function") {
    v24 = -1;
    v25 = v22.length - 1;
    for (; v25 >= 0; v25--) {
      if (v22[v25] === p48 || v22[v25].listener === p48) {
        v26 = v22[v25].listener;
        v24 = v25;
        break;
      }
    }
    if (v24 < 0) {
      return this;
    }
    if (v24 === 0) {
      v22.shift();
    } else {
      (function (p49, p50) {
        for (; p50 + 1 < p49.length; p50++) {
          p49[p50] = p49[p50 + 1];
        }
        p49.pop();
      })(v22, v24);
    }
    if (v22.length === 1) {
      v23[p47] = v22[0];
    }
    if (v23.removeListener !== undefined) {
      this.emit("removeListener", p47, v26 || p48);
    }
  }
  return this;
};
f2.prototype.off = f2.prototype.removeListener;
f2.prototype.XU = function (p51) {
  var v27;
  var v28;
  var v29;
  if ((v28 = this._events) === undefined) {
    return this;
  }
  if (v28.removeListener === undefined) {
    if (arguments.length === 0) {
      this._events = Object.create(null);
      this._eventsCount = 0;
    } else if (v28[p51] !== undefined) {
      if (--this._eventsCount === 0) {
        this._events = Object.create(null);
      } else {
        delete v28[p51];
      }
    }
    return this;
  }
  if (arguments.length === 0) {
    var v30;
    var v31 = Object.keys(v28);
    for (v29 = 0; v29 < v31.length; ++v29) {
      if ((v30 = v31[v29]) !== "removeListener") {
        this.XU(v30);
      }
    }
    this.XU("removeListener");
    this._events = Object.create(null);
    this._eventsCount = 0;
    return this;
  }
  if (typeof (v27 = v28[p51]) === "function") {
    this.removeListener(p51, v27);
  } else if (v27 !== undefined) {
    for (v29 = v27.length - 1; v29 >= 0; v29--) {
      this.removeListener(p51, v27[v29]);
    }
  }
  return this;
};
f2.prototype.listeners = function (p52) {
  return f10(this, p52, true);
};
f2.prototype.rawListeners = function (p53) {
  return f10(this, p53, false);
};
f2.listenerCount = function (p54, p55) {
  if (typeof p54.listenerCount === "function") {
    return p54.listenerCount(p55);
  } else {
    return f11.call(p54, p55);
  }
};
f2.prototype.listenerCount = f11;
f2.prototype.eventNames = function () {
  if (this._eventsCount > 0) {
    return v(this._events);
  } else {
    return [];
  }
};