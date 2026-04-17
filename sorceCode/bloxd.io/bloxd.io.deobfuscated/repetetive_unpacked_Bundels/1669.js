var fC = require("./82.js");
var ky = require("./471.js");
function gC(CC) {
  const yC = function (CC) {
    const yC = "ab_p_".concat(CC);
    let IC = NaN;
    try {
      IC = parseFloat(fC.j.getItem(yC));
    } catch (ky) {
      console.error('Failed to parse user percentile for "'.concat(CC, '", defaulting to a random percentile:'), ky);
    }
    (isNaN(IC) || IC < 0 || IC >= 1) && (IC = Math.random());
    fC.j.setItem(yC, IC);
    return IC;
  }(CC);
  const IC = ky.e[CC].bucketWeights;
  let gC = 0;
  for (const fC in IC) {
    gC += IC[fC];
  }
  let AC = 0;
  for (const fC in IC) {
    AC += IC[fC];
    if (yC <= AC / gC) {
      return fC;
    }
  }
  throw new Error("Failed to determine A/B testing bucket: test key=".concat(CC, " user percentile=").concat(yC, " bucket weights=").concat(JSON.stringify(IC)));
}
export const b = function () {
  const CC = {};
  for (const yC in ky.e) {
    CC[yC] = gC(yC);
  }
  return CC;
}();