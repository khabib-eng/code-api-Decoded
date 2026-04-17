const yC = "object" === typeof performance && performance && "function" === typeof performance.now ? performance : Date;
const IC = () => yC.now();
const fC = CC => CC === 1 / 0 || (CC => CC && CC === Math.floor(CC) && CC > 0 && isFinite(CC))(CC);
class ky {
  constructor() {
    let {
      max: CC = 1 / 0,
      ttl: yC,
      updateAgeOnGet: IC = !1,
      checkAgeOnGet: ky = !1,
      noUpdateTTL: gC = !1,
      dispose: AC,
      noDisposeOnSet: my = !1
    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    this.expirations = Object.create(null);
    this.data = new Map();
    this.expirationMap = new Map();
    if (void 0 !== yC && !fC(yC)) {
      throw new TypeError("ttl must be positive integer or Infinity if set");
    }
    if (!fC(CC)) {
      throw new TypeError("max must be positive integer or Infinity");
    }
    this.ttl = yC;
    this.max = CC;
    this.updateAgeOnGet = !!IC;
    this.checkAgeOnGet = !!ky;
    this.noUpdateTTL = !!gC;
    this.noDisposeOnSet = !!my;
    if (void 0 !== AC) {
      if ("function" !== typeof AC) {
        throw new TypeError("dispose must be function if set");
      }
      this.dispose = AC;
    }
    this.timer = void 0;
    this.timerExpiration = void 0;
  }
  setTimer(CC, yC) {
    if (this.timerExpiration < CC) {
      return;
    }
    this.timer && clearTimeout(this.timer);
    const fC = setTimeout(() => {
      this.timer = void 0;
      this.timerExpiration = void 0;
      this.purgeStale();
      for (const CC in this.expirations) {
        this.setTimer(CC, CC - IC());
        break;
      }
    }, yC);
    fC.unref && fC.unref();
    this.timerExpiration = CC;
    this.timer = fC;
  }
  cancelTimer() {
    this.timer && (clearTimeout(this.timer), this.timerExpiration = void 0, this.timer = void 0);
  }
  cancelTimers() {
    process.emitWarning('TTLCache.cancelTimers has been renamed to TTLCache.cancelTimer (no "s"), and will be removed in the next major version update');
    return this.cancelTimer();
  }
  clear() {
    const CC = this.dispose !== ky.prototype.dispose ? [...this] : [];
    this.data.clear();
    this.expirationMap.clear();
    this.cancelTimer();
    this.expirations = Object.create(null);
    for (const [yC, IC] of CC) {
      this.dispose(IC, yC, "delete");
    }
  }
  setTTL(CC) {
    let yC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.ttl;
    const fC = this.expirationMap.get(CC);
    if (void 0 !== fC) {
      const yC = this.expirations[fC];
      !yC || yC.length <= 1 ? delete this.expirations[fC] : this.expirations[fC] = yC.filter(yC => yC !== CC);
    }
    if (yC !== 1 / 0) {
      const fC = Math.floor(IC() + yC);
      this.expirationMap.set(CC, fC);
      this.expirations[fC] || (this.expirations[fC] = [], this.setTimer(fC, yC));
      this.expirations[fC].push(CC);
    } else {
      this.expirationMap.set(CC, 1 / 0);
    }
  }
  set(CC, yC) {
    let {
      ttl: IC = this.ttl,
      noUpdateTTL: ky = this.noUpdateTTL,
      noDisposeOnSet: gC = this.noDisposeOnSet
    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    if (!fC(IC)) {
      throw new TypeError("ttl must be positive integer or Infinity");
    }
    if (this.expirationMap.has(CC)) {
      ky || this.setTTL(CC, IC);
      const fC = this.data.get(CC);
      fC !== yC && (this.data.set(CC, yC), gC || this.dispose(fC, CC, "set"));
    } else {
      this.setTTL(CC, IC);
      this.data.set(CC, yC);
    }
    for (; this.size > this.max;) {
      this.purgeToCapacity();
    }
    return this;
  }
  has(CC) {
    return this.data.has(CC);
  }
  getRemainingTTL(CC) {
    const yC = this.expirationMap.get(CC);
    return yC === 1 / 0 ? yC : void 0 !== yC ? Math.max(0, Math.ceil(yC - IC())) : 0;
  }
  get(CC) {
    let {
      updateAgeOnGet: yC = this.updateAgeOnGet,
      ttl: IC = this.ttl,
      checkAgeOnGet: fC = this.checkAgeOnGet
    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    const ky = this.data.get(CC);
    if (!fC || 0 !== this.getRemainingTTL(CC)) {
      yC && this.setTTL(CC, IC);
      return ky;
    }
    this.delete(CC);
  }
  dispose(CC, yC) {}
  delete(CC) {
    const yC = this.expirationMap.get(CC);
    if (void 0 !== yC) {
      const IC = this.data.get(CC);
      this.data.delete(CC);
      this.expirationMap.delete(CC);
      const fC = this.expirations[yC];
      fC && (fC.length <= 1 ? delete this.expirations[yC] : this.expirations[yC] = fC.filter(yC => yC !== CC));
      this.dispose(IC, CC, "delete");
      0 === this.size && this.cancelTimer();
      return !0;
    }
    return !1;
  }
  purgeToCapacity() {
    for (const CC in this.expirations) {
      const yC = this.expirations[CC];
      if (!(this.size - yC.length >= this.max)) {
        const CC = this.size - this.max;
        const IC = [];
        for (const fC of yC.splice(0, CC)) {
          IC.push([fC, this.data.get(fC)]);
          this.data.delete(fC);
          this.expirationMap.delete(fC);
        }
        for (const [yC, fC] of IC) {
          this.dispose(fC, yC, "evict");
        }
        return;
      }
      {
        delete this.expirations[CC];
        const IC = [];
        for (const CC of yC) {
          IC.push([CC, this.data.get(CC)]);
          this.data.delete(CC);
          this.expirationMap.delete(CC);
        }
        for (const [CC, yC] of IC) {
          this.dispose(yC, CC, "evict");
        }
      }
    }
  }
  get size() {
    return this.data.size;
  }
  purgeStale() {
    const CC = Math.ceil(IC());
    for (const yC in this.expirations) {
      if ("Infinity" === yC || yC > CC) {
        return;
      }
      const IC = [...(this.expirations[yC] || [])];
      const fC = [];
      delete this.expirations[yC];
      for (const CC of IC) {
        fC.push([CC, this.data.get(CC)]);
        this.data.delete(CC);
        this.expirationMap.delete(CC);
      }
      for (const [CC, yC] of fC) {
        this.dispose(yC, CC, "stale");
      }
    }
    0 === this.size && this.cancelTimer();
  }
  *entries() {
    for (const CC in this.expirations) {
      for (const yC of this.expirations[CC]) {
        yield [yC, this.data.get(yC)];
      }
    }
  }
  *keys() {
    for (const CC in this.expirations) {
      for (const yC of this.expirations[CC]) {
        yield yC;
      }
    }
  }
  *values() {
    for (const CC in this.expirations) {
      for (const yC of this.expirations[CC]) {
        yield this.data.get(yC);
      }
    }
  }
  [Symbol.iterator]() {
    return this.entries();
  }
}
module.exports = ky;