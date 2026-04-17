var fC = require("./1283.js").default;
const ky = require("./1309.js");
const gC = ["Failed to fetch", "NetworkError when attempting to fetch resource.", "The Internet connection appears to be offline.", "Network request failed"];
class AC extends Error {
  constructor(CC) {
    super();
    CC instanceof Error ? (this.originalError = CC, {
      message: CC
    } = CC) : (this.originalError = new Error(CC), this.originalError.stack = this.stack);
    this.name = "AbortError";
    this.message = CC;
  }
}
const my = (CC, yC) => new Promise((IC, my) => {
  yC = fC({
    onFailedAttempt: () => {},
    retries: 10
  }, yC);
  const XC = ky.operation(yC);
  XC.attempt(async fC => {
    try {
      IC(await CC(fC));
    } catch (iy) {
      if (!(iy instanceof Error)) {
        return void my(new TypeError('Non-error was thrown: "'.concat(iy, '". You should only throw errors.')));
      }
      if (iy instanceof AC) {
        XC.stop();
        my(iy.originalError);
      } else {
        if (iy instanceof TypeError && (ky = iy.message, !gC.includes(ky))) {
          XC.stop();
          my(iy);
        } else {
          ((CC, yC, IC) => {
            const fC = IC.retries - (yC - 1);
            CC.attemptNumber = yC;
            CC.retriesLeft = fC;
          })(iy, fC, yC);
          try {
            await yC.onFailedAttempt(iy);
          } catch (iy) {
            return void my(iy);
          }
          XC.retry(iy) || my(XC.mainError());
        }
      }
    }
    var ky;
  });
});
module.exports = my;
module.exports.default = my;
module.exports.AbortError = AC;