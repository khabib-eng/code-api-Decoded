var v = Object.keys || function (p) {
  var vA = [];
  for (var v2 in p) {
    vA.push(v2);
  }
  return vA;
};
module.exports = f;
var js = require("./124.js");
var js2 = require("./172.js");
require("./85.js")(f, js);
for (var vV = v(js2.prototype), vLN0 = 0; vLN0 < vV.length; vLN0++) {
  var v3 = vV[vLN0];
  f.prototype[v3] ||= js2.prototype[v3];
}
function f(p2) {
  if (!(this instanceof f)) {
    return new f(p2);
  }
  js.call(this, p2);
  js2.call(this, p2);
  this.allowHalfOpen = true;
  if (p2) {
    if (p2.readable === false) {
      this.readable = false;
    }
    if (p2.writable === false) {
      this.writable = false;
    }
    if (p2.allowHalfOpen === false) {
      this.allowHalfOpen = false;
      this.once("end", f2);
    }
  }
}
function f2() {
  if (!this._writableState.ended) {
    process.nextTick(f3, this);
  }
}
function f3(p3) {
  p3.end();
}
Object.defineProperty(f.prototype, "writableHighWaterMark", {
  enumerable: false,
  get: function () {
    return this._writableState.highWaterMark;
  }
});
Object.defineProperty(f.prototype, "writableBuffer", {
  enumerable: false,
  get: function () {
    return this._writableState && this._writableState.getBuffer();
  }
});
Object.defineProperty(f.prototype, "writableLength", {
  enumerable: false,
  get: function () {
    return this._writableState.length;
  }
});
Object.defineProperty(f.prototype, "destroyed", {
  enumerable: false,
  get: function () {
    return this._readableState !== undefined && this._writableState !== undefined && this._readableState.destroyed && this._writableState.destroyed;
  },
  set: function (p4) {
    if (this._readableState !== undefined && this._writableState !== undefined) {
      this._readableState.destroyed = p4;
      this._writableState.destroyed = p4;
    }
  }
});