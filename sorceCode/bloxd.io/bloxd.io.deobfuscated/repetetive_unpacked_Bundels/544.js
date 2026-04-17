var fC = require("./18.js");
var ky = require("./49.js");
var gC = require("./550.js");
var AC = require("./554.js");
var my = AC;
var XC = require("./424.js");
var iy = require("./138.js");
var LC = require("./556.js");
var YC = require("./558.js");
var bC = require("./38.js");
var rC = require("./1259.js");
var GC = require("./1336.js");
var eC = require("./408.js");
var OC = require("./1342.js");
var SC = require("./82.js");
var TC = require("./1143.js");
var NC = require("./1444.js");
var sC = require("./616.js");
var jy = require("./14.js");
var qC = require("./1447.js");
var KC = require("./1180.js");
var pC = require("./1473.js");
var wC = require("./66.js");
var HC = require("./1488.js");
var aC = require("./105.js");
var cC = require("./1363.js");
var UC = require("./1408.js");
var EC = require("./1149.js");
var VC = require("./534.js");
export function r(CC) {
  var yC;
  var IC;
  let {
    gameNameWithVariation: fC
  } = CC;
  const {
    t: ky
  } = (0, GC.n)();
  if (!EC.b[fC]) {
    return null;
  }
  const gC = ky(EC.b[fC].title);
  const AC = ky(EC.b[fC].description);
  const my = Object.values(KC.d.availableGameNamesWithVariation).reduce((CC, yC) => CC.concat(yC), []);
  const XC = my.includes(fC) || my.includes((0, aC.Lb)(fC));
  const iy = null !== (yC = EC.b[fC].urlName) && void 0 !== yC ? yC : (0, aC.Lb)(fC);
  return (0, VC.jsxs)(pC.h, {
    children: [(0, VC.jsxs)("title", {
      children: [gC, " - bloxd.io"]
    }), (0, VC.jsx)("meta", {
      name: "description",
      content: AC
    }), (0, VC.jsx)("link", {
      rel: "canonical",
      href: "https://bloxd.io/game/".concat(iy)
    }), XC && (0, VC.jsx)("meta", {
      name: "robots",
      content: "index,follow"
    }), !XC && (0, VC.jsx)("meta", {
      name: "robots",
      content: "noindex"
    }), null === (IC = EC.b[fC]) || void 0 === IC ? void 0 : IC.additionalMetaTags]
  });
}
export function A() {
  (0, ky.Oy)(() => {
    let CC;
    const yC = () => {
      clearTimeout(CC);
      CC = setTimeout(() => {
        (0, TC.getBloxd)().client.leaveGame();
        (0, qC.o)("/");
      }, 3e5);
    };
    const IC = () => {
      clearTimeout(CC);
    };
    window.addEventListener("focus", IC);
    window.addEventListener("blur", yC);
    return () => {
      window.removeEventListener("blur", yC);
      window.removeEventListener("focus", IC);
      clearTimeout(CC);
    };
  }, []);
  return null;
}
export const e = (0, ky.memo)(function () {
  const {
    isTouchScreen: CC
  } = (0, jy.f)(["isTouchScreen"]);
  (0, gC.b)();
  const yC = db("showBasicMovementControls");
  const [IC, fC] = (0, ky.ey)(!0);
  (0, ky.Oy)(() => {
    const CC = setTimeout(() => {
      fC(!1);
    }, 7e3);
    return () => {
      clearTimeout(CC);
    };
  }, []);
  return SC.j.getItem(XC.R) > 2 ? (0, VC.jsx)(nC, {
    showingMovementControls: !1
  }) : (0, VC.jsxs)(VC.Fragment, {
    children: [!CC && IC && !1 !== yC ? (0, VC.jsxs)("div", {
      className: "ControlsTutorialDiv",
      children: [(0, VC.jsx)(zC, {}), (0, VC.jsx)(BC, {
        header: "Sprint",
        keyText: "Shift"
      }), (0, VC.jsx)(BC, {
        header: "Jump",
        keyText: "Space"
      })]
    }) : null, (0, VC.jsx)(nC, {
      showingMovementControls: IC
    })]
  });
});
function zC() {
  return (0, VC.jsxs)("div", {
    className: "KeyControlDiv",
    children: [(0, VC.jsx)("div", {
      className: "KeyHeader",
      children: "Move"
    }), (0, VC.jsx)("div", {
      className: "WasdKeysTopRow",
      children: (0, VC.jsx)(w, {
        text: "W"
      })
    }), (0, VC.jsxs)("div", {
      className: "WasdKeysBottomRow",
      children: [(0, VC.jsx)(w, {
        text: "A"
      }), (0, VC.jsx)(w, {
        text: "S"
      }), (0, VC.jsx)(w, {
        text: "D"
      })]
    })]
  });
}
function BC(CC) {
  let {
    header: yC,
    keyText: IC
  } = CC;
  return (0, VC.jsxs)("div", {
    className: "KeyControlDiv",
    children: [(0, VC.jsx)("div", {
      className: "KeyHeader",
      children: yC
    }), (0, VC.jsx)(w, {
      text: IC
    })]
  });
}
export function w(CC) {
  let {
    text: yC
  } = CC;
  return (0, VC.jsx)("div", {
    className: "KeyboardButtonRepresentation",
    children: yC
  });
}
export function j(CC) {
  let {
    toTime: yC,
    onReachEndOfCountdown: IC = () => {}
  } = CC;
  const fC = X();
  const gC = (0, ky.useRef)(!1);
  (0, ky.Oy)(() => {
    const CC = setInterval(() => {
      fC();
    }, 1e3);
    return () => {
      clearInterval(CC);
    };
  }, []);
  return (0, VC.jsx)("div", {
    className: "CountdownTime",
    children: function (CC) {
      CC <= 0 && (gC.current || (IC(), gC.current = !0), CC = 0);
      const yC = String(Math.floor(CC / 864e5));
      const fC = CC % 864e5;
      const ky = String(Math.floor(fC / 36e5));
      const AC = CC % 36e5;
      const my = String(Math.floor(AC / 6e4));
      const XC = CC % 6e4;
      const iy = String(Math.floor(XC / 1e3));
      return [yC.padStart(2, "0"), ky.padStart(2, "0"), my.padStart(2, "0"), iy.padStart(2, "0")];
    }(yC.getTime() - Date.now()).map((CC, yC) => (0, VC.jsxs)(ky.Fragment, {
      children: [(0, VC.jsx)("div", {
        className: "CountdownTimePart",
        children: CC
      }), yC < 3 ? ":" : null]
    }, yC))
  });
}
function nC(CC) {
  let {
    showingMovementControls: yC
  } = CC;
  const {
    isTouchScreen: IC
  } = (0, jy.f)(["isTouchScreen"]);
  const [fC, gC] = (0, ky.ey)(!1);
  const AC = "SeenShopControls|".concat(TC.singletons.connectedGameNameWithVariation);
  const my = () => !SC.j.getItem(AC) && (0, TC.sI)().NI.shopInfo && !yC;
  const XC = () => {
    gC(!0);
    SC.j.setItem(AC, !0);
    bC.c.Gy("showShopTouchTutorial");
    return setTimeout(() => {
      gC(!1);
    }, 7e3);
  };
  (0, ky.Oy)(() => {
    let CC;
    const yC = bC.c.subscribe("showShopTutorial", () => {
      my() && (CC = XC());
    });
    return () => {
      clearTimeout(CC);
      bC.c.unsubscribe(yC);
    };
  }, [yC]);
  (0, ky.Oy)(() => {
    let CC;
    const yC = bC.c.subscribe("serverOption|currencyAmounts", yC => {
      if (my()) {
        let yC = !1;
        const {
          currencyAmounts: fC,
          shopInfo: ky
        } = (0, TC.sI)().NI;
        for (const CC in ky) {
          for (const gC in ky[CC].items) {
            var IC;
            const AC = ky[CC].items[gC];
            if (void 0 !== AC.currency && fC[AC.currency] && AC.cost <= fC[AC.currency].amount && (null === (IC = AC.hidden) || void 0 === IC || !IC)) {
              yC = !0;
              break;
            }
          }
          if (yC) {
            break;
          }
        }
        yC && (CC = XC());
      }
    });
    return () => {
      bC.c.unsubscribe(yC);
      clearTimeout(CC);
    };
  }, [yC]);
  return fC ? (0, VC.jsx)("div", {
    className: "ControlsTutorialDiv",
    children: IC ? null : (0, VC.jsx)(BC, {
      header: "Shop",
      keyText: "B"
    })
  }) : null;
}
export function C(CC) {
  let {
    lazyLoadedClassName: yC,
    children: IC,
    observerUpdateDeps: gC,
    observerRoot: AC = null
  } = CC;
  const [my, XC] = (0, ky.ey)({});
  const iy = (0, ky.useRef)(null);
  function LC(CC) {
    const yC = {};
    CC.forEach(CC => {
      yC[CC.target.dataset.idx] = CC.isIntersecting;
    });
    XC(CC => (0, fC.d)((0, fC.d)({}, CC), yC));
  }
  (0, ky.Oy)(() => {
    YC();
    return () => {
      iy.current.disconnect();
    };
  }, []);
  (0, ky.Oy)(() => {
    YC();
  }, [gC]);
  const YC = () => {
    iy.current && iy.current.disconnect();
    const CC = null !== AC ? document.querySelector(".".concat(AC)) : null;
    iy.current = new IntersectionObserver(LC, {
      root: CC,
      rootMargin: "0% 0% 0% 0%"
    });
    document.querySelectorAll(".".concat(yC, " .InvenItemWrapper")).forEach(CC => {
      iy.current.observe(CC);
    });
  };
  return (0, VC.jsx)("div", {
    className: yC,
    children: ky.Children.map(IC, (CC, yC) => (0, VC.jsx)("div", {
      className: "InvenItemWrapper",
      "data-idx": yC,
      children: my[yC] && CC
    }))
  });
}
export function q(CC) {
  let {
    close: yC,
    className: IC = "",
    show: fC = !0,
    children: gC = null,
    togglePointerLock: AC = !0,
    escDoesExit: my = !0,
    closeClassnameList: XC = [],
    forcePointerUnlock: iy,
    centerChildren: LC = !0,
    closeOnPressBackground: YC = !0,
    preventContextMenu: bC = !1,
    globallyUniqueKey: rC,
    pointerDown: GC = null,
    pointerUp: eC = null,
    doGameplayStartStopOnShow: OC = !1
  } = CC;
  if (AC && !rC) {
    throw new Error("globallyUniqueKey must be defined when using togglePointerLock");
  }
  cb(AC, iy, rC);
  const SC = (0, ky.useRef)(0);
  const TC = GC && (CC => {
    sC(CC) && GC(CC);
  });
  const NC = eC && (CC => {
    sC(CC) && (null === eC || void 0 === eC || eC(CC));
  });
  ab(OC, fC);
  return fC && (0, VC.jsx)("div", {
    className: "GameBackgroundScreen ".concat(IC),
    style: {
      display: LC ? "flex" : "block"
    },
    onPointerDown: CC => {
      SC.current = Date.now();
      null === TC || void 0 === TC || TC(CC);
    },
    onPointerUp: NC,
    onClick: CC => {
      Date.now() - SC.current < 170 && YC && sC(CC) && yC();
    },
    onContextMenu: bC ? CC => {
      CC.preventDefault();
    } : null,
    onKeyDown: CC => {
      my && "Escape" === CC.key && (yC(), CC.stopPropagation());
    },
    children: gC
  });
  function sC(CC) {
    for (const yC of ["GameBackgroundScreen", ...XC]) {
      for (const IC of CC.target.classList) {
        if (yC === IC) {
          return !0;
        }
      }
    }
    return !1;
  }
}
export const $ = CC => {
  const [yC, IC] = (0, ky.ey)(0);
  const [fC, gC] = (0, ky.ey)(0);
  (0, ky.Oy)(() => {
    if (!CC) {
      return;
    }
    const yC = CC.current;
    const fC = new ResizeObserver(CC => {
      IC(CC[0].contentRect.width);
      gC(CC[0].contentRect.height);
    });
    yC && fC.observe(yC);
    return () => {
      fC.unobserve(yC);
    };
  }, []);
  return {
    width: yC,
    height: fC
  };
};
export function cb(CC, yC, IC) {
  const fC = (0, ky.useRef)(IC);
  if (CC && void 0 === yC) {
    throw new Error("when using pointer lock, forcePointerUnlock must also be set");
  }
  (0, ky.Oy)(() => () => {
    TC.singletons.pointerLockWrapper.removePointerUnlockRequest(IC);
  }, []);
  (0, ky.Oy)(() => {
    console.assert(fC.current === IC, "Cannot change name passed to useTogglePointerLock");
    fC.current = IC;
    CC && (yC ? TC.singletons.pointerLockWrapper.requestPointerUnlock(IC) : TC.singletons.pointerLockWrapper.removePointerUnlockRequest(IC));
  }, [CC, yC, IC]);
}
export function db(CC) {
  var yC;
  var IC;
  var fC;
  return (0, bC.i)("serverOption|".concat(CC), null !== (yC = null === (IC = (0, TC.sI)()) || void 0 === IC || null === (fC = IC.NI) || void 0 === fC ? void 0 : fC[CC]) && void 0 !== yC ? yC : null);
}
export function fb() {
  let CC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
  const yC = function () {
    const CC = (0, ky.useRef)(!0);
    (0, ky.Oy)(() => () => {
      CC.current = !1;
    }, []);
    return CC;
  }();
  const [IC, gC] = (0, ky.ey)({
    userContext: rC.f,
    isUserContextUpdating: !0
  });
  const AC = IC => {
    CC && console.log("uctx", "s", IC.userContext.playerHasRank("super"), "m", yC.current);
    yC.current && gC(IC);
  };
  (0, ky.Oy)(() => {
    rC.v.getCurrentUserContext().then(CC => {
      AC({
        userContext: CC,
        isUserContextUpdating: !1
      });
    });
  }, []);
  (0, bC.e)("userContextUpdated", CC => {
    AC({
      userContext: CC,
      isUserContextUpdating: CC === rC.f
    });
  });
  (0, bC.e)("userContextIsUpdating", () => {
    AC((0, fC.d)((0, fC.d)({}, IC), {}, {
      isUserContextUpdating: !0
    }));
  });
  return IC;
}
export function X() {
  const CC = (0, ky.useRef)(0);
  const [yC, IC] = (0, ky.ey)(0);
  return () => {
    IC(++CC.current);
  };
}
export function _(CC, yC) {
  var IC;
  const [fC, gC] = (0, ky.ey)(null !== (IC = SC.j.getItem(CC)) && void 0 !== IC ? IC : yC);
  return [fC, yC => {
    SC.j.setItem(CC, yC);
    gC(yC);
  }];
}
export function d() {
  const [CC, yC] = (0, ky.ey)(null);
  (0, ky.Oy)(() => {
    let CC;
    const IC = bC.c.subscribe("showError", IC => {
      let {
        error: fC,
        timeoutLength: ky
      } = IC;
      clearTimeout(CC);
      yC(fC);
      CC = setTimeout(() => {
        yC(null);
      }, ky || 2e3);
    });
    return () => {
      bC.c.unsubscribe(IC);
      clearTimeout(CC);
    };
  }, []);
  return CC ? (0, VC.jsx)("div", {
    className: "BottomScreenErrorMessage SmallTextLight",
    children: (0, VC.jsx)(J, {
      text: CC
    })
  }) : null;
}
export function M(CC) {
  let {
    className: yC,
    style: IC,
    vw: ky,
    maxPx: gC,
    children: AC
  } = CC;
  console.assert("number" === typeof ky && "number" === typeof gC, "vw and maxPx passed to Text must be numbers");
  const my = window.innerWidth * (ky / 100) > gC ? "".concat(gC, "px") : "".concat(ky, "vw");
  return (0, VC.jsx)("div", {
    className: yC,
    style: (0, fC.d)((0, fC.d)({}, IC), {}, {
      fontSize: my
    }),
    children: AC
  });
}
export function N(CC) {
  let {
    className: yC = "",
    icon: IC,
    noaAction: fC = null,
    keyboardButtonClassname: gC = "",
    onClick: AC = null,
    onPointerDown: XC = null,
    showTouchTutorialPubSubId: iy = null,
    showRedDotPubSubId: LC = null,
    touchIconPosition: YC = "topright"
  } = CC;
  const {
    isTouchScreen: rC
  } = (0, jy.f)(["isTouchScreen"]);
  const GC = X();
  const [eC, OC] = (0, ky.ey)(!1);
  const [SC, TC] = (0, ky.ey)(!1);
  (0, bC.e)(iy, function () {
    OC(!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]);
  });
  (0, bC.e)(LC, CC => {
    TC(CC);
  });
  (0, bC.e)("customBindingsChanged", () => {
    GC();
  });
  const sC = AC && (CC => {
    OC(!1);
    AC(CC);
  });
  return (0, VC.jsx)("div", {
    className: "UiItemIcon SmallTextBold ".concat(yC),
    onClick: sC,
    onPointerDown: XC,
    children: (0, VC.jsxs)("div", {
      className: "ScaleOnHover",
      children: [(0, VC.jsx)("i", {
        className: "fas fa-".concat(IC)
      }), !rC && IC ? (0, VC.jsx)("div", {
        className: "IconKeyboardButtonHelper SmallTextBold ".concat(gC),
        children: (0, VC.jsx)("div", {
          className: "".concat(gC),
          children: (0, VC.jsx)(NC.e, {
            keyCode: (0, NC.m)(fC)
          })
        })
      }) : null, eC ? (0, VC.jsx)("i", {
        className: "fas fa-hand-point-left SmallTextBold TouchTutorialIcon ".concat(my({
          HandTopRightAnim: "topright" === YC,
          HandTopLeftAnim: "topleft" === YC
        }))
      }) : null, SC ? (0, VC.jsx)(I, {
        top: "0px",
        right: "-8px"
      }) : null]
    })
  });
}
export function I(CC) {
  let {
    top: yC = "-2px",
    right: IC = "-2px"
  } = CC;
  return (0, VC.jsx)("div", {
    className: "Dot",
    style: {
      top: yC,
      right: IC
    }
  });
}
export function J(CC) {
  let {
    text: yC,
    className: IC = ""
  } = CC;
  const {
    t: fC
  } = (0, GC.n)();
  function ky(CC) {
    const yC = (0, GC.e)(CC.params);
    return fC(CC.translationKey, yC);
  }
  "number" === typeof yC && (yC = yC.toString());
  return yC ? "string" === typeof yC ? (0, VC.jsx)("div", {
    className: "IndividualText ".concat(IC),
    children: yC
  }) : "translationKey" in yC ? (0, VC.jsx)("div", {
    className: "IndividualText ".concat(IC),
    children: fC(yC.translationKey, yC.params)
  }) : Array.isArray(yC) ? (0, VC.jsx)("div", {
    className: "TextFromServer ".concat(IC),
    children: yC.map((CC, fC) => {
      if ("string" === typeof CC) {
        return (0, VC.jsx)("div", {
          className: "IndividualText ".concat(IC),
          children: CC
        }, "".concat(CC).concat(fC));
      }
      if ("entityName" in CC) {
        return (0, VC.jsxs)("div", {
          className: "TextFromServerEntityNameWithTags",
          children: [CC.ranks && CC.ranks.map(CC => iy.k[CC].visible ? (0, VC.jsx)("div", {
            className: "TextFromServerEntityNameTag TextFromServerEntityNameTag-".concat(CC),
            children: (0, VC.jsx)(J, {
              text: [{
                icon: iy.k[CC].icon,
                style: {
                  color: iy.k[CC].mainRGB
                }
              }]
            })
          }, CC) : null), (0, VC.jsx)("div", {
            className: "TextFromServerEntityName",
            style: {
              color: (0, XC.W)(CC.style)
            },
            children: (0, OC.getNameForDisplayInClient)(CC.entityName, !eC.g.canSeeRealPlayerNames)
          })]
        }, "".concat(CC).concat(fC));
      }
      if ("translationKey" in CC) {
        return (0, VC.jsx)("div", {
          className: "IndividualText ".concat(IC),
          children: ky(CC)
        }, "".concat(CC.translationKey).concat(fC));
      }
      if ("icon" in CC || "item" in CC) {
        let yC;
        var gC;
        var AC;
        var bC;
        var rC;
        var GC;
        "icon" in CC && (yC = CC.icon);
        "item" in CC && (yC = CC.item, console.error(new Error("Received TextFromServer with outdated 'item' property - item: ".concat(CC)).stack));
        if ((0, YC.k)(yC)) {
          return (0, VC.jsx)("div", {
            className: "TextFromServerIngameItem",
            style: {
              width: null !== (gC = null === (AC = CC.style) || void 0 === AC ? void 0 : AC.fontSize) && void 0 !== gC ? gC : "1.8em",
              height: null !== (bC = null === (rC = CC.style) || void 0 === rC ? void 0 : rC.fontSize) && void 0 !== bC ? bC : "1.8em",
              opacity: null === (GC = CC.style) || void 0 === GC ? void 0 : GC.opacity
            },
            children: (0, VC.jsx)(YC.e, {
              itemName: yC,
              amount: 0,
              tintColor: (0, XC.W)(CC.style)
            })
          }, "".concat(yC).concat(fC));
        }
        {
          var SC;
          var TC;
          const IC = LC.b.includes(yC) ? "fa-brands" : "fas";
          return (0, VC.jsx)("i", {
            className: "".concat(IC, " fa-").concat(yC, " TextFromServerFontawesomeIcon"),
            style: {
              color: (0, XC.W)(CC.style),
              fontSize: null === (SC = CC.style) || void 0 === SC ? void 0 : SC.fontSize,
              opacity: null === (TC = CC.style) || void 0 === TC ? void 0 : TC.opacity
            }
          }, "".concat(yC).concat(fC));
        }
      }
      {
        var NC;
        CC.styles && console.error(new Error("Received TextFromServer with outdated 'styles' property - str: ".concat(CC.str)).stack);
        const {
          str: IC,
          clickableUrl: gC
        } = CC;
        const AC = null !== (NC = CC.style) && void 0 !== NC ? NC : {};
        let iy = "";
        "string" === typeof IC ? iy = IC : "object" === typeof IC ? IC.hasOwnProperty("translationKey") ? iy = ky(IC) : IC.hasOwnProperty("entityName") ? iy = (0, OC.getNameForDisplayInClient)(IC.entityName, !eC.g.canSeeRealPlayerNames) : console.error("Received styled text with invalid str attribute value: item=".concat(JSON.stringify(CC), ", text=").concat(JSON.stringify(yC))) : console.error("Received styled text with invalid str attribute value: item=".concat(JSON.stringify(CC), ", text=").concat(JSON.stringify(yC)));
        return (0, VC.jsx)("div", {
          className: my("IndividualText", {
            ClickableIndividualText: gC
          }),
          style: {
            color: (0, XC.W)(AC),
            fontSize: AC.fontSize,
            fontWeight: AC.fontWeight,
            fontStyle: AC.fontStyle,
            opacity: AC.opacity
          },
          onPointerDown: gC && (CC => {
            CC.preventDefault();
          }),
          onClick: gC && (() => {
            window.open(gC, "_blank").focus();
          }),
          children: iy
        }, fC);
      }
    })
  }) : null : null;
}
export function n(CC) {
  let {
    children: yC,
    showing: IC,
    globallyUniqueKey: fC,
    alwaysMountChildren: ky = !1,
    doGameplayStartStopOnShow: gC = !0
  } = CC;
  cb(!0, IC, fC);
  ab(gC, IC);
  return IC || ky ? yC : null;
}
export function ab(CC, yC) {
  const IC = (0, ky.useRef)(!1);
  (0, ky.Oy)(() => {
    CC || (IC.current = !1);
    CC && (yC ? (IC.current = !0, (0, cC.Q)()) : IC.current && (0, cC.N)());
  }, [yC, CC]);
}
export function t(CC) {
  let {
    setHovering: yC,
    children: IC,
    className: fC = "",
    style: ky
  } = CC;
  return (0, VC.jsx)("div", {
    className: fC,
    style: ky,
    onMouseEnter: () => yC(!0),
    onMouseLeave: () => yC(!1),
    children: IC
  });
}
export function Q(CC) {
  let {
    children: yC,
    href: IC,
    className: fC
  } = CC;
  return (0, VC.jsx)("a", {
    className: "UnstyledA ".concat(fC),
    href: IC,
    target: "_blank",
    rel: "noreferrer",
    children: yC
  });
}
export function F(CC) {
  let {
    items: yC,
    onClick: IC,
    selectedItemId: fC
  } = CC;
  const {
    t: ky
  } = (0, GC.n)();
  return (0, VC.jsx)("div", {
    className: "MenuSideBarBody",
    children: yC.map(CC => (0, VC.jsxs)("div", {
      className: my("MenuSideBarBodyTab", {
        ActiveMenuSideBarBodyTab: fC === CC.id
      }),
      onClick: () => {
        IC(CC.id);
      },
      children: [CC.faIcon && (0, VC.jsx)("div", {
        className: "MenuSideBarBodyTabIcon",
        children: (0, VC.jsx)("i", {
          className: CC.faIcon
        })
      }), (0, VC.jsx)("div", {
        children: ky(CC.title)
      }), CC.redDot && (0, VC.jsx)(I, {
        top: "-0.2rem",
        right: "-1rem"
      })]
    }, CC.title))
  });
}
export async function T(CC, yC, IC) {
  let fC = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
  if ((0, wC.w)(yC)) {
    return "";
  }
  const ky = EC.b[yC];
  if ((0, aC.fb)(yC)) {
    const CC = (0, aC.Vb)(yC);
    try {
      return (await HC.e.getGame(await rC.v.getCurrentUserContext(), CC)).name;
    } catch (gC) {
      console.error("Failed to get schematic info for schematicId ".concat(CC), gC);
      return "";
    }
  }
  return "classic" === yC && (0, sC.W)(IC) ? CC("game:worlds") : "game:sandbox" === ky.title && fC ? CC(ky.variationTitle) : "".concat(CC(ky.title)).concat(!fC && ky.variationTitle ? " ".concat(CC(ky.variationTitle)) : "");
}
export function Y(CC, yC) {
  (0, ky.Oy)(() => {
    const IC = IC => {
      IC.key === CC && yC(IC);
    };
    document.documentElement.addEventListener("keydown", IC);
    return () => {
      document.documentElement.removeEventListener("keydown", IC);
    };
  }, [CC, yC]);
}
export function i(CC) {
  let {
    errorString: yC
  } = CC;
  const {
    t: IC
  } = (0, GC.n)();
  const [fC, gC] = (0, ky.ey)(!1);
  return (0, VC.jsxs)("div", {
    className: "CopyErrorBox",
    children: [(0, VC.jsx)("div", {
      className: "CopyErrorBoxBody",
      children: yC
    }), (0, VC.jsxs)(UC.d, {
      className: "CopyErrorBoxButton",
      onClick: () => {
        navigator.clipboard.writeText(yC).then(() => {
          gC(!0);
        }).catch(CC => {
          console.error("Failed to copy error to clipboard:", CC);
        });
      },
      children: [fC && (0, VC.jsxs)(VC.Fragment, {
        children: [(0, VC.jsx)("i", {
          className: "fa-solid fa-check"
        }), " ", IC("general:copied")]
      }), !fC && (0, VC.jsxs)(VC.Fragment, {
        children: [(0, VC.jsx)("i", {
          className: "fa-solid fa-copy"
        }), " ", IC("general:copy")]
      })]
    })]
  });
}