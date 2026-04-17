function yC(CC, yC, IC) {
  for (var fC = 0, ky = 0, gC = IC.length; ky < gC; ky++) {
    (fC = IC.charCodeAt(ky)) < 128 ? CC.setUint8(yC++, fC) : fC < 2048 ? (CC.setUint8(yC++, 192 | fC >> 6), CC.setUint8(yC++, 128 | 63 & fC)) : fC < 55296 || fC >= 57344 ? (CC.setUint8(yC++, 224 | fC >> 12), CC.setUint8(yC++, 128 | fC >> 6 & 63), CC.setUint8(yC++, 128 | 63 & fC)) : (ky++, fC = 65536 + ((1023 & fC) << 10 | 1023 & IC.charCodeAt(ky)), CC.setUint8(yC++, 240 | fC >> 18), CC.setUint8(yC++, 128 | fC >> 12 & 63), CC.setUint8(yC++, 128 | fC >> 6 & 63), CC.setUint8(yC++, 128 | 63 & fC));
  }
}
function IC(CC, yC, fC) {
  var ky = typeof fC;
  var gC = 0;
  var AC = 0;
  var my = 0;
  var XC = 0;
  var iy = 0;
  var LC = 0;
  if ("string" === ky) {
    iy = function (CC) {
      for (var yC = 0, IC = 0, fC = 0, ky = CC.length; fC < ky; fC++) {
        (yC = CC.charCodeAt(fC)) < 128 ? IC += 1 : yC < 2048 ? IC += 2 : yC < 55296 || yC >= 57344 ? IC += 3 : (fC++, IC += 4);
      }
      return IC;
    }(fC);
    if (iy < 32) {
      CC.push(160 | iy);
      LC = 1;
    } else {
      if (iy < 256) {
        CC.push(217, iy);
        LC = 2;
      } else {
        if (iy < 65536) {
          CC.push(218, iy >> 8, iy);
          LC = 3;
        } else {
          if (!(iy < 4294967296)) {
            throw new Error("String too long");
          }
          CC.push(219, iy >> 24, iy >> 16, iy >> 8, iy);
          LC = 5;
        }
      }
    }
    yC.push({
      _str: fC,
      _length: iy,
      _offset: CC.length
    });
    return LC + iy;
  }
  if ("number" === ky) {
    return Math.floor(fC) === fC && isFinite(fC) ? fC >= 0 ? fC < 128 ? (CC.push(fC), 1) : fC < 256 ? (CC.push(204, fC), 2) : fC < 65536 ? (CC.push(205, fC >> 8, fC), 3) : fC < 4294967296 ? (CC.push(206, fC >> 24, fC >> 16, fC >> 8, fC), 5) : (my = fC / Math.pow(2, 32) | 0, XC = fC >>> 0, CC.push(207, my >> 24, my >> 16, my >> 8, my, XC >> 24, XC >> 16, XC >> 8, XC), 9) : fC >= -32 ? (CC.push(fC), 1) : fC >= -128 ? (CC.push(208, fC), 2) : fC >= -32768 ? (CC.push(209, fC >> 8, fC), 3) : fC >= -2147483648 ? (CC.push(210, fC >> 24, fC >> 16, fC >> 8, fC), 5) : (my = Math.floor(fC / Math.pow(2, 32)), XC = fC >>> 0, CC.push(211, my >> 24, my >> 16, my >> 8, my, XC >> 24, XC >> 16, XC >> 8, XC), 9) : (CC.push(203), yC.push({
      _float: fC,
      _length: 8,
      _offset: CC.length
    }), 9);
  }
  if ("object" === ky) {
    if (null === fC) {
      CC.push(192);
      return 1;
    }
    if (Array.isArray(fC)) {
      if ((iy = fC.length) < 16) {
        CC.push(144 | iy);
        LC = 1;
      } else {
        if (iy < 65536) {
          CC.push(220, iy >> 8, iy);
          LC = 3;
        } else {
          if (!(iy < 4294967296)) {
            throw new Error("Array too large");
          }
          CC.push(221, iy >> 24, iy >> 16, iy >> 8, iy);
          LC = 5;
        }
      }
      for (gC = 0; gC < iy; gC++) {
        LC += IC(CC, yC, fC[gC]);
      }
      return LC;
    }
    if (fC instanceof Date) {
      var YC = fC.getTime();
      var bC = Math.floor(YC / 1e3);
      var rC = 1e6 * (YC - 1e3 * bC);
      return bC >= 0 && rC >= 0 && bC <= 17179869183 ? 0 === rC && bC <= 4294967295 ? (CC.push(214, 255, bC >> 24, bC >> 16, bC >> 8, bC), 6) : (my = bC / 4294967296, XC = 4294967295 & bC, CC.push(215, 255, rC >> 22, rC >> 14, rC >> 6, my, XC >> 24, XC >> 16, XC >> 8, XC), 10) : (my = Math.floor(bC / 4294967296), XC = bC >>> 0, CC.push(199, 12, 255, rC >> 24, rC >> 16, rC >> 8, rC, my >> 24, my >> 16, my >> 8, my, XC >> 24, XC >> 16, XC >> 8, XC), 15);
    }
    if (fC instanceof ArrayBuffer) {
      if ((iy = fC.byteLength) < 256) {
        CC.push(196, iy);
        LC = 2;
      } else {
        if (iy < 65536) {
          CC.push(197, iy >> 8, iy);
          LC = 3;
        } else {
          if (!(iy < 4294967296)) {
            throw new Error("Buffer too large");
          }
          CC.push(198, iy >> 24, iy >> 16, iy >> 8, iy);
          LC = 5;
        }
      }
      yC.push({
        _bin: fC,
        _length: iy,
        _offset: CC.length
      });
      return LC + iy;
    }
    if ("function" === typeof fC.toJSON) {
      return IC(CC, yC, fC.toJSON());
    }
    var GC = [];
    var eC = "";
    var OC = Object.keys(fC);
    gC = 0;
    AC = OC.length;
    for (; gC < AC; gC++) {
      void 0 !== fC[eC = OC[gC]] && "function" !== typeof fC[eC] && GC.push(eC);
    }
    if ((iy = GC.length) < 16) {
      CC.push(128 | iy);
      LC = 1;
    } else {
      if (iy < 65536) {
        CC.push(222, iy >> 8, iy);
        LC = 3;
      } else {
        if (!(iy < 4294967296)) {
          throw new Error("Object too large");
        }
        CC.push(223, iy >> 24, iy >> 16, iy >> 8, iy);
        LC = 5;
      }
    }
    for (gC = 0; gC < iy; gC++) {
      LC += IC(CC, yC, eC = GC[gC]);
      LC += IC(CC, yC, fC[eC]);
    }
    return LC;
  }
  if ("boolean" === ky) {
    CC.push(fC ? 195 : 194);
    return 1;
  }
  if ("undefined" === ky) {
    CC.push(192);
    return 1;
  }
  if ("function" === typeof fC.toJSON) {
    return IC(CC, yC, fC.toJSON());
  }
  throw new Error("Could not encode");
}
module.exports = function (CC) {
  var fC = [];
  var ky = [];
  var gC = IC(fC, ky, CC);
  var AC = new ArrayBuffer(gC);
  var my = new DataView(AC);
  var XC = 0;
  var iy = 0;
  var LC = -1;
  ky.length > 0 && (LC = ky[0]._offset);
  for (var YC, bC = 0, rC = 0, GC = 0, eC = fC.length; GC < eC; GC++) {
    my.setUint8(iy + GC, fC[GC]);
    if (GC + 1 === LC) {
      bC = (YC = ky[XC])._length;
      rC = iy + LC;
      if (YC._bin) {
        for (var OC = new Uint8Array(YC._bin), SC = 0; SC < bC; SC++) {
          my.setUint8(rC + SC, OC[SC]);
        }
      } else {
        YC._str ? yC(my, rC, YC._str) : void 0 !== YC._float && my.setFloat64(rC, YC._float);
      }
      iy += bC;
      ky[++XC] && (LC = ky[XC]._offset);
    }
  }
  return AC;
};