var fC = require("./18.js");
var ky = require("./49.js");
var gC = require("./1336.js");
var AC = require("./1447.js");
var my = require("./554.js");
var XC = my;
var iy = require("./544.js");
var LC = require("./408.js");
var YC = require("./1338.js");
var bC = require("./424.js");
var rC = require("./1383.js");
var GC = require("./14.js");
var eC = require("./616.js");
var OC = require("./1425.js");
var SC = require("./105.js");
var TC = require("./1417.js");
var NC = require("./1388.js");
var sC = require("./1408.js");
var jy = require("./1149.js");
var qC = require("./1153.js");
var KC = require("./442.js");
var pC = require("./534.js");
export const g = (0, ky.memo)(function (CC) {
  let {
    backgroundImageUrl: yC,
    titleTranslationKey: IC,
    subText: AC,
    popupDescTranslationKey: my,
    badges: GC,
    useLongRatio: SC = !1,
    countdownInformation: jy,
    ccu: qC,
    gameWidth: KC,
    disabled: wC,
    onClick: HC,
    shouldShowLinkIcon: aC = !1,
    customClassName: cC,
    rowSize: UC = 10
  } = CC;
  const {
    t: EC,
    selectedLanguage: VC
  } = (0, gC.n)();
  const [WC, xC] = (0, ky.ey)(!1);
  const PC = "updateCountdown" === (null === jy || void 0 === jy ? void 0 : jy.type);
  const zC = "releaseCountdown" === (null === jy || void 0 === jy ? void 0 : jy.type);
  const BC = (0, rC.e)(GC);
  return (0, pC.jsx)(NC.f, {
    tooltipInner: (0, pC.jsxs)("div", {
      className: "ChooseGameTooltip",
      children: [VC.code === YC.c.ENGLISH ? (0, pC.jsx)(pC.Fragment, {}) : (0, pC.jsxs)("span", {
        style: {
          opacity: "0.5"
        },
        children: [EC(IC, {
          lng: YC.c.ENGLISH
        }), (0, pC.jsx)("br", {})]
      }), EC(my)]
    }),
    hideTooltip: (0, LC.W)() || !my,
    children: (0, pC.jsx)("div", {
      className: XC("GameCardContainer", {
        DisabledGameCardContainer: wC,
        UpdateCountdown: PC,
        ReleaseCountdown: zC
      }),
      style: {
        width: KC || "".concat(100 / UC * (SC ? 1.5 : 1), "%"),
        aspectRatio: SC ? "3/2" : "1/1"
      },
      children: (0, pC.jsx)("div", (0, fC.d)((0, fC.d)({}, (0, sC.F)({
        disabled: wC,
        keys: [" "]
      })), {}, {
        className: XC("AvailableGame", {
          [null !== cC && void 0 !== cC ? cC : ""]: !!cC
        }),
        style: {
          backgroundImage: "url(".concat(yC, ")")
        },
        onClick: wC ? void 0 : HC,
        children: (0, pC.jsxs)("div", {
          className: "AvailableGameInner",
          children: [!zC && (0, pC.jsxs)("div", {
            className: "AvailableGameCCU SmallTextBold",
            children: [null === qC && (0, pC.jsx)(OC.e, {
              loaderType: "Secondary"
            }), null !== qC && (0, pC.jsxs)("div", {
              className: "AvailableGameCCUInner AnimFadeIn",
              children: [(0, pC.jsx)("i", {
                className: "fa-solid fa-user"
              }), " ", (0, eC.lb)(qC)]
            })]
          }), !zC && (0, pC.jsxs)("div", {
            className: "AvailableGameTextWrapper",
            children: [(0, pC.jsxs)("div", {
              className: "AvailableGameText SmallTextBold",
              children: [EC(IC), AC ? (0, pC.jsxs)("span", {
                className: "AvailableGameSubText",
                children: [" ", AC]
              }) : null, aC && (0, pC.jsxs)("span", {
                children: [" ", (0, pC.jsx)("i", {
                  className: "fa-solid fa-external-link"
                })]
              })]
            }), PC && jy && (0, pC.jsxs)("div", {
              className: "UpdateCountdownText",
              children: ["Update in", " ", (0, pC.jsx)(iy.j, {
                toTime: jy.countdownToTime,
                onReachEndOfCountdown: () => {
                  xC(!0);
                }
              })]
            })]
          }), zC && jy && (0, pC.jsxs)("div", {
            className: "ReleaseCountdownText",
            children: [(0, pC.jsx)("div", {
              className: "ReleaseCountdownTextUpper",
              children: EC(jy.previewText)
            }), (0, pC.jsx)(iy.j, {
              toTime: jy.countdownToTime,
              onReachEndOfCountdown: () => {
                xC(!0);
              }
            })]
          }), (0, pC.jsx)("div", {
            className: "CountdownConfetti",
            children: (0, pC.jsx)(TC.c, {
              showSignal: WC ? 1 : 0
            })
          }), !zC && (0, pC.jsx)("div", {
            className: "ThumbnailBadgesContainer",
            children: BC.map(CC => (0, pC.jsx)("div", {
              className: "ThumbnailBadgeContainer " + CC.type,
              children: (0, pC.jsx)("div", {
                className: "ThumbnailBadgeMain",
                children: (0, pC.jsx)(iy.J, {
                  text: bC.H[CC.type]
                })
              })
            }, CC.type))
          })]
        })
      }))
    })
  });
});
export const d = (0, ky.memo)(function (CC) {
  let {
    gameNameWithVariation: yC,
    disabled: IC,
    gameWidth: fC,
    onClick: ky = null
  } = CC;
  const {
    t: my
  } = (0, gC.n)();
  const {
    gameCcus: XC
  } = (0, GC.f)(["gameCcus"]);
  const iy = (0, AC.t)();
  const LC = jy.b[yC];
  const YC = LC.smallPicture;
  const bC = LC.title;
  const rC = my(LC.variationTitle);
  const OC = LC.description;
  const TC = LC.badges;
  const NC = LC.thumbnailUseLongRatio;
  const sC = (0, eC.s)(yC);
  const HC = (0, qC.c)().homeRowSize;
  const aC = "crazygames" === KC.D && "crazyGamesNinetyNineNightsBundle" !== KC.N && "ninetyNineNights" === yC;
  return (0, pC.jsx)(g, {
    backgroundImageUrl: "/textures/games/".concat(yC, "/").concat(YC, ".jpg"),
    titleTranslationKey: bC,
    subText: rC,
    popupDescTranslationKey: OC,
    badges: TC,
    useLongRatio: NC,
    countdownInformation: sC,
    ccu: function () {
      var CC;
      return XC ? null !== (CC = XC[yC]) && void 0 !== CC ? CC : 0 : null;
    }(),
    gameWidth: fC,
    disabled: IC,
    onClick: function () {
      if (ky) {
        ky();
      } else {
        if (LC.schematicId) {
          iy("/game/".concat((0, SC.Kd)(LC.schematicId)));
        } else {
          if ("customGames" === yC) {
            iy("/custom-games");
          } else {
            var CC;
            const IC = null !== (CC = LC.urlName) && void 0 !== CC ? CC : yC;
            iy("/game/".concat(IC));
          }
        }
      }
    },
    shouldShowLinkIcon: aC,
    customClassName: "AvailableGame".concat(yC.replace("_", "")),
    rowSize: HC
  });
});