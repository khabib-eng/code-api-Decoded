(function () {
  try {
    var v = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : {};
    var v2 = new v.Error().stack;
    if (v2) {
      v._sentryDebugIds = v._sentryDebugIds || {};
      v._sentryDebugIds[v2] = "fea6b739-b5a0-59f7-9d80-a0bcbc678869";
    }
  } catch (e2) {}
})();
export const id = 14;
export const ids = [14];
export const modules = {
  16977: (p, p2, p3) => {
    p3.d(p2, {
      b: () => vLN0001,
      d: () => v4,
      h: () => v3,
      i: () => vLN22
    });
    const v3 = 1 / 2.2;
    const vLN22 = 2.2;
    const v4 = (1 + Math.sqrt(5)) / 2;
    const vLN0001 = 0.001;
  },
  16988: (p4, p5, p6) => {
    function f(p7) {
      return parseInt(p7.toString().replace(/\W/g, ""));
    }
    function f2(p8, p9, IC = 1.401298e-45) {
      return Math.abs(p8 - p9) <= IC;
    }
    function f3(p10, p11, p12, fC = 1.401298e-45) {
      return p10 < p11 - fC || p10 > p12 + fC;
    }
    function f4(p13, p14) {
      if (p13 === p14) {
        return p13;
      } else {
        return Math.random() * (p14 - p13) + p13;
      }
    }
    function f5(p15, p16, p17) {
      return p15 + (p16 - p15) * p17;
    }
    function f6(p18, p19, p20) {
      let vOC = f14(p19 - p18, 360);
      if (vOC > 180) {
        vOC -= 360;
      }
      return p18 + vOC * f10(p20);
    }
    function f7(p21, p22, p23) {
      let vLN0 = 0;
      vLN0 = p21 != p22 ? f10((p23 - p21) / (p22 - p21)) : 0;
      return vLN0;
    }
    function f8(p24, p25, p26, p27, p28) {
      const v5 = p28 * p28;
      const v6 = p28 * v5;
      return p24 * (v6 * 2 - v5 * 3 + 1) + p26 * (v6 * -2 + v5 * 3) + p25 * (v6 - v5 * 2 + p28) + p27 * (v6 - v5);
    }
    function f9(p29, p30, p31, p32, p33) {
      const v7 = p33 * p33;
      return (v7 - p33) * 6 * p29 + (v7 * 3 - p33 * 4 + 1) * p30 + (-v7 + p33) * 6 * p31 + (v7 * 3 - p33 * 2) * p32;
    }
    function f10(p34, yC = 0, IC = 1) {
      return Math.min(IC, Math.max(yC, p34));
    }
    function f11(p35) {
      return p35 -= Math.PI * 2 * Math.floor((p35 + Math.PI) / (Math.PI * 2));
    }
    function f12(p36) {
      const v8 = p36.toString(16);
      if (p36 <= 15) {
        return ("0" + v8).toUpperCase();
      } else {
        return v8.toUpperCase();
      }
    }
    function f13(p37) {
      if (Math.log2) {
        return Math.floor(Math.log2(p37));
      }
      if (p37 < 0) {
        return NaN;
      }
      if (p37 === 0) {
        return -Infinity;
      }
      let vLN02 = 0;
      if (p37 < 1) {
        while (p37 < 1) {
          vLN02++;
          p37 *= 2;
        }
        vLN02 = -vLN02;
      } else if (p37 > 1) {
        while (p37 > 1) {
          vLN02++;
          p37 = Math.floor(p37 / 2);
        }
      }
      return vLN02;
    }
    function f14(p38, p39) {
      return p38 - Math.floor(p38 / p39) * p39;
    }
    function f15(p40, p41, p42) {
      return (p40 - p41) / (p42 - p41);
    }
    function f16(p43, p44, p45) {
      return p43 * (p45 - p44) + p44;
    }
    function f17(p46, p47) {
      let vF14 = f14(p47 - p46, 360);
      if (vF14 > 180) {
        vF14 -= 360;
      }
      return vF14;
    }
    function f18(p48, p49) {
      const vF142 = f14(p48, p49 * 2);
      return p49 - Math.abs(vF142 - p49);
    }
    function f19(p50, p51, p52) {
      let vF10 = f10(p52);
      vF10 = vF10 * -2 * vF10 * vF10 + vF10 * 3 * vF10;
      return p51 * vF10 + p50 * (1 - vF10);
    }
    function f20(p53, p54, p55) {
      let vLN03 = 0;
      vLN03 = Math.abs(p54 - p53) <= p55 ? p54 : p53 + Math.sign(p54 - p53) * p55;
      return vLN03;
    }
    function f21(p56, p57, p58) {
      const vF17 = f17(p56, p57);
      let vLN04 = 0;
      vLN04 = -p58 < vF17 && vF17 < p58 ? p57 : f20(p56, p57 = p56 + vF17, p58);
      return vLN04;
    }
    function f22(p59, p60, p61) {
      return (p59 - p60) / (p61 - p60);
    }
    function f23(p62, p63, p64) {
      return (p64 - p63) * p62 + p63;
    }
    function f24(p65, p66) {
      const v9 = p65 % p66;
      if (v9 === 0) {
        return p66;
      } else {
        return f24(p66, v9);
      }
    }
    p6.r(p5);
    p6.d(p5, {
      Clamp: () => f10,
      DeltaAngle: () => f17,
      Denormalize: () => f16,
      ExtractAsInt: () => f,
      Hermite: () => f8,
      Hermite1stDerivative: () => f9,
      HighestCommonFactor: () => f24,
      ILog2: () => f13,
      InverseLerp: () => f7,
      Lerp: () => f5,
      LerpAngle: () => f6,
      MoveTowards: () => f20,
      MoveTowardsAngle: () => f21,
      Normalize: () => f15,
      NormalizeRadians: () => f11,
      OutsideRange: () => f3,
      PercentToRange: () => f23,
      PingPong: () => f18,
      RandomRange: () => f4,
      RangeToPercent: () => f22,
      Repeat: () => f14,
      SmoothStep: () => f19,
      ToHex: () => f12,
      WithinEpsilon: () => f2
    });
  },
  16973: (p67, p68, p69) => {
    p69.r(p68);
    p69.d(p68, {
      Matrix: () => C6,
      Quaternion: () => C5,
      TmpVectors: () => C8,
      Vector2: () => C2,
      bL: () => C3,
      Vector4: () => C4
    });
    var vP69 = p69(16977);
    var vP692 = p69(16986);
    var vP693 = p69(16927);
    var vP694 = p69(16905);
    var vP695 = p69(16837);
    var vP696 = p69(16988);
    class C {}
    function LC(p70, p71, p72, fC = 0) {
      const v10 = p70.cf();
      const v11 = p71.cf();
      const v12 = v10[0];
      const v13 = v10[1];
      const v14 = v10[2];
      const v15 = v10[3];
      const v16 = v10[4];
      const v17 = v10[5];
      const v18 = v10[6];
      const v19 = v10[7];
      const v20 = v10[8];
      const v21 = v10[9];
      const v22 = v10[10];
      const v23 = v10[11];
      const v24 = v10[12];
      const v25 = v10[13];
      const v26 = v10[14];
      const v27 = v10[15];
      const v28 = v11[0];
      const v29 = v11[1];
      const v30 = v11[2];
      const v31 = v11[3];
      const v32 = v11[4];
      const v33 = v11[5];
      const v34 = v11[6];
      const v35 = v11[7];
      const v36 = v11[8];
      const v37 = v11[9];
      const v38 = v11[10];
      const v39 = v11[11];
      const v40 = v11[12];
      const v41 = v11[13];
      const v42 = v11[14];
      const v43 = v11[15];
      p72[fC] = v12 * v28 + v13 * v32 + v14 * v36 + v15 * v40;
      p72[fC + 1] = v12 * v29 + v13 * v33 + v14 * v37 + v15 * v41;
      p72[fC + 2] = v12 * v30 + v13 * v34 + v14 * v38 + v15 * v42;
      p72[fC + 3] = v12 * v31 + v13 * v35 + v14 * v39 + v15 * v43;
      p72[fC + 4] = v16 * v28 + v17 * v32 + v18 * v36 + v19 * v40;
      p72[fC + 5] = v16 * v29 + v17 * v33 + v18 * v37 + v19 * v41;
      p72[fC + 6] = v16 * v30 + v17 * v34 + v18 * v38 + v19 * v42;
      p72[fC + 7] = v16 * v31 + v17 * v35 + v18 * v39 + v19 * v43;
      p72[fC + 8] = v20 * v28 + v21 * v32 + v22 * v36 + v23 * v40;
      p72[fC + 9] = v20 * v29 + v21 * v33 + v22 * v37 + v23 * v41;
      p72[fC + 10] = v20 * v30 + v21 * v34 + v22 * v38 + v23 * v42;
      p72[fC + 11] = v20 * v31 + v21 * v35 + v22 * v39 + v23 * v43;
      p72[fC + 12] = v24 * v28 + v25 * v32 + v26 * v36 + v27 * v40;
      p72[fC + 13] = v24 * v29 + v25 * v33 + v26 * v37 + v27 * v41;
      p72[fC + 14] = v24 * v30 + v25 * v34 + v26 * v38 + v27 * v42;
      p72[fC + 15] = v24 * v31 + v25 * v35 + v26 * v39 + v27 * v43;
    }
    function f26(p73, p74, IC = 0) {
      const v44 = p73.cf();
      p74[IC] = v44[0];
      p74[IC + 1] = v44[1];
      p74[IC + 2] = v44[2];
      p74[IC + 3] = v44[3];
      p74[IC + 4] = v44[4];
      p74[IC + 5] = v44[5];
      p74[IC + 6] = v44[6];
      p74[IC + 7] = v44[7];
      p74[IC + 8] = v44[8];
      p74[IC + 9] = v44[9];
      p74[IC + 10] = v44[10];
      p74[IC + 11] = v44[11];
      p74[IC + 12] = v44[12];
      p74[IC + 13] = v44[13];
      p74[IC + 14] = v44[14];
      p74[IC + 15] = v44[15];
    }
    function bC(p75, p76) {
      const v45 = p75.cf();
      const v46 = v45[0];
      const v47 = v45[1];
      const v48 = v45[2];
      const v49 = v45[3];
      const v50 = v45[4];
      const v51 = v45[5];
      const v52 = v45[6];
      const v53 = v45[7];
      const v54 = v45[8];
      const v55 = v45[9];
      const v56 = v45[10];
      const v57 = v45[11];
      const v58 = v45[12];
      const v59 = v45[13];
      const v60 = v45[14];
      const v61 = v45[15];
      const v62 = v56 * v61 - v60 * v57;
      const v63 = v55 * v61 - v59 * v57;
      const v64 = v55 * v60 - v59 * v56;
      const v65 = v54 * v61 - v58 * v57;
      const v66 = v54 * v60 - v56 * v58;
      const v67 = v54 * v59 - v58 * v55;
      const v68 = +(v51 * v62 - v52 * v63 + v53 * v64);
      const v69 = -(v50 * v62 - v52 * v65 + v53 * v66);
      const v70 = +(v50 * v63 - v51 * v65 + v53 * v67);
      const v71 = -(v50 * v64 - v51 * v66 + v52 * v67);
      const v72 = v46 * v68 + v47 * v69 + v48 * v70 + v49 * v71;
      if (v72 === 0) {
        return false;
      }
      const v73 = 1 / v72;
      const v74 = v52 * v61 - v60 * v53;
      const v75 = v51 * v61 - v59 * v53;
      const v76 = v51 * v60 - v59 * v52;
      const v77 = v50 * v61 - v58 * v53;
      const v78 = v50 * v60 - v58 * v52;
      const v79 = v50 * v59 - v58 * v51;
      const v80 = v52 * v57 - v56 * v53;
      const v81 = v51 * v57 - v55 * v53;
      const v82 = v51 * v56 - v55 * v52;
      const v83 = v50 * v57 - v54 * v53;
      const v84 = v50 * v56 - v54 * v52;
      const v85 = v50 * v55 - v54 * v51;
      const v86 = -(v47 * v62 - v48 * v63 + v49 * v64);
      const v87 = +(v46 * v62 - v48 * v65 + v49 * v66);
      const v88 = -(v46 * v63 - v47 * v65 + v49 * v67);
      const v89 = +(v46 * v64 - v47 * v66 + v48 * v67);
      const v90 = +(v47 * v74 - v48 * v75 + v49 * v76);
      const v91 = -(v46 * v74 - v48 * v77 + v49 * v78);
      const v92 = +(v46 * v75 - v47 * v77 + v49 * v79);
      const v93 = -(v46 * v76 - v47 * v78 + v48 * v79);
      const v94 = -(v47 * v80 - v48 * v81 + v49 * v82);
      const v95 = +(v46 * v80 - v48 * v83 + v49 * v84);
      const v96 = -(v46 * v81 - v47 * v83 + v49 * v85);
      const v97 = +(v46 * v82 - v47 * v84 + v48 * v85);
      p76[0] = v68 * v73;
      p76[1] = v86 * v73;
      p76[2] = v90 * v73;
      p76[3] = v94 * v73;
      p76[4] = v69 * v73;
      p76[5] = v87 * v73;
      p76[6] = v91 * v73;
      p76[7] = v95 * v73;
      p76[8] = v70 * v73;
      p76[9] = v88 * v73;
      p76[10] = v92 * v73;
      p76[11] = v96 * v73;
      p76[12] = v71 * v73;
      p76[13] = v89 * v73;
      p76[14] = v93 * v73;
      p76[15] = v97 * v73;
      return true;
    }
    C._UpdateFlagSeed = 0;
    const vF = p77 => parseInt(p77.toString().replace(/\W/g, ""));
    class C2 {
      constructor(CC = 0, yC = 0) {
        this.x = CC;
        this.y = yC;
      }
      toString() {
        return `{X: ${this.x} Y: ${this.y}}`;
      }
      getClassName() {
        return "Vector2";
      }
      getHashCode() {
        let vVF = vF(this.x);
        vVF = vVF * 397 ^ vF(this.y);
        return vVF;
      }
      toArray(p78, yC = 0) {
        p78[yC] = this.x;
        p78[yC + 1] = this.y;
        return this;
      }
      LL(p79, yC = 0) {
        C2.FromArrayToRef(p79, yC, this);
        return this;
      }
      cf() {
        return [this.x, this.y];
      }
      fC(p80) {
        this.x = p80.x;
        this.y = p80.y;
        return this;
      }
      jg(p81, p82) {
        this.x = p81;
        this.y = p82;
        return this;
      }
      set(p83, p84) {
        return this.jg(p83, p84);
      }
      gg(p85) {
        return this.jg(p85, p85);
      }
      add(p86) {
        return new C2(this.x + p86.x, this.y + p86.y);
      }
      addToRef(p87, p88) {
        p88.x = this.x + p87.x;
        p88.y = this.y + p87.y;
        return p88;
      }
      addInPlace(p89) {
        this.x += p89.x;
        this.y += p89.y;
        return this;
      }
      addInPlaceFromFloats(p90, p91) {
        this.x += p90;
        this.y += p91;
        return this;
      }
      addVector3(p92) {
        return new C2(this.x + p92.x, this.y + p92.y);
      }
      Wy(p93) {
        return new C2(this.x - p93.x, this.y - p93.y);
      }
      subtractToRef(p94, p95) {
        p95.x = this.x - p94.x;
        p95.y = this.y - p94.y;
        return p95;
      }
      Ze(p96) {
        this.x -= p96.x;
        this.y -= p96.y;
        return this;
      }
      multiplyInPlace(p97) {
        this.x *= p97.x;
        this.y *= p97.y;
        return this;
      }
      multiply(p98) {
        return new C2(this.x * p98.x, this.y * p98.y);
      }
      multiplyToRef(p99, p100) {
        p100.x = this.x * p99.x;
        p100.y = this.y * p99.y;
        return p100;
      }
      multiplyByFloats(p101, p102) {
        return new C2(this.x * p101, this.y * p102);
      }
      divide(p103) {
        return new C2(this.x / p103.x, this.y / p103.y);
      }
      divideToRef(p104, p105) {
        p105.x = this.x / p104.x;
        p105.y = this.y / p104.y;
        return p105;
      }
      divideInPlace(p106) {
        this.x = this.x / p106.x;
        this.y = this.y / p106.y;
        return this;
      }
      minimizeInPlace(p107) {
        return this.minimizeInPlaceFromFloats(p107.x, p107.y);
      }
      maximizeInPlace(p108) {
        return this.maximizeInPlaceFromFloats(p108.x, p108.y);
      }
      minimizeInPlaceFromFloats(p109, p110) {
        this.x = Math.min(p109, this.x);
        this.y = Math.min(p110, this.y);
        return this;
      }
      maximizeInPlaceFromFloats(p111, p112) {
        this.x = Math.max(p111, this.x);
        this.y = Math.max(p112, this.y);
        return this;
      }
      subtractFromFloats(p113, p114) {
        return new C2(this.x - p113, this.y - p114);
      }
      subtractFromFloatsToRef(p115, p116, p117) {
        p117.x = this.x - p115;
        p117.y = this.y - p116;
        return p117;
      }
      negate() {
        return new C2(-this.x, -this.y);
      }
      negateInPlace() {
        this.x *= -1;
        this.y *= -1;
        return this;
      }
      negateToRef(p118) {
        p118.x = -this.x;
        p118.y = -this.y;
        return p118;
      }
      scaleInPlace(p119) {
        this.x *= p119;
        this.y *= p119;
        return this;
      }
      scale(p120) {
        return new C2(this.x * p120, this.y * p120);
      }
      scaleToRef(p121, p122) {
        p122.x = this.x * p121;
        p122.y = this.y * p121;
        return p122;
      }
      scaleAndAddToRef(p123, p124) {
        p124.x += this.x * p123;
        p124.y += this.y * p123;
        return p124;
      }
      equals(p125) {
        return p125 && this.x === p125.x && this.y === p125.y;
      }
      equalsWithEpsilon(p126, yC = vP69.b) {
        return p126 && (0, vP696.WithinEpsilon)(this.x, p126.x, yC) && (0, vP696.WithinEpsilon)(this.y, p126.y, yC);
      }
      equalsToFloats(p127, p128) {
        return this.x === p127 && this.y === p128;
      }
      floor() {
        return new C2(Math.floor(this.x), Math.floor(this.y));
      }
      floorToRef(p129) {
        p129.x = Math.floor(this.x);
        p129.y = Math.floor(this.y);
        return p129;
      }
      fract() {
        return new C2(this.x - Math.floor(this.x), this.y - Math.floor(this.y));
      }
      fractToRef(p130) {
        p130.x = this.x - Math.floor(this.x);
        p130.y = this.y - Math.floor(this.y);
        return p130;
      }
      rotate(p131) {
        return this.rotateToRef(p131, new C2());
      }
      rotateToRef(p132, p133) {
        const v98 = Math.cos(p132);
        const v99 = Math.sin(p132);
        p133.x = v98 * this.x - v99 * this.y;
        p133.y = v99 * this.x + v98 * this.y;
        return p133;
      }
      length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
      }
      lengthSquared() {
        return this.x * this.x + this.y * this.y;
      }
      normalize() {
        return this.normalizeFromLength(this.length());
      }
      normalizeFromLength(p134) {
        if (p134 === 0 || p134 === 1) {
          return this;
        } else {
          return this.scaleInPlace(1 / p134);
        }
      }
      normalizeToNew() {
        const v100 = new C2();
        this.normalizeToRef(v100);
        return v100;
      }
      normalizeToRef(p135) {
        const v101 = this.length();
        if (v101 === 0) {
          p135.x = this.x;
          p135.y = this.y;
        }
        return this.scaleToRef(1 / v101, p135);
      }
      clone() {
        return new C2(this.x, this.y);
      }
      dot(p136) {
        return this.x * p136.x + this.y * p136.y;
      }
      static Zero() {
        return new C2(0, 0);
      }
      static One() {
        return new C2(1, 1);
      }
      static Random(CC = 0, yC = 1) {
        return new C2((0, vP696.RandomRange)(CC, yC), (0, vP696.RandomRange)(CC, yC));
      }
      static RandomToRef(CC = 0, yC = 1) {
        return (arguments.length > 2 ? arguments[2] : undefined).jg((0, vP696.RandomRange)(CC, yC), (0, vP696.RandomRange)(CC, yC));
      }
      static get ZeroReadOnly() {
        return C2._ZeroReadOnly;
      }
      static OL(p137, yC = 0) {
        return new C2(p137[yC], p137[yC + 1]);
      }
      static FromArrayToRef(p138, p139, p140) {
        p140.x = p138[p139];
        p140.y = p138[p139 + 1];
        return p140;
      }
      static FromFloatsToRef(p141, p142, p143) {
        p143.jg(p141, p142);
        return p143;
      }
      static CatmullRom(p144, p145, p146, p147, p148) {
        const v102 = p148 * p148;
        const v103 = p148 * v102;
        const v104 = (p145.x * 2 + (-p144.x + p146.x) * p148 + (p144.x * 2 - p145.x * 5 + p146.x * 4 - p147.x) * v102 + (-p144.x + p145.x * 3 - p146.x * 3 + p147.x) * v103) * 0.5;
        const v105 = (p145.y * 2 + (-p144.y + p146.y) * p148 + (p144.y * 2 - p145.y * 5 + p146.y * 4 - p147.y) * v102 + (-p144.y + p145.y * 3 - p146.y * 3 + p147.y) * v103) * 0.5;
        return new C2(v104, v105);
      }
      static ClampToRef(p149, p150, p151, p152) {
        p152.x = (0, vP696.Clamp)(p149.x, p150.x, p151.x);
        p152.y = (0, vP696.Clamp)(p149.y, p150.y, p151.y);
        return p152;
      }
      static Clamp(p153, p154, p155) {
        const v106 = (0, vP696.Clamp)(p153.x, p154.x, p155.x);
        const v107 = (0, vP696.Clamp)(p153.y, p154.y, p155.y);
        return new C2(v106, v107);
      }
      static Hermite(p156, p157, p158, p159, p160) {
        const v108 = p160 * p160;
        const v109 = p160 * v108;
        const v110 = v109 * 2 - v108 * 3 + 1;
        const v111 = v109 * -2 + v108 * 3;
        const v112 = v109 - v108 * 2 + p160;
        const v113 = v109 - v108;
        const v114 = p156.x * v110 + p158.x * v111 + p157.x * v112 + p159.x * v113;
        const v115 = p156.y * v110 + p158.y * v111 + p157.y * v112 + p159.y * v113;
        return new C2(v114, v115);
      }
      static Hermite1stDerivative(p161, p162, p163, p164, p165) {
        return this.Hermite1stDerivativeToRef(p161, p162, p163, p164, p165, new C2());
      }
      static Hermite1stDerivativeToRef(p166, p167, p168, p169, p170, p171) {
        const v116 = p170 * p170;
        p171.x = (v116 - p170) * 6 * p166.x + (v116 * 3 - p170 * 4 + 1) * p167.x + (-v116 + p170) * 6 * p168.x + (v116 * 3 - p170 * 2) * p169.x;
        p171.y = (v116 - p170) * 6 * p166.y + (v116 * 3 - p170 * 4 + 1) * p167.y + (-v116 + p170) * 6 * p168.y + (v116 * 3 - p170 * 2) * p169.y;
        return p171;
      }
      static Lerp(p172, p173, p174) {
        return C2.LerpToRef(p172, p173, p174, new C2());
      }
      static LerpToRef(p175, p176, p177, p178) {
        p178.x = p175.x + (p176.x - p175.x) * p177;
        p178.y = p175.y + (p176.y - p175.y) * p177;
        return p178;
      }
      static Dot(p179, p180) {
        return p179.x * p180.x + p179.y * p180.y;
      }
      static Normalize(p181) {
        return C2.NormalizeToRef(p181, new C2());
      }
      static NormalizeToRef(p182, p183) {
        p182.normalizeToRef(p183);
        return p183;
      }
      static Minimize(p184, p185) {
        const v117 = p184.x < p185.x ? p184.x : p185.x;
        const v118 = p184.y < p185.y ? p184.y : p185.y;
        return new C2(v117, v118);
      }
      static Maximize(p186, p187) {
        const v119 = p186.x > p187.x ? p186.x : p187.x;
        const v120 = p186.y > p187.y ? p186.y : p187.y;
        return new C2(v119, v120);
      }
      static Transform(p188, p189) {
        return C2.TransformToRef(p188, p189, new C2());
      }
      static TransformToRef(p190, p191, p192) {
        const v121 = p191.m;
        const v122 = p190.x * v121[0] + p190.y * v121[4] + v121[12];
        const v123 = p190.x * v121[1] + p190.y * v121[5] + v121[13];
        p192.x = v122;
        p192.y = v123;
        return p192;
      }
      static PointInTriangle(p193, p194, p195, p196) {
        const v124 = (-p195.y * p196.x + p194.y * (-p195.x + p196.x) + p194.x * (p195.y - p196.y) + p195.x * p196.y) * 0.5;
        const v125 = v124 < 0 ? -1 : 1;
        const v126 = (p194.y * p196.x - p194.x * p196.y + (p196.y - p194.y) * p193.x + (p194.x - p196.x) * p193.y) * v125;
        const v127 = (p194.x * p195.y - p194.y * p195.x + (p194.y - p195.y) * p193.x + (p195.x - p194.x) * p193.y) * v125;
        return v126 > 0 && v127 > 0 && v126 + v127 < v124 * 2 * v125;
      }
      static Distance(p197, p198) {
        return Math.sqrt(C2.DistanceSquared(p197, p198));
      }
      static DistanceSquared(p199, p200) {
        const v128 = p199.x - p200.x;
        const v129 = p199.y - p200.y;
        return v128 * v128 + v129 * v129;
      }
      static Center(p201, p202) {
        return C2.CenterToRef(p201, p202, new C2());
      }
      static CenterToRef(p203, p204, p205) {
        return p205.jg((p203.x + p204.x) / 2, (p203.y + p204.y) / 2);
      }
      static DistanceOfPointFromSegment(p206, p207, p208) {
        const v130 = C2.DistanceSquared(p207, p208);
        if (v130 === 0) {
          return C2.Distance(p206, p207);
        }
        const v131 = p208.Wy(p207);
        const v132 = Math.max(0, Math.min(1, C2.Dot(p206.Wy(p207), v131) / v130));
        const v133 = p207.add(v131.multiplyByFloats(v132, v132));
        return C2.Distance(p206, v133);
      }
    }
    C2._V8PerformanceHack = new C2(0.5, 0.5);
    C2._ZeroReadOnly = C2.Zero();
    Object.defineProperties(C2.prototype, {
      dimension: {
        value: [2]
      },
      rank: {
        value: 1
      }
    });
    class C3 {
      get x() {
        return this._x;
      }
      set x(p209) {
        this._x = p209;
        this._isDirty = true;
      }
      get y() {
        return this._y;
      }
      set y(p210) {
        this._y = p210;
        this._isDirty = true;
      }
      get z() {
        return this._z;
      }
      set z(p211) {
        this._z = p211;
        this._isDirty = true;
      }
      constructor(CC = 0, yC = 0, IC = 0) {
        this._isDirty = true;
        this._x = CC;
        this._y = yC;
        this._z = IC;
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z}}`;
      }
      getClassName() {
        return "bL";
      }
      getHashCode() {
        let vVF2 = vF(this._x);
        vVF2 = vVF2 * 397 ^ vF(this._y);
        vVF2 = vVF2 * 397 ^ vF(this._z);
        return vVF2;
      }
      cf() {
        return [this._x, this._y, this._z];
      }
      toArray(p212, yC = 0) {
        p212[yC] = this._x;
        p212[yC + 1] = this._y;
        p212[yC + 2] = this._z;
        return this;
      }
      LL(p213, yC = 0) {
        C3.FromArrayToRef(p213, yC, this);
        return this;
      }
      toQuaternion() {
        return C5.RotationYawPitchRoll(this._y, this._x, this._z);
      }
      addInPlace(p214) {
        this._x += p214._x;
        this._y += p214._y;
        this._z += p214._z;
        this._isDirty = true;
        return this;
      }
      addInPlaceFromFloats(p215, p216, p217) {
        this._x += p215;
        this._y += p216;
        this._z += p217;
        this._isDirty = true;
        return this;
      }
      add(p218) {
        return new C3(this._x + p218._x, this._y + p218._y, this._z + p218._z);
      }
      addToRef(p219, p220) {
        p220._x = this._x + p219._x;
        p220._y = this._y + p219._y;
        p220._z = this._z + p219._z;
        p220._isDirty = true;
        return p220;
      }
      Ze(p221) {
        this._x -= p221._x;
        this._y -= p221._y;
        this._z -= p221._z;
        this._isDirty = true;
        return this;
      }
      Wy(p222) {
        return new C3(this._x - p222._x, this._y - p222._y, this._z - p222._z);
      }
      subtractToRef(p223, p224) {
        return this.subtractFromFloatsToRef(p223._x, p223._y, p223._z, p224);
      }
      subtractFromFloats(p225, p226, p227) {
        return new C3(this._x - p225, this._y - p226, this._z - p227);
      }
      subtractFromFloatsToRef(p228, p229, p230, p231) {
        p231._x = this._x - p228;
        p231._y = this._y - p229;
        p231._z = this._z - p230;
        p231._isDirty = true;
        return p231;
      }
      negate() {
        return new C3(-this._x, -this._y, -this._z);
      }
      negateInPlace() {
        this._x *= -1;
        this._y *= -1;
        this._z *= -1;
        this._isDirty = true;
        return this;
      }
      negateToRef(p232) {
        p232._x = this._x * -1;
        p232._y = this._y * -1;
        p232._z = this._z * -1;
        p232._isDirty = true;
        return p232;
      }
      scaleInPlace(p233) {
        this._x *= p233;
        this._y *= p233;
        this._z *= p233;
        this._isDirty = true;
        return this;
      }
      scale(p234) {
        return new C3(this._x * p234, this._y * p234, this._z * p234);
      }
      scaleToRef(p235, p236) {
        p236._x = this._x * p235;
        p236._y = this._y * p235;
        p236._z = this._z * p235;
        p236._isDirty = true;
        return p236;
      }
      getNormalToRef(p237) {
        const v134 = this.length();
        let v135 = Math.acos(this._y / v134);
        const v136 = Math.atan2(this._z, this._x);
        if (v135 > Math.PI / 2) {
          v135 -= Math.PI / 2;
        } else {
          v135 += Math.PI / 2;
        }
        const v137 = v134 * Math.sin(v135) * Math.cos(v136);
        const v138 = v134 * Math.cos(v135);
        const v139 = v134 * Math.sin(v135) * Math.sin(v136);
        p237.set(v137, v138, v139);
        return p237;
      }
      applyRotationQuaternionToRef(p238, p239) {
        const v140 = this._x;
        const v141 = this._y;
        const v142 = this._z;
        const v143 = p238._x;
        const v144 = p238._y;
        const v145 = p238._z;
        const v146 = p238._w;
        const v147 = (v144 * v142 - v145 * v141) * 2;
        const v148 = (v145 * v140 - v143 * v142) * 2;
        const v149 = (v143 * v141 - v144 * v140) * 2;
        p239._x = v140 + v146 * v147 + v144 * v149 - v145 * v148;
        p239._y = v141 + v146 * v148 + v145 * v147 - v143 * v149;
        p239._z = v142 + v146 * v149 + v143 * v148 - v144 * v147;
        p239._isDirty = true;
        return p239;
      }
      applyRotationQuaternionInPlace(p240) {
        return this.applyRotationQuaternionToRef(p240, this);
      }
      applyRotationQuaternion(p241) {
        return this.applyRotationQuaternionToRef(p241, new C3());
      }
      scaleAndAddToRef(p242, p243) {
        p243._x += this._x * p242;
        p243._y += this._y * p242;
        p243._z += this._z * p242;
        p243._isDirty = true;
        return p243;
      }
      projectOnPlane(p244, p245) {
        return this.projectOnPlaneToRef(p244, p245, new C3());
      }
      projectOnPlaneToRef(p246, p247, p248) {
        const v150 = p246.normal;
        const v151 = p246.d;
        const v152 = C7.bL[0];
        this.subtractToRef(p247, v152);
        v152.normalize();
        const v153 = C3.Dot(v152, v150);
        if (Math.abs(v153) < 1e-10) {
          p248.gg(Infinity);
        } else {
          const v154 = -(C3.Dot(p247, v150) + v151) / v153;
          const v155 = v152.scaleInPlace(v154);
          p247.addToRef(v155, p248);
        }
        return p248;
      }
      equals(p249) {
        return p249 && this._x === p249._x && this._y === p249._y && this._z === p249._z;
      }
      equalsWithEpsilon(p250, yC = vP69.b) {
        return p250 && (0, vP696.WithinEpsilon)(this._x, p250._x, yC) && (0, vP696.WithinEpsilon)(this._y, p250._y, yC) && (0, vP696.WithinEpsilon)(this._z, p250._z, yC);
      }
      equalsToFloats(p251, p252, p253) {
        return this._x === p251 && this._y === p252 && this._z === p253;
      }
      multiplyInPlace(p254) {
        this._x *= p254._x;
        this._y *= p254._y;
        this._z *= p254._z;
        this._isDirty = true;
        return this;
      }
      multiply(p255) {
        return this.multiplyByFloats(p255._x, p255._y, p255._z);
      }
      multiplyToRef(p256, p257) {
        p257._x = this._x * p256._x;
        p257._y = this._y * p256._y;
        p257._z = this._z * p256._z;
        p257._isDirty = true;
        return p257;
      }
      multiplyByFloats(p258, p259, p260) {
        return new C3(this._x * p258, this._y * p259, this._z * p260);
      }
      divide(p261) {
        return new C3(this._x / p261._x, this._y / p261._y, this._z / p261._z);
      }
      divideToRef(p262, p263) {
        p263._x = this._x / p262._x;
        p263._y = this._y / p262._y;
        p263._z = this._z / p262._z;
        p263._isDirty = true;
        return p263;
      }
      divideInPlace(p264) {
        this._x = this._x / p264._x;
        this._y = this._y / p264._y;
        this._z = this._z / p264._z;
        this._isDirty = true;
        return this;
      }
      minimizeInPlace(p265) {
        return this.minimizeInPlaceFromFloats(p265._x, p265._y, p265._z);
      }
      maximizeInPlace(p266) {
        return this.maximizeInPlaceFromFloats(p266._x, p266._y, p266._z);
      }
      minimizeInPlaceFromFloats(p267, p268, p269) {
        if (p267 < this._x) {
          this.x = p267;
        }
        if (p268 < this._y) {
          this.y = p268;
        }
        if (p269 < this._z) {
          this.z = p269;
        }
        return this;
      }
      maximizeInPlaceFromFloats(p270, p271, p272) {
        if (p270 > this._x) {
          this.x = p270;
        }
        if (p271 > this._y) {
          this.y = p271;
        }
        if (p272 > this._z) {
          this.z = p272;
        }
        return this;
      }
      isNonUniformWithinEpsilon(p273) {
        const v156 = Math.abs(this._x);
        const v157 = Math.abs(this._y);
        if (!(0, vP696.WithinEpsilon)(v156, v157, p273)) {
          return true;
        }
        const v158 = Math.abs(this._z);
        return !(0, vP696.WithinEpsilon)(v156, v158, p273) || !(0, vP696.WithinEpsilon)(v157, v158, p273);
      }
      get isNonUniform() {
        const v159 = Math.abs(this._x);
        if (v159 !== Math.abs(this._y)) {
          return true;
        }
        return v159 !== Math.abs(this._z);
      }
      floorToRef(p274) {
        p274._x = Math.floor(this._x);
        p274._y = Math.floor(this._y);
        p274._z = Math.floor(this._z);
        p274._isDirty = true;
        return p274;
      }
      floor() {
        return new C3(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z));
      }
      fractToRef(p275) {
        p275._x = this._x - Math.floor(this._x);
        p275._y = this._y - Math.floor(this._y);
        p275._z = this._z - Math.floor(this._z);
        p275._isDirty = true;
        return p275;
      }
      fract() {
        return new C3(this._x - Math.floor(this._x), this._y - Math.floor(this._y), this._z - Math.floor(this._z));
      }
      length() {
        return Math.sqrt(this.lengthSquared());
      }
      lengthSquared() {
        return this._x * this._x + this._y * this._y + this._z * this._z;
      }
      get hasAZeroComponent() {
        return this._x * this._y * this._z === 0;
      }
      normalize() {
        return this.normalizeFromLength(this.length());
      }
      reorderInPlace(p276) {
        if ((p276 = p276.toLowerCase()) === "xyz") {
          return this;
        }
        const v160 = C7.bL[0].fC(this);
        this.x = v160[p276[0]];
        this.y = v160[p276[1]];
        this.z = v160[p276[2]];
        return this;
      }
      rotateByQuaternionToRef(p277, p278) {
        p277.toRotationMatrix(C7.Matrix[0]);
        C3.TransformCoordinatesToRef(this, C7.Matrix[0], p278);
        return p278;
      }
      rotateByQuaternionAroundPointToRef(p279, p280, p281) {
        this.subtractToRef(p280, C7.bL[0]);
        C7.bL[0].rotateByQuaternionToRef(p279, C7.bL[0]);
        p280.addToRef(C7.bL[0], p281);
        return p281;
      }
      cross(p282) {
        return C3.CrossToRef(this, p282, new C3());
      }
      normalizeFromLength(p283) {
        if (p283 === 0 || p283 === 1) {
          return this;
        } else {
          return this.scaleInPlace(1 / p283);
        }
      }
      normalizeToNew() {
        return this.normalizeToRef(new C3());
      }
      normalizeToRef(p284) {
        const v161 = this.length();
        if (v161 === 0 || v161 === 1) {
          p284._x = this._x;
          p284._y = this._y;
          p284._z = this._z;
          p284._isDirty = true;
          return p284;
        } else {
          return this.scaleToRef(1 / v161, p284);
        }
      }
      clone() {
        return new C3(this._x, this._y, this._z);
      }
      fC(p285) {
        return this.jg(p285._x, p285._y, p285._z);
      }
      jg(p286, p287, p288) {
        this._x = p286;
        this._y = p287;
        this._z = p288;
        this._isDirty = true;
        return this;
      }
      set(p289, p290, p291) {
        return this.jg(p289, p290, p291);
      }
      gg(p292) {
        this._x = this._y = this._z = p292;
        this._isDirty = true;
        return this;
      }
      static GetClipFactor(p293, p294, p295, p296) {
        const v162 = C3.Dot(p293, p295);
        return (v162 - p296) / (v162 - C3.Dot(p294, p295));
      }
      static GetAngleBetweenVectors(p297, p298, p299) {
        const v163 = p297.normalizeToRef(C7.bL[1]);
        const v164 = p298.normalizeToRef(C7.bL[2]);
        let v165 = C3.Dot(v163, v164);
        v165 = (0, vP696.Clamp)(v165, -1, 1);
        const v166 = Math.acos(v165);
        const v167 = C7.bL[3];
        C3.CrossToRef(v163, v164, v167);
        if (C3.Dot(v167, p299) > 0) {
          if (isNaN(v166)) {
            return 0;
          } else {
            return v166;
          }
        } else if (isNaN(v166)) {
          return -Math.PI;
        } else {
          return -Math.acos(v165);
        }
      }
      static GetAngleBetweenVectorsOnPlane(p300, p301, p302) {
        C7.bL[0].fC(p300);
        const v168 = C7.bL[0];
        C7.bL[1].fC(p301);
        const v169 = C7.bL[1];
        C7.bL[2].fC(p302);
        const v170 = C7.bL[2];
        const v171 = C7.bL[3];
        const v172 = C7.bL[4];
        v168.normalize();
        v169.normalize();
        v170.normalize();
        C3.CrossToRef(v170, v168, v171);
        C3.CrossToRef(v171, v170, v172);
        const v173 = Math.atan2(C3.Dot(v169, v171), C3.Dot(v169, v172));
        return (0, vP696.NormalizeRadians)(v173);
      }
      static PitchYawRollToMoveBetweenPointsToRef(p303, p304, p305) {
        const v174 = C8.bL[0];
        p304.subtractToRef(p303, v174);
        p305._y = Math.atan2(v174.x, v174.z) || 0;
        p305._x = Math.atan2(Math.sqrt(v174.x ** 2 + v174.z ** 2), v174.y) || 0;
        p305._z = 0;
        p305._isDirty = true;
        return p305;
      }
      static PitchYawRollToMoveBetweenPoints(p306, p307) {
        const v175 = C3.Zero();
        return C3.PitchYawRollToMoveBetweenPointsToRef(p306, p307, v175);
      }
      static SlerpToRef(p308, p309, p310, p311) {
        p310 = (0, vP696.Clamp)(p310, 0, 1);
        const v176 = C7.bL[0];
        const v177 = C7.bL[1];
        v176.fC(p308);
        const v178 = v176.length();
        v176.normalizeFromLength(v178);
        v177.fC(p309);
        const v179 = v177.length();
        v177.normalizeFromLength(v179);
        const v180 = C3.Dot(v176, v177);
        let v181;
        let v182;
        if (v180 < 1 - vP69.b) {
          const v183 = Math.acos(v180);
          const v184 = 1 / Math.sin(v183);
          v181 = Math.sin((1 - p310) * v183) * v184;
          v182 = Math.sin(p310 * v183) * v184;
        } else {
          v181 = 1 - p310;
          v182 = p310;
        }
        v176.scaleInPlace(v181);
        v177.scaleInPlace(v182);
        p311.fC(v176).addInPlace(v177);
        p311.scaleInPlace((0, vP696.Lerp)(v178, v179, p310));
        return p311;
      }
      static SmoothToRef(p312, p313, p314, p315, p316) {
        C3.SlerpToRef(p312, p313, p315 === 0 ? 1 : p314 / p315, p316);
        return p316;
      }
      static OL(p317, yC = 0) {
        return new C3(p317[yC], p317[yC + 1], p317[yC + 2]);
      }
      static FromFloatArray(p318, p319) {
        return C3.OL(p318, p319);
      }
      static FromArrayToRef(p320, p321, p322) {
        p322._x = p320[p321];
        p322._y = p320[p321 + 1];
        p322._z = p320[p321 + 2];
        p322._isDirty = true;
        return p322;
      }
      static FromFloatArrayToRef(p323, p324, p325) {
        return C3.FromArrayToRef(p323, p324, p325);
      }
      static FromFloatsToRef(p326, p327, p328, p329) {
        p329.jg(p326, p327, p328);
        return p329;
      }
      static Zero() {
        return new C3(0, 0, 0);
      }
      static One() {
        return new C3(1, 1, 1);
      }
      static Up() {
        return new C3(0, 1, 0);
      }
      static get UpReadOnly() {
        return C3._UpReadOnly;
      }
      static get DownReadOnly() {
        return C3._DownReadOnly;
      }
      static get RightReadOnly() {
        return C3._RightReadOnly;
      }
      static get LeftReadOnly() {
        return C3._LeftReadOnly;
      }
      static get LeftHandedForwardReadOnly() {
        return C3._LeftHandedForwardReadOnly;
      }
      static get RightHandedForwardReadOnly() {
        return C3._RightHandedForwardReadOnly;
      }
      static get LeftHandedBackwardReadOnly() {
        return C3._LeftHandedBackwardReadOnly;
      }
      static get RightHandedBackwardReadOnly() {
        return C3._RightHandedBackwardReadOnly;
      }
      static get ZeroReadOnly() {
        return C3._ZeroReadOnly;
      }
      static get OneReadOnly() {
        return C3._OneReadOnly;
      }
      static Down() {
        return new C3(0, -1, 0);
      }
      static Forward() {
        return new C3(0, 0, arguments.length > 0 && arguments[0] !== undefined && arguments[0] ? -1 : 1);
      }
      static Backward() {
        return new C3(0, 0, arguments.length > 0 && arguments[0] !== undefined && arguments[0] ? 1 : -1);
      }
      static Right() {
        return new C3(1, 0, 0);
      }
      static Left() {
        return new C3(-1, 0, 0);
      }
      static Random(CC = 0, yC = 1) {
        return new C3((0, vP696.RandomRange)(CC, yC), (0, vP696.RandomRange)(CC, yC), (0, vP696.RandomRange)(CC, yC));
      }
      static RandomToRef(CC = 0, yC = 1) {
        return (arguments.length > 2 ? arguments[2] : undefined).jg((0, vP696.RandomRange)(CC, yC), (0, vP696.RandomRange)(CC, yC), (0, vP696.RandomRange)(CC, yC));
      }
      static TransformCoordinates(p330, p331) {
        const v185 = C3.Zero();
        C3.TransformCoordinatesToRef(p330, p331, v185);
        return v185;
      }
      static TransformCoordinatesToRef(p332, p333, p334) {
        C3.TransformCoordinatesFromFloatsToRef(p332._x, p332._y, p332._z, p333, p334);
        return p334;
      }
      static TransformCoordinatesFromFloatsToRef(p335, p336, p337, p338, p339) {
        const v186 = p338.m;
        const v187 = p335 * v186[0] + p336 * v186[4] + p337 * v186[8] + v186[12];
        const v188 = p335 * v186[1] + p336 * v186[5] + p337 * v186[9] + v186[13];
        const v189 = p335 * v186[2] + p336 * v186[6] + p337 * v186[10] + v186[14];
        const v190 = 1 / (p335 * v186[3] + p336 * v186[7] + p337 * v186[11] + v186[15]);
        p339._x = v187 * v190;
        p339._y = v188 * v190;
        p339._z = v189 * v190;
        p339._isDirty = true;
        return p339;
      }
      static TransformNormal(p340, p341) {
        const v191 = C3.Zero();
        C3.TransformNormalToRef(p340, p341, v191);
        return v191;
      }
      static TransformNormalToRef(p342, p343, p344) {
        this.TransformNormalFromFloatsToRef(p342._x, p342._y, p342._z, p343, p344);
        return p344;
      }
      static TransformNormalFromFloatsToRef(p345, p346, p347, p348, p349) {
        const v192 = p348.m;
        p349._x = p345 * v192[0] + p346 * v192[4] + p347 * v192[8];
        p349._y = p345 * v192[1] + p346 * v192[5] + p347 * v192[9];
        p349._z = p345 * v192[2] + p346 * v192[6] + p347 * v192[10];
        p349._isDirty = true;
        return p349;
      }
      static CatmullRom(p350, p351, p352, p353, p354) {
        const v193 = p354 * p354;
        const v194 = p354 * v193;
        const v195 = (p351._x * 2 + (-p350._x + p352._x) * p354 + (p350._x * 2 - p351._x * 5 + p352._x * 4 - p353._x) * v193 + (-p350._x + p351._x * 3 - p352._x * 3 + p353._x) * v194) * 0.5;
        const v196 = (p351._y * 2 + (-p350._y + p352._y) * p354 + (p350._y * 2 - p351._y * 5 + p352._y * 4 - p353._y) * v193 + (-p350._y + p351._y * 3 - p352._y * 3 + p353._y) * v194) * 0.5;
        const v197 = (p351._z * 2 + (-p350._z + p352._z) * p354 + (p350._z * 2 - p351._z * 5 + p352._z * 4 - p353._z) * v193 + (-p350._z + p351._z * 3 - p352._z * 3 + p353._z) * v194) * 0.5;
        return new C3(v195, v196, v197);
      }
      static Clamp(p355, p356, p357) {
        const v198 = new C3();
        C3.ClampToRef(p355, p356, p357, v198);
        return v198;
      }
      static ClampToRef(p358, p359, p360, p361) {
        let v199 = p358._x;
        v199 = v199 > p360._x ? p360._x : v199;
        v199 = v199 < p359._x ? p359._x : v199;
        let v200 = p358._y;
        v200 = v200 > p360._y ? p360._y : v200;
        v200 = v200 < p359._y ? p359._y : v200;
        let v201 = p358._z;
        v201 = v201 > p360._z ? p360._z : v201;
        v201 = v201 < p359._z ? p359._z : v201;
        p361.jg(v199, v200, v201);
        return p361;
      }
      static CheckExtends(p362, p363, p364) {
        p363.minimizeInPlace(p362);
        p364.maximizeInPlace(p362);
      }
      static Hermite(p365, p366, p367, p368, p369) {
        const v202 = p369 * p369;
        const v203 = p369 * v202;
        const v204 = v203 * 2 - v202 * 3 + 1;
        const v205 = v203 * -2 + v202 * 3;
        const v206 = v203 - v202 * 2 + p369;
        const v207 = v203 - v202;
        const v208 = p365._x * v204 + p367._x * v205 + p366._x * v206 + p368._x * v207;
        const v209 = p365._y * v204 + p367._y * v205 + p366._y * v206 + p368._y * v207;
        const v210 = p365._z * v204 + p367._z * v205 + p366._z * v206 + p368._z * v207;
        return new C3(v208, v209, v210);
      }
      static Hermite1stDerivative(p370, p371, p372, p373, p374) {
        const v211 = new C3();
        this.Hermite1stDerivativeToRef(p370, p371, p372, p373, p374, v211);
        return v211;
      }
      static Hermite1stDerivativeToRef(p375, p376, p377, p378, p379, p380) {
        const v212 = p379 * p379;
        p380._x = (v212 - p379) * 6 * p375._x + (v212 * 3 - p379 * 4 + 1) * p376._x + (-v212 + p379) * 6 * p377._x + (v212 * 3 - p379 * 2) * p378._x;
        p380._y = (v212 - p379) * 6 * p375._y + (v212 * 3 - p379 * 4 + 1) * p376._y + (-v212 + p379) * 6 * p377._y + (v212 * 3 - p379 * 2) * p378._y;
        p380._z = (v212 - p379) * 6 * p375._z + (v212 * 3 - p379 * 4 + 1) * p376._z + (-v212 + p379) * 6 * p377._z + (v212 * 3 - p379 * 2) * p378._z;
        p380._isDirty = true;
        return p380;
      }
      static Lerp(p381, p382, p383) {
        const v213 = new C3(0, 0, 0);
        C3.LerpToRef(p381, p382, p383, v213);
        return v213;
      }
      static LerpToRef(p384, p385, p386, p387) {
        p387._x = p384._x + (p385._x - p384._x) * p386;
        p387._y = p384._y + (p385._y - p384._y) * p386;
        p387._z = p384._z + (p385._z - p384._z) * p386;
        p387._isDirty = true;
        return p387;
      }
      static Dot(p388, p389) {
        return p388._x * p389._x + p388._y * p389._y + p388._z * p389._z;
      }
      dot(p390) {
        return this._x * p390._x + this._y * p390._y + this._z * p390._z;
      }
      static Cross(p391, p392) {
        const v214 = new C3();
        C3.CrossToRef(p391, p392, v214);
        return v214;
      }
      static CrossToRef(p393, p394, p395) {
        const v215 = p393._y * p394._z - p393._z * p394._y;
        const v216 = p393._z * p394._x - p393._x * p394._z;
        const v217 = p393._x * p394._y - p393._y * p394._x;
        p395.jg(v215, v216, v217);
        return p395;
      }
      static Normalize(p396) {
        const v218 = C3.Zero();
        C3.NormalizeToRef(p396, v218);
        return v218;
      }
      static NormalizeToRef(p397, p398) {
        p397.normalizeToRef(p398);
        return p398;
      }
      static Project(p399, p400, p401, p402) {
        const v219 = new C3();
        C3.ProjectToRef(p399, p400, p401, p402, v219);
        return v219;
      }
      static ProjectToRef(p403, p404, p405, p406, p407) {
        const v220 = p406.width;
        const v221 = p406.height;
        const v222 = p406.x;
        const v223 = p406.y;
        const v224 = C7.Matrix[1];
        const v225 = vP695.b.LastCreatedEngine?.isNDCHalfZRange;
        const v226 = v225 ? 1 : 0.5;
        const v227 = v225 ? 0 : 0.5;
        C6.FromValuesToRef(v220 / 2, 0, 0, 0, 0, -v221 / 2, 0, 0, 0, 0, v226, 0, v222 + v220 / 2, v221 / 2 + v223, v227, 1, v224);
        const v228 = C7.Matrix[0];
        p404.multiplyToRef(p405, v228);
        v228.multiplyToRef(v224, v228);
        C3.TransformCoordinatesToRef(p403, v228, p407);
        return p407;
      }
      static Reflect(p408, p409) {
        return this.ReflectToRef(p408, p409, new C3());
      }
      static ReflectToRef(p410, p411, p412) {
        const v229 = C8.bL[0];
        v229.fC(p411).scaleInPlace(C3.Dot(p410, p411) * 2);
        return p412.fC(p410).Ze(v229);
      }
      static _UnprojectFromInvertedMatrixToRef(p413, p414, p415) {
        C3.TransformCoordinatesToRef(p413, p414, p415);
        const v230 = p414.m;
        const v231 = p413._x * v230[3] + p413._y * v230[7] + p413._z * v230[11] + v230[15];
        if ((0, vP696.WithinEpsilon)(v231, 1)) {
          p415.scaleInPlace(1 / v231);
        }
        return p415;
      }
      static UnprojectFromTransform(p416, p417, p418, p419, p420) {
        return this.Unproject(p416, p417, p418, p419, p420, C6.IdentityReadOnly);
      }
      static Unproject(p421, p422, p423, p424, p425, p426) {
        const v232 = new C3();
        C3.UnprojectToRef(p421, p422, p423, p424, p425, p426, v232);
        return v232;
      }
      static UnprojectToRef(p427, p428, p429, p430, p431, p432, p433) {
        C3.UnprojectFloatsToRef(p427._x, p427._y, p427._z, p428, p429, p430, p431, p432, p433);
        return p433;
      }
      static UnprojectFloatsToRef(p434, p435, p436, p437, p438, p439, p440, p441, p442) {
        var v233;
        const v234 = C7.Matrix[0];
        p439.multiplyToRef(p440, v234);
        v234.multiplyToRef(p441, v234);
        v234.invert();
        const v235 = C7.bL[0];
        v235.x = p434 / p437 * 2 - 1;
        v235.y = -(p435 / p438 * 2 - 1);
        if ((v233 = vP695.b.LastCreatedEngine) !== null && v233 !== undefined && v233.isNDCHalfZRange) {
          v235.z = p436;
        } else {
          v235.z = p436 * 2 - 1;
        }
        C3._UnprojectFromInvertedMatrixToRef(v235, v234, p442);
        return p442;
      }
      static Minimize(p443, p444) {
        const v236 = new C3();
        v236.fC(p443);
        v236.minimizeInPlace(p444);
        return v236;
      }
      static Maximize(p445, p446) {
        const v237 = new C3();
        v237.fC(p445);
        v237.maximizeInPlace(p446);
        return v237;
      }
      static Distance(p447, p448) {
        return Math.sqrt(C3.DistanceSquared(p447, p448));
      }
      static DistanceSquared(p449, p450) {
        const v238 = p449._x - p450._x;
        const v239 = p449._y - p450._y;
        const v240 = p449._z - p450._z;
        return v238 * v238 + v239 * v239 + v240 * v240;
      }
      static ProjectOnTriangleToRef(p451, p452, p453, p454, p455) {
        const v241 = C7.bL[0];
        const v242 = C7.bL[1];
        const v243 = C7.bL[2];
        const v244 = C7.bL[3];
        const v245 = C7.bL[4];
        p453.subtractToRef(p452, v241);
        p454.subtractToRef(p452, v242);
        p454.subtractToRef(p453, v243);
        const v246 = v241.length();
        const v247 = v242.length();
        const v248 = v243.length();
        if (v246 < vP69.b || v247 < vP69.b || v248 < vP69.b) {
          p455.fC(p452);
          return C3.Distance(p451, p452);
        }
        p451.subtractToRef(p452, v245);
        C3.CrossToRef(v241, v242, v244);
        const v249 = v244.length();
        if (v249 < vP69.b) {
          p455.fC(p452);
          return C3.Distance(p451, p452);
        }
        v244.normalizeFromLength(v249);
        let v250 = v245.length();
        if (v250 < vP69.b) {
          p455.fC(p452);
          return 0;
        }
        v245.normalizeFromLength(v250);
        const v251 = C3.Dot(v244, v245);
        const v252 = C7.bL[5];
        const v253 = C7.bL[6];
        v252.fC(v244).scaleInPlace(-v250 * v251);
        v253.fC(p451).addInPlace(v252);
        const v254 = C7.bL[4];
        const v255 = C7.bL[5];
        const v256 = C7.bL[7];
        const v257 = C7.bL[8];
        v254.fC(v241).scaleInPlace(1 / v246);
        v257.fC(v242).scaleInPlace(1 / v247);
        v254.addInPlace(v257).scaleInPlace(-1);
        v255.fC(v241).scaleInPlace(-1 / v246);
        v257.fC(v243).scaleInPlace(1 / v248);
        v255.addInPlace(v257).scaleInPlace(-1);
        v256.fC(v243).scaleInPlace(-1 / v248);
        v257.fC(v242).scaleInPlace(-1 / v247);
        v256.addInPlace(v257).scaleInPlace(-1);
        const v258 = C7.bL[9];
        let v259;
        v258.fC(v253).Ze(p452);
        C3.CrossToRef(v254, v258, v257);
        v259 = C3.Dot(v257, v244);
        const vV259 = v259;
        v258.fC(v253).Ze(p453);
        C3.CrossToRef(v255, v258, v257);
        v259 = C3.Dot(v257, v244);
        const vV2592 = v259;
        v258.fC(v253).Ze(p454);
        C3.CrossToRef(v256, v258, v257);
        v259 = C3.Dot(v257, v244);
        const vV2593 = v259;
        const v260 = C7.bL[10];
        let v261;
        let v262;
        if (vV259 > 0 && vV2592 < 0) {
          v260.fC(v241);
          v261 = p452;
          v262 = p453;
        } else if (vV2592 > 0 && vV2593 < 0) {
          v260.fC(v243);
          v261 = p453;
          v262 = p454;
        } else {
          v260.fC(v242).scaleInPlace(-1);
          v261 = p454;
          v262 = p452;
        }
        const v263 = C7.bL[9];
        const v264 = C7.bL[4];
        v261.subtractToRef(v253, v257);
        v262.subtractToRef(v253, v263);
        C3.CrossToRef(v257, v263, v264);
        if (!(C3.Dot(v264, v244) < 0)) {
          p455.fC(v253);
          return Math.abs(v250 * v251);
        }
        const v265 = C7.bL[5];
        C3.CrossToRef(v260, v264, v265);
        v265.normalize();
        const v266 = C7.bL[9];
        v266.fC(v261).Ze(v253);
        const v267 = v266.length();
        if (v267 < vP69.b) {
          p455.fC(v261);
          return C3.Distance(p451, v261);
        }
        v266.normalizeFromLength(v267);
        const v268 = C3.Dot(v265, v266);
        const v269 = C7.bL[7];
        v269.fC(v253).addInPlace(v265.scaleInPlace(v267 * v268));
        v257.fC(v269).Ze(v261);
        v250 = v260.length();
        v260.normalizeFromLength(v250);
        let v270 = C3.Dot(v257, v260) / Math.max(v250, vP69.b);
        v270 = (0, vP696.Clamp)(v270, 0, 1);
        v269.fC(v261).addInPlace(v260.scaleInPlace(v270 * v250));
        p455.fC(v269);
        return C3.Distance(p451, v269);
      }
      static Center(p456, p457) {
        return C3.CenterToRef(p456, p457, C3.Zero());
      }
      static CenterToRef(p458, p459, p460) {
        return p460.jg((p458._x + p459._x) / 2, (p458._y + p459._y) / 2, (p458._z + p459._z) / 2);
      }
      static RotationFromAxis(p461, p462, p463) {
        const v271 = new C3();
        C3.RotationFromAxisToRef(p461, p462, p463, v271);
        return v271;
      }
      static RotationFromAxisToRef(p464, p465, p466, p467) {
        const v272 = C7.Quaternion[0];
        C5.RotationQuaternionFromAxisToRef(p464, p465, p466, v272);
        v272.toEulerAnglesToRef(p467);
        return p467;
      }
    }
    C3._V8PerformanceHack = new C3(0.5, 0.5, 0.5);
    C3._UpReadOnly = C3.Up();
    C3._DownReadOnly = C3.Down();
    C3._LeftHandedForwardReadOnly = C3.Forward(false);
    C3._RightHandedForwardReadOnly = C3.Forward(true);
    C3._LeftHandedBackwardReadOnly = C3.Backward(false);
    C3._RightHandedBackwardReadOnly = C3.Backward(true);
    C3._RightReadOnly = C3.Right();
    C3._LeftReadOnly = C3.Left();
    C3._ZeroReadOnly = C3.Zero();
    C3._OneReadOnly = C3.One();
    Object.defineProperties(C3.prototype, {
      dimension: {
        value: [3]
      },
      rank: {
        value: 1
      }
    });
    class C4 {
      get x() {
        return this._x;
      }
      set x(p468) {
        this._x = p468;
        this._isDirty = true;
      }
      get y() {
        return this._y;
      }
      set y(p469) {
        this._y = p469;
        this._isDirty = true;
      }
      get z() {
        return this._z;
      }
      set z(p470) {
        this._z = p470;
        this._isDirty = true;
      }
      get w() {
        return this._w;
      }
      set w(p471) {
        this._w = p471;
        this._isDirty = true;
      }
      constructor(CC = 0, yC = 0, IC = 0, fC = 0) {
        this._isDirty = true;
        this._x = CC;
        this._y = yC;
        this._z = IC;
        this._w = fC;
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z} W: ${this._w}}`;
      }
      getClassName() {
        return "Vector4";
      }
      getHashCode() {
        let vVF3 = vF(this._x);
        vVF3 = vVF3 * 397 ^ vF(this._y);
        vVF3 = vVF3 * 397 ^ vF(this._z);
        vVF3 = vVF3 * 397 ^ vF(this._w);
        return vVF3;
      }
      cf() {
        return [this._x, this._y, this._z, this._w];
      }
      toArray(p472, p473 = 0) {
        p472[p473] = this._x;
        p472[p473 + 1] = this._y;
        p472[p473 + 2] = this._z;
        p472[p473 + 3] = this._w;
        return this;
      }
      LL(p474, yC = 0) {
        C4.FromArrayToRef(p474, yC, this);
        return this;
      }
      addInPlace(p475) {
        this.x += p475._x;
        this.y += p475._y;
        this.z += p475._z;
        this.w += p475._w;
        return this;
      }
      addInPlaceFromFloats(p476, p477, p478, p479) {
        this.x += p476;
        this.y += p477;
        this.z += p478;
        this.w += p479;
        return this;
      }
      add(p480) {
        return new C4(this._x + p480.x, this._y + p480.y, this._z + p480.z, this._w + p480.w);
      }
      addToRef(p481, p482) {
        p482.x = this._x + p481.x;
        p482.y = this._y + p481.y;
        p482.z = this._z + p481.z;
        p482.w = this._w + p481.w;
        return p482;
      }
      Ze(p483) {
        this.x -= p483.x;
        this.y -= p483.y;
        this.z -= p483.z;
        this.w -= p483.w;
        return this;
      }
      Wy(p484) {
        return new C4(this._x - p484.x, this._y - p484.y, this._z - p484.z, this._w - p484.w);
      }
      subtractToRef(p485, p486) {
        p486.x = this._x - p485.x;
        p486.y = this._y - p485.y;
        p486.z = this._z - p485.z;
        p486.w = this._w - p485.w;
        return p486;
      }
      subtractFromFloats(p487, p488, p489, p490) {
        return new C4(this._x - p487, this._y - p488, this._z - p489, this._w - p490);
      }
      subtractFromFloatsToRef(p491, p492, p493, p494, p495) {
        p495.x = this._x - p491;
        p495.y = this._y - p492;
        p495.z = this._z - p493;
        p495.w = this._w - p494;
        return p495;
      }
      negate() {
        return new C4(-this._x, -this._y, -this._z, -this._w);
      }
      negateInPlace() {
        this.x *= -1;
        this.y *= -1;
        this.z *= -1;
        this.w *= -1;
        return this;
      }
      negateToRef(p496) {
        p496.x = -this._x;
        p496.y = -this._y;
        p496.z = -this._z;
        p496.w = -this._w;
        return p496;
      }
      scaleInPlace(p497) {
        this.x *= p497;
        this.y *= p497;
        this.z *= p497;
        this.w *= p497;
        return this;
      }
      scale(p498) {
        return new C4(this._x * p498, this._y * p498, this._z * p498, this._w * p498);
      }
      scaleToRef(p499, p500) {
        p500.x = this._x * p499;
        p500.y = this._y * p499;
        p500.z = this._z * p499;
        p500.w = this._w * p499;
        return p500;
      }
      scaleAndAddToRef(p501, p502) {
        p502.x += this._x * p501;
        p502.y += this._y * p501;
        p502.z += this._z * p501;
        p502.w += this._w * p501;
        return p502;
      }
      equals(p503) {
        return p503 && this._x === p503.x && this._y === p503.y && this._z === p503.z && this._w === p503.w;
      }
      equalsWithEpsilon(p504, yC = vP69.b) {
        return p504 && (0, vP696.WithinEpsilon)(this._x, p504.x, yC) && (0, vP696.WithinEpsilon)(this._y, p504.y, yC) && (0, vP696.WithinEpsilon)(this._z, p504.z, yC) && (0, vP696.WithinEpsilon)(this._w, p504.w, yC);
      }
      equalsToFloats(p505, p506, p507, p508) {
        return this._x === p505 && this._y === p506 && this._z === p507 && this._w === p508;
      }
      multiplyInPlace(p509) {
        this.x *= p509.x;
        this.y *= p509.y;
        this.z *= p509.z;
        this.w *= p509.w;
        return this;
      }
      multiply(p510) {
        return new C4(this._x * p510.x, this._y * p510.y, this._z * p510.z, this._w * p510.w);
      }
      multiplyToRef(p511, p512) {
        p512.x = this._x * p511.x;
        p512.y = this._y * p511.y;
        p512.z = this._z * p511.z;
        p512.w = this._w * p511.w;
        return p512;
      }
      multiplyByFloats(p513, p514, p515, p516) {
        return new C4(this._x * p513, this._y * p514, this._z * p515, this._w * p516);
      }
      divide(p517) {
        return new C4(this._x / p517.x, this._y / p517.y, this._z / p517.z, this._w / p517.w);
      }
      divideToRef(p518, p519) {
        p519.x = this._x / p518.x;
        p519.y = this._y / p518.y;
        p519.z = this._z / p518.z;
        p519.w = this._w / p518.w;
        return p519;
      }
      divideInPlace(p520) {
        return this.divideToRef(p520, this);
      }
      minimizeInPlace(p521) {
        if (p521.x < this._x) {
          this.x = p521.x;
        }
        if (p521.y < this._y) {
          this.y = p521.y;
        }
        if (p521.z < this._z) {
          this.z = p521.z;
        }
        if (p521.w < this._w) {
          this.w = p521.w;
        }
        return this;
      }
      maximizeInPlace(p522) {
        if (p522.x > this._x) {
          this.x = p522.x;
        }
        if (p522.y > this._y) {
          this.y = p522.y;
        }
        if (p522.z > this._z) {
          this.z = p522.z;
        }
        if (p522.w > this._w) {
          this.w = p522.w;
        }
        return this;
      }
      minimizeInPlaceFromFloats(p523, p524, p525, p526) {
        this.x = Math.min(p523, this._x);
        this.y = Math.min(p524, this._y);
        this.z = Math.min(p525, this._z);
        this.w = Math.min(p526, this._w);
        return this;
      }
      maximizeInPlaceFromFloats(p527, p528, p529, p530) {
        this.x = Math.max(p527, this._x);
        this.y = Math.max(p528, this._y);
        this.z = Math.max(p529, this._z);
        this.w = Math.max(p530, this._w);
        return this;
      }
      floorToRef(p531) {
        p531.x = Math.floor(this._x);
        p531.y = Math.floor(this._y);
        p531.z = Math.floor(this._z);
        p531.w = Math.floor(this._w);
        return p531;
      }
      floor() {
        return new C4(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z), Math.floor(this._w));
      }
      fractToRef(p532) {
        p532.x = this._x - Math.floor(this._x);
        p532.y = this._y - Math.floor(this._y);
        p532.z = this._z - Math.floor(this._z);
        p532.w = this._w - Math.floor(this._w);
        return p532;
      }
      fract() {
        return new C4(this._x - Math.floor(this._x), this._y - Math.floor(this._y), this._z - Math.floor(this._z), this._w - Math.floor(this._w));
      }
      length() {
        return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
      }
      lengthSquared() {
        return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
      }
      normalize() {
        return this.normalizeFromLength(this.length());
      }
      normalizeFromLength(p533) {
        if (p533 === 0 || p533 === 1) {
          return this;
        } else {
          return this.scaleInPlace(1 / p533);
        }
      }
      normalizeToNew() {
        return this.normalizeToRef(new C4());
      }
      normalizeToRef(p534) {
        const v273 = this.length();
        if (v273 === 0 || v273 === 1) {
          p534.x = this._x;
          p534.y = this._y;
          p534.z = this._z;
          p534.w = this._w;
          return p534;
        } else {
          return this.scaleToRef(1 / v273, p534);
        }
      }
      toVector3() {
        return new C3(this._x, this._y, this._z);
      }
      clone() {
        return new C4(this._x, this._y, this._z, this._w);
      }
      fC(p535) {
        this.x = p535.x;
        this.y = p535.y;
        this.z = p535.z;
        this.w = p535.w;
        return this;
      }
      jg(p536, p537, p538, p539) {
        this.x = p536;
        this.y = p537;
        this.z = p538;
        this.w = p539;
        return this;
      }
      set(p540, p541, p542, p543) {
        return this.jg(p540, p541, p542, p543);
      }
      gg(p544) {
        this.x = this.y = this.z = this.w = p544;
        return this;
      }
      dot(p545) {
        return this._x * p545.x + this._y * p545.y + this._z * p545.z + this._w * p545.w;
      }
      static OL(p546, p547) {
        p547 ||= 0;
        return new C4(p546[p547], p546[p547 + 1], p546[p547 + 2], p546[p547 + 3]);
      }
      static FromArrayToRef(p548, p549, p550) {
        p550.x = p548[p549];
        p550.y = p548[p549 + 1];
        p550.z = p548[p549 + 2];
        p550.w = p548[p549 + 3];
        return p550;
      }
      static FromFloatArrayToRef(p551, p552, p553) {
        C4.FromArrayToRef(p551, p552, p553);
        return p553;
      }
      static FromFloatsToRef(p554, p555, p556, p557, p558) {
        p558.x = p554;
        p558.y = p555;
        p558.z = p556;
        p558.w = p557;
        return p558;
      }
      static Zero() {
        return new C4(0, 0, 0, 0);
      }
      static One() {
        return new C4(1, 1, 1, 1);
      }
      static Random(CC = 0, yC = 1) {
        return new C4((0, vP696.RandomRange)(CC, yC), (0, vP696.RandomRange)(CC, yC), (0, vP696.RandomRange)(CC, yC), (0, vP696.RandomRange)(CC, yC));
      }
      static RandomToRef(CC = 0, yC = 1, IC) {
        IC.x = (0, vP696.RandomRange)(CC, yC);
        IC.y = (0, vP696.RandomRange)(CC, yC);
        IC.z = (0, vP696.RandomRange)(CC, yC);
        IC.w = (0, vP696.RandomRange)(CC, yC);
        return IC;
      }
      static Clamp(p559, p560, p561) {
        return C4.ClampToRef(p559, p560, p561, new C4());
      }
      static ClampToRef(p562, p563, p564, p565) {
        p565.x = (0, vP696.Clamp)(p562.x, p563.x, p564.x);
        p565.y = (0, vP696.Clamp)(p562.y, p563.y, p564.y);
        p565.z = (0, vP696.Clamp)(p562.z, p563.z, p564.z);
        p565.w = (0, vP696.Clamp)(p562.w, p563.w, p564.w);
        return p565;
      }
      static CheckExtends(p566, p567, p568) {
        p567.minimizeInPlace(p566);
        p568.maximizeInPlace(p566);
      }
      static get ZeroReadOnly() {
        return C4._ZeroReadOnly;
      }
      static Normalize(p569) {
        return C4.NormalizeToRef(p569, new C4());
      }
      static NormalizeToRef(p570, p571) {
        p570.normalizeToRef(p571);
        return p571;
      }
      static Minimize(p572, p573) {
        const v274 = new C4();
        v274.fC(p572);
        v274.minimizeInPlace(p573);
        return v274;
      }
      static Maximize(p574, p575) {
        const v275 = new C4();
        v275.fC(p574);
        v275.maximizeInPlace(p575);
        return v275;
      }
      static Distance(p576, p577) {
        return Math.sqrt(C4.DistanceSquared(p576, p577));
      }
      static DistanceSquared(p578, p579) {
        const v276 = p578.x - p579.x;
        const v277 = p578.y - p579.y;
        const v278 = p578.z - p579.z;
        const v279 = p578.w - p579.w;
        return v276 * v276 + v277 * v277 + v278 * v278 + v279 * v279;
      }
      static Center(p580, p581) {
        return C4.CenterToRef(p580, p581, new C4());
      }
      static CenterToRef(p582, p583, p584) {
        p584.x = (p582.x + p583.x) / 2;
        p584.y = (p582.y + p583.y) / 2;
        p584.z = (p582.z + p583.z) / 2;
        p584.w = (p582.w + p583.w) / 2;
        return p584;
      }
      static TransformCoordinates(p585, p586) {
        return C4.TransformCoordinatesToRef(p585, p586, new C4());
      }
      static TransformCoordinatesToRef(p587, p588, p589) {
        C4.TransformCoordinatesFromFloatsToRef(p587._x, p587._y, p587._z, p588, p589);
        return p589;
      }
      static TransformCoordinatesFromFloatsToRef(p590, p591, p592, p593, p594) {
        const v280 = p593.m;
        const v281 = p590 * v280[0] + p591 * v280[4] + p592 * v280[8] + v280[12];
        const v282 = p590 * v280[1] + p591 * v280[5] + p592 * v280[9] + v280[13];
        const v283 = p590 * v280[2] + p591 * v280[6] + p592 * v280[10] + v280[14];
        const v284 = p590 * v280[3] + p591 * v280[7] + p592 * v280[11] + v280[15];
        p594.x = v281;
        p594.y = v282;
        p594.z = v283;
        p594.w = v284;
        return p594;
      }
      static TransformNormal(p595, p596) {
        return C4.TransformNormalToRef(p595, p596, new C4());
      }
      static TransformNormalToRef(p597, p598, p599) {
        const v285 = p598.m;
        const v286 = p597.x * v285[0] + p597.y * v285[4] + p597.z * v285[8];
        const v287 = p597.x * v285[1] + p597.y * v285[5] + p597.z * v285[9];
        const v288 = p597.x * v285[2] + p597.y * v285[6] + p597.z * v285[10];
        p599.x = v286;
        p599.y = v287;
        p599.z = v288;
        p599.w = p597.w;
        return p599;
      }
      static TransformNormalFromFloatsToRef(p600, p601, p602, p603, p604, p605) {
        const v289 = p604.m;
        p605.x = p600 * v289[0] + p601 * v289[4] + p602 * v289[8];
        p605.y = p600 * v289[1] + p601 * v289[5] + p602 * v289[9];
        p605.z = p600 * v289[2] + p601 * v289[6] + p602 * v289[10];
        p605.w = p603;
        return p605;
      }
      static FromVector3(p606, yC = 0) {
        return new C4(p606._x, p606._y, p606._z, yC);
      }
      static Dot(p607, p608) {
        return p607.x * p608.x + p607.y * p608.y + p607.z * p608.z + p607.w * p608.w;
      }
    }
    C4._V8PerformanceHack = new C4(0.5, 0.5, 0.5, 0.5);
    C4._ZeroReadOnly = C4.Zero();
    Object.defineProperties(C4.prototype, {
      dimension: {
        value: [4]
      },
      rank: {
        value: 1
      }
    });
    class C5 {
      get x() {
        return this._x;
      }
      set x(p609) {
        this._x = p609;
        this._isDirty = true;
      }
      get y() {
        return this._y;
      }
      set y(p610) {
        this._y = p610;
        this._isDirty = true;
      }
      get z() {
        return this._z;
      }
      set z(p611) {
        this._z = p611;
        this._isDirty = true;
      }
      get w() {
        return this._w;
      }
      set w(p612) {
        this._w = p612;
        this._isDirty = true;
      }
      constructor(CC = 0, yC = 0, IC = 0, fC = 1) {
        this._isDirty = true;
        this._x = CC;
        this._y = yC;
        this._z = IC;
        this._w = fC;
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z} W: ${this._w}}`;
      }
      getClassName() {
        return "Quaternion";
      }
      getHashCode() {
        let vVF4 = vF(this._x);
        vVF4 = vVF4 * 397 ^ vF(this._y);
        vVF4 = vVF4 * 397 ^ vF(this._z);
        vVF4 = vVF4 * 397 ^ vF(this._w);
        return vVF4;
      }
      cf() {
        return [this._x, this._y, this._z, this._w];
      }
      toArray(p613, yC = 0) {
        p613[yC] = this._x;
        p613[yC + 1] = this._y;
        p613[yC + 2] = this._z;
        p613[yC + 3] = this._w;
        return this;
      }
      LL(p614, yC = 0) {
        return C5.FromArrayToRef(p614, yC, this);
      }
      equals(p615) {
        return p615 && this._x === p615._x && this._y === p615._y && this._z === p615._z && this._w === p615._w;
      }
      equalsWithEpsilon(p616, yC = vP69.b) {
        return p616 && (0, vP696.WithinEpsilon)(this._x, p616._x, yC) && (0, vP696.WithinEpsilon)(this._y, p616._y, yC) && (0, vP696.WithinEpsilon)(this._z, p616._z, yC) && (0, vP696.WithinEpsilon)(this._w, p616._w, yC);
      }
      isApprox(p617, yC = vP69.b) {
        return p617 && ((0, vP696.WithinEpsilon)(this._x, p617._x, yC) && (0, vP696.WithinEpsilon)(this._y, p617._y, yC) && (0, vP696.WithinEpsilon)(this._z, p617._z, yC) && (0, vP696.WithinEpsilon)(this._w, p617._w, yC) || (0, vP696.WithinEpsilon)(this._x, -p617._x, yC) && (0, vP696.WithinEpsilon)(this._y, -p617._y, yC) && (0, vP696.WithinEpsilon)(this._z, -p617._z, yC) && (0, vP696.WithinEpsilon)(this._w, -p617._w, yC));
      }
      clone() {
        return new C5(this._x, this._y, this._z, this._w);
      }
      fC(p618) {
        this._x = p618._x;
        this._y = p618._y;
        this._z = p618._z;
        this._w = p618._w;
        this._isDirty = true;
        return this;
      }
      jg(p619, p620, p621, p622) {
        this._x = p619;
        this._y = p620;
        this._z = p621;
        this._w = p622;
        this._isDirty = true;
        return this;
      }
      set(p623, p624, p625, p626) {
        return this.jg(p623, p624, p625, p626);
      }
      gg(p627) {
        return this.jg(p627, p627, p627, p627);
      }
      add(p628) {
        return new C5(this._x + p628._x, this._y + p628._y, this._z + p628._z, this._w + p628._w);
      }
      addInPlace(p629) {
        this._x += p629._x;
        this._y += p629._y;
        this._z += p629._z;
        this._w += p629._w;
        this._isDirty = true;
        return this;
      }
      addToRef(p630, p631) {
        p631._x = this._x + p630._x;
        p631._y = this._y + p630._y;
        p631._z = this._z + p630._z;
        p631._w = this._w + p630._w;
        p631._isDirty = true;
        return p631;
      }
      addInPlaceFromFloats(p632, p633, p634, p635) {
        this._x += p632;
        this._y += p633;
        this._z += p634;
        this._w += p635;
        this._isDirty = true;
        return this;
      }
      subtractToRef(p636, p637) {
        p637._x = this._x - p636._x;
        p637._y = this._y - p636._y;
        p637._z = this._z - p636._z;
        p637._w = this._w - p636._w;
        p637._isDirty = true;
        return p637;
      }
      subtractFromFloats(p638, p639, p640, p641) {
        return this.subtractFromFloatsToRef(p638, p639, p640, p641, new C5());
      }
      subtractFromFloatsToRef(p642, p643, p644, p645, p646) {
        p646._x = this._x - p642;
        p646._y = this._y - p643;
        p646._z = this._z - p644;
        p646._w = this._w - p645;
        p646._isDirty = true;
        return p646;
      }
      Wy(p647) {
        return new C5(this._x - p647._x, this._y - p647._y, this._z - p647._z, this._w - p647._w);
      }
      Ze(p648) {
        this._x -= p648._x;
        this._y -= p648._y;
        this._z -= p648._z;
        this._w -= p648._w;
        this._isDirty = true;
        return this;
      }
      scale(p649) {
        return new C5(this._x * p649, this._y * p649, this._z * p649, this._w * p649);
      }
      scaleToRef(p650, p651) {
        p651._x = this._x * p650;
        p651._y = this._y * p650;
        p651._z = this._z * p650;
        p651._w = this._w * p650;
        p651._isDirty = true;
        return p651;
      }
      scaleInPlace(p652) {
        this._x *= p652;
        this._y *= p652;
        this._z *= p652;
        this._w *= p652;
        this._isDirty = true;
        return this;
      }
      scaleAndAddToRef(p653, p654) {
        p654._x += this._x * p653;
        p654._y += this._y * p653;
        p654._z += this._z * p653;
        p654._w += this._w * p653;
        p654._isDirty = true;
        return p654;
      }
      multiply(p655) {
        const v290 = new C5(0, 0, 0, 1);
        this.multiplyToRef(p655, v290);
        return v290;
      }
      multiplyToRef(p656, p657) {
        const v291 = this._x * p656._w + this._y * p656._z - this._z * p656._y + this._w * p656._x;
        const v292 = -this._x * p656._z + this._y * p656._w + this._z * p656._x + this._w * p656._y;
        const v293 = this._x * p656._y - this._y * p656._x + this._z * p656._w + this._w * p656._z;
        const v294 = -this._x * p656._x - this._y * p656._y - this._z * p656._z + this._w * p656._w;
        p657.jg(v291, v292, v293, v294);
        return p657;
      }
      multiplyInPlace(p658) {
        return this.multiplyToRef(p658, this);
      }
      multiplyByFloats(p659, p660, p661, p662) {
        this._x *= p659;
        this._y *= p660;
        this._z *= p661;
        this._w *= p662;
        this._isDirty = true;
        return this;
      }
      divide(p663) {
        throw new ReferenceError("Can not divide a quaternion");
      }
      divideToRef(p664, p665) {
        throw new ReferenceError("Can not divide a quaternion");
      }
      divideInPlace(p666) {
        throw new ReferenceError("Can not divide a quaternion");
      }
      minimizeInPlace() {
        throw new ReferenceError("Can not minimize a quaternion");
      }
      minimizeInPlaceFromFloats() {
        throw new ReferenceError("Can not minimize a quaternion");
      }
      maximizeInPlace() {
        throw new ReferenceError("Can not maximize a quaternion");
      }
      maximizeInPlaceFromFloats() {
        throw new ReferenceError("Can not maximize a quaternion");
      }
      negate() {
        return this.negateToRef(new C5());
      }
      negateInPlace() {
        this._x = -this._x;
        this._y = -this._y;
        this._z = -this._z;
        this._w = -this._w;
        this._isDirty = true;
        return this;
      }
      negateToRef(p667) {
        p667._x = -this._x;
        p667._y = -this._y;
        p667._z = -this._z;
        p667._w = -this._w;
        p667._isDirty = true;
        return p667;
      }
      equalsToFloats(p668, p669, p670, p671) {
        return this._x === p668 && this._y === p669 && this._z === p670 && this._w === p671;
      }
      floorToRef(p672) {
        throw new ReferenceError("Can not floor a quaternion");
      }
      floor() {
        throw new ReferenceError("Can not floor a quaternion");
      }
      fractToRef(p673) {
        throw new ReferenceError("Can not fract a quaternion");
      }
      fract() {
        throw new ReferenceError("Can not fract a quaternion");
      }
      conjugateToRef(p674) {
        p674.jg(-this._x, -this._y, -this._z, this._w);
        return p674;
      }
      conjugateInPlace() {
        this._x *= -1;
        this._y *= -1;
        this._z *= -1;
        this._isDirty = true;
        return this;
      }
      conjugate() {
        return new C5(-this._x, -this._y, -this._z, this._w);
      }
      invert() {
        const v295 = this.conjugate();
        const v296 = this.lengthSquared();
        if (v296 != 0 && v296 != 1) {
          v295.scaleInPlace(1 / v296);
        }
        return v295;
      }
      invertInPlace() {
        this.conjugateInPlace();
        const v297 = this.lengthSquared();
        if (v297 != 0 && v297 != 1) {
          this.scaleInPlace(1 / v297);
        }
        return this;
      }
      lengthSquared() {
        return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
      }
      length() {
        return Math.sqrt(this.lengthSquared());
      }
      normalize() {
        return this.normalizeFromLength(this.length());
      }
      normalizeFromLength(p675) {
        if (p675 === 0 || p675 === 1) {
          return this;
        } else {
          return this.scaleInPlace(1 / p675);
        }
      }
      normalizeToNew() {
        const v298 = new C5(0, 0, 0, 1);
        this.normalizeToRef(v298);
        return v298;
      }
      normalizeToRef(p676) {
        const v299 = this.length();
        if (v299 === 0 || v299 === 1) {
          return p676.jg(this._x, this._y, this._z, this._w);
        } else {
          return this.scaleToRef(1 / v299, p676);
        }
      }
      toEulerAngles() {
        const v300 = C3.Zero();
        this.toEulerAnglesToRef(v300);
        return v300;
      }
      toEulerAnglesToRef(p677) {
        const v301 = this._z;
        const v302 = this._x;
        const v303 = this._y;
        const v304 = this._w;
        const v305 = v303 * v301 - v302 * v304;
        const vLN04999999 = 0.4999999;
        if (v305 < -vLN04999999) {
          p677._y = Math.atan2(v303, v304) * 2;
          p677._x = Math.PI / 2;
          p677._z = 0;
          p677._isDirty = true;
        } else if (v305 > vLN04999999) {
          p677._y = Math.atan2(v303, v304) * 2;
          p677._x = -Math.PI / 2;
          p677._z = 0;
          p677._isDirty = true;
        } else {
          const v306 = v304 * v304;
          const v307 = v301 * v301;
          const v308 = v302 * v302;
          const v309 = v303 * v303;
          p677._z = Math.atan2((v302 * v303 + v301 * v304) * 2, -v307 - v308 + v309 + v306);
          p677._x = Math.asin(v305 * -2);
          p677._y = Math.atan2((v301 * v302 + v303 * v304) * 2, v307 - v308 - v309 + v306);
          p677._isDirty = true;
        }
        return p677;
      }
      toAlphaBetaGammaToRef(p678) {
        const v310 = this._z;
        const v311 = this._x;
        const v312 = this._y;
        const v313 = this._w;
        const v314 = Math.sqrt(v311 * v311 + v312 * v312);
        const v315 = Math.sqrt(v310 * v310 + v313 * v313);
        const v316 = Math.atan2(v314, v315) * 2;
        const v317 = Math.atan2(v310, v313) * 2;
        const v318 = Math.atan2(v312, v311) * 2;
        const v319 = (v317 + v318) / 2;
        const v320 = (v317 - v318) / 2;
        p678.set(v320, v316, v319);
        return p678;
      }
      toRotationMatrix(p679) {
        C6.FromQuaternionToRef(this, p679);
        return p679;
      }
      fromRotationMatrix(p680) {
        C5.FromRotationMatrixToRef(p680, this);
        return this;
      }
      dot(p681) {
        return this._x * p681._x + this._y * p681._y + this._z * p681._z + this._w * p681._w;
      }
      toAxisAngle() {
        const v321 = C3.Zero();
        return {
          axis: v321,
          angle: this.toAxisAngleToRef(v321)
        };
      }
      toAxisAngleToRef(p682) {
        let vLN05 = 0;
        const v322 = Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z);
        const v323 = this._w;
        if (v322 > 0) {
          vLN05 = Math.atan2(v322, v323) * 2;
          p682.set(this._x / v322, this._y / v322, this._z / v322);
        } else {
          vLN05 = 0;
          p682.set(1, 0, 0);
        }
        return vLN05;
      }
      static FromRotationMatrix(p683) {
        const v324 = new C5();
        C5.FromRotationMatrixToRef(p683, v324);
        return v324;
      }
      static FromRotationMatrixToRef(p684, p685) {
        const v325 = p684.m;
        const v326 = v325[0];
        const v327 = v325[4];
        const v328 = v325[8];
        const v329 = v325[1];
        const v330 = v325[5];
        const v331 = v325[9];
        const v332 = v325[2];
        const v333 = v325[6];
        const v334 = v325[10];
        const v335 = v326 + v330 + v334;
        let v336;
        if (v335 > 0) {
          v336 = 0.5 / Math.sqrt(v335 + 1);
          p685._w = 0.25 / v336;
          p685._x = (v333 - v331) * v336;
          p685._y = (v328 - v332) * v336;
          p685._z = (v329 - v327) * v336;
          p685._isDirty = true;
        } else if (v326 > v330 && v326 > v334) {
          v336 = Math.sqrt(1 + v326 - v330 - v334) * 2;
          p685._w = (v333 - v331) / v336;
          p685._x = v336 * 0.25;
          p685._y = (v327 + v329) / v336;
          p685._z = (v328 + v332) / v336;
          p685._isDirty = true;
        } else if (v330 > v334) {
          v336 = Math.sqrt(1 + v330 - v326 - v334) * 2;
          p685._w = (v328 - v332) / v336;
          p685._x = (v327 + v329) / v336;
          p685._y = v336 * 0.25;
          p685._z = (v331 + v333) / v336;
          p685._isDirty = true;
        } else {
          v336 = Math.sqrt(1 + v334 - v326 - v330) * 2;
          p685._w = (v329 - v327) / v336;
          p685._x = (v328 + v332) / v336;
          p685._y = (v331 + v333) / v336;
          p685._z = v336 * 0.25;
          p685._isDirty = true;
        }
        return p685;
      }
      static Dot(p686, p687) {
        return p686._x * p687._x + p686._y * p687._y + p686._z * p687._z + p686._w * p687._w;
      }
      static AreClose(p688, p689, IC = 0.1) {
        const v337 = C5.Dot(p688, p689);
        return 1 - v337 * v337 <= IC;
      }
      static SmoothToRef(p690, p691, p692, p693, p694) {
        let v338 = p693 === 0 ? 1 : p692 / p693;
        v338 = (0, vP696.Clamp)(v338, 0, 1);
        C5.SlerpToRef(p690, p691, v338, p694);
        return p694;
      }
      static Zero() {
        return new C5(0, 0, 0, 0);
      }
      static Inverse(p695) {
        return new C5(-p695._x, -p695._y, -p695._z, p695._w);
      }
      static InverseToRef(p696, p697) {
        p697.set(-p696._x, -p696._y, -p696._z, p696._w);
        return p697;
      }
      static Identity() {
        return new C5(0, 0, 0, 1);
      }
      static IsIdentity(p698) {
        return p698 && p698._x === 0 && p698._y === 0 && p698._z === 0 && p698._w === 1;
      }
      static RotationAxis(p699, p700) {
        return C5.RotationAxisToRef(p699, p700, new C5());
      }
      static RotationAxisToRef(p701, p702, p703) {
        p703._w = Math.cos(p702 / 2);
        const v339 = Math.sin(p702 / 2) / p701.length();
        p703._x = p701._x * v339;
        p703._y = p701._y * v339;
        p703._z = p701._z * v339;
        p703._isDirty = true;
        return p703;
      }
      static OL(p704, p705) {
        p705 ||= 0;
        return new C5(p704[p705], p704[p705 + 1], p704[p705 + 2], p704[p705 + 3]);
      }
      static FromArrayToRef(p706, p707, p708) {
        p708._x = p706[p707];
        p708._y = p706[p707 + 1];
        p708._z = p706[p707 + 2];
        p708._w = p706[p707 + 3];
        p708._isDirty = true;
        return p708;
      }
      static FromFloatsToRef(p709, p710, p711, p712, p713) {
        p713.jg(p709, p710, p711, p712);
        return p713;
      }
      static FromEulerAngles(p714, p715, p716) {
        const v340 = new C5();
        C5.RotationYawPitchRollToRef(p715, p714, p716, v340);
        return v340;
      }
      static FromEulerAnglesToRef(p717, p718, p719, p720) {
        C5.RotationYawPitchRollToRef(p718, p717, p719, p720);
        return p720;
      }
      static FromEulerVector(p721) {
        const v341 = new C5();
        C5.RotationYawPitchRollToRef(p721._y, p721._x, p721._z, v341);
        return v341;
      }
      static FromEulerVectorToRef(p722, p723) {
        C5.RotationYawPitchRollToRef(p722._y, p722._x, p722._z, p723);
        return p723;
      }
      static FromUnitVectorsToRef(p724, p725, p726, ky = vP69.b) {
        const v342 = C3.Dot(p724, p725) + 1;
        if (v342 < ky) {
          if (Math.abs(p724.x) > Math.abs(p724.z)) {
            p726.set(-p724.y, p724.x, 0, 0);
          } else {
            p726.set(0, -p724.z, p724.y, 0);
          }
        } else {
          C3.CrossToRef(p724, p725, C8.bL[0]);
          p726.set(C8.bL[0].x, C8.bL[0].y, C8.bL[0].z, v342);
        }
        return p726.normalize();
      }
      static RotationYawPitchRoll(p727, p728, p729) {
        const v343 = new C5();
        C5.RotationYawPitchRollToRef(p727, p728, p729, v343);
        return v343;
      }
      static RotationYawPitchRollToRef(p730, p731, p732, p733) {
        const v344 = p732 * 0.5;
        const v345 = p731 * 0.5;
        const v346 = p730 * 0.5;
        const v347 = Math.sin(v344);
        const v348 = Math.cos(v344);
        const v349 = Math.sin(v345);
        const v350 = Math.cos(v345);
        const v351 = Math.sin(v346);
        const v352 = Math.cos(v346);
        p733._x = v352 * v349 * v348 + v351 * v350 * v347;
        p733._y = v351 * v350 * v348 - v352 * v349 * v347;
        p733._z = v352 * v350 * v347 - v351 * v349 * v348;
        p733._w = v352 * v350 * v348 + v351 * v349 * v347;
        p733._isDirty = true;
        return p733;
      }
      static RotationAlphaBetaGamma(p734, p735, p736) {
        const v353 = new C5();
        C5.RotationAlphaBetaGammaToRef(p734, p735, p736, v353);
        return v353;
      }
      static RotationAlphaBetaGammaToRef(p737, p738, p739, p740) {
        const v354 = (p739 + p737) * 0.5;
        const v355 = (p739 - p737) * 0.5;
        const v356 = p738 * 0.5;
        p740._x = Math.cos(v355) * Math.sin(v356);
        p740._y = Math.sin(v355) * Math.sin(v356);
        p740._z = Math.sin(v354) * Math.cos(v356);
        p740._w = Math.cos(v354) * Math.cos(v356);
        p740._isDirty = true;
        return p740;
      }
      static RotationQuaternionFromAxis(p741, p742, p743) {
        const v357 = new C5(0, 0, 0, 0);
        C5.RotationQuaternionFromAxisToRef(p741, p742, p743, v357);
        return v357;
      }
      static RotationQuaternionFromAxisToRef(p744, p745, p746, p747) {
        const v358 = C7.Matrix[0];
        p744 = p744.normalizeToRef(C7.bL[0]);
        p745 = p745.normalizeToRef(C7.bL[1]);
        p746 = p746.normalizeToRef(C7.bL[2]);
        C6.FromXYZAxesToRef(p744, p745, p746, v358);
        C5.FromRotationMatrixToRef(v358, p747);
        return p747;
      }
      static FromLookDirectionLH(p748, p749) {
        const v359 = new C5();
        C5.FromLookDirectionLHToRef(p748, p749, v359);
        return v359;
      }
      static FromLookDirectionLHToRef(p750, p751, p752) {
        const v360 = C7.Matrix[0];
        C6.LookDirectionLHToRef(p750, p751, v360);
        C5.FromRotationMatrixToRef(v360, p752);
        return p752;
      }
      static FromLookDirectionRH(p753, p754) {
        const v361 = new C5();
        C5.FromLookDirectionRHToRef(p753, p754, v361);
        return v361;
      }
      static FromLookDirectionRHToRef(p755, p756, p757) {
        const v362 = C7.Matrix[0];
        C6.LookDirectionRHToRef(p755, p756, v362);
        return C5.FromRotationMatrixToRef(v362, p757);
      }
      static Slerp(p758, p759, p760) {
        const v363 = C5.Identity();
        C5.SlerpToRef(p758, p759, p760, v363);
        return v363;
      }
      static SlerpToRef(p761, p762, p763, p764) {
        let v364;
        let v365;
        let v366 = p761._x * p762._x + p761._y * p762._y + p761._z * p762._z + p761._w * p762._w;
        let v367 = false;
        if (v366 < 0) {
          v367 = true;
          v366 = -v366;
        }
        if (v366 > 0.999999) {
          v365 = 1 - p763;
          v364 = v367 ? -p763 : p763;
        } else {
          const v368 = Math.acos(v366);
          const v369 = 1 / Math.sin(v368);
          v365 = Math.sin((1 - p763) * v368) * v369;
          v364 = v367 ? -Math.sin(p763 * v368) * v369 : Math.sin(p763 * v368) * v369;
        }
        p764._x = v365 * p761._x + v364 * p762._x;
        p764._y = v365 * p761._y + v364 * p762._y;
        p764._z = v365 * p761._z + v364 * p762._z;
        p764._w = v365 * p761._w + v364 * p762._w;
        p764._isDirty = true;
        return p764;
      }
      static Hermite(p765, p766, p767, p768, p769) {
        const v370 = p769 * p769;
        const v371 = p769 * v370;
        const v372 = v371 * 2 - v370 * 3 + 1;
        const v373 = v371 * -2 + v370 * 3;
        const v374 = v371 - v370 * 2 + p769;
        const v375 = v371 - v370;
        const v376 = p765._x * v372 + p767._x * v373 + p766._x * v374 + p768._x * v375;
        const v377 = p765._y * v372 + p767._y * v373 + p766._y * v374 + p768._y * v375;
        const v378 = p765._z * v372 + p767._z * v373 + p766._z * v374 + p768._z * v375;
        const v379 = p765._w * v372 + p767._w * v373 + p766._w * v374 + p768._w * v375;
        return new C5(v376, v377, v378, v379);
      }
      static Hermite1stDerivative(p770, p771, p772, p773, p774) {
        const v380 = new C5();
        this.Hermite1stDerivativeToRef(p770, p771, p772, p773, p774, v380);
        return v380;
      }
      static Hermite1stDerivativeToRef(p775, p776, p777, p778, p779, p780) {
        const v381 = p779 * p779;
        p780._x = (v381 - p779) * 6 * p775._x + (v381 * 3 - p779 * 4 + 1) * p776._x + (-v381 + p779) * 6 * p777._x + (v381 * 3 - p779 * 2) * p778._x;
        p780._y = (v381 - p779) * 6 * p775._y + (v381 * 3 - p779 * 4 + 1) * p776._y + (-v381 + p779) * 6 * p777._y + (v381 * 3 - p779 * 2) * p778._y;
        p780._z = (v381 - p779) * 6 * p775._z + (v381 * 3 - p779 * 4 + 1) * p776._z + (-v381 + p779) * 6 * p777._z + (v381 * 3 - p779 * 2) * p778._z;
        p780._w = (v381 - p779) * 6 * p775._w + (v381 * 3 - p779 * 4 + 1) * p776._w + (-v381 + p779) * 6 * p777._w + (v381 * 3 - p779 * 2) * p778._w;
        p780._isDirty = true;
        return p780;
      }
      static Normalize(p781) {
        const v382 = C5.Zero();
        C5.NormalizeToRef(p781, v382);
        return v382;
      }
      static NormalizeToRef(p782, p783) {
        p782.normalizeToRef(p783);
        return p783;
      }
      static Clamp(p784, p785, p786) {
        const v383 = new C5();
        C5.ClampToRef(p784, p785, p786, v383);
        return v383;
      }
      static ClampToRef(p787, p788, p789, p790) {
        return p790.jg((0, vP696.Clamp)(p787.x, p788.x, p789.x), (0, vP696.Clamp)(p787.y, p788.y, p789.y), (0, vP696.Clamp)(p787.z, p788.z, p789.z), (0, vP696.Clamp)(p787.w, p788.w, p789.w));
      }
      static Random(CC = 0, yC = 1) {
        return new C5((0, vP696.RandomRange)(CC, yC), (0, vP696.RandomRange)(CC, yC), (0, vP696.RandomRange)(CC, yC), (0, vP696.RandomRange)(CC, yC));
      }
      static RandomToRef(CC = 0, yC = 1) {
        return (arguments.length > 2 ? arguments[2] : undefined).jg((0, vP696.RandomRange)(CC, yC), (0, vP696.RandomRange)(CC, yC), (0, vP696.RandomRange)(CC, yC), (0, vP696.RandomRange)(CC, yC));
      }
      static Minimize() {
        throw new ReferenceError("Quaternion.Minimize does not make sense");
      }
      static Maximize() {
        throw new ReferenceError("Quaternion.Maximize does not make sense");
      }
      static Distance(p791, p792) {
        return Math.sqrt(C5.DistanceSquared(p791, p792));
      }
      static DistanceSquared(p793, p794) {
        const v384 = p793.x - p794.x;
        const v385 = p793.y - p794.y;
        const v386 = p793.z - p794.z;
        const v387 = p793.w - p794.w;
        return v384 * v384 + v385 * v385 + v386 * v386 + v387 * v387;
      }
      static Center(p795, p796) {
        return C5.CenterToRef(p795, p796, C5.Zero());
      }
      static CenterToRef(p797, p798, p799) {
        return p799.jg((p797.x + p798.x) / 2, (p797.y + p798.y) / 2, (p797.z + p798.z) / 2, (p797.w + p798.w) / 2);
      }
    }
    C5._V8PerformanceHack = new C5(0.5, 0.5, 0.5, 0.5);
    Object.defineProperties(C5.prototype, {
      dimension: {
        value: [4]
      },
      rank: {
        value: 1
      }
    });
    class C6 {
      static get Use64Bits() {
        return vP694.d.MatrixUse64Bits;
      }
      get m() {
        return this.Yf;
      }
      markAsUpdated() {
        this.updateFlag = C._UpdateFlagSeed++;
        this._isIdentity = false;
        this._isIdentity3x2 = false;
        this._isIdentityDirty = true;
        this._isIdentity3x2Dirty = true;
      }
      _updateIdentityStatus(p800, yC = false, IC = false) {
        let v388 = !(arguments.length > 3) || arguments[3] === undefined || arguments[3];
        this._isIdentity = p800;
        this._isIdentity3x2 = p800 || IC;
        this._isIdentityDirty = !this._isIdentity && yC;
        this._isIdentity3x2Dirty = !this._isIdentity3x2 && v388;
      }
      constructor() {
        this._isIdentity = false;
        this._isIdentityDirty = true;
        this._isIdentity3x2 = true;
        this._isIdentity3x2Dirty = true;
        this.updateFlag = -1;
        if (vP694.d.MatrixTrackPrecisionChange) {
          vP694.d.MatrixTrackedMatrices.push(this);
        }
        this.Yf = new vP694.d.MatrixCurrentType(16);
        this.markAsUpdated();
      }
      isIdentity() {
        if (this._isIdentityDirty) {
          this._isIdentityDirty = false;
          const v389 = this.Yf;
          this._isIdentity = v389[0] === 1 && v389[1] === 0 && v389[2] === 0 && v389[3] === 0 && v389[4] === 0 && v389[5] === 1 && v389[6] === 0 && v389[7] === 0 && v389[8] === 0 && v389[9] === 0 && v389[10] === 1 && v389[11] === 0 && v389[12] === 0 && v389[13] === 0 && v389[14] === 0 && v389[15] === 1;
        }
        return this._isIdentity;
      }
      isIdentityAs3x2() {
        if (this._isIdentity3x2Dirty) {
          this._isIdentity3x2Dirty = false;
          if (this.Yf[0] !== 1 || this.Yf[5] !== 1 || this.Yf[15] !== 1 || this.Yf[1] !== 0 || this.Yf[2] !== 0 || this.Yf[3] !== 0 || this.Yf[4] !== 0 || this.Yf[6] !== 0 || this.Yf[7] !== 0 || this.Yf[8] !== 0 || this.Yf[9] !== 0 || this.Yf[10] !== 0 || this.Yf[11] !== 0 || this.Yf[12] !== 0 || this.Yf[13] !== 0 || this.Yf[14] !== 0) {
            this._isIdentity3x2 = false;
          } else {
            this._isIdentity3x2 = true;
          }
        }
        return this._isIdentity3x2;
      }
      determinant() {
        if (this._isIdentity === true) {
          return 1;
        }
        const v390 = this.Yf;
        const v391 = v390[0];
        const v392 = v390[1];
        const v393 = v390[2];
        const v394 = v390[3];
        const v395 = v390[4];
        const v396 = v390[5];
        const v397 = v390[6];
        const v398 = v390[7];
        const v399 = v390[8];
        const v400 = v390[9];
        const v401 = v390[10];
        const v402 = v390[11];
        const v403 = v390[12];
        const v404 = v390[13];
        const v405 = v390[14];
        const v406 = v390[15];
        const v407 = v401 * v406 - v405 * v402;
        const v408 = v400 * v406 - v404 * v402;
        const v409 = v400 * v405 - v404 * v401;
        const v410 = v399 * v406 - v403 * v402;
        const v411 = v399 * v405 - v401 * v403;
        const v412 = v399 * v404 - v403 * v400;
        return v391 * +(v396 * v407 - v397 * v408 + v398 * v409) + v392 * -(v395 * v407 - v397 * v410 + v398 * v411) + v393 * +(v395 * v408 - v396 * v410 + v398 * v412) + v394 * -(v395 * v409 - v396 * v411 + v397 * v412);
      }
      toString() {
        return `{${this.m[0]}, ${this.m[1]}, ${this.m[2]}, ${this.m[3]}
${this.m[4]}, ${this.m[5]}, ${this.m[6]}, ${this.m[7]}
${this.m[8]}, ${this.m[9]}, ${this.m[10]}, ${this.m[11]}
${this.m[12]}, ${this.m[13]}, ${this.m[14]}, ${this.m[15]}}`;
      }
      toArray(CC = null, yC = 0) {
        if (!CC) {
          return this.Yf;
        }
        const v413 = this.Yf;
        for (let vLN06 = 0; vLN06 < 16; vLN06++) {
          CC[yC + vLN06] = v413[vLN06];
        }
        return this;
      }
      cf() {
        return this.Yf;
      }
      LL(p801, yC = 0) {
        return C6.FromArrayToRef(p801, yC, this);
      }
      jg() {
        for (var v414 = arguments.length, v415 = new Array(v414), vLN07 = 0; vLN07 < v414; vLN07++) {
          v415[vLN07] = arguments[vLN07];
        }
        return C6.FromArrayToRef(v415, 0, this);
      }
      set() {
        const v416 = this.Yf;
        for (let vLN08 = 0; vLN08 < 16; vLN08++) {
          v416[vLN08] = vLN08 < 0 || arguments.length <= vLN08 ? undefined : arguments[vLN08];
        }
        this.markAsUpdated();
        return this;
      }
      gg(p802) {
        const v417 = this.Yf;
        for (let vLN09 = 0; vLN09 < 16; vLN09++) {
          v417[vLN09] = p802;
        }
        this.markAsUpdated();
        return this;
      }
      invert() {
        this.invertToRef(this);
        return this;
      }
      reset() {
        C6.FromValuesToRef(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, this);
        this._updateIdentityStatus(false);
        return this;
      }
      add(p803) {
        const v418 = new C6();
        this.addToRef(p803, v418);
        return v418;
      }
      addToRef(p804, p805) {
        const v419 = this.Yf;
        const v420 = p805.Yf;
        const v421 = p804.m;
        for (let vLN010 = 0; vLN010 < 16; vLN010++) {
          v420[vLN010] = v419[vLN010] + v421[vLN010];
        }
        p805.markAsUpdated();
        return p805;
      }
      addToSelf(p806) {
        const v422 = this.Yf;
        const v423 = p806.m;
        v422[0] += v423[0];
        v422[1] += v423[1];
        v422[2] += v423[2];
        v422[3] += v423[3];
        v422[4] += v423[4];
        v422[5] += v423[5];
        v422[6] += v423[6];
        v422[7] += v423[7];
        v422[8] += v423[8];
        v422[9] += v423[9];
        v422[10] += v423[10];
        v422[11] += v423[11];
        v422[12] += v423[12];
        v422[13] += v423[13];
        v422[14] += v423[14];
        v422[15] += v423[15];
        this.markAsUpdated();
        return this;
      }
      addInPlace(p807) {
        const v424 = this.Yf;
        const v425 = p807.m;
        for (let vLN011 = 0; vLN011 < 16; vLN011++) {
          v424[vLN011] += v425[vLN011];
        }
        this.markAsUpdated();
        return this;
      }
      addInPlaceFromFloats() {
        const v426 = this.Yf;
        for (let vLN012 = 0; vLN012 < 16; vLN012++) {
          v426[vLN012] += vLN012 < 0 || arguments.length <= vLN012 ? undefined : arguments[vLN012];
        }
        this.markAsUpdated();
        return this;
      }
      Wy(p808) {
        const v427 = this.Yf;
        const v428 = p808.m;
        for (let vLN013 = 0; vLN013 < 16; vLN013++) {
          v427[vLN013] -= v428[vLN013];
        }
        this.markAsUpdated();
        return this;
      }
      subtractToRef(p809, p810) {
        const v429 = this.Yf;
        const v430 = p809.m;
        const v431 = p810.Yf;
        for (let vLN014 = 0; vLN014 < 16; vLN014++) {
          v431[vLN014] = v429[vLN014] - v430[vLN014];
        }
        p810.markAsUpdated();
        return p810;
      }
      Ze(p811) {
        const v432 = this.Yf;
        const v433 = p811.m;
        for (let vLN015 = 0; vLN015 < 16; vLN015++) {
          v432[vLN015] -= v433[vLN015];
        }
        this.markAsUpdated();
        return this;
      }
      subtractFromFloats() {
        for (var v434 = arguments.length, v435 = new Array(v434), vLN016 = 0; vLN016 < v434; vLN016++) {
          v435[vLN016] = arguments[vLN016];
        }
        return this.subtractFromFloatsToRef(...v435, new C6());
      }
      subtractFromFloatsToRef() {
        for (var v436 = arguments.length, v437 = new Array(v436), vLN017 = 0; vLN017 < v436; vLN017++) {
          v437[vLN017] = arguments[vLN017];
        }
        const v438 = v437.pop();
        const v439 = this.Yf;
        const v440 = v438.Yf;
        const vV437 = v437;
        for (let vLN018 = 0; vLN018 < 16; vLN018++) {
          v440[vLN018] = v439[vLN018] - vV437[vLN018];
        }
        v438.markAsUpdated();
        return v438;
      }
      invertToRef(p812) {
        if (this._isIdentity === true) {
          C6.IdentityToRef(p812);
          return p812;
        } else {
          if (bC(this, p812.cf())) {
            p812.markAsUpdated();
          } else {
            p812.fC(this);
          }
          return p812;
        }
      }
      addAtIndex(p813, p814) {
        this.Yf[p813] += p814;
        this.markAsUpdated();
        return this;
      }
      multiplyAtIndex(p815, p816) {
        this.Yf[p815] *= p816;
        this.markAsUpdated();
        return this;
      }
      setTranslationFromFloats(p817, p818, p819) {
        this.Yf[12] = p817;
        this.Yf[13] = p818;
        this.Yf[14] = p819;
        this.markAsUpdated();
        return this;
      }
      addTranslationFromFloats(p820, p821, p822) {
        this.Yf[12] += p820;
        this.Yf[13] += p821;
        this.Yf[14] += p822;
        this.markAsUpdated();
        return this;
      }
      setTranslation(p823) {
        return this.setTranslationFromFloats(p823._x, p823._y, p823._z);
      }
      getTranslation() {
        return new C3(this.Yf[12], this.Yf[13], this.Yf[14]);
      }
      getTranslationToRef(p824) {
        p824.x = this.Yf[12];
        p824.y = this.Yf[13];
        p824.z = this.Yf[14];
        return p824;
      }
      removeRotationAndScaling() {
        const v441 = this.m;
        C6.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, v441[12], v441[13], v441[14], v441[15], this);
        this._updateIdentityStatus(v441[12] === 0 && v441[13] === 0 && v441[14] === 0 && v441[15] === 1);
        return this;
      }
      fC(p825) {
        p825.copyToArray(this.Yf);
        const vP825 = p825;
        this.updateFlag = vP825.updateFlag;
        this._updateIdentityStatus(vP825._isIdentity, vP825._isIdentityDirty, vP825._isIdentity3x2, vP825._isIdentity3x2Dirty);
        return this;
      }
      copyToArray(p826) {
        f26(this, p826, arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0);
        return this;
      }
      multiply(p827) {
        const v442 = new C6();
        this.multiplyToRef(p827, v442);
        return v442;
      }
      multiplyInPlace(p828) {
        const v443 = this.Yf;
        const v444 = p828.m;
        for (let vLN019 = 0; vLN019 < 16; vLN019++) {
          v443[vLN019] *= v444[vLN019];
        }
        this.markAsUpdated();
        return this;
      }
      multiplyByFloats() {
        const v445 = this.Yf;
        for (let vLN020 = 0; vLN020 < 16; vLN020++) {
          v445[vLN020] *= vLN020 < 0 || arguments.length <= vLN020 ? undefined : arguments[vLN020];
        }
        this.markAsUpdated();
        return this;
      }
      multiplyByFloatsToRef() {
        for (var v446 = arguments.length, v447 = new Array(v446), vLN021 = 0; vLN021 < v446; vLN021++) {
          v447[vLN021] = arguments[vLN021];
        }
        const v448 = v447.pop();
        const v449 = this.Yf;
        const v450 = v448.Yf;
        const vV447 = v447;
        for (let vLN022 = 0; vLN022 < 16; vLN022++) {
          v450[vLN022] = v449[vLN022] * vV447[vLN022];
        }
        v448.markAsUpdated();
        return v448;
      }
      multiplyToRef(p829, p830) {
        if (this._isIdentity) {
          p830.fC(p829);
          return p830;
        } else if (p829._isIdentity) {
          p830.fC(this);
          return p830;
        } else {
          this.multiplyToArray(p829, p830.Yf, 0);
          p830.markAsUpdated();
          return p830;
        }
      }
      multiplyToArray(p831, p832, p833) {
        LC(this, p831, p832, p833);
        return this;
      }
      divide(p834) {
        return this.divideToRef(p834, new C6());
      }
      divideToRef(p835, p836) {
        const v451 = this.Yf;
        const v452 = p835.m;
        const v453 = p836.Yf;
        for (let vLN023 = 0; vLN023 < 16; vLN023++) {
          v453[vLN023] = v451[vLN023] / v452[vLN023];
        }
        p836.markAsUpdated();
        return p836;
      }
      divideInPlace(p837) {
        const v454 = this.Yf;
        const v455 = p837.m;
        for (let vLN024 = 0; vLN024 < 16; vLN024++) {
          v454[vLN024] /= v455[vLN024];
        }
        this.markAsUpdated();
        return this;
      }
      minimizeInPlace(p838) {
        const v456 = this.Yf;
        const v457 = p838.m;
        for (let vLN025 = 0; vLN025 < 16; vLN025++) {
          v456[vLN025] = Math.min(v456[vLN025], v457[vLN025]);
        }
        this.markAsUpdated();
        return this;
      }
      minimizeInPlaceFromFloats() {
        const v458 = this.Yf;
        for (let vLN026 = 0; vLN026 < 16; vLN026++) {
          v458[vLN026] = Math.min(v458[vLN026], vLN026 < 0 || arguments.length <= vLN026 ? undefined : arguments[vLN026]);
        }
        this.markAsUpdated();
        return this;
      }
      maximizeInPlace(p839) {
        const v459 = this.Yf;
        const v460 = p839.m;
        for (let vLN027 = 0; vLN027 < 16; vLN027++) {
          v459[vLN027] = Math.min(v459[vLN027], v460[vLN027]);
        }
        this.markAsUpdated();
        return this;
      }
      maximizeInPlaceFromFloats() {
        const v461 = this.Yf;
        for (let vLN028 = 0; vLN028 < 16; vLN028++) {
          v461[vLN028] = Math.min(v461[vLN028], vLN028 < 0 || arguments.length <= vLN028 ? undefined : arguments[vLN028]);
        }
        this.markAsUpdated();
        return this;
      }
      negate() {
        return this.negateToRef(new C6());
      }
      negateInPlace() {
        const v462 = this.Yf;
        for (let vLN029 = 0; vLN029 < 16; vLN029++) {
          v462[vLN029] = -v462[vLN029];
        }
        this.markAsUpdated();
        return this;
      }
      negateToRef(p840) {
        const v463 = this.Yf;
        const v464 = p840.Yf;
        for (let vLN030 = 0; vLN030 < 16; vLN030++) {
          v464[vLN030] = -v463[vLN030];
        }
        p840.markAsUpdated();
        return p840;
      }
      equals(p841) {
        const vP841 = p841;
        if (!vP841) {
          return false;
        }
        if ((this._isIdentity || vP841._isIdentity) && !this._isIdentityDirty && !vP841._isIdentityDirty) {
          return this._isIdentity && vP841._isIdentity;
        }
        const v465 = this.m;
        const v466 = vP841.m;
        return v465[0] === v466[0] && v465[1] === v466[1] && v465[2] === v466[2] && v465[3] === v466[3] && v465[4] === v466[4] && v465[5] === v466[5] && v465[6] === v466[6] && v465[7] === v466[7] && v465[8] === v466[8] && v465[9] === v466[9] && v465[10] === v466[10] && v465[11] === v466[11] && v465[12] === v466[12] && v465[13] === v466[13] && v465[14] === v466[14] && v465[15] === v466[15];
      }
      equalsWithEpsilon(p842, yC = 0) {
        const v467 = this.Yf;
        const v468 = p842.m;
        for (let vLN031 = 0; vLN031 < 16; vLN031++) {
          if (!(0, vP696.WithinEpsilon)(v467[vLN031], v468[vLN031], yC)) {
            return false;
          }
        }
        return true;
      }
      equalsToFloats() {
        const v469 = this.Yf;
        for (let vLN032 = 0; vLN032 < 16; vLN032++) {
          if (v469[vLN032] != (vLN032 < 0 || arguments.length <= vLN032 ? undefined : arguments[vLN032])) {
            return false;
          }
        }
        return true;
      }
      floor() {
        return this.floorToRef(new C6());
      }
      floorToRef(p843) {
        const v470 = this.Yf;
        const v471 = p843.Yf;
        for (let vLN033 = 0; vLN033 < 16; vLN033++) {
          v471[vLN033] = Math.floor(v470[vLN033]);
        }
        p843.markAsUpdated();
        return p843;
      }
      fract() {
        return this.fractToRef(new C6());
      }
      fractToRef(p844) {
        const v472 = this.Yf;
        const v473 = p844.Yf;
        for (let vLN034 = 0; vLN034 < 16; vLN034++) {
          v473[vLN034] = v472[vLN034] - Math.floor(v472[vLN034]);
        }
        p844.markAsUpdated();
        return p844;
      }
      clone() {
        const v474 = new C6();
        v474.fC(this);
        return v474;
      }
      getClassName() {
        return "Matrix";
      }
      getHashCode() {
        let vVF5 = vF(this.Yf[0]);
        for (let vLN1 = 1; vLN1 < 16; vLN1++) {
          vVF5 = vVF5 * 397 ^ vF(this.Yf[vLN1]);
        }
        return vVF5;
      }
      decomposeToTransformNode(p845) {
        p845.rotationQuaternion = p845.rotationQuaternion || new C5();
        return this.decompose(p845.Cg, p845.rotationQuaternion, p845.position);
      }
      decompose(p846, p847, p848, p849) {
        let v475 = !(arguments.length > 4) || arguments[4] === undefined || arguments[4];
        if (this._isIdentity) {
          if (p848) {
            p848.gg(0);
          }
          if (p846) {
            p846.gg(1);
          }
          if (p847) {
            p847.jg(0, 0, 0, 1);
          }
          return true;
        }
        const v476 = this.Yf;
        if (p848) {
          p848.jg(v476[12], v476[13], v476[14]);
        }
        (p846 = p846 || C7.bL[0]).x = Math.sqrt(v476[0] * v476[0] + v476[1] * v476[1] + v476[2] * v476[2]);
        p846.y = Math.sqrt(v476[4] * v476[4] + v476[5] * v476[5] + v476[6] * v476[6]);
        p846.z = Math.sqrt(v476[8] * v476[8] + v476[9] * v476[9] + v476[10] * v476[10]);
        if (p849) {
          const v477 = (v475 ? p849.absoluteScaling.x : p849.Cg.x) < 0 ? -1 : 1;
          const v478 = (v475 ? p849.absoluteScaling.y : p849.Cg.y) < 0 ? -1 : 1;
          const v479 = (v475 ? p849.absoluteScaling.z : p849.Cg.z) < 0 ? -1 : 1;
          p846.x *= v477;
          p846.y *= v478;
          p846.z *= v479;
        } else if (this.determinant() <= 0) {
          p846.y *= -1;
        }
        if (p846._x === 0 || p846._y === 0 || p846._z === 0) {
          if (p847) {
            p847.jg(0, 0, 0, 1);
          }
          return false;
        }
        if (p847) {
          const v480 = 1 / p846._x;
          const v481 = 1 / p846._y;
          const v482 = 1 / p846._z;
          C6.FromValuesToRef(v476[0] * v480, v476[1] * v480, v476[2] * v480, 0, v476[4] * v481, v476[5] * v481, v476[6] * v481, 0, v476[8] * v482, v476[9] * v482, v476[10] * v482, 0, 0, 0, 0, 1, C7.Matrix[0]);
          C5.FromRotationMatrixToRef(C7.Matrix[0], p847);
        }
        return true;
      }
      getRow(p850) {
        if (p850 < 0 || p850 > 3) {
          return null;
        }
        const v483 = p850 * 4;
        return new C4(this.Yf[v483 + 0], this.Yf[v483 + 1], this.Yf[v483 + 2], this.Yf[v483 + 3]);
      }
      getRowToRef(p851, p852) {
        if (p851 >= 0 && p851 <= 3) {
          const v484 = p851 * 4;
          p852.x = this.Yf[v484 + 0];
          p852.y = this.Yf[v484 + 1];
          p852.z = this.Yf[v484 + 2];
          p852.w = this.Yf[v484 + 3];
        }
        return p852;
      }
      setRow(p853, p854) {
        return this.setRowFromFloats(p853, p854.x, p854.y, p854.z, p854.w);
      }
      transpose() {
        const v485 = new C6();
        C6.TransposeToRef(this, v485);
        return v485;
      }
      transposeToRef(p855) {
        C6.TransposeToRef(this, p855);
        return p855;
      }
      setRowFromFloats(p856, p857, p858, p859, p860) {
        if (p856 < 0 || p856 > 3) {
          return this;
        }
        const v486 = p856 * 4;
        this.Yf[v486 + 0] = p857;
        this.Yf[v486 + 1] = p858;
        this.Yf[v486 + 2] = p859;
        this.Yf[v486 + 3] = p860;
        this.markAsUpdated();
        return this;
      }
      scale(p861) {
        const v487 = new C6();
        this.scaleToRef(p861, v487);
        return v487;
      }
      scaleToRef(p862, p863) {
        for (let vLN035 = 0; vLN035 < 16; vLN035++) {
          p863.Yf[vLN035] = this.Yf[vLN035] * p862;
        }
        p863.markAsUpdated();
        return p863;
      }
      scaleAndAddToRef(p864, p865) {
        for (let vLN036 = 0; vLN036 < 16; vLN036++) {
          p865.Yf[vLN036] += this.Yf[vLN036] * p864;
        }
        p865.markAsUpdated();
        return p865;
      }
      scaleInPlace(p866) {
        const v488 = this.Yf;
        for (let vLN037 = 0; vLN037 < 16; vLN037++) {
          v488[vLN037] *= p866;
        }
        this.markAsUpdated();
        return this;
      }
      toNormalMatrix(p867) {
        const v489 = C7.Matrix[0];
        this.invertToRef(v489);
        v489.transposeToRef(p867);
        const v490 = p867.Yf;
        C6.FromValuesToRef(v490[0], v490[1], v490[2], 0, v490[4], v490[5], v490[6], 0, v490[8], v490[9], v490[10], 0, 0, 0, 0, 1, p867);
        return p867;
      }
      getRotationMatrix() {
        const v491 = new C6();
        this.getRotationMatrixToRef(v491);
        return v491;
      }
      getRotationMatrixToRef(p868) {
        const v492 = C7.bL[0];
        if (!this.decompose(v492)) {
          C6.IdentityToRef(p868);
          return p868;
        }
        const v493 = this.Yf;
        const v494 = 1 / v492._x;
        const v495 = 1 / v492._y;
        const v496 = 1 / v492._z;
        C6.FromValuesToRef(v493[0] * v494, v493[1] * v494, v493[2] * v494, 0, v493[4] * v495, v493[5] * v495, v493[6] * v495, 0, v493[8] * v496, v493[9] * v496, v493[10] * v496, 0, 0, 0, 0, 1, p868);
        return p868;
      }
      toggleModelMatrixHandInPlace() {
        const v497 = this.Yf;
        v497[2] *= -1;
        v497[6] *= -1;
        v497[8] *= -1;
        v497[9] *= -1;
        v497[14] *= -1;
        this.markAsUpdated();
        return this;
      }
      toggleProjectionMatrixHandInPlace() {
        const v498 = this.Yf;
        v498[8] *= -1;
        v498[9] *= -1;
        v498[10] *= -1;
        v498[11] *= -1;
        this.markAsUpdated();
        return this;
      }
      static OL(p869, yC = 0) {
        const v499 = new C6();
        C6.FromArrayToRef(p869, yC, v499);
        return v499;
      }
      static FromArrayToRef(p870, p871, p872) {
        for (let vLN038 = 0; vLN038 < 16; vLN038++) {
          p872.Yf[vLN038] = p870[vLN038 + p871];
        }
        p872.markAsUpdated();
        return p872;
      }
      static FromFloat32ArrayToRefScaled(p873, p874, p875, p876) {
        p876.Yf[0] = p873[0 + p874] * p875;
        p876.Yf[1] = p873[1 + p874] * p875;
        p876.Yf[2] = p873[2 + p874] * p875;
        p876.Yf[3] = p873[3 + p874] * p875;
        p876.Yf[4] = p873[4 + p874] * p875;
        p876.Yf[5] = p873[5 + p874] * p875;
        p876.Yf[6] = p873[6 + p874] * p875;
        p876.Yf[7] = p873[7 + p874] * p875;
        p876.Yf[8] = p873[8 + p874] * p875;
        p876.Yf[9] = p873[9 + p874] * p875;
        p876.Yf[10] = p873[10 + p874] * p875;
        p876.Yf[11] = p873[11 + p874] * p875;
        p876.Yf[12] = p873[12 + p874] * p875;
        p876.Yf[13] = p873[13 + p874] * p875;
        p876.Yf[14] = p873[14 + p874] * p875;
        p876.Yf[15] = p873[15 + p874] * p875;
        p876.markAsUpdated();
        return p876;
      }
      static get IdentityReadOnly() {
        return C6._IdentityReadOnly;
      }
      static FromValuesToRef(p877, p878, p879, p880, p881, p882, p883, p884, p885, p886, p887, p888, p889, p890, p891, p892, p893) {
        const v500 = p893.Yf;
        v500[0] = p877;
        v500[1] = p878;
        v500[2] = p879;
        v500[3] = p880;
        v500[4] = p881;
        v500[5] = p882;
        v500[6] = p883;
        v500[7] = p884;
        v500[8] = p885;
        v500[9] = p886;
        v500[10] = p887;
        v500[11] = p888;
        v500[12] = p889;
        v500[13] = p890;
        v500[14] = p891;
        v500[15] = p892;
        p893.markAsUpdated();
      }
      static FromValues(p894, p895, p896, p897, p898, p899, p900, p901, p902, p903, p904, p905, p906, p907, p908, p909) {
        const v501 = new C6();
        const v502 = v501.Yf;
        v502[0] = p894;
        v502[1] = p895;
        v502[2] = p896;
        v502[3] = p897;
        v502[4] = p898;
        v502[5] = p899;
        v502[6] = p900;
        v502[7] = p901;
        v502[8] = p902;
        v502[9] = p903;
        v502[10] = p904;
        v502[11] = p905;
        v502[12] = p906;
        v502[13] = p907;
        v502[14] = p908;
        v502[15] = p909;
        v501.markAsUpdated();
        return v501;
      }
      static Compose(p910, p911, p912) {
        const v503 = new C6();
        C6.ComposeToRef(p910, p911, p912, v503);
        return v503;
      }
      static ComposeToRef(p913, p914, p915, p916) {
        const v504 = p916.Yf;
        const v505 = p914._x;
        const v506 = p914._y;
        const v507 = p914._z;
        const v508 = p914._w;
        const v509 = v505 + v505;
        const v510 = v506 + v506;
        const v511 = v507 + v507;
        const v512 = v505 * v509;
        const v513 = v505 * v510;
        const v514 = v505 * v511;
        const v515 = v506 * v510;
        const v516 = v506 * v511;
        const v517 = v507 * v511;
        const v518 = v508 * v509;
        const v519 = v508 * v510;
        const v520 = v508 * v511;
        const v521 = p913._x;
        const v522 = p913._y;
        const v523 = p913._z;
        v504[0] = (1 - (v515 + v517)) * v521;
        v504[1] = (v513 + v520) * v521;
        v504[2] = (v514 - v519) * v521;
        v504[3] = 0;
        v504[4] = (v513 - v520) * v522;
        v504[5] = (1 - (v512 + v517)) * v522;
        v504[6] = (v516 + v518) * v522;
        v504[7] = 0;
        v504[8] = (v514 + v519) * v523;
        v504[9] = (v516 - v518) * v523;
        v504[10] = (1 - (v512 + v515)) * v523;
        v504[11] = 0;
        v504[12] = p915._x;
        v504[13] = p915._y;
        v504[14] = p915._z;
        v504[15] = 1;
        p916.markAsUpdated();
        return p916;
      }
      static Identity() {
        const v524 = C6.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        v524._updateIdentityStatus(true);
        return v524;
      }
      static IdentityToRef(p917) {
        C6.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, p917);
        p917._updateIdentityStatus(true);
        return p917;
      }
      static Zero() {
        const v525 = C6.FromValues(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        v525._updateIdentityStatus(false);
        return v525;
      }
      static RotationX(p918) {
        const v526 = new C6();
        C6.RotationXToRef(p918, v526);
        return v526;
      }
      static Invert(p919) {
        const v527 = new C6();
        p919.invertToRef(v527);
        return v527;
      }
      static RotationXToRef(p920, p921) {
        const v528 = Math.sin(p920);
        const v529 = Math.cos(p920);
        C6.FromValuesToRef(1, 0, 0, 0, 0, v529, v528, 0, 0, -v528, v529, 0, 0, 0, 0, 1, p921);
        p921._updateIdentityStatus(v529 === 1 && v528 === 0);
        return p921;
      }
      static RotationY(p922) {
        const v530 = new C6();
        C6.RotationYToRef(p922, v530);
        return v530;
      }
      static RotationYToRef(p923, p924) {
        const v531 = Math.sin(p923);
        const v532 = Math.cos(p923);
        C6.FromValuesToRef(v532, 0, -v531, 0, 0, 1, 0, 0, v531, 0, v532, 0, 0, 0, 0, 1, p924);
        p924._updateIdentityStatus(v532 === 1 && v531 === 0);
        return p924;
      }
      static RotationZ(p925) {
        const v533 = new C6();
        C6.RotationZToRef(p925, v533);
        return v533;
      }
      static RotationZToRef(p926, p927) {
        const v534 = Math.sin(p926);
        const v535 = Math.cos(p926);
        C6.FromValuesToRef(v535, v534, 0, 0, -v534, v535, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, p927);
        p927._updateIdentityStatus(v535 === 1 && v534 === 0);
        return p927;
      }
      static RotationAxis(p928, p929) {
        const v536 = new C6();
        C6.RotationAxisToRef(p928, p929, v536);
        return v536;
      }
      static RotationAxisToRef(p930, p931, p932) {
        const v537 = Math.sin(-p931);
        const v538 = Math.cos(-p931);
        const v539 = 1 - v538;
        p930 = p930.normalizeToRef(C7.bL[0]);
        const v540 = p932.Yf;
        v540[0] = p930._x * p930._x * v539 + v538;
        v540[1] = p930._x * p930._y * v539 - p930._z * v537;
        v540[2] = p930._x * p930._z * v539 + p930._y * v537;
        v540[3] = 0;
        v540[4] = p930._y * p930._x * v539 + p930._z * v537;
        v540[5] = p930._y * p930._y * v539 + v538;
        v540[6] = p930._y * p930._z * v539 - p930._x * v537;
        v540[7] = 0;
        v540[8] = p930._z * p930._x * v539 - p930._y * v537;
        v540[9] = p930._z * p930._y * v539 + p930._x * v537;
        v540[10] = p930._z * p930._z * v539 + v538;
        v540[11] = 0;
        v540[12] = 0;
        v540[13] = 0;
        v540[14] = 0;
        v540[15] = 1;
        p932.markAsUpdated();
        return p932;
      }
      static RotationAlignToRef(p933, p934, p935, ky = false) {
        const v541 = C3.Dot(p934, p933);
        const v542 = p935.Yf;
        if (v541 < -1 + vP69.b) {
          v542[0] = -1;
          v542[1] = 0;
          v542[2] = 0;
          v542[3] = 0;
          v542[4] = 0;
          v542[5] = ky ? 1 : -1;
          v542[6] = 0;
          v542[7] = 0;
          v542[8] = 0;
          v542[9] = 0;
          v542[10] = ky ? -1 : 1;
          v542[11] = 0;
        } else {
          const v543 = C3.Cross(p934, p933);
          const v544 = 1 / (1 + v541);
          v542[0] = v543._x * v543._x * v544 + v541;
          v542[1] = v543._y * v543._x * v544 - v543._z;
          v542[2] = v543._z * v543._x * v544 + v543._y;
          v542[3] = 0;
          v542[4] = v543._x * v543._y * v544 + v543._z;
          v542[5] = v543._y * v543._y * v544 + v541;
          v542[6] = v543._z * v543._y * v544 - v543._x;
          v542[7] = 0;
          v542[8] = v543._x * v543._z * v544 - v543._y;
          v542[9] = v543._y * v543._z * v544 + v543._x;
          v542[10] = v543._z * v543._z * v544 + v541;
          v542[11] = 0;
        }
        v542[12] = 0;
        v542[13] = 0;
        v542[14] = 0;
        v542[15] = 1;
        p935.markAsUpdated();
        return p935;
      }
      static RotationYawPitchRoll(p936, p937, p938) {
        const v545 = new C6();
        C6.RotationYawPitchRollToRef(p936, p937, p938, v545);
        return v545;
      }
      static RotationYawPitchRollToRef(p939, p940, p941, p942) {
        C5.RotationYawPitchRollToRef(p939, p940, p941, C7.Quaternion[0]);
        C7.Quaternion[0].toRotationMatrix(p942);
        return p942;
      }
      static Scaling(p943, p944, p945) {
        const v546 = new C6();
        C6.ScalingToRef(p943, p944, p945, v546);
        return v546;
      }
      static ScalingToRef(p946, p947, p948, p949) {
        C6.FromValuesToRef(p946, 0, 0, 0, 0, p947, 0, 0, 0, 0, p948, 0, 0, 0, 0, 1, p949);
        p949._updateIdentityStatus(p946 === 1 && p947 === 1 && p948 === 1);
        return p949;
      }
      static Translation(p950, p951, p952) {
        const v547 = new C6();
        C6.TranslationToRef(p950, p951, p952, v547);
        return v547;
      }
      static TranslationToRef(p953, p954, p955, p956) {
        C6.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, p953, p954, p955, 1, p956);
        p956._updateIdentityStatus(p953 === 0 && p954 === 0 && p955 === 0);
        return p956;
      }
      static Lerp(p957, p958, p959) {
        const v548 = new C6();
        C6.LerpToRef(p957, p958, p959, v548);
        return v548;
      }
      static LerpToRef(p960, p961, p962, p963) {
        const v549 = p963.Yf;
        const v550 = p960.m;
        const v551 = p961.m;
        for (let vLN039 = 0; vLN039 < 16; vLN039++) {
          v549[vLN039] = v550[vLN039] * (1 - p962) + v551[vLN039] * p962;
        }
        p963.markAsUpdated();
        return p963;
      }
      static DecomposeLerp(p964, p965, p966) {
        const v552 = new C6();
        C6.DecomposeLerpToRef(p964, p965, p966, v552);
        return v552;
      }
      static DecomposeLerpToRef(p967, p968, p969, p970) {
        const v553 = C7.bL[0];
        const v554 = C7.Quaternion[0];
        const v555 = C7.bL[1];
        p967.decompose(v553, v554, v555);
        const v556 = C7.bL[2];
        const v557 = C7.Quaternion[1];
        const v558 = C7.bL[3];
        p968.decompose(v556, v557, v558);
        const v559 = C7.bL[4];
        C3.LerpToRef(v553, v556, p969, v559);
        const v560 = C7.Quaternion[2];
        C5.SlerpToRef(v554, v557, p969, v560);
        const v561 = C7.bL[5];
        C3.LerpToRef(v555, v558, p969, v561);
        C6.ComposeToRef(v559, v560, v561, p970);
        return p970;
      }
      static LookAtLH(p971, p972, p973) {
        const v562 = new C6();
        C6.LookAtLHToRef(p971, p972, p973, v562);
        return v562;
      }
      static LookAtLHToRef(p974, p975, p976, p977) {
        const v563 = C7.bL[0];
        const v564 = C7.bL[1];
        const v565 = C7.bL[2];
        p975.subtractToRef(p974, v565);
        v565.normalize();
        C3.CrossToRef(p976, v565, v563);
        const v566 = v563.lengthSquared();
        if (v566 === 0) {
          v563.x = 1;
        } else {
          v563.normalizeFromLength(Math.sqrt(v566));
        }
        C3.CrossToRef(v565, v563, v564);
        v564.normalize();
        const v567 = -C3.Dot(v563, p974);
        const v568 = -C3.Dot(v564, p974);
        const v569 = -C3.Dot(v565, p974);
        C6.FromValuesToRef(v563._x, v564._x, v565._x, 0, v563._y, v564._y, v565._y, 0, v563._z, v564._z, v565._z, 0, v567, v568, v569, 1, p977);
        return p977;
      }
      static LookAtRH(p978, p979, p980) {
        const v570 = new C6();
        C6.LookAtRHToRef(p978, p979, p980, v570);
        return v570;
      }
      static LookAtRHToRef(p981, p982, p983, p984) {
        const v571 = C7.bL[0];
        const v572 = C7.bL[1];
        const v573 = C7.bL[2];
        p981.subtractToRef(p982, v573);
        v573.normalize();
        C3.CrossToRef(p983, v573, v571);
        const v574 = v571.lengthSquared();
        if (v574 === 0) {
          v571.x = 1;
        } else {
          v571.normalizeFromLength(Math.sqrt(v574));
        }
        C3.CrossToRef(v573, v571, v572);
        v572.normalize();
        const v575 = -C3.Dot(v571, p981);
        const v576 = -C3.Dot(v572, p981);
        const v577 = -C3.Dot(v573, p981);
        C6.FromValuesToRef(v571._x, v572._x, v573._x, 0, v571._y, v572._y, v573._y, 0, v571._z, v572._z, v573._z, 0, v575, v576, v577, 1, p984);
        return p984;
      }
      static LookDirectionLH(p985, p986) {
        const v578 = new C6();
        C6.LookDirectionLHToRef(p985, p986, v578);
        return v578;
      }
      static LookDirectionLHToRef(p987, p988, p989) {
        const v579 = C7.bL[0];
        v579.fC(p987);
        v579.scaleInPlace(-1);
        const v580 = C7.bL[1];
        C3.CrossToRef(p988, v579, v580);
        C6.FromValuesToRef(v580._x, v580._y, v580._z, 0, p988._x, p988._y, p988._z, 0, v579._x, v579._y, v579._z, 0, 0, 0, 0, 1, p989);
        return p989;
      }
      static LookDirectionRH(p990, p991) {
        const v581 = new C6();
        C6.LookDirectionRHToRef(p990, p991, v581);
        return v581;
      }
      static LookDirectionRHToRef(p992, p993, p994) {
        const v582 = C7.bL[2];
        C3.CrossToRef(p993, p992, v582);
        C6.FromValuesToRef(v582._x, v582._y, v582._z, 0, p993._x, p993._y, p993._z, 0, p992._x, p992._y, p992._z, 0, 0, 0, 0, 1, p994);
        return p994;
      }
      static OrthoLH(p995, p996, p997, p998, p999) {
        const v583 = new C6();
        C6.OrthoLHToRef(p995, p996, p997, p998, v583, p999);
        return v583;
      }
      static OrthoLHToRef(p1000, p1001, p1002, p1003, p1004, p1005) {
        const v584 = 2 / p1000;
        const v585 = 2 / p1001;
        const v586 = 2 / (p1003 - p1002);
        const v587 = -(p1003 + p1002) / (p1003 - p1002);
        C6.FromValuesToRef(v584, 0, 0, 0, 0, v585, 0, 0, 0, 0, v586, 0, 0, 0, v587, 1, p1004);
        if (p1005) {
          p1004.multiplyToRef(v685, p1004);
        }
        p1004._updateIdentityStatus(v584 === 1 && v585 === 1 && v586 === 1 && v587 === 0);
        return p1004;
      }
      static OrthoOffCenterLH(p1006, p1007, p1008, p1009, p1010, p1011, p1012) {
        const v588 = new C6();
        C6.OrthoOffCenterLHToRef(p1006, p1007, p1008, p1009, p1010, p1011, v588, p1012);
        return v588;
      }
      static OrthoOffCenterLHToRef(p1013, p1014, p1015, p1016, p1017, p1018, p1019, p1020) {
        const v589 = 2 / (p1014 - p1013);
        const v590 = 2 / (p1016 - p1015);
        const v591 = 2 / (p1018 - p1017);
        const v592 = -(p1018 + p1017) / (p1018 - p1017);
        const v593 = (p1013 + p1014) / (p1013 - p1014);
        const v594 = (p1016 + p1015) / (p1015 - p1016);
        C6.FromValuesToRef(v589, 0, 0, 0, 0, v590, 0, 0, 0, 0, v591, 0, v593, v594, v592, 1, p1019);
        if (p1020) {
          p1019.multiplyToRef(v685, p1019);
        }
        p1019.markAsUpdated();
        return p1019;
      }
      static ObliqueOffCenterLHToRef(p1021, p1022, p1023, p1024, p1025, p1026, p1027, p1028, p1029, p1030, p1031) {
        const v595 = -p1027 * Math.cos(p1028);
        const v596 = -p1027 * Math.sin(p1028);
        C6.TranslationToRef(0, 0, -p1029, C7.Matrix[1]);
        C6.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, v595, v596, 1, 0, 0, 0, 0, 1, C7.Matrix[0]);
        C7.Matrix[1].multiplyToRef(C7.Matrix[0], C7.Matrix[0]);
        C6.TranslationToRef(0, 0, p1029, C7.Matrix[1]);
        C7.Matrix[0].multiplyToRef(C7.Matrix[1], C7.Matrix[0]);
        C6.OrthoOffCenterLHToRef(p1021, p1022, p1023, p1024, p1025, p1026, p1030, p1031);
        C7.Matrix[0].multiplyToRef(p1030, p1030);
        return p1030;
      }
      static OrthoOffCenterRH(p1032, p1033, p1034, p1035, p1036, p1037, p1038) {
        const v597 = new C6();
        C6.OrthoOffCenterRHToRef(p1032, p1033, p1034, p1035, p1036, p1037, v597, p1038);
        return v597;
      }
      static OrthoOffCenterRHToRef(p1039, p1040, p1041, p1042, p1043, p1044, p1045, p1046) {
        C6.OrthoOffCenterLHToRef(p1039, p1040, p1041, p1042, p1043, p1044, p1045, p1046);
        p1045.Yf[10] *= -1;
        return p1045;
      }
      static ObliqueOffCenterRHToRef(p1047, p1048, p1049, p1050, p1051, p1052, p1053, p1054, p1055, p1056, p1057) {
        const v598 = p1053 * Math.cos(p1054);
        const v599 = p1053 * Math.sin(p1054);
        C6.TranslationToRef(0, 0, p1055, C7.Matrix[1]);
        C6.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, v598, v599, 1, 0, 0, 0, 0, 1, C7.Matrix[0]);
        C7.Matrix[1].multiplyToRef(C7.Matrix[0], C7.Matrix[0]);
        C6.TranslationToRef(0, 0, -p1055, C7.Matrix[1]);
        C7.Matrix[0].multiplyToRef(C7.Matrix[1], C7.Matrix[0]);
        C6.OrthoOffCenterRHToRef(p1047, p1048, p1049, p1050, p1051, p1052, p1056, p1057);
        C7.Matrix[0].multiplyToRef(p1056, p1056);
        return p1056;
      }
      static PerspectiveLH(p1058, p1059, p1060, p1061, p1062, gC = 0) {
        const v600 = new C6();
        const v601 = p1060 * 2 / p1058;
        const v602 = p1060 * 2 / p1059;
        const v603 = (p1061 + p1060) / (p1061 - p1060);
        const v604 = p1061 * -2 * p1060 / (p1061 - p1060);
        const v605 = Math.tan(gC);
        C6.FromValuesToRef(v601, 0, 0, 0, 0, v602, 0, v605, 0, 0, v603, 1, 0, 0, v604, 0, v600);
        if (p1062) {
          v600.multiplyToRef(v685, v600);
        }
        v600._updateIdentityStatus(false);
        return v600;
      }
      static PerspectiveFovLH(p1063, p1064, p1065, p1066, p1067, gC = 0, AC = false) {
        const v606 = new C6();
        C6.PerspectiveFovLHToRef(p1063, p1064, p1065, p1066, v606, true, p1067, gC, AC);
        return v606;
      }
      static PerspectiveFovLHToRef(p1068, p1069, p1070, p1071, p1072) {
        let v607 = !(arguments.length > 5) || arguments[5] === undefined || arguments[5];
        let v608 = arguments.length > 6 ? arguments[6] : undefined;
        let v609 = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0;
        let v610 = arguments.length > 8 && arguments[8] !== undefined && arguments[8];
        const vP1070 = p1070;
        const vP1071 = p1071;
        const v611 = 1 / Math.tan(p1068 * 0.5);
        const v612 = v607 ? v611 / p1069 : v611;
        const v613 = v607 ? v611 : v611 * p1069;
        const v614 = v610 && vP1070 === 0 ? -1 : vP1071 !== 0 ? (vP1071 + vP1070) / (vP1071 - vP1070) : 1;
        const v615 = v610 && vP1070 === 0 ? vP1071 * 2 : vP1071 !== 0 ? vP1071 * -2 * vP1070 / (vP1071 - vP1070) : vP1070 * -2;
        const v616 = Math.tan(v609);
        C6.FromValuesToRef(v612, 0, 0, 0, 0, v613, 0, v616, 0, 0, v614, 1, 0, 0, v615, 0, p1072);
        if (v608) {
          p1072.multiplyToRef(v685, p1072);
        }
        p1072._updateIdentityStatus(false);
        return p1072;
      }
      static PerspectiveFovReverseLHToRef(p1073, p1074, p1075, p1076, p1077) {
        let v617 = !(arguments.length > 5) || arguments[5] === undefined || arguments[5];
        let v618 = arguments.length > 6 ? arguments[6] : undefined;
        let v619 = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0;
        const v620 = 1 / Math.tan(p1073 * 0.5);
        const v621 = v617 ? v620 / p1074 : v620;
        const v622 = v617 ? v620 : v620 * p1074;
        const v623 = Math.tan(v619);
        C6.FromValuesToRef(v621, 0, 0, 0, 0, v622, 0, v623, 0, 0, -p1075, 1, 0, 0, 1, 0, p1077);
        if (v618) {
          p1077.multiplyToRef(v685, p1077);
        }
        p1077._updateIdentityStatus(false);
        return p1077;
      }
      static PerspectiveFovRH(p1078, p1079, p1080, p1081, p1082, gC = 0, AC = false) {
        const v624 = new C6();
        C6.PerspectiveFovRHToRef(p1078, p1079, p1080, p1081, v624, true, p1082, gC, AC);
        return v624;
      }
      static PerspectiveFovRHToRef(p1083, p1084, p1085, p1086, p1087) {
        let v625 = !(arguments.length > 5) || arguments[5] === undefined || arguments[5];
        let v626 = arguments.length > 6 ? arguments[6] : undefined;
        let v627 = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0;
        let v628 = arguments.length > 8 && arguments[8] !== undefined && arguments[8];
        const vP1085 = p1085;
        const vP1086 = p1086;
        const v629 = 1 / Math.tan(p1083 * 0.5);
        const v630 = v625 ? v629 / p1084 : v629;
        const v631 = v625 ? v629 : v629 * p1084;
        const v632 = v628 && vP1085 === 0 ? 1 : vP1086 !== 0 ? -(vP1086 + vP1085) / (vP1086 - vP1085) : -1;
        const v633 = v628 && vP1085 === 0 ? vP1086 * 2 : vP1086 !== 0 ? vP1086 * -2 * vP1085 / (vP1086 - vP1085) : vP1085 * -2;
        const v634 = Math.tan(v627);
        C6.FromValuesToRef(v630, 0, 0, 0, 0, v631, 0, v634, 0, 0, v632, -1, 0, 0, v633, 0, p1087);
        if (v626) {
          p1087.multiplyToRef(v685, p1087);
        }
        p1087._updateIdentityStatus(false);
        return p1087;
      }
      static PerspectiveFovReverseRHToRef(p1088, p1089, p1090, p1091, p1092) {
        let v635 = !(arguments.length > 5) || arguments[5] === undefined || arguments[5];
        let v636 = arguments.length > 6 ? arguments[6] : undefined;
        let v637 = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0;
        const v638 = 1 / Math.tan(p1088 * 0.5);
        const v639 = v635 ? v638 / p1089 : v638;
        const v640 = v635 ? v638 : v638 * p1089;
        const v641 = Math.tan(v637);
        C6.FromValuesToRef(v639, 0, 0, 0, 0, v640, 0, v641, 0, 0, -p1090, -1, 0, 0, -1, 0, p1092);
        if (v636) {
          p1092.multiplyToRef(v685, p1092);
        }
        p1092._updateIdentityStatus(false);
        return p1092;
      }
      static GetFinalMatrix(p1093, p1094, p1095, p1096, p1097, p1098) {
        const v642 = p1093.width;
        const v643 = p1093.height;
        const v644 = p1093.x;
        const v645 = p1093.y;
        const v646 = C6.FromValues(v642 / 2, 0, 0, 0, 0, -v643 / 2, 0, 0, 0, 0, p1098 - p1097, 0, v644 + v642 / 2, v643 / 2 + v645, p1097, 1);
        const v647 = new C6();
        p1094.multiplyToRef(p1095, v647);
        v647.multiplyToRef(p1096, v647);
        return v647.multiplyToRef(v646, v647);
      }
      static GetAsMatrix2x2(p1099) {
        const v648 = p1099.m;
        const vA = [v648[0], v648[1], v648[4], v648[5]];
        if (vP694.d.MatrixUse64Bits) {
          return vA;
        } else {
          return new Float32Array(vA);
        }
      }
      static GetAsMatrix3x3(p1100) {
        const v649 = p1100.m;
        const vA2 = [v649[0], v649[1], v649[2], v649[4], v649[5], v649[6], v649[8], v649[9], v649[10]];
        if (vP694.d.MatrixUse64Bits) {
          return vA2;
        } else {
          return new Float32Array(vA2);
        }
      }
      static Transpose(p1101) {
        const v650 = new C6();
        C6.TransposeToRef(p1101, v650);
        return v650;
      }
      static TransposeToRef(p1102, p1103) {
        const v651 = p1102.m;
        const v652 = v651[0];
        const v653 = v651[4];
        const v654 = v651[8];
        const v655 = v651[12];
        const v656 = v651[1];
        const v657 = v651[5];
        const v658 = v651[9];
        const v659 = v651[13];
        const v660 = v651[2];
        const v661 = v651[6];
        const v662 = v651[10];
        const v663 = v651[14];
        const v664 = v651[3];
        const v665 = v651[7];
        const v666 = v651[11];
        const v667 = v651[15];
        const v668 = p1103.Yf;
        v668[0] = v652;
        v668[1] = v653;
        v668[2] = v654;
        v668[3] = v655;
        v668[4] = v656;
        v668[5] = v657;
        v668[6] = v658;
        v668[7] = v659;
        v668[8] = v660;
        v668[9] = v661;
        v668[10] = v662;
        v668[11] = v663;
        v668[12] = v664;
        v668[13] = v665;
        v668[14] = v666;
        v668[15] = v667;
        p1103.markAsUpdated();
        p1103._updateIdentityStatus(p1102._isIdentity, p1102._isIdentityDirty);
        return p1103;
      }
      static Reflection(p1104) {
        const v669 = new C6();
        C6.ReflectionToRef(p1104, v669);
        return v669;
      }
      static ReflectionToRef(p1105, p1106) {
        p1105.normalize();
        const v670 = p1105.normal.x;
        const v671 = p1105.normal.y;
        const v672 = p1105.normal.z;
        const v673 = v670 * -2;
        const v674 = v671 * -2;
        const v675 = v672 * -2;
        C6.FromValuesToRef(v673 * v670 + 1, v674 * v670, v675 * v670, 0, v673 * v671, v674 * v671 + 1, v675 * v671, 0, v673 * v672, v674 * v672, v675 * v672 + 1, 0, v673 * p1105.d, v674 * p1105.d, v675 * p1105.d, 1, p1106);
        return p1106;
      }
      static FromXYZAxesToRef(p1107, p1108, p1109, p1110) {
        C6.FromValuesToRef(p1107._x, p1107._y, p1107._z, 0, p1108._x, p1108._y, p1108._z, 0, p1109._x, p1109._y, p1109._z, 0, 0, 0, 0, 1, p1110);
        return p1110;
      }
      static FromQuaternionToRef(p1111, p1112) {
        const v676 = p1111._x * p1111._x;
        const v677 = p1111._y * p1111._y;
        const v678 = p1111._z * p1111._z;
        const v679 = p1111._x * p1111._y;
        const v680 = p1111._z * p1111._w;
        const v681 = p1111._z * p1111._x;
        const v682 = p1111._y * p1111._w;
        const v683 = p1111._y * p1111._z;
        const v684 = p1111._x * p1111._w;
        p1112.Yf[0] = 1 - (v677 + v678) * 2;
        p1112.Yf[1] = (v679 + v680) * 2;
        p1112.Yf[2] = (v681 - v682) * 2;
        p1112.Yf[3] = 0;
        p1112.Yf[4] = (v679 - v680) * 2;
        p1112.Yf[5] = 1 - (v678 + v676) * 2;
        p1112.Yf[6] = (v683 + v684) * 2;
        p1112.Yf[7] = 0;
        p1112.Yf[8] = (v681 + v682) * 2;
        p1112.Yf[9] = (v683 - v684) * 2;
        p1112.Yf[10] = 1 - (v677 + v676) * 2;
        p1112.Yf[11] = 0;
        p1112.Yf[12] = 0;
        p1112.Yf[13] = 0;
        p1112.Yf[14] = 0;
        p1112.Yf[15] = 1;
        p1112.markAsUpdated();
        return p1112;
      }
    }
    C6._IdentityReadOnly = C6.Identity();
    Object.defineProperties(C6.prototype, {
      dimension: {
        value: [4, 4]
      },
      rank: {
        value: 2
      }
    });
    class C7 {}
    C7.bL = (0, vP692.e)(11, C3.Zero);
    C7.Matrix = (0, vP692.e)(2, C6.Identity);
    C7.Quaternion = (0, vP692.e)(3, C5.Zero);
    class C8 {}
    C8.Vector2 = (0, vP692.e)(3, C2.Zero);
    C8.bL = (0, vP692.e)(13, C3.Zero);
    C8.Vector4 = (0, vP692.e)(3, C4.Zero);
    C8.Quaternion = (0, vP692.e)(3, C5.Zero);
    C8.Matrix = (0, vP692.e)(8, C6.Identity);
    (0, vP693.g)("BABYLON.Vector2", C2);
    (0, vP693.g)("BABYLON.Vector3", C3);
    (0, vP693.g)("BABYLON.Vector4", C4);
    (0, vP693.g)("BABYLON.Matrix", C6);
    const v685 = C6.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0.5, 0, 0, 0, 0.5, 1);
  },
  16986: (p1113, p1114, p1115) => {
    function f28(p1116, p1117) {
      const vA3 = [];
      for (let vLN040 = 0; vLN040 < p1116; ++vLN040) {
        vA3.push(p1117());
      }
      return vA3;
    }
    function f29(p1118, p1119) {
      return f28(p1118, p1119);
    }
    p1115.d(p1114, {
      d: () => f28,
      e: () => f29,
      g: () => f30
    });
    const vA4 = ["push", "splice", "pop", "shift", "unshift"];
    function f30(p1120, p1121) {
      const v686 = vA4.map(p1122 => function (p1123, p1124, p1125) {
        const v687 = p1123[p1124];
        if (typeof v687 !== "function") {
          return null;
        }
        const vF2 = function () {
          const v688 = p1123.length;
          const v689 = vF2.previous.apply(p1123, arguments);
          p1125(p1124, v688);
          return v689;
        };
        v687.next = vF2;
        vF2.previous = v687;
        p1123[p1124] = vF2;
        return () => {
          const v690 = vF2.previous;
          if (!v690) {
            return;
          }
          const v691 = vF2.next;
          if (v691) {
            v690.next = v691;
            v691.previous = v690;
          } else {
            v690.next = undefined;
            p1123[p1124] = v690;
          }
          vF2.next = undefined;
          vF2.previous = undefined;
        };
      }(p1120, p1122, p1121));
      return () => {
        for (const v692 of v686) {
          if (v692 !== null && v692 !== undefined) {
            v692();
          }
        }
      };
    }
  }
};
//# sourceMappingURL=pz8l4l.14.654c0c1d.chunk.js.map
//# debugId=fea6b739-b5a0-59f7-9d80-a0bcbc678869