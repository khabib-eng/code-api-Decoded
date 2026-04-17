const fC = require("./422.js").e;
export function g(CC) {
  return (CC >>> 0).toString(2).padStart(32, "0");
}
export function q(CC, yC, IC) {
  return CC * (1 - IC) + yC * IC;
}
export let d;
export function f(CC, yC, IC) {
  return Math.min(Math.max(CC, yC), IC);
}
export function h(CC) {
  return CC * (Math.PI / 180);
}
export function l(CC) {
  return .48 + .5 * CC;
}
export function j(CC) {
  const yC = fC.Zy / 2;
  return l(CC) + yC;
}
export function o(CC, yC, IC) {
  if (yC === IC) {
    return yC;
  }
  let fC = 0;
  let ky = 0;
  if (CC.length > 0) {
    for (; ky < CC.length;) {
      fC = (fC << 5) - fC + CC.charCodeAt(ky++) | 0;
    }
  }
  return Math.abs(fC) % (IC - yC) + yC;
}
!function (CC) {
  function yC(CC) {
    return -Math.expm1(-CC);
  }
  CC.friction = function (CC) {
    return Math.exp(-CC);
  };
  CC.lerpWeight = yC;
  CC.wy = function (CC, IC, fC) {
    return q(CC, IC, yC(fC));
  };
}(d || (d = {}));