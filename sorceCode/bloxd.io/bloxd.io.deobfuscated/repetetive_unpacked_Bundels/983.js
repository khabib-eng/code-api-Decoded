var yC;
var IC = "object" === typeof Reflect ? Reflect : null;
function fC(CC, yC, IC) {
  return Function.prototype.apply.call(CC, yC, IC);
}
yC = IC && "function" === typeof IC.ownKeys ? IC.ownKeys : Object.getOwnPropertySymbols ? function (CC) {
  return Object.getOwnPropertyNames(CC).concat(Object.getOwnPropertySymbols(CC));
} : function (CC) {
  return Object.getOwnPropertyNames(CC);
};
var ky = Number.isNaN || function (CC) {
  return CC !== CC;
};
function gC() {
  gC.init.call(this);
}
module.exports = gC;
module.exports.once = function (CC, yC) {
  return new Promise(function (IC, fC) {
    function ky(IC) {
      CC.removeListener(yC, gC);
      fC(IC);
    }
    function gC() {
      "function" === typeof CC.removeListener && CC.removeListener("error", ky);
      IC([].slice.call(arguments));
    }
    eC(CC, yC, gC, {
      once: !0
    });
    "error" !== yC && function (CC, yC, IC) {
      "function" === typeof CC.on && eC(CC, "error", yC, IC);
    }(CC, ky, {
      once: !0
    });
  });
};
gC.EventEmitter = gC;
gC.prototype._events = void 0;
gC.prototype._eventsCount = 0;
gC.prototype._maxListeners = void 0;
var AC = 10;
function my(CC) {
  if ("function" !== typeof CC) {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof CC);
  }
}
function XC(CC) {
  return void 0 === CC._maxListeners ? gC.defaultMaxListeners : CC._maxListeners;
}
function iy(CC, yC, IC, fC) {
  var ky;
  var gC;
  var AC;
  var iy;
  my(IC);
  void 0 === (gC = CC._events) ? (gC = CC._events = Object.create(null), CC._eventsCount = 0) : (void 0 !== gC.newListener && (CC.emit("newListener", yC, IC.listener ? IC.listener : IC), gC = CC._events), AC = gC[yC]);
  if (void 0 === AC) {
    AC = gC[yC] = IC;
    ++CC._eventsCount;
  } else {
    "function" === typeof AC ? AC = gC[yC] = fC ? [IC, AC] : [AC, IC] : fC ? AC.unshift(IC) : AC.push(IC);
    if ((ky = XC(CC)) > 0 && AC.length > ky && !AC.warned) {
      AC.warned = !0;
      var LC = new Error("Possible EventEmitter memory leak detected. " + AC.length + " " + String(yC) + " listeners added. Use emitter.setMaxListeners() to increase limit");
      LC.name = "MaxListenersExceededWarning";
      LC.Yy = CC;
      LC.type = yC;
      LC.count = AC.length;
      iy = LC;
      console && console.warn && console.warn(iy);
    }
  }
  return CC;
}
function LC() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = !0;
    return 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
  }
}
function YC(CC, yC, IC) {
  var fC = {
    fired: !1,
    wrapFn: void 0,
    target: CC,
    type: yC,
    listener: IC
  };
  var ky = LC.bind(fC);
  ky.listener = IC;
  fC.wrapFn = ky;
  return ky;
}
function bC(CC, yC, IC) {
  var fC = CC._events;
  if (void 0 === fC) {
    return [];
  }
  var ky = fC[yC];
  return void 0 === ky ? [] : "function" === typeof ky ? IC ? [ky.listener || ky] : [ky] : IC ? function (CC) {
    for (var yC = new Array(CC.length), IC = 0; IC < yC.length; ++IC) {
      yC[IC] = CC[IC].listener || CC[IC];
    }
    return yC;
  }(ky) : GC(ky, ky.length);
}
function rC(CC) {
  var yC = this._events;
  if (void 0 !== yC) {
    var IC = yC[CC];
    if ("function" === typeof IC) {
      return 1;
    }
    if (void 0 !== IC) {
      return IC.length;
    }
  }
  return 0;
}
function GC(CC, yC) {
  for (var IC = new Array(yC), fC = 0; fC < yC; ++fC) {
    IC[fC] = CC[fC];
  }
  return IC;
}
function eC(CC, yC, IC, fC) {
  if ("function" === typeof CC.on) {
    fC.once ? CC.once(yC, IC) : CC.on(yC, IC);
  } else {
    if ("function" !== typeof CC.addEventListener) {
      throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof CC);
    }
    CC.addEventListener(yC, function ky(gC) {
      fC.once && CC.removeEventListener(yC, ky);
      IC(gC);
    });
  }
}
Object.defineProperty(gC, "defaultMaxListeners", {
  enumerable: !0,
  get: function () {
    return AC;
  },
  set: function (CC) {
    if ("number" !== typeof CC || CC < 0 || ky(CC)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + CC + ".");
    }
    AC = CC;
  }
});
gC.init = function () {
  void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0);
  this._maxListeners = this._maxListeners || void 0;
};
gC.prototype.setMaxListeners = function (CC) {
  if ("number" !== typeof CC || CC < 0 || ky(CC)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + CC + ".");
  }
  this._maxListeners = CC;
  return this;
};
gC.prototype.getMaxListeners = function () {
  return XC(this);
};
gC.prototype.emit = function (CC) {
  for (var yC = [], IC = 1; IC < arguments.length; IC++) {
    yC.push(arguments[IC]);
  }
  var ky = "error" === CC;
  var gC = this._events;
  if (void 0 !== gC) {
    ky = ky && void 0 === gC.error;
  } else {
    if (!ky) {
      return !1;
    }
  }
  if (ky) {
    var AC;
    yC.length > 0 && (AC = yC[0]);
    if (AC instanceof Error) {
      throw AC;
    }
    var my = new Error("Unhandled error." + (AC ? " (" + AC.message + ")" : ""));
    my.context = AC;
    throw my;
  }
  var XC = gC[CC];
  if (void 0 === XC) {
    return !1;
  }
  if ("function" === typeof XC) {
    fC(XC, this, yC);
  } else {
    var iy = XC.length;
    var LC = GC(XC, iy);
    for (IC = 0; IC < iy; ++IC) {
      fC(LC[IC], this, yC);
    }
  }
  return !0;
};
gC.prototype.addListener = function (CC, yC) {
  return iy(this, CC, yC, !1);
};
gC.prototype.on = gC.prototype.addListener;
gC.prototype.prependListener = function (CC, yC) {
  return iy(this, CC, yC, !0);
};
gC.prototype.once = function (CC, yC) {
  my(yC);
  this.on(CC, YC(this, CC, yC));
  return this;
};
gC.prototype.prependOnceListener = function (CC, yC) {
  my(yC);
  this.prependListener(CC, YC(this, CC, yC));
  return this;
};
gC.prototype.removeListener = function (CC, yC) {
  var IC;
  var fC;
  var ky;
  var gC;
  var AC;
  my(yC);
  if (void 0 === (fC = this._events)) {
    return this;
  }
  if (void 0 === (IC = fC[CC])) {
    return this;
  }
  if (IC === yC || IC.listener === yC) {
    0 === --this._eventsCount ? this._events = Object.create(null) : (delete fC[CC], fC.removeListener && this.emit("removeListener", CC, IC.listener || yC));
  } else {
    if ("function" !== typeof IC) {
      ky = -1;
      gC = IC.length - 1;
      for (; gC >= 0; gC--) {
        if (IC[gC] === yC || IC[gC].listener === yC) {
          AC = IC[gC].listener;
          ky = gC;
          break;
        }
      }
      if (ky < 0) {
        return this;
      }
      0 === ky ? IC.shift() : function (CC, yC) {
        for (; yC + 1 < CC.length; yC++) {
          CC[yC] = CC[yC + 1];
        }
        CC.pop();
      }(IC, ky);
      1 === IC.length && (fC[CC] = IC[0]);
      void 0 !== fC.removeListener && this.emit("removeListener", CC, AC || yC);
    }
  }
  return this;
};
gC.prototype.off = gC.prototype.removeListener;
gC.prototype.by = function (CC) {
  var yC;
  var IC;
  var fC;
  if (void 0 === (IC = this._events)) {
    return this;
  }
  if (void 0 === IC.removeListener) {
    0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== IC[CC] && (0 === --this._eventsCount ? this._events = Object.create(null) : delete IC[CC]);
    return this;
  }
  if (0 === arguments.length) {
    var ky;
    var gC = Object.keys(IC);
    for (fC = 0; fC < gC.length; ++fC) {
      "removeListener" !== (ky = gC[fC]) && this.by(ky);
    }
    this.by("removeListener");
    this._events = Object.create(null);
    this._eventsCount = 0;
    return this;
  }
  if ("function" === typeof (yC = IC[CC])) {
    this.removeListener(CC, yC);
  } else {
    if (void 0 !== yC) {
      for (fC = yC.length - 1; fC >= 0; fC--) {
        this.removeListener(CC, yC[fC]);
      }
    }
  }
  return this;
};
gC.prototype.listeners = function (CC) {
  return bC(this, CC, !0);
};
gC.prototype.rawListeners = function (CC) {
  return bC(this, CC, !1);
};
gC.listenerCount = function (CC, yC) {
  return "function" === typeof CC.listenerCount ? CC.listenerCount(yC) : rC.call(CC, yC);
};
gC.prototype.listenerCount = rC;
gC.prototype.eventNames = function () {
  return this._eventsCount > 0 ? yC(this._events) : [];
};