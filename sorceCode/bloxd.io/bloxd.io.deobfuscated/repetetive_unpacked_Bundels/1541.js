var fC = require("./1336.js");
var ky = require("./1544.js");
var gC = require("./82.js");
var AC = require("./1408.js");
var my = require("./554.js");
var XC = my;
var iy = require("./49.js");
var LC = require("./66.js");
var YC = require("./424.js");
var bC = require("./534.js");
export function c(CC) {
  let {
    displayAllUpdateLogs: yC,
    close: IC
  } = CC;
  const {
    t: AC
  } = (0, fC.n)();
  let my = [];
  (0, iy.Oy)(() => () => {
    (0, ky.k)();
  }, []);
  if (yC) {
    my = (0, ky.c)();
  } else {
    if (gC.j.getItem(YC.R) <= 3) {
      (0, ky.k)();
      IC();
      return null;
    }
    my = (0, ky.f)();
  }
  return (0, bC.jsxs)("div", {
    className: "UpdateLogPopupInner",
    children: [(0, bC.jsx)("div", {
      className: "UpdateLogPopupTitle",
      children: AC(yC ? "homePage:updateLog" : "homePage:whatsNew")
    }), (0, bC.jsx)("div", {
      className: XC("UpdateLogsContainer", {
        ShowTimeline: my.length >= 2
      }),
      children: my.map((CC, yC) => (0, bC.jsx)(b, {
        updateLog: CC,
        index: yC,
        close: IC
      }, yC))
    })]
  });
}
export function b(CC) {
  var yC;
  var IC;
  let {
    updateLog: gC,
    index: my,
    close: XC
  } = CC;
  const {
    t: YC
  } = (0, fC.n)();
  const [rC, GC] = (0, iy.ey)(!1);
  const eC = Array.isArray(gC.author) ? gC.author : [gC.author];
  let OC = AC.d;
  "gold" === (null === (yC = gC.callToActionButton) || void 0 === yC ? void 0 : yC.color) ? OC = AC.o : "rainbow" === (null === (IC = gC.callToActionButton) || void 0 === IC ? void 0 : IC.color) && (OC = AC.t);
  (0, iy.Oy)(() => {
    gC.callToActionButton && (gC.callToActionButton.shouldShow ? gC.callToActionButton.shouldShow().then(CC => {
      GC(CC);
    }) : GC(!0));
  }, []);
  return (0, bC.jsxs)("div", {
    className: "UpdateLog AnimFadeIn",
    style: {
      animationDelay: "".concat(.1 * (my + 1), "s")
    },
    children: [(0, bC.jsxs)("div", {
      className: "UpdateLeft",
      children: [(0, bC.jsx)("div", {
        className: "UpdateDate",
        children: gC.date.toLocaleDateString()
      }), (0, bC.jsxs)("div", {
        className: "UpdateTitle",
        children: [(0, bC.jsx)("div", {
          className: "TimelineDot"
        }), YC(gC.title)]
      }), gC.author && (0, bC.jsxs)("div", {
        className: "UpdateAuthor",
        children: [eC.map(CC => (0, bC.jsx)("img", {
          src: "/textures/updateImages/".concat(ky.j[CC]),
          alt: CC,
          draggable: "false"
        }, CC)), eC.join(" and ")]
      }), (0, bC.jsx)("div", {
        className: "UpdateDescription",
        children: YC(gC.description)
      }), gC.callToActionButton && rC && (0, bC.jsx)(bC.Fragment, {
        children: (0, bC.jsx)(OC, {
          className: "CallToActionButton",
          onClick: () => {
            XC();
            gC.callToActionButton.callback();
          },
          children: gC.callToActionButton.content
        })
      })]
    }), (0, bC.jsx)("div", {
      className: "UpdateRight",
      children: (0, bC.jsx)("div", {
        className: "UpdateImage",
        children: gC.image && (0, bC.jsx)("img", {
          src: "/textures/updateImages/".concat(gC.image),
          alt: gC.title,
          draggable: "false",
          style: {
            cursor: (0, LC.w)(gC.onClickImage) ? "default" : "pointer"
          },
          onClick: () => {
            (0, LC.w)(gC.onClickImage) || gC.onClickImage();
          }
        })
      })
    })]
  }, gC.date.getTime());
}