var v;
var v2 = require("./159.js").c;
var v3 = v2.ERR_MISSING_ARGS;
var v4 = v2.ERR_STREAM_DESTROYED;
function f(p) {
  if (p) {
    throw p;
  }
}
function f2(p2) {
  p2();
}
function f3(p3, p4) {
  return p3.pipe(p4);
}
module.exports = function () {
  for (var v5 = arguments.length, v6 = new Array(v5), vLN0 = 0; vLN0 < v5; vLN0++) {
    v6[vLN0] = arguments[vLN0];
  }
  var v7;
  var vF = function (p5) {
    if (p5.length) {
      if (typeof p5[p5.length - 1] !== "function") {
        return f;
      } else {
        return p5.pop();
      }
    } else {
      return f;
    }
  }(v6);
  if (Array.isArray(v6[0])) {
    v6 = v6[0];
  }
  if (v6.length < 2) {
    throw new v3("streams");
  }
  var v8 = v6.map(function (p6, p7) {
    var v9 = p7 < v6.length - 1;
    return function (p8, p9, p10, p11) {
      p11 = function (p12) {
        var v10 = false;
        return function () {
          if (!v10) {
            v10 = true;
            p12.apply(undefined, arguments);
          }
        };
      }(p11);
      var v11 = false;
      p8.on("close", function () {
        v11 = true;
      });
      if (v === undefined) {
        v = require("./200.js");
      }
      v(p8, {
        readable: p9,
        writable: p10
      }, function (p13) {
        if (p13) {
          return p11(p13);
        }
        v11 = true;
        p11();
      });
      var v12 = false;
      return function (p14) {
        if (!v11 && !v12) {
          v12 = true;
          if (function (p15) {
            return p15.setHeader && typeof p15.abort === "function";
          }(p8)) {
            return p8.abort();
          } else if (typeof p8.destroy === "function") {
            return p8.destroy();
          } else {
            p11(p14 || new v4("pipe"));
            return;
          }
        }
      };
    }(p6, v9, p7 > 0, function (p16) {
      v7 ||= p16;
      if (p16) {
        v8.forEach(f2);
      }
      if (!v9) {
        v8.forEach(f2);
        vF(v7);
      }
    });
  });
  return v6.reduce(f3);
};