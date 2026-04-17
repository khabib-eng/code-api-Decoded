export function c(CC) {
  let yC = b[CC];
  const IC = CC.split(" ");
  IC.splice(IC.length - 2, 2);
  if (IC.length > 0) {
    const CC = IC.join(" ");
    const fC = ky[CC];
    fC && (yC = fC);
  }
  return yC;
}
const ky = {
  Black: [29, 29, 33],
  Red: [176, 46, 38],
  Green: [94, 124, 22],
  Brown: [131, 84, 50],
  Blue: [60, 68, 170],
  Purple: [137, 50, 184],
  Cyan: [22, 156, 156],
  "Light Gray": [157, 157, 151],
  Gray: [71, 79, 82],
  Pink: [243, 139, 170],
  Lime: [128, 199, 31],
  Yellow: [254, 216, 61],
  "Light Blue": [58, 179, 218],
  Magenta: [199, 78, 189],
  Orange: [249, 128, 29],
  White: [249, 255, 254]
};
export const b = {
  "Wood Helmet": [163, 120, 69],
  "Wood Chestplate": [163, 120, 69],
  "Wood Leggings": [163, 120, 69],
  "Wood Boots": [163, 120, 69],
  "Wood Gauntlets": [163, 120, 69]
};