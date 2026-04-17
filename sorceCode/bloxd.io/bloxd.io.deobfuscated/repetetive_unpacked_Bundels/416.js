module.exports = function (CC) {
  var yC = {};
  function IC(fC) {
    if (yC[fC]) {
      return yC[fC].exports;
    }
    var ky = yC[fC] = {
      i: fC,
      l: !1,
      exports: {}
    };
    CC[fC].call(ky.exports, ky, ky.exports, IC);
    ky.l = !0;
    return ky.exports;
  }
  IC.m = CC;
  IC.c = yC;
  IC.d = function (CC, yC, fC) {
    IC.o(CC, yC) || Object.defineProperty(CC, yC, {
      enumerable: !0,
      get: fC
    });
  };
  IC.r = function (CC) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(CC, Symbol.toStringTag, {
      value: "Module"
    });
    Object.defineProperty(CC, "__esModule", {
      value: !0
    });
  };
  IC.t = function (CC, yC) {
    1 & yC && (CC = IC(CC));
    if (8 & yC) {
      return CC;
    }
    if (4 & yC && "object" == typeof CC && CC && CC.__esModule) {
      return CC;
    }
    var fC = Object.create(null);
    IC.r(fC);
    Object.defineProperty(fC, "default", {
      enumerable: !0,
      value: CC
    });
    if (2 & yC && "string" != typeof CC) {
      for (var ky in CC) {
        IC.d(fC, ky, function (yC) {
          return CC[yC];
        }.bind(null, ky));
      }
    }
    return fC;
  };
  IC.n = function (CC) {
    var yC = CC && CC.__esModule ? function () {
      return CC.default;
    } : function () {
      return CC;
    };
    IC.d(yC, "a", yC);
    return yC;
  };
  IC.o = function (CC, yC) {
    return Object.prototype.hasOwnProperty.call(CC, yC);
  };
  IC.p = "";
  return IC(IC.s = 90);
}({
  17: function (CC, yC, IC) {
    yC.__esModule = !0;
    yC.default = void 0;
    var fC = IC(18);
    var ky = function () {
      function CC() {}
      CC.getFirstMatch = function (CC, yC) {
        var IC = yC.match(CC);
        return IC && IC.length > 0 && IC[1] || "";
      };
      CC.getSecondMatch = function (CC, yC) {
        var IC = yC.match(CC);
        return IC && IC.length > 1 && IC[2] || "";
      };
      CC.matchAndReturnConst = function (CC, yC, IC) {
        if (CC.test(yC)) {
          return IC;
        }
      };
      CC.getWindowsVersionName = function (CC) {
        switch (CC) {
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
      CC.getMacOSVersionName = function (CC) {
        var yC = CC.split(".").splice(0, 2).map(function (CC) {
          return parseInt(CC, 10) || 0;
        });
        yC.push(0);
        if (10 === yC[0]) {
          switch (yC[1]) {
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
      CC.getAndroidVersionName = function (CC) {
        var yC = CC.split(".").splice(0, 2).map(function (CC) {
          return parseInt(CC, 10) || 0;
        });
        yC.push(0);
        if (!(1 === yC[0] && yC[1] < 5)) {
          return 1 === yC[0] && yC[1] < 6 ? "Cupcake" : 1 === yC[0] && yC[1] >= 6 ? "Donut" : 2 === yC[0] && yC[1] < 2 ? "Eclair" : 2 === yC[0] && 2 === yC[1] ? "Froyo" : 2 === yC[0] && yC[1] > 2 ? "Gingerbread" : 3 === yC[0] ? "Honeycomb" : 4 === yC[0] && yC[1] < 1 ? "Ice Cream Sandwich" : 4 === yC[0] && yC[1] < 4 ? "Jelly Bean" : 4 === yC[0] && yC[1] >= 4 ? "KitKat" : 5 === yC[0] ? "Lollipop" : 6 === yC[0] ? "Marshmallow" : 7 === yC[0] ? "Nougat" : 8 === yC[0] ? "Oreo" : 9 === yC[0] ? "Pie" : void 0;
        }
      };
      CC.getVersionPrecision = function (CC) {
        return CC.split(".").length;
      };
      CC.compareVersions = function (yC, IC, fC) {
        void 0 === fC && (fC = !1);
        var ky = CC.getVersionPrecision(yC);
        var gC = CC.getVersionPrecision(IC);
        var AC = Math.max(ky, gC);
        var my = 0;
        var XC = CC.map([yC, IC], function (yC) {
          var IC = AC - CC.getVersionPrecision(yC);
          var fC = yC + new Array(IC + 1).join(".0");
          return CC.map(fC.split("."), function (CC) {
            return new Array(20 - CC.length).join("0") + CC;
          }).reverse();
        });
        fC && (my = AC - Math.min(ky, gC));
        AC -= 1;
        for (; AC >= my;) {
          if (XC[0][AC] > XC[1][AC]) {
            return 1;
          }
          if (XC[0][AC] === XC[1][AC]) {
            if (AC === my) {
              return 0;
            }
            AC -= 1;
          } else {
            if (XC[0][AC] < XC[1][AC]) {
              return -1;
            }
          }
        }
      };
      CC.map = function (CC, yC) {
        var IC;
        var fC = [];
        if (Array.prototype.map) {
          return Array.prototype.map.call(CC, yC);
        }
        for (IC = 0; IC < CC.length; IC += 1) {
          fC.push(yC(CC[IC]));
        }
        return fC;
      };
      CC.find = function (CC, yC) {
        var IC;
        var fC;
        if (Array.prototype.find) {
          return Array.prototype.find.call(CC, yC);
        }
        IC = 0;
        fC = CC.length;
        for (; IC < fC; IC += 1) {
          var ky = CC[IC];
          if (yC(ky, IC)) {
            return ky;
          }
        }
      };
      CC.assign = function (CC) {
        for (var yC, IC, fC = CC, ky = arguments.length, gC = new Array(ky > 1 ? ky - 1 : 0), AC = 1; AC < ky; AC++) {
          gC[AC - 1] = arguments[AC];
        }
        if (Object.assign) {
          return Object.assign.apply(Object, [CC].concat(gC));
        }
        function my() {
          var CC = gC[yC];
          "object" == typeof CC && null !== CC && Object.keys(CC).forEach(function (yC) {
            fC[yC] = CC[yC];
          });
        }
        yC = 0;
        IC = gC.length;
        for (; yC < IC; yC += 1) {
          my();
        }
        return CC;
      };
      CC.getBrowserAlias = function (CC) {
        return fC.BROWSER_ALIASES_MAP[CC];
      };
      CC.getBrowserTypeByAlias = function (CC) {
        return fC.BROWSER_MAP[CC] || "";
      };
      return CC;
    }();
    yC.default = ky;
    CC.exports = yC.default;
  },
  18: function (CC, yC, IC) {
    yC.__esModule = !0;
    yC.ENGINE_MAP = yC.OS_MAP = yC.PLATFORMS_MAP = yC.BROWSER_MAP = yC.BROWSER_ALIASES_MAP = void 0;
    yC.BROWSER_ALIASES_MAP = {
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
    yC.BROWSER_MAP = {
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
    yC.PLATFORMS_MAP = {
      tablet: "tablet",
      mobile: "mobile",
      desktop: "desktop",
      tv: "tv"
    };
    yC.OS_MAP = {
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
    yC.ENGINE_MAP = {
      EdgeHTML: "EdgeHTML",
      Blink: "Blink",
      Trident: "Trident",
      Presto: "Presto",
      Gecko: "Gecko",
      WebKit: "WebKit"
    };
  },
  90: function (CC, yC, IC) {
    yC.__esModule = !0;
    yC.default = void 0;
    var fC;
    var ky = (fC = IC(91)) && fC.__esModule ? fC : {
      default: fC
    };
    var gC = IC(18);
    function AC(CC, yC) {
      for (var IC = 0; IC < yC.length; IC++) {
        var fC = yC[IC];
        fC.enumerable = fC.enumerable || !1;
        fC.configurable = !0;
        "value" in fC && (fC.writable = !0);
        Object.defineProperty(CC, fC.key, fC);
      }
    }
    var my = function () {
      function CC() {}
      var yC;
      var IC;
      var fC;
      CC.getParser = function (CC, yC) {
        void 0 === yC && (yC = !1);
        if ("string" != typeof CC) {
          throw new Error("UserAgent should be a string");
        }
        return new ky.default(CC, yC);
      };
      CC.parse = function (CC) {
        return new ky.default(CC).getResult();
      };
      yC = CC;
      fC = [{
        key: "BROWSER_MAP",
        get: function () {
          return gC.BROWSER_MAP;
        }
      }, {
        key: "ENGINE_MAP",
        get: function () {
          return gC.ENGINE_MAP;
        }
      }, {
        key: "OS_MAP",
        get: function () {
          return gC.OS_MAP;
        }
      }, {
        key: "PLATFORMS_MAP",
        get: function () {
          return gC.PLATFORMS_MAP;
        }
      }];
      (IC = null) && AC(yC.prototype, IC);
      fC && AC(yC, fC);
      return CC;
    }();
    yC.default = my;
    CC.exports = yC.default;
  },
  91: function (CC, yC, IC) {
    yC.__esModule = !0;
    yC.default = void 0;
    var fC = XC(IC(92));
    var ky = XC(IC(93));
    var gC = XC(IC(94));
    var AC = XC(IC(95));
    var my = XC(IC(17));
    function XC(CC) {
      return CC && CC.__esModule ? CC : {
        default: CC
      };
    }
    var iy = function () {
      function CC(CC, yC) {
        void 0 === yC && (yC = !1);
        if (null == CC || "" === CC) {
          throw new Error("UserAgent parameter can't be empty");
        }
        this._ua = CC;
        this.parsedResult = {};
        !0 !== yC && this.parse();
      }
      var yC = CC.prototype;
      yC.getUA = function () {
        return this._ua;
      };
      yC.test = function (CC) {
        return CC.test(this._ua);
      };
      yC.parseBrowser = function () {
        var CC = this;
        this.parsedResult.browser = {};
        var yC = my.default.find(fC.default, function (yC) {
          if ("function" == typeof yC.test) {
            return yC.test(CC);
          }
          if (yC.test instanceof Array) {
            return yC.test.some(function (yC) {
              return CC.test(yC);
            });
          }
          throw new Error("Browser's test function is not valid");
        });
        yC && (this.parsedResult.browser = yC.describe(this.getUA()));
        return this.parsedResult.browser;
      };
      yC.getBrowser = function () {
        return this.parsedResult.browser ? this.parsedResult.browser : this.parseBrowser();
      };
      yC.getBrowserName = function (CC) {
        return CC ? String(this.getBrowser().name).toLowerCase() || "" : this.getBrowser().name || "";
      };
      yC.getBrowserVersion = function () {
        return this.getBrowser().version;
      };
      yC.getOS = function () {
        return this.parsedResult.os ? this.parsedResult.os : this.parseOS();
      };
      yC.parseOS = function () {
        var CC = this;
        this.parsedResult.os = {};
        var yC = my.default.find(ky.default, function (yC) {
          if ("function" == typeof yC.test) {
            return yC.test(CC);
          }
          if (yC.test instanceof Array) {
            return yC.test.some(function (yC) {
              return CC.test(yC);
            });
          }
          throw new Error("Browser's test function is not valid");
        });
        yC && (this.parsedResult.os = yC.describe(this.getUA()));
        return this.parsedResult.os;
      };
      yC.getOSName = function (CC) {
        var yC = this.getOS().name;
        return CC ? String(yC).toLowerCase() || "" : yC || "";
      };
      yC.getOSVersion = function () {
        return this.getOS().version;
      };
      yC.getPlatform = function () {
        return this.parsedResult.platform ? this.parsedResult.platform : this.parsePlatform();
      };
      yC.getPlatformType = function (CC) {
        void 0 === CC && (CC = !1);
        var yC = this.getPlatform().type;
        return CC ? String(yC).toLowerCase() || "" : yC || "";
      };
      yC.parsePlatform = function () {
        var CC = this;
        this.parsedResult.platform = {};
        var yC = my.default.find(gC.default, function (yC) {
          if ("function" == typeof yC.test) {
            return yC.test(CC);
          }
          if (yC.test instanceof Array) {
            return yC.test.some(function (yC) {
              return CC.test(yC);
            });
          }
          throw new Error("Browser's test function is not valid");
        });
        yC && (this.parsedResult.platform = yC.describe(this.getUA()));
        return this.parsedResult.platform;
      };
      yC.getEngine = function () {
        return this.parsedResult.Jy ? this.parsedResult.Jy : this.parseEngine();
      };
      yC.getEngineName = function (CC) {
        return CC ? String(this.getEngine().name).toLowerCase() || "" : this.getEngine().name || "";
      };
      yC.parseEngine = function () {
        var CC = this;
        this.parsedResult.Jy = {};
        var yC = my.default.find(AC.default, function (yC) {
          if ("function" == typeof yC.test) {
            return yC.test(CC);
          }
          if (yC.test instanceof Array) {
            return yC.test.some(function (yC) {
              return CC.test(yC);
            });
          }
          throw new Error("Browser's test function is not valid");
        });
        yC && (this.parsedResult.Jy = yC.describe(this.getUA()));
        return this.parsedResult.Jy;
      };
      yC.parse = function () {
        this.parseBrowser();
        this.parseOS();
        this.parsePlatform();
        this.parseEngine();
        return this;
      };
      yC.getResult = function () {
        return my.default.assign({}, this.parsedResult);
      };
      yC.satisfies = function (CC) {
        var yC = this;
        var IC = {};
        var fC = 0;
        var ky = {};
        var gC = 0;
        Object.keys(CC).forEach(function (yC) {
          var AC = CC[yC];
          "string" == typeof AC ? (ky[yC] = AC, gC += 1) : "object" == typeof AC && (IC[yC] = AC, fC += 1);
        });
        if (fC > 0) {
          var AC = Object.keys(IC);
          var XC = my.default.find(AC, function (CC) {
            return yC.isOS(CC);
          });
          if (XC) {
            var iy = this.satisfies(IC[XC]);
            if (void 0 !== iy) {
              return iy;
            }
          }
          var LC = my.default.find(AC, function (CC) {
            return yC.isPlatform(CC);
          });
          if (LC) {
            var YC = this.satisfies(IC[LC]);
            if (void 0 !== YC) {
              return YC;
            }
          }
        }
        if (gC > 0) {
          var bC = Object.keys(ky);
          var rC = my.default.find(bC, function (CC) {
            return yC.isBrowser(CC, !0);
          });
          if (void 0 !== rC) {
            return this.compareVersion(ky[rC]);
          }
        }
      };
      yC.isBrowser = function (CC, yC) {
        void 0 === yC && (yC = !1);
        var IC = this.getBrowserName().toLowerCase();
        var fC = CC.toLowerCase();
        var ky = my.default.getBrowserTypeByAlias(fC);
        yC && ky && (fC = ky.toLowerCase());
        return fC === IC;
      };
      yC.compareVersion = function (CC) {
        var yC = [0];
        var IC = CC;
        var fC = !1;
        var ky = this.getBrowserVersion();
        if ("string" == typeof ky) {
          ">" === CC[0] || "<" === CC[0] ? (IC = CC.substr(1), "=" === CC[1] ? (fC = !0, IC = CC.substr(2)) : yC = [], ">" === CC[0] ? yC.push(1) : yC.push(-1)) : "=" === CC[0] ? IC = CC.substr(1) : "~" === CC[0] && (fC = !0, IC = CC.substr(1));
          return yC.indexOf(my.default.compareVersions(ky, IC, fC)) > -1;
        }
      };
      yC.isOS = function (CC) {
        return this.getOSName(!0) === String(CC).toLowerCase();
      };
      yC.isPlatform = function (CC) {
        return this.getPlatformType(!0) === String(CC).toLowerCase();
      };
      yC.isEngine = function (CC) {
        return this.getEngineName(!0) === String(CC).toLowerCase();
      };
      yC.is = function (CC, yC) {
        void 0 === yC && (yC = !1);
        return this.isBrowser(CC, yC) || this.isOS(CC) || this.isPlatform(CC);
      };
      yC.some = function (CC) {
        var yC = this;
        void 0 === CC && (CC = []);
        return CC.some(function (CC) {
          return yC.is(CC);
        });
      };
      return CC;
    }();
    yC.default = iy;
    CC.exports = yC.default;
  },
  92: function (CC, yC, IC) {
    yC.__esModule = !0;
    yC.default = void 0;
    var fC;
    var ky = (fC = IC(17)) && fC.__esModule ? fC : {
      default: fC
    };
    var gC = /version\/(\d+(\.?_?\d+)+)/i;
    var AC = [{
      test: [/googlebot/i],
      describe: function (CC) {
        var yC = {
          name: "Googlebot"
        };
        var IC = ky.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, CC) || ky.default.getFirstMatch(gC, CC);
        IC && (yC.version = IC);
        return yC;
      }
    }, {
      test: [/opera/i],
      describe: function (CC) {
        var yC = {
          name: "Opera"
        };
        var IC = ky.default.getFirstMatch(gC, CC) || ky.default.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, CC);
        IC && (yC.version = IC);
        return yC;
      }
    }, {
      test: [/opr\/|opios/i],
      describe: function (CC) {
        var yC = {
          name: "Opera"
        };
        var IC = ky.default.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, CC) || ky.default.getFirstMatch(gC, CC);
        IC && (yC.version = IC);
        return yC;
      }
    }, {
      test: [/SamsungBrowser/i],
      describe: function (CC) {
        var yC = {
          name: "Samsung Internet for Android"
        };
        var IC = ky.default.getFirstMatch(gC, CC) || ky.default.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, CC);
        IC && (yC.version = IC);
        return yC;
      }
    }, {
      test: [/Whale/i],
      describe: function (CC) {
        var yC = {
          name: "NAVER Whale Browser"
        };
        var IC = ky.default.getFirstMatch(gC, CC) || ky.default.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, CC);
        IC && (yC.version = IC);
        return yC;
      }
    }, {
      test: [/MZBrowser/i],
      describe: function (CC) {
        var yC = {
          name: "MZ Browser"
        };
        var IC = ky.default.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, CC) || ky.default.getFirstMatch(gC, CC);
        IC && (yC.version = IC);
        return yC;
      }
    }, {
      test: [/focus/i],
      describe: function (CC) {
        var yC = {
          name: "Focus"
        };
        var IC = ky.default.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, CC) || ky.default.getFirstMatch(gC, CC);
        IC && (yC.version = IC);
        return yC;
      }
    }, {
      test: [/swing/i],
      describe: function (CC) {
        var yC = {
          name: "Swing"
        };
        var IC = ky.default.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, CC) || ky.default.getFirstMatch(gC, CC);
        IC && (yC.version = IC);
        return yC;
      }
    }, {
      test: [/coast/i],
      describe: function (CC) {
        var yC = {
          name: "Opera Coast"
        };
        var IC = ky.default.getFirstMatch(gC, CC) || ky.default.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, CC);
        IC && (yC.version = IC);
        return yC;
      }
    }, {
      test: [/opt\/\d+(?:.?_?\d+)+/i],
      describe: function (CC) {
        var yC = {
          name: "Opera Touch"
        };
        var IC = ky.default.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i, CC) || ky.default.getFirstMatch(gC, CC);
        IC && (yC.version = IC);
        return yC;
      }
    }, {
      test: [/yabrowser/i],
      describe: function (CC) {
        var yC = {
          name: "Yandex Browser"
        };
        var IC = ky.default.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, CC) || ky.default.getFirstMatch(gC, CC);
        IC && (yC.version = IC);
        return yC;
      }
    }, {
      test: [/ucbrowser/i],
      describe: function (CC) {
        var yC = {
          name: "UC Browser"
        };
        var IC = ky.default.getFirstMatch(gC, CC) || ky.default.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, CC);
        IC && (yC.version = IC);
        return yC;
      }
    }, {
      test: [/Maxthon|mxios/i],
      describe: function (CC) {
        var yC = {
          name: "Maxthon"
        };
        var IC = ky.default.getFirstMatch(gC, CC) || ky.default.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, CC);
        IC && (yC.version = IC);
        return yC;
      }
    }, {
      test: [/epiphany/i],
      describe: function (CC) {
        var yC = {
          name: "Epiphany"
        };
        var IC = ky.default.getFirstMatch(gC, CC) || ky.default.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, CC);
        IC && (yC.version = IC);
        return yC;
      }
    }, {
      test: [/puffin/i],
      describe: function (CC) {
        var yC = {
          name: "Puffin"
        };
        var IC = ky.default.getFirstMatch(gC, CC) || ky.default.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, CC);
        IC && (yC.version = IC);
        return yC;
      }
    }, {
      test: [/sleipnir/i],
      describe: function (CC) {
        var yC = {
          name: "Sleipnir"
        };
        var IC = ky.default.getFirstMatch(gC, CC) || ky.default.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, CC);
        IC && (yC.version = IC);
        return yC;
      }
    }, {
      test: [/k-meleon/i],
      describe: function (CC) {
        var yC = {
          name: "K-Meleon"
        };
        var IC = ky.default.getFirstMatch(gC, CC) || ky.default.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, CC);
        IC && (yC.version = IC);
        return yC;
      }
    }, {
      test: [/micromessenger/i],
      describe: function (CC) {
        var yC = {
          name: "WeChat"
        };
        var IC = ky.default.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, CC) || ky.default.getFirstMatch(gC, CC);
        IC && (yC.version = IC);
        return yC;
      }
    }, {
      test: [/qqbrowser/i],
      describe: function (CC) {
        var yC = {
          name: /qqbrowserlite/i.test(CC) ? "QQ Browser Lite" : "QQ Browser"
        };
        var IC = ky.default.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i, CC) || ky.default.getFirstMatch(gC, CC);
        IC && (yC.version = IC);
        return yC;
      }
    }, {
      test: [/msie|trident/i],
      describe: function (CC) {
        var yC = {
          name: "Internet Explorer"
        };
        var IC = ky.default.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, CC);
        IC && (yC.version = IC);
        return yC;
      }
    }, {
      test: [/\sedg\//i],
      describe: function (CC) {
        var yC = {
          name: "Microsoft Edge"
        };
        var IC = ky.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, CC);
        IC && (yC.version = IC);
        return yC;
      }
    }, {
      test: [/edg([ea]|ios)/i],
      describe: function (CC) {
        var yC = {
          name: "Microsoft Edge"
        };
        var IC = ky.default.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, CC);
        IC && (yC.version = IC);
        return yC;
      }
    }, {
      test: [/vivaldi/i],
      describe: function (CC) {
        var yC = {
          name: "Vivaldi"
        };
        var IC = ky.default.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, CC);
        IC && (yC.version = IC);
        return yC;
      }
    }, {
      test: [/seamonkey/i],
      describe: function (CC) {
        var yC = {
          name: "SeaMonkey"
        };
        var IC = ky.default.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, CC);
        IC && (yC.version = IC);
        return yC;
      }
    }, {
      test: [/sailfish/i],
      describe: function (CC) {
        var yC = {
          name: "Sailfish"
        };
        var IC = ky.default.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, CC);
        IC && (yC.version = IC);
        return yC;
      }
    }, {
      test: [/silk/i],
      describe: function (CC) {
        var yC = {
          name: "Amazon Silk"
        };
        var IC = ky.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, CC);
        IC && (yC.version = IC);
        return yC;
      }
    }, {
      test: [/phantom/i],
      describe: function (CC) {
        var yC = {
          name: "PhantomJS"
        };
        var IC = ky.default.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, CC);
        IC && (yC.version = IC);
        return yC;
      }
    }, {
      test: [/slimerjs/i],
      describe: function (CC) {
        var yC = {
          name: "SlimerJS"
        };
        var IC = ky.default.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, CC);
        IC && (yC.version = IC);
        return yC;
      }
    }, {
      test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
      describe: function (CC) {
        var yC = {
          name: "BlackBerry"
        };
        var IC = ky.default.getFirstMatch(gC, CC) || ky.default.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, CC);
        IC && (yC.version = IC);
        return yC;
      }
    }, {
      test: [/(web|hpw)[o0]s/i],
      describe: function (CC) {
        var yC = {
          name: "WebOS Browser"
        };
        var IC = ky.default.getFirstMatch(gC, CC) || ky.default.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, CC);
        IC && (yC.version = IC);
        return yC;
      }
    }, {
      test: [/bada/i],
      describe: function (CC) {
        var yC = {
          name: "Bada"
        };
        var IC = ky.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, CC);
        IC && (yC.version = IC);
        return yC;
      }
    }, {
      test: [/tizen/i],
      describe: function (CC) {
        var yC = {
          name: "Tizen"
        };
        var IC = ky.default.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, CC) || ky.default.getFirstMatch(gC, CC);
        IC && (yC.version = IC);
        return yC;
      }
    }, {
      test: [/qupzilla/i],
      describe: function (CC) {
        var yC = {
          name: "QupZilla"
        };
        var IC = ky.default.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, CC) || ky.default.getFirstMatch(gC, CC);
        IC && (yC.version = IC);
        return yC;
      }
    }, {
      test: [/firefox|iceweasel|fxios/i],
      describe: function (CC) {
        var yC = {
          name: "Firefox"
        };
        var IC = ky.default.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, CC);
        IC && (yC.version = IC);
        return yC;
      }
    }, {
      test: [/electron/i],
      describe: function (CC) {
        var yC = {
          name: "Electron"
        };
        var IC = ky.default.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, CC);
        IC && (yC.version = IC);
        return yC;
      }
    }, {
      test: [/MiuiBrowser/i],
      describe: function (CC) {
        var yC = {
          name: "Miui"
        };
        var IC = ky.default.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i, CC);
        IC && (yC.version = IC);
        return yC;
      }
    }, {
      test: [/chromium/i],
      describe: function (CC) {
        var yC = {
          name: "Chromium"
        };
        var IC = ky.default.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, CC) || ky.default.getFirstMatch(gC, CC);
        IC && (yC.version = IC);
        return yC;
      }
    }, {
      test: [/chrome|crios|crmo/i],
      describe: function (CC) {
        var yC = {
          name: "Chrome"
        };
        var IC = ky.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, CC);
        IC && (yC.version = IC);
        return yC;
      }
    }, {
      test: [/GSA/i],
      describe: function (CC) {
        var yC = {
          name: "Google Search"
        };
        var IC = ky.default.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, CC);
        IC && (yC.version = IC);
        return yC;
      }
    }, {
      test: function (CC) {
        var yC = !CC.test(/like android/i);
        var IC = CC.test(/android/i);
        return yC && IC;
      },
      describe: function (CC) {
        var yC = {
          name: "Android Browser"
        };
        var IC = ky.default.getFirstMatch(gC, CC);
        IC && (yC.version = IC);
        return yC;
      }
    }, {
      test: [/playstation 4/i],
      describe: function (CC) {
        var yC = {
          name: "PlayStation 4"
        };
        var IC = ky.default.getFirstMatch(gC, CC);
        IC && (yC.version = IC);
        return yC;
      }
    }, {
      test: [/safari|applewebkit/i],
      describe: function (CC) {
        var yC = {
          name: "Safari"
        };
        var IC = ky.default.getFirstMatch(gC, CC);
        IC && (yC.version = IC);
        return yC;
      }
    }, {
      test: [/.*/i],
      describe: function (CC) {
        var yC = -1 !== CC.search("\\(") ? /^(.*)\/(.*)[ \t]\((.*)/ : /^(.*)\/(.*) /;
        return {
          name: ky.default.getFirstMatch(yC, CC),
          version: ky.default.getSecondMatch(yC, CC)
        };
      }
    }];
    yC.default = AC;
    CC.exports = yC.default;
  },
  93: function (CC, yC, IC) {
    yC.__esModule = !0;
    yC.default = void 0;
    var fC;
    var ky = (fC = IC(17)) && fC.__esModule ? fC : {
      default: fC
    };
    var gC = IC(18);
    var AC = [{
      test: [/Roku\/DVP/],
      describe: function (CC) {
        var yC = ky.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, CC);
        return {
          name: gC.OS_MAP.Roku,
          version: yC
        };
      }
    }, {
      test: [/windows phone/i],
      describe: function (CC) {
        var yC = ky.default.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, CC);
        return {
          name: gC.OS_MAP.WindowsPhone,
          version: yC
        };
      }
    }, {
      test: [/windows /i],
      describe: function (CC) {
        var yC = ky.default.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, CC);
        var IC = ky.default.getWindowsVersionName(yC);
        return {
          name: gC.OS_MAP.Windows,
          version: yC,
          versionName: IC
        };
      }
    }, {
      test: [/Macintosh(.*?) FxiOS(.*?)\//],
      describe: function (CC) {
        var yC = {
          name: gC.OS_MAP.iOS
        };
        var IC = ky.default.getSecondMatch(/(Version\/)(\d[\d.]+)/, CC);
        IC && (yC.version = IC);
        return yC;
      }
    }, {
      test: [/macintosh/i],
      describe: function (CC) {
        var yC = ky.default.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, CC).replace(/[_\s]/g, ".");
        var IC = ky.default.getMacOSVersionName(yC);
        var fC = {
          name: gC.OS_MAP.MacOS,
          version: yC
        };
        IC && (fC.versionName = IC);
        return fC;
      }
    }, {
      test: [/(ipod|iphone|ipad)/i],
      describe: function (CC) {
        var yC = ky.default.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, CC).replace(/[_\s]/g, ".");
        return {
          name: gC.OS_MAP.iOS,
          version: yC
        };
      }
    }, {
      test: function (CC) {
        var yC = !CC.test(/like android/i);
        var IC = CC.test(/android/i);
        return yC && IC;
      },
      describe: function (CC) {
        var yC = ky.default.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, CC);
        var IC = ky.default.getAndroidVersionName(yC);
        var fC = {
          name: gC.OS_MAP.Android,
          version: yC
        };
        IC && (fC.versionName = IC);
        return fC;
      }
    }, {
      test: [/(web|hpw)[o0]s/i],
      describe: function (CC) {
        var yC = ky.default.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, CC);
        var IC = {
          name: gC.OS_MAP.WebOS
        };
        yC && yC.length && (IC.version = yC);
        return IC;
      }
    }, {
      test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
      describe: function (CC) {
        var yC = ky.default.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, CC) || ky.default.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, CC) || ky.default.getFirstMatch(/\bbb(\d+)/i, CC);
        return {
          name: gC.OS_MAP.BlackBerry,
          version: yC
        };
      }
    }, {
      test: [/bada/i],
      describe: function (CC) {
        var yC = ky.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, CC);
        return {
          name: gC.OS_MAP.Bada,
          version: yC
        };
      }
    }, {
      test: [/tizen/i],
      describe: function (CC) {
        var yC = ky.default.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, CC);
        return {
          name: gC.OS_MAP.Tizen,
          version: yC
        };
      }
    }, {
      test: [/linux/i],
      describe: function () {
        return {
          name: gC.OS_MAP.Linux
        };
      }
    }, {
      test: [/CrOS/],
      describe: function () {
        return {
          name: gC.OS_MAP.ChromeOS
        };
      }
    }, {
      test: [/PlayStation 4/],
      describe: function (CC) {
        var yC = ky.default.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, CC);
        return {
          name: gC.OS_MAP.PlayStation4,
          version: yC
        };
      }
    }];
    yC.default = AC;
    CC.exports = yC.default;
  },
  94: function (CC, yC, IC) {
    yC.__esModule = !0;
    yC.default = void 0;
    var fC;
    var ky = (fC = IC(17)) && fC.__esModule ? fC : {
      default: fC
    };
    var gC = IC(18);
    var AC = [{
      test: [/googlebot/i],
      describe: function () {
        return {
          type: "bot",
          vendor: "Google"
        };
      }
    }, {
      test: [/huawei/i],
      describe: function (CC) {
        var yC = ky.default.getFirstMatch(/(can-l01)/i, CC) && "Nova";
        var IC = {
          type: gC.PLATFORMS_MAP.mobile,
          vendor: "Huawei"
        };
        yC && (IC.model = yC);
        return IC;
      }
    }, {
      test: [/nexus\s*(?:7|8|9|10).*/i],
      describe: function () {
        return {
          type: gC.PLATFORMS_MAP.tablet,
          vendor: "Nexus"
        };
      }
    }, {
      test: [/ipad/i],
      describe: function () {
        return {
          type: gC.PLATFORMS_MAP.tablet,
          vendor: "Apple",
          model: "iPad"
        };
      }
    }, {
      test: [/Macintosh(.*?) FxiOS(.*?)\//],
      describe: function () {
        return {
          type: gC.PLATFORMS_MAP.tablet,
          vendor: "Apple",
          model: "iPad"
        };
      }
    }, {
      test: [/kftt build/i],
      describe: function () {
        return {
          type: gC.PLATFORMS_MAP.tablet,
          vendor: "Amazon",
          model: "Kindle Fire HD 7"
        };
      }
    }, {
      test: [/silk/i],
      describe: function () {
        return {
          type: gC.PLATFORMS_MAP.tablet,
          vendor: "Amazon"
        };
      }
    }, {
      test: [/tablet(?! pc)/i],
      describe: function () {
        return {
          type: gC.PLATFORMS_MAP.tablet
        };
      }
    }, {
      test: function (CC) {
        var yC = CC.test(/ipod|iphone/i);
        var IC = CC.test(/like (ipod|iphone)/i);
        return yC && !IC;
      },
      describe: function (CC) {
        var yC = ky.default.getFirstMatch(/(ipod|iphone)/i, CC);
        return {
          type: gC.PLATFORMS_MAP.mobile,
          vendor: "Apple",
          model: yC
        };
      }
    }, {
      test: [/nexus\s*[0-6].*/i, /galaxy nexus/i],
      describe: function () {
        return {
          type: gC.PLATFORMS_MAP.mobile,
          vendor: "Nexus"
        };
      }
    }, {
      test: [/[^-]mobi/i],
      describe: function () {
        return {
          type: gC.PLATFORMS_MAP.mobile
        };
      }
    }, {
      test: function (CC) {
        return "blackberry" === CC.getBrowserName(!0);
      },
      describe: function () {
        return {
          type: gC.PLATFORMS_MAP.mobile,
          vendor: "BlackBerry"
        };
      }
    }, {
      test: function (CC) {
        return "bada" === CC.getBrowserName(!0);
      },
      describe: function () {
        return {
          type: gC.PLATFORMS_MAP.mobile
        };
      }
    }, {
      test: function (CC) {
        return "windows phone" === CC.getBrowserName();
      },
      describe: function () {
        return {
          type: gC.PLATFORMS_MAP.mobile,
          vendor: "Microsoft"
        };
      }
    }, {
      test: function (CC) {
        var yC = Number(String(CC.getOSVersion()).split(".")[0]);
        return "android" === CC.getOSName(!0) && yC >= 3;
      },
      describe: function () {
        return {
          type: gC.PLATFORMS_MAP.tablet
        };
      }
    }, {
      test: function (CC) {
        return "android" === CC.getOSName(!0);
      },
      describe: function () {
        return {
          type: gC.PLATFORMS_MAP.mobile
        };
      }
    }, {
      test: function (CC) {
        return "macos" === CC.getOSName(!0);
      },
      describe: function () {
        return {
          type: gC.PLATFORMS_MAP.desktop,
          vendor: "Apple"
        };
      }
    }, {
      test: function (CC) {
        return "windows" === CC.getOSName(!0);
      },
      describe: function () {
        return {
          type: gC.PLATFORMS_MAP.desktop
        };
      }
    }, {
      test: function (CC) {
        return "linux" === CC.getOSName(!0);
      },
      describe: function () {
        return {
          type: gC.PLATFORMS_MAP.desktop
        };
      }
    }, {
      test: function (CC) {
        return "playstation 4" === CC.getOSName(!0);
      },
      describe: function () {
        return {
          type: gC.PLATFORMS_MAP.tv
        };
      }
    }, {
      test: function (CC) {
        return "roku" === CC.getOSName(!0);
      },
      describe: function () {
        return {
          type: gC.PLATFORMS_MAP.tv
        };
      }
    }];
    yC.default = AC;
    CC.exports = yC.default;
  },
  95: function (CC, yC, IC) {
    yC.__esModule = !0;
    yC.default = void 0;
    var fC;
    var ky = (fC = IC(17)) && fC.__esModule ? fC : {
      default: fC
    };
    var gC = IC(18);
    var AC = [{
      test: function (CC) {
        return "microsoft edge" === CC.getBrowserName(!0);
      },
      describe: function (CC) {
        if (/\sedg\//i.test(CC)) {
          return {
            name: gC.ENGINE_MAP.Blink
          };
        }
        var yC = ky.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, CC);
        return {
          name: gC.ENGINE_MAP.EdgeHTML,
          version: yC
        };
      }
    }, {
      test: [/trident/i],
      describe: function (CC) {
        var yC = {
          name: gC.ENGINE_MAP.Trident
        };
        var IC = ky.default.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, CC);
        IC && (yC.version = IC);
        return yC;
      }
    }, {
      test: function (CC) {
        return CC.test(/presto/i);
      },
      describe: function (CC) {
        var yC = {
          name: gC.ENGINE_MAP.Presto
        };
        var IC = ky.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, CC);
        IC && (yC.version = IC);
        return yC;
      }
    }, {
      test: function (CC) {
        var yC = CC.test(/gecko/i);
        var IC = CC.test(/like gecko/i);
        return yC && !IC;
      },
      describe: function (CC) {
        var yC = {
          name: gC.ENGINE_MAP.Gecko
        };
        var IC = ky.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, CC);
        IC && (yC.version = IC);
        return yC;
      }
    }, {
      test: [/(apple)?webkit\/537\.36/i],
      describe: function () {
        return {
          name: gC.ENGINE_MAP.Blink
        };
      }
    }, {
      test: [/(apple)?webkit/i],
      describe: function (CC) {
        var yC = {
          name: gC.ENGINE_MAP.WebKit
        };
        var IC = ky.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, CC);
        IC && (yC.version = IC);
        return yC;
      }
    }];
    yC.default = AC;
    CC.exports = yC.default;
  }
});