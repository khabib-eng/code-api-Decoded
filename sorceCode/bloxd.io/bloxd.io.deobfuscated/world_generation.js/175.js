function f(p) {
  try {
    if (!require.g.localStorage) {
      return false;
    }
  } catch (e) {
    return false;
  }
  var v = require.g.localStorage[p];
  return v != null && String(v).toLowerCase() === "true";
}
module.exports = function (p2, p3) {
  if (f("noDeprecation")) {
    return p2;
  }
  var v2 = false;
  return function () {
    if (!v2) {
      if (f("throwDeprecation")) {
        throw new Error(p3);
      }
      if (f("traceDeprecation")) {
        console.trace(p3);
      } else {
        console.warn(p3);
      }
      v2 = true;
    }
    return p2.apply(this, arguments);
  };
};