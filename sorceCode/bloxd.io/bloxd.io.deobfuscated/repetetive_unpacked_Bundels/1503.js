var fC = require("./18.js");
var ky = require("./49.js");
var gC = require("./554.js");
var AC = gC;
var my = require("./1408.js");
var XC = require("./544.js");
var iy = require("./1336.js");
var LC = require("./1511.js");
var YC = require("./1488.js");
var bC = require("./424.js");
var rC = require("./595.js");
var GC = require("./1385.js");
var eC = require("./1342.js");
var OC = require("./616.js");
var SC = require("./1493.js");
var TC = require("./66.js");
var NC = require("./14.js");
var sC = require("./1518.js");
var jy = require("./1425.js");
var qC = require("./1388.js");
var KC = require("./1143.js");
var pC = require("./1521.js");
var wC = require("./1447.js");
var HC = require("./1383.js");
var aC = require("./105.js");
var cC = require("./1149.js");
var UC = require("./534.js");
export const l = (0, ky.memo)(function () {
  const {
    t: CC
  } = (0, iy.n)();
  const {
    gameState: yC,
    isTouchScreen: IC,
    isUiHidden: gC,
    hideSocialLocationFrom: TC
  } = (0, NC.f)(["gameState", "isTouchScreen", "openEverythingMenuName", "isUiHidden", "hideSocialLocationFrom", "initSdkSelectorFinished"]);
  const [sC, KC] = (0, ky.ey)(!0);
  const [wC, aC] = (0, ky.ey)(!1);
  const [EC, VC] = (0, ky.ey)({
    requests: !1
  });
  const [WC, xC] = (0, ky.ey)({
    requests: [],
    friends: []
  });
  const PC = {
    requests: "FriendRequestsSection",
    friends: "FriendsSection"
  };
  const zC = {
    requests: CC("socialBar:requests"),
    friends: CC("socialBar:friends")
  };
  const tC = (0, ky.useRef)(null);
  const FC = (0, ky.useRef)(null);
  const [uC, DC] = (0, ky.ey)("");
  const ZC = (0, ky.useRef)(null);
  const [lC, oC] = (0, ky.ey)("");
  const {
    userContext: vC,
    isUserContextUpdating: hC
  } = (0, XC.fb)();
  const [RC, dC] = (0, ky.ey)(CC("socialBar:copyPartyCode"));
  const {
    partyInformation: QC,
    isPartyLeader: MC,
    partyUIState: Cy,
    lastPartyErrorMessage: yy
  } = (0, SC.f)();
  const [Iy, fy] = (0, ky.ey)("Enter");
  const [kI, gy] = (0, ky.ey)("");
  const Ay = "landingPage" !== yC;
  function mI(yC) {
    return Ay ? null : "requests" === yC ? (0, UC.jsx)("div", {
      className: "PlayerRows",
      children: WC.requests.map((yC, IC) => (0, UC.jsxs)("div", {
        className: "PlayerRow",
        style: {
          zIndex: WC.requests.length - IC
        },
        children: [(0, UC.jsx)(j, {
          playerSocialPreview: yC
        }), (0, UC.jsxs)("div", {
          className: "PlayerRowActions",
          children: [(0, UC.jsx)(my.d, {
            className: "FriendRequestButton SmallTextLight",
            onClick: () => {
              Ly(yC.name, !0);
            },
            children: CC("general:accept")
          }), (0, UC.jsx)(my.x, {
            className: "FriendRequestButton SmallTextLight",
            onClick: () => {
              Ly(yC.name, !1);
            },
            children: CC("general:decline")
          })]
        })]
      }, "".concat(yC.name, "_").concat(yC.isError)))
    }) : "friends" === yC ? (0, UC.jsx)("div", {
      className: "PlayerRows",
      children: WC.friends.map((yC, IC) => {
        var ky;
        var gC;
        const AC = null !== QC && !1 === MC;
        const XC = "inGame" === yC.location.status;
        const iy = XC && (!(0, OC.cb)(yC.location.inLobbyName) || null === (ky = null === (gC = (0, cC.j)(yC.location.inGameNameWithVariation)) || void 0 === gC ? void 0 : gC.canJoinPublicRequestedLobbyName) || void 0 === ky || ky);
        const LC = XC && nC(yC.location);
        return (0, UC.jsxs)("div", {
          className: "PlayerRow",
          style: {
            zIndex: WC.friends.length - IC
          },
          children: [(0, UC.jsx)(j, {
            hideFloatingAction: !wC,
            playerSocialPreview: yC,
            floatingActionOptions: [{
              icon: "user-slash",
              text: "socialBar:removeFriend",
              onPointerDown: CC => {
                var IC;
                IC = yC.name;
                xC((0, fC.d)((0, fC.d)({}, WC), {}, {
                  friends: WC.friends.filter(CC => CC.name !== IC)
                }));
                YC.e.removePlayerFriend(vC, IC).catch(CC => {
                  console.error("Failed to remove friend", CC);
                });
              }
            }, ...((0, HC.D)() ? [{
              icon: "user-plus",
              text: "Gift Super Rank",
              onPointerDown: CC => {
                GC.b.showCustomPopup({
                  body: (0, UC.jsx)(pC.d, {
                    gift: !0,
                    _giftRecipient: yC.name
                  }),
                  middleScreenPopupContainerClassName: "SuperRankPitchPopup"
                });
              }
            }] : [])]
          }), (0, UC.jsx)("div", {
            className: "PlayerRowActions",
            children: XC && (0, UC.jsx)(qC.f, {
              tooltipInner: (0, UC.jsx)("div", {
                children: CC("socialBar:cannotJoinPublicRequestedLobbyName")
              }),
              hideTooltip: iy,
              children: (0, UC.jsx)(my.o, {
                className: "JoinFriendButton SmallTextLight",
                onClick: () => {
                  m(yC.location, !1);
                },
                disabled: AC || LC || !iy,
                children: CC("general:join")
              })
            })
          })]
        }, "".concat(yC.name, "_").concat(yC.isError));
      })
    }) : void 0;
  }
  async function Xy() {
    arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && KC(!0);
    return YC.e.getPlayerSocialInformation(vC).then(CC => {
      KC(!1);
      NC.b.set({
        hideSocialLocationFrom: CC.hideSocialLocationFrom
      });
      CC.friends.sort((CC, yC) => {
        if ("offline" === CC.location.status && "offline" !== yC.location.status) {
          return 1;
        }
        if ("offline" !== CC.location.status && "offline" === yC.location.status) {
          return -1;
        }
        if ("offline" === CC.location.status && "offline" === yC.location.status) {
          if (CC.lastOnline && yC.lastOnline) {
            return yC.lastOnline - CC.lastOnline;
          }
          if (CC.lastOnline) {
            return -1;
          }
          if (yC.lastOnline) {
            return 1;
          }
        }
        return CC.isError && !yC.isError ? -1 : !CC.isError && yC.isError ? 1 : 0;
      });
      const yC = {
        requests: CC.requests,
        friends: CC.friends
      };
      xC(yC);
      return yC;
    }).catch(CC => {
      console.error("Failed to refresh social bar state", CC);
      return {
        requests: [],
        friends: []
      };
    });
  }
  function iI() {
    lC && (fy("Loading"), YC.e.sendPlayerFriendRequest(vC, lC).then(CC => {
      fy("Success");
      setTimeout(() => {
        ZC.current.value = "";
        oC("");
        fy("Enter");
      }, 1e3);
    }).catch(CC => {
      var yC;
      fy("Error");
      gy(null !== (yC = CC.errorMessageForUser) && void 0 !== yC ? yC : "");
      setTimeout(() => {
        ZC.current.value = "";
        oC("");
        fy("Enter");
      }, 1500);
    }));
  }
  function Ly(CC, yC) {
    xC((0, fC.d)((0, fC.d)({}, WC), {}, {
      requests: WC.requests.filter(yC => yC.name !== CC)
    }));
    YC.e.respondToPlayerFriendRequest(vC, CC, yC).then(() => {
      yC && Xy(!0);
    }).catch(CC => {
      console.error("Failed to respond to friend request", CC);
    });
  }
  (0, ky.Oy)(() => {
    const CC = FC.current;
    const yC = tC.current;
    let fC = null;
    const ky = CC => {
      aC(CC => {
        clearTimeout(fC);
        !1 === CC ? fC = setTimeout(() => {
          DC("SocialBarMobileToggleTarget Expanded");
        }, 250) : DC("SocialBarMobileToggleTarget");
        return !CC;
      });
      CC.stopPropagation();
    };
    const gC = () => {
      aC(!0);
    };
    const AC = () => {
      aC(!1);
    };
    IC ? (DC("SocialBarMobileToggleTarget"), CC.addEventListener("pointerdown", ky)) : (yC.addEventListener("pointerenter", gC), yC.addEventListener("pointerleave", AC));
    return () => {
      clearTimeout(fC);
      CC.removeEventListener("pointerdown", ky);
      yC.removeEventListener("pointerenter", gC);
      yC.removeEventListener("pointerleave", AC);
    };
  }, [IC]);
  (0, ky.Oy)(() => {
    if (!1 === hC) {
      Xy().then(CC => {
        CC.requests.length > 0 && VC((0, fC.d)((0, fC.d)({}, EC), {}, {
          requests: !0
        }));
      });
      const CC = setInterval(Xy, 15e3);
      return () => {
        clearInterval(CC);
      };
    }
  }, [hC]);
  return (0, UC.jsx)(UC.Fragment, {
    children: (0, UC.jsx)("div", {
      className: "SocialBarContainer",
      style: {
        "--animation-duration": "300ms"
      },
      children: (0, UC.jsx)("div", {
        className: AC("SocialBarOuter", {
          Expanded: !Ay && wC
        }),
        id: "SocialBarOuter",
        children: (0, UC.jsxs)("div", {
          ref: tC,
          className: "SocialBar",
          children: [(0, UC.jsx)("div", {
            ref: FC,
            className: uC,
            style: {
              pointerEvents: Ay ? "none" : "auto"
            }
          }), (0, UC.jsx)("div", {
            className: "CondensedSocialBarInner AnimFadeIn",
            style: {
              display: Ay ? "flex" : "none",
              opacity: gC ? 0 : 1
            },
            children: (0, UC.jsx)("div", {
              className: "CondensedSectionsContainer",
              onClick: () => {
                NC.b.set({
                  openEverythingMenuName: bC.s.SETTINGS
                });
                aC(!0);
                IC && DC("SocialBarMobileToggleTarget Expanded");
              },
              children: (0, UC.jsxs)("div", {
                className: "CondensedSections",
                children: [null !== QC && (0, UC.jsxs)(UC.Fragment, {
                  children: [(0, UC.jsxs)("div", {
                    className: "CondensedSection CondensedSectionParty",
                    children: [(0, UC.jsx)("div", {
                      className: "CondensedSectionValue",
                      children: QC.memberSocialPreviews.length + 1
                    }), (0, UC.jsx)("div", {
                      className: "CondensedSectionIcon",
                      children: (0, UC.jsx)("i", {
                        className: "fa-solid fa-user-group"
                      })
                    })]
                  }), (0, UC.jsx)("div", {
                    className: "SocialBarDividerContainer",
                    children: (0, UC.jsx)("div", {
                      className: "SocialBarDivider"
                    })
                  })]
                }), (0, UC.jsxs)("div", {
                  className: "CondensedSection CondensedSectionFriendRequests",
                  children: [(0, UC.jsx)("div", {
                    className: "CondensedSectionValue",
                    children: WC.requests.length
                  }), (0, UC.jsx)("div", {
                    className: "CondensedSectionIcon",
                    children: (0, UC.jsx)("i", {
                      className: "fa-solid fa-user-plus"
                    })
                  })]
                }), (0, UC.jsx)("div", {
                  className: "SocialBarDividerContainer",
                  children: (0, UC.jsx)("div", {
                    className: "SocialBarDivider"
                  })
                }), (0, UC.jsxs)("div", {
                  className: "CondensedSection CondensedSectionOnlineFriends",
                  children: [(0, UC.jsx)("div", {
                    className: "CondensedSectionValue",
                    children: WC.friends.filter(CC => "offline" !== CC.location.status).length
                  }), (0, UC.jsx)("div", {
                    className: "CondensedSectionIcon",
                    children: (0, UC.jsx)("i", {
                      className: "fa-solid fa-globe"
                    })
                  })]
                })]
              })
            })
          }), (0, UC.jsxs)("div", {
            className: "SocialBarInner AnimFadeIn",
            style: {
              display: Ay ? "none" : "flex"
            },
            children: [!1, (0, UC.jsxs)("div", {
              className: "SocialBarBody",
              children: [(0, rC.h)(TC) && (0, UC.jsx)("div", {
                className: "SocialBarHiddenLocationWarningContainer",
                children: (0, UC.jsxs)("div", {
                  className: "SocialBarHiddenLocationWarning",
                  children: [(0, UC.jsx)("div", {
                    className: "SocialBarHiddenLocationWarningIcon",
                    children: (0, UC.jsx)("i", {
                      className: "fa-solid fa-info-circle"
                    })
                  }), (0, UC.jsx)("div", {
                    className: "SocialBarHiddenLocationWarningText",
                    children: CC("socialBar:locationIsHidden")
                  })]
                })
              }), sC && (0, UC.jsx)("div", {
                className: "SocialBarLoadingContainer",
                children: (0, UC.jsx)(jy.e, {})
              }), !1 === sC && ["requests", "friends"].map(yC => (0, UC.jsxs)(ky.Fragment, {
                children: [(0, UC.jsxs)("div", {
                  className: AC("SocialBarBodySection SectionPreview AnimFadeIn", {
                    [PC[yC]]: !0,
                    OpenToggleable: EC.hasOwnProperty(yC),
                    SectionOpen: EC[yC]
                  }),
                  onClick: () => {
                    EC.hasOwnProperty(yC) && VC((0, fC.d)((0, fC.d)({}, EC), {}, {
                      [yC]: !EC[yC]
                    }));
                  },
                  children: [(0, UC.jsx)("div", {
                    className: "SectionPreviewValue",
                    children: WC[yC].length
                  }), (0, UC.jsx)("div", {
                    className: "SectionPreviewLabel",
                    children: zC[yC]
                  }), WC[yC].length === ("friends" === yC ? rC.m : rC.i) && (0, UC.jsx)("div", {
                    className: "SectionPreviewLimitReached",
                    children: CC("socialBar:limitReached")
                  }), EC.hasOwnProperty(yC) && (0, UC.jsx)("div", {
                    className: "SectionPreviewToggleExpand",
                    children: (0, UC.jsx)("i", {
                      className: "fas fa-angle-up"
                    })
                  })]
                }), (0, UC.jsx)("div", {
                  className: AC("SocialBarBodySection SectionBody AnimFadeIn", {
                    [PC[yC]]: !0,
                    SectionOpen: !EC.hasOwnProperty(yC) || EC[yC]
                  }),
                  children: mI(yC)
                }), "friends" !== yC && (0, UC.jsx)("div", {
                  className: "SocialBarBodyFiller"
                })]
              }, yC))]
            }), (0, UC.jsxs)("div", {
              className: "SocialBarFooter",
              children: [(0, UC.jsx)("div", {
                className: "SocialBarDivider"
              }), (0, UC.jsx)("div", {
                className: "AddFriendPreview",
                children: (0, UC.jsx)("i", {
                  className: "fa fa-user-plus"
                })
              }), (0, UC.jsxs)("div", {
                className: "AddFriendBody AnimFadeIn",
                children: [(0, UC.jsxs)("div", {
                  className: AC("AddFriendBodyOverlay", {
                    ["AddFriendBodyOverlay".concat(Iy)]: !0
                  }),
                  children: ["Loading" === Iy && (0, UC.jsx)(jy.e, {}), "Success" === Iy && (0, UC.jsx)("i", {
                    className: "fa-solid fa-check"
                  }), "Error" === Iy && (0, UC.jsx)(UC.Fragment, {
                    children: kI ? CC(kI, {
                      playerName: lC
                    }) : (0, UC.jsx)("i", {
                      className: "fa-solid fa-x"
                    })
                  })]
                }), (0, UC.jsxs)("div", {
                  className: "PlayerSearch",
                  children: [(0, UC.jsx)(LC.d, {
                    className: "PlayerSearchInput",
                    placeholderText: CC("socialBar:enterPlayerName"),
                    domRef: ZC,
                    onValueChange: CC => {
                      oC((0, eC.standardiseName)(CC));
                      ZC.current.value = (0, eC.standardiseName)(CC);
                    },
                    onEnter: () => {
                      iI();
                    }
                  }), (0, UC.jsx)(my.d, {
                    className: "PlayerSearchInputButton SmallTextLight",
                    onClick: () => {
                      iI();
                    },
                    children: (0, UC.jsx)("i", {
                      className: "fa-solid fa-user-plus"
                    })
                  })]
                })]
              })]
            })]
          })]
        })
      })
    })
  });
});
export function f(CC) {
  let {
    joinParty: yC,
    joinText: IC = "socialBar:joinParty"
  } = CC;
  const {
    t: fC
  } = (0, iy.n)();
  const gC = (0, ky.useRef)(null);
  const AC = (0, ky.useRef)("");
  return (0, UC.jsxs)("div", {
    className: "JoinPartyAction",
    children: [(0, UC.jsx)("div", {
      className: "JoinPartyHashtag",
      children: "#"
    }), (0, UC.jsx)(LC.d, {
      className: "JoinPartyInput",
      placeholderText: fC("socialBar:partyCode"),
      domRef: gC,
      maxLength: rC.n,
      onValueChange: CC => {
        AC.current = (0, rC.y)(CC);
        gC.current.value = (0, rC.y)(CC);
      },
      onEnter: () => {
        yC(AC.current);
      }
    }), (0, UC.jsxs)(my.r, {
      className: "JoinPartyButton SmallTextLight",
      onClick: () => {
        yC(AC.current);
      },
      children: [(0, UC.jsx)("i", {
        className: "fa-regular fa-user-group"
      }), " ", fC(IC)]
    })]
  });
}
export function c(CC) {
  let {
    createParty: yC,
    createText: IC = "socialBar:createParty"
  } = CC;
  const {
    t: fC
  } = (0, iy.n)();
  return (0, UC.jsxs)(my.r, {
    className: "CreatePartyButton SmallTextLight",
    onClick: () => {
      yC();
    },
    children: [(0, UC.jsx)("i", {
      className: "fa-solid fa-user-group-crown"
    }), " ", fC(IC)]
  });
}
export function g() {
  var CC;
  var yC;
  const {
    t: IC
  } = (0, iy.n)();
  const {
    partyInformation: fC
  } = (0, SC.f)();
  if ((0, TC.w)(fC)) {
    return (0, UC.jsx)(UC.Fragment, {});
  }
  const ky = "inGame" === fC.leaderSocialPreview.location.status;
  const gC = ky && nC(fC.leaderSocialPreview.location);
  const XC = ky && (!(0, OC.cb)(fC.leaderSocialPreview.location.inLobbyName) || null === (CC = null === (yC = (0, cC.j)(fC.leaderSocialPreview.location.inGameNameWithVariation)) || void 0 === yC ? void 0 : yC.canJoinPublicRequestedLobbyName) || void 0 === CC || CC);
  return (0, UC.jsxs)("div", {
    className: AC("PartyJoinLocation", {
      InGame: ky
    }),
    children: [(0, UC.jsx)("div", {
      className: "PartyJoinLocationText SmallTextLight",
      children: (0, UC.jsx)(tC, {
        socialPreview: fC.leaderSocialPreview
      })
    }), ky && (0, UC.jsx)(qC.f, {
      tooltipInner: (0, UC.jsx)("div", {
        children: IC("socialBar:cannotJoinPublicRequestedLobbyName")
      }),
      hideTooltip: XC,
      children: (0, UC.jsx)(my.o, {
        className: "PartyJoinLocationButton SmallTextLight",
        onClick: CC => {
          m(fC.leaderSocialPreview.location, !1);
          CC.stopPropagation();
        },
        disabled: gC || !XC,
        children: IC("general:join")
      })
    })]
  });
}
const PC = {
  skin: "skin_0_11",
  eyes: "eyes_0_0",
  eyebrows: "eyebrows_1_2",
  head: "head_1_2",
  hat: "hat_none"
};
export function i(CC) {
  let {
    cosmetics: yC
  } = CC;
  const [IC, gC] = (0, ky.ey)({
    skin: new Image(),
    eyes: new Image(),
    eyebrows: new Image(),
    head: new Image(),
    hat: new Image()
  });
  const [my, XC] = (0, ky.ey)(0);
  (0, ky.Oy)(() => {
    XC(0);
    for (const ky in IC) {
      const IC = new Image();
      var CC;
      if (IC) {
        IC.src = "/textures/charSkins/pfp_components/pfp_".concat(null !== (CC = yC[ky]) && void 0 !== CC ? CC : PC[ky], "_preview.png");
      }
      IC.onload = () => {
        XC(CC => CC + 1);
      };
      IC.onerror = CC => {
        console.error("Error loading profile picture component: ".concat(ky), CC);
      };
      gC(CC => (0, fC.d)((0, fC.d)({}, CC), {}, {
        [ky]: IC
      }));
    }
  }, [yC]);
  const iy = 5 === my;
  return (0, UC.jsxs)("div", {
    className: AC("ProfilePicture", {
      ProfilePictureLoading: !iy
    }),
    children: [!iy && (0, UC.jsx)(jy.e, {}), Object.keys(IC).map(CC => {
      var yC;
      return (0, UC.jsx)("img", {
        alt: CC,
        className: "ProfilePictureComponent ProfilePictureComponent".concat((0, aC.s)(CC)),
        src: null === (yC = IC[CC]) || void 0 === yC ? void 0 : yC.src
      }, CC);
    })]
  });
}
export function j(CC) {
  var yC;
  var IC;
  var fC;
  var gC;
  let {
    playerSocialPreview: my,
    showLocation: iy = !0,
    floatingActionOptions: LC = [],
    hideFloatingAction: YC = !1,
    floatingActionsUsePositionFixed: bC = !0,
    pfpHat: rC = (0, UC.jsx)(UC.Fragment, {})
  } = CC;
  const GC = (0, ky.useRef)(null);
  return (0, UC.jsxs)("div", {
    ref: GC,
    className: AC("ProfilePreview", {
      IsPlaying: iy && "inGame" === (null === (yC = my.location) || void 0 === yC ? void 0 : yC.status),
      IsHomeScreen: iy && ("noGamePlayed" === (null === (IC = my.location) || void 0 === IC ? void 0 : IC.status) || "leftGame" === (null === (fC = my.location) || void 0 === fC ? void 0 : fC.status)),
      IsOffline: iy && "offline" === (null === (gC = my.location) || void 0 === gC ? void 0 : gC.status)
    }),
    children: [!1 === YC && LC.length > 0 && (0, UC.jsx)(sC.c, {
      className: "ProfilePreviewFloatingActions",
      triggerElementRef: GC,
      options: LC.map(CC => ({
        icon: CC.icon,
        text: CC.text,
        onPointerDown: yC => {
          CC.onPointerDown(yC);
        },
        show: CC.show
      })),
      usePositionFixed: bC
    }), (0, UC.jsxs)("div", {
      className: "ProfilePreviewLeft",
      children: [(0, UC.jsx)("div", {
        className: "ProfilePreviewPFPHat",
        children: rC
      }), (0, UC.jsxs)("div", {
        className: "ProfilePreviewPFP",
        children: [!my.isError && (0, UC.jsx)(i, {
          cosmetics: my.cosmetics
        }), my.isError && (0, UC.jsx)("i", {
          className: "fa-solid fa-face-dizzy"
        }), (0, UC.jsx)("div", {
          className: "ProfilePreviewStatusDot"
        })]
      })]
    }), (0, UC.jsxs)("div", {
      className: "ProfilePreviewRight",
      children: [!my.isError && (0, UC.jsxs)(UC.Fragment, {
        children: [(0, UC.jsx)("div", {
          className: "ProfilePreviewName",
          children: (0, UC.jsx)(XC.J, {
            text: (0, OC.I)(my.ranks, my.name, my.nameColour)
          })
        }), iy && my.location && (0, UC.jsx)("div", {
          className: "ProfilePreviewStatus",
          children: (0, UC.jsx)(tC, {
            socialPreview: my
          })
        })]
      }), my.isError && (0, UC.jsx)("div", {
        className: "ProfilePreviewRightError",
        children: "Error loading player"
      })]
    })]
  });
}
function tC(CC) {
  var yC;
  let {
    socialPreview: IC
  } = CC;
  const {
    t: fC
  } = (0, iy.n)();
  const [gC, AC] = (0, ky.ey)(null);
  (0, ky.Oy)(() => {
    (0, XC.T)(fC, IC.location.inGameNameWithVariation, IC.location.inLobbyName, !0).then(CC => {
      AC(CC);
    });
  }, []);
  let my = "";
  const LC = (null === (yC = IC.location) || void 0 === yC ? void 0 : yC.status) || "offline";
  if ("offline" === LC) {
    if (IC.lastOnline) {
      const {
        amt: CC,
        unit: yC
      } = (0, aC.O)(IC.lastOnline, Date.now());
      my = fC("socialBar:lastOnline", {
        time: "".concat(CC, " ").concat(yC)
      });
    } else {
      my = fC("socialBar:offline");
    }
  } else {
    "noGamePlayed" === LC || "leftGame" === LC ? my = fC("socialBar:onHomePage") : "inGame" === LC && (my = fC("socialBar:playingGameMode", {
      gameMode: null !== gC && void 0 !== gC ? gC : "",
      lobbyName: IC.location.inLobbyName
    }));
  }
  return (0, UC.jsx)(UC.Fragment, {
    children: null === gC ? (0, UC.jsx)(jy.e, {}) : my
  });
}
export function m(CC, yC) {
  if (!1 === nC(CC)) {
    const IC = CC.inGameNameWithVariation;
    const fC = yC ? CC.inVmUrl : void 0;
    const ky = (0, OC.G)(IC, CC.inLobbyName, fC);
    (0, wC.o)(ky);
  }
  return !1;
}
function nC(CC) {
  return !(0, TC.w)(KC.singletons.connectedWebsocketUrl) && KC.singletons.connectedGameNameWithVariation === CC.inGameNameWithVariation && KC.singletons.connectedLobbyName === CC.inLobbyName;
}