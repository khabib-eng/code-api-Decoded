export let d = function () {
  let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 21;
  return crypto.getRandomValues(new Uint8Array(CC)).reduce((CC, yC) => CC += (yC &= 63) < 36 ? yC.toString(36) : yC < 62 ? (yC - 26).toString(36).toUpperCase() : yC > 62 ? "-" : "_", "");
};