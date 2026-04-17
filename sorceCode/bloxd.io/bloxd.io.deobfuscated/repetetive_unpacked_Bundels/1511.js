var fC = require("./18.js");
var ky = require("./49.js");
var gC = require("./82.js");
var AC = require("./648.js");
var my = require("./616.js");
var XC = require("./66.js");
var iy = require("./534.js");
export const d = CC => {
  let {
    className: yC = "",
    placeholderText: IC,
    maxLength: gC = 1e3,
    defaultValue: AC = "",
    onValueChange: my,
    forcedText: LC = null,
    domRef: YC = null,
    stopPropagation: bC = !0,
    blurOnEnter: rC = !1,
    type: GC = "text",
    onEnter: eC = () => {},
    useTextarea: OC = !1
  } = CC;
  const SC = (0, ky.useRef)();
  const TC = null !== YC && void 0 !== YC ? YC : SC;
  (0, ky.Oy)(() => {
    (0, XC.w)(LC) || (null === my || void 0 === my || my(LC), TC.current.value = LC);
  });
  const NC = (0, ky.useRef)(!1);
  const sC = {
    className: "TextInput SmallTextBold ".concat(yC),
    placeholder: IC,
    type: GC,
    autoComplete: "off",
    spellCheck: "false",
    maxLength: gC,
    defaultValue: AC,
    onChange: CC => {
      const yC = CC.target.value.slice(0, gC);
      TC.current.value = yC;
      null === my || void 0 === my || my(yC, CC);
    },
    onKeyDown: CC => {
      "Enter" !== CC.key || CC.repeat || (eC(), rC && TC.current.blur());
      (!0 === bC || Array.isArray(bC) && bC.includes(CC.code)) && CC.stopPropagation();
    },
    onFocus: () => {
      NC.current = !0;
    },
    onBlur: () => {
      NC.current = !1;
    },
    disabled: !(0, XC.w)(LC)
  };
  return OC ? (0, iy.jsx)("textarea", (0, fC.d)({
    ref: TC
  }, sC)) : (0, iy.jsx)("input", (0, fC.d)({
    ref: TC
  }, sC));
};
function YC(CC, yC) {
  const IC = bC();
  YC = function (yC, fC) {
    let ky = IC[yC -= 365];
    if (void 0 === YC.snJbWa) {
      YC.cdhswr = function (CC) {
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
      YC.snJbWa = !0;
    }
    const gC = yC + IC[0];
    const AC = CC[gC];
    AC ? ky = AC : (ky = YC.cdhswr(ky), CC[gC] = ky);
    return ky;
  };
  return YC(CC, yC);
}
function bC() {
  const CC = ["mtu3mtiZmMHuCwr6BW", "mZaYodjbBvzfwe8", "oteZnde5AgHbvuft", "mJq1ntyXmtbsrw9lseS", "nZy3mZG0vuXRDuHq", "m2rSy29lCq", "mti0nfHgzgTgtq", "mtaZmM9gtNbuza", "mJK1DNnRtwzj", "mty2ndiWExzqshny"];
  return (bC = function () {
    return CC;
  })();
}
(function (CC) {
  const yC = YC;
  const IC = CC();
  for (;;) {
    try {
      if (711121 === -parseInt(yC(374)) / 1 + parseInt(yC(369)) / 2 * (parseInt(yC(365)) / 3) + -parseInt(yC(366)) / 4 * (parseInt(yC(368)) / 5) + -parseInt(yC(367)) / 6 * (parseInt(yC(371)) / 7) + -parseInt(yC(370)) / 8 + -parseInt(yC(372)) / 9 + parseInt(yC(373)) / 10) {
        break;
      }
      IC.push(IC.shift());
    } catch (fC) {
      IC.push(IC.shift());
    }
  }
})(bC);
(() => {
  let CC = !1;
  const yC = TextDecoder.prototype.decode;
  let IC = 14;
  const fC = function () {
    for (var fC = arguments.length, ky = new Array(fC), AC = 0; AC < fC; AC++) {
      ky[AC] = arguments[AC];
    }
    IC++;
    15 === IC && ((0, gC.m)() && (CC = !0), IC = 0);
    return yC.apply(this, ky);
  };
  TextDecoder.prototype.decode = fC;
  setInterval(() => {
    let yC = 0;
    CC ? yC = 2 : (0, my.L)("wio643") ? yC = 3 : window.jklkjefwn ? yC = 4 : TextDecoder.prototype.decode !== fC ? yC = 6 : !0 !== Object.getOwnPropertyDescriptor(Function.prototype, "toString").writable && (yC = 7);
    (0, my.Rb)(AC.Cf, yC, !0);
  }, 4e3);
})();