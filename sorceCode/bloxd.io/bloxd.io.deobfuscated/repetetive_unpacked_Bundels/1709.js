var fC = require("./18.js");
var ky = require("./49.js");
var gC = require("./554.js");
var AC = gC;
var my = require("./622.js");
var XC = require("./1714.js");
var iy = require("./1723.js");
var LC = require("./1535.js");
var YC = require("./544.js");
var bC = require("./38.js");
var rC = require("./1143.js");
var GC = require("./1408.js");
var eC = require("./1336.js");
var OC = require("./1425.js");
var SC = require("./1527.js");
var TC = require("./14.js");
var NC = require("./424.js");
var sC = require("./1727.js");
var jy = require("./534.js");
const qC = [require("./1731.js"), require("./1738.js"), require("./1741.js"), require("./1746.js")];
const KC = [[5, 6, 4.5, 2, 0, -12], [18, 3, 3, 0, 1.5, 15], [33, 10, 5, 3, .8, -8], [48, 5, 3.5, 1, 2.2, 20], [63, 8, 4, 2, 1.1, -15], [78, 2, 3, 0, 3, 10], [91, 7, 5, 3, .5, -20], [3, 24, 3, 1, 2.5, 8], [16, 28, 5, 3, .3, -10], [30, 20, 3.5, 2, 1.8, 25], [44, 26, 4.5, 0, .7, -18], [58, 22, 3, 1, 2, 12], [73, 30, 4, 2, 1.3, -22], [88, 24, 3.5, 3, .2, 5], [7, 43, 4, 0, 1.6, -14], [22, 46, 3, 3, .9, 18], [38, 40, 5, 1, 2.4, -6], [53, 48, 3.5, 2, .4, 22], [68, 42, 4.5, 0, 1.2, -16], [83, 46, 3, 3, 2.8, 8], [96, 40, 4, 1, .6, -12], [4, 60, 3.5, 2, 2.1, 15], [20, 66, 4.5, 1, .1, -20], [36, 62, 3, 0, 1.4, 10], [50, 68, 5, 3, 2.6, -8], [66, 63, 3.5, 2, .8, 18], [80, 58, 4, 0, 1.7, -14], [10, 80, 4, 3, 2.3, 12], [26, 86, 3, 1, .5, -18], [42, 82, 5, 2, 1.9, 8], [57, 88, 3.5, 0, .3, -10], [74, 83, 4.5, 3, 2.7, 15], [90, 80, 3, 1, 1, -22]];
const pC = [[12, 14, 4.5, 35, .5], [38, 7, 3.5, -25, 1.8], [56, 28, 5, 50, .2], [76, 16, 4, -40, 2.5], [90, 33, 3.5, 30, 1], [8, 52, 4, -20, 3], [46, 56, 5, 45, .8], [67, 50, 3.5, -35, 2.2], [28, 73, 4.5, 25, 1.5], [84, 68, 4, -30, .3], [52, 83, 3.5, 40, 2.8], [18, 90, 4, -45, 1.2]];
const wC = [[22, 10, .5, 0], [35, 6, .35, 1.2], [48, 15, .4, .5], [58, 5, .3, 2], [72, 28, .45, .8], [88, 10, .35, 1.5], [93, 32, .4, .3], [15, 40, .3, 2.5], [38, 38, .5, 1], [55, 45, .35, 1.8], [42, 52, .4, .2], [68, 42, .5, 2.2], [85, 55, .35, .7], [30, 65, .3, 1.3], [50, 70, .4, 2.8], [75, 65, .45, .4], [62, 80, .35, 1.6], [40, 85, .3, .9]];
export const e = {
  y2k: function (CC) {
    let {
      className: yC,
      style: IC,
      children: fC
    } = CC;
    return (0, jy.jsxs)("div", {
      className: AC("Y2kPackBackground PackBackground", yC),
      style: IC,
      children: [(0, jy.jsxs)("div", {
        className: "Y2kPackBackgroundInner",
        children: [(0, jy.jsx)("div", {
          className: "Y2kBlob Y2kBlob1"
        }), (0, jy.jsx)("div", {
          className: "Y2kBlob Y2kBlob2"
        }), (0, jy.jsx)("div", {
          className: "Y2kBlob Y2kBlob3"
        }), (0, jy.jsx)("div", {
          className: "Y2kBlob Y2kBlob4"
        }), (0, jy.jsx)("div", {
          className: "Y2kBlob Y2kBlob5"
        }), (0, jy.jsx)("div", {
          className: "Y2kBlob Y2kBlob6"
        })]
      }), fC]
    });
  },
  spring: function (CC) {
    let {
      className: yC,
      style: IC,
      children: fC
    } = CC;
    return (0, jy.jsxs)("div", {
      className: AC("SpringPackBackground PackBackground", yC),
      style: IC,
      children: [(0, jy.jsxs)("div", {
        className: "SpringPackBackgroundInner",
        children: [pC.map((CC, yC) => {
          let [IC, fC, ky, gC, AC] = CC;
          return (0, jy.jsx)("div", {
            className: "SpringLeafWrap",
            style: {
              left: "".concat(IC, "%"),
              top: "".concat(fC, "%"),
              transform: "rotate(".concat(gC, "deg)")
            },
            children: (0, jy.jsx)("div", {
              className: "SpringLeaf",
              style: {
                width: "".concat(ky, "em"),
                height: "".concat(.4 * ky, "em"),
                animationDelay: "".concat(AC, "s"),
                animationDuration: "".concat(4 + AC, "s")
              }
            })
          }, "l".concat(yC));
        }), KC.map((CC, yC) => {
          let [IC, fC, ky, gC, AC, my] = CC;
          return (0, jy.jsx)("div", {
            className: "SpringFlowerWrap",
            style: {
              left: "".concat(IC, "%"),
              top: "".concat(fC, "%"),
              transform: "rotate(".concat(my, "deg)")
            },
            children: (0, jy.jsx)("img", {
              className: "SpringFlower",
              src: qC[gC],
              alt: "",
              style: {
                width: "".concat(ky, "em"),
                height: "".concat(ky, "em"),
                animationDelay: "".concat(AC, "s"),
                animationDuration: "".concat(3 + AC, "s")
              }
            })
          }, "f".concat(yC));
        })]
      }), fC]
    });
  },
  astro: function (CC) {
    let {
      className: yC,
      style: IC,
      children: fC
    } = CC;
    return (0, jy.jsxs)("div", {
      className: AC("AstroPackBackground PackBackground", yC),
      style: IC,
      children: [(0, jy.jsxs)("div", {
        className: "AstroPackBackgroundInner",
        children: [(0, jy.jsx)("div", {
          className: "AstroNebula AstroNebula1"
        }), (0, jy.jsx)("div", {
          className: "AstroNebula AstroNebula2"
        }), (0, jy.jsx)("div", {
          className: "AstroPlanet AstroPlanetLargePink"
        }), (0, jy.jsx)("div", {
          className: "AstroPlanet AstroPlanetRingedPink"
        }), (0, jy.jsx)("div", {
          className: "AstroPlanet AstroPlanetRingedBlue"
        }), (0, jy.jsx)("div", {
          className: "AstroPlanet AstroPlanetSmallLav"
        }), wC.map((CC, yC) => {
          let [IC, fC, ky, gC] = CC;
          return (0, jy.jsx)("div", {
            className: "AstroStar",
            style: {
              left: "".concat(IC, "%"),
              top: "".concat(fC, "%"),
              width: "".concat(ky, "em"),
              height: "".concat(ky, "em"),
              animationDelay: "".concat(gC, "s")
            }
          }, "s".concat(yC));
        })]
      }), fC]
    });
  }
};
const aC = {
  standard: "CosmeticShopCardStandard",
  enhanced: "CosmeticShopCardEnhanced",
  premium: "CosmeticShopCardPremium"
};
const cC = Object.keys(iy.b).filter(CC => iy.b[CC].purchasable);
const UC = (0, ky.lazy)(() => Promise.resolve().then(require.bind(require, 1689)).then(CC => CC.ensureGameSetup().then(() => ({
  default: CC.CharacterPreview
}))));
let EC = null;
let VC = 0;
export function d(CC) {
  EC = CC;
  VC++;
  TC.b.set({
    openEverythingMenuName: NC.s.COSMETIC_SHOP
  });
}
function xC() {
  const {
    t: CC
  } = (0, eC.n)();
  return (0, jy.jsxs)("div", {
    className: "CosmeticShopSuperRankPromo",
    children: [(0, jy.jsx)("i", {
      className: "fa-solid fa-bolt CosmeticShopSuperRankPromoIcon",
      "aria-hidden": "true"
    }), (0, jy.jsx)("span", {
      className: "CosmeticShopSuperRankPromoText",
      children: CC("general:cosmeticPackSuperRankPromo")
    }), (0, jy.jsx)("i", {
      className: "fa-solid fa-bolt CosmeticShopSuperRankPromoIcon",
      "aria-hidden": "true"
    })]
  });
}
function PC(CC) {
  let {
    onSelectPack: yC,
    packItems: IC,
    ownedPacks: fC
  } = CC;
  const {
    t: ky
  } = (0, eC.n)();
  return (0, jy.jsx)("div", {
    className: "CosmeticShopGrid",
    children: cC.map(CC => {
      var gC;
      const my = iy.b[CC];
      const XC = fC.includes(CC);
      const LC = IC[CC];
      const YC = null !== LC && void 0 !== LC && LC.price ? "".concat(LC.price.amount, " ").concat(LC.price.currency) : null;
      const bC = my.tier ? aC[my.tier] : void 0;
      const rC = Object.entries(sC.c).filter(yC => {
        let [, IC] = yC;
        return IC.cosmeticPack === CC;
      });
      const eC = e[CC];
      return (0, jy.jsxs)("div", {
        className: AC("CosmeticShopCard", bC, {
          CosmeticShopCardOwned: XC
        }),
        onClick: () => {
          yC(CC);
        },
        children: [eC && (0, jy.jsx)(eC, {}), (0, jy.jsxs)("div", {
          className: "CosmeticShopCardOverlay",
          children: [rC.length > 0 && (0, jy.jsx)("div", {
            className: "CosmeticShopCardCharacters",
            children: rC.map(CC => {
              let [yC, IC] = CC;
              return (0, jy.jsx)("div", {
                className: "CosmeticShopCardCharacterPreview",
                style: {
                  backgroundImage: "url(/textures/charSkins/previews/character_".concat(yC, "_preview.png)")
                }
              }, yC);
            })
          }), (0, jy.jsxs)("div", {
            className: "CosmeticShopCardFooter",
            children: [(0, jy.jsx)("div", {
              className: "CosmeticShopCardName",
              children: null !== (gC = my.displayName) && void 0 !== gC ? gC : CC
            }), XC ? (0, jy.jsxs)("span", {
              className: "CosmeticShopCardOwned",
              children: [(0, jy.jsx)("i", {
                className: "fa-solid fa-check"
              }), " ", ky("general:owned")]
            }) : (0, jy.jsx)("span", {
              className: "CosmeticShopCardPrice",
              children: null !== YC && void 0 !== YC ? YC : "..."
            }), (0, jy.jsx)(GC.o, {
              onClick: IC => {
                IC.stopPropagation();
                yC(CC);
              },
              children: ky("general:view")
            })]
          })]
        })]
      }, CC);
    })
  });
}
function zC(CC) {
  var yC;
  let {
    pack: IC,
    onBack: gC,
    packItems: LC,
    buyPack: TC,
    packWidgetInControl: qC,
    ownedPacks: KC
  } = CC;
  const {
    t: pC
  } = (0, eC.n)();
  const {
    userContext: wC,
    isUserContextUpdating: aC
  } = (0, YC.fb)();
  const cC = (0, YC.X)();
  const EC = (0, ky.useRef)(null);
  const VC = (0, ky.useRef)(!1);
  const [WC, PC] = (0, ky.ey)({});
  const [zC, BC] = (0, ky.ey)({});
  const tC = KC.includes(IC);
  const JC = LC[IC];
  const nC = null !== JC && void 0 !== JC && JC.price ? "".concat(JC.price.amount, " ").concat(JC.price.currency) : null;
  const FC = iy.b[IC];
  const uC = function (CC) {
    return my.f.filter(yC => Object.values(XC.h[yC]).some(yC => yC.cosmeticPack === CC));
  }(IC);
  function DC(CC, yC) {
    var IC;
    null !== (IC = EC.current) && void 0 !== IC && IC.isReady() && EC.current.updateCosmetic(CC, yC);
  }
  (0, bC.e)("playerCosmeticsUpdated", CC => {
    let yC = !1;
    for (const {
      Rf: IC,
      Hf: fC,
      af: ky
    } of CC) {
      if (IC !== (0, rC.sI)().pI) {
        return;
      }
      yC = !0;
      VC.current || DC(fC, ky);
      cC();
    }
    yC && (VC.current = !0);
  });
  (0, ky.Oy)(() => {
    if (!aC) {
      for (const [CC, yC] of Object.entries(wC.getPlayerCosmetics())) {
        DC(CC, yC);
      }
      cC();
    }
  }, [aC]);
  const ZC = Object.entries(sC.c).filter(CC => {
    let [, yC] = CC;
    return yC.cosmeticPack === IC;
  });
  function lC(CC) {
    return Object.entries(CC).every(CC => {
      let [yC, IC] = CC;
      return WC[yC] === IC;
    });
  }
  const oC = e[IC];
  return (0, jy.jsxs)("div", {
    className: "CosmeticShopDetail",
    children: [oC && (0, jy.jsx)(oC, {}), (0, jy.jsxs)("div", {
      className: "CosmeticShopDetailHeader",
      children: [(0, jy.jsx)("div", {
        className: "CosmeticShopDetailHeaderSide",
        children: (0, jy.jsx)(GC.c, {
          className: "CosmeticShopDetailBackButton",
          onClick: gC,
          children: pC("general:back")
        })
      }), (0, jy.jsx)("div", {
        className: "CosmeticShopDetailTitleArea",
        children: (0, jy.jsx)("span", {
          className: "CosmeticShopDetailTitle",
          children: null !== (yC = FC.displayName) && void 0 !== yC ? yC : IC
        })
      }), (0, jy.jsx)("div", {
        className: "CosmeticShopDetailHeaderSide",
        children: tC && (0, jy.jsxs)("span", {
          className: "CosmeticShopDetailOwned",
          children: [(0, jy.jsx)("i", {
            className: "fa-solid fa-check"
          }), " ", pC("general:owned")]
        })
      })]
    }), (0, jy.jsxs)("div", {
      className: "CosmeticShopDetailBody",
      children: [(0, jy.jsxs)("div", {
        className: "CosmeticShopDetailCosmeticsArea",
        children: [ZC.length > 0 && (0, jy.jsxs)("div", {
          className: "CosmeticShopDetailTypeSection",
          children: [(0, jy.jsxs)("div", {
            className: "CosmeticShopDetailTypeLabel",
            children: [(0, jy.jsx)("i", {
              className: "fa-solid fa-user-astronaut"
            }), pC("general:characters")]
          }), (0, jy.jsx)("div", {
            className: "CosmeticShopDetailCharacters",
            children: ZC.map(CC => {
              let [yC, {
                cosmetics: ky
              }] = CC;
              const gC = lC(ky);
              return (0, jy.jsx)("div", {
                className: AC("CosmeticShopDetailCharacterCard", {
                  CosmeticShopDetailCharacterCardTryingOn: gC
                }),
                onClick: () => {
                  !function (CC) {
                    if (lC(CC)) {
                      PC({});
                    } else {
                      PC((0, fC.d)({}, CC));
                      const ky = {};
                      for (const [fC, gC] of Object.entries(CC)) {
                        var yC;
                        const CC = (0, XC.p)(fC, gC);
                        const AC = null !== (yC = null === CC || void 0 === CC ? void 0 : CC.colourGroup) && void 0 !== yC ? yC : null;
                        if (AC) {
                          const CC = (0, XC.l)(gC);
                          CC && (ky["".concat(IC, "_").concat(fC, "_").concat(AC)] = Number(CC[1]));
                        }
                      }
                      Object.keys(ky).length > 0 && BC(CC => (0, fC.d)((0, fC.d)({}, CC), ky));
                    }
                  }(ky);
                },
                children: (0, jy.jsx)("div", {
                  className: "CosmeticShopDetailCharacterPreview",
                  style: {
                    backgroundImage: "url(/textures/charSkins/previews/character_".concat(yC, "_preview.png)")
                  }
                })
              }, yC);
            })
          })]
        }), uC.map(CC => {
          const yC = function (CC, yC, IC, fC) {
            const ky = Object.keys(XC.h[CC]).filter(IC => {
              var fC;
              return (null === (fC = (0, XC.p)(CC, IC)) || void 0 === fC ? void 0 : fC.cosmeticPack) === yC;
            }).sort((yC, IC) => {
              var fC;
              var ky;
              var gC;
              var AC;
              return (null !== (fC = null === (ky = (0, XC.p)(CC, yC)) || void 0 === ky ? void 0 : ky.clientIdx) && void 0 !== fC ? fC : 0) - (null !== (gC = null === (AC = (0, XC.p)(CC, IC)) || void 0 === AC ? void 0 : AC.clientIdx) && void 0 !== gC ? gC : 0);
            });
            const gC = [];
            const AC = new Map();
            for (const iy of ky) {
              var my;
              var LC;
              const yC = null !== (my = null === (LC = (0, XC.p)(CC, iy)) || void 0 === LC ? void 0 : LC.colourGroup) && void 0 !== my ? my : null;
              AC.has(yC) || (AC.set(yC, []), gC.push(yC));
              AC.get(yC).push(iy);
            }
            return gC.map(ky => {
              var gC;
              const my = AC.get(ky);
              const LC = ky ? null === (gC = IC.colourGroups) || void 0 === gC ? void 0 : gC[ky] : void 0;
              if ((null === LC || void 0 === LC ? void 0 : LC.showSwatchSelector) && "eyebrows" !== CC && LC) {
                var YC;
                const IC = null !== (YC = fC["".concat(yC, "_").concat(CC, "_").concat(ky)]) && void 0 !== YC ? YC : (0, iy.g)(LC.colours);
                return {
                  groupName: ky,
                  cosmetics: my.filter(CC => {
                    const yC = (0, XC.l)(CC);
                    return !yC || IC.toString() === yC[1].toString();
                  })
                };
              }
              return {
                groupName: ky,
                cosmetics: my
              };
            });
          }(CC, IC, FC, zC);
          return (0, jy.jsxs)("div", {
            className: "CosmeticShopDetailTypeSection",
            children: [(0, jy.jsxs)("div", {
              className: "CosmeticShopDetailTypeLabel",
              children: [(0, jy.jsx)("i", {
                className: NC.E[CC]
              }), pC(NC.G[CC])]
            }), yC.map(yC => {
              var ky;
              let {
                groupName: gC,
                cosmetics: my
              } = yC;
              const LC = gC ? null === (ky = FC.colourGroups) || void 0 === ky ? void 0 : ky[gC] : void 0;
              const YC = "".concat(IC, "_").concat(CC, "_").concat(gC);
              const bC = (null === LC || void 0 === LC ? void 0 : LC.showSwatchSelector) && "eyebrows" !== CC;
              return (0, jy.jsxs)("div", {
                className: "CosmeticShopDetailGroup",
                children: [bC && LC && (0, jy.jsx)("div", {
                  className: "CosmeticColorSwatchCell",
                  children: [...LC.colours.map((CC, yC) => ({
                    color: CC,
                    index: yC
                  }))].sort((CC, yC) => CC.color.order - yC.color.order).map(yC => {
                    var ky;
                    let {
                      color: my,
                      index: bC
                    } = yC;
                    return (0, jy.jsx)("div", {
                      className: AC("CosmeticColorOption", {
                        CosmeticColorOptionSelected: (null !== (ky = zC[YC]) && void 0 !== ky ? ky : (0, iy.g)(LC.colours)) === bC
                      }),
                      style: {
                        backgroundColor: "rgb(".concat(my.rbg.join(","), ")")
                      },
                      onClick: () => {
                        var yC;
                        BC(CC => (0, fC.d)((0, fC.d)({}, CC), {}, {
                          [YC]: bC
                        }));
                        const ky = WC[CC];
                        const AC = ky ? (0, XC.p)(CC, ky) : null;
                        if (!((null === AC || void 0 === AC ? void 0 : AC.cosmeticPack) === IC) || !ky) {
                          return;
                        }
                        if ((null !== (yC = null === AC || void 0 === AC ? void 0 : AC.colourGroup) && void 0 !== yC ? yC : null) !== gC) {
                          return;
                        }
                        const my = (0, XC.l)(ky);
                        if (my) {
                          const yC = "".concat(CC, "_").concat(my[0], "_").concat(bC);
                          PC(IC => (0, fC.d)((0, fC.d)({}, IC), {}, {
                            [CC]: yC
                          }));
                        }
                      }
                    }, my.rbg.join());
                  })
                }), my.map(yC => {
                  var IC;
                  const ky = WC[CC] === yC;
                  return (0, jy.jsx)("div", {
                    className: AC("CharCustomPartWrapper", {
                      TryingOnCharCustomPartWrapper: ky
                    }),
                    onClick: () => {
                      !function (CC, yC) {
                        PC(IC => {
                          if (IC[CC] === yC) {
                            const yC = (0, fC.d)({}, IC);
                            delete yC[CC];
                            return yC;
                          }
                          return (0, fC.d)((0, fC.d)({}, IC), {}, {
                            [CC]: yC
                          });
                        });
                      }(CC, yC);
                    },
                    children: (0, jy.jsx)("div", {
                      className: "CharCustomPart",
                      style: null !== (IC = (0, XC.p)(CC, yC)) && void 0 !== IC && IC.previewTex ? {
                        backgroundImage: "url(/textures/charSkins/previews/".concat((0, XC.p)(CC, yC).previewTex, ".png)")
                      } : {}
                    })
                  }, yC);
                })]
              }, null !== gC && void 0 !== gC ? gC : "ungrouped");
            })]
          }, CC);
        })]
      }), (0, jy.jsxs)("div", {
        className: "CosmeticShopDetailPreviewArea",
        children: [(0, jy.jsx)(xC, {}), (0, jy.jsx)(ky.Suspense, {
          fallback: (0, jy.jsx)("div", {
            className: "CosmeticShopDetailPreviewLoading",
            children: (0, jy.jsx)(OC.e, {})
          }),
          children: (0, jy.jsx)(UC, {
            ref: EC,
            forcedCosmetics: WC,
            onReady: () => {
              for (const [CC, yC] of Object.entries(wC.getPlayerCosmetics())) {
                DC(CC, yC);
              }
            }
          })
        })]
      })]
    }), !tC && (0, jy.jsx)("div", {
      className: "CosmeticShopDetailFooter",
      children: wC.isLoggedIn() ? (0, jy.jsx)(GC.t, {
        onClick: () => {
          qC || TC(IC);
        },
        loading: !nC || qC,
        children: nC ? "".concat(pC("greenvilleGame:buy"), " - ").concat(nC) : pC("greenvilleGame:buy")
      }) : (0, jy.jsx)("div", {
        className: "CosmeticShopDetailLoginPrompt",
        children: aC ? (0, jy.jsx)(OC.e, {}) : (0, jy.jsxs)(jy.Fragment, {
          children: [(0, jy.jsx)("span", {
            className: "SmallTextBold",
            children: pC("homePage:logInToPurchase")
          }), (0, jy.jsx)(SC.c, {
            showProgressUpdateMessage: !1
          })]
        })
      })
    })]
  });
}
export const c = (0, ky.memo)(function (CC) {
  let {
    show: yC
  } = CC;
  const [IC, fC] = (0, ky.ey)(null);
  const {
    userContext: gC
  } = (0, YC.fb)();
  const {
    packItems: AC,
    xsollaWidgetInControl: my,
    buyPack: XC
  } = (0, LC.b)();
  const iy = gC.getOwnedCosmeticPacks();
  const bC = (0, ky.useRef)(0);
  (0, ky.Oy)(() => {
    yC && EC && VC !== bC.current && (bC.current = VC, fC(EC), EC = null);
  });
  return yC ? IC ? (0, jy.jsx)("div", {
    className: "CosmeticShopContainer",
    children: (0, jy.jsx)(zC, {
      pack: IC,
      onBack: () => {
        fC(null);
      },
      packItems: AC,
      buyPack: XC,
      packWidgetInControl: my,
      ownedPacks: iy
    })
  }) : (0, jy.jsxs)("div", {
    className: "CosmeticShopContainer",
    children: [(0, jy.jsx)(xC, {}), (0, jy.jsx)(PC, {
      onSelectPack: fC,
      packItems: AC,
      ownedPacks: iy
    })]
  }) : null;
});