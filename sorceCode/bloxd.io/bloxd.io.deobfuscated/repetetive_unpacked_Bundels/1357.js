var fC = require("./38.js");
var ky = require("./14.js");
export function e(CC, yC) {
  let IC = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
  return new Promise(function (gC, AC) {
    const my = () => {
      console.log("Executing", CC);
      const IC = document.createElement("script");
      IC.src = CC;
      IC.async = !0;
      IC.type = "text/javascript";
      IC.onload = gC;
      IC.onerror = AC;
      for (const CC in yC) {
        IC.setAttribute(CC, yC[CC]);
      }
      document.head.appendChild(IC);
    };
    !IC || ky.b.get("requiredLibrariesLoaded") ? my() : fC.c.subscribe("requiredLibrariesLoaded", () => {
      my();
    });
  });
}