require("./63.js");
var fC = require("./49.js");
var ky = 60103;
exports.Fragment = 60107;
if ("function" === typeof Symbol && Symbol.for) {
  var gC = Symbol.for;
  ky = gC("react.element");
  exports.Fragment = gC("react.fragment");
}
var AC = fC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner;
var my = Object.prototype.hasOwnProperty;
var XC = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};
function iy(CC, yC, IC) {
  var fC;
  var gC = {};
  var iy = null;
  var LC = null;
  void 0 !== IC && (iy = "" + IC);
  void 0 !== yC.key && (iy = "" + yC.key);
  void 0 !== yC.ref && (LC = yC.ref);
  for (fC in yC) {
    my.call(yC, fC) && !XC.hasOwnProperty(fC) && (gC[fC] = yC[fC]);
  }
  if (CC && CC.defaultProps) {
    for (fC in yC = CC.defaultProps) {
      void 0 === gC[fC] && (gC[fC] = yC[fC]);
    }
  }
  return {
    $$typeof: ky,
    type: CC,
    key: iy,
    ref: LC,
    props: gC,
    _owner: AC.current
  };
}
exports.jsx = iy;
exports.jsxs = iy;