var fC = require("./73.js");
var ky = require("./78.js");
export const l = 36;
export const q = 51;
export const o = 46;
export function w(CC) {
  return void 0 === CC || null === CC;
}
const iy = 32;
const LC = 0 | Math.log2(iy);
const YC = iy - 1 | 0;
export function H(CC) {
  return CC >> LC;
}
export function t(CC) {
  return CC << LC;
}
export function J(CC) {
  return [CC[0] >> LC, CC[1] >> LC, CC[2] >> LC];
}
export function I(CC) {
  return CC & YC;
}
export function V(CC) {
  return [CC[0] & YC, CC[1] & YC, CC[2] & YC];
}
export function N(CC) {
  const yC = H(CC[0]);
  const IC = H(CC[1]);
  const fC = H(CC[2]);
  return "".concat(yC, "|").concat(IC, "|").concat(fC);
}
export function R(CC, yC, IC) {
  return [0 | Math.floor(CC / iy), 0 | Math.floor(yC / iy), 0 | Math.floor(IC / iy)];
}
class NC extends Error {
  constructor() {
    super("".concat(j.name, " has been mutated during iteration"));
  }
}
export class j {
  constructor() {
    this.storage = {};
    this.zeroStorage = {};
    this.mutationCountMask = 2147483647;
    this.mutationCount = 0;
    this.itemCount = 0;
  }
  set(CC, yC, IC, fC) {
    var ky;
    this.mutationCount = this.mutationCount + 1 & this.mutationCountMask;
    const gC = 1023 & CC | (1023 & yC) << 10 | (1023 & IC) << 20;
    if (Math.abs(CC) < 512 && Math.abs(yC) < 512 && Math.abs(IC) < 512) {
      var AC;
      const ky = null === (AC = this.zeroStorage[gC]) || void 0 === AC ? void 0 : AC.val;
      gC in this.zeroStorage || this.itemCount++;
      this.zeroStorage[gC] = {
        x: CC,
        y: yC,
        z: IC,
        val: fC
      };
      return ky;
    }
    const my = CC >> 10 & 1023 | (yC >> 10 & 1023) << 10 | (IC >> 10 & 1023) << 20;
    this.storage[my] || (this.storage[my] = {});
    const XC = this.storage[my];
    const iy = null === (ky = XC[gC]) || void 0 === ky ? void 0 : ky.val;
    gC in XC || this.itemCount++;
    XC[gC] = {
      x: CC,
      y: yC,
      z: IC,
      val: fC
    };
    return iy;
  }
  get(CC, yC, IC) {
    const fC = 1023 & CC | (1023 & yC) << 10 | (1023 & IC) << 20;
    if (Math.abs(CC) < 512 && Math.abs(yC) < 512 && Math.abs(IC) < 512) {
      const CC = this.zeroStorage[fC];
      return null === CC || void 0 === CC ? void 0 : CC.val;
    }
    const ky = CC >> 10 & 1023 | (yC >> 10 & 1023) << 10 | (IC >> 10 & 1023) << 20;
    if (!this.storage[ky]) {
      return;
    }
    const gC = this.storage[ky][fC];
    return null === gC || void 0 === gC ? void 0 : gC.val;
  }
  remove(CC, yC, IC) {
    this.mutationCount = this.mutationCount + 1 & this.mutationCountMask;
    const fC = 1023 & CC | (1023 & yC) << 10 | (1023 & IC) << 20;
    if (Math.abs(CC) < 512 && Math.abs(yC) < 512 && Math.abs(IC) < 512) {
      fC in this.zeroStorage && this.itemCount--;
      return void delete this.zeroStorage[fC];
    }
    const ky = CC >> 10 & 1023 | (yC >> 10 & 1023) << 10 | (IC >> 10 & 1023) << 20;
    const gC = this.storage[ky];
    gC && (fC in gC && this.itemCount--, delete gC[fC]);
  }
  removeBy(CC) {
    for (const {
      x: yC,
      y: IC,
      z: fC,
      val: ky
    } of this.iterate(!0)) {
      CC(yC, IC, fC, ky) && this.remove(yC, IC, fC);
    }
  }
  checkStoredInfo(CC, yC, IC, fC) {
    !fC || fC.x === CC && fC.y === yC && fC.z === IC || console.error(new Error("LocationStorage: storedInfo does not match requested coords. Passed coords ".concat(CC, ", ").concat(yC, ", ").concat(IC, ", existingCoords/storedInfo: ").concat(JSON.stringify(fC))).stack);
  }
  *iterate(CC) {
    const yC = this.mutationCount;
    for (const IC in this.zeroStorage) {
      yield this.zeroStorage[IC];
      if (!CC && yC !== this.mutationCount) {
        throw new NC();
      }
    }
    for (const IC in this.storage) {
      const fC = Number(IC);
      const ky = this.storage[fC];
      for (const IC in ky) {
        yield ky[IC];
        if (!CC && yC !== this.mutationCount) {
          throw new NC();
        }
      }
    }
  }
  entries() {
    return Array.from(this.iterate(!0));
  }
  [Symbol.iterator]() {
    return this.iterate(!1);
  }
  getNumItems() {
    return this.itemCount;
  }
  getNumItemsVerySlowly() {
    let CC = 0;
    for (const yC in this.storage) {
      CC += Object.keys(this.storage[yC]).length;
    }
    CC += Object.keys(this.zeroStorage).length;
    return CC;
  }
}
export function u(CC) {
  return JSON.stringify(CC);
}
export const z = fC.b * Number(atob("NQ==")) + Number(atob("MTM="));
export async function D(CC) {
  return new Promise((yC, IC) => {
    setTimeout(() => {
      yC();
    }, CC);
  });
}
export class r {
  constructor(CC) {
    this.a = void 0;
    let yC = 2166136261;
    for (let IC = 0; IC < CC.length; IC++) {
      yC = Math.imul(yC ^ CC.charCodeAt(IC), 16777619);
    }
    this.a = yC;
  }
  next() {
    let CC = this.a += 1831565813;
    CC = Math.imul(CC ^ CC >>> 15, 1 | CC);
    CC ^= CC + Math.imul(CC ^ CC >>> 7, 61 | CC);
    return ((CC ^ CC >>> 14) >>> 0) / 4294967296;
  }
}
export class b {
  constructor(CC) {
    this.keyToValueTable = CC;
    this.valueToKeyTable = void 0;
    const yC = {};
    for (const IC in this.keyToValueTable) {
      const CC = this.keyToValueTable[IC];
      if (void 0 !== yC[CC]) {
        throw new Error("Duplicate value found in bi-directional table: ".concat(String(CC)));
      }
      yC[CC] = IC;
    }
    this.valueToKeyTable = yC;
  }
  get(CC) {
    return this.keyToValueTable[CC];
  }
  reverseGet(CC) {
    return this.valueToKeyTable[CC];
  }
}
const HC = {
  Sword: ["Damage", "Attack Speed", "Critical Damage"],
  Helmet: ["Protection", "Health", "Health Regen"],
  Chestplate: ["Protection", "Health", "Health Regen"],
  Leggings: ["Protection", "Health", "Health Regen"],
  Boots: ["Protection", "Health", "Health Regen"],
  Gauntlets: ["Protection", "Health", "Health Regen"],
  Bow: ["Arrow Speed", "Arrow Damage", "Quick Charge"],
  Crossbow: ["Arrow Speed", "Arrow Damage", "Quick Charge"],
  Pickaxe: ["Break Speed", "Momentum", "Mining Yield", "Mining Aura"],
  Spade: ["Break Speed", "Momentum", "Digging Aura"],
  Axe: ["Break Speed", "Momentum", "Lumber Aura"],
  Hoe: ["Break Speed", "Momentum", "Farming Yield", "Farming Aura"],
  "Knight Sword": ["Damage", "Attack Speed", "Critical Damage", "Horizontal Knockback"],
  "Moonstone Pickaxe": ["Break Speed", "Momentum"],
  Stick: ["Horizontal Knockback", "Vertical Knockback", "Damage"],
  "Fur Chestplate": ["Protection", "Health", "Health Regen", "Knockback Resist"],
  "Spiked Boots": ["Protection", "Health", "Health Regen", "Stomp Damage"]
};
const aC = {
  "Tier 1": 1,
  "Tier 2": 2,
  "Tier 3": 3,
  "Tier 4": 4,
  "Tier 5": 5
};
export class f {
  constructor(CC) {
    this.suffixMapping = void 0;
    this.suffixMapping = Object.fromEntries(Object.entries(CC).map(CC => {
      let [yC, IC] = CC;
      const fC = IC.name;
      return void 0 !== HC[fC] ? [yC, fC] : [yC, fC.split(" ").at(-1)];
    }));
  }
  getPossibleEnchantmentsForItem(CC) {
    var yC;
    return null !== (yC = HC[this.suffixMapping[CC]]) && void 0 !== yC ? yC : [];
  }
  chooseRandomEnchantmentAttributes(CC, yC, IC) {
    const fC = [...IC];
    const gC = {
      enchantments: {},
      enchantmentTier: yC,
      id: (0, ky.d)()
    };
    const AC = aC[yC];
    for (let ky = 0; ky < AC; ky++) {
      var my;
      if (0 === fC.length) {
        console.error("Ran out of enchantments to choose from");
        break;
      }
      const {
        enchantments: yC
      } = gC;
      const IC = fC[Math.floor(CC.next() * fC.length)];
      yC[IC] = (null !== (my = yC[IC]) && void 0 !== my ? my : 0) + 1;
      yC[IC] >= UC && fC.splice(fC.indexOf(IC), 1);
    }
    return gC;
  }
}
const UC = 3;