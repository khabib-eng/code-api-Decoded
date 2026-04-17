var fC = require("./562.js");
var ky = require("./1255.js");
var gC = require("./567.js");
var AC = require("./572.js");
var my = require("./1143.js");
var XC = require("./105.js");
var iy = require("./49.js");
var LC = require("./534.js");
export function k(CC) {
  var yC;
  return (null === (yC = (0, my.getBloxd)()) || void 0 === yC ? void 0 : yC.cC.metadatas[CC]) || fC.h.includes(CC) || CC.startsWith("particle-");
}
export function e(CC) {
  var yC;
  var IC;
  var gC;
  var AC;
  let XC;
  let {
    itemName: iy,
    amount: YC,
    tintColor: bC,
    enchantmentTier: SC = null,
    amountFontSize: NC,
    gunTransform: sC = "rotate(-45deg)",
    itemMarginTop: jy = 0
  } = CC;
  iy ? XC = fC.h.includes(iy) || iy.startsWith("particle-") ? (0, LC.jsx)(GC, {
    iconName: iy,
    tintColor: bC
  }) : "CubeBlock" === (null === (yC = my.singletons.blocksClient[iy]) || void 0 === yC ? void 0 : yC.type) || "SlabBlock" === (null === (IC = my.singletons.blocksClient[iy]) || void 0 === IC ? void 0 : IC.type) ? (0, LC.jsx)(rC, {
    itemName: iy
  }) : "Gun" === (null === (gC = my.singletons.itemsClient[iy]) || void 0 === gC ? void 0 : gC.type) ? (0, LC.jsx)(TC, {
    itemName: iy,
    transform: sC,
    marginTop: jy
  }) : "GrayscaleArmour" === (null === (AC = (0, my.getBloxd)().cC.metadatas[iy]) || void 0 === AC ? void 0 : AC.type) || ky.b[iy] ? (0, LC.jsx)(OC, {
    itemName: iy,
    enchantmentTier: SC
  }) : (0, LC.jsx)(eC, {
    itemName: iy,
    enchantmentTier: SC
  }) : (console.error("Received invalid itemName ".concat(iy, " in ItemTwoDRepresentation")), XC = (0, LC.jsx)(GC, {
    iconName: "Question Mark",
    tintColor: bC
  }));
  return (0, LC.jsxs)("div", {
    className: "ItemWrapper",
    children: [XC, 0 !== YC && 1 !== YC ? (0, LC.jsx)("div", {
      className: "ItemAmount SmallTextLight",
      style: {
        fontSize: NC
      },
      children: YC > 0 ? YC : "\u221e"
    }) : null]
  });
}
function rC(CC) {
  let {
    itemName: yC
  } = CC;
  const IC = null !== (0, my.getBloxd)().cC.metadatas[yC].meta.halfblockPlacement;
  if (my.singletons.itemsClient[yC].itemTexture) {
    return (0, LC.jsx)(eC, {
      itemName: yC
    });
  }
  const {
    topTex: fC,
    leftTex: ky,
    rightTex: gC
  } = f(yC);
  return (0, LC.jsx)("div", {
    className: "BlockItemWrapper",
    style: {
      marginBottom: IC ? "20%" : "40%"
    },
    children: (0, LC.jsxs)("div", {
      className: "BlockItem",
      style: {
        backgroundImage: "url(".concat(fC, ")")
      },
      children: [(0, LC.jsx)("div", {
        className: "BlockItem2",
        style: {
          backgroundImage: "url(".concat(ky, ")"),
          height: IC ? "50%" : "100%"
        }
      }), (0, LC.jsx)("div", {
        className: "BlockItem3",
        children: (0, LC.jsx)("div", {
          className: "BlockItem3Inner",
          style: {
            backgroundImage: "url(".concat(gC, ")"),
            height: IC ? "50%" : "100%",
            position: IC ? "absolute" : void 0,
            top: IC ? "20.5%" : void 0,
            left: IC ? "-22%" : void 0
          }
        })
      })]
    })
  });
}
function GC(CC) {
  let {
    iconName: yC,
    tintColor: IC
  } = CC;
  const ky = yC.startsWith("particle-") ? (0, gC.f)(yC.slice(9)) : (0, fC.e)(yC).url;
  return IC ? (0, LC.jsxs)("div", {
    className: "TwoDImageIcon",
    children: [(0, LC.jsx)("div", {
      className: "TwoDItemGrayscaleDropOuter",
      children: (0, LC.jsx)("img", {
        src: ky,
        className: "TwoDItemGrayscale",
        alt: "",
        style: {
          filter: "drop-shadow(1em 0 0 ".concat(IC, ")")
        }
      })
    }), (0, LC.jsx)("img", {
      src: ky,
      className: "TwoDItemGrayscaleVisiblePng",
      alt: yC
    })]
  }) : (0, LC.jsx)("div", {
    className: "TwoDImageIcon",
    style: {
      backgroundImage: "url(".concat(ky, ")")
    }
  });
}
function eC(CC) {
  let {
    itemName: yC,
    enchantmentTier: IC = null
  } = CC;
  const fC = j(yC);
  return (0, LC.jsx)("div", {
    className: "TwoDImageIcon",
    style: {
      backgroundImage: 'url("'.concat(fC, '")')
    },
    children: (0, LC.jsx)(SC, {
      texture: fC,
      enchantmentTier: IC
    })
  });
}
function OC(CC) {
  var yC;
  let {
    itemName: IC,
    enchantmentTier: fC = null
  } = CC;
  const gC = j(IC);
  const AC = null !== (yC = (0, ky.c)(IC)) && void 0 !== yC ? yC : (0, ky.c)((0, my.getBloxd)().getItemName(IC));
  return (0, LC.jsx)(LC.Fragment, {
    children: (0, LC.jsxs)("div", {
      className: "TwoDImageIcon",
      children: [(0, LC.jsx)("div", {
        className: "TwoDItemGrayscaleDropOuter",
        children: (0, LC.jsx)("img", {
          src: gC,
          className: "TwoDItemGrayscale",
          alt: "",
          style: {
            filter: "drop-shadow(1em 0 0 rgb(".concat(AC[0], ", ").concat(AC[1], ", ").concat(AC[2], "))")
          }
        })
      }), (0, LC.jsx)("img", {
        src: gC,
        className: "TwoDItemGrayscaleVisiblePng",
        alt: "Item ".concat(IC)
      }), (0, LC.jsx)(SC, {
        texture: gC,
        enchantmentTier: fC
      })]
    })
  });
}
function SC(CC) {
  var yC;
  var IC;
  let {
    texture: fC,
    enchantmentTier: ky
  } = CC;
  const [gC] = (0, iy.ey)(2e3 * -Math.random());
  return ky ? (0, LC.jsx)("div", {
    className: "TwoDImageEnchantment",
    style: {
      "--enchantmentColour": null !== (yC = XC.$[ky]) && void 0 !== yC ? yC : XC.$.None,
      "--duration": XC.Y["Tier 5"] / (null !== (IC = XC.Y[ky]) && void 0 !== IC ? IC : XC.Y.None),
      "--maskImage": "url(".concat(fC, ")"),
      "--animationDelay": "".concat(gC, "ms")
    }
  }) : null;
}
function TC(CC) {
  let {
    itemName: yC,
    transform: IC,
    marginTop: fC
  } = CC;
  const ky = j(yC);
  return (0, LC.jsx)("div", {
    className: "GunItem",
    style: {
      backgroundImage: 'url("'.concat(ky, '")'),
      transform: IC,
      marginTop: fC
    }
  });
}
export function j(CC) {
  var yC;
  var IC;
  return null !== (yC = my.singletons.itemsClient[CC]) && void 0 !== yC && yC.itemTexture ? gC.e.getTexture(my.singletons.itemsClient[CC].itemTexture, AC.j.ITEM).url : null !== (IC = my.singletons.itemsClient[CC]) && void 0 !== IC && IC.textureInfo ? gC.e.getTexture(my.singletons.itemsClient[CC].textureInfo, AC.j.ITEM).url : gC.e.getTexture(CC, AC.j.ITEM).url;
}
export function f(CC) {
  let yC;
  let IC;
  let fC;
  const {
    itemTexture: ky,
    textureInfo: XC,
    texturePerSide: iy
  } = my.singletons.itemsClient[CC];
  if (ky) {
    return null;
  }
  if (iy) {
    const CC = iy;
    yC = gC.e.getTexture(XC[CC[2]], AC.j.BLOCK).url;
    IC = gC.e.getTexture(XC[CC[4]], AC.j.BLOCK).url;
    fC = gC.e.getTexture(XC[CC[0]], AC.j.BLOCK).url;
  } else {
    yC = IC = fC = "object" === typeof XC && "animTextures" in XC ? gC.e.getTexture(XC.animTextures[0], AC.j.BLOCK).url : gC.e.getTexture(XC, AC.j.BLOCK).url;
  }
  return {
    topTex: yC,
    leftTex: IC,
    rightTex: fC
  };
}