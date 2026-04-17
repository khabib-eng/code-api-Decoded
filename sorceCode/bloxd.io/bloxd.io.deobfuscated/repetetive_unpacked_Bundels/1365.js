var fC = require("./447.js");
var ky = require("./1143.js");
var gC = require("./442.js");
export class c {
  playVideoAd(CC, yC) {
    CC();
  }
  playRewarded(CC, yC) {
    console.error("Shouldn't be playing unloaded rewarded ad");
    yC();
  }
  canShowSuperRankAd(CC) {
    return !0;
  }
  renderBanner(CC) {}
  clearBanner(CC) {}
  setBannerAutoRefreshEnabled(CC, yC) {}
  onHomescreenEntered() {}
  onHomescreenExited() {}
  onGameplayStart() {}
  onGameplayStop() {}
  onGameEntered() {}
  onGameExited() {}
  async getInviteLink() {
    if ("bloxd" === gC.D) {
      return document.location.href;
    }
    if ("nowgg" === gC.N) {
      let CC = "lobby=".concat(encodeURIComponent(ky.singletons.connectedLobbyName), "&g=").concat(encodeURIComponent(ky.singletons.modeAttemptedPlay));
      ky.singletons.clientSidePartyStateManager.isInParty() && (CC += "&partyCode=".concat(encodeURIComponent(ky.singletons.clientSidePartyStateManager.getPartyInformation().partyCode)));
      return "".concat(fC.e.getSearchParam("nggPlayUrl"), "/?nggForwardParams=").concat(encodeURIComponent(CC));
    }
    return "Error getting link. This is a bug. Pls report on bloxd discord server.";
  }
  chatShouldBeDisabled() {
    return "coolmathgames" === gC.D;
  }
  displayConsentUI() {}
  getApplicationType() {
    return "web";
  }
}