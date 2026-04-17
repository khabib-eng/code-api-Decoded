var yC = Object.prototype.hasOwnProperty;
var IC = "~";
function fC() {}
function ky(CC, yC, IC) {
  this.Ky = CC;
  this.context = yC;
  this.once = IC || !1;
}
function gC(CC, yC, fC, gC, AC) {
  if ("function" !== typeof fC) {
    throw new TypeError("The listener must be a function");
  }
  var my = new ky(fC, gC || CC, AC);
  var XC = IC ? IC + yC : yC;
  CC._events[XC] ? CC._events[XC].Ky ? CC._events[XC] = [CC._events[XC], my] : CC._events[XC].push(my) : (CC._events[XC] = my, CC._eventsCount++);
  return CC;
}
function AC(CC, yC) {
  0 === --CC._eventsCount ? CC._events = new fC() : delete CC._events[yC];
}
function my() {
  this._events = new fC();
  this._eventsCount = 0;
}
Object.create && (fC.prototype = Object.create(null), new fC().__proto__ || (IC = !1));
my.prototype.eventNames = function () {
  var CC;
  var fC;
  var ky = [];
  if (0 === this._eventsCount) {
    return ky;
  }
  for (fC in CC = this._events) {
    yC.call(CC, fC) && ky.push(IC ? fC.slice(1) : fC);
  }
  return Object.getOwnPropertySymbols ? ky.concat(Object.getOwnPropertySymbols(CC)) : ky;
};
my.prototype.listeners = function (CC) {
  var yC = IC ? IC + CC : CC;
  var fC = this._events[yC];
  if (!fC) {
    return [];
  }
  if (fC.Ky) {
    return [fC.Ky];
  }
  for (var ky = 0, gC = fC.length, AC = new Array(gC); ky < gC; ky++) {
    AC[ky] = fC[ky].Ky;
  }
  return AC;
};
my.prototype.listenerCount = function (CC) {
  var yC = IC ? IC + CC : CC;
  var fC = this._events[yC];
  return fC ? fC.Ky ? 1 : fC.length : 0;
};
my.prototype.emit = function (CC, yC, fC, ky, gC, AC) {
  var my = IC ? IC + CC : CC;
  if (!this._events[my]) {
    return !1;
  }
  var XC;
  var iy;
  var LC = this._events[my];
  var YC = arguments.length;
  if (LC.Ky) {
    LC.once && this.removeListener(CC, LC.Ky, void 0, !0);
    switch (YC) {
      case 1:
        LC.Ky.call(LC.context);
        return !0;
      case 2:
        LC.Ky.call(LC.context, yC);
        return !0;
      case 3:
        LC.Ky.call(LC.context, yC, fC);
        return !0;
      case 4:
        LC.Ky.call(LC.context, yC, fC, ky);
        return !0;
      case 5:
        LC.Ky.call(LC.context, yC, fC, ky, gC);
        return !0;
      case 6:
        LC.Ky.call(LC.context, yC, fC, ky, gC, AC);
        return !0;
    }
    iy = 1;
    XC = new Array(YC - 1);
    for (; iy < YC; iy++) {
      XC[iy - 1] = arguments[iy];
    }
    LC.Ky.apply(LC.context, XC);
  } else {
    var bC;
    var rC = LC.length;
    for (iy = 0; iy < rC; iy++) {
      LC[iy].once && this.removeListener(CC, LC[iy].Ky, void 0, !0);
      switch (YC) {
        case 1:
          LC[iy].Ky.call(LC[iy].context);
          break;
        case 2:
          LC[iy].Ky.call(LC[iy].context, yC);
          break;
        case 3:
          LC[iy].Ky.call(LC[iy].context, yC, fC);
          break;
        case 4:
          LC[iy].Ky.call(LC[iy].context, yC, fC, ky);
          break;
        default:
          if (!XC) {
            bC = 1;
            XC = new Array(YC - 1);
            for (; bC < YC; bC++) {
              XC[bC - 1] = arguments[bC];
            }
          }
          LC[iy].Ky.apply(LC[iy].context, XC);
      }
    }
  }
  return !0;
};
my.prototype.on = function (CC, yC, IC) {
  return gC(this, CC, yC, IC, !1);
};
my.prototype.once = function (CC, yC, IC) {
  return gC(this, CC, yC, IC, !0);
};
my.prototype.removeListener = function (CC, yC, fC, ky) {
  var gC = IC ? IC + CC : CC;
  if (!this._events[gC]) {
    return this;
  }
  if (!yC) {
    AC(this, gC);
    return this;
  }
  var my = this._events[gC];
  if (my.Ky) {
    my.Ky !== yC || ky && !my.once || fC && my.context !== fC || AC(this, gC);
  } else {
    for (var XC = 0, iy = [], LC = my.length; XC < LC; XC++) {
      (my[XC].Ky !== yC || ky && !my[XC].once || fC && my[XC].context !== fC) && iy.push(my[XC]);
    }
    iy.length ? this._events[gC] = 1 === iy.length ? iy[0] : iy : AC(this, gC);
  }
  return this;
};
my.prototype.by = function (CC) {
  var yC;
  CC ? (yC = IC ? IC + CC : CC, this._events[yC] && AC(this, yC)) : (this._events = new fC(), this._eventsCount = 0);
  return this;
};
my.prototype.off = my.prototype.removeListener;
my.prototype.addListener = my.prototype.on;
my.prefixed = IC;
my.EventEmitter = my;
module.exports = my;