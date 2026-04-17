(function () {
  try {
    var v = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : {};
    var v2 = new v.Error().stack;
    if (v2) {
      v._sentryDebugIds = v._sentryDebugIds || {};
      v._sentryDebugIds[v2] = "c44067c1-4f59-5dd0-b42d-ad86244cde8d";
    }
  } catch (e2) {}
})();
export const id = 25;
export const ids = [25];
export const modules = {
  17357: (p, p2, p3) => {
    p3.d(p2, {
      b: () => C2
    });
    var vP3 = p3(16960);
    var vP32 = p3(17293);
    var vP33 = p3(16965);
    var vP34 = p3(17354);
    var vP35 = p3(17351);
    var vP36 = p3(17366);
    var vP37 = p3(17327);
    class C extends vP35.e {
      constructor() {
        super(...arguments);
        this.DETAIL = false;
        this.DETAILDIRECTUV = 0;
        this.DETAIL_NORMALBLENDMETHOD = 0;
      }
    }
    class C2 extends vP36.b {
      _markAllSubMeshesAsTexturesDirty() {
        this._enable(this._isEnabled);
        this._internalMarkAllSubMeshesAsTexturesDirty();
      }
      isCompatible() {
        return true;
      }
      constructor(p4) {
        let v3 = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
        super(p4, "DetailMap", 140, new C(), v3);
        this._texture = null;
        this.diffuseBlendLevel = 1;
        this.roughnessBlendLevel = 1;
        this.bumpLevel = 1;
        this._normalBlendMethod = vP32.e.MATERIAL_NORMALBLENDMETHOD_WHITEOUT;
        this._isEnabled = false;
        this.isEnabled = false;
        this._internalMarkAllSubMeshesAsTexturesDirty = p4._dirtyCallbacks[1];
      }
      isReadyForSubMesh(p5, p6, p7) {
        return !this._isEnabled || !p5._areTexturesDirty || !p6.texturesEnabled || !p7.getCaps().standardDerivatives || !this._texture || !vP34.e.DetailTextureEnabled || !!this._texture.isReady();
      }
      prepareDefines(p8, p9) {
        if (this._isEnabled) {
          p8.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod;
          const v4 = p9.getEngine();
          if (p8._areTexturesDirty) {
            if (v4.getCaps().standardDerivatives && this._texture && vP34.e.DetailTextureEnabled && this._isEnabled) {
              (0, vP37.R)(this._texture, p8, "DETAIL");
              p8.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod;
            } else {
              p8.DETAIL = false;
            }
          }
        } else {
          p8.DETAIL = false;
        }
      }
      bindForSubMesh(p10, p11) {
        if (!this._isEnabled) {
          return;
        }
        const v5 = this._material.isFrozen;
        if (!p10.useUbo || !v5 || !p10.isSync) {
          if (this._texture && vP34.e.DetailTextureEnabled) {
            p10.updateFloat4("vDetailInfos", this._texture.coordinatesIndex, this.diffuseBlendLevel, this.bumpLevel, this.roughnessBlendLevel);
            (0, vP37.u)(this._texture, p10, "detail");
          }
        }
        if (p11.texturesEnabled && this._texture && vP34.e.DetailTextureEnabled) {
          p10.setTexture("detailSampler", this._texture);
        }
      }
      hasTexture(p12) {
        return this._texture === p12;
      }
      getActiveTextures(p13) {
        if (this._texture) {
          p13.push(this._texture);
        }
      }
      getAnimatables(p14) {
        if (this._texture && this._texture.animations && this._texture.animations.length > 0) {
          p14.push(this._texture);
        }
      }
      dispose(p15) {
        var v6;
        if (p15) {
          if ((v6 = this._texture) !== null && v6 !== undefined) {
            v6.dispose();
          }
        }
      }
      getClassName() {
        return "DetailMapConfiguration";
      }
      getSamplers(p16) {
        p16.push("detailSampler");
      }
      getUniforms() {
        return {
          ubo: [{
            name: "vDetailInfos",
            size: 4,
            type: "vec4"
          }, {
            name: "detailMatrix",
            size: 16,
            type: "mat4"
          }]
        };
      }
    }
    (0, vP3.d)([(0, vP33.y)("detailTexture"), (0, vP33.e)("_markAllSubMeshesAsTexturesDirty")], C2.prototype, "texture", undefined);
    (0, vP3.d)([(0, vP33.F)()], C2.prototype, "diffuseBlendLevel", undefined);
    (0, vP3.d)([(0, vP33.F)()], C2.prototype, "roughnessBlendLevel", undefined);
    (0, vP3.d)([(0, vP33.F)()], C2.prototype, "bumpLevel", undefined);
    (0, vP3.d)([(0, vP33.F)(), (0, vP33.e)("_markAllSubMeshesAsTexturesDirty")], C2.prototype, "normalBlendMethod", undefined);
    (0, vP3.d)([(0, vP33.F)(), (0, vP33.e)("_markAllSubMeshesAsTexturesDirty")], C2.prototype, "isEnabled", undefined);
  },
  17351: (p17, p18, p19) => {
    p19.d(p18, {
      e: () => C3
    });
    class C3 {
      constructor(p20) {
        this._keys = [];
        this._isDirty = true;
        this._areLightsDirty = true;
        this._areLightsDisposed = false;
        this._areAttributesDirty = true;
        this._areTexturesDirty = true;
        this._areFresnelDirty = true;
        this._areMiscDirty = true;
        this._arePrePassDirty = true;
        this._areImageProcessingDirty = true;
        this._normals = false;
        this._uvs = false;
        this._needNormals = false;
        this._needUVs = false;
        this._externalProperties = p20;
        if (p20) {
          for (const v7 in p20) {
            if (Object.prototype.hasOwnProperty.call(p20, v7)) {
              this._setDefaultValue(v7);
            }
          }
        }
      }
      get isDirty() {
        return this._isDirty;
      }
      markAsProcessed() {
        this._isDirty = false;
        this._areAttributesDirty = false;
        this._areTexturesDirty = false;
        this._areFresnelDirty = false;
        this._areLightsDirty = false;
        this._areLightsDisposed = false;
        this._areMiscDirty = false;
        this._arePrePassDirty = false;
        this._areImageProcessingDirty = false;
      }
      markAsUnprocessed() {
        this._isDirty = true;
      }
      markAllAsDirty() {
        this._areTexturesDirty = true;
        this._areAttributesDirty = true;
        this._areLightsDirty = true;
        this._areFresnelDirty = true;
        this._areMiscDirty = true;
        this._arePrePassDirty = true;
        this._areImageProcessingDirty = true;
        this._isDirty = true;
      }
      markAsImageProcessingDirty() {
        this._areImageProcessingDirty = true;
        this._isDirty = true;
      }
      markAsLightDirty(CC = false) {
        this._areLightsDirty = true;
        this._areLightsDisposed = this._areLightsDisposed || CC;
        this._isDirty = true;
      }
      markAsAttributesDirty() {
        this._areAttributesDirty = true;
        this._isDirty = true;
      }
      markAsTexturesDirty() {
        this._areTexturesDirty = true;
        this._isDirty = true;
      }
      markAsFresnelDirty() {
        this._areFresnelDirty = true;
        this._isDirty = true;
      }
      markAsMiscDirty() {
        this._areMiscDirty = true;
        this._isDirty = true;
      }
      markAsPrePassDirty() {
        this._arePrePassDirty = true;
        this._isDirty = true;
      }
      rebuild() {
        this._keys.length = 0;
        for (const v8 of Object.keys(this)) {
          if (v8[0] !== "_") {
            this._keys.push(v8);
          }
        }
        if (this._externalProperties) {
          for (const v9 in this._externalProperties) {
            if (this._keys.indexOf(v9) === -1) {
              this._keys.push(v9);
            }
          }
        }
      }
      isEqual(p21) {
        if (this._keys.length !== p21._keys.length) {
          return false;
        }
        for (let vLN0 = 0; vLN0 < this._keys.length; vLN0++) {
          const v10 = this._keys[vLN0];
          if (this[v10] !== p21[v10]) {
            return false;
          }
        }
        return true;
      }
      cloneTo(p22) {
        if (this._keys.length !== p22._keys.length) {
          p22._keys = this._keys.slice(0);
        }
        for (let vLN02 = 0; vLN02 < this._keys.length; vLN02++) {
          const v11 = this._keys[vLN02];
          p22[v11] = this[v11];
        }
      }
      reset() {
        for (const v12 of this._keys) {
          this._setDefaultValue(v12);
        }
      }
      _setDefaultValue(p23) {
        var v13;
        var v14;
        var v15;
        var v16;
        const v17 = ((v13 = this._externalProperties) === null || v13 === undefined || (v14 = v13[p23]) === null || v14 === undefined ? undefined : v14.type) ?? typeof this[p23];
        const v18 = (v15 = this._externalProperties) === null || v15 === undefined || (v16 = v15[p23]) === null || v16 === undefined ? undefined : v16.default;
        switch (v17) {
          case "number":
            this[p23] = v18 ?? 0;
            break;
          case "string":
            this[p23] = v18 ?? "";
            break;
          default:
            this[p23] = v18 !== null && v18 !== undefined && v18;
        }
      }
      toString() {
        let vLS = "";
        for (let vLN03 = 0; vLN03 < this._keys.length; vLN03++) {
          const v19 = this._keys[vLN03];
          const v20 = this[v19];
          switch (typeof v20) {
            case "number":
            case "string":
              vLS += "#define " + v19 + " " + v20 + "\n";
              break;
            default:
              if (v20) {
                vLS += "#define " + v19 + "\n";
              }
          }
        }
        return vLS;
      }
    }
  },
  17354: (p24, p25, p26) => {
    p26.d(p25, {
      e: () => C4
    });
    var vP26 = p26(16876);
    class C4 {
      static get DiffuseTextureEnabled() {
        return this._DiffuseTextureEnabled;
      }
      static set DiffuseTextureEnabled(p27) {
        if (this._DiffuseTextureEnabled !== p27) {
          this._DiffuseTextureEnabled = p27;
          vP26.b.MarkAllMaterialsAsDirty(1);
        }
      }
      static get BaseWeightTextureEnabled() {
        return this._BaseWeightTextureEnabled;
      }
      static set BaseWeightTextureEnabled(p28) {
        if (this._BaseWeightTextureEnabled !== p28) {
          this._BaseWeightTextureEnabled = p28;
          vP26.b.MarkAllMaterialsAsDirty(1);
        }
      }
      static get BaseDiffuseRoughnessTextureEnabled() {
        return this._BaseDiffuseRoughnessTextureEnabled;
      }
      static set BaseDiffuseRoughnessTextureEnabled(p29) {
        if (this._BaseDiffuseRoughnessTextureEnabled !== p29) {
          this._BaseDiffuseRoughnessTextureEnabled = p29;
          vP26.b.MarkAllMaterialsAsDirty(1);
        }
      }
      static get DetailTextureEnabled() {
        return this._DetailTextureEnabled;
      }
      static set DetailTextureEnabled(p30) {
        if (this._DetailTextureEnabled !== p30) {
          this._DetailTextureEnabled = p30;
          vP26.b.MarkAllMaterialsAsDirty(1);
        }
      }
      static get DecalMapEnabled() {
        return this._DecalMapEnabled;
      }
      static set DecalMapEnabled(p31) {
        if (this._DecalMapEnabled !== p31) {
          this._DecalMapEnabled = p31;
          vP26.b.MarkAllMaterialsAsDirty(1);
        }
      }
      static get AmbientTextureEnabled() {
        return this._AmbientTextureEnabled;
      }
      static set AmbientTextureEnabled(p32) {
        if (this._AmbientTextureEnabled !== p32) {
          this._AmbientTextureEnabled = p32;
          vP26.b.MarkAllMaterialsAsDirty(1);
        }
      }
      static get OpacityTextureEnabled() {
        return this._OpacityTextureEnabled;
      }
      static set OpacityTextureEnabled(p33) {
        if (this._OpacityTextureEnabled !== p33) {
          this._OpacityTextureEnabled = p33;
          vP26.b.MarkAllMaterialsAsDirty(1);
        }
      }
      static get ReflectionTextureEnabled() {
        return this._ReflectionTextureEnabled;
      }
      static set ReflectionTextureEnabled(p34) {
        if (this._ReflectionTextureEnabled !== p34) {
          this._ReflectionTextureEnabled = p34;
          vP26.b.MarkAllMaterialsAsDirty(1);
        }
      }
      static get EmissiveTextureEnabled() {
        return this._EmissiveTextureEnabled;
      }
      static set EmissiveTextureEnabled(p35) {
        if (this._EmissiveTextureEnabled !== p35) {
          this._EmissiveTextureEnabled = p35;
          vP26.b.MarkAllMaterialsAsDirty(1);
        }
      }
      static get SpecularTextureEnabled() {
        return this._SpecularTextureEnabled;
      }
      static set SpecularTextureEnabled(p36) {
        if (this._SpecularTextureEnabled !== p36) {
          this._SpecularTextureEnabled = p36;
          vP26.b.MarkAllMaterialsAsDirty(1);
        }
      }
      static get BumpTextureEnabled() {
        return this._BumpTextureEnabled;
      }
      static set BumpTextureEnabled(p37) {
        if (this._BumpTextureEnabled !== p37) {
          this._BumpTextureEnabled = p37;
          vP26.b.MarkAllMaterialsAsDirty(1);
        }
      }
      static get LightmapTextureEnabled() {
        return this._LightmapTextureEnabled;
      }
      static set LightmapTextureEnabled(p38) {
        if (this._LightmapTextureEnabled !== p38) {
          this._LightmapTextureEnabled = p38;
          vP26.b.MarkAllMaterialsAsDirty(1);
        }
      }
      static get RefractionTextureEnabled() {
        return this._RefractionTextureEnabled;
      }
      static set RefractionTextureEnabled(p39) {
        if (this._RefractionTextureEnabled !== p39) {
          this._RefractionTextureEnabled = p39;
          vP26.b.MarkAllMaterialsAsDirty(1);
        }
      }
      static get ColorGradingTextureEnabled() {
        return this._ColorGradingTextureEnabled;
      }
      static set ColorGradingTextureEnabled(p40) {
        if (this._ColorGradingTextureEnabled !== p40) {
          this._ColorGradingTextureEnabled = p40;
          vP26.b.MarkAllMaterialsAsDirty(1);
        }
      }
      static get FresnelEnabled() {
        return this._FresnelEnabled;
      }
      static set FresnelEnabled(p41) {
        if (this._FresnelEnabled !== p41) {
          this._FresnelEnabled = p41;
          vP26.b.MarkAllMaterialsAsDirty(4);
        }
      }
      static get ClearCoatTextureEnabled() {
        return this._ClearCoatTextureEnabled;
      }
      static set ClearCoatTextureEnabled(p42) {
        if (this._ClearCoatTextureEnabled !== p42) {
          this._ClearCoatTextureEnabled = p42;
          vP26.b.MarkAllMaterialsAsDirty(1);
        }
      }
      static get ClearCoatBumpTextureEnabled() {
        return this._ClearCoatBumpTextureEnabled;
      }
      static set ClearCoatBumpTextureEnabled(p43) {
        if (this._ClearCoatBumpTextureEnabled !== p43) {
          this._ClearCoatBumpTextureEnabled = p43;
          vP26.b.MarkAllMaterialsAsDirty(1);
        }
      }
      static get ClearCoatTintTextureEnabled() {
        return this._ClearCoatTintTextureEnabled;
      }
      static set ClearCoatTintTextureEnabled(p44) {
        if (this._ClearCoatTintTextureEnabled !== p44) {
          this._ClearCoatTintTextureEnabled = p44;
          vP26.b.MarkAllMaterialsAsDirty(1);
        }
      }
      static get SheenTextureEnabled() {
        return this._SheenTextureEnabled;
      }
      static set SheenTextureEnabled(p45) {
        if (this._SheenTextureEnabled !== p45) {
          this._SheenTextureEnabled = p45;
          vP26.b.MarkAllMaterialsAsDirty(1);
        }
      }
      static get AnisotropicTextureEnabled() {
        return this._AnisotropicTextureEnabled;
      }
      static set AnisotropicTextureEnabled(p46) {
        if (this._AnisotropicTextureEnabled !== p46) {
          this._AnisotropicTextureEnabled = p46;
          vP26.b.MarkAllMaterialsAsDirty(1);
        }
      }
      static get ThicknessTextureEnabled() {
        return this._ThicknessTextureEnabled;
      }
      static set ThicknessTextureEnabled(p47) {
        if (this._ThicknessTextureEnabled !== p47) {
          this._ThicknessTextureEnabled = p47;
          vP26.b.MarkAllMaterialsAsDirty(1);
        }
      }
      static get RefractionIntensityTextureEnabled() {
        return this._ThicknessTextureEnabled;
      }
      static set RefractionIntensityTextureEnabled(p48) {
        if (this._RefractionIntensityTextureEnabled !== p48) {
          this._RefractionIntensityTextureEnabled = p48;
          vP26.b.MarkAllMaterialsAsDirty(1);
        }
      }
      static get TranslucencyIntensityTextureEnabled() {
        return this._TranslucencyIntensityTextureEnabled;
      }
      static set TranslucencyIntensityTextureEnabled(p49) {
        if (this._TranslucencyIntensityTextureEnabled !== p49) {
          this._TranslucencyIntensityTextureEnabled = p49;
          vP26.b.MarkAllMaterialsAsDirty(1);
        }
      }
      static get TranslucencyColorTextureEnabled() {
        return this._TranslucencyColorTextureEnabled;
      }
      static set TranslucencyColorTextureEnabled(p50) {
        if (this._TranslucencyColorTextureEnabled !== p50) {
          this._TranslucencyColorTextureEnabled = p50;
          vP26.b.MarkAllMaterialsAsDirty(1);
        }
      }
      static get IridescenceTextureEnabled() {
        return this._IridescenceTextureEnabled;
      }
      static set IridescenceTextureEnabled(p51) {
        if (this._IridescenceTextureEnabled !== p51) {
          this._IridescenceTextureEnabled = p51;
          vP26.b.MarkAllMaterialsAsDirty(1);
        }
      }
    }
    C4._DiffuseTextureEnabled = true;
    C4._BaseWeightTextureEnabled = true;
    C4._BaseDiffuseRoughnessTextureEnabled = true;
    C4._DetailTextureEnabled = true;
    C4._DecalMapEnabled = true;
    C4._AmbientTextureEnabled = true;
    C4._OpacityTextureEnabled = true;
    C4._ReflectionTextureEnabled = true;
    C4._EmissiveTextureEnabled = true;
    C4._SpecularTextureEnabled = true;
    C4._BumpTextureEnabled = true;
    C4._LightmapTextureEnabled = true;
    C4._RefractionTextureEnabled = true;
    C4._ColorGradingTextureEnabled = true;
    C4._FresnelEnabled = true;
    C4._ClearCoatTextureEnabled = true;
    C4._ClearCoatBumpTextureEnabled = true;
    C4._ClearCoatTintTextureEnabled = true;
    C4._SheenTextureEnabled = true;
    C4._AnisotropicTextureEnabled = true;
    C4._ThicknessTextureEnabled = true;
    C4._RefractionIntensityTextureEnabled = true;
    C4._TranslucencyIntensityTextureEnabled = true;
    C4._TranslucencyColorTextureEnabled = true;
    C4._IridescenceTextureEnabled = true;
  },
  17374: (p52, p53, p54) => {
    p54.d(p53, {
      c: () => C5
    });
    var v21;
    var vP54 = p54(16973);
    (function (p55) {
      p55[p55.Zero = 0] = "Zero";
      p55[p55.One = 1] = "One";
      p55[p55.MaxViewZ = 2] = "MaxViewZ";
    })(v21 ||= {});
    class C5 {
      static CreateConfiguration(p56) {
        C5._Configurations[p56] = {
          defines: {},
          previousWorldMatrices: {},
          previousViewProjection: vP54.Matrix.Zero(),
          currentViewProjection: vP54.Matrix.Zero(),
          previousBones: {},
          lastUpdateFrameId: -1,
          excludedSkinnedMesh: [],
          reverseCulling: false
        };
        return C5._Configurations[p56];
      }
      static DeleteConfiguration(p57) {
        delete C5._Configurations[p57];
      }
      static GetConfiguration(p58) {
        return C5._Configurations[p58];
      }
      static AddUniformsAndSamplers(p59, p60) {
        p59.push("previousWorld", "previousViewProjection", "mPreviousBones");
      }
      static MarkAsDirty(p61, p62) {
        for (const v22 of p62) {
          if (v22.wf) {
            for (const v23 of v22.wf) {
              v23._removeDrawWrapper(p61);
            }
          }
        }
      }
      static PrepareDefines(p63, p64, p65) {
        if (!p65._arePrePassDirty) {
          return;
        }
        const v24 = C5._Configurations[p63];
        if (!v24) {
          return;
        }
        p65.PREPASS = true;
        p65.PREPASS_COLOR = false;
        p65.PREPASS_COLOR_INDEX = -1;
        let vLN04 = 0;
        for (let vLN05 = 0; vLN05 < C5.GeometryTextureDescriptions.length; vLN05++) {
          const v25 = C5.GeometryTextureDescriptions[vLN05];
          const v26 = v25.define;
          const v27 = v25.defineIndex;
          const v28 = v24.defines[v27];
          if (v28 !== undefined) {
            p65[v26] = true;
            p65[v27] = v28;
            vLN04++;
          } else {
            p65[v26] = false;
            delete p65[v27];
          }
        }
        p65.SCENE_MRT_COUNT = vLN04;
        p65.BONES_VELOCITY_ENABLED = p64.useBones && p64.computeBonesUsingShaders && p64.skeleton && !p64.skeleton.isUsingTextureForMatrices && v24.excludedSkinnedMesh.indexOf(p64) === -1;
      }
      static Bind(p66, p67, p68, p69, p70) {
        const v29 = C5._Configurations[p66];
        if (!v29) {
          return;
        }
        const v30 = p68.YL();
        const v31 = v30.getEngine();
        if (v29.reverseCulling) {
          v31.setStateCullFaceType(v30._mirroredCameraPosition ? p70.cullBackFaces : !p70.cullBackFaces);
        }
        if ((v29.defines.PREPASS_VELOCITY_INDEX !== undefined || v29.defines.PREPASS_VELOCITY_LINEAR_INDEX !== undefined) && (v29.previousWorldMatrices[p68.uniqueId] ||= p69.clone(), v29.previousViewProjection || (v29.previousViewProjection = v30.getTransformMatrix().clone(), v29.currentViewProjection = v30.getTransformMatrix().clone()), v29.currentViewProjection.updateFlag !== v30.getTransformMatrix().updateFlag ? (v29.lastUpdateFrameId = v31.frameId, v29.previousViewProjection.fC(v29.currentViewProjection), v29.currentViewProjection.fC(v30.getTransformMatrix())) : v29.lastUpdateFrameId !== v31.frameId && (v29.lastUpdateFrameId = v31.frameId, v29.previousViewProjection.fC(v29.currentViewProjection)), p67.setMatrix("previousWorld", v29.previousWorldMatrices[p68.uniqueId]), p67.setMatrix("previousViewProjection", v29.previousViewProjection), v29.previousWorldMatrices[p68.uniqueId] = p69.clone(), p68.useBones && p68.computeBonesUsingShaders && p68.skeleton)) {
          const v32 = p68.skeleton;
          if (!v32.isUsingTextureForMatrices || p67.getUniformIndex("boneTextureWidth") === -1) {
            const v33 = v32.getTransformMatrices(p68);
            if (v33) {
              v29.previousBones[p68.uniqueId] ||= v33.slice();
              p67.setMatrices("mPreviousBones", v29.previousBones[p68.uniqueId]);
              v29.previousBones[p68.uniqueId].set(v33);
            }
          }
        }
      }
    }
    C5.GeometryTextureDescriptions = [{
      type: 0,
      name: "Irradiance",
      clearType: 0,
      define: "PREPASS_IRRADIANCE",
      defineIndex: "PREPASS_IRRADIANCE_INDEX"
    }, {
      type: 1,
      name: "WorldPosition",
      clearType: 0,
      define: "PREPASS_POSITION",
      defineIndex: "PREPASS_POSITION_INDEX"
    }, {
      type: 2,
      name: "Velocity",
      clearType: 0,
      define: "PREPASS_VELOCITY",
      defineIndex: "PREPASS_VELOCITY_INDEX"
    }, {
      type: 3,
      name: "Reflectivity",
      clearType: 0,
      define: "PREPASS_REFLECTIVITY",
      defineIndex: "PREPASS_REFLECTIVITY_INDEX"
    }, {
      type: 5,
      name: "ViewDepth",
      clearType: 2,
      define: "PREPASS_DEPTH",
      defineIndex: "PREPASS_DEPTH_INDEX"
    }, {
      type: 6,
      name: "ViewNormal",
      clearType: 0,
      define: "PREPASS_NORMAL",
      defineIndex: "PREPASS_NORMAL_INDEX"
    }, {
      type: 7,
      name: "AlbedoSqrt",
      clearType: 0,
      define: "PREPASS_ALBEDO_SQRT",
      defineIndex: "PREPASS_ALBEDO_SQRT_INDEX"
    }, {
      type: 8,
      name: "WorldNormal",
      clearType: 0,
      define: "PREPASS_WORLD_NORMAL",
      defineIndex: "PREPASS_WORLD_NORMAL_INDEX"
    }, {
      type: 9,
      name: "LocalPosition",
      clearType: 0,
      define: "PREPASS_LOCAL_POSITION",
      defineIndex: "PREPASS_LOCAL_POSITION_INDEX"
    }, {
      type: 10,
      name: "ScreenDepth",
      clearType: 1,
      define: "PREPASS_SCREENSPACE_DEPTH",
      defineIndex: "PREPASS_SCREENSPACE_DEPTH_INDEX"
    }, {
      type: 11,
      name: "LinearVelocity",
      clearType: 0,
      define: "PREPASS_VELOCITY_LINEAR",
      defineIndex: "PREPASS_VELOCITY_LINEAR_INDEX"
    }, {
      type: 12,
      name: "Albedo",
      clearType: 0,
      define: "PREPASS_ALBEDO",
      defineIndex: "PREPASS_ALBEDO_INDEX"
    }, {
      type: 13,
      name: "NormalizedViewDepth",
      clearType: 1,
      define: "PREPASS_NORMALIZED_VIEW_DEPTH",
      defineIndex: "PREPASS_NORMALIZED_VIEW_DEPTH_INDEX"
    }];
    C5._Configurations = {};
  },
  17366: (p71, p72, p73) => {
    p73.d(p72, {
      b: () => C7
    });
    var vP73 = p73(16960);
    var vP732 = p73(16965);
    var vP733 = p73(17293);
    var vP734 = p73(16837);
    var vP735 = p73(16859);
    var vP736 = p73(16885);
    const v34 = new RegExp("^([gimus]+)!");
    class C6 {
      constructor(p74) {
        this._plugins = [];
        this._activePlugins = [];
        this._activePluginsForExtraEvents = [];
        this._material = p74;
        this._scene = p74.YL();
        this._engine = this._scene.getEngine();
      }
      _addPlugin(p75) {
        for (let vLN06 = 0; vLN06 < this._plugins.length; ++vLN06) {
          if (this._plugins[vLN06].name === p75.name) {
            return false;
          }
        }
        if (this._material._uniformBufferLayoutBuilt) {
          this._material.resetDrawCache();
          this._material._createUniformBuffer();
        }
        if (!p75.isCompatible(this._material.shaderLanguage)) {
          throw `The plugin "${p75.name}" can't be added to the material "${this._material.name}" because the plugin is not compatible with the shader language of the material.`;
        }
        const v35 = p75.getClassName();
        C6._MaterialPluginClassToMainDefine[v35] ||= "MATERIALPLUGIN_" + ++C6._MaterialPluginCounter;
        this._material._callbackPluginEventGeneric = (p76, p77) => this._handlePluginEvent(p76, p77);
        this._plugins.push(p75);
        this._plugins.sort((p78, p79) => p78.priority - p79.priority);
        this._codeInjectionPoints = {};
        const vO = {
          [C6._MaterialPluginClassToMainDefine[v35]]: {
            type: "boolean",
            default: true
          }
        };
        for (const v36 of this._plugins) {
          v36.collectDefines(vO);
          this._collectPointNames("vertex", v36.getCustomCode("vertex", this._material.shaderLanguage));
          this._collectPointNames("fragment", v36.getCustomCode("fragment", this._material.shaderLanguage));
        }
        this._defineNamesFromPlugins = vO;
        return true;
      }
      _activatePlugin(p80) {
        if (this._activePlugins.indexOf(p80) === -1) {
          this._activePlugins.push(p80);
          this._activePlugins.sort((p81, p82) => p81.priority - p82.priority);
          this._material._callbackPluginEventIsReadyForSubMesh = this._handlePluginEventIsReadyForSubMesh.bind(this);
          this._material._callbackPluginEventPrepareDefinesBeforeAttributes = this._handlePluginEventPrepareDefinesBeforeAttributes.bind(this);
          this._material._callbackPluginEventPrepareDefines = this._handlePluginEventPrepareDefines.bind(this);
          this._material._callbackPluginEventBindForSubMesh = this._handlePluginEventBindForSubMesh.bind(this);
          if (p80.registerForExtraEvents) {
            this._activePluginsForExtraEvents.push(p80);
            this._activePluginsForExtraEvents.sort((p83, p84) => p83.priority - p84.priority);
            this._material._callbackPluginEventHasRenderTargetTextures = this._handlePluginEventHasRenderTargetTextures.bind(this);
            this._material._callbackPluginEventFillRenderTargetTextures = this._handlePluginEventFillRenderTargetTextures.bind(this);
            this._material._callbackPluginEventHardBindForSubMesh = this._handlePluginEventHardBindForSubMesh.bind(this);
          }
        }
      }
      getPlugin(p85) {
        for (let vLN07 = 0; vLN07 < this._plugins.length; ++vLN07) {
          if (this._plugins[vLN07].name === p85) {
            return this._plugins[vLN07];
          }
        }
        return null;
      }
      _handlePluginEventIsReadyForSubMesh(p86) {
        let v37 = true;
        for (const v38 of this._activePlugins) {
          v37 = v37 && v38.isReadyForSubMesh(p86.defines, this._scene, this._engine, p86.subMesh);
        }
        p86.isReadyForSubMesh = v37;
      }
      _handlePluginEventPrepareDefinesBeforeAttributes(p87) {
        for (const v39 of this._activePlugins) {
          v39.prepareDefinesBeforeAttributes(p87.defines, this._scene, p87.mesh);
        }
      }
      _handlePluginEventPrepareDefines(p88) {
        for (const v40 of this._activePlugins) {
          v40.prepareDefines(p88.defines, this._scene, p88.mesh);
        }
      }
      _handlePluginEventHardBindForSubMesh(p89) {
        for (const v41 of this._activePluginsForExtraEvents) {
          v41.hardBindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, p89.subMesh);
        }
      }
      _handlePluginEventBindForSubMesh(p90) {
        for (const v42 of this._activePlugins) {
          v42.bindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, p90.subMesh);
        }
      }
      _handlePluginEventHasRenderTargetTextures(p91) {
        let v43 = false;
        for (const v44 of this._activePluginsForExtraEvents) {
          v43 = v44.hasRenderTargetTextures();
          if (v43) {
            break;
          }
        }
        p91.hasRenderTargetTextures = v43;
      }
      _handlePluginEventFillRenderTargetTextures(p92) {
        for (const v45 of this._activePluginsForExtraEvents) {
          v45.fillRenderTargetTextures(p92.renderTargets);
        }
      }
      _handlePluginEvent(p93, p94) {
        switch (p93) {
          case 512:
            {
              const vP94 = p94;
              for (const v46 of this._activePlugins) {
                v46.getActiveTextures(vP94.activeTextures);
              }
              break;
            }
          case 256:
            {
              const vP942 = p94;
              for (const v47 of this._activePlugins) {
                v47.getAnimatables(vP942.animatables);
              }
              break;
            }
          case 1024:
            {
              const vP943 = p94;
              let v48 = false;
              for (const v49 of this._activePlugins) {
                v48 = v49.hasTexture(vP943.texture);
                if (v48) {
                  break;
                }
              }
              vP943.hasTexture = v48;
              break;
            }
          case 2:
            {
              const vP944 = p94;
              for (const v50 of this._plugins) {
                v50.dispose(vP944.forceDisposeTextures);
              }
              break;
            }
          case 4:
            p94.defineNames = this._defineNamesFromPlugins;
            break;
          case 128:
            {
              const vP945 = p94;
              for (const v51 of this._activePlugins) {
                vP945.fallbackRank = v51.addFallbacks(vP945.defines, vP945.fallbacks, vP945.fallbackRank);
                v51.getAttributes(vP945.attributes, this._scene, vP945.mesh);
              }
              if (this._uniformList.length > 0) {
                vP945.uniforms.push(...this._uniformList);
              }
              if (this._samplerList.length > 0) {
                vP945.samplers.push(...this._samplerList);
              }
              if (this._uboList.length > 0) {
                vP945.uniformBuffersNames.push(...this._uboList);
              }
              vP945.customCode = this._injectCustomCode(vP945, vP945.customCode);
              break;
            }
          case 8:
            {
              const vP946 = p94;
              this._uboDeclaration = "";
              this._vertexDeclaration = "";
              this._fragmentDeclaration = "";
              this._uniformList = [];
              this._samplerList = [];
              this._uboList = [];
              const v52 = this._material.shaderLanguage === 1;
              for (const v53 of this._plugins) {
                const v54 = v53.getUniforms(this._material.shaderLanguage);
                if (v54) {
                  if (v54.ubo) {
                    for (const v55 of v54.ubo) {
                      if (v55.size && v55.type) {
                        const v56 = v55.arraySize ?? 0;
                        vP946.ubo.addUniform(v55.name, v55.size, v56);
                        if (v52) {
                          let v57;
                          switch (v55.type) {
                            case "mat4":
                              v57 = "mat4x4f";
                              break;
                            case "float":
                              v57 = "f32";
                              break;
                            default:
                              v57 = `${v55.type}f`;
                          }
                          this._uboDeclaration += v56 > 0 ? `uniform ${v55.name}: array<${v57}, ${v56}>;
` : `uniform ${v55.name}: ${v57};
`;
                        } else {
                          this._uboDeclaration += `${v55.type} ${v55.name}${v56 > 0 ? `[${v56}]` : ""};
`;
                        }
                      }
                      this._uniformList.push(v55.name);
                    }
                  }
                  if (v54.vertex) {
                    this._vertexDeclaration += v54.vertex + "\n";
                  }
                  if (v54.fragment) {
                    this._fragmentDeclaration += v54.fragment + "\n";
                  }
                }
                v53.getSamplers(this._samplerList);
                v53.getUniformBuffersNames(this._uboList);
              }
              break;
            }
        }
      }
      _collectPointNames(p95, p96) {
        if (p96) {
          for (const v58 in p96) {
            this._codeInjectionPoints[p95] ||= {};
            this._codeInjectionPoints[p95][v58] = true;
          }
        }
      }
      _injectCustomCode(p97, p98) {
        return (p99, p100) => {
          if (p98) {
            p100 = p98(p99, p100);
          }
          if (this._uboDeclaration) {
            p100 = p100.replace("#define ADDITIONAL_UBO_DECLARATION", this._uboDeclaration);
          }
          if (this._vertexDeclaration) {
            p100 = p100.replace("#define ADDITIONAL_VERTEX_DECLARATION", this._vertexDeclaration);
          }
          if (this._fragmentDeclaration) {
            p100 = p100.replace("#define ADDITIONAL_FRAGMENT_DECLARATION", this._fragmentDeclaration);
          }
          const v59 = this._codeInjectionPoints?.[p99];
          if (!v59) {
            return p100;
          }
          let v60 = null;
          for (let v61 in v59) {
            let vLS2 = "";
            for (const v62 of this._activePlugins) {
              let v63 = v62.getCustomCode(p99, this._material.shaderLanguage)?.[v61];
              if (v63) {
                if (v62.resolveIncludes) {
                  if (v60 === null) {
                    const vLN08 = 0;
                    v60 = {
                      defines: [],
                      indexParameters: p97.indexParameters,
                      isFragment: false,
                      shouldUseHighPrecisionShader: this._engine._shouldUseHighPrecisionShader,
                      processor: undefined,
                      supportsUniformBuffers: this._engine.supportsUniformBuffers,
                      shadersRepository: vP736.d.GetShadersRepository(vLN08),
                      includesShadersStore: vP736.d.GetIncludesShadersStore(vLN08),
                      version: undefined,
                      platformName: this._engine.shaderPlatformName,
                      processingContext: undefined,
                      isNDCHalfZRange: this._engine.isNDCHalfZRange,
                      GI: this._engine.GI,
                      processCodeAfterIncludes: undefined
                    };
                  }
                  v60.isFragment = p99 === "fragment";
                  (0, vP735.h)(v63, v60, p101 => v63 = p101);
                }
                vLS2 += v63 + "\n";
              }
            }
            if (vLS2.length > 0) {
              if (v61.charAt(0) === "!") {
                v61 = v61.substring(1);
                let vLSG = "g";
                if (v61.charAt(0) === "!") {
                  vLSG = "";
                  v61 = v61.substring(1);
                } else {
                  const v64 = v34.exec(v61);
                  if (v64 && v64.length >= 2) {
                    vLSG = v64[1];
                    v61 = v61.substring(vLSG.length + 1);
                  }
                }
                if (vLSG.indexOf("g") < 0) {
                  vLSG += "g";
                }
                const vP100 = p100;
                const v65 = new RegExp(v61, vLSG);
                let v66 = v65.exec(vP100);
                while (v66 !== null) {
                  let vVLS2 = vLS2;
                  for (let vLN09 = 0; vLN09 < v66.length; ++vLN09) {
                    vVLS2 = vVLS2.replace("$" + vLN09, v66[vLN09]);
                  }
                  p100 = p100.replace(v66[0], vVLS2);
                  v66 = v65.exec(vP100);
                }
              } else {
                const v67 = "#define " + v61;
                p100 = p100.replace(v67, "\n" + vLS2 + "\n" + v67);
              }
            }
          }
          return p100;
        };
      }
    }
    C6._MaterialPluginClassToMainDefine = {};
    C6._MaterialPluginCounter = 0;
    vP734.b.OnEnginesDisposedObservable.add(() => {
      f();
    });
    const vA = [];
    let v68 = false;
    let v69 = null;
    function f() {
      vA.length = 0;
      v68 = false;
      vP733.e.OnEventObservable.remove(v69);
      v69 = null;
    }
    var vP737 = p73(17000);
    var vP738 = p73(16927);
    class C7 {
      isCompatible(p102) {
        return p102 === 0;
      }
      _enable(p103) {
        if (p103) {
          this._pluginManager._activatePlugin(this);
        }
      }
      constructor(p104, p105, p106, p107) {
        let v70 = !(arguments.length > 4) || arguments[4] === undefined || arguments[4];
        let v71 = arguments.length > 5 && arguments[5] !== undefined && arguments[5];
        let v72 = arguments.length > 6 && arguments[6] !== undefined && arguments[6];
        this.priority = 500;
        this.resolveIncludes = false;
        this.registerForExtraEvents = false;
        this.doNotSerialize = false;
        this._material = p104;
        this.name = p105;
        this.priority = p106;
        this.resolveIncludes = v72;
        if (!p104.pluginManager) {
          p104.pluginManager = new C6(p104);
          p104.Cf.add(() => {
            p104.pluginManager = undefined;
          });
        }
        this._pluginDefineNames = p107;
        this._pluginManager = p104.pluginManager;
        if (v70) {
          this._pluginManager._addPlugin(this);
        }
        if (v71) {
          this._enable(true);
        }
        this.markAllDefinesAsDirty = p104._dirtyCallbacks[127];
      }
      getClassName() {
        return "MaterialPluginBase";
      }
      isReadyForSubMesh(p108, p109, p110, p111) {
        return true;
      }
      hardBindForSubMesh(p112, p113, p114, p115) {}
      bindForSubMesh(p116, p117, p118, p119) {}
      dispose(p120) {}
      getCustomCode(p121) {
        return null;
      }
      collectDefines(p122) {
        if (this._pluginDefineNames) {
          for (const v73 of Object.keys(this._pluginDefineNames)) {
            if (v73[0] === "_") {
              continue;
            }
            const v74 = typeof this._pluginDefineNames[v73];
            p122[v73] = {
              type: v74 === "number" ? "number" : v74 === "string" ? "string" : v74 === "boolean" ? "boolean" : "object",
              default: this._pluginDefineNames[v73]
            };
          }
        }
      }
      prepareDefinesBeforeAttributes(p123, p124, p125) {}
      prepareDefines(p126, p127, p128) {}
      hasTexture(p129) {
        return false;
      }
      hasRenderTargetTextures() {
        return false;
      }
      fillRenderTargetTextures(p130) {}
      getActiveTextures(p131) {}
      getAnimatables(p132) {}
      addFallbacks(p133, p134, p135) {
        return p135;
      }
      getSamplers(p136) {}
      getAttributes(p137, p138, p139) {}
      getUniformBuffersNames(p140) {}
      getUniforms() {
        return {};
      }
      copyTo(p141) {
        vP737.b.Clone(() => p141, this);
      }
      serialize() {
        return vP737.b.Serialize(this);
      }
      parse(p142, p143, p144) {
        vP737.b.Parse(() => this, p142, p143, p144);
      }
    }
    (0, vP73.d)([(0, vP732.F)()], C7.prototype, "name", undefined);
    (0, vP73.d)([(0, vP732.F)()], C7.prototype, "priority", undefined);
    (0, vP73.d)([(0, vP732.F)()], C7.prototype, "resolveIncludes", undefined);
    (0, vP73.d)([(0, vP732.F)()], C7.prototype, "registerForExtraEvents", undefined);
    (0, vP738.g)("BABYLON.MaterialPluginBase", C7);
  },
  17349: (p145, p146, p147) => {
    p147.d(p146, {
      e: () => C8
    });
    class C8 {
      constructor() {
        this.previousWorldMatrices = {};
        this.previousBones = {};
      }
      static AddUniforms(p148) {
        p148.push("previousWorld", "previousViewProjection", "mPreviousBones");
      }
      static AddSamplers(p149) {}
      bindForSubMesh(p150, p151, p152, p153, p154) {
        if (p151.prePassRenderer && p151.prePassRenderer.enabled && p151.prePassRenderer.currentRTisSceneRT && (p151.prePassRenderer.getIndex(2) !== -1 || p151.prePassRenderer.getIndex(11) !== -1)) {
          this.previousWorldMatrices[p152.uniqueId] ||= p153.clone();
          if (!this.previousViewProjection) {
            this.previousViewProjection = p151.getTransformMatrix().clone();
            this.currentViewProjection = p151.getTransformMatrix().clone();
          }
          const v75 = p151.getEngine();
          if (this.currentViewProjection.updateFlag !== p151.getTransformMatrix().updateFlag) {
            this._lastUpdateFrameId = v75.frameId;
            this.previousViewProjection.fC(this.currentViewProjection);
            this.currentViewProjection.fC(p151.getTransformMatrix());
          } else if (this._lastUpdateFrameId !== v75.frameId) {
            this._lastUpdateFrameId = v75.frameId;
            this.previousViewProjection.fC(this.currentViewProjection);
          }
          p150.setMatrix("previousWorld", this.previousWorldMatrices[p152.uniqueId]);
          p150.setMatrix("previousViewProjection", this.previousViewProjection);
          this.previousWorldMatrices[p152.uniqueId] = p153.clone();
        }
      }
    }
  },
  17340: (p155, p156, p157) => {
    p157.d(p156, {
      GL: () => C10
    });
    var vP157 = p157(16960);
    var vP1572 = p157(16965);
    var vP1573 = p157(17061);
    var vP1574 = p157(17213);
    var vP1575 = p157(17009);
    var vP1576 = p157(17031);
    var vP1577 = p157(17349);
    var vP1578 = p157(17222);
    var vP1579 = p157(17293);
    var vP15710 = p157(17351);
    var vP15711 = p157(17290);
    var vP15712 = p157(16955);
    var vP15713 = p157(16927);
    var vP15714 = p157(17354);
    var vP15715 = p157(17287);
    var vP15716 = p157(17357);
    var vP15717 = p157(17333);
    var vP15718 = p157(17327);
    var vP15719 = p157(17000);
    var vP15720 = p157(17374);
    const vO2 = {
      effect: null,
      subMesh: null
    };
    class C9 extends vP15710.e {
      constructor(p158) {
        super(p158);
        this.MAINUV1 = false;
        this.MAINUV2 = false;
        this.MAINUV3 = false;
        this.MAINUV4 = false;
        this.MAINUV5 = false;
        this.MAINUV6 = false;
        this.DIFFUSE = false;
        this.DIFFUSEDIRECTUV = 0;
        this.BAKED_VERTEX_ANIMATION_TEXTURE = false;
        this.AMBIENT = false;
        this.AMBIENTDIRECTUV = 0;
        this.OPACITY = false;
        this.OPACITYDIRECTUV = 0;
        this.OPACITYRGB = false;
        this.REFLECTION = false;
        this.EMISSIVE = false;
        this.EMISSIVEDIRECTUV = 0;
        this.SPECULAR = false;
        this.SPECULARDIRECTUV = 0;
        this.BUMP = false;
        this.BUMPDIRECTUV = 0;
        this.PARALLAX = false;
        this.PARALLAX_RHS = false;
        this.PARALLAXOCCLUSION = false;
        this.SPECULAROVERALPHA = false;
        this.CLIPPLANE = false;
        this.CLIPPLANE2 = false;
        this.CLIPPLANE3 = false;
        this.CLIPPLANE4 = false;
        this.CLIPPLANE5 = false;
        this.CLIPPLANE6 = false;
        this.ALPHATEST = false;
        this.DEPTHPREPASS = false;
        this.ALPHAFROMDIFFUSE = false;
        this.POINTSIZE = false;
        this.FOG = false;
        this.SPECULARTERM = false;
        this.DIFFUSEFRESNEL = false;
        this.OPACITYFRESNEL = false;
        this.REFLECTIONFRESNEL = false;
        this.REFRACTIONFRESNEL = false;
        this.EMISSIVEFRESNEL = false;
        this.FRESNEL = false;
        this.NORMAL = false;
        this.TANGENT = false;
        this.UV1 = false;
        this.UV2 = false;
        this.UV3 = false;
        this.UV4 = false;
        this.UV5 = false;
        this.UV6 = false;
        this.VERTEXCOLOR = false;
        this.VERTEXALPHA = false;
        this.NUM_BONE_INFLUENCERS = 0;
        this.BonesPerMesh = 0;
        this.BONETEXTURE = false;
        this.BONES_VELOCITY_ENABLED = false;
        this.INSTANCES = false;
        this.THIN_INSTANCES = false;
        this.INSTANCESCOLOR = false;
        this.GLOSSINESS = false;
        this.ROUGHNESS = false;
        this.EMISSIVEASILLUMINATION = false;
        this.LINKEMISSIVEWITHDIFFUSE = false;
        this.REFLECTIONFRESNELFROMSPECULAR = false;
        this.LIGHTMAP = false;
        this.LIGHTMAPDIRECTUV = 0;
        this.OBJECTSPACE_NORMALMAP = false;
        this.USELIGHTMAPASSHADOWMAP = false;
        this.REFLECTIONMAP_3D = false;
        this.REFLECTIONMAP_SPHERICAL = false;
        this.REFLECTIONMAP_PLANAR = false;
        this.REFLECTIONMAP_CUBIC = false;
        this.USE_LOCAL_REFLECTIONMAP_CUBIC = false;
        this.USE_LOCAL_REFRACTIONMAP_CUBIC = false;
        this.REFLECTIONMAP_PROJECTION = false;
        this.REFLECTIONMAP_SKYBOX = false;
        this.REFLECTIONMAP_EXPLICIT = false;
        this.REFLECTIONMAP_EQUIRECTANGULAR = false;
        this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = false;
        this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = false;
        this.REFLECTIONMAP_OPPOSITEZ = false;
        this.INVERTCUBICMAP = false;
        this.LOGARITHMICDEPTH = false;
        this.REFRACTION = false;
        this.REFRACTIONMAP_3D = false;
        this.REFLECTIONOVERALPHA = false;
        this.TWOSIDEDLIGHTING = false;
        this.SHADOWFLOAT = false;
        this.MORPHTARGETS = false;
        this.MORPHTARGETS_POSITION = false;
        this.MORPHTARGETS_NORMAL = false;
        this.MORPHTARGETS_TANGENT = false;
        this.MORPHTARGETS_UV = false;
        this.MORPHTARGETS_UV2 = false;
        this.MORPHTARGETS_COLOR = false;
        this.MORPHTARGETTEXTURE_HASPOSITIONS = false;
        this.MORPHTARGETTEXTURE_HASNORMALS = false;
        this.MORPHTARGETTEXTURE_HASTANGENTS = false;
        this.MORPHTARGETTEXTURE_HASUVS = false;
        this.MORPHTARGETTEXTURE_HASUV2S = false;
        this.MORPHTARGETTEXTURE_HASCOLORS = false;
        this.NUM_MORPH_INFLUENCERS = 0;
        this.MORPHTARGETS_TEXTURE = false;
        this.NONUNIFORMSCALING = false;
        this.PREMULTIPLYALPHA = false;
        this.ALPHATEST_AFTERALLALPHACOMPUTATIONS = false;
        this.ALPHABLEND = true;
        this.PREPASS = false;
        this.PREPASS_COLOR = false;
        this.PREPASS_COLOR_INDEX = -1;
        this.PREPASS_IRRADIANCE = false;
        this.PREPASS_IRRADIANCE_INDEX = -1;
        this.PREPASS_ALBEDO = false;
        this.PREPASS_ALBEDO_INDEX = -1;
        this.PREPASS_ALBEDO_SQRT = false;
        this.PREPASS_ALBEDO_SQRT_INDEX = -1;
        this.PREPASS_DEPTH = false;
        this.PREPASS_DEPTH_INDEX = -1;
        this.PREPASS_SCREENSPACE_DEPTH = false;
        this.PREPASS_SCREENSPACE_DEPTH_INDEX = -1;
        this.PREPASS_NORMALIZED_VIEW_DEPTH = false;
        this.PREPASS_NORMALIZED_VIEW_DEPTH_INDEX = -1;
        this.PREPASS_NORMAL = false;
        this.PREPASS_NORMAL_INDEX = -1;
        this.PREPASS_NORMAL_WORLDSPACE = false;
        this.PREPASS_WORLD_NORMAL = false;
        this.PREPASS_WORLD_NORMAL_INDEX = -1;
        this.PREPASS_POSITION = false;
        this.PREPASS_POSITION_INDEX = -1;
        this.PREPASS_LOCAL_POSITION = false;
        this.PREPASS_LOCAL_POSITION_INDEX = -1;
        this.PREPASS_VELOCITY = false;
        this.PREPASS_VELOCITY_INDEX = -1;
        this.PREPASS_VELOCITY_LINEAR = false;
        this.PREPASS_VELOCITY_LINEAR_INDEX = -1;
        this.PREPASS_REFLECTIVITY = false;
        this.PREPASS_REFLECTIVITY_INDEX = -1;
        this.SCENE_MRT_COUNT = 0;
        this.RGBDLIGHTMAP = false;
        this.RGBDREFLECTION = false;
        this.RGBDREFRACTION = false;
        this.IMAGEPROCESSING = false;
        this.VIGNETTE = false;
        this.VIGNETTEBLENDMODEMULTIPLY = false;
        this.VIGNETTEBLENDMODEOPAQUE = false;
        this.TONEMAPPING = 0;
        this.CONTRAST = false;
        this.COLORCURVES = false;
        this.COLORGRADING = false;
        this.COLORGRADING3D = false;
        this.SAMPLER3DGREENDEPTH = false;
        this.SAMPLER3DBGRMAP = false;
        this.DITHER = false;
        this.IMAGEPROCESSINGPOSTPROCESS = false;
        this.SKIPFINALCOLORCLAMP = false;
        this.MULTIVIEW = false;
        this.ORDER_INDEPENDENT_TRANSPARENCY = false;
        this.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = false;
        this.CAMERA_ORTHOGRAPHIC = false;
        this.CAMERA_PERSPECTIVE = false;
        this.AREALIGHTSUPPORTED = true;
        this.IS_REFLECTION_LINEAR = false;
        this.IS_REFRACTION_LINEAR = false;
        this.EXPOSURE = false;
        this.DECAL_AFTER_DETAIL = false;
        this.rebuild();
      }
      setReflectionMode(p159) {
        const vA2 = ["REFLECTIONMAP_CUBIC", "REFLECTIONMAP_EXPLICIT", "REFLECTIONMAP_PLANAR", "REFLECTIONMAP_PROJECTION", "REFLECTIONMAP_PROJECTION", "REFLECTIONMAP_SKYBOX", "REFLECTIONMAP_SPHERICAL", "REFLECTIONMAP_EQUIRECTANGULAR", "REFLECTIONMAP_EQUIRECTANGULAR_FIXED", "REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED"];
        for (const v76 of vA2) {
          this[v76] = v76 === p159;
        }
      }
    }
    class C10 extends vP15711.c {
      get imageProcessingConfiguration() {
        return this._imageProcessingConfiguration;
      }
      set imageProcessingConfiguration(p160) {
        this._attachImageProcessingConfiguration(p160);
        this._markAllSubMeshesAsImageProcessingDirty();
      }
      _attachImageProcessingConfiguration(p161) {
        if (p161 !== this._imageProcessingConfiguration) {
          if (this._imageProcessingConfiguration && this._imageProcessingObserver) {
            this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver);
          }
          this._imageProcessingConfiguration = p161 || this.YL().imageProcessingConfiguration;
          if (this._imageProcessingConfiguration) {
            this._imageProcessingObserver = this._imageProcessingConfiguration.onUpdateParameters.add(() => {
              this._markAllSubMeshesAsImageProcessingDirty();
            });
          }
        }
      }
      get isPrePassCapable() {
        return !this.disableDepthWrite;
      }
      get cameraColorCurvesEnabled() {
        return this.imageProcessingConfiguration.colorCurvesEnabled;
      }
      set cameraColorCurvesEnabled(p162) {
        this.imageProcessingConfiguration.colorCurvesEnabled = p162;
      }
      get cameraColorGradingEnabled() {
        return this.imageProcessingConfiguration.colorGradingEnabled;
      }
      set cameraColorGradingEnabled(p163) {
        this.imageProcessingConfiguration.colorGradingEnabled = p163;
      }
      get cameraToneMappingEnabled() {
        return this._imageProcessingConfiguration.toneMappingEnabled;
      }
      set cameraToneMappingEnabled(p164) {
        this._imageProcessingConfiguration.toneMappingEnabled = p164;
      }
      get cameraExposure() {
        return this._imageProcessingConfiguration.exposure;
      }
      set cameraExposure(p165) {
        this._imageProcessingConfiguration.exposure = p165;
      }
      get cameraContrast() {
        return this._imageProcessingConfiguration.contrast;
      }
      set cameraContrast(p166) {
        this._imageProcessingConfiguration.contrast = p166;
      }
      get cameraColorGradingTexture() {
        return this._imageProcessingConfiguration.colorGradingTexture;
      }
      set cameraColorGradingTexture(p167) {
        this._imageProcessingConfiguration.colorGradingTexture = p167;
      }
      get cameraColorCurves() {
        return this._imageProcessingConfiguration.colorCurves;
      }
      set cameraColorCurves(p168) {
        this._imageProcessingConfiguration.colorCurves = p168;
      }
      get canRenderToMRT() {
        return true;
      }
      constructor(p169, p170) {
        super(p169, p170, undefined, arguments.length > 2 && arguments[2] !== undefined && arguments[2] || C10.ForceGLSL);
        this._diffuseTexture = null;
        this._ambientTexture = null;
        this._opacityTexture = null;
        this._reflectionTexture = null;
        this._emissiveTexture = null;
        this._specularTexture = null;
        this._bumpTexture = null;
        this._lightmapTexture = null;
        this._refractionTexture = null;
        this.ambientColor = new vP1575.eL(0, 0, 0);
        this.diffuseColor = new vP1575.eL(1, 1, 1);
        this.specularColor = new vP1575.eL(1, 1, 1);
        this.emissiveColor = new vP1575.eL(0, 0, 0);
        this.specularPower = 64;
        this._useAlphaFromDiffuseTexture = false;
        this._useEmissiveAsIllumination = false;
        this._linkEmissiveWithDiffuse = false;
        this._useSpecularOverAlpha = false;
        this._useReflectionOverAlpha = false;
        this._disableLighting = false;
        this._useObjectSpaceNormalMap = false;
        this._useParallax = false;
        this._useParallaxOcclusion = false;
        this.parallaxScaleBias = 0.05;
        this._roughness = 0;
        this.indexOfRefraction = 0.98;
        this.invertRefractionY = true;
        this.alphaCutOff = 0.4;
        this._useLightmapAsShadowmap = false;
        this._useReflectionFresnelFromSpecular = false;
        this._useGlossinessFromSpecularMapAlpha = false;
        this._maxSimultaneousLights = 4;
        this._invertNormalMapX = false;
        this._invertNormalMapY = false;
        this._twoSidedLighting = false;
        this._applyDecalMapAfterDetailMap = false;
        this._shadersLoaded = false;
        this._renderTargets = new vP1573.g(16);
        this._globalAmbientColor = new vP1575.eL(0, 0, 0);
        this._cacheHasRenderTargetTextures = false;
        this.detailMap = new vP15716.b(this);
        this._attachImageProcessingConfiguration(null);
        this.prePassConfiguration = new vP1577.e();
        this.getRenderTargetTextures = () => {
          this._renderTargets.reset();
          if (C10.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget) {
            this._renderTargets.push(this._reflectionTexture);
          }
          if (C10.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget) {
            this._renderTargets.push(this._refractionTexture);
          }
          this._eventInfo.renderTargets = this._renderTargets;
          this._callbackPluginEventFillRenderTargetTextures(this._eventInfo);
          return this._renderTargets;
        };
      }
      get hasRenderTargetTextures() {
        return !!C10.ReflectionTextureEnabled && !!this._reflectionTexture && !!this._reflectionTexture.isRenderTarget || !!C10.RefractionTextureEnabled && !!this._refractionTexture && !!this._refractionTexture.isRenderTarget || this._cacheHasRenderTargetTextures;
      }
      getClassName() {
        return "GL";
      }
      needAlphaBlending() {
        if (this._hasTransparencyMode) {
          return this._transparencyModeIsBlend;
        } else {
          return !this._disableAlphaBlending && (this.alpha < 1 || this._opacityTexture != null || this._shouldUseAlphaFromDiffuseTexture() || this._opacityFresnelParameters && this._opacityFresnelParameters.isEnabled);
        }
      }
      needAlphaTesting() {
        if (this._hasTransparencyMode) {
          return this._transparencyModeIsTest;
        } else {
          return this._hasAlphaChannel() && (this._transparencyMode == null || this._transparencyMode === vP1579.e.MATERIAL_ALPHATEST);
        }
      }
      _shouldUseAlphaFromDiffuseTexture() {
        return this._diffuseTexture != null && this._diffuseTexture.Uf && this._useAlphaFromDiffuseTexture && this._transparencyMode !== vP1579.e.MATERIAL_OPAQUE;
      }
      _hasAlphaChannel() {
        return this._diffuseTexture != null && this._diffuseTexture.Uf || this._opacityTexture != null;
      }
      getAlphaTestTexture() {
        return this._diffuseTexture;
      }
      isReadyForSubMesh(p171, p172, fC = false) {
        if (!this._uniformBufferLayoutBuilt) {
          this.buildUniformLayout();
        }
        const v77 = p172._drawWrapper;
        if (v77.effect && this.isFrozen && v77._wasPreviouslyReady && v77._wasPreviouslyUsingInstances === fC) {
          return true;
        }
        if (!p172.materialDefines) {
          this._callbackPluginEventGeneric(4, this._eventInfo);
          p172.materialDefines = new C9(this._eventInfo.defineNames);
        }
        const v78 = this.YL();
        const v79 = p172.materialDefines;
        if (this._isReadyForSubMesh(p172)) {
          return true;
        }
        const v80 = v78.getEngine();
        v79._needNormals = (0, vP15718.Q)(v78, p171, v79, true, this._maxSimultaneousLights, this._disableLighting);
        (0, vP15718.X)(v78, v79);
        const v81 = this.needAlphaBlendingForMesh(p171) && this.YL().useOrderIndependentTransparency;
        (0, vP15718.ab)(v78, v79, this.canRenderToMRT && !v81);
        (0, vP15718._)(v78, v79, v81);
        vP15720.c.PrepareDefines(v80.currentRenderPassId, p171, v79);
        if (v79._areTexturesDirty) {
          this._eventInfo.hasRenderTargetTextures = false;
          this._callbackPluginEventHasRenderTargetTextures(this._eventInfo);
          this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures;
          v79._needUVs = false;
          for (let vLN1 = 1; vLN1 <= 6; ++vLN1) {
            v79["MAINUV" + vLN1] = false;
          }
          if (v78.texturesEnabled) {
            v79.DIFFUSEDIRECTUV = 0;
            v79.BUMPDIRECTUV = 0;
            v79.AMBIENTDIRECTUV = 0;
            v79.OPACITYDIRECTUV = 0;
            v79.EMISSIVEDIRECTUV = 0;
            v79.SPECULARDIRECTUV = 0;
            v79.LIGHTMAPDIRECTUV = 0;
            if (this._diffuseTexture && C10.DiffuseTextureEnabled) {
              if (!this._diffuseTexture.isReadyOrNotBlocking()) {
                return false;
              }
              (0, vP15718.R)(this._diffuseTexture, v79, "DIFFUSE");
            } else {
              v79.DIFFUSE = false;
            }
            if (this._ambientTexture && C10.AmbientTextureEnabled) {
              if (!this._ambientTexture.isReadyOrNotBlocking()) {
                return false;
              }
              (0, vP15718.R)(this._ambientTexture, v79, "AMBIENT");
            } else {
              v79.AMBIENT = false;
            }
            if (this._opacityTexture && C10.OpacityTextureEnabled) {
              if (!this._opacityTexture.isReadyOrNotBlocking()) {
                return false;
              }
              (0, vP15718.R)(this._opacityTexture, v79, "OPACITY");
              v79.OPACITYRGB = this._opacityTexture.getAlphaFromRGB;
            } else {
              v79.OPACITY = false;
            }
            if (this._reflectionTexture && C10.ReflectionTextureEnabled) {
              if (!this._reflectionTexture.isReadyOrNotBlocking()) {
                return false;
              }
              v79._needNormals = true;
              v79.REFLECTION = true;
              v79.ROUGHNESS = this._roughness > 0;
              v79.REFLECTIONOVERALPHA = this._useReflectionOverAlpha;
              v79.INVERTCUBICMAP = this._reflectionTexture.coordinatesMode === vP15712.c.INVCUBIC_MODE;
              v79.REFLECTIONMAP_3D = this._reflectionTexture.isCube;
              v79.REFLECTIONMAP_OPPOSITEZ = v79.REFLECTIONMAP_3D && this.YL().useRightHandedSystem ? !this._reflectionTexture.invertZ : this._reflectionTexture.invertZ;
              v79.RGBDREFLECTION = this._reflectionTexture.isRGBD;
              switch (this._reflectionTexture.coordinatesMode) {
                case vP15712.c.EXPLICIT_MODE:
                  v79.setReflectionMode("REFLECTIONMAP_EXPLICIT");
                  break;
                case vP15712.c.PLANAR_MODE:
                  v79.setReflectionMode("REFLECTIONMAP_PLANAR");
                  break;
                case vP15712.c.PROJECTION_MODE:
                  v79.setReflectionMode("REFLECTIONMAP_PROJECTION");
                  break;
                case vP15712.c.SKYBOX_MODE:
                  v79.setReflectionMode("REFLECTIONMAP_SKYBOX");
                  break;
                case vP15712.c.SPHERICAL_MODE:
                  v79.setReflectionMode("REFLECTIONMAP_SPHERICAL");
                  break;
                case vP15712.c.EQUIRECTANGULAR_MODE:
                  v79.setReflectionMode("REFLECTIONMAP_EQUIRECTANGULAR");
                  break;
                case vP15712.c.FIXED_EQUIRECTANGULAR_MODE:
                  v79.setReflectionMode("REFLECTIONMAP_EQUIRECTANGULAR_FIXED");
                  break;
                case vP15712.c.FIXED_EQUIRECTANGULAR_MIRRORED_MODE:
                  v79.setReflectionMode("REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED");
                  break;
                case vP15712.c.CUBIC_MODE:
                case vP15712.c.INVCUBIC_MODE:
                default:
                  v79.setReflectionMode("REFLECTIONMAP_CUBIC");
              }
              v79.USE_LOCAL_REFLECTIONMAP_CUBIC = !!this._reflectionTexture.boundingBoxSize;
            } else {
              v79.REFLECTION = false;
              v79.REFLECTIONMAP_OPPOSITEZ = false;
            }
            if (this._emissiveTexture && C10.EmissiveTextureEnabled) {
              if (!this._emissiveTexture.isReadyOrNotBlocking()) {
                return false;
              }
              (0, vP15718.R)(this._emissiveTexture, v79, "EMISSIVE");
            } else {
              v79.EMISSIVE = false;
            }
            if (this._lightmapTexture && C10.LightmapTextureEnabled) {
              if (!this._lightmapTexture.isReadyOrNotBlocking()) {
                return false;
              }
              (0, vP15718.R)(this._lightmapTexture, v79, "LIGHTMAP");
              v79.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap;
              v79.RGBDLIGHTMAP = this._lightmapTexture.isRGBD;
            } else {
              v79.LIGHTMAP = false;
            }
            if (this._specularTexture && C10.SpecularTextureEnabled) {
              if (!this._specularTexture.isReadyOrNotBlocking()) {
                return false;
              }
              (0, vP15718.R)(this._specularTexture, v79, "SPECULAR");
              v79.GLOSSINESS = this._useGlossinessFromSpecularMapAlpha;
            } else {
              v79.SPECULAR = false;
            }
            if (v78.getEngine().getCaps().standardDerivatives && this._bumpTexture && C10.BumpTextureEnabled) {
              if (!this._bumpTexture.isReady()) {
                return false;
              }
              (0, vP15718.R)(this._bumpTexture, v79, "BUMP");
              v79.PARALLAX = this._useParallax;
              v79.PARALLAX_RHS = v78.useRightHandedSystem;
              v79.PARALLAXOCCLUSION = this._useParallaxOcclusion;
              v79.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap;
            } else {
              v79.BUMP = false;
              v79.PARALLAX = false;
              v79.PARALLAX_RHS = false;
              v79.PARALLAXOCCLUSION = false;
            }
            if (this._refractionTexture && C10.RefractionTextureEnabled) {
              if (!this._refractionTexture.isReadyOrNotBlocking()) {
                return false;
              }
              v79._needUVs = true;
              v79.REFRACTION = true;
              v79.REFRACTIONMAP_3D = this._refractionTexture.isCube;
              v79.RGBDREFRACTION = this._refractionTexture.isRGBD;
              v79.USE_LOCAL_REFRACTIONMAP_CUBIC = !!this._refractionTexture.boundingBoxSize;
            } else {
              v79.REFRACTION = false;
            }
            v79.TWOSIDEDLIGHTING = !this._backFaceCulling && this._twoSidedLighting;
          } else {
            v79.DIFFUSE = false;
            v79.AMBIENT = false;
            v79.OPACITY = false;
            v79.REFLECTION = false;
            v79.EMISSIVE = false;
            v79.LIGHTMAP = false;
            v79.BUMP = false;
            v79.REFRACTION = false;
          }
          v79.ALPHAFROMDIFFUSE = this._shouldUseAlphaFromDiffuseTexture();
          v79.EMISSIVEASILLUMINATION = this._useEmissiveAsIllumination;
          v79.LINKEMISSIVEWITHDIFFUSE = this._linkEmissiveWithDiffuse;
          v79.SPECULAROVERALPHA = this._useSpecularOverAlpha;
          v79.PREMULTIPLYALPHA = this.alphaMode === 7 || this.alphaMode === 8;
          v79.ALPHATEST_AFTERALLALPHACOMPUTATIONS = this.zf !== null;
          v79.ALPHABLEND = this.zf === null || this.needAlphaBlendingForMesh(p171);
        }
        this._eventInfo.isReadyForSubMesh = true;
        this._eventInfo.defines = v79;
        this._eventInfo.subMesh = p172;
        this._callbackPluginEventIsReadyForSubMesh(this._eventInfo);
        if (!this._eventInfo.isReadyForSubMesh) {
          return false;
        }
        if (v79._areImageProcessingDirty && this._imageProcessingConfiguration) {
          if (!this._imageProcessingConfiguration.isReady()) {
            return false;
          }
          this._imageProcessingConfiguration.prepareDefines(v79);
          v79.IS_REFLECTION_LINEAR = this.reflectionTexture != null && !this.reflectionTexture.gammaSpace;
          v79.IS_REFRACTION_LINEAR = this.refractionTexture != null && !this.refractionTexture.gammaSpace;
        }
        if (v79._areFresnelDirty) {
          if (C10.FresnelEnabled) {
            if (this._diffuseFresnelParameters || this._opacityFresnelParameters || this._emissiveFresnelParameters || this._refractionFresnelParameters || this._reflectionFresnelParameters) {
              v79.DIFFUSEFRESNEL = this._diffuseFresnelParameters && this._diffuseFresnelParameters.isEnabled;
              v79.OPACITYFRESNEL = this._opacityFresnelParameters && this._opacityFresnelParameters.isEnabled;
              v79.REFLECTIONFRESNEL = this._reflectionFresnelParameters && this._reflectionFresnelParameters.isEnabled;
              v79.REFLECTIONFRESNELFROMSPECULAR = this._useReflectionFresnelFromSpecular;
              v79.REFRACTIONFRESNEL = this._refractionFresnelParameters && this._refractionFresnelParameters.isEnabled;
              v79.EMISSIVEFRESNEL = this._emissiveFresnelParameters && this._emissiveFresnelParameters.isEnabled;
              v79._needNormals = true;
              v79.FRESNEL = true;
            }
          } else {
            v79.FRESNEL = false;
          }
        }
        if (v79.AREALIGHTUSED) {
          for (let vLN010 = 0; vLN010 < p171.lightSources.length; vLN010++) {
            if (!p171.lightSources[vLN010]._isReady()) {
              return false;
            }
          }
        }
        (0, vP15718.U)(p171, v78, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(p171), v79, this._applyDecalMapAfterDetailMap);
        (0, vP15718.M)(v78, v80, this, v79, fC, null, p172.getRenderingMesh().hasThinInstances);
        this._eventInfo.defines = v79;
        this._eventInfo.mesh = p171;
        this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo);
        (0, vP15718.I)(p171, v79, true, true, true);
        this._callbackPluginEventPrepareDefines(this._eventInfo);
        let v82 = false;
        if (v79.isDirty) {
          const v83 = v79._areLightsDisposed;
          v79.markAsProcessed();
          const v84 = new vP15715.c();
          if (v79.REFLECTION) {
            v84.addFallback(0, "REFLECTION");
          }
          if (v79.SPECULAR) {
            v84.addFallback(0, "SPECULAR");
          }
          if (v79.BUMP) {
            v84.addFallback(0, "BUMP");
          }
          if (v79.PARALLAX) {
            v84.addFallback(1, "PARALLAX");
          }
          if (v79.PARALLAX_RHS) {
            v84.addFallback(1, "PARALLAX_RHS");
          }
          if (v79.PARALLAXOCCLUSION) {
            v84.addFallback(0, "PARALLAXOCCLUSION");
          }
          if (v79.SPECULAROVERALPHA) {
            v84.addFallback(0, "SPECULAROVERALPHA");
          }
          if (v79.FOG) {
            v84.addFallback(1, "FOG");
          }
          if (v79.POINTSIZE) {
            v84.addFallback(0, "POINTSIZE");
          }
          if (v79.LOGARITHMICDEPTH) {
            v84.addFallback(0, "LOGARITHMICDEPTH");
          }
          (0, vP15718.v)(v79, v84, this._maxSimultaneousLights);
          if (v79.SPECULARTERM) {
            v84.addFallback(0, "SPECULARTERM");
          }
          if (v79.DIFFUSEFRESNEL) {
            v84.addFallback(1, "DIFFUSEFRESNEL");
          }
          if (v79.OPACITYFRESNEL) {
            v84.addFallback(2, "OPACITYFRESNEL");
          }
          if (v79.REFLECTIONFRESNEL) {
            v84.addFallback(3, "REFLECTIONFRESNEL");
          }
          if (v79.EMISSIVEFRESNEL) {
            v84.addFallback(4, "EMISSIVEFRESNEL");
          }
          if (v79.FRESNEL) {
            v84.addFallback(4, "FRESNEL");
          }
          if (v79.MULTIVIEW) {
            v84.addFallback(0, "MULTIVIEW");
          }
          const vA3 = [vP1576.e.PositionKind];
          if (v79.NORMAL) {
            vA3.push(vP1576.e.NormalKind);
          }
          if (v79.TANGENT) {
            vA3.push(vP1576.e.TangentKind);
          }
          for (let vLN12 = 1; vLN12 <= 6; ++vLN12) {
            if (v79["UV" + vLN12]) {
              vA3.push(`uv${vLN12 === 1 ? "" : vLN12}`);
            }
          }
          if (v79.VERTEXCOLOR) {
            vA3.push(vP1576.e.ColorKind);
          }
          (0, vP15718.y)(vA3, p171, v79, v84);
          (0, vP15718.A)(vA3, v79);
          (0, vP15718.E)(vA3, p171, v79);
          (0, vP15718.w)(vA3, p171, v79);
          let vLSDefault = "default";
          const vA4 = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vAmbientColor", "vDiffuseColor", "vSpecularColor", "vEmissiveColor", "visibility", "vFogInfos", "vFogColor", "pointSize", "vDiffuseInfos", "vAmbientInfos", "vOpacityInfos", "vReflectionInfos", "vEmissiveInfos", "vSpecularInfos", "vBumpInfos", "vLightmapInfos", "vRefractionInfos", "mBones", "diffuseMatrix", "ambientMatrix", "opacityMatrix", "reflectionMatrix", "emissiveMatrix", "specularMatrix", "bumpMatrix", "normalMatrix", "lightmapMatrix", "refractionMatrix", "diffuseLeftColor", "diffuseRightColor", "opacityParts", "reflectionLeftColor", "reflectionRightColor", "emissiveLeftColor", "emissiveRightColor", "refractionLeftColor", "refractionRightColor", "vReflectionPosition", "vReflectionSize", "vRefractionPosition", "vRefractionSize", "logarithmicDepthConstant", "vTangentSpaceParams", "alphaCutOff", "boneTextureWidth", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo"];
          const vA5 = ["diffuseSampler", "ambientSampler", "opacitySampler", "reflectionCubeSampler", "reflection2DSampler", "emissiveSampler", "specularSampler", "bumpSampler", "lightmapSampler", "refractionCubeSampler", "refraction2DSampler", "boneSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
          const vA6 = ["Material", "Scene", "Mesh"];
          const vO3 = {
            maxSimultaneousLights: this._maxSimultaneousLights,
            maxSimultaneousMorphTargets: v79.NUM_MORPH_INFLUENCERS
          };
          this._eventInfo.fallbacks = v84;
          this._eventInfo.fallbackRank = 0;
          this._eventInfo.defines = v79;
          this._eventInfo.uniforms = vA4;
          this._eventInfo.attributes = vA3;
          this._eventInfo.samplers = vA5;
          this._eventInfo.uniformBuffersNames = vA6;
          this._eventInfo.customCode = undefined;
          this._eventInfo.mesh = p171;
          this._eventInfo.indexParameters = vO3;
          this._callbackPluginEventGeneric(128, this._eventInfo);
          vP15720.c.AddUniformsAndSamplers(vA4, vA5);
          vP1577.e.AddUniforms(vA4);
          vP1577.e.AddSamplers(vA5);
          if (vP1578.b) {
            vP1578.b.PrepareUniforms(vA4, v79);
            vP1578.b.PrepareSamplers(vA5, v79);
          }
          (0, vP15718.db)({
            uniformsNames: vA4,
            uniformBuffersNames: vA6,
            samplers: vA5,
            defines: v79,
            maxSimultaneousLights: this._maxSimultaneousLights
          });
          (0, vP15717.e)(vA4);
          const vO4 = {};
          if (this.customShaderNameResolve) {
            vLSDefault = this.customShaderNameResolve(vLSDefault, vA4, vA6, vA5, v79, vA3, vO4);
          }
          const v85 = v79.toString();
          const v86 = p172.effect;
          let v87 = v78.getEngine().createEffect(vLSDefault, {
            attributes: vA3,
            uniformsNames: vA4,
            uniformBuffersNames: vA6,
            samplers: vA5,
            defines: v85,
            fallbacks: v84,
            onCompiled: this.onCompiled,
            onError: this.onError,
            indexParameters: vO3,
            processFinalCode: vO4.processFinalCode,
            processCodeAfterIncludes: this._eventInfo.customCode,
            multiTarget: v79.PREPASS,
            shaderLanguage: this._shaderLanguage,
            extraInitializationsAsync: this._shadersLoaded ? undefined : async () => {
              if (this._shaderLanguage === 1) {
                await Promise.all([Promise.all([p157.e(43), p157.e(65)]).then(p157.bind(p157, 19387)), Promise.all([p157.e(41), p157.e(66)]).then(p157.bind(p157, 19537))]);
              } else {
                await Promise.all([Promise.all([p157.e(36), p157.e(68)]).then(p157.bind(p157, 19612)), Promise.all([p157.e(35), p157.e(69)]).then(p157.bind(p157, 19754))]);
              }
              this._shadersLoaded = true;
            }
          }, v80);
          this._eventInfo.customCode = undefined;
          if (v87) {
            if (this._onEffectCreatedObservable) {
              vO2.effect = v87;
              vO2.subMesh = p172;
              this._onEffectCreatedObservable.notifyObservers(vO2);
            }
            if (this.allowShaderHotSwapping && v86 && !v87.isReady()) {
              v87 = v86;
              v79.markAsUnprocessed();
              v82 = this.isFrozen;
              if (v83) {
                v79._areLightsDisposed = true;
                return false;
              }
            } else {
              v78.resetCachedMaterial();
              p172.setEffect(v87, v79, this._materialContext);
            }
          }
        }
        return !!p172.effect && !!p172.effect.isReady() && (v79._renderId = v78.getRenderId(), v77._wasPreviouslyReady = !v82, v77._wasPreviouslyUsingInstances = fC, this._checkScenePerformancePriority(), true);
      }
      buildUniformLayout() {
        const v88 = this._uniformBuffer;
        v88.addUniform("diffuseLeftColor", 4);
        v88.addUniform("diffuseRightColor", 4);
        v88.addUniform("opacityParts", 4);
        v88.addUniform("reflectionLeftColor", 4);
        v88.addUniform("reflectionRightColor", 4);
        v88.addUniform("refractionLeftColor", 4);
        v88.addUniform("refractionRightColor", 4);
        v88.addUniform("emissiveLeftColor", 4);
        v88.addUniform("emissiveRightColor", 4);
        v88.addUniform("vDiffuseInfos", 2);
        v88.addUniform("vAmbientInfos", 2);
        v88.addUniform("vOpacityInfos", 2);
        v88.addUniform("vReflectionInfos", 2);
        v88.addUniform("vReflectionPosition", 3);
        v88.addUniform("vReflectionSize", 3);
        v88.addUniform("vEmissiveInfos", 2);
        v88.addUniform("vLightmapInfos", 2);
        v88.addUniform("vSpecularInfos", 2);
        v88.addUniform("vBumpInfos", 3);
        v88.addUniform("diffuseMatrix", 16);
        v88.addUniform("ambientMatrix", 16);
        v88.addUniform("opacityMatrix", 16);
        v88.addUniform("reflectionMatrix", 16);
        v88.addUniform("emissiveMatrix", 16);
        v88.addUniform("lightmapMatrix", 16);
        v88.addUniform("specularMatrix", 16);
        v88.addUniform("bumpMatrix", 16);
        v88.addUniform("vTangentSpaceParams", 2);
        v88.addUniform("pointSize", 1);
        v88.addUniform("alphaCutOff", 1);
        v88.addUniform("refractionMatrix", 16);
        v88.addUniform("vRefractionInfos", 4);
        v88.addUniform("vRefractionPosition", 3);
        v88.addUniform("vRefractionSize", 3);
        v88.addUniform("vSpecularColor", 4);
        v88.addUniform("vEmissiveColor", 3);
        v88.addUniform("vDiffuseColor", 4);
        v88.addUniform("vAmbientColor", 3);
        v88.addUniform("cameraInfo", 4);
        super.buildUniformLayout();
      }
      bindForSubMesh(p173, p174, p175) {
        const v89 = this.YL();
        const v90 = p175.materialDefines;
        if (!v90) {
          return;
        }
        const v91 = p175.effect;
        if (!v91) {
          return;
        }
        this._activeEffect = v91;
        p174.getMeshUniformBuffer().bindToEffect(v91, "Mesh");
        p174.transferToEffect(p173);
        this._uniformBuffer.bindToEffect(v91, "Material");
        this.prePassConfiguration.bindForSubMesh(this._activeEffect, v89, p174, p173, this.isFrozen);
        vP15720.c.Bind(v89.getEngine().currentRenderPassId, this._activeEffect, p174, p173, this);
        const v92 = v89.activeCamera;
        if (v92) {
          this._uniformBuffer.updateFloat4("cameraInfo", v92.nf, v92.uf, 0, 0);
        } else {
          this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
        }
        this._eventInfo.subMesh = p175;
        this._callbackPluginEventHardBindForSubMesh(this._eventInfo);
        if (v90.OBJECTSPACE_NORMALMAP) {
          p173.toNormalMatrix(this._normalMatrix);
          this.bindOnlyNormalMatrix(this._normalMatrix);
        }
        const v93 = this._mustRebind(v89, v91, p175, p174.visibility);
        (0, vP15718.d)(p174, v91);
        const v94 = this._uniformBuffer;
        if (v93) {
          this.bindViewProjection(v91);
          if (!v94.useUbo || !this.isFrozen || !v94.isSync || p175._drawWrapper._forceRebindOnNextCall) {
            if (C10.FresnelEnabled && v90.FRESNEL) {
              if (this.diffuseFresnelParameters && this.diffuseFresnelParameters.isEnabled) {
                v94.updateColor4("diffuseLeftColor", this.diffuseFresnelParameters.leftColor, this.diffuseFresnelParameters.power);
                v94.updateColor4("diffuseRightColor", this.diffuseFresnelParameters.rightColor, this.diffuseFresnelParameters.bias);
              }
              if (this.opacityFresnelParameters && this.opacityFresnelParameters.isEnabled) {
                v94.updateColor4("opacityParts", new vP1575.eL(this.opacityFresnelParameters.leftColor.toLuminance(), this.opacityFresnelParameters.rightColor.toLuminance(), this.opacityFresnelParameters.bias), this.opacityFresnelParameters.power);
              }
              if (this.reflectionFresnelParameters && this.reflectionFresnelParameters.isEnabled) {
                v94.updateColor4("reflectionLeftColor", this.reflectionFresnelParameters.leftColor, this.reflectionFresnelParameters.power);
                v94.updateColor4("reflectionRightColor", this.reflectionFresnelParameters.rightColor, this.reflectionFresnelParameters.bias);
              }
              if (this.refractionFresnelParameters && this.refractionFresnelParameters.isEnabled) {
                v94.updateColor4("refractionLeftColor", this.refractionFresnelParameters.leftColor, this.refractionFresnelParameters.power);
                v94.updateColor4("refractionRightColor", this.refractionFresnelParameters.rightColor, this.refractionFresnelParameters.bias);
              }
              if (this.emissiveFresnelParameters && this.emissiveFresnelParameters.isEnabled) {
                v94.updateColor4("emissiveLeftColor", this.emissiveFresnelParameters.leftColor, this.emissiveFresnelParameters.power);
                v94.updateColor4("emissiveRightColor", this.emissiveFresnelParameters.rightColor, this.emissiveFresnelParameters.bias);
              }
            }
            if (v89.texturesEnabled) {
              if (this._diffuseTexture && C10.DiffuseTextureEnabled) {
                v94.updateFloat2("vDiffuseInfos", this._diffuseTexture.coordinatesIndex, this._diffuseTexture.level);
                (0, vP15718.u)(this._diffuseTexture, v94, "diffuse");
              }
              if (this._ambientTexture && C10.AmbientTextureEnabled) {
                v94.updateFloat2("vAmbientInfos", this._ambientTexture.coordinatesIndex, this._ambientTexture.level);
                (0, vP15718.u)(this._ambientTexture, v94, "ambient");
              }
              if (this._opacityTexture && C10.OpacityTextureEnabled) {
                v94.updateFloat2("vOpacityInfos", this._opacityTexture.coordinatesIndex, this._opacityTexture.level);
                (0, vP15718.u)(this._opacityTexture, v94, "opacity");
              }
              if (this._hasAlphaChannel()) {
                v94.updateFloat("alphaCutOff", this.alphaCutOff);
              }
              if (this._reflectionTexture && C10.ReflectionTextureEnabled) {
                v94.updateFloat2("vReflectionInfos", this._reflectionTexture.level, this.roughness);
                v94.Zf("reflectionMatrix", this._reflectionTexture.getReflectionTextureMatrix());
                if (this._reflectionTexture.boundingBoxSize) {
                  const v95 = this._reflectionTexture;
                  v94.updateVector3("vReflectionPosition", v95.boundingBoxPosition);
                  v94.updateVector3("vReflectionSize", v95.boundingBoxSize);
                }
              } else {
                v94.updateFloat2("vReflectionInfos", 0, this.roughness);
              }
              if (this._emissiveTexture && C10.EmissiveTextureEnabled) {
                v94.updateFloat2("vEmissiveInfos", this._emissiveTexture.coordinatesIndex, this._emissiveTexture.level);
                (0, vP15718.u)(this._emissiveTexture, v94, "emissive");
              }
              if (this._lightmapTexture && C10.LightmapTextureEnabled) {
                v94.updateFloat2("vLightmapInfos", this._lightmapTexture.coordinatesIndex, this._lightmapTexture.level);
                (0, vP15718.u)(this._lightmapTexture, v94, "lightmap");
              }
              if (this._specularTexture && C10.SpecularTextureEnabled) {
                v94.updateFloat2("vSpecularInfos", this._specularTexture.coordinatesIndex, this._specularTexture.level);
                (0, vP15718.u)(this._specularTexture, v94, "specular");
              }
              if (this._bumpTexture && v89.getEngine().getCaps().standardDerivatives && C10.BumpTextureEnabled) {
                v94.updateFloat3("vBumpInfos", this._bumpTexture.coordinatesIndex, 1 / this._bumpTexture.level, this.parallaxScaleBias);
                (0, vP15718.u)(this._bumpTexture, v94, "bump");
                if (v89._mirroredCameraPosition) {
                  v94.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1);
                } else {
                  v94.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1);
                }
              }
              if (this._refractionTexture && C10.RefractionTextureEnabled) {
                let vLN13 = 1;
                if (!this._refractionTexture.isCube) {
                  v94.Zf("refractionMatrix", this._refractionTexture.getReflectionTextureMatrix());
                  if (this._refractionTexture.depth) {
                    vLN13 = this._refractionTexture.depth;
                  }
                }
                v94.updateFloat4("vRefractionInfos", this._refractionTexture.level, this.indexOfRefraction, vLN13, this.invertRefractionY ? -1 : 1);
                if (this._refractionTexture.boundingBoxSize) {
                  const v96 = this._refractionTexture;
                  v94.updateVector3("vRefractionPosition", v96.boundingBoxPosition);
                  v94.updateVector3("vRefractionSize", v96.boundingBoxSize);
                }
              }
            }
            if (this.pointsCloud) {
              v94.updateFloat("pointSize", this.pointSize);
            }
            v94.updateColor4("vSpecularColor", this.specularColor, this.specularPower);
            v94.updateColor3("vEmissiveColor", C10.EmissiveTextureEnabled ? this.emissiveColor : vP1575.eL.BlackReadOnly);
            v94.updateColor4("vDiffuseColor", this.diffuseColor, this.alpha);
            v89.ambientColor.multiplyToRef(this.ambientColor, this._globalAmbientColor);
            v94.updateColor3("vAmbientColor", this._globalAmbientColor);
          }
          if (v89.texturesEnabled) {
            if (this._diffuseTexture && C10.DiffuseTextureEnabled) {
              v91.setTexture("diffuseSampler", this._diffuseTexture);
            }
            if (this._ambientTexture && C10.AmbientTextureEnabled) {
              v91.setTexture("ambientSampler", this._ambientTexture);
            }
            if (this._opacityTexture && C10.OpacityTextureEnabled) {
              v91.setTexture("opacitySampler", this._opacityTexture);
            }
            if (this._reflectionTexture && C10.ReflectionTextureEnabled) {
              if (this._reflectionTexture.isCube) {
                v91.setTexture("reflectionCubeSampler", this._reflectionTexture);
              } else {
                v91.setTexture("reflection2DSampler", this._reflectionTexture);
              }
            }
            if (this._emissiveTexture && C10.EmissiveTextureEnabled) {
              v91.setTexture("emissiveSampler", this._emissiveTexture);
            }
            if (this._lightmapTexture && C10.LightmapTextureEnabled) {
              v91.setTexture("lightmapSampler", this._lightmapTexture);
            }
            if (this._specularTexture && C10.SpecularTextureEnabled) {
              v91.setTexture("specularSampler", this._specularTexture);
            }
            if (this._bumpTexture && v89.getEngine().getCaps().standardDerivatives && C10.BumpTextureEnabled) {
              v91.setTexture("bumpSampler", this._bumpTexture);
            }
            if (this._refractionTexture && C10.RefractionTextureEnabled) {
              if (this._refractionTexture.isCube) {
                v91.setTexture("refractionCubeSampler", this._refractionTexture);
              } else {
                v91.setTexture("refraction2DSampler", this._refractionTexture);
              }
            }
          }
          if (this.YL().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(p174)) {
            this.YL().depthPeelingRenderer.bind(v91);
          }
          this._eventInfo.subMesh = p175;
          this._callbackPluginEventBindForSubMesh(this._eventInfo);
          (0, vP15717.g)(v91, this, v89);
          this.bindEyePosition(v91);
        } else if (v89.getEngine()._features.needToAlwaysBindUniformBuffers) {
          this._needToBindSceneUbo = true;
        }
        if (v93 || !this.isFrozen) {
          var v97;
          if (v89.lightsEnabled && !this._disableLighting) {
            (0, vP15718.h)(v89, p174, v91, v90, this._maxSimultaneousLights);
          }
          if (v89.fogEnabled && p174.applyFog && v89.fogMode !== vP1574.e.FOGMODE_NONE || this._reflectionTexture || this._refractionTexture || p174.receiveShadows || v90.PREPASS) {
            this.bindView(v91);
          }
          (0, vP15718.e)(v89, p174, v91);
          if (v90.NUM_MORPH_INFLUENCERS) {
            (0, vP15718.o)(p174, v91);
          }
          if (v90.BAKED_VERTEX_ANIMATION_TEXTURE) {
            if ((v97 = p174.bakedVertexAnimationManager) !== null && v97 !== undefined) {
              v97.bind(v91, v90.INSTANCES);
            }
          }
          if (this.useLogarithmicDepth) {
            (0, vP15718.l)(v90, v91, v89);
          }
          if (this._imageProcessingConfiguration && !this._imageProcessingConfiguration.applyByPostProcess) {
            this._imageProcessingConfiguration.bind(this._activeEffect);
          }
        }
        this._afterBind(p174, this._activeEffect, p175);
        v94.update();
      }
      getAnimatables() {
        const v98 = super.getAnimatables();
        if (this._diffuseTexture && this._diffuseTexture.animations && this._diffuseTexture.animations.length > 0) {
          v98.push(this._diffuseTexture);
        }
        if (this._ambientTexture && this._ambientTexture.animations && this._ambientTexture.animations.length > 0) {
          v98.push(this._ambientTexture);
        }
        if (this._opacityTexture && this._opacityTexture.animations && this._opacityTexture.animations.length > 0) {
          v98.push(this._opacityTexture);
        }
        if (this._reflectionTexture && this._reflectionTexture.animations && this._reflectionTexture.animations.length > 0) {
          v98.push(this._reflectionTexture);
        }
        if (this._emissiveTexture && this._emissiveTexture.animations && this._emissiveTexture.animations.length > 0) {
          v98.push(this._emissiveTexture);
        }
        if (this._specularTexture && this._specularTexture.animations && this._specularTexture.animations.length > 0) {
          v98.push(this._specularTexture);
        }
        if (this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0) {
          v98.push(this._bumpTexture);
        }
        if (this._lightmapTexture && this._lightmapTexture.animations && this._lightmapTexture.animations.length > 0) {
          v98.push(this._lightmapTexture);
        }
        if (this._refractionTexture && this._refractionTexture.animations && this._refractionTexture.animations.length > 0) {
          v98.push(this._refractionTexture);
        }
        return v98;
      }
      getActiveTextures() {
        const v99 = super.getActiveTextures();
        if (this._diffuseTexture) {
          v99.push(this._diffuseTexture);
        }
        if (this._ambientTexture) {
          v99.push(this._ambientTexture);
        }
        if (this._opacityTexture) {
          v99.push(this._opacityTexture);
        }
        if (this._reflectionTexture) {
          v99.push(this._reflectionTexture);
        }
        if (this._emissiveTexture) {
          v99.push(this._emissiveTexture);
        }
        if (this._specularTexture) {
          v99.push(this._specularTexture);
        }
        if (this._bumpTexture) {
          v99.push(this._bumpTexture);
        }
        if (this._lightmapTexture) {
          v99.push(this._lightmapTexture);
        }
        if (this._refractionTexture) {
          v99.push(this._refractionTexture);
        }
        return v99;
      }
      hasTexture(p176) {
        return !!super.hasTexture(p176) || this._diffuseTexture === p176 || this._ambientTexture === p176 || this._opacityTexture === p176 || this._reflectionTexture === p176 || this._emissiveTexture === p176 || this._specularTexture === p176 || this._bumpTexture === p176 || this._lightmapTexture === p176 || this._refractionTexture === p176;
      }
      dispose(p177, p178) {
        var v100;
        var v101;
        var v102;
        var v103;
        var v104;
        var v105;
        var v106;
        var v107;
        var v108;
        if (p178) {
          if ((v100 = this._diffuseTexture) !== null && v100 !== undefined) {
            v100.dispose();
          }
          if ((v101 = this._ambientTexture) !== null && v101 !== undefined) {
            v101.dispose();
          }
          if ((v102 = this._opacityTexture) !== null && v102 !== undefined) {
            v102.dispose();
          }
          if ((v103 = this._reflectionTexture) !== null && v103 !== undefined) {
            v103.dispose();
          }
          if ((v104 = this._emissiveTexture) !== null && v104 !== undefined) {
            v104.dispose();
          }
          if ((v105 = this._specularTexture) !== null && v105 !== undefined) {
            v105.dispose();
          }
          if ((v106 = this._bumpTexture) !== null && v106 !== undefined) {
            v106.dispose();
          }
          if ((v107 = this._lightmapTexture) !== null && v107 !== undefined) {
            v107.dispose();
          }
          if ((v108 = this._refractionTexture) !== null && v108 !== undefined) {
            v108.dispose();
          }
        }
        if (this._imageProcessingConfiguration && this._imageProcessingObserver) {
          this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver);
        }
        super.dispose(p177, p178);
      }
      clone(p179) {
        let v109 = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
        let v110 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
        const v111 = vP15719.b.Clone(() => new C10(p179, this.YL()), this, {
          cloneTexturesOnlyOnce: v109
        });
        v111.name = p179;
        v111.id = p179;
        this.Lf.copyTo(v111.Lf);
        this._clonePlugins(v111, v110);
        return v111;
      }
      static Parse(p180, p181, p182) {
        const v112 = vP15719.b.Parse(() => new C10(p180.name, p181), p180, p181, p182);
        if (p180.Lf) {
          v112.Lf.parse(p180.Lf, p181, p182);
        }
        vP1579.e._ParsePlugins(p180, v112, p181, p182);
        return v112;
      }
      static get DiffuseTextureEnabled() {
        return vP15714.e.DiffuseTextureEnabled;
      }
      static set DiffuseTextureEnabled(p183) {
        vP15714.e.DiffuseTextureEnabled = p183;
      }
      static get DetailTextureEnabled() {
        return vP15714.e.DetailTextureEnabled;
      }
      static set DetailTextureEnabled(p184) {
        vP15714.e.DetailTextureEnabled = p184;
      }
      static get AmbientTextureEnabled() {
        return vP15714.e.AmbientTextureEnabled;
      }
      static set AmbientTextureEnabled(p185) {
        vP15714.e.AmbientTextureEnabled = p185;
      }
      static get OpacityTextureEnabled() {
        return vP15714.e.OpacityTextureEnabled;
      }
      static set OpacityTextureEnabled(p186) {
        vP15714.e.OpacityTextureEnabled = p186;
      }
      static get ReflectionTextureEnabled() {
        return vP15714.e.ReflectionTextureEnabled;
      }
      static set ReflectionTextureEnabled(p187) {
        vP15714.e.ReflectionTextureEnabled = p187;
      }
      static get EmissiveTextureEnabled() {
        return vP15714.e.EmissiveTextureEnabled;
      }
      static set EmissiveTextureEnabled(p188) {
        vP15714.e.EmissiveTextureEnabled = p188;
      }
      static get SpecularTextureEnabled() {
        return vP15714.e.SpecularTextureEnabled;
      }
      static set SpecularTextureEnabled(p189) {
        vP15714.e.SpecularTextureEnabled = p189;
      }
      static get BumpTextureEnabled() {
        return vP15714.e.BumpTextureEnabled;
      }
      static set BumpTextureEnabled(p190) {
        vP15714.e.BumpTextureEnabled = p190;
      }
      static get LightmapTextureEnabled() {
        return vP15714.e.LightmapTextureEnabled;
      }
      static set LightmapTextureEnabled(p191) {
        vP15714.e.LightmapTextureEnabled = p191;
      }
      static get RefractionTextureEnabled() {
        return vP15714.e.RefractionTextureEnabled;
      }
      static set RefractionTextureEnabled(p192) {
        vP15714.e.RefractionTextureEnabled = p192;
      }
      static get ColorGradingTextureEnabled() {
        return vP15714.e.ColorGradingTextureEnabled;
      }
      static set ColorGradingTextureEnabled(p193) {
        vP15714.e.ColorGradingTextureEnabled = p193;
      }
      static get FresnelEnabled() {
        return vP15714.e.FresnelEnabled;
      }
      static set FresnelEnabled(p194) {
        vP15714.e.FresnelEnabled = p194;
      }
    }
    C10.ForceGLSL = false;
    (0, vP157.d)([(0, vP1572.y)("diffuseTexture")], C10.prototype, "_diffuseTexture", undefined);
    (0, vP157.d)([(0, vP1572.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], C10.prototype, "diffuseTexture", undefined);
    (0, vP157.d)([(0, vP1572.y)("ambientTexture")], C10.prototype, "_ambientTexture", undefined);
    (0, vP157.d)([(0, vP1572.e)("_markAllSubMeshesAsTexturesDirty")], C10.prototype, "ambientTexture", undefined);
    (0, vP157.d)([(0, vP1572.y)("opacityTexture")], C10.prototype, "_opacityTexture", undefined);
    (0, vP157.d)([(0, vP1572.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], C10.prototype, "opacityTexture", undefined);
    (0, vP157.d)([(0, vP1572.y)("reflectionTexture")], C10.prototype, "_reflectionTexture", undefined);
    (0, vP157.d)([(0, vP1572.e)("_markAllSubMeshesAsTexturesDirty")], C10.prototype, "reflectionTexture", undefined);
    (0, vP157.d)([(0, vP1572.y)("emissiveTexture")], C10.prototype, "_emissiveTexture", undefined);
    (0, vP157.d)([(0, vP1572.e)("_markAllSubMeshesAsTexturesDirty")], C10.prototype, "emissiveTexture", undefined);
    (0, vP157.d)([(0, vP1572.y)("specularTexture")], C10.prototype, "_specularTexture", undefined);
    (0, vP157.d)([(0, vP1572.e)("_markAllSubMeshesAsTexturesDirty")], C10.prototype, "specularTexture", undefined);
    (0, vP157.d)([(0, vP1572.y)("bumpTexture")], C10.prototype, "_bumpTexture", undefined);
    (0, vP157.d)([(0, vP1572.e)("_markAllSubMeshesAsTexturesDirty")], C10.prototype, "bumpTexture", undefined);
    (0, vP157.d)([(0, vP1572.y)("lightmapTexture")], C10.prototype, "_lightmapTexture", undefined);
    (0, vP157.d)([(0, vP1572.e)("_markAllSubMeshesAsTexturesDirty")], C10.prototype, "lightmapTexture", undefined);
    (0, vP157.d)([(0, vP1572.y)("refractionTexture")], C10.prototype, "_refractionTexture", undefined);
    (0, vP157.d)([(0, vP1572.e)("_markAllSubMeshesAsTexturesDirty")], C10.prototype, "refractionTexture", undefined);
    (0, vP157.d)([(0, vP1572.l)("ambient")], C10.prototype, "ambientColor", undefined);
    (0, vP157.d)([(0, vP1572.l)("diffuse")], C10.prototype, "diffuseColor", undefined);
    (0, vP157.d)([(0, vP1572.l)("specular")], C10.prototype, "specularColor", undefined);
    (0, vP157.d)([(0, vP1572.l)("emissive")], C10.prototype, "emissiveColor", undefined);
    (0, vP157.d)([(0, vP1572.F)()], C10.prototype, "specularPower", undefined);
    (0, vP157.d)([(0, vP1572.F)("useAlphaFromDiffuseTexture")], C10.prototype, "_useAlphaFromDiffuseTexture", undefined);
    Object.defineProperty(C10.prototype, "useAlphaFromDiffuseTexture", {
      get: function () {
        return this._useAlphaFromDiffuseTexture;
      },
      set: function (p195) {
        this._useAlphaFromDiffuseTexture = p195;
      },
      enumerable: true,
      configurable: true
    });
    (0, vP157.d)([(0, vP1572.F)("useEmissiveAsIllumination")], C10.prototype, "_useEmissiveAsIllumination", undefined);
    (0, vP157.d)([(0, vP1572.e)("_markAllSubMeshesAsTexturesDirty")], C10.prototype, "useEmissiveAsIllumination", undefined);
    (0, vP157.d)([(0, vP1572.F)("linkEmissiveWithDiffuse")], C10.prototype, "_linkEmissiveWithDiffuse", undefined);
    (0, vP157.d)([(0, vP1572.e)("_markAllSubMeshesAsTexturesDirty")], C10.prototype, "linkEmissiveWithDiffuse", undefined);
    (0, vP157.d)([(0, vP1572.F)("useSpecularOverAlpha")], C10.prototype, "_useSpecularOverAlpha", undefined);
    (0, vP157.d)([(0, vP1572.e)("_markAllSubMeshesAsTexturesDirty")], C10.prototype, "useSpecularOverAlpha", undefined);
    (0, vP157.d)([(0, vP1572.F)("useReflectionOverAlpha")], C10.prototype, "_useReflectionOverAlpha", undefined);
    (0, vP157.d)([(0, vP1572.e)("_markAllSubMeshesAsTexturesDirty")], C10.prototype, "useReflectionOverAlpha", undefined);
    (0, vP157.d)([(0, vP1572.F)("disableLighting")], C10.prototype, "_disableLighting", undefined);
    (0, vP157.d)([(0, vP1572.e)("_markAllSubMeshesAsLightsDirty")], C10.prototype, "disableLighting", undefined);
    (0, vP157.d)([(0, vP1572.F)("useObjectSpaceNormalMap")], C10.prototype, "_useObjectSpaceNormalMap", undefined);
    (0, vP157.d)([(0, vP1572.e)("_markAllSubMeshesAsTexturesDirty")], C10.prototype, "useObjectSpaceNormalMap", undefined);
    (0, vP157.d)([(0, vP1572.F)("useParallax")], C10.prototype, "_useParallax", undefined);
    (0, vP157.d)([(0, vP1572.e)("_markAllSubMeshesAsTexturesDirty")], C10.prototype, "useParallax", undefined);
    (0, vP157.d)([(0, vP1572.F)("useParallaxOcclusion")], C10.prototype, "_useParallaxOcclusion", undefined);
    (0, vP157.d)([(0, vP1572.e)("_markAllSubMeshesAsTexturesDirty")], C10.prototype, "useParallaxOcclusion", undefined);
    (0, vP157.d)([(0, vP1572.F)()], C10.prototype, "parallaxScaleBias", undefined);
    (0, vP157.d)([(0, vP1572.F)("roughness")], C10.prototype, "_roughness", undefined);
    (0, vP157.d)([(0, vP1572.e)("_markAllSubMeshesAsTexturesDirty")], C10.prototype, "roughness", undefined);
    (0, vP157.d)([(0, vP1572.F)()], C10.prototype, "indexOfRefraction", undefined);
    (0, vP157.d)([(0, vP1572.F)()], C10.prototype, "invertRefractionY", undefined);
    (0, vP157.d)([(0, vP1572.F)()], C10.prototype, "alphaCutOff", undefined);
    (0, vP157.d)([(0, vP1572.F)("useLightmapAsShadowmap")], C10.prototype, "_useLightmapAsShadowmap", undefined);
    (0, vP157.d)([(0, vP1572.e)("_markAllSubMeshesAsTexturesDirty")], C10.prototype, "useLightmapAsShadowmap", undefined);
    (0, vP157.d)([(0, vP1572.n)("diffuseFresnelParameters")], C10.prototype, "_diffuseFresnelParameters", undefined);
    (0, vP157.d)([(0, vP1572.e)("_markAllSubMeshesAsFresnelDirty")], C10.prototype, "diffuseFresnelParameters", undefined);
    (0, vP157.d)([(0, vP1572.n)("opacityFresnelParameters")], C10.prototype, "_opacityFresnelParameters", undefined);
    (0, vP157.d)([(0, vP1572.e)("_markAllSubMeshesAsFresnelAndMiscDirty")], C10.prototype, "opacityFresnelParameters", undefined);
    (0, vP157.d)([(0, vP1572.n)("reflectionFresnelParameters")], C10.prototype, "_reflectionFresnelParameters", undefined);
    (0, vP157.d)([(0, vP1572.e)("_markAllSubMeshesAsFresnelDirty")], C10.prototype, "reflectionFresnelParameters", undefined);
    (0, vP157.d)([(0, vP1572.n)("refractionFresnelParameters")], C10.prototype, "_refractionFresnelParameters", undefined);
    (0, vP157.d)([(0, vP1572.e)("_markAllSubMeshesAsFresnelDirty")], C10.prototype, "refractionFresnelParameters", undefined);
    (0, vP157.d)([(0, vP1572.n)("emissiveFresnelParameters")], C10.prototype, "_emissiveFresnelParameters", undefined);
    (0, vP157.d)([(0, vP1572.e)("_markAllSubMeshesAsFresnelDirty")], C10.prototype, "emissiveFresnelParameters", undefined);
    (0, vP157.d)([(0, vP1572.F)("useReflectionFresnelFromSpecular")], C10.prototype, "_useReflectionFresnelFromSpecular", undefined);
    (0, vP157.d)([(0, vP1572.e)("_markAllSubMeshesAsFresnelDirty")], C10.prototype, "useReflectionFresnelFromSpecular", undefined);
    (0, vP157.d)([(0, vP1572.F)("useGlossinessFromSpecularMapAlpha")], C10.prototype, "_useGlossinessFromSpecularMapAlpha", undefined);
    (0, vP157.d)([(0, vP1572.e)("_markAllSubMeshesAsTexturesDirty")], C10.prototype, "useGlossinessFromSpecularMapAlpha", undefined);
    (0, vP157.d)([(0, vP1572.F)("maxSimultaneousLights")], C10.prototype, "_maxSimultaneousLights", undefined);
    (0, vP157.d)([(0, vP1572.e)("_markAllSubMeshesAsLightsDirty")], C10.prototype, "maxSimultaneousLights", undefined);
    (0, vP157.d)([(0, vP1572.F)("invertNormalMapX")], C10.prototype, "_invertNormalMapX", undefined);
    (0, vP157.d)([(0, vP1572.e)("_markAllSubMeshesAsTexturesDirty")], C10.prototype, "invertNormalMapX", undefined);
    (0, vP157.d)([(0, vP1572.F)("invertNormalMapY")], C10.prototype, "_invertNormalMapY", undefined);
    (0, vP157.d)([(0, vP1572.e)("_markAllSubMeshesAsTexturesDirty")], C10.prototype, "invertNormalMapY", undefined);
    (0, vP157.d)([(0, vP1572.F)("twoSidedLighting")], C10.prototype, "_twoSidedLighting", undefined);
    (0, vP157.d)([(0, vP1572.e)("_markAllSubMeshesAsTexturesDirty")], C10.prototype, "twoSidedLighting", undefined);
    (0, vP157.d)([(0, vP1572.F)("applyDecalMapAfterDetailMap")], C10.prototype, "_applyDecalMapAfterDetailMap", undefined);
    (0, vP157.d)([(0, vP1572.e)("_markAllSubMeshesAsMiscDirty")], C10.prototype, "applyDecalMapAfterDetailMap", undefined);
    (0, vP15713.g)("BABYLON.StandardMaterial", C10);
    vP1574.e.DefaultMaterialFactory = p196 => new C10("default material", p196);
  }
};
//# sourceMappingURL=pz8l4l.25.4de58e10.chunk.js.map
//# debugId=c44067c1-4f59-5dd0-b42d-ad86244cde8d