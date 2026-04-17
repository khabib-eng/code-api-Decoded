var fC = require("./18.js");
var ky = require("./49.js");
var gC = require("./1417.js");
var AC = require("./1425.js");
var my = require("./534.js");
const XC = require("./554.js");
export function F() {
  let {
    disabled: CC,
    keys: yC = ["Enter", " "],
    stopPropagation: IC = !1
  } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  return {
    role: "button",
    tabIndex: CC ? -1 : 0,
    onKeyDown: CC ? void 0 : CC => {
      yC.includes(CC.key) && (CC.preventDefault(), IC && CC.stopPropagation(), CC.currentTarget.click());
    }
  };
}
export const k = (0, ky.forwardRef)((CC, yC) => (0, my.jsx)("div", {
  className: "ExitButton ".concat(CC.className),
  children: (0, my.jsx)(x, (0, fC.d)((0, fC.d)({}, CC), {}, {
    children: (0, my.jsx)("div", {
      className: "ExitButtonInner",
      children: (0, my.jsx)("i", {
        className: "fas fa-x"
      })
    })
  }))
}));
export const o = (0, ky.forwardRef)((CC, yC) => (0, my.jsx)(TC, (0, fC.d)({}, (0, fC.d)((0, fC.d)({}, CC), {}, {
  ref: yC,
  className: "GoldButton ".concat(XC(CC.className))
}))));
export const d = (0, ky.forwardRef)((CC, yC) => (0, my.jsx)(TC, (0, fC.d)({}, (0, fC.d)((0, fC.d)({}, CC), {}, {
  ref: yC,
  className: "BlueButton ".concat(XC(CC.className))
}))));
export const h = (0, ky.forwardRef)((CC, yC) => (0, my.jsx)(TC, (0, fC.d)({}, (0, fC.d)((0, fC.d)({}, CC), {}, {
  ref: yC,
  className: "DarkBlueButton ".concat(XC(CC.className))
}))));
export const r = (0, ky.forwardRef)((CC, yC) => (0, my.jsx)(TC, (0, fC.d)({}, (0, fC.d)((0, fC.d)({}, CC), {}, {
  ref: yC,
  className: "PurpleButton ".concat(XC(CC.className))
}))));
export const p = (0, ky.forwardRef)((CC, yC) => (0, my.jsx)(TC, (0, fC.d)({}, (0, fC.d)((0, fC.d)({}, CC), {}, {
  ref: yC,
  className: "GreenButton ".concat(XC(CC.className))
}))));
export const x = (0, ky.forwardRef)((CC, yC) => (0, my.jsx)(TC, (0, fC.d)({}, (0, fC.d)((0, fC.d)({}, CC), {}, {
  ref: yC,
  className: "RedButton ".concat(XC(CC.className))
}))));
export const t = (0, ky.forwardRef)((CC, yC) => (0, my.jsx)(TC, (0, fC.d)({}, (0, fC.d)((0, fC.d)({}, CC), {}, {
  ref: yC,
  className: "RainbowButton ".concat(XC(CC.className))
}))));
const TC = (0, ky.forwardRef)((CC, yC) => {
  let {
    className: IC,
    disabled: ky,
    loading: gC,
    onClick: LC,
    onPointerDown: YC,
    onPointerUp: bC,
    onPointerEnter: rC,
    onPointerLeave: GC,
    maxWidth: eC,
    maxHeight: OC,
    children: SC,
    isShiny: TC = !1
  } = CC;
  return (0, my.jsxs)("div", (0, fC.d)((0, fC.d)({}, F({
    disabled: ky || gC
  })), {}, {
    className: XC("NewButton", IC, {
      DisabledNewButton: ky,
      LoadingNewButton: gC,
      ShinyButton: TC
    }),
    style: {
      maxWidth: eC,
      maxHeight: OC
    },
    onMouseEnter: () => {},
    onClick: ky || gC ? void 0 : CC => {
      null === LC || void 0 === LC || LC(CC);
    },
    onPointerDown: ky || gC ? void 0 : CC => {
      null === YC || void 0 === YC || YC(CC);
    },
    onPointerUp: bC,
    onPointerEnter: rC,
    onPointerLeave: GC,
    ref: yC,
    children: [(0, my.jsx)("div", {
      className: "ButtonBottomBorder"
    }), (0, my.jsx)("div", {
      className: "ButtonTopBorder"
    }), (0, my.jsx)("div", {
      className: "ButtonBody",
      children: SC
    }), gC && (0, my.jsx)("div", {
      className: "ButtonLoadingOverlay",
      children: (0, my.jsx)(AC.e, {})
    })]
  }));
});
export function C(CC) {
  let {
    children: yC,
    className: IC,
    active: ky = !1,
    disabled: gC = !1,
    onClick: AC = () => {}
  } = CC;
  return (0, my.jsx)("div", (0, fC.d)((0, fC.d)({}, F({
    disabled: gC
  })), {}, {
    className: XC("SecondaryButton", {
      ActiveSecondaryButton: ky,
      DisabledSecondaryButton: gC,
      [IC]: IC
    }),
    onClick: gC ? void 0 : AC,
    children: yC
  }));
}
export function q(CC) {
  let {
    children: yC,
    onClick: IC,
    isLiked: fC,
    className: ky,
    isLoading: gC = !1
  } = CC;
  return (0, my.jsx)(qC, {
    onClick: IC,
    isLoading: gC,
    showConfetti: fC,
    className: XC("LikeButton", {
      [ky]: ky
    }),
    confettiClassName: "FavouriteCustomLobby",
    icon: "heart",
    children: yC
  });
}
export function y(CC) {
  let {
    children: yC,
    onClick: IC,
    className: fC,
    isLoading: ky = !1
  } = CC;
  return (0, my.jsx)(qC, {
    onClick: IC,
    isLoading: ky,
    showConfetti: !1,
    className: XC("ReportButton", {
      [fC]: fC
    }),
    icon: "flag",
    children: yC
  });
}
function qC(CC) {
  let {
    children: yC,
    onClick: IC,
    showConfetti: ky,
    className: LC,
    confettiClassName: YC,
    icon: bC,
    isLoading: rC = !1
  } = CC;
  return (0, my.jsxs)("div", (0, fC.d)((0, fC.d)({}, F({
    disabled: rC,
    stopPropagation: !0
  })), {}, {
    className: XC("LoadableButton", {
      [YC]: ky,
      Loading: rC,
      [LC]: LC
    }),
    onMouseDown: CC => {
      CC.stopPropagation();
      CC.preventDefault();
    },
    onClick: rC ? void 0 : CC => {
      IC();
      CC.stopPropagation();
      CC.preventDefault();
    },
    children: [(0, my.jsxs)("div", {
      className: "LoadableButtonIcon",
      children: [rC && (0, my.jsx)(AC.e, {}), !rC && !ky && (0, my.jsx)("i", {
        className: "fa-regular fa-".concat(bC)
      }), !rC && ky && (0, my.jsx)("i", {
        className: "fa-solid fa-".concat(bC)
      }), (0, my.jsx)(gC.c, {
        showSignal: ky ? 1 : 0
      })]
    }), yC]
  }));
}
export function c(CC) {
  let {
    children: yC,
    onClick: IC,
    className: ky
  } = CC;
  return (0, my.jsxs)("div", (0, fC.d)((0, fC.d)({}, F({
    disabled: !1
  })), {}, {
    className: XC("BackButton", {
      [ky]: ky
    }),
    onClick: IC,
    children: [(0, my.jsx)("i", {
      className: "fa-solid fa-arrow-up"
    }), yC]
  }));
}