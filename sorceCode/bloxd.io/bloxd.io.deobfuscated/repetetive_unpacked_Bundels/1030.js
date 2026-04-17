var yC = {};
function IC(CC, IC, fC) {
  fC || (fC = Error);
  var ky = function (CC) {
    var yC;
    var fC;
    function ky(yC, fC, ky) {
      return CC.call(this, function (CC, yC, fC) {
        return "string" === typeof IC ? IC : IC(CC, yC, fC);
      }(yC, fC, ky)) || this;
    }
    fC = CC;
    (yC = ky).prototype = Object.create(fC.prototype);
    yC.prototype.constructor = yC;
    yC.__proto__ = fC;
    return ky;
  }(fC);
  ky.prototype.name = fC.name;
  ky.prototype.code = CC;
  yC[CC] = ky;
}
function fC(CC, yC) {
  if (Array.isArray(CC)) {
    var IC = CC.length;
    CC = CC.map(function (CC) {
      return String(CC);
    });
    return IC > 2 ? "one of ".concat(yC, " ").concat(CC.slice(0, IC - 1).join(", "), ", or ") + CC[IC - 1] : 2 === IC ? "one of ".concat(yC, " ").concat(CC[0], " or ").concat(CC[1]) : "of ".concat(yC, " ").concat(CC[0]);
  }
  return "of ".concat(yC, " ").concat(String(CC));
}
IC("ERR_INVALID_OPT_VALUE", function (CC, yC) {
  return 'The value "' + yC + '" is invalid for option "' + CC + '"';
}, TypeError);
IC("ERR_INVALID_ARG_TYPE", function (CC, yC, IC) {
  var ky;
  var gC;
  var AC;
  var my;
  "string" === typeof yC && (gC = "not ", yC.substr(!AC || AC < 0 ? 0 : +AC, gC.length) === gC) ? (ky = "must not be", yC = yC.replace(/^not /, "")) : ky = "must be";
  if (function (CC, yC, IC) {
    (void 0 === IC || IC > CC.length) && (IC = CC.length);
    return CC.substring(IC - yC.length, IC) === yC;
  }(CC, " argument")) {
    my = "The ".concat(CC, " ").concat(ky, " ").concat(fC(yC, "type"));
  } else {
    var XC = function (CC, yC, IC) {
      "number" !== typeof IC && (IC = 0);
      return !(IC + yC.length > CC.length) && -1 !== CC.indexOf(yC, IC);
    }(CC, ".") ? "property" : "argument";
    my = 'The "'.concat(CC, '" ').concat(XC, " ").concat(ky, " ").concat(fC(yC, "type"));
  }
  return my += ". Received type ".concat(typeof IC);
}, TypeError);
IC("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF");
IC("ERR_METHOD_NOT_IMPLEMENTED", function (CC) {
  return "The " + CC + " method is not implemented";
});
IC("ERR_STREAM_PREMATURE_CLOSE", "Premature close");
IC("ERR_STREAM_DESTROYED", function (CC) {
  return "Cannot call " + CC + " after a stream was destroyed";
});
IC("ERR_MULTIPLE_CALLBACK", "Callback called multiple times");
IC("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable");
IC("ERR_STREAM_WRITE_AFTER_END", "write after end");
IC("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError);
IC("ERR_UNKNOWN_ENCODING", function (CC) {
  return "Unknown encoding: " + CC;
}, TypeError);
IC("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event");
module.exports.b = yC;