var fC = {
  "./bubble.png": 1210,
  "./critical_hit.png": 1214,
  "./drift.png": 1217,
  "./effect_5.png": 1225,
  "./generic_2.png": 1227,
  "./glint.png": 1229,
  "./heart.png": 1233,
  "./scary_face.png": 1235,
  "./soul_0.png": 1243,
  "./square_particle.png": 1249,
  "./z-particle.png": 1253
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
ky.id = 1201;