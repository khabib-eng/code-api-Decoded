var fC = require("./700.js");
var ky = {
  log: console.log.bind(console),
  info: console.info.bind(console),
  warn: console.warn.bind(console),
  error: console.error.bind(console),
  debug: (console.debug || console.log).bind(console)
};
module.exports = function (CC) {
  Object.keys(ky).forEach(function (yC) {
    console[yC] = function () {
      var IC = "function" === typeof CC ? CC() : CC;
      arguments[0] = fC.format(IC, arguments[0]);
      ky[yC].apply(console, arguments);
    };
  });
};