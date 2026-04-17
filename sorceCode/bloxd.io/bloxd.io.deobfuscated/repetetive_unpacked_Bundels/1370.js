var fC = require("./1363.js");
var ky = require("./1365.js");
var gC = require("./442.js");
var AC = require("./1357.js");
export class e extends ky.c {
  static isUsingPlaywire() {
    return "bloxd" === gC.D && this.randUsingPlaywire && !0;
  }
  constructor() {
    super();
    this.recentOnEnd = void 0;
    this.startedAd = !1;
    this.haveCalledOnEnd = !1;
    this.autoEndTimeout = void 0;
    window.ramp.onPlayerReady = () => {
      this.onPlayerReady();
    };
  }
  static async setup() {
    window.ramp = window.ramp || {};
    window.ramp.que = window.ramp.que || [];
    window.ramp.passiveMode = !0;
    window._pwGA4PageviewId = "".concat(Date.now());
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () {
      window.dataLayer.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("config", "G-XY537BJP6B", {
      send_page_view: !1
    });
    window.gtag("event", "ramp_js", {
      send_to: "G-XY537BJP6B",
      pageview_id: window._pwGA4PageviewId
    });
    const CC = new Promise(CC => {
      window.ramp.onReady = () => {
        CC();
      };
    });
    console.log("Loading playwire cdn.intergient.com script");
    (0, AC.e)("//cdn.intergient.com/1024885/74052/ramp.js");
    await CC;
    console.log("Initial playwire script loaded, loading bolt video ad script");
    const yC = (0, AC.e)("//cdn.playwire.com/bolt/js/zeus/embed.js", {
      "data-config": "//config.playwire.com/1024885/v2/pre_content.json"
    });
    await yC;
    return new e();
  }
  renderBanner(CC) {
    const yC = [];
    [].push(CC.divId);
    yC.push({
      selectorId: CC.divId,
      type: "leaderboard_atf"
    });
    console.log("destroying then requesting banner", document.getElementById(CC.divId));
    if (0 !== yC.length) {
      if (void 0 !== window.ramp.destroyUnits) {
        try {
          console.log("Destroying units with window.ramp.destroyUnits");
          window.ramp.destroyUnits("all").then(() => {
            console.log("Sending", yC, "to playwire");
            window.ramp.addUnits(yC).then(() => {
              window.ramp.displayUnits();
            }).catch(CC => {
              window.ramp.displayUnits();
              console.error("Playwire displayunits error", CC);
            });
          });
        } catch (IC) {
          console.error("playwire destroyUnits error: ", IC);
        }
      } else {
        console.error("window.ramp.destroyUnits is undefined");
      }
    }
  }
  playVideoAd(CC, yC) {
    this.recentOnEnd = CC;
    this.haveCalledOnEnd = !1;
    (0, fC.gb)() ? (this.autoEndTimeout = setTimeout(() => {
      console.log("Calling onEnd from timeout - playwire Bolt player did not respond after 8 seconds");
      this.onAdFinished();
    }, 8e3), document.getElementById("PlaywireVideoWrapper").style.display = "flex", document.getElementById("PlaywireVideoSpinner").style.display = "flex", document.getElementById("PlaywireVideo").classList.remove("GenericVidBorder"), console.log("Playing playwire trendi_video"), window.ramp.addUnits({
      type: "trendi_video"
    }).then(() => window.ramp.displayUnits())) : CC();
  }
  onPlayerReady() {
    console.trace("playwire onPlayerReady");
    window.Bolt.on("tyche_trendi_video", window.Bolt.BOLT_AD_STARTED, () => {
      console.trace("Playwire video ad started");
      this.haveCalledOnEnd || (window.adStartSoPause(null, {
        preventMovement: !0
      }), this.startedAd = !0, clearTimeout(this.autoEndTimeout), document.getElementById("PlaywireVideoSpinner").style.display = "none", document.getElementById("PlaywireVideo").classList.add("GenericVidBorder"));
    });
    window.Bolt.on("tyche_trendi_video", window.Bolt.BOLT_AD_COMPLETE, () => {
      console.trace("Playwire video ad complete");
      this.onAdFinished();
    });
    window.Bolt.on("tyche_trendi_video", window.Bolt.BOLT_AD_ERROR, () => {
      console.trace("Playwire video ad error");
      this.onAdFinished();
    });
  }
  onAdFinished() {
    clearTimeout(this.autoEndTimeout);
    document.getElementById("PlaywireVideoWrapper").style.display = "none";
    console.log("Playwire video adFinished callback");
    this.haveCalledOnEnd || (this.recentOnEnd(), this.haveCalledOnEnd = !0);
    this.startedAd && (window.adCompleteSoResume(), this.startedAd = !1);
  }
}
e.randUsingPlaywire = !1;