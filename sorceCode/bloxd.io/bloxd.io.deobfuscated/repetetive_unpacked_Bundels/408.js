var fC = require("./416.js");
var ky = fC;
var gC = "undefined" !== typeof window ? window : {
  screen: {},
  navigator: {}
};
var AC = (gC.matchMedia || function () {
  return {
    matches: !1
  };
}).bind(gC);
var my = {
  get passive() {
    return !0;
  }
};
function XC() {}
gC.addEventListener && gC.addEventListener("p", XC, my);
gC.removeEventListener && gC.removeEventListener("p", XC, !1);
var iy = "ontouchstart" in gC;
var LC = iy || "TouchEvent" in gC && AC("(any-pointer: coarse)").matches;
var YC = (gC.navigator.maxTouchPoints || 0) > 0 || LC;
var bC = gC.navigator.userAgent || "";
var rC = AC("(pointer: coarse)").matches && /iPad|Macintosh/.test(bC) && Math.min(gC.screen.width || 0, gC.screen.height || 0) >= 768;
var GC = (AC("(pointer: coarse)").matches || !AC("(pointer: fine)").matches && iy) && !/Windows.*Firefox/.test(bC);
var eC = AC("(any-pointer: fine)").matches || AC("(any-hover: hover)").matches || rC || !iy;
var OC = !YC || !eC && GC ? YC ? "touchOnly" : "mouseOnly" : "hybrid";
var SC = require("./422.js");
var TC = require("./447.js");
var NC = require("./442.js");
var sC = require("./462.js");
export function A() {
  return OC;
}
NC.N && !NC.F[NC.N].enabled && console.error("Selected subsiteUsed ".concat(NC.N, " but it is not enabled"));
let qC = null;
function KC() {
  null === qC && (qC = ky.getParser(window.navigator.userAgent));
  return qC;
}
export function k(CC) {
  return ["Browser: ".concat(l()), "Version: ".concat(p()), "Platform: ".concat(navigator.platform), "Platform Type: ".concat(I()), "Input Type: ".concat(A())].join(CC);
}
export function l() {
  return KC().getBrowserName();
}
export function p() {
  return KC().getBrowserVersion();
}
export function I() {
  return KC().getPlatformType() || ("touchOnly" === A() ? "tablet" : "desktop");
}
export function E() {
  const CC = KC().getOSName(!0).replaceAll(" ", "_");
  return sC.f.includes(CC) ? CC : "other";
}
export function K() {
  const CC = TC.e.getSearchParam("trafficSource");
  return sC.i.includes(CC) ? CC : "other";
}
function EC() {
  const CC = I();
  return !L() && ("mobile" === CC || "tablet" === CC || "touchOnly" === A() || TC.e.hasSearchParam("mobile"));
}
export function P() {
  return L() && (Z() || TC.e.hasSearchParam("mobile"));
}
export function W() {
  return EC() || P();
}
export function S() {
  return "mobileAndroid" === NC.D || "mobileIos" === NC.D;
}
export function Z() {
  return EC() || "mouseOnly" !== A() || navigator.maxTouchPoints > 0;
}
export function L() {
  return /iPad|iPhone|iPod/.test(navigator.platform) || "MacIntel" === navigator.platform;
}
export const g = {
  useSocialFeatures: "coolmathgames" !== NC.D,
  useDiscord: "coolmathgames" !== NC.D,
  usePartnerLinks: "bloxd" === NC.D && "bloxd" === NC.N && !TC.e.hasSearchParam("portal"),
  useForceRotateForceFullscreenOverlay: "crazygames" !== NC.D && "minijuegos" !== NC.N && "coolmathgames" !== NC.D && "msnPlay" !== NC.D && "desktopMicrosoftStore" !== NC.D && !(0, NC.k)(),
  useLogin: "coolmathgames" !== NC.D && (0, NC.o)(),
  useRecaptcha: !SC.e.recaptchaDisabled && !(0, NC.k)(),
  useTurnstile: !SC.e.turnstileDisabled && !(0, NC.k)(),
  canChangeName: "coolmathgames" !== NC.D,
  canUseInviteLinks: ("bloxd" === NC.D || "crazygames" === NC.D) && !(0, NC.k)(),
  canSeePlayerWrittenText: "coolmathgames" !== NC.D,
  canSeeRealPlayerNames: "coolmathgames" !== NC.D,
  canUseCustomLobbies: "coolmathgames" !== NC.D,
  canUseCustomGames: "coolmathgames" !== NC.D && "crazyGamesNinetyNineNightsBundle" !== NC.N,
  sanitizeShopInput: "coolmathgames" === NC.D,
  settings: {
    canChangeTexturePack: "coolmathgames" !== NC.D
  },
  useHalloweenTheme: Date.now() > new Date("2024-10-31T00:00:00Z").getTime() && Date.now() < new Date("2024-10-31T23:59:00Z").getTime(),
  useChristmasTheme: new Date("2024-11-25T00:00:00Z").getTime() < Date.now() && Date.now() < new Date("2024-12-31T00:00:00Z").getTime()
};
export let d;
let JC = null;
export function t() {
  return "intel" !== y();
}
export function v() {
  return "arm" === y() && "mobile" !== I() ? 2 : 1;
}
export function y() {
  if ("undefined" === typeof document) {
    return "other";
  }
  if (null !== JC) {
    return JC;
  }
  const CC = ["webgl2", "experimental-webgl2", "webgl", "experimental-webgl"];
  const yC = document.createElement("canvas");
  try {
    var IC;
    var fC;
    let ky = null;
    for (const IC of CC) {
      ky = yC.getContext(IC);
      if (ky) {
        break;
      }
    }
    if (!ky) {
      JC = "other";
      return JC;
    }
    const gC = ky.getExtension("WEBGL_debug_renderer_info");
    let AC = null !== (IC = ky.getParameter(null !== (fC = null === gC || void 0 === gC ? void 0 : gC.UNMASKED_VENDOR_WEBGL) && void 0 !== fC ? fC : ky.VENDOR)) && void 0 !== IC ? IC : "other";
    const my = [...AC.matchAll(/\(([^)]+)\)/g)];
    if (my.length > 0) {
      AC = my[my.length - 1][1].trim();
    }
    AC = AC.toLowerCase();
    const XC = ["inc.", "open source technology center", "electronics co., ltd.", "/x.org", "technologies inc.", "corporation"];
    for (const CC of XC) {
      if (AC.endsWith(CC)) {
        AC = AC.slice(0, -CC.length).trimEnd();
        break;
      }
    }
    "imagination technologies" === AC && (AC = "powervr");
    "nouveau" === AC && (AC = "nvidia");
    "ati" !== AC && "ati technologies" !== AC || (AC = "amd");
    "freedreno" === AC && (AC = "qualcomm");
    "0x344c5250" === AC && (AC = "apple");
    "google" !== AC && "null" !== AC && "microsoft" !== AC && "x.org" !== AC && "mesa" !== AC && "broadcom" !== AC && "huawei" !== AC && "vmware," !== AC && "0x00001d17" !== AC && "0x00001ed5" !== AC && "unknown" !== AC && "" !== AC || (AC = "other");
    JC = AC;
    return JC;
  } catch (ky) {
    console.error(ky.stack);
    JC = "other";
    return JC;
  } finally {
    yC.remove();
  }
}
{
  function DC(CC, yC) {
    const IC = ZC();
    DC = function (yC, fC) {
      let ky = IC[yC -= 162];
      if (void 0 === DC.twKFml) {
        DC.kGdYVv = function (CC) {
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
        DC.twKFml = !0;
      }
      const gC = yC + IC[0];
      const AC = CC[gC];
      AC ? ky = AC : (ky = DC.kGdYVv(ky), CC[gC] = ky);
      return ky;
    };
    return DC(CC, yC);
  }
  function ZC() {
    const CC = ["ody0u2TSD2PV", "ndeXmZeZwwPcALHO", "ntiYmZa2rNvIvhrN", "ndu0mtK2ne92qKnczG", "mJGZntiWnw54EfjUCW", "ntDuBKz3s20", "mZC5oda4nenxzKPIza", "mtuYExPbsurH", "mJeWnZHpvK5LBLu"];
    return (ZC = function () {
      return CC;
    })();
  }
  !function (CC) {
    const yC = DC;
    const IC = CC();
    for (;;) {
      try {
        if (827390 === -parseInt(yC(164)) / 1 * (-parseInt(yC(168)) / 2) + parseInt(yC(165)) / 3 + parseInt(yC(162)) / 4 + -parseInt(yC(163)) / 5 + parseInt(yC(170)) / 6 + -parseInt(yC(169)) / 7 * (parseInt(yC(166)) / 8) + -parseInt(yC(167)) / 9) {
          break;
        }
        IC.push(IC.shift());
      } catch (fC) {
        IC.push(IC.shift());
      }
    }
  }(ZC);
  const lC = CC => {
    var yC;
    CC = null !== (yC = CC) && void 0 !== yC ? yC : "";
    let IC = "";
    for (let ky = 0; ky < 10; ky++) {
      var fC;
      IC += (null !== (fC = CC[ky]) && void 0 !== fC ? fC : ky.toString()).charCodeAt(0).toString(32);
    }
    return IC;
  };
  const oC = require("./478.js").shouldUseUkPrivacyPolicy;
  d = lC(NC.D) + "_" + lC(NC.N) + "_" + (oC() ? "eu-gdpr" : "non-eu") + "_secure=" + window.isSecureContext;
}