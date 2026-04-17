var fC = require("./49.js");
var ky = require("./534.js");
export function c(CC) {
  let {
    showSignal: yC = 1,
    particleElement: IC = (0, ky.jsx)("div", {
      className: "DefaultConfettiParticle"
    })
  } = CC;
  const gC = (0, fC.useRef)(null);
  (0, fC.Oy)(() => {
    yC > 0 && (gC.current.classList.remove("ActivatedConfetti"), gC.current.offsetWidth, gC.current.classList.add("ActivatedConfetti"));
  }, [yC]);
  return (0, ky.jsx)("div", {
    ref: gC,
    className: "Confetti",
    style: {
      "--total-particles": 6
    },
    children: Array.from(Array(6).keys()).map((CC, yC) => (0, ky.jsx)("div", {
      className: "ConfettiParticle",
      style: {
        "--i": yC
      },
      children: IC
    }, yC))
  });
}