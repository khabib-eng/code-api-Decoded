exports.__esModule = true;
exports.default = undefined;
var vF6 = f12(require("./92.js"));
var vF62 = f12(require("./93.js"));
var vF63 = f12(require("./94.js"));
var vF64 = f12(require("./95.js"));
var vF65 = f12(require("./17.js"));
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
exports.default = vF7;
module.exports = exports.default;