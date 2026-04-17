function yC(CC) {
  if ("string" !== typeof CC) {
    throw new TypeError("Path must be a string. Received " + JSON.stringify(CC));
  }
}
function IC(CC, yC) {
  for (var IC, fC = "", ky = 0, gC = -1, AC = 0, my = 0; my <= CC.length; ++my) {
    if (my < CC.length) {
      IC = CC.charCodeAt(my);
    } else {
      if (47 === IC) {
        break;
      }
      IC = 47;
    }
    if (47 === IC) {
      if (gC === my - 1 || 1 === AC) ;else {
        if (gC !== my - 1 && 2 === AC) {
          if (fC.length < 2 || 2 !== ky || 46 !== fC.charCodeAt(fC.length - 1) || 46 !== fC.charCodeAt(fC.length - 2)) {
            if (fC.length > 2) {
              var XC = fC.lastIndexOf("/");
              if (XC !== fC.length - 1) {
                -1 === XC ? (fC = "", ky = 0) : ky = (fC = fC.slice(0, XC)).length - 1 - fC.lastIndexOf("/");
                gC = my;
                AC = 0;
                continue;
              }
            } else {
              if (2 === fC.length || 1 === fC.length) {
                fC = "";
                ky = 0;
                gC = my;
                AC = 0;
                continue;
              }
            }
          }
          yC && (fC.length > 0 ? fC += "/.." : fC = "..", ky = 2);
        } else {
          fC.length > 0 ? fC += "/" + CC.slice(gC + 1, my) : fC = CC.slice(gC + 1, my);
          ky = my - gC - 1;
        }
      }
      gC = my;
      AC = 0;
    } else {
      46 === IC && -1 !== AC ? ++AC : AC = -1;
    }
  }
  return fC;
}
var fC = {
  resolve: function () {
    for (var CC, fC = "", ky = !1, gC = arguments.length - 1; gC >= -1 && !ky; gC--) {
      var AC;
      gC >= 0 ? AC = arguments[gC] : (void 0 === CC && (CC = process.cwd()), AC = CC);
      yC(AC);
      0 !== AC.length && (fC = AC + "/" + fC, ky = 47 === AC.charCodeAt(0));
    }
    fC = IC(fC, !ky);
    return ky ? fC.length > 0 ? "/" + fC : "/" : fC.length > 0 ? fC : ".";
  },
  normalize: function (CC) {
    yC(CC);
    if (0 === CC.length) {
      return ".";
    }
    var fC = 47 === CC.charCodeAt(0);
    var ky = 47 === CC.charCodeAt(CC.length - 1);
    0 !== (CC = IC(CC, !fC)).length || fC || (CC = ".");
    CC.length > 0 && ky && (CC += "/");
    return fC ? "/" + CC : CC;
  },
  isAbsolute: function (CC) {
    yC(CC);
    return CC.length > 0 && 47 === CC.charCodeAt(0);
  },
  join: function () {
    if (0 === arguments.length) {
      return ".";
    }
    for (var CC, IC = 0; IC < arguments.length; ++IC) {
      var ky = arguments[IC];
      yC(ky);
      ky.length > 0 && (void 0 === CC ? CC = ky : CC += "/" + ky);
    }
    return void 0 === CC ? "." : fC.normalize(CC);
  },
  relative: function (CC, IC) {
    yC(CC);
    yC(IC);
    if (CC === IC) {
      return "";
    }
    if ((CC = fC.resolve(CC)) === (IC = fC.resolve(IC))) {
      return "";
    }
    for (var ky = 1; ky < CC.length && 47 === CC.charCodeAt(ky); ++ky);
    for (var gC = CC.length, AC = gC - ky, my = 1; my < IC.length && 47 === IC.charCodeAt(my); ++my);
    for (var XC = IC.length - my, iy = AC < XC ? AC : XC, LC = -1, YC = 0; YC <= iy; ++YC) {
      if (YC === iy) {
        if (XC > iy) {
          if (47 === IC.charCodeAt(my + YC)) {
            return IC.slice(my + YC + 1);
          }
          if (0 === YC) {
            return IC.slice(my + YC);
          }
        } else {
          AC > iy && (47 === CC.charCodeAt(ky + YC) ? LC = YC : 0 === YC && (LC = 0));
        }
        break;
      }
      var bC = CC.charCodeAt(ky + YC);
      if (bC !== IC.charCodeAt(my + YC)) {
        break;
      }
      47 === bC && (LC = YC);
    }
    var rC = "";
    for (YC = ky + LC + 1; YC <= gC; ++YC) {
      YC !== gC && 47 !== CC.charCodeAt(YC) || (0 === rC.length ? rC += ".." : rC += "/..");
    }
    return rC.length > 0 ? rC + IC.slice(my + LC) : (my += LC, 47 === IC.charCodeAt(my) && ++my, IC.slice(my));
  },
  _makeLong: function (CC) {
    return CC;
  },
  dirname: function (CC) {
    yC(CC);
    if (0 === CC.length) {
      return ".";
    }
    for (var IC = CC.charCodeAt(0), fC = 47 === IC, ky = -1, gC = !0, AC = CC.length - 1; AC >= 1; --AC) {
      if (47 === (IC = CC.charCodeAt(AC))) {
        if (!gC) {
          ky = AC;
          break;
        }
      } else {
        gC = !1;
      }
    }
    return -1 === ky ? fC ? "/" : "." : fC && 1 === ky ? "//" : CC.slice(0, ky);
  },
  basename: function (CC, IC) {
    if (void 0 !== IC && "string" !== typeof IC) {
      throw new TypeError('"ext" argument must be a string');
    }
    yC(CC);
    var fC;
    var ky = 0;
    var gC = -1;
    var AC = !0;
    if (void 0 !== IC && IC.length > 0 && IC.length <= CC.length) {
      if (IC.length === CC.length && IC === CC) {
        return "";
      }
      var my = IC.length - 1;
      var XC = -1;
      for (fC = CC.length - 1; fC >= 0; --fC) {
        var iy = CC.charCodeAt(fC);
        if (47 === iy) {
          if (!AC) {
            ky = fC + 1;
            break;
          }
        } else {
          -1 === XC && (AC = !1, XC = fC + 1);
          my >= 0 && (iy === IC.charCodeAt(my) ? -1 === --my && (gC = fC) : (my = -1, gC = XC));
        }
      }
      ky === gC ? gC = XC : -1 === gC && (gC = CC.length);
      return CC.slice(ky, gC);
    }
    for (fC = CC.length - 1; fC >= 0; --fC) {
      if (47 === CC.charCodeAt(fC)) {
        if (!AC) {
          ky = fC + 1;
          break;
        }
      } else {
        -1 === gC && (AC = !1, gC = fC + 1);
      }
    }
    return -1 === gC ? "" : CC.slice(ky, gC);
  },
  extname: function (CC) {
    yC(CC);
    for (var IC = -1, fC = 0, ky = -1, gC = !0, AC = 0, my = CC.length - 1; my >= 0; --my) {
      var XC = CC.charCodeAt(my);
      if (47 !== XC) {
        -1 === ky && (gC = !1, ky = my + 1);
        46 === XC ? -1 === IC ? IC = my : 1 !== AC && (AC = 1) : -1 !== IC && (AC = -1);
      } else {
        if (!gC) {
          fC = my + 1;
          break;
        }
      }
    }
    return -1 === IC || -1 === ky || 0 === AC || 1 === AC && IC === ky - 1 && IC === fC + 1 ? "" : CC.slice(IC, ky);
  },
  format: function (CC) {
    if (null === CC || "object" !== typeof CC) {
      throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof CC);
    }
    return function (CC, yC) {
      var IC = yC.dir || yC.root;
      var fC = yC.base || (yC.name || "") + (yC.ext || "");
      return IC ? IC === yC.root ? IC + fC : IC + CC + fC : fC;
    }("/", CC);
  },
  parse: function (CC) {
    yC(CC);
    var IC = {
      root: "",
      dir: "",
      base: "",
      ext: "",
      name: ""
    };
    if (0 === CC.length) {
      return IC;
    }
    var fC;
    var ky = CC.charCodeAt(0);
    var gC = 47 === ky;
    gC ? (IC.root = "/", fC = 1) : fC = 0;
    for (var AC = -1, my = 0, XC = -1, iy = !0, LC = CC.length - 1, YC = 0; LC >= fC; --LC) {
      if (47 !== (ky = CC.charCodeAt(LC))) {
        -1 === XC && (iy = !1, XC = LC + 1);
        46 === ky ? -1 === AC ? AC = LC : 1 !== YC && (YC = 1) : -1 !== AC && (YC = -1);
      } else {
        if (!iy) {
          my = LC + 1;
          break;
        }
      }
    }
    -1 === AC || -1 === XC || 0 === YC || 1 === YC && AC === XC - 1 && AC === my + 1 ? -1 !== XC && (IC.base = IC.name = 0 === my && gC ? CC.slice(1, XC) : CC.slice(my, XC)) : (0 === my && gC ? (IC.name = CC.slice(1, AC), IC.base = CC.slice(1, XC)) : (IC.name = CC.slice(my, AC), IC.base = CC.slice(my, XC)), IC.ext = CC.slice(AC, XC));
    my > 0 ? IC.dir = CC.slice(0, my - 1) : gC && (IC.dir = "/");
    return IC;
  },
  sep: "/",
  delimiter: ":",
  win32: null,
  posix: null
};
fC.posix = fC;
module.exports = fC;