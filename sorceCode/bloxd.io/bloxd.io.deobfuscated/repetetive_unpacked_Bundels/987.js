module.exports = ky;
var fC = require("./983.js").EventEmitter;
function ky() {
  fC.call(this);
}
require("./966.js")(ky, fC);
ky.Readable = require("./995.js");
ky.Writable = require("./1038.js");
ky.Duplex = require("./1032.js");
ky.Transform = require("./1071.js");
ky.PassThrough = require("./1075.js");
ky.finished = require("./1057.js");
ky.pipeline = require("./1081.js");
ky.Stream = ky;
ky.prototype.pipe = function (CC, yC) {
  var IC = this;
  function ky(yC) {
    CC.writable && !1 === CC.write(yC) && IC.pause && IC.pause();
  }
  function gC() {
    IC.readable && IC.resume && IC.resume();
  }
  IC.on("data", ky);
  CC.on("drain", gC);
  CC._isStdio || yC && !1 === yC.end || (IC.on("end", my), IC.on("close", XC));
  var AC = !1;
  function my() {
    AC || (AC = !0, CC.end());
  }
  function XC() {
    AC || (AC = !0, "function" === typeof CC.destroy && CC.destroy());
  }
  function iy(CC) {
    LC();
    if (0 === fC.listenerCount(this, "error")) {
      throw CC;
    }
  }
  function LC() {
    IC.removeListener("data", ky);
    CC.removeListener("drain", gC);
    IC.removeListener("end", my);
    IC.removeListener("close", XC);
    IC.removeListener("error", iy);
    CC.removeListener("error", iy);
    IC.removeListener("end", LC);
    IC.removeListener("close", LC);
    CC.removeListener("close", LC);
  }
  IC.on("error", iy);
  CC.on("error", iy);
  IC.on("end", LC);
  IC.on("close", LC);
  CC.on("close", LC);
  CC.emit("pipe", IC);
  return CC;
};