var fC = require("./534.js");
export function e(CC) {
  let {
    children: yC,
    hide: IC,
    containerClassName: ky = "",
    bgClassName: gC = "",
    className: AC = "",
    disableBackground: my = !1,
    disablePressBackgroundToClose: XC = !1
  } = CC;
  return (0, fC.jsx)("div", {
    onClick: () => {
      XC || IC();
    },
    className: ky,
    children: (0, fC.jsx)("div", {
      className: "MiddleScreenPopupBackground ".concat(my ? "" : "ShowBackground", " ").concat(gC),
      children: (0, fC.jsx)("div", {
        onClick: CC => {
          CC.stopPropagation();
        },
        className: "MiddleScreenPopup AnimFadeInScaleUp SmallTextLight ".concat(AC),
        children: yC
      })
    })
  });
}