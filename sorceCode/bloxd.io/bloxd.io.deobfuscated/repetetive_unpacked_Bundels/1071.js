module.exports = LC;
var fC = require("./1030.js").b;
var ky = fC.ERR_METHOD_NOT_IMPLEMENTED;
var gC = fC.ERR_MULTIPLE_CALLBACK;
var AC = fC.ERR_TRANSFORM_ALREADY_TRANSFORMING;
var my = fC.ERR_TRANSFORM_WITH_LENGTH_0;
var XC = require("./1032.js");
function iy(CC, yC) {
  var IC = this._transformState;
  IC.transforming = !1;
  var fC = IC.writecb;
  if (null === fC) {
    return this.emit("error", new gC());
  }
  IC.writechunk = null;
  IC.writecb = null;
  null != yC && this.push(yC);
  fC(CC);
  var ky = this._readableState;
  ky.reading = !1;
  (ky.needReadable || ky.length < ky.highWaterMark) && this._read(ky.highWaterMark);
}
function LC(CC) {
  if (!(this instanceof LC)) {
    return new LC(CC);
  }
  XC.call(this, CC);
  this._transformState = {
    afterTransform: iy.bind(this),
    needTransform: !1,
    transforming: !1,
    writecb: null,
    writechunk: null,
    writeencoding: null
  };
  this._readableState.needReadable = !0;
  this._readableState.sync = !1;
  CC && ("function" === typeof CC.transform && (this._transform = CC.transform), "function" === typeof CC.flush && (this._flush = CC.flush));
  this.on("prefinish", YC);
}
function YC() {
  var CC = this;
  "function" !== typeof this._flush || this._readableState.destroyed ? bC(this, null, null) : this._flush(function (yC, IC) {
    bC(CC, yC, IC);
  });
}
function bC(CC, yC, IC) {
  if (yC) {
    return CC.emit("error", yC);
  }
  null != IC && CC.push(IC);
  if (CC._writableState.length) {
    throw new my();
  }
  if (CC._transformState.transforming) {
    throw new AC();
  }
  return CC.push(null);
}
require("./966.js")(LC, XC);
LC.prototype.push = function (CC, yC) {
  this._transformState.needTransform = !1;
  return XC.prototype.push.call(this, CC, yC);
};
LC.prototype._transform = function (CC, yC, IC) {
  IC(new ky("_transform()"));
};
LC.prototype._write = function (CC, yC, IC) {
  var fC = this._transformState;
  fC.writecb = IC;
  fC.writechunk = CC;
  fC.writeencoding = yC;
  if (!fC.transforming) {
    var ky = this._readableState;
    (fC.needTransform || ky.needReadable || ky.length < ky.highWaterMark) && this._read(ky.highWaterMark);
  }
};
LC.prototype._read = function (CC) {
  var yC = this._transformState;
  null === yC.writechunk || yC.transforming ? yC.needTransform = !0 : (yC.transforming = !0, this._transform(yC.writechunk, yC.writeencoding, yC.afterTransform));
};
LC.prototype._destroy = function (CC, yC) {
  XC.prototype._destroy.call(this, CC, function (CC) {
    yC(CC);
  });
};