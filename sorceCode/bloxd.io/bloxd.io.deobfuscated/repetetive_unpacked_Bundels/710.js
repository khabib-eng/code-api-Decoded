var fC = require("./715.js")();
var ky = require("./730.js")("Object.prototype.toString");
function gC(CC) {
  return !(fC && CC && "object" === typeof CC && Symbol.toStringTag in CC) && "[object Arguments]" === ky(CC);
}
function AC(CC) {
  return !!gC(CC) || null !== CC && "object" === typeof CC && "number" === typeof CC.length && CC.length >= 0 && "[object Array]" !== ky(CC) && "[object Function]" === ky(CC.callee);
}
var my = function () {
  return gC(arguments);
}();
gC.isLegacyArguments = AC;
module.exports = my ? gC : AC;