export class d {
  constructor(CC) {
    this.multipliers = {};
    this._onUpdate = void 0;
    this._onUpdate = CC;
  }
  setMultiplierType(CC, yC) {
    var IC;
    this.multipliers[CC] = yC;
    null === (IC = this._onUpdate) || void 0 === IC || IC.call(this);
  }
  removeMultiplier(CC) {
    var yC;
    delete this.multipliers[CC];
    null === (yC = this._onUpdate) || void 0 === yC || yC.call(this);
  }
  getMultiplierType(CC) {
    return this.multipliers[CC];
  }
  getTotalMultipliedVal() {
    let CC = 1;
    for (const yC in this.multipliers) {
      CC *= this.multipliers[yC];
    }
    return CC;
  }
}
class ky {
  constructor() {
    let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
    this.booleans = {};
    this._onUpdate = void 0;
    this._onUpdate = CC;
  }
  setBooleanType(CC, yC) {
    const IC = this._getTotalBooleanVal();
    this.booleans[CC] = yC;
    const fC = this.getTotalBooleanVal();
    var ky;
    fC !== IC && (null === (ky = this._onUpdate) || void 0 === ky || ky.call(this, fC, this.booleans));
    return fC;
  }
  removeBoolean(CC) {
    const yC = this.getTotalBooleanVal();
    delete this.booleans[CC];
    const IC = this.getTotalBooleanVal();
    var fC;
    IC !== yC && (null === (fC = this._onUpdate) || void 0 === fC || fC.call(this, IC, this.booleans));
    return IC;
  }
  getBooleanType(CC) {
    return this.booleans[CC];
  }
  getTotalBooleanVal() {
    throw new Error("This is an abstract class, use BooleanAndCombinator");
  }
  forceUpdate() {
    var CC;
    null === (CC = this._onUpdate) || void 0 === CC || CC.call(this, this.getTotalBooleanVal(), this.booleans);
  }
  _getTotalBooleanVal() {
    throw new Error("This is an abstract class, use BooleanAndCombinator");
  }
}
export class b extends ky {
  getTotalBooleanVal() {
    const CC = this._getTotalBooleanVal();
    if (null === CC) {
      throw new Error("Should not be gotten before at least 1 type has been initialised");
    }
    return CC;
  }
  _getTotalBooleanVal() {
    let CC = !1;
    let yC = !0;
    for (const IC in this.booleans) {
      CC = !0;
      yC && (yC = this.booleans[IC]);
    }
    return CC ? yC : null;
  }
}