var js = require("./85.js");
var js2 = require("./91.js");
var v = require("./230.js").HU;
var v2 = new Array(16);
function f() {
  js2.call(this, 64);
  this._a = 1732584193;
  this._b = 4023233417;
  this._c = 2562383102;
  this._d = 271733878;
}
function f2(p, p2) {
  return p << p2 | p >>> 32 - p2;
}
function f3(p3, p4, p5, p6, p7, p8, p9) {
  return f2(p3 + (p4 & p5 | ~p4 & p6) + p7 + p8 | 0, p9) + p4 | 0;
}
function f4(p10, p11, p12, p13, p14, p15, p16) {
  return f2(p10 + (p11 & p13 | p12 & ~p13) + p14 + p15 | 0, p16) + p11 | 0;
}
function f5(p17, p18, p19, p20, p21, p22, p23) {
  return f2(p17 + (p18 ^ p19 ^ p20) + p21 + p22 | 0, p23) + p18 | 0;
}
function f6(p24, p25, p26, p27, p28, p29, p30) {
  return f2(p24 + (p26 ^ (p25 | ~p27)) + p28 + p29 | 0, p30) + p25 | 0;
}
js(f, js2);
f.prototype._update = function () {
  var vV2 = v2;
  for (var vLN0 = 0; vLN0 < 16; ++vLN0) {
    vV2[vLN0] = this._block.readInt32LE(vLN0 * 4);
  }
  var v3 = this._a;
  var v4 = this._b;
  var v5 = this._c;
  var v6 = this._d;
  v3 = f3(v3, v4, v5, v6, vV2[0], 3614090360, 7);
  v6 = f3(v6, v3, v4, v5, vV2[1], 3905402710, 12);
  v5 = f3(v5, v6, v3, v4, vV2[2], 606105819, 17);
  v4 = f3(v4, v5, v6, v3, vV2[3], 3250441966, 22);
  v3 = f3(v3, v4, v5, v6, vV2[4], 4118548399, 7);
  v6 = f3(v6, v3, v4, v5, vV2[5], 1200080426, 12);
  v5 = f3(v5, v6, v3, v4, vV2[6], 2821735955, 17);
  v4 = f3(v4, v5, v6, v3, vV2[7], 4249261313, 22);
  v3 = f3(v3, v4, v5, v6, vV2[8], 1770035416, 7);
  v6 = f3(v6, v3, v4, v5, vV2[9], 2336552879, 12);
  v5 = f3(v5, v6, v3, v4, vV2[10], 4294925233, 17);
  v4 = f3(v4, v5, v6, v3, vV2[11], 2304563134, 22);
  v3 = f3(v3, v4, v5, v6, vV2[12], 1804603682, 7);
  v6 = f3(v6, v3, v4, v5, vV2[13], 4254626195, 12);
  v5 = f3(v5, v6, v3, v4, vV2[14], 2792965006, 17);
  v3 = f4(v3, v4 = f3(v4, v5, v6, v3, vV2[15], 1236535329, 22), v5, v6, vV2[1], 4129170786, 5);
  v6 = f4(v6, v3, v4, v5, vV2[6], 3225465664, 9);
  v5 = f4(v5, v6, v3, v4, vV2[11], 643717713, 14);
  v4 = f4(v4, v5, v6, v3, vV2[0], 3921069994, 20);
  v3 = f4(v3, v4, v5, v6, vV2[5], 3593408605, 5);
  v6 = f4(v6, v3, v4, v5, vV2[10], 38016083, 9);
  v5 = f4(v5, v6, v3, v4, vV2[15], 3634488961, 14);
  v4 = f4(v4, v5, v6, v3, vV2[4], 3889429448, 20);
  v3 = f4(v3, v4, v5, v6, vV2[9], 568446438, 5);
  v6 = f4(v6, v3, v4, v5, vV2[14], 3275163606, 9);
  v5 = f4(v5, v6, v3, v4, vV2[3], 4107603335, 14);
  v4 = f4(v4, v5, v6, v3, vV2[8], 1163531501, 20);
  v3 = f4(v3, v4, v5, v6, vV2[13], 2850285829, 5);
  v6 = f4(v6, v3, v4, v5, vV2[2], 4243563512, 9);
  v5 = f4(v5, v6, v3, v4, vV2[7], 1735328473, 14);
  v3 = f5(v3, v4 = f4(v4, v5, v6, v3, vV2[12], 2368359562, 20), v5, v6, vV2[5], 4294588738, 4);
  v6 = f5(v6, v3, v4, v5, vV2[8], 2272392833, 11);
  v5 = f5(v5, v6, v3, v4, vV2[11], 1839030562, 16);
  v4 = f5(v4, v5, v6, v3, vV2[14], 4259657740, 23);
  v3 = f5(v3, v4, v5, v6, vV2[1], 2763975236, 4);
  v6 = f5(v6, v3, v4, v5, vV2[4], 1272893353, 11);
  v5 = f5(v5, v6, v3, v4, vV2[7], 4139469664, 16);
  v4 = f5(v4, v5, v6, v3, vV2[10], 3200236656, 23);
  v3 = f5(v3, v4, v5, v6, vV2[13], 681279174, 4);
  v6 = f5(v6, v3, v4, v5, vV2[0], 3936430074, 11);
  v5 = f5(v5, v6, v3, v4, vV2[3], 3572445317, 16);
  v4 = f5(v4, v5, v6, v3, vV2[6], 76029189, 23);
  v3 = f5(v3, v4, v5, v6, vV2[9], 3654602809, 4);
  v6 = f5(v6, v3, v4, v5, vV2[12], 3873151461, 11);
  v5 = f5(v5, v6, v3, v4, vV2[15], 530742520, 16);
  v3 = f6(v3, v4 = f5(v4, v5, v6, v3, vV2[2], 3299628645, 23), v5, v6, vV2[0], 4096336452, 6);
  v6 = f6(v6, v3, v4, v5, vV2[7], 1126891415, 10);
  v5 = f6(v5, v6, v3, v4, vV2[14], 2878612391, 15);
  v4 = f6(v4, v5, v6, v3, vV2[5], 4237533241, 21);
  v3 = f6(v3, v4, v5, v6, vV2[12], 1700485571, 6);
  v6 = f6(v6, v3, v4, v5, vV2[3], 2399980690, 10);
  v5 = f6(v5, v6, v3, v4, vV2[10], 4293915773, 15);
  v4 = f6(v4, v5, v6, v3, vV2[1], 2240044497, 21);
  v3 = f6(v3, v4, v5, v6, vV2[8], 1873313359, 6);
  v6 = f6(v6, v3, v4, v5, vV2[15], 4264355552, 10);
  v5 = f6(v5, v6, v3, v4, vV2[6], 2734768916, 15);
  v4 = f6(v4, v5, v6, v3, vV2[13], 1309151649, 21);
  v3 = f6(v3, v4, v5, v6, vV2[4], 4149444226, 6);
  v6 = f6(v6, v3, v4, v5, vV2[11], 3174756917, 10);
  v5 = f6(v5, v6, v3, v4, vV2[2], 718787259, 15);
  v4 = f6(v4, v5, v6, v3, vV2[9], 3951481745, 21);
  this._a = this._a + v3 | 0;
  this._b = this._b + v4 | 0;
  this._c = this._c + v5 | 0;
  this._d = this._d + v6 | 0;
};
f.prototype._digest = function () {
  this._block[this._blockOffset++] = 128;
  if (this._blockOffset > 56) {
    this._block.fill(0, this._blockOffset, 64);
    this._update();
    this._blockOffset = 0;
  }
  this._block.fill(0, this._blockOffset, 56);
  this._block.writeUInt32LE(this._length[0], 56);
  this._block.writeUInt32LE(this._length[1], 60);
  this._update();
  var v7 = v.allocUnsafe(16);
  v7.writeInt32LE(this._a, 0);
  v7.writeInt32LE(this._b, 4);
  v7.writeInt32LE(this._c, 8);
  v7.writeInt32LE(this._d, 12);
  return v7;
};
module.exports = f;