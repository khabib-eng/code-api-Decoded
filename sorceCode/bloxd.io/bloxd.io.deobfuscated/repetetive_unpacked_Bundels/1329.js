var fC = require("./49.js");
var ky = require("./408.js");
var gC = require("./1336.js");
var AC = require("./1350.js");
var my = require("./1354.js");
var XC = require("./1143.js");
var iy = require("./1357.js");
var LC = require("./534.js");
class YC {
  constructor(CC, yC, IC) {
    this.resolveInternal = CC;
    this.rejectInternal = yC;
    this.userContext = IC;
    this.onFulfilled = void 0;
    this.onFulfilledPromise = new Promise(CC => {
      this.onFulfilled = CC;
    });
  }
  resolve(CC) {
    this.resolveInternal(CC);
    this.onFulfilled();
  }
  reject(CC) {
    this.rejectInternal(CC);
    this.onFulfilled();
  }
}
const bC = new AC.d();
let rC = !1;
const GC = {
  turnstileLoadedPromise: new Promise((CC, yC) => {
    window.onTurnstileLoaded = () => {
      CC();
    };
    (0, iy.e)("https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onTurnstileLoaded", {}, !1);
  }).then(() => {
    console.log("Turnstile libraries loaded");
  }),
  getTurnstileToken: async CC => new Promise((yC, IC) => {
    bC.enqueue(new YC(yC, IC, CC));
  }),
  tryShowWidgetPopup: () => {
    rC && TC(!0);
  }
};
const eC = {
  turnstileLoadedPromise: Promise.resolve(),
  getTurnstileToken: async CC => "[TURNSTILE_DISABLED]",
  tryShowWidgetPopup: () => {}
};
export const f = ky.g.useTurnstile ? GC : eC;
const SC = "turnstile-widget-popup";
function TC(CC) {
  console.log("Setting turnstile widget popup visibility to", CC);
  const yC = document.getElementById(SC);
  if (yC) {
    const IC = NC(CC);
    for (const CC in IC) {
      yC.style[CC] = IC[CC];
    }
  } else {
    console.error(new Error("Turnstile widget popup not found"));
  }
  CC ? XC.singletons.pointerLockWrapper.requestPointerUnlock("turnstileWidgetPopup") : XC.singletons.pointerLockWrapper.removePointerUnlockRequest("turnstileWidgetPopup");
}
function NC(CC) {
  return {
    display: CC ? "block" : "none"
  };
}
const sC = (0, fC.memo)(function () {
  const {
    t: CC
  } = (0, gC.n)();
  const yC = "turnstile-widget";
  const IC = async () => {
    const CC = await bC.dequeue();
    rC = !0;
    window.turnstile.render("#".concat(yC), {
      sitekey: "0x4AAAAAAAa4cz8QxEw-M2SE",
      theme: "dark",
      action: "Greenlight",
      retry: "never",
      "refresh-expired": "never",
      cData: CC.userContext.whamm,
      callback(yC) {
        CC.resolve(yC);
      },
      "error-callback"(yC) {
        CC.reject(new Error("Turnstile Error: ".concat(yC)));
      }
    });
    await CC.onFulfilledPromise;
  };
  (0, fC.Oy)(() => {
    GC.turnstileLoadedPromise.then(async () => {
      for (;;) {
        await IC();
        bC.IC() && (rC = !1, TC(!1));
      }
    });
  }, []);
  return (0, LC.jsx)("div", {
    id: SC,
    className: "TurnstileWidgetBody",
    style: NC(!1),
    children: (0, LC.jsxs)(my.e, {
      hide: () => {},
      children: [(0, LC.jsx)("div", {
        className: "TurnstileWidgetHeader SmallTextBold",
        children: CC("loadingPage:humanOrIronWatermelon")
      }), (0, LC.jsx)("div", {
        id: yC
      }), (0, LC.jsx)("div", {
        className: "TurnstileWidgetFooter SmallTextLight",
        children: (0, ky.k)(", ")
      })]
    })
  });
});
export const b = ky.g.useTurnstile && (0, LC.jsx)(sC, {});