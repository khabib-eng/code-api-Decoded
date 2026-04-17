var fC = require("./49.js");
var ky = require("./1363.js");
var gC = require("./544.js");
var AC = require("./1370.js");
var my = require("./442.js");
var XC = require("./1336.js");
var iy = require("./1408.js");
var LC = require("./1521.js");
var YC = require("./1383.js");
var bC = require("./1385.js");
var rC = require("./14.js");
var GC = require("./1425.js");
var eC = require("./1661.js");
var OC = require("./105.js");
var SC = require("./447.js");
var TC = require("./554.js");
var NC = TC;
var sC = require("./534.js");
const jy = {
  start: "top",
  center: "center",
  end: "bottom"
};
const qC = {
  start: "left",
  center: "center",
  end: "right"
};
const KC = {
  start: "0",
  center: "50%",
  end: void 0
};
const pC = {
  start: void 0,
  center: void 0,
  end: "0"
};
const wC = {
  start: "0",
  center: "-50%",
  end: "0"
};
export const d = (0, fC.memo)(function (CC) {
  let {
    info: yC,
    sizeInfo: IC,
    showing: XC = !0,
    verticalAlign: iy = "center",
    horizontalAlign: LC = "center",
    noFillShowSuperRankAdProbability: bC = .8,
    useExtraContrastBackgroundBox: TC = !1,
    autoRefreshEnabled: HC = !0
  } = CC;
  const {
    width: cC,
    height: UC
  } = (0, gC.$)(IC.parentRef);
  const {
    hideAds: EC
  } = (0, rC.f)(["hideAds"]);
  const VC = (0, fC.useRef)(null);
  const WC = (0, fC.useRef)(null);
  const xC = (0, fC.useRef)(null);
  const PC = (0, fC.useRef)(null);
  const zC = (0, fC.useRef)();
  const [BC, tC] = (0, fC.ey)(null);
  const JC = (0, fC.useRef)(null);
  const [nC, FC] = (0, fC.ey)("wait");
  const uC = (0, fC.useRef)(null);
  const DC = (0, fC.useRef)(!1);
  const ZC = (0, fC.useRef)(null);
  const lC = null === BC && "wait" === nC;
  const oC = null === BC && "show" === nC && (0, YC.D)() && "crazyGamesNinetyNineNightsBundle" !== my.N;
  function vC(CC, yC) {
    if (null === JC.current || !CC.contains(JC.current)) {
      const yC = function (yC) {
        let IC = Array.from(CC.children);
        for (let CC = 0; CC < yC; CC++) {
          let CC = [];
          for (const fC of IC) {
            CC = CC.concat(Array.from(fC.children));
          }
          const yC = CC.find(CC => "iframe" === CC.tagName.toLowerCase());
          if (yC) {
            return yC;
          }
          IC = CC;
        }
        return 0 === IC.length ? null : OC.d.chooseRandom(IC);
      }(4);
      tC(yC);
    }
    !function () {
      let yC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      let IC = Array.from(CC.children);
      for (let CC = 0; CC < yC; CC++) {
        let CC = [];
        for (const yC of IC) {
          CC = CC.concat(Array.from(yC.children));
        }
        IC = CC;
      }
      for (const CC of IC) {
        CC.classList.add("AdBanner");
        TC && CC.classList.add("AdBannerExtraContrast");
      }
    }(ky.h);
    RC(CC);
  }
  function hC() {
    let CC = document.getElementById(PC.current.divId);
    CC || (CC = document.createElement("div"), CC.id = PC.current.divId, VC.current.appendChild(CC), ZC.current = new MutationObserver(vC.bind(null, CC)), ZC.current.observe(CC, {
      childList: !0,
      subtree: !0
    }));
    CC.style.justifyContent = "center";
    CC.style.alignItems = iy;
    CC.style.justifyContent = LC;
    CC.style.transformOrigin = "".concat(jy[iy], " ").concat(qC[LC]);
    CC.style.zIndex = "2";
    AC.e.isUsingPlaywire() || (CC.style.minWidth = PC.current.width + "px", CC.style.minHeight = PC.current.height + "px");
    CC.style.scale = String(PC.current.scale);
    RC(CC);
  }
  function RC(CC) {
    WC.current && !xC.current ? (CC.style.display = "flex", CC.parentElement.style.display = "flex") : (CC.style.display = "none", CC.parentElement.style.display = "none");
  }
  function dC() {
    PC.current && (hC(), XC && function () {
      clearTimeout(uC.current);
      uC.current = setTimeout(async () => {
        null !== PC.current && null !== PC.current.currentAdMarker ? FC("noShow") : Math.random() < bC && (await (0, ky.l)(PC.current)) ? FC("show") : FC("noShow");
      }, 3e3);
      if (!(0, ky.eb)(PC.current)) {
        return;
      }
      (0, ky.bb)(PC.current).then(() => {
        if (PC.current) {
          const CC = document.getElementById(PC.current.divId);
          CC && ((0, ky.db)(PC.current, HC), RC(CC));
        }
      });
    }());
  }
  function QC(CC) {
    if (CC) {
      const yC = document.getElementById(CC.divId);
      yC && yC.remove();
    }
  }
  (0, fC.Oy)(() => () => {
    null !== PC.current && (0, ky.m)(PC.current);
    clearTimeout(uC.current);
  }, []);
  (0, fC.Oy)(() => {
    WC.current = XC;
    let CC = null;
    !0 === XC ? CC = setInterval(() => {
      PC.current && null !== PC.current.currentAdMarker && (PC.current.currentTimeHasBeenVisible += 300, zC.current && (zC.current.textContent = "".concat((PC.current.currentTimeHasBeenVisible / 1e3).toFixed(1), "s")));
    }, 300) : ("msnPlay" === my.D && null !== PC.current && (0, ky.m)(PC.current), PC.current && (PC.current.maxTimeHasBeenVisible = Math.max(PC.current.currentTimeHasBeenVisible, PC.current.maxTimeHasBeenVisible), PC.current.currentTimeHasBeenVisible = 0));
    dC();
    return () => {
      clearInterval(CC);
    };
  }, [XC]);
  (0, fC.Oy)(() => {
    xC.current = EC;
    if (PC.current) {
      const CC = document.getElementById(PC.current.divId);
      CC && RC(CC);
    }
  }, [EC]);
  (0, fC.Oy)(() => {
    var CC;
    var fC;
    var gC;
    const AC = (null === (CC = IC.maxDims) || void 0 === CC ? void 0 : CC.width) || cC;
    const XC = (null === (fC = IC.maxDims) || void 0 === fC ? void 0 : fC.height) || UC;
    const iy = function (CC, yC, IC, fC) {
      let gC = 1;
      const AC = 1;
      "bloxd" !== my.D || "adinplay" !== ky.c && "aditude" !== ky.c || (gC = .8);
      function XC(CC, yC, IC) {
        return "bloxd-io_".concat(yC, "x").concat(IC).concat(CC > 1 ? "_".concat(CC) : "");
      }
      function iy(CC, yC, IC) {
        let fC = !0;
        for (const ky of my.y[my.D].adConfig.bannerSupportRules) {
          switch (ky.type) {
            case "unsupportedDimensions":
              ky.dimensions.width === yC && ky.dimensions.height === IC && (fC = !1);
              break;
            case "partiallySupportedDimensions":
              ky.dimensions.width !== yC || ky.dimensions.height !== IC || ky.supportedAdIds.includes(CC) || (fC = !1);
          }
        }
        return fC;
      }
      function LC(CC, yC, ky) {
        return IC >= yC * gC && fC >= ky * gC && iy(CC, yC, ky);
      }
      if (!my.y[my.D].adConfig.canUseBanners) {
        console.log("Skipping rendering banner due to canUseBanners false");
        return null;
      }
      if (0 === IC || 0 === fC) {
        console.warn("AD ".concat(CC, "_").concat(yC, ": No ad can be shown because maxWidth of maxHeight is 0"));
        return null;
      }
      let YC;
      let bC;
      let rC;
      let GC;
      if ("leaderboard" === CC) {
        if (ky.cb) {
          YC = "responsive_banner_".concat(CC, "_").concat(yC);
          bC = "responsive";
          rC = IC;
          GC = fC;
        } else {
          if (LC(yC, 970, 250)) {
            YC = XC(yC, 970, 250);
            bC = "970x250";
            rC = 970;
            GC = 250;
          } else {
            if (LC(yC, 970, 90)) {
              YC = XC(yC, 970, 90);
              bC = "970x90";
              rC = 970;
              GC = 90;
            } else {
              if (LC(yC, 728, 90)) {
                YC = XC(yC, 728, 90);
                bC = "728x90";
                rC = 728;
                GC = 90;
              } else {
                if (LC(yC, 320, 100)) {
                  YC = XC(yC, 320, 100);
                  bC = "320x100";
                  rC = 320;
                  GC = 100;
                } else {
                  if (!LC(yC, 320, 50)) {
                    return null;
                  }
                  YC = XC(yC, 320, 50);
                  bC = "320x50";
                  rC = 320;
                  GC = 50;
                }
              }
            }
          }
        }
      } else {
        if ("square" === CC) {
          if (ky.cb) {
            YC = "responsive_banner_".concat(CC, "_").concat(yC);
            bC = "responsive";
            rC = IC;
            GC = fC;
          } else {
            if (!LC(yC, 300, 250)) {
              return null;
            }
            YC = XC(yC, 300, 250);
            bC = "300x250";
            rC = 300;
            GC = 250;
          }
        } else {
          if ("skyscraper" === CC) {
            if (ky.cb) {
              YC = "responsive_banner_".concat(CC, "_").concat(yC);
              bC = "responsive";
              rC = IC;
              GC = fC;
            } else {
              if (LC(yC, 300, 600)) {
                YC = XC(yC, 300, 600);
                bC = "300x600";
                rC = 300;
                GC = 600;
              } else {
                if (LC(yC, 160, 600)) {
                  YC = XC(yC, 160, 600);
                  bC = "160x600";
                  rC = 160;
                  GC = 600;
                } else {
                  if (LC(yC, 120, 600)) {
                    YC = XC(yC, 120, 600);
                    bC = "120x600";
                    rC = 120;
                    GC = 600;
                  } else {
                    if (LC(yC, 300, 250)) {
                      YC = XC(yC, 300, 250);
                      bC = "300x250";
                      rC = 300;
                      GC = 250;
                    } else {
                      if (!LC(yC, 120, 240)) {
                        return null;
                      }
                      YC = XC(yC, 120, 240);
                      bC = "120x240";
                      rC = 120;
                      GC = 240;
                    }
                  }
                }
              }
            }
          }
        }
      }
      let eC = Math.min(IC / rC, fC / GC);
      eC = Math.min(AC, Math.max(gC, eC));
      return {
        divId: YC,
        dims: bC,
        width: rC,
        height: GC,
        scale: eC,
        adType: CC,
        adId: yC,
        currentAdMarker: null,
        currentTimeHasBeenVisible: 0,
        maxTimeHasBeenVisible: 0
      };
    }(yC.adType, yC.adId, AC, XC);
    null === iy && null === PC.current || (null === iy || void 0 === iy ? void 0 : iy.dims) === (null === (gC = PC.current) || void 0 === gC ? void 0 : gC.dims) || (null === iy ? (FC("noShow"), PC.current && (QC(PC.current), (0, ky.m)(PC.current)), PC.current = null) : (FC("wait"), PC.current && (QC(PC.current), (0, ky.m)(PC.current)), PC.current = iy, dC()));
  }, [IC.maxDims, cC, UC]);
  (0, fC.Oy)(() => {
    JC.current = BC;
    null !== BC && (clearTimeout(uC.current), FC("noShow"));
    PC.current && (PC.current.currentAdMarker = BC, PC.current.currentTimeHasBeenVisible = 0, PC.current.maxTimeHasBeenVisible = 0);
  }, [BC]);
  (0, fC.Oy)(() => {
    XC && !EC && null !== BC && eC.b.adBannerEvent();
  }, [XC, EC, BC]);
  (0, fC.Oy)(() => {
    oC && !DC.current && (DC.current = !0, eC.b.adBannerEvent());
  }, [oC]);
  return (0, sC.jsxs)("div", {
    ref: VC,
    className: "AdBannerContainer",
    style: {
      alignItems: iy,
      justifyContent: LC
    },
    children: [SC.e.hasSearchParam("showAdVisibilityTimer") && (0, sC.jsx)("div", {
      ref: zC,
      className: "VisibilityTimer"
    }), lC && (0, sC.jsx)("div", {
      className: NC("AdBannerLoader", {
        AdBannerLoaderExtraContrast: TC
      }),
      style: {
        left: KC[LC],
        right: pC[LC],
        top: KC[iy],
        bottom: pC[iy],
        transform: "translate(".concat(wC[LC], ", ").concat(wC[iy], ")")
      },
      children: (0, sC.jsx)(GC.e, {
        loaderType: "Secondary"
      })
    }), oC && (0, sC.jsx)("div", {
      className: "SuperRankAdContainer",
      style: {
        left: KC[LC],
        right: pC[LC],
        top: KC[iy],
        bottom: pC[iy],
        transform: "translate(".concat(wC[LC], ", ").concat(wC[iy], ")")
      },
      children: (0, sC.jsx)(aC, {
        bannerInfo: PC.current,
        useExtraContrastBackgroundBox: TC,
        horizontalAlign: LC,
        verticalAlign: iy
      })
    })]
  });
}, (CC, yC) => {
  const {
    info: IC,
    sizeInfo: fC,
    showing: ky
  } = CC;
  const {
    info: gC,
    sizeInfo: AC,
    showing: my
  } = yC;
  let XC = !0;
  IC.adType === gC.adType && IC.adId === gC.adId || (XC = !1);
  fC.maxDims && AC.maxDims && (fC.maxDims.width === AC.maxDims.width && fC.maxDims.height === AC.maxDims.height || (XC = !1));
  ky !== my && (XC = !1);
  return XC;
});
function aC(CC) {
  var yC;
  let {
    bannerInfo: IC,
    useExtraContrastBackgroundBox: ky,
    horizontalAlign: gC,
    verticalAlign: AC
  } = CC;
  const {
    t: my
  } = (0, XC.n)();
  const [YC, GC] = (0, fC.ey)(null);
  const {
    hideAds: eC
  } = (0, rC.f)(["hideAds"]);
  (0, fC.Oy)(() => {
    var CC;
    var yC;
    const fC = null !== (CC = null === IC || void 0 === IC ? void 0 : IC.width) && void 0 !== CC ? CC : 0;
    const ky = null !== (yC = null === IC || void 0 === IC ? void 0 : IC.height) && void 0 !== yC ? yC : 0;
    GC(fC >= 970 && ky >= 250 ? "970x250" : fC >= 300 && ky >= 600 ? "300x600" : fC >= 300 && ky >= 250 ? "300x250" : fC >= 728 && ky >= 90 ? "728x90" : fC >= 320 && ky >= 50 ? "320x50" : null);
  }, [IC]);
  return eC || null === YC ? null : (0, sC.jsx)("div", {
    className: NC("AdBanner SuperRankAd SuperRankAd".concat(YC), {
      AdBannerExtraContrast: ky
    }),
    style: {
      scale: String(null !== (yC = IC.scale) && void 0 !== yC ? yC : 1),
      transformOrigin: "".concat(jy[AC], " ").concat(qC[gC])
    },
    children: (0, sC.jsxs)("div", {
      className: "SuperRankAdInner",
      children: [(0, sC.jsxs)("div", {
        className: "SuperRankAdLogoAndTitle",
        children: [(0, sC.jsx)("div", {
          className: "SuperRankAdLogo",
          children: (0, sC.jsx)("i", {
            className: "fa-solid fa-bolt"
          })
        }), (0, sC.jsx)("div", {
          className: "SuperRankAdTitle",
          children: my("homePage:superRank")
        })]
      }), (0, sC.jsx)("div", {
        className: "SuperRankAdSubTitle",
        children: my("homePage:getSuperRankPitch")
      }), (0, sC.jsx)("div", {
        className: "SuperRankAdButton",
        children: (0, sC.jsx)(iy.o, {
          onClick: () => {
            bC.b.showCustomPopup({
              body: (0, sC.jsx)(LC.d, {}),
              middleScreenPopupContainerClassName: "SuperRankPitchPopup",
              unlockPointerKey: "superRankPitchPopup"
            });
          },
          children: my("general:getItNow")
        })
      }), (0, sC.jsx)("div", {
        className: "SuperRankAdTable",
        children: (0, sC.jsx)(LC.c, {})
      })]
    })
  });
}