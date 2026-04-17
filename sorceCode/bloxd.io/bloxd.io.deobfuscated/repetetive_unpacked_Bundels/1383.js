var fC = require("./18.js");
var ky = require("./1363.js");
var gC = require("./447.js");
var AC = require("./9.js");
var my = require("./442.js");
var XC = require("./1385.js");
var iy = require("./14.js");
export function o() {
  return parseFloat(getComputedStyle(document.documentElement).fontSize);
}
let YC = {};
export function g(CC) {
  const yC = document.cookie;
  const IC = {};
  yC.split(/\s*;\s*/).forEach(CC => {
    const yC = CC.split(/\s*=\s*/);
    IC[yC[0]] = yC.splice(1).join("=");
  });
  IC.bloxd && (YC = JSON.parse(IC.bloxd));
  for (const fC in YC) {
    0 === Object.keys(YC[fC]).length && delete YC[fC];
  }
  GC();
  return YC[CC] ? (0, fC.d)((0, fC.d)({}, YC[CC]), {}, {
    origin: "classic"
  }) : {
    origin: "classic"
  };
}
export function z(CC, yC, IC) {
  YC[CC] || (YC[CC] = {});
  YC[CC][yC] = IC;
  GC();
}
function GC() {
  const CC = new Date();
  CC.setFullYear(CC.getFullYear() + 1);
  document.cookie = "bloxd=".concat(JSON.stringify(YC), ";expires=").concat(CC.toUTCString(), ";path=/");
}
export function s() {
  gC.e.setSearchParam(my.z, my.D);
  gC.e.setSearchParam(my.J, my.N);
  (0, AC.c)("fweokfewkm");
}
export function v() {
  let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
  s();
  CC ? window.location.replace(CC) : window.location.reload();
}
export function w() {
  let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
  (0, my.k)() ? XC.b.showAlertPopup({
    title: "homePage:reloadPopupTitle",
    subtitle: "homePage:reloadPopupSubtitle",
    confirmText: "homePage:reloadPopupConfirmText",
    confirmTooltip: "homePage:reloadPopupConfirmTooltip"
  }).getResult().then(() => ky.i.discordActivity()).then(CC => {
    CC.exit("Restart Required");
  }) : v(CC);
}
export function k(CC) {
  return "recent".concat(CC, "Lobbies");
}
export function e(CC) {
  return (null !== CC && void 0 !== CC ? CC : []).filter(CC => !CC.dateAdded || Date.now() > CC.dateAdded.getTime() && Date.now() < CC.dateAdded.getTime() + 6048e5);
}
export const D = () => {
  if ("bloxd" === my.D) {
    return !0;
  }
  if ("crazygames" !== my.D) {
    return !1;
  }
  if (!iy.b.get("initSdkSelectorFinished")) {
    return !1;
  }
  try {
    var CC;
    var yC;
    var IC;
    var fC;
    if (["google_play_store", "apple_store"].includes(null === (CC = window.CrazyGames) || void 0 === CC || null === (yC = CC.SDK) || void 0 === yC || null === (IC = yC.user) || void 0 === IC || null === (fC = IC.systemInfo) || void 0 === fC ? void 0 : fC.applicationType)) {
      return !1;
    }
  } catch (ky) {
    return !1;
  }
  return !0;
};