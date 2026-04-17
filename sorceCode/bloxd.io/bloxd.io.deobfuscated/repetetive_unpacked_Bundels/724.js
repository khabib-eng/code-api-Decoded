module.exports = function () {
  if ("function" !== typeof Symbol || "function" !== typeof Object.getOwnPropertySymbols) {
    return !1;
  }
  if ("symbol" === typeof Symbol.iterator) {
    return !0;
  }
  var CC = {};
  var yC = Symbol("test");
  var IC = Object(yC);
  if ("string" === typeof yC) {
    return !1;
  }
  if ("[object Symbol]" !== Object.prototype.toString.call(yC)) {
    return !1;
  }
  if ("[object Symbol]" !== Object.prototype.toString.call(IC)) {
    return !1;
  }
  CC[yC] = 42;
  for (var fC in CC) {
    return !1;
  }
  if ("function" === typeof Object.keys && 0 !== Object.keys(CC).length) {
    return !1;
  }
  if ("function" === typeof Object.getOwnPropertyNames && 0 !== Object.getOwnPropertyNames(CC).length) {
    return !1;
  }
  var ky = Object.getOwnPropertySymbols(CC);
  if (1 !== ky.length || ky[0] !== yC) {
    return !1;
  }
  if (!Object.prototype.propertyIsEnumerable.call(CC, yC)) {
    return !1;
  }
  if ("function" === typeof Object.getOwnPropertyDescriptor) {
    var gC = Object.getOwnPropertyDescriptor(CC, yC);
    if (42 !== gC.value || !0 !== gC.enumerable) {
      return !1;
    }
  }
  return !0;
};