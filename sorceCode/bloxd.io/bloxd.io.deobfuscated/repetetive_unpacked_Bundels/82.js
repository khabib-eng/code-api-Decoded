var fC = require("./91.js");
var ky = fC;
var gC = require("./100.js");
var AC = gC;
class my {
  userKeyToStorageKey(CC) {
    return "bloxd-".concat(CC);
  }
}
export const e = new class extends my {
  constructor() {
    super(...arguments);
    this._cachedVals = {};
  }
  setItem(CC, yC) {
    this._cachedVals[CC] = yC;
    try {
      AC.set(CC, yC, {
        expires: 395,
        sameSite: "none",
        secure: !0
      });
    } catch (IC) {
      console.error("Caught error", IC, "when attempting to write to cookies. Some parts of bloxd may not work as intended. Please enable cookies in your browser settings.");
    }
  }
  getItem(CC) {
    try {
      return AC.get(CC);
    } catch (IC) {
      var yC;
      console.error("Caught error", IC, "when attempting to read from cookies. Some parts of bloxd may not work as intended. Please enable cookies in your browser settings.");
      return null !== (yC = this._cachedVals[CC]) && void 0 !== yC ? yC : null;
    }
  }
  removeItem(CC) {
    delete this._cachedVals[CC];
    try {
      AC.remove(CC);
    } catch (yC) {
      console.error("Caught error", yC, "when attempting to remove from cookies. Some parts of bloxd may not work as intended. Please enable cookies in your browser settings.");
    }
  }
}();
export const j = new class extends my {
  constructor() {
    super(...arguments);
    this._cachedVals = {};
  }
  setItem(CC, yC) {
    CC = this.userKeyToStorageKey(CC);
    this._cachedVals[CC] = yC;
    try {
      localStorage.setItem(CC, JSON.stringify(yC));
      return !0;
    } catch (IC) {
      console.error("Caught error", IC, "when attempting to write to localStorage. Some parts of bloxd may not work as intended. Please use a browser that supports localStorage (some browsers such as Brave do not). Also try playing bloxd in a normal tab instead of incognito.");
      return !1;
    }
  }
  getItem(CC) {
    CC = this.userKeyToStorageKey(CC);
    try {
      try {
        return JSON.parse(localStorage.getItem(CC));
      } catch (IC) {
        return localStorage.getItem(CC);
      }
    } catch (fC) {
      var yC;
      console.error("Caught error", fC, "when attempting to read from localStorage. Some parts of bloxd may not work as intended. Please use a browser that supports localStorage (some browsers such as Brave do not). Also try playing bloxd in a normal tab instead of incognito.");
      return null !== (yC = this._cachedVals[CC]) && void 0 !== yC ? yC : null;
    }
  }
  removeItem(CC) {
    CC = this.userKeyToStorageKey(CC);
    delete this._cachedVals[CC];
    try {
      localStorage.removeItem(CC);
    } catch (yC) {
      console.error("Caught error", yC, "when attempting to remove from localStorage. Some parts of bloxd may not work as intended. Please use a browser that supports localStorage (some browsers such as Brave do not). Also try playing bloxd in a normal tab instead of incognito.");
    }
  }
}();
export const f = new class extends my {
  constructor() {
    super();
    this.db = void 0;
    this._cachedVals = {};
    this.db = ky.createInstance({
      name: "bloxd_localforage",
      driver: ky.INDEXEDDB
    });
  }
  async setItem(CC, yC) {
    return this.db.setItem(CC, yC).then(() => {
      this.db._dbInfo.db.close();
      return !0;
    }).catch(IC => {
      console.error("Error while setting item in IndexedDB:", IC);
      CC = this.userKeyToStorageKey(CC);
      this._cachedVals[CC] = yC;
      return !1;
    });
  }
  async getItem(CC) {
    return this.db.getItem(CC).catch(yC => {
      var IC;
      console.error("Error while getting item from IndexedDB:", yC);
      return null !== (IC = this._cachedVals[CC]) && void 0 !== IC ? IC : null;
    });
  }
  removeItem(CC) {
    delete this._cachedVals[CC];
    return this.db.removeItem(CC).catch(CC => {
      console.error("Error while removed item from IndexedDB:", CC);
    });
  }
}();
export let m;
function bC(CC, yC) {
  const IC = rC();
  bC = function (yC, fC) {
    let ky = IC[yC -= 391];
    if (void 0 === bC.UEplPd) {
      bC.FZAkcO = function (CC) {
        let yC = "";
        let IC = "";
        for (let fC, ky, gC = 0, AC = 0; ky = CC.charAt(AC++); ~ky && (fC = gC % 4 ? 64 * fC + ky : ky, gC++ % 4) ? yC += String.fromCharCode(255 & fC >> (-2 * gC & 6)) : 0) {
          ky = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(ky);
        }
        for (let fC = 0, ky = yC.length; fC < ky; fC++) {
          IC += "%" + ("00" + yC.charCodeAt(fC).toString(16)).slice(-2);
        }
        return decodeURIComponent(IC);
      };
      CC = arguments;
      bC.UEplPd = !0;
    }
    const gC = yC + IC[0];
    const AC = CC[gC];
    AC ? ky = AC : (ky = bC.FZAkcO(ky), CC[gC] = ky);
    return ky;
  };
  return bC(CC, yC);
}
function rC() {
  const CC = ["mtyZmZCXnKv4sgzYzq", "mJCYnda5nLzYr3zOsa", "mJa0odmWqwvODNvJ", "ody5mJC5vfPRAvvs", "mtu1ndm1mwjhtxjXrW", "ntvLsLrjqMe", "mJyWmZG3nhrVzM52wa", "mJC5ALDTqK53", "mZeWmJe2r1j3r2zd", "mLbvtvf3DG"];
  return (rC = function () {
    return CC;
  })();
}
!function (CC) {
  const yC = bC;
  const IC = CC();
  for (;;) {
    try {
      if (597638 === parseInt(yC(399)) / 1 + -parseInt(yC(395)) / 2 * (-parseInt(yC(400)) / 3) + parseInt(yC(394)) / 4 * (parseInt(yC(391)) / 5) + -parseInt(yC(392)) / 6 + -parseInt(yC(396)) / 7 + -parseInt(yC(397)) / 8 + parseInt(yC(393)) / 9 * (-parseInt(yC(398)) / 10)) {
        break;
      }
      IC.push(IC.shift());
    } catch (fC) {
      IC.push(IC.shift());
    }
  }
}(rC);
(() => {
  const CC = atob("RXJyb3I=");
  const yC = atob("c3RhY2s=");
  const IC = atob("Y2FwdHVyZVN0YWNrVHJhY2U=");
  const fC = atob("c3RhY2tUcmFjZUxpbWl0");
  const ky = [atob("bWFpbi5qcw=="), atob("aW5kZXguanM="), atob("dXNlcnNjcmlwdA=="), atob("Y29udGVudC5qcw=="), atob("b3B0aW9ucy5qcw=="), atob("cG9wdXAuanM="), atob("LnVzZXIuanM="), atob("Y2hyb21lLWV4dGVuc2lvbg==")];
  m = function () {
    let gC = ky.length - 1;
    arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (gC = ky.length);
    if ("undefined" !== typeof window) {
      var AC;
      window[CC][fC] < 1e5 && (window[CC][fC] = 1e5);
      const my = new window[CC]()[yC];
      const XC = {};
      (null === (AC = window) || void 0 === AC ? void 0 : AC[CC][IC]) && window[CC][IC](XC);
      const iy = XC[yC];
      for (let CC = 0; CC < gC; CC++) {
        const yC = ky[CC];
        if (my.includes(yC)) {
          return !0;
        }
        if (iy && iy.includes(yC)) {
          return !0;
        }
      }
    }
    return !1;
  };
})();