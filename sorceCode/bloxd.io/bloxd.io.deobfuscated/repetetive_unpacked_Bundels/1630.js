var fC = require("./1637.js");
var ky = require("./1336.js");
var gC = require("./534.js");
export function b(CC) {
  let {
    options: yC,
    value: IC,
    onChange: AC,
    controlClassName: my = "",
    arrowClassName: XC = "",
    menuClassName: iy = ""
  } = CC;
  const {
    t: LC
  } = (0, ky.n)();
  return (0, gC.jsx)(fC.d, {
    controlClassName: "BloxdDropdownControl SmallTextLight ".concat(null !== my && void 0 !== my ? my : ""),
    arrowClassName: "BloxdDropdownArrow SmallTextLight ".concat(null !== XC && void 0 !== XC ? XC : ""),
    menuClassName: "BloxdDropdownMenu SmallTextLight ".concat(null !== iy && void 0 !== iy ? iy : ""),
    options: yC,
    value: IC,
    onChange: AC,
    placeholder: LC("general:select")
  });
}