var fC;
var ky = require("./1030.js").b;
var gC = ky.ERR_MISSING_ARGS;
var AC = ky.ERR_STREAM_DESTROYED;
function my(CC) {
  if (CC) {
    throw CC;
  }
}
function XC(CC) {
  CC();
}
function iy(CC, yC) {
  return CC.pipe(yC);
}
module.exports = function () {
  for (var CC = arguments.length, yC = new Array(CC), ky = 0; ky < CC; ky++) {
    yC[ky] = arguments[ky];
  }
  var LC;
  var YC = function (CC) {
    return CC.length ? "function" !== typeof CC[CC.length - 1] ? my : CC.pop() : my;
  }(yC);
  Array.isArray(yC[0]) && (yC = yC[0]);
  if (yC.length < 2) {
    throw new gC("streams");
  }
  var bC = yC.map(function (CC, ky) {
    var gC = ky < yC.length - 1;
    return function (CC, yC, ky, gC) {
      gC = function (CC) {
        var yC = !1;
        return function () {
          yC || (yC = !0, CC.apply(void 0, arguments));
        };
      }(gC);
      var my = !1;
      CC.on("close", function () {
        my = !0;
      });
      void 0 === fC && (fC = require("./1057.js"));
      fC(CC, {
        readable: yC,
        writable: ky
      }, function (CC) {
        if (CC) {
          return gC(CC);
        }
        my = !0;
        gC();
      });
      var XC = !1;
      return function (yC) {
        if (!my && !XC) {
          XC = !0;
          return function (CC) {
            return CC.setHeader && "function" === typeof CC.abort;
          }(CC) ? CC.abort() : "function" === typeof CC.destroy ? CC.destroy() : void gC(yC || new AC("pipe"));
        }
      };
    }(CC, gC, ky > 0, function (CC) {
      LC || (LC = CC);
      CC && bC.forEach(XC);
      gC || (bC.forEach(XC), YC(LC));
    });
  });
  return yC.reduce(iy);
};