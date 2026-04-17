var fC = require("./1458.js");
var ky = require("./1449.js");
var gC = require("./447.js");
var AC = require("./14.js");
var my = require("./49.js");
var XC = require("./534.js");
export function o(CC) {
  AC.b.get("router").navigate(CC + gC.e.getSearchParamsString());
}
export function t() {
  const CC = (0, fC.v)();
  return (yC, IC) => {
    CC(GC(yC), IC);
  };
}
export function e(CC) {
  let {
    children: yC,
    to: IC
  } = CC;
  return (0, XC.jsx)(ky.e, {
    to: GC(IC),
    children: yC
  });
}
export function h(CC) {
  let {
    to: yC
  } = CC;
  return (0, XC.jsx)(fC.e, {
    to: GC(yC)
  });
}
export function p() {
  for (const CC of OC.reverse()) {
    if ("/" === CC) {
      return void o("/");
    }
    if ("/custom-games" === CC) {
      return void o("/custom-games");
    }
  }
  o("/");
}
function GC(CC) {
  return "string" === typeof CC ? CC + gC.e.getSearchParamsString() : "number" === typeof CC ? -1 === CC && 1 === OC.length && OC[0].startsWith("/game") ? "/" + gC.e.getSearchParamsString() : OC.length > 1 ? CC : "/" + gC.e.getSearchParamsString() : (console.error('Received unexpected "To" value. typeof: '.concat(typeof CC, ". Value: ").concat(CC, ". Defaulting to home screen.")), "/" + gC.e.getSearchParamsString());
}
const eC = (0, my.createContext)([]);
const OC = [];
export function k(CC) {
  let {
    children: yC
  } = CC;
  const IC = (0, fC.u)();
  const ky = (0, fC.x)();
  (0, my.Oy)(() => {
    const CC = IC.pathname + IC.search;
    "REPLACE" === ky && (0 === OC.length ? OC.push(CC) : OC[OC.length - 1] = CC);
    "PUSH" === ky && OC.push(CC);
    "POP" === ky && (0 !== OC.length && OC[OC.length - 1] === CC || OC.push(CC));
  }, [IC, ky]);
  return (0, XC.jsx)(eC.Provider, {
    value: OC,
    children: yC
  });
}