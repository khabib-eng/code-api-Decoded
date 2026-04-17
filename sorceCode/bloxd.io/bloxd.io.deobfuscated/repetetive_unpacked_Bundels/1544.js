var fC = require("./1385.js");
var ky = require("./1521.js");
var gC = require("./1259.js");
var AC = require("./82.js");
var my = require("./1447.js");
var XC = require("./1383.js");
var iy = require("./424.js");
var LC = require("./14.js");
var YC = require("./616.js");
var bC = require("./534.js");
export const j = {
  Arthur: "arthurPFP.jpg",
  stardue: "starduePFP.jpg",
  "Dirty Flea Sack": "dfsPFP.jpg",
  Oliver: "oliverPFP.jpg",
  Tom: "tomPFP.jpg",
  pixelbaker: "pixelbakerPFP.jpg",
  Slushie: "slushiePFP.png",
  Harry: "harryPFP.jpg",
  jasninus: "jasninusPFP.jpg",
  pegasys: "pegasysPFP.jpg",
  ellie: "elliePFP.png",
  Stan: "stanPFP.png"
};
export function c() {
  const CC = Date.now();
  return sC.filter(yC => yC.date.getTime() <= CC);
}
export function f() {
  const CC = AC.j.getItem("lastReadUpdateDate");
  return CC ? c().filter(yC => !CC || yC.date.getTime() > new Date(CC).getTime()) : (k(), []);
}
export function k() {
  const CC = c();
  if (0 === CC.length) {
    return;
  }
  const yC = CC[0].date;
  AC.j.setItem("lastReadUpdateDate", yC.toISOString());
}
function SC(CC) {
  return () => {
    const yC = (0, YC.G)(CC);
    (0, my.o)(yC);
  };
}
function TC(CC) {
  return () => {
    (0, my.o)("/game/".concat(CC));
  };
}
const NC = "\xa0\xa0\xa0\xa0";
const sC = [{
  date: new Date("2026-04-10T15:02:00Z"),
  title: "\u2728Cosmetic Shop!\u2728",
  description: "The Cosmetic Shop has just opened! Three packs are available:\n\xa0\xa0\xa0\xa0Y2K: retro-futuristic streetwear vibes\n\xa0\xa0\xa0\xa0Spring: floral hats, animal suits and pastel looks\n\xa0\xa0\xa0\xa0Astro: spacesuits, alien skins and cosmic gear\n\n\u203c\ufe0fFor a limited time, get 30 days of \u26a1SuperRank\u26a1 with any cosmetic pack purchase!",
  image: "CosmeticPacks.jpg",
  author: ["Harry", "Oliver"],
  callToActionButton: {
    color: "rainbow",
    content: (0, bC.jsx)(bC.Fragment, {
      children: "Go to Shop!"
    }),
    callback: () => {
      LC.b.set({
        openEverythingMenuName: iy.s.COSMETIC_SHOP
      });
    }
  }
}, {
  date: new Date("2026-04-10T11:00:00Z"),
  title: "The Frozen Wastes arrive in DimensionZ!",
  description: "Check out the new Frozen Wastes Dimension!\nExplore new locations, from frigid lakes to an abandoned lab complex, fight new bosses for rare and legendary loot, and hunt down the Collector, a mysterious tradesman with special loot for sale!\n\nA new training grounds dimension has also arrived. Learn the ropes without fear of being attacked by other players, and earn loot to beat your opponents in other dimensions!",
  image: "DimensionZ_FrozenWastes.jpg",
  author: ["ellie"],
  callToActionButton: {
    color: "blue",
    content: (0, bC.jsx)(bC.Fragment, {
      children: "Brave the cold!"
    }),
    callback: SC("extraction")
  }
}, {
  date: new Date("2026-04-07T13:00:00Z"),
  title: "Lighting has been added to Graphics Settings!",
  description: "This new graphics setting makes the world look more dynamic and realistic, and is now available for everyone! While we are still optimising it, it will make the world generate a little slower, so try it out and let us know what you think!\n\nWe've also added 17 invisible light source blocks for builders to use, like Invisible Sky Light, Invisible Purple Light, and more!",
  image: "lighting_setting_cave.jpg",
  author: ["Tom", "Arthur"]
}, {
  date: new Date("2026-04-07T10:00:00Z"),
  title: "One Block shops and quests!",
  description: "Check out the guild shops in the newly opened town hall!\nThese shops can be upgraded to unlock even more items.\n\nThere are also new daily and weekly quests!\nExplore the Hub as well for hidden chests\nThese mostly contain coins, but also something else...\n\nAlso updated island permissions, so you can have visitors, miners and builders!\nThese will also stick around when logging off now\n\nCheck out the physical leaderboard in the bank as well, and Fred's found his pigs!\nLastly, mining your One Block on a slow connection should now be more responsive",
  image: "one_block_guilds.jpg",
  author: ["jasninus", "Harry"],
  callToActionButton: {
    color: "blue",
    content: (0, bC.jsx)(bC.Fragment, {
      children: "Start mining!"
    }),
    callback: SC("oneBlock")
  }
}, {
  date: new Date("2026-04-07T09:00:00Z"),
  title: "Custom Games & Worlds - Code Editor and more!",
  description: "A bunch of new updates have been added to creating Custom Games & Worlds!\n\u2022 Code Editor: A new and improved code editor with syntax highlighting and autocomplete\n\u2022 Mesh entities: You can now spawn custom Mesh Entities and Throwables\n\u2022 Lobby Code: Lobby Code character limit increased! You can now hide your lobby code from players!\n\nCheck out the Code API Github Page for more information!",
  image: "code_editor.jpg",
  author: "Slushie"
}, {
  date: new Date("2026-04-02T11:00:00Z"),
  title: "The Bloxd SMP - Duels!",
  description: "Lots of improvements to the Bloxd SMP!\n\u2022 1v1 Duels are now available from the spawn hub\n\u2022 You can now cancel your market listings at any time\n\u2022 Increased max number of listings (20 \u2192 50) per player",
  image: "smp_update_duels.jpg",
  author: "Stan",
  callToActionButton: {
    color: "blue",
    content: (0, bC.jsx)(bC.Fragment, {
      children: "Try it now"
    }),
    callback: SC("classic_smp")
  }
}, {
  date: new Date("2026-03-31T13:00:00Z"),
  title: "Dress Up VS DimensionZ!",
  description: "Two new game modes are here for you to try:\n\u2022 DRESS UP: Express yourself! Match the theme, strut the catwalk and get voted on by other players \ud83d\udc57\n\u2022 DIMENSIONZ: Deploy into intense PvPvE matches and loot valuable gear - but if you die, you lose it all! \ud83d\udc80",
  image: "dressUpVdimensionZ.jpg",
  author: "ellie"
}, {
  date: new Date("2026-03-30T12:00:00Z"),
  title: "New Pirates Map - Scorched Sails!",
  description: "Play the new 2-ship Pirates map - Scorched Sails!",
  image: "pirates_scorched_sails.jpg",
  author: "Harry",
  callToActionButton: {
    color: "blue",
    content: (0, bC.jsx)(bC.Fragment, {
      children: "Try it now"
    }),
    callback: SC("pirates")
  }
}, {
  date: new Date("2026-03-26T12:00:00Z"),
  title: "New Clutch Map: Construction!",
  description: "\ud83c\udfd7\ufe0f The new Construction map has been added to Clutch.\n\nOutplay your opponents in on this multi level arena!",
  image: "clutch_construction_map.jpg",
  author: ["pegasys", "Harry"],
  callToActionButton: {
    color: "blue",
    content: (0, bC.jsx)(bC.Fragment, {
      children: "Try it now"
    }),
    callback: SC("clutch")
  }
}, {
  date: new Date("2026-03-24T11:00:00Z"),
  title: "Tsunami Gauntlet!",
  description: '\u26a0\ufe0fGet ready to test your skills in the Gauntlet!\u26a0\ufe0f\n\u2022 Complete courses with parkour and mobs while still avoiding the waves \ud83c\udf0a\n\u2022 Are you bold enough to try Nightmare difficulty? \ud83d\udc80\n\u2022 Earn diamonds for completing Gauntlets to buy special upgrades! \ud83d\udc8e\n\nAlso check out daily quests! Each will give you an extra Lucky Wheel spin! \ud83c\udf40\nAnd there\'s a new "Boss" in town \ud83d\udc40',
  image: "tsunami_gauntlet.jpg",
  author: ["jasninus"],
  callToActionButton: {
    color: "blue",
    content: (0, bC.jsx)(bC.Fragment, {
      children: "Try it now"
    }),
    callback: SC("tsunami")
  }
}, {
  date: new Date("2026-03-23T12:00:00Z"),
  title: "Knockout VS Clutch!",
  description: "Two new game modes are here for you to try:\n\u2022 KNOCKOUT: Bonk your way to victory in this chaotic boat brawl \ud83d\udea3\n\u2022 CLUTCH: Pick your loadout, buy upgrades, and outplay your opponents in fast paced shooting combat \ud83d\udd2b",
  image: "knockout_vs_clutch.jpg",
  author: ["pegasys"]
}, {
  date: new Date("2026-03-19T16:00:00Z"),
  title: "Torch and Neon blocks!",
  description: "New blocks have been added!\n\u2022 Normal torches are crafted using planks and coal\n\u2022 Colourful torches are crafted at artisan benches using torches and flowers\n\u2022 Colourful neon blocks are crafted at artisan benches using colourful torches and glass, or colourful glass and torches",
  image: "torch_and_neon.jpg",
  author: ["Tom", "Harry"]
}, {
  date: new Date("2026-03-18T16:00:00Z"),
  title: "Fishing: Fire & Ice!",
  description: "Two new islands have arrived in Fishing!\n\u2022 Explore Embertide Island, a volcanic land with lava fishing and fiery new species \ud83c\udf0b\n\u2022 Brave the frozen waters of Frostfell Island for rare ice-dwelling fish \ud83e\uddca\n\u2022 46 new fish species to catch across both islands!\n\u2022 Brand new characters to find!",
  image: "fishing-fire-ice-update.jpg",
  author: ["ellie", "Harry"],
  callToActionButton: {
    color: "blue",
    content: (0, bC.jsx)(bC.Fragment, {
      children: "Try it now"
    }),
    callback: SC("fishing")
  }
}, {
  date: new Date("2026-03-18T11:00:00Z"),
  title: "Alien Invasion in Tsunami!",
  description: "Check out the new Alien Invasion event in Tsunami!\n\u2022 UFOs are abducting brainrots to ENHANCE them. Be careful not to get abducted yourself \ud83d\udef8\n\u2022 Use the vote menu to pick the next Ultimate Event \ud83d\uddf3\ufe0f\n\u2022 Also go check out the jump waves if you haven't yet \ud83e\udd98\n\u2022 And buy Wave Shields in the consumable shop \ud83d\udee1\ufe0f",
  image: "tsunami_alien_invasion.jpg",
  author: ["jasninus"],
  callToActionButton: {
    color: "blue",
    content: (0, bC.jsx)(bC.Fragment, {
      children: "Try it now"
    }),
    callback: SC("tsunami")
  }
}, {
  date: new Date("2026-03-17T09:00:00Z"),
  title: "Simon Says VS The Bloxd SMP",
  description: "Check out the new Simon Says and The Bloxd SMP games!\n\u2022 Simon Says: Carefully follow Simon's bizarre instructions to complete a series of competitive tasks! \ud83e\udd14\n\u2022 The Bloxd SMP: Trade, Sell and Buy to become the wealthiest player in all of Bloxd! \ud83d\udcb0",
  image: "update_simon_says_vs_the_bloxd_smp.jpg",
  author: ["Stan"]
}, {
  date: new Date("2026-03-11T09:00:00Z"),
  title: "Base skins and more brainrots!",
  description: "Lots of new stuff in Tsunami Steal Brainrots!\n\u2022 Show off your wealth and customize your base with new skins! \u2728\n\u2022 Look out for the new brainrots, who can get one of each first? \ud83d\udd0d\n\u2022 Spawn cannon upgrade which lets you skip some of those boring first sections! \ud83d\ude80\n\u2022 Several new rarities! Omega is more than 200x better than Glitch! \ud83d\udcb0\n\u2022 Now also has support for displaying up to novemdecillions (NoD)\n\u2022 Added a lucky wheel with rewards such as rarity upgrades, wave shields and more \ud83c\udf40",
  image: "tsunami_update_3.jpg",
  author: ["jasninus", "Harry"],
  callToActionButton: {
    color: "blue",
    content: (0, bC.jsx)(bC.Fragment, {
      children: "Try it now"
    }),
    callback: SC("tsunami")
  }
}, {
  date: new Date("2026-03-05T11:00:00Z"),
  title: "Brainrot merging and Signal Hunt in Tsunami!",
  description: "Check out the new stuff in Tsunami Steal Brainrots!\n\u2022 Got some bad brainrots? Merge them to get a better one! \ud83d\udd00\n\u2022 Look out for the new Signal Hunt ultimate event! Use radars to find hidden brainrots \ud83d\udce1\n\u2022 Gold Rush events will spawn gold coins all over the map, grab for instant gold! \ud83e\ude99\n\u2022 Ultra Lucky Blocks have been added to Lucky Spree! \u2618\ufe0f\n\u2022 And Secret is no longer the best rarity you can find normally...",
  image: "tsunami_update_2.jpg",
  author: ["jasninus"],
  callToActionButton: {
    color: "blue",
    content: (0, bC.jsx)(bC.Fragment, {
      children: "Try it now"
    }),
    callback: SC("tsunami")
  }
}, {
  date: new Date("2026-03-03T11:00:00Z"),
  title: "Tsunami Steal Brainrots update!",
  description: "Check out the new additions to Tsunami Steal Brainrots!\n\u2022 Complete collections of brainrots to earn income bonuses! \ud83d\udcb0\n\u2022 Watch out for the Ultimate Events: Lucky Spree and Evolution! \ud83c\udf40\ud83e\udd5a\n\u2022 Upgrade your carry capacity and base capacity! \ud83d\udcaa\n\u2022 Be careful of new zig-zag waves! \ud83c\udf0a",
  image: "tsunami_update_1.jpg",
  author: ["jasninus"],
  callToActionButton: {
    color: "blue",
    content: (0, bC.jsx)(bC.Fragment, {
      children: "Try it now"
    }),
    callback: SC("tsunami")
  }
}, {
  date: new Date("2026-02-24T12:00:00Z"),
  title: "Work at a Restaurant VS Tsunami Steal Brainrots",
  description: "Check out the Work at the Restaurant and Tsunami Steal Brainrots games!\n\u2022 Grab the best brainrots in Tsunami Steal Brainrots and become the richest! \ud83d\udcb0\ud83d\udcb0\ud83d\udcb0\n\u2022 Start cooking up dishes for customers in Work at a Restaurant! \ud83e\uddd1\u200d\ud83c\udf73\ud83c\udf73",
  image: "tsunami_vs_cooking.jpg",
  author: ["jasninus", "Harry"]
}, {
  date: new Date("2026-02-09T08:00:00Z"),
  title: "New Bedwars Squads Map!!",
  description: "You can now play Bedwars on Camp!",
  image: "bedwars_camp.jpg",
  author: "Harry",
  callToActionButton: {
    color: "blue",
    content: (0, bC.jsx)(bC.Fragment, {
      children: "Try it now"
    }),
    callback: SC("bedwars_4v4v4v4")
  }
}, {
  date: new Date("2026-02-04T12:00:00Z"),
  title: "New Skywars Map!!",
  description: "You can now play Skywars in Warehouse!",
  image: "skywars_warehouse.jpg",
  author: "Harry",
  callToActionButton: {
    color: "blue",
    content: (0, bC.jsx)(bC.Fragment, {
      children: "Try it now"
    }),
    callback: SC("skywars")
  }
}, {
  date: new Date("2026-02-04T11:00:00Z"),
  title: "4v4 RANKED BEDWARS!",
  description: "A new Bedwars mode is here! Play ranked 4v4 battles and compete for the highest rank!",
  image: "ranked_bedwars.jpg",
  author: ["Slushie"],
  callToActionButton: {
    color: "blue",
    content: (0, bC.jsx)(bC.Fragment, {
      children: "Try it now"
    }),
    callback: SC("bedwars_4v4")
  }
}, {
  date: new Date("2026-02-03T13:00:00Z"),
  title: "99 Nights - Frozen Forest!",
  description: "A massive 99 Nights update has just dropped! Venture into the Frozen Forest to fight new boss mobs, open the portal to save the lost kids, and enter inferno mode for an ultra hardcore experience... \ud83d\udd25",
  image: "99_nights_frozen_forest.jpg",
  author: ["Dirty Flea Sack", "Harry"],
  callToActionButton: {
    color: "blue",
    content: (0, bC.jsx)(bC.Fragment, {
      children: "Try it now!"
    }),
    callback: SC("ninetyNineNights")
  }
}, {
  date: new Date("2026-02-03T12:00:00Z"),
  title: "New Dive minigame!",
  description: "Try out the new Dive minigame!\nLand in the pool to score points \ud83c\udfaf",
  image: "dive_minigame_update.jpg",
  author: ["jasninus"],
  callToActionButton: {
    color: "blue",
    content: (0, bC.jsx)(bC.Fragment, {
      children: "Try it now!"
    }),
    callback: SC("arcadeMode")
  }
}, {
  date: new Date("2026-02-02T14:00:00Z"),
  title: "Bed Fight is here!",
  description: "Another 1v1 Fight!!! This time with beds (but they're not for sleeping)\nDestroy your opponent's bed and eliminate them to win!",
  image: "ranked_pvp.jpg",
  author: ["Slushie"],
  callToActionButton: {
    color: "blue",
    content: (0, bC.jsx)(bC.Fragment, {
      children: "1v1 someone now!"
    }),
    callback: SC("duels_bed")
  }
}, {
  date: new Date("2026-01-29T13:00:00Z"),
  title: "Bridge Battle more Prestige!",
  description: "\u2022 You can now fully reset your rank to gain Prestige Upgrades! \ud83d\udc51\n\u2022 Upgrades include decreased RPG cooldown, longer block placement range and more \u26a1\n\u2022 Also added charges to RPGs and improved the aim accuracy \ud83c\udfaf\n\u2022 Towers have been added, so you can better shoot from the base roofs \ud83c\udfe0\n\u2022 Check out the leaderboard for even more stats! \ud83c\udfc6",
  image: "bridge_battle_prestige_trophy.jpg",
  author: ["jasninus"],
  callToActionButton: {
    color: "blue",
    content: (0, bC.jsx)(bC.Fragment, {
      children: "Try it now!"
    }),
    callback: SC("bridgeBattle")
  }
}, {
  date: new Date("2026-01-28T14:00:00Z"),
  title: "1v1 Fights Update!",
  description: "1v1 Fights (previously known as Ranked PvP) has been updated!" + "\n\t".concat(NC, "\u2022\tRANKS! What rank will you be?") + "\n\t".concat(NC, "\u2022\tNew Mode: Build Fight! Use spikes and nets to win in a whole different way!") + "\n\t".concat(NC, "\u2022\tDuels has become Sword Fight! How much can you do with just a sword?") + "\n\t".concat(NC, "\u2022\tNew flat map for Sword Fight and Build Fight!") + "\n\t".concat(NC, "\u2022\tBridge Fight is now 1v1! Can you score without any extra help?"),
  image: "ranked_pvp.jpg",
  author: ["Slushie"],
  callToActionButton: {
    color: "blue",
    content: (0, bC.jsx)(bC.Fragment, {
      children: "Fight someone!"
    }),
    callback: TC("ranked")
  }
}, {
  date: new Date("2026-01-26T09:00:00Z"),
  title: "Bridge Battle Prestige and 4-team battles!",
  description: "\u2022 Show off who's the best bridger with the new Prestige Ranks! \ud83d\udc51\n\u2022 And try out the new 4-team battles for even more chaos \ud83d\udca5\n\u2022 Shop cooldowns, so you don't get blown up by Super RPGs *all* the time \u23f0\n\u2022 Background tunes to get you in the right bridging mood \ud83c\udfb6",
  image: "bridge_battle_prestige.jpg",
  author: ["jasninus"],
  callToActionButton: {
    color: "blue",
    content: (0, bC.jsx)(bC.Fragment, {
      children: "Try it now!"
    }),
    callback: SC("bridgeBattle")
  }
}, {
  date: new Date("2026-01-22T14:00:00Z"),
  title: "Ranked PvP is here!",
  description: "Ranked PvP is here!" + "\n\t".concat(NC, "\u2022\tPlay 1v1 Duels or 2v2 Bridge to test your skills!") + "\n\t".concat(NC, "\u2022\tPlay your placement games to get an MMR value!") + "\n\t".concat(NC, "\u2022\tCan you get a higher MMR than Arthur? (he's cracked)"),
  image: "ranked_pvp.jpg",
  author: ["Slushie"],
  callToActionButton: {
    color: "blue",
    content: (0, bC.jsx)(bC.Fragment, {
      children: "Grind now!"
    }),
    callback: TC("ranked")
  }
}, {
  date: new Date("2026-01-20T15:00:00Z"),
  title: "Minigames VS Bridge Battle!",
  description: "New gamemodes are here!\nMinigames: Rapid-fire games to test all your skills!\ud83c\udfc6\nBridge Battle: Build your team's bridge the fastest and shoot the other team with RPGs!\ud83d\udca5",
  image: "bridge_vs_minigames.jpg",
  author: ["jasninus"]
}, {
  date: new Date("2026-01-20T14:00:00Z"),
  title: "Show off your stats and get lucky in Fishing!",
  description: "Flex your progress with new nametags and completion stats, get lucky with randomized events, and scour the oceans for every last fish! \ud83d\udc1f",
  image: "fishingRanks.jpg",
  author: ["ellie", "Harry"],
  callToActionButton: {
    color: "blue",
    content: (0, bC.jsx)(bC.Fragment, {
      children: "Show off all your fish!"
    }),
    callback: SC("fishing")
  }
}, {
  date: new Date("2026-01-09T14:00:00Z"),
  title: "New secrets await in Fishing!",
  description: "A whole host of new creatures have landed in Fishing, alongside a bunch of improvements!\n\nGrab your trusty fishing rod, cast out the line, and discover new leviathans, shiny fish and more!",
  image: "fishing_content_drop_1.jpg",
  author: ["ellie", "Harry"],
  callToActionButton: {
    color: "blue",
    content: (0, bC.jsx)(bC.Fragment, {
      children: "Catch them now!"
    }),
    callback: SC("fishing")
  }
}, {
  date: new Date("2025-12-19T14:00:00Z"),
  title: "Mobs have come to One Block!",
  description: "Mobs will now spawn when you mine your One Block!\nKill them immediately for loot or tame them to have a pet!\nYou can also enable hostile mobs in the shop for an extra challenge.\nVisit Farmer Fred in the hub to spend your coins on more mobs.",
  image: "one_block_mobs.jpg",
  author: ["jasninus", "Harry"],
  callToActionButton: {
    color: "blue",
    content: (0, bC.jsx)(bC.Fragment, {
      children: "Try it now"
    }),
    callback: SC("oneBlock")
  }
}, {
  date: new Date("2025-12-19T14:00:00Z"),
  title: "Fishing vs Capture the Flag!",
  description: "Check out our new Limited-Time Games! Play Capture the Flag for some high-intensity action, or relax and explore a mysterious string of islands in Fishing!.",
  image: "ctf.png",
  author: ["ellie", "Harry"]
}, {
  date: new Date("2025-12-19T12:00:00Z"),
  title: "Maverick has moved!",
  description: "But where did he go?\nPlay now and jump through your portal to find Maverick\nExplore around, and who knows what you might find...",
  image: "maverickq.png",
  author: ["jasninus", "Harry"],
  callToActionButton: {
    color: "blue",
    content: (0, bC.jsx)(bC.Fragment, {
      children: "Teleport now"
    }),
    callback: SC("oneBlock")
  }
}, {
  date: new Date("2025-12-18T12:00:00Z"),
  title: "99 Nights Radar! \ud83d\udce1",
  description: "Use the new Radar Dish in 99 Nights to discover cabins, graveyards and even fortresses! Give it a go - it's pretty satisfying \ud83d\ude06",
  image: "99_nights_radar.jpg",
  author: ["Dirty Flea Sack", "Harry"],
  callToActionButton: {
    color: "blue",
    content: (0, bC.jsx)(bC.Fragment, {
      children: "Try it now"
    }),
    callback: SC("ninetyNineNights")
  }
}, {
  date: new Date("2025-12-16T11:15:00Z"),
  title: "One Block Cross-Lobby Islands & Portal Skins!",
  description: "Bunch of new stuff for One Block for you!\n\t\u2022\tCross-Lobby Islands!" + "\n\t".concat(NC, "\u2022\tYou can now migrate your island to any lobby you want!") + "\n\t".concat(NC, "\u2022\tYou can also freely switch between your different islands at any time.") + "\n\t".concat(NC, "\u2022\tUse the Island Manager category in the shop to manage your saved islands.") + "\n\t\u2022\tPortal Skins!" + "\n\t".concat(NC, "\u2022\tYou can now change what your portal looks like.") + "\n\t".concat(NC, "\u2022\tSelect from a variety of unlockable skins in the shop.") + "\nIs there more to come? Maybe... stay tuned!",
  image: "ob_portal_skins.jpg",
  author: ["Slushie", "jasninus"],
  callToActionButton: {
    color: "blue",
    content: (0, bC.jsx)(bC.Fragment, {
      children: "Try it now"
    }),
    callback: SC("oneBlock")
  }
}, {
  date: new Date("2025-12-12T14:00:00Z"),
  title: "The Warper has Risen",
  description: "A new monster has risen in 99 Nights - the Warper! Feel safe around the campfire at night? Well, that won't last much longer...",
  image: "99_nights_warper.jpg",
  author: ["Dirty Flea Sack", "Harry"],
  callToActionButton: {
    color: "blue",
    content: (0, bC.jsx)(bC.Fragment, {
      children: "Try it now"
    }),
    callback: SC("ninetyNineNights")
  }
}, {
  date: new Date("2025-12-10T14:00:00Z"),
  title: "Lucky Block Battlegrounds Wins!",
  description: "We've done a small rework to the map, as well as adding a bunch of fun new things for the lucky blocks to do!\n\nThere is a thread for feedback and suggestions on the discord.",
  image: "lucky_battlegrounds_ltm_win.jpg",
  author: ["pegasys", "Harry"],
  callToActionButton: {
    color: "blue",
    content: (0, bC.jsx)(bC.Fragment, {
      children: "Give it a try"
    }),
    callback: SC("luckyBattlegrounds")
  }
}, {
  date: new Date("2025-12-05T14:00:00Z"),
  title: "99 Nights Quests and Landmarks!",
  description: "The Travelling Trader has arrived in 99 Nights! He'll give you a compass to help you discover landmarks, and if you bring him what he wants, he'll be sure to reward you with epic loot...\nStay tuned for more advanced quests and improved base building next week!",
  image: "99_nights_quests.jpg",
  author: "Dirty Flea Sack",
  callToActionButton: {
    color: "blue",
    content: (0, bC.jsx)(bC.Fragment, {
      children: "Try it now"
    }),
    callback: SC("ninetyNineNights")
  }
}, {
  date: new Date("2025-12-04T13:00:00Z"),
  title: "New blocks in One Block!",
  description: "\nWe've redesigned the phases in One Block!\nThe chests have also been changed (you have to make your own slabs now :P)",
  image: "ob_phases.jpg",
  author: ["jasninus"],
  callToActionButton: {
    color: "blue",
    content: (0, bC.jsx)(bC.Fragment, {
      children: "Try it now"
    }),
    callback: SC("oneBlock")
  }
}, {
  date: new Date("2025-12-01T14:00:00Z"),
  title: "Lucky Block Battlegrounds vs Pet Simulator!",
  description: "Check out our new Limited-Time Games! Play Lucky Block Battlegrounds for some chaos, or smash crates and get rich with some pets.",
  image: "lucky_vs_pets.jpg",
  author: ["pegasys", "Harry"]
}, {
  date: new Date("2025-11-28T15:00:00Z"),
  title: "99 Nights Random Map!",
  description: "99 Nights now has a randomized map and new structures! Next week we'll add merchant trading, base upgrades and more! Let us know what you think in our Discord server.",
  image: "99_nights_winner.jpg",
  author: ["Dirty Flea Sack", "Harry"],
  callToActionButton: {
    color: "blue",
    content: (0, bC.jsx)(bC.Fragment, {
      children: "Try it now"
    }),
    callback: SC("ninetyNineNights")
  }
}, {
  date: new Date("2025-11-25T10:00:00Z"),
  title: "One Block update season!",
  description: "A few of you have been asking for some One Block updates for a little while :P\nSo we are now kicking off a series of updates for One Block!\nToday's updates are mostly quality of life improvements:\n\t\u2022\tClose your portal if you don't want people to visit your island\n\t\u2022\tAdded nametags to hub portals and the One Block for more clarity\n\t\u2022\tNew \"vein\" system while mining to better reward switching tools",
  image: "ob1.jpg",
  author: ["jasninus"],
  callToActionButton: {
    color: "blue",
    content: (0, bC.jsx)(bC.Fragment, {
      children: "Try it now"
    }),
    callback: SC("oneBlock")
  }
}, {
  date: new Date("2025-11-21T14:00:00Z"),
  title: "99 Nights Revives and Map Expansion!",
  description: "99 Nights is here to stay, and we've added a bunch of stuff to it!\n\t\u2022\tRevive your downed allies\n\t\u2022\tExplore a bigger map\n\t\u2022\tCraft guns and ammo with the new campfire level\n\nNext week we'll be working on a randomized map and adding merchant trading. Stay tuned!",
  image: "99_week1.jpg",
  author: ["Dirty Flea Sack", "Harry"],
  callToActionButton: {
    color: "blue",
    content: (0, bC.jsx)(bC.Fragment, {
      children: "Try it now"
    }),
    callback: SC("ninetyNineNights")
  }
}, {
  date: new Date("2025-11-14T12:00:00Z"),
  title: "99 Nights vs SkyGrid!",
  description: "Check out our new Limited-Time Games! Play SkyGrid for our classic sandbox experience with a novel twist, or survive 99 nights in a brutal haunted forest...",
  image: "99_vs_skygrid.jpg",
  author: ["Dirty Flea Sack", "Harry"]
}, {
  date: new Date("2025-11-13T11:00:00Z"),
  title: "Cube Warfare new mutations!",
  description: "\t\u2022\tAdded map mutations for TDM and FFA\n\t\u2022\tCollect Diamonds!: Players drop all diamonds on death, hold enough to win\n\t\u2022\tExplosives: Players keep getting explosives! Kill to get more\n\t\u2022\tAlso added diamonds around all maps to shoot for extra points!",
  image: "cw_mutations.jpg",
  author: ["jasninus"],
  callToActionButton: {
    color: "blue",
    content: (0, bC.jsx)(bC.Fragment, {
      children: "Try it now"
    }),
    callback: SC("shooting_tdm")
  }
}, {
  date: new Date("2025-11-11T09:00:00Z"),
  title: "Cube Warfare new mode and map!",
  description: "\t\u2022\tAdded a new queue for the Gungame mode in Cube Warfare!\n\t\u2022\tIn Gungame, you progress through weapons by getting kills, get kills with the sword to win!\n\t\u2022\tCheck out the new Cabins map! You can either go through the caves or build your way to the top\n\t\u2022\tAlso includes quality of life improvements to respawn invincibility, map voting and more",
  image: "cw_cabins.jpg",
  author: ["jasninus", "Harry"]
}, {
  date: new Date("2025-11-10T09:00:00Z"),
  title: "Pet Friendship and Feeding!",
  description: "\t\u2022\tYou can now feed your pets regularly and build up a friendship with them!\n\t\u2022\tLevelling up your friendship with your pets will give bonuses for both you and your pets.\n\t\u2022\tThese can range from special foods with cool effects, stat boosts, paintings and more!\n\t\u2022\tYou can also tame Cows, Pigs, Sheep and Deer to add to your pet family!\n\t\u2022\tOh, and also pets can poop now. Do what you will with that information.",
  image: "mob_feeding.jpg",
  author: "Slushie"
}, {
  date: new Date("2025-10-29T11:00:00Z"),
  title: "Spirit Mobs!",
  description: "\t\u2022\tFind Spirit Mobs in ruin loot chests!\n\t\u2022\tThey only appear in legendary chests, so watch out for chests that glow gold.\n\t\u2022\tYou can also find Spirit Saddles in loot chests - use them to ride Spirit Bears, Stags and Gorillas!\n\t\u2022\tEnchanted gear will now appear in loot chests too.",
  image: "spirit_mobs.jpg",
  author: "Dirty Flea Sack"
}, {
  date: new Date("2025-10-24T13:00:00Z"),
  title: "New Cube Warfare map!",
  description: "\tTry out the new Sienna map!",
  image: "sienna.jpg",
  author: ["Harry"],
  callToActionButton: {
    color: "blue",
    content: (0, bC.jsx)(bC.Fragment, {
      children: "Try it now"
    }),
    callback: SC("shooting_tdm")
  }
}, {
  date: new Date("2025-10-23T11:00:00Z"),
  title: "Underground Ruins!",
  description: "\t\u2022\tRuinous dungeons have appeared in caves!\n\t\u2022\tWatch out for Draugr Huntresses and Magma Golems guarding precious loot.\n\t\u2022\tIf you're quick, grab unique Draugr Banners on your way out!\n\t\u2022\tMore special and unique loot coming soon...",
  image: "underground_ruins.jpg",
  author: ["Dirty Flea Sack", "Harry"]
}, {
  date: new Date("2025-10-21T12:00:00Z"),
  title: "Skywars variations!",
  description: "Try out the new Skywars variations! Includes:\t\n\u2022\tOverpowered: Chests start with refilled loot\t\n\u2022\tGolem Gauntlet: Loot golems spawn around the map\t\n\u2022\tExplosives Frenzy: Explosives in all chests!\nAnd more! As well as some quality of life improvements.",
  image: "skywars_variations.jpg",
  author: ["jasninus"],
  callToActionButton: {
    color: "blue",
    content: (0, bC.jsx)(bC.Fragment, {
      children: "Try it now"
    }),
    callback: SC("skywars")
  }
}, {
  date: new Date("2025-10-20T13:00:00Z"),
  title: "Banners!",
  description: "Mark your territory with coloured banners! Place them on the floor for upright banners, or place them on walls and ceilings for hanging banners. More designs coming soon!!!",
  image: "banners.jpg",
  author: ["Dirty Flea Sack", "Harry"]
}, {
  date: new Date("2025-10-15T10:00:00Z"),
  title: "New Skywars map and updates!",
  description: "\t\n\u2022\tNew Aqueduct map for Skywars. \t\n\u2022\tBalance changes. \t\n\u2022\tFixes, especially for spawn perks.",
  image: "aqueduct.jpg",
  author: ["Harry", "jasninus"],
  callToActionButton: {
    color: "blue",
    content: (0, bC.jsx)(bC.Fragment, {
      children: "Try it now"
    }),
    callback: SC("skywars")
  }
}, {
  date: new Date("2025-10-07T10:00:00Z"),
  title: "Skywars kits and perks update!",
  description: "\t\n\u2022\tIntroducing a killstreak system for perks.\t\n\u2022\tSelect a perk for each of three killstreak tiers.\t\n\u2022\tReworked kits to be more balanced.\t\n\u2022\tQuality of life improvements.",
  image: "skywars_update2.jpg",
  author: ["jasninus"],
  callToActionButton: {
    color: "blue",
    content: (0, bC.jsx)(bC.Fragment, {
      children: "Try it now"
    }),
    callback: SC("skywars")
  }
}, {
  date: new Date("2025-10-03T12:00:00Z"),
  title: "Character Customization Improvements",
  description: "\t\u2022\tMore eye styles and colors\t\n\u2022\tMore hair styles\t\n\u2022\tMore top styles and colors",
  image: "personalisationUpdate.jpg",
  author: ["Harry", "Oliver"],
  callToActionButton: {
    color: "blue",
    content: (0, bC.jsx)(bC.Fragment, {
      children: "Try it now"
    }),
    callback: () => {
      LC.b.set({
        openEverythingMenuName: iy.s.CUSTOMISATION
      });
    }
  }
}, {
  date: new Date("2025-10-02T09:00:00Z"),
  title: "Funky Foods!",
  description: "\t\u2022\tCarrots give you X-RAY VISION!\t\n\u2022\tCook Raw Potatoes for a tasty Baked Potato.\t\n\u2022\tBeetroot gives you extra Mining Yield.\t\n\u2022\tYou already know what Rotten Brains give you...\t\n\u2022\tZombies drop Carrots, Raw Potatoes and Rotten Brains.\t\n\u2022\tFind Carrots, Raw Potatoes and Beetroot in Ruin loot.",
  image: "funky_foods.jpg",
  author: "Dirty Flea Sack"
}, {
  date: new Date("2025-10-01T09:00:00Z"),
  title: "\u2728New Character Customization!\u2728",
  description: "We\u2019ve revamped how you can personalize your character, giving you more ways than ever to stand out and express yourself!\n\t\n\u2022\tNew player model design\t\n\u2022\tNew hair, skin, and clothing cosmetics\t\n\u2022\tNew colours to choose from\t\n\u2022\tNew armour design",
  image: "personalisation.jpg",
  author: ["Harry", "Oliver"],
  callToActionButton: {
    color: "blue",
    content: (0, bC.jsx)(bC.Fragment, {
      children: "Try it now"
    }),
    callback: () => {
      LC.b.set({
        openEverythingMenuName: iy.s.CUSTOMISATION
      });
    }
  }
}, {
  date: new Date("2025-09-24T12:00:00Z"),
  title: "Skywars updates!",
  description: "\t\tXP, updated maps and improved chest refill system!\t\n\u2022\tXP and enchanting tables have been added to Skywars! Watch out for loot that gives XP and enchant your gear\t\n\u2022\tMaps have been updated to be more balanced and consistent with smoother bridging\t\n\u2022\tThe chest refill system has been overhauled to be clearer\t\n\u2022\tSpawn chests will provide up to iron gear, middle up to gold and refilled middle chests up to diamond!\t\n\u2022\tOther minor improvements such as new items and chests glinting if they have new loot",
  image: "skywars2_1.jpg",
  author: "jasninus",
  callToActionButton: {
    color: "blue",
    content: (0, bC.jsx)(bC.Fragment, {
      children: "Try it now"
    }),
    callback: SC("skywars")
  }
}, {
  date: new Date("2025-09-18T09:00:00Z"),
  title: "New Bedwars Trios/Squads map!",
  description: "Play the new Bedwars map - Shard!",
  image: "bw_shard.jpg",
  author: "Harry",
  callToActionButton: {
    color: "blue",
    content: (0, bC.jsx)(bC.Fragment, {
      children: "Try it now"
    }),
    callback: SC("bedwars_4v4v4v4")
  }
}, {
  date: new Date("2025-09-10T12:00:00Z"),
  title: "Natural Disaster - Prison map and level 4 disasters!",
  description: "\t\tNew level 4 disasters with disastrous new effects!\t\n\u2022\tPlague: New disaster which infects people and causes blindness at level 4!\t\n\u2022\tLava flood: Permanently melts blocks into burning-hot magma.\t\n\u2022\tTornado: Now spawns two tornadoes, making it more difficult to escape.\t\n\u2022\tZombie outbreak: Skeletons join the fray, now nowhere is truly safe.\t\n\u2022\tEarthquake: Permanently splits the map in half.\t\n\u2022\tMeteor shower: Cryometeors will now rain down and freeze you.",
  image: "PrisonMap.jpg",
  author: "jasninus",
  callToActionButton: {
    color: "blue",
    content: (0, bC.jsx)(bC.Fragment, {
      children: "Try it now"
    }),
    callback: SC("naturalDisaster")
  }
}, {
  date: new Date("2025-08-29T13:00:00Z"),
  title: "New Pirates Map - Cannon Storm!",
  description: "Play the new 2-ship Pirates map - Cannon Storm!",
  image: "pirates_cannon_storm.jpg",
  author: "Harry",
  callToActionButton: {
    color: "blue",
    content: (0, bC.jsx)(bC.Fragment, {
      children: "Try it now"
    }),
    callback: SC("pirates")
  }
}, {
  date: new Date("2025-08-28T14:00:00Z"),
  title: "More Board Shops",
  description: "You can now use boards to automatically equip armour, and buy or sell 'all' of an item from your inventory! Let us know in Discord what other special boards you'd like to see.",
  image: "more_boards.jpg",
  author: "Dirty Flea Sack"
}, {
  date: new Date("2025-08-28T08:00:00Z"),
  title: "Pet Renaming!",
  description: "You can now rename your pets using a Name Tag! This also works if you rename a pet you caught with a Mob Catcher.",
  image: "rename_pets.jpg",
  author: "Dirty Flea Sack"
}, {
  date: new Date("2025-08-21T15:00:00Z"),
  title: "Mob Catchers!",
  description: "Tired of having your annoying pets follow you around everywhere? Now you can catch them in a Mob Catcher! Use a Mob Catcher on your pet to store it in your inventory, and use it again to get your pet back.",
  image: "mob_catcher.jpg",
  author: "Dirty Flea Sack"
}, {
  date: new Date("2025-08-21T10:00:00Z"),
  title: "New Bedwars Maps!",
  description: "Play the new Solos/Duos map - Shire, or the new Squads/Trios map - Aztec!",
  image: "bedwars_shire_aztec.jpg",
  author: "Harry",
  callToActionButton: {
    color: "blue",
    content: (0, bC.jsx)(bC.Fragment, {
      children: "Try it now"
    }),
    callback: SC("bedwars_4v4v4v4")
  }
}, {
  date: new Date("2025-08-20T13:00:00Z"),
  title: "Iron Chests!",
  description: "Ever wanted to lock your chests? Now you can! Set a passkey for your iron chests to keep your items safe from thieves.",
  image: "iron_chests.jpg",
  author: "Dirty Flea Sack"
}, {
  date: new Date("2025-08-20T12:00:00Z"),
  title: "New WorldBuilder Commands!",
  description: "Turn your world upside-down... literally! New WorldBuilder commands have been added! Use //help in chat to view all of them!",
  image: "worldbuilder_update.jpg",
  author: "Slushie"
}, {
  date: new Date("2025-08-18T13:30:00Z"),
  title: "Natural Disaster and Battle Box",
  description: "Two new gamemodes!!\n\t\n\tNatural Disaster\u2604\ufe0f\t\n\u2022\tSurvive through waves of disasters and be the last player standing.\t\n\u2022\tNow with tornadoes and zombie outbreaks!\n\t\n\tBattle Box\u2694\ufe0f\t\n\u2022\tTeam up and battle other teams in rounds to get as many wins as possible!\t\n\u2022\tPick your favourite kit and build the best team composition",
  image: "BattleBoxVSNaturalDisaster.jpg",
  author: "jasninus"
}, {
  date: new Date("2025-08-14T15:00:00Z"),
  title: "New Skywars Map!!",
  description: "You can now play Skywars on Mushroom Land!",
  image: "skywars_mushroomland.jpg",
  author: "Harry",
  callToActionButton: {
    color: "blue",
    content: (0, bC.jsx)(bC.Fragment, {
      children: "Try it now"
    }),
    callback: SC("skywars")
  }
}, {
  date: new Date("2025-08-13T15:00:00Z"),
  title: "Account Linking",
  description: "You can link/unlink multiple authentication providers to your Bloxd account and login using any one of them.",
  image: "account_linking.jpg",
  author: "Oliver"
}, {
  date: new Date("2025-08-13T14:00:00Z"),
  title: "Firecracker Pebbles and Autumn Aspen Trees",
  description: "\u2022\tYou can now combine Firecrackers and Pebbles into the ultimate weapon of mass destruction - The Firecracker Pebble!\t\n\u2022\tAutumn Aspens and Autumn Ferns now spawn in Autumn forests.",
  image: "firecracker_pebbles_and_autumn_aspens.jpg",
  author: "Dirty Flea Sack"
}, {
  date: new Date("2025-08-08T14:00:00Z"),
  title: "Firecrackers and Glider Boosting!",
  description: "Firecrackers can turn the sky pretty colours, or they can boost your Glider!\t\n\u2022\tCraft them using Coal, Sand and Wood Planks.\t\n\u2022\tColour them using flowers in the Artisan Bench.\t\n\u2022\tRight click your Glider to use Firecrackers for a boost!",
  image: "firecrackers.jpg",
  author: "Dirty Flea Sack",
  callToActionButton: {
    color: "gold",
    content: (0, bC.jsx)(bC.Fragment, {
      children: "Play now"
    }),
    callback: SC("classic_survival")
  }
}, {
  date: new Date("2025-08-04T14:00:00Z"),
  title: "Horses!",
  description: "You can now find Horses in Plains and Autumn Forest Biomes!\t\n\u2022\tTame them with Apples or Wheat.\t\n\u2022\tRide them with Saddles.\t\n\u2022\tCraft Saddles using Leather.\t\n\u2022\tGet Leather from Cows.",
  image: "horses.jpg",
  author: "Dirty Flea Sack",
  callToActionButton: {
    color: "gold",
    content: (0, bC.jsx)(bC.Fragment, {
      children: "Play now"
    }),
    callback: SC("classic_survival")
  }
}, {
  date: new Date("2025-07-29T11:00:00Z"),
  title: "Last Stand 2.0!",
  description: "Last Stand 2.0 is out!\t\n\u2022\tPick one of 6 kits.\t\n\u2022\tBrand new set of randomized upgrades.\t\n\u2022\tSpeedy Draugr Huntress and the Fireball throwing Magma Golem!\t\n\u2022\t3 new maps - Castle, Garden and Roads.",
  image: "LastStand2.jpg",
  author: "jasninus",
  callToActionButton: {
    color: "gold",
    content: (0, bC.jsx)(bC.Fragment, {
      children: "Play now"
    }),
    callback: SC("lastStand")
  }
}, {
  date: new Date("2025-07-29T10:00:00Z"),
  title: "Fruity Leaves!",
  description: "Fruity Trees now have Fruity Leaves! No more guessing which Maple leaf has an Apple, or which Palm leaf has a Coconut - you can just pluck the fruit you want! And they make for pretty cool building blocks, too.",
  image: "fruity_leaves.jpg",
  author: "Dirty Flea Sack"
}, {
  date: new Date("2025-07-24T14:00:00Z"),
  title: "Custom Lobby Roles!",
  description: "You can now promote (and demote) players in your custom lobbies! Co-Owners can use World Builder, edit Code Blocks and manage other world settings. Moderators can kick, ban and unban players. More custom-lobby upgrades coming soon!",
  image: "world_roles.jpg",
  author: "Dirty Flea Sack"
}, {
  date: new Date("2025-07-16T14:48:00Z"),
  title: "Solos/Duos Bedwars Map!",
  description: "Try the new Bedwars map: Siege!",
  image: "bedwars_siege.jpg",
  author: "Harry",
  callToActionButton: {
    color: "blue",
    content: (0, bC.jsx)(bC.Fragment, {
      children: "Try it now"
    }),
    callback: SC("bedwars_duo")
  }
}, {
  date: new Date("2025-07-14T11:00:00Z"),
  title: "Rocket Obby Map!",
  description: "New rocket obby map! It's a bit harder than the original map, try it out now!",
  image: "rocket_parkour_january.jpg",
  author: "Tom",
  callToActionButton: {
    color: "blue",
    content: (0, bC.jsx)(bC.Fragment, {
      children: "Try it now"
    }),
    callback: SC("rocketParkour_january")
  }
}, {
  date: new Date("2025-07-14T10:00:00Z"),
  title: "\ud83d\udcf2 iOS Mobile App",
  description: "Bloxd.io has landed on the Apple App Store! Download it by clicking the button below or searching bloxd.io on the Apple App Store! Please leave us a review if you enjoy playing bloxd!",
  image: "AppleAppQRCode.jpg",
  onClickImage: () => {
    window.open("https://apps.apple.com/gb/app/bloxd-io/id6720761703");
  },
  author: "Oliver",
  callToActionButton: {
    color: "blue",
    content: (0, bC.jsx)(bC.Fragment, {
      children: "Get in on the Apple App Store"
    }),
    callback: () => {
      window.open("https://apps.apple.com/gb/app/bloxd-io/id6720761703");
    }
  }
}, {
  date: new Date("2025-07-03T13:00:00Z"),
  title: "Jungle Update!",
  description: "Jungle biomes can now be found in Bloxd! Explore the dense foliage to find jungle ruins, mango trees, wildcats and gorillas! You can tame wildcats with meat, and they'll get the zoomies if you feed them a very special plant... The gorillas may look friendly, but don't underestimate them! They're pretty strong, they'll throw mangoes your way if you get too close, and if defeated, they'll drop bananas. But what do bananas do? Well, you'll have to find out for yourself! (Hint: they give Gorillas a special power no other mobs have...)",
  image: "jungle.jpg",
  author: "Dirty Flea Sack",
  callToActionButton: {
    color: "blue",
    content: (0, bC.jsx)(bC.Fragment, {
      children: "Try it now"
    }),
    callback: SC("classic_survival")
  }
}, {
  date: new Date("2025-06-20T12:00:00Z"),
  title: "Sleeping \ud83d\udca4",
  description: "You can now sleep on beds! Curl up on a Leaf Bed, Wool Bed, or Strong Bed to get some rest. When you wake pick a perk; the sturdier the bed, the longer that perk sticks around!",
  image: "sleeping.jpg",
  author: "Oliver",
  callToActionButton: {
    color: "blue",
    content: (0, bC.jsx)(bC.Fragment, {
      children: "Try it now"
    }),
    callback: SC("classic_survival")
  }
}, {
  date: new Date("2025-06-16T11:00:00Z"),
  title: "New Bedwars Maps!",
  description: "Two new Bedwars Trios/Squads maps - Rooftops and Tavern. Thanks to those who participated in the beta test, your feedback was super helpful! More Solos/Duos maps coming soon!",
  image: "bedwars_tavern_rooftops.jpg",
  author: "Harry",
  callToActionButton: {
    color: "blue",
    content: (0, bC.jsx)(bC.Fragment, {
      children: "Try it now"
    }),
    callback: SC("bedwars_4v4v4v4")
  }
}, {
  date: new Date("2025-06-02T12:00:00Z"),
  title: "Chalk Blocks!",
  description: "An update for the builders out there. This update adds a decorative chalk block (find it at the bottom of rivers). Colour it for some juicy pastel colours, and craft it for some bricks! Complete with equivalent slabs.",
  image: "ChalkAndColouredChalk-compressed.png",
  author: "Arthur"
}, {
  date: new Date("2025-06-02T12:00:00Z"),
  title: "\ud83d\udcf2 Android App Update (v1.1)",
  description: "Bloxd.io has been updated on the Play Store! Make sure to get the update if you have already downloaded the app!\n\n- Added Google sign-in\n- Fixed issue where navigation bar wouldn't disappear\n- Fixed issue where hotbar was appearing too far up the screen\n- Fixed issue affecting performance",
  image: "AndroidAppQRCode.jpg",
  onClickImage: () => {
    window.open("https://play.google.com/store/apps/details?id=io.bloxd.play");
  },
  author: "Oliver",
  callToActionButton: {
    color: "blue",
    content: (0, bC.jsx)(bC.Fragment, {
      children: "Get in on Play Store"
    }),
    callback: () => {
      window.open("https://play.google.com/store/apps/details?id=io.bloxd.play");
    }
  }
}, {
  date: new Date("2025-05-30T12:00:00Z"),
  title: "Knight Sword, Golem Pickaxe and Fur Armour!",
  description: "A bunch of new items have dropped in Bloxd! Draugr Knights now carry a new sword - it's more powerful than a Diamond Sword, and it has knockback too! Golems now drop Golem Eyes, which can be used to craft a Golem Pickaxe. This special pickaxe has a chance to drop Moonstone Fragments when mining ores. Fur can now be used to craft Spiked Boots that do stomp damage when falling on enemies, and a Fur Chestplate that reduces knockback. And there's more to come! What unique items would you like us to add next? Let us know!",
  image: "unique_tools_and_armour.jpg",
  author: "Dirty Flea Sack"
}, {
  date: new Date("2025-05-30T11:00:00Z"),
  title: "Salvaging Table",
  description: "Salvage your unwanted tools and armour to convert them back into resources. Salvage your minerals into Aura Fragments if you don't need them anymore.",
  image: "salvaging_table.jpg",
  author: "Slushie"
}, {
  date: new Date("2025-05-23T12:00:00Z"),
  title: "Enchanting Update!",
  description: "An Enchanting Update is here! You can now enchant tools, bows and... sticks?? Also, Aura XP Orbs and Potions have also been added to the game. Find orbs randomly when grinding for Aura and use them to craft these new potions! They can also be found in the creative menu.",
  image: "enchanting_p2.jpg",
  author: "Slushie"
}, {
  date: new Date("2025-05-16T13:00:00Z"),
  title: "Wildlife Update!",
  description: "Wolves, Bears, Deer and Stags have all appeared in the new and improved Pine Forests! You can tame Wolves using Bones, and they'll defend you loyally to the death. They'll also persist between play sessions, so no need to worry about losing your pets while you're offline. Bears and Stags may seem cute, but careful - they're pretty territorial! Pine trees also have a new look, and you can find new flora on the forest floor. We've also heard rumours of a mythical beast that roams these forests, but we haven't seen one yet... Maybe you can find them? Send us a screenshot if you do!",
  image: "wildlife_update.jpg",
  author: "Dirty Flea Sack"
}, {
  date: new Date("2025-05-15T13:00:00Z"),
  title: "Enchanting is FINALLY here!",
  description: 'Enchanting has finally arrived! You can collect "Aura XP" by mining and smelting ores, killing mobs and farming in order to enchant your items at the new Enchanting Tables! Upgrade your sword and armour to make them more powerful!',
  image: "enchanting.jpg",
  author: "Slushie"
}, {
  date: new Date("2025-05-15T12:00:00Z"),
  title: "\ud83d\udcf2 Android Mobile App",
  description: "Bloxd.io has landed on the Play Store! Download it by clicking the button below or searching bloxd.io on the Play Store! Please leave us a review if you enjoy playing bloxd!\n\nWe will be releasing on the Apple App Store soon!",
  image: "AndroidAppQRCode.jpg",
  onClickImage: () => {
    window.open("https://play.google.com/store/apps/details?id=io.bloxd.play");
  },
  author: "Oliver",
  callToActionButton: {
    color: "blue",
    content: (0, bC.jsx)(bC.Fragment, {
      children: "Get in on Play Store"
    }),
    callback: () => {
      window.open("https://play.google.com/store/apps/details?id=io.bloxd.play");
    }
  }
}, {
  date: new Date("2025-05-02T12:00:00Z"),
  title: "Frozen Badlands!",
  description: "Hostile mobs have made their way to the surface... and they've brought a new biome with them - the Frozen Badlands! Explore this new biome to find a new tree type, new blocks, and new mobs. Pay special attention for the Draugr Knight, which will now spawn deep in caves too. Knights are the apex predator of Bloxd - they're fast, agile and carry a Diamond Sword. They're absolutely vicious, but if you manage to conquer them in combat, you'll get a Diamond Fragment for your troubles. Good luck! (You'll need it...)",
  image: "frozen_badlands.jpg",
  author: "Dirty Flea Sack",
  callToActionButton: {
    color: "blue",
    content: (0, bC.jsx)(bC.Fragment, {
      children: "Try it now"
    }),
    callback: SC("classic_survival")
  }
}, {
  date: new Date("2025-05-01T12:00:00Z"),
  title: "Publish Your Own Game!",
  description: "We've added the ability for any player to publish their own games! You can explore games made by player by clicking the button bellow!",
  image: "customGameList.jpg",
  author: ["Slushie", "Oliver"],
  callToActionButton: {
    color: "blue",
    content: (0, bC.jsx)(bC.Fragment, {
      children: "Try it now"
    }),
    callback: () => {
      (0, my.o)("/custom-games");
    }
  }
}, {
  date: new Date("2025-04-24T12:00:00Z"),
  title: "Spawner Blocks in Ruins!",
  description: "Mob Spawners have been added to Ruins! They've been carefully placed to induce maximum rage, so prepare yourself to get shot off tall ledges by Draugr Skeletons at least 10 times... (Hopefully the loot will make it worthwhile!)",
  image: "spawner_blocks_in_ruins.jpg",
  author: "Dirty Flea Sack",
  callToActionButton: {
    color: "blue",
    content: (0, bC.jsx)(bC.Fragment, {
      children: "Try it now"
    }),
    callback: SC("classic_survival")
  }
}, {
  date: new Date("2025-04-17T12:00:00Z"),
  title: "Mob Spawner Blocks!",
  description: "Fed up of using Code Blocks to spawn mobs? Now you can use Mob Spawner Blocks! These blocks will spawn mobs of your choice when placed. They haven't made their way into the Mysterious Ruins yet, but dont' worry, they'll be there soon!",
  image: "mob_spawner_blocks.jpg",
  author: "Dirty Flea Sack",
  callToActionButton: {
    color: "blue",
    content: (0, bC.jsx)(bC.Fragment, {
      children: "Try it now"
    }),
    callback: SC("classic_creative")
  }
}, {
  date: new Date("2025-04-11T12:00:00Z"),
  title: "Draugr Skeletons!",
  description: "Uh oh - Draugr Skeletons are here to cause more chaos in caves! They drop Bones, which can be used to craft Bone Meal - use this to grow your crops faster. Approach them with caution though, since they almost never miss! (If they accidentally hit a Cave Golem or Draugr Zombie, expect a crazy brawl to break out...)",
  image: "draugr_skeletons.jpg",
  author: "Dirty Flea Sack",
  callToActionButton: {
    color: "blue",
    content: (0, bC.jsx)(bC.Fragment, {
      children: "Try it now"
    }),
    callback: SC("classic_survival")
  }
}, {
  date: new Date("2025-04-04T13:00:00Z"),
  title: "Draugr Zombies!",
  description: "Draugr Zombies have risen from the dead! They've joined forces with Cave Golems to patrol caves for trespassers, and drop Rotten Flesh, Iron Fragments and Gold Fragments on death. Luckily for you, they haven't found their way to the surface. (For now...)",
  image: "draugr_zombies.jpg",
  author: "Dirty Flea Sack",
  callToActionButton: {
    color: "blue",
    content: (0, bC.jsx)(bC.Fragment, {
      children: "Try it now"
    }),
    callback: SC("classic_survival")
  }
}, {
  date: new Date("2025-04-03T11:00:00Z"),
  title: "Game Competition Winners",
  description: "We held a competition for which player could make the best game (on our discord server). The winners are out - Mines Simulator, Lava Shootout, Tower of Difficulty, and Mushroom Parkour.",
  image: "lava_shootout.jpg",
  author: ["Slushie", "Arthur"]
}, {
  date: new Date("2025-03-25T11:00:00Z"),
  title: "More Custom Maps!",
  description: "You can now create custom maps for Cube Warfare, Bridge, Rocket Spleef and Rocket Obby! Use the Custom Lobby Block in the creative menu to create your own map. (So many gamemodes omg!)",
  image: "custom_maps.jpg",
  author: "Slushie"
}, {
  date: new Date("2025-03-21T14:00:00Z"),
  title: "Custom Skywars Maps",
  description: "You can now create your own Custom Skywars Maps and use them in Custom Lobbies! Use the Custom Lobby Block in the creative menu to create your own map. (Already? Bedwars only came out yesterday! The devs always cook!)",
  image: "custom_skywars_maps.jpg",
  author: "Slushie"
}, {
  date: new Date("2025-03-20T14:00:00Z"),
  title: "Custom Bedwars Maps!",
  description: "You can now create your own Custom Bedwars Maps and use them in Custom Lobbies! Use the Custom Lobby Block in the creative menu to create your own map. (You can now stop asking us for a new Duos map...)",
  image: "custom_bedwars_maps.jpg",
  author: "Slushie"
}, {
  date: new Date("2025-03-20T13:00:00Z"),
  title: "Flat & One Block Wide Worlds!",
  description: 'You can now create flat and one block wide worlds! Choose them in the "Map Type" dropdown when creating a world.',
  image: "world_variations.jpg",
  author: "Slushie"
}, {
  date: new Date("2025-03-18T13:00:00Z"),
  title: "New Create Lobby UI",
  description: "The Create Lobby UI has been redesigned! Easily set up your lobby right from the get-go however you want. Also, you can now create a World with a custom schematic to automatically build it for you!",
  image: "create_lobby_ui.jpg",
  author: "Oliver"
}, {
  date: new Date("2025-03-18T13:00:00Z"),
  title: "WorldBuilder and Schematics are available in worlds!",
  description: "World owners can now use WorldBuilder and Schematics in their worlds! Use //help in chat to see the available commands.",
  image: "worldbuilder.jpg",
  author: "Slushie"
}, {
  date: new Date("2025-03-07T13:00:00Z"),
  title: "Cave Golems!",
  description: "Hostile mobs are here! You can find Cave Golems underground, trying to protect their precious ores. They're pretty tough, but they drop Moonstone Fragments when defeated. Be warned, though, dark times are ahead...",
  image: "cave_golems.jpg",
  author: "Dirty Flea Sack"
}, {
  date: new Date("2025-02-25T10:00:00Z"),
  title: "New Defusal Map: Luna Borough",
  description: "A new map has been added to Defusal! Play in the streets of Luna Borough.",
  image: "defusal_lunaborough.jpg",
  author: "Slushie"
}, {
  date: new Date("2025-02-24T11:00:00Z"),
  title: "Bedwars Update - The Lucky Rebalance!",
  description: "Fall damage has been added to bedwars! Also, a bunch of rebalancing, quality of life updates and new lucky items have been added!",
  image: "bedwars_2.jpg",
  author: ["pixelbaker", "Slushie"],
  callToActionButton: {
    color: "blue",
    content: (0, bC.jsx)(bC.Fragment, {
      children: "Try it now"
    }),
    callback: SC("bedwars_4v4v4v4")
  }
}, {
  date: new Date("2025-02-24T11:00:00Z"),
  title: "Code Blocks!",
  description: "Code blocks, along with press to code boards, let world owners write code that makes things happen in-game. We've just added setBlock and more stuff is coming soon. Visit the code channels in discord for more information or to leave feedback and feature requests!",
  image: "code_block.jpg",
  author: "Tom",
  callToActionButton: {
    color: "blue",
    content: (0, bC.jsx)(bC.Fragment, {
      children: "More Info"
    }),
    callback: () => window.open("https://github.com/Bloxdy/code-api")
  }
}, {
  date: new Date("2025-02-20T12:00:00Z"),
  title: "Smarter Mobs \ud83e\udde0",
  description: "The IQ of mobs has just gone up! Mobs have learnt to walk more gracefully, and will run away when you attack them. They'll also look in the direction they're about to move. Rumour has it that they're preparing for something scary that's about to arrive...",
  image: "smarter_mobs.jpg",
  author: "Dirty Flea Sack"
}, {
  date: new Date("2025-02-20T09:00:00Z"),
  title: "Toggle fall damage in worlds!",
  description: "Worlds owners can now enable fall damage for all players. Let us know in Discord if fall damage should be in other games.",
  image: "fall_damage.jpg",
  author: "Slushie"
}, {
  date: new Date("2025-02-13T11:00:00Z"),
  title: "Chili Peppers!",
  description: "Chili Pepper Plants are now in Desert biomes! Harvest them for Chili Peppers, which give you Heat Resistance when you eat them. Chili Peppers can also be brewed into Heat Resistance Potions. So, next time you feel like snorkeling in Lava on the hunt for Magma Blocks, make sure to pack a lunchbox filled with spicy Chili Peppers! (Just be careful not to run out during your sizzling-hot scuba dive...)",
  image: "chili_peppers.jpg",
  author: "Dirty Flea Sack"
}, {
  date: new Date("2025-02-10T09:55:00Z"),
  title: "Bouncy mushrooms!",
  description: "You can find these mushrooms as a rare spawn in forest biomes, or in the creative menu. Bounce away on them - and see what happens when you bunnyhop on one! This update also brings a particle effect for standard bunnyhops.",
  image: "mushroom-compressed.jpg",
  author: "Arthur"
}, {
  date: new Date("2025-02-07T09:55:00Z"),
  title: "Super Rank - Gifting and CrazyGames!",
  description: "Super rank can now be gifted to any player, and can be purchased on crazygames or bloxd.io. Give your friends the ability to wear capes and fancy name tags!",
  image: "gifting.jpg",
  author: "Tom"
}, {
  date: new Date("2025-02-06T17:00:00Z"),
  title: "New Game Popup",
  description: "The Game Popup has been redesigned! Also Custom Lobbies are now displayed in their respective Game Popups instead of being grouped in the Worlds Popup (which has been retired, rest in peace).",
  image: "new_game_popup.jpg",
  author: "Oliver"
}, {
  date: new Date("2025-01-31T15:00:00Z"),
  title: "Lava!",
  description: "Lava pits now spawn in all biomes! You can fill buckets with Lava and use it to create Magma, or pour Water on it to create Obsidian. Be careful though, Lava is pretty hot to touch! You'll need to craft an Obsidian Boat to withstand the heat...",
  image: "lava.jpg",
  author: "Dirty Flea Sack"
}, {
  date: new Date("2025-01-29T11:00:00Z"),
  title: "Fog! \ud83c\udf2b\ufe0f",
  description: "A mysterious fog has descended upon Bloxd, adding some atmosphere and taking the edge off chunks loading in the distance. It's disabled by default but you can enable it in 'Graphics' settings.",
  image: "fog.jpg",
  author: "Oliver"
}, {
  date: new Date("2025-01-22T10:00:00Z"),
  title: "Bedwars Trios & Lucky Items Update!",
  description: "Bedwars Trios is now available! Play with two friends to take down the enemy teams. Also, lucky items have been rotated!",
  image: "bedwars_trios.jpg",
  author: "Slushie",
  callToActionButton: {
    color: "blue",
    content: (0, bC.jsx)(bC.Fragment, {
      children: "Try it now"
    }),
    callback: SC("bedwars_trio")
  }
}, {
  date: new Date("2025-01-16T15:00:00Z"),
  title: "New Limited-Time Game: Defusal",
  description: "Defuse the spike before it explodes! Work with your team to plant the spike, or defend the spike sites from the attackers.",
  image: "defusal.jpg",
  author: "Slushie"
}, {
  date: new Date("2025-01-14T15:00:00Z"),
  title: "New Capes!\u26a1",
  description: "Super Rank just leveled up! Flaunt your style with vibrant colored name tags and brand-new capes. Don\u2019t ask how we squashed mobs into cape form, some things are better left unseen...",
  image: "new_capes.jpg",
  author: "Oliver",
  callToActionButton: {
    color: "gold",
    content: (0, bC.jsxs)(bC.Fragment, {
      children: [(0, bC.jsx)("i", {
        className: "fas fa-bolt"
      }), "Get Super Rank"]
    }),
    callback: () => {
      fC.b.showCustomPopup({
        body: (0, bC.jsx)(ky.d, {}),
        middleScreenPopupContainerClassName: "SuperRankPitchPopup"
      });
    },
    shouldShow: async () => (0, XC.D)() && !(await gC.v.getCurrentUserContext()).playerHasRank("super")
  }
}, {
  date: new Date("2025-01-03T15:00:00Z"),
  title: "Moonstone Axe!",
  description: "Ever wanted to chop down an entire forest in Bloxd? Now you can with a Moonstone Axe! This powerful tool can chop down entire trees in one swing. It works on anything wooden, so you can use it to utterly demolish your friend's wood shack in seconds. (With their permission, of course!)",
  image: "moonstone_axe_update.jpg",
  author: "Dirty Flea Sack",
  callToActionButton: {
    color: "blue",
    content: (0, bC.jsx)(bC.Fragment, {
      children: "Try it now"
    }),
    callback: SC("classic_survival")
  }
}, {
  date: new Date("2024-12-20T15:00:00Z"),
  title: "Sheep!",
  description: "Sheep have joined Cows and Pigs to complete the farmyard trio! They can be farmed for mutton, or sheared for wool. That's not the last you'll see of the mobs though... Next year we'll be working on improving mob AI, making them persist in the world, as well as introducing some enemies for you to fight. Stay tuned!",
  image: "sheep.jpg",
  author: "Dirty Flea Sack"
}, {
  date: new Date("2024-12-19T15:00:00Z"),
  title: "Cow Variations!",
  description: "A new breed of cows has arrived in Bloxd! They've come with news that some of their friends will be arriving soon... Is this good or baaa'd news? Let us know what you think!",
  image: "mob_variations.jpg",
  author: "Dirty Flea Sack"
}, {
  date: new Date("2024-12-18T15:00:00Z"),
  title: "New Cube Warfare Map: Snowbase",
  description: "A new map has been added to Cube Warfare! Battle it out in this wintery map.",
  image: "cube_warfare_snowbase.jpg",
  author: "Slushie",
  callToActionButton: {
    color: "blue",
    content: (0, bC.jsx)(bC.Fragment, {
      children: "Try it now"
    }),
    callback: SC("shooting_ffa")
  }
}, {
  date: new Date("2024-12-12T14:00:00Z"),
  title: "Mob Spawn Orbs!",
  description: "Mob Spawn Orbs have been added to Creative and Plots! Throw them to summon mobs of your choice. Wanna make an awesome farm and fill it full of cows? Now you can! Wanna annoy your friends by swarming them with pigs? You can do that too!",
  image: "mob_spawn_orbs.jpg",
  author: "Dirty Flea Sack",
  callToActionButton: {
    color: "blue",
    content: (0, bC.jsx)(bC.Fragment, {
      children: "Try it now"
    }),
    callback: SC("classic_creative")
  }
}, {
  date: new Date("2024-12-11T15:00:00Z"),
  title: "Bedwars Update: Map Variations, Sturdier Beds & New Lucky Items!",
  description: "Variations have been added to Bedwars Maps, which will add unique twists to each game. Beds have become studier and Iron beds have been introduced. Lucky Items have also been rotated!",
  image: "bedwars_variations.jpg",
  author: ["pixelbaker", "Slushie"],
  callToActionButton: {
    color: "blue",
    content: (0, bC.jsx)(bC.Fragment, {
      children: "Try it now"
    }),
    callback: SC("bedwars_4v4v4v4")
  }
}, {
  date: new Date("2024-12-09T16:00:00Z"),
  title: "World Customisation Update",
  description: "More board shop options have been added to worlds! Items from Lucky Towers have also been added, which can be found in the creative menu. Also, a /worldborder command has been added, which can be used to restrict your world to a certain size.",
  image: "boards_lucky_items.jpg",
  author: ["Arthur", "Slushie"]
}, {
  date: new Date("2024-12-03T18:00:00Z"),
  title: "Cube Warfare New Teams Mode",
  description: "Cube Warfare now has a new Teams mode! Join your friends to take down the enemy team. Guns have also been improved too! Most guns have a higher fire rate and easier recoil control.",
  image: "cube_warfare_teams.jpg",
  author: "Slushie",
  callToActionButton: {
    color: "blue",
    content: (0, bC.jsx)(bC.Fragment, {
      children: "Try it now"
    }),
    callback: SC("shooting_tdm")
  }
}, {
  date: new Date("2024-12-02T16:30:00Z"),
  title: "Paintball Kits",
  description: "Paintball kits have been added! Choose from a variety of weapons and brand new explosives to suit your playstyle.",
  image: "paintball_kits.jpg",
  author: "Slushie",
  callToActionButton: {
    color: "blue",
    content: (0, bC.jsx)(bC.Fragment, {
      children: "Try it now"
    }),
    callback: SC("paintball")
  }
}, {
  date: new Date("2024-11-29T13:00:00Z"),
  title: "Cows!",
  description: "Cows have come to Bloxd to keep the pigs company! Farm them for tasty steak, or milk them with an empty bottle for cleansing milk potions.",
  image: "cows.jpg",
  author: "Dirty Flea Sack"
}, {
  date: new Date("2024-11-27T10:00:00Z"),
  title: "New Bedwars Map: Ahoy & Lucky Item Rotation",
  description: "Arrr! A new map has been added to Bedwars Squads! Lucky Items have also been rotated!",
  image: "bedwars_ahoy.jpg",
  author: ["pixelbaker", "Slushie"],
  callToActionButton: {
    color: "blue",
    content: (0, bC.jsx)(bC.Fragment, {
      children: "Try it now"
    }),
    callback: SC("bedwars_4v4v4v4")
  }
}, {
  date: new Date("2024-11-21T11:00:00Z"),
  title: "New Limited-Time Game: Paintball",
  description: "Added a new limited time game: Paintball!",
  image: "paintball.jpg",
  author: "Slushie",
  callToActionButton: {
    color: "blue",
    content: (0, bC.jsx)(bC.Fragment, {
      children: "Try it now"
    }),
    callback: SC("paintball")
  }
}, {
  date: new Date("2024-11-20T11:00:00Z"),
  title: "Pigs!",
  description: "Mobs are finally here! Be on the lookout for Pigs in grassy biomes. Maybe they'll be joined by Cows and Sheep soon? Or, perhaps there's something a little less friendly on the horizon... Let us know what you'd like to see!",
  image: "pigs.jpg",
  author: "Dirty Flea Sack"
}, {
  date: new Date("2024-11-13T15:00:00Z"),
  title: "New Pre-Game Lobby",
  description: "The pre-game lobby for multiple game modes has been improved for a faster, smoother experience.",
  image: "pre_game_lobby.jpg",
  author: ["pixelbaker", "Slushie"]
}, {
  date: new Date("2024-11-13T14:00:00Z"),
  title: "Lucky Items in Bedwars!",
  description: "Lucky Items have been added to Bedwars! These limited-time items will rotate every few weeks!",
  image: "lucky_items.jpg",
  author: ["pixelbaker", "Slushie"],
  callToActionButton: {
    color: "blue",
    content: (0, bC.jsx)(bC.Fragment, {
      children: "Try it now"
    }),
    callback: SC("bedwars_4v4v4v4")
  }
}, {
  date: new Date("2024-10-29T11:00:00Z"),
  title: "New Bedwars Map: Pagoda",
  description: "A new map has been added to Bedwars Squads! Enjoy the beloved scenery of these beautiful buildings. This update also includes a series of performance improvements and quality of life changes across all Bedwars modes.",
  image: "bedwars_pagoda.jpg",
  author: ["pixelbaker", "Slushie"],
  callToActionButton: {
    color: "blue",
    content: (0, bC.jsx)(bC.Fragment, {
      children: "Try it now"
    }),
    callback: SC("bedwars_4v4v4v4")
  }
}, {
  date: new Date("2024-10-25T12:00:00Z"),
  title: "Parties\ud83d\udd7a",
  description: "Join a Party with friends to play together! Parties can be created in the Social Bar next to your friends list.",
  image: "parties.jpg",
  author: "Oliver"
}, {
  date: new Date("2024-10-25T11:00:00Z"),
  title: "New Bedwars Update!",
  description: "Tiered upgrades, optimised shop, and rebalanced resources for smoother, competitive gameplay.",
  image: "bedwars_update.jpg",
  author: "pixelbaker",
  callToActionButton: {
    color: "blue",
    content: (0, bC.jsx)(bC.Fragment, {
      children: "Try it now"
    }),
    callback: SC("bedwars_4v4v4v4")
  }
}, {
  date: new Date("2024-10-23T12:00:00Z"),
  title: "Corn!",
  description: "Corn plants can now be found in meadow biomes! Eat corn to gain a shield buff, or brew corn using a potion table to get shield potions.",
  image: "corn.jpg",
  author: "Dirty Flea Sack"
}, {
  date: new Date("2024-10-21T15:00:00Z"),
  title: "Lootable Ruins",
  description: "More ruins have appeared, and now they have treasure! Find them in open-world games for a chance to get rare items.",
  image: "lootable_ruins.jpg",
  author: "Dirty Flea Sack"
}, {
  date: new Date("2024-10-21T12:00:00Z"),
  title: "Spikes to trap your enemies!",
  description: "Spikes have been added to the game! Tiers range from wood to diamond. Special kill spikes are available in worlds lobbies for instakill setups ;)",
  image: "spikes-compressed.jpg",
  author: "Arthur"
}, {
  date: new Date("2024-10-18T08:00:00Z"),
  title: "Bedwars Solos is back!",
  description: "Bedwars Solos is back! A true test of your PvP skills - can you win without a team to back you up?",
  image: "bedwars_solos.jpg",
  author: "Slushie",
  callToActionButton: {
    color: "blue",
    content: (0, bC.jsx)(bC.Fragment, {
      children: "Try it now"
    }),
    callback: SC("bedwars_solo")
  }
}, {
  date: new Date("2024-10-16T14:00:00Z"),
  title: "Lucky Towers Major Update",
  description: "Lucky Towers has received a huge update! Lots of new maps, alongside brand new events and even more special items!",
  image: "lucky_towers_update.jpg",
  author: "Slushie",
  callToActionButton: {
    color: "blue",
    content: (0, bC.jsx)(bC.Fragment, {
      children: "Try it now"
    }),
    callback: SC("luckyTowers")
  }
}, {
  date: new Date("2024-10-11T14:00:00Z"),
  title: "Bunny Hop Counter",
  description: "A bunny hop counter has been added to track your bunny hops. Go parkour with greater certainty!",
  image: "bhopimage.jpg",
  author: "Arthur"
}, {
  date: new Date("2024-10-04T14:00:00Z"),
  title: "Mysterious Ruins",
  description: "Small ruins have started appearing in plains and forest biomes. Who built them? What are they for? No one knows...",
  image: "small_ruins.jpg",
  author: "Dirty Flea Sack"
}, {
  date: new Date("2024-10-03T14:00:00Z"),
  title: "Meadows",
  description: "Seek out these rare biomes for the abundance of flowers, tall grass and great maple trees!",
  image: "meadows.jpg",
  author: "Dirty Flea Sack"
}, {
  date: new Date("2024-09-24T14:00:00Z"),
  title: "Limited-Time Game: Rocket Obby",
  description: "Use rocket jumps to beat a new category of challenging maps",
  image: "rocket_parkour.jpg",
  author: "Tom",
  callToActionButton: {
    color: "blue",
    content: (0, bC.jsx)(bC.Fragment, {
      children: "Try it now"
    }),
    callback: SC("rocketParkour")
  }
}, {
  date: new Date("2024-09-19T16:00:00Z"),
  title: "Great Maples",
  description: "Keep an eye out for the rare Great Maple Tree in plains and forest biomes!",
  image: "great_maples.jpg",
  author: "Dirty Flea Sack"
}, {
  date: new Date("2024-09-19T15:00:00Z"),
  title: "Friends!",
  description: "You can now become friends with your fellow Bloxd players! On the right of the Home Page you will see your list of requests and friends, and if a friend online you can quickly join their lobby!",
  image: "friends.jpg",
  author: "Oliver"
}, {
  date: new Date("2024-09-18T15:00:00Z"),
  title: "Doodle Cube Update and Duos Mode!",
  description: "Doodle Cube has been updated with new features and a new duos mode!",
  image: "doodleUpdate.jpg",
  author: "stardue",
  callToActionButton: {
    color: "blue",
    content: (0, bC.jsx)(bC.Fragment, {
      children: "Try it now"
    }),
    callback: SC("doodle_solo")
  }
}, {
  date: new Date("2024-09-17T12:00:00Z"),
  title: "Guns in Worlds",
  description: "Guns are now available in worlds lobbies! Access them in the creative menu, or create board shops to give them out :)",
  image: "GunsInWorlds.jpg",
  author: "Arthur"
}, {
  date: new Date("2024-09-16T12:00:00Z"),
  title: "Cherry Blossom Forests",
  description: "Cherry Blossom Forests can now be found in open-world games! Find these rare biomes for cherries, new wood types, and beautiful scenery.",
  image: "cherry_blossom_biome.jpg",
  author: "Dirty Flea Sack"
}, {
  date: new Date("2024-09-04T12:00:00Z"),
  title: "Limited-Time Game: Solo Bingo",
  description: "Bingo is back! Play it solo and try to get a bingo before time runs out.",
  image: "bingoSoloRelease.jpg",
  author: "pixelbaker",
  callToActionButton: {
    color: "blue",
    content: (0, bC.jsx)(bC.Fragment, {
      children: "Try it now"
    }),
    callback: SC("bingo")
  }
}, {
  date: new Date("2024-08-30T15:00:00Z"),
  title: "Rocket Spleef Major Update",
  description: "Added more kits, more items, more TNT, and a new map!",
  image: "rocket_spleef_burger.jpg",
  author: "Tom",
  callToActionButton: {
    color: "blue",
    content: (0, bC.jsx)(bC.Fragment, {
      children: "Try it now"
    }),
    callback: SC("rocketSpleef")
  }
}, {
  date: new Date("2024-08-19T16:30:00Z"),
  title: "New Limited-Time Game: Rush Racing",
  description: "Added a new limited time game: Rush Racing!",
  image: "rush_racing.jpg",
  author: "stardue"
}, {
  date: new Date("2024-08-19T16:29:00Z"),
  title: "Rocket Spleef Returns",
  description: "The limited time mode Rocket Spleef is back! Tell us in discord what features you want to add or change.",
  image: "rocket_spleef.jpg",
  author: "Tom",
  callToActionButton: {
    color: "blue",
    content: (0, bC.jsx)(bC.Fragment, {
      children: "Try it now"
    }),
    callback: SC("rocketSpleef")
  }
}, {
  date: new Date("2024-08-14T17:07:00Z"),
  title: "Colored Concrete Slabs",
  description: "Colored concrete slabs have been added to the game! You can make them by crafting two colored concrete blocks together.",
  image: "colored_concrete_slabs.jpg",
  author: "stardue"
}, {
  date: new Date("2024-08-14T17:00:00Z"),
  title: "Started Update Log"
}];
sC.sort((CC, yC) => yC.date.getTime() - CC.date.getTime());