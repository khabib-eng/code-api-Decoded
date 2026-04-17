var v;
function f(p, p2, p3) {
  if (p2 in p) {
    Object.defineProperty(p, p2, {
      value: p3,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    p[p2] = p3;
  }
  return p;
}
var js = require("./200.js");
var vSymbol8 = Symbol("lastResolve");
var vSymbol9 = Symbol("lastReject");
var vSymbol10 = Symbol("error");
var vSymbol11 = Symbol("ended");
var vSymbol12 = Symbol("lastPromise");
var vSymbol13 = Symbol("handlePromise");
var vSymbol14 = Symbol("stream");
function f2(p4, p5) {
  return {
    value: p4,
    done: p5
  };
}
function f3(p6) {
  var v2 = p6[vSymbol8];
  if (v2 !== null) {
    var v3 = p6[vSymbol14].read();
    if (v3 !== null) {
      p6[vSymbol12] = null;
      p6[vSymbol8] = null;
      p6[vSymbol9] = null;
      v2(f2(v3, false));
    }
  }
}
function f4(p7) {
  process.nextTick(f3, p7);
}
var v4 = Object.getPrototypeOf(function () {});
var v5 = Object.setPrototypeOf((f(v = {
  get stream() {
    return this[vSymbol14];
  },
  next: function () {
    var vThis = this;
    var v6 = this[vSymbol10];
    if (v6 !== null) {
      return Promise.reject(v6);
    }
    if (this[vSymbol11]) {
      return Promise.resolve(f2(undefined, true));
    }
    if (this[vSymbol14].destroyed) {
      return new Promise(function (p8, p9) {
        process.nextTick(function () {
          if (vThis[vSymbol10]) {
            p9(vThis[vSymbol10]);
          } else {
            p8(f2(undefined, true));
          }
        });
      });
    }
    var v7;
    var v8 = this[vSymbol12];
    if (v8) {
      v7 = new Promise(function (p10, p11) {
        return function (p12, p13) {
          p10.then(function () {
            if (p11[vSymbol11]) {
              p12(f2(undefined, true));
            } else {
              p11[vSymbol13](p12, p13);
            }
          }, p13);
        };
      }(v8, this));
    } else {
      var v9 = this[vSymbol14].read();
      if (v9 !== null) {
        return Promise.resolve(f2(v9, false));
      }
      v7 = new Promise(this[vSymbol13]);
    }
    this[vSymbol12] = v7;
    return v7;
  }
}, Symbol.asyncIterator, function () {
  return this;
}), f(v, "return", function () {
  var vThis2 = this;
  return new Promise(function (p14, p15) {
    vThis2[vSymbol14].destroy(null, function (p16) {
      if (p16) {
        p15(p16);
      } else {
        p14(f2(undefined, true));
      }
    });
  });
}), v), v4);
module.exports = function (p17) {
  var v10;
  var v11 = Object.create(v5, (f(v10 = {}, vSymbol14, {
    value: p17,
    writable: true
  }), f(v10, vSymbol8, {
    value: null,
    writable: true
  }), f(v10, vSymbol9, {
    value: null,
    writable: true
  }), f(v10, vSymbol10, {
    value: null,
    writable: true
  }), f(v10, vSymbol11, {
    value: p17._readableState.endEmitted,
    writable: true
  }), f(v10, vSymbol13, {
    value: function (p18, p19) {
      var v12 = v11[vSymbol14].read();
      if (v12) {
        v11[vSymbol12] = null;
        v11[vSymbol8] = null;
        v11[vSymbol9] = null;
        p18(f2(v12, false));
      } else {
        v11[vSymbol8] = p18;
        v11[vSymbol9] = p19;
      }
    },
    writable: true
  }), v10));
  v11[vSymbol12] = null;
  js(p17, function (p20) {
    if (p20 && p20.code !== "ERR_STREAM_PREMATURE_CLOSE") {
      var v13 = v11[vSymbol9];
      if (v13 !== null) {
        v11[vSymbol12] = null;
        v11[vSymbol8] = null;
        v11[vSymbol9] = null;
        v13(p20);
      }
      v11[vSymbol10] = p20;
      return;
    }
    var v14 = v11[vSymbol8];
    if (v14 !== null) {
      v11[vSymbol12] = null;
      v11[vSymbol8] = null;
      v11[vSymbol9] = null;
      v14(f2(undefined, true));
    }
    v11[vSymbol11] = true;
  });
  p17.on("readable", f4.bind(null, v11));
  return v11;
};