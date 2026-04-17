var fC = require("./595.js");
var ky = require("./1259.js");
var gC = require("./66.js");
var AC = require("./1493.js");
var my = require("./577.js");
var XC = require("./1538.js");
var iy = XC;
export const e = new class {
  constructor() {
    this.socialApiRequestCache = {
      getGame: new iy({
        ttl: 12e4
      }),
      getPublishedGamePreviews: new iy({
        ttl: 12e4
      })
    };
  }
  async makeSocialApiRequest(CC, yC) {
    let IC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    let gC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
      retries: 0,
      minTimeout: 3e3
    };
    let AC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
    const XC = AC && this.socialApiRequestCache[AC];
    let iy = "";
    if (XC && (iy = this.hashSocialApiRequest(CC, IC), this.socialApiRequestCache[AC].has(iy))) {
      return this.socialApiRequestCache[AC].get(this.hashSocialApiRequest(CC, IC));
    }
    const LC = (0, fC.q)(yC.whamm);
    const YC = my.b.getSocialUrl(LC);
    const bC = await (0, ky.t)("".concat(YC).concat(CC), IC, gC, yC.getMetricsCookies());
    XC && this.socialApiRequestCache[AC].set(iy, bC);
    return bC;
  }
  hashSocialApiRequest(CC, yC) {
    return "".concat(CC, "_").concat(JSON.stringify(yC));
  }
  async updateCosmetics(CC, yC) {
    return this.makeSocialApiRequest("/social/update-cosmetics", CC, {
      updates: yC.map(CC => ({
        cosmeticTypeUpdate: CC.Hf,
        cosmeticNameUpdate: CC.af
      }))
    });
  }
  async getPlayerSocialInformation(CC) {
    return this.makeSocialApiRequest("/social/get-social-information", CC);
  }
  async setHideSocialLocation(CC, yC) {
    return this.makeSocialApiRequest("/social/set-hide-social-location", CC, {
      hideSocialLocation: yC
    });
  }
  async sendPlayerFriendRequest(CC, yC) {
    return this.makeSocialApiRequest("/social/send-friend-request", CC, {
      requestToPlayerName: yC
    });
  }
  async respondToPlayerFriendRequest(CC, yC, IC) {
    return this.makeSocialApiRequest("/social/respond-to-friend-request", CC, {
      requestFromPlayerName: yC,
      accept: IC
    });
  }
  async removePlayerFriend(CC, yC) {
    return this.makeSocialApiRequest("/social/remove-friend", CC, {
      friendPlayerName: yC
    });
  }
  async createParty(CC, yC) {
    return this.makeSocialApiRequest("/social/create-party", CC, {
      chosenPartyCode: yC
    });
  }
  async joinParty(CC, yC) {
    return this.makeSocialApiRequest("/social/join-party", CC, {
      partyCode: yC
    });
  }
  async leaveParty(CC, yC) {
    return this.makeSocialApiRequest("/social/leave-party", CC, {
      partyCode: yC
    });
  }
  async getPartyInformation(CC, yC) {
    return this.makeSocialApiRequest("/social/get-party-information", CC, {
      partyCode: yC
    });
  }
  async getOpenCustomLobbies(CC, yC) {
    return this.makeSocialApiRequest("/social/get-open-custom-lobbies", CC, yC);
  }
  async getFavouriteLobbies(CC) {
    return this.makeSocialApiRequest("/social/get-favourite-lobbies", CC);
  }
  async favouriteLobby(CC, yC) {
    return this.makeSocialApiRequest("/social/favourite-lobby", CC, {
      lobbyName: yC
    });
  }
  async unfavouriteLobby(CC, yC) {
    return this.makeSocialApiRequest("/social/unfavourite-lobby", CC, {
      lobbyName: yC
    });
  }
  async matchmakePlayer(CC, yC, IC, fC) {
    const ky = {
      gameNameWithVariation: IC,
      languages: fC
    };
    (0, gC.w)(yC) || (ky.lobbyNameOrDiscordContext = "string" !== typeof yC ? yC.getSerialisableParams() : yC);
    AC.b.isInParty() && (AC.b.isThisClientLeader() ? ky.partyCode = AC.b.getPartyInformation().partyCode : console.error("Only the Party leader should be matchmaking!"));
    return this.makeSocialApiRequest("/social/bloxd-matchmake", CC, ky, {
      retries: 3,
      minTimeout: 3e3
    });
  }
  async getGame(CC, yC) {
    return this.makeSocialApiRequest("/social/get-game", CC, {
      schematicId: yC
    }, void 0, "getGame");
  }
  async updateSchematic(CC, yC) {
    return this.makeSocialApiRequest("/social/update-schematic", CC, yC);
  }
  async getPublishedGamePreviews(CC, yC) {
    return this.makeSocialApiRequest("/social/get-published-game-previews", CC, yC, void 0, "getPublishedGamePreviews");
  }
  async getTopPublishedGamePreviews(CC) {
    return this.makeSocialApiRequest("/social/get-top-published-game-previews", CC, void 0, void 0, "getPublishedGamePreviews");
  }
  async getFavouriteGames(CC) {
    return this.makeSocialApiRequest("/social/get-favourite-games", CC);
  }
  async favouriteGame(CC, yC) {
    return this.makeSocialApiRequest("/social/favourite-game", CC, {
      schematicId: yC
    });
  }
  async unfavouriteGame(CC, yC) {
    return this.makeSocialApiRequest("/social/unfavourite-game", CC, {
      schematicId: yC
    });
  }
  async approveGame(CC, yC) {
    return this.makeSocialApiRequest("/social/approve-game", CC, {
      schematicId: yC
    });
  }
  async unapproveGame(CC, yC) {
    return this.makeSocialApiRequest("/social/unapprove-game", CC, {
      schematicId: yC
    });
  }
  async getGameCcus(CC) {
    return await this.makeSocialApiRequest("/social/get-game-ccus", CC);
  }
}();