var fC = require("./18.js");
var ky = require("./1143.js");
var gC = require("./616.js");
var AC = require("./648.js");
var my = require("./462.js");
var XC = require("./408.js");
var iy = require("./73.js");
var LC = require("./1666.js");
var YC = require("./82.js");
var bC = require("./471.js");
var rC = require("./1669.js");
var GC = require("./1357.js");
class eC {
  constructor() {
    this.leaveEventTypes = {};
    this.adBannersShown = new LC.e();
    this.adVideosShown = new LC.e();
    this.fpsOverTime = null;
    this.initialFps = null;
    this.colyseusPingInfo = {
      id: 0,
      start: null,
      end: null
    };
    setInterval(() => {
      (0, ky.sI)() && (this.logAnalytics(), this.fpsOverTime = null, this.initialFps = null, this.colyseusPingInfo.id += 1, this.colyseusPingInfo.start = performance.now(), this.colyseusPingInfo.end = null, (0, gC.Rb)(AC.eh, {
        Mk: this.colyseusPingInfo.id,
        yg: (0, ky.sI)().listenerCount("jY")
      }, !0));
    }, 1e4);
    window.addEventListener("beforeunload", () => {
      this.beforeUnload();
    });
  }
  logToGoogleAnalytics(CC, yC, IC, ky) {
    if ("function" === typeof window.gtag) {
      const CC = (0, fC.d)({
        event_category: IC
      }, yC);
      window.gtag("event", ky ? "".concat(IC, "_").concat(ky) : IC, CC);
    } else {
      console.log("".concat(CC, ": gtag not available"));
    }
  }
  logAnalytics() {
    var CC;
    var yC;
    var IC;
    var fC;
    const iy = performance.now();
    this.flushAdCounters(iy);
    if (null === (CC = (0, ky.getBloxd)()) || void 0 === CC || !CC.client.isConnectedToServer()) {
      return;
    }
    const LC = null === (yC = (0, ky.sI)()) || void 0 === yC ? void 0 : yC.lC;
    const GC = {};
    for (const ky of (0, my.c)()) {
      const CC = ky.name;
      let yC;
      if ((0, bC.h)(CC)) {
        yC = rC.b[CC];
      } else {
        switch (CC) {
          case "Ry":
            yC = this.fpsOverTime;
            break;
          case "Qy":
            yC = this.initialFps;
            break;
          case "My":
            yC = "undefined" === typeof window.aiptag.adplayer;
            iy < 6e4 && !0 === yC && (yC = null);
            break;
          case "CI":
            yC = iy < eC.AD_COUNTER_WINDOW_MS ? null : this.adBannersShown.size;
            break;
          case "yI":
            yC = iy < eC.AD_COUNTER_WINDOW_MS ? null : this.adVideosShown.size;
            break;
          case "II":
            null !== this.colyseusPingInfo.start && null !== this.colyseusPingInfo.end ? (yC = Math.round(this.colyseusPingInfo.end - this.colyseusPingInfo.start), this.colyseusPingInfo.start = null, this.colyseusPingInfo.end = null) : yC = null;
            break;
          case "fI":
            yC = null !== (IC = YC.j.getItem("pixelScale")) && void 0 !== IC ? IC : (0, XC.v)();
            break;
          case "gI":
            null !== LC && void 0 !== LC && LC.Jy || (yC = null);
            yC = Math.round(Math.max(LC.Jy.getRenderWidth(), LC.Jy.getRenderHeight()));
            break;
          case "AI":
            null !== LC && void 0 !== LC && LC.Jy || (yC = null);
            yC = Math.round(Math.min(LC.Jy.getRenderWidth(), LC.Jy.getRenderHeight()));
            break;
          case "mf":
            yC = (0, XC.I)();
            break;
          case "XI":
            yC = (0, XC.y)();
            break;
          case "YI":
            LC || (yC = null);
            yC = LC.qL() ? "2" : "1";
            break;
          case "bI":
            yC = (0, XC.A)();
            break;
          case "rI":
            yC = (0, XC.E)();
            break;
          case "eI":
            yC = (0, XC.K)();
            break;
          case "OI":
            yC = LC ? LC.ZC ? "true" : "false" : null;
            break;
          default:
            throw new Error("Unhandled field name: ".concat(CC));
        }
      }
      if (void 0 === yC) {
        throw new Error("Metric ".concat(CC, " has no value"));
      }
      GC[CC] = yC;
    }
    (0, gC.Rb)(AC.Ze, GC);
    this.logToGoogleAnalytics("logAnalytics", {
      event_label: "initial_and_over_time_fps",
      custom_parameter_fps_over_time: null === this.fpsOverTime ? null : Math.round(this.fpsOverTime),
      custom_parameter_initial_fps: null === this.initialFps ? null : Math.round(this.initialFps)
    }, "Ry");
    null === (fC = window.ByteBrewSDK) || void 0 === fC || fC.ByteBrew.newCustomEvent("Ry", GC);
  }
  onReceiveColyseusPing(CC) {
    this.colyseusPingInfo.id === CC && (this.colyseusPingInfo.end = performance.now());
  }
  setFps(CC, yC) {
    this.fpsOverTime = CC;
    this.initialFps = yC;
  }
  logError(CC, yC) {
    this.logToGoogleAnalytics("logError", {
      event_label: CC,
      custom_parameter_severity: CC,
      custom_parameter_details: yC.substring(0, 500)
    }, "error", CC);
  }
  progressionEvent(CC) {
    let {
      type: yC,
      location1: IC,
      location2: fC,
      location3: ky,
      score: gC
    } = CC;
    console.log("progressionEvent currently does nothing");
  }
  resourceEvent(CC) {
    let {
      type: yC,
      resourceType: IC,
      amount: fC,
      category: ky,
      itemName: gC
    } = CC;
    console.log("resourceEvent currently does nothing");
  }
  adBannerEvent() {
    const CC = performance.now();
    this.flushAdCounters(CC);
    this.adBannersShown.enqueue(CC + eC.AD_COUNTER_WINDOW_MS);
  }
  adVideoEvent() {
    const CC = performance.now();
    this.flushAdCounters(CC);
    this.adVideosShown.enqueue(CC + eC.AD_COUNTER_WINDOW_MS);
  }
  customEvent(CC) {
    let {
      cat1: yC,
      cat2: IC,
      cat3: fC,
      value: ky
    } = CC;
    let gC = yC;
    IC && (gC += ":" + IC);
    fC && (gC += ":" + fC);
    this.customEventInner(gC, null !== ky && void 0 !== ky ? ky : 0);
  }
  updateLeaveValue(CC) {
    let {
      leaveEventType: yC,
      category: IC,
      subCategory: fC,
      value: ky
    } = CC;
    console.log(yC, IC, fC, ky);
    this.leaveEventTypes[yC] = {
      category: IC,
      subCategory: fC,
      value: ky
    };
  }
  beforeUnload() {
    for (const CC in this.leaveEventTypes) {
      const {
        category: yC,
        subCategory: IC,
        value: fC
      } = this.leaveEventTypes[CC];
      let ky = CC;
      yC && (ky += ":" + yC);
      IC && (ky += ":" + IC);
      this.customEventInner(ky, fC || 0);
    }
  }
  reset() {
    this.beforeUnload();
    this.leaveEventTypes = {};
    this.flushAdCounters(performance.now());
  }
  customEventInner(CC, yC) {
    console.log("customAnalyticsEvent currently does nothing");
  }
  flushAdCounters(CC) {
    const yC = CC;
    for (; (null !== (IC = this.adBannersShown.peek()) && void 0 !== IC ? IC : yC) < yC;) {
      var IC;
      this.adBannersShown.dequeue();
    }
    for (; (null !== (fC = this.adVideosShown.peek()) && void 0 !== fC ? fC : yC) < yC;) {
      var fC;
      this.adVideosShown.dequeue();
    }
  }
}
eC.AD_COUNTER_WINDOW_MS = 3e5;
(0, GC.e)("https://unpkg.com/bytebrew-web-sdk@1.0.1", {}, !1).then(() => {
  window.ByteBrewSDK ? window.ByteBrewSDK.ByteBrew.initializeByteBrew("T74de8IIz", "L0h+F+6ecvR0wIxnJIv7rFi6Pda7Hf1YIhLS0jNkIoUeZu2LkOaPNQPkun8nLKh+", iy.b.toString()) : console.error("ByteBrewSDK undefined after loadScript");
}).catch(CC => {
  console.warn("Failed to load Bytebrew SDK:", CC.stack);
});
export const b = new eC();
let SC = {};
(0, gC.yb)(() => {
  SC = {};
});
const TC = ["Unable to create vertex buffer"];
export function d() {
  return function (CC, yC) {
    const IC = new Date();
    console.error("".concat(IC.getUTCHours(), ":").concat(IC.getUTCMinutes(), ":").concat(IC.getUTCSeconds()), CC, yC, null === yC || void 0 === yC ? void 0 : yC.stack);
    TC.includes(null === yC || void 0 === yC ? void 0 : yC.message) && (console.error("Unrecoverable error occurred. Leaving game."), (0, ky.getBloxd)().client.leaveGameUnwanted({
      reason: "Unrecoverable error occurred.\nThis is a bug.\n\nError:\n".concat(yC.message, "\n\nPlease refresh the page."),
      requiresRefresh: !0,
      canReconnect: !1,
      automaticallyReconnect: !1
    }));
    b.logError("warning", "".concat(CC, "\n ").concat(yC, ' "\n" ').concat(null === yC || void 0 === yC ? void 0 : yC.stack));
    const fC = CC + yC + (null === yC || void 0 === yC ? void 0 : yC.stack);
    fC in SC || (b.logError("error", "".concat(CC, "\n ").concat(yC, ' "\n" ').concat(null === yC || void 0 === yC ? void 0 : yC.stack)), SC[fC] = !0);
  };
}