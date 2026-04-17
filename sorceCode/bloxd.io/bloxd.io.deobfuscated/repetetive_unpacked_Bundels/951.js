var fC = ["BigInt64Array", "BigUint64Array", "Float32Array", "Float64Array", "Int16Array", "Int32Array", "Int8Array", "Uint16Array", "Uint32Array", "Uint8Array", "Uint8ClampedArray"];
var ky = "undefined" === typeof globalThis ? require.g : globalThis;
module.exports = function () {
  for (var CC = [], yC = 0; yC < fC.length; yC++) {
    "function" === typeof ky[fC[yC]] && (CC[CC.length] = fC[yC]);
  }
  return CC;
};