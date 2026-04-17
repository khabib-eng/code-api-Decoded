(function () {
  try {
    var v = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : {};
    var v2 = new v.Error().stack;
    if (v2) {
      v._sentryDebugIds = v._sentryDebugIds || {};
      v._sentryDebugIds[v2] = "7fc28ed0-2ac4-57ac-b65c-f3d62eb096d3";
    }
  } catch (e2) {}
})();
export const id = 13;
export const ids = [13];
export const modules = {
  17018: (p, p2, p3) => {
    p3.d(p2, {
      d: () => v3
    });
    let v3 = false;
  },
  16990: (p4, p5, p6) => {
    p6.d(p5, {
      c: () => C2
    });
    var vP6 = p6(16960);
    var vP62 = p6(16965);
    var vP63 = p6(16796);
    var vP64 = p6(16973);
    var vP65 = p6(16837);
    var vP66 = p6(16930);
    p6(16840);
    var vP67 = p6(16994);
    class C {
      get wrapU() {
        return this._wrapU;
      }
      set wrapU(p7) {
        this._wrapU = p7;
      }
      get wrapV() {
        return this._wrapV;
      }
      set wrapV(p8) {
        this._wrapV = p8;
      }
      get coordinatesMode() {
        return 0;
      }
      get isCube() {
        return !!this._texture && this._texture.isCube;
      }
      set isCube(p9) {
        if (this._texture) {
          this._texture.isCube = p9;
        }
      }
      get is3D() {
        return !!this._texture && this._texture.is3D;
      }
      set is3D(p10) {
        if (this._texture) {
          this._texture.is3D = p10;
        }
      }
      get is2DArray() {
        return !!this._texture && this._texture.is2DArray;
      }
      set is2DArray(p11) {
        if (this._texture) {
          this._texture.is2DArray = p11;
        }
      }
      getClassName() {
        return "ThinTexture";
      }
      static _IsRenderTargetWrapper(p12) {
        return p12?.shareDepth !== undefined;
      }
      constructor(p13) {
        this._wrapU = 1;
        this._wrapV = 1;
        this.wrapR = 1;
        this.anisotropicFilteringLevel = 4;
        this.delayLoadState = 0;
        this._texture = null;
        this._engine = null;
        this._cachedSize = vP67.d.Zero();
        this._cachedBaseSize = vP67.d.Zero();
        this._initialSamplingMode = 2;
        this._texture = C._IsRenderTargetWrapper(p13) ? p13.texture : p13;
        if (this._texture) {
          this._engine = this._texture.getEngine();
          this.wrapU = this._texture._cachedWrapU ?? this.wrapU;
          this.wrapV = this._texture._cachedWrapV ?? this.wrapV;
          this.wrapR = this._texture._cachedWrapR ?? this.wrapR;
        }
      }
      isReady() {
        if (this.delayLoadState === 4) {
          this.delayLoad();
          return false;
        } else {
          return !!this._texture && this._texture.isReady;
        }
      }
      delayLoad() {}
      getInternalTexture() {
        return this._texture;
      }
      getSize() {
        if (this._texture) {
          if (this._texture.width) {
            this._cachedSize.width = this._texture.width;
            this._cachedSize.height = this._texture.height;
            return this._cachedSize;
          }
          if (this._texture._size) {
            this._cachedSize.width = this._texture._size;
            this._cachedSize.height = this._texture._size;
            return this._cachedSize;
          }
        }
        return this._cachedSize;
      }
      getBaseSize() {
        if (this.isReady() && this._texture) {
          if (this._texture._size) {
            this._cachedBaseSize.width = this._texture._size;
            this._cachedBaseSize.height = this._texture._size;
            return this._cachedBaseSize;
          } else {
            this._cachedBaseSize.width = this._texture.baseWidth;
            this._cachedBaseSize.height = this._texture.baseHeight;
            return this._cachedBaseSize;
          }
        } else {
          this._cachedBaseSize.width = 0;
          this._cachedBaseSize.height = 0;
          return this._cachedBaseSize;
        }
      }
      get samplingMode() {
        if (this._texture) {
          return this._texture.samplingMode;
        } else {
          return this._initialSamplingMode;
        }
      }
      updateSamplingMode(p14) {
        if (this._texture && this._engine) {
          this._engine.updateTextureSamplingMode(p14, this._texture, this._texture.generateMipMaps);
        }
      }
      releaseInternalTexture() {
        if (this._texture) {
          this._texture.dispose();
          this._texture = null;
        }
      }
      dispose() {
        if (this._texture) {
          this.releaseInternalTexture();
          this._engine = null;
        }
      }
    }
    var vP68 = p6(17000);
    class C2 extends C {
      set Uf(p15) {
        this._hasAlpha = p15;
      }
      get Uf() {
        return this._hasAlpha;
      }
      set getAlphaFromRGB(p16) {
        if (this._getAlphaFromRGB !== p16) {
          this._getAlphaFromRGB = p16;
          if (this._scene) {
            this._scene.markAllMaterialsAsDirty(1, p17 => p17.hasTexture(this));
          }
        }
      }
      get getAlphaFromRGB() {
        return this._getAlphaFromRGB;
      }
      set coordinatesIndex(p18) {
        if (this._coordinatesIndex !== p18) {
          this._coordinatesIndex = p18;
          if (this._scene) {
            this._scene.markAllMaterialsAsDirty(1, p19 => p19.hasTexture(this));
          }
        }
      }
      get coordinatesIndex() {
        return this._coordinatesIndex;
      }
      set coordinatesMode(p20) {
        if (this._coordinatesMode !== p20) {
          this._coordinatesMode = p20;
          if (this._scene) {
            this._scene.markAllMaterialsAsDirty(1, p21 => p21.hasTexture(this));
          }
        }
      }
      get coordinatesMode() {
        return this._coordinatesMode;
      }
      get wrapU() {
        return this._wrapU;
      }
      set wrapU(p22) {
        this._wrapU = p22;
      }
      get wrapV() {
        return this._wrapV;
      }
      set wrapV(p23) {
        this._wrapV = p23;
      }
      get isCube() {
        if (this._texture) {
          return this._texture.isCube;
        } else {
          return this._isCube;
        }
      }
      set isCube(p24) {
        if (this._texture) {
          this._texture.isCube = p24;
        } else {
          this._isCube = p24;
        }
      }
      get is3D() {
        return !!this._texture && this._texture.is3D;
      }
      set is3D(p25) {
        if (this._texture) {
          this._texture.is3D = p25;
        }
      }
      get is2DArray() {
        return !!this._texture && this._texture.is2DArray;
      }
      set is2DArray(p26) {
        if (this._texture) {
          this._texture.is2DArray = p26;
        }
      }
      get gammaSpace() {
        if (this._texture) {
          if (this._texture._gammaSpace === null) {
            this._texture._gammaSpace = this._gammaSpace;
          }
          return this._texture._gammaSpace && !this._texture._useSRGBBuffer;
        } else {
          return this._gammaSpace;
        }
      }
      set gammaSpace(p27) {
        var v4;
        if (this._texture) {
          if (this._texture._gammaSpace === p27) {
            return;
          }
          this._texture._gammaSpace = p27;
        } else {
          if (this._gammaSpace === p27) {
            return;
          }
          this._gammaSpace = p27;
        }
        if ((v4 = this.YL()) !== null && v4 !== undefined) {
          v4.markAllMaterialsAsDirty(1, p28 => p28.hasTexture(this));
        }
      }
      get isRGBD() {
        return this._texture != null && this._texture._isRGBD;
      }
      set isRGBD(p29) {
        var v5;
        if (p29 !== this.isRGBD) {
          if (this._texture) {
            this._texture._isRGBD = p29;
          }
          if ((v5 = this.YL()) !== null && v5 !== undefined) {
            v5.markAllMaterialsAsDirty(1, p30 => p30.hasTexture(this));
          }
        }
      }
      get noMipmap() {
        return false;
      }
      get lodGenerationOffset() {
        if (this._texture) {
          return this._texture._lodGenerationOffset;
        } else {
          return 0;
        }
      }
      set lodGenerationOffset(p31) {
        if (this._texture) {
          this._texture._lodGenerationOffset = p31;
        }
      }
      get lodGenerationScale() {
        if (this._texture) {
          return this._texture._lodGenerationScale;
        } else {
          return 0;
        }
      }
      set lodGenerationScale(p32) {
        if (this._texture) {
          this._texture._lodGenerationScale = p32;
        }
      }
      get linearSpecularLOD() {
        return !!this._texture && this._texture._linearSpecularLOD;
      }
      set linearSpecularLOD(p33) {
        if (this._texture) {
          this._texture._linearSpecularLOD = p33;
        }
      }
      get irradianceTexture() {
        if (this._texture) {
          return this._texture._irradianceTexture;
        } else {
          return null;
        }
      }
      set irradianceTexture(p34) {
        if (this._texture) {
          this._texture._irradianceTexture = p34;
        }
      }
      get uid() {
        this._uid ||= (0, vP66.c)();
        return this._uid;
      }
      toString() {
        return this.name;
      }
      getClassName() {
        return "BaseTexture";
      }
      set onDispose(p35) {
        if (this._onDisposeObserver) {
          this.Cf.remove(this._onDisposeObserver);
        }
        this._onDisposeObserver = this.Cf.add(p35);
      }
      get isBlocking() {
        return true;
      }
      get loadingError() {
        return this._loadingError;
      }
      get errorObject() {
        return this._errorObject;
      }
      constructor(p36, yC = null) {
        super(null);
        this.metadata = null;
        this.reservedDataStore = null;
        this._hasAlpha = false;
        this._getAlphaFromRGB = false;
        this.level = 1;
        this._coordinatesIndex = 0;
        this.optimizeUVAllocation = true;
        this._coordinatesMode = 0;
        this.wrapR = 1;
        this.anisotropicFilteringLevel = C2.DEFAULT_ANISOTROPIC_FILTERING_LEVEL;
        this._isCube = false;
        this._gammaSpace = true;
        this.invertZ = false;
        this.lodLevelInAlpha = false;
        this._dominantDirection = null;
        this.isRenderTarget = false;
        this._prefiltered = false;
        this._forceSerialize = false;
        this.animations = [];
        this.Cf = new vP63.e();
        this._onDisposeObserver = null;
        this._scene = null;
        this._uid = null;
        this._parentContainer = null;
        this._loadingError = false;
        if (p36) {
          if (C2._IsScene(p36)) {
            this._scene = p36;
          } else {
            this._engine = p36;
          }
        } else {
          this._scene = vP65.b.LastCreatedScene;
        }
        if (this._scene) {
          this.uniqueId = this._scene.getUniqueId();
          this._scene.addTexture(this);
          this._engine = this._scene.getEngine();
        }
        this._texture = yC;
        this._uid = null;
      }
      YL() {
        return this._scene;
      }
      _getEngine() {
        return this._engine;
      }
      getTextureMatrix() {
        return vP64.Matrix.IdentityReadOnly;
      }
      getReflectionTextureMatrix() {
        return vP64.Matrix.IdentityReadOnly;
      }
      getRefractionTextureMatrix() {
        return this.getReflectionTextureMatrix();
      }
      isReadyOrNotBlocking() {
        return !this.isBlocking || this.isReady() || this.loadingError;
      }
      scale(p37) {}
      get canRescale() {
        return false;
      }
      _getFromCache(p38, p39, p40, p41, p42, p43) {
        const v6 = this._getEngine();
        if (!v6) {
          return null;
        }
        const v7 = v6._getUseSRGBBuffer(!!p42, p39);
        const v8 = v6.getLoadedTexturesCache();
        for (let vLN0 = 0; vLN0 < v8.length; vLN0++) {
          const v9 = v8[vLN0];
          if ((p42 === undefined || v7 === v9._useSRGBBuffer) && (p41 === undefined || p41 === v9.invertY) && v9.url === p38 && v9.generateMipMaps === !p39 && (!p40 || p40 === v9.samplingMode) && (p43 === undefined || p43 === v9.isCube)) {
            v9.incrementReferences();
            return v9;
          }
        }
        return null;
      }
      _rebuild() {}
      clone() {
        return null;
      }
      get textureType() {
        if (this._texture && this._texture.type !== undefined) {
          return this._texture.type;
        } else {
          return 0;
        }
      }
      get textureFormat() {
        if (this._texture && this._texture.format !== undefined) {
          return this._texture.format;
        } else {
          return 5;
        }
      }
      _markAllSubMeshesAsTexturesDirty() {
        const v10 = this.YL();
        if (v10) {
          v10.markAllMaterialsAsDirty(1);
        }
      }
      readPixels(CC = 0, yC = 0, IC = null) {
        let v11 = !(arguments.length > 3) || arguments[3] === undefined || arguments[3];
        let v12 = arguments.length > 4 && arguments[4] !== undefined && arguments[4];
        let v13 = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
        let v14 = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
        let v15 = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : Number.MAX_VALUE;
        let v16 = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : Number.MAX_VALUE;
        if (!this._texture) {
          return null;
        }
        const v17 = this._getEngine();
        if (!v17) {
          return null;
        }
        const v18 = this.getSize();
        let v19 = v18.width;
        let v20 = v18.height;
        if (yC !== 0) {
          v19 /= Math.pow(2, p5);
          v20 /= Math.pow(2, p5);
          v19 = Math.round(v19);
          v20 = Math.round(v20);
        }
        v15 = Math.min(v19, v15);
        v16 = Math.min(v20, v16);
        try {
          if (this._texture.isCube) {
            return v17._readTexturePixels(this._texture, v15, v16, p4, p5, p6, v11, v12, v13, v14);
          } else {
            return v17._readTexturePixels(this._texture, v15, v16, -1, p5, p6, v11, v12, v13, v14);
          }
        } catch (e3) {
          return null;
        }
      }
      _readPixelsSync(CC = 0, yC = 0, IC = null) {
        let v21 = !(arguments.length > 3) || arguments[3] === undefined || arguments[3];
        let v22 = arguments.length > 4 && arguments[4] !== undefined && arguments[4];
        if (!this._texture) {
          return null;
        }
        const v23 = this.getSize();
        let v24 = v23.width;
        let v25 = v23.height;
        const v26 = this._getEngine();
        if (!v26) {
          return null;
        }
        if (yC != 0) {
          v24 /= Math.pow(2, p5);
          v25 /= Math.pow(2, p5);
          v24 = Math.round(v24);
          v25 = Math.round(v25);
        }
        try {
          if (this._texture.isCube) {
            return v26._readTexturePixelsSync(this._texture, v24, v25, p4, p5, p6, v21, v22);
          } else {
            return v26._readTexturePixelsSync(this._texture, v24, v25, -1, p5, p6, v21, v22);
          }
        } catch (e4) {
          return null;
        }
      }
      get _lodTextureHigh() {
        if (this._texture) {
          return this._texture._lodTextureHigh;
        } else {
          return null;
        }
      }
      get _lodTextureMid() {
        if (this._texture) {
          return this._texture._lodTextureMid;
        } else {
          return null;
        }
      }
      get _lodTextureLow() {
        if (this._texture) {
          return this._texture._lodTextureLow;
        } else {
          return null;
        }
      }
      dispose() {
        if (this._scene) {
          if (this._scene.stopAnimation) {
            this._scene.stopAnimation(this);
          }
          this._scene.removePendingData(this);
          const v27 = this._scene.textures.indexOf(this);
          if (v27 >= 0) {
            this._scene.textures.splice(v27, 1);
          }
          this._scene.onTextureRemovedObservable.notifyObservers(this);
          this._scene = null;
          if (this._parentContainer) {
            const v28 = this._parentContainer.textures.indexOf(this);
            if (v28 > -1) {
              this._parentContainer.textures.splice(v28, 1);
            }
            this._parentContainer = null;
          }
        }
        this.Cf.notifyObservers(this);
        this.Cf.clear();
        this.metadata = null;
        super.dispose();
      }
      serialize(CC = false) {
        if (!this.name && !CC) {
          return null;
        }
        const v29 = vP68.b.Serialize(this);
        vP68.b.AppendSerializedAnimations(this, v29);
        return v29;
      }
      static WhenAllReady(p44, p45) {
        let v30 = p44.length;
        if (v30 !== 0) {
          for (let vLN02 = 0; vLN02 < p44.length; vLN02++) {
            const v31 = p44[vLN02];
            if (v31.isReady()) {
              if (--v30 === 0) {
                p45();
              }
            } else {
              const v32 = v31.onLoadObservable;
              if (v32) {
                v32.addOnce(() => {
                  if (--v30 === 0) {
                    p45();
                  }
                });
              } else if (--v30 === 0) {
                p45();
              }
            }
          }
        } else {
          p45();
        }
      }
      static _IsScene(p46) {
        return p46.getClassName() === "Scene";
      }
    }
    C2.DEFAULT_ANISOTROPIC_FILTERING_LEVEL = 4;
    (0, vP6.d)([(0, vP62.F)()], C2.prototype, "uniqueId", undefined);
    (0, vP6.d)([(0, vP62.F)()], C2.prototype, "name", undefined);
    (0, vP6.d)([(0, vP62.F)()], C2.prototype, "displayName", undefined);
    (0, vP6.d)([(0, vP62.F)()], C2.prototype, "metadata", undefined);
    (0, vP6.d)([(0, vP62.F)("Uf")], C2.prototype, "_hasAlpha", undefined);
    (0, vP6.d)([(0, vP62.F)("getAlphaFromRGB")], C2.prototype, "_getAlphaFromRGB", undefined);
    (0, vP6.d)([(0, vP62.F)()], C2.prototype, "level", undefined);
    (0, vP6.d)([(0, vP62.F)("coordinatesIndex")], C2.prototype, "_coordinatesIndex", undefined);
    (0, vP6.d)([(0, vP62.F)()], C2.prototype, "optimizeUVAllocation", undefined);
    (0, vP6.d)([(0, vP62.F)("coordinatesMode")], C2.prototype, "_coordinatesMode", undefined);
    (0, vP6.d)([(0, vP62.F)()], C2.prototype, "wrapU", null);
    (0, vP6.d)([(0, vP62.F)()], C2.prototype, "wrapV", null);
    (0, vP6.d)([(0, vP62.F)()], C2.prototype, "wrapR", undefined);
    (0, vP6.d)([(0, vP62.F)()], C2.prototype, "anisotropicFilteringLevel", undefined);
    (0, vP6.d)([(0, vP62.F)()], C2.prototype, "isCube", null);
    (0, vP6.d)([(0, vP62.F)()], C2.prototype, "is3D", null);
    (0, vP6.d)([(0, vP62.F)()], C2.prototype, "is2DArray", null);
    (0, vP6.d)([(0, vP62.F)()], C2.prototype, "gammaSpace", null);
    (0, vP6.d)([(0, vP62.F)()], C2.prototype, "invertZ", undefined);
    (0, vP6.d)([(0, vP62.F)()], C2.prototype, "lodLevelInAlpha", undefined);
    (0, vP6.d)([(0, vP62.F)()], C2.prototype, "lodGenerationOffset", null);
    (0, vP6.d)([(0, vP62.F)()], C2.prototype, "lodGenerationScale", null);
    (0, vP6.d)([(0, vP62.F)()], C2.prototype, "linearSpecularLOD", null);
    (0, vP6.d)([(0, vP62.y)()], C2.prototype, "irradianceTexture", null);
    (0, vP6.d)([(0, vP62.F)()], C2.prototype, "isRenderTarget", undefined);
  },
  16955: (p47, p48, p49) => {
    p49.d(p48, {
      c: () => C3
    });
    var vP49 = p49(16960);
    var vP492 = p49(16965);
    var vP493 = p49(16796);
    var vP494 = p49(16973);
    var vP495 = p49(16990);
    var vP496 = p49(16927);
    var vP497 = p49(16829);
    var vP498 = p49(16872);
    var vP499 = p49(16923);
    var vP4910 = p49(17013);
    var vP4911 = p49(16850);
    function f(p50, p51, IC = false) {
      const v33 = p51.width;
      const v34 = p51.height;
      if (p50 instanceof Float32Array) {
        let v35 = p50.byteLength / p50.BYTES_PER_ELEMENT;
        const v36 = new Uint8Array(v35);
        while (--v35 >= 0) {
          let v37 = p50[v35];
          if (v37 < 0) {
            v37 = 0;
          } else if (v37 > 1) {
            v37 = 1;
          }
          v36[v35] = v37 * 255;
        }
        p50 = v36;
      }
      const v38 = document.createElement("canvas");
      v38.width = v33;
      v38.height = v34;
      const v39 = v38.getContext("2d");
      if (!v39) {
        return null;
      }
      const v40 = v39.createImageData(v33, v34);
      v40.data.set(p50);
      v39.putImageData(v40, 0, 0);
      if (IC) {
        const v41 = document.createElement("canvas");
        v41.width = v33;
        v41.height = v34;
        const v42 = v41.getContext("2d");
        if (v42) {
          v42.translate(0, v34);
          v42.scale(1, -1);
          v42.drawImage(v38, 0, 0);
          return v41.toDataURL("image/png");
        } else {
          return null;
        }
      }
      return v38.toDataURL("image/png");
    }
    function f2(p52, yC = 0, IC = 0) {
      const v43 = p52.getInternalTexture();
      if (!v43) {
        return null;
      }
      const v44 = p52._readPixelsSync(yC, IC);
      if (v44) {
        return f(v44, p52.getSize(), v43.invertY);
      } else {
        return null;
      }
    }
    async function f3(p53, yC = 0, IC = 0) {
      const v45 = p53.getInternalTexture();
      if (!v45) {
        return null;
      }
      const v46 = await p53.readPixels(yC, IC);
      if (v46) {
        return f(v46, p53.getSize(), v45.invertY);
      } else {
        return null;
      }
    }
    var vP4912 = p49(17018);
    var vP4913 = p49(17000);
    class C3 extends vP495.c {
      static _CreateVideoTexture(p54, p55, p56) {
        if (!(arguments.length > 5) || arguments[5] === undefined) {
          C3.TRILINEAR_SAMPLINGMODE;
        }
        throw (0, vP497.c)("VideoTexture");
      }
      get noMipmap() {
        return this._noMipmap;
      }
      get mimeType() {
        return this._mimeType;
      }
      set isBlocking(p57) {
        this._isBlocking = p57;
      }
      get isBlocking() {
        return this._isBlocking;
      }
      get invertY() {
        return this._invertY;
      }
      constructor(p58, p59, p60, p61) {
        let v47;
        let v48 = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : C3.TRILINEAR_SAMPLINGMODE;
        let v49 = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
        let v50 = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : null;
        let v51 = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : null;
        let v52 = arguments.length > 8 && arguments[8] !== undefined && arguments[8];
        let v53 = arguments.length > 9 ? arguments[9] : undefined;
        let v54 = arguments.length > 10 ? arguments[10] : undefined;
        let v55 = arguments.length > 11 ? arguments[11] : undefined;
        let v56 = arguments.length > 12 ? arguments[12] : undefined;
        let v57 = arguments.length > 13 ? arguments[13] : undefined;
        super(p59);
        this.url = null;
        this.uOffset = 0;
        this.vOffset = 0;
        this.uScale = 1;
        this.vScale = 1;
        this.uAng = 0;
        this.vAng = 0;
        this.wAng = 0;
        this.uRotationCenter = 0.5;
        this.vRotationCenter = 0.5;
        this.wRotationCenter = 0.5;
        this.homogeneousRotationInUVTransform = false;
        this.inspectableCustomProperties = null;
        this._noMipmap = false;
        this._invertY = false;
        this._rowGenerationMatrix = null;
        this._cachedTextureMatrix = null;
        this._projectionModeMatrix = null;
        this._t0 = null;
        this._t1 = null;
        this._t2 = null;
        this._cachedUOffset = -1;
        this._cachedVOffset = -1;
        this._cachedUScale = 0;
        this._cachedVScale = 0;
        this._cachedUAng = -1;
        this._cachedVAng = -1;
        this._cachedWAng = -1;
        this._cachedReflectionProjectionMatrixId = -1;
        this._cachedURotationCenter = -1;
        this._cachedVRotationCenter = -1;
        this._cachedWRotationCenter = -1;
        this._cachedHomogeneousRotationInUVTransform = false;
        this._cachedIdentity3x2 = true;
        this._cachedReflectionTextureMatrix = null;
        this._cachedReflectionUOffset = -1;
        this._cachedReflectionVOffset = -1;
        this._cachedReflectionUScale = 0;
        this._cachedReflectionVScale = 0;
        this._cachedReflectionCoordinatesMode = -1;
        this._buffer = null;
        this._deleteBuffer = false;
        this._format = null;
        this._delayedOnLoad = null;
        this._delayedOnError = null;
        this.onLoadObservable = new vP493.e();
        this._isBlocking = true;
        this.name = p58 || "";
        this.url = p58;
        let v58 = false;
        let v59 = null;
        let v60 = true;
        var v61;
        var v62;
        var v63;
        if (typeof p60 === "object" && p60 !== null) {
          v47 = (v61 = p60.noMipmap) !== null && v61 !== undefined && v61;
          p61 = p60.invertY ?? !vP4912.d;
          v48 = p60.samplingMode ?? C3.TRILINEAR_SAMPLINGMODE;
          v49 = p60.xC ?? null;
          v50 = p60.onError ?? null;
          v51 = p60.buffer ?? null;
          v52 = (v62 = p60.deleteBuffer) !== null && v62 !== undefined && v62;
          v53 = p60.format;
          v54 = p60.mimeType;
          v55 = p60.loaderOptions;
          v56 = p60.creationFlags;
          v58 = (v63 = p60.useSRGBBuffer) !== null && v63 !== undefined && v63;
          v59 = p60.internalTexture ?? null;
          v60 = p60.gammaSpace ?? v60;
          v57 = p60.forcedExtension ?? v57;
        } else {
          v47 = !!p60;
        }
        this._gammaSpace = v60;
        this._noMipmap = v47;
        this._invertY = p61 === undefined ? !vP4912.d : p61;
        this._initialSamplingMode = v48;
        this._buffer = v51;
        this._deleteBuffer = v52;
        this._mimeType = v54;
        this._loaderOptions = v55;
        this._creationFlags = v56;
        this._useSRGBBuffer = v58;
        this._forcedExtension = v57;
        if (v53 !== undefined) {
          this._format = v53;
        }
        const v64 = this.YL();
        const v65 = this._getEngine();
        if (!v65) {
          return;
        }
        v65.onBeforeTextureInitObservable.notifyObservers(this);
        const vF = () => {
          if (this._texture) {
            if (this._texture._invertVScale) {
              this.vScale *= -1;
              this.vOffset += 1;
            }
            if (this._texture._cachedWrapU !== null) {
              this.wrapU = this._texture._cachedWrapU;
              this._texture._cachedWrapU = null;
            }
            if (this._texture._cachedWrapV !== null) {
              this.wrapV = this._texture._cachedWrapV;
              this._texture._cachedWrapV = null;
            }
            if (this._texture._cachedWrapR !== null) {
              this.wrapR = this._texture._cachedWrapR;
              this._texture._cachedWrapR = null;
            }
          }
          if (this.onLoadObservable.hasObservers()) {
            this.onLoadObservable.notifyObservers(this);
          }
          if (v49) {
            v49();
          }
          if (!this.isBlocking && v64) {
            v64.resetCachedMaterial();
          }
        };
        const vF2 = (p62, p63) => {
          this._loadingError = true;
          this._errorObject = {
            message: p62,
            exception: p63
          };
          if (v50) {
            v50(p62, p63);
          }
          C3.OnTextureLoadErrorObservable.notifyObservers(this);
        };
        if (!this.url && !v59) {
          this._delayedOnLoad = vF;
          this._delayedOnError = vF2;
          return;
        }
        this._texture = v59 ?? this._getFromCache(this.url, v47, v48, this._invertY, v58, this.isCube);
        if (this._texture) {
          if (this._texture.isReady) {
            vP498.e.SetImmediate(() => vF());
          } else {
            const v66 = this._texture.onLoadedObservable.add(vF);
            this._texture.onErrorObservable.add(p64 => {
              var v67;
              vF2(p64.message, p64.exception);
              if ((v67 = this._texture) !== null && v67 !== undefined) {
                v67.onLoadedObservable.remove(v66);
              }
            });
          }
        } else if (v64 && v64.useDelayedTextureLoading) {
          this.delayLoadState = 4;
          this._delayedOnLoad = vF;
          this._delayedOnError = vF2;
        } else {
          try {
            this._texture = v65.createTexture(this.url, v47, this._invertY, v64, v48, vF, vF2, this._buffer, undefined, this._format, this._forcedExtension, v54, v55, v56, v58);
          } catch (e5) {
            vF2("error loading", e5);
            throw e5;
          }
          if (v52) {
            this._buffer = null;
          }
        }
      }
      updateURL(p65, yC = null, IC, fC) {
        if (this.url) {
          this.releaseInternalTexture();
          this.YL().markAllMaterialsAsDirty(1, p66 => p66.hasTexture(this));
        }
        if (!this.name || !!this.name.startsWith("data:")) {
          this.name = p65;
        }
        this.url = p65;
        this._buffer = yC;
        this._forcedExtension = fC;
        this.delayLoadState = 4;
        if (IC) {
          this._delayedOnLoad = p49;
        }
        this.delayLoad();
      }
      delayLoad() {
        if (this.delayLoadState !== 4) {
          return;
        }
        const v68 = this.YL();
        if (v68) {
          this.delayLoadState = 1;
          this._texture = this._getFromCache(this.url, this._noMipmap, this.samplingMode, this._invertY, this._useSRGBBuffer, this.isCube);
          if (this._texture) {
            if (this._delayedOnLoad) {
              if (this._texture.isReady) {
                vP498.e.SetImmediate(this._delayedOnLoad);
              } else {
                this._texture.onLoadedObservable.add(this._delayedOnLoad);
              }
            }
          } else {
            this._texture = v68.getEngine().createTexture(this.url, this._noMipmap, this._invertY, v68, this.samplingMode, this._delayedOnLoad, this._delayedOnError, this._buffer, null, this._format, this._forcedExtension, this._mimeType, this._loaderOptions, this._creationFlags, this._useSRGBBuffer);
            if (this._deleteBuffer) {
              this._buffer = null;
            }
          }
          this._delayedOnLoad = null;
          this._delayedOnError = null;
        }
      }
      _prepareRowForTextureGeneration(p67, p68, p69, p70) {
        p67 *= this._cachedUScale;
        p68 *= this._cachedVScale;
        p67 -= this.uRotationCenter * this._cachedUScale;
        p68 -= this.vRotationCenter * this._cachedVScale;
        p69 -= this.wRotationCenter;
        vP494.bL.TransformCoordinatesFromFloatsToRef(p67, p68, p69, this._rowGenerationMatrix, p70);
        p70.x += this.uRotationCenter * this._cachedUScale + this._cachedUOffset;
        p70.y += this.vRotationCenter * this._cachedVScale + this._cachedVOffset;
        p70.z += this.wRotationCenter;
      }
      getTextureMatrix(CC = 1) {
        if (this.uOffset === this._cachedUOffset && this.vOffset === this._cachedVOffset && this.uScale * CC === this._cachedUScale && this.vScale === this._cachedVScale && this.uAng === this._cachedUAng && this.vAng === this._cachedVAng && this.wAng === this._cachedWAng && this.uRotationCenter === this._cachedURotationCenter && this.vRotationCenter === this._cachedVRotationCenter && this.wRotationCenter === this._cachedWRotationCenter && this.homogeneousRotationInUVTransform === this._cachedHomogeneousRotationInUVTransform) {
          return this._cachedTextureMatrix;
        }
        this._cachedUOffset = this.uOffset;
        this._cachedVOffset = this.vOffset;
        this._cachedUScale = this.uScale * CC;
        this._cachedVScale = this.vScale;
        this._cachedUAng = this.uAng;
        this._cachedVAng = this.vAng;
        this._cachedWAng = this.wAng;
        this._cachedURotationCenter = this.uRotationCenter;
        this._cachedVRotationCenter = this.vRotationCenter;
        this._cachedWRotationCenter = this.wRotationCenter;
        this._cachedHomogeneousRotationInUVTransform = this.homogeneousRotationInUVTransform;
        if (!this._cachedTextureMatrix || !this._rowGenerationMatrix) {
          this._cachedTextureMatrix = vP494.Matrix.Zero();
          this._rowGenerationMatrix = new vP494.Matrix();
          this._t0 = vP494.bL.Zero();
          this._t1 = vP494.bL.Zero();
          this._t2 = vP494.bL.Zero();
        }
        vP494.Matrix.RotationYawPitchRollToRef(this.vAng, this.uAng, this.wAng, this._rowGenerationMatrix);
        if (this.homogeneousRotationInUVTransform) {
          vP494.Matrix.TranslationToRef(-this._cachedURotationCenter, -this._cachedVRotationCenter, -this._cachedWRotationCenter, vP494.TmpVectors.Matrix[0]);
          vP494.Matrix.TranslationToRef(this._cachedURotationCenter, this._cachedVRotationCenter, this._cachedWRotationCenter, vP494.TmpVectors.Matrix[1]);
          vP494.Matrix.ScalingToRef(this._cachedUScale, this._cachedVScale, 0, vP494.TmpVectors.Matrix[2]);
          vP494.Matrix.TranslationToRef(this._cachedUOffset, this._cachedVOffset, 0, vP494.TmpVectors.Matrix[3]);
          vP494.TmpVectors.Matrix[0].multiplyToRef(this._rowGenerationMatrix, this._cachedTextureMatrix);
          this._cachedTextureMatrix.multiplyToRef(vP494.TmpVectors.Matrix[1], this._cachedTextureMatrix);
          this._cachedTextureMatrix.multiplyToRef(vP494.TmpVectors.Matrix[2], this._cachedTextureMatrix);
          this._cachedTextureMatrix.multiplyToRef(vP494.TmpVectors.Matrix[3], this._cachedTextureMatrix);
          this._cachedTextureMatrix.setRowFromFloats(2, this._cachedTextureMatrix.m[12], this._cachedTextureMatrix.m[13], this._cachedTextureMatrix.m[14], 1);
        } else {
          this._prepareRowForTextureGeneration(0, 0, 0, this._t0);
          this._prepareRowForTextureGeneration(1, 0, 0, this._t1);
          this._prepareRowForTextureGeneration(0, 1, 0, this._t2);
          this._t1.Ze(this._t0);
          this._t2.Ze(this._t0);
          vP494.Matrix.FromValuesToRef(this._t1.x, this._t1.y, this._t1.z, 0, this._t2.x, this._t2.y, this._t2.z, 0, this._t0.x, this._t0.y, this._t0.z, 0, 0, 0, 0, 1, this._cachedTextureMatrix);
        }
        const v69 = this.YL();
        if (!v69) {
          return this._cachedTextureMatrix;
        }
        const v70 = this._cachedIdentity3x2;
        this._cachedIdentity3x2 = this._cachedTextureMatrix.isIdentityAs3x2();
        if (this.optimizeUVAllocation && v70 !== this._cachedIdentity3x2) {
          v69.markAllMaterialsAsDirty(1, p71 => p71.hasTexture(this));
        }
        return this._cachedTextureMatrix;
      }
      getReflectionTextureMatrix() {
        const v71 = this.YL();
        if (!v71) {
          return this._cachedReflectionTextureMatrix;
        }
        if (this.uOffset === this._cachedReflectionUOffset && this.vOffset === this._cachedReflectionVOffset && this.uScale === this._cachedReflectionUScale && this.vScale === this._cachedReflectionVScale && this.coordinatesMode === this._cachedReflectionCoordinatesMode) {
          if (this.coordinatesMode !== C3.PROJECTION_MODE) {
            return this._cachedReflectionTextureMatrix;
          }
          if (this._cachedReflectionProjectionMatrixId === v71.getProjectionMatrix().updateFlag) {
            return this._cachedReflectionTextureMatrix;
          }
        }
        this._cachedReflectionTextureMatrix ||= vP494.Matrix.Zero();
        this._projectionModeMatrix ||= vP494.Matrix.Zero();
        const v72 = this._cachedReflectionCoordinatesMode !== this.coordinatesMode;
        this._cachedReflectionUOffset = this.uOffset;
        this._cachedReflectionVOffset = this.vOffset;
        this._cachedReflectionUScale = this.uScale;
        this._cachedReflectionVScale = this.vScale;
        this._cachedReflectionCoordinatesMode = this.coordinatesMode;
        switch (this.coordinatesMode) {
          case C3.PLANAR_MODE:
            vP494.Matrix.IdentityToRef(this._cachedReflectionTextureMatrix);
            this._cachedReflectionTextureMatrix[0] = this.uScale;
            this._cachedReflectionTextureMatrix[5] = this.vScale;
            this._cachedReflectionTextureMatrix[12] = this.uOffset;
            this._cachedReflectionTextureMatrix[13] = this.vOffset;
            break;
          case C3.PROJECTION_MODE:
            {
              vP494.Matrix.FromValuesToRef(0.5, 0, 0, 0, 0, -0.5, 0, 0, 0, 0, 0, 0, 0.5, 0.5, 1, 1, this._projectionModeMatrix);
              const v73 = v71.getProjectionMatrix();
              this._cachedReflectionProjectionMatrixId = v73.updateFlag;
              v73.multiplyToRef(this._projectionModeMatrix, this._cachedReflectionTextureMatrix);
              break;
            }
          default:
            vP494.Matrix.IdentityToRef(this._cachedReflectionTextureMatrix);
        }
        if (v72) {
          v71.markAllMaterialsAsDirty(1, p72 => p72.hasTexture(this));
        }
        return this._cachedReflectionTextureMatrix;
      }
      clone() {
        const vO = {
          noMipmap: this._noMipmap,
          invertY: this._invertY,
          samplingMode: this.samplingMode,
          xC: undefined,
          onError: undefined,
          buffer: this._texture ? this._texture._buffer : undefined,
          deleteBuffer: this._deleteBuffer,
          format: this.textureFormat,
          mimeType: this.mimeType,
          loaderOptions: this._loaderOptions,
          creationFlags: this._creationFlags,
          useSRGBBuffer: this._useSRGBBuffer
        };
        return vP4913.b.Clone(() => new C3(this._texture ? this._texture.url : null, this.YL(), vO), this);
      }
      serialize() {
        const v74 = this.name;
        if (!C3.SerializeBuffers) {
          if (this.name.startsWith("data:")) {
            this.name = "";
          }
        }
        if (this.name.startsWith("data:") && this.url === this.name) {
          this.url = "";
        }
        const v75 = super.serialize(C3._SerializeInternalTextureUniqueId);
        if (!v75) {
          return null;
        }
        if (C3.SerializeBuffers || C3.ForceSerializeBuffers) {
          if (typeof this._buffer === "string" && this._buffer.startsWith("data:")) {
            v75.base64String = this._buffer;
            v75.name = v75.name.replace("data:", "");
          } else if (this.url && this.url.startsWith("data:") && this._buffer instanceof Uint8Array) {
            const v76 = this.mimeType || "image/png";
            v75.base64String = `data:${v76};base64,${(0, vP4911.n)(this._buffer)}`;
          } else if (C3.ForceSerializeBuffers || this.url && this.url.startsWith("blob:") || this._forceSerialize) {
            v75.base64String = !this._engine || this._engine._features.supportSyncTextureRead ? f2(this) : f3(this);
          }
        }
        v75.invertY = this._invertY;
        v75.samplingMode = this.samplingMode;
        v75._creationFlags = this._creationFlags;
        v75._useSRGBBuffer = this._useSRGBBuffer;
        if (C3._SerializeInternalTextureUniqueId) {
          v75.internalTextureUniqueId = this._texture?.uniqueId;
        }
        v75.internalTextureLabel = this._texture?.label;
        v75.noMipmap = this._noMipmap;
        this.name = v74;
        return v75;
      }
      getClassName() {
        return "Texture";
      }
      dispose() {
        super.dispose();
        this.onLoadObservable.clear();
        this._delayedOnLoad = null;
        this._delayedOnError = null;
        this._buffer = null;
      }
      static Parse(p73, p74, p75) {
        if (p73.customType) {
          const v77 = vP499.d.Instantiate(p73.customType).Parse(p73, p74, p75);
          if (p73.samplingMode && v77.updateSamplingMode && v77._samplingMode && v77._samplingMode !== p73.samplingMode) {
            v77.updateSamplingMode(p73.samplingMode);
          }
          return v77;
        }
        if (p73.isCube && !p73.isRenderTarget) {
          return C3._CubeTextureParser(p73, p74, p75);
        }
        const v78 = p73.internalTextureUniqueId !== undefined;
        if (!p73.name && !p73.isRenderTarget && !v78) {
          return null;
        }
        let v79;
        if (v78) {
          const v80 = p74.getEngine().getLoadedTexturesCache();
          for (const v81 of v80) {
            if (v81.uniqueId === p73.internalTextureUniqueId) {
              v79 = v81;
              break;
            }
          }
        }
        const vF3 = p76 => {
          if (p76 && p76._texture) {
            p76._texture._cachedWrapU = null;
            p76._texture._cachedWrapV = null;
            p76._texture._cachedWrapR = null;
          }
          if (p73.samplingMode) {
            const v82 = p73.samplingMode;
            if (p76 && p76.samplingMode !== v82) {
              p76.updateSamplingMode(v82);
            }
          }
          if (p76 && p73.animations) {
            for (let vLN03 = 0; vLN03 < p73.animations.length; vLN03++) {
              const v83 = p73.animations[vLN03];
              const v84 = (0, vP496.d)("BABYLON.Animation");
              if (v84) {
                p76.animations.push(v84.Parse(v83));
              }
            }
          }
          if (p76 && p76._texture) {
            if (v78 && !v79) {
              p76._texture._setUniqueId(p73.internalTextureUniqueId);
            }
            p76._texture.label = p73.internalTextureLabel;
          }
        };
        return vP4913.b.Parse(() => {
          let v85 = true;
          if (p73.noMipmap) {
            v85 = false;
          }
          if (p73.mirrorPlane) {
            const v86 = C3._CreateMirror(p73.name, p73.renderTargetSize, p74, v85);
            v86._waitingRenderList = p73.renderList;
            v86.mirrorPlane = vP4910.d.OL(p73.mirrorPlane);
            vF3(v86);
            return v86;
          }
          if (p73.isRenderTarget) {
            let v87 = null;
            if (p73.isCube) {
              if (p74.reflectionProbes) {
                for (let vLN04 = 0; vLN04 < p74.reflectionProbes.length; vLN04++) {
                  const v88 = p74.reflectionProbes[vLN04];
                  if (v88.name === p73.name) {
                    return v88.cubeTexture;
                  }
                }
              }
            } else {
              v87 = C3._CreateRenderTargetTexture(p73.name, p73.renderTargetSize, p74, v85, p73._creationFlags ?? 0);
              v87._waitingRenderList = p73.renderList;
            }
            vF3(v87);
            return v87;
          }
          if (p73.isVideo) {
            const v89 = C3._CreateVideoTexture(p75 + (p73.url || p73.name), p75 + (p73.src || p73.url), p74, v85, p73.invertY, p73.samplingMode, p73.settings || {});
            vF3(v89);
            return v89;
          }
          {
            let v90;
            if (p73.base64String && !v79) {
              var v91;
              v90 = C3.CreateFromBase64String(p73.base64String, p73.base64String, p74, !v85, p73.invertY, p73.samplingMode, () => {
                vF3(v90);
              }, p73._creationFlags ?? 0, (v91 = p73._useSRGBBuffer) !== null && v91 !== undefined && v91);
              v90.name = p73.name;
            } else {
              let v92;
              v92 = p73.name && (p73.name.indexOf("://") > 0 || p73.name.startsWith("data:")) ? p73.name : p75 + p73.name;
              if (p73.url && (p73.url.startsWith("data:") || C3.UseSerializedUrlIfAny)) {
                v92 = p73.url;
              }
              const vO2 = {
                noMipmap: !v85,
                invertY: p73.invertY,
                samplingMode: p73.samplingMode,
                xC: () => {
                  vF3(v90);
                },
                internalTexture: v79
              };
              v90 = new C3(v92, p74, vO2);
            }
            return v90;
          }
        }, p73, p74);
      }
      static CreateFromBase64String(p77, p78, p79, p80, p81, gC = C3.TRILINEAR_SAMPLINGMODE) {
        return new C3("data:" + p78, p79, p80, p81, gC, arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : null, arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : null, p77, false, arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 5, undefined, undefined, arguments.length > 9 ? arguments[9] : undefined, arguments.length > 10 ? arguments[10] : undefined);
      }
      static LoadFromDataString(p82, p83, p84, fC = false, ky) {
        let v93 = !(arguments.length > 5) || arguments[5] === undefined || arguments[5];
        let v94 = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : C3.TRILINEAR_SAMPLINGMODE;
        let v95 = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : null;
        let v96 = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : null;
        let v97 = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : 5;
        let v98 = arguments.length > 10 ? arguments[10] : undefined;
        let v99 = arguments.length > 11 ? arguments[11] : undefined;
        if (p82.substring(0, 5) !== "data:") {
          p82 = "data:" + p82;
        }
        return new C3(p82, p84, ky, v93, v94, v95, v96, p83, fC, v97, undefined, undefined, v98, v99);
      }
    }
    C3.SerializeBuffers = true;
    C3.ForceSerializeBuffers = false;
    C3.OnTextureLoadErrorObservable = new vP493.e();
    C3._SerializeInternalTextureUniqueId = false;
    C3._CubeTextureParser = (p85, p86, p87) => {
      throw (0, vP497.c)("CubeTexture");
    };
    C3._CreateMirror = (p88, p89, p90, p91) => {
      throw (0, vP497.c)("MirrorTexture");
    };
    C3._CreateRenderTargetTexture = (p92, p93, p94, p95, p96) => {
      throw (0, vP497.c)("RenderTargetTexture");
    };
    C3.NEAREST_SAMPLINGMODE = 1;
    C3.NEAREST_NEAREST_MIPLINEAR = 8;
    C3.BILINEAR_SAMPLINGMODE = 2;
    C3.LINEAR_LINEAR_MIPNEAREST = 11;
    C3.TRILINEAR_SAMPLINGMODE = 3;
    C3.LINEAR_LINEAR_MIPLINEAR = 3;
    C3.NEAREST_NEAREST_MIPNEAREST = 4;
    C3.NEAREST_LINEAR_MIPNEAREST = 5;
    C3.NEAREST_LINEAR_MIPLINEAR = 6;
    C3.NEAREST_LINEAR = 7;
    C3.NEAREST_NEAREST = 1;
    C3.LINEAR_NEAREST_MIPNEAREST = 9;
    C3.LINEAR_NEAREST_MIPLINEAR = 10;
    C3.LINEAR_LINEAR = 2;
    C3.LINEAR_NEAREST = 12;
    C3.EXPLICIT_MODE = 0;
    C3.SPHERICAL_MODE = 1;
    C3.PLANAR_MODE = 2;
    C3.CUBIC_MODE = 3;
    C3.PROJECTION_MODE = 4;
    C3.SKYBOX_MODE = 5;
    C3.INVCUBIC_MODE = 6;
    C3.EQUIRECTANGULAR_MODE = 7;
    C3.FIXED_EQUIRECTANGULAR_MODE = 8;
    C3.FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9;
    C3.CLAMP_ADDRESSMODE = 0;
    C3.WRAP_ADDRESSMODE = 1;
    C3.MIRROR_ADDRESSMODE = 2;
    C3.UseSerializedUrlIfAny = false;
    (0, vP49.d)([(0, vP492.F)()], C3.prototype, "url", undefined);
    (0, vP49.d)([(0, vP492.F)()], C3.prototype, "uOffset", undefined);
    (0, vP49.d)([(0, vP492.F)()], C3.prototype, "vOffset", undefined);
    (0, vP49.d)([(0, vP492.F)()], C3.prototype, "uScale", undefined);
    (0, vP49.d)([(0, vP492.F)()], C3.prototype, "vScale", undefined);
    (0, vP49.d)([(0, vP492.F)()], C3.prototype, "uAng", undefined);
    (0, vP49.d)([(0, vP492.F)()], C3.prototype, "vAng", undefined);
    (0, vP49.d)([(0, vP492.F)()], C3.prototype, "wAng", undefined);
    (0, vP49.d)([(0, vP492.F)()], C3.prototype, "uRotationCenter", undefined);
    (0, vP49.d)([(0, vP492.F)()], C3.prototype, "vRotationCenter", undefined);
    (0, vP49.d)([(0, vP492.F)()], C3.prototype, "wRotationCenter", undefined);
    (0, vP49.d)([(0, vP492.F)()], C3.prototype, "homogeneousRotationInUVTransform", undefined);
    (0, vP49.d)([(0, vP492.F)()], C3.prototype, "isBlocking", null);
    (0, vP496.g)("BABYLON.Texture", C3);
    vP4913.b._TextureParser = C3.Parse;
  },
  17013: (p97, p98, p99) => {
    p99.d(p98, {
      d: () => C4
    });
    var vP99 = p99(16973);
    class C4 {
      constructor(p100, p101, p102, p103) {
        this.normal = new vP99.bL(p100, p101, p102);
        this.d = p103;
      }
      cf() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d];
      }
      clone() {
        return new C4(this.normal.x, this.normal.y, this.normal.z, this.d);
      }
      getClassName() {
        return "Plane";
      }
      getHashCode() {
        let v100 = this.normal.getHashCode();
        v100 = v100 * 397 ^ this.d;
        return v100;
      }
      normalize() {
        const v101 = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let vLN05 = 0;
        if (v101 !== 0) {
          vLN05 = 1 / v101;
        }
        this.normal.x *= vLN05;
        this.normal.y *= vLN05;
        this.normal.z *= vLN05;
        this.d *= vLN05;
        return this;
      }
      transform(p104) {
        const v102 = C4._TmpMatrix;
        p104.invertToRef(v102);
        const v103 = v102.m;
        const v104 = this.normal.x;
        const v105 = this.normal.y;
        const v106 = this.normal.z;
        const v107 = this.d;
        const v108 = v104 * v103[0] + v105 * v103[1] + v106 * v103[2] + v107 * v103[3];
        const v109 = v104 * v103[4] + v105 * v103[5] + v106 * v103[6] + v107 * v103[7];
        const v110 = v104 * v103[8] + v105 * v103[9] + v106 * v103[10] + v107 * v103[11];
        const v111 = v104 * v103[12] + v105 * v103[13] + v106 * v103[14] + v107 * v103[15];
        return new C4(v108, v109, v110, v111);
      }
      dotCoordinate(p105) {
        return this.normal.x * p105.x + this.normal.y * p105.y + this.normal.z * p105.z + this.d;
      }
      copyFromPoints(p106, p107, p108) {
        const v112 = p107.x - p106.x;
        const v113 = p107.y - p106.y;
        const v114 = p107.z - p106.z;
        const v115 = p108.x - p106.x;
        const v116 = p108.y - p106.y;
        const v117 = p108.z - p106.z;
        const v118 = v113 * v117 - v114 * v116;
        const v119 = v114 * v115 - v112 * v117;
        const v120 = v112 * v116 - v113 * v115;
        const v121 = Math.sqrt(v118 * v118 + v119 * v119 + v120 * v120);
        let v122;
        v122 = v121 !== 0 ? 1 / v121 : 0;
        this.normal.x = v118 * v122;
        this.normal.y = v119 * v122;
        this.normal.z = v120 * v122;
        this.d = -(this.normal.x * p106.x + this.normal.y * p106.y + this.normal.z * p106.z);
        return this;
      }
      isFrontFacingTo(p109, p110) {
        return vP99.bL.Dot(this.normal, p109) <= p110;
      }
      signedDistanceTo(p111) {
        return vP99.bL.Dot(p111, this.normal) + this.d;
      }
      static OL(p112) {
        return new C4(p112[0], p112[1], p112[2], p112[3]);
      }
      static FromPoints(p113, p114, p115) {
        const v123 = new C4(0, 0, 0, 0);
        v123.copyFromPoints(p113, p114, p115);
        return v123;
      }
      static FromPositionAndNormal(p116, p117) {
        const v124 = new C4(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(p116, p117, v124);
      }
      static FromPositionAndNormalToRef(p118, p119, p120) {
        p120.normal.fC(p119);
        p120.normal.normalize();
        p120.d = -p118.dot(p120.normal);
        return p120;
      }
      static SignedDistanceToPlaneFromPositionAndNormal(p121, p122, p123) {
        const v125 = -(p122.x * p121.x + p122.y * p121.y + p122.z * p121.z);
        return vP99.bL.Dot(p123, p122) + v125;
      }
    }
    C4._TmpMatrix = vP99.Matrix.Identity();
  },
  16994: (p124, p125, p126) => {
    p126.d(p125, {
      d: () => C5
    });
    class C5 {
      constructor(p127, p128) {
        this.width = p127;
        this.height = p128;
      }
      toString() {
        return `{W: ${this.width}, H: ${this.height}}`;
      }
      getClassName() {
        return "Size";
      }
      getHashCode() {
        let v126 = this.width | 0;
        v126 = v126 * 397 ^ this.height;
        return v126;
      }
      fC(p129) {
        this.width = p129.width;
        this.height = p129.height;
      }
      jg(p130, p131) {
        this.width = p130;
        this.height = p131;
        return this;
      }
      set(p132, p133) {
        return this.jg(p132, p133);
      }
      multiplyByFloats(p134, p135) {
        return new C5(this.width * p134, this.height * p135);
      }
      clone() {
        return new C5(this.width, this.height);
      }
      equals(p136) {
        return !!p136 && this.width === p136.width && this.height === p136.height;
      }
      get surface() {
        return this.width * this.height;
      }
      static Zero() {
        return new C5(0, 0);
      }
      add(p137) {
        return new C5(this.width + p137.width, this.height + p137.height);
      }
      Wy(p138) {
        return new C5(this.width - p138.width, this.height - p138.height);
      }
      scale(p139) {
        return new C5(this.width * p139, this.height * p139);
      }
      static Lerp(p140, p141, p142) {
        const v127 = p140.width + (p141.width - p140.width) * p142;
        const v128 = p140.height + (p141.height - p140.height) * p142;
        return new C5(v127, v128);
      }
    }
  },
  16971: (p143, p144, p145) => {
    p145.d(p144, {
      e: () => f4,
      g: () => AC
    });
    const vO3 = {};
    const vO4 = {};
    function f4(p146) {
      const v129 = p146.getClassName();
      vO4[v129] ||= {};
      return vO4[v129];
    }
    function AC(p147) {
      const v130 = p147.getClassName();
      if (vO3[v130]) {
        return vO3[v130];
      }
      vO3[v130] = {};
      const v131 = vO3[v130];
      let vP147 = p147;
      let vV130 = v130;
      while (vV130) {
        const v132 = vO4[vV130];
        for (const v133 in v132) {
          v131[v133] = v132[v133];
        }
        let v134;
        let v135 = false;
        do {
          v134 = Object.getPrototypeOf(vP147);
          if (!v134.getClassName) {
            v135 = true;
            break;
          }
          if (v134.getClassName() !== vV130) {
            break;
          }
          vP147 = v134;
        } while (v134);
        if (v135) {
          break;
        }
        vV130 = v134.getClassName();
        vP147 = v134;
      }
      return v131;
    }
  },
  16965: (p148, p149, p150) => {
    p150.d(p149, {
      D: () => f13,
      F: () => f8,
      e: () => f7,
      h: () => f20,
      k: () => f15,
      l: () => f10,
      m: () => f16,
      n: () => f11,
      q: () => f17,
      u: () => f19,
      v: () => f14,
      w: () => f18,
      y: () => f9,
      z: () => f12
    });
    var vP150 = p150(16971);
    function f6(p151, p152) {
      return (p153, p154) => {
        const v136 = (0, vP150.e)(p153);
        v136[p154] ||= {
          type: p151,
          sourceName: p152
        };
      };
    }
    function f7(p155) {
      return function (p156, yC = null) {
        return (p157, p158) => {
          const v137 = yC || "_" + p158;
          Object.defineProperty(p157, p158, {
            get: function () {
              return this[v137];
            },
            set: function (p159) {
              if (typeof this[v137]?.equals !== "function" || !this[v137].equals(p159)) {
                if (this[v137] !== p159) {
                  this[v137] = p159;
                  p157[p156].apply(this);
                }
              }
            },
            enumerable: true,
            configurable: true
          });
        };
      }(p155, arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null);
    }
    function f8(p160) {
      return f6(0, p160);
    }
    function f9(p161) {
      return f6(1, p161);
    }
    function f10(p162) {
      return f6(2, p162);
    }
    function f11(p163) {
      return f6(3, p163);
    }
    function f12(p164) {
      return f6(4, p164);
    }
    function f13(p165) {
      return f6(5, p165);
    }
    function f14(p166) {
      return f6(6, p166);
    }
    function f15(p167) {
      return f6(7, p167);
    }
    function f16(p168) {
      return f6(8, p168);
    }
    function f17(p169) {
      return f6(9, p169);
    }
    function f18(p170) {
      return f6(10, p170);
    }
    function f19(p171) {
      return f6(12, p171);
    }
    function f20(p172, p173, p174, p175) {
      const v138 = p174.value;
      p174.value = function () {
        let vV138 = v138;
        if (typeof _native !== "undefined" && _native[p173]) {
          const v139 = _native[p173];
          vV138 = p175 ? function () {
            if (p175(...arguments)) {
              return v139(...arguments);
            } else {
              return v138(...arguments);
            }
          } : v139;
        }
        p172[p173] = vV138;
        return vV138(...arguments);
      };
    }
    f20.filter = function (p176) {
      return (p177, p178, p179) => f20(p177, p178, p179, p176);
    };
  },
  17000: (p180, p181, p182) => {
    p182.d(p181, {
      b: () => C6
    });
    var vP182 = p182(16829);
    var vP1822 = p182(17002);
    var vP1823 = p182(17009);
    var vP1824 = p182(16973);
    var vP1825 = p182(16971);
    const vF4 = function (p183, p184, p185, fC = {}) {
      const vP183 = p183();
      if (vP1822.d && vP1822.d.HasTags(p184)) {
        vP1822.d.AddTagsTo(vP183, vP1822.d.GetTags(p184, true));
      }
      const v140 = (0, vP1825.g)(vP183);
      const vO5 = {};
      for (const v141 in v140) {
        const v142 = v140[v141];
        const v143 = p184[v141];
        const v144 = v142.type;
        if (v143 !== undefined && v143 !== null && (v141 !== "uniqueId" || C6.AllowLoadingUniqueId)) {
          switch (v144) {
            case 0:
            case 6:
            case 9:
            case 11:
              vP183[v141] = v143;
              break;
            case 1:
              if (fC.cloneTexturesOnlyOnce && vO5[v143.uniqueId]) {
                vP183[v141] = vO5[v143.uniqueId];
              } else {
                vP183[v141] = p185 || v143.isRenderTarget ? v143 : v143.clone();
                vO5[v143.uniqueId] = vP183[v141];
              }
              break;
            case 2:
            case 3:
            case 4:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
              vP183[v141] = p185 ? v143 : v143.clone();
          }
        }
      }
      return vP183;
    };
    class C6 {
      static AppendSerializedAnimations(p186, p187) {
        if (p186.animations) {
          p187.animations = [];
          for (let vLN06 = 0; vLN06 < p186.animations.length; vLN06++) {
            const v145 = p186.animations[vLN06];
            p187.animations.push(v145.serialize());
          }
        }
      }
      static Serialize(p188, p189) {
        p189 ||= {};
        if (vP1822.d) {
          p189.tags = vP1822.d.GetTags(p188);
        }
        const v146 = (0, vP1825.g)(p188);
        for (const v147 in v146) {
          const v148 = v146[v147];
          const v149 = v148.sourceName || v147;
          const v150 = v148.type;
          const v151 = p188[v147];
          if (v151 !== undefined && v151 !== null && (v147 !== "uniqueId" || C6.AllowLoadingUniqueId)) {
            switch (v150) {
              case 0:
                p189[v149] = v151;
                break;
              case 1:
              case 3:
              case 7:
              case 9:
                p189[v149] = v151.serialize();
                break;
              case 2:
              case 4:
              case 5:
              case 8:
              case 10:
              case 12:
                p189[v149] = v151.cf();
                break;
              case 6:
              case 11:
                p189[v149] = v151.id;
            }
          }
        }
        return p189;
      }
      static ParseProperties(p190, p191, p192, p193) {
        p193 ||= "";
        const v152 = (0, vP1825.g)(p191);
        for (const v153 in v152) {
          const v154 = v152[v153];
          const v155 = p190[v154.sourceName || v153];
          const v156 = v154.type;
          if (v155 !== undefined && v155 !== null && (v153 !== "uniqueId" || C6.AllowLoadingUniqueId)) {
            const vP191 = p191;
            switch (v156) {
              case 0:
                vP191[v153] = v155;
                break;
              case 1:
                if (p192) {
                  vP191[v153] = C6._TextureParser(v155, p192, p193);
                }
                break;
              case 2:
                vP191[v153] = vP1823.eL.OL(v155);
                break;
              case 3:
                vP191[v153] = C6._FresnelParametersParser(v155);
                break;
              case 4:
                vP191[v153] = vP1824.Vector2.OL(v155);
                break;
              case 5:
                vP191[v153] = vP1824.bL.OL(v155);
                break;
              case 6:
                if (p192) {
                  vP191[v153] = p192.getLastMeshById(v155);
                }
                break;
              case 7:
                vP191[v153] = C6._ColorCurvesParser(v155);
                break;
              case 8:
                vP191[v153] = vP1823.Xg.OL(v155);
                break;
              case 9:
                vP191[v153] = C6._ImageProcessingConfigurationParser(v155);
                break;
              case 10:
                vP191[v153] = vP1824.Quaternion.OL(v155);
                break;
              case 11:
                if (p192) {
                  vP191[v153] = p192.getCameraById(v155);
                }
                break;
              case 12:
                vP191[v153] = vP1824.Matrix.OL(v155);
            }
          }
        }
      }
      static Parse(p194, p195, p196, fC = null) {
        const vP194 = p194();
        if (vP1822.d) {
          vP1822.d.AddTagsTo(vP194, p195.tags);
        }
        C6.ParseProperties(p195, vP194, p196, fC);
        return vP194;
      }
      static Clone(p197, p198) {
        return vF4(p197, p198, false, arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {});
      }
      static Instanciate(p199, p200) {
        return vF4(p199, p200, true);
      }
    }
    C6.AllowLoadingUniqueId = false;
    C6._ImageProcessingConfigurationParser = p201 => {
      throw (0, vP182.c)("ImageProcessingConfiguration");
    };
    C6._FresnelParametersParser = p202 => {
      throw (0, vP182.c)("FresnelParameters");
    };
    C6._ColorCurvesParser = p203 => {
      throw (0, vP182.c)("ColorCurves");
    };
    C6._TextureParser = (p204, p205, p206) => {
      throw (0, vP182.c)("Texture");
    };
  },
  17002: (p207, p208, p209) => {
    p209.d(p208, {
      d: () => C8
    });
    class C7 {
      static Eval(p210, p211) {
        return (p210 = p210.match(/\([^()]*\)/g) ? p210.replace(/\([^()]*\)/g, p212 => {
          p212 = p212.slice(1, p212.length - 1);
          return C7._HandleParenthesisContent(p212, p211);
        }) : C7._HandleParenthesisContent(p210, p211)) === "true" || p210 !== "false" && C7.Eval(p210, p211);
      }
      static _HandleParenthesisContent(p213, p214) {
        let v157;
        p214 = p214 || (p215 => p215 === "true");
        const v158 = p213.split("||");
        for (const v159 in v158) {
          if (Object.prototype.hasOwnProperty.call(v158, v159)) {
            let v160 = C7._SimplifyNegation(v158[v159].trim());
            const v161 = v160.split("&&");
            if (v161.length > 1) {
              for (let vLN07 = 0; vLN07 < v161.length; ++vLN07) {
                const v162 = C7._SimplifyNegation(v161[vLN07].trim());
                v157 = v162 !== "true" && v162 !== "false" ? v162[0] === "!" ? !p214(v162.substring(1)) : p214(v162) : v162 === "true";
                if (!v157) {
                  v160 = "false";
                  break;
                }
              }
            }
            if (v157 || v160 === "true") {
              v157 = true;
              break;
            }
            v157 = v160 !== "true" && v160 !== "false" ? v160[0] === "!" ? !p214(v160.substring(1)) : p214(v160) : v160 === "true";
          }
        }
        if (v157) {
          return "true";
        } else {
          return "false";
        }
      }
      static _SimplifyNegation(p216) {
        if ((p216 = (p216 = p216.replace(/^[\s!]+/, p217 => (p217 = p217.replace(/[\s]/g, () => "")).length % 2 ? "!" : "")).trim()) === "!true") {
          p216 = "false";
        } else if (p216 === "!false") {
          p216 = "true";
        }
        return p216;
      }
    }
    class C8 {
      static EnableFor(p218) {
        p218._tags = p218._tags || {};
        p218.hasTags = () => C8.HasTags(p218);
        p218.addTags = p219 => C8.AddTagsTo(p218, p219);
        p218.removeTags = p220 => C8.RemoveTagsFrom(p218, p220);
        p218.matchesTagsQuery = p221 => C8.MatchesQuery(p218, p221);
      }
      static DisableFor(p222) {
        delete p222._tags;
        delete p222.hasTags;
        delete p222.addTags;
        delete p222.removeTags;
        delete p222.matchesTagsQuery;
      }
      static HasTags(p223) {
        if (!p223._tags) {
          return false;
        }
        const v163 = p223._tags;
        for (const v164 in v163) {
          if (Object.prototype.hasOwnProperty.call(v163, v164)) {
            return true;
          }
        }
        return false;
      }
      static GetTags(p224) {
        let v165 = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
        if (!p224._tags) {
          return null;
        }
        if (v165) {
          const vA = [];
          for (const v166 in p224._tags) {
            if (Object.prototype.hasOwnProperty.call(p224._tags, v166) && p224._tags[v166] === true) {
              vA.push(v166);
            }
          }
          return vA.join(" ");
        }
        return p224._tags;
      }
      static AddTagsTo(p225, p226) {
        if (!p226) {
          return;
        }
        if (typeof p226 !== "string") {
          return;
        }
        const v167 = p226.split(" ");
        for (const v168 of v167) {
          C8._AddTagTo(p225, v168);
        }
      }
      static _AddTagTo(p227, p228) {
        if ((p228 = p228.trim()) !== "" && p228 !== "true" && p228 !== "false") {
          if (!p228.match(/[\s]/) && !p228.match(/^([!]|([|]|[&]){2})/)) {
            C8.EnableFor(p227);
            p227._tags[p228] = true;
          }
        }
      }
      static RemoveTagsFrom(p229, p230) {
        if (!C8.HasTags(p229)) {
          return;
        }
        const v169 = p230.split(" ");
        for (const v170 in v169) {
          C8._RemoveTagFrom(p229, v169[v170]);
        }
      }
      static _RemoveTagFrom(p231, p232) {
        delete p231._tags[p232];
      }
      static MatchesQuery(p233, p234) {
        return p234 === undefined || (p234 === "" ? C8.HasTags(p233) : C7.Eval(p234, p235 => C8.HasTags(p233) && p233._tags[p235]));
      }
    }
  },
  16960: (p236, p237, p238) => {
    p238.d(p237, {
      d: () => fC
    });
    function fC(p239, p240, p241, p242) {
      var v171;
      var v172 = arguments.length;
      var v173 = v172 < 3 ? p240 : p242 === null ? p242 = Object.getOwnPropertyDescriptor(p240, p241) : p242;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        v173 = Reflect.decorate(p239, p240, p241, p242);
      } else {
        for (var v174 = p239.length - 1; v174 >= 0; v174--) {
          if (v171 = p239[v174]) {
            v173 = (v172 < 3 ? v171(v173) : v172 > 3 ? v171(p240, p241, v173) : v171(p240, p241)) || v173;
          }
        }
      }
      if (v172 > 3 && v173) {
        Object.defineProperty(p240, p241, v173);
      }
      return v173;
    }
    Object.create;
    Object.create;
  }
};
//# sourceMappingURL=pz8l4l.13.b61ecd9a.chunk.js.map
//# debugId=7fc28ed0-2ac4-57ac-b65c-f3d62eb096d3