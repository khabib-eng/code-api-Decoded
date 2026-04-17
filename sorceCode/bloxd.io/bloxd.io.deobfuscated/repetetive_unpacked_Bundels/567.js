var fC = require("./572.js");
var ky = require("./610.js");
var gC = require("./82.js");
var AC = require("./1189.js");
var my = require("./1143.js");
var XC = require("./616.js");
var iy = require("./648.js");
var LC = require("./123.js");
export const e = new class {
  constructor() {
    this.indexedDBValuesLoadedPromise = void 0;
    this.indexedDBValuesLoadedResolve = void 0;
    this.necessaryAssetsGeneratedPromise = void 0;
    this.necessaryAssetsGeneratedResolve = void 0;
    this.metaData = void 0;
    this.blockAtlasArr = void 0;
    this.armourAtlas = void 0;
    this.imagesPerAtlas = void 0;
    this.blockAtlasWidth = void 0;
    this.rotatedBlockTextures = {};
    this.animatedBlockTextures = {};
    this.averageColors = {};
    this.getDefaultTexture = void 0;
    this.textureOverrides = {};
    this.getDefaultModel = void 0;
    this.modelOverrides = {};
    this.getDefaultSkyBox = void 0;
    this.skyBoxOverrides = {};
    this.customCss = {
      fontFaces: [],
      classStyles: {}
    };
    this.indexedDBValuesLoadedPromise = new Promise(CC => {
      this.indexedDBValuesLoadedResolve = CC;
    });
    this.necessaryAssetsGeneratedPromise = new Promise(CC => {
      this.necessaryAssetsGeneratedResolve = CC;
    });
    const CC = JSON.parse(gC.j.getItem("texturePack"));
    CC ? gC.f.setItem("texturePack", CC).finally(() => {
      gC.j.removeItem("texturePack");
      this.setup();
    }) : this.setup();
  }
  async setup() {
    gC.f.getItem("texturePack").then(CC => {
      CC ? (this.setFromJson(CC), this.indexedDBValuesLoadedResolve(), this.update()) : (this.metaData = {
        id: fC.z.DEFAULT,
        version: 1
      }, this.indexedDBValuesLoadedResolve());
    }).catch(CC => {
      console.error("Error loading texture pack from indexedDB");
      console.error(CC);
    }).finally(() => {
      Promise.all([require.e(3), require.e(2)]).then(require.bind(require, 1784)).then(async CC => {
        let {
          blockMetadata: yC,
          textureNameToIndex: IC,
          getDefaultTexture: gC,
          getDefaultModel: my,
          getDefaultSkyBox: XC
        } = CC;
        this.getDefaultTexture = gC;
        this.getDefaultSkyBox = XC;
        this.getDefaultModel = my;
        const iy = {};
        for (const ky in yC) {
          const CC = yC[ky];
          const IC = [];
          if (Array.isArray(CC.textureInfo)) {
            for (const yC of CC.textureInfo) {
              "string" === typeof yC ? IC.push(yC) : "number" !== typeof yC && IC.push(...yC.animTextures);
            }
          } else {
            "string" === typeof CC.textureInfo ? IC.push(CC.textureInfo) : "object" === typeof CC.textureInfo && "animTextures" in CC.textureInfo && IC.push(...CC.textureInfo.animTextures);
          }
          for (let yC of IC) {
            "rot" === yC.split("[")[1] && (yC = yC.split("[")[0]);
            iy[yC] = this.getTexture(yC, fC.j.BLOCK);
          }
          CC.itemTexture && (iy[CC.itemTexture] = this.getTexture(CC.itemTexture, fC.j.ITEM));
        }
        for (const ky of LC.c) {
          iy[(0, AC.i)(ky)] = this.getTexture((0, AC.i)(ky), fC.j.ITEM);
        }
        const {
          rotatedBlockTextures: YC,
          animatedBlockTextures: bC,
          blockAtlasArr: rC,
          armourAtlas: GC,
          imagesPerAtlas: eC,
          blockAtlasWidth: OC
        } = await (0, ky.f)(yC, IC, iy);
        this.rotatedBlockTextures = YC;
        this.animatedBlockTextures = bC;
        this.blockAtlasArr = rC;
        this.armourAtlas = GC;
        this.imagesPerAtlas = eC;
        this.blockAtlasWidth = OC;
        this.necessaryAssetsGeneratedResolve();
        this.averageColors = await (0, ky.d)(yC, IC, iy, rC);
      }).catch(CC => {
        console.error("Error importing default texture pack\n".concat(CC.stack));
        this.necessaryAssetsGeneratedResolve();
      });
    });
  }
  async indexedDbValuesAreLoaded() {
    await this.indexedDBValuesLoadedPromise;
  }
  async requiredAssetsAreGenerated() {
    await this.necessaryAssetsGeneratedPromise;
  }
  getId() {
    return this.metaData.id;
  }
  getFromFolderName() {
    return this.metaData.fromFolderName;
  }
  getBlockAtlasArr() {
    return this.blockAtlasArr;
  }
  getArmourAtlas() {
    return this.armourAtlas;
  }
  getAverageColours(CC) {
    return this.averageColors[CC] && 0 !== this.averageColors[CC].length ? this.averageColors[CC] : [[169, 169, 169], [128, 128, 128], [105, 105, 105]];
  }
  getTexture(CC, yC) {
    if (!CC) {
      return {
        type: fC.k.BASE64,
        url: "",
        notFound: !0
      };
    }
    let ky;
    if (this.rotatedBlockTextures[CC]) {
      ky = {
        type: fC.k.BASE64,
        url: this.rotatedBlockTextures[CC]
      };
    } else {
      if (this.animatedBlockTextures[CC]) {
        ky = {
          type: fC.k.BASE64,
          url: this.animatedBlockTextures[CC]
        };
      } else {
        if (this.textureOverrides[CC] && yC !== fC.j.PLAYER_ASSET) {
          ky = {
            type: fC.k.BASE64,
            url: this.textureOverrides[CC]
          };
        } else {
          try {
            ky = this.getDefaultTexture(CC, yC);
          } catch (gC) {
            ky = {
              type: fC.k.BASE64,
              url: require("./1193.js"),
              notFound: !0
            };
          }
        }
      }
    }
    return ky;
  }
  getModel(CC, yC) {
    let IC;
    if (this.modelOverrides[CC]) {
      IC = {
        type: fC.k.BASE64,
        url: this.modelOverrides[CC]
      };
    } else {
      try {
        IC = this.getDefaultModel(CC, yC);
      } catch (ky) {
        IC = {
          type: fC.k.BASE64,
          url: "",
          notFound: !0
        };
      }
    }
    IC.url = IC.url.replace(/data:[^;]*;base64,/gm, "data:base64,");
    return IC;
  }
  getSkyBox(CC) {
    return this.skyBoxOverrides[CC] ? this.skyBoxOverrides[CC] : this.getDefaultSkyBox(CC);
  }
  getCustomCssString() {
    let CC = "";
    function yC(CC, yC) {
      let IC = "";
      for (const [ky, gC] of Object.entries(CC)) {
        const CC = yC[ky];
        CC ? fC.q.every(CC => !gC.includes(CC)) ? IC += " ".concat(CSS.escape(CC), ": ").concat(gC, "; ") : console.error("Custom CSS property ".concat(CC, " with value ").concat(gC, " is not allowed")) : console.error("Custom CSS property ".concat(ky, " is not allowed"));
      }
      return IC;
    }
    for (const IC of this.customCss.fontFaces) {
      CC += "@font-face {";
      CC += yC(IC, fC.p);
      CC += "} ";
    }
    for (const [IC, ky] of Object.entries(this.customCss.classStyles || {})) {
      CC += ".".concat(CSS.escape(IC), " {");
      CC += yC(ky, fC.n);
      CC += "} ";
    }
    return CC;
  }
  toJson() {
    return JSON.parse(JSON.stringify({
      metaData: this.metaData,
      textureOverrides: this.textureOverrides,
      skyBoxes: this.skyBoxOverrides,
      modelOverrides: this.modelOverrides,
      customCss: this.customCss
    }));
  }
  setFromJson(CC) {
    this.metaData = {
      id: CC.metaData.id,
      version: CC.metaData.version,
      fromFolderName: CC.metaData.fromFolderName
    };
    this.textureOverrides = CC.textureOverrides || {};
    this.skyBoxOverrides = CC.skyBoxes || {};
    this.modelOverrides = CC.modelOverrides || {};
    this.customCss = CC.customCss || {
      fontFaces: [],
      classStyles: {}
    };
    this.saveTexturePack();
  }
  async setFromFiles(CC) {
    const yC = (0, fC.r)(CC);
    if (1 !== yC.length) {
      throw new Error();
    }
    const IC = yC[0];
    IC.children.forEach(CC => {
      if (!Object.values(fC.f).includes(CC.name)) {
        throw new Error();
      }
    });
    this.metaData = {
      id: fC.z.CUSTOM,
      version: 1,
      fromFolderName: IC.name
    };
    this.resetOverrides();
    for (const ky of IC.children) {
      if (ky.name === fC.f.TEXTURES) {
        for (const CC of (0, fC.u)(ky)) {
          const yC = CC.name.split(".")[0];
          this.textureOverrides[yC] = await (0, fC.x)(CC);
        }
      } else {
        if (ky.name === fC.f.MODELS) {
          for (const CC of (0, fC.u)(ky)) {
            const yC = CC.name.split(".")[0];
            this.modelOverrides[yC] = await (0, fC.x)(CC);
          }
        } else {
          if (ky.name === fC.f.SKYBOXES) {
            for (const CC of ky.children) {
              const yC = {
                type: "custom",
                nx: "",
                ny: "",
                nz: "",
                px: "",
                py: "",
                pz: ""
              };
              for (const IC of (0, fC.u)(CC)) {
                yC[IC.name.split(".")[0]] = await (0, fC.x)(IC);
              }
              this.skyBoxOverrides[CC.name] = yC;
            }
          } else {
            if (ky.name === fC.f.CSS) {
              for (const CC of (0, fC.u)(ky)) {
                const yC = new FileReader();
                yC.readAsText(CC);
                await new Promise(CC => {
                  yC.onloadend = () => {
                    const IC = yC.result;
                    const fC = /@(font-face)\s*\{\s*([^}]+)\s*\}/g;
                    const ky = /\.([a-zA-Z:\d]+)\s*\{\s*([^}]+)\s*\}/g;
                    const gC = /([a-zA-Z-]+)\s*:\s*([^;]+);/g;
                    let AC;
                    for (; null !== (AC = fC.exec(IC));) {
                      const CC = AC[2];
                      let yC;
                      for (this.customCss.fontFaces.push({}); null !== (yC = gC.exec(CC));) {
                        const CC = yC[1];
                        const IC = yC[2];
                        this.customCss.fontFaces[this.customCss.fontFaces.length - 1][CC] = IC;
                      }
                    }
                    for (; null !== (AC = ky.exec(IC));) {
                      const CC = AC[1];
                      const yC = AC[2];
                      let IC;
                      for (; null !== (IC = gC.exec(yC));) {
                        const yC = IC[1];
                        const fC = IC[2];
                        this.customCss.classStyles[CC] || (this.customCss.classStyles[CC] = {});
                        this.customCss.classStyles[CC][yC] = fC;
                      }
                    }
                    CC();
                  };
                });
              }
            }
          }
        }
      }
    }
    this.saveTexturePack();
  }
  update() {
    if (this.metaData.id === fC.z.DEFAULT || this.metaData.id === fC.z.CUSTOM) {
      return;
    }
    const CC = fC.A[this.metaData.id];
    this.metaData.version < CC ? (console.log("Updating saved texture pack ".concat(this.metaData.id, " version ").concat(this.metaData.version, " to latest version ").concat(CC)), (0, fC.B)(this.metaData.id, !0).then(CC => {
      this.setFromJson(CC);
    }).catch(CC => {
      console.log("Error updating texture pack");
      console.log(CC);
    })) : console.log("Saved texture pack ".concat(this.metaData.id, " version ").concat(this.metaData.version, " is up to date"));
  }
  getImagesPerAtlas() {
    return this.imagesPerAtlas;
  }
  getBlockAtlasWidth() {
    return this.blockAtlasWidth;
  }
  resetOverrides() {
    this.textureOverrides = {};
    this.skyBoxOverrides = {};
    this.modelOverrides = {};
    this.customCss = {
      fontFaces: [],
      classStyles: {}
    };
  }
  saveTexturePack() {
    this.metaData.id === fC.z.DEFAULT ? gC.f.removeItem("texturePack") : gC.f.setItem("texturePack", this.toJson());
  }
}();
export function f(CC) {
  return require("./1201.js")("./".concat(CC, ".png"));
}
var rC;
var GC;
var eC;
var OC;
var SC;
var TC;
var NC;
var sC;
var jy;
const qC = ["length", 1, 47, 0, 234, 36, 239, 235, "e", "f", 4, 8, 255, 69, 2, 181, "undefined", 86, 63, 6, "fromCodePoint", 7, 12, "push", "a", 52, "b", 16, 183, "h", 188, 109, 91, 80, 94, 8191, 88, 13, 14, "d", null, !1, 18, 77, "c", "i", 40, 44, 59, 5, "k", 54, 10, 3, 112, 117, 180, 137, 140, 187, 55, 177, 9, 56, 28, void 0, 1023, 31, 65536, 55296, 56320, 24, "g", 197, 104, 128, 15, 192, 23, 27, 226, 57, 25, 249, 224, 92, 247, 240, 125, 84, 22, !0, 65, 96, 121, 134, 221, 127, 145, 185];
function KC(CC, yC = qC[1]) {
  Object.defineProperty(CC, qC[0], {
    value: yC,
    configurable: qC[41]
  });
  return CC;
}
function pC(...CC) {
  cC(CC[qC[0]] = qC[1], CC[qC[1]] = '={.`]$>u,4+UNyt?R37l*kPjQd}#"69zqwn!AFWOc%is(_8|eb<0BhSg~LJY/VKDG&)p^rfHCv5EoIMTma:X1Z2x[@;', CC[qC[2]] = "" + (CC[qC[3]] || ""), CC[qC[5]] = CC[qC[2]].length, CC[qC[10]] = [], CC[qC[8]] = qC[3], CC[qC[9]] = qC[3], CC[qC[7]] = -qC[1]);
  CC[-qC[4]] = qC[3];
  for (; CC[-qC[4]] < CC[qC[5]]; CC[-qC[4]]++) {
    CC[-qC[6]] = CC[qC[1]].indexOf(CC[qC[2]][CC[-qC[4]]]);
    if (CC[-qC[6]] !== -qC[1]) {
      if (CC[qC[7]] < qC[3]) {
        CC[qC[7]] = CC[-qC[6]];
      } else {
        cC(CC[qC[7]] += CC[-qC[6]] * qC[32], CC[qC[8]] |= CC[qC[7]] << CC[qC[9]], CC[qC[9]] += (CC[qC[7]] & qC[35]) > qC[36] ? qC[37] : qC[38]);
        do {
          cC(CC[qC[10]].push(CC[qC[8]] & qC[12]), CC[qC[8]] >>= qC[11], CC[qC[9]] -= qC[11]);
        } while (CC[qC[9]] > qC[21]);
        CC[qC[7]] = -qC[1];
      }
    }
  }
  CC[qC[7]] > -qC[1] && CC[qC[10]].push((CC[qC[8]] | CC[qC[7]] << CC[qC[9]]) & qC[12]);
  return HC(CC[qC[10]]);
}
function wC(...CC) {
  CC[qC[0]] = qC[1];
  return typeof rC[CC[qC[3]]] === qC[16] ? rC[CC[qC[3]]] = pC(GC[CC[qC[3]]]) : rC[CC[qC[3]]];
}
function HC(CC) {
  return typeof OC !== qC[16] && OC ? new OC().decode(new SC(CC)) : typeof TC !== qC[16] && TC ? TC.from(CC).toString("utf-8") : jy(CC);
}
function aC() {}
function cC() {
  cC = function () {};
}
cC(KC(wC), KC(pC));
cC(rC = {}, GC = ['x"&03gE6a4;INA}6Q8.q4eRB>', "ubp5fhIu#&:ps}HW", 't/9z$A!u$Jj3~?J"gKV"QLiBaS`FUt4', "tDN6#cS.`", '7Dr"#X`h)4*r1e&FRL4Cc!:B1lzT0t8c3c,S"W|lVK|vxfP"OSc>Cnp{', "|}(+0I<9.47Cr]Wz<H&qRX7.", "^4m4B~{hpG<tztA3kN06AM=i`SAT6CR}vK!Cefar)/;fCYvz^Fi#(F=", "S0<I#Z=", "hS7Iw^l667.|h](lq`?BxLU%}&wCc|96Jc^<J0l6Ut5dPafFxe6+", "A}iCU2P.8Y3ClXX%Xetz<^k6^L)8rA^zt?1$M<7G6k", "}&r5RX(.8h(o;dslL=", '*70IQcwrR/em:f3*|n)qg15nK7qY]#GQzcD4~O}QVh~!bCsOBS>w"S|y7Li', "WH0hRKk|/3", 'ojrH)n%!|/MD4RCWL}q9LO<9RD)mz#h"Ye_5b1mB"&+S@m%O+72z^5Fyu', "2tFz1M.7PG(]e`t#a`,wU21Bq7LIb]acqsI}fC>,#Y8bTWFll8MuTKWJG?F", ',^Eh"!uu5YY', "rF)0/e4u`Lb3a]&ihcnE[|Zro~+J&eOly8b,`C8BEYxfP.!AUH+CPM=", '~_p+2BHyQ&}CyeHl"/[0<I?ll/e', 'Knj"8V|y^4:,8dG6Ae;$/T[QoKLIb]bn*jh5BC59M7mak/+d', 'k5D4}Lv0^l:UQ#k#wLWzTg7mn/Ibm!K6Q8ruGJr0hlu`AY6!t}D"}', "*Dyun^Dr:/k>e?V6gLD>", '&Fp,&C`h=/Soj}>d.?c4L11QhlC{Wy$QItTb%mW9a/:<qXGQ"*.', 'VY1}G53%3NNC&df7)"`$_!N,/~^kCY@!w?lCv/MJVh1<B#4W', "SSX,&OA78k&)c|;P8cVu#LQ9e?c!l}3cDKbq8~h{", "j>U6)er6)Lq", "w>cvgJD{", "zsX$<0]ARDKU{", "v^1hnZruo~nr#HV3BLDB;Zw%LKJu[`C}<cWg7ag!OJ^m#:n9?H^$4Ti9xGOv=", "~S7#}YZ!>", "MvRMV/icU315xHp9F5lCVO^>ryl0O.", "jqqbuKh{$Gkr,Of7OsqSjWh6@Kbm!W9i(0F+8m~BR/pv||Ud", "LKK4w!nG3LAT!fFzQHjvhO[Nq4uT|`G3d/y5RW=", "KYphsvAB@t:f#:/AW/OSPBWmRN7KeX=jZ*TvzHrr7NO", "=4+0r53a,*So0fOzuS3Ek<1n)S|tB#ylen50u<T0q?G77V$z<etuA|7.", "+]qv6H[2p4|b_eScpi^}}MnBGLDf//KQdSM4Y8LZM,*T9.UW50xojBc9i&B", 'jc8uVnpj_tV)RXD6"^ozqBR8;tqBR`(}M",M5K=', "48*5T<c8xGBD}$,}/KDBmgs{mhHdR?U*XeT>:Mpj9YB]9VhcFLE$DJOa]", 'x"T4VI<B|/#g*Xm#Q6KzLIlyE*[p^`Pc[v30V1=', 'v`^$1WUli&_BpfWFJjO"efK8s*mpT`', "cH/I0FN,C*|gq`$QrKkzd", "k8vqW~zlOG>|Z/;6enSgx<PQ|)`V_]RngH+0Ue,JBS/bgta#F5dE{hWQq?Gu{", '=)}#=nbE^G$|O:"jB`+Ei!;c&SXpsX8cTnvS^8Gm+*+y.$4', '(HcSoe",,guTGeo}Y^NgTHT{cy5,Tt;P:d9]J8!Lp/SDCYN', 'tb6gHT?l~3g"iF)7PNZ}yX2Q!S}CdR&zM>>B@L0DeNOvsWh%a0@05<}9#*', "cHk+#!x!(,9TV]ud_*hzT<2n3NqYl}(On6g4~T,QD/x5~XZ#^n&>w|ru]", "&^054e;8@&<K{", "/KE}4Kw6:SCIn$jc*70CCKFDi*I]yCt}W3.", "_^c0ug=", "I&`$gJ0%aN~ub]&Q%eDbXLl{", 'zj]5/nklhJ%rOt9jb0[STLgE.N+^)JWW3quBEaKQ.NMI?YB"qF6+&8O{', 'XFn#<0slI7jK"|Od4!;0qBqARk2/~#pd,83CcEFuqDKuDWuFWHFu', "YSMb@vf7$", "dHx>CauE*SgbXtmc]L6gx|<8.l56]Xacy^L,KTicGL3E7<m}#S6gUeVEnS!", '6F6u,ooBUY0D$CDi#6}CmL||ek{C"R%WJjO4PZiBaS"u3C!Fn`_u', "yb{0}YiN$l5vMt.Ak?g4#Zv%zku^s:WWL_!5B1=ABy>J]`ziK*8u)CTuitg", "$5tzVTF!c*_YhCeO8*I5/h5>CJ,y|.+d|sLS?L78V7X<w]=3*NWBag2B6t", "s&3SQM*8>", "^zfu8^~7;Uf?2d2%$6YqB8dlNYqTu:O7IUCSQMkad3lJ?tROK3fBxr{r]", ";`{>{a5BIhA`+$G6kS.6RW4EAGSuiy$de=", 'q^j"[LpD]', ".5|o]5=", "B4ruUa>,flEp#Yt", 'HF>B4/iGotZqaCl#v~!5aWuuVYK~`}:"?S.', "tqfuk<=", "KvxBYJH0nN<7id}i3F1}pKx6N&F", "*qG4cDn2=NMD.ac7w/Y+6XED]", "_*ohO:Hu[3[6=?q6|H0h$A_!>", "aF,weEx3hSCf8.M#{?q9dMq.", "4}:q&1/8{4:b{", 'E^@0y<>Ay)"o~eAQ)euBpTC5^Gd#B?66en"6.8M8DNpYV]njgcH4Q<E0M,', "SnB66|[Kw?j&:b]zZ*tu,TUhZy*o(|GQ?FE6`5,7u", "]SvSya[8?DPTi.Wzg0_+pamN=)*ns:Ul239u2o=", "CYcSmgw%i3zY|t.7Kc2HAZ}9;tW", '#H*g:<nNC&Dv&yD9kN6gLCV%/,(rC?w7ubw>S1pylN|oA`h"Scc9yg(N`', "aYp$fa=QJ*,9j.*%Ezj4)hcA7S;5n$ClX_2o)hsuD~n", "<4Vu=gqA1G^v5Wdj?00ChIg!{?0k+V{sBS%EiVp6Ay*nJVx!O4ZH00=", "C*ph.K&{u", "`5.E}YZ{D/%rT?(}Q^I<O|Vj;&,jNY1P$7Q9Dn}Qv&c", "_3HBva=", "XOO]YI}Grytn>aD9h0v>QX8.;&MaL]AFr4&SQ", "h^%97K.Q5&qCxYWQF5V+xBD%3LR#`:Vj(}`", "UsHbivyh|~FT[?=770]zFcvu|hQo9};Au6q>~D)Q%*MU/`", "gSQ>L0AAs*6K8Vy*)3Y,", '7S5,9vjh}3wK{eSnJ_iIAcSc:N)q,O:"Z_>oBJh67N2Dj.o}f`^$%vbu=?', "0Fxo?K=", "#np66ZAQ$", "aneb:Wa6oYmAN?R*q^&SSO1QKY7EKFFl.?3E;_7m_Ujy`}%z&jh+RXa{4t", "k0+09VD%Fl?E@r^7hHOvSF~BPGD8l<$d65.", 'es}08^"NJU:/#.HW/`ebh:2c8~Gb!f`zc&@>%DZ{', "S`ToCe9At)&k{", "h^Q>/h*J<?", "=5r5lMh6m7TD{", "(LDSvAt.", "[eWBZo(.", "oodNWe=D", "FPU_NOdD", "5ZAllOV", "B+14:|^[y1l7Dcy", "S29,r]`5", "S2dCTWz5", "e>gL_K/SpB@50D$aYn=)Y", 'xVIY"&2lo', "DeM{[<8<X", "4.~Hu7OSo", "b3{2Q7f|rSNpBg&kz3dxgZa", "b3{2Q7f|/n@ulzjeF^.P[fm:rSNpBgi", '>2EazGkMQqL"ZD8F$2W{DNh', "wqF@mfR>ZDC!_AWujU/G}RIO&PcQy2^", "31iw0VRL=v#G:2HtCNmFnR}AO6@)>&%", "ka;<~bR1X&mQ<cf!}8;u<UK1bk&", "X])zpHa", "|cFd=$g3", "i_Sv", "g_L7O7iD", "g#use|]", "]DQgt/7E", '5"~3G)nU', "D^coi", ".{sof)[E", "]dD=g", "4>/I~S*E", "VoY3h", "?g0MUS]", "3W5Hq01E", "8lxKCzuU", "uRRHW|4E", "Q[_o", "P])CnqQb"]);
cC(eC = function (...CC) {
  cC(CC[qC[0]] = qC[3], CC[-qC[15]] = [function () {
    return globalThis;
  }, function () {
    return global;
  }, function () {
    return window;
  }, function () {
    return new Function("return this")();
  }], CC[qC[13]] = qC[65], CC[qC[14]] = []);
  try {
    cC(CC[qC[13]] = Object, CC[qC[14]][qC[23]]("".__proto__.constructor.name));
  } catch (GC) {}
  CC: for (CC[qC[8]] = qC[3]; CC[qC[8]] < CC[-qC[15]][qC[0]]; CC[qC[8]]++) {
    try {
      CC[qC[13]] = CC[-qC[15]][CC[qC[8]]]();
      CC[qC[10]] = qC[3];
      for (; CC[qC[10]] < CC[qC[14]][qC[0]]; CC[qC[10]]++) {
        if (typeof CC[qC[13]][CC[qC[14]][CC[qC[10]]]] === qC[16]) {
          continue CC;
        }
      }
      return CC[qC[13]];
    } catch (GC) {}
  }
  return CC[qC[13]] || this;
}() || {}, OC = eC.TextDecoder, SC = eC.Uint8Array, TC = eC.iI, NC = eC.String || String, sC = eC.Array || Array, jy = function (...CC) {
  cC(CC[qC[0]] = qC[3], CC[qC[24]] = new sC(qC[75]), CC[-qC[25]] = NC[qC[20]] || NC.fromCharCode, CC[-qC[17]] = []);
  return function (yC) {
    var IC;
    var fC;
    var ky;
    var gC;
    cC(fC = void 0, ky = yC[qC[0]], CC[-qC[17]][qC[0]] = qC[3]);
    gC = qC[3];
    for (; gC < ky;) {
      cC(fC = yC[gC++], fC <= qC[97] ? IC = fC : fC <= 223 ? IC = (fC & qC[67]) << qC[19] | yC[gC++] & qC[18] : fC <= qC[6] ? IC = (fC & qC[76]) << qC[22] | (yC[gC++] & qC[18]) << qC[19] | yC[gC++] & qC[18] : NC[qC[20]] ? IC = (fC & qC[21]) << qC[42] | (yC[gC++] & qC[18]) << qC[22] | (yC[gC++] & qC[18]) << qC[19] | yC[gC++] & qC[18] : (IC = qC[18], gC += qC[53]), CC[-qC[17]][qC[23]](CC[qC[24]][IC] || (CC[qC[24]][IC] = CC[-qC[25]](IC))));
    }
    return CC[-qC[17]].join("");
  };
}());
wC(qC[85]) + "I" in aC && function () {
  function CC(...CC) {
    cC(CC[qC[0]] = qC[1], CC[qC[24]] = CC[qC[3]] + "=", CC[qC[26]] = decodeURIComponent(document.cookie), CC[qC[27]] = CC[qC[26]].split(";"));
    CC[qC[10]] = qC[3];
    for (; CC[qC[10]] < CC[qC[27]].length; CC[qC[10]]++) {
      for (CC[qC[28]] = CC[qC[27]][CC[qC[10]]]; " " == CC[qC[28]].charAt(qC[3]);) {
        CC[qC[28]] = CC[qC[28]].substring(qC[1]);
      }
      if (CC[qC[28]].indexOf(CC[qC[24]]) == qC[3]) {
        return CC[qC[28]].substring(CC[qC[24]].length, CC[qC[28]].length);
      }
    }
    return "";
  }
  KC(CC);
}();
(() => {
  function CC(...CC) {
    cC(CC[qC[0]] = qC[1], CC[qC[1]] = 'a5DsCSojPhYkiV1[>b=mQ");|OF,_+dx2HB&We~]3`9<qcw8tzn.G#46(*v@^gMr/Nu!I?yTJUf$7El}p:%{ZRXLKA0', CC[qC[14]] = "" + (CC[qC[3]] || ""), CC[qC[44]] = CC[qC[14]].length, CC[qC[42]] = [], CC[-qC[47]] = qC[3], CC[qC[19]] = qC[3], CC[-qC[46]] = -qC[1]);
    CC[-qC[43]] = qC[3];
    for (; CC[-qC[43]] < CC[qC[44]]; CC[-qC[43]]++) {
      CC[qC[45]] = CC[qC[1]].indexOf(CC[qC[14]][CC[-qC[43]]]);
      if (CC[qC[45]] !== -qC[1]) {
        if (CC[-qC[46]] < qC[3]) {
          CC[-qC[46]] = CC[qC[45]];
        } else {
          cC(CC[-qC[46]] += CC[qC[45]] * qC[32], CC[-qC[47]] |= CC[-qC[46]] << CC[qC[19]], CC[qC[19]] += (CC[-qC[46]] & qC[35]) > qC[36] ? qC[37] : qC[38]);
          do {
            cC(CC[qC[42]].push(CC[-qC[47]] & qC[12]), CC[-qC[47]] >>= qC[11], CC[qC[19]] -= qC[11]);
          } while (CC[qC[19]] > qC[21]);
          CC[-qC[46]] = -qC[1];
        }
      }
    }
    CC[-qC[46]] > -qC[1] && CC[qC[42]].push((CC[-qC[47]] | CC[-qC[46]] << CC[qC[19]]) & qC[12]);
    return HC(CC[qC[42]]);
  }
  function yC(...yC) {
    yC[qC[0]] = qC[1];
    return typeof rC[yC[qC[3]]] === qC[16] ? rC[yC[qC[3]]] = CC(GC[yC[qC[3]]]) : rC[yC[qC[3]]];
  }
  cC(KC(yC), KC(CC));
  yC(98) + "W" in aC && function (...CC) {
    cC(CC[qC[0]] = qC[3], CC[qC[24]] = KC(function (...CC) {
      cC(CC[qC[0]] = qC[1], CC[qC[24]] = CC[qC[3]].length);
      if (CC[qC[24]] < qC[14]) {
        return qC[3];
      }
      cC(CC[qC[26]] = Math.max(...CC[qC[3]]), CC[qC[44]] = Math.min(...CC[qC[3]]));
      if (CC[qC[26]] === CC[qC[44]]) {
        return qC[3];
      }
      cC(CC[qC[39]] = Array(CC[qC[24]] - qC[1]).fill(Number.MAX_SAFE_INTEGER), CC[qC[49]] = Array(CC[qC[24]] - qC[1]).fill(Number.MIN_SAFE_INTEGER), CC[qC[9]] = Math.ceil((CC[qC[26]] - CC[qC[44]]) / (CC[qC[24]] - qC[1])), CC[qC[48]] = qC[3]);
      CC[qC[29]] = qC[3];
      for (; CC[qC[29]] < CC[qC[24]]; CC[qC[29]]++) {
        CC[qC[3]][CC[qC[29]]] !== CC[qC[44]] && CC[qC[3]][CC[qC[29]]] !== CC[qC[26]] && cC(CC[qC[48]] = Math.floor((CC[qC[3]][CC[qC[29]]] - CC[qC[44]]) / CC[qC[9]]), CC[qC[39]][CC[qC[48]]] = Math.min(CC[qC[39]][CC[qC[48]]], CC[qC[3]][CC[qC[29]]]), CC[qC[49]][CC[qC[48]]] = Math.max(CC[qC[49]][CC[qC[48]]], CC[qC[3]][CC[qC[29]]]));
      }
      cC(CC[qC[51]] = Number.MIN_SAFE_INTEGER, CC[qC[52]] = CC[qC[44]]);
      CC[qC[50]] = qC[3];
      for (; CC[qC[50]] < CC[qC[24]] - qC[1]; CC[qC[50]]++) {
        CC[qC[39]][CC[qC[50]]] === Number.MAX_SAFE_INTEGER && CC[qC[49]][CC[qC[50]]] === Number.MIN_SAFE_INTEGER || cC(CC[qC[51]] = Math.max(CC[qC[51]], CC[qC[39]][CC[qC[50]]] - CC[qC[52]]), CC[qC[52]] = CC[qC[49]][CC[qC[50]]]);
      }
      CC[qC[51]] = Math.max(CC[qC[51]], CC[qC[26]] - CC[qC[52]]);
      return CC[qC[51]];
    }), console.log(CC[qC[24]]));
  }();
  if (qC[91]) {
    let CC = qC[41];
    cC(setInterval(() => {
      if (!CC && (0, my.sI)()) {
        function IC(...CC) {
          cC(CC[qC[0]] = qC[1], CC[-qC[55]] = ']UEWdAbTLoI@7n<jcu*8t`y^NFgvrih=3ZzJSB16>?[(:"#X4O%Y5KDM{kq2R$+;PewQV/0C|.lpxHs}_~m)!a&9G,f', CC[qC[54]] = "" + (CC[qC[3]] || ""), CC[qC[53]] = CC[qC[54]].length, CC[qC[10]] = [], CC[qC[58]] = qC[3], CC[qC[59]] = qC[3], CC[-qC[57]] = -qC[1]);
          CC[qC[29]] = qC[3];
          for (; CC[qC[29]] < CC[qC[53]]; CC[qC[29]]++) {
            CC[qC[56]] = CC[-qC[55]].indexOf(CC[qC[54]][CC[qC[29]]]);
            if (CC[qC[56]] !== -qC[1]) {
              if (CC[-qC[57]] < qC[3]) {
                CC[-qC[57]] = CC[qC[56]];
              } else {
                cC(CC[-qC[57]] += CC[qC[56]] * qC[32], CC[qC[58]] |= CC[-qC[57]] << CC[qC[59]], CC[qC[59]] += (CC[-qC[57]] & qC[35]) > qC[36] ? qC[37] : qC[38]);
                do {
                  cC(CC[qC[10]].push(CC[qC[58]] & qC[12]), CC[qC[58]] >>= qC[11], CC[qC[59]] -= qC[11]);
                } while (CC[qC[59]] > qC[21]);
                CC[-qC[57]] = -qC[1];
              }
            }
          }
          CC[-qC[57]] > -qC[1] && CC[qC[10]].push((CC[qC[58]] | CC[-qC[57]] << CC[qC[59]]) & qC[12]);
          return HC(CC[qC[10]]);
        }
        function fC(...CC) {
          CC[qC[0]] = qC[1];
          return typeof rC[CC[qC[3]]] === qC[16] ? rC[CC[qC[3]]] = IC(GC[CC[qC[3]]]) : rC[CC[qC[3]]];
        }
        function ky(...CC) {
          function IC(...CC) {
            cC(CC[qC[0]] = qC[1], CC[qC[24]] = 'f=35#6}"v29>+Qm_4lb/B)ye!iC&gqFd:,I^Ej7Nc{;s[Zu*xnokTzWUJY]t(|A%GwL?hpR8$DHS1K~.0OXV`Mar@P<', CC[qC[26]] = "" + (CC[qC[3]] || ""), CC[-qC[61]] = CC[qC[26]].length, CC[qC[39]] = [], CC[qC[49]] = qC[3], CC[qC[64]] = qC[3], CC[-qC[63]] = -qC[1]);
            CC[qC[60]] = qC[3];
            for (; CC[qC[60]] < CC[-qC[61]]; CC[qC[60]]++) {
              CC[qC[62]] = CC[qC[24]].indexOf(CC[qC[26]][CC[qC[60]]]);
              if (CC[qC[62]] !== -qC[1]) {
                if (CC[-qC[63]] < qC[3]) {
                  CC[-qC[63]] = CC[qC[62]];
                } else {
                  cC(CC[-qC[63]] += CC[qC[62]] * qC[32], CC[qC[49]] |= CC[-qC[63]] << CC[qC[64]], CC[qC[64]] += (CC[-qC[63]] & qC[35]) > qC[36] ? qC[37] : qC[38]);
                  do {
                    cC(CC[qC[39]].push(CC[qC[49]] & qC[12]), CC[qC[49]] >>= qC[11], CC[qC[64]] -= qC[11]);
                  } while (CC[qC[64]] > qC[21]);
                  CC[-qC[63]] = -qC[1];
                }
              }
            }
            CC[-qC[63]] > -qC[1] && CC[qC[39]].push((CC[qC[49]] | CC[-qC[63]] << CC[qC[64]]) & qC[12]);
            return HC(CC[qC[39]]);
          }
          function fC(...CC) {
            CC[qC[0]] = qC[1];
            return typeof rC[CC[qC[3]]] === qC[16] ? rC[CC[qC[3]]] = IC(GC[CC[qC[3]]]) : rC[CC[qC[3]]];
          }
          cC(CC[qC[0]] = qC[3], KC(fC), KC(IC));
          KC(function (...CC) {
            function IC(...CC) {
              for (cC(CC[qC[0]] = qC[1], CC[qC[24]] = [], CC[qC[26]] = qC[3], CC[qC[53]] = CC[qC[3]].length, CC[qC[10]] = qC[65], CC[qC[49]] = qC[65]); CC[qC[26]] < CC[qC[53]];) {
                cC(CC[qC[10]] = CC[qC[3]].charCodeAt(CC[qC[26]]++), CC[qC[10]] >= qC[69] && CC[qC[10]] <= 56319 && CC[qC[26]] < CC[qC[53]] ? (CC[qC[49]] = CC[qC[3]].charCodeAt(CC[qC[26]]++), (64512 & CC[qC[49]]) == qC[70] ? CC[qC[24]].push(((CC[qC[10]] & qC[66]) << qC[52]) + (CC[qC[49]] & qC[66]) + qC[68]) : (CC[qC[24]].push(CC[qC[10]]), CC[qC[26]]--)) : CC[qC[24]].push(CC[qC[10]]));
              }
              return CC[qC[24]];
            }
            function fC(...yC) {
              for (cC(yC[qC[0]] = qC[1], yC[qC[24]] = yC[qC[3]].length, yC[qC[26]] = -qC[1], yC[qC[53]] = qC[65], yC[qC[67]] = ""); ++yC[qC[26]] < yC[qC[24]];) {
                yC[qC[53]] = yC[qC[3]][yC[qC[26]]];
                yC[qC[53]] > 65535 && cC(yC[qC[53]] -= qC[68], yC[qC[67]] += CC[qC[24]](yC[qC[53]] >>> qC[52] & qC[66] | qC[69]), yC[qC[53]] = qC[70] | yC[qC[53]] & qC[66]);
                yC[qC[67]] += CC[qC[24]](yC[qC[53]]);
              }
              return yC[qC[67]];
            }
            function ky(...CC) {
              CC[qC[0]] = qC[1];
              if (CC[qC[3]] >= qC[69] && CC[qC[3]] <= 57343) {
                function yC(...CC) {
                  cC(CC[qC[0]] = qC[1], CC[qC[24]] = '=nFedQXoZWYpRIUDJkigBrKhlVsCTqSGLMfcjbt:a"E>mNOHAu^.P6#!]%38/x+`4y5@7<{_0?v)|&~1*wz($[2;9},', CC[qC[14]] = "" + (CC[qC[3]] || ""), CC[qC[53]] = CC[qC[14]].length, CC[qC[74]] = [], CC[-qC[73]] = qC[3], CC[qC[9]] = qC[3], CC[qC[72]] = -qC[1]);
                  CC[qC[71]] = qC[3];
                  for (; CC[qC[71]] < CC[qC[53]]; CC[qC[71]]++) {
                    CC[qC[62]] = CC[qC[24]].indexOf(CC[qC[14]][CC[qC[71]]]);
                    if (CC[qC[62]] !== -qC[1]) {
                      if (CC[qC[72]] < qC[3]) {
                        CC[qC[72]] = CC[qC[62]];
                      } else {
                        cC(CC[qC[72]] += CC[qC[62]] * qC[32], CC[-qC[73]] |= CC[qC[72]] << CC[qC[9]], CC[qC[9]] += (CC[qC[72]] & qC[35]) > qC[36] ? qC[37] : qC[38]);
                        do {
                          cC(CC[qC[74]].push(CC[-qC[73]] & qC[12]), CC[-qC[73]] >>= qC[11], CC[qC[9]] -= qC[11]);
                        } while (CC[qC[9]] > qC[21]);
                        CC[qC[72]] = -qC[1];
                      }
                    }
                  }
                  CC[qC[72]] > -qC[1] && CC[qC[74]].push((CC[-qC[73]] | CC[qC[72]] << CC[qC[9]]) & qC[12]);
                  return HC(CC[qC[74]]);
                }
                function IC(...CC) {
                  CC[qC[0]] = qC[1];
                  return typeof rC[CC[qC[3]]] === qC[16] ? rC[CC[qC[3]]] = yC(GC[CC[qC[3]]]) : rC[CC[qC[3]]];
                }
                cC(KC(IC), KC(yC));
                throw Error(IC(100) + CC[qC[3]].toString(qC[27]).toUpperCase() + (IC(101) + IC(102) + IC(103) + qC[8]));
              }
            }
            function gC(...yC) {
              yC[qC[0]] = qC[14];
              return CC[qC[24]](yC[qC[3]] >> yC[qC[1]] & qC[18] | qC[75]);
            }
            function AC(...yC) {
              yC[qC[0]] = qC[1];
              return (4294967168 & yC[qC[3]]) == qC[3] ? CC[qC[24]](yC[qC[3]]) : (yC[qC[1]] = "", (4294965248 & yC[qC[3]]) == qC[3] ? yC[qC[1]] = CC[qC[24]](yC[qC[3]] >> qC[19] & qC[67] | qC[77]) : (4294901760 & yC[qC[3]]) == qC[3] ? cC(ky(yC[qC[3]]), yC[qC[1]] = CC[qC[24]](yC[qC[3]] >> qC[22] & qC[76] | qC[84]), yC[qC[1]] += gC(yC[qC[3]], qC[19])) : (4292870144 & yC[qC[3]]) == qC[3] && cC(yC[qC[1]] = CC[qC[24]](yC[qC[3]] >> qC[42] & qC[21] | qC[87]), yC[qC[1]] += gC(yC[qC[3]], qC[22]), yC[qC[1]] += gC(yC[qC[3]], qC[19])), yC[qC[1]] += CC[qC[24]](yC[qC[3]] & qC[18] | qC[75]), yC[qC[1]]);
            }
            function my(...CC) {
              for (cC(CC[qC[0]] = qC[1], CC[qC[24]] = IC(CC[qC[3]]), CC[qC[26]] = CC[qC[24]].length, CC[qC[53]] = -qC[1], CC[qC[10]] = qC[65], CC[qC[49]] = ""); ++CC[qC[53]] < CC[qC[26]];) {
                cC(CC[qC[10]] = CC[qC[24]][CC[qC[53]]], CC[qC[49]] += AC(CC[qC[10]]));
              }
              return CC[qC[49]];
            }
            function XC(...IC) {
              IC[qC[0]] = qC[3];
              if (CC[qC[26]] >= CC[qC[53]]) {
                throw Error(yC(qC[74]));
              }
              cC(IC[qC[24]] = CC[qC[10]][CC[qC[26]]] & qC[12], CC[qC[26]]++);
              if ((IC[qC[24]] & qC[77]) == qC[75]) {
                return IC[qC[24]] & qC[18];
              }
              throw Error(yC(105));
            }
            function iy(...yC) {
              function IC(...CC) {
                cC(CC[qC[0]] = qC[1], CC[qC[79]] = 'A5?+_wv#u@%8W*9{Ek(!~y/z1ZiSQ4r]<oF0jl>paI63$=DLT,&.M|m}Jx"cB2KsXP):fCnUYHRqb[7hGt^;gNOeVd`', CC[qC[14]] = "" + (CC[qC[3]] || ""), CC[qC[78]] = CC[qC[14]].length, CC[qC[39]] = [], CC[qC[64]] = qC[3], CC[qC[19]] = qC[3], CC[qC[80]] = -qC[1]);
                CC[qC[29]] = qC[3];
                for (; CC[qC[29]] < CC[qC[78]]; CC[qC[29]]++) {
                  CC[qC[62]] = CC[qC[79]].indexOf(CC[qC[14]][CC[qC[29]]]);
                  if (CC[qC[62]] !== -qC[1]) {
                    if (CC[qC[80]] < qC[3]) {
                      CC[qC[80]] = CC[qC[62]];
                    } else {
                      cC(CC[qC[80]] += CC[qC[62]] * qC[32], CC[qC[64]] |= CC[qC[80]] << CC[qC[19]], CC[qC[19]] += (CC[qC[80]] & qC[35]) > qC[36] ? qC[37] : qC[38]);
                      do {
                        cC(CC[qC[39]].push(CC[qC[64]] & qC[12]), CC[qC[64]] >>= qC[11], CC[qC[19]] -= qC[11]);
                      } while (CC[qC[19]] > qC[21]);
                      CC[qC[80]] = -qC[1];
                    }
                  }
                }
                CC[qC[80]] > -qC[1] && CC[qC[39]].push((CC[qC[64]] | CC[qC[80]] << CC[qC[19]]) & qC[12]);
                return HC(CC[qC[39]]);
              }
              function fC(...CC) {
                CC[qC[0]] = qC[1];
                return typeof rC[CC[qC[3]]] === qC[16] ? rC[CC[qC[3]]] = IC(GC[CC[qC[3]]]) : rC[CC[qC[3]]];
              }
              cC(yC[qC[0]] = qC[3], KC(fC), KC(IC));
              cC(yC[qC[83]] = qC[65], yC[qC[1]] = qC[65], yC[-qC[88]] = qC[65], yC[qC[39]] = qC[65], yC[qC[10]] = qC[65]);
              if (CC[qC[26]] > CC[qC[53]]) {
                function gC(...CC) {
                  cC(CC[qC[0]] = qC[1], CC[qC[24]] = 'h_PIrquv^mYF|1%Xj>;?zbB)Mt`yC[W{aJZ8@w&=2O7VH~0S!$d/*e+pA65c<DgQlLKx.:]9(}kRG4,3"#oENTnUisf', CC[qC[81]] = "" + (CC[qC[3]] || ""), CC[qC[44]] = CC[qC[81]].length, CC[qC[10]] = [], CC[qC[49]] = qC[3], CC[-qC[82]] = qC[3], CC[qC[21]] = -qC[1]);
                  CC[qC[29]] = qC[3];
                  for (; CC[qC[29]] < CC[qC[44]]; CC[qC[29]]++) {
                    CC[qC[45]] = CC[qC[24]].indexOf(CC[qC[81]][CC[qC[29]]]);
                    if (CC[qC[45]] !== -qC[1]) {
                      if (CC[qC[21]] < qC[3]) {
                        CC[qC[21]] = CC[qC[45]];
                      } else {
                        cC(CC[qC[21]] += CC[qC[45]] * qC[32], CC[qC[49]] |= CC[qC[21]] << CC[-qC[82]], CC[-qC[82]] += (CC[qC[21]] & qC[35]) > qC[36] ? qC[37] : qC[38]);
                        do {
                          cC(CC[qC[10]].push(CC[qC[49]] & qC[12]), CC[qC[49]] >>= qC[11], CC[-qC[82]] -= qC[11]);
                        } while (CC[-qC[82]] > qC[21]);
                        CC[qC[21]] = -qC[1];
                      }
                    }
                  }
                  CC[qC[21]] > -qC[1] && CC[qC[10]].push((CC[qC[49]] | CC[qC[21]] << CC[-qC[82]]) & qC[12]);
                  return HC(CC[qC[10]]);
                }
                function AC(...CC) {
                  CC[qC[0]] = qC[1];
                  return typeof rC[CC[qC[3]]] === qC[16] ? rC[CC[qC[3]]] = gC(GC[CC[qC[3]]]) : rC[CC[qC[3]]];
                }
                cC(KC(AC), KC(gC));
                throw Error(AC(106));
              }
              if (CC[qC[26]] == CC[qC[53]]) {
                return qC[41];
              }
              cC(yC[qC[83]] = CC[qC[10]][CC[qC[26]]] & qC[12], CC[qC[26]]++);
              if ((yC[qC[83]] & qC[75]) == qC[3]) {
                return yC[qC[83]];
              }
              if ((yC[qC[83]] & qC[84]) == qC[77]) {
                cC(yC[qC[1]] = XC(), yC[qC[10]] = (yC[qC[83]] & qC[67]) << qC[19] | yC[qC[1]]);
                if (yC[qC[10]] >= qC[75]) {
                  return yC[qC[10]];
                }
                {
                  function my(...CC) {
                    cC(CC[qC[0]] = qC[1], CC[qC[86]] = '?SH45PiWGJot^+)}~waImY,E>$jnkV"v@hy{Xu1Lq[b%Mp0gsAD/8B*l7<]CU2=&Zc!dT3KxzNR#f6_9QO(F.:re|`;', CC[qC[26]] = "" + (CC[qC[3]] || ""), CC[qC[53]] = CC[qC[26]].length, CC[qC[52]] = [], CC[qC[8]] = qC[3], CC[qC[9]] = qC[3], CC[qC[21]] = -qC[1]);
                    CC[-qC[85]] = qC[3];
                    for (; CC[-qC[85]] < CC[qC[53]]; CC[-qC[85]]++) {
                      CC[qC[62]] = CC[qC[86]].indexOf(CC[qC[26]][CC[-qC[85]]]);
                      if (CC[qC[62]] !== -qC[1]) {
                        if (CC[qC[21]] < qC[3]) {
                          CC[qC[21]] = CC[qC[62]];
                        } else {
                          cC(CC[qC[21]] += CC[qC[62]] * qC[32], CC[qC[8]] |= CC[qC[21]] << CC[qC[9]], CC[qC[9]] += (CC[qC[21]] & qC[35]) > qC[36] ? qC[37] : qC[38]);
                          do {
                            cC(CC[qC[52]].push(CC[qC[8]] & qC[12]), CC[qC[8]] >>= qC[11], CC[qC[9]] -= qC[11]);
                          } while (CC[qC[9]] > qC[21]);
                          CC[qC[21]] = -qC[1];
                        }
                      }
                    }
                    CC[qC[21]] > -qC[1] && CC[qC[52]].push((CC[qC[8]] | CC[qC[21]] << CC[qC[9]]) & qC[12]);
                    return HC(CC[qC[52]]);
                  }
                  function iy(...CC) {
                    CC[qC[0]] = qC[1];
                    return typeof rC[CC[qC[3]]] === qC[16] ? rC[CC[qC[3]]] = my(GC[CC[qC[3]]]) : rC[CC[qC[3]]];
                  }
                  cC(KC(iy), KC(my));
                  throw Error(iy(107));
                }
              }
              if ((yC[qC[83]] & qC[87]) == qC[84]) {
                cC(yC[qC[1]] = XC(), yC[-qC[88]] = XC(), yC[qC[10]] = (yC[qC[83]] & qC[76]) << qC[22] | yC[qC[1]] << qC[19] | yC[-qC[88]]);
                if (yC[qC[10]] >= 2048) {
                  ky(yC[qC[10]]);
                  return yC[qC[10]];
                }
                {
                  function LC(...CC) {
                    cC(CC[qC[0]] = qC[1], CC[qC[24]] = 'gy4ra6THF(^X%9hn;3/}0sx7LICUq.jBw~>]*t8?1ZpKMQ"d,2vmu$!oJ_D#N&PO=@GE5`feclR<V|:S)AziY+Wk{[b', CC[qC[14]] = "" + (CC[qC[3]] || ""), CC[qC[53]] = CC[qC[14]].length, CC[qC[39]] = [], CC[qC[8]] = qC[3], CC[-qC[89]] = qC[3], CC[qC[72]] = -qC[1]);
                    CC[qC[13]] = qC[3];
                    for (; CC[qC[13]] < CC[qC[53]]; CC[qC[13]]++) {
                      CC[qC[62]] = CC[qC[24]].indexOf(CC[qC[14]][CC[qC[13]]]);
                      if (CC[qC[62]] !== -qC[1]) {
                        if (CC[qC[72]] < qC[3]) {
                          CC[qC[72]] = CC[qC[62]];
                        } else {
                          cC(CC[qC[72]] += CC[qC[62]] * qC[32], CC[qC[8]] |= CC[qC[72]] << CC[-qC[89]], CC[-qC[89]] += (CC[qC[72]] & qC[35]) > qC[36] ? qC[37] : qC[38]);
                          do {
                            cC(CC[qC[39]].push(CC[qC[8]] & qC[12]), CC[qC[8]] >>= qC[11], CC[-qC[89]] -= qC[11]);
                          } while (CC[-qC[89]] > qC[21]);
                          CC[qC[72]] = -qC[1];
                        }
                      }
                    }
                    CC[qC[72]] > -qC[1] && CC[qC[39]].push((CC[qC[8]] | CC[qC[72]] << CC[-qC[89]]) & qC[12]);
                    return HC(CC[qC[39]]);
                  }
                  function YC(...CC) {
                    CC[qC[0]] = qC[1];
                    return typeof rC[CC[qC[3]]] === qC[16] ? rC[CC[qC[3]]] = LC(GC[CC[qC[3]]]) : rC[CC[qC[3]]];
                  }
                  cC(KC(LC), KC(YC));
                  throw Error(YC(108));
                }
              }
              if ((248 & yC[qC[83]]) == qC[87] && (cC(yC[qC[1]] = XC(), yC[-qC[88]] = XC(), yC[qC[39]] = XC(), yC[qC[10]] = (yC[qC[83]] & qC[21]) << qC[42] | yC[qC[1]] << qC[22] | yC[-qC[88]] << qC[19] | yC[qC[39]]), yC[qC[10]] >= qC[68] && yC[qC[10]] <= 1114111)) {
                return yC[qC[10]];
              }
              throw Error(fC(qC[31]));
            }
            function LC(...yC) {
              for (cC(yC[qC[0]] = qC[1], CC[qC[10]] = IC(yC[qC[3]]), CC[qC[53]] = CC[qC[10]].length, CC[qC[26]] = qC[3], yC[qC[1]] = [], yC[qC[90]] = qC[65]); (yC[qC[90]] = iy()) !== qC[41];) {
                yC[qC[1]].push(yC[qC[90]]);
              }
              return fC(yC[qC[1]]);
            }
            cC(KC(ky), KC(IC), CC[qC[0]] = qC[1], KC(LC), KC(my), KC(AC), KC(gC, qC[14]), KC(fC), CC[qC[24]] = String.fromCharCode);
            cC(CC[qC[10]] = qC[65], CC[qC[53]] = qC[65], CC[qC[26]] = qC[65]);
            cC(CC[qC[3]].version = yC(110), CC[qC[3]].encode = my, CC[qC[3]].decode = LC);
          })(typeof exports === fC(111) + fC(qC[54]) ? this.utf8 = {} : exports);
        }
        cC(KC(fC), KC(IC));
        yC(99) in aC && ky();
        let gC = {
          [yC(113) + fC(114)]: fC(115) + "r",
          [fC(116) + fC(qC[55])]: fC(118) + fC(119),
          [fC(120) + fC(qC[94])]: "m1",
          [fC(122)]: fC(123) + fC(124),
          [fC(qC[88]) + "l2"]: fC(126)
        };
        cC(CC = qC[91], (0, XC.Rb)(iy.vh, gC));
      }
    }, 11049), (0, XC.yb)((...yC) => {
      function IC(...CC) {
        cC(CC[qC[0]] = qC[1], CC[-qC[95]] = 'NbtL$:3?U0!/D[9rxeF6K(p,7oc%a_CH~kZm+*d`;MOB8w"Y{gv1Gq]>If&jyn@#u}4EP.=A2TJ5<WSi)RsQVXlh|z^', CC[-qC[92]] = "" + (CC[qC[3]] || ""), CC[qC[44]] = CC[-qC[92]].length, CC[qC[93]] = [], CC[-qC[94]] = qC[3], CC[qC[96]] = qC[3], CC[qC[21]] = -qC[1]);
        CC[qC[87]] = qC[3];
        for (; CC[qC[87]] < CC[qC[44]]; CC[qC[87]]++) {
          CC[qC[45]] = CC[-qC[95]].indexOf(CC[-qC[92]][CC[qC[87]]]);
          if (CC[qC[45]] !== -qC[1]) {
            if (CC[qC[21]] < qC[3]) {
              CC[qC[21]] = CC[qC[45]];
            } else {
              cC(CC[qC[21]] += CC[qC[45]] * qC[32], CC[-qC[94]] |= CC[qC[21]] << CC[qC[96]], CC[qC[96]] += (CC[qC[21]] & qC[35]) > qC[36] ? qC[37] : qC[38]);
              do {
                cC(CC[qC[93]].push(CC[-qC[94]] & qC[12]), CC[-qC[94]] >>= qC[11], CC[qC[96]] -= qC[11]);
              } while (CC[qC[96]] > qC[21]);
              CC[qC[21]] = -qC[1];
            }
          }
        }
        CC[qC[21]] > -qC[1] && CC[qC[93]].push((CC[-qC[94]] | CC[qC[21]] << CC[qC[96]]) & qC[12]);
        return HC(CC[qC[93]]);
      }
      function fC(...CC) {
        CC[qC[0]] = qC[1];
        return typeof rC[CC[qC[3]]] === qC[16] ? rC[CC[qC[3]]] = IC(GC[CC[qC[3]]]) : rC[CC[qC[3]]];
      }
      cC(yC[qC[0]] = qC[3], KC(fC), KC(IC));
      fC(qC[97]) + "C" in aC && function () {
        var CC;
        var yC = KC(function (...yC) {
          cC(yC[qC[0]] = qC[14], yC[-qC[98]] = [], yC[-qC[99]] = yC[qC[3]].length, yC[qC[3]].sort((CC, yC) => CC - yC), CC(yC[-qC[98]], [], qC[3], yC[-qC[99]], yC[qC[3]], yC[qC[1]]));
          return yC[-qC[98]];
        }, qC[14]);
        cC(CC = function (yC, IC, fC, ky, gC, AC) {
          var my;
          var XC = qC[40];
          if (!(AC < qC[3])) {
            if (AC === qC[3]) {
              return yC.push(IC);
            }
            for (my = fC; my < ky && !(gC[my] > AC); my++) {
              my > fC && gC[my] === gC[my - qC[1]] || cC(XC = Array.from(IC), XC.push(gC[my]), CC(yC, XC, my + qC[1], ky, gC, AC - gC[my]));
            }
          }
        }, console.log(yC));
      }();
      CC = qC[41];
    }));
  }
})();