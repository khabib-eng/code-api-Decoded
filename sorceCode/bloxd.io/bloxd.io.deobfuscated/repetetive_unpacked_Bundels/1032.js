var fC = Object.keys || function (CC) {
  var yC = [];
  for (var IC in CC) {
    yC.push(IC);
  }
  return yC;
};
module.exports = iy;
var ky = require("./995.js");
var gC = require("./1038.js");
require("./966.js")(iy, ky);
for (var AC = fC(gC.prototype), my = 0; my < AC.length; my++) {
  var XC = AC[my];
  iy.prototype[XC] || (iy.prototype[XC] = gC.prototype[XC]);
}
function iy(CC) {
  if (!(this instanceof iy)) {
    return new iy(CC);
  }
  ky.call(this, CC);
  gC.call(this, CC);
  this.allowHalfOpen = !0;
  CC && (!1 === CC.readable && (this.readable = !1), !1 === CC.writable && (this.writable = !1), !1 === CC.allowHalfOpen && (this.allowHalfOpen = !1, this.once("end", LC)));
}
function LC() {
  this._writableState.ended || process.nextTick(YC, this);
}
function YC(CC) {
  CC.end();
}
Object.defineProperty(iy.prototype, "writableHighWaterMark", {
  enumerable: !1,
  get: function () {
    return this._writableState.highWaterMark;
  }
});
Object.defineProperty(iy.prototype, "writableBuffer", {
  enumerable: !1,
  get: function () {
    return this._writableState && this._writableState.getBuffer();
  }
});
Object.defineProperty(iy.prototype, "writableLength", {
  enumerable: !1,
  get: function () {
    return this._writableState.length;
  }
});
Object.defineProperty(iy.prototype, "destroyed", {
  enumerable: !1,
  get: function () {
    return void 0 !== this._readableState && void 0 !== this._writableState && this._readableState.destroyed && this._writableState.destroyed;
  },
  set: function (CC) {
    void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed = CC, this._writableState.destroyed = CC);
  }
});