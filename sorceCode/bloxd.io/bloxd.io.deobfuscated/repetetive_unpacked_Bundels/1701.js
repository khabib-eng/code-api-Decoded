var fC = require("./18.js");
var ky = require("./1645.js");
var gC = require("./554.js");
var AC = gC;
var my = require("./49.js");
var XC = require("./1385.js");
var iy = require("./1408.js");
var LC = require("./622.js");
var YC = require("./424.js");
var bC = require("./630.js");
var rC = require("./105.js");
var GC = require("./1511.js");
var eC = require("./1336.js");
var OC = require("./1425.js");
var SC = require("./408.js");
var TC = require("./577.js");
var NC = require("./1388.js");
var sC = require("./1705.js");
var jy = require("./1630.js");
var qC = require("./1488.js");
var KC = require("./544.js");
var pC = require("./1447.js");
var wC = require("./1143.js");
var HC = require("./1608.js");
var aC = require("./616.js");
var cC = require("./1149.js");
var UC = require("./442.js");
var EC = require("./534.js");
export function f(CC) {
  let {
    loading: yC,
    schematics: IC,
    onSchematicPicked: ky,
    selectedSchematicIdList: gC = [],
    disableAutoExport: AC
  } = CC;
  const {
    t: my
  } = (0, eC.n)();
  return (0, EC.jsxs)("div", {
    className: "SchematicList",
    children: [yC && (0, EC.jsx)(OC.e, {}), !yC && 0 === IC.length && (0, EC.jsx)("div", {
      className: "NoSchematicsText",
      children: my("worldBuilder:noSavedSchematic")
    }), !yC && IC.map(CC => (0, EC.jsx)(i, {
      schematic: (0, fC.d)((0, fC.d)({}, CC), {}, {
        favourites: 0,
        ccu: 0
      }),
      onClick: () => {
        ky(CC);
      },
      isSelected: gC.includes(CC.schematicId),
      hideCcu: !0,
      hideFavourites: !0,
      disable: CC.isAutoExported && AC
    }, CC.schematicId))]
  });
}
export function d(CC) {
  let {
    schematicId: yC
  } = CC;
  const [IC, fC] = (0, my.ey)(null);
  const [ky, gC] = (0, my.ey)("loading");
  (0, my.Oy)(() => {
    gC("loading");
    const CC = new Image();
    cC.c[yC] ? "crazygames" === UC.D && "crazyGamesNinetyNineNightsBundle" === UC.N ? CC.src = "/textures/games/customGames/".concat(cC.c[yC].largePicture, ".jpg") : CC.src = "/textures/games/customGames/".concat(cC.c[yC].smallPicture, ".jpg") : CC.src = "".concat(TC.b.s3Url, "/schematicImages/").concat(yC, ".webp");
    CC.onload = () => {
      fC(CC);
      gC("success");
    };
    CC.onerror = () => {
      gC("error");
    };
    return () => {
      CC.onload = null;
      CC.onerror = null;
    };
  }, [yC]);
  return (0, EC.jsxs)("div", {
    className: "SchematicImageContainer",
    children: ["loading" === ky && (0, EC.jsx)(OC.e, {
      loaderType: "Secondary"
    }), "success" === ky && (0, EC.jsx)("div", {
      className: "SchematicImage",
      style: {
        backgroundImage: "url(".concat(null === IC || void 0 === IC ? void 0 : IC.src, ")")
      }
    }), "error" === ky && (0, EC.jsx)("div", {
      className: "SchematicImageError",
      children: (0, EC.jsx)("i", {
        className: "fa-solid fa-face-dizzy"
      })
    })]
  });
}
export function i(CC) {
  var yC;
  var IC;
  var fC;
  var ky;
  var gC;
  let {
    schematic: XC,
    onClick: LC,
    isSelected: YC = !1,
    hideDescription: bC = !1,
    hideBadges: rC = !1,
    hideCcu: GC = !1,
    hideFavourites: OC = !1,
    favouriteGames: TC = null,
    onSetFavourite: sC = () => {},
    disable: jy = !1
  } = CC;
  const {
    userContext: pC
  } = (0, KC.fb)();
  const [wC, HC] = (0, my.ey)(null === TC ? null : TC.includes(XC.schematicId));
  const VC = (0, my.useRef)(!1);
  (0, my.Oy)(() => {
    HC(null === TC ? null : TC.includes(XC.schematicId));
  }, [TC]);
  const {
    t: xC
  } = (0, eC.n)();
  return (0, EC.jsx)(NC.f, {
    hideTooltip: !XC.description && !jy,
    tooltipInner: (0, EC.jsx)("div", {
      className: "SchematicThumbnailTooltip",
      children: jy ? xC("worldBuilder:autoExportDisabled") : XC.description
    }),
    children: (0, EC.jsx)("div", {
      className: "SchematicThumbnailContainer",
      children: (0, EC.jsxs)("div", {
        className: AC("SchematicThumbnail SmallTextBold", {
          Selected: YC,
          SchematicThumbnailMobile: (0, SC.W)(),
          Disabled: jy
        }),
        onClick: jy ? void 0 : LC,
        children: [!rC && (0, EC.jsx)("div", {
          className: "ThumbnailBadgesContainer",
          children: XC.gamePublished && (0, EC.jsx)("div", {
            className: "ThumbnailBadgeContainer popular",
            children: (0, EC.jsx)("div", {
              className: "ThumbnailBadgeMain",
              children: (0, EC.jsx)("i", {
                className: "fa-solid fa-rocket-launch"
              })
            })
          })
        }), (0, EC.jsxs)("div", {
          className: "SchematicThumbnailChipList",
          children: [!GC && (0, EC.jsxs)("div", {
            className: "SchematicThumbnailChip SchematicThumbnailCcu",
            children: [(0, EC.jsx)("i", {
              className: "fa-solid fa-user"
            }), " ", (0, aC.lb)(XC.ccu)]
          }), !OC && (0, EC.jsx)(iy.q, {
            onClick: () => {
              !function () {
                if (null === TC) {
                  return;
                }
                if (!0 === VC.current) {
                  return;
                }
                VC.current = !0;
                const CC = TC.includes(XC.schematicId);
                let yC;
                CC ? (yC = -1, qC.e.unfavouriteGame(pC, XC.schematicId).then(() => {
                  sC(!1);
                }).catch(CC => {
                  console.error("Failed to get unfavourite game", CC);
                }).finally(() => {
                  VC.current = !1;
                })) : (yC = 1, qC.e.favouriteGame(pC, XC.schematicId).then(() => {
                  sC(!0);
                }).catch(CC => {
                  console.error("Failed to favourite game", CC);
                }).finally(() => {
                  VC.current = !1;
                }));
                XC.favourites += yC;
                HC(!CC);
              }();
            },
            isLiked: !0 === wC,
            isLoading: null === wC
          })]
        }), (0, EC.jsx)("div", {
          className: "SchematicThumbnailBackground",
          children: (0, EC.jsx)(d, {
            schematicId: XC.schematicId
          })
        }), (0, EC.jsx)("div", {
          className: "SchematicFiller"
        }), (0, EC.jsxs)("div", {
          className: "SchematicName",
          children: [xC(null !== (yC = null === (IC = cC.c[XC.schematicId]) || void 0 === IC ? void 0 : IC.title) && void 0 !== yC ? yC : XC.name), "eHOkdJLB3OMQkoEdGxx4h" === XC.schematicId && "crazygames" === UC.D && "crazyGamesNinetyNineNightsBundle" !== UC.N && (0, EC.jsxs)("span", {
            children: [" ", (0, EC.jsx)("i", {
              className: "fa-solid fa-external-link"
            })]
          })]
        }), !bC && ((null === (fC = cC.c[XC.schematicId]) || void 0 === fC ? void 0 : fC.description) || XC.description) && (0, EC.jsx)("div", {
          className: "SchematicDescription",
          children: xC(null !== (ky = null === (gC = cC.c[XC.schematicId]) || void 0 === gC ? void 0 : gC.description) && void 0 !== ky ? ky : XC.description)
        })]
      }, XC.schematicId)
    })
  });
}
export function g(CC) {
  var yC;
  var IC;
  let {
    schematic: ky,
    onClose: gC
  } = CC;
  const {
    t: XC
  } = (0, eC.n)();
  const {
    userContext: SC
  } = (0, KC.fb)();
  const TC = (0, pC.t)();
  const [HC, cC] = (0, my.ey)((0, fC.d)({}, ky));
  const [UC, VC] = (0, my.ey)("Enter");
  const [xC, PC] = (0, my.ey)(null);
  const [zC, BC] = (0, my.ey)(null);
  const tC = "Enter" === UC;
  const JC = SC.playerHasRank("developer") || SC.playerHasRank("admin") || "Enter" === UC && !1 !== HC.schematicContainsSpawnBlock;
  function nC(CC) {
    VC("Loading");
    const yC = HC.gamePublished === CC;
    const IC = {
      schematicId: HC.schematicId,
      name: HC.name,
      description: HC.description,
      gamePublished: CC,
      gameIsApproved: HC.gameIsApproved,
      gameCategory: HC.gameCategory,
      defaultGamemode: HC.defaultGamemode,
      voidDeathHeight: HC.voidDeathHeight,
      disableKeepInventory: HC.disableKeepInventory,
      disableTpRequests: HC.disableTpRequests,
      disableLobbySpawn: HC.disableLobbySpawn,
      disableMobs: HC.disableMobs,
      disableSpawnProtection: HC.disableSpawnProtection,
      disableFallDamage: HC.disableFallDamage,
      worldBorder: HC.worldBorder,
      hideLobbyCode: HC.hideLobbyCode,
      persistWorld: HC.persistWorld,
      persistInventory: HC.persistInventory
    };
    qC.e.updateSchematic(SC, IC).then(() => {
      VC("Success");
      BC(XC(yC ? "worldBuilder:successfullyUpdated" : CC ? "worldBuilder:successfullyPublished" : "worldBuilder:successfullyUnpublished"));
      setTimeout(() => {
        FC("gamePublished", CC);
        VC("Enter");
      }, 1e3);
    }).catch(CC => {
      VC("Error");
      PC(CC.errorMessageForUser);
      setTimeout(() => {
        VC("Enter");
        PC(null);
      }, 1e3);
    });
  }
  function FC(CC, yC) {
    cC(IC => (0, fC.d)((0, fC.d)({}, IC), {}, {
      [CC]: yC
    }));
    ky[CC] = yC;
  }
  return (0, EC.jsxs)("div", {
    className: "SchematicPage",
    children: [(0, EC.jsx)("div", {
      className: "SchematicPageBackground",
      children: (0, EC.jsx)(d, {
        schematicId: HC.schematicId
      })
    }), (0, EC.jsx)(iy.c, {
      onClick: gC,
      children: XC("worldBuilder:back")
    }), (0, EC.jsxs)("div", {
      className: "SchematicPageOverlay SchematicPageOverlay".concat(UC),
      children: ["Loading" === UC && (0, EC.jsx)(OC.e, {}), "Success" === UC && (0, EC.jsxs)(EC.Fragment, {
        children: [(0, EC.jsx)("i", {
          className: "fa-solid fa-check"
        }), zC]
      }), "Error" === UC && (0, EC.jsxs)(EC.Fragment, {
        children: [(0, EC.jsx)("i", {
          className: "fa-solid fa-x"
        }), xC]
      })]
    }), (0, EC.jsx)(GC.d, {
      className: "SchematicPageName",
      defaultValue: HC.name,
      onValueChange: CC => {
        FC("name", CC);
      },
      placeholderText: "Schematic Name",
      maxLength: aC.Ob
    }), (0, EC.jsx)(GC.d, {
      className: "SchematicPageDescription",
      useTextarea: !0,
      defaultValue: HC.description,
      onValueChange: CC => {
        FC("description", CC);
      },
      placeholderText: "Schematic Description",
      maxLength: aC.Kb
    }), (0, EC.jsxs)("div", {
      className: "BloxdForm",
      children: [(0, EC.jsx)("div", {
        className: "SectionTitle",
        children: XC("worldBuilder:publishAsGameOptions")
      }), (0, EC.jsxs)("div", {
        className: AC("SectionBody", {
          SectionBodyHasWarning: !1 === HC.schematicContainsSpawnBlock
        }),
        children: [(0, EC.jsx)(sC.h, {
          label: "classic:defaultGamemode",
          className: "WorldGamemode",
          disabled: !JC,
          children: (0, EC.jsx)(jy.b, {
            options: bC.i.map(CC => ({
              value: CC,
              label: YC.w[CC]
            })),
            value: HC.defaultGamemode,
            onChange: CC => {
              FC("defaultGamemode", CC.value);
            }
          })
        }), (0, EC.jsx)(sC.h, {
          label: "worldBuilder:gameCategory",
          className: "GameCategory",
          disabled: !JC,
          children: (0, EC.jsx)(jy.b, {
            options: YC.L.map(CC => ({
              value: CC,
              label: CC
            })),
            value: HC.gameCategory,
            onChange: CC => {
              FC("gameCategory", CC.value);
            }
          })
        }), (0, EC.jsx)(sC.h, {
          label: "classic:disableKeepInventory",
          circleInfoText: "classic:disableKeepInventoryDescription",
          disabled: !JC,
          children: (0, EC.jsx)(sC.d, {
            checked: HC.disableKeepInventory,
            setChecked: CC => {
              FC("disableKeepInventory", CC);
            }
          })
        }), (0, EC.jsx)(sC.h, {
          label: "classic:disableTpRequests",
          disabled: !JC,
          children: (0, EC.jsx)(sC.d, {
            checked: HC.disableTpRequests,
            setChecked: CC => {
              FC("disableTpRequests", CC);
            }
          })
        }), (0, EC.jsx)(sC.h, {
          label: "classic:disableLobbySpawn",
          disabled: !JC,
          children: (0, EC.jsx)(sC.d, {
            checked: HC.disableLobbySpawn,
            setChecked: CC => {
              FC("disableLobbySpawn", CC);
            }
          })
        }), (0, EC.jsx)(sC.h, {
          label: "classic:voidDeathHeight",
          circleInfoText: "classic:voidDeathHeightDescription",
          disabled: !JC,
          children: (0, EC.jsx)("input", {
            type: "number",
            max: LC.n,
            value: null !== (yC = HC.voidDeathHeight) && void 0 !== yC ? yC : "",
            onChange: CC => {
              FC("voidDeathHeight", parseInt(CC.target.value));
            }
          })
        }), (0, EC.jsx)(sC.h, {
          label: "classic:disableMobs",
          disabled: !JC,
          children: (0, EC.jsx)(sC.d, {
            checked: HC.disableMobs,
            setChecked: CC => {
              FC("disableMobs", CC);
            }
          })
        }), (0, EC.jsx)(sC.h, {
          label: "classic:disableSpawnProtection",
          circleInfoText: "classic:disableSpawnProtectionDescription",
          disabled: !JC,
          children: (0, EC.jsx)(sC.d, {
            checked: HC.disableSpawnProtection,
            setChecked: CC => {
              FC("disableSpawnProtection", CC);
            }
          })
        }), (0, EC.jsx)(sC.h, {
          label: "classic:worldBorder",
          circleInfoText: "classic:worldBorderDescription",
          disabled: !JC,
          children: (0, EC.jsx)("input", {
            type: "number",
            min: LC.w,
            max: LC.q,
            value: null !== (IC = HC.worldBorder) && void 0 !== IC ? IC : "",
            onChange: CC => {
              const yC = parseInt(CC.target.value);
              FC("worldBorder", isNaN(yC) ? null : yC);
            }
          })
        }), (0, EC.jsx)(sC.h, {
          label: "classic:disableFallDamage",
          disabled: !JC,
          children: (0, EC.jsx)(sC.d, {
            checked: HC.disableFallDamage,
            setChecked: CC => {
              FC("disableFallDamage", CC);
            }
          })
        }), (0, EC.jsx)(sC.h, {
          label: "classic:persistInventory",
          circleInfoText: "classic:persistInventoryDescription",
          disabled: !JC,
          children: (0, EC.jsx)(jy.b, {
            options: bC.c.map(CC => ({
              value: CC,
              label: YC.k[CC]
            })),
            value: HC.persistInventory,
            onChange: CC => {
              FC("persistInventory", CC.value);
            }
          })
        }), (0, EC.jsx)(sC.h, {
          label: "classic:persistWorld",
          circleInfoText: "classic:persistWorldDescription",
          disabled: !JC,
          children: (0, EC.jsx)(sC.d, {
            checked: HC.persistWorld,
            setChecked: CC => {
              FC("persistWorld", CC);
            }
          })
        }), (0, EC.jsx)(sC.h, {
          label: "classic:hideLobbyCode",
          circleInfoText: "classic:hideLobbyCodeDescription",
          disabled: !JC,
          children: (0, EC.jsx)(sC.d, {
            checked: HC.hideLobbyCode,
            setChecked: CC => {
              FC("hideLobbyCode", CC);
            }
          })
        }), (0, EC.jsxs)("div", {
          className: "PublishButtonContainer",
          children: [!ky.gamePublished && (0, EC.jsx)(NC.f, {
            tooltipInner: (0, EC.jsx)("div", {
              className: "PublishButtonTooltip",
              children: XC("worldBuilder:publishAsGameDescription")
            }),
            children: (0, EC.jsxs)(iy.o, {
              onClick: () => {
                nC(!0);
              },
              disabled: !JC,
              children: [(0, EC.jsx)("i", {
                className: "fa-solid fa-rocket-launch"
              }), " ", XC("worldBuilder:publishAsGame"), " ", (0, EC.jsx)("i", {
                className: "fa-solid fa-info-circle"
              })]
            })
          }), !0 === ky.gamePublished && (0, EC.jsxs)(EC.Fragment, {
            children: [(0, EC.jsx)(NC.f, {
              tooltipInner: (0, EC.jsx)("div", {
                className: "PublishButtonTooltip",
                children: XC("worldBuilder:unpublishAsGameDescription")
              }),
              children: (0, EC.jsxs)(iy.x, {
                onClick: () => {
                  nC(!1);
                },
                disabled: !JC,
                children: [(0, EC.jsx)("i", {
                  className: "fa-solid fa-rocket-launch"
                }), " ", XC("worldBuilder:unpublishAsGame"), " ", (0, EC.jsx)("i", {
                  className: "fa-solid fa-info-circle"
                })]
              })
            }), (0, EC.jsxs)(iy.d, {
              onClick: () => {
                (0, wC.getBloxd)().client.leaveGame();
                TC((0, aC.G)((0, rC.Kd)(ky.schematicId)));
              },
              disabled: !JC,
              children: [(0, EC.jsx)("i", {
                className: "fa-solid fa-joystick"
              }), " ", XC("general:playGame")]
            })]
          })]
        })]
      }), !1 === HC.schematicContainsSpawnBlock && (0, EC.jsx)("div", {
        className: "SectionBodyWarning",
        children: "Schematic must contain a Spawn Block to be published as a game"
      })]
    }), (0, EC.jsx)(NC.f, {
      tooltipInner: (0, EC.jsx)("div", {
        className: "SaveButtonTooltip",
        children: XC("worldBuilder:saveChangesDescription")
      }),
      children: (0, EC.jsxs)(iy.d, {
        className: "SaveChangesButton",
        onClick: () => {
          nC(HC.gamePublished);
        },
        disabled: "Enter" !== UC,
        children: [(0, EC.jsxs)("span", {
          className: tC ? "" : "SaveChangesButtonBodyHidden",
          children: [(0, EC.jsx)("i", {
            className: "fa-solid fa-wrench"
          }), " ", XC("worldBuilder:saveChanges")]
        }), !tC && (0, EC.jsx)(OC.e, {})]
      })
    })]
  });
}
function zC(CC) {
  let {
    onFilePicked: yC
  } = CC;
  const {
    t: IC
  } = (0, eC.n)();
  const [gC, XC] = (0, my.ey)(null);
  const {
    getRootProps: LC,
    getInputProps: YC,
    isDragActive: bC
  } = (0, ky.e)({
    onDrop: CC => {
      CC.length > 0 && XC(CC[0]);
    },
    useFsAccessApi: !1
  });
  const GC = gC && gC.size > 1024 * rC.Nc;
  return (0, EC.jsxs)("div", {
    className: "SchematicUploadContainer",
    children: [(0, EC.jsxs)("div", (0, fC.d)((0, fC.d)({}, LC({
      className: AC("SchematicUpload", {
        ActiveDrag: bC
      })
    })), {}, {
      children: [(0, EC.jsx)("input", (0, fC.d)({}, YC({
        accept: ".bloxdschem"
      }))), !bC && gC ? (0, EC.jsxs)(EC.Fragment, {
        children: [(0, EC.jsx)("div", {
          className: AC("SchematicUploadIcon", "Active", {
            TooBig: GC
          }),
          children: (0, EC.jsx)("i", {
            className: "fa-solid fa-file-lines"
          })
        }), (0, EC.jsx)("div", {
          className: "SchematicUploadInstructions Active",
          children: gC.name
        })]
      }) : (0, EC.jsxs)(EC.Fragment, {
        children: [(0, EC.jsx)("div", {
          className: "SchematicUploadIcon",
          children: (0, EC.jsx)("i", {
            className: "fa-solid fa-up-from-bracket"
          })
        }), (0, EC.jsx)("div", {
          className: "SchematicUploadInstructions",
          children: IC("worldBuilder:dragAFileHere")
        })]
      })]
    })), (0, EC.jsx)(iy.o, {
      disabled: GC || !gC,
      className: "SchematicUploadButton",
      onClick: () => {
        !GC && gC && yC(gC);
      },
      children: GC ? "File too big (Max ".concat(rC.Nc, "KB)") : "Upload"
    })]
  });
}
function BC(CC) {
  let {
    ownedSchematics: yC,
    onClose: IC,
    onChosenPreset: fC,
    onChosenFile: ky
  } = CC;
  const {
    t: gC
  } = (0, eC.n)();
  return (0, EC.jsxs)(EC.Fragment, {
    children: [(0, EC.jsx)("h1", {
      className: "SchematicPopupTitle",
      children: gC("worldBuilder:loadSchematic")
    }), (0, EC.jsx)("h2", {
      className: "SchematicPopupSubtitle",
      children: gC("worldBuilder:chooseOneOfYourSchematics")
    }), (0, EC.jsx)("div", {
      className: "SchematicPopupSchematicListContainer",
      children: (0, EC.jsx)(f, {
        schematics: yC,
        onSchematicPicked: CC => {
          fC(CC.schematicId);
          IC();
        },
        loading: !1,
        disableAutoExport: !0
      })
    }), (0, EC.jsx)("h2", {
      className: "SchematicPopupSubtitle",
      children: gC("worldBuilder:uploadNewSchematic")
    }), (0, EC.jsx)(zC, {
      onFilePicked: async CC => {
        await ky(CC);
        IC();
      }
    })]
  });
}
function tC(CC) {
  var yC;
  let {
    ownedSchematics: IC,
    onClose: fC,
    onChosenEdit: ky,
    onChosenNew: gC,
    onChosenDownload: AC
  } = CC;
  const {
    t: XC
  } = (0, eC.n)();
  const [LC, YC] = (0, my.ey)("choose");
  const [bC, rC] = (0, my.ey)(null);
  const [GC, OC] = (0, my.ey)(null);
  return (0, EC.jsxs)(EC.Fragment, {
    children: [(0, EC.jsx)("h1", {
      className: "SchematicPopupTitle",
      children: XC("worldBuilder:saveSchematic")
    }), "choose" === LC && (0, EC.jsxs)(EC.Fragment, {
      children: [(0, EC.jsx)("h2", {
        className: "SchematicPopupSubtitle",
        children: XC("worldBuilder:overwriteOneOfYourSchematics")
      }), (0, EC.jsx)("div", {
        className: "SchematicPopupSchematicListContainer",
        children: (0, EC.jsx)(f, {
          schematics: IC,
          onSchematicPicked: CC => {
            rC(CC.schematicId);
            OC("existing");
            YC("save");
          },
          loading: !1,
          disableAutoExport: !0
        })
      }), (0, EC.jsx)("h2", {
        className: "SchematicPopupSubtitle",
        children: XC("general:otherOptions")
      }), (0, EC.jsxs)("div", {
        className: "OtherOptions",
        children: [(0, EC.jsx)(iy.o, {
          className: "ChooseUploadSchematicButton",
          onClick: () => {
            OC("new");
            YC("save");
          },
          children: XC("worldBuilder:saveAsNewSchematic")
        }), (0, EC.jsx)(iy.d, {
          className: "ChooseUploadSchematicButton",
          onClick: () => {
            OC("file");
            YC("save");
          },
          children: XC("worldBuilder:downloadSchematic")
        })]
      })]
    }), "choose" !== LC && (0, EC.jsx)(JC, {
      type: GC,
      ownedSchematics: IC,
      onSubmit: (CC, yC, IC) => {
        "file" === GC ? AC(yC, CC) : "new" === GC ? gC(yC, IC, CC) : ky(bC, yC, IC, CC);
        fC();
      },
      onBack: () => {
        YC("choose");
      },
      prepopName: "existing" === GC ? null === (yC = IC.find(CC => CC.schematicId === bC)) || void 0 === yC ? void 0 : yC.name : null
    })]
  });
}
function JC(CC) {
  let {
    type: yC,
    prepopName: IC,
    ownedSchematics: fC,
    onSubmit: ky,
    onBack: gC
  } = CC;
  const {
    t: XC
  } = (0, eC.n)();
  const [LC, YC] = (0, my.ey)("");
  const [bC, rC] = (0, my.ey)("");
  const [OC, SC] = (0, my.ey)(null);
  const [TC, NC] = (0, my.ey)(!0);
  const sC = CC => {
    var IC;
    CC = null !== (IC = CC) && void 0 !== IC ? IC : LC;
    const ky = (0, aC.nc)(CC);
    return ky.length > 0 ? (SC(ky.join(", ")), !1) : "new" === yC && fC.find(yC => yC.name === CC) ? (SC("Schematic already exists"), !1) : (SC(null), !0);
  };
  return (0, EC.jsxs)("div", {
    className: "SaveSchematicWindow",
    children: [(0, EC.jsx)("h2", {
      className: "SchematicPopupSubtitle",
      children: XC("general:name")
    }), (0, EC.jsx)(GC.d, {
      className: AC("SaveSchematicName", {
        Error: OC
      }),
      forcedText: IC,
      onValueChange: CC => {
        YC(CC);
        sC(CC);
      },
      placeholderText: "My Schematic",
      maxLength: aC.Ob
    }), (0, EC.jsx)("h2", {
      className: AC("SaveSchematicError", {
        Hidden: !OC
      }),
      children: OC
    }), (0, EC.jsx)("h2", {
      className: AC("SchematicPopupSubtitle", {
        Hidden: "file" === yC
      }),
      children: XC("general:description")
    }), (0, EC.jsx)(GC.d, {
      className: AC("SaveSchematicDescription", {
        Hidden: "file" === yC
      }),
      onValueChange: rC,
      placeholderText: "A really cool building or game",
      maxLength: aC.Kb,
      useTextarea: !0
    }), (0, EC.jsxs)("div", {
      className: AC("SaveSchematicCheckboxContainer", {
        WarningBorder: "existing" === yC
      }),
      children: [(0, EC.jsx)(HC.e, {
        checked: TC,
        onChange: CC => {
          NC(CC.target.checked);
        },
        disabled: !1,
        className: "SaveSchematicCheckbox"
      }), (0, EC.jsx)("h1", {
        className: "SchematicPopupSubtitle",
        children: XC("existing" === yC ? "worldBuilder:overwriteLobbyCode" : "worldBuilder:includeLobbyCode")
      })]
    }), "existing" === yC && (0, EC.jsx)("div", {
      className: "SaveSchematicLobbyCodeWarning",
      children: XC("worldBuilder:lobbyCodeWarning")
    }), (0, EC.jsxs)("div", {
      className: "SaveSchematicButtons",
      children: [(0, EC.jsx)(iy.o, {
        className: "SaveSchematicButton",
        onClick: () => {
          sC() && ky(TC, LC, bC);
        },
        children: XC("file" === yC ? "general:download" : "general:save")
      }), (0, EC.jsx)(iy.x, {
        className: "SaveSchematicButton",
        onClick: gC,
        children: XC("general:cancel")
      })]
    })]
  });
}
function nC(CC) {
  let {
    ownedSchematics: yC,
    onClose: IC
  } = CC;
  const [fC, ky] = (0, my.ey)(null);
  return (0, EC.jsxs)("div", {
    className: "SchematicListWindow",
    children: [null === fC && (0, EC.jsxs)(EC.Fragment, {
      children: [(0, EC.jsx)("h1", {
        className: "SchematicPopupTitle",
        children: "Schematic List"
      }), (0, EC.jsx)("h2", {
        className: "SchematicPopupSubtitle",
        children: "Click on a schematic for more options"
      }), (0, EC.jsx)("div", {
        className: "SchematicPopupSchematicListContainer",
        children: (0, EC.jsx)(f, {
          loading: !1,
          schematics: yC,
          onSchematicPicked: CC => {
            ky(CC);
          },
          disableAutoExport: !1
        })
      })]
    }), null !== fC && (0, EC.jsx)(g, {
      schematic: fC,
      onClose: () => {
        ky(null);
      }
    })]
  });
}
export function m(CC) {
  let {
    ownedSchematics: yC,
    onChosenFile: IC,
    onChosenPreset: fC,
    onClose: ky
  } = CC;
  XC.b.showCustomPopup({
    body: CC => (0, EC.jsx)(BC, {
      ownedSchematics: yC,
      onChosenFile: IC,
      onChosenPreset: fC,
      onClose: CC
    }),
    middleScreenPopupClassName: "SchematicPopup",
    onClose: ky,
    unlockPointerKey: "schematicLoaderPopup"
  });
}
export function q(CC) {
  let {
    ownedSchematics: yC,
    onChosenDownload: IC,
    onChosenEdit: fC,
    onChosenNew: ky,
    onClose: gC
  } = CC;
  XC.b.showCustomPopup({
    body: CC => (0, EC.jsx)(tC, {
      ownedSchematics: yC,
      onChosenDownload: IC,
      onChosenEdit: fC,
      onChosenNew: ky,
      onClose: CC
    }),
    middleScreenPopupClassName: "SchematicPopup",
    onClose: gC,
    unlockPointerKey: "schematicSaverPopup"
  });
}
export function l(CC) {
  let {
    ownedSchematics: yC,
    onClose: IC
  } = CC;
  XC.b.showCustomPopup({
    body: CC => (0, EC.jsx)(nC, {
      ownedSchematics: yC,
      onClose: CC
    }),
    middleScreenPopupClassName: "SchematicPopup",
    onClose: IC,
    unlockPointerKey: "schematicListPopup"
  });
}
export function n(CC) {
  let {
    schematic: yC,
    onClose: IC
  } = CC;
  XC.b.showCustomPopup({
    body: CC => (0, EC.jsx)(g, {
      schematic: yC,
      onClose: CC
    }),
    middleScreenPopupClassName: "SchematicPopup",
    onClose: IC,
    unlockPointerKey: "schematicPagePopup"
  });
}