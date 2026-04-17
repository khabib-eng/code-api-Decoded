var v = require("./99.js").HU;
var v2 = require("./121.js").Transform;
function f(p) {
  v2.call(this);
  this._block = v.allocUnsafe(p);
  this._blockSize = p;
  this._blockOffset = 0;
  this._length = [0, 0, 0, 0];
  this._finalized = false;
}
require("./85.js")(f, v2);
f.prototype._transform = function (p2, p3, p4) {
  var v3 = null;
  try {
    this.update(p2, p3);
  } catch (e) {
    v3 = e;
  }
  p4(v3);
};
f.prototype._flush = function (p5) {
  var v4 = null;
  try {
    this.push(this.digest());
  } catch (e2) {
    v4 = e2;
  }
  p5(v4);
};
f.prototype.update = function (p6, p7) {
  (function (p8, p9) {
    if (!v.isBuffer(p8) && typeof p8 !== "string") {
      throw new TypeError(p9 + " must be a string or a buffer");
    }
  })(p6, "Data");
  if (this._finalized) {
    throw new Error("Digest already called");
  }
  if (!v.isBuffer(p6)) {
    p6 = v.from(p6, p7);
  }
  var v5 = this._block;
  for (var vLN0 = 0; this._blockOffset + p6.length - vLN0 >= this._blockSize;) {
    for (var v6 = this._blockOffset; v6 < this._blockSize;) {
      v5[v6++] = p6[vLN0++];
    }
    this._update();
    this._blockOffset = 0;
  }
  while (vLN0 < p6.length) {
    v5[this._blockOffset++] = p6[vLN0++];
  }
  for (var vLN02 = 0, v7 = p6.length * 8; v7 > 0; ++vLN02) {
    this._length[vLN02] += v7;
    if ((v7 = this._length[vLN02] / 4294967296 | 0) > 0) {
      this._length[vLN02] -= v7 * 4294967296;
    }
  }
  return this;
};
f.prototype._update = function () {
  throw new Error("_update is not implemented");
};
f.prototype.digest = function (p10) {
  if (this._finalized) {
    throw new Error("Digest already called");
  }
  this._finalized = true;
  var v8 = this._digest();
  if (p10 !== undefined) {
    v8 = v8.toString(p10);
  }
  this._block.fill(0);
  this._blockOffset = 0;
  for (var vLN03 = 0; vLN03 < 4; ++vLN03) {
    this._length[vLN03] = 0;
  }
  return v8;
};
f.prototype._digest = function () {
  throw new Error("_digest is not implemented");
};
module.exports = f;