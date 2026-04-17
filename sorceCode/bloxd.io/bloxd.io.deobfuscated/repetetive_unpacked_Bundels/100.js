var fC;
var ky;
!function (gC) {
  void 0 === (ky = "function" === typeof (fC = gC) ? fC.call(exports, require, exports, module) : fC) || (module.exports = ky);
  module.exports = gC();
  if (!!0) {
    var AC = window.Cookies;
    var my = window.Cookies = gC();
    my.noConflict = function () {
      window.Cookies = AC;
      return my;
    };
  }
}(function () {
  function CC() {
    for (var CC = 0, yC = {}; CC < arguments.length; CC++) {
      var IC = arguments[CC];
      for (var fC in IC) {
        yC[fC] = IC[fC];
      }
    }
    return yC;
  }
  function yC(CC) {
    return CC.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
  }
  return function IC(fC) {
    function ky() {}
    function gC(yC, IC, gC) {
      if ("undefined" !== typeof document) {
        "number" === typeof (gC = CC({
          path: "/"
        }, ky.defaults, gC)).expires && (gC.expires = new Date(1 * new Date() + 864e5 * gC.expires));
        gC.expires = gC.expires ? gC.expires.toUTCString() : "";
        try {
          var AC = JSON.stringify(IC);
          /^[\{\[]/.test(AC) && (IC = AC);
        } catch (iy) {}
        IC = fC.write ? fC.write(IC, yC) : encodeURIComponent(String(IC)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
        yC = encodeURIComponent(String(yC)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
        var my = "";
        for (var XC in gC) {
          gC[XC] && (my += "; " + XC, !0 !== gC[XC] && (my += "=" + gC[XC].split(";")[0]));
        }
        return document.cookie = yC + "=" + IC + my;
      }
    }
    function AC(CC, IC) {
      if ("undefined" !== typeof document) {
        for (var ky = {}, gC = document.cookie ? document.cookie.split("; ") : [], AC = 0; AC < gC.length; AC++) {
          var my = gC[AC].split("=");
          var XC = my.slice(1).join("=");
          IC || '"' !== XC.charAt(0) || (XC = XC.slice(1, -1));
          try {
            var iy = yC(my[0]);
            XC = (fC.read || fC)(XC, iy) || yC(XC);
            if (IC) {
              try {
                XC = JSON.parse(XC);
              } catch (LC) {}
            }
            ky[iy] = XC;
            if (CC === iy) {
              break;
            }
          } catch (LC) {}
        }
        return CC ? ky[CC] : ky;
      }
    }
    ky.set = gC;
    ky.get = function (CC) {
      return AC(CC, !1);
    };
    ky.getJSON = function (CC) {
      return AC(CC, !0);
    };
    ky.remove = function (yC, IC) {
      gC(yC, "", CC(IC, {
        expires: -1
      }));
    };
    ky.defaults = {};
    ky.withConverter = IC;
    return ky;
  }(function () {});
});