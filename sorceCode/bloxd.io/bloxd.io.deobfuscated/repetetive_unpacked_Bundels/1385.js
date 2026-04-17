var fC = require("./1350.js");
var ky = require("./49.js");
var gC = require("./1388.js");
var AC = require("./1408.js");
var my = require("./1354.js");
var XC = require("./1336.js");
var iy = require("./1427.js");
var LC = require("./66.js");
var YC = require("./554.js");
var bC = YC;
var rC = require("./534.js");
function GC(CC) {
  let {
    body: yC,
    onClose: IC,
    duration: fC
  } = CC;
  const gC = (0, ky.useRef)(null);
  const [AC, my] = (0, ky.ey)(!1);
  const XC = (0, ky.useRef)(null);
  function YC() {
    my(!1);
    clearTimeout(XC.current);
  }
  (0, ky.Oy)(() => {
    my(!0);
    (0, LC.w)(fC) || (XC.current = setTimeout(() => {
      YC();
    }, fC));
  }, []);
  return (0, rC.jsx)(iy.d, {
    nodeRef: gC,
    in: AC,
    timeout: 300,
    className: "ToastNotification",
    unmountOnExit: !0,
    onExited: IC,
    children: (0, rC.jsxs)("div", {
      ref: gC,
      children: [(0, rC.jsx)("div", {
        className: "ToastNotificationClose",
        onClick: () => {
          YC();
        },
        children: (0, rC.jsx)("i", {
          className: "fas fa-x"
        })
      }), yC]
    })
  });
}
function eC(CC) {
  let {
    body: yC,
    middleScreenPopupContainerClassName: IC,
    middleScreenPopupClassName: fC,
    close: gC,
    disableExitButton: XC,
    disableBackground: iy,
    disablePressBackgroundToClose: LC
  } = CC;
  (0, ky.Oy)(() => {
    const CC = CC => {
      "Escape" !== CC.key || LC || (gC(), CC.stopPropagation());
    };
    document.documentElement.addEventListener("keydown", CC);
    return () => {
      document.documentElement.removeEventListener("keydown", CC);
    };
  }, []);
  return (0, rC.jsxs)(my.e, {
    hide: gC,
    containerClassName: bC("PopupNotification", {
      [IC]: IC
    }),
    className: bC("PopupNotificationWrapper", {
      [fC]: fC
    }),
    disableBackground: null !== iy && void 0 !== iy && iy,
    disablePressBackgroundToClose: null !== LC && void 0 !== LC && LC,
    children: [!XC && (0, rC.jsx)(AC.k, {
      className: "PopupNotificationExitButton",
      onClick: gC
    }), yC]
  });
}
function OC(CC) {
  let {
    icon: yC,
    title: IC,
    subtitle: fC,
    confirm: ky,
    cancel: my,
    onClickBackground: iy,
    textOpts: LC,
    disableBackground: YC
  } = CC;
  const {
    t: bC
  } = (0, XC.n)();
  const GC = (0, rC.jsxs)("div", {
    className: "PromptPopupNotification",
    children: [yC && (0, rC.jsx)("div", {
      className: "PromptPopupNotificationIcons",
      children: (0, rC.jsxs)(rC.Fragment, {
        children: [(0, rC.jsx)("i", {
          className: "fa-solid fa-".concat(yC)
        }), (0, rC.jsx)("i", {
          className: "fa-solid fa-".concat(yC)
        }), (0, rC.jsx)("i", {
          className: "fa-solid fa-".concat(yC)
        })]
      })
    }), (0, rC.jsx)("div", {
      className: "PromptPopupNotificationTitle SmallTextBold",
      children: bC(IC, null === LC || void 0 === LC ? void 0 : LC.title)
    }), fC && (0, rC.jsx)("div", {
      className: "PromptPopupNotificationSubtitle SmallTextLight",
      children: "string" === typeof fC ? bC(fC, null === LC || void 0 === LC ? void 0 : LC.subtitle) : fC
    }), (0, rC.jsxs)("div", {
      className: "PromptPopupNotificationBody",
      children: [(0, rC.jsx)(gC.f, {
        tooltipInner: (0, rC.jsx)("div", {
          className: "PromptPopupNotificationBodyButtonTooltip",
          children: bC(ky.tooltip, null === LC || void 0 === LC ? void 0 : LC.confirmTooltip)
        }),
        hideTooltip: !ky.tooltip,
        children: (0, rC.jsx)(AC.o, {
          className: "PromptPopupNotificationBodyButton PromptPopupNotificationBodyPrimaryButton",
          onClick: ky.onClick,
          children: bC(ky.text, null === LC || void 0 === LC ? void 0 : LC.confirmText)
        })
      }), my && (0, rC.jsx)(gC.f, {
        tooltipInner: (0, rC.jsx)("div", {
          className: "PromptPopupNotificationBodyButtonTooltip",
          children: bC(my.tooltip, null === LC || void 0 === LC ? void 0 : LC.cancelTooltip)
        }),
        hideTooltip: !my.tooltip,
        children: (0, rC.jsx)(AC.x, {
          className: "PromptPopupNotificationBodyButton",
          onClick: my.onClick,
          children: bC(my.text, null === LC || void 0 === LC ? void 0 : LC.cancelText)
        })
      })]
    })]
  });
  return (0, rC.jsx)(eC, {
    body: GC,
    close: iy,
    disableBackground: YC,
    disableExitButton: !0
  });
}
var SC = require("./44.js");
var TC = SC;
var NC = require("./1143.js");
const sC = new TC();
class jy {
  constructor(CC, yC, IC) {
    this.notification = CC;
    this.tearDownNotification = yC;
    this.onDonePromise = IC;
  }
  async waitUntilDone() {
    await this.onDonePromise;
  }
}
export let f = function (CC) {
  CC[CC.POPUP = 0] = "POPUP";
  CC[CC.TOAST = 1] = "TOAST";
  return CC;
}({});
const KC = {
  [f.POPUP]: new fC.d(),
  [f.TOAST]: new fC.d()
};
class pC {
  constructor(CC, yC) {
    this.resultPromise = CC;
    this.tearDownNotification = yC;
  }
  static create(CC, yC, IC) {
    let fC;
    const ky = new Promise(CC => {
      fC = () => {
        CC("notificationTornDown");
      };
    });
    const gC = Promise.race([IC, ky]);
    const AC = gC.then(() => {
      sC.emit("notificationRequestQueuesUpdated");
    });
    KC[CC].enqueue(new jy(yC, fC, AC));
    sC.emit("notificationRequestQueuesUpdated");
    return new pC(gC, fC);
  }
  async getResult() {
    return await this.resultPromise;
  }
}
export class b {
  static showAlertPopup(CC) {
    let yC;
    let {
      title: IC,
      subtitle: fC,
      confirmText: ky,
      confirmTooltip: gC,
      textOpts: AC,
      disableBackground: my
    } = CC;
    const XC = new Promise(CC => {
      yC = CC;
    });
    const iy = (0, rC.jsx)(OC, {
      title: IC,
      subtitle: fC,
      confirm: {
        text: ky,
        tooltip: gC,
        onClick: yC
      },
      onClickBackground: yC,
      textOpts: AC,
      disableBackground: my
    });
    return pC.create(f.POPUP, iy, XC);
  }
  static showPromptPopup(CC) {
    let yC;
    let {
      icon: IC,
      title: fC,
      subtitle: ky,
      confirmText: gC,
      confirmTooltip: AC,
      cancelText: my,
      cancelTooltip: XC,
      disableBackground: iy,
      unlockPointerKey: LC = null
    } = CC;
    const YC = new Promise(CC => {
      yC = CC;
    });
    const bC = (0, rC.jsx)(OC, {
      icon: IC,
      title: fC,
      subtitle: ky,
      confirm: {
        text: gC,
        tooltip: AC,
        onClick: () => {
          yC(!0);
        }
      },
      cancel: my ? {
        text: my,
        tooltip: XC,
        onClick: () => {
          yC(!1);
        }
      } : null,
      onClickBackground: my ? () => {
        yC(!1);
      } : () => {},
      disableBackground: iy
    });
    const GC = pC.create(f.POPUP, bC, YC);
    null !== LC && (NC.singletons.pointerLockWrapper.requestPointerUnlock(LC), GC.getResult().finally(() => {
      NC.singletons.pointerLockWrapper.removePointerUnlockRequest(LC);
    }));
    return GC;
  }
  static showCustomPopup(CC) {
    let yC;
    let {
      body: IC,
      middleScreenPopupContainerClassName: fC,
      middleScreenPopupClassName: ky,
      onClose: gC = () => {},
      disableExitButton: AC = !1,
      disablePressBackgroundToClose: my = !1,
      unlockPointerKey: XC = null
    } = CC;
    const iy = new Promise(CC => {
      yC = CC;
    });
    const LC = () => {
      gC();
      yC(!0);
    };
    const YC = (0, rC.jsx)(eC, {
      body: "function" === typeof IC ? IC(LC) : IC,
      middleScreenPopupContainerClassName: fC,
      middleScreenPopupClassName: ky,
      close: LC,
      disableExitButton: AC,
      disablePressBackgroundToClose: my
    });
    const bC = pC.create(f.POPUP, YC, iy);
    null !== XC && (NC.singletons.pointerLockWrapper.requestPointerUnlock(XC), bC.getResult().finally(() => {
      NC.singletons.pointerLockWrapper.removePointerUnlockRequest(XC);
    }));
    return bC;
  }
  static showToast(CC) {
    let yC;
    let {
      body: IC,
      duration: fC,
      onClose: gC = () => {}
    } = CC;
    const AC = new Promise(CC => {
      yC = CC;
    });
    const my = (0, rC.jsx)(ky.Fragment, {
      children: (0, rC.jsx)(GC, {
        body: IC,
        onClose: () => {
          yC(!0);
          gC();
        },
        duration: fC
      })
    }, this.uniqueToastKey++);
    return pC.create(f.TOAST, my, AC);
  }
}
export function h(CC) {
  const [yC, IC] = (0, ky.ey)(null);
  const fC = KC[CC];
  const gC = async () => {
    if (fC.IC()) {
      return void IC(null);
    }
    const CC = await fC.dequeue();
    IC(CC);
    try {
      await CC.waitUntilDone();
    } catch (yC) {
      console.error("Error while waiting for notification to resolve:", yC.stack);
    }
    fC.IC() && IC(null);
  };
  (0, ky.Oy)(() => {
    sC.addListener("notificationRequestQueuesUpdated", gC);
    return () => {
      sC.removeListener("notificationRequestQueuesUpdated", gC);
    };
  }, []);
  return {
    notificationRequest: yC,
    clearAllNotifications: () => {
      null === yC || void 0 === yC || yC.tearDownNotification();
      IC(null);
      fC.emptyQueue();
    }
  };
}
b.uniqueToastKey = 0;