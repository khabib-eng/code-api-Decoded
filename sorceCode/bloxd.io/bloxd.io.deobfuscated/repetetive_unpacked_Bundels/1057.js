var fC = require("./1030.js").b.ERR_STREAM_PREMATURE_CLOSE;
function ky() {}
module.exports = function CC(yC, IC, gC) {
  if ("function" === typeof IC) {
    return CC(yC, null, IC);
  }
  IC || (IC = {});
  gC = function (CC) {
    var yC = !1;
    return function () {
      if (!yC) {
        yC = !0;
        for (var IC = arguments.length, fC = new Array(IC), ky = 0; ky < IC; ky++) {
          fC[ky] = arguments[ky];
        }
        CC.apply(this, fC);
      }
    };
  }(gC || ky);
  var AC = IC.readable || !1 !== IC.readable && yC.readable;
  var my = IC.writable || !1 !== IC.writable && yC.writable;
  function XC() {
    yC.writable || LC();
  }
  var iy = yC._writableState && yC._writableState.finished;
  function LC() {
    my = !1;
    iy = !0;
    AC || gC.call(yC);
  }
  var YC = yC._readableState && yC._readableState.endEmitted;
  function bC() {
    AC = !1;
    YC = !0;
    my || gC.call(yC);
  }
  function rC(CC) {
    gC.call(yC, CC);
  }
  function GC() {
    var CC;
    return AC && !YC ? (yC._readableState && yC._readableState.ended || (CC = new fC()), gC.call(yC, CC)) : my && !iy ? (yC._writableState && yC._writableState.ended || (CC = new fC()), gC.call(yC, CC)) : void 0;
  }
  function eC() {
    yC.req.on("finish", LC);
  }
  !function (CC) {
    return CC.setHeader && "function" === typeof CC.abort;
  }(yC) ? my && !yC._writableState && (yC.on("end", XC), yC.on("close", XC)) : (yC.on("complete", LC), yC.on("abort", GC), yC.req ? eC() : yC.on("request", eC));
  yC.on("end", bC);
  yC.on("finish", LC);
  !1 !== IC.error && yC.on("error", rC);
  yC.on("close", GC);
  return function () {
    yC.removeListener("complete", LC);
    yC.removeListener("abort", GC);
    yC.removeListener("request", eC);
    yC.req && yC.req.removeListener("finish", LC);
    yC.removeListener("end", XC);
    yC.removeListener("close", XC);
    yC.removeListener("finish", LC);
    yC.removeListener("end", bC);
    yC.removeListener("error", rC);
    yC.removeListener("close", GC);
  };
};