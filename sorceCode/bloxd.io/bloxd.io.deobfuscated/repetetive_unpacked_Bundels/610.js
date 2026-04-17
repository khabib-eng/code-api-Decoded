var fC = require("./18.js");
var ky = require("./616.js");
var gC = require("./572.js");
var AC = require("./1189.js");
var my = require("./82.js");
var XC = require("./109.js");
var iy = require("./123.js");
var LC = require("./38.js");
export async function f(CC, yC, IC) {
  const fC = document.createElement("canvas").getContext("2d", {
    willReadFrequently: !0
  });
  const YC = await async function (CC, yC) {
    0;
    const IC = {};
    for (const gC in (0, ky.qb)(CC)) {
      const yC = GC(CC[gC]);
      for (const CC of yC) {
        if ("rot" === CC.split("[")[1]) {
          const yC = CC.split("[")[0];
          const fC = Number(CC.split("[")[2]) - 1;
          IC[yC] ? IC[yC].push(fC) : IC[yC] = [fC];
        }
      }
    }
    const fC = {};
    for (const [ky, gC] of Object.entries(IC)) {
      const CC = yC[ky].url;
      const AC = await SC(CC);
      for (const yC of gC) {
        const CC = document.createElement("canvas");
        CC.width = AC.width;
        CC.height = AC.height;
        const IC = CC.getContext("2d");
        IC.clearRect(0, 0, CC.width, CC.height);
        IC.rotate(yC * Math.PI / 2);
        IC.drawImage(AC, AC.width * -(2 === yC || 3 === yC), AC.height * -(1 === yC || 2 === yC));
        const gC = await sC(IC.canvas);
        fC["".concat(ky, "[rot[").concat(yC + 1)] = gC;
      }
      LC.c.Gy("matchmakeAndPlayStepCompleted", {
        step: XC.g.TEXTURE_PACK_GENERATE_ROTATED_TEXTURES,
        totalSubSteps: Object.keys(IC).length
      });
    }
    return fC;
  }(CC, IC);
  for (const [ky, AC] of Object.entries(YC)) {
    IC[ky] = {
      type: gC.k.BASE64,
      url: AC
    };
  }
  const bC = await async function (CC, yC, IC) {
    0;
    const fC = {};
    const ky = async (yC, fC) => {
      const ky = [];
      for (const CC of fC) {
        const yC = IC[CC].url;
        ky.push(await SC(yC));
      }
      return await TC("".concat(yC, "Atlas"), ky, "vertical", CC);
    };
    for (const gC in yC) {
      const CC = yC[gC];
      if ("object" === typeof CC.textureInfo && "animTextures" in CC.textureInfo) {
        fC[gC] = await ky(gC, CC.textureInfo.animTextures);
      } else {
        if (Array.isArray(CC.textureInfo)) {
          for (let yC = 0; yC < CC.textureInfo.length; yC++) {
            const IC = CC.textureInfo[yC];
            if ("object" === typeof IC) {
              const CC = "".concat(gC).concat(yC);
              fC[CC] = await ky(CC, IC.animTextures);
            }
          }
        }
      }
    }
    return fC;
  }(fC, CC, IC);
  for (const [ky, AC] of Object.entries(bC)) {
    IC[ky] = {
      type: gC.k.BASE64,
      url: AC
    };
  }
  const {
    blockAtlasArr: eC,
    imagesPerAtlas: jy,
    blockAtlasWidth: qC
  } = await async function (CC, yC, IC, fC) {
    0;
    const gC = Object.values(yC).sort((CC, yC) => CC - yC);
    for (let ky = 0; ky < gC.length; ky++) {
      if (gC[ky] !== ky) {
        throw new Error("Some block atlas indices are missing");
      }
    }
    const AC = Object.keys(yC).sort((CC, IC) => yC[CC] - yC[IC]);
    const iy = Math.max(...(await Promise.all(AC.map(async CC => {
      const yC = await SC(fC[CC].url);
      LC.c.Gy("matchmakeAndPlayStepCompleted", {
        step: XC.g.TEXTURE_PACK_GENERATE_BLOCK_ATLAS_1,
        totalSubSteps: AC.length
      });
      return yC.width;
    }))));
    const YC = rC(yC, iy);
    const bC = function (CC, yC) {
      const IC = new Set();
      for (const fC in (0, ky.qb)(CC)) {
        const ky = CC[fC];
        if (ky.transTex) {
          for (const CC of GC(ky)) {
            CC in yC && IC.add(CC);
          }
        }
      }
      return IC;
    }(CC, yC);
    const eC = [];
    const NC = !!(await my.f.getItem("texturePack"));
    for (let ky = 0; ky < YC.length; ky++) {
      const CC = [];
      for (const my of AC.slice(ky * YC[0], (ky + 1) * YC[0])) {
        const yC = fC[my].url;
        let ky = await SC(yC);
        NC && !bC.has(my) && (ky = await OC(ky, IC));
        CC.push(ky);
      }
      const yC = YC[0] * iy;
      const gC = TC("generalBlockAtlas".concat(ky), CC, "vertical", IC, yC).then(CC => {
        LC.c.Gy("matchmakeAndPlayStepCompleted", {
          step: XC.g.TEXTURE_PACK_GENERATE_BLOCK_ATLAS_2,
          totalSubSteps: YC.length
        });
        return CC;
      });
      eC.push(gC);
    }
    return {
      blockAtlasArr: await Promise.all(eC),
      blockAtlasWidth: iy,
      imagesPerAtlas: YC
    };
  }(CC, yC, fC, IC);
  const KC = await async function (CC, yC) {
    0;
    const IC = [];
    let fC = 0;
    let gC = 0;
    for (const ky of iy.c) {
      const CC = await SC(yC[(0, AC.i)(ky)].url);
      IC.push(CC);
      fC = Math.max(fC, CC.width);
      gC = Math.max(gC, CC.height);
    }
    const my = (0, ky.F)(IC.length);
    for (let ky = IC.length; ky < my; ky++) {
      IC.push(null);
    }
    const YC = await NC(IC, fC, gC, "horizontal", CC, 4096);
    LC.c.Gy("matchmakeAndPlayStepCompleted", {
      step: XC.g.TEXTURE_PACK_GENERATE_ARMOUR_ATLAS,
      totalSubSteps: 1
    });
    return YC;
  }(fC, IC);
  return {
    rotatedBlockTextures: YC,
    animatedBlockTextures: bC,
    blockAtlasArr: eC,
    armourAtlas: KC,
    imagesPerAtlas: jy,
    blockAtlasWidth: qC
  };
}
export async function d(CC, yC, IC, gC) {
  const AC = document.createElement("canvas").getContext("2d", {
    willReadFrequently: !0
  });
  return (await Promise.all(gC.map((fC, gC) => async function (CC, yC, IC, fC, gC, AC) {
    const my = {};
    const XC = await SC(gC);
    const iy = XC.width;
    const LC = rC(yC, iy);
    const YC = document.createElement("canvas");
    YC.width = XC.width;
    YC.height = XC.height;
    const bC = YC.getContext("2d", {
      willReadFrequently: !0
    });
    bC.drawImage(XC, 0, 0, XC.width, XC.height);
    for (const rC in (0, ky.qb)(CC)) {
      if (CC[rC].qI) {
        continue;
      }
      let ky;
      if (CC[rC].textureInfo) {
        if (Array.isArray(CC[rC].textureInfo)) {
          if ("number" === typeof CC[rC].textureInfo[0]) {
            my[rC] = [[CC[rC].textureInfo[0], CC[rC].textureInfo[1], CC[rC].textureInfo[2]]];
            continue;
          }
          ky = CC[rC].textureInfo[0];
        } else {
          ky = CC[rC].textureInfo;
        }
      } else {
        CC[rC].itemTexture && (ky = CC[rC].itemTexture);
      }
      if ("string" === typeof ky) {
        var GC;
        const gC = 0;
        let XC;
        let YC = 0;
        let eC = 0;
        let OC = 0;
        if (yC[ky]) {
          let CC = 0;
          let IC = yC[ky];
          for (; IC >= LC[0];) {
            IC -= LC[0];
            CC++;
          }
          if (AC !== CC) {
            continue;
          }
          YC = IC * iy;
          eC = iy;
          OC = iy;
          XC = bC;
        } else {
          const CC = fC[ky].url;
          const yC = await SC(CC);
          IC.canvas.width = yC.width;
          IC.canvas.height = yC.height;
          IC.clearRect(0, 0, IC.canvas.width, IC.canvas.height);
          IC.drawImage(yC, 0, 0, yC.width, yC.height);
          eC = yC.width;
          OC = yC.height;
          XC = IC;
        }
        const TC = await jy(XC, gC, YC, eC, OC, null !== (GC = CC[rC].particlesIgnoreBlack) && void 0 !== GC && GC, ky);
        my[rC] = TC;
      }
    }
    return my;
  }(CC, yC, AC, IC, fC, gC)))).reduce((CC, yC) => (0, fC.d)((0, fC.d)({}, CC), yC), {});
}
function rC(CC, yC) {
  const IC = Math.min(2048 / yC);
  const fC = [];
  const ky = Object.keys(CC).length;
  let gC = ky;
  for (; gC > IC;) {
    fC.push(IC);
    if (fC.length >= 16) {
      return [ky];
    }
    gC -= IC;
  }
  fC.push(gC);
  return fC;
}
function GC(CC) {
  const yC = [];
  if (Array.isArray(CC.textureInfo)) {
    for (const IC of CC.textureInfo) {
      "string" === typeof IC ? yC.push(IC) : "number" !== typeof IC && yC.push(...IC.animTextures);
    }
  } else {
    "string" === typeof CC.textureInfo ? yC.push(CC.textureInfo) : "object" === typeof CC.textureInfo && "animTextures" in CC.textureInfo && yC.push(...CC.textureInfo.animTextures);
  }
  return yC;
}
const eC = 10;
async function OC(CC, yC) {
  const {
    width: IC,
    height: fC
  } = CC;
  yC.canvas.width = IC;
  yC.canvas.height = fC;
  yC.clearRect(0, 0, IC, fC);
  yC.drawImage(CC, 0, 0, CC.width, CC.height);
  const ky = yC.getImageData(0, 0, CC.width, CC.height);
  const gC = ky.data;
  let AC = !1;
  for (let my = 3; my < gC.length; my += 4) {
    gC[my] < 255 - eC && (AC = !0);
    gC[my] = 255;
  }
  return AC ? (yC.putImageData(ky, 0, 0), await createImageBitmap(yC.canvas)) : CC;
}
async function SC(CC) {
  try {
    const yC = await fetch(CC);
    if (!yC.ok) {
      throw new Error("Network error while fetching");
    }
    const IC = await yC.blob();
    return await createImageBitmap(IC);
  } catch (yC) {
    return new Promise((yC, IC) => {
      const fC = new Image();
      fC.crossOrigin = "anonymous";
      fC.onload = async () => {
        const CC = document.createElement("canvas");
        CC.width = fC.width;
        CC.height = fC.height;
        CC.getContext("2d").drawImage(fC, 0, 0);
        try {
          const IC = await createImageBitmap(CC);
          yC(IC);
        } catch (IC) {
          yC(CC);
        }
        fC.onload = null;
        fC.onerror = null;
      };
      fC.onerror = () => {
        IC(new Error("Error during image fetch fallback"));
      };
      fC.src = CC;
    });
  }
}
async function TC(CC, yC, IC, fC, ky) {
  yC.forEach(CC => {
    if (CC.width !== CC.height) {
      throw new Error("Image is not square");
    }
  });
  let gC = 0;
  yC.forEach(CC => {
    gC = Math.max(gC, CC.width, CC.height);
  });
  CC.startsWith("generalBlockAtlas") && gC > 8 && my.f.getItem("texturePack").then(CC => {
    CC || console.error("Block texture atlas width is ".concat(gC, "px, which is higher than 8px! This means a block texture is more than 8x8 which shouldn't happen!"));
  });
  return await NC(yC, gC, gC, IC, fC, ky);
}
async function NC(CC, yC, IC, fC, ky, gC) {
  const AC = "vertical" === fC;
  ky.canvas.width = AC ? yC : null !== gC && void 0 !== gC ? gC : yC * CC.length;
  ky.canvas.height = AC ? null !== gC && void 0 !== gC ? gC : IC * CC.length : IC;
  for (let my = 0; my < CC.length; my++) {
    ky.imageSmoothingEnabled = !1;
    const gC = CC[my];
    gC && ky.drawImage(gC, "vertical" === fC ? 0 : yC * my, "vertical" === fC ? IC * my : 0, yC, IC);
  }
  return await sC(ky.canvas);
}
async function sC(CC) {
  return CC.toDataURL();
}
function jy(CC, yC, IC, fC, ky, gC, AC) {
  return new Promise((my, XC) => {
    let iy = 0;
    let LC = 0;
    const YC = {
      r: 0,
      g: 0,
      b: 0
    };
    const bC = [];
    let rC;
    try {
      rC = CC.getImageData(yC, IC, fC, ky);
    } catch (GC) {
      return void XC({
        success: !1,
        reason: "Error in getting image data"
      });
    }
    for (; (iy += 4) < rC.data.length;) {
      rC.data[iy + 3] < 10 ? 0 !== rC.data[iy + 3] && console.error("Weird alpha value detected in texture ".concat(AC, " with value ").concat(rC.data[iy + 3], ". Alpha values this low won't be seen in the texture, so should be 0.")) : 0 === rC.data[iy] && 0 === rC.data[iy + 1] && 0 === rC.data[iy + 2] && gC || (++LC, YC.r += rC.data[iy], YC.g += rC.data[iy + 1], YC.b += rC.data[iy + 2], qC(bC, [rC.data[iy], rC.data[iy + 1], rC.data[iy + 2]]));
    }
    YC.r = ~~(YC.r / LC);
    YC.g = ~~(YC.g / LC);
    YC.b = ~~(YC.b / LC);
    my(bC);
  });
}
function qC(CC, yC) {
  for (const IC of CC) {
    if (IC[0] === yC[0] && IC[1] === yC[1] && IC[2] === yC[2]) {
      return;
    }
  }
  CC.push(yC);
}
export let h = 0;
function pC() {
  const CC = ["mZu1mtm5mMPjB2XZAa", "mZi1ntbKrLf5Dha", "n090twrwwq", "mZmZzwDsvKf5", "nZmWotqXqu9rAuLf", "mJe2nJCYmdzABevLzLO", "mZi1mJi4mgTRDNrJuG", "mtq1nJmYAKHOqM9y", "mtaYotCZmKfiwwzPra", "mJHXs0zSzvi", "nNnnEgDiEG"];
  return (pC = function () {
    return CC;
  })();
}
!function (CC) {
  const yC = HC;
  const IC = CC();
  for (;;) {
    try {
      if (589814 === parseInt(yC(338)) / 1 + parseInt(yC(342)) / 2 + -parseInt(yC(341)) / 3 * (-parseInt(yC(332)) / 4) + parseInt(yC(340)) / 5 * (parseInt(yC(333)) / 6) + parseInt(yC(336)) / 7 * (parseInt(yC(334)) / 8) + parseInt(yC(337)) / 9 * (-parseInt(yC(335)) / 10) + -parseInt(yC(339)) / 11) {
        break;
      }
      IC.push(IC.shift());
    } catch (fC) {
      IC.push(IC.shift());
    }
  }
}(pC);
const wC = CC => {
  0 !== (Date.now() + Math.round(Math.random()) & 1) && (CC <= 0 ? h = 8 : (h += CC, h %= 8));
};
function HC(CC, yC) {
  const IC = pC();
  HC = function (yC, fC) {
    let ky = IC[yC -= 332];
    if (void 0 === HC.gjCEHc) {
      HC.bQvkjc = function (CC) {
        let yC = "";
        let IC = "";
        for (let fC, ky, gC = 0, AC = 0; ky = CC.charAt(AC++); ~ky && (fC = gC % 4 ? 64 * fC + ky : ky, gC++ % 4) ? yC += String.fromCharCode(255 & fC >> (-2 * gC & 6)) : 0) {
          ky = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(ky);
        }
        for (let fC = 0, ky = yC.length; fC < ky; fC++) {
          IC += "%" + ("00" + yC.charCodeAt(fC).toString(16)).slice(-2);
        }
        return decodeURIComponent(IC);
      };
      CC = arguments;
      HC.gjCEHc = !0;
    }
    const gC = yC + IC[0];
    const AC = CC[gC];
    AC ? ky = AC : (ky = HC.bQvkjc(ky), CC[gC] = ky);
    return ky;
  };
  return HC(CC, yC);
}
let aC;
let cC;
Object.defineProperty(window, "BABYLON", {
  get: () => {
    wC(0);
    return aC;
  },
  set: CC => {
    wC(1);
    aC = CC;
  }
});
Object.defineProperty(window, "GpuPipelineInterface", {
  get: () => {
    wC(2);
    return cC;
  },
  set: CC => {
    wC(4);
    cC = CC;
  }
});