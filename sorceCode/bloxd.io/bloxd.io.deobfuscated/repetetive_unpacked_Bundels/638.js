var fC = require("./424.js");
export let c = function (CC) {
  CC.DM = "DM";
  CC.GUILD = "GUILD";
  return CC;
}({});
export class f {
  constructor(CC) {
    this.type = CC;
  }
  static isSnowflake(CC) {
    return CC.length >= this.MIN_SNOWFLAKE_LENGTH && /\d+/.test(CC);
  }
  static isLobbyName(CC, yC) {
    const IC = yC.split("-");
    const fC = IC.slice(0, -1).join("-");
    const ky = IC[IC.length - 1];
    return CC === fC && this.isSnowflake(ky);
  }
  static getLobbyName(CC, yC) {
    yC = yC.padStart(this.MIN_SNOWFLAKE_LENGTH, "0");
    return "".concat(CC, "-").concat(yC);
  }
  static from(CC) {
    switch (CC.type) {
      case c.DM:
        return new h(CC);
      case c.GUILD:
        return new k(CC);
      default:
        throw new Error("Failed to parse Discord-context parameters: ".concat(JSON.stringify(CC)));
    }
  }
}
f.MIN_SNOWFLAKE_LENGTH = 16;
export class h extends f {
  constructor(CC) {
    super(CC.type);
    this.channelId = void 0;
    this.channelName = void 0;
    this.channelId = CC.channelId;
    this.channelName = CC.channelName;
  }
  static lobbyNameIsDm(CC) {
    return f.isLobbyName(h.DM_LOBBY_NAME_PREFIX, CC);
  }
  getLobbyName() {
    return f.getLobbyName(h.DM_LOBBY_NAME_PREFIX, this.channelId);
  }
  getLobbyPlayingString() {
    return this.channelName;
  }
  getSerialisableParams() {
    return {
      type: c.DM,
      channelId: this.channelId,
      channelName: this.channelName
    };
  }
}
h.DM_LOBBY_NAME_PREFIX = "discord-dm";
export class k extends f {
  constructor(CC) {
    super(CC.type);
    this.guildId = void 0;
    this.guildName = void 0;
    this.guildId = CC.guildId;
    this.guildName = CC.guildName;
  }
  static lobbyNameIsGuild(CC) {
    return f.isLobbyName(k.GUILD_LOBBY_NAME_PREFIX, CC);
  }
  getLobbyName() {
    return f.getLobbyName(k.GUILD_LOBBY_NAME_PREFIX, this.guildId);
  }
  getLobbyPlayingString() {
    return "Discord Server: ".concat(this.guildName);
  }
  getSerialisableParams() {
    return {
      type: c.GUILD,
      guildId: this.guildId,
      guildName: this.guildName
    };
  }
}
k.GUILD_LOBBY_NAME_PREFIX = "discord-guild";
export const o = {
  [fC.e.LOCAL]: "http://localhost:3000/auth-callback/discord",
  [fC.e.STAGING]: "https://staging.bloxd.io/auth-callback/discord",
  [fC.e.PRODUCTION]: "https://bloxd.io/auth-callback/discord"
};