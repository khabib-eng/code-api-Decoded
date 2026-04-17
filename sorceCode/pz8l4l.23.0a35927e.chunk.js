(function () {
  try {
    var v = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : {};
    var v2 = new v.Error().stack;
    if (v2) {
      v._sentryDebugIds = v._sentryDebugIds || {};
      v._sentryDebugIds[v2] = "3ad32573-48c6-5e99-97f7-cb857888aa1f";
    }
  } catch (e2) {}
})();
export const id = 23;
export const ids = [23];
export const modules = {
  17244: (p, p2, p3) => {
    p3.d(p2, {
      b: () => C
    });
    var vP3 = p3(16973);
    var vP32 = p3(17031);
    class C {
      constructor() {
        this.hit = false;
        this.distance = 0;
        this.pickedPoint = null;
        this.pickedMesh = null;
        this.bu = 0;
        this.bv = 0;
        this.faceId = -1;
        this.subMeshFaceId = -1;
        this.subMeshId = 0;
        this.pickedSprite = null;
        this.thinInstanceIndex = -1;
        this.ray = null;
        this.originMesh = null;
        this.aimTransform = null;
        this.gripTransform = null;
      }
      getNormal() {
        let v3 = arguments.length > 0 && arguments[0] !== undefined && arguments[0];
        let v4 = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
        if (!this.pickedMesh || v4 && !this.pickedMesh.isVerticesDataPresent(vP32.e.NormalKind)) {
          return null;
        }
        let v5;
        let v6 = this.pickedMesh.Mf();
        if (v6?.length === 0) {
          v6 = null;
        }
        const v7 = vP3.TmpVectors.bL[0];
        const v8 = vP3.TmpVectors.bL[1];
        const v9 = vP3.TmpVectors.bL[2];
        if (v4) {
          const v10 = this.pickedMesh.getVerticesData(vP32.e.NormalKind);
          let v11 = v6 ? vP3.bL.FromArrayToRef(v10, v6[this.faceId * 3] * 3, v7) : v7.jg(v10[this.faceId * 3 * 3], v10[this.faceId * 3 * 3 + 1], v10[this.faceId * 3 * 3 + 2]);
          let v12 = v6 ? vP3.bL.FromArrayToRef(v10, v6[this.faceId * 3 + 1] * 3, v8) : v8.jg(v10[(this.faceId * 3 + 1) * 3], v10[(this.faceId * 3 + 1) * 3 + 1], v10[(this.faceId * 3 + 1) * 3 + 2]);
          let v13 = v6 ? vP3.bL.FromArrayToRef(v10, v6[this.faceId * 3 + 2] * 3, v9) : v9.jg(v10[(this.faceId * 3 + 2) * 3], v10[(this.faceId * 3 + 2) * 3 + 1], v10[(this.faceId * 3 + 2) * 3 + 2]);
          v11 = v11.scale(this.bu);
          v12 = v12.scale(this.bv);
          v13 = v13.scale(1 - this.bu - this.bv);
          v5 = new vP3.bL(v11.x + v12.x + v13.x, v11.y + v12.y + v13.y, v11.z + v12.z + v13.z);
        } else {
          const v14 = this.pickedMesh.getVerticesData(vP32.e.PositionKind);
          const v15 = v6 ? vP3.bL.FromArrayToRef(v14, v6[this.faceId * 3] * 3, v7) : v7.jg(v14[this.faceId * 3 * 3], v14[this.faceId * 3 * 3 + 1], v14[this.faceId * 3 * 3 + 2]);
          const v16 = v6 ? vP3.bL.FromArrayToRef(v14, v6[this.faceId * 3 + 1] * 3, v8) : v8.jg(v14[(this.faceId * 3 + 1) * 3], v14[(this.faceId * 3 + 1) * 3 + 1], v14[(this.faceId * 3 + 1) * 3 + 2]);
          const v17 = v6 ? vP3.bL.FromArrayToRef(v14, v6[this.faceId * 3 + 2] * 3, v9) : v9.jg(v14[(this.faceId * 3 + 2) * 3], v14[(this.faceId * 3 + 2) * 3 + 1], v14[(this.faceId * 3 + 2) * 3 + 2]);
          const v18 = v15.Wy(v16);
          const v19 = v17.Wy(v16);
          v5 = vP3.bL.Cross(v18, v19);
        }
        const vF = (p4, p5) => {
          if (this.thinInstanceIndex !== -1) {
            const v20 = p4.thinInstanceGetWorldMatrices()[this.thinInstanceIndex];
            if (v20) {
              vP3.bL.TransformNormalToRef(p5, v20, p5);
            }
          }
          let v21 = p4.getWorldMatrix();
          if (p4.nonUniformScaling) {
            vP3.TmpVectors.Matrix[0].fC(v21);
            v21 = vP3.TmpVectors.Matrix[0];
            v21.setTranslationFromFloats(0, 0, 0);
            v21.invert();
            v21.transposeToRef(vP3.TmpVectors.Matrix[1]);
            v21 = vP3.TmpVectors.Matrix[1];
          }
          vP3.bL.TransformNormalToRef(p5, v21, p5);
        };
        if (v3) {
          vF(this.pickedMesh, v5);
        }
        if (this.ray) {
          const v22 = vP3.TmpVectors.bL[0].fC(v5);
          if (!v3) {
            vF(this.pickedMesh, v22);
          }
          if (vP3.bL.Dot(v22, this.ray.direction) > 0) {
            v5.negateInPlace();
          }
        }
        v5.normalize();
        return v5;
      }
      getTextureCoordinates(CC = vP32.e.UVKind) {
        if (!this.pickedMesh || !this.pickedMesh.isVerticesDataPresent(CC)) {
          return null;
        }
        const v23 = this.pickedMesh.Mf();
        if (!v23) {
          return null;
        }
        const v24 = this.pickedMesh.getVerticesData(CC);
        if (!v24) {
          return null;
        }
        let v25 = vP3.Vector2.OL(v24, v23[this.faceId * 3] * 2);
        let v26 = vP3.Vector2.OL(v24, v23[this.faceId * 3 + 1] * 2);
        let v27 = vP3.Vector2.OL(v24, v23[this.faceId * 3 + 2] * 2);
        v25 = v25.scale(this.bu);
        v26 = v26.scale(this.bv);
        v27 = v27.scale(1 - this.bu - this.bv);
        return new vP3.Vector2(v25.x + v26.x + v27.x, v25.y + v26.y + v27.y);
      }
    }
  },
  17261: (p6, p7, p8) => {
    var v28;
    p8.d(p7, {
      b: () => C2
    });
    (function (p9) {
      p9[p9.PointerMove = 0] = "PointerMove";
      p9[p9.PointerDown = 1] = "PointerDown";
      p9[p9.PointerUp = 2] = "PointerUp";
    })(v28 ||= {});
    class C2 {}
    C2.DOM_DELTA_PIXEL = 0;
    C2.DOM_DELTA_LINE = 1;
    C2.DOM_DELTA_PAGE = 2;
  },
  17259: (p10, p11, p12) => {
    p12.d(p11, {
      d: () => C3,
      g: () => C5,
      k: () => C4
    });
    class C3 {}
    C3.KEYDOWN = 1;
    C3.KEYUP = 2;
    class C4 {
      constructor(p13, p14) {
        this.type = p13;
        this.event = p14;
      }
    }
    class C5 extends C4 {
      get skipOnPointerObservable() {
        return this.skipOnKeyboardObservable;
      }
      set skipOnPointerObservable(p15) {
        this.skipOnKeyboardObservable = p15;
      }
      constructor(p16, p17) {
        super(p16, p17);
        this.type = p16;
        this.event = p17;
        this.skipOnKeyboardObservable = false;
      }
    }
  },
  17252: (p18, p19, p20) => {
    p20.d(p19, {
      e: () => C6,
      i: () => C8,
      k: () => C9
    });
    var vP20 = p20(16973);
    class C6 {}
    C6.POINTERDOWN = 1;
    C6.POINTERUP = 2;
    C6.POINTERMOVE = 4;
    C6.POINTERWHEEL = 8;
    C6.POINTERPICK = 16;
    C6.POINTERTAP = 32;
    C6.POINTERDOUBLETAP = 64;
    class C7 {
      constructor(p21, p22) {
        this.type = p21;
        this.event = p22;
      }
    }
    class C8 extends C7 {
      constructor(p23, p24, p25, p26) {
        super(p23, p24);
        this.ray = null;
        this.originalPickingInfo = null;
        this.skipOnPointerObservable = false;
        this.localPosition = new vP20.Vector2(p25, p26);
      }
    }
    class C9 extends C7 {
      get pickInfo() {
        if (!this._pickInfo) {
          this._generatePickInfo();
        }
        return this._pickInfo;
      }
      constructor(p27, p28, p29, fC = null) {
        super(p27, p28);
        this._pickInfo = p29;
        this._inputManager = fC;
      }
      _generatePickInfo() {
        if (this._inputManager) {
          this._pickInfo = this._inputManager._pickMove(this.event);
          this._inputManager._setRayOnPointerInfo(this._pickInfo, this.event);
          this._inputManager = null;
        }
      }
    }
  },
  17279: (p30, p31, p32) => {
    p32.d(p31, {
      e: () => C10
    });
    class C10 {
      static CompareLightsPriority(p33, p34) {
        if (p33.shadowEnabled !== p34.shadowEnabled) {
          return (p34.shadowEnabled ? 1 : 0) - (p33.shadowEnabled ? 1 : 0);
        } else {
          return p34.renderPriority - p33.renderPriority;
        }
      }
    }
    C10.FALLOFF_DEFAULT = 0;
    C10.FALLOFF_PHYSICAL = 1;
    C10.FALLOFF_GLTF = 2;
    C10.FALLOFF_STANDARD = 3;
    C10.LIGHTMAP_DEFAULT = 0;
    C10.LIGHTMAP_SPECULAR = 1;
    C10.LIGHTMAP_SHADOWSONLY = 2;
    C10.INTENSITYMODE_AUTOMATIC = 0;
    C10.INTENSITYMODE_LUMINOUSPOWER = 1;
    C10.INTENSITYMODE_LUMINOUSINTENSITY = 2;
    C10.INTENSITYMODE_ILLUMINANCE = 3;
    C10.INTENSITYMODE_LUMINANCE = 4;
    C10.LIGHTTYPEID_POINTLIGHT = 0;
    C10.LIGHTTYPEID_DIRECTIONALLIGHT = 1;
    C10.LIGHTTYPEID_SPOTLIGHT = 2;
    C10.LIGHTTYPEID_HEMISPHERICLIGHT = 3;
    C10.LIGHTTYPEID_RECT_AREALIGHT = 4;
  },
  17224: (p35, p36, p37) => {
    function f(p38) {
      p38.push("vCameraColorCurveNeutral", "vCameraColorCurvePositive", "vCameraColorCurveNegative");
    }
    p37.d(p36, {
      d: () => f
    });
  },
  17233: (p39, p40, p41) => {
    p41.d(p40, {
      b: () => f3,
      f: () => f2
    });
    var vP41 = p41(17224);
    function f2(p42, p43) {
      if (p43.EXPOSURE) {
        p42.push("exposureLinear");
      }
      if (p43.CONTRAST) {
        p42.push("contrast");
      }
      if (p43.COLORGRADING) {
        p42.push("colorTransformSettings");
      }
      if (p43.VIGNETTE || p43.DITHER) {
        p42.push("vInverseScreenSize");
      }
      if (p43.VIGNETTE) {
        p42.push("vignetteSettings1");
        p42.push("vignetteSettings2");
      }
      if (p43.COLORCURVES) {
        (0, vP41.d)(p42);
      }
      if (p43.DITHER) {
        p42.push("ditherIntensity");
      }
    }
    function f3(p44, p45) {
      if (p45.COLORGRADING) {
        p44.push("txColorTransform");
      }
    }
  },
  17222: (p46, p47, p48) => {
    p48.d(p47, {
      b: () => C12
    });
    var vP48 = p48(16960);
    var vP482 = p48(16965);
    var vP483 = p48(16796);
    var vP484 = p48(17009);
    var vP485 = p48(17000);
    var vP486 = p48(17224);
    class C11 {
      constructor() {
        this._dirty = true;
        this._tempColor = new vP484.Xg(0, 0, 0, 0);
        this._globalCurve = new vP484.Xg(0, 0, 0, 0);
        this._highlightsCurve = new vP484.Xg(0, 0, 0, 0);
        this._midtonesCurve = new vP484.Xg(0, 0, 0, 0);
        this._shadowsCurve = new vP484.Xg(0, 0, 0, 0);
        this._positiveCurve = new vP484.Xg(0, 0, 0, 0);
        this._negativeCurve = new vP484.Xg(0, 0, 0, 0);
        this._globalHue = 30;
        this._globalDensity = 0;
        this._globalSaturation = 0;
        this._globalExposure = 0;
        this._highlightsHue = 30;
        this._highlightsDensity = 0;
        this._highlightsSaturation = 0;
        this._highlightsExposure = 0;
        this._midtonesHue = 30;
        this._midtonesDensity = 0;
        this._midtonesSaturation = 0;
        this._midtonesExposure = 0;
        this._shadowsHue = 30;
        this._shadowsDensity = 0;
        this._shadowsSaturation = 0;
        this._shadowsExposure = 0;
      }
      get globalHue() {
        return this._globalHue;
      }
      set globalHue(p49) {
        this._globalHue = p49;
        this._dirty = true;
      }
      get globalDensity() {
        return this._globalDensity;
      }
      set globalDensity(p50) {
        this._globalDensity = p50;
        this._dirty = true;
      }
      get globalSaturation() {
        return this._globalSaturation;
      }
      set globalSaturation(p51) {
        this._globalSaturation = p51;
        this._dirty = true;
      }
      get globalExposure() {
        return this._globalExposure;
      }
      set globalExposure(p52) {
        this._globalExposure = p52;
        this._dirty = true;
      }
      get highlightsHue() {
        return this._highlightsHue;
      }
      set highlightsHue(p53) {
        this._highlightsHue = p53;
        this._dirty = true;
      }
      get highlightsDensity() {
        return this._highlightsDensity;
      }
      set highlightsDensity(p54) {
        this._highlightsDensity = p54;
        this._dirty = true;
      }
      get highlightsSaturation() {
        return this._highlightsSaturation;
      }
      set highlightsSaturation(p55) {
        this._highlightsSaturation = p55;
        this._dirty = true;
      }
      get highlightsExposure() {
        return this._highlightsExposure;
      }
      set highlightsExposure(p56) {
        this._highlightsExposure = p56;
        this._dirty = true;
      }
      get midtonesHue() {
        return this._midtonesHue;
      }
      set midtonesHue(p57) {
        this._midtonesHue = p57;
        this._dirty = true;
      }
      get midtonesDensity() {
        return this._midtonesDensity;
      }
      set midtonesDensity(p58) {
        this._midtonesDensity = p58;
        this._dirty = true;
      }
      get midtonesSaturation() {
        return this._midtonesSaturation;
      }
      set midtonesSaturation(p59) {
        this._midtonesSaturation = p59;
        this._dirty = true;
      }
      get midtonesExposure() {
        return this._midtonesExposure;
      }
      set midtonesExposure(p60) {
        this._midtonesExposure = p60;
        this._dirty = true;
      }
      get shadowsHue() {
        return this._shadowsHue;
      }
      set shadowsHue(p61) {
        this._shadowsHue = p61;
        this._dirty = true;
      }
      get shadowsDensity() {
        return this._shadowsDensity;
      }
      set shadowsDensity(p62) {
        this._shadowsDensity = p62;
        this._dirty = true;
      }
      get shadowsSaturation() {
        return this._shadowsSaturation;
      }
      set shadowsSaturation(p63) {
        this._shadowsSaturation = p63;
        this._dirty = true;
      }
      get shadowsExposure() {
        return this._shadowsExposure;
      }
      set shadowsExposure(p64) {
        this._shadowsExposure = p64;
        this._dirty = true;
      }
      getClassName() {
        return "ColorCurves";
      }
      static Bind(p65, p66, IC = "vCameraColorCurvePositive", fC = "vCameraColorCurveNeutral", ky = "vCameraColorCurveNegative") {
        if (p65._dirty) {
          p65._dirty = false;
          p65._getColorGradingDataToRef(p65._globalHue, p65._globalDensity, p65._globalSaturation, p65._globalExposure, p65._globalCurve);
          p65._getColorGradingDataToRef(p65._highlightsHue, p65._highlightsDensity, p65._highlightsSaturation, p65._highlightsExposure, p65._tempColor);
          p65._tempColor.multiplyToRef(p65._globalCurve, p65._highlightsCurve);
          p65._getColorGradingDataToRef(p65._midtonesHue, p65._midtonesDensity, p65._midtonesSaturation, p65._midtonesExposure, p65._tempColor);
          p65._tempColor.multiplyToRef(p65._globalCurve, p65._midtonesCurve);
          p65._getColorGradingDataToRef(p65._shadowsHue, p65._shadowsDensity, p65._shadowsSaturation, p65._shadowsExposure, p65._tempColor);
          p65._tempColor.multiplyToRef(p65._globalCurve, p65._shadowsCurve);
          p65._highlightsCurve.subtractToRef(p65._midtonesCurve, p65._positiveCurve);
          p65._midtonesCurve.subtractToRef(p65._shadowsCurve, p65._negativeCurve);
        }
        if (p66) {
          p66.setFloat4(p48, p65._positiveCurve.r, p65._positiveCurve.g, p65._positiveCurve.b, p65._positiveCurve.a);
          p66.setFloat4(vP48, p65._midtonesCurve.r, p65._midtonesCurve.g, p65._midtonesCurve.b, p65._midtonesCurve.a);
          p66.setFloat4(vP482, p65._negativeCurve.r, p65._negativeCurve.g, p65._negativeCurve.b, p65._negativeCurve.a);
        }
      }
      _getColorGradingDataToRef(p67, p68, p69, p70, p71) {
        if (p67 != null) {
          p67 = C11._Clamp(p67, 0, 360);
          p68 = C11._Clamp(p68, -100, 100);
          p69 = C11._Clamp(p69, -100, 100);
          p70 = C11._Clamp(p70, -100, 100);
          p68 = C11._ApplyColorGradingSliderNonlinear(p68);
          p68 *= 0.5;
          p70 = C11._ApplyColorGradingSliderNonlinear(p70);
          if (p68 < 0) {
            p68 *= -1;
            p67 = (p67 + 180) % 360;
          }
          C11._FromHSBToRef(p67, p68, 50 + p70 * 0.25, p71);
          p71.scaleToRef(2, p71);
          p71.a = 1 + p69 * 0.01;
        }
      }
      static _ApplyColorGradingSliderNonlinear(p72) {
        p72 /= 100;
        let v29 = Math.abs(p72);
        v29 = Math.pow(v29, 2);
        if (p72 < 0) {
          v29 *= -1;
        }
        v29 *= 100;
        return v29;
      }
      static _FromHSBToRef(p73, p74, p75, p76) {
        let v30 = C11._Clamp(p73, 0, 360);
        const v31 = C11._Clamp(p74 / 100, 0, 1);
        const v32 = C11._Clamp(p75 / 100, 0, 1);
        if (v31 === 0) {
          p76.r = v32;
          p76.g = v32;
          p76.b = v32;
        } else {
          v30 /= 60;
          const v33 = Math.floor(v30);
          const v34 = v30 - v33;
          const v35 = v32 * (1 - v31);
          const v36 = v32 * (1 - v31 * v34);
          const v37 = v32 * (1 - v31 * (1 - v34));
          switch (v33) {
            case 0:
              p76.r = v32;
              p76.g = v37;
              p76.b = v35;
              break;
            case 1:
              p76.r = v36;
              p76.g = v32;
              p76.b = v35;
              break;
            case 2:
              p76.r = v35;
              p76.g = v32;
              p76.b = v37;
              break;
            case 3:
              p76.r = v35;
              p76.g = v36;
              p76.b = v32;
              break;
            case 4:
              p76.r = v37;
              p76.g = v35;
              p76.b = v32;
              break;
            default:
              p76.r = v32;
              p76.g = v35;
              p76.b = v36;
          }
        }
        p76.a = 1;
      }
      static _Clamp(p77, p78, p79) {
        return Math.min(Math.max(p77, p78), p79);
      }
      clone() {
        return vP485.b.Clone(() => new C11(), this);
      }
      serialize() {
        return vP485.b.Serialize(this);
      }
      static Parse(p80) {
        return vP485.b.Parse(() => new C11(), p80, null, null);
      }
    }
    C11.PrepareUniforms = vP486.d;
    (0, vP48.d)([(0, vP482.F)()], C11.prototype, "_globalHue", undefined);
    (0, vP48.d)([(0, vP482.F)()], C11.prototype, "_globalDensity", undefined);
    (0, vP48.d)([(0, vP482.F)()], C11.prototype, "_globalSaturation", undefined);
    (0, vP48.d)([(0, vP482.F)()], C11.prototype, "_globalExposure", undefined);
    (0, vP48.d)([(0, vP482.F)()], C11.prototype, "_highlightsHue", undefined);
    (0, vP48.d)([(0, vP482.F)()], C11.prototype, "_highlightsDensity", undefined);
    (0, vP48.d)([(0, vP482.F)()], C11.prototype, "_highlightsSaturation", undefined);
    (0, vP48.d)([(0, vP482.F)()], C11.prototype, "_highlightsExposure", undefined);
    (0, vP48.d)([(0, vP482.F)()], C11.prototype, "_midtonesHue", undefined);
    (0, vP48.d)([(0, vP482.F)()], C11.prototype, "_midtonesDensity", undefined);
    (0, vP48.d)([(0, vP482.F)()], C11.prototype, "_midtonesSaturation", undefined);
    (0, vP48.d)([(0, vP482.F)()], C11.prototype, "_midtonesExposure", undefined);
    vP485.b._ColorCurvesParser = C11.Parse;
    var vP487 = p48(16939);
    var vP488 = p48(17233);
    var vP489 = p48(16927);
    class C12 {
      constructor() {
        this.colorCurves = new C11();
        this._colorCurvesEnabled = false;
        this._colorGradingEnabled = false;
        this._colorGradingWithGreenDepth = true;
        this._colorGradingBGR = true;
        this._exposure = 1;
        this._toneMappingEnabled = false;
        this._toneMappingType = C12.TONEMAPPING_STANDARD;
        this._contrast = 1;
        this.vignetteStretch = 0;
        this.vignetteCenterX = 0;
        this.vignetteCenterY = 0;
        this.vignetteWeight = 1.5;
        this.vignetteColor = new vP484.Xg(0, 0, 0, 0);
        this.vignetteCameraFov = 0.5;
        this._vignetteBlendMode = C12.VIGNETTEMODE_MULTIPLY;
        this._vignetteEnabled = false;
        this._ditheringEnabled = false;
        this._ditheringIntensity = 1 / 255;
        this._skipFinalColorClamp = false;
        this._applyByPostProcess = false;
        this._isEnabled = true;
        this.outputTextureWidth = 0;
        this.outputTextureHeight = 0;
        this.onUpdateParameters = new vP483.e();
      }
      get colorCurvesEnabled() {
        return this._colorCurvesEnabled;
      }
      set colorCurvesEnabled(p81) {
        if (this._colorCurvesEnabled !== p81) {
          this._colorCurvesEnabled = p81;
          this._updateParameters();
        }
      }
      get colorGradingTexture() {
        return this._colorGradingTexture;
      }
      set colorGradingTexture(p82) {
        if (this._colorGradingTexture !== p82) {
          this._colorGradingTexture = p82;
          this._updateParameters();
        }
      }
      get colorGradingEnabled() {
        return this._colorGradingEnabled;
      }
      set colorGradingEnabled(p83) {
        if (this._colorGradingEnabled !== p83) {
          this._colorGradingEnabled = p83;
          this._updateParameters();
        }
      }
      get colorGradingWithGreenDepth() {
        return this._colorGradingWithGreenDepth;
      }
      set colorGradingWithGreenDepth(p84) {
        if (this._colorGradingWithGreenDepth !== p84) {
          this._colorGradingWithGreenDepth = p84;
          this._updateParameters();
        }
      }
      get colorGradingBGR() {
        return this._colorGradingBGR;
      }
      set colorGradingBGR(p85) {
        if (this._colorGradingBGR !== p85) {
          this._colorGradingBGR = p85;
          this._updateParameters();
        }
      }
      get exposure() {
        return this._exposure;
      }
      set exposure(p86) {
        if (this._exposure !== p86) {
          this._exposure = p86;
          this._updateParameters();
        }
      }
      get toneMappingEnabled() {
        return this._toneMappingEnabled;
      }
      set toneMappingEnabled(p87) {
        if (this._toneMappingEnabled !== p87) {
          this._toneMappingEnabled = p87;
          this._updateParameters();
        }
      }
      get toneMappingType() {
        return this._toneMappingType;
      }
      set toneMappingType(p88) {
        if (this._toneMappingType !== p88) {
          this._toneMappingType = p88;
          this._updateParameters();
        }
      }
      get contrast() {
        return this._contrast;
      }
      set contrast(p89) {
        if (this._contrast !== p89) {
          this._contrast = p89;
          this._updateParameters();
        }
      }
      get vignetteCentreY() {
        return this.vignetteCenterY;
      }
      set vignetteCentreY(p90) {
        this.vignetteCenterY = p90;
      }
      get vignetteCentreX() {
        return this.vignetteCenterX;
      }
      set vignetteCentreX(p91) {
        this.vignetteCenterX = p91;
      }
      get vignetteBlendMode() {
        return this._vignetteBlendMode;
      }
      set vignetteBlendMode(p92) {
        if (this._vignetteBlendMode !== p92) {
          this._vignetteBlendMode = p92;
          this._updateParameters();
        }
      }
      get vignetteEnabled() {
        return this._vignetteEnabled;
      }
      set vignetteEnabled(p93) {
        if (this._vignetteEnabled !== p93) {
          this._vignetteEnabled = p93;
          this._updateParameters();
        }
      }
      get ditheringEnabled() {
        return this._ditheringEnabled;
      }
      set ditheringEnabled(p94) {
        if (this._ditheringEnabled !== p94) {
          this._ditheringEnabled = p94;
          this._updateParameters();
        }
      }
      get ditheringIntensity() {
        return this._ditheringIntensity;
      }
      set ditheringIntensity(p95) {
        if (this._ditheringIntensity !== p95) {
          this._ditheringIntensity = p95;
          this._updateParameters();
        }
      }
      get skipFinalColorClamp() {
        return this._skipFinalColorClamp;
      }
      set skipFinalColorClamp(p96) {
        if (this._skipFinalColorClamp !== p96) {
          this._skipFinalColorClamp = p96;
          this._updateParameters();
        }
      }
      get applyByPostProcess() {
        return this._applyByPostProcess;
      }
      set applyByPostProcess(p97) {
        if (this._applyByPostProcess !== p97) {
          this._applyByPostProcess = p97;
          this._updateParameters();
        }
      }
      get isEnabled() {
        return this._isEnabled;
      }
      set isEnabled(p98) {
        if (this._isEnabled !== p98) {
          this._isEnabled = p98;
          this._updateParameters();
        }
      }
      _updateParameters() {
        this.onUpdateParameters.notifyObservers(this);
      }
      getClassName() {
        return "ImageProcessingConfiguration";
      }
      prepareDefines(p99) {
        if ((arguments.length > 1 && arguments[1] !== undefined && arguments[1]) !== this.applyByPostProcess || !this._isEnabled) {
          p99.VIGNETTE = false;
          p99.TONEMAPPING = 0;
          p99.CONTRAST = false;
          p99.EXPOSURE = false;
          p99.COLORCURVES = false;
          p99.COLORGRADING = false;
          p99.COLORGRADING3D = false;
          p99.DITHER = false;
          p99.IMAGEPROCESSING = false;
          p99.SKIPFINALCOLORCLAMP = this.skipFinalColorClamp;
          p99.IMAGEPROCESSINGPOSTPROCESS = this.applyByPostProcess && this._isEnabled;
          return;
        }
        p99.VIGNETTE = this.vignetteEnabled;
        p99.VIGNETTEBLENDMODEMULTIPLY = this.vignetteBlendMode === C12._VIGNETTEMODE_MULTIPLY;
        p99.VIGNETTEBLENDMODEOPAQUE = !p99.VIGNETTEBLENDMODEMULTIPLY;
        if (this._toneMappingEnabled) {
          switch (this._toneMappingType) {
            case C12.TONEMAPPING_KHR_PBR_NEUTRAL:
              p99.TONEMAPPING = 3;
              break;
            case C12.TONEMAPPING_ACES:
              p99.TONEMAPPING = 2;
              break;
            default:
              p99.TONEMAPPING = 1;
          }
        } else {
          p99.TONEMAPPING = 0;
        }
        p99.CONTRAST = this.contrast !== 1;
        p99.EXPOSURE = this.exposure !== 1;
        p99.COLORCURVES = this.colorCurvesEnabled && !!this.colorCurves;
        p99.COLORGRADING = this.colorGradingEnabled && !!this.colorGradingTexture;
        if (p99.COLORGRADING) {
          p99.COLORGRADING3D = this.colorGradingTexture.is3D;
        } else {
          p99.COLORGRADING3D = false;
        }
        p99.SAMPLER3DGREENDEPTH = this.colorGradingWithGreenDepth;
        p99.SAMPLER3DBGRMAP = this.colorGradingBGR;
        p99.DITHER = this._ditheringEnabled;
        p99.IMAGEPROCESSINGPOSTPROCESS = this.applyByPostProcess;
        p99.SKIPFINALCOLORCLAMP = this.skipFinalColorClamp;
        p99.IMAGEPROCESSING = p99.VIGNETTE || !!p99.TONEMAPPING || p99.CONTRAST || p99.EXPOSURE || p99.COLORCURVES || p99.COLORGRADING || p99.DITHER;
      }
      isReady() {
        return !this.colorGradingEnabled || !this.colorGradingTexture || this.colorGradingTexture.isReady();
      }
      bind(p100, p101) {
        if (this._colorCurvesEnabled && this.colorCurves) {
          C11.Bind(this.colorCurves, p100);
        }
        if (this._vignetteEnabled || this._ditheringEnabled) {
          const v38 = 1 / (this.outputTextureWidth || p100.getEngine().getRenderWidth());
          const v39 = 1 / (this.outputTextureHeight || p100.getEngine().getRenderHeight());
          p100.setFloat2("vInverseScreenSize", v38, v39);
          if (this._ditheringEnabled) {
            p100.setFloat("ditherIntensity", this._ditheringIntensity * 0.5);
          }
          if (this._vignetteEnabled) {
            const v40 = p101 ?? v39 / v38;
            let v41 = Math.tan(this.vignetteCameraFov * 0.5);
            let v42 = v41 * v40;
            const v43 = Math.sqrt(v42 * v41);
            v42 = (0, vP487.k)(v42, v43, this.vignetteStretch);
            v41 = (0, vP487.k)(v41, v43, this.vignetteStretch);
            p100.setFloat4("vignetteSettings1", v42, v41, -v42 * this.vignetteCenterX, -v41 * this.vignetteCenterY);
            const v44 = this.vignetteWeight * -2;
            p100.setFloat4("vignetteSettings2", this.vignetteColor.r, this.vignetteColor.g, this.vignetteColor.b, v44);
          }
        }
        p100.setFloat("exposureLinear", this.exposure);
        p100.setFloat("contrast", this.contrast);
        if (this.colorGradingTexture) {
          p100.setTexture("txColorTransform", this.colorGradingTexture);
          const v45 = this.colorGradingTexture.getSize().height;
          p100.setFloat4("colorTransformSettings", (v45 - 1) / v45, 0.5 / v45, v45, this.colorGradingTexture.level);
        }
      }
      clone() {
        return vP485.b.Clone(() => new C12(), this);
      }
      serialize() {
        return vP485.b.Serialize(this);
      }
      static Parse(p102) {
        const v46 = vP485.b.Parse(() => new C12(), p102, null, null);
        if (p102.vignetteCentreX !== undefined) {
          v46.vignetteCenterX = p102.vignetteCentreX;
        }
        if (p102.vignetteCentreY !== undefined) {
          v46.vignetteCenterY = p102.vignetteCentreY;
        }
        return v46;
      }
      static get VIGNETTEMODE_MULTIPLY() {
        return this._VIGNETTEMODE_MULTIPLY;
      }
      static get VIGNETTEMODE_OPAQUE() {
        return this._VIGNETTEMODE_OPAQUE;
      }
    }
    C12.TONEMAPPING_STANDARD = 0;
    C12.TONEMAPPING_ACES = 1;
    C12.TONEMAPPING_KHR_PBR_NEUTRAL = 2;
    C12.PrepareUniforms = vP488.f;
    C12.PrepareSamplers = vP488.b;
    C12._VIGNETTEMODE_MULTIPLY = 0;
    C12._VIGNETTEMODE_OPAQUE = 1;
    (0, vP48.d)([(0, vP482.k)()], C12.prototype, "colorCurves", undefined);
    (0, vP48.d)([(0, vP482.F)()], C12.prototype, "_colorCurvesEnabled", undefined);
    (0, vP48.d)([(0, vP482.y)("colorGradingTexture")], C12.prototype, "_colorGradingTexture", undefined);
    (0, vP48.d)([(0, vP482.F)()], C12.prototype, "_colorGradingEnabled", undefined);
    (0, vP48.d)([(0, vP482.F)()], C12.prototype, "_colorGradingWithGreenDepth", undefined);
    (0, vP48.d)([(0, vP482.F)()], C12.prototype, "_colorGradingBGR", undefined);
    (0, vP48.d)([(0, vP482.F)()], C12.prototype, "_exposure", undefined);
    (0, vP48.d)([(0, vP482.F)()], C12.prototype, "_toneMappingEnabled", undefined);
    (0, vP48.d)([(0, vP482.F)()], C12.prototype, "_toneMappingType", undefined);
    (0, vP48.d)([(0, vP482.F)()], C12.prototype, "_contrast", undefined);
    (0, vP48.d)([(0, vP482.F)()], C12.prototype, "vignetteStretch", undefined);
    (0, vP48.d)([(0, vP482.F)()], C12.prototype, "vignetteCenterX", undefined);
    (0, vP48.d)([(0, vP482.F)()], C12.prototype, "vignetteCenterY", undefined);
    (0, vP48.d)([(0, vP482.F)()], C12.prototype, "vignetteWeight", undefined);
    (0, vP48.d)([(0, vP482.m)()], C12.prototype, "vignetteColor", undefined);
    (0, vP48.d)([(0, vP482.F)()], C12.prototype, "vignetteCameraFov", undefined);
    (0, vP48.d)([(0, vP482.F)()], C12.prototype, "_vignetteBlendMode", undefined);
    (0, vP48.d)([(0, vP482.F)()], C12.prototype, "_vignetteEnabled", undefined);
    (0, vP48.d)([(0, vP482.F)()], C12.prototype, "_ditheringEnabled", undefined);
    (0, vP48.d)([(0, vP482.F)()], C12.prototype, "_ditheringIntensity", undefined);
    (0, vP48.d)([(0, vP482.F)()], C12.prototype, "_skipFinalColorClamp", undefined);
    (0, vP48.d)([(0, vP482.F)()], C12.prototype, "_applyByPostProcess", undefined);
    (0, vP48.d)([(0, vP482.F)()], C12.prototype, "_isEnabled", undefined);
    (0, vP48.d)([(0, vP482.F)()], C12.prototype, "outputTextureWidth", undefined);
    (0, vP48.d)([(0, vP482.F)()], C12.prototype, "outputTextureHeight", undefined);
    vP485.b._ImageProcessingConfigurationParser = C12.Parse;
    (0, vP489.g)("BABYLON.ImageProcessingConfiguration", C12);
  },
  17239: (p103, p104, p105) => {
    p105.d(p104, {
      d: () => C13
    });
    var vP105 = p105(16811);
    var vP1052 = p105(16787);
    class C13 {
      constructor(p106, p107, p108, p109, ky = false) {
        this._valueCache = {};
        this._engine = p106;
        this._noUBO = !p106.supportsUniformBuffers || ky;
        this._dynamic = p108;
        this._name = p109 ?? "no-name";
        this._data = p107 || [];
        this._uniformLocations = {};
        this._uniformSizes = {};
        this._uniformArraySizes = {};
        this._uniformLocationPointer = 0;
        this._needSync = false;
        if (this._engine._features.trackUbosInFrame) {
          this._buffers = [];
          this._bufferIndex = -1;
          this._createBufferOnWrite = false;
          this._currentFrameId = 0;
        }
        if (this._noUBO) {
          this.updateMatrix3x3 = this._updateMatrix3x3ForEffect;
          this.updateMatrix2x2 = this._updateMatrix2x2ForEffect;
          this.updateFloat = this._updateFloatForEffect;
          this.updateFloat2 = this._updateFloat2ForEffect;
          this.updateFloat3 = this._updateFloat3ForEffect;
          this.updateFloat4 = this._updateFloat4ForEffect;
          this.updateFloatArray = this._updateFloatArrayForEffect;
          this.updateArray = this._updateArrayForEffect;
          this.updateIntArray = this._updateIntArrayForEffect;
          this.updateUIntArray = this._updateUIntArrayForEffect;
          this.Zf = this._updateMatrixForEffect;
          this.updateMatrices = this._updateMatricesForEffect;
          this.updateVector3 = this._updateVector3ForEffect;
          this.updateVector4 = this._updateVector4ForEffect;
          this.updateColor3 = this._updateColor3ForEffect;
          this.updateColor4 = this._updateColor4ForEffect;
          this.updateDirectColor4 = this._updateDirectColor4ForEffect;
          this.updateInt = this._updateIntForEffect;
          this.updateInt2 = this._updateInt2ForEffect;
          this.updateInt3 = this._updateInt3ForEffect;
          this.updateInt4 = this._updateInt4ForEffect;
          this.updateUInt = this._updateUIntForEffect;
          this.updateUInt2 = this._updateUInt2ForEffect;
          this.updateUInt3 = this._updateUInt3ForEffect;
          this.updateUInt4 = this._updateUInt4ForEffect;
        } else {
          this._engine._uniformBuffers.push(this);
          this.updateMatrix3x3 = this._updateMatrix3x3ForUniform;
          this.updateMatrix2x2 = this._updateMatrix2x2ForUniform;
          this.updateFloat = this._updateFloatForUniform;
          this.updateFloat2 = this._updateFloat2ForUniform;
          this.updateFloat3 = this._updateFloat3ForUniform;
          this.updateFloat4 = this._updateFloat4ForUniform;
          this.updateFloatArray = this._updateFloatArrayForUniform;
          this.updateArray = this._updateArrayForUniform;
          this.updateIntArray = this._updateIntArrayForUniform;
          this.updateUIntArray = this._updateUIntArrayForUniform;
          this.Zf = this._updateMatrixForUniform;
          this.updateMatrices = this._updateMatricesForUniform;
          this.updateVector3 = this._updateVector3ForUniform;
          this.updateVector4 = this._updateVector4ForUniform;
          this.updateColor3 = this._updateColor3ForUniform;
          this.updateColor4 = this._updateColor4ForUniform;
          this.updateDirectColor4 = this._updateDirectColor4ForUniform;
          this.updateInt = this._updateIntForUniform;
          this.updateInt2 = this._updateInt2ForUniform;
          this.updateInt3 = this._updateInt3ForUniform;
          this.updateInt4 = this._updateInt4ForUniform;
          this.updateUInt = this._updateUIntForUniform;
          this.updateUInt2 = this._updateUInt2ForUniform;
          this.updateUInt3 = this._updateUInt3ForUniform;
          this.updateUInt4 = this._updateUInt4ForUniform;
        }
      }
      get useUbo() {
        return !this._noUBO;
      }
      get isSync() {
        return !this._needSync;
      }
      isDynamic() {
        return this._dynamic !== undefined;
      }
      getData() {
        return this._bufferData;
      }
      getBuffer() {
        return this._buffer;
      }
      _fillAlignment(p110) {
        let v47;
        v47 = p110 <= 2 ? p110 : 4;
        if (this._uniformLocationPointer % v47 !== 0) {
          const v48 = this._uniformLocationPointer;
          this._uniformLocationPointer += v47 - this._uniformLocationPointer % v47;
          const v49 = this._uniformLocationPointer - v48;
          for (let vLN0 = 0; vLN0 < v49; vLN0++) {
            this._data.push(0);
          }
        }
      }
      addUniform(p111, p112) {
        let v50;
        let v51 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        if (!this._noUBO && this._uniformLocations[p111] === undefined) {
          if (v51 > 0) {
            if (p112 instanceof Array) {
              throw "addUniform should not be use with Array in UBO: " + p111;
            }
            this._fillAlignment(4);
            this._uniformArraySizes[p111] = {
              strideSize: p112,
              arraySize: v51
            };
            if (p112 == 16) {
              p112 *= v51;
            } else {
              p112 = p112 * v51 + (4 - p112) * v51;
            }
            v50 = [];
            for (let vLN02 = 0; vLN02 < p112; vLN02++) {
              v50.push(0);
            }
          } else {
            if (p112 instanceof Array) {
              v50 = p112;
              p112 = v50.length;
            } else {
              v50 = [];
              for (let vLN03 = 0; vLN03 < p112; vLN03++) {
                v50.push(0);
              }
            }
            this._fillAlignment(p112);
          }
          this._uniformSizes[p111] = p112;
          this._uniformLocations[p111] = this._uniformLocationPointer;
          this._uniformLocationPointer += p112;
          for (let vLN04 = 0; vLN04 < p112; vLN04++) {
            this._data.push(v50[vLN04]);
          }
          this._needSync = true;
        }
      }
      addMatrix(p113, p114) {
        this.addUniform(p113, Array.prototype.slice.call(p114.cf()));
      }
      addFloat2(p115, p116, p117) {
        const vA = [p116, p117];
        this.addUniform(p115, vA);
      }
      addFloat3(p118, p119, p120, p121) {
        const vA2 = [p119, p120, p121];
        this.addUniform(p118, vA2);
      }
      addColor3(p122, p123) {
        const vA3 = [p123.r, p123.g, p123.b];
        this.addUniform(p122, vA3);
      }
      addColor4(p124, p125, p126) {
        const vA4 = [p125.r, p125.g, p125.b, p126];
        this.addUniform(p124, vA4);
      }
      addVector3(p127, p128) {
        const vA5 = [p128.x, p128.y, p128.z];
        this.addUniform(p127, vA5);
      }
      addMatrix3x3(p129) {
        this.addUniform(p129, 12);
      }
      addMatrix2x2(p130) {
        this.addUniform(p130, 8);
      }
      create() {
        if (!this._noUBO && !this._buffer) {
          this._fillAlignment(4);
          this._bufferData = new Float32Array(this._data);
          this._rebuild();
          this._needSync = true;
        }
      }
      _getNames() {
        const vA6 = [];
        let vLN05 = 0;
        for (const v52 in this._uniformLocations) {
          vA6.push(v52);
          if (++vLN05 === 10) {
            break;
          }
        }
        return vA6.join(",");
      }
      _rebuild() {
        if (!this._noUBO && this._bufferData) {
          if (this._dynamic) {
            this._buffer = this._engine.createDynamicUniformBuffer(this._bufferData, this._name + "_UniformList:" + this._getNames());
          } else {
            this._buffer = this._engine.createUniformBuffer(this._bufferData, this._name + "_UniformList:" + this._getNames());
          }
          if (this._engine._features.trackUbosInFrame) {
            this._buffers.push([this._buffer, this._engine._features.checkUbosContentBeforeUpload ? this._bufferData.slice() : undefined]);
            this._bufferIndex = this._buffers.length - 1;
            this._createBufferOnWrite = false;
          }
        }
      }
      _rebuildAfterContextLost() {
        if (this._engine._features.trackUbosInFrame) {
          this._buffers = [];
          this._currentFrameId = 0;
        }
        this._rebuild();
      }
      get _numBuffers() {
        return this._buffers.length;
      }
      get _indexBuffer() {
        return this._bufferIndex;
      }
      get name() {
        return this._name;
      }
      get currentEffect() {
        return this._currentEffect;
      }
      _buffersEqual(p131, p132) {
        for (let vLN06 = 0; vLN06 < p131.length; ++vLN06) {
          if (p131[vLN06] !== p132[vLN06]) {
            return false;
          }
        }
        return true;
      }
      _copyBuffer(p133, p134) {
        for (let vLN07 = 0; vLN07 < p133.length; ++vLN07) {
          p134[vLN07] = p133[vLN07];
        }
      }
      update() {
        if (!this._noUBO) {
          this.bindUniformBuffer();
          if (this._buffer) {
            if (this._dynamic || this._needSync) {
              if (this._buffers && this._buffers.length > 1 && this._buffers[this._bufferIndex][1]) {
                if (this._buffersEqual(this._bufferData, this._buffers[this._bufferIndex][1])) {
                  this._needSync = false;
                  this._createBufferOnWrite = this._engine._features.trackUbosInFrame;
                  return;
                }
                this._copyBuffer(this._bufferData, this._buffers[this._bufferIndex][1]);
              }
              this._engine.updateUniformBuffer(this._buffer, this._bufferData);
              if (this._engine._features._collectUbosUpdatedInFrame) {
                C13._UpdatedUbosInFrame[this._name] ||= 0;
                C13._UpdatedUbosInFrame[this._name]++;
              }
              this._needSync = false;
              this._createBufferOnWrite = this._engine._features.trackUbosInFrame;
            } else {
              this._createBufferOnWrite = this._engine._features.trackUbosInFrame;
            }
          } else {
            this.create();
          }
        }
      }
      _createNewBuffer() {
        if (this._bufferIndex + 1 < this._buffers.length) {
          this._bufferIndex++;
          this._buffer = this._buffers[this._bufferIndex][0];
          this._createBufferOnWrite = false;
          this._needSync = true;
        } else {
          this._rebuild();
        }
      }
      _checkNewFrame() {
        if (this._engine._features.trackUbosInFrame && this._currentFrameId !== this._engine.frameId) {
          this._currentFrameId = this._engine.frameId;
          this._createBufferOnWrite = false;
          if (this._buffers && this._buffers.length > 0) {
            this._needSync = this._bufferIndex !== 0;
            this._bufferIndex = 0;
            this._buffer = this._buffers[this._bufferIndex][0];
          } else {
            this._bufferIndex = -1;
          }
        }
      }
      updateUniform(p135, p136, p137) {
        this._checkNewFrame();
        let v53 = this._uniformLocations[p135];
        if (v53 === undefined) {
          if (this._buffer) {
            vP105.e.Error("Cannot add an uniform after UBO has been created. uniformName=" + p135);
            return;
          }
          this.addUniform(p135, p137);
          v53 = this._uniformLocations[p135];
        }
        if (!this._buffer) {
          this.create();
        }
        if (this._dynamic) {
          for (let vLN08 = 0; vLN08 < p137; vLN08++) {
            this._bufferData[v53 + vLN08] = p136[vLN08];
          }
        } else {
          let v54 = false;
          for (let vLN09 = 0; vLN09 < p137; vLN09++) {
            if (p137 === 16 && !this._engine._features.uniformBufferHardCheckMatrix || this._bufferData[v53 + vLN09] !== Math.fround(p136[vLN09])) {
              v54 = true;
              if (this._createBufferOnWrite) {
                this._createNewBuffer();
              }
              this._bufferData[v53 + vLN09] = p136[vLN09];
            }
          }
          this._needSync = this._needSync || v54;
        }
      }
      updateUniformArray(p138, p139, p140) {
        this._checkNewFrame();
        const v55 = this._uniformLocations[p138];
        if (v55 === undefined) {
          vP105.e.Error("Cannot add an uniform Array dynamically. Please, add it using addUniform and make sure that uniform buffers are supported by the current engine.");
          return;
        }
        if (!this._buffer) {
          this.create();
        }
        const v56 = this._uniformArraySizes[p138];
        if (this._dynamic) {
          for (let vLN010 = 0; vLN010 < p140; vLN010++) {
            this._bufferData[v55 + vLN010] = p139[vLN010];
          }
        } else {
          let v57 = false;
          let vLN011 = 0;
          let vLN012 = 0;
          for (let vLN013 = 0; vLN013 < p140; vLN013++) {
            if (this._bufferData[v55 + vLN012 * 4 + vLN011] !== vP1052.Tools.FloatRound(p139[vLN013])) {
              v57 = true;
              if (this._createBufferOnWrite) {
                this._createNewBuffer();
              }
              this._bufferData[v55 + vLN012 * 4 + vLN011] = p139[vLN013];
            }
            vLN011++;
            if (vLN011 === v56.strideSize) {
              for (; vLN011 < 4; vLN011++) {
                this._bufferData[v55 + vLN012 * 4 + vLN011] = 0;
              }
              vLN011 = 0;
              vLN012++;
            }
          }
          this._needSync = this._needSync || v57;
        }
      }
      _cacheMatrix(p141, p142) {
        this._checkNewFrame();
        const v58 = this._valueCache[p141];
        const v59 = p142.updateFlag;
        return (v58 === undefined || v58 !== v59) && (this._valueCache[p141] = v59, true);
      }
      _updateMatrix3x3ForUniform(p143, p144) {
        for (let vLN014 = 0; vLN014 < 3; vLN014++) {
          C13._TempBuffer[vLN014 * 4] = p144[vLN014 * 3];
          C13._TempBuffer[vLN014 * 4 + 1] = p144[vLN014 * 3 + 1];
          C13._TempBuffer[vLN014 * 4 + 2] = p144[vLN014 * 3 + 2];
          C13._TempBuffer[vLN014 * 4 + 3] = 0;
        }
        this.updateUniform(p143, C13._TempBuffer, 12);
      }
      _updateMatrix3x3ForEffect(p145, p146) {
        this._currentEffect.setMatrix3x3(p145, p146);
      }
      _updateMatrix2x2ForEffect(p147, p148) {
        this._currentEffect.setMatrix2x2(p147, p148);
      }
      _updateMatrix2x2ForUniform(p149, p150) {
        for (let vLN015 = 0; vLN015 < 2; vLN015++) {
          C13._TempBuffer[vLN015 * 4] = p150[vLN015 * 2];
          C13._TempBuffer[vLN015 * 4 + 1] = p150[vLN015 * 2 + 1];
          C13._TempBuffer[vLN015 * 4 + 2] = 0;
          C13._TempBuffer[vLN015 * 4 + 3] = 0;
        }
        this.updateUniform(p149, C13._TempBuffer, 8);
      }
      _updateFloatForEffect(p151, p152) {
        this._currentEffect.setFloat(p151, p152);
      }
      _updateFloatForUniform(p153, p154) {
        C13._TempBuffer[0] = p154;
        this.updateUniform(p153, C13._TempBuffer, 1);
      }
      _updateFloat2ForEffect(p155, p156, p157, fC = "") {
        this._currentEffect.setFloat2(p155 + fC, p156, p157);
      }
      _updateFloat2ForUniform(p158, p159, p160) {
        C13._TempBuffer[0] = p159;
        C13._TempBuffer[1] = p160;
        this.updateUniform(p158, C13._TempBuffer, 2);
      }
      _updateFloat3ForEffect(p161, p162, p163, p164, ky = "") {
        this._currentEffect.setFloat3(p161 + ky, p162, p163, p164);
      }
      _updateFloat3ForUniform(p165, p166, p167, p168) {
        C13._TempBuffer[0] = p166;
        C13._TempBuffer[1] = p167;
        C13._TempBuffer[2] = p168;
        this.updateUniform(p165, C13._TempBuffer, 3);
      }
      _updateFloat4ForEffect(p169, p170, p171, p172, p173, gC = "") {
        this._currentEffect.setFloat4(p169 + gC, p170, p171, p172, p173);
      }
      _updateFloat4ForUniform(p174, p175, p176, p177, p178) {
        C13._TempBuffer[0] = p175;
        C13._TempBuffer[1] = p176;
        C13._TempBuffer[2] = p177;
        C13._TempBuffer[3] = p178;
        this.updateUniform(p174, C13._TempBuffer, 4);
      }
      _updateFloatArrayForEffect(p179, p180) {
        this._currentEffect.setFloatArray(p179, p180);
      }
      _updateFloatArrayForUniform(p181, p182) {
        this.updateUniformArray(p181, p182, p182.length);
      }
      _updateArrayForEffect(p183, p184) {
        this._currentEffect.setArray(p183, p184);
      }
      _updateArrayForUniform(p185, p186) {
        this.updateUniformArray(p185, p186, p186.length);
      }
      _updateIntArrayForEffect(p187, p188) {
        this._currentEffect.setIntArray(p187, p188);
      }
      _updateIntArrayForUniform(p189, p190) {
        C13._TempBufferInt32View.set(p190);
        this.updateUniformArray(p189, C13._TempBuffer, p190.length);
      }
      _updateUIntArrayForEffect(p191, p192) {
        this._currentEffect.setUIntArray(p191, p192);
      }
      _updateUIntArrayForUniform(p193, p194) {
        C13._TempBufferUInt32View.set(p194);
        this.updateUniformArray(p193, C13._TempBuffer, p194.length);
      }
      _updateMatrixForEffect(p195, p196) {
        this._currentEffect.setMatrix(p195, p196);
      }
      _updateMatrixForUniform(p197, p198) {
        if (this._cacheMatrix(p197, p198)) {
          this.updateUniform(p197, p198.cf(), 16);
        }
      }
      _updateMatricesForEffect(p199, p200) {
        this._currentEffect.setMatrices(p199, p200);
      }
      _updateMatricesForUniform(p201, p202) {
        this.updateUniform(p201, p202, p202.length);
      }
      _updateVector3ForEffect(p203, p204) {
        this._currentEffect.setVector3(p203, p204);
      }
      _updateVector3ForUniform(p205, p206) {
        C13._TempBuffer[0] = p206.x;
        C13._TempBuffer[1] = p206.y;
        C13._TempBuffer[2] = p206.z;
        this.updateUniform(p205, C13._TempBuffer, 3);
      }
      _updateVector4ForEffect(p207, p208) {
        this._currentEffect.setVector4(p207, p208);
      }
      _updateVector4ForUniform(p209, p210) {
        C13._TempBuffer[0] = p210.x;
        C13._TempBuffer[1] = p210.y;
        C13._TempBuffer[2] = p210.z;
        C13._TempBuffer[3] = p210.w;
        this.updateUniform(p209, C13._TempBuffer, 4);
      }
      _updateColor3ForEffect(p211, p212, IC = "") {
        this._currentEffect.setColor3(p211 + IC, p212);
      }
      _updateColor3ForUniform(p213, p214) {
        C13._TempBuffer[0] = p214.r;
        C13._TempBuffer[1] = p214.g;
        C13._TempBuffer[2] = p214.b;
        this.updateUniform(p213, C13._TempBuffer, 3);
      }
      _updateColor4ForEffect(p215, p216, p217, fC = "") {
        this._currentEffect.setColor4(p215 + fC, p216, p217);
      }
      _updateDirectColor4ForEffect(p218, p219, IC = "") {
        this._currentEffect.setDirectColor4(p218 + IC, p219);
      }
      _updateColor4ForUniform(p220, p221, p222) {
        C13._TempBuffer[0] = p221.r;
        C13._TempBuffer[1] = p221.g;
        C13._TempBuffer[2] = p221.b;
        C13._TempBuffer[3] = p222;
        this.updateUniform(p220, C13._TempBuffer, 4);
      }
      _updateDirectColor4ForUniform(p223, p224) {
        C13._TempBuffer[0] = p224.r;
        C13._TempBuffer[1] = p224.g;
        C13._TempBuffer[2] = p224.b;
        C13._TempBuffer[3] = p224.a;
        this.updateUniform(p223, C13._TempBuffer, 4);
      }
      _updateIntForEffect(p225, p226, IC = "") {
        this._currentEffect.setInt(p225 + IC, p226);
      }
      _updateIntForUniform(p227, p228) {
        C13._TempBufferInt32View[0] = p228;
        this.updateUniform(p227, C13._TempBuffer, 1);
      }
      _updateInt2ForEffect(p229, p230, p231, fC = "") {
        this._currentEffect.setInt2(p229 + fC, p230, p231);
      }
      _updateInt2ForUniform(p232, p233, p234) {
        C13._TempBufferInt32View[0] = p233;
        C13._TempBufferInt32View[1] = p234;
        this.updateUniform(p232, C13._TempBuffer, 2);
      }
      _updateInt3ForEffect(p235, p236, p237, p238, ky = "") {
        this._currentEffect.setInt3(p235 + ky, p236, p237, p238);
      }
      _updateInt3ForUniform(p239, p240, p241, p242) {
        C13._TempBufferInt32View[0] = p240;
        C13._TempBufferInt32View[1] = p241;
        C13._TempBufferInt32View[2] = p242;
        this.updateUniform(p239, C13._TempBuffer, 3);
      }
      _updateInt4ForEffect(p243, p244, p245, p246, p247, gC = "") {
        this._currentEffect.setInt4(p243 + gC, p244, p245, p246, p247);
      }
      _updateInt4ForUniform(p248, p249, p250, p251, p252) {
        C13._TempBufferInt32View[0] = p249;
        C13._TempBufferInt32View[1] = p250;
        C13._TempBufferInt32View[2] = p251;
        C13._TempBufferInt32View[3] = p252;
        this.updateUniform(p248, C13._TempBuffer, 4);
      }
      _updateUIntForEffect(p253, p254, IC = "") {
        this._currentEffect.setUInt(p253 + IC, p254);
      }
      _updateUIntForUniform(p255, p256) {
        C13._TempBufferUInt32View[0] = p256;
        this.updateUniform(p255, C13._TempBuffer, 1);
      }
      _updateUInt2ForEffect(p257, p258, p259, fC = "") {
        this._currentEffect.setUInt2(p257 + fC, p258, p259);
      }
      _updateUInt2ForUniform(p260, p261, p262) {
        C13._TempBufferUInt32View[0] = p261;
        C13._TempBufferUInt32View[1] = p262;
        this.updateUniform(p260, C13._TempBuffer, 2);
      }
      _updateUInt3ForEffect(p263, p264, p265, p266, ky = "") {
        this._currentEffect.setUInt3(p263 + ky, p264, p265, p266);
      }
      _updateUInt3ForUniform(p267, p268, p269, p270) {
        C13._TempBufferUInt32View[0] = p268;
        C13._TempBufferUInt32View[1] = p269;
        C13._TempBufferUInt32View[2] = p270;
        this.updateUniform(p267, C13._TempBuffer, 3);
      }
      _updateUInt4ForEffect(p271, p272, p273, p274, p275, gC = "") {
        this._currentEffect.setUInt4(p271 + gC, p272, p273, p274, p275);
      }
      _updateUInt4ForUniform(p276, p277, p278, p279, p280) {
        C13._TempBufferUInt32View[0] = p277;
        C13._TempBufferUInt32View[1] = p278;
        C13._TempBufferUInt32View[2] = p279;
        C13._TempBufferUInt32View[3] = p280;
        this.updateUniform(p276, C13._TempBuffer, 4);
      }
      setTexture(p281, p282) {
        this._currentEffect.setTexture(p281, p282);
      }
      setTextureArray(p283, p284) {
        this._currentEffect.setTextureArray(p283, p284);
      }
      bindTexture(p285, p286) {
        this._currentEffect._bindTexture(p285, p286);
      }
      updateUniformDirectly(p287, p288) {
        this.updateUniform(p287, p288, p288.length);
        this.update();
      }
      bindToEffect(p289, p290) {
        this._currentEffect = p289;
        this._currentEffectName = p290;
      }
      bindUniformBuffer() {
        if (!this._noUBO && this._buffer && this._currentEffect) {
          this._currentEffect.bindUniformBuffer(this._buffer, this._currentEffectName);
        }
      }
      unbindEffect() {
        this._currentEffect = undefined;
        this._currentEffectName = undefined;
      }
      setDataBuffer(p291) {
        if (!this._buffers) {
          return this._buffer === p291;
        }
        for (let vLN016 = 0; vLN016 < this._buffers.length; ++vLN016) {
          if (this._buffers[vLN016][0] === p291) {
            this._bufferIndex = vLN016;
            this._buffer = p291;
            this._createBufferOnWrite = false;
            this._currentEffect = undefined;
            if (this._buffers.length > 1 && this._buffers[vLN016][1]) {
              this._bufferData.set(this._buffers[vLN016][1]);
            }
            this._valueCache = {};
            this._currentFrameId = this._engine.frameId;
            return true;
          }
        }
        return false;
      }
      dispose() {
        if (this._noUBO) {
          return;
        }
        const v60 = this._engine._uniformBuffers;
        const v61 = v60.indexOf(this);
        if (v61 !== -1) {
          v60[v61] = v60[v60.length - 1];
          v60.pop();
        }
        if (this._engine._features.trackUbosInFrame && this._buffers) {
          for (let vLN017 = 0; vLN017 < this._buffers.length; ++vLN017) {
            const v62 = this._buffers[vLN017][0];
            this._engine._releaseBuffer(v62);
          }
        } else if (this._buffer && this._engine._releaseBuffer(this._buffer)) {
          this._buffer = null;
        }
      }
    }
    C13._UpdatedUbosInFrame = {};
    C13._MAX_UNIFORM_SIZE = 256;
    C13._TempBuffer = new Float32Array(C13._MAX_UNIFORM_SIZE);
    C13._TempBufferInt32View = new Int32Array(C13._TempBuffer.buffer);
    C13._TempBufferUInt32View = new Uint32Array(C13._TempBuffer.buffer);
  },
  17275: (p292, p293, p294) => {
    p294.d(p293, {
      c: () => C14
    });
    class C14 {
      static get UniqueId() {
        const v63 = this._UniqueIdCounter;
        this._UniqueIdCounter++;
        return v63;
      }
    }
    C14._UniqueIdCounter = 1;
  },
  17268: (p295, p296, p297) => {
    p297.d(p296, {
      e: () => C15
    });
    class C15 {}
    C15._IsPickingAvailable = false;
  },
  17213: (p298, p299, p300) => {
    p300.d(p299, {
      e: () => C28
    });
    var vP300 = p300(18);
    var vP3002 = p300(16787);
    var vP3003 = p300(16821);
    var vP3004 = p300(16796);
    var vP3005 = p300(17061);
    class C16 {
      constructor() {
        this._count = 0;
        this._data = {};
      }
      fC(p301) {
        this.clear();
        p301.forEach((p302, p303) => this.add(p302, p303));
      }
      get(p304) {
        const v64 = this._data[p304];
        if (v64 !== undefined) {
          return v64;
        }
      }
      getOrAddWithFactory(p305, p306) {
        let v65 = this.get(p305);
        if (v65 === undefined) {
          v65 = p306(p305);
          if (v65) {
            this.add(p305, v65);
          }
        }
        return v65;
      }
      getOrAdd(p307, p308) {
        const v66 = this.get(p307);
        if (v66 !== undefined) {
          return v66;
        } else {
          this.add(p307, p308);
          return p308;
        }
      }
      contains(p309) {
        return this._data[p309] !== undefined;
      }
      add(p310, p311) {
        return this._data[p310] === undefined && (this._data[p310] = p311, ++this._count, true);
      }
      set(p312, p313) {
        return this._data[p312] !== undefined && (this._data[p312] = p313, true);
      }
      getAndRemove(p314) {
        const v67 = this.get(p314);
        if (v67 !== undefined) {
          delete this._data[p314];
          --this._count;
          return v67;
        } else {
          return null;
        }
      }
      remove(p315) {
        return !!this.contains(p315) && (delete this._data[p315], --this._count, true);
      }
      clear() {
        this._data = {};
        this._count = 0;
      }
      get count() {
        return this._count;
      }
      forEach(p316) {
        for (const v68 in this._data) {
          p316(v68, this._data[v68]);
        }
      }
      first(p317) {
        for (const v69 in this._data) {
          const vP317 = p317(v69, this._data[v69]);
          if (vP317) {
            return vP317;
          }
        }
        return null;
      }
    }
    var vP3006 = p300(17002);
    var vP3007 = p300(16973);
    var vP3008 = p300(17222);
    var vP3009 = p300(17239);
    var vP30010 = p300(17244);
    class C17 {
      constructor(p318, p319, p320, p321, p322, p323) {
        this.source = p318;
        this.pointerX = p319;
        this.pointerY = p320;
        this.meshUnderPointer = p321;
        this.sourceEvent = p322;
        this.additionalData = p323;
      }
      static CreateNew(p324, p325, p326) {
        const v70 = p324.YL();
        return new C17(p324, v70.pointerX, v70.pointerY, v70.meshUnderPointer || p324, p325, p326);
      }
      static CreateNewFromSprite(p327, p328, p329, p330) {
        return new C17(p327, p328.pointerX, p328.pointerY, p328.meshUnderPointer, p329, p330);
      }
      static CreateNewFromScene(p331, p332) {
        return new C17(null, p331.pointerX, p331.pointerY, p331.meshUnderPointer, p332);
      }
      static CreateNewFromPrimitive(p333, p334, p335, p336) {
        return new C17(p333, p334.x, p334.y, null, p335, p336);
      }
    }
    var vP30011 = p300(17026);
    var vP30012 = p300(17052);
    var vP30013 = p300(17247);
    var vP30014 = p300(16805);
    var vP30015 = p300(16837);
    var vP30016 = p300(16829);
    var vP30017 = p300(17252);
    class C18 {
      constructor() {
        this.hoverCursor = "";
        this.actions = [];
        this.isRecursive = false;
        this.disposeWhenUnowned = true;
      }
      static get HasTriggers() {
        for (const v71 in C18.Triggers) {
          if (Object.prototype.hasOwnProperty.call(C18.Triggers, v71)) {
            return true;
          }
        }
        return false;
      }
      static get HasPickTriggers() {
        for (const v72 in C18.Triggers) {
          if (Object.prototype.hasOwnProperty.call(C18.Triggers, v72)) {
            const vParseInt = parseInt(v72);
            if (vParseInt >= 1 && vParseInt <= 7) {
              return true;
            }
          }
        }
        return false;
      }
      static HasSpecificTrigger(p337) {
        for (const v73 in C18.Triggers) {
          if (Object.prototype.hasOwnProperty.call(C18.Triggers, v73)) {
            if (parseInt(v73) === p337) {
              return true;
            }
          }
        }
        return false;
      }
    }
    C18.Triggers = {};
    var v74;
    var v75;
    var v76;
    var v77;
    var v78;
    var v79;
    var v80;
    var vP30018 = p300(17259);
    (function (p338) {
      p338[p338.Generic = 0] = "Generic";
      p338[p338.Keyboard = 1] = "Keyboard";
      p338[p338.Mouse = 2] = "Mouse";
      p338[p338.Touch = 3] = "Touch";
      p338[p338.DualShock = 4] = "DualShock";
      p338[p338.Xbox = 5] = "Xbox";
      p338[p338.Switch = 6] = "Switch";
      p338[p338.DualSense = 7] = "DualSense";
    })(v74 ||= {});
    (function (p339) {
      p339[p339.Horizontal = 0] = "Horizontal";
      p339[p339.Vertical = 1] = "Vertical";
      p339[p339.LeftClick = 2] = "LeftClick";
      p339[p339.MiddleClick = 3] = "MiddleClick";
      p339[p339.RightClick = 4] = "RightClick";
      p339[p339.BrowserBack = 5] = "BrowserBack";
      p339[p339.BrowserForward = 6] = "BrowserForward";
      p339[p339.MouseWheelX = 7] = "MouseWheelX";
      p339[p339.MouseWheelY = 8] = "MouseWheelY";
      p339[p339.MouseWheelZ = 9] = "MouseWheelZ";
      p339[p339.Move = 12] = "Move";
    })(v75 ||= {});
    (function (p340) {
      p340[p340.Horizontal = 0] = "Horizontal";
      p340[p340.Vertical = 1] = "Vertical";
      p340[p340.LeftClick = 2] = "LeftClick";
      p340[p340.MiddleClick = 3] = "MiddleClick";
      p340[p340.RightClick = 4] = "RightClick";
      p340[p340.BrowserBack = 5] = "BrowserBack";
      p340[p340.BrowserForward = 6] = "BrowserForward";
      p340[p340.MouseWheelX = 7] = "MouseWheelX";
      p340[p340.MouseWheelY = 8] = "MouseWheelY";
      p340[p340.MouseWheelZ = 9] = "MouseWheelZ";
      p340[p340.DeltaHorizontal = 10] = "DeltaHorizontal";
      p340[p340.DeltaVertical = 11] = "DeltaVertical";
    })(v76 ||= {});
    (function (p341) {
      p341[p341.Cross = 0] = "Cross";
      p341[p341.Circle = 1] = "Circle";
      p341[p341.Square = 2] = "Square";
      p341[p341.Triangle = 3] = "Triangle";
      p341[p341.L1 = 4] = "L1";
      p341[p341.R1 = 5] = "R1";
      p341[p341.L2 = 6] = "L2";
      p341[p341.R2 = 7] = "R2";
      p341[p341.Share = 8] = "Share";
      p341[p341.Options = 9] = "Options";
      p341[p341.L3 = 10] = "L3";
      p341[p341.R3 = 11] = "R3";
      p341[p341.DPadUp = 12] = "DPadUp";
      p341[p341.DPadDown = 13] = "DPadDown";
      p341[p341.DPadLeft = 14] = "DPadLeft";
      p341[p341.DPadRight = 15] = "DPadRight";
      p341[p341.Home = 16] = "Home";
      p341[p341.TouchPad = 17] = "TouchPad";
      p341[p341.LStickXAxis = 18] = "LStickXAxis";
      p341[p341.LStickYAxis = 19] = "LStickYAxis";
      p341[p341.RStickXAxis = 20] = "RStickXAxis";
      p341[p341.RStickYAxis = 21] = "RStickYAxis";
    })(v77 ||= {});
    (function (p342) {
      p342[p342.Cross = 0] = "Cross";
      p342[p342.Circle = 1] = "Circle";
      p342[p342.Square = 2] = "Square";
      p342[p342.Triangle = 3] = "Triangle";
      p342[p342.L1 = 4] = "L1";
      p342[p342.R1 = 5] = "R1";
      p342[p342.L2 = 6] = "L2";
      p342[p342.R2 = 7] = "R2";
      p342[p342.Create = 8] = "Create";
      p342[p342.Options = 9] = "Options";
      p342[p342.L3 = 10] = "L3";
      p342[p342.R3 = 11] = "R3";
      p342[p342.DPadUp = 12] = "DPadUp";
      p342[p342.DPadDown = 13] = "DPadDown";
      p342[p342.DPadLeft = 14] = "DPadLeft";
      p342[p342.DPadRight = 15] = "DPadRight";
      p342[p342.Home = 16] = "Home";
      p342[p342.TouchPad = 17] = "TouchPad";
      p342[p342.LStickXAxis = 18] = "LStickXAxis";
      p342[p342.LStickYAxis = 19] = "LStickYAxis";
      p342[p342.RStickXAxis = 20] = "RStickXAxis";
      p342[p342.RStickYAxis = 21] = "RStickYAxis";
    })(v78 ||= {});
    (function (p343) {
      p343[p343.A = 0] = "A";
      p343[p343.B = 1] = "B";
      p343[p343.X = 2] = "X";
      p343[p343.Y = 3] = "Y";
      p343[p343.LB = 4] = "LB";
      p343[p343.RB = 5] = "RB";
      p343[p343.LT = 6] = "LT";
      p343[p343.RT = 7] = "RT";
      p343[p343.Back = 8] = "Back";
      p343[p343.Start = 9] = "Start";
      p343[p343.LS = 10] = "LS";
      p343[p343.RS = 11] = "RS";
      p343[p343.DPadUp = 12] = "DPadUp";
      p343[p343.DPadDown = 13] = "DPadDown";
      p343[p343.DPadLeft = 14] = "DPadLeft";
      p343[p343.DPadRight = 15] = "DPadRight";
      p343[p343.Home = 16] = "Home";
      p343[p343.LStickXAxis = 17] = "LStickXAxis";
      p343[p343.LStickYAxis = 18] = "LStickYAxis";
      p343[p343.RStickXAxis = 19] = "RStickXAxis";
      p343[p343.RStickYAxis = 20] = "RStickYAxis";
    })(v79 ||= {});
    (function (p344) {
      p344[p344.B = 0] = "B";
      p344[p344.A = 1] = "A";
      p344[p344.Y = 2] = "Y";
      p344[p344.X = 3] = "X";
      p344[p344.L = 4] = "L";
      p344[p344.R = 5] = "R";
      p344[p344.ZL = 6] = "ZL";
      p344[p344.ZR = 7] = "ZR";
      p344[p344.Minus = 8] = "Minus";
      p344[p344.Plus = 9] = "Plus";
      p344[p344.LS = 10] = "LS";
      p344[p344.RS = 11] = "RS";
      p344[p344.DPadUp = 12] = "DPadUp";
      p344[p344.DPadDown = 13] = "DPadDown";
      p344[p344.DPadLeft = 14] = "DPadLeft";
      p344[p344.DPadRight = 15] = "DPadRight";
      p344[p344.Home = 16] = "Home";
      p344[p344.Capture = 17] = "Capture";
      p344[p344.LStickXAxis = 18] = "LStickXAxis";
      p344[p344.LStickYAxis = 19] = "LStickYAxis";
      p344[p344.RStickXAxis = 20] = "RStickXAxis";
      p344[p344.RStickYAxis = 21] = "RStickYAxis";
    })(v80 ||= {});
    var vP30019 = p300(17261);
    class C19 {
      static CreateDeviceEvent(p345, p346, p347, p348, p349, p350, p351) {
        switch (p345) {
          case v74.Keyboard:
            return this._CreateKeyboardEvent(p347, p348, p349, p350);
          case v74.Mouse:
            if (p347 === v75.MouseWheelX || p347 === v75.MouseWheelY || p347 === v75.MouseWheelZ) {
              return this._CreateWheelEvent(p345, p346, p347, p348, p349, p350);
            }
          case v74.Touch:
            return this._CreatePointerEvent(p345, p346, p347, p348, p349, p350, p351);
          default:
            throw `Unable to generate event for device ${v74[p345]}`;
        }
      }
      static _CreatePointerEvent(p352, p353, p354, p355, p356, p357, p358) {
        const v81 = this._CreateMouseEvent(p352, p353, p354, p355, p356, p357);
        if (p352 === v74.Mouse) {
          v81.deviceType = v74.Mouse;
          v81.pointerId = 1;
          v81.pointerType = "mouse";
        } else {
          v81.deviceType = v74.Touch;
          v81.pointerId = p358 ?? p353;
          v81.pointerType = "touch";
        }
        let vLN018 = 0;
        vLN018 += p356.pollInput(p352, p353, v75.LeftClick);
        vLN018 += p356.pollInput(p352, p353, v75.RightClick) * 2;
        vLN018 += p356.pollInput(p352, p353, v75.MiddleClick) * 4;
        v81.buttons = vLN018;
        if (p354 === v75.Move) {
          v81.type = "pointermove";
        } else if (p354 >= v75.LeftClick && p354 <= v75.RightClick) {
          v81.type = p355 === 1 ? "pointerdown" : "pointerup";
          v81.button = p354 - 2;
        }
        return v81;
      }
      static _CreateWheelEvent(p359, p360, p361, p362, p363, p364) {
        const v82 = this._CreateMouseEvent(p359, p360, p361, p362, p363, p364);
        v82.pointerId = 1;
        v82.type = "wheel";
        v82.deltaMode = vP30019.b.DOM_DELTA_PIXEL;
        v82.deltaX = 0;
        v82.deltaY = 0;
        v82.deltaZ = 0;
        switch (p361) {
          case v75.MouseWheelX:
            v82.deltaX = p362;
            break;
          case v75.MouseWheelY:
            v82.deltaY = p362;
            break;
          case v75.MouseWheelZ:
            v82.deltaZ = p362;
        }
        return v82;
      }
      static _CreateMouseEvent(p365, p366, p367, p368, p369, p370) {
        const v83 = this._CreateEvent(p370);
        const v84 = p369.pollInput(p365, p366, v75.Horizontal);
        const v85 = p369.pollInput(p365, p366, v75.Vertical);
        if (p370) {
          v83.movementX = 0;
          v83.movementY = 0;
          v83.offsetX = v83.movementX - p370.getBoundingClientRect().x;
          v83.offsetY = v83.movementY - p370.getBoundingClientRect().y;
        } else {
          v83.movementX = p369.pollInput(p365, p366, 10);
          v83.movementY = p369.pollInput(p365, p366, 11);
          v83.offsetX = 0;
          v83.offsetY = 0;
        }
        this._CheckNonCharacterKeys(v83, p369);
        v83.clientX = v84;
        v83.clientY = v85;
        v83.x = v84;
        v83.y = v85;
        v83.deviceType = p365;
        v83.deviceSlot = p366;
        v83.inputIndex = p367;
        return v83;
      }
      static _CreateKeyboardEvent(p371, p372, p373, p374) {
        const v86 = this._CreateEvent(p374);
        this._CheckNonCharacterKeys(v86, p373);
        v86.deviceType = v74.Keyboard;
        v86.deviceSlot = 0;
        v86.inputIndex = p371;
        v86.type = p372 === 1 ? "keydown" : "keyup";
        v86.key = String.fromCharCode(p371);
        v86.keyCode = p371;
        return v86;
      }
      static _CheckNonCharacterKeys(p375, p376) {
        const v87 = p376.isDeviceAvailable(v74.Keyboard);
        const v88 = v87 && p376.pollInput(v74.Keyboard, 0, 18) === 1;
        const v89 = v87 && p376.pollInput(v74.Keyboard, 0, 17) === 1;
        const v90 = v87 && (p376.pollInput(v74.Keyboard, 0, 91) === 1 || p376.pollInput(v74.Keyboard, 0, 92) === 1 || p376.pollInput(v74.Keyboard, 0, 93) === 1);
        const v91 = v87 && p376.pollInput(v74.Keyboard, 0, 16) === 1;
        p375.altKey = v88;
        p375.ctrlKey = v89;
        p375.metaKey = v90;
        p375.shiftKey = v91;
      }
      static _CreateEvent(p377) {
        const vO = {
          preventDefault: () => {}
        };
        vO.target = p377;
        return vO;
      }
    }
    class C20 {
      constructor(p378, p379, p380) {
        this._nativeInput = _native.DeviceInputSystem ? new _native.DeviceInputSystem(p378, p379, (p381, p382, p383, p384) => {
          const v92 = C19.CreateDeviceEvent(p381, p382, p383, p384, this);
          p380(p381, p382, v92);
        }) : this._createDummyNativeInput();
      }
      pollInput(p385, p386, p387) {
        return this._nativeInput.pollInput(p385, p386, p387);
      }
      isDeviceAvailable(p388) {
        return p388 === v74.Mouse || p388 === v74.Touch;
      }
      dispose() {
        this._nativeInput.dispose();
      }
      _createDummyNativeInput() {
        return {
          pollInput: () => 0,
          isDeviceAvailable: () => false,
          dispose: () => {}
        };
      }
    }
    const v93 = Object.keys(v75).length / 2;
    class C21 {
      constructor(p389, p390, p391, p392) {
        this._inputs = [];
        this._keyboardActive = false;
        this._pointerActive = false;
        this._usingSafari = vP3002.Tools.IsSafari();
        this._usingMacOs = (0, vP30014.g)() && /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform);
        this._keyboardDownEvent = p393 => {};
        this._keyboardUpEvent = p394 => {};
        this._keyboardBlurEvent = p395 => {};
        this._pointerMoveEvent = p396 => {};
        this._pointerDownEvent = p397 => {};
        this._pointerUpEvent = p398 => {};
        this._pointerCancelEvent = p399 => {};
        this._pointerCancelTouch = p400 => {};
        this._pointerLeaveEvent = p401 => {};
        this._pointerWheelEvent = p402 => {};
        this._pointerBlurEvent = p403 => {};
        this._pointerMacOsChromeOutEvent = p404 => {};
        this._eventsAttached = false;
        this._mouseId = -1;
        this._isUsingFirefox = (0, vP30014.g)() && navigator.userAgent && navigator.userAgent.indexOf("Firefox") !== -1;
        this._isUsingChromium = (0, vP30014.g)() && navigator.userAgent && navigator.userAgent.indexOf("Chrome") !== -1;
        this._maxTouchPoints = 0;
        this._pointerInputClearObserver = null;
        this._gamepadConnectedEvent = p405 => {};
        this._gamepadDisconnectedEvent = p406 => {};
        this._eventPrefix = vP3002.Tools.GetPointerPrefix(p389);
        this._engine = p389;
        this._onDeviceConnected = p390;
        this._onDeviceDisconnected = p391;
        this._onInputChanged = p392;
        this._mouseId = this._isUsingFirefox ? 0 : 1;
        this._enableEvents();
        if (this._usingMacOs) {
          this._metaKeys = [];
        }
        this._engine._onEngineViewChanged ||= () => {
          this._enableEvents();
        };
      }
      pollInput(p407, p408, p409) {
        const v94 = this._inputs[p407][p408];
        if (!v94) {
          throw `Unable to find device ${v74[p407]}`;
        }
        if (p407 >= v74.DualShock && p407 <= v74.DualSense) {
          this._updateDevice(p407, p408, p409);
        }
        const v95 = v94[p409];
        if (v95 === undefined) {
          throw `Unable to find input ${p409} for device ${v74[p407]} in slot ${p408}`;
        }
        if (p409 === v75.Move) {
          vP3002.Tools.Warn("Unable to provide information for PointerInput.Move.  Try using PointerInput.Horizontal or PointerInput.Vertical for move data.");
        }
        return v95;
      }
      isDeviceAvailable(p410) {
        return this._inputs[p410] !== undefined;
      }
      dispose() {
        this._onDeviceConnected = () => {};
        this._onDeviceDisconnected = () => {};
        this._onInputChanged = () => {};
        delete this._engine._onEngineViewChanged;
        if (this._elementToAttachTo) {
          this._disableEvents();
        }
      }
      _enableEvents() {
        const v96 = this === null || this === undefined ? undefined : this._engine.getInputElement();
        if (v96 && (!this._eventsAttached || this._elementToAttachTo !== v96)) {
          this._disableEvents();
          if (this._inputs) {
            for (const v97 of this._inputs) {
              if (v97) {
                for (const v98 in v97) {
                  const v99 = v97[+v98];
                  if (v99) {
                    for (let vLN019 = 0; vLN019 < v99.length; vLN019++) {
                      v99[vLN019] = 0;
                    }
                  }
                }
              }
            }
          }
          this._elementToAttachTo = v96;
          this._elementToAttachTo.tabIndex = this._elementToAttachTo.tabIndex !== -1 ? this._elementToAttachTo.tabIndex : this._engine.canvasTabIndex;
          this._handleKeyActions();
          this._handlePointerActions();
          this._handleGamepadActions();
          this._eventsAttached = true;
          this._checkForConnectedDevices();
        }
      }
      _disableEvents() {
        if (this._elementToAttachTo) {
          this._elementToAttachTo.removeEventListener("blur", this._keyboardBlurEvent);
          this._elementToAttachTo.removeEventListener("blur", this._pointerBlurEvent);
          this._elementToAttachTo.removeEventListener("keydown", this._keyboardDownEvent);
          this._elementToAttachTo.removeEventListener("keyup", this._keyboardUpEvent);
          this._elementToAttachTo.removeEventListener(this._eventPrefix + "move", this._pointerMoveEvent);
          this._elementToAttachTo.removeEventListener(this._eventPrefix + "down", this._pointerDownEvent);
          this._elementToAttachTo.removeEventListener(this._eventPrefix + "up", this._pointerUpEvent);
          this._elementToAttachTo.removeEventListener(this._eventPrefix + "cancel", this._pointerCancelEvent);
          this._elementToAttachTo.removeEventListener(this._eventPrefix + "TI", this._pointerLeaveEvent);
          this._elementToAttachTo.removeEventListener(this._wheelEventName, this._pointerWheelEvent);
          if (this._usingMacOs && this._isUsingChromium) {
            this._elementToAttachTo.removeEventListener("lostpointercapture", this._pointerMacOsChromeOutEvent);
          }
          window.removeEventListener("gamepadconnected", this._gamepadConnectedEvent);
          window.removeEventListener("gamepaddisconnected", this._gamepadDisconnectedEvent);
        }
        if (this._pointerInputClearObserver) {
          this._engine.onEndFrameObservable.remove(this._pointerInputClearObserver);
        }
        this._eventsAttached = false;
      }
      _checkForConnectedDevices() {
        if (navigator.getGamepads) {
          const v100 = navigator.getGamepads();
          for (const v101 of v100) {
            if (v101) {
              this._addGamePad(v101);
            }
          }
        }
        if (typeof matchMedia === "function" && matchMedia("(pointer:fine)").matches) {
          this._addPointerDevice(v74.Mouse, 0, 0, 0);
        }
      }
      _addGamePad(p411) {
        const v102 = this._getGamepadDeviceType(p411.id);
        const v103 = p411.index;
        this._gamepads = this._gamepads || new Array(p411.index + 1);
        this._registerDevice(v102, v103, p411.buttons.length + p411.axes.length);
        this._gamepads[v103] = v102;
      }
      _addPointerDevice(p412, p413, p414, p415) {
        this._pointerActive ||= true;
        this._registerDevice(p412, p413, v93);
        const v104 = this._inputs[p412][p413];
        v104[0] = p414;
        v104[1] = p415;
      }
      _registerDevice(p416, p417, p418) {
        if (p417 === undefined) {
          throw `Unable to register device ${v74[p416]} to undefined slot.`;
        }
        this._inputs[p416] ||= {};
        if (!this._inputs[p416][p417]) {
          const v105 = new Array(p418);
          v105.fill(0);
          this._inputs[p416][p417] = v105;
          this._onDeviceConnected(p416, p417);
        }
      }
      _unregisterDevice(p419, p420) {
        if (this._inputs[p419][p420]) {
          delete this._inputs[p419][p420];
          this._onDeviceDisconnected(p419, p420);
        }
      }
      _handleKeyActions() {
        this._keyboardDownEvent = p421 => {
          if (!this._keyboardActive) {
            this._keyboardActive = true;
            this._registerDevice(v74.Keyboard, 0, 255);
          }
          const v106 = this._inputs[v74.Keyboard][0];
          if (v106) {
            v106[p421.keyCode] = 1;
            const vP421 = p421;
            vP421.inputIndex = p421.keyCode;
            if (this._usingMacOs && p421.metaKey && p421.key !== "Meta") {
              if (!this._metaKeys.includes(p421.keyCode)) {
                this._metaKeys.push(p421.keyCode);
              }
            }
            this._onInputChanged(v74.Keyboard, 0, vP421);
          }
        };
        this._keyboardUpEvent = p422 => {
          if (!this._keyboardActive) {
            this._keyboardActive = true;
            this._registerDevice(v74.Keyboard, 0, 255);
          }
          const v107 = this._inputs[v74.Keyboard][0];
          if (v107) {
            v107[p422.keyCode] = 0;
            const vP422 = p422;
            vP422.inputIndex = p422.keyCode;
            if (this._usingMacOs && p422.key === "Meta" && this._metaKeys.length > 0) {
              for (const v108 of this._metaKeys) {
                const v109 = C19.CreateDeviceEvent(v74.Keyboard, 0, v108, 0, this, this._elementToAttachTo);
                v107[v108] = 0;
                this._onInputChanged(v74.Keyboard, 0, v109);
              }
              this._metaKeys.splice(0, this._metaKeys.length);
            }
            this._onInputChanged(v74.Keyboard, 0, vP422);
          }
        };
        this._keyboardBlurEvent = () => {
          if (this._keyboardActive) {
            const v110 = this._inputs[v74.Keyboard][0];
            for (let vLN020 = 0; vLN020 < v110.length; vLN020++) {
              if (v110[vLN020] !== 0) {
                v110[vLN020] = 0;
                const v111 = C19.CreateDeviceEvent(v74.Keyboard, 0, vLN020, 0, this, this._elementToAttachTo);
                this._onInputChanged(v74.Keyboard, 0, v111);
              }
            }
            if (this._usingMacOs) {
              this._metaKeys.splice(0, this._metaKeys.length);
            }
          }
        };
        this._elementToAttachTo.addEventListener("keydown", this._keyboardDownEvent);
        this._elementToAttachTo.addEventListener("keyup", this._keyboardUpEvent);
        this._elementToAttachTo.addEventListener("blur", this._keyboardBlurEvent);
      }
      _handlePointerActions() {
        this._maxTouchPoints = (0, vP30014.g)() && navigator.maxTouchPoints || 2;
        this._activeTouchIds ||= new Array(this._maxTouchPoints);
        for (let vLN021 = 0; vLN021 < this._maxTouchPoints; vLN021++) {
          this._activeTouchIds[vLN021] = -1;
        }
        this._pointerMoveEvent = p423 => {
          const v112 = this._getPointerType(p423);
          let v113 = v112 === v74.Mouse ? 0 : this._activeTouchIds.indexOf(p423.pointerId);
          if (v112 === v74.Touch && v113 === -1) {
            const v114 = this._activeTouchIds.indexOf(-1);
            if (!(v114 >= 0)) {
              vP3002.Tools.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
              return;
            }
            v113 = v114;
            this._activeTouchIds[v114] = p423.pointerId;
            this._onDeviceConnected(v112, v113);
          }
          this._inputs[v112] ||= {};
          if (!this._inputs[v112][v113]) {
            this._addPointerDevice(v112, v113, p423.clientX, p423.clientY);
          }
          const v115 = this._inputs[v112][v113];
          if (v115) {
            const vP423 = p423;
            vP423.inputIndex = v75.Move;
            v115[v75.Horizontal] = p423.clientX;
            v115[v75.Vertical] = p423.clientY;
            if (v112 === v74.Touch && v115[v75.LeftClick] === 0) {
              v115[v75.LeftClick] = 1;
            }
            if (p423.pointerId === undefined) {
              p423.pointerId = this._mouseId;
            }
            this._onInputChanged(v112, v113, vP423);
            if (!this._usingSafari && p423.button !== -1) {
              vP423.inputIndex = p423.button + 2;
              v115[p423.button + 2] = v115[p423.button + 2] ? 0 : 1;
              this._onInputChanged(v112, v113, vP423);
            }
          }
        };
        this._pointerDownEvent = p424 => {
          const v116 = this._getPointerType(p424);
          let v117 = v116 === v74.Mouse ? 0 : p424.pointerId;
          if (v116 === v74.Touch) {
            let v118 = this._activeTouchIds.indexOf(p424.pointerId);
            if (v118 === -1) {
              v118 = this._activeTouchIds.indexOf(-1);
            }
            if (!(v118 >= 0)) {
              vP3002.Tools.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
              return;
            }
            v117 = v118;
            this._activeTouchIds[v118] = p424.pointerId;
          }
          this._inputs[v116] ||= {};
          if (this._inputs[v116][v117]) {
            if (v116 === v74.Touch) {
              this._onDeviceConnected(v116, v117);
            }
          } else {
            this._addPointerDevice(v116, v117, p424.clientX, p424.clientY);
          }
          const v119 = this._inputs[v116][v117];
          if (v119) {
            const v120 = v119[v75.Horizontal];
            const v121 = v119[v75.Vertical];
            if (v116 === v74.Mouse) {
              if (p424.pointerId === undefined) {
                p424.pointerId = this._mouseId;
              }
              if (!document.pointerLockElement) {
                try {
                  this._elementToAttachTo.setPointerCapture(this._mouseId);
                } catch (e3) {}
              }
            } else if (p424.pointerId && !document.pointerLockElement) {
              try {
                this._elementToAttachTo.setPointerCapture(p424.pointerId);
              } catch (e4) {}
            }
            v119[v75.Horizontal] = p424.clientX;
            v119[v75.Vertical] = p424.clientY;
            v119[p424.button + 2] = 1;
            const vP424 = p424;
            vP424.inputIndex = p424.button + 2;
            this._onInputChanged(v116, v117, vP424);
            if (v120 !== p424.clientX || v121 !== p424.clientY) {
              vP424.inputIndex = v75.Move;
              this._onInputChanged(v116, v117, vP424);
            }
          }
        };
        this._pointerUpEvent = p425 => {
          const v122 = this._getPointerType(p425);
          const v123 = v122 === v74.Mouse ? 0 : this._activeTouchIds.indexOf(p425.pointerId);
          if (v122 === v74.Touch) {
            if (v123 === -1) {
              return;
            }
            this._activeTouchIds[v123] = -1;
          }
          const v124 = this._inputs[v122]?.[v123];
          let v125 = p425.button;
          let v126 = v124 && v124[v125 + 2] !== 0;
          if (!v126 && this._isUsingFirefox && this._usingMacOs && v124) {
            v125 = v125 === 2 ? 0 : 2;
            v126 = v124[v125 + 2] !== 0;
          }
          if (v126) {
            var v127;
            var v128;
            var v129;
            var v130;
            const v131 = v124[v75.Horizontal];
            const v132 = v124[v75.Vertical];
            v124[v75.Horizontal] = p425.clientX;
            v124[v75.Vertical] = p425.clientY;
            v124[v125 + 2] = 0;
            const vP425 = p425;
            if (p425.pointerId === undefined) {
              p425.pointerId = this._mouseId;
            }
            if (v131 !== p425.clientX || v132 !== p425.clientY) {
              vP425.inputIndex = v75.Move;
              this._onInputChanged(v122, v123, vP425);
            }
            vP425.inputIndex = v125 + 2;
            if (v122 === v74.Mouse && this._mouseId >= 0 && (v127 = (v128 = this._elementToAttachTo).hasPointerCapture) !== null && v127 !== undefined && v127.call(v128, this._mouseId)) {
              this._elementToAttachTo.releasePointerCapture(this._mouseId);
            } else if (p425.pointerId && (v129 = (v130 = this._elementToAttachTo).hasPointerCapture) !== null && v129 !== undefined && v129.call(v130, p425.pointerId)) {
              this._elementToAttachTo.releasePointerCapture(p425.pointerId);
            }
            this._onInputChanged(v122, v123, vP425);
            if (v122 === v74.Touch) {
              this._onDeviceDisconnected(v122, v123);
            }
          }
        };
        this._pointerCancelTouch = p426 => {
          var v133;
          var v134;
          const v135 = this._activeTouchIds.indexOf(p426);
          if (v135 === -1) {
            return;
          }
          if ((v133 = (v134 = this._elementToAttachTo).hasPointerCapture) !== null && v133 !== undefined && v133.call(v134, p426)) {
            this._elementToAttachTo.releasePointerCapture(p426);
          }
          this._inputs[v74.Touch][v135][v75.LeftClick] = 0;
          const v136 = C19.CreateDeviceEvent(v74.Touch, v135, v75.LeftClick, 0, this, this._elementToAttachTo, p426);
          this._onInputChanged(v74.Touch, v135, v136);
          this._activeTouchIds[v135] = -1;
          this._onDeviceDisconnected(v74.Touch, v135);
        };
        this._pointerCancelEvent = p427 => {
          if (p427.pointerType === "mouse") {
            var v137;
            var v138;
            const v139 = this._inputs[v74.Mouse][0];
            if (this._mouseId >= 0 && (v137 = (v138 = this._elementToAttachTo).hasPointerCapture) !== null && v137 !== undefined && v137.call(v138, this._mouseId)) {
              this._elementToAttachTo.releasePointerCapture(this._mouseId);
            }
            for (let v140 = v75.LeftClick; v140 <= v75.BrowserForward; v140++) {
              if (v139[v140] === 1) {
                v139[v140] = 0;
                const v141 = C19.CreateDeviceEvent(v74.Mouse, 0, v140, 0, this, this._elementToAttachTo);
                this._onInputChanged(v74.Mouse, 0, v141);
              }
            }
          } else {
            this._pointerCancelTouch(p427.pointerId);
          }
        };
        this._pointerLeaveEvent = p428 => {
          if (p428.pointerType === "pen") {
            this._pointerCancelTouch(p428.pointerId);
          }
        };
        this._wheelEventName = "onwheel" in document.createElement("div") ? "wheel" : document.onmousewheel !== undefined ? "mousewheel" : "DOMMouseScroll";
        let v142 = false;
        const vF2 = function () {};
        try {
          const v143 = Object.defineProperty({}, "passive", {
            get: function () {
              v142 = true;
            }
          });
          this._elementToAttachTo.addEventListener("test", vF2, v143);
          this._elementToAttachTo.removeEventListener("test", vF2, v143);
        } catch (e5) {}
        this._pointerBlurEvent = () => {
          if (this.isDeviceAvailable(v74.Mouse)) {
            var v144;
            var v145;
            const v146 = this._inputs[v74.Mouse][0];
            if (this._mouseId >= 0 && (v144 = (v145 = this._elementToAttachTo).hasPointerCapture) !== null && v144 !== undefined && v144.call(v145, this._mouseId)) {
              this._elementToAttachTo.releasePointerCapture(this._mouseId);
            }
            for (let v147 = v75.LeftClick; v147 <= v75.BrowserForward; v147++) {
              if (v146[v147] === 1) {
                v146[v147] = 0;
                const v148 = C19.CreateDeviceEvent(v74.Mouse, 0, v147, 0, this, this._elementToAttachTo);
                this._onInputChanged(v74.Mouse, 0, v148);
              }
            }
          }
          if (this.isDeviceAvailable(v74.Touch)) {
            const v149 = this._inputs[v74.Touch];
            for (let vLN022 = 0; vLN022 < this._activeTouchIds.length; vLN022++) {
              var v150;
              var v151;
              const v152 = this._activeTouchIds[vLN022];
              if ((v150 = (v151 = this._elementToAttachTo).hasPointerCapture) !== null && v150 !== undefined && v150.call(v151, v152)) {
                this._elementToAttachTo.releasePointerCapture(v152);
              }
              if (v152 !== -1 && v149[vLN022]?.[v75.LeftClick] === 1) {
                v149[vLN022][v75.LeftClick] = 0;
                const v153 = C19.CreateDeviceEvent(v74.Touch, vLN022, v75.LeftClick, 0, this, this._elementToAttachTo, v152);
                this._onInputChanged(v74.Touch, vLN022, v153);
                this._activeTouchIds[vLN022] = -1;
                this._onDeviceDisconnected(v74.Touch, vLN022);
              }
            }
          }
        };
        this._pointerWheelEvent = p429 => {
          const v154 = v74.Mouse;
          this._inputs[v154] ||= [];
          if (!this._inputs[v154][0]) {
            this._pointerActive = true;
            this._registerDevice(v154, 0, v93);
          }
          const v155 = this._inputs[v154][0];
          if (v155) {
            v155[v75.MouseWheelX] = p429.deltaX || 0;
            v155[v75.MouseWheelY] = p429.deltaY || p429.wheelDelta || 0;
            v155[v75.MouseWheelZ] = p429.deltaZ || 0;
            const vP429 = p429;
            if (p429.pointerId === undefined) {
              p429.pointerId = this._mouseId;
            }
            if (v155[v75.MouseWheelX] !== 0) {
              vP429.inputIndex = v75.MouseWheelX;
              this._onInputChanged(v154, 0, vP429);
            }
            if (v155[v75.MouseWheelY] !== 0) {
              vP429.inputIndex = v75.MouseWheelY;
              this._onInputChanged(v154, 0, vP429);
            }
            if (v155[v75.MouseWheelZ] !== 0) {
              vP429.inputIndex = v75.MouseWheelZ;
              this._onInputChanged(v154, 0, vP429);
            }
          }
        };
        if (this._usingMacOs && this._isUsingChromium) {
          this._pointerMacOsChromeOutEvent = p430 => {
            if (p430.buttons > 1) {
              this._pointerCancelEvent(p430);
            }
          };
          this._elementToAttachTo.addEventListener("lostpointercapture", this._pointerMacOsChromeOutEvent);
        }
        this._elementToAttachTo.addEventListener(this._eventPrefix + "move", this._pointerMoveEvent);
        this._elementToAttachTo.addEventListener(this._eventPrefix + "down", this._pointerDownEvent);
        this._elementToAttachTo.addEventListener(this._eventPrefix + "up", this._pointerUpEvent);
        this._elementToAttachTo.addEventListener(this._eventPrefix + "cancel", this._pointerCancelEvent);
        this._elementToAttachTo.addEventListener(this._eventPrefix + "TI", this._pointerLeaveEvent);
        this._elementToAttachTo.addEventListener("blur", this._pointerBlurEvent);
        this._elementToAttachTo.addEventListener(this._wheelEventName, this._pointerWheelEvent, !!v142 && {
          passive: false
        });
        this._pointerInputClearObserver = this._engine.onEndFrameObservable.add(() => {
          if (this.isDeviceAvailable(v74.Mouse)) {
            const v156 = this._inputs[v74.Mouse][0];
            v156[v75.MouseWheelX] = 0;
            v156[v75.MouseWheelY] = 0;
            v156[v75.MouseWheelZ] = 0;
          }
        });
      }
      _handleGamepadActions() {
        this._gamepadConnectedEvent = p431 => {
          this._addGamePad(p431.gamepad);
        };
        this._gamepadDisconnectedEvent = p432 => {
          if (this._gamepads) {
            const v157 = this._getGamepadDeviceType(p432.gamepad.id);
            const v158 = p432.gamepad.index;
            this._unregisterDevice(v157, v158);
            delete this._gamepads[v158];
          }
        };
        window.addEventListener("gamepadconnected", this._gamepadConnectedEvent);
        window.addEventListener("gamepaddisconnected", this._gamepadDisconnectedEvent);
      }
      _updateDevice(p433, p434, p435) {
        const v159 = navigator.getGamepads()[p434];
        if (v159 && p433 === this._gamepads[p434]) {
          const v160 = this._inputs[p433][p434];
          if (p435 >= v159.buttons.length) {
            v160[p435] = v159.axes[p435 - v159.buttons.length].valueOf();
          } else {
            v160[p435] = v159.buttons[p435].value;
          }
        }
      }
      _getGamepadDeviceType(p436) {
        if (p436.indexOf("054c") !== -1) {
          if (p436.indexOf("0ce6") !== -1) {
            return v74.DualSense;
          } else {
            return v74.DualShock;
          }
        } else if (p436.indexOf("Xbox One") !== -1 || p436.search("Xbox 360") !== -1 || p436.search("xinput") !== -1) {
          return v74.Xbox;
        } else if (p436.indexOf("057e") !== -1) {
          return v74.Switch;
        } else {
          return v74.Generic;
        }
      }
      _getPointerType(p437) {
        let v161 = v74.Mouse;
        if (p437.pointerType === "touch" || p437.pointerType === "pen" || p437.touches) {
          v161 = v74.Touch;
        }
        return v161;
      }
    }
    class C22 {
      constructor(p438, p439, IC = 0) {
        this.deviceType = p439;
        this.deviceSlot = IC;
        this.onInputChangedObservable = new vP3004.e();
        this._deviceInputSystem = p438;
      }
      getInput(p440) {
        return this._deviceInputSystem.pollInput(this.deviceType, this.deviceSlot, p440);
      }
    }
    class C23 {
      constructor(p441) {
        this._registeredManagers = new Array();
        this._refCount = 0;
        this.registerManager = p442 => {
          for (let vLN023 = 0; vLN023 < this._devices.length; vLN023++) {
            const v162 = this._devices[vLN023];
            for (const v163 in v162) {
              const v164 = +v163;
              p442._addDevice(new C22(this._deviceInputSystem, vLN023, v164));
            }
          }
          this._registeredManagers.push(p442);
        };
        this.unregisterManager = p443 => {
          const v165 = this._registeredManagers.indexOf(p443);
          if (v165 > -1) {
            this._registeredManagers.splice(v165, 1);
          }
        };
        const v166 = Object.keys(v74).length / 2;
        this._devices = new Array(v166);
        const vF3 = (p444, p445) => {
          this._devices[p444] ||= new Array();
          this._devices[p444][p445] ||= p445;
          for (const v167 of this._registeredManagers) {
            const v168 = new C22(this._deviceInputSystem, p444, p445);
            v167._addDevice(v168);
          }
        };
        const vF4 = (p446, p447) => {
          var v169;
          if ((v169 = this._devices[p446]) !== null && v169 !== undefined && v169[p447]) {
            delete this._devices[p446][p447];
          }
          for (const v170 of this._registeredManagers) {
            v170._removeDevice(p446, p447);
          }
        };
        const vF5 = (p448, p449, p450) => {
          if (p450) {
            for (const v171 of this._registeredManagers) {
              v171._onInputChanged(p448, p449, p450);
            }
          }
        };
        if (typeof _native !== "undefined") {
          this._deviceInputSystem = new C20(vF3, vF4, vF5);
        } else {
          this._deviceInputSystem = new C21(p441, vF3, vF4, vF5);
        }
      }
      dispose() {
        this._deviceInputSystem.dispose();
      }
    }
    class C24 {
      getDeviceSource(p451, p452) {
        if (p452 === undefined) {
          if (this._firstDevice[p451] === undefined) {
            return null;
          }
          p452 = this._firstDevice[p451];
        }
        if (this._devices[p451] && this._devices[p451][p452] !== undefined) {
          return this._devices[p451][p452];
        } else {
          return null;
        }
      }
      getDeviceSources(p453) {
        if (this._devices[p453]) {
          return this._devices[p453].filter(p454 => !!p454);
        } else {
          return [];
        }
      }
      constructor(p455) {
        const v172 = Object.keys(v74).length / 2;
        this._devices = new Array(v172);
        this._firstDevice = new Array(v172);
        this._engine = p455;
        this._engine._deviceSourceManager ||= new C23(p455);
        this._engine._deviceSourceManager._refCount++;
        this.onDeviceConnectedObservable = new vP3004.e(p456 => {
          for (const v173 of this._devices) {
            if (v173) {
              for (const v174 of v173) {
                if (v174) {
                  this.onDeviceConnectedObservable.notifyObserver(p456, v174);
                }
              }
            }
          }
        });
        this.onDeviceDisconnectedObservable = new vP3004.e();
        this._engine._deviceSourceManager.registerManager(this);
        this._onDisposeObserver = p455.Cf.add(() => {
          this.dispose();
        });
      }
      dispose() {
        this.onDeviceConnectedObservable.clear();
        this.onDeviceDisconnectedObservable.clear();
        if (this._engine._deviceSourceManager) {
          this._engine._deviceSourceManager.unregisterManager(this);
          if (--this._engine._deviceSourceManager._refCount < 1) {
            this._engine._deviceSourceManager.dispose();
            delete this._engine._deviceSourceManager;
          }
        }
        this._engine.Cf.remove(this._onDisposeObserver);
      }
      _addDevice(p457) {
        this._devices[p457.deviceType] ||= [];
        if (!this._devices[p457.deviceType][p457.deviceSlot]) {
          this._devices[p457.deviceType][p457.deviceSlot] = p457;
          this._updateFirstDevices(p457.deviceType);
        }
        this.onDeviceConnectedObservable.notifyObservers(p457);
      }
      _removeDevice(p458, p459) {
        var v175;
        const v176 = this._devices[p458]?.[p459];
        this.onDeviceDisconnectedObservable.notifyObservers(v176);
        if ((v175 = this._devices[p458]) !== null && v175 !== undefined && v175[p459]) {
          delete this._devices[p458][p459];
        }
        this._updateFirstDevices(p458);
      }
      _onInputChanged(p460, p461, p462) {
        var v177;
        var v178;
        if ((v177 = this._devices[p460]) !== null && v177 !== undefined && (v178 = v177[p461]) !== null && v178 !== undefined) {
          v178.onInputChangedObservable.notifyObservers(p462);
        }
      }
      _updateFirstDevices(p463) {
        switch (p463) {
          case v74.Keyboard:
          case v74.Mouse:
            this._firstDevice[p463] = 0;
            break;
          case v74.Touch:
          case v74.DualSense:
          case v74.DualShock:
          case v74.Xbox:
          case v74.Switch:
          case v74.Generic:
            {
              delete this._firstDevice[p463];
              const v179 = this._devices[p463];
              if (v179) {
                for (let vLN024 = 0; vLN024 < v179.length; vLN024++) {
                  if (v179[vLN024]) {
                    this._firstDevice[p463] = vLN024;
                    break;
                  }
                }
              }
              break;
            }
        }
      }
    }
    var vP30020 = p300(17268);
    class C25 {
      constructor() {
        this._singleClick = false;
        this._doubleClick = false;
        this._hasSwiped = false;
        this._ignore = false;
      }
      get singleClick() {
        return this._singleClick;
      }
      get kg() {
        return this._doubleClick;
      }
      get hasSwiped() {
        return this._hasSwiped;
      }
      get ignore() {
        return this._ignore;
      }
      set singleClick(p464) {
        this._singleClick = p464;
      }
      set kg(p465) {
        this._doubleClick = p465;
      }
      set hasSwiped(p466) {
        this._hasSwiped = p466;
      }
      set ignore(p467) {
        this._ignore = p467;
      }
    }
    class C26 {
      constructor(p468) {
        this._alreadyAttached = false;
        this._meshPickProceed = false;
        this._currentPickResult = null;
        this._previousPickResult = null;
        this._activePointerIds = new Array();
        this._activePointerIdsCount = 0;
        this._doubleClickOccured = false;
        this._isSwiping = false;
        this._swipeButtonPressed = -1;
        this._skipPointerTap = false;
        this._isMultiTouchGesture = false;
        this._pointerX = 0;
        this._pointerY = 0;
        this._startingPointerPosition = new vP3007.Vector2(0, 0);
        this._previousStartingPointerPosition = new vP3007.Vector2(0, 0);
        this._startingPointerTime = 0;
        this._previousStartingPointerTime = 0;
        this._pointerCaptures = {};
        this._meshUnderPointerId = {};
        this._movePointerInfo = null;
        this._cameraObserverCount = 0;
        this._delayedClicks = [null, null, null, null, null];
        this._deviceSourceManager = null;
        this._scene = p468 || vP30015.b.LastCreatedScene;
        this._scene;
      }
      get meshUnderPointer() {
        if (this._movePointerInfo) {
          this._movePointerInfo._generatePickInfo();
          this._movePointerInfo = null;
        }
        return this._pointerOverMesh;
      }
      getMeshUnderPointerByPointerId(p469) {
        return this._meshUnderPointerId[p469] || null;
      }
      get unTranslatedPointer() {
        return new vP3007.Vector2(this._unTranslatedPointerX, this._unTranslatedPointerY);
      }
      get pointerX() {
        return this._pointerX;
      }
      set pointerX(p470) {
        this._pointerX = p470;
      }
      get pointerY() {
        return this._pointerY;
      }
      set pointerY(p471) {
        this._pointerY = p471;
      }
      _updatePointerPosition(p472) {
        const v180 = this._scene.getEngine().getInputElementClientRect();
        if (v180) {
          this._pointerX = p472.clientX - v180.left;
          this._pointerY = p472.clientY - v180.top;
          this._unTranslatedPointerX = this._pointerX;
          this._unTranslatedPointerY = this._pointerY;
        }
      }
      _processPointerMove(p473, p474) {
        const v181 = this._scene;
        const v182 = v181.getEngine();
        const v183 = v182.getInputElement();
        if (v183) {
          v183.tabIndex = v182.canvasTabIndex;
          if (!v181.doNotHandleCursors) {
            v183.style.cursor = v181.defaultCursor;
          }
        }
        this._setCursorAndPointerOverMesh(p473, p474, v181);
        for (const v184 of v181._pointerMoveStage) {
          var v185;
          const v186 = (v185 = p473 = p473 || this._pickMove(p474)) !== null && v185 !== undefined && !!v185.pickedMesh;
          p473 = v184.action(this._unTranslatedPointerX, this._unTranslatedPointerY, p473, v186, v183);
        }
        const v187 = p474.inputIndex >= v75.MouseWheelX && p474.inputIndex <= v75.MouseWheelZ ? vP30017.e.POINTERWHEEL : vP30017.e.POINTERMOVE;
        let v188;
        if (v181.onPointerMove) {
          p473 = p473 || this._pickMove(p474);
          v181.onPointerMove(p474, p473, v187);
        }
        if (p473) {
          v188 = new vP30017.k(v187, p474, p473);
          this._setRayOnPointerInfo(p473, p474);
        } else {
          v188 = new vP30017.k(v187, p474, null, this);
          this._movePointerInfo = v188;
        }
        if (v181.onPointerObservable.hasObservers()) {
          v181.onPointerObservable.notifyObservers(v188, v187);
        }
      }
      _setRayOnPointerInfo(p475, p476) {
        const v189 = this._scene;
        if (p475 && vP30020.e._IsPickingAvailable) {
          p475.ray ||= v189.createPickingRay(p476.offsetX, p476.offsetY, vP3007.Matrix.Identity(), v189.activeCamera);
        }
      }
      _addCameraPointerObserver(p477, p478) {
        this._cameraObserverCount++;
        return this._scene.onPointerObservable.add(p477, p478);
      }
      _removeCameraPointerObserver(p479) {
        this._cameraObserverCount--;
        return this._scene.onPointerObservable.remove(p479);
      }
      _checkForPicking() {
        return !!(this._scene.onPointerObservable.observers.length > this._cameraObserverCount) || !!this._scene.onPointerPick;
      }
      _checkPrePointerObservable(p480, p481, p482) {
        const v190 = this._scene;
        const v191 = new vP30017.i(p482, p481, this._unTranslatedPointerX, this._unTranslatedPointerY);
        if (p480) {
          v191.originalPickingInfo = p480;
          v191.ray = p480.ray;
          if (p481.pointerType === "xr-near" && p480.originMesh) {
            v191.nearInteractionPickingInfo = p480;
          }
        }
        v190.onPrePointerObservable.notifyObservers(v191, p482);
        return !!v191.skipOnPointerObservable;
      }
      _pickMove(p483) {
        const v192 = this._scene;
        const v193 = v192.iY(this._unTranslatedPointerX, this._unTranslatedPointerY, v192.pointerMovePredicate, v192.pointerMoveFastCheck, v192.cameraToUseForPointers, v192.pointerMoveTrianglePredicate);
        this._setCursorAndPointerOverMesh(v193, p483, v192);
        return v193;
      }
      _setCursorAndPointerOverMesh(p484, p485, p486) {
        const v194 = p486.getEngine().getInputElement();
        if (p484 !== null && p484 !== undefined && p484.pickedMesh) {
          this.setPointerOverMesh(p484.pickedMesh, p485.pointerId, p484, p485);
          if (!p486.doNotHandleCursors && v194 && this._pointerOverMesh) {
            const v195 = this._pointerOverMesh._getActionManagerForTrigger();
            if (v195 && v195.hasPointerTriggers) {
              v194.style.cursor = v195.hoverCursor || p486.hoverCursor;
            }
          }
        } else {
          this.setPointerOverMesh(null, p485.pointerId, p484, p485);
        }
      }
      simulatePointerMove(p487, p488) {
        const v196 = new PointerEvent("pointermove", p488);
        v196.inputIndex = v75.Move;
        if (!this._checkPrePointerObservable(p487, v196, vP30017.e.POINTERMOVE)) {
          this._processPointerMove(p487, v196);
        }
      }
      simulatePointerDown(p489, p490) {
        const v197 = new PointerEvent("pointerdown", p490);
        v197.inputIndex = v197.button + 2;
        if (!this._checkPrePointerObservable(p489, v197, vP30017.e.POINTERDOWN)) {
          this._processPointerDown(p489, v197);
        }
      }
      _processPointerDown(p491, p492) {
        var v198;
        const v199 = this._scene;
        if ((v198 = p491) !== null && v198 !== undefined && v198.pickedMesh) {
          this._pickedDownMesh = p491.pickedMesh;
          const v200 = p491.pickedMesh._getActionManagerForTrigger();
          if (v200) {
            if (v200.hasPickTriggers) {
              v200.processTrigger(5, new C17(p491.pickedMesh, v199.pointerX, v199.pointerY, p491.pickedMesh, p492, p491));
              switch (p492.button) {
                case 0:
                  v200.processTrigger(2, new C17(p491.pickedMesh, v199.pointerX, v199.pointerY, p491.pickedMesh, p492, p491));
                  break;
                case 1:
                  v200.processTrigger(4, new C17(p491.pickedMesh, v199.pointerX, v199.pointerY, p491.pickedMesh, p492, p491));
                  break;
                case 2:
                  v200.processTrigger(3, new C17(p491.pickedMesh, v199.pointerX, v199.pointerY, p491.pickedMesh, p492, p491));
              }
            }
            if (v200.hasSpecificTrigger(8)) {
              window.setTimeout(() => {
                const v201 = v199.iY(this._unTranslatedPointerX, this._unTranslatedPointerY, p493 => p493.MY && p493.isVisible && p493.isReady() && p493.actionManager && p493.actionManager.hasSpecificTrigger(8) && p493 === this._pickedDownMesh, false, v199.cameraToUseForPointers);
                if (v201 !== null && v201 !== undefined && v201.pickedMesh && v200 && this._activePointerIdsCount !== 0 && Date.now() - this._startingPointerTime > C26.LongPressDelay && !this._isPointerSwiping()) {
                  this._startingPointerTime = 0;
                  v200.processTrigger(8, C17.CreateNew(v201.pickedMesh, p492));
                }
              }, C26.LongPressDelay);
            }
          }
        } else {
          for (const v202 of v199._pointerDownStage) {
            p491 = v202.action(this._unTranslatedPointerX, this._unTranslatedPointerY, p491, p492, false);
          }
        }
        let v203;
        const v204 = vP30017.e.POINTERDOWN;
        if (p491) {
          if (v199.onPointerDown) {
            v199.onPointerDown(p492, p491, v204);
          }
          v203 = new vP30017.k(v204, p492, p491);
          this._setRayOnPointerInfo(p491, p492);
        } else {
          v203 = new vP30017.k(v204, p492, null, this);
        }
        if (v199.onPointerObservable.hasObservers()) {
          v199.onPointerObservable.notifyObservers(v203, v204);
        }
      }
      _isPointerSwiping() {
        return this._isSwiping;
      }
      simulatePointerUp(p494, p495, p496) {
        const v205 = new PointerEvent("pointerup", p495);
        v205.inputIndex = v75.Move;
        const v206 = new C25();
        if (p496) {
          v206.kg = true;
        } else {
          v206.singleClick = true;
        }
        if (!this._checkPrePointerObservable(p494, v205, vP30017.e.POINTERUP)) {
          this._processPointerUp(p494, v205, v206);
        }
      }
      _processPointerUp(p497, p498, p499) {
        var v207;
        const v208 = this._scene;
        if ((v207 = p497) !== null && v207 !== undefined && v207.pickedMesh) {
          this._pickedUpMesh = p497.pickedMesh;
          if (this._pickedDownMesh === this._pickedUpMesh && (v208.onPointerPick && v208.onPointerPick(p498, p497), p499.singleClick && !p499.ignore && v208.onPointerObservable.observers.length > this._cameraObserverCount)) {
            const v209 = vP30017.e.POINTERPICK;
            const v210 = new vP30017.k(v209, p498, p497);
            this._setRayOnPointerInfo(p497, p498);
            v208.onPointerObservable.notifyObservers(v210, v209);
          }
          const v211 = p497.pickedMesh._getActionManagerForTrigger();
          if (v211 && !p499.ignore) {
            v211.processTrigger(7, C17.CreateNew(p497.pickedMesh, p498, p497));
            if (!p499.hasSwiped && p499.singleClick) {
              v211.processTrigger(1, C17.CreateNew(p497.pickedMesh, p498, p497));
            }
            const v212 = p497.pickedMesh._getActionManagerForTrigger(6);
            if (p499.kg && v212) {
              v212.processTrigger(6, C17.CreateNew(p497.pickedMesh, p498, p497));
            }
          }
        } else if (!p499.ignore) {
          for (const v213 of v208._pointerUpStage) {
            p497 = v213.action(this._unTranslatedPointerX, this._unTranslatedPointerY, p497, p498, p499.kg);
          }
        }
        if (this._pickedDownMesh && this._pickedDownMesh !== this._pickedUpMesh) {
          const v214 = this._pickedDownMesh._getActionManagerForTrigger(16);
          if (v214) {
            v214.processTrigger(16, C17.CreateNew(this._pickedDownMesh, p498));
          }
        }
        if (!p499.ignore) {
          const v215 = new vP30017.k(vP30017.e.POINTERUP, p498, p497);
          this._setRayOnPointerInfo(p497, p498);
          v208.onPointerObservable.notifyObservers(v215, vP30017.e.POINTERUP);
          if (v208.onPointerUp) {
            v208.onPointerUp(p498, p497, vP30017.e.POINTERUP);
          }
          if (!p499.hasSwiped && !this._skipPointerTap && !this._isMultiTouchGesture) {
            let vLN025 = 0;
            if (p499.singleClick) {
              vLN025 = vP30017.e.POINTERTAP;
            } else if (p499.kg) {
              vLN025 = vP30017.e.POINTERDOUBLETAP;
            }
            if (vLN025) {
              const v216 = new vP30017.k(vLN025, p498, p497);
              if (v208.onPointerObservable.hasObservers() && v208.onPointerObservable.hasSpecificMask(vLN025)) {
                v208.onPointerObservable.notifyObservers(v216, vLN025);
              }
            }
          }
        }
      }
      isPointerCaptured(CC = 0) {
        return this._pointerCaptures[CC];
      }
      attachControl() {
        let v217 = !(arguments.length > 0) || arguments[0] === undefined || arguments[0];
        let v218 = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
        let v219 = !(arguments.length > 2) || arguments[2] === undefined || arguments[2];
        let v220 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
        const v221 = this._scene;
        const v222 = v221.getEngine();
        v220 ||= v222.getInputElement();
        if (this._alreadyAttached) {
          this.tO();
        }
        if (v220) {
          this._alreadyAttachedTo = v220;
        }
        this._deviceSourceManager = new C24(v222);
        this._initActionManager = p500 => {
          if (!this._meshPickProceed) {
            const v223 = v221.skipPointerUpPicking || v221._registeredActions === 0 && !this._checkForPicking() && !v221.onPointerUp ? null : v221.iY(this._unTranslatedPointerX, this._unTranslatedPointerY, v221.pointerUpPredicate, v221.pointerUpFastCheck, v221.cameraToUseForPointers, v221.pointerUpTrianglePredicate);
            this._currentPickResult = v223;
            if (v223) {
              p500 = v223.hit && v223.pickedMesh ? v223.pickedMesh._getActionManagerForTrigger() : null;
            }
            this._meshPickProceed = true;
          }
          return p500;
        };
        this._delayedSimpleClick = (p501, p502, p503) => {
          if ((Date.now() - this._previousStartingPointerTime > C26.DoubleClickDelay && !this._doubleClickOccured || p501 !== this._previousButtonPressed) && (this._doubleClickOccured = false, p502.singleClick = true, p502.ignore = false, this._delayedClicks[p501])) {
            const v224 = this._delayedClicks[p501].evt;
            const v225 = vP30017.e.POINTERTAP;
            const v226 = new vP30017.k(v225, v224, this._currentPickResult);
            if (v221.onPointerObservable.hasObservers() && v221.onPointerObservable.hasSpecificMask(v225)) {
              v221.onPointerObservable.notifyObservers(v226, v225);
            }
            this._delayedClicks[p501] = null;
          }
        };
        this._initClickEvent = (p504, p505, p506, p507) => {
          const v227 = new C25();
          this._currentPickResult = null;
          let v228 = null;
          let v229 = p504.hasSpecificMask(vP30017.e.POINTERPICK) || p505.hasSpecificMask(vP30017.e.POINTERPICK) || p504.hasSpecificMask(vP30017.e.POINTERTAP) || p505.hasSpecificMask(vP30017.e.POINTERTAP) || p504.hasSpecificMask(vP30017.e.POINTERDOUBLETAP) || p505.hasSpecificMask(vP30017.e.POINTERDOUBLETAP);
          if (!v229 && C18) {
            v228 = this._initActionManager(v228, v227);
            if (v228) {
              v229 = v228.hasPickTriggers;
            }
          }
          let v230 = false;
          v229 = v229 && !this._isMultiTouchGesture;
          if (v229) {
            const v231 = p506.button;
            v227.hasSwiped = this._isPointerSwiping();
            if (!v227.hasSwiped) {
              let v232 = !C26.ExclusiveDoubleClickMode;
              if (!v232) {
                v232 = !p504.hasSpecificMask(vP30017.e.POINTERDOUBLETAP) && !p505.hasSpecificMask(vP30017.e.POINTERDOUBLETAP);
                if (v232 && !C18.HasSpecificTrigger(6)) {
                  v228 = this._initActionManager(v228, v227);
                  if (v228) {
                    v232 = !v228.hasSpecificTrigger(6);
                  }
                }
              }
              if (v232) {
                if (Date.now() - this._previousStartingPointerTime > C26.DoubleClickDelay || v231 !== this._previousButtonPressed) {
                  v227.singleClick = true;
                  p507(v227, this._currentPickResult);
                  v230 = true;
                }
              } else {
                const vO2 = {
                  evt: p506,
                  clickInfo: v227,
                  timeoutId: window.setTimeout(this._delayedSimpleClick.bind(this, v231, v227, p507), C26.DoubleClickDelay)
                };
                this._delayedClicks[v231] = vO2;
              }
              let v233 = p504.hasSpecificMask(vP30017.e.POINTERDOUBLETAP) || p505.hasSpecificMask(vP30017.e.POINTERDOUBLETAP);
              if (!v233 && C18.HasSpecificTrigger(6)) {
                v228 = this._initActionManager(v228, v227);
                if (v228) {
                  v233 = v228.hasSpecificTrigger(6);
                }
              }
              if (v233) {
                if (v231 === this._previousButtonPressed && Date.now() - this._previousStartingPointerTime < C26.DoubleClickDelay && !this._doubleClickOccured) {
                  if (v227.hasSwiped || this._isPointerSwiping()) {
                    this._doubleClickOccured = false;
                    this._previousStartingPointerTime = this._startingPointerTime;
                    this._previousStartingPointerPosition.x = this._startingPointerPosition.x;
                    this._previousStartingPointerPosition.y = this._startingPointerPosition.y;
                    this._previousButtonPressed = v231;
                    if (C26.ExclusiveDoubleClickMode) {
                      if (this._delayedClicks[v231]) {
                        clearTimeout(this._delayedClicks[v231]?.timeoutId);
                        this._delayedClicks[v231] = null;
                      }
                      p507(v227, this._previousPickResult);
                    } else {
                      p507(v227, this._currentPickResult);
                    }
                  } else {
                    this._previousStartingPointerTime = 0;
                    this._doubleClickOccured = true;
                    v227.kg = true;
                    v227.ignore = false;
                    if (C26.ExclusiveDoubleClickMode && this._delayedClicks[v231]) {
                      clearTimeout(this._delayedClicks[v231]?.timeoutId);
                      this._delayedClicks[v231] = null;
                    }
                    p507(v227, this._currentPickResult);
                  }
                  v230 = true;
                } else {
                  this._doubleClickOccured = false;
                  this._previousStartingPointerTime = this._startingPointerTime;
                  this._previousStartingPointerPosition.x = this._startingPointerPosition.x;
                  this._previousStartingPointerPosition.y = this._startingPointerPosition.y;
                  this._previousButtonPressed = v231;
                }
              }
            }
          }
          if (!v230) {
            p507(v227, this._currentPickResult);
          }
        };
        this._onPointerMove = p508 => {
          this._updatePointerPosition(p508);
          if (!this._isSwiping && this._swipeButtonPressed !== -1) {
            this._isSwiping = Math.abs(this._startingPointerPosition.x - this._pointerX) > C26.DragMovementThreshold || Math.abs(this._startingPointerPosition.y - this._pointerY) > C26.DragMovementThreshold;
          }
          if (v222.isPointerLock) {
            v222._verifyPointerLock();
          }
          if (this._checkPrePointerObservable(null, p508, p508.inputIndex >= v75.MouseWheelX && p508.inputIndex <= v75.MouseWheelZ ? vP30017.e.POINTERWHEEL : vP30017.e.POINTERMOVE)) {
            return;
          }
          if (!v221.cameraToUseForPointers && !v221.activeCamera) {
            return;
          }
          if (v221.hO) {
            this._processPointerMove(new vP30010.b(), p508);
            return;
          }
          v221.pointerMovePredicate ||= p509 => p509.MY && p509.isVisible && p509.isReady() && p509.isEnabled() && (p509.enablePointerMoveEvents || v221.constantlyUpdateMeshUnderPointer || p509._getActionManagerForTrigger() !== null) && (!v221.cameraToUseForPointers || (v221.cameraToUseForPointers.layerMask & p509.layerMask) !== 0);
          const v234 = v221._registeredActions > 0 || v221.constantlyUpdateMeshUnderPointer ? this._pickMove(p508) : null;
          this._processPointerMove(v234, p508);
        };
        this._onPointerDown = p510 => {
          const v235 = this._activePointerIds.indexOf(-1);
          if (v235 === -1) {
            this._activePointerIds.push(p510.pointerId);
          } else {
            this._activePointerIds[v235] = p510.pointerId;
          }
          this._activePointerIdsCount++;
          this._pickedDownMesh = null;
          this._meshPickProceed = false;
          if (C26.ExclusiveDoubleClickMode) {
            for (let vLN026 = 0; vLN026 < this._delayedClicks.length; vLN026++) {
              if (this._delayedClicks[vLN026]) {
                if (p510.button === vLN026) {
                  clearTimeout(this._delayedClicks[vLN026]?.timeoutId);
                } else {
                  const v236 = this._delayedClicks[vLN026].clickInfo;
                  this._doubleClickOccured = false;
                  v236.singleClick = true;
                  v236.ignore = false;
                  const v237 = this._delayedClicks[vLN026].evt;
                  const v238 = vP30017.e.POINTERTAP;
                  const v239 = new vP30017.k(v238, v237, this._currentPickResult);
                  if (v221.onPointerObservable.hasObservers() && v221.onPointerObservable.hasSpecificMask(v238)) {
                    v221.onPointerObservable.notifyObservers(v239, v238);
                  }
                  this._delayedClicks[vLN026] = null;
                }
              }
            }
          }
          this._updatePointerPosition(p510);
          if (this._swipeButtonPressed === -1) {
            this._swipeButtonPressed = p510.button;
          }
          if (v221.preventDefaultOnPointerDown && v220) {
            p510.preventDefault();
            v220.focus();
          }
          this._startingPointerPosition.x = this._pointerX;
          this._startingPointerPosition.y = this._pointerY;
          this._startingPointerTime = Date.now();
          if (this._checkPrePointerObservable(null, p510, vP30017.e.POINTERDOWN)) {
            return;
          }
          if (!v221.cameraToUseForPointers && !v221.activeCamera) {
            return;
          }
          let v240;
          this._pointerCaptures[p510.pointerId] = true;
          v221.pointerDownPredicate ||= p511 => p511.MY && p511.isVisible && p511.isReady() && p511.isEnabled() && (!v221.cameraToUseForPointers || (v221.cameraToUseForPointers.layerMask & p511.layerMask) !== 0);
          this._pickedDownMesh = null;
          v240 = v221.skipPointerDownPicking || v221._registeredActions === 0 && !this._checkForPicking() && !v221.onPointerDown ? new vP30010.b() : v221.iY(this._unTranslatedPointerX, this._unTranslatedPointerY, v221.pointerDownPredicate, v221.pointerDownFastCheck, v221.cameraToUseForPointers, v221.pointerDownTrianglePredicate);
          this._processPointerDown(v240, p510);
        };
        this._onPointerUp = p512 => {
          const v241 = this._activePointerIds.indexOf(p512.pointerId);
          if (v241 !== -1) {
            this._activePointerIds[v241] = -1;
            this._activePointerIdsCount--;
            this._pickedUpMesh = null;
            this._meshPickProceed = false;
            this._updatePointerPosition(p512);
            if (v221.preventDefaultOnPointerUp && v220) {
              p512.preventDefault();
              v220.focus();
            }
            this._initClickEvent(v221.onPrePointerObservable, v221.onPointerObservable, p512, (p513, p514) => {
              if (v221.onPrePointerObservable.hasObservers() && (this._skipPointerTap = false, !p513.ignore)) {
                if (this._checkPrePointerObservable(null, p512, vP30017.e.POINTERUP)) {
                  if (this._swipeButtonPressed === p512.button) {
                    this._isSwiping = false;
                    this._swipeButtonPressed = -1;
                  }
                  if (p512.buttons === 0) {
                    this._pointerCaptures[p512.pointerId] = false;
                  }
                  return;
                }
                if (!p513.hasSwiped) {
                  if (p513.singleClick && v221.onPrePointerObservable.hasSpecificMask(vP30017.e.POINTERTAP) && this._checkPrePointerObservable(null, p512, vP30017.e.POINTERTAP)) {
                    this._skipPointerTap = true;
                  }
                  if (p513.kg && v221.onPrePointerObservable.hasSpecificMask(vP30017.e.POINTERDOUBLETAP) && this._checkPrePointerObservable(null, p512, vP30017.e.POINTERDOUBLETAP)) {
                    this._skipPointerTap = true;
                  }
                }
              }
              if (this._pointerCaptures[p512.pointerId]) {
                if (p512.buttons === 0) {
                  this._pointerCaptures[p512.pointerId] = false;
                }
                if (v221.cameraToUseForPointers || v221.activeCamera) {
                  v221.pointerUpPredicate ||= p515 => p515.MY && p515.isVisible && p515.isReady() && p515.isEnabled() && (!v221.cameraToUseForPointers || (v221.cameraToUseForPointers.layerMask & p515.layerMask) !== 0);
                  if (!this._meshPickProceed && (C18 && C18.HasTriggers || this._checkForPicking() || v221.onPointerUp)) {
                    this._initActionManager(null, p513);
                  }
                  p514 ||= this._currentPickResult;
                  this._processPointerUp(p514, p512, p513);
                  this._previousPickResult = this._currentPickResult;
                  if (this._swipeButtonPressed === p512.button) {
                    this._isSwiping = false;
                    this._swipeButtonPressed = -1;
                  }
                }
              } else if (this._swipeButtonPressed === p512.button) {
                this._isSwiping = false;
                this._swipeButtonPressed = -1;
              }
            });
          }
        };
        this._onKeyDown = p516 => {
          const v242 = vP30018.d.KEYDOWN;
          if (v221.onPreKeyboardObservable.hasObservers()) {
            const v243 = new vP30018.g(v242, p516);
            v221.onPreKeyboardObservable.notifyObservers(v243, v242);
            if (v243.skipOnKeyboardObservable) {
              return;
            }
          }
          if (v221.onKeyboardObservable.hasObservers()) {
            const v244 = new vP30018.k(v242, p516);
            v221.onKeyboardObservable.notifyObservers(v244, v242);
          }
          if (v221.actionManager) {
            v221.actionManager.processTrigger(14, C17.CreateNewFromScene(v221, p516));
          }
        };
        this._onKeyUp = p517 => {
          const v245 = vP30018.d.KEYUP;
          if (v221.onPreKeyboardObservable.hasObservers()) {
            const v246 = new vP30018.g(v245, p517);
            v221.onPreKeyboardObservable.notifyObservers(v246, v245);
            if (v246.skipOnKeyboardObservable) {
              return;
            }
          }
          if (v221.onKeyboardObservable.hasObservers()) {
            const v247 = new vP30018.k(v245, p517);
            v221.onKeyboardObservable.notifyObservers(v247, v245);
          }
          if (v221.actionManager) {
            v221.actionManager.processTrigger(15, C17.CreateNewFromScene(v221, p517));
          }
        };
        this._deviceSourceManager.onDeviceConnectedObservable.add(p518 => {
          if (p518.deviceType === v74.Mouse) {
            p518.onInputChangedObservable.add(p519 => {
              this._originMouseEvent = p519;
              if (p519.inputIndex === v75.LeftClick || p519.inputIndex === v75.MiddleClick || p519.inputIndex === v75.RightClick || p519.inputIndex === v75.BrowserBack || p519.inputIndex === v75.BrowserForward) {
                if (v218 && p518.getInput(p519.inputIndex) === 1) {
                  this._onPointerDown(p519);
                } else if (v217 && p518.getInput(p519.inputIndex) === 0) {
                  this._onPointerUp(p519);
                }
              } else if (v219) {
                if (p519.inputIndex === v75.Move) {
                  this._onPointerMove(p519);
                } else if (p519.inputIndex === v75.MouseWheelX || p519.inputIndex === v75.MouseWheelY || p519.inputIndex === v75.MouseWheelZ) {
                  this._onPointerMove(p519);
                }
              }
            });
          } else if (p518.deviceType === v74.Touch) {
            p518.onInputChangedObservable.add(p520 => {
              if (p520.inputIndex === v75.LeftClick) {
                if (v218 && p518.getInput(p520.inputIndex) === 1) {
                  this._onPointerDown(p520);
                  if (this._activePointerIdsCount > 1) {
                    this._isMultiTouchGesture = true;
                  }
                } else if (v217 && p518.getInput(p520.inputIndex) === 0) {
                  this._onPointerUp(p520);
                  if (this._activePointerIdsCount === 0) {
                    this._isMultiTouchGesture = false;
                  }
                }
              }
              if (v219 && p520.inputIndex === v75.Move) {
                this._onPointerMove(p520);
              }
            });
          } else if (p518.deviceType === v74.Keyboard) {
            p518.onInputChangedObservable.add(p521 => {
              if (p521.type === "keydown") {
                this._onKeyDown(p521);
              } else if (p521.type === "keyup") {
                this._onKeyUp(p521);
              }
            });
          }
        });
        this._alreadyAttached = true;
      }
      tO() {
        if (this._alreadyAttached) {
          this._deviceSourceManager.dispose();
          this._deviceSourceManager = null;
          if (this._alreadyAttachedTo && !this._scene.doNotHandleCursors) {
            this._alreadyAttachedTo.style.cursor = this._scene.defaultCursor;
          }
          this._alreadyAttached = false;
          this._alreadyAttachedTo = null;
        }
      }
      setPointerOverMesh(p522, yC = 0, IC, fC) {
        if (this._meshUnderPointerId[yC] === p522 && (!p522 || !p522._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting)) {
          return;
        }
        const v248 = this._meshUnderPointerId[yC];
        let v249;
        if (v248) {
          v249 = v248._getActionManagerForTrigger(10);
          if (v249) {
            v249.processTrigger(10, new C17(v248, this._pointerX, this._pointerY, p522, vP300, {
              pointerId: p299
            }));
          }
        }
        if (p522) {
          this._meshUnderPointerId[p299] = p522;
          this._pointerOverMesh = p522;
          v249 = p522._getActionManagerForTrigger(9);
          if (v249) {
            v249.processTrigger(9, new C17(p522, this._pointerX, this._pointerY, p522, vP300, {
              pointerId: p299,
              pickResult: p300
            }));
          }
        } else {
          delete this._meshUnderPointerId[p299];
          this._pointerOverMesh = null;
        }
        if (this._scene.onMeshUnderPointerUpdatedObservable.hasObservers()) {
          this._scene.onMeshUnderPointerUpdatedObservable.notifyObservers({
            mesh: p522,
            pointerId: p299
          });
        }
      }
      getPointerOverMesh() {
        return this.meshUnderPointer;
      }
      _invalidateMesh(p523) {
        if (this._pointerOverMesh === p523) {
          this._pointerOverMesh = null;
        }
        if (this._pickedDownMesh === p523) {
          this._pickedDownMesh = null;
        }
        if (this._pickedUpMesh === p523) {
          this._pickedUpMesh = null;
        }
        for (const v250 in this._meshUnderPointerId) {
          if (this._meshUnderPointerId[v250] === p523) {
            delete this._meshUnderPointerId[v250];
          }
        }
      }
    }
    C26.DragMovementThreshold = 10;
    C26.LongPressDelay = 500;
    C26.DoubleClickDelay = 300;
    C26.ExclusiveDoubleClickMode = false;
    var vP30021 = p300(17186);
    var vP30022 = p300(17009);
    var vP30023 = p300(17171);
    var vP30024 = p300(17275);
    var vP30025 = p300(16840);
    var vP30026 = p300(17279);
    var vP30027 = p300(16986);
    class C27 {
      constructor() {
        this.pointerDownFastCheck = false;
        this.pointerUpFastCheck = false;
        this.pointerMoveFastCheck = false;
        this.hO = false;
        this.skipPointerDownPicking = false;
        this.skipPointerUpPicking = false;
      }
    }
    var v251;
    var vP30028 = p300(16811);
    var vP30029 = p300(16927);
    (function (p524) {
      p524[p524.BackwardCompatible = 0] = "BackwardCompatible";
      p524[p524.Intermediate = 1] = "Intermediate";
      p524[p524.Aggressive = 2] = "Aggressive";
    })(v251 ||= {});
    class C28 {
      static DefaultMaterialFactory(p525) {
        throw (0, vP30016.c)("GL");
      }
      static CollisionCoordinatorFactory() {
        throw (0, vP30016.c)("DefaultCollisionCoordinator");
      }
      get clearColor() {
        return this._clearColor;
      }
      set clearColor(p526) {
        if (p526 !== this._clearColor) {
          this._clearColor = p526;
          this.onClearColorChangedObservable.notifyObservers(this._clearColor);
        }
      }
      get imageProcessingConfiguration() {
        return this._imageProcessingConfiguration;
      }
      get performancePriority() {
        return this._performancePriority;
      }
      set performancePriority(p527) {
        if (p527 !== this._performancePriority) {
          this._performancePriority = p527;
          switch (p527) {
            case 0:
              this.skipFrustumClipping = false;
              this._renderingManager.maintainStateBetweenFrames = false;
              this.hO = false;
              this.Kf = true;
              break;
            case 1:
              this.skipFrustumClipping = false;
              this._renderingManager.maintainStateBetweenFrames = false;
              this.hO = true;
              this.Kf = false;
              break;
            case 2:
              this.skipFrustumClipping = true;
              this._renderingManager.maintainStateBetweenFrames = true;
              this.hO = true;
              this.Kf = false;
          }
          this.onScenePerformancePriorityChangedObservable.notifyObservers(p527);
        }
      }
      set forceWireframe(p528) {
        if (this._forceWireframe !== p528) {
          this._forceWireframe = p528;
          this.markAllMaterialsAsDirty(16);
        }
      }
      get forceWireframe() {
        return this._forceWireframe;
      }
      set skipFrustumClipping(p529) {
        if (this._skipFrustumClipping !== p529) {
          this._skipFrustumClipping = p529;
        }
      }
      get skipFrustumClipping() {
        return this._skipFrustumClipping;
      }
      set forcePointsCloud(p530) {
        if (this._forcePointsCloud !== p530) {
          this._forcePointsCloud = p530;
          this.markAllMaterialsAsDirty(16);
        }
      }
      get forcePointsCloud() {
        return this._forcePointsCloud;
      }
      get environmentTexture() {
        return this._environmentTexture;
      }
      set environmentTexture(p531) {
        if (this._environmentTexture !== p531) {
          this._environmentTexture = p531;
          this.onEnvironmentTextureChangedObservable.notifyObservers(p531);
          this.markAllMaterialsAsDirty(1);
        }
      }
      getNodes() {
        let vA7 = [];
        vA7 = vA7.concat(this.meshes);
        vA7 = vA7.concat(this.lights);
        vA7 = vA7.concat(this.cameras);
        vA7 = vA7.concat(this.transformNodes);
        for (const v252 of this.skeletons) {
          vA7 = vA7.concat(v252.bones);
        }
        return vA7;
      }
      get animationPropertiesOverride() {
        return this._animationPropertiesOverride;
      }
      set animationPropertiesOverride(p532) {
        this._animationPropertiesOverride = p532;
      }
      set onDispose(p533) {
        if (this._onDisposeObserver) {
          this.Cf.remove(this._onDisposeObserver);
        }
        this._onDisposeObserver = this.Cf.add(p533);
      }
      set beforeRender(p534) {
        if (this._onBeforeRenderObserver) {
          this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver);
        }
        if (p534) {
          this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(p534);
        }
      }
      set afterRender(p535) {
        if (this._onAfterRenderObserver) {
          this.onAfterRenderObservable.remove(this._onAfterRenderObserver);
        }
        if (p535) {
          this._onAfterRenderObserver = this.onAfterRenderObservable.add(p535);
        }
      }
      set beforeCameraRender(p536) {
        if (this._onBeforeCameraRenderObserver) {
          this.onBeforeCameraRenderObservable.remove(this._onBeforeCameraRenderObserver);
        }
        this._onBeforeCameraRenderObserver = this.onBeforeCameraRenderObservable.add(p536);
      }
      set afterCameraRender(p537) {
        if (this._onAfterCameraRenderObserver) {
          this.onAfterCameraRenderObservable.remove(this._onAfterCameraRenderObserver);
        }
        this._onAfterCameraRenderObserver = this.onAfterCameraRenderObservable.add(p537);
      }
      get pointerDownPredicate() {
        return this._pointerPickingConfiguration.pointerDownPredicate;
      }
      set pointerDownPredicate(p538) {
        this._pointerPickingConfiguration.pointerDownPredicate = p538;
      }
      get pointerUpPredicate() {
        return this._pointerPickingConfiguration.pointerUpPredicate;
      }
      set pointerUpPredicate(p539) {
        this._pointerPickingConfiguration.pointerUpPredicate = p539;
      }
      get pointerMovePredicate() {
        return this._pointerPickingConfiguration.pointerMovePredicate;
      }
      set pointerMovePredicate(p540) {
        this._pointerPickingConfiguration.pointerMovePredicate = p540;
      }
      get pointerDownFastCheck() {
        return this._pointerPickingConfiguration.pointerDownFastCheck;
      }
      set pointerDownFastCheck(p541) {
        this._pointerPickingConfiguration.pointerDownFastCheck = p541;
      }
      get pointerUpFastCheck() {
        return this._pointerPickingConfiguration.pointerUpFastCheck;
      }
      set pointerUpFastCheck(p542) {
        this._pointerPickingConfiguration.pointerUpFastCheck = p542;
      }
      get pointerMoveFastCheck() {
        return this._pointerPickingConfiguration.pointerMoveFastCheck;
      }
      set pointerMoveFastCheck(p543) {
        this._pointerPickingConfiguration.pointerMoveFastCheck = p543;
      }
      get hO() {
        return this._pointerPickingConfiguration.hO;
      }
      set hO(p544) {
        this._pointerPickingConfiguration.hO = p544;
      }
      get skipPointerDownPicking() {
        return this._pointerPickingConfiguration.skipPointerDownPicking;
      }
      set skipPointerDownPicking(p545) {
        this._pointerPickingConfiguration.skipPointerDownPicking = p545;
      }
      get skipPointerUpPicking() {
        return this._pointerPickingConfiguration.skipPointerUpPicking;
      }
      set skipPointerUpPicking(p546) {
        this._pointerPickingConfiguration.skipPointerUpPicking = p546;
      }
      get unTranslatedPointer() {
        return this._inputManager.unTranslatedPointer;
      }
      static get DragMovementThreshold() {
        return C26.DragMovementThreshold;
      }
      static set DragMovementThreshold(p547) {
        C26.DragMovementThreshold = p547;
      }
      static get LongPressDelay() {
        return C26.LongPressDelay;
      }
      static set LongPressDelay(p548) {
        C26.LongPressDelay = p548;
      }
      static get DoubleClickDelay() {
        return C26.DoubleClickDelay;
      }
      static set DoubleClickDelay(p549) {
        C26.DoubleClickDelay = p549;
      }
      static get ExclusiveDoubleClickMode() {
        return C26.ExclusiveDoubleClickMode;
      }
      static set ExclusiveDoubleClickMode(p550) {
        C26.ExclusiveDoubleClickMode = p550;
      }
      bindEyePosition(p551) {
        let v253 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "vEyePosition";
        let v254 = arguments.length > 2 && arguments[2] !== undefined && arguments[2];
        const v255 = this._forcedViewPosition ? this._forcedViewPosition : this._mirroredCameraPosition ? this._mirroredCameraPosition : this.activeCamera?.globalPosition ?? vP3007.bL.ZeroReadOnly;
        const v256 = this.useRightHandedSystem === (this._mirroredCameraPosition != null);
        vP3007.TmpVectors.Vector4[0].set(v255.x, v255.y, v255.z, v256 ? -1 : 1);
        if (p551) {
          if (v254) {
            p551.setFloat3(v253, vP3007.TmpVectors.Vector4[0].x, vP3007.TmpVectors.Vector4[0].y, vP3007.TmpVectors.Vector4[0].z);
          } else {
            p551.setVector4(v253, vP3007.TmpVectors.Vector4[0]);
          }
        }
        return vP3007.TmpVectors.Vector4[0];
      }
      finalizeSceneUbo() {
        const v257 = this.getSceneUniformBuffer();
        const v258 = this.bindEyePosition(null);
        v257.updateFloat4("vEyePosition", v258.x, v258.y, v258.z, v258.w);
        v257.update();
        return v257;
      }
      set useRightHandedSystem(p552) {
        if (this._useRightHandedSystem !== p552) {
          this._useRightHandedSystem = p552;
          this.markAllMaterialsAsDirty(16);
        }
      }
      get useRightHandedSystem() {
        return this._useRightHandedSystem;
      }
      setStepId(p553) {
        this._currentStepId = p553;
      }
      getStepId() {
        return this._currentStepId;
      }
      getInternalStep() {
        return this._currentInternalStep;
      }
      set fogEnabled(p554) {
        if (this._fogEnabled !== p554) {
          this._fogEnabled = p554;
          this.markAllMaterialsAsDirty(16);
        }
      }
      get fogEnabled() {
        return this._fogEnabled;
      }
      set fogMode(p555) {
        if (this._fogMode !== p555) {
          this._fogMode = p555;
          this.markAllMaterialsAsDirty(16);
        }
      }
      get fogMode() {
        return this._fogMode;
      }
      get prePass() {
        return !!this.prePassRenderer && this.prePassRenderer.defaultRT.enabled;
      }
      set shadowsEnabled(p556) {
        if (this._shadowsEnabled !== p556) {
          this._shadowsEnabled = p556;
          this.markAllMaterialsAsDirty(2);
        }
      }
      get shadowsEnabled() {
        return this._shadowsEnabled;
      }
      set lightsEnabled(p557) {
        if (this._lightsEnabled !== p557) {
          this._lightsEnabled = p557;
          this.markAllMaterialsAsDirty(2);
        }
      }
      get lightsEnabled() {
        return this._lightsEnabled;
      }
      get activeCameras() {
        return this._activeCameras;
      }
      set activeCameras(p558) {
        if (this._unObserveActiveCameras) {
          this._unObserveActiveCameras();
          this._unObserveActiveCameras = null;
        }
        if (p558) {
          this._unObserveActiveCameras = (0, vP30027.g)(p558, () => {
            this.onActiveCamerasChanged.notifyObservers(this);
          });
        }
        this._activeCameras = p558;
      }
      get activeCamera() {
        return this._activeCamera;
      }
      set activeCamera(p559) {
        if (p559 !== this._activeCamera) {
          this._activeCamera = p559;
          this.onActiveCameraChanged.notifyObservers(this);
        }
      }
      get _hasDefaultMaterial() {
        return C28.DefaultMaterialFactory !== C28._OriginalDefaultMaterialFactory;
      }
      get defaultMaterial() {
        this._defaultMaterial ||= C28.DefaultMaterialFactory(this);
        return this._defaultMaterial;
      }
      set defaultMaterial(p560) {
        this._defaultMaterial = p560;
      }
      set texturesEnabled(p561) {
        if (this._texturesEnabled !== p561) {
          this._texturesEnabled = p561;
          this.markAllMaterialsAsDirty(1);
        }
      }
      get texturesEnabled() {
        return this._texturesEnabled;
      }
      get frameGraph() {
        return this._frameGraph;
      }
      set frameGraph(p562) {
        if (this._frameGraph) {
          this._frameGraph = p562;
          if (!p562) {
            this.customRenderFunction = this._currentCustomRenderFunction;
          }
          return;
        }
        this._frameGraph = p562;
        if (p562) {
          this._currentCustomRenderFunction = this.customRenderFunction;
          this.customRenderFunction = this._renderWithFrameGraph;
          this.activeCamera = null;
        }
      }
      set skeletonsEnabled(p563) {
        if (this._skeletonsEnabled !== p563) {
          this._skeletonsEnabled = p563;
          this.markAllMaterialsAsDirty(8);
        }
      }
      get skeletonsEnabled() {
        return this._skeletonsEnabled;
      }
      get collisionCoordinator() {
        if (!this._collisionCoordinator) {
          this._collisionCoordinator = C28.CollisionCoordinatorFactory();
          this._collisionCoordinator.init(this);
        }
        return this._collisionCoordinator;
      }
      get renderingManager() {
        return this._renderingManager;
      }
      get frustumPlanes() {
        return this._frustumPlanes;
      }
      _registerTransientComponents() {
        if (this._transientComponents.length > 0) {
          for (const v259 of this._transientComponents) {
            v259.register();
          }
          this._transientComponents.length = 0;
        }
      }
      LI(p564) {
        this._components.push(p564);
        this._transientComponents.push(p564);
        const vP564 = p564;
        if (vP564.addFromContainer && vP564.serialize) {
          this._serializableComponents.push(vP564);
        }
      }
      _getComponent(p565) {
        for (const v260 of this._components) {
          if (v260.name === p565) {
            return v260;
          }
        }
        return null;
      }
      get uniqueId() {
        return this._uniqueId;
      }
      constructor(p566, p567) {
        this._inputManager = new C26(this);
        this.cameraToUseForPointers = null;
        this._isScene = true;
        this._blockEntityCollection = false;
        this.Kf = true;
        this.autoClearDepthAndStencil = true;
        this._clearColor = new vP30022.Xg(0.2, 0.2, 0.3, 1);
        this.onClearColorChangedObservable = new vP3004.e();
        this.ambientColor = new vP30022.eL(0, 0, 0);
        this.environmentIntensity = 1;
        this.iblIntensity = 1;
        this._performancePriority = 0;
        this.onScenePerformancePriorityChangedObservable = new vP3004.e();
        this._forceWireframe = false;
        this._skipFrustumClipping = false;
        this._forcePointsCloud = false;
        this.rootNodes = [];
        this.cameras = [];
        this.lights = [];
        this.meshes = [];
        this.skeletons = [];
        this.BO = [];
        this.animations = [];
        this.animationGroups = [];
        this.multiMaterials = [];
        this.materials = [];
        this.morphTargetManagers = [];
        this.geometries = [];
        this.transformNodes = [];
        this.actionManagers = [];
        this.textures = [];
        this._environmentTexture = null;
        this.postProcesses = [];
        this.effectLayers = [];
        this.vS = null;
        this.layers = [];
        this.lensFlareSystems = [];
        this.proceduralTextures = [];
        this.animationsEnabled = true;
        this._animationPropertiesOverride = null;
        this.useConstantAnimationDeltaTime = false;
        this.constantlyUpdateMeshUnderPointer = false;
        this.hoverCursor = "pointer";
        this.defaultCursor = "";
        this.doNotHandleCursors = false;
        this.preventDefaultOnPointerDown = true;
        this.preventDefaultOnPointerUp = true;
        this.metadata = null;
        this.reservedDataStore = null;
        this.disableOfflineSupportExceptionRules = [];
        this.Cf = new vP3004.e();
        this._onDisposeObserver = null;
        this.onBeforeRenderObservable = new vP3004.e();
        this._onBeforeRenderObserver = null;
        this.onAfterRenderObservable = new vP3004.e();
        this.onAfterRenderCameraObservable = new vP3004.e();
        this._onAfterRenderObserver = null;
        this.onBeforeAnimationsObservable = new vP3004.e();
        this.onAfterAnimationsObservable = new vP3004.e();
        this.onBeforeDrawPhaseObservable = new vP3004.e();
        this.onAfterDrawPhaseObservable = new vP3004.e();
        this.onReadyObservable = new vP3004.e();
        this.onBeforeCameraRenderObservable = new vP3004.e();
        this._onBeforeCameraRenderObserver = null;
        this.onAfterCameraRenderObservable = new vP3004.e();
        this._onAfterCameraRenderObserver = null;
        this.onBeforeActiveMeshesEvaluationObservable = new vP3004.e();
        this.onAfterActiveMeshesEvaluationObservable = new vP3004.e();
        this.onBeforeParticlesRenderingObservable = new vP3004.e();
        this.onAfterParticlesRenderingObservable = new vP3004.e();
        this.onDataLoadedObservable = new vP3004.e();
        this.onNewCameraAddedObservable = new vP3004.e();
        this.onCameraRemovedObservable = new vP3004.e();
        this.onNewLightAddedObservable = new vP3004.e();
        this.onLightRemovedObservable = new vP3004.e();
        this.onNewGeometryAddedObservable = new vP3004.e();
        this.onGeometryRemovedObservable = new vP3004.e();
        this.onNewTransformNodeAddedObservable = new vP3004.e();
        this.onTransformNodeRemovedObservable = new vP3004.e();
        this.onNewMeshAddedObservable = new vP3004.e();
        this.onMeshRemovedObservable = new vP3004.e();
        this.onNewSkeletonAddedObservable = new vP3004.e();
        this.onSkeletonRemovedObservable = new vP3004.e();
        this.onNewMaterialAddedObservable = new vP3004.e();
        this.onNewMultiMaterialAddedObservable = new vP3004.e();
        this.onMaterialRemovedObservable = new vP3004.e();
        this.onMultiMaterialRemovedObservable = new vP3004.e();
        this.onNewTextureAddedObservable = new vP3004.e();
        this.onTextureRemovedObservable = new vP3004.e();
        this.onBeforeRenderTargetsRenderObservable = new vP3004.e();
        this.onAfterRenderTargetsRenderObservable = new vP3004.e();
        this.onBeforeStepObservable = new vP3004.e();
        this.onAfterStepObservable = new vP3004.e();
        this.onActiveCameraChanged = new vP3004.e();
        this.onActiveCamerasChanged = new vP3004.e();
        this.onBeforeRenderingGroupObservable = new vP3004.e();
        this.onAfterRenderingGroupObservable = new vP3004.e();
        this.onMeshImportedObservable = new vP3004.e();
        this.onAnimationFileImportedObservable = new vP3004.e();
        this.onEnvironmentTextureChangedObservable = new vP3004.e();
        this.onMeshUnderPointerUpdatedObservable = new vP3004.e();
        this._registeredForLateAnimationBindings = new vP3005.c(256);
        this._pointerPickingConfiguration = new C27();
        this.onPrePointerObservable = new vP3004.e();
        this.onPointerObservable = new vP3004.e();
        this.onPreKeyboardObservable = new vP3004.e();
        this.onKeyboardObservable = new vP3004.e();
        this._useRightHandedSystem = false;
        this._timeAccumulator = 0;
        this._currentStepId = 0;
        this._currentInternalStep = 0;
        this._fogEnabled = true;
        this._fogMode = C28.FOGMODE_NONE;
        this.fogColor = new vP30022.eL(0.2, 0.2, 0.3);
        this.fogDensity = 0.1;
        this.fogStart = 0;
        this.fogEnd = 1000;
        this.needsPreviousWorldMatrices = false;
        this._shadowsEnabled = true;
        this._lightsEnabled = true;
        this._unObserveActiveCameras = null;
        this._texturesEnabled = true;
        this._frameGraph = null;
        this.frameGraphs = [];
        this.physicsEnabled = true;
        this.particlesEnabled = true;
        this.spritesEnabled = true;
        this._skeletonsEnabled = true;
        this.lensFlaresEnabled = true;
        this.collisionsEnabled = true;
        this.gravity = new vP3007.bL(0, -9.807, 0);
        this.postProcessesEnabled = true;
        this.renderTargetsEnabled = true;
        this.dumpNextRenderTargets = false;
        this.customRenderTargets = [];
        this.importedMeshesFiles = [];
        this.probesEnabled = true;
        this._meshesForIntersections = new vP3005.c(256);
        this.proceduralTexturesEnabled = true;
        this._totalVertices = new vP30021.b();
        this._activeIndices = new vP30021.b();
        this._activeParticles = new vP30021.b();
        this._activeBones = new vP30021.b();
        this._animationTime = 0;
        this.animationTimeScale = 1;
        this._renderId = 0;
        this._frameId = 0;
        this._executeWhenReadyTimeoutId = null;
        this._intermediateRendering = false;
        this._defaultFrameBufferCleared = false;
        this._viewUpdateFlag = -1;
        this._projectionUpdateFlag = -1;
        this._toBeDisposed = new Array(256);
        this._activeRequests = new Array();
        this._pendingData = [];
        this._isDisposed = false;
        this.dispatchAllSubMeshesOfActiveMeshes = false;
        this._activeMeshes = new vP3005.g(256);
        this._processedMaterials = new vP3005.g(256);
        this._renderTargets = new vP3005.c(256);
        this._materialsRenderTargets = new vP3005.c(256);
        this._activeParticleSystems = new vP3005.g(256);
        this._activeSkeletons = new vP3005.c(32);
        this._softwareSkinnedMeshes = new vP3005.c(32);
        this._activeAnimatables = new Array();
        this._transformMatrix = vP3007.Matrix.Zero();
        this.requireLightSorting = false;
        this._components = [];
        this._serializableComponents = [];
        this._transientComponents = [];
        this._beforeCameraUpdateStage = vP30013.h.Create();
        this._beforeClearStage = vP30013.h.Create();
        this._beforeRenderTargetClearStage = vP30013.h.Create();
        this._gatherRenderTargetsStage = vP30013.h.Create();
        this._gatherActiveCameraRenderTargetsStage = vP30013.h.Create();
        this._isReadyForMeshStage = vP30013.h.Create();
        this._beforeEvaluateActiveMeshStage = vP30013.h.Create();
        this._evaluateSubMeshStage = vP30013.h.Create();
        this._preActiveMeshStage = vP30013.h.Create();
        this._cameraDrawRenderTargetStage = vP30013.h.Create();
        this._beforeCameraDrawStage = vP30013.h.Create();
        this._beforeRenderTargetDrawStage = vP30013.h.Create();
        this._beforeRenderingGroupDrawStage = vP30013.h.Create();
        this._beforeRenderingMeshStage = vP30013.h.Create();
        this._afterRenderingMeshStage = vP30013.h.Create();
        this._afterRenderingGroupDrawStage = vP30013.h.Create();
        this._afterCameraDrawStage = vP30013.h.Create();
        this._afterCameraPostProcessStage = vP30013.h.Create();
        this._afterRenderTargetDrawStage = vP30013.h.Create();
        this._afterRenderTargetPostProcessStage = vP30013.h.Create();
        this._afterRenderStage = vP30013.h.Create();
        this._pointerMoveStage = vP30013.h.Create();
        this._pointerDownStage = vP30013.h.Create();
        this._pointerUpStage = vP30013.h.Create();
        this._geometriesByUniqueId = null;
        this._uniqueId = 0;
        this._defaultMeshCandidates = {
          data: [],
          length: 0
        };
        this._defaultSubMeshCandidates = {
          data: [],
          length: 0
        };
        this._preventFreeActiveMeshesAndRenderingGroups = false;
        this._activeMeshesFrozen = false;
        this._activeMeshesFrozenButKeepClipping = false;
        this._skipEvaluateActiveMeshesCompletely = false;
        this._useCurrentFrameBuffer = false;
        this._allowPostProcessClearColor = true;
        this.getDeterministicFrameTime = () => this._engine.getTimeStep();
        this._registeredActions = 0;
        this._blockMaterialDirtyMechanism = false;
        this._perfCollector = null;
        this.activeCameras = [];
        this._uniqueId = this.getUniqueId();
        const v261 = (0, vP300.d)({
          useGeometryUniqueIdsMap: true,
          useMaterialMeshMap: true,
          useClonedMeshMap: true,
          virtual: false
        }, p567);
        p566 = this._engine = p566 || vP30015.b.LastCreatedEngine;
        if (v261.virtual) {
          p566._virtualScenes.push(this);
        } else {
          vP30015.b._LastCreatedScene = this;
          p566.scenes.push(this);
        }
        this._uid = null;
        this._renderingManager = new vP30012.d(this);
        if (vP30011.c) {
          this.postProcessManager = new vP30011.c(this);
        }
        if ((0, vP30014.k)()) {
          this.attachControl();
        }
        this._createUbo();
        if (vP3008.b) {
          this._imageProcessingConfiguration = new vP3008.b();
        }
        this.setDefaultCandidateProviders();
        if (v261.useGeometryUniqueIdsMap) {
          this._geometriesByUniqueId = {};
        }
        this.useMaterialMeshMap = v261.useMaterialMeshMap;
        this.useClonedMeshMap = v261.useClonedMeshMap;
        if (!p567 || !p567.virtual) {
          p566.onNewSceneAddedObservable.notifyObservers(this);
        }
      }
      getClassName() {
        return "Scene";
      }
      _getDefaultMeshCandidates() {
        this._defaultMeshCandidates.data = this.meshes;
        this._defaultMeshCandidates.length = this.meshes.length;
        return this._defaultMeshCandidates;
      }
      _getDefaultSubMeshCandidates(p568) {
        this._defaultSubMeshCandidates.data = p568.wf;
        this._defaultSubMeshCandidates.length = p568.wf.length;
        return this._defaultSubMeshCandidates;
      }
      setDefaultCandidateProviders() {
        this.getActiveMeshCandidates = () => this._getDefaultMeshCandidates();
        this.getActiveSubMeshCandidates = p569 => this._getDefaultSubMeshCandidates(p569);
        this.getIntersectingSubMeshCandidates = (p570, p571) => this._getDefaultSubMeshCandidates(p570);
        this.getCollidingSubMeshCandidates = (p572, p573) => this._getDefaultSubMeshCandidates(p572);
      }
      get meshUnderPointer() {
        return this._inputManager.meshUnderPointer;
      }
      get pointerX() {
        return this._inputManager.pointerX;
      }
      set pointerX(p574) {
        this._inputManager.pointerX = p574;
      }
      get pointerY() {
        return this._inputManager.pointerY;
      }
      set pointerY(p575) {
        this._inputManager.pointerY = p575;
      }
      getCachedMaterial() {
        return this._cachedMaterial;
      }
      getCachedEffect() {
        return this._cachedEffect;
      }
      getCachedVisibility() {
        return this._cachedVisibility;
      }
      isCachedMaterialInvalid(p576, p577, IC = 1) {
        return this._cachedEffect !== p577 || this._cachedMaterial !== p576 || this._cachedVisibility !== IC;
      }
      getEngine() {
        return this._engine;
      }
      getTotalVertices() {
        return this._totalVertices.current;
      }
      get totalVerticesPerfCounter() {
        return this._totalVertices;
      }
      getActiveIndices() {
        return this._activeIndices.current;
      }
      get totalActiveIndicesPerfCounter() {
        return this._activeIndices;
      }
      getActiveParticles() {
        return this._activeParticles.current;
      }
      get activeParticlesPerfCounter() {
        return this._activeParticles;
      }
      getActiveBones() {
        return this._activeBones.current;
      }
      get activeBonesPerfCounter() {
        return this._activeBones;
      }
      getActiveMeshes() {
        return this._activeMeshes;
      }
      getAnimationRatio() {
        if (this._animationRatio !== undefined) {
          return this._animationRatio;
        } else {
          return 1;
        }
      }
      getRenderId() {
        return this._renderId;
      }
      getFrameId() {
        return this._frameId;
      }
      incrementRenderId() {
        this._renderId++;
      }
      _createUbo() {
        this.setSceneUniformBuffer(this.createSceneUniformBuffer());
      }
      simulatePointerMove(p578, p579) {
        this._inputManager.simulatePointerMove(p578, p579);
        return this;
      }
      simulatePointerDown(p580, p581) {
        this._inputManager.simulatePointerDown(p580, p581);
        return this;
      }
      simulatePointerUp(p582, p583, p584) {
        this._inputManager.simulatePointerUp(p582, p583, p584);
        return this;
      }
      isPointerCaptured(CC = 0) {
        return this._inputManager.isPointerCaptured(CC);
      }
      attachControl() {
        let v262 = !(arguments.length > 0) || arguments[0] === undefined || arguments[0];
        let v263 = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
        let v264 = !(arguments.length > 2) || arguments[2] === undefined || arguments[2];
        this._inputManager.attachControl(v262, v263, v264);
      }
      tO() {
        this._inputManager.tO();
      }
      isReady() {
        var v265;
        let v266;
        let v267 = !(arguments.length > 0) || arguments[0] === undefined || arguments[0];
        if (this._isDisposed) {
          return false;
        }
        const v268 = this.getEngine();
        const v269 = v268.currentRenderPassId;
        v268.currentRenderPassId = this.activeCamera?.renderPassId ?? v269;
        let v270 = true;
        if (this._pendingData.length > 0) {
          v270 = false;
        }
        if ((v265 = this.prePassRenderer) !== null && v265 !== undefined) {
          v265.update();
        }
        if (this.useOrderIndependentTransparency && this.depthPeelingRenderer && v270) {
          v270 = this.depthPeelingRenderer.isReady();
        }
        if (v267) {
          this._processedMaterials.reset();
          this._materialsRenderTargets.reset();
        }
        v266 = 0;
        for (; v266 < this.meshes.length; v266++) {
          const v271 = this.meshes[v266];
          if (!v271.wf || v271.wf.length === 0) {
            continue;
          }
          if (!v271.isReady(true)) {
            v270 = false;
            continue;
          }
          const v272 = v271.hasThinInstances || v271.getClassName() === "InstancedMesh" || v271.getClassName() === "InstancedLinesMesh" || v268.getCaps().instancedArrays && v271.instances.length > 0;
          for (const v273 of this._isReadyForMeshStage) {
            if (!v273.action(v271, v272)) {
              v270 = false;
            }
          }
          if (!v267) {
            continue;
          }
          const v274 = v271.material || this.defaultMaterial;
          if (v274) {
            if (v274._storeEffectOnSubMeshes) {
              for (const v275 of v271.wf) {
                const v276 = v275.kI();
                if (v276 && v276.hasRenderTargetTextures && v276.getRenderTargetTextures != null && this._processedMaterials.indexOf(v276) === -1) {
                  this._processedMaterials.push(v276);
                  this._materialsRenderTargets.concatWithNoDuplicate(v276.getRenderTargetTextures());
                }
              }
            } else if (v274.hasRenderTargetTextures && v274.getRenderTargetTextures != null && this._processedMaterials.indexOf(v274) === -1) {
              this._processedMaterials.push(v274);
              this._materialsRenderTargets.concatWithNoDuplicate(v274.getRenderTargetTextures());
            }
          }
        }
        if (v267) {
          for (v266 = 0; v266 < this._materialsRenderTargets.length; ++v266) {
            if (!this._materialsRenderTargets.data[v266].isReadyForRendering()) {
              v270 = false;
            }
          }
        }
        for (v266 = 0; v266 < this.geometries.length; v266++) {
          if (this.geometries[v266].delayLoadState === 2) {
            v270 = false;
          }
        }
        if (this.activeCameras && this.activeCameras.length > 0) {
          for (const v277 of this.activeCameras) {
            if (!v277.isReady(true)) {
              v270 = false;
            }
          }
        } else if (this.activeCamera) {
          if (!this.activeCamera.isReady(true)) {
            v270 = false;
          }
        }
        for (const v278 of this.BO) {
          if (!v278.isReady()) {
            v270 = false;
          }
        }
        if (this.layers) {
          for (const v279 of this.layers) {
            if (!v279.isReady()) {
              v270 = false;
            }
          }
        }
        if (this.effectLayers) {
          for (const v280 of this.effectLayers) {
            if (!v280.isLayerReady()) {
              v270 = false;
            }
          }
        }
        if (!v268.areAllEffectsReady()) {
          v270 = false;
        }
        v268.currentRenderPassId = v269;
        return v270;
      }
      resetCachedMaterial() {
        this._cachedMaterial = null;
        this._cachedEffect = null;
        this._cachedVisibility = null;
      }
      registerBeforeRender(p585) {
        this.onBeforeRenderObservable.add(p585);
      }
      unregisterBeforeRender(p586) {
        this.onBeforeRenderObservable.removeCallback(p586);
      }
      registerAfterRender(p587) {
        this.onAfterRenderObservable.add(p587);
      }
      unregisterAfterRender(p588) {
        this.onAfterRenderObservable.removeCallback(p588);
      }
      _executeOnceBeforeRender(p589) {
        const vF6 = () => {
          p589();
          setTimeout(() => {
            this.unregisterBeforeRender(vF6);
          });
        };
        this.registerBeforeRender(vF6);
      }
      executeOnceBeforeRender(p590, p591) {
        if (p591 !== undefined) {
          setTimeout(() => {
            this._executeOnceBeforeRender(p590);
          }, p591);
        } else {
          this._executeOnceBeforeRender(p590);
        }
      }
      addPendingData(p592) {
        this._pendingData.push(p592);
      }
      removePendingData(p593) {
        const v281 = this.isLoading;
        const v282 = this._pendingData.indexOf(p593);
        if (v282 !== -1) {
          this._pendingData.splice(v282, 1);
        }
        if (v281 && !this.isLoading) {
          this.onDataLoadedObservable.notifyObservers(this);
        }
      }
      getWaitingItemsCount() {
        return this._pendingData.length;
      }
      get isLoading() {
        return this._pendingData.length > 0;
      }
      executeWhenReady(p594, yC = false) {
        this.onReadyObservable.addOnce(p594);
        if (this._executeWhenReadyTimeoutId === null) {
          this._checkIsReady(p299);
        }
      }
      async whenReadyAsync(CC = false) {
        return await new Promise(p595 => {
          this.executeWhenReady(() => {
            p595();
          }, CC);
        });
      }
      _checkIsReady(CC = false) {
        this._registerTransientComponents();
        if (this.isReady(CC)) {
          this.onReadyObservable.notifyObservers(this);
          this.onReadyObservable.clear();
          this._executeWhenReadyTimeoutId = null;
          return;
        } else if (this._isDisposed) {
          this.onReadyObservable.clear();
          this._executeWhenReadyTimeoutId = null;
          return;
        } else {
          this._executeWhenReadyTimeoutId = setTimeout(() => {
            this.incrementRenderId();
            this._checkIsReady(p298);
          }, 100);
          return;
        }
      }
      get animatables() {
        return this._activeAnimatables;
      }
      resetLastAnimationTimeFrame() {
        this._animationTimeLast = vP3003.d.Now;
      }
      getViewMatrix() {
        return this._viewMatrix;
      }
      getProjectionMatrix() {
        return this._projectionMatrix;
      }
      getTransformMatrix() {
        return this._transformMatrix;
      }
      setTransformMatrix(p596, p597, p598, p599) {
        if (!p598 && !p599 && !!this._multiviewSceneUbo) {
          this._multiviewSceneUbo.dispose();
          this._multiviewSceneUbo = null;
        }
        if (this._viewUpdateFlag !== p596.updateFlag || this._projectionUpdateFlag !== p597.updateFlag) {
          this._viewUpdateFlag = p596.updateFlag;
          this._projectionUpdateFlag = p597.updateFlag;
          this._viewMatrix = p596;
          this._projectionMatrix = p597;
          this._viewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix);
          if (this._frustumPlanes) {
            vP30023.c.GetPlanesToRef(this._transformMatrix, this._frustumPlanes);
          } else {
            this._frustumPlanes = vP30023.c.GetPlanes(this._transformMatrix);
          }
          if (this._multiviewSceneUbo && this._multiviewSceneUbo.useUbo) {
            this._updateMultiviewUbo(p598, p599);
          } else if (this._sceneUbo.useUbo) {
            this._sceneUbo.Zf("viewProjection", this._transformMatrix);
            this._sceneUbo.Zf("view", this._viewMatrix);
            this._sceneUbo.Zf("projection", this._projectionMatrix);
          }
        }
      }
      getSceneUniformBuffer() {
        if (this._multiviewSceneUbo) {
          return this._multiviewSceneUbo;
        } else {
          return this._sceneUbo;
        }
      }
      createSceneUniformBuffer(p600) {
        const v283 = new vP3009.d(this._engine, undefined, false, p600 ?? "rL");
        v283.addUniform("viewProjection", 16);
        v283.addUniform("view", 16);
        v283.addUniform("projection", 16);
        v283.addUniform("vEyePosition", 4);
        return v283;
      }
      setSceneUniformBuffer(p601) {
        this._sceneUbo = p601;
        this._viewUpdateFlag = -1;
        this._projectionUpdateFlag = -1;
      }
      getUniqueId() {
        return vP30024.c.UniqueId;
      }
      aG(p602, yC = false) {
        if (!this._blockEntityCollection && (this.meshes.push(p602), p602._resyncLightSources(), p602.parent || p602._addToSceneRootNodes(), vP3002.Tools.SetImmediate(() => {
          this.onNewMeshAddedObservable.notifyObservers(p602);
        }), yC)) {
          const v284 = p602.QY();
          for (const v285 of v284) {
            this.aG(v285);
          }
        }
      }
      NG(p603, yC = false) {
        const v286 = this.meshes.indexOf(p603);
        if (v286 !== -1) {
          this.meshes.splice(v286, 1);
          if (!p603.parent) {
            p603._removeFromSceneRootNodes();
          }
        }
        this._inputManager._invalidateMesh(p603);
        this.onMeshRemovedObservable.notifyObservers(p603);
        if (yC) {
          const v287 = p603.QY();
          for (const v288 of v287) {
            this.NG(v288);
          }
        }
        return v286;
      }
      addTransformNode(p604) {
        if (!this._blockEntityCollection && (p604.YL() !== this || p604._indexInSceneTransformNodesArray === -1)) {
          p604._indexInSceneTransformNodesArray = this.transformNodes.length;
          this.transformNodes.push(p604);
          if (!p604.parent) {
            p604._addToSceneRootNodes();
          }
          this.onNewTransformNodeAddedObservable.notifyObservers(p604);
        }
      }
      removeTransformNode(p605) {
        const v289 = p605._indexInSceneTransformNodesArray;
        if (v289 !== -1) {
          if (v289 !== this.transformNodes.length - 1) {
            const v290 = this.transformNodes[this.transformNodes.length - 1];
            this.transformNodes[v289] = v290;
            v290._indexInSceneTransformNodesArray = v289;
          }
          p605._indexInSceneTransformNodesArray = -1;
          this.transformNodes.pop();
          if (!p605.parent) {
            p605._removeFromSceneRootNodes();
          }
        }
        this.onTransformNodeRemovedObservable.notifyObservers(p605);
        return v289;
      }
      removeSkeleton(p606) {
        const v291 = this.skeletons.indexOf(p606);
        if (v291 !== -1) {
          this.skeletons.splice(v291, 1);
          this.onSkeletonRemovedObservable.notifyObservers(p606);
          this._executeActiveContainerCleanup(this._activeSkeletons);
        }
        return v291;
      }
      removeMorphTargetManager(p607) {
        const v292 = this.morphTargetManagers.indexOf(p607);
        if (v292 !== -1) {
          this.morphTargetManagers.splice(v292, 1);
        }
        return v292;
      }
      removeLight(p608) {
        const v293 = this.lights.indexOf(p608);
        if (v293 !== -1) {
          for (const v294 of this.meshes) {
            v294._removeLightSource(p608, false);
          }
          this.lights.splice(v293, 1);
          this.sortLightsByPriority();
          if (!p608.parent) {
            p608._removeFromSceneRootNodes();
          }
        }
        this.onLightRemovedObservable.notifyObservers(p608);
        return v293;
      }
      removeCamera(p609) {
        const v295 = this.cameras.indexOf(p609);
        if (v295 !== -1) {
          this.cameras.splice(v295, 1);
          if (!p609.parent) {
            p609._removeFromSceneRootNodes();
          }
        }
        if (this.activeCameras) {
          const v296 = this.activeCameras.indexOf(p609);
          if (v296 !== -1) {
            this.activeCameras.splice(v296, 1);
          }
        }
        if (this.activeCamera === p609) {
          if (this.cameras.length > 0) {
            this.activeCamera = this.cameras[0];
          } else {
            this.activeCamera = null;
          }
        }
        this.onCameraRemovedObservable.notifyObservers(p609);
        return v295;
      }
      removeParticleSystem(p610) {
        const v297 = this.BO.indexOf(p610);
        if (v297 !== -1) {
          this.BO.splice(v297, 1);
          this._executeActiveContainerCleanup(this._activeParticleSystems);
        }
        return v297;
      }
      removeAnimation(p611) {
        const v298 = this.animations.indexOf(p611);
        if (v298 !== -1) {
          this.animations.splice(v298, 1);
        }
        return v298;
      }
      stopAnimation(p612, p613, p614) {}
      removeAnimationGroup(p615) {
        const v299 = this.animationGroups.indexOf(p615);
        if (v299 !== -1) {
          this.animationGroups.splice(v299, 1);
        }
        return v299;
      }
      removeMultiMaterial(p616) {
        const v300 = this.multiMaterials.indexOf(p616);
        if (v300 !== -1) {
          this.multiMaterials.splice(v300, 1);
        }
        this.onMultiMaterialRemovedObservable.notifyObservers(p616);
        return v300;
      }
      removeMaterial(p617) {
        const v301 = p617._indexInSceneMaterialArray;
        if (v301 !== -1 && v301 < this.materials.length) {
          if (v301 !== this.materials.length - 1) {
            const v302 = this.materials[this.materials.length - 1];
            this.materials[v301] = v302;
            v302._indexInSceneMaterialArray = v301;
          }
          p617._indexInSceneMaterialArray = -1;
          this.materials.pop();
        }
        this.onMaterialRemovedObservable.notifyObservers(p617);
        return v301;
      }
      removeActionManager(p618) {
        const v303 = this.actionManagers.indexOf(p618);
        if (v303 !== -1) {
          this.actionManagers.splice(v303, 1);
        }
        return v303;
      }
      removeTexture(p619) {
        const v304 = this.textures.indexOf(p619);
        if (v304 !== -1) {
          this.textures.splice(v304, 1);
        }
        this.onTextureRemovedObservable.notifyObservers(p619);
        return v304;
      }
      addLight(p620) {
        if (!this._blockEntityCollection) {
          this.lights.push(p620);
          this.sortLightsByPriority();
          if (!p620.parent) {
            p620._addToSceneRootNodes();
          }
          for (const v305 of this.meshes) {
            if (v305.lightSources.indexOf(p620) === -1) {
              v305.lightSources.push(p620);
              v305._resyncLightSources();
            }
          }
          vP3002.Tools.SetImmediate(() => {
            this.onNewLightAddedObservable.notifyObservers(p620);
          });
        }
      }
      sortLightsByPriority() {
        if (this.requireLightSorting) {
          this.lights.sort(vP30026.e.CompareLightsPriority);
        }
      }
      addCamera(p621) {
        if (!this._blockEntityCollection) {
          this.cameras.push(p621);
          vP3002.Tools.SetImmediate(() => {
            this.onNewCameraAddedObservable.notifyObservers(p621);
          });
          if (!p621.parent) {
            p621._addToSceneRootNodes();
          }
        }
      }
      addSkeleton(p622) {
        if (!this._blockEntityCollection) {
          this.skeletons.push(p622);
          vP3002.Tools.SetImmediate(() => {
            this.onNewSkeletonAddedObservable.notifyObservers(p622);
          });
        }
      }
      addParticleSystem(p623) {
        if (!this._blockEntityCollection) {
          this.BO.push(p623);
        }
      }
      addAnimation(p624) {
        if (!this._blockEntityCollection) {
          this.animations.push(p624);
        }
      }
      addAnimationGroup(p625) {
        if (!this._blockEntityCollection) {
          this.animationGroups.push(p625);
        }
      }
      addMultiMaterial(p626) {
        if (!this._blockEntityCollection) {
          this.multiMaterials.push(p626);
          vP3002.Tools.SetImmediate(() => {
            this.onNewMultiMaterialAddedObservable.notifyObservers(p626);
          });
        }
      }
      addMaterial(p627) {
        if (!this._blockEntityCollection && (p627.YL() !== this || p627._indexInSceneMaterialArray === -1)) {
          p627._indexInSceneMaterialArray = this.materials.length;
          this.materials.push(p627);
          vP3002.Tools.SetImmediate(() => {
            this.onNewMaterialAddedObservable.notifyObservers(p627);
          });
        }
      }
      addMorphTargetManager(p628) {
        if (!this._blockEntityCollection) {
          this.morphTargetManagers.push(p628);
        }
      }
      addGeometry(p629) {
        if (!this._blockEntityCollection) {
          if (this._geometriesByUniqueId) {
            this._geometriesByUniqueId[p629.uniqueId] = this.geometries.length;
          }
          this.geometries.push(p629);
        }
      }
      addActionManager(p630) {
        this.actionManagers.push(p630);
      }
      addTexture(p631) {
        if (!this._blockEntityCollection) {
          this.textures.push(p631);
          this.onNewTextureAddedObservable.notifyObservers(p631);
        }
      }
      switchActiveCamera(p632) {
        let v306 = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
        if (this._engine.getInputElement()) {
          if (this.activeCamera) {
            this.activeCamera.tO();
          }
          this.activeCamera = p632;
          if (v306) {
            p632.attachControl();
          }
        }
      }
      setActiveCameraById(p633) {
        const v307 = this.getCameraById(p633);
        if (v307) {
          this.activeCamera = v307;
          return v307;
        } else {
          return null;
        }
      }
      setActiveCameraByName(p634) {
        const v308 = this.getCameraByName(p634);
        if (v308) {
          this.activeCamera = v308;
          return v308;
        } else {
          return null;
        }
      }
      getAnimationGroupByName(p635) {
        for (let vLN027 = 0; vLN027 < this.animationGroups.length; vLN027++) {
          if (this.animationGroups[vLN027].name === p635) {
            return this.animationGroups[vLN027];
          }
        }
        return null;
      }
      _getMaterial(p636, p637) {
        for (let vLN028 = 0; vLN028 < this.materials.length; vLN028++) {
          const v309 = this.materials[vLN028];
          if (p637(v309)) {
            return v309;
          }
        }
        if (p636) {
          for (let vLN029 = 0; vLN029 < this.multiMaterials.length; vLN029++) {
            const v310 = this.multiMaterials[vLN029];
            if (p637(v310)) {
              return v310;
            }
          }
        }
        return null;
      }
      getMaterialByUniqueID(p638, yC = false) {
        return this.getMaterialByUniqueId(p638, yC);
      }
      getMaterialByUniqueId(p639, yC = false) {
        return this._getMaterial(yC, p640 => p640.uniqueId === p639);
      }
      getMaterialById(p641, yC = false) {
        return this._getMaterial(yC, p642 => p642.id === p641);
      }
      getMaterialByName(p643, yC = false) {
        return this._getMaterial(yC, p644 => p644.name === p643);
      }
      getLastMaterialById(p645, yC = false) {
        for (let v311 = this.materials.length - 1; v311 >= 0; v311--) {
          if (this.materials[v311].id === p645) {
            return this.materials[v311];
          }
        }
        if (yC) {
          for (let v312 = this.multiMaterials.length - 1; v312 >= 0; v312--) {
            if (this.multiMaterials[v312].id === p645) {
              return this.multiMaterials[v312];
            }
          }
        }
        return null;
      }
      getTextureByUniqueId(p646) {
        for (let vLN030 = 0; vLN030 < this.textures.length; vLN030++) {
          if (this.textures[vLN030].uniqueId === p646) {
            return this.textures[vLN030];
          }
        }
        return null;
      }
      getTextureByName(p647) {
        for (let vLN031 = 0; vLN031 < this.textures.length; vLN031++) {
          if (this.textures[vLN031].name === p647) {
            return this.textures[vLN031];
          }
        }
        return null;
      }
      getCameraById(p648) {
        for (let vLN032 = 0; vLN032 < this.cameras.length; vLN032++) {
          if (this.cameras[vLN032].id === p648) {
            return this.cameras[vLN032];
          }
        }
        return null;
      }
      getCameraByUniqueId(p649) {
        for (let vLN033 = 0; vLN033 < this.cameras.length; vLN033++) {
          if (this.cameras[vLN033].uniqueId === p649) {
            return this.cameras[vLN033];
          }
        }
        return null;
      }
      getCameraByName(p650) {
        for (let vLN034 = 0; vLN034 < this.cameras.length; vLN034++) {
          if (this.cameras[vLN034].name === p650) {
            return this.cameras[vLN034];
          }
        }
        return null;
      }
      getBoneById(p651) {
        for (let vLN035 = 0; vLN035 < this.skeletons.length; vLN035++) {
          const v313 = this.skeletons[vLN035];
          for (let vLN036 = 0; vLN036 < v313.bones.length; vLN036++) {
            if (v313.bones[vLN036].id === p651) {
              return v313.bones[vLN036];
            }
          }
        }
        return null;
      }
      getBoneByName(p652) {
        for (let vLN037 = 0; vLN037 < this.skeletons.length; vLN037++) {
          const v314 = this.skeletons[vLN037];
          for (let vLN038 = 0; vLN038 < v314.bones.length; vLN038++) {
            if (v314.bones[vLN038].name === p652) {
              return v314.bones[vLN038];
            }
          }
        }
        return null;
      }
      getLightByName(p653) {
        for (let vLN039 = 0; vLN039 < this.lights.length; vLN039++) {
          if (this.lights[vLN039].name === p653) {
            return this.lights[vLN039];
          }
        }
        return null;
      }
      getLightById(p654) {
        for (let vLN040 = 0; vLN040 < this.lights.length; vLN040++) {
          if (this.lights[vLN040].id === p654) {
            return this.lights[vLN040];
          }
        }
        return null;
      }
      getLightByUniqueId(p655) {
        for (let vLN041 = 0; vLN041 < this.lights.length; vLN041++) {
          if (this.lights[vLN041].uniqueId === p655) {
            return this.lights[vLN041];
          }
        }
        return null;
      }
      getParticleSystemById(p656) {
        for (let vLN042 = 0; vLN042 < this.BO.length; vLN042++) {
          if (this.BO[vLN042].id === p656) {
            return this.BO[vLN042];
          }
        }
        return null;
      }
      getGeometryById(p657) {
        for (let vLN043 = 0; vLN043 < this.geometries.length; vLN043++) {
          if (this.geometries[vLN043].id === p657) {
            return this.geometries[vLN043];
          }
        }
        return null;
      }
      _getGeometryByUniqueId(p658) {
        if (this._geometriesByUniqueId) {
          const v315 = this._geometriesByUniqueId[p658];
          if (v315 !== undefined) {
            return this.geometries[v315];
          }
        } else {
          for (let vLN044 = 0; vLN044 < this.geometries.length; vLN044++) {
            if (this.geometries[vLN044].uniqueId === p658) {
              return this.geometries[vLN044];
            }
          }
        }
        return null;
      }
      getFrameGraphByName(p659) {
        for (let vLN045 = 0; vLN045 < this.frameGraphs.length; vLN045++) {
          if (this.frameGraphs[vLN045].name === p659) {
            return this.frameGraphs[vLN045];
          }
        }
        return null;
      }
      pushGeometry(p660, p661) {
        return (!!p661 || !this._getGeometryByUniqueId(p660.uniqueId)) && (this.addGeometry(p660), vP3002.Tools.SetImmediate(() => {
          this.onNewGeometryAddedObservable.notifyObservers(p660);
        }), true);
      }
      removeGeometry(p662) {
        let v316;
        if (this._geometriesByUniqueId) {
          v316 = this._geometriesByUniqueId[p662.uniqueId];
          if (v316 === undefined) {
            return false;
          }
        } else {
          v316 = this.geometries.indexOf(p662);
          if (v316 < 0) {
            return false;
          }
        }
        if (v316 !== this.geometries.length - 1) {
          const v317 = this.geometries[this.geometries.length - 1];
          if (v317) {
            this.geometries[v316] = v317;
            if (this._geometriesByUniqueId) {
              this._geometriesByUniqueId[v317.uniqueId] = v316;
            }
          }
        }
        if (this._geometriesByUniqueId) {
          this._geometriesByUniqueId[p662.uniqueId] = undefined;
        }
        this.geometries.pop();
        this.onGeometryRemovedObservable.notifyObservers(p662);
        return true;
      }
      getGeometries() {
        return this.geometries;
      }
      getMeshById(p663) {
        for (let vLN046 = 0; vLN046 < this.meshes.length; vLN046++) {
          if (this.meshes[vLN046].id === p663) {
            return this.meshes[vLN046];
          }
        }
        return null;
      }
      getMeshesById(p664) {
        return this.meshes.filter(function (p665) {
          return p665.id === p664;
        });
      }
      getTransformNodeById(p666) {
        for (let vLN047 = 0; vLN047 < this.transformNodes.length; vLN047++) {
          if (this.transformNodes[vLN047].id === p666) {
            return this.transformNodes[vLN047];
          }
        }
        return null;
      }
      getTransformNodeByUniqueId(p667) {
        for (let vLN048 = 0; vLN048 < this.transformNodes.length; vLN048++) {
          if (this.transformNodes[vLN048].uniqueId === p667) {
            return this.transformNodes[vLN048];
          }
        }
        return null;
      }
      getTransformNodesById(p668) {
        return this.transformNodes.filter(function (p669) {
          return p669.id === p668;
        });
      }
      getMeshByUniqueId(p670) {
        for (let vLN049 = 0; vLN049 < this.meshes.length; vLN049++) {
          if (this.meshes[vLN049].uniqueId === p670) {
            return this.meshes[vLN049];
          }
        }
        return null;
      }
      getLastMeshById(p671) {
        for (let v318 = this.meshes.length - 1; v318 >= 0; v318--) {
          if (this.meshes[v318].id === p671) {
            return this.meshes[v318];
          }
        }
        return null;
      }
      getLastTransformNodeById(p672) {
        for (let v319 = this.transformNodes.length - 1; v319 >= 0; v319--) {
          if (this.transformNodes[v319].id === p672) {
            return this.transformNodes[v319];
          }
        }
        return null;
      }
      getLastEntryById(p673) {
        let v320;
        for (v320 = this.meshes.length - 1; v320 >= 0; v320--) {
          if (this.meshes[v320].id === p673) {
            return this.meshes[v320];
          }
        }
        for (v320 = this.transformNodes.length - 1; v320 >= 0; v320--) {
          if (this.transformNodes[v320].id === p673) {
            return this.transformNodes[v320];
          }
        }
        for (v320 = this.cameras.length - 1; v320 >= 0; v320--) {
          if (this.cameras[v320].id === p673) {
            return this.cameras[v320];
          }
        }
        for (v320 = this.lights.length - 1; v320 >= 0; v320--) {
          if (this.lights[v320].id === p673) {
            return this.lights[v320];
          }
        }
        return null;
      }
      getNodeById(p674) {
        const v321 = this.getMeshById(p674);
        if (v321) {
          return v321;
        }
        const v322 = this.getTransformNodeById(p674);
        if (v322) {
          return v322;
        }
        const v323 = this.getLightById(p674);
        if (v323) {
          return v323;
        }
        const v324 = this.getCameraById(p674);
        if (v324) {
          return v324;
        }
        const v325 = this.getBoneById(p674);
        return v325 || null;
      }
      getNodeByName(p675) {
        const v326 = this.getMeshByName(p675);
        if (v326) {
          return v326;
        }
        const v327 = this.getTransformNodeByName(p675);
        if (v327) {
          return v327;
        }
        const v328 = this.getLightByName(p675);
        if (v328) {
          return v328;
        }
        const v329 = this.getCameraByName(p675);
        if (v329) {
          return v329;
        }
        const v330 = this.getBoneByName(p675);
        return v330 || null;
      }
      getMeshByName(p676) {
        for (let vLN050 = 0; vLN050 < this.meshes.length; vLN050++) {
          if (this.meshes[vLN050].name === p676) {
            return this.meshes[vLN050];
          }
        }
        return null;
      }
      getTransformNodeByName(p677) {
        for (let vLN051 = 0; vLN051 < this.transformNodes.length; vLN051++) {
          if (this.transformNodes[vLN051].name === p677) {
            return this.transformNodes[vLN051];
          }
        }
        return null;
      }
      getLastSkeletonById(p678) {
        for (let v331 = this.skeletons.length - 1; v331 >= 0; v331--) {
          if (this.skeletons[v331].id === p678) {
            return this.skeletons[v331];
          }
        }
        return null;
      }
      getSkeletonByUniqueId(p679) {
        for (let vLN052 = 0; vLN052 < this.skeletons.length; vLN052++) {
          if (this.skeletons[vLN052].uniqueId === p679) {
            return this.skeletons[vLN052];
          }
        }
        return null;
      }
      getSkeletonById(p680) {
        for (let vLN053 = 0; vLN053 < this.skeletons.length; vLN053++) {
          if (this.skeletons[vLN053].id === p680) {
            return this.skeletons[vLN053];
          }
        }
        return null;
      }
      getSkeletonByName(p681) {
        for (let vLN054 = 0; vLN054 < this.skeletons.length; vLN054++) {
          if (this.skeletons[vLN054].name === p681) {
            return this.skeletons[vLN054];
          }
        }
        return null;
      }
      getMorphTargetManagerById(p682) {
        for (let vLN055 = 0; vLN055 < this.morphTargetManagers.length; vLN055++) {
          if (this.morphTargetManagers[vLN055].uniqueId === p682) {
            return this.morphTargetManagers[vLN055];
          }
        }
        return null;
      }
      getMorphTargetById(p683) {
        for (let vLN056 = 0; vLN056 < this.morphTargetManagers.length; ++vLN056) {
          const v332 = this.morphTargetManagers[vLN056];
          for (let vLN057 = 0; vLN057 < v332.numTargets; ++vLN057) {
            const v333 = v332.getTarget(vLN057);
            if (v333.id === p683) {
              return v333;
            }
          }
        }
        return null;
      }
      getMorphTargetByName(p684) {
        for (let vLN058 = 0; vLN058 < this.morphTargetManagers.length; ++vLN058) {
          const v334 = this.morphTargetManagers[vLN058];
          for (let vLN059 = 0; vLN059 < v334.numTargets; ++vLN059) {
            const v335 = v334.getTarget(vLN059);
            if (v335.name === p684) {
              return v335;
            }
          }
        }
        return null;
      }
      getPostProcessByName(p685) {
        for (let vLN060 = 0; vLN060 < this.postProcesses.length; ++vLN060) {
          const v336 = this.postProcesses[vLN060];
          if (v336.name === p685) {
            return v336;
          }
        }
        return null;
      }
      isActiveMesh(p686) {
        return this._activeMeshes.indexOf(p686) !== -1;
      }
      get uid() {
        this._uid ||= vP3002.Tools.RandomId();
        return this._uid;
      }
      addExternalData(p687, p688) {
        this._externalData ||= new C16();
        return this._externalData.add(p687, p688);
      }
      getExternalData(p689) {
        if (this._externalData) {
          return this._externalData.get(p689);
        } else {
          return null;
        }
      }
      getOrAddExternalDataWithFactory(p690, p691) {
        this._externalData ||= new C16();
        return this._externalData.getOrAddWithFactory(p690, p691);
      }
      removeExternalData(p692) {
        return this._externalData.remove(p692);
      }
      _evaluateSubMesh(p693, p694, p695, p696) {
        if (p696 || p693.isInFrustum(this._frustumPlanes)) {
          for (const v337 of this._evaluateSubMeshStage) {
            v337.action(p694, p693);
          }
          const v338 = p693.kI();
          if (v338 !== null && v338 !== undefined) {
            if (v338.hasRenderTargetTextures && v338.getRenderTargetTextures != null && this._processedMaterials.indexOf(v338) === -1) {
              this._processedMaterials.push(v338);
              this._materialsRenderTargets.concatWithNoDuplicate(v338.getRenderTargetTextures());
            }
            this._renderingManager.dispatch(p693, p694, v338);
          }
        }
      }
      freeProcessedMaterials() {
        this._processedMaterials.dispose();
      }
      get blockfreeActiveMeshesAndRenderingGroups() {
        return this._preventFreeActiveMeshesAndRenderingGroups;
      }
      set blockfreeActiveMeshesAndRenderingGroups(p697) {
        if (this._preventFreeActiveMeshesAndRenderingGroups !== p697) {
          if (p697) {
            this.freeActiveMeshes();
            this.freeRenderingGroups();
          }
          this._preventFreeActiveMeshesAndRenderingGroups = p697;
        }
      }
      freeActiveMeshes() {
        if (!this.blockfreeActiveMeshesAndRenderingGroups && (this._activeMeshes.dispose(), this.activeCamera && this.activeCamera._activeMeshes && this.activeCamera._activeMeshes.dispose(), this.activeCameras)) {
          for (let vLN061 = 0; vLN061 < this.activeCameras.length; vLN061++) {
            const v339 = this.activeCameras[vLN061];
            if (v339 && v339._activeMeshes) {
              v339._activeMeshes.dispose();
            }
          }
        }
      }
      freeRenderingGroups() {
        if (!this.blockfreeActiveMeshesAndRenderingGroups && (this._renderingManager && this._renderingManager.freeRenderingGroups(), this.textures)) {
          for (let vLN062 = 0; vLN062 < this.textures.length; vLN062++) {
            const v340 = this.textures[vLN062];
            if (v340 && v340.renderList) {
              v340.freeRenderingGroups();
            }
          }
        }
      }
      _isInIntermediateRendering() {
        return this._intermediateRendering;
      }
      freezeActiveMeshes(CC = false, yC, IC) {
        let v341 = !(arguments.length > 3) || arguments[3] === undefined || arguments[3];
        let v342 = arguments.length > 4 && arguments[4] !== undefined && arguments[4];
        this.executeWhenReady(() => {
          if (this.activeCamera) {
            if (!this._frustumPlanes) {
              this.updateTransformMatrix();
            }
            this._evaluateActiveMeshes();
            this._activeMeshesFrozen = true;
            this._activeMeshesFrozenButKeepClipping = v342;
            this._skipEvaluateActiveMeshesCompletely = CC;
            if (v341) {
              for (let vLN063 = 0; vLN063 < this._activeMeshes.length; vLN063++) {
                this._activeMeshes.data[vLN063]._freeze();
              }
            }
            if (yC) {
              p299();
            }
          } else if (IC) {
            p300("No active camera found");
          }
        });
        return this;
      }
      unfreezeActiveMeshes() {
        for (let vLN064 = 0; vLN064 < this.meshes.length; vLN064++) {
          const v343 = this.meshes[vLN064];
          if (v343._internalAbstractMeshDataInfo) {
            v343._internalAbstractMeshDataInfo._isActive = false;
          }
        }
        for (let vLN065 = 0; vLN065 < this._activeMeshes.length; vLN065++) {
          this._activeMeshes.data[vLN065]._unFreeze();
        }
        this._activeMeshesFrozen = false;
        return this;
      }
      _executeActiveContainerCleanup(p698) {
        if (!!this._engine.snapshotRendering && this._engine.snapshotRenderingMode === 1 || !this._activeMeshesFrozen || !this._activeMeshes.length) {
          this.onBeforeRenderObservable.addOnce(() => p698.dispose());
        }
      }
      _evaluateActiveMeshes() {
        if (this._engine.snapshotRendering && this._engine.snapshotRenderingMode === 1) {
          var v344;
          if (this._activeMeshes.length > 0) {
            if ((v344 = this.activeCamera) !== null && v344 !== undefined) {
              v344._activeMeshes.reset();
            }
            this._activeMeshes.reset();
            this._renderingManager.reset();
            this._processedMaterials.reset();
            this._activeParticleSystems.reset();
            this._activeSkeletons.reset();
            this._softwareSkinnedMeshes.reset();
          }
          return;
        }
        if (this._activeMeshesFrozen && this._activeMeshes.length) {
          if (!this._skipEvaluateActiveMeshesCompletely) {
            const v345 = this._activeMeshes.length;
            for (let vLN066 = 0; vLN066 < v345; vLN066++) {
              this._activeMeshes.data[vLN066].hf();
            }
          }
          if (this._activeParticleSystems) {
            const v346 = this._activeParticleSystems.length;
            for (let vLN067 = 0; vLN067 < v346; vLN067++) {
              this._activeParticleSystems.data[vLN067].animate();
            }
          }
          this._renderingManager.resetSprites();
          return;
        }
        if (!this.activeCamera) {
          return;
        }
        this.onBeforeActiveMeshesEvaluationObservable.notifyObservers(this);
        this.activeCamera._activeMeshes.reset();
        this._activeMeshes.reset();
        this._renderingManager.reset();
        this._processedMaterials.reset();
        this._activeParticleSystems.reset();
        this._activeSkeletons.reset();
        this._softwareSkinnedMeshes.reset();
        this._materialsRenderTargets.reset();
        for (const v347 of this._beforeEvaluateActiveMeshStage) {
          v347.action();
        }
        const v348 = this.getActiveMeshCandidates();
        const v349 = v348.length;
        for (let vLN068 = 0; vLN068 < v349; vLN068++) {
          const v350 = v348.data[vLN068];
          let v351 = v350._internalAbstractMeshDataInfo._currentLOD.get(this.activeCamera);
          if (v351) {
            v351[1] = -1;
          } else {
            v351 = [v350, -1];
            v350._internalAbstractMeshDataInfo._currentLOD.set(this.activeCamera, v351);
          }
          if (v350.isBlocked) {
            continue;
          }
          this._totalVertices.addCount(v350.getTotalVertices(), false);
          if (!v350.isReady() || !v350.isEnabled() || v350.Cg.hasAZeroComponent) {
            continue;
          }
          v350.hf();
          if (v350.actionManager && v350.actionManager.hasSpecificTriggers2(12, 13)) {
            this._meshesForIntersections.pushNoDuplicate(v350);
          }
          let v352 = this.customLODSelector ? this.customLODSelector(v350, this.activeCamera) : v350.getLOD(this.activeCamera);
          v351[0] = v352;
          v351[1] = this._frameId;
          if (v352 !== undefined && v352 !== null && (v352 !== v350 && v352.billboardMode !== 0 && v352.hf(), v350._preActivate(), v350.isVisible && v350.visibility > 0 && (v350.layerMask & this.activeCamera.layerMask) !== 0 && (this._skipFrustumClipping || v350.cG || v350.isInFrustum(this._frustumPlanes)))) {
            this._activeMeshes.push(v350);
            this.activeCamera._activeMeshes.push(v350);
            if (v352 !== v350) {
              v352._activate(this._renderId, false);
            }
            for (const v353 of this._preActiveMeshStage) {
              v353.action(v350);
            }
            if (v350._activate(this._renderId, false)) {
              if (v350.isAnInstance) {
                if (v350._internalAbstractMeshDataInfo._actAsRegularMesh) {
                  v352 = v350;
                }
              } else {
                v352._internalAbstractMeshDataInfo._onlyForInstances = false;
              }
              v352._internalAbstractMeshDataInfo._isActive = true;
              this._activeMesh(v350, v352);
            }
            v350._postActivate();
          }
        }
        this.onAfterActiveMeshesEvaluationObservable.notifyObservers(this);
        if (this.particlesEnabled) {
          this.onBeforeParticlesRenderingObservable.notifyObservers(this);
          for (let vLN069 = 0; vLN069 < this.BO.length; vLN069++) {
            const v354 = this.BO[vLN069];
            if (!v354.isStarted() || !v354.Yy) {
              continue;
            }
            const v355 = v354.Yy;
            if (!v355.position || !!v355.isEnabled()) {
              this._activeParticleSystems.push(v354);
              v354.animate();
              this._renderingManager.dispatchParticles(v354);
            }
          }
          this.onAfterParticlesRenderingObservable.notifyObservers(this);
        }
      }
      _prepareSkeleton(p699) {
        if (this._skeletonsEnabled && p699.skeleton) {
          if (this._activeSkeletons.pushNoDuplicate(p699.skeleton)) {
            p699.skeleton.prepare();
            this._activeBones.addCount(p699.skeleton.bones.length, false);
          }
          if (!p699.computeBonesUsingShaders) {
            if (this._softwareSkinnedMeshes.pushNoDuplicate(p699) && this.frameGraph) {
              p699.applySkeleton(p699.skeleton);
            }
          }
        }
      }
      _activeMesh(p700, p701) {
        this._prepareSkeleton(p701);
        let v356 = p700.hasInstances || p700.isAnInstance || this.dispatchAllSubMeshesOfActiveMeshes || this._skipFrustumClipping || p701.cG;
        if (p701 && p701.wf && p701.wf.length > 0) {
          const v357 = this.getActiveSubMeshCandidates(p701);
          const v358 = v357.length;
          v356 = v356 || v358 === 1;
          for (let vLN070 = 0; vLN070 < v358; vLN070++) {
            const v359 = v357.data[vLN070];
            this._evaluateSubMesh(v359, p701, p700, v356);
          }
        }
      }
      updateTransformMatrix(p702) {
        const v360 = this.activeCamera;
        if (v360) {
          if (v360._renderingMultiview) {
            const v361 = v360._rigCameras[0];
            const v362 = v360._rigCameras[1];
            this.setTransformMatrix(v361.getViewMatrix(), v361.getProjectionMatrix(p702), v362.getViewMatrix(), v362.getProjectionMatrix(p702));
          } else {
            this.setTransformMatrix(v360.getViewMatrix(), v360.getProjectionMatrix(p702));
          }
        }
      }
      _bindFrameBuffer(p703) {
        let v363 = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
        if (!this._useCurrentFrameBuffer) {
          if (p703 && p703._multiviewTexture) {
            p703._multiviewTexture._bindFrameBuffer();
          } else if (p703 && p703.outputRenderTarget) {
            p703.outputRenderTarget._bindFrameBuffer();
          } else if (!this._engine._currentFrameBufferIsDefaultFrameBuffer()) {
            this._engine.restoreDefaultFramebuffer();
          }
        }
        if (v363) {
          this._clearFrameBuffer(p703);
        }
      }
      _clearFrameBuffer(p704) {
        if (p704 && p704._multiviewTexture) ;else if (p704 && p704.outputRenderTarget && !p704._renderingMultiview) {
          const v364 = p704.outputRenderTarget;
          if (v364.onClearObservable.hasObservers()) {
            v364.onClearObservable.notifyObservers(this._engine);
          } else if (!v364.skipInitialClear && !p704.isRightCamera) {
            if (this.Kf) {
              this._engine.clear(v364.clearColor || this._clearColor, !v364._cleared, true, true);
            }
            v364._cleared = true;
          }
        } else if (this._defaultFrameBufferCleared) {
          this._engine.clear(null, false, true, true);
        } else {
          this._defaultFrameBufferCleared = true;
          this._clear();
        }
      }
      _renderForCamera(p705, p706) {
        let v365 = !(arguments.length > 2) || arguments[2] === undefined || arguments[2];
        if (p705 && p705._skipRendering) {
          return;
        }
        const v366 = this._engine;
        this._activeCamera = p705;
        if (!this.activeCamera) {
          throw new Error("Active camera not set");
        }
        v366.setViewport(this.activeCamera.viewport);
        this.resetCachedMaterial();
        this._renderId++;
        if (!this.prePass && v365) {
          let v367 = true;
          if (p705._renderingMultiview && p705.outputRenderTarget) {
            v367 = p705.outputRenderTarget.skipInitialClear;
            if (this.Kf) {
              this._defaultFrameBufferCleared = false;
              p705.outputRenderTarget.skipInitialClear = false;
            }
          }
          this._bindFrameBuffer(this._activeCamera);
          if (p705._renderingMultiview && p705.outputRenderTarget) {
            p705.outputRenderTarget.skipInitialClear = v367;
          }
        }
        this.updateTransformMatrix();
        this.onBeforeCameraRenderObservable.notifyObservers(this.activeCamera);
        this._evaluateActiveMeshes();
        for (let vLN071 = 0; vLN071 < this._softwareSkinnedMeshes.length; vLN071++) {
          const v368 = this._softwareSkinnedMeshes.data[vLN071];
          v368.applySkeleton(v368.skeleton);
        }
        this.onBeforeRenderTargetsRenderObservable.notifyObservers(this);
        this._renderTargets.concatWithNoDuplicate(this._materialsRenderTargets);
        if (p705.customRenderTargets && p705.customRenderTargets.length > 0) {
          this._renderTargets.concatWithNoDuplicate(p705.customRenderTargets);
        }
        if (p706 && p706.customRenderTargets && p706.customRenderTargets.length > 0) {
          this._renderTargets.concatWithNoDuplicate(p706.customRenderTargets);
        }
        if (this.environmentTexture && this.environmentTexture.isRenderTarget) {
          this._renderTargets.pushNoDuplicate(this.environmentTexture);
        }
        for (const v369 of this._gatherActiveCameraRenderTargetsStage) {
          v369.action(this._renderTargets);
        }
        let v370 = false;
        if (this.renderTargetsEnabled) {
          this._intermediateRendering = true;
          if (this._renderTargets.length > 0) {
            vP3002.Tools.StartPerformanceCounter("Render targets", this._renderTargets.length > 0);
            for (let vLN072 = 0; vLN072 < this._renderTargets.length; vLN072++) {
              const v371 = this._renderTargets.data[vLN072];
              if (v371._shouldRender()) {
                this._renderId++;
                const v372 = v371.activeCamera && v371.activeCamera !== this.activeCamera;
                v371.render(v372, this.dumpNextRenderTargets);
                v370 = true;
              }
            }
            vP3002.Tools.EndPerformanceCounter("Render targets", this._renderTargets.length > 0);
            this._renderId++;
          }
          for (const v373 of this._cameraDrawRenderTargetStage) {
            v370 = v373.action(this.activeCamera) || v370;
          }
          this._intermediateRendering = false;
        }
        this._engine.currentRenderPassId = p705.outputRenderTarget?.renderPassId ?? p705.renderPassId ?? 0;
        if (v370 && !this.prePass) {
          this._bindFrameBuffer(this._activeCamera, false);
          this.updateTransformMatrix();
        }
        this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
        if (!!this.postProcessManager && !p705._multiviewTexture && !this.prePass) {
          this.postProcessManager._prepareFrame();
        }
        for (const v374 of this._beforeCameraDrawStage) {
          v374.action(this.activeCamera);
        }
        this.onBeforeDrawPhaseObservable.notifyObservers(this);
        if (v366.snapshotRendering && v366.snapshotRenderingMode === 1) {
          this.finalizeSceneUbo();
        }
        this._renderingManager.render(null, null, true, true);
        this.onAfterDrawPhaseObservable.notifyObservers(this);
        for (const v375 of this._afterCameraDrawStage) {
          v375.action(this.activeCamera);
        }
        if (this.postProcessManager && !p705._multiviewTexture) {
          const v376 = p705.outputRenderTarget ? p705.outputRenderTarget.renderTarget : undefined;
          this.postProcessManager._finalizeFrame(p705.isIntermediate, v376);
        }
        for (const v377 of this._afterCameraPostProcessStage) {
          v377.action(this.activeCamera);
        }
        this._renderTargets.reset();
        this.onAfterCameraRenderObservable.notifyObservers(this.activeCamera);
      }
      _processSubCameras(p707) {
        let v378 = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
        if (p707.cameraRigMode === 0 || p707._renderingMultiview) {
          if (p707._renderingMultiview && !this._multiviewSceneUbo) {
            this._createMultiviewUbo();
          }
          this._renderForCamera(p707, undefined, v378);
          this.onAfterRenderCameraObservable.notifyObservers(p707);
          return;
        }
        if (p707._useMultiviewToSingleView) {
          this._renderMultiviewToSingleView(p707);
        } else {
          this.onBeforeCameraRenderObservable.notifyObservers(p707);
          for (let vLN073 = 0; vLN073 < p707._rigCameras.length; vLN073++) {
            this._renderForCamera(p707._rigCameras[vLN073], p707);
          }
        }
        this._activeCamera = p707;
        this.updateTransformMatrix();
        this.onAfterRenderCameraObservable.notifyObservers(p707);
      }
      _checkIntersections() {
        for (let vLN074 = 0; vLN074 < this._meshesForIntersections.length; vLN074++) {
          const v379 = this._meshesForIntersections.data[vLN074];
          if (v379.actionManager) {
            for (let vLN075 = 0; v379.actionManager && vLN075 < v379.actionManager.actions.length; vLN075++) {
              const v380 = v379.actionManager.actions[vLN075];
              if (v380.trigger === 12 || v380.trigger === 13) {
                const v381 = v380.getTriggerParameter();
                const v382 = v381.mesh ? v381.mesh : v381;
                const v383 = v382.intersectsMesh(v379, v381.usePreciseIntersection);
                const v384 = v379._intersectionsInProgress.indexOf(v382);
                if (v383 && v384 === -1) {
                  if (v380.trigger === 12) {
                    v380._executeCurrent(C17.CreateNew(v379, undefined, v382));
                    v379._intersectionsInProgress.push(v382);
                  } else if (v380.trigger === 13) {
                    v379._intersectionsInProgress.push(v382);
                  }
                } else if (!v383 && v384 > -1) {
                  if (v380.trigger === 13) {
                    v380._executeCurrent(C17.CreateNew(v379, undefined, v382));
                  }
                  if (!v379.actionManager.hasSpecificTrigger(13, p708 => {
                    const v385 = p708.mesh ? p708.mesh : p708;
                    return v382 === v385;
                  }) || v380.trigger === 13) {
                    v379._intersectionsInProgress.splice(v384, 1);
                  }
                }
              }
            }
          }
        }
      }
      _advancePhysicsEngineStep(p709) {}
      _animate(p710) {}
      animate() {
        if (this._engine.isDeterministicLockStep()) {
          let v386 = Math.max(C28.MinDeltaTime, Math.min(this._engine.getDeltaTime(), C28.MaxDeltaTime)) + this._timeAccumulator;
          const v387 = this._engine.getTimeStep();
          const v388 = 1000 / v387 / 1000;
          let vLN076 = 0;
          const v389 = this._engine.getLockstepMaxSteps();
          let v390 = Math.floor(v386 / v387);
          for (v390 = Math.min(v390, v389); v386 > 0 && vLN076 < v390;) {
            this.onBeforeStepObservable.notifyObservers(this);
            this._animationRatio = v387 * v388;
            this._animate(v387);
            this.onAfterAnimationsObservable.notifyObservers(this);
            if (this.physicsEnabled) {
              this._advancePhysicsEngineStep(v387);
            }
            this.onAfterStepObservable.notifyObservers(this);
            this._currentStepId++;
            vLN076++;
            v386 -= v387;
          }
          this._timeAccumulator = v386 < 0 ? 0 : v386;
        } else {
          const v391 = this.useConstantAnimationDeltaTime ? 16 : Math.max(C28.MinDeltaTime, Math.min(this._engine.getDeltaTime(), C28.MaxDeltaTime));
          this._animationRatio = v391 * 0.06;
          this._animate();
          this.onAfterAnimationsObservable.notifyObservers(this);
          if (this.physicsEnabled) {
            this._advancePhysicsEngineStep(v391);
          }
        }
      }
      _clear() {
        if (this.autoClearDepthAndStencil || this.Kf) {
          this._engine.clear(this._clearColor, this.Kf || this.forceWireframe || this.forcePointsCloud, this.autoClearDepthAndStencil, this.autoClearDepthAndStencil);
        }
      }
      _checkCameraRenderTarget(p711) {
        var v392;
        if (p711 !== null && p711 !== undefined && !!p711.outputRenderTarget && (p711 === null || p711 === undefined || !p711.isRigCamera)) {
          p711.outputRenderTarget._cleared = false;
        }
        if (p711 !== null && p711 !== undefined && (v392 = p711.rigCameras) !== null && v392 !== undefined && v392.length) {
          for (let vLN077 = 0; vLN077 < p711.rigCameras.length; ++vLN077) {
            const v393 = p711.rigCameras[vLN077].outputRenderTarget;
            if (v393) {
              v393._cleared = false;
            }
          }
        }
      }
      resetDrawCache(p712) {
        if (this.meshes) {
          for (const v394 of this.meshes) {
            v394.resetDrawCache(p712);
          }
        }
      }
      _renderWithFrameGraph() {
        var v395;
        let v396 = !(arguments.length > 0) || arguments[0] === undefined || arguments[0];
        this.activeCamera = null;
        this._activeParticleSystems.reset();
        this._activeSkeletons.reset();
        if (v396) {
          for (const v397 of this.cameras) {
            v397.update();
            if (v397.cameraRigMode !== 0) {
              for (let vLN078 = 0; vLN078 < v397._rigCameras.length; vLN078++) {
                v397._rigCameras[vLN078].update();
              }
            }
          }
        }
        this.onBeforeRenderObservable.notifyObservers(this);
        for (const v398 of this._beforeClearStage) {
          v398.action();
        }
        const v399 = this.getActiveMeshCandidates();
        const v400 = v399.length;
        for (let vLN079 = 0; vLN079 < v400; vLN079++) {
          const v401 = v399.data[vLN079];
          if (!v401.isBlocked) {
            this._totalVertices.addCount(v401.getTotalVertices(), false);
            if (v401.isReady() && v401.isEnabled() && !v401.Cg.hasAZeroComponent) {
              v401.hf();
              if (v401.actionManager && v401.actionManager.hasSpecificTriggers2(12, 13)) {
                this._meshesForIntersections.pushNoDuplicate(v401);
              }
            }
          }
        }
        if (this.particlesEnabled) {
          for (let vLN080 = 0; vLN080 < this.BO.length; vLN080++) {
            const v402 = this.BO[vLN080];
            if (!v402.isStarted() || !v402.Yy) {
              continue;
            }
            const v403 = v402.Yy;
            if (!v403.position || !!v403.isEnabled()) {
              this._activeParticleSystems.push(v402);
              v402.animate();
            }
          }
        }
        if ((v395 = this.frameGraph) !== null && v395 !== undefined) {
          v395.execute();
        }
      }
      _renderRenderTarget(p713, p714, IC = false, fC = false) {
        this._intermediateRendering = true;
        if (p713._shouldRender()) {
          this._renderId++;
          this.activeCamera = p714;
          if (!this.activeCamera) {
            throw new Error("Active camera not set");
          }
          this._engine.setViewport(this.activeCamera.viewport);
          this.updateTransformMatrix();
          p713.render(IC, fC);
        }
        this._intermediateRendering = false;
      }
      render() {
        var v404;
        let v405 = !(arguments.length > 0) || arguments[0] === undefined || arguments[0];
        let v406 = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
        if (!this.AC) {
          if (this.onReadyObservable.hasObservers() && this._executeWhenReadyTimeoutId === null) {
            this._checkIsReady();
          }
          this._frameId++;
          this._defaultFrameBufferCleared = false;
          this._checkCameraRenderTarget(this.activeCamera);
          if ((v404 = this.activeCameras) !== null && v404 !== undefined && v404.length) {
            for (const v407 of this.activeCameras) {
              this._checkCameraRenderTarget(v407);
            }
          }
          this._registerTransientComponents();
          this._activeParticles.fetchNewFrame();
          this._totalVertices.fetchNewFrame();
          this._activeIndices.fetchNewFrame();
          this._activeBones.fetchNewFrame();
          this._meshesForIntersections.reset();
          this.resetCachedMaterial();
          this.onBeforeAnimationsObservable.notifyObservers(this);
          if (this.actionManager) {
            this.actionManager.processTrigger(11);
          }
          if (!v406) {
            this.animate();
          }
          for (const v408 of this._beforeCameraUpdateStage) {
            v408.action();
          }
          if (v405) {
            if (this.activeCameras && this.activeCameras.length > 0) {
              for (let vLN081 = 0; vLN081 < this.activeCameras.length; vLN081++) {
                const v409 = this.activeCameras[vLN081];
                v409.update();
                if (v409.cameraRigMode !== 0) {
                  for (let vLN082 = 0; vLN082 < v409._rigCameras.length; vLN082++) {
                    v409._rigCameras[vLN082].update();
                  }
                }
              }
            } else if (this.activeCamera && (this.activeCamera.update(), this.activeCamera.cameraRigMode !== 0)) {
              for (let vLN083 = 0; vLN083 < this.activeCamera._rigCameras.length; vLN083++) {
                this.activeCamera._rigCameras[vLN083].update();
              }
            }
          }
          if (this.customRenderFunction) {
            this._renderId++;
            this._engine.currentRenderPassId = 0;
            this.customRenderFunction(v405, v406);
          } else {
            var v410;
            this.onBeforeRenderObservable.notifyObservers(this);
            this.onBeforeRenderTargetsRenderObservable.notifyObservers(this);
            const v411 = (v410 = this.activeCameras) !== null && v410 !== undefined && v410.length ? this.activeCameras[0] : this.activeCamera;
            if (this.renderTargetsEnabled) {
              vP3002.Tools.StartPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0);
              for (let vLN084 = 0; vLN084 < this.customRenderTargets.length; vLN084++) {
                const v412 = this.customRenderTargets[vLN084];
                const v413 = v412.activeCamera || this.activeCamera;
                this._renderRenderTarget(v412, v413, v411 !== v413, this.dumpNextRenderTargets);
              }
              vP3002.Tools.EndPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0);
              this._renderId++;
            }
            this._engine.currentRenderPassId = v411?.renderPassId ?? 0;
            this.activeCamera = v411;
            if (this._activeCamera && this._activeCamera.cameraRigMode !== 22 && !this.prePass) {
              this._bindFrameBuffer(this._activeCamera, false);
            }
            this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
            for (const v414 of this._beforeClearStage) {
              v414.action();
            }
            this._clearFrameBuffer(this.activeCamera);
            for (const v415 of this._gatherRenderTargetsStage) {
              v415.action(this._renderTargets);
            }
            if (this.activeCameras && this.activeCameras.length > 0) {
              for (let vLN085 = 0; vLN085 < this.activeCameras.length; vLN085++) {
                this._processSubCameras(this.activeCameras[vLN085], vLN085 > 0);
              }
            } else {
              if (!this.activeCamera) {
                throw new Error("No camera defined");
              }
              this._processSubCameras(this.activeCamera, !!this.activeCamera.outputRenderTarget);
            }
          }
          this._checkIntersections();
          for (const v416 of this._afterRenderStage) {
            v416.action();
          }
          if (this.afterRender) {
            this.afterRender();
          }
          this.onAfterRenderObservable.notifyObservers(this);
          if (this._toBeDisposed.length) {
            for (let vLN086 = 0; vLN086 < this._toBeDisposed.length; vLN086++) {
              const v417 = this._toBeDisposed[vLN086];
              if (v417) {
                v417.dispose();
              }
            }
            this._toBeDisposed.length = 0;
          }
          this.dumpNextRenderTargets &&= false;
          this._activeBones.addCount(0, true);
          this._activeIndices.addCount(0, true);
          this._activeParticles.addCount(0, true);
          this._engine.restoreDefaultFramebuffer();
        }
      }
      freezeMaterials() {
        for (let vLN087 = 0; vLN087 < this.materials.length; vLN087++) {
          this.materials[vLN087].freeze();
        }
      }
      unfreezeMaterials() {
        for (let vLN088 = 0; vLN088 < this.materials.length; vLN088++) {
          this.materials[vLN088].ML();
        }
      }
      dispose() {
        if (this.AC) {
          return;
        }
        this.beforeRender = null;
        this.afterRender = null;
        this.metadata = null;
        this.skeletons.length = 0;
        this.morphTargetManagers.length = 0;
        this._transientComponents.length = 0;
        this._isReadyForMeshStage.clear();
        this._beforeEvaluateActiveMeshStage.clear();
        this._evaluateSubMeshStage.clear();
        this._preActiveMeshStage.clear();
        this._cameraDrawRenderTargetStage.clear();
        this._beforeCameraDrawStage.clear();
        this._beforeRenderTargetDrawStage.clear();
        this._beforeRenderingGroupDrawStage.clear();
        this._beforeRenderingMeshStage.clear();
        this._afterRenderingMeshStage.clear();
        this._afterRenderingGroupDrawStage.clear();
        this._afterCameraDrawStage.clear();
        this._afterRenderTargetDrawStage.clear();
        this._afterRenderStage.clear();
        this._beforeCameraUpdateStage.clear();
        this._beforeClearStage.clear();
        this._gatherRenderTargetsStage.clear();
        this._gatherActiveCameraRenderTargetsStage.clear();
        this._pointerMoveStage.clear();
        this._pointerDownStage.clear();
        this._pointerUpStage.clear();
        this.importedMeshesFiles = [];
        if (this._activeAnimatables && this.stopAllAnimations) {
          for (const v418 of this._activeAnimatables) {
            v418.onAnimationEndObservable.clear();
            v418.onAnimationEnd = null;
          }
          this.stopAllAnimations();
        }
        this.resetCachedMaterial();
        if (this.activeCamera) {
          this.activeCamera._activeMeshes.dispose();
          this.activeCamera = null;
        }
        this.activeCameras = null;
        this._activeMeshes.dispose();
        this._renderingManager.dispose();
        this._processedMaterials.dispose();
        this._activeParticleSystems.dispose();
        this._activeSkeletons.dispose();
        this._softwareSkinnedMeshes.dispose();
        this._renderTargets.dispose();
        this._materialsRenderTargets.dispose();
        this._registeredForLateAnimationBindings.dispose();
        this._meshesForIntersections.dispose();
        this._toBeDisposed.length = 0;
        const v419 = this._activeRequests.slice();
        for (const v420 of v419) {
          v420.abort();
        }
        this._activeRequests.length = 0;
        try {
          this.Cf.notifyObservers(this);
        } catch (e6) {
          vP30028.e.Error("An error occurred while calling onDisposeObservable!", e6);
        }
        this.tO();
        if (this._engine.getInputElement()) {
          for (let vLN089 = 0; vLN089 < this.cameras.length; vLN089++) {
            this.cameras[vLN089].tO();
          }
        }
        this._disposeList(this.animationGroups);
        this._disposeList(this.lights);
        if (this._defaultMaterial) {
          this._defaultMaterial.dispose();
        }
        this._disposeList(this.multiMaterials);
        this._disposeList(this.materials);
        this._disposeList(this.meshes, p715 => p715.dispose(true));
        this._disposeList(this.transformNodes, p716 => p716.dispose(true));
        const v421 = this.cameras;
        this._disposeList(v421);
        this._disposeList(this.BO);
        this._disposeList(this.postProcesses);
        this._disposeList(this.textures);
        this._disposeList(this.morphTargetManagers);
        this._sceneUbo.dispose();
        if (this._multiviewSceneUbo) {
          this._multiviewSceneUbo.dispose();
        }
        this.postProcessManager.dispose();
        this._disposeList(this._components);
        let v422 = this._engine.scenes.indexOf(this);
        if (v422 > -1) {
          this._engine.scenes.splice(v422, 1);
        }
        if (vP30015.b._LastCreatedScene === this) {
          vP30015.b._LastCreatedScene = null;
          let v423 = vP30015.b.Instances.length - 1;
          while (v423 >= 0) {
            const v424 = vP30015.b.Instances[v423];
            if (v424.scenes.length > 0) {
              vP30015.b._LastCreatedScene = v424.scenes[this._engine.scenes.length - 1];
              break;
            }
            v423--;
          }
        }
        v422 = this._engine._virtualScenes.indexOf(this);
        if (v422 > -1) {
          this._engine._virtualScenes.splice(v422, 1);
        }
        this._engine.wipeCaches(true);
        this.Cf.clear();
        this.onBeforeRenderObservable.clear();
        this.onAfterRenderObservable.clear();
        this.onBeforeRenderTargetsRenderObservable.clear();
        this.onAfterRenderTargetsRenderObservable.clear();
        this.onAfterStepObservable.clear();
        this.onBeforeStepObservable.clear();
        this.onBeforeActiveMeshesEvaluationObservable.clear();
        this.onAfterActiveMeshesEvaluationObservable.clear();
        this.onBeforeParticlesRenderingObservable.clear();
        this.onAfterParticlesRenderingObservable.clear();
        this.onBeforeDrawPhaseObservable.clear();
        this.onAfterDrawPhaseObservable.clear();
        this.onBeforeAnimationsObservable.clear();
        this.onAfterAnimationsObservable.clear();
        this.onDataLoadedObservable.clear();
        this.onBeforeRenderingGroupObservable.clear();
        this.onAfterRenderingGroupObservable.clear();
        this.onMeshImportedObservable.clear();
        this.onBeforeCameraRenderObservable.clear();
        this.onAfterCameraRenderObservable.clear();
        this.onAfterRenderCameraObservable.clear();
        this.onReadyObservable.clear();
        this.onNewCameraAddedObservable.clear();
        this.onCameraRemovedObservable.clear();
        this.onNewLightAddedObservable.clear();
        this.onLightRemovedObservable.clear();
        this.onNewGeometryAddedObservable.clear();
        this.onGeometryRemovedObservable.clear();
        this.onNewTransformNodeAddedObservable.clear();
        this.onTransformNodeRemovedObservable.clear();
        this.onNewMeshAddedObservable.clear();
        this.onMeshRemovedObservable.clear();
        this.onNewSkeletonAddedObservable.clear();
        this.onSkeletonRemovedObservable.clear();
        this.onNewMaterialAddedObservable.clear();
        this.onNewMultiMaterialAddedObservable.clear();
        this.onMaterialRemovedObservable.clear();
        this.onMultiMaterialRemovedObservable.clear();
        this.onNewTextureAddedObservable.clear();
        this.onTextureRemovedObservable.clear();
        this.onPrePointerObservable.clear();
        this.onPointerObservable.clear();
        this.onPreKeyboardObservable.clear();
        this.onKeyboardObservable.clear();
        this.onActiveCameraChanged.clear();
        this.onScenePerformancePriorityChangedObservable.clear();
        this.onClearColorChangedObservable.clear();
        this.onEnvironmentTextureChangedObservable.clear();
        this.onMeshUnderPointerUpdatedObservable.clear();
        this._isDisposed = true;
      }
      _disposeList(p717, p718) {
        const v425 = p717.slice(0);
        p718 = p718 ?? (p719 => p719.dispose());
        for (const v426 of v425) {
          p718(v426);
        }
        p717.length = 0;
      }
      get AC() {
        return this._isDisposed;
      }
      clearCachedVertexData() {
        for (let vLN090 = 0; vLN090 < this.meshes.length; vLN090++) {
          const v427 = this.meshes[vLN090].Qf;
          if (v427) {
            v427.clearCachedData();
          }
        }
      }
      cleanCachedTextureBuffer() {
        for (const v428 of this.textures) {
          v428._buffer &&= null;
        }
      }
      getWorldExtends(p720) {
        const v429 = new vP3007.bL(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
        const v430 = new vP3007.bL(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        p720 = p720 || (() => true);
        const v431 = this.meshes.filter(p720);
        for (const v432 of v431) {
          v432.hf(true);
          if (!v432.wf || v432.wf.length === 0 || v432.gS) {
            continue;
          }
          const v433 = v432.getBoundingInfo();
          const v434 = v433.boundingBox.minimumWorld;
          const v435 = v433.boundingBox.maximumWorld;
          vP3007.bL.CheckExtends(v434, v429, v430);
          vP3007.bL.CheckExtends(v435, v429, v430);
        }
        return {
          min: v429,
          max: v430
        };
      }
      createPickingRay(p721, p722, p723, p724) {
        throw (0, vP30016.c)("Ray");
      }
      createPickingRayToRef(p725, p726, p727, p728, p729) {
        throw (0, vP30016.c)("Ray");
      }
      createPickingRayInCameraSpace(p730, p731, p732) {
        throw (0, vP30016.c)("Ray");
      }
      createPickingRayInCameraSpaceToRef(p733, p734, p735, p736) {
        throw (0, vP30016.c)("Ray");
      }
      iY(p737, p738, p739, p740, p741, p742) {
        const v436 = (0, vP30016.c)("Ray", true);
        if (v436) {
          vP30028.e.Warn(v436);
        }
        return new vP30010.b();
      }
      pickWithBoundingInfo(p743, p744, p745, p746, p747) {
        const v437 = (0, vP30016.c)("Ray", true);
        if (v437) {
          vP30028.e.Warn(v437);
        }
        return new vP30010.b();
      }
      pickWithRay(p748, p749, p750, p751) {
        throw (0, vP30016.c)("Ray");
      }
      multiPick(p752, p753, p754, p755, p756) {
        throw (0, vP30016.c)("Ray");
      }
      multiPickWithRay(p757, p758, p759) {
        throw (0, vP30016.c)("Ray");
      }
      setPointerOverMesh(p760, p761, p762) {
        this._inputManager.setPointerOverMesh(p760, p761, p762);
      }
      getPointerOverMesh() {
        return this._inputManager.getPointerOverMesh();
      }
      _rebuildGeometries() {
        for (const v438 of this.geometries) {
          v438._rebuild();
        }
        for (const v439 of this.meshes) {
          v439._rebuild();
        }
        if (this.postProcessManager) {
          this.postProcessManager._rebuild();
        }
        for (const v440 of this._components) {
          v440.rebuild();
        }
        for (const v441 of this.BO) {
          v441.rebuild();
        }
        if (this.spriteManagers) {
          for (const v442 of this.spriteManagers) {
            v442.rebuild();
          }
        }
      }
      _rebuildTextures() {
        for (const v443 of this.textures) {
          v443._rebuild(true);
        }
        this.markAllMaterialsAsDirty(1);
      }
      _getByTags(p763, p764, p765) {
        if (p764 === undefined) {
          return p763;
        }
        const vA8 = [];
        for (const v444 in p763) {
          const v445 = p763[v444];
          if (vP3006.d && vP3006.d.MatchesQuery(v445, p764) && (!p765 || p765(v445))) {
            vA8.push(v445);
          }
        }
        return vA8;
      }
      getMeshesByTags(p766, p767) {
        return this._getByTags(this.meshes, p766, p767);
      }
      getCamerasByTags(p768, p769) {
        return this._getByTags(this.cameras, p768, p769);
      }
      getLightsByTags(p770, p771) {
        return this._getByTags(this.lights, p770, p771);
      }
      getMaterialByTags(p772, p773) {
        return this._getByTags(this.materials, p772, p773).concat(this._getByTags(this.multiMaterials, p772, p773));
      }
      getTransformNodesByTags(p774, p775) {
        return this._getByTags(this.transformNodes, p774, p775);
      }
      JO(p776, yC = null, IC = null, fC = null) {
        this._renderingManager.JO(p776, yC, IC, fC);
      }
      setRenderingAutoClearDepthStencil(p777, p778) {
        let v446 = !(arguments.length > 2) || arguments[2] === undefined || arguments[2];
        let v447 = !(arguments.length > 3) || arguments[3] === undefined || arguments[3];
        this._renderingManager.setRenderingAutoClearDepthStencil(p777, p778, v446, v447);
      }
      getAutoClearDepthStencilSetup(p779) {
        return this._renderingManager.getAutoClearDepthStencilSetup(p779);
      }
      _forceBlockMaterialDirtyMechanism(p780) {
        this._blockMaterialDirtyMechanism = p780;
      }
      get blockMaterialDirtyMechanism() {
        return this._blockMaterialDirtyMechanism;
      }
      set blockMaterialDirtyMechanism(p781) {
        if (this._blockMaterialDirtyMechanism !== p781) {
          this._blockMaterialDirtyMechanism = p781;
          if (!p781) {
            this.markAllMaterialsAsDirty(127);
          }
        }
      }
      markAllMaterialsAsDirty(p782, p783) {
        if (!this._blockMaterialDirtyMechanism) {
          for (const v448 of this.materials) {
            if (!p783 || !!p783(v448)) {
              v448.eG(p782);
            }
          }
        }
      }
      _loadFile(p784, p785, p786, p787, p788, p789, p790) {
        const v449 = (0, vP30025.o)(p784, p785, p786, p787 ? this.offlineProvider : undefined, p788, p789, p790);
        this._activeRequests.push(v449);
        v449.onCompleteObservable.add(p791 => {
          this._activeRequests.splice(this._activeRequests.indexOf(p791), 1);
        });
        return v449;
      }
      async _loadFileAsync(p792, p793, p794, p795, p796) {
        return await new Promise((p797, p798) => {
          this._loadFile(p792, p799 => {
            p797(p799);
          }, p793, p794, p795, (p800, p801) => {
            p798(p801);
          }, p796);
        });
      }
      _requestFile(p802, p803, p804, p805, p806, p807, p808) {
        const v450 = (0, vP30025.v)(p802, p803, p804, p805 ? this.offlineProvider : undefined, p806, p807, p808);
        this._activeRequests.push(v450);
        v450.onCompleteObservable.add(p809 => {
          this._activeRequests.splice(this._activeRequests.indexOf(p809), 1);
        });
        return v450;
      }
      async _requestFileAsync(p810, p811, p812, p813, p814) {
        return await new Promise((p815, p816) => {
          this._requestFile(p810, p817 => {
            p815(p817);
          }, p811, p812, p813, p818 => {
            p816(p818);
          }, p814);
        });
      }
      _readFile(p819, p820, p821, p822, p823) {
        const v451 = (0, vP30025.s)(p819, p820, p821, p822, p823);
        this._activeRequests.push(v451);
        v451.onCompleteObservable.add(p824 => {
          this._activeRequests.splice(this._activeRequests.indexOf(p824), 1);
        });
        return v451;
      }
      async _readFileAsync(p825, p826, p827) {
        return await new Promise((p828, p829) => {
          this._readFile(p825, p830 => {
            p828(p830);
          }, p826, p827, p831 => {
            p829(p831);
          });
        });
      }
      getPerfCollector() {
        throw (0, vP30016.c)("performanceViewerSceneExtension");
      }
      setActiveCameraByID(p832) {
        return this.setActiveCameraById(p832);
      }
      getMaterialByID(p833) {
        return this.getMaterialById(p833);
      }
      getLastMaterialByID(p834) {
        return this.getLastMaterialById(p834);
      }
      getTextureByUniqueID(p835) {
        return this.getTextureByUniqueId(p835);
      }
      getCameraByID(p836) {
        return this.getCameraById(p836);
      }
      getCameraByUniqueID(p837) {
        return this.getCameraByUniqueId(p837);
      }
      getBoneByID(p838) {
        return this.getBoneById(p838);
      }
      getLightByID(p839) {
        return this.getLightById(p839);
      }
      getLightByUniqueID(p840) {
        return this.getLightByUniqueId(p840);
      }
      getParticleSystemByID(p841) {
        return this.getParticleSystemById(p841);
      }
      getGeometryByID(p842) {
        return this.getGeometryById(p842);
      }
      getMeshByID(p843) {
        return this.getMeshById(p843);
      }
      getMeshByUniqueID(p844) {
        return this.getMeshByUniqueId(p844);
      }
      getLastMeshByID(p845) {
        return this.getLastMeshById(p845);
      }
      getMeshesByID(p846) {
        return this.getMeshesById(p846);
      }
      getTransformNodeByID(p847) {
        return this.getTransformNodeById(p847);
      }
      getTransformNodeByUniqueID(p848) {
        return this.getTransformNodeByUniqueId(p848);
      }
      getTransformNodesByID(p849) {
        return this.getTransformNodesById(p849);
      }
      getNodeByID(p850) {
        return this.getNodeById(p850);
      }
      getLastEntryByID(p851) {
        return this.getLastEntryById(p851);
      }
      getLastSkeletonByID(p852) {
        return this.getLastSkeletonById(p852);
      }
    }
    C28.FOGMODE_NONE = 0;
    C28.FOGMODE_EXP = 1;
    C28.FOGMODE_EXP2 = 2;
    C28.FOGMODE_LINEAR = 3;
    C28.MinDeltaTime = 1;
    C28.MaxDeltaTime = 1000;
    C28._OriginalDefaultMaterialFactory = C28.DefaultMaterialFactory;
    (0, vP30029.g)("BABYLON.Scene", C28);
  },
  17247: (p853, p854, p855) => {
    p855.d(p854, {
      d: () => C29,
      h: () => C30
    });
    class C29 {}
    C29.NAME_EFFECTLAYER = "EffectLayer";
    C29.NAME_LAYER = "Layer";
    C29.NAME_LENSFLARESYSTEM = "LensFlareSystem";
    C29.NAME_BOUNDINGBOXRENDERER = "BoundingBoxRenderer";
    C29.NAME_PARTICLESYSTEM = "Ug";
    C29.NAME_GAMEPAD = "Gamepad";
    C29.NAME_SIMPLIFICATIONQUEUE = "SimplificationQueue";
    C29.NAME_GEOMETRYBUFFERRENDERER = "GeometryBufferRenderer";
    C29.NAME_PREPASSRENDERER = "PrePassRenderer";
    C29.NAME_DEPTHRENDERER = "DepthRenderer";
    C29.NAME_DEPTHPEELINGRENDERER = "DepthPeelingRenderer";
    C29.NAME_POSTPROCESSRENDERPIPELINEMANAGER = "PostProcessRenderPipelineManager";
    C29.NAME_SPRITE = "Sprite";
    C29.NAME_SUBSURFACE = "SubSurface";
    C29.NAME_OUTLINERENDERER = "Outline";
    C29.NAME_PROCEDURALTEXTURE = "ProceduralTexture";
    C29.NAME_SHADOWGENERATOR = "ShadowGenerator";
    C29.NAME_OCTREE = "xg";
    C29.NAME_PHYSICSENGINE = "PhysicsEngine";
    C29.NAME_AUDIO = "Audio";
    C29.NAME_FLUIDRENDERER = "FluidRenderer";
    C29.NAME_IBLCDFGENERATOR = "iblCDFGenerator";
    C29.STEP_ISREADYFORMESH_EFFECTLAYER = 0;
    C29.STEP_BEFOREEVALUATEACTIVEMESH_BOUNDINGBOXRENDERER = 0;
    C29.STEP_EVALUATESUBMESH_BOUNDINGBOXRENDERER = 0;
    C29.STEP_PREACTIVEMESH_BOUNDINGBOXRENDERER = 0;
    C29.STEP_CAMERADRAWRENDERTARGET_EFFECTLAYER = 1;
    C29.STEP_BEFORECAMERADRAW_PREPASS = 0;
    C29.STEP_BEFORECAMERADRAW_EFFECTLAYER = 1;
    C29.STEP_BEFORECAMERADRAW_LAYER = 2;
    C29.STEP_BEFORERENDERTARGETDRAW_PREPASS = 0;
    C29.STEP_BEFORERENDERTARGETDRAW_LAYER = 1;
    C29.STEP_BEFORERENDERINGMESH_PREPASS = 0;
    C29.STEP_BEFORERENDERINGMESH_OUTLINE = 1;
    C29.STEP_AFTERRENDERINGMESH_PREPASS = 0;
    C29.STEP_AFTERRENDERINGMESH_OUTLINE = 1;
    C29.STEP_AFTERRENDERINGGROUPDRAW_EFFECTLAYER_DRAW = 0;
    C29.STEP_AFTERRENDERINGGROUPDRAW_BOUNDINGBOXRENDERER = 1;
    C29.STEP_BEFORECAMERAUPDATE_SIMPLIFICATIONQUEUE = 0;
    C29.STEP_BEFORECLEAR_PROCEDURALTEXTURE = 0;
    C29.STEP_BEFORECLEAR_PREPASS = 1;
    C29.STEP_BEFORERENDERTARGETCLEAR_PREPASS = 0;
    C29.STEP_AFTERRENDERTARGETDRAW_PREPASS = 0;
    C29.STEP_AFTERRENDERTARGETDRAW_LAYER = 1;
    C29.STEP_AFTERCAMERADRAW_PREPASS = 0;
    C29.STEP_AFTERCAMERADRAW_EFFECTLAYER = 1;
    C29.STEP_AFTERCAMERADRAW_LENSFLARESYSTEM = 2;
    C29.STEP_AFTERCAMERADRAW_EFFECTLAYER_DRAW = 3;
    C29.STEP_AFTERCAMERADRAW_LAYER = 4;
    C29.STEP_AFTERCAMERADRAW_FLUIDRENDERER = 5;
    C29.STEP_AFTERCAMERAPOSTPROCESS_LAYER = 0;
    C29.STEP_AFTERRENDERTARGETPOSTPROCESS_LAYER = 0;
    C29.STEP_AFTERRENDER_AUDIO = 0;
    C29.STEP_GATHERRENDERTARGETS_DEPTHRENDERER = 0;
    C29.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER = 1;
    C29.STEP_GATHERRENDERTARGETS_SHADOWGENERATOR = 2;
    C29.STEP_GATHERRENDERTARGETS_POSTPROCESSRENDERPIPELINEMANAGER = 3;
    C29.STEP_GATHERACTIVECAMERARENDERTARGETS_DEPTHRENDERER = 0;
    C29.STEP_GATHERACTIVECAMERARENDERTARGETS_FLUIDRENDERER = 1;
    C29.STEP_POINTERMOVE_SPRITE = 0;
    C29.STEP_POINTERDOWN_SPRITE = 0;
    C29.STEP_POINTERUP_SPRITE = 0;
    class C30 extends Array {
      constructor(p856) {
        super(...p856);
      }
      static Create() {
        return Object.create(C30.prototype);
      }
      registerStep(p857, p858, p859) {
        let vLN091 = 0;
        let v452 = Number.MAX_VALUE;
        for (; vLN091 < this.length; vLN091++) {
          v452 = this[vLN091].index;
          if (p857 < v452) {
            break;
          }
        }
        this.splice(vLN091, 0, {
          index: p857,
          component: p858,
          action: p859.bind(p858)
        });
      }
      clear() {
        this.length = 0;
      }
    }
  }
};
//# sourceMappingURL=pz8l4l.23.0a35927e.chunk.js.map
//# debugId=3ad32573-48c6-5e99-97f7-cb857888aa1f