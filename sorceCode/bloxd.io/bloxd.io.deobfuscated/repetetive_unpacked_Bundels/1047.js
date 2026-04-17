function fC(CC) {
  try {
    if (!require.g.localStorage) {
      return !1;
    }
  } catch (fC) {
    return !1;
  }
  var yC = require.g.localStorage[CC];
  return null != yC && "true" === String(yC).toLowerCase();
}
module.exports = function (CC, yC) {
  if (fC("noDeprecation")) {
    return CC;
  }
  var IC = !1;
  return function () {
    if (!IC) {
      if (fC("throwDeprecation")) {
        throw new Error(yC);
      }
      fC("traceDeprecation") ? console.trace(yC) : console.warn(yC);
      IC = !0;
    }
    return CC.apply(this, arguments);
  };
};