module.exports = ky;
var fC = require("./1071.js");
function ky(CC) {
  if (!(this instanceof ky)) {
    return new ky(CC);
  }
  fC.call(this, CC);
}
require("./966.js")(ky, fC);
ky.prototype._transform = function (CC, yC, IC) {
  IC(null, CC);
};