export class c extends Error {
  constructor(CC, yC) {
    let IC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    super(yC);
    this.name = "BadHttpCodeError";
    this.httpCode = void 0;
    this.errorMessageForUser = void 0;
    this.httpCode = CC;
    this.errorMessageForUser = IC;
  }
}
export let g = function (CC) {
  CC[CC.LOAD_REQUIRED_LIBS = 0] = "LOAD_REQUIRED_LIBS";
  CC[CC.REQUEST_TO_MATCHMAKING = 1] = "REQUEST_TO_MATCHMAKING";
  CC[CC.INITIALISE_WEBGL = 2] = "INITIALISE_WEBGL";
  CC[CC.INITIALISE_NOA = 3] = "INITIALISE_NOA";
  CC[CC.TEXTURE_PACK_GENERATE_ROTATED_TEXTURES = 4] = "TEXTURE_PACK_GENERATE_ROTATED_TEXTURES";
  CC[CC.TEXTURE_PACK_GENERATE_BLOCK_ATLAS_1 = 5] = "TEXTURE_PACK_GENERATE_BLOCK_ATLAS_1";
  CC[CC.TEXTURE_PACK_GENERATE_BLOCK_ATLAS_2 = 6] = "TEXTURE_PACK_GENERATE_BLOCK_ATLAS_2";
  CC[CC.TEXTURE_PACK_GENERATE_ARMOUR_ATLAS = 7] = "TEXTURE_PACK_GENERATE_ARMOUR_ATLAS";
  CC[CC.REGISTRATION = 8] = "REGISTRATION";
  CC[CC.SETUP_LIFEFORMS = 9] = "SETUP_LIFEFORMS";
  CC[CC.CONNECT_TO_GAME_SERVER = 10] = "CONNECT_TO_GAME_SERVER";
  return CC;
}({});
export const m = {
  [g.LOAD_REQUIRED_LIBS]: .05,
  [g.REQUEST_TO_MATCHMAKING]: .05,
  [g.INITIALISE_WEBGL]: 0,
  [g.INITIALISE_NOA]: .05,
  [g.TEXTURE_PACK_GENERATE_ROTATED_TEXTURES]: .1,
  [g.TEXTURE_PACK_GENERATE_BLOCK_ATLAS_1]: .15,
  [g.TEXTURE_PACK_GENERATE_BLOCK_ATLAS_2]: .1,
  [g.TEXTURE_PACK_GENERATE_ARMOUR_ATLAS]: .05,
  [g.REGISTRATION]: .3,
  [g.SETUP_LIFEFORMS]: .1,
  [g.CONNECT_TO_GAME_SERVER]: .05
};
export const h = {
  [g.LOAD_REQUIRED_LIBS]: "Failed to load required libraries",
  [g.REQUEST_TO_MATCHMAKING]: "Request to matchmaking failed",
  [g.INITIALISE_WEBGL]: "You need to restart your browser to play",
  [g.INITIALISE_NOA]: "Failed to initialise game engine",
  [g.TEXTURE_PACK_GENERATE_ROTATED_TEXTURES]: "Failed to generate texture pack",
  [g.TEXTURE_PACK_GENERATE_BLOCK_ATLAS_1]: "Failed to generate texture pack",
  [g.TEXTURE_PACK_GENERATE_BLOCK_ATLAS_2]: "Failed to generate texture pack",
  [g.TEXTURE_PACK_GENERATE_ARMOUR_ATLAS]: "Failed to generate texture pack",
  [g.REGISTRATION]: "Failed to register materials and entities",
  [g.SETUP_LIFEFORMS]: "Failed to setup lifeforms",
  [g.CONNECT_TO_GAME_SERVER]: "Failed to connect to game server"
};
export const j = {
  [g.LOAD_REQUIRED_LIBS]: "Loading required libraries",
  [g.REQUEST_TO_MATCHMAKING]: "Matchmaking into a lobby",
  [g.INITIALISE_WEBGL]: "Initialising game engine",
  [g.INITIALISE_NOA]: "Initialising game engine",
  [g.TEXTURE_PACK_GENERATE_ROTATED_TEXTURES]: "Generating texture pack",
  [g.TEXTURE_PACK_GENERATE_BLOCK_ATLAS_1]: "Generating texture pack",
  [g.TEXTURE_PACK_GENERATE_BLOCK_ATLAS_2]: "Generating texture pack",
  [g.TEXTURE_PACK_GENERATE_ARMOUR_ATLAS]: "Generating texture pack",
  [g.REGISTRATION]: "Registering materials and entities",
  [g.SETUP_LIFEFORMS]: "Setting up lifeforms",
  [g.CONNECT_TO_GAME_SERVER]: "Connecting to game server"
};
export let f = function (CC) {
  CC.CHAT_MSG = "default";
  CC.PLAYER_JOIN = "playerJoin";
  CC.PLAYER_REPORT = "playerReport";
  CC.PLAYER_NAME_CHANGE = "changeName";
  CC.ADMIN_ACTIVITY = "adminActivity";
  CC.MODERATION = "moderation";
  CC.LOBBY_INFO = "lobbyInfo";
  CC.TRIBE_NAME = "tribeName";
  CC.TRIBE_INFO = "tribeInfo";
  CC.FACTION_NAME = "factionName";
  CC.FACTION_INFO = "factionInfo";
  CC.NAME_TAG = "nameTag";
  CC.BOOK = "book";
  CC.BOARD = "board";
  CC.MULTI_LINE_CHAT = "multiLineChat";
  CC.CUSTOM_GAME_INFO = "customGameInfo";
  return CC;
}({});