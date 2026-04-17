function f(p, p2) {
  var v = Object.keys(p);
  if (Object.getOwnPropertySymbols) {
    var v2 = Object.getOwnPropertySymbols(p);
    if (p2) {
      v2 = v2.filter(function (p3) {
        return Object.getOwnPropertyDescriptor(p, p3).enumerable;
      });
    }
    v.push.apply(v, v2);
  }
  return v;
}
function f2(p4, p5, p6) {
  if (p5 in p4) {
    Object.defineProperty(p4, p5, {
      value: p6,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    p4[p5] = p6;
  }
  return p4;
}
function f3(p7, p8) {
  for (var vLN0 = 0; vLN0 < p8.length; vLN0++) {
    var v3 = p8[vLN0];
    v3.enumerable = v3.enumerable || false;
    v3.configurable = true;
    if ("value" in v3) {
      v3.writable = true;
    }
    Object.defineProperty(p7, v3.key, v3);
  }
}
var v4 = require("./103.js").HU;
var v5 = require("./144.js").inspect;
var v6 = v5 && v5.custom || "inspect";
module.exports = function () {
  function f4() {
    (function (p9, p10) {
      if (!(p9 instanceof p10)) {
        throw new TypeError("Cannot call a class as a function");
      }
    })(this, f4);
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  var v7;
  var v8;
  var v9;
  v7 = f4;
  v8 = [{
    key: "push",
    value: function (p11) {
      var vO = {
        data: p11,
        next: null
      };
      if (this.length > 0) {
        this.tail.next = vO;
      } else {
        this.head = vO;
      }
      this.tail = vO;
      ++this.length;
    }
  }, {
    key: "unshift",
    value: function (p12) {
      var vO2 = {
        data: p12,
        next: this.head
      };
      if (this.length === 0) {
        this.tail = vO2;
      }
      this.head = vO2;
      ++this.length;
    }
  }, {
    key: "shift",
    value: function () {
      if (this.length !== 0) {
        var v10 = this.head.data;
        if (this.length === 1) {
          this.head = this.tail = null;
        } else {
          this.head = this.head.next;
        }
        --this.length;
        return v10;
      }
    }
  }, {
    key: "clear",
    value: function () {
      this.head = this.tail = null;
      this.length = 0;
    }
  }, {
    key: "join",
    value: function (p13) {
      if (this.length === 0) {
        return "";
      }
      for (var v11 = this.head, v12 = "" + v11.data; v11 = v11.next;) {
        v12 += p13 + v11.data;
      }
      return v12;
    }
  }, {
    key: "concat",
    value: function (p14) {
      if (this.length === 0) {
        return v4.alloc(0);
      }
      var v13;
      var v14;
      var v15;
      var v16 = v4.allocUnsafe(p14 >>> 0);
      for (var v17 = this.head, vLN02 = 0; v17;) {
        v13 = v17.data;
        v14 = v16;
        v15 = vLN02;
        v4.prototype.YU.call(v13, v14, v15);
        vLN02 += v17.data.length;
        v17 = v17.next;
      }
      return v16;
    }
  }, {
    key: "consume",
    value: function (p15, p16) {
      var v18;
      if (p15 < this.head.data.length) {
        v18 = this.head.data.slice(0, p15);
        this.head.data = this.head.data.slice(p15);
      } else {
        v18 = p15 === this.head.data.length ? this.shift() : p16 ? this._getString(p15) : this._getBuffer(p15);
      }
      return v18;
    }
  }, {
    key: "first",
    value: function () {
      return this.head.data;
    }
  }, {
    key: "_getString",
    value: function (p17) {
      var v19 = this.head;
      var vLN1 = 1;
      var v20 = v19.data;
      for (p17 -= v20.length; v19 = v19.next;) {
        var v21 = v19.data;
        var v22 = p17 > v21.length ? v21.length : p17;
        if (v22 === v21.length) {
          v20 += v21;
        } else {
          v20 += v21.slice(0, p17);
        }
        if ((p17 -= v22) === 0) {
          if (v22 === v21.length) {
            ++vLN1;
            if (v19.next) {
              this.head = v19.next;
            } else {
              this.head = this.tail = null;
            }
          } else {
            this.head = v19;
            v19.data = v21.slice(v22);
          }
          break;
        }
        ++vLN1;
      }
      this.length -= vLN1;
      return v20;
    }
  }, {
    key: "_getBuffer",
    value: function (p18) {
      var v23 = v4.allocUnsafe(p18);
      var v24 = this.head;
      var vLN12 = 1;
      v24.data.YU(v23);
      p18 -= v24.data.length;
      while (v24 = v24.next) {
        var v25 = v24.data;
        var v26 = p18 > v25.length ? v25.length : p18;
        v25.YU(v23, v23.length - p18, 0, v26);
        if ((p18 -= v26) === 0) {
          if (v26 === v25.length) {
            ++vLN12;
            if (v24.next) {
              this.head = v24.next;
            } else {
              this.head = this.tail = null;
            }
          } else {
            this.head = v24;
            v24.data = v25.slice(v26);
          }
          break;
        }
        ++vLN12;
      }
      this.length -= vLN12;
      return v23;
    }
  }, {
    key: v6,
    value: function (p19, p20) {
      return v5(this, function (p21) {
        for (var vLN13 = 1; vLN13 < arguments.length; vLN13++) {
          var v27 = arguments[vLN13] ?? {};
          if (vLN13 % 2) {
            f(Object(v27), true).forEach(function (p22) {
              f2(p21, p22, v27[p22]);
            });
          } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(p21, Object.getOwnPropertyDescriptors(v27));
          } else {
            f(Object(v27)).forEach(function (p23) {
              Object.defineProperty(p21, p23, Object.getOwnPropertyDescriptor(v27, p23));
            });
          }
        }
        return p21;
      }({}, p20, {
        depth: 0,
        customInspect: false
      }));
    }
  }];
  if (v8) {
    f3(v7.prototype, v8);
  }
  if (v9) {
    f3(v7, v9);
  }
  return f4;
}();