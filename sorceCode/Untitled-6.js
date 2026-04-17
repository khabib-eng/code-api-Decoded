module.exports = function (p177) {
  var vO55 = {};
  function f7(p178) {
    if (vO55[p178]) {
      return vO55[p178].exports;
    }
    var v132 = vO55[p178] = {
      i: p178,
      l: false,
      exports: {}
    };
    p177[p178].call(v132.exports, v132, v132.exports, f7);
    v132.l = true;
    return v132.exports;
  }
  f7.m = p177;
  f7.c = vO55;
  f7.d = function (p179, p180, p181) {
    if (!f7.o(p179, p180)) {
      Object.defineProperty(p179, p180, {
        enumerable: true,
        get: p181
      });
    }
  };
  f7.r = function (p182) {
    if (typeof Symbol != "undefined" && Symbol.toStringTag) {
      Object.defineProperty(p182, Symbol.toStringTag, {
        value: "Module"
      });
    }
    Object.defineProperty(p182, "__esModule", {
      value: true
    });
  };
  f7.t = function (p183, p184) {
    if (p184 & 1) {
      p183 = f7(p183);
    }
    if (p184 & 8) {
      return p183;
    }
    if (p184 & 4 && typeof p183 == "object" && p183 && p183.__esModule) {
      return p183;
    }
    var v133 = Object.create(null);
    f7.r(v133);
    Object.defineProperty(v133, "default", {
      enumerable: true,
      value: p183
    });
    if (p184 & 2 && typeof p183 != "string") {
      for (var v134 in p183) {
        f7.d(v133, v134, function (p185) {
          return p183[p185];
        }.bind(null, v134));
      }
    }
    return v133;
  };
  f7.n = function (p186) {
    var v135 = p186 && p186.__esModule ? function () {
      return p186.default;
    } : function () {
      return p186;
    };
    f7.d(v135, "a", v135);
    return v135;
  };
  f7.o = function (p187, p188) {
    return Object.prototype.hasOwnProperty.call(p187, p188);
  };
  f7.p = "";
  return f7(f7.s = 90);
}({
  17: function (p189, p190, p191) {
    p190.__esModule = true;
    p190.default = undefined;
    var vP191 = p191(18);
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
    p190.default = vF4;
    p189.exports = p190.default;
  },
  18: function (p218, p219, p220) {
    p219.__esModule = true;
    p219.ENGINE_MAP = p219.OS_MAP = p219.PLATFORMS_MAP = p219.BROWSER_MAP = p219.BROWSER_ALIASES_MAP = undefined;
    p219.BROWSER_ALIASES_MAP = {
      "Amazon Silk": "amazon_silk",
      "Android Browser": "android",
      Bada: "bada",
      BlackBerry: "blackberry",
      Chrome: "chrome",
      Chromium: "chromium",
      Electron: "electron",
      Epiphany: "epiphany",
      Firefox: "firefox",
      Focus: "focus",
      Generic: "generic",
      "Google Search": "google_search",
      Googlebot: "googlebot",
      "Internet Explorer": "ie",
      "K-Meleon": "k_meleon",
      Maxthon: "maxthon",
      "Microsoft Edge": "edge",
      "MZ Browser": "mz",
      "NAVER Whale Browser": "naver",
      Opera: "opera",
      "Opera Coast": "opera_coast",
      PhantomJS: "phantomjs",
      Puffin: "puffin",
      QupZilla: "qupzilla",
      QQ: "qq",
      QQLite: "qqlite",
      Safari: "safari",
      Sailfish: "sailfish",
      "Samsung Internet for Android": "samsung_internet",
      SeaMonkey: "seamonkey",
      Sleipnir: "sleipnir",
      Swing: "swing",
      Tizen: "tizen",
      "UC Browser": "uc",
      Vivaldi: "vivaldi",
      "WebOS Browser": "webos",
      WeChat: "wechat",
      "Yandex Browser": "yandex",
      Roku: "roku"
    };
    p219.BROWSER_MAP = {
      amazon_silk: "Amazon Silk",
      android: "Android Browser",
      bada: "Bada",
      blackberry: "BlackBerry",
      chrome: "Chrome",
      chromium: "Chromium",
      electron: "Electron",
      epiphany: "Epiphany",
      firefox: "Firefox",
      focus: "Focus",
      generic: "Generic",
      googlebot: "Googlebot",
      google_search: "Google Search",
      ie: "Internet Explorer",
      k_meleon: "K-Meleon",
      maxthon: "Maxthon",
      edge: "Microsoft Edge",
      mz: "MZ Browser",
      naver: "NAVER Whale Browser",
      opera: "Opera",
      opera_coast: "Opera Coast",
      phantomjs: "PhantomJS",
      puffin: "Puffin",
      qupzilla: "QupZilla",
      qq: "QQ Browser",
      qqlite: "QQ Browser Lite",
      safari: "Safari",
      sailfish: "Sailfish",
      samsung_internet: "Samsung Internet for Android",
      seamonkey: "SeaMonkey",
      sleipnir: "Sleipnir",
      swing: "Swing",
      tizen: "Tizen",
      uc: "UC Browser",
      vivaldi: "Vivaldi",
      webos: "WebOS Browser",
      wechat: "WeChat",
      yandex: "Yandex Browser"
    };
    p219.PLATFORMS_MAP = {
      tablet: "tablet",
      mobile: "mobile",
      desktop: "desktop",
      tv: "tv"
    };
    p219.OS_MAP = {
      WindowsPhone: "Windows Phone",
      Windows: "Windows",
      MacOS: "macOS",
      iOS: "iOS",
      Android: "Android",
      WebOS: "WebOS",
      BlackBerry: "BlackBerry",
      Bada: "Bada",
      Tizen: "Tizen",
      Linux: "Linux",
      ChromeOS: "Chrome OS",
      PlayStation4: "PlayStation 4",
      Roku: "Roku"
    };
    p219.ENGINE_MAP = {
      EdgeHTML: "EdgeHTML",
      Blink: "Blink",
      Trident: "Trident",
      Presto: "Presto",
      Gecko: "Gecko",
      WebKit: "WebKit"
    };
  },
  90: function (p221, p222, p223) {
    p222.__esModule = true;
    p222.default = undefined;
    var v155;
    var v156 = (v155 = p223(91)) && v155.__esModule ? v155 : {
      default: v155
    };
    var vP223 = p223(18);
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
    p222.default = vF5;
    p221.exports = p222.default;
  },
  91: function (p229, p230, p231) {
    p230.__esModule = true;
    p230.default = undefined;
    var vF6 = f12(p231(92));
    var vF62 = f12(p231(93));
    var vF63 = f12(p231(94));
    var vF64 = f12(p231(95));
    var vF65 = f12(p231(17));
    function f12(p232) {
      if (p232 && p232.__esModule) {
        return p232;
      } else {
        return {
          default: p232
        };
      }
    }
    var vF7 = function () {
      function f13(p233, p234 = false) {
        if (p233 == null || p233 === "") {
          throw new Error("UserAgent parameter can't be empty");
        }
        this._ua = p233;
        this.parsedResult = {};
        if (p234 !== true) {
          this.parse();
        }
      }
      var v161 = f13.prototype;
      v161.getUA = function () {
        return this._ua;
      };
      v161.test = function (p235) {
        return p235.test(this._ua);
      };
      v161.parseBrowser = function () {
        var vThis7 = this;
        this.parsedResult.browser = {};
        var v162 = vF65.default.find(vF6.default, function (p236) {
          if (typeof p236.test == "function") {
            return p236.test(vThis7);
          }
          if (p236.test instanceof Array) {
            return p236.test.some(function (p237) {
              return vThis7.test(p237);
            });
          }
          throw new Error("Browser's test function is not valid");
        });
        if (v162) {
          this.parsedResult.browser = v162.describe(this.getUA());
        }
        return this.parsedResult.browser;
      };
      v161.getBrowser = function () {
        if (this.parsedResult.browser) {
          return this.parsedResult.browser;
        } else {
          return this.parseBrowser();
        }
      };
      v161.getBrowserName = function (p238) {
        if (p238) {
          return String(this.getBrowser().name).toLowerCase() || "";
        } else {
          return this.getBrowser().name || "";
        }
      };
      v161.getBrowserVersion = function () {
        return this.getBrowser().version;
      };
      v161.getOS = function () {
        if (this.parsedResult.os) {
          return this.parsedResult.os;
        } else {
          return this.parseOS();
        }
      };
      v161.parseOS = function () {
        var vThis8 = this;
        this.parsedResult.os = {};
        var v163 = vF65.default.find(vF62.default, function (p239) {
          if (typeof p239.test == "function") {
            return p239.test(vThis8);
          }
          if (p239.test instanceof Array) {
            return p239.test.some(function (p240) {
              return vThis8.test(p240);
            });
          }
          throw new Error("Browser's test function is not valid");
        });
        if (v163) {
          this.parsedResult.os = v163.describe(this.getUA());
        }
        return this.parsedResult.os;
      };
      v161.getOSName = function (p241) {
        var v164 = this.getOS().name;
        if (p241) {
          return String(v164).toLowerCase() || "";
        } else {
          return v164 || "";
        }
      };
      v161.getOSVersion = function () {
        return this.getOS().version;
      };
      v161.getPlatform = function () {
        if (this.parsedResult.platform) {
          return this.parsedResult.platform;
        } else {
          return this.parsePlatform();
        }
      };
      v161.getPlatformType = function (p242 = false) {
        var v165 = this.getPlatform().type;
        if (p242) {
          return String(v165).toLowerCase() || "";
        } else {
          return v165 || "";
        }
      };
      v161.parsePlatform = function () {
        var vThis9 = this;
        this.parsedResult.platform = {};
        var v166 = vF65.default.find(vF63.default, function (p243) {
          if (typeof p243.test == "function") {
            return p243.test(vThis9);
          }
          if (p243.test instanceof Array) {
            return p243.test.some(function (p244) {
              return vThis9.test(p244);
            });
          }
          throw new Error("Browser's test function is not valid");
        });
        if (v166) {
          this.parsedResult.platform = v166.describe(this.getUA());
        }
        return this.parsedResult.platform;
      };
      v161.getEngine = function () {
        if (this.parsedResult.Jy) {
          return this.parsedResult.Jy;
        } else {
          return this.parseEngine();
        }
      };
      v161.getEngineName = function (p245) {
        if (p245) {
          return String(this.getEngine().name).toLowerCase() || "";
        } else {
          return this.getEngine().name || "";
        }
      };
      v161.parseEngine = function () {
        var vThis10 = this;
        this.parsedResult.Jy = {};
        var v167 = vF65.default.find(vF64.default, function (p246) {
          if (typeof p246.test == "function") {
            return p246.test(vThis10);
          }
          if (p246.test instanceof Array) {
            return p246.test.some(function (p247) {
              return vThis10.test(p247);
            });
          }
          throw new Error("Browser's test function is not valid");
        });
        if (v167) {
          this.parsedResult.Jy = v167.describe(this.getUA());
        }
        return this.parsedResult.Jy;
      };
      v161.parse = function () {
        this.parseBrowser();
        this.parseOS();
        this.parsePlatform();
        this.parseEngine();
        return this;
      };
      v161.getResult = function () {
        return vF65.default.assign({}, this.parsedResult);
      };
      v161.satisfies = function (p248) {
        var vThis11 = this;
        var vO56 = {};
        var vLN07 = 0;
        var vO57 = {};
        var vLN08 = 0;
        Object.keys(p248).forEach(function (p249) {
          var v168 = p248[p249];
          if (typeof v168 == "string") {
            vO57[p249] = v168;
            vLN08 += 1;
          } else if (typeof v168 == "object") {
            vO56[p249] = v168;
            vLN07 += 1;
          }
        });
        if (vLN07 > 0) {
          var v169 = Object.keys(vO56);
          var v170 = vF65.default.find(v169, function (p250) {
            return vThis11.isOS(p250);
          });
          if (v170) {
            var v171 = this.satisfies(vO56[v170]);
            if (v171 !== undefined) {
              return v171;
            }
          }
          var v172 = vF65.default.find(v169, function (p251) {
            return vThis11.isPlatform(p251);
          });
          if (v172) {
            var v173 = this.satisfies(vO56[v172]);
            if (v173 !== undefined) {
              return v173;
            }
          }
        }
        if (vLN08 > 0) {
          var v174 = Object.keys(vO57);
          var v175 = vF65.default.find(v174, function (p252) {
            return vThis11.isBrowser(p252, true);
          });
          if (v175 !== undefined) {
            return this.compareVersion(vO57[v175]);
          }
        }
      };
      v161.isBrowser = function (p253, p254 = false) {
        var v176 = this.getBrowserName().toLowerCase();
        var v177 = p253.toLowerCase();
        var v178 = vF65.default.getBrowserTypeByAlias(v177);
        if (p254 && v178) {
          v177 = v178.toLowerCase();
        }
        return v177 === v176;
      };
      v161.compareVersion = function (p255) {
        var vA8 = [0];
        var vP255 = p255;
        var v179 = false;
        var v180 = this.getBrowserVersion();
        if (typeof v180 == "string") {
          if (p255[0] === ">" || p255[0] === "<") {
            vP255 = p255.substr(1);
            if (p255[1] === "=") {
              v179 = true;
              vP255 = p255.substr(2);
            } else {
              vA8 = [];
            }
            if (p255[0] === ">") {
              vA8.push(1);
            } else {
              vA8.push(-1);
            }
          } else if (p255[0] === "=") {
            vP255 = p255.substr(1);
          } else if (p255[0] === "~") {
            v179 = true;
            vP255 = p255.substr(1);
          }
          return vA8.indexOf(vF65.default.compareVersions(v180, vP255, v179)) > -1;
        }
      };
      v161.isOS = function (p256) {
        return this.getOSName(true) === String(p256).toLowerCase();
      };
      v161.isPlatform = function (p257) {
        return this.getPlatformType(true) === String(p257).toLowerCase();
      };
      v161.isEngine = function (p258) {
        return this.getEngineName(true) === String(p258).toLowerCase();
      };
      v161.is = function (p259, p260 = false) {
        return this.isBrowser(p259, p260) || this.isOS(p259) || this.isPlatform(p259);
      };
      v161.some = function (p261) {
        var vThis12 = this;
        if (p261 === undefined) {
          p261 = [];
        }
        return p261.some(function (p262) {
          return vThis12.is(p262);
        });
      };
      return f13;
    }();
    p230.default = vF7;
    p229.exports = p230.default;
  },
  92: function (p263, p264, p265) {
    p264.__esModule = true;
    p264.default = undefined;
    var v181;
    var v182 = (v181 = p265(17)) && v181.__esModule ? v181 : {
      default: v181
    };
    var v183 = /version\/(\d+(\.?_?\d+)+)/i;
    var vA9 = [{
      test: [/googlebot/i],
      describe: function (p266) {
        var vO58 = {
          name: "Googlebot"
        };
        var v184 = v182.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, p266) || v182.default.getFirstMatch(v183, p266);
        if (v184) {
          vO58.version = v184;
        }
        return vO58;
      }
    }, {
      test: [/opera/i],
      describe: function (p267) {
        var vO59 = {
          name: "Opera"
        };
        var v185 = v182.default.getFirstMatch(v183, p267) || v182.default.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, p267);
        if (v185) {
          vO59.version = v185;
        }
        return vO59;
      }
    }, {
      test: [/opr\/|opios/i],
      describe: function (p268) {
        var vO60 = {
          name: "Opera"
        };
        var v186 = v182.default.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, p268) || v182.default.getFirstMatch(v183, p268);
        if (v186) {
          vO60.version = v186;
        }
        return vO60;
      }
    }, {
      test: [/SamsungBrowser/i],
      describe: function (p269) {
        var vO61 = {
          name: "Samsung Internet for Android"
        };
        var v187 = v182.default.getFirstMatch(v183, p269) || v182.default.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, p269);
        if (v187) {
          vO61.version = v187;
        }
        return vO61;
      }
    }, {
      test: [/Whale/i],
      describe: function (p270) {
        var vO62 = {
          name: "NAVER Whale Browser"
        };
        var v188 = v182.default.getFirstMatch(v183, p270) || v182.default.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, p270);
        if (v188) {
          vO62.version = v188;
        }
        return vO62;
      }
    }, {
      test: [/MZBrowser/i],
      describe: function (p271) {
        var vO63 = {
          name: "MZ Browser"
        };
        var v189 = v182.default.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, p271) || v182.default.getFirstMatch(v183, p271);
        if (v189) {
          vO63.version = v189;
        }
        return vO63;
      }
    }, {
      test: [/focus/i],
      describe: function (p272) {
        var vO64 = {
          name: "Focus"
        };
        var v190 = v182.default.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, p272) || v182.default.getFirstMatch(v183, p272);
        if (v190) {
          vO64.version = v190;
        }
        return vO64;
      }
    }, {
      test: [/swing/i],
      describe: function (p273) {
        var vO65 = {
          name: "Swing"
        };
        var v191 = v182.default.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, p273) || v182.default.getFirstMatch(v183, p273);
        if (v191) {
          vO65.version = v191;
        }
        return vO65;
      }
    }, {
      test: [/coast/i],
      describe: function (p274) {
        var vO66 = {
          name: "Opera Coast"
        };
        var v192 = v182.default.getFirstMatch(v183, p274) || v182.default.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, p274);
        if (v192) {
          vO66.version = v192;
        }
        return vO66;
      }
    }, {
      test: [/opt\/\d+(?:.?_?\d+)+/i],
      describe: function (p275) {
        var vO67 = {
          name: "Opera Touch"
        };
        var v193 = v182.default.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i, p275) || v182.default.getFirstMatch(v183, p275);
        if (v193) {
          vO67.version = v193;
        }
        return vO67;
      }
    }, {
      test: [/yabrowser/i],
      describe: function (p276) {
        var vO68 = {
          name: "Yandex Browser"
        };
        var v194 = v182.default.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, p276) || v182.default.getFirstMatch(v183, p276);
        if (v194) {
          vO68.version = v194;
        }
        return vO68;
      }
    }, {
      test: [/ucbrowser/i],
      describe: function (p277) {
        var vO69 = {
          name: "UC Browser"
        };
        var v195 = v182.default.getFirstMatch(v183, p277) || v182.default.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, p277);
        if (v195) {
          vO69.version = v195;
        }
        return vO69;
      }
    }, {
      test: [/Maxthon|mxios/i],
      describe: function (p278) {
        var vO70 = {
          name: "Maxthon"
        };
        var v196 = v182.default.getFirstMatch(v183, p278) || v182.default.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, p278);
        if (v196) {
          vO70.version = v196;
        }
        return vO70;
      }
    }, {
      test: [/epiphany/i],
      describe: function (p279) {
        var vO71 = {
          name: "Epiphany"
        };
        var v197 = v182.default.getFirstMatch(v183, p279) || v182.default.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, p279);
        if (v197) {
          vO71.version = v197;
        }
        return vO71;
      }
    }, {
      test: [/puffin/i],
      describe: function (p280) {
        var vO72 = {
          name: "Puffin"
        };
        var v198 = v182.default.getFirstMatch(v183, p280) || v182.default.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, p280);
        if (v198) {
          vO72.version = v198;
        }
        return vO72;
      }
    }, {
      test: [/sleipnir/i],
      describe: function (p281) {
        var vO73 = {
          name: "Sleipnir"
        };
        var v199 = v182.default.getFirstMatch(v183, p281) || v182.default.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, p281);
        if (v199) {
          vO73.version = v199;
        }
        return vO73;
      }
    }, {
      test: [/k-meleon/i],
      describe: function (p282) {
        var vO74 = {
          name: "K-Meleon"
        };
        var v200 = v182.default.getFirstMatch(v183, p282) || v182.default.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, p282);
        if (v200) {
          vO74.version = v200;
        }
        return vO74;
      }
    }, {
      test: [/micromessenger/i],
      describe: function (p283) {
        var vO75 = {
          name: "WeChat"
        };
        var v201 = v182.default.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, p283) || v182.default.getFirstMatch(v183, p283);
        if (v201) {
          vO75.version = v201;
        }
        return vO75;
      }
    }, {
      test: [/qqbrowser/i],
      describe: function (p284) {
        var vO76 = {
          name: /qqbrowserlite/i.test(p284) ? "QQ Browser Lite" : "QQ Browser"
        };
        var v202 = v182.default.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i, p284) || v182.default.getFirstMatch(v183, p284);
        if (v202) {
          vO76.version = v202;
        }
        return vO76;
      }
    }, {
      test: [/msie|trident/i],
      describe: function (p285) {
        var vO77 = {
          name: "Internet Explorer"
        };
        var v203 = v182.default.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, p285);
        if (v203) {
          vO77.version = v203;
        }
        return vO77;
      }
    }, {
      test: [/\sedg\//i],
      describe: function (p286) {
        var vO78 = {
          name: "Microsoft Edge"
        };
        var v204 = v182.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, p286);
        if (v204) {
          vO78.version = v204;
        }
        return vO78;
      }
    }, {
      test: [/edg([ea]|ios)/i],
      describe: function (p287) {
        var vO79 = {
          name: "Microsoft Edge"
        };
        var v205 = v182.default.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, p287);
        if (v205) {
          vO79.version = v205;
        }
        return vO79;
      }
    }, {
      test: [/vivaldi/i],
      describe: function (p288) {
        var vO80 = {
          name: "Vivaldi"
        };
        var v206 = v182.default.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, p288);
        if (v206) {
          vO80.version = v206;
        }
        return vO80;
      }
    }, {
      test: [/seamonkey/i],
      describe: function (p289) {
        var vO81 = {
          name: "SeaMonkey"
        };
        var v207 = v182.default.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, p289);
        if (v207) {
          vO81.version = v207;
        }
        return vO81;
      }
    }, {
      test: [/sailfish/i],
      describe: function (p290) {
        var vO82 = {
          name: "Sailfish"
        };
        var v208 = v182.default.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, p290);
        if (v208) {
          vO82.version = v208;
        }
        return vO82;
      }
    }, {
      test: [/silk/i],
      describe: function (p291) {
        var vO83 = {
          name: "Amazon Silk"
        };
        var v209 = v182.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, p291);
        if (v209) {
          vO83.version = v209;
        }
        return vO83;
      }
    }, {
      test: [/phantom/i],
      describe: function (p292) {
        var vO84 = {
          name: "PhantomJS"
        };
        var v210 = v182.default.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, p292);
        if (v210) {
          vO84.version = v210;
        }
        return vO84;
      }
    }, {
      test: [/slimerjs/i],
      describe: function (p293) {
        var vO85 = {
          name: "SlimerJS"
        };
        var v211 = v182.default.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, p293);
        if (v211) {
          vO85.version = v211;
        }
        return vO85;
      }
    }, {
      test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
      describe: function (p294) {
        var vO86 = {
          name: "BlackBerry"
        };
        var v212 = v182.default.getFirstMatch(v183, p294) || v182.default.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, p294);
        if (v212) {
          vO86.version = v212;
        }
        return vO86;
      }
    }, {
      test: [/(web|hpw)[o0]s/i],
      describe: function (p295) {
        var vO87 = {
          name: "WebOS Browser"
        };
        var v213 = v182.default.getFirstMatch(v183, p295) || v182.default.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, p295);
        if (v213) {
          vO87.version = v213;
        }
        return vO87;
      }
    }, {
      test: [/bada/i],
      describe: function (p296) {
        var vO88 = {
          name: "Bada"
        };
        var v214 = v182.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, p296);
        if (v214) {
          vO88.version = v214;
        }
        return vO88;
      }
    }, {
      test: [/tizen/i],
      describe: function (p297) {
        var vO89 = {
          name: "Tizen"
        };
        var v215 = v182.default.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, p297) || v182.default.getFirstMatch(v183, p297);
        if (v215) {
          vO89.version = v215;
        }
        return vO89;
      }
    }, {
      test: [/qupzilla/i],
      describe: function (p298) {
        var vO90 = {
          name: "QupZilla"
        };
        var v216 = v182.default.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, p298) || v182.default.getFirstMatch(v183, p298);
        if (v216) {
          vO90.version = v216;
        }
        return vO90;
      }
    }, {
      test: [/firefox|iceweasel|fxios/i],
      describe: function (p299) {
        var vO91 = {
          name: "Firefox"
        };
        var v217 = v182.default.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, p299);
        if (v217) {
          vO91.version = v217;
        }
        return vO91;
      }
    }, {
      test: [/electron/i],
      describe: function (p300) {
        var vO92 = {
          name: "Electron"
        };
        var v218 = v182.default.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, p300);
        if (v218) {
          vO92.version = v218;
        }
        return vO92;
      }
    }, {
      test: [/MiuiBrowser/i],
      describe: function (p301) {
        var vO93 = {
          name: "Miui"
        };
        var v219 = v182.default.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i, p301);
        if (v219) {
          vO93.version = v219;
        }
        return vO93;
      }
    }, {
      test: [/chromium/i],
      describe: function (p302) {
        var vO94 = {
          name: "Chromium"
        };
        var v220 = v182.default.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, p302) || v182.default.getFirstMatch(v183, p302);
        if (v220) {
          vO94.version = v220;
        }
        return vO94;
      }
    }, {
      test: [/chrome|crios|crmo/i],
      describe: function (p303) {
        var vO95 = {
          name: "Chrome"
        };
        var v221 = v182.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, p303);
        if (v221) {
          vO95.version = v221;
        }
        return vO95;
      }
    }, {
      test: [/GSA/i],
      describe: function (p304) {
        var vO96 = {
          name: "Google Search"
        };
        var v222 = v182.default.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, p304);
        if (v222) {
          vO96.version = v222;
        }
        return vO96;
      }
    }, {
      test: function (p305) {
        var v223 = !p305.test(/like android/i);
        var v224 = p305.test(/android/i);
        return v223 && v224;
      },
      describe: function (p306) {
        var vO97 = {
          name: "Android Browser"
        };
        var v225 = v182.default.getFirstMatch(v183, p306);
        if (v225) {
          vO97.version = v225;
        }
        return vO97;
      }
    }, {
      test: [/playstation 4/i],
      describe: function (p307) {
        var vO98 = {
          name: "PlayStation 4"
        };
        var v226 = v182.default.getFirstMatch(v183, p307);
        if (v226) {
          vO98.version = v226;
        }
        return vO98;
      }
    }, {
      test: [/safari|applewebkit/i],
      describe: function (p308) {
        var vO99 = {
          name: "Safari"
        };
        var v227 = v182.default.getFirstMatch(v183, p308);
        if (v227) {
          vO99.version = v227;
        }
        return vO99;
      }
    }, {
      test: [/.*/i],
      describe: function (p309) {
        var v228 = p309.search("\\(") !== -1 ? /^(.*)\/(.*)[ \t]\((.*)/ : /^(.*)\/(.*) /;
        return {
          name: v182.default.getFirstMatch(v228, p309),
          version: v182.default.getSecondMatch(v228, p309)
        };
      }
    }];
    p264.default = vA9;
    p263.exports = p264.default;
  },
  93: function (p310, p311, p312) {
    p311.__esModule = true;
    p311.default = undefined;
    var v229;
    var v230 = (v229 = p312(17)) && v229.__esModule ? v229 : {
      default: v229
    };
    var vP312 = p312(18);
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
    p311.default = vA10;
    p310.exports = p311.default;
  },
  94: function (p326, p327, p328) {
    p327.__esModule = true;
    p327.default = undefined;
    var v248;
    var v249 = (v248 = p328(17)) && v248.__esModule ? v248 : {
      default: v248
    };
    var vP328 = p328(18);
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
    p327.default = vA11;
    p326.exports = p327.default;
  },
  95: function (p342, p343, p344) {
    p343.__esModule = true;
    p343.default = undefined;
    var v254;
    var v255 = (v254 = p344(17)) && v254.__esModule ? v254 : {
      default: v254
    };
    var vP344 = p344(18);
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
    p343.default = vA12;
    p342.exports = p343.default;
  }
});