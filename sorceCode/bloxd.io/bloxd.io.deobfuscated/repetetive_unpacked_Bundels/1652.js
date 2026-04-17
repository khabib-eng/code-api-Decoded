exports.c = function (CC, yC) {
  if (CC && yC) {
    var IC = Array.isArray(yC) ? yC : yC.split(",");
    var fC = CC.name || "";
    var ky = (CC.type || "").toLowerCase();
    var gC = ky.replace(/\/.*$/, "");
    return IC.some(function (CC) {
      var yC = CC.trim().toLowerCase();
      return "." === yC.charAt(0) ? fC.toLowerCase().endsWith(yC) : yC.endsWith("/*") ? gC === yC.replace(/\/.*$/, "") : ky === yC;
    });
  }
  return !0;
};