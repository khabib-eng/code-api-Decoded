(function () {
  try {
    var v = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : {};
    var v2 = new v.Error().stack;
    if (v2) {
      v._sentryDebugIds = v._sentryDebugIds || {};
      v._sentryDebugIds[v2] = "d056afc8-d2ba-5bc6-8c98-77f6e3f1584f";
    }
  } catch (e2) {}
})();
export const id = 9;
export const ids = [9];
export const modules = {
  16859: (p, p2, p3) => {
    p3.d(p2, {
      b: () => f3,
      f: () => f,
      l: () => f2,
      h: () => f10,
      m: () => vO3
    });
    class C {
      constructor() {
        this.children = [];
      }
      isValid(p4) {
        return true;
      }
      process(p5, p6, p7) {
        let vLS = "";
        if (this.line) {
          let v3 = this.line;
          const v4 = p6.processor;
          if (v4) {
            var v5;
            var v6;
            var v7;
            if (v4.lineProcessor) {
              v3 = v4.lineProcessor(v3, p6.isFragment, p6.processingContext);
            }
            const v8 = p6.processor?.attributeKeywordName ?? "attribute";
            const v9 = p6.isFragment && (v5 = p6.processor) !== null && v5 !== undefined && v5.varyingFragmentKeywordName ? p6.processor?.varyingFragmentKeywordName : !p6.isFragment && (v6 = p6.processor) !== null && v6 !== undefined && v6.varyingVertexKeywordName ? p6.processor?.varyingVertexKeywordName : "varying";
            if (!p6.isFragment && v4.attributeProcessor && this.line.startsWith(v8)) {
              v3 = v4.attributeProcessor(this.line, p5, p6.processingContext);
            } else if (v4.varyingProcessor && ((v7 = v4.varyingCheck) !== null && v7 !== undefined && v7.call(v4, this.line, p6.isFragment) || !v4.varyingCheck && this.line.startsWith(v9))) {
              v3 = v4.varyingProcessor(this.line, p6.isFragment, p5, p6.processingContext);
            } else if (v4.uniformProcessor && v4.uniformRegexp && v4.uniformRegexp.test(this.line)) {
              if (!p6.lookForClosingBracketForUniformBuffer) {
                v3 = v4.uniformProcessor(this.line, p6.isFragment, p5, p6.processingContext);
              }
            } else if (v4.uniformBufferProcessor && v4.uniformBufferRegexp && v4.uniformBufferRegexp.test(this.line)) {
              if (!p6.lookForClosingBracketForUniformBuffer) {
                v3 = v4.uniformBufferProcessor(this.line, p6.isFragment, p6.processingContext);
                p6.lookForClosingBracketForUniformBuffer = true;
              }
            } else if (v4.textureProcessor && v4.textureRegexp && v4.textureRegexp.test(this.line)) {
              v3 = v4.textureProcessor(this.line, p6.isFragment, p5, p6.processingContext);
            } else if ((v4.uniformProcessor || v4.uniformBufferProcessor) && this.line.startsWith("uniform") && !p6.lookForClosingBracketForUniformBuffer) {
              if (/uniform\s+(?:(?:highp)?|(?:lowp)?)\s*(\S+)\s+(\S+)\s*;/.test(this.line)) {
                if (v4.uniformProcessor) {
                  v3 = v4.uniformProcessor(this.line, p6.isFragment, p5, p6.processingContext);
                }
              } else if (v4.uniformBufferProcessor) {
                v3 = v4.uniformBufferProcessor(this.line, p6.isFragment, p6.processingContext);
                p6.lookForClosingBracketForUniformBuffer = true;
              }
            }
            if (p6.lookForClosingBracketForUniformBuffer && this.line.indexOf("}") !== -1) {
              p6.lookForClosingBracketForUniformBuffer = false;
              if (v4.endOfUniformBufferProcessor) {
                v3 = v4.endOfUniformBufferProcessor(this.line, p6.isFragment, p6.processingContext);
              }
            }
          }
          vLS += v3 + "\n";
        }
        for (const v10 of this.children) {
          vLS += v10.process(p5, p6, p7);
        }
        if (this.additionalDefineKey) {
          p5[this.additionalDefineKey] = this.additionalDefineValue || "true";
          p7[this.additionalDefineKey] = p5[this.additionalDefineKey];
        }
        return vLS;
      }
    }
    class C2 {
      constructor() {
        this._lines = [];
      }
      get currentLine() {
        return this._lines[this.lineIndex];
      }
      get canRead() {
        return this.lineIndex < this._lines.length - 1;
      }
      set lines(p8) {
        this._lines.length = 0;
        for (const v11 of p8) {
          if (!v11 || v11 === "\r") {
            continue;
          }
          if (v11[0] === "#") {
            this._lines.push(v11);
            continue;
          }
          const v12 = v11.trim();
          if (!v12) {
            continue;
          }
          if (v12.startsWith("//")) {
            this._lines.push(v11);
            continue;
          }
          const v13 = v12.indexOf(";");
          if (v13 === -1) {
            this._lines.push(v12);
          } else if (v13 === v12.length - 1) {
            if (v12.length > 1) {
              this._lines.push(v12);
            }
          } else {
            const v14 = v11.split(";");
            for (let vLN0 = 0; vLN0 < v14.length; vLN0++) {
              let v15 = v14[vLN0];
              if (v15) {
                v15 = v15.trim();
                if (v15) {
                  this._lines.push(v15 + (vLN0 !== v14.length - 1 ? ";" : ""));
                }
              }
            }
          }
        }
      }
    }
    class C3 extends C {
      process(p9, p10, p11) {
        for (let vLN02 = 0; vLN02 < this.children.length; vLN02++) {
          const v16 = this.children[vLN02];
          if (v16.isValid(p9)) {
            return v16.process(p9, p10, p11);
          }
        }
        return "";
      }
    }
    class C4 extends C {
      isValid(p12) {
        return this.testExpression.isTrue(p12);
      }
    }
    class C5 {
      isTrue(p13) {
        return true;
      }
      static postfixToInfix(p14) {
        const vA = [];
        for (const v17 of p14) {
          if (C5._OperatorPriority[v17] === undefined) {
            vA.push(v17);
          } else {
            const v18 = vA[vA.length - 1];
            const v19 = vA[vA.length - 2];
            vA.length -= 2;
            vA.push(`(${v19}${v17}${v18})`);
          }
        }
        return vA[vA.length - 1];
      }
      static infixToPostfix(p15) {
        const v20 = C5._InfixToPostfixCache.get(p15);
        if (v20) {
          v20.accessTime = Date.now();
          return v20.result;
        }
        if (!p15.includes("&&") && !p15.includes("||") && !p15.includes(")") && !p15.includes("(")) {
          return [p15];
        }
        const vA2 = [];
        let v21 = -1;
        const vF = () => {
          vLS2 = vLS2.trim();
          if (vLS2 !== "") {
            vA2.push(vLS2);
            vLS2 = "";
          }
        };
        const vF2 = p16 => {
          if (v21 < C5._Stack.length - 1) {
            C5._Stack[++v21] = p16;
          }
        };
        const vF3 = () => C5._Stack[v21];
        const vF4 = () => v21 === -1 ? "!!INVALID EXPRESSION!!" : C5._Stack[v21--];
        let vLN03 = 0;
        let vLS2 = "";
        while (vLN03 < p15.length) {
          const v22 = p15.charAt(vLN03);
          const v23 = vLN03 < p15.length - 1 ? p15.substring(vLN03, 2 + vLN03) : "";
          if (v22 === "(") {
            vLS2 = "";
            vF2(v22);
          } else if (v22 === ")") {
            for (vF(); v21 !== -1 && vF3() !== "(";) {
              vA2.push(vF4());
            }
            vF4();
          } else if (C5._OperatorPriority[v23] > 1) {
            for (vF(); v21 !== -1 && C5._OperatorPriority[vF3()] >= C5._OperatorPriority[v23];) {
              vA2.push(vF4());
            }
            vF2(v23);
            vLN03++;
          } else {
            vLS2 += v22;
          }
          vLN03++;
        }
        for (vF(); v21 !== -1;) {
          if (vF3() === "(") {
            vF4();
          } else {
            vA2.push(vF4());
          }
        }
        if (C5._InfixToPostfixCache.size >= C5.InfixToPostfixCacheLimitSize) {
          C5.ClearCache();
        }
        C5._InfixToPostfixCache.set(p15, {
          result: vA2,
          accessTime: Date.now()
        });
        return vA2;
      }
      static ClearCache() {
        const v24 = Array.from(C5._InfixToPostfixCache.entries()).sort((p17, p18) => p17[1].accessTime - p18[1].accessTime);
        for (let vLN04 = 0; vLN04 < C5.InfixToPostfixCacheCleanupSize; vLN04++) {
          C5._InfixToPostfixCache.delete(v24[vLN04][0]);
        }
      }
    }
    C5.InfixToPostfixCacheLimitSize = 50000;
    C5.InfixToPostfixCacheCleanupSize = 25000;
    C5._InfixToPostfixCache = new Map();
    C5._OperatorPriority = {
      ")": 0,
      "(": 1,
      "||": 2,
      "&&": 3
    };
    C5._Stack = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
    class C6 extends C5 {
      constructor(p19, yC = false) {
        super();
        this.define = p19;
        this.not = yC;
      }
      isTrue(p20) {
        let v25 = p20[this.define] !== undefined;
        if (this.not) {
          v25 = !v25;
        }
        return v25;
      }
    }
    class C7 extends C5 {
      isTrue(p21) {
        return this.leftOperand.isTrue(p21) || this.rightOperand.isTrue(p21);
      }
    }
    class C8 extends C5 {
      isTrue(p22) {
        return this.leftOperand.isTrue(p22) && this.rightOperand.isTrue(p22);
      }
    }
    class C9 extends C5 {
      constructor(p23, p24, p25) {
        super();
        this.define = p23;
        this.operand = p24;
        this.testValue = p25;
      }
      toString() {
        return `${this.define} ${this.operand} ${this.testValue}`;
      }
      isTrue(p26) {
        let v26 = false;
        const vParseInt = parseInt(p26[this.define] != undefined ? p26[this.define] : this.define);
        const vParseInt2 = parseInt(p26[this.testValue] != undefined ? p26[this.testValue] : this.testValue);
        if (isNaN(vParseInt) || isNaN(vParseInt2)) {
          return false;
        }
        switch (this.operand) {
          case ">":
            v26 = vParseInt > vParseInt2;
            break;
          case "<":
            v26 = vParseInt < vParseInt2;
            break;
          case "<=":
            v26 = vParseInt <= vParseInt2;
            break;
          case ">=":
            v26 = vParseInt >= vParseInt2;
            break;
          case "==":
            v26 = vParseInt === vParseInt2;
            break;
          case "!=":
            v26 = vParseInt !== vParseInt2;
        }
        return v26;
      }
    }
    var vP3 = p3(16829);
    var vP32 = p3(16864);
    const v27 = /defined\s*?\((.+?)\)/g;
    const v28 = /defined\s*?\[(.+?)\]/g;
    const v29 = /#include\s?<(.+)>(\((.*)\))*(\[(.*)\])*/g;
    const v30 = /__decl__/;
    const v31 = /light\{X\}.(\w*)/g;
    const v32 = /\{X\}/g;
    const vA3 = [];
    const v33 = /(#ifdef)|(#else)|(#elif)|(#endif)|(#ifndef)|(#if)/;
    function f(p27) {
      if (p27.processor && p27.processor.initializeShaders) {
        p27.processor.initializeShaders(p27.processingContext);
      }
    }
    function f2(p28, p29, p30, p31) {
      var v34;
      if ((v34 = p29.processor) !== null && v34 !== undefined && v34.preProcessShaderCode) {
        p28 = p29.processor.preProcessShaderCode(p28, p29.isFragment);
      }
      f10(p28, p29, p32 => {
        if (p29.processCodeAfterIncludes) {
          p32 = p29.processCodeAfterIncludes(p29.isFragment ? "fragment" : "vertex", p32, p29.defines);
        }
        const vF5 = function (p33, p34, p35) {
          let vF6 = function (p36, p37) {
            var v35;
            if ((v35 = p37.processor) !== null && v35 !== undefined && v35.noPrecision) {
              return p36;
            }
            const v36 = p37.shouldUseHighPrecisionShader;
            if (p36.indexOf("precision highp float") === -1) {
              p36 = v36 ? "precision highp float;\n" + p36 : "precision mediump float;\n" + p36;
            } else if (!v36) {
              p36 = p36.replace("precision highp float", "precision mediump float");
            }
            return p36;
          }(p33, p34);
          if (!p34.processor) {
            return vF6;
          }
          if (p34.processor.shaderLanguage === 0 && vF6.indexOf("#version 3") !== -1 && (vF6 = vF6.replace("#version 300 es", ""), !p34.processor.parseGLES3)) {
            return vF6;
          }
          const v37 = p34.defines;
          const vEC = f9(p34, p35);
          if (p34.processor.preProcessor) {
            vF6 = p34.processor.preProcessor(vF6, v37, vEC, p34.isFragment, p34.processingContext);
          }
          const vO = {};
          vF6 = f8(vF6, vEC, p34, vO);
          if (p34.processor.postProcessor) {
            vF6 = p34.processor.postProcessor(vF6, v37, p34.isFragment, p34.processingContext, p35 ? {
              drawBuffersExtensionDisabled: !p35.getCaps().drawBuffersExtension
            } : {}, vEC, vO);
          }
          if (p35 !== null && p35 !== undefined && p35._features.needShaderCodeInlining) {
            vF6 = p35.inlineShaderCode(vF6);
          }
          return vF6;
        }(p32, p29, p31);
        p30(vF5, p32);
      });
    }
    function f3(p38, p39, p40) {
      if (p40.processor && p40.processor.finalizeShaders) {
        return p40.processor.finalizeShaders(p38, p39, p40.processingContext);
      } else {
        return {
          vertexCode: p38,
          fragmentCode: p39
        };
      }
    }
    function f4(p41) {
      const v38 = /defined\((.+)\)/.exec(p41);
      if (v38 && v38.length) {
        return new C6(v38[1].trim(), p41[0] === "!");
      }
      const vA4 = ["==", "!=", ">=", "<=", "<", ">"];
      let vLS3 = "";
      let vLN05 = 0;
      for (vLS3 of vA4) {
        vLN05 = p41.indexOf(vLS3);
        if (vLN05 > -1) {
          break;
        }
      }
      if (vLN05 === -1) {
        return new C6(p41);
      }
      const v39 = p41.substring(0, vLN05).trim();
      const v40 = p41.substring(vLN05 + vLS3.length).trim();
      return new C9(v39, vLS3, v40);
    }
    function f5(p42, p43) {
      const v41 = new C4();
      const v42 = p42.substring(0, p43);
      let v43 = p42.substring(p43);
      v43 = v43.substring(0, (v43.indexOf("//") + 1 || v43.length + 1) - 1).trim();
      v41.testExpression = v42 === "#ifdef" ? new C6(v43) : v42 === "#ifndef" ? new C6(v43, true) : function (p44) {
        p44 = p44.replace(v27, "defined[$1]");
        const v44 = C5.infixToPostfix(p44);
        const vA5 = [];
        for (const v45 of v44) {
          if (v45 !== "||" && v45 !== "&&") {
            vA5.push(v45);
          } else if (vA5.length >= 2) {
            let v46 = vA5[vA5.length - 1];
            let v47 = vA5[vA5.length - 2];
            vA5.length -= 2;
            const v48 = v45 == "&&" ? new C8() : new C7();
            if (typeof v46 === "string") {
              v46 = v46.replace(v28, "defined($1)");
            }
            if (typeof v47 === "string") {
              v47 = v47.replace(v28, "defined($1)");
            }
            v48.leftOperand = typeof v47 === "string" ? f4(v47) : v47;
            v48.rightOperand = typeof v46 === "string" ? f4(v46) : v46;
            vA5.push(v48);
          }
        }
        let v49 = vA5[vA5.length - 1];
        if (typeof v49 === "string") {
          v49 = v49.replace(v28, "defined($1)");
        }
        if (typeof v49 === "string") {
          return f4(v49);
        } else {
          return v49;
        }
      }(v43);
      return v41;
    }
    function f6(p45, p46, p47, p48) {
      let v50 = p45.currentLine;
      while (f7(p45, p47, p48)) {
        v50 = p45.currentLine;
        const v51 = v50.substring(0, 5).toLowerCase();
        if (v51 === "#else") {
          const v52 = new C();
          p46.children.push(v52);
          f7(p45, v52, p48);
          return;
        }
        if (v51 === "#elif") {
          const vF52 = f5(v50, 5);
          p46.children.push(vF52);
          p47 = vF52;
        }
      }
    }
    function f7(p49, p50, p51) {
      while (p49.canRead) {
        p49.lineIndex++;
        const v53 = p49.currentLine;
        if (v53.indexOf("#") >= 0) {
          const v54 = v33.exec(v53);
          if (v54 && v54.length) {
            switch (v54[0]) {
              case "#ifdef":
                {
                  const v55 = new C3();
                  p50.children.push(v55);
                  const vF53 = f5(v53, 6);
                  v55.children.push(vF53);
                  f6(p49, v55, vF53, p51);
                  break;
                }
              case "#else":
              case "#elif":
                return true;
              case "#endif":
                return false;
              case "#ifndef":
                {
                  const v56 = new C3();
                  p50.children.push(v56);
                  const vF54 = f5(v53, 7);
                  v56.children.push(vF54);
                  f6(p49, v56, vF54, p51);
                  break;
                }
              case "#if":
                {
                  const v57 = new C3();
                  const vF55 = f5(v53, 3);
                  p50.children.push(v57);
                  v57.children.push(vF55);
                  f6(p49, v57, vF55, p51);
                  break;
                }
            }
            continue;
          }
        }
        const v58 = new C();
        v58.line = v53;
        p50.children.push(v58);
        if (v53[0] === "#" && v53[1] === "d") {
          const v59 = v53.replace(";", "").split(" ");
          v58.additionalDefineKey = v59[1];
          if (v59.length === 3) {
            v58.additionalDefineValue = v59[2];
          }
        }
      }
      return false;
    }
    function f8(p52, p53, p54, p55) {
      const v60 = new C();
      const v61 = new C2();
      v61.lineIndex = -1;
      v61.lines = p52.split("\n");
      f7(v61, v60, p55);
      return v60.process(p53, p54, p55);
    }
    function f9(p56, p57) {
      const v62 = p56.defines;
      const vO2 = {};
      for (const v63 of v62) {
        const v64 = v63.replace("#define", "").replace(";", "").trim().split(" ");
        vO2[v64[0]] = v64.length > 1 ? v64[1] : "";
      }
      if (p56.processor?.shaderLanguage === 0) {
        vO2.GL_ES = "true";
      }
      vO2.__VERSION__ = p56.version;
      vO2[p56.platformName] = "true";
      (0, vP32.e)(vO2, p57?.isNDCHalfZRange, p57?.GI, p57?.useExactSrgbConversions);
      return vO2;
    }
    function f10(p58, p59, p60) {
      let v65;
      for (vA3.length = 0; (v65 = v29.exec(p58)) !== null;) {
        vA3.push(v65);
      }
      let vString = String(p58);
      let vA6 = [p58];
      let v66 = false;
      for (const v67 of vA3) {
        let v68 = v67[1];
        if (v68.indexOf("__decl__") !== -1) {
          v68 = v68.replace(v30, "");
          if (p59.supportsUniformBuffers) {
            v68 = v68.replace("Vertex", "Ubo").replace("Fragment", "Ubo");
          }
          v68 += "Declaration";
        }
        if (!p59.includesShadersStore[v68]) {
          const v69 = p59.shadersRepository + "ShadersInclude/" + v68 + ".fx";
          vO3.loadFile(v69, p61 => {
            p59.includesShadersStore[v68] = p61;
            f10(vA6.join(""), p59, p60);
          });
          return;
        }
        {
          let v70 = p59.includesShadersStore[v68];
          if (v67[2]) {
            const v71 = v67[3].split(",");
            for (let vLN06 = 0; vLN06 < v71.length; vLN06 += 2) {
              const v72 = new RegExp(v71[vLN06], "g");
              const v73 = v71[vLN06 + 1];
              v70 = v70.replace(v72, v73);
            }
          }
          if (v67[4]) {
            const v74 = v67[5];
            if (v74.indexOf("..") !== -1) {
              const v75 = v74.split("..");
              const vParseInt3 = parseInt(v75[0]);
              let vParseInt4 = parseInt(v75[1]);
              let v76 = v70.slice(0);
              v70 = "";
              if (isNaN(vParseInt4)) {
                vParseInt4 = p59.indexParameters[v75[1]];
              }
              for (let vVParseInt3 = vParseInt3; vVParseInt3 < vParseInt4; vVParseInt3++) {
                if (!p59.supportsUniformBuffers) {
                  v76 = v76.replace(v31, (p62, p63) => p63 + "{X}");
                }
                v70 += v76.replace(v32, vVParseInt3.toString()) + "\n";
              }
            } else {
              if (!p59.supportsUniformBuffers) {
                v70 = v70.replace(v31, (p64, p65) => p65 + "{X}");
              }
              v70 = v70.replace(v32, v74);
            }
          }
          const vA7 = [];
          for (const v77 of vA6) {
            const v78 = v77.split(v67[0]);
            for (let vLN07 = 0; vLN07 < v78.length - 1; vLN07++) {
              vA7.push(v78[vLN07]);
              vA7.push(v70);
            }
            vA7.push(v78[v78.length - 1]);
          }
          vA6 = vA7;
          v66 = v66 || v70.indexOf("#include<") >= 0 || v70.indexOf("#include <") >= 0;
        }
      }
      vA3.length = 0;
      vString = vA6.join("");
      if (v66) {
        f10(vString.toString(), p59, p60);
      } else {
        p60(vString);
      }
    }
    const vO3 = {
      loadFile: (p66, p67, p68, p69, p70, p71) => {
        throw (0, vP3.c)("FileTools");
      }
    };
  },
  16864: (p72, p73, p74) => {
    p74.d(p73, {
      b: () => vO4,
      c: () => f11,
      e: () => f13,
      f: () => AC,
      i: () => f14
    });
    var vP74 = p74(16829);
    p74(16805);
    const vO4 = {};
    function f11(p75, p76) {
      return (arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "") + (p76 ? p76 + "\n" : "") + p75;
    }
    function AC(p77, p78, p79, p80, p81, p82, p83) {
      const v79 = p83 || vO4.loadFile;
      if (v79) {
        return v79(p77, p78, p79, p80, p81, p82);
      }
      throw (0, vP74.c)("FileTools");
    }
    function f13(p84, p85, p86, p87) {
      if (p84) {
        if (p85) {
          p84.IS_NDC_HALF_ZRANGE = "";
        } else {
          delete p84.IS_NDC_HALF_ZRANGE;
        }
        if (p86) {
          p84.USE_REVERSE_DEPTHBUFFER = "";
        } else {
          delete p84.USE_REVERSE_DEPTHBUFFER;
        }
        if (p87) {
          p84.USE_EXACT_SRGB_CONVERSIONS = "";
        } else {
          delete p84.USE_EXACT_SRGB_CONVERSIONS;
        }
        return;
      }
      {
        let vLS4 = "";
        if (p85) {
          vLS4 += "#define IS_NDC_HALF_ZRANGE";
        }
        if (p86) {
          if (vLS4) {
            vLS4 += "\n";
          }
          vLS4 += "#define USE_REVERSE_DEPTHBUFFER";
        }
        if (p87) {
          if (vLS4) {
            vLS4 += "\n";
          }
          vLS4 += "#define USE_EXACT_SRGB_CONVERSIONS";
        }
        return vLS4;
      }
    }
    function f14(p88, p89, IC = false, fC) {
      switch (p88) {
        case 3:
          {
            ArrayBuffer;
            const v80 = new Int8Array(p89);
            if (fC) {
              v80.set(new Int8Array(vP74));
            }
            return v80;
          }
        case 0:
          {
            ArrayBuffer;
            const v81 = new Uint8Array(p89);
            if (fC) {
              v81.set(new Uint8Array(vP74));
            }
            return v81;
          }
        case 4:
          {
            const v82 = p89 instanceof ArrayBuffer ? new Int16Array(p89) : new Int16Array(IC ? p89 / 2 : p89);
            if (fC) {
              v82.set(new Int16Array(vP74));
            }
            return v82;
          }
        case 5:
        case 8:
        case 9:
        case 10:
        case 2:
          {
            const v83 = p89 instanceof ArrayBuffer ? new Uint16Array(p89) : new Uint16Array(IC ? p89 / 2 : p89);
            if (fC) {
              v83.set(new Uint16Array(vP74));
            }
            return v83;
          }
        case 6:
          {
            const v84 = p89 instanceof ArrayBuffer ? new Int32Array(p89) : new Int32Array(IC ? p89 / 4 : p89);
            if (fC) {
              v84.set(new Int32Array(vP74));
            }
            return v84;
          }
        case 7:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
          {
            const v85 = p89 instanceof ArrayBuffer ? new Uint32Array(p89) : new Uint32Array(IC ? p89 / 4 : p89);
            if (fC) {
              v85.set(new Uint32Array(vP74));
            }
            return v85;
          }
        case 1:
          {
            const v86 = p89 instanceof ArrayBuffer ? new Float32Array(p89) : new Float32Array(IC ? p89 / 4 : p89);
            if (fC) {
              v86.set(new Float32Array(vP74));
            }
            return v86;
          }
      }
      ArrayBuffer;
      const v87 = new Uint8Array(p89);
      if (fC) {
        v87.set(new Uint8Array(vP74));
      }
      return v87;
    }
  },
  16885: (p90, p91, p92) => {
    p92.d(p91, {
      d: () => C10
    });
    class C10 {
      static GetShadersRepository() {
        if ((arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0) === 0) {
          return C10.ShadersRepository;
        } else {
          return C10.ShadersRepositoryWGSL;
        }
      }
      static GetShadersStore() {
        if ((arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0) === 0) {
          return C10.ShadersStore;
        } else {
          return C10.ShadersStoreWGSL;
        }
      }
      static GetIncludesShadersStore() {
        if ((arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0) === 0) {
          return C10.IncludesShadersStore;
        } else {
          return C10.IncludesShadersStoreWGSL;
        }
      }
    }
    C10.ShadersRepository = "src/Shaders/";
    C10.ShadersStore = {};
    C10.IncludesShadersStore = {};
    C10.ShadersRepositoryWGSL = "src/ShadersWGSL/";
    C10.ShadersStoreWGSL = {};
    C10.IncludesShadersStoreWGSL = {};
  },
  16899: (p93, p94, p95) => {
    p95.d(p94, {
      d: () => f20,
      f: () => f27,
      i: () => f22,
      l: () => f21,
      o: () => eC,
      p: () => f26,
      s: () => f19,
      t: () => f17,
      u: () => LC,
      y: () => f16,
      B: () => f15
    });
    class C11 {
      constructor() {
        this._valueCache = {};
        this.vertexCompilationError = null;
        this.fragmentCompilationError = null;
        this.programLinkError = null;
        this.programValidationError = null;
        this._isDisposed = false;
      }
      get isAsync() {
        return this.isParallelCompiled;
      }
      get isReady() {
        return !!this.program && (!this.isParallelCompiled || this.Jy._isRenderingStateCompiled(this));
      }
      _handlesSpectorRebuildCallback(p96) {
        if (p96 && this.program) {
          p96(this.program);
        }
      }
      setEngine(p97) {
        this.Jy = p97;
      }
      _fillEffectInformation(p98, p99, p100, p101, p102, p103, p104, p105) {
        const v88 = this.Jy;
        if (v88.supportsUniformBuffers) {
          for (const v89 in p99) {
            p98.bindUniformBlock(v89, p99[v89]);
          }
        }
        let v90;
        this.Jy.getUniforms(this, p100).forEach((p106, p107) => {
          p101[p100[p107]] = p106;
        });
        this._uniforms = p101;
        v90 = 0;
        for (; v90 < p102.length; v90++) {
          if (p98.getUniform(p102[v90]) == null) {
            p102.splice(v90, 1);
            v90--;
          }
        }
        p102.forEach((p108, p109) => {
          p103[p108] = p109;
        });
        for (const v91 of v88.getAttributes(this, p104)) {
          p105.push(v91);
        }
      }
      dispose() {
        this._uniforms = {};
        this._isDisposed = true;
      }
      _cacheMatrix(p110, p111) {
        const v92 = this._valueCache[p110];
        const v93 = p111.updateFlag;
        return (v92 === undefined || v92 !== v93) && (this._valueCache[p110] = v93, true);
      }
      _cacheFloat2(p112, p113, p114) {
        let v94 = this._valueCache[p112];
        if (!v94 || v94.length !== 2) {
          v94 = [p113, p114];
          this._valueCache[p112] = v94;
          return true;
        }
        let v95 = false;
        if (v94[0] !== p113) {
          v94[0] = p113;
          v95 = true;
        }
        if (v94[1] !== p114) {
          v94[1] = p114;
          v95 = true;
        }
        return v95;
      }
      _cacheFloat3(p115, p116, p117, p118) {
        let v96 = this._valueCache[p115];
        if (!v96 || v96.length !== 3) {
          v96 = [p116, p117, p118];
          this._valueCache[p115] = v96;
          return true;
        }
        let v97 = false;
        if (v96[0] !== p116) {
          v96[0] = p116;
          v97 = true;
        }
        if (v96[1] !== p117) {
          v96[1] = p117;
          v97 = true;
        }
        if (v96[2] !== p118) {
          v96[2] = p118;
          v97 = true;
        }
        return v97;
      }
      _cacheFloat4(p119, p120, p121, p122, p123) {
        let v98 = this._valueCache[p119];
        if (!v98 || v98.length !== 4) {
          v98 = [p120, p121, p122, p123];
          this._valueCache[p119] = v98;
          return true;
        }
        let v99 = false;
        if (v98[0] !== p120) {
          v98[0] = p120;
          v99 = true;
        }
        if (v98[1] !== p121) {
          v98[1] = p121;
          v99 = true;
        }
        if (v98[2] !== p122) {
          v98[2] = p122;
          v99 = true;
        }
        if (v98[3] !== p123) {
          v98[3] = p123;
          v99 = true;
        }
        return v99;
      }
      setInt(p124, p125) {
        const v100 = this._valueCache[p124];
        if (v100 === undefined || v100 !== p125) {
          if (this.Jy.setInt(this._uniforms[p124], p125)) {
            this._valueCache[p124] = p125;
          }
        }
      }
      setInt2(p126, p127, p128) {
        if (this._cacheFloat2(p126, p127, p128)) {
          if (!this.Jy.setInt2(this._uniforms[p126], p127, p128)) {
            this._valueCache[p126] = null;
          }
        }
      }
      setInt3(p129, p130, p131, p132) {
        if (this._cacheFloat3(p129, p130, p131, p132)) {
          if (!this.Jy.setInt3(this._uniforms[p129], p130, p131, p132)) {
            this._valueCache[p129] = null;
          }
        }
      }
      setInt4(p133, p134, p135, p136, p137) {
        if (this._cacheFloat4(p133, p134, p135, p136, p137)) {
          if (!this.Jy.setInt4(this._uniforms[p133], p134, p135, p136, p137)) {
            this._valueCache[p133] = null;
          }
        }
      }
      setIntArray(p138, p139) {
        this._valueCache[p138] = null;
        this.Jy.setIntArray(this._uniforms[p138], p139);
      }
      setIntArray2(p140, p141) {
        this._valueCache[p140] = null;
        this.Jy.setIntArray2(this._uniforms[p140], p141);
      }
      setIntArray3(p142, p143) {
        this._valueCache[p142] = null;
        this.Jy.setIntArray3(this._uniforms[p142], p143);
      }
      setIntArray4(p144, p145) {
        this._valueCache[p144] = null;
        this.Jy.setIntArray4(this._uniforms[p144], p145);
      }
      setUInt(p146, p147) {
        const v101 = this._valueCache[p146];
        if (v101 === undefined || v101 !== p147) {
          if (this.Jy.setUInt(this._uniforms[p146], p147)) {
            this._valueCache[p146] = p147;
          }
        }
      }
      setUInt2(p148, p149, p150) {
        if (this._cacheFloat2(p148, p149, p150)) {
          if (!this.Jy.setUInt2(this._uniforms[p148], p149, p150)) {
            this._valueCache[p148] = null;
          }
        }
      }
      setUInt3(p151, p152, p153, p154) {
        if (this._cacheFloat3(p151, p152, p153, p154)) {
          if (!this.Jy.setUInt3(this._uniforms[p151], p152, p153, p154)) {
            this._valueCache[p151] = null;
          }
        }
      }
      setUInt4(p155, p156, p157, p158, p159) {
        if (this._cacheFloat4(p155, p156, p157, p158, p159)) {
          if (!this.Jy.setUInt4(this._uniforms[p155], p156, p157, p158, p159)) {
            this._valueCache[p155] = null;
          }
        }
      }
      setUIntArray(p160, p161) {
        this._valueCache[p160] = null;
        this.Jy.setUIntArray(this._uniforms[p160], p161);
      }
      setUIntArray2(p162, p163) {
        this._valueCache[p162] = null;
        this.Jy.setUIntArray2(this._uniforms[p162], p163);
      }
      setUIntArray3(p164, p165) {
        this._valueCache[p164] = null;
        this.Jy.setUIntArray3(this._uniforms[p164], p165);
      }
      setUIntArray4(p166, p167) {
        this._valueCache[p166] = null;
        this.Jy.setUIntArray4(this._uniforms[p166], p167);
      }
      setArray(p168, p169) {
        this._valueCache[p168] = null;
        this.Jy.setArray(this._uniforms[p168], p169);
      }
      setArray2(p170, p171) {
        this._valueCache[p170] = null;
        this.Jy.setArray2(this._uniforms[p170], p171);
      }
      setArray3(p172, p173) {
        this._valueCache[p172] = null;
        this.Jy.setArray3(this._uniforms[p172], p173);
      }
      setArray4(p174, p175) {
        this._valueCache[p174] = null;
        this.Jy.setArray4(this._uniforms[p174], p175);
      }
      setMatrices(p176, p177) {
        if (p177) {
          this._valueCache[p176] = null;
          this.Jy.setMatrices(this._uniforms[p176], p177);
        }
      }
      setMatrix(p178, p179) {
        if (this._cacheMatrix(p178, p179)) {
          if (!this.Jy.setMatrices(this._uniforms[p178], p179.cf())) {
            this._valueCache[p178] = null;
          }
        }
      }
      setMatrix3x3(p180, p181) {
        this._valueCache[p180] = null;
        this.Jy.setMatrix3x3(this._uniforms[p180], p181);
      }
      setMatrix2x2(p182, p183) {
        this._valueCache[p182] = null;
        this.Jy.setMatrix2x2(this._uniforms[p182], p183);
      }
      setFloat(p184, p185) {
        const v102 = this._valueCache[p184];
        if (v102 === undefined || v102 !== p185) {
          if (this.Jy.setFloat(this._uniforms[p184], p185)) {
            this._valueCache[p184] = p185;
          }
        }
      }
      setVector2(p186, p187) {
        if (this._cacheFloat2(p186, p187.x, p187.y)) {
          if (!this.Jy.setFloat2(this._uniforms[p186], p187.x, p187.y)) {
            this._valueCache[p186] = null;
          }
        }
      }
      setFloat2(p188, p189, p190) {
        if (this._cacheFloat2(p188, p189, p190)) {
          if (!this.Jy.setFloat2(this._uniforms[p188], p189, p190)) {
            this._valueCache[p188] = null;
          }
        }
      }
      setVector3(p191, p192) {
        if (this._cacheFloat3(p191, p192.x, p192.y, p192.z)) {
          if (!this.Jy.setFloat3(this._uniforms[p191], p192.x, p192.y, p192.z)) {
            this._valueCache[p191] = null;
          }
        }
      }
      setFloat3(p193, p194, p195, p196) {
        if (this._cacheFloat3(p193, p194, p195, p196)) {
          if (!this.Jy.setFloat3(this._uniforms[p193], p194, p195, p196)) {
            this._valueCache[p193] = null;
          }
        }
      }
      setVector4(p197, p198) {
        if (this._cacheFloat4(p197, p198.x, p198.y, p198.z, p198.w)) {
          if (!this.Jy.setFloat4(this._uniforms[p197], p198.x, p198.y, p198.z, p198.w)) {
            this._valueCache[p197] = null;
          }
        }
      }
      setQuaternion(p199, p200) {
        if (this._cacheFloat4(p199, p200.x, p200.y, p200.z, p200.w)) {
          if (!this.Jy.setFloat4(this._uniforms[p199], p200.x, p200.y, p200.z, p200.w)) {
            this._valueCache[p199] = null;
          }
        }
      }
      setFloat4(p201, p202, p203, p204, p205) {
        if (this._cacheFloat4(p201, p202, p203, p204, p205)) {
          if (!this.Jy.setFloat4(this._uniforms[p201], p202, p203, p204, p205)) {
            this._valueCache[p201] = null;
          }
        }
      }
      setColor3(p206, p207) {
        if (this._cacheFloat3(p206, p207.r, p207.g, p207.b)) {
          if (!this.Jy.setFloat3(this._uniforms[p206], p207.r, p207.g, p207.b)) {
            this._valueCache[p206] = null;
          }
        }
      }
      setColor4(p208, p209, p210) {
        if (this._cacheFloat4(p208, p209.r, p209.g, p209.b, p210)) {
          if (!this.Jy.setFloat4(this._uniforms[p208], p209.r, p209.g, p209.b, p210)) {
            this._valueCache[p208] = null;
          }
        }
      }
      setDirectColor4(p211, p212) {
        if (this._cacheFloat4(p211, p212.r, p212.g, p212.b, p212.a)) {
          if (!this.Jy.setFloat4(this._uniforms[p211], p212.r, p212.g, p212.b, p212.a)) {
            this._valueCache[p211] = null;
          }
        }
      }
      _getVertexShaderCode() {
        if (this.vertexShader) {
          return this.Jy._getShaderSource(this.vertexShader);
        } else {
          return null;
        }
      }
      _getFragmentShaderCode() {
        if (this.fragmentShader) {
          return this.Jy._getShaderSource(this.fragmentShader);
        } else {
          return null;
        }
      }
    }
    var vP95 = p95(16864);
    const v103 = new WeakMap();
    const vO5 = {
      _webGLVersion: 2,
      cachedPipelines: {}
    };
    function f15(p213) {
      let v104 = v103.get(p213);
      if (!v104) {
        if (!p213) {
          return vO5;
        }
        v104 = {
          _webGLVersion: p213.TEXTURE_BINDING_3D ? 2 : 1,
          _context: p213,
          parallelShaderCompile: p213.getExtension("KHR_parallel_shader_compile") || undefined,
          cachedPipelines: {}
        };
        v103.set(p213, v104);
      }
      return v104;
    }
    function f16(p214) {
      v103.delete(p214);
    }
    function f17(p215, p216, p217, p218, p219, p220) {
      const vF15 = f15(p218);
      p220 ||= vF15._createShaderProgramInjection ?? f20;
      return p220(p215, f25(p216, "vertex", p218, vF15._contextWasLost), f25(p217, "fragment", p218, vF15._contextWasLost), p218, p219, vF15.validateShaderPrograms);
    }
    function LC(p221, p222, p223, p224, p225, gC = null, AC) {
      const vF152 = f15(p225);
      AC ||= vF152._createShaderProgramInjection ?? f20;
      const v105 = vF152._webGLVersion > 1 ? "#version 300 es\n#define WEBGL2 \n" : "";
      return AC(p221, f24(p222, "vertex", p224, v105, p225, vF152._contextWasLost), f24(p223, "fragment", p224, v105, p225, vF152._contextWasLost), p225, gC, vF152.validateShaderPrograms);
    }
    function f19(p226, p227) {
      const v106 = new C11();
      const vF153 = f15(p226);
      if (vF153.parallelShaderCompile && !vF153.disableParallelShaderCompile) {
        v106.isParallelCompiled = true;
      }
      v106.context = vF153._context;
      return v106;
    }
    function f20(p228, p229, p230, p231, _param, ky) {
      const v107 = p231.createProgram();
      p228.program = v107;
      if (!v107) {
        throw new Error("Unable to create program");
      }
      p231.attachShader(v107, p229);
      p231.attachShader(v107, p230);
      p231.linkProgram(v107);
      p228.context = p231;
      p228.vertexShader = p229;
      p228.fragmentShader = p230;
      if (!p228.isParallelCompiled) {
        f22(p228, p231, vP95);
      }
      return v107;
    }
    function f21(p232, p233, p234) {
      const vP232 = p232;
      if (vP232._isDisposed) {
        return false;
      }
      const vF154 = f15(p233);
      return !!vF154 && !!vF154.parallelShaderCompile && !!vF154.parallelShaderCompile.COMPLETION_STATUS_KHR && !!vP232.program && !!p233.getProgramParameter(vP232.program, vF154.parallelShaderCompile.COMPLETION_STATUS_KHR) && (f22(vP232, p233, p234), true);
    }
    function f22(p235, p236, p237) {
      const v108 = p235.context;
      const v109 = p235.vertexShader;
      const v110 = p235.fragmentShader;
      const v111 = p235.program;
      if (!v108.getProgramParameter(v111, v108.LINK_STATUS)) {
        if (!p236.getShaderParameter(v109, p236.COMPILE_STATUS)) {
          const v112 = p236.getShaderInfoLog(v109);
          if (v112) {
            p235.vertexCompilationError = v112;
            throw new Error("VERTEX SHADER " + v112);
          }
        }
        if (!p236.getShaderParameter(v110, p236.COMPILE_STATUS)) {
          const v113 = p236.getShaderInfoLog(v110);
          if (v113) {
            p235.fragmentCompilationError = v113;
            throw new Error("FRAGMENT SHADER " + v113);
          }
        }
        const v114 = v108.getProgramInfoLog(v111);
        if (v114) {
          p235.programLinkError = v114;
          throw new Error(v114);
        }
      }
      if (p237) {
        v108.validateProgram(v111);
        if (!v108.getProgramParameter(v111, v108.VALIDATE_STATUS)) {
          const v115 = v108.getProgramInfoLog(v111);
          if (v115) {
            p235.programValidationError = v115;
            throw new Error(v115);
          }
        }
      }
      v108.deleteShader(v109);
      v108.deleteShader(v110);
      p235.vertexShader = undefined;
      p235.fragmentShader = undefined;
      if (p235.onCompiled) {
        p235.onCompiled();
        p235.onCompiled = undefined;
      }
    }
    function eC(p238, p239, p240, p241, p242, p243, p244, p245, p246, _param2, bC, rC, GC) {
      const vF155 = f15(p238.context);
      rC ||= vF155.createRawShaderProgramInjection ?? f17;
      GC ||= vF155.createShaderProgramInjection ?? LC;
      const vP238 = p238;
      vP238.program = p241 ? rC(vP238, p239, p240, vP238.context, p246) : GC(vP238, p239, p240, p245, vP238.context, p246);
      vP238.program.__SPECTOR_rebuildProgram = p244;
      bC();
    }
    function f24(p247, p248, p249, p250, p251, p252) {
      return f25((0, vP95.c)(p247, p249, p250), p248, p251, p252);
    }
    function f25(p253, p254, p255, p256) {
      const v116 = p255.createShader(p254 === "vertex" ? p255.VERTEX_SHADER : p255.FRAGMENT_SHADER);
      if (!v116) {
        let v117 = p255.NO_ERROR;
        let v118 = p255.NO_ERROR;
        while ((v118 = p255.getError()) !== p255.NO_ERROR) {
          v117 = v118;
        }
        throw new Error(`Something went wrong while creating a gl ${p254} shader object. gl error=${v117}, gl isContextLost=${p255.isContextLost()}, _contextWasLost=${p256}`);
      }
      p255.shaderSource(v116, p253);
      p255.compileShader(v116);
      return v116;
    }
    function f26(p257, p258) {
      p258.useProgram(p257);
    }
    function f27(p259, p260) {
      const vP259 = p259;
      if (!vP259.isParallelCompiled) {
        p260(p259);
        return;
      }
      const v119 = vP259.onCompiled;
      vP259.onCompiled = () => {
        if (v119 !== null && v119 !== undefined) {
          v119();
        }
        p260(p259);
      };
    }
  },
  16893: (p261, p262, p263) => {
    p263.d(p262, {
      b: () => YC,
      d: () => vF9,
      h: () => f28,
      j: () => f29
    });
    var vP263 = p263(16805);
    var vP2632 = p263(16899);
    var vP2633 = p263(16885);
    var vP2634 = p263(16811);
    var vP2635 = p263(16859);
    var vP2636 = p263(16864);
    function f28(p264, p265) {
      return (0, vP2632.B)(p265).cachedPipelines[p264];
    }
    function f29(p266) {
      const v120 = p266._name;
      const v121 = p266.context;
      if (v120 && v121) {
        const v122 = (0, vP2632.B)(v121);
        const v123 = v122.cachedPipelines[v120];
        if (v123 !== null && v123 !== undefined) {
          v123.dispose();
        }
        delete v122.cachedPipelines[v120];
      }
    }
    function YC(p267, p268, p269, p270, p271, p272, p273) {
      let v124;
      let v125;
      const v126 = (0, vP263.k)() ? p272 === null || p272 === undefined ? undefined : p272.getHostDocument() : null;
      v124 = typeof p268 === "string" ? p268 : p268.vertexSource ? "source:" + p268.vertexSource : p268.vertexElement ? (v126 === null || v126 === undefined ? undefined : v126.getElementById(p268.vertexElement)) || p268.vertexElement : p268.vertex || p268;
      v125 = typeof p268 === "string" ? p268 : p268.fragmentSource ? "source:" + p268.fragmentSource : p268.fragmentElement ? (v126 === null || v126 === undefined ? undefined : v126.getElementById(p268.fragmentElement)) || p268.fragmentElement : p268.fragment || p268;
      const vA8 = [undefined, undefined];
      const vF7 = () => {
        if (vA8[0] && vA8[1]) {
          p267.isFragment = true;
          const [v127, v128] = vA8;
          (0, vP2635.l)(v128, p267, (p274, p275) => {
            if (p273) {
              p273._fragmentSourceCodeBeforeMigration = p275;
            }
            if (p269) {
              p274 = p269("fragment", p274);
            }
            const v129 = (0, vP2635.b)(v127, p274, p267);
            p267 = null;
            const vF8 = function (p276, p277, p278, p279) {
              if (p278) {
                return {
                  vertexSourceCode: (p279 === 1 ? "//" : "") + "#define SHADER_NAME vertex:" + (p278.vertexElement || p278.vertex || p278.spectorName || p278) + "\n" + p276,
                  fragmentSourceCode: (p279 === 1 ? "//" : "") + "#define SHADER_NAME fragment:" + (p278.fragmentElement || p278.fragment || p278.spectorName || p278) + "\n" + p277
                };
              }
              return {
                vertexSourceCode: p276,
                fragmentSourceCode: p277
              };
            }(v129.vertexCode, v129.fragmentCode, p268, p271);
            if (p270 !== null && p270 !== undefined) {
              p270(vF8.vertexSourceCode, vF8.fragmentSourceCode);
            }
          }, p272);
        }
      };
      f31(v124, "Vertex", "", p280 => {
        (0, vP2635.f)(p267);
        (0, vP2635.l)(p280, p267, (p281, p282) => {
          if (p273) {
            p273._rawVertexSourceCode = p280;
            p273._vertexSourceCodeBeforeMigration = p282;
          }
          if (p269) {
            p281 = p269("vertex", p281);
          }
          vA8[0] = p281;
          vF7();
        }, p272);
      }, p271);
      f31(v125, "Fragment", "Pixel", p283 => {
        if (p273) {
          p273._rawFragmentSourceCode = p283;
        }
        vA8[1] = p283;
        vF7();
      }, p271);
    }
    function f31(p284, p285, p286, p287, p288, p289) {
      if (typeof HTMLElement !== "undefined" && p284 instanceof HTMLElement) {
        p287((0, vP263.b)(p284));
        return;
      }
      if (p284.substring(0, 7) === "source:") {
        p287(p284.substring(7));
        return;
      }
      if (p284.substring(0, 7) === "base64:") {
        p287(window.atob(p284.substring(7)));
        return;
      }
      const v130 = vP2633.d.GetShadersStore(p288);
      if (v130[p284 + p285 + "Shader"]) {
        p287(v130[p284 + p285 + "Shader"]);
        return;
      }
      if (p286 && v130[p284 + p286 + "Shader"]) {
        p287(v130[p284 + p286 + "Shader"]);
        return;
      }
      let v131;
      v131 = p284[0] === "." || p284[0] === "/" || p284.indexOf("http") > -1 ? p284 : vP2633.d.GetShadersRepository(p288) + p284;
      if (!(p289 = p289 || vP2636.f)) {
        throw new Error("loadFileInjection is not defined");
      }
      p289(v131 + "." + p285.toLowerCase() + ".fx", p287);
    }
    const vF9 = (p290, p291, p292, p293) => {
      try {
        const v132 = p290.context ? (0, vP2632.B)(p290.context) : null;
        if (v132) {
          v132.disableParallelShaderCompile = p290.disableParallelCompilation;
        }
        const v133 = p290.existingPipelineContext || p291(p290.shaderProcessingContext);
        v133._name = p290.name;
        if (p290.name && v132) {
          v132.cachedPipelines[p290.name] = v133;
        }
        p292(v133, p290.vertex, p290.fragment, !!p290.createAsRaw, "", "", p290.rebuildRebind, p290.defines, p290.transformFeedbackVaryings, "", () => {
          p293(v133, () => {
            var v134;
            if ((v134 = p290.onRenderingStateCompiled) !== null && v134 !== undefined) {
              v134.call(p290, v133);
            }
          });
        });
        return v133;
      } catch (e3) {
        vP2634.e.Error("Error compiling effect");
        throw e3;
      }
    };
  },
  16878: (p294, p295, p296) => {
    p296.r(p295);
    p296.d(p295, {
      Effect: () => C12
    });
    var vP296 = p296(16796);
    var vP2962 = p296(16811);
    var vP2963 = p296(16885);
    var vP2964 = p296(16893);
    var vP2965 = p296(16872);
    class C12 {
      static get ShadersRepository() {
        return vP2963.d.ShadersRepository;
      }
      static set ShadersRepository(p297) {
        vP2963.d.ShadersRepository = p297;
      }
      get AC() {
        return this._isDisposed;
      }
      get onBindObservable() {
        this._onBindObservable ||= new vP296.e();
        return this._onBindObservable;
      }
      get shaderLanguage() {
        return this._shaderLanguage;
      }
      constructor(p298, p299, p300, ky = null, gC, my = null, iy = null, LC = null, YC = null, bC, rC = "", GC = 0, eC) {
        this.defines = "";
        this.onCompiled = null;
        this.onError = null;
        this.onBind = null;
        this.uniqueId = 0;
        this.onCompileObservable = new vP296.e();
        this.onErrorObservable = new vP296.e();
        this._onBindObservable = null;
        this._isDisposed = false;
        this._refCount = 1;
        this._bonesComputationForcedToCPU = false;
        this._uniformBuffersNames = {};
        this._multiTarget = false;
        this._samplers = {};
        this._isReady = false;
        this._compilationError = "";
        this._allFallbacksProcessed = false;
        this._uniforms = {};
        this._key = "";
        this._fallbacks = null;
        this._vertexSourceCodeOverride = "";
        this._fragmentSourceCodeOverride = "";
        this._transformFeedbackVaryings = null;
        this._disableParallelShaderCompilation = false;
        this._pipelineContext = null;
        this._vertexSourceCode = "";
        this._fragmentSourceCode = "";
        this._vertexSourceCodeBeforeMigration = "";
        this._fragmentSourceCodeBeforeMigration = "";
        this._rawVertexSourceCode = "";
        this._rawFragmentSourceCode = "";
        this._processCodeAfterIncludes = undefined;
        this._processFinalCode = null;
        this.name = p298;
        this._key = rC;
        const v135 = this._key.replace(/\r/g, "").replace(/\n/g, "|");
        let v136;
        if (p299.attributes) {
          const vP299 = p299;
          this._engine = p300;
          this._attributesNames = vP299.attributes;
          this._uniformsNames = vP299.uniformsNames.concat(vP299.samplers);
          this._samplerList = vP299.samplers.slice();
          this.defines = vP299.defines;
          this.onError = vP299.onError;
          this.onCompiled = vP299.onCompiled;
          this._fallbacks = vP299.fallbacks;
          this._indexParameters = vP299.indexParameters;
          this._transformFeedbackVaryings = vP299.transformFeedbackVaryings || null;
          this._multiTarget = !!vP299.multiTarget;
          this._shaderLanguage = vP299.shaderLanguage ?? 0;
          this._disableParallelShaderCompilation = !!vP299.disableParallelShaderCompilation;
          if (vP299.uniformBuffersNames) {
            this._uniformBuffersNamesList = vP299.uniformBuffersNames.slice();
            for (let vLN08 = 0; vLN08 < vP299.uniformBuffersNames.length; vLN08++) {
              this._uniformBuffersNames[vP299.uniformBuffersNames[vLN08]] = vLN08;
            }
          }
          this._processFinalCode = vP299.processFinalCode ?? null;
          this._processCodeAfterIncludes = vP299.processCodeAfterIncludes ?? undefined;
          eC = vP299.extraInitializationsAsync;
          v136 = vP299.existingPipelineContext;
        } else {
          this._engine = gC;
          this.defines = my == null ? "" : my;
          this._uniformsNames = p300.concat(ky);
          this._samplerList = ky ? ky.slice() : [];
          this._attributesNames = p299;
          this._uniformBuffersNamesList = [];
          this._shaderLanguage = GC;
          this.onError = YC;
          this.onCompiled = LC;
          this._indexParameters = bC;
          this._fallbacks = iy;
        }
        if (this._engine.shaderPlatformName === "WEBGL2") {
          v136 = (0, vP2964.h)(v135, this._engine._gl) ?? v136;
        }
        this._attributeLocationByName = {};
        this.uniqueId = C12._UniqueIdSeed++;
        if (v136) {
          this._pipelineContext = v136;
          this._pipelineContext.setEngine(this._engine);
          this._onRenderingStateCompiled(this._pipelineContext);
          if (this._pipelineContext.program) {
            this._pipelineContext.program.__SPECTOR_rebuildProgram = this._rebuildProgram.bind(this);
          }
        } else {
          this._processShaderCodeAsync(null, false, null, eC);
        }
        this._engine.onReleaseEffectsObservable.addOnce(() => {
          if (!this.AC) {
            this.dispose(true);
          }
        });
      }
      async _processShaderCodeAsync(CC = null, yC = false, IC = null, fC) {
        if (fC) {
          await vP296();
        }
        this._processingContext = IC || this._engine._getShaderProcessingContext(this._shaderLanguage, false);
        const vO6 = {
          defines: this.defines.split("\n"),
          indexParameters: this._indexParameters,
          isFragment: false,
          shouldUseHighPrecisionShader: this._engine._shouldUseHighPrecisionShader,
          processor: CC ?? this._engine._getShaderProcessor(this._shaderLanguage),
          supportsUniformBuffers: this._engine.supportsUniformBuffers,
          shadersRepository: vP2963.d.GetShadersRepository(this._shaderLanguage),
          includesShadersStore: vP2963.d.GetIncludesShadersStore(this._shaderLanguage),
          version: (this._engine.version * 100).toString(),
          platformName: this._engine.shaderPlatformName,
          processingContext: this._processingContext,
          isNDCHalfZRange: this._engine.isNDCHalfZRange,
          GI: this._engine.GI,
          processCodeAfterIncludes: this._processCodeAfterIncludes
        };
        (0, vP2964.b)(vO6, this.name, this._processFinalCode, (p301, p302) => {
          this._vertexSourceCode = p301;
          this._fragmentSourceCode = p302;
          this._prepareEffect(yC);
        }, this._shaderLanguage, this._engine, this);
      }
      get key() {
        return this._key;
      }
      isReady() {
        try {
          return this._isReadyInternal();
        } catch (e4) {
          return false;
        }
      }
      _isReadyInternal() {
        return !!this._engine.AC || !!this._isReady || !!this._pipelineContext && this._pipelineContext.isReady;
      }
      getEngine() {
        return this._engine;
      }
      getPipelineContext() {
        return this._pipelineContext;
      }
      getAttributesNames() {
        return this._attributesNames;
      }
      getAttributeLocation(p303) {
        return this._attributes[p303];
      }
      getAttributeLocationByName(p304) {
        return this._attributeLocationByName[p304];
      }
      getAttributesCount() {
        return this._attributes.length;
      }
      getUniformIndex(p305) {
        return this._uniformsNames.indexOf(p305);
      }
      getUniform(p306) {
        return this._uniforms[p306];
      }
      getSamplers() {
        return this._samplerList;
      }
      getUniformNames() {
        return this._uniformsNames;
      }
      getUniformBuffersNames() {
        return this._uniformBuffersNamesList;
      }
      getIndexParameters() {
        return this._indexParameters;
      }
      getCompilationError() {
        return this._compilationError;
      }
      allFallbacksProcessed() {
        return this._allFallbacksProcessed;
      }
      async whenCompiledAsync() {
        return await new Promise(p307 => {
          this.executeWhenCompiled(p307);
        });
      }
      executeWhenCompiled(p308) {
        if (this.isReady()) {
          p308(this);
        } else {
          this.onCompileObservable.add(p309 => {
            p308(p309);
          });
          if (!this._pipelineContext || !!this._pipelineContext.isAsync) {
            this._checkIsReady(null);
          }
        }
      }
      _checkIsReady(p310) {
        (0, vP2965.f)(() => this._isReadyInternal() || this._isDisposed, () => {}, p311 => {
          this._processCompilationErrors(p311, p310);
        }, 16, 120000, true, ` - Effect: ${typeof this.name === "string" ? this.name : this.key}`);
      }
      get vertexSourceCode() {
        var v137;
        if (this._vertexSourceCodeOverride && this._fragmentSourceCodeOverride) {
          return this._vertexSourceCodeOverride;
        } else {
          return ((v137 = this._pipelineContext) === null || v137 === undefined ? undefined : v137._getVertexShaderCode()) ?? this._vertexSourceCode;
        }
      }
      get fragmentSourceCode() {
        var v138;
        if (this._vertexSourceCodeOverride && this._fragmentSourceCodeOverride) {
          return this._fragmentSourceCodeOverride;
        } else {
          return ((v138 = this._pipelineContext) === null || v138 === undefined ? undefined : v138._getFragmentShaderCode()) ?? this._fragmentSourceCode;
        }
      }
      get vertexSourceCodeBeforeMigration() {
        return this._vertexSourceCodeBeforeMigration;
      }
      get fragmentSourceCodeBeforeMigration() {
        return this._fragmentSourceCodeBeforeMigration;
      }
      get rawVertexSourceCode() {
        return this._rawVertexSourceCode;
      }
      get rawFragmentSourceCode() {
        return this._rawFragmentSourceCode;
      }
      getPipelineGenerationOptions() {
        return {
          platformName: this._engine.shaderPlatformName,
          shaderLanguage: this._shaderLanguage,
          shaderNameOrContent: this.name,
          key: this._key,
          defines: this.defines.split("\n"),
          addGlobalDefines: false,
          extendedProcessingOptions: {
            indexParameters: this._indexParameters,
            isNDCHalfZRange: this._engine.isNDCHalfZRange,
            GI: this._engine.GI,
            supportsUniformBuffers: this._engine.supportsUniformBuffers
          },
          extendedCreatePipelineOptions: {
            transformFeedbackVaryings: this._transformFeedbackVaryings,
            createAsRaw: !!this._vertexSourceCodeOverride && !!this._fragmentSourceCodeOverride
          }
        };
      }
      _rebuildProgram(p312, p313, p314, p315) {
        this._isReady = false;
        this._vertexSourceCodeOverride = p312;
        this._fragmentSourceCodeOverride = p313;
        this.onError = (p316, p317) => {
          if (p315) {
            p315(p317);
          }
        };
        this.onCompiled = () => {
          var v139;
          var v140;
          const v141 = this.getEngine().scenes;
          if (v141) {
            for (let vLN09 = 0; vLN09 < v141.length; vLN09++) {
              v141[vLN09].markAllMaterialsAsDirty(127);
            }
          }
          if ((v139 = (v140 = this._pipelineContext)._handlesSpectorRebuildCallback) !== null && v139 !== undefined) {
            v139.call(v140, p314);
          }
        };
        this._fallbacks = null;
        this._prepareEffect();
      }
      _onRenderingStateCompiled(p318) {
        this._pipelineContext = p318;
        this._pipelineContext.setEngine(this._engine);
        this._attributes = [];
        this._pipelineContext._fillEffectInformation(this, this._uniformBuffersNames, this._uniformsNames, this._uniforms, this._samplerList, this._samplers, this._attributesNames, this._attributes);
        if (this._attributesNames) {
          for (let vLN010 = 0; vLN010 < this._attributesNames.length; vLN010++) {
            const v142 = this._attributesNames[vLN010];
            this._attributeLocationByName[v142] = this._attributes[vLN010];
          }
        }
        this._engine.bindSamplers(this);
        this._compilationError = "";
        this._isReady = true;
        if (this.onCompiled) {
          this.onCompiled(this);
        }
        this.onCompileObservable.notifyObservers(this);
        this.onCompileObservable.clear();
        if (this._fallbacks) {
          this._fallbacks.unBindMesh();
        }
        if (C12.AutomaticallyClearCodeCache) {
          this.clearCodeCache();
        }
      }
      _prepareEffect(CC = false) {
        const v143 = this._pipelineContext;
        this._isReady = false;
        try {
          const v144 = !!this._vertexSourceCodeOverride && !!this._fragmentSourceCodeOverride;
          const v145 = v144 ? null : this.defines;
          const v146 = v144 ? this._vertexSourceCodeOverride : this._vertexSourceCode;
          const v147 = v144 ? this._fragmentSourceCodeOverride : this._fragmentSourceCode;
          const v148 = this._engine;
          this._pipelineContext = (0, vP2964.d)({
            existingPipelineContext: CC ? v143 : null,
            vertex: v146,
            fragment: v147,
            context: v148.shaderPlatformName === "WEBGL2" || v148.shaderPlatformName === "WEBGL1" ? v148._gl : undefined,
            rebuildRebind: (p319, p320, p321, p322) => this._rebuildProgram(p319, p320, p321, p322),
            defines: v145,
            transformFeedbackVaryings: this._transformFeedbackVaryings,
            name: this._key.replace(/\r/g, "").replace(/\n/g, "|"),
            createAsRaw: v144,
            disableParallelCompilation: this._disableParallelShaderCompilation,
            shaderProcessingContext: this._processingContext,
            onRenderingStateCompiled: p323 => {
              if (v143 && !CC) {
                this._engine._deletePipelineContext(v143);
              }
              if (p323) {
                this._onRenderingStateCompiled(p323);
              }
            }
          }, this._engine.createPipelineContext.bind(this._engine), this._engine._preparePipelineContextAsync.bind(this._engine), this._engine._executeWhenRenderingStateIsCompiled.bind(this._engine));
          if (this._pipelineContext.isAsync) {
            this._checkIsReady(v143);
          }
        } catch (e5) {
          this._processCompilationErrors(e5, v143);
        }
      }
      _getShaderCodeAndErrorLine(p324, p325, p326) {
        const v149 = p326 ? /FRAGMENT SHADER ERROR: 0:(\d+?):/ : /VERTEX SHADER ERROR: 0:(\d+?):/;
        let v150 = null;
        if (p325 && p324) {
          const v151 = p325.match(v149);
          if (v151 && v151.length === 2) {
            const vParseInt5 = parseInt(v151[1]);
            const v152 = p324.split("\n", -1);
            if (v152.length >= vParseInt5) {
              v150 = `Offending line [${vParseInt5}] in ${p326 ? "fragment" : "vertex"} code: ${v152[vParseInt5 - 1]}`;
            }
          }
        }
        return [p324, v150];
      }
      _processCompilationErrors(p327, yC = null) {
        this._compilationError = p327.message;
        const v153 = this._attributesNames;
        const v154 = this._fallbacks;
        vP2962.e.Error("Unable to compile effect:");
        vP2962.e.Error(`Uniforms: ${this._uniformsNames.join(" ")}`);
        vP2962.e.Error(`Attributes: ${v153.join(" ")}`);
        vP2962.e.Error("Defines:\n" + this.defines);
        if (C12.LogShaderCodeOnCompilationError) {
          var v155;
          var v156;
          let v162 = null;
          let v164 = null;
          let v163 = null;
          var v160;
          if ((v155 = this._pipelineContext) !== null && v155 !== undefined && v155._getVertexShaderCode()) {
            [v163, v162] = this._getShaderCodeAndErrorLine(this._pipelineContext._getVertexShaderCode(), this._compilationError, false);
            if (v163) {
              vP2962.e.Error("Vertex code:");
              vP2962.e.Error(v163);
            }
          }
          if ((v156 = this._pipelineContext) !== null && v156 !== undefined && v156._getFragmentShaderCode()) {
            [v163, v164] = this._getShaderCodeAndErrorLine((v160 = this._pipelineContext) === null || v160 === undefined ? undefined : v160._getFragmentShaderCode(), this._compilationError, true);
            if (v163) {
              vP2962.e.Error("Fragment code:");
              vP2962.e.Error(v163);
            }
          }
          if (v162) {
            vP2962.e.Error(v162);
          }
          if (v164) {
            vP2962.e.Error(v164);
          }
        }
        vP2962.e.Error("Error: " + this._compilationError);
        const vF10 = () => {
          if (this.onError) {
            this.onError(this, this._compilationError);
          }
          this.onErrorObservable.notifyObservers(this);
          this._engine.onEffectErrorObservable.notifyObservers({
            effect: this,
            errors: this._compilationError
          });
        };
        if (yC) {
          this._pipelineContext = p295;
          this._isReady = true;
          vF10();
        }
        if (v154) {
          this._pipelineContext = null;
          if (v154.hasMoreFallbacks) {
            this._allFallbacksProcessed = false;
            vP2962.e.Error("Trying next fallback.");
            this.defines = v154.reduce(this.defines, this);
            this._prepareEffect();
          } else {
            this._allFallbacksProcessed = true;
            vF10();
            this.onErrorObservable.clear();
            if (this._fallbacks) {
              this._fallbacks.unBindMesh();
            }
          }
        } else {
          this._allFallbacksProcessed = true;
          if (!p295) {
            vF10();
          }
        }
      }
      get isSupported() {
        return this._compilationError === "";
      }
      _bindTexture(p328, p329) {
        this._engine._bindTexture(this._samplers[p328], p329, p328);
      }
      setTexture(p330, p331) {
        this._engine.setTexture(this._samplers[p330], this._uniforms[p330], p331, p330);
      }
      setTextureArray(p332, p333) {
        const v165 = p332 + "Ex";
        if (this._samplerList.indexOf(v165 + "0") === -1) {
          const v166 = this._samplerList.indexOf(p332);
          for (let vLN1 = 1; vLN1 < p333.length; vLN1++) {
            const v167 = v165 + (vLN1 - 1).toString();
            this._samplerList.splice(v166 + vLN1, 0, v167);
          }
          let vLN011 = 0;
          for (const v168 of this._samplerList) {
            this._samplers[v168] = vLN011;
            vLN011 += 1;
          }
        }
        this._engine.setTextureArray(this._samplers[p332], this._uniforms[p332], p333, p332);
      }
      bindUniformBuffer(p334, p335) {
        const v169 = this._uniformBuffersNames[p335];
        if (v169 !== undefined && (C12._BaseCache[v169] !== p334 || !this._engine._features.useUBOBindingCache)) {
          C12._BaseCache[v169] = p334;
          this._engine.bindUniformBufferBase(p334, v169, p335);
        }
      }
      bindUniformBlock(p336, p337) {
        this._engine.bindUniformBlock(this._pipelineContext, p336, p337);
      }
      setInt(p338, p339) {
        this._pipelineContext.setInt(p338, p339);
        return this;
      }
      setInt2(p340, p341, p342) {
        this._pipelineContext.setInt2(p340, p341, p342);
        return this;
      }
      setInt3(p343, p344, p345, p346) {
        this._pipelineContext.setInt3(p343, p344, p345, p346);
        return this;
      }
      setInt4(p347, p348, p349, p350, p351) {
        this._pipelineContext.setInt4(p347, p348, p349, p350, p351);
        return this;
      }
      setIntArray(p352, p353) {
        this._pipelineContext.setIntArray(p352, p353);
        return this;
      }
      setIntArray2(p354, p355) {
        this._pipelineContext.setIntArray2(p354, p355);
        return this;
      }
      setIntArray3(p356, p357) {
        this._pipelineContext.setIntArray3(p356, p357);
        return this;
      }
      setIntArray4(p358, p359) {
        this._pipelineContext.setIntArray4(p358, p359);
        return this;
      }
      setUInt(p360, p361) {
        this._pipelineContext.setUInt(p360, p361);
        return this;
      }
      setUInt2(p362, p363, p364) {
        this._pipelineContext.setUInt2(p362, p363, p364);
        return this;
      }
      setUInt3(p365, p366, p367, p368) {
        this._pipelineContext.setUInt3(p365, p366, p367, p368);
        return this;
      }
      setUInt4(p369, p370, p371, p372, p373) {
        this._pipelineContext.setUInt4(p369, p370, p371, p372, p373);
        return this;
      }
      setUIntArray(p374, p375) {
        this._pipelineContext.setUIntArray(p374, p375);
        return this;
      }
      setUIntArray2(p376, p377) {
        this._pipelineContext.setUIntArray2(p376, p377);
        return this;
      }
      setUIntArray3(p378, p379) {
        this._pipelineContext.setUIntArray3(p378, p379);
        return this;
      }
      setUIntArray4(p380, p381) {
        this._pipelineContext.setUIntArray4(p380, p381);
        return this;
      }
      setFloatArray(p382, p383) {
        this._pipelineContext.setArray(p382, p383);
        return this;
      }
      setFloatArray2(p384, p385) {
        this._pipelineContext.setArray2(p384, p385);
        return this;
      }
      setFloatArray3(p386, p387) {
        this._pipelineContext.setArray3(p386, p387);
        return this;
      }
      setFloatArray4(p388, p389) {
        this._pipelineContext.setArray4(p388, p389);
        return this;
      }
      setArray(p390, p391) {
        this._pipelineContext.setArray(p390, p391);
        return this;
      }
      setArray2(p392, p393) {
        this._pipelineContext.setArray2(p392, p393);
        return this;
      }
      setArray3(p394, p395) {
        this._pipelineContext.setArray3(p394, p395);
        return this;
      }
      setArray4(p396, p397) {
        this._pipelineContext.setArray4(p396, p397);
        return this;
      }
      setMatrices(p398, p399) {
        this._pipelineContext.setMatrices(p398, p399);
        return this;
      }
      setMatrix(p400, p401) {
        this._pipelineContext.setMatrix(p400, p401);
        return this;
      }
      setMatrix3x3(p402, p403) {
        this._pipelineContext.setMatrix3x3(p402, p403);
        return this;
      }
      setMatrix2x2(p404, p405) {
        this._pipelineContext.setMatrix2x2(p404, p405);
        return this;
      }
      setFloat(p406, p407) {
        this._pipelineContext.setFloat(p406, p407);
        return this;
      }
      setBool(p408, p409) {
        this._pipelineContext.setInt(p408, p409 ? 1 : 0);
        return this;
      }
      setVector2(p410, p411) {
        this._pipelineContext.setVector2(p410, p411);
        return this;
      }
      setFloat2(p412, p413, p414) {
        this._pipelineContext.setFloat2(p412, p413, p414);
        return this;
      }
      setVector3(p415, p416) {
        this._pipelineContext.setVector3(p415, p416);
        return this;
      }
      setFloat3(p417, p418, p419, p420) {
        this._pipelineContext.setFloat3(p417, p418, p419, p420);
        return this;
      }
      setVector4(p421, p422) {
        this._pipelineContext.setVector4(p421, p422);
        return this;
      }
      setQuaternion(p423, p424) {
        this._pipelineContext.setQuaternion(p423, p424);
        return this;
      }
      setFloat4(p425, p426, p427, p428, p429) {
        this._pipelineContext.setFloat4(p425, p426, p427, p428, p429);
        return this;
      }
      setColor3(p430, p431) {
        this._pipelineContext.setColor3(p430, p431);
        return this;
      }
      setColor4(p432, p433, p434) {
        this._pipelineContext.setColor4(p432, p433, p434);
        return this;
      }
      setDirectColor4(p435, p436) {
        this._pipelineContext.setDirectColor4(p435, p436);
        return this;
      }
      clearCodeCache() {
        this._vertexSourceCode = "";
        this._fragmentSourceCode = "";
        this._fragmentSourceCodeBeforeMigration = "";
        this._vertexSourceCodeBeforeMigration = "";
      }
      dispose() {
        if (arguments.length > 0 && arguments[0] !== undefined && arguments[0]) {
          this._refCount = 0;
        } else {
          if (C12.PersistentMode) {
            return;
          }
          this._refCount--;
        }
        if (!(this._refCount > 0) && !this._isDisposed) {
          if (this._pipelineContext) {
            (0, vP2964.j)(this._pipelineContext);
          }
          this._engine._releaseEffect(this);
          this.clearCodeCache();
          this._isDisposed = true;
        }
      }
      static RegisterShader(p437, p438, p439, fC = 0) {
        if (p438) {
          vP2963.d.GetShadersStore(vP296)[`${p437}PixelShader`] = p438;
        }
        if (p439) {
          vP2963.d.GetShadersStore(vP296)[`${p437}VertexShader`] = p439;
        }
      }
      static ResetCache() {
        C12._BaseCache = {};
      }
    }
    C12.LogShaderCodeOnCompilationError = true;
    C12.PersistentMode = false;
    C12.AutomaticallyClearCodeCache = false;
    C12._UniqueIdSeed = 0;
    C12._BaseCache = {};
    C12.ShadersStore = vP2963.d.ShadersStore;
    C12.IncludesShadersStore = vP2963.d.IncludesShadersStore;
  },
  16829: (p440, p441, p442) => {
    p442.d(p441, {
      c: () => f32
    });
    const vO7 = {};
    function f32(p443) {
      if (!(arguments.length > 1) || arguments[1] === undefined || !arguments[1] || !vO7[p443]) {
        vO7[p443] = true;
        return `${p443} needs to be imported before as it contains a side-effect required by your code.`;
      }
    }
  },
  16805: (p444, p445, p446) => {
    function f33() {
      return typeof window !== "undefined";
    }
    function f34() {
      return typeof navigator !== "undefined";
    }
    function f35() {
      return typeof document !== "undefined";
    }
    function f36(p447) {
      let vLS5 = "";
      let v170 = p447.firstChild;
      while (v170) {
        if (v170.nodeType === 3) {
          vLS5 += v170.textContent;
        }
        v170 = v170.nextSibling;
      }
      return vLS5;
    }
    p446.d(p445, {
      b: () => f36,
      f: () => f35,
      g: () => f34,
      k: () => f33
    });
  },
  16811: (p448, p449, p450) => {
    p450.d(p449, {
      e: () => C13
    });
    class C13 {
      static _CheckLimit(p451, p452) {
        let v171 = C13._LogLimitOutputs[p451];
        if (v171) {
          v171.current++;
        } else {
          v171 = {
            limit: p452,
            current: 1
          };
          C13._LogLimitOutputs[p451] = v171;
        }
        return v171.current <= v171.limit;
      }
      static _GenerateLimitMessage(p453, yC = 1) {
        const v172 = C13._LogLimitOutputs[p453];
        if (!v172 || !C13.MessageLimitReached) {
          return;
        }
        const v173 = this._Levels[yC];
        if (v172.current === v172.limit) {
          C13[v173.name](C13.MessageLimitReached.replace(/%LIMIT%/g, "" + v172.limit).replace(/%TYPE%/g, v173.name ?? ""));
        }
      }
      static _AddLogEntry(p454) {
        C13._LogCache = p454 + C13._LogCache;
        if (C13.OnNewCacheEntry) {
          C13.OnNewCacheEntry(p454);
        }
      }
      static _FormatMessage(p455) {
        const vF11 = p456 => p456 < 10 ? "0" + p456 : "" + p456;
        const v174 = new Date();
        return "[" + vF11(v174.getHours()) + ":" + vF11(v174.getMinutes()) + ":" + vF11(v174.getSeconds()) + "]: " + p455;
      }
      static _LogDisabled(p457, p458) {}
      static _LogEnabled(CC = 1, yC, IC) {
        const v175 = Array.isArray(yC) ? yC[0] : yC;
        if (IC !== undefined && !C13._CheckLimit(v175, IC)) {
          return;
        }
        const v176 = C13._FormatMessage(v175);
        const v177 = this._Levels[CC];
        const v178 = Array.isArray(yC) ? yC.slice(1) : [];
        if (v177.logFunc) {
          v177.logFunc("BJS - " + v176, ...v178);
        }
        const v179 = `<div style='color:${v177.color}'>${v176}</div><br>`;
        C13._AddLogEntry(v179);
        C13._GenerateLimitMessage(v175, CC);
      }
      static get LogCache() {
        return C13._LogCache;
      }
      static ClearLogCache() {
        C13._LogCache = "";
        C13._LogLimitOutputs = {};
        C13.errorsCount = 0;
      }
      static set LogLevels(p459) {
        C13.Log = C13._LogDisabled;
        C13.Warn = C13._LogDisabled;
        C13.Error = C13._LogDisabled;
        const vA9 = [C13.MessageLogLevel, C13.WarningLogLevel, C13.ErrorLogLevel];
        for (const v180 of vA9) {
          if ((p459 & v180) === v180) {
            const v181 = this._Levels[v180];
            C13[v181.name] = C13._LogEnabled.bind(C13, v180);
          }
        }
      }
    }
    C13.NoneLogLevel = 0;
    C13.MessageLogLevel = 1;
    C13.WarningLogLevel = 2;
    C13.ErrorLogLevel = 4;
    C13.AllLogLevel = 7;
    C13.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.";
    C13._LogCache = "";
    C13._LogLimitOutputs = {};
    C13._Levels = [{}, {
      color: "white",
      logFunc: console.log,
      name: "Log"
    }, {
      color: "orange",
      logFunc: console.warn,
      name: "Warn"
    }, {}, {
      color: "red",
      logFunc: console.error,
      name: "Error"
    }];
    C13.errorsCount = 0;
    C13.Log = C13._LogEnabled.bind(C13, C13.MessageLogLevel);
    C13.Warn = C13._LogEnabled.bind(C13, C13.WarningLogLevel);
    C13.Error = C13._LogEnabled.bind(C13, C13.ErrorLogLevel);
  },
  16796: (p460, p461, p462) => {
    p462.d(p461, {
      e: () => C16
    });
    const v182 = typeof WeakRef !== "undefined";
    class C14 {
      constructor(p463, yC = false, IC, fC) {
        this.initialize(p463, yC, IC, fC);
      }
      initialize(p464, yC = false, IC, fC) {
        this.mask = p464;
        this.skipNextObservers = yC;
        this.target = IC;
        this.currentTarget = fC;
        return this;
      }
    }
    class C15 {
      constructor(p465, p466, IC = null) {
        this.callback = p465;
        this.mask = p466;
        this.scope = IC;
        this._willBeUnregistered = false;
        this.unregisterOnNextCall = false;
        this._remove = null;
      }
      remove(CC = false) {
        if (this._remove) {
          this._remove(p460);
        }
      }
    }
    class C16 {
      static FromPromise(p467, p468) {
        const v183 = new C16();
        p467.then(p469 => {
          v183.notifyObservers(p469);
        }).catch(p470 => {
          if (!p468) {
            throw p470;
          }
          p468.notifyObservers(p470);
        });
        return v183;
      }
      get observers() {
        return this._observers;
      }
      constructor(p471, yC = false) {
        this.notifyIfTriggered = yC;
        this._observers = new Array();
        this._numObserversMarkedAsDeleted = 0;
        this._hasNotified = false;
        this._eventState = new C14(0);
        if (p471) {
          this._onObserverAdded = p471;
        }
      }
      add(p472, _param3, yC = false, _param4, IC = false) {
        if (!p472) {
          return null;
        }
        const v184 = new C15(p472, arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1, arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null);
        v184.unregisterOnNextCall = IC;
        if (yC) {
          this._observers.unshift(v184);
        } else {
          this._observers.push(v184);
        }
        if (this._onObserverAdded) {
          this._onObserverAdded(v184);
        }
        if (this._hasNotified && this.notifyIfTriggered && this._lastNotifiedValue !== undefined) {
          this.notifyObserver(v184, this._lastNotifiedValue);
        }
        const v185 = v182 ? new WeakRef(this) : {
          deref: () => this
        };
        v184._remove = function (CC = false) {
          const v186 = v185.deref();
          if (v186) {
            if (p472) {
              v186.remove(v184);
            } else {
              v186._remove(v184);
            }
          }
        };
        return v184;
      }
      addOnce(p473) {
        return this.add(p473, undefined, undefined, undefined, true);
      }
      remove(p474) {
        if (!p474) {
          return false;
        }
        p474._remove = null;
        return this._observers.indexOf(p474) !== -1 && (this._deferUnregister(p474), true);
      }
      removeCallback(p475, p476) {
        for (let vLN012 = 0; vLN012 < this._observers.length; vLN012++) {
          const v187 = this._observers[vLN012];
          if (!v187._willBeUnregistered && v187.callback === p475 && (!p476 || p476 === v187.scope)) {
            this._deferUnregister(v187);
            return true;
          }
        }
        return false;
      }
      _deferUnregister(p477) {
        if (!p477._willBeUnregistered) {
          this._numObserversMarkedAsDeleted++;
          p477.unregisterOnNextCall = false;
          p477._willBeUnregistered = true;
          setTimeout(() => {
            this._remove(p477);
          }, 0);
        }
      }
      _remove(p478) {
        let v188 = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
        if (!p478) {
          return false;
        }
        const v189 = this._observers.indexOf(p478);
        return v189 !== -1 && (v188 && this._numObserversMarkedAsDeleted--, this._observers.splice(v189, 1), true);
      }
      makeObserverTopPriority(p479) {
        this._remove(p479, false);
        this._observers.unshift(p479);
      }
      makeObserverBottomPriority(p480) {
        this._remove(p480, false);
        this._observers.push(p480);
      }
      notifyObservers(p481, yC = -1, IC, fC, ky) {
        if (this.notifyIfTriggered) {
          this._hasNotified = true;
          this._lastNotifiedValue = p481;
        }
        if (!this._observers.length) {
          return true;
        }
        const v190 = this._eventState;
        v190.mask = yC;
        v190.target = IC;
        v190.currentTarget = fC;
        v190.skipNextObservers = false;
        v190.lastReturnValue = p481;
        v190.userInfo = ky;
        for (const v191 of this._observers) {
          if (!v191._willBeUnregistered && (v191.mask & yC && (v191.unregisterOnNextCall && this._deferUnregister(v191), v191.scope ? v190.lastReturnValue = v191.callback.apply(v191.scope, [p481, v190]) : v190.lastReturnValue = v191.callback(p481, v190)), v190.skipNextObservers)) {
            return false;
          }
        }
        return true;
      }
      notifyObserver(p482, p483, IC = -1) {
        if (this.notifyIfTriggered) {
          this._hasNotified = true;
          this._lastNotifiedValue = p483;
        }
        if (p482._willBeUnregistered) {
          return;
        }
        const v192 = this._eventState;
        v192.mask = IC;
        v192.skipNextObservers = false;
        if (p482.unregisterOnNextCall) {
          this._deferUnregister(p482);
        }
        p482.callback(p483, v192);
      }
      hasObservers() {
        return this._observers.length - this._numObserversMarkedAsDeleted > 0;
      }
      clear() {
        while (this._observers.length) {
          const v193 = this._observers.pop();
          if (v193) {
            v193._remove = null;
          }
        }
        this._onObserverAdded = null;
        this._numObserversMarkedAsDeleted = 0;
        this.cleanLastNotifiedState();
      }
      cleanLastNotifiedState() {
        this._hasNotified = false;
        this._lastNotifiedValue = undefined;
      }
      clone() {
        const v194 = new C16();
        v194._observers = this._observers.slice(0);
        return v194;
      }
      hasSpecificMask(CC = -1) {
        for (const v195 of this._observers) {
          if (v195.mask & CC || v195.mask === CC) {
            return true;
          }
        }
        return false;
      }
    }
  },
  16872: (p484, p485, p486) => {
    p486.d(p485, {
      e: () => C17,
      f: () => vF12
    });
    let vA10 = [];
    class C17 {
      static SetImmediate(p487) {
        if (vA10.length === 0) {
          setTimeout(() => {
            const vVA10 = vA10;
            vA10 = [];
            for (const v196 of vVA10) {
              v196();
            }
          }, 1);
        }
        vA10.push(p487);
      }
    }
    function f37(p488, p489, p490) {
      try {
        if (p488()) {
          p489();
          return true;
        }
      } catch (e6) {
        if (p490 !== null && p490 !== undefined) {
          p490(e6);
        }
        return true;
      }
      return false;
    }
    const vF12 = function (p491, p492, p493, fC = 16, ky = 30000, _param5, AC) {
      if ((!(arguments.length > 5) || arguments[5] === undefined || arguments[5]) && f37(p491, p492, p493)) {
        return null;
      }
      const vSetInterval = setInterval(() => {
        if (f37(p491, p492, p493)) {
          clearInterval(vSetInterval);
        } else {
          C17 -= vA10;
          if (C17 < 0) {
            clearInterval(vSetInterval);
            if (p493 !== null && p493 !== undefined) {
              p493(new Error("Operation timed out after maximum retries. " + (vF12 || "")), true);
            }
          }
        }
      }, fC);
      return () => clearInterval(vSetInterval);
    };
  }
};
//# sourceMappingURL=pz8l4l.9.298097df.chunk.js.map
//# debugId=d056afc8-d2ba-5bc6-8c98-77f6e3f1584f