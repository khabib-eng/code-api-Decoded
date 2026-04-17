module.exports = f2;
var v = require("./159.js").c;
var v2 = v.ERR_METHOD_NOT_IMPLEMENTED;
var v3 = v.ERR_MULTIPLE_CALLBACK;
var v4 = v.ERR_TRANSFORM_ALREADY_TRANSFORMING;
var v5 = v.ERR_TRANSFORM_WITH_LENGTH_0;
var js = require("./163.js");
function f(p, p2) {
  var v6 = this._transformState;
  v6.transforming = false;
  var v7 = v6.writecb;
  if (v7 === null) {
    return this.emit("error", new v3());
  }
  v6.writechunk = null;
  v6.writecb = null;
  if (p2 != null) {
    this.push(p2);
  }
  v7(p);
  var v8 = this._readableState;
  v8.reading = false;
  if (v8.needReadable || v8.length < v8.highWaterMark) {
    this._read(v8.highWaterMark);
  }
}
function f2(p3) {
  if (!(this instanceof f2)) {
    return new f2(p3);
  }
  js.call(this, p3);
  this._transformState = {
    afterTransform: f.bind(this),
    needTransform: false,
    transforming: false,
    writecb: null,
    writechunk: null,
    writeencoding: null
  };
  this._readableState.needReadable = true;
  this._readableState.sync = false;
  if (p3) {
    if (typeof p3.transform === "function") {
      this._transform = p3.transform;
    }
    if (typeof p3.flush === "function") {
      this._flush = p3.flush;
    }
  }
  this.on("prefinish", f3);
}
function f3() {
  var vThis = this;
  if (typeof this._flush !== "function" || this._readableState.destroyed) {
    f4(this, null, null);
  } else {
    this._flush(function (p4, p5) {
      f4(vThis, p4, p5);
    });
  }
}
function f4(p6, p7, p8) {
  if (p7) {
    return p6.emit("error", p7);
  }
  if (p8 != null) {
    p6.push(p8);
  }
  if (p6._writableState.length) {
    throw new v5();
  }
  if (p6._transformState.transforming) {
    throw new v4();
  }
  return p6.push(null);
}
require("./85.js")(f2, js);
f2.prototype.push = function (p9, p10) {
  this._transformState.needTransform = false;
  return js.prototype.push.call(this, p9, p10);
};
f2.prototype._transform = function (p11, p12, p13) {
  p13(new v2("_transform()"));
};
f2.prototype._write = function (p14, p15, p16) {
  var v9 = this._transformState;
  v9.writecb = p16;
  v9.writechunk = p14;
  v9.writeencoding = p15;
  if (!v9.transforming) {
    var v10 = this._readableState;
    if (v9.needTransform || v10.needReadable || v10.length < v10.highWaterMark) {
      this._read(v10.highWaterMark);
    }
  }
};
f2.prototype._read = function (p17) {
  var v11 = this._transformState;
  if (v11.writechunk === null || v11.transforming) {
    v11.needTransform = true;
  } else {
    v11.transforming = true;
    this._transform(v11.writechunk, v11.writeencoding, v11.afterTransform);
  }
};
f2.prototype._destroy = function (p18, p19) {
  js.prototype._destroy.call(this, p18, function (p20) {
    p19(p20);
  });
};