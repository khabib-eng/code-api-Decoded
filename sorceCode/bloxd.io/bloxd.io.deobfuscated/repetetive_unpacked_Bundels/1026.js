var fC = require("./1030.js").b.ERR_INVALID_OPT_VALUE;
module.exports = {
  getHighWaterMark: function (CC, yC, IC, ky) {
    var gC = function (CC, yC, IC) {
      return null != CC.highWaterMark ? CC.highWaterMark : yC ? CC[IC] : null;
    }(yC, ky, IC);
    if (null != gC) {
      if (!isFinite(gC) || Math.floor(gC) !== gC || gC < 0) {
        throw new fC(ky ? IC : "highWaterMark", gC);
      }
      return Math.floor(gC);
    }
    return CC.objectMode ? 16 : 16384;
  }
};