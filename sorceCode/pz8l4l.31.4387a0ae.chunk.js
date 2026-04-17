/*! For license information please see pz8l4l.31.4387a0ae.chunk.js.LICENSE.txt */
(function () {
  try {
    var v = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : {};
    var v2 = new v.Error().stack;
    if (v2) {
      v._sentryDebugIds = v._sentryDebugIds || {};
      v._sentryDebugIds[v2] = "248d923d-42ef-55f0-a457-f6efe7a25d43";
    }
  } catch (e2) {}
})();
export const id = 31;
export const ids = [31];
export const modules = {
  17575: function (p, p2) {
    (function (p3) {
      var vLSDndpoly = "dnd-poly-";
      var v3 = vLSDndpoly + "snapback";
      var vLSDndpoly2 = "dnd-poly-";
      var v4 = vLSDndpoly2 + "dragstart-pending";
      var v5 = vLSDndpoly2 + "dragstart-cancel";
      var vA = ["none", "Ly", "copyLink", "copyMove", "link", "linkMove", "move", "all"];
      var vF = function () {
        var v6 = false;
        try {
          var v7 = Object.defineProperty({}, "passive", {
            get: function () {
              v6 = true;
            }
          });
          window.addEventListener("test", null, v7);
        } catch (e3) {}
        return v6;
      }();
      function f(p4) {
        return p4 && p4.tagName;
      }
      function f2(p5, p6, p7 = true) {
        document.addEventListener(p5, p6, !!vF && {
          passive: p7
        });
      }
      function f3(p8, p9) {
        document.removeEventListener(p8, p9);
      }
      function f4(p10, p11, p12, p13 = false) {
        var v8 = vF ? {
          passive: true,
          capture: p13
        } : p13;
        p10.addEventListener(p11, p12, v8);
        return {
          off: function () {
            p10.removeEventListener(p11, p12, v8);
          }
        };
      }
      function f5(p14) {
        if (p14.length === 0) {
          return 0;
        } else {
          return p14.reduce(function (p15, p16) {
            return p16 + p15;
          }, 0) / p14.length;
        }
      }
      function f6(p17, p18) {
        for (var vLN0 = 0; vLN0 < p17.changedTouches.length; vLN0++) {
          if (p17.changedTouches[vLN0].identifier === p18) {
            return true;
          }
        }
        return false;
      }
      function f7(p19, p20, p21) {
        var vA2 = [];
        var vA3 = [];
        for (var vLN02 = 0; vLN02 < p20.touches.length; vLN02++) {
          var v9 = p20.touches[vLN02];
          vA2.push(v9[p19 + "X"]);
          vA3.push(v9[p19 + "Y"]);
        }
        p21.x = f5(vA2);
        p21.y = f5(vA3);
      }
      var vA4 = ["", "-webkit-"];
      function f8(p22, p23, p24, p25, p26 = true) {
        var v10 = p23.x;
        var v11 = p23.y;
        if (p25) {
          v10 += p25.x;
          v11 += p25.y;
        }
        if (p26) {
          v10 -= parseInt(p22.offsetWidth, 10) / 2;
          v11 -= parseInt(p22.offsetHeight, 10) / 2;
        }
        var v12 = "translate3d(" + v10 + "px," + v11 + "px, 0)";
        for (var vLN03 = 0; vLN03 < vA4.length; vLN03++) {
          var v13 = vA4[vLN03] + "transform";
          p22.style[v13] = v12 + " " + p24[vLN03];
        }
      }
      var vF2 = function () {
        function CC(p27, p28) {
          this.t = p27;
          this.i = p28;
          this.s = "none";
        }
        Object.defineProperty(CC.prototype, "dropEffect", {
          get: function () {
            return this.s;
          },
          set: function (p29) {
            if (this.t.mode !== 0 && vA.indexOf(p29) > -1) {
              this.s = p29;
            }
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(CC.prototype, "types", {
          get: function () {
            if (this.t.mode !== 0) {
              return Object.freeze(this.t.types);
            }
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(CC.prototype, "effectAllowed", {
          get: function () {
            return this.t.effectAllowed;
          },
          set: function (p30) {
            if (this.t.mode === 2 && vA.indexOf(p30) > -1) {
              this.t.effectAllowed = p30;
            }
          },
          enumerable: true,
          configurable: true
        });
        CC.prototype.setData = function (p31, p32) {
          if (this.t.mode === 2) {
            if (p31.indexOf(" ") > -1) {
              throw new Error("illegal arg: type contains space");
            }
            this.t.data[p31] = p32;
            if (this.t.types.indexOf(p31) === -1) {
              this.t.types.push(p31);
            }
          }
        };
        CC.prototype.getData = function (p33) {
          if (this.t.mode === 1 || this.t.mode === 2) {
            return this.t.data[p33] || "";
          }
        };
        CC.prototype.clearData = function (p34) {
          if (this.t.mode === 2) {
            if (p34 && this.t.data[p34]) {
              delete this.t.data[p34];
              var v14 = this.t.types.indexOf(p34);
              if (v14 > -1) {
                this.t.types.splice(v14, 1);
              }
              return;
            }
            this.t.data = {};
            this.t.types = [];
          }
        };
        CC.prototype.setDragImage = function (p35, p36, p37) {
          if (this.t.mode === 2) {
            this.i(p35, p36, p37);
          }
        };
        return CC;
      }();
      function f10(p38, p39) {
        if (p38) {
          if (p38 === vA[0]) {
            return "none";
          } else if (p38.indexOf(vA[1]) === 0 || p38 === vA[7]) {
            return "Ly";
          } else if (p38.indexOf(vA[4]) === 0) {
            return "link";
          } else if (p38 === vA[6]) {
            return "move";
          } else {
            return "Ly";
          }
        } else if (p39.nodeType === 3 && p39.tagName === "A") {
          return "link";
        } else {
          return "Ly";
        }
      }
      function f11(p40, p41, p42, p43, p44, p45 = true, p46 = null) {
        var vF3 = function (p47, p48, p49, p50, p51, p52, p53 = null) {
          var v15 = p48.changedTouches[0];
          var v16 = new Event(p49, {
            bubbles: true,
            cancelable: p50
          });
          v16.dataTransfer = p52;
          v16.relatedTarget = p53;
          v16.screenX = v15.screenX;
          v16.screenY = v15.screenY;
          v16.clientX = v15.clientX;
          v16.clientY = v15.clientY;
          v16.pageX = v15.pageX;
          v16.pageY = v15.pageY;
          var v17 = p47.getBoundingClientRect();
          v16.offsetX = v16.clientX - v17.left;
          v16.offsetY = v16.clientY - v17.top;
          return v16;
        }(p41, p42, p40, p45, document.defaultView, p44, p46);
        var v18 = !p41.dispatchEvent(vF3);
        p43.mode = 0;
        return v18;
      }
      function f12(p54, p55) {
        if (!p54 || p54 === vA[7]) {
          return p55;
        }
        if (p55 === "Ly") {
          if (p54.indexOf("Ly") === 0) {
            return "Ly";
          }
        } else if (p55 === "link") {
          if (p54.indexOf("link") === 0 || p54.indexOf("Link") > -1) {
            return "link";
          }
        } else if (p55 === "move" && (p54.indexOf("move") === 0 || p54.indexOf("Move") > -1)) {
          return "move";
        }
        return "none";
      }
      var v19;
      var vF4 = function () {
        function CC(p56, p57, p58, p59) {
          this.h = p56;
          this.o = p57;
          this.u = p58;
          this.l = p59;
          this.v = 0;
          this.p = null;
          this.g = null;
          this.m = p56;
          this.I = p56.changedTouches[0];
          this.j = this.C.bind(this);
          this.S = this.k.bind(this);
          f2("touchmove", this.j, false);
          f2("touchend", this.S, false);
          f2("touchcancel", this.S, false);
        }
        CC.prototype.A = function () {
          var vThis = this;
          this.v = 1;
          this.O = "none";
          this.D = {
            data: {},
            effectAllowed: undefined,
            mode: 3,
            types: []
          };
          this.M = {
            x: null,
            y: null
          };
          this.F = {
            x: null,
            y: null
          };
          var v20 = this.u;
          this.N = new vF2(this.D, function (p60, p61, p62) {
            v20 = p60;
            if (typeof p61 == "number" || typeof p62 == "number") {
              vThis.P = {
                x: p61 || 0,
                y: p62 || 0
              };
            }
          });
          this.D.mode = 2;
          this.N.dropEffect = "none";
          if (f11("dragstart", this.u, this.m, this.D, this.N)) {
            this.v = 3;
            this.T();
            return false;
          }
          f7("page", this.m, this.F);
          var v21;
          var v22 = this.o.dragImageSetup(v20);
          this.L = (v21 = v22, vA4.map(function (p63) {
            var v23 = v21.style[p63 + "transform"];
            if (v23 && v23 !== "none") {
              return v23.replace(/translate\(\D*\d+[^,]*,\D*\d+[^,]*\)\s*/g, "");
            } else {
              return "";
            }
          }));
          v22.style.position = "absolute";
          v22.style.left = "0px";
          v22.style.top = "0px";
          v22.style.zIndex = "999999";
          v22.classList.add("dnd-poly-drag-image");
          v22.classList.add("dnd-poly-icon");
          this._ = v22;
          if (!this.P) {
            if (this.o.dragImageOffset) {
              this.P = {
                x: this.o.dragImageOffset.x,
                y: this.o.dragImageOffset.y
              };
            } else if (this.o.dragImageCenterOnTouch) {
              var vGetComputedStyle = getComputedStyle(v20);
              this.P = {
                x: 0 - parseInt(vGetComputedStyle.marginLeft, 10),
                y: 0 - parseInt(vGetComputedStyle.marginTop, 10)
              };
            } else {
              var v24 = v20.getBoundingClientRect();
              vGetComputedStyle = getComputedStyle(v20);
              this.P = {
                x: v24.left - this.I.clientX - parseInt(vGetComputedStyle.marginLeft, 10) + v24.width / 2,
                y: v24.top - this.I.clientY - parseInt(vGetComputedStyle.marginTop, 10) + v24.height / 2
              };
            }
          }
          f8(this._, this.F, this.L, this.P, this.o.dragImageCenterOnTouch);
          document.body.appendChild(this._);
          this.V = window.setInterval(function () {
            if (!vThis.X) {
              vThis.X = true;
              vThis.Y();
              vThis.X = false;
            }
          }, this.o.iterationInterval);
          return true;
        };
        CC.prototype.T = function () {
          if (this.V) {
            clearInterval(this.V);
            this.V = null;
          }
          f3("touchmove", this.j);
          f3("touchend", this.S);
          f3("touchcancel", this.S);
          if (this._) {
            this._.parentNode.removeChild(this._);
            this._ = null;
          }
          this.l(this.o, this.m, this.v);
        };
        CC.prototype.C = function (p64) {
          var vThis2 = this;
          if (f6(p64, this.I.identifier) !== false) {
            this.m = p64;
            if (this.v === 0) {
              var vUndefined = undefined;
              if (this.o.dragStartConditionOverride) {
                try {
                  vUndefined = this.o.dragStartConditionOverride(p64);
                } catch (e4) {
                  vUndefined = false;
                }
              } else {
                vUndefined = p64.touches.length === 1;
              }
              if (vUndefined) {
                if (this.A() === true) {
                  this.h.preventDefault();
                  p64.preventDefault();
                }
                return;
              } else {
                this.T();
                return;
              }
            }
            p64.preventDefault();
            f7("client", p64, this.M);
            f7("page", p64, this.F);
            if (this.o.dragImageTranslateOverride) {
              try {
                var v25 = false;
                this.o.dragImageTranslateOverride(p64, {
                  x: this.M.x,
                  y: this.M.y
                }, this.p, function (p65, p66) {
                  if (vThis2._) {
                    v25 = true;
                    vThis2.M.x += p65;
                    vThis2.M.y += p66;
                    vThis2.F.x += p65;
                    vThis2.F.y += p66;
                    f8(vThis2._, vThis2.F, vThis2.L, vThis2.P, vThis2.o.dragImageCenterOnTouch);
                  }
                });
                if (v25) {
                  return;
                }
              } catch (e5) {}
            }
            f8(this._, this.F, this.L, this.P, this.o.dragImageCenterOnTouch);
          }
        };
        CC.prototype.k = function (p67) {
          if (f6(p67, this.I.identifier) !== false) {
            if (this.o.dragImageTranslateOverride) {
              try {
                this.o.dragImageTranslateOverride(undefined, undefined, undefined, function () {});
              } catch (e6) {}
            }
            if (this.v !== 0) {
              p67.preventDefault();
              this.v = p67.type === "touchcancel" ? 3 : 2;
            } else {
              this.T();
            }
          }
        };
        CC.prototype.Y = function () {
          var vThis3 = this;
          var v26 = this.O;
          this.D.mode = 3;
          this.N.dropEffect = "none";
          var vF11 = f11("drag", this.u, this.m, this.D, this.N);
          if (vF11) {
            this.O = "none";
          }
          if (vF11 || this.v === 2 || this.v === 3) {
            if (this.q(this.v)) {
              (function (p68, p69, p70, p71) {
                var vGetComputedStyle2 = getComputedStyle(p68);
                if (vGetComputedStyle2.visibility !== "hidden" && vGetComputedStyle2.display !== "none") {
                  p69.classList.add(v3);
                  var vGetComputedStyle3 = getComputedStyle(p69);
                  var vParseFloat = parseFloat(vGetComputedStyle3.transitionDuration);
                  if (isNaN(vParseFloat) || vParseFloat === 0) {
                    p71();
                  } else {
                    var v27 = p68.getBoundingClientRect();
                    var vO = {
                      x: v27.left,
                      y: v27.top
                    };
                    vO.x += document.body.scrollLeft || document.documentElement.scrollLeft;
                    vO.y += document.body.scrollTop || document.documentElement.scrollTop;
                    vO.x -= parseInt(vGetComputedStyle2.marginLeft, 10);
                    vO.y -= parseInt(vGetComputedStyle2.marginTop, 10);
                    var vParseFloat2 = parseFloat(vGetComputedStyle3.transitionDelay);
                    var v28 = Math.round((vParseFloat + vParseFloat2) * 1000);
                    f8(p69, vO, p70, undefined, false);
                    setTimeout(p71, v28);
                  }
                } else {
                  p71();
                }
              })(this.u, this._, this.L, function () {
                vThis3.B();
              });
              return;
            } else {
              this.B();
              return;
            }
          }
          var v29 = this.o.elementFromPoint(this.M.x, this.M.y);
          var v30 = this.g;
          if (v29 !== this.p && v29 !== this.g) {
            this.p = v29;
            if (this.g !== null) {
              this.D.mode = 3;
              this.N.dropEffect = "none";
              f11("dragexit", this.g, this.m, this.D, this.N, false);
            }
            if (this.p === null) {
              this.g = this.p;
            } else {
              this.D.mode = 3;
              this.N.dropEffect = f10(this.D.effectAllowed, this.u);
              if (f11("dragenter", this.p, this.m, this.D, this.N)) {
                this.g = this.p;
                this.O = f12(this.N.effectAllowed, this.N.dropEffect);
              } else if (this.p !== document.body) {
                this.g = document.body;
              }
            }
          }
          if (v30 !== this.g && f(v30)) {
            this.D.mode = 3;
            this.N.dropEffect = "none";
            f11("dragleave", v30, this.m, this.D, this.N, false, this.g);
          }
          if (f(this.g)) {
            this.D.mode = 3;
            this.N.dropEffect = f10(this.D.effectAllowed, this.u);
            if (f11("dragover", this.g, this.m, this.D, this.N) === false) {
              this.O = "none";
            } else {
              this.O = f12(this.N.effectAllowed, this.N.dropEffect);
            }
          }
          if (v26 !== this.O) {
            this._.classList.remove(vLSDndpoly + v26);
          }
          var v31 = vLSDndpoly + this.O;
          this._.classList.add(v31);
        };
        CC.prototype.q = function (p72) {
          var v32 = this.O === "none" || this.g === null || p72 === 3;
          if (v32) {
            if (f(this.g)) {
              this.D.mode = 3;
              this.N.dropEffect = "none";
              f11("dragleave", this.g, this.m, this.D, this.N, false);
            }
          } else if (f(this.g)) {
            this.D.mode = 1;
            this.N.dropEffect = this.O;
            if (f11("drop", this.g, this.m, this.D, this.N) === true) {
              this.O = this.N.dropEffect;
            } else {
              this.O = "none";
            }
          }
          return v32;
        };
        CC.prototype.B = function () {
          this.D.mode = 3;
          this.N.dropEffect = this.O;
          f11("dragend", this.u, this.m, this.D, this.N, false);
          this.v = 2;
          this.T();
        };
        return CC;
      }();
      var vO2 = {
        iterationInterval: 150,
        tryFindDraggableTarget: function (p73) {
          var v33 = p73.target;
          do {
            if (v33.draggable !== false) {
              if (v33.draggable === true) {
                return v33;
              }
              if (v33.getAttribute && v33.getAttribute("draggable") === "true") {
                return v33;
              }
            }
          } while ((v33 = v33.parentNode) && v33 !== document.body);
        },
        dragImageSetup: function (p74) {
          var v34 = p74.cloneNode(true);
          (function f14(p75, p76) {
            if (p75.nodeType === 1) {
              for (var vGetComputedStyle4 = getComputedStyle(p75), vLN04 = 0; vLN04 < vGetComputedStyle4.length; vLN04++) {
                var v35 = vGetComputedStyle4[vLN04];
                p76.style.setProperty(v35, vGetComputedStyle4.getPropertyValue(v35), vGetComputedStyle4.getPropertyPriority(v35));
              }
              p76.style.pointerEvents = "none";
              p76.removeAttribute("id");
              p76.removeAttribute("class");
              p76.removeAttribute("draggable");
              if (p76.nodeName === "CANVAS") {
                var vP75 = p75;
                var vP76 = p76;
                var v36 = vP75.getContext("2d").getImageData(0, 0, vP75.width, vP75.height);
                vP76.getContext("2d").putImageData(v36, 0, 0);
              }
            }
            if (p75.hasChildNodes()) {
              for (vLN04 = 0; vLN04 < p75.childNodes.length; vLN04++) {
                f14(p75.childNodes[vLN04], p76.childNodes[vLN04]);
              }
            }
          })(p74, v34);
          return v34;
        },
        elementFromPoint: function (p77, p78) {
          return document.elementFromPoint(p77, p78);
        }
      };
      function f15(p79) {
        if (!v19) {
          var v37 = vO2.tryFindDraggableTarget(p79);
          if (v37) {
            try {
              v19 = new vF4(p79, vO2, v37, f18);
            } catch (e7) {
              f18(vO2, p79, 3);
              throw e7;
            }
          }
        }
      }
      function f16(p80) {
        var v38 = p80.target;
        function f17(p81) {
          vF42.off();
          vF43.off();
          vF44.off();
          vF45.off();
          if (v38) {
            v38.dispatchEvent(new CustomEvent(v5, {
              bubbles: true,
              cancelable: true
            }));
          }
          clearTimeout(v39);
        }
        if (v38) {
          v38.dispatchEvent(new CustomEvent(v4, {
            bubbles: true,
            cancelable: true
          }));
        }
        var v39 = window.setTimeout(function () {
          vF42.off();
          vF43.off();
          vF44.off();
          vF45.off();
          f15(p80);
        }, vO2.holdToDrag);
        var vF42 = f4(v38, "touchend", f17);
        var vF43 = f4(v38, "touchcancel", f17);
        var vF44 = f4(v38, "touchmove", f17);
        var vF45 = f4(window, "scroll", f17, true);
      }
      function f18(p82, p83, p84) {
        if (p84 === 0 && p82.defaultActionOverride) {
          try {
            p82.defaultActionOverride(p83);
            p83.defaultPrevented;
          } catch (e8) {}
        }
        v19 = null;
      }
      p3.polyfill = function (p85) {
        if (p85) {
          Object.keys(p85).forEach(function (p86) {
            vO2[p86] = p85[p86];
          });
        }
        if (!vO2.forceApply) {
          v40 = {
            dragEvents: "ondragstart" in document.documentElement,
            draggable: "draggable" in document.documentElement,
            userAgentSupportingNativeDnD: undefined
          };
          v41 = !!window.chrome || /chrome/i.test(navigator.userAgent);
          v40.userAgentSupportingNativeDnD = !/iPad|iPhone|iPod|Android/.test(navigator.userAgent) && (!v41 || !("ontouchstart" in document.documentElement));
          var vIC = v40;
          if (vIC.userAgentSupportingNativeDnD && vIC.draggable && vIC.dragEvents) {
            return false;
          }
        }
        var v40;
        var v41;
        if (vO2.holdToDrag) {
          f2("touchstart", f16, false);
        } else {
          f2("touchstart", f15, false);
        }
        return true;
      };
      Object.defineProperty(p3, "__esModule", {
        value: true
      });
    })(p2);
  }
};
//# sourceMappingURL=pz8l4l.31.4387a0ae.chunk.js.map
//# debugId=248d923d-42ef-55f0-a457-f6efe7a25d43