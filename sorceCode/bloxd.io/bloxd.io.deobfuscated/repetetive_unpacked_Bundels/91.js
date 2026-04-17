module.exports = function CC(yC, IC, fC) {
  function ky(AC, my) {
    if (!IC[AC]) {
      if (!yC[AC]) {
        if (gC) {
          return gC(AC, !0);
        }
        var XC = new Error("Cannot find module '" + AC + "'");
        XC.code = "MODULE_NOT_FOUND";
        throw XC;
      }
      var iy = IC[AC] = {
        exports: {}
      };
      yC[AC][0].call(iy.exports, function (CC) {
        var IC = yC[AC][1][CC];
        return ky(IC || CC);
      }, iy, iy.exports, CC, yC, IC, fC);
    }
    return IC[AC].exports;
  }
  for (var gC = void 0, AC = 0; AC < fC.length; AC++) {
    ky(fC[AC]);
  }
  return ky;
}({
  1: [function (CC, yC, fC) {
    (function (CC) {
      var IC;
      var fC;
      var ky = CC.MutationObserver || CC.WebKitMutationObserver;
      if (ky) {
        var gC = 0;
        var AC = new ky(LC);
        var my = CC.document.createTextNode("");
        AC.observe(my, {
          characterData: !0
        });
        IC = function () {
          my.data = gC = ++gC % 2;
        };
      } else {
        if (CC.setImmediate || "undefined" === typeof CC.MessageChannel) {
          IC = "document" in CC && "onreadystatechange" in CC.document.createElement("script") ? function () {
            var yC = CC.document.createElement("script");
            yC.onreadystatechange = function () {
              LC();
              yC.onreadystatechange = null;
              yC.parentNode.removeChild(yC);
              yC = null;
            };
            CC.document.documentElement.appendChild(yC);
          } : function () {
            setTimeout(LC, 0);
          };
        } else {
          var XC = new CC.MessageChannel();
          XC.port1.onmessage = LC;
          IC = function () {
            XC.port2.postMessage(0);
          };
        }
      }
      var iy = [];
      function LC() {
        var CC;
        var yC;
        fC = !0;
        for (var IC = iy.length; IC;) {
          yC = iy;
          iy = [];
          CC = -1;
          for (; ++CC < IC;) {
            yC[CC]();
          }
          IC = iy.length;
        }
        fC = !1;
      }
      function YC(CC) {
        1 !== iy.push(CC) || fC || IC();
      }
      yC.exports = YC;
    }).call(this, "undefined" !== typeof require.g ? require.g : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {});
  }, {}],
  2: [function (CC, yC, IC) {
    var fC = CC(1);
    function ky() {}
    var gC = {};
    var AC = ["REJECTED"];
    var my = ["FULFILLED"];
    var XC = ["PENDING"];
    function iy(CC) {
      if ("function" !== typeof CC) {
        throw new TypeError("resolver must be a function");
      }
      this.state = XC;
      this.queue = [];
      this.outcome = void 0;
      CC !== ky && rC(this, CC);
    }
    function LC(CC, yC, IC) {
      this.promise = CC;
      "function" === typeof yC && (this.onFulfilled = yC, this.callFulfilled = this.otherCallFulfilled);
      "function" === typeof IC && (this.onRejected = IC, this.callRejected = this.otherCallRejected);
    }
    function YC(CC, yC, IC) {
      fC(function () {
        var fC;
        try {
          fC = yC(IC);
        } catch (ky) {
          return gC.reject(CC, ky);
        }
        fC === CC ? gC.reject(CC, new TypeError("Cannot resolve promise with itself")) : gC.resolve(CC, fC);
      });
    }
    function bC(CC) {
      var yC = CC && CC.then;
      if (CC && ("object" === typeof CC || "function" === typeof CC) && "function" === typeof yC) {
        return function () {
          yC.apply(CC, arguments);
        };
      }
    }
    function rC(CC, yC) {
      var IC = !1;
      function fC(yC) {
        IC || (IC = !0, gC.reject(CC, yC));
      }
      function ky(yC) {
        IC || (IC = !0, gC.resolve(CC, yC));
      }
      function AC() {
        yC(ky, fC);
      }
      var my = GC(AC);
      "error" === my.status && fC(my.value);
    }
    function GC(CC, yC) {
      var IC = {};
      try {
        IC.value = CC(yC);
        IC.status = "success";
      } catch (fC) {
        IC.status = "error";
        IC.value = fC;
      }
      return IC;
    }
    function eC(CC) {
      return CC instanceof this ? CC : gC.resolve(new this(ky), CC);
    }
    function OC(CC) {
      var yC = new this(ky);
      return gC.reject(yC, CC);
    }
    function SC(CC) {
      var yC = this;
      if ("[object Array]" !== Object.prototype.toString.call(CC)) {
        return this.reject(new TypeError("must be an array"));
      }
      var IC = CC.length;
      var fC = !1;
      if (!IC) {
        return this.resolve([]);
      }
      for (var AC = new Array(IC), my = 0, XC = -1, iy = new this(ky); ++XC < IC;) {
        LC(CC[XC], XC);
      }
      return iy;
      function LC(CC, ky) {
        function XC(CC) {
          AC[ky] = CC;
          ++my !== IC || fC || (fC = !0, gC.resolve(iy, AC));
        }
        yC.resolve(CC).then(XC, function (CC) {
          fC || (fC = !0, gC.reject(iy, CC));
        });
      }
    }
    function TC(CC) {
      var yC = this;
      if ("[object Array]" !== Object.prototype.toString.call(CC)) {
        return this.reject(new TypeError("must be an array"));
      }
      var IC = CC.length;
      var fC = !1;
      if (!IC) {
        return this.resolve([]);
      }
      for (var AC = -1, my = new this(ky); ++AC < IC;) {
        XC(CC[AC]);
      }
      return my;
      function XC(CC) {
        yC.resolve(CC).then(function (CC) {
          fC || (fC = !0, gC.resolve(my, CC));
        }, function (CC) {
          fC || (fC = !0, gC.reject(my, CC));
        });
      }
    }
    yC.exports = iy;
    iy.prototype.catch = function (CC) {
      return this.then(null, CC);
    };
    iy.prototype.then = function (CC, yC) {
      if ("function" !== typeof CC && this.state === my || "function" !== typeof yC && this.state === AC) {
        return this;
      }
      var IC = new this.constructor(ky);
      this.state !== XC ? YC(IC, this.state === my ? CC : yC, this.outcome) : this.queue.push(new LC(IC, CC, yC));
      return IC;
    };
    LC.prototype.callFulfilled = function (CC) {
      gC.resolve(this.promise, CC);
    };
    LC.prototype.otherCallFulfilled = function (CC) {
      YC(this.promise, this.onFulfilled, CC);
    };
    LC.prototype.callRejected = function (CC) {
      gC.reject(this.promise, CC);
    };
    LC.prototype.otherCallRejected = function (CC) {
      YC(this.promise, this.onRejected, CC);
    };
    gC.resolve = function (CC, yC) {
      var IC = GC(bC, yC);
      if ("error" === IC.status) {
        return gC.reject(CC, IC.value);
      }
      var fC = IC.value;
      if (fC) {
        rC(CC, fC);
      } else {
        CC.state = my;
        CC.outcome = yC;
        for (var ky = -1, AC = CC.queue.length; ++ky < AC;) {
          CC.queue[ky].callFulfilled(yC);
        }
      }
      return CC;
    };
    gC.reject = function (CC, yC) {
      CC.state = AC;
      CC.outcome = yC;
      for (var IC = -1, fC = CC.queue.length; ++IC < fC;) {
        CC.queue[IC].callRejected(yC);
      }
      return CC;
    };
    iy.resolve = eC;
    iy.reject = OC;
    iy.all = SC;
    iy.race = TC;
  }, {
    1: 1
  }],
  3: [function (CC, yC, fC) {
    (function (yC) {
      "function" !== typeof yC.Promise && (yC.Promise = CC(2));
    }).call(this, "undefined" !== typeof require.g ? require.g : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {});
  }, {
    2: 2
  }],
  4: [function (CC, yC, IC) {
    var fC = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (CC) {
      return typeof CC;
    } : function (CC) {
      return CC && "function" === typeof Symbol && CC.constructor === Symbol && CC !== Symbol.prototype ? "symbol" : typeof CC;
    };
    function ky(CC, yC) {
      if (!(CC instanceof yC)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function gC() {
      try {
        if ("undefined" !== typeof indexedDB) {
          return indexedDB;
        }
        if ("undefined" !== typeof webkitIndexedDB) {
          return webkitIndexedDB;
        }
        if ("undefined" !== typeof mozIndexedDB) {
          return mozIndexedDB;
        }
        if ("undefined" !== typeof OIndexedDB) {
          return OIndexedDB;
        }
        if ("undefined" !== typeof msIndexedDB) {
          return msIndexedDB;
        }
      } catch (CC) {
        return;
      }
    }
    var AC = gC();
    function my() {
      try {
        if (!AC || !AC.open) {
          return !1;
        }
        var CC = "undefined" !== typeof openDatabase && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform);
        var yC = "function" === typeof fetch && -1 !== fetch.toString().indexOf("[native code");
        return (!CC || yC) && "undefined" !== typeof indexedDB && "undefined" !== typeof IDBKeyRange;
      } catch (IC) {
        return !1;
      }
    }
    function XC(CC, yC) {
      CC = CC || [];
      yC = yC || {};
      try {
        return new Blob(CC, yC);
      } catch (ky) {
        if ("TypeError" !== ky.name) {
          throw ky;
        }
        for (var IC = new ("undefined" !== typeof BlobBuilder ? BlobBuilder : "undefined" !== typeof MSBlobBuilder ? MSBlobBuilder : "undefined" !== typeof MozBlobBuilder ? MozBlobBuilder : WebKitBlobBuilder)(), fC = 0; fC < CC.length; fC += 1) {
          IC.append(CC[fC]);
        }
        return IC.getBlob(yC.type);
      }
    }
    "undefined" === typeof Promise && CC(3);
    var iy = Promise;
    function LC(CC, yC) {
      yC && CC.then(function (CC) {
        yC(null, CC);
      }, function (CC) {
        yC(CC);
      });
    }
    function YC(CC, yC, IC) {
      "function" === typeof yC && CC.then(yC);
      "function" === typeof IC && CC.catch(IC);
    }
    function bC(CC) {
      "string" !== typeof CC && (console.warn(CC + " used as a key, but it is not a string."), CC = String(CC));
      return CC;
    }
    function rC() {
      if (arguments.length && "function" === typeof arguments[arguments.length - 1]) {
        return arguments[arguments.length - 1];
      }
    }
    var GC = "local-forage-detect-blob-support";
    var eC = void 0;
    var OC = {};
    var SC = Object.prototype.toString;
    var TC = "readonly";
    var NC = "readwrite";
    function sC(CC) {
      for (var yC = CC.length, IC = new ArrayBuffer(yC), fC = new Uint8Array(IC), ky = 0; ky < yC; ky++) {
        fC[ky] = CC.charCodeAt(ky);
      }
      return IC;
    }
    function jy(CC) {
      return new iy(function (yC) {
        var IC = CC.transaction(GC, NC);
        var fC = XC([""]);
        IC.objectStore(GC).put(fC, "key");
        IC.onabort = function (CC) {
          CC.preventDefault();
          CC.stopPropagation();
          yC(!1);
        };
        IC.oncomplete = function () {
          var CC = navigator.userAgent.match(/Chrome\/(\d+)/);
          var IC = navigator.userAgent.match(/Edge\//);
          yC(IC || !CC || parseInt(CC[1], 10) >= 43);
        };
      }).catch(function () {
        return !1;
      });
    }
    function qC(CC) {
      return "boolean" === typeof eC ? iy.resolve(eC) : jy(CC).then(function (CC) {
        return eC = CC;
      });
    }
    function KC(CC) {
      var yC = OC[CC.name];
      var IC = {};
      IC.promise = new iy(function (CC, yC) {
        IC.resolve = CC;
        IC.reject = yC;
      });
      yC.deferredOperations.push(IC);
      yC.dbReady ? yC.dbReady = yC.dbReady.then(function () {
        return IC.promise;
      }) : yC.dbReady = IC.promise;
    }
    function pC(CC) {
      var yC = OC[CC.name].deferredOperations.pop();
      if (yC) {
        yC.resolve();
        return yC.promise;
      }
    }
    function wC(CC, yC) {
      var IC = OC[CC.name].deferredOperations.pop();
      if (IC) {
        IC.reject(yC);
        return IC.promise;
      }
    }
    function HC(CC, yC) {
      return new iy(function (IC, fC) {
        OC[CC.name] = OC[CC.name] || BC();
        if (CC.db) {
          if (!yC) {
            return IC(CC.db);
          }
          KC(CC);
          CC.db.close();
        }
        var ky = [CC.name];
        yC && ky.push(CC.version);
        var gC = AC.open.apply(AC, ky);
        yC && (gC.onupgradeneeded = function (yC) {
          var IC = gC.result;
          try {
            IC.createObjectStore(CC.storeName);
            yC.oldVersion <= 1 && IC.createObjectStore(GC);
          } catch (fC) {
            if ("ConstraintError" !== fC.name) {
              throw fC;
            }
            console.warn('The database "' + CC.name + '" has been upgraded from version ' + yC.oldVersion + " to version " + yC.newVersion + ', but the storage "' + CC.storeName + '" already exists.');
          }
        });
        gC.onerror = function (CC) {
          CC.preventDefault();
          fC(gC.error);
        };
        gC.onsuccess = function () {
          var yC = gC.result;
          yC.onversionchange = function (CC) {
            CC.target.close();
          };
          IC(yC);
          pC(CC);
        };
      });
    }
    function aC(CC) {
      return HC(CC, !1);
    }
    function cC(CC) {
      return HC(CC, !0);
    }
    function UC(CC, yC) {
      if (!CC.db) {
        return !0;
      }
      var IC = !CC.db.objectStoreNames.contains(CC.storeName);
      var fC = CC.version < CC.db.version;
      var ky = CC.version > CC.db.version;
      fC && (CC.version !== yC && console.warn('The database "' + CC.name + "\" can't be downgraded from version " + CC.db.version + " to version " + CC.version + "."), CC.version = CC.db.version);
      if (ky || IC) {
        if (IC) {
          var gC = CC.db.version + 1;
          gC > CC.version && (CC.version = gC);
        }
        return !0;
      }
      return !1;
    }
    function EC(CC) {
      return new iy(function (yC, IC) {
        var fC = new FileReader();
        fC.onerror = IC;
        fC.onloadend = function (IC) {
          var fC = btoa(IC.target.result || "");
          yC({
            __local_forage_encoded_blob: !0,
            data: fC,
            type: CC.type
          });
        };
        fC.readAsBinaryString(CC);
      });
    }
    function VC(CC) {
      return XC([sC(atob(CC.data))], {
        type: CC.type
      });
    }
    function WC(CC) {
      return CC && CC.__local_forage_encoded_blob;
    }
    function xC(CC) {
      var yC = this;
      var IC = yC._initReady().then(function () {
        var CC = OC[yC._dbInfo.name];
        if (CC && CC.dbReady) {
          return CC.dbReady;
        }
      });
      YC(IC, CC, CC);
      return IC;
    }
    function PC(CC) {
      KC(CC);
      for (var yC = OC[CC.name], IC = yC.forages, fC = 0; fC < IC.length; fC++) {
        var ky = IC[fC];
        ky._dbInfo.db && (ky._dbInfo.db.close(), ky._dbInfo.db = null);
      }
      CC.db = null;
      return aC(CC).then(function (yC) {
        CC.db = yC;
        return UC(CC) ? cC(CC) : yC;
      }).then(function (fC) {
        CC.db = yC.db = fC;
        for (var ky = 0; ky < IC.length; ky++) {
          IC[ky]._dbInfo.db = fC;
        }
      }).catch(function (yC) {
        wC(CC, yC);
        throw yC;
      });
    }
    function zC(CC, yC, IC, fC) {
      void 0 === fC && (fC = 1);
      try {
        var ky = CC.db.transaction(CC.storeName, yC);
        IC(null, ky);
      } catch (gC) {
        if (fC > 0 && (!CC.db || "InvalidStateError" === gC.name || "NotFoundError" === gC.name)) {
          return iy.resolve().then(function () {
            if (!CC.db || "NotFoundError" === gC.name && !CC.db.objectStoreNames.contains(CC.storeName) && CC.version <= CC.db.version) {
              CC.db && (CC.version = CC.db.version + 1);
              return cC(CC);
            }
          }).then(function () {
            return PC(CC).then(function () {
              zC(CC, yC, IC, fC - 1);
            });
          }).catch(IC);
        }
        IC(gC);
      }
    }
    function BC() {
      return {
        forages: [],
        db: null,
        dbReady: null,
        deferredOperations: []
      };
    }
    function tC(CC) {
      var yC = this;
      var IC = {
        db: null
      };
      if (CC) {
        for (var fC in CC) {
          IC[fC] = CC[fC];
        }
      }
      var ky = OC[IC.name];
      ky || (ky = BC(), OC[IC.name] = ky);
      ky.forages.push(yC);
      yC._initReady || (yC._initReady = yC.ready, yC.ready = xC);
      var gC = [];
      function AC() {
        return iy.resolve();
      }
      for (var my = 0; my < ky.forages.length; my++) {
        var XC = ky.forages[my];
        XC !== yC && gC.push(XC._initReady().catch(AC));
      }
      var LC = ky.forages.slice(0);
      return iy.all(gC).then(function () {
        IC.db = ky.db;
        return aC(IC);
      }).then(function (CC) {
        IC.db = CC;
        return UC(IC, yC._defaultConfig.version) ? cC(IC) : CC;
      }).then(function (CC) {
        IC.db = ky.db = CC;
        yC._dbInfo = IC;
        for (var fC = 0; fC < LC.length; fC++) {
          var gC = LC[fC];
          gC !== yC && (gC._dbInfo.db = IC.db, gC._dbInfo.version = IC.version);
        }
      });
    }
    function JC(CC, yC) {
      var IC = this;
      CC = bC(CC);
      var fC = new iy(function (yC, fC) {
        IC.ready().then(function () {
          zC(IC._dbInfo, TC, function (ky, gC) {
            if (ky) {
              return fC(ky);
            }
            try {
              var AC = gC.objectStore(IC._dbInfo.storeName).get(CC);
              AC.onsuccess = function () {
                var CC = AC.result;
                void 0 === CC && (CC = null);
                WC(CC) && (CC = VC(CC));
                yC(CC);
              };
              AC.onerror = function () {
                fC(AC.error);
              };
            } catch (my) {
              fC(my);
            }
          });
        }).catch(fC);
      });
      LC(fC, yC);
      return fC;
    }
    function nC(CC, yC) {
      var IC = this;
      var fC = new iy(function (yC, fC) {
        IC.ready().then(function () {
          zC(IC._dbInfo, TC, function (ky, gC) {
            if (ky) {
              return fC(ky);
            }
            try {
              var AC = gC.objectStore(IC._dbInfo.storeName).openCursor();
              var my = 1;
              AC.onsuccess = function () {
                var IC = AC.result;
                if (IC) {
                  var fC = IC.value;
                  WC(fC) && (fC = VC(fC));
                  var ky = CC(fC, IC.key, my++);
                  void 0 !== ky ? yC(ky) : IC.continue();
                } else {
                  yC();
                }
              };
              AC.onerror = function () {
                fC(AC.error);
              };
            } catch (XC) {
              fC(XC);
            }
          });
        }).catch(fC);
      });
      LC(fC, yC);
      return fC;
    }
    function FC(CC, yC, IC) {
      var fC = this;
      CC = bC(CC);
      var ky = new iy(function (IC, ky) {
        var gC;
        fC.ready().then(function () {
          gC = fC._dbInfo;
          return "[object Blob]" === SC.call(yC) ? qC(gC.db).then(function (CC) {
            return CC ? yC : EC(yC);
          }) : yC;
        }).then(function (yC) {
          zC(fC._dbInfo, NC, function (gC, AC) {
            if (gC) {
              return ky(gC);
            }
            try {
              var my = AC.objectStore(fC._dbInfo.storeName);
              null === yC && (yC = void 0);
              var XC = my.put(yC, CC);
              AC.oncomplete = function () {
                void 0 === yC && (yC = null);
                IC(yC);
              };
              AC.onabort = AC.onerror = function () {
                var CC = XC.error ? XC.error : XC.transaction.error;
                ky(CC);
              };
            } catch (iy) {
              ky(iy);
            }
          });
        }).catch(ky);
      });
      LC(ky, IC);
      return ky;
    }
    function uC(CC, yC) {
      var IC = this;
      CC = bC(CC);
      var fC = new iy(function (yC, fC) {
        IC.ready().then(function () {
          zC(IC._dbInfo, NC, function (ky, gC) {
            if (ky) {
              return fC(ky);
            }
            try {
              var AC = gC.objectStore(IC._dbInfo.storeName).delete(CC);
              gC.oncomplete = function () {
                yC();
              };
              gC.onerror = function () {
                fC(AC.error);
              };
              gC.onabort = function () {
                var CC = AC.error ? AC.error : AC.transaction.error;
                fC(CC);
              };
            } catch (my) {
              fC(my);
            }
          });
        }).catch(fC);
      });
      LC(fC, yC);
      return fC;
    }
    function DC(CC) {
      var yC = this;
      var IC = new iy(function (CC, IC) {
        yC.ready().then(function () {
          zC(yC._dbInfo, NC, function (fC, ky) {
            if (fC) {
              return IC(fC);
            }
            try {
              var gC = ky.objectStore(yC._dbInfo.storeName).clear();
              ky.oncomplete = function () {
                CC();
              };
              ky.onabort = ky.onerror = function () {
                var CC = gC.error ? gC.error : gC.transaction.error;
                IC(CC);
              };
            } catch (AC) {
              IC(AC);
            }
          });
        }).catch(IC);
      });
      LC(IC, CC);
      return IC;
    }
    function ZC(CC) {
      var yC = this;
      var IC = new iy(function (CC, IC) {
        yC.ready().then(function () {
          zC(yC._dbInfo, TC, function (fC, ky) {
            if (fC) {
              return IC(fC);
            }
            try {
              var gC = ky.objectStore(yC._dbInfo.storeName).count();
              gC.onsuccess = function () {
                CC(gC.result);
              };
              gC.onerror = function () {
                IC(gC.error);
              };
            } catch (AC) {
              IC(AC);
            }
          });
        }).catch(IC);
      });
      LC(IC, CC);
      return IC;
    }
    function lC(CC, yC) {
      var IC = this;
      var fC = new iy(function (yC, fC) {
        CC < 0 ? yC(null) : IC.ready().then(function () {
          zC(IC._dbInfo, TC, function (ky, gC) {
            if (ky) {
              return fC(ky);
            }
            try {
              var AC = gC.objectStore(IC._dbInfo.storeName);
              var my = !1;
              var XC = AC.openKeyCursor();
              XC.onsuccess = function () {
                var IC = XC.result;
                IC ? 0 === CC || my ? yC(IC.key) : (my = !0, IC.advance(CC)) : yC(null);
              };
              XC.onerror = function () {
                fC(XC.error);
              };
            } catch (iy) {
              fC(iy);
            }
          });
        }).catch(fC);
      });
      LC(fC, yC);
      return fC;
    }
    function oC(CC) {
      var yC = this;
      var IC = new iy(function (CC, IC) {
        yC.ready().then(function () {
          zC(yC._dbInfo, TC, function (fC, ky) {
            if (fC) {
              return IC(fC);
            }
            try {
              var gC = ky.objectStore(yC._dbInfo.storeName).openKeyCursor();
              var AC = [];
              gC.onsuccess = function () {
                var yC = gC.result;
                yC ? (AC.push(yC.key), yC.continue()) : CC(AC);
              };
              gC.onerror = function () {
                IC(gC.error);
              };
            } catch (my) {
              IC(my);
            }
          });
        }).catch(IC);
      });
      LC(IC, CC);
      return IC;
    }
    function vC(CC, yC) {
      yC = rC.apply(this, arguments);
      var IC = this.config();
      (CC = "function" !== typeof CC && CC || {}).name || (CC.name = CC.name || IC.name, CC.storeName = CC.storeName || IC.storeName);
      var fC;
      var ky = this;
      if (CC.name) {
        var gC = CC.name === IC.name && ky._dbInfo.db ? iy.resolve(ky._dbInfo.db) : aC(CC).then(function (yC) {
          var IC = OC[CC.name];
          var fC = IC.forages;
          IC.db = yC;
          for (var ky = 0; ky < fC.length; ky++) {
            fC[ky]._dbInfo.db = yC;
          }
          return yC;
        });
        fC = CC.storeName ? gC.then(function (yC) {
          if (yC.objectStoreNames.contains(CC.storeName)) {
            var IC = yC.version + 1;
            KC(CC);
            var fC = OC[CC.name];
            var ky = fC.forages;
            yC.close();
            for (var gC = 0; gC < ky.length; gC++) {
              var my = ky[gC];
              my._dbInfo.db = null;
              my._dbInfo.version = IC;
            }
            var XC = new iy(function (yC, fC) {
              var ky = AC.open(CC.name, IC);
              ky.onerror = function (CC) {
                ky.result.close();
                fC(CC);
              };
              ky.onupgradeneeded = function () {
                ky.result.deleteObjectStore(CC.storeName);
              };
              ky.onsuccess = function () {
                var CC = ky.result;
                CC.close();
                yC(CC);
              };
            });
            return XC.then(function (CC) {
              fC.db = CC;
              for (var yC = 0; yC < ky.length; yC++) {
                var IC = ky[yC];
                IC._dbInfo.db = CC;
                pC(IC._dbInfo);
              }
            }).catch(function (yC) {
              (wC(CC, yC) || iy.resolve()).catch(function () {});
              throw yC;
            });
          }
        }) : gC.then(function (yC) {
          KC(CC);
          var IC = OC[CC.name];
          var fC = IC.forages;
          yC.close();
          for (var ky = 0; ky < fC.length; ky++) {
            fC[ky]._dbInfo.db = null;
          }
          var gC = new iy(function (yC, IC) {
            var fC = AC.deleteDatabase(CC.name);
            fC.onerror = function () {
              var CC = fC.result;
              CC && CC.close();
              IC(fC.error);
            };
            fC.onblocked = function () {
              console.warn('dropInstance blocked for database "' + CC.name + '" until all open connections are closed');
            };
            fC.onsuccess = function () {
              var CC = fC.result;
              CC && CC.close();
              yC(CC);
            };
          });
          return gC.then(function (CC) {
            IC.db = CC;
            for (var yC = 0; yC < fC.length; yC++) {
              pC(fC[yC]._dbInfo);
            }
          }).catch(function (yC) {
            (wC(CC, yC) || iy.resolve()).catch(function () {});
            throw yC;
          });
        });
      } else {
        fC = iy.reject("Invalid arguments");
      }
      LC(fC, yC);
      return fC;
    }
    var hC = {
      _driver: "asyncStorage",
      _initStorage: tC,
      _support: my(),
      iterate: nC,
      getItem: JC,
      setItem: FC,
      removeItem: uC,
      clear: DC,
      length: ZC,
      key: lC,
      keys: oC,
      dropInstance: vC
    };
    function RC() {
      return "function" === typeof openDatabase;
    }
    var dC = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var QC = "~~local_forage_type~";
    var MC = /^~~local_forage_type~([^~]+)~/;
    var Cy = "__lfsc__:";
    var yy = Cy.length;
    var Iy = "arbf";
    var fy = "blob";
    var kI = "si08";
    var gy = "ui08";
    var Ay = "uic8";
    var mI = "si16";
    var Xy = "si32";
    var iI = "ur16";
    var Ly = "ui32";
    var Yy = "fl32";
    var by = "fl64";
    var ry = yy + Iy.length;
    var Gy = Object.prototype.toString;
    function ey(CC) {
      var yC;
      var IC;
      var fC;
      var ky;
      var gC;
      var AC = .75 * CC.length;
      var my = CC.length;
      var XC = 0;
      "=" === CC[CC.length - 1] && (AC--, "=" === CC[CC.length - 2] && AC--);
      var iy = new ArrayBuffer(AC);
      var LC = new Uint8Array(iy);
      for (yC = 0; yC < my; yC += 4) {
        IC = dC.indexOf(CC[yC]);
        fC = dC.indexOf(CC[yC + 1]);
        ky = dC.indexOf(CC[yC + 2]);
        gC = dC.indexOf(CC[yC + 3]);
        LC[XC++] = IC << 2 | fC >> 4;
        LC[XC++] = (15 & fC) << 4 | ky >> 2;
        LC[XC++] = (3 & ky) << 6 | 63 & gC;
      }
      return iy;
    }
    function Oy(CC) {
      var yC;
      var IC = new Uint8Array(CC);
      var fC = "";
      for (yC = 0; yC < IC.length; yC += 3) {
        fC += dC[IC[yC] >> 2];
        fC += dC[(3 & IC[yC]) << 4 | IC[yC + 1] >> 4];
        fC += dC[(15 & IC[yC + 1]) << 2 | IC[yC + 2] >> 6];
        fC += dC[63 & IC[yC + 2]];
      }
      IC.length % 3 === 2 ? fC = fC.substring(0, fC.length - 1) + "=" : IC.length % 3 === 1 && (fC = fC.substring(0, fC.length - 2) + "==");
      return fC;
    }
    function Sy(CC, yC) {
      var IC = "";
      CC && (IC = Gy.call(CC));
      if (CC && ("[object ArrayBuffer]" === IC || CC.buffer && "[object ArrayBuffer]" === Gy.call(CC.buffer))) {
        var fC;
        var ky = Cy;
        CC instanceof ArrayBuffer ? (fC = CC, ky += Iy) : (fC = CC.buffer, "[object Int8Array]" === IC ? ky += kI : "[object Uint8Array]" === IC ? ky += gy : "[object Uint8ClampedArray]" === IC ? ky += Ay : "[object Int16Array]" === IC ? ky += mI : "[object Uint16Array]" === IC ? ky += iI : "[object Int32Array]" === IC ? ky += Xy : "[object Uint32Array]" === IC ? ky += Ly : "[object Float32Array]" === IC ? ky += Yy : "[object Float64Array]" === IC ? ky += by : yC(new Error("Failed to get type for BinaryArray")));
        yC(ky + Oy(fC));
      } else {
        if ("[object Blob]" === IC) {
          var gC = new FileReader();
          gC.onload = function () {
            var IC = QC + CC.type + "~" + Oy(this.result);
            yC(Cy + fy + IC);
          };
          gC.readAsArrayBuffer(CC);
        } else {
          try {
            yC(JSON.stringify(CC));
          } catch (AC) {
            console.error("Couldn't convert value into a JSON string: ", CC);
            yC(null, AC);
          }
        }
      }
    }
    function Ty(CC) {
      if (CC.substring(0, yy) !== Cy) {
        return JSON.parse(CC);
      }
      var yC;
      var IC = CC.substring(ry);
      var fC = CC.substring(yy, ry);
      if (fC === fy && MC.test(IC)) {
        var ky = IC.match(MC);
        yC = ky[1];
        IC = IC.substring(ky[0].length);
      }
      var gC = ey(IC);
      switch (fC) {
        case Iy:
          return gC;
        case fy:
          return XC([gC], {
            type: yC
          });
        case kI:
          return new Int8Array(gC);
        case gy:
          return new Uint8Array(gC);
        case Ay:
          return new Uint8ClampedArray(gC);
        case mI:
          return new Int16Array(gC);
        case iI:
          return new Uint16Array(gC);
        case Xy:
          return new Int32Array(gC);
        case Ly:
          return new Uint32Array(gC);
        case Yy:
          return new Float32Array(gC);
        case by:
          return new Float64Array(gC);
        default:
          throw new Error("Unkown type: " + fC);
      }
    }
    var Ny = {
      serialize: Sy,
      deserialize: Ty,
      stringToBuffer: ey,
      bufferToString: Oy
    };
    function sy(CC, yC, IC, fC) {
      CC.executeSql("CREATE TABLE IF NOT EXISTS " + yC.storeName + " (id INTEGER PRIMARY KEY, key unique, value)", [], IC, fC);
    }
    function jI(CC) {
      var yC = this;
      var IC = {
        db: null
      };
      if (CC) {
        for (var fC in CC) {
          IC[fC] = "string" !== typeof CC[fC] ? CC[fC].toString() : CC[fC];
        }
      }
      var ky = new iy(function (CC, fC) {
        try {
          IC.db = openDatabase(IC.name, String(IC.version), IC.description, IC.size);
        } catch (ky) {
          return fC(ky);
        }
        IC.db.transaction(function (ky) {
          sy(ky, IC, function () {
            yC._dbInfo = IC;
            CC();
          }, function (CC, yC) {
            fC(yC);
          });
        }, fC);
      });
      IC.serializer = Ny;
      return ky;
    }
    function qy(CC, yC, IC, fC, ky, gC) {
      CC.executeSql(IC, fC, ky, function (CC, AC) {
        AC.code === AC.SYNTAX_ERR ? CC.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?", [yC.storeName], function (CC, my) {
          my.rows.length ? gC(CC, AC) : sy(CC, yC, function () {
            CC.executeSql(IC, fC, ky, gC);
          }, gC);
        }, gC) : gC(CC, AC);
      }, gC);
    }
    function Ky(CC, yC) {
      var IC = this;
      CC = bC(CC);
      var fC = new iy(function (yC, fC) {
        IC.ready().then(function () {
          var ky = IC._dbInfo;
          ky.db.transaction(function (IC) {
            qy(IC, ky, "SELECT * FROM " + ky.storeName + " WHERE key = ? LIMIT 1", [CC], function (CC, IC) {
              var fC = IC.rows.length ? IC.rows.item(0).value : null;
              fC && (fC = ky.serializer.deserialize(fC));
              yC(fC);
            }, function (CC, yC) {
              fC(yC);
            });
          });
        }).catch(fC);
      });
      LC(fC, yC);
      return fC;
    }
    function py(CC, yC) {
      var IC = this;
      var fC = new iy(function (yC, fC) {
        IC.ready().then(function () {
          var ky = IC._dbInfo;
          ky.db.transaction(function (IC) {
            qy(IC, ky, "SELECT * FROM " + ky.storeName, [], function (IC, fC) {
              for (var gC = fC.rows, AC = gC.length, my = 0; my < AC; my++) {
                var XC = gC.item(my);
                var iy = XC.value;
                iy && (iy = ky.serializer.deserialize(iy));
                if (void 0 !== (iy = CC(iy, XC.key, my + 1))) {
                  return void yC(iy);
                }
              }
              yC();
            }, function (CC, yC) {
              fC(yC);
            });
          });
        }).catch(fC);
      });
      LC(fC, yC);
      return fC;
    }
    function wy(CC, yC, IC, fC) {
      var ky = this;
      CC = bC(CC);
      var gC = new iy(function (gC, AC) {
        ky.ready().then(function () {
          void 0 === yC && (yC = null);
          var my = yC;
          var XC = ky._dbInfo;
          XC.serializer.serialize(yC, function (yC, iy) {
            iy ? AC(iy) : XC.db.transaction(function (IC) {
              qy(IC, XC, "INSERT OR REPLACE INTO " + XC.storeName + " (key, value) VALUES (?, ?)", [CC, yC], function () {
                gC(my);
              }, function (CC, yC) {
                AC(yC);
              });
            }, function (yC) {
              if (yC.code === yC.QUOTA_ERR) {
                if (fC > 0) {
                  return void gC(wy.apply(ky, [CC, my, IC, fC - 1]));
                }
                AC(yC);
              }
            });
          });
        }).catch(AC);
      });
      LC(gC, IC);
      return gC;
    }
    function Hy(CC, yC, IC) {
      return wy.apply(this, [CC, yC, IC, 1]);
    }
    function ay(CC, yC) {
      var IC = this;
      CC = bC(CC);
      var fC = new iy(function (yC, fC) {
        IC.ready().then(function () {
          var ky = IC._dbInfo;
          ky.db.transaction(function (IC) {
            qy(IC, ky, "DELETE FROM " + ky.storeName + " WHERE key = ?", [CC], function () {
              yC();
            }, function (CC, yC) {
              fC(yC);
            });
          });
        }).catch(fC);
      });
      LC(fC, yC);
      return fC;
    }
    function cy(CC) {
      var yC = this;
      var IC = new iy(function (CC, IC) {
        yC.ready().then(function () {
          var fC = yC._dbInfo;
          fC.db.transaction(function (yC) {
            qy(yC, fC, "DELETE FROM " + fC.storeName, [], function () {
              CC();
            }, function (CC, yC) {
              IC(yC);
            });
          });
        }).catch(IC);
      });
      LC(IC, CC);
      return IC;
    }
    function Uy(CC) {
      var yC = this;
      var IC = new iy(function (CC, IC) {
        yC.ready().then(function () {
          var fC = yC._dbInfo;
          fC.db.transaction(function (yC) {
            qy(yC, fC, "SELECT COUNT(key) as c FROM " + fC.storeName, [], function (yC, IC) {
              var fC = IC.rows.item(0).c;
              CC(fC);
            }, function (CC, yC) {
              IC(yC);
            });
          });
        }).catch(IC);
      });
      LC(IC, CC);
      return IC;
    }
    function Ey(CC, yC) {
      var IC = this;
      var fC = new iy(function (yC, fC) {
        IC.ready().then(function () {
          var ky = IC._dbInfo;
          ky.db.transaction(function (IC) {
            qy(IC, ky, "SELECT key FROM " + ky.storeName + " WHERE id = ? LIMIT 1", [CC + 1], function (CC, IC) {
              var fC = IC.rows.length ? IC.rows.item(0).key : null;
              yC(fC);
            }, function (CC, yC) {
              fC(yC);
            });
          });
        }).catch(fC);
      });
      LC(fC, yC);
      return fC;
    }
    function Vy(CC) {
      var yC = this;
      var IC = new iy(function (CC, IC) {
        yC.ready().then(function () {
          var fC = yC._dbInfo;
          fC.db.transaction(function (yC) {
            qy(yC, fC, "SELECT key FROM " + fC.storeName, [], function (yC, IC) {
              for (var fC = [], ky = 0; ky < IC.rows.length; ky++) {
                fC.push(IC.rows.item(ky).key);
              }
              CC(fC);
            }, function (CC, yC) {
              IC(yC);
            });
          });
        }).catch(IC);
      });
      LC(IC, CC);
      return IC;
    }
    function Wy(CC) {
      return new iy(function (yC, IC) {
        CC.transaction(function (fC) {
          fC.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'", [], function (IC, fC) {
            for (var ky = [], gC = 0; gC < fC.rows.length; gC++) {
              ky.push(fC.rows.item(gC).name);
            }
            yC({
              db: CC,
              storeNames: ky
            });
          }, function (CC, yC) {
            IC(yC);
          });
        }, function (CC) {
          IC(CC);
        });
      });
    }
    function xy(CC, yC) {
      yC = rC.apply(this, arguments);
      var IC = this.config();
      (CC = "function" !== typeof CC && CC || {}).name || (CC.name = CC.name || IC.name, CC.storeName = CC.storeName || IC.storeName);
      var fC;
      var ky = this;
      LC(fC = CC.name ? new iy(function (yC) {
        var fC;
        fC = CC.name === IC.name ? ky._dbInfo.db : openDatabase(CC.name, "", "", 0);
        CC.storeName ? yC({
          db: fC,
          storeNames: [CC.storeName]
        }) : yC(Wy(fC));
      }).then(function (CC) {
        return new iy(function (yC, IC) {
          CC.db.transaction(function (fC) {
            function ky(CC) {
              return new iy(function (yC, IC) {
                fC.executeSql("DROP TABLE IF EXISTS " + CC, [], function () {
                  yC();
                }, function (CC, yC) {
                  IC(yC);
                });
              });
            }
            for (var gC = [], AC = 0, my = CC.storeNames.length; AC < my; AC++) {
              gC.push(ky(CC.storeNames[AC]));
            }
            iy.all(gC).then(function () {
              yC();
            }).catch(function (CC) {
              IC(CC);
            });
          }, function (CC) {
            IC(CC);
          });
        });
      }) : iy.reject("Invalid arguments"), yC);
      return fC;
    }
    var Py = {
      _driver: "webSQLStorage",
      _initStorage: jI,
      _support: RC(),
      iterate: py,
      getItem: Ky,
      setItem: Hy,
      removeItem: ay,
      clear: cy,
      length: Uy,
      key: Ey,
      keys: Vy,
      dropInstance: xy
    };
    function zy() {
      try {
        return "undefined" !== typeof localStorage && "setItem" in localStorage && !!localStorage.setItem;
      } catch (CC) {
        return !1;
      }
    }
    function By(CC, yC) {
      var IC = CC.name + "/";
      CC.storeName !== yC.storeName && (IC += CC.storeName + "/");
      return IC;
    }
    function ty() {
      var CC = "_localforage_support_test";
      try {
        localStorage.setItem(CC, !0);
        localStorage.removeItem(CC);
        return !1;
      } catch (yC) {
        return !0;
      }
    }
    function Jy() {
      return !ty() || localStorage.length > 0;
    }
    function ny(CC) {
      var yC = this;
      var IC = {};
      if (CC) {
        for (var fC in CC) {
          IC[fC] = CC[fC];
        }
      }
      IC.keyPrefix = By(CC, yC._defaultConfig);
      return Jy() ? (yC._dbInfo = IC, IC.serializer = Ny, iy.resolve()) : iy.reject();
    }
    function Fy(CC) {
      var yC = this;
      var IC = yC.ready().then(function () {
        for (var CC = yC._dbInfo.keyPrefix, IC = localStorage.length - 1; IC >= 0; IC--) {
          var fC = localStorage.key(IC);
          0 === fC.indexOf(CC) && localStorage.removeItem(fC);
        }
      });
      LC(IC, CC);
      return IC;
    }
    function uy(CC, yC) {
      var IC = this;
      CC = bC(CC);
      var fC = IC.ready().then(function () {
        var yC = IC._dbInfo;
        var fC = localStorage.getItem(yC.keyPrefix + CC);
        fC && (fC = yC.serializer.deserialize(fC));
        return fC;
      });
      LC(fC, yC);
      return fC;
    }
    function Dy(CC, yC) {
      var IC = this;
      var fC = IC.ready().then(function () {
        for (var yC = IC._dbInfo, fC = yC.keyPrefix, ky = fC.length, gC = localStorage.length, AC = 1, my = 0; my < gC; my++) {
          var XC = localStorage.key(my);
          if (0 === XC.indexOf(fC)) {
            var iy = localStorage.getItem(XC);
            iy && (iy = yC.serializer.deserialize(iy));
            if (void 0 !== (iy = CC(iy, XC.substring(ky), AC++))) {
              return iy;
            }
          }
        }
      });
      LC(fC, yC);
      return fC;
    }
    function Zy(CC, yC) {
      var IC = this;
      var fC = IC.ready().then(function () {
        var yC;
        var fC = IC._dbInfo;
        try {
          yC = localStorage.key(CC);
        } catch (ky) {
          yC = null;
        }
        yC && (yC = yC.substring(fC.keyPrefix.length));
        return yC;
      });
      LC(fC, yC);
      return fC;
    }
    function ly(CC) {
      var yC = this;
      var IC = yC.ready().then(function () {
        for (var CC = yC._dbInfo, IC = localStorage.length, fC = [], ky = 0; ky < IC; ky++) {
          var gC = localStorage.key(ky);
          0 === gC.indexOf(CC.keyPrefix) && fC.push(gC.substring(CC.keyPrefix.length));
        }
        return fC;
      });
      LC(IC, CC);
      return IC;
    }
    function oy(CC) {
      var yC = this.keys().then(function (CC) {
        return CC.length;
      });
      LC(yC, CC);
      return yC;
    }
    function vy(CC, yC) {
      var IC = this;
      CC = bC(CC);
      var fC = IC.ready().then(function () {
        var yC = IC._dbInfo;
        localStorage.removeItem(yC.keyPrefix + CC);
      });
      LC(fC, yC);
      return fC;
    }
    function hy(CC, yC, IC) {
      var fC = this;
      CC = bC(CC);
      var ky = fC.ready().then(function () {
        void 0 === yC && (yC = null);
        var IC = yC;
        return new iy(function (ky, gC) {
          var AC = fC._dbInfo;
          AC.serializer.serialize(yC, function (yC, fC) {
            if (fC) {
              gC(fC);
            } else {
              try {
                localStorage.setItem(AC.keyPrefix + CC, yC);
                ky(IC);
              } catch (my) {
                "QuotaExceededError" !== my.name && "NS_ERROR_DOM_QUOTA_REACHED" !== my.name || gC(my);
                gC(my);
              }
            }
          });
        });
      });
      LC(ky, IC);
      return ky;
    }
    function Ry(CC, yC) {
      yC = rC.apply(this, arguments);
      if (!(CC = "function" !== typeof CC && CC || {}).name) {
        var IC = this.config();
        CC.name = CC.name || IC.name;
        CC.storeName = CC.storeName || IC.storeName;
      }
      var fC;
      var ky = this;
      fC = CC.name ? new iy(function (yC) {
        CC.storeName ? yC(By(CC, ky._defaultConfig)) : yC(CC.name + "/");
      }).then(function (CC) {
        for (var yC = localStorage.length - 1; yC >= 0; yC--) {
          var IC = localStorage.key(yC);
          0 === IC.indexOf(CC) && localStorage.removeItem(IC);
        }
      }) : iy.reject("Invalid arguments");
      LC(fC, yC);
      return fC;
    }
    var dy = {
      _driver: "localStorageWrapper",
      _initStorage: ny,
      _support: zy(),
      iterate: Dy,
      getItem: uy,
      setItem: hy,
      removeItem: vy,
      clear: Fy,
      length: oy,
      key: Zy,
      keys: ly,
      dropInstance: Ry
    };
    function Qy(CC, yC) {
      return CC === yC || "number" === typeof CC && "number" === typeof yC && isNaN(CC) && isNaN(yC);
    }
    function My(CC, yC) {
      for (var IC = CC.length, fC = 0; fC < IC;) {
        if (Qy(CC[fC], yC)) {
          return !0;
        }
        fC++;
      }
      return !1;
    }
    var CI = Array.isArray || function (CC) {
      return "[object Array]" === Object.prototype.toString.call(CC);
    };
    var yI = {};
    var II = {};
    var fI = {
      INDEXEDDB: hC,
      WEBSQL: Py,
      LOCALSTORAGE: dy
    };
    var kf = [fI.INDEXEDDB._driver, fI.WEBSQL._driver, fI.LOCALSTORAGE._driver];
    var gI = ["dropInstance"];
    var AI = ["clear", "getItem", "iterate", "key", "keys", "length", "removeItem", "setItem"].concat(gI);
    var mf = {
      description: "",
      driver: kf.slice(),
      name: "localforage",
      size: 4980736,
      storeName: "keyvaluepairs",
      version: 1
    };
    function XI(CC, yC) {
      CC[yC] = function () {
        var IC = arguments;
        return CC.ready().then(function () {
          return CC[yC].apply(CC, IC);
        });
      };
    }
    function LI() {
      for (var CC = 1; CC < arguments.length; CC++) {
        var yC = arguments[CC];
        if (yC) {
          for (var IC in yC) {
            yC.hasOwnProperty(IC) && (CI(yC[IC]) ? arguments[0][IC] = yC[IC].slice() : arguments[0][IC] = yC[IC]);
          }
        }
      }
      return arguments[0];
    }
    var YI = function () {
      function CC(yC) {
        ky(this, CC);
        for (var IC in fI) {
          if (fI.hasOwnProperty(IC)) {
            var fC = fI[IC];
            var gC = fC._driver;
            this[IC] = gC;
            yI[gC] || this.defineDriver(fC);
          }
        }
        this._defaultConfig = LI({}, mf);
        this._config = LI({}, this._defaultConfig, yC);
        this._driverSet = null;
        this._initDriver = null;
        this._ready = !1;
        this._dbInfo = null;
        this._wrapLibraryMethodsWithReady();
        this.setDriver(this._config.driver).catch(function () {});
      }
      CC.prototype.config = function (CC) {
        if ("object" === ("undefined" === typeof CC ? "undefined" : fC(CC))) {
          if (this._ready) {
            return new Error("Can't call config() after localforage has been used.");
          }
          for (var yC in CC) {
            "storeName" === yC && (CC[yC] = CC[yC].replace(/\W/g, "_"));
            if ("version" === yC && "number" !== typeof CC[yC]) {
              return new Error("Database version must be a number.");
            }
            this._config[yC] = CC[yC];
          }
          return !("driver" in CC) || !CC.driver || this.setDriver(this._config.driver);
        }
        return "string" === typeof CC ? this._config[CC] : this._config;
      };
      CC.prototype.defineDriver = function (CC, yC, IC) {
        var fC = new iy(function (yC, IC) {
          try {
            var fC = CC._driver;
            var ky = new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");
            if (!CC._driver) {
              return void IC(ky);
            }
            for (var gC = AI.concat("_initStorage"), AC = 0, my = gC.length; AC < my; AC++) {
              var XC = gC[AC];
              if ((!My(gI, XC) || CC[XC]) && "function" !== typeof CC[XC]) {
                return void IC(ky);
              }
            }
            function YC() {
              for (var yC = function (CC) {
                  return function () {
                    var yC = new Error("Method " + CC + " is not implemented by the current driver");
                    var IC = iy.reject(yC);
                    LC(IC, arguments[arguments.length - 1]);
                    return IC;
                  };
                }, IC = 0, fC = gI.length; IC < fC; IC++) {
                var ky = gI[IC];
                CC[ky] || (CC[ky] = yC(ky));
              }
            }
            YC();
            function bC(IC) {
              yI[fC] && console.info("Redefining LocalForage driver: " + fC);
              yI[fC] = CC;
              II[fC] = IC;
              yC();
            }
            "_support" in CC ? CC._support && "function" === typeof CC._support ? CC._support().then(bC, IC) : bC(!!CC._support) : bC(!0);
          } catch (rC) {
            IC(rC);
          }
        });
        YC(fC, yC, IC);
        return fC;
      };
      CC.prototype.driver = function () {
        return this._driver || null;
      };
      CC.prototype.getDriver = function (CC, yC, IC) {
        var fC = yI[CC] ? iy.resolve(yI[CC]) : iy.reject(new Error("Driver not found."));
        YC(fC, yC, IC);
        return fC;
      };
      CC.prototype.getSerializer = function (CC) {
        var yC = iy.resolve(Ny);
        YC(yC, CC);
        return yC;
      };
      CC.prototype.ready = function (CC) {
        var yC = this;
        var IC = yC._driverSet.then(function () {
          null === yC._ready && (yC._ready = yC._initDriver());
          return yC._ready;
        });
        YC(IC, CC, CC);
        return IC;
      };
      CC.prototype.setDriver = function (CC, yC, IC) {
        var fC = this;
        CI(CC) || (CC = [CC]);
        var ky = this._getSupportedDrivers(CC);
        function gC() {
          fC._config.driver = fC.driver();
        }
        function AC(CC) {
          fC._extend(CC);
          gC();
          fC._ready = fC._initStorage(fC._config);
          return fC._ready;
        }
        function my(CC) {
          return function () {
            var yC = 0;
            function IC() {
              for (; yC < CC.length;) {
                var ky = CC[yC];
                yC++;
                fC._dbInfo = null;
                fC._ready = null;
                return fC.getDriver(ky).then(AC).catch(IC);
              }
              gC();
              var my = new Error("No available storage method found.");
              fC._driverSet = iy.reject(my);
              return fC._driverSet;
            }
            return IC();
          };
        }
        var XC = null !== this._driverSet ? this._driverSet.catch(function () {
          return iy.resolve();
        }) : iy.resolve();
        this._driverSet = XC.then(function () {
          var CC = ky[0];
          fC._dbInfo = null;
          fC._ready = null;
          return fC.getDriver(CC).then(function (CC) {
            fC._driver = CC._driver;
            gC();
            fC._wrapLibraryMethodsWithReady();
            fC._initDriver = my(ky);
          });
        }).catch(function () {
          gC();
          var CC = new Error("No available storage method found.");
          fC._driverSet = iy.reject(CC);
          return fC._driverSet;
        });
        YC(this._driverSet, yC, IC);
        return this._driverSet;
      };
      CC.prototype.supports = function (CC) {
        return !!II[CC];
      };
      CC.prototype._extend = function (CC) {
        LI(this, CC);
      };
      CC.prototype._getSupportedDrivers = function (CC) {
        for (var yC = [], IC = 0, fC = CC.length; IC < fC; IC++) {
          var ky = CC[IC];
          this.supports(ky) && yC.push(ky);
        }
        return yC;
      };
      CC.prototype._wrapLibraryMethodsWithReady = function () {
        for (var CC = 0, yC = AI.length; CC < yC; CC++) {
          XI(this, AI[CC]);
        }
      };
      CC.prototype.createInstance = function (yC) {
        return new CC(yC);
      };
      return CC;
    }();
    var bI = new YI();
    yC.exports = bI;
  }, {
    3: 3
  }]
}, {}, [4])(4);