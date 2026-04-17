const v = typeof performance === "object" && performance && typeof performance.now === "function" ? performance : Date;
const vF = () => v.now();
const vF2 = p => p === Infinity || (p2 => p2 && p2 === Math.floor(p2) && p2 > 0 && isFinite(p2))(p);
class C {
  constructor({
    max: EE = Infinity,
    ttl: UE,
    updateAgeOnGet: ME = false,
    checkAgeOnGet: zE = false,
    noUpdateTTL: FE = false,
    dispose: ZE,
    noDisposeOnSet: mU = false
  } = {}) {
    this.expirations = Object.create(null);
    this.data = new Map();
    this.expirationMap = new Map();
    if (UE !== undefined && !vF2(UE)) {
      throw new TypeError("ttl must be positive integer or Infinity if set");
    }
    if (!vF2(EE)) {
      throw new TypeError("max must be positive integer or Infinity");
    }
    this.ttl = UE;
    this.max = EE;
    this.updateAgeOnGet = !!ME;
    this.checkAgeOnGet = !!zE;
    this.noUpdateTTL = !!FE;
    this.noDisposeOnSet = !!mU;
    if (ZE !== undefined) {
      if (typeof ZE !== "function") {
        throw new TypeError("dispose must be function if set");
      }
      this.dispose = ZE;
    }
    this.timer = undefined;
    this.timerExpiration = undefined;
  }
  setTimer(p3, p4) {
    if (this.timerExpiration < p3) {
      return;
    }
    if (this.timer) {
      clearTimeout(this.timer);
    }
    const vSetTimeout2 = setTimeout(() => {
      this.timer = undefined;
      this.timerExpiration = undefined;
      this.purgeStale();
      for (const v2 in this.expirations) {
        this.setTimer(v2, v2 - vF());
        break;
      }
    }, p4);
    if (vSetTimeout2.unref) {
      vSetTimeout2.unref();
    }
    this.timerExpiration = p3;
    this.timer = vSetTimeout2;
  }
  cancelTimer() {
    if (this.timer) {
      clearTimeout(this.timer);
      this.timerExpiration = undefined;
      this.timer = undefined;
    }
  }
  cancelTimers() {
    process.emitWarning("TTLCache.cancelTimers has been renamed to TTLCache.cancelTimer (no \"s\"), and will be removed in the next major version update");
    return this.cancelTimer();
  }
  clear() {
    const v3 = this.dispose !== C.prototype.dispose ? [...this] : [];
    this.data.clear();
    this.expirationMap.clear();
    this.cancelTimer();
    this.expirations = Object.create(null);
    for (const [v4, v5] of v3) {
      this.dispose(v5, v4, "delete");
    }
  }
  setTTL(p5, p6 = this.ttl) {
    const v6 = this.expirationMap.get(p5);
    if (v6 !== undefined) {
      const v7 = this.expirations[v6];
      if (!v7 || v7.length <= 1) {
        delete this.expirations[v6];
      } else {
        this.expirations[v6] = v7.filter(p7 => p7 !== p5);
      }
    }
    if (p6 !== Infinity) {
      const v8 = Math.floor(vF() + p6);
      this.expirationMap.set(p5, v8);
      if (!this.expirations[v8]) {
        this.expirations[v8] = [];
        this.setTimer(v8, v);
      }
      this.expirations[v8].push(p5);
    } else {
      this.expirationMap.set(p5, Infinity);
    }
  }
  set(p8, p9, {
    ttl: ME = this.ttl,
    noUpdateTTL: zE = this.noUpdateTTL,
    noDisposeOnSet: FE = this.noDisposeOnSet
  } = {}) {
    if (!vF2(ME)) {
      throw new TypeError("ttl must be positive integer or Infinity");
    }
    if (this.expirationMap.has(p8)) {
      if (!zE) {
        this.setTTL(p8, vF);
      }
      const v9 = this.data.get(p8);
      if (v9 !== p9) {
        this.data.set(p8, p9);
        if (!FE) {
          this.dispose(v9, p8, "set");
        }
      }
    } else {
      this.setTTL(p8, ME);
      this.data.set(p8, p9);
    }
    while (this.size > this.max) {
      this.purgeToCapacity();
    }
    return this;
  }
  has(p10) {
    return this.data.has(p10);
  }
  getRemainingTTL(p11) {
    const v10 = this.expirationMap.get(p11);
    if (v10 === Infinity) {
      return v10;
    } else if (v10 !== undefined) {
      return Math.max(0, Math.ceil(v10 - vF()));
    } else {
      return 0;
    }
  }
  get(p12, {
    updateAgeOnGet: UE = this.updateAgeOnGet,
    ttl: ME = this.ttl,
    checkAgeOnGet: hE = this.checkAgeOnGet
  } = {}) {
    const v11 = this.data.get(p12);
    if (!hE || this.getRemainingTTL(p12) !== 0) {
      if (UE) {
        this.setTTL(p12, vF);
      }
      return v11;
    }
    this.delete(p12);
  }
  dispose(p13, p14) {}
  delete(p15) {
    const v12 = this.expirationMap.get(p15);
    if (v12 !== undefined) {
      const v13 = this.data.get(p15);
      this.data.delete(p15);
      this.expirationMap.delete(p15);
      const v14 = this.expirations[v12];
      if (v14) {
        if (v14.length <= 1) {
          delete this.expirations[v12];
        } else {
          this.expirations[v12] = v14.filter(p16 => p16 !== p15);
        }
      }
      this.dispose(v13, p15, "delete");
      if (this.size === 0) {
        this.cancelTimer();
      }
      return true;
    }
    return false;
  }
  purgeToCapacity() {
    for (const v15 in this.expirations) {
      const v16 = this.expirations[v15];
      if (!(this.size - v16.length >= this.max)) {
        const v17 = this.size - this.max;
        const vA = [];
        for (const v18 of v16.splice(0, v17)) {
          vA.push([v18, this.data.get(v18)]);
          this.data.delete(v18);
          this.expirationMap.delete(v18);
        }
        for (const [v19, v20] of vA) {
          this.dispose(v20, v19, "evict");
        }
        return;
      }
      {
        delete this.expirations[v15];
        const vA2 = [];
        for (const v21 of v16) {
          vA2.push([v21, this.data.get(v21)]);
          this.data.delete(v21);
          this.expirationMap.delete(v21);
        }
        for (const [v22, v23] of vA2) {
          this.dispose(v23, v22, "evict");
        }
      }
    }
  }
  get size() {
    return this.data.size;
  }
  purgeStale() {
    const v24 = Math.ceil(vF());
    for (const v25 in this.expirations) {
      if (v25 === "Infinity" || v25 > v24) {
        return;
      }
      const vA3 = [...(this.expirations[v25] || [])];
      const vA4 = [];
      delete this.expirations[v25];
      for (const v26 of vA3) {
        vA4.push([v26, this.data.get(v26)]);
        this.data.delete(v26);
        this.expirationMap.delete(v26);
      }
      for (const [v27, v28] of vA4) {
        this.dispose(v28, v27, "stale");
      }
    }
    if (this.size === 0) {
      this.cancelTimer();
    }
  }
  *entries() {
    for (const v29 in this.expirations) {
      for (const v30 of this.expirations[v29]) {
        yield [v30, this.data.get(v30)];
      }
    }
  }
  *keys() {
    for (const v31 in this.expirations) {
      for (const v32 of this.expirations[v31]) {
        yield v32;
      }
    }
  }
  *values() {
    for (const v33 in this.expirations) {
      for (const v34 of this.expirations[v33]) {
        yield this.data.get(v34);
      }
    }
  }
  [Symbol.iterator]() {
    return this.entries();
  }
}
module.exports = C;