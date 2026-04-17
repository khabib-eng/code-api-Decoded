module.exports = f;
var js = require("./212.js");
function f(p) {
  if (!(this instanceof f)) {
    return new f(p);
  }
  js.call(this, p);
}
require("./85.js")(f, js);
f.prototype._transform = function (p2, p3, p4) {
  p4(null, p2);
};