var fC = require("./18.js");
var ky = require("./471.js");
const gC = ["Ry", "Qy", "My", "CI", "yI", "II", "fI", "gI", "AI"];
const AC = {
  Ry: ["float", "null"],
  Qy: ["float", "null"],
  My: ["boolean", "null"],
  CI: ["int", "null"],
  yI: ["int", "null"],
  II: ["int", "null"],
  fI: ["int", "null"],
  gI: ["int", "null"],
  AI: ["int", "null"]
};
const my = ["mf", "XI", "YI", "bI", "rI", "eI", ...Object.keys(ky.e), "OI"];
export const f = ["windows", "macos", "linux", "android", "ios", "chrome_os", "other", "_unloaded"];
export const i = ["portalCrossPromotion", "other", "_unloaded"];
const LC = (0, fC.d)((0, fC.d)({
  mf: {
    avroType: "string",
    values: ["mobile", "tablet", "desktop", "_unloaded"]
  },
  XI: {
    avroType: "string",
    values: ["intel", "nvidia", "qualcomm", "amd", "arm", "apple", "samsung", "powervr", "other", "_unloaded"]
  },
  YI: {
    avroType: "string",
    values: ["1", "2", "_unloaded"]
  },
  bI: {
    avroType: "string",
    values: ["touchOnly", "mouseOnly", "hybrid", "_unloaded"]
  },
  rI: {
    avroType: "string",
    values: f
  },
  eI: {
    avroType: "string",
    values: i
  }
}, Object.fromEntries(Object.keys(ky.e).map(CC => [CC, {
  avroType: "string",
  values: [...Object.keys(ky.e[CC].bucketWeights), "_unloaded"]
}]))), {}, {
  OI: {
    avroType: "string",
    values: ["true", "false", "_unloaded"]
  }
});
export function c() {
  const CC = new Set();
  const yC = [];
  for (const IC of gC) {
    if (CC.has(IC)) {
      throw new Error("Duplicate frontend metric ".concat(IC));
    }
    CC.add(IC);
    const fC = AC[IC];
    yC.push({
      name: IC,
      type: fC
    });
  }
  for (const IC of my) {
    if (CC.has(IC)) {
      throw new Error("Duplicate frontend metric label ".concat(IC));
    }
    CC.add(IC);
    yC.push({
      name: IC,
      type: [LC[IC].avroType]
    });
  }
  return yC;
}