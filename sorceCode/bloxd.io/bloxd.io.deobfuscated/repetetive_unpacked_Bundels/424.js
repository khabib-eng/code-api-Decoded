export const E = {
  characters: "fa-solid fa-user-astronaut",
  hat: "fa-solid fa-hat-witch",
  head: "fa-solid fa-scissors",
  body: "fa-solid fa-shirt",
  legs: "fa-kit fa-pants",
  shoes: "fa-kit fa-shoe",
  eyebrows: "fa-solid fa-face-raised-eyebrow",
  eyes: "fa-solid fa-eye",
  skin: "fa-solid fa-person",
  back: "fa-solid fa-backpack",
  cape: "fa-solid fa-bolt",
  nameColour: "fa-solid fa-palette"
};
export const G = {
  characters: "general:characters",
  hat: "general:hat",
  head: "general:hair",
  body: "general:body",
  legs: "general:legs",
  shoes: "general:shoes",
  eyebrows: "general:eyebrows",
  eyes: "general:eyes",
  skin: "general:skin",
  back: "general:backCosmetic",
  cape: "general:cape",
  nameColour: "general:name"
};
export const H = {
  newMap: [{
    translationKey: "homePage:newMapBadge"
  }],
  newMaps: [{
    translationKey: "homePage:newMapsBadge"
  }],
  popular: [{
    translationKey: "homePage:popularBadge"
  }],
  updated: [{
    translationKey: "homePage:updatedBadge"
  }],
  new: [{
    translationKey: "homePage:newBadge"
  }],
  limitedTimeGame: [{
    translationKey: "homePage:limitedTimeGameBadge"
  }],
  playerCrafted: [{
    translationKey: "homePage:playerCraftedBadge"
  }],
  ranked: [{
    translationKey: "homePage:rankedBadge"
  }]
};
export let n = function (CC) {
  CC.ADVENTURE = "ADVENTURE";
  CC.BATTLE = "BATTLE";
  CC.CREATIVE = "CREATIVE";
  CC.GRIND = "GRIND";
  CC.RACE = "RACE";
  CC.PARKOUR = "PARKOUR";
  CC.OTHER = "OTHER";
  return CC;
}({});
export const L = ["Minigames", "Puzzle", "Escape", "Parkour", "Obby", "Tower", "Roleplay", "Arena", "Duels", "Shooting", "Survival", "Simulator", "Tycoon", "Clicker", "Building", "Horror", "Lucky Block", "Racing", "Driving", "Cool Build", "Other"];
export const T = 8;
export const M = {
  parkourObby: "Parkour Obby",
  roleplay: "Roleplay",
  pvp: "PvP",
  simulator: "Simulator",
  pve: "PvE",
  racing: "Racing",
  minigames: "Minigames",
  other: "Other"
};
export const I = {
  parkourObby: ["Puzzle", "Escape", "Parkour", "Obby", "Tower"],
  roleplay: ["Roleplay"],
  pvp: ["Arena", "Duels", "Shooting"],
  simulator: ["Simulator", "Tycoon", "Clicker"],
  pve: ["Survival", "Building", "Horror", "Lucky Block"],
  racing: ["Racing", "Driving"],
  minigames: ["Minigames"],
  other: ["Cool Build", "Other"]
};
export let s = function (CC) {
  CC[CC.SETTINGS = 0] = "SETTINGS";
  CC[CC.CUSTOMISATION = 1] = "CUSTOMISATION";
  CC[CC.SHOP = 2] = "SHOP";
  CC[CC.LOBBY_LEADERBOARD = 3] = "LOBBY_LEADERBOARD";
  CC[CC.COSMETIC_SHOP = 4] = "COSMETIC_SHOP";
  return CC;
}({});
export function W(CC) {
  var yC;
  return null !== (yC = null === CC || void 0 === CC ? void 0 : CC.color) && void 0 !== yC ? yC : null === CC || void 0 === CC ? void 0 : CC.colour;
}
export const w = {
  creative: "Creative",
  survival: "Survival",
  peaceful: "Peaceful",
  survivaladventure: "Survival Adventure",
  peacefuladventure: "Peaceful Adventure",
  spectator: "Spectator"
};
export const k = {
  global: "Globally",
  perLobby: "Per Lobby",
  none: "None"
};
export const p = {
  default: "Default",
  flat: "Flat",
  twoDimensions: "One Block Wide",
  skyGrid: "Sky Grid",
  customSchematic: "Custom Schematic"
};
export const A = ["bloxdk12.com", "bloxd.com", "bloxd.dev", "doodlecube.io", "bloxdhop.io", "eviltower.io", "playbloxd.com", "buildminecreate.com", "buildhub.work", "buildhub.club", "skillhub.vip", "classcraft.space", "classcraft.site", "collabspace.space", "creativebuilding.site", "creativebuilding.space", "unbloxd.com", "unbloxd.site", "bloxdunblocked.com", "bloxdunblocked.space", "unblockedbloxd.com", "unblockedbloxd.us", "bloxdunblocked.org", "bloxdunblocked.work", "bloxed.net", "bloxdio.space", "bedwars.space", "bedwarsonline.net", "iogamesunblocked.com", "unblockedgames.club", "math.wales", "math.cymru", "geometry.com.de", "trigonometry.website", "geometry.quest", "geometries.top", "maths.icu", "geologies.top", "archeology.top"];
export let h = function (CC) {
  CC.BLOXD_IO = "bloxd.io";
  CC.BLOXD_COM = "bloxd.com";
  CC.BLOXD_HOP_IO = "bloxdhop.io";
  CC.BLOXD_K12_COM = "bloxdk12.com";
  CC.DOODLE_CUBE_IO = "doodlecube.io";
  CC.EVIL_TOWER_IO = "eviltower.io";
  CC.PLAY_BLOXD_COM = "playbloxd.com";
  return CC;
}({});
export let e = function (CC) {
  CC.LOCAL = "LOCAL";
  CC.STAGING = "STAGING";
  CC.PRODUCTION = "PRODUCTION";
  return CC;
}({});
export const R = "numTimesPlayed";
export const Q = "numTimesPlayedCrazyGamesNinetyNineNightsBundle";