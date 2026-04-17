var fC = require("./14.js");
var ky = require("./408.js");
var gC = require("./442.js");
var AC = require("./1553.js");
var my = require("./544.js");
var XC = require("./38.js");
var iy = require("./49.js");
var LC = require("./1565.js");
var YC = require("./534.js");
function bC() {
  const {
    soundVolume: CC
  } = (0, fC.f)(["soundVolume"]);
  const [yC, IC] = (0, iy.ey)(!1);
  const [ky, gC] = (0, iy.ey)(!1);
  return (0, YC.jsxs)(my.t, {
    setHovering: IC,
    className: "MusicIconHoverableDiv",
    children: [(0, YC.jsx)("i", {
      className: "fas fa-volume-low ScaleOnHover SmallTextBold"
    }), yC || ky ? (0, YC.jsx)("div", {
      className: "MusicVolumeSlider",
      children: (0, YC.jsx)(LC.l, {
        value: CC,
        min: 0,
        max: 1,
        step: .01,
        orientation: "vertical",
        reverse: !0,
        onChange: CC => {
          fC.b.set({
            soundVolume: Math.round(100 * CC) / 100
          });
        },
        setIsChanging: gC
      })
    }) : null]
  });
}
function rC() {
  const {
    musicVolume: CC
  } = (0, fC.f)(["musicVolume"]);
  const [yC, IC] = (0, iy.ey)(!1);
  const [ky, gC] = (0, iy.ey)(!1);
  return (0, YC.jsxs)(my.t, {
    setHovering: CC => {
      IC(CC);
    },
    className: "MusicIconHoverableDiv",
    children: [(0, YC.jsx)("i", {
      className: "fas fa-music ScaleOnHover SmallTextBold"
    }), yC || ky ? (0, YC.jsx)("div", {
      className: "MusicVolumeSlider",
      children: (0, YC.jsx)(LC.l, {
        value: CC,
        min: 0,
        max: 1,
        step: .01,
        orientation: "vertical",
        reverse: !0,
        onChange: CC => {
          fC.b.set({
            musicVolume: Math.round(100 * CC) / 100
          });
        },
        setIsChanging: CC => {
          gC(CC);
        }
      })
    }) : null]
  });
}
var GC = require("./424.js");
export const b = (0, iy.memo)(function () {
  const {
    gameState: CC,
    openEverythingMenuName: yC,
    clientEscMenuOptions: IC
  } = (0, fC.f)(["gameState", "openEverythingMenuName", "clientEscMenuOptions"]);
  const iy = "inGame" === CC;
  return (0, YC.jsx)("div", {
    className: "TopRightIconsContainer",
    children: (0, YC.jsxs)("div", {
      className: "TopRightIcons",
      children: [!(0, ky.P)() && "crazygames" !== gC.D && ((0, ky.W)() || IC.disableFullscreen) && (0, AC.j)() && (0, YC.jsx)("div", {
        className: "TopRightIcon",
        children: (0, YC.jsx)(AC.c, {})
      }), (0, YC.jsx)("div", {
        className: "TopRightIcon",
        children: (0, YC.jsx)(my.N, {
          icon: "gear",
          noaAction: iy ? "OpenSettings" : null,
          onClick: () => {
            fC.b.set({
              openEverythingMenuName: fC.b.get("openEverythingMenuName") === GC.s.SETTINGS ? null : GC.s.SETTINGS
            });
          }
        })
      }), iy && null === yC && (0, YC.jsx)("div", {
        className: "TopRightIcon",
        children: (0, YC.jsx)(my.N, {
          icon: "video",
          noaAction: "SwapCameraZoom",
          onClick: () => {
            XC.c.Gy("SwapCameraZoom");
          }
        })
      }), iy && null === yC && ky.g.canUseInviteLinks && (0, YC.jsx)("div", {
        className: "TopRightIcon",
        children: (0, YC.jsx)(my.N, {
          icon: "user-plus",
          noaAction: "OpenInviteLink",
          onClick: () => {
            XC.c.Gy("toggleMenu", "inviteLink");
          }
        })
      }), !iy && (0, YC.jsx)("div", {
        className: "TopRightIcon",
        children: (0, YC.jsx)(bC, {})
      }), !iy && (0, YC.jsx)("div", {
        className: "TopRightIcon",
        children: (0, YC.jsx)(rC, {})
      })]
    })
  });
});