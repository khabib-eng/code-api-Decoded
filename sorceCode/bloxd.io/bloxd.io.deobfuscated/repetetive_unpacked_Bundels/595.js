var fC = require("./602.js");
var ky = require("./589.js");
var gC = require("./66.js");
var AC = require("./442.js");
var my = require("./439.js");
export const e = 864e5;
export function h(CC) {
  return !(0, gC.w)(CC) && Date.now() - CC < e;
}
const LC = Object.values(ky.b.socialServerPorts);
if (new Set(LC).size !== LC.length) {
  throw new Error("Duplicate Social Server ports detected. Please use unique ports for each Social Server in socialServers.");
}
export const i = 100;
export const m = 100;
export function q(CC) {
  const yC = Object.keys(ky.b.socialServerPorts).map(CC => Number(CC));
  return yC[(0, fC.o)(CC, 0, yC.length)];
}
export function u(CC) {
  return (0, AC.x)() ? "http://".concat(my.e.localDomain, ":").concat(ky.b.socialServerPorts[CC]) : "https://social".concat(CC, ".bloxd.io");
}
export function y(CC) {
  return CC.replace(/[^0-9a-zA-Z]/g, "").toUpperCase();
}
const OC = 3;
export const n = 6;
export function z(CC) {
  const yC = [];
  if ((0, gC.w)(CC)) {
    yC.push("Party Code is empty");
    return yC;
  }
  CC.length < OC && yC.push("Party Code is too short, must be at least 3 digits long");
  CC.length > n && yC.push("Party Code is too long, must be at most 6 digits long");
  CC.match(/^[0-9A-Z]+$/) || yC.push("Party Code must only contain uppercase alphanumeric characters");
  const IC = Number.parseInt(CC[0], 36);
  Object.keys(ky.b.socialServerPorts).includes(String(IC)) || yC.push("First digit of Party Code must be valid Social Server index");
  return yC;
}
export function c(CC) {
  let yC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
  const IC = Object.keys(ky.b.socialServerPorts);
  const gC = (0, fC.o)(CC, 0, Object.keys(ky.b.socialServerPorts).length);
  const AC = parseInt(IC[gC.toString()]).toString(36).toUpperCase();
  const my = (0, fC.o)(CC, 0, 36 ** (yC - 1)).toString(36).toUpperCase();
  return "".concat(AC).concat(my);
}