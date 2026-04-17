(function () {
  try {
    var v = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : {};
    var v2 = new v.Error().stack;
    if (v2) {
      v._sentryDebugIds = v._sentryDebugIds || {};
      v._sentryDebugIds[v2] = "09f3e9c9-cd4b-5840-8f46-6e4a18878bf2";
    }
  } catch (e2) {}
})();
export const id = 17;
export const ids = [17];
export const modules = {
  17009: (p, p2, p3) => {
    p3.r(p2);
    p3.d(p2, {
      eL: () => C,
      Xg: () => C2,
      TmpColors: () => C3
    });
    var vP3 = p3(16986);
    var vP32 = p3(16927);
    var vP33 = p3(16977);
    var vP34 = p3(16988);
    function f(p4) {
      return Math.pow(p4, vP33.i);
    }
    function f2(p5) {
      if (p5 <= 0.04045) {
        return p5 * 0.0773993808;
      } else {
        return Math.pow((p5 + 0.055) * 0.947867299, 2.4);
      }
    }
    function f3(p6) {
      return Math.pow(p6, vP33.h);
    }
    function f4(p7) {
      if (p7 <= 0.0031308) {
        return p7 * 12.92;
      } else {
        return Math.pow(p7, 0.41666) * 1.055 - 0.055;
      }
    }
    class C {
      constructor(CC = 0, yC = 0, IC = 0) {
        this.r = CC;
        this.g = yC;
        this.b = IC;
      }
      toString() {
        return "{R: " + this.r + " G:" + this.g + " B:" + this.b + "}";
      }
      getClassName() {
        return "eL";
      }
      getHashCode() {
        let v3 = this.r * 255 | 0;
        v3 = v3 * 397 ^ this.g * 255;
        v3 = v3 * 397 ^ this.b * 255;
        return v3;
      }
      toArray(p8, yC = 0) {
        p8[yC] = this.r;
        p8[yC + 1] = this.g;
        p8[yC + 2] = this.b;
        return this;
      }
      LL(p9, yC = 0) {
        C.FromArrayToRef(p9, yC, this);
        return this;
      }
      toColor4(CC = 1) {
        return new C2(this.r, this.g, this.b, CC);
      }
      cf() {
        return [this.r, this.g, this.b];
      }
      toLuminance() {
        return this.r * 0.3 + this.g * 0.59 + this.b * 0.11;
      }
      multiply(p10) {
        return new C(this.r * p10.r, this.g * p10.g, this.b * p10.b);
      }
      multiplyToRef(p11, p12) {
        p12.r = this.r * p11.r;
        p12.g = this.g * p11.g;
        p12.b = this.b * p11.b;
        return p12;
      }
      multiplyInPlace(p13) {
        this.r *= p13.r;
        this.g *= p13.g;
        this.b *= p13.b;
        return this;
      }
      multiplyByFloats(p14, p15, p16) {
        return new C(this.r * p14, this.g * p15, this.b * p16);
      }
      divide(p17) {
        throw new ReferenceError("Can not divide a color");
      }
      divideToRef(p18, p19) {
        throw new ReferenceError("Can not divide a color");
      }
      divideInPlace(p20) {
        throw new ReferenceError("Can not divide a color");
      }
      minimizeInPlace(p21) {
        return this.minimizeInPlaceFromFloats(p21.r, p21.g, p21.b);
      }
      maximizeInPlace(p22) {
        return this.maximizeInPlaceFromFloats(p22.r, p22.g, p22.b);
      }
      minimizeInPlaceFromFloats(p23, p24, p25) {
        this.r = Math.min(p23, this.r);
        this.g = Math.min(p24, this.g);
        this.b = Math.min(p25, this.b);
        return this;
      }
      maximizeInPlaceFromFloats(p26, p27, p28) {
        this.r = Math.max(p26, this.r);
        this.g = Math.max(p27, this.g);
        this.b = Math.max(p28, this.b);
        return this;
      }
      floorToRef(p29) {
        throw new ReferenceError("Can not floor a color");
      }
      floor() {
        throw new ReferenceError("Can not floor a color");
      }
      fractToRef(p30) {
        throw new ReferenceError("Can not fract a color");
      }
      fract() {
        throw new ReferenceError("Can not fract a color");
      }
      equals(p31) {
        return p31 && this.r === p31.r && this.g === p31.g && this.b === p31.b;
      }
      equalsFloats(p32, p33, p34) {
        return this.equalsToFloats(p32, p33, p34);
      }
      equalsToFloats(p35, p36, p37) {
        return this.r === p35 && this.g === p36 && this.b === p37;
      }
      equalsWithEpsilon(p38, yC = vP33.b) {
        return (0, vP34.WithinEpsilon)(this.r, p38.r, yC) && (0, vP34.WithinEpsilon)(this.g, p38.g, yC) && (0, vP34.WithinEpsilon)(this.b, p38.b, yC);
      }
      negate() {
        throw new ReferenceError("Can not negate a color");
      }
      negateInPlace() {
        throw new ReferenceError("Can not negate a color");
      }
      negateToRef(p39) {
        throw new ReferenceError("Can not negate a color");
      }
      scale(p40) {
        return new C(this.r * p40, this.g * p40, this.b * p40);
      }
      scaleInPlace(p41) {
        this.r *= p41;
        this.g *= p41;
        this.b *= p41;
        return this;
      }
      scaleToRef(p42, p43) {
        p43.r = this.r * p42;
        p43.g = this.g * p42;
        p43.b = this.b * p42;
        return p43;
      }
      scaleAndAddToRef(p44, p45) {
        p45.r += this.r * p44;
        p45.g += this.g * p44;
        p45.b += this.b * p44;
        return p45;
      }
      clampToRef(CC = 0, yC = 1, IC) {
        IC.r = (0, vP34.Clamp)(this.r, CC, yC);
        IC.g = (0, vP34.Clamp)(this.g, CC, yC);
        IC.b = (0, vP34.Clamp)(this.b, CC, yC);
        return IC;
      }
      add(p46) {
        return new C(this.r + p46.r, this.g + p46.g, this.b + p46.b);
      }
      addInPlace(p47) {
        this.r += p47.r;
        this.g += p47.g;
        this.b += p47.b;
        return this;
      }
      addInPlaceFromFloats(p48, p49, p50) {
        this.r += p48;
        this.g += p49;
        this.b += p50;
        return this;
      }
      addToRef(p51, p52) {
        p52.r = this.r + p51.r;
        p52.g = this.g + p51.g;
        p52.b = this.b + p51.b;
        return p52;
      }
      Wy(p53) {
        return new C(this.r - p53.r, this.g - p53.g, this.b - p53.b);
      }
      subtractToRef(p54, p55) {
        p55.r = this.r - p54.r;
        p55.g = this.g - p54.g;
        p55.b = this.b - p54.b;
        return p55;
      }
      Ze(p56) {
        this.r -= p56.r;
        this.g -= p56.g;
        this.b -= p56.b;
        return this;
      }
      subtractFromFloats(p57, p58, p59) {
        return new C(this.r - p57, this.g - p58, this.b - p59);
      }
      subtractFromFloatsToRef(p60, p61, p62, p63) {
        p63.r = this.r - p60;
        p63.g = this.g - p61;
        p63.b = this.b - p62;
        return p63;
      }
      clone() {
        return new C(this.r, this.g, this.b);
      }
      fC(p64) {
        this.r = p64.r;
        this.g = p64.g;
        this.b = p64.b;
        return this;
      }
      jg(p65, p66, p67) {
        this.r = p65;
        this.g = p66;
        this.b = p67;
        return this;
      }
      set(p68, p69, p70) {
        return this.jg(p68, p69, p70);
      }
      gg(p71) {
        this.r = this.g = this.b = p71;
        return this;
      }
      toHexString() {
        const v4 = Math.round(this.r * 255);
        const v5 = Math.round(this.g * 255);
        const v6 = Math.round(this.b * 255);
        return "#" + (0, vP34.ToHex)(v4) + (0, vP34.ToHex)(v5) + (0, vP34.ToHex)(v6);
      }
      fromHexString(p72) {
        if (p72.substring(0, 1) === "#" && p72.length === 7) {
          this.r = parseInt(p72.substring(1, 3), 16) / 255;
          this.g = parseInt(p72.substring(3, 5), 16) / 255;
          this.b = parseInt(p72.substring(5, 7), 16) / 255;
        }
        return this;
      }
      toHSV() {
        return this.toHSVToRef(new C());
      }
      toHSVToRef(p73) {
        const v7 = this.r;
        const v8 = this.g;
        const v9 = this.b;
        const v10 = Math.max(v7, v8, v9);
        const v11 = Math.min(v7, v8, v9);
        let vLN0 = 0;
        let vLN02 = 0;
        const vV10 = v10;
        const v12 = v10 - v11;
        if (v10 !== 0) {
          vLN02 = v12 / v10;
        }
        if (v10 != v11) {
          if (v10 == v7) {
            vLN0 = (v8 - v9) / v12;
            if (v8 < v9) {
              vLN0 += 6;
            }
          } else if (v10 == v8) {
            vLN0 = (v9 - v7) / v12 + 2;
          } else if (v10 == v9) {
            vLN0 = (v7 - v8) / v12 + 4;
          }
          vLN0 *= 60;
        }
        p73.r = vLN0;
        p73.g = vLN02;
        p73.b = vV10;
        return p73;
      }
      toLinearSpace(CC = false) {
        const v13 = new C();
        this.toLinearSpaceToRef(v13, CC);
        return v13;
      }
      toLinearSpaceToRef(p74) {
        if (arguments.length > 1 && arguments[1] !== undefined && arguments[1]) {
          p74.r = f2(this.r);
          p74.g = f2(this.g);
          p74.b = f2(this.b);
        } else {
          p74.r = f(this.r);
          p74.g = f(this.g);
          p74.b = f(this.b);
        }
        return this;
      }
      toGammaSpace(CC = false) {
        const v14 = new C();
        this.toGammaSpaceToRef(v14, CC);
        return v14;
      }
      toGammaSpaceToRef(p75) {
        if (arguments.length > 1 && arguments[1] !== undefined && arguments[1]) {
          p75.r = f4(this.r);
          p75.g = f4(this.g);
          p75.b = f4(this.b);
        } else {
          p75.r = f3(this.r);
          p75.g = f3(this.g);
          p75.b = f3(this.b);
        }
        return this;
      }
      static HSVtoRGBToRef(p76, p77, p78, p79) {
        const v15 = p78 * p77;
        const v16 = p76 / 60;
        const v17 = v15 * (1 - Math.abs(v16 % 2 - 1));
        let vLN03 = 0;
        let vLN04 = 0;
        let vLN05 = 0;
        if (v16 >= 0 && v16 <= 1) {
          vLN03 = v15;
          vLN04 = v17;
        } else if (v16 >= 1 && v16 <= 2) {
          vLN03 = v17;
          vLN04 = v15;
        } else if (v16 >= 2 && v16 <= 3) {
          vLN04 = v15;
          vLN05 = v17;
        } else if (v16 >= 3 && v16 <= 4) {
          vLN04 = v17;
          vLN05 = v15;
        } else if (v16 >= 4 && v16 <= 5) {
          vLN03 = v17;
          vLN05 = v15;
        } else if (v16 >= 5 && v16 <= 6) {
          vLN03 = v15;
          vLN05 = v17;
        }
        const v18 = p78 - v15;
        p79.r = vLN03 + v18;
        p79.g = vLN04 + v18;
        p79.b = vLN05 + v18;
        return p79;
      }
      static FromHSV(p80, p81, p82) {
        const v19 = new C(0, 0, 0);
        C.HSVtoRGBToRef(p80, p81, p82, v19);
        return v19;
      }
      static FromHexString(p83) {
        return new C(0, 0, 0).fromHexString(p83);
      }
      static OL(p84, yC = 0) {
        return new C(p84[yC], p84[yC + 1], p84[yC + 2]);
      }
      static FromArrayToRef(p85, yC = 0, IC) {
        IC.r = p85[yC];
        IC.g = p85[yC + 1];
        IC.b = p85[yC + 2];
      }
      static FromInts(p86, p87, p88) {
        return new C(p86 / 255, p87 / 255, p88 / 255);
      }
      static Lerp(p89, p90, p91) {
        const v20 = new C(0, 0, 0);
        C.LerpToRef(p89, p90, p91, v20);
        return v20;
      }
      static LerpToRef(p92, p93, p94, p95) {
        p95.r = p92.r + (p93.r - p92.r) * p94;
        p95.g = p92.g + (p93.g - p92.g) * p94;
        p95.b = p92.b + (p93.b - p92.b) * p94;
      }
      static Hermite(p96, p97, p98, p99, p100) {
        const v21 = p100 * p100;
        const v22 = p100 * v21;
        const v23 = v22 * 2 - v21 * 3 + 1;
        const v24 = v22 * -2 + v21 * 3;
        const v25 = v22 - v21 * 2 + p100;
        const v26 = v22 - v21;
        const v27 = p96.r * v23 + p98.r * v24 + p97.r * v25 + p99.r * v26;
        const v28 = p96.g * v23 + p98.g * v24 + p97.g * v25 + p99.g * v26;
        const v29 = p96.b * v23 + p98.b * v24 + p97.b * v25 + p99.b * v26;
        return new C(v27, v28, v29);
      }
      static Hermite1stDerivative(p101, p102, p103, p104, p105) {
        const v30 = C.Black();
        this.Hermite1stDerivativeToRef(p101, p102, p103, p104, p105, v30);
        return v30;
      }
      static Hermite1stDerivativeToRef(p106, p107, p108, p109, p110, p111) {
        const v31 = p110 * p110;
        p111.r = (v31 - p110) * 6 * p106.r + (v31 * 3 - p110 * 4 + 1) * p107.r + (-v31 + p110) * 6 * p108.r + (v31 * 3 - p110 * 2) * p109.r;
        p111.g = (v31 - p110) * 6 * p106.g + (v31 * 3 - p110 * 4 + 1) * p107.g + (-v31 + p110) * 6 * p108.g + (v31 * 3 - p110 * 2) * p109.g;
        p111.b = (v31 - p110) * 6 * p106.b + (v31 * 3 - p110 * 4 + 1) * p107.b + (-v31 + p110) * 6 * p108.b + (v31 * 3 - p110 * 2) * p109.b;
      }
      static Red() {
        return new C(1, 0, 0);
      }
      static Green() {
        return new C(0, 1, 0);
      }
      static Blue() {
        return new C(0, 0, 1);
      }
      static Black() {
        return new C(0, 0, 0);
      }
      static get BlackReadOnly() {
        return C._BlackReadOnly;
      }
      static White() {
        return new C(1, 1, 1);
      }
      static Purple() {
        return new C(0.5, 0, 0.5);
      }
      static Magenta() {
        return new C(1, 0, 1);
      }
      static Yellow() {
        return new C(1, 1, 0);
      }
      static Gray() {
        return new C(0.5, 0.5, 0.5);
      }
      static Teal() {
        return new C(0, 1, 1);
      }
      static Random() {
        return new C(Math.random(), Math.random(), Math.random());
      }
    }
    C._V8PerformanceHack = new C(0.5, 0.5, 0.5);
    C._BlackReadOnly = C.Black();
    Object.defineProperties(C.prototype, {
      dimension: {
        value: [3]
      },
      rank: {
        value: 1
      }
    });
    class C2 {
      constructor(CC = 0, yC = 0, IC = 0, fC = 1) {
        this.r = CC;
        this.g = yC;
        this.b = IC;
        this.a = fC;
      }
      cf() {
        return [this.r, this.g, this.b, this.a];
      }
      toArray(p112, yC = 0) {
        p112[yC] = this.r;
        p112[yC + 1] = this.g;
        p112[yC + 2] = this.b;
        p112[yC + 3] = this.a;
        return this;
      }
      LL(p113, yC = 0) {
        this.r = p113[yC];
        this.g = p113[yC + 1];
        this.b = p113[yC + 2];
        this.a = p113[yC + 3];
        return this;
      }
      equals(p114) {
        return p114 && this.r === p114.r && this.g === p114.g && this.b === p114.b && this.a === p114.a;
      }
      add(p115) {
        return new C2(this.r + p115.r, this.g + p115.g, this.b + p115.b, this.a + p115.a);
      }
      addToRef(p116, p117) {
        p117.r = this.r + p116.r;
        p117.g = this.g + p116.g;
        p117.b = this.b + p116.b;
        p117.a = this.a + p116.a;
        return p117;
      }
      addInPlace(p118) {
        this.r += p118.r;
        this.g += p118.g;
        this.b += p118.b;
        this.a += p118.a;
        return this;
      }
      addInPlaceFromFloats(p119, p120, p121, p122) {
        this.r += p119;
        this.g += p120;
        this.b += p121;
        this.a += p122;
        return this;
      }
      Wy(p123) {
        return new C2(this.r - p123.r, this.g - p123.g, this.b - p123.b, this.a - p123.a);
      }
      subtractToRef(p124, p125) {
        p125.r = this.r - p124.r;
        p125.g = this.g - p124.g;
        p125.b = this.b - p124.b;
        p125.a = this.a - p124.a;
        return p125;
      }
      Ze(p126) {
        this.r -= p126.r;
        this.g -= p126.g;
        this.b -= p126.b;
        this.a -= p126.a;
        return this;
      }
      subtractFromFloats(p127, p128, p129, p130) {
        return new C2(this.r - p127, this.g - p128, this.b - p129, this.a - p130);
      }
      subtractFromFloatsToRef(p131, p132, p133, p134, p135) {
        p135.r = this.r - p131;
        p135.g = this.g - p132;
        p135.b = this.b - p133;
        p135.a = this.a - p134;
        return p135;
      }
      scale(p136) {
        return new C2(this.r * p136, this.g * p136, this.b * p136, this.a * p136);
      }
      scaleInPlace(p137) {
        this.r *= p137;
        this.g *= p137;
        this.b *= p137;
        this.a *= p137;
        return this;
      }
      scaleToRef(p138, p139) {
        p139.r = this.r * p138;
        p139.g = this.g * p138;
        p139.b = this.b * p138;
        p139.a = this.a * p138;
        return p139;
      }
      scaleAndAddToRef(p140, p141) {
        p141.r += this.r * p140;
        p141.g += this.g * p140;
        p141.b += this.b * p140;
        p141.a += this.a * p140;
        return p141;
      }
      clampToRef(CC = 0, yC = 1, IC) {
        IC.r = (0, vP34.Clamp)(this.r, CC, yC);
        IC.g = (0, vP34.Clamp)(this.g, CC, yC);
        IC.b = (0, vP34.Clamp)(this.b, CC, yC);
        IC.a = (0, vP34.Clamp)(this.a, CC, yC);
        return IC;
      }
      multiply(p142) {
        return new C2(this.r * p142.r, this.g * p142.g, this.b * p142.b, this.a * p142.a);
      }
      multiplyToRef(p143, p144) {
        p144.r = this.r * p143.r;
        p144.g = this.g * p143.g;
        p144.b = this.b * p143.b;
        p144.a = this.a * p143.a;
        return p144;
      }
      multiplyInPlace(p145) {
        this.r *= p145.r;
        this.g *= p145.g;
        this.b *= p145.b;
        this.a *= p145.a;
        return this;
      }
      multiplyByFloats(p146, p147, p148, p149) {
        return new C2(this.r * p146, this.g * p147, this.b * p148, this.a * p149);
      }
      divide(p150) {
        throw new ReferenceError("Can not divide a color");
      }
      divideToRef(p151, p152) {
        throw new ReferenceError("Can not divide a color");
      }
      divideInPlace(p153) {
        throw new ReferenceError("Can not divide a color");
      }
      minimizeInPlace(p154) {
        this.r = Math.min(this.r, p154.r);
        this.g = Math.min(this.g, p154.g);
        this.b = Math.min(this.b, p154.b);
        this.a = Math.min(this.a, p154.a);
        return this;
      }
      maximizeInPlace(p155) {
        this.r = Math.max(this.r, p155.r);
        this.g = Math.max(this.g, p155.g);
        this.b = Math.max(this.b, p155.b);
        this.a = Math.max(this.a, p155.a);
        return this;
      }
      minimizeInPlaceFromFloats(p156, p157, p158, p159) {
        this.r = Math.min(p156, this.r);
        this.g = Math.min(p157, this.g);
        this.b = Math.min(p158, this.b);
        this.a = Math.min(p159, this.a);
        return this;
      }
      maximizeInPlaceFromFloats(p160, p161, p162, p163) {
        this.r = Math.max(p160, this.r);
        this.g = Math.max(p161, this.g);
        this.b = Math.max(p162, this.b);
        this.a = Math.max(p163, this.a);
        return this;
      }
      floorToRef(p164) {
        throw new ReferenceError("Can not floor a color");
      }
      floor() {
        throw new ReferenceError("Can not floor a color");
      }
      fractToRef(p165) {
        throw new ReferenceError("Can not fract a color");
      }
      fract() {
        throw new ReferenceError("Can not fract a color");
      }
      negate() {
        throw new ReferenceError("Can not negate a color");
      }
      negateInPlace() {
        throw new ReferenceError("Can not negate a color");
      }
      negateToRef(p166) {
        throw new ReferenceError("Can not negate a color");
      }
      equalsWithEpsilon(p167, yC = vP33.b) {
        return (0, vP34.WithinEpsilon)(this.r, p167.r, yC) && (0, vP34.WithinEpsilon)(this.g, p167.g, yC) && (0, vP34.WithinEpsilon)(this.b, p167.b, yC) && (0, vP34.WithinEpsilon)(this.a, p167.a, yC);
      }
      equalsToFloats(p168, p169, p170, p171) {
        return this.r === p168 && this.g === p169 && this.b === p170 && this.a === p171;
      }
      toString() {
        return "{R: " + this.r + " G:" + this.g + " B:" + this.b + " A:" + this.a + "}";
      }
      getClassName() {
        return "Xg";
      }
      getHashCode() {
        let v32 = this.r * 255 | 0;
        v32 = v32 * 397 ^ this.g * 255;
        v32 = v32 * 397 ^ this.b * 255;
        v32 = v32 * 397 ^ this.a * 255;
        return v32;
      }
      clone() {
        return new C2().fC(this);
      }
      fC(p172) {
        this.r = p172.r;
        this.g = p172.g;
        this.b = p172.b;
        this.a = p172.a;
        return this;
      }
      jg(p173, p174, p175, p176) {
        this.r = p173;
        this.g = p174;
        this.b = p175;
        this.a = p176;
        return this;
      }
      set(p177, p178, p179, p180) {
        return this.jg(p177, p178, p179, p180);
      }
      gg(p181) {
        this.r = this.g = this.b = this.a = p181;
        return this;
      }
      toHexString(CC = false) {
        const v33 = Math.round(this.r * 255);
        const v34 = Math.round(this.g * 255);
        const v35 = Math.round(this.b * 255);
        if (CC) {
          return "#" + (0, vP34.ToHex)(v33) + (0, vP34.ToHex)(v34) + (0, vP34.ToHex)(v35);
        }
        const v36 = Math.round(this.a * 255);
        return "#" + (0, vP34.ToHex)(v33) + (0, vP34.ToHex)(v34) + (0, vP34.ToHex)(v35) + (0, vP34.ToHex)(v36);
      }
      fromHexString(p182) {
        if (p182.substring(0, 1) === "#" && (p182.length === 9 || p182.length === 7)) {
          this.r = parseInt(p182.substring(1, 3), 16) / 255;
          this.g = parseInt(p182.substring(3, 5), 16) / 255;
          this.b = parseInt(p182.substring(5, 7), 16) / 255;
          if (p182.length === 9) {
            this.a = parseInt(p182.substring(7, 9), 16) / 255;
          }
        }
        return this;
      }
      toLinearSpace(CC = false) {
        const v37 = new C2();
        this.toLinearSpaceToRef(v37, CC);
        return v37;
      }
      toLinearSpaceToRef(p183) {
        if (arguments.length > 1 && arguments[1] !== undefined && arguments[1]) {
          p183.r = f2(this.r);
          p183.g = f2(this.g);
          p183.b = f2(this.b);
        } else {
          p183.r = f(this.r);
          p183.g = f(this.g);
          p183.b = f(this.b);
        }
        p183.a = this.a;
        return this;
      }
      toGammaSpace(CC = false) {
        const v38 = new C2();
        this.toGammaSpaceToRef(v38, CC);
        return v38;
      }
      toGammaSpaceToRef(p184) {
        if (arguments.length > 1 && arguments[1] !== undefined && arguments[1]) {
          p184.r = f4(this.r);
          p184.g = f4(this.g);
          p184.b = f4(this.b);
        } else {
          p184.r = f3(this.r);
          p184.g = f3(this.g);
          p184.b = f3(this.b);
        }
        p184.a = this.a;
        return this;
      }
      static FromHexString(p185) {
        if (p185.substring(0, 1) !== "#" || p185.length !== 9 && p185.length !== 7) {
          return new C2(0, 0, 0, 0);
        } else {
          return new C2(0, 0, 0, 1).fromHexString(p185);
        }
      }
      static Lerp(p186, p187, p188) {
        return C2.LerpToRef(p186, p187, p188, new C2());
      }
      static LerpToRef(p189, p190, p191, p192) {
        p192.r = p189.r + (p190.r - p189.r) * p191;
        p192.g = p189.g + (p190.g - p189.g) * p191;
        p192.b = p189.b + (p190.b - p189.b) * p191;
        p192.a = p189.a + (p190.a - p189.a) * p191;
        return p192;
      }
      static Hermite(p193, p194, p195, p196, p197) {
        const v39 = p197 * p197;
        const v40 = p197 * v39;
        const v41 = v40 * 2 - v39 * 3 + 1;
        const v42 = v40 * -2 + v39 * 3;
        const v43 = v40 - v39 * 2 + p197;
        const v44 = v40 - v39;
        const v45 = p193.r * v41 + p195.r * v42 + p194.r * v43 + p196.r * v44;
        const v46 = p193.g * v41 + p195.g * v42 + p194.g * v43 + p196.g * v44;
        const v47 = p193.b * v41 + p195.b * v42 + p194.b * v43 + p196.b * v44;
        const v48 = p193.a * v41 + p195.a * v42 + p194.a * v43 + p196.a * v44;
        return new C2(v45, v46, v47, v48);
      }
      static Hermite1stDerivative(p198, p199, p200, p201, p202) {
        const v49 = new C2();
        this.Hermite1stDerivativeToRef(p198, p199, p200, p201, p202, v49);
        return v49;
      }
      static Hermite1stDerivativeToRef(p203, p204, p205, p206, p207, p208) {
        const v50 = p207 * p207;
        p208.r = (v50 - p207) * 6 * p203.r + (v50 * 3 - p207 * 4 + 1) * p204.r + (-v50 + p207) * 6 * p205.r + (v50 * 3 - p207 * 2) * p206.r;
        p208.g = (v50 - p207) * 6 * p203.g + (v50 * 3 - p207 * 4 + 1) * p204.g + (-v50 + p207) * 6 * p205.g + (v50 * 3 - p207 * 2) * p206.g;
        p208.b = (v50 - p207) * 6 * p203.b + (v50 * 3 - p207 * 4 + 1) * p204.b + (-v50 + p207) * 6 * p205.b + (v50 * 3 - p207 * 2) * p206.b;
        p208.a = (v50 - p207) * 6 * p203.a + (v50 * 3 - p207 * 4 + 1) * p204.a + (-v50 + p207) * 6 * p205.a + (v50 * 3 - p207 * 2) * p206.a;
      }
      static FromColor3(p209, yC = 1) {
        return new C2(p209.r, p209.g, p209.b, yC);
      }
      static OL(p210, yC = 0) {
        return new C2(p210[yC], p210[yC + 1], p210[yC + 2], p210[yC + 3]);
      }
      static FromArrayToRef(p211, yC = 0, IC) {
        IC.r = p211[yC];
        IC.g = p211[yC + 1];
        IC.b = p211[yC + 2];
        IC.a = p211[yC + 3];
      }
      static FromInts(p212, p213, p214, p215) {
        return new C2(p212 / 255, p213 / 255, p214 / 255, p215 / 255);
      }
      static CheckColors4(p216, p217) {
        if (p216.length === p217 * 3) {
          const vA = [];
          for (let vLN06 = 0; vLN06 < p216.length; vLN06 += 3) {
            const v51 = vLN06 / 3 * 4;
            vA[v51] = p216[vLN06];
            vA[v51 + 1] = p216[vLN06 + 1];
            vA[v51 + 2] = p216[vLN06 + 2];
            vA[v51 + 3] = 1;
          }
          return vA;
        }
        return p216;
      }
    }
    C2._V8PerformanceHack = new C2(0.5, 0.5, 0.5, 0.5);
    Object.defineProperties(C2.prototype, {
      dimension: {
        value: [4]
      },
      rank: {
        value: 1
      }
    });
    class C3 {}
    C3.eL = (0, vP3.d)(3, C.Black);
    C3.Xg = (0, vP3.d)(3, () => new C2(0, 0, 0, 0));
    (0, vP32.g)("BABYLON.Color3", C);
    (0, vP32.g)("BABYLON.Color4", C2);
  }
};
//# sourceMappingURL=pz8l4l.17.e23f0e8b.chunk.js.map
//# debugId=09f3e9c9-cd4b-5840-8f46-6e4a18878bf2