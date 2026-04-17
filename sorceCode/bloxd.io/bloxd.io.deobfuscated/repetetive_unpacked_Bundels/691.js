var fC = require("./675.js").iI;
function ky() {
  this.data = void 0;
}
function gC(CC, yC) {
  var IC = CC[0];
  var fC = CC[1];
  var ky = CC[2];
  var gC = CC[3];
  IC = my(IC, fC, ky, gC, yC[0], 7, -680876936);
  gC = my(gC, IC, fC, ky, yC[1], 12, -389564586);
  ky = my(ky, gC, IC, fC, yC[2], 17, 606105819);
  fC = my(fC, ky, gC, IC, yC[3], 22, -1044525330);
  IC = my(IC, fC, ky, gC, yC[4], 7, -176418897);
  gC = my(gC, IC, fC, ky, yC[5], 12, 1200080426);
  ky = my(ky, gC, IC, fC, yC[6], 17, -1473231341);
  fC = my(fC, ky, gC, IC, yC[7], 22, -45705983);
  IC = my(IC, fC, ky, gC, yC[8], 7, 1770035416);
  gC = my(gC, IC, fC, ky, yC[9], 12, -1958414417);
  ky = my(ky, gC, IC, fC, yC[10], 17, -42063);
  fC = my(fC, ky, gC, IC, yC[11], 22, -1990404162);
  IC = my(IC, fC, ky, gC, yC[12], 7, 1804603682);
  gC = my(gC, IC, fC, ky, yC[13], 12, -40341101);
  ky = my(ky, gC, IC, fC, yC[14], 17, -1502002290);
  IC = XC(IC, fC = my(fC, ky, gC, IC, yC[15], 22, 1236535329), ky, gC, yC[1], 5, -165796510);
  gC = XC(gC, IC, fC, ky, yC[6], 9, -1069501632);
  ky = XC(ky, gC, IC, fC, yC[11], 14, 643717713);
  fC = XC(fC, ky, gC, IC, yC[0], 20, -373897302);
  IC = XC(IC, fC, ky, gC, yC[5], 5, -701558691);
  gC = XC(gC, IC, fC, ky, yC[10], 9, 38016083);
  ky = XC(ky, gC, IC, fC, yC[15], 14, -660478335);
  fC = XC(fC, ky, gC, IC, yC[4], 20, -405537848);
  IC = XC(IC, fC, ky, gC, yC[9], 5, 568446438);
  gC = XC(gC, IC, fC, ky, yC[14], 9, -1019803690);
  ky = XC(ky, gC, IC, fC, yC[3], 14, -187363961);
  fC = XC(fC, ky, gC, IC, yC[8], 20, 1163531501);
  IC = XC(IC, fC, ky, gC, yC[13], 5, -1444681467);
  gC = XC(gC, IC, fC, ky, yC[2], 9, -51403784);
  ky = XC(ky, gC, IC, fC, yC[7], 14, 1735328473);
  IC = iy(IC, fC = XC(fC, ky, gC, IC, yC[12], 20, -1926607734), ky, gC, yC[5], 4, -378558);
  gC = iy(gC, IC, fC, ky, yC[8], 11, -2022574463);
  ky = iy(ky, gC, IC, fC, yC[11], 16, 1839030562);
  fC = iy(fC, ky, gC, IC, yC[14], 23, -35309556);
  IC = iy(IC, fC, ky, gC, yC[1], 4, -1530992060);
  gC = iy(gC, IC, fC, ky, yC[4], 11, 1272893353);
  ky = iy(ky, gC, IC, fC, yC[7], 16, -155497632);
  fC = iy(fC, ky, gC, IC, yC[10], 23, -1094730640);
  IC = iy(IC, fC, ky, gC, yC[13], 4, 681279174);
  gC = iy(gC, IC, fC, ky, yC[0], 11, -358537222);
  ky = iy(ky, gC, IC, fC, yC[3], 16, -722521979);
  fC = iy(fC, ky, gC, IC, yC[6], 23, 76029189);
  IC = iy(IC, fC, ky, gC, yC[9], 4, -640364487);
  gC = iy(gC, IC, fC, ky, yC[12], 11, -421815835);
  ky = iy(ky, gC, IC, fC, yC[15], 16, 530742520);
  IC = LC(IC, fC = iy(fC, ky, gC, IC, yC[2], 23, -995338651), ky, gC, yC[0], 6, -198630844);
  gC = LC(gC, IC, fC, ky, yC[7], 10, 1126891415);
  ky = LC(ky, gC, IC, fC, yC[14], 15, -1416354905);
  fC = LC(fC, ky, gC, IC, yC[5], 21, -57434055);
  IC = LC(IC, fC, ky, gC, yC[12], 6, 1700485571);
  gC = LC(gC, IC, fC, ky, yC[3], 10, -1894986606);
  ky = LC(ky, gC, IC, fC, yC[10], 15, -1051523);
  fC = LC(fC, ky, gC, IC, yC[1], 21, -2054922799);
  IC = LC(IC, fC, ky, gC, yC[8], 6, 1873313359);
  gC = LC(gC, IC, fC, ky, yC[15], 10, -30611744);
  ky = LC(ky, gC, IC, fC, yC[6], 15, -1560198380);
  fC = LC(fC, ky, gC, IC, yC[13], 21, 1309151649);
  IC = LC(IC, fC, ky, gC, yC[4], 6, -145523070);
  gC = LC(gC, IC, fC, ky, yC[11], 10, -1120210379);
  ky = LC(ky, gC, IC, fC, yC[2], 15, 718787259);
  fC = LC(fC, ky, gC, IC, yC[9], 21, -343485551);
  CC[0] = bC(IC, CC[0]);
  CC[1] = bC(fC, CC[1]);
  CC[2] = bC(ky, CC[2]);
  CC[3] = bC(gC, CC[3]);
}
function AC(CC, yC, IC, fC, ky, gC) {
  yC = bC(bC(yC, CC), bC(fC, gC));
  return bC(yC << ky | yC >>> 32 - ky, IC);
}
function my(CC, yC, IC, fC, ky, gC, my) {
  return AC(yC & IC | ~yC & fC, CC, yC, ky, gC, my);
}
function XC(CC, yC, IC, fC, ky, gC, my) {
  return AC(yC & fC | IC & ~fC, CC, yC, ky, gC, my);
}
function iy(CC, yC, IC, fC, ky, gC, my) {
  return AC(yC ^ IC ^ fC, CC, yC, ky, gC, my);
}
function LC(CC, yC, IC, fC, ky, gC, my) {
  return AC(IC ^ (yC | ~fC), CC, yC, ky, gC, my);
}
function YC(CC) {
  var yC;
  var IC = [];
  for (yC = 0; yC < 64; yC += 4) {
    IC[yC >> 2] = CC.charCodeAt(yC) + (CC.charCodeAt(yC + 1) << 8) + (CC.charCodeAt(yC + 2) << 16) + (CC.charCodeAt(yC + 3) << 24);
  }
  return IC;
}
function bC(CC, yC) {
  return CC + yC & 4294967295;
}
ky.prototype.end = function (CC) {
  this.data = CC;
};
ky.prototype.read = function () {
  return function (CC) {
    var yC;
    var IC = function (CC) {
      var yC;
      var IC = CC.length;
      var fC = [1732584193, -271733879, -1732584194, 271733878];
      for (yC = 64; yC <= CC.length; yC += 64) {
        gC(fC, YC(CC.substring(yC - 64, yC)));
      }
      CC = CC.substring(yC - 64);
      var ky = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      for (yC = 0; yC < CC.length; yC++) {
        ky[yC >> 2] |= CC.charCodeAt(yC) << (yC % 4 << 3);
      }
      ky[yC >> 2] |= 128 << (yC % 4 << 3);
      if (yC > 55) {
        gC(fC, ky);
        yC = 0;
        for (; yC < 16; yC++) {
          ky[yC] = 0;
        }
      }
      ky[14] = 8 * IC;
      gC(fC, ky);
      return fC;
    }(CC);
    var ky = fC.alloc ? fC.alloc(16) : new fC(16);
    for (yC = 0; yC < 4; yC++) {
      ky.writeIntLE(IC[yC], 4 * yC, 4);
    }
    return ky;
  }(this.data);
};
module.exports = {
  createHash: function (CC) {
    if ("md5" !== CC) {
      throw new Error("only md5 is supported in the browser");
    }
    return new ky();
  }
};