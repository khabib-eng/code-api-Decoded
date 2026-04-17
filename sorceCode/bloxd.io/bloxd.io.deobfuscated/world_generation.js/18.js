function f(p) {
  return !!p.constructor && typeof p.constructor.isBuffer === "function" && p.constructor.isBuffer(p);
}
module.exports = function (p2) {
  return p2 != null && (f(p2) || function (p3) {
    return typeof p3.readFloatLE === "function" && typeof p3.slice === "function" && f(p3.slice(0, 0));
  }(p2) || !!p2._isBuffer);
};