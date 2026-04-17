exports.__esModule = true;
exports.default = undefined;
var v229;
var v230 = (v229 = require("./17.js")) && v229.__esModule ? v229 : {
  default: v229
};
var vP312 = require("./18.js");
var vA10 = [{
  test: [/Roku\/DVP/],
  describe: function (p313) {
    var v231 = v230.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, p313);
    return {
      name: vP312.OS_MAP.Roku,
      version: v231
    };
  }
}, {
  test: [/windows phone/i],
  describe: function (p314) {
    var v232 = v230.default.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, p314);
    return {
      name: vP312.OS_MAP.WindowsPhone,
      version: v232
    };
  }
}, {
  test: [/windows /i],
  describe: function (p315) {
    var v233 = v230.default.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, p315);
    var v234 = v230.default.getWindowsVersionName(v233);
    return {
      name: vP312.OS_MAP.Windows,
      version: v233,
      versionName: v234
    };
  }
}, {
  test: [/Macintosh(.*?) FxiOS(.*?)\//],
  describe: function (p316) {
    var vO100 = {
      name: vP312.OS_MAP.iOS
    };
    var v235 = v230.default.getSecondMatch(/(Version\/)(\d[\d.]+)/, p316);
    if (v235) {
      vO100.version = v235;
    }
    return vO100;
  }
}, {
  test: [/macintosh/i],
  describe: function (p317) {
    var v236 = v230.default.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, p317).replace(/[_\s]/g, ".");
    var v237 = v230.default.getMacOSVersionName(v236);
    var vO101 = {
      name: vP312.OS_MAP.MacOS,
      version: v236
    };
    if (v237) {
      vO101.versionName = v237;
    }
    return vO101;
  }
}, {
  test: [/(ipod|iphone|ipad)/i],
  describe: function (p318) {
    var v238 = v230.default.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, p318).replace(/[_\s]/g, ".");
    return {
      name: vP312.OS_MAP.iOS,
      version: v238
    };
  }
}, {
  test: function (p319) {
    var v239 = !p319.test(/like android/i);
    var v240 = p319.test(/android/i);
    return v239 && v240;
  },
  describe: function (p320) {
    var v241 = v230.default.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, p320);
    var v242 = v230.default.getAndroidVersionName(v241);
    var vO102 = {
      name: vP312.OS_MAP.Android,
      version: v241
    };
    if (v242) {
      vO102.versionName = v242;
    }
    return vO102;
  }
}, {
  test: [/(web|hpw)[o0]s/i],
  describe: function (p321) {
    var v243 = v230.default.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, p321);
    var vO103 = {
      name: vP312.OS_MAP.WebOS
    };
    if (v243 && v243.length) {
      vO103.version = v243;
    }
    return vO103;
  }
}, {
  test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
  describe: function (p322) {
    var v244 = v230.default.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, p322) || v230.default.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, p322) || v230.default.getFirstMatch(/\bbb(\d+)/i, p322);
    return {
      name: vP312.OS_MAP.BlackBerry,
      version: v244
    };
  }
}, {
  test: [/bada/i],
  describe: function (p323) {
    var v245 = v230.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, p323);
    return {
      name: vP312.OS_MAP.Bada,
      version: v245
    };
  }
}, {
  test: [/tizen/i],
  describe: function (p324) {
    var v246 = v230.default.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, p324);
    return {
      name: vP312.OS_MAP.Tizen,
      version: v246
    };
  }
}, {
  test: [/linux/i],
  describe: function () {
    return {
      name: vP312.OS_MAP.Linux
    };
  }
}, {
  test: [/CrOS/],
  describe: function () {
    return {
      name: vP312.OS_MAP.ChromeOS
    };
  }
}, {
  test: [/PlayStation 4/],
  describe: function (p325) {
    var v247 = v230.default.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, p325);
    return {
      name: vP312.OS_MAP.PlayStation4,
      version: v247
    };
  }
}];
exports.default = vA10;
module.exports = exports.default;