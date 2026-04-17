var fC = require("./1488.js");
var ky = require("./1259.js");
var gC = require("./109.js");
var AC = require("./49.js");
var my = require("./44.js");
var XC = my;
var iy = require("./38.js");
var LC = require("./66.js");
var YC = require("./1495.js");
var bC = YC;
var rC = require("./1363.js");
var GC = require("./595.js");
var eC = require("./447.js");
var OC = require("./1143.js");
var SC = require("./1503.js");
var TC = require("./442.js");
const NC = new XC();
export const b = new class {
  constructor() {
    this.partyInformation = null;
    this.userContext = null;
    this.firstUserContextChanged = !1;
    this.leaderLocationToNotFollow = null;
    this.partyUIState = "JoinOrCreate";
    this.resetPartyUIStateTimeout = null;
    this.lastErrorMessage = "";
    eC.e.hasSearchParam("partyCode") && (this.partyUIState = "Loading");
    iy.c.subscribe("userContextUpdated", async CC => {
      if (CC.whamm && (this.userContext = CC, !this.firstUserContextChanged)) {
        this.firstUserContextChanged = !0;
        if ((0, TC.k)() && !b.isInParty()) {
          const CC = await rC.i.discordActivity();
          const {
            channelId: yC
          } = CC.getCurrentChannelAndGuild();
          if (!(0, LC.w)(yC)) {
            const CC = (0, GC.c)(yC, 5);
            b.joinParty(CC).catch(() => {
              b.createParty(CC).catch(() => {
                console.error("Couldn't join or create Party with code ".concat(CC, " obtained from Discord Channel with Id ").concat(yC));
              });
            });
          }
        } else {
          eC.e.hasSearchParam("partyCode") && this.joinParty(eC.e.getSearchParam("partyCode")).catch(CC => {
            console.error("Failed to join party", CC);
          });
        }
      }
    });
    setInterval(() => {
      this.refreshPartyInformation();
    }, 2e3);
  }
  getPartyInformation() {
    return this.partyInformation;
  }
  addOnPartyInformationChanged(CC, yC) {
    NC.addListener("partyInformationUpdated", CC, yC);
  }
  removeOnPartyInformationChanged(CC, yC) {
    NC.removeListener("partyInformationUpdated", CC, yC);
  }
  isInParty() {
    return null !== this.partyInformation;
  }
  isThisClientLeader() {
    var CC;
    var yC;
    var IC;
    return (null === (CC = this.partyInformation) || void 0 === CC || null === (yC = CC.leaderSocialPreview) || void 0 === yC ? void 0 : yC.name) === (null === (IC = this.userContext) || void 0 === IC ? void 0 : IC.getPlayerName());
  }
  setPartyUIState(CC) {
    this.partyUIState = CC;
    clearTimeout(this.resetPartyUIStateTimeout);
    "Error" === this.partyUIState && (this.resetPartyUIStateTimeout = setTimeout(() => {
      this.setPartyUIState("JoinOrCreate");
    }, 1500));
    NC.emit("partyUIStateUpdated");
  }
  getPartyUIState() {
    return this.partyUIState;
  }
  getLastErrorMessage() {
    return this.lastErrorMessage;
  }
  async createParty(CC) {
    this.setPartyUIState("Loading");
    await ky.v.getCurrentUserContext();
    return fC.e.createParty(this.userContext, CC).then(CC => {
      this.partyInformation = CC;
      this.setPartyUIState("ShowParty");
      eC.e.setSearchParam("partyCode", this.partyInformation.partyCode);
      return CC;
    }).catch(CC => {
      var yC;
      console.error("Error creating Party:", CC);
      this.lastErrorMessage = null !== (yC = CC.errorMessageForUser) && void 0 !== yC ? yC : "";
      this.partyInformation = null;
      eC.e.removeSearchParam("partyCode");
      this.setPartyUIState("Error");
      throw CC;
    }).finally(() => {
      NC.emit("partyInformationUpdated", this.partyInformation);
    });
  }
  joinParty(CC) {
    this.setPartyUIState("Loading");
    return (0, GC.z)(CC).length > 0 ? (this.lastErrorMessage = "Invalid Party Code", this.setPartyUIState("Error"), Promise.reject()) : fC.e.joinParty(this.userContext, CC).then(CC => {
      this.partyInformation = CC;
      eC.e.setSearchParam("partyCode", this.partyInformation.partyCode);
      this.setPartyUIState("ShowParty");
      const yC = this.partyInformation.leaderSocialPreview.location;
      yC && "inGame" === yC.status && (this.leaderLocationToNotFollow = bC(yC));
      return this.partyInformation;
    }).catch(CC => {
      var yC;
      console.error("Error joining Party:", CC);
      this.lastErrorMessage = null !== (yC = CC.errorMessageForUser) && void 0 !== yC ? yC : "";
      this.partyInformation = null;
      eC.e.removeSearchParam("partyCode");
      this.setPartyUIState("Error");
      throw CC;
    }).finally(() => {
      NC.emit("partyInformationUpdated", this.partyInformation);
    });
  }
  leaveParty() {
    this.setPartyUIState("Loading");
    const CC = fC.e.leaveParty(this.userContext, this.partyInformation.partyCode).then(() => {
      this.setPartyUIState("JoinOrCreate");
    }).catch(CC => {
      var yC;
      console.error("Error leaving Party:", CC);
      this.lastErrorMessage = null !== (yC = CC.errorMessageForUser) && void 0 !== yC ? yC : "";
      this.setPartyUIState("Error");
    });
    this.partyInformation = null;
    eC.e.removeSearchParam("partyCode");
    NC.emit("partyInformationUpdated", this.partyInformation);
    return CC;
  }
  async refreshPartyInformation() {
    if (this.partyInformation) {
      return fC.e.getPartyInformation(this.userContext, this.partyInformation.partyCode).then(async CC => {
        if (!this.partyInformation) {
          return;
        }
        this.partyInformation = CC;
        const yC = this.partyInformation.leaderSocialPreview;
        !(await this.isThisClientLeader()) && yC.location && "inGame" === yC.location.status && (this.leaderLocationToNotFollow && this.leaderLocationToNotFollow.inLobbyName === yC.location.inLobbyName && this.leaderLocationToNotFollow.inGameNameWithVariation === yC.location.inGameNameWithVariation && this.leaderLocationToNotFollow.inVmUrl === yC.location.inVmUrl || ((0, SC.m)(yC.location, !0), this.leaderLocationToNotFollow = bC(yC.location)));
        !(0, LC.w)(this.leaderLocationToNotFollow) && yC.location && "leftGame" === yC.location.status && (this.leaderLocationToNotFollow = null);
      }).catch(CC => {
        console.error("Error getting Party information:", CC);
        CC instanceof gC.c && 435 === CC.httpCode && (this.partyInformation = null, eC.e.removeSearchParam("partyCode"), this.setPartyUIState("JoinOrCreate"));
        throw CC;
      }).finally(() => {
        NC.emit("partyInformationUpdated", this.partyInformation);
      });
    }
  }
}();
export function f() {
  const [CC, yC] = (0, AC.ey)(b.getPartyInformation());
  const [IC, fC] = (0, AC.ey)(b.isThisClientLeader());
  const [ky, gC] = (0, AC.ey)(b.getPartyUIState());
  const [my, XC] = (0, AC.ey)(b.getLastErrorMessage());
  function iy() {
    yC(b.getPartyInformation());
    fC(b.isThisClientLeader());
    gC(b.getPartyUIState());
    XC(b.getLastErrorMessage());
  }
  (0, AC.Oy)(() => {
    NC.on("partyInformationUpdated", iy);
    NC.on("partyUIStateUpdated", iy);
    return () => {
      NC.removeListener("partyInformationUpdated", iy);
      NC.removeListener("partyUIStateUpdated", iy);
    };
  });
  return {
    partyInformation: CC,
    isPartyLeader: IC,
    partyUIState: ky,
    lastPartyErrorMessage: my
  };
}
OC.singletons.clientSidePartyStateManager = b;