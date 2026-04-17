(function () {
  try {
    var v = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : {};
    var v2 = new v.Error().stack;
    if (v2) {
      v._sentryDebugIds = v._sentryDebugIds || {};
      v._sentryDebugIds[v2] = "aca38608-aef6-5570-bf72-cabf0bc451c3";
    }
  } catch (e2) {}
})();
export const id = 21;
export const ids = [20, 21];
export const modules = {
  17483: (p, p2, p3) => {
    var vP3 = p3(17491);
    var vP32 = p3(16990);
    vP32.c.prototype.forceSphericalPolynomialsRecompute = function () {
      if (this._texture) {
        this._texture._sphericalPolynomial = null;
        this._texture._sphericalPolynomialPromise = null;
        this._texture._sphericalPolynomialComputed = false;
      }
    };
    Object.defineProperty(vP32.c.prototype, "sphericalPolynomial", {
      get: function () {
        if (this._texture) {
          if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) {
            return this._texture._sphericalPolynomial;
          }
          if (this._texture.isReady) {
            if (!this._texture._sphericalPolynomialPromise) {
              this._texture._sphericalPolynomialPromise = vP3.c.ConvertCubeMapTextureToSphericalPolynomial(this);
              if (this._texture._sphericalPolynomialPromise === null) {
                this._texture._sphericalPolynomialComputed = true;
              } else {
                this._texture._sphericalPolynomialPromise.then(p4 => {
                  this._texture._sphericalPolynomial = p4;
                  this._texture._sphericalPolynomialComputed = true;
                });
              }
            }
            return null;
          }
        }
        return null;
      },
      set: function (p5) {
        if (this._texture) {
          this._texture._sphericalPolynomial = p5;
        }
      },
      enumerable: true,
      configurable: true
    });
  },
  17491: (p6, p7, p8) => {
    p8.d(p7, {
      c: () => C2
    });
    var vP8 = p8(16973);
    var vP82 = p8(16988);
    var vP83 = p8(17157);
    var vP84 = p8(16977);
    var vP85 = p8(17009);
    class C {
      constructor(p9, p10, p11, p12) {
        this.name = p9;
        this.worldAxisForNormal = p10;
        this.worldAxisForFileX = p11;
        this.worldAxisForFileY = p12;
      }
    }
    class C2 {
      static ConvertCubeMapTextureToSphericalPolynomial(p13) {
        var v3;
        if (!p13.isCube) {
          return null;
        }
        if ((v3 = p13.YL()) !== null && v3 !== undefined) {
          v3.getEngine().flushFramebuffer();
        }
        const v4 = p13.getSize().width;
        const v5 = p13.readPixels(0, undefined, undefined, false);
        const v6 = p13.readPixels(1, undefined, undefined, false);
        let v7;
        let v8;
        if (p13.isRenderTarget) {
          v7 = p13.readPixels(3, undefined, undefined, false);
          v8 = p13.readPixels(2, undefined, undefined, false);
        } else {
          v7 = p13.readPixels(2, undefined, undefined, false);
          v8 = p13.readPixels(3, undefined, undefined, false);
        }
        const v9 = p13.readPixels(4, undefined, undefined, false);
        const v10 = p13.readPixels(5, undefined, undefined, false);
        const v11 = p13.gammaSpace;
        let vLN0 = 0;
        if (p13.textureType == 1 || p13.textureType == 2) {
          vLN0 = 1;
        }
        return new Promise(p14 => {
          Promise.all([v6, v5, v7, v8, v9, v10]).then(p15 => {
            let [v12, v13, v14, v15, v16, v17] = p15;
            const vO = {
              size: v4,
              right: v13,
              left: v12,
              up: v14,
              down: v15,
              front: v16,
              back: v17,
              format: 5,
              type: vLN0,
              gammaSpace: v11
            };
            p14(this.ConvertCubeMapToSphericalPolynomial(vO));
          });
        });
      }
      static _AreaElement(p16, p17) {
        return Math.atan2(p16 * p17, Math.sqrt(p16 * p16 + p17 * p17 + 1));
      }
      static ConvertCubeMapToSphericalPolynomial(p18) {
        const v18 = new vP83.d();
        let vLN02 = 0;
        const v19 = 2 / p18.size;
        const vV19 = v19;
        const v20 = v19 * 0.5;
        const v21 = v20 - 1;
        for (let vLN03 = 0; vLN03 < 6; vLN03++) {
          const v22 = this._FileFaces[vLN03];
          const v23 = p18[v22.name];
          let vV21 = v21;
          const v24 = p18.format === 5 ? 4 : 3;
          for (let vLN04 = 0; vLN04 < p18.size; vLN04++) {
            let vV212 = v21;
            for (let vLN05 = 0; vLN05 < p18.size; vLN05++) {
              const v25 = v22.worldAxisForFileX.scale(vV212).add(v22.worldAxisForFileY.scale(vV21)).add(v22.worldAxisForNormal);
              v25.normalize();
              const v26 = this._AreaElement(vV212 - v20, vV21 - v20) - this._AreaElement(vV212 - v20, vV21 + v20) - this._AreaElement(vV212 + v20, vV21 - v20) + this._AreaElement(vV212 + v20, vV21 + v20);
              let v27 = v23[vLN04 * p18.size * v24 + vLN05 * v24 + 0];
              let v28 = v23[vLN04 * p18.size * v24 + vLN05 * v24 + 1];
              let v29 = v23[vLN04 * p18.size * v24 + vLN05 * v24 + 2];
              if (isNaN(v27)) {
                v27 = 0;
              }
              if (isNaN(v28)) {
                v28 = 0;
              }
              if (isNaN(v29)) {
                v29 = 0;
              }
              if (p18.type === 0) {
                v27 /= 255;
                v28 /= 255;
                v29 /= 255;
              }
              if (p18.gammaSpace) {
                v27 = Math.pow((0, vP82.Clamp)(v27), vP84.i);
                v28 = Math.pow((0, vP82.Clamp)(v28), vP84.i);
                v29 = Math.pow((0, vP82.Clamp)(v29), vP84.i);
              }
              const v30 = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const v31 = Math.max(v27, v28, v29);
                if (v31 > v30) {
                  const v32 = v30 / v31;
                  v27 *= v32;
                  v28 *= v32;
                  v29 *= v32;
                }
              } else {
                v27 = (0, vP82.Clamp)(v27, 0, v30);
                v28 = (0, vP82.Clamp)(v28, 0, v30);
                v29 = (0, vP82.Clamp)(v29, 0, v30);
              }
              const v33 = new vP85.eL(v27, v28, v29);
              v18.addLight(v25, v33, v26);
              vLN02 += v26;
              vV212 += v19;
            }
            vV21 += vV19;
          }
        }
        const v34 = Math.PI * 4 * 6 / 6 / vLN02;
        v18.scaleInPlace(v34);
        v18.convertIncidentRadianceToIrradiance();
        v18.convertIrradianceToLambertianRadiance();
        return vP83.g.FromHarmonics(v18);
      }
    }
    C2._FileFaces = [new C("right", new vP8.bL(1, 0, 0), new vP8.bL(0, 0, -1), new vP8.bL(0, -1, 0)), new C("left", new vP8.bL(-1, 0, 0), new vP8.bL(0, 0, 1), new vP8.bL(0, -1, 0)), new C("up", new vP8.bL(0, 1, 0), new vP8.bL(1, 0, 0), new vP8.bL(0, 0, 1)), new C("down", new vP8.bL(0, -1, 0), new vP8.bL(1, 0, 0), new vP8.bL(0, 0, -1)), new C("front", new vP8.bL(0, 0, 1), new vP8.bL(1, 0, 0), new vP8.bL(0, -1, 0)), new C("back", new vP8.bL(0, 0, -1), new vP8.bL(-1, 0, 0), new vP8.bL(0, -1, 0))];
    C2.MAX_HDRI_VALUE = 4096;
    C2.PRESERVE_CLAMPED_COLORS = false;
  },
  17192: (p19, p20, p21) => {
    p21.r(p20);
    p21.d(p20, {
      Dispose: () => f4,
      DumpData: () => f3,
      DumpDataAsync: () => f2,
      DumpFramebuffer: () => f,
      DumpTools: () => vO3
    });
    var vP21 = p21(17077);
    var vP212 = p21(16787);
    var vP213 = p21(16988);
    var vP214 = p21(16837);
    let v35;
    let v36 = null;
    async function f(p22, p23, p24, p25, ky = "image/png", gC, AC) {
      const v37 = await p24.readPixels(0, 0, p22, p23);
      f3(p22, p23, new Uint8Array(v37.buffer), p25, ky, gC, true, undefined, AC);
    }
    async function f2(p26, p27, p28, fC = "image/png", ky, gC = false, AC = false, my) {
      return await new Promise(p29 => {
        f3(p26, p27, p28, p30 => p29(p30), fC, ky, gC, AC, my);
      });
    }
    function f3(p31, p32, p33, p34, YC = "image/png", rC, GC = false, eC = false, OC) {
      (async function () {
        v36 ||= new Promise((p36, p37) => {
          let v38;
          let v39 = null;
          const vO2 = {
            ef: true,
            depth: false,
            Lf: false,
            alpha: true,
            premultipliedAlpha: false,
            antialias: false,
            failIfMajorPerformanceCaveat: false
          };
          Promise.resolve().then(p21.bind(p21, 17103)).then(p38 => {
            let {
              ThinEngine: LC
            } = p38;
            const v40 = vP214.b.Instances.length;
            try {
              v38 = new OffscreenCanvas(100, 100);
              v39 = new LC(v38, false, vO2);
            } catch (e3) {
              var v41;
              if (v40 < vP214.b.Instances.length) {
                if ((v41 = vP214.b.Instances.pop()) !== null && v41 !== undefined) {
                  v41.dispose();
                }
              }
              v38 = document.createElement("canvas");
              v39 = new LC(v38, false, vO2);
            }
            vP214.b.Instances.pop();
            vP214.b.OnEnginesDisposedObservable.add(p39 => {
              if (v39 && p39 !== v39 && !v39.AC && vP214.b.Instances.length === 0) {
                f4();
              }
            });
            v39.getCaps().parallelShaderCompile = undefined;
            const v42 = new vP21.c(v39);
            p21.e(53).then(p21.bind(p21, 19318)).then(p40 => {
              let {
                passPixelShader: AC
              } = p40;
              if (!v39) {
                p37("Engine is not defined");
                return;
              }
              const v43 = new vP21.f({
                Jy: v39,
                name: AC.name,
                fragmentShader: AC.shader,
                samplerNames: ["textureSampler"]
              });
              v35 = {
                canvas: v38,
                Jy: v39,
                qf: v42,
                wrapper: v43
              };
              p36(v35);
            });
          }).catch(p37);
        });
        return await v36;
      })().then(p41 => {
        p41.Jy.setSize(p31, p32, true);
        if (p33 instanceof Float32Array) {
          const v44 = new Uint8Array(p33.length);
          let v45 = p33.length;
          while (v45--) {
            const v46 = p33[v45];
            v44[v45] = Math.round((0, vP213.Clamp)(v46) * 255);
          }
          p33 = v44;
        }
        const v47 = p41.Jy.createRawTexture(p33, p31, p32, 5, false, !GC, 1);
        p41.qf.setViewport();
        p41.qf.applyEffectWrapper(p41.wrapper);
        p41.wrapper.effect._bindTexture("textureSampler", v47);
        p41.qf.draw();
        if (eC) {
          vP212.Tools.ToBlob(p41.canvas, p42 => {
            const v48 = new FileReader();
            v48.onload = p43 => {
              const v49 = p43.target.result;
              if (p34) {
                p34(v49);
              }
            };
            v48.readAsArrayBuffer(p42);
          }, f3, OC);
        } else {
          vP212.Tools.EncodeScreenshotCanvasData(p41.canvas, p34, f3, vO3, OC);
        }
        v47.dispose();
      });
    }
    function f4() {
      var v50;
      if (v35) {
        v35.wrapper.dispose();
        v35.qf.dispose();
        v35.Jy.dispose();
      } else if ((v50 = v36) !== null && v50 !== undefined) {
        v50.then(p44 => {
          p44.wrapper.dispose();
          p44.qf.dispose();
          p44.Jy.dispose();
        });
      }
      v36 = null;
      v35 = null;
    }
    const vO3 = {
      DumpData: f3,
      DumpDataAsync: f2,
      DumpFramebuffer: f,
      Dispose: f4
    };
    vP212.Tools.DumpData = f3;
    vP212.Tools.DumpDataAsync = f2;
    vP212.Tools.DumpFramebuffer = f;
  },
  17472: (p45, p46, p47) => {
    p47.d(p46, {
      b: () => C3
    });
    var vP47 = p47(17070);
    var vP472 = p47(17200);
    class C3 {
      static ExpandRGBDTexture(p48) {
        const v51 = p48._texture;
        if (!v51 || !p48.isRGBD) {
          return;
        }
        const v52 = v51.getEngine();
        const v53 = v52.getCaps();
        const v54 = v51.isReady;
        let v55 = false;
        if (v53.textureHalfFloatRender && v53.textureHalfFloatLinearFiltering) {
          v55 = true;
          v51.type = 2;
        } else if (v53.textureFloatRender && v53.textureFloatLinearFiltering) {
          v55 = true;
          v51.type = 1;
        }
        if (v55) {
          v51.isReady = false;
          v51._isRGBD = false;
          v51.invertY = false;
        }
        const vF = async () => {
          const v56 = v52.isWebGPU;
          const v57 = v56 ? 1 : 0;
          v51.isReady = false;
          if (v56) {
            await p47.e(44).then(p47.bind(p47, 19866));
          } else {
            await p47.e(37).then(p47.bind(p47, 19872));
          }
          const v58 = new vP47.c("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, v52, false, undefined, v51.type, undefined, null, false, undefined, v57);
          v58.externalTextureSamplerBinding = true;
          const v59 = v52.createRenderTargetTexture(v51.width, {
            generateDepthBuffer: false,
            generateMipMaps: false,
            generateStencilBuffer: false,
            samplingMode: v51.samplingMode,
            type: v51.type,
            format: 5
          });
          v58.onEffectCreatedObservable.addOnce(p49 => {
            p49.executeWhenCompiled(() => {
              v58.onApply = p50 => {
                p50._bindTexture("textureSampler", v51);
                p50.setFloat2("scale", 1, 1);
              };
              p48.YL().postProcessManager.directRender([v58], v59, true);
              v52.restoreDefaultFramebuffer();
              v52._releaseTexture(v51);
              if (v58) {
                v58.dispose();
              }
              v59._swapAndDie(v51);
              v51.isReady = true;
            });
          });
        };
        if (v55) {
          if (v54) {
            vF();
          } else {
            p48.onLoadObservable.addOnce(vF);
          }
        }
      }
      static async EncodeTextureToRGBD(p51, p52, fC = 0) {
        if (p52.getEngine().isWebGPU) {
          await p47.e(45).then(p47.bind(p47, 19883));
        } else {
          await p47.e(38).then(p47.bind(p47, 19878));
        }
        return await (0, vP472.e)("rgbdEncode", p51, p52, fC, 1, 5);
      }
    }
  }
};
//# sourceMappingURL=pz8l4l.21.fb2840fb.chunk.js.map
//# debugId=aca38608-aef6-5570-bf72-cabf0bc451c3