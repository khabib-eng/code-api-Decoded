var fC = require("./1336.js");
var ky = require("./554.js");
var gC = ky;
var AC = require("./1388.js");
require("./49.js");
var my = require("./1608.js");
var XC = require("./534.js");
export function h(CC) {
  let {
    children: yC,
    label: IC,
    className: ky,
    circleInfoText: my,
    disabled: iy
  } = CC;
  const {
    t: LC
  } = (0, fC.n)();
  return (0, XC.jsxs)("div", {
    className: gC("LabeledInput", {
      [ky]: ky,
      DisabledLabelInput: iy
    }),
    children: [my && (0, XC.jsx)(AC.f, {
      tooltipInner: (0, XC.jsx)("div", {
        className: "LabeledInputTooltip",
        children: LC(my)
      }),
      children: (0, XC.jsxs)("div", {
        className: "Label",
        children: [LC(IC), (0, XC.jsx)("i", {
          className: "fa-solid fa-circle-info"
        })]
      })
    }), !my && (0, XC.jsx)("div", {
      className: "Label",
      children: LC(IC)
    }), yC]
  });
}
export function d(CC) {
  let {
    checked: yC,
    setChecked: IC
  } = CC;
  return (0, XC.jsx)("div", {
    className: "OtherInput ClickableOtherInput",
    onClick: CC => {
      IC(!yC);
    },
    children: (0, XC.jsx)(my.e, {
      checked: yC,
      onChange: CC => {
        IC(CC.target.checked);
      },
      disabled: !1
    })
  });
}