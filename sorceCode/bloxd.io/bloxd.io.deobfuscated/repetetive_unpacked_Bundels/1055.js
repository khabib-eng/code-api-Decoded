var fC;
function ky(CC, yC, IC) {
  yC in CC ? Object.defineProperty(CC, yC, {
    value: IC,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : CC[yC] = IC;
  return CC;
}
var gC = require("./1057.js");
var AC = Symbol("lastResolve");
var my = Symbol("lastReject");
var XC = Symbol("error");
var iy = Symbol("ended");
var LC = Symbol("lastPromise");
var YC = Symbol("handlePromise");
var bC = Symbol("stream");
function rC(CC, yC) {
  return {
    value: CC,
    done: yC
  };
}
function GC(CC) {
  var yC = CC[AC];
  if (null !== yC) {
    var IC = CC[bC].read();
    null !== IC && (CC[LC] = null, CC[AC] = null, CC[my] = null, yC(rC(IC, !1)));
  }
}
function eC(CC) {
  process.nextTick(GC, CC);
}
var OC = Object.getPrototypeOf(function () {});
var SC = Object.setPrototypeOf((ky(fC = {
  get stream() {
    return this[bC];
  },
  next: function () {
    var CC = this;
    var yC = this[XC];
    if (null !== yC) {
      return Promise.reject(yC);
    }
    if (this[iy]) {
      return Promise.resolve(rC(void 0, !0));
    }
    if (this[bC].destroyed) {
      return new Promise(function (yC, IC) {
        process.nextTick(function () {
          CC[XC] ? IC(CC[XC]) : yC(rC(void 0, !0));
        });
      });
    }
    var IC;
    var fC = this[LC];
    if (fC) {
      IC = new Promise(function (CC, yC) {
        return function (IC, fC) {
          CC.then(function () {
            yC[iy] ? IC(rC(void 0, !0)) : yC[YC](IC, fC);
          }, fC);
        };
      }(fC, this));
    } else {
      var ky = this[bC].read();
      if (null !== ky) {
        return Promise.resolve(rC(ky, !1));
      }
      IC = new Promise(this[YC]);
    }
    this[LC] = IC;
    return IC;
  }
}, Symbol.asyncIterator, function () {
  return this;
}), ky(fC, "return", function () {
  var CC = this;
  return new Promise(function (yC, IC) {
    CC[bC].destroy(null, function (CC) {
      CC ? IC(CC) : yC(rC(void 0, !0));
    });
  });
}), fC), OC);
module.exports = function (CC) {
  var yC;
  var IC = Object.create(SC, (ky(yC = {}, bC, {
    value: CC,
    writable: !0
  }), ky(yC, AC, {
    value: null,
    writable: !0
  }), ky(yC, my, {
    value: null,
    writable: !0
  }), ky(yC, XC, {
    value: null,
    writable: !0
  }), ky(yC, iy, {
    value: CC._readableState.endEmitted,
    writable: !0
  }), ky(yC, YC, {
    value: function (CC, yC) {
      var fC = IC[bC].read();
      fC ? (IC[LC] = null, IC[AC] = null, IC[my] = null, CC(rC(fC, !1))) : (IC[AC] = CC, IC[my] = yC);
    },
    writable: !0
  }), yC));
  IC[LC] = null;
  gC(CC, function (CC) {
    if (CC && "ERR_STREAM_PREMATURE_CLOSE" !== CC.code) {
      var yC = IC[my];
      null !== yC && (IC[LC] = null, IC[AC] = null, IC[my] = null, yC(CC));
      return void (IC[XC] = CC);
    }
    var fC = IC[AC];
    null !== fC && (IC[LC] = null, IC[AC] = null, IC[my] = null, fC(rC(void 0, !0)));
    IC[iy] = !0;
  });
  CC.on("readable", eC.bind(null, IC));
  return IC;
};