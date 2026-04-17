var v = require("./159.js").c.ERR_STREAM_PREMATURE_CLOSE;
function f() {}
module.exports = function f2(p, p2, p3) {
  if (typeof p2 === "function") {
    return f2(p, null, p2);
  }
  p2 ||= {};
  p3 = function (p4) {
    var v2 = false;
    return function () {
      if (!v2) {
        v2 = true;
        for (var v3 = arguments.length, v4 = new Array(v3), vLN0 = 0; vLN0 < v3; vLN0++) {
          v4[vLN0] = arguments[vLN0];
        }
        p4.apply(this, v4);
      }
    };
  }(p3 || f);
  var v5 = p2.readable || p2.readable !== false && p.readable;
  var v6 = p2.writable || p2.writable !== false && p.writable;
  function f3() {
    if (!p.writable) {
      f4();
    }
  }
  var v7 = p._writableState && p._writableState.finished;
  function f4() {
    v6 = false;
    v7 = true;
    if (!v5) {
      p3.call(p);
    }
  }
  var v8 = p._readableState && p._readableState.endEmitted;
  function f5() {
    v5 = false;
    v8 = true;
    if (!v6) {
      p3.call(p);
    }
  }
  function f6(p5) {
    p3.call(p, p5);
  }
  function f7() {
    var v9;
    if (v5 && !v8) {
      if (!p._readableState || !p._readableState.ended) {
        v9 = new v();
      }
      return p3.call(p, v9);
    } else if (v6 && !v7) {
      if (!p._writableState || !p._writableState.ended) {
        v9 = new v();
      }
      return p3.call(p, v9);
    } else {
      return undefined;
    }
  }
  function f8() {
    p.req.on("finish", f4);
  }
  if (!function (p6) {
    return p6.setHeader && typeof p6.abort === "function";
  }(p)) {
    if (v6 && !p._writableState) {
      p.on("end", f3);
      p.on("close", f3);
    }
  } else {
    p.on("complete", f4);
    p.on("abort", f7);
    if (p.req) {
      f8();
    } else {
      p.on("request", f8);
    }
  }
  p.on("end", f5);
  p.on("finish", f4);
  if (p2.error !== false) {
    p.on("error", f6);
  }
  p.on("close", f7);
  return function () {
    p.removeListener("complete", f4);
    p.removeListener("abort", f7);
    p.removeListener("request", f8);
    if (p.req) {
      p.req.removeListener("finish", f4);
    }
    p.removeListener("end", f3);
    p.removeListener("close", f3);
    p.removeListener("finish", f4);
    p.removeListener("end", f5);
    p.removeListener("error", f6);
    p.removeListener("close", f7);
  };
};