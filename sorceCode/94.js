exports.__esModule = true;
exports.default = undefined;
var v248;
var v249 = (v248 = require("./17.js")) && v248.__esModule ? v248 : {
  default: v248
};
var vP328 = require("./18.js");
var vA11 = [{
  test: [/googlebot/i],
  describe: function () {
    return {
      type: "bot",
      vendor: "Google"
    };
  }
}, {
  test: [/huawei/i],
  describe: function (p329) {
    var v250 = v249.default.getFirstMatch(/(can-l01)/i, p329) && "Nova";
    var vO104 = {
      type: vP328.PLATFORMS_MAP.mobile,
      vendor: "Huawei"
    };
    if (v250) {
      vO104.model = v250;
    }
    return vO104;
  }
}, {
  test: [/nexus\s*(?:7|8|9|10).*/i],
  describe: function () {
    return {
      type: vP328.PLATFORMS_MAP.tablet,
      vendor: "Nexus"
    };
  }
}, {
  test: [/ipad/i],
  describe: function () {
    return {
      type: vP328.PLATFORMS_MAP.tablet,
      vendor: "Apple",
      model: "iPad"
    };
  }
}, {
  test: [/Macintosh(.*?) FxiOS(.*?)\//],
  describe: function () {
    return {
      type: vP328.PLATFORMS_MAP.tablet,
      vendor: "Apple",
      model: "iPad"
    };
  }
}, {
  test: [/kftt build/i],
  describe: function () {
    return {
      type: vP328.PLATFORMS_MAP.tablet,
      vendor: "Amazon",
      model: "Kindle Fire HD 7"
    };
  }
}, {
  test: [/silk/i],
  describe: function () {
    return {
      type: vP328.PLATFORMS_MAP.tablet,
      vendor: "Amazon"
    };
  }
}, {
  test: [/tablet(?! pc)/i],
  describe: function () {
    return {
      type: vP328.PLATFORMS_MAP.tablet
    };
  }
}, {
  test: function (p330) {
    var v251 = p330.test(/ipod|iphone/i);
    var v252 = p330.test(/like (ipod|iphone)/i);
    return v251 && !v252;
  },
  describe: function (p331) {
    var v253 = v249.default.getFirstMatch(/(ipod|iphone)/i, p331);
    return {
      type: vP328.PLATFORMS_MAP.mobile,
      vendor: "Apple",
      model: v253
    };
  }
}, {
  test: [/nexus\s*[0-6].*/i, /galaxy nexus/i],
  describe: function () {
    return {
      type: vP328.PLATFORMS_MAP.mobile,
      vendor: "Nexus"
    };
  }
}, {
  test: [/[^-]mobi/i],
  describe: function () {
    return {
      type: vP328.PLATFORMS_MAP.mobile
    };
  }
}, {
  test: function (p332) {
    return p332.getBrowserName(true) === "blackberry";
  },
  describe: function () {
    return {
      type: vP328.PLATFORMS_MAP.mobile,
      vendor: "BlackBerry"
    };
  }
}, {
  test: function (p333) {
    return p333.getBrowserName(true) === "bada";
  },
  describe: function () {
    return {
      type: vP328.PLATFORMS_MAP.mobile
    };
  }
}, {
  test: function (p334) {
    return p334.getBrowserName() === "windows phone";
  },
  describe: function () {
    return {
      type: vP328.PLATFORMS_MAP.mobile,
      vendor: "Microsoft"
    };
  }
}, {
  test: function (p335) {
    var vNumber2 = Number(String(p335.getOSVersion()).split(".")[0]);
    return p335.getOSName(true) === "android" && vNumber2 >= 3;
  },
  describe: function () {
    return {
      type: vP328.PLATFORMS_MAP.tablet
    };
  }
}, {
  test: function (p336) {
    return p336.getOSName(true) === "android";
  },
  describe: function () {
    return {
      type: vP328.PLATFORMS_MAP.mobile
    };
  }
}, {
  test: function (p337) {
    return p337.getOSName(true) === "macos";
  },
  describe: function () {
    return {
      type: vP328.PLATFORMS_MAP.desktop,
      vendor: "Apple"
    };
  }
}, {
  test: function (p338) {
    return p338.getOSName(true) === "windows";
  },
  describe: function () {
    return {
      type: vP328.PLATFORMS_MAP.desktop
    };
  }
}, {
  test: function (p339) {
    return p339.getOSName(true) === "linux";
  },
  describe: function () {
    return {
      type: vP328.PLATFORMS_MAP.desktop
    };
  }
}, {
  test: function (p340) {
    return p340.getOSName(true) === "playstation 4";
  },
  describe: function () {
    return {
      type: vP328.PLATFORMS_MAP.tv
    };
  }
}, {
  test: function (p341) {
    return p341.getOSName(true) === "roku";
  },
  describe: function () {
    return {
      type: vP328.PLATFORMS_MAP.tv
    };
  }
}];
exports.default = vA11;
module.exports = exports.default;