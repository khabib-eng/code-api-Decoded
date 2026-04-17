(function () {
  try {
    var v = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : {};
    var v2 = new v.Error().stack;
    if (v2) {
      v._sentryDebugIds = v._sentryDebugIds || {};
      v._sentryDebugIds[v2] = "5e76cdaf-eada-5bd2-a806-c01470b78ebe";
    }
  } catch (e2) {}
})();
export const id = 18;
export const ids = [18];
export const modules = {
  17154: (p, p2, p3) => {
    p3(16876).b.prototype.createDepthStencilTexture = function (p4, p5, p6) {
      if (p5.isCube) {
        const v3 = p4.width || p4;
        return this._createDepthStencilCubeTexture(v3, p5);
      }
      return this._createDepthStencilTexture(p4, p5, p6);
    };
  },
  17130: (p7, p8, p9) => {
    p9(17103).ThinEngine.prototype.setAlphaMode = function (p10, yC = false) {
      if (this._alphaMode !== p10) {
        switch (p10) {
          case 0:
            this._alphaState.alphaBlend = false;
            break;
          case 7:
            this._alphaState.setAlphaBlendFunctionParameters(this._gl.ONE, this._gl.ONE_MINUS_SRC_ALPHA, this._gl.ONE, this._gl.ONE);
            this._alphaState.alphaBlend = true;
            break;
          case 8:
          case 14:
            this._alphaState.setAlphaBlendFunctionParameters(this._gl.ONE, this._gl.ONE_MINUS_SRC_ALPHA, this._gl.ONE, this._gl.ONE_MINUS_SRC_ALPHA);
            this._alphaState.alphaBlend = true;
            break;
          case 2:
            this._alphaState.setAlphaBlendFunctionParameters(this._gl.SRC_ALPHA, this._gl.ONE_MINUS_SRC_ALPHA, this._gl.ONE, this._gl.ONE);
            this._alphaState.alphaBlend = true;
            break;
          case 6:
            this._alphaState.setAlphaBlendFunctionParameters(this._gl.ONE, this._gl.ONE, this._gl.ZERO, this._gl.ONE);
            this._alphaState.alphaBlend = true;
            break;
          case 1:
            this._alphaState.setAlphaBlendFunctionParameters(this._gl.SRC_ALPHA, this._gl.ONE, this._gl.ZERO, this._gl.ONE);
            this._alphaState.alphaBlend = true;
            break;
          case 3:
            this._alphaState.setAlphaBlendFunctionParameters(this._gl.ZERO, this._gl.ONE_MINUS_SRC_COLOR, this._gl.ONE, this._gl.ONE);
            this._alphaState.alphaBlend = true;
            break;
          case 4:
            this._alphaState.setAlphaBlendFunctionParameters(this._gl.DST_COLOR, this._gl.ZERO, this._gl.ONE, this._gl.ONE);
            this._alphaState.alphaBlend = true;
            break;
          case 5:
            this._alphaState.setAlphaBlendFunctionParameters(this._gl.SRC_ALPHA, this._gl.ONE_MINUS_SRC_COLOR, this._gl.ONE, this._gl.ONE);
            this._alphaState.alphaBlend = true;
            break;
          case 9:
            this._alphaState.setAlphaBlendFunctionParameters(this._gl.CONSTANT_COLOR, this._gl.ONE_MINUS_CONSTANT_COLOR, this._gl.CONSTANT_ALPHA, this._gl.ONE_MINUS_CONSTANT_ALPHA);
            this._alphaState.alphaBlend = true;
            break;
          case 10:
            this._alphaState.setAlphaBlendFunctionParameters(this._gl.ONE, this._gl.ONE_MINUS_SRC_COLOR, this._gl.ONE, this._gl.ONE_MINUS_SRC_ALPHA);
            this._alphaState.alphaBlend = true;
            break;
          case 11:
            this._alphaState.setAlphaBlendFunctionParameters(this._gl.ONE, this._gl.ONE, this._gl.ONE, this._gl.ONE);
            this._alphaState.alphaBlend = true;
            break;
          case 12:
            this._alphaState.setAlphaBlendFunctionParameters(this._gl.DST_ALPHA, this._gl.ONE, this._gl.ZERO, this._gl.ZERO);
            this._alphaState.alphaBlend = true;
            break;
          case 13:
            this._alphaState.setAlphaBlendFunctionParameters(this._gl.ONE_MINUS_DST_COLOR, this._gl.ONE_MINUS_SRC_COLOR, this._gl.ONE_MINUS_DST_ALPHA, this._gl.ONE_MINUS_SRC_ALPHA);
            this._alphaState.alphaBlend = true;
            break;
          case 15:
            this._alphaState.setAlphaBlendFunctionParameters(this._gl.ONE, this._gl.ONE, this._gl.ONE, this._gl.ZERO);
            this._alphaState.alphaBlend = true;
            break;
          case 16:
            this._alphaState.setAlphaBlendFunctionParameters(this._gl.ONE_MINUS_DST_COLOR, this._gl.ONE_MINUS_SRC_COLOR, this._gl.ZERO, this._gl.ONE);
            this._alphaState.alphaBlend = true;
            break;
          case 17:
            this._alphaState.setAlphaBlendFunctionParameters(this._gl.SRC_ALPHA, this._gl.ONE_MINUS_SRC_ALPHA, this._gl.ONE, this._gl.ONE_MINUS_SRC_ALPHA);
            this._alphaState.alphaBlend = true;
        }
        if (!yC) {
          this.depthCullingState.depthMask = p10 === 0;
        }
        this._alphaMode = p10;
      } else if (!yC) {
        const v4 = p10 === 0;
        if (this.depthCullingState.depthMask !== v4) {
          this.depthCullingState.depthMask = v4;
        }
      }
    };
  },
  17137: (p11, p12, p13) => {
    var vP13 = p13(17103);
    vP13.ThinEngine.prototype.updateDynamicIndexBuffer = function (p14, p15) {
      let v5;
      this._currentBoundBuffer[this._gl.ELEMENT_ARRAY_BUFFER] = null;
      this.bindIndexBuffer(p14);
      v5 = p14.is32Bits ? p15 instanceof Uint32Array ? p15 : new Uint32Array(p15) : p15 instanceof Uint16Array ? p15 : new Uint16Array(p15);
      this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, v5, this._gl.DYNAMIC_DRAW);
      this._resetIndexBufferBinding();
    };
    vP13.ThinEngine.prototype.updateDynamicVertexBuffer = function (p16, p17, p18, p19) {
      this.bindArrayBuffer(p16);
      if (p18 === undefined) {
        p18 = 0;
      }
      const v6 = p17.byteLength || p17.length;
      if (p19 === undefined || p19 >= v6 && p18 === 0) {
        if (p17 instanceof Array) {
          this._gl.bufferSubData(this._gl.ARRAY_BUFFER, p18, new Float32Array(p17));
        } else {
          this._gl.bufferSubData(this._gl.ARRAY_BUFFER, p18, p17);
        }
      } else if (p17 instanceof Array) {
        this._gl.bufferSubData(this._gl.ARRAY_BUFFER, p18, new Float32Array(p17).subarray(0, p19 / 4));
      } else {
        p17 = p17 instanceof ArrayBuffer ? new Uint8Array(p17, 0, p19) : new Uint8Array(p17.buffer, p17.byteOffset, p19);
        this._gl.bufferSubData(this._gl.ARRAY_BUFFER, p18, p17);
      }
      this._resetVertexBufferBinding();
    };
  },
  17143: (p20, p21, p22) => {
    var vP22 = p22(18);
    var vP222 = p22(16909);
    var vP223 = p22(16811);
    var vP224 = p22(17103);
    var vP225 = p22(17148);
    var vP226 = p22(17125);
    class C extends vP225.c {
      setDepthStencilTexture(p23) {
        let v7 = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
        super.setDepthStencilTexture(p23, v7);
        if (!p23) {
          return;
        }
        const v8 = this._engine;
        const v9 = this._context;
        const v10 = p23._hardwareTexture;
        if (v10 && p23._autoMSAAManagement && this._MSAAFramebuffer) {
          const v11 = v8._currentFramebuffer;
          v8._bindUnboundFramebuffer(this._MSAAFramebuffer);
          v9.framebufferRenderbuffer(v9.FRAMEBUFFER, (0, vP226.e)(p23.format) ? v9.DEPTH_STENCIL_ATTACHMENT : v9.DEPTH_ATTACHMENT, v9.RENDERBUFFER, v10.getMSAARenderBuffer());
          v8._bindUnboundFramebuffer(v11);
        }
      }
      constructor(p24, p25, p26, p27, p28) {
        super(p24, p25, p26, p27);
        this._framebuffer = null;
        this._depthStencilBuffer = null;
        this._MSAAFramebuffer = null;
        this._colorTextureArray = null;
        this._depthStencilTextureArray = null;
        this._disposeOnlyFramebuffers = false;
        this._currentLOD = 0;
        this._context = p28;
      }
      _cloneRenderTargetWrapper() {
        let v12 = null;
        if (this._colorTextureArray && this._depthStencilTextureArray) {
          v12 = this._engine.createMultiviewRenderTargetTexture(this.width, this.height);
          v12.texture.isReady = true;
        } else {
          v12 = super._cloneRenderTargetWrapper();
        }
        return v12;
      }
      _swapRenderTargetWrapper(p29) {
        super._swapRenderTargetWrapper(p29);
        p29._framebuffer = this._framebuffer;
        p29._depthStencilBuffer = this._depthStencilBuffer;
        p29._MSAAFramebuffer = this._MSAAFramebuffer;
        p29._colorTextureArray = this._colorTextureArray;
        p29._depthStencilTextureArray = this._depthStencilTextureArray;
        this._framebuffer = this._depthStencilBuffer = this._MSAAFramebuffer = this._colorTextureArray = this._depthStencilTextureArray = null;
      }
      createDepthStencilTexture(CC = 0) {
        let v13 = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
        let v14 = arguments.length > 2 && arguments[2] !== undefined && arguments[2];
        let v15 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
        let v16 = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 14;
        let v17 = arguments.length > 5 ? arguments[5] : undefined;
        if (this._depthStencilBuffer) {
          const v18 = this._engine;
          const v19 = v18._currentFramebuffer;
          const v20 = this._context;
          v18._bindUnboundFramebuffer(this._framebuffer);
          v20.framebufferRenderbuffer(v20.FRAMEBUFFER, v20.DEPTH_STENCIL_ATTACHMENT, v20.RENDERBUFFER, null);
          v20.framebufferRenderbuffer(v20.FRAMEBUFFER, v20.DEPTH_ATTACHMENT, v20.RENDERBUFFER, null);
          v20.framebufferRenderbuffer(v20.FRAMEBUFFER, v20.STENCIL_ATTACHMENT, v20.RENDERBUFFER, null);
          v18._bindUnboundFramebuffer(v19);
          v20.deleteRenderbuffer(this._depthStencilBuffer);
          this._depthStencilBuffer = null;
        }
        return super.createDepthStencilTexture(CC, v13, v14, v15, v16, v17);
      }
      shareDepth(p30) {
        super.shareDepth(p30);
        const v21 = this._context;
        const v22 = this._depthStencilBuffer;
        const v23 = p30._MSAAFramebuffer || p30._framebuffer;
        const v24 = this._engine;
        if (p30._depthStencilBuffer && p30._depthStencilBuffer !== v22) {
          v21.deleteRenderbuffer(p30._depthStencilBuffer);
        }
        p30._depthStencilBuffer = v22;
        const v25 = p30._generateStencilBuffer ? v21.DEPTH_STENCIL_ATTACHMENT : v21.DEPTH_ATTACHMENT;
        v24._bindUnboundFramebuffer(v23);
        v21.framebufferRenderbuffer(v21.FRAMEBUFFER, v25, v21.RENDERBUFFER, v22);
        v24._bindUnboundFramebuffer(null);
      }
      _bindTextureRenderTarget(p31, yC = 0, IC, fC = 0) {
        const v26 = p31._hardwareTexture;
        if (!v26) {
          return;
        }
        const v27 = this._framebuffer;
        const v28 = this._engine;
        const v29 = v28._currentFramebuffer;
        let v30;
        v28._bindUnboundFramebuffer(v27);
        if (v28.webGLVersion > 1) {
          const v31 = this._context;
          v30 = v31["COLOR_ATTACHMENT" + yC];
          if (p31.is2DArray || p31.is3D) {
            IC = IC ?? this.layerIndices?.[yC] ?? 0;
            v31.framebufferTextureLayer(v31.FRAMEBUFFER, v30, v26.underlyingResource, fC, IC);
          } else if (p31.isCube) {
            IC = IC ?? this.faceIndices?.[yC] ?? 0;
            v31.framebufferTexture2D(v31.FRAMEBUFFER, v30, v31.TEXTURE_CUBE_MAP_POSITIVE_X + IC, v26.underlyingResource, fC);
          } else {
            v31.framebufferTexture2D(v31.FRAMEBUFFER, v30, v31.TEXTURE_2D, v26.underlyingResource, fC);
          }
        } else {
          const v32 = this._context;
          v30 = v32["COLOR_ATTACHMENT" + yC + "_WEBGL"];
          const v33 = IC !== undefined ? v32.TEXTURE_CUBE_MAP_POSITIVE_X + IC : v32.TEXTURE_2D;
          v32.framebufferTexture2D(v32.FRAMEBUFFER, v30, v33, v26.underlyingResource, fC);
        }
        if (p31._autoMSAAManagement && this._MSAAFramebuffer) {
          const v34 = this._context;
          v28._bindUnboundFramebuffer(this._MSAAFramebuffer);
          v34.framebufferRenderbuffer(v34.FRAMEBUFFER, v30, v34.RENDERBUFFER, v26.getMSAARenderBuffer());
        }
        v28._bindUnboundFramebuffer(v29);
      }
      setTexture(p32, yC = 0) {
        let v35 = !(arguments.length > 2) || arguments[2] === undefined || arguments[2];
        super.setTexture(p32, yC, v35);
        this._bindTextureRenderTarget(p32, yC);
      }
      setLayerAndFaceIndices(p33, p34) {
        super.setLayerAndFaceIndices(p33, p34);
        if (!this.textures || !this.layerIndices || !this.faceIndices) {
          return;
        }
        const v36 = this._attachments?.length ?? this.textures.length;
        for (let vLN0 = 0; vLN0 < v36; vLN0++) {
          const v37 = this.textures[vLN0];
          if (v37) {
            if (v37.is2DArray || v37.is3D) {
              this._bindTextureRenderTarget(v37, vLN0, this.layerIndices[vLN0]);
            } else if (v37.isCube) {
              this._bindTextureRenderTarget(v37, vLN0, this.faceIndices[vLN0]);
            } else {
              this._bindTextureRenderTarget(v37, vLN0);
            }
          }
        }
      }
      setLayerAndFaceIndex(CC = 0, yC, IC) {
        super.setLayerAndFaceIndex(CC, yC, IC);
        if (!this.textures || !this.layerIndices || !this.faceIndices) {
          return;
        }
        const v38 = this.textures[CC];
        if (v38.is2DArray || v38.is3D) {
          this._bindTextureRenderTarget(this.textures[p20], p20, this.layerIndices[p20]);
        } else if (v38.isCube) {
          this._bindTextureRenderTarget(this.textures[p20], p20, this.faceIndices[p20]);
        }
      }
      resolveMSAATextures() {
        const v39 = this._engine;
        const v40 = v39._currentFramebuffer;
        v39._bindUnboundFramebuffer(this._MSAAFramebuffer);
        super.resolveMSAATextures();
        v39._bindUnboundFramebuffer(v40);
      }
      dispose(CC = this._disposeOnlyFramebuffers) {
        const v41 = this._context;
        if (!CC) {
          if (this._colorTextureArray) {
            this._context.deleteTexture(this._colorTextureArray);
            this._colorTextureArray = null;
          }
          if (this._depthStencilTextureArray) {
            this._context.deleteTexture(this._depthStencilTextureArray);
            this._depthStencilTextureArray = null;
          }
        }
        if (this._framebuffer) {
          v41.deleteFramebuffer(this._framebuffer);
          this._framebuffer = null;
        }
        if (this._depthStencilBuffer) {
          v41.deleteRenderbuffer(this._depthStencilBuffer);
          this._depthStencilBuffer = null;
        }
        if (this._MSAAFramebuffer) {
          v41.deleteFramebuffer(this._MSAAFramebuffer);
          this._MSAAFramebuffer = null;
        }
        super.dispose(CC);
      }
    }
    p22(17154);
    vP224.ThinEngine.prototype._createHardwareRenderTargetWrapper = function (p35, p36, p37) {
      const v42 = new C(p35, p36, p37, this, this._gl);
      this._renderTargetWrapperCache.push(v42);
      return v42;
    };
    vP224.ThinEngine.prototype.createRenderTargetTexture = function (p38, p39) {
      const v43 = this._createHardwareRenderTargetWrapper(false, false, p38);
      let v44;
      let v45;
      let v46 = true;
      let v47 = false;
      let v48 = false;
      let vLN1 = 1;
      var v49;
      if (p39 !== undefined && typeof p39 === "object") {
        v46 = (v49 = p39.generateDepthBuffer) === null || v49 === undefined || v49;
        v47 = !!p39.generateStencilBuffer;
        v48 = !!p39.noColorAttachment;
        v44 = p39.colorAttachment;
        vLN1 = p39.samples ?? 1;
        v45 = p39.label;
      }
      const v50 = v44 || (v48 ? null : this._createInternalTexture(p38, p39, true, 5));
      const v51 = p38.width || p38;
      const v52 = p38.height || p38;
      const v53 = this._currentFramebuffer;
      const v54 = this._gl;
      const v55 = v54.createFramebuffer();
      this._bindUnboundFramebuffer(v55);
      v43._depthStencilBuffer = this._setupFramebufferDepthAttachments(v47, v46, v51, v52);
      if (!!v50 && !v50.is2DArray && !v50.is3D) {
        v54.framebufferTexture2D(v54.FRAMEBUFFER, v54.COLOR_ATTACHMENT0, v54.TEXTURE_2D, v50._hardwareTexture.underlyingResource, 0);
      }
      this._bindUnboundFramebuffer(v53);
      v43.label = v45 ?? "RenderTargetWrapper";
      v43._framebuffer = v55;
      v43._generateDepthBuffer = v46;
      v43._generateStencilBuffer = v47;
      v43.setTextures(v50);
      if (v44) {
        v43._samples = v44.samples;
        if (v44.samples > 1) {
          const v56 = v44._hardwareTexture.getMSAARenderBuffer(0);
          v43._MSAAFramebuffer = v54.createFramebuffer();
          this._bindUnboundFramebuffer(v43._MSAAFramebuffer);
          v54.framebufferRenderbuffer(v54.FRAMEBUFFER, v54.COLOR_ATTACHMENT0, v54.RENDERBUFFER, v56);
          this._bindUnboundFramebuffer(null);
        }
      } else {
        this.updateRenderTargetTextureSampleCount(v43, vLN1);
      }
      return v43;
    };
    vP224.ThinEngine.prototype._createDepthStencilTexture = function (p40, p41, p42) {
      const v57 = this._gl;
      const v58 = p40.layers || 0;
      const v59 = p40.depth || 0;
      let v60 = v57.TEXTURE_2D;
      if (v58 !== 0) {
        v60 = v57.TEXTURE_2D_ARRAY;
      } else if (v59 !== 0) {
        v60 = v57.TEXTURE_3D;
      }
      const v61 = new vP222.c(this, 12);
      v61.label = p41.label;
      if (!this._caps.depthTextureExtension) {
        vP223.e.Error("Depth texture is not supported by your browser or hardware.");
        return v61;
      }
      const v62 = (0, vP22.d)({
        bilinearFiltering: false,
        comparisonFunction: 0,
        generateStencil: false
      }, p41);
      this._bindTextureDirectly(v60, v61, true);
      this._setupDepthStencilTexture(v61, p40, v62.comparisonFunction !== 0 && v62.bilinearFiltering, v62.comparisonFunction, v62.samples);
      if (v62.depthTextureFormat !== undefined) {
        if (v62.depthTextureFormat !== 15 && v62.depthTextureFormat !== 16 && v62.depthTextureFormat !== 17 && v62.depthTextureFormat !== 13 && v62.depthTextureFormat !== 14 && v62.depthTextureFormat !== 18) {
          vP223.e.Error(`Depth texture ${v62.depthTextureFormat} format is not supported.`);
          return v61;
        }
        v61.format = v62.depthTextureFormat;
      } else {
        v61.format = v62.generateStencil ? 13 : 16;
      }
      const v63 = (0, vP226.e)(v61.format);
      const v64 = this._getWebGLTextureTypeFromDepthTextureFormat(v61.format);
      const v65 = v63 ? v57.DEPTH_STENCIL : v57.DEPTH_COMPONENT;
      const v66 = this._getInternalFormatFromDepthTextureFormat(v61.format, true, v63);
      if (v61.is2DArray) {
        v57.texImage3D(v60, 0, v66, v61.width, v61.height, v58, 0, v65, v64, null);
      } else if (v61.is3D) {
        v57.texImage3D(v60, 0, v66, v61.width, v61.height, v59, 0, v65, v64, null);
      } else {
        v57.texImage2D(v60, 0, v66, v61.width, v61.height, 0, v65, v64, null);
      }
      this._bindTextureDirectly(v60, null);
      this._internalTexturesCache.push(v61);
      if (p42._depthStencilBuffer) {
        v57.deleteRenderbuffer(p42._depthStencilBuffer);
        p42._depthStencilBuffer = null;
      }
      this._bindUnboundFramebuffer(p42._MSAAFramebuffer ?? p42._framebuffer);
      p42._generateStencilBuffer = v63;
      p42._depthStencilTextureWithStencil = v63;
      p42._depthStencilBuffer = this._setupFramebufferDepthAttachments(p42._generateStencilBuffer, p42._generateDepthBuffer, p42.width, p42.height, p42.samples, v61.format);
      this._bindUnboundFramebuffer(null);
      return v61;
    };
    vP224.ThinEngine.prototype.updateRenderTargetTextureSampleCount = function (p43, p44) {
      if (this.webGLVersion < 2 || !p43) {
        return 1;
      }
      if (p43.samples === p44) {
        return p44;
      }
      const v67 = this._gl;
      p44 = Math.min(p44, this.getCaps().maxMSAASamples);
      if (p43._depthStencilBuffer) {
        v67.deleteRenderbuffer(p43._depthStencilBuffer);
        p43._depthStencilBuffer = null;
      }
      if (p43._MSAAFramebuffer) {
        v67.deleteFramebuffer(p43._MSAAFramebuffer);
        p43._MSAAFramebuffer = null;
      }
      const v68 = p43.texture?._hardwareTexture;
      if (v68 !== null && v68 !== undefined) {
        v68.releaseMSAARenderBuffers();
      }
      if (p43.texture && p44 > 1 && typeof v67.renderbufferStorageMultisample === "function") {
        const v69 = v67.createFramebuffer();
        if (!v69) {
          throw new Error("Unable to create multi sampled framebuffer");
        }
        p43._MSAAFramebuffer = v69;
        this._bindUnboundFramebuffer(p43._MSAAFramebuffer);
        const v70 = this._createRenderBuffer(p43.texture.width, p43.texture.height, p44, -1, this._getRGBABufferInternalSizedFormat(p43.texture.type, p43.texture.format, p43.texture._useSRGBBuffer), v67.COLOR_ATTACHMENT0, false);
        if (!v70) {
          throw new Error("Unable to create multi sampled framebuffer");
        }
        if (v68 !== null && v68 !== undefined) {
          v68.addMSAARenderBuffer(v70);
        }
      }
      this._bindUnboundFramebuffer(p43._MSAAFramebuffer ?? p43._framebuffer);
      if (p43.texture) {
        p43.texture.samples = p44;
      }
      p43._samples = p44;
      const v71 = p43._depthStencilTexture ? p43._depthStencilTexture.format : undefined;
      p43._depthStencilBuffer = this._setupFramebufferDepthAttachments(p43._generateStencilBuffer, p43._generateDepthBuffer, p43.width, p43.height, p44, v71);
      this._bindUnboundFramebuffer(null);
      return p44;
    };
    vP224.ThinEngine.prototype._setupDepthStencilTexture = function (p45, p46, p47, p48) {
      let v72 = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
      const v73 = p46.width ?? p46;
      const v74 = p46.height ?? p46;
      const v75 = p46.layers || 0;
      const v76 = p46.depth || 0;
      p45.baseWidth = v73;
      p45.baseHeight = v74;
      p45.width = v73;
      p45.height = v74;
      p45.is2DArray = v75 > 0;
      p45.depth = v75 || v76;
      p45.isReady = true;
      p45.samples = v72;
      p45.generateMipMaps = false;
      p45.samplingMode = p47 ? 2 : 1;
      p45.type = 0;
      p45._comparisonFunction = p48;
      const v77 = this._gl;
      const v78 = this._getTextureTarget(p45);
      const v79 = this._getSamplingParameters(p45.samplingMode, false);
      v77.texParameteri(v78, v77.TEXTURE_MAG_FILTER, v79.mag);
      v77.texParameteri(v78, v77.TEXTURE_MIN_FILTER, v79.min);
      v77.texParameteri(v78, v77.TEXTURE_WRAP_S, v77.CLAMP_TO_EDGE);
      v77.texParameteri(v78, v77.TEXTURE_WRAP_T, v77.CLAMP_TO_EDGE);
      if (this.webGLVersion > 1) {
        if (p48 === 0) {
          v77.texParameteri(v78, v77.TEXTURE_COMPARE_FUNC, 515);
          v77.texParameteri(v78, v77.TEXTURE_COMPARE_MODE, v77.NONE);
        } else {
          v77.texParameteri(v78, v77.TEXTURE_COMPARE_FUNC, p48);
          v77.texParameteri(v78, v77.TEXTURE_COMPARE_MODE, v77.COMPARE_REF_TO_TEXTURE);
        }
      }
    };
  },
  17117: (p49, p50, p51) => {
    p51.d(p50, {
      e: () => C2
    });
    class C2 {
      get underlyingResource() {
        return this._webGLTexture;
      }
      constructor(CC = null, yC) {
        this._MSAARenderBuffers = null;
        this._context = yC;
        if (!CC && (CC = yC.createTexture(), !CC)) {
          throw new Error("Unable to create webGL texture");
        }
        this.set(CC);
      }
      setUsage() {}
      set(p52) {
        this._webGLTexture = p52;
      }
      reset() {
        this._webGLTexture = null;
        this._MSAARenderBuffers = null;
      }
      addMSAARenderBuffer(p53) {
        this._MSAARenderBuffers ||= [];
        this._MSAARenderBuffers.push(p53);
      }
      releaseMSAARenderBuffers() {
        if (this._MSAARenderBuffers) {
          for (const v80 of this._MSAARenderBuffers) {
            this._context.deleteRenderbuffer(v80);
          }
          this._MSAARenderBuffers = null;
        }
      }
      getMSAARenderBuffer() {
        let v81 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        return this._MSAARenderBuffers?.[v81] ?? null;
      }
      release() {
        this.releaseMSAARenderBuffers();
        if (this._webGLTexture) {
          this._context.deleteTexture(this._webGLTexture);
        }
        this.reset();
      }
    }
  },
  17096: (p54, p55, p56) => {
    p56.d(p55, {
      e: () => C5
    });
    var vP56 = p56(16909);
    var vP562 = p56(16837);
    var vP563 = p56(17103);
    var vP564 = p56(16821);
    class C3 {
      constructor(CC = 30) {
        this._enabled = true;
        this._rollingFrameTime = new C4(CC);
      }
      sampleFrame(CC = vP564.d.Now) {
        if (this._enabled) {
          if (this._lastFrameTimeMs != null) {
            const v82 = CC - this._lastFrameTimeMs;
            this._rollingFrameTime.add(v82);
          }
          this._lastFrameTimeMs = CC;
        }
      }
      get averageFrameTime() {
        return this._rollingFrameTime.average;
      }
      get averageFrameTimeVariance() {
        return this._rollingFrameTime.variance;
      }
      get instantaneousFrameTime() {
        return this._rollingFrameTime.history(0);
      }
      get averageFPS() {
        return 1000 / this._rollingFrameTime.average;
      }
      get instantaneousFPS() {
        const v83 = this._rollingFrameTime.history(0);
        if (v83 === 0) {
          return 0;
        } else {
          return 1000 / v83;
        }
      }
      get isSaturated() {
        return this._rollingFrameTime.isSaturated();
      }
      enable() {
        this._enabled = true;
      }
      disable() {
        this._enabled = false;
        this._lastFrameTimeMs = null;
      }
      get isEnabled() {
        return this._enabled;
      }
      reset() {
        this._lastFrameTimeMs = null;
        this._rollingFrameTime.reset();
      }
    }
    class C4 {
      constructor(p57) {
        this._samples = new Array(p57);
        this.reset();
      }
      add(p58) {
        let v84;
        if (this.isSaturated()) {
          const v85 = this._samples[this._pos];
          v84 = v85 - this.average;
          this.average -= v84 / (this._sampleCount - 1);
          this._m2 -= v84 * (v85 - this.average);
        } else {
          this._sampleCount++;
        }
        v84 = p58 - this.average;
        this.average += v84 / this._sampleCount;
        this._m2 += v84 * (p58 - this.average);
        this.variance = this._m2 / (this._sampleCount - 1);
        this._samples[this._pos] = p58;
        this._pos++;
        this._pos %= this._samples.length;
      }
      history(p59) {
        if (p59 >= this._sampleCount || p59 >= this._samples.length) {
          return 0;
        }
        const v86 = this._wrapPosition(this._pos - 1);
        return this._samples[this._wrapPosition(v86 - p59)];
      }
      isSaturated() {
        return this._sampleCount >= this._samples.length;
      }
      reset() {
        this.average = 0;
        this.variance = 0;
        this._sampleCount = 0;
        this._pos = 0;
        this._m2 = 0;
      }
      _wrapPosition(p60) {
        const v87 = this._samples.length;
        return (p60 % v87 + v87) % v87;
      }
    }
    var vP565 = p56(17112);
    var vP566 = p56(16811);
    var vP567 = p56(17117);
    p56(17130);
    var vP568 = p56(16939);
    function f(p61, p62, p63, p64) {
      let v88;
      let vLN12 = 1;
      if (p64 === 1) {
        v88 = new Float32Array(p62 * p63 * 4);
      } else if (p64 === 2) {
        v88 = new Uint16Array(p62 * p63 * 4);
        vLN12 = 15360;
      } else {
        v88 = p64 === 7 ? new Uint32Array(p62 * p63 * 4) : new Uint8Array(p62 * p63 * 4);
      }
      for (let vLN02 = 0; vLN02 < p62; vLN02++) {
        for (let vLN03 = 0; vLN03 < p63; vLN03++) {
          const v89 = (vLN03 * p62 + vLN02) * 3;
          const v90 = (vLN03 * p62 + vLN02) * 4;
          v88[v90 + 0] = p61[v89 + 0];
          v88[v90 + 1] = p61[v89 + 1];
          v88[v90 + 2] = p61[v89 + 2];
          v88[v90 + 3] = vLN12;
        }
      }
      return v88;
    }
    function f2(p65) {
      return function (p66, p67, p68, p69, p70, p71, p72, p73, LC = null, YC = 0) {
        const v91 = p65 ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY;
        const v92 = p65 ? 10 : 11;
        const v93 = new vP56.c(this, v92);
        v93.baseWidth = p67;
        v93.baseHeight = p68;
        v93.baseDepth = p69;
        v93.width = p67;
        v93.height = p68;
        v93.depth = p69;
        v93.format = p70;
        v93.type = YC;
        v93.generateMipMaps = p71;
        v93.samplingMode = p73;
        if (p65) {
          v93.is3D = true;
        } else {
          v93.is2DArray = true;
        }
        if (!this._doNotHandleContextLost) {
          v93._bufferView = p66;
        }
        if (p65) {
          this.updateRawTexture3D(v93, p66, p70, p72, vP566, vP567);
        } else {
          this.updateRawTexture2DArray(v93, p66, p70, p72, vP566, vP567);
        }
        this._bindTextureDirectly(v91, v93, true);
        const v94 = this._getSamplingParameters(p73, p71);
        this._gl.texParameteri(v91, this._gl.TEXTURE_MAG_FILTER, v94.mag);
        this._gl.texParameteri(v91, this._gl.TEXTURE_MIN_FILTER, v94.min);
        if (p71) {
          this._gl.generateMipmap(v91);
        }
        this._bindTextureDirectly(v91, null);
        this._internalTexturesCache.push(v93);
        return v93;
      };
    }
    function f3(p74) {
      return function (p75, p76, p77, p78, gC = null, AC = 0) {
        const v95 = p74 ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY;
        const v96 = this._getWebGLTextureType(AC);
        const v97 = this._getInternalFormat(p77);
        const v98 = this._getRGBABufferInternalSizedFormat(AC, p77);
        this._bindTextureDirectly(v95, p75, true);
        this._unpackFlipY(p78 === undefined || !!p78);
        if (!this._doNotHandleContextLost) {
          p75._bufferView = p76;
          p75.format = p77;
          p75.invertY = p78;
          p75._compression = vP563;
        }
        if (p75.width % 4 !== 0) {
          this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, 1);
        }
        if (gC && p76) {
          this._gl.compressedTexImage3D(v95, 0, this.getCaps().s3tc[vP563], p75.width, p75.height, p75.depth, 0, p76);
        } else {
          this._gl.texImage3D(v95, 0, v98, p75.width, p75.height, p75.depth, 0, v97, v96, p76);
        }
        if (p75.generateMipMaps) {
          this._gl.generateMipmap(v95);
        }
        this._bindTextureDirectly(v95, null);
        p75.isReady = true;
      };
    }
    vP563.ThinEngine.prototype.updateRawTexture = function (p79, p80, p81, p82, ky = null, gC = 0, AC = false) {
      if (!p79) {
        return;
      }
      const v99 = this._getRGBABufferInternalSizedFormat(gC, p81, AC);
      const v100 = this._getInternalFormat(p81);
      const v101 = this._getWebGLTextureType(gC);
      this._bindTextureDirectly(this._gl.TEXTURE_2D, p79, true);
      this._unpackFlipY(p82 === undefined || !!p82);
      if (!this._doNotHandleContextLost) {
        p79._bufferView = p80;
        p79.format = p81;
        p79.type = vP563;
        p79.invertY = p82;
        p79._compression = vP562;
      }
      if (p79.width % 4 !== 0) {
        this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, 1);
      }
      if (ky && p80) {
        this._gl.compressedTexImage2D(this._gl.TEXTURE_2D, 0, this.getCaps().s3tc[vP562], p79.width, p79.height, 0, p80);
      } else {
        this._gl.texImage2D(this._gl.TEXTURE_2D, 0, v99, p79.width, p79.height, 0, v100, v101, p80);
      }
      if (p79.generateMipMaps) {
        this._gl.generateMipmap(this._gl.TEXTURE_2D);
      }
      this._bindTextureDirectly(this._gl.TEXTURE_2D, null);
      p79.isReady = true;
    };
    vP563.ThinEngine.prototype.createRawTexture = function (p83, p84, p85, p86, p87, p88, p89, XC = null, iy = 0, _param, LC = false) {
      const v102 = new vP56.c(this, 3);
      v102.baseWidth = p84;
      v102.baseHeight = p85;
      v102.width = p84;
      v102.height = p85;
      v102.format = p86;
      v102.generateMipMaps = p87;
      v102.samplingMode = p89;
      v102.invertY = p88;
      v102._compression = XC;
      v102.type = iy;
      v102._useSRGBBuffer = this._getUseSRGBBuffer(LC, !p87);
      if (!this._doNotHandleContextLost) {
        v102._bufferView = p83;
      }
      this.updateRawTexture(v102, p83, p86, p88, XC, iy, v102._useSRGBBuffer);
      this._bindTextureDirectly(this._gl.TEXTURE_2D, v102, true);
      const v103 = this._getSamplingParameters(p89, p87);
      this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, v103.mag);
      this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, v103.min);
      if (p87) {
        this._gl.generateMipmap(this._gl.TEXTURE_2D);
      }
      this._bindTextureDirectly(this._gl.TEXTURE_2D, null);
      this._internalTexturesCache.push(v102);
      return v102;
    };
    vP563.ThinEngine.prototype.createRawCubeTexture = function (p90, p91, p92, p93, p94, p95, p96, XC = null) {
      const v104 = this._gl;
      const v105 = new vP56.c(this, 8);
      v105.isCube = true;
      v105.format = p92;
      v105.type = p93;
      if (!this._doNotHandleContextLost) {
        v105._bufferViewArray = p90;
      }
      const v106 = this._getWebGLTextureType(p93);
      let v107 = this._getInternalFormat(p92);
      if (v107 === v104.RGB) {
        v107 = v104.RGBA;
      }
      if (v106 !== v104.FLOAT || this._caps.textureFloatLinearFiltering) {
        if (v106 !== this._gl.HALF_FLOAT_OES || this._caps.textureHalfFloatLinearFiltering) {
          if (v106 !== v104.FLOAT || this._caps.textureFloatRender) {
            if (v106 === v104.HALF_FLOAT && !this._caps.colorBufferFloat) {
              p94 = false;
              vP566.e.Warn("Render to half float textures is not supported. Mipmap generation forced to false.");
            }
          } else {
            p94 = false;
            vP566.e.Warn("Render to float textures is not supported. Mipmap generation forced to false.");
          }
        } else {
          p94 = false;
          p96 = 1;
          vP566.e.Warn("Half float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively.");
        }
      } else {
        p94 = false;
        p96 = 1;
        vP566.e.Warn("Float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively.");
      }
      const vP91 = p91;
      const vVP91 = vP91;
      v105.width = vP91;
      v105.height = vVP91;
      v105.invertY = p95;
      v105._compression = XC;
      if (!!this.needPOTTextures && (!(0, vP568.g)(v105.width) || !(0, vP568.g)(v105.height))) {
        p94 = false;
      }
      if (p90) {
        this.updateRawCubeTexture(v105, p90, p92, p93, p95, XC);
      } else {
        const v108 = this._getRGBABufferInternalSizedFormat(p93);
        const vLN04 = 0;
        this._bindTextureDirectly(v104.TEXTURE_CUBE_MAP, v105, true);
        for (let vLN05 = 0; vLN05 < 6; vLN05++) {
          if (XC) {
            v104.compressedTexImage2D(v104.TEXTURE_CUBE_MAP_POSITIVE_X + vLN05, vLN04, this.getCaps().s3tc[C4], v105.width, v105.height, 0, undefined);
          } else {
            v104.texImage2D(v104.TEXTURE_CUBE_MAP_POSITIVE_X + vLN05, vLN04, v108, v105.width, v105.height, 0, v107, v106, null);
          }
        }
        this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null);
      }
      this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, v105, true);
      if (p90 && p94) {
        this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP);
      }
      const v109 = this._getSamplingParameters(p96, p94);
      v104.texParameteri(v104.TEXTURE_CUBE_MAP, v104.TEXTURE_MAG_FILTER, v109.mag);
      v104.texParameteri(v104.TEXTURE_CUBE_MAP, v104.TEXTURE_MIN_FILTER, v109.min);
      v104.texParameteri(v104.TEXTURE_CUBE_MAP, v104.TEXTURE_WRAP_S, v104.CLAMP_TO_EDGE);
      v104.texParameteri(v104.TEXTURE_CUBE_MAP, v104.TEXTURE_WRAP_T, v104.CLAMP_TO_EDGE);
      this._bindTextureDirectly(v104.TEXTURE_CUBE_MAP, null);
      v105.generateMipMaps = p94;
      v105.samplingMode = p96;
      v105.isReady = true;
      return v105;
    };
    vP563.ThinEngine.prototype.updateRawCubeTexture = function (p97, p98, p99, p100, p101, gC = null, AC = 0) {
      p97._bufferViewArray = p98;
      p97.format = p99;
      p97.type = p100;
      p97.invertY = p101;
      p97._compression = gC;
      const v110 = this._gl;
      const v111 = this._getWebGLTextureType(p100);
      let v112 = this._getInternalFormat(p99);
      const v113 = this._getRGBABufferInternalSizedFormat(p100);
      let v114 = false;
      if (v112 === v110.RGB) {
        v112 = v110.RGBA;
        v114 = true;
      }
      this._bindTextureDirectly(v110.TEXTURE_CUBE_MAP, p97, true);
      this._unpackFlipY(p101 === undefined || !!p101);
      if (p97.width % 4 !== 0) {
        v110.pixelStorei(v110.UNPACK_ALIGNMENT, 1);
      }
      for (let vLN06 = 0; vLN06 < 6; vLN06++) {
        let v115 = p98[vLN06];
        if (gC) {
          v110.compressedTexImage2D(v110.TEXTURE_CUBE_MAP_POSITIVE_X + vLN06, vP564, this.getCaps().s3tc[vP563], p97.width, p97.height, 0, v115);
        } else {
          if (v114) {
            v115 = f(v115, p97.width, p97.height, p100);
          }
          v110.texImage2D(v110.TEXTURE_CUBE_MAP_POSITIVE_X + vLN06, vP564, v113, p97.width, p97.height, 0, v112, v111, v115);
        }
      }
      if ((!this.needPOTTextures || (0, vP568.g)(p97.width) && (0, vP568.g)(p97.height)) && p97.generateMipMaps && AC === 0) {
        this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP);
      }
      this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null);
      p97.isReady = true;
    };
    vP563.ThinEngine.prototype.createRawCubeTextureFromUrl = function (p102, p103, p104, p105, p106, p107, p108, p109, XC = null, iy = null, LC = 3, YC = false) {
      const v116 = this._gl;
      const v117 = this.createRawCubeTexture(null, p104, p105, p106, !p107, YC, LC, null);
      if (p103 !== null && p103 !== undefined) {
        p103.addPendingData(v117);
      }
      v117.url = p102;
      v117.isReady = false;
      this._internalTexturesCache.push(v117);
      const vF = p110 => {
        if (!v117._hardwareTexture) {
          return;
        }
        const v118 = v117.width;
        const vP108 = p108(p110);
        if (vP108) {
          if (p109) {
            const v119 = this._getWebGLTextureType(p106);
            let v120 = this._getInternalFormat(p105);
            const v121 = this._getRGBABufferInternalSizedFormat(p106);
            let v122 = false;
            if (v120 === v116.RGB) {
              v120 = v116.RGBA;
              v122 = true;
            }
            this._bindTextureDirectly(v116.TEXTURE_CUBE_MAP, v117, true);
            this._unpackFlipY(false);
            const vP109 = p109(vP108);
            for (let vLN07 = 0; vLN07 < vP109.length; vLN07++) {
              const v123 = v118 >> vLN07;
              for (let vLN08 = 0; vLN08 < 6; vLN08++) {
                let v124 = vP109[vLN07][vLN08];
                if (v122) {
                  v124 = f(v124, v123, v123, p106);
                }
                v116.texImage2D(vLN08, vLN07, v121, v123, v123, 0, v120, v119, v124);
              }
            }
            this._bindTextureDirectly(v116.TEXTURE_CUBE_MAP, null);
          } else {
            this.updateRawCubeTexture(v117, vP108, p105, p106, YC);
          }
          v117.isReady = true;
          if (p103 !== null && p103 !== undefined) {
            p103.removePendingData(v117);
          }
          v117.onLoadedObservable.notifyObservers(v117);
          v117.onLoadedObservable.clear();
          if (XC) {
            C4();
          }
        }
      };
      this._loadFile(p102, p111 => {
        vF(p111);
      }, undefined, p103?.offlineProvider, true, (p112, p113) => {
        if (p103 !== null && p103 !== undefined) {
          p103.removePendingData(v117);
        }
        if (iy && p112) {
          vP565(p112.status + " " + p112.statusText, p113);
        }
      });
      return v117;
    };
    vP563.ThinEngine.prototype.createRawTexture2DArray = f2(false);
    vP563.ThinEngine.prototype.createRawTexture3D = f2(true);
    vP563.ThinEngine.prototype.updateRawTexture2DArray = f3(false);
    vP563.ThinEngine.prototype.updateRawTexture3D = f3(true);
    var vP569 = p56(16864);
    vP563.ThinEngine.prototype._readTexturePixelsSync = function (p114, p115, p116, fC = -1, ky = 0, gC = null) {
      let v125 = !(arguments.length > 6) || arguments[6] === undefined || arguments[6];
      let v126 = arguments.length > 7 && arguments[7] !== undefined && arguments[7];
      let v127 = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 0;
      let v128 = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : 0;
      const v129 = this._gl;
      if (!v129) {
        throw new Error("Engine does not have gl rendering context.");
      }
      if (!this._dummyFramebuffer) {
        const v130 = v129.createFramebuffer();
        if (!v130) {
          throw new Error("Unable to create dummy framebuffer");
        }
        this._dummyFramebuffer = v130;
      }
      v129.bindFramebuffer(v129.FRAMEBUFFER, this._dummyFramebuffer);
      if (fC > -1) {
        v129.framebufferTexture2D(v129.FRAMEBUFFER, v129.COLOR_ATTACHMENT0, v129.TEXTURE_CUBE_MAP_POSITIVE_X + vP56, p114._hardwareTexture?.underlyingResource, vP562);
      } else {
        v129.framebufferTexture2D(v129.FRAMEBUFFER, v129.COLOR_ATTACHMENT0, v129.TEXTURE_2D, p114._hardwareTexture?.underlyingResource, vP562);
      }
      let v131 = p114.type !== undefined ? this._getWebGLTextureType(p114.type) : v129.UNSIGNED_BYTE;
      if (v126) {
        gC ||= (0, vP569.i)(p114.type, p115 * 4 * p116);
      } else if (v131 === v129.UNSIGNED_BYTE) {
        gC ||= new Uint8Array(p115 * 4 * p116);
        v131 = v129.UNSIGNED_BYTE;
      } else {
        gC ||= new Float32Array(p115 * 4 * p116);
        v131 = v129.FLOAT;
      }
      if (v125) {
        this.flushFramebuffer();
      }
      v129.readPixels(v127, v128, p115, p116, v129.RGBA, v131, gC);
      v129.bindFramebuffer(v129.FRAMEBUFFER, this._currentFramebuffer);
      return gC;
    };
    vP563.ThinEngine.prototype._readTexturePixels = function (p117, p118, p119, fC = -1, ky = 0, gC = null) {
      let v132 = !(arguments.length > 6) || arguments[6] === undefined || arguments[6];
      let v133 = arguments.length > 7 && arguments[7] !== undefined && arguments[7];
      let v134 = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 0;
      let v135 = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : 0;
      return Promise.resolve(this._readTexturePixelsSync(p117, p118, p119, fC, ky, gC, v132, v133, v134, v135));
    };
    p56(17137);
    var vP5610 = p56(18);
    vP563.ThinEngine.prototype._createDepthStencilCubeTexture = function (p120, p121) {
      const v136 = new vP56.c(this, 12);
      v136.isCube = true;
      if (this.webGLVersion === 1) {
        vP566.e.Error("Depth cube texture is not supported by WebGL 1.");
        return v136;
      }
      const v137 = (0, vP5610.d)({
        bilinearFiltering: false,
        comparisonFunction: 0,
        generateStencil: false
      }, p121);
      const v138 = this._gl;
      this._bindTextureDirectly(v138.TEXTURE_CUBE_MAP, v136, true);
      this._setupDepthStencilTexture(v136, p120, v137.bilinearFiltering, v137.comparisonFunction);
      for (let vLN09 = 0; vLN09 < 6; vLN09++) {
        if (v137.generateStencil) {
          v138.texImage2D(v138.TEXTURE_CUBE_MAP_POSITIVE_X + vLN09, 0, v138.DEPTH24_STENCIL8, p120, p120, 0, v138.DEPTH_STENCIL, v138.UNSIGNED_INT_24_8, null);
        } else {
          v138.texImage2D(v138.TEXTURE_CUBE_MAP_POSITIVE_X + vLN09, 0, v138.DEPTH_COMPONENT24, p120, p120, 0, v138.DEPTH_COMPONENT, v138.UNSIGNED_INT, null);
        }
      }
      this._bindTextureDirectly(v138.TEXTURE_CUBE_MAP, null);
      this._internalTexturesCache.push(v136);
      return v136;
    };
    vP563.ThinEngine.prototype._setCubeMapTextureParams = function (p122, p123, p124) {
      const v139 = this._gl;
      v139.texParameteri(v139.TEXTURE_CUBE_MAP, v139.TEXTURE_MAG_FILTER, v139.LINEAR);
      v139.texParameteri(v139.TEXTURE_CUBE_MAP, v139.TEXTURE_MIN_FILTER, p123 ? v139.LINEAR_MIPMAP_LINEAR : v139.LINEAR);
      v139.texParameteri(v139.TEXTURE_CUBE_MAP, v139.TEXTURE_WRAP_S, v139.CLAMP_TO_EDGE);
      v139.texParameteri(v139.TEXTURE_CUBE_MAP, v139.TEXTURE_WRAP_T, v139.CLAMP_TO_EDGE);
      p122.samplingMode = p123 ? 3 : 2;
      if (p123 && this.getCaps().textureMaxLevel && p124 !== undefined && p124 > 0) {
        v139.texParameteri(v139.TEXTURE_CUBE_MAP, v139.TEXTURE_MAX_LEVEL, p124);
        p122._maxLodLevel = p124;
      }
      this._bindTextureDirectly(v139.TEXTURE_CUBE_MAP, null);
    };
    vP563.ThinEngine.prototype.createCubeTexture = function (p125, p126, p127, p128, ky = null, gC = null, AC, my = null, XC = false, iy = 0, YC = 0, rC = null, _param2, GC = false, eC = null) {
      const v140 = this._gl;
      return this.createCubeTextureBase(p125, p126, p127, !!p128, ky, gC, AC, my, XC, iy, YC, rC, p129 => this._bindTextureDirectly(v140.TEXTURE_CUBE_MAP, p129, true), (p130, p131) => {
        const v141 = this.needPOTTextures ? (0, vP568.f)(p131[0].width, this._caps.maxCubemapTextureSize) : p131[0].width;
        const vV141 = v141;
        const vA = [v140.TEXTURE_CUBE_MAP_POSITIVE_X, v140.TEXTURE_CUBE_MAP_POSITIVE_Y, v140.TEXTURE_CUBE_MAP_POSITIVE_Z, v140.TEXTURE_CUBE_MAP_NEGATIVE_X, v140.TEXTURE_CUBE_MAP_NEGATIVE_Y, v140.TEXTURE_CUBE_MAP_NEGATIVE_Z];
        this._bindTextureDirectly(v140.TEXTURE_CUBE_MAP, p130, true);
        this._unpackFlipY(false);
        const v142 = AC ? this._getInternalFormat(AC, p130._useSRGBBuffer) : p130._useSRGBBuffer ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : v140.RGBA;
        let v143 = AC ? this._getInternalFormat(AC) : v140.RGBA;
        if (p130._useSRGBBuffer && this.webGLVersion === 1) {
          v143 = v142;
        }
        for (let vLN010 = 0; vLN010 < vA.length; vLN010++) {
          if (p131[vLN010].width !== v141 || p131[vLN010].height !== vV141) {
            this._prepareWorkingCanvas();
            if (!this._workingCanvas || !this._workingContext) {
              vP566.e.Warn("Cannot create canvas to resize texture.");
              return;
            }
            this._workingCanvas.width = v141;
            this._workingCanvas.height = vV141;
            this._workingContext.drawImage(p131[vLN010], 0, 0, p131[vLN010].width, p131[vLN010].height, 0, 0, v141, vV141);
            v140.texImage2D(vA[vLN010], 0, v142, v143, v140.UNSIGNED_BYTE, this._workingCanvas);
          } else {
            v140.texImage2D(vA[vLN010], 0, v142, v143, v140.UNSIGNED_BYTE, p131[vLN010]);
          }
        }
        if (!p128) {
          v140.generateMipmap(v140.TEXTURE_CUBE_MAP);
        }
        this._setCubeMapTextureParams(p130, !p128);
        p130.width = v141;
        p130.height = vV141;
        p130.isReady = true;
        if (AC) {
          p130.format = vP564;
        }
        p130.onLoadedObservable.notifyObservers(p130);
        p130.onLoadedObservable.clear();
        if (ky) {
          vP562();
        }
      }, !!GC, eC);
    };
    vP563.ThinEngine.prototype.generateMipMapsForCubemap = function (p132) {
      let v144 = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
      if (p132.generateMipMaps) {
        const v145 = this._gl;
        this._bindTextureDirectly(v145.TEXTURE_CUBE_MAP, p132, true);
        v145.generateMipmap(v145.TEXTURE_CUBE_MAP);
        if (v144) {
          this._bindTextureDirectly(v145.TEXTURE_CUBE_MAP, null);
        }
      }
    };
    p56(17143);
    vP563.ThinEngine.prototype.setDepthStencilTexture = function (p133, p134, p135, p136) {
      if (p133 !== undefined) {
        if (p134) {
          this._boundUniforms[p133] = p134;
        }
        if (p135 && p135.depthStencilTexture) {
          this._setTexture(p133, p135, false, true, p136);
        } else {
          this._setTexture(p133, null, undefined, undefined, p136);
        }
      }
    };
    vP563.ThinEngine.prototype.createRenderTargetCubeTexture = function (p137, p138) {
      const v146 = this._createHardwareRenderTargetWrapper(false, true, p137);
      const v147 = (0, vP5610.d)({
        generateMipMaps: true,
        generateDepthBuffer: true,
        generateStencilBuffer: false,
        type: 0,
        samplingMode: 3,
        format: 5
      }, p138);
      v147.generateStencilBuffer = v147.generateDepthBuffer && v147.generateStencilBuffer;
      if (v147.type === 1 && !this._caps.textureFloatLinearFiltering || v147.type === 2 && !this._caps.textureHalfFloatLinearFiltering) {
        v147.samplingMode = 1;
      }
      const v148 = this._gl;
      const v149 = new vP56.c(this, 5);
      this._bindTextureDirectly(v148.TEXTURE_CUBE_MAP, v149, true);
      const v150 = this._getSamplingParameters(v147.samplingMode, v147.generateMipMaps);
      if (v147.type === 1 && !this._caps.textureFloat) {
        v147.type = 0;
        vP566.e.Warn("Float textures are not supported. Cube render target forced to TEXTURETYPE_UNESIGNED_BYTE type");
      }
      v148.texParameteri(v148.TEXTURE_CUBE_MAP, v148.TEXTURE_MAG_FILTER, v150.mag);
      v148.texParameteri(v148.TEXTURE_CUBE_MAP, v148.TEXTURE_MIN_FILTER, v150.min);
      v148.texParameteri(v148.TEXTURE_CUBE_MAP, v148.TEXTURE_WRAP_S, v148.CLAMP_TO_EDGE);
      v148.texParameteri(v148.TEXTURE_CUBE_MAP, v148.TEXTURE_WRAP_T, v148.CLAMP_TO_EDGE);
      for (let vLN011 = 0; vLN011 < 6; vLN011++) {
        v148.texImage2D(v148.TEXTURE_CUBE_MAP_POSITIVE_X + vLN011, 0, this._getRGBABufferInternalSizedFormat(v147.type, v147.format), p137, p137, 0, this._getInternalFormat(v147.format), this._getWebGLTextureType(v147.type), null);
      }
      const v151 = v148.createFramebuffer();
      this._bindUnboundFramebuffer(v151);
      v146._depthStencilBuffer = this._setupFramebufferDepthAttachments(v147.generateStencilBuffer, v147.generateDepthBuffer, p137, p137);
      if (v147.generateMipMaps) {
        v148.generateMipmap(v148.TEXTURE_CUBE_MAP);
      }
      this._bindTextureDirectly(v148.TEXTURE_CUBE_MAP, null);
      this._bindUnboundFramebuffer(null);
      v146._framebuffer = v151;
      v146._generateDepthBuffer = v147.generateDepthBuffer;
      v146._generateStencilBuffer = v147.generateStencilBuffer;
      v149.width = p137;
      v149.height = p137;
      v149.isReady = true;
      v149.isCube = true;
      v149.samples = 1;
      v149.generateMipMaps = v147.generateMipMaps;
      v149.samplingMode = v147.samplingMode;
      v149.type = v147.type;
      v149.format = v147.format;
      this._internalTexturesCache.push(v149);
      v146.setTextures(v149);
      return v146;
    };
    var vP5611 = p56(17157);
    var vP5612 = p56(16990);
    vP563.ThinEngine.prototype.createPrefilteredCubeTexture = function (p139, p140, p141, p142, AC = null, my = null, XC, iy = null) {
      let v152 = !(arguments.length > 8) || arguments[8] === undefined || arguments[8];
      return this.createCubeTexture(p139, p140, null, false, async p143 => {
        if (!p143) {
          if (AC) {
            vP564(null);
          }
          return;
        }
        const v153 = p143.texture;
        if (v152) {
          if (p143.info.sphericalPolynomial) {
            v153._sphericalPolynomial = p143.info.sphericalPolynomial;
          }
        } else {
          v153._sphericalPolynomial = new vP5611.g();
        }
        v153._source = 9;
        if (this.getCaps().textureLOD) {
          if (AC) {
            vP564(v153);
          }
          return;
        }
        const v154 = this._gl;
        const v155 = p143.width;
        if (!v155) {
          return;
        }
        const {
          DDSTools: bC
        } = await p56.e(29).then(p56.bind(p56, 19279));
        const vA2 = [];
        for (let vLN012 = 0; vLN012 < 3; vLN012++) {
          const v156 = 1 - vLN012 / 2;
          const vP142 = p142;
          const v157 = Math.log2(v155) * p141 + p142;
          const v158 = vP142 + (v157 - vP142) * v156;
          const v159 = Math.round(Math.min(Math.max(v158, 0), v157));
          const v160 = new vP56.c(this, 2);
          v160.type = v153.type;
          v160.format = v153.format;
          v160.width = Math.pow(2, Math.max(Math.log2(v155) - v159, 0));
          v160.height = v160.width;
          v160.isCube = true;
          v160._cachedWrapU = 0;
          v160._cachedWrapV = 0;
          this._bindTextureDirectly(v154.TEXTURE_CUBE_MAP, v160, true);
          v160.samplingMode = 2;
          v154.texParameteri(v154.TEXTURE_CUBE_MAP, v154.TEXTURE_MAG_FILTER, v154.LINEAR);
          v154.texParameteri(v154.TEXTURE_CUBE_MAP, v154.TEXTURE_MIN_FILTER, v154.LINEAR);
          v154.texParameteri(v154.TEXTURE_CUBE_MAP, v154.TEXTURE_WRAP_S, v154.CLAMP_TO_EDGE);
          v154.texParameteri(v154.TEXTURE_CUBE_MAP, v154.TEXTURE_WRAP_T, v154.CLAMP_TO_EDGE);
          if (p143.isDDS) {
            const v161 = p143.info;
            const v162 = p143.data;
            this._unpackFlipY(v161.isCompressed);
            bC.UploadDDSLevels(this, v160, v162, v161, true, 6, v159);
          } else {
            vP566.e.Warn("DDS is the only prefiltered cube map supported so far.");
          }
          this._bindTextureDirectly(v154.TEXTURE_CUBE_MAP, null);
          const v163 = new vP5612.c(p140);
          v163._isCube = true;
          v163._texture = v160;
          v160.isReady = true;
          vA2.push(v163);
        }
        v153._lodTextureHigh = vA2[2];
        v153._lodTextureMid = vA2[1];
        v153._lodTextureLow = vA2[0];
        if (AC) {
          vP564(v153);
        }
      }, my, XC, iy, v152, p141, p142);
    };
    vP563.ThinEngine.prototype.createUniformBuffer = function (p144, p145) {
      const v164 = this._gl.createBuffer();
      if (!v164) {
        throw new Error("Unable to create uniform buffer");
      }
      const v165 = new vP565.b(v164);
      this.bindUniformBuffer(v165);
      if (p144 instanceof Float32Array) {
        this._gl.bufferData(this._gl.UNIFORM_BUFFER, p144, this._gl.STATIC_DRAW);
      } else {
        this._gl.bufferData(this._gl.UNIFORM_BUFFER, new Float32Array(p144), this._gl.STATIC_DRAW);
      }
      this.bindUniformBuffer(null);
      v165.references = 1;
      return v165;
    };
    vP563.ThinEngine.prototype.createDynamicUniformBuffer = function (p146, p147) {
      const v166 = this._gl.createBuffer();
      if (!v166) {
        throw new Error("Unable to create dynamic uniform buffer");
      }
      const v167 = new vP565.b(v166);
      this.bindUniformBuffer(v167);
      if (p146 instanceof Float32Array) {
        this._gl.bufferData(this._gl.UNIFORM_BUFFER, p146, this._gl.DYNAMIC_DRAW);
      } else {
        this._gl.bufferData(this._gl.UNIFORM_BUFFER, new Float32Array(p146), this._gl.DYNAMIC_DRAW);
      }
      this.bindUniformBuffer(null);
      v167.references = 1;
      return v167;
    };
    vP563.ThinEngine.prototype.updateUniformBuffer = function (p148, p149, p150, p151) {
      this.bindUniformBuffer(p148);
      if (p150 === undefined) {
        p150 = 0;
      }
      if (p151 === undefined) {
        if (p149 instanceof Float32Array) {
          this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, p150, p149);
        } else {
          this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, p150, new Float32Array(p149));
        }
      } else if (p149 instanceof Float32Array) {
        this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, 0, p149.subarray(p150, p150 + p151));
      } else {
        this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, 0, new Float32Array(p149).subarray(p150, p150 + p151));
      }
      this.bindUniformBuffer(null);
    };
    vP563.ThinEngine.prototype.bindUniformBuffer = function (p152) {
      this._gl.bindBuffer(this._gl.UNIFORM_BUFFER, p152 ? p152.underlyingResource : null);
    };
    vP563.ThinEngine.prototype.bindUniformBufferBase = function (p153, p154, p155) {
      this._gl.bindBufferBase(this._gl.UNIFORM_BUFFER, p154, p153 ? p153.underlyingResource : null);
    };
    vP563.ThinEngine.prototype.bindUniformBlock = function (p156, p157, p158) {
      const v168 = p156.program;
      const v169 = this._gl.getUniformBlockIndex(v168, p157);
      if (v169 !== 4294967295) {
        this._gl.uniformBlockBinding(v168, v169, p158);
      }
    };
    var vP5613 = p56(16805);
    var vP5614 = p56(16876);
    vP5614.b.prototype.displayLoadingUI = function () {
      if (!(0, vP5613.k)()) {
        return;
      }
      const v170 = this.loadingScreen;
      if (v170) {
        v170.displayLoadingUI();
      }
    };
    vP5614.b.prototype.hideLoadingUI = function () {
      if (!(0, vP5613.k)()) {
        return;
      }
      const v171 = this._loadingScreen;
      if (v171) {
        v171.hideLoadingUI();
      }
    };
    Object.defineProperty(vP5614.b.prototype, "loadingScreen", {
      get: function () {
        if (!this._loadingScreen && this._renderingCanvas) {
          this._loadingScreen = vP5614.b.DefaultLoadingScreenFactory(this._renderingCanvas);
        }
        return this._loadingScreen;
      },
      set: function (p159) {
        this._loadingScreen = p159;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(vP5614.b.prototype, "loadingUIText", {
      set: function (p160) {
        this.loadingScreen.loadingUIText = p160;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(vP5614.b.prototype, "loadingUIBackgroundColor", {
      set: function (p161) {
        this.loadingScreen.loadingUIBackgroundColor = p161;
      },
      enumerable: true,
      configurable: true
    });
    vP5614.b.prototype.getInputElement = function () {
      return this._renderingCanvas;
    };
    vP5614.b.prototype.getRenderingCanvasClientRect = function () {
      if (this._renderingCanvas) {
        return this._renderingCanvas.getBoundingClientRect();
      } else {
        return null;
      }
    };
    vP5614.b.prototype.getInputElementClientRect = function () {
      if (this._renderingCanvas) {
        return this.getInputElement().getBoundingClientRect();
      } else {
        return null;
      }
    };
    vP5614.b.prototype.getAspectRatio = function (p162, yC = false) {
      const v172 = p162.viewport;
      return this.getRenderWidth(yC) * v172.width / (this.getRenderHeight(yC) * v172.height);
    };
    vP5614.b.prototype.getScreenAspectRatio = function () {
      return this.getRenderWidth(true) / this.getRenderHeight(true);
    };
    vP5614.b.prototype._verifyPointerLock = function () {
      var v173;
      if ((v173 = this._onPointerLockChange) !== null && v173 !== undefined) {
        v173.call(this);
      }
    };
    vP5614.b.prototype.setAlphaEquation = function (p163) {
      if (this._alphaEquation !== p163) {
        switch (p163) {
          case 0:
            this._alphaState.setAlphaEquationParameters(32774, 32774);
            break;
          case 1:
            this._alphaState.setAlphaEquationParameters(32778, 32778);
            break;
          case 2:
            this._alphaState.setAlphaEquationParameters(32779, 32779);
            break;
          case 3:
            this._alphaState.setAlphaEquationParameters(32776, 32776);
            break;
          case 4:
            this._alphaState.setAlphaEquationParameters(32775, 32775);
            break;
          case 5:
            this._alphaState.setAlphaEquationParameters(32775, 32774);
        }
        this._alphaEquation = p163;
      }
    };
    vP5614.b.prototype.getInputElement = function () {
      return this._renderingCanvas;
    };
    vP5614.b.prototype.getDepthFunction = function () {
      return this._depthCullingState.depthFunc;
    };
    vP5614.b.prototype.setDepthFunction = function (p164) {
      this._depthCullingState.depthFunc = p164;
    };
    vP5614.b.prototype.setDepthFunctionToGreater = function () {
      this.setDepthFunction(516);
    };
    vP5614.b.prototype.setDepthFunctionToGreaterOrEqual = function () {
      this.setDepthFunction(518);
    };
    vP5614.b.prototype.setDepthFunctionToLess = function () {
      this.setDepthFunction(513);
    };
    vP5614.b.prototype.setDepthFunctionToLessOrEqual = function () {
      this.setDepthFunction(515);
    };
    vP5614.b.prototype.getDepthWrite = function () {
      return this._depthCullingState.depthMask;
    };
    vP5614.b.prototype.setDepthWrite = function (p165) {
      this._depthCullingState.depthMask = p165;
    };
    vP5614.b.prototype.getStencilBuffer = function () {
      return this._stencilState.stencilTest;
    };
    vP5614.b.prototype.setStencilBuffer = function (p166) {
      this._stencilState.stencilTest = p166;
    };
    vP5614.b.prototype.getStencilMask = function () {
      return this._stencilState.stencilMask;
    };
    vP5614.b.prototype.setStencilMask = function (p167) {
      this._stencilState.stencilMask = p167;
    };
    vP5614.b.prototype.getStencilFunction = function () {
      return this._stencilState.stencilFunc;
    };
    vP5614.b.prototype.getStencilFunctionReference = function () {
      return this._stencilState.stencilFuncRef;
    };
    vP5614.b.prototype.getStencilFunctionMask = function () {
      return this._stencilState.stencilFuncMask;
    };
    vP5614.b.prototype.setStencilFunction = function (p168) {
      this._stencilState.stencilFunc = p168;
    };
    vP5614.b.prototype.setStencilFunctionReference = function (p169) {
      this._stencilState.stencilFuncRef = p169;
    };
    vP5614.b.prototype.setStencilFunctionMask = function (p170) {
      this._stencilState.stencilFuncMask = p170;
    };
    vP5614.b.prototype.getStencilOperationFail = function () {
      return this._stencilState.stencilOpStencilFail;
    };
    vP5614.b.prototype.getStencilOperationDepthFail = function () {
      return this._stencilState.stencilOpDepthFail;
    };
    vP5614.b.prototype.getStencilOperationPass = function () {
      return this._stencilState.stencilOpStencilDepthPass;
    };
    vP5614.b.prototype.setStencilOperationFail = function (p171) {
      this._stencilState.stencilOpStencilFail = p171;
    };
    vP5614.b.prototype.setStencilOperationDepthFail = function (p172) {
      this._stencilState.stencilOpDepthFail = p172;
    };
    vP5614.b.prototype.setStencilOperationPass = function (p173) {
      this._stencilState.stencilOpStencilDepthPass = p173;
    };
    vP5614.b.prototype.cacheStencilState = function () {
      this._cachedStencilBuffer = this.getStencilBuffer();
      this._cachedStencilFunction = this.getStencilFunction();
      this._cachedStencilMask = this.getStencilMask();
      this._cachedStencilOperationPass = this.getStencilOperationPass();
      this._cachedStencilOperationFail = this.getStencilOperationFail();
      this._cachedStencilOperationDepthFail = this.getStencilOperationDepthFail();
      this._cachedStencilReference = this.getStencilFunctionReference();
    };
    vP5614.b.prototype.restoreStencilState = function () {
      this.setStencilFunction(this._cachedStencilFunction);
      this.setStencilMask(this._cachedStencilMask);
      this.setStencilBuffer(this._cachedStencilBuffer);
      this.setStencilOperationPass(this._cachedStencilOperationPass);
      this.setStencilOperationFail(this._cachedStencilOperationFail);
      this.setStencilOperationDepthFail(this._cachedStencilOperationDepthFail);
      this.setStencilFunctionReference(this._cachedStencilReference);
    };
    vP5614.b.prototype.setAlphaConstants = function (p174, p175, p176, p177) {
      this._alphaState.setAlphaBlendConstants(p174, p175, p176, p177);
    };
    vP5614.b.prototype.getAlphaMode = function () {
      return this._alphaMode;
    };
    vP5614.b.prototype.getAlphaEquation = function () {
      return this._alphaEquation;
    };
    vP5614.b.prototype.getRenderPassNames = function () {
      return this._renderPassNames;
    };
    vP5614.b.prototype.getCurrentRenderPassName = function () {
      return this._renderPassNames[this.currentRenderPassId];
    };
    vP5614.b.prototype.createRenderPassId = function (p178) {
      const v174 = ++vP5614.b._RenderPassIdCounter;
      this._renderPassNames[v174] = p178 ?? "NONAME";
      return v174;
    };
    vP5614.b.prototype.releaseRenderPassId = function (p179) {
      this._renderPassNames[p179] = undefined;
      for (let vLN013 = 0; vLN013 < this.scenes.length; ++vLN013) {
        const v175 = this.scenes[vLN013];
        for (let vLN014 = 0; vLN014 < v175.meshes.length; ++vLN014) {
          const v176 = v175.meshes[vLN014];
          if (v176.wf) {
            for (let vLN015 = 0; vLN015 < v176.wf.length; ++vLN015) {
              v176.wf[vLN015]._removeDrawWrapper(p179);
            }
          }
        }
      }
    };
    p56(17154);
    function f4(p180) {
      if (p180.requestPointerLock) {
        const v177 = p180.requestPointerLock();
        if (v177 instanceof Promise) {
          v177.then(() => {
            p180.focus();
          }).catch(() => {});
        } else {
          p180.focus();
        }
      }
    }
    var vP5615 = p56(17186);
    var vP5616 = p56(16872);
    class C5 extends vP563.ThinEngine {
      static get NpmPackage() {
        return vP5614.b.NpmPackage;
      }
      static get Version() {
        return vP5614.b.Version;
      }
      static get Instances() {
        return vP562.b.Instances;
      }
      static get LastCreatedEngine() {
        return vP562.b.LastCreatedEngine;
      }
      static get LastCreatedScene() {
        return vP562.b.LastCreatedScene;
      }
      static DefaultLoadingScreenFactory(p181) {
        return vP5614.b.DefaultLoadingScreenFactory(p181);
      }
      get _supportsHardwareTextureRescaling() {
        return !!C5._RescalePostProcessFactory;
      }
      _measureFps() {
        this._performanceMonitor.sampleFrame();
        this._fps = this._performanceMonitor.averageFPS;
        this._deltaTime = this._performanceMonitor.instantaneousFrameTime || 0;
      }
      get performanceMonitor() {
        return this._performanceMonitor;
      }
      constructor(p182, p183, p184) {
        super(p182, p183, p184, arguments.length > 3 && arguments[3] !== undefined && arguments[3]);
        this.customAnimationFrameRequester = null;
        this._performanceMonitor = new C3();
        this._drawCalls = new vP5615.b();
        if (p182) {
          this._features.supportRenderPasses = true;
          p184 = this._creationOptions;
        }
      }
      _initGLContext() {
        super._initGLContext();
        this._rescalePostProcess = null;
      }
      _sharedInit(p185) {
        super._sharedInit(p185);
        (function (p186, p187, p188) {
          p186._onCanvasFocus = () => {
            p186.onCanvasFocusObservable.notifyObservers(p186);
          };
          p186._onCanvasBlur = () => {
            p186.onCanvasBlurObservable.notifyObservers(p186);
          };
          p186._onCanvasContextMenu = p189 => {
            if (p186.disableContextMenu) {
              p189.preventDefault();
            }
          };
          p187.addEventListener("focus", p186._onCanvasFocus);
          p187.addEventListener("blur", p186._onCanvasBlur);
          p187.addEventListener("contextmenu", p186._onCanvasContextMenu);
          p186._onBlur = () => {
            if (p186.disablePerformanceMonitorInBackground) {
              p186.performanceMonitor.disable();
            }
            p186._windowIsBackground = true;
          };
          p186._onFocus = () => {
            if (p186.disablePerformanceMonitorInBackground) {
              p186.performanceMonitor.enable();
            }
            p186._windowIsBackground = false;
          };
          p186._onCanvasPointerOut = p190 => {
            if (document.elementFromPoint(p190.clientX, p190.clientY) !== p187) {
              p186.onCanvasPointerOutObservable.notifyObservers(p190);
            }
          };
          const v178 = p186.getHostWindow();
          if (v178 && typeof v178.addEventListener === "function") {
            v178.addEventListener("blur", p186._onBlur);
            v178.addEventListener("focus", p186._onFocus);
          }
          p187.addEventListener("pointerout", p186._onCanvasPointerOut);
          if (!p188.doNotHandleTouchAction) {
            (function (p191) {
              if (p191 && p191.setAttribute) {
                p191.setAttribute("touch-action", "none");
                p191.style.touchAction = "none";
                p191.style.webkitTapHighlightColor = "transparent";
              }
            })(p187);
          }
          if (!vP5614.b.audioEngine && p188.audioEngine && vP5614.b.AudioEngineFactory) {
            vP5614.b.audioEngine = vP5614.b.AudioEngineFactory(p186.getRenderingCanvas(), p186.getAudioContext(), p186.getAudioDestination());
          }
          if ((0, vP5613.f)()) {
            p186._onFullscreenChange = () => {
              p186.isFullscreen = !!document.fullscreenElement;
              if (p186.isFullscreen && p186._pointerLockRequested && p187) {
                f4(p187);
              }
            };
            document.addEventListener("fullscreenchange", p186._onFullscreenChange, false);
            document.addEventListener("webkitfullscreenchange", p186._onFullscreenChange, false);
            p186._onPointerLockChange = () => {
              p186.isPointerLock = document.pointerLockElement === p187;
            };
            document.addEventListener("pointerlockchange", p186._onPointerLockChange, false);
            document.addEventListener("webkitpointerlockchange", p186._onPointerLockChange, false);
          }
          p186.enableOfflineSupport = vP5614.b.OfflineProviderFactory !== undefined;
          p186._deterministicLockstep = !!p188.deterministicLockstep;
          p186._lockstepMaxSteps = p188.lockstepMaxSteps || 0;
          p186._timeStep = p188.timeStep || 1 / 60;
        })(this, p185, this._creationOptions);
      }
      resizeImageBitmap(p192, p193, p194) {
        return function (p195, p196, p197, p198) {
          const v179 = p195.createCanvas(p197, p198).getContext("2d");
          if (!v179) {
            throw new Error("Unable to get 2d context for resizeImageBitmap");
          }
          v179.drawImage(p196, 0, 0);
          return v179.getImageData(0, 0, p197, p198).data;
        }(this, p192, p193, p194);
      }
      async _createImageBitmapFromSource(p199, p200) {
        return await async function (p201, p202, p203) {
          return await new Promise((p204, p205) => {
            const v180 = new Image();
            v180.onload = () => {
              v180.decode().then(() => {
                p201.createImageBitmap(v180, p203).then(p206 => {
                  p204(p206);
                });
              });
            };
            v180.onerror = () => {
              p205(`Error loading image ${v180.src}`);
            };
            v180.src = p202;
          });
        }(this, p199, p200);
      }
      switchFullscreen(p207) {
        if (this.isFullscreen) {
          this.exitFullscreen();
        } else {
          this.enterFullscreen(p207);
        }
      }
      enterFullscreen(p208) {
        if (!this.isFullscreen) {
          this._pointerLockRequested = p208;
          if (this._renderingCanvas) {
            (function (p209) {
              const v181 = p209.requestFullscreen || p209.webkitRequestFullscreen;
              if (v181) {
                v181.call(p209);
              }
            })(this._renderingCanvas);
          }
        }
      }
      exitFullscreen() {
        if (this.isFullscreen) {
          (function () {
            const vDocument = document;
            if (document.exitFullscreen) {
              document.exitFullscreen();
            } else if (vDocument.webkitCancelFullScreen) {
              vDocument.webkitCancelFullScreen();
            }
          })();
        }
      }
      setDitheringState(p210) {
        if (p210) {
          this._gl.enable(this._gl.DITHER);
        } else {
          this._gl.disable(this._gl.DITHER);
        }
      }
      setRasterizerState(p211) {
        if (p211) {
          this._gl.disable(this._gl.RASTERIZER_DISCARD);
        } else {
          this._gl.enable(this._gl.RASTERIZER_DISCARD);
        }
      }
      setDirectViewport(p212, p213, p214, p215) {
        const v182 = this._cachedViewport;
        this._cachedViewport = null;
        this._viewport(p212, p213, p214, p215);
        return v182;
      }
      scissorClear(p216, p217, p218, p219, p220) {
        this.enableScissor(p216, p217, p218, p219);
        this.clear(p220, true, true, true);
        this.disableScissor();
      }
      enableScissor(p221, p222, p223, p224) {
        const v183 = this._gl;
        v183.enable(v183.SCISSOR_TEST);
        v183.scissor(p221, p222, p223, p224);
      }
      disableScissor() {
        const v184 = this._gl;
        v184.disable(v184.SCISSOR_TEST);
      }
      async _loadFileAsync(p225, p226, p227) {
        return await new Promise((p228, p229) => {
          this._loadFile(p225, p230 => {
            p228(p230);
          }, undefined, p226, p227, (p231, p232) => {
            p229(p232);
          });
        });
      }
      getVertexShaderSource(p233) {
        const v185 = this._gl.getAttachedShaders(p233);
        if (v185) {
          return this._gl.getShaderSource(v185[0]);
        } else {
          return null;
        }
      }
      getFragmentShaderSource(p234) {
        const v186 = this._gl.getAttachedShaders(p234);
        if (v186) {
          return this._gl.getShaderSource(v186[1]);
        } else {
          return null;
        }
      }
      set framebufferDimensionsObject(p235) {
        this._framebufferDimensionsObject = p235;
        if (this._framebufferDimensionsObject) {
          this.onResizeObservable.notifyObservers(this);
        }
      }
      _rebuildBuffers() {
        for (const v187 of this.scenes) {
          v187.resetCachedMaterial();
          v187._rebuildGeometries();
        }
        for (const v188 of this._virtualScenes) {
          v188.resetCachedMaterial();
          v188._rebuildGeometries();
        }
        super._rebuildBuffers();
      }
      getFontOffset(p236) {
        return function (p237) {
          const v189 = document.createElement("span");
          v189.textContent = "Hg";
          v189.style.font = p237;
          const v190 = document.createElement("div");
          v190.style.display = "inline-block";
          v190.style.width = "1px";
          v190.style.height = "0px";
          v190.style.verticalAlign = "bottom";
          const v191 = document.createElement("div");
          v191.style.whiteSpace = "nowrap";
          v191.appendChild(v189);
          v191.appendChild(v190);
          document.body.appendChild(v191);
          let vLN016 = 0;
          let vLN017 = 0;
          try {
            vLN017 = v190.getBoundingClientRect().top - v189.getBoundingClientRect().top;
            v190.style.verticalAlign = "baseline";
            vLN016 = v190.getBoundingClientRect().top - v189.getBoundingClientRect().top;
          } finally {
            document.body.removeChild(v191);
          }
          return {
            ascent: vLN016,
            height: vLN017,
            descent: vLN017 - vLN016
          };
        }(p236);
      }
      _cancelFrame() {
        if (this.customAnimationFrameRequester) {
          if (this._frameHandler !== 0) {
            this._frameHandler = 0;
            const {
              cancelAnimationFrame: CC
            } = this.customAnimationFrameRequester;
            if (CC) {
              CC(this.customAnimationFrameRequester.my);
            }
          }
        } else {
          super._cancelFrame();
        }
      }
      _renderLoop(p238) {
        this._processFrame(p238);
        if (this._activeRenderLoops.length > 0 && this._frameHandler === 0) {
          if (this.customAnimationFrameRequester) {
            this.customAnimationFrameRequester.my = this._queueNewFrame(this.customAnimationFrameRequester.renderFunction || this._boundRenderFunction, this.customAnimationFrameRequester);
            this._frameHandler = this.customAnimationFrameRequester.my;
          } else {
            this._frameHandler = this._queueNewFrame(this._boundRenderFunction, this.getHostWindow());
          }
        }
      }
      enterPointerlock() {
        if (this._renderingCanvas) {
          f4(this._renderingCanvas);
        }
      }
      exitPointerlock() {
        if (document.exitPointerLock) {
          document.exitPointerLock();
        }
      }
      SI() {
        this._measureFps();
        super.SI();
      }
      _deletePipelineContext(p239) {
        const vP239 = p239;
        if (vP239 && vP239.program && vP239.transformFeedback) {
          this.deleteTransformFeedback(vP239.transformFeedback);
          vP239.transformFeedback = null;
        }
        super._deletePipelineContext(p239);
      }
      createShaderProgram(p240, p241, p242, p243, p244, gC = null) {
        p244 = p244 || this._gl;
        this.onBeforeShaderCompilationObservable.notifyObservers(this);
        const v192 = super.createShaderProgram(p240, p241, p242, p243, p244, gC);
        this.onAfterShaderCompilationObservable.notifyObservers(this);
        return v192;
      }
      _createShaderProgram(p245, p246, p247, p248, ky = null) {
        const v193 = p248.createProgram();
        p245.program = v193;
        if (!v193) {
          throw new Error("Unable to create program");
        }
        p248.attachShader(v193, p246);
        p248.attachShader(v193, p247);
        if (this.webGLVersion > 1 && ky) {
          const v194 = this.createTransformFeedback();
          this.bindTransformFeedback(v194);
          this.setTranformFeedbackVaryings(v193, ky);
          p245.transformFeedback = v194;
        }
        p248.linkProgram(v193);
        if (this.webGLVersion > 1 && ky) {
          this.bindTransformFeedback(null);
        }
        p245.context = p248;
        p245.vertexShader = p246;
        p245.fragmentShader = p247;
        if (!p245.isParallelCompiled) {
          this._finalizePipelineContext(p245);
        }
        return v193;
      }
      _releaseTexture(p249) {
        super._releaseTexture(p249);
      }
      _releaseRenderTargetWrapper(p250) {
        super._releaseRenderTargetWrapper(p250);
        for (const v195 of this.scenes) {
          for (const v196 of v195.postProcesses) {
            if (v196._outputTexture === p250) {
              v196._outputTexture = null;
            }
          }
          for (const v197 of v195.cameras) {
            for (const v198 of v197._postProcesses) {
              if (v198 && v198._outputTexture === p250) {
                v198._outputTexture = null;
              }
            }
          }
        }
      }
      _rescaleTexture(p251, p252, p253, p254, p255) {
        this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, this._gl.LINEAR);
        this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, this._gl.LINEAR);
        this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_S, this._gl.CLAMP_TO_EDGE);
        this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_T, this._gl.CLAMP_TO_EDGE);
        const v199 = this.createRenderTargetTexture({
          width: p252.width,
          height: p252.height
        }, {
          generateMipMaps: false,
          type: 0,
          samplingMode: 2,
          generateDepthBuffer: false,
          generateStencilBuffer: false
        });
        if (!this._rescalePostProcess && C5._RescalePostProcessFactory) {
          this._rescalePostProcess = C5._RescalePostProcessFactory(this);
        }
        if (this._rescalePostProcess) {
          this._rescalePostProcess.externalTextureSamplerBinding = true;
          const vF2 = () => {
            this._rescalePostProcess.onApply = function (p256) {
              p256._bindTexture("textureSampler", p251);
            };
            let vP253 = p253;
            vP253 ||= this.scenes[this.scenes.length - 1];
            vP253.postProcessManager.directRender([this._rescalePostProcess], v199, true);
            this._bindTextureDirectly(this._gl.TEXTURE_2D, p252, true);
            this._gl.copyTexImage2D(this._gl.TEXTURE_2D, 0, p254, 0, 0, p252.width, p252.height, 0);
            this.unBindFramebuffer(v199);
            v199.dispose();
            if (p255) {
              p255();
            }
          };
          const v200 = this._rescalePostProcess.getEffect();
          if (v200) {
            v200.executeWhenCompiled(vF2);
          } else {
            this._rescalePostProcess.onEffectCreatedObservable.addOnce(p257 => {
              p257.executeWhenCompiled(vF2);
            });
          }
        }
      }
      wrapWebGLTexture(p258, yC = false, IC = 3, ky = 0, gC = 0) {
        const v201 = new vP567.e(p258, this._gl);
        const v202 = new vP56.c(this, 0, true);
        v202._hardwareTexture = v201;
        v202.baseWidth = ky;
        v202.baseHeight = gC;
        v202.width = ky;
        v202.height = gC;
        v202.isReady = true;
        v202.useMipMaps = yC;
        this.updateTextureSamplingMode(IC, v202);
        return v202;
      }
      _uploadImageToTexture(p259, p260, IC = 0, fC = 0) {
        const v203 = this._gl;
        const v204 = this._getWebGLTextureType(p259.type);
        const v205 = this._getInternalFormat(p259.format);
        const v206 = this._getRGBABufferInternalSizedFormat(p259.type, v205);
        const v207 = p259.isCube ? v203.TEXTURE_CUBE_MAP : v203.TEXTURE_2D;
        this._bindTextureDirectly(v207, p259, true);
        this._unpackFlipY(p259.invertY);
        let v208 = v203.TEXTURE_2D;
        if (p259.isCube) {
          v208 = v203.TEXTURE_CUBE_MAP_POSITIVE_X + p56;
        }
        v203.texImage2D(v208, fC, v206, v205, v204, p260);
        this._bindTextureDirectly(v207, null, true);
      }
      updateTextureComparisonFunction(p261, p262) {
        if (this.webGLVersion === 1) {
          vP566.e.Error("WebGL 1 does not support texture comparison.");
          return;
        }
        const v209 = this._gl;
        if (p261.isCube) {
          this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, p261, true);
          if (p262 === 0) {
            v209.texParameteri(v209.TEXTURE_CUBE_MAP, v209.TEXTURE_COMPARE_FUNC, 515);
            v209.texParameteri(v209.TEXTURE_CUBE_MAP, v209.TEXTURE_COMPARE_MODE, v209.NONE);
          } else {
            v209.texParameteri(v209.TEXTURE_CUBE_MAP, v209.TEXTURE_COMPARE_FUNC, p262);
            v209.texParameteri(v209.TEXTURE_CUBE_MAP, v209.TEXTURE_COMPARE_MODE, v209.COMPARE_REF_TO_TEXTURE);
          }
          this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null);
        } else {
          this._bindTextureDirectly(this._gl.TEXTURE_2D, p261, true);
          if (p262 === 0) {
            v209.texParameteri(v209.TEXTURE_2D, v209.TEXTURE_COMPARE_FUNC, 515);
            v209.texParameteri(v209.TEXTURE_2D, v209.TEXTURE_COMPARE_MODE, v209.NONE);
          } else {
            v209.texParameteri(v209.TEXTURE_2D, v209.TEXTURE_COMPARE_FUNC, p262);
            v209.texParameteri(v209.TEXTURE_2D, v209.TEXTURE_COMPARE_MODE, v209.COMPARE_REF_TO_TEXTURE);
          }
          this._bindTextureDirectly(this._gl.TEXTURE_2D, null);
        }
        p261._comparisonFunction = p262;
      }
      createInstancesBuffer(p263) {
        const v210 = this._gl.createBuffer();
        if (!v210) {
          throw new Error("Unable to create instance buffer");
        }
        const v211 = new vP565.b(v210);
        v211.IX = p263;
        this.bindArrayBuffer(v211);
        this._gl.bufferData(this._gl.ARRAY_BUFFER, p263, this._gl.DYNAMIC_DRAW);
        v211.references = 1;
        return v211;
      }
      deleteInstancesBuffer(p264) {
        this._gl.deleteBuffer(p264);
      }
      async _clientWaitAsync(p265, yC = 0, IC = 10) {
        const v212 = this._gl;
        return await new Promise((p266, p267) => {
          (0, vP5616.f)(() => {
            const v213 = v212.clientWaitSync(p265, yC, 0);
            if (v213 == v212.WAIT_FAILED) {
              throw new Error("clientWaitSync failed");
            }
            return v213 != v212.TIMEOUT_EXPIRED;
          }, p266, p267, IC);
        });
      }
      _readPixelsAsync(p268, p269, p270, p271, p272, p273, p274) {
        if (this._webGLVersion < 2) {
          throw new Error("_readPixelsAsync only work on WebGL2+");
        }
        const v214 = this._gl;
        const v215 = v214.createBuffer();
        v214.bindBuffer(v214.PIXEL_PACK_BUFFER, v215);
        v214.bufferData(v214.PIXEL_PACK_BUFFER, p274.byteLength, v214.STREAM_READ);
        v214.readPixels(p268, p269, p270, p271, p272, p273, 0);
        v214.bindBuffer(v214.PIXEL_PACK_BUFFER, null);
        const v216 = v214.fenceSync(v214.SYNC_GPU_COMMANDS_COMPLETE, 0);
        if (v216) {
          v214.flush();
          return this._clientWaitAsync(v216, 0, 10).then(() => {
            v214.deleteSync(v216);
            v214.bindBuffer(v214.PIXEL_PACK_BUFFER, v215);
            v214.getBufferSubData(v214.PIXEL_PACK_BUFFER, 0, p274);
            v214.bindBuffer(v214.PIXEL_PACK_BUFFER, null);
            v214.deleteBuffer(v215);
            return p274;
          });
        } else {
          return null;
        }
      }
      dispose() {
        this.hideLoadingUI();
        if (this._rescalePostProcess) {
          this._rescalePostProcess.dispose();
        }
        (function (p275, p276) {
          if (vP562.b.Instances.length === 1 && vP5614.b.audioEngine) {
            vP5614.b.audioEngine.dispose();
            vP5614.b.audioEngine = null;
          }
          const v217 = p275.getHostWindow();
          if (v217 && typeof v217.removeEventListener === "function") {
            v217.removeEventListener("blur", p275._onBlur);
            v217.removeEventListener("focus", p275._onFocus);
          }
          if (p276) {
            p276.removeEventListener("focus", p275._onCanvasFocus);
            p276.removeEventListener("blur", p275._onCanvasBlur);
            p276.removeEventListener("pointerout", p275._onCanvasPointerOut);
            p276.removeEventListener("contextmenu", p275._onCanvasContextMenu);
          }
          if ((0, vP5613.f)()) {
            document.removeEventListener("fullscreenchange", p275._onFullscreenChange);
            document.removeEventListener("mozfullscreenchange", p275._onFullscreenChange);
            document.removeEventListener("webkitfullscreenchange", p275._onFullscreenChange);
            document.removeEventListener("msfullscreenchange", p275._onFullscreenChange);
            document.removeEventListener("pointerlockchange", p275._onPointerLockChange);
            document.removeEventListener("mspointerlockchange", p275._onPointerLockChange);
            document.removeEventListener("mozpointerlockchange", p275._onPointerLockChange);
            document.removeEventListener("webkitpointerlockchange", p275._onPointerLockChange);
          }
        })(this, this._renderingCanvas);
        super.dispose();
      }
    }
    C5.ALPHA_DISABLE = 0;
    C5.ALPHA_ADD = 1;
    C5.ALPHA_COMBINE = 2;
    C5.ALPHA_SUBTRACT = 3;
    C5.ALPHA_MULTIPLY = 4;
    C5.ALPHA_MAXIMIZED = 5;
    C5.ALPHA_ONEONE = 6;
    C5.ALPHA_PREMULTIPLIED = 7;
    C5.ALPHA_PREMULTIPLIED_PORTERDUFF = 8;
    C5.ALPHA_INTERPOLATE = 9;
    C5.ALPHA_SCREENMODE = 10;
    C5.DELAYLOADSTATE_NONE = 0;
    C5.DELAYLOADSTATE_LOADED = 1;
    C5.DELAYLOADSTATE_LOADING = 2;
    C5.DELAYLOADSTATE_NOTLOADED = 4;
    C5.NEVER = 512;
    C5.ALWAYS = 519;
    C5.LESS = 513;
    C5.EQUAL = 514;
    C5.LEQUAL = 515;
    C5.GREATER = 516;
    C5.GEQUAL = 518;
    C5.NOTEQUAL = 517;
    C5.KEEP = 7680;
    C5.REPLACE = 7681;
    C5.INCR = 7682;
    C5.DECR = 7683;
    C5.INVERT = 5386;
    C5.INCR_WRAP = 34055;
    C5.DECR_WRAP = 34056;
    C5.TEXTURE_CLAMP_ADDRESSMODE = 0;
    C5.TEXTURE_WRAP_ADDRESSMODE = 1;
    C5.TEXTURE_MIRROR_ADDRESSMODE = 2;
    C5.TEXTUREFORMAT_ALPHA = 0;
    C5.TEXTUREFORMAT_LUMINANCE = 1;
    C5.TEXTUREFORMAT_LUMINANCE_ALPHA = 2;
    C5.TEXTUREFORMAT_RGB = 4;
    C5.TEXTUREFORMAT_RGBA = 5;
    C5.TEXTUREFORMAT_RED = 6;
    C5.TEXTUREFORMAT_R = 6;
    C5.TEXTUREFORMAT_R16_UNORM = 33322;
    C5.TEXTUREFORMAT_RG16_UNORM = 33324;
    C5.TEXTUREFORMAT_RGB16_UNORM = 32852;
    C5.TEXTUREFORMAT_RGBA16_UNORM = 32859;
    C5.TEXTUREFORMAT_R16_SNORM = 36760;
    C5.TEXTUREFORMAT_RG16_SNORM = 36761;
    C5.TEXTUREFORMAT_RGB16_SNORM = 36762;
    C5.TEXTUREFORMAT_RGBA16_SNORM = 36763;
    C5.TEXTUREFORMAT_RG = 7;
    C5.TEXTUREFORMAT_RED_INTEGER = 8;
    C5.TEXTUREFORMAT_R_INTEGER = 8;
    C5.TEXTUREFORMAT_RG_INTEGER = 9;
    C5.TEXTUREFORMAT_RGB_INTEGER = 10;
    C5.TEXTUREFORMAT_RGBA_INTEGER = 11;
    C5.TEXTURETYPE_UNSIGNED_BYTE = 0;
    C5.TEXTURETYPE_UNSIGNED_INT = 0;
    C5.TEXTURETYPE_FLOAT = 1;
    C5.TEXTURETYPE_HALF_FLOAT = 2;
    C5.TEXTURETYPE_BYTE = 3;
    C5.TEXTURETYPE_SHORT = 4;
    C5.TEXTURETYPE_UNSIGNED_SHORT = 5;
    C5.TEXTURETYPE_INT = 6;
    C5.TEXTURETYPE_UNSIGNED_INTEGER = 7;
    C5.TEXTURETYPE_UNSIGNED_SHORT_4_4_4_4 = 8;
    C5.TEXTURETYPE_UNSIGNED_SHORT_5_5_5_1 = 9;
    C5.TEXTURETYPE_UNSIGNED_SHORT_5_6_5 = 10;
    C5.TEXTURETYPE_UNSIGNED_INT_2_10_10_10_REV = 11;
    C5.TEXTURETYPE_UNSIGNED_INT_24_8 = 12;
    C5.TEXTURETYPE_UNSIGNED_INT_10F_11F_11F_REV = 13;
    C5.TEXTURETYPE_UNSIGNED_INT_5_9_9_9_REV = 14;
    C5.TEXTURETYPE_FLOAT_32_UNSIGNED_INT_24_8_REV = 15;
    C5.TEXTURE_NEAREST_SAMPLINGMODE = 1;
    C5.TEXTURE_BILINEAR_SAMPLINGMODE = 2;
    C5.TEXTURE_TRILINEAR_SAMPLINGMODE = 3;
    C5.TEXTURE_NEAREST_NEAREST_MIPLINEAR = 8;
    C5.TEXTURE_LINEAR_LINEAR_MIPNEAREST = 11;
    C5.TEXTURE_LINEAR_LINEAR_MIPLINEAR = 3;
    C5.TEXTURE_NEAREST_NEAREST_MIPNEAREST = 4;
    C5.TEXTURE_NEAREST_LINEAR_MIPNEAREST = 5;
    C5.TEXTURE_NEAREST_LINEAR_MIPLINEAR = 6;
    C5.TEXTURE_NEAREST_LINEAR = 7;
    C5.TEXTURE_NEAREST_NEAREST = 1;
    C5.TEXTURE_LINEAR_NEAREST_MIPNEAREST = 9;
    C5.TEXTURE_LINEAR_NEAREST_MIPLINEAR = 10;
    C5.TEXTURE_LINEAR_LINEAR = 2;
    C5.TEXTURE_LINEAR_NEAREST = 12;
    C5.TEXTURE_EXPLICIT_MODE = 0;
    C5.TEXTURE_SPHERICAL_MODE = 1;
    C5.TEXTURE_PLANAR_MODE = 2;
    C5.TEXTURE_CUBIC_MODE = 3;
    C5.TEXTURE_PROJECTION_MODE = 4;
    C5.TEXTURE_SKYBOX_MODE = 5;
    C5.TEXTURE_INVCUBIC_MODE = 6;
    C5.TEXTURE_EQUIRECTANGULAR_MODE = 7;
    C5.TEXTURE_FIXED_EQUIRECTANGULAR_MODE = 8;
    C5.TEXTURE_FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9;
    C5.SCALEMODE_FLOOR = 1;
    C5.SCALEMODE_NEAREST = 2;
    C5.SCALEMODE_CEILING = 3;
  },
  17148: (p277, p278, p279) => {
    p279.d(p278, {
      c: () => C6
    });
    var vP279 = p279(17125);
    class C6 {
      get depthStencilTexture() {
        return this._depthStencilTexture;
      }
      setDepthStencilTexture(p280) {
        if ((!(arguments.length > 1) || arguments[1] === undefined || arguments[1]) && this._depthStencilTexture) {
          this._depthStencilTexture.dispose();
        }
        this._depthStencilTexture = p280;
        this._generateDepthBuffer = this._generateStencilBuffer = this._depthStencilTextureWithStencil = false;
        if (p280) {
          this._generateDepthBuffer = true;
          this._generateStencilBuffer = this._depthStencilTextureWithStencil = (0, vP279.e)(p280.format);
        }
      }
      get depthStencilTextureWithStencil() {
        return this._depthStencilTextureWithStencil;
      }
      get isCube() {
        return this._isCube;
      }
      get isMulti() {
        return this._isMulti;
      }
      get is2DArray() {
        return this.layers > 0;
      }
      get is3D() {
        return this.depth > 0;
      }
      get size() {
        return this.width;
      }
      get width() {
        return this._size.width ?? this._size;
      }
      get height() {
        return this._size.height ?? this._size;
      }
      get layers() {
        return this._size.layers || 0;
      }
      get depth() {
        return this._size.depth || 0;
      }
      get texture() {
        return this._textures?.[0] ?? null;
      }
      get textures() {
        return this._textures;
      }
      get faceIndices() {
        return this._faceIndices;
      }
      get layerIndices() {
        return this._layerIndices;
      }
      getBaseArrayLayer(p281) {
        if (!this._textures) {
          return -1;
        }
        const v218 = this._textures[p281];
        const v219 = this._layerIndices?.[p281] ?? 0;
        const v220 = this._faceIndices?.[p281] ?? 0;
        if (v218.isCube) {
          return v219 * 6 + v220;
        } else if (v218.is3D) {
          return 0;
        } else {
          return v219;
        }
      }
      get samples() {
        return this._samples;
      }
      setSamples(p282) {
        let v221 = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
        let v222 = arguments.length > 2 && arguments[2] !== undefined && arguments[2];
        if (this.samples === p282 && !v222) {
          return p282;
        }
        const v223 = this._isMulti ? this._engine.updateMultipleRenderTargetTextureSampleCount(this, p282, v221) : this._engine.updateRenderTargetTextureSampleCount(this, p282);
        this._samples = p282;
        return v223;
      }
      resolveMSAATextures() {
        if (this.isMulti) {
          this._engine.resolveMultiFramebuffer(this);
        } else {
          this._engine.resolveFramebuffer(this);
        }
      }
      generateMipMaps() {
        if (this._engine._currentRenderTarget === this) {
          this._engine.unBindFramebuffer(this, true);
        }
        if (this.isMulti) {
          this._engine.generateMipMapsMultiFramebuffer(this);
        } else {
          this._engine.generateMipMapsFramebuffer(this);
        }
      }
      constructor(p283, p284, p285, p286, p287) {
        this._textures = null;
        this._faceIndices = null;
        this._layerIndices = null;
        this._samples = 1;
        this._attachments = null;
        this._generateStencilBuffer = false;
        this._generateDepthBuffer = false;
        this._depthStencilTextureWithStencil = false;
        this.disableAutomaticMSAAResolve = false;
        this.resolveMSAAColors = true;
        this.resolveMSAADepth = false;
        this.resolveMSAAStencil = false;
        this._isMulti = p283;
        this._isCube = p284;
        this._size = p285;
        this._engine = p286;
        this._depthStencilTexture = null;
        this.label = p287;
      }
      setTextures(p288) {
        if (Array.isArray(p288)) {
          this._textures = p288;
        } else {
          this._textures = p288 ? [p288] : null;
        }
      }
      setTexture(p289, yC = 0) {
        let v224 = !(arguments.length > 2) || arguments[2] === undefined || arguments[2];
        this._textures ||= [];
        if (this._textures[yC] !== p289) {
          if (this._textures[p278] && v224) {
            this._textures[p278].dispose();
          }
          this._textures[p278] = p289;
        }
      }
      setLayerAndFaceIndices(p290, p291) {
        this._layerIndices = p290;
        this._faceIndices = p291;
      }
      setLayerAndFaceIndex(CC = 0, yC, IC) {
        this._layerIndices ||= [];
        this._faceIndices ||= [];
        if (yC !== undefined && yC >= 0) {
          this._layerIndices[p277] = p278;
        }
        if (IC !== undefined && IC >= 0) {
          this._faceIndices[p277] = p279;
        }
      }
      createDepthStencilTexture() {
        var v225;
        let v226 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        let v227 = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
        let v228 = arguments.length > 2 && arguments[2] !== undefined && arguments[2];
        let v229 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
        let v230 = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 14;
        let v231 = arguments.length > 5 ? arguments[5] : undefined;
        if ((v225 = this._depthStencilTexture) !== null && v225 !== undefined) {
          v225.dispose();
        }
        this._depthStencilTextureWithStencil = v228;
        this._depthStencilTextureLabel = v231;
        this._depthStencilTexture = this._engine.createDepthStencilTexture(this._size, {
          bilinearFiltering: v227,
          comparisonFunction: v226,
          generateStencil: v228,
          isCube: this._isCube,
          samples: v229,
          depthTextureFormat: v230,
          label: v231
        }, this);
        return this._depthStencilTexture;
      }
      _shareDepth(p292) {
        this.shareDepth(p292);
      }
      shareDepth(p293) {
        if (this._depthStencilTexture) {
          if (p293._depthStencilTexture) {
            p293._depthStencilTexture.dispose();
          }
          p293._depthStencilTexture = this._depthStencilTexture;
          p293._depthStencilTextureWithStencil = this._depthStencilTextureWithStencil;
          this._depthStencilTexture.incrementReferences();
        }
      }
      _swapAndDie(p294) {
        if (this.texture) {
          this.texture._swapAndDie(p294);
        }
        this._textures = null;
        this.dispose(true);
      }
      _cloneRenderTargetWrapper() {
        let v232 = null;
        if (this._isMulti) {
          const v233 = this.textures;
          if (v233 && v233.length > 0) {
            let v234 = false;
            let v235 = v233.length;
            let v236 = -1;
            const v237 = v233[v233.length - 1]._source;
            if (v237 === 14 || v237 === 12) {
              v234 = true;
              v236 = v233[v233.length - 1].format;
              v235--;
            }
            const vA3 = [];
            const vA4 = [];
            const vA5 = [];
            const vA6 = [];
            const vA7 = [];
            const vA8 = [];
            const vA9 = [];
            const vO = {};
            for (let vLN018 = 0; vLN018 < v235; ++vLN018) {
              const v238 = v233[vLN018];
              vA3.push(v238.samplingMode);
              vA4.push(v238.type);
              vA5.push(v238.format);
              if (vO[v238.uniqueId] !== undefined) {
                vA6.push(-1);
                vA9.push(0);
              } else {
                vO[v238.uniqueId] = vLN018;
                if (v238.is2DArray) {
                  vA6.push(35866);
                  vA9.push(v238.depth);
                } else if (v238.isCube) {
                  vA6.push(34067);
                  vA9.push(0);
                } else if (v238.is3D) {
                  vA6.push(32879);
                  vA9.push(v238.depth);
                } else {
                  vA6.push(3553);
                  vA9.push(0);
                }
              }
              if (this._faceIndices) {
                vA7.push(this._faceIndices[vLN018] ?? 0);
              }
              if (this._layerIndices) {
                vA8.push(this._layerIndices[vLN018] ?? 0);
              }
            }
            const vO2 = {
              samplingModes: vA3,
              generateMipMaps: v233[0].generateMipMaps,
              generateDepthBuffer: this._generateDepthBuffer,
              generateStencilBuffer: this._generateStencilBuffer,
              generateDepthTexture: v234,
              depthTextureFormat: v236,
              types: vA4,
              formats: vA5,
              PO: v235,
              targetTypes: vA6,
              faceIndex: vA7,
              layerIndex: vA8,
              layerCounts: vA9,
              label: this.label
            };
            const vO3 = {
              width: this.width,
              height: this.height,
              depth: this.depth
            };
            v232 = this._engine.createMultipleRenderTarget(vO3, vO2);
            for (let vLN019 = 0; vLN019 < v235; ++vLN019) {
              if (vA6[vLN019] !== -1) {
                continue;
              }
              const v239 = vO[v233[vLN019].uniqueId];
              v232.setTexture(v232.textures[v239], vLN019);
            }
          }
        } else {
          var v240;
          const vO4 = {
            generateDepthBuffer: this._generateDepthBuffer,
            generateMipMaps: (v240 = this.texture?.generateMipMaps) !== null && v240 !== undefined && v240,
            generateStencilBuffer: this._generateStencilBuffer,
            samplingMode: this.texture?.samplingMode,
            type: this.texture?.type,
            format: this.texture?.format,
            noColorAttachment: !this._textures,
            label: this.label
          };
          if (this.isCube) {
            v232 = this._engine.createRenderTargetCubeTexture(this.width, vO4);
          } else {
            const vO5 = {
              width: this.width,
              height: this.height,
              layers: this.is2DArray || this.is3D ? this.texture?.depth : undefined
            };
            v232 = this._engine.createRenderTargetTexture(vO5, vO4);
          }
          if (v232.texture) {
            v232.texture.isReady = true;
          }
        }
        return v232;
      }
      _swapRenderTargetWrapper(p295) {
        if (this._textures && p295._textures) {
          for (let vLN020 = 0; vLN020 < this._textures.length; ++vLN020) {
            this._textures[vLN020]._swapAndDie(p295._textures[vLN020], false);
            p295._textures[vLN020].isReady = true;
          }
        }
        if (this._depthStencilTexture && p295._depthStencilTexture) {
          this._depthStencilTexture._swapAndDie(p295._depthStencilTexture);
          p295._depthStencilTexture.isReady = true;
        }
        this._textures = null;
        this._depthStencilTexture = null;
      }
      _rebuild() {
        const v241 = this._cloneRenderTargetWrapper();
        if (v241) {
          if (this._depthStencilTexture) {
            const v242 = this._depthStencilTexture.samplingMode;
            const v243 = this._depthStencilTexture.format;
            const v244 = v242 === 2 || v242 === 3 || v242 === 11;
            v241.createDepthStencilTexture(this._depthStencilTexture._comparisonFunction, v244, this._depthStencilTextureWithStencil, this._depthStencilTexture.samples, v243, this._depthStencilTextureLabel);
          }
          if (this.samples > 1) {
            v241.setSamples(this.samples);
          }
          v241._swapRenderTargetWrapper(this);
          v241.dispose();
        }
      }
      releaseTextures() {
        if (this._textures) {
          for (let vLN021 = 0; vLN021 < this._textures.length; ++vLN021) {
            this._textures[vLN021].dispose();
          }
        }
        this._textures = null;
      }
      dispose() {
        var v245;
        if (!(arguments.length > 0) || arguments[0] === undefined || !arguments[0]) {
          if ((v245 = this._depthStencilTexture) !== null && v245 !== undefined) {
            v245.dispose();
          }
          this._depthStencilTexture = null;
          this.releaseTextures();
        }
        this._engine._releaseRenderTargetWrapper(this);
      }
    }
  },
  17103: (p296, p297, p298) => {
    p298.r(p297);
    p298.d(p297, {
      ThinEngine: () => C10
    });
    var vP298 = p298(16899);
    var vP2982 = p298(17107);
    var vP2983 = p298(16811);
    var vP2984 = p298(16805);
    class C7 {
      constructor() {
        this.shaderLanguage = 0;
      }
      postProcessor(p299, p300, p301, p302, p303) {
        if (p303.drawBuffersExtensionDisabled) {
          const v246 = /#extension.+GL_EXT_draw_buffers.+(enable|require)/g;
          p299 = p299.replace(v246, "");
        }
        return p299;
      }
    }
    const v247 = /(flat\s)?\s*varying\s*.*/;
    class C8 {
      constructor() {
        this.shaderLanguage = 0;
      }
      attributeProcessor(p304) {
        return p304.replace("attribute", "in");
      }
      varyingCheck(p305, p306) {
        return v247.test(p305);
      }
      varyingProcessor(p307, p308) {
        return p307.replace("varying", p308 ? "in" : "out");
      }
      postProcessor(p309, p310, p311) {
        const v248 = p309.search(/#extension.+GL_EXT_draw_buffers.+require/) !== -1;
        p309 = (p309 = p309.replace(/#extension.+(GL_OVR_multiview2|GL_OES_standard_derivatives|GL_EXT_shader_texture_lod|GL_EXT_frag_depth|GL_EXT_draw_buffers).+(enable|require)/g, "")).replace(/texture2D\s*\(/g, "texture(");
        if (p311) {
          const v249 = p309.search(/layout *\(location *= *0\) *out/g) !== -1;
          p309 = (p309 = (p309 = (p309 = (p309 = (p309 = (p309 = p309.replace(/texture2DLodEXT\s*\(/g, "textureLod(")).replace(/textureCubeLodEXT\s*\(/g, "textureLod(")).replace(/textureCube\s*\(/g, "texture(")).replace(/gl_FragDepthEXT/g, "gl_FragDepth")).replace(/gl_FragColor/g, "glFragColor")).replace(/gl_FragData/g, "glFragData")).replace(/void\s+?main\s*\(/g, (v248 || v249 ? "" : "layout(location = 0) out vec4 glFragColor;\n") + "void main(");
        } else if (p310.indexOf("#define MULTIVIEW") !== -1) {
          return "#extension GL_OVR_multiview2 : require\nlayout (num_views = 2) in;\n" + p309;
        }
        return p309;
      }
    }
    var vP2985 = p298(17112);
    var vP2986 = p298(16939);
    var vP2987 = p298(16876);
    var vP2988 = p298(17117);
    var vP2989 = p298(16909);
    var vP29810 = p298(16878);
    var vP29811 = p298(16864);
    var vP29812 = p298(16893);
    var vP29813 = p298(17125);
    class C9 {}
    class C10 extends vP2987.b {
      get name() {
        return this._name;
      }
      set name(p312) {
        this._name = p312;
      }
      get version() {
        return this._webGLVersion;
      }
      static get ShadersRepository() {
        return vP29810.Effect.ShadersRepository;
      }
      static set ShadersRepository(p313) {
        vP29810.Effect.ShadersRepository = p313;
      }
      get supportsUniformBuffers() {
        return this.webGLVersion > 1 && !this.disableUniformBuffers;
      }
      get needPOTTextures() {
        return this._webGLVersion < 2 || this.forcePOTTextures;
      }
      get _supportsHardwareTextureRescaling() {
        return false;
      }
      set framebufferDimensionsObject(p314) {
        this._framebufferDimensionsObject = p314;
      }
      snapshotRenderingReset() {
        this.snapshotRendering = false;
      }
      constructor(p315, p316, p317, p318) {
        p317 = p317 || {};
        super(p316 ?? p317.antialias, p317, p318);
        this._name = "WebGL";
        this.forcePOTTextures = false;
        this.validateShaderPrograms = false;
        this.disableUniformBuffers = false;
        this._webGLVersion = 1;
        this._vertexAttribArraysEnabled = [];
        this._uintIndicesCurrentlySet = false;
        this._currentBoundBuffer = new Array();
        this._currentFramebuffer = null;
        this._dummyFramebuffer = null;
        this._currentBufferPointers = new Array();
        this._currentInstanceLocations = new Array();
        this._currentInstanceBuffers = new Array();
        this._vaoRecordInProgress = false;
        this._mustWipeVertexAttributes = false;
        this._nextFreeTextureSlots = new Array();
        this._maxSimultaneousTextures = 0;
        this._maxMSAASamplesOverride = null;
        this._unpackFlipYCached = null;
        this.enableUnpackFlipYCached = true;
        this._boundUniforms = {};
        if (!p315) {
          return;
        }
        let v250 = null;
        if (p315.getContext) {
          v250 = p315;
          if (p317.ef === undefined) {
            p317.ef = false;
          }
          if (p317.xrCompatible === undefined) {
            p317.xrCompatible = false;
          }
          if (navigator && navigator.userAgent) {
            this._setupMobileChecks();
            const v251 = navigator.userAgent;
            for (const v252 of C10.ExceptionList) {
              const v253 = v252.key;
              const v254 = v252.targets;
              if (new RegExp(v253).test(v251)) {
                if (v252.capture && v252.captureConstraint) {
                  const v255 = v252.capture;
                  const v256 = v252.captureConstraint;
                  const v257 = new RegExp(v255).exec(v251);
                  if (v257 && v257.length > 0) {
                    if (parseInt(v257[v257.length - 1]) >= v256) {
                      continue;
                    }
                  }
                }
                for (const v258 of v254) {
                  switch (v258) {
                    case "uniformBuffer":
                      this.disableUniformBuffers = true;
                      break;
                    case "vao":
                      this.disableVertexArrayObjects = true;
                      break;
                    case "antialias":
                      p317.antialias = false;
                      break;
                    case "maxMSAASamples":
                      this._maxMSAASamplesOverride = 1;
                  }
                }
              }
            }
          }
          if (this._doNotHandleContextLost) {
            this._onContextLost = () => {
              (0, vP298.y)(this._gl);
            };
          } else {
            this._onContextLost = p319 => {
              p319.preventDefault();
              this._contextWasLost = true;
              (0, vP298.y)(this._gl);
              vP2983.e.Warn("WebGL context lost.");
              this.onContextLostObservable.notifyObservers(this);
            };
            this._onContextRestored = () => {
              this._restoreEngineAfterContextLost(() => this._initGLContext());
            };
            v250.addEventListener("webglcontextrestored", this._onContextRestored, false);
            p317.powerPreference = p317.powerPreference || "high-performance";
          }
          v250.addEventListener("webglcontextlost", this._onContextLost, false);
          if (this._badDesktopOS) {
            p317.xrCompatible = false;
          }
          if (!p317.disableWebGL2Support) {
            try {
              this._gl = v250.getContext("webgl2", p317) || v250.getContext("experimental-webgl2", p317);
              if (this._gl) {
                this._webGLVersion = 2;
                this._shaderPlatformName = "WEBGL2";
                if (!this._gl.deleteQuery) {
                  this._webGLVersion = 1;
                  this._shaderPlatformName = "WEBGL1";
                }
              }
            } catch (e3) {}
          }
          if (!this._gl) {
            if (!v250) {
              throw new Error("The provided canvas is null or undefined.");
            }
            try {
              this._gl = v250.getContext("webgl", p317) || v250.getContext("experimental-webgl", p317);
            } catch (e4) {
              throw new Error("WebGL not supported");
            }
          }
          if (!this._gl) {
            throw new Error("WebGL not supported");
          }
        } else {
          this._gl = p315;
          v250 = this._gl.canvas;
          if (this._gl.renderbufferStorageMultisample) {
            this._webGLVersion = 2;
            this._shaderPlatformName = "WEBGL2";
          } else {
            this._shaderPlatformName = "WEBGL1";
          }
          const v259 = this._gl.getContextAttributes();
          if (v259) {
            p317.Lf = v259.Lf;
          }
        }
        this._sharedInit(v250);
        this._gl.pixelStorei(this._gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, this._gl.NONE);
        if (p317.useHighPrecisionFloats !== undefined) {
          this._highPrecisionShadersAllowed = p317.useHighPrecisionFloats;
        }
        this.resize();
        this._initGLContext();
        this._initFeatures();
        for (let vLN022 = 0; vLN022 < this._caps.maxVertexAttribs; vLN022++) {
          this._currentBufferPointers[vLN022] = new C9();
        }
        this._shaderProcessor = this.webGLVersion > 1 ? new C8() : new C7();
        const v260 = `Babylon.js v${C10.Version}`;
        vP2983.e.Log(`${v260} - ${this.description}`);
        if (this._renderingCanvas && this._renderingCanvas.setAttribute) {
          this._renderingCanvas.setAttribute("data-engine", v260);
        }
        const v261 = (0, vP298.B)(this._gl);
        v261.validateShaderPrograms = this.validateShaderPrograms;
        v261.parallelShaderCompile = this._caps.parallelShaderCompile;
      }
      _clearEmptyResources() {
        this._dummyFramebuffer = null;
        super._clearEmptyResources();
      }
      _getShaderProcessingContext(p320) {
        return null;
      }
      areAllEffectsReady() {
        for (const v262 in this._compiledEffects) {
          if (!this._compiledEffects[v262].isReady()) {
            return false;
          }
        }
        return true;
      }
      _initGLContext() {
        this._caps = {
          maxTexturesImageUnits: this._gl.getParameter(this._gl.MAX_TEXTURE_IMAGE_UNITS),
          maxCombinedTexturesImageUnits: this._gl.getParameter(this._gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
          maxVertexTextureImageUnits: this._gl.getParameter(this._gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
          maxTextureSize: this._gl.getParameter(this._gl.MAX_TEXTURE_SIZE),
          maxSamples: this._webGLVersion > 1 ? this._gl.getParameter(this._gl.MAX_SAMPLES) : 1,
          maxCubemapTextureSize: this._gl.getParameter(this._gl.MAX_CUBE_MAP_TEXTURE_SIZE),
          maxRenderTextureSize: this._gl.getParameter(this._gl.MAX_RENDERBUFFER_SIZE),
          maxVertexAttribs: this._gl.getParameter(this._gl.MAX_VERTEX_ATTRIBS),
          maxVaryingVectors: this._gl.getParameter(this._gl.MAX_VARYING_VECTORS),
          maxFragmentUniformVectors: this._gl.getParameter(this._gl.MAX_FRAGMENT_UNIFORM_VECTORS),
          maxVertexUniformVectors: this._gl.getParameter(this._gl.MAX_VERTEX_UNIFORM_VECTORS),
          parallelShaderCompile: this._gl.getExtension("KHR_parallel_shader_compile") || undefined,
          standardDerivatives: this._webGLVersion > 1 || this._gl.getExtension("OES_standard_derivatives") !== null,
          maxAnisotropy: 1,
          astc: this._gl.getExtension("WEBGL_compressed_texture_astc") || this._gl.getExtension("WEBKIT_WEBGL_compressed_texture_astc"),
          bptc: this._gl.getExtension("EXT_texture_compression_bptc") || this._gl.getExtension("WEBKIT_EXT_texture_compression_bptc"),
          s3tc: this._gl.getExtension("WEBGL_compressed_texture_s3tc") || this._gl.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc"),
          s3tc_srgb: this._gl.getExtension("WEBGL_compressed_texture_s3tc_srgb") || this._gl.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc_srgb"),
          pvrtc: this._gl.getExtension("WEBGL_compressed_texture_pvrtc") || this._gl.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),
          etc1: this._gl.getExtension("WEBGL_compressed_texture_etc1") || this._gl.getExtension("WEBKIT_WEBGL_compressed_texture_etc1"),
          etc2: this._gl.getExtension("WEBGL_compressed_texture_etc") || this._gl.getExtension("WEBKIT_WEBGL_compressed_texture_etc") || this._gl.getExtension("WEBGL_compressed_texture_es3_0"),
          textureAnisotropicFilterExtension: this._gl.getExtension("EXT_texture_filter_anisotropic") || this._gl.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || this._gl.getExtension("MOZ_EXT_texture_filter_anisotropic"),
          uintIndices: this._webGLVersion > 1 || this._gl.getExtension("OES_element_index_uint") !== null,
          fragmentDepthSupported: this._webGLVersion > 1 || this._gl.getExtension("EXT_frag_depth") !== null,
          highPrecisionShaderSupported: false,
          timerQuery: this._gl.getExtension("EXT_disjoint_timer_query_webgl2") || this._gl.getExtension("EXT_disjoint_timer_query"),
          supportOcclusionQuery: this._webGLVersion > 1,
          canUseTimestampForTimerQuery: false,
          drawBuffersExtension: false,
          maxMSAASamples: 1,
          colorBufferFloat: !!(this._webGLVersion > 1) && !!this._gl.getExtension("EXT_color_buffer_float"),
          supportFloatTexturesResolve: false,
          rg11b10ufColorRenderable: false,
          colorBufferHalfFloat: !!(this._webGLVersion > 1) && !!this._gl.getExtension("EXT_color_buffer_half_float"),
          textureFloat: !!(this._webGLVersion > 1) || !!this._gl.getExtension("OES_texture_float"),
          textureHalfFloat: !!(this._webGLVersion > 1) || !!this._gl.getExtension("OES_texture_half_float"),
          textureHalfFloatRender: false,
          textureFloatLinearFiltering: false,
          textureFloatRender: false,
          textureHalfFloatLinearFiltering: false,
          vertexArrayObject: false,
          instancedArrays: false,
          textureLOD: !!(this._webGLVersion > 1) || !!this._gl.getExtension("EXT_shader_texture_lod"),
          texelFetch: this._webGLVersion !== 1,
          blendMinMax: false,
          multiview: this._gl.getExtension("OVR_multiview2"),
          oculusMultiview: this._gl.getExtension("OCULUS_multiview"),
          depthTextureExtension: false,
          canUseGLInstanceID: this._webGLVersion > 1,
          canUseGLVertexID: this._webGLVersion > 1,
          supportComputeShaders: false,
          supportSRGBBuffers: false,
          supportTransformFeedbacks: this._webGLVersion > 1,
          textureMaxLevel: this._webGLVersion > 1,
          texture2DArrayMaxLayerCount: this._webGLVersion > 1 ? this._gl.getParameter(this._gl.MAX_ARRAY_TEXTURE_LAYERS) : 128,
          disableMorphTargetTexture: false,
          textureNorm16: !!this._gl.getExtension("EXT_texture_norm16")
        };
        this._caps.supportFloatTexturesResolve = this._caps.colorBufferFloat;
        this._caps.rg11b10ufColorRenderable = this._caps.colorBufferFloat;
        this._glVersion = this._gl.getParameter(this._gl.VERSION);
        const v263 = this._gl.getExtension("WEBGL_debug_renderer_info");
        if (v263 != null) {
          this._glRenderer = this._gl.getParameter(v263.UNMASKED_RENDERER_WEBGL);
          this._glVendor = this._gl.getParameter(v263.UNMASKED_VENDOR_WEBGL);
        }
        this._glVendor ||= this._gl.getParameter(this._gl.VENDOR) || "Unknown vendor";
        this._glRenderer ||= this._gl.getParameter(this._gl.RENDERER) || "Unknown renderer";
        if (this._gl.HALF_FLOAT_OES !== 36193) {
          this._gl.HALF_FLOAT_OES = 36193;
        }
        if (this._gl.RGBA16F !== 34842) {
          this._gl.RGBA16F = 34842;
        }
        if (this._gl.RGBA32F !== 34836) {
          this._gl.RGBA32F = 34836;
        }
        if (this._gl.DEPTH24_STENCIL8 !== 35056) {
          this._gl.DEPTH24_STENCIL8 = 35056;
        }
        if (this._caps.timerQuery) {
          if (this._webGLVersion === 1) {
            this._gl.getQuery = this._caps.timerQuery.getQueryEXT.bind(this._caps.timerQuery);
          }
          this._caps.canUseTimestampForTimerQuery = (this._gl.getQuery(this._caps.timerQuery.TIMESTAMP_EXT, this._caps.timerQuery.QUERY_COUNTER_BITS_EXT) ?? 0) > 0;
        }
        this._caps.maxAnisotropy = this._caps.textureAnisotropicFilterExtension ? this._gl.getParameter(this._caps.textureAnisotropicFilterExtension.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0;
        this._caps.textureFloatLinearFiltering = !!this._caps.textureFloat && !!this._gl.getExtension("OES_texture_float_linear");
        this._caps.textureFloatRender = !!this._caps.textureFloat && !!this._canRenderToFloatFramebuffer();
        this._caps.textureHalfFloatLinearFiltering = !!(this._webGLVersion > 1) || !!this._caps.textureHalfFloat && !!this._gl.getExtension("OES_texture_half_float_linear");
        if (this._caps.textureNorm16) {
          this._gl.R16_EXT = 33322;
          this._gl.RG16_EXT = 33324;
          this._gl.RGB16_EXT = 32852;
          this._gl.RGBA16_EXT = 32859;
          this._gl.R16_SNORM_EXT = 36760;
          this._gl.RG16_SNORM_EXT = 36761;
          this._gl.RGB16_SNORM_EXT = 36762;
          this._gl.RGBA16_SNORM_EXT = 36763;
        }
        if (this._caps.astc) {
          this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR;
        }
        if (this._caps.bptc) {
          this._gl.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT = this._caps.bptc.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT;
        }
        if (this._caps.s3tc_srgb) {
          this._gl.COMPRESSED_SRGB_S3TC_DXT1_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          this._gl.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          this._gl.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        }
        if (this._caps.etc2) {
          this._gl.COMPRESSED_SRGB8_ETC2 = this._caps.etc2.COMPRESSED_SRGB8_ETC2;
          this._gl.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = this._caps.etc2.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC;
        }
        if (this._webGLVersion > 1 && this._gl.HALF_FLOAT_OES !== 5131) {
          this._gl.HALF_FLOAT_OES = 5131;
        }
        this._caps.textureHalfFloatRender = this._caps.textureHalfFloat && this._canRenderToHalfFloatFramebuffer();
        if (this._webGLVersion > 1) {
          this._caps.drawBuffersExtension = true;
          this._caps.maxMSAASamples = this._maxMSAASamplesOverride !== null ? this._maxMSAASamplesOverride : this._gl.getParameter(this._gl.MAX_SAMPLES);
          this._caps.maxDrawBuffers = this._gl.getParameter(this._gl.MAX_DRAW_BUFFERS);
        } else {
          const v264 = this._gl.getExtension("WEBGL_draw_buffers");
          if (v264 !== null) {
            this._caps.drawBuffersExtension = true;
            this._gl.drawBuffers = v264.drawBuffersWEBGL.bind(v264);
            this._caps.maxDrawBuffers = this._gl.getParameter(v264.MAX_DRAW_BUFFERS_WEBGL);
            this._gl.DRAW_FRAMEBUFFER = this._gl.FRAMEBUFFER;
            for (let vLN023 = 0; vLN023 < 16; vLN023++) {
              this._gl["COLOR_ATTACHMENT" + vLN023 + "_WEBGL"] = v264["COLOR_ATTACHMENT" + vLN023 + "_WEBGL"];
            }
          }
        }
        if (this._webGLVersion > 1) {
          this._caps.depthTextureExtension = true;
        } else {
          const v265 = this._gl.getExtension("WEBGL_depth_texture");
          if (v265 != null) {
            this._caps.depthTextureExtension = true;
            this._gl.UNSIGNED_INT_24_8 = v265.UNSIGNED_INT_24_8_WEBGL;
          }
        }
        if (this.disableVertexArrayObjects) {
          this._caps.vertexArrayObject = false;
        } else if (this._webGLVersion > 1) {
          this._caps.vertexArrayObject = true;
        } else {
          const v266 = this._gl.getExtension("OES_vertex_array_object");
          if (v266 != null) {
            this._caps.vertexArrayObject = true;
            this._gl.createVertexArray = v266.createVertexArrayOES.bind(v266);
            this._gl.bindVertexArray = v266.bindVertexArrayOES.bind(v266);
            this._gl.deleteVertexArray = v266.deleteVertexArrayOES.bind(v266);
          }
        }
        if (this._webGLVersion > 1) {
          this._caps.instancedArrays = true;
        } else {
          const v267 = this._gl.getExtension("ANGLE_instanced_arrays");
          if (v267 != null) {
            this._caps.instancedArrays = true;
            this._gl.drawArraysInstanced = v267.drawArraysInstancedANGLE.bind(v267);
            this._gl.drawElementsInstanced = v267.drawElementsInstancedANGLE.bind(v267);
            this._gl.vertexAttribDivisor = v267.vertexAttribDivisorANGLE.bind(v267);
          } else {
            this._caps.instancedArrays = false;
          }
        }
        if (this._gl.getShaderPrecisionFormat) {
          const v268 = this._gl.getShaderPrecisionFormat(this._gl.VERTEX_SHADER, this._gl.HIGH_FLOAT);
          const v269 = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.HIGH_FLOAT);
          if (v268 && v269) {
            this._caps.highPrecisionShaderSupported = v268.precision !== 0 && v269.precision !== 0;
          }
        }
        if (this._webGLVersion > 1) {
          this._caps.blendMinMax = true;
        } else {
          const v270 = this._gl.getExtension("EXT_blend_minmax");
          if (v270 != null) {
            this._caps.blendMinMax = true;
            this._gl.MAX = v270.MAX_EXT;
            this._gl.MIN = v270.MIN_EXT;
          }
        }
        if (!this._caps.supportSRGBBuffers) {
          if (this._webGLVersion > 1) {
            this._caps.supportSRGBBuffers = true;
            this._glSRGBExtensionValues = {
              SRGB: WebGL2RenderingContext.SRGB,
              SRGB8: WebGL2RenderingContext.SRGB8,
              SRGB8_ALPHA8: WebGL2RenderingContext.SRGB8_ALPHA8
            };
          } else {
            const v271 = this._gl.getExtension("EXT_sRGB");
            if (v271 != null) {
              this._caps.supportSRGBBuffers = true;
              this._glSRGBExtensionValues = {
                SRGB: v271.SRGB_EXT,
                SRGB8: v271.SRGB_ALPHA_EXT,
                SRGB8_ALPHA8: v271.SRGB_ALPHA_EXT
              };
            }
          }
          if (this._creationOptions) {
            const v272 = this._creationOptions.forceSRGBBufferSupportState;
            if (v272 !== undefined) {
              this._caps.supportSRGBBuffers = this._caps.supportSRGBBuffers && v272;
            }
          }
        }
        this._depthCullingState.depthTest = true;
        this._depthCullingState.depthFunc = this._gl.LEQUAL;
        this._depthCullingState.depthMask = true;
        this._maxSimultaneousTextures = this._caps.maxCombinedTexturesImageUnits;
        for (let vLN024 = 0; vLN024 < this._maxSimultaneousTextures; vLN024++) {
          this._nextFreeTextureSlots.push(vLN024);
        }
        if (this._glRenderer === "Mali-G72") {
          this._caps.disableMorphTargetTexture = true;
        }
      }
      _initFeatures() {
        this._features = {
          forceBitmapOverHTMLImageElement: typeof HTMLImageElement === "undefined",
          supportRenderAndCopyToLodForFloatTextures: this._webGLVersion !== 1,
          supportDepthStencilTexture: this._webGLVersion !== 1,
          supportShadowSamplers: this._webGLVersion !== 1,
          uniformBufferHardCheckMatrix: false,
          allowTexturePrefiltering: this._webGLVersion !== 1,
          trackUbosInFrame: false,
          checkUbosContentBeforeUpload: false,
          supportCSM: this._webGLVersion !== 1,
          basisNeedsPOT: this._webGLVersion === 1,
          support3DTextures: this._webGLVersion !== 1,
          needTypeSuffixInShaderConstants: this._webGLVersion !== 1,
          supportMSAA: this._webGLVersion !== 1,
          supportSSAO2: this._webGLVersion !== 1,
          supportIBLShadows: this._webGLVersion !== 1,
          supportExtendedTextureFormats: this._webGLVersion !== 1,
          supportSwitchCaseInShader: this._webGLVersion !== 1,
          supportSyncTextureRead: true,
          needsInvertingBitmap: true,
          useUBOBindingCache: true,
          needShaderCodeInlining: false,
          needToAlwaysBindUniformBuffers: false,
          supportRenderPasses: false,
          supportSpriteInstancing: true,
          forceVertexBufferStrideAndOffsetMultiple4Bytes: false,
          _checkNonFloatVertexBuffersDontRecreatePipelineContext: false,
          _collectUbosUpdatedInFrame: false
        };
      }
      get webGLVersion() {
        return this._webGLVersion;
      }
      getClassName() {
        return "ThinEngine";
      }
      _prepareWorkingCanvas() {
        if (this._workingCanvas) {
          return;
        }
        this._workingCanvas = this.createCanvas(1, 1);
        const v273 = this._workingCanvas.getContext("2d");
        if (v273) {
          this._workingContext = v273;
        }
      }
      getInfo() {
        return this.getGlInfo();
      }
      getGlInfo() {
        return {
          vendor: this._glVendor,
          qf: this._glRenderer,
          version: this._glVersion
        };
      }
      extractDriverInfo() {
        const v274 = this.getGlInfo();
        if (v274 && v274.qf) {
          return v274.qf;
        } else {
          return "";
        }
      }
      getRenderWidth() {
        if ((!(arguments.length > 0) || arguments[0] === undefined || !arguments[0]) && this._currentRenderTarget) {
          return this._currentRenderTarget.width;
        } else if (this._framebufferDimensionsObject) {
          return this._framebufferDimensionsObject.framebufferWidth;
        } else {
          return this._gl.drawingBufferWidth;
        }
      }
      getRenderHeight() {
        if ((!(arguments.length > 0) || arguments[0] === undefined || !arguments[0]) && this._currentRenderTarget) {
          return this._currentRenderTarget.height;
        } else if (this._framebufferDimensionsObject) {
          return this._framebufferDimensionsObject.framebufferHeight;
        } else {
          return this._gl.drawingBufferHeight;
        }
      }
      clear(p321, p322, p323, fC = false) {
        const v275 = this.stencilStateComposer.useStencilGlobalOnly;
        this.stencilStateComposer.useStencilGlobalOnly = true;
        this.applyStates();
        this.stencilStateComposer.useStencilGlobalOnly = v275;
        let vLN025 = 0;
        if (p322 && p321) {
          let v276 = true;
          if (this._currentRenderTarget) {
            const v277 = this._currentRenderTarget.texture?.format;
            if (v277 === 8 || v277 === 9 || v277 === 10 || v277 === 11) {
              const v278 = this._currentRenderTarget.texture?.type;
              if (v278 === 7 || v278 === 5) {
                C10._TempClearColorUint32[0] = p321.r * 255;
                C10._TempClearColorUint32[1] = p321.g * 255;
                C10._TempClearColorUint32[2] = p321.b * 255;
                C10._TempClearColorUint32[3] = p321.a * 255;
                this._gl.clearBufferuiv(this._gl.COLOR, 0, C10._TempClearColorUint32);
                v276 = false;
              } else {
                C10._TempClearColorInt32[0] = p321.r * 255;
                C10._TempClearColorInt32[1] = p321.g * 255;
                C10._TempClearColorInt32[2] = p321.b * 255;
                C10._TempClearColorInt32[3] = p321.a * 255;
                this._gl.clearBufferiv(this._gl.COLOR, 0, C10._TempClearColorInt32);
                v276 = false;
              }
            }
          }
          if (v276) {
            this._gl.clearColor(p321.r, p321.g, p321.b, p321.a !== undefined ? p321.a : 1);
            vLN025 |= this._gl.COLOR_BUFFER_BIT;
          }
        }
        if (p323) {
          if (this.GI) {
            this._depthCullingState.depthFunc = this._gl.GEQUAL;
            this._gl.clearDepth(0);
          } else {
            this._gl.clearDepth(1);
          }
          vLN025 |= this._gl.DEPTH_BUFFER_BIT;
        }
        if (fC) {
          this._gl.clearStencil(0);
          vLN025 |= this._gl.STENCIL_BUFFER_BIT;
        }
        this._gl.clear(vLN025);
      }
      _viewport(p324, p325, p326, p327) {
        if (p324 !== this._viewportCached.x || p325 !== this._viewportCached.y || p326 !== this._viewportCached.z || p327 !== this._viewportCached.w) {
          this._viewportCached.x = p324;
          this._viewportCached.y = p325;
          this._viewportCached.z = p326;
          this._viewportCached.w = p327;
          this._gl.viewport(p324, p325, p326, p327);
        }
      }
      FI() {
        super.FI();
        if (this._badOS) {
          this.flushFramebuffer();
        }
      }
      get performanceMonitor() {
        throw new Error("Not Supported by ThinEngine");
      }
      bindFramebuffer(p328, yC = 0, IC, fC, ky, AC = 0, my = 0) {
        const vP328 = p328;
        if (this._currentRenderTarget) {
          this._resolveAndGenerateMipMapsFramebuffer(this._currentRenderTarget);
        }
        this._currentRenderTarget = p328;
        this._bindUnboundFramebuffer(vP328._framebuffer);
        const v279 = this._gl;
        if (!p328.isMulti) {
          if (p328.is2DArray || p328.is3D) {
            v279.framebufferTextureLayer(v279.FRAMEBUFFER, v279.COLOR_ATTACHMENT0, p328.texture._hardwareTexture?.underlyingResource, AC, my);
            vP328._currentLOD = AC;
          } else if (p328.isCube) {
            v279.framebufferTexture2D(v279.FRAMEBUFFER, v279.COLOR_ATTACHMENT0, v279.TEXTURE_CUBE_MAP_POSITIVE_X + yC, p328.texture._hardwareTexture?.underlyingResource, AC);
          } else if (vP328._currentLOD !== AC) {
            v279.framebufferTexture2D(v279.FRAMEBUFFER, v279.COLOR_ATTACHMENT0, v279.TEXTURE_2D, p328.texture._hardwareTexture?.underlyingResource, AC);
            vP328._currentLOD = AC;
          }
        }
        const v280 = p328._depthStencilTexture;
        if (v280) {
          if (p328.is3D) {
            if (p328.texture.width !== v280.width || p328.texture.height !== v280.height || p328.texture.depth !== v280.depth) {
              vP2983.e.Warn("Depth/Stencil attachment for 3D target must have same dimensions as color attachment");
            }
          }
          const v281 = p328._depthStencilTextureWithStencil ? v279.DEPTH_STENCIL_ATTACHMENT : v279.DEPTH_ATTACHMENT;
          if (p328.is2DArray || p328.is3D) {
            v279.framebufferTextureLayer(v279.FRAMEBUFFER, v281, v280._hardwareTexture?.underlyingResource, AC, my);
          } else if (p328.isCube) {
            v279.framebufferTexture2D(v279.FRAMEBUFFER, v281, v279.TEXTURE_CUBE_MAP_POSITIVE_X + yC, v280._hardwareTexture?.underlyingResource, AC);
          } else {
            v279.framebufferTexture2D(v279.FRAMEBUFFER, v281, v279.TEXTURE_2D, v280._hardwareTexture?.underlyingResource, AC);
          }
        }
        if (vP328._MSAAFramebuffer) {
          this._bindUnboundFramebuffer(vP328._MSAAFramebuffer);
        }
        if (this._cachedViewport && !ky) {
          this.setViewport(this._cachedViewport, p298, vP298);
        } else {
          if (!p298) {
            p298 = p328.width;
            if (vP2984) {
              p298 /= Math.pow(2, vP2984);
            }
          }
          if (!vP298) {
            vP298 = p328.height;
            if (vP2984) {
              vP298 /= Math.pow(2, vP2984);
            }
          }
          this._viewport(0, 0, p298, vP298);
        }
        this.wipeCaches();
      }
      setStateCullFaceType(p329, p330) {
        var v282;
        const v283 = (v282 = this.cullBackFaces ?? p329) === null || v282 === undefined || v282 ? this._gl.BACK : this._gl.FRONT;
        if (this._depthCullingState.cullFace !== v283 || p330) {
          this._depthCullingState.cullFace = v283;
        }
      }
      setState(p331, yC = 0, IC, fC = false, ky, gC, AC = 0) {
        if (this._depthCullingState.cull !== p331 || IC) {
          this._depthCullingState.cull = p331;
        }
        this.setStateCullFaceType(ky, IC);
        this.setZOffset(yC);
        this.setZOffsetUnits(AC);
        const v284 = fC ? this._gl.CW : this._gl.CCW;
        if (this._depthCullingState.frontFace !== v284 || IC) {
          this._depthCullingState.frontFace = v284;
        }
        this._stencilStateComposer.stencilMaterial = gC;
      }
      _resolveAndGenerateMipMapsFramebuffer(p332, yC = false) {
        if (!p332.disableAutomaticMSAAResolve) {
          if (p332.isMulti) {
            this.resolveMultiFramebuffer(p332);
          } else {
            this.resolveFramebuffer(p332);
          }
        }
        if (!yC) {
          if (p332.isMulti) {
            this.generateMipMapsMultiFramebuffer(p332);
          } else {
            this.generateMipMapsFramebuffer(p332);
          }
        }
      }
      _bindUnboundFramebuffer(p333) {
        if (this._currentFramebuffer !== p333) {
          this._gl.bindFramebuffer(this._gl.FRAMEBUFFER, p333);
          this._currentFramebuffer = p333;
        }
      }
      _currentFrameBufferIsDefaultFrameBuffer() {
        return this._currentFramebuffer === null;
      }
      generateMipmaps(p334) {
        const v285 = this._getTextureTarget(p334);
        this._bindTextureDirectly(v285, p334, true);
        this._gl.generateMipmap(v285);
        this._bindTextureDirectly(v285, null);
      }
      unBindFramebuffer(p335, p336, p337) {
        const vP335 = p335;
        this._currentRenderTarget = null;
        this._resolveAndGenerateMipMapsFramebuffer(p335, p336);
        if (p337) {
          if (vP335._MSAAFramebuffer) {
            this._bindUnboundFramebuffer(vP335._framebuffer);
          }
          p337();
        }
        this._bindUnboundFramebuffer(null);
      }
      generateMipMapsFramebuffer(p338) {
        var v286;
        if (!p338.isMulti && (v286 = p338.texture) !== null && v286 !== undefined && !!v286.generateMipMaps && !p338.isCube) {
          this.generateMipmaps(p338.texture);
        }
      }
      resolveFramebuffer(p339) {
        const vP339 = p339;
        const v287 = this._gl;
        if (!vP339._MSAAFramebuffer || vP339.isMulti) {
          return;
        }
        let v288 = vP339.resolveMSAAColors ? v287.COLOR_BUFFER_BIT : 0;
        v288 |= vP339._generateDepthBuffer && vP339.resolveMSAADepth ? v287.DEPTH_BUFFER_BIT : 0;
        v288 |= vP339._generateStencilBuffer && vP339.resolveMSAAStencil ? v287.STENCIL_BUFFER_BIT : 0;
        v287.bindFramebuffer(v287.READ_FRAMEBUFFER, vP339._MSAAFramebuffer);
        v287.bindFramebuffer(v287.DRAW_FRAMEBUFFER, vP339._framebuffer);
        v287.blitFramebuffer(0, 0, p339.width, p339.height, 0, 0, p339.width, p339.height, v288, v287.NEAREST);
      }
      flushFramebuffer() {
        this._gl.flush();
      }
      restoreDefaultFramebuffer() {
        if (this._currentRenderTarget) {
          this.unBindFramebuffer(this._currentRenderTarget);
        } else {
          this._bindUnboundFramebuffer(null);
        }
        if (this._cachedViewport) {
          this.setViewport(this._cachedViewport);
        }
        this.wipeCaches();
      }
      _resetVertexBufferBinding() {
        this.bindArrayBuffer(null);
        this._cachedVertexBuffers = null;
      }
      createVertexBuffer(p340, p341, p342) {
        return this._createVertexBuffer(p340, this._gl.STATIC_DRAW);
      }
      _createVertexBuffer(p343, p344) {
        const v289 = this._gl.createBuffer();
        if (!v289) {
          throw new Error("Unable to create vertex buffer");
        }
        const v290 = new vP2985.b(v289);
        this.bindArrayBuffer(v290);
        if (typeof p343 !== "number") {
          if (p343 instanceof Array) {
            this._gl.bufferData(this._gl.ARRAY_BUFFER, new Float32Array(p343), p344);
            v290.IX = p343.length * 4;
          } else {
            this._gl.bufferData(this._gl.ARRAY_BUFFER, p343, p344);
            v290.IX = p343.byteLength;
          }
        } else {
          this._gl.bufferData(this._gl.ARRAY_BUFFER, new Uint8Array(p343), p344);
          v290.IX = p343;
        }
        this._resetVertexBufferBinding();
        v290.references = 1;
        return v290;
      }
      createDynamicVertexBuffer(p345, p346) {
        return this._createVertexBuffer(p345, this._gl.DYNAMIC_DRAW);
      }
      _resetIndexBufferBinding() {
        this.bindIndexBuffer(null);
        this._cachedIndexBuffer = null;
      }
      createIndexBuffer(p347, p348, p349) {
        const v291 = this._gl.createBuffer();
        const v292 = new vP2985.b(v291);
        if (!v291) {
          throw new Error("Unable to create index buffer");
        }
        this.bindIndexBuffer(v292);
        const v293 = this._normalizeIndexData(p347);
        this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, v293, p348 ? this._gl.DYNAMIC_DRAW : this._gl.STATIC_DRAW);
        this._resetIndexBufferBinding();
        v292.references = 1;
        v292.is32Bits = v293.BYTES_PER_ELEMENT === 4;
        return v292;
      }
      _normalizeIndexData(p350) {
        if (p350.BYTES_PER_ELEMENT === 2) {
          return p350;
        }
        if (this._caps.uintIndices) {
          if (p350 instanceof Uint32Array) {
            return p350;
          }
          for (let vLN026 = 0; vLN026 < p350.length; vLN026++) {
            if (p350[vLN026] >= 65535) {
              return new Uint32Array(p350);
            }
          }
          return new Uint16Array(p350);
        }
        return new Uint16Array(p350);
      }
      bindArrayBuffer(p351) {
        if (!this._vaoRecordInProgress) {
          this._unbindVertexArrayObject();
        }
        this._bindBuffer(p351, this._gl.ARRAY_BUFFER);
      }
      bindUniformBlock(p352, p353, p354) {
        const v294 = p352.program;
        const v295 = this._gl.getUniformBlockIndex(v294, p353);
        this._gl.uniformBlockBinding(v294, v295, p354);
      }
      bindIndexBuffer(p355) {
        if (!this._vaoRecordInProgress) {
          this._unbindVertexArrayObject();
        }
        this._bindBuffer(p355, this._gl.ELEMENT_ARRAY_BUFFER);
      }
      _bindBuffer(p356, p357) {
        if (this._vaoRecordInProgress || this._currentBoundBuffer[p357] !== p356) {
          this._gl.bindBuffer(p357, p356 ? p356.underlyingResource : null);
          this._currentBoundBuffer[p357] = p356;
        }
      }
      updateArrayBuffer(p358) {
        this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, p358);
      }
      _vertexAttribPointer(p359, p360, p361, p362, p363, p364, p365) {
        const v296 = this._currentBufferPointers[p360];
        if (!v296) {
          return;
        }
        let v297 = false;
        if (v296.active) {
          if (v296.buffer !== p359) {
            v296.buffer = p359;
            v297 = true;
          }
          if (v296.size !== p361) {
            v296.size = p361;
            v297 = true;
          }
          if (v296.type !== p362) {
            v296.type = p362;
            v297 = true;
          }
          if (v296.normalized !== p363) {
            v296.normalized = p363;
            v297 = true;
          }
          if (v296.stride !== p364) {
            v296.stride = p364;
            v297 = true;
          }
          if (v296.offset !== p365) {
            v296.offset = p365;
            v297 = true;
          }
        } else {
          v297 = true;
          v296.active = true;
          v296.index = p360;
          v296.size = p361;
          v296.type = p362;
          v296.normalized = p363;
          v296.stride = p364;
          v296.offset = p365;
          v296.buffer = p359;
        }
        if (v297 || this._vaoRecordInProgress) {
          this.bindArrayBuffer(p359);
          if (p362 === this._gl.UNSIGNED_INT || p362 === this._gl.INT) {
            this._gl.vertexAttribIPointer(p360, p361, p362, p364, p365);
          } else {
            this._gl.vertexAttribPointer(p360, p361, p362, p363, p364, p365);
          }
        }
      }
      _bindIndexBufferWithCache(p366) {
        if (p366 != null && this._cachedIndexBuffer !== p366) {
          this._cachedIndexBuffer = p366;
          this.bindIndexBuffer(p366);
          this._uintIndicesCurrentlySet = p366.is32Bits;
        }
      }
      _bindVertexBuffersAttributes(p367, p368, p369) {
        const v298 = p368.getAttributesNames();
        if (!this._vaoRecordInProgress) {
          this._unbindVertexArrayObject();
        }
        this.unbindAllAttributes();
        for (let vLN027 = 0; vLN027 < v298.length; vLN027++) {
          const v299 = p368.getAttributeLocation(vLN027);
          if (v299 >= 0) {
            const v300 = v298[vLN027];
            let v301 = null;
            if (p369) {
              v301 = p369[v300];
            }
            v301 ||= p367[v300];
            if (!v301) {
              continue;
            }
            this._gl.enableVertexAttribArray(v299);
            if (!this._vaoRecordInProgress) {
              this._vertexAttribArraysEnabled[v299] = true;
            }
            const v302 = v301.getBuffer();
            if (v302) {
              this._vertexAttribPointer(v302, v299, v301.getSize(), v301.type, v301.normalized, v301.byteStride, v301.byteOffset);
              if (v301.getIsInstanced()) {
                this._gl.vertexAttribDivisor(v299, v301.getInstanceDivisor());
                if (!this._vaoRecordInProgress) {
                  this._currentInstanceLocations.push(v299);
                  this._currentInstanceBuffers.push(v302);
                }
              }
            }
          }
        }
      }
      recordVertexArrayObject(p370, p371, p372, p373) {
        const v303 = this._gl.createVertexArray();
        if (!v303) {
          throw new Error("Unable to create VAO");
        }
        this._vaoRecordInProgress = true;
        this._gl.bindVertexArray(v303);
        this._mustWipeVertexAttributes = true;
        this._bindVertexBuffersAttributes(p370, p372, p373);
        this.bindIndexBuffer(p371);
        this._vaoRecordInProgress = false;
        this._gl.bindVertexArray(null);
        return v303;
      }
      bindVertexArrayObject(p374, p375) {
        if (this._cachedVertexArrayObject !== p374) {
          this._cachedVertexArrayObject = p374;
          this._gl.bindVertexArray(p374);
          this._cachedVertexBuffers = null;
          this._cachedIndexBuffer = null;
          this._uintIndicesCurrentlySet = p375 != null && p375.is32Bits;
          this._mustWipeVertexAttributes = true;
        }
      }
      bindBuffersDirectly(p376, p377, p378, p379, p380) {
        if (this._cachedVertexBuffers !== p376 || this._cachedEffectForVertexBuffers !== p380) {
          this._cachedVertexBuffers = p376;
          this._cachedEffectForVertexBuffers = p380;
          const v304 = p380.getAttributesCount();
          this._unbindVertexArrayObject();
          this.unbindAllAttributes();
          let vLN028 = 0;
          for (let vLN029 = 0; vLN029 < v304; vLN029++) {
            if (vLN029 < p378.length) {
              const v305 = p380.getAttributeLocation(vLN029);
              if (v305 >= 0) {
                this._gl.enableVertexAttribArray(v305);
                this._vertexAttribArraysEnabled[v305] = true;
                this._vertexAttribPointer(p376, v305, p378[vLN029], this._gl.FLOAT, false, p379, vLN028);
              }
              vLN028 += p378[vLN029] * 4;
            }
          }
        }
        this._bindIndexBufferWithCache(p377);
      }
      _unbindVertexArrayObject() {
        if (this._cachedVertexArrayObject) {
          this._cachedVertexArrayObject = null;
          this._gl.bindVertexArray(null);
        }
      }
      bindBuffers(p381, p382, p383, p384) {
        if (this._cachedVertexBuffers !== p381 || this._cachedEffectForVertexBuffers !== p383) {
          this._cachedVertexBuffers = p381;
          this._cachedEffectForVertexBuffers = p383;
          this._bindVertexBuffersAttributes(p381, p383, p384);
        }
        this._bindIndexBufferWithCache(p382);
      }
      unbindInstanceAttributes() {
        let v306;
        for (let vLN030 = 0, v307 = this._currentInstanceLocations.length; vLN030 < v307; vLN030++) {
          const v308 = this._currentInstanceBuffers[vLN030];
          if (v306 != v308 && v308.references) {
            v306 = v308;
            this.bindArrayBuffer(v308);
          }
          const v309 = this._currentInstanceLocations[vLN030];
          this._gl.vertexAttribDivisor(v309, 0);
        }
        this._currentInstanceBuffers.length = 0;
        this._currentInstanceLocations.length = 0;
      }
      releaseVertexArrayObject(p385) {
        this._gl.deleteVertexArray(p385);
      }
      _releaseBuffer(p386) {
        p386.references--;
        return p386.references === 0 && (this._deleteBuffer(p386), true);
      }
      _deleteBuffer(p387) {
        this._gl.deleteBuffer(p387.underlyingResource);
      }
      updateAndBindInstancesBuffer(p388, p389, p390) {
        this.bindArrayBuffer(p388);
        if (p389) {
          this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, p389);
        }
        if (p390[0].index !== undefined) {
          this.bindInstancesBuffer(p388, p390, true);
        } else {
          for (let vLN031 = 0; vLN031 < 4; vLN031++) {
            const v310 = p390[vLN031];
            if (!this._vertexAttribArraysEnabled[v310]) {
              this._gl.enableVertexAttribArray(v310);
              this._vertexAttribArraysEnabled[v310] = true;
            }
            this._vertexAttribPointer(p388, v310, 4, this._gl.FLOAT, false, 64, vLN031 * 16);
            this._gl.vertexAttribDivisor(v310, 1);
            this._currentInstanceLocations.push(v310);
            this._currentInstanceBuffers.push(p388);
          }
        }
      }
      bindInstancesBuffer(p391, p392) {
        let v311 = !(arguments.length > 2) || arguments[2] === undefined || arguments[2];
        this.bindArrayBuffer(p391);
        let vLN032 = 0;
        if (v311) {
          for (let vLN033 = 0; vLN033 < p392.length; vLN033++) {
            vLN032 += p392[vLN033].attributeSize * 4;
          }
        }
        for (let vLN034 = 0; vLN034 < p392.length; vLN034++) {
          const v312 = p392[vLN034];
          if (v312.index === undefined) {
            v312.index = this._currentEffect.getAttributeLocationByName(v312.attributeName);
          }
          if (!(v312.index < 0)) {
            if (!this._vertexAttribArraysEnabled[v312.index]) {
              this._gl.enableVertexAttribArray(v312.index);
              this._vertexAttribArraysEnabled[v312.index] = true;
            }
            this._vertexAttribPointer(p391, v312.index, v312.attributeSize, v312.attributeType || this._gl.FLOAT, v312.normalized || false, vLN032, v312.offset);
            this._gl.vertexAttribDivisor(v312.index, v312.divisor === undefined ? 1 : v312.divisor);
            this._currentInstanceLocations.push(v312.index);
            this._currentInstanceBuffers.push(p391);
          }
        }
      }
      disableInstanceAttributeByName(p393) {
        if (!this._currentEffect) {
          return;
        }
        const v313 = this._currentEffect.getAttributeLocationByName(p393);
        this.disableInstanceAttribute(v313);
      }
      disableInstanceAttribute(p394) {
        let v314;
        let v315 = false;
        while ((v314 = this._currentInstanceLocations.indexOf(p394)) !== -1) {
          this._currentInstanceLocations.splice(v314, 1);
          this._currentInstanceBuffers.splice(v314, 1);
          v315 = true;
          v314 = this._currentInstanceLocations.indexOf(p394);
        }
        if (v315) {
          this._gl.vertexAttribDivisor(p394, 0);
          this.disableAttributeByIndex(p394);
        }
      }
      disableAttributeByIndex(p395) {
        this._gl.disableVertexAttribArray(p395);
        this._vertexAttribArraysEnabled[p395] = false;
        this._currentBufferPointers[p395].active = false;
      }
      draw(p396, p397, p398, p399) {
        this.drawElementsType(p396 ? 0 : 1, p397, p398, p399);
      }
      drawPointClouds(p400, p401, p402) {
        this.drawArraysType(2, p400, p401, p402);
      }
      drawUnIndexed(p403, p404, p405, p406) {
        this.drawArraysType(p403 ? 0 : 1, p404, p405, p406);
      }
      drawElementsType(p407, p408, p409, p410) {
        this.applyStates();
        this._reportDrawCall();
        const v316 = this._drawMode(p407);
        const v317 = this._uintIndicesCurrentlySet ? this._gl.UNSIGNED_INT : this._gl.UNSIGNED_SHORT;
        const v318 = this._uintIndicesCurrentlySet ? 4 : 2;
        if (p410) {
          this._gl.drawElementsInstanced(v316, p409, v317, p408 * v318, p410);
        } else {
          this._gl.drawElements(v316, p409, v317, p408 * v318);
        }
      }
      drawArraysType(p411, p412, p413, p414) {
        this.applyStates();
        this._reportDrawCall();
        const v319 = this._drawMode(p411);
        if (p414) {
          this._gl.drawArraysInstanced(v319, p412, p413, p414);
        } else {
          this._gl.drawArrays(v319, p412, p413);
        }
      }
      _drawMode(p415) {
        switch (p415) {
          case 0:
          default:
            return this._gl.TRIANGLES;
          case 2:
          case 3:
            return this._gl.POINTS;
          case 1:
          case 4:
            return this._gl.LINES;
          case 5:
            return this._gl.LINE_LOOP;
          case 6:
            return this._gl.LINE_STRIP;
          case 7:
            return this._gl.TRIANGLE_STRIP;
          case 8:
            return this._gl.TRIANGLE_FAN;
        }
      }
      _releaseEffect(p416) {
        if (this._compiledEffects[p416._key]) {
          delete this._compiledEffects[p416._key];
        }
        const v320 = p416.getPipelineContext();
        if (v320) {
          this._deletePipelineContext(v320);
        }
      }
      _deletePipelineContext(p417) {
        const vP417 = p417;
        if (vP417 && vP417.program) {
          vP417.program.__SPECTOR_rebuildProgram = null;
          (0, vP29812.j)(vP417);
          if (this._gl) {
            if (this._currentProgram === vP417.program) {
              this._setProgram(null);
            }
            this._gl.deleteProgram(vP417.program);
          }
        }
      }
      _getGlobalDefines(p418) {
        return (0, vP29811.e)(p418, this.isNDCHalfZRange, this.GI, this.useExactSrgbConversions);
      }
      createEffect(p419, p420, p421, p422, p423, p424, p425, p426, p427) {
        let v321 = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : 0;
        let v322 = arguments.length > 10 ? arguments[10] : undefined;
        const v323 = typeof p419 === "string" ? p419 : p419.vertexToken || p419.vertexSource || p419.vertexElement || p419.vertex;
        const v324 = typeof p419 === "string" ? p419 : p419.fragmentToken || p419.fragmentSource || p419.fragmentElement || p419.fragment;
        const v325 = this._getGlobalDefines();
        const v326 = p420.attributes !== undefined;
        let v327 = p423 ?? p420.defines ?? "";
        if (v325) {
          v327 += v325;
        }
        const v328 = v323 + "+" + v324 + "@" + v327;
        if (this._compiledEffects[v328]) {
          const v329 = this._compiledEffects[v328];
          if (p425 && v329.isReady()) {
            p425(v329);
          }
          v329._refCount++;
          return v329;
        }
        if (this._gl) {
          (0, vP298.B)(this._gl);
        }
        const v330 = new vP29810.Effect(p419, p420, v326 ? this : p421, p422, this, p423, p424, p425, p426, p427, v328, p420.shaderLanguage ?? v321, p420.extraInitializationsAsync ?? v322);
        this._compiledEffects[v328] = v330;
        return v330;
      }
      _getShaderSource(p428) {
        return this._gl.getShaderSource(p428);
      }
      createRawShaderProgram(p429, p430, p431, p432, gC = null) {
        const v331 = (0, vP298.B)(this._gl);
        v331._contextWasLost = this._contextWasLost;
        v331.validateShaderPrograms = this.validateShaderPrograms;
        return (0, vP298.t)(p429, p430, p431, p432 || this._gl, gC);
      }
      createShaderProgram(p433, p434, p435, p436, p437, AC = null) {
        const v332 = (0, vP298.B)(this._gl);
        v332._contextWasLost = this._contextWasLost;
        v332.validateShaderPrograms = this.validateShaderPrograms;
        return (0, vP298.u)(p433, p434, p435, p436, p437 || this._gl, AC);
      }
      inlineShaderCode(p438) {
        return p438;
      }
      createPipelineContext(p439) {
        if (this._gl) {
          (0, vP298.B)(this._gl).parallelShaderCompile = this._caps.parallelShaderCompile;
        }
        const v333 = (0, vP298.s)(this._gl, p439);
        v333.Jy = this;
        return v333;
      }
      createMaterialContext() {}
      createDrawContext() {}
      _finalizePipelineContext(p440) {
        return (0, vP298.i)(p440, this._gl, this.validateShaderPrograms);
      }
      _preparePipelineContextAsync(p441, p442, p443, p444, p445, p446, p447, p448, p449, p450, p451) {
        const v334 = (0, vP298.B)(this._gl);
        v334._contextWasLost = this._contextWasLost;
        v334.validateShaderPrograms = this.validateShaderPrograms;
        v334._createShaderProgramInjection = this._createShaderProgram.bind(this);
        v334.createRawShaderProgramInjection = this.createRawShaderProgram.bind(this);
        v334.createShaderProgramInjection = this.createShaderProgram.bind(this);
        v334.loadFileInjection = this._loadFile.bind(this);
        return (0, vP298.o)(p441, p442, p443, p444, p445, p446, p447, p448, p449, p450, p451);
      }
      _createShaderProgram(p452, p453, p454, p455, gC = null) {
        return (0, vP298.d)(p452, p453, p454, p455, gC);
      }
      _isRenderingStateCompiled(p456) {
        return !this._isDisposed && (0, vP298.l)(p456, this._gl, this.validateShaderPrograms);
      }
      _executeWhenRenderingStateIsCompiled(p457, p458) {
        (0, vP298.f)(p457, p458);
      }
      getUniforms(p459, p460) {
        const v335 = new Array();
        const vP459 = p459;
        for (let vLN035 = 0; vLN035 < p460.length; vLN035++) {
          v335.push(this._gl.getUniformLocation(vP459.program, p460[vLN035]));
        }
        return v335;
      }
      getAttributes(p461, p462) {
        const vA10 = [];
        const vP461 = p461;
        for (let vLN036 = 0; vLN036 < p462.length; vLN036++) {
          try {
            vA10.push(this._gl.getAttribLocation(vP461.program, p462[vLN036]));
          } catch (e5) {
            vA10.push(-1);
          }
        }
        return vA10;
      }
      enableEffect(p463) {
        if ((p463 = p463 !== null && (0, vP2982.e)(p463) ? p463.effect : p463) && p463 !== this._currentEffect) {
          this._stencilStateComposer.stencilMaterial = undefined;
          this.bindSamplers(p463);
          this._currentEffect = p463;
          if (p463.onBind) {
            p463.onBind(p463);
          }
          if (p463._onBindObservable) {
            p463._onBindObservable.notifyObservers(p463);
          }
        }
      }
      setInt(p464, p465) {
        return !!p464 && (this._gl.uniform1i(p464, p465), true);
      }
      setInt2(p466, p467, p468) {
        return !!p466 && (this._gl.uniform2i(p466, p467, p468), true);
      }
      setInt3(p469, p470, p471, p472) {
        return !!p469 && (this._gl.uniform3i(p469, p470, p471, p472), true);
      }
      setInt4(p473, p474, p475, p476, p477) {
        return !!p473 && (this._gl.uniform4i(p473, p474, p475, p476, p477), true);
      }
      setIntArray(p478, p479) {
        return !!p478 && (this._gl.uniform1iv(p478, p479), true);
      }
      setIntArray2(p480, p481) {
        return !!p480 && p481.length % 2 === 0 && (this._gl.uniform2iv(p480, p481), true);
      }
      setIntArray3(p482, p483) {
        return !!p482 && p483.length % 3 === 0 && (this._gl.uniform3iv(p482, p483), true);
      }
      setIntArray4(p484, p485) {
        return !!p484 && p485.length % 4 === 0 && (this._gl.uniform4iv(p484, p485), true);
      }
      setUInt(p486, p487) {
        return !!p486 && (this._gl.uniform1ui(p486, p487), true);
      }
      setUInt2(p488, p489, p490) {
        return !!p488 && (this._gl.uniform2ui(p488, p489, p490), true);
      }
      setUInt3(p491, p492, p493, p494) {
        return !!p491 && (this._gl.uniform3ui(p491, p492, p493, p494), true);
      }
      setUInt4(p495, p496, p497, p498, p499) {
        return !!p495 && (this._gl.uniform4ui(p495, p496, p497, p498, p499), true);
      }
      setUIntArray(p500, p501) {
        return !!p500 && (this._gl.uniform1uiv(p500, p501), true);
      }
      setUIntArray2(p502, p503) {
        return !!p502 && p503.length % 2 === 0 && (this._gl.uniform2uiv(p502, p503), true);
      }
      setUIntArray3(p504, p505) {
        return !!p504 && p505.length % 3 === 0 && (this._gl.uniform3uiv(p504, p505), true);
      }
      setUIntArray4(p506, p507) {
        return !!p506 && p507.length % 4 === 0 && (this._gl.uniform4uiv(p506, p507), true);
      }
      setArray(p508, p509) {
        return !!p508 && !(p509.length < 1) && (this._gl.uniform1fv(p508, p509), true);
      }
      setArray2(p510, p511) {
        return !!p510 && p511.length % 2 === 0 && (this._gl.uniform2fv(p510, p511), true);
      }
      setArray3(p512, p513) {
        return !!p512 && p513.length % 3 === 0 && (this._gl.uniform3fv(p512, p513), true);
      }
      setArray4(p514, p515) {
        return !!p514 && p515.length % 4 === 0 && (this._gl.uniform4fv(p514, p515), true);
      }
      setMatrices(p516, p517) {
        return !!p516 && (this._gl.uniformMatrix4fv(p516, false, p517), true);
      }
      setMatrix3x3(p518, p519) {
        return !!p518 && (this._gl.uniformMatrix3fv(p518, false, p519), true);
      }
      setMatrix2x2(p520, p521) {
        return !!p520 && (this._gl.uniformMatrix2fv(p520, false, p521), true);
      }
      setFloat(p522, p523) {
        return !!p522 && (this._gl.uniform1f(p522, p523), true);
      }
      setFloat2(p524, p525, p526) {
        return !!p524 && (this._gl.uniform2f(p524, p525, p526), true);
      }
      setFloat3(p527, p528, p529, p530) {
        return !!p527 && (this._gl.uniform3f(p527, p528, p529, p530), true);
      }
      setFloat4(p531, p532, p533, p534, p535) {
        return !!p531 && (this._gl.uniform4f(p531, p532, p533, p534, p535), true);
      }
      applyStates() {
        this._depthCullingState.apply(this._gl);
        this._stencilStateComposer.apply(this._gl);
        this._alphaState.apply(this._gl);
        if (this._colorWriteChanged) {
          this._colorWriteChanged = false;
          const v336 = this._colorWrite;
          this._gl.colorMask(v336, v336, v336, v336);
        }
      }
      wipeCaches(p536) {
        if (!this.preventCacheWipeBetweenFrames || !!p536) {
          this._currentEffect = null;
          this._viewportCached.x = 0;
          this._viewportCached.y = 0;
          this._viewportCached.z = 0;
          this._viewportCached.w = 0;
          this._unbindVertexArrayObject();
          if (p536) {
            this._currentProgram = null;
            this.resetTextureCache();
            this._stencilStateComposer.reset();
            this._depthCullingState.reset();
            this._depthCullingState.depthFunc = this._gl.LEQUAL;
            this._alphaState.reset();
            this._alphaMode = 1;
            this._alphaEquation = 0;
            this._colorWrite = true;
            this._colorWriteChanged = true;
            this._unpackFlipYCached = null;
            this._gl.pixelStorei(this._gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, this._gl.NONE);
            this._gl.pixelStorei(this._gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0);
            this._mustWipeVertexAttributes = true;
            this.unbindAllAttributes();
          }
          this._resetVertexBufferBinding();
          this._cachedIndexBuffer = null;
          this._cachedEffectForVertexBuffers = null;
          this.bindIndexBuffer(null);
        }
      }
      _getSamplingParameters(p537, p538) {
        const v337 = this._gl;
        let v338 = v337.NEAREST;
        let v339 = v337.NEAREST;
        let v340 = false;
        switch (p537) {
          case 11:
            v338 = v337.LINEAR;
            v339 = p538 ? v337.LINEAR_MIPMAP_NEAREST : v337.LINEAR;
            break;
          case 3:
            v338 = v337.LINEAR;
            v340 = true;
            v339 = p538 ? v337.LINEAR_MIPMAP_LINEAR : v337.LINEAR;
            break;
          case 8:
            v340 = true;
            v338 = v337.NEAREST;
            v339 = p538 ? v337.NEAREST_MIPMAP_LINEAR : v337.NEAREST;
            break;
          case 4:
            v338 = v337.NEAREST;
            v339 = p538 ? v337.NEAREST_MIPMAP_NEAREST : v337.NEAREST;
            break;
          case 5:
            v338 = v337.NEAREST;
            v339 = p538 ? v337.LINEAR_MIPMAP_NEAREST : v337.LINEAR;
            break;
          case 6:
            v340 = true;
            v338 = v337.NEAREST;
            v339 = p538 ? v337.LINEAR_MIPMAP_LINEAR : v337.LINEAR;
            break;
          case 7:
            v338 = v337.NEAREST;
            v339 = v337.LINEAR;
            break;
          case 1:
            v338 = v337.NEAREST;
            v339 = v337.NEAREST;
            break;
          case 9:
            v338 = v337.LINEAR;
            v339 = p538 ? v337.NEAREST_MIPMAP_NEAREST : v337.NEAREST;
            break;
          case 10:
            v340 = true;
            v338 = v337.LINEAR;
            v339 = p538 ? v337.NEAREST_MIPMAP_LINEAR : v337.NEAREST;
            break;
          case 2:
            v338 = v337.LINEAR;
            v339 = v337.LINEAR;
            break;
          case 12:
            v338 = v337.LINEAR;
            v339 = v337.NEAREST;
        }
        return {
          min: v339,
          mag: v338,
          hasMipMaps: v340
        };
      }
      _createTexture() {
        const v341 = this._gl.createTexture();
        if (!v341) {
          throw new Error("Unable to create texture");
        }
        return v341;
      }
      _createHardwareTexture() {
        return new vP2988.e(this._createTexture(), this._gl);
      }
      _createInternalTexture(p539, p540) {
        let v342;
        let v343 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
        let v344 = false;
        let v345 = false;
        let vLN037 = 0;
        let vLN3 = 3;
        let vLN5 = 5;
        let v346 = false;
        let vLN13 = 1;
        let v347 = false;
        let vLN038 = 0;
        if (p540 !== undefined && typeof p540 === "object") {
          v344 = !!p540.generateMipMaps;
          v345 = !!p540.createMipMaps;
          vLN037 = p540.type === undefined ? 0 : p540.type;
          vLN3 = p540.samplingMode === undefined ? 3 : p540.samplingMode;
          vLN5 = p540.format === undefined ? 5 : p540.format;
          v346 = p540.useSRGBBuffer !== undefined && p540.useSRGBBuffer;
          vLN13 = p540.samples ?? 1;
          v342 = p540.label;
          v347 = !!p540.createMSAATexture;
          vLN038 = p540.comparisonFunction || 0;
        } else {
          v344 = !!p540;
        }
        v346 &&= this._caps.supportSRGBBuffers && (this.webGLVersion > 1 || this.isWebGPU);
        if (vLN037 === 1 && !this._caps.textureFloatLinearFiltering || vLN037 === 2 && !this._caps.textureHalfFloatLinearFiltering) {
          vLN3 = 1;
        }
        if (vLN037 === 1 && !this._caps.textureFloat) {
          vLN037 = 0;
          vP2983.e.Warn("Float textures are not supported. Type forced to TEXTURETYPE_UNSIGNED_BYTE");
        }
        const v348 = (0, vP29813.g)(vLN5);
        const v349 = (0, vP29813.e)(vLN5);
        const v350 = this._gl;
        const v351 = new vP2989.c(this, v343);
        const v352 = p539.width || p539;
        const v353 = p539.height || p539;
        const v354 = p539.depth || 0;
        const v355 = p539.layers || 0;
        const v356 = this._getSamplingParameters(vLN3, (v344 || v345) && !v348);
        const v357 = v355 !== 0 ? v350.TEXTURE_2D_ARRAY : v354 !== 0 ? v350.TEXTURE_3D : v350.TEXTURE_2D;
        const v358 = v348 ? this._getInternalFormatFromDepthTextureFormat(vLN5, true, v349) : this._getRGBABufferInternalSizedFormat(vLN037, vLN5, v346);
        const v359 = v348 ? v349 ? v350.DEPTH_STENCIL : v350.DEPTH_COMPONENT : this._getInternalFormat(vLN5);
        const v360 = v348 ? this._getWebGLTextureTypeFromDepthTextureFormat(vLN5) : this._getWebGLTextureType(vLN037);
        this._bindTextureDirectly(v357, v351);
        if (v355 !== 0) {
          v351.is2DArray = true;
          v350.texImage3D(v357, 0, v358, v352, v353, v355, 0, v359, v360, null);
        } else if (v354 !== 0) {
          v351.is3D = true;
          v350.texImage3D(v357, 0, v358, v352, v353, v354, 0, v359, v360, null);
        } else {
          v350.texImage2D(v357, 0, v358, v352, v353, 0, v359, v360, null);
        }
        v350.texParameteri(v357, v350.TEXTURE_MAG_FILTER, v356.mag);
        v350.texParameteri(v357, v350.TEXTURE_MIN_FILTER, v356.min);
        v350.texParameteri(v357, v350.TEXTURE_WRAP_S, v350.CLAMP_TO_EDGE);
        v350.texParameteri(v357, v350.TEXTURE_WRAP_T, v350.CLAMP_TO_EDGE);
        if (v348 && this.webGLVersion > 1) {
          if (vLN038 === 0) {
            v350.texParameteri(v357, v350.TEXTURE_COMPARE_FUNC, 515);
            v350.texParameteri(v357, v350.TEXTURE_COMPARE_MODE, v350.NONE);
          } else {
            v350.texParameteri(v357, v350.TEXTURE_COMPARE_FUNC, vLN038);
            v350.texParameteri(v357, v350.TEXTURE_COMPARE_MODE, v350.COMPARE_REF_TO_TEXTURE);
          }
        }
        if (v344 || v345) {
          this._gl.generateMipmap(v357);
        }
        this._bindTextureDirectly(v357, null);
        v351._useSRGBBuffer = v346;
        v351.baseWidth = v352;
        v351.baseHeight = v353;
        v351.width = v352;
        v351.height = v353;
        v351.depth = v355 || v354;
        v351.isReady = true;
        v351.samples = vLN13;
        v351.generateMipMaps = v344;
        v351.samplingMode = vLN3;
        v351.type = vLN037;
        v351.format = vLN5;
        v351.label = v342;
        v351.comparisonFunction = vLN038;
        this._internalTexturesCache.push(v351);
        if (v347) {
          let v361 = null;
          v361 = (0, vP29813.g)(v351.format) ? this._setupFramebufferDepthAttachments((0, vP29813.e)(v351.format), v351.format !== 19, v351.width, v351.height, vLN13, v351.format, true) : this._createRenderBuffer(v351.width, v351.height, vLN13, -1, this._getRGBABufferInternalSizedFormat(v351.type, v351.format, v351._useSRGBBuffer), -1);
          if (!v361) {
            throw new Error("Unable to create render buffer");
          }
          v351._autoMSAAManagement = true;
          let v362 = v351._hardwareTexture;
          v362 ||= v351._hardwareTexture = this._createHardwareTexture();
          v362.addMSAARenderBuffer(v361);
        }
        return v351;
      }
      _getUseSRGBBuffer(p541, p542) {
        return p541 && this._caps.supportSRGBBuffers && (this.webGLVersion > 1 || p542);
      }
      createTexture(p543, p544, p545, p546) {
        var vThis = this;
        let v363 = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 3;
        let v364 = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
        let v365 = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : null;
        let v366 = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : null;
        let v367 = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : null;
        let v368 = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : null;
        let v369 = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : null;
        let v370 = arguments.length > 11 ? arguments[11] : undefined;
        let v371 = arguments.length > 12 ? arguments[12] : undefined;
        let v372 = arguments.length > 13 ? arguments[13] : undefined;
        let v373 = arguments.length > 14 ? arguments[14] : undefined;
        return this._createTextureBase(p543, p544, p545, p546, v363, v364, v365, function () {
          for (var v374 = arguments.length, v375 = new Array(v374), vLN039 = 0; vLN039 < v374; vLN039++) {
            v375[vLN039] = arguments[vLN039];
          }
          return vThis._prepareWebGLTexture(...v375, v368);
        }, (p547, p548, p549, p550, p551, p552) => {
          const v376 = this._gl;
          const v377 = p549.width === p547 && p549.height === p548;
          p551._creationFlags = v372 ?? 0;
          const v378 = this._getTexImageParametersForCreateTexture(p551.format, p551._useSRGBBuffer);
          if (v377) {
            v376.texImage2D(v376.TEXTURE_2D, 0, v378.internalFormat, v378.format, v378.type, p549);
            return false;
          }
          const v379 = this._caps.maxTextureSize;
          if (p549.width > v379 || p549.height > v379 || !this._supportsHardwareTextureRescaling) {
            this._prepareWorkingCanvas();
            return !!this._workingCanvas && !!this._workingContext && (this._workingCanvas.width = p547, this._workingCanvas.height = p548, this._workingContext.drawImage(p549, 0, 0, p549.width, p549.height, 0, 0, p547, p548), v376.texImage2D(v376.TEXTURE_2D, 0, v378.internalFormat, v378.format, v378.type, this._workingCanvas), p551.width = p547, p551.height = p548, false);
          }
          {
            const v380 = new vP2989.c(this, 2);
            this._bindTextureDirectly(v376.TEXTURE_2D, v380, true);
            v376.texImage2D(v376.TEXTURE_2D, 0, v378.internalFormat, v378.format, v378.type, p549);
            this._rescaleTexture(v380, p551, p546, v378.format, () => {
              this._releaseTexture(v380);
              this._bindTextureDirectly(v376.TEXTURE_2D, p551, true);
              p552();
            });
          }
          return true;
        }, v366, v367, v368, v369, v370, v371, v373);
      }
      _getTexImageParametersForCreateTexture(p553, p554) {
        let v381;
        let v382;
        if (this.webGLVersion === 1) {
          v381 = this._getInternalFormat(p553, p554);
          v382 = v381;
        } else {
          v381 = this._getInternalFormat(p553, false);
          v382 = this._getRGBABufferInternalSizedFormat(0, p553, p554);
        }
        return {
          internalFormat: v382,
          format: v381,
          type: this._gl.UNSIGNED_BYTE
        };
      }
      _rescaleTexture(p555, p556, p557, p558, p559) {}
      _unpackFlipY(p560) {
        if (this._unpackFlipYCached !== p560) {
          this._gl.pixelStorei(this._gl.UNPACK_FLIP_Y_WEBGL, p560 ? 1 : 0);
          if (this.enableUnpackFlipYCached) {
            this._unpackFlipYCached = p560;
          }
        }
      }
      _getUnpackAlignement() {
        return this._gl.getParameter(this._gl.UNPACK_ALIGNMENT);
      }
      _getTextureTarget(p561) {
        if (p561.isCube) {
          return this._gl.TEXTURE_CUBE_MAP;
        } else if (p561.is3D) {
          return this._gl.TEXTURE_3D;
        } else if (p561.is2DArray || p561.isMultiview) {
          return this._gl.TEXTURE_2D_ARRAY;
        } else {
          return this._gl.TEXTURE_2D;
        }
      }
      updateTextureSamplingMode(p562, p563, IC = false) {
        const v383 = this._getTextureTarget(p563);
        const v384 = this._getSamplingParameters(p562, p563.useMipMaps || IC);
        this._setTextureParameterInteger(v383, this._gl.TEXTURE_MAG_FILTER, v384.mag, p563);
        this._setTextureParameterInteger(v383, this._gl.TEXTURE_MIN_FILTER, v384.min);
        if (IC && v384.hasMipMaps) {
          p563.generateMipMaps = true;
          this._gl.generateMipmap(v383);
        }
        this._bindTextureDirectly(v383, null);
        p563.samplingMode = p562;
      }
      updateTextureDimensions(p564, p565, p566) {}
      updateTextureWrappingMode(p567, p568, IC = null, fC = null) {
        const v385 = this._getTextureTarget(p567);
        if (p568 !== null) {
          this._setTextureParameterInteger(v385, this._gl.TEXTURE_WRAP_S, this._getTextureWrapMode(p568), p567);
          p567._cachedWrapU = p568;
        }
        if (IC !== null) {
          this._setTextureParameterInteger(v385, this._gl.TEXTURE_WRAP_T, this._getTextureWrapMode(p298), p567);
          p567._cachedWrapV = p298;
        }
        if ((p567.is2DArray || p567.is3D) && fC !== null) {
          this._setTextureParameterInteger(v385, this._gl.TEXTURE_WRAP_R, this._getTextureWrapMode(vP298), p567);
          p567._cachedWrapR = vP298;
        }
        this._bindTextureDirectly(v385, null);
      }
      _uploadCompressedDataToTextureDirectly(p569, p570, p571, p572, p573, gC = 0, AC = 0) {
        const v386 = this._gl;
        let v387 = v386.TEXTURE_2D;
        if (p569.isCube) {
          v387 = v386.TEXTURE_CUBE_MAP_POSITIVE_X + vP2983;
        }
        if (p569._useSRGBBuffer) {
          switch (p570) {
            case 37492:
            case 36196:
              if (this._caps.etc2) {
                p570 = v386.COMPRESSED_SRGB8_ETC2;
              } else {
                p569._useSRGBBuffer = false;
              }
              break;
            case 37496:
              if (this._caps.etc2) {
                p570 = v386.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC;
              } else {
                p569._useSRGBBuffer = false;
              }
              break;
            case 36492:
              p570 = v386.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT;
              break;
            case 37808:
              p570 = v386.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR;
              break;
            case 33776:
              if (this._caps.s3tc_srgb) {
                p570 = v386.COMPRESSED_SRGB_S3TC_DXT1_EXT;
              } else {
                p569._useSRGBBuffer = false;
              }
              break;
            case 33777:
              if (this._caps.s3tc_srgb) {
                p570 = v386.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
              } else {
                p569._useSRGBBuffer = false;
              }
              break;
            case 33779:
              if (this._caps.s3tc_srgb) {
                p570 = v386.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
              } else {
                p569._useSRGBBuffer = false;
              }
              break;
            default:
              p569._useSRGBBuffer = false;
          }
        }
        this._gl.compressedTexImage2D(v387, AC, p570, p571, p572, 0, p573);
      }
      _uploadDataToTextureDirectly(p574, p575, IC = 0, fC = 0, ky, gC = false) {
        const v388 = this._gl;
        const v389 = this._getWebGLTextureType(p574.type);
        const v390 = this._getInternalFormat(p574.format);
        const v391 = ky === undefined ? this._getRGBABufferInternalSizedFormat(p574.type, p574.format, p574._useSRGBBuffer) : this._getInternalFormat(ky, p574._useSRGBBuffer);
        this._unpackFlipY(p574.invertY);
        let v392 = v388.TEXTURE_2D;
        if (p574.isCube) {
          v392 = v388.TEXTURE_CUBE_MAP_POSITIVE_X + p298;
        }
        const v393 = Math.round(Math.log(p574.width) * Math.LOG2E);
        const v394 = Math.round(Math.log(p574.height) * Math.LOG2E);
        const v395 = gC ? p574.width : Math.pow(2, Math.max(v393 - fC, 0));
        const v396 = gC ? p574.height : Math.pow(2, Math.max(v394 - fC, 0));
        v388.texImage2D(v392, fC, v391, v395, v396, 0, v390, v389, p575);
      }
      updateTextureData(p576, p577, p578, p579, p580, p581, AC = 0, my = 0, XC = false) {
        const v397 = this._gl;
        const v398 = this._getWebGLTextureType(p576.type);
        const v399 = this._getInternalFormat(p576.format);
        this._unpackFlipY(p576.invertY);
        let v400 = v397.TEXTURE_2D;
        let v401 = v397.TEXTURE_2D;
        if (p576.isCube) {
          v401 = v397.TEXTURE_CUBE_MAP_POSITIVE_X + vP2984;
          v400 = v397.TEXTURE_CUBE_MAP;
        }
        this._bindTextureDirectly(v400, p576, true);
        v397.texSubImage2D(v401, my, p578, p579, p580, p581, v399, v398, p577);
        if (XC) {
          this._gl.generateMipmap(v401);
        }
        this._bindTextureDirectly(v400, null);
      }
      _uploadArrayBufferViewToTexture(p582, p583, IC = 0, fC = 0) {
        const v402 = this._gl;
        const v403 = p582.isCube ? v402.TEXTURE_CUBE_MAP : v402.TEXTURE_2D;
        this._bindTextureDirectly(v403, p582, true);
        this._uploadDataToTextureDirectly(p582, p583, IC, fC);
        this._bindTextureDirectly(v403, null, true);
      }
      _prepareWebGLTextureContinuation(p584, p585, p586, p587, p588) {
        const v404 = this._gl;
        if (!v404) {
          return;
        }
        const v405 = this._getSamplingParameters(p588, !p586);
        v404.texParameteri(v404.TEXTURE_2D, v404.TEXTURE_MAG_FILTER, v405.mag);
        v404.texParameteri(v404.TEXTURE_2D, v404.TEXTURE_MIN_FILTER, v405.min);
        if (!p586 && !p587) {
          v404.generateMipmap(v404.TEXTURE_2D);
        }
        this._bindTextureDirectly(v404.TEXTURE_2D, null);
        if (p585) {
          p585.removePendingData(p584);
        }
        p584.onLoadedObservable.notifyObservers(p584);
        p584.onLoadedObservable.clear();
      }
      _prepareWebGLTexture(p589, p590, p591, p592, p593, p594, p595, p596, p597, p598) {
        const v406 = this.getCaps().maxTextureSize;
        const v407 = Math.min(v406, this.needPOTTextures ? (0, vP2986.f)(p592.width, v406) : p592.width);
        const v408 = Math.min(v406, this.needPOTTextures ? (0, vP2986.f)(p592.height, v406) : p592.height);
        const v409 = this._gl;
        if (v409) {
          if (p589._hardwareTexture) {
            this._bindTextureDirectly(v409.TEXTURE_2D, p589, true);
            this._unpackFlipY(p593 === undefined || !!p593);
            p589.baseWidth = p592.width;
            p589.baseHeight = p592.height;
            p589.width = v407;
            p589.height = v408;
            p589.isReady = true;
            p589.type = p589.type !== -1 ? p589.type : 0;
            p589.format = p589.format !== -1 ? p589.format : p598 ?? (p590 !== ".jpg" || p589._useSRGBBuffer ? 5 : 4);
            if (!p596(v407, v408, p592, p590, p589, () => {
              this._prepareWebGLTextureContinuation(p589, p591, p594, p595, p597);
            })) {
              this._prepareWebGLTextureContinuation(p589, p591, p594, p595, p597);
            }
          } else if (p591) {
            p591.removePendingData(p589);
          }
        }
      }
      _getInternalFormatFromDepthTextureFormat(p599, p600, p601) {
        const v410 = this._gl;
        if (!p600) {
          return v410.STENCIL_INDEX8;
        }
        let v411 = p601 ? v410.DEPTH_STENCIL : v410.DEPTH_COMPONENT;
        if (this.webGLVersion > 1) {
          if (p599 === 15) {
            v411 = v410.DEPTH_COMPONENT16;
          } else if (p599 === 16) {
            v411 = v410.DEPTH_COMPONENT24;
          } else if (p599 === 17 || p599 === 13) {
            v411 = p601 ? v410.DEPTH24_STENCIL8 : v410.DEPTH_COMPONENT24;
          } else if (p599 === 14) {
            v411 = v410.DEPTH_COMPONENT32F;
          } else if (p599 === 18) {
            v411 = p601 ? v410.DEPTH32F_STENCIL8 : v410.DEPTH_COMPONENT32F;
          }
        } else {
          v411 = v410.DEPTH_COMPONENT16;
        }
        return v411;
      }
      _getWebGLTextureTypeFromDepthTextureFormat(p602) {
        const v412 = this._gl;
        let v413 = v412.UNSIGNED_INT;
        if (p602 === 15) {
          v413 = v412.UNSIGNED_SHORT;
        } else if (p602 === 17 || p602 === 13) {
          v413 = v412.UNSIGNED_INT_24_8;
        } else if (p602 === 14) {
          v413 = v412.FLOAT;
        } else if (p602 === 18) {
          v413 = v412.FLOAT_32_UNSIGNED_INT_24_8_REV;
        } else if (p602 === 19) {
          v413 = v412.UNSIGNED_BYTE;
        }
        return v413;
      }
      _setupFramebufferDepthAttachments(p603, p604, p605, p606) {
        let v414 = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
        let v415 = arguments.length > 5 ? arguments[5] : undefined;
        let v416 = arguments.length > 6 && arguments[6] !== undefined && arguments[6];
        const v417 = this._gl;
        v415 = v415 ?? (p603 ? 13 : 14);
        const v418 = this._getInternalFormatFromDepthTextureFormat(v415, p604, p603);
        if (p603 && p604) {
          return this._createRenderBuffer(p605, p606, v414, v417.DEPTH_STENCIL, v418, v416 ? -1 : v417.DEPTH_STENCIL_ATTACHMENT);
        } else if (p604) {
          return this._createRenderBuffer(p605, p606, v414, v418, v418, v416 ? -1 : v417.DEPTH_ATTACHMENT);
        } else if (p603) {
          return this._createRenderBuffer(p605, p606, v414, v418, v418, v416 ? -1 : v417.STENCIL_ATTACHMENT);
        } else {
          return null;
        }
      }
      _createRenderBuffer(p607, p608, p609, p610, p611, p612) {
        let v419 = !(arguments.length > 6) || arguments[6] === undefined || arguments[6];
        const v420 = this._gl.createRenderbuffer();
        return this._updateRenderBuffer(v420, p607, p608, p609, p610, p611, p612, v419);
      }
      _updateRenderBuffer(p613, p614, p615, p616, p617, p618, p619) {
        let v421 = !(arguments.length > 7) || arguments[7] === undefined || arguments[7];
        const v422 = this._gl;
        v422.bindRenderbuffer(v422.RENDERBUFFER, p613);
        if (p616 > 1 && v422.renderbufferStorageMultisample) {
          v422.renderbufferStorageMultisample(v422.RENDERBUFFER, p616, p618, p614, p615);
        } else {
          v422.renderbufferStorage(v422.RENDERBUFFER, p617, p614, p615);
        }
        if (p619 !== -1) {
          v422.framebufferRenderbuffer(v422.FRAMEBUFFER, p619, v422.RENDERBUFFER, p613);
        }
        if (v421) {
          v422.bindRenderbuffer(v422.RENDERBUFFER, null);
        }
        return p613;
      }
      _releaseTexture(p620) {
        this._deleteTexture(p620._hardwareTexture);
        this.unbindAllTextures();
        const v423 = this._internalTexturesCache.indexOf(p620);
        if (v423 !== -1) {
          this._internalTexturesCache.splice(v423, 1);
        }
        if (p620._lodTextureHigh) {
          p620._lodTextureHigh.dispose();
        }
        if (p620._lodTextureMid) {
          p620._lodTextureMid.dispose();
        }
        if (p620._lodTextureLow) {
          p620._lodTextureLow.dispose();
        }
        if (p620._irradianceTexture) {
          p620._irradianceTexture.dispose();
        }
      }
      _deleteTexture(p621) {
        if (p621 !== null && p621 !== undefined) {
          p621.release();
        }
      }
      _setProgram(p622) {
        if (this._currentProgram !== p622) {
          (0, vP298.p)(p622, this._gl);
          this._currentProgram = p622;
        }
      }
      bindSamplers(p623) {
        const v424 = p623.getPipelineContext();
        this._setProgram(v424.program);
        const v425 = p623.getSamplers();
        for (let vLN040 = 0; vLN040 < v425.length; vLN040++) {
          const v426 = p623.getUniform(v425[vLN040]);
          if (v426) {
            this._boundUniforms[vLN040] = v426;
          }
        }
        this._currentEffect = null;
      }
      _activateCurrentTexture() {
        if (this._currentTextureChannel !== this._activeChannel) {
          this._gl.activeTexture(this._gl.TEXTURE0 + this._activeChannel);
          this._currentTextureChannel = this._activeChannel;
        }
      }
      _bindTextureDirectly(p624, p625, IC = false, fC = false) {
        let v427 = false;
        const v428 = p625 && p625._associatedChannel > -1;
        if (IC && v428) {
          this._activeChannel = p625._associatedChannel;
        }
        if (this._boundTexturesCache[this._activeChannel] !== p625 || fC) {
          this._activateCurrentTexture();
          if (p625 && p625.isMultiview) {
            vP2983.e.Error(["_bindTextureDirectly called with a multiview texture!", p624, p625]);
            throw "_bindTextureDirectly called with a multiview texture!";
          }
          var v429;
          this._gl.bindTexture(p624, (p625 === null || p625 === undefined || (v429 = p625._hardwareTexture) === null || v429 === undefined ? undefined : v429.underlyingResource) ?? null);
          this._boundTexturesCache[this._activeChannel] = p625;
          if (p625) {
            p625._associatedChannel = this._activeChannel;
          }
        } else if (IC) {
          v427 = true;
          this._activateCurrentTexture();
        }
        if (v428 && !IC) {
          this._bindSamplerUniformToChannel(p625._associatedChannel, this._activeChannel);
        }
        return v427;
      }
      _bindTexture(p626, p627, p628) {
        if (p626 === undefined) {
          return;
        }
        if (p627) {
          p627._associatedChannel = p626;
        }
        this._activeChannel = p626;
        const v430 = p627 ? this._getTextureTarget(p627) : this._gl.TEXTURE_2D;
        this._bindTextureDirectly(v430, p627);
      }
      unbindAllTextures() {
        for (let vLN041 = 0; vLN041 < this._maxSimultaneousTextures; vLN041++) {
          this._activeChannel = vLN041;
          this._bindTextureDirectly(this._gl.TEXTURE_2D, null);
          this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null);
          if (this.webGLVersion > 1) {
            this._bindTextureDirectly(this._gl.TEXTURE_3D, null);
            this._bindTextureDirectly(this._gl.TEXTURE_2D_ARRAY, null);
          }
        }
      }
      setTexture(p629, p630, p631, p632) {
        if (p629 !== undefined) {
          if (p630) {
            this._boundUniforms[p629] = p630;
          }
          this._setTexture(p629, p631);
        }
      }
      _bindSamplerUniformToChannel(p633, p634) {
        const v431 = this._boundUniforms[p633];
        if (v431 && v431._currentState !== p634) {
          this._gl.uniform1i(v431, p634);
          v431._currentState = p634;
        }
      }
      _getTextureWrapMode(p635) {
        switch (p635) {
          case 1:
            return this._gl.REPEAT;
          case 0:
            return this._gl.CLAMP_TO_EDGE;
          case 2:
            return this._gl.MIRRORED_REPEAT;
        }
        return this._gl.REPEAT;
      }
      _setTexture(p636, p637) {
        let v432;
        let v433 = arguments.length > 2 && arguments[2] !== undefined && arguments[2];
        let v434 = arguments.length > 3 && arguments[3] !== undefined && arguments[3];
        if (!p637) {
          if (this._boundTexturesCache[p636] != null) {
            this._activeChannel = p636;
            this._bindTextureDirectly(this._gl.TEXTURE_2D, null);
            this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null);
            if (this.webGLVersion > 1) {
              this._bindTextureDirectly(this._gl.TEXTURE_3D, null);
              this._bindTextureDirectly(this._gl.TEXTURE_2D_ARRAY, null);
            }
          }
          return false;
        }
        if (p637.video) {
          this._activeChannel = p636;
          const v435 = p637.getInternalTexture();
          if (v435) {
            v435._associatedChannel = p636;
          }
          p637.update();
        } else if (p637.delayLoadState === 4) {
          p637.delayLoad();
          return false;
        }
        v432 = v434 ? p637.depthStencilTexture : p637.isReady() ? p637.getInternalTexture() : p637.isCube ? this.emptyCubeTexture : p637.is3D ? this.emptyTexture3D : p637.is2DArray ? this.emptyTexture2DArray : this.emptyTexture;
        if (!v433 && v432) {
          v432._associatedChannel = p636;
        }
        let v436 = true;
        if (this._boundTexturesCache[p636] === v432) {
          if (!v433) {
            this._bindSamplerUniformToChannel(v432._associatedChannel, p636);
          }
          v436 = false;
        }
        this._activeChannel = p636;
        const v437 = this._getTextureTarget(v432);
        if (v436) {
          this._bindTextureDirectly(v437, v432, v433);
        }
        if (v432 && !v432.isMultiview) {
          if (v432.isCube && v432._cachedCoordinatesMode !== p637.coordinatesMode) {
            v432._cachedCoordinatesMode = p637.coordinatesMode;
            const v438 = p637.coordinatesMode !== 3 && p637.coordinatesMode !== 5 ? 1 : 0;
            p637.wrapU = v438;
            p637.wrapV = v438;
          }
          if (v432._cachedWrapU !== p637.wrapU) {
            v432._cachedWrapU = p637.wrapU;
            this._setTextureParameterInteger(v437, this._gl.TEXTURE_WRAP_S, this._getTextureWrapMode(p637.wrapU), v432);
          }
          if (v432._cachedWrapV !== p637.wrapV) {
            v432._cachedWrapV = p637.wrapV;
            this._setTextureParameterInteger(v437, this._gl.TEXTURE_WRAP_T, this._getTextureWrapMode(p637.wrapV), v432);
          }
          if (v432.is3D && v432._cachedWrapR !== p637.wrapR) {
            v432._cachedWrapR = p637.wrapR;
            this._setTextureParameterInteger(v437, this._gl.TEXTURE_WRAP_R, this._getTextureWrapMode(p637.wrapR), v432);
          }
          this._setAnisotropicLevel(v437, v432, p637.anisotropicFilteringLevel);
        }
        return true;
      }
      setTextureArray(p638, p639, p640, p641) {
        if (p638 !== undefined && p639) {
          if (!this._textureUnits || this._textureUnits.length !== p640.length) {
            this._textureUnits = new Int32Array(p640.length);
          }
          for (let vLN042 = 0; vLN042 < p640.length; vLN042++) {
            const v439 = p640[vLN042].getInternalTexture();
            if (v439) {
              this._textureUnits[vLN042] = p638 + vLN042;
              v439._associatedChannel = p638 + vLN042;
            } else {
              this._textureUnits[vLN042] = -1;
            }
          }
          this._gl.uniform1iv(p639, this._textureUnits);
          for (let vLN043 = 0; vLN043 < p640.length; vLN043++) {
            this._setTexture(this._textureUnits[vLN043], p640[vLN043], true);
          }
        }
      }
      _setAnisotropicLevel(p642, p643, p644) {
        const v440 = this._caps.textureAnisotropicFilterExtension;
        if (p643.samplingMode !== 11 && p643.samplingMode !== 3 && p643.samplingMode !== 2) {
          p644 = 1;
        }
        if (v440 && p643._cachedAnisotropicFilteringLevel !== p644) {
          this._setTextureParameterFloat(p642, v440.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(p644, this._caps.maxAnisotropy), p643);
          p643._cachedAnisotropicFilteringLevel = p644;
        }
      }
      _setTextureParameterFloat(p645, p646, p647, p648) {
        this._bindTextureDirectly(p645, p648, true, true);
        this._gl.texParameterf(p645, p646, p647);
      }
      _setTextureParameterInteger(p649, p650, p651, p652) {
        if (p652) {
          this._bindTextureDirectly(p649, p652, true, true);
        }
        this._gl.texParameteri(p649, p650, p651);
      }
      unbindAllAttributes() {
        if (this._mustWipeVertexAttributes) {
          this._mustWipeVertexAttributes = false;
          for (let vLN044 = 0; vLN044 < this._caps.maxVertexAttribs; vLN044++) {
            this.disableAttributeByIndex(vLN044);
          }
        } else {
          for (let vLN045 = 0, v441 = this._vertexAttribArraysEnabled.length; vLN045 < v441; vLN045++) {
            if (!(vLN045 >= this._caps.maxVertexAttribs) && !!this._vertexAttribArraysEnabled[vLN045]) {
              this.disableAttributeByIndex(vLN045);
            }
          }
        }
      }
      releaseEffects() {
        this._compiledEffects = {};
        this.onReleaseEffectsObservable.notifyObservers(this);
      }
      dispose() {
        var v442;
        if ((0, vP2984.k)() && this._renderingCanvas) {
          this._renderingCanvas.removeEventListener("webglcontextlost", this._onContextLost);
          if (this._onContextRestored) {
            this._renderingCanvas.removeEventListener("webglcontextrestored", this._onContextRestored);
          }
        }
        super.dispose();
        if (this._dummyFramebuffer) {
          this._gl.deleteFramebuffer(this._dummyFramebuffer);
        }
        this.unbindAllAttributes();
        this._boundUniforms = {};
        this._workingCanvas = null;
        this._workingContext = null;
        this._currentBufferPointers.length = 0;
        this._currentProgram = null;
        if (this._creationOptions.loseContextOnDispose) {
          if ((v442 = this._gl.getExtension("WEBGL_lose_context")) !== null && v442 !== undefined) {
            v442.loseContext();
          }
        }
        (0, vP298.y)(this._gl);
      }
      attachContextLostEvent(p653) {
        if (this._renderingCanvas) {
          this._renderingCanvas.addEventListener("webglcontextlost", p653, false);
        }
      }
      attachContextRestoredEvent(p654) {
        if (this._renderingCanvas) {
          this._renderingCanvas.addEventListener("webglcontextrestored", p654, false);
        }
      }
      getError() {
        return this._gl.getError();
      }
      _canRenderToFloatFramebuffer() {
        if (this._webGLVersion > 1) {
          return this._caps.colorBufferFloat;
        } else {
          return this._canRenderToFramebuffer(1);
        }
      }
      _canRenderToHalfFloatFramebuffer() {
        if (this._webGLVersion > 1) {
          return this._caps.colorBufferFloat;
        } else {
          return this._canRenderToFramebuffer(2);
        }
      }
      _canRenderToFramebuffer(p655) {
        const v443 = this._gl;
        while (v443.getError() !== v443.NO_ERROR);
        let v444 = true;
        const v445 = v443.createTexture();
        v443.bindTexture(v443.TEXTURE_2D, v445);
        v443.texImage2D(v443.TEXTURE_2D, 0, this._getRGBABufferInternalSizedFormat(p655), 1, 1, 0, v443.RGBA, this._getWebGLTextureType(p655), null);
        v443.texParameteri(v443.TEXTURE_2D, v443.TEXTURE_MIN_FILTER, v443.NEAREST);
        v443.texParameteri(v443.TEXTURE_2D, v443.TEXTURE_MAG_FILTER, v443.NEAREST);
        const v446 = v443.createFramebuffer();
        v443.bindFramebuffer(v443.FRAMEBUFFER, v446);
        v443.framebufferTexture2D(v443.FRAMEBUFFER, v443.COLOR_ATTACHMENT0, v443.TEXTURE_2D, v445, 0);
        const v447 = v443.checkFramebufferStatus(v443.FRAMEBUFFER);
        v444 = v444 && v447 === v443.FRAMEBUFFER_COMPLETE;
        v444 = v444 && v443.getError() === v443.NO_ERROR;
        if (v444) {
          v443.clear(v443.COLOR_BUFFER_BIT);
          v444 = v444 && v443.getError() === v443.NO_ERROR;
        }
        if (v444) {
          v443.bindFramebuffer(v443.FRAMEBUFFER, null);
          const v448 = v443.RGBA;
          const v449 = v443.UNSIGNED_BYTE;
          const v450 = new Uint8Array(4);
          v443.readPixels(0, 0, 1, 1, v448, v449, v450);
          v444 = v444 && v443.getError() === v443.NO_ERROR;
        }
        v443.deleteTexture(v445);
        v443.deleteFramebuffer(v446);
        v443.bindFramebuffer(v443.FRAMEBUFFER, null);
        while (!v444 && v443.getError() !== v443.NO_ERROR);
        return v444;
      }
      _getWebGLTextureType(p656) {
        if (this._webGLVersion === 1) {
          switch (p656) {
            case 1:
              return this._gl.FLOAT;
            case 2:
              return this._gl.HALF_FLOAT_OES;
            case 0:
              return this._gl.UNSIGNED_BYTE;
            case 8:
              return this._gl.UNSIGNED_SHORT_4_4_4_4;
            case 9:
              return this._gl.UNSIGNED_SHORT_5_5_5_1;
            case 10:
              return this._gl.UNSIGNED_SHORT_5_6_5;
          }
          return this._gl.UNSIGNED_BYTE;
        }
        switch (p656) {
          case 3:
            return this._gl.BYTE;
          case 0:
            return this._gl.UNSIGNED_BYTE;
          case 4:
            return this._gl.SHORT;
          case 5:
            return this._gl.UNSIGNED_SHORT;
          case 6:
            return this._gl.INT;
          case 7:
            return this._gl.UNSIGNED_INT;
          case 1:
            return this._gl.FLOAT;
          case 2:
            return this._gl.HALF_FLOAT;
          case 8:
            return this._gl.UNSIGNED_SHORT_4_4_4_4;
          case 9:
            return this._gl.UNSIGNED_SHORT_5_5_5_1;
          case 10:
            return this._gl.UNSIGNED_SHORT_5_6_5;
          case 11:
            return this._gl.UNSIGNED_INT_2_10_10_10_REV;
          case 12:
            return this._gl.UNSIGNED_INT_24_8;
          case 13:
            return this._gl.UNSIGNED_INT_10F_11F_11F_REV;
          case 14:
            return this._gl.UNSIGNED_INT_5_9_9_9_REV;
          case 15:
            return this._gl.FLOAT_32_UNSIGNED_INT_24_8_REV;
        }
        return this._gl.UNSIGNED_BYTE;
      }
      _getInternalFormat(p657, yC = false) {
        let v451 = yC ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA;
        switch (p657) {
          case 0:
            v451 = this._gl.ALPHA;
            break;
          case 1:
            v451 = this._gl.LUMINANCE;
            break;
          case 2:
            v451 = this._gl.LUMINANCE_ALPHA;
            break;
          case 6:
          case 33322:
          case 36760:
            v451 = this._gl.RED;
            break;
          case 7:
          case 33324:
          case 36761:
            v451 = this._gl.RG;
            break;
          case 4:
          case 32852:
          case 36762:
            v451 = yC ? this._glSRGBExtensionValues.SRGB : this._gl.RGB;
            break;
          case 5:
          case 32859:
          case 36763:
            v451 = yC ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA;
        }
        if (this._webGLVersion > 1) {
          switch (p657) {
            case 8:
              v451 = this._gl.RED_INTEGER;
              break;
            case 9:
              v451 = this._gl.RG_INTEGER;
              break;
            case 10:
              v451 = this._gl.RGB_INTEGER;
              break;
            case 11:
              v451 = this._gl.RGBA_INTEGER;
          }
        }
        return v451;
      }
      _getRGBABufferInternalSizedFormat(p658, p659, IC = false) {
        if (this._webGLVersion === 1) {
          if (p659 !== undefined) {
            switch (p659) {
              case 0:
                return this._gl.ALPHA;
              case 1:
                return this._gl.LUMINANCE;
              case 2:
                return this._gl.LUMINANCE_ALPHA;
              case 4:
                if (IC) {
                  return this._glSRGBExtensionValues.SRGB;
                } else {
                  return this._gl.RGB;
                }
            }
          }
          return this._gl.RGBA;
        }
        switch (p658) {
          case 3:
            switch (p659) {
              case 6:
                return this._gl.R8_SNORM;
              case 7:
                return this._gl.RG8_SNORM;
              case 4:
                return this._gl.RGB8_SNORM;
              case 8:
                return this._gl.R8I;
              case 9:
                return this._gl.RG8I;
              case 10:
                return this._gl.RGB8I;
              case 11:
                return this._gl.RGBA8I;
              default:
                return this._gl.RGBA8_SNORM;
            }
          case 0:
            switch (p659) {
              case 6:
                return this._gl.R8;
              case 7:
                return this._gl.RG8;
              case 4:
                if (IC) {
                  return this._glSRGBExtensionValues.SRGB8;
                } else {
                  return this._gl.RGB8;
                }
              case 5:
                if (IC) {
                  return this._glSRGBExtensionValues.SRGB8_ALPHA8;
                } else {
                  return this._gl.RGBA8;
                }
              case 8:
                return this._gl.R8UI;
              case 9:
                return this._gl.RG8UI;
              case 10:
                return this._gl.RGB8UI;
              case 11:
                return this._gl.RGBA8UI;
              case 0:
                return this._gl.ALPHA;
              case 1:
                return this._gl.LUMINANCE;
              case 2:
                return this._gl.LUMINANCE_ALPHA;
              default:
                return this._gl.RGBA8;
            }
          case 4:
            switch (p659) {
              case 8:
                return this._gl.R16I;
              case 36760:
                return this._gl.R16_SNORM_EXT;
              case 36761:
                return this._gl.RG16_SNORM_EXT;
              case 36762:
                return this._gl.RGB16_SNORM_EXT;
              case 36763:
                return this._gl.RGBA16_SNORM_EXT;
              case 9:
                return this._gl.RG16I;
              case 10:
                return this._gl.RGB16I;
              default:
                return this._gl.RGBA16I;
            }
          case 5:
            switch (p659) {
              case 8:
                return this._gl.R16UI;
              case 33322:
                return this._gl.R16_EXT;
              case 33324:
                return this._gl.RG16_EXT;
              case 32852:
                return this._gl.RGB16_EXT;
              case 32859:
                return this._gl.RGBA16_EXT;
              case 9:
                return this._gl.RG16UI;
              case 10:
                return this._gl.RGB16UI;
              default:
                return this._gl.RGBA16UI;
            }
          case 6:
            switch (p659) {
              case 8:
                return this._gl.R32I;
              case 9:
                return this._gl.RG32I;
              case 10:
                return this._gl.RGB32I;
              default:
                return this._gl.RGBA32I;
            }
          case 7:
            switch (p659) {
              case 8:
                return this._gl.R32UI;
              case 9:
                return this._gl.RG32UI;
              case 10:
                return this._gl.RGB32UI;
              default:
                return this._gl.RGBA32UI;
            }
          case 1:
            switch (p659) {
              case 6:
                return this._gl.R32F;
              case 7:
                return this._gl.RG32F;
              case 4:
                return this._gl.RGB32F;
              default:
                return this._gl.RGBA32F;
            }
          case 2:
            switch (p659) {
              case 6:
                return this._gl.R16F;
              case 7:
                return this._gl.RG16F;
              case 4:
                return this._gl.RGB16F;
              default:
                return this._gl.RGBA16F;
            }
          case 10:
            return this._gl.RGB565;
          case 13:
            return this._gl.R11F_G11F_B10F;
          case 14:
            return this._gl.RGB9_E5;
          case 8:
            return this._gl.RGBA4;
          case 9:
            return this._gl.RGB5_A1;
          case 11:
            switch (p659) {
              case 5:
              default:
                return this._gl.RGB10_A2;
              case 11:
                return this._gl.RGB10_A2UI;
            }
        }
        if (IC) {
          return this._glSRGBExtensionValues.SRGB8_ALPHA8;
        } else {
          return this._gl.RGBA8;
        }
      }
      readPixels(p660, p661, p662, p663) {
        let v452 = !(arguments.length > 4) || arguments[4] === undefined || arguments[4];
        let v453 = !(arguments.length > 5) || arguments[5] === undefined || arguments[5];
        let v454 = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : null;
        const v455 = v452 ? 4 : 3;
        const v456 = v452 ? this._gl.RGBA : this._gl.RGB;
        const v457 = p662 * p663 * v455;
        if (v454) {
          if (v454.length < v457) {
            vP2983.e.Error(`Data buffer is too small to store the read pixels (${v454.length} should be more than ${v457})`);
            return Promise.resolve(v454);
          }
        } else {
          v454 = new Uint8Array(v457);
        }
        if (v453) {
          this.flushFramebuffer();
        }
        this._gl.readPixels(p660, p661, p662, p663, v456, this._gl.UNSIGNED_BYTE, v454);
        return Promise.resolve(v454);
      }
      static get IsSupportedAsync() {
        return Promise.resolve(this.isSupported());
      }
      static get IsSupported() {
        return this.isSupported();
      }
      static isSupported() {
        if (this._HasMajorPerformanceCaveat !== null) {
          return !this._HasMajorPerformanceCaveat;
        }
        if (this._IsSupported === null) {
          try {
            const v458 = vP2987.b._CreateCanvas(1, 1);
            const v459 = v458.getContext("webgl") || v458.getContext("experimental-webgl");
            this._IsSupported = v459 != null && !!window.WebGLRenderingContext;
          } catch (e6) {
            this._IsSupported = false;
          }
        }
        return this._IsSupported;
      }
      static get HasMajorPerformanceCaveat() {
        if (this._HasMajorPerformanceCaveat === null) {
          try {
            const v460 = vP2987.b._CreateCanvas(1, 1);
            const v461 = v460.getContext("webgl", {
              failIfMajorPerformanceCaveat: true
            }) || v460.getContext("experimental-webgl", {
              failIfMajorPerformanceCaveat: true
            });
            this._HasMajorPerformanceCaveat = !v461;
          } catch (e7) {
            this._HasMajorPerformanceCaveat = false;
          }
        }
        return this._HasMajorPerformanceCaveat;
      }
    }
    C10._TempClearColorUint32 = new Uint32Array(4);
    C10._TempClearColorInt32 = new Int32Array(4);
    C10.ExceptionList = [{
      key: "Chrome/63.0",
      capture: "63\\.0\\.3239\\.(\\d+)",
      captureConstraint: 108,
      targets: ["uniformBuffer"]
    }, {
      key: "Firefox/58",
      capture: null,
      captureConstraint: null,
      targets: ["uniformBuffer"]
    }, {
      key: "Firefox/59",
      capture: null,
      captureConstraint: null,
      targets: ["uniformBuffer"]
    }, {
      key: "Chrome/72.+?Mobile",
      capture: null,
      captureConstraint: null,
      targets: ["vao"]
    }, {
      key: "Chrome/73.+?Mobile",
      capture: null,
      captureConstraint: null,
      targets: ["vao"]
    }, {
      key: "Chrome/74.+?Mobile",
      capture: null,
      captureConstraint: null,
      targets: ["vao"]
    }, {
      key: "Mac OS.+Chrome/71",
      capture: null,
      captureConstraint: null,
      targets: ["vao"]
    }, {
      key: "Mac OS.+Chrome/72",
      capture: null,
      captureConstraint: null,
      targets: ["vao"]
    }, {
      key: "Mac OS.+Chrome",
      capture: null,
      captureConstraint: null,
      targets: ["uniformBuffer"]
    }, {
      key: "Chrome/12\\d\\..+?Mobile",
      capture: null,
      captureConstraint: null,
      targets: ["uniformBuffer"]
    }, {
      key: ".*AppleWebKit.*(15.4).*Safari",
      capture: null,
      captureConstraint: null,
      targets: ["antialias", "maxMSAASamples"]
    }, {
      key: ".*(15.4).*AppleWebKit.*Safari",
      capture: null,
      captureConstraint: null,
      targets: ["antialias", "maxMSAASamples"]
    }];
    C10._ConcatenateShader = vP29811.c;
    C10._IsSupported = null;
    C10._HasMajorPerformanceCaveat = null;
  },
  17020: (p664, p665, p666) => {
    p666.d(p665, {
      d: () => C12
    });
    var vP666 = p666(16796);
    var vP6662 = p666(16973);
    var vP6663 = p666(16955);
    var vP6664 = p666(17026);
    var vP6665 = p666(16939);
    var vP6666 = p666(16878);
    var vP6667 = p666(16811);
    var vP6668 = p666(18);
    var vP6669 = p666(17052);
    var vP66610 = p666(16986);
    class C11 {
      get renderList() {
        return this._renderList;
      }
      set renderList(p667) {
        if (this._renderList !== p667) {
          if (this._unObserveRenderList) {
            this._unObserveRenderList();
            this._unObserveRenderList = null;
          }
          if (p667) {
            this._unObserveRenderList = (0, vP66610.g)(p667, this._renderListHasChanged);
          }
          this._renderList = p667;
        }
      }
      get disableImageProcessing() {
        return this._disableImageProcessing;
      }
      set disableImageProcessing(p668) {
        if (p668 !== this._disableImageProcessing) {
          this._disableImageProcessing = p668;
          this._scene.markAllMaterialsAsDirty(64);
        }
      }
      get name() {
        return this._name;
      }
      set name(p669) {
        if (this._name === p669) {
          return;
        }
        this._name = p669;
        if (!this._scene) {
          return;
        }
        const v462 = this._scene.getEngine();
        for (let vLN046 = 0; vLN046 < this._renderPassIds.length; ++vLN046) {
          const v463 = this._renderPassIds[vLN046];
          v462._renderPassNames[v463] = `${this._name}#${vLN046}`;
        }
      }
      get renderPassIds() {
        return this._renderPassIds;
      }
      get currentRefreshId() {
        return this._currentRefreshId;
      }
      setMaterialForRendering(p670, p671) {
        let v464;
        v464 = Array.isArray(p670) ? p670 : [p670];
        for (let vLN047 = 0; vLN047 < v464.length; ++vLN047) {
          for (let vLN048 = 0; vLN048 < this.options.numPasses; ++vLN048) {
            let v465 = v464[vLN047];
            if (v464[vLN047].isAnInstance) {
              v465 = v464[vLN047].Gg;
            }
            v465.setMaterialForRenderPass(this._renderPassIds[vLN048], p671 !== undefined ? Array.isArray(p671) ? p671[vLN048] : p671 : undefined);
          }
        }
      }
      constructor(p672, p673, p674) {
        this._unObserveRenderList = null;
        this._renderListHasChanged = (p675, p676) => {
          const v466 = this._renderList ? this._renderList.length : 0;
          if (p676 === 0 && v466 > 0 || v466 === 0) {
            for (const v467 of this._scene.meshes) {
              v467._markSubMeshesAsLightDirty();
            }
          }
        };
        this.particleSystemList = null;
        this.getCustomRenderList = null;
        this.renderParticles = true;
        this.renderSprites = false;
        this.forceLayerMaskCheck = false;
        this._disableImageProcessing = false;
        this.onBeforeRenderObservable = new vP666.e();
        this.onAfterRenderObservable = new vP666.e();
        this.onBeforeRenderingManagerRenderObservable = new vP666.e();
        this.onAfterRenderingManagerRenderObservable = new vP666.e();
        this.onFastPathRenderObservable = new vP666.e();
        this._currentRefreshId = -1;
        this._refreshRate = 1;
        this._currentApplyByPostProcessSetting = false;
        this._currentSceneCamera = null;
        this.name = p672;
        this._scene = p673;
        this.renderList = [];
        this._renderPassIds = [];
        this.options = (0, vP6668.d)({
          numPasses: 1,
          doNotChangeAspectRatio: true
        }, p674);
        this._createRenderPassId();
        this.renderPassId = this._renderPassIds[0];
        this._renderingManager = new vP6669.d(p673);
        this._renderingManager._useSceneAutoClearSetup = true;
      }
      _releaseRenderPassId() {
        const v468 = this._scene.getEngine();
        for (let vLN049 = 0; vLN049 < this.options.numPasses; ++vLN049) {
          v468.releaseRenderPassId(this._renderPassIds[vLN049]);
        }
        this._renderPassIds.length = 0;
      }
      _createRenderPassId() {
        this._releaseRenderPassId();
        const v469 = this._scene.getEngine();
        for (let vLN050 = 0; vLN050 < this.options.numPasses; ++vLN050) {
          this._renderPassIds[vLN050] = v469.createRenderPassId(`${this.name}#${vLN050}`);
        }
      }
      resetRefreshCounter() {
        this._currentRefreshId = -1;
      }
      get refreshRate() {
        return this._refreshRate;
      }
      set refreshRate(p677) {
        this._refreshRate = p677;
        this.resetRefreshCounter();
      }
      shouldRender() {
        if (this._currentRefreshId === -1 || this.refreshRate === this._currentRefreshId) {
          this._currentRefreshId = 1;
          return true;
        } else {
          this._currentRefreshId++;
          return false;
        }
      }
      isReadyForRendering(p678, p679) {
        this.prepareRenderList();
        this.initRender(p678, p679);
        const v470 = this._checkReadiness();
        this.finishRender();
        return v470;
      }
      prepareRenderList() {
        const v471 = this._scene;
        if (this._waitingRenderList) {
          if (!this.renderListPredicate) {
            this.renderList = [];
            for (let vLN051 = 0; vLN051 < this._waitingRenderList.length; vLN051++) {
              const v472 = this._waitingRenderList[vLN051];
              const v473 = v471.getMeshById(v472);
              if (v473) {
                this.renderList.push(v473);
              }
            }
          }
          this._waitingRenderList = undefined;
        }
        if (this.renderListPredicate) {
          if (this.renderList) {
            this.renderList.length = 0;
          } else {
            this.renderList = [];
          }
          const v474 = this._scene.meshes;
          for (let vLN052 = 0; vLN052 < v474.length; vLN052++) {
            const v475 = v474[vLN052];
            if (this.renderListPredicate(v475)) {
              this.renderList.push(v475);
            }
          }
        }
        this._currentApplyByPostProcessSetting = this._scene.imageProcessingConfiguration.applyByPostProcess;
        if (this._disableImageProcessing) {
          this._scene.imageProcessingConfiguration._applyByPostProcess = this._disableImageProcessing;
        }
      }
      initRender(p680, p681) {
        const v476 = this._scene.getEngine();
        const v477 = this.activeCamera ?? this._scene.activeCamera;
        this._currentSceneCamera = this._scene.activeCamera;
        if (v477) {
          if (v477 !== this._scene.activeCamera) {
            this._scene.setTransformMatrix(v477.getViewMatrix(), v477.getProjectionMatrix(true));
            this._scene.activeCamera = v477;
          }
          v476.setViewport(v477.rigParent ? v477.rigParent.viewport : v477.viewport, p680, p681);
        }
        this._defaultRenderListPrepared = false;
      }
      finishRender() {
        const v478 = this._scene;
        if (this._disableImageProcessing) {
          v478.imageProcessingConfiguration._applyByPostProcess = this._currentApplyByPostProcessSetting;
        }
        v478.activeCamera = this._currentSceneCamera;
        if (this._currentSceneCamera) {
          if (this.activeCamera && this.activeCamera !== v478.activeCamera) {
            v478.setTransformMatrix(this._currentSceneCamera.getViewMatrix(), this._currentSceneCamera.getProjectionMatrix(true));
          }
          v478.getEngine().setViewport(this._currentSceneCamera.viewport);
        }
        v478.resetCachedMaterial();
      }
      render(CC = 0, yC = false) {
        const v479 = this._scene;
        const v480 = v479.getEngine();
        const v481 = v480.currentRenderPassId;
        v480.currentRenderPassId = this._renderPassIds[CC];
        this.onBeforeRenderObservable.notifyObservers(CC);
        if (v480.snapshotRendering && v480.snapshotRenderingMode === 1) {
          this.onFastPathRenderObservable.notifyObservers(CC);
        } else {
          let v482 = null;
          const v483 = this.renderList ? this.renderList : v479.getActiveMeshes().data;
          const v484 = this.renderList ? this.renderList.length : v479.getActiveMeshes().length;
          if (this.getCustomRenderList) {
            v482 = this.getCustomRenderList(p664, v483, v484);
          }
          if (v482) {
            this._prepareRenderingManager(v482, v482.length, this.forceLayerMaskCheck);
          } else {
            if (!this._defaultRenderListPrepared) {
              this._prepareRenderingManager(v483, v484, !this.renderList || this.forceLayerMaskCheck);
              this._defaultRenderListPrepared = true;
            }
            v482 = v483;
          }
          this.onBeforeRenderingManagerRenderObservable.notifyObservers(CC);
          this._renderingManager.render(this.customRenderFunction, v482, this.renderParticles, this.renderSprites);
          this.onAfterRenderingManagerRenderObservable.notifyObservers(CC);
        }
        if (!yC) {
          this.onAfterRenderObservable.notifyObservers(p664);
        }
        v480.currentRenderPassId = v481;
      }
      _checkReadiness() {
        const v485 = this._scene;
        const v486 = v485.getEngine();
        const v487 = v486.currentRenderPassId;
        let v488 = true;
        if (!v485.getViewMatrix()) {
          v485.updateTransformMatrix();
        }
        const v489 = this.options.numPasses;
        for (let vLN053 = 0; vLN053 < v489 && v488; vLN053++) {
          let v490 = null;
          const v491 = this.renderList ? this.renderList : v485.getActiveMeshes().data;
          const v492 = this.renderList ? this.renderList.length : v485.getActiveMeshes().length;
          v486.currentRenderPassId = this._renderPassIds[vLN053];
          this.onBeforeRenderObservable.notifyObservers(vLN053);
          if (this.getCustomRenderList) {
            v490 = this.getCustomRenderList(vLN053, v491, v492);
          }
          v490 ||= v491;
          if (!this.options.doNotChangeAspectRatio) {
            v485.updateTransformMatrix(true);
          }
          for (let vLN054 = 0; vLN054 < v490.length && v488; ++vLN054) {
            const v493 = v490[vLN054];
            if (v493.isEnabled() && !v493.isBlocked && v493.isVisible && v493.wf) {
              if (this.customIsReadyFunction) {
                if (!this.customIsReadyFunction(v493, this.refreshRate, true)) {
                  v488 = false;
                  continue;
                }
              } else if (!v493.isReady(true)) {
                v488 = false;
                continue;
              }
            }
          }
          this.onAfterRenderObservable.notifyObservers(vLN053);
          if (v489 > 1) {
            v485.incrementRenderId();
            v485.resetCachedMaterial();
          }
        }
        const v494 = this.particleSystemList || v485.BO;
        for (const v495 of v494) {
          if (!v495.isReady()) {
            v488 = false;
          }
        }
        v486.currentRenderPassId = v487;
        return v488;
      }
      _prepareRenderingManager(p682, p683, p684) {
        const v496 = this._scene;
        const v497 = v496.activeCamera;
        const v498 = this.cameraForLOD ?? v497;
        this._renderingManager.reset();
        const v499 = v496.getRenderId();
        const v500 = v496.getFrameId();
        for (let vLN055 = 0; vLN055 < p683; vLN055++) {
          const v501 = p682[vLN055];
          if (v501 && !v501.isBlocked) {
            if (this.customIsReadyFunction) {
              if (!this.customIsReadyFunction(v501, this.refreshRate, false)) {
                this.resetRefreshCounter();
                continue;
              }
            } else if (!v501.isReady(this.refreshRate === 0)) {
              this.resetRefreshCounter();
              continue;
            }
            let v502;
            let v503 = null;
            if (v498) {
              const v504 = v501._internalAbstractMeshDataInfo._currentLOD.get(v498);
              if (v504 && v504[1] === v500) {
                v503 = v504[0];
              } else {
                v503 = v496.customLODSelector ? v496.customLODSelector(v501, v498) : v501.getLOD(v498);
                if (v504) {
                  v504[0] = v503;
                  v504[1] = v500;
                } else {
                  v501._internalAbstractMeshDataInfo._currentLOD.set(v498, [v503, v500]);
                }
              }
            } else {
              v503 = v501;
            }
            if (!v503) {
              continue;
            }
            if (v503 !== v501 && v503.billboardMode !== 0) {
              v503.hf();
            }
            v503._preActivateForIntermediateRendering(v499);
            v502 = !!p684 && !!v497 && (v501.layerMask & v497.layerMask) === 0;
            if (v501.isEnabled() && v501.isVisible && v501.wf && !v502) {
              if (v503 !== v501) {
                v503._activate(v499, true);
              }
              if (v501._activate(v499, true) && v501.wf.length) {
                if (v501.isAnInstance) {
                  if (v501._internalAbstractMeshDataInfo._actAsRegularMesh) {
                    v503 = v501;
                  }
                } else {
                  v503._internalAbstractMeshDataInfo._onlyForInstancesIntermediate = false;
                }
                v503._internalAbstractMeshDataInfo._isActiveIntermediate = true;
                v496._prepareSkeleton(v503);
                for (let vLN056 = 0; vLN056 < v503.wf.length; vLN056++) {
                  const v505 = v503.wf[vLN056];
                  this._renderingManager.dispatch(v505, v503);
                }
              }
              v501._postActivate();
            }
          }
        }
        const v506 = this.particleSystemList || v496.BO;
        for (let vLN057 = 0; vLN057 < v506.length; vLN057++) {
          const v507 = v506[vLN057];
          const v508 = v507.Yy;
          if (v507.isStarted() && v508 && (!v508.position || v508.isEnabled())) {
            this._renderingManager.dispatchParticles(v507);
          }
        }
      }
      JO(p685, yC = null, IC = null, fC = null) {
        this._renderingManager.JO(p685, yC, IC, fC);
      }
      setRenderingAutoClearDepthStencil(p686, p687) {
        let v509 = !(arguments.length > 2) || arguments[2] === undefined || arguments[2];
        let v510 = !(arguments.length > 3) || arguments[3] === undefined || arguments[3];
        this._renderingManager.setRenderingAutoClearDepthStencil(p686, p687, v509, v510);
        this._renderingManager._useSceneAutoClearSetup = false;
      }
      clone() {
        const v511 = new C11(this.name, this._scene, this.options);
        if (this.renderList) {
          v511.renderList = this.renderList.slice(0);
        }
        return v511;
      }
      dispose() {
        const v512 = this.renderList ? this.renderList : this._scene.getActiveMeshes().data;
        const v513 = this.renderList ? this.renderList.length : this._scene.getActiveMeshes().length;
        for (let vLN058 = 0; vLN058 < v513; vLN058++) {
          const v514 = v512[vLN058];
          if (v514 && v514.getMaterialForRenderPass(this.renderPassId) !== undefined) {
            v514.setMaterialForRenderPass(this.renderPassId, undefined);
          }
        }
        this.onBeforeRenderObservable.clear();
        this.onAfterRenderObservable.clear();
        this.onBeforeRenderingManagerRenderObservable.clear();
        this.onAfterRenderingManagerRenderObservable.clear();
        this.onFastPathRenderObservable.clear();
        this._releaseRenderPassId();
        this.renderList = null;
      }
      _rebuild() {
        if (this.refreshRate === C11.REFRESHRATE_RENDER_ONCE) {
          this.refreshRate = C11.REFRESHRATE_RENDER_ONCE;
        }
      }
      freeRenderingGroups() {
        if (this._renderingManager) {
          this._renderingManager.freeRenderingGroups();
        }
      }
    }
    C11.REFRESHRATE_RENDER_ONCE = 0;
    C11.REFRESHRATE_RENDER_ONEVERYFRAME = 1;
    C11.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = 2;
    vP6666.Effect.prototype.setDepthStencilTexture = function (p688, p689) {
      this._engine.setDepthStencilTexture(this._samplers[p688], this._uniforms[p688], p689, p688);
    };
    class C12 extends vP6663.c {
      get renderListPredicate() {
        return this._objectRenderer.renderListPredicate;
      }
      set renderListPredicate(p690) {
        this._objectRenderer.renderListPredicate = p690;
      }
      get renderList() {
        return this._objectRenderer.renderList;
      }
      set renderList(p691) {
        this._objectRenderer.renderList = p691;
      }
      get particleSystemList() {
        return this._objectRenderer.particleSystemList;
      }
      set particleSystemList(p692) {
        this._objectRenderer.particleSystemList = p692;
      }
      get getCustomRenderList() {
        return this._objectRenderer.getCustomRenderList;
      }
      set getCustomRenderList(p693) {
        this._objectRenderer.getCustomRenderList = p693;
      }
      get renderParticles() {
        return this._objectRenderer.renderParticles;
      }
      set renderParticles(p694) {
        this._objectRenderer.renderParticles = p694;
      }
      get renderSprites() {
        return this._objectRenderer.renderSprites;
      }
      set renderSprites(p695) {
        this._objectRenderer.renderSprites = p695;
      }
      get forceLayerMaskCheck() {
        return this._objectRenderer.forceLayerMaskCheck;
      }
      set forceLayerMaskCheck(p696) {
        this._objectRenderer.forceLayerMaskCheck = p696;
      }
      get activeCamera() {
        return this._objectRenderer.activeCamera;
      }
      set activeCamera(p697) {
        this._objectRenderer.activeCamera = p697;
      }
      get cameraForLOD() {
        return this._objectRenderer.cameraForLOD;
      }
      set cameraForLOD(p698) {
        this._objectRenderer.cameraForLOD = p698;
      }
      get disableImageProcessing() {
        return this._objectRenderer.disableImageProcessing;
      }
      set disableImageProcessing(p699) {
        this._objectRenderer.disableImageProcessing = p699;
      }
      get customIsReadyFunction() {
        return this._objectRenderer.customIsReadyFunction;
      }
      set customIsReadyFunction(p700) {
        this._objectRenderer.customIsReadyFunction = p700;
      }
      get customRenderFunction() {
        return this._objectRenderer.customRenderFunction;
      }
      set customRenderFunction(p701) {
        this._objectRenderer.customRenderFunction = p701;
      }
      get postProcesses() {
        return this._postProcesses;
      }
      get _prePassEnabled() {
        return !!this._prePassRenderTarget && this._prePassRenderTarget.enabled;
      }
      set onAfterUnbind(p702) {
        if (this._onAfterUnbindObserver) {
          this.onAfterUnbindObservable.remove(this._onAfterUnbindObserver);
        }
        this._onAfterUnbindObserver = this.onAfterUnbindObservable.add(p702);
      }
      get onBeforeRenderObservable() {
        return this._objectRenderer.onBeforeRenderObservable;
      }
      set onBeforeRender(p703) {
        if (this._onBeforeRenderObserver) {
          this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver);
        }
        this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(p703);
      }
      get onAfterRenderObservable() {
        return this._objectRenderer.onAfterRenderObservable;
      }
      set onAfterRender(p704) {
        if (this._onAfterRenderObserver) {
          this.onAfterRenderObservable.remove(this._onAfterRenderObserver);
        }
        this._onAfterRenderObserver = this.onAfterRenderObservable.add(p704);
      }
      set onClear(p705) {
        if (this._onClearObserver) {
          this.onClearObservable.remove(this._onClearObserver);
        }
        this._onClearObserver = this.onClearObservable.add(p705);
      }
      get _waitingRenderList() {
        return this._objectRenderer._waitingRenderList;
      }
      set _waitingRenderList(p706) {
        this._objectRenderer._waitingRenderList = p706;
      }
      get renderPassId() {
        return this._objectRenderer.renderPassId;
      }
      get renderPassIds() {
        return this._objectRenderer.renderPassIds;
      }
      get currentRefreshId() {
        return this._objectRenderer.currentRefreshId;
      }
      setMaterialForRendering(p707, p708) {
        this._objectRenderer.setMaterialForRendering(p707, p708);
      }
      get isMulti() {
        var v515;
        return (v515 = this._renderTarget?.isMulti) !== null && v515 !== undefined && v515;
      }
      get renderTargetOptions() {
        return this._renderTargetOptions;
      }
      get renderTarget() {
        return this._renderTarget;
      }
      _onRatioRescale() {
        if (this._sizeRatio) {
          this.resize(this._initialSizeParameter);
        }
      }
      set boundingBoxSize(p709) {
        if (this._boundingBoxSize && this._boundingBoxSize.equals(p709)) {
          return;
        }
        this._boundingBoxSize = p709;
        const v516 = this.YL();
        if (v516) {
          v516.markAllMaterialsAsDirty(1);
        }
      }
      get boundingBoxSize() {
        return this._boundingBoxSize;
      }
      get depthStencilTexture() {
        return this._renderTarget?._depthStencilTexture ?? null;
      }
      constructor(p710, p711, p712) {
        let v517;
        let v518;
        let v519 = arguments.length > 3 && arguments[3] !== undefined && arguments[3];
        let v520 = !(arguments.length > 4) || arguments[4] === undefined || arguments[4];
        let v521 = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
        let v522 = arguments.length > 6 && arguments[6] !== undefined && arguments[6];
        let v523 = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : vP6663.c.TRILINEAR_SAMPLINGMODE;
        let v524 = !(arguments.length > 8) || arguments[8] === undefined || arguments[8];
        let v525 = arguments.length > 9 && arguments[9] !== undefined && arguments[9];
        let v526 = arguments.length > 10 && arguments[10] !== undefined && arguments[10];
        let v527 = arguments.length > 11 && arguments[11] !== undefined ? arguments[11] : 5;
        let v528 = arguments.length > 12 && arguments[12] !== undefined && arguments[12];
        let v529 = arguments.length > 13 ? arguments[13] : undefined;
        let v530 = arguments.length > 14 ? arguments[14] : undefined;
        let v531 = arguments.length > 15 && arguments[15] !== undefined && arguments[15];
        let v532 = arguments.length > 16 && arguments[16] !== undefined && arguments[16];
        let v533 = true;
        if (typeof v519 === "object") {
          var v534;
          var v535;
          const vV519 = v519;
          v519 = !!vV519.generateMipMaps;
          v520 = (v534 = vV519.doNotChangeAspectRatio) === null || v534 === undefined || v534;
          v521 = vV519.type ?? 0;
          v522 = !!vV519.isCube;
          v523 = vV519.samplingMode ?? vP6663.c.TRILINEAR_SAMPLINGMODE;
          v524 = (v535 = vV519.generateDepthBuffer) === null || v535 === undefined || v535;
          v525 = !!vV519.generateStencilBuffer;
          v526 = !!vV519.isMulti;
          v527 = vV519.format ?? 5;
          v528 = !!vV519.delayAllocation;
          v529 = vV519.samples;
          v530 = vV519.creationFlags;
          v531 = !!vV519.noColorAttachment;
          v532 = !!vV519.useSRGBBuffer;
          v517 = vV519.colorAttachment;
          v533 = vV519.gammaSpace ?? v533;
          v518 = vV519.existingObjectRenderer;
        }
        super(null, p712, !v519, undefined, v523, undefined, undefined, undefined, undefined, v527);
        this.ignoreCameraViewport = false;
        this.onBeforeBindObservable = new vP666.e();
        this.onAfterUnbindObservable = new vP666.e();
        this.onClearObservable = new vP666.e();
        this.onResizeObservable = new vP666.e();
        this._cleared = false;
        this.skipInitialClear = false;
        this._samples = 1;
        this._canRescale = true;
        this._renderTarget = null;
        this._dontDisposeObjectRenderer = false;
        this.boundingBoxPosition = vP6662.bL.Zero();
        this._disableEngineStages = false;
        this._dumpToolsLoading = false;
        if (!(p712 = this.YL())) {
          return;
        }
        const v536 = this.YL().getEngine();
        this._gammaSpace = v533;
        this._coordinatesMode = vP6663.c.PROJECTION_MODE;
        this.name = p710;
        this.isRenderTarget = true;
        this._initialSizeParameter = p711;
        this._dontDisposeObjectRenderer = !!v518;
        this._processSizeParameter(p711);
        this._objectRenderer = v518 ?? new C11(p710, p712, {
          numPasses: v522 ? 6 : this.getRenderLayers() || 1,
          doNotChangeAspectRatio: v520
        });
        this._onBeforeRenderingManagerRenderObserver = this._objectRenderer.onBeforeRenderingManagerRenderObservable.add(() => {
          if (!this._disableEngineStages) {
            for (const v537 of this._scene._beforeRenderTargetClearStage) {
              v537.action(this, this._currentFaceIndex, this._currentLayer);
            }
          }
          if (this.onClearObservable.hasObservers()) {
            this.onClearObservable.notifyObservers(v536);
          } else if (!this.skipInitialClear) {
            v536.clear(this.clearColor || this._scene.clearColor, true, true, true);
          }
          if (!this._doNotChangeAspectRatio) {
            this._scene.updateTransformMatrix(true);
          }
          if (!this._disableEngineStages) {
            for (const v538 of this._scene._beforeRenderTargetDrawStage) {
              v538.action(this, this._currentFaceIndex, this._currentLayer);
            }
          }
        });
        this._onAfterRenderingManagerRenderObserver = this._objectRenderer.onAfterRenderingManagerRenderObservable.add(() => {
          var v539;
          if (!this._disableEngineStages) {
            for (const v540 of this._scene._afterRenderTargetDrawStage) {
              v540.action(this, this._currentFaceIndex, this._currentLayer);
            }
          }
          const v541 = (v539 = this._texture?.generateMipMaps) !== null && v539 !== undefined && v539;
          if (this._texture) {
            this._texture.generateMipMaps = false;
          }
          if (this._postProcessManager) {
            this._postProcessManager._finalizeFrame(false, this._renderTarget ?? undefined, this._currentFaceIndex, this._postProcesses, this.ignoreCameraViewport);
          } else if (this._currentUseCameraPostProcess) {
            this._scene.postProcessManager._finalizeFrame(false, this._renderTarget ?? undefined, this._currentFaceIndex);
          }
          if (!this._disableEngineStages) {
            for (const v542 of this._scene._afterRenderTargetPostProcessStage) {
              v542.action(this, this._currentFaceIndex, this._currentLayer);
            }
          }
          if (this._texture) {
            this._texture.generateMipMaps = v541;
          }
          if (!this._doNotChangeAspectRatio) {
            this._scene.updateTransformMatrix(true);
          }
          if (this._currentDumpForDebug) {
            if (this._dumpTools) {
              this._dumpTools.DumpFramebuffer(this.getRenderWidth(), this.getRenderHeight(), v536);
            } else {
              vP6667.e.Error("dumpTools module is still being loaded. To speed up the process import dump tools directly in your project");
            }
          }
        });
        this._onFastPathRenderObserver = this._objectRenderer.onFastPathRenderObservable.add(() => {
          if (this.onClearObservable.hasObservers()) {
            this.onClearObservable.notifyObservers(v536);
          } else if (!this.skipInitialClear) {
            v536.clear(this.clearColor || this._scene.clearColor, true, true, true);
          }
        });
        this._resizeObserver = v536.onResizeObservable.add(() => {});
        this._generateMipMaps = !!v519;
        this._doNotChangeAspectRatio = v520;
        if (!v526) {
          this._renderTargetOptions = {
            generateMipMaps: v519,
            type: v521,
            format: this._format ?? undefined,
            samplingMode: this.samplingMode,
            generateDepthBuffer: v524,
            generateStencilBuffer: v525,
            samples: v529,
            creationFlags: v530,
            noColorAttachment: v531,
            useSRGBBuffer: v532,
            colorAttachment: v517,
            label: this.name
          };
          if (this.samplingMode === vP6663.c.NEAREST_SAMPLINGMODE) {
            this.wrapU = vP6663.c.CLAMP_ADDRESSMODE;
            this.wrapV = vP6663.c.CLAMP_ADDRESSMODE;
          }
          if (!v528) {
            if (v522) {
              this._renderTarget = p712.getEngine().createRenderTargetCubeTexture(this.getRenderSize(), this._renderTargetOptions);
              this.coordinatesMode = vP6663.c.INVCUBIC_MODE;
              this._textureMatrix = vP6662.Matrix.Identity();
            } else {
              this._renderTarget = p712.getEngine().createRenderTargetTexture(this._size, this._renderTargetOptions);
            }
            this._texture = this._renderTarget.texture;
            if (v529 !== undefined) {
              this.samples = v529;
            }
          }
        }
      }
      createDepthStencilTexture() {
        var v543;
        let v544 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        let v545 = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
        let v546 = arguments.length > 2 && arguments[2] !== undefined && arguments[2];
        let v547 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
        let v548 = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 14;
        let v549 = arguments.length > 5 ? arguments[5] : undefined;
        if ((v543 = this._renderTarget) !== null && v543 !== undefined) {
          v543.createDepthStencilTexture(v544, v545, v546, v547, v548, v549);
        }
      }
      _processSizeParameter(p713) {
        if (p713.ratio) {
          this._sizeRatio = p713.ratio;
          const v550 = this._getEngine();
          this._size = {
            width: this._bestReflectionRenderTargetDimension(v550.getRenderWidth(), this._sizeRatio),
            height: this._bestReflectionRenderTargetDimension(v550.getRenderHeight(), this._sizeRatio)
          };
        } else {
          this._size = p713;
        }
      }
      get samples() {
        return this._renderTarget?.samples ?? this._samples;
      }
      set samples(p714) {
        if (this._renderTarget) {
          this._samples = this._renderTarget.setSamples(p714);
        }
      }
      addPostProcess(p715) {
        if (!this._postProcessManager) {
          const v551 = this.YL();
          if (!v551) {
            return;
          }
          this._postProcessManager = new vP6664.c(v551);
          this._postProcesses = new Array();
        }
        this._postProcesses.push(p715);
        this._postProcesses[0].Kf = false;
      }
      clearPostProcesses(CC = false) {
        if (this._postProcesses) {
          if (CC) {
            for (const v552 of this._postProcesses) {
              v552.dispose();
            }
          }
          this._postProcesses = [];
        }
      }
      removePostProcess(p716) {
        if (!this._postProcesses) {
          return;
        }
        const v553 = this._postProcesses.indexOf(p716);
        if (v553 !== -1) {
          this._postProcesses.splice(v553, 1);
          if (this._postProcesses.length > 0) {
            this._postProcesses[0].Kf = false;
          }
        }
      }
      resetRefreshCounter() {
        this._objectRenderer.resetRefreshCounter();
      }
      get refreshRate() {
        return this._objectRenderer.refreshRate;
      }
      set refreshRate(p717) {
        this._objectRenderer.refreshRate = p717;
      }
      _shouldRender() {
        return this._objectRenderer.shouldRender();
      }
      getRenderSize() {
        return this.getRenderWidth();
      }
      getRenderWidth() {
        if (this._size.width) {
          return this._size.width;
        } else {
          return this._size;
        }
      }
      getRenderHeight() {
        if (this._size.width) {
          return this._size.height;
        } else {
          return this._size;
        }
      }
      getRenderLayers() {
        const v554 = this._size.layers;
        if (v554) {
          return v554;
        }
        const v555 = this._size.depth;
        return v555 || 0;
      }
      disableRescaling() {
        this._canRescale = false;
      }
      get canRescale() {
        return this._canRescale;
      }
      scale(p718) {
        const v556 = Math.max(1, this.getRenderSize() * p718);
        this.resize(v556);
      }
      getReflectionTextureMatrix() {
        if (this.isCube) {
          return this._textureMatrix;
        } else {
          return super.getReflectionTextureMatrix();
        }
      }
      resize(p719) {
        var v557;
        const v558 = this.isCube;
        if ((v557 = this._renderTarget) !== null && v557 !== undefined) {
          v557.dispose();
        }
        this._renderTarget = null;
        const v559 = this.YL();
        if (v559) {
          this._processSizeParameter(p719);
          this._renderTarget = v558 ? v559.getEngine().createRenderTargetCubeTexture(this.getRenderSize(), this._renderTargetOptions) : v559.getEngine().createRenderTargetTexture(this._size, this._renderTargetOptions);
          this._texture = this._renderTarget.texture;
          if (this._renderTargetOptions.samples !== undefined) {
            this.samples = this._renderTargetOptions.samples;
          }
          if (this.onResizeObservable.hasObservers()) {
            this.onResizeObservable.notifyObservers(this);
          }
        }
      }
      render(CC = false, yC = false) {
        this._render(CC, yC);
      }
      isReadyForRendering() {
        if (!this._dumpToolsLoading) {
          this._dumpToolsLoading = true;
          p666.e(20).then(p666.bind(p666, 17192)).then(p720 => this._dumpTools = p720);
        }
        this._objectRenderer.prepareRenderList();
        this.onBeforeBindObservable.notifyObservers(this);
        this._objectRenderer.initRender(this.getRenderWidth(), this.getRenderHeight());
        const v560 = this._objectRenderer._checkReadiness();
        this.onAfterUnbindObservable.notifyObservers(this);
        this._objectRenderer.finishRender();
        return v560;
      }
      _render(CC = false, yC = false) {
        const v561 = this.YL();
        if (v561) {
          if (this.useCameraPostProcesses !== undefined) {
            p664 = this.useCameraPostProcesses;
          }
          this._objectRenderer.prepareRenderList();
          this.onBeforeBindObservable.notifyObservers(this);
          this._objectRenderer.initRender(this.getRenderWidth(), this.getRenderHeight());
          if (!this.is2DArray && !this.is3D || this.isMulti) {
            if (this.isCube && !this.isMulti) {
              for (let vLN059 = 0; vLN059 < 6; vLN059++) {
                this._renderToTarget(vLN059, CC, yC);
                v561.incrementRenderId();
                v561.resetCachedMaterial();
              }
            } else {
              this._renderToTarget(0, CC, yC);
            }
          } else {
            for (let vLN060 = 0; vLN060 < this.getRenderLayers(); vLN060++) {
              this._renderToTarget(0, CC, yC, vLN060);
              v561.incrementRenderId();
              v561.resetCachedMaterial();
            }
          }
          this.onAfterUnbindObservable.notifyObservers(this);
          this._objectRenderer.finishRender();
        }
      }
      _bestReflectionRenderTargetDimension(p721, p722) {
        const v562 = p721 * p722;
        const v563 = (0, vP6665.o)(v562 + 16384 / (128 + v562));
        return Math.min((0, vP6665.b)(p721), v563);
      }
      _bindFrameBuffer(CC = 0, yC = 0) {
        const v564 = this.YL();
        if (!v564) {
          return;
        }
        const v565 = v564.getEngine();
        if (this._renderTarget) {
          v565.bindFramebuffer(this._renderTarget, this.isCube ? p664 : undefined, undefined, undefined, this.ignoreCameraViewport, 0, p665);
        }
      }
      _unbindFrameBuffer(p723, p724) {
        if (this._renderTarget) {
          p723.unBindFramebuffer(this._renderTarget, this.isCube, () => {
            this.onAfterRenderObservable.notifyObservers(p724);
          });
        }
      }
      _prepareFrame(p725, p726, p727, p728) {
        if (this._postProcessManager) {
          if (!this._prePassEnabled && !this._postProcessManager._prepareFrame(this._texture, this._postProcesses)) {
            this._bindFrameBuffer(p726, p727);
          }
        } else if (!p728 || !p725.postProcessManager._prepareFrame(this._texture)) {
          this._bindFrameBuffer(p726, p727);
        }
      }
      _renderToTarget(p729, p730, p731) {
        var v566;
        var v567;
        let v568 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
        const v569 = this.YL();
        if (!v569) {
          return;
        }
        const v570 = v569.getEngine();
        this._currentFaceIndex = p729;
        this._currentLayer = v568;
        this._currentUseCameraPostProcess = p730;
        this._currentDumpForDebug = p731;
        this._prepareFrame(v569, p729, v568, p730);
        if ((v566 = v570._debugPushGroup) !== null && v566 !== undefined) {
          v566.call(v570, `render to face #${p729} layer #${v568}`, 2);
        }
        this._objectRenderer.render(p729 + v568, true);
        if ((v567 = v570._debugPopGroup) !== null && v567 !== undefined) {
          v567.call(v570, 2);
        }
        this._unbindFrameBuffer(v570, p729);
        if (this._texture && this.isCube && p729 === 5) {
          v570.generateMipMapsForCubemap(this._texture, true);
        }
      }
      JO(p732, yC = null, IC = null, fC = null) {
        this._objectRenderer.JO(p732, yC, IC, fC);
      }
      setRenderingAutoClearDepthStencil(p733, p734) {
        this._objectRenderer.setRenderingAutoClearDepthStencil(p733, p734);
      }
      clone() {
        const v571 = this.getSize();
        const v572 = new C12(this.name, v571, this.YL(), this._renderTargetOptions.generateMipMaps, this._doNotChangeAspectRatio, this._renderTargetOptions.type, this.isCube, this._renderTargetOptions.samplingMode, this._renderTargetOptions.generateDepthBuffer, this._renderTargetOptions.generateStencilBuffer, undefined, this._renderTargetOptions.format, undefined, this._renderTargetOptions.samples);
        v572.Uf = this.Uf;
        v572.level = this.level;
        v572.coordinatesMode = this.coordinatesMode;
        if (this.renderList) {
          v572.renderList = this.renderList.slice(0);
        }
        return v572;
      }
      serialize() {
        if (!this.name) {
          return null;
        }
        const v573 = super.serialize();
        v573.renderTargetSize = this.getRenderSize();
        v573.renderList = [];
        if (this.renderList) {
          for (let vLN061 = 0; vLN061 < this.renderList.length; vLN061++) {
            v573.renderList.push(this.renderList[vLN061].id);
          }
        }
        return v573;
      }
      disposeFramebufferObjects() {
        var v574;
        if ((v574 = this._renderTarget) !== null && v574 !== undefined) {
          v574.dispose(true);
        }
      }
      releaseInternalTexture() {
        var v575;
        if ((v575 = this._renderTarget) !== null && v575 !== undefined) {
          v575.releaseTextures();
        }
        this._texture = null;
      }
      dispose() {
        var v576;
        this.onResizeObservable.clear();
        this.onClearObservable.clear();
        this.onAfterUnbindObservable.clear();
        this.onBeforeBindObservable.clear();
        if (this._postProcessManager) {
          this._postProcessManager.dispose();
          this._postProcessManager = null;
        }
        if (this._prePassRenderTarget) {
          this._prePassRenderTarget.dispose();
        }
        this._objectRenderer.onBeforeRenderingManagerRenderObservable.remove(this._onBeforeRenderingManagerRenderObserver);
        this._objectRenderer.onAfterRenderingManagerRenderObservable.remove(this._onAfterRenderingManagerRenderObserver);
        this._objectRenderer.onFastPathRenderObservable.remove(this._onFastPathRenderObserver);
        if (!this._dontDisposeObjectRenderer) {
          this._objectRenderer.dispose();
        }
        this.clearPostProcesses(true);
        if (this._resizeObserver) {
          this.YL().getEngine().onResizeObservable.remove(this._resizeObserver);
          this._resizeObserver = null;
        }
        const v577 = this.YL();
        if (!v577) {
          return;
        }
        let v578 = v577.customRenderTargets.indexOf(this);
        if (v578 >= 0) {
          v577.customRenderTargets.splice(v578, 1);
        }
        for (const v579 of v577.cameras) {
          v578 = v579.customRenderTargets.indexOf(this);
          if (v578 >= 0) {
            v579.customRenderTargets.splice(v578, 1);
          }
        }
        if ((v576 = this._renderTarget) !== null && v576 !== undefined) {
          v576.dispose();
        }
        this._renderTarget = null;
        this._texture = null;
        super.dispose();
      }
      _rebuild() {
        this._objectRenderer._rebuild();
        if (this._postProcessManager) {
          this._postProcessManager._rebuild();
        }
      }
      freeRenderingGroups() {
        this._objectRenderer.freeRenderingGroups();
      }
      getViewCount() {
        return 1;
      }
    }
    C12.REFRESHRATE_RENDER_ONCE = C11.REFRESHRATE_RENDER_ONCE;
    C12.REFRESHRATE_RENDER_ONEVERYFRAME = C11.REFRESHRATE_RENDER_ONEVERYFRAME;
    C12.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = C11.REFRESHRATE_RENDER_ONEVERYTWOFRAMES;
    vP6663.c._CreateRenderTargetTexture = (p735, p736, p737, p738, p739) => new C12(p735, p736, p737, p738);
  },
  17125: (p740, p741, p742) => {
    function f5(p743) {
      return p743 === 13 || p743 === 14 || p743 === 15 || p743 === 16 || p743 === 17 || p743 === 18 || p743 === 19;
    }
    function f6(p744) {
      return p744 === 13 || p744 === 17 || p744 === 18 || p744 === 19;
    }
    p742.d(p741, {
      e: () => f6,
      g: () => f5
    });
  },
  17107: (p745, p746, p747) => {
    function f7(p748) {
      return p748.getPipelineContext === undefined;
    }
    p747.d(p746, {
      e: () => f7
    });
  },
  17077: (p749, p750, p751) => {
    p751.d(p750, {
      c: () => C13,
      f: () => C14
    });
    var vP751 = p751(18);
    var vP7512 = p751(17031);
    var vP7513 = p751(17081);
    var vP7514 = p751(16796);
    var vP7515 = p751(16878);
    var vP7516 = p751(17085);
    p751(17089);
    const vO6 = {
      positions: [1, 1, -1, 1, -1, -1, 1, -1],
      indices: [0, 1, 2, 0, 2, 3]
    };
    class C13 {
      constructor(p752) {
        let v580 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : vO6;
        this._fullscreenViewport = new vP7513.b(0, 0, 1, 1);
        const v581 = v580.positions ?? vO6.positions;
        const v582 = v580.indices ?? vO6.indices;
        this.Jy = p752;
        this._vertexBuffers = {
          [vP7512.e.PositionKind]: new vP7512.e(p752, v581, vP7512.e.PositionKind, false, false, 2)
        };
        this._indexBuffer = p752.createIndexBuffer(v582);
        this._indexBufferLength = v582.length;
        this._onContextRestoredObserver = p752.onContextRestoredObservable.add(() => {
          this._indexBuffer = p752.createIndexBuffer(v582);
          for (const v583 in this._vertexBuffers) {
            this._vertexBuffers[v583]._rebuild();
          }
        });
      }
      setViewport(CC = this._fullscreenViewport) {
        this.Jy.setViewport(CC);
      }
      bindBuffers(p753) {
        this.Jy.bindBuffers(this._vertexBuffers, this._indexBuffer, p753);
      }
      applyEffectWrapper(p754) {
        this.Jy.setState(true);
        this.Jy.depthCullingState.depthTest = false;
        this.Jy.stencilState.stencilTest = false;
        this.Jy.enableEffect(p754.drawWrapper);
        this.bindBuffers(p754.effect);
        p754.onApplyObservable.notifyObservers({});
      }
      saveStates() {
        this._savedStateDepthTest = this.Jy.depthCullingState.depthTest;
        this._savedStateStencilTest = this.Jy.stencilState.stencilTest;
      }
      restoreStates() {
        this.Jy.depthCullingState.depthTest = this._savedStateDepthTest;
        this.Jy.stencilState.stencilTest = this._savedStateStencilTest;
      }
      draw() {
        this.Jy.drawElementsType(0, 0, this._indexBufferLength);
      }
      _isRenderTargetTexture(p755) {
        return p755.renderTarget !== undefined;
      }
      render(p756, yC = null) {
        if (!p756.effect.isReady()) {
          return;
        }
        this.saveStates();
        this.setViewport();
        const v584 = yC === null ? null : this._isRenderTargetTexture(yC) ? yC.renderTarget : yC;
        if (v584) {
          this.Jy.bindFramebuffer(v584);
        }
        this.applyEffectWrapper(p756);
        this.draw();
        if (v584) {
          this.Jy.unBindFramebuffer(v584);
        }
        this.restoreStates();
      }
      dispose() {
        const v585 = this._vertexBuffers[vP7512.e.PositionKind];
        if (v585) {
          v585.dispose();
          delete this._vertexBuffers[vP7512.e.PositionKind];
        }
        if (this._indexBuffer) {
          this.Jy._releaseBuffer(this._indexBuffer);
        }
        if (this._onContextRestoredObserver) {
          this.Jy.onContextRestoredObservable.remove(this._onContextRestoredObserver);
          this._onContextRestoredObserver = null;
        }
      }
    }
    class C14 {
      static RegisterShaderCodeProcessing(p757, p758) {
        if (p758) {
          C14._CustomShaderCodeProcessing[p757 ?? ""] = p758;
        } else {
          delete C14._CustomShaderCodeProcessing[p757 ?? ""];
        }
      }
      static _GetShaderCodeProcessing(p759) {
        return C14._CustomShaderCodeProcessing[p759] ?? C14._CustomShaderCodeProcessing[""];
      }
      get name() {
        return this.options.name;
      }
      set name(p760) {
        this.options.name = p760;
      }
      isReady() {
        var v586;
        var v587;
        return (v586 = (v587 = this._drawWrapper.effect) === null || v587 === undefined ? undefined : v587.isReady()) !== null && v586 !== undefined && v586;
      }
      get drawWrapper() {
        return this._drawWrapper;
      }
      get effect() {
        return this._drawWrapper.effect;
      }
      set effect(p761) {
        this._drawWrapper.effect = p761;
      }
      constructor(p762) {
        var v588;
        this.alphaMode = 0;
        this.onEffectCreatedObservable = new vP7514.e(undefined, true);
        this.onApplyObservable = new vP7514.e();
        this._shadersLoaded = false;
        this._webGPUReady = false;
        this._importPromises = [];
        this.options = (0, vP751.d)((0, vP751.d)({}, p762), {}, {
          name: p762.name || "effectWrapper",
          Jy: p762.Jy,
          uniforms: p762.uniforms || p762.uniformNames || [],
          uniformNames: undefined,
          samplers: p762.samplers || p762.samplerNames || [],
          samplerNames: undefined,
          attributeNames: p762.attributeNames || ["position"],
          uniformBuffers: p762.uniformBuffers || [],
          defines: p762.defines || "",
          useShaderStore: p762.useShaderStore || false,
          vertexUrl: p762.vertexUrl || p762.vertexShader || "postprocess",
          vertexShader: undefined,
          fragmentShader: p762.fragmentShader || "pass",
          indexParameters: p762.indexParameters,
          blockCompilation: p762.blockCompilation || false,
          shaderLanguage: p762.shaderLanguage || 0,
          onCompiled: p762.onCompiled || undefined,
          extraInitializations: p762.extraInitializations || undefined,
          extraInitializationsAsync: p762.extraInitializationsAsync || undefined,
          useAsPostProcess: (v588 = p762.useAsPostProcess) !== null && v588 !== undefined && v588
        });
        this.options.uniformNames = this.options.uniforms;
        this.options.samplerNames = this.options.samplers;
        this.options.vertexShader = this.options.vertexUrl;
        if (this.options.useAsPostProcess) {
          if (this.options.samplers.indexOf("textureSampler") === -1) {
            this.options.samplers.push("textureSampler");
          }
          if (this.options.uniforms.indexOf("scale") === -1) {
            this.options.uniforms.push("scale");
          }
        }
        if (p762.vertexUrl || p762.vertexShader) {
          this._shaderPath = {
            vertexSource: this.options.vertexShader
          };
        } else {
          if (!this.options.useAsPostProcess) {
            this.options.uniforms.push("scale");
            this.onApplyObservable.add(() => {
              this.effect.setFloat2("scale", 1, 1);
            });
          }
          this._shaderPath = {
            vertex: this.options.vertexShader
          };
        }
        this._shaderPath.fragmentSource = this.options.fragmentShader;
        this._shaderPath.spectorName = this.options.name;
        if (this.options.useShaderStore) {
          this._shaderPath.fragment = this._shaderPath.fragmentSource;
          this._shaderPath.vertex ||= this._shaderPath.vertexSource;
          delete this._shaderPath.fragmentSource;
          delete this._shaderPath.vertexSource;
        }
        this.onApplyObservable.add(() => {
          this.bind();
        });
        if (!this.options.useShaderStore) {
          this._onContextRestoredObserver = this.options.Jy.onContextRestoredObservable.add(() => {
            this.effect._pipelineContext = null;
            this.effect._prepareEffect();
          });
        }
        this._drawWrapper = new vP7516.e(this.options.Jy);
        this._webGPUReady = this.options.shaderLanguage === 1;
        const v589 = Array.isArray(this.options.defines) ? this.options.defines.join("\n") : this.options.defines;
        this._postConstructor(this.options.blockCompilation, v589, this.options.extraInitializations);
      }
      _gatherImports(CC = false, yC) {
        if (this.options.useAsPostProcess) {
          if (p749 && this._webGPUReady) {
            p750.push(Promise.all([p751.e(54).then(p751.bind(p751, 19327))]));
          } else {
            p750.push(Promise.all([Promise.resolve().then(p751.bind(p751, 17089))]));
          }
        }
      }
      _postConstructor(p763, yC = null, IC, fC) {
        this._importPromises.length = 0;
        if (fC) {
          this._importPromises.push(...vP751);
        }
        const v590 = this.options.Jy.isWebGPU && !C14.ForceGLSL;
        this._gatherImports(v590, this._importPromises);
        if (IC !== undefined) {
          p751(v590, this._importPromises);
        }
        if (v590 && this._webGPUReady) {
          this.options.shaderLanguage = 1;
        }
        if (!p763) {
          this.updateEffect(p750);
        }
      }
      updateEffect(CC = null, yC = null, IC = null, fC, ky, gC, AC, XC) {
        const v591 = C14._GetShaderCodeProcessing(this.name);
        if (v591 !== null && v591 !== undefined && v591.defineCustomBindings) {
          var v592;
          var v593;
          const v594 = ((v592 = yC) === null || v592 === undefined ? undefined : v592.slice()) ?? [];
          v594.push(...this.options.uniforms);
          const v595 = ((v593 = IC) === null || v593 === undefined ? undefined : v593.slice()) ?? [];
          v595.push(...this.options.samplers);
          CC = v591.defineCustomBindings(this.name, CC, v594, v595);
          yC = v594;
          IC = v595;
        }
        this.options.defines = CC || "";
        const v596 = this._shadersLoaded || this._importPromises.length === 0 ? undefined : async () => {
          await Promise.all(this._importPromises);
          this._shadersLoaded = true;
        };
        let v597;
        v597 = this.options.extraInitializationsAsync ? async () => {
          if (v596 !== null && v596 !== undefined) {
            v596();
          }
          await this.options.extraInitializationsAsync();
        } : v596;
        if (this.options.useShaderStore) {
          this._drawWrapper.effect = this.options.Jy.createEffect({
            vertex: vP7514 ?? this._shaderPath.vertex,
            fragment: vP7516 ?? this._shaderPath.fragment
          }, {
            attributes: this.options.attributeNames,
            uniformsNames: p750 || this.options.uniforms,
            uniformBuffersNames: this.options.uniformBuffers,
            samplers: p751 || this.options.samplers,
            defines: p749 !== null ? p749 : "",
            fallbacks: null,
            onCompiled: vP7512 ?? this.options.onCompiled,
            onError: vP7513 ?? null,
            indexParameters: vP751 || this.options.indexParameters,
            processCodeAfterIncludes: v591 !== null && v591 !== undefined && v591.processCodeAfterIncludes ? (p764, p765) => v591.processCodeAfterIncludes(this.name, p764, p765) : null,
            processFinalCode: v591 !== null && v591 !== undefined && v591.processFinalCode ? (p766, p767) => v591.processFinalCode(this.name, p766, p767) : null,
            shaderLanguage: this.options.shaderLanguage,
            extraInitializationsAsync: v597
          }, this.options.Jy);
        } else {
          this._drawWrapper.effect = new vP7515.Effect(this._shaderPath, this.options.attributeNames, p750 || this.options.uniforms, p751 || this.options.samplerNames, this.options.Jy, p749, undefined, vP7512 || this.options.onCompiled, undefined, undefined, undefined, this.options.shaderLanguage, v597);
        }
        this.onEffectCreatedObservable.notifyObservers(this._drawWrapper.effect);
      }
      bind() {
        var v598;
        var v599;
        let v600 = arguments.length > 0 && arguments[0] !== undefined && arguments[0];
        if (this.options.useAsPostProcess && !v600) {
          this.options.Jy.setAlphaMode(this.alphaMode);
          this.drawWrapper.effect.setFloat2("scale", 1, 1);
        }
        if ((v598 = C14._GetShaderCodeProcessing(this.name)) !== null && v598 !== undefined && (v599 = v598.bindCustomBindings) !== null && v599 !== undefined) {
          v599.call(v598, this.name, this._drawWrapper.effect);
        }
      }
      dispose() {
        if (this._onContextRestoredObserver) {
          this.effect.getEngine().onContextRestoredObservable.remove(this._onContextRestoredObserver);
          this._onContextRestoredObserver = null;
        }
        this.onEffectCreatedObservable.clear();
        this._drawWrapper.dispose(true);
      }
    }
    C14.ForceGLSL = false;
    C14._CustomShaderCodeProcessing = {};
  },
  17165: (p768, p769, p770) => {
    p770.d(p769, {
      e: () => C15
    });
    var v601;
    var v602;
    var vP770 = p770(16973);
    (function (p771) {
      p771[p771.LOCAL = 0] = "LOCAL";
      p771[p771.WORLD = 1] = "WORLD";
      p771[p771.BONE = 2] = "BONE";
    })(v601 ||= {});
    class C15 {}
    C15.X = new vP770.bL(1, 0, 0);
    C15.Y = new vP770.bL(0, 1, 0);
    C15.Z = new vP770.bL(0, 0, 1);
    (function (p772) {
      p772[p772.X = 0] = "X";
      p772[p772.Y = 1] = "Y";
      p772[p772.Z = 2] = "Z";
    })(v602 ||= {});
  },
  17163: (p773, p774, p775) => {
    p775.d(p774, {
      c: () => vP775.Matrix,
      d: () => vP775.Quaternion,
      f: () => vP775.TmpVectors,
      g: () => vP775.bL
    });
    p775(17165);
    p775(17009);
    p775(16977);
    p775(17171);
    p775(17178);
    p775(17013);
    p775(16994);
    var vP775 = p775(16973);
    p775(17081);
  },
  17178: (p776, p777, p778) => {
    p778.d(p777, {
      b: () => C16,
      f: () => C21,
      i: () => C19,
      l: () => C20
    });
    var v603;
    var vP778 = p778(16988);
    var vP7782 = p778(16973);
    var vP7783 = p778(16977);
    (function (p779) {
      p779[p779.CW = 0] = "CW";
      p779[p779.CCW = 1] = "CCW";
    })(v603 ||= {});
    class C16 {
      static Interpolate(p780, p781, p782, p783, p784) {
        if (p780 === 0) {
          return 0;
        }
        const v604 = 1 - p783 * 3 + p781 * 3;
        const v605 = p783 * 3 - p781 * 6;
        const v606 = p781 * 3;
        let vP780 = p780;
        for (let vLN062 = 0; vLN062 < 5; vLN062++) {
          const v607 = vP780 * vP780;
          vP780 -= (v604 * (v607 * vP780) + v605 * v607 + v606 * vP780 - p780) * (1 / (v604 * 3 * v607 + v605 * 2 * vP780 + v606));
          vP780 = Math.min(1, Math.max(0, vP780));
        }
        return Math.pow(1 - vP780, 2) * 3 * vP780 * p782 + (1 - vP780) * 3 * Math.pow(vP780, 2) * p784 + Math.pow(vP780, 3);
      }
    }
    class C17 {
      constructor(p785) {
        this._radians = p785;
        if (this._radians < 0) {
          this._radians += Math.PI * 2;
        }
      }
      degrees() {
        return this._radians * 180 / Math.PI;
      }
      radians() {
        return this._radians;
      }
      static BetweenTwoPoints(p786, p787) {
        const v608 = p787.Wy(p786);
        const v609 = Math.atan2(v608.y, v608.x);
        return new C17(v609);
      }
      static BetweenTwoVectors(p788, p789) {
        let v610 = p788.lengthSquared() * p789.lengthSquared();
        if (v610 === 0) {
          return new C17(Math.PI / 2);
        }
        v610 = Math.sqrt(v610);
        let v611 = p788.dot(p789) / v610;
        v611 = (0, vP778.Clamp)(v611, -1, 1);
        const v612 = Math.acos(v611);
        return new C17(v612);
      }
      static FromRadians(p790) {
        return new C17(p790);
      }
      static FromDegrees(p791) {
        return new C17(p791 * Math.PI / 180);
      }
    }
    class C18 {
      constructor(p792, p793, p794) {
        this.startPoint = p792;
        this.midPoint = p793;
        this.endPoint = p794;
        const v613 = Math.pow(p793.x, 2) + Math.pow(p793.y, 2);
        const v614 = (Math.pow(p792.x, 2) + Math.pow(p792.y, 2) - v613) / 2;
        const v615 = (v613 - Math.pow(p794.x, 2) - Math.pow(p794.y, 2)) / 2;
        const v616 = (p792.x - p793.x) * (p793.y - p794.y) - (p793.x - p794.x) * (p792.y - p793.y);
        this.centerPoint = new vP7782.Vector2((v614 * (p793.y - p794.y) - v615 * (p792.y - p793.y)) / v616, ((p792.x - p793.x) * v615 - (p793.x - p794.x) * v614) / v616);
        this.radius = this.centerPoint.Wy(this.startPoint).length();
        this.startAngle = C17.BetweenTwoPoints(this.centerPoint, this.startPoint);
        const v617 = this.startAngle.degrees();
        let v618 = C17.BetweenTwoPoints(this.centerPoint, this.midPoint).degrees();
        let v619 = C17.BetweenTwoPoints(this.centerPoint, this.endPoint).degrees();
        if (v618 - v617 > 180) {
          v618 -= 360;
        }
        if (v618 - v617 < -180) {
          v618 += 360;
        }
        if (v619 - v618 > 180) {
          v619 -= 360;
        }
        if (v619 - v618 < -180) {
          v619 += 360;
        }
        this.orientation = v618 - v617 < 0 ? 0 : 1;
        this.angle = C17.FromDegrees(this.orientation === 0 ? v617 - v619 : v619 - v617);
      }
    }
    class C19 {
      constructor(p795, p796) {
        this._points = new Array();
        this._length = 0;
        this.closed = false;
        this._points.push(new vP7782.Vector2(p795, p796));
      }
      addLineTo(p797, p798) {
        if (this.closed) {
          return this;
        }
        const v620 = new vP7782.Vector2(p797, p798);
        const v621 = this._points[this._points.length - 1];
        this._points.push(v620);
        this._length += v620.Wy(v621).length();
        return this;
      }
      addArcTo(p799, p800, p801, p802, ky = 36) {
        if (this.closed) {
          return this;
        }
        const v622 = this._points[this._points.length - 1];
        const v623 = new vP7782.Vector2(p799, p800);
        const v624 = new vP7782.Vector2(p801, p802);
        const v625 = new C18(v622, v623, v624);
        let v626 = v625.angle.radians() / ky;
        if (v625.orientation === 0) {
          v626 *= -1;
        }
        let v627 = v625.startAngle.radians() + v626;
        for (let vLN063 = 0; vLN063 < ky; vLN063++) {
          const v628 = Math.cos(v627) * v625.radius + v625.centerPoint.x;
          const v629 = Math.sin(v627) * v625.radius + v625.centerPoint.y;
          this.addLineTo(v628, v629);
          v627 += v626;
        }
        return this;
      }
      addQuadraticCurveTo(p803, p804, p805, p806, ky = 36) {
        if (this.closed) {
          return this;
        }
        const vF3 = (p807, p808, p809, p810) => (1 - p807) * (1 - p807) * p808 + p807 * 2 * (1 - p807) * p809 + p807 * p807 * p810;
        const v630 = this._points[this._points.length - 1];
        for (let vLN064 = 0; vLN064 <= ky; vLN064++) {
          const v631 = vLN064 / ky;
          const vVF3 = vF3(v631, v630.x, p803, p805);
          const vVF32 = vF3(v631, v630.y, p804, p806);
          this.addLineTo(vVF3, vVF32);
        }
        return this;
      }
      addBezierCurveTo(p811, p812, p813, p814, p815, p816, AC = 36) {
        if (this.closed) {
          return this;
        }
        const vF4 = (p817, p818, p819, p820, p821) => (1 - p817) * (1 - p817) * (1 - p817) * p818 + p817 * 3 * (1 - p817) * (1 - p817) * p819 + p817 * 3 * p817 * (1 - p817) * p820 + p817 * p817 * p817 * p821;
        const v632 = this._points[this._points.length - 1];
        for (let vLN065 = 0; vLN065 <= AC; vLN065++) {
          const v633 = vLN065 / AC;
          const vVF4 = vF4(v633, v632.x, p811, p813, p815);
          const vVF42 = vF4(v633, v632.y, p812, p814, p816);
          this.addLineTo(vVF4, vVF42);
        }
        return this;
      }
      isPointInside(p822) {
        let v634 = false;
        const v635 = this._points.length;
        for (let v636 = v635 - 1, vLN066 = 0; vLN066 < v635; v636 = vLN066++) {
          let v637 = this._points[v636];
          let v638 = this._points[vLN066];
          let v639 = v638.x - v637.x;
          let v640 = v638.y - v637.y;
          if (Math.abs(v640) > Number.EPSILON) {
            if (v640 < 0) {
              v637 = this._points[vLN066];
              v639 = -v639;
              v638 = this._points[v636];
              v640 = -v640;
            }
            if (p822.y < v637.y || p822.y > v638.y) {
              continue;
            }
            if (p822.y === v637.y && p822.x === v637.x) {
              return true;
            }
            {
              const v641 = v640 * (p822.x - v637.x) - v639 * (p822.y - v637.y);
              if (v641 === 0) {
                return true;
              }
              if (v641 < 0) {
                continue;
              }
              v634 = !v634;
            }
          } else {
            if (p822.y !== v637.y) {
              continue;
            }
            if (v638.x <= p822.x && p822.x <= v637.x || v637.x <= p822.x && p822.x <= v638.x) {
              return true;
            }
          }
        }
        return v634;
      }
      close() {
        this.closed = true;
        return this;
      }
      length() {
        let v642 = this._length;
        if (this.closed) {
          const v643 = this._points[this._points.length - 1];
          v642 += this._points[0].Wy(v643).length();
        }
        return v642;
      }
      area() {
        const v644 = this._points.length;
        let vLN067 = 0;
        for (let v645 = v644 - 1, vLN068 = 0; vLN068 < v644; v645 = vLN068++) {
          vLN067 += this._points[v645].x * this._points[vLN068].y - this._points[vLN068].x * this._points[v645].y;
        }
        return vLN067 * 0.5;
      }
      getPoints() {
        return this._points;
      }
      getPointAtLengthPosition(p823) {
        if (p823 < 0 || p823 > 1) {
          return vP7782.Vector2.Zero();
        }
        const v646 = p823 * this.length();
        let vLN069 = 0;
        for (let vLN070 = 0; vLN070 < this._points.length; vLN070++) {
          const v647 = (vLN070 + 1) % this._points.length;
          const v648 = this._points[vLN070];
          const v649 = this._points[v647].Wy(v648);
          const v650 = v649.length() + vLN069;
          if (v646 >= vLN069 && v646 <= v650) {
            const v651 = v649.normalize();
            const v652 = v646 - vLN069;
            return new vP7782.Vector2(v648.x + v651.x * v652, v648.y + v651.y * v652);
          }
          vLN069 = v650;
        }
        return vP7782.Vector2.Zero();
      }
      static StartingAt(p824, p825) {
        return new C19(p824, p825);
      }
    }
    class C20 {
      constructor(p826, yC = null, IC, fC = false) {
        this.path = p826;
        this._curve = new Array();
        this._distances = new Array();
        this._tangents = new Array();
        this._normals = new Array();
        this._binormals = new Array();
        this._pointAtData = {
          id: 0,
          point: vP7782.bL.Zero(),
          previousPointArrayIndex: 0,
          position: 0,
          subPosition: 0,
          interpolateReady: false,
          interpolationMatrix: vP7782.Matrix.Identity()
        };
        for (let vLN071 = 0; vLN071 < p826.length; vLN071++) {
          this._curve[vLN071] = p826[vLN071].clone();
        }
        this._raw = IC || false;
        this._alignTangentsWithPath = fC;
        this._compute(yC, fC);
      }
      getCurve() {
        return this._curve;
      }
      getPoints() {
        return this._curve;
      }
      length() {
        return this._distances[this._distances.length - 1];
      }
      getTangents() {
        return this._tangents;
      }
      getNormals() {
        return this._normals;
      }
      getBinormals() {
        return this._binormals;
      }
      getDistances() {
        return this._distances;
      }
      getPointAt(p827) {
        return this._updatePointAtData(p827).point;
      }
      getTangentAt(p828, yC = false) {
        this._updatePointAtData(p828, yC);
        if (yC) {
          return vP7782.bL.TransformCoordinates(vP7782.bL.Forward(), this._pointAtData.interpolationMatrix);
        } else {
          return this._tangents[this._pointAtData.previousPointArrayIndex];
        }
      }
      getNormalAt(p829, yC = false) {
        this._updatePointAtData(p829, yC);
        if (yC) {
          return vP7782.bL.TransformCoordinates(vP7782.bL.Right(), this._pointAtData.interpolationMatrix);
        } else {
          return this._normals[this._pointAtData.previousPointArrayIndex];
        }
      }
      getBinormalAt(p830, yC = false) {
        this._updatePointAtData(p830, yC);
        if (yC) {
          return vP7782.bL.TransformCoordinates(vP7782.bL.UpReadOnly, this._pointAtData.interpolationMatrix);
        } else {
          return this._binormals[this._pointAtData.previousPointArrayIndex];
        }
      }
      getDistanceAt(p831) {
        return this.length() * p831;
      }
      getPreviousPointIndexAt(p832) {
        this._updatePointAtData(p832);
        return this._pointAtData.previousPointArrayIndex;
      }
      getSubPositionAt(p833) {
        this._updatePointAtData(p833);
        return this._pointAtData.subPosition;
      }
      getClosestPositionTo(p834) {
        let v653 = Number.MAX_VALUE;
        let vLN072 = 0;
        for (let vLN073 = 0; vLN073 < this._curve.length - 1; vLN073++) {
          const v654 = this._curve[vLN073 + 0];
          const v655 = this._curve[vLN073 + 1].Wy(v654).normalize();
          const v656 = this._distances[vLN073 + 1] - this._distances[vLN073 + 0];
          const v657 = Math.min(Math.max(vP7782.bL.Dot(v655, p834.Wy(v654).normalize()), 0) * vP7782.bL.Distance(v654, p834) / v656, 1);
          const v658 = vP7782.bL.Distance(v654.add(v655.scale(v657 * v656)), p834);
          if (v658 < v653) {
            v653 = v658;
            vLN072 = (this._distances[vLN073 + 0] + v656 * v657) / this.length();
          }
        }
        return vLN072;
      }
      slice(CC = 0, yC = 1) {
        if (CC < 0) {
          p776 = 1 - p776 * -1 % 1;
        }
        if (yC < 0) {
          p777 = 1 - p777 * -1 % 1;
        }
        if (CC > yC) {
          const vCC = CC;
          CC = yC;
          yC = vCC;
        }
        const v659 = this.getCurve();
        const v660 = this.getPointAt(CC);
        let v661 = this.getPreviousPointIndexAt(CC);
        const v662 = this.getPointAt(yC);
        const v663 = this.getPreviousPointIndexAt(yC) + 1;
        const vA11 = [];
        if (CC !== 0) {
          v661++;
          vA11.push(v660);
        }
        vA11.push(...v659.slice(v661, v663));
        if (yC !== 1 || CC === 1) {
          vA11.push(v662);
        }
        return new C20(vA11, this.getNormalAt(CC), this._raw, this._alignTangentsWithPath);
      }
      update(p835, yC = null, IC = false) {
        for (let vLN074 = 0; vLN074 < p835.length; vLN074++) {
          this._curve[vLN074].x = p835[vLN074].x;
          this._curve[vLN074].y = p835[vLN074].y;
          this._curve[vLN074].z = p835[vLN074].z;
        }
        this._compute(yC, IC);
        return this;
      }
      _compute(p836, yC = false) {
        const v664 = this._curve.length;
        if (v664 < 2) {
          return;
        }
        this._tangents[0] = this._getFirstNonNullVector(0);
        if (!this._raw) {
          this._tangents[0].normalize();
        }
        this._tangents[v664 - 1] = this._curve[v664 - 1].Wy(this._curve[v664 - 2]);
        if (!this._raw) {
          this._tangents[v664 - 1].normalize();
        }
        const v665 = this._tangents[0];
        const v666 = this._normalVector(v665, p836);
        let v667;
        let v668;
        let v669;
        let v670;
        let v671;
        this._normals[0] = v666;
        if (!this._raw) {
          this._normals[0].normalize();
        }
        this._binormals[0] = vP7782.bL.Cross(v665, this._normals[0]);
        if (!this._raw) {
          this._binormals[0].normalize();
        }
        this._distances[0] = 0;
        for (let vLN14 = 1; vLN14 < v664; vLN14++) {
          v667 = this._getLastNonNullVector(vLN14);
          if (vLN14 < v664 - 1) {
            v668 = this._getFirstNonNullVector(vLN14);
            this._tangents[vLN14] = p777 ? v668 : v667.add(v668);
            this._tangents[vLN14].normalize();
          }
          this._distances[vLN14] = this._distances[vLN14 - 1] + this._curve[vLN14].Wy(this._curve[vLN14 - 1]).length();
          v669 = this._tangents[vLN14];
          v671 = this._binormals[vLN14 - 1];
          this._normals[vLN14] = vP7782.bL.Cross(v671, v669);
          if (!this._raw) {
            if (this._normals[vLN14].length() === 0) {
              v670 = this._normals[vLN14 - 1];
              this._normals[vLN14] = v670.clone();
            } else {
              this._normals[vLN14].normalize();
            }
          }
          this._binormals[vLN14] = vP7782.bL.Cross(v669, this._normals[vLN14]);
          if (!this._raw) {
            this._binormals[vLN14].normalize();
          }
        }
        this._pointAtData.id = NaN;
      }
      _getFirstNonNullVector(p837) {
        let vLN15 = 1;
        let v672 = this._curve[p837 + vLN15].Wy(this._curve[p837]);
        while (v672.length() === 0 && p837 + vLN15 + 1 < this._curve.length) {
          vLN15++;
          v672 = this._curve[p837 + vLN15].Wy(this._curve[p837]);
        }
        return v672;
      }
      _getLastNonNullVector(p838) {
        let vLN16 = 1;
        let v673 = this._curve[p838].Wy(this._curve[p838 - vLN16]);
        while (v673.length() === 0 && p838 > vLN16 + 1) {
          vLN16++;
          v673 = this._curve[p838].Wy(this._curve[p838 - vLN16]);
        }
        return v673;
      }
      _normalVector(p839, p840) {
        let v674;
        let v675 = p839.length();
        if (v675 === 0) {
          v675 = 1;
        }
        if (p840 === undefined || p840 === null) {
          let v676;
          v676 = (0, vP778.WithinEpsilon)(Math.abs(p839.y) / v675, 1, vP7783.b) ? (0, vP778.WithinEpsilon)(Math.abs(p839.x) / v675, 1, vP7783.b) ? (0, vP778.WithinEpsilon)(Math.abs(p839.z) / v675, 1, vP7783.b) ? vP7782.bL.Zero() : new vP7782.bL(0, 0, 1) : new vP7782.bL(1, 0, 0) : new vP7782.bL(0, -1, 0);
          v674 = vP7782.bL.Cross(p839, v676);
        } else {
          v674 = vP7782.bL.Cross(p839, p840);
          vP7782.bL.CrossToRef(v674, p839, v674);
        }
        v674.normalize();
        return v674;
      }
      _updatePointAtData(p841, yC = false) {
        if (this._pointAtData.id === p841) {
          if (!this._pointAtData.interpolateReady) {
            this._updateInterpolationMatrix();
          }
          return this._pointAtData;
        }
        this._pointAtData.id = p841;
        const v677 = this.getPoints();
        if (p841 <= 0) {
          return this._setPointAtData(0, 0, v677[0], 0, yC);
        }
        if (p841 >= 1) {
          return this._setPointAtData(1, 1, v677[v677.length - 1], v677.length - 1, yC);
        }
        let v678;
        let v679 = v677[0];
        let vLN075 = 0;
        const v680 = p841 * this.length();
        for (let vLN17 = 1; vLN17 < v677.length; vLN17++) {
          v678 = v677[vLN17];
          const v681 = vP7782.bL.Distance(v679, v678);
          vLN075 += v681;
          if (vLN075 === v680) {
            return this._setPointAtData(p841, 1, v678, vLN17, yC);
          }
          if (vLN075 > v680) {
            const v682 = (vLN075 - v680) / v681;
            const v683 = v679.Wy(v678);
            const v684 = v678.add(v683.scaleInPlace(v682));
            return this._setPointAtData(p841, 1 - v682, v684, vLN17 - 1, yC);
          }
          v679 = v678;
        }
        return this._pointAtData;
      }
      _setPointAtData(p842, p843, p844, p845, p846) {
        this._pointAtData.point = p844;
        this._pointAtData.position = p842;
        this._pointAtData.subPosition = p843;
        this._pointAtData.previousPointArrayIndex = p845;
        this._pointAtData.interpolateReady = p846;
        if (p846) {
          this._updateInterpolationMatrix();
        }
        return this._pointAtData;
      }
      _updateInterpolationMatrix() {
        this._pointAtData.interpolationMatrix = vP7782.Matrix.Identity();
        const v685 = this._pointAtData.previousPointArrayIndex;
        if (v685 !== this._tangents.length - 1) {
          const v686 = v685 + 1;
          const v687 = this._tangents[v685].clone();
          const v688 = this._normals[v685].clone();
          const v689 = this._binormals[v685].clone();
          const v690 = this._tangents[v686].clone();
          const v691 = this._normals[v686].clone();
          const v692 = this._binormals[v686].clone();
          const v693 = vP7782.Quaternion.RotationQuaternionFromAxis(v688, v689, v687);
          const v694 = vP7782.Quaternion.RotationQuaternionFromAxis(v691, v692, v690);
          vP7782.Quaternion.Slerp(v693, v694, this._pointAtData.subPosition).toRotationMatrix(this._pointAtData.interpolationMatrix);
        }
      }
    }
    class C21 {
      static CreateQuadraticBezier(p847, p848, p849, p850) {
        p850 = p850 > 2 ? p850 : 3;
        const vA12 = [];
        const vF5 = (p851, p852, p853, p854) => (1 - p851) * (1 - p851) * p852 + p851 * 2 * (1 - p851) * p853 + p851 * p851 * p854;
        for (let vLN076 = 0; vLN076 <= p850; vLN076++) {
          vA12.push(new vP7782.bL(vF5(vLN076 / p850, p847.x, p848.x, p849.x), vF5(vLN076 / p850, p847.y, p848.y, p849.y), vF5(vLN076 / p850, p847.z, p848.z, p849.z)));
        }
        return new C21(vA12);
      }
      static CreateCubicBezier(p855, p856, p857, p858, p859) {
        p859 = p859 > 3 ? p859 : 4;
        const vA13 = [];
        const vF6 = (p860, p861, p862, p863, p864) => (1 - p860) * (1 - p860) * (1 - p860) * p861 + p860 * 3 * (1 - p860) * (1 - p860) * p862 + p860 * 3 * p860 * (1 - p860) * p863 + p860 * p860 * p860 * p864;
        for (let vLN077 = 0; vLN077 <= p859; vLN077++) {
          vA13.push(new vP7782.bL(vF6(vLN077 / p859, p855.x, p856.x, p857.x, p858.x), vF6(vLN077 / p859, p855.y, p856.y, p857.y, p858.y), vF6(vLN077 / p859, p855.z, p856.z, p857.z, p858.z)));
        }
        return new C21(vA13);
      }
      static CreateHermiteSpline(p865, p866, p867, p868, p869) {
        const vA14 = [];
        const v695 = 1 / p869;
        for (let vLN078 = 0; vLN078 <= p869; vLN078++) {
          vA14.push(vP7782.bL.Hermite(p865, p866, p867, p868, vLN078 * v695));
        }
        return new C21(vA14);
      }
      static CreateCatmullRomSpline(p870, p871, p872) {
        const vA15 = [];
        const v696 = 1 / p871;
        let vLN079 = 0;
        if (p872) {
          const v697 = p870.length;
          for (let vLN080 = 0; vLN080 < v697; vLN080++) {
            vLN079 = 0;
            for (let vLN081 = 0; vLN081 < p871; vLN081++) {
              vA15.push(vP7782.bL.CatmullRom(p870[vLN080 % v697], p870[(vLN080 + 1) % v697], p870[(vLN080 + 2) % v697], p870[(vLN080 + 3) % v697], vLN079));
              vLN079 += v696;
            }
          }
          vA15.push(vA15[0]);
        } else {
          const vA16 = [];
          vA16.push(p870[0].clone());
          Array.prototype.push.apply(vA16, p870);
          vA16.push(p870[p870.length - 1].clone());
          let vLN082 = 0;
          for (; vLN082 < vA16.length - 3; vLN082++) {
            vLN079 = 0;
            for (let vLN083 = 0; vLN083 < p871; vLN083++) {
              vA15.push(vP7782.bL.CatmullRom(vA16[vLN082], vA16[vLN082 + 1], vA16[vLN082 + 2], vA16[vLN082 + 3], vLN079));
              vLN079 += v696;
            }
          }
          vLN082--;
          vA15.push(vP7782.bL.CatmullRom(vA16[vLN082], vA16[vLN082 + 1], vA16[vLN082 + 2], vA16[vLN082 + 3], vLN079));
        }
        return new C21(vA15);
      }
      static ArcThru3Points(p873, p874, p875, fC = 32, ky = false, AC = false) {
        const vA17 = [];
        const v698 = p874.Wy(p873);
        const v699 = p875.Wy(p874);
        const v700 = p873.Wy(p875);
        const v701 = vP7782.bL.Cross(v698, v699);
        const v702 = v701.length();
        if (v702 < Math.pow(10, -8)) {
          return new C21(vA17);
        }
        const v703 = v698.lengthSquared();
        const v704 = v699.lengthSquared();
        const v705 = v700.lengthSquared();
        const v706 = v701.lengthSquared();
        const v707 = v698.length() * 0.5 * v699.length() * v700.length() / v702;
        const v708 = v704 * -0.5 * vP7782.bL.Dot(v698, v700) / v706;
        const v709 = v705 * -0.5 * vP7782.bL.Dot(v698, v699) / v706;
        const v710 = v703 * -0.5 * vP7782.bL.Dot(v699, v700) / v706;
        const v711 = p873.scale(v708).add(p874.scale(v709)).add(p875.scale(v710));
        const v712 = p873.Wy(v711).normalize();
        const v713 = vP7782.bL.Cross(v701, v712).normalize();
        if (AC) {
          const v714 = Math.PI * 2 / fC;
          for (let vLN084 = 0; vLN084 <= Math.PI * 2; vLN084 += v714) {
            vA17.push(v711.add(v712.scale(v707 * Math.cos(vLN084)).add(v713.scale(v707 * Math.sin(vLN084)))));
          }
          vA17.push(p873);
        } else {
          const v715 = 1 / fC;
          let vLN085 = 0;
          let v716 = vP7782.bL.Zero();
          do {
            v716 = v711.add(v712.scale(v707 * Math.cos(vLN085)).add(v713.scale(v707 * Math.sin(vLN085))));
            vA17.push(v716);
            vLN085 += v715;
          } while (!v716.equalsWithEpsilon(p875, v707 * v715 * 1.1));
          vA17.push(p875);
          if (ky) {
            vA17.push(p873);
          }
        }
        return new C21(vA17);
      }
      constructor(p876) {
        this._length = 0;
        this._points = p876;
        this._length = this._computeLength(p876);
      }
      getPoints() {
        return this._points;
      }
      length() {
        return this._length;
      }
      continue(p877) {
        const v717 = this._points[this._points.length - 1];
        const v718 = this._points.slice();
        const v719 = p877.getPoints();
        for (let vLN18 = 1; vLN18 < v719.length; vLN18++) {
          v718.push(v719[vLN18].Wy(v719[0]).add(v717));
        }
        return new C21(v718);
      }
      _computeLength(p878) {
        let vLN086 = 0;
        for (let vLN19 = 1; vLN19 < p878.length; vLN19++) {
          vLN086 += p878[vLN19].Wy(p878[vLN19 - 1]).length();
        }
        return vLN086;
      }
    }
  },
  17081: (p879, p880, p881) => {
    p881.d(p880, {
      b: () => C22
    });
    class C22 {
      constructor(p882, p883, p884, p885) {
        this.x = p882;
        this.y = p883;
        this.width = p884;
        this.height = p885;
      }
      toGlobal(p886, p887) {
        return new C22(this.x * p886, this.y * p887, this.width * p886, this.height * p887);
      }
      toGlobalToRef(p888, p889, p890) {
        p890.x = this.x * p888;
        p890.y = this.y * p889;
        p890.width = this.width * p888;
        p890.height = this.height * p889;
        return this;
      }
      clone() {
        return new C22(this.x, this.y, this.width, this.height);
      }
    }
  },
  17157: (p891, p892, p893) => {
    p893.d(p892, {
      d: () => C23,
      g: () => C24
    });
    var vP893 = p893(16973);
    var vP8932 = p893(17163);
    const vA18 = [Math.sqrt(1 / (Math.PI * 4)), -Math.sqrt(3 / (Math.PI * 4)), Math.sqrt(3 / (Math.PI * 4)), -Math.sqrt(3 / (Math.PI * 4)), Math.sqrt(15 / (Math.PI * 4)), -Math.sqrt(15 / (Math.PI * 4)), Math.sqrt(5 / (Math.PI * 16)), -Math.sqrt(15 / (Math.PI * 4)), Math.sqrt(15 / (Math.PI * 16))];
    const vA19 = [() => 1, p894 => p894.y, p895 => p895.z, p896 => p896.x, p897 => p897.x * p897.y, p898 => p898.y * p898.z, p899 => p899.z * 3 * p899.z - 1, p900 => p900.x * p900.z, p901 => p901.x * p901.x - p901.y * p901.y];
    const vF7 = (p902, p903) => vA18[p902] * vA19[p902](p903);
    const vA20 = [Math.PI, Math.PI * 2 / 3, Math.PI * 2 / 3, Math.PI * 2 / 3, Math.PI / 4, Math.PI / 4, Math.PI / 4, Math.PI / 4, Math.PI / 4];
    class C23 {
      constructor() {
        this.preScaled = false;
        this.l00 = vP893.bL.Zero();
        this.l1_1 = vP893.bL.Zero();
        this.l10 = vP893.bL.Zero();
        this.l11 = vP893.bL.Zero();
        this.l2_2 = vP893.bL.Zero();
        this.l2_1 = vP893.bL.Zero();
        this.l20 = vP893.bL.Zero();
        this.l21 = vP893.bL.Zero();
        this.l22 = vP893.bL.Zero();
      }
      addLight(p904, p905, p906) {
        vP8932.f.bL[0].set(p905.r, p905.g, p905.b);
        const v720 = vP8932.f.bL[0];
        const v721 = vP8932.f.bL[1];
        v720.scaleToRef(p906, v721);
        v721.scaleToRef(vF7(0, p904), vP8932.f.bL[2]);
        this.l00.addInPlace(vP8932.f.bL[2]);
        v721.scaleToRef(vF7(1, p904), vP8932.f.bL[2]);
        this.l1_1.addInPlace(vP8932.f.bL[2]);
        v721.scaleToRef(vF7(2, p904), vP8932.f.bL[2]);
        this.l10.addInPlace(vP8932.f.bL[2]);
        v721.scaleToRef(vF7(3, p904), vP8932.f.bL[2]);
        this.l11.addInPlace(vP8932.f.bL[2]);
        v721.scaleToRef(vF7(4, p904), vP8932.f.bL[2]);
        this.l2_2.addInPlace(vP8932.f.bL[2]);
        v721.scaleToRef(vF7(5, p904), vP8932.f.bL[2]);
        this.l2_1.addInPlace(vP8932.f.bL[2]);
        v721.scaleToRef(vF7(6, p904), vP8932.f.bL[2]);
        this.l20.addInPlace(vP8932.f.bL[2]);
        v721.scaleToRef(vF7(7, p904), vP8932.f.bL[2]);
        this.l21.addInPlace(vP8932.f.bL[2]);
        v721.scaleToRef(vF7(8, p904), vP8932.f.bL[2]);
        this.l22.addInPlace(vP8932.f.bL[2]);
      }
      scaleInPlace(p907) {
        this.l00.scaleInPlace(p907);
        this.l1_1.scaleInPlace(p907);
        this.l10.scaleInPlace(p907);
        this.l11.scaleInPlace(p907);
        this.l2_2.scaleInPlace(p907);
        this.l2_1.scaleInPlace(p907);
        this.l20.scaleInPlace(p907);
        this.l21.scaleInPlace(p907);
        this.l22.scaleInPlace(p907);
      }
      convertIncidentRadianceToIrradiance() {
        this.l00.scaleInPlace(vA20[0]);
        this.l1_1.scaleInPlace(vA20[1]);
        this.l10.scaleInPlace(vA20[2]);
        this.l11.scaleInPlace(vA20[3]);
        this.l2_2.scaleInPlace(vA20[4]);
        this.l2_1.scaleInPlace(vA20[5]);
        this.l20.scaleInPlace(vA20[6]);
        this.l21.scaleInPlace(vA20[7]);
        this.l22.scaleInPlace(vA20[8]);
      }
      convertIrradianceToLambertianRadiance() {
        this.scaleInPlace(1 / Math.PI);
      }
      preScaleForRendering() {
        this.preScaled = true;
        this.l00.scaleInPlace(vA18[0]);
        this.l1_1.scaleInPlace(vA18[1]);
        this.l10.scaleInPlace(vA18[2]);
        this.l11.scaleInPlace(vA18[3]);
        this.l2_2.scaleInPlace(vA18[4]);
        this.l2_1.scaleInPlace(vA18[5]);
        this.l20.scaleInPlace(vA18[6]);
        this.l21.scaleInPlace(vA18[7]);
        this.l22.scaleInPlace(vA18[8]);
      }
      updateFromArray(p908) {
        vP893.bL.FromArrayToRef(p908[0], 0, this.l00);
        vP893.bL.FromArrayToRef(p908[1], 0, this.l1_1);
        vP893.bL.FromArrayToRef(p908[2], 0, this.l10);
        vP893.bL.FromArrayToRef(p908[3], 0, this.l11);
        vP893.bL.FromArrayToRef(p908[4], 0, this.l2_2);
        vP893.bL.FromArrayToRef(p908[5], 0, this.l2_1);
        vP893.bL.FromArrayToRef(p908[6], 0, this.l20);
        vP893.bL.FromArrayToRef(p908[7], 0, this.l21);
        vP893.bL.FromArrayToRef(p908[8], 0, this.l22);
        return this;
      }
      updateFromFloatsArray(p909) {
        vP893.bL.FromFloatsToRef(p909[0], p909[1], p909[2], this.l00);
        vP893.bL.FromFloatsToRef(p909[3], p909[4], p909[5], this.l1_1);
        vP893.bL.FromFloatsToRef(p909[6], p909[7], p909[8], this.l10);
        vP893.bL.FromFloatsToRef(p909[9], p909[10], p909[11], this.l11);
        vP893.bL.FromFloatsToRef(p909[12], p909[13], p909[14], this.l2_2);
        vP893.bL.FromFloatsToRef(p909[15], p909[16], p909[17], this.l2_1);
        vP893.bL.FromFloatsToRef(p909[18], p909[19], p909[20], this.l20);
        vP893.bL.FromFloatsToRef(p909[21], p909[22], p909[23], this.l21);
        vP893.bL.FromFloatsToRef(p909[24], p909[25], p909[26], this.l22);
        return this;
      }
      static OL(p910) {
        return new C23().updateFromArray(p910);
      }
      static FromPolynomial(p911) {
        const v722 = new C23();
        v722.l00 = p911.xx.scale(0.376127).add(p911.yy.scale(0.376127)).add(p911.zz.scale(0.376126));
        v722.l1_1 = p911.y.scale(0.977204);
        v722.l10 = p911.z.scale(0.977204);
        v722.l11 = p911.x.scale(0.977204);
        v722.l2_2 = p911.xy.scale(1.16538);
        v722.l2_1 = p911.yz.scale(1.16538);
        v722.l20 = p911.zz.scale(1.34567).Wy(p911.xx.scale(0.672834)).Wy(p911.yy.scale(0.672834));
        v722.l21 = p911.zx.scale(1.16538);
        v722.l22 = p911.xx.scale(1.16538).Wy(p911.yy.scale(1.16538));
        v722.l1_1.scaleInPlace(-1);
        v722.l11.scaleInPlace(-1);
        v722.l2_1.scaleInPlace(-1);
        v722.l21.scaleInPlace(-1);
        v722.scaleInPlace(Math.PI);
        return v722;
      }
    }
    class C24 {
      constructor() {
        this.x = vP893.bL.Zero();
        this.y = vP893.bL.Zero();
        this.z = vP893.bL.Zero();
        this.xx = vP893.bL.Zero();
        this.yy = vP893.bL.Zero();
        this.zz = vP893.bL.Zero();
        this.xy = vP893.bL.Zero();
        this.yz = vP893.bL.Zero();
        this.zx = vP893.bL.Zero();
      }
      get preScaledHarmonics() {
        this._harmonics ||= C23.FromPolynomial(this);
        if (!this._harmonics.preScaled) {
          this._harmonics.preScaleForRendering();
        }
        return this._harmonics;
      }
      addAmbient(p912) {
        vP8932.f.bL[0].jg(p912.r, p912.g, p912.b);
        const v723 = vP8932.f.bL[0];
        this.xx.addInPlace(v723);
        this.yy.addInPlace(v723);
        this.zz.addInPlace(v723);
      }
      scaleInPlace(p913) {
        this.x.scaleInPlace(p913);
        this.y.scaleInPlace(p913);
        this.z.scaleInPlace(p913);
        this.xx.scaleInPlace(p913);
        this.yy.scaleInPlace(p913);
        this.zz.scaleInPlace(p913);
        this.yz.scaleInPlace(p913);
        this.zx.scaleInPlace(p913);
        this.xy.scaleInPlace(p913);
      }
      updateFromHarmonics(p914) {
        this._harmonics = p914;
        this.x.fC(p914.l11);
        this.x.scaleInPlace(1.02333).scaleInPlace(-1);
        this.y.fC(p914.l1_1);
        this.y.scaleInPlace(1.02333).scaleInPlace(-1);
        this.z.fC(p914.l10);
        this.z.scaleInPlace(1.02333);
        this.xx.fC(p914.l00);
        vP8932.f.bL[0].fC(p914.l20).scaleInPlace(0.247708);
        vP8932.f.bL[1].fC(p914.l22).scaleInPlace(0.429043);
        this.xx.scaleInPlace(0.886277).Ze(vP8932.f.bL[0]).addInPlace(vP8932.f.bL[1]);
        this.yy.fC(p914.l00);
        this.yy.scaleInPlace(0.886277).Ze(vP8932.f.bL[0]).Ze(vP8932.f.bL[1]);
        this.zz.fC(p914.l00);
        vP8932.f.bL[0].fC(p914.l20).scaleInPlace(0.495417);
        this.zz.scaleInPlace(0.886277).addInPlace(vP8932.f.bL[0]);
        this.yz.fC(p914.l2_1);
        this.yz.scaleInPlace(0.858086).scaleInPlace(-1);
        this.zx.fC(p914.l21);
        this.zx.scaleInPlace(0.858086).scaleInPlace(-1);
        this.xy.fC(p914.l2_2);
        this.xy.scaleInPlace(0.858086);
        this.scaleInPlace(1 / Math.PI);
        return this;
      }
      static FromHarmonics(p915) {
        return new C24().updateFromHarmonics(p915);
      }
      static OL(p916) {
        const v724 = new C24();
        vP893.bL.FromArrayToRef(p916[0], 0, v724.x);
        vP893.bL.FromArrayToRef(p916[1], 0, v724.y);
        vP893.bL.FromArrayToRef(p916[2], 0, v724.z);
        vP893.bL.FromArrayToRef(p916[3], 0, v724.xx);
        vP893.bL.FromArrayToRef(p916[4], 0, v724.yy);
        vP893.bL.FromArrayToRef(p916[5], 0, v724.zz);
        vP893.bL.FromArrayToRef(p916[6], 0, v724.yz);
        vP893.bL.FromArrayToRef(p916[7], 0, v724.zx);
        vP893.bL.FromArrayToRef(p916[8], 0, v724.xy);
        return v724;
      }
    }
  },
  17112: (p917, p918, p919) => {
    p919.d(p918, {
      b: () => C25
    });
    var vP919 = p919(17039);
    class C25 extends vP919.e {
      constructor(p920) {
        super();
        this._buffer = p920;
      }
      get underlyingResource() {
        return this._buffer;
      }
    }
  },
  17200: (p921, p922, p923) => {
    p923.d(p922, {
      e: () => f8,
      i: () => f10,
      m: () => f11,
      o: () => vO7,
      p: () => f9
    });
    var vP923 = p923(16955);
    var vP9232 = p923(17020);
    var vP9233 = p923(18);
    var vP9234 = p923(16960);
    var vP9235 = p923(17070);
    var vP9236 = p923(16876);
    var vP9237 = p923(16927);
    var vP9238 = p923(17000);
    var vP9239 = p923(17077);
    var vP92310 = p923(17096);
    class C26 extends vP9239.f {
      _gatherImports(p924, p925) {
        if (p924) {
          this._webGPUReady = true;
          p925.push(Promise.all([p923.e(52).then(p923.bind(p923, 19314))]));
        } else {
          p925.push(Promise.all([p923.e(53).then(p923.bind(p923, 19318))]));
        }
        super._gatherImports(p924, p925);
      }
      constructor(p926, yC = null, IC) {
        super((0, vP9233.d)((0, vP9233.d)({}, IC), {}, {
          name: p926,
          Jy: yC || vP92310.e.LastCreatedEngine,
          useShaderStore: true,
          useAsPostProcess: true,
          fragmentShader: C26.FragmentUrl
        }));
      }
    }
    C26.FragmentUrl = "pass";
    class C27 extends vP9239.f {
      _gatherImports(p927, p928) {
        if (p927) {
          this._webGPUReady = true;
          p928.push(Promise.all([p923.e(63).then(p923.bind(p923, 19376))]));
        } else {
          p928.push(Promise.all([p923.e(64).then(p923.bind(p923, 19385))]));
        }
        super._gatherImports(p927, p928);
      }
      constructor(p929, yC = null, IC) {
        super((0, vP9233.d)((0, vP9233.d)({}, IC), {}, {
          name: p929,
          Jy: yC || vP92310.e.LastCreatedEngine,
          useShaderStore: true,
          useAsPostProcess: true,
          fragmentShader: C27.FragmentUrl,
          defines: "#define POSITIVEX"
        }));
        this._face = 0;
      }
      get face() {
        return this._face;
      }
      set face(p930) {
        if (!(p930 < 0) && !(p930 > 5)) {
          this._face = p930;
          switch (this._face) {
            case 0:
              this.updateEffect("#define POSITIVEX");
              break;
            case 1:
              this.updateEffect("#define NEGATIVEX");
              break;
            case 2:
              this.updateEffect("#define POSITIVEY");
              break;
            case 3:
              this.updateEffect("#define NEGATIVEY");
              break;
            case 4:
              this.updateEffect("#define POSITIVEZ");
              break;
            case 5:
              this.updateEffect("#define NEGATIVEZ");
          }
        }
      }
    }
    C27.FragmentUrl = "passCube";
    var vP92311 = p923(16965);
    class C28 extends vP9235.c {
      getClassName() {
        return "PassPostProcess";
      }
      constructor(p931, p932, IC = null, fC, ky, AC, my = 0, XC = false) {
        const v725 = (0, vP9233.d)({
          size: typeof p932 === "number" ? p932 : undefined,
          camera: IC,
          samplingMode: fC,
          Jy: ky,
          reusable: AC,
          textureType: my,
          blockCompilation: XC
        }, p932);
        super(p931, C26.FragmentUrl, (0, vP9233.d)({
          effectWrapper: typeof p932 !== "number" && p932.effectWrapper ? undefined : new C26(p931, ky, v725)
        }, v725));
      }
      static _Parse(p933, p934, p935, p936) {
        return vP9238.b.Parse(() => new C28(p933.name, p933.options, p934, p933.renderTargetSamplingMode, p933._engine, p933.reusable), p933, p935, p936);
      }
    }
    (0, vP9237.g)("BABYLON.PassPostProcess", C28);
    class C29 extends vP9235.c {
      get face() {
        return this._effectWrapper.face;
      }
      set face(p937) {
        this._effectWrapper.face = p937;
      }
      getClassName() {
        return "PassCubePostProcess";
      }
      constructor(p938, p939, IC = null, fC, ky, AC, my = 0, XC = false) {
        const v726 = (0, vP9233.d)({
          size: typeof p939 === "number" ? p939 : undefined,
          camera: IC,
          samplingMode: fC,
          Jy: ky,
          reusable: AC,
          textureType: my,
          blockCompilation: XC
        }, p939);
        super(p938, C26.FragmentUrl, (0, vP9233.d)({
          effectWrapper: typeof p939 !== "number" && p939.effectWrapper ? undefined : new C27(p938, ky, v726)
        }, v726));
      }
      static _Parse(p940, p941, p942, p943) {
        return vP9238.b.Parse(() => new C29(p940.name, p940.options, p941, p940.renderTargetSamplingMode, p940._engine, p940.reusable), p940, p942, p943);
      }
    }
    function f8(p944, p945, p946, p947, p948, p949, p950, p951) {
      const v727 = p945.getEngine();
      p945.isReady = false;
      p948 = p948 ?? p945.samplingMode;
      p947 = p947 ?? p945.type;
      p949 = p949 ?? p945.format;
      p950 = p950 ?? p945.width;
      p951 = p951 ?? p945.height;
      if (p947 === -1) {
        p947 = 0;
      }
      return new Promise(p952 => {
        const v728 = new vP9235.c("postprocess", p944, null, null, 1, null, p948, v727, false, undefined, p947, undefined, null, false, p949);
        v728.externalTextureSamplerBinding = true;
        const v729 = v727.createRenderTargetTexture({
          width: p950,
          height: p951
        }, {
          generateDepthBuffer: false,
          generateMipMaps: false,
          generateStencilBuffer: false,
          samplingMode: p948,
          type: p947,
          format: p949
        });
        v728.onEffectCreatedObservable.addOnce(p953 => {
          p953.executeWhenCompiled(() => {
            v728.onApply = p954 => {
              p954._bindTexture("textureSampler", p945);
              p954.setFloat2("scale", 1, 1);
            };
            p946.postProcessManager.directRender([v728], v729, true);
            v727.restoreDefaultFramebuffer();
            v727._releaseTexture(p945);
            if (v728) {
              v728.dispose();
            }
            v729._swapAndDie(p945);
            p945.type = p947;
            p945.format = 5;
            p945.isReady = true;
            p952(p945);
          });
        });
      });
    }
    let v730;
    let v731;
    function f9(p955) {
      if (!v730) {
        v730 = new Float32Array(1);
        v731 = new Int32Array(v730.buffer);
      }
      v730[0] = p955;
      const v732 = v731[0];
      let v733 = v732 >> 16 & 32768;
      let v734 = v732 >> 12 & 2047;
      const v735 = v732 >> 23 & 255;
      if (v735 < 103) {
        return v733;
      } else if (v735 > 142) {
        v733 |= 31744;
        v733 |= (v735 == 255 ? 0 : 1) && v732 & 8388607;
        return v733;
      } else if (v735 < 113) {
        v734 |= 2048;
        v733 |= (v734 >> 114 - v735) + (v734 >> 113 - v735 & 1);
        return v733;
      } else {
        v733 |= v735 - 112 << 10 | v734 >> 1;
        v733 += v734 & 1;
        return v733;
      }
    }
    function f10(p956) {
      const v736 = (p956 & 32768) >> 15;
      const v737 = (p956 & 31744) >> 10;
      const v738 = p956 & 1023;
      if (v737 === 0) {
        return (v736 ? -1 : 1) * Math.pow(2, -14) * (v738 / Math.pow(2, 10));
      } else if (v737 == 31) {
        if (v738) {
          return NaN;
        } else {
          return (v736 ? -1 : 1) * Infinity;
        }
      } else {
        return (v736 ? -1 : 1) * Math.pow(2, v737 - 15) * (1 + v738 / Math.pow(2, 10));
      }
    }
    (0, vP9234.d)([(0, vP92311.F)()], C29.prototype, "face", null);
    vP9236.b._RescalePostProcessFactory = p957 => new C28("rescale", 1, null, 2, p957, false, 0);
    const vF8 = async (p958, p959, p960, p961, p962) => {
      const v739 = p958.YL();
      const v740 = v739.getEngine();
      let v741;
      if (v740.isWebGPU) {
        if (p958.isCube) {
          await p923.e(61).then(p923.bind(p923, 19371));
        } else {
          await p923.e(62).then(p923.bind(p923, 19373));
        }
      } else if (p958.isCube) {
        await p923.e(59).then(p923.bind(p923, 19360));
      } else {
        await p923.e(60).then(p923.bind(p923, 19369));
      }
      if (p958.isCube) {
        const vA21 = ["#define POSITIVEX", "#define NEGATIVEX", "#define POSITIVEY", "#define NEGATIVEY", "#define POSITIVEZ", "#define NEGATIVEZ"];
        v741 = new vP9235.c("lodCube", "lodCube", {
          uniforms: ["lod", "gamma"],
          samplingMode: vP923.c.NEAREST_NEAREST_MIPNEAREST,
          Jy: v740,
          defines: vA21[p961],
          shaderLanguage: v740.isWebGPU ? 1 : 0
        });
      } else {
        v741 = new vP9235.c("lod", "lod", {
          uniforms: ["lod", "gamma"],
          samplingMode: vP923.c.NEAREST_NEAREST_MIPNEAREST,
          Jy: v740,
          shaderLanguage: v740.isWebGPU ? 1 : 0
        });
      }
      await new Promise(p963 => {
        v741.onEffectCreatedObservable.addOnce(p964 => {
          p964.executeWhenCompiled(() => {
            p963(0);
          });
        });
      });
      const v742 = new vP9232.d("temp", {
        width: p959,
        height: p960
      }, v739, false);
      v741.onApply = function (p965) {
        p965.setTexture("textureSampler", p958);
        p965.setFloat("lod", p962);
        p965.setInt("gamma", p958.gammaSpace ? 1 : 0);
      };
      const v743 = p958.getInternalTexture();
      try {
        if (v742.renderTarget && v743) {
          const v744 = v743.samplingMode;
          if (p962 !== 0) {
            p958.updateSamplingMode(vP923.c.NEAREST_NEAREST_MIPNEAREST);
          } else {
            p958.updateSamplingMode(vP923.c.NEAREST_NEAREST);
          }
          v739.postProcessManager.directRender([v741], v742.renderTarget, true);
          p958.updateSamplingMode(v744);
          const v745 = await v740.readPixels(0, 0, p959, p960);
          const v746 = new Uint8Array(v745.buffer, 0, v745.byteLength);
          v740.unBindFramebuffer(v742.renderTarget);
          return v746;
        }
        throw Error("Render to texture failed.");
      } finally {
        v742.dispose();
        v741.dispose();
      }
    };
    async function f11(p966, p967, p968, fC = 0, ky = 0) {
      if (!p966.isReady() && p966._texture) {
        await new Promise((p969, p970) => {
          if (p966._texture !== null) {
            p966._texture.onLoadedObservable.addOnce(() => {
              p969(0);
            });
          } else {
            p970(0);
          }
        });
      }
      return await vF8(p966, p967, p968, fC, ky);
    }
    const vO7 = {
      CreateResizedCopy: function (p971, p972, p973) {
        let v747 = !(arguments.length > 3) || arguments[3] === undefined || arguments[3];
        const v748 = p971.YL();
        const v749 = v748.getEngine();
        const v750 = new vP9232.d("resized" + p971.name, {
          width: p972,
          height: p973
        }, v748, !p971.noMipmap, true, p971._texture.type, false, p971.samplingMode, false);
        v750.wrapU = p971.wrapU;
        v750.wrapV = p971.wrapV;
        v750.uOffset = p971.uOffset;
        v750.vOffset = p971.vOffset;
        v750.uScale = p971.uScale;
        v750.vScale = p971.vScale;
        v750.uAng = p971.uAng;
        v750.vAng = p971.vAng;
        v750.wAng = p971.wAng;
        v750.coordinatesIndex = p971.coordinatesIndex;
        v750.level = p971.level;
        v750.anisotropicFilteringLevel = p971.anisotropicFilteringLevel;
        v750._texture.isReady = false;
        p971.wrapU = vP923.c.CLAMP_ADDRESSMODE;
        p971.wrapV = vP923.c.CLAMP_ADDRESSMODE;
        const v751 = new C28("pass", 1, null, v747 ? vP923.c.BILINEAR_SAMPLINGMODE : vP923.c.NEAREST_SAMPLINGMODE, v749, false, 0);
        v751.externalTextureSamplerBinding = true;
        v751.onEffectCreatedObservable.addOnce(p974 => {
          p974.executeWhenCompiled(() => {
            v751.onApply = function (p975) {
              p975.setTexture("textureSampler", p971);
            };
            const v752 = v750.renderTarget;
            if (v752) {
              v748.postProcessManager.directRender([v751], v752);
              v749.unBindFramebuffer(v752);
              v750.disposeFramebufferObjects();
              v751.dispose();
              v750.getInternalTexture().isReady = true;
            }
          });
        });
        return v750;
      },
      ApplyPostProcess: f8,
      ToHalfFloat: f9,
      FromHalfFloat: f10,
      GetTextureDataAsync: f11
    };
  },
  17070: (p976, p977, p978) => {
    p978.d(p977, {
      c: () => C30
    });
    var vP978 = p978(16960);
    var vP9782 = p978(17061);
    var vP9783 = p978(16796);
    var vP9784 = p978(16973);
    var vP9785 = p978(16878);
    var vP9786 = p978(16965);
    var vP9787 = p978(17000);
    var vP9788 = p978(16927);
    var vP9789 = p978(16876);
    var vP97810 = p978(16939);
    var vP97811 = p978(17077);
    vP9789.b.prototype.setTextureFromPostProcess = function (p979, p980, p981) {
      let v753 = null;
      if (p980) {
        if (p980._forcedOutputTexture) {
          v753 = p980._forcedOutputTexture;
        } else if (p980._textures.data[p980._currentRenderTextureInd]) {
          v753 = p980._textures.data[p980._currentRenderTextureInd];
        }
      }
      this._bindTexture(p979, v753?.texture ?? null, p981);
    };
    vP9789.b.prototype.setTextureFromPostProcessOutput = function (p982, p983, p984) {
      var v754;
      this._bindTexture(p982, (p983 === null || p983 === undefined || (v754 = p983._outputTexture) === null || v754 === undefined ? undefined : v754.texture) ?? null, p984);
    };
    vP9785.Effect.prototype.setTextureFromPostProcess = function (p985, p986) {
      this._engine.setTextureFromPostProcess(this._samplers[p985], p986, p985);
    };
    vP9785.Effect.prototype.setTextureFromPostProcessOutput = function (p987, p988) {
      this._engine.setTextureFromPostProcessOutput(this._samplers[p987], p988, p987);
    };
    class C30 {
      static get ForceGLSL() {
        return vP97811.f.ForceGLSL;
      }
      static set ForceGLSL(p989) {
        vP97811.f.ForceGLSL = p989;
      }
      static RegisterShaderCodeProcessing(p990, p991) {
        vP97811.f.RegisterShaderCodeProcessing(p990, p991);
      }
      get name() {
        return this._effectWrapper.name;
      }
      set name(p992) {
        this._effectWrapper.name = p992;
      }
      get alphaMode() {
        return this._effectWrapper.alphaMode;
      }
      set alphaMode(p993) {
        this._effectWrapper.alphaMode = p993;
      }
      get samples() {
        return this._samples;
      }
      set samples(p994) {
        this._samples = Math.min(p994, this._engine.getCaps().maxMSAASamples);
        this._textures.forEach(p995 => {
          p995.setSamples(this._samples);
        });
      }
      get shaderLanguage() {
        return this._shaderLanguage;
      }
      getEffectName() {
        return this._fragmentUrl;
      }
      set onActivate(p996) {
        if (this._onActivateObserver) {
          this.onActivateObservable.remove(this._onActivateObserver);
        }
        if (p996) {
          this._onActivateObserver = this.onActivateObservable.add(p996);
        }
      }
      set onSizeChanged(p997) {
        if (this._onSizeChangedObserver) {
          this.onSizeChangedObservable.remove(this._onSizeChangedObserver);
        }
        this._onSizeChangedObserver = this.onSizeChangedObservable.add(p997);
      }
      set onApply(p998) {
        if (this._onApplyObserver) {
          this.onApplyObservable.remove(this._onApplyObserver);
        }
        this._onApplyObserver = this.onApplyObservable.add(p998);
      }
      set onBeforeRender(p999) {
        if (this._onBeforeRenderObserver) {
          this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver);
        }
        this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(p999);
      }
      set onAfterRender(p1000) {
        if (this._onAfterRenderObserver) {
          this.onAfterRenderObservable.remove(this._onAfterRenderObserver);
        }
        this._onAfterRenderObserver = this.onAfterRenderObservable.add(p1000);
      }
      get inputTexture() {
        return this._textures.data[this._currentRenderTextureInd];
      }
      set inputTexture(p1001) {
        this._forcedOutputTexture = p1001;
      }
      restoreDefaultInputTexture() {
        if (this._forcedOutputTexture) {
          this._forcedOutputTexture = null;
          this.markTextureDirty();
        }
      }
      getCamera() {
        return this._camera;
      }
      get texelSize() {
        if (this._shareOutputWithPostProcess) {
          return this._shareOutputWithPostProcess.texelSize;
        } else {
          if (this._forcedOutputTexture) {
            this._texelSize.jg(1 / this._forcedOutputTexture.width, 1 / this._forcedOutputTexture.height);
          }
          return this._texelSize;
        }
      }
      constructor(p1002, p1003, p1004, p1005, p1006, p1007) {
        var v755;
        let v756 = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 1;
        let v757 = arguments.length > 7 ? arguments[7] : undefined;
        let v758 = arguments.length > 8 ? arguments[8] : undefined;
        let v759 = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : null;
        let v760 = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : 0;
        let v761 = arguments.length > 11 && arguments[11] !== undefined ? arguments[11] : "postprocess";
        let v762 = arguments.length > 12 ? arguments[12] : undefined;
        let v763 = arguments.length > 13 && arguments[13] !== undefined && arguments[13];
        let v764 = arguments.length > 14 && arguments[14] !== undefined ? arguments[14] : 5;
        let v765 = arguments.length > 15 ? arguments[15] : undefined;
        let v766 = arguments.length > 16 ? arguments[16] : undefined;
        this._parentContainer = null;
        this.width = -1;
        this.height = -1;
        this.nodeMaterialSource = null;
        this._outputTexture = null;
        this.Kf = true;
        this.forceAutoClearInAlphaMode = false;
        this.animations = [];
        this.enablePixelPerfectMode = false;
        this.forceFullscreenViewport = true;
        this.scaleMode = 1;
        this.alwaysForcePOT = false;
        this._samples = 1;
        this.adaptScaleToCurrentViewport = false;
        this._webGPUReady = false;
        this._reusable = false;
        this._renderId = 0;
        this.externalTextureSamplerBinding = false;
        this._textures = new vP9782.g(2);
        this._textureCache = [];
        this._currentRenderTextureInd = 0;
        this._scaleRatio = new vP9784.Vector2(1, 1);
        this._texelSize = vP9784.Vector2.Zero();
        this.onActivateObservable = new vP9783.e();
        this.onSizeChangedObservable = new vP9783.e();
        this.onApplyObservable = new vP9783.e();
        this.onBeforeRenderObservable = new vP9783.e();
        this.onAfterRenderObservable = new vP9783.e();
        this.Cf = new vP9783.e();
        let v767;
        let vLN110 = 1;
        let v768 = null;
        if (p1004 && !Array.isArray(p1004)) {
          var v769;
          const vP1004 = p1004;
          p1004 = vP1004.uniforms ?? null;
          p1005 = vP1004.samplers ?? null;
          vLN110 = vP1004.size ?? 1;
          p1007 = vP1004.camera ?? null;
          v756 = vP1004.samplingMode ?? 1;
          v757 = vP1004.Jy;
          v758 = vP1004.reusable;
          v759 = Array.isArray(vP1004.defines) ? vP1004.defines.join("\n") : vP1004.defines ?? null;
          v760 = vP1004.textureType ?? 0;
          v761 = vP1004.vertexUrl ?? "postprocess";
          v762 = vP1004.indexParameters;
          v763 = (v769 = vP1004.blockCompilation) !== null && v769 !== undefined && v769;
          v764 = vP1004.textureFormat ?? 5;
          v765 = vP1004.shaderLanguage ?? 0;
          v768 = vP1004.uniformBuffers ?? null;
          v766 = vP1004.extraInitializations;
          v767 = vP1004.effectWrapper;
        } else if (p1006) {
          vLN110 = typeof p1006 === "number" ? p1006 : {
            width: p1006.width,
            height: p1006.height
          };
        }
        this._useExistingThinPostProcess = !!v767;
        this._effectWrapper = v767 ?? new vP97811.f({
          name: p1002,
          useShaderStore: true,
          useAsPostProcess: true,
          fragmentShader: p1003,
          Jy: v757 || ((v755 = p1007) === null || v755 === undefined ? undefined : v755.YL().getEngine()),
          uniforms: p1004,
          samplers: p1005,
          uniformBuffers: v768,
          defines: v759,
          vertexUrl: v761,
          indexParameters: v762,
          blockCompilation: true,
          shaderLanguage: v765,
          extraInitializations: undefined
        });
        this.name = p1002;
        this.onEffectCreatedObservable = this._effectWrapper.onEffectCreatedObservable;
        if (p1007 != null) {
          this._camera = p1007;
          this._scene = p1007.YL();
          p1007.attachPostProcess(this);
          this._engine = this._scene.getEngine();
          this._scene.postProcesses.push(this);
          this.uniqueId = this._scene.getUniqueId();
        } else if (v757) {
          this._engine = v757;
          this._engine.postProcesses.push(this);
        }
        this._options = vLN110;
        this.renderTargetSamplingMode = v756 || 1;
        this._reusable = v758 || false;
        this._textureType = v760;
        this._textureFormat = v764;
        this._shaderLanguage = v765 || 0;
        this._samplers = p1005 || [];
        if (this._samplers.indexOf("textureSampler") === -1) {
          this._samplers.push("textureSampler");
        }
        this._fragmentUrl = p1003;
        this._vertexUrl = v761;
        this._parameters = p1004 || [];
        if (this._parameters.indexOf("scale") === -1) {
          this._parameters.push("scale");
        }
        this._uniformBuffers = v768 || [];
        this._indexParameters = v762;
        if (!this._useExistingThinPostProcess) {
          this._webGPUReady = this._shaderLanguage === 1;
          const vA22 = [];
          this._gatherImports(this._engine.isWebGPU && !C30.ForceGLSL, vA22);
          this._effectWrapper._webGPUReady = this._webGPUReady;
          this._effectWrapper._postConstructor(v763, v759, v766, vA22);
        }
      }
      _gatherImports(_param3, CC) {
        if (arguments.length > 0 && arguments[0] !== undefined && arguments[0] && this._webGPUReady) {
          p976.push(Promise.all([p978.e(54).then(p978.bind(p978, 19327))]));
        } else {
          p976.push(Promise.all([Promise.resolve().then(p978.bind(p978, 17089))]));
        }
      }
      getClassName() {
        return "PostProcess";
      }
      getEngine() {
        return this._engine;
      }
      getEffect() {
        return this._effectWrapper.drawWrapper.effect;
      }
      shareOutputWith(p1008) {
        this._disposeTextures();
        this._shareOutputWithPostProcess = p1008;
        return this;
      }
      useOwnOutput() {
        if (this._textures.length == 0) {
          this._textures = new vP9782.g(2);
        }
        this._shareOutputWithPostProcess = null;
      }
      updateEffect(CC = null, yC = null, IC = null, fC, ky, gC, AC, my) {
        this._effectWrapper.updateEffect(CC, yC, IC, fC, ky, gC, AC, my);
        this._postProcessDefines = Array.isArray(this._effectWrapper.options.defines) ? this._effectWrapper.options.defines.join("\n") : this._effectWrapper.options.defines;
      }
      isReusable() {
        return this._reusable;
      }
      markTextureDirty() {
        this.width = -1;
      }
      _createRenderTargetTexture(p1009, p1010, IC = 0) {
        for (let vLN087 = 0; vLN087 < this._textureCache.length; vLN087++) {
          if (this._textureCache[vLN087].texture.width === p1009.width && this._textureCache[vLN087].texture.height === p1009.height && this._textureCache[vLN087].postProcessChannel === IC && this._textureCache[vLN087].texture._generateDepthBuffer === p1010.generateDepthBuffer && this._textureCache[vLN087].texture.samples === p1010.samples) {
            return this._textureCache[vLN087].texture;
          }
        }
        const v770 = this._engine.createRenderTargetTexture(p1009, p1010);
        this._textureCache.push({
          texture: v770,
          postProcessChannel: IC,
          lastUsedRenderId: -1
        });
        return v770;
      }
      _flushTextureCache() {
        const v771 = this._renderId;
        for (let v772 = this._textureCache.length - 1; v772 >= 0; v772--) {
          if (v771 - this._textureCache[v772].lastUsedRenderId > 100) {
            let v773 = false;
            for (let vLN088 = 0; vLN088 < this._textures.length; vLN088++) {
              if (this._textures.data[vLN088] === this._textureCache[v772].texture) {
                v773 = true;
                break;
              }
            }
            if (!v773) {
              this._textureCache[v772].texture.dispose();
              this._textureCache.splice(v772, 1);
            }
          }
        }
      }
      resize(p1011, p1012, IC = null, fC = false, ky = false) {
        if (this._textures.length > 0) {
          this._textures.reset();
        }
        this.width = p1011;
        this.height = p1012;
        let v774 = null;
        if (IC) {
          for (let vLN089 = 0; vLN089 < IC._postProcesses.length; vLN089++) {
            if (IC._postProcesses[vLN089] !== null) {
              v774 = IC._postProcesses[vLN089];
              break;
            }
          }
        }
        const vO8 = {
          width: this.width,
          height: this.height
        };
        const vO9 = {
          generateMipMaps: fC,
          generateDepthBuffer: ky || v774 === this,
          generateStencilBuffer: (ky || v774 === this) && this._engine.isStencilEnable,
          samplingMode: this.renderTargetSamplingMode,
          type: this._textureType,
          format: this._textureFormat,
          samples: this._samples,
          label: "PostProcessRTT-" + this.name
        };
        this._textures.push(this._createRenderTargetTexture(vO8, vO9, 0));
        if (this._reusable) {
          this._textures.push(this._createRenderTargetTexture(vO8, vO9, 1));
        }
        this._texelSize.jg(1 / this.width, 1 / this.height);
        this.onSizeChangedObservable.notifyObservers(this);
      }
      _getTarget() {
        let v775;
        if (this._shareOutputWithPostProcess) {
          v775 = this._shareOutputWithPostProcess.inputTexture;
        } else if (this._forcedOutputTexture) {
          v775 = this._forcedOutputTexture;
          this.width = this._forcedOutputTexture.width;
          this.height = this._forcedOutputTexture.height;
        } else {
          let v776;
          v775 = this.inputTexture;
          for (let vLN090 = 0; vLN090 < this._textureCache.length; vLN090++) {
            if (this._textureCache[vLN090].texture === v775) {
              v776 = this._textureCache[vLN090];
              break;
            }
          }
          if (v776) {
            v776.lastUsedRenderId = this._renderId;
          }
        }
        return v775;
      }
      activate(p1013) {
        var v777;
        var v778;
        let v779 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        let v780 = arguments.length > 2 ? arguments[2] : undefined;
        const v781 = p1013 === null || p1013.cameraRigMode !== undefined ? p1013 || this._camera : null;
        const v782 = (v781 === null || v781 === undefined ? undefined : v781.YL()) ?? p1013;
        const v783 = v782.getEngine();
        const v784 = v783.getCaps().maxTextureSize;
        const v785 = (v779 ? v779.width : this._engine.getRenderWidth(true)) * this._options | 0;
        const v786 = (v779 ? v779.height : this._engine.getRenderHeight(true)) * this._options | 0;
        let v787 = this._options.width || v785;
        let v788 = this._options.height || v786;
        const v789 = this.renderTargetSamplingMode !== 7 && this.renderTargetSamplingMode !== 1 && this.renderTargetSamplingMode !== 2;
        let v790 = null;
        if (!this._shareOutputWithPostProcess && !this._forcedOutputTexture) {
          if (this.adaptScaleToCurrentViewport) {
            const v791 = v783.currentViewport;
            if (v791) {
              v787 *= v791.width;
              v788 *= v791.height;
            }
          }
          if (v789 || this.alwaysForcePOT) {
            if (!this._options.width) {
              v787 = v783.needPOTTextures ? (0, vP97810.f)(v787, v784, this.scaleMode) : v787;
            }
            if (!this._options.height) {
              v788 = v783.needPOTTextures ? (0, vP97810.f)(v788, v784, this.scaleMode) : v788;
            }
          }
          if (this.width !== v787 || this.height !== v788 || !(v790 = this._getTarget())) {
            this.resize(v787, v788, v781, v789, v780);
          }
          this._textures.forEach(p1014 => {
            if (p1014.samples !== this.samples) {
              this._engine.updateRenderTargetTextureSampleCount(p1014, this.samples);
            }
          });
          this._flushTextureCache();
          this._renderId++;
        }
        v790 ||= this._getTarget();
        if (this.enablePixelPerfectMode) {
          this._scaleRatio.jg(v785 / v787, v786 / v788);
          this._engine.bindFramebuffer(v790, 0, v785, v786, this.forceFullscreenViewport);
        } else {
          this._scaleRatio.jg(1, 1);
          this._engine.bindFramebuffer(v790, 0, undefined, undefined, this.forceFullscreenViewport);
        }
        if ((v777 = (v778 = this._engine)._debugInsertMarker) !== null && v777 !== undefined) {
          v777.call(v778, `post process ${this.name} input`);
        }
        this.onActivateObservable.notifyObservers(v781);
        if (this.Kf && (this.alphaMode === 0 || this.forceAutoClearInAlphaMode)) {
          this._engine.clear(this.clearColor ? this.clearColor : v782.clearColor, v782._allowPostProcessClearColor, true, true);
        }
        if (this._reusable) {
          this._currentRenderTextureInd = (this._currentRenderTextureInd + 1) % 2;
        }
        return v790;
      }
      get isSupported() {
        return this._effectWrapper.drawWrapper.effect.isSupported;
      }
      get aspectRatio() {
        if (this._shareOutputWithPostProcess) {
          return this._shareOutputWithPostProcess.aspectRatio;
        } else if (this._forcedOutputTexture) {
          return this._forcedOutputTexture.width / this._forcedOutputTexture.height;
        } else {
          return this.width / this.height;
        }
      }
      isReady() {
        return this._effectWrapper.isReady();
      }
      apply() {
        if (!this._effectWrapper.isReady()) {
          return null;
        }
        let v792;
        if (!(this._engine.enableEffect(this._effectWrapper.drawWrapper), this._engine.setState(false), this._engine.setDepthBuffer(false), this._engine.setDepthWrite(false), this.alphaConstants && this.getEngine().setAlphaConstants(this.alphaConstants.r, this.alphaConstants.g, this.alphaConstants.b, this.alphaConstants.a), this._engine.setAlphaMode(this.alphaMode), v792 = this._shareOutputWithPostProcess ? this._shareOutputWithPostProcess.inputTexture : this._forcedOutputTexture ? this._forcedOutputTexture : this.inputTexture, this.externalTextureSamplerBinding)) {
          this._effectWrapper.drawWrapper.effect._bindTexture("textureSampler", v792?.texture);
        }
        this._effectWrapper.drawWrapper.effect.setVector2("scale", this._scaleRatio);
        this.onApplyObservable.notifyObservers(this._effectWrapper.drawWrapper.effect);
        this._effectWrapper.bind(true);
        return this._effectWrapper.drawWrapper.effect;
      }
      _disposeTextures() {
        if (this._shareOutputWithPostProcess || this._forcedOutputTexture) {
          this._disposeTextureCache();
        } else {
          this._disposeTextureCache();
          this._textures.dispose();
        }
      }
      _disposeTextureCache() {
        for (let v793 = this._textureCache.length - 1; v793 >= 0; v793--) {
          this._textureCache[v793].texture.dispose();
        }
        this._textureCache.length = 0;
      }
      setPrePassRenderer(p1015) {
        return !!this._prePassEffectConfiguration && (this._prePassEffectConfiguration = p1015.addEffectConfiguration(this._prePassEffectConfiguration), this._prePassEffectConfiguration.enabled = true, true);
      }
      dispose(p1016) {
        let v794;
        p1016 = p1016 || this._camera;
        if (!this._useExistingThinPostProcess) {
          this._effectWrapper.dispose();
        }
        this._disposeTextures();
        if (this._scene) {
          v794 = this._scene.postProcesses.indexOf(this);
          if (v794 !== -1) {
            this._scene.postProcesses.splice(v794, 1);
          }
        }
        if (this._parentContainer) {
          const v795 = this._parentContainer.postProcesses.indexOf(this);
          if (v795 > -1) {
            this._parentContainer.postProcesses.splice(v795, 1);
          }
          this._parentContainer = null;
        }
        v794 = this._engine.postProcesses.indexOf(this);
        if (v794 !== -1) {
          this._engine.postProcesses.splice(v794, 1);
        }
        this.Cf.notifyObservers();
        if (p1016) {
          p1016.detachPostProcess(this);
          v794 = p1016._postProcesses.indexOf(this);
          if (v794 === 0 && p1016._postProcesses.length > 0) {
            const v796 = this._camera._getFirstPostProcess();
            if (v796) {
              v796.markTextureDirty();
            }
          }
          this.onActivateObservable.clear();
          this.onAfterRenderObservable.clear();
          this.onApplyObservable.clear();
          this.onBeforeRenderObservable.clear();
          this.onSizeChangedObservable.clear();
          this.onEffectCreatedObservable.clear();
        }
      }
      serialize() {
        const v797 = vP9787.b.Serialize(this);
        const v798 = this.getCamera() || this._scene && this._scene.activeCamera;
        v797.customType = "BABYLON." + this.getClassName();
        v797.cameraId = v798 ? v798.id : null;
        v797.reusable = this._reusable;
        v797.textureType = this._textureType;
        v797.fragmentUrl = this._fragmentUrl;
        v797.parameters = this._parameters;
        v797.samplers = this._samplers;
        v797.uniformBuffers = this._uniformBuffers;
        v797.options = this._options;
        v797.defines = this._postProcessDefines;
        v797.textureFormat = this._textureFormat;
        v797.vertexUrl = this._vertexUrl;
        v797.indexParameters = this._indexParameters;
        return v797;
      }
      clone() {
        const v799 = this.serialize();
        v799._engine = this._engine;
        v799.cameraId = null;
        const v800 = C30.Parse(v799, this._scene, "");
        if (v800) {
          v800.onActivateObservable = this.onActivateObservable.clone();
          v800.onSizeChangedObservable = this.onSizeChangedObservable.clone();
          v800.onApplyObservable = this.onApplyObservable.clone();
          v800.onBeforeRenderObservable = this.onBeforeRenderObservable.clone();
          v800.onAfterRenderObservable = this.onAfterRenderObservable.clone();
          v800._prePassEffectConfiguration = this._prePassEffectConfiguration;
          return v800;
        } else {
          return null;
        }
      }
      static Parse(p1017, p1018, p1019) {
        const v801 = (0, vP9788.d)(p1017.customType);
        if (!v801 || !v801._Parse) {
          return null;
        }
        const v802 = p1018 ? p1018.getCameraById(p1017.cameraId) : null;
        return v801._Parse(p1017, v802, p1018, p1019);
      }
      static _Parse(p1020, p1021, p1022, p1023) {
        return vP9787.b.Parse(() => new C30(p1020.name, p1020.fragmentUrl, p1020.parameters, p1020.samplers, p1020.options, p1021, p1020.renderTargetSamplingMode, p1020._engine, p1020.reusable, p1020.defines, p1020.textureType, p1020.vertexUrl, p1020.indexParameters, false, p1020.textureFormat), p1020, p1022, p1023);
      }
    }
    (0, vP978.d)([(0, vP9786.F)()], C30.prototype, "uniqueId", undefined);
    (0, vP978.d)([(0, vP9786.F)()], C30.prototype, "name", null);
    (0, vP978.d)([(0, vP9786.F)()], C30.prototype, "width", undefined);
    (0, vP978.d)([(0, vP9786.F)()], C30.prototype, "height", undefined);
    (0, vP978.d)([(0, vP9786.F)()], C30.prototype, "renderTargetSamplingMode", undefined);
    (0, vP978.d)([(0, vP9786.m)()], C30.prototype, "clearColor", undefined);
    (0, vP978.d)([(0, vP9786.F)()], C30.prototype, "Kf", undefined);
    (0, vP978.d)([(0, vP9786.F)()], C30.prototype, "forceAutoClearInAlphaMode", undefined);
    (0, vP978.d)([(0, vP9786.F)()], C30.prototype, "alphaMode", null);
    (0, vP978.d)([(0, vP9786.F)()], C30.prototype, "alphaConstants", undefined);
    (0, vP978.d)([(0, vP9786.F)()], C30.prototype, "enablePixelPerfectMode", undefined);
    (0, vP978.d)([(0, vP9786.F)()], C30.prototype, "forceFullscreenViewport", undefined);
    (0, vP978.d)([(0, vP9786.F)()], C30.prototype, "scaleMode", undefined);
    (0, vP978.d)([(0, vP9786.F)()], C30.prototype, "alwaysForcePOT", undefined);
    (0, vP978.d)([(0, vP9786.F)("samples")], C30.prototype, "_samples", undefined);
    (0, vP978.d)([(0, vP9786.F)()], C30.prototype, "adaptScaleToCurrentViewport", undefined);
    (0, vP9788.g)("BABYLON.PostProcess", C30);
  },
  17089: (p1024, p1025, p1026) => {
    p1026.r(p1025);
    p1026.d(p1025, {
      postprocessVertexShader: () => vO10
    });
    var vP1026 = p1026(16885);
    const vLSPostprocessVertexSha = "postprocessVertexShader";
    const vLSAttributeVec2Positio = "attribute vec2 position;uniform vec2 scale;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvUV=(position*madd+madd)*scale;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    vP1026.d.ShadersStore[vLSPostprocessVertexSha] ||= vLSAttributeVec2Positio;
    const vO10 = {
      name: vLSPostprocessVertexSha,
      shader: vLSAttributeVec2Positio
    };
  }
};
//# sourceMappingURL=pz8l4l.18.33a2df08.chunk.js.map
//# debugId=5e76cdaf-eada-5bd2-a806-c01470b78ebe