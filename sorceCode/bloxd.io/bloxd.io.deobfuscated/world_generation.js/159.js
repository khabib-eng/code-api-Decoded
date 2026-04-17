var vO = {};
function f(p, p2, p3) {
  p3 ||= Error;
  var vF = function (p4) {
    var v;
    var v2;
    function f2(p5, p6, p7) {
      return p4.call(this, function (p8, p9, p10) {
        if (typeof p2 === "string") {
          return p2;
        } else {
          return p2(p8, p9, p10);
        }
      }(p5, p6, p7)) || this;
    }
    v2 = p4;
    (v = f2).prototype = Object.create(v2.prototype);
    v.prototype.constructor = v;
    v.__proto__ = v2;
    return f2;
  }(p3);
  vF.prototype.name = p3.name;
  vF.prototype.code = p;
  vO[p] = vF;
}
function f3(p11, p12) {
  if (Array.isArray(p11)) {
    var v3 = p11.length;
    p11 = p11.map(function (p13) {
      return String(p13);
    });
    if (v3 > 2) {
      return `one of ${p12} ${p11.slice(0, v3 - 1).join(", ")}, or ${p11[v3 - 1]}`;
    } else if (v3 === 2) {
      return `one of ${p12} ${p11[0]} or ${p11[1]}`;
    } else {
      return `of ${p12} ${p11[0]}`;
    }
  }
  return `of ${p12} ${String(p11)}`;
}
f("ERR_INVALID_OPT_VALUE", function (p14, p15) {
  return "The value \"" + p15 + "\" is invalid for option \"" + p14 + "\"";
}, TypeError);
f("ERR_INVALID_ARG_TYPE", function (p16, p17, p18) {
  var v4;
  var v5;
  var v6;
  var v7;
  if (typeof p17 === "string" && (v5 = "not ", p17.substr(!v6 || v6 < 0 ? 0 : +v6, v5.length) === v5)) {
    v4 = "must not be";
    p17 = p17.replace(/^not /, "");
  } else {
    v4 = "must be";
  }
  if (function (p19, p20, p21) {
    if (p21 === undefined || p21 > p19.length) {
      p21 = p19.length;
    }
    return p19.substring(p21 - p20.length, p21) === p20;
  }(p16, " argument")) {
    v7 = `The ${p16} ${v4} ${f3(p17, "type")}`;
  } else {
    var v8 = function (p22, p23, p24) {
      if (typeof p24 !== "number") {
        p24 = 0;
      }
      return !(p24 + p23.length > p22.length) && p22.indexOf(p23, p24) !== -1;
    }(p16, ".") ? "property" : "argument";
    v7 = `The "${p16}" ${v8} ${v4} ${f3(p17, "type")}`;
  }
  return v7 += `. Received type ${typeof p18}`;
}, TypeError);
f("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF");
f("ERR_METHOD_NOT_IMPLEMENTED", function (p25) {
  return "The " + p25 + " method is not implemented";
});
f("ERR_STREAM_PREMATURE_CLOSE", "Premature close");
f("ERR_STREAM_DESTROYED", function (p26) {
  return "Cannot call " + p26 + " after a stream was destroyed";
});
f("ERR_MULTIPLE_CALLBACK", "Callback called multiple times");
f("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable");
f("ERR_STREAM_WRITE_AFTER_END", "write after end");
f("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError);
f("ERR_UNKNOWN_ENCODING", function (p27) {
  return "Unknown encoding: " + p27;
}, TypeError);
f("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event");
module.exports.c = vO;