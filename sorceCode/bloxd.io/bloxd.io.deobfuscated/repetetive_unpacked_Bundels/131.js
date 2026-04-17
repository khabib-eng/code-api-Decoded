export const w = ["Pig", "Cow", "Sheep", "Horse"];
export const e = ["Deer"];
export const A = ["Bear", "Stag", "Gold Watermelon Stag", "Gorilla"];
export const l = ["Cave Golem", "Draugr Zombie", "Draugr Skeleton", "Frost Golem", "Frost Zombie", "Frost Skeleton", "Draugr Knight", "Draugr Huntress", "Magma Golem", "Draugr Warper", "Frost Wraith", "Draugr Reaver"];
export const v = [...w, ...e, "Wolf", "Wildcat", "Spirit Golem", "Spirit Wolf", "Spirit Bear", "Spirit Stag", "Spirit Gorilla", ...A, ...l];
export const n = [...v, "NPC"];
export const i = ["Gold Watermelon Stag"];
export const q = {
  Pig: ["default"],
  Cow: ["default", "cream"],
  Sheep: ["default", "black", "red", "orange", "pink", "purple", "yellow", "blue", "brown", "cyan", "gray", "green", "lightBlue", "lightGray", "lime", "magenta"],
  Horse: ["default", "black", "brown", "cream"],
  "Cave Golem": ["default", "iron"],
  "Draugr Zombie": ["default", "longHairChestplate", "longHairClothed", "shortHairClothed"],
  "Draugr Skeleton": ["default"],
  "Frost Golem": ["default"],
  "Frost Zombie": ["default", "longHairChestplate", "shortHairClothed"],
  "Frost Skeleton": ["default"],
  "Draugr Knight": ["default"],
  Wolf: ["default", "white", "brown", "grey", "spectral"],
  Bear: ["default"],
  Deer: ["default"],
  Stag: ["default"],
  "Gold Watermelon Stag": ["default"],
  Gorilla: ["default"],
  Wildcat: ["default", "tabby", "grey", "black", "calico", "siamese", "leopard"],
  "Magma Golem": ["default"],
  "Draugr Huntress": ["default", "chainmail"],
  "Spirit Golem": ["default"],
  "Spirit Wolf": ["default"],
  "Spirit Bear": ["default"],
  "Spirit Stag": ["default"],
  "Spirit Gorilla": ["default"],
  "Draugr Warper": ["default"],
  "Frost Wraith": ["default"],
  "Draugr Reaver": ["default"],
  NPC: ["default", "emma", "leo", "isabel", "sanjay", "imara", "enoch", "sara", "carmen"]
};
export const t = ["variation", "name", "heldItemName", "ownerDbId", "metaInfo"];
const bC = {
  "Cave Golem": ["iron"],
  Sheep: ["black", "red", "orange", "pink", "purple", "yellow", "blue", "brown", "cyan", "gray", "green", "lightBlue", "lightGray", "lime", "magenta"]
};
export const D = Object.fromEntries(n.map(CC => {
  const yC = new Set(q[CC]);
  const IC = bC[CC];
  if (IC) {
    for (const fC of IC) {
      yC.delete(fC);
    }
  }
  if (0 === yC.size) {
    throw new Error("No visible variations for mob type: ".concat(CC, "."));
  }
  return [CC, Array.from(yC)];
}));