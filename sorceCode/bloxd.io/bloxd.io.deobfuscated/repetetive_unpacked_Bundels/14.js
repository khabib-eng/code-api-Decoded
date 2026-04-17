var fC;
var ky;
var gC;
var AC;
var my;
var XC;
var iy;
var LC;
var YC;
var bC;
var rC;
var GC;
var eC;
var OC;
var SC;
var TC;
var NC;
var sC;
var jy;
var qC;
var KC;
var pC;
var wC;
var HC = require("./18.js");
var aC = require("./38.js");
var cC = require("./82.js");
var UC = require("./44.js");
var EC = UC;
var VC = require("./49.js");
var WC = require("./105.js");
var xC = require("./408.js");
const PC = new EC();
const zC = {
  gameState: "landingPage",
  requiredLibrariesLoaded: !1,
  initSdkSelectorFinished: !1,
  gameCcus: null,
  router: null,
  discordContext: null,
  soundOnFromVisibility: !0,
  soundOnFromAd: !0,
  soundVolume: null !== (fC = cC.j.getItem("soundVol")) && void 0 !== fC ? fC : .5,
  musicVolume: null !== (ky = cC.j.getItem("musicVol")) && void 0 !== ky ? ky : .5,
  isTouchScreen: !1,
  isKeydownEnabled: !0,
  isUiHidden: !1,
  hideAds: !1,
  notchSize: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  reactNativeFeatureFlags: {
    useLogin: !0
  },
  showDebugOverlay: !1,
  openEverythingMenuName: null,
  openInGameMenuName: null,
  hideSocialLocationFrom: null,
  clientEscMenuOptions: {
    useProfanityFilter: null === (gC = cC.j.getItem("UseProfanityFilter")) || void 0 === gC || gC,
    showChat: null === (AC = cC.j.getItem("showChat")) || void 0 === AC || AC,
    touchscreenSensitivity: null !== (my = cC.j.getItem("touchscreenSensitivity")) && void 0 !== my ? my : 150,
    mouseSensitivity: null !== (XC = cC.j.getItem("mouseSensitivity")) && void 0 !== XC ? XC : 15,
    showCoordinates: null !== (iy = cC.j.getItem("showCoordinates")) && void 0 !== iy && iy,
    showChunkCoordinates: null !== (LC = cC.j.getItem("showChunkCoordinates")) && void 0 !== LC && LC,
    showFPS: null !== (YC = cC.j.getItem("showFPS")) && void 0 !== YC && YC,
    disableBunnyHopping: null !== (bC = cC.j.getItem("disableBunnyHopping")) && void 0 !== bC && bC,
    disableTexAtlas: null !== (rC = cC.j.getItem("disableTexAtlas")) && void 0 !== rC && rC,
    disableFullscreen: null !== (GC = cC.j.getItem("disableFullscreen")) && void 0 !== GC && GC,
    crouchIsToggle: null !== (eC = cC.j.getItem("crouchIsToggle")) && void 0 !== eC && eC,
    enableLighting: null !== (OC = cC.j.getItem("enableLighting")) && void 0 !== OC && OC,
    showFog: null !== (SC = cC.j.getItem("showFog")) && void 0 !== SC && SC,
    fogChunkDistance: null !== (TC = cC.j.getItem("fogChunkDistance")) && void 0 !== TC ? TC : 2,
    cameraFOV: null !== (NC = cC.j.getItem("cameraFOV")) && void 0 !== NC ? NC : 120,
    disableBobbing: null === (sC = cC.j.getItem("disableBobbing")) || void 0 === sC || sC,
    disableAmbientOcclusion: null !== (jy = cC.j.getItem("disableAmbientOcclusion")) && void 0 !== jy && jy,
    ambientLightIntensity: null !== (qC = cC.j.getItem("ambientLightIntensity")) && void 0 !== qC ? qC : .5,
    antiAliasing: null !== (KC = cC.j.getItem("antiAliasing")) && void 0 !== KC ? KC : (0, xC.t)(),
    pixelScale: null !== (pC = cC.j.getItem("pixelScale")) && void 0 !== pC ? pC : (0, xC.v)(),
    pixelSmoothing: null === (wC = cC.j.getItem("pixelSmoothing")) || void 0 === wC || wC
  }
};
Object.keys(zC);
export const b = new class {
  set(CC) {
    const yC = {};
    let IC = !1;
    for (const fC in CC) {
      (0, WC.Md)(zC[fC], CC[fC]) || (yC[fC] = CC[fC], IC = !0);
    }
    if (IC) {
      for (const CC in yC) {
        zC[CC] = yC[CC];
      }
      if (yC.clientEscMenuOptions) {
        const CC = yC.clientEscMenuOptions;
        cC.j.setItem("UseProfanityFilter", CC.useProfanityFilter);
        cC.j.setItem("showChat", CC.showChat);
        cC.j.setItem("touchscreenSensitivity", CC.touchscreenSensitivity);
        cC.j.setItem("mouseSensitivity", CC.mouseSensitivity);
        cC.j.setItem("showCoordinates", CC.showCoordinates);
        cC.j.setItem("showChunkCoordinates", CC.showChunkCoordinates);
        cC.j.setItem("showFPS", CC.showFPS);
        cC.j.setItem("disableBunnyHopping", CC.disableBunnyHopping);
        cC.j.setItem("disableTexAtlas", CC.disableTexAtlas);
        cC.j.setItem("disableFullscreen", CC.disableFullscreen);
        cC.j.setItem("crouchIsToggle", CC.crouchIsToggle);
        cC.j.setItem("enableLighting", CC.enableLighting);
        cC.j.setItem("showFog", CC.showFog);
        cC.j.setItem("fogChunkDistance", CC.fogChunkDistance);
        cC.j.setItem("cameraFOV", CC.cameraFOV);
        cC.j.setItem("disableBobbing", CC.disableBobbing);
        cC.j.setItem("disableAmbientOcclusion", CC.disableAmbientOcclusion);
        cC.j.setItem("ambientLightIntensity", CC.ambientLightIntensity);
        cC.j.setItem("antiAliasing", CC.antiAliasing);
        cC.j.setItem("pixelScale", CC.pixelScale);
        cC.j.setItem("pixelSmoothing", CC.pixelSmoothing);
      }
      void 0 !== yC.soundVolume && cC.j.setItem("soundVol", yC.soundVolume);
      void 0 !== yC.musicVolume && cC.j.setItem("musicVol", yC.musicVolume);
      PC.emit("appManagerUpdated", Object.keys(yC));
      for (const CC in yC) {
        aC.c.Gy("appManagerUpdated|".concat(CC), yC[CC]);
      }
    }
  }
  setClientEscMenuOptions(CC) {
    this.set({
      clientEscMenuOptions: (0, HC.d)((0, HC.d)({}, zC.clientEscMenuOptions), CC)
    });
  }
  get(CC) {
    return zC[CC];
  }
}();
export function f(CC) {
  const [yC, IC] = (0, VC.ey)(ky());
  function fC(yC) {
    yC.some(yC => CC.includes(yC)) && IC(ky());
  }
  function ky() {
    const yC = {};
    for (const IC of CC) {
      yC[IC] = zC[IC];
    }
    return yC;
  }
  (0, VC.Oy)(() => {
    PC.on("appManagerUpdated", fC);
    return () => {
      PC.removeListener("appManagerUpdated", fC);
    };
  }, []);
  return yC;
}