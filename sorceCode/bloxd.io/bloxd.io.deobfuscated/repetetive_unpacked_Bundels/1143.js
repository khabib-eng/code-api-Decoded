import * as fC from "./616.js";
import * as ky from "./38.js";
import * as gC from "./408.js";
import * as AC from "./82.js";
import * as my from "./424.js";
import * as XC from "./14.js";
const iy = new class {
  constructor() {
    this.gC = void 0;
    this.pointerUnlockRequests = [];
    this.pointerUnlockCounter = 0;
    this.lastRemovePointerLock = 0;
    this.handleWindowBlur = () => {
      setTimeout(() => {
        var CC;
        const yC = document.activeElement;
        var IC;
        "iframe" === (null === yC || void 0 === yC || null === (CC = yC.tagName) || void 0 === CC ? void 0 : CC.toLowerCase()) && this.shouldHavePointerLock() && this.gC && (null === (IC = this.gC.container.element) || void 0 === IC || IC.focus());
      }, 0);
    };
    ky.c.on("noaTick", () => {
      this.updatePointerLock();
    });
    "undefined" !== typeof window && window.addEventListener("blur", this.handleWindowBlur);
  }
  shouldHavePointerLock() {
    return this.pointerUnlockRequests.length + this.pointerUnlockCounter === 0;
  }
  initNoa(CC) {
    this.gC = CC;
    this.gC.container.addListener("gainedPointerLock", () => {
      ky.c.Gy("pointerLockUpdate", !0);
    });
    this.gC.container.addListener("lostPointerLock", () => {
      ky.c.Gy("pointerLockUpdate", !1);
      Date.now() - this.lastRemovePointerLock > 500 && !(0, gC.W)() && AC.j.getItem("disableFullscreen") && null === XC.b.get("openEverythingMenuName") && XC.b.set({
        openEverythingMenuName: my.s.SETTINGS
      });
    });
  }
  requestPointerUnlock() {
    let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
    CC ? -1 === this.pointerUnlockRequests.indexOf(CC) && this.pointerUnlockRequests.push(CC) : this.pointerUnlockCounter++;
    this.updatePointerLock();
  }
  removePointerUnlockRequest() {
    let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
    CC ? (0, fC.Fb)(this.pointerUnlockRequests, CC) : this.pointerUnlockCounter = Math.max(this.pointerUnlockCounter - 1, 0);
    this.updatePointerLock();
  }
  updatePointerLock() {
    if ("touchOnly" !== (0, gC.A)()) {
      var CC;
      var yC;
      var IC;
      if (this.pointerUnlockRequests.length + this.pointerUnlockCounter === 0 && null === window.document.pointerLockElement) {
        null === (CC = this.gC) || void 0 === CC || CC.container.gL(!0);
        null === (yC = this.gC) || void 0 === yC || yC.container.element.focus();
      }
      if (this.pointerUnlockRequests.length + this.pointerUnlockCounter > 0 && null !== window.document.pointerLockElement) {
        null === (IC = this.gC) || void 0 === IC || IC.container.gL(!1);
        this.lastRemovePointerLock = Date.now();
      }
    }
  }
}();
"undefined" !== typeof window && (window.plwDebugInfo = () => {
  console.log(iy.pointerUnlockRequests, iy.pointerUnlockCounter, iy.lastRemovePointerLock);
});
export const singletons = {
  gC: null,
  pointerLockWrapper: iy,
  itemsClient: null,
  blocksClient: null,
  nonBlocksClient: null,
  localPlayerPickActionHelper: null,
  bloxdRequiresUpdate: !1,
  modeAttemptedPlay: null,
  discordContextAttemptedPlay: null,
  connectedLobbyName: null,
  connectedGameNameWithVariation: null,
  connectedWebsocketUrl: null,
  bloxd: null,
  clientSidePartyStateManager: null,
  HA: "v2"
};
export function sI() {
  return singletons.gC;
}
export function getBloxd() {
  return singletons.bloxd;
}
{
  function rC(CC, yC) {
    const IC = GC();
    return (rC = function (CC, yC) {
      return IC[CC -= 392];
    })(CC, yC);
  }
  function GC() {
    const CC = ["4610bHvvkw", "3688oIBXcp", "878754dpRmFy", "1210fdslsm", "2429136bUrtXS", "151fyeHii", "835623kMwBgy", "1876184bjRCvJ", "2069431LZPRFL"];
    return (GC = function () {
      return CC;
    })();
  }
  function eC() {
    const CC = ["10XjkNVT", "3506040YUtwpE", "14uQomUR", "309EYWLec", "33216911nNkQop", "413zpQpoO", "8350MdESeg", "1449335vjJUjE", "3262164ULcyuW", "55GtcRRo", "109256RaKzCC", "34620YLVRGf", "6uDKNUU", "197tmYlpJ"];
    return (eC = function () {
      return CC;
    })();
  }
  function OC(CC, yC) {
    const IC = eC();
    return (OC = function (CC, yC) {
      return IC[CC -= 256];
    })(CC, yC);
  }
  !function (CC) {
    const yC = rC;
    const IC = CC();
    for (;;) {
      try {
        if (218917 === parseInt(yC(392)) / 1 * (parseInt(yC(396)) / 2) + parseInt(yC(393)) / 3 + parseInt(yC(397)) / 4 * (-parseInt(yC(399)) / 5) + parseInt(yC(398)) / 6 + -parseInt(yC(395)) / 7 + parseInt(yC(394)) / 8 + -parseInt(yC(400)) / 9) {
          break;
        }
        IC.push(IC.shift());
      } catch (fC) {
        IC.push(IC.shift());
      }
    }
  }(GC);
  (() => {
    let CC = window.Error;
    Object.defineProperty(window, "Error", {
      get: () => CC,
      set(yC) {
        singletons.HA = "v6";
        CC = yC;
      },
      configurable: !0
    });
  })();
  (function (CC) {
    const yC = OC;
    const IC = CC();
    for (;;) {
      try {
        if (715252 === parseInt(yC(268)) / 1 * (-parseInt(yC(261)) / 2) + parseInt(yC(258)) / 3 * (-parseInt(yC(266)) / 4) + -parseInt(yC(262)) / 5 * (parseInt(yC(267)) / 6) + -parseInt(yC(260)) / 7 * (parseInt(yC(265)) / 8) + parseInt(yC(256)) / 9 * (-parseInt(yC(269)) / 10) + -parseInt(yC(264)) / 11 * (-parseInt(yC(263)) / 12) + parseInt(yC(259)) / 13 * (parseInt(yC(257)) / 14)) {
          break;
        }
        IC.push(IC.shift());
      } catch (fC) {
        IC.push(IC.shift());
      }
    }
  })(eC);
  (() => {
    let CC = window.Event;
    Object.defineProperty(window, "Event", {
      get: () => CC,
      set(yC) {
        singletons.HA = "v5";
        CC = yC;
      },
      configurable: !0
    });
  })();
}