export let i = function (CC) {
  CC[CC.PLAYER = 0] = "PLAYER";
  CC[CC.BOAT = 1] = "BOAT";
  CC[CC.GLIDER = 2] = "GLIDER";
  CC[CC.BALLOON = 3] = "BALLOON";
  CC[CC.SLEEPING = 4] = "SLEEPING";
  CC[CC.RIDING_MOB = 5] = "RIDING_MOB";
  return CC;
}({});
export let c = function (CC) {
  CC[CC.WOOD = 0] = "WOOD";
  CC[CC.OBSIDIAN = 1] = "OBSIDIAN";
  return CC;
}({});
export let d = function (CC) {
  CC[CC.WOOD = 0] = "WOOD";
  CC[CC.IRON = 1] = "IRON";
  CC[CC.GOLD = 2] = "GOLD";
  CC[CC.DIAMOND = 3] = "DIAMOND";
  return CC;
}({});
export let j = function (CC) {
  CC[CC.ROTATION_1 = 0] = "ROTATION_1";
  CC[CC.ROTATION_2 = 1] = "ROTATION_2";
  CC[CC.ROTATION_3 = 2] = "ROTATION_3";
  CC[CC.ROTATION_4 = 3] = "ROTATION_4";
  return CC;
}({});
export let h = function (CC) {
  CC[CC.NORMAL = 0] = "NORMAL";
  CC[CC.GLIDING = 1] = "GLIDING";
  CC[CC.DRIFTING = 2] = "DRIFTING";
  CC[CC.FLOATING = 3] = "FLOATING";
  return CC;
}({});