import * as fC from "./487.js";
var ky = fC;
import * as gC from "./493.js";
var AC = gC;
import * as my from "./502.js";
var XC = my;
ky.extend(AC);
ky.extend(XC);
const iy = {
  AT: ["Europe/Vienna"],
  BE: ["Europe/Brussels"],
  BG: ["Europe/Sofia"],
  HR: ["Europe/Zagreb"],
  CY: ["Asia/Famagusta", "Asia/Nicosia"],
  CZ: ["Europe/Prague"],
  DK: ["Europe/Copenhagen"],
  EE: ["Europe/Tallinn"],
  FI: ["Europe/Helsinki"],
  FR: ["Europe/Paris"],
  DE: ["Europe/Berlin", "Europe/Busingen"],
  GR: ["Europe/Athens"],
  HU: ["Europe/Budapest"],
  IE: ["Europe/Dublin"],
  IT: ["Europe/Rome"],
  LV: ["Europe/Riga"],
  LT: ["Europe/Vilnius"],
  LU: ["Europe/Luxembourg"],
  MT: ["Europe/Malta"],
  NL: ["Europe/Amsterdam"],
  PL: ["Europe/Warsaw"],
  PT: ["Atlantic/Azores", "Atlantic/Madeira", "Europe/Lisbon"],
  RO: ["Europe/Bucharest"],
  SK: ["Europe/Bratislava"],
  SI: ["Europe/Ljubljana"],
  ES: ["Africa/Ceuta", "Atlantic/Canary", "Europe/Madrid"],
  SE: ["Europe/Stockholm"],
  IS: ["Atlantic/Reykjavik"],
  NO: ["Europe/Oslo"],
  LI: ["Europe/Zurich"],
  CH: ["Europe/Zurich"],
  GB: ["Europe/London"],
  IM: ["Europe/Isle_of_Man"],
  GI: ["Europe/Gibraltar"],
  MC: ["Europe/Monaco"],
  SM: ["Europe/San_Marino"],
  VA: ["Europe/Vatican"],
  GP: ["America/Guadeloupe"],
  MQ: ["America/Martinique"],
  RE: ["Indian/Reunion"],
  GF: ["America/Cayenne"],
  YT: ["Indian/Mayotte"],
  WF: ["Pacific/Wallis"],
  RS: ["Europe/Belgrade"],
  ME: ["Europe/Podgorica"],
  BA: ["Europe/Sarajevo"],
  MK: ["Europe/Skopje"],
  AL: ["Europe/Tirane"],
  TR: ["Europe/Istanbul"],
  CN: ["Asia/Shanghai", "Asia/Urumqi", "Asia/Chongqing", "Asia/Chungking", "Asia/Harbin", "Asia/Kashgar"],
  VN: ["Asia/Ho_Chi_Minh", "Asia/Saigon"],
  IN: ["Asia/Kolkata", "Asia/Calcutta"]
};
const LC = ["GB", "IM", "GI"];
export const shouldUseUkPrivacyPolicy = () => LC.flatMap(CC => {
  var yC;
  return [...(null !== (yC = iy[CC]) && void 0 !== yC ? yC : [])];
}).includes(ky.tz.guess());
export function guessCurrentCountryCode() {
  const CC = ky.tz.guess();
  for (const [yC, IC] of Object.entries(iy)) {
    if (IC.includes(CC)) {
      return yC;
    }
  }
  return null;
}