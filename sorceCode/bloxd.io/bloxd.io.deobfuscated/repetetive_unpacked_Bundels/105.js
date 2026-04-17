var fC = require("./109.js");
var ky = require("./117.js");
var gC = require("./123.js");
var AC = require("./138.js");
var my = require("./140.js");
var XC = require("./148.js");
var iy = XC;
var LC = require("./66.js");
export function Ab(CC, yC, IC, fC) {
  const ky = CC.getItemStat(yC, IC, "drops");
  const gC = CC.getItemStat(yC, IC, "specialToolDrop");
  return null !== gC && void 0 !== gC && gC.tool && fC === gC.tool ? gC.drops : ky || (null !== ky ? CC.getMetaInfo(IC).rootName : null);
}
export function U(CC) {
  const yC = Math.ceil(CC / 1e3);
  const IC = Math.floor(yC / 3600);
  const fC = Math.floor(yC % 3600 / 60);
  const ky = Math.floor(yC % 60);
  return IC > 0 ? "".concat(IC, ":").concat(Wc(fC), ":").concat(Wc(ky)) : "".concat(fC, ":").concat(Wc(ky));
}
export function H(CC) {
  let yC;
  !function (CC) {
    CC[CC.M = 1e3] = "M";
    CC[CC.CM = 900] = "CM";
    CC[CC.D = 500] = "D";
    CC[CC.CD = 400] = "CD";
    CC[CC.C = 100] = "C";
    CC[CC.XC = 90] = "XC";
    CC[CC.L = 50] = "L";
    CC[CC.XL = 40] = "XL";
    CC[CC.X = 10] = "X";
    CC[CC.IX = 9] = "IX";
    CC[CC.V = 5] = "V";
    CC[CC.IV = 4] = "IV";
    CC[CC.I = 1] = "I";
  }(yC || (yC = {}));
  let IC;
  let fC = "";
  if (CC < 0) {
    console.error("Bad number to convertNumberToRomanNumeral", CC);
  } else {
    if (0 === CC) {
      return "N";
    }
    if (!(CC > 3999)) {
      for (IC in yC) {
        if (isNaN(Number(IC))) {
          for (; CC >= Number(yC[IC]);) {
            fC += IC;
            CC -= Number(yC[IC]);
          }
        }
      }
      return fC;
    }
    console.error("Bad number to convertNumberToRomanNumeral", CC);
  }
}
export function Wc(CC) {
  return (CC < 10 ? "0" : "") + CC;
}
export let Sd = !1;
export function s(CC) {
  return CC.charAt(0).toUpperCase() + CC.slice(1).toLowerCase();
}
export function ae(CC) {
  return CC.split(" ").map((CC, yC) => 0 === yC ? CC.toLowerCase() : s(CC)).join("");
}
export function Zd(CC) {
  return ae(function (CC) {
    return CC.replace(/-/g, " ");
  }(CC));
}
export function ee(CC) {
  return CC.split(" ").map(CC => CC.toLowerCase()).join("_");
}
function sC(CC) {
  return Math.floor(Math.random() * CC.length);
}
export function Xb() {
  return "cart-shopping";
}
Sd = Sd && !1;
export const nc = ["Yellow", "White", "Red", "Purple", "Pink", "Orange", "Magenta", "Lime", "Light Gray", "Light Blue", "Green", "Gray", "Cyan", "Brown", "Blue", "Black"];
const KC = ["Red", "Orange", "Yellow", "Lime", "Blue", "Purple", "Magenta"];
export const q = ["Arrow", "Arrow of Slowness", "Arrow of Poison", "Arrow of Instant Damage", "Arrow of Instant Healing", "Arrow of Regeneration", "Arrow of Weakness", "Arrow of Strength", "Arrow of Defense", "Arrow of Jumping", "Arrow of Speed", "Arrow of Knockback", "Arrow of Invisibility", "Arrow of Haste", "Arrow of Shield", "Arrow of Double Jump", "Arrow of Heat Resistance", "Arrow of X-Ray Vision", "Arrow of Mining Yield", "Arrow of Brain Rot", "Arrow of Milk", "Arrow of Aura XP"];
export const dd = ["Maple Wood Planks", "Aspen Wood Planks", "Plum Wood Planks", "Jungle Wood Planks", "Pine Wood Planks", "Cedar Wood Planks", "Palm Wood Planks", "Pear Wood Planks", "Cherry Wood Planks", "Spectral Wood Planks", "Mango Wood Planks"];
export const fe = ["Red Wool", "Yellow Wool", "White Wool", "Purple Wool", "Pink Wool", "Orange Wool", "Magenta Wool", "Lime Wool", "Light Gray Wool", "Light Blue Wool", "Green Wool", "Gray Wool", "Cyan Wool", "Brown Wool", "Blue Wool", "Black Wool"];
export const uc = ["Maple Ladder", "Pine Ladder", "Plum Ladder", "Cedar Ladder", "Aspen Ladder", "Jungle Ladder", "Palm Ladder", "Pear Ladder", "Cherry Ladder", "Spectral Ladder", "Mango Ladder", "Iron Ladder"];
export const Ad = ["Maple Log", "Aspen Log", "Plum Log", "Jungle Log", "Pine Log", "Cedar Log", "Palm Log", "Pear Log", "Cherry Log", "Spectral Log", "Mango Log"];
export const Gd = ["Maple Sapling", "Aspen Sapling", "Plum Sapling", "Jungle Sapling", "Pine Sapling", "Cedar Sapling", "Palm Sapling", "Pear Sapling", "Cherry Sapling", "Spectral Sapling", "Mango Sapling"];
export const Ic = ["Maple Log", "Barkless Maple Log"];
export const r = ["Aspen Log", "Barkless Aspen Log"];
export const id = ["Plum Log", "Barkless Plum Log"];
export const rc = ["Jungle Log", "Barkless Jungle Log"];
export const ad = ["Pine Log", "Barkless Pine Log"];
export const u = ["Cedar Log", "Barkless Cedar Log"];
export const Xc = ["Palm Log", "Barkless Palm Log"];
export const $c = ["Pear Log", "Barkless Pear Log"];
export const y = ["Cherry Log", "Barkless Cherry Log"];
export const Ud = ["Spectral Log", "Barkless Spectral Log"];
export const Gc = ["Mango Log", "Barkless Mango Log"];
export const Ec = Ad.concat(["Barkless Maple Log", "Barkless Aspen Log", "Barkless Plum Log", "Barkless Jungle Log", "Barkless Pine Log", "Barkless Cedar Log", "Barkless Palm Log", "Barkless Pear Log", "Barkless Cherry Log", "Barkless Spectral Log", "Barkless Mango Log"]);
export const Ac = ["Maple Leaves", "Aspen Leaves", "Plum Leaves", "Jungle Leaves", "Pine Leaves", "Cedar Leaves", "Palm Leaves", "Pear Leaves", "Cherry Leaves", "Autumn Maple Leaves", "Spectral Leaves", "Mango Leaves"];
export const Cd = ["Sand", "Red Sand"];
export const m = ["Messy Stone", "Stone", "Diorite", "Andesite", "Granite"];
export const cb = ["Coal"];
export const md = ["Strength Potion", "Strength Potion II", "Defense Potion", "Defense Potion II", "Speed Potion", "Speed Potion II", "Jump Potion", "Jump Potion II", "Haste Potion", "Haste Potion II", "Regeneration Potion", "Regeneration Potion II", "Invisibility Potion", "Shield Potion", "Shield Potion II", "Double Jump Potion", "Heat Resistance Potion"];
export const Oc = ["Poison Potion", "Poison Potion II", "Slowness Potion", "Slowness Potion II", "Weakness Potion", "Weakness Potion II", "Knockback Potion"];
let RC = function (CC) {
  CC.LOG = "Log";
  CC.PLANK = "Plank";
  CC.LEAF = "Leaf";
  CC.STONE = "Stone";
  CC.STEM_FRUIT = "Stem Fruit";
  return CC;
}({});
RC.LOG;
RC.PLANK;
RC.LEAF;
RC.STONE;
RC.STEM_FRUIT;
export const Sc = ["Messy Stone", "Stone"];
export const Bd = ["Poppy", "Red Tulip"];
export const ec = ["Tall Grass", "Grass", "Cactus"];
export const R = ["Dirt|GrassRoots", "Dirt|PineGrassRoots", "Dirt|JungleGrassRoots"];
export const Pd = new LC.b({
  "Grass Block": "Dirt|GrassRoots",
  "Pine Grass Block": "Dirt|PineGrassRoots",
  "Jungle Grass Block": "Dirt|JungleGrassRoots"
});
export const od = ["Awesome", "Exalted", "Frantic", "Merry", "Alert", "Amusing", "Bored", "Brave", "Calm", "Chilly", "Clever", "Clumsy", "Cranky", "Crazy", "Excited", "Foolish", "Fussy", "Fuzzy", "Glowing", "Crafty", "Lumpy", "Messy", "Mighty", "Peppy", "Nimble", "Polite", "Proud", "Quick", "Quiet", "Rusty", "Shining", "Silly", "Sleepy", "Slimy", "Sloppy", "Smooth", "Speedy", "Stinky", "Strict", "Tough", "Tricky", "Wild", "Wise", "Worried", "Haunted", "Fierce", "Opulent", "Saucy", "Irksome", "Famous", "Feral", "Fresh", "Spoony", "Noisy", "Amazing", "Gangly", "Juicy", "Ancient", "Frosty", "Savage", "Fiery", "Enraged", "Surly", "Helpful", "Simple", "Feisty", "Toasty", "Joyful", "Humble", "Extreme", "Grumpy", "Snoozy", "Sneaky", "Cheeky", "Shrewd", "Cunning", "Motley", "Primal", "Harsh", "Sandy", "Funny", "Gentle", "Elegant", "Fancy", "Scruffy", "Eager", "Jolly", "Witty", "Nervous", "Careful", "Gifted", "Melodic", "Raspy", "Modern", "Fluffy", "Prickly", "Shaggy", "Ghastly", "Exotic", "Spicy", "Salty", "Elusive", "Magical", "Beloved", "Squeaky", "Shiny", "Singing", "Pink", "Raging", "Unruly", "Scary", "Flappy", "Tiny", "Haughty"];
export const rd = ["Turtle", "Fox", "Hawk", "Falcon", "Eagle", "Jester", "Joker", "Potato", "Ace", "Flyer", "Driver", "Turkey", "Chicken", "Donkey", "Goat", "Llama", "Weasel", "Koala", "Wolf", "Cook", "Hippie", "Boss", "Goose", "Crawdad", "Toaster", "HotDog", "Wizard", "Unicorn", "Ninja", "Samurai", "Cowboy", "Vampire", "Pirate", "Ogre", "Mentor", "Narwhal", "Cactus", "Bigfoot", "Farmer", "Knight", "Ghost", "BLT", "Baby", "Eyeball", "Hamster", "Toad", "Wombat", "Worm", "Hare", "Zombie", "Mutant", "Mime", "Sheriff", "Toast", "Pancake", "Plumber", "Penguin", "Hammer", "Panda", "Octopus", "Wallaby", "Lemur", "Burrito", "Avenger", "Bobcat", "Donut", "Cobra", "Yodeler", "Diva", "Coconut", "Moose", "Tiger", "Walrus", "Coyote", "Lion", "Puma", "Mango", "Cake", "Ostrich", "Caveman", "Ukulele", "Furball", "Manatee", "Buffalo", "Paladin", "Shaman", "Warrior", "Rogue", "Warlock", "Druid", "Scout", "Banshee", "Artisan", "Citizen", "Badger", "Bear", "Beast", "Centaur", "Coward", "Cyclops", "Hominid", "Goblin", "Kobold", "Gremlin", "Gryphon", "Kraken", "Mystic", "Nomad", "Peasant", "Pegasus", "Rhino", "Sapling", "Yeti", "Sphinx", "Villain", "Warthog", "Squire", "Cheese", "Spider", "Lemon", "Truck", "Banana", "Elf", "Alpaca", "Dragon", "Raccoon", "Taco", "Witch"];
const kI = ["misty", "dusty", "sunny", "rocky", "grand", "mossy", "foggy", "sandy", "windy", "snowy", "shady", "rusty", "vivid", "noble", "brave", "swift", "ashen", "azure", "amber", "coral", "dark", "wild", "lost", "vast", "calm", "bold", "jade", "gold", "dawn", "dusk", "grim", "deep", "high", "iron", "pale", "pure", "warm", "lone", "stark", "faded", "quiet", "still", "muddy", "lunar", "solar", "frost", "storm", "dream", "stone"];
const gy = ["realm", "isle", "peak", "vale", "cove", "haven", "ridge", "forge", "shore", "glade", "gorge", "bluff", "cliff", "basin", "delta", "fjord", "creek", "brook", "marsh", "grove", "crest", "spire", "drift", "vault", "reach", "keep", "glen", "dune", "mesa", "fort", "den", "nest", "pass", "moor", "knoll", "oasis", "brink", "ruins", "downs", "shelf"];
kI.forEach(CC => {
  if (CC.length > 6) {
    throw new Error('personal world name adjective "'.concat(CC, '" exceeds max length of ').concat(6));
  }
});
gy.forEach(CC => {
  if (CC.length > 6) {
    throw new Error('personal world name noun "'.concat(CC, '" exceeds max length of ').concat(6));
  }
});
const Ay = Object.prototype.hasOwnProperty;
function mI(CC, yC) {
  return CC === yC ? 0 !== CC || 0 !== yC || 1 / CC === 1 / yC : CC !== CC && yC !== yC;
}
export function Md(CC, yC) {
  if (mI(CC, yC)) {
    return !0;
  }
  if ("object" !== typeof CC || null === CC || "object" !== typeof yC || null === yC) {
    return !1;
  }
  const IC = Object.keys(CC);
  const fC = Object.keys(yC);
  if (IC.length !== fC.length) {
    return !1;
  }
  for (let ky = 0; ky < IC.length; ky++) {
    if (!Ay.call(yC, IC[ky]) || !mI(CC[IC[ky]], yC[IC[ky]])) {
      return !1;
    }
  }
  return !0;
}
"function" === typeof ArrayBuffer && ArrayBuffer.isView;
export const Lc = 90;
export function Vd(CC) {
  if (null === CC) {
    return 0;
  }
  if ("" === CC.trim() || isNaN(CC)) {
    return null;
  }
  for (let IC = 0; IC < CC.length; IC++) {
    if ("Ee+-".includes(CC.at(IC))) {
      return null;
    }
  }
  const yC = Number(CC);
  return Number.isInteger(yC) && yC >= 0 && yC < 1e16 ? yC : null;
}
export const xc = ["Today", "This week", "All Time"];
export const hc = CC => Array.isArray(CC);
export function Sb(CC) {
  return CC.length > 0 ? CC[sC(CC)] : void 0;
}
export function ob(CC) {
  return Math.atan2(CC[0], CC[2]);
}
export function xb(CC) {
  return [Math.sin(CC), 0, Math.cos(CC)];
}
export function tb(CC) {
  const yC = CC.split(" ");
  let IC = yC[0];
  "Light" === IC && (IC += " " + yC[1]);
  return IC;
}
export function Ob(CC) {
  return "".concat(CC, " Spawn Orb");
}
export function Rb(CC) {
  return "".concat(CC, " Spawner Block");
}
export function qb(CC, yC) {
  return "Caught Mob ".concat(CC.replaceAll(" ", "_"), " ").concat(s(yC));
}
const sy = {
  Deer: "A Doe Through The Green",
  Cow: "Stampede",
  Sheep: "Grant Wool",
  Pig: "Unforgotten Pig",
  Horse: "Sunbathed Gallope",
  Wolf: "Dreaming Canine",
  Wildcat: "Whiskers"
};
export function Nb(CC) {
  return sy[CC] ? sy[CC] : "".concat(CC, " Painting");
}
export const Nc = 1e4;
export let d;
export function O(CC, yC) {
  const IC = {
    seconds: 1e3,
    minutes: 60,
    hours: 60,
    days: 24
  };
  const fC = Object.values(IC);
  let ky = Math.max(0, (yC - CC) / IC.seconds);
  let gC = 1;
  for (; gC < fC.length && ky >= fC[gC]; gC++) {
    ky /= fC[gC];
  }
  const AC = Math.round(ky);
  let my = Object.keys(IC)[gC - 1];
  1 === AC && (my = my.slice(0, -1));
  return {
    unit: my,
    amt: AC
  };
}
export function ud(CC, yC) {
  return !!AC.o.includes(yC) && !AC.i[yC].requiresRanks.some(yC => !CC.includes(yC));
}
export function bc(CC) {
  if (!CC) {
    return 0;
  }
  return CC.superRankFrom + CC.superRankForDays * zy - Date.now();
}
export function _b(CC) {
  if (!CC) {
    return "";
  }
  const yC = CC.superRankFrom + CC.superRankForDays * zy;
  const {
    unit: IC,
    amt: fC
  } = O(Date.now(), yC);
  return "".concat(fC, " ").concat(IC);
}
export function xd(CC, yC) {
  return yC in AC.q && (yC === AC.d || CC.includes("super"));
}
!function (CC) {
  CC.TWO_PI = 2 * Math.PI;
  const yC = CC.HALF_PI = Math.PI / 2;
  const IC = {
    min: 0,
    max: 2 * Math.PI
  };
  const fC = {
    min: 0,
    max: 0
  };
  function ky(CC, yC) {
    return (CC % yC + yC) % yC;
  }
  function gC(CC) {
    return my(0, CC.length, "excludeMax");
  }
  function AC(CC) {
    return CC.min + Math.random() * (CC.max - CC.min);
  }
  function my(CC, yC, IC) {
    fC.min = CC;
    fC.max = "excludeMax" === IC ? yC : yC + 1;
    const ky = AC(fC);
    return Math.floor(ky);
  }
  CC.mod = ky;
  CC.clamp = function (CC, yC, IC) {
    return Math.min(Math.max(CC, yC), IC);
  };
  CC.initPseudoNoiseGenerator = function (CC, yC) {
    const IC = Math.random();
    const fC = 2 * Math.PI * Math.random();
    const ky = Math.random();
    const gC = fC + 2 * Math.PI * Math.random();
    return AC => {
      const my = Math.sin(CC * IC * AC + fC) + Math.cos(CC * ky * AC + gC);
      return yC * my / 2;
    };
  };
  CC.randomAngle = function () {
    return AC(IC);
  };
  CC.fastATan2 = function (CC, IC) {
    const fC = Math.abs(IC);
    const ky = Math.abs(CC);
    const gC = fC > ky;
    const AC = gC ? Math.max(fC, CC) : Math.max(IC, ky);
    if (0 === AC) {
      return 0;
    }
    const my = Math.min(fC, ky) / AC;
    const XC = my * my;
    let iy = ((-.0464964749 * XC + .15931422) * XC - .327622764) * XC * my + my;
    gC || (iy = yC - iy);
    IC < 0 && (iy = Math.PI - iy);
    CC < 0 && (iy = -iy);
    return iy;
  };
  CC.computeShortestRotation = function (CC, yC) {
    return ky(yC - CC + Math.PI, 2 * Math.PI) - Math.PI;
  };
  CC.applyRotation = function (CC, yC, IC) {
    const fC = d.computeShortestRotation(CC, yC);
    const ky = fC < 0 ? -1 : 1;
    const gC = Math.min(IC, Math.abs(fC));
    return d.mod(CC + ky * gC, 2 * Math.PI);
  };
  CC.alignRotationToAxis = function (CC) {
    return Math.round(CC / yC) * yC;
  };
  CC.chooseRandomIndex = gC;
  CC.chooseRandom = function (CC) {
    return CC[gC(CC)];
  };
  CC.isInBounds = function (CC, yC, IC) {
    return yC.min <= CC && ("excludeMax" === IC ? CC < yC.max : CC <= yC.max);
  };
  CC.sampleUniformRealDistribution = AC;
  CC.sampleUniformIntDistribution = my;
  CC.sampleBernoulliDistribution = function (CC) {
    return Math.random() < CC;
  };
  CC.wy = function (CC, yC, IC) {
    return CC * (1 - IC) + yC * IC;
  };
}(d || (d = {}));
fC.f.CHAT_MSG;
fC.f.CHAT_MSG;
fC.f.PLAYER_JOIN;
fC.f.PLAYER_REPORT;
fC.f.PLAYER_NAME_CHANGE;
fC.f.ADMIN_ACTIVITY;
fC.f.MODERATION;
fC.f.LOBBY_INFO;
fC.f.TRIBE_NAME;
fC.f.TRIBE_INFO;
fC.f.FACTION_NAME;
fC.f.FACTION_INFO;
fC.f.NAME_TAG;
fC.f.BOOK;
fC.f.BOARD;
fC.f.MULTI_LINE_CHAT;
fC.f.CUSTOM_GAME_INFO;
export const z = {
  serverUiText: "#cef3ff",
  goldUiText: "#f5d142",
  redUiText: "#ff9d87",
  blueUiText: "#2671d7",
  greenUiText: "#2eeb82",
  yellowUiText: "#f3f351",
  cyanUiText: "#4feded",
  whiteUiText: "#e7e7e7",
  pinkUiText: "#e74de7",
  grayUiText: "#c7c7c7",
  blackUiText: "#000000",
  orangeUiText: "#e19835",
  lilacUiText: "#ce91ce",
  purpleUiText: "#800080",
  magentaUiText: "#ff23ff",
  brownUiText: "#B2614A",
  limeUiText: "#A1FF35",
  lightGrayUiText: "#d7d7d7",
  lightBlueUiText: "#84E0FF",
  damageNumber: "#ffffff",
  criticalDamageNumber: "#e86767",
  pointsNumber: "#FFD700",
  defaultNameTagBackground: "#22283b",
  greenNameTagBackground: "#0d730d",
  partyPurpleNameTagBackground: "#9b39d5",
  redBackground: "#e74d4d",
  blueBackground: "#4d4de7",
  greenBackground: "#4fed4f",
  whiteBackground: "#e7e7e7",
  pinkBackground: "#e74de7",
  redTeam: "#e74d4d",
  blueTeam: "#4d4de7",
  greenTeam: "#4fed4f",
  yellowTeam: "#f3f351",
  cyanTeam: "#4feded",
  whiteTeam: "#e7e7e7",
  pinkTeam: "#e74de7",
  grayTeam: "#4d4d4d",
  blackTeam: "#000000",
  orangeTeam: "#ffa500",
  lilacTeam: "#c8a2c8",
  purpleTeam: "#800080",
  magentaTeam: "#ff00ff",
  brownTeam: "#774433",
  limeTeam: "#A9FF21",
  lightGrayTeam: "#999999",
  lightBlueTeam: "#84E0FF"
};
export const D = {
  Yellow: [15, 15, 3],
  White: [15, 15, 15],
  Red: [15, 3, 3],
  Purple: [9, 3, 12],
  Pink: [15, 8, 10],
  Orange: [13, 8, 3],
  Magenta: [13, 5, 12],
  Lime: [9, 15, 5],
  "Light Gray": [9, 9, 9],
  "Light Blue": [3, 11, 15],
  Green: [9, 11, 4],
  Gray: [5, 5, 5],
  Cyan: [4, 14, 14],
  Brown: [7, 4, 2],
  Blue: [3, 3, 14],
  Black: [2, 2, 2]
};
export function L(CC) {
  const yC = parseInt(CC.substring(1), 16);
  return [yC >> 16, yC >> 8 & 255, 255 & yC];
}
export function kc() {
  return !1;
}
export const $ = {
  "Tier 1": z.grayUiText,
  "Tier 2": z.greenUiText,
  "Tier 3": z.cyanUiText,
  "Tier 4": z.pinkUiText,
  "Tier 5": z.goldUiText,
  None: "#ffffff"
};
export const Y = {
  "Tier 1": 1,
  "Tier 2": 1.27201964951,
  "Tier 3": 1.27201964951 ** 2,
  "Tier 4": 1.27201964951 ** 3,
  "Tier 5": 1.27201964951 ** 4,
  None: 1
};
const zy = 864e5;
export function Lb(CC) {
  return CC.split("_")[0];
}
export function Hb(CC) {
  const yC = CC.split("_");
  if (!(yC.length <= 1)) {
    return yC.slice(1).join("_");
  }
}
export function fb(CC) {
  return ny(Hb(CC));
}
function ny(CC) {
  var yC;
  return null !== (yC = null === CC || void 0 === CC ? void 0 : CC.startsWith(ky.g)) && void 0 !== yC && yC;
}
export function Vb(CC) {
  if (fb(CC)) {
    return Hb(CC).split("|")[1];
  }
  return null;
}
export function Kd(CC) {
  return "classic_".concat(ky.g, "|").concat(CC);
}
new class {
  constructor(CC) {
    this.settings = CC;
    this.idStorage = {};
    void 0 === this.settings.shouldAutomaticallyCleanUp && (this.settings.shouldAutomaticallyCleanUp = !0);
    if (this.settings.rateLimit < 1) {
      throw new Error("Rate must be >= 1.0");
    }
  }
  getNowSecs() {
    return Math.floor(Date.now() / 1e3);
  }
  shouldRateLimit(CC, yC) {
    const {
      rateLimit: IC,
      perSecs: fC
    } = null !== yC && void 0 !== yC ? yC : this.settings;
    this.idStorage[CC] || (this.idStorage[CC] = {
      allowance: IC,
      lastCheck: this.getNowSecs(),
      timeout: null
    });
    const ky = this.idStorage[CC];
    const gC = this.getNowSecs();
    const AC = gC - ky.lastCheck;
    ky.lastCheck = gC;
    ky.allowance += AC * (IC / fC);
    ky.allowance > IC && (ky.allowance = IC);
    const my = ky.allowance < 1;
    my || (ky.allowance -= 1);
    this.settings.shouldAutomaticallyCleanUp && (clearTimeout(ky.timeout), ky.timeout = setTimeout(() => {
      delete this.idStorage[CC];
    }, 1e3 * this.settings.perSecs));
    return my;
  }
  cleanUpIdentifier(CC) {
    this.settings.shouldAutomaticallyCleanUp && console.error(new Error("Should not call RateLimitChecker.cleanUpIdentifier with shouldAutomaticallyCleanUp true").stack);
    delete this.idStorage[CC];
  }
}({
  rateLimit: 5,
  perSecs: 1
});
iy.create();
iy.create();
export function gd(CC, yC, IC, fC, ky) {
  if ("Rainbow" === yC) {
    for (const gC of KC) {
      oy(CC, gC, IC, fC, ky, "Small");
    }
  } else {
    oy(CC, yC, IC, fC, ky, "Large");
  }
}
const Zy = iy.create();
const ly = iy.create();
function oy(CC, yC, IC, fC, ky, gC) {
  iy.set(Zy, IC - 1, fC - 1, ky - 1);
  iy.set(ly, IC + 1, fC + 1, ky + 1);
  CC.playParticleEffect({
    Hy: "".concat(Zd(yC), "Firecracker").concat(gC),
    Uy: Zy,
    Ey: ly
  });
}
export function dc(CC) {
  let yC;
  let IC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  const fC = [CC[0].weight];
  for (yC = 1; yC < CC.length; yC++) {
    fC[yC] = CC[yC].weight + fC[yC - 1];
  }
  const ky = Math.random() * fC[fC.length - 1];
  for (yC = 0; yC < fC.length && !(fC[yC] > ky); yC++);
  return IC ? CC[yC] : CC[yC].item;
}
export let g;
function Ry(CC, yC) {
  var IC;
  var fC;
  var ky;
  var gC;
  return null !== (IC = null === CC || void 0 === CC || null === (fC = CC.attributes) || void 0 === fC || null === (ky = fC.customAttributes) || void 0 === ky || null === (gC = ky.enchantments) || void 0 === gC ? void 0 : gC[yC]) && void 0 !== IC ? IC : null;
}
!function (CC) {
  CC.getQuickChargeMultiplier = function (CC) {
    const yC = Ry(CC, "Quick Charge");
    return null === yC || yC <= 0 ? 1 : Math.max(1.2 ** -yC, .1);
  };
  CC.getArrowSpeedMultiplier = function (CC) {
    const yC = Ry(CC, "Arrow Speed");
    return null === yC || yC <= 0 ? 1 : (1.2 * yC + 1) ** .5;
  };
  CC.getArrowDamage = function (CC, yC) {
    const IC = Ry(CC, "Arrow Damage");
    if (null === IC || IC <= 0) {
      return yC;
    }
    const fC = IC / 2;
    yC += 5 * fC ** .5;
    return yC *= 1 + .5 * fC / (1 + fC);
  };
  CC.getBreakSpeedMultiplier = function (CC) {
    const yC = Ry(CC, "Break Speed");
    return null === yC || yC <= 0 ? 1 : Math.max(1.2 ** -yC, .1);
  };
  CC.timeTillMaxMomentum = 5e3;
  CC.getMomentumMultiplier = function (CC, yC) {
    const IC = Ry(CC, "Momentum");
    return null === IC || IC <= 0 ? 1 : Math.max(1.4 ** (-IC * yC), .1);
  };
  CC.getExtraYieldAmount = function (CC, yC) {
    const IC = Ry(yC, CC);
    return null === IC || IC <= 0 ? 0 : d.sampleUniformIntDistribution(0, IC, "includeMax");
  };
  CC.getHorizontalKnockbackMultiplier = function (CC) {
    const yC = Ry(CC, "Horizontal Knockback");
    return null === yC || yC <= 0 ? 1 : (yC + 1) ** .5;
  };
  CC.getVerticalKnockbackMultiplier = function (CC) {
    const yC = Ry(CC, "Vertical Knockback");
    return null === yC || yC <= 0 ? 1 : (yC + 1) ** .5;
  };
  CC.getStompDamageMultiplier = function (CC) {
    const yC = Ry(CC, "Stomp Damage");
    return null === yC || yC <= 0 ? 1 : (yC + 1) ** .5;
  };
}(g || (g = {}));
Math.log(.85);
export function mb(CC) {
  const yC = null === CC || void 0 === CC ? void 0 : CC.split(" ");
  if (yC) {
    const CC = yC[yC.length - 1];
    if (gC.b.includes(CC)) {
      return CC;
    }
  }
  return null;
}
export function jb(CC) {
  return LC.q - gC.b.length + gC.b.indexOf(CC);
}
export function M(CC, yC, IC) {
  let fC;
  fC = "getEngineStats" in CC ? CC.getEngineStats().blockMetadata : CC;
  const ky = new Set(Object.keys(fC).map(CC => fC[CC].id));
  ky.add(0);
  const gC = new IC(Math.max(...ky) + 1);
  for (const AC of ky) {
    gC[AC] = Number(yC(AC));
  }
  return gC;
}
export let i;
!function (CC) {
  let yC = function (CC) {
    CC[CC.Superliked = 0] = "Superliked";
    CC[CC.Liked = 1] = "Liked";
    CC[CC.Neutral = 2] = "Neutral";
    CC[CC.Disliked = 3] = "Disliked";
    CC[CC.Inedible = 4] = "Inedible";
    return CC;
  }({});
  CC.MobFoodType = yC;
  CC.getMobFoodType = function (CC, IC, fC) {
    if (!IC) {
      return yC.Inedible;
    }
    const ky = CC.getMobSetting(fC, "tameInfo");
    const gC = CC.getMobSetting(fC, "petInfo").superlikedFood;
    if (!ky) {
      return yC.Inedible;
    }
    const {
      likedFoods: AC,
      neutralFoods: my,
      dislikedFoods: XC,
      foodItemsWithEffects: iy
    } = ky;
    if (IC === gC) {
      return yC.Superliked;
    }
    if (null !== AC && void 0 !== AC && AC.includes(IC)) {
      return yC.Liked;
    }
    if (null !== my && void 0 !== my && my.includes(IC)) {
      return yC.Neutral;
    }
    if (null !== XC && void 0 !== XC && XC.includes(IC)) {
      return yC.Disliked;
    }
    if (iy) {
      for (const LC of iy) {
        if (LC.itemName === IC) {
          return yC.Neutral;
        }
      }
    }
    return yC.Inedible;
  };
  let IC = function (CC) {
    CC[CC.Full = 0] = "Full";
    CC[CC.Peckish = 1] = "Peckish";
    CC[CC.Hungry = 2] = "Hungry";
    CC[CC.Starving = 3] = "Starving";
    return CC;
  }({});
  CC.MobHungerLevel = IC;
  CC.hungerLevelTranslations = {
    [IC.Full]: {
      translationKey: "mobAiPlugin:full"
    },
    [IC.Peckish]: {
      translationKey: "mobAiPlugin:peckish"
    },
    [IC.Hungry]: {
      translationKey: "mobAiPlugin:hungry"
    },
    [IC.Starving]: {
      translationKey: "mobAiPlugin:starving"
    }
  };
  CC.hungerLevelIcons = {
    [IC.Full]: ["Hunger", "Hunger", "Hunger"],
    [IC.Peckish]: ["Hunger", "Hunger", "Empty Hunger"],
    [IC.Hungry]: ["Hunger", "Empty Hunger", "Empty Hunger"],
    [IC.Starving]: ["Empty Hunger", "Empty Hunger", "Empty Hunger"]
  };
  function fC(CC) {
    if ((0, LC.w)(CC)) {
      return IC.Hungry;
    }
    const yC = Date.now() - CC;
    let fC = IC.Full;
    for (; fC !== IC.Starving;) {
      if (yC < ky[fC + 1]) {
        return fC;
      }
      fC++;
    }
    return IC.Starving;
  }
  CC.getMobHungerLevel = fC;
  CC.calculateStarvingPointsDelta = function (CC, yC) {
    if (fC(yC) !== IC.Starving) {
      return 0;
    }
    const {
      pointsIntoCurrentLevel: my,
      level: LC
    } = iy(CC);
    let YC = my;
    LC === AC && (YC += XC[LC - 1]);
    const bC = Date.now() - yC - ky[IC.Starving];
    const rC = Math.ceil(bC / 108e5);
    return -Math.min(rC * gC, YC);
  };
  CC.getNextStateAt = function (CC) {
    return (0, LC.w)(CC) ? Date.now() : CC + ky[fC(CC) + 1];
  };
  const ky = {
    [IC.Peckish]: 15e4,
    [IC.Hungry]: 288e5,
    [IC.Starving]: 3 * zy
  };
  const gC = 5;
  CC.feedTextColours = {
    [yC.Superliked]: z.magentaUiText,
    [yC.Liked]: "#00ff00",
    [yC.Neutral]: z.yellowUiText,
    [yC.Disliked]: z.grayUiText
  };
  const AC = CC.MAX_LEVEL = my.e;
  const XC = CC.friendshipPointsForNextLevel = {
    0: 10,
    1: 100,
    2: 200,
    3: 500,
    4: 1e3,
    5: 1 / 0
  };
  function iy(CC) {
    for (let yC = 0; yC < AC; yC++) {
      if (CC < XC[yC]) {
        return {
          level: yC,
          pointsIntoCurrentLevel: CC,
          totalPointsForNextLevel: XC[yC]
        };
      }
      CC -= XC[yC];
    }
    return {
      level: AC,
      pointsIntoCurrentLevel: CC,
      totalPointsForNextLevel: 0
    };
  }
  CC.getFriendshipLevelInfo = iy;
  CC.getIconsFromFriendshipPoints = function (CC) {
    const {
      level: yC
    } = iy(CC);
    return Array.from({
      length: AC
    }).map((CC, IC) => IC < yC ? "Friendship" : "Dotted Friendship");
  };
  CC.decreaseFriendshipPointsForNewOwner = function (CC) {
    if ((0, LC.w)(CC)) {
      return CC;
    }
    const {
      pointsIntoCurrentLevel: yC
    } = iy(CC);
    return CC - yC;
  };
  const YC = {
    Renaming: {
      icon: "Name Tag",
      displayName: {
        translationKey: "mobAiPlugin:renamingTitle"
      },
      description: {
        translationKey: "mobAiPlugin:renamingDescription"
      }
    },
    "Double Poop": {
      icon: "Double Poop",
      displayName: {
        translationKey: "mobAiPlugin:doublePoopTitle"
      },
      description: {
        translationKey: "mobAiPlugin:doublePoopDescription"
      }
    },
    "Special Drops": {
      icon: (CC, yC, IC) => {
        var fC;
        var ky;
        return null !== (fC = null === (ky = yC.tameInfo) || void 0 === ky ? void 0 : ky.guaranteedDrop) && void 0 !== fC ? fC : "Question Mark";
      },
      displayName: (CC, yC, IC) => {
        var fC;
        const ky = null === (fC = yC.tameInfo) || void 0 === fC ? void 0 : fC.guaranteedDrop;
        return [{
          translationKey: "mobAiPlugin:specialDropsTitle"
        }, " (", {
          str: CC.getDefaultItemStat(ky, "displayName")
        }, ")"];
      },
      description: (CC, yC, IC) => {
        var fC;
        const ky = null === (fC = yC.tameInfo) || void 0 === fC ? void 0 : fC.guaranteedDrop;
        return [{
          str: CC.getDefaultItemStat(ky, "description")
        }, "\n\n", {
          translationKey: "mobAiPlugin:specialDropsDescription"
        }];
      }
    },
    Thorns: {
      icon: "Thorns",
      displayName: {
        translationKey: "mobAiPlugin:thornsTitle"
      },
      description: {
        translationKey: "mobAiPlugin:thornsDescription"
      }
    },
    "Rainbow Wool": {
      icon: "Rainbow Wool",
      displayName: {
        translationKey: "mobAiPlugin:rainbowWoolTitle"
      },
      description: {
        translationKey: "mobAiPlugin:rainbowWoolDescription"
      }
    },
    "Max Health +": {
      icon: "Max Health",
      displayName: {
        translationKey: "mobAiPlugin:maxHealthTitle"
      },
      description: {
        translationKey: "mobAiPlugin:maxHealthDescription"
      }
    },
    "Damage +": {
      icon: "Damage",
      displayName: {
        translationKey: "mobAiPlugin:damageTitle"
      },
      description: {
        translationKey: "mobAiPlugin:damageDescription"
      }
    },
    "Riding Speed +": {
      icon: "Riding Speed",
      displayName: {
        translationKey: "mobAiPlugin:ridingSpeedTitle"
      },
      description: {
        translationKey: "mobAiPlugin:ridingSpeedDescription"
      }
    },
    "Self Yield": {
      icon: "Self Yield",
      displayName: {
        translationKey: "mobAiPlugin:selfYieldTitle"
      },
      description: {
        translationKey: "mobAiPlugin:selfYieldDescription"
      }
    },
    Painting: {
      icon: (CC, yC, IC) => Nb(IC),
      displayName: {
        translationKey: "mobAiPlugin:paintingTitle"
      },
      description: {
        translationKey: "mobAiPlugin:paintingDescription"
      }
    },
    Friends: {
      icon: "Friends",
      displayName: {
        translationKey: "mobAiPlugin:friendsTitle"
      },
      description: {
        translationKey: "mobAiPlugin:friendsDescription"
      }
    },
    "Pack Leader": {
      icon: "Pack Leader",
      displayName: {
        translationKey: "mobAiPlugin:packLeaderTitle"
      },
      description: {
        translationKey: "mobAiPlugin:packLeaderDescription"
      }
    },
    "Poison Claws": {
      icon: "Poison Claws",
      displayName: {
        translationKey: "mobAiPlugin:poisonClawsTitle"
      },
      description: {
        translationKey: "mobAiPlugin:poisonClawsDescription"
      }
    },
    "Mob Power": {
      icon: "Mob Slayer",
      displayName: {
        translationKey: "mobAiPlugin:mobPowerTitle"
      },
      description: {
        translationKey: "mobAiPlugin:mobPowerDescription"
      }
    },
    "Mob Yield": {
      icon: "Mob Yield",
      displayName: {
        translationKey: "mobAiPlugin:mobYieldTitle"
      },
      description: {
        translationKey: "mobAiPlugin:mobYieldDescription"
      }
    },
    "Feed Aura": {
      icon: "Feed Aura",
      displayName: {
        translationKey: "mobAiPlugin:feedAuraTitle"
      },
      description: {
        translationKey: "mobAiPlugin:feedAuraDescription"
      }
    },
    Antlers: {
      icon: "Antlers Bonus",
      displayName: {
        translationKey: "mobAiPlugin:antlersTitle"
      },
      description: {
        translationKey: "mobAiPlugin:antlersDescription"
      }
    }
  };
  CC.getBonusDisplayInfo = function (CC, yC, IC, fC) {
    let {
      icon: ky,
      displayName: gC,
      description: AC
    } = YC[fC];
    "function" === typeof ky && (ky = ky(CC, yC, IC));
    "function" === typeof gC && (gC = gC(CC, yC, IC));
    "function" === typeof AC && (AC = AC(CC, yC, IC));
    return {
      icon: ky,
      displayName: gC,
      description: AC
    };
  };
}(i || (i = {}));
export function Eb(CC, yC, IC) {
  const fC = !CC || "Empty Bottle" === yC;
  return {
    shouldModifySelectedSlot: fC,
    shouldModifyEmptySlot: fC && 1 !== IC
  };
}