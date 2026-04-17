function fC(CC, yC) {
  var IC = Object.keys(CC);
  if (Object.getOwnPropertySymbols) {
    var fC = Object.getOwnPropertySymbols(CC);
    yC && (fC = fC.filter(function (yC) {
      return Object.getOwnPropertyDescriptor(CC, yC).enumerable;
    }));
    IC.push.apply(IC, fC);
  }
  return IC;
}
function ky(CC, yC, IC) {
  yC in CC ? Object.defineProperty(CC, yC, {
    value: IC,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : CC[yC] = IC;
  return CC;
}
function gC(CC, yC) {
  for (var IC = 0; IC < yC.length; IC++) {
    var fC = yC[IC];
    fC.enumerable = fC.enumerable || !1;
    fC.configurable = !0;
    "value" in fC && (fC.writable = !0);
    Object.defineProperty(CC, fC.key, fC);
  }
}
var AC = require("./675.js").iI;
var my = require("./1017.js").inspect;
var XC = my && my.custom || "inspect";
module.exports = function () {
  function CC() {
    !function (CC, yC) {
      if (!(CC instanceof yC)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }(this, CC);
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  var yC;
  var IC;
  var iy;
  yC = CC;
  IC = [{
    key: "push",
    value: function (CC) {
      var yC = {
        data: CC,
        next: null
      };
      this.length > 0 ? this.tail.next = yC : this.head = yC;
      this.tail = yC;
      ++this.length;
    }
  }, {
    key: "unshift",
    value: function (CC) {
      var yC = {
        data: CC,
        next: this.head
      };
      0 === this.length && (this.tail = yC);
      this.head = yC;
      ++this.length;
    }
  }, {
    key: "shift",
    value: function () {
      if (0 !== this.length) {
        var CC = this.head.data;
        1 === this.length ? this.head = this.tail = null : this.head = this.head.next;
        --this.length;
        return CC;
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
    value: function (CC) {
      if (0 === this.length) {
        return "";
      }
      for (var yC = this.head, IC = "" + yC.data; yC = yC.next;) {
        IC += CC + yC.data;
      }
      return IC;
    }
  }, {
    key: "concat",
    value: function (CC) {
      if (0 === this.length) {
        return AC.alloc(0);
      }
      for (var yC, IC, fC, ky = AC.allocUnsafe(CC >>> 0), gC = this.head, my = 0; gC;) {
        yC = gC.data;
        IC = ky;
        fC = my;
        AC.prototype.Ly.call(yC, IC, fC);
        my += gC.data.length;
        gC = gC.next;
      }
      return ky;
    }
  }, {
    key: "consume",
    value: function (CC, yC) {
      var IC;
      CC < this.head.data.length ? (IC = this.head.data.slice(0, CC), this.head.data = this.head.data.slice(CC)) : IC = CC === this.head.data.length ? this.shift() : yC ? this._getString(CC) : this._getBuffer(CC);
      return IC;
    }
  }, {
    key: "first",
    value: function () {
      return this.head.data;
    }
  }, {
    key: "_getString",
    value: function (CC) {
      var yC = this.head;
      var IC = 1;
      var fC = yC.data;
      for (CC -= fC.length; yC = yC.next;) {
        var ky = yC.data;
        var gC = CC > ky.length ? ky.length : CC;
        gC === ky.length ? fC += ky : fC += ky.slice(0, CC);
        if (0 === (CC -= gC)) {
          gC === ky.length ? (++IC, yC.next ? this.head = yC.next : this.head = this.tail = null) : (this.head = yC, yC.data = ky.slice(gC));
          break;
        }
        ++IC;
      }
      this.length -= IC;
      return fC;
    }
  }, {
    key: "_getBuffer",
    value: function (CC) {
      var yC = AC.allocUnsafe(CC);
      var IC = this.head;
      var fC = 1;
      IC.data.Ly(yC);
      CC -= IC.data.length;
      for (; IC = IC.next;) {
        var ky = IC.data;
        var gC = CC > ky.length ? ky.length : CC;
        ky.Ly(yC, yC.length - CC, 0, gC);
        if (0 === (CC -= gC)) {
          gC === ky.length ? (++fC, IC.next ? this.head = IC.next : this.head = this.tail = null) : (this.head = IC, IC.data = ky.slice(gC));
          break;
        }
        ++fC;
      }
      this.length -= fC;
      return yC;
    }
  }, {
    key: XC,
    value: function (CC, yC) {
      return my(this, function (CC) {
        for (var yC = 1; yC < arguments.length; yC++) {
          var IC = null != arguments[yC] ? arguments[yC] : {};
          yC % 2 ? fC(Object(IC), !0).forEach(function (yC) {
            ky(CC, yC, IC[yC]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(CC, Object.getOwnPropertyDescriptors(IC)) : fC(Object(IC)).forEach(function (yC) {
            Object.defineProperty(CC, yC, Object.getOwnPropertyDescriptor(IC, yC));
          });
        }
        return CC;
      }({}, yC, {
        depth: 0,
        customInspect: !1
      }));
    }
  }];
  IC && gC(yC.prototype, IC);
  iy && gC(yC, iy);
  return CC;
}();