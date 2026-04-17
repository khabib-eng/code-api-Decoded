import * as fC from "./105.js";
import * as ky from "./602.js";
export const minNameLength = 4;
export const maxNameLength = 21;
export const randomNameAdjectiveLength = 7;
export const randomNameNounLength = 7;
export const randomNameNumberLength = 7;
export function getRandomName() {
  const CC = (0, fC.Sb)(fC.od);
  const yC = (0, fC.Sb)(fC.rd);
  const IC = Math.floor(Math.random() * Math.pow(10, randomNameNumberLength));
  return "".concat(CC).concat(yC).concat(IC);
}
export function getRandomNameSuffix() {
  return new Array(randomNameNumberLength).fill(0).map(() => Math.floor(10 * Math.random())).join("");
}
export function nameNeedsStandardising(CC) {
  return CC !== standardiseName(CC);
}
export function standardiseName(CC) {
  return CC.replace(/\W/g, "");
}
export function getNameForDisplayInClient(CC) {
  return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? function (CC) {
    if (!CC) {
      return CC;
    }
    const yC = Math.ceil(CC.length / 2);
    const IC = CC.substring(0, yC);
    const gC = CC.substring(yC);
    const AC = (0, ky.o)(IC, 0, fC.od.length);
    const my = (0, ky.o)(gC, 0, fC.rd.length);
    return "".concat(fC.od[AC]).concat(fC.rd[my]);
  }(CC) : CC;
}
fC.od.forEach(CC => {
  if (CC.length > randomNameAdjectiveLength) {
    throw new Error("random name adjective ".concat(CC, " is too long"));
  }
});
fC.rd.forEach(CC => {
  if (CC.length > randomNameNounLength) {
    throw new Error("random name noun ".concat(CC, " is too long"));
  }
});