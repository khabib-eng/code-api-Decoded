var fC = require("./826.js");
module.exports = function (CC) {
  return fC(CC) || 0 === CC ? CC : CC < 0 ? -1 : 1;
};