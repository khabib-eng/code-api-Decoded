var fC = require("./49.js");
var ky = require("./544.js");
var gC = require("./1336.js");
var AC = require("./1425.js");
var my = require("./1385.js");
var XC = require("./1259.js");
var iy = require("./1261.js");
var LC = require("./424.js");
var YC = require("./408.js");
var bC = require("./442.js");
var rC = require("./14.js");
var GC = require("./1532.js");
var eC = require("./1408.js");
var OC = require("./577.js");
var SC = require("./554.js");
var TC = SC;
var NC = require("./1363.js");
var sC = require("./534.js");
export function c(CC) {
  let {
    showProgressUpdateMessage: yC = !0
  } = CC;
  const {
    t: IC
  } = (0, gC.n)();
  const {
    userContext: my,
    isUserContextUpdating: XC
  } = (0, ky.fb)();
  const [iy, YC] = (0, fC.ey)(null);
  const [bC, GC] = (0, fC.ey)(!1);
  (0, fC.Oy)(() => {
    let CC = !1;
    return XC || my.isLoggedIn() ? (YC(null), () => {
      CC = !0;
    }) : (GC(!0), d(yC, my).then(yC => {
      CC || YC(yC);
    }).catch(yC => {
      console.error("Failed to load login buttons:", yC);
      CC || YC([]);
    }).finally(() => {
      CC || GC(!1);
    }), () => {
      CC = !0;
    });
  }, [yC, my, XC]);
  return XC || my.isLoggedIn() ? null : bC || null === iy ? (0, sC.jsx)(AC.e, {}) : iy.length > 1 ? (0, sC.jsx)("div", {
    className: "LoginButtonContainer",
    children: (0, sC.jsxs)("div", {
      className: "LoginButton",
      onClick: () => {
        rC.b.set({
          openEverythingMenuName: LC.s.SETTINGS
        });
      },
      children: [(0, sC.jsx)("i", {
        className: "fa-solid fa-user"
      }), (0, sC.jsx)("div", {
        className: "LoginButtonText",
        children: IC("auth:login")
      })]
    })
  }) : 1 === iy.length ? (0, sC.jsx)(sC.Fragment, {
    children: iy[0]
  }) : null;
}
export async function d(CC, yC) {
  const IC = [];
  if ("crazygames" === bC.D) {
    IC.push(iy.e.CRAZY_GAMES);
    const CC = await (0, NC.s)();
    "google_play_store" !== CC && "apple_store" !== CC && (IC.push(iy.e.GOOGLE), IC.push(iy.e.APPLE), IC.push(iy.e.MICROSOFT), IC.push(iy.e.DISCORD));
  } else {
    YC.g.useLogin && rC.b.get("reactNativeFeatureFlags").useLogin && (IC.push(iy.e.GOOGLE), "mobileAndroid" !== bC.D && IC.push(iy.e.APPLE), "mobileAndroid" !== bC.D && "mobileIos" !== bC.D && (IC.push(iy.e.MICROSOFT), IC.push(iy.e.DISCORD)));
  }
  for (const fC of yC.availableUserContextTypes) {
    fC === iy.e.ANONYMOUS || IC.includes(fC) || IC.push(fC);
  }
  return IC.map(yC => (0, sC.jsx)(KC, {
    userContextType: yC,
    showProgressUpdateMessage: CC
  }, yC));
}
function KC(CC) {
  let {
    userContextType: yC,
    showProgressUpdateMessage: IC
  } = CC;
  const {
    t: LC
  } = (0, gC.n)();
  const {
    userContext: YC
  } = (0, ky.fb)();
  const [bC, rC] = (0, fC.ey)(!1);
  async function GC(CC, yC, fC) {
    if (!bC) {
      rC(!0);
      return XC.v.setCurrentUserContext(CC, !0, yC).then(() => {
        !1 !== fC && !0 === IC && my.b.showAlertPopup({
          title: "auth:progressUpdateMessage",
          confirmText: "general:ok"
        });
      }).catch(yC => {
        console.error("Failed to login with ".concat(CC, ":"), yC);
      }).finally(() => {
        rC(!1);
      });
    }
  }
  return (0, sC.jsxs)("div", {
    className: "LoginButtonContainer",
    children: [bC && (0, sC.jsx)("div", {
      className: "LoggingInLoader",
      children: (0, sC.jsx)(AC.e, {})
    }), (0, sC.jsxs)("div", {
      className: TC("LoginButton", {
        LoginButtonsLoggedIn: YC.isLoggedIn(),
        LoginButtonLinked: YC.isLoggedIn() && YC.availableUserContextTypes.includes(yC)
      }),
      onClick: CC => {
        GC(yC, XC.i.LOGIN);
        CC.stopPropagation();
      },
      children: [(0, sC.jsx)("div", {
        className: "LoginButtonIcon",
        children: pC[yC]
      }), (0, sC.jsx)("div", {
        className: "LoginButtonText",
        children: iy.g[yC]
      })]
    }), YC.isLoggedIn() && !YC.availableUserContextTypes.includes(yC) && (0, sC.jsx)(eC.d, {
      className: "LoginButtonAction",
      onClick: () => {
        GC(yC, XC.i.LINK, !1);
      },
      children: LC("auth:link")
    }), YC.isLoggedIn() && YC.availableUserContextTypes.includes(yC) && (0, sC.jsx)(eC.x, {
      className: "LoginButtonAction",
      onClick: () => {
        !async function () {
          if (bC) {
            return;
          }
          rC(!0);
          const CC = await XC.v.getCurrentUserContext();
          const IC = CC.getMetricsCookies();
          await (0, XC.t)("".concat(OC.b.indexUrl, "/index/unlink-external-auth-type"), {
            externalAuthType: yC
          }, {
            retries: 3
          }, IC).then(async () => {
            XC.l[yC]();
            for (const fC of CC.availableUserContextTypes) {
              if (fC !== iy.e.ANONYMOUS && fC !== yC) {
                try {
                  return GC(fC, XC.i.LOGIN, !1);
                } catch (IC) {}
              }
            }
          }).catch(CC => {
            var IC;
            console.error("Failed to unlink ".concat(yC, ":"), CC);
            my.b.showAlertPopup({
              title: null !== (IC = CC.errorMessageForUser) && void 0 !== IC ? IC : "Error",
              confirmText: "general:ok"
            });
            rC(!1);
          });
        }();
      },
      children: LC("auth:unlink")
    })]
  });
}
const pC = {
  [iy.e.GOOGLE]: (0, sC.jsx)("img", {
    alt: "google",
    src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTcuNiA5LjJsLS4xLTEuOEg5djMuNGg0LjhDMTMuNiAxMiAxMyAxMyAxMiAxMy42djIuMmgzYTguOCA4LjggMCAwIDAgMi42LTYuNnoiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik05IDE4YzIuNCAwIDQuNS0uOCA2LTIuMmwtMy0yLjJhNS40IDUuNCAwIDAgMS04LTIuOUgxVjEzYTkgOSAwIDAgMCA4IDV6IiBmaWxsPSIjMzRBODUzIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNNCAxMC43YTUuNCA1LjQgMCAwIDEgMC0zLjRWNUgxYTkgOSAwIDAgMCAwIDhsMy0yLjN6IiBmaWxsPSIjRkJCQzA1IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNOSAzLjZjMS4zIDAgMi41LjQgMy40IDEuM0wxNSAyLjNBOSA5IDAgMCAwIDEgNWwzIDIuNGE1LjQgNS40IDAgMCAxIDUtMy43eiIgZmlsbD0iI0VBNDMzNSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTAgMGgxOHYxOEgweiIvPjwvZz48L3N2Zz4="
  }),
  [iy.e.CRAZY_GAMES]: (0, sC.jsx)("img", {
    alt: "crazy_games",
    src: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSI+CjxnIGlkPSJzdXJmYWNlMSI+CjxwYXRoIHN0eWxlPSIgc3Ryb2tlOm5vbmU7ZmlsbC1ydWxlOm5vbnplcm87ZmlsbDpyZ2IoNDAuNzg0MzE0JSwyNS44ODIzNTQlLDEwMCUpO2ZpbGwtb3BhY2l0eToxOyIgZD0iTSAxOS4wODIwMzEgNS4xNzk2ODggQyAxOS4xMTcxODggMy43MzgyODEgMTkuMDIzNDM4IDEuMjI2NTYyIDE3Ljk5NjA5NCAwLjE3NTc4MSBDIDE3LjQzMzU5NCAtMC4zOTg0MzggMTYuMDkzNzUgMC41NjI1IDE1LjIzMDQ2OSAxLjMwNDY4OCBDIDEzLjc5Njg3NSAwLjY4MzU5NCAxMi4wMzEyNSAwLjM3NSA5Ljg4NjcxOSAwLjM3NSBDIDcuNzQ2MDk0IDAuMzc1IDUuOTg0Mzc1IDAuNjgzNTk0IDQuNTUwNzgxIDEuMzA0Njg4IEMgMy42Nzk2ODggMC41NjI1IDIuMzQzNzUgLTAuMzk4NDM4IDEuNzgxMjUgMC4xNzU3ODEgQyAwLjc1NzgxMiAxLjIyMjY1NiAwLjY2MDE1NiAzLjcyNjU2MiAwLjY5OTIxOSA1LjE3MTg3NSBDIDAuMjM0Mzc1IDYuMzAwNzgxIDAgNy42MTcxODggMCA5LjEyMTA5NCBDIDAgMTIuMjg1MTU2IDEuMDE5NTMxIDE0LjYyODkwNiAzLjAyMzQzOCAxNi4wOTM3NSBDIDQuMzc1IDE3LjA3ODEyNSA2LjE0MDYyNSAxNy42NDg0MzggOC4zODY3MTkgMTcuODE2NDA2IEMgOC4xMjUgMTcuOTMzNTk0IDcuODUxNTYyIDE4LjA1MDc4MSA3LjU3MDMxMiAxOC4xNzU3ODEgTCA2Ljc1MzkwNiAxOC41MzEyNSBMIDYuMjkyOTY5IDE4LjczNDM3NSBDIDUuODQzNzUgMTguOTQ1MzEyIDUuMzgyODEyIDE5LjEyODkwNiA0Ljg4MjgxMiAxOS40MDIzNDQgTCA0Ljc1NzgxMiAxOS40NTcwMzEgQyA0LjcyNjU2MiAxOS40ODA0NjkgNC42OTE0MDYgMTkuNTE5NTMxIDQuNjgzNTk0IDE5LjU2MjUgQyA0LjY2Nzk2OSAxOS42NDA2MjUgNC43MzA0NjkgMTkuNzE4NzUgNC44MjAzMTIgMTkuNzMwNDY5IEMgNS4yNzM0MzggMTkuNzg5MDYyIDUuNzIyNjU2IDE5Ljg2NzE4OCA2LjE4MzU5NCAxOS45MDYyNSBMIDYuNTI3MzQ0IDE5LjkzNzUgQyA2LjYzNjcxOSAxOS45NDkyMTkgNi43NTM5MDYgMTkuOTU3MDMxIDYuODY3MTg4IDE5Ljk2NDg0NCBMIDcuNTU0Njg4IDE5Ljk5NjA5NCBDIDguNDc2NTYyIDIwLjAxMTcxOSA5LjQwNjI1IDE5Ljk2NDg0NCAxMC4zMjQyMTkgMTkuODM5ODQ0IEMgMTEuMjQyMTg4IDE5LjcxNDg0NCAxMi4xNDQ1MzEgMTkuNDg4MjgxIDEzLjAxMTcxOSAxOS4xNjc5NjkgQyAxMy44NzUgMTguODUxNTYyIDE0LjY5OTIxOSAxOC40Mzc1IDE1LjQ0NTMxMiAxNy45MzM1OTQgQyAxNi45Mjk2ODggMTYuOTEwMTU2IDE4LjA4OTg0NCAxNS41MzUxNTYgMTguNzg1MTU2IDE0IEMgMTkuMDM5MDYyIDEzLjQ0MTQwNiAxOS4yMjY1NjIgMTIuODY3MTg4IDE5LjM2MzI4MSAxMi4yODEyNSBDIDE5LjYzNjcxOSAxMS4zMzk4NDQgMTkuNzc3MzQ0IDEwLjI4OTA2MiAxOS43NzczNDQgOS4xMjEwOTQgQyAxOS43NzczNDQgNy42MjEwOTQgMTkuNTQyOTY5IDYuMzA4NTk0IDE5LjA4MjAzMSA1LjE3OTY4OCBaIE0gMTkuMDgyMDMxIDUuMTc5Njg4ICIvPgo8cGF0aCBzdHlsZT0iIHN0cm9rZTpub25lO2ZpbGwtcnVsZTpub256ZXJvO2ZpbGw6cmdiKDI4LjYyNzQ1MiUsMTguMDM5MjE2JSw3MC4xOTYwOCUpO2ZpbGwtb3BhY2l0eToxOyIgZD0iTSAxMy44MjgxMjUgMTcuNDI5Njg4IEMgMTIuNjkxNDA2IDE3LjcyMjY1NiAxMS4zODI4MTIgMTcuODcxMDk0IDkuODg2NzE5IDE3Ljg3MTA5NCBMIDkuODgyODEyIDE3Ljg3MTA5NCBDIDkuNzQyMTg4IDE3Ljg3MTA5NCA5LjU5NzY1NiAxNy44NzEwOTQgOS40NDkyMTkgMTcuODY3MTg4IEMgOS4xNTIzNDQgMTcuODU5Mzc1IDguODU5Mzc1IDE3Ljg0NzY1NiA4LjU3ODEyNSAxNy44MjgxMjUgQyA4LjUxMTcxOSAxNy44MjQyMTkgOC40NDkyMTkgMTcuODIwMzEyIDguMzg2NzE5IDE3LjgxNjQwNiBDIDguMTIxMDk0IDE3LjkzMzU5NCA3Ljg1MTU2MiAxOC4wNDY4NzUgNy41NzAzMTIgMTguMTc1NzgxIEwgNi43NTM5MDYgMTguNTMxMjUgQyA3LjE0MDYyNSAxOC41NTQ2ODggNy41OTM3NSAxOC41NzgxMjUgOCAxOC41NzgxMjUgQyAxMC4zOTQ1MzEgMTguNTc4MTI1IDEyLjMxMjUgMTguMTk5MjE5IDEzLjgyODEyNSAxNy40Mjk2ODggWiBNIDEzLjgyODEyNSAxNy40Mjk2ODggIi8+CjxwYXRoIHN0eWxlPSIgc3Ryb2tlOm5vbmU7ZmlsbC1ydWxlOm5vbnplcm87ZmlsbDpyZ2IoMTAwJSwxMDAlLDEwMCUpO2ZpbGwtb3BhY2l0eToxOyIgZD0iTSA5Ljg4NjcxOSAxNC43MDcwMzEgQyAxMy42NzU3ODEgMTQuNzA3MDMxIDE2LjE5OTIxOSAxMy43NTc4MTIgMTYuMTk5MjE5IDkuMTIxMDk0IEMgMTYuMTk5MjE5IDYuOTMzNTk0IDE1LjYzMjgxMiA1LjQ1NzAzMSAxNC40NzY1NjIgNC42MDU0NjkgQyAxMy40OTYwOTQgMy44OTA2MjUgMTEuOTkyMTg4IDMuNTM5MDYyIDkuODg2NzE5IDMuNTM5MDYyIEMgNy43ODEyNSAzLjUzOTA2MiA2LjI3NzM0NCAzLjg4NjcxOSA1LjI5Njg3NSA0LjYwNTQ2OSBDIDQuMTM2NzE5IDUuNDU3MDMxIDMuNTc0MjE5IDYuOTMzNTk0IDMuNTc0MjE5IDkuMTIxMDk0IEMgMy41NzQyMTkgMTMuNzU3ODEyIDYuMDk3NjU2IDE0LjcwNzAzMSA5Ljg4NjcxOSAxNC43MDcwMzEgWiBNIDkuODg2NzE5IDE0LjcwNzAzMSAiLz4KPHBhdGggc3R5bGU9IiBzdHJva2U6bm9uZTtmaWxsLXJ1bGU6bm9uemVybztmaWxsOnJnYig0MC43ODQzMTQlLDI1Ljg4MjM1NCUsMTAwJSk7ZmlsbC1vcGFjaXR5OjE7IiBkPSJNIDcuODc1IDcuOTM3NSBDIDcuODc1IDcuNTE5NTMxIDguMTgzNTk0IDcuMTY3OTY5IDguNjA5Mzc1IDcuMDQ2ODc1IEMgOC4zNzUgNi44NTU0NjkgOC4wNjI1IDYuNzM4MjgxIDcuNzE0ODQ0IDYuNzM4MjgxIEMgNi45OTIxODggNi43MzgyODEgNi4zOTg0MzggNy4yNjE3MTkgNi4zOTg0MzggNy45MDIzNDQgTCA2LjM5ODQzOCAxMC4yMzQzNzUgQyA2LjM5ODQzOCAxMC44NzUgNi45OTIxODggMTEuMzk4NDM4IDcuNzE0ODQ0IDExLjM5ODQzOCBDIDguNDQxNDA2IDExLjM5ODQzOCA5LjAzNTE1NiAxMC44NzUgOS4wMzUxNTYgMTAuMjM0Mzc1IEwgOS4wMzUxNTYgOC44NjMyODEgQyA4Ljk5NjA5NCA4Ljg2MzI4MSA4Ljk2MDkzOCA4Ljg2NzE4OCA4LjkyNTc4MSA4Ljg2NzE4OCBDIDguMzQzNzUgOC44NjcxODggNy44NzEwOTQgOC40NDkyMTkgNy44NzEwOTQgNy45Mzc1IFogTSA3Ljg3NSA3LjkzNzUgIi8+CjxwYXRoIHN0eWxlPSIgc3Ryb2tlOm5vbmU7ZmlsbC1ydWxlOm5vbnplcm87ZmlsbDpyZ2IoNDAuNzg0MzE0JSwyNS44ODIzNTQlLDEwMCUpO2ZpbGwtb3BhY2l0eToxOyIgZD0iTSAxMi4xNjc5NjkgNy44NTE1NjIgQyAxMi4xNjc5NjkgNy40NDkyMTkgMTIuNDU3MDMxIDcuMTA5Mzc1IDEyLjg1OTM3NSA2Ljk3NjU2MiBDIDEyLjYzNjcxOSA2LjgyODEyNSAxMi4zNTkzNzUgNi43MzQzNzUgMTIuMDU4NTk0IDYuNzM0Mzc1IEMgMTEuMzM1OTM4IDYuNzM0Mzc1IDEwLjc0MjE4OCA3LjI2MTcxOSAxMC43NDIxODggNy45MDIzNDQgTCAxMC43NDIxODggMTAuMjMwNDY5IEMgMTAuNzQyMTg4IDEwLjg3MTA5NCAxMS4zMzU5MzggMTEuMzk4NDM4IDEyLjA1ODU5NCAxMS4zOTg0MzggQyAxMi43ODUxNTYgMTEuMzk4NDM4IDEzLjM3NSAxMC44NzUgMTMuMzc1IDEwLjIzMDQ2OSBMIDEzLjM3NSA4Ljc2OTUzMSBDIDEzLjMyNDIxOSA4Ljc3NzM0NCAxMy4yNzM0MzggOC43ODEyNSAxMy4yMTg3NSA4Ljc4MTI1IEMgMTIuNjM2NzE5IDguNzgxMjUgMTIuMTY3OTY5IDguMzY3MTg4IDEyLjE2Nzk2OSA3Ljg1MTU2MiBaIE0gMTIuMTY3OTY5IDcuODUxNTYyICIvPgo8L2c+Cjwvc3ZnPgo="
  }),
  [iy.e.DISCORD]: (0, sC.jsx)("i", {
    className: "fa-brands fa-discord"
  }),
  [iy.e.APPLE]: (0, sC.jsx)("i", {
    className: "fa-brands fa-apple"
  }),
  [iy.e.MICROSOFT]: (0, sC.jsx)("img", {
    alt: "microsoft",
    src: GC
  })
};