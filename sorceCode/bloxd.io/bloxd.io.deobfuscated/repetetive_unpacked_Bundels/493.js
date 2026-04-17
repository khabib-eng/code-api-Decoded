module.exports = function () {
  var CC = "minute";
  var yC = /[+-]\d\d(?::?\d\d)?/g;
  var IC = /([+-]|\d\d)/g;
  return function (fC, ky, gC) {
    var AC = ky.prototype;
    gC.utc = function (CC) {
      return new ky({
        date: CC,
        utc: !0,
        args: arguments
      });
    };
    AC.utc = function (yC) {
      var IC = gC(this.toDate(), {
        locale: this.$L,
        utc: !0
      });
      return yC ? IC.add(this.utcOffset(), CC) : IC;
    };
    AC.local = function () {
      return gC(this.toDate(), {
        locale: this.$L,
        utc: !1
      });
    };
    var my = AC.parse;
    AC.parse = function (CC) {
      CC.utc && (this.$u = !0);
      this.$utils().u(CC.$offset) || (this.$offset = CC.$offset);
      my.call(this, CC);
    };
    var XC = AC.init;
    AC.init = function () {
      if (this.$u) {
        var CC = this.$d;
        this.$y = CC.getUTCFullYear();
        this.$M = CC.getUTCMonth();
        this.$D = CC.getUTCDate();
        this.$W = CC.getUTCDay();
        this.$H = CC.getUTCHours();
        this.$m = CC.getUTCMinutes();
        this.$s = CC.getUTCSeconds();
        this.$ms = CC.getUTCMilliseconds();
      } else {
        XC.call(this);
      }
    };
    var iy = AC.utcOffset;
    AC.utcOffset = function (fC, ky) {
      var gC = this.$utils().u;
      if (gC(fC)) {
        return this.$u ? 0 : gC(this.$offset) ? iy.call(this) : this.$offset;
      }
      if ("string" == typeof fC && (fC = function (CC) {
        void 0 === CC && (CC = "");
        var fC = CC.match(yC);
        if (!fC) {
          return null;
        }
        var ky = ("" + fC[0]).match(IC) || ["-", 0, 0];
        var gC = ky[0];
        var AC = 60 * +ky[1] + +ky[2];
        return 0 === AC ? 0 : "+" === gC ? AC : -AC;
      }(fC), null === fC)) {
        return this;
      }
      var AC = Math.abs(fC) <= 16 ? 60 * fC : fC;
      var my = this;
      if (ky) {
        my.$offset = AC;
        my.$u = 0 === fC;
        return my;
      }
      if (0 !== fC) {
        var XC = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
        (my = this.local().add(AC + XC, CC)).$offset = AC;
        my.$x.$localOffset = XC;
      } else {
        my = this.utc();
      }
      return my;
    };
    var LC = AC.format;
    AC.format = function (CC) {
      var yC = CC || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
      return LC.call(this, yC);
    };
    AC.valueOf = function () {
      var CC = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset());
      return this.$d.valueOf() - 6e4 * CC;
    };
    AC.isUTC = function () {
      return !!this.$u;
    };
    AC.toISOString = function () {
      return this.toDate().toISOString();
    };
    AC.toString = function () {
      return this.toDate().toUTCString();
    };
    var YC = AC.toDate;
    AC.toDate = function (CC) {
      return "s" === CC && this.$offset ? gC(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : YC.call(this);
    };
    var bC = AC.diff;
    AC.diff = function (CC, yC, IC) {
      if (CC && this.$u === CC.$u) {
        return bC.call(this, CC, yC, IC);
      }
      var fC = this.local();
      var ky = gC(CC).local();
      return bC.call(fC, ky, yC, IC);
    };
  };
}();