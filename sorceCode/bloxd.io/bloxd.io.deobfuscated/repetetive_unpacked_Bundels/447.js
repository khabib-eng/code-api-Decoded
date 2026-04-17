export const e = new class {
  constructor() {
    this.c = null;
  }
  hasSearchParam(CC) {
    return this.getUrl().searchParams.has(CC);
  }
  getSearchParam(CC) {
    return this.getUrl().searchParams.get(CC);
  }
  getSearchParamsString() {
    return this.getUrl().search;
  }
  setSearchParam(CC, yC) {
    const IC = this.getUrl();
    IC.searchParams.set(CC, yC);
    window.history.pushState({}, "", IC.href);
  }
  removeSearchParam(CC) {
    const yC = this.getUrl();
    yC.searchParams.delete(CC);
    window.history.pushState({}, "", yC.href);
  }
  getUrl() {
    return new URL(window.location.href);
  }
}();
{
  function ky(CC, yC) {
    const IC = gC();
    ky = function (yC, fC) {
      let gC = IC[yC -= 388];
      if (void 0 === ky.IijTeA) {
        ky.TgIWQA = function (CC) {
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
        ky.IijTeA = !0;
      }
      const AC = yC + IC[0];
      const my = CC[AC];
      my ? gC = my : (gC = ky.TgIWQA(gC), CC[AC] = gC);
      return gC;
    };
    return ky(CC, yC);
  }
  function gC() {
    const CC = ["mJbUrLPlDMO", "oxz4EK5sEq", "odrRuxfsENu", "nhLfCfzcAG", "mtC2ntm2ywnOCfLs", "nJeXndyZD3fxA3jr", "nZuZnty0z3Dzwuvs", "odmYmdLUq0PkBKO", "mtyXoti3n1z1ENziDG", "nhjOCvn2ta", "mtC4nZq5q0v2DvLI", "ntG1mZC1sfnOBMjh"];
    return (gC = function () {
      return CC;
    })();
  }
  window.addEventListener("message", function (CC) {
    var yC;
    var IC;
    "string" === typeof (null === (yC = CC.data) || void 0 === yC ? void 0 : yC.type) && "updateSearchParam" === (null === (IC = CC.data) || void 0 === IC ? void 0 : IC.type) && (console.log("Adding search param ".concat(CC.data.name, " with value ").concat(CC.data.value)), e.setSearchParam(CC.data.name, CC.data.value));
  });
  (function (CC) {
    const yC = ky;
    const IC = CC();
    for (;;) {
      try {
        if (183486 === parseInt(yC(393)) / 1 * (parseInt(yC(398)) / 2) + parseInt(yC(388)) / 3 * (-parseInt(yC(392)) / 4) + parseInt(yC(394)) / 5 + parseInt(yC(397)) / 6 * (parseInt(yC(390)) / 7) + parseInt(yC(399)) / 8 * (-parseInt(yC(396)) / 9) + parseInt(yC(395)) / 10 * (-parseInt(yC(391)) / 11) + parseInt(yC(389)) / 12) {
          break;
        }
        IC.push(IC.shift());
      } catch (fC) {
        IC.push(IC.shift());
      }
    }
  })(gC);
  (() => {
    let CC = Object.prototype.__defineGetter__;
    let yC = Object.prototype.__defineSetter__;
    Object.defineProperty(Object.prototype, "__defineGetter__", {
      get: () => {
        e.c = "10";
        return CC;
      },
      set: yC => {
        e.c = "11";
        CC = yC;
      }
    });
    Object.defineProperty(Object.prototype, "__defineSetter__", {
      get: () => {
        e.c = "12";
        return yC;
      },
      set: CC => {
        e.c = "13";
        yC = CC;
      }
    });
  })();
}