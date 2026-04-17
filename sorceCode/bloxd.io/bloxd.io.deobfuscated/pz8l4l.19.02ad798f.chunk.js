(function () {
  try {
    var v = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : {};
    var v2 = new v.Error().stack;
    if (v2) {
      v._sentryDebugIds = v._sentryDebugIds || {};
      v._sentryDebugIds[v2] = "bb214188-5a28-58bc-a274-2885b8db121d";
    }
  } catch (e2) {}
})();
export const id = 19;
export const ids = [19];
export const modules = {
  17031: (p, p2, p3) => {
    p3.d(p2, {
      c: () => C,
      e: () => C2
    });
    var vP3 = p3(17039);
    var vP32 = p3(16811);
    var vP33 = p3(17044);
    class C {
      get AC() {
        return this._isDisposed;
      }
      constructor(p4, p5, p6, ky = 0, gC = false, AC = false, my = false, XC, iy) {
        this._isAlreadyOwned = false;
        this._isDisposed = false;
        if (p4 && p4.YL) {
          this._engine = p4.YL().getEngine();
        } else {
          this._engine = p4;
        }
        this._updatable = p6;
        this._instanced = AC;
        this._divisor = XC || 1;
        this._label = iy;
        if (p5 instanceof vP3.e) {
          this._data = null;
          this._buffer = p5;
        } else {
          this._data = p5;
          this._buffer = null;
        }
        this.byteStride = my ? ky : ky * Float32Array.BYTES_PER_ELEMENT;
        if (!gC) {
          this.create();
        }
      }
      createVertexBuffer(p8, p9, p10, p11, p12, gC = false, AC) {
        const v3 = gC ? p9 : p9 * Float32Array.BYTES_PER_ELEMENT;
        const v4 = p11 ? gC ? p11 : p11 * Float32Array.BYTES_PER_ELEMENT : this.byteStride;
        return new C2(this._engine, this, p8, this._updatable, true, v4, p12 === undefined ? this._instanced : p12, v3, p10, undefined, undefined, true, this._divisor || AC);
      }
      isUpdatable() {
        return this._updatable;
      }
      getData() {
        return this._data;
      }
      getBuffer() {
        return this._buffer;
      }
      getStrideSize() {
        return this.byteStride / Float32Array.BYTES_PER_ELEMENT;
      }
      create(CC = null) {
        if (!!CC || !this._buffer) {
          p = p || this._data;
          if (p) {
            if (this._buffer) {
              if (this._updatable) {
                this._engine.updateDynamicVertexBuffer(this._buffer, p);
                this._data = p;
              }
            } else if (this._updatable) {
              this._buffer = this._engine.createDynamicVertexBuffer(p, this._label);
              this._data = p;
            } else {
              this._buffer = this._engine.createVertexBuffer(p, undefined, this._label);
            }
          }
        }
      }
      _rebuild() {
        if (this._data) {
          this._buffer = null;
          this.create(this._data);
        } else {
          if (!this._buffer) {
            return;
          }
          if (this._buffer.IX > 0) {
            if (this._updatable) {
              this._buffer = this._engine.createDynamicVertexBuffer(this._buffer.IX, this._label);
            } else {
              this._buffer = this._engine.createVertexBuffer(this._buffer.IX, undefined, this._label);
            }
            return;
          }
          vP32.e.Warn(`Missing data for buffer "${this._label}" ${this._buffer ? "(uniqueId: " + this._buffer.uniqueId + ")" : ""}. Buffer reconstruction failed.`);
          this._buffer = null;
        }
      }
      update(p13) {
        this.create(p13);
      }
      updateDirectly(p14, p15, p16, fC = false) {
        if (this._buffer && this._updatable) {
          this._engine.updateDynamicVertexBuffer(this._buffer, p14, vP3 ? p15 : p15 * Float32Array.BYTES_PER_ELEMENT, p16 ? p16 * this.byteStride : undefined);
          this._data = p15 === 0 && p16 === undefined ? p14 : null;
        }
      }
      _increaseReferences() {
        if (this._buffer) {
          if (this._isAlreadyOwned) {
            this._buffer.references++;
          } else {
            this._isAlreadyOwned = true;
          }
        }
      }
      dispose() {
        if (this._buffer && this._engine._releaseBuffer(this._buffer)) {
          this._isDisposed = true;
          this._data = null;
          this._buffer = null;
        }
      }
    }
    class C2 {
      get AC() {
        return this._isDisposed;
      }
      get instanceDivisor() {
        return this._instanceDivisor;
      }
      set instanceDivisor(p17) {
        const v5 = p17 != 0;
        this._instanceDivisor = p17;
        if (v5 !== this._instanced) {
          this._instanced = v5;
          this._computeHashCode();
        }
      }
      get _maxVerticesCount() {
        const v6 = this.getData();
        if (v6) {
          if (Array.isArray(v6)) {
            return v6.length / (this.byteStride / 4) - this.byteOffset / 4;
          } else {
            return (v6.byteLength - this.byteOffset) / this.byteStride;
          }
        } else {
          return 0;
        }
      }
      constructor(p18, p19, p20, p21, p22, p23, p24, p25, p26, p27, rC = false, GC = false, eC = 1, OC = false) {
        this._isDisposed = false;
        let v7 = false;
        var v8;
        var v9;
        var v10;
        var v11;
        this.Jy = p18;
        if (typeof p21 === "object" && p21 !== null) {
          v7 = (v8 = p21.updatable) !== null && v8 !== undefined && v8;
          p22 = p21.postponeInternalCreation;
          p23 = p21.stride;
          p24 = p21.instanced;
          p25 = p21.offset;
          p26 = p21.size;
          p27 = p21.type;
          rC = (v9 = p21.normalized) !== null && v9 !== undefined && v9;
          GC = (v10 = p21.useBytes) !== null && v10 !== undefined && v10;
          eC = p21.divisor ?? 1;
          OC = (v11 = p21.takeBufferOwnership) !== null && v11 !== undefined && v11;
          this._label = p21.label;
        } else {
          v7 = !!p21;
        }
        if (p19 instanceof C) {
          this._buffer = p19;
          this._ownsBuffer = OC;
        } else {
          this._buffer = new C(p18, p19, v7, p23, p22, p24, GC, eC, this._label);
          this._ownsBuffer = true;
        }
        this.uniqueId = C2._Counter++;
        this._kind = p20;
        if (p27 === undefined) {
          const v12 = this.getData();
          this.type = v12 ? C2.GetDataType(v12) : C2.FLOAT;
        } else {
          this.type = p27;
        }
        const v13 = (0, vP33.p)(this.type);
        if (GC) {
          this._size = p26 || (p23 ? p23 / v13 : C2.DeduceStride(p20));
          this.byteStride = p23 || this._buffer.byteStride || this._size * v13;
          this.byteOffset = p25 || 0;
        } else {
          this._size = p26 || p23 || C2.DeduceStride(p20);
          this.byteStride = p23 ? p23 * v13 : this._buffer.byteStride || this._size * v13;
          this.byteOffset = (p25 || 0) * v13;
        }
        this.normalized = rC;
        this._instanced = p24 !== undefined && p24;
        this._instanceDivisor = p24 ? eC : 0;
        this._alignBuffer();
        this._computeHashCode();
      }
      _computeHashCode() {
        this.hashCode = (this.type - 5120 | 0) + ((this.normalized ? 1 : 0) << 3) + (this._size << 4) + ((this._instanced ? 1 : 0) << 6) + (this.byteStride << 12);
      }
      _rebuild() {
        var v14;
        if ((v14 = this._buffer) !== null && v14 !== undefined) {
          v14._rebuild();
        }
      }
      getKind() {
        return this._kind;
      }
      isUpdatable() {
        return this._buffer.isUpdatable();
      }
      getData() {
        return this._buffer.getData();
      }
      getFloatData(p28, p29) {
        const v15 = this.getData();
        if (v15) {
          return (0, vP33.n)(v15, this._size, this.type, this.byteOffset, this.byteStride, this.normalized, p28, p29);
        } else {
          return null;
        }
      }
      getBuffer() {
        return this._buffer.getBuffer();
      }
      getWrapperBuffer() {
        return this._buffer;
      }
      getStrideSize() {
        return this.byteStride / (0, vP33.p)(this.type);
      }
      getOffset() {
        return this.byteOffset / (0, vP33.p)(this.type);
      }
      getSize() {
        if (arguments.length > 0 && arguments[0] !== undefined && arguments[0]) {
          return this._size * (0, vP33.p)(this.type);
        } else {
          return this._size;
        }
      }
      getIsInstanced() {
        return this._instanced;
      }
      getInstanceDivisor() {
        return this._instanceDivisor;
      }
      create(p30) {
        this._buffer.create(p30);
        this._alignBuffer();
      }
      update(p31) {
        this._buffer.update(p31);
        this._alignBuffer();
      }
      updateDirectly(p32, p33, IC = false) {
        this._buffer.updateDirectly(p32, p33, undefined, IC);
        this._alignBuffer();
      }
      dispose() {
        if (this._ownsBuffer) {
          this._buffer.dispose();
        }
        this._isDisposed = true;
      }
      forEach(p34, p35) {
        (0, vP33.j)(this._buffer.getData(), this.byteOffset, this.byteStride, this._size, this.type, p34, this.normalized, (p36, p37) => {
          for (let vLN0 = 0; vLN0 < this._size; vLN0++) {
            p35(p36[vLN0], p37 + vLN0);
          }
        });
      }
      _alignBuffer() {}
      static DeduceStride(p38) {
        switch (p38) {
          case C2.UVKind:
          case C2.UV2Kind:
          case C2.UV3Kind:
          case C2.UV4Kind:
          case C2.UV5Kind:
          case C2.UV6Kind:
            return 2;
          case C2.NormalKind:
          case C2.PositionKind:
            return 3;
          case C2.ColorKind:
          case C2.ColorInstanceKind:
          case C2.MatricesIndicesKind:
          case C2.MatricesIndicesExtraKind:
          case C2.MatricesWeightsKind:
          case C2.MatricesWeightsExtraKind:
          case C2.TangentKind:
            return 4;
          default:
            throw new Error("Invalid kind '" + p38 + "'");
        }
      }
      static GetDataType(p39) {
        if (p39 instanceof Int8Array) {
          return C2.BYTE;
        } else if (p39 instanceof Uint8Array) {
          return C2.UNSIGNED_BYTE;
        } else if (p39 instanceof Int16Array) {
          return C2.SHORT;
        } else if (p39 instanceof Uint16Array) {
          return C2.UNSIGNED_SHORT;
        } else if (p39 instanceof Int32Array) {
          return C2.INT;
        } else if (p39 instanceof Uint32Array) {
          return C2.UNSIGNED_INT;
        } else {
          return C2.FLOAT;
        }
      }
      static GetTypeByteLength(p40) {
        return (0, vP33.p)(p40);
      }
      static ForEach(p41, p42, p43, p44, p45, p46, p47, p48) {
        (0, vP33.j)(p41, p42, p43, p44, p45, p46, p47, (p49, p50) => {
          for (let vLN02 = 0; vLN02 < p44; vLN02++) {
            p48(p49[vLN02], p50 + vLN02);
          }
        });
      }
      static GetFloatData(p51, p52, p53, p54, p55, p56, p57, p58) {
        return (0, vP33.n)(p51, p52, p53, p54, p55, p56, p57, p58);
      }
    }
    C2._Counter = 0;
    C2.BYTE = 5120;
    C2.UNSIGNED_BYTE = 5121;
    C2.SHORT = 5122;
    C2.UNSIGNED_SHORT = 5123;
    C2.INT = 5124;
    C2.UNSIGNED_INT = 5125;
    C2.FLOAT = 5126;
    C2.PositionKind = "position";
    C2.NormalKind = "normal";
    C2.TangentKind = "tangent";
    C2.UVKind = "uv";
    C2.UV2Kind = "uv2";
    C2.UV3Kind = "uv3";
    C2.UV4Kind = "uv4";
    C2.UV5Kind = "uv5";
    C2.UV6Kind = "uv6";
    C2.ColorKind = "color";
    C2.ColorInstanceKind = "instanceColor";
    C2.MatricesIndicesKind = "matricesIndices";
    C2.MatricesWeightsKind = "matricesWeights";
    C2.MatricesIndicesExtraKind = "matricesIndicesExtra";
    C2.MatricesWeightsExtraKind = "matricesWeightsExtra";
  },
  17044: (p59, p60, p61) => {
    p61.d(p60, {
      c: () => f9,
      f: () => YC,
      j: () => XC,
      n: () => iy,
      p: () => f3,
      t: () => f4,
      w: () => LC
    });
    var vP61 = p61(16811);
    function f(p62, p63, p64, p65) {
      switch (p63) {
        case 5120:
          {
            let v16 = p62.getInt8(p64);
            if (p65) {
              v16 = Math.max(v16 / 127, -1);
            }
            return v16;
          }
        case 5121:
          {
            let v17 = p62.getUint8(p64);
            if (p65) {
              v17 /= 255;
            }
            return v17;
          }
        case 5122:
          {
            let v18 = p62.getInt16(p64, true);
            if (p65) {
              v18 = Math.max(v18 / 32767, -1);
            }
            return v18;
          }
        case 5123:
          {
            let v19 = p62.getUint16(p64, true);
            if (p65) {
              v19 /= 65535;
            }
            return v19;
          }
        case 5124:
          return p62.getInt32(p64, true);
        case 5125:
          return p62.getUint32(p64, true);
        case 5126:
          return p62.getFloat32(p64, true);
        default:
          throw new Error(`Invalid component type ${p63}`);
      }
    }
    function f2(p66, p67, p68, p69, p70) {
      switch (p67) {
        case 5120:
          if (p69) {
            p70 = Math.round(p70 * 127);
          }
          p66.setInt8(p68, p70);
          break;
        case 5121:
          if (p69) {
            p70 = Math.round(p70 * 255);
          }
          p66.setUint8(p68, p70);
          break;
        case 5122:
          if (p69) {
            p70 = Math.round(p70 * 32767);
          }
          p66.setInt16(p68, p70, true);
          break;
        case 5123:
          if (p69) {
            p70 = Math.round(p70 * 65535);
          }
          p66.setUint16(p68, p70, true);
          break;
        case 5124:
          p66.setInt32(p68, p70, true);
          break;
        case 5125:
          p66.setUint32(p68, p70, true);
          break;
        case 5126:
          p66.setFloat32(p68, p70, true);
          break;
        default:
          throw new Error(`Invalid component type ${p67}`);
      }
    }
    function f3(p71) {
      switch (p71) {
        case 5120:
        case 5121:
          return 1;
        case 5122:
        case 5123:
          return 2;
        case 5124:
        case 5125:
        case 5126:
          return 4;
        default:
          throw new Error(`Invalid type '${p71}'`);
      }
    }
    function f4(p72) {
      switch (p72) {
        case 5120:
          return Int8Array;
        case 5121:
          return Uint8Array;
        case 5122:
          return Int16Array;
        case 5123:
          return Uint16Array;
        case 5124:
          return Int32Array;
        case 5125:
          return Uint32Array;
        case 5126:
          return Float32Array;
        default:
          throw new Error(`Invalid component type '${p72}'`);
      }
    }
    function XC(p73, p74, p75, p76, p77, p78, p79, p80) {
      const v20 = new Array(p76);
      const v21 = new Array(p76);
      if (p73 instanceof Array) {
        let v22 = p74 / 4;
        const v23 = p75 / 4;
        for (let vLN03 = 0; vLN03 < p78; vLN03 += p76) {
          for (let vLN04 = 0; vLN04 < p76; vLN04++) {
            v20[vLN04] = v21[vLN04] = p73[v22 + vLN04];
          }
          p80(v21, vLN03);
          for (let vLN05 = 0; vLN05 < p76; vLN05++) {
            if (v20[vLN05] !== v21[vLN05]) {
              p73[v22 + vLN05] = v21[vLN05];
            }
          }
          v22 += v23;
        }
      } else {
        const v24 = ArrayBuffer.isView(p73) ? new DataView(p73.buffer, p73.byteOffset, p73.byteLength) : new DataView(p73);
        const vF3 = f3(p77);
        for (let vLN06 = 0; vLN06 < p78; vLN06 += p76) {
          for (let vLN07 = 0, vP74 = p74; vLN07 < p76; vLN07++, vP74 += vF3) {
            v20[vLN07] = v21[vLN07] = f(v24, p77, vP74, p79);
          }
          p80(v21, vLN06);
          for (let vLN08 = 0, vP742 = p74; vLN08 < p76; vLN08++, vP742 += vF3) {
            if (v20[vLN08] !== v21[vLN08]) {
              f2(v24, p77, vP742, p79, v21[vLN08]);
            }
          }
          p74 += p75;
        }
      }
    }
    function iy(p81, p82, p83, p84, p85, p86, p87, p88) {
      const v25 = p82 * f3(p83);
      const v26 = p87 * p82;
      if (p83 !== 5126 || p85 !== v25) {
        const v27 = new Float32Array(v26);
        XC(p81, p84, p85, p82, p83, v26, p86, (p89, p90) => {
          for (let vLN09 = 0; vLN09 < p82; vLN09++) {
            v27[p90 + vLN09] = p89[vLN09];
          }
        });
        return v27;
      }
      if (!(p81 instanceof Array) && !(p81 instanceof Float32Array) || p84 !== 0 || p81.length !== v26) {
        if (p81 instanceof Array) {
          const v28 = p84 / 4;
          return p81.slice(v28, v28 + v26);
        }
        if (p81 instanceof ArrayBuffer) {
          return new Float32Array(p81, p84, v26);
        }
        {
          const v29 = p81.byteOffset + p84;
          if ((v29 & 3) !== 0) {
            vP61.e.Warn("Float array must be aligned to 4-bytes border");
            p88 = true;
          }
          if (p88) {
            return new Float32Array(p81.buffer.slice(v29, v29 + v26 * Float32Array.BYTES_PER_ELEMENT));
          } else {
            return new Float32Array(p81.buffer, v29, v26);
          }
        }
      }
      if (p88) {
        return p81.slice();
      } else {
        return p81;
      }
    }
    function LC(p91, p92, p93, p94, p95, p96, p97, p98) {
      const vF32 = f3(p93);
      const vF4 = f4(p93);
      const v30 = p97 * p92;
      if (Array.isArray(p91)) {
        if ((p94 & 3) !== 0 || (p95 & 3) !== 0) {
          throw new Error("byteOffset and byteStride must be a multiple of 4 for number[] data.");
        }
        const v31 = p94 / 4;
        const v32 = p95 / 4;
        if (v31 + (p97 - 1) * v32 + p92 > p91.length) {
          throw new Error("Last accessed index is out of bounds.");
        }
        if (v32 < p92) {
          throw new Error("Data stride cannot be smaller than the component size.");
        }
        if (v32 !== p92) {
          const v33 = new vF4(v30);
          XC(p91, p94, p95, p92, p93, v30, p96, (p99, p100) => {
            for (let vLN010 = 0; vLN010 < p92; vLN010++) {
              v33[p100 + vLN010] = p99[vLN010];
            }
          });
          return v33;
        }
        return new vF4(p91.slice(v31, v31 + v30));
      }
      let v34;
      let vP94 = p94;
      if (p91 instanceof ArrayBuffer) {
        v34 = p91;
      } else {
        v34 = p91.buffer;
        vP94 += p91.byteOffset;
      }
      if (vP94 + (p97 - 1) * p95 + p92 * vF32 > v34.byteLength) {
        throw new Error("Last accessed byte is out of bounds.");
      }
      const v35 = p92 * vF32;
      if (p95 < v35) {
        throw new Error("Byte stride cannot be smaller than the component's byte size.");
      }
      if (p95 !== v35) {
        const v36 = new vF4(v30);
        XC(v34, vP94, p95, p92, p93, v30, p96, (p101, p102) => {
          for (let vLN011 = 0; vLN011 < p92; vLN011++) {
            v36[p102 + vLN011] = p101[vLN011];
          }
        });
        return v36;
      }
      if (vF32 !== 1 && (vP94 & vF32 - 1) !== 0) {
        vP61.e.Warn("Array must be aligned to border of element size. Data will be copied.");
        p98 = true;
      }
      if (p98) {
        return new vF4(v34.slice(vP94, vP94 + v30 * vF32));
      } else {
        return new vF4(v34, vP94, v30);
      }
    }
    function YC(p103, p104, p105, p106, p107, p108, p109, p110) {
      const v37 = p104 * f3(p105);
      const v38 = p109 * p104;
      if (p110.length !== v38) {
        throw new Error("Output length is not valid");
      }
      if (p105 === 5126 && p107 === v37) {
        if (p103 instanceof Array) {
          const v39 = p106 / 4;
          p110.set(p103, v39);
        } else if (p103 instanceof ArrayBuffer) {
          const v40 = new Float32Array(p103, p106, v38);
          p110.set(v40);
        } else {
          const v41 = p103.byteOffset + p106;
          if ((v41 & 3) !== 0) {
            vP61.e.Warn("Float array must be aligned to 4-bytes border");
            p110.set(new Float32Array(p103.buffer.slice(v41, v41 + v38 * Float32Array.BYTES_PER_ELEMENT)));
            return;
          }
          const v42 = new Float32Array(p103.buffer, v41, v38);
          p110.set(v42);
        }
      } else {
        XC(p103, p106, p107, p104, p105, v38, p108, (p111, p112) => {
          for (let vLN012 = 0; vLN012 < p104; vLN012++) {
            p110[p112 + vLN012] = p111[vLN012];
          }
        });
      }
    }
    function f9(p113, p114, IC = 0, fC = 0) {
      if (Array.isArray(p113)) {
        for (let vLN013 = 0; vLN013 < p114; vLN013++) {
          if (p113[IC + vLN013] - fC > 65535) {
            return true;
          }
        }
        return false;
      }
      return p113.BYTES_PER_ELEMENT === 4;
    }
  },
  17039: (p115, p116, p117) => {
    p117.d(p116, {
      e: () => C3
    });
    class C3 {
      get underlyingResource() {
        return null;
      }
      constructor() {
        this.references = 0;
        this.IX = 0;
        this.is32Bits = false;
        this.uniqueId = C3._Counter++;
      }
    }
    C3._Counter = 0;
  },
  17085: (p118, p119, p120) => {
    p120.d(p119, {
      e: () => C4
    });
    var vP120 = p120(16872);
    class C4 {
      static GetEffect(p121) {
        if (p121.getPipelineContext === undefined) {
          return p121.effect;
        } else {
          return p121;
        }
      }
      constructor(p122) {
        let v43 = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
        this._wasPreviouslyReady = false;
        this._forceRebindOnNextCall = true;
        this._wasPreviouslyUsingInstances = null;
        this.effect = null;
        this.defines = null;
        this.drawContext = p122.createDrawContext();
        if (v43) {
          this.materialContext = p122.createMaterialContext();
        }
      }
      setEffect(p123, p124) {
        let v44 = !(arguments.length > 2) || arguments[2] === undefined || arguments[2];
        var v45;
        this.effect = p123;
        if (p124 !== undefined) {
          this.defines = p124;
        }
        if (v44) {
          if ((v45 = this.drawContext) !== null && v45 !== undefined) {
            v45.reset();
          }
        }
      }
      dispose() {
        var v46;
        let v47 = arguments.length > 0 && arguments[0] !== undefined && arguments[0];
        if (this.effect) {
          const v48 = this.effect;
          if (v47) {
            v48.dispose();
          } else {
            vP120.e.SetImmediate(() => {
              v48.getEngine().onEndFrameObservable.addOnce(() => {
                v48.dispose();
              });
            });
          }
          this.effect = null;
        }
        if ((v46 = this.drawContext) !== null && v46 !== undefined) {
          v46.dispose();
        }
      }
    }
  },
  17171: (p125, p126, p127) => {
    p127.d(p126, {
      c: () => C5
    });
    var vP127 = p127(17013);
    class C5 {
      static GetPlanes(p128) {
        const vA = [];
        for (let vLN014 = 0; vLN014 < 6; vLN014++) {
          vA.push(new vP127.d(0, 0, 0, 0));
        }
        C5.GetPlanesToRef(p128, vA);
        return vA;
      }
      static GetNearPlaneToRef(p129, p130) {
        const v49 = p129.m;
        p130.normal.x = v49[3] + v49[2];
        p130.normal.y = v49[7] + v49[6];
        p130.normal.z = v49[11] + v49[10];
        p130.d = v49[15] + v49[14];
        p130.normalize();
      }
      static GetFarPlaneToRef(p131, p132) {
        const v50 = p131.m;
        p132.normal.x = v50[3] - v50[2];
        p132.normal.y = v50[7] - v50[6];
        p132.normal.z = v50[11] - v50[10];
        p132.d = v50[15] - v50[14];
        p132.normalize();
      }
      static GetLeftPlaneToRef(p133, p134) {
        const v51 = p133.m;
        p134.normal.x = v51[3] + v51[0];
        p134.normal.y = v51[7] + v51[4];
        p134.normal.z = v51[11] + v51[8];
        p134.d = v51[15] + v51[12];
        p134.normalize();
      }
      static GetRightPlaneToRef(p135, p136) {
        const v52 = p135.m;
        p136.normal.x = v52[3] - v52[0];
        p136.normal.y = v52[7] - v52[4];
        p136.normal.z = v52[11] - v52[8];
        p136.d = v52[15] - v52[12];
        p136.normalize();
      }
      static GetTopPlaneToRef(p137, p138) {
        const v53 = p137.m;
        p138.normal.x = v53[3] - v53[1];
        p138.normal.y = v53[7] - v53[5];
        p138.normal.z = v53[11] - v53[9];
        p138.d = v53[15] - v53[13];
        p138.normalize();
      }
      static GetBottomPlaneToRef(p139, p140) {
        const v54 = p139.m;
        p140.normal.x = v54[3] + v54[1];
        p140.normal.y = v54[7] + v54[5];
        p140.normal.z = v54[11] + v54[9];
        p140.d = v54[15] + v54[13];
        p140.normalize();
      }
      static GetPlanesToRef(p141, p142) {
        C5.GetNearPlaneToRef(p141, p142[0]);
        C5.GetFarPlaneToRef(p141, p142[1]);
        C5.GetLeftPlaneToRef(p141, p142[2]);
        C5.GetRightPlaneToRef(p141, p142[3]);
        C5.GetTopPlaneToRef(p141, p142[4]);
        C5.GetBottomPlaneToRef(p141, p142[5]);
      }
      static IsPointInFrustum(p143, p144) {
        for (let vLN015 = 0; vLN015 < 6; vLN015++) {
          if (p144[vLN015].dotCoordinate(p143) < 0) {
            return false;
          }
        }
        return true;
      }
    }
  },
  17186: (p145, p146, p147) => {
    p147.d(p146, {
      b: () => C6
    });
    var vP147 = p147(16821);
    class C6 {
      get min() {
        return this._min;
      }
      get max() {
        return this._max;
      }
      get average() {
        return this._average;
      }
      get lastSecAverage() {
        return this._lastSecAverage;
      }
      get current() {
        return this._current;
      }
      get total() {
        return this._totalAccumulated;
      }
      get count() {
        return this._totalValueCount;
      }
      constructor() {
        this._startMonitoringTime = 0;
        this._min = 0;
        this._max = 0;
        this._average = 0;
        this._lastSecAverage = 0;
        this._current = 0;
        this._totalValueCount = 0;
        this._totalAccumulated = 0;
        this._lastSecAccumulated = 0;
        this._lastSecTime = 0;
        this._lastSecValueCount = 0;
      }
      fetchNewFrame() {
        this._totalValueCount++;
        this._current = 0;
        this._lastSecValueCount++;
      }
      addCount(p148, p149) {
        if (C6.Enabled) {
          this._current += p148;
          if (p149) {
            this._fetchResult();
          }
        }
      }
      beginMonitoring() {
        if (C6.Enabled) {
          this._startMonitoringTime = vP147.d.Now;
        }
      }
      endMonitoring() {
        let v55 = !(arguments.length > 0) || arguments[0] === undefined || arguments[0];
        if (!C6.Enabled) {
          return;
        }
        if (v55) {
          this.fetchNewFrame();
        }
        const v56 = vP147.d.Now;
        this._current = v56 - this._startMonitoringTime;
        if (v55) {
          this._fetchResult();
        }
      }
      FI() {
        this._fetchResult();
      }
      _fetchResult() {
        this._totalAccumulated += this._current;
        this._lastSecAccumulated += this._current;
        this._min = Math.min(this._min, this._current);
        this._max = Math.max(this._max, this._current);
        this._average = this._totalAccumulated / this._totalValueCount;
        const v57 = vP147.d.Now;
        if (v57 - this._lastSecTime > 1000) {
          this._lastSecAverage = this._lastSecAccumulated / this._lastSecValueCount;
          this._lastSecTime = v57;
          this._lastSecAccumulated = 0;
          this._lastSecValueCount = 0;
        }
      }
    }
    C6.Enabled = true;
  },
  17061: (p150, p151, p152) => {
    p152.d(p151, {
      c: () => C8,
      g: () => C7
    });
    class C7 {
      constructor(p153) {
        this.length = 0;
        this.data = new Array(p153);
        this._id = C7._GlobalId++;
      }
      push(p154) {
        this.data[this.length++] = p154;
        if (this.length > this.data.length) {
          this.data.length *= 2;
        }
      }
      forEach(p155) {
        for (let vLN016 = 0; vLN016 < this.length; vLN016++) {
          p155(this.data[vLN016]);
        }
      }
      sort(p156) {
        this.data.sort(p156);
      }
      reset() {
        this.length = 0;
      }
      dispose() {
        this.reset();
        if (this.data) {
          this.data.length = 0;
        }
      }
      concat(p157) {
        if (p157.length !== 0) {
          if (this.length + p157.length > this.data.length) {
            this.data.length = (this.length + p157.length) * 2;
          }
          for (let vLN017 = 0; vLN017 < p157.length; vLN017++) {
            this.data[this.length++] = (p157.data || p157)[vLN017];
          }
        }
      }
      indexOf(p158) {
        const v58 = this.data.indexOf(p158);
        if (v58 >= this.length) {
          return -1;
        } else {
          return v58;
        }
      }
      contains(p159) {
        return this.indexOf(p159) !== -1;
      }
    }
    C7._GlobalId = 0;
    class C8 extends C7 {
      constructor() {
        super(...arguments);
        this._duplicateId = 0;
      }
      push(p160) {
        super.push(p160);
        p160.__smartArrayFlags ||= {};
        p160.__smartArrayFlags[this._id] = this._duplicateId;
      }
      pushNoDuplicate(p161) {
        return (!p161.__smartArrayFlags || p161.__smartArrayFlags[this._id] !== this._duplicateId) && (this.push(p161), true);
      }
      reset() {
        super.reset();
        this._duplicateId++;
      }
      concatWithNoDuplicate(p162) {
        if (p162.length !== 0) {
          if (this.length + p162.length > this.data.length) {
            this.data.length = (this.length + p162.length) * 2;
          }
          for (let vLN018 = 0; vLN018 < p162.length; vLN018++) {
            const v59 = (p162.data || p162)[vLN018];
            this.pushNoDuplicate(v59);
          }
        }
      }
    }
  },
  17026: (p163, p164, p165) => {
    p165.d(p164, {
      c: () => C9
    });
    var vP165 = p165(17031);
    var vP1652 = p165(16796);
    class C9 {
      constructor(p166) {
        this._vertexBuffers = {};
        this.onBeforeRenderObservable = new vP1652.e();
        this._scene = p166;
      }
      _prepareBuffers() {
        if (this._vertexBuffers[vP165.e.PositionKind]) {
          return;
        }
        const vA2 = [];
        vA2.push(1, 1);
        vA2.push(-1, 1);
        vA2.push(-1, -1);
        vA2.push(1, -1);
        this._vertexBuffers[vP165.e.PositionKind] = new vP165.e(this._scene.getEngine(), vA2, vP165.e.PositionKind, false, false, 2);
        this._buildIndexBuffer();
      }
      _buildIndexBuffer() {
        const vA3 = [];
        vA3.push(0);
        vA3.push(1);
        vA3.push(2);
        vA3.push(0);
        vA3.push(2);
        vA3.push(3);
        this._indexBuffer = this._scene.getEngine().createIndexBuffer(vA3);
      }
      _rebuild() {
        const v60 = this._vertexBuffers[vP165.e.PositionKind];
        if (v60) {
          v60._rebuild();
          this._buildIndexBuffer();
        }
      }
      _prepareFrame(CC = null, yC = null) {
        const v61 = this._scene.activeCamera;
        return !!v61 && (yC = yC || v61._postProcesses.filter(p167 => p167 != null), !!yC && yC.length !== 0 && !!this._scene.postProcessesEnabled && (yC[0].activate(v61, CC, yC !== null && yC !== undefined), true));
      }
      directRender(p168, yC = null, IC = false, fC = 0, ky = 0, gC = false, AC = p168.length) {
        const v62 = this._scene.getEngine();
        for (let vLN019 = 0; vLN019 < AC; vLN019++) {
          var v63;
          if (vLN019 < p168.length - 1) {
            p168[vLN019 + 1].activate(this._scene.activeCamera || this._scene, yC?.texture);
          } else {
            if (yC) {
              v62.bindFramebuffer(p164, vP165, undefined, undefined, p165, vP1652);
            } else if (!C9) {
              v62.restoreDefaultFramebuffer();
            }
            if ((v63 = v62._debugInsertMarker) !== null && v63 !== undefined) {
              v63.call(v62, `post process ${p168[vLN019].name} output`);
            }
          }
          const v64 = p168[vLN019];
          const v65 = v64.apply();
          if (v65) {
            v64.onBeforeRenderObservable.notifyObservers(v65);
            this._prepareBuffers();
            v62.bindBuffers(this._vertexBuffers, this._indexBuffer, v65);
            v62.drawElementsType(0, 0, 6);
            v64.onAfterRenderObservable.notifyObservers(v65);
          }
        }
        v62.setDepthBuffer(true);
        v62.setDepthWrite(true);
      }
      _finalizeFrame(p169, p170, p171, p172, ky = false) {
        const v66 = this._scene.activeCamera;
        if (!v66) {
          return;
        }
        this.onBeforeRenderObservable.notifyObservers(this);
        if ((p172 = p172 || v66._postProcesses.filter(p173 => p173 != null)).length === 0 || !this._scene.postProcessesEnabled) {
          return;
        }
        const v67 = this._scene.getEngine();
        for (let vLN020 = 0, v68 = p172.length; vLN020 < v68; vLN020++) {
          const v69 = p172[vLN020];
          var v70;
          if (vLN020 < v68 - 1) {
            v69._outputTexture = p172[vLN020 + 1].activate(v66, p170?.texture);
          } else {
            if (p170) {
              v67.bindFramebuffer(p170, p171, undefined, undefined, vP1652);
              v69._outputTexture = p170;
            } else {
              v67.restoreDefaultFramebuffer();
              v69._outputTexture = null;
            }
            if ((v70 = v67._debugInsertMarker) !== null && v70 !== undefined) {
              v70.call(v67, `post process ${p172[vLN020].name} output`);
            }
          }
          if (p169) {
            break;
          }
          const v71 = v69.apply();
          if (v71) {
            v69.onBeforeRenderObservable.notifyObservers(v71);
            this._prepareBuffers();
            v67.bindBuffers(this._vertexBuffers, this._indexBuffer, v71);
            v67.drawElementsType(0, 0, 6);
            v69.onAfterRenderObservable.notifyObservers(v71);
          }
        }
        v67.setDepthBuffer(true);
        v67.setDepthWrite(true);
        v67.setAlphaMode(0);
      }
      dispose() {
        const v72 = this._vertexBuffers[vP165.e.PositionKind];
        if (v72) {
          v72.dispose();
          this._vertexBuffers[vP165.e.PositionKind] = null;
        }
        if (this._indexBuffer) {
          this._scene.getEngine()._releaseBuffer(this._indexBuffer);
          this._indexBuffer = null;
        }
      }
    }
  },
  17056: (p174, p175, p176) => {
    p176.d(p175, {
      b: () => C10
    });
    var vP176 = p176(17061);
    var vP1762 = p176(16973);
    class C10 {
      set opaqueSortCompareFn(p177) {
        this._opaqueSortCompareFn = p177 || C10.nO;
        this._renderOpaque = this._renderOpaqueSorted;
      }
      set alphaTestSortCompareFn(p178) {
        this._alphaTestSortCompareFn = p178 || C10.nO;
        this._renderAlphaTest = this._renderAlphaTestSorted;
      }
      set transparentSortCompareFn(p179) {
        this._transparentSortCompareFn = p179 || C10.defaultTransparentSortCompare;
        this._renderTransparent = this._renderTransparentSorted;
      }
      constructor(p180, p181, IC = null, ky = null, gC = null) {
        this.index = p180;
        this._opaqueSubMeshes = new vP176.g(256);
        this._transparentSubMeshes = new vP176.g(256);
        this._alphaTestSubMeshes = new vP176.g(256);
        this._depthOnlySubMeshes = new vP176.g(256);
        this._particleSystems = new vP176.g(256);
        this._spriteManagers = new vP176.g(256);
        this._empty = true;
        this._edgesRenderers = new vP176.c(16);
        this._scene = p181;
        this.opaqueSortCompareFn = IC;
        this.alphaTestSortCompareFn = ky;
        this.transparentSortCompareFn = gC;
      }
      render(p182, p183, p184, p185) {
        if (p182) {
          p182(this._opaqueSubMeshes, this._alphaTestSubMeshes, this._transparentSubMeshes, this._depthOnlySubMeshes);
          return;
        }
        const v73 = this._scene.getEngine();
        if (this._depthOnlySubMeshes.length !== 0) {
          v73.setColorWrite(false);
          this._renderAlphaTest(this._depthOnlySubMeshes);
          v73.setColorWrite(true);
        }
        if (this._opaqueSubMeshes.length !== 0) {
          this._renderOpaque(this._opaqueSubMeshes);
        }
        if (this._alphaTestSubMeshes.length !== 0) {
          this._renderAlphaTest(this._alphaTestSubMeshes);
        }
        const v74 = v73.getStencilBuffer();
        v73.setStencilBuffer(false);
        if (p183) {
          this._renderSprites();
        }
        if (p184) {
          this._renderParticles(p185);
        }
        if (this.onBeforeTransparentRendering) {
          this.onBeforeTransparentRendering();
        }
        if (this._transparentSubMeshes.length !== 0 || this._scene.useOrderIndependentTransparency) {
          v73.setStencilBuffer(v74);
          if (this._scene.useOrderIndependentTransparency) {
            const v75 = this._scene.depthPeelingRenderer.render(this._transparentSubMeshes);
            if (v75.length) {
              this._renderTransparent(v75);
            }
          } else {
            this._renderTransparent(this._transparentSubMeshes);
          }
          v73.setAlphaMode(0);
        }
        v73.setStencilBuffer(false);
        if (this._edgesRenderers.length) {
          for (let vLN021 = 0; vLN021 < this._edgesRenderers.length; vLN021++) {
            this._edgesRenderers.data[vLN021].render();
          }
          v73.setAlphaMode(0);
        }
        v73.setStencilBuffer(v74);
      }
      _renderOpaqueSorted(p186) {
        C10._RenderSorted(p186, this._opaqueSortCompareFn, this._scene.activeCamera, false);
      }
      _renderAlphaTestSorted(p187) {
        C10._RenderSorted(p187, this._alphaTestSortCompareFn, this._scene.activeCamera, false);
      }
      _renderTransparentSorted(p188) {
        C10._RenderSorted(p188, this._transparentSortCompareFn, this._scene.activeCamera, true);
      }
      static _RenderSorted(p189, p190, p191, p192) {
        let v76;
        let vLN022 = 0;
        const v77 = p191 ? p191.globalPosition : C10._ZeroVector;
        if (p192) {
          for (; vLN022 < p189.length; vLN022++) {
            v76 = p189.data[vLN022];
            v76._alphaIndex = v76.getMesh().alphaIndex;
            v76._distanceToCamera = vP1762.bL.Distance(v76.getBoundingInfo().boundingSphere.centerWorld, v77);
          }
        }
        const v78 = p189.length === p189.data.length ? p189.data : p189.data.slice(0, p189.length);
        if (p190) {
          v78.sort(p190);
        }
        const v79 = v78[0].getMesh().YL();
        for (vLN022 = 0; vLN022 < v78.length; vLN022++) {
          v76 = v78[vLN022];
          if (!v79._activeMeshesFrozenButKeepClipping || v76.isInFrustum(v79._frustumPlanes)) {
            if (p192) {
              const v80 = v76.kI();
              if (v80 && v80.needDepthPrePass) {
                const v81 = v80.YL().getEngine();
                v81.setColorWrite(false);
                v81.setAlphaMode(0);
                v76.render(false);
                v81.setColorWrite(true);
              }
            }
            v76.render(p192);
          }
        }
      }
      static defaultTransparentSortCompare(p193, p194) {
        if (p193._alphaIndex > p194._alphaIndex) {
          return 1;
        } else if (p193._alphaIndex < p194._alphaIndex) {
          return -1;
        } else {
          return C10.backToFrontSortCompare(p193, p194);
        }
      }
      static backToFrontSortCompare(p195, p196) {
        if (p195._distanceToCamera < p196._distanceToCamera) {
          return 1;
        } else if (p195._distanceToCamera > p196._distanceToCamera) {
          return -1;
        } else {
          return 0;
        }
      }
      static frontToBackSortCompare(p197, p198) {
        if (p197._distanceToCamera < p198._distanceToCamera) {
          return -1;
        } else if (p197._distanceToCamera > p198._distanceToCamera) {
          return 1;
        } else {
          return 0;
        }
      }
      static nO(p199, p200) {
        const v82 = p199.getMesh();
        const v83 = p200.getMesh();
        if (v82.material && v83.material) {
          return v82.material.uniqueId - v83.material.uniqueId;
        } else {
          return v82.uniqueId - v83.uniqueId;
        }
      }
      prepare() {
        this._opaqueSubMeshes.reset();
        this._transparentSubMeshes.reset();
        this._alphaTestSubMeshes.reset();
        this._depthOnlySubMeshes.reset();
        this._particleSystems.reset();
        this.prepareSprites();
        this._edgesRenderers.reset();
        this._empty = true;
      }
      prepareSprites() {
        this._spriteManagers.reset();
      }
      dispose() {
        this._opaqueSubMeshes.dispose();
        this._transparentSubMeshes.dispose();
        this._alphaTestSubMeshes.dispose();
        this._depthOnlySubMeshes.dispose();
        this._particleSystems.dispose();
        this._spriteManagers.dispose();
        this._edgesRenderers.dispose();
      }
      dispatch(p201, p202 = p201.getMesh(), p203 = p201.kI()) {
        if (p203 !== null && p203 !== undefined) {
          if (p203.needAlphaBlendingForMesh(p202)) {
            this._transparentSubMeshes.push(p201);
          } else if (p203.needAlphaTestingForMesh(p202)) {
            if (p203.needDepthPrePass) {
              this._depthOnlySubMeshes.push(p201);
            }
            this._alphaTestSubMeshes.push(p201);
          } else {
            if (p203.needDepthPrePass) {
              this._depthOnlySubMeshes.push(p201);
            }
            this._opaqueSubMeshes.push(p201);
          }
          p202._renderingGroup = this;
          if (p202._edgesRenderer && p202.isEnabled() && p202.isVisible && p202._edgesRenderer.isEnabled) {
            this._edgesRenderers.pushNoDuplicate(p202._edgesRenderer);
          }
          this._empty = false;
        }
      }
      dispatchSprites(p204) {
        this._spriteManagers.push(p204);
        this._empty = false;
      }
      dispatchParticles(p205) {
        this._particleSystems.push(p205);
        this._empty = false;
      }
      _renderParticles(p206) {
        if (this._particleSystems.length === 0) {
          return;
        }
        const v84 = this._scene.activeCamera;
        this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
        for (let vLN023 = 0; vLN023 < this._particleSystems.length; vLN023++) {
          const v85 = this._particleSystems.data[vLN023];
          if ((v84 && v84.layerMask & v85.layerMask) === 0) {
            continue;
          }
          const v86 = v85.Yy;
          if (!v86.position || !p206 || p206.indexOf(v86) !== -1) {
            this._scene._activeParticles.addCount(v85.render(), false);
          }
        }
        this._scene.onAfterParticlesRenderingObservable.notifyObservers(this._scene);
      }
      _renderSprites() {
        if (!this._scene.spritesEnabled || this._spriteManagers.length === 0) {
          return;
        }
        const v87 = this._scene.activeCamera;
        this._scene.onBeforeSpritesRenderingObservable.notifyObservers(this._scene);
        for (let vLN024 = 0; vLN024 < this._spriteManagers.length; vLN024++) {
          const v88 = this._spriteManagers.data[vLN024];
          if ((v87 && v87.layerMask & v88.layerMask) !== 0) {
            v88.render();
          }
        }
        this._scene.onAfterSpritesRenderingObservable.notifyObservers(this._scene);
      }
    }
    C10._ZeroVector = vP1762.bL.Zero();
  },
  17052: (p207, p208, p209) => {
    p209.d(p208, {
      d: () => C12
    });
    var vP209 = p209(17056);
    class C11 {}
    class C12 {
      get maintainStateBetweenFrames() {
        return this._maintainStateBetweenFrames;
      }
      set maintainStateBetweenFrames(p210) {
        if (p210 !== this._maintainStateBetweenFrames) {
          this._maintainStateBetweenFrames = p210;
          if (!this._maintainStateBetweenFrames) {
            this.restoreDispachedFlags();
          }
        }
      }
      restoreDispachedFlags() {
        for (const v89 of this._scene.meshes) {
          if (v89.wf) {
            for (const v90 of v89.wf) {
              v90._wasDispatched = false;
            }
          }
        }
        if (this._scene.spriteManagers) {
          for (const v91 of this._scene.spriteManagers) {
            v91._wasDispatched = false;
          }
        }
        for (const v92 of this._scene.BO) {
          v92._wasDispatched = false;
        }
      }
      constructor(p211) {
        this._useSceneAutoClearSetup = false;
        this._renderingGroups = new Array();
        this._autoClearDepthStencil = {};
        this._customOpaqueSortCompareFn = {};
        this._customAlphaTestSortCompareFn = {};
        this._customTransparentSortCompareFn = {};
        this._renderingGroupInfo = new C11();
        this._maintainStateBetweenFrames = false;
        this._scene = p211;
        for (let v93 = C12.MIN_RENDERINGGROUPS; v93 < C12.MAX_RENDERINGGROUPS; v93++) {
          this._autoClearDepthStencil[v93] = {
            Kf: true,
            depth: true,
            Lf: true
          };
        }
      }
      getRenderingGroup(p212) {
        const v94 = p212 || 0;
        this._prepareRenderingGroup(v94);
        return this._renderingGroups[v94];
      }
      _clearDepthStencilBuffer() {
        let v95 = !(arguments.length > 0) || arguments[0] === undefined || arguments[0];
        let v96 = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
        if (!this._depthStencilBufferAlreadyCleaned) {
          this._scene.getEngine().clear(null, false, v95, v96);
          this._depthStencilBufferAlreadyCleaned = true;
        }
      }
      render(p213, p214, p215, p216) {
        const v97 = this._renderingGroupInfo;
        v97.rL = this._scene;
        v97.camera = this._scene.activeCamera;
        v97.renderingManager = this;
        if (this._scene.spriteManagers && p216) {
          for (let vLN025 = 0; vLN025 < this._scene.spriteManagers.length; vLN025++) {
            const v98 = this._scene.spriteManagers[vLN025];
            this.dispatchSprites(v98);
          }
        }
        for (let v99 = C12.MIN_RENDERINGGROUPS; v99 < C12.MAX_RENDERINGGROUPS; v99++) {
          this._depthStencilBufferAlreadyCleaned = v99 === C12.MIN_RENDERINGGROUPS;
          const v100 = this._renderingGroups[v99];
          if (!v100 || v100._empty) {
            continue;
          }
          const v101 = 1 << v99;
          v97.renderingGroupId = v99;
          this._scene.onBeforeRenderingGroupObservable.notifyObservers(v97, v101);
          if (C12.AUTOCLEAR) {
            const v102 = this._useSceneAutoClearSetup ? this._scene.getAutoClearDepthStencilSetup(v99) : this._autoClearDepthStencil[v99];
            if (v102 && v102.Kf) {
              this._clearDepthStencilBuffer(v102.depth, v102.Lf);
            }
          }
          for (const v103 of this._scene._beforeRenderingGroupDrawStage) {
            v103.action(v99);
          }
          v100.render(p213, p216, p215, p214);
          for (const v104 of this._scene._afterRenderingGroupDrawStage) {
            v104.action(v99);
          }
          this._scene.onAfterRenderingGroupObservable.notifyObservers(v97, v101);
        }
      }
      reset() {
        if (!this.maintainStateBetweenFrames) {
          for (let v105 = C12.MIN_RENDERINGGROUPS; v105 < C12.MAX_RENDERINGGROUPS; v105++) {
            const v106 = this._renderingGroups[v105];
            if (v106) {
              v106.prepare();
            }
          }
        }
      }
      resetSprites() {
        if (!this.maintainStateBetweenFrames) {
          for (let v107 = C12.MIN_RENDERINGGROUPS; v107 < C12.MAX_RENDERINGGROUPS; v107++) {
            const v108 = this._renderingGroups[v107];
            if (v108) {
              v108.prepareSprites();
            }
          }
        }
      }
      dispose() {
        this.freeRenderingGroups();
        this._renderingGroups.length = 0;
        this._renderingGroupInfo = null;
      }
      freeRenderingGroups() {
        for (let v109 = C12.MIN_RENDERINGGROUPS; v109 < C12.MAX_RENDERINGGROUPS; v109++) {
          const v110 = this._renderingGroups[v109];
          if (v110) {
            v110.dispose();
          }
        }
      }
      _prepareRenderingGroup(p217) {
        if (this._renderingGroups[p217] === undefined) {
          this._renderingGroups[p217] = new vP209.b(p217, this._scene, this._customOpaqueSortCompareFn[p217], this._customAlphaTestSortCompareFn[p217], this._customTransparentSortCompareFn[p217]);
        }
      }
      dispatchSprites(p218) {
        if (!this.maintainStateBetweenFrames || !p218._wasDispatched) {
          p218._wasDispatched = true;
          this.getRenderingGroup(p218.renderingGroupId).dispatchSprites(p218);
        }
      }
      dispatchParticles(p219) {
        if (!this.maintainStateBetweenFrames || !p219._wasDispatched) {
          p219._wasDispatched = true;
          this.getRenderingGroup(p219.renderingGroupId).dispatchParticles(p219);
        }
      }
      dispatch(p220, p221 = p220.getMesh(), p222) {
        if (!this.maintainStateBetweenFrames || !p220._wasDispatched) {
          p220._wasDispatched = true;
          this.getRenderingGroup(p221.renderingGroupId).dispatch(p220, p221, p222);
        }
      }
      JO(p223, yC = null, IC = null, fC = null) {
        this._customOpaqueSortCompareFn[p223] = yC;
        this._customAlphaTestSortCompareFn[p223] = IC;
        this._customTransparentSortCompareFn[p223] = fC;
        if (this._renderingGroups[p223]) {
          const v111 = this._renderingGroups[p223];
          v111.opaqueSortCompareFn = this._customOpaqueSortCompareFn[p223];
          v111.alphaTestSortCompareFn = this._customAlphaTestSortCompareFn[p223];
          v111.transparentSortCompareFn = this._customTransparentSortCompareFn[p223];
        }
      }
      setRenderingAutoClearDepthStencil(p224, p225) {
        let v112 = !(arguments.length > 2) || arguments[2] === undefined || arguments[2];
        let v113 = !(arguments.length > 3) || arguments[3] === undefined || arguments[3];
        this._autoClearDepthStencil[p224] = {
          Kf: p225,
          depth: v112,
          Lf: v113
        };
      }
      getAutoClearDepthStencilSetup(p226) {
        return this._autoClearDepthStencil[p226];
      }
    }
    C12.MAX_RENDERINGGROUPS = 4;
    C12.MIN_RENDERINGGROUPS = 0;
    C12.AUTOCLEAR = true;
  }
};
//# sourceMappingURL=pz8l4l.19.02ad798f.chunk.js.map
//# debugId=bb214188-5a28-58bc-a274-2885b8db121d