export function i(CC, yC) {
  return !CC.hidden && (yC || !CC.isRewardedAd);
}
export function f(CC) {
  return "object" === typeof CC ? CC.option : CC;
}
export function e(CC, yC) {
  var IC;
  if ("dropdown" === (null === (IC = CC.userInput) || void 0 === IC ? void 0 : IC.type) && "object" === typeof CC.userInput.dropdownOptions[0]) {
    for (const IC of CC.userInput.dropdownOptions) {
      if (f(IC) === yC) {
        return "object" === typeof IC ? IC.cost : CC.cost;
      }
    }
    console.error("Didn't find matching option for dropdown item. Item:", CC, "input:", yC);
  }
  return CC.cost;
}