exports.__esModule = true;
exports.default = undefined;
var v155;
var v156 = (v155 = require("./91.js")) && v155.__esModule ? v155 : {
  default: v155
};
var vP223 = require("./18.js");
function f10(p224, p225) {
  for (var vLN06 = 0; vLN06 < p225.length; vLN06++) {
    var v157 = p225[vLN06];
    v157.enumerable = v157.enumerable || false;
    v157.configurable = true;
    if ("value" in v157) {
      v157.writable = true;
    }
    Object.defineProperty(p224, v157.key, v157);
  }
}
var vF5 = function () {
  function f11() {}
  var v158;
  var v159;
  var v160;
  f11.getParser = function (p226, p227 = false) {
    if (typeof p226 != "string") {
      throw new Error("UserAgent should be a string");
    }
    return new v156.default(p226, p227);
  };
  f11.parse = function (p228) {
    return new v156.default(p228).getResult();
  };
  v158 = f11;
  v160 = [{
    key: "BROWSER_MAP",
    get: function () {
      return vP223.BROWSER_MAP;
    }
  }, {
    key: "ENGINE_MAP",
    get: function () {
      return vP223.ENGINE_MAP;
    }
  }, {
    key: "OS_MAP",
    get: function () {
      return vP223.OS_MAP;
    }
  }, {
    key: "PLATFORMS_MAP",
    get: function () {
      return vP223.PLATFORMS_MAP;
    }
  }];
  if (v159 = null) {
    f10(v158.prototype, v159);
  }
  if (v160) {
    f10(v158, v160);
  }
  return f11;
}();
exports.default = vF5;
module.exports = exports.default;