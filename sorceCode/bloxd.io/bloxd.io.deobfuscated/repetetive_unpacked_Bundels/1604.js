var fC = function () {
  if ("undefined" !== typeof Map) {
    return Map;
  }
  function CC(CC, yC) {
    var IC = -1;
    CC.some(function (CC, fC) {
      return CC[0] === yC && (IC = fC, !0);
    });
    return IC;
  }
  return function () {
    function yC() {
      this.__entries__ = [];
    }
    Object.defineProperty(yC.prototype, "size", {
      get: function () {
        return this.__entries__.length;
      },
      enumerable: !0,
      configurable: !0
    });
    yC.prototype.get = function (yC) {
      var IC = CC(this.__entries__, yC);
      var fC = this.__entries__[IC];
      return fC && fC[1];
    };
    yC.prototype.set = function (yC, IC) {
      var fC = CC(this.__entries__, yC);
      ~fC ? this.__entries__[fC][1] = IC : this.__entries__.push([yC, IC]);
    };
    yC.prototype.delete = function (yC) {
      var IC = this.__entries__;
      var fC = CC(IC, yC);
      ~fC && IC.splice(fC, 1);
    };
    yC.prototype.has = function (yC) {
      return !!~CC(this.__entries__, yC);
    };
    yC.prototype.clear = function () {
      this.__entries__.splice(0);
    };
    yC.prototype.forEach = function (CC, yC) {
      void 0 === yC && (yC = null);
      for (var IC = 0, fC = this.__entries__; IC < fC.length; IC++) {
        var ky = fC[IC];
        CC.call(yC, ky[1], ky[0]);
      }
    };
    return yC;
  }();
}();
var ky = "undefined" !== typeof window && "undefined" !== typeof document && window.document === document;
var gC = "undefined" !== typeof require.g && require.g.Math === Math ? require.g : "undefined" !== typeof self && self.Math === Math ? self : "undefined" !== typeof window && window.Math === Math ? window : Function("return this")();
var AC = "function" === typeof requestAnimationFrame ? requestAnimationFrame.bind(gC) : function (CC) {
  return setTimeout(function () {
    return CC(Date.now());
  }, 1e3 / 60);
};
var my = ["top", "right", "bottom", "left", "width", "height", "size", "weight"];
var XC = "undefined" !== typeof MutationObserver;
var iy = function () {
  function CC() {
    this.connected_ = !1;
    this.mutationEventsAdded_ = !1;
    this.mutationsObserver_ = null;
    this.observers_ = [];
    this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
    this.refresh = function (CC, yC) {
      var IC = !1;
      var fC = !1;
      var ky = 0;
      function gC() {
        IC && (IC = !1, CC());
        fC && XC();
      }
      function my() {
        AC(gC);
      }
      function XC() {
        var CC = Date.now();
        if (IC) {
          if (CC - ky < 2) {
            return;
          }
          fC = !0;
        } else {
          IC = !0;
          fC = !1;
          setTimeout(my, yC);
        }
        ky = CC;
      }
      return XC;
    }(this.refresh.bind(this), 20);
  }
  CC.prototype.addObserver = function (CC) {
    ~this.observers_.indexOf(CC) || this.observers_.push(CC);
    this.connected_ || this.connect_();
  };
  CC.prototype.removeObserver = function (CC) {
    var yC = this.observers_;
    var IC = yC.indexOf(CC);
    ~IC && yC.splice(IC, 1);
    !yC.length && this.connected_ && this.disconnect_();
  };
  CC.prototype.refresh = function () {
    this.updateObservers_() && this.refresh();
  };
  CC.prototype.updateObservers_ = function () {
    var CC = this.observers_.filter(function (CC) {
      CC.gatherActive();
      return CC.hasActive();
    });
    CC.forEach(function (CC) {
      return CC.broadcastActive();
    });
    return CC.length > 0;
  };
  CC.prototype.connect_ = function () {
    ky && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), XC ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
      attributes: !0,
      childList: !0,
      characterData: !0,
      subtree: !0
    })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
  };
  CC.prototype.disconnect_ = function () {
    ky && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
  };
  CC.prototype.onTransitionEnd_ = function (CC) {
    var yC = CC.propertyName;
    var IC = void 0 === yC ? "" : yC;
    my.some(function (CC) {
      return !!~IC.indexOf(CC);
    }) && this.refresh();
  };
  CC.getInstance = function () {
    this.instance_ || (this.instance_ = new CC());
    return this.instance_;
  };
  CC.instance_ = null;
  return CC;
}();
function LC(CC, yC) {
  for (var IC = 0, fC = Object.keys(yC); IC < fC.length; IC++) {
    var ky = fC[IC];
    Object.defineProperty(CC, ky, {
      value: yC[ky],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return CC;
}
function YC(CC) {
  return CC && CC.ownerDocument && CC.ownerDocument.defaultView || gC;
}
var bC = TC(0, 0, 0, 0);
function rC(CC) {
  return parseFloat(CC) || 0;
}
function GC(CC) {
  for (var yC = [], IC = 1; IC < arguments.length; IC++) {
    yC[IC - 1] = arguments[IC];
  }
  return yC.reduce(function (yC, IC) {
    return yC + rC(CC["border-" + IC + "-width"]);
  }, 0);
}
function eC(CC) {
  var yC = CC.clientWidth;
  var IC = CC.clientHeight;
  if (!yC && !IC) {
    return bC;
  }
  var fC = YC(CC).getComputedStyle(CC);
  var ky = function (CC) {
    for (var yC = {}, IC = 0, fC = ["top", "right", "bottom", "left"]; IC < fC.length; IC++) {
      var ky = fC[IC];
      var gC = CC["padding-" + ky];
      yC[ky] = rC(gC);
    }
    return yC;
  }(fC);
  var gC = ky.left + ky.right;
  var AC = ky.top + ky.bottom;
  var my = rC(fC.width);
  var XC = rC(fC.height);
  "border-box" === fC.boxSizing && (Math.round(my + gC) !== yC && (my -= GC(fC, "left", "right") + gC), Math.round(XC + AC) !== IC && (XC -= GC(fC, "top", "bottom") + AC));
  if (!function (CC) {
    return CC === YC(CC).document.documentElement;
  }(CC)) {
    var iy = Math.round(my + gC) - yC;
    var LC = Math.round(XC + AC) - IC;
    1 !== Math.abs(iy) && (my -= iy);
    1 !== Math.abs(LC) && (XC -= LC);
  }
  return TC(ky.left, ky.top, my, XC);
}
var OC = "undefined" !== typeof SVGGraphicsElement ? function (CC) {
  return CC instanceof YC(CC).SVGGraphicsElement;
} : function (CC) {
  return CC instanceof YC(CC).SVGElement && "function" === typeof CC.getBBox;
};
function SC(CC) {
  return ky ? OC(CC) ? function (CC) {
    var yC = CC.getBBox();
    return TC(0, 0, yC.width, yC.height);
  }(CC) : eC(CC) : bC;
}
function TC(CC, yC, IC, fC) {
  return {
    x: CC,
    y: yC,
    width: IC,
    height: fC
  };
}
var NC = function () {
  function CC(CC) {
    this.broadcastWidth = 0;
    this.broadcastHeight = 0;
    this.contentRect_ = TC(0, 0, 0, 0);
    this.target = CC;
  }
  CC.prototype.isActive = function () {
    var CC = SC(this.target);
    this.contentRect_ = CC;
    return CC.width !== this.broadcastWidth || CC.height !== this.broadcastHeight;
  };
  CC.prototype.broadcastRect = function () {
    var CC = this.contentRect_;
    this.broadcastWidth = CC.width;
    this.broadcastHeight = CC.height;
    return CC;
  };
  return CC;
}();
function sC(CC, yC) {
  var IC = function (CC) {
    var yC = CC.x;
    var IC = CC.y;
    var fC = CC.width;
    var ky = CC.height;
    var gC = "undefined" !== typeof DOMRectReadOnly ? DOMRectReadOnly : Object;
    var AC = Object.create(gC.prototype);
    LC(AC, {
      x: yC,
      y: IC,
      width: fC,
      height: ky,
      top: IC,
      right: yC + fC,
      bottom: ky + IC,
      left: yC
    });
    return AC;
  }(yC);
  LC(this, {
    target: CC,
    contentRect: IC
  });
}
var jy = function () {
  function CC(CC, yC, IC) {
    this.activeObservations_ = [];
    this.observations_ = new fC();
    if ("function" !== typeof CC) {
      throw new TypeError("The callback provided as parameter 1 is not a function.");
    }
    this.callback_ = CC;
    this.controller_ = yC;
    this.callbackCtx_ = IC;
  }
  CC.prototype.observe = function (CC) {
    if (!arguments.length) {
      throw new TypeError("1 argument required, but only 0 present.");
    }
    if ("undefined" !== typeof Element && Element instanceof Object) {
      if (!(CC instanceof YC(CC).Element)) {
        throw new TypeError('parameter 1 is not of type "Element".');
      }
      var yC = this.observations_;
      yC.has(CC) || (yC.set(CC, new NC(CC)), this.controller_.addObserver(this), this.controller_.refresh());
    }
  };
  CC.prototype.unobserve = function (CC) {
    if (!arguments.length) {
      throw new TypeError("1 argument required, but only 0 present.");
    }
    if ("undefined" !== typeof Element && Element instanceof Object) {
      if (!(CC instanceof YC(CC).Element)) {
        throw new TypeError('parameter 1 is not of type "Element".');
      }
      var yC = this.observations_;
      yC.has(CC) && (yC.delete(CC), yC.size || this.controller_.removeObserver(this));
    }
  };
  CC.prototype.disconnect = function () {
    this.clearActive();
    this.observations_.clear();
    this.controller_.removeObserver(this);
  };
  CC.prototype.gatherActive = function () {
    var CC = this;
    this.clearActive();
    this.observations_.forEach(function (yC) {
      yC.isActive() && CC.activeObservations_.push(yC);
    });
  };
  CC.prototype.broadcastActive = function () {
    if (this.hasActive()) {
      var CC = this.callbackCtx_;
      var yC = this.activeObservations_.map(function (CC) {
        return new sC(CC.target, CC.broadcastRect());
      });
      this.callback_.call(CC, yC, CC);
      this.clearActive();
    }
  };
  CC.prototype.clearActive = function () {
    this.activeObservations_.splice(0);
  };
  CC.prototype.hasActive = function () {
    return this.activeObservations_.length > 0;
  };
  return CC;
}();
var qC = "undefined" !== typeof WeakMap ? new WeakMap() : new fC();
var KC = function CC(yC) {
  if (!(this instanceof CC)) {
    throw new TypeError("Cannot call a class as a function.");
  }
  if (!arguments.length) {
    throw new TypeError("1 argument required, but only 0 present.");
  }
  var IC = iy.getInstance();
  var fC = new jy(yC, IC, this);
  qC.set(this, fC);
};
["observe", "unobserve", "disconnect"].forEach(function (CC) {
  KC.prototype[CC] = function () {
    var yC;
    return (yC = qC.get(this))[CC].apply(yC, arguments);
  };
});
export default "undefined" !== typeof gC.ResizeObserver ? gC.ResizeObserver : KC;