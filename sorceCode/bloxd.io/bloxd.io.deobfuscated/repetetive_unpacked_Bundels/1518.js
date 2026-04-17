var fC = require("./49.js");
var ky = require("./1336.js");
var gC = require("./554.js");
var AC = gC;
var my = require("./1383.js");
var XC = require("./534.js");
const iy = 14;
export function c(CC) {
  let {
    className: yC,
    triggerElementRef: IC,
    options: gC,
    usePositionFixed: LC = !1
  } = CC;
  const {
    t: YC
  } = (0, ky.n)();
  const [bC, rC] = (0, fC.ey)(!1);
  const [GC, eC] = (0, fC.ey)({
    x: 0,
    y: 0
  });
  const OC = (0, fC.useRef)(null);
  (0, fC.Oy)(() => {
    const CC = CC => {
      if (LC) {
        const yC = iy * (0, my.o)();
        eC({
          x: Math.min(CC.clientX, window.innerWidth - yC - 5),
          y: CC.clientY
        });
      } else {
        const yC = CC.target.getBoundingClientRect();
        const IC = CC.clientX - yC.x;
        const fC = CC.clientY - yC.y;
        eC({
          x: IC,
          y: fC
        });
      }
      rC(!bC);
    };
    const yC = CC => {
      rC(!1);
    };
    const fC = IC.current;
    fC.addEventListener("pointerup", CC);
    fC.addEventListener("mouseleave", yC);
    return () => {
      fC.removeEventListener("pointerup", CC);
      fC.removeEventListener("mouseleave", yC);
    };
  }, []);
  (0, fC.Oy)(() => {
    const CC = CC => {
      !OC.current || OC.current.contains(CC.target) || IC.current.contains(CC.target) || rC(!1);
    };
    bC && document.addEventListener("pointerdown", CC);
    return () => {
      document.removeEventListener("pointerdown", CC);
    };
  }, [bC]);
  const SC = gC.filter(CC => !1 !== CC.show);
  return bC && 0 !== SC.length ? (0, XC.jsx)("div", {
    ref: OC,
    className: AC("FloatingActions", {
      [yC]: yC,
      UsePositionFixed: LC
    }),
    style: {
      width: "".concat(iy, "rem"),
      top: GC.y,
      left: GC.x
    },
    children: SC.map(CC => {
      let {
        icon: yC,
        text: IC,
        onPointerDown: fC
      } = CC;
      return (0, XC.jsxs)("div", {
        className: "FloatingAction",
        onPointerUp: CC => {
          fC(CC);
          rC(!1);
          CC.stopPropagation();
        },
        children: [(0, XC.jsx)("i", {
          className: "fas fa-".concat(yC)
        }), (0, XC.jsx)("div", {
          children: YC(IC)
        })]
      }, IC);
    })
  }) : null;
}