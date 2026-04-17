exports.__esModule = true;
exports.default = undefined;
var v181;
var v182 = (v181 = require("./17.js")) && v181.__esModule ? v181 : {
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
exports.default = vA9;
module.exports = exports.default;