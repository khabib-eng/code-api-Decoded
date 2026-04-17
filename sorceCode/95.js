exports.__esModule = true;
exports.default = undefined;
var v254;
var v255 = (v254 = require("./17.js")) && v254.__esModule ? v254 : {
  default: v254
};
var vP344 = require("./18.js");
var vA12 = [{
  test: function (p345) {
    return p345.getBrowserName(true) === "microsoft edge";
  },
  describe: function (p346) {
    if (/\sedg\//i.test(p346)) {
      return {
        name: vP344.ENGINE_MAP.Blink
      };
    }
    var v256 = v255.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, p346);
    return {
      name: vP344.ENGINE_MAP.EdgeHTML,
      version: v256
    };
  }
}, {
  test: [/trident/i],
  describe: function (p347) {
    var vO105 = {
      name: vP344.ENGINE_MAP.Trident
    };
    var v257 = v255.default.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, p347);
    if (v257) {
      vO105.version = v257;
    }
    return vO105;
  }
}, {
  test: function (p348) {
    return p348.test(/presto/i);
  },
  describe: function (p349) {
    var vO106 = {
      name: vP344.ENGINE_MAP.Presto
    };
    var v258 = v255.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, p349);
    if (v258) {
      vO106.version = v258;
    }
    return vO106;
  }
}, {
  test: function (p350) {
    var v259 = p350.test(/gecko/i);
    var v260 = p350.test(/like gecko/i);
    return v259 && !v260;
  },
  describe: function (p351) {
    var vO107 = {
      name: vP344.ENGINE_MAP.Gecko
    };
    var v261 = v255.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, p351);
    if (v261) {
      vO107.version = v261;
    }
    return vO107;
  }
}, {
  test: [/(apple)?webkit\/537\.36/i],
  describe: function () {
    return {
      name: vP344.ENGINE_MAP.Blink
    };
  }
}, {
  test: [/(apple)?webkit/i],
  describe: function (p352) {
    var vO108 = {
      name: vP344.ENGINE_MAP.WebKit
    };
    var v262 = v255.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, p352);
    if (v262) {
      vO108.version = v262;
    }
    return vO108;
  }
}];
exports.default = vA12;
module.exports = exports.default;