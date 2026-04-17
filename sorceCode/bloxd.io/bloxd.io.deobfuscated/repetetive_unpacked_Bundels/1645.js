var fC = require("./49.js");
var ky = require("./1583.js");
var gC = ky;
function AC(CC, yC, IC, fC) {
  return new (IC || (IC = Promise))(function (ky, gC) {
    function AC(CC) {
      try {
        XC(fC.next(CC));
      } catch (yC) {
        gC(yC);
      }
    }
    function my(CC) {
      try {
        XC(fC.throw(CC));
      } catch (yC) {
        gC(yC);
      }
    }
    function XC(CC) {
      var yC;
      CC.done ? ky(CC.value) : (yC = CC.value, yC instanceof IC ? yC : new IC(function (CC) {
        CC(yC);
      })).then(AC, my);
    }
    XC((fC = fC.apply(CC, yC || [])).next());
  });
}
function my(CC, yC) {
  var IC;
  var fC;
  var ky;
  var gC;
  var AC = {
    label: 0,
    sent: function () {
      if (1 & ky[0]) {
        throw ky[1];
      }
      return ky[1];
    },
    trys: [],
    ops: []
  };
  gC = {
    next: my(0),
    throw: my(1),
    return: my(2)
  };
  "function" === typeof Symbol && (gC[Symbol.iterator] = function () {
    return this;
  });
  return gC;
  function my(my) {
    return function (XC) {
      return function (my) {
        if (IC) {
          throw new TypeError("Generator is already executing.");
        }
        for (; gC && (gC = 0, my[0] && (AC = 0)), AC;) {
          try {
            IC = 1;
            if (fC && (ky = 2 & my[0] ? fC.return : my[0] ? fC.throw || ((ky = fC.return) && ky.call(fC), 0) : fC.next) && !(ky = ky.call(fC, my[1])).done) {
              return ky;
            }
            fC = 0;
            ky && (my = [2 & my[0], ky.value]);
            switch (my[0]) {
              case 0:
              case 1:
                ky = my;
                break;
              case 4:
                AC.label++;
                return {
                  value: my[1],
                  done: !1
                };
              case 5:
                AC.label++;
                fC = my[1];
                my = [0];
                continue;
              case 7:
                my = AC.ops.pop();
                AC.trys.pop();
                continue;
              default:
                if (!(ky = (ky = AC.trys).length > 0 && ky[ky.length - 1]) && (6 === my[0] || 2 === my[0])) {
                  AC = 0;
                  continue;
                }
                if (3 === my[0] && (!ky || my[1] > ky[0] && my[1] < ky[3])) {
                  AC.label = my[1];
                  break;
                }
                if (6 === my[0] && AC.label < ky[1]) {
                  AC.label = ky[1];
                  ky = my;
                  break;
                }
                if (ky && AC.label < ky[2]) {
                  AC.label = ky[2];
                  AC.ops.push(my);
                  break;
                }
                ky[2] && AC.ops.pop();
                AC.trys.pop();
                continue;
            }
            my = yC.call(CC, AC);
          } catch (XC) {
            my = [6, XC];
            fC = 0;
          } finally {
            IC = ky = 0;
          }
        }
        if (5 & my[0]) {
          throw my[1];
        }
        return {
          value: my[0] ? my[1] : void 0,
          done: !0
        };
      }([my, XC]);
    };
  }
}
Object.create;
function XC(CC, yC) {
  var IC = "function" === typeof Symbol && CC[Symbol.iterator];
  if (!IC) {
    return CC;
  }
  var fC;
  var ky;
  var gC = IC.call(CC);
  var AC = [];
  try {
    for (; (void 0 === yC || yC-- > 0) && !(fC = gC.next()).done;) {
      AC.push(fC.value);
    }
  } catch (my) {
    ky = {
      error: my
    };
  } finally {
    try {
      fC && !fC.done && (IC = gC.return) && IC.call(gC);
    } finally {
      if (ky) {
        throw ky.error;
      }
    }
  }
  return AC;
}
function iy(CC, yC, IC) {
  if (IC || 2 === arguments.length) {
    for (var fC, ky = 0, gC = yC.length; ky < gC; ky++) {
      !fC && ky in yC || (fC || (fC = Array.prototype.slice.call(yC, 0, ky)), fC[ky] = yC[ky]);
    }
  }
  return CC.concat(fC || Array.prototype.slice.call(yC));
}
Object.create;
"function" === typeof SuppressedError && SuppressedError;
var LC = new Map([["aac", "audio/aac"], ["abw", "application/x-abiword"], ["arc", "application/x-freearc"], ["avif", "image/avif"], ["avi", "video/x-msvideo"], ["azw", "application/vnd.amazon.ebook"], ["bin", "application/octet-stream"], ["bmp", "image/bmp"], ["bz", "application/x-bzip"], ["bz2", "application/x-bzip2"], ["cda", "application/x-cdf"], ["csh", "application/x-csh"], ["css", "text/css"], ["csv", "text/csv"], ["doc", "application/msword"], ["docx", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"], ["eot", "application/vnd.ms-fontobject"], ["epub", "application/epub+zip"], ["gz", "application/gzip"], ["gif", "image/gif"], ["heic", "image/heic"], ["heif", "image/heif"], ["htm", "text/html"], ["html", "text/html"], ["ico", "image/vnd.microsoft.icon"], ["ics", "text/calendar"], ["jar", "application/java-archive"], ["jpeg", "image/jpeg"], ["jpg", "image/jpeg"], ["js", "text/javascript"], ["json", "application/json"], ["jsonld", "application/ld+json"], ["mid", "audio/midi"], ["midi", "audio/midi"], ["mjs", "text/javascript"], ["mp3", "audio/mpeg"], ["mp4", "video/mp4"], ["mpeg", "video/mpeg"], ["mpkg", "application/vnd.apple.installer+xml"], ["odp", "application/vnd.oasis.opendocument.presentation"], ["ods", "application/vnd.oasis.opendocument.spreadsheet"], ["odt", "application/vnd.oasis.opendocument.text"], ["oga", "audio/ogg"], ["ogv", "video/ogg"], ["ogx", "application/ogg"], ["opus", "audio/opus"], ["otf", "font/otf"], ["png", "image/png"], ["pdf", "application/pdf"], ["php", "application/x-httpd-php"], ["ppt", "application/vnd.ms-powerpoint"], ["pptx", "application/vnd.openxmlformats-officedocument.presentationml.presentation"], ["rar", "application/vnd.rar"], ["rtf", "application/rtf"], ["sh", "application/x-sh"], ["svg", "image/svg+xml"], ["swf", "application/x-shockwave-flash"], ["tar", "application/x-tar"], ["tif", "image/tiff"], ["tiff", "image/tiff"], ["ts", "video/mp2t"], ["ttf", "font/ttf"], ["txt", "text/plain"], ["vsd", "application/vnd.visio"], ["wav", "audio/wav"], ["weba", "audio/webm"], ["webm", "video/webm"], ["webp", "image/webp"], ["woff", "font/woff"], ["woff2", "font/woff2"], ["xhtml", "application/xhtml+xml"], ["xls", "application/vnd.ms-excel"], ["xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"], ["xml", "application/xml"], ["xul", "application/vnd.mozilla.xul+xml"], ["zip", "application/zip"], ["7z", "application/x-7z-compressed"], ["mkv", "video/x-matroska"], ["mov", "video/quicktime"], ["vk", "application/vnd.ms-outlook"]]);
function YC(CC, yC) {
  var IC = function (CC) {
    var yC = CC.name;
    if (yC && -1 !== yC.lastIndexOf(".") && !CC.type) {
      var IC = yC.split(".").pop().toLowerCase();
      var fC = LC.get(IC);
      fC && Object.defineProperty(CC, "type", {
        value: fC,
        writable: !1,
        configurable: !1,
        enumerable: !0
      });
    }
    return CC;
  }(CC);
  if ("string" !== typeof IC.path) {
    var fC = CC.webkitRelativePath;
    Object.defineProperty(IC, "path", {
      value: "string" === typeof yC ? yC : "string" === typeof fC && fC.length > 0 ? fC : CC.name,
      writable: !1,
      configurable: !1,
      enumerable: !0
    });
  }
  return IC;
}
var bC = [".DS_Store", "Thumbs.db"];
function rC(CC) {
  return "object" === typeof CC && null !== CC;
}
function GC(CC) {
  return TC(CC.target.files).map(function (CC) {
    return YC(CC);
  });
}
function eC(CC) {
  return AC(this, void 0, void 0, function () {
    return my(this, function (yC) {
      switch (yC.label) {
        case 0:
          return [4, Promise.all(CC.map(function (CC) {
            return CC.getFile();
          }))];
        case 1:
          return [2, yC.sent().map(function (CC) {
            return YC(CC);
          })];
      }
    });
  });
}
function OC(CC, yC) {
  return AC(this, void 0, void 0, function () {
    var IC;
    return my(this, function (fC) {
      switch (fC.label) {
        case 0:
          return CC.items ? (IC = TC(CC.items).filter(function (CC) {
            return "file" === CC.kind;
          }), "drop" !== yC ? [2, IC] : [4, Promise.all(IC.map(NC))]) : [3, 2];
        case 1:
          return [2, SC(sC(fC.sent()))];
        case 2:
          return [2, SC(TC(CC.files).map(function (CC) {
            return YC(CC);
          }))];
      }
    });
  });
}
function SC(CC) {
  return CC.filter(function (CC) {
    return -1 === bC.indexOf(CC.name);
  });
}
function TC(CC) {
  if (null === CC) {
    return [];
  }
  for (var yC = [], IC = 0; IC < CC.length; IC++) {
    var fC = CC[IC];
    yC.push(fC);
  }
  return yC;
}
function NC(CC) {
  if ("function" !== typeof CC.webkitGetAsEntry) {
    return jy(CC);
  }
  var yC = CC.webkitGetAsEntry();
  return yC && yC.isDirectory ? KC(yC) : jy(CC);
}
function sC(CC) {
  return CC.reduce(function (CC, yC) {
    return iy(iy([], XC(CC), !1), XC(Array.isArray(yC) ? sC(yC) : [yC]), !1);
  }, []);
}
function jy(CC) {
  var yC = CC.getAsFile();
  if (!yC) {
    return Promise.reject("".concat(CC, " is not a File"));
  }
  var IC = YC(yC);
  return Promise.resolve(IC);
}
function qC(CC) {
  return AC(this, void 0, void 0, function () {
    return my(this, function (yC) {
      return [2, CC.isDirectory ? KC(CC) : pC(CC)];
    });
  });
}
function KC(CC) {
  var yC = CC.createReader();
  return new Promise(function (CC, IC) {
    var fC = [];
    !function ky() {
      var gC = this;
      yC.readEntries(function (yC) {
        return AC(gC, void 0, void 0, function () {
          var gC;
          var AC;
          var XC;
          return my(this, function (my) {
            switch (my.label) {
              case 0:
                if (yC.length) {
                  return [3, 5];
                }
                my.label = 1;
              case 1:
                my.trys.push([1, 3,, 4]);
                return [4, Promise.all(fC)];
              case 2:
                gC = my.sent();
                CC(gC);
                return [3, 4];
              case 3:
                AC = my.sent();
                IC(AC);
                return [3, 4];
              case 4:
                return [3, 6];
              case 5:
                XC = Promise.all(yC.map(qC));
                fC.push(XC);
                ky();
                my.label = 6;
              case 6:
                return [2];
            }
          });
        });
      }, function (CC) {
        IC(CC);
      });
    }();
  });
}
function pC(CC) {
  return AC(this, void 0, void 0, function () {
    return my(this, function (yC) {
      return [2, new Promise(function (yC, IC) {
        CC.file(function (IC) {
          var fC = YC(IC, CC.fullPath);
          yC(fC);
        }, function (CC) {
          IC(CC);
        });
      })];
    });
  });
}
var wC = require("./1652.js");
function HC(CC) {
  return function (CC) {
    if (Array.isArray(CC)) {
      return WC(CC);
    }
  }(CC) || function (CC) {
    if ("undefined" !== typeof Symbol && null != CC[Symbol.iterator] || null != CC["@@iterator"]) {
      return Array.from(CC);
    }
  }(CC) || VC(CC) || function () {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function aC(CC, yC) {
  var IC = Object.keys(CC);
  if (Object.getOwnPropertySymbols) {
    var fC = Object.getOwnPropertySymbols(CC);
    yC && (fC = fC.filter(function (yC) {
      return Object.getOwnPropertyDescriptor(CC, yC).enumerable;
    }));
    IC.push.apply(IC, fC);
  }
  return IC;
}
function cC(CC) {
  for (var yC = 1; yC < arguments.length; yC++) {
    var IC = null != arguments[yC] ? arguments[yC] : {};
    yC % 2 ? aC(Object(IC), !0).forEach(function (yC) {
      UC(CC, yC, IC[yC]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(CC, Object.getOwnPropertyDescriptors(IC)) : aC(Object(IC)).forEach(function (yC) {
      Object.defineProperty(CC, yC, Object.getOwnPropertyDescriptor(IC, yC));
    });
  }
  return CC;
}
function UC(CC, yC, IC) {
  yC in CC ? Object.defineProperty(CC, yC, {
    value: IC,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : CC[yC] = IC;
  return CC;
}
function EC(CC, yC) {
  return function (CC) {
    if (Array.isArray(CC)) {
      return CC;
    }
  }(CC) || function (CC, yC) {
    var IC = null == CC ? null : "undefined" !== typeof Symbol && CC[Symbol.iterator] || CC["@@iterator"];
    if (null == IC) {
      return;
    }
    var fC;
    var ky;
    var gC = [];
    var AC = !0;
    var my = !1;
    try {
      for (IC = IC.call(CC); !(AC = (fC = IC.next()).done) && (gC.push(fC.value), !yC || gC.length !== yC); AC = !0);
    } catch (XC) {
      my = !0;
      ky = XC;
    } finally {
      try {
        AC || null == IC.return || IC.return();
      } finally {
        if (my) {
          throw ky;
        }
      }
    }
    return gC;
  }(CC, yC) || VC(CC, yC) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function VC(CC, yC) {
  if (CC) {
    if ("string" === typeof CC) {
      return WC(CC, yC);
    }
    var IC = Object.prototype.toString.call(CC).slice(8, -1);
    "Object" === IC && CC.constructor && (IC = CC.constructor.name);
    return "Map" === IC || "Set" === IC ? Array.from(CC) : "Arguments" === IC || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(IC) ? WC(CC, yC) : void 0;
  }
}
function WC(CC, yC) {
  (null == yC || yC > CC.length) && (yC = CC.length);
  for (var IC = 0, fC = new Array(yC); IC < yC; IC++) {
    fC[IC] = CC[IC];
  }
  return fC;
}
var xC = "file-invalid-type";
var PC = "file-too-large";
var zC = "file-too-small";
var BC = "too-many-files";
function tC(CC) {
  CC = Array.isArray(CC) && 1 === CC.length ? CC[0] : CC;
  var yC = Array.isArray(CC) ? "one of ".concat(CC.join(", ")) : CC;
  return {
    code: xC,
    message: "File type must be ".concat(yC)
  };
}
function JC(CC) {
  return {
    code: PC,
    message: "File is larger than ".concat(CC, " ").concat(1 === CC ? "byte" : "bytes")
  };
}
function nC(CC) {
  return {
    code: zC,
    message: "File is smaller than ".concat(CC, " ").concat(1 === CC ? "byte" : "bytes")
  };
}
var FC = {
  code: BC,
  message: "Too many files"
};
function uC(CC, yC) {
  var IC = "application/x-moz-file" === CC.type || (0, wC.c)(CC, yC);
  return [IC, IC ? null : tC(yC)];
}
function DC(CC, yC, IC) {
  if (ZC(CC.size)) {
    if (ZC(yC) && ZC(IC)) {
      if (CC.size > IC) {
        return [!1, JC(IC)];
      }
      if (CC.size < yC) {
        return [!1, nC(yC)];
      }
    } else {
      if (ZC(yC) && CC.size < yC) {
        return [!1, nC(yC)];
      }
      if (ZC(IC) && CC.size > IC) {
        return [!1, JC(IC)];
      }
    }
  }
  return [!0, null];
}
function ZC(CC) {
  return void 0 !== CC && null !== CC;
}
function lC(CC) {
  return "function" === typeof CC.isPropagationStopped ? CC.isPropagationStopped() : "undefined" !== typeof CC.cancelBubble && CC.cancelBubble;
}
function oC(CC) {
  return CC.dataTransfer ? Array.prototype.some.call(CC.dataTransfer.types, function (CC) {
    return "Files" === CC || "application/x-moz-file" === CC;
  }) : !!CC.target && !!CC.target.files;
}
function vC(CC) {
  CC.preventDefault();
}
function hC() {
  for (var CC = arguments.length, yC = new Array(CC), IC = 0; IC < CC; IC++) {
    yC[IC] = arguments[IC];
  }
  return function (CC) {
    for (var IC = arguments.length, fC = new Array(IC > 1 ? IC - 1 : 0), ky = 1; ky < IC; ky++) {
      fC[ky - 1] = arguments[ky];
    }
    return yC.some(function (yC) {
      !lC(CC) && yC && yC.apply(void 0, [CC].concat(fC));
      return lC(CC);
    });
  };
}
function RC(CC) {
  return "audio/*" === CC || "video/*" === CC || "image/*" === CC || "text/*" === CC || /\w+\/[-+.\w]+/g.test(CC);
}
function dC(CC) {
  return /^.*\.[\w]+$/.test(CC);
}
var QC = ["children"];
var MC = ["open"];
var Cy = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"];
var yy = ["refKey", "onChange", "onClick"];
function Iy(CC) {
  return function (CC) {
    if (Array.isArray(CC)) {
      return gy(CC);
    }
  }(CC) || function (CC) {
    if ("undefined" !== typeof Symbol && null != CC[Symbol.iterator] || null != CC["@@iterator"]) {
      return Array.from(CC);
    }
  }(CC) || kI(CC) || function () {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function fy(CC, yC) {
  return function (CC) {
    if (Array.isArray(CC)) {
      return CC;
    }
  }(CC) || function (CC, yC) {
    var IC = null == CC ? null : "undefined" !== typeof Symbol && CC[Symbol.iterator] || CC["@@iterator"];
    if (null == IC) {
      return;
    }
    var fC;
    var ky;
    var gC = [];
    var AC = !0;
    var my = !1;
    try {
      for (IC = IC.call(CC); !(AC = (fC = IC.next()).done) && (gC.push(fC.value), !yC || gC.length !== yC); AC = !0);
    } catch (XC) {
      my = !0;
      ky = XC;
    } finally {
      try {
        AC || null == IC.return || IC.return();
      } finally {
        if (my) {
          throw ky;
        }
      }
    }
    return gC;
  }(CC, yC) || kI(CC, yC) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function kI(CC, yC) {
  if (CC) {
    if ("string" === typeof CC) {
      return gy(CC, yC);
    }
    var IC = Object.prototype.toString.call(CC).slice(8, -1);
    "Object" === IC && CC.constructor && (IC = CC.constructor.name);
    return "Map" === IC || "Set" === IC ? Array.from(CC) : "Arguments" === IC || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(IC) ? gy(CC, yC) : void 0;
  }
}
function gy(CC, yC) {
  (null == yC || yC > CC.length) && (yC = CC.length);
  for (var IC = 0, fC = new Array(yC); IC < yC; IC++) {
    fC[IC] = CC[IC];
  }
  return fC;
}
function Ay(CC, yC) {
  var IC = Object.keys(CC);
  if (Object.getOwnPropertySymbols) {
    var fC = Object.getOwnPropertySymbols(CC);
    yC && (fC = fC.filter(function (yC) {
      return Object.getOwnPropertyDescriptor(CC, yC).enumerable;
    }));
    IC.push.apply(IC, fC);
  }
  return IC;
}
function mI(CC) {
  for (var yC = 1; yC < arguments.length; yC++) {
    var IC = null != arguments[yC] ? arguments[yC] : {};
    yC % 2 ? Ay(Object(IC), !0).forEach(function (yC) {
      Xy(CC, yC, IC[yC]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(CC, Object.getOwnPropertyDescriptors(IC)) : Ay(Object(IC)).forEach(function (yC) {
      Object.defineProperty(CC, yC, Object.getOwnPropertyDescriptor(IC, yC));
    });
  }
  return CC;
}
function Xy(CC, yC, IC) {
  yC in CC ? Object.defineProperty(CC, yC, {
    value: IC,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : CC[yC] = IC;
  return CC;
}
function iI(CC, yC) {
  if (null == CC) {
    return {};
  }
  var IC;
  var fC;
  var ky = function (CC, yC) {
    if (null == CC) {
      return {};
    }
    var IC;
    var fC;
    var ky = {};
    var gC = Object.keys(CC);
    for (fC = 0; fC < gC.length; fC++) {
      IC = gC[fC];
      yC.indexOf(IC) >= 0 || (ky[IC] = CC[IC]);
    }
    return ky;
  }(CC, yC);
  if (Object.getOwnPropertySymbols) {
    var gC = Object.getOwnPropertySymbols(CC);
    for (fC = 0; fC < gC.length; fC++) {
      IC = gC[fC];
      yC.indexOf(IC) >= 0 || Object.prototype.propertyIsEnumerable.call(CC, IC) && (ky[IC] = CC[IC]);
    }
  }
  return ky;
}
var Ly = (0, fC.forwardRef)(function (CC, yC) {
  var IC = CC.children;
  var ky = e(iI(CC, QC));
  var gC = ky.open;
  var AC = iI(ky, MC);
  (0, fC.useImperativeHandle)(yC, function () {
    return {
      open: gC
    };
  }, [gC]);
  return fC.createElement(fC.Fragment, null, IC(mI(mI({}, AC), {}, {
    open: gC
  })));
});
Ly.displayName = "Dropzone";
var Yy = {
  disabled: !1,
  getFilesFromEvent: function (CC) {
    return AC(this, void 0, void 0, function () {
      return my(this, function (yC) {
        return rC(CC) && rC(CC.dataTransfer) ? [2, OC(CC.dataTransfer, CC.type)] : function (CC) {
          return rC(CC) && rC(CC.target);
        }(CC) ? [2, GC(CC)] : Array.isArray(CC) && CC.every(function (CC) {
          return "getFile" in CC && "function" === typeof CC.getFile;
        }) ? [2, eC(CC)] : [2, []];
      });
    });
  },
  maxSize: 1 / 0,
  minSize: 0,
  multiple: !0,
  maxFiles: 0,
  preventDropOnDocument: !0,
  noClick: !1,
  noKeyboard: !1,
  noDrag: !1,
  noDragEventsBubbling: !1,
  validator: null,
  useFsAccessApi: !0,
  autoFocus: !1
};
Ly.defaultProps = Yy;
Ly.propTypes = {
  children: gC.func,
  accept: gC.objectOf(gC.arrayOf(gC.string)),
  multiple: gC.bool,
  preventDropOnDocument: gC.bool,
  noClick: gC.bool,
  noKeyboard: gC.bool,
  noDrag: gC.bool,
  noDragEventsBubbling: gC.bool,
  minSize: gC.number,
  maxSize: gC.number,
  maxFiles: gC.number,
  disabled: gC.bool,
  getFilesFromEvent: gC.func,
  onFileDialogCancel: gC.func,
  onFileDialogOpen: gC.func,
  useFsAccessApi: gC.bool,
  autoFocus: gC.bool,
  onDragEnter: gC.func,
  onDragLeave: gC.func,
  onDragOver: gC.func,
  onDrop: gC.func,
  onDropAccepted: gC.func,
  onDropRejected: gC.func,
  onError: gC.func,
  validator: gC.func
};
var by = {
  sL: !1,
  isFileDialogActive: !1,
  isDragActive: !1,
  isDragAccept: !1,
  isDragReject: !1,
  acceptedFiles: [],
  fileRejections: []
};
export function e() {
  var CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  var yC = mI(mI({}, Yy), CC);
  var IC = yC.accept;
  var ky = yC.disabled;
  var gC = yC.getFilesFromEvent;
  var AC = yC.maxSize;
  var my = yC.minSize;
  var XC = yC.multiple;
  var iy = yC.maxFiles;
  var LC = yC.onDragEnter;
  var YC = yC.onDragLeave;
  var bC = yC.onDragOver;
  var rC = yC.onDrop;
  var GC = yC.onDropAccepted;
  var eC = yC.onDropRejected;
  var OC = yC.onFileDialogCancel;
  var SC = yC.onFileDialogOpen;
  var TC = yC.useFsAccessApi;
  var NC = yC.autoFocus;
  var sC = yC.preventDropOnDocument;
  var jy = yC.noClick;
  var qC = yC.noKeyboard;
  var KC = yC.noDrag;
  var pC = yC.noDragEventsBubbling;
  var wC = yC.onError;
  var aC = yC.validator;
  var VC = (0, fC.useMemo)(function () {
    return function (CC) {
      if (ZC(CC)) {
        return Object.entries(CC).reduce(function (CC, yC) {
          var IC = EC(yC, 2);
          var fC = IC[0];
          var ky = IC[1];
          return [].concat(HC(CC), [fC], HC(ky));
        }, []).filter(function (CC) {
          return RC(CC) || dC(CC);
        }).join(",");
      }
    }(IC);
  }, [IC]);
  var WC = (0, fC.useMemo)(function () {
    return function (CC) {
      return ZC(CC) ? [{
        description: "Files",
        accept: Object.entries(CC).filter(function (CC) {
          var yC = EC(CC, 2);
          var IC = yC[0];
          var fC = yC[1];
          var ky = !0;
          RC(IC) || (console.warn('Skipped "'.concat(IC, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')), ky = !1);
          Array.isArray(fC) && fC.every(dC) || (console.warn('Skipped "'.concat(IC, '" because an invalid file extension was provided.')), ky = !1);
          return ky;
        }).reduce(function (CC, yC) {
          var IC = EC(yC, 2);
          var fC = IC[0];
          var ky = IC[1];
          return cC(cC({}, CC), {}, UC({}, fC, ky));
        }, {})
      }] : CC;
    }(IC);
  }, [IC]);
  var xC = (0, fC.useMemo)(function () {
    return "function" === typeof SC ? SC : ey;
  }, [SC]);
  var PC = (0, fC.useMemo)(function () {
    return "function" === typeof OC ? OC : ey;
  }, [OC]);
  var zC = (0, fC.useRef)(null);
  var BC = (0, fC.useRef)(null);
  var tC = fy((0, fC.useReducer)(Gy, by), 2);
  var JC = tC[0];
  var nC = tC[1];
  var QC = JC.sL;
  var MC = JC.isFileDialogActive;
  var kI = (0, fC.useRef)("undefined" !== typeof window && window.isSecureContext && TC && "showOpenFilePicker" in window);
  function gy() {
    !kI.current && MC && setTimeout(function () {
      BC.current && (BC.current.files.length || (nC({
        type: "closeDialog"
      }), PC()));
    }, 300);
  }
  (0, fC.Oy)(function () {
    window.addEventListener("focus", gy, !1);
    return function () {
      window.removeEventListener("focus", gy, !1);
    };
  }, [BC, MC, PC, kI]);
  var Ay = (0, fC.useRef)([]);
  function Ly(CC) {
    zC.current && zC.current.contains(CC.target) || (CC.preventDefault(), Ay.current = []);
  }
  (0, fC.Oy)(function () {
    sC && (document.addEventListener("dragover", vC, !1), document.addEventListener("drop", Ly, !1));
    return function () {
      sC && (document.removeEventListener("dragover", vC), document.removeEventListener("drop", Ly));
    };
  }, [zC, sC]);
  (0, fC.Oy)(function () {
    !ky && NC && zC.current && zC.current.focus();
    return function () {};
  }, [zC, NC, ky]);
  var ry = (0, fC.useCallback)(function (CC) {
    wC ? wC(CC) : console.error(CC);
  }, [wC]);
  var Oy = (0, fC.useCallback)(function (CC) {
    CC.preventDefault();
    CC.persist();
    Uy(CC);
    Ay.current = [].concat(Iy(Ay.current), [CC.target]);
    oC(CC) && Promise.resolve(gC(CC)).then(function (yC) {
      if (!lC(CC) || pC) {
        var IC = yC.length;
        var fC = IC > 0 && function (CC) {
          var yC = CC.files;
          var IC = CC.accept;
          var fC = CC.minSize;
          var ky = CC.maxSize;
          var gC = CC.multiple;
          var AC = CC.maxFiles;
          var my = CC.validator;
          return !(!gC && yC.length > 1 || gC && AC >= 1 && yC.length > AC) && yC.every(function (CC) {
            var yC = EC(uC(CC, IC), 1)[0];
            var gC = EC(DC(CC, fC, ky), 1)[0];
            var AC = my ? my(CC) : null;
            return yC && gC && !AC;
          });
        }({
          files: yC,
          accept: VC,
          minSize: my,
          maxSize: AC,
          multiple: XC,
          maxFiles: iy,
          validator: aC
        });
        nC({
          isDragAccept: fC,
          isDragReject: IC > 0 && !fC,
          isDragActive: !0,
          type: "setDraggedFiles"
        });
        LC && LC(CC);
      }
    }).catch(function (CC) {
      return ry(CC);
    });
  }, [gC, LC, ry, pC, VC, my, AC, XC, iy, aC]);
  var Sy = (0, fC.useCallback)(function (CC) {
    CC.preventDefault();
    CC.persist();
    Uy(CC);
    var yC = oC(CC);
    if (yC && CC.dataTransfer) {
      try {
        CC.dataTransfer.dropEffect = "Ly";
      } catch (IC) {}
    }
    yC && bC && bC(CC);
    return !1;
  }, [bC, pC]);
  var Ty = (0, fC.useCallback)(function (CC) {
    CC.preventDefault();
    CC.persist();
    Uy(CC);
    var yC = Ay.current.filter(function (CC) {
      return zC.current && zC.current.contains(CC);
    });
    var IC = yC.indexOf(CC.target);
    -1 !== IC && yC.splice(IC, 1);
    Ay.current = yC;
    yC.length > 0 || (nC({
      type: "setDraggedFiles",
      isDragActive: !1,
      isDragAccept: !1,
      isDragReject: !1
    }), oC(CC) && YC && YC(CC));
  }, [zC, YC, pC]);
  var Ny = (0, fC.useCallback)(function (CC, yC) {
    var IC = [];
    var fC = [];
    CC.forEach(function (CC) {
      var yC = fy(uC(CC, VC), 2);
      var ky = yC[0];
      var gC = yC[1];
      var XC = fy(DC(CC, my, AC), 2);
      var iy = XC[0];
      var LC = XC[1];
      var YC = aC ? aC(CC) : null;
      if (ky && iy && !YC) {
        IC.push(CC);
      } else {
        var bC = [gC, LC];
        YC && (bC = bC.concat(YC));
        fC.push({
          file: CC,
          errors: bC.filter(function (CC) {
            return CC;
          })
        });
      }
    });
    (!XC && IC.length > 1 || XC && iy >= 1 && IC.length > iy) && (IC.forEach(function (CC) {
      fC.push({
        file: CC,
        errors: [FC]
      });
    }), IC.splice(0));
    nC({
      acceptedFiles: IC,
      fileRejections: fC,
      type: "setFiles"
    });
    rC && rC(IC, fC, yC);
    fC.length > 0 && eC && eC(fC, yC);
    IC.length > 0 && GC && GC(IC, yC);
  }, [nC, XC, VC, my, AC, iy, rC, GC, eC, aC]);
  var sy = (0, fC.useCallback)(function (CC) {
    CC.preventDefault();
    CC.persist();
    Uy(CC);
    Ay.current = [];
    oC(CC) && Promise.resolve(gC(CC)).then(function (yC) {
      lC(CC) && !pC || Ny(yC, CC);
    }).catch(function (CC) {
      return ry(CC);
    });
    nC({
      type: "reset"
    });
  }, [gC, Ny, ry, pC]);
  var jI = (0, fC.useCallback)(function () {
    if (kI.current) {
      nC({
        type: "openDialog"
      });
      xC();
      var CC = {
        multiple: XC,
        types: WC
      };
      window.showOpenFilePicker(CC).then(function (CC) {
        return gC(CC);
      }).then(function (CC) {
        Ny(CC, null);
        nC({
          type: "closeDialog"
        });
      }).catch(function (CC) {
        var yC;
        (yC = CC) instanceof DOMException && ("AbortError" === yC.name || yC.code === yC.ABORT_ERR) ? (PC(CC), nC({
          type: "closeDialog"
        })) : !function (CC) {
          return CC instanceof DOMException && ("SecurityError" === CC.name || CC.code === CC.SECURITY_ERR);
        }(CC) ? ry(CC) : (kI.current = !1, BC.current ? (BC.current.value = null, BC.current.click()) : ry(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided.")));
      });
    } else {
      BC.current && (nC({
        type: "openDialog"
      }), xC(), BC.current.value = null, BC.current.click());
    }
  }, [nC, xC, PC, TC, Ny, ry, WC, XC]);
  var qy = (0, fC.useCallback)(function (CC) {
    zC.current && zC.current.isEqualNode(CC.target) && (" " !== CC.key && "Enter" !== CC.key && 32 !== CC.keyCode && 13 !== CC.keyCode || (CC.preventDefault(), jI()));
  }, [zC, jI]);
  var Ky = (0, fC.useCallback)(function () {
    nC({
      type: "focus"
    });
  }, []);
  var py = (0, fC.useCallback)(function () {
    nC({
      type: "blur"
    });
  }, []);
  var wy = (0, fC.useCallback)(function () {
    jy || (!function () {
      var CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.navigator.userAgent;
      return function (CC) {
        return -1 !== CC.indexOf("MSIE") || -1 !== CC.indexOf("Trident/");
      }(CC) || function (CC) {
        return -1 !== CC.indexOf("Edge/");
      }(CC);
    }() ? jI() : setTimeout(jI, 0));
  }, [jy, jI]);
  function Hy(CC) {
    return ky ? null : CC;
  }
  function ay(CC) {
    return qC ? null : Hy(CC);
  }
  function cy(CC) {
    return KC ? null : Hy(CC);
  }
  function Uy(CC) {
    pC && CC.stopPropagation();
  }
  var Ey = (0, fC.useMemo)(function () {
    return function () {
      var CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      var yC = CC.refKey;
      var IC = void 0 === yC ? "ref" : yC;
      var fC = CC.role;
      var gC = CC.onKeyDown;
      var AC = CC.onFocus;
      var my = CC.onBlur;
      var XC = CC.onClick;
      var iy = CC.onDragEnter;
      var LC = CC.onDragOver;
      var YC = CC.onDragLeave;
      var bC = CC.onDrop;
      var rC = iI(CC, Cy);
      return mI(mI(Xy({
        onKeyDown: ay(hC(gC, qy)),
        onFocus: ay(hC(AC, Ky)),
        onBlur: ay(hC(my, py)),
        onClick: Hy(hC(XC, wy)),
        onDragEnter: cy(hC(iy, Oy)),
        onDragOver: cy(hC(LC, Sy)),
        onDragLeave: cy(hC(YC, Ty)),
        onDrop: cy(hC(bC, sy)),
        role: "string" === typeof fC && "" !== fC ? fC : "presentation"
      }, IC, zC), ky || qC ? {} : {
        tabIndex: 0
      }), rC);
    };
  }, [zC, qy, Ky, py, wy, Oy, Sy, Ty, sy, qC, KC, ky]);
  var Vy = (0, fC.useCallback)(function (CC) {
    CC.stopPropagation();
  }, []);
  var Wy = (0, fC.useMemo)(function () {
    return function () {
      var CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      var yC = CC.refKey;
      var IC = void 0 === yC ? "ref" : yC;
      var fC = CC.onChange;
      var ky = CC.onClick;
      var gC = iI(CC, yy);
      return mI(mI({}, Xy({
        accept: VC,
        multiple: XC,
        type: "file",
        style: {
          display: "none"
        },
        onChange: Hy(hC(fC, sy)),
        onClick: Hy(hC(ky, Vy)),
        tabIndex: -1
      }, IC, BC)), gC);
    };
  }, [BC, IC, XC, sy, ky]);
  return mI(mI({}, JC), {}, {
    sL: QC && !ky,
    getRootProps: Ey,
    getInputProps: Wy,
    rootRef: zC,
    inputRef: BC,
    open: Hy(jI)
  });
}
function Gy(CC, yC) {
  switch (yC.type) {
    case "focus":
      return mI(mI({}, CC), {}, {
        sL: !0
      });
    case "blur":
      return mI(mI({}, CC), {}, {
        sL: !1
      });
    case "openDialog":
      return mI(mI({}, by), {}, {
        isFileDialogActive: !0
      });
    case "closeDialog":
      return mI(mI({}, CC), {}, {
        isFileDialogActive: !1
      });
    case "setDraggedFiles":
      return mI(mI({}, CC), {}, {
        isDragActive: yC.isDragActive,
        isDragAccept: yC.isDragAccept,
        isDragReject: yC.isDragReject
      });
    case "setFiles":
      return mI(mI({}, CC), {}, {
        acceptedFiles: yC.acceptedFiles,
        fileRejections: yC.fileRejections
      });
    case "reset":
      return mI({}, by);
    default:
      return CC;
  }
}
function ey() {}