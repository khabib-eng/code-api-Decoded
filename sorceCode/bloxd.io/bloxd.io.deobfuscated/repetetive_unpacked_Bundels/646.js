function yC(CC) {
  this._offset = 0;
  if (CC instanceof ArrayBuffer) {
    this._buffer = CC;
    this._view = new DataView(this._buffer);
  } else {
    if (!ArrayBuffer.isView(CC)) {
      throw new Error("Invalid argument");
    }
    this._buffer = CC.buffer;
    this._view = new DataView(this._buffer, CC.byteOffset, CC.byteLength);
  }
}
yC.prototype._array = function (CC) {
  for (var yC = new Array(CC), IC = 0; IC < CC; IC++) {
    yC[IC] = this._parse();
  }
  return yC;
};
yC.prototype._map = function (CC) {
  for (var yC = {}, IC = 0; IC < CC; IC++) {
    yC[this._parse()] = this._parse();
  }
  return yC;
};
yC.prototype._str = function (CC) {
  var yC = function (CC, yC, IC) {
    for (var fC = "", ky = 0, gC = yC, AC = yC + IC; gC < AC; gC++) {
      var my = CC.getUint8(gC);
      if (0 !== (128 & my)) {
        if (192 !== (224 & my)) {
          if (224 !== (240 & my)) {
            if (240 !== (248 & my)) {
              throw new Error("Invalid byte " + my.toString(16));
            }
            (ky = (7 & my) << 18 | (63 & CC.getUint8(++gC)) << 12 | (63 & CC.getUint8(++gC)) << 6 | 63 & CC.getUint8(++gC)) >= 65536 ? (ky -= 65536, fC += String.fromCharCode(55296 + (ky >>> 10), 56320 + (1023 & ky))) : fC += String.fromCharCode(ky);
          } else {
            fC += String.fromCharCode((15 & my) << 12 | (63 & CC.getUint8(++gC)) << 6 | 63 & CC.getUint8(++gC));
          }
        } else {
          fC += String.fromCharCode((31 & my) << 6 | 63 & CC.getUint8(++gC));
        }
      } else {
        fC += String.fromCharCode(my);
      }
    }
    return fC;
  }(this._view, this._offset, CC);
  this._offset += CC;
  return yC;
};
yC.prototype._bin = function (CC) {
  var yC = this._buffer.slice(this._offset, this._offset + CC);
  this._offset += CC;
  return yC;
};
yC.prototype._parse = function () {
  var CC;
  var yC = this._view.getUint8(this._offset++);
  var IC = 0;
  var fC = 0;
  var ky = 0;
  var gC = 0;
  if (yC < 192) {
    return yC < 128 ? yC : yC < 144 ? this._map(15 & yC) : yC < 160 ? this._array(15 & yC) : this._str(31 & yC);
  }
  if (yC > 223) {
    return -1 * (255 - yC + 1);
  }
  switch (yC) {
    case 192:
      return null;
    case 194:
      return !1;
    case 195:
      return !0;
    case 196:
      IC = this._view.getUint8(this._offset);
      this._offset += 1;
      return this._bin(IC);
    case 197:
      IC = this._view.getUint16(this._offset);
      this._offset += 2;
      return this._bin(IC);
    case 198:
      IC = this._view.getUint32(this._offset);
      this._offset += 4;
      return this._bin(IC);
    case 199:
      IC = this._view.getUint8(this._offset);
      fC = this._view.getInt8(this._offset + 1);
      this._offset += 2;
      if (-1 === fC) {
        var AC = this._view.getUint32(this._offset);
        ky = this._view.getInt32(this._offset + 4);
        gC = this._view.getUint32(this._offset + 8);
        this._offset += 12;
        return new Date(1e3 * (4294967296 * ky + gC) + AC / 1e6);
      }
      return [fC, this._bin(IC)];
    case 200:
      IC = this._view.getUint16(this._offset);
      fC = this._view.getInt8(this._offset + 2);
      this._offset += 3;
      return [fC, this._bin(IC)];
    case 201:
      IC = this._view.getUint32(this._offset);
      fC = this._view.getInt8(this._offset + 4);
      this._offset += 5;
      return [fC, this._bin(IC)];
    case 202:
      CC = this._view.getFloat32(this._offset);
      this._offset += 4;
      return CC;
    case 203:
      CC = this._view.getFloat64(this._offset);
      this._offset += 8;
      return CC;
    case 204:
      CC = this._view.getUint8(this._offset);
      this._offset += 1;
      return CC;
    case 205:
      CC = this._view.getUint16(this._offset);
      this._offset += 2;
      return CC;
    case 206:
      CC = this._view.getUint32(this._offset);
      this._offset += 4;
      return CC;
    case 207:
      ky = this._view.getUint32(this._offset) * Math.pow(2, 32);
      gC = this._view.getUint32(this._offset + 4);
      this._offset += 8;
      return ky + gC;
    case 208:
      CC = this._view.getInt8(this._offset);
      this._offset += 1;
      return CC;
    case 209:
      CC = this._view.getInt16(this._offset);
      this._offset += 2;
      return CC;
    case 210:
      CC = this._view.getInt32(this._offset);
      this._offset += 4;
      return CC;
    case 211:
      ky = this._view.getInt32(this._offset) * Math.pow(2, 32);
      gC = this._view.getUint32(this._offset + 4);
      this._offset += 8;
      return ky + gC;
    case 212:
      fC = this._view.getInt8(this._offset);
      this._offset += 1;
      return 0 === fC ? void (this._offset += 1) : [fC, this._bin(1)];
    case 213:
      fC = this._view.getInt8(this._offset);
      this._offset += 1;
      return [fC, this._bin(2)];
    case 214:
      fC = this._view.getInt8(this._offset);
      this._offset += 1;
      return -1 === fC ? (CC = this._view.getUint32(this._offset), this._offset += 4, new Date(1e3 * CC)) : [fC, this._bin(4)];
    case 215:
      fC = this._view.getInt8(this._offset);
      this._offset += 1;
      return 0 === fC ? (ky = this._view.getInt32(this._offset) * Math.pow(2, 32), gC = this._view.getUint32(this._offset + 4), this._offset += 8, new Date(ky + gC)) : -1 === fC ? (ky = this._view.getUint32(this._offset), gC = this._view.getUint32(this._offset + 4), this._offset += 8, new Date(1e3 * (4294967296 * (3 & ky) + gC) + (ky >>> 2) / 1e6)) : [fC, this._bin(8)];
    case 216:
      fC = this._view.getInt8(this._offset);
      this._offset += 1;
      return [fC, this._bin(16)];
    case 217:
      IC = this._view.getUint8(this._offset);
      this._offset += 1;
      return this._str(IC);
    case 218:
      IC = this._view.getUint16(this._offset);
      this._offset += 2;
      return this._str(IC);
    case 219:
      IC = this._view.getUint32(this._offset);
      this._offset += 4;
      return this._str(IC);
    case 220:
      IC = this._view.getUint16(this._offset);
      this._offset += 2;
      return this._array(IC);
    case 221:
      IC = this._view.getUint32(this._offset);
      this._offset += 4;
      return this._array(IC);
    case 222:
      IC = this._view.getUint16(this._offset);
      this._offset += 2;
      return this._map(IC);
    case 223:
      IC = this._view.getUint32(this._offset);
      this._offset += 4;
      return this._map(IC);
  }
  throw new Error("Could not parse");
};
module.exports = function (CC) {
  var IC = new yC(CC);
  var fC = IC._parse();
  if (IC._offset !== CC.byteLength) {
    throw new Error(CC.byteLength - IC._offset + " trailing bytes");
  }
  return fC;
};