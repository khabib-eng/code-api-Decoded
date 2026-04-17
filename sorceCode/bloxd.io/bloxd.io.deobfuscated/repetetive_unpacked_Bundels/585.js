class fC {
  constructor() {}
}
export class e extends fC {
  static value(CC) {
    return new gC(CC);
  }
  static ok() {
    return AC;
  }
  static error(CC, yC) {
    return new my(CC, void 0, yC);
  }
  static errorWithCode(CC, yC, IC) {
    return new my(CC, yC, IC);
  }
}
class gC extends fC {
  constructor(CC) {
    super();
    this.value = CC;
  }
  isError() {
    return !1;
  }
  asError() {
    throw new Error("Result is not an error");
  }
  getValue() {
    return this.value;
  }
}
const AC = new class extends fC {
  constructor() {
    super();
  }
  isError() {
    return !1;
  }
  asError() {
    throw new Error("Result is not an error");
  }
  getValue() {
    throw new Error("Result has no value");
  }
}();
class my extends fC {
  constructor(CC, yC, IC) {
    super();
    this.message = CC;
    this.code = yC;
    this.debugResult = IC;
  }
  isError() {
    return !0;
  }
  asError() {
    return this;
  }
  getValue() {
    throw new Error("Result is an error");
  }
  forward() {
    return new my(this.message, this.code, this.debugResult);
  }
}