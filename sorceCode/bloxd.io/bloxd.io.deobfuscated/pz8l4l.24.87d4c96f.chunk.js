(function () {
  try {
    var v = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : {};
    var v2 = new v.Error().stack;
    if (v2) {
      v._sentryDebugIds = v._sentryDebugIds || {};
      v._sentryDebugIds[v2] = "5b5076f6-49c5-5cf0-8d21-fbfae0cc85c1";
    }
  } catch (e2) {}
})();
export const id = 24;
export const ids = [24];
export const modules = {
  17304: (p, p2, p3) => {
    p3.d(p2, {
      c: () => C
    });
    class C {
      constructor(p4, p5, p6) {
        this.bu = p4;
        this.bv = p5;
        this.distance = p6;
        this.faceId = 0;
        this.subMeshId = 0;
      }
    }
  },
  17313: (p7, p8, p9) => {
    p9.d(p8, {
      e: () => C2
    });
    var vP9 = p9(16986);
    var vP92 = p9(16973);
    var vP93 = p9(16977);
    class C2 {
      constructor(p10, p11, p12) {
        this.vectors = (0, vP9.d)(8, vP92.bL.Zero);
        this.center = vP92.bL.Zero();
        this.centerWorld = vP92.bL.Zero();
        this.extendSize = vP92.bL.Zero();
        this.extendSizeWorld = vP92.bL.Zero();
        this.directions = (0, vP9.d)(3, vP92.bL.Zero);
        this.vectorsWorld = (0, vP9.d)(8, vP92.bL.Zero);
        this.minimumWorld = vP92.bL.Zero();
        this.maximumWorld = vP92.bL.Zero();
        this.minimum = vP92.bL.Zero();
        this.maximum = vP92.bL.Zero();
        this._drawWrapperFront = null;
        this._drawWrapperBack = null;
        this.reConstruct(p10, p11, p12);
      }
      reConstruct(p13, p14, p15) {
        const v3 = p13.x;
        const v4 = p13.y;
        const v5 = p13.z;
        const v6 = p14.x;
        const v7 = p14.y;
        const v8 = p14.z;
        const v9 = this.vectors;
        this.minimum.jg(v3, v4, v5);
        this.maximum.jg(v6, v7, v8);
        v9[0].jg(v3, v4, v5);
        v9[1].jg(v6, v7, v8);
        v9[2].jg(v6, v4, v5);
        v9[3].jg(v3, v7, v5);
        v9[4].jg(v3, v4, v8);
        v9[5].jg(v6, v7, v5);
        v9[6].jg(v3, v7, v8);
        v9[7].jg(v6, v4, v8);
        p14.addToRef(p13, this.center).scaleInPlace(0.5);
        p14.subtractToRef(p13, this.extendSize).scaleInPlace(0.5);
        this._worldMatrix = p15 || vP92.Matrix.IdentityReadOnly;
        this._update(this._worldMatrix);
      }
      scale(p16) {
        const v10 = C2._TmpVector3;
        const v11 = this.maximum.subtractToRef(this.minimum, v10[0]);
        const v12 = v11.length();
        v11.normalizeFromLength(v12);
        const v13 = v12 * p16;
        const v14 = v11.scaleInPlace(v13 * 0.5);
        const v15 = this.center.subtractToRef(v14, v10[1]);
        const v16 = this.center.addToRef(v14, v10[2]);
        this.reConstruct(v15, v16, this._worldMatrix);
        return this;
      }
      getWorldMatrix() {
        return this._worldMatrix;
      }
      _update(p17) {
        const v17 = this.minimumWorld;
        const v18 = this.maximumWorld;
        const v19 = this.directions;
        const v20 = this.vectorsWorld;
        const v21 = this.vectors;
        if (p17.isIdentity()) {
          v17.fC(this.minimum);
          v18.fC(this.maximum);
          for (let vLN0 = 0; vLN0 < 8; ++vLN0) {
            v20[vLN0].fC(v21[vLN0]);
          }
          this.extendSizeWorld.fC(this.extendSize);
          this.centerWorld.fC(this.center);
        } else {
          v17.gg(Number.MAX_VALUE);
          v18.gg(-Number.MAX_VALUE);
          for (let vLN02 = 0; vLN02 < 8; ++vLN02) {
            const v22 = v20[vLN02];
            vP92.bL.TransformCoordinatesToRef(v21[vLN02], p17, v22);
            v17.minimizeInPlace(v22);
            v18.maximizeInPlace(v22);
          }
          v18.subtractToRef(v17, this.extendSizeWorld).scaleInPlace(0.5);
          v18.addToRef(v17, this.centerWorld).scaleInPlace(0.5);
        }
        vP92.bL.FromArrayToRef(p17.m, 0, v19[0]);
        vP92.bL.FromArrayToRef(p17.m, 4, v19[1]);
        vP92.bL.FromArrayToRef(p17.m, 8, v19[2]);
        this._worldMatrix = p17;
      }
      isInFrustum(p18) {
        return C2.IsInFrustum(this.vectorsWorld, p18);
      }
      isCompletelyInFrustum(p19) {
        return C2.IsCompletelyInFrustum(this.vectorsWorld, p19);
      }
      intersectsPoint(p20) {
        const v23 = this.minimumWorld;
        const v24 = this.maximumWorld;
        const v25 = v23.x;
        const v26 = v23.y;
        const v27 = v23.z;
        const v28 = v24.x;
        const v29 = v24.y;
        const v30 = v24.z;
        const v31 = p20.x;
        const v32 = p20.y;
        const v33 = p20.z;
        const v34 = -vP93.b;
        return !(v28 - v31 < v34) && !(v34 > v31 - v25) && !(v29 - v32 < v34) && !(v34 > v32 - v26) && !(v30 - v33 < v34) && !(v34 > v33 - v27);
      }
      intersectsSphere(p21) {
        return C2.IntersectsSphere(this.minimumWorld, this.maximumWorld, p21.centerWorld, p21.radiusWorld);
      }
      intersectsMinMax(p22, p23) {
        const v35 = this.minimumWorld;
        const v36 = this.maximumWorld;
        const v37 = v35.x;
        const v38 = v35.y;
        const v39 = v35.z;
        const v40 = v36.x;
        const v41 = v36.y;
        const v42 = v36.z;
        const v43 = p22.x;
        const v44 = p22.y;
        const v45 = p22.z;
        const v46 = p23.x;
        const v47 = p23.y;
        const v48 = p23.z;
        return !(v40 < v43) && !(v37 > v46) && !(v41 < v44) && !(v38 > v47) && !(v42 < v45) && !(v39 > v48);
      }
      dispose() {
        var v49;
        var v50;
        if ((v49 = this._drawWrapperFront) !== null && v49 !== undefined) {
          v49.dispose();
        }
        if ((v50 = this._drawWrapperBack) !== null && v50 !== undefined) {
          v50.dispose();
        }
      }
      static Intersects(p24, p25) {
        return p24.intersectsMinMax(p25.minimumWorld, p25.maximumWorld);
      }
      static IntersectsSphere(p26, p27, p28, p29) {
        const v51 = C2._TmpVector3[0];
        vP92.bL.ClampToRef(p28, p26, p27, v51);
        return vP92.bL.DistanceSquared(p28, v51) <= p29 * p29;
      }
      static IsCompletelyInFrustum(p30, p31) {
        for (let vLN03 = 0; vLN03 < 6; ++vLN03) {
          const v52 = p31[vLN03];
          for (let vLN04 = 0; vLN04 < 8; ++vLN04) {
            if (v52.dotCoordinate(p30[vLN04]) < 0) {
              return false;
            }
          }
        }
        return true;
      }
      static IsInFrustum(p32, p33) {
        for (let vLN05 = 0; vLN05 < 6; ++vLN05) {
          let v53 = true;
          const v54 = p33[vLN05];
          for (let vLN06 = 0; vLN06 < 8; ++vLN06) {
            if (v54.dotCoordinate(p32[vLN06]) >= 0) {
              v53 = false;
              break;
            }
          }
          if (v53) {
            return false;
          }
        }
        return true;
      }
    }
    C2._TmpVector3 = (0, vP9.d)(3, vP92.bL.Zero);
  },
  17308: (p34, p35, p36) => {
    p36.d(p35, {
      e: () => C3
    });
    var vP36 = p36(16986);
    var vP362 = p36(16973);
    var vP363 = p36(17313);
    var vP364 = p36(17315);
    const vO = {
      min: 0,
      max: 0
    };
    const vO2 = {
      min: 0,
      max: 0
    };
    const vF = (p37, p38, p39) => {
      const v55 = vP362.bL.Dot(p38.centerWorld, p37);
      const v56 = Math.abs(vP362.bL.Dot(p38.directions[0], p37)) * p38.extendSize.x + Math.abs(vP362.bL.Dot(p38.directions[1], p37)) * p38.extendSize.y + Math.abs(vP362.bL.Dot(p38.directions[2], p37)) * p38.extendSize.z;
      p39.min = v55 - v56;
      p39.max = v55 + v56;
    };
    const vF2 = (p40, p41, p42) => {
      vF(p40, p41, vO);
      vF(p40, p42, vO2);
      return !(vO.min > vO2.max) && !(vO2.min > vO.max);
    };
    class C3 {
      constructor(p43, p44, p45) {
        this._isLocked = false;
        this.boundingBox = new vP363.e(p43, p44, p45);
        this.boundingSphere = new vP364.e(p43, p44, p45);
      }
      reConstruct(p46, p47, p48) {
        this.boundingBox.reConstruct(p46, p47, p48);
        this.boundingSphere.reConstruct(p46, p47, p48);
      }
      get minimum() {
        return this.boundingBox.minimum;
      }
      get maximum() {
        return this.boundingBox.maximum;
      }
      get isLocked() {
        return this._isLocked;
      }
      set isLocked(p49) {
        this._isLocked = p49;
      }
      update(p50) {
        if (!this._isLocked) {
          this.boundingBox._update(p50);
          this.boundingSphere._update(p50);
        }
      }
      centerOn(p51, p52) {
        const v57 = C3._TmpVector3[0].fC(p51).Ze(p52);
        const v58 = C3._TmpVector3[1].fC(p51).addInPlace(p52);
        this.boundingBox.reConstruct(v57, v58, this.boundingBox.getWorldMatrix());
        this.boundingSphere.reConstruct(v57, v58, this.boundingBox.getWorldMatrix());
        return this;
      }
      encapsulate(p53) {
        const v59 = vP362.bL.Minimize(this.minimum, p53);
        const v60 = vP362.bL.Maximize(this.maximum, p53);
        this.reConstruct(v59, v60, this.boundingBox.getWorldMatrix());
        return this;
      }
      encapsulateBoundingInfo(p54) {
        const v61 = vP362.TmpVectors.Matrix[0];
        this.boundingBox.getWorldMatrix().invertToRef(v61);
        const v62 = vP362.TmpVectors.bL[0];
        vP362.bL.TransformCoordinatesToRef(p54.boundingBox.minimumWorld, v61, v62);
        this.encapsulate(v62);
        vP362.bL.TransformCoordinatesToRef(p54.boundingBox.maximumWorld, v61, v62);
        this.encapsulate(v62);
        return this;
      }
      scale(p55) {
        this.boundingBox.scale(p55);
        this.boundingSphere.scale(p55);
        return this;
      }
      isInFrustum(p56, yC = 0) {
        if ((yC === 2 || yC === 3) && this.boundingSphere.isCenterInFrustum(p56)) {
          return true;
        }
        if (!this.boundingSphere.isInFrustum(p56)) {
          return false;
        }
        return yC === 1 || yC === 3 || this.boundingBox.isInFrustum(p56);
      }
      get diagonalLength() {
        const v63 = this.boundingBox;
        return v63.maximumWorld.subtractToRef(v63.minimumWorld, C3._TmpVector3[0]).length();
      }
      isCompletelyInFrustum(p57) {
        return this.boundingBox.isCompletelyInFrustum(p57);
      }
      _checkCollision(p58) {
        return p58._canDoCollision(this.boundingSphere.centerWorld, this.boundingSphere.radiusWorld, this.boundingBox.minimumWorld, this.boundingBox.maximumWorld);
      }
      intersectsPoint(p59) {
        return !!this.boundingSphere.centerWorld && !!this.boundingSphere.intersectsPoint(p59) && !!this.boundingBox.intersectsPoint(p59);
      }
      intersects(p60, p61) {
        if (!vP364.e.Intersects(this.boundingSphere, p60.boundingSphere)) {
          return false;
        }
        if (!vP363.e.Intersects(this.boundingBox, p60.boundingBox)) {
          return false;
        }
        if (!p61) {
          return true;
        }
        const v64 = this.boundingBox;
        const v65 = p60.boundingBox;
        return !!vF2(v64.directions[0], v64, v65) && !!vF2(v64.directions[1], v64, v65) && !!vF2(v64.directions[2], v64, v65) && !!vF2(v65.directions[0], v64, v65) && !!vF2(v65.directions[1], v64, v65) && !!vF2(v65.directions[2], v64, v65) && !!vF2(vP362.bL.Cross(v64.directions[0], v65.directions[0]), v64, v65) && !!vF2(vP362.bL.Cross(v64.directions[0], v65.directions[1]), v64, v65) && !!vF2(vP362.bL.Cross(v64.directions[0], v65.directions[2]), v64, v65) && !!vF2(vP362.bL.Cross(v64.directions[1], v65.directions[0]), v64, v65) && !!vF2(vP362.bL.Cross(v64.directions[1], v65.directions[1]), v64, v65) && !!vF2(vP362.bL.Cross(v64.directions[1], v65.directions[2]), v64, v65) && !!vF2(vP362.bL.Cross(v64.directions[2], v65.directions[0]), v64, v65) && !!vF2(vP362.bL.Cross(v64.directions[2], v65.directions[1]), v64, v65) && !!vF2(vP362.bL.Cross(v64.directions[2], v65.directions[2]), v64, v65);
      }
    }
    C3._TmpVector3 = (0, vP36.d)(2, vP362.bL.Zero);
  },
  17315: (p62, p63, p64) => {
    p64.d(p63, {
      e: () => C4
    });
    var vP64 = p64(16986);
    var vP642 = p64(16973);
    class C4 {
      constructor(p65, p66, p67) {
        this.center = vP642.bL.Zero();
        this.centerWorld = vP642.bL.Zero();
        this.minimum = vP642.bL.Zero();
        this.maximum = vP642.bL.Zero();
        this.reConstruct(p65, p66, p67);
      }
      reConstruct(p68, p69, p70) {
        this.minimum.fC(p68);
        this.maximum.fC(p69);
        const v66 = vP642.bL.Distance(p68, p69);
        p69.addToRef(p68, this.center).scaleInPlace(0.5);
        this.radius = v66 * 0.5;
        this._update(p70 || vP642.Matrix.IdentityReadOnly);
      }
      scale(p71) {
        const v67 = this.radius * p71;
        const v68 = C4._TmpVector3;
        const v69 = v68[0].gg(v67);
        const v70 = this.center.subtractToRef(v69, v68[1]);
        const v71 = this.center.addToRef(v69, v68[2]);
        this.reConstruct(v70, v71, this._worldMatrix);
        return this;
      }
      getWorldMatrix() {
        return this._worldMatrix;
      }
      _update(p72) {
        if (p72.isIdentity()) {
          this.centerWorld.fC(this.center);
          this.radiusWorld = this.radius;
        } else {
          vP642.bL.TransformCoordinatesToRef(this.center, p72, this.centerWorld);
          const v72 = C4._TmpVector3[0];
          vP642.bL.TransformNormalFromFloatsToRef(1, 1, 1, p72, v72);
          this.radiusWorld = Math.max(Math.abs(v72.x), Math.abs(v72.y), Math.abs(v72.z)) * this.radius;
        }
      }
      isInFrustum(p73) {
        const v73 = this.centerWorld;
        const v74 = this.radiusWorld;
        for (let vLN07 = 0; vLN07 < 6; vLN07++) {
          if (p73[vLN07].dotCoordinate(v73) <= -v74) {
            return false;
          }
        }
        return true;
      }
      isCenterInFrustum(p74) {
        const v75 = this.centerWorld;
        for (let vLN08 = 0; vLN08 < 6; vLN08++) {
          if (p74[vLN08].dotCoordinate(v75) < 0) {
            return false;
          }
        }
        return true;
      }
      intersectsPoint(p75) {
        const v76 = vP642.bL.DistanceSquared(this.centerWorld, p75);
        return !(this.radiusWorld * this.radiusWorld < v76);
      }
      static Intersects(p76, p77) {
        const v77 = vP642.bL.DistanceSquared(p76.centerWorld, p77.centerWorld);
        const v78 = p76.radiusWorld + p77.radiusWorld;
        return !(v78 * v78 < v77);
      }
      static CreateFromCenterAndRadius(p78, p79, p80) {
        this._TmpVector3[0].fC(p78);
        this._TmpVector3[1].jg(0, 0, p79);
        this._TmpVector3[2].fC(p78);
        this._TmpVector3[0].addInPlace(this._TmpVector3[1]);
        this._TmpVector3[2].Ze(this._TmpVector3[1]);
        const v79 = new C4(this._TmpVector3[0], this._TmpVector3[2]);
        v79._worldMatrix = p80 || vP642.Matrix.Identity();
        return v79;
      }
    }
    C4._TmpVector3 = (0, vP64.d)(3, vP642.bL.Zero);
  },
  17333: (p81, p82, p83) => {
    function f(p84) {
      if (p84.indexOf("vClipPlane") === -1) {
        p84.push("vClipPlane");
      }
      if (p84.indexOf("vClipPlane2") === -1) {
        p84.push("vClipPlane2");
      }
      if (p84.indexOf("vClipPlane3") === -1) {
        p84.push("vClipPlane3");
      }
      if (p84.indexOf("vClipPlane4") === -1) {
        p84.push("vClipPlane4");
      }
      if (p84.indexOf("vClipPlane5") === -1) {
        p84.push("vClipPlane5");
      }
      if (p84.indexOf("vClipPlane6") === -1) {
        p84.push("vClipPlane6");
      }
    }
    function f2(p85, p86, p87) {
      const v80 = !!(p85.clipPlane ?? p86.clipPlane);
      const v81 = !!(p85.clipPlane2 ?? p86.clipPlane2);
      const v82 = !!(p85.clipPlane3 ?? p86.clipPlane3);
      const v83 = !!(p85.clipPlane4 ?? p86.clipPlane4);
      const v84 = !!(p85.clipPlane5 ?? p86.clipPlane5);
      const v85 = !!(p85.clipPlane6 ?? p86.clipPlane6);
      if (v80) {
        p87.push("#define CLIPPLANE");
      }
      if (v81) {
        p87.push("#define CLIPPLANE2");
      }
      if (v82) {
        p87.push("#define CLIPPLANE3");
      }
      if (v83) {
        p87.push("#define CLIPPLANE4");
      }
      if (v84) {
        p87.push("#define CLIPPLANE5");
      }
      if (v85) {
        p87.push("#define CLIPPLANE6");
      }
    }
    function f3(p88, p89, p90) {
      let v86 = false;
      const v87 = !!(p88.clipPlane ?? p89.clipPlane);
      const v88 = !!(p88.clipPlane2 ?? p89.clipPlane2);
      const v89 = !!(p88.clipPlane3 ?? p89.clipPlane3);
      const v90 = !!(p88.clipPlane4 ?? p89.clipPlane4);
      const v91 = !!(p88.clipPlane5 ?? p89.clipPlane5);
      const v92 = !!(p88.clipPlane6 ?? p89.clipPlane6);
      if (p90.CLIPPLANE !== v87) {
        p90.CLIPPLANE = v87;
        v86 = true;
      }
      if (p90.CLIPPLANE2 !== v88) {
        p90.CLIPPLANE2 = v88;
        v86 = true;
      }
      if (p90.CLIPPLANE3 !== v89) {
        p90.CLIPPLANE3 = v89;
        v86 = true;
      }
      if (p90.CLIPPLANE4 !== v90) {
        p90.CLIPPLANE4 = v90;
        v86 = true;
      }
      if (p90.CLIPPLANE5 !== v91) {
        p90.CLIPPLANE5 = v91;
        v86 = true;
      }
      if (p90.CLIPPLANE6 !== v92) {
        p90.CLIPPLANE6 = v92;
        v86 = true;
      }
      return v86;
    }
    function f4(p91, p92, p93) {
      let v93 = p92.clipPlane ?? p93.clipPlane;
      f5(p91, "vClipPlane", v93);
      v93 = p92.clipPlane2 ?? p93.clipPlane2;
      f5(p91, "vClipPlane2", v93);
      v93 = p92.clipPlane3 ?? p93.clipPlane3;
      f5(p91, "vClipPlane3", v93);
      v93 = p92.clipPlane4 ?? p93.clipPlane4;
      f5(p91, "vClipPlane4", v93);
      v93 = p92.clipPlane5 ?? p93.clipPlane5;
      f5(p91, "vClipPlane5", v93);
      v93 = p92.clipPlane6 ?? p93.clipPlane6;
      f5(p91, "vClipPlane6", v93);
    }
    function f5(p94, p95, p96) {
      if (p96) {
        p94.setFloat4(p95, p96.normal.x, p96.normal.y, p96.normal.z, p96.d);
      }
    }
    p83.d(p82, {
      e: () => f,
      g: () => f4,
      i: () => f3,
      j: () => f2
    });
  },
  17287: (p97, p98, p99) => {
    p99.d(p98, {
      c: () => C5
    });
    class C5 {
      constructor() {
        this._defines = {};
        this._currentRank = 32;
        this._maxRank = -1;
        this._mesh = null;
      }
      unBindMesh() {
        this._mesh = null;
      }
      addFallback(p100, p101) {
        if (!this._defines[p100]) {
          if (p100 < this._currentRank) {
            this._currentRank = p100;
          }
          if (p100 > this._maxRank) {
            this._maxRank = p100;
          }
          this._defines[p100] = new Array();
        }
        this._defines[p100].push(p101);
      }
      addCPUSkinningFallback(p102, p103) {
        this._mesh = p103;
        if (p102 < this._currentRank) {
          this._currentRank = p102;
        }
        if (p102 > this._maxRank) {
          this._maxRank = p102;
        }
      }
      get hasMoreFallbacks() {
        return this._currentRank <= this._maxRank;
      }
      reduce(p104, p105) {
        if (this._mesh && this._mesh.computeBonesUsingShaders && this._mesh.numBoneInfluencers > 0) {
          this._mesh.computeBonesUsingShaders = false;
          p104 = p104.replace("#define NUM_BONE_INFLUENCERS " + this._mesh.numBoneInfluencers, "#define NUM_BONE_INFLUENCERS 0");
          p105._bonesComputationForcedToCPU = true;
          const v94 = this._mesh.YL();
          for (let vLN09 = 0; vLN09 < v94.meshes.length; vLN09++) {
            const v95 = v94.meshes[vLN09];
            if (v95.material) {
              if (v95.computeBonesUsingShaders && v95.numBoneInfluencers !== 0) {
                if (v95.material.getEffect() === p105) {
                  v95.computeBonesUsingShaders = false;
                } else if (v95.wf) {
                  for (const v96 of v95.wf) {
                    if (v96.effect === p105) {
                      v95.computeBonesUsingShaders = false;
                      break;
                    }
                  }
                }
              }
            } else if (!this._mesh.material && v95.computeBonesUsingShaders && v95.numBoneInfluencers > 0) {
              v95.computeBonesUsingShaders = false;
            }
          }
        } else {
          const v97 = this._defines[this._currentRank];
          if (v97) {
            for (let vLN010 = 0; vLN010 < v97.length; vLN010++) {
              p104 = p104.replace("#define " + v97[vLN010], "");
            }
          }
          this._currentRank++;
        }
        return p104;
      }
    }
  },
  17293: (p106, p107, p108) => {
    p108.d(p107, {
      e: () => C7
    });
    var vP108 = p108(18);
    var vP1082 = p108(16960);
    var vP1083 = p108(16965);
    var vP1084 = p108(16787);
    var vP1085 = p108(16796);
    var vP1086 = p108(16837);
    var vP1087 = p108(17298);
    var vP1088 = p108(17239);
    var vP1089 = p108(16811);
    var vP10810 = p108(17013);
    var vP10811 = p108(17085);
    var vP10812 = p108(17000);
    class C6 {
      constructor() {
        this.reset();
      }
      reset() {
        this.enabled = false;
        this.mask = 255;
        this.func = 519;
        this.funcRef = 1;
        this.funcMask = 255;
        this.opStencilFail = 7680;
        this.opDepthFail = 7680;
        this.opStencilDepthPass = 7681;
      }
      get func() {
        return this._func;
      }
      set func(p109) {
        this._func = p109;
      }
      get funcRef() {
        return this._funcRef;
      }
      set funcRef(p110) {
        this._funcRef = p110;
      }
      get funcMask() {
        return this._funcMask;
      }
      set funcMask(p111) {
        this._funcMask = p111;
      }
      get opStencilFail() {
        return this._opStencilFail;
      }
      set opStencilFail(p112) {
        this._opStencilFail = p112;
      }
      get opDepthFail() {
        return this._opDepthFail;
      }
      set opDepthFail(p113) {
        this._opDepthFail = p113;
      }
      get opStencilDepthPass() {
        return this._opStencilDepthPass;
      }
      set opStencilDepthPass(p114) {
        this._opStencilDepthPass = p114;
      }
      get mask() {
        return this._mask;
      }
      set mask(p115) {
        this._mask = p115;
      }
      get enabled() {
        return this._enabled;
      }
      set enabled(p116) {
        this._enabled = p116;
      }
      getClassName() {
        return "MaterialStencilState";
      }
      copyTo(p117) {
        vP10812.b.Clone(() => p117, this);
      }
      serialize() {
        return vP10812.b.Serialize(this);
      }
      parse(p118, p119, p120) {
        vP10812.b.Parse(() => this, p118, p119, p120);
      }
    }
    (0, vP1082.d)([(0, vP1083.F)()], C6.prototype, "func", null);
    (0, vP1082.d)([(0, vP1083.F)()], C6.prototype, "funcRef", null);
    (0, vP1082.d)([(0, vP1083.F)()], C6.prototype, "funcMask", null);
    (0, vP1082.d)([(0, vP1083.F)()], C6.prototype, "opStencilFail", null);
    (0, vP1082.d)([(0, vP1083.F)()], C6.prototype, "opDepthFail", null);
    (0, vP1082.d)([(0, vP1083.F)()], C6.prototype, "opStencilDepthPass", null);
    (0, vP1082.d)([(0, vP1083.F)()], C6.prototype, "mask", null);
    (0, vP1082.d)([(0, vP1083.F)()], C6.prototype, "enabled", null);
    var vP10813 = p108(17327);
    class C7 {
      get _supportGlowLayer() {
        return false;
      }
      set _glowModeEnabled(p121) {}
      get shaderLanguage() {
        return this._shaderLanguage;
      }
      get canRenderToMRT() {
        return false;
      }
      set alpha(p122) {
        if (this._alpha === p122) {
          return;
        }
        const v98 = this._alpha;
        this._alpha = p122;
        if (v98 === 1 || p122 === 1) {
          this.eG(C7.MiscDirtyFlag + C7.PrePassDirtyFlag);
        }
      }
      get alpha() {
        return this._alpha;
      }
      set backFaceCulling(p123) {
        if (this._backFaceCulling !== p123) {
          this._backFaceCulling = p123;
          this.eG(C7.TextureDirtyFlag);
        }
      }
      get backFaceCulling() {
        return this._backFaceCulling;
      }
      set cullBackFaces(p124) {
        if (this._cullBackFaces !== p124) {
          this._cullBackFaces = p124;
          this.eG(C7.TextureDirtyFlag);
        }
      }
      get cullBackFaces() {
        return this._cullBackFaces;
      }
      get blockDirtyMechanism() {
        return this._blockDirtyMechanism;
      }
      set blockDirtyMechanism(p125) {
        if (this._blockDirtyMechanism !== p125) {
          this._blockDirtyMechanism = p125;
          if (!p125) {
            this.CY();
          }
        }
      }
      atomicMaterialsUpdate(p126) {
        this.blockDirtyMechanism = true;
        try {
          p126(this);
        } finally {
          this.blockDirtyMechanism = false;
        }
      }
      get hasRenderTargetTextures() {
        this._eventInfo.hasRenderTargetTextures = false;
        this._callbackPluginEventHasRenderTargetTextures(this._eventInfo);
        return this._eventInfo.hasRenderTargetTextures;
      }
      set onDispose(p127) {
        if (this._onDisposeObserver) {
          this.Cf.remove(this._onDisposeObserver);
        }
        this._onDisposeObserver = this.Cf.add(p127);
      }
      get onBindObservable() {
        this._onBindObservable ||= new vP1085.e();
        return this._onBindObservable;
      }
      set onBind(p128) {
        if (this._onBindObserver) {
          this.onBindObservable.remove(this._onBindObserver);
        }
        this._onBindObserver = this.onBindObservable.add(p128);
      }
      get onUnBindObservable() {
        this._onUnBindObservable ||= new vP1085.e();
        return this._onUnBindObservable;
      }
      get onEffectCreatedObservable() {
        this._onEffectCreatedObservable ||= new vP1085.e();
        return this._onEffectCreatedObservable;
      }
      set alphaMode(p129) {
        this._alphaMode = p129;
      }
      get alphaMode() {
        return this._alphaMode;
      }
      set needDepthPrePass(p130) {
        if (this._needDepthPrePass !== p130) {
          this._needDepthPrePass = p130;
          if (this._needDepthPrePass) {
            this.checkReadyOnEveryCall = true;
          }
        }
      }
      get needDepthPrePass() {
        return this._needDepthPrePass;
      }
      get isPrePassCapable() {
        return false;
      }
      set fogEnabled(p131) {
        if (this._fogEnabled !== p131) {
          this._fogEnabled = p131;
          this.eG(C7.MiscDirtyFlag);
        }
      }
      get fogEnabled() {
        return this._fogEnabled;
      }
      get wireframe() {
        switch (this._fillMode) {
          case C7.WireFrameFillMode:
          case C7.LineListDrawMode:
          case C7.LineLoopDrawMode:
          case C7.LineStripDrawMode:
            return true;
        }
        return this._scene.forceWireframe;
      }
      set wireframe(p132) {
        this.fillMode = p132 ? C7.WireFrameFillMode : C7.TriangleFillMode;
      }
      get pointsCloud() {
        switch (this._fillMode) {
          case C7.PointFillMode:
          case C7.PointListDrawMode:
            return true;
        }
        return this._scene.forcePointsCloud;
      }
      set pointsCloud(p133) {
        this.fillMode = p133 ? C7.PointFillMode : C7.TriangleFillMode;
      }
      get fillMode() {
        return this._fillMode;
      }
      set fillMode(p134) {
        if (this._fillMode !== p134) {
          this._fillMode = p134;
          this.eG(C7.MiscDirtyFlag);
        }
      }
      get useLogarithmicDepth() {
        return this._useLogarithmicDepth;
      }
      set useLogarithmicDepth(p135) {
        const v99 = this.YL().getEngine().getCaps().fragmentDepthSupported;
        if (p135 && !v99) {
          vP1089.e.Warn("Logarithmic depth has been requested for a material on a device that doesn't support it.");
        }
        this._useLogarithmicDepth = p135 && v99;
        this._markAllSubMeshesAsMiscDirty();
      }
      _getDrawWrapper() {
        return this._drawWrapper;
      }
      _setDrawWrapper(p136) {
        this._drawWrapper = p136;
      }
      constructor(p137, p138, p139, fC = false) {
        this.shadowDepthWrapper = null;
        this.allowShaderHotSwapping = true;
        this._shaderLanguage = 0;
        this._forceGLSL = false;
        this.metadata = null;
        this.reservedDataStore = null;
        this.checkReadyOnEveryCall = false;
        this.checkReadyOnlyOnce = false;
        this.state = "";
        this._alpha = 1;
        this._backFaceCulling = true;
        this._cullBackFaces = true;
        this._blockDirtyMechanism = false;
        this.sideOrientation = null;
        this.onCompiled = null;
        this.onError = null;
        this.getRenderTargetTextures = null;
        this.doNotSerialize = false;
        this._storeEffectOnSubMeshes = false;
        this.animations = null;
        this.Cf = new vP1085.e();
        this._onDisposeObserver = null;
        this._onUnBindObservable = null;
        this._onBindObserver = null;
        this._alphaMode = 2;
        this._needDepthPrePass = false;
        this.disableDepthWrite = false;
        this.disableColorWrite = false;
        this.forceDepthWrite = false;
        this.depthFunction = 0;
        this.separateCullingPass = false;
        this._fogEnabled = true;
        this.pointSize = 1;
        this.zOffset = 0;
        this.zOffsetUnits = 0;
        this.Lf = new C6();
        this._useUBO = false;
        this._fillMode = C7.TriangleFillMode;
        this._cachedDepthWriteState = false;
        this._cachedColorWriteState = false;
        this._cachedDepthFunctionState = 0;
        this._indexInSceneMaterialArray = -1;
        this.meshMap = null;
        this._parentContainer = null;
        this._uniformBufferLayoutBuilt = false;
        this._eventInfo = {};
        this._callbackPluginEventGeneric = () => {};
        this._callbackPluginEventIsReadyForSubMesh = () => {};
        this._callbackPluginEventPrepareDefines = () => {};
        this._callbackPluginEventPrepareDefinesBeforeAttributes = () => {};
        this._callbackPluginEventHardBindForSubMesh = () => {};
        this._callbackPluginEventBindForSubMesh = () => {};
        this._callbackPluginEventHasRenderTargetTextures = () => {};
        this._callbackPluginEventFillRenderTargetTextures = () => {};
        this._transparencyMode = null;
        this.name = p137;
        const v100 = p138 || vP1086.b.LastCreatedScene;
        if (v100) {
          this._scene = v100;
          this._dirtyCallbacks = {};
          this._forceGLSL = vP108;
          this._dirtyCallbacks[1] = this._markAllSubMeshesAsTexturesDirty.bind(this);
          this._dirtyCallbacks[2] = this._markAllSubMeshesAsLightsDirty.bind(this);
          this._dirtyCallbacks[4] = this._markAllSubMeshesAsFresnelDirty.bind(this);
          this._dirtyCallbacks[8] = this._markAllSubMeshesAsAttributesDirty.bind(this);
          this._dirtyCallbacks[16] = this._markAllSubMeshesAsMiscDirty.bind(this);
          this._dirtyCallbacks[32] = this._markAllSubMeshesAsPrePassDirty.bind(this);
          this._dirtyCallbacks[127] = this._markAllSubMeshesAsAllDirty.bind(this);
          this.id = p137 || vP1084.Tools.RandomId();
          this.uniqueId = this._scene.getUniqueId();
          this._materialContext = this._scene.getEngine().createMaterialContext();
          this._drawWrapper = new vP10811.e(this._scene.getEngine(), false);
          this._drawWrapper.materialContext = this._materialContext;
          this._uniformBuffer = new vP1088.d(this._scene.getEngine(), undefined, undefined, p137);
          this._useUBO = this.YL().getEngine().supportsUniformBuffers;
          this._createUniformBuffer();
          if (!p139) {
            this._scene.addMaterial(this);
          }
          if (this._scene.useMaterialMeshMap) {
            this.meshMap = {};
          }
          C7.OnEventObservable.notifyObservers(this, 1);
        }
      }
      _createUniformBuffer() {
        var v101;
        const v102 = this.YL().getEngine();
        if ((v101 = this._uniformBuffer) !== null && v101 !== undefined) {
          v101.dispose();
        }
        if (v102.isWebGPU && !this._forceGLSL) {
          this._uniformBuffer = new vP1088.d(v102, undefined, undefined, this.name, true);
          this._shaderLanguage = 1;
        } else {
          this._uniformBuffer = new vP1088.d(this._scene.getEngine(), undefined, undefined, this.name);
        }
        this._uniformBufferLayoutBuilt = false;
      }
      toString(p140) {
        return "Name: " + this.name;
      }
      getClassName() {
        return "Material";
      }
      get _isMaterial() {
        return true;
      }
      get isFrozen() {
        return this.checkReadyOnlyOnce;
      }
      freeze() {
        this.CY();
        this.checkReadyOnlyOnce = true;
      }
      ML() {
        this.CY();
        this.checkReadyOnlyOnce = false;
      }
      isReady(p141, p142) {
        return true;
      }
      isReadyForSubMesh(p143, p144, p145) {
        const v103 = p144.materialDefines;
        return !!v103 && (this._eventInfo.isReadyForSubMesh = true, this._eventInfo.defines = v103, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), this._eventInfo.isReadyForSubMesh);
      }
      getEffect() {
        return this._drawWrapper.effect;
      }
      YL() {
        return this._scene;
      }
      _getEffectiveOrientation(p146) {
        if (this.sideOrientation !== null) {
          return this.sideOrientation;
        } else {
          return p146.sideOrientation;
        }
      }
      get zf() {
        return this._transparencyMode;
      }
      set zf(p147) {
        this._transparencyMode = p147;
      }
      get _hasTransparencyMode() {
        return this._transparencyMode != null;
      }
      get _transparencyModeIsBlend() {
        return this._transparencyMode === C7.MATERIAL_ALPHABLEND || this._transparencyMode === C7.MATERIAL_ALPHATESTANDBLEND;
      }
      get _transparencyModeIsTest() {
        return this._transparencyMode === C7.MATERIAL_ALPHATEST || this._transparencyMode === C7.MATERIAL_ALPHATESTANDBLEND;
      }
      get _disableAlphaBlending() {
        return this._transparencyMode === C7.MATERIAL_OPAQUE || this._transparencyMode === C7.MATERIAL_ALPHATEST;
      }
      needAlphaBlending() {
        if (this._hasTransparencyMode) {
          return this._transparencyModeIsBlend;
        } else {
          return !this._disableAlphaBlending && this.alpha < 1;
        }
      }
      needAlphaBlendingForMesh(p148) {
        if (this._hasTransparencyMode) {
          return this._transparencyModeIsBlend;
        } else {
          return p148.visibility < 1 || !this._disableAlphaBlending && (p148.hasVertexAlpha || this.needAlphaBlending());
        }
      }
      needAlphaTesting() {
        return !!this._hasTransparencyMode && this._transparencyModeIsTest;
      }
      needAlphaTestingForMesh(p149) {
        if (this._hasTransparencyMode) {
          return this._transparencyModeIsTest;
        } else {
          return !this.needAlphaBlendingForMesh(p149) && this.needAlphaTesting();
        }
      }
      getAlphaTestTexture() {
        return null;
      }
      CY(CC = false) {
        const v104 = this.YL().meshes;
        for (const v105 of v104) {
          if (v105.wf) {
            for (const v106 of v105.wf) {
              if (v106.kI() === this) {
                for (const v107 of v106._drawWrappers) {
                  if (v107 && this._materialContext === v107.materialContext) {
                    v107._wasPreviouslyReady = false;
                    v107._wasPreviouslyUsingInstances = null;
                    v107._forceRebindOnNextCall = p106;
                  }
                }
              }
            }
          }
        }
        if (CC) {
          this.eG(C7.AllDirtyFlag);
        }
      }
      _preBind(p150, yC = null) {
        const v108 = this._scene.getEngine();
        const v109 = (yC == null ? this.sideOrientation : yC) === C7.ClockWiseSideOrientation;
        v108.enableEffect(p150 || this._getDrawWrapper());
        v108.setState(this.backFaceCulling, this.zOffset, false, v109, this._scene._mirroredCameraPosition ? !this.cullBackFaces : this.cullBackFaces, this.Lf, this.zOffsetUnits);
        return v109;
      }
      bind(p151, p152) {}
      buildUniformLayout() {
        const v110 = this._uniformBuffer;
        this._eventInfo.ubo = v110;
        this._callbackPluginEventGeneric(8, this._eventInfo);
        v110.create();
        this._uniformBufferLayoutBuilt = true;
      }
      bindForSubMesh(p153, p154, p155) {
        const v111 = p155._drawWrapper;
        this._eventInfo.subMesh = p155;
        this._callbackPluginEventBindForSubMesh(this._eventInfo);
        v111._forceRebindOnNextCall = false;
      }
      bindOnlyWorldMatrix(p156) {}
      bindView(p157) {
        if (this._useUBO) {
          this._needToBindSceneUbo = true;
        } else {
          p157.setMatrix("view", this.YL().getViewMatrix());
        }
      }
      bindViewProjection(p158) {
        if (this._useUBO) {
          this._needToBindSceneUbo = true;
        } else {
          p158.setMatrix("viewProjection", this.YL().getTransformMatrix());
          p158.setMatrix("projection", this.YL().getProjectionMatrix());
        }
      }
      bindEyePosition(p159, p160) {
        if (this._useUBO) {
          this._needToBindSceneUbo = true;
        } else {
          this._scene.bindEyePosition(p159, p160);
        }
      }
      _afterBind(p161, yC = null) {
        this._scene._cachedMaterial = this;
        if (this._needToBindSceneUbo && yC) {
          this._needToBindSceneUbo = false;
          (0, vP10813.s)(p107, this.YL().getSceneUniformBuffer());
          this._scene.finalizeSceneUbo();
        }
        this._scene._cachedVisibility = p161 ? p161.visibility : 1;
        if (this._onBindObservable && p161) {
          this._onBindObservable.notifyObservers(p161);
        }
        if (this.disableDepthWrite) {
          const v112 = this._scene.getEngine();
          this._cachedDepthWriteState = v112.getDepthWrite();
          v112.setDepthWrite(false);
        }
        if (this.disableColorWrite) {
          const v113 = this._scene.getEngine();
          this._cachedColorWriteState = v113.getColorWrite();
          v113.setColorWrite(false);
        }
        if (this.depthFunction !== 0) {
          const v114 = this._scene.getEngine();
          this._cachedDepthFunctionState = v114.getDepthFunction() || 0;
          v114.setDepthFunction(this.depthFunction);
        }
      }
      unbind() {
        this._scene.getSceneUniformBuffer().unbindEffect();
        if (this._onUnBindObservable) {
          this._onUnBindObservable.notifyObservers(this);
        }
        if (this.depthFunction !== 0) {
          this._scene.getEngine().setDepthFunction(this._cachedDepthFunctionState);
        }
        if (this.disableDepthWrite) {
          this._scene.getEngine().setDepthWrite(this._cachedDepthWriteState);
        }
        if (this.disableColorWrite) {
          this._scene.getEngine().setColorWrite(this._cachedColorWriteState);
        }
      }
      getAnimatables() {
        this._eventInfo.animatables = [];
        this._callbackPluginEventGeneric(256, this._eventInfo);
        return this._eventInfo.animatables;
      }
      getActiveTextures() {
        this._eventInfo.activeTextures = [];
        this._callbackPluginEventGeneric(512, this._eventInfo);
        return this._eventInfo.activeTextures;
      }
      hasTexture(p162) {
        this._eventInfo.hasTexture = false;
        this._eventInfo.texture = p162;
        this._callbackPluginEventGeneric(1024, this._eventInfo);
        return this._eventInfo.hasTexture;
      }
      clone(p163) {
        return null;
      }
      _clonePlugins(p164, p165) {
        const vO3 = {};
        this._serializePlugins(vO3);
        C7._ParsePlugins(vO3, p164, this._scene, p165);
        if (this.pluginManager) {
          for (const v115 of this.pluginManager._plugins) {
            const v116 = p164.pluginManager.getPlugin(v115.name);
            if (v116) {
              v115.copyTo(v116);
            }
          }
        }
      }
      getBindedMeshes() {
        if (this.meshMap) {
          const vA = [];
          for (const v117 in this.meshMap) {
            const v118 = this.meshMap[v117];
            if (v118) {
              vA.push(v118);
            }
          }
          return vA;
        }
        return this._scene.meshes.filter(p166 => p166.material === this);
      }
      forceCompilation(p167, p168, p169, p170) {
        const v119 = (0, vP108.d)({
          clipPlane: false,
          useInstances: false
        }, p169);
        const v120 = this.YL();
        const v121 = this.allowShaderHotSwapping;
        this.allowShaderHotSwapping = false;
        const vF3 = () => {
          if (!this._scene || !this._scene.getEngine()) {
            return;
          }
          const v122 = v120.clipPlane;
          if (v119.clipPlane) {
            v120.clipPlane = new vP10810.d(0, 0, 0, 1);
          }
          if (this._storeEffectOnSubMeshes) {
            let v123 = true;
            let v124 = null;
            if (p167.wf) {
              const v125 = new vP1087.e(0, 0, 0, 0, 0, p167, undefined, false, false);
              if (v125.materialDefines) {
                v125.materialDefines._renderId = -1;
              }
              if (!this.isReadyForSubMesh(p167, v125, v119.useInstances)) {
                if (v125.effect && v125.effect.getCompilationError() && v125.effect.allFallbacksProcessed()) {
                  v124 = v125.effect.getCompilationError();
                } else {
                  v123 = false;
                  setTimeout(vF3, 16);
                }
              }
            }
            if (v123) {
              this.allowShaderHotSwapping = v121;
              if (v124 && p170) {
                p170(v124);
              }
              if (p168) {
                p168(this);
              }
            }
          } else if (this.isReady()) {
            this.allowShaderHotSwapping = v121;
            if (p168) {
              p168(this);
            }
          } else {
            setTimeout(vF3, 16);
          }
          if (v119.clipPlane) {
            v120.clipPlane = v122;
          }
        };
        vF3();
      }
      async forceCompilationAsync(p171, p172) {
        return await new Promise((p173, p174) => {
          this.forceCompilation(p171, () => {
            p173();
          }, p172, p175 => {
            p174(p175);
          });
        });
      }
      eG(p176) {
        if (!this.YL().blockMaterialDirtyMechanism && !this._blockDirtyMechanism) {
          C7._DirtyCallbackArray.length = 0;
          if (p176 & C7.ImageProcessingDirtyFlag) {
            C7._DirtyCallbackArray.push(C7._ImageProcessingDirtyCallBack);
          }
          if (p176 & C7.TextureDirtyFlag) {
            C7._DirtyCallbackArray.push(C7._TextureDirtyCallBack);
          }
          if (p176 & C7.LightDirtyFlag) {
            C7._DirtyCallbackArray.push(C7._LightsDirtyCallBack);
          }
          if (p176 & C7.FresnelDirtyFlag) {
            C7._DirtyCallbackArray.push(C7._FresnelDirtyCallBack);
          }
          if (p176 & C7.AttributesDirtyFlag) {
            C7._DirtyCallbackArray.push(C7._AttributeDirtyCallBack);
          }
          if (p176 & C7.MiscDirtyFlag) {
            C7._DirtyCallbackArray.push(C7._MiscDirtyCallBack);
          }
          if (p176 & C7.PrePassDirtyFlag) {
            C7._DirtyCallbackArray.push(C7._PrePassDirtyCallBack);
          }
          if (C7._DirtyCallbackArray.length) {
            this._markAllSubMeshesAsDirty(C7._RunDirtyCallBacks);
          }
          this.YL().resetCachedMaterial();
        }
      }
      resetDrawCache() {
        const v126 = this.YL().meshes;
        for (const v127 of v126) {
          if (v127.wf) {
            for (const v128 of v127.wf) {
              if (v128.kI() === this) {
                v128.resetDrawCache();
              }
            }
          }
        }
      }
      _markAllSubMeshesAsDirty(p177) {
        const v129 = this.YL();
        if (v129.blockMaterialDirtyMechanism || this._blockDirtyMechanism) {
          return;
        }
        const v130 = v129.meshes;
        for (const v131 of v130) {
          if (v131.wf) {
            for (const v132 of v131.wf) {
              if ((v132.kI() || (v129._hasDefaultMaterial ? v129.defaultMaterial : null)) === this) {
                for (const v133 of v132._drawWrappers) {
                  if (v133 && v133.defines && v133.defines.markAllAsDirty && this._materialContext === v133.materialContext) {
                    p177(v133.defines);
                  }
                }
              }
            }
          }
        }
      }
      _markScenePrePassDirty() {
        if (this.YL().blockMaterialDirtyMechanism || this._blockDirtyMechanism) {
          return;
        }
        const v134 = this.YL().enablePrePassRenderer();
        if (v134) {
          v134.eG();
        }
      }
      _markAllSubMeshesAsAllDirty() {
        this._markAllSubMeshesAsDirty(C7._AllDirtyCallBack);
      }
      _markAllSubMeshesAsImageProcessingDirty() {
        this._markAllSubMeshesAsDirty(C7._ImageProcessingDirtyCallBack);
      }
      _markAllSubMeshesAsTexturesDirty() {
        this._markAllSubMeshesAsDirty(C7._TextureDirtyCallBack);
      }
      _markAllSubMeshesAsFresnelDirty() {
        this._markAllSubMeshesAsDirty(C7._FresnelDirtyCallBack);
      }
      _markAllSubMeshesAsFresnelAndMiscDirty() {
        this._markAllSubMeshesAsDirty(C7._FresnelAndMiscDirtyCallBack);
      }
      _markAllSubMeshesAsLightsDirty() {
        this._markAllSubMeshesAsDirty(C7._LightsDirtyCallBack);
      }
      _markAllSubMeshesAsAttributesDirty() {
        this._markAllSubMeshesAsDirty(C7._AttributeDirtyCallBack);
      }
      _markAllSubMeshesAsMiscDirty() {
        this._markAllSubMeshesAsDirty(C7._MiscDirtyCallBack);
      }
      _markAllSubMeshesAsPrePassDirty() {
        this._markAllSubMeshesAsDirty(C7._PrePassDirtyCallBack);
      }
      _markAllSubMeshesAsTexturesAndMiscDirty() {
        this._markAllSubMeshesAsDirty(C7._TextureAndMiscDirtyCallBack);
      }
      _checkScenePerformancePriority() {
        if (this._scene.performancePriority !== 0) {
          this.checkReadyOnlyOnce = true;
          const v135 = this._scene.onScenePerformancePriorityChangedObservable.addOnce(() => {
            this.checkReadyOnlyOnce = false;
          });
          this.Cf.add(() => {
            this._scene.onScenePerformancePriorityChangedObservable.remove(v135);
          });
        }
      }
      setPrePassRenderer(p178) {
        return false;
      }
      dispose(p179, p180, p181) {
        const v136 = this.YL();
        v136.stopAnimation(this);
        v136.freeProcessedMaterials();
        v136.removeMaterial(this);
        this._eventInfo.forceDisposeTextures = p180;
        this._callbackPluginEventGeneric(2, this._eventInfo);
        if (this._parentContainer) {
          const v137 = this._parentContainer.materials.indexOf(this);
          if (v137 > -1) {
            this._parentContainer.materials.splice(v137, 1);
          }
          this._parentContainer = null;
        }
        if (p181 !== true) {
          if (this.meshMap) {
            for (const v138 in this.meshMap) {
              const v139 = this.meshMap[v138];
              this._disposeMeshResources(v139);
            }
          } else {
            const v140 = v136.meshes;
            for (const v141 of v140) {
              this._disposeMeshResources(v141);
            }
          }
        }
        this._uniformBuffer.dispose();
        if (this._drawWrapper.effect) {
          if (!this._storeEffectOnSubMeshes) {
            this._drawWrapper.effect.dispose();
          }
          this._drawWrapper.effect = null;
        }
        this.metadata = null;
        this.Cf.notifyObservers(this);
        this.Cf.clear();
        if (this._onBindObservable) {
          this._onBindObservable.clear();
        }
        if (this._onUnBindObservable) {
          this._onUnBindObservable.clear();
        }
        if (this._onEffectCreatedObservable) {
          this._onEffectCreatedObservable.clear();
        }
        this._eventInfo &&= {};
      }
      _disposeMeshResources(p182) {
        if (!p182) {
          return;
        }
        const v142 = p182.Qf;
        const v143 = p182._internalAbstractMeshDataInfo._materialForRenderPass;
        if (this._storeEffectOnSubMeshes) {
          if (p182.wf && v143) {
            for (const v144 of p182.wf) {
              const v145 = v144._drawWrappers;
              for (let vLN011 = 0; vLN011 < v145.length; vLN011++) {
                const v146 = v145[vLN011]?.effect;
                if (!v146) {
                  continue;
                }
                if (v143[vLN011] === this) {
                  if (v142 !== null && v142 !== undefined) {
                    v142._releaseVertexArrayObject(v146);
                  }
                  v144._removeDrawWrapper(vLN011, true, true);
                }
              }
            }
          }
        } else if (v142 !== null && v142 !== undefined) {
          v142._releaseVertexArrayObject(this._drawWrapper.effect);
        }
        if (p182.material === this && !p182.Gg) {
          p182.material = null;
        }
      }
      serialize() {
        const v147 = vP10812.b.Serialize(this);
        v147.Lf = this.Lf.serialize();
        v147.uniqueId = this.uniqueId;
        this._serializePlugins(v147);
        return v147;
      }
      _serializePlugins(p183) {
        p183.plugins = {};
        if (this.pluginManager) {
          for (const v148 of this.pluginManager._plugins) {
            if (!v148.doNotSerialize) {
              p183.plugins[v148.getClassName()] = v148.serialize();
            }
          }
        }
      }
      static Parse(p184, p185, p186) {
        if (p184.customType) {
          if (p184.customType === "BABYLON.PBRMaterial" && p184.overloadedAlbedo && (p184.customType = "BABYLON.LegacyPBRMaterial", !BABYLON.LegacyPBRMaterial)) {
            vP1089.e.Error("Your scene is trying to load a legacy version of the PBRMaterial, please, include it from the materials library.");
            return null;
          }
        } else {
          p184.customType = "BABYLON.StandardMaterial";
        }
        const v149 = vP1084.Tools.Instantiate(p184.customType).Parse(p184, p185, p186);
        v149._loadedUniqueId = p184.uniqueId;
        return v149;
      }
      static _ParsePlugins(p187, p188, p189, p190) {
        if (p187.plugins) {
          for (const v150 in p187.plugins) {
            var v151;
            var v152;
            const v153 = p187.plugins[v150];
            let v154 = (v151 = p188.pluginManager) === null || v151 === undefined ? undefined : v151.getPlugin(v153.name);
            if (!v154) {
              const v155 = vP1084.Tools.Instantiate("BABYLON." + v150);
              if (v155) {
                v154 = new v155(p188);
              }
            }
            if ((v152 = v154) !== null && v152 !== undefined) {
              v152.parse(v153, p189, p190);
            }
          }
        }
      }
    }
    C7.TriangleFillMode = 0;
    C7.WireFrameFillMode = 1;
    C7.PointFillMode = 2;
    C7.PointListDrawMode = 3;
    C7.LineListDrawMode = 4;
    C7.LineLoopDrawMode = 5;
    C7.LineStripDrawMode = 6;
    C7.TriangleStripDrawMode = 7;
    C7.TriangleFanDrawMode = 8;
    C7.ClockWiseSideOrientation = 0;
    C7.CounterClockWiseSideOrientation = 1;
    C7.ImageProcessingDirtyFlag = 64;
    C7.TextureDirtyFlag = 1;
    C7.LightDirtyFlag = 2;
    C7.FresnelDirtyFlag = 4;
    C7.AttributesDirtyFlag = 8;
    C7.MiscDirtyFlag = 16;
    C7.PrePassDirtyFlag = 32;
    C7.AllDirtyFlag = 127;
    C7.MATERIAL_OPAQUE = 0;
    C7.MATERIAL_ALPHATEST = 1;
    C7.MATERIAL_ALPHABLEND = 2;
    C7.MATERIAL_ALPHATESTANDBLEND = 3;
    C7.MATERIAL_NORMALBLENDMETHOD_WHITEOUT = 0;
    C7.MATERIAL_NORMALBLENDMETHOD_RNM = 1;
    C7.OnEventObservable = new vP1085.e();
    C7._AllDirtyCallBack = p191 => p191.markAllAsDirty();
    C7._ImageProcessingDirtyCallBack = p192 => p192.markAsImageProcessingDirty();
    C7._TextureDirtyCallBack = p193 => p193.markAsTexturesDirty();
    C7._FresnelDirtyCallBack = p194 => p194.markAsFresnelDirty();
    C7._MiscDirtyCallBack = p195 => p195.markAsMiscDirty();
    C7._PrePassDirtyCallBack = p196 => p196.markAsPrePassDirty();
    C7._LightsDirtyCallBack = p197 => p197.markAsLightDirty();
    C7._AttributeDirtyCallBack = p198 => p198.markAsAttributesDirty();
    C7._FresnelAndMiscDirtyCallBack = p199 => {
      C7._FresnelDirtyCallBack(p199);
      C7._MiscDirtyCallBack(p199);
    };
    C7._TextureAndMiscDirtyCallBack = p200 => {
      C7._TextureDirtyCallBack(p200);
      C7._MiscDirtyCallBack(p200);
    };
    C7._DirtyCallbackArray = [];
    C7._RunDirtyCallBacks = p201 => {
      for (const v156 of C7._DirtyCallbackArray) {
        v156(p201);
      }
    };
    (0, vP1082.d)([(0, vP1083.F)()], C7.prototype, "id", undefined);
    (0, vP1082.d)([(0, vP1083.F)()], C7.prototype, "uniqueId", undefined);
    (0, vP1082.d)([(0, vP1083.F)()], C7.prototype, "name", undefined);
    (0, vP1082.d)([(0, vP1083.F)()], C7.prototype, "metadata", undefined);
    (0, vP1082.d)([(0, vP1083.F)()], C7.prototype, "checkReadyOnEveryCall", undefined);
    (0, vP1082.d)([(0, vP1083.F)()], C7.prototype, "checkReadyOnlyOnce", undefined);
    (0, vP1082.d)([(0, vP1083.F)()], C7.prototype, "state", undefined);
    (0, vP1082.d)([(0, vP1083.F)("alpha")], C7.prototype, "_alpha", undefined);
    (0, vP1082.d)([(0, vP1083.F)("backFaceCulling")], C7.prototype, "_backFaceCulling", undefined);
    (0, vP1082.d)([(0, vP1083.F)("cullBackFaces")], C7.prototype, "_cullBackFaces", undefined);
    (0, vP1082.d)([(0, vP1083.F)()], C7.prototype, "sideOrientation", undefined);
    (0, vP1082.d)([(0, vP1083.F)("alphaMode")], C7.prototype, "_alphaMode", undefined);
    (0, vP1082.d)([(0, vP1083.F)()], C7.prototype, "_needDepthPrePass", undefined);
    (0, vP1082.d)([(0, vP1083.F)()], C7.prototype, "disableDepthWrite", undefined);
    (0, vP1082.d)([(0, vP1083.F)()], C7.prototype, "disableColorWrite", undefined);
    (0, vP1082.d)([(0, vP1083.F)()], C7.prototype, "forceDepthWrite", undefined);
    (0, vP1082.d)([(0, vP1083.F)()], C7.prototype, "depthFunction", undefined);
    (0, vP1082.d)([(0, vP1083.F)()], C7.prototype, "separateCullingPass", undefined);
    (0, vP1082.d)([(0, vP1083.F)("fogEnabled")], C7.prototype, "_fogEnabled", undefined);
    (0, vP1082.d)([(0, vP1083.F)()], C7.prototype, "pointSize", undefined);
    (0, vP1082.d)([(0, vP1083.F)()], C7.prototype, "zOffset", undefined);
    (0, vP1082.d)([(0, vP1083.F)()], C7.prototype, "zOffsetUnits", undefined);
    (0, vP1082.d)([(0, vP1083.F)()], C7.prototype, "pointsCloud", null);
    (0, vP1082.d)([(0, vP1083.F)()], C7.prototype, "fillMode", null);
    (0, vP1082.d)([(0, vP1083.F)()], C7.prototype, "useLogarithmicDepth", null);
    (0, vP1082.d)([(0, vP1083.F)()], C7.prototype, "zf", null);
  },
  17327: (p202, p203, p204) => {
    p204.d(p203, {
      A: () => f20,
      E: () => f9,
      G: () => f8,
      I: () => f26,
      M: () => f25,
      Q: () => f23,
      R: () => f13,
      U: () => f22,
      X: () => f27,
      _: () => f28,
      ab: () => f29,
      d: () => f16,
      db: () => f31,
      e: () => f7,
      fb: () => f10,
      h: () => f18,
      l: () => f6,
      o: () => f11,
      s: () => f12,
      u: () => f14,
      v: () => f21,
      w: () => f15,
      y: () => f19
    });
    var vP204 = p204(16811);
    var vP2042 = p204(17009);
    var vP2043 = p204(16837);
    var vP2044 = p204(17279);
    var vP2045 = p204(17333);
    const v157 = vP2042.eL.Black();
    const vO4 = {
      NUM_MORPH_INFLUENCERS: 0,
      NORMAL: false,
      TANGENT: false,
      UV: false,
      UV2: false,
      COLOR: false
    };
    function f6(p205, p206, p207) {
      if (!p205 || p205.LOGARITHMICDEPTH || p205.indexOf && p205.indexOf("LOGARITHMICDEPTH") >= 0) {
        const v158 = p207.activeCamera;
        if (v158.mode === 1) {
          vP204.e.Error("Logarithmic depth is not compatible with orthographic cameras!", 20);
        }
        p206.setFloat("logarithmicDepthConstant", 2 / (Math.log(v158.uf + 1) / Math.LN2));
      }
    }
    function f7(p208, p209, p210, fC = false) {
      if (p210 && p208.fogEnabled && (!p209 || p209.applyFog) && p208.fogMode !== 0) {
        p210.setFloat4("vFogInfos", p208.fogMode, p208.fogStart, p208.fogEnd, p208.fogDensity);
        if (vP204) {
          p208.fogColor.toLinearSpaceToRef(v157, p208.getEngine().useExactSrgbConversions);
          p210.setColor3("vFogColor", v157);
        } else {
          p210.setColor3("vFogColor", p208.fogColor);
        }
      }
    }
    function f8(p211, p212, p213, p214, p215, p216, p217, p218, p219, p220) {
      const v159 = p211.numMaxInfluencers || p211.numInfluencers;
      if (v159 <= 0) {
        return 0;
      } else {
        p212.push("#define MORPHTARGETS");
        if (p211.hasPositions) {
          p212.push("#define MORPHTARGETTEXTURE_HASPOSITIONS");
        }
        if (p211.hasNormals) {
          p212.push("#define MORPHTARGETTEXTURE_HASNORMALS");
        }
        if (p211.hasTangents) {
          p212.push("#define MORPHTARGETTEXTURE_HASTANGENTS");
        }
        if (p211.hasUVs) {
          p212.push("#define MORPHTARGETTEXTURE_HASUVS");
        }
        if (p211.hasUV2s) {
          p212.push("#define MORPHTARGETTEXTURE_HASUV2S");
        }
        if (p211.hasColors) {
          p212.push("#define MORPHTARGETTEXTURE_HASCOLORS");
        }
        if (p211.supportsPositions && p215) {
          p212.push("#define MORPHTARGETS_POSITION");
        }
        if (p211.supportsNormals && p216) {
          p212.push("#define MORPHTARGETS_NORMAL");
        }
        if (p211.supportsTangents && p217) {
          p212.push("#define MORPHTARGETS_TANGENT");
        }
        if (p211.supportsUVs && p218) {
          p212.push("#define MORPHTARGETS_UV");
        }
        if (p211.supportsUV2s && p219) {
          p212.push("#define MORPHTARGETS_UV2");
        }
        if (p211.supportsColors && p220) {
          p212.push("#define MORPHTARGETS_COLOR");
        }
        p212.push("#define NUM_MORPH_INFLUENCERS " + v159);
        if (p211.isUsingTextureForTargets) {
          p212.push("#define MORPHTARGETS_TEXTURE");
        }
        vO4.NUM_MORPH_INFLUENCERS = v159;
        vO4.NORMAL = p216;
        vO4.TANGENT = p217;
        vO4.UV = p218;
        vO4.UV2 = p219;
        vO4.COLOR = p220;
        f9(p213, p214, vO4, p215);
        return v159;
      }
    }
    function f9(p221, p222, p223) {
      let v160 = !(arguments.length > 3) || arguments[3] === undefined || arguments[3];
      const v161 = p223.NUM_MORPH_INFLUENCERS;
      if (v161 > 0 && vP2043.b.LastCreatedEngine) {
        const v162 = vP2043.b.LastCreatedEngine.getCaps().maxVertexAttribs;
        const v163 = p222.morphTargetManager;
        if (v163 !== null && v163 !== undefined && v163.isUsingTextureForTargets) {
          return;
        }
        const v164 = v163 && v163.supportsPositions && v160;
        const v165 = v163 && v163.supportsNormals && p223.NORMAL;
        const v166 = v163 && v163.supportsTangents && p223.TANGENT;
        const v167 = v163 && v163.supportsUVs && p223.UV1;
        const v168 = v163 && v163.supportsUV2s && p223.UV2;
        const v169 = v163 && v163.supportsColors && p223.VERTEXCOLOR;
        for (let vLN012 = 0; vLN012 < v161; vLN012++) {
          if (v164) {
            p221.push("position" + vLN012);
          }
          if (v165) {
            p221.push("normal" + vLN012);
          }
          if (v166) {
            p221.push("tangent" + vLN012);
          }
          if (v167) {
            p221.push("uv_" + vLN012);
          }
          if (v168) {
            p221.push("uv2_" + vLN012);
          }
          if (v169) {
            p221.push("color" + vLN012);
          }
          if (p221.length > v162) {
            vP204.e.Error("Cannot add more vertex attributes for mesh " + p222.name);
          }
        }
      }
    }
    function f10(p224, yC = false) {
      p224.push("world0");
      p224.push("world1");
      p224.push("world2");
      p224.push("world3");
      if (yC) {
        p224.push("previousWorld0");
        p224.push("previousWorld1");
        p224.push("previousWorld2");
        p224.push("previousWorld3");
      }
    }
    function f11(p225, p226) {
      const v170 = p225.morphTargetManager;
      if (p225 && v170) {
        p226.setFloatArray("morphTargetInfluences", v170.influences);
      }
    }
    function f12(p227, p228) {
      p228.bindToEffect(p227, "Scene");
    }
    function f13(p229, p230, p231) {
      p230._needUVs = true;
      p230[p231] = true;
      if (p229.optimizeUVAllocation && p229.getTextureMatrix().isIdentityAs3x2()) {
        p230[p231 + "DIRECTUV"] = p229.coordinatesIndex + 1;
        p230["MAINUV" + (p229.coordinatesIndex + 1)] = true;
      } else {
        p230[p231 + "DIRECTUV"] = 0;
      }
    }
    function f14(p232, p233, p234) {
      const v171 = p232.getTextureMatrix();
      p233.Zf(p234 + "Matrix", v171);
    }
    function f15(p235, p236, p237) {
      if (p237.BAKED_VERTEX_ANIMATION_TEXTURE && p237.INSTANCES) {
        p235.push("bakedVertexAnimationSettingsInstanced");
      }
    }
    function f16(p238, p239, p240) {
      var v172;
      if (p239 && p238 && (p238.computeBonesUsingShaders && p239._bonesComputationForcedToCPU && (p238.computeBonesUsingShaders = false), p238.useBones && p238.computeBonesUsingShaders && p238.skeleton)) {
        const v173 = p238.skeleton;
        if (v173.isUsingTextureForMatrices && p239.getUniformIndex("boneTextureWidth") > -1) {
          const v174 = v173.getTransformMatrixTexture(p238);
          p239.setTexture("boneSampler", v174);
          p239.setFloat("boneTextureWidth", (v173.bones.length + 1) * 4);
        } else {
          const v175 = v173.getTransformMatrices(p238);
          if (v175) {
            p239.setMatrices("mBones", v175);
            if (p240 && p238.YL().prePassRenderer && p238.YL().prePassRenderer.getIndex(2)) {
              p240.previousBones[p238.uniqueId] ||= v175.slice();
              p239.setMatrices("mPreviousBones", p240.previousBones[p238.uniqueId]);
              v172 = v175;
              p240.previousBones[p238.uniqueId].set(v172);
            }
          }
        }
      }
    }
    function f17(p241, p242, p243, p244, p245) {
      let v176 = !(arguments.length > 5) || arguments[5] === undefined || arguments[5];
      p241._bindLight(p242, p243, p244, p245, v176);
    }
    function f18(p246, p247, p248, p249, ky = 4) {
      const v177 = Math.min(p247.lightSources.length, ky);
      for (let vLN013 = 0; vLN013 < v177; vLN013++) {
        f17(p247.lightSources[vLN013], vLN013, p246, p248, typeof p249 === "boolean" ? p249 : p249.SPECULARTERM, p247.receiveShadows);
      }
    }
    function f19(p250, p251, p252, p253) {
      if (p252.NUM_BONE_INFLUENCERS > 0) {
        p253.addCPUSkinningFallback(0, p251);
        p250.push("matricesIndices");
        p250.push("matricesWeights");
        if (p252.NUM_BONE_INFLUENCERS > 4) {
          p250.push("matricesIndicesExtra");
          p250.push("matricesWeightsExtra");
        }
      }
    }
    function f20(p254, p255) {
      if (p255.INSTANCES || p255.THIN_INSTANCES) {
        f10(p254, !!p255.PREPASS_VELOCITY);
      }
      if (p255.INSTANCESCOLOR) {
        p254.push("instanceColor");
      }
    }
    function f21(p256, p257, IC = 4, fC = 0) {
      let vLN014 = 0;
      for (let vLN015 = 0; vLN015 < IC && p256["LIGHT" + vLN015]; vLN015++) {
        if (vLN015 > 0) {
          vLN014 = vP204 + vLN015;
          p257.addFallback(vLN014, "LIGHT" + vLN015);
        }
        if (!p256.SHADOWS) {
          if (p256["SHADOW" + vLN015]) {
            p257.addFallback(vP204, "SHADOW" + vLN015);
          }
          if (p256["SHADOWPCF" + vLN015]) {
            p257.addFallback(vP204, "SHADOWPCF" + vLN015);
          }
          if (p256["SHADOWPCSS" + vLN015]) {
            p257.addFallback(vP204, "SHADOWPCSS" + vLN015);
          }
          if (p256["SHADOWPOISSON" + vLN015]) {
            p257.addFallback(vP204, "SHADOWPOISSON" + vLN015);
          }
          if (p256["SHADOWESM" + vLN015]) {
            p257.addFallback(vP204, "SHADOWESM" + vLN015);
          }
          if (p256["SHADOWCLOSEESM" + vLN015]) {
            p257.addFallback(vP204, "SHADOWCLOSEESM" + vLN015);
          }
        }
      }
      return vLN014++;
    }
    function f22(p258, p259, p260, p261, p262, p263, p264, my = false) {
      if (p264._areMiscDirty) {
        p264.LOGARITHMICDEPTH = p260;
        p264.POINTSIZE = p261;
        p264.FOG = p262 && function (p265, p266) {
          return p266.fogEnabled && p265.applyFog && p266.fogMode !== 0;
        }(p258, p259);
        p264.NONUNIFORMSCALING = p258.nonUniformScaling;
        p264.ALPHATEST = p263;
        p264.DECAL_AFTER_DETAIL = vP2045;
      }
    }
    function f23(p267, p268, p269, p270, ky = 4, gC = false) {
      if (!p269._areLightsDirty) {
        return p269._needNormals;
      }
      let vLN016 = 0;
      const vO5 = {
        needNormals: p269._needNormals,
        needRebuild: false,
        lightmapMode: false,
        shadowEnabled: false,
        specularEnabled: false
      };
      if (p267.lightsEnabled && !gC) {
        for (const v178 of p268.lightSources) {
          f24(p267, p268, v178, vLN016, p269, p270, vO5);
          vLN016++;
          if (vLN016 === ky) {
            break;
          }
        }
      }
      p269.SPECULARTERM = vO5.specularEnabled;
      p269.SHADOWS = vO5.shadowEnabled;
      for (let vVLN016 = vLN016; vVLN016 < ky; vVLN016++) {
        if (p269["LIGHT" + vVLN016] !== undefined) {
          p269["LIGHT" + vVLN016] = false;
          p269["HEMILIGHT" + vVLN016] = false;
          p269["POINTLIGHT" + vVLN016] = false;
          p269["DIRLIGHT" + vVLN016] = false;
          p269["SPOTLIGHT" + vVLN016] = false;
          p269["AREALIGHT" + vVLN016] = false;
          p269["SHADOW" + vVLN016] = false;
          p269["SHADOWCSM" + vVLN016] = false;
          p269["SHADOWCSMDEBUG" + vVLN016] = false;
          p269["SHADOWCSMNUM_CASCADES" + vVLN016] = false;
          p269["SHADOWCSMUSESHADOWMAXZ" + vVLN016] = false;
          p269["SHADOWCSMNOBLEND" + vVLN016] = false;
          p269["SHADOWCSM_RIGHTHANDED" + vVLN016] = false;
          p269["SHADOWPCF" + vVLN016] = false;
          p269["SHADOWPCSS" + vVLN016] = false;
          p269["SHADOWPOISSON" + vVLN016] = false;
          p269["SHADOWESM" + vVLN016] = false;
          p269["SHADOWCLOSEESM" + vVLN016] = false;
          p269["SHADOWCUBE" + vVLN016] = false;
          p269["SHADOWLOWQUALITY" + vVLN016] = false;
          p269["SHADOWMEDIUMQUALITY" + vVLN016] = false;
        }
      }
      const v179 = p267.getEngine().getCaps();
      if (p269.SHADOWFLOAT === undefined) {
        vO5.needRebuild = true;
      }
      p269.SHADOWFLOAT = vO5.shadowEnabled && (v179.textureFloatRender && v179.textureFloatLinearFiltering || v179.textureHalfFloatRender && v179.textureHalfFloatLinearFiltering);
      p269.LIGHTMAPEXCLUDED = vO5.lightmapMode;
      if (vO5.needRebuild) {
        p269.rebuild();
      }
      return vO5.needNormals;
    }
    function f24(p271, p272, p273, p274, p275, p276, p277) {
      p277.needNormals = true;
      if (p275["LIGHT" + p274] === undefined) {
        p277.needRebuild = true;
      }
      p275["LIGHT" + p274] = true;
      p275["SPOTLIGHT" + p274] = false;
      p275["HEMILIGHT" + p274] = false;
      p275["POINTLIGHT" + p274] = false;
      p275["DIRLIGHT" + p274] = false;
      p275["AREALIGHT" + p274] = false;
      p273.prepareLightSpecificDefines(p275, p274);
      p275["LIGHT_FALLOFF_PHYSICAL" + p274] = false;
      p275["LIGHT_FALLOFF_GLTF" + p274] = false;
      p275["LIGHT_FALLOFF_STANDARD" + p274] = false;
      switch (p273.falloffType) {
        case vP2044.e.FALLOFF_GLTF:
          p275["LIGHT_FALLOFF_GLTF" + p274] = true;
          break;
        case vP2044.e.FALLOFF_PHYSICAL:
          p275["LIGHT_FALLOFF_PHYSICAL" + p274] = true;
          break;
        case vP2044.e.FALLOFF_STANDARD:
          p275["LIGHT_FALLOFF_STANDARD" + p274] = true;
      }
      if (p276 && !p273.JG.equalsFloats(0, 0, 0)) {
        p277.specularEnabled = true;
      }
      p275["SHADOW" + p274] = false;
      p275["SHADOWCSM" + p274] = false;
      p275["SHADOWCSMDEBUG" + p274] = false;
      p275["SHADOWCSMNUM_CASCADES" + p274] = false;
      p275["SHADOWCSMUSESHADOWMAXZ" + p274] = false;
      p275["SHADOWCSMNOBLEND" + p274] = false;
      p275["SHADOWCSM_RIGHTHANDED" + p274] = false;
      p275["SHADOWPCF" + p274] = false;
      p275["SHADOWPCSS" + p274] = false;
      p275["SHADOWPOISSON" + p274] = false;
      p275["SHADOWESM" + p274] = false;
      p275["SHADOWCLOSEESM" + p274] = false;
      p275["SHADOWCUBE" + p274] = false;
      p275["SHADOWLOWQUALITY" + p274] = false;
      p275["SHADOWMEDIUMQUALITY" + p274] = false;
      if (p272 && p272.receiveShadows && p271.shadowsEnabled && p273.shadowEnabled) {
        const v180 = p273.getShadowGenerator(p271.activeCamera) ?? p273.getShadowGenerator();
        if (v180) {
          const v181 = v180.getShadowMap();
          if (v181 && v181.renderList && v181.renderList.length > 0) {
            p277.shadowEnabled = true;
            v180.prepareDefines(p275, p274);
          }
        }
      }
      if (p273.lightmapMode != vP2044.e.LIGHTMAP_DEFAULT) {
        p277.lightmapMode = true;
        p275["LIGHTMAPEXCLUDED" + p274] = true;
        p275["LIGHTMAPNOSPECULAR" + p274] = p273.lightmapMode == vP2044.e.LIGHTMAP_SHADOWSONLY;
      } else {
        p275["LIGHTMAPEXCLUDED" + p274] = false;
        p275["LIGHTMAPNOSPECULAR" + p274] = false;
      }
    }
    function f25(p278, p279, p280, p281, p282, gC = null, AC = false) {
      let vF4 = function (p283, p284) {
        let v182 = false;
        if (p283.activeCamera) {
          const v183 = p284.CAMERA_ORTHOGRAPHIC ? 1 : 0;
          const v184 = p284.CAMERA_PERSPECTIVE ? 1 : 0;
          const v185 = p283.activeCamera.mode === 1 ? 1 : 0;
          const v186 = p283.activeCamera.mode === 0 ? 1 : 0;
          if (v183 ^ v185 || v184 ^ v186) {
            p284.CAMERA_ORTHOGRAPHIC = v185 === 1;
            p284.CAMERA_PERSPECTIVE = v186 === 1;
            v182 = true;
          }
        }
        return v182;
      }(p278, p281);
      if (gC !== false) {
        vF4 = (0, vP2045.i)(p280, p278, p281);
      }
      if (p281.DEPTHPREPASS !== !p279.getColorWrite()) {
        p281.DEPTHPREPASS = !p281.DEPTHPREPASS;
        vF4 = true;
      }
      if (p281.INSTANCES !== p282) {
        p281.INSTANCES = p282;
        vF4 = true;
      }
      if (p281.THIN_INSTANCES !== AC) {
        p281.THIN_INSTANCES = vP2044;
        vF4 = true;
      }
      if (vF4) {
        p281.markAsUnprocessed();
      }
    }
    function f26(p285, p286, p287, p288, ky = false) {
      let v187 = !(arguments.length > 5) || arguments[5] === undefined || arguments[5];
      let v188 = !(arguments.length > 6) || arguments[6] === undefined || arguments[6];
      if (!p286._areAttributesDirty && p286._needNormals === p286._normals && p286._needUVs === p286._uvs) {
        return false;
      }
      p286._normals = p286._needNormals;
      p286._uvs = p286._needUVs;
      p286.NORMAL = p286._needNormals && p285.isVerticesDataPresent("normal");
      if (p286._needNormals && p285.isVerticesDataPresent("tangent")) {
        p286.TANGENT = true;
      }
      for (let vLN1 = 1; vLN1 <= 6; ++vLN1) {
        p286["UV" + vLN1] = !!p286._needUVs && p285.isVerticesDataPresent(`uv${vLN1 === 1 ? "" : vLN1}`);
      }
      if (p287) {
        const v189 = p285.useVertexColors && p285.isVerticesDataPresent("color");
        p286.VERTEXCOLOR = v189;
        p286.VERTEXALPHA = p285.hasVertexAlpha && v189 && v187;
      }
      if (p285.isVerticesDataPresent("instanceColor") && (p285.hasInstances || p285.hasThinInstances)) {
        p286.INSTANCESCOLOR = true;
      }
      if (p288) {
        (function (p289, p290) {
          if (p289.useBones && p289.computeBonesUsingShaders && p289.skeleton) {
            p290.NUM_BONE_INFLUENCERS = p289.numBoneInfluencers;
            const v190 = p290.BONETEXTURE !== undefined;
            if (p289.skeleton.isUsingTextureForMatrices && v190) {
              p290.BONETEXTURE = true;
            } else {
              p290.BonesPerMesh = p289.skeleton.bones.length + 1;
              p290.BONETEXTURE = !v190 && undefined;
              const v191 = p289.YL().prePassRenderer;
              if (v191 && v191.enabled) {
                const v192 = v191.excludedSkinnedMesh.indexOf(p289) === -1;
                p290.BONES_VELOCITY_ENABLED = v192;
              }
            }
          } else {
            p290.NUM_BONE_INFLUENCERS = 0;
            p290.BonesPerMesh = 0;
            if (p290.BONETEXTURE !== undefined) {
              p290.BONETEXTURE = false;
            }
          }
        })(p285, p286);
      }
      if (ky) {
        (function (p291, p292) {
          const v193 = p291.morphTargetManager;
          if (v193) {
            p292.MORPHTARGETS_UV = v193.supportsUVs && p292.UV1;
            p292.MORPHTARGETS_UV2 = v193.supportsUV2s && p292.UV2;
            p292.MORPHTARGETS_TANGENT = v193.supportsTangents && p292.TANGENT;
            p292.MORPHTARGETS_NORMAL = v193.supportsNormals && p292.NORMAL;
            p292.MORPHTARGETS_POSITION = v193.supportsPositions;
            p292.MORPHTARGETS_COLOR = v193.supportsColors;
            p292.MORPHTARGETTEXTURE_HASUVS = v193.hasUVs;
            p292.MORPHTARGETTEXTURE_HASUV2S = v193.hasUV2s;
            p292.MORPHTARGETTEXTURE_HASTANGENTS = v193.hasTangents;
            p292.MORPHTARGETTEXTURE_HASNORMALS = v193.hasNormals;
            p292.MORPHTARGETTEXTURE_HASPOSITIONS = v193.hasPositions;
            p292.MORPHTARGETTEXTURE_HASCOLORS = v193.hasColors;
            p292.NUM_MORPH_INFLUENCERS = v193.numMaxInfluencers || v193.numInfluencers;
            p292.MORPHTARGETS = p292.NUM_MORPH_INFLUENCERS > 0;
            p292.MORPHTARGETS_TEXTURE = v193.isUsingTextureForTargets;
          } else {
            p292.MORPHTARGETS_UV = false;
            p292.MORPHTARGETS_UV2 = false;
            p292.MORPHTARGETS_TANGENT = false;
            p292.MORPHTARGETS_NORMAL = false;
            p292.MORPHTARGETS_POSITION = false;
            p292.MORPHTARGETS_COLOR = false;
            p292.MORPHTARGETTEXTURE_HASUVS = false;
            p292.MORPHTARGETTEXTURE_HASUV2S = false;
            p292.MORPHTARGETTEXTURE_HASTANGENTS = false;
            p292.MORPHTARGETTEXTURE_HASNORMALS = false;
            p292.MORPHTARGETTEXTURE_HASPOSITIONS = false;
            p292.MORPHTARGETTEXTURE_HAS_COLORS = false;
            p292.MORPHTARGETS = false;
            p292.NUM_MORPH_INFLUENCERS = 0;
          }
        })(p285, p286);
      }
      if (v188) {
        (function (p293, p294) {
          const v194 = p293.bakedVertexAnimationManager;
          p294.BAKED_VERTEX_ANIMATION_TEXTURE = !!v194 && !!v194.isEnabled;
        })(p285, p286);
      }
      return true;
    }
    function f27(p295, p296) {
      if (p295.activeCamera) {
        const v195 = p296.MULTIVIEW;
        p296.MULTIVIEW = p295.activeCamera.outputRenderTarget !== null && p295.activeCamera.outputRenderTarget.getViewCount() > 1;
        if (p296.MULTIVIEW != v195) {
          p296.markAsUnprocessed();
        }
      }
    }
    function f28(p297, p298, p299) {
      const v196 = p298.ORDER_INDEPENDENT_TRANSPARENCY;
      const v197 = p298.ORDER_INDEPENDENT_TRANSPARENCY_16BITS;
      p298.ORDER_INDEPENDENT_TRANSPARENCY = p297.useOrderIndependentTransparency && p299;
      p298.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !p297.getEngine().getCaps().textureFloatLinearFiltering;
      if (v196 !== p298.ORDER_INDEPENDENT_TRANSPARENCY || v197 !== p298.ORDER_INDEPENDENT_TRANSPARENCY_16BITS) {
        p298.markAsUnprocessed();
      }
    }
    function f29(p300, p301, p302) {
      const v198 = p301.PREPASS;
      if (!p301._arePrePassDirty) {
        return;
      }
      const vA2 = [{
        type: 1,
        define: "PREPASS_POSITION",
        index: "PREPASS_POSITION_INDEX"
      }, {
        type: 9,
        define: "PREPASS_LOCAL_POSITION",
        index: "PREPASS_LOCAL_POSITION_INDEX"
      }, {
        type: 2,
        define: "PREPASS_VELOCITY",
        index: "PREPASS_VELOCITY_INDEX"
      }, {
        type: 11,
        define: "PREPASS_VELOCITY_LINEAR",
        index: "PREPASS_VELOCITY_LINEAR_INDEX"
      }, {
        type: 3,
        define: "PREPASS_REFLECTIVITY",
        index: "PREPASS_REFLECTIVITY_INDEX"
      }, {
        type: 0,
        define: "PREPASS_IRRADIANCE",
        index: "PREPASS_IRRADIANCE_INDEX"
      }, {
        type: 7,
        define: "PREPASS_ALBEDO_SQRT",
        index: "PREPASS_ALBEDO_SQRT_INDEX"
      }, {
        type: 5,
        define: "PREPASS_DEPTH",
        index: "PREPASS_DEPTH_INDEX"
      }, {
        type: 10,
        define: "PREPASS_SCREENSPACE_DEPTH",
        index: "PREPASS_SCREENSPACE_DEPTH_INDEX"
      }, {
        type: 6,
        define: "PREPASS_NORMAL",
        index: "PREPASS_NORMAL_INDEX"
      }, {
        type: 8,
        define: "PREPASS_WORLD_NORMAL",
        index: "PREPASS_WORLD_NORMAL_INDEX"
      }];
      if (p300.prePassRenderer && p300.prePassRenderer.enabled && p302) {
        p301.PREPASS = true;
        p301.SCENE_MRT_COUNT = p300.prePassRenderer.mrtCount;
        p301.PREPASS_NORMAL_WORLDSPACE = p300.prePassRenderer.generateNormalsInWorldSpace;
        p301.PREPASS_COLOR = true;
        p301.PREPASS_COLOR_INDEX = 0;
        for (let vLN017 = 0; vLN017 < vA2.length; vLN017++) {
          const v199 = p300.prePassRenderer.getIndex(vA2[vLN017].type);
          if (v199 !== -1) {
            p301[vA2[vLN017].define] = true;
            p301[vA2[vLN017].index] = v199;
          } else {
            p301[vA2[vLN017].define] = false;
          }
        }
      } else {
        p301.PREPASS = false;
        for (let vLN018 = 0; vLN018 < vA2.length; vLN018++) {
          p301[vA2[vLN018].define] = false;
        }
      }
      if (p301.PREPASS != v198) {
        p301.markAsUnprocessed();
        p301.markAsImageProcessingDirty();
      }
    }
    function f30(p303, p304, p305, p306, ky = null, gC = false, AC = false) {
      if (ky) {
        vP2042.push("Light" + p303);
      }
      if (!gC) {
        p304.push("vLightData" + p303, "vLightDiffuse" + p303, "vLightSpecular" + p303, "vLightDirection" + p303, "vLightWidth" + p303, "vLightHeight" + p303, "vLightFalloff" + p303, "vLightGround" + p303, "lightMatrix" + p303, "shadowsInfo" + p303, "depthValues" + p303);
        p305.push("shadowTexture" + p303);
        p305.push("depthTexture" + p303);
        p304.push("viewFrustumZ" + p303, "cascadeBlendFactor" + p303, "lightSizeUVCorrection" + p303, "depthCorrection" + p303, "penumbraDarkness" + p303, "frustumLengths" + p303);
        if (p306) {
          p305.push("projectionLightTexture" + p303);
          p304.push("textureProjectionMatrix" + p303);
        }
        if (vP2044) {
          p305.push("iesLightTexture" + p303);
        }
      }
    }
    function f31(p307, p308, p309) {
      let v200;
      let v201;
      let v202 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 4;
      if (p307.uniformsNames) {
        const vP307 = p307;
        v200 = vP307.uniformsNames;
        v201 = vP307.uniformBuffersNames;
        p308 = vP307.samplers;
        p309 = vP307.defines;
        v202 = vP307.maxSimultaneousLights || 0;
      } else {
        v200 = p307;
        p308 ||= [];
      }
      for (let vLN019 = 0; vLN019 < v202 && p309["LIGHT" + vLN019]; vLN019++) {
        f30(vLN019, v200, p308, p309["PROJECTEDLIGHTTEXTURE" + vLN019], v201, false, p309["IESLIGHTTEXTURE" + vLN019]);
      }
      if (p309.NUM_MORPH_INFLUENCERS) {
        v200.push("morphTargetInfluences");
        v200.push("morphTargetCount");
      }
      if (p309.BAKED_VERTEX_ANIMATION_TEXTURE) {
        v200.push("bakedVertexAnimationSettings");
        v200.push("bakedVertexAnimationTextureSizeInverted");
        v200.push("bakedVertexAnimationTime");
        p308.push("bakedVertexAnimationTexture");
      }
    }
  },
  17290: (p310, p311, p312) => {
    p312.d(p311, {
      c: () => C8
    });
    var vP312 = p312(16973);
    var vP3122 = p312(17293);
    class C8 extends vP3122.e {
      constructor(p313, p314) {
        let v203 = !(arguments.length > 2) || arguments[2] === undefined || arguments[2];
        super(p313, p314, undefined, arguments.length > 3 && arguments[3] !== undefined && arguments[3]);
        this._normalMatrix = new vP312.Matrix();
        this._storeEffectOnSubMeshes = v203;
      }
      getEffect() {
        if (this._storeEffectOnSubMeshes) {
          return this._activeEffect;
        } else {
          return super.getEffect();
        }
      }
      isReady(p315, p316) {
        return !!p315 && (!this._storeEffectOnSubMeshes || !p315.wf || p315.wf.length === 0 || this.isReadyForSubMesh(p315, p315.wf[0], p316));
      }
      _isReadyForSubMesh(p317) {
        const v204 = p317.materialDefines;
        return !this.checkReadyOnEveryCall && !!p317.effect && !!v204 && v204._renderId === this.YL().getRenderId();
      }
      bindOnlyWorldMatrix(p318) {
        this._activeEffect.setMatrix("world", p318);
      }
      bindOnlyNormalMatrix(p319) {
        this._activeEffect.setMatrix("normalMatrix", p319);
      }
      bind(p320, p321) {
        if (p321) {
          this.bindForSubMesh(p320, p321, p321.wf[0]);
        }
      }
      _afterBind(p322, yC = null, IC) {
        super._afterBind(p322, yC, IC);
        this.YL()._cachedEffect = yC;
        if (IC) {
          p312._drawWrapper._forceRebindOnNextCall = false;
        } else {
          this._drawWrapper._forceRebindOnNextCall = false;
        }
      }
      _mustRebind(p323, p324, p325, fC = 1) {
        return p325._drawWrapper._forceRebindOnNextCall || p323.isCachedMaterialInvalid(this, p324, fC);
      }
      dispose(p326, p327, p328) {
        this._activeEffect = undefined;
        super.dispose(p326, p327, p328);
      }
    }
  },
  17323: (p329, p330, p331) => {
    p331.d(p330, {
      e: () => my,
      f: () => XC
    });
    var vP331 = p331(16960);
    var vP3312 = p331(16973);
    var vP3313 = p331(16965);
    class C9 {
      static extractMinAndMaxIndexed(p332, p333, p334, p335, p336, p337) {
        for (let vP334 = p334; vP334 < p334 + p335; vP334++) {
          const v205 = p333[vP334] * 3;
          const v206 = p332[v205];
          const v207 = p332[v205 + 1];
          const v208 = p332[v205 + 2];
          p336.minimizeInPlaceFromFloats(v206, v207, v208);
          p337.maximizeInPlaceFromFloats(v206, v207, v208);
        }
      }
      static extractMinAndMax(p338, p339, p340, p341, p342, p343) {
        for (let vP339 = p339, v209 = p339 * p341; vP339 < p339 + p340; vP339++, v209 += p341) {
          const v210 = p338[v209];
          const v211 = p338[v209 + 1];
          const v212 = p338[v209 + 2];
          p342.minimizeInPlaceFromFloats(v210, v211, v212);
          p343.maximizeInPlaceFromFloats(v210, v211, v212);
        }
      }
    }
    function my(p344, p345, p346, p347, gC = null) {
      const v213 = new vP3312.bL(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
      const v214 = new vP3312.bL(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
      C9.extractMinAndMaxIndexed(p344, p345, p346, p347, v213, v214);
      if (gC) {
        v213.x -= v213.x * vP3313.x + vP3313.y;
        v213.y -= v213.y * vP3313.x + vP3313.y;
        v213.z -= v213.z * vP3313.x + vP3313.y;
        v214.x += v214.x * vP3313.x + vP3313.y;
        v214.y += v214.y * vP3313.x + vP3313.y;
        v214.z += v214.z * vP3313.x + vP3313.y;
      }
      return {
        minimum: v213,
        maximum: v214
      };
    }
    function XC(p348, p349, p350, fC = null, gC) {
      const v215 = new vP3312.bL(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
      const v216 = new vP3312.bL(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
      gC ||= 3;
      C9.extractMinAndMax(p348, p349, p350, gC, v215, v216);
      if (fC) {
        v215.x -= v215.x * vP331.x + vP331.y;
        v215.y -= v215.y * vP331.x + vP331.y;
        v215.z -= v215.z * vP331.x + vP331.y;
        v216.x += v216.x * vP331.x + vP331.y;
        v216.y += v216.y * vP331.x + vP331.y;
        v216.z += v216.z * vP331.x + vP331.y;
      }
      return {
        minimum: v215,
        maximum: v216
      };
    }
    (0, vP331.d)([vP3313.h.filter(function () {
      for (var v217 = arguments.length, v218 = new Array(v217), vLN020 = 0; vLN020 < v217; vLN020++) {
        v218[vLN020] = arguments[vLN020];
      }
      let [v219, v220] = v218;
      return !Array.isArray(v219) && !Array.isArray(v220);
    })], C9, "extractMinAndMaxIndexed", null);
    (0, vP331.d)([vP3313.h.filter(function () {
      for (var v221 = arguments.length, v222 = new Array(v221), vLN021 = 0; vLN021 < v221; vLN021++) {
        v222[vLN021] = arguments[vLN021];
      }
      let [v223] = v222;
      return !Array.isArray(v223);
    })], C9, "extractMinAndMax", null);
  },
  17298: (p351, p352, p353) => {
    p353.d(p352, {
      e: () => C10
    });
    var vP353 = p353(17031);
    var vP3532 = p353(17304);
    var vP3533 = p353(17308);
    var vP3534 = p353(17323);
    var vP3535 = p353(17085);
    class C10 {
      get materialDefines() {
        if (this._mainDrawWrapperOverride) {
          return this._mainDrawWrapperOverride.defines;
        } else {
          return this._getDrawWrapper()?.defines;
        }
      }
      set materialDefines(p354) {
        (this._mainDrawWrapperOverride ?? this._getDrawWrapper(undefined, true)).defines = p354;
      }
      _getDrawWrapper(p355) {
        let v224 = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
        p355 = p355 ?? this._engine.currentRenderPassId;
        let v225 = this._drawWrappers[p355];
        if (!v225 && v224) {
          this._drawWrappers[p355] = v225 = new vP3535.e(this._mesh.YL().getEngine());
        }
        return v225;
      }
      _removeDrawWrapper(p356, _param, yC = false) {
        var v226;
        if (!(arguments.length > 1) || arguments[1] === undefined || !!arguments[1]) {
          if ((v226 = this._drawWrappers[p356]) !== null && v226 !== undefined) {
            v226.dispose(p352);
          }
        }
        this._drawWrappers[p356] = undefined;
      }
      get effect() {
        if (this._mainDrawWrapperOverride) {
          return this._mainDrawWrapperOverride.effect;
        } else {
          return this._getDrawWrapper()?.effect ?? null;
        }
      }
      get _drawWrapper() {
        return this._mainDrawWrapperOverride ?? this._getDrawWrapper(undefined, true);
      }
      get _drawWrapperOverride() {
        return this._mainDrawWrapperOverride;
      }
      _setMainDrawWrapperOverride(p357) {
        this._mainDrawWrapperOverride = p357;
      }
      setEffect(p358, yC = null, IC) {
        let v227 = !(arguments.length > 3) || arguments[3] === undefined || arguments[3];
        const v228 = this._drawWrapper;
        v228.setEffect(p358, yC, v227);
        if (IC !== undefined) {
          v228.materialContext = p353;
        }
        if (!p358) {
          v228.defines = null;
          v228.materialContext = undefined;
        }
      }
      resetDrawCache(p359, yC = false) {
        if (this._drawWrappers) {
          if (p359 !== undefined) {
            this._removeDrawWrapper(p359, true, yC);
            return;
          }
          for (const v229 of this._drawWrappers) {
            if (v229 !== null && v229 !== undefined) {
              v229.dispose(p352);
            }
          }
        }
        this._drawWrappers = [];
      }
      static AddToMesh(p360, p361, p362, p363, p364, p365, p366) {
        return new C10(p360, p361, p362, p363, p364, p365, p366, !(arguments.length > 7) || arguments[7] === undefined || arguments[7]);
      }
      constructor(p367, p368, p369, p370, p371, p372, p373) {
        let v230 = !(arguments.length > 7) || arguments[7] === undefined || arguments[7];
        let v231 = !(arguments.length > 8) || arguments[8] === undefined || arguments[8];
        this.materialIndex = p367;
        this.verticesStart = p368;
        this.verticesCount = p369;
        this.indexStart = p370;
        this.indexCount = p371;
        this._mainDrawWrapperOverride = null;
        this._linesIndexCount = 0;
        this._linesIndexBuffer = null;
        this._lastColliderWorldVertices = null;
        this._lastColliderTransformMatrix = null;
        this._wasDispatched = false;
        this._renderId = 0;
        this._alphaIndex = 0;
        this._distanceToCamera = 0;
        this._currentMaterial = null;
        this._mesh = p372;
        this._renderingMesh = p373 || p372;
        if (v231) {
          p372.wf.push(this);
        }
        this._engine = this._mesh.YL().getEngine();
        this.resetDrawCache();
        this._trianglePlanes = [];
        this._id = p372.wf.length - 1;
        if (v230) {
          this.refreshBoundingInfo();
          p372.hf(true);
        }
      }
      get IsGlobal() {
        return this.verticesStart === 0 && this.verticesCount === this._mesh.getTotalVertices() && this.indexStart === 0 && this.indexCount === this._mesh.getTotalIndices();
      }
      getBoundingInfo() {
        if (this.IsGlobal || this._mesh.hasThinInstances) {
          return this._mesh.getBoundingInfo();
        } else {
          return this._boundingInfo;
        }
      }
      setBoundingInfo(p374) {
        this._boundingInfo = p374;
        return this;
      }
      getMesh() {
        return this._mesh;
      }
      getRenderingMesh() {
        return this._renderingMesh;
      }
      getReplacementMesh() {
        if (this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh) {
          return this._mesh;
        } else {
          return null;
        }
      }
      getEffectiveMesh() {
        const v232 = this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : null;
        return v232 || this._renderingMesh;
      }
      kI() {
        let v233 = !(arguments.length > 0) || arguments[0] === undefined || arguments[0];
        const v234 = this._renderingMesh.getMaterialForRenderPass(this._engine.currentRenderPassId) ?? this._renderingMesh.material;
        if (!v234) {
          if (v233 && this._mesh.YL()._hasDefaultMaterial) {
            return this._mesh.YL().defaultMaterial;
          } else {
            return null;
          }
        }
        if (this._isMultiMaterial(v234)) {
          const v235 = v234.getSubMaterial(this.materialIndex);
          if (this._currentMaterial !== v235) {
            this._currentMaterial = v235;
            this.resetDrawCache();
          }
          return v235;
        }
        return v234;
      }
      _isMultiMaterial(p375) {
        return p375.getSubMaterial !== undefined;
      }
      refreshBoundingInfo(CC = null) {
        this._lastColliderWorldVertices = null;
        if (this.IsGlobal || !this._renderingMesh || !this._renderingMesh.Qf) {
          return this;
        }
        CC ||= this._renderingMesh.getVerticesData(vP353.e.PositionKind);
        if (!CC) {
          this._boundingInfo = this._mesh.getBoundingInfo();
          return this;
        }
        const v236 = this._renderingMesh.Mf();
        let v237;
        if (this.indexStart === 0 && this.indexCount === v236.length) {
          const v238 = this._renderingMesh.getBoundingInfo();
          v237 = {
            minimum: v238.minimum.clone(),
            maximum: v238.maximum.clone()
          };
        } else {
          v237 = (0, vP3534.e)(CC, v236, this.indexStart, this.indexCount, this._renderingMesh.Qf.boundingBias);
        }
        if (this._boundingInfo) {
          this._boundingInfo.reConstruct(v237.minimum, v237.maximum);
        } else {
          this._boundingInfo = new vP3533.e(v237.minimum, v237.maximum);
        }
        return this;
      }
      _checkCollision(p376) {
        return this.getBoundingInfo()._checkCollision(p376);
      }
      updateBoundingInfo(p377) {
        let v239 = this.getBoundingInfo();
        if (!v239) {
          this.refreshBoundingInfo();
          v239 = this.getBoundingInfo();
        }
        if (v239) {
          v239.update(p377);
        }
        return this;
      }
      isInFrustum(p378) {
        const v240 = this.getBoundingInfo();
        return !!v240 && v240.isInFrustum(p378, this._mesh.cullingStrategy);
      }
      isCompletelyInFrustum(p379) {
        const v241 = this.getBoundingInfo();
        return !!v241 && v241.isCompletelyInFrustum(p379);
      }
      render(p380) {
        this._renderingMesh.render(this, p380, this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : undefined);
        return this;
      }
      _getLinesIndexBuffer(p381, p382) {
        if (!this._linesIndexBuffer) {
          const v242 = Math.floor(this.indexCount / 3) * 6;
          const v243 = this.verticesStart + this.verticesCount > 65535 ? new Uint32Array(v242) : new Uint16Array(v242);
          let vLN022 = 0;
          if (p381.length === 0) {
            for (let v244 = this.indexStart; v244 < this.indexStart + this.indexCount; v244 += 3) {
              v243[vLN022++] = v244;
              v243[vLN022++] = v244 + 1;
              v243[vLN022++] = v244 + 1;
              v243[vLN022++] = v244 + 2;
              v243[vLN022++] = v244 + 2;
              v243[vLN022++] = v244;
            }
          } else {
            for (let v245 = this.indexStart; v245 < this.indexStart + this.indexCount; v245 += 3) {
              v243[vLN022++] = p381[v245];
              v243[vLN022++] = p381[v245 + 1];
              v243[vLN022++] = p381[v245 + 1];
              v243[vLN022++] = p381[v245 + 2];
              v243[vLN022++] = p381[v245 + 2];
              v243[vLN022++] = p381[v245];
            }
          }
          this._linesIndexBuffer = p382.createIndexBuffer(v243);
          this._linesIndexCount = v243.length;
        }
        return this._linesIndexBuffer;
      }
      canIntersects(p383) {
        const v246 = this.getBoundingInfo();
        return !!v246 && p383.intersectsBox(v246.boundingBox);
      }
      intersects(p384, p385, p386, p387, p388) {
        const v247 = this.kI();
        if (!v247) {
          return null;
        }
        let vLN3 = 3;
        let v248 = false;
        switch (v247.fillMode) {
          case 3:
          case 5:
          case 6:
          case 8:
            return null;
          case 7:
            vLN3 = 1;
            v248 = true;
        }
        if (v247.fillMode === 4) {
          if (p386.length) {
            return this._intersectLines(p384, p385, p386, this._mesh.intersectionThreshold, p387);
          } else {
            return this._intersectUnIndexedLines(p384, p385, p386, this._mesh.intersectionThreshold, p387);
          }
        } else if (!p386.length && this._mesh._unIndexed) {
          return this._intersectUnIndexedTriangles(p384, p385, p386, p387, p388);
        } else {
          return this._intersectTriangles(p384, p385, p386, vLN3, v248, p387, p388);
        }
      }
      _intersectLines(p389, p390, p391, p392, p393) {
        let v249 = null;
        for (let v250 = this.indexStart; v250 < this.indexStart + this.indexCount; v250 += 2) {
          const v251 = p390[p391[v250]];
          const v252 = p390[p391[v250 + 1]];
          const v253 = p389.intersectionSegment(v251, v252, p392);
          if (!(v253 < 0) && (p393 || !v249 || v253 < v249.distance) && (v249 = new vP3532.c(null, null, v253), v249.faceId = v250 / 2, p393)) {
            break;
          }
        }
        return v249;
      }
      _intersectUnIndexedLines(p394, p395, p396, p397, p398) {
        let v254 = null;
        for (let v255 = this.verticesStart; v255 < this.verticesStart + this.verticesCount; v255 += 2) {
          const v256 = p395[v255];
          const v257 = p395[v255 + 1];
          const v258 = p394.intersectionSegment(v256, v257, p397);
          if (!(v258 < 0) && (p398 || !v254 || v258 < v254.distance) && (v254 = new vP3532.c(null, null, v258), v254.faceId = v255 / 2, p398)) {
            break;
          }
        }
        return v254;
      }
      _intersectTriangles(p399, p400, p401, p402, p403, p404, p405) {
        let v259 = null;
        let v260 = -1;
        for (let v261 = this.indexStart; v261 < this.indexStart + this.indexCount - (3 - p402); v261 += p402) {
          v260++;
          const v262 = p401[v261];
          const v263 = p401[v261 + 1];
          const v264 = p401[v261 + 2];
          if (p403 && v264 === 4294967295) {
            v261 += 2;
            continue;
          }
          const v265 = p400[v262];
          const v266 = p400[v263];
          const v267 = p400[v264];
          if (!v265 || !v266 || !v267) {
            continue;
          }
          if (p405 && !p405(v265, v266, v267, p399, v262, v263, v264)) {
            continue;
          }
          const v268 = p399.intersectsTriangle(v265, v266, v267);
          if (v268) {
            if (v268.distance < 0) {
              continue;
            }
            if ((p404 || !v259 || v268.distance < v259.distance) && (v259 = v268, v259.faceId = v260, p404)) {
              break;
            }
          }
        }
        return v259;
      }
      _intersectUnIndexedTriangles(p406, p407, p408, p409, p410) {
        let v269 = null;
        for (let v270 = this.verticesStart; v270 < this.verticesStart + this.verticesCount; v270 += 3) {
          const v271 = p407[v270];
          const v272 = p407[v270 + 1];
          const v273 = p407[v270 + 2];
          if (p410 && !p410(v271, v272, v273, p406, -1, -1, -1)) {
            continue;
          }
          const v274 = p406.intersectsTriangle(v271, v272, v273);
          if (v274) {
            if (v274.distance < 0) {
              continue;
            }
            if ((p409 || !v269 || v274.distance < v269.distance) && (v269 = v274, v269.faceId = v270 / 3, p409)) {
              break;
            }
          }
        }
        return v269;
      }
      _rebuild() {
        this._linesIndexBuffer &&= null;
      }
      clone(p411, p412) {
        const v275 = new C10(this.materialIndex, this.verticesStart, this.verticesCount, this.indexStart, this.indexCount, p411, p412, false);
        if (!this.IsGlobal) {
          const v276 = this.getBoundingInfo();
          if (!v276) {
            return v275;
          }
          v275._boundingInfo = new vP3533.e(v276.minimum, v276.maximum);
        }
        return v275;
      }
      dispose(CC = false) {
        if (this._linesIndexBuffer) {
          this._mesh.YL().getEngine()._releaseBuffer(this._linesIndexBuffer);
          this._linesIndexBuffer = null;
        }
        const v277 = this._mesh.wf.indexOf(this);
        this._mesh.wf.splice(v277, 1);
        this.resetDrawCache(undefined, CC);
      }
      getClassName() {
        return "SubMesh";
      }
      static CreateFromIndices(p413, p414, p415, p416, p417) {
        let v278 = !(arguments.length > 5) || arguments[5] === undefined || arguments[5];
        let v279 = Number.MAX_VALUE;
        let v280 = -Number.MAX_VALUE;
        const v281 = (p417 || p416).Mf();
        for (let vP414 = p414; vP414 < p414 + p415; vP414++) {
          const v282 = v281[vP414];
          if (v282 < v279) {
            v279 = v282;
          }
          if (v282 > v280) {
            v280 = v282;
          }
        }
        return new C10(p413, v279, v280 - v279 + 1, p414, p415, p416, p417, v278);
      }
    }
  }
};
//# sourceMappingURL=pz8l4l.24.87d4c96f.chunk.js.map
//# debugId=5b5076f6-49c5-5cf0-8d21-fbfae0cc85c1