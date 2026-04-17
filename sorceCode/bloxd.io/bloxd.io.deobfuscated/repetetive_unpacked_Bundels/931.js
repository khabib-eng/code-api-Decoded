var fC = require("./842.js");
function ky() {
  return !!fC;
}
ky.hasArrayLengthDefineBug = function () {
  if (!fC) {
    return null;
  }
  try {
    return 1 !== fC([], "length", {
      value: 1
    }).length;
  } catch (CC) {
    return !0;
  }
};
module.exports = ky;