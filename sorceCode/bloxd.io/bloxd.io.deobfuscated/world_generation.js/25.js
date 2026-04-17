var js = require("./29.js");
var js2 = require("./55.js");
function f(p, p2) {
  this.shape = p.shape;
  if (typeof p.distanceFunction === "function") {
    this.implementation = new js2(p, p2);
  } else {
    this.implementation = new js(p, p2);
  }
}
f.prototype.implementation = null;
f.prototype.addRandomPoint = function () {
  return this.implementation.addRandomPoint();
};
f.prototype.addPoint = function (p3) {
  return this.implementation.addPoint(p3);
};
f.prototype.next = function () {
  return this.implementation.next();
};
f.prototype.fill = function () {
  return this.implementation.fill();
};
f.prototype.getAllPoints = function () {
  return this.implementation.getAllPoints();
};
f.prototype.getAllPointsWithDistance = function () {
  return this.implementation.getAllPointsWithDistance();
};
f.prototype.reset = function () {
  this.implementation.reset();
};
module.exports = f;