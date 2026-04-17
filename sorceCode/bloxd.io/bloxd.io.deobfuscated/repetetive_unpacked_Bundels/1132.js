Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.caesarCipher = exports.getCiphers = exports.getAsciiWithoutLetters = exports.getHumanReadableAscii = exports.getAsciiTable = exports.getAlphabet = exports.getRepeatedChars = exports.getRandomCiphers = exports.getCustomCiphers = exports.getUniformCiphers = exports.getUniqueRotations = exports.randomRotation = exports.util = void 0;
const fC = require("./1136.js");
exports.util = fC;
var ky = require("./1136.js");
function gC(CC, yC, IC) {
  let ky = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
  let gC = fC.findChar(CC, IC);
  let AC = ky ? gC - yC : gC + yC;
  AC < 0 && (AC = IC.length - Math.abs(AC));
  return AC;
}
function AC(CC) {
  let yC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 13;
  let IC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
  let ky = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
  const my = fC.getAlphabet();
  const XC = fC.getAsciiWithoutLetters();
  let iy = my.length;
  let LC = XC.length;
  let YC = "";
  let bC = 0;
  if ("string" != typeof CC) {
    throw new Error("Input must be type 'string'");
  }
  if (IC && IC.length) {
    return function (CC, yC) {
      let IC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const fC = yC.length;
      const ky = Boolean(yC && fC);
      let gC = "";
      if (ky && fC != CC.length) {
        throw new Error("Custom rotation array must be the same length as the input string");
      }
      for (let my = 0; my < fC; my++) {
        gC += AC(CC[my], yC[my], [], IC);
      }
      return gC;
    }(CC, IC, ky);
  }
  for (let fC = 0; fC < CC.length; fC++) {
    if (my.includes(CC[fC])) {
      bC = gC(CC[fC], yC, my, ky);
      let IC = my[bC % iy];
      YC += CC[fC].toLowerCase() === CC[fC] ? IC : IC.toUpperCase();
    } else {
      if (!XC.includes(CC[fC])) {
        continue;
      }
      bC = gC(CC[fC], yC, XC, ky);
      YC += XC[bC % LC];
    }
  }
  return YC;
}
Object.defineProperty(exports, "randomRotation", {
  enumerable: !0,
  get: function () {
    return ky.randomRotation;
  }
});
Object.defineProperty(exports, "getUniqueRotations", {
  enumerable: !0,
  get: function () {
    return ky.getUniqueRotations;
  }
});
Object.defineProperty(exports, "getUniformCiphers", {
  enumerable: !0,
  get: function () {
    return ky.getUniformCiphers;
  }
});
Object.defineProperty(exports, "getCustomCiphers", {
  enumerable: !0,
  get: function () {
    return ky.getCustomCiphers;
  }
});
Object.defineProperty(exports, "getRandomCiphers", {
  enumerable: !0,
  get: function () {
    return ky.getRandomCiphers;
  }
});
Object.defineProperty(exports, "getRepeatedChars", {
  enumerable: !0,
  get: function () {
    return ky.getRepeatedChars;
  }
});
Object.defineProperty(exports, "getAlphabet", {
  enumerable: !0,
  get: function () {
    return ky.getAlphabet;
  }
});
Object.defineProperty(exports, "getAsciiTable", {
  enumerable: !0,
  get: function () {
    return ky.getAsciiTable;
  }
});
Object.defineProperty(exports, "getHumanReadableAscii", {
  enumerable: !0,
  get: function () {
    return ky.getHumanReadableAscii;
  }
});
Object.defineProperty(exports, "getAsciiWithoutLetters", {
  enumerable: !0,
  get: function () {
    return ky.getAsciiWithoutLetters;
  }
});
Object.defineProperty(exports, "getCiphers", {
  enumerable: !0,
  get: function () {
    return ky.getCiphers;
  }
});
exports.caesarCipher = AC;