require("./700.js");
var fC = require("./1767.js");
function ky(CC) {
  fC("function" === typeof CC ? CC : "string" === typeof CC && CC ? () => CC + " " + gC() : gC);
}
function gC() {
  return "[" + new Date().toISOString() + "]";
}
module.exports = ky;
ky();