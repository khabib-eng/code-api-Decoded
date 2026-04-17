var fC = require("./49.js");
var ky = require("./1559.js");
var gC = ky;
var AC = require("./38.js");
var my = require("./66.js");
var XC = require("./534.js");
const iy = gC;
let LC = window.matchMedia("(display-mode: fullscreen)").matches;
let YC = l();
const bC = () => {
  const CC = l();
  CC !== YC && (AC.c.Gy("displaymodeFullscreenChange", CC), YC = CC);
};
export function j() {
  return iy.isEnabled;
}
export function l() {
  return iy.isFullscreen || LC;
}
export function f() {
  return iy.isFullscreen;
}
export function s() {
  const [CC, yC] = (0, fC.ey)(l());
  (0, AC.e)("displaymodeFullscreenChange", CC => {
    yC(CC);
  });
  return CC;
}
export function r() {
  try {
    iy.toggle(void 0, {
      navigationUI: "hide"
    });
    window.screen.orientation.lock("landscape").catch(CC => {
      console.log("TOGGLE FULLSCREEN: Failed to lock screen to landscape");
    });
  } catch (CC) {
    console.error("Caught error while attempting to toggle full screen:", CC);
  }
}
export function p() {
  try {
    iy.request(void 0, {
      navigationUI: "hide"
    });
    window.screen.orientation.lock("landscape").catch(CC => {
      console.log("TOGGLE FULLSCREEN: Failed to lock screen to landscape");
    });
  } catch (CC) {
    console.error("Caught error while attempting to request full screen:", CC);
  }
}
export function k() {
  try {
    iy.exit();
  } catch (CC) {
    console.error("Caught error while attempting to exit full screen:", CC);
  }
}
function sC() {
  const CC = navigator.keyboard;
  return (0, my.w)(CC) || (0, my.w)(CC.lock) ? null : CC;
}
export function c() {
  const CC = s();
  return j() ? (0, XC.jsx)("i", {
    className: "fas ".concat(CC ? "fa-compress" : "fa-expand", " ScaleOnHover SmallTextBold"),
    onClick: () => {
      r();
    }
  }) : null;
}
iy.isEnabled && (iy.on("change", bC), iy.on("error", bC));
window.matchMedia("(display-mode: fullscreen)").addEventListener("change", CC => {
  let {
    matches: yC
  } = CC;
  LC = yC;
  bC();
});
AC.c.subscribe("displaymodeFullscreenChange", CC => {
  CC ? function () {
    const CC = sC();
    if (null !== CC) {
      try {
        CC.lock(["Escape", "F3", "F5", "F11"]);
        console.log("Keyboard locked");
      } catch (yC) {
        console.error("Failed to lock keyboard");
      }
    }
  }() : function () {
    const CC = sC();
    null !== CC && (CC.unlock(), console.log("Keyboard unlocked"));
  }();
});