module.exports = function (CC, yC, IC, fC, ky, gC, AC, my) {
  if (!CC) {
    var XC;
    if (void 0 === yC) {
      XC = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    } else {
      var iy = [IC, fC, ky, gC, AC, my];
      var LC = 0;
      (XC = new Error(yC.replace(/%s/g, function () {
        return iy[LC++];
      }))).name = "Invariant Violation";
    }
    XC.framesToPop = 1;
    throw XC;
  }
};