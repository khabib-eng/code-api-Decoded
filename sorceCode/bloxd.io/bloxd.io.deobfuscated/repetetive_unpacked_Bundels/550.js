var fC = require("./49.js");
const ky = CC => {
  const yC = fC.useRef(CC);
  fC.Oy(() => {
    yC.current = CC;
  });
  return yC;
};
const gC = function (CC) {
  let yC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
  let IC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  const gC = ky(CC);
  const AC = fC.useRef();
  const my = [yC, IC, gC];
  function XC() {
    AC.current && clearTimeout(AC.current);
    AC.current = void 0;
  }
  function iy() {
    AC.current = void 0;
  }
  fC.Oy(() => XC, my);
  return fC.useCallback(function () {
    const CC = arguments;
    const {
      current: fC
    } = AC;
    if (void 0 === fC && IC) {
      AC.current = setTimeout(iy, yC);
      return gC.current.apply(null, CC);
    }
    fC && clearTimeout(fC);
    AC.current = setTimeout(() => {
      AC.current = void 0;
      gC.current.apply(null, CC);
    }, yC);
  }, my);
};
const AC = fC["undefined" !== typeof document && void 0 !== document.createElement ? "useLayoutEffect" : "Oy"];
const my = function (CC, yC, IC, ky) {
  const gC = fC.useRef(IC);
  const my = fC.useRef(ky);
  AC(() => {
    gC.current = IC;
    my.current = ky;
  });
  AC(() => {
    const IC = CC && "current" in CC ? CC.current : CC;
    if (!IC) {
      return;
    }
    let fC = 0;
    function ky() {
      if (!fC) {
        for (var CC = arguments.length, yC = new Array(CC), IC = 0; IC < CC; IC++) {
          yC[IC] = arguments[IC];
        }
        gC.current.apply(this, yC);
      }
    }
    IC.addEventListener(yC, ky);
    const AC = my.current;
    return () => {
      fC = 1;
      IC.removeEventListener(yC, ky);
      AC && AC();
    };
  }, [CC, yC]);
};
const XC = {};
const iy = "undefined" === typeof window ? null : window;
const LC = () => [document.documentElement.clientWidth, document.documentElement.clientHeight];
export const b = function () {
  let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : XC;
  const {
    wait: yC,
    leading: IC,
    initialWidth: ky = 0,
    initialHeight: AC = 0
  } = CC;
  const [YC, bC] = ((CC, yC, IC) => {
    const ky = fC.ey(CC);
    return [ky[0], gC(ky[1], yC, IC)];
  })("undefined" === typeof document ? [ky, AC] : LC, yC, IC);
  const rC = () => bC(LC);
  my(iy, "resize", rC);
  my(iy, "orientationchange", rC);
  return YC;
};
export const e = CC => b(CC)[0];