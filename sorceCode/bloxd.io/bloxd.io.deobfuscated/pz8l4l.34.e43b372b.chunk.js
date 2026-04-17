
(function () {
  try {
    var v = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : {};
    var v2 = new v.Error().stack;
    if (v2) {
      v._sentryDebugIds = v._sentryDebugIds || {};
      v._sentryDebugIds[v2] = "dfde4d24-7bac-52d2-90bc-a7e09b94deca";
    }
  } catch (e2) {}
})();
export const id = 34;
export const ids = [34];
export const modules = {
  17869: (p, p2, p3) => {
    p3.d(p2, {
      c: () => f,
      f: () => f5,
      j: () => f10,
      l: () => f11
    });
    var vP3 = p3(18);
    var vP32 = p3(16787);
    var vP33 = p3(16973);
    var vP34 = p3(16988);
    var vP35 = p3(17157);
    var vP36 = p3(16909);
    var vP37 = p3(16990);
    p3(17213);
    var vP38 = p3(17070);
    var vP39 = p3(16811);
    p3(17472);
    p3(17192);
    p3(17483);
    const vLSImagepng = "image/png";
    const vLN2 = 2;
    const vA = [134, 22, 135, 150, 246, 214, 150, 54];
    function f(p4) {
      const v3 = new DataView(p4.buffer, p4.byteOffset, p4.byteLength);
      let vLN0 = 0;
      for (let vLN02 = 0; vLN02 < vA.length; vLN02++) {
        if (v3.getUint8(vLN0++) !== vA[vLN02]) {
          vP39.e.Error("Not a babylon environment map");
          return null;
        }
      }
      let vLS = "";
      let vLN03 = 0;
      while (vLN03 = v3.getUint8(vLN0++)) {
        vLS += String.fromCharCode(vLN03);
      }
      let v4 = JSON.parse(vLS);
      v4 = f2(v4);
      v4.binaryDataPosition = vLN0;
      if (v4.JG) {
        v4.JG.lodGenerationScale = v4.JG.lodGenerationScale || 0.8;
      }
      return v4;
    }
    function f2(p5) {
      if (p5.version > vLN2) {
        throw new Error(`Unsupported babylon environment map version "${p5.version}". Latest supported version is "${vLN2}".`);
      }
      if (p5.version === 2) {
        return p5;
      } else {
        return p5 = (0, vP3.d)((0, vP3.d)({}, p5), {}, {
          version: 2,
          imageType: vLSImagepng
        });
      }
    }
    function f3(p6, p7) {
      const v5 = (p7 = f2(p7)).JG;
      let v6 = Math.log2(p7.width);
      v6 = Math.round(v6) + 1;
      if (v5.mipmaps.length !== v6 * 6) {
        throw new Error(`Unsupported specular mipmaps number "${v5.mipmaps.length}"`);
      }
      const v7 = new Array(v6);
      for (let vLN04 = 0; vLN04 < v6; vLN04++) {
        v7[vLN04] = new Array(6);
        for (let vLN05 = 0; vLN05 < 6; vLN05++) {
          const v8 = v5.mipmaps[vLN04 * 6 + vLN05];
          v7[vLN04][vLN05] = new Uint8Array(p6.buffer, p6.byteOffset + p7.binaryDataPosition + v8.position, v8.length);
        }
      }
      return v7;
    }
    function f4(p8, p9) {
      p9 = f2(p9);
      const v9 = new Array(6);
      const v10 = p9.irradiance?.irradianceTexture;
      if (v10) {
        if (v10.faces.length !== 6) {
          throw new Error(`Incorrect irradiance texture faces number "${v10.faces.length}"`);
        }
        for (let vLN06 = 0; vLN06 < 6; vLN06++) {
          const v11 = v10.faces[vLN06];
          v9[vLN06] = new Uint8Array(p8.buffer, p8.byteOffset + p9.binaryDataPosition + v11.position, v11.length);
        }
      }
      return v9;
    }
    function f5(p10, p11, p12) {
      const v12 = (p12 = f2(p12)).JG;
      if (!v12) {
        return Promise.resolve([]);
      }
      p10._lodGenerationScale = v12.lodGenerationScale;
      const vA2 = [];
      const vF3 = f3(p11, p12);
      vA2.push(f7(p10, vF3, p12.imageType));
      const v13 = p12.irradiance?.irradianceTexture;
      if (v13) {
        var v14;
        var v15;
        const vF4 = f4(p11, p12);
        let v16 = null;
        if ((v14 = p12.irradiance) !== null && v14 !== undefined && (v15 = v14.irradianceTexture) !== null && v15 !== undefined && v15.dominantDirection) {
          v16 = vP33.bL.OL(p12.irradiance.irradianceTexture.dominantDirection);
        }
        vA2.push(f8(p10, vF4, v13.size, p12.imageType, v16));
      }
      return Promise.all(vA2);
    }
    async function f6(p13, p14, p15, p16, p17, p18, p19, p20, p21, p22, p23) {
      return await new Promise((p24, p25) => {
        if (p15) {
          const v17 = p14.createTexture(null, true, true, null, 1, null, p26 => {
            p25(p26);
          }, p13);
          if (p16 !== null && p16 !== undefined) {
            p16.onEffectCreatedObservable.addOnce(p27 => {
              p27.executeWhenCompiled(() => {
                p16.externalTextureSamplerBinding = true;
                p16.onApply = p28 => {
                  p28._bindTexture("textureSampler", v17);
                  p28.setFloat2("scale", 1, p14._features.needsInvertingBitmap && p13 instanceof ImageBitmap ? -1 : 1);
                };
                if (p14.scenes.length) {
                  p14.scenes[0].postProcessManager.directRender([p16], p22, true, p18, p19);
                  p14.restoreDefaultFramebuffer();
                  v17.dispose();
                  URL.revokeObjectURL(p17);
                  p24();
                }
              });
            });
          }
        } else {
          p14._uploadImageToTexture(p23, p13, p18, p19);
          if (p20) {
            const v18 = p21[p19];
            if (v18) {
              p14._uploadImageToTexture(v18._texture, p13, p18, 0);
            }
          }
          p24();
        }
      });
    }
    async function f7(p29, p30, IC = vLSImagepng) {
      const v19 = p29.getEngine();
      p29.format = 5;
      p29.type = 0;
      p29.generateMipMaps = true;
      p29._cachedAnisotropicFilteringLevel = null;
      v19.updateTextureSamplingMode(3, p29);
      await f9(p29, p30, true, IC);
      p29.isReady = true;
    }
    async function f8(p31, p32, p33, fC = vLSImagepng, ky = null) {
      const v20 = p31.getEngine();
      const v21 = new vP36.c(v20, 5);
      const v22 = new vP37.c(v20, v21);
      p31._irradianceTexture = v22;
      v22._dominantDirection = ky;
      v21.isCube = true;
      v21.format = 5;
      v21.type = 0;
      v21.generateMipMaps = true;
      v21._cachedAnisotropicFilteringLevel = null;
      v21.generateMipMaps = true;
      v21.width = p33;
      v21.height = p33;
      v20.updateTextureSamplingMode(3, v21);
      await f9(v21, [p32], false, fC);
      v20.generateMipMapsForCubemap(v21);
      v21.isReady = true;
    }
    async function f9(p34, p35, p36, gC = vLSImagepng) {
      if (!vP32.Tools.IsExponentOfTwo(p34.width)) {
        throw new Error("Texture size must be a power of two");
      }
      const v23 = (0, vP34.ILog2)(p34.width) + 1;
      const v24 = p34.getEngine();
      let v25 = false;
      let v26 = false;
      let v27 = null;
      let v28 = null;
      let v29 = null;
      const v30 = v24.getCaps();
      if (v30.textureLOD) {
        if (v24._features.supportRenderAndCopyToLodForFloatTextures) {
          if (v30.textureHalfFloatRender && v30.textureHalfFloatLinearFiltering) {
            v25 = true;
            p34.type = 2;
          } else if (v30.textureFloatRender && v30.textureFloatLinearFiltering) {
            v25 = true;
            p34.type = 1;
          }
        } else {
          v25 = false;
        }
      } else {
        v25 = false;
        v26 = p36;
      }
      let vLN07 = 0;
      if (v25) {
        if (v24.isWebGPU) {
          vLN07 = 1;
          await p3.e(44).then(p3.bind(p3, 19866));
        } else {
          await p3.e(37).then(p3.bind(p3, 19872));
        }
        v27 = new vP38.c("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, v24, false, undefined, p34.type, undefined, null, false, undefined, vLN07);
        p34._isRGBD = false;
        p34.invertY = false;
        v28 = v24.createRenderTargetCubeTexture(p34.width, {
          generateDepthBuffer: false,
          generateMipMaps: true,
          generateStencilBuffer: false,
          samplingMode: 3,
          type: p34.type,
          format: 5
        });
      } else {
        p34._isRGBD = true;
        p34.invertY = true;
        if (v26) {
          const vLN3 = 3;
          v29 = {};
          const v31 = p34._lodGenerationScale;
          const v32 = p34._lodGenerationOffset;
          for (let vLN08 = 0; vLN08 < vLN3; vLN08++) {
            const v33 = (v23 - 1) * v31 + v32;
            const v34 = v32 + (v33 - v32) * (1 - vLN08 / (vLN3 - 1));
            const v35 = Math.round(Math.min(Math.max(v34, 0), v33));
            const v36 = new vP36.c(v24, 2);
            v36.isCube = true;
            v36.invertY = true;
            v36.generateMipMaps = false;
            v24.updateTextureSamplingMode(2, v36);
            const v37 = new vP37.c(null);
            v37._isCube = true;
            v37._texture = v36;
            v29[v35] = v37;
            switch (vLN08) {
              case 0:
                p34._lodTextureLow = v37;
                break;
              case 1:
                p34._lodTextureMid = v37;
                break;
              case 2:
                p34._lodTextureHigh = v37;
            }
          }
        }
      }
      const vA3 = [];
      for (let vLN09 = 0; vLN09 < p35.length; vLN09++) {
        for (let vLN010 = 0; vLN010 < 6; vLN010++) {
          const v38 = p35[vLN09][vLN010];
          const v39 = new Blob([v38], {
            type: gC
          });
          const v40 = URL.createObjectURL(v39);
          let v41;
          if (v24._features.forceBitmapOverHTMLImageElement) {
            v41 = v24.createImageBitmap(v39, {
              premultiplyAlpha: "none"
            }).then(async p37 => await f6(p37, v24, v25, v27, v40, vLN010, vLN09, v26, v29, v28, p34));
          } else {
            const v42 = new Image();
            v42.src = v40;
            v41 = new Promise((p38, p39) => {
              v42.onload = () => {
                f6(v42, v24, v25, v27, v40, vLN010, vLN09, v26, v29, v28, p34).then(() => p38()).catch(p40 => {
                  p39(p40);
                });
              };
              v42.onerror = p41 => {
                p39(p41);
              };
            });
          }
          vA3.push(v41);
        }
      }
      await Promise.all(vA3);
      if (p35.length < v23) {
        let v43;
        const v44 = Math.pow(2, v23 - 1 - p35.length);
        const v45 = v44 * v44 * 4;
        switch (p34.type) {
          case 0:
            v43 = new Uint8Array(v45);
            break;
          case 2:
            v43 = new Uint16Array(v45);
            break;
          case 1:
            v43 = new Float32Array(v45);
        }
        for (let v46 = p35.length; v46 < v23; v46++) {
          for (let vLN011 = 0; vLN011 < 6; vLN011++) {
            v24._uploadArrayBufferViewToTexture(v28?.texture || p34, v43, vLN011, v46);
          }
        }
      }
      if (v28) {
        const v47 = p34._irradianceTexture;
        p34._irradianceTexture = null;
        v24._releaseTexture(p34);
        v28._swapAndDie(p34);
        p34._irradianceTexture = v47;
      }
      if (v27) {
        v27.dispose();
      }
      if (v26) {
        if (p34._lodTextureHigh && p34._lodTextureHigh._texture) {
          p34._lodTextureHigh._texture.isReady = true;
        }
        if (p34._lodTextureMid && p34._lodTextureMid._texture) {
          p34._lodTextureMid._texture.isReady = true;
        }
        if (p34._lodTextureLow && p34._lodTextureLow._texture) {
          p34._lodTextureLow._texture.isReady = true;
        }
      }
    }
    function f10(p42, p43) {
      const v48 = (p43 = f2(p43)).irradiance;
      if (!v48) {
        return;
      }
      const v49 = new vP35.g();
      vP33.bL.FromArrayToRef(v48.x, 0, v49.x);
      vP33.bL.FromArrayToRef(v48.y, 0, v49.y);
      vP33.bL.FromArrayToRef(v48.z, 0, v49.z);
      vP33.bL.FromArrayToRef(v48.xx, 0, v49.xx);
      vP33.bL.FromArrayToRef(v48.yy, 0, v49.yy);
      vP33.bL.FromArrayToRef(v48.zz, 0, v49.zz);
      vP33.bL.FromArrayToRef(v48.yz, 0, v49.yz);
      vP33.bL.FromArrayToRef(v48.zx, 0, v49.zx);
      vP33.bL.FromArrayToRef(v48.xy, 0, v49.xy);
      p42._sphericalPolynomial = v49;
    }
    function f11(p44, p45, p46, p47, p48) {
      const v50 = f7(p44.getEngine().createRawCubeTexture(null, p44.width, p44.format, p44.type, p44.generateMipMaps, p44.invertY, p44.samplingMode, p44._compression), p45).then(() => p44);
      p44.onRebuildCallback = p49 => ({
        proxy: v50,
        isReady: true,
        isAsync: true
      });
      p44._source = 13;
      p44._bufferViewArrayArray = p45;
      p44._lodGenerationScale = p47;
      p44._lodGenerationOffset = p48;
      p44._sphericalPolynomial = p46;
      return f7(p44, p45).then(() => {
        p44.isReady = true;
        return p44;
      });
    }
  }
};
//# sourceMappingURL=pz8l4l.34.e43b372b.chunk.js.map
//# debugId=dfde4d24-7bac-52d2-90bc-a7e09b94deca