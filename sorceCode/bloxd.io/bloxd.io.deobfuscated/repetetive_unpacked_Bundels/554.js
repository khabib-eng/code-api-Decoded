var IC;
!function () {
  var fC = {}.hasOwnProperty;
  function ky() {
    for (var CC = [], yC = 0; yC < arguments.length; yC++) {
      var IC = arguments[yC];
      if (IC) {
        var gC = typeof IC;
        if ("string" === gC || "number" === gC) {
          CC.push(IC);
        } else {
          if (Array.isArray(IC)) {
            if (IC.length) {
              var AC = ky.apply(null, IC);
              AC && CC.push(AC);
            }
          } else {
            if ("object" === gC) {
              if (IC.toString === Object.prototype.toString) {
                for (var my in IC) {
                  fC.call(IC, my) && IC[my] && CC.push(my);
                }
              } else {
                CC.push(IC.toString());
              }
            }
          }
        }
      }
    }
    return CC.join(" ");
  }
  module.exports ? (ky.default = ky, module.exports = ky) : void 0 === (IC = function () {
    return ky;
  }.apply(exports, [])) || (module.exports = IC);
}();