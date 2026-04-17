var v = require("./159.js").c.ERR_INVALID_OPT_VALUE;
module.exports = {
  getHighWaterMark: function (p, p2, p3, p4) {
    var vF = function (p5, p6, p7) {
      return p5.highWaterMark ?? (p6 ? p5[p7] : null);
    }(p2, p4, p3);
    if (vF != null) {
      if (!isFinite(vF) || Math.floor(vF) !== vF || vF < 0) {
        throw new v(p4 ? p3 : "highWaterMark", vF);
      }
      return Math.floor(vF);
    }
    if (p.objectMode) {
      return 16;
    } else {
      return 16384;
    }
  }
};