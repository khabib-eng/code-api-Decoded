var fC = require("./554.js");
var ky = fC;
var gC = require("./422.js");
var AC = require("./49.js");
var my = require("./14.js");
var XC = require("./82.js");
var iy = require("./602.js");
var LC = require("./66.js");
var YC = require("./38.js");
var bC = require("./1565.js");
var rC = require("./544.js");
var GC = require("./1336.js");
var eC = require("./534.js");
export function d(CC) {
  var yC;
  var IC;
  var fC;
  var gC;
  var XC;
  let {
    minChunkAddDist: iy,
    getValue: OC,
    onChange: TC,
    setApplySettingsCallback: jy
  } = CC;
  const {
    t: qC
  } = (0, GC.n)();
  const {
    clientEscMenuOptions: KC
  } = (0, my.f)(["clientEscMenuOptions"]);
  const pC = (0, AC.useRef)(OC("showFog"));
  const wC = (0, AC.useRef)(KC.antiAliasing);
  const HC = (0, rC.db)("lightingOverride");
  const aC = !(0, LC.w)(HC);
  let cC = "settingsMenu:enableLighting";
  aC && (cC = HC ? "settingsMenu:enableLightingForcedOn" : "settingsMenu:enableLightingForcedOff");
  return (0, eC.jsxs)("div", {
    className: "SettingsMenuRightInner",
    children: [(0, eC.jsx)(bC.h, {
      name: qC("settingsMenu:horizontalChunkLoadDistance"),
      min: iy[0],
      max: g(iy[0]),
      step: 1,
      initValue: null !== (yC = OC("chunkHorizAddDist")) && void 0 !== yC ? yC : iy[0],
      onChange: CC => {
        !0 === OC("showFog") && CC < OC("fogChunkDistance") && TC("fogChunkDistance", CC);
        TC("chunkHorizAddDist", CC);
        YC.c.Gy("updatedChunkLoadDist");
      },
      circleInfoText: qC("settingsMenu:chunkLoadDistanceInfo")
    }), (0, eC.jsx)(bC.h, {
      name: qC("settingsMenu:verticalChunkLoadDistance"),
      min: iy[1],
      max: k(iy[1]),
      step: 1,
      initValue: null !== (IC = OC("chunkVertAddDist")) && void 0 !== IC ? IC : iy[1],
      onChange: CC => {
        TC("chunkVertAddDist", CC);
        YC.c.Gy("updatedChunkLoadDist");
      },
      circleInfoText: qC("settingsMenu:chunkLoadDistanceInfo"),
      className: "VerticalChunkLoadSlider"
    }), (0, eC.jsx)(bC.b, {
      label: qC(cC),
      checked: KC.enableLighting,
      onClick: CC => {
        my.b.setClientEscMenuOptions({
          enableLighting: CC
        });
      },
      disabled: aC
    }), (0, eC.jsxs)("div", {
      className: "SettingBoxGroup",
      children: [(0, eC.jsx)(bC.b, {
        label: qC("settingsMenu:showFog"),
        checked: KC.showFog,
        onClick: CC => {
          CC !== pC.current ? jy(() => bC.p) : jy(null);
          my.b.setClientEscMenuOptions({
            showFog: CC
          });
        },
        className: ky({
          SettingBoxWarning: !0 === KC.showFog && KC.fogChunkDistance > OC("chunkHorizAddDist")
        })
      }), (0, eC.jsx)(bC.h, {
        name: qC("settingsMenu:fogChunkDistance"),
        min: iy[0],
        max: SC,
        step: 1,
        initValue: null !== (fC = KC.fogChunkDistance) && void 0 !== fC ? fC : iy[0],
        onChange: CC => {
          my.b.setClientEscMenuOptions({
            fogChunkDistance: CC
          });
          YC.c.Gy("fogChunkDistanceChanged", CC);
        },
        circleInfoText: qC("settingsMenu:fogChunkDistanceInfo"),
        className: ky({
          SettingBoxDisabled: !1 === OC("showFog"),
          SettingBoxWarning: !0 === OC("showFog") && OC("fogChunkDistance") > OC("chunkHorizAddDist")
        })
      }), !0 === OC("showFog") && OC("fogChunkDistance") > OC("chunkHorizAddDist") && (0, eC.jsx)("div", {
        className: "SettingBox SettingsBoxWarning",
        children: qC("settingsMenu:fogChunkDistanceInfo")
      })]
    }), (0, eC.jsx)(bC.b, {
      label: qC("settingsMenu:disableBlockTextureAtlas"),
      checked: KC.disableTexAtlas,
      onClick: CC => {
        my.b.setClientEscMenuOptions({
          disableTexAtlas: CC
        });
      },
      circleInfoText: qC("settingsMenu:disableBlockTextureAtlasInfo")
    }), (0, eC.jsx)(bC.h, {
      name: qC("settingsMenu:fieldOfView"),
      min: 50,
      max: 160,
      step: 1,
      initValue: null !== (gC = KC.cameraFOV) && void 0 !== gC ? gC : 120,
      onChange: CC => {
        my.b.setClientEscMenuOptions({
          cameraFOV: CC
        });
      }
    }), (0, eC.jsx)(bC.b, {
      label: qC("settingsMenu:disableViewBobbing"),
      checked: KC.disableBobbing,
      onClick: CC => {
        my.b.setClientEscMenuOptions({
          disableBobbing: CC
        });
      },
      circleInfoText: qC("settingsMenu:disableViewBobbingInfo")
    }), (0, eC.jsx)(bC.b, {
      label: qC("settingsMenu:antiAliasing"),
      checked: KC.antiAliasing,
      onClick: CC => {
        CC !== wC.current ? jy(() => bC.p) : jy(null);
        my.b.setClientEscMenuOptions({
          antiAliasing: CC
        });
      },
      circleInfoText: qC("settingsMenu:antiAliasingInfo")
    }), (0, eC.jsx)(bC.h, {
      name: qC("settingsMenu:pixelScale"),
      min: 1,
      max: 8,
      step: 1,
      initValue: null !== (XC = KC.pixelScale) && void 0 !== XC ? XC : 1,
      onChange: CC => {
        my.b.setClientEscMenuOptions({
          pixelScale: CC
        });
      },
      circleInfoText: qC("settingsMenu:pixelScaleInfo"),
      format: CC => "".concat(CC, "x")
    }), (0, eC.jsx)(bC.b, {
      label: qC("settingsMenu:pixelSmoothing"),
      checked: KC.pixelSmoothing,
      onClick: CC => {
        my.b.setClientEscMenuOptions({
          pixelSmoothing: CC
        });
      },
      circleInfoText: qC("settingsMenu:pixelSmoothingInfo")
    })]
  });
}
const SC = 10;
const TC = 3;
export function g(CC) {
  return Math.max(SC, CC);
}
export function k(CC) {
  return Math.max(TC, CC);
}
export function n() {
  var CC;
  var yC;
  let IC = null !== (CC = XC.j.getItem("chunkHorizAddDist")) && void 0 !== CC ? CC : gC.e.defaultChunkHorizAddDistance;
  let fC = null !== (yC = XC.j.getItem("chunkVertAddDist")) && void 0 !== yC ? yC : gC.e.defaultChunkVertAddDistance;
  IC = (0, iy.f)(IC, 2, SC);
  fC = (0, iy.f)(fC, 2, TC);
  return [IC, fC];
}