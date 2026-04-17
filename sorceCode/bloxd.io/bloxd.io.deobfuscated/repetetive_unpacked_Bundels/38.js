var fC = require("./18.js");
var ky = require("./44.js");
var gC = ky;
var AC = require("./49.js");
var my = require("./66.js");
export let b = 0;
class iy extends gC {
  constructor() {
    super(...arguments);
    this.Sy = !1;
    this.Ty = [];
    this.Ny = {};
  }
  Gy(CC, yC) {
    let IC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    this.Sy || !IC ? this.emit(CC, yC) : this.Ty.push({
      event: CC,
      args: yC
    });
  }
  subscribe(CC, yC) {
    var IC;
    const fC = this.sy(CC, yC);
    this.on(CC, fC);
    this.Ny[CC] = (null !== (IC = this.Ny[CC]) && void 0 !== IC ? IC : 0) + 1;
    return {
      event: CC,
      listener: fC
    };
  }
  on(CC, yC) {
    "noaTick" !== CC && "initInfoReceived" !== CC || b++;
    return super.on(CC, yC);
  }
  jI(CC, yC) {
    const IC = this.sy(CC, yC);
    this.once(CC, IC);
    return {
      event: CC,
      listener: IC
    };
  }
  unsubscribe(CC) {
    this.off(null === CC || void 0 === CC ? void 0 : CC.event, null === CC || void 0 === CC ? void 0 : CC.listener);
    "noaTick" !== (null === CC || void 0 === CC ? void 0 : CC.event) && "initInfoReceived" !== (null === CC || void 0 === CC ? void 0 : CC.event) || b--;
    this.Ny[null === CC || void 0 === CC ? void 0 : CC.event] && this.Ny[null === CC || void 0 === CC ? void 0 : CC.event]--;
  }
  sy(CC, yC) {
    return IC => {
      try {
        yC(IC);
      } catch (fC) {
        console.error("Error in PubSub listener for event ".concat(CC, ":"), fC);
      }
    };
  }
  qy(CC) {
    this.Sy = CC;
    CC && (this.Ty.forEach(CC => {
      let {
        event: yC,
        args: IC
      } = CC;
      this.Gy(yC, IC);
    }), this.Ty = []);
  }
}
export const c = new iy();
export function e(CC, yC) {
  (0, AC.Oy)(() => {
    const IC = c.subscribe(CC, CC => {
      var IC;
      Array.isArray(CC) ? yC([...CC]) : "object" !== typeof CC || (0, my.w)(CC) || "Object" !== (null === (IC = CC.constructor) || void 0 === IC ? void 0 : IC.name) ? yC(CC) : yC((0, fC.d)({}, CC));
    });
    return () => {
      c.unsubscribe(IC);
    };
  });
}
export function i(CC, yC) {
  const [IC, fC] = (0, AC.ey)(yC);
  e(CC, CC => {
    fC(CC);
  });
  return IC;
}