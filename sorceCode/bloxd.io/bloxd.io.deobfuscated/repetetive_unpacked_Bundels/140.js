var fC = require("./18.js");
const ky = ["Raw Porkchop", "Raw Beef", "Raw Mutton", "Raw Venison"];
const gC = ["Cooked Porkchop", "Steak", "Cooked Mutton", "Cooked Venison"];
export const e = 5;
const my = {
  tameItemName: ["Moonstone"],
  probabilityOfTame: .29,
  isSaddleable: !1,
  foodItemsWithEffects: [{
    itemName: "Gold Bar",
    effects: [],
    healAmt: 10
  }, {
    itemName: "Diamond",
    effects: [],
    healAmt: 15
  }, {
    itemName: "Moonstone",
    effects: [],
    healAmt: 20
  }],
  supportsFriendship: !1
};
const XC = (0, fC.d)((0, fC.d)({}, my), {}, {
  isSaddleable: !0,
  saddleItemName: "Spirit Saddle"
});
export const f = {
  Horse: {
    tameItemName: ["Apple", "Wheat"],
    probabilityOfTame: .4,
    isSaddleable: !0,
    foodItemsWithEffects: [{
      itemName: "Wheat",
      effects: [],
      healAmt: 10
    }],
    supportsFriendship: !0,
    likedFoods: ["Apple", "Wheat", "Pear", "Cherry", "Melon Slice", "Gold Melon Slice", "Bread", "Corn", "Bowl of Cranberries", "Mushroom Soup", "Plum", "Carrot", "Beetroot"],
    neutralFoods: ["Banana", "Bowl of Rice", "Pumpkin Pie", "Watermelon Slice", "Gold Watermelon Slice", "Cracked Coconut", "Raw Potato", "Baked Potato"],
    dislikedFoods: [...ky, ...gC, "Rotten Flesh", "Chili Pepper", "Rotten Brain"],
    guaranteedDrop: "Oats",
    commonDrops: ["Poop", "Wheat Seeds"],
    levelUpBonuses: {
      1: "Renaming",
      2: "Special Drops",
      3: "Riding Speed +",
      4: "Painting",
      5: "Friends"
    }
  },
  Wolf: {
    tameItemName: "Bone",
    probabilityOfTame: .35,
    isSaddleable: !1,
    supportsFriendship: !0,
    likedFoods: [...gC, "Rotten Flesh", "Watermelon Slice", "Gold Watermelon Slice", "Bread", "Pumpkin Pie", "Bowl of Rice", "Cracked Coconut", "Baked Potato", "Rotten Brain"],
    neutralFoods: [...ky, "Apple", "Wheat", "Melon Slice", "Gold Melon Slice", "Corn", "Bowl of Cranberries", "Chili Pepper", "Carrot", "Beetroot", "Raw Potato"],
    dislikedFoods: ["Pear", "Cherry", "Banana", "Mushroom Soup", "Plum"],
    guaranteedDrop: "Meaty Bone",
    commonDrops: ["Poop", "Wheat Seeds"],
    levelUpBonuses: {
      1: "Renaming",
      2: "Special Drops",
      3: "Max Health +",
      4: "Painting",
      5: "Pack Leader"
    }
  },
  Wildcat: {
    tameItemName: [...ky, ...gC],
    probabilityOfTame: .32,
    isSaddleable: !1,
    supportsFriendship: !0,
    likedFoods: [...ky, ...gC, "Banana", "Baked Potato", "Rotten Brain"],
    neutralFoods: ["Catnip", "Pumpkin Pie", "Bowl of Cranberries", "Watermelon Slice", "Gold Watermelon Slice", "Bread", "Rotten Flesh", "Mushroom Soup", "Plum", "Carrot", "Beetroot", "Raw Potato"],
    dislikedFoods: ["Apple", "Wheat", "Pear", "Cherry", "Bowl of Rice", "Melon Slice", "Gold Melon Slice", "Chili Pepper", "Cracked Coconut"],
    foodItemsWithEffects: [{
      itemName: "Catnip",
      effects: [{
        name: "Speed",
        duration: 3e4,
        level: 1
      }, {
        name: "Damage",
        duration: 3e4,
        level: 1
      }]
    }],
    guaranteedDrop: "Caught Fish",
    commonDrops: ["Poop", "Wheat Seeds"],
    levelUpBonuses: {
      1: "Renaming",
      2: "Special Drops",
      3: "Damage +",
      4: "Painting",
      5: "Poison Claws"
    }
  },
  Pig: {
    tameItemName: ["Apple"],
    probabilityOfTame: 1,
    isSaddleable: !1,
    supportsFriendship: !0,
    likedFoods: ["Plum", "Cracked Coconut", "Pumpkin Pie", "Bowl of Rice", "Melon Slice", "Gold Melon Slice", "Corn", "Bowl of Cranberries", "Mushroom Soup", "Chili Pepper", "Carrot", "Beetroot", "Raw Potato", "Baked Potato"],
    neutralFoods: ["Watermelon Slice", "Gold Watermelon Slice", "Apple", "Wheat", "Pear", "Cherry", "Bread"],
    dislikedFoods: [...ky, ...gC, "Rotten Flesh", "Banana", "Rotten Brain"],
    guaranteedDrop: "Truffle",
    commonDrops: ["Poop", "Wheat Seeds"],
    levelUpBonuses: {
      1: "Renaming",
      2: "Special Drops",
      3: "Double Poop",
      4: "Painting",
      5: "Feed Aura"
    }
  },
  Cow: {
    tameItemName: ["Apple"],
    probabilityOfTame: 1,
    isSaddleable: !1,
    supportsFriendship: !0,
    likedFoods: ["Apple", "Wheat", "Pear", "Cherry", "Melon Slice", "Gold Melon Slice", "Bread", "Corn", "Bowl of Cranberries", "Mushroom Soup", "Carrot", "Beetroot", "Raw Potato", "Baked Potato"],
    neutralFoods: ["Banana", "Bowl of Rice", "Pumpkin Pie", "Watermelon Slice", "Gold Watermelon Slice", "Cracked Coconut", "Plum"],
    dislikedFoods: [...ky, ...gC, "Rotten Flesh", "Chili Pepper", "Rotten Brain"],
    guaranteedDrop: "Cow's Milk",
    commonDrops: ["Poop", "Wheat Seeds"],
    levelUpBonuses: {
      1: "Renaming",
      2: "Special Drops",
      3: "Self Yield",
      4: "Painting",
      5: "Mob Yield"
    }
  },
  Sheep: {
    tameItemName: ["Apple"],
    probabilityOfTame: 1,
    isSaddleable: !1,
    supportsFriendship: !0,
    likedFoods: ["Apple", "Wheat", "Bread", "Corn", "Banana", "Pear", "Cherry", "Carrot", "Beetroot", "Raw Potato", "Baked Potato", "Plum"],
    neutralFoods: ["Bowl of Rice", "Pumpkin Pie", "Watermelon Slice", "Gold Watermelon Slice", "Melon Slice", "Gold Melon Slice"],
    dislikedFoods: [...ky, ...gC, "Rotten Flesh", "Chili Pepper", "Bowl of Cranberries", "Mushroom Soup", "Rotten Brain", "Cracked Coconut"],
    guaranteedDrop: "Sheep's Milk",
    commonDrops: ["Poop", "Wheat Seeds"],
    levelUpBonuses: {
      1: "Renaming",
      2: "Special Drops",
      3: "Rainbow Wool",
      4: "Painting",
      5: "Mob Power"
    }
  },
  Deer: {
    tameItemName: ["Cherry"],
    probabilityOfTame: .45,
    isSaddleable: !1,
    supportsFriendship: !0,
    likedFoods: ["Plum", "Mushroom Soup", "Bowl of Cranberries", "Apple", "Cherry", "Corn", "Carrot", "Beetroot", "Wheat", "Banana", "Pear"],
    neutralFoods: ["Melon Slice", "Gold Melon Slice", "Bread", "Raw Potato", "Baked Potato", "Watermelon Slice", "Gold Watermelon Slice", "Bowl of Rice", "Cracked Coconut"],
    dislikedFoods: [...ky, ...gC, "Rotten Flesh", "Chili Pepper", "Rotten Brain", "Pumpkin Pie"],
    guaranteedDrop: "Acorn",
    commonDrops: ["Poop", "Wheat Seeds"],
    levelUpBonuses: {
      1: "Renaming",
      2: "Special Drops",
      3: "Thorns",
      4: "Painting",
      5: "Antlers"
    }
  },
  "Spirit Golem": my,
  "Spirit Wolf": my,
  "Spirit Bear": XC,
  "Spirit Stag": XC,
  "Spirit Gorilla": XC
};
export const h = ["Horse", "Wolf", "Wildcat", "Pig", "Cow", "Sheep", "Deer", "Spirit Golem", "Spirit Wolf", "Spirit Bear", "Spirit Stag", "Spirit Gorilla"];