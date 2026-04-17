(function () {
  try {
    var v = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : {};
    var v2 = new v.Error().stack;
    if (v2) {
      v._sentryDebugIds = v._sentryDebugIds || {};
      v._sentryDebugIds[v2] = "15fcc02c-9415-52c6-b6ab-8f60772ae780";
    }
  } catch (e2) {}
})();
export const id = 22;
export const ids = [22];
export const modules = {
  17204: (p, p2, p3) => {
    p3.r(p2);
    p3.d(p2, {
      ShaderMaterial: () => C
    });
    var vP3 = p3(18);
    var vP32 = p3(17000);
    var vP33 = p3(17213);
    var vP34 = p3(16973);
    var vP35 = p3(17031);
    var vP36 = p3(16955);
    var vP37 = p3(16927);
    var vP38 = p3(17287);
    var vP39 = p3(16832);
    var vP310 = p3(17290);
    var vP311 = p3(16837);
    var vP312 = p3(17333);
    var vP313 = p3(17327);
    const vO = {
      effect: null,
      subMesh: null
    };
    class C extends vP310.c {
      constructor(p4, p5, p6, ky = {}) {
        super(p4, p5, !(arguments.length > 4) || arguments[4] === undefined || arguments[4]);
        this._textures = {};
        this._textureArrays = {};
        this._externalTextures = {};
        this._floats = {};
        this._ints = {};
        this._uints = {};
        this._floatsArrays = {};
        this._colors3 = {};
        this._colors3Arrays = {};
        this._colors4 = {};
        this._colors4Arrays = {};
        this._vectors2 = {};
        this._vectors3 = {};
        this._vectors4 = {};
        this._quaternions = {};
        this._quaternionsArrays = {};
        this._matrices = {};
        this._matrixArrays = {};
        this._matrices3x3 = {};
        this._matrices2x2 = {};
        this._vectors2Arrays = {};
        this._vectors3Arrays = {};
        this._vectors4Arrays = {};
        this._uniformBuffers = {};
        this._textureSamplers = {};
        this._storageBuffers = {};
        this._cachedWorldViewMatrix = new vP34.Matrix();
        this._cachedWorldViewProjectionMatrix = new vP34.Matrix();
        this._multiview = false;
        this._materialHelperNeedsPreviousMatrices = false;
        this._shaderPath = p6;
        this._options = (0, vP3.d)({
          needAlphaBlending: false,
          needAlphaTesting: false,
          attributes: ["position", "normal", "uv"],
          uniforms: ["worldViewProjection"],
          uniformBuffers: [],
          samplers: [],
          externalTextures: [],
          samplerObjects: [],
          storageBuffers: [],
          defines: [],
          useClipPlane: false
        }, ky);
      }
      get shaderPath() {
        return this._shaderPath;
      }
      set shaderPath(p7) {
        this._shaderPath = p7;
      }
      get options() {
        return this._options;
      }
      get isMultiview() {
        return this._multiview;
      }
      getClassName() {
        return "ShaderMaterial";
      }
      needAlphaBlending() {
        return this.alpha < 1 || this._options.needAlphaBlending;
      }
      needAlphaTesting() {
        return this._options.needAlphaTesting;
      }
      _checkUniform(p8) {
        if (this._options.uniforms.indexOf(p8) === -1) {
          this._options.uniforms.push(p8);
        }
      }
      setTexture(p9, p10) {
        if (this._options.samplers.indexOf(p9) === -1) {
          this._options.samplers.push(p9);
        }
        this._textures[p9] = p10;
        return this;
      }
      removeTexture(p11) {
        delete this._textures[p11];
      }
      setTextureArray(p12, p13) {
        if (this._options.samplers.indexOf(p12) === -1) {
          this._options.samplers.push(p12);
        }
        this._checkUniform(p12);
        this._textureArrays[p12] = p13;
        return this;
      }
      setExternalTexture(p14, p15) {
        if (this._options.externalTextures.indexOf(p14) === -1) {
          this._options.externalTextures.push(p14);
        }
        this._externalTextures[p14] = p15;
        return this;
      }
      setFloat(p16, p17) {
        this._checkUniform(p16);
        this._floats[p16] = p17;
        return this;
      }
      setInt(p18, p19) {
        this._checkUniform(p18);
        this._ints[p18] = p19;
        return this;
      }
      setUInt(p20, p21) {
        this._checkUniform(p20);
        this._uints[p20] = p21;
        return this;
      }
      setFloats(p22, p23) {
        this._checkUniform(p22);
        this._floatsArrays[p22] = p23;
        return this;
      }
      setColor3(p24, p25) {
        this._checkUniform(p24);
        this._colors3[p24] = p25;
        return this;
      }
      setColor3Array(p26, p27) {
        this._checkUniform(p26);
        this._colors3Arrays[p26] = p27.reduce((p28, p29) => {
          p28.push(p29.r, p29.g, p29.b);
          return p28;
        }, []);
        return this;
      }
      setColor4(p30, p31) {
        this._checkUniform(p30);
        this._colors4[p30] = p31;
        return this;
      }
      setColor4Array(p32, p33) {
        this._checkUniform(p32);
        this._colors4Arrays[p32] = p33.reduce((p34, p35) => {
          p34.push(p35.r, p35.g, p35.b, p35.a);
          return p34;
        }, []);
        return this;
      }
      setVector2(p36, p37) {
        this._checkUniform(p36);
        this._vectors2[p36] = p37;
        return this;
      }
      setVector3(p38, p39) {
        this._checkUniform(p38);
        this._vectors3[p38] = p39;
        return this;
      }
      setVector4(p40, p41) {
        this._checkUniform(p40);
        this._vectors4[p40] = p41;
        return this;
      }
      setQuaternion(p42, p43) {
        this._checkUniform(p42);
        this._quaternions[p42] = p43;
        return this;
      }
      setQuaternionArray(p44, p45) {
        this._checkUniform(p44);
        this._quaternionsArrays[p44] = p45.reduce((p46, p47) => {
          p47.toArray(p46, p46.length);
          return p46;
        }, []);
        return this;
      }
      setMatrix(p48, p49) {
        this._checkUniform(p48);
        this._matrices[p48] = p49;
        return this;
      }
      setMatrices(p50, p51) {
        this._checkUniform(p50);
        const v3 = new Float32Array(p51.length * 16);
        for (let vLN0 = 0; vLN0 < p51.length; vLN0++) {
          p51[vLN0].copyToArray(v3, vLN0 * 16);
        }
        this._matrixArrays[p50] = v3;
        return this;
      }
      setMatrix3x3(p52, p53) {
        this._checkUniform(p52);
        this._matrices3x3[p52] = p53;
        return this;
      }
      setMatrix2x2(p54, p55) {
        this._checkUniform(p54);
        this._matrices2x2[p54] = p55;
        return this;
      }
      setArray2(p56, p57) {
        this._checkUniform(p56);
        this._vectors2Arrays[p56] = p57;
        return this;
      }
      setArray3(p58, p59) {
        this._checkUniform(p58);
        this._vectors3Arrays[p58] = p59;
        return this;
      }
      setArray4(p60, p61) {
        this._checkUniform(p60);
        this._vectors4Arrays[p60] = p61;
        return this;
      }
      setUniformBuffer(p62, p63) {
        if (this._options.uniformBuffers.indexOf(p62) === -1) {
          this._options.uniformBuffers.push(p62);
        }
        this._uniformBuffers[p62] = p63;
        return this;
      }
      setTextureSampler(p64, p65) {
        if (this._options.samplerObjects.indexOf(p64) === -1) {
          this._options.samplerObjects.push(p64);
        }
        this._textureSamplers[p64] = p65;
        return this;
      }
      setStorageBuffer(p66, p67) {
        if (this._options.storageBuffers.indexOf(p66) === -1) {
          this._options.storageBuffers.push(p66);
        }
        this._storageBuffers[p66] = p67;
        return this;
      }
      setDefine(p68, p69) {
        const v4 = p68.trimEnd() + " ";
        const v5 = this.options.defines.findIndex(p70 => p70 === p68 || p70.startsWith(v4));
        if (v5 >= 0) {
          this.options.defines.splice(v5, 1);
        }
        if (typeof p69 !== "boolean" || p69) {
          this.options.defines.push(v4 + p69);
        }
        return this;
      }
      isReadyForSubMesh(p71, p72, p73) {
        return this.isReady(p71, p73, p72);
      }
      isReady(p74, p75, p76) {
        var v6;
        const v7 = p76 && this._storeEffectOnSubMeshes;
        if (this.isFrozen) {
          const v8 = v7 ? p76._drawWrapper : this._drawWrapper;
          if (v8.effect && v8._wasPreviouslyReady && v8._wasPreviouslyUsingInstances === p75) {
            return true;
          }
        }
        const v9 = this.YL();
        const v10 = v9.getEngine();
        const vA = [];
        const vA2 = [];
        let v11 = null;
        let v12 = this._shaderPath;
        let v13 = this._options.uniforms;
        let v14 = this._options.uniformBuffers;
        let v15 = this._options.samplers;
        if (v10.getCaps().multiview && v9.activeCamera && v9.activeCamera.outputRenderTarget && v9.activeCamera.outputRenderTarget.getViewCount() > 1) {
          this._multiview = true;
          vA.push("#define MULTIVIEW");
          if (v13.indexOf("viewProjection") !== -1 && v13.indexOf("viewProjectionR") === -1) {
            v13.push("viewProjectionR");
          }
        }
        for (let vLN02 = 0; vLN02 < this._options.defines.length; vLN02++) {
          const v16 = this._options.defines[vLN02].indexOf("#define") === 0 ? this._options.defines[vLN02] : `#define ${this._options.defines[vLN02]}`;
          vA.push(v16);
        }
        for (let vLN03 = 0; vLN03 < this._options.attributes.length; vLN03++) {
          vA2.push(this._options.attributes[vLN03]);
        }
        if (p74 && p74.isVerticesDataPresent(vP35.e.ColorKind)) {
          if (vA2.indexOf(vP35.e.ColorKind) === -1) {
            vA2.push(vP35.e.ColorKind);
          }
          vA.push("#define VERTEXCOLOR");
        }
        if (p75) {
          vA.push("#define INSTANCES");
          (0, vP313.fb)(vA2, this._materialHelperNeedsPreviousMatrices);
          if (p74 !== null && p74 !== undefined && p74.hasThinInstances) {
            vA.push("#define THIN_INSTANCES");
            if (p74 && p74.isVerticesDataPresent(vP35.e.ColorInstanceKind)) {
              vA2.push(vP35.e.ColorInstanceKind);
              vA.push("#define INSTANCESCOLOR");
            }
          }
        }
        if (p74 && p74.useBones && p74.computeBonesUsingShaders && p74.skeleton) {
          vA2.push(vP35.e.MatricesIndicesKind);
          vA2.push(vP35.e.MatricesWeightsKind);
          if (p74.numBoneInfluencers > 4) {
            vA2.push(vP35.e.MatricesIndicesExtraKind);
            vA2.push(vP35.e.MatricesWeightsExtraKind);
          }
          const v17 = p74.skeleton;
          vA.push("#define NUM_BONE_INFLUENCERS " + p74.numBoneInfluencers);
          v11 = new vP38.c();
          v11.addCPUSkinningFallback(0, p74);
          if (v17.isUsingTextureForMatrices) {
            vA.push("#define BONETEXTURE");
            if (v13.indexOf("boneTextureWidth") === -1) {
              v13.push("boneTextureWidth");
            }
            if (this._options.samplers.indexOf("boneSampler") === -1) {
              this._options.samplers.push("boneSampler");
            }
          } else {
            vA.push("#define BonesPerMesh " + (v17.bones.length + 1));
            if (v13.indexOf("mBones") === -1) {
              v13.push("mBones");
            }
          }
        } else {
          vA.push("#define NUM_BONE_INFLUENCERS 0");
        }
        let vLN04 = 0;
        const v18 = p74 ? p74.morphTargetManager : null;
        if (v18) {
          const v19 = vA.indexOf("#define UV1") !== -1;
          const v20 = vA.indexOf("#define UV2") !== -1;
          const v21 = vA.indexOf("#define TANGENT") !== -1;
          const v22 = vA.indexOf("#define NORMAL") !== -1;
          const v23 = vA.indexOf("#define VERTEXCOLOR") !== -1;
          vLN04 = (0, vP313.G)(v18, vA, vA2, p74, true, v22, v21, v19, v20, v23);
          if (v18.isUsingTextureForTargets) {
            if (v13.indexOf("morphTargetTextureIndices") === -1) {
              v13.push("morphTargetTextureIndices");
            }
            if (this._options.samplers.indexOf("morphTargets") === -1) {
              this._options.samplers.push("morphTargets");
            }
          }
          if (vLN04 > 0) {
            v13 = v13.slice();
            v13.push("morphTargetInfluences");
            v13.push("morphTargetCount");
            v13.push("morphTargetTextureInfo");
            v13.push("morphTargetTextureIndices");
          }
        } else {
          vA.push("#define NUM_MORPH_INFLUENCERS 0");
        }
        if (p74) {
          const v24 = p74.bakedVertexAnimationManager;
          if (v24 && v24.isEnabled) {
            vA.push("#define BAKED_VERTEX_ANIMATION_TEXTURE");
            if (v13.indexOf("bakedVertexAnimationSettings") === -1) {
              v13.push("bakedVertexAnimationSettings");
            }
            if (v13.indexOf("bakedVertexAnimationTextureSizeInverted") === -1) {
              v13.push("bakedVertexAnimationTextureSizeInverted");
            }
            if (v13.indexOf("bakedVertexAnimationTime") === -1) {
              v13.push("bakedVertexAnimationTime");
            }
            if (this._options.samplers.indexOf("bakedVertexAnimationTexture") === -1) {
              this._options.samplers.push("bakedVertexAnimationTexture");
            }
          }
          (0, vP313.w)(vA2, p74, vA);
        }
        for (const v25 in this._textures) {
          if (!this._textures[v25].isReady()) {
            return false;
          }
        }
        if (p74 && this.needAlphaTestingForMesh(p74)) {
          vA.push("#define ALPHATEST");
        }
        if (this._options.useClipPlane !== false) {
          (0, vP312.e)(v13);
          (0, vP312.j)(this, v9, vA);
        }
        if (v9.fogEnabled && p74 !== null && p74 !== undefined && p74.applyFog && v9.fogMode !== vP33.e.FOGMODE_NONE) {
          vA.push("#define FOG");
          if (v13.indexOf("view") === -1) {
            v13.push("view");
          }
          if (v13.indexOf("vFogInfos") === -1) {
            v13.push("vFogInfos");
          }
          if (v13.indexOf("vFogColor") === -1) {
            v13.push("vFogColor");
          }
        }
        if (this._useLogarithmicDepth) {
          vA.push("#define LOGARITHMICDEPTH");
          if (v13.indexOf("logarithmicDepthConstant") === -1) {
            v13.push("logarithmicDepthConstant");
          }
        }
        if (this.customShaderNameResolve) {
          v13 = v13.slice();
          v14 = v14.slice();
          v15 = v15.slice();
          v12 = this.customShaderNameResolve(this.name, v13, v14, v15, vA, vA2);
        }
        const v26 = v7 ? p76._getDrawWrapper(undefined, true) : this._drawWrapper;
        const v27 = v26?.effect ?? null;
        const v28 = v26?.defines ?? null;
        const v29 = vA.join("\n");
        let vV27 = v27;
        if (v28 !== v29) {
          vV27 = v10.createEffect(v12, {
            attributes: vA2,
            uniformsNames: v13,
            uniformBuffersNames: v14,
            samplers: v15,
            defines: v29,
            fallbacks: v11,
            onCompiled: this.onCompiled,
            onError: this.onError,
            indexParameters: {
              maxSimultaneousMorphTargets: vLN04
            },
            shaderLanguage: this._options.shaderLanguage,
            extraInitializationsAsync: this._options.extraInitializationsAsync
          }, v10);
          if (v7) {
            p76.setEffect(vV27, v29, this._materialContext);
          } else if (v26) {
            v26.setEffect(vV27, v29);
          }
          if (this._onEffectCreatedObservable) {
            vO.effect = vV27;
            vO.subMesh = p76 ?? (p74 === null || p74 === undefined ? undefined : p74.wf[0]) ?? null;
            this._onEffectCreatedObservable.notifyObservers(vO);
          }
        }
        v26._wasPreviouslyUsingInstances = !!p75;
        return (v6 = vV27) !== null && v6 !== undefined && !!v6.isReady() && (v27 !== vV27 && v9.resetCachedMaterial(), v26._wasPreviouslyReady = true, true);
      }
      bindOnlyWorldMatrix(p77, p78) {
        const v30 = p78 ?? this.getEffect();
        if (!v30) {
          return;
        }
        const v31 = this._options.uniforms;
        if (v31.indexOf("world") !== -1) {
          v30.setMatrix("world", p77);
        }
        const v32 = this.YL();
        if (v31.indexOf("worldView") !== -1) {
          p77.multiplyToRef(v32.getViewMatrix(), this._cachedWorldViewMatrix);
          v30.setMatrix("worldView", this._cachedWorldViewMatrix);
        }
        if (v31.indexOf("worldViewProjection") !== -1) {
          p77.multiplyToRef(v32.getTransformMatrix(), this._cachedWorldViewProjectionMatrix);
          v30.setMatrix("worldViewProjection", this._cachedWorldViewProjectionMatrix);
        }
        if (v31.indexOf("view") !== -1) {
          v30.setMatrix("view", v32.getViewMatrix());
        }
      }
      bindForSubMesh(p79, p80, p81) {
        this.bind(p79, p80, p81._drawWrapperOverride?.effect, p81);
      }
      bind(p82, p83, p84, p85) {
        const v33 = p85 && this._storeEffectOnSubMeshes;
        const v34 = p84 ?? (v33 ? p85.effect : this.getEffect());
        if (!v34) {
          return;
        }
        const v35 = this.YL();
        this._activeEffect = v34;
        this.bindOnlyWorldMatrix(p82, p84);
        const v36 = this._options.uniformBuffers;
        let v37 = false;
        if (v34 && v36 && v36.length > 0 && v35.getEngine().supportsUniformBuffers) {
          for (let vLN05 = 0; vLN05 < v36.length; ++vLN05) {
            switch (v36[vLN05]) {
              case "Mesh":
                if (p83) {
                  p83.getMeshUniformBuffer().bindToEffect(v34, "Mesh");
                  p83.transferToEffect(p82);
                }
                break;
              case "Scene":
                (0, vP313.s)(v34, v35.getSceneUniformBuffer());
                v35.finalizeSceneUbo();
                v37 = true;
            }
          }
        }
        const v38 = p83 && v33 ? this._mustRebind(v35, v34, p85, p83.visibility) : v35.getCachedMaterial() !== this;
        if (v34 && v38) {
          let v39;
          if (!v37 && this._options.uniforms.indexOf("view") !== -1) {
            v34.setMatrix("view", v35.getViewMatrix());
          }
          if (!v37 && this._options.uniforms.indexOf("projection") !== -1) {
            v34.setMatrix("projection", v35.getProjectionMatrix());
          }
          if (!v37 && this._options.uniforms.indexOf("viewProjection") !== -1) {
            v34.setMatrix("viewProjection", v35.getTransformMatrix());
            if (this._multiview) {
              v34.setMatrix("viewProjectionR", v35._transformMatrixR);
            }
          }
          if (v35.activeCamera && this._options.uniforms.indexOf("cameraPosition") !== -1) {
            v34.setVector3("cameraPosition", v35.activeCamera.globalPosition);
          }
          (0, vP313.d)(p83, v34);
          (0, vP312.g)(v34, this, v35);
          if (this._useLogarithmicDepth) {
            (0, vP313.l)(v33 ? p85.materialDefines : v34.defines, v34, v35);
          }
          if (p83) {
            (0, vP313.e)(v35, p83, v34);
          }
          for (v39 in this._textures) {
            v34.setTexture(v39, this._textures[v39]);
          }
          for (v39 in this._textureArrays) {
            v34.setTextureArray(v39, this._textureArrays[v39]);
          }
          for (v39 in this._ints) {
            v34.setInt(v39, this._ints[v39]);
          }
          for (v39 in this._uints) {
            v34.setUInt(v39, this._uints[v39]);
          }
          for (v39 in this._floats) {
            v34.setFloat(v39, this._floats[v39]);
          }
          for (v39 in this._floatsArrays) {
            v34.setArray(v39, this._floatsArrays[v39]);
          }
          for (v39 in this._colors3) {
            v34.setColor3(v39, this._colors3[v39]);
          }
          for (v39 in this._colors3Arrays) {
            v34.setArray3(v39, this._colors3Arrays[v39]);
          }
          for (v39 in this._colors4) {
            const v40 = this._colors4[v39];
            v34.setFloat4(v39, v40.r, v40.g, v40.b, v40.a);
          }
          for (v39 in this._colors4Arrays) {
            v34.setArray4(v39, this._colors4Arrays[v39]);
          }
          for (v39 in this._vectors2) {
            v34.setVector2(v39, this._vectors2[v39]);
          }
          for (v39 in this._vectors3) {
            v34.setVector3(v39, this._vectors3[v39]);
          }
          for (v39 in this._vectors4) {
            v34.setVector4(v39, this._vectors4[v39]);
          }
          for (v39 in this._quaternions) {
            v34.setQuaternion(v39, this._quaternions[v39]);
          }
          for (v39 in this._matrices) {
            v34.setMatrix(v39, this._matrices[v39]);
          }
          for (v39 in this._matrixArrays) {
            v34.setMatrices(v39, this._matrixArrays[v39]);
          }
          for (v39 in this._matrices3x3) {
            v34.setMatrix3x3(v39, this._matrices3x3[v39]);
          }
          for (v39 in this._matrices2x2) {
            v34.setMatrix2x2(v39, this._matrices2x2[v39]);
          }
          for (v39 in this._vectors2Arrays) {
            v34.setArray2(v39, this._vectors2Arrays[v39]);
          }
          for (v39 in this._vectors3Arrays) {
            v34.setArray3(v39, this._vectors3Arrays[v39]);
          }
          for (v39 in this._vectors4Arrays) {
            v34.setArray4(v39, this._vectors4Arrays[v39]);
          }
          for (v39 in this._quaternionsArrays) {
            v34.setArray4(v39, this._quaternionsArrays[v39]);
          }
          for (v39 in this._uniformBuffers) {
            const v41 = this._uniformBuffers[v39].getBuffer();
            if (v41) {
              v34.bindUniformBuffer(v41, v39);
            }
          }
          const v42 = v35.getEngine();
          const v43 = v42.setExternalTexture;
          if (v43) {
            for (v39 in this._externalTextures) {
              v43.call(v42, v39, this._externalTextures[v39]);
            }
          }
          const v44 = v42.setTextureSampler;
          if (v44) {
            for (v39 in this._textureSamplers) {
              v44.call(v42, v39, this._textureSamplers[v39]);
            }
          }
          const v45 = v42.setStorageBuffer;
          if (v45) {
            for (v39 in this._storageBuffers) {
              v45.call(v42, v39, this._storageBuffers[v39]);
            }
          }
        }
        if (v34 && p83 && (v38 || !this.isFrozen)) {
          (0, vP313.o)(p83, v34);
          if (p83.morphTargetManager && p83.morphTargetManager.isUsingTextureForTargets) {
            p83.morphTargetManager._bind(v34);
          }
          const v46 = p83.bakedVertexAnimationManager;
          if (v46 && v46.isEnabled) {
            var v47;
            const v48 = v33 ? p85._drawWrapper : this._drawWrapper;
            if ((v47 = p83.bakedVertexAnimationManager) !== null && v47 !== undefined) {
              v47.bind(v34, !!v48._wasPreviouslyUsingInstances);
            }
          }
        }
        this._afterBind(p83, v34, p85);
      }
      getActiveTextures() {
        const v49 = super.getActiveTextures();
        for (const v50 in this._textures) {
          v49.push(this._textures[v50]);
        }
        for (const v51 in this._textureArrays) {
          const v52 = this._textureArrays[v51];
          for (let vLN06 = 0; vLN06 < v52.length; vLN06++) {
            v49.push(v52[vLN06]);
          }
        }
        return v49;
      }
      hasTexture(p86) {
        if (super.hasTexture(p86)) {
          return true;
        }
        for (const v53 in this._textures) {
          if (this._textures[v53] === p86) {
            return true;
          }
        }
        for (const v54 in this._textureArrays) {
          const v55 = this._textureArrays[v54];
          for (let vLN07 = 0; vLN07 < v55.length; vLN07++) {
            if (v55[vLN07] === p86) {
              return true;
            }
          }
        }
        return false;
      }
      clone(p87) {
        const v56 = vP32.b.Clone(() => new C(p87, this.YL(), this._shaderPath, this._options, this._storeEffectOnSubMeshes), this);
        v56.name = p87;
        v56.id = p87;
        if (typeof v56._shaderPath === "object") {
          v56._shaderPath = (0, vP3.d)({}, v56._shaderPath);
        }
        this._options = (0, vP3.d)({}, this._options);
        const v57 = Object.keys(this._options);
        for (const v58 of v57) {
          const v59 = this._options[v58];
          if (Array.isArray(v59)) {
            this._options[v58] = v59.slice(0);
          }
        }
        this.Lf.copyTo(v56.Lf);
        for (const v60 in this._textures) {
          v56.setTexture(v60, this._textures[v60]);
        }
        for (const v61 in this._textureArrays) {
          v56.setTextureArray(v61, this._textureArrays[v61]);
        }
        for (const v62 in this._externalTextures) {
          v56.setExternalTexture(v62, this._externalTextures[v62]);
        }
        for (const v63 in this._ints) {
          v56.setInt(v63, this._ints[v63]);
        }
        for (const v64 in this._uints) {
          v56.setUInt(v64, this._uints[v64]);
        }
        for (const v65 in this._floats) {
          v56.setFloat(v65, this._floats[v65]);
        }
        for (const v66 in this._floatsArrays) {
          v56.setFloats(v66, this._floatsArrays[v66]);
        }
        for (const v67 in this._colors3) {
          v56.setColor3(v67, this._colors3[v67]);
        }
        for (const v68 in this._colors3Arrays) {
          v56._colors3Arrays[v68] = this._colors3Arrays[v68];
        }
        for (const v69 in this._colors4) {
          v56.setColor4(v69, this._colors4[v69]);
        }
        for (const v70 in this._colors4Arrays) {
          v56._colors4Arrays[v70] = this._colors4Arrays[v70];
        }
        for (const v71 in this._vectors2) {
          v56.setVector2(v71, this._vectors2[v71]);
        }
        for (const v72 in this._vectors3) {
          v56.setVector3(v72, this._vectors3[v72]);
        }
        for (const v73 in this._vectors4) {
          v56.setVector4(v73, this._vectors4[v73]);
        }
        for (const v74 in this._quaternions) {
          v56.setQuaternion(v74, this._quaternions[v74]);
        }
        for (const v75 in this._quaternionsArrays) {
          v56._quaternionsArrays[v75] = this._quaternionsArrays[v75];
        }
        for (const v76 in this._matrices) {
          v56.setMatrix(v76, this._matrices[v76]);
        }
        for (const v77 in this._matrixArrays) {
          v56._matrixArrays[v77] = this._matrixArrays[v77].slice();
        }
        for (const v78 in this._matrices3x3) {
          v56.setMatrix3x3(v78, this._matrices3x3[v78]);
        }
        for (const v79 in this._matrices2x2) {
          v56.setMatrix2x2(v79, this._matrices2x2[v79]);
        }
        for (const v80 in this._vectors2Arrays) {
          v56.setArray2(v80, this._vectors2Arrays[v80]);
        }
        for (const v81 in this._vectors3Arrays) {
          v56.setArray3(v81, this._vectors3Arrays[v81]);
        }
        for (const v82 in this._vectors4Arrays) {
          v56.setArray4(v82, this._vectors4Arrays[v82]);
        }
        for (const v83 in this._uniformBuffers) {
          v56.setUniformBuffer(v83, this._uniformBuffers[v83]);
        }
        for (const v84 in this._textureSamplers) {
          v56.setTextureSampler(v84, this._textureSamplers[v84]);
        }
        for (const v85 in this._storageBuffers) {
          v56.setStorageBuffer(v85, this._storageBuffers[v85]);
        }
        return v56;
      }
      dispose(p88, p89, p90) {
        if (p89) {
          let v86;
          for (v86 in this._textures) {
            this._textures[v86].dispose();
          }
          for (v86 in this._textureArrays) {
            const v87 = this._textureArrays[v86];
            for (let vLN08 = 0; vLN08 < v87.length; vLN08++) {
              v87[vLN08].dispose();
            }
          }
        }
        this._textures = {};
        super.dispose(p88, p89, p90);
      }
      serialize() {
        const v88 = vP32.b.Serialize(this);
        let v89;
        v88.customType = "BABYLON.ShaderMaterial";
        v88.uniqueId = this.uniqueId;
        v88.options = this._options;
        v88.shaderPath = this._shaderPath;
        v88.storeEffectOnSubMeshes = this._storeEffectOnSubMeshes;
        v88.Lf = this.Lf.serialize();
        v88.textures = {};
        for (v89 in this._textures) {
          v88.textures[v89] = this._textures[v89].serialize();
        }
        v88.textureArrays = {};
        for (v89 in this._textureArrays) {
          v88.textureArrays[v89] = [];
          const v90 = this._textureArrays[v89];
          for (let vLN09 = 0; vLN09 < v90.length; vLN09++) {
            v88.textureArrays[v89].push(v90[vLN09].serialize());
          }
        }
        v88.ints = {};
        for (v89 in this._ints) {
          v88.ints[v89] = this._ints[v89];
        }
        v88.uints = {};
        for (v89 in this._uints) {
          v88.uints[v89] = this._uints[v89];
        }
        v88.floats = {};
        for (v89 in this._floats) {
          v88.floats[v89] = this._floats[v89];
        }
        v88.floatsArrays = {};
        for (v89 in this._floatsArrays) {
          v88.floatsArrays[v89] = this._floatsArrays[v89];
        }
        v88.colors3 = {};
        for (v89 in this._colors3) {
          const v91 = this._colors3[v89];
          v88.colors3[v89] = [v91.r, v91.g, v91.b];
        }
        v88.colors3Arrays = {};
        for (v89 in this._colors3Arrays) {
          v88.colors3Arrays[v89] = this._colors3Arrays[v89];
        }
        v88.colors4 = {};
        for (v89 in this._colors4) {
          const v92 = this._colors4[v89];
          v88.colors4[v89] = [v92.r, v92.g, v92.b, v92.a];
        }
        v88.colors4Arrays = {};
        for (v89 in this._colors4Arrays) {
          v88.colors4Arrays[v89] = this._colors4Arrays[v89];
        }
        v88.vectors2 = {};
        for (v89 in this._vectors2) {
          const v93 = this._vectors2[v89];
          v88.vectors2[v89] = [v93.x, v93.y];
        }
        v88.vectors3 = {};
        for (v89 in this._vectors3) {
          const v94 = this._vectors3[v89];
          v88.vectors3[v89] = [v94.x, v94.y, v94.z];
        }
        v88.vectors4 = {};
        for (v89 in this._vectors4) {
          const v95 = this._vectors4[v89];
          v88.vectors4[v89] = [v95.x, v95.y, v95.z, v95.w];
        }
        v88.quaternions = {};
        for (v89 in this._quaternions) {
          v88.quaternions[v89] = this._quaternions[v89].cf();
        }
        v88.matrices = {};
        for (v89 in this._matrices) {
          v88.matrices[v89] = this._matrices[v89].cf();
        }
        v88.matrixArray = {};
        for (v89 in this._matrixArrays) {
          v88.matrixArray[v89] = this._matrixArrays[v89];
        }
        v88.matrices3x3 = {};
        for (v89 in this._matrices3x3) {
          v88.matrices3x3[v89] = this._matrices3x3[v89];
        }
        v88.matrices2x2 = {};
        for (v89 in this._matrices2x2) {
          v88.matrices2x2[v89] = this._matrices2x2[v89];
        }
        v88.vectors2Arrays = {};
        for (v89 in this._vectors2Arrays) {
          v88.vectors2Arrays[v89] = this._vectors2Arrays[v89];
        }
        v88.vectors3Arrays = {};
        for (v89 in this._vectors3Arrays) {
          v88.vectors3Arrays[v89] = this._vectors3Arrays[v89];
        }
        v88.vectors4Arrays = {};
        for (v89 in this._vectors4Arrays) {
          v88.vectors4Arrays[v89] = this._vectors4Arrays[v89];
        }
        v88.quaternionsArrays = {};
        for (v89 in this._quaternionsArrays) {
          v88.quaternionsArrays[v89] = this._quaternionsArrays[v89];
        }
        return v88;
      }
      static Parse(p91, p92, p93) {
        const v96 = vP32.b.Parse(() => new C(p91.name, p92, p91.shaderPath, p91.options, p91.storeEffectOnSubMeshes), p91, p92, p93);
        let v97;
        if (p91.Lf) {
          v96.Lf.parse(p91.Lf, p92, p93);
        }
        for (v97 in p91.textures) {
          v96.setTexture(v97, vP36.c.Parse(p91.textures[v97], p92, p93));
        }
        for (v97 in p91.textureArrays) {
          const v98 = p91.textureArrays[v97];
          const vA3 = [];
          for (let vLN010 = 0; vLN010 < v98.length; vLN010++) {
            vA3.push(vP36.c.Parse(v98[vLN010], p92, p93));
          }
          v96.setTextureArray(v97, vA3);
        }
        for (v97 in p91.ints) {
          v96.setInt(v97, p91.ints[v97]);
        }
        for (v97 in p91.uints) {
          v96.setUInt(v97, p91.uints[v97]);
        }
        for (v97 in p91.floats) {
          v96.setFloat(v97, p91.floats[v97]);
        }
        for (v97 in p91.floatsArrays) {
          v96.setFloats(v97, p91.floatsArrays[v97]);
        }
        for (v97 in p91.colors3) {
          const v99 = p91.colors3[v97];
          v96.setColor3(v97, {
            r: v99[0],
            g: v99[1],
            b: v99[2]
          });
        }
        for (v97 in p91.colors3Arrays) {
          const v100 = p91.colors3Arrays[v97].reduce((p94, p95, p96) => {
            if (p96 % 3 === 0) {
              p94.push([p95]);
            } else {
              p94[p94.length - 1].push(p95);
            }
            return p94;
          }, []).map(p97 => ({
            r: p97[0],
            g: p97[1],
            b: p97[2]
          }));
          v96.setColor3Array(v97, v100);
        }
        for (v97 in p91.colors4) {
          const v101 = p91.colors4[v97];
          v96.setColor4(v97, {
            r: v101[0],
            g: v101[1],
            b: v101[2],
            a: v101[3]
          });
        }
        for (v97 in p91.colors4Arrays) {
          const v102 = p91.colors4Arrays[v97].reduce((p98, p99, p100) => {
            if (p100 % 4 === 0) {
              p98.push([p99]);
            } else {
              p98[p98.length - 1].push(p99);
            }
            return p98;
          }, []).map(p101 => ({
            r: p101[0],
            g: p101[1],
            b: p101[2],
            a: p101[3]
          }));
          v96.setColor4Array(v97, v102);
        }
        for (v97 in p91.vectors2) {
          const v103 = p91.vectors2[v97];
          v96.setVector2(v97, {
            x: v103[0],
            y: v103[1]
          });
        }
        for (v97 in p91.vectors3) {
          const v104 = p91.vectors3[v97];
          v96.setVector3(v97, {
            x: v104[0],
            y: v104[1],
            z: v104[2]
          });
        }
        for (v97 in p91.vectors4) {
          const v105 = p91.vectors4[v97];
          v96.setVector4(v97, {
            x: v105[0],
            y: v105[1],
            z: v105[2],
            w: v105[3]
          });
        }
        for (v97 in p91.quaternions) {
          v96.setQuaternion(v97, vP34.Quaternion.OL(p91.quaternions[v97]));
        }
        for (v97 in p91.matrices) {
          v96.setMatrix(v97, vP34.Matrix.OL(p91.matrices[v97]));
        }
        for (v97 in p91.matrixArray) {
          v96._matrixArrays[v97] = new Float32Array(p91.matrixArray[v97]);
        }
        for (v97 in p91.matrices3x3) {
          v96.setMatrix3x3(v97, p91.matrices3x3[v97]);
        }
        for (v97 in p91.matrices2x2) {
          v96.setMatrix2x2(v97, p91.matrices2x2[v97]);
        }
        for (v97 in p91.vectors2Arrays) {
          v96.setArray2(v97, p91.vectors2Arrays[v97]);
        }
        for (v97 in p91.vectors3Arrays) {
          v96.setArray3(v97, p91.vectors3Arrays[v97]);
        }
        for (v97 in p91.vectors4Arrays) {
          v96.setArray4(v97, p91.vectors4Arrays[v97]);
        }
        for (v97 in p91.quaternionsArrays) {
          v96.setArray4(v97, p91.quaternionsArrays[v97]);
        }
        return v96;
      }
      static async ParseFromFileAsync(p102, p103, p104, fC = "") {
        return await new Promise((p105, p106) => {
          const v106 = new vP39.d();
          v106.addEventListener("readystatechange", () => {
            if (v106.readyState == 4) {
              if (v106.status == 200) {
                const v107 = JSON.parse(v106.responseText);
                const v108 = this.Parse(v107, p104 || vP311.b.LastCreatedScene, fC);
                if (p102) {
                  v108.name = p102;
                }
                p105(v108);
              } else {
                p106("Unable to load the ShaderMaterial");
              }
            }
          });
          v106.open("GET", p103);
          v106.send();
        });
      }
      static async ParseFromSnippetAsync(p107, p108, IC = "") {
        return await new Promise((p109, p110) => {
          const v109 = new vP39.d();
          v109.addEventListener("readystatechange", () => {
            if (v109.readyState == 4) {
              if (v109.status == 200) {
                const v110 = JSON.parse(JSON.parse(v109.responseText).jsonPayload);
                const v111 = JSON.parse(v110.shaderMaterial);
                const v112 = this.Parse(v111, p108 || vP311.b.LastCreatedScene, IC);
                v112.snippetId = p107;
                p109(v112);
              } else {
                p110("Unable to load the snippet " + p107);
              }
            }
          });
          v109.open("GET", this.SnippetUrl + "/" + p107.replace(/#/g, "/"));
          v109.send();
        });
      }
    }
    C.SnippetUrl = "https://snippet.babylonjs.com";
    C.CreateFromSnippetAsync = C.ParseFromSnippetAsync;
    (0, vP37.g)("BABYLON.ShaderMaterial", C);
  }
};
//# sourceMappingURL=pz8l4l.22.ad518601.chunk.js.map
//# debugId=15fcc02c-9415-52c6-b6ab-8f60772ae780