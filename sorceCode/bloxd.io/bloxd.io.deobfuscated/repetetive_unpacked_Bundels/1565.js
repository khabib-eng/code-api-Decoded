var fC = require("./49.js");
var ky = require("./544.js");
var gC = require("./1570.js");
var AC = require("./550.js");
var my = require("./1608.js");
var XC = require("./1408.js");
var iy = require("./1511.js");
var LC = require("./1388.js");
var YC = require("./554.js");
var bC = YC;
var rC = require("./408.js");
var GC = require("./1385.js");
var eC = require("./1336.js");
var OC = require("./1383.js");
var SC = require("./1143.js");
var TC = require("./1541.js");
var NC = require("./1544.js");
var sC = require("./1614.js");
var jy = require("./1425.js");
var qC = require("./14.js");
var KC = require("./534.js");
function pC(CC) {
  let {
    setApplySettingsCallback: yC
  } = CC;
  const {
    clientEscMenuOptions: ky
  } = (0, qC.f)(["clientEscMenuOptions"]);
  const [gC, AC] = (0, fC.ey)(!1);
  const [my, LC] = (0, fC.ey)(!1);
  const [YC, bC] = (0, fC.ey)(6400);
  const [rC, GC] = (0, fC.ey)(3600);
  const [eC, OC] = (0, fC.ey)(!1);
  const [TC, NC] = (0, fC.ey)(!1);
  function sC(CC) {
    try {
      const yC = (0, SC.sI)();
      const fC = yC.lC.Jy;
      const ky = yC.lC.YL();
      const gC = YC;
      const my = rC;
      Promise.all([Promise.all([require.e(9), require.e(8)]).then(require.bind(require, 16787)), Promise.all([require.e(14), require.e(17), require.e(13), require.e(9), require.e(19), require.e(8), require.e(18), require.e(12)]).then(require.bind(require, 16948)), Promise.all([require.e(14), require.e(17), require.e(13), require.e(9), require.e(19), require.e(8), require.e(23), require.e(24), require.e(22)]).then(require.bind(require, 17204)), require.e(9).then(require.bind(require, 16878)), Promise.all([require.e(14), require.e(10)]).then(require.bind(require, 16973))]).then(yC => {
        const {
          Tools: XC
        } = yC[0];
        const {
          ShaderMaterial: iy
        } = yC[2];
        const {
          Effect: YC
        } = yC[3];
        const {
          bL: bC
        } = yC[4];
        const rC = new Map();
        const GC = ky.meshes.filter(CC => CC.material);
        function OC() {
          GC.forEach(CC => {
            const yC = rC.get(CC);
            yC && (CC.material = yC);
          });
        }
        if (eC) {
          const CC = [];
          const yC = [];
          GC.forEach(IC => {
            const fC = IC.name.toLowerCase();
            const gC = IC.getBoundingInfo().boundingBox.center;
            const AC = ky.activeCamera.position.Wy(gC).length();
            fC.includes("sky") || fC.includes("background") || fC.includes("environment") || AC > 1e3 ? yC.push(IC) : CC.push(IC);
          });
          const IC = "\n\t\t\t\t\t\t\tattribute vec3 position;\n\t\t\t\t\t\t\tattribute vec3 normal;\n\t\t\t\t\t\t\tuniform mat4 worldViewProjection;\n\t\t\t\t\t\t\tuniform mat4 world;\n\t\t\t\t\t\t\tvarying mediump vec3 vNormal;\n\n\t\t\t\t\t\t\tvoid main() {\n\t\t\t\t\t\t\t\tgl_Position = worldViewProjection * vec4(position, 1.0);\n\t\t\t\t\t\t\t\tvNormal = normalize((world * vec4(normal, 0.0)).xyz);\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t";
          const fC = "\n\t\t\t\t\t\t\tvarying mediump vec3 vNormal;\n\n\t\t\t\t\t\t\tvoid main() {\n\t\t\t\t\t\t\t\t// Convert normal to color (absolute values mapped to 0-1 range)\n\t\t\t\t\t\t\t\tvec3 normalColor = abs(vNormal);\n\t\t\t\t\t\t\t\tgl_FragColor = vec4(normalColor, 1.0);\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t";
          YC.ShadersStore.devtoolsNormalVertexShader = IC;
          YC.ShadersStore.devtoolsNormalFragmentShader = fC;
          const gC = new iy("normalMaterial", ky, "devtoolsNormal", {
            attributes: ["position", "normal"],
            uniforms: ["worldViewProjection", "world"]
          });
          const AC = "\n\t\t\t\t\t\t\tattribute vec3 position;\n\t\t\t\t\t\t\tuniform mat4 worldViewProjection;\n\n\t\t\t\t\t\t\tvoid main() {\n\t\t\t\t\t\t\t\tgl_Position = worldViewProjection * vec4(position, 1.0);\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t";
          const my = "\n\t\t\t\t\t\t\tvoid main() {\n\t\t\t\t\t\t\t\tgl_FragColor = vec4(1.0, 1.0, 1.0, 1.0); // Pure white\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t";
          YC.ShadersStore.devtoolsWhiteVertexShader = AC;
          YC.ShadersStore.devtoolsWhiteFragmentShader = my;
          const XC = new iy("whiteMaterial", ky, "devtoolsWhite", {
            attributes: ["position"],
            uniforms: ["worldViewProjection"]
          });
          CC.forEach(CC => {
            rC.set(CC, CC.material);
            CC.material = gC;
          });
          yC.forEach(CC => {
            rC.set(CC, CC.material);
            CC.material = XC;
          });
        } else {
          if (TC) {
            const CC = "\n\t\t\t\t\t\t\tattribute vec3 position;\n\t\t\t\t\t\t\tuniform mat4 worldViewProjection;\n\t\t\t\t\t\t\tuniform mat4 world;\n\t\t\t\t\t\t\tuniform vec3 cameraPosition;\n\t\t\t\t\t\t\tvarying mediump float vDepth;\n\n\t\t\t\t\t\t\tvoid main() {\n\t\t\t\t\t\t\t\tgl_Position = worldViewProjection * vec4(position, 1.0);\n\t\t\t\t\t\t\t\tvec3 worldPosition = (world * vec4(position, 1.0)).xyz;\n\t\t\t\t\t\t\t\tvDepth = distance(worldPosition, cameraPosition);\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t";
            const yC = "\n\t\t\t\t\t\t\tvarying mediump float vDepth;\n\t\t\t\t\t\t\tuniform float maxDepth;\n\t\t\t\t\t\t\tuniform float minDepth;\n\n\t\t\t\t\t\t\tvoid main() {\n\t\t\t\t\t\t\t\t// Normalize depth to 0-1 range using min-max normalization\n\t\t\t\t\t\t\t\tfloat normalizedDepth = clamp((vDepth - minDepth) / (maxDepth - minDepth), 0.0, 1.0);\n\t\t\t\t\t\t\t\tfloat gray = 1.0 - normalizedDepth; // white=near, black=far\n\t\t\t\t\t\t\t\tgl_FragColor = vec4(gray, gray, gray, 1.0);\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t";
            YC.ShadersStore.devtoolsDepthVertexShader = CC;
            YC.ShadersStore.devtoolsDepthFragmentShader = yC;
            const IC = ky.activeCamera.position;
            let fC = 0;
            let gC = 1 / 0;
            GC.forEach(CC => {
              const yC = CC.name.toLowerCase();
              if (yC.includes("sky") || yC.includes("background") || yC.includes("environment")) {
                return;
              }
              const ky = CC.getBoundingInfo().boundingBox.center;
              const AC = bC.TransformCoordinates(ky, CC.getWorldMatrix());
              const my = IC.Wy(AC).length();
              my > 1e3 || (fC = Math.max(fC, my), gC = Math.min(gC, my));
            });
            const AC = fC - gC;
            fC += .1 * AC;
            gC = Math.max(0, gC - .1 * AC);
            console.log("Depth range: min=".concat(gC.toFixed(2), ", max=").concat(fC.toFixed(2), ", range=").concat(AC.toFixed(2)));
            AC < 1 && (fC = gC + 10);
            const my = new iy("depthMaterial", ky, "devtoolsDepth", {
              attributes: ["position"],
              uniforms: ["worldViewProjection", "world", "cameraPosition", "maxDepth", "minDepth"]
            });
            my.setVector3("cameraPosition", IC);
            my.setFloat("maxDepth", fC);
            my.setFloat("minDepth", gC);
            GC.forEach(CC => {
              rC.set(CC, CC.material);
              CC.material = my;
            });
          }
        }
        if ("screenshot" === CC) {
          LC(!0);
          let CC = "bloxd-screenshot-".concat(gC, "x").concat(my, "-").concat(Date.now(), ".png");
          eC ? CC = "bloxd-screenshot-normals-".concat(gC, "x").concat(my, "-").concat(Date.now(), ".png") : TC && (CC = "bloxd-screenshot-depth-".concat(gC, "x").concat(my, "-").concat(Date.now(), ".png"));
          XC.CreateScreenshotUsingRenderTarget(fC, ky.activeCamera, {
            width: gC,
            height: my
          }, function (yC) {
            OC();
            fetch(yC).then(function (CC) {
              return CC.blob();
            }).then(function (yC) {
              const IC = URL.createObjectURL(yC);
              const fC = document.createElement("a");
              fC.href = IC;
              fC.download = CC;
              document.body.appendChild(fC);
              fC.click();
              document.body.removeChild(fC);
              URL.revokeObjectURL(IC);
              LC(!1);
            }).catch(function (CC) {
              console.error("Error processing screenshot:", CC);
              LC(!1);
            });
          }, "image/png");
        } else {
          AC(!0);
          let CC = "rL";
          eC ? CC = "scene-normals" : TC && (CC = "scene-depth");
          eC || TC ? setTimeout(() => {
            (async function () {
              const {
                GL: CC
              } = await Promise.all([require.e(14), require.e(17), require.e(13), require.e(9), require.e(19), require.e(8), require.e(23), require.e(24), require.e(25)]).then(require.bind(require, 17340));
              const {
                eL: yC
              } = await Promise.all([require.e(17), require.e(11)]).then(require.bind(require, 17009));
              const fC = [];
              const gC = [];
              GC.forEach(CC => {
                const yC = CC.name.toLowerCase();
                const IC = CC.getBoundingInfo().boundingBox.center;
                const AC = ky.activeCamera.position.Wy(IC).length();
                yC.includes("sky") || yC.includes("background") || yC.includes("environment") || AC > 1e3 ? gC.push(CC) : fC.push(CC);
              });
              if (eC) {
                fC.forEach((IC, fC) => {
                  const gC = IC.getVerticesData("normal");
                  if (gC) {
                    const AC = [];
                    for (let CC = 0; CC < gC.length; CC += 3) {
                      const yC = Math.abs(gC[CC]);
                      const IC = Math.abs(gC[CC + 1]);
                      const fC = Math.abs(gC[CC + 2]);
                      AC.push(yC, IC, fC, 1);
                    }
                    IC.setVerticesData("color", AC);
                    const my = new CC("vertexColorMat_".concat(fC), ky);
                    my.disableLighting = !0;
                    my.emissiveColor = new yC(1, 1, 1);
                    my.specularColor = new yC(0, 0, 0);
                    IC.material = my;
                  }
                });
                gC.forEach((IC, fC) => {
                  const gC = IC.getVerticesData("position");
                  if (gC) {
                    const AC = [];
                    const my = gC.length / 3;
                    for (let CC = 0; CC < my; CC++) {
                      AC.push(1, 1, 1, 1);
                    }
                    IC.setVerticesData("color", AC);
                    const XC = new CC("whiteMat_".concat(fC), ky);
                    XC.disableLighting = !0;
                    XC.emissiveColor = new yC(1, 1, 1);
                    XC.specularColor = new yC(0, 0, 0);
                    IC.material = XC;
                  }
                });
              } else {
                if (TC) {
                  const IC = ky.activeCamera.position;
                  let gC = 0;
                  let AC = 1 / 0;
                  fC.forEach(CC => {
                    const yC = CC.getBoundingInfo().boundingBox.center;
                    const fC = bC.TransformCoordinates(yC, CC.getWorldMatrix());
                    const ky = IC.Wy(fC).length();
                    gC = Math.max(gC, ky);
                    AC = Math.min(AC, ky);
                  });
                  const my = gC - AC;
                  gC += .1 * my;
                  AC = Math.max(0, AC - .1 * my);
                  my < 1 && (gC = AC + 10);
                  GC.forEach((fC, my) => {
                    const XC = fC.name.toLowerCase();
                    const iy = fC.getBoundingInfo().boundingBox.center;
                    const LC = bC.TransformCoordinates(iy, fC.getWorldMatrix());
                    const YC = IC.Wy(LC).length();
                    if (!(XC.includes("sky") || XC.includes("background") || XC.includes("environment") || YC > 1e3)) {
                      const IC = 1 - Math.min(Math.max((YC - AC) / (gC - AC), 0), 1);
                      const XC = new CC("depthMat_".concat(my), ky);
                      XC.diffuseColor = new yC(IC, IC, IC);
                      XC.specularColor = new yC(0, 0, 0);
                      fC.material = XC;
                    }
                  });
                }
              }
            })().then(() => Promise.all([require.e(14), require.e(17), require.e(13), require.e(9), require.e(19), require.e(8), require.e(18), require.e(23), require.e(24), require.e(25), require.e(22), require.e(21), require.e(27), require.e(26)]).then(require.bind(require, 17380))).then(yC => yC.GLTF2Export.GLBAsync(ky, CC)).then(CC => {
              OC();
              CC.downloadFiles();
              AC(!1);
            }).catch(CC => {
              console.error("Error exporting GLB:", CC);
              OC();
              AC(!1);
            });
          }, 100) : Promise.all([require.e(14), require.e(17), require.e(13), require.e(9), require.e(19), require.e(8), require.e(18), require.e(23), require.e(24), require.e(25), require.e(22), require.e(21), require.e(27), require.e(26)]).then(require.bind(require, 17380)).then(yC => {
            yC.GLTF2Export.GLBAsync(ky, CC).then(CC => {
              CC.downloadFiles();
              AC(!1);
            }).catch(CC => {
              console.error("Error exporting GLB:", CC);
              AC(!1);
            });
          }).catch(CC => {
            console.error("Error importing serializers:", CC);
            AC(!1);
          });
        }
      });
    } catch (yC) {
      console.error("Error taking screenshot:", yC);
      LC(!1);
    }
  }
  return (0, KC.jsxs)("div", {
    className: "DeveloperToolsCategory",
    children: [(0, KC.jsx)(b, {
      label: "Disable Ambient Occlusion",
      checked: ky.disableAmbientOcclusion,
      onClick: CC => {
        qC.b.setClientEscMenuOptions({
          disableAmbientOcclusion: CC
        });
        yC(() => p);
      },
      circleInfoText: "Disables ambient occlusion which is the shadow effect that makes corners and crevices darker."
    }), (0, KC.jsx)(h, {
      name: "Ambient Lighting Intensity",
      min: 0,
      max: 1,
      step: .01,
      initValue: ky.ambientLightIntensity,
      onChange: CC => {
        Promise.all([require.e(17), require.e(11)]).then(require.bind(require, 17009)).then(yC => {
          let {
            eL: IC
          } = yC;
          (0, SC.sI)().lC.YL().ambientColor = IC.OL([CC, CC, CC]);
          qC.b.setClientEscMenuOptions({
            ambientLightIntensity: CC
          });
        });
      },
      circleInfoText: "Sets the intensity of the white ambient light in the scene. The default is 0.5."
    }), (0, KC.jsxs)("div", {
      className: "SettingBoxGroup",
      children: [(0, KC.jsxs)("div", {
        className: "SettingBox WarningBorder",
        children: [(0, KC.jsx)(b, {
          label: "Apply normal-based coloring",
          checked: eC,
          onClick: CC => {
            OC(CC);
            CC && NC(!1);
          },
          circleInfoText: "Colors faces based on their normal direction (red=X, green=Y, blue=Z)."
        }), (0, KC.jsx)(b, {
          label: "Apply depth-based coloring",
          checked: TC,
          onClick: CC => {
            NC(CC);
            CC && OC(!1);
          },
          circleInfoText: "Colors from white (near) to black (far) based on distance from camera. Only works for screenshot export."
        }), (0, KC.jsxs)("div", {
          className: "SettingBox DeveloperToolsCategoryScreenshotSettings",
          children: [(0, KC.jsx)("div", {
            className: "SettingLabel",
            children: "Screenshot size in pixels (width x height)"
          }), (0, KC.jsx)(iy.d, {
            className: "SettingsTextInput SmallTextLight",
            onValueChange: (CC, yC) => {
              const IC = parseInt(CC) || 6400;
              bC(IC);
            },
            placeholderText: "width",
            maxLength: 10,
            defaultValue: YC.toString()
          }), (0, KC.jsx)("span", {
            children: "X"
          }), (0, KC.jsx)(iy.d, {
            className: "SettingsTextInput SmallTextLight",
            onValueChange: (CC, yC) => {
              const IC = parseInt(CC) || 3600;
              GC(IC);
            },
            placeholderText: "height",
            maxLength: 10,
            defaultValue: rC.toString()
          })]
        }), (0, KC.jsxs)("div", {
          className: "DeveloperToolsCategoryExportButtons",
          children: [(0, KC.jsxs)(XC.d, {
            onClick: () => {
              sC("screenshot");
            },
            disabled: my,
            children: [my && (0, KC.jsx)(jy.e, {}), "Download Screenshot"]
          }), (0, KC.jsxs)(XC.d, {
            onClick: () => {
              sC("glb");
            },
            disabled: gC,
            children: [gC && (0, KC.jsx)(jy.e, {}), "Download GLB"]
          })]
        })]
      }), (0, KC.jsx)("div", {
        className: "SettingBox SettingsBoxWarning",
        children: 'To download GLB of scene with textures you need to "Disable Block Texture Atlas" in graphic settings first (you will need to reload the page to apply the setting).'
      })]
    })]
  });
}
var wC = require("./585.js");
var HC = require("./442.js");
var aC = require("./1259.js");
var cC = require("./577.js");
var UC = require("./1363.js");
var EC = require("./1261.js");
var VC = require("./1535.js");
var WC = require("./1342.js");
var xC = require("./1527.js");
var PC = require("./1488.js");
var zC = require("./105.js");
var BC = require("./1521.js");
var tC = require("./595.js");
const JC = (0, fC.memo)(function (CC) {
  var yC;
  var IC;
  let {
    showing: gC
  } = CC;
  const {
    t: AC
  } = (0, eC.n)();
  const {
    reactNativeFeatureFlags: my,
    hideSocialLocationFrom: YC
  } = (0, qC.f)(["reactNativeFeatureFlags", "hideSocialLocationFrom"]);
  const bC = (0, ky.X)();
  const {
    userContext: OC
  } = (0, ky.fb)();
  const [SC, TC] = (0, fC.ey)(null !== (yC = OC.getPlayerName()) && void 0 !== yC ? yC : "");
  const [NC, sC] = (0, fC.ey)(null);
  const {
    xsollaItem: pC,
    xsollaWidgetInControl: wC,
    buySuperRank: UC
  } = (0, VC.f)();
  const [EC, JC] = (0, fC.ey)(!1);
  const [FC, uC] = (0, fC.ey)(!1);
  const DC = (0, fC.useRef)(null);
  const ZC = (0, fC.useRef)(null);
  const [lC, oC] = (0, fC.ey)([]);
  const [vC, hC] = (0, fC.ey)(!0);
  (0, fC.Oy)(() => {
    !0 === gC ? (clearInterval(ZC.current), ZC.current = setInterval(bC, 1e3)) : clearInterval(ZC.current);
    return () => {
      clearInterval(ZC.current);
    };
  }, [gC]);
  (0, fC.Oy)(() => {
    var CC;
    TC(null !== (CC = OC.getPlayerName()) && void 0 !== CC ? CC : "");
  }, [OC]);
  const RC = (0, fC.useRef)({});
  function dC(CC) {
    CC !== SC && ((0, WC.nameNeedsStandardising)(CC) ? (CC = (0, WC.standardiseName)(CC), sC("Only letters, numbers, and _")) : sC(null), DC.current && (DC.current.value = CC), TC(CC));
  }
  (0, fC.Oy)(() => {
    var CC;
    RC.current = JSON.parse((null === (CC = OC.superRankInfo) || void 0 === CC ? void 0 : CC.superRankHistory) || "{}");
  }, [null === (IC = OC.superRankInfo) || void 0 === IC ? void 0 : IC.superRankHistory]);
  (0, fC.Oy)(() => {
    let CC = !1;
    hC(!0);
    (0, xC.d)(!0, OC).then(yC => {
      CC || oC(yC);
    }).catch(yC => {
      console.error("Failed to load login buttons:", yC);
      CC || oC([]);
    }).finally(() => {
      CC || hC(!1);
    });
    return () => {
      CC = !0;
    };
  }, [OC]);
  return (0, KC.jsxs)("div", {
    className: "SettingsMenuRightInner AccountSettings",
    children: [(0, KC.jsxs)("div", {
      className: "SettingBox SetAccountNameDiv SmallTextLight",
      children: [(0, KC.jsx)("div", {
        className: "AccountSettingsLabel",
        children: AC("homePage:discordNamePopupTitle")
      }), (0, KC.jsxs)("div", {
        className: "EnterAccNameDivWrapper",
        children: [rC.g.canChangeName && (0, KC.jsx)(iy.d, {
          className: "EnterName",
          placeholderText: AC("homePage:enterName"),
          maxLength: WC.maxNameLength,
          defaultValue: SC,
          onValueChange: CC => {
            dC(CC);
          },
          forcedText: EC || !rC.g.canChangeName ? SC : null,
          blurOnEnter: !0,
          domRef: DC
        }), (0, KC.jsx)(XC.d, {
          className: "ChooseRandomNameButton",
          onClick: () => {
            dC((0, WC.getRandomName)());
          },
          children: (0, KC.jsx)("i", {
            className: "fas fa-dice ChooseRandomNameIcon"
          })
        }), !rC.g.canChangeName && (0, KC.jsx)("div", {
          className: "EnterName NoInput",
          children: (0, WC.getNameForDisplayInClient)(SC, !rC.g.canSeeRealPlayerNames)
        }), (0, KC.jsx)(XC.d, {
          className: "ChooseNameButton",
          disabled: EC || SC === OC.getPlayerName(),
          onClick: () => {
            SC.length < WC.minNameLength ? sC(AC("homePage:changeNameMinLengthError", {
              length: WC.minNameLength
            })) : SC.length > WC.maxNameLength ? sC(AC("homePage:changeNameMaxLengthError", {
              length: WC.maxNameLength
            })) : (JC(!0), sC(null), async function (CC, yC, IC, fC) {
              const ky = await (0, aC.t)("".concat(cC.b.indexUrl, "/index/name/update"), {
                name: CC
              }, {
                retries: 3
              }, yC.getMetricsCookies()).catch(CC => {
                console.error("Bad response from the server when trying to update name:", CC);
                return {
                  err: "An error occurred trying to change your name! Please report on discord what steps you took to get this error message."
                };
              });
              ky.err ? (console.error("Error when trying to get with new name from DB", ky.err), fC(ky.err)) : !0 === ky.nameExists ? fC("Name is already taken") : IC(CC);
            }(SC, OC, CC => {
              OC.setPlayerName(CC);
              JC(!1);
            }, CC => {
              sC(CC);
              JC(!1);
            }));
          },
          children: AC("general:choose")
        })]
      }), NC && (0, KC.jsx)("div", {
        className: "ChooseAccNameError",
        children: NC
      })]
    }), (0, KC.jsx)(b, {
      label: (() => {
        if ((0, tC.h)(YC)) {
          const {
            amt: CC,
            unit: yC
          } = (0, zC.O)(Date.now(), YC + tC.e);
          return "".concat(AC("settingsMenu:hideSocialLocation"), " (").concat(AC("general:timeLeft", {
            time: "".concat(CC, " ").concat(yC)
          }), ")");
        }
        return AC("settingsMenu:hideSocialLocation");
      })(),
      onClick: () => {
        const CC = !(0, tC.h)(YC);
        uC(!0);
        PC.e.setHideSocialLocation(OC, CC).then(() => {
          qC.b.set({
            hideSocialLocationFrom: CC ? Date.now() : null
          });
        }).finally(() => {
          uC(!1);
        });
      },
      checked: (0, tC.h)(YC),
      disabled: FC
    }), (0, KC.jsxs)("div", {
      className: "SettingBox",
      children: [(0, KC.jsx)("div", {
        className: "AccountSettingsLabel",
        children: AC("auth:login")
      }), vC && (0, KC.jsx)(jy.e, {}), !vC && 0 === lC.length && (0, KC.jsx)("div", {
        className: "NoLoginOptions",
        children: AC("auth:noLoginOptions")
      }), !vC && lC.length > 0 && "crazygames" !== HC.D && (0, KC.jsx)("div", {
        className: "AccountSettingsLoginButtons",
        children: lC
      }), !vC && lC.length > 0 && "crazygames" === HC.D && (0, KC.jsxs)("div", {
        className: "AccountSettingsLoginButtons",
        children: [lC[0], lC.length > 1 && (0, KC.jsxs)(KC.Fragment, {
          children: [(0, KC.jsxs)("div", {
            className: "LegacyLoginOptionsHeader",
            children: [(0, KC.jsx)("span", {
              className: "LegacyLoginOptionsTitle",
              children: AC("auth:legacyLoginOptions")
            }), (0, KC.jsx)(LC.b, {
              className: "LegacyLoginOptionsInfoIcon",
              hoverInfo: AC("auth:legacyLoginOptionsInfo")
            })]
          }), (0, KC.jsx)("div", {
            className: "LegacyAccountSettingsLoginButtons",
            children: lC.slice(1)
          })]
        })]
      }), rC.g.useLogin && my.useLogin && (null !== OC.loggedInInfo || OC.isLoggedIn()) && (0, KC.jsxs)(KC.Fragment, {
        children: [(0, KC.jsx)("div", {
          className: "AccountSettingsLoginDivider"
        }), (0, KC.jsx)(XC.x, {
          onClick: () => {
            (0, aC.o)();
          },
          className: "AccountSettingsSignedInButton",
          children: AC("auth:signOut")
        })]
      })]
    }), OC.playerHasRank("super") && (0, KC.jsxs)("div", {
      className: "SettingBox AccountSettingsSuperRank",
      children: [(0, KC.jsxs)("div", {
        className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
        children: [(0, KC.jsx)("i", {
          className: "fas fa-bolt"
        }), AC("homePage:superRank"), (0, KC.jsxs)("div", {
          className: "AccountSettingsSuperRankTimeLeft",
          children: ["(", AC("general:timeLeft", {
            time: (0, zC._b)(OC.superRankInfo)
          }), ")"]
        })]
      }), (0, KC.jsx)("ul", {
        className: "SuperRankHistory",
        children: Object.entries(RC.current).slice(0).reverse().map(CC => {
          var yC;
          let [IC, fC] = CC;
          const {
            giftedBy: ky,
            giftedTo: gC
          } = "object" === typeof fC ? fC : {};
          const my = null !== (yC = fC.days) && void 0 !== yC ? yC : fC;
          if (gC) {
            return null;
          }
          const {
            unit: XC,
            amt: iy
          } = (0, zC.O)(Number(IC), Date.now());
          const LC = AC("settingsMenu:".concat(XC, "Ago"), {
            [XC]: iy
          });
          return (0, KC.jsxs)("li", {
            className: "SuperRankHistoryEntry",
            children: [LC, " you ", ky ? "received ".concat(my, " days from ").concat(ky) : "purchased ".concat(my, " days")]
          }, IC);
        })
      }), (0, KC.jsxs)("div", {
        className: "AccountSettingsSuperRankProlongContainer",
        children: [(0, KC.jsxs)(XC.o, {
          className: "AccountSettingsSuperRankProlong",
          onClick: () => {
            UC();
          },
          children: [wC && (0, KC.jsx)("div", {
            className: "AccountSettingsSuperRankProlongLoading",
            children: (0, KC.jsx)(jy.e, {})
          }), !pC && (0, KC.jsx)(jy.e, {}), pC && (0, KC.jsxs)(KC.Fragment, {
            children: [(0, KC.jsx)("i", {
              className: "fas fa-bolt"
            }), AC("settingsMenu:getSuperRankAdditionalDays", {
              days: pC.custom_attributes.super_days,
              price: pC.price.amount,
              currency: pC.price.currency
            })]
          })]
        }), (0, KC.jsxs)(XC.o, {
          className: "AccountSettingsSuperRankProlong",
          onClick: () => {
            GC.b.showCustomPopup({
              body: (0, KC.jsx)(BC.d, {
                gift: !0
              }),
              middleScreenPopupContainerClassName: "SuperRankPitchPopup"
            });
          },
          children: [(0, KC.jsx)("i", {
            className: "fas fa-bolt"
          }), AC("homePage:giftSuperRank")]
        })]
      })]
    }), OC.isLoggedIn() && (0, KC.jsxs)("div", {
      className: "SettingBoxGroup AccountSettingsDeleteAccountGroup",
      children: [(0, KC.jsxs)("div", {
        className: "SettingBox AccountSettingsDeleteAccount SettingBoxWarning",
        children: [(0, KC.jsx)("div", {
          className: "AccountSettingsDeleteAccountButtonTitle",
          children: AC("auth:deleteAccountButtonTitle")
        }), (0, HC.k)() && (0, KC.jsx)("div", {
          className: "AccountSettingsDeleteAccountButtonTitle",
          children: AC("auth:discordActivityKickWarning")
        }), (0, KC.jsx)(nC, {})]
      }), (0, KC.jsx)("div", {
        className: "SettingBox SettingsBoxWarning",
        children: AC("auth:deleteAccountWarning")
      })]
    })]
  });
});
function nC() {
  const {
    userContext: CC,
    isUserContextUpdating: yC
  } = (0, ky.fb)();
  const {
    t: IC
  } = (0, eC.n)();
  const [gC, AC] = (0, fC.ey)(!1);
  const [my, iy] = (0, fC.ey)(null);
  const LC = yC || gC;
  return (0, KC.jsxs)("div", {
    className: "AccountSettingsDeleteAccountButtonContainer",
    children: [(0, KC.jsxs)(XC.x, {
      onClick: async function () {
        if (!gC) {
          AC(!0);
          try {
            const yC = await async function () {
              if (!(await GC.b.showPromptPopup({
                title: "auth:deleteAccountPopupTitle",
                subtitle: (0, HC.k)() ? "auth:discordActivityDeleteAccountWarning" : "auth:deleteAccountWarning",
                confirmText: "auth:deleteAccount",
                confirmTooltip: "auth:deleteAccountPopupConfirmTooltip",
                cancelText: "general:cancel",
                cancelTooltip: "auth:deleteAccountPopupCancelTooltip"
              }).getResult())) {
                return wC.e.ok();
              }
              const yC = await (0, aC.t)("".concat(cC.b.indexUrl, "/index/metrics/revoke-cookies"), {}, {
                retries: 3
              }, CC.getMetricsCookies());
              if (yC.error) {
                return wC.e.error(yC.error);
              }
              (0, HC.k)() && (await UC.i.discordActivity()).exit("User deleted their account");
              (0, aC.o)(!0);
              aC.v.getCurrentUserContext().then(IC => {
                IC.type === EC.e.ANONYMOUS && IC.whamm === CC.whamm && IC.setPlayerName(yC.name);
              });
              return wC.e.ok();
            }();
            const IC = yC.isError() ? yC.asError().message : null;
            iy(IC);
          } catch (yC) {
            console.error("Failed to delete account:", yC);
            iy(IC("auth:genericDeleteAccountError"));
          }
          AC(!1);
        }
      },
      className: "AccountSettingsDeleteAccountButton",
      disabled: LC,
      children: [LC && (0, KC.jsx)("div", {
        className: "DeletingAccountLoader",
        children: (0, KC.jsx)(jy.e, {})
      }), IC("auth:deleteAccount")]
    }), my && (0, KC.jsx)("div", {
      className: "DeleteAccountError",
      children: my
    })]
  });
}
var FC = require("./1623.js");
var uC = require("./1630.js");
var DC = require("./1338.js");
var ZC = require("./1553.js");
const lC = (0, fC.memo)(function (CC) {
  let {
    inGame: yC
  } = CC;
  const {
    t: IC,
    selectedLanguage: fC
  } = (0, eC.n)();
  const {
    soundVolume: gC,
    musicVolume: AC,
    clientEscMenuOptions: my,
    showDebugOverlay: XC
  } = (0, qC.f)(["soundVolume", "musicVolume", "clientEscMenuOptions", "showDebugOverlay"]);
  const iy = (0, ky.db)("hideCoordinates");
  let LC = "settingsMenu:showCoordinates";
  let YC = "settingsMenu:showChunkCoordinates";
  function bC(CC) {
    const yC = new Intl.DisplayNames([CC], {
      type: "language"
    }).of(CC);
    return yC.charAt(0).toUpperCase() + yC.slice(1);
  }
  iy && (LC = "settingsMenu:showCoordinatesHidden", YC = "settingsMenu:showChunkCoordinatesHidden");
  return (0, KC.jsxs)("div", {
    className: "SettingsMenuRightInner",
    children: [yC && rC.g.canUseInviteLinks && (0, KC.jsxs)("div", {
      className: "SettingBox",
      children: [(0, KC.jsx)("div", {
        className: "SettingsMenuInviteHeader",
        children: IC("settingsMenu:inviteLink")
      }), (0, KC.jsx)(FC.f, {})]
    }), (0, KC.jsxs)("div", {
      className: "SettingBox",
      children: [(0, KC.jsx)("div", {
        className: "SliderText",
        style: {
          marginBottom: "10px"
        },
        children: IC("settingsMenu:language")
      }), (0, KC.jsx)(uC.b, {
        options: Object.entries(eC.d).map(CC => {
          let [yC, IC] = CC;
          return {
            label: (0, KC.jsxs)("div", {
              className: "SettingsMenuLanguageOption",
              children: [(0, KC.jsx)("img", {
                src: IC.flagImg,
                alt: "flag"
              }), (0, KC.jsxs)("span", {
                children: [bC(yC), " ", (0, KC.jsxs)("span", {
                  className: "SettingsMenuLanguageOptionCode",
                  children: ["(", yC, ")"]
                })]
              })]
            }),
            value: yC
          };
        }),
        value: fC.code,
        onChange: CC => {
          DC.f.get().setCurrentLanguage(CC.value);
        }
      })]
    }), (0, KC.jsx)(h, {
      name: IC("settingsMenu:musicVolume"),
      min: 0,
      max: 1,
      step: .01,
      initValue: AC,
      onChange: CC => {
        qC.b.set({
          musicVolume: Math.round(100 * CC) / 100
        });
      },
      format: CC => CC.toFixed(2)
    }), (0, KC.jsx)(h, {
      name: IC("settingsMenu:soundEffectsVolume"),
      min: 0,
      max: 1,
      step: .01,
      initValue: gC,
      onChange: CC => {
        qC.b.set({
          soundVolume: Math.round(100 * CC) / 100
        });
      },
      format: CC => CC.toFixed(2)
    }), !(0, rC.W)() && (0, ZC.j)() && rC.g.useForceRotateForceFullscreenOverlay && (0, KC.jsx)(b, {
      label: IC("settingsMenu:disableFullscreenMode"),
      checked: my.disableFullscreen,
      onClick: CC => {
        qC.b.setClientEscMenuOptions({
          disableFullscreen: CC
        });
      }
    }), (0, KC.jsx)(b, {
      label: IC(LC),
      checked: my.showCoordinates,
      onClick: CC => {
        qC.b.setClientEscMenuOptions({
          showCoordinates: CC
        });
      },
      disabled: iy
    }), (0, KC.jsx)(b, {
      label: IC(YC),
      checked: my.showChunkCoordinates,
      onClick: CC => {
        qC.b.setClientEscMenuOptions({
          showChunkCoordinates: CC
        });
      },
      disabled: iy
    }), (0, KC.jsx)(b, {
      label: IC("settingsMenu:showFps"),
      checked: my.showFPS,
      onClick: CC => {
        qC.b.setClientEscMenuOptions({
          showFPS: CC
        });
      }
    }), (0, KC.jsx)(b, {
      label: IC("settingsMenu:disableBunnyHopping"),
      checked: my.disableBunnyHopping,
      onClick: CC => {
        qC.b.setClientEscMenuOptions({
          disableBunnyHopping: CC
        });
      }
    }), (0, UC.u)() && (0, KC.jsx)(b, {
      label: IC("settingsMenu:showChat"),
      checked: my.showChat,
      onClick: CC => {
        qC.b.setClientEscMenuOptions({
          showChat: CC
        });
      }
    }), (0, KC.jsx)(b, {
      label: IC("settingsMenu:showDebugOverlay"),
      checked: XC,
      onClick: CC => {
        qC.b.set({
          showDebugOverlay: CC
        });
      }
    })]
  });
});
var oC = require("./1642.js");
var vC = require("./1444.js");
function hC() {
  const {
    t: CC
  } = (0, eC.n)();
  const {
    isTouchScreen: yC,
    clientEscMenuOptions: IC
  } = (0, qC.f)(["isTouchScreen", "clientEscMenuOptions"]);
  const [, ky] = (0, fC.useReducer)(CC => CC + 1, 0);
  return (0, KC.jsxs)("div", {
    className: "SettingsMenuRightInner",
    children: [(0, rC.Z)() && !(0, rC.W)() ? (0, KC.jsx)(KC.Fragment, {
      children: (0, KC.jsx)(b, {
        label: CC("settingsMenu:useTouchControls"),
        checked: yC,
        onClick: CC => {
          qC.b.set({
            isTouchScreen: CC
          });
        }
      })
    }) : null, (0, KC.jsx)(b, {
      label: CC("settingsMenu:crouchToggle"),
      checked: IC.crouchIsToggle,
      onClick: CC => {
        qC.b.setClientEscMenuOptions({
          crouchIsToggle: CC
        });
      },
      circleInfoText: CC("settingsMenu:crouchToggleInfo")
    }), "mouseOnly" !== (0, rC.A)() && (0, KC.jsx)(h, {
      name: CC("settingsMenu:touchscreenSensitivity"),
      min: 1,
      max: 300,
      step: 1,
      initValue: IC.touchscreenSensitivity,
      onChange: CC => {
        qC.b.setClientEscMenuOptions({
          touchscreenSensitivity: CC
        });
      }
    }), !(0, rC.W)() && (0, KC.jsx)(h, {
      name: CC("settingsMenu:mouseSensitivity"),
      min: 1,
      max: 200,
      step: 1,
      initValue: IC.mouseSensitivity,
      onChange: CC => {
        qC.b.setClientEscMenuOptions({
          mouseSensitivity: CC
        });
      }
    }), !(0, rC.W)() && (0, KC.jsxs)("div", {
      className: "ControlsContainer",
      children: [(0, KC.jsx)("div", {
        className: "SliderText",
        children: CC("settingsMenu:keyBindings")
      }), Object.keys(vC.o).map(CC => (0, KC.jsx)(RC, {
        noaAction: CC,
        forceUpdate: ky
      }, CC)), (0, KC.jsx)(XC.x, {
        className: "ResetBindingsButton",
        onClick: () => {
          (0, vC.u)();
          ky();
        },
        children: CC("controls:resetBindings")
      })]
    })]
  });
}
function RC(CC) {
  var yC;
  let {
    noaAction: IC,
    forceUpdate: ky
  } = CC;
  const {
    t: gC
  } = (0, eC.n)();
  const [AC, my] = (0, fC.ey)("controls:clickToEnterNewBinding");
  const [iy, LC] = (0, fC.ey)(null);
  const [YC, rC] = (0, fC.ey)(null);
  const GC = vC.o[IC].filter(CC => vC.n[CC]);
  let OC = null;
  const SC = [];
  for (const fC in vC.o) {
    if (fC === IC) {
      continue;
    }
    const CC = vC.o[fC];
    for (const yC of CC) {
      GC.includes(yC) && SC.push(gC(vC.p[fC].translationKey, vC.p[fC].params));
    }
  }
  SC.length > 0 && (OC = gC("controls:sharedBindingsWarning") + " ", OC += SC.join(", "));
  const TC = () => "BindingInput_" + IC;
  function NC(CC) {
    return null === CC ? null : (0, KC.jsx)(vC.e, {
      keyCode: CC
    });
  }
  return (0, KC.jsxs)("div", {
    className: bC("ControlRow", {
      WarningBorder: null !== OC
    }),
    children: [(0, KC.jsxs)("div", {
      className: "ControlRowInner",
      children: [(0, KC.jsx)("div", {
        className: "ControlName",
        children: gC(vC.p[IC].translationKey, vC.p[IC].params)
      }), (0, KC.jsxs)("div", {
        className: "ControlBindingsContainer",
        children: [(0, KC.jsx)("div", {
          className: "ControlBindingsList",
          children: GC.map(CC => (0, KC.jsxs)("div", {
            className: "ControlBinding",
            children: [(0, KC.jsx)("div", {
              children: NC(CC)
            }), (0, KC.jsx)("div", {
              className: "ControlBindingRemoveIcon",
              onClick: () => {
                const yC = (0, vC.r)(IC, CC);
                yC.isError() ? rC(yC.asError().message) : rC(null);
                ky();
              },
              children: "\xd7"
            })]
          }, CC))
        }), (0, KC.jsxs)("div", {
          className: "ControlBindingAddInput",
          children: [(0, KC.jsxs)("div", {
            className: "InputContainer",
            children: [(0, KC.jsx)("div", {
              className: "InputOverlay",
              children: null !== (yC = NC(iy)) && void 0 !== yC ? yC : (0, KC.jsx)("div", {
                className: "InputOverlayPlaceholder",
                children: gC(AC)
              })
            }), (0, KC.jsx)("input", {
              id: TC(),
              defaultValue: "",
              onKeyDown: CC => {
                const yC = CC.code;
                vC.k.includes(yC) ? (rC(null), LC(yC)) : (rC("controls:keyIsReserved"), LC(null));
                CC.preventDefault();
                CC.stopPropagation();
              },
              onMouseDown: CC => {
                const yC = "Mouse" + (CC.button + 1);
                document.activeElement && document.activeElement.id === TC() ? vC.k.includes(yC) ? (rC(null), LC(yC)) : (rC("controls:keyIsReserved"), LC(null)) : my("controls:enterNewBinding");
                CC.stopPropagation();
              },
              onBlur: () => {
                my("controls:clickToEnterNewBinding");
                rC(null);
              }
            })]
          }), (0, KC.jsx)(XC.d, {
            onClick: () => {
              (0, vC.i)(IC, iy);
              rC(null);
              LC(null);
              ky();
            },
            className: "ControlBindingAddButton",
            disabled: null === iy,
            children: gC("general:add")
          })]
        }), YC && (0, KC.jsx)("div", {
          className: "ControlBindingError",
          children: gC(YC)
        })]
      })]
    }), OC && (0, KC.jsx)("div", {
      className: "ControlRowWarning",
      children: OC
    })]
  });
}
var dC = require("./18.js");
var QC = require("./572.js");
var MC = require("./1645.js");
var Cy = require("./567.js");
function yy(CC) {
  let {
    setApplySettingsCallback: yC
  } = CC;
  const {
    t: IC
  } = (0, eC.n)();
  const [, ky] = (0, fC.useReducer)(CC => CC + 1, 0);
  const gC = (0, fC.useRef)(!1);
  const [AC, my] = (0, fC.ey)(!1);
  const [XC, iy] = (0, fC.ey)(null);
  const {
    getRootProps: LC,
    getInputProps: YC,
    isDragActive: rC
  } = (0, MC.e)({
    onDrop: async function (CC) {
      my(!0);
      try {
        await Cy.e.setFromFiles(CC);
        iy(null);
        gC.current = !0;
        SC();
        ky();
      } catch (yC) {
        iy("Invalid Texture Pack Folder");
      } finally {
        my(!1);
      }
    },
    useFsAccessApi: !1
  });
  const OC = (0, fC.useRef)(null);
  function SC() {
    OC.current !== Cy.e.getId() || Cy.e.getId() === QC.z.CUSTOM && gC.current ? yC(() => p) : yC(null);
  }
  async function TC(CC) {
    if (Cy.e.getId() !== CC.metaData.id) {
      if (Cy.e.getId() === QC.z.CUSTOM && Cy.e.getFromFolderName()) {
        const CC = GC.b.showPromptPopup({
          title: "settingsMenu:loseChangesTitle",
          subtitle: "settingsMenu:loseChangesSubtitle",
          confirmText: "general:continue",
          confirmTooltip: "",
          cancelText: "general:cancel",
          cancelTooltip: ""
        });
        if (!0 !== (await CC.getResult())) {
          return;
        }
      }
      Cy.e.setFromJson(CC);
      SC();
      ky();
    }
  }
  (0, fC.Oy)(() => {
    OC.current = Cy.e.getId();
  }, []);
  return (0, KC.jsx)(KC.Fragment, {
    children: (0, KC.jsxs)("div", {
      className: "TexturePackCategory SettingsMenuRightInner",
      children: [(0, KC.jsx)("div", {
        className: "TexturePackList",
        children: Object.values(QC.z).map(CC => (0, KC.jsx)(Iy, {
          id: CC,
          isSelected: CC === Cy.e.getId(),
          setSelected: TC
        }, CC))
      }), Cy.e.getId() === QC.z.CUSTOM && (0, KC.jsxs)("div", {
        className: "CustomTexturePackContainer",
        children: [(0, KC.jsxs)("div", {
          className: "CustomTextureWarning",
          children: [IC("settingsMenu:customTextureWarning"), ".", (0, KC.jsx)("br", {}), IC("settingsMenu:viewDocumentation"), ":", " ", (0, KC.jsx)("a", {
            href: "https://github.com/Bloxdy/texturePacks",
            target: "_blank",
            rel: "noreferrer",
            children: "github.com/Bloxdy/texturePacks"
          })]
        }), XC && (0, KC.jsxs)("div", {
          className: "CustomTextureError",
          children: [IC("general:error"), ": ", XC]
        }), (0, KC.jsxs)("div", (0, dC.d)((0, dC.d)({}, LC({
          className: bC("CustomTextureFolderUpload", {
            ActiveDrag: rC
          })
        })), {}, {
          children: [(0, KC.jsx)("input", (0, dC.d)({}, YC({
            webkitdirectory: "true"
          }))), AC && (0, KC.jsx)("div", {
            className: "CustomTextureFolderUploadLoading",
            children: (0, KC.jsx)(jy.e, {})
          }), !AC && !rC && Cy.e.getFromFolderName() && (0, KC.jsxs)(KC.Fragment, {
            children: [(0, KC.jsx)("div", {
              className: "CustomTextureFolderUploadIcon Active",
              children: (0, KC.jsx)("i", {
                className: "fa-solid fa-folder-image"
              })
            }), (0, KC.jsx)("div", {
              className: "CustomTextureFolderUploadInstructions Active",
              children: Cy.e.getFromFolderName()
            })]
          }), !AC && (rC || !Cy.e.getFromFolderName()) && (0, KC.jsxs)(KC.Fragment, {
            children: [(0, KC.jsx)("div", {
              className: "CustomTextureFolderUploadIcon",
              children: (0, KC.jsx)("i", {
                className: "fa-solid fa-up-from-bracket"
              })
            }), (0, KC.jsx)("div", {
              className: "CustomTextureFolderUploadInstructions",
              children: "Drag and drop a Texture Pack folder here"
            })]
          })]
        }))]
      })]
    })
  });
}
function Iy(CC) {
  var yC;
  var IC;
  let {
    id: ky,
    isSelected: gC,
    setSelected: AC
  } = CC;
  const [my, XC] = (0, fC.ey)(!0);
  const [iy, LC] = (0, fC.ey)("");
  const [YC, rC] = (0, fC.ey)("");
  const GC = (0, fC.useRef)({});
  (0, fC.Oy)(() => {
    (0, QC.B)(ky).then(CC => {
      GC.current = CC;
      XC(!1);
      LC(GC.current.metaData.name);
      rC(GC.current.metaData.author);
    });
  }, []);
  return (0, KC.jsxs)("div", {
    className: bC("TexturePack", {
      Selected: gC,
      Custom: ky === QC.z.CUSTOM
    }),
    onClick: () => {
      my || AC(GC.current);
    },
    children: [(0, KC.jsx)("div", {
      className: "TexturePackBg",
      style: {
        backgroundImage: "url(".concat(null === (yC = GC.current) || void 0 === yC || null === (IC = yC.metaData) || void 0 === IC ? void 0 : IC.previewImage, ")")
      }
    }), my && (0, KC.jsx)("div", {
      className: "TexturePackName",
      children: (0, KC.jsx)(jy.e, {})
    }), !my && iy && (0, KC.jsx)("div", {
      className: "TexturePackName",
      children: iy
    }), !my && YC && (0, KC.jsx)("div", {
      className: "TexturePackAuthor",
      children: YC
    })]
  });
}
var fy = require("./82.js");
var kI = require("./38.js");
var gy = require("./424.js");
var Ay = require("./66.js");
var mI = require("./602.js");
const Xy = {
  chunkHorizAddDist: CC => {
    const yC = (0, SC.sI)().DC.SL[1];
    (0, SC.sI)().DC.TL([CC, yC], [CC + 1, yC + 1]);
  },
  chunkVertAddDist: CC => {
    const yC = (0, SC.sI)().DC.SL[0];
    (0, SC.sI)().DC.TL([yC, CC], [yC + 1, CC + 1]);
  }
};
const iI = {
  chunkHorizAddDist: () => (0, SC.sI)().DC.SL[0],
  chunkVertAddDist: () => (0, SC.sI)().DC.SL[1]
};
export const e = (0, fC.memo)(function (CC) {
  let {
    show: yC,
    setBeforeResumeCallback: IC
  } = CC;
  const gC = {
    account: {
      icon: "fa-solid fa-user",
      displayName: "homePage:account"
    },
    general: {
      icon: "fa-solid fa-gear",
      displayName: "settingsMenu:general"
    },
    graphics: {
      icon: "fa-solid fa-cube",
      displayName: "settingsMenu:graphics"
    },
    controls: {
      icon: "fa-solid fa-joystick",
      displayName: "settingsMenu:controls"
    },
    texturePack: {
      icon: "fa-solid fa-folder-image",
      displayName: "settingsMenu:texturePack"
    },
    updateLog: {
      icon: "fa-solid fa-clock-rotate-left",
      displayName: "homePage:updateLog"
    },
    information: {
      icon: "fa-solid fa-circle-info",
      displayName: "homePage:info"
    },
    alternativeDomains: {
      icon: "fa-solid fa-globe",
      displayName: "settingsMenu:unblockedDomains"
    },
    developerTools: {
      icon: "fa-solid fa-terminal",
      displayName: "Developer Tools"
    }
  };
  (0, AC.b)();
  const {
    gameState: my
  } = (0, qC.f)(["gameState"]);
  const {
    userContext: iy
  } = (0, ky.fb)();
  const {
    t: LC
  } = (0, eC.n)();
  const YC = (0, ky.X)();
  const bC = (0, ky.db)("minChunkAddDist");
  const [GC, OC] = (0, fC.ey)(Object.keys(gC)[0]);
  const [jy, wC] = (0, fC.ey)(null);
  const aC = (0, fC.useRef)(function () {
    const CC = new Date();
    const yC = 6 * (CC.getMonth() + CC.getDate()) % gy.A.length;
    return [...gy.A, ...gy.A].slice(yC, yC + 6);
  }());
  const cC = "inGame" === my;
  async function UC() {
    jy && (await jy(), wC(null));
  }
  function EC() {
    qC.b.set({
      openEverythingMenuName: null
    });
  }
  function VC(CC) {
    return (0, Ay.w)(qC.b.get("clientEscMenuOptions")[CC]) ? (0, Ay.w)((0, SC.sI)()) || (0, Ay.w)(iI[CC]) ? fy.j.getItem(CC) : iI[CC]() : qC.b.get("clientEscMenuOptions")[CC];
  }
  function WC(CC, yC) {
    if ("useTouchControls" !== CC) {
      var IC;
      CC in qC.b.get("clientEscMenuOptions") && qC.b.setClientEscMenuOptions({
        [CC]: yC
      });
      if (!(0, Ay.w)((0, SC.sI)())) {
        null === (IC = Xy[CC]) || void 0 === IC || IC.call(Xy, yC);
      }
      fy.j.setItem(CC, yC);
    } else {
      qC.b.set({
        isTouchScreen: yC
      });
    }
  }
  cC && delete gC.account;
  iy.playerHasRank("developer") || delete gC.developerTools;
  rC.g.settings.canChangeTexturePack || delete gC.texturePack;
  "crazygames" === HC.D && delete gC.alternativeDomains;
  (0, kI.e)("toggleFullCoordinateOverlay", () => {
    const CC = VC("showCoordinates") && VC("showChunkCoordinates") && VC("showFPS");
    WC("showCoordinates", !CC);
    WC("showChunkCoordinates", !CC);
    WC("showFPS", !CC);
    YC();
  });
  (0, kI.e)("updatedChunkLoadDist", () => {
    YC();
  });
  (0, fC.Oy)(() => {
    OC(Object.keys(gC)[0]);
    wC(null);
  }, [yC]);
  (0, fC.Oy)(() => {
    if ((0, Ay.w)(bC)) {
      return;
    }
    const [CC, yC] = (0, oC.n)();
    const IC = (0, mI.f)(bC[0], CC, (0, oC.g)(bC[0]));
    const fC = (0, mI.f)(bC[1], yC, (0, oC.k)(bC[1]));
    (0, SC.sI)().DC.TL([IC, fC], [IC + 1, fC + 1]);
  }, [bC]);
  (0, fC.Oy)(() => {
    IC(() => UC);
  }, [jy]);
  return (0, KC.jsxs)("div", {
    className: "SettingsMenu Menu",
    style: yC ? {} : {
      display: "none"
    },
    children: [(0, KC.jsx)("div", {
      className: "MenuSideBar",
      children: (0, KC.jsx)("div", {
        className: "MenuSideBarBody",
        children: (0, KC.jsx)(ky.F, {
          items: Object.keys(gC).map(CC => ({
            id: CC,
            faIcon: gC[CC].icon,
            title: LC(gC[CC].displayName),
            redDot: !1
          })),
          selectedItemId: GC,
          onClick: CC => {
            !async function (CC) {
              await UC();
              OC(CC);
            }(CC);
          }
        })
      })
    }), (0, KC.jsxs)("div", {
      className: "MenuBody SettingsMenuRight",
      children: ["account" === GC && (0, KC.jsx)(JC, {
        showing: yC
      }), "general" === GC && (0, KC.jsx)(lC, {
        inGame: cC
      }), "graphics" === GC && (0, KC.jsx)(oC.d, {
        minChunkAddDist: null !== bC && void 0 !== bC ? bC : [2, 2],
        getValue: VC,
        onChange: WC,
        setApplySettingsCallback: wC
      }), "controls" === GC && (0, KC.jsx)(hC, {}), rC.g.settings.canChangeTexturePack && "texturePack" === GC && (0, KC.jsx)(yy, {
        setApplySettingsCallback: wC
      }), "updateLog" === GC && (0, KC.jsx)("div", {
        className: "SettingsMenuRightInner",
        children: (0, KC.jsx)("div", {
          className: "UpdateLogsContainer",
          children: (0, NC.c)().map((CC, yC) => (0, KC.jsx)(TC.b, {
            updateLog: CC,
            index: yC,
            close: EC
          }, yC))
        })
      }), "information" === GC && (0, KC.jsx)("div", {
        className: "SettingsMenuRightInner",
        children: (0, KC.jsx)(sC.d, {})
      }), "alternativeDomains" === GC && (0, KC.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [(0, KC.jsx)("div", {
          className: "AlternativeDomainsTitle",
          children: LC("settingsMenu:unblockedDomainsDescription")
        }), (0, KC.jsx)("div", {
          className: "AlternativeDomainsList",
          children: aC.current.map(CC => (0, KC.jsxs)(XC.C, {
            onClick: () => {
              window.open("https://".concat(CC));
            },
            children: [(0, KC.jsx)("i", {
              className: "fa-solid fa-arrow-up-right-from-square"
            }), " ", CC]
          }, CC))
        })]
      }), "developerTools" === GC && (0, KC.jsx)("div", {
        className: "SettingsMenuRightInner",
        children: (0, KC.jsx)(pC, {
          setApplySettingsCallback: wC
        })
      }), null !== jy && (0, KC.jsx)("div", {
        className: "SettingsMenuRightFooter",
        children: (0, KC.jsx)(XC.d, {
          className: "SettingsMenuRightFooterButton",
          onClick: UC,
          children: LC("general:apply")
        })
      })]
    })]
  });
});
export function b(CC) {
  let {
    label: yC,
    onClick: IC,
    checked: fC,
    circleInfoText: ky,
    className: gC,
    disabled: AC
  } = CC;
  return (0, KC.jsx)("div", {
    className: bC("SettingBox CheckboxContainer", {
      [gC]: gC,
      SettingBoxDisabled: AC
    }),
    onClick: () => {
      IC(!fC);
    },
    children: (0, KC.jsxs)("div", {
      className: "CheckboxInputAndText",
      children: [(0, KC.jsx)("label", {
        className: "CheckboxClickableLabel",
        children: (0, KC.jsx)(my.e, {
          className: "SettingsCheckbox",
          checked: fC,
          disabled: !1,
          onChange: () => {}
        })
      }), (0, KC.jsxs)("div", {
        className: "CheckboxText",
        children: [yC, ky && (0, KC.jsx)(LC.b, {
          className: "SettingsTextInputCircleInfo",
          hoverInfo: ky
        })]
      })]
    })
  });
}
export function h(CC) {
  let {
    name: yC,
    onChange: IC,
    min: ky,
    max: gC,
    step: AC,
    initValue: my,
    circleInfoText: XC,
    format: iy,
    className: YC
  } = CC;
  const [rC, GC] = (0, fC.ey)(my);
  (0, fC.Oy)(() => {
    GC(my);
  }, [my]);
  return (0, KC.jsxs)("div", {
    className: bC("SettingBox SettingsSliderDiv", {
      [YC]: YC
    }),
    children: [(0, KC.jsxs)("div", {
      className: "SliderText",
      children: ["".concat(yC, ": ").concat(iy ? iy(rC) : rC), XC && (0, KC.jsx)(LC.b, {
        className: "SettingsTextInputCircleInfo",
        hoverInfo: XC
      })]
    }), (0, KC.jsx)("div", {
      className: "SliderDiv",
      children: (0, KC.jsx)(l, {
        value: rC,
        min: ky,
        max: gC,
        step: AC,
        onChange: CC => {
          GC(CC);
          IC(CC);
        },
        format: iy
      })
    })]
  });
}
export function l(CC) {
  let {
    value: yC,
    min: IC,
    max: fC,
    step: ky,
    onChange: AC,
    orientation: my,
    reverse: XC,
    setIsChanging: iy,
    tooltip: LC,
    labels: YC,
    handleLabel: bC,
    format: rC,
    onChangeStart: GC,
    onChangeComplete: eC
  } = CC;
  return (0, KC.jsx)(gC.c, {
    value: yC,
    min: IC,
    max: fC,
    step: ky,
    onChange: AC,
    orientation: my,
    reverse: XC,
    tooltip: LC,
    labels: YC,
    handleLabel: bC,
    format: rC,
    onChangeStart: () => {
      null === GC || void 0 === GC || GC();
      null === iy || void 0 === iy || iy(!0);
    },
    onChangeComplete: () => {
      null === iy || void 0 === iy || iy(!1);
      null === eC || void 0 === eC || eC();
    }
  });
}
export async function p() {
  const CC = GC.b.showPromptPopup({
    title: "settingsMenu:reloadPagePopupTitle",
    subtitle: "settingsMenu:reloadPagePopupSubtitle",
    confirmText: "settingsMenu:reloadPagePopupConfirm",
    confirmTooltip: "",
    cancelText: "general:cancel",
    cancelTooltip: ""
  });
  !0 === (await CC.getResult()) && (0, OC.w)();
}