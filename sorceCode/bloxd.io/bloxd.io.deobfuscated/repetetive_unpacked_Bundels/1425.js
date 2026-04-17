var fC = require("./554.js");
var ky = fC;
var gC = require("./49.js");
var AC = require("./408.js");
var my = require("./534.js");
export const e = (0, gC.memo)(function (CC) {
  let {
    loading: yC = !0,
    progress: IC,
    animateProgress: fC = !1,
    showFace: XC = !1,
    loaderType: iy = "Primary"
  } = CC;
  const LC = (0, gC.useRef)(null);
  return (0, my.jsxs)("div", {
    ref: LC,
    className: ky("LogoLoader LogoLoader".concat(iy), {
      LogoLoaderIsLoading: yC,
      LogoLoaderIsProgressBar: void 0 !== IC
    }),
    children: [XC && (0, my.jsx)("img", {
      className: "LogoLoaderInner",
      src: "/textures/miscImages/logo.png",
      alt: "logo"
    }), (0, my.jsx)("div", {
      className: "LogoLoaderLoadingBar"
    }), void 0 !== IC && (() => {
      let CC = null;
      if (LC.current) {
        var yC;
        const ky = window.getComputedStyle(LC.current);
        const gC = parseFloat(ky.width);
        const AC = parseFloat(null !== (yC = window.getComputedStyle(document.documentElement).fontSize) && void 0 !== yC ? yC : "16");
        const XC = 1.01 * Math.min(.15 * gC, .8 * AC);
        const iy = gC / 2 - XC / 2;
        const YC = 2 * Math.PI * iy;
        const bC = YC - IC * YC;
        CC = (0, my.jsx)("svg", {
          viewBox: "0 0 ".concat(gC, " ").concat(gC),
          children: (0, my.jsx)("circle", {
            cx: gC / 2,
            cy: gC / 2,
            r: iy,
            stroke: "currentColor",
            fill: "transparent",
            strokeWidth: XC,
            strokeDasharray: YC,
            strokeDashoffset: bC,
            strokeLinecap: "square",
            style: fC ? {
              transition: "stroke-dashoffset 0.5s"
            } : {}
          })
        });
      }
      return (0, my.jsxs)("div", {
        className: "LogoLoaderProgressBar",
        children: [IC >= 0 && IC < 1 && (0, my.jsxs)("div", {
          className: "LogoLoaderProgressBarText",
          children: [Math.round(100 * IC), "%"]
        }), CC]
      });
    })(), XC && AC.g.useChristmasTheme && (0, my.jsx)("i", {
      className: "fa-duotone fa-solid fa-hat-santa LoaderSantaHat"
    })]
  });
});