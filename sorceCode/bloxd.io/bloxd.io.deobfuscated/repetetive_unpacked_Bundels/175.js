module.exports = function (CC, yC) {
  var IC = fC(CC[0], CC[1], CC[2]);
  var AC = fC(yC[0], yC[1], yC[2]);
  ky(IC, IC);
  ky(AC, AC);
  var my = gC(IC, AC);
  return my > 1 ? 0 : Math.acos(my);
};
var fC = require("./183.js");
var ky = require("./185.js");
var gC = require("./192.js");