function yC(CC, yC) {
  "boolean" === typeof yC && (yC = {
    forever: yC
  });
  this._originalTimeouts = JSON.parse(JSON.stringify(CC));
  this._timeouts = CC;
  this._options = yC || {};
  this._maxRetryTime = yC && yC.maxRetryTime || 1 / 0;
  this._fn = null;
  this._errors = [];
  this._attempts = 1;
  this._operationTimeout = null;
  this._operationTimeoutCb = null;
  this._timeout = null;
  this._operationStart = null;
  this._timer = null;
  this._options.forever && (this._cachedTimeouts = this._timeouts.slice(0));
}
module.exports = yC;
yC.prototype.reset = function () {
  this._attempts = 1;
  this._timeouts = this._originalTimeouts.slice(0);
};
yC.prototype.stop = function () {
  this._timeout && clearTimeout(this._timeout);
  this._timer && clearTimeout(this._timer);
  this._timeouts = [];
  this._cachedTimeouts = null;
};
yC.prototype.retry = function (CC) {
  this._timeout && clearTimeout(this._timeout);
  if (!CC) {
    return !1;
  }
  var yC = new Date().getTime();
  if (CC && yC - this._operationStart >= this._maxRetryTime) {
    this._errors.push(CC);
    this._errors.unshift(new Error("RetryOperation timeout occurred"));
    return !1;
  }
  this._errors.push(CC);
  var IC = this._timeouts.shift();
  if (void 0 === IC) {
    if (!this._cachedTimeouts) {
      return !1;
    }
    this._errors.splice(0, this._errors.length - 1);
    IC = this._cachedTimeouts.slice(-1);
  }
  var fC = this;
  this._timer = setTimeout(function () {
    fC._attempts++;
    fC._operationTimeoutCb && (fC._timeout = setTimeout(function () {
      fC._operationTimeoutCb(fC._attempts);
    }, fC._operationTimeout), fC._options.unref && fC._timeout.unref());
    fC._fn(fC._attempts);
  }, IC);
  this._options.unref && this._timer.unref();
  return !0;
};
yC.prototype.attempt = function (CC, yC) {
  this._fn = CC;
  yC && (yC.timeout && (this._operationTimeout = yC.timeout), yC.cb && (this._operationTimeoutCb = yC.cb));
  var IC = this;
  this._operationTimeoutCb && (this._timeout = setTimeout(function () {
    IC._operationTimeoutCb();
  }, IC._operationTimeout));
  this._operationStart = new Date().getTime();
  this._fn(this._attempts);
};
yC.prototype.try = function (CC) {
  console.log("Using RetryOperation.try() is deprecated");
  this.attempt(CC);
};
yC.prototype.start = function (CC) {
  console.log("Using RetryOperation.start() is deprecated");
  this.attempt(CC);
};
yC.prototype.start = yC.prototype.try;
yC.prototype.errors = function () {
  return this._errors;
};
yC.prototype.attempts = function () {
  return this._attempts;
};
yC.prototype.mainError = function () {
  if (0 === this._errors.length) {
    return null;
  }
  for (var CC = {}, yC = null, IC = 0, fC = 0; fC < this._errors.length; fC++) {
    var ky = this._errors[fC];
    var gC = ky.message;
    var AC = (CC[gC] || 0) + 1;
    CC[gC] = AC;
    AC >= IC && (yC = ky, IC = AC);
  }
  return yC;
};