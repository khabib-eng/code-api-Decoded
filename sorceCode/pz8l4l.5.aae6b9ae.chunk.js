/*! For license information please see pz8l4l.5.aae6b9ae.chunk.js.LICENSE.txt */
(function () {
  try {
    var v = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : {};
    var v2 = new v.Error().stack;
    if (v2) {
      v._sentryDebugIds = v._sentryDebugIds || {};
      v._sentryDebugIds[v2] = "54d91165-3201-5f34-9c76-5842d121897c";
    }
  } catch (e2) {}
})();
export const id = 5;
export const ids = [5];
export const modules = {
  16770: (p, p2, p3) => {
    p3.d(p2, {
      C: () => f10,
      F: () => f14,
      H: () => vF7,
      K: () => vF6,
      O: () => vF8,
      R: () => f18,
      T: () => f,
      W: () => f3,
      Y: () => f9,
      ab: () => f5,
      c: () => C2,
      db: () => f6,
      f: () => C4,
      fb: () => f2,
      gb: () => f4,
      i: () => C3,
      jb: () => f13,
      kb: () => f12,
      l: () => f8,
      lb: () => f7,
      p: () => vF3,
      s: () => vF2,
      u: () => f17,
      y: () => f15
    });
    const vF = function (p4) {
      const vA = [];
      let vLN0 = 0;
      for (let vLN02 = 0; vLN02 < p4.length; vLN02++) {
        let v3 = p4.charCodeAt(vLN02);
        if (v3 < 128) {
          vA[vLN0++] = v3;
        } else if (v3 < 2048) {
          vA[vLN0++] = v3 >> 6 | 192;
          vA[vLN0++] = v3 & 63 | 128;
        } else if ((v3 & 64512) === 55296 && vLN02 + 1 < p4.length && (p4.charCodeAt(vLN02 + 1) & 64512) === 56320) {
          v3 = 65536 + ((v3 & 1023) << 10) + (p4.charCodeAt(++vLN02) & 1023);
          vA[vLN0++] = v3 >> 18 | 240;
          vA[vLN0++] = v3 >> 12 & 63 | 128;
          vA[vLN0++] = v3 >> 6 & 63 | 128;
          vA[vLN0++] = v3 & 63 | 128;
        } else {
          vA[vLN0++] = v3 >> 12 | 224;
          vA[vLN0++] = v3 >> 6 & 63 | 128;
          vA[vLN0++] = v3 & 63 | 128;
        }
      }
      return vA;
    };
    const vO = {
      byteToCharMap_: null,
      charToByteMap_: null,
      byteToCharMapWebSafe_: null,
      charToByteMapWebSafe_: null,
      ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
      get ENCODED_VALS() {
        return this.ENCODED_VALS_BASE + "+/=";
      },
      get ENCODED_VALS_WEBSAFE() {
        return this.ENCODED_VALS_BASE + "-_.";
      },
      HAS_NATIVE_SUPPORT: typeof atob === "function",
      encodeByteArray(p5, p6) {
        if (!Array.isArray(p5)) {
          throw Error("encodeByteArray takes an array as a parameter");
        }
        this.init_();
        const v4 = p6 ? this.byteToCharMapWebSafe_ : this.byteToCharMap_;
        const vA2 = [];
        for (let vLN03 = 0; vLN03 < p5.length; vLN03 += 3) {
          const v5 = p5[vLN03];
          const v6 = vLN03 + 1 < p5.length;
          const v7 = v6 ? p5[vLN03 + 1] : 0;
          const v8 = vLN03 + 2 < p5.length;
          const v9 = v8 ? p5[vLN03 + 2] : 0;
          const v10 = v5 >> 2;
          const v11 = (v5 & 3) << 4 | v7 >> 4;
          let v12 = (v7 & 15) << 2 | v9 >> 6;
          let v13 = v9 & 63;
          if (!v8) {
            v13 = 64;
            if (!v6) {
              v12 = 64;
            }
          }
          vA2.push(v4[v10], v4[v11], v4[v12], v4[v13]);
        }
        return vA2.join("");
      },
      encodeString(p7, p8) {
        if (this.HAS_NATIVE_SUPPORT && !p8) {
          return btoa(p7);
        } else {
          return this.encodeByteArray(vF(p7), p8);
        }
      },
      decodeString(p9, p10) {
        if (this.HAS_NATIVE_SUPPORT && !p10) {
          return atob(p9);
        } else {
          return function (p11) {
            const vA3 = [];
            let vLN04 = 0;
            let vLN05 = 0;
            while (vLN04 < p11.length) {
              const v14 = p11[vLN04++];
              if (v14 < 128) {
                vA3[vLN05++] = String.fromCharCode(v14);
              } else if (v14 > 191 && v14 < 224) {
                const v15 = p11[vLN04++];
                vA3[vLN05++] = String.fromCharCode((v14 & 31) << 6 | v15 & 63);
              } else if (v14 > 239 && v14 < 365) {
                const v16 = ((v14 & 7) << 18 | (p11[vLN04++] & 63) << 12 | (p11[vLN04++] & 63) << 6 | p11[vLN04++] & 63) - 65536;
                vA3[vLN05++] = String.fromCharCode(55296 + (v16 >> 10));
                vA3[vLN05++] = String.fromCharCode(56320 + (v16 & 1023));
              } else {
                const v17 = p11[vLN04++];
                const v18 = p11[vLN04++];
                vA3[vLN05++] = String.fromCharCode((v14 & 15) << 12 | (v17 & 63) << 6 | v18 & 63);
              }
            }
            return vA3.join("");
          }(this.decodeStringToByteArray(p9, p10));
        }
      },
      decodeStringToByteArray(p12, p13) {
        this.init_();
        const v19 = p13 ? this.charToByteMapWebSafe_ : this.charToByteMap_;
        const vA4 = [];
        for (let vLN06 = 0; vLN06 < p12.length;) {
          const v20 = v19[p12.charAt(vLN06++)];
          const v21 = vLN06 < p12.length ? v19[p12.charAt(vLN06)] : 0;
          ++vLN06;
          const v22 = vLN06 < p12.length ? v19[p12.charAt(vLN06)] : 64;
          ++vLN06;
          const v23 = vLN06 < p12.length ? v19[p12.charAt(vLN06)] : 64;
          ++vLN06;
          if (v20 == null || v21 == null || v22 == null || v23 == null) {
            throw new C();
          }
          const v24 = v20 << 2 | v21 >> 4;
          vA4.push(v24);
          if (v22 !== 64) {
            const v25 = v21 << 4 & 240 | v22 >> 2;
            vA4.push(v25);
            if (v23 !== 64) {
              const v26 = v22 << 6 & 192 | v23;
              vA4.push(v26);
            }
          }
        }
        return vA4;
      },
      init_() {
        if (!this.byteToCharMap_) {
          this.byteToCharMap_ = {};
          this.charToByteMap_ = {};
          this.byteToCharMapWebSafe_ = {};
          this.charToByteMapWebSafe_ = {};
          for (let vLN07 = 0; vLN07 < this.ENCODED_VALS.length; vLN07++) {
            this.byteToCharMap_[vLN07] = this.ENCODED_VALS.charAt(vLN07);
            this.charToByteMap_[this.byteToCharMap_[vLN07]] = vLN07;
            this.byteToCharMapWebSafe_[vLN07] = this.ENCODED_VALS_WEBSAFE.charAt(vLN07);
            this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[vLN07]] = vLN07;
            if (vLN07 >= this.ENCODED_VALS_BASE.length) {
              this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(vLN07)] = vLN07;
              this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(vLN07)] = vLN07;
            }
          }
        }
      }
    };
    class C extends Error {
      constructor() {
        super(...arguments);
        this.name = "DecodeBase64StringError";
      }
    }
    const vF2 = function (p14) {
      return function (p15) {
        const vVF = vF(p15);
        return vO.encodeByteArray(vVF, true);
      }(p14).replace(/\./g, "");
    };
    const vF3 = function (p16) {
      try {
        return vO.decodeString(p16, true);
      } catch (e3) {
        console.error("base64Decode failed: ", e3);
      }
      return null;
    };
    const vF4 = () => function () {
      if (typeof self !== "undefined") {
        return self;
      }
      if (typeof window !== "undefined") {
        return window;
      }
      if (typeof p3.g !== "undefined") {
        return p3.g;
      }
      throw new Error("Unable to locate global object.");
    }().__FIREBASE_DEFAULTS__;
    const vF5 = () => {
      try {
        return vF4() || (() => {
          if (typeof process === "undefined") {
            return;
          }
        })() || (() => {
          if (typeof document === "undefined") {
            return;
          }
          let v27;
          try {
            v27 = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
          } catch (e4) {
            return;
          }
          const v28 = v27 && vF3(v27[1]);
          return v28 && JSON.parse(v28);
        })();
      } catch (e5) {
        console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e5}`);
        return;
      }
    };
    const vF6 = p17 => {
      return vF5()?.emulatorHosts?.[p17];
    };
    const vF7 = () => {
      return vF5()?.config;
    };
    const vF8 = p18 => {
      return vF5()?.[`_${p18}`];
    };
    class C2 {
      constructor() {
        this.reject = () => {};
        this.resolve = () => {};
        this.promise = new Promise((p19, p20) => {
          this.resolve = p19;
          this.reject = p20;
        });
      }
      wrapCallback(p21) {
        return (p22, p23) => {
          if (p22) {
            this.reject(p22);
          } else {
            this.resolve(p23);
          }
          if (typeof p21 === "function") {
            this.promise.catch(() => {});
            if (p21.length === 1) {
              p21(p22);
            } else {
              p21(p22, p23);
            }
          }
        };
      }
    }
    function f() {
      if (typeof navigator !== "undefined" && typeof navigator.userAgent === "string") {
        return navigator.userAgent;
      } else {
        return "";
      }
    }
    function f2() {
      return typeof window !== "undefined" && (!!window.cordova || !!window.phonegap || !!window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(f());
    }
    function f3() {
      const v29 = typeof chrome === "object" ? chrome.runtime : typeof browser === "object" ? browser.runtime : undefined;
      return typeof v29 === "object" && v29.id !== undefined;
    }
    function f4() {
      return typeof navigator === "object" && navigator.product === "ReactNative";
    }
    function f5() {
      const vF9 = f();
      return vF9.indexOf("MSIE ") >= 0 || vF9.indexOf("Trident/") >= 0;
    }
    function f6() {
      try {
        return typeof indexedDB === "object";
      } catch (e6) {
        return false;
      }
    }
    function f7() {
      return new Promise((p24, p25) => {
        try {
          let v30 = true;
          const vLSValidatebrowserconte = "validate-browser-context-for-indexeddb-analytics-module";
          const v31 = self.indexedDB.open(vLSValidatebrowserconte);
          v31.onsuccess = () => {
            v31.result.close();
            if (!v30) {
              self.indexedDB.deleteDatabase(vLSValidatebrowserconte);
            }
            p24(true);
          };
          v31.onupgradeneeded = () => {
            v30 = false;
          };
          v31.onerror = () => {
            p25(v31.error?.message || "");
          };
        } catch (e7) {
          p25(e7);
        }
      });
    }
    function f8() {
      return typeof navigator !== "undefined" && !!navigator.cookieEnabled;
    }
    class C3 extends Error {
      constructor(p26, p27, p28) {
        super(p27);
        this.code = p26;
        this.customData = p28;
        this.name = "FirebaseError";
        Object.setPrototypeOf(this, C3.prototype);
        if (Error.captureStackTrace) {
          Error.captureStackTrace(this, C4.prototype.create);
        }
      }
    }
    class C4 {
      constructor(p29, p30, p31) {
        this.service = p29;
        this.serviceName = p30;
        this.errors = p31;
      }
      create(p32) {
        const v32 = (arguments.length <= 1 ? undefined : arguments[1]) || {};
        const v33 = `${this.service}/${p32}`;
        const v34 = this.errors[p32];
        const v35 = v34 ? function (p33, p34) {
          return p33.replace(v38, (p35, p36) => {
            const v36 = p34[p36];
            if (v36 != null) {
              return String(v36);
            } else {
              return `<${p36}?>`;
            }
          });
        }(v34, v32) : "Error";
        const v37 = `${this.serviceName}: ${v35} (${v33}).`;
        return new C3(v33, v37, v32);
      }
    }
    const v38 = /\{\$([^}]+)}/g;
    function f9(p37) {
      for (const v39 in p37) {
        if (Object.prototype.hasOwnProperty.call(p37, v39)) {
          return false;
        }
      }
      return true;
    }
    function f10(p38, p39) {
      if (p38 === p39) {
        return true;
      }
      const v40 = Object.keys(p38);
      const v41 = Object.keys(p39);
      for (const v42 of v40) {
        if (!v41.includes(v42)) {
          return false;
        }
        const v43 = p38[v42];
        const v44 = p39[v42];
        if (f11(v43) && f11(v44)) {
          if (!f10(v43, v44)) {
            return false;
          }
        } else if (v43 !== v44) {
          return false;
        }
      }
      for (const v45 of v41) {
        if (!v40.includes(v45)) {
          return false;
        }
      }
      return true;
    }
    function f11(p40) {
      return p40 !== null && typeof p40 === "object";
    }
    function f12(p41) {
      const vA5 = [];
      for (const [v46, v47] of Object.entries(p41)) {
        if (Array.isArray(v47)) {
          v47.forEach(p42 => {
            vA5.push(encodeURIComponent(v46) + "=" + encodeURIComponent(p42));
          });
        } else {
          vA5.push(encodeURIComponent(v46) + "=" + encodeURIComponent(v47));
        }
      }
      if (vA5.length) {
        return "&" + vA5.join("&");
      } else {
        return "";
      }
    }
    function f13(p43) {
      const vO2 = {};
      p43.replace(/^\?/, "").split("&").forEach(p44 => {
        if (p44) {
          const [v48, v49] = p44.split("=");
          vO2[decodeURIComponent(v48)] = decodeURIComponent(v49);
        }
      });
      return vO2;
    }
    function f14(p45) {
      const v50 = p45.indexOf("?");
      if (!v50) {
        return "";
      }
      const v51 = p45.indexOf("#", v50);
      return p45.substring(v50, v51 > 0 ? v51 : undefined);
    }
    function f15(p46, p47) {
      const v52 = new C5(p46, p47);
      return v52.subscribe.bind(v52);
    }
    class C5 {
      constructor(p48, p49) {
        this.observers = [];
        this.unsubscribes = [];
        this.observerCount = 0;
        this.task = Promise.resolve();
        this.finalized = false;
        this.onNoObservers = p49;
        this.task.then(() => {
          p48(this);
        }).catch(p50 => {
          this.error(p50);
        });
      }
      next(p51) {
        this.forEachObserver(p52 => {
          p52.next(p51);
        });
      }
      error(p53) {
        this.forEachObserver(p54 => {
          p54.error(p53);
        });
        this.close(p53);
      }
      complete() {
        this.forEachObserver(p55 => {
          p55.complete();
        });
        this.close();
      }
      subscribe(p56, p57, p58) {
        let v53;
        if (p56 === undefined && p57 === undefined && p58 === undefined) {
          throw new Error("Missing Observer.");
        }
        v53 = function (p59, p60) {
          if (typeof p59 !== "object" || p59 === null) {
            return false;
          }
          for (const v54 of p60) {
            if (v54 in p59 && typeof p59[v54] === "function") {
              return true;
            }
          }
          return false;
        }(p56, ["next", "error", "complete"]) ? p56 : {
          next: p56,
          error: p57,
          complete: p58
        };
        if (v53.next === undefined) {
          v53.next = f16;
        }
        if (v53.error === undefined) {
          v53.error = f16;
        }
        if (v53.complete === undefined) {
          v53.complete = f16;
        }
        const v55 = this.unsubscribeOne.bind(this, this.observers.length);
        if (this.finalized) {
          this.task.then(() => {
            try {
              if (this.finalError) {
                v53.error(this.finalError);
              } else {
                v53.complete();
              }
            } catch (e8) {}
          });
        }
        this.observers.push(v53);
        return v55;
      }
      unsubscribeOne(p61) {
        if (this.observers !== undefined && this.observers[p61] !== undefined) {
          delete this.observers[p61];
          this.observerCount -= 1;
          if (this.observerCount === 0 && this.onNoObservers !== undefined) {
            this.onNoObservers(this);
          }
        }
      }
      forEachObserver(p62) {
        if (!this.finalized) {
          for (let vLN08 = 0; vLN08 < this.observers.length; vLN08++) {
            this.sendOne(vLN08, p62);
          }
        }
      }
      sendOne(p63, p64) {
        this.task.then(() => {
          if (this.observers !== undefined && this.observers[p63] !== undefined) {
            try {
              p64(this.observers[p63]);
            } catch (e9) {
              if (typeof console !== "undefined" && console.error) {
                console.error(e9);
              }
            }
          }
        });
      }
      close(p65) {
        if (!this.finalized) {
          this.finalized = true;
          if (p65 !== undefined) {
            this.finalError = p65;
          }
          this.task.then(() => {
            this.observers = undefined;
            this.onNoObservers = undefined;
          });
        }
      }
    }
    function f16() {}
    const vLN1000 = 1000;
    const vLN2 = 2;
    const vLN14400000 = 14400000;
    const vLN052 = 0.5;
    function f17(p66, _param, yC = vLN2) {
      const v56 = (arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : vLN1000) * Math.pow(yC, p66);
      const v57 = Math.round(vLN052 * v56 * (Math.random() - 0.5) * 2);
      return Math.min(vLN14400000, v56 + v57);
    }
    function f18(p67) {
      if (p67 && p67._delegate) {
        return p67._delegate;
      } else {
        return p67;
      }
    }
  },
  16759: (p68, p69, p70) => {
    p70.d(p69, {
      c: () => vP703.i,
      g: () => vLS9230,
      h: () => vLSDEFAULT,
      k: () => f23,
      l: () => f24,
      p: () => v86,
      t: () => f28,
      u: () => v87,
      w: () => f26,
      y: () => f25,
      C: () => f27,
      G: () => f32,
      K: () => f30,
      H: () => f31,
      N: () => f29,
      R: () => f34,
      V: () => f33,
      W: () => f35
    });
    var vP70 = p70(16765);
    var vP702 = p70(16773);
    var vP703 = p70(16770);
    var vP704 = p70(18);
    let v58;
    let v59;
    const v60 = new WeakMap();
    const v61 = new WeakMap();
    const v62 = new WeakMap();
    const v63 = new WeakMap();
    const v64 = new WeakMap();
    let vO3 = {
      get(p71, p72, p73) {
        if (p71 instanceof IDBTransaction) {
          if (p72 === "done") {
            return v61.get(p71);
          }
          if (p72 === "objectStoreNames") {
            return p71.objectStoreNames || v62.get(p71);
          }
          if (p72 === "store") {
            if (p73.objectStoreNames[1]) {
              return undefined;
            } else {
              return p73.objectStore(p73.objectStoreNames[0]);
            }
          }
        }
        return f21(p71[p72]);
      },
      set: (p74, p75, p76) => {
        p74[p75] = p76;
        return true;
      },
      has: (p77, p78) => p77 instanceof IDBTransaction && (p78 === "done" || p78 === "store") || p78 in p77
    };
    function f19(p79) {
      if (p79 !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype) {
        if ((v59 ||= [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey]).includes(p79)) {
          return function () {
            for (var v65 = arguments.length, v66 = new Array(v65), vLN09 = 0; vLN09 < v65; vLN09++) {
              v66[vLN09] = arguments[vLN09];
            }
            p79.apply(vF16(this), v66);
            return f21(v60.get(this));
          };
        } else {
          return function () {
            for (var v67 = arguments.length, v68 = new Array(v67), vLN010 = 0; vLN010 < v67; vLN010++) {
              v68[vLN010] = arguments[vLN010];
            }
            return f21(p79.apply(vF16(this), v68));
          };
        }
      } else {
        return function (p80) {
          for (var v69 = arguments.length, v70 = new Array(v69 > 1 ? v69 - 1 : 0), vLN1 = 1; vLN1 < v69; vLN1++) {
            v70[vLN1 - 1] = arguments[vLN1];
          }
          const v71 = p79.call(vF16(this), p80, ...v70);
          v62.set(v71, p80.sort ? p80.sort() : [p80]);
          return f21(v71);
        };
      }
    }
    function f20(p81) {
      if (typeof p81 === "function") {
        return f19(p81);
      } else {
        if (p81 instanceof IDBTransaction) {
          (function (p82) {
            if (v61.has(p82)) {
              return;
            }
            const v72 = new Promise((p83, p84) => {
              const vF10 = () => {
                p82.removeEventListener("complete", vF11);
                p82.removeEventListener("error", vF12);
                p82.removeEventListener("abort", vF12);
              };
              const vF11 = () => {
                p83();
                vF10();
              };
              const vF12 = () => {
                p84(p82.error || new DOMException("AbortError", "AbortError"));
                vF10();
              };
              p82.addEventListener("complete", vF11);
              p82.addEventListener("error", vF12);
              p82.addEventListener("abort", vF12);
            });
            v61.set(p82, v72);
          })(p81);
        }
        v73 = p81;
        if ((v58 ||= [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction]).some(p85 => v73 instanceof p85)) {
          return new Proxy(p81, vO3);
        } else {
          return p81;
        }
      }
      var v73;
    }
    function f21(p86) {
      if (p86 instanceof IDBRequest) {
        return function (p87) {
          const v74 = new Promise((p88, p89) => {
            const vF13 = () => {
              p87.removeEventListener("success", vF14);
              p87.removeEventListener("error", vF15);
            };
            const vF14 = () => {
              p88(f21(p87.result));
              vF13();
            };
            const vF15 = () => {
              p89(p87.error);
              vF13();
            };
            p87.addEventListener("success", vF14);
            p87.addEventListener("error", vF15);
          });
          v74.then(p90 => {
            if (p90 instanceof IDBCursor) {
              v60.set(p90, p87);
            }
          }).catch(() => {});
          v64.set(v74, p87);
          return v74;
        }(p86);
      }
      if (v63.has(p86)) {
        return v63.get(p86);
      }
      const vF20 = f20(p86);
      if (vF20 !== p86) {
        v63.set(p86, vF20);
        v64.set(vF20, p86);
      }
      return vF20;
    }
    const vF16 = p91 => v64.get(p91);
    const vA6 = ["get", "getKey", "getAll", "getAllKeys", "count"];
    const vA7 = ["put", "add", "delete", "clear"];
    const v75 = new Map();
    function f22(p92, p93) {
      if (!(p92 instanceof IDBDatabase) || p93 in p92 || typeof p93 !== "string") {
        return;
      }
      if (v75.get(p93)) {
        return v75.get(p93);
      }
      const v76 = p93.replace(/FromIndex$/, "");
      const v77 = p93 !== v76;
      const v78 = vA7.includes(v76);
      if (!(v76 in (v77 ? IDBIndex : IDBObjectStore).prototype) || !v78 && !vA6.includes(v76)) {
        return;
      }
      const vF17 = async function (p94) {
        const v79 = this.transaction(p94, v78 ? "readwrite" : "readonly");
        let v80 = v79.store;
        for (var v81 = arguments.length, v82 = new Array(v81 > 1 ? v81 - 1 : 0), vLN12 = 1; vLN12 < v81; vLN12++) {
          v82[vLN12 - 1] = arguments[vLN12];
        }
        if (v77) {
          v80 = v80.index(v82.shift());
        }
        return (await Promise.all([v80[v76](...v82), v78 && v79.done]))[0];
      };
      v75.set(p93, vF17);
      return vF17;
    }
    vO3 = (p95 => (0, vP704.d)((0, vP704.d)({}, p95), {}, {
      get: (p96, p97, p98) => f22(p96, p97) || p95.get(p96, p97, p98),
      has: (p99, p100) => !!f22(p99, p100) || p95.has(p99, p100)
    }))(vO3);
    class C6 {
      constructor(p101) {
        this.container = p101;
      }
      getPlatformInfoString() {
        return this.container.getProviders().map(p102 => {
          if (function (p103) {
            const v83 = p103.getComponent();
            return v83?.type === "VERSION";
          }(p102)) {
            const v84 = p102.getImmediate();
            return `${v84.library}/${v84.version}`;
          }
          return null;
        }).filter(p104 => p104).join(" ");
      }
    }
    const vLSfirebaseapp = "@firebase/app";
    const vLS0913 = "0.9.13";
    const v85 = new vP702.g("@firebase/app");
    const vLSfirebaseappcompat = "@firebase/app-compat";
    const vLSfirebaseanalyticscom = "@firebase/analytics-compat";
    const vLSfirebaseanalytics = "@firebase/analytics";
    const vLSfirebaseappcheckcomp = "@firebase/app-check-compat";
    const vLSfirebaseappcheck = "@firebase/app-check";
    const vLSfirebaseauth = "@firebase/auth";
    const vLSfirebaseauthcompat = "@firebase/auth-compat";
    const vLSfirebasedatabase = "@firebase/database";
    const vLSfirebasedatabasecomp = "@firebase/database-compat";
    const vLSfirebasefunctions = "@firebase/functions";
    const vLSfirebasefunctionscom = "@firebase/functions-compat";
    const vLSfirebaseinstallation = "@firebase/installations";
    const vLSfirebaseinstallation2 = "@firebase/installations-compat";
    const vLSfirebasemessaging = "@firebase/messaging";
    const vLSfirebasemessagingcom = "@firebase/messaging-compat";
    const vLSfirebaseperformance = "@firebase/performance";
    const vLSfirebaseperformancec = "@firebase/performance-compat";
    const vLSfirebaseremoteconfig = "@firebase/remote-config";
    const vLSfirebaseremoteconfig2 = "@firebase/remote-config-compat";
    const vLSfirebasestorage = "@firebase/storage";
    const vLSfirebasestoragecompa = "@firebase/storage-compat";
    const vLSfirebasefirestore = "@firebase/firestore";
    const vLSfirebasefirestorecom = "@firebase/firestore-compat";
    const vLSFirebase = "firebase";
    const vLSDEFAULT = "[DEFAULT]";
    const vO4 = {
      [vLSfirebaseapp]: "fire-core",
      [vLSfirebaseappcompat]: "fire-core-compat",
      [vLSfirebaseanalytics]: "fire-analytics",
      [vLSfirebaseanalyticscom]: "fire-analytics-compat",
      [vLSfirebaseappcheck]: "fire-app-check",
      [vLSfirebaseappcheckcomp]: "fire-app-check-compat",
      [vLSfirebaseauth]: "fire-auth",
      [vLSfirebaseauthcompat]: "fire-auth-compat",
      [vLSfirebasedatabase]: "fire-rtdb",
      [vLSfirebasedatabasecomp]: "fire-rtdb-compat",
      [vLSfirebasefunctions]: "fire-fn",
      [vLSfirebasefunctionscom]: "fire-fn-compat",
      [vLSfirebaseinstallation]: "fire-iid",
      [vLSfirebaseinstallation2]: "fire-iid-compat",
      [vLSfirebasemessaging]: "fire-fcm",
      [vLSfirebasemessagingcom]: "fire-fcm-compat",
      [vLSfirebaseperformance]: "fire-perf",
      [vLSfirebaseperformancec]: "fire-perf-compat",
      [vLSfirebaseremoteconfig]: "fire-rc",
      [vLSfirebaseremoteconfig2]: "fire-rc-compat",
      [vLSfirebasestorage]: "fire-gcs",
      [vLSfirebasestoragecompa]: "fire-gcs-compat",
      [vLSfirebasefirestore]: "fire-fst",
      [vLSfirebasefirestorecom]: "fire-fst-compat",
      "fire-js": "fire-js",
      [vLSFirebase]: "fire-js-all"
    };
    const v86 = new Map();
    const v87 = new Map();
    function f23(p105, p106) {
      try {
        p105.container.RY(p106);
      } catch (e10) {
        v85.debug(`Component ${p106.name} failed to register with FirebaseApp ${p105.name}`, e10);
      }
    }
    function f24(p107, p108) {
      p107.container.addOrOverwriteComponent(p108);
    }
    function f25(p109) {
      const v88 = p109.name;
      if (v87.has(v88)) {
        v85.debug(`There were multiple attempts to register component ${v88}.`);
        return false;
      }
      v87.set(v88, p109);
      for (const v89 of v86.values()) {
        f23(v89, p109);
      }
      return true;
    }
    function f26(p110, p111) {
      const v90 = p110.container.getProvider("heartbeat").getImmediate({
        optional: true
      });
      if (v90) {
        v90.triggerHeartbeat();
      }
      return p110.container.getProvider(p111);
    }
    function f27(p112, p113, IC = vLSDEFAULT) {
      f26(p112, p113).clearInstance(IC);
    }
    function f28() {
      v87.clear();
    }
    const vO5 = {
      "no-app": "No Firebase App '{$appName}' has been created - call initializeApp() first",
      "bad-app-name": "Illegal App name: '{$appName}",
      "duplicate-app": "Firebase App named '{$appName}' already exists with different options or config",
      "app-deleted": "Firebase App named '{$appName}' already deleted",
      "no-options": "Need to provide options, when not being deployed to hosting via source.",
      "invalid-app-argument": "firebase.{$appName}() takes either no argument or a Firebase App instance.",
      "invalid-log-argument": "First argument to `onLog` must be null or a function.",
      "idb-open": "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
      "idb-get": "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
      "idb-set": "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
      "idb-delete": "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."
    };
    const v91 = new vP703.f("app", "Firebase", vO5);
    class C7 {
      constructor(p114, p115, p116) {
        this._isDeleted = false;
        this._options = Object.assign({}, p114);
        this._config = Object.assign({}, p115);
        this._name = p115.name;
        this._automaticDataCollectionEnabled = p115.automaticDataCollectionEnabled;
        this._container = p116;
        this.container.RY(new vP70.e("app", () => this, "PUBLIC"));
      }
      get automaticDataCollectionEnabled() {
        this.checkDestroyed();
        return this._automaticDataCollectionEnabled;
      }
      set automaticDataCollectionEnabled(p117) {
        this.checkDestroyed();
        this._automaticDataCollectionEnabled = p117;
      }
      get name() {
        this.checkDestroyed();
        return this._name;
      }
      get options() {
        this.checkDestroyed();
        return this._options;
      }
      get config() {
        this.checkDestroyed();
        return this._config;
      }
      get container() {
        return this._container;
      }
      get isDeleted() {
        return this._isDeleted;
      }
      set isDeleted(p118) {
        this._isDeleted = p118;
      }
      checkDestroyed() {
        if (this.isDeleted) {
          throw v91.create("app-deleted", {
            appName: this._name
          });
        }
      }
    }
    const vLS9230 = "9.23.0";
    function f29(p119, yC = {}) {
      let vP119 = p119;
      if (typeof yC !== "object") {
        yC = {
          name: yC
        };
      }
      const v92 = Object.assign({
        name: vLSDEFAULT,
        automaticDataCollectionEnabled: false
      }, yC);
      const v93 = v92.name;
      if (typeof v93 !== "string" || !v93) {
        throw v91.create("bad-app-name", {
          appName: String(v93)
        });
      }
      vP119 ||= (0, vP703.H)();
      if (!vP119) {
        throw v91.create("no-options");
      }
      const v94 = v86.get(v93);
      if (v94) {
        if ((0, vP703.C)(vP119, v94.options) && (0, vP703.C)(v92, v94.config)) {
          return v94;
        }
        throw v91.create("duplicate-app", {
          appName: v93
        });
      }
      const v95 = new vP70.b(v93);
      for (const v96 of v87.values()) {
        v95.RY(v96);
      }
      const v97 = new C7(vP119, v92, v95);
      v86.set(v93, v97);
      return v97;
    }
    function f30(CC = vLSDEFAULT) {
      const v98 = v86.get(CC);
      if (!v98 && CC === vLSDEFAULT && (0, vP703.H)()) {
        return f29();
      }
      if (!v98) {
        throw v91.create("no-app", {
          appName: CC
        });
      }
      return v98;
    }
    function f31() {
      return Array.from(v86.values());
    }
    async function f32(p120) {
      const v99 = p120.name;
      if (v86.has(v99)) {
        v86.delete(v99);
        await Promise.all(p120.container.getProviders().map(p121 => p121.delete()));
        p120.isDeleted = true;
      }
    }
    function f33(p122, p123, p124) {
      let v100 = vO4[p122] ?? p122;
      if (p124) {
        v100 += `-${p124}`;
      }
      const v101 = v100.match(/\s|\//);
      const v102 = p123.match(/\s|\//);
      if (v101 || v102) {
        const vA8 = [`Unable to register library "${v100}" with version "${p123}":`];
        if (v101) {
          vA8.push(`library name "${v100}" contains illegal characters (whitespace or "/")`);
        }
        if (v101 && v102) {
          vA8.push("and");
        }
        if (v102) {
          vA8.push(`version name "${p123}" contains illegal characters (whitespace or "/")`);
        }
        v85.warn(vA8.join(" "));
        return;
      }
      f25(new vP70.e(`${v100}-version`, () => ({
        library: v100,
        version: p123
      }), "VERSION"));
    }
    function f34(p125, p126) {
      if (p125 !== null && typeof p125 !== "function") {
        throw v91.create("invalid-log-argument");
      }
      (0, vP702.l)(p125, p126);
    }
    function f35(p127) {
      (0, vP702.h)(p127);
    }
    const vLSFirebaseheartbeatsto = "firebase-heartbeat-store";
    let v103 = null;
    function f36() {
      v103 ||= function (p128, p129, {
        blocked: IC,
        upgrade: fC,
        blocking: ky,
        terminated: gC
      } = {}) {
        const v104 = indexedDB.open(p128, p129);
        const vF21 = f21(v104);
        if (fC) {
          v104.addEventListener("upgradeneeded", p130 => {
            vP70(f21(v104.result), p130.oldVersion, p130.newVersion, f21(v104.transaction), p130);
          });
        }
        if (IC) {
          v104.addEventListener("blocked", p131 => p70(p131.oldVersion, p131.newVersion, p131));
        }
        vF21.then(p132 => {
          if (gC) {
            p132.addEventListener("close", () => vP703());
          }
          if (ky) {
            p132.addEventListener("versionchange", p133 => vP702(p133.oldVersion, p133.newVersion, p133));
          }
        }).catch(() => {});
        return vF21;
      }("firebase-heartbeat-database", 1, {
        upgrade: (p134, p135) => {
          if (p135 === 0) {
            p134.createObjectStore(vLSFirebaseheartbeatsto);
          }
        }
      }).catch(p136 => {
        throw v91.create("idb-open", {
          originalErrorMessage: p136.message
        });
      });
      return v103;
    }
    async function f37(p137, p138) {
      try {
        const v105 = (await f36()).transaction(vLSFirebaseheartbeatsto, "readwrite");
        const v106 = v105.objectStore(vLSFirebaseheartbeatsto);
        await v106.put(p138, f38(p137));
        await v105.done;
      } catch (e11) {
        if (e11 instanceof vP703.i) {
          v85.warn(e11.message);
        } else {
          const v107 = v91.create("idb-set", {
            originalErrorMessage: e11?.message
          });
          v85.warn(v107.message);
        }
      }
    }
    function f38(p139) {
      return `${p139.name}!${p139.options.appId}`;
    }
    class C8 {
      constructor(p140) {
        this.container = p140;
        this._heartbeatsCache = null;
        const v108 = this.container.getProvider("app").getImmediate();
        this.DL = new C9(v108);
        this._heartbeatsCachePromise = this.DL.read().then(p141 => {
          this._heartbeatsCache = p141;
          return p141;
        });
      }
      async triggerHeartbeat() {
        const v109 = this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString();
        const vHy = f39();
        if (this._heartbeatsCache === null) {
          this._heartbeatsCache = await this._heartbeatsCachePromise;
        }
        if (this._heartbeatsCache.lastSentHeartbeatDate !== vHy && !this._heartbeatsCache.heartbeats.some(p142 => p142.date === vHy)) {
          this._heartbeatsCache.heartbeats.push({
            date: vHy,
            agent: v109
          });
          this._heartbeatsCache.heartbeats = this._heartbeatsCache.heartbeats.filter(p143 => {
            const v110 = new Date(p143.date).valueOf();
            return Date.now() - v110 <= 2592000000;
          });
          return this.DL.overwrite(this._heartbeatsCache);
        }
      }
      async getHeartbeatsHeader() {
        if (this._heartbeatsCache === null) {
          await this._heartbeatsCachePromise;
        }
        if (this._heartbeatsCache === null || this._heartbeatsCache.heartbeats.length === 0) {
          return "";
        }
        const vHy2 = f39();
        const {
          heartbeatsToSend: p145,
          unsentEntries: IC
        } = function (p144, yC = 1024) {
          const vA9 = [];
          let v111 = p144.slice();
          for (const v112 of p144) {
            const v113 = vA9.find(p146 => p146.agent === v112.agent);
            if (v113) {
              v113.dates.push(v112.date);
              if (f40(vA9) > yC) {
                v113.dates.pop();
                break;
              }
            } else {
              vA9.push({
                agent: v112.agent,
                dates: [v112.date]
              });
              if (f40(vA9) > yC) {
                vA9.pop();
                break;
              }
            }
            v111 = v111.slice(1);
          }
          return {
            heartbeatsToSend: vA9,
            unsentEntries: v111
          };
        }(this._heartbeatsCache.heartbeats);
        const v114 = (0, vP703.s)(JSON.stringify({
          version: 2,
          heartbeats: p145
        }));
        this._heartbeatsCache.lastSentHeartbeatDate = vHy2;
        if (IC.length > 0) {
          this._heartbeatsCache.heartbeats = IC;
          await this.DL.overwrite(this._heartbeatsCache);
        } else {
          this._heartbeatsCache.heartbeats = [];
          this.DL.overwrite(this._heartbeatsCache);
        }
        return v114;
      }
    }
    function f39() {
      return new Date().toISOString().substring(0, 10);
    }
    class C9 {
      constructor(p147) {
        this.app = p147;
        this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck();
      }
      async runIndexedDBEnvironmentCheck() {
        return !!(0, vP703.db)() && (0, vP703.lb)().then(() => true).catch(() => false);
      }
      async read() {
        if (await this._canUseIndexedDBPromise) {
          return (await async function (p148) {
            try {
              const v115 = await f36();
              return await v115.transaction(vLSFirebaseheartbeatsto).objectStore(vLSFirebaseheartbeatsto).get(f38(p148));
            } catch (e12) {
              if (e12 instanceof vP703.i) {
                v85.warn(e12.message);
              } else {
                const v116 = v91.create("idb-get", {
                  originalErrorMessage: e12?.message
                });
                v85.warn(v116.message);
              }
            }
          }(this.app)) || {
            heartbeats: []
          };
        }
        return {
          heartbeats: []
        };
      }
      async overwrite(p149) {
        if (await this._canUseIndexedDBPromise) {
          const v117 = await this.read();
          return f37(this.app, {
            lastSentHeartbeatDate: p149.lastSentHeartbeatDate ?? v117.lastSentHeartbeatDate,
            heartbeats: p149.heartbeats
          });
        }
      }
      async add(p150) {
        if (await this._canUseIndexedDBPromise) {
          const v118 = await this.read();
          return f37(this.app, {
            lastSentHeartbeatDate: p150.lastSentHeartbeatDate ?? v118.lastSentHeartbeatDate,
            heartbeats: [...v118.heartbeats, ...p150.heartbeats]
          });
        }
      }
    }
    function f40(p151) {
      return (0, vP703.s)(JSON.stringify({
        version: 2,
        heartbeats: p151
      })).length;
    }
    var v119;
    v119 = "";
    f25(new vP70.e("platform-logger", p152 => new C6(p152), "PRIVATE"));
    f25(new vP70.e("heartbeat", p153 => new C8(p153), "PRIVATE"));
    f33(vLSfirebaseapp, vLS0913, v119);
    f33(vLSfirebaseapp, vLS0913, "esm2017");
    f33("fire-js", "");
  },
  16765: (p154, p155, p156) => {
    p156.d(p155, {
      b: () => C12,
      e: () => C10
    });
    var vP156 = p156(16770);
    class C10 {
      constructor(p157, p158, p159) {
        this.name = p157;
        this.instanceFactory = p158;
        this.type = p159;
        this.multipleInstances = false;
        this.serviceProps = {};
        this.instantiationMode = "LAZY";
        this.onInstanceCreated = null;
      }
      setInstantiationMode(p160) {
        this.instantiationMode = p160;
        return this;
      }
      setMultipleInstances(p161) {
        this.multipleInstances = p161;
        return this;
      }
      setServiceProps(p162) {
        this.serviceProps = p162;
        return this;
      }
      setInstanceCreatedCallback(p163) {
        this.onInstanceCreated = p163;
        return this;
      }
    }
    const vLSDEFAULT2 = "[DEFAULT]";
    class C11 {
      constructor(p164, p165) {
        this.name = p164;
        this.container = p165;
        this.component = null;
        this.instances = new Map();
        this.instancesDeferred = new Map();
        this.instancesOptions = new Map();
        this.onInitCallbacks = new Map();
      }
      get(p166) {
        const v120 = this.normalizeInstanceIdentifier(p166);
        if (!this.instancesDeferred.has(v120)) {
          const v121 = new vP156.c();
          this.instancesDeferred.set(v120, v121);
          if (this.isInitialized(v120) || this.shouldAutoInitialize()) {
            try {
              const v122 = this.getOrInitializeService({
                instanceIdentifier: v120
              });
              if (v122) {
                v121.resolve(v122);
              }
            } catch (e13) {}
          }
        }
        return this.instancesDeferred.get(v120).promise;
      }
      getImmediate(p167) {
        var v123;
        const v124 = this.normalizeInstanceIdentifier(p167?.identifier);
        const v125 = (v123 = p167?.optional) !== null && v123 !== undefined && v123;
        if (!this.isInitialized(v124) && !this.shouldAutoInitialize()) {
          if (v125) {
            return null;
          }
          throw Error(`Service ${this.name} is not available`);
        }
        try {
          return this.getOrInitializeService({
            instanceIdentifier: v124
          });
        } catch (e14) {
          if (v125) {
            return null;
          }
          throw e14;
        }
      }
      getComponent() {
        return this.component;
      }
      setComponent(p168) {
        if (p168.name !== this.name) {
          throw Error(`Mismatching Component ${p168.name} for Provider ${this.name}.`);
        }
        if (this.component) {
          throw Error(`Component for ${this.name} has already been provided`);
        }
        this.component = p168;
        if (this.shouldAutoInitialize()) {
          if (function (p169) {
            return p169.instantiationMode === "EAGER";
          }(p168)) {
            try {
              this.getOrInitializeService({
                instanceIdentifier: vLSDEFAULT2
              });
            } catch (e15) {}
          }
          for (const [v126, v127] of this.instancesDeferred.entries()) {
            const v128 = this.normalizeInstanceIdentifier(v126);
            try {
              const v129 = this.getOrInitializeService({
                instanceIdentifier: v128
              });
              v127.resolve(v129);
            } catch (e16) {}
          }
        }
      }
      clearInstance(CC = vLSDEFAULT2) {
        this.instancesDeferred.delete(CC);
        this.instancesOptions.delete(CC);
        this.instances.delete(CC);
      }
      async delete() {
        const v130 = Array.from(this.instances.values());
        await Promise.all([...v130.filter(p170 => "INTERNAL" in p170).map(p171 => p171.INTERNAL.delete()), ...v130.filter(p172 => "_delete" in p172).map(p173 => p173._delete())]);
      }
      isComponentSet() {
        return this.component != null;
      }
      isInitialized(CC = vLSDEFAULT2) {
        return this.instances.has(CC);
      }
      getOptions(CC = vLSDEFAULT2) {
        return this.instancesOptions.get(CC) || {};
      }
      initialize(CC = {}) {
        const {
          options: yC = {}
        } = CC;
        const v131 = this.normalizeInstanceIdentifier(CC.instanceIdentifier);
        if (this.isInitialized(v131)) {
          throw Error(`${this.name}(${v131}) has already been initialized`);
        }
        if (!this.isComponentSet()) {
          throw Error(`Component ${this.name} has not been registered yet`);
        }
        const v132 = this.getOrInitializeService({
          instanceIdentifier: v131,
          options: yC
        });
        for (const [v133, v134] of this.instancesDeferred.entries()) {
          if (v131 === this.normalizeInstanceIdentifier(v133)) {
            v134.resolve(v132);
          }
        }
        return v132;
      }
      ce(p174, p175) {
        const v135 = this.normalizeInstanceIdentifier(p175);
        const v136 = this.onInitCallbacks.get(v135) ?? new Set();
        v136.add(p174);
        this.onInitCallbacks.set(v135, v136);
        const v137 = this.instances.get(v135);
        if (v137) {
          p174(v137, v135);
        }
        return () => {
          v136.delete(p174);
        };
      }
      invokeOnInitCallbacks(p176, p177) {
        const v138 = this.onInitCallbacks.get(p177);
        if (v138) {
          for (const v139 of v138) {
            try {
              v139(p176, p177);
            } catch (e17) {}
          }
        }
      }
      getOrInitializeService(p178) {
        let {
          instanceIdentifier: yC,
          options: IC = {}
        } = p178;
        let v140 = this.instances.get(yC);
        if (!v140 && this.component && (v140 = this.component.instanceFactory(this.container, {
          instanceIdentifier: (v141 = yC, v141 === vLSDEFAULT2 ? undefined : v141),
          options: IC
        }), this.instances.set(yC, v140), this.instancesOptions.set(yC, IC), this.invokeOnInitCallbacks(v140, yC), this.component.onInstanceCreated)) {
          try {
            this.component.onInstanceCreated(this.container, yC, v140);
          } catch (e18) {}
        }
        var v141;
        return v140 || null;
      }
      normalizeInstanceIdentifier(CC = vLSDEFAULT2) {
        if (this.component) {
          if (this.component.multipleInstances) {
            return p154;
          } else {
            return vLSDEFAULT2;
          }
        } else {
          return p154;
        }
      }
      shouldAutoInitialize() {
        return !!this.component && this.component.instantiationMode !== "EXPLICIT";
      }
    }
    class C12 {
      constructor(p179) {
        this.name = p179;
        this.providers = new Map();
      }
      RY(p180) {
        const v142 = this.getProvider(p180.name);
        if (v142.isComponentSet()) {
          throw new Error(`Component ${p180.name} has already been registered with ${this.name}`);
        }
        v142.setComponent(p180);
      }
      addOrOverwriteComponent(p181) {
        if (this.getProvider(p181.name).isComponentSet()) {
          this.providers.delete(p181.name);
        }
        this.RY(p181);
      }
      getProvider(p182) {
        if (this.providers.has(p182)) {
          return this.providers.get(p182);
        }
        const v143 = new C11(p182, this);
        this.providers.set(p182, v143);
        return v143;
      }
      getProviders() {
        return Array.from(this.providers.values());
      }
    }
  },
  16773: (p183, p184, p185) => {
    p185.d(p184, {
      e: () => v144,
      g: () => C13,
      h: () => f41,
      l: () => f42
    });
    const vA10 = [];
    var v144;
    (function (p186) {
      p186[p186.DEBUG = 0] = "DEBUG";
      p186[p186.VERBOSE = 1] = "VERBOSE";
      p186[p186.INFO = 2] = "INFO";
      p186[p186.WARN = 3] = "WARN";
      p186[p186.ERROR = 4] = "ERROR";
      p186[p186.SILENT = 5] = "SILENT";
    })(v144 ||= {});
    const vO6 = {
      debug: v144.DEBUG,
      verbose: v144.VERBOSE,
      info: v144.INFO,
      warn: v144.WARN,
      error: v144.ERROR,
      silent: v144.SILENT
    };
    const v145 = v144.INFO;
    const vO7 = {
      [v144.DEBUG]: "log",
      [v144.VERBOSE]: "log",
      [v144.INFO]: "info",
      [v144.WARN]: "warn",
      [v144.ERROR]: "error"
    };
    const vF18 = function (p187, p188) {
      if (p188 < p187.logLevel) {
        return;
      }
      const v146 = new Date().toISOString();
      const v147 = vO7[p188];
      if (!v147) {
        throw new Error(`Attempted to log a message with an invalid logType (value: ${p188})`);
      }
      for (var v148 = arguments.length, v149 = new Array(v148 > 2 ? v148 - 2 : 0), vLN22 = 2; vLN22 < v148; vLN22++) {
        v149[vLN22 - 2] = arguments[vLN22];
      }
      console[v147](`[${v146}]  ${p187.name}:`, ...v149);
    };
    class C13 {
      constructor(p189) {
        this.name = p189;
        this._logLevel = v145;
        this._logHandler = vF18;
        this._userLogHandler = null;
        vA10.push(this);
      }
      get logLevel() {
        return this._logLevel;
      }
      set logLevel(p190) {
        if (!(p190 in v144)) {
          throw new TypeError(`Invalid value "${p190}" assigned to \`logLevel\``);
        }
        this._logLevel = p190;
      }
      setLogLevel(p191) {
        this._logLevel = typeof p191 === "string" ? vO6[p191] : p191;
      }
      get logHandler() {
        return this._logHandler;
      }
      set logHandler(p192) {
        if (typeof p192 !== "function") {
          throw new TypeError("Value assigned to `logHandler` must be a function");
        }
        this._logHandler = p192;
      }
      get userLogHandler() {
        return this._userLogHandler;
      }
      set userLogHandler(p193) {
        this._userLogHandler = p193;
      }
      debug() {
        for (var v150 = arguments.length, v151 = new Array(v150), vLN011 = 0; vLN011 < v150; vLN011++) {
          v151[vLN011] = arguments[vLN011];
        }
        if (this._userLogHandler) {
          this._userLogHandler(this, v144.DEBUG, ...v151);
        }
        this._logHandler(this, v144.DEBUG, ...v151);
      }
      log() {
        for (var v152 = arguments.length, v153 = new Array(v152), vLN012 = 0; vLN012 < v152; vLN012++) {
          v153[vLN012] = arguments[vLN012];
        }
        if (this._userLogHandler) {
          this._userLogHandler(this, v144.VERBOSE, ...v153);
        }
        this._logHandler(this, v144.VERBOSE, ...v153);
      }
      info() {
        for (var v154 = arguments.length, v155 = new Array(v154), vLN013 = 0; vLN013 < v154; vLN013++) {
          v155[vLN013] = arguments[vLN013];
        }
        if (this._userLogHandler) {
          this._userLogHandler(this, v144.INFO, ...v155);
        }
        this._logHandler(this, v144.INFO, ...v155);
      }
      warn() {
        for (var v156 = arguments.length, v157 = new Array(v156), vLN014 = 0; vLN014 < v156; vLN014++) {
          v157[vLN014] = arguments[vLN014];
        }
        if (this._userLogHandler) {
          this._userLogHandler(this, v144.WARN, ...v157);
        }
        this._logHandler(this, v144.WARN, ...v157);
      }
      error() {
        for (var v158 = arguments.length, v159 = new Array(v158), vLN015 = 0; vLN015 < v158; vLN015++) {
          v159[vLN015] = arguments[vLN015];
        }
        if (this._userLogHandler) {
          this._userLogHandler(this, v144.ERROR, ...v159);
        }
        this._logHandler(this, v144.ERROR, ...v159);
      }
    }
    function f41(p194) {
      vA10.forEach(p195 => {
        p195.setLogLevel(p194);
      });
    }
    function f42(p196, p197) {
      for (const v160 of vA10) {
        let v161 = null;
        if (p197 && p197.level) {
          v161 = vO6[p197.level];
        }
        v160.userLogHandler = p196 === null ? null : function (p198, p199) {
          for (var v162 = arguments.length, v163 = new Array(v162 > 2 ? v162 - 2 : 0), vLN23 = 2; vLN23 < v162; vLN23++) {
            v163[vLN23 - 2] = arguments[vLN23];
          }
          const v164 = v163.map(p200 => {
            if (p200 == null) {
              return null;
            }
            if (typeof p200 === "string") {
              return p200;
            }
            if (typeof p200 === "number" || typeof p200 === "boolean") {
              return p200.toString();
            }
            if (p200 instanceof Error) {
              return p200.message;
            }
            try {
              return JSON.stringify(p200);
            } catch (e19) {
              return null;
            }
          }).filter(p201 => p201).join(" ");
          if (p199 >= (v161 ?? p198.logLevel)) {
            p196({
              level: v144[p199].toLowerCase(),
              message: v164,
              args: v163,
              type: p198.name
            });
          }
        };
      }
    }
  }
};
//# sourceMappingURL=pz8l4l.5.aae6b9ae.chunk.js.map
//# debugId=54d91165-3201-5f34-9c76-5842d121897c