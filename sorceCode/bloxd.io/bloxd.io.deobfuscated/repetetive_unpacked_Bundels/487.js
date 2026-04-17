module.exports = function () {
  var CC = 1e3;
  var yC = 6e4;
  var IC = 36e5;
  var fC = "millisecond";
  var ky = "second";
  var gC = "minute";
  var AC = "hour";
  var my = "day";
  var XC = "week";
  var iy = "month";
  var LC = "quarter";
  var YC = "year";
  var bC = "date";
  var rC = "Invalid Date";
  var GC = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/;
  var eC = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
  var OC = {
    name: "en",
    weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
    months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
    ordinal: function (CC) {
      var yC = ["th", "st", "nd", "rd"];
      var IC = CC % 100;
      return "[" + CC + (yC[(IC - 20) % 10] || yC[IC] || yC[0]) + "]";
    }
  };
  function SC(CC, yC, IC) {
    var fC = String(CC);
    return !fC || fC.length >= yC ? CC : "" + Array(yC + 1 - fC.length).join(IC) + CC;
  }
  var TC = {
    s: SC,
    z: function (CC) {
      var yC = -CC.utcOffset();
      var IC = Math.abs(yC);
      var fC = Math.floor(IC / 60);
      var ky = IC % 60;
      return (yC <= 0 ? "+" : "-") + SC(fC, 2, "0") + ":" + SC(ky, 2, "0");
    },
    m: function CC(yC, IC) {
      if (yC.date() < IC.date()) {
        return -CC(IC, yC);
      }
      var fC = 12 * (IC.year() - yC.year()) + (IC.month() - yC.month());
      var ky = yC.clone().add(fC, iy);
      var gC = IC - ky < 0;
      var AC = yC.clone().add(fC + (gC ? -1 : 1), iy);
      return +(-(fC + (IC - ky) / (gC ? ky - AC : AC - ky)) || 0);
    },
    a: function (CC) {
      return CC < 0 ? Math.ceil(CC) || 0 : Math.floor(CC);
    },
    p: function (CC) {
      return {
        M: iy,
        y: YC,
        w: XC,
        d: my,
        D: bC,
        h: AC,
        m: gC,
        s: ky,
        ms: fC,
        Q: LC
      }[CC] || String(CC || "").toLowerCase().replace(/s$/, "");
    },
    u: function (CC) {
      return void 0 === CC;
    }
  };
  var NC = "en";
  var sC = {};
  sC[NC] = OC;
  var jy = "$isDayjsObject";
  function qC(CC) {
    return CC instanceof HC || !(!CC || !CC[jy]);
  }
  var KC = function CC(yC, IC, fC) {
    var ky;
    if (!yC) {
      return NC;
    }
    if ("string" == typeof yC) {
      var gC = yC.toLowerCase();
      sC[gC] && (ky = gC);
      IC && (sC[gC] = IC, ky = gC);
      var AC = yC.split("-");
      if (!ky && AC.length > 1) {
        return CC(AC[0]);
      }
    } else {
      var my = yC.name;
      sC[my] = yC;
      ky = my;
    }
    !fC && ky && (NC = ky);
    return ky || !fC && NC;
  };
  function pC(CC, yC) {
    if (qC(CC)) {
      return CC.clone();
    }
    var IC = "object" == typeof yC ? yC : {};
    IC.date = CC;
    IC.args = arguments;
    return new HC(IC);
  }
  var wC = TC;
  wC.l = KC;
  wC.i = qC;
  wC.w = function (CC, yC) {
    return pC(CC, {
      locale: yC.$L,
      utc: yC.$u,
      x: yC.$x,
      $offset: yC.$offset
    });
  };
  var HC = function () {
    function OC(CC) {
      this.$L = KC(CC.locale, null, !0);
      this.parse(CC);
      this.$x = this.$x || CC.x || {};
      this[jy] = !0;
    }
    var SC = OC.prototype;
    SC.parse = function (CC) {
      this.$d = function (CC) {
        var yC = CC.date;
        var IC = CC.utc;
        if (null === yC) {
          return new Date(NaN);
        }
        if (wC.u(yC)) {
          return new Date();
        }
        if (yC instanceof Date) {
          return new Date(yC);
        }
        if ("string" == typeof yC && !/Z$/i.test(yC)) {
          var fC = yC.match(GC);
          if (fC) {
            var ky = fC[2] - 1 || 0;
            var gC = (fC[7] || "0").substring(0, 3);
            return IC ? new Date(Date.UTC(fC[1], ky, fC[3] || 1, fC[4] || 0, fC[5] || 0, fC[6] || 0, gC)) : new Date(fC[1], ky, fC[3] || 1, fC[4] || 0, fC[5] || 0, fC[6] || 0, gC);
          }
        }
        return new Date(yC);
      }(CC);
      this.init();
    };
    SC.init = function () {
      var CC = this.$d;
      this.$y = CC.getFullYear();
      this.$M = CC.getMonth();
      this.$D = CC.getDate();
      this.$W = CC.getDay();
      this.$H = CC.getHours();
      this.$m = CC.getMinutes();
      this.$s = CC.getSeconds();
      this.$ms = CC.getMilliseconds();
    };
    SC.$utils = function () {
      return wC;
    };
    SC.isValid = function () {
      return !(this.$d.toString() === rC);
    };
    SC.isSame = function (CC, yC) {
      var IC = pC(CC);
      return this.startOf(yC) <= IC && IC <= this.endOf(yC);
    };
    SC.isAfter = function (CC, yC) {
      return pC(CC) < this.startOf(yC);
    };
    SC.isBefore = function (CC, yC) {
      return this.endOf(yC) < pC(CC);
    };
    SC.$g = function (CC, yC, IC) {
      return wC.u(CC) ? this[yC] : this.set(IC, CC);
    };
    SC.unix = function () {
      return Math.floor(this.valueOf() / 1e3);
    };
    SC.valueOf = function () {
      return this.$d.getTime();
    };
    SC.startOf = function (CC, yC) {
      var IC = this;
      var fC = !!wC.u(yC) || yC;
      var LC = wC.p(CC);
      function rC(CC, yC) {
        var ky = wC.w(IC.$u ? Date.UTC(IC.$y, yC, CC) : new Date(IC.$y, yC, CC), IC);
        return fC ? ky : ky.endOf(my);
      }
      function GC(CC, yC) {
        return wC.w(IC.toDate()[CC].apply(IC.toDate("s"), (fC ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(yC)), IC);
      }
      var eC = this.$W;
      var OC = this.$M;
      var SC = this.$D;
      var TC = "set" + (this.$u ? "UTC" : "");
      switch (LC) {
        case YC:
          return fC ? rC(1, 0) : rC(31, 11);
        case iy:
          return fC ? rC(1, OC) : rC(0, OC + 1);
        case XC:
          var NC = this.$locale().weekStart || 0;
          var sC = (eC < NC ? eC + 7 : eC) - NC;
          return rC(fC ? SC - sC : SC + (6 - sC), OC);
        case my:
        case bC:
          return GC(TC + "Hours", 0);
        case AC:
          return GC(TC + "Minutes", 1);
        case gC:
          return GC(TC + "Seconds", 2);
        case ky:
          return GC(TC + "Milliseconds", 3);
        default:
          return this.clone();
      }
    };
    SC.endOf = function (CC) {
      return this.startOf(CC, !1);
    };
    SC.$set = function (CC, yC) {
      var IC;
      var XC = wC.p(CC);
      var LC = "set" + (this.$u ? "UTC" : "");
      var rC = (IC = {}, IC[my] = LC + "Date", IC[bC] = LC + "Date", IC[iy] = LC + "Month", IC[YC] = LC + "FullYear", IC[AC] = LC + "Hours", IC[gC] = LC + "Minutes", IC[ky] = LC + "Seconds", IC[fC] = LC + "Milliseconds", IC)[XC];
      var GC = XC === my ? this.$D + (yC - this.$W) : yC;
      if (XC === iy || XC === YC) {
        var eC = this.clone().set(bC, 1);
        eC.$d[rC](GC);
        eC.init();
        this.$d = eC.set(bC, Math.min(this.$D, eC.daysInMonth())).$d;
      } else {
        rC && this.$d[rC](GC);
      }
      this.init();
      return this;
    };
    SC.set = function (CC, yC) {
      return this.clone().$set(CC, yC);
    };
    SC.get = function (CC) {
      return this[wC.p(CC)]();
    };
    SC.add = function (fC, LC) {
      var bC;
      var rC = this;
      fC = Number(fC);
      var GC = wC.p(LC);
      function eC(CC) {
        var yC = pC(rC);
        return wC.w(yC.date(yC.date() + Math.round(CC * fC)), rC);
      }
      if (GC === iy) {
        return this.set(iy, this.$M + fC);
      }
      if (GC === YC) {
        return this.set(YC, this.$y + fC);
      }
      if (GC === my) {
        return eC(1);
      }
      if (GC === XC) {
        return eC(7);
      }
      var OC = (bC = {}, bC[gC] = yC, bC[AC] = IC, bC[ky] = CC, bC)[GC] || 1;
      var SC = this.$d.getTime() + fC * OC;
      return wC.w(SC, this);
    };
    SC.Wy = function (CC, yC) {
      return this.add(-1 * CC, yC);
    };
    SC.format = function (CC) {
      var yC = this;
      var IC = this.$locale();
      if (!this.isValid()) {
        return IC.invalidDate || rC;
      }
      var fC = CC || "YYYY-MM-DDTHH:mm:ssZ";
      var ky = wC.z(this);
      var gC = this.$H;
      var AC = this.$m;
      var my = this.$M;
      var XC = IC.weekdays;
      var iy = IC.months;
      var LC = IC.meridiem;
      function YC(CC, IC, ky, gC) {
        return CC && (CC[IC] || CC(yC, fC)) || ky[IC].slice(0, gC);
      }
      function bC(CC) {
        return wC.s(gC % 12 || 12, CC, "0");
      }
      var GC = LC || function (CC, yC, IC) {
        var fC = CC < 12 ? "AM" : "PM";
        return IC ? fC.toLowerCase() : fC;
      };
      return fC.replace(eC, function (CC, fC) {
        return fC || function (CC) {
          switch (CC) {
            case "YY":
              return String(yC.$y).slice(-2);
            case "YYYY":
              return wC.s(yC.$y, 4, "0");
            case "M":
              return my + 1;
            case "MM":
              return wC.s(my + 1, 2, "0");
            case "MMM":
              return YC(IC.monthsShort, my, iy, 3);
            case "MMMM":
              return YC(iy, my);
            case "D":
              return yC.$D;
            case "DD":
              return wC.s(yC.$D, 2, "0");
            case "d":
              return String(yC.$W);
            case "dd":
              return YC(IC.weekdaysMin, yC.$W, XC, 2);
            case "ddd":
              return YC(IC.weekdaysShort, yC.$W, XC, 3);
            case "dddd":
              return XC[yC.$W];
            case "H":
              return String(gC);
            case "HH":
              return wC.s(gC, 2, "0");
            case "h":
              return bC(1);
            case "hh":
              return bC(2);
            case "a":
              return GC(gC, AC, !0);
            case "A":
              return GC(gC, AC, !1);
            case "m":
              return String(AC);
            case "mm":
              return wC.s(AC, 2, "0");
            case "s":
              return String(yC.$s);
            case "ss":
              return wC.s(yC.$s, 2, "0");
            case "SSS":
              return wC.s(yC.$ms, 3, "0");
            case "Z":
              return ky;
          }
          return null;
        }(CC) || ky.replace(":", "");
      });
    };
    SC.utcOffset = function () {
      return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
    };
    SC.diff = function (fC, bC, rC) {
      var GC;
      var eC = this;
      var OC = wC.p(bC);
      var SC = pC(fC);
      var TC = (SC.utcOffset() - this.utcOffset()) * yC;
      var NC = this - SC;
      function sC() {
        return wC.m(eC, SC);
      }
      switch (OC) {
        case YC:
          GC = sC() / 12;
          break;
        case iy:
          GC = sC();
          break;
        case LC:
          GC = sC() / 3;
          break;
        case XC:
          GC = (NC - TC) / 6048e5;
          break;
        case my:
          GC = (NC - TC) / 864e5;
          break;
        case AC:
          GC = NC / IC;
          break;
        case gC:
          GC = NC / yC;
          break;
        case ky:
          GC = NC / CC;
          break;
        default:
          GC = NC;
      }
      return rC ? GC : wC.a(GC);
    };
    SC.daysInMonth = function () {
      return this.endOf(iy).$D;
    };
    SC.$locale = function () {
      return sC[this.$L];
    };
    SC.locale = function (CC, yC) {
      if (!CC) {
        return this.$L;
      }
      var IC = this.clone();
      var fC = KC(CC, yC, !0);
      fC && (IC.$L = fC);
      return IC;
    };
    SC.clone = function () {
      return wC.w(this.$d, this);
    };
    SC.toDate = function () {
      return new Date(this.valueOf());
    };
    SC.toJSON = function () {
      return this.isValid() ? this.toISOString() : null;
    };
    SC.toISOString = function () {
      return this.$d.toISOString();
    };
    SC.toString = function () {
      return this.$d.toUTCString();
    };
    return OC;
  }();
  var aC = HC.prototype;
  pC.prototype = aC;
  [["$ms", fC], ["$s", ky], ["$m", gC], ["$H", AC], ["$W", my], ["$M", iy], ["$y", YC], ["$D", bC]].forEach(function (CC) {
    aC[CC[1]] = function (yC) {
      return this.$g(yC, CC[0], CC[1]);
    };
  });
  pC.extend = function (CC, yC) {
    CC.$i || (CC(yC, HC, pC), CC.$i = !0);
    return pC;
  };
  pC.locale = KC;
  pC.isDayjs = qC;
  pC.unix = function (CC) {
    return pC(1e3 * CC);
  };
  pC.en = sC[NC];
  pC.Ls = sC;
  pC.p = {};
  return pC;
}();