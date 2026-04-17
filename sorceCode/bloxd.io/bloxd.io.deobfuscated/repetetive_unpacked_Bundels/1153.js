var fC = require("./442.js");
const {
  aggregator: ky,
  aggregatorSettings: gC
} = function () {
  let CC = "bloxd.io";
  (0, fC.x)() || (0, fC.k)() && ((0, fC.w)() ? (console.log("Discord: in discord staging, loading staging"), CC = "staging") : (console.log("Discord: in discord prod, loading bloxd.io"), CC = "bloxd.io"));
  const yC = {
    crazyGamesNinetyNineNightsBundle: require("./1156.js").c,
    coolmathgames: require("./1160.js").d,
    staging: require("./1169.js").e,
    "bloxdk12.com": require("./1173.js").d,
    "bloxd.io": require("./1180.js").d
  };
  for (const IC in yC) {
    if (window.location.href.includes(IC) || fC.D === IC || fC.N === IC) {
      CC = IC;
      break;
    }
  }
  console.log("Aggregator is ".concat(CC));
  return {
    aggregator: CC,
    aggregatorSettings: yC[CC]
  };
}();
export function c() {
  return gC;
}
export const g = "bloxdk12.com" === ky;