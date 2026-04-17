var fC = require("./44.js");
var ky = fC;
var gC = require("./49.js");
var AC = require("./82.js");
var my = require("./66.js");
var XC = require("./1143.js");
export let c = function (CC) {
  CC.ARABIC = "ar";
  CC.GERMAN = "de";
  CC.ENGLISH = "en";
  CC.SPANISH = "es";
  CC.FRENCH = "fr";
  CC.HINDI = "hi";
  CC.INDONESIAN = "id";
  CC.ITALIAN = "it";
  CC.JAPANESE = "ja";
  CC.DUTCH = "nl";
  CC.PORTUGUESE = "pt";
  CC.PORTUGUESE_BRAZILIAN = "pt-BR";
  CC.RUSSIAN = "ru";
  CC.TAMIL = "ta";
  CC.TURKISH = "tr";
  CC.VIETNAMESE = "vi";
  CC.CHINESE_SIMPLIFIED = "zh-CN";
  CC.CHINESE_TRADITIONAL = "zh-TW";
  CC.POLISH = "pl";
  CC.UKRAINIAN = "uk";
  return CC;
}({});
const LC = new ky();
const YC = "i18nextLng";
let bC = null;
export class f {
  constructor() {
    var CC;
    this.currentLanguageCode = void 0;
    const yC = [];
    const IC = AC.j.getItem(YC);
    (0, my.w)(IC) || yC.push(IC);
    if ("undefined" !== typeof navigator) {
      navigator.language && yC.push(navigator.language);
      const CC = navigator.userLanguage;
      CC && yC.push(CC);
      if (navigator.languages) {
        for (let IC = 0; IC < navigator.languages.length; IC++) {
          yC.push(navigator.languages[IC]);
        }
      }
    }
    const fC = null !== (CC = this.getBestLanguageCodeFromCandidates(yC)) && void 0 !== CC ? CC : c.ENGLISH;
    this.setCurrentLanguageCode(fC);
  }
  static get() {
    null === bC && (bC = new f());
    return bC;
  }
  setCurrentLanguage(CC) {
    const yC = this.getBestLanguageCodeFromCandidates([CC]);
    null !== yC ? this.setCurrentLanguageCode(yC) : console.error('Failed set language: could not infer language from "'.concat(CC, '"'));
  }
  setCurrentLanguageCode(CC) {
    CC !== this.currentLanguageCode && (this.currentLanguageCode = CC, AC.j.setItem(YC, CC), LC.emit("languageCodeUpdated", CC));
  }
  getCurrentLanguageCode() {
    return this.currentLanguageCode;
  }
  getBestLanguageCodeFromCandidates(CC) {
    const yC = Object.values(c);
    for (const IC of CC) {
      for (const fC of yC) {
        if (fC === IC) {
          return fC;
        }
      }
      const CC = IC.split("-")[0];
      for (const IC of yC) {
        if (IC === CC) {
          return IC;
        }
      }
      for (const IC of yC) {
        if (IC.split("-")[0] === CC) {
          return IC;
        }
      }
    }
    return null;
  }
}
export function h() {
  const [CC, yC] = (0, gC.ey)(f.get().getCurrentLanguageCode());
  (0, gC.Oy)(() => {
    LC.on("languageCodeUpdated", yC);
    return () => {
      LC.off("languageCodeUpdated", yC);
    };
  }, []);
  return CC;
}
{
  function eC(CC, yC) {
    const IC = OC();
    eC = function (yC, fC) {
      let ky = IC[yC -= 426];
      if (void 0 === eC.nfMcjt) {
        eC.BhQEIq = function (CC) {
          let yC = "";
          let IC = "";
          for (let fC, ky, gC = 0, AC = 0; ky = CC.charAt(AC++); ~ky && (fC = gC % 4 ? 64 * fC + ky : ky, gC++ % 4) ? yC += String.fromCharCode(255 & fC >> (-2 * gC & 6)) : 0) {
            ky = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(ky);
          }
          for (let fC = 0, ky = yC.length; fC < ky; fC++) {
            IC += "%" + ("00" + yC.charCodeAt(fC).toString(16)).slice(-2);
          }
          return decodeURIComponent(IC);
        };
        CC = arguments;
        eC.nfMcjt = !0;
      }
      const gC = yC + IC[0];
      const AC = CC[gC];
      AC ? ky = AC : (ky = eC.BhQEIq(ky), CC[gC] = ky);
      return ky;
    };
    return eC(CC, yC);
  }
  function OC() {
    const CC = ["ntK4mJKYnuLPDeHjEq", "mty2nduZnLbnA093uG", "ndm5nJy4owHqsNruCG", "ndm5otC1mdbuBhL3yxG", "ngz6ENPRCq", "otKYotiZmK5zwuPsDG", "mNnKBfHJrW", "ntGWm2XbtgXTsa", "ndu0mdC0me9suMTVDq", "mZm3nMX0DNzXzG"];
    return (OC = function () {
      return CC;
    })();
  }
  (function (CC) {
    const yC = eC;
    const IC = CC();
    for (;;) {
      try {
        if (902030 === parseInt(yC(426)) / 1 * (-parseInt(yC(431)) / 2) + -parseInt(yC(433)) / 3 * (parseInt(yC(429)) / 4) + parseInt(yC(435)) / 5 + -parseInt(yC(430)) / 6 + parseInt(yC(432)) / 7 * (-parseInt(yC(434)) / 8) + parseInt(yC(427)) / 9 + parseInt(yC(428)) / 10) {
          break;
        }
        IC.push(IC.shift());
      } catch (fC) {
        IC.push(IC.shift());
      }
    }
  })(OC);
  (() => {
    const CC = Date.now() < new Date("2025-07-11T11:00:00Z").getTime();
    const yC = window.open;
    window.open = function () {
      (0, AC.m)() && (XC.singletons.HA = "v3 " + (CC ? new Error().stack.replace(/\n/g, "  -  ") : ""));
      return yC(...arguments);
    };
  })();
}