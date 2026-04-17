"function" === typeof Object.create ? module.exports = function (CC, yC) {
  yC && (CC.super_ = yC, CC.prototype = Object.create(yC.prototype, {
    constructor: {
      value: CC,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }));
} : module.exports = function (CC, yC) {
  if (yC) {
    CC.super_ = yC;
    function IC() {}
    IC.prototype = yC.prototype;
    CC.prototype = new IC();
    CC.prototype.constructor = CC;
  }
};