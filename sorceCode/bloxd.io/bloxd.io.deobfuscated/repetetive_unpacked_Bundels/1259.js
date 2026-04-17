var fC = require("./18.js");
var ky = require("./616.js");
var gC = require("./1129.js");
var AC = require("./78.js");
var my = require("./73.js");
var XC = require("./1261.js");
var iy = require("./109.js");
var LC = require("./138.js");
var YC = require("./38.js");
function bC(CC, yC) {
  if (yC.has(CC)) {
    throw new TypeError("Cannot initialize the same private elements twice on an object");
  }
}
var rC = require("./27.js");
function GC(CC, yC, IC) {
  bC(CC, yC);
  yC.set(CC, IC);
}
function eC(CC, yC, IC) {
  if ("function" == typeof CC ? CC === yC : CC.has(yC)) {
    return arguments.length < 3 ? yC : IC;
  }
  throw new TypeError("Private element is not present on this object");
}
function OC(CC, yC, IC) {
  return IC(eC(CC, yC));
}
function SC(CC, yC) {
  return CC.get(eC(CC, yC));
}
function TC(CC, yC, IC) {
  CC.set(eC(CC, yC), IC);
  return IC;
}
var NC = require("./1269.js");
class sC extends Error {
  constructor(CC) {
    super(CC);
    this.name = "TimeoutError";
  }
}
class jy extends Error {
  constructor(CC) {
    super();
    this.name = "AbortError";
    this.message = CC;
  }
}
const qC = CC => void 0 === globalThis.DOMException ? new jy(CC) : new DOMException(CC);
const KC = CC => {
  const yC = void 0 === CC.reason ? qC("This operation was aborted.") : CC.reason;
  return yC instanceof Error ? yC : qC(yC);
};
var pC = new WeakMap();
class wC {
  constructor() {
    GC(this, pC, []);
  }
  enqueue(CC, yC) {
    const IC = {
      priority: (yC = (0, fC.d)({
        priority: 0
      }, yC)).priority,
      run: CC
    };
    if (this.size && SC(pC, this)[this.size - 1].priority >= yC.priority) {
      return void SC(pC, this).push(IC);
    }
    const ky = function (CC, yC, IC) {
      let fC = 0;
      let ky = CC.length;
      for (; ky > 0;) {
        const gC = Math.trunc(ky / 2);
        let AC = fC + gC;
        IC(CC[AC], yC) <= 0 ? (fC = ++AC, ky -= gC + 1) : ky = gC;
      }
      return fC;
    }(SC(pC, this), IC, (CC, yC) => yC.priority - CC.priority);
    SC(pC, this).splice(ky, 0, IC);
  }
  dequeue() {
    const CC = SC(pC, this).shift();
    return null === CC || void 0 === CC ? void 0 : CC.run;
  }
  filter(CC) {
    return SC(pC, this).filter(yC => yC.priority === CC.priority).map(CC => CC.run);
  }
  get size() {
    return SC(pC, this).length;
  }
}
var HC = new WeakMap();
var aC = new WeakMap();
var cC = new WeakMap();
var UC = new WeakMap();
var EC = new WeakMap();
var VC = new WeakMap();
var WC = new WeakMap();
var xC = new WeakMap();
var PC = new WeakMap();
var zC = new WeakMap();
var BC = new WeakMap();
var tC = new WeakMap();
var JC = new WeakMap();
var nC = new WeakMap();
var FC = new WeakSet();
class uC extends NC {
  constructor(CC) {
    var yC;
    var IC;
    var ky;
    var gC;
    var AC;
    var my;
    super();
    bC(yC = this, IC = FC);
    IC.add(yC);
    GC(this, HC, void 0);
    GC(this, aC, void 0);
    GC(this, cC, 0);
    GC(this, UC, void 0);
    GC(this, EC, void 0);
    GC(this, VC, 0);
    GC(this, WC, void 0);
    GC(this, xC, void 0);
    GC(this, PC, void 0);
    GC(this, zC, void 0);
    GC(this, BC, 0);
    GC(this, tC, void 0);
    GC(this, JC, void 0);
    GC(this, nC, void 0);
    (0, rC.c)(this, "timeout", void 0);
    if (!("number" === typeof (CC = (0, fC.d)({
      carryoverConcurrencyCount: !1,
      intervalCap: Number.POSITIVE_INFINITY,
      interval: 0,
      concurrency: Number.POSITIVE_INFINITY,
      autoStart: !0,
      queueClass: wC
    }, CC)).intervalCap && CC.intervalCap >= 1)) {
      throw new TypeError("Expected `intervalCap` to be a number from 1 and up, got `".concat(null !== (ky = null === (gC = CC.intervalCap) || void 0 === gC ? void 0 : gC.toString()) && void 0 !== ky ? ky : "", "` (").concat(typeof CC.intervalCap, ")"));
    }
    if (void 0 === CC.interval || !(Number.isFinite(CC.interval) && CC.interval >= 0)) {
      throw new TypeError("Expected `interval` to be a finite number >= 0, got `".concat(null !== (AC = null === (my = CC.interval) || void 0 === my ? void 0 : my.toString()) && void 0 !== AC ? AC : "", "` (").concat(typeof CC.interval, ")"));
    }
    TC(HC, this, CC.carryoverConcurrencyCount);
    TC(aC, this, CC.intervalCap === Number.POSITIVE_INFINITY || 0 === CC.interval);
    TC(UC, this, CC.intervalCap);
    TC(EC, this, CC.interval);
    TC(PC, this, new CC.queueClass());
    TC(zC, this, CC.queueClass);
    this.concurrency = CC.concurrency;
    this.timeout = CC.timeout;
    TC(nC, this, !0 === CC.throwOnTimeout);
    TC(JC, this, !1 === CC.autoStart);
  }
  get concurrency() {
    return SC(tC, this);
  }
  set concurrency(CC) {
    if (!("number" === typeof CC && CC >= 1)) {
      throw new TypeError("Expected `concurrency` to be a number from 1 and up, got `".concat(CC, "` (").concat(typeof CC, ")"));
    }
    TC(tC, this, CC);
    eC(FC, this, QC).call(this);
  }
  async add(CC) {
    let yC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    yC = (0, fC.d)({
      timeout: this.timeout,
      throwOnTimeout: SC(nC, this)
    }, yC);
    return new Promise((IC, fC) => {
      SC(PC, this).enqueue(async () => {
        var ky;
        var gC;
        TC(BC, this, (ky = SC(BC, this), ky++, ky));
        TC(cC, this, (gC = SC(cC, this), gC++, gC));
        try {
          var AC;
          null === (AC = yC.signal) || void 0 === AC || AC.throwIfAborted();
          let fC = CC({
            signal: yC.signal
          });
          yC.timeout && (fC = function (CC, yC) {
            const {
              milliseconds: IC,
              fallback: fC,
              message: ky,
              customTimers: gC = {
                setTimeout: setTimeout,
                clearTimeout: clearTimeout
              }
            } = yC;
            let AC;
            const my = new Promise((my, XC) => {
              if ("number" !== typeof IC || 1 !== Math.sign(IC)) {
                throw new TypeError("Expected `milliseconds` to be a positive number, got `".concat(IC, "`"));
              }
              if (yC.signal) {
                const {
                  signal: CC
                } = yC;
                CC.aborted && XC(KC(CC));
                CC.addEventListener("abort", () => {
                  XC(KC(CC));
                });
              }
              if (IC === Number.POSITIVE_INFINITY) {
                return void CC.then(my, XC);
              }
              const iy = new sC();
              AC = gC.setTimeout.call(void 0, () => {
                if (fC) {
                  try {
                    my(fC());
                  } catch (yC) {
                    XC(yC);
                  }
                } else {
                  "function" === typeof CC.cancel && CC.cancel();
                  !1 === ky ? my() : ky instanceof Error ? XC(ky) : (iy.message = null !== ky && void 0 !== ky ? ky : "Promise timed out after ".concat(IC, " milliseconds"), XC(iy));
                }
              }, IC);
              (async () => {
                try {
                  my(await CC);
                } catch (yC) {
                  XC(yC);
                }
              })();
            }).finally(() => {
              my.clear();
            });
            my.clear = () => {
              gC.clearTimeout.call(void 0, AC);
              AC = void 0;
            };
            return my;
          }(Promise.resolve(fC), {
            milliseconds: yC.timeout
          }));
          yC.signal && (fC = Promise.race([fC, eC(FC, this, MC).call(this, yC.signal)]));
          const ky = await fC;
          IC(ky);
          this.emit("completed", ky);
        } catch (my) {
          if (my instanceof sC && !yC.throwOnTimeout) {
            return void IC();
          }
          fC(my);
          this.emit("error", my);
        } finally {
          eC(FC, this, lC).call(this);
        }
      }, yC);
      this.emit("add");
      eC(FC, this, hC).call(this);
    });
  }
  async addAll(CC, yC) {
    return Promise.all(CC.map(async CC => this.add(CC, yC)));
  }
  start() {
    return SC(JC, this) ? (TC(JC, this, !1), eC(FC, this, QC).call(this), this) : this;
  }
  pause() {
    TC(JC, this, !0);
  }
  clear() {
    TC(PC, this, new (SC(zC, this))());
  }
  async onEmpty() {
    0 !== SC(PC, this).size && (await eC(FC, this, Cy).call(this, "empty"));
  }
  async onSizeLessThan(CC) {
    SC(PC, this).size < CC || (await eC(FC, this, Cy).call(this, "next", () => SC(PC, this).size < CC));
  }
  async onIdle() {
    0 === SC(BC, this) && 0 === SC(PC, this).size || (await eC(FC, this, Cy).call(this, "idle"));
  }
  get size() {
    return SC(PC, this).size;
  }
  sizeBy(CC) {
    return SC(PC, this).filter(CC).length;
  }
  get pending() {
    return SC(BC, this);
  }
  get isPaused() {
    return SC(JC, this);
  }
}
function DC(CC) {
  return SC(aC, CC) || SC(cC, CC) < SC(UC, CC);
}
function ZC(CC) {
  return SC(BC, CC) < SC(tC, CC);
}
function lC() {
  var CC;
  TC(BC, this, (CC = SC(BC, this), CC--, CC));
  eC(FC, this, hC).call(this);
  this.emit("next");
}
function oC() {
  eC(FC, this, dC).call(this);
  eC(FC, this, RC).call(this);
  TC(xC, this, void 0);
}
function vC(CC) {
  const yC = Date.now();
  if (void 0 === SC(WC, CC)) {
    const IC = SC(VC, CC) - yC;
    if (!(IC < 0)) {
      void 0 === SC(xC, CC) && TC(xC, CC, setTimeout(() => {
        eC(FC, CC, oC).call(CC);
      }, IC));
      return !0;
    }
    TC(cC, CC, SC(HC, CC) ? SC(BC, CC) : 0);
  }
  return !1;
}
function hC() {
  if (0 === SC(PC, this).size) {
    SC(WC, this) && clearInterval(SC(WC, this));
    TC(WC, this, void 0);
    this.emit("empty");
    0 === SC(BC, this) && this.emit("idle");
    return !1;
  }
  if (!SC(JC, this)) {
    const CC = !OC(FC, this, vC);
    if (OC(FC, this, DC) && OC(FC, this, ZC)) {
      const yC = SC(PC, this).dequeue();
      return !!yC && (this.emit("active"), yC(), CC && eC(FC, this, RC).call(this), !0);
    }
  }
  return !1;
}
function RC() {
  SC(aC, this) || void 0 !== SC(WC, this) || (TC(WC, this, setInterval(() => {
    eC(FC, this, dC).call(this);
  }, SC(EC, this))), TC(VC, this, Date.now() + SC(EC, this)));
}
function dC() {
  0 === SC(cC, this) && 0 === SC(BC, this) && SC(WC, this) && (clearInterval(SC(WC, this)), TC(WC, this, void 0));
  TC(cC, this, SC(HC, this) ? SC(BC, this) : 0);
  eC(FC, this, QC).call(this);
}
function QC() {
  for (; eC(FC, this, hC).call(this););
}
async function MC(CC) {
  return new Promise((yC, IC) => {
    CC.addEventListener("abort", () => {
      IC(CC.reason);
    }, {
      once: !0
    });
  });
}
async function Cy(CC, yC) {
  return new Promise(IC => {
    const fC = () => {
      yC && !yC() || (this.off(CC, fC), IC());
    };
    this.on(CC, fC);
  });
}
var yy = require("./1276.js");
var Iy = yy;
var fy = require("./82.js");
var kI = require("./1323.js");
var gy = require("./1329.js");
var Ay = require("./1363.js");
var mI = require("./602.js");
var Xy = require("./1385.js");
var iI = require("./577.js");
var Ly = require("./1342.js");
var Yy = require("./66.js");
var by = require("./1338.js");
var ry = require("./1383.js");
var Gy = require("./1143.js");
var ey = require("./648.js");
var Oy = require("./442.js");
async function Sy(CC, yC) {
  let IC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
  return await fetch(CC, {
    method: "POST",
    headers: (0, fC.d)({
      Accept: "application/json",
      "Content-Type": "application/json"
    }, IC),
    body: JSON.stringify(yC)
  });
}
var Ty = require("./105.js");
var Ny = require("./422.js");
export let i = function (CC) {
  CC[CC.LOGIN = 0] = "LOGIN";
  CC[CC.LINK = 1] = "LINK";
  return CC;
}({});
async function jI(CC) {
  const yC = CC.getMetricsCookies();
  const IC = "trafficCode_b_until";
  const fC = {
    x: {
      a: null,
      b: null
    }
  };
  (() => {
    const CC = fy.j.getItem(IC);
    try {
      return (CC ? parseInt(CC) : 0) < Date.now();
    } catch (yC) {
      return !1;
    }
  })() && (fC.x.a = await gy.f.turnstileLoadedPromise.then(() => gy.f.getTurnstileToken(CC)).catch(CC => {
    console.error("Failed to get token via method A:", CC);
    fy.j.setItem(IC, (Date.now() + 6048e5).toString());
    return null;
  }));
  null === fC.x.a && (fC.x.b = await kI.c.recaptchaLoadedPromise.then(() => kI.c.getRecaptchaToken()).catch(CC => {
    console.error("Failed to get token via method B:", CC);
    return null;
  }));
  for (const gC in fC.x) {
    (0, Yy.w)(fC.x[gC]) && delete fC.x[gC];
  }
  const {
    trafficCode: ky
  } = await t("".concat(iI.b.indexUrl, "/index/traffic-code"), fC, {
    retries: 0,
    minTimeout: 3e3
  }, yC);
  return ky;
}
class qy {
  constructor(CC) {
    this.prom = CC;
    this.hasDoneOneTimeCleanup = !1;
  }
  static create(CC) {
    return new qy(jI(CC).then(CC => ({
      trafficCode: CC,
      createdAt: Date.now()
    })));
  }
  static loadFromStorage(CC) {
    return new qy(Promise.resolve(CC));
  }
  async getTrafficCode() {
    return this.prom.then(CC => CC.trafficCode);
  }
  async getTimestampedTrafficCode() {
    return this.prom;
  }
  async doOneTimeCleanupIfStale(CC) {
    if (this.hasDoneOneTimeCleanup) {
      return !0;
    }
    const {
      createdAt: yC
    } = await this.prom;
    return Date.now() - yC > 2376e5 && (CC(), this.hasDoneOneTimeCleanup = !0, !0);
  }
}
const Ky = new class {
  constructor() {
    this.storageKey = void 0;
    this.cache = {};
    this.storageKey = "trafficCode_cache";
    try {
      var CC;
      const yC = JSON.parse(null !== (CC = fy.j.getItem(this.storageKey)) && void 0 !== CC ? CC : "{}");
      for (const CC in yC) {
        const IC = qy.loadFromStorage(yC[CC]);
        this.cache[CC] = IC;
        IC.doOneTimeCleanupIfStale(() => {
          delete this.cache[CC];
          this.onCacheUpdated();
        });
      }
    } catch (yC) {
      console.error("Failed to load traffic code cache from storage:", yC);
    }
  }
  async getTrafficCode(CC) {
    var yC;
    const IC = this.getCacheKey(CC);
    let fC = null !== (yC = this.cache[IC]) && void 0 !== yC ? yC : null;
    null === fC && (fC = qy.create(CC), this.cache[IC] = fC, fC.getTrafficCode().then(() => {
      this.onCacheUpdated();
    }));
    return (await fC.doOneTimeCleanupIfStale(() => {
      delete this.cache[IC];
      this.onCacheUpdated();
    })) ? this.getTrafficCode(CC) : await this.cache[IC].getTrafficCode();
  }
  getCacheKey(CC) {
    return null === CC.whamm ? null : "whamm_".concat(btoa(CC.whamm), "_").concat(btoa(CC.type));
  }
  async onCacheUpdated() {
    const CC = {};
    for (const yC in this.cache) {
      CC[yC] = await this.cache[yC].getTimestampedTrafficCode();
    }
    fy.j.setItem(this.storageKey, JSON.stringify(CC));
  }
  async invalidate(CC) {
    var yC;
    const IC = this.getCacheKey(CC);
    null !== (null !== (yC = this.cache[IC]) && void 0 !== yC ? yC : null) && (delete this.cache[IC], await this.onCacheUpdated());
  }
}();
class py {
  constructor(CC, yC, IC, gC, AC, my, XC, iy, LC, YC, bC, rC, GC) {
    this.type = CC;
    this.loggedInInfo = yC;
    this.playerName = IC;
    this.cosmetics = gC;
    this.ranks = AC;
    this.isEduTeacher = my;
    this.availableUserContextTypes = LC;
    this.requiresTrafficCode = YC;
    this.metricsCookies = void 0;
    this.whamm = void 0;
    this.superRankInfo = void 0;
    this._ownedCosmeticPacks = void 0;
    this.createdAt = Date.now();
    this.trafficCodeProm = void 0;
    this.personalWorldLobbyName = void 0;
    this.metricsCookies = (0, fC.d)({}, XC);
    this.whamm = null !== iy && void 0 !== iy ? iy : (0, ky.rc)(this.metricsCookies);
    this.superRankInfo = this.playerHasRank("super") ? bC : null;
    this._ownedCosmeticPacks = rC;
    this.personalWorldLobbyName = GC;
    this.requiresTrafficCode && this.setTrafficCode();
  }
  getPersonalWorldLobbyName() {
    return this.personalWorldLobbyName;
  }
  setPersonalWorldLobbyName(CC) {
    this.personalWorldLobbyName = CC;
  }
  getMetricsCookies() {
    return (0, fC.d)({}, this.metricsCookies);
  }
  hasExpired() {
    return Date.now() - this.createdAt > 3e6;
  }
  isLoggedIn() {
    return null !== this.loggedInInfo;
  }
  getPlayerName() {
    return this.playerName;
  }
  getPlayerCosmetics() {
    return this.cosmetics;
  }
  setPlayerCosmetics(CC, yC) {
    this.cosmetics[CC] = yC;
  }
  getPlayerRanks() {
    return this.ranks;
  }
  playerHasRank(CC) {
    return this.ranks.includes(CC);
  }
  getOwnedCosmeticPacks() {
    return this._ownedCosmeticPacks;
  }
  getPlayerNameWithRanks() {
    return (0, ky.I)(this.ranks, this.getPlayerName(), LC.d);
  }
  setPlayerName(CC) {
    this.playerName = CC;
    v.getCurrentUserContext().then(CC => {
      CC === this && YC.c.Gy("userContextUpdated", CC);
    });
  }
  async getTrafficCode() {
    return this.requiresTrafficCode ? (console.log("Prompting..."), gy.f.tryShowWidgetPopup(), this.trafficCodeProm) : "[NULL_TRAFFIC_CODE]";
  }
  setTrafficCode() {
    this.trafficCodeProm = Ky.getTrafficCode(this).catch(CC => {
      this.trafficCodeProm = Ky.getTrafficCode(this);
      throw CC;
    });
  }
  async invalidateTrafficCode() {
    await Ky.invalidate(this);
    this.setTrafficCode();
  }
}
export const f = new py(null, null, null, {}, [], !1, {
  "3PAPISID": "N/A",
  "1PAPISID": "N/A",
  "3PSID": "N/A",
  "1PSID": "N/A",
  "3PSIDMC": "N/A",
  "3PSIDMCPP": "N/A",
  "3PSIDMCSP": "N/A"
}, null, [], !1, {
  superRankFrom: 0,
  superRankForDays: 0,
  superRankHistory: "",
  showSuperRankWelcome: !1
}, [], null);
var Hy = function (CC) {
  CC[CC.GET = 0] = "GET";
  CC[CC.SET = 1] = "SET";
  return CC;
}(Hy || {});
const ay = "CurrentUserContextIsNullError";
class cy extends Error {
  constructor() {
    super("Current user context is null");
    this.name = ay;
  }
}
export const l = {
  [XC.e.GOOGLE]: () => {
    Ay.i.firebase().then(CC => {
      null !== CC && CC.signOut(XC.e.GOOGLE);
    });
  },
  [XC.e.DISCORD]: () => {
    if ((0, Oy.k)()) {
      throw new Error("Can't sign out of Discord from within the Discord client.");
    }
    Ay.i.discord().then(CC => {
      null !== CC && CC.signOut();
    });
  },
  [XC.e.CRAZY_GAMES]: () => {},
  [XC.e.APPLE]: () => {
    Ay.i.firebase().then(CC => {
      null !== CC && CC.signOut(XC.e.APPLE);
    });
  },
  [XC.e.MICROSOFT]: () => {
    Ay.i.firebase().then(CC => {
      null !== CC && CC.signOut(XC.e.MICROSOFT);
    });
  }
};
const Ey = {
  [XC.e.GOOGLE]: "/index/google/login",
  [XC.e.APPLE]: "/index/apple/login",
  [XC.e.MICROSOFT]: "/index/microsoft/login"
};
export const v = new class {
  constructor() {
    this.currentUserContextIsSetPromise = void 0;
    this.onCurrentUserContextIsSet = void 0;
    this.currentUserContextType = null;
    this.userContexts = new Map();
    this.isCurrentUserContextUpdating = !1;
    this.shouldPublishUpdate = !1;
    this.pQueue = new uC({
      concurrency: 1,
      timeout: void 0
    }).on("next", () => {
      if (0 === this.pQueue.sizeBy({
        priority: Hy.SET
      }) && this.shouldPublishUpdate) {
        var CC;
        const yC = null !== (CC = this.userContexts.get(this.currentUserContextType)) && void 0 !== CC ? CC : f;
        YC.c.Gy("userContextUpdated", yC);
        this.isCurrentUserContextUpdating = !1;
        this.shouldPublishUpdate = !1;
        null !== this.currentUserContextType && this.onCurrentUserContextIsSet();
        Ay.i.firebase().then(CC => {
          null !== CC && (yC.whamm && CC.setUserProperties({
            user_id: yC.whamm
          }), CC.setUserProperties({
            loggedIn: yC.isLoggedIn()
          }));
        });
      }
    });
    this.onCurrentUserContextIsNull();
  }
  async synchronize(CC, yC) {
    return this.pQueue.add(CC, {
      priority: yC,
      throwOnTimeout: !0
    });
  }
  onCurrentUserContextIsUpdating() {
    this.isCurrentUserContextUpdating || (this.isCurrentUserContextUpdating = !0, YC.c.Gy("userContextIsUpdating"));
  }
  onCurrentUserContextIsNull() {
    this.currentUserContextIsSetPromise = new Promise(CC => {
      this.onCurrentUserContextIsSet = CC;
    });
  }
  updateCurrentUserContext(CC) {
    CC !== this.currentUserContextType && null === CC && this.onCurrentUserContextIsNull();
    this.currentUserContextType = CC;
    this.shouldPublishUpdate = !0;
  }
  async setCurrentUserContext(CC, yC, IC) {
    return this.synchronize(async () => {
      console.log("Setting current user context to", CC);
      this.onCurrentUserContextIsUpdating();
      return (yC ? this.createUserContext(CC, IC) : this.getOrCreateUserContext(CC, IC)).catch(yC => {
        console.error("Failed to set current user context to ".concat(CC, ":"), yC.message);
        this.currentUserContextType === CC ? this.updateCurrentUserContext(null) : this.updateCurrentUserContext(this.currentUserContextType);
        throw yC;
      }).then(yC => {
        this.updateCurrentUserContext(CC);
      });
    }, Hy.SET);
  }
  async getCurrentUserContext() {
    let CC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    await this.currentUserContextIsSetPromise;
    const yC = async () => {
      if (null === this.currentUserContextType) {
        throw new cy();
      }
      if (!CC) {
        const CC = this.tryGetUserContext(this.currentUserContextType);
        if (CC) {
          return CC;
        }
      }
      this.onCurrentUserContextIsUpdating();
      return this.createUserContext(this.currentUserContextType, i.LOGIN).catch(CC => {
        console.error("Failed to get current user context:", CC.message);
        this.updateCurrentUserContext(null);
        throw CC;
      }).then(CC => {
        this.updateCurrentUserContext(this.currentUserContextType);
        return CC;
      });
    };
    for (let IC = 1; IC <= 3; IC++) {
      const CC = await this.synchronize(yC, Hy.GET).catch(CC => {
        if (CC.name === ay) {
          return null;
        }
        throw CC;
      }).then(CC => {
        if ("undefined" === typeof CC) {
          throw new Error("User context was undefined for some unknown reason");
        }
        return CC;
      });
      if (CC) {
        return CC;
      }
      console.warn("Failed to get current user context on attempt", IC, "of", 3);
    }
    throw new Error("Failed to get current user context after ".concat(3, " attempts"));
  }
  async getOrCreateUserContext(CC, yC) {
    var IC;
    return null !== (IC = this.tryGetUserContext(CC)) && void 0 !== IC ? IC : await this.createUserContext(CC, yC);
  }
  tryGetUserContext(CC) {
    const yC = this.userContexts.get(CC);
    return yC && !yC.hasExpired() ? yC : null;
  }
  async createUserContext(CC, yC) {
    if (yC === i.LINK && CC === this.currentUserContextType) {
      throw new Error("Cannot link to the same user context type: ".concat(CC));
    }
    const IC = () => {
      switch (yC) {
        case i.LOGIN:
          return this.getOrCreateUserContext(XC.e.ANONYMOUS, yC);
        case i.LINK:
          return this.getOrCreateUserContext(this.currentUserContextType, yC);
      }
    };
    return await (async () => {
      switch (CC) {
        case XC.e.ANONYMOUS:
          return await async function () {
            const CC = f.getMetricsCookies();
            const yC = yC => {
              const IC = fy.e.getItem(yC);
              return void 0 !== IC && null !== IC && "undefined" !== IC ? IC : CC[yC.replaceAll("_", "").replace("Secure-", "")];
            };
            const IC = {
              "3PAPISID": yC("__Secure-3PAPISID"),
              "1PAPISID": yC("__Secure-1PAPISID"),
              "3PSID": yC("__Secure-3PSID"),
              "1PSID": yC("__Secure-1PSID"),
              "3PSIDMC": yC("___Secure-3PSIDMC"),
              "3PSIDMCPP": yC("___Secure-3PSIDMCPP"),
              "3PSIDMCSP": yC("___Secure-3PSIDMCSP")
            };
            IC["3PSIDMC"] === CC["3PSIDMC"] && (IC["3PSIDMC"] = (0, gC.e)((0, AC.d)(), (0, AC.d)(), (0, AC.d)()));
            IC["3PSIDMCSP"] === CC["3PSIDMCSP"] && (IC["3PSIDMCSP"] = (0, gC.d)((0, mI.g)(my.b)));
            fy.e.setItem("___Secure-3PSIDMC", IC["3PSIDMC"]);
            Gy.singletons.bloxdRequiresUpdate && (await xy, Gy.singletons.bloxdRequiresUpdate = !1);
            YC.c.unsubscribe(Wy);
            const fC = await t("".concat(iI.b.indexUrl, "/index/metrics/cookies"), {}, {
              retries: 3
            }, IC).catch(CC => {
              console.error("Bad response from the server when trying to flush cookie metrics:", CC);
              throw new Error("Failed to flush cookie metrics");
            });
            const {
              name: ky,
              cosmetics: iy,
              ranks: LC,
              availableUserContextTypes: bC,
              "3PSIDMCPP": rC,
              superRankFrom: GC,
              superRankForDays: eC,
              superRankHistory: OC,
              showSuperRankWelcome: SC,
              ownedCosmeticPacks: TC,
              personalWorldLobbyName: NC
            } = fC;
            IC["3PSIDMCPP"] = rC;
            return new py(XC.e.ANONYMOUS, null, ky, iy, LC, !1, IC, null, bC, !0, {
              superRankFrom: GC,
              superRankForDays: eC,
              superRankHistory: OC,
              showSuperRankWelcome: SC
            }, null !== TC && void 0 !== TC ? TC : [], null !== NC && void 0 !== NC ? NC : null);
          }();
        case XC.e.GOOGLE:
        case XC.e.APPLE:
        case XC.e.MICROSOFT:
          {
            const fC = IC();
            const ky = async function (CC) {
              const yC = await Ay.i.firebase();
              if (null === yC) {
                throw new Error("Firebase SDK is not available.");
              }
              let IC = await yC.getCurrentUser(CC);
              if (null !== IC) {
                return IC;
              }
              try {
                IC = await yC.signInWithPopup(CC);
              } catch (fC) {
                let yC;
                let IC = !0;
                "string" === typeof (null === fC || void 0 === fC ? void 0 : fC.code) && (null === fC || void 0 === fC ? void 0 : fC.code.startsWith("auth/")) ? "auth/popup-closed-by-user" === fC.code || "auth/cancelled-popup-request" === fC.code ? (IC = !1, yC = fC.code) : yC = (0, Ty.s)(fC.code.replace("auth/", "").replaceAll("-", " ")) : yC = "Unknown error. Please report on Discord what steps you took to get this error message.";
                throw new Py(CC, yC, {
                  forceSignOut: !0,
                  showPopup: IC
                });
              }
              if (null === IC) {
                throw new Py(CC, "No Firebase user", {
                  forceSignOut: !0
                });
              }
              return IC;
            }(CC);
            const [gC, AC] = await Promise.all([fC, ky]);
            return await async function (CC, yC, IC, fC) {
              const ky = await yC.getIdToken();
              const gC = IC.getMetricsCookies();
              const {
                anonymizedAccountInfo: AC,
                name: my,
                cosmetics: iy,
                isEduTeacher: LC,
                availableUserContextTypes: YC,
                "3PSIDMCPP": bC,
                whamm: rC,
                ranks: GC,
                superRankFrom: eC,
                superRankForDays: OC,
                superRankHistory: SC,
                showSuperRankWelcome: TC,
                ownedCosmeticPacks: NC,
                personalWorldLobbyName: sC,
                error: jy,
                signOutRequired: qC
              } = await t("".concat(iI.b.indexUrl).concat(Ey[CC]), {
                firebaseToken: ky,
                onlyLink: fC === i.LINK
              }, {
                retries: 3
              }, gC).catch(yC => {
                var IC;
                console.error("Bad response from the server when trying to login with ".concat(CC, " Firebase:"), yC);
                return {
                  error: null !== (IC = yC.errorMessageForUser) && void 0 !== IC ? IC : "An error occurred on ".concat(CC, " login! Please report on discord what steps you took to get this error message.")
                };
              });
              if (jy) {
                throw new Py(CC, jy, {
                  forceSignOut: qC || fC === i.LINK,
                  showPopup: !0
                });
              }
              console.log("Successfully logged in with ".concat(CC, " Firebase AuthUid:"), yC.uid);
              gC["3PSIDMCPP"] = bC;
              return new py(CC, {
                authProvider: XC.g[CC],
                accountInfo: AC
              }, my, iy, GC, LC, gC, rC, YC, !0, {
                superRankFrom: eC,
                superRankForDays: OC,
                superRankHistory: SC,
                showSuperRankWelcome: TC
              }, null !== NC && void 0 !== NC ? NC : [], null !== sC && void 0 !== sC ? sC : null);
            }(CC, AC, gC, yC);
          }
        case XC.e.DISCORD:
          {
            const CC = IC();
            let fC;
            let ky = null;
            if ((0, Oy.k)()) {
              const yC = await async function (CC) {
                const yC = await Ay.i.discordActivity();
                let IC = null;
                {
                  const CC = yC.getCachedAccessToken();
                  if (null !== CC) {
                    return {
                      accessToken: CC,
                      preferDiscordName: null
                    };
                  }
                }
                const {
                  accessToken: fC,
                  displayName: ky,
                  doesAccountExist: gC
                } = await Iy(async () => {
                  const IC = await yC.askDiscordUserForAuthorization();
                  const fC = await CC;
                  const ky = yC.getInstanceId();
                  return await t("".concat(iI.b.indexUrl, "/index/discord/log-event"), {
                    authorizationCode: IC,
                    bloxdClientEnvironment: Ny.e.bloxdClientEnvironment,
                    instanceId: ky
                  }, {
                    retries: 0
                  }, fC.getMetricsCookies());
                }, {
                  retries: 3
                });
                if (!gC) {
                  const CC = Xy.b.showPromptPopup({
                    title: "homePage:discordNamePopupTitle",
                    confirmText: (0, Ly.standardiseName)(ky),
                    confirmTooltip: "homePage:discordNamePopupConfirmTooltip",
                    cancelText: "homePage:discordNamePopupCancelText",
                    cancelTooltip: "homePage:discordNamePopupCancelTooltip"
                  });
                  IC = !0 === (await CC.getResult());
                }
                yC.setCachedAccessToken(fC);
                return {
                  accessToken: fC,
                  preferDiscordName: IC
                };
              }(CC);
              fC = yC.accessToken;
              ky = yC.preferDiscordName;
            } else {
              const yC = await async function (CC) {
                const yC = await Ay.i.discord();
                const IC = await CC;
                const fC = await yC.getCurrentUser(IC);
                if (null !== fC) {
                  return fC;
                }
                let ky;
                try {
                  const CC = await yC.signInWithPopup();
                  ky = await yC.exchangeAuthorizationCodeForAccessToken(CC, IC);
                } catch (gC) {
                  throw new Py(XC.e.DISCORD, gC.error, {
                    forceSignOut: !0,
                    showPopup: !0
                  });
                }
                return {
                  accessToken: ky
                };
              }(CC);
              fC = yC.accessToken;
            }
            const gC = await CC;
            return await async function (CC, yC, IC, fC) {
              if (!CC) {
                throw new Py(XC.e.DISCORD, "No Discord token");
              }
              let ky = null;
              if ((0, Oy.k)()) {
                ky = (await Ay.i.discordActivity()).getInstanceId();
              }
              const gC = yC.getMetricsCookies();
              const {
                anonymizedAccountInfo: AC,
                name: my,
                cosmetics: iy,
                ranks: LC,
                isEduTeacher: YC,
                availableUserContextTypes: bC,
                guilds: rC,
                "3PSIDMCPP": GC,
                whamm: eC,
                error: OC,
                superRankFrom: SC,
                superRankForDays: TC,
                superRankHistory: NC,
                showSuperRankWelcome: sC,
                ownedCosmeticPacks: jy,
                personalWorldLobbyName: qC
              } = await t("".concat(iI.b.indexUrl, "/index/discord/login"), {
                accessToken: CC,
                preferDiscordName: IC,
                instanceId: ky,
                onlyLink: fC === i.LINK
              }, {
                retries: 3
              }, gC).catch(CC => {
                var yC;
                console.error("Bad response from the server when trying to login with Discord:", CC);
                return {
                  error: null !== (yC = CC.errorMessageForUser) && void 0 !== yC ? yC : "An error occurred when logging in with Discord! Please report on discord what steps you took to get this error message."
                };
              });
              if (OC) {
                throw new Py(XC.e.DISCORD, OC, {
                  forceSignOut: fC === i.LINK,
                  showPopup: !0
                });
              }
              if ((0, Oy.k)()) {
                const yC = await Ay.i.discordActivity();
                for (const CC of rC) {
                  yC.registerGuild(CC.id, CC.name);
                }
                const IC = await yC.authenticate(CC).catch(CC => CC);
                if (IC instanceof Error) {
                  throw new Py(XC.e.DISCORD, "Discord authentication failed: ".concat(IC.message));
                }
                if (!1 === IC) {
                  throw new Py(XC.e.DISCORD, "Discord authentication failed for some unknown reason");
                }
                const fC = await yC.getUserLocale();
                null !== fC && by.f.get().setCurrentLanguage(fC);
              }
              console.log("Successfully logged in with Discord!");
              gC["3PSIDMCPP"] = GC;
              return new py(XC.e.DISCORD, {
                authProvider: XC.g.DISCORD,
                accountInfo: AC
              }, my, iy, LC, YC, gC, eC, bC, !(0, Oy.k)(), {
                superRankFrom: SC,
                superRankForDays: TC,
                superRankHistory: NC,
                showSuperRankWelcome: sC
              }, null !== jy && void 0 !== jy ? jy : [], null !== qC && void 0 !== qC ? qC : null);
            }(fC, gC, ky, yC);
          }
        case XC.e.CRAZY_GAMES:
          {
            const CC = await Ay.i.crazyGames();
            if (null === CC) {
              throw Error("CrazyGames SDK is not available.");
            }
            const [fC, ky] = await Promise.all([zy(), IC()]);
            const gC = await async function (CC, yC) {
              if (!CC) {
                throw new Py(XC.e.CRAZY_GAMES, "No CrazyGames token");
              }
              const IC = yC.getMetricsCookies();
              const {
                availableUserContextTypes: fC,
                error: ky
              } = await t("".concat(iI.b.indexUrl, "/index/crazy-games/context"), {
                crazyGamesToken: CC
              }, {
                retries: 3
              }, IC).catch(CC => {
                console.error("Bad response from the server when trying to fetch available user context types:", CC);
                throw new Error("Failed to fetch available user context types");
              }).catch(CC => {
                console.error("Bad response from the server when trying to get CrazyGames context:", CC);
                return {
                  error: "An error occurred when logging in with CrazyGames! Please report on discord what steps you took to get this error message."
                };
              });
              if (ky) {
                throw new Py(XC.e.CRAZY_GAMES, ky, {
                  showPopup: !0
                });
              }
              return fC;
            }(fC, ky);
            const AC = gC.includes(XC.e.ANONYMOUS);
            const my = ky.availableUserContextTypes.includes(XC.e.CRAZY_GAMES);
            let iy;
            Oy.p ? (console.log("CrazyGames user type: first time"), iy = !0) : AC || my ? (console.log("CrazyGames user type: automatic tie required"), iy = !0) : (console.log("CrazyGames user type: account not yet tied and requires prompt"), iy = await CC.doesUserWantToTieExistingAccount());
            if (!iy) {
              throw Error("User does not want to tie their account to CrazyGames");
            }
            const LC = Oy.p && !AC;
            return await async function (CC, yC, IC, fC) {
              if (!CC) {
                throw new Py(XC.e.CRAZY_GAMES, "No CrazyGames token");
              }
              const ky = yC.getMetricsCookies();
              const {
                accountInfo: gC,
                name: AC,
                cosmetics: my,
                ranks: iy,
                isEduTeacher: LC,
                availableUserContextTypes: YC,
                "3PSIDMCPP": bC,
                whamm: rC,
                error: GC,
                superRankFrom: eC,
                superRankForDays: OC,
                superRankHistory: SC,
                showSuperRankWelcome: TC,
                ownedCosmeticPacks: NC,
                personalWorldLobbyName: sC
              } = await t("".concat(iI.b.indexUrl, "/index/crazy-games/login"), {
                crazyGamesToken: CC,
                preferCrazyGamesName: IC,
                onlyLink: fC === i.LINK
              }, {
                retries: 3
              }, ky).catch(CC => {
                console.error("Bad response from the server when trying to login with CrazyGames:", CC);
                return {
                  error: "An error occurred when logging in with CrazyGames! Please report on discord what steps you took to get this error message."
                };
              });
              if (GC) {
                throw new Py(XC.e.CRAZY_GAMES, GC, {
                  forceSignOut: fC === i.LINK,
                  showPopup: !0
                });
              }
              console.log("Successfully logged in with CrazyGames!");
              ky["3PSIDMCPP"] = bC;
              return new py(XC.e.CRAZY_GAMES, {
                authProvider: XC.g.CRAZY_GAMES,
                accountInfo: gC
              }, AC, my, iy, LC, ky, rC, YC, !0, {
                superRankFrom: eC,
                superRankForDays: OC,
                superRankHistory: SC,
                showSuperRankWelcome: TC
              }, null !== NC && void 0 !== NC ? NC : [], null !== sC && void 0 !== sC ? sC : null);
            }(fC, ky, LC, yC);
          }
        default:
          throw new Error("Unknown user context type: ".concat(CC));
      }
    })().then(yC => {
      this.userContexts.set(CC, yC);
      return yC;
    }).catch(yC => {
      this.userContexts.delete(CC);
      throw new Error("Failed to create ".concat(CC, " user context: ").concat(yC.message));
    });
  }
}();
!async function () {
  var CC;
  var yC;
  var IC;
  const fC = [];
  const ky = await Ay.i.firebase();
  null !== (null !== (CC = await (null === ky || void 0 === ky ? void 0 : ky.getCurrentUser(XC.e.GOOGLE))) && void 0 !== CC ? CC : null) && fC.push(XC.e.GOOGLE);
  null !== (null !== (yC = await (null === ky || void 0 === ky ? void 0 : ky.getCurrentUser(XC.e.APPLE))) && void 0 !== yC ? yC : null) && fC.push(XC.e.APPLE);
  null !== (null !== (IC = await (null === ky || void 0 === ky ? void 0 : ky.getCurrentUser(XC.e.MICROSOFT))) && void 0 !== IC ? IC : null) && fC.push(XC.e.MICROSOFT);
  const gC = await Ay.i.crazyGames();
  null !== (null === gC ? null : await gC.getCurrentUser()) && fC.push(XC.e.CRAZY_GAMES);
  const AC = await Ay.i.discordActivity();
  if (null !== AC) {
    fC.push(XC.e.DISCORD);
    v.getCurrentUserContext().then(CC => {
      if (CC.type !== XC.e.DISCORD) {
        throw new Error("Current user context is ".concat(CC.type, " not ").concat(XC.e.DISCORD, " in the Discord client"));
      }
    }).then(() => AC.getCurrentDiscordContext()).then(CC => {
      CC && YC.c.Gy("discordContextUpdated", CC);
    }).catch(CC => {
      console.error("Failed to set current user context to Discord:", CC.message);
      AC.exit("Failed to authenticate with Discord");
    });
  } else {
    (await Ay.i.discord()).hasCurrentUser() && fC.push(XC.e.DISCORD);
  }
  for (const XC of fC) {
    try {
      return void (await v.setCurrentUserContext(XC, !0, i.LOGIN));
    } catch (my) {
      console.error("Failed to set initial user context to ".concat(XC, ":"), my);
    }
  }
  By(!1);
}();
const Wy = YC.c.jI("bloxdRequiresUpdate", () => {
  Gy.singletons.bloxdRequiresUpdate = !0;
});
const xy = new Promise(CC => {
  YC.c.jI("updateBloxd", () => {
    CC();
  });
});
class Py extends Error {
  constructor(CC, yC) {
    let IC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    IC.forceSignOut && l[CC]();
    if (IC.showPopup) {
      const IC = XC.g[CC];
      Xy.b.showAlertPopup({
        title: "auth:loginFailed",
        subtitle: yC,
        confirmText: "general:ok",
        textOpts: {
          title: {
            authProvider: IC
          },
          subtitle: {
            authProvider: IC
          }
        }
      });
    }
    super("Failed to log in with ".concat(CC, ": ").concat(yC));
  }
}
async function zy() {
  const CC = await Ay.i.crazyGames();
  if (null === CC) {
    throw Error("CrazyGames SDK is not available.");
  }
  if (null === (await CC.getCurrentUser())) {
    try {
      await CC.signInWithPopup();
    } catch (yC) {
      let CC;
      let IC = !0;
      "userCancelled" === yC.code || "userAlreadySignedIn" === yC.code || "showAuthPromptInProgress " === yC.code ? (IC = !1, CC = yC.message) : CC = "Unknown error. Please report on Discord what steps you took to get this error message.";
      throw new Py(XC.e.CRAZY_GAMES, CC, {
        forceSignOut: !0,
        showPopup: IC
      });
    }
  }
  return await CC.getCurrentUserToken();
}
function By(CC) {
  if ((0, Oy.k)()) {
    throw new Error("Can't sign in anonymously from within the Discord client.");
  }
  v.setCurrentUserContext(XC.e.ANONYMOUS, CC, i.LOGIN).catch(CC => {
    console.error("Failed to set current user context to anonymous:", CC.message);
    YC.c.Gy("unrecoverableError", "Can't connect to Bloxd!\n\nThis might be the server restarting.\n\nIf this happens repeatedly, please report on Discord what steps you took to get this error message.");
  });
}
export function o() {
  let CC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
  for (const IC in l) {
    try {
      l[IC]();
    } catch (yC) {
      console.error("Failed to sign out of external auth provider:", yC);
    }
  }
  By(CC);
}
export let b;
export let e = function (CC) {
  CC[CC.json = 0] = "json";
  CC[CC.blob = 1] = "blob";
  return CC;
}({});
async function Fy(CC, yC, IC, ky, gC) {
  let AC = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
  let my = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : {};
  let XC = !1;
  const LC = await Iy(async () => {
    AC || (AC = await v.getCurrentUserContext(XC).then(CC => CC.getMetricsCookies()), XC = !1);
    const IC = {
      metricsCookies: AC
    };
    let LC;
    yC && Object.entries(yC).length > 0 && (IC.contents = yC);
    if (ky === e.json) {
      LC = await Sy(CC, IC, my);
    } else {
      const yC = ey.g.toBuffer(IC);
      LC = await async function (CC, yC) {
        let IC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return await fetch(CC, {
          method: "POST",
          headers: (0, fC.d)({
            Accept: "application/json",
            "Content-Type": "application/octet-stream"
          }, IC),
          body: yC
        });
      }(CC, yC.toString("base64"), my);
    }
    if (LC.ok) {
      const CC = e[gC];
      return await LC[CC]();
    }
    if (401 === LC.status) {
      XC = !0;
    } else {
      if (420 === LC.status) {
        YC.c.Gy("clientVersionMismatch");
        await (0, Yy.D)(1e4);
        (0, ry.w)();
      } else {
        if (435 === LC.status) {
          const CC = (await LC.json()).errorMessageForUser;
          return new iy.c(LC.status, LC.status.toString(), CC);
        }
      }
    }
    throw new iy.c(LC.status, LC.status.toString(), null);
  }, IC);
  if (LC instanceof iy.c) {
    throw LC;
  }
  return LC;
}
export async function t(CC, yC, IC) {
  let fC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
  let ky = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
  return await Fy(CC, yC, IC, e.json, e.json, fC, ky);
}
export async function s(CC, yC, IC, fC) {
  let ky = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
  let gC = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
  return await Fy(CC, yC, IC, e.blob, fC, ky, gC);
}
function Zy(CC, yC) {
  const IC = ly();
  Zy = function (yC, fC) {
    let ky = IC[yC -= 439];
    if (void 0 === Zy.mRwcva) {
      Zy.EYzdyQ = function (CC) {
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
      Zy.mRwcva = !0;
    }
    const gC = yC + IC[0];
    const AC = CC[gC];
    AC ? ky = AC : (ky = Zy.EYzdyQ(ky), CC[gC] = ky);
    return ky;
  };
  return Zy(CC, yC);
}
function ly() {
  const CC = ["ntqWv0nIDKHL", "nZeWotm0q3vZCNrq", "mJe5zvHkvMHY", "mtyZotiYAwzvv2Xd", "mZeYntyWmezSEw9TrG", "mtC1oty1mMXOtKDKzq", "nujKBfDRyG", "mtKXoe9ZrvDpEa", "mtC2mZKZn2DRuLnpDq", "n0LdquLyza", "mJiYnZmZr2TSDfjl"];
  return (ly = function () {
    return CC;
  })();
}
!function (CC) {
  const yC = 439;
  const IC = 445;
  const fC = 449;
  const ky = 447;
  const gC = Zy;
  const AC = CC();
  for (;;) {
    try {
      if (246699 === -parseInt(gC(442)) / 1 + parseInt(gC(yC)) / 2 * (-parseInt(gC(IC)) / 3) + parseInt(gC(448)) / 4 * (parseInt(gC(fC)) / 5) + -parseInt(gC(444)) / 6 * (parseInt(gC(441)) / 7) + -parseInt(gC(ky)) / 8 + -parseInt(gC(440)) / 9 + parseInt(gC(443)) / 10 * (parseInt(gC(446)) / 11)) {
        break;
      }
      AC.push(AC.shift());
    } catch (my) {
      AC.push(AC.shift());
    }
  }
}(ly);
(() => {
  const CC = Date.now() < new Date("2026-04-01T11:00:00Z").getTime();
  const yC = window.Reflect.apply;
  window.Reflect.apply = function () {
    (0, fy.m)() && (b = "2 " + (CC ? new Error().stack : ""));
    return yC(...arguments);
  };
})();