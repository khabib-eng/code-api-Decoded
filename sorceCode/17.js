exports.__esModule = true;
exports.default = undefined;
var vP191 = require("./18.js");
var vF4 = function () {
  function f8() {}
  f8.getFirstMatch = function (p192, p193) {
    var v136 = p193.match(p192);
    return v136 && v136.length > 0 && v136[1] || "";
  };
  f8.getSecondMatch = function (p194, p195) {
    var v137 = p195.match(p194);
    return v137 && v137.length > 1 && v137[2] || "";
  };
  f8.matchAndReturnConst = function (p196, p197, p198) {
    if (p196.test(p197)) {
      return p198;
    }
  };
  f8.getWindowsVersionName = function (p199) {
    switch (p199) {
      case "NT":
        return "NT";
      case "XP":
      case "NT 5.1":
        return "XP";
      case "NT 5.0":
        return "2000";
      case "NT 5.2":
        return "2003";
      case "NT 6.0":
        return "Vista";
      case "NT 6.1":
        return "7";
      case "NT 6.2":
        return "8";
      case "NT 6.3":
        return "8.1";
      case "NT 10.0":
        return "10";
      default:
        return;
    }
  };
  f8.getMacOSVersionName = function (p200) {
    var v138 = p200.split(".").splice(0, 2).map(function (p201) {
      return parseInt(p201, 10) || 0;
    });
    v138.push(0);
    if (v138[0] === 10) {
      switch (v138[1]) {
        case 5:
          return "Leopard";
        case 6:
          return "Snow Leopard";
        case 7:
          return "Lion";
        case 8:
          return "Mountain Lion";
        case 9:
          return "Mavericks";
        case 10:
          return "Yosemite";
        case 11:
          return "El Capitan";
        case 12:
          return "Sierra";
        case 13:
          return "High Sierra";
        case 14:
          return "Mojave";
        case 15:
          return "Catalina";
        default:
          return;
      }
    }
  };
  f8.getAndroidVersionName = function (p202) {
    var v139 = p202.split(".").splice(0, 2).map(function (p203) {
      return parseInt(p203, 10) || 0;
    });
    v139.push(0);
    if (v139[0] !== 1 || !(v139[1] < 5)) {
      if (v139[0] === 1 && v139[1] < 6) {
        return "Cupcake";
      } else if (v139[0] === 1 && v139[1] >= 6) {
        return "Donut";
      } else if (v139[0] === 2 && v139[1] < 2) {
        return "Eclair";
      } else if (v139[0] === 2 && v139[1] === 2) {
        return "Froyo";
      } else if (v139[0] === 2 && v139[1] > 2) {
        return "Gingerbread";
      } else if (v139[0] === 3) {
        return "Honeycomb";
      } else if (v139[0] === 4 && v139[1] < 1) {
        return "Ice Cream Sandwich";
      } else if (v139[0] === 4 && v139[1] < 4) {
        return "Jelly Bean";
      } else if (v139[0] === 4 && v139[1] >= 4) {
        return "KitKat";
      } else if (v139[0] === 5) {
        return "Lollipop";
      } else if (v139[0] === 6) {
        return "Marshmallow";
      } else if (v139[0] === 7) {
        return "Nougat";
      } else if (v139[0] === 8) {
        return "Oreo";
      } else if (v139[0] === 9) {
        return "Pie";
      } else {
        return undefined;
      }
    }
  };
  f8.getVersionPrecision = function (p204) {
    return p204.split(".").length;
  };
  f8.compareVersions = function (p205, p206, p207 = false) {
    var v140 = f8.getVersionPrecision(p205);
    var v141 = f8.getVersionPrecision(p206);
    var v142 = Math.max(v140, v141);
    var vLN05 = 0;
    var v143 = f8.map([p205, p206], function (p208) {
      var v144 = v142 - f8.getVersionPrecision(p208);
      var v145 = p208 + new Array(v144 + 1).join(".0");
      return f8.map(v145.split("."), function (p209) {
        return new Array(20 - p209.length).join("0") + p209;
      }).reverse();
    });
    if (p207) {
      vLN05 = v142 - Math.min(v140, v141);
    }
    v142 -= 1;
    while (v142 >= vLN05) {
      if (v143[0][v142] > v143[1][v142]) {
        return 1;
      }
      if (v143[0][v142] === v143[1][v142]) {
        if (v142 === vLN05) {
          return 0;
        }
        v142 -= 1;
      } else if (v143[0][v142] < v143[1][v142]) {
        return -1;
      }
    }
  };
  f8.map = function (p210, p211) {
    var v146;
    var vA7 = [];
    if (Array.prototype.map) {
      return Array.prototype.map.call(p210, p211);
    }
    for (v146 = 0; v146 < p210.length; v146 += 1) {
      vA7.push(p211(p210[v146]));
    }
    return vA7;
  };
  f8.find = function (p212, p213) {
    var v147;
    var v148;
    if (Array.prototype.find) {
      return Array.prototype.find.call(p212, p213);
    }
    v147 = 0;
    v148 = p212.length;
    for (; v147 < v148; v147 += 1) {
      var v149 = p212[v147];
      if (p213(v149, v147)) {
        return v149;
      }
    }
  };
  f8.assign = function (p214) {
    var v150;
    var v151;
    var vP214 = p214;
    for (var v152 = arguments.length, v153 = new Array(v152 > 1 ? v152 - 1 : 0), vLN12 = 1; vLN12 < v152; vLN12++) {
      v153[vLN12 - 1] = arguments[vLN12];
    }
    if (Object.assign) {
      return Object.assign.apply(Object, [p214].concat(v153));
    }
    function f9() {
      var v154 = v153[v150];
      if (typeof v154 == "object" && v154 !== null) {
        Object.keys(v154).forEach(function (p215) {
          vP214[p215] = v154[p215];
        });
      }
    }
    v150 = 0;
    v151 = v153.length;
    for (; v150 < v151; v150 += 1) {
      f9();
    }
    return p214;
  };
  f8.getBrowserAlias = function (p216) {
    return vP191.BROWSER_ALIASES_MAP[p216];
  };
  f8.getBrowserTypeByAlias = function (p217) {
    return vP191.BROWSER_MAP[p217] || "";
  };
  return f8;
}();
exports.default = vF4;
module.exports = exports.default;