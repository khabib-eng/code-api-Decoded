(function () {
  try {
    var v = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : {};
    var v2 = new v.Error().stack;
    if (v2) {
      v._sentryDebugIds = v._sentryDebugIds || {};
      v._sentryDebugIds[v2] = "6a129901-9b8d-57c1-abc7-9fb5490bcd8e";
    }
  } catch (e2) {}
})();
export const id = 8;
export const ids = [8];
export const modules = {
  16876: (p, p2, p3) => {
    p3.d(p2, {
      b: () => C5
    });
    var vP3 = p3(16837);
    var vP32 = p3(16811);
    var vP33 = p3(16878);
    var vP34 = p3(16905);
    var vP35 = p3(16821);
    class C {
      constructor() {
        let v3 = !(arguments.length > 0) || arguments[0] === undefined || arguments[0];
        this._isDepthTestDirty = false;
        this._isDepthMaskDirty = false;
        this._isDepthFuncDirty = false;
        this._isCullFaceDirty = false;
        this._isCullDirty = false;
        this._isZOffsetDirty = false;
        this._isFrontFaceDirty = false;
        if (v3) {
          this.reset();
        }
      }
      get isDirty() {
        return this._isDepthFuncDirty || this._isDepthTestDirty || this._isDepthMaskDirty || this._isCullFaceDirty || this._isCullDirty || this._isZOffsetDirty || this._isFrontFaceDirty;
      }
      get zOffset() {
        return this._zOffset;
      }
      set zOffset(p4) {
        if (this._zOffset !== p4) {
          this._zOffset = p4;
          this._isZOffsetDirty = true;
        }
      }
      get zOffsetUnits() {
        return this._zOffsetUnits;
      }
      set zOffsetUnits(p5) {
        if (this._zOffsetUnits !== p5) {
          this._zOffsetUnits = p5;
          this._isZOffsetDirty = true;
        }
      }
      get cullFace() {
        return this._cullFace;
      }
      set cullFace(p6) {
        if (this._cullFace !== p6) {
          this._cullFace = p6;
          this._isCullFaceDirty = true;
        }
      }
      get cull() {
        return this._cull;
      }
      set cull(p7) {
        if (this._cull !== p7) {
          this._cull = p7;
          this._isCullDirty = true;
        }
      }
      get depthFunc() {
        return this._depthFunc;
      }
      set depthFunc(p8) {
        if (this._depthFunc !== p8) {
          this._depthFunc = p8;
          this._isDepthFuncDirty = true;
        }
      }
      get depthMask() {
        return this._depthMask;
      }
      set depthMask(p9) {
        if (this._depthMask !== p9) {
          this._depthMask = p9;
          this._isDepthMaskDirty = true;
        }
      }
      get depthTest() {
        return this._depthTest;
      }
      set depthTest(p10) {
        if (this._depthTest !== p10) {
          this._depthTest = p10;
          this._isDepthTestDirty = true;
        }
      }
      get frontFace() {
        return this._frontFace;
      }
      set frontFace(p11) {
        if (this._frontFace !== p11) {
          this._frontFace = p11;
          this._isFrontFaceDirty = true;
        }
      }
      reset() {
        this._depthMask = true;
        this._depthTest = true;
        this._depthFunc = null;
        this._cullFace = null;
        this._cull = null;
        this._zOffset = 0;
        this._zOffsetUnits = 0;
        this._frontFace = null;
        this._isDepthTestDirty = true;
        this._isDepthMaskDirty = true;
        this._isDepthFuncDirty = false;
        this._isCullFaceDirty = false;
        this._isCullDirty = false;
        this._isZOffsetDirty = true;
        this._isFrontFaceDirty = false;
      }
      apply(p12) {
        if (this.isDirty) {
          if (this._isCullDirty) {
            if (this.cull) {
              p12.enable(p12.CULL_FACE);
            } else {
              p12.disable(p12.CULL_FACE);
            }
            this._isCullDirty = false;
          }
          if (this._isCullFaceDirty) {
            p12.cullFace(this.cullFace);
            this._isCullFaceDirty = false;
          }
          if (this._isDepthMaskDirty) {
            p12.depthMask(this.depthMask);
            this._isDepthMaskDirty = false;
          }
          if (this._isDepthTestDirty) {
            if (this.depthTest) {
              p12.enable(p12.DEPTH_TEST);
            } else {
              p12.disable(p12.DEPTH_TEST);
            }
            this._isDepthTestDirty = false;
          }
          if (this._isDepthFuncDirty) {
            p12.depthFunc(this.depthFunc);
            this._isDepthFuncDirty = false;
          }
          if (this._isZOffsetDirty) {
            if (this.zOffset || this.zOffsetUnits) {
              p12.enable(p12.POLYGON_OFFSET_FILL);
              p12.polygonOffset(this.zOffset, this.zOffsetUnits);
            } else {
              p12.disable(p12.POLYGON_OFFSET_FILL);
            }
            this._isZOffsetDirty = false;
          }
          if (this._isFrontFaceDirty) {
            p12.frontFace(this.frontFace);
            this._isFrontFaceDirty = false;
          }
        }
      }
    }
    class C2 {
      get isDirty() {
        return this._isStencilTestDirty || this._isStencilMaskDirty || this._isStencilFuncDirty || this._isStencilOpDirty;
      }
      get func() {
        return this._func;
      }
      set func(p13) {
        if (this._func !== p13) {
          this._func = p13;
          this._isStencilFuncDirty = true;
        }
      }
      get funcRef() {
        return this._funcRef;
      }
      set funcRef(p14) {
        if (this._funcRef !== p14) {
          this._funcRef = p14;
          this._isStencilFuncDirty = true;
        }
      }
      get funcMask() {
        return this._funcMask;
      }
      set funcMask(p15) {
        if (this._funcMask !== p15) {
          this._funcMask = p15;
          this._isStencilFuncDirty = true;
        }
      }
      get opStencilFail() {
        return this._opStencilFail;
      }
      set opStencilFail(p16) {
        if (this._opStencilFail !== p16) {
          this._opStencilFail = p16;
          this._isStencilOpDirty = true;
        }
      }
      get opDepthFail() {
        return this._opDepthFail;
      }
      set opDepthFail(p17) {
        if (this._opDepthFail !== p17) {
          this._opDepthFail = p17;
          this._isStencilOpDirty = true;
        }
      }
      get opStencilDepthPass() {
        return this._opStencilDepthPass;
      }
      set opStencilDepthPass(p18) {
        if (this._opStencilDepthPass !== p18) {
          this._opStencilDepthPass = p18;
          this._isStencilOpDirty = true;
        }
      }
      get mask() {
        return this._mask;
      }
      set mask(p19) {
        if (this._mask !== p19) {
          this._mask = p19;
          this._isStencilMaskDirty = true;
        }
      }
      get enabled() {
        return this._enabled;
      }
      set enabled(p20) {
        if (this._enabled !== p20) {
          this._enabled = p20;
          this._isStencilTestDirty = true;
        }
      }
      constructor() {
        let v4 = !(arguments.length > 0) || arguments[0] === undefined || arguments[0];
        this._isStencilTestDirty = false;
        this._isStencilMaskDirty = false;
        this._isStencilFuncDirty = false;
        this._isStencilOpDirty = false;
        this.useStencilGlobalOnly = false;
        if (v4) {
          this.reset();
        }
      }
      reset() {
        var v5;
        this.stencilMaterial = undefined;
        if ((v5 = this.stencilGlobal) !== null && v5 !== undefined) {
          v5.reset();
        }
        this._isStencilTestDirty = true;
        this._isStencilMaskDirty = true;
        this._isStencilFuncDirty = true;
        this._isStencilOpDirty = true;
      }
      apply(p21) {
        var v6;
        if (!p21) {
          return;
        }
        const v7 = !this.useStencilGlobalOnly && (v6 = this.stencilMaterial) !== null && v6 !== undefined && !!v6.enabled;
        this.enabled = v7 ? this.stencilMaterial.enabled : this.stencilGlobal.enabled;
        this.func = v7 ? this.stencilMaterial.func : this.stencilGlobal.func;
        this.funcRef = v7 ? this.stencilMaterial.funcRef : this.stencilGlobal.funcRef;
        this.funcMask = v7 ? this.stencilMaterial.funcMask : this.stencilGlobal.funcMask;
        this.opStencilFail = v7 ? this.stencilMaterial.opStencilFail : this.stencilGlobal.opStencilFail;
        this.opDepthFail = v7 ? this.stencilMaterial.opDepthFail : this.stencilGlobal.opDepthFail;
        this.opStencilDepthPass = v7 ? this.stencilMaterial.opStencilDepthPass : this.stencilGlobal.opStencilDepthPass;
        this.mask = v7 ? this.stencilMaterial.mask : this.stencilGlobal.mask;
        if (this.isDirty) {
          if (this._isStencilTestDirty) {
            if (this.enabled) {
              p21.enable(p21.STENCIL_TEST);
            } else {
              p21.disable(p21.STENCIL_TEST);
            }
            this._isStencilTestDirty = false;
          }
          if (this._isStencilMaskDirty) {
            p21.stencilMask(this.mask);
            this._isStencilMaskDirty = false;
          }
          if (this._isStencilFuncDirty) {
            p21.stencilFunc(this.func, this.funcRef, this.funcMask);
            this._isStencilFuncDirty = false;
          }
          if (this._isStencilOpDirty) {
            p21.stencilOp(this.opStencilFail, this.opDepthFail, this.opStencilDepthPass);
            this._isStencilOpDirty = false;
          }
        }
      }
    }
    class C3 {
      constructor() {
        this.reset();
      }
      reset() {
        this.enabled = false;
        this.mask = 255;
        this.func = C3.ALWAYS;
        this.funcRef = 1;
        this.funcMask = 255;
        this.opStencilFail = C3.KEEP;
        this.opDepthFail = C3.KEEP;
        this.opStencilDepthPass = C3.REPLACE;
      }
      get stencilFunc() {
        return this.func;
      }
      set stencilFunc(p22) {
        this.func = p22;
      }
      get stencilFuncRef() {
        return this.funcRef;
      }
      set stencilFuncRef(p23) {
        this.funcRef = p23;
      }
      get stencilFuncMask() {
        return this.funcMask;
      }
      set stencilFuncMask(p24) {
        this.funcMask = p24;
      }
      get stencilOpStencilFail() {
        return this.opStencilFail;
      }
      set stencilOpStencilFail(p25) {
        this.opStencilFail = p25;
      }
      get stencilOpDepthFail() {
        return this.opDepthFail;
      }
      set stencilOpDepthFail(p26) {
        this.opDepthFail = p26;
      }
      get stencilOpStencilDepthPass() {
        return this.opStencilDepthPass;
      }
      set stencilOpStencilDepthPass(p27) {
        this.opStencilDepthPass = p27;
      }
      get stencilMask() {
        return this.mask;
      }
      set stencilMask(p28) {
        this.mask = p28;
      }
      get stencilTest() {
        return this.enabled;
      }
      set stencilTest(p29) {
        this.enabled = p29;
      }
    }
    C3.ALWAYS = 519;
    C3.KEEP = 7680;
    C3.REPLACE = 7681;
    class C4 {
      constructor() {
        this._blendFunctionParameters = new Array(4);
        this._blendEquationParameters = new Array(2);
        this._blendConstants = new Array(4);
        this._isBlendConstantsDirty = false;
        this._alphaBlend = false;
        this._isAlphaBlendDirty = false;
        this._isBlendFunctionParametersDirty = false;
        this._isBlendEquationParametersDirty = false;
        this.reset();
      }
      get isDirty() {
        return this._isAlphaBlendDirty || this._isBlendFunctionParametersDirty || this._isBlendEquationParametersDirty;
      }
      get alphaBlend() {
        return this._alphaBlend;
      }
      set alphaBlend(p30) {
        if (this._alphaBlend !== p30) {
          this._alphaBlend = p30;
          this._isAlphaBlendDirty = true;
        }
      }
      setAlphaBlendConstants(p31, p32, p33, p34) {
        if (this._blendConstants[0] !== p31 || this._blendConstants[1] !== p32 || this._blendConstants[2] !== p33 || this._blendConstants[3] !== p34) {
          this._blendConstants[0] = p31;
          this._blendConstants[1] = p32;
          this._blendConstants[2] = p33;
          this._blendConstants[3] = p34;
          this._isBlendConstantsDirty = true;
        }
      }
      setAlphaBlendFunctionParameters(p35, p36, p37, p38) {
        if (this._blendFunctionParameters[0] !== p35 || this._blendFunctionParameters[1] !== p36 || this._blendFunctionParameters[2] !== p37 || this._blendFunctionParameters[3] !== p38) {
          this._blendFunctionParameters[0] = p35;
          this._blendFunctionParameters[1] = p36;
          this._blendFunctionParameters[2] = p37;
          this._blendFunctionParameters[3] = p38;
          this._isBlendFunctionParametersDirty = true;
        }
      }
      setAlphaEquationParameters(p39, p40) {
        if (this._blendEquationParameters[0] !== p39 || this._blendEquationParameters[1] !== p40) {
          this._blendEquationParameters[0] = p39;
          this._blendEquationParameters[1] = p40;
          this._isBlendEquationParametersDirty = true;
        }
      }
      reset() {
        this._alphaBlend = false;
        this._blendFunctionParameters[0] = null;
        this._blendFunctionParameters[1] = null;
        this._blendFunctionParameters[2] = null;
        this._blendFunctionParameters[3] = null;
        this._blendEquationParameters[0] = null;
        this._blendEquationParameters[1] = null;
        this._blendConstants[0] = null;
        this._blendConstants[1] = null;
        this._blendConstants[2] = null;
        this._blendConstants[3] = null;
        this._isAlphaBlendDirty = true;
        this._isBlendFunctionParametersDirty = false;
        this._isBlendEquationParametersDirty = false;
        this._isBlendConstantsDirty = false;
      }
      apply(p41) {
        if (this.isDirty) {
          if (this._isAlphaBlendDirty) {
            if (this._alphaBlend) {
              p41.enable(p41.BLEND);
            } else {
              p41.disable(p41.BLEND);
            }
            this._isAlphaBlendDirty = false;
          }
          if (this._isBlendFunctionParametersDirty) {
            p41.blendFuncSeparate(this._blendFunctionParameters[0], this._blendFunctionParameters[1], this._blendFunctionParameters[2], this._blendFunctionParameters[3]);
            this._isBlendFunctionParametersDirty = false;
          }
          if (this._isBlendEquationParametersDirty) {
            p41.blendEquationSeparate(this._blendEquationParameters[0], this._blendEquationParameters[1]);
            this._isBlendEquationParametersDirty = false;
          }
          if (this._isBlendConstantsDirty) {
            p41.blendColor(this._blendConstants[0], this._blendConstants[1], this._blendConstants[2], this._blendConstants[3]);
            this._isBlendConstantsDirty = false;
          }
        }
      }
    }
    var vP36 = p3(16829);
    var vP37 = p3(16909);
    var vP38 = p3(16805);
    var vP39 = p3(16796);
    var vP310 = p3(16864);
    var vP311 = p3(16917);
    function f(p42, p43) {
      if ((0, vP38.k)()) {
        const {
          requestAnimationFrame: IC
        } = p43 || window;
        if (typeof IC === "function") {
          return IC(p42);
        }
      } else if (typeof requestAnimationFrame === "function") {
        return requestAnimationFrame(p42);
      }
      return setTimeout(p42, 16);
    }
    class C5 {
      get frameId() {
        return this._frameId;
      }
      get isWebGPU() {
        return this._isWebGPU;
      }
      _getShaderProcessor(p44) {
        return this._shaderProcessor;
      }
      get shaderPlatformName() {
        return this._shaderPlatformName;
      }
      _clearEmptyResources() {
        this._emptyTexture = null;
        this._emptyCubeTexture = null;
        this._emptyTexture3D = null;
        this._emptyTexture2DArray = null;
      }
      get GI() {
        return this._useReverseDepthBuffer;
      }
      set GI(p45) {
        if (p45 !== this._useReverseDepthBuffer) {
          this._useReverseDepthBuffer = p45;
          this._depthCullingState.depthFunc = p45 ? 518 : 515;
        }
      }
      setColorWrite(p46) {
        if (p46 !== this._colorWrite) {
          this._colorWriteChanged = true;
          this._colorWrite = p46;
        }
      }
      getColorWrite() {
        return this._colorWrite;
      }
      get depthCullingState() {
        return this._depthCullingState;
      }
      get alphaState() {
        return this._alphaState;
      }
      get stencilState() {
        return this._stencilState;
      }
      get stencilStateComposer() {
        return this._stencilStateComposer;
      }
      _getGlobalDefines(p47) {
        if (p47) {
          if (this.isNDCHalfZRange) {
            p47.IS_NDC_HALF_ZRANGE = "";
          } else {
            delete p47.IS_NDC_HALF_ZRANGE;
          }
          if (this.GI) {
            p47.USE_REVERSE_DEPTHBUFFER = "";
          } else {
            delete p47.USE_REVERSE_DEPTHBUFFER;
          }
          if (this.useExactSrgbConversions) {
            p47.USE_EXACT_SRGB_CONVERSIONS = "";
          } else {
            delete p47.USE_EXACT_SRGB_CONVERSIONS;
          }
          return;
        }
        {
          let vLS = "";
          if (this.isNDCHalfZRange) {
            vLS += "#define IS_NDC_HALF_ZRANGE";
          }
          if (this.GI) {
            if (vLS) {
              vLS += "\n";
            }
            vLS += "#define USE_REVERSE_DEPTHBUFFER";
          }
          if (this.useExactSrgbConversions) {
            if (vLS) {
              vLS += "\n";
            }
            vLS += "#define USE_EXACT_SRGB_CONVERSIONS";
          }
          return vLS;
        }
      }
      _rebuildInternalTextures() {
        const v8 = this._internalTexturesCache.slice();
        for (const v9 of v8) {
          v9._rebuild();
        }
      }
      _rebuildRenderTargetWrappers() {
        const v10 = this._renderTargetWrapperCache.slice();
        for (const v11 of v10) {
          v11._rebuild();
        }
      }
      _rebuildEffects() {
        for (const v12 in this._compiledEffects) {
          const v13 = this._compiledEffects[v12];
          v13._pipelineContext = null;
          v13._prepareEffect();
        }
        vP33.Effect.ResetCache();
      }
      _rebuildGraphicsResources() {
        var v14;
        this.wipeCaches(true);
        this._rebuildEffects();
        if ((v14 = this._rebuildComputeEffects) !== null && v14 !== undefined) {
          v14.call(this);
        }
        this._rebuildBuffers();
        this._rebuildInternalTextures();
        this._rebuildTextures();
        this._rebuildRenderTargetWrappers();
        this.wipeCaches(true);
      }
      _flagContextRestored() {
        vP32.e.Warn(this.name + " context successfully restored.");
        this.onContextRestoredObservable.notifyObservers(this);
        this._contextWasLost = false;
      }
      _restoreEngineAfterContextLost(p48) {
        setTimeout(() => {
          this._clearEmptyResources();
          const v15 = this._depthCullingState.depthTest;
          const v16 = this._depthCullingState.depthFunc;
          const v17 = this._depthCullingState.depthMask;
          const v18 = this._stencilState.stencilTest;
          p48();
          this._rebuildGraphicsResources();
          this._depthCullingState.depthTest = v15;
          this._depthCullingState.depthFunc = v16;
          this._depthCullingState.depthMask = v17;
          this._stencilState.stencilTest = v18;
          this._flagContextRestored();
        }, 0);
      }
      get AC() {
        return this._isDisposed;
      }
      get snapshotRendering() {
        return false;
      }
      set snapshotRendering(p49) {}
      get snapshotRenderingMode() {
        return 0;
      }
      set snapshotRenderingMode(p50) {}
      getClassName() {
        return "AbstractEngine";
      }
      get emptyTexture() {
        this._emptyTexture ||= this.createRawTexture(new Uint8Array(4), 1, 1, 5, false, false, 1);
        return this._emptyTexture;
      }
      get emptyTexture3D() {
        this._emptyTexture3D ||= this.createRawTexture3D(new Uint8Array(4), 1, 1, 1, 5, false, false, 1);
        return this._emptyTexture3D;
      }
      get emptyTexture2DArray() {
        this._emptyTexture2DArray ||= this.createRawTexture2DArray(new Uint8Array(4), 1, 1, 1, 5, false, false, 1);
        return this._emptyTexture2DArray;
      }
      get emptyCubeTexture() {
        if (!this._emptyCubeTexture) {
          const v19 = new Uint8Array(4);
          const vA = [v19, v19, v19, v19, v19, v19];
          this._emptyCubeTexture = this.createRawCubeTexture(vA, 1, 5, 0, false, false, 1);
        }
        return this._emptyCubeTexture;
      }
      get activeRenderLoops() {
        return this._activeRenderLoops;
      }
      stopRenderLoop(p51) {
        if (!p51) {
          this._activeRenderLoops.length = 0;
          this._cancelFrame();
          return;
        }
        const v20 = this._activeRenderLoops.indexOf(p51);
        if (v20 >= 0) {
          this._activeRenderLoops.splice(v20, 1);
          if (this._activeRenderLoops.length == 0) {
            this._cancelFrame();
          }
        }
      }
      _cancelFrame() {
        if (this._frameHandler !== 0) {
          const v21 = this._frameHandler;
          this._frameHandler = 0;
          if ((0, vP38.k)()) {
            const {
              cancelAnimationFrame: yC
            } = this.getHostWindow() || window;
            if (typeof yC === "function") {
              return yC(v21);
            }
          } else if (typeof cancelAnimationFrame === "function") {
            return cancelAnimationFrame(v21);
          }
          return clearTimeout(v21);
        }
      }
      SI() {
        this.onBeginFrameObservable.notifyObservers(this);
      }
      FI() {
        this._frameId++;
        this.onEndFrameObservable.notifyObservers(this);
      }
      get maxFPS() {
        return this._maxFPS;
      }
      set maxFPS(p52) {
        this._maxFPS = p52;
        if (p52 !== undefined) {
          this._minFrameTime = p52 <= 0 ? Number.MAX_VALUE : 1000 / p52;
        }
      }
      _isOverFrameTime(p53) {
        if (!p53 || this._maxFPS === undefined) {
          return false;
        }
        const v22 = p53 - this._lastFrameTime;
        this._lastFrameTime = p53;
        this._renderAccumulator += v22;
        return this._renderAccumulator < this._minFrameTime || (this._renderAccumulator -= this._minFrameTime, this._renderAccumulator > this._minFrameTime && (this._renderAccumulator = this._minFrameTime), false);
      }
      _processFrame(p54) {
        this._frameHandler = 0;
        if (!this._contextWasLost && !this._isOverFrameTime(p54)) {
          let v23 = true;
          if (this.AC || !this.renderEvenInBackground && this._windowIsBackground) {
            v23 = false;
          }
          if (v23) {
            this.SI();
            if (!this.skipFrameRender && !this._renderViews()) {
              this._renderFrame();
            }
            this.FI();
          }
        }
      }
      _renderLoop(p55) {
        this._processFrame(p55);
        if (this._activeRenderLoops.length > 0 && this._frameHandler === 0) {
          this._frameHandler = this._queueNewFrame(this._boundRenderFunction, this.getHostWindow());
        }
      }
      _renderFrame() {
        for (let vLN0 = 0; vLN0 < this._activeRenderLoops.length; vLN0++) {
          (0, this._activeRenderLoops[vLN0])();
        }
      }
      _renderViews() {
        return false;
      }
      _queueNewFrame(p56, p57) {
        return f(p56, p57);
      }
      runRenderLoop(p58) {
        if (this._activeRenderLoops.indexOf(p58) === -1) {
          this._activeRenderLoops.push(p58);
          if (this._activeRenderLoops.length === 1 && this._frameHandler === 0) {
            this._frameHandler = this._queueNewFrame(this._boundRenderFunction, this.getHostWindow());
          }
        }
      }
      getDepthBuffer() {
        return this._depthCullingState.depthTest;
      }
      setDepthBuffer(p59) {
        this._depthCullingState.depthTest = p59;
      }
      setZOffset(p60) {
        this._depthCullingState.zOffset = this.GI ? -p60 : p60;
      }
      getZOffset() {
        const v24 = this._depthCullingState.zOffset;
        if (this.GI) {
          return -v24;
        } else {
          return v24;
        }
      }
      setZOffsetUnits(p61) {
        this._depthCullingState.zOffsetUnits = this.GI ? -p61 : p61;
      }
      getZOffsetUnits() {
        const v25 = this._depthCullingState.zOffsetUnits;
        if (this.GI) {
          return -v25;
        } else {
          return v25;
        }
      }
      getHostWindow() {
        if ((0, vP38.k)()) {
          if (this._renderingCanvas && this._renderingCanvas.ownerDocument && this._renderingCanvas.ownerDocument.defaultView) {
            return this._renderingCanvas.ownerDocument.defaultView;
          } else {
            return window;
          }
        } else {
          return null;
        }
      }
      get compatibilityMode() {
        return this._compatibilityMode;
      }
      set compatibilityMode(p62) {
        this._compatibilityMode = true;
      }
      _rebuildTextures() {
        for (const v26 of this.scenes) {
          v26._rebuildTextures();
        }
        for (const v27 of this._virtualScenes) {
          v27._rebuildTextures();
        }
      }
      _releaseRenderTargetWrapper(p63) {
        const v28 = this._renderTargetWrapperCache.indexOf(p63);
        if (v28 !== -1) {
          this._renderTargetWrapperCache.splice(v28, 1);
        }
      }
      get currentViewport() {
        return this._cachedViewport;
      }
      setViewport(p64, p65, p66) {
        const v29 = p65 || this.getRenderWidth();
        const v30 = p66 || this.getRenderHeight();
        const v31 = p64.x || 0;
        const v32 = p64.y || 0;
        this._cachedViewport = p64;
        this._viewport(v31 * v29, v32 * v30, v29 * p64.width, v30 * p64.height);
      }
      createCanvasImage() {
        return document.createElement("img");
      }
      createCanvasPath2D(p67) {
        return new Path2D(p67);
      }
      get description() {
        let v33 = this.name + this.version;
        if (this._caps.parallelShaderCompile) {
          v33 += " - Parallel shader compilation";
        }
        return v33;
      }
      _createTextureBase(p68, p69, p70, p71, AC = 3, my = null, XC = null, iy, LC, YC = null, bC = null, GC = null, eC = null, OC, TC, sC) {
        const v34 = (p68 = p68 || "").substring(0, 5) === "data:";
        const v35 = p68.substring(0, 5) === "blob:";
        const v36 = v34 && p68.indexOf(";base64,") !== -1;
        const v37 = bC || new vP37.c(this, 1);
        if (v37 !== bC) {
          v37.label = p68.substring(0, 60);
        }
        const vP68 = p68;
        if (!!this._transformTextureUrl && !v36 && !bC && !YC) {
          p68 = this._transformTextureUrl(p68);
        }
        if (vP68 !== p68) {
          v37._originalUrl = vP68;
        }
        const v38 = p68.lastIndexOf(".");
        let v39 = eC || (v38 > -1 ? p68.substring(v38).toLowerCase() : "");
        if (v39.indexOf("?") > -1) {
          v39 = v39.split("?")[0];
        }
        const v40 = (0, vP311.c)(v39, OC);
        if (p71) {
          p71.addPendingData(v37);
        }
        v37.url = p68;
        v37.generateMipMaps = !p69;
        v37.samplingMode = AC;
        v37.invertY = p70;
        v37._useSRGBBuffer = this._getUseSRGBBuffer(!!sC, p69);
        if (!this._doNotHandleContextLost) {
          v37._buffer = C4;
        }
        let v41 = null;
        if (my && !bC) {
          v41 = v37.onLoadedObservable.add(vP35);
        }
        if (!bC) {
          this._internalTexturesCache.push(v37);
        }
        const vF = (p72, p73) => {
          if (p71) {
            p71.removePendingData(v37);
          }
          if (p68 === vP68) {
            if (v41) {
              v37.onLoadedObservable.remove(v41);
            }
            if (vP3.b.UseFallbackTexture && p68 !== vP3.b.FallbackTexture) {
              this._createTextureBase(vP3.b.FallbackTexture, p69, v37.invertY, p71, vP34, null, C, C2, C3, C4, v37);
            }
            p72 = (p72 || "Unknown error") + (vP3.b.UseFallbackTexture ? " - Fallback texture was used" : "");
            v37.onErrorObservable.notifyObservers({
              message: p72,
              exception: p73
            });
            if (C) {
              C(p72, p73);
            }
          } else {
            vP32.e.Warn(`Failed to load ${p68}, falling back to ${vP68}`);
            this._createTextureBase(vP68, p69, v37.invertY, p71, vP34, vP35, C, C2, C3, C4, v37, vP38, vP39, vP310, f, sC);
          }
        };
        if (v40) {
          const vF2 = async p74 => {
            (await v40).loadData(p74, v37, (p75, p76, p77, p78, p79, p80) => {
              if (p80) {
                vF("TextureLoader failed to load data");
              } else {
                C2(v37, v39, p71, {
                  width: p75,
                  height: p76
                }, v37.invertY, !p77, p78, () => {
                  p79();
                  return false;
                }, vP34);
              }
            }, TC);
          };
          if (YC) {
            if (C4 instanceof ArrayBuffer) {
              vF2(new Uint8Array(C4));
            } else if (ArrayBuffer.isView(C4)) {
              vF2(C4);
            } else if (C) {
              C("Unable to load: only ArrayBuffer or ArrayBufferView is supported", null);
            }
          } else {
            this._loadFile(p68, p81 => {
              vF2(new Uint8Array(p81));
            }, undefined, p71 ? p71.offlineProvider : undefined, true, (p82, p83) => {
              vF("Unable to load " + (p82 && p82.responseURL, p83));
            });
          }
        } else {
          const vF3 = p84 => {
            if (v35 && !this._doNotHandleContextLost) {
              v37._buffer = p84;
            }
            iy(v37, v39, p71, p84, v37.invertY, p69, false, LC, AC);
          };
          if (!v34 || v36) {
            if (C4 && (typeof C4.decoding === "string" || C4.close)) {
              vF3(C4);
            } else {
              C5._FileToolsLoadImage(p68 || "", vF3, vF, p71 ? p71.offlineProvider : null, vP310, v37.invertY && this._features.needsInvertingBitmap ? {
                imageOrientation: "flipY"
              } : undefined, this);
            }
          } else if (typeof C4 === "string" || C4 instanceof ArrayBuffer || ArrayBuffer.isView(C4) || C4 instanceof Blob) {
            C5._FileToolsLoadImage(C4, vF3, vF, p71 ? p71.offlineProvider : null, vP310, v37.invertY && this._features.needsInvertingBitmap ? {
              imageOrientation: "flipY"
            } : undefined, this);
          } else if (C4) {
            vF3(C4);
          }
        }
        return v37;
      }
      _rebuildBuffers() {
        for (const v42 of this._uniformBuffers) {
          v42._rebuildAfterContextLost();
        }
      }
      get _shouldUseHighPrecisionShader() {
        return !!this._caps.highPrecisionShaderSupported && !!this._highPrecisionShadersAllowed;
      }
      getHostDocument() {
        if (this._renderingCanvas && this._renderingCanvas.ownerDocument) {
          return this._renderingCanvas.ownerDocument;
        } else if ((0, vP38.f)()) {
          return document;
        } else {
          return null;
        }
      }
      getLoadedTexturesCache() {
        return this._internalTexturesCache;
      }
      clearInternalTexturesCache() {
        this._internalTexturesCache.length = 0;
      }
      getCaps() {
        return this._caps;
      }
      resetTextureCache() {
        for (const v43 in this._boundTexturesCache) {
          if (Object.prototype.hasOwnProperty.call(this._boundTexturesCache, v43)) {
            this._boundTexturesCache[v43] = null;
          }
        }
        this._currentTextureChannel = -1;
      }
      get name() {
        return this._name;
      }
      set name(p85) {
        this._name = p85;
      }
      static get NpmPackage() {
        return "babylonjs@8.13.0";
      }
      static get Version() {
        return "8.13.0";
      }
      getRenderingCanvas() {
        return this._renderingCanvas;
      }
      getAudioContext() {
        return this._audioContext;
      }
      getAudioDestination() {
        return this._audioDestination;
      }
      setHardwareScalingLevel(p86) {
        this._hardwareScalingLevel = p86;
        this.resize();
      }
      getHardwareScalingLevel() {
        return this._hardwareScalingLevel;
      }
      get doNotHandleContextLost() {
        return this._doNotHandleContextLost;
      }
      set doNotHandleContextLost(p87) {
        this._doNotHandleContextLost = p87;
      }
      get isStencilEnable() {
        return this._isStencilEnable;
      }
      getCreationOptions() {
        return this._creationOptions;
      }
      constructor(p88, p89, p90) {
        var v44;
        var v45;
        var v46;
        var v47;
        var v48;
        this._colorWrite = true;
        this._colorWriteChanged = true;
        this._depthCullingState = new C();
        this._stencilStateComposer = new C2();
        this._stencilState = new C3();
        this._alphaState = new C4();
        this._alphaMode = 1;
        this._alphaEquation = 0;
        this._activeRequests = [];
        this._badOS = false;
        this._badDesktopOS = false;
        this._compatibilityMode = true;
        this._internalTexturesCache = new Array();
        this._currentRenderTarget = null;
        this._boundTexturesCache = {};
        this._activeChannel = 0;
        this._currentTextureChannel = -1;
        this._viewportCached = {
          x: 0,
          y: 0,
          z: 0,
          w: 0
        };
        this._isWebGPU = false;
        this.onCanvasBlurObservable = new vP39.e();
        this.onCanvasFocusObservable = new vP39.e();
        this.onNewSceneAddedObservable = new vP39.e();
        this.onResizeObservable = new vP39.e();
        this.onCanvasPointerOutObservable = new vP39.e();
        this.onEffectErrorObservable = new vP39.e();
        this.disablePerformanceMonitorInBackground = false;
        this.disableVertexArrayObjects = false;
        this._frameId = 0;
        this.hostInformation = {
          isMobile: false
        };
        this.isFullscreen = false;
        this.enableOfflineSupport = false;
        this.disableManifestCheck = false;
        this.disableContextMenu = true;
        this.currentRenderPassId = 0;
        this.isPointerLock = false;
        this.postProcesses = [];
        this.canvasTabIndex = 1;
        this._contextWasLost = false;
        this._useReverseDepthBuffer = false;
        this.isNDCHalfZRange = false;
        this.hasOriginBottomLeft = true;
        this._renderTargetWrapperCache = new Array();
        this._compiledEffects = {};
        this._isDisposed = false;
        this.scenes = [];
        this._virtualScenes = new Array();
        this.onBeforeTextureInitObservable = new vP39.e();
        this.renderEvenInBackground = true;
        this.preventCacheWipeBetweenFrames = false;
        this._frameHandler = 0;
        this._activeRenderLoops = new Array();
        this._windowIsBackground = false;
        this._boundRenderFunction = p91 => this._renderLoop(p91);
        this._lastFrameTime = 0;
        this._renderAccumulator = 0;
        this.skipFrameRender = false;
        this.onBeforeShaderCompilationObservable = new vP39.e();
        this.onAfterShaderCompilationObservable = new vP39.e();
        this.onBeginFrameObservable = new vP39.e();
        this.onEndFrameObservable = new vP39.e();
        this._transformTextureUrl = null;
        this._uniformBuffers = new Array();
        this._storageBuffers = new Array();
        this._highPrecisionShadersAllowed = true;
        this.onContextLostObservable = new vP39.e();
        this.onContextRestoredObservable = new vP39.e();
        this._name = "";
        this.premultipliedAlpha = true;
        this.adaptToDeviceRatio = false;
        this._lastDevicePixelRatio = 1;
        this._doNotHandleContextLost = false;
        this.cullBackFaces = null;
        this._renderPassNames = ["main"];
        this._fps = 60;
        this._deltaTime = 0;
        this._deterministicLockstep = false;
        this._lockstepMaxSteps = 4;
        this._timeStep = 1 / 60;
        this.Cf = new vP39.e();
        this.onReleaseEffectsObservable = new vP39.e();
        vP3.b.Instances.push(this);
        this.startTime = vP35.d.Now;
        this._stencilStateComposer.stencilGlobal = this._stencilState;
        vP34.d.SetMatrixPrecision(!!p89.useHighPrecisionMatrix);
        if ((0, vP38.g)() && navigator.userAgent) {
          this._badOS = /iPad/i.test(navigator.userAgent) || /iPhone/i.test(navigator.userAgent);
          this._badDesktopOS = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        }
        this.adaptToDeviceRatio = (v44 = p90) !== null && v44 !== undefined && v44;
        p89.antialias = p88 ?? p89.antialias;
        p89.deterministicLockstep = (v45 = p89.deterministicLockstep) !== null && v45 !== undefined && v45;
        p89.lockstepMaxSteps = p89.lockstepMaxSteps ?? 4;
        p89.timeStep = p89.timeStep ?? 1 / 60;
        p89.Lf = (v46 = p89.Lf) === null || v46 === undefined || v46;
        this._audioContext = p89.audioEngineOptions?.audioContext ?? null;
        this._audioDestination = p89.audioEngineOptions?.audioDestination ?? null;
        this.premultipliedAlpha = (v47 = p89.premultipliedAlpha) === null || v47 === undefined || v47;
        this._doNotHandleContextLost = !!p89.doNotHandleContextLost;
        this._isStencilEnable = !!p89.Lf;
        this.useExactSrgbConversions = (v48 = p89.useExactSrgbConversions) !== null && v48 !== undefined && v48;
        const v49 = (0, vP38.k)() && window.devicePixelRatio || 1;
        const v50 = p89.limitDeviceRatio || v49;
        p90 = p90 || p89.adaptToDeviceRatio || false;
        this._hardwareScalingLevel = p90 ? 1 / Math.min(v50, v49) : 1;
        this._lastDevicePixelRatio = v49;
        this._creationOptions = p89;
      }
      resize() {
        let v51;
        let v52;
        let v53 = arguments.length > 0 && arguments[0] !== undefined && arguments[0];
        if (this.adaptToDeviceRatio) {
          const v54 = (0, vP38.k)() && window.devicePixelRatio || 1;
          const v55 = this._lastDevicePixelRatio / v54;
          this._lastDevicePixelRatio = v54;
          this._hardwareScalingLevel *= v55;
        }
        if ((0, vP38.k)() && (0, vP38.f)()) {
          if (this._renderingCanvas) {
            var v56;
            var v57;
            const v58 = (v56 = (v57 = this._renderingCanvas).getBoundingClientRect) === null || v56 === undefined ? undefined : v56.call(v57);
            v51 = this._renderingCanvas.clientWidth || v58?.width || this._renderingCanvas.width * this._hardwareScalingLevel || 100;
            v52 = this._renderingCanvas.clientHeight || v58?.height || this._renderingCanvas.height * this._hardwareScalingLevel || 100;
          } else {
            v51 = window.innerWidth;
            v52 = window.innerHeight;
          }
        } else {
          v51 = this._renderingCanvas ? this._renderingCanvas.width : 100;
          v52 = this._renderingCanvas ? this._renderingCanvas.height : 100;
        }
        this.setSize(v51 / this._hardwareScalingLevel, v52 / this._hardwareScalingLevel, v53);
      }
      setSize(p92, p93, IC = false) {
        if (!this._renderingCanvas) {
          return false;
        }
        p92 |= 0;
        p93 |= 0;
        if (!IC && this._renderingCanvas.width === p92 && this._renderingCanvas.height === p93) {
          return false;
        }
        this._renderingCanvas.width = p92;
        this._renderingCanvas.height = p93;
        if (this.scenes) {
          for (let vLN02 = 0; vLN02 < this.scenes.length; vLN02++) {
            const v59 = this.scenes[vLN02];
            for (let vLN03 = 0; vLN03 < v59.cameras.length; vLN03++) {
              v59.cameras[vLN03]._currentRenderId = 0;
            }
          }
          if (this.onResizeObservable.hasObservers()) {
            this.onResizeObservable.notifyObservers(this);
          }
        }
        return true;
      }
      createRawTexture(p94, p95, p96, p97, p98, p99, p100, p101, p102, p103, p104) {
        throw (0, vP36.c)("engine.rawTexture");
      }
      createRawCubeTexture(p105, p106, p107, p108, p109, p110, p111, p112) {
        throw (0, vP36.c)("engine.rawTexture");
      }
      createRawTexture3D(p113, p114, p115, p116, p117, p118, p119, p120, p121, p122, p123) {
        throw (0, vP36.c)("engine.rawTexture");
      }
      createRawTexture2DArray(p124, p125, p126, p127, p128, p129, p130, p131, p132, p133, p134) {
        throw (0, vP36.c)("engine.rawTexture");
      }
      _sharedInit(p135) {
        this._renderingCanvas = p135;
      }
      _setupMobileChecks() {
        if (navigator && navigator.userAgent) {
          this._checkForMobile = () => {
            const v60 = navigator.userAgent;
            this.hostInformation.isMobile = v60.indexOf("Mobile") !== -1 || v60.indexOf("Mac") !== -1 && (0, vP38.f)() && "ontouchend" in document;
          };
          this._checkForMobile();
          if ((0, vP38.k)()) {
            window.addEventListener("resize", this._checkForMobile);
          }
        }
      }
      createVideoElement(p136) {
        return document.createElement("video");
      }
      _reportDrawCall() {
        var v61;
        let v62 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
        if ((v61 = this._drawCalls) !== null && v61 !== undefined) {
          v61.addCount(v62, false);
        }
      }
      getFps() {
        return this._fps;
      }
      getDeltaTime() {
        return this._deltaTime;
      }
      isDeterministicLockStep() {
        return this._deterministicLockstep;
      }
      getLockstepMaxSteps() {
        return this._lockstepMaxSteps;
      }
      getTimeStep() {
        return this._timeStep * 1000;
      }
      _createImageBitmapFromSource(p137, p138) {
        throw new Error("createImageBitmapFromSource is not implemented");
      }
      createImageBitmap(p139, p140) {
        return createImageBitmap(p139, p140);
      }
      resizeImageBitmap(p141, p142, p143) {
        throw new Error("resizeImageBitmap is not implemented");
      }
      getFontOffset(p144) {
        throw new Error("getFontOffset is not implemented");
      }
      static _CreateCanvas(p145, p146) {
        if (typeof document === "undefined") {
          return new OffscreenCanvas(p145, p146);
        }
        const v63 = document.createElement("canvas");
        v63.width = p145;
        v63.height = p146;
        return v63;
      }
      createCanvas(p147, p148) {
        return C5._CreateCanvas(p147, p148);
      }
      static _FileToolsLoadImage(p149, p150, p151, p152, p153, p154, p155) {
        throw (0, vP36.c)("FileTools");
      }
      _loadFile(p156, p157, p158, p159, p160, p161) {
        const v64 = (0, vP310.f)(p156, p157, p158, p159, p160, p161);
        this._activeRequests.push(v64);
        v64.onCompleteObservable.add(() => {
          const v65 = this._activeRequests.indexOf(v64);
          if (v65 !== -1) {
            this._activeRequests.splice(v65, 1);
          }
        });
        return v64;
      }
      static _FileToolsLoadFile(p162, p163, p164, p165, p166, p167) {
        if (vP310.b.loadFile) {
          return vP310.b.loadFile(p162, p163, p164, p165, p166, p167);
        }
        throw (0, vP36.c)("FileTools");
      }
      dispose() {
        var v66;
        this.releaseEffects();
        this._isDisposed = true;
        this.stopRenderLoop();
        if (this._emptyTexture) {
          this._releaseTexture(this._emptyTexture);
          this._emptyTexture = null;
        }
        if (this._emptyCubeTexture) {
          this._releaseTexture(this._emptyCubeTexture);
          this._emptyCubeTexture = null;
        }
        this._renderingCanvas = null;
        if (this.onBeforeTextureInitObservable) {
          this.onBeforeTextureInitObservable.clear();
        }
        while (this.postProcesses.length) {
          this.postProcesses[0].dispose();
        }
        while (this.scenes.length) {
          this.scenes[0].dispose();
        }
        while (this._virtualScenes.length) {
          this._virtualScenes[0].dispose();
        }
        if ((v66 = this.releaseComputeEffects) !== null && v66 !== undefined) {
          v66.call(this);
        }
        vP33.Effect.ResetCache();
        for (const v67 of this._activeRequests) {
          v67.abort();
        }
        this._boundRenderFunction = null;
        this.Cf.notifyObservers(this);
        this.Cf.clear();
        this.onResizeObservable.clear();
        this.onCanvasBlurObservable.clear();
        this.onCanvasFocusObservable.clear();
        this.onCanvasPointerOutObservable.clear();
        this.onNewSceneAddedObservable.clear();
        this.onEffectErrorObservable.clear();
        if ((0, vP38.k)()) {
          window.removeEventListener("resize", this._checkForMobile);
        }
        const v68 = vP3.b.Instances.indexOf(this);
        if (v68 >= 0) {
          vP3.b.Instances.splice(v68, 1);
        }
        if (!vP3.b.Instances.length) {
          vP3.b.OnEnginesDisposedObservable.notifyObservers(this);
          vP3.b.OnEnginesDisposedObservable.clear();
        }
        this.onBeginFrameObservable.clear();
        this.onEndFrameObservable.clear();
      }
      static DefaultLoadingScreenFactory(p168) {
        throw (0, vP36.c)("LoadingScreen");
      }
      static MarkAllMaterialsAsDirty(p169, p170) {
        for (let vLN04 = 0; vLN04 < vP3.b.Instances.length; vLN04++) {
          const v69 = vP3.b.Instances[vLN04];
          for (let vLN05 = 0; vLN05 < v69.scenes.length; vLN05++) {
            v69.scenes[vLN05].markAllMaterialsAsDirty(p169, p170);
          }
        }
      }
    }
    C5._RenderPassIdCounter = 0;
    C5._RescalePostProcessFactory = null;
    C5.CollisionsEpsilon = 0.001;
    C5.QueueNewFrame = f;
  },
  16837: (p171, p172, p173) => {
    p173.d(p172, {
      b: () => C6
    });
    var vP173 = p173(16796);
    class C6 {
      static get LastCreatedEngine() {
        if (this.Instances.length === 0) {
          return null;
        } else {
          return this.Instances[this.Instances.length - 1];
        }
      }
      static get LastCreatedScene() {
        return this._LastCreatedScene;
      }
    }
    C6.Instances = [];
    C6.OnEnginesDisposedObservable = new vP173.e();
    C6._LastCreatedScene = null;
    C6.UseFallbackTexture = true;
    C6.FallbackTexture = "";
  },
  16905: (p174, p175, p176) => {
    p176.d(p175, {
      d: () => C7
    });
    class C7 {
      static SetMatrixPrecision(p177) {
        C7.MatrixTrackPrecisionChange = false;
        if (p177 && !C7.MatrixUse64Bits && C7.MatrixTrackedMatrices) {
          for (let vLN06 = 0; vLN06 < C7.MatrixTrackedMatrices.length; ++vLN06) {
            const v70 = C7.MatrixTrackedMatrices[vLN06];
            const v71 = v70.Yf;
            v70.Yf = new Array(16);
            for (let vLN07 = 0; vLN07 < 16; ++vLN07) {
              v70.Yf[vLN07] = v71[vLN07];
            }
          }
        }
        C7.MatrixUse64Bits = p177;
        C7.MatrixCurrentType = C7.MatrixUse64Bits ? Array : Float32Array;
        C7.MatrixTrackedMatrices = null;
      }
    }
    C7.MatrixUse64Bits = false;
    C7.MatrixTrackPrecisionChange = true;
    C7.MatrixCurrentType = Float32Array;
    C7.MatrixTrackedMatrices = [];
  },
  16917: (p178, p179, p180) => {
    p180.d(p179, {
      c: () => f3
    });
    var vP180 = p180(16811);
    const v72 = new Map();
    function f2(p181, p182) {
      if (function (p183) {
        return v72.delete(p183);
      }(p181)) {
        vP180.e.Warn(`Extension with the name '${p181}' already exists`);
      }
      v72.set(p181, p182);
    }
    function f3(p184, p185) {
      if (p185 === "image/ktx" || p185 === "image/ktx2") {
        p184 = ".ktx";
      }
      if (!v72.has(p184)) {
        if (p184.endsWith(".ies")) {
          f2(".ies", async () => await p180.e(15).then(p180.bind(p180, 19268)).then(p186 => new p186._IESTextureLoader()));
        }
        if (p184.endsWith(".dds")) {
          f2(".dds", async () => await Promise.all([p180.e(14), p180.e(17), p180.e(13), p180.e(19), p180.e(18), p180.e(28)]).then(p180.bind(p180, 19271)).then(p187 => new p187._DDSTextureLoader()));
        }
        if (p184.endsWith(".basis")) {
          f2(".basis", async () => await Promise.all([p180.e(14), p180.e(17), p180.e(13), p180.e(48)]).then(p180.bind(p180, 19281)).then(p188 => new p188._BasisTextureLoader()));
        }
        if (p184.endsWith(".env")) {
          f2(".env", async () => await Promise.all([p180.e(14), p180.e(17), p180.e(13), p180.e(19), p180.e(18), p180.e(23), p180.e(21), p180.e(34), p180.e(49)]).then(p180.bind(p180, 19284)).then(p189 => new p189._ENVTextureLoader()));
        }
        if (p184.endsWith(".hdr")) {
          f2(".hdr", async () => await Promise.all([p180.e(14), p180.e(50)]).then(p180.bind(p180, 19290)).then(p190 => new p190._HDRTextureLoader()));
        }
        if (p184.endsWith(".ktx") || p184.endsWith(".ktx2")) {
          f2(".ktx", async () => await p180.e(30).then(p180.bind(p180, 19298)).then(p191 => new p191._KTXTextureLoader()));
          f2(".ktx2", async () => await p180.e(30).then(p180.bind(p180, 19298)).then(p192 => new p192._KTXTextureLoader()));
        }
        if (p184.endsWith(".tga")) {
          f2(".tga", async () => await p180.e(51).then(p180.bind(p180, 19307)).then(p193 => new p193._TGATextureLoader()));
        }
        if (p184.endsWith(".exr")) {
          f2(".exr", async () => await p180.e(16).then(p180.bind(p180, 19312)).then(p194 => new p194._ExrTextureLoader()));
        }
      }
      const v73 = v72.get(p184);
      if (v73) {
        return Promise.resolve(v73(p185));
      } else {
        return null;
      }
    }
  },
  16909: (p195, p196, p197) => {
    p197.d(p196, {
      c: () => C8
    });
    var v74;
    var vP197 = p197(16796);
    var vP1972 = p197(16914);
    (function (p198) {
      p198[p198.Unknown = 0] = "Unknown";
      p198[p198.Url = 1] = "Url";
      p198[p198.Temp = 2] = "Temp";
      p198[p198.Raw = 3] = "Raw";
      p198[p198.Dynamic = 4] = "Dynamic";
      p198[p198.RenderTarget = 5] = "RenderTarget";
      p198[p198.MultiRenderTarget = 6] = "MultiRenderTarget";
      p198[p198.Cube = 7] = "Cube";
      p198[p198.CubeRaw = 8] = "CubeRaw";
      p198[p198.CubePrefiltered = 9] = "CubePrefiltered";
      p198[p198.Raw3D = 10] = "Raw3D";
      p198[p198.Raw2DArray = 11] = "Raw2DArray";
      p198[p198.DepthStencil = 12] = "DepthStencil";
      p198[p198.CubeRawRGBD = 13] = "CubeRawRGBD";
      p198[p198.Depth = 14] = "Depth";
    })(v74 ||= {});
    class C8 extends vP1972.c {
      get useMipMaps() {
        return this.generateMipMaps;
      }
      set useMipMaps(p199) {
        this.generateMipMaps = p199;
      }
      get uniqueId() {
        return this._uniqueId;
      }
      _setUniqueId(p200) {
        this._uniqueId = p200;
      }
      getEngine() {
        return this._engine;
      }
      get source() {
        return this._source;
      }
      constructor(p201, p202, IC = false) {
        super();
        this.isReady = false;
        this.isCube = false;
        this.is3D = false;
        this.is2DArray = false;
        this.isMultiview = false;
        this.url = "";
        this.generateMipMaps = false;
        this.samples = 0;
        this.type = -1;
        this.format = -1;
        this.onLoadedObservable = new vP197.e();
        this.onErrorObservable = new vP197.e();
        this.onRebuildCallback = null;
        this.width = 0;
        this.height = 0;
        this.depth = 0;
        this.baseWidth = 0;
        this.baseHeight = 0;
        this.baseDepth = 0;
        this.invertY = false;
        this._invertVScale = false;
        this._associatedChannel = -1;
        this._source = 0;
        this._buffer = null;
        this._bufferView = null;
        this._bufferViewArray = null;
        this._bufferViewArrayArray = null;
        this._size = 0;
        this._extension = "";
        this._files = null;
        this._workingCanvas = null;
        this._workingContext = null;
        this._cachedCoordinatesMode = null;
        this._isDisabled = false;
        this._compression = null;
        this._sphericalPolynomial = null;
        this._sphericalPolynomialPromise = null;
        this._sphericalPolynomialComputed = false;
        this._lodGenerationScale = 0;
        this._lodGenerationOffset = 0;
        this._useSRGBBuffer = false;
        this._creationFlags = 0;
        this._lodTextureHigh = null;
        this._lodTextureMid = null;
        this._lodTextureLow = null;
        this._isRGBD = false;
        this._linearSpecularLOD = false;
        this._irradianceTexture = null;
        this._hardwareTexture = null;
        this._maxLodLevel = null;
        this._references = 1;
        this._gammaSpace = null;
        this._premulAlpha = false;
        this._dynamicTextureSource = null;
        this._autoMSAAManagement = false;
        this._engine = p201;
        this._source = p202;
        this._uniqueId = C8._Counter++;
        if (!IC) {
          this._hardwareTexture = p201._createHardwareTexture();
        }
      }
      incrementReferences() {
        this._references++;
      }
      updateSize(p203, p204, IC = 1) {
        this._engine.updateTextureDimensions(this, p203, p204, IC);
        this.width = p203;
        this.height = p204;
        this.depth = IC;
        this.baseWidth = p203;
        this.baseHeight = p204;
        this.baseDepth = IC;
        this._size = p203 * p204 * IC;
      }
      _rebuild() {
        this.isReady = false;
        this._cachedCoordinatesMode = null;
        this._cachedWrapU = null;
        this._cachedWrapV = null;
        this._cachedWrapR = null;
        this._cachedAnisotropicFilteringLevel = null;
        if (this.onRebuildCallback) {
          const v75 = this.onRebuildCallback(this);
          const vF4 = p205 => {
            p205._swapAndDie(this, false);
            this.isReady = v75.isReady;
          };
          if (v75.isAsync) {
            v75.proxy.then(vF4);
          } else {
            vF4(v75.proxy);
          }
          return;
        }
        let v76;
        switch (this.source) {
          case 2:
          case 12:
          case 14:
            break;
          case 1:
            v76 = this._engine.createTexture(this._originalUrl ?? this.url, !this.generateMipMaps, this.invertY, null, this.samplingMode, p206 => {
              p206._swapAndDie(this, false);
              this.isReady = true;
            }, null, this._buffer, undefined, this.format, this._extension, undefined, undefined, undefined, this._useSRGBBuffer);
            return;
          case 3:
            v76 = this._engine.createRawTexture(this._bufferView, this.baseWidth, this.baseHeight, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type, this._creationFlags, this._useSRGBBuffer);
            v76._swapAndDie(this, false);
            this.isReady = true;
            break;
          case 10:
            v76 = this._engine.createRawTexture3D(this._bufferView, this.baseWidth, this.baseHeight, this.baseDepth, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type);
            v76._swapAndDie(this, false);
            this.isReady = true;
            break;
          case 11:
            v76 = this._engine.createRawTexture2DArray(this._bufferView, this.baseWidth, this.baseHeight, this.baseDepth, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type);
            v76._swapAndDie(this, false);
            this.isReady = true;
            break;
          case 4:
            v76 = this._engine.createDynamicTexture(this.baseWidth, this.baseHeight, this.generateMipMaps, this.samplingMode);
            v76._swapAndDie(this, false);
            if (this._dynamicTextureSource) {
              this._engine.updateDynamicTexture(this, this._dynamicTextureSource, this.invertY, this._premulAlpha, this.format, true);
            }
            break;
          case 7:
            v76 = this._engine.createCubeTexture(this.url, null, this._files, !this.generateMipMaps, () => {
              v76._swapAndDie(this, false);
              this.isReady = true;
            }, null, this.format, this._extension, false, 0, 0, null, undefined, this._useSRGBBuffer, ArrayBuffer.isView(this._buffer) ? this._buffer : null);
            return;
          case 8:
            v76 = this._engine.createRawCubeTexture(this._bufferViewArray, this.width, this._originalFormat ?? this.format, this.type, this.generateMipMaps, this.invertY, this.samplingMode, this._compression);
            v76._swapAndDie(this, false);
            this.isReady = true;
            break;
          case 13:
            return;
          case 9:
            v76 = this._engine.createPrefilteredCubeTexture(this.url, null, this._lodGenerationScale, this._lodGenerationOffset, p207 => {
              if (p207) {
                p207._swapAndDie(this, false);
              }
              this.isReady = true;
            }, null, this.format, this._extension);
            v76._sphericalPolynomial = this._sphericalPolynomial;
            return;
        }
      }
      _swapAndDie(p208) {
        var v77;
        let v78 = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
        if ((v77 = this._hardwareTexture) !== null && v77 !== undefined) {
          v77.setUsage(p208._source, this.generateMipMaps, this.is2DArray, this.isCube, this.is3D, this.width, this.height, this.depth);
        }
        p208._hardwareTexture = this._hardwareTexture;
        if (v78) {
          p208._isRGBD = this._isRGBD;
        }
        if (this._lodTextureHigh) {
          if (p208._lodTextureHigh) {
            p208._lodTextureHigh.dispose();
          }
          p208._lodTextureHigh = this._lodTextureHigh;
        }
        if (this._lodTextureMid) {
          if (p208._lodTextureMid) {
            p208._lodTextureMid.dispose();
          }
          p208._lodTextureMid = this._lodTextureMid;
        }
        if (this._lodTextureLow) {
          if (p208._lodTextureLow) {
            p208._lodTextureLow.dispose();
          }
          p208._lodTextureLow = this._lodTextureLow;
        }
        if (this._irradianceTexture) {
          if (p208._irradianceTexture) {
            p208._irradianceTexture.dispose();
          }
          p208._irradianceTexture = this._irradianceTexture;
        }
        const v79 = this._engine.getLoadedTexturesCache();
        let v80 = v79.indexOf(this);
        if (v80 !== -1) {
          v79.splice(v80, 1);
        }
        v80 = v79.indexOf(p208);
        if (v80 === -1) {
          v79.push(p208);
        }
      }
      dispose() {
        this._references--;
        if (this._references === 0) {
          this.onLoadedObservable.clear();
          this.onErrorObservable.clear();
          this._engine._releaseTexture(this);
          this._hardwareTexture = null;
          this._dynamicTextureSource = null;
        }
      }
    }
    C8._Counter = 0;
  },
  16914: (p209, p210, p211) => {
    p211.d(p210, {
      c: () => C9
    });
    class C9 {
      get wrapU() {
        return this._cachedWrapU;
      }
      set wrapU(p212) {
        this._cachedWrapU = p212;
      }
      get wrapV() {
        return this._cachedWrapV;
      }
      set wrapV(p213) {
        this._cachedWrapV = p213;
      }
      get wrapR() {
        return this._cachedWrapR;
      }
      set wrapR(p214) {
        this._cachedWrapR = p214;
      }
      get anisotropicFilteringLevel() {
        return this._cachedAnisotropicFilteringLevel;
      }
      set anisotropicFilteringLevel(p215) {
        this._cachedAnisotropicFilteringLevel = p215;
      }
      get comparisonFunction() {
        return this._comparisonFunction;
      }
      set comparisonFunction(p216) {
        this._comparisonFunction = p216;
      }
      get useMipMaps() {
        return this._useMipMaps;
      }
      set useMipMaps(p217) {
        this._useMipMaps = p217;
      }
      constructor() {
        this.samplingMode = -1;
        this._useMipMaps = true;
        this._cachedWrapU = null;
        this._cachedWrapV = null;
        this._cachedWrapR = null;
        this._cachedAnisotropicFilteringLevel = null;
        this._comparisonFunction = 0;
      }
      setParameters(CC = 1, yC = 1, IC = 1, fC = 1, ky = 2, gC = 0) {
        this._cachedWrapU = CC;
        this._cachedWrapV = yC;
        this._cachedWrapR = IC;
        this._cachedAnisotropicFilteringLevel = fC;
        this.samplingMode = ky;
        this._comparisonFunction = gC;
        return this;
      }
      compareSampler(p218) {
        return this._cachedWrapU === p218._cachedWrapU && this._cachedWrapV === p218._cachedWrapV && this._cachedWrapR === p218._cachedWrapR && this._cachedAnisotropicFilteringLevel === p218._cachedAnisotropicFilteringLevel && this.samplingMode === p218.samplingMode && this._comparisonFunction === p218._comparisonFunction && this._useMipMaps === p218._useMipMaps;
      }
    }
  },
  16815: (p219, p220, p221) => {
    p221.d(p220, {
      e: () => C10
    });
    var vP221 = p221(18);
    var vP2212 = p221(16811);
    const vF5 = (p222, p223, p224) => p222 ? p222.getClassName && p222.getClassName() === "Mesh" ? null : !p222.getClassName || p222.getClassName() !== "SubMesh" && p222.getClassName() !== "PhysicsBody" ? p222.clone ? p222.clone() : Array.isArray(p222) ? p222.slice() : p224 && typeof p222 === "object" ? (0, vP221.d)({}, p222) : null : p222.clone(p223) : null;
    class C10 {
      static DeepCopy(p225, p226, p227, p228, AC = false) {
        const vF6 = function (p229) {
          const vA2 = [];
          do {
            const v81 = Object.getOwnPropertyNames(p229);
            for (const v82 of v81) {
              if (vA2.indexOf(v82) === -1) {
                vA2.push(v82);
              }
            }
          } while (p229 = Object.getPrototypeOf(p229));
          return vA2;
        }(p225);
        for (const v83 of vF6) {
          if (v83[0] === "_" && (!p228 || p228.indexOf(v83) === -1)) {
            continue;
          }
          if (v83.endsWith("Observable")) {
            continue;
          }
          if (p227 && p227.indexOf(v83) !== -1) {
            continue;
          }
          const v84 = p225[v83];
          const v85 = typeof v84;
          if (v85 !== "function") {
            try {
              if (v85 === "object") {
                if (v84 instanceof Uint8Array) {
                  p226[v83] = Uint8Array.from(v84);
                } else if (v84 instanceof Array) {
                  p226[v83] = [];
                  if (v84.length > 0) {
                    if (typeof v84[0] == "object") {
                      for (let vLN08 = 0; vLN08 < v84.length; vLN08++) {
                        const vVF5 = vF5(v84[vLN08], p226, AC);
                        if (p226[v83].indexOf(vVF5) === -1) {
                          p226[v83].push(vVF5);
                        }
                      }
                    } else {
                      p226[v83] = v84.slice(0);
                    }
                  }
                } else {
                  p226[v83] = vF5(v84, p226, AC);
                }
              } else {
                p226[v83] = v84;
              }
            } catch (e3) {
              vP2212.e.Warn(e3.message);
            }
          }
        }
      }
    }
  },
  16845: (p230, p231, p232) => {
    p232.d(p231, {
      b: () => C11,
      e: () => vO,
      i: () => C12
    });
    class C11 extends Error {}
    C11._setPrototypeOf = Object.setPrototypeOf || ((p233, p234) => {
      p233.__proto__ = p234;
      return p233;
    });
    const vO = {
      MeshInvalidPositionsError: 0,
      UnsupportedTextureError: 1000,
      GLTFLoaderUnexpectedMagicError: 2000,
      SceneLoaderError: 3000,
      LoadFileError: 4000,
      RequestFileError: 4001,
      ReadFileError: 4002
    };
    class C12 extends C11 {
      constructor(p235, p236, p237) {
        super(p235);
        this.errorCode = p236;
        this.innerError = p237;
        this.name = "RuntimeError";
        C11._setPrototypeOf(this, C12.prototype);
      }
    }
  },
  16840: (p238, p239, p240) => {
    p240.d(p239, {
      b: () => f4,
      f: () => vO2,
      g: () => vF23,
      i: () => vF25,
      o: () => vF14,
      l: () => C14,
      r: () => vF8,
      s: () => vF13,
      v: () => vF15,
      w: () => vF7
    });
    var vP240 = p240(18);
    var vP2402 = p240(16832);
    var vP2403 = p240(16805);
    var vP2404 = p240(16796);
    class C13 {}
    C13.FilesToLoad = {};
    var vP2405 = p240(16845);
    var vP2406 = p240(16850);
    var vP2407 = p240(16859);
    var vP2408 = p240(16837);
    var vP2409 = p240(16811);
    var vP24010 = p240(16872);
    var vP24011 = p240(16864);
    var vP24012 = p240(16876);
    const v86 = new RegExp(/^data:([^,]+\/[^,]+)?;base64,/i);
    class C14 extends vP2405.i {
      constructor(p241, p242) {
        super(p241, vP2405.e.LoadFileError);
        this.name = "LoadFileError";
        vP2405.b._setPrototypeOf(this, C14.prototype);
        if (p242 instanceof vP2402.d) {
          this.request = p242;
        } else {
          this.file = p242;
        }
      }
    }
    class C15 extends vP2405.i {
      constructor(p243, p244) {
        super(p243, vP2405.e.RequestFileError);
        this.request = p244;
        this.name = "RequestFileError";
        vP2405.b._setPrototypeOf(this, C15.prototype);
      }
    }
    class C16 extends vP2405.i {
      constructor(p245, p246) {
        super(p245, vP2405.e.ReadFileError);
        this.file = p246;
        this.name = "ReadFileError";
        vP2405.b._setPrototypeOf(this, C16.prototype);
      }
    }
    const vO2 = {
      DefaultRetryStrategy: class {
        static ExponentialBackoff(CC = 3, yC = 500) {
          return (p247, p248, p249) => p248.status !== 0 || p249 >= CC || p247.indexOf("file:") !== -1 ? -1 : Math.pow(2, p249) * yC;
        }
      }.ExponentialBackoff(),
      BaseUrl: "",
      CorsBehavior: "anonymous",
      PreprocessUrl: p250 => p250,
      ScriptBaseUrl: "",
      ScriptPreprocessUrl: p251 => p251,
      CleanUrl: p252 => p252 = p252.replace(/#/gm, "%23")
    };
    const vF7 = (p253, p254) => {
      if ((!p253 || p253.indexOf("data:") !== 0) && vO2.CorsBehavior) {
        if (typeof vO2.CorsBehavior === "string" || vO2.CorsBehavior instanceof String) {
          p254.crossOrigin = vO2.CorsBehavior;
        } else {
          const v87 = vO2.CorsBehavior(p253);
          if (v87) {
            p254.crossOrigin = v87;
          }
        }
      }
    };
    const vO3 = {
      getRequiredSize: null
    };
    const vF8 = function (p255, p256, p257, p258) {
      let v88;
      let v89 = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "";
      let v90 = arguments.length > 5 ? arguments[5] : undefined;
      let v91 = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : vP2408.b.LastCreatedEngine;
      if (typeof HTMLImageElement === "undefined" && (v91 === null || v91 === undefined || !v91._features.forceBitmapOverHTMLImageElement)) {
        p257("LoadImage is only supported in web or BabylonNative environments.");
        return null;
      }
      let v92 = false;
      if (p255 instanceof ArrayBuffer || ArrayBuffer.isView(p255)) {
        if (typeof Blob !== "undefined" && typeof URL !== "undefined") {
          v88 = URL.createObjectURL(new Blob([p255], {
            type: v89
          }));
          v92 = true;
        } else {
          v88 = `data:${v89};base64,${(0, vP2406.n)(p255)}`;
        }
      } else if (p255 instanceof Blob) {
        v88 = URL.createObjectURL(p255);
        v92 = true;
      } else {
        v88 = vO2.CleanUrl(p255);
        v88 = vO2.PreprocessUrl(v88);
      }
      const vF9 = p259 => {
        if (p257) {
          const v93 = v88 || p255.toString();
          p257(`Error while trying to load image: ${v93.indexOf("http") === 0 || v93.length <= 128 ? v93 : v93.slice(0, 128) + "..."}`, p259);
        }
      };
      if (v91 !== null && v91 !== undefined && v91._features.forceBitmapOverHTMLImageElement) {
        vF14(v88, p260 => {
          v91.createImageBitmap(new Blob([p260], {
            type: v89
          }), (0, vP240.d)({
            premultiplyAlpha: "none"
          }, v90)).then(p261 => {
            p256(p261);
            if (v92) {
              URL.revokeObjectURL(v88);
            }
          }).catch(p262 => {
            if (p257) {
              p257("Error while trying to load image: " + p255, p262);
            }
          });
        }, undefined, p258 || undefined, true, (p263, p264) => {
          vF9(p264);
        });
        return null;
      }
      const v94 = new Image();
      if (vO3.getRequiredSize) {
        const v95 = vO3.getRequiredSize(p255);
        if (v95.width) {
          v94.width = v95.width;
        }
        if (v95.height) {
          v94.height = v95.height;
        }
      }
      vF7(v88, v94);
      const vA3 = [];
      const vF10 = () => {
        for (const v96 of vA3) {
          v96.target.removeEventListener(v96.name, v96.handler);
        }
        vA3.length = 0;
      };
      vA3.push({
        target: v94,
        name: "load",
        handler: () => {
          vF10();
          p256(v94);
          if (v92 && v94.src) {
            URL.revokeObjectURL(v94.src);
          }
        }
      });
      vA3.push({
        target: v94,
        name: "error",
        handler: p265 => {
          vF10();
          vF9(p265);
          if (v92 && v94.src) {
            URL.revokeObjectURL(v94.src);
          }
        }
      });
      vA3.push({
        target: document,
        name: "securitypolicyviolation",
        handler: p266 => {
          if (p266.blockedURI !== v94.src || p266.disposition === "bf") {
            return;
          }
          vF10();
          const v97 = new Error(`CSP violation of policy ${p266.effectiveDirective} ${p266.blockedURI}. Current policy is ${p266.originalPolicy}`);
          vP2408.b.UseFallbackTexture = false;
          vF9(v97);
          if (v92 && v94.src) {
            URL.revokeObjectURL(v94.src);
          }
          v94.src = "";
        }
      });
      (() => {
        for (const v98 of vA3) {
          v98.target.addEventListener(v98.name, v98.handler);
        }
      })();
      const v99 = v88.substring(0, 5) === "blob:";
      const v100 = v88.substring(0, 5) === "data:";
      const vF11 = () => {
        if (v99 || v100 || !vP2402.d.IsCustomRequestAvailable) {
          v94.src = v88;
        } else {
          vF14(v88, (p267, p268, p269) => {
            const v101 = new Blob([p267], {
              type: !v89 && p269 ? p269 : v89
            });
            const v102 = URL.createObjectURL(v101);
            v92 = true;
            v94.src = v102;
          }, undefined, p258 || undefined, true, (p270, p271) => {
            vF9(p271);
          });
        }
      };
      const vF12 = () => {
        if (p258) {
          p258.loadImage(v88, v94);
        }
      };
      if (!v99 && !v100 && p258 && p258.enableTexturesOffline) {
        p258.open(vF12, vF11);
      } else {
        if (v88.indexOf("file:") !== -1) {
          const vDecodeURIComponent = decodeURIComponent(v88.substring(5).toLowerCase());
          if (C13.FilesToLoad[vDecodeURIComponent] && typeof URL !== "undefined") {
            try {
              let v103;
              try {
                v103 = URL.createObjectURL(C13.FilesToLoad[vDecodeURIComponent]);
              } catch (e4) {
                v103 = URL.createObjectURL(C13.FilesToLoad[vDecodeURIComponent]);
              }
              v94.src = v103;
              v92 = true;
            } catch (e5) {
              v94.src = "";
            }
            return v94;
          }
        }
        vF11();
      }
      return v94;
    };
    const vF13 = (p272, p273, p274, p275, p276) => {
      const v104 = new FileReader();
      const vO4 = {
        onCompleteObservable: new vP2404.e(),
        abort: () => v104.abort()
      };
      v104.onloadend = () => vO4.onCompleteObservable.notifyObservers(vO4);
      if (p276) {
        v104.onerror = () => {
          p276(new C16(`Unable to read ${p272.name}`, p272));
        };
      }
      v104.onload = p277 => {
        p273(p277.target.result);
      };
      if (p274) {
        v104.onprogress = p274;
      }
      if (p275) {
        v104.readAsArrayBuffer(p272);
      } else {
        v104.readAsText(p272);
      }
      return vO4;
    };
    const vF14 = (p278, p279, p280, p281, p282, p283, p284) => {
      if (p278.name) {
        return vF13(p278, p279, p280, p282, p283 ? p285 => {
          p283(undefined, p285);
        } : undefined);
      }
      const vP278 = p278;
      if (vP278.indexOf("file:") !== -1) {
        let vDecodeURIComponent2 = decodeURIComponent(vP278.substring(5).toLowerCase());
        if (vDecodeURIComponent2.indexOf("./") === 0) {
          vDecodeURIComponent2 = vDecodeURIComponent2.substring(2);
        }
        const v105 = C13.FilesToLoad[vDecodeURIComponent2];
        if (v105) {
          return vF13(v105, p279, p280, p282, p283 ? p286 => p283(undefined, new C14(p286.message, p286.file)) : undefined);
        }
      }
      const {
        match: YC,
        type: GC
      } = vF26(vP278);
      if (YC) {
        const vO5 = {
          onCompleteObservable: new vP2404.e(),
          abort: () => () => {}
        };
        try {
          const v106 = p282 ? f4(vP278) : vF27(vP278);
          p279(v106, undefined, GC);
        } catch (e6) {
          if (p283) {
            p283(undefined, e6);
          } else {
            vP2409.e.Error(e6.message || "Failed to parse the Data URL");
          }
        }
        vP24010.e.SetImmediate(() => {
          vO5.onCompleteObservable.notifyObservers(vO5);
        });
        return vO5;
      }
      return vF15(vP278, (p287, p288) => {
        p279(p287, p288?.responseURL, p288 === null || p288 === undefined ? undefined : p288.getResponseHeader("content-type"));
      }, p280, p281, p282, p283 ? p289 => {
        p283(p289.request, new C14(p289.message, p289.request));
      } : undefined, p284);
    };
    const vF15 = (p290, p291, p292, p293, p294, p295, p296) => {
      p290 = vO2.CleanUrl(p290);
      p290 = vO2.PreprocessUrl(p290);
      const v107 = vO2.BaseUrl + p290;
      let v108 = false;
      const vO6 = {
        onCompleteObservable: new vP2404.e(),
        abort: () => v108 = true
      };
      const vF16 = () => {
        let v109;
        let v110 = new vP2402.d();
        let v111 = null;
        const vF17 = () => {
          if (v110) {
            if (p292) {
              v110.removeEventListener("progress", p292);
            }
            if (v109) {
              v110.removeEventListener("readystatechange", v109);
            }
            v110.removeEventListener("loadend", vF18);
          }
        };
        let vF18 = () => {
          vF17();
          vO6.onCompleteObservable.notifyObservers(vO6);
          vO6.onCompleteObservable.clear();
          p292 = undefined;
          v109 = null;
          vF18 = null;
          p295 = undefined;
          p296 = undefined;
          p291 = undefined;
        };
        vO6.abort = () => {
          v108 = true;
          if (vF18) {
            vF18();
          }
          if (v110 && v110.readyState !== (XMLHttpRequest.DONE || 4)) {
            v110.abort();
          }
          if (v111 !== null) {
            clearTimeout(v111);
            v111 = null;
          }
          v110 = null;
        };
        const vF19 = p297 => {
          const v112 = p297.message || "Unknown error";
          if (p295 && v110) {
            p295(new C15(v112, v110));
          } else {
            vP2409.e.Error(v112);
          }
        };
        const vF20 = p298 => {
          if (v110) {
            v110.open("GET", v107);
            if (p296) {
              try {
                p296(v110);
              } catch (e7) {
                vF19(e7);
                return;
              }
            }
            if (p294) {
              v110.responseType = "arraybuffer";
            }
            if (p292) {
              v110.addEventListener("progress", p292);
            }
            if (vF18) {
              v110.addEventListener("loadend", vF18);
            }
            v109 = () => {
              if (!v108 && v110 && v110.readyState === (XMLHttpRequest.DONE || 4)) {
                if (v109) {
                  v110.removeEventListener("readystatechange", v109);
                }
                if (v110.status >= 200 && v110.status < 300 || v110.status === 0 && (!(0, vP2403.k)() || vF24())) {
                  const v113 = p294 ? v110.response : v110.responseText;
                  if (v113 !== null) {
                    try {
                      if (p291) {
                        p291(v113, v110);
                      }
                    } catch (e8) {
                      vF19(e8);
                    }
                    return;
                  }
                }
                const v114 = vO2.DefaultRetryStrategy;
                if (v114) {
                  const vV114 = v114(v107, v110, p298);
                  if (vV114 !== -1) {
                    vF17();
                    v110 = new vP2402.d();
                    v111 = setTimeout(() => vF20(p298 + 1), vV114);
                    return;
                  }
                }
                const v115 = new C15("Error status: " + v110.status + " " + v110.statusText + " - Unable to load " + v107, v110);
                if (p295) {
                  p295(v115);
                }
              }
            };
            v110.addEventListener("readystatechange", v109);
            v110.send();
          }
        };
        vF20(0);
      };
      if (p293 && p293.enableSceneOffline) {
        const vF21 = p299 => {
          if (p299 && p299.status > 400) {
            if (p295) {
              p295(p299);
            }
          } else {
            vF16();
          }
        };
        const vF22 = () => {
          if (p293) {
            p293.loadFile(vO2.BaseUrl + p290, p300 => {
              if (!v108 && p291) {
                p291(p300);
              }
              vO6.onCompleteObservable.notifyObservers(vO6);
            }, p292 ? p301 => {
              if (!v108 && p292) {
                p292(p301);
              }
            } : undefined, vF21, p294);
          }
        };
        p293.open(vF22, vF21);
      } else {
        vF16();
      }
      return vO6;
    };
    const vF23 = p302 => {
      const {
        match: yC,
        type: IC
      } = vF26(p302);
      if (yC) {
        return IC || undefined;
      }
      const v116 = p302.lastIndexOf(".");
      switch (p302.substring(v116 + 1).toLowerCase()) {
        case "glb":
          return "model/gltf-binary";
        case "bin":
          return "application/octet-stream";
        case "Gf":
          return "model/gltf+json";
        case "jpg":
        case "jpeg":
          return "image/jpeg";
        case "png":
          return "image/png";
        case "webp":
          return "image/webp";
        default:
          return;
      }
    };
    const vF24 = () => typeof location !== "undefined" && location.protocol === "file:";
    const vF25 = p303 => v86.test(p303);
    const vF26 = p304 => {
      const v117 = v86.exec(p304);
      if (v117 === null || v117.length === 0) {
        return {
          match: false,
          type: ""
        };
      }
      return {
        match: true,
        type: v117[0].replace("data:", "").replace("base64,", "")
      };
    };
    function f4(p305) {
      return (0, vP2406.e)(p305.split(",")[1]);
    }
    const vF27 = p306 => (0, vP2406.f)(p306.split(",")[1]);
    let v118;
    vP24012.b._FileToolsLoadImage = vF8;
    vP24011.b.loadFile = vF14;
    vP2407.m.loadFile = vF14;
    ((p307, p308, p309, p310, p311, p312, p313, p314, p315, p316) => {
      v118 = {
        DecodeBase64UrlToBinary: p307,
        DecodeBase64UrlToString: p308,
        DefaultRetryStrategy: p309.DefaultRetryStrategy,
        BaseUrl: p309.BaseUrl,
        CorsBehavior: p309.CorsBehavior,
        PreprocessUrl: p309.PreprocessUrl,
        IsBase64DataUrl: p310,
        IsFileURL: p311,
        LoadFile: p312,
        LoadImage: p313,
        ReadFile: p314,
        RequestFile: p315,
        SetCorsBehavior: p316
      };
      Object.defineProperty(v118, "DefaultRetryStrategy", {
        get: function () {
          return p309.DefaultRetryStrategy;
        },
        set: function (p317) {
          p309.DefaultRetryStrategy = p317;
        }
      });
      Object.defineProperty(v118, "BaseUrl", {
        get: function () {
          return p309.BaseUrl;
        },
        set: function (p318) {
          p309.BaseUrl = p318;
        }
      });
      Object.defineProperty(v118, "PreprocessUrl", {
        get: function () {
          return p309.PreprocessUrl;
        },
        set: function (p319) {
          p309.PreprocessUrl = p319;
        }
      });
      Object.defineProperty(v118, "CorsBehavior", {
        get: function () {
          return p309.CorsBehavior;
        },
        set: function (p320) {
          p309.CorsBehavior = p320;
        }
      });
    })(f4, vF27, vO2, vF25, vF24, vF14, vF8, vF13, vF15, vF7);
  },
  16930: (p321, p322, p323) => {
    function f5() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, p324 => {
        const v119 = Math.random() * 16 | 0;
        return (p324 === "x" ? v119 : v119 & 3 | 8).toString(16);
      });
    }
    p323.d(p322, {
      c: () => f5
    });
  },
  16923: (p325, p326, p327) => {
    p327.d(p326, {
      d: () => C17
    });
    var vP327 = p327(16811);
    var vP3272 = p327(16927);
    class C17 {
      static Instantiate(p328) {
        if (this.RegisteredExternalClasses && this.RegisteredExternalClasses[p328]) {
          return this.RegisteredExternalClasses[p328];
        }
        const v120 = (0, vP3272.d)(p328);
        if (v120) {
          return v120;
        }
        vP327.e.Warn(p328 + " not found, you may have missed an import.");
        const v121 = p328.split(".");
        let v122 = window || this;
        for (let vLN09 = 0, v123 = v121.length; vLN09 < v123; vLN09++) {
          v122 = v122[v121[vLN09]];
        }
        if (typeof v122 !== "function") {
          return null;
        } else {
          return v122;
        }
      }
    }
    C17.RegisteredExternalClasses = {};
  },
  16821: (p329, p330, p331) => {
    p331.d(p330, {
      d: () => C18
    });
    var vP331 = p331(16805);
    class C18 {
      static get Now() {
        if ((0, vP331.k)() && window.performance && window.performance.now) {
          return window.performance.now();
        } else {
          return Date.now();
        }
      }
    }
  },
  16850: (p332, p333, p334) => {
    p334.d(p333, {
      e: () => vF31,
      f: () => vF30,
      j: () => vF28,
      n: () => vF29
    });
    const vF28 = p335 => {
      if (typeof TextDecoder !== "undefined") {
        return new TextDecoder().decode(p335);
      }
      let vLS2 = "";
      for (let vLN010 = 0; vLN010 < p335.byteLength; vLN010++) {
        vLS2 += String.fromCharCode(p335[vLN010]);
      }
      return vLS2;
    };
    const vF29 = p336 => {
      const vLSABCDEFGHIJKLMNOPQRST = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      let v124;
      let v125;
      let v126;
      let v127;
      let v128;
      let v129;
      let v130;
      let vLS3 = "";
      let vLN011 = 0;
      const v131 = ArrayBuffer.isView(p336) ? new Uint8Array(p336.buffer, p336.byteOffset, p336.byteLength) : new Uint8Array(p336);
      while (vLN011 < v131.length) {
        v124 = v131[vLN011++];
        v125 = vLN011 < v131.length ? v131[vLN011++] : Number.NaN;
        v126 = vLN011 < v131.length ? v131[vLN011++] : Number.NaN;
        v127 = v124 >> 2;
        v128 = (v124 & 3) << 4 | v125 >> 4;
        v129 = (v125 & 15) << 2 | v126 >> 6;
        v130 = v126 & 63;
        if (isNaN(v125)) {
          v129 = v130 = 64;
        } else if (isNaN(v126)) {
          v130 = 64;
        }
        vLS3 += vLSABCDEFGHIJKLMNOPQRST.charAt(v127) + vLSABCDEFGHIJKLMNOPQRST.charAt(v128) + vLSABCDEFGHIJKLMNOPQRST.charAt(v129) + vLSABCDEFGHIJKLMNOPQRST.charAt(v130);
      }
      return vLS3;
    };
    const vF30 = p337 => atob(p337);
    const vF31 = p338 => {
      const vVF30 = vF30(p338);
      const v132 = vVF30.length;
      const v133 = new Uint8Array(new ArrayBuffer(v132));
      for (let vLN012 = 0; vLN012 < v132; vLN012++) {
        v133[vLN012] = vVF30.charCodeAt(vLN012);
      }
      return v133.buffer;
    };
  },
  16939: (p339, p340, p341) => {
    function f6(p342) {
      let vLN1 = 1;
      do {
        vLN1 *= 2;
      } while (vLN1 < p342);
      return vLN1 === p342;
    }
    function f7(p343, p344, p345) {
      return p343 * (1 - p345) + p344 * p345;
    }
    function f8(p346) {
      const vAC = f9(p346);
      const vMy = f10(p346);
      if (vAC - p346 > p346 - vMy) {
        return vMy;
      } else {
        return vAC;
      }
    }
    function f9(p347) {
      p347--;
      p347 |= p347 >> 1;
      p347 |= p347 >> 2;
      p347 |= p347 >> 4;
      p347 |= p347 >> 8;
      p347 |= p347 >> 16;
      return ++p347;
    }
    function f10(p348) {
      p348 |= p348 >> 1;
      p348 |= p348 >> 2;
      p348 |= p348 >> 4;
      p348 |= p348 >> 8;
      return (p348 |= p348 >> 16) - (p348 >> 1);
    }
    function f11(p349, p350) {
      let v134;
      switch (arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2) {
        case 1:
          v134 = f10(p349);
          break;
        case 2:
          v134 = f8(p349);
          break;
        default:
          v134 = f9(p349);
      }
      return Math.min(v134, p350);
    }
    p341.d(p340, {
      b: () => f10,
      f: () => f11,
      g: () => f6,
      k: () => f7,
      o: () => f8
    });
  },
  16787: (p351, p352, p353) => {
    p353.r(p352);
    p353.d(p352, {
      AsyncLoop: () => C20,
      Tools: () => C19,
      className: () => f12
    });
    var vP353 = p353(16796);
    var vP3532 = p353(16805);
    var vP3533 = p353(16811);
    var vP3534 = p353(16815);
    var vP3535 = p353(16821);
    var vP3536 = p353(16829);
    var vP3537 = p353(16832);
    var vP3538 = p353(16837);
    var vP3539 = p353(16840);
    var vP35310 = p353(16872);
    var vP35311 = p353(16923);
    var vP35312 = p353(16930);
    var vP35313 = p353(16939);
    class C19 {
      static get BaseUrl() {
        return vP3539.f.BaseUrl;
      }
      static set BaseUrl(p354) {
        vP3539.f.BaseUrl = p354;
      }
      static get CleanUrl() {
        return vP3539.f.CleanUrl;
      }
      static set CleanUrl(p355) {
        vP3539.f.CleanUrl = p355;
      }
      static IsAbsoluteUrl(p356) {
        return p356.indexOf("//") === 0 || p356.indexOf("://") !== -1 && p356.indexOf(".") !== -1 && p356.indexOf("/") !== -1 && !(p356.indexOf(":") > p356.indexOf("/")) && (p356.indexOf("://") < p356.indexOf(".") || p356.indexOf("data:") === 0 || p356.indexOf("blob:") === 0);
      }
      static set ScriptBaseUrl(p357) {
        vP3539.f.ScriptBaseUrl = p357;
      }
      static get ScriptBaseUrl() {
        return vP3539.f.ScriptBaseUrl;
      }
      static set CDNBaseUrl(p358) {
        C19.ScriptBaseUrl = p358;
        C19.AssetBaseUrl = p358;
      }
      static set ScriptPreprocessUrl(p359) {
        vP3539.f.ScriptPreprocessUrl = p359;
      }
      static get ScriptPreprocessUrl() {
        return vP3539.f.ScriptPreprocessUrl;
      }
      static get DefaultRetryStrategy() {
        return vP3539.f.DefaultRetryStrategy;
      }
      static set DefaultRetryStrategy(p360) {
        vP3539.f.DefaultRetryStrategy = p360;
      }
      static get CorsBehavior() {
        return vP3539.f.CorsBehavior;
      }
      static set CorsBehavior(p361) {
        vP3539.f.CorsBehavior = p361;
      }
      static get UseFallbackTexture() {
        return vP3538.b.UseFallbackTexture;
      }
      static set UseFallbackTexture(p362) {
        vP3538.b.UseFallbackTexture = p362;
      }
      static get RegisteredExternalClasses() {
        return vP35311.d.RegisteredExternalClasses;
      }
      static set RegisteredExternalClasses(p363) {
        vP35311.d.RegisteredExternalClasses = p363;
      }
      static get fallbackTexture() {
        return vP3538.b.FallbackTexture;
      }
      static set fallbackTexture(p364) {
        vP3538.b.FallbackTexture = p364;
      }
      static FetchToRef(p365, p366, p367, p368, p369, p370) {
        const v135 = ((Math.abs(p365) * p367 % p367 | 0) + (Math.abs(p366) * p368 % p368 | 0) * p367) * 4;
        p370.r = p369[v135] / 255;
        p370.g = p369[v135 + 1] / 255;
        p370.b = p369[v135 + 2] / 255;
        p370.a = p369[v135 + 3] / 255;
      }
      static Mix(p371, p372, p373) {
        return 0;
      }
      static Instantiate(p374) {
        return vP35311.d.Instantiate(p374);
      }
      static SetImmediate(p375) {
        vP35310.e.SetImmediate(p375);
      }
      static IsExponentOfTwo(p376) {
        return true;
      }
      static FloatRound(p377) {
        return Math.fround(p377);
      }
      static GetFilename(p378) {
        const v136 = p378.lastIndexOf("/");
        if (v136 < 0) {
          return p378;
        } else {
          return p378.substring(v136 + 1);
        }
      }
      static GetFolderPath(p379, yC = false) {
        const v137 = p379.lastIndexOf("/");
        if (v137 < 0) {
          if (p352) {
            return p379;
          } else {
            return "";
          }
        } else {
          return p379.substring(0, v137 + 1);
        }
      }
      static ToDegrees(p380) {
        return p380 * 180 / Math.PI;
      }
      static ToRadians(p381) {
        return p381 * Math.PI / 180;
      }
      static SmoothAngleChange(p382, p383, IC = 0.9) {
        const v138 = this.ToRadians(p382);
        const v139 = this.ToRadians(p383);
        return this.ToDegrees(Math.atan2((1 - IC) * Math.sin(v139) + IC * Math.sin(v138), (1 - IC) * Math.cos(v139) + IC * Math.cos(v138)));
      }
      static MakeArray(p384, p385) {
        if (p385 === true || p384 !== undefined && p384 != null) {
          if (Array.isArray(p384)) {
            return p384;
          } else {
            return [p384];
          }
        } else {
          return null;
        }
      }
      static GetPointerPrefix(p386) {
        if ((0, vP3532.k)() && !window.PointerEvent) {
          return "mouse";
        } else {
          return "pointer";
        }
      }
      static SetCorsBehavior(p387, p388) {
        (0, vP3539.w)(p387, p388);
      }
      static SetReferrerPolicyBehavior(p389, p390) {
        p390.referrerPolicy = p389;
      }
      static get PreprocessUrl() {
        return vP3539.f.PreprocessUrl;
      }
      static set PreprocessUrl(p391) {
        vP3539.f.PreprocessUrl = p391;
      }
      static LoadImage(p392, p393, p394, p395, p396, p397) {
        return (0, vP3539.r)(p392, p393, p394, p395, p396, p397);
      }
      static LoadFile(p398, p399, p400, p401, p402, p403) {
        return (0, vP3539.o)(p398, p399, p400, p401, p402, p403);
      }
      static async LoadFileAsync(p404) {
        let v140 = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
        return await new Promise((p405, p406) => {
          (0, vP3539.o)(p404, p407 => {
            p405(p407);
          }, undefined, undefined, v140, (p408, p409) => {
            p406(p409);
          });
        });
      }
      static GetAssetUrl(p410) {
        if (!p410) {
          return "";
        }
        if (C19.AssetBaseUrl && p410.startsWith(C19._DefaultAssetsUrl)) {
          const v141 = C19.AssetBaseUrl[C19.AssetBaseUrl.length - 1] === "/" ? C19.AssetBaseUrl.substring(0, C19.AssetBaseUrl.length - 1) : C19.AssetBaseUrl;
          return p410.replace(C19._DefaultAssetsUrl, v141);
        }
        return p410;
      }
      static GetBabylonScriptURL(p411, p412) {
        if (!p411) {
          return "";
        }
        if (C19.ScriptBaseUrl && p411.startsWith(C19._DefaultCdnUrl)) {
          const v142 = C19.ScriptBaseUrl[C19.ScriptBaseUrl.length - 1] === "/" ? C19.ScriptBaseUrl.substring(0, C19.ScriptBaseUrl.length - 1) : C19.ScriptBaseUrl;
          p411 = p411.replace(C19._DefaultCdnUrl, v142);
        }
        p411 = C19.ScriptPreprocessUrl(p411);
        if (p412) {
          p411 = C19.GetAbsoluteUrl(p411);
        }
        return p411;
      }
      static LoadBabylonScript(p413, p414, p415, p416) {
        p413 = C19.GetBabylonScriptURL(p413);
        C19.LoadScript(p413, p414, p415);
      }
      static async LoadBabylonScriptAsync(p417) {
        p417 = C19.GetBabylonScriptURL(p417);
        return await C19.LoadScriptAsync(p417);
      }
      static LoadScript(p418, p419, p420, p421, gC = false) {
        if (typeof importScripts === "function") {
          try {
            importScripts(p418);
            if (p419) {
              p419();
            }
          } catch (e9) {
            if (p420 !== null && p420 !== undefined) {
              p420(`Unable to load script '${p418}' in worker`, e9);
            }
          }
          return;
        }
        if (!(0, vP3532.k)()) {
          if (p420 !== null && p420 !== undefined) {
            p420(`Cannot load script '${p418}' outside of a window or a worker`);
          }
          return;
        }
        const v143 = document.getElementsByTagName("head")[0];
        const v144 = document.createElement("script");
        if (gC) {
          v144.setAttribute("type", "module");
          v144.innerText = p418;
        } else {
          v144.setAttribute("type", "text/javascript");
          v144.setAttribute("src", p418);
        }
        if (p421) {
          v144.id = p421;
        }
        v144.onload = () => {
          if (p419) {
            p419();
          }
        };
        v144.onerror = p422 => {
          if (p420) {
            p420(`Unable to load script '${p418}'`, p422);
          }
        };
        v143.appendChild(v144);
      }
      static async LoadScriptAsync(p423, p424) {
        return await new Promise((p425, p426) => {
          this.LoadScript(p423, () => {
            p425();
          }, (p427, p428) => {
            p426(p428 || new Error(p427));
          }, p424);
        });
      }
      static ReadFileAsDataURL(p429, p430, p431) {
        const v145 = new FileReader();
        const vO7 = {
          onCompleteObservable: new vP353.e(),
          abort: () => v145.abort()
        };
        v145.onloadend = () => {
          vO7.onCompleteObservable.notifyObservers(vO7);
        };
        v145.onload = p432 => {
          p430(p432.target.result);
        };
        v145.onprogress = p431;
        v145.readAsDataURL(p429);
        return vO7;
      }
      static ReadFile(p433, p434, p435, p436, p437) {
        return (0, vP3539.s)(p433, p434, p435, p436, p437);
      }
      static FileAsURL(p438) {
        const v146 = new Blob([p438]);
        return window.URL.createObjectURL(v146);
      }
      static Format(p439, yC = 2) {
        return p439.toFixed(yC);
      }
      static DeepCopy(p440, p441, p442, p443) {
        vP3534.e.DeepCopy(p440, p441, p442, p443);
      }
      static IsEmpty(p444) {
        for (const v147 in p444) {
          if (Object.prototype.hasOwnProperty.call(p444, v147)) {
            return false;
          }
        }
        return true;
      }
      static RegisterTopRootEvents(p445, p446) {
        for (let vLN013 = 0; vLN013 < p446.length; vLN013++) {
          const v148 = p446[vLN013];
          p445.addEventListener(v148.name, v148.handler, false);
          try {
            if (window.parent) {
              window.parent.addEventListener(v148.name, v148.handler, false);
            }
          } catch (e10) {}
        }
      }
      static UnregisterTopRootEvents(p447, p448) {
        for (let vLN014 = 0; vLN014 < p448.length; vLN014++) {
          const v149 = p448[vLN014];
          p447.removeEventListener(v149.name, v149.handler);
          try {
            if (p447.parent) {
              p447.parent.removeEventListener(v149.name, v149.handler);
            }
          } catch (e11) {}
        }
      }
      static async DumpFramebuffer(p449, p450, p451, p452) {
        throw (0, vP3536.c)("DumpTools");
      }
      static DumpData(p453, p454, p455, p456) {
        throw (0, vP3536.c)("DumpTools");
      }
      static async DumpDataAsync(p457, p458, p459) {
        throw (0, vP3536.c)("DumpTools");
      }
      static _IsOffScreenCanvas(p460) {
        return p460.convertToBlob !== undefined;
      }
      static ToBlob(p461, p462, IC = "image/png", fC) {
        if (!C19._IsOffScreenCanvas(p461) && !p461.toBlob) {
          p461.toBlob = function (p463, p464, p465) {
            setTimeout(() => {
              const vAtob = atob(this.toDataURL(p464, p465).split(",")[1]);
              const v150 = vAtob.length;
              const v151 = new Uint8Array(v150);
              for (let vLN015 = 0; vLN015 < v150; vLN015++) {
                v151[vLN015] = vAtob.charCodeAt(vLN015);
              }
              p463(new Blob([v151]));
            });
          };
        }
        if (C19._IsOffScreenCanvas(p461)) {
          p461.convertToBlob({
            type: p353,
            quality: vP353
          }).then(p466 => p462(p466));
        } else {
          p461.toBlob(function (p467) {
            p462(p467);
          }, p353, vP353);
        }
      }
      static DownloadBlob(p468, p469) {
        if ("download" in document.createElement("a")) {
          if (!p469) {
            const v152 = new Date();
            p469 = "screenshot_" + ((v152.getFullYear() + "-" + (v152.getMonth() + 1)).slice(2) + "-" + v152.getDate() + "_" + v152.getHours() + "-" + ("0" + v152.getMinutes()).slice(-2)) + ".png";
          }
          C19.Download(p468, p469);
        } else if (p468 && typeof URL !== "undefined") {
          const v153 = URL.createObjectURL(p468);
          const v154 = window.open("");
          if (!v154) {
            return;
          }
          const v155 = v154.document.createElement("img");
          v155.onload = function () {
            URL.revokeObjectURL(v153);
          };
          v155.src = v153;
          v154.document.body.appendChild(v155);
        }
      }
      static EncodeScreenshotCanvasData(p470, p471, IC = "image/png", fC, ky) {
        if (typeof fC !== "string" && p471) {
          if (p471) {
            if (C19._IsOffScreenCanvas(p470)) {
              p470.convertToBlob({
                type: IC,
                quality: ky
              }).then(p472 => {
                const v156 = new FileReader();
                v156.readAsDataURL(p472);
                v156.onloadend = () => {
                  const v157 = v156.result;
                  p471(v157);
                };
              });
              return;
            }
            const v158 = p470.toDataURL(IC, ky);
            p471(v158);
          }
        } else {
          this.ToBlob(p470, function (p473) {
            if (p473) {
              C19.DownloadBlob(p473, vP353);
            }
            if (p471) {
              p471("");
            }
          }, IC, ky);
        }
      }
      static Download(p474, p475) {
        if (typeof URL === "undefined") {
          return;
        }
        const v159 = window.URL.createObjectURL(p474);
        const v160 = document.createElement("a");
        document.body.appendChild(v160);
        v160.style.display = "none";
        v160.href = v159;
        v160.download = p475;
        v160.addEventListener("click", () => {
          if (v160.parentElement) {
            v160.parentElement.removeChild(v160);
          }
        });
        v160.click();
        window.URL.revokeObjectURL(v159);
      }
      static BackCompatCameraNoPreventDefault(p476) {
        if (typeof p476[0] === "boolean") {
          return p476[0];
        } else {
          return typeof p476[1] === "boolean" && p476[1];
        }
      }
      static CreateScreenshot(p477, p478, p479, p480) {
        throw (0, vP3536.c)("ScreenshotTools");
      }
      static async CreateScreenshotAsync(p481, p482, p483) {
        throw (0, vP3536.c)("ScreenshotTools");
      }
      static CreateScreenshotUsingRenderTarget(p484, p485, p486, p487) {
        throw (0, vP3536.c)("ScreenshotTools");
      }
      static async CreateScreenshotUsingRenderTargetAsync(p488, p489, p490) {
        throw (0, vP3536.c)("ScreenshotTools");
      }
      static RandomId() {
        return (0, vP35312.c)();
      }
      static IsBase64(p491) {
        return (0, vP3539.i)(p491);
      }
      static DecodeBase64(p492) {
        return (0, vP3539.b)(p492);
      }
      static get errorsCount() {
        return vP3533.e.errorsCount;
      }
      static Log(p493) {
        vP3533.e.Log(p493);
      }
      static Warn(p494) {
        vP3533.e.Warn(p494);
      }
      static Error(p495) {
        vP3533.e.Error(p495);
      }
      static get LogCache() {
        return vP3533.e.LogCache;
      }
      static ClearLogCache() {
        vP3533.e.ClearLogCache();
      }
      static set LogLevels(p496) {
        vP3533.e.LogLevels = p496;
      }
      static set PerformanceLogLevel(p497) {
        if ((p497 & C19.PerformanceUserMarkLogLevel) === C19.PerformanceUserMarkLogLevel) {
          C19.StartPerformanceCounter = C19._StartUserMark;
          C19.EndPerformanceCounter = C19._EndUserMark;
          return;
        } else if ((p497 & C19.PerformanceConsoleLogLevel) === C19.PerformanceConsoleLogLevel) {
          C19.StartPerformanceCounter = C19._StartPerformanceConsole;
          C19.EndPerformanceCounter = C19._EndPerformanceConsole;
          return;
        } else {
          C19.StartPerformanceCounter = C19._StartPerformanceCounterDisabled;
          C19.EndPerformanceCounter = C19._EndPerformanceCounterDisabled;
          return;
        }
      }
      static _StartPerformanceCounterDisabled(p498, p499) {}
      static _EndPerformanceCounterDisabled(p500, p501) {}
      static _StartUserMark(p502) {
        let v161 = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
        if (!C19._Performance) {
          if (!(0, vP3532.k)()) {
            return;
          }
          C19._Performance = window.performance;
        }
        if (v161 && C19._Performance.mark) {
          C19._Performance.mark(p502 + "-Begin");
        }
      }
      static _EndUserMark(p503) {
        if ((!(arguments.length > 1) || arguments[1] === undefined || arguments[1]) && C19._Performance.mark) {
          C19._Performance.mark(p503 + "-End");
          C19._Performance.measure(p503, p503 + "-Begin", p503 + "-End");
        }
      }
      static _StartPerformanceConsole(p504) {
        let v162 = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
        if (v162) {
          C19._StartUserMark(p504, v162);
          if (console.time) {
            console.time(p504);
          }
        }
      }
      static _EndPerformanceConsole(p505) {
        let v163 = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
        if (v163) {
          C19._EndUserMark(p505, v163);
          console.timeEnd(p505);
        }
      }
      static get Now() {
        return vP3535.d.Now;
      }
      static GetClassName(p506, yC = false) {
        let v164 = null;
        if (!yC && p506.getClassName) {
          v164 = p506.getClassName();
        } else {
          if (p506 instanceof Object) {
            v164 = (yC ? p506 : Object.getPrototypeOf(p506)).constructor.__bjsclassName__;
          }
          v164 ||= typeof p506;
        }
        return v164;
      }
      static First(p507, p508) {
        for (const v165 of p507) {
          if (p508(v165)) {
            return v165;
          }
        }
        return null;
      }
      static getFullClassName(p509, yC = false) {
        let v166 = null;
        let v167 = null;
        if (!yC && p509.getClassName) {
          v166 = p509.getClassName();
        } else {
          if (p509 instanceof Object) {
            const v168 = yC ? p509 : Object.getPrototypeOf(p509);
            v166 = v168.constructor.__bjsclassName__;
            v167 = v168.constructor.__bjsmoduleName__;
          }
          v166 ||= typeof p509;
        }
        if (v166) {
          return (v167 != null ? v167 + "." : "") + v166;
        } else {
          return null;
        }
      }
      static async DelayAsync(p510) {
        await new Promise(p511 => {
          setTimeout(() => {
            p511();
          }, p510);
        });
      }
      static IsSafari() {
        return !!(0, vP3532.g)() && /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
      }
    }
    function f12(p512, p513) {
      return p514 => {
        p514.__bjsclassName__ = p512;
        p514.__bjsmoduleName__ = p513 ?? null;
      };
    }
    C19.AssetBaseUrl = "";
    C19.UseCustomRequestHeaders = false;
    C19.CustomRequestHeaders = vP3537.d.CustomRequestHeaders;
    C19.GetDOMTextContent = vP3532.b;
    C19._DefaultCdnUrl = "https://cdn.babylonjs.com";
    C19._DefaultAssetsUrl = "https://assets.babylonjs.com/core";
    C19.GetAbsoluteUrl = typeof document === "object" ? p515 => {
      const v169 = document.createElement("a");
      v169.href = p515;
      return v169.href;
    } : typeof URL === "function" && typeof location === "object" ? p516 => new URL(p516, location.origin).href : () => {
      throw new Error("Unable to get absolute URL. Override BABYLON.Tools.GetAbsoluteUrl to a custom implementation for the current context.");
    };
    C19.NoneLogLevel = vP3533.e.NoneLogLevel;
    C19.MessageLogLevel = vP3533.e.MessageLogLevel;
    C19.WarningLogLevel = vP3533.e.WarningLogLevel;
    C19.ErrorLogLevel = vP3533.e.ErrorLogLevel;
    C19.AllLogLevel = vP3533.e.AllLogLevel;
    C19.IsWindowObjectExist = vP3532.k;
    C19.PerformanceNoneLogLevel = 0;
    C19.PerformanceUserMarkLogLevel = 1;
    C19.PerformanceConsoleLogLevel = 2;
    C19.StartPerformanceCounter = C19._StartPerformanceCounterDisabled;
    C19.EndPerformanceCounter = C19._EndPerformanceCounterDisabled;
    class C20 {
      constructor(p517, p518, p519, fC = 0) {
        this.iterations = p517;
        this.index = fC - 1;
        this._done = false;
        this._fn = p518;
        this._successCallback = p519;
      }
      executeNext() {
        if (!this._done) {
          if (this.index + 1 < this.iterations) {
            ++this.index;
            this._fn(this);
          } else {
            this.breakLoop();
          }
        }
      }
      breakLoop() {
        this._done = true;
        this._successCallback();
      }
      static Run(p520, p521, p522) {
        const v170 = new C20(p520, p521, p522, arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0);
        v170.executeNext();
        return v170;
      }
      static SyncAsyncForLoop(p523, p524, p525, p526, p527, gC = 0) {
        return C20.Run(Math.ceil(p523 / p524), p528 => {
          if (p527 && p527()) {
            p528.breakLoop();
          } else {
            setTimeout(() => {
              for (let vLN016 = 0; vLN016 < p524; ++vLN016) {
                const v171 = p528.index * p524 + vLN016;
                if (v171 >= p523) {
                  break;
                }
                p525(v171);
                if (p527 && p527()) {
                  p528.breakLoop();
                  break;
                }
              }
              p528.executeNext();
            }, vP3533);
          }
        }, p526);
      }
    }
    C19.Mix = vP35313.k;
    C19.IsExponentOfTwo = vP35313.g;
    vP3538.b.FallbackTexture = "data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QBmRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAAExAAIAAAAQAAAATgAAAAAAAABgAAAAAQAAAGAAAAABcGFpbnQubmV0IDQuMC41AP/bAEMABAIDAwMCBAMDAwQEBAQFCQYFBQUFCwgIBgkNCw0NDQsMDA4QFBEODxMPDAwSGBITFRYXFxcOERkbGRYaFBYXFv/bAEMBBAQEBQUFCgYGChYPDA8WFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFv/AABEIAQABAAMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APH6KKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76P//Z";
  },
  16927: (p529, p530, p531) => {
    p531.d(p530, {
      d: () => f14,
      g: () => f13
    });
    const vO8 = {};
    function f13(p532, p533) {
      vO8[p532] = p533;
    }
    function f14(p534) {
      return vO8[p534];
    }
  },
  16832: (p535, p536, p537) => {
    p537.d(p536, {
      d: () => C21
    });
    class C21 {
      constructor() {
        this._xhr = typeof _native !== "undefined" && _native.XMLHttpRequest ? new _native.XMLHttpRequest() : new XMLHttpRequest();
        this._requestURL = "";
      }
      static get IsCustomRequestAvailable() {
        return Object.keys(C21.CustomRequestHeaders).length > 0 || C21.CustomRequestModifiers.length > 0;
      }
      get requestURL() {
        return this._requestURL;
      }
      _injectCustomRequestHeaders() {
        if (!this._shouldSkipRequestModifications(this._requestURL)) {
          for (const v172 in C21.CustomRequestHeaders) {
            const v173 = C21.CustomRequestHeaders[v172];
            if (v173) {
              this._xhr.setRequestHeader(v172, v173);
            }
          }
        }
      }
      _shouldSkipRequestModifications(p538) {
        return C21.SkipRequestModificationForBabylonCDN && (p538.includes("preview.babylonjs.com") || p538.includes("cdn.babylonjs.com"));
      }
      get onprogress() {
        return this._xhr.onprogress;
      }
      set onprogress(p539) {
        this._xhr.onprogress = p539;
      }
      get readyState() {
        return this._xhr.readyState;
      }
      get status() {
        return this._xhr.status;
      }
      get statusText() {
        return this._xhr.statusText;
      }
      get response() {
        return this._xhr.response;
      }
      get responseURL() {
        return this._xhr.responseURL;
      }
      get responseText() {
        return this._xhr.responseText;
      }
      get responseType() {
        return this._xhr.responseType;
      }
      set responseType(p540) {
        this._xhr.responseType = p540;
      }
      get timeout() {
        return this._xhr.timeout;
      }
      set timeout(p541) {
        this._xhr.timeout = p541;
      }
      addEventListener(p542, p543, p544) {
        this._xhr.addEventListener(p542, p543, p544);
      }
      removeEventListener(p545, p546, p547) {
        this._xhr.removeEventListener(p545, p546, p547);
      }
      abort() {
        this._xhr.abort();
      }
      send(p548) {
        if (C21.CustomRequestHeaders) {
          this._injectCustomRequestHeaders();
        }
        this._xhr.send(p548);
      }
      open(p549, p550) {
        for (const v174 of C21.CustomRequestModifiers) {
          if (this._shouldSkipRequestModifications(p550)) {
            return;
          }
          p550 = v174(this._xhr, p550) || p550;
        }
        p550 = (p550 = p550.replace("file:http:", "http:")).replace("file:https:", "https:");
        this._requestURL = p550;
        this._xhr.open(p549, p550, true);
      }
      setRequestHeader(p551, p552) {
        this._xhr.setRequestHeader(p551, p552);
      }
      getResponseHeader(p553) {
        return this._xhr.getResponseHeader(p553);
      }
    }
    C21.CustomRequestHeaders = {};
    C21.CustomRequestModifiers = new Array();
    C21.SkipRequestModificationForBabylonCDN = true;
  }
};
//# sourceMappingURL=pz8l4l.8.e568da00.chunk.js.map
//# debugId=6a129901-9b8d-57c1-abc7-9fb5490bcd8e