var fC = require("./424.js");
var ky = require("./433.js");
var gC = require("./439.js");
var AC = require("./105.js");
var my = require("./442.js");
const XC = (() => {
  return (0, my.w)() ? my.h : my.f;
})();
const iy = (() => {
  return (0, my.w)() ? fC.e.STAGING : fC.e.PRODUCTION;
})();
const LC = "".concat(XC, ".discordsays.com/").concat(".proxy");
export const i = {
  standing: [0, 0, 0],
  sitting: [0, -.25, 0],
  zombie: [0, 0, 0],
  gliding: [0, -.25, 0],
  driving: [0, -.25, 0],
  sleeping: [0, -.83, 0],
  riding: [0, -.25, 0]
};
const bC = {
  Fy: 1,
  fluidDrag: -1,
  fluidDragHoriz: -1,
  fluidDragVert: -1,
  uy: 2,
  width: .5,
  height: 1.8,
  canRun: !0,
  canJump: !0,
  Dy: !0,
  offset: [0, 0, 0],
  pose: "standing",
  effect: null,
  canReverse: !1,
  standingFriction: 5,
  pushDistMax: 0,
  moveMagnitudeMult: 1,
  speedMult: 1
};
class rC {
  constructor(CC) {
    let yC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    this.settings = {};
    this.tiers = {};
    this.cachedTierValues = {};
    if (CC) {
      for (const yC in CC) {
        this.settings[yC] = CC[yC];
      }
      this.tiers = yC;
    }
  }
  getValue(CC, yC) {
    var IC;
    var fC;
    return this.tiers && this.tiers[yC] ? null !== (fC = this.tiers[yC].settings[CC]) && void 0 !== fC ? fC : this.getValue(CC) : null !== (IC = this.settings[CC]) && void 0 !== IC ? IC : bC[CC];
  }
  getValues(CC) {
    const yC = this.cachedTierValues[CC];
    if (void 0 !== yC) {
      return yC;
    }
    const IC = {};
    const fC = new Set(Object.keys(this.settings).concat(Object.keys(bC)));
    for (const ky of fC) {
      IC[ky] = this.getValue(ky, CC);
    }
    this.cachedTierValues[CC] = IC;
    return IC;
  }
  getMaxValue(CC) {
    let yC = this.getValues()[CC];
    if (!yC || "number" !== typeof yC) {
      return null;
    }
    if (this.tiers) {
      for (const IC in this.tiers) {
        const fC = this.tiers[IC].getValue(CC);
        yC = Math.max(yC, fC);
      }
    }
    return yC;
  }
  getMinValue(CC) {
    let yC = this.getValues()[CC];
    if (!yC || "number" !== typeof yC) {
      return null;
    }
    if (this.tiers) {
      for (const IC in this.tiers) {
        const fC = this.tiers[IC].getValue(CC);
        yC = Math.min(yC, fC);
      }
    }
    return yC;
  }
}
export const g = {
  [ky.i.PLAYER]: new rC({}),
  [ky.i.BOAT]: new rC({
    Fy: .25,
    fluidDrag: 2,
    fluidDragHoriz: 0,
    fluidDragVert: 2,
    uy: 2,
    width: .5,
    height: 1.2,
    canRun: !1,
    canJump: !1,
    Dy: !1,
    pose: "sitting",
    effect: {
      name: "Boating",
      icon: "Boating"
    },
    speedMult: 10,
    inAirSpeedMult: 8,
    onLandSpeedMult: .25,
    moveMagnitudeMult: .03,
    pushDistMax: 7.3,
    standingFriction: .4
  }, {
    [ky.c.OBSIDIAN]: new rC({
      effect: {
        name: "Boating",
        icon: "Obsidian Boating"
      }
    })
  }),
  [ky.i.GLIDER]: new rC({
    uy: 0,
    width: .5,
    height: 1.4,
    canRun: !0,
    Dy: !0,
    pose: "gliding",
    effect: {
      name: "Gliding",
      icon: "Gliding"
    },
    accel: .0125,
    maxSpeed: 13
  }, {
    [ky.d.WOOD]: new rC({}),
    [ky.d.IRON]: new rC({
      maxSpeed: 17
    }),
    [ky.d.GOLD]: new rC({
      maxSpeed: 21
    }),
    [ky.d.DIAMOND]: new rC({
      maxSpeed: 25
    })
  }),
  [ky.i.BALLOON]: new rC({
    uy: 0,
    effect: {
      name: "Floating",
      icon: "Red Balloon",
      duration: 16e3
    }
  }, AC.nc.reduce((CC, yC, IC) => {
    CC[IC] = new rC({
      effect: {
        name: "Floating",
        icon: "".concat(yC, " Balloon"),
        duration: 16e3
      }
    });
    return CC;
  }, {})),
  [ky.i.SLEEPING]: new rC({
    canRun: !1,
    canJump: !1,
    canReverse: !1,
    speedMult: 0,
    pose: "sleeping",
    effect: {
      name: "Sleeping",
      icon: "Red Bed"
    },
    moveMagnitudeMult: 0
  }),
  [ky.i.RIDING_MOB]: new rC({
    Fy: 1,
    fluidDrag: 4,
    uy: 6,
    canRun: !0,
    canJump: !0,
    Dy: !0,
    height: 1.5,
    pose: "riding",
    effect: {
      name: "Riding",
      icon: "Riding"
    },
    speedMult: 2.25,
    moveMagnitudeMult: .9
  })
};
export const d = {
  droppedBlockSize: .3,
  Zy: .5,
  ly: 1.8,
  playerHitboxHeights: {
    leg: .7,
    torso: 1.43,
    head: 1.9
  },
  knockbackPotionForceAmt: 700 / 30,
  playerEyeToHeightRatio: .9,
  crouchingEyeHeightRatio: .75,
  sittingEyeHeightRatio: .8,
  gy: 32,
  ironChestPasskeyLength: 4,
  wrongIronChestPasskeyThiefPunishmentDuration: 3e4,
  defaultChunkHorizAddDistance: 2,
  defaultChunkVertAddDistance: 2,
  oy: !0,
  clientTicksPerSecond: 30,
  serverTicksPerSecond: 20,
  saveInterval: 12e4,
  vy: 6,
  defaultSong: "progress",
  maxItemStackSize: 999,
  numInvenSlots: 51,
  skipDbLoadsDefaultSalt: "eS_6YDSDSdwfyeOcsA5JghsmAgEgNx4s3dchmXs-u_Qy53LiRQdObxUEJd8zUg-H9e59ceFZs7w7knFrb-aIKgRRGxW6nAuAQpYr",
  pickupSoundVol: .3,
  pickupSoundRateVariation: .5,
  gliderFuelCooldown: 1e3,
  speedEffectAmount: 1.4,
  jumpEffectAmount: 1.5,
  hasteEffectAmount: .65,
  flyMaxExtraMoveSpeedMult: 1.6,
  defaultBoatEntitySettings: {
    canAttack: !0
  },
  lifeformMeshToBodyPart: {
    ArmLeftMesh: "ArmLeft",
    ArmRightMesh: "ArmRight",
    BodyMesh: "Torso",
    Body: "Torso",
    BootsLeft: "LegLeft",
    BootsRight: "LegRight",
    GauntletLeft: "ArmLeft",
    GauntletRight: "ArmRight",
    HeadMesh: "Head",
    HairMesh: "Head",
    Helmet: "Head",
    Head: "Head",
    LegLeftMesh: "LegLeft",
    LegLeft: "LegLeft",
    LegRightMesh: "LegRight",
    LegRight: "LegRight"
  },
  nonRenameableItems: ["Name Tag", "Book"],
  hy: 3,
  maxNumVisibleEntitiesOfSingleType: 100,
  googleClientID: "227459723925-s9g283q0q60ja2m18vgsrkaggo5b4i8t.apps.googleusercontent.com",
  discordClientID: XC,
  bloxdClientEnvironment: iy,
  discordDomain: LC,
  discordEmojiId: "1329515631804022864",
  turnstileDisabled: !1 === gC.e.greenlightChecksEnabled,
  recaptchaDisabled: !1 === gC.e.greenlightChecksEnabled,
  maxVelocity: 1e3,
  maxImpulse: 1e3,
  maxCoord: 4e5,
  bookshelfBookCount: 6,
  mailboxBookCount: 10
};
export const c = {
  serverDisconnected: {
    code: 4e3,
    text: "The server is restarting or there are problems with your internet.",
    canReconnect: !0
  },
  inactivity: {
    code: 4001,
    text: "Kicked for inactivity.",
    canReconnect: !0
  },
  invalidOnjoinArgs: {
    code: 4002,
    text: "This is a bug in bloxd.\nLeave reason: Invalid onJoin arguments.\n",
    canReconnect: !1
  },
  failedToConnect: {
    code: 4003,
    text: "This is a bug in bloxd.\nLeave reason: Error during attachment, unexpected values received.\n",
    canReconnect: !1
  },
  outdatedVersion: {
    code: 4004,
    text: "Running outdated client version\nRefresh your page",
    canReconnect: !1
  },
  wrongLobbyGame: {
    code: 4005,
    text: "Invalid lobby game. This is a bug, please report it on discord.",
    canReconnect: !1
  },
  lobbyDoesntExist: {
    code: 4006,
    text: "Invalid lobby. This is a bug, please report it on discord.",
    canReconnect: !1
  },
  invalidOnJoinArgs3: {
    code: 4007,
    text: "Broken lobby? This is a bug, pls report on discord.",
    canReconnect: !1
  },
  gameOrPluginKick: {
    code: 4008,
    text: "",
    canReconnect: !1
  },
  invalidOnJoinArgs7: {
    code: 4009,
    text: "Bug in bloxd.\nIssue: Invalid onJoin arguments (7).\n",
    canReconnect: !1
  },
  loadDbValsError: {
    code: 4010,
    text: "Error occured loading database values in onAuth. This is a bug, pls report on discord.",
    canReconnect: !0
  },
  noNameError: {
    code: 4011,
    text: "Account does not have saved name. Try rejoining. If this keeps happening, pls report on discord.",
    canReconnect: !0
  },
  roomDisposedEarlyError: {
    code: 4012,
    text: "Error: Room was disposed at start of onAuth called. If this happens repeatedly, pls report on discord.",
    canReconnect: !0
  },
  duplicateLobbyNameError: {
    code: 4013,
    text: "Error: Server created two rooms with same lobby name. If this happens repeatedly, pls report on discord.",
    canReconnect: !0
  },
  idBanned: {
    code: 4014,
    text: "",
    canReconnect: !1
  },
  onJoinError: {
    code: 4015,
    text: "Error during onJoin. This is a bug, pls report on discord.",
    canReconnect: !0
  },
  serverShuttingDownError: {
    code: 4016,
    text: "Error: Server is in the middle of the shutdown process. If this happens repeatedly, pls report on discord.",
    canReconnect: !1
  },
  invalidOnjoinArgs4: {
    code: 4017,
    text: "Bug in bloxd.\nLeave reason: Invalid onJoin arguments.\n",
    canReconnect: !1
  },
  clientLeftDuringAuth: {
    code: 4018,
    text: "Client left during onAuth.\nThis is a bug, please report on discord.\n",
    canReconnect: !0
  },
  invalidOnJoinArgs5: {
    code: 4019,
    text: "This is a bug in bloxd.\nIssue: onjoin arguments are invalid.\n",
    canReconnect: !1
  },
  VpnIp: {
    code: 4020,
    text: "You are connected to a VPN.\nPlease disconnect and refresh the page.\n",
    canReconnect: !1
  },
  GlobalBan: {
    code: 4021,
    text: "You have been banned from bloxd",
    canReconnect: !1
  },
  cannotJoinTwice: {
    code: 4022,
    text: "Your account is already playing.",
    canReconnect: !1
  },
  banned: {
    code: 4023,
    text: "",
    canReconnect: !1
  },
  wrongLobbyVariation: {
    code: 4024,
    text: "Invalid lobby variation. This is a bug, please report it on discord.",
    canReconnect: !1
  },
  loadProxyTypeError: {
    code: 4025,
    text: "Error occured loading proxy type in onAuth. This is a bug, pls report on discord.",
    canReconnect: !0
  },
  loadRecaptchaError: {
    code: 4026,
    text: "Error occured loading recaptcha values in onAuth. This is a bug, pls report on discord.",
    canReconnect: !1
  },
  socialPlayerAttemptJoinError: {
    code: 4027,
    text: "Error occured during social playerAttemptJoin in onAuth.\nYour account may be playing in another tab or location.\nThis is a bug, pls report on discord.",
    canReconnect: !1
  },
  socialPlayerAttemptJoinFail: {
    code: 4028,
    text: "Social playerAttemptJoin failed.\nYour account may be playing in another tab or location.\nThis is a bug, pls report on discord.",
    canReconnect: !1
  },
  roomDisposedLateError: {
    code: 4029,
    text: "Error: Room was disposed at end of onAuth called. If this happens repeatedly, pls report on discord.",
    canReconnect: !0
  },
  failedConnectionArgs: {
    code: 4030,
    text: "This is a bug in bloxd.\nLeave reason: Failed to fully verify join.\nPlease report on discord if this repeatedly happens.",
    canReconnect: !0
  },
  failedConnectionArgs2: {
    code: 4031,
    text: "This is a bug in bloxd.\nLeave reason: Failed to fully verify join. Code 2.\nPlease report on discord if this repeatedly happens.",
    canReconnect: !0
  },
  invalidOnJoinArgs6: {
    code: 4032,
    text: "Bug in bloxd.\nIssue: Invalid onJoin arguments (6).\n",
    canReconnect: !1
  },
  invalidOnJoinArgs8: {
    code: 4033,
    text: "Bug in bloxd.\nIssue: Invalid onJoin arguments (8).\n",
    canReconnect: !1
  },
  invalidOnJoinArgs9: {
    code: 4034,
    text: "Bloxd is (probably) updating.\nPlease refresh your page and try again in a few minutes.\nIf this keeps happening, please report on discord.",
    canReconnect: !1
  },
  kickedDuringOnAuth: {
    code: 4035,
    text: "You were kicked before joining the game.\nYour account is likely playing in another tab or location.\nPlease report on discord if this keeps happening.",
    canReconnect: !1
  },
  tooManyRoomsInCreation: {
    code: 4036,
    text: "Lobby creation failed.\nToo many rooms in creation.\nPlease report on discord if this keeps happening.",
    canReconnect: !0
  },
  pluginOnPlayerAuthFailed: {
    code: 4037,
    text: "You were kicked before joining the game.\nThis is likely a bug in game-plugin code.\nPlease report on discord if this keeps happening.",
    canReconnect: !1
  },
  gameOnPlayerAuthFailed: {
    code: 4038,
    text: "You were kicked before joining the game.\nThis is likely a bug in game code.\nPlease report on discord if this keeps happening.",
    canReconnect: !1
  },
  onCreateDbPromisesFail: {
    code: 4039,
    text: "Lobby creation failed.\nDb promises were rejected.\nPlease report on discord if this keeps happening.",
    canReconnect: !0
  },
  onAuthDbPromisesFail: {
    code: 4040,
    text: "Player auth failed.\nDb promises were rejected.\nPlease report on discord if this keeps happening.",
    canReconnect: !0
  },
  unknownOnCreateError: {
    code: 4041,
    text: "Unknown error during onCreate.\nThis is a bug, please report on discord.",
    canReconnect: !0
  },
  errorGettingGame: {
    code: 4042,
    text: "Error getting game.\nThis is a bug, please report on discord.",
    canReconnect: !1
  },
  malformedPacket: {
    code: 4043,
    text: "Malformed packet.\nThis is a bug, please report on discord.",
    canReconnect: !1
  },
  failedConnectionArgs3: {
    code: 4044,
    text: "This is a bug in bloxd.\nLeave reason: Failed to fully verify join. Code 3.\nPlease report on discord if this repeatedly happens.",
    canReconnect: !1
  },
  invalidOnJoinArgs10: {
    code: 4045,
    text: "Bug in bloxd.\nIssue: Invalid onJoin arguments (10).\n",
    canReconnect: !1
  },
  invalidOnJoinArgs11: {
    code: 4046,
    text: "Bug in bloxd.\nIssue: Invalid onJoin arguments (11).\n",
    canReconnect: !1
  },
  invalidOnJoinArgs12: {
    code: 4047,
    text: "Bug in bloxd.\nIssue: Invalid onJoin arguments (12).\n",
    canReconnect: !1
  },
  failedConnectionArgs4: {
    code: 4048,
    text: "This is a bug in bloxd.\nLeave reason: Failed to fully verify join. Code 4.\nPlease report on discord if this repeatedly happens.",
    canReconnect: !1
  },
  failedConnectionArgs5: {
    code: 4049,
    text: "This is a bug in bloxd.\nLeave reason: Failed to fully verify join. Code 5.\nPlease report on discord if this repeatedly happens.",
    canReconnect: !1
  },
  gameOrPluginOnPlayerAuthRejected: {
    code: 4050,
    text: "",
    canReconnect: !1
  },
  gameRequiresSeparateMatchmaking: {
    code: 4051,
    text: "This game requires a separate matchmaking server.\nPlease report on discord if this keeps happening.",
    canReconnect: !1
  },
  failedDownloadPlayerSchematic: {
    code: 4052,
    text: "The schematic failed to download. The schematic may have been deleted or there was an error in the download process.\nIf you believe this is a bug, please report on discord.",
    canReconnect: !1
  },
  schematicNotPublished: {
    code: 4053,
    text: "The game you're trying to join is not available to play.\nIf you believe this is a bug, please report on discord.",
    canReconnect: !1
  },
  invalidCustomGame: {
    code: 4054,
    text: "Invalid custom game.\nIf you believe this is a bug, please report on discord.",
    canReconnect: !1
  },
  lobbyIsFull: {
    code: 4055,
    text: "Lobby is full",
    canReconnect: !1
  },
  customGameUpdated: {
    code: 4056,
    text: "This custom game has been updated.",
    canReconnect: !0
  },
  customGameNoLongerPlayable: {
    code: 4057,
    text: "The game has been unpublished and is no longer playable.\nIf you believe this is a bug, please report on discord.",
    canReconnect: !1
  },
  tooManyRequests: {
    code: 4058,
    text: "We have received too many requests.\nPlease try rejoining.",
    canReconnect: !0
  },
  lobbyCantBeCreated: {
    code: 4059,
    text: "Lobby cannot be created. This is a bug, please report it on discord.",
    canReconnect: !0
  },
  inactivityCode2: {
    code: 4060,
    text: "Kicked for inactivity. Code 2",
    canReconnect: !1
  },
  inactivityCode3: {
    code: 4061,
    text: "Kicked for inactivity. Code 3",
    canReconnect: !1
  },
  missingIp: {
    code: 4062,
    text: "This is a bug in bloxd.\nLeave reason: Failed to fully verify join. Code 6.\nPlease report on discord if this repeatedly happens.",
    canReconnect: !1
  },
  schematicBanned: {
    code: 4063,
    text: "The game you're trying to join has been banned.",
    canReconnect: !1
  },
  adminClosedLobby: {
    code: 4064,
    text: "Lobby has been closed by Bloxd admin.",
    canReconnect: !1
  }
};
export const f = atob("I0lW");
const TC = new Set();
for (const KC in c) {
  const CC = c[KC].code;
  if (TC.has(CC)) {
    throw new Error("Duplicate leave code: ".concat(CC));
  }
  TC.add(CC);
}
export const e = d;
export const m = {
  bloxd: 270468,
  crazygames: 270786,
  test: 277896
};
export const q = "superRank";
export const k = "cosmeticPacks";