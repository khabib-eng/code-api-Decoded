module.exports = function () {
  var CC = {
    year: 0,
    month: 1,
    day: 2,
    hour: 3,
    minute: 4,
    second: 5
  };
  var yC = {};
  return function (IC, fC, ky) {
    var gC;
    function AC(CC, IC, fC) {
      void 0 === fC && (fC = {});
      var ky = new Date(CC);
      var gC = function (CC, IC) {
        void 0 === IC && (IC = {});
        var fC = IC.timeZoneName || "short";
        var ky = CC + "|" + fC;
        var gC = yC[ky];
        gC || (gC = new Intl.DateTimeFormat("en-US", {
          hour12: !1,
          timeZone: CC,
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          timeZoneName: fC
        }), yC[ky] = gC);
        return gC;
      }(IC, fC);
      return gC.formatToParts(ky);
    }
    function my(yC, IC) {
      for (var fC = AC(yC, IC), gC = [], my = 0; my < fC.length; my += 1) {
        var XC = fC[my];
        var iy = XC.type;
        var LC = XC.value;
        var YC = CC[iy];
        YC >= 0 && (gC[YC] = parseInt(LC, 10));
      }
      var bC = gC[3];
      var rC = 24 === bC ? 0 : bC;
      var GC = gC[0] + "-" + gC[1] + "-" + gC[2] + " " + rC + ":" + gC[4] + ":" + gC[5] + ":000";
      var eC = +yC;
      return (ky.utc(GC).valueOf() - (eC -= eC % 1e3)) / 6e4;
    }
    var XC = fC.prototype;
    XC.tz = function (CC, yC) {
      void 0 === CC && (CC = gC);
      var IC;
      var fC = this.utcOffset();
      var AC = this.toDate();
      var my = AC.toLocaleString("en-US", {
        timeZone: CC
      });
      var XC = Math.round((AC - new Date(my)) / 1e3 / 60);
      var iy = 15 * -Math.round(AC.getTimezoneOffset() / 15) - XC;
      if (Number(iy)) {
        IC = ky(my, {
          locale: this.$L
        }).$set("millisecond", this.$ms).utcOffset(iy, !0);
        if (yC) {
          var LC = IC.utcOffset();
          IC = IC.add(fC - LC, "minute");
        }
      } else {
        IC = this.utcOffset(0, yC);
      }
      IC.$x.$timezone = CC;
      return IC;
    };
    XC.offsetName = function (CC) {
      var yC = this.$x.$timezone || ky.tz.guess();
      var IC = AC(this.valueOf(), yC, {
        timeZoneName: CC
      }).find(function (CC) {
        return "timezonename" === CC.type.toLowerCase();
      });
      return IC && IC.value;
    };
    var iy = XC.startOf;
    XC.startOf = function (CC, yC) {
      if (!this.$x || !this.$x.$timezone) {
        return iy.call(this, CC, yC);
      }
      var IC = ky(this.format("YYYY-MM-DD HH:mm:ss:SSS"), {
        locale: this.$L
      });
      return iy.call(IC, CC, yC).tz(this.$x.$timezone, !0);
    };
    ky.tz = function (CC, yC, IC) {
      var fC = IC && yC;
      var AC = IC || yC || gC;
      var XC = my(+ky(), AC);
      if ("string" != typeof CC) {
        return ky(CC).tz(AC);
      }
      var iy = function (CC, yC, IC) {
        var fC = CC - 60 * yC * 1e3;
        var ky = my(fC, IC);
        if (yC === ky) {
          return [fC, yC];
        }
        var gC = my(fC -= 60 * (ky - yC) * 1e3, IC);
        return ky === gC ? [fC, ky] : [CC - 60 * Math.min(ky, gC) * 1e3, Math.max(ky, gC)];
      }(ky.utc(CC, fC).valueOf(), XC, AC);
      var LC = iy[0];
      var YC = iy[1];
      var bC = ky(LC).utcOffset(YC);
      bC.$x.$timezone = AC;
      return bC;
    };
    ky.tz.guess = function () {
      return Intl.DateTimeFormat().resolvedOptions().timeZone;
    };
    ky.tz.setDefault = function (CC) {
      gC = CC;
    };
  };
}();