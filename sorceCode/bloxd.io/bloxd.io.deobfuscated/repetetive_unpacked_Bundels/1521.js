var fC = require("./554.js");
var ky = fC;
var gC = require("./49.js");
var AC = require("./138.js");
var my = require("./1425.js");
var XC = require("./544.js");
var iy = require("./1527.js");
var LC = require("./1535.js");
var YC = require("./1511.js");
var bC = require("./1342.js");
var rC = require("./1336.js");
var GC = require("./1408.js");
var eC = require("./534.js");
export function d(CC) {
  let {
    gift: yC = !1,
    _giftRecipient: IC = ""
  } = CC;
  const {
    userContext: fC,
    isUserContextUpdating: AC
  } = (0, XC.fb)();
  const {
    t: OC
  } = (0, rC.n)();
  const {
    xsollaItem: TC,
    xsollaWidgetInControl: NC,
    buySuperRank: sC,
    createXsollaOrder: jy
  } = (0, LC.f)();
  const [qC, KC] = (0, gC.ey)(yC);
  const [pC, wC] = (0, gC.ey)(!0);
  const HC = (0, gC.useRef)(null);
  const [aC, cC] = (0, gC.ey)(!1);
  const [UC, EC] = (0, gC.ey)(!aC);
  const [VC, WC] = (0, gC.ey)("");
  const [xC, PC] = (0, gC.ey)("");
  const [zC, BC] = (0, gC.ey)(IC);
  const tC = (0, gC.useRef)("");
  function JC() {
    wC(!1);
  }
  function nC(CC) {
    setTimeout(function () {
      HC.current.play();
    }, 3e3);
  }
  (0, gC.Oy)(() => {
    null !== HC.current && (HC.current.addEventListener("loadeddata", JC), HC.current.addEventListener("ended", nC));
    return () => {
      null !== HC.current && (HC.current.removeEventListener("loadeddata", JC), HC.current.removeEventListener("ended", nC));
    };
  }, [HC]);
  let FC = tC.current === zC;
  const uC = () => {
    if (!TC || !qC || aC || !UC || FC) {
      return;
    }
    WC("");
    PC("");
    tC.current = zC;
    FC = !0;
    cC(!0);
    EC(!1);
    const CC = Date.now();
    jy(fC, zC).then(CC => {
      !CC.err && CC.token && CC.orderId && (WC(CC.token), PC(CC.orderId));
    }).catch(CC => {
      tC.current = "";
      console.error(CC);
    }).finally(() => {
      cC(!1);
      setTimeout(() => {
        EC(!0);
      }, 1e3 + CC - Date.now());
    });
  };
  const DC = TC;
  const ZC = DC && (!qC || VC && xC && FC);
  (0, gC.Oy)(() => {
    TC && zC === IC && uC();
  }, [TC]);
  return (0, eC.jsxs)("div", {
    className: ky("SuperRankPitch", {
      SuperRankGiftPitch: qC
    }),
    children: [(0, eC.jsxs)("div", {
      className: "SuperRankLeft",
      children: [!0 === pC && (0, eC.jsx)(my.e, {}), (0, eC.jsx)("video", {
        ref: HC,
        autoPlay: !0,
        muted: !0,
        playsInline: !0,
        controls: !0,
        children: (0, eC.jsx)("source", {
          src: "/textures/miscImages/SuperRankPreview.mp4",
          type: "video/mp4"
        })
      })]
    }), (0, eC.jsxs)("div", {
      className: "SuperRankRight",
      children: [(0, eC.jsxs)("div", {
        className: "SupperRankRightHeader",
        children: [(0, eC.jsxs)("div", {
          className: "SuperRankLogo",
          children: [(0, eC.jsx)("i", {
            className: "fa-solid fa-bolt"
          }), " ", OC(qC ? "homePage:giftSuperRank" : "homePage:superRank")]
        }), (0, eC.jsx)("div", {
          className: "SupperRankSubTitle SmallTextBold",
          children: OC(qC ? "homePage:giftSuperRankPitch" : "homePage:getSuperRankPitch")
        })]
      }), (0, eC.jsx)(c, {}), (0, eC.jsxs)("div", {
        className: "GetSuperRank",
        children: [!1 === fC.isLoggedIn() && (0, eC.jsxs)("div", {
          className: "LoginToGetSuperRank",
          children: [!0 === AC && (0, eC.jsx)(my.e, {}), !1 === AC && (0, eC.jsxs)(eC.Fragment, {
            children: [(0, eC.jsx)("div", {
              className: "SmallTextBold",
              children: OC("homePage:logInToGetSuperRank")
            }), (0, eC.jsx)(iy.c, {
              showProgressUpdateMessage: !1
            })]
          })]
        }), !0 === fC.isLoggedIn() && (0, eC.jsxs)("div", {
          className: "GetSuperRankButtonContainer",
          children: [qC && (0, eC.jsxs)("div", {
            className: "GiftRecipientSelection",
            children: [(0, eC.jsx)("div", {
              className: "GiftRecipientSelectionLabel SmallTextBold",
              children: "Send gift to:"
            }), (0, eC.jsx)(YC.d, {
              className: "GiftRecipientSelectionInput",
              placeholderText: OC("socialBar:enterPlayerName"),
              defaultValue: zC,
              maxLength: bC.maxNameLength,
              onValueChange: CC => {
                BC(CC);
              },
              blurOnEnter: !0
            }), ZC ? (0, eC.jsx)("i", {
              className: "fa-solid fa-check SmallTextBold"
            }) : aC || !TC && IC ? (0, eC.jsx)("i", {
              children: (0, eC.jsx)(my.e, {})
            }) : FC && zC ? (0, eC.jsx)("i", {
              className: "fa-solid fa-x SmallTextBold"
            }) : (0, eC.jsx)("i", {}), (0, eC.jsx)(GC.d, {
              className: "ChooseNameButton",
              disabled: !TC || !zC || FC || aC || !UC,
              onClick: uC,
              children: OC("general:choose")
            })]
          }), !DC && (0, eC.jsx)("div", {
            className: "GetSuperRankButtonContainerLoader",
            children: (0, eC.jsx)(my.e, {})
          }), DC && (0, eC.jsxs)("div", {
            className: ky("GetSuperRankButton", "AnimFadeInScaleUp", "SmallTextBold", {
              GetSuperRankButtonDisabled: !ZC,
              GetSuperRankButtonPending: NC
            }),
            onClick: () => {
              qC ? FC && sC(VC, xC, zC) : sC();
            },
            children: [NC && (0, eC.jsx)("div", {
              className: "GetSuperRankButtonLoader",
              children: (0, eC.jsx)(my.e, {})
            }), (0, eC.jsxs)("div", {
              className: "GetSuperRankButtonInner",
              children: [(0, eC.jsx)("div", {
                className: "GetSuperRankButtonInnerShine"
              }), TC && TC.price && (0, eC.jsx)("div", {
                className: "GetSuperRankButtonPrice",
                children: OC(qC ? "homePage:giftSuperRankDays" : "homePage:getSuperRankDays", {
                  days: TC.custom_attributes.super_days,
                  price: TC.price.amount,
                  currency: TC.price.currency
                })
              }), (0, eC.jsx)("i", {
                className: "fa-solid fa-bolt"
              })]
            })]
          }), (0, eC.jsxs)("div", {
            className: "GetSuperRankButtonFooterContainer",
            children: [(0, eC.jsx)("div", {
              className: "GetSuperRankButtonFooter",
              children: "No subscription, recharge anytime"
            }), (0, eC.jsx)("div", {
              className: "GetSuperRankButtonFooterToggle",
              onClick: () => {
                KC(CC => !CC);
              },
              children: OC(qC ? "homePage:buyForYourself" : "homePage:sendGiftInstead")
            })]
          })]
        })]
      })]
    })]
  });
}
export function c() {
  const {
    t: CC
  } = (0, rC.n)();
  const yC = {
    playBloxd: {
      element: (0, eC.jsx)(eC.Fragment, {
        children: "Play Bloxd"
      }),
      free: !0,
      super: !0
    },
    colourfulNames: {
      element: (0, eC.jsxs)(eC.Fragment, {
        children: [(0, eC.jsx)("span", {
          style: {
            color: AC.q.yellow
          },
          children: "Co"
        }), (0, eC.jsx)("span", {
          style: {
            color: AC.q.green
          },
          children: "lou"
        }), (0, eC.jsx)("span", {
          style: {
            color: AC.q.aqua
          },
          children: "rf"
        }), (0, eC.jsx)("span", {
          style: {
            color: AC.q.blue
          },
          children: "ul"
        }), " ", (0, eC.jsx)("span", {
          style: {
            color: AC.q.purple
          },
          children: "Na"
        }), (0, eC.jsx)("span", {
          style: {
            color: AC.q.red
          },
          children: "mes"
        })]
      }),
      free: !1,
      super: !0
    },
    unlockCapes: {
      element: (0, eC.jsx)(eC.Fragment, {
        children: "Unlock Capes"
      }),
      free: !1,
      super: !0
    },
    nextToName: {
      element: (0, eC.jsxs)(eC.Fragment, {
        children: [CC("homePage:superRank"), " Nametag"]
      }),
      free: !1,
      super: !0
    },
    noAdverts: {
      element: (0, eC.jsx)(eC.Fragment, {
        children: "No Adverts"
      }),
      free: !1,
      super: !0
    }
  };
  return (0, eC.jsx)("table", {
    className: "SuperRankPerksTable",
    children: (0, eC.jsxs)("tbody", {
      children: [(0, eC.jsxs)("tr", {
        children: [(0, eC.jsx)("th", {
          className: "SmallTextBold",
          children: (0, eC.jsx)("div", {
            className: "TableTitle",
            children: (0, eC.jsx)("div", {
              className: "FreeTableTitle",
              children: (0, eC.jsx)("span", {
                className: "TableTitleText",
                children: "Free"
              })
            })
          })
        }), (0, eC.jsx)("th", {
          className: "SmallTextBold",
          children: (0, eC.jsx)("div", {
            className: "TableTitle",
            children: (0, eC.jsx)("div", {
              className: "SuperRankTableTitle",
              children: (0, eC.jsx)("div", {
                className: "SuperRankTableTitleInner",
                children: (0, eC.jsxs)("span", {
                  className: "TableTitleText",
                  children: [(0, eC.jsx)("i", {
                    className: "fa-solid fa-bolt"
                  }), " ", CC("homePage:superRank")]
                })
              })
            })
          })
        })]
      }), Object.keys(yC).map(CC => (0, eC.jsx)("tr", {
        children: Object.entries({
          free: "FreePerk",
          super: "SuperRankPerk"
        }).map(IC => {
          let [fC, gC] = IC;
          return (0, eC.jsx)("td", {
            children: (0, eC.jsx)("div", {
              className: "PerkContainer",
              children: (0, eC.jsx)("div", {
                className: ky("Perk ".concat(gC), {
                  Enabled: yC[CC][fC]
                }),
                children: (0, eC.jsxs)("div", {
                  className: "PerkInner",
                  children: [yC[CC][fC] ? (0, eC.jsx)("i", {
                    className: "fa-solid fa-check SmallTextBold"
                  }) : (0, eC.jsx)("i", {
                    className: "fa-solid fa-x SmallTextBold"
                  }), (0, eC.jsx)("span", {
                    className: "PerkText SmallTextLight",
                    children: yC[CC].element
                  })]
                })
              })
            })
          }, fC);
        })
      }, CC))]
    })
  });
}