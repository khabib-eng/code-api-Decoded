var fC = require("./1363.js");
var ky = require("./1365.js");
var gC = require("./447.js");
var AC = require("./1143.js");
var my = require("./1357.js");
let XC = null;
async function iy() {
  null !== XC || (XC = new Promise(async CC => {
    console.log("Fetching CrazyGames SDK");
    await (0, my.e)("https://sdk.crazygames.com/crazygames-sdk-v3.js", {}, !1);
    await window.CrazyGames.SDK.init();
    console.log("CrazyGames SDK initialised");
    CC(window.CrazyGames.SDK);
  }));
  return XC;
}
export class h extends ky.c {
  constructor(CC, yC) {
    super();
    this.sdk = CC;
    this.isDirectTraffic = yC;
    this.homepageInvitePartyCode = null;
    console.log("Crazy SDK initialized");
  }
  static async setup(CC) {
    console.log("Loading crazygames sdk with isDirectTraffic:", CC);
    if (!CC) {
      const yC = await iy();
      return new h(yC, CC);
    }
    await (0, my.e)("https://solve.crazygames.com/solve-v1.js");
    const yC = window.CrazyGames.CrazySDK.getInstance();
    await yC.init({
      gameName: "bloxd.io",
      testing: gC.e.hasSearchParam("useTestAds"),
      element: "GenericVideoInner",
      dontLoadCmp: !0
    });
    return new h(yC, CC);
  }
  playVideoAd(CC, yC) {
    if (!(0, fC.gb)()) {
      return void CC();
    }
    document.getElementById("GenericVideoWrapper").style.display = "flex";
    document.getElementById("GenericVideoInner").classList.remove("GenericVidBorder");
    const IC = () => {
      console.log("AD: video ad started, pausing game");
      document.getElementById("GenericVideoInner").classList.add("GenericVidBorder");
    };
    const ky = () => {
      console.log("AD: video ad finished");
      document.getElementById("GenericVideoWrapper").style.display = "none";
      window.adCompleteSoResume();
      CC();
    };
    const gC = CC => {
      console.error("AD: Error while playing crazy video ad: ".concat(CC));
      ky();
    };
    console.log("AD: Attempting to request crazy video ad");
    if (this.isDirectTraffic) {
      try {
        this.sdk.requestAd("midgame", {
          adStarted: IC,
          adError: gC,
          adFinished: ky
        });
      } catch (AC) {
        console.error("AD: Error requesting crazygames video ad, calling onAdDone prematurely:", AC);
        ky();
      }
    } else {
      window.CrazyGames.SDK.ad.requestAd("midgame", {
        adStarted: IC,
        adError: gC,
        adFinished: ky
      }).catch(CC => {
        console.error("AD: Error requesting crazygames video ad, calling onAdDone prematurely:", CC);
        ky();
      });
    }
    window.adStartSoPause(null, {
      preventMovement: !0
    });
  }
  playRewarded(CC, yC) {
    const IC = () => {
      console.log("AD: rewarded ad started, pausing game");
    };
    const fC = () => {
      console.log("AD: rewarded ad finished");
      window.adCompleteSoResume();
      CC();
    };
    const ky = CC => {
      console.error("AD: Error while playing rewarded crazy video ad: ", CC);
      window.adCompleteSoResume();
      yC();
    };
    if (this.isDirectTraffic) {
      try {
        this.sdk.requestAd("rewarded", {
          adStarted: IC,
          adError: ky,
          adFinished: fC
        });
      } catch (gC) {
        console.error("AD: Error requesting crazygames video ad, calling onAdDone prematurely:", gC);
        fC();
      }
    } else {
      window.CrazyGames.SDK.ad.requestAd("rewarded", {
        adStarted: IC,
        adError: ky,
        adFinished: fC
      }).catch(CC => {
        console.error("AD: Error requesting crazygames video ad, calling onAdDone prematurely:", CC);
        fC();
      });
    }
    window.adStartSoPause(null, {
      preventMovement: !0
    });
  }
  renderBanner(CC) {
    const yC = this.isDirectTraffic ? this.sdk : window.CrazyGames.SDK.banner;
    "responsive" === CC.dims ? yC.requestResponsiveBanner(CC.divId) : this.isDirectTraffic ? yC.requestBanner([{
      containerId: CC.divId,
      size: CC.dims
    }]) : yC.requestBanner({
      id: CC.divId,
      width: CC.width,
      height: CC.height
    });
  }
  clearBanner(CC) {
    this.isDirectTraffic || (console.log("Clearing banner", CC.divId), window.CrazyGames.SDK.banner.clearBanner(CC.divId));
  }
  onHomescreenEntered() {
    AC.singletons.clientSidePartyStateManager.addOnPartyInformationChanged(this.partyUpdatedOnHomescreenCallback, this);
    console.log("CrazyGames SDK Homescreen entered. isDirectTraffic:", this.isDirectTraffic, "isInstantMultiplayer", window.CrazyGames.SDK.game.isInstantMultiplayer);
    !this.isDirectTraffic && window.CrazyGames.SDK.game.isInstantMultiplayer && (AC.singletons.clientSidePartyStateManager.isInParty() || gC.e.hasSearchParam("partyCode") || AC.singletons.clientSidePartyStateManager.createParty(null).catch(CC => {
      console.error("Failed to create party", CC);
    }));
  }
  onHomescreenExited() {
    this.homepageInvitePartyCode = null;
    AC.singletons.clientSidePartyStateManager.removeOnPartyInformationChanged(this.partyUpdatedOnHomescreenCallback, this);
  }
  onGameplayStart() {
    this.isDirectTraffic ? this.sdk.game.gameplayStart() : window.CrazyGames.SDK.game.gameplayStart();
  }
  onGameplayStop() {
    this.isDirectTraffic ? this.sdk.game.gameplayStop() : window.CrazyGames.SDK.game.gameplayStop();
  }
  async getInviteLink() {
    const CC = {
      g: AC.singletons.modeAttemptedPlay,
      lobby: AC.singletons.connectedLobbyName
    };
    AC.singletons.clientSidePartyStateManager.isInParty() && (CC.partyCode = AC.singletons.clientSidePartyStateManager.getPartyInformation().partyCode);
    return await this.sdk.game.inviteLink(CC);
  }
  onGameEntered() {
    const CC = {
      g: AC.singletons.modeAttemptedPlay,
      lobby: AC.singletons.connectedLobbyName
    };
    AC.singletons.clientSidePartyStateManager.isInParty() && (CC.partyCode = AC.singletons.clientSidePartyStateManager.getPartyInformation().partyCode);
    this.sdk.game.showInviteButton(CC, (CC, yC) => {
      CC ? console.log("Invite link error (callback)", CC) : console.log("Invite link (callback)", yC);
    });
  }
  onGameExited() {
    this.sdk.game.hideInviteButton();
  }
  chatShouldBeDisabled() {
    return this.isDirectTraffic ? (console.error("Calling chatShouldBeDisabled with direct traffic"), !1) : !0 === window.CrazyGames.SDK.game.settings.disableChat;
  }
  getApplicationType() {
    return this.isDirectTraffic ? this.sdk.user.systemInfo.applicationType : window.CrazyGames.SDK.user.systemInfo.applicationType;
  }
  partyUpdatedOnHomescreenCallback(CC) {
    this.isDirectTraffic || (null === CC ? (this.homepageInvitePartyCode = null, this.sdk.game.hideInviteButton()) : this.homepageInvitePartyCode !== CC.partyCode && (console.log("Calling showInviteButton with party code ".concat(CC.partyCode)), this.homepageInvitePartyCode = CC.partyCode, this.sdk.game.showInviteButton({
      partyCode: CC.partyCode
    }, (CC, yC) => {
      CC ? console.log("Invite link error (callback)", CC) : console.log("Invite link (callback)", yC);
    })));
  }
}
export class e {
  constructor(CC) {
    this.sdk = CC;
  }
  static async setup() {
    const CC = await iy();
    return (await CC.user.isUserAccountAvailable) ? new e(CC) : (console.error("CrazyGames user account not available"), null);
  }
  async signInWithPopup() {
    const CC = await this.sdk.user.showAuthPrompt();
    return null !== CC && void 0 !== CC ? CC : null;
  }
  async getCurrentUser() {
    return await this.sdk.user.getUser();
  }
  async getCurrentUserToken() {
    return await this.sdk.user.getUserToken();
  }
  async doesUserWantToTieExistingAccount() {
    try {
      return "yes" === (await this.sdk.user.showAccountLinkPrompt()).response;
    } catch (CC) {
      console.log("Failed to prompt user:", CC);
      return !1;
    }
  }
}
export function k(CC) {
  var yC;
  var IC;
  var fC;
  null !== (yC = window.CrazyGames) && void 0 !== yC && null !== (IC = yC.SDK) && void 0 !== IC && null !== (fC = IC.analytics) && void 0 !== fC && fC.trackOrder ? window.CrazyGames.SDK.analytics.trackOrder("xsolla", CC) : console.error("CrazyGames SDK trackOrder not found");
}