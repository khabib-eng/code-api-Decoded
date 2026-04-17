var fC;
var ky = require("./442.js");
const gC = parseInt(null !== (fC = "0") && void 0 !== fC ? fC : "0", 10) || 0;
const AC = 2567;
const my = 4500;
function XC(CC) {
  const yC = {};
  for (const IC of Object.keys(CC)) {
    yC[IC] = CC[IC] + gC;
  }
  return yC;
}
let iy;
iy = (0, ky.x)() ? XC({
  1: 6585,
  2: 6586,
  3: 6587
}) : XC({
  1: 6585,
  2: 6586,
  3: 6587,
  4: 6588,
  5: 6589,
  6: 6590,
  7: 6591,
  8: 6592,
  9: 6593,
  10: 6594,
  11: 6595,
  12: 6596,
  13: 6597,
  14: 6598,
  15: 6599,
  16: 6600,
  17: 6601,
  18: 6602,
  19: 6603,
  20: 6604,
  21: 6605,
  22: 6606,
  23: 6607,
  24: 6608,
  25: 6609,
  26: 6610,
  27: 6611,
  28: 6612,
  29: 6613
});
export const b = {
  gameServerPort: AC + gC,
  indexServerPort: my + gC,
  staticServerPort: my + gC,
  matchmakingServerPort: 6522 + gC,
  socialServerPorts: iy,
  localDynamoDbPort: 8e3 + gC
};