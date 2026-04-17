export const e = {
  Wood: 0,
  Iron: 1,
  Gold: 2,
  Diamond: 3,
  Fur: 4
};
const ky = {
  Spiked: "Fur"
};
export const b = 64;
export function i(CC) {
  return "".concat(CC.toLowerCase(), "_armour_2");
}
export function k(CC) {
  var yC;
  const IC = null === CC || void 0 === CC ? void 0 : CC.split(" ");
  if (!IC) {
    return;
  }
  const fC = IC[IC.length - 2];
  return null !== (yC = ky[fC]) && void 0 !== yC ? yC : fC;
}