var fC = require("./1408.js");
var ky = require("./49.js");
var gC = require("./1363.js");
var AC = require("./544.js");
var my = require("./1336.js");
var XC = require("./1143.js");
var iy = require("./408.js");
var LC = require("./1425.js");
var YC = require("./534.js");
export function g() {
  const CC = XC.singletons.discordContextAttemptedPlay;
  return null !== CC && XC.singletons.connectedLobbyName === CC.getLobbyName() ? CC.getLobbyPlayingString() : XC.singletons.connectedLobbyName;
}
export function d(CC) {
  let {
    show: yC,
    onClose: IC
  } = CC;
  const {
    t: fC
  } = (0, my.n)();
  const [gC, rC] = (0, ky.ey)(null);
  (0, ky.Oy)(() => {
    (0, AC.T)(fC, XC.singletons.modeAttemptedPlay, XC.singletons.connectedLobbyName).then(CC => {
      rC(CC);
    });
  }, []);
  return iy.g.canUseInviteLinks && (0, YC.jsx)(AC.q, {
    show: yC,
    close: IC,
    togglePointerLock: !1,
    globallyUniqueKey: "InviteLinkBox",
    doGameplayStartStopOnShow: !0,
    children: (0, YC.jsxs)("div", {
      className: "InviteLinkBox AnimFadeInScaleUp",
      children: [(0, YC.jsx)("div", {
        className: "InviteLinkBoxHeader SmallTextBold",
        children: "Invite Friends"
      }), (0, YC.jsxs)("div", {
        className: "InviteLinkBoxDescription SmallTextLight",
        children: [(0, YC.jsx)("div", {
          className: "InviteLinkBoxSubheader SmallTextBold",
          children: '"Join Lobby Name" Button Info'
        }), "Game: ", null === gC ? (0, YC.jsx)(LC.e, {}) : gC, (0, YC.jsx)("br", {}), "Lobby Name: ", g(), (0, YC.jsx)("br", {}), (0, YC.jsx)("br", {}), (0, YC.jsx)("br", {}), (0, YC.jsx)("div", {
          className: "InviteLinkBoxSubheader SmallTextBold",
          children: "Link"
        })]
      }), (0, YC.jsx)(f, {})]
    })
  });
}
export function f() {
  const {
    t: CC
  } = (0, my.n)();
  const [yC, IC] = (0, ky.ey)("Loading Link...");
  const [AC, XC] = (0, ky.ey)(0);
  const [LC, bC] = (0, ky.useReducer)(CC => CC + 1, 0);
  (0, ky.Oy)(() => {
    let CC = !0;
    (0, gC.w)().then(yC => {
      CC && IC(yC);
    });
    return () => {
      CC = !1;
    };
  }, []);
  (0, ky.Oy)(() => {
    const CC = setTimeout(() => {
      bC();
    }, 1100);
    return () => {
      clearTimeout(CC);
    };
  }, [AC]);
  return iy.g.canUseInviteLinks && (0, YC.jsxs)("div", {
    className: "InviteLinkInnerWrapper",
    children: [(0, YC.jsx)("div", {
      className: "InviteLinkInner",
      children: yC
    }), (0, YC.jsx)(fC.d, {
      className: "InviteLinkCopyButton",
      onClick: () => {
        navigator.clipboard.writeText(yC);
        XC(Date.now());
      },
      disabled: Date.now() - AC < 1e3,
      children: Date.now() - AC < 1e3 ? CC("general:copied") : CC("general:copy")
    })]
  });
}