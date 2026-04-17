var fC = require("./1598.js");
function ky() {}
function gC() {}
gC.resetWarningCache = ky;
module.exports = function () {
  function CC(CC, yC, IC, ky, gC, AC) {
    if (AC !== fC) {
      var my = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
      my.name = "Invariant Violation";
      throw my;
    }
  }
  function yC() {
    return CC;
  }
  CC.isRequired = CC;
  var IC = {
    array: CC,
    bigint: CC,
    bool: CC,
    func: CC,
    number: CC,
    object: CC,
    string: CC,
    symbol: CC,
    any: CC,
    arrayOf: yC,
    element: CC,
    elementType: CC,
    instanceOf: yC,
    node: CC,
    objectOf: yC,
    oneOf: yC,
    oneOfType: yC,
    shape: yC,
    exact: yC,
    checkPropTypes: gC,
    resetWarningCache: ky
  };
  IC.PropTypes = IC;
  return IC;
};