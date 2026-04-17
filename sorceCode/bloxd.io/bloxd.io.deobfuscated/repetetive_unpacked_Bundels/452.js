var fC = {
  "./localConfigValues": 460,
  "./localConfigValues.ts": 460
};
function ky(CC) {
  var yC = gC(CC);
  return require(yC);
}
function gC(CC) {
  if (!require.o(fC, CC)) {
    var yC = new Error("Cannot find module '" + CC + "'");
    yC.code = "MODULE_NOT_FOUND";
    throw yC;
  }
  return fC[CC];
}
ky.keys = function () {
  return Object.keys(fC);
};
ky.resolve = gC;
module.exports = ky;
ky.id = 452;