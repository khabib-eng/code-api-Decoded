var fC = require("./38.js");
var ky = require("./82.js");
var gC = require("./585.js");
var AC = require("./1336.js");
var my = require("./534.js");
export const k = ["Mouse1", "Mouse2", "Mouse3", "Alt+Left Click", "F2", "F4", "F5", "F8", "Digit0", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "KeyQ", "KeyW", "KeyE", "KeyR", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "ArrowUp", "ArrowLeft", "ArrowRight", "ArrowDown", "ShiftLeft", "ShiftRight", "ControlLeft", "ControlRight", "Tab", "Space", "CapsLock", "Backslash", "IntlBackslash"];
export const n = {
  Mouse1: "controls:leftClick",
  Mouse3: "controls:rightClick",
  Mouse2: "controls:middleMouseButton",
  F2: "F2",
  F4: "F4",
  F5: "F5",
  F8: "F8",
  Digit0: "0",
  Digit1: "1",
  Digit2: "2",
  Digit3: "3",
  Digit4: "4",
  Digit5: "5",
  Digit6: "6",
  Digit7: "7",
  Digit8: "8",
  Digit9: "9",
  KeyQ: "Q",
  KeyW: "W",
  KeyE: "E",
  KeyR: "R",
  KeyY: "Y",
  KeyU: "U",
  KeyI: "I",
  KeyO: "O",
  KeyP: "P",
  KeyA: "A",
  KeyS: "S",
  KeyD: "D",
  KeyF: "F",
  KeyG: "G",
  KeyH: "H",
  KeyJ: "J",
  KeyK: "K",
  KeyL: "L",
  KeyZ: "Z",
  KeyX: "X",
  KeyC: "C",
  KeyV: "V",
  KeyB: "B",
  KeyN: "N",
  KeyM: "M",
  ArrowUp: (0, my.jsx)(my.Fragment, {
    children: "\u2191"
  }),
  ArrowLeft: (0, my.jsx)(my.Fragment, {
    children: "\u2190"
  }),
  ArrowRight: (0, my.jsx)(my.Fragment, {
    children: "\u2192"
  }),
  ArrowDown: (0, my.jsx)(my.Fragment, {
    children: "\u2193"
  }),
  CapsLock: "controls:capsLock",
  ShiftLeft: "controls:shiftLeft",
  ShiftRight: "controls:shiftRight",
  ControlLeft: "controls:controlLeft",
  ControlRight: "controls:controlRight",
  Space: "controls:space",
  Tab: "controls:tab",
  Backslash: "controls:backslash",
  IntlBackslash: "controls:backslash"
};
const LC = {
  forward: ["KeyW", "ArrowUp"],
  backward: ["KeyS", "ArrowDown"],
  left: ["KeyA", "ArrowLeft"],
  right: ["KeyD", "ArrowRight"],
  sprint: ["ShiftLeft", "ShiftRight"],
  jump: ["Space"],
  crouch: ["ControlLeft", "KeyC", "CapsLock", "KeyZ", "Backslash", "IntlBackslash", "ControlRight"],
  "primary-fire": ["Mouse1"],
  "alt-fire": ["Mouse3", "KeyE"],
  SpecialAction1: ["KeyR"],
  SpecialAction2: ["KeyF"],
  ReloadGun: ["KeyR"],
  DropItem: ["KeyQ"],
  "mid-fire": ["Mouse2", "Alt+Left Click"],
  Zoom: ["KeyV"],
  SwapCameraZoom: ["KeyP", "F5"],
  OpenInventory: ["Tab"],
  OpenLobbyLeaderboard: ["KeyG"],
  OpenShop: ["KeyB"],
  OpenCharacterCustomization: ["KeyN"],
  OpenSettings: ["KeyO"],
  OpenInviteLink: ["KeyI"],
  OpenTasksAndLeaderboard: ["KeyM"],
  OpenCodeEditor: ["F8"],
  HideUi: ["F4"],
  ShowDebugOverlay: ["F2"],
  HotBarSlot1: ["Digit1"],
  HotBarSlot2: ["Digit2"],
  HotBarSlot3: ["Digit3"],
  HotBarSlot4: ["Digit4"],
  HotBarSlot5: ["Digit5"],
  HotBarSlot6: ["Digit6"],
  HotBarSlot7: ["Digit7"],
  HotBarSlot8: ["Digit8"],
  HotBarSlot9: ["Digit9"],
  HotBarSlot10: ["Digit0"]
};
export const p = {
  forward: {
    translationKey: "controls:moveForward"
  },
  backward: {
    translationKey: "controls:moveBackward"
  },
  left: {
    translationKey: "controls:moveLeft"
  },
  right: {
    translationKey: "controls:moveRight"
  },
  sprint: {
    translationKey: "controls:run"
  },
  jump: {
    translationKey: "controls:jump"
  },
  crouch: {
    translationKey: "controls:crouch"
  },
  "primary-fire": {
    translationKey: "controls:primaryAction"
  },
  "alt-fire": {
    translationKey: "controls:secondaryAction"
  },
  SpecialAction1: {
    translationKey: "controls:specialAction1"
  },
  SpecialAction2: {
    translationKey: "controls:specialAction2"
  },
  ReloadGun: {
    translationKey: "controls:reloadGun"
  },
  DropItem: {
    translationKey: "controls:dropItem"
  },
  "mid-fire": {
    translationKey: "controls:pickBlock"
  },
  Zoom: {
    translationKey: "controls:zoom"
  },
  SwapCameraZoom: {
    translationKey: "controls:swapCameraZoom"
  },
  HideUi: {
    translationKey: "controls:HideUi"
  },
  ShowDebugOverlay: {
    translationKey: "controls:showDebugOverlay"
  },
  OpenInventory: {
    translationKey: "controls:openInventory/Craft"
  },
  OpenLobbyLeaderboard: {
    translationKey: "controls:openLobbyLeaderboard"
  },
  OpenShop: {
    translationKey: "controls:openShop"
  },
  OpenCharacterCustomization: {
    translationKey: "controls:openCharacterCustomization"
  },
  OpenSettings: {
    translationKey: "controls:openSettings"
  },
  OpenInviteLink: {
    translationKey: "controls:openInviteLink"
  },
  OpenTasksAndLeaderboard: {
    translationKey: "controls:openTasksAndLeaderboard"
  },
  OpenCodeEditor: {
    translationKey: "controls:openCodeEditor"
  },
  HotBarSlot1: {
    translationKey: "controls:hotBarSlotNumber",
    params: {
      number: 1
    }
  },
  HotBarSlot2: {
    translationKey: "controls:hotBarSlotNumber",
    params: {
      number: 2
    }
  },
  HotBarSlot3: {
    translationKey: "controls:hotBarSlotNumber",
    params: {
      number: 3
    }
  },
  HotBarSlot4: {
    translationKey: "controls:hotBarSlotNumber",
    params: {
      number: 4
    }
  },
  HotBarSlot5: {
    translationKey: "controls:hotBarSlotNumber",
    params: {
      number: 5
    }
  },
  HotBarSlot6: {
    translationKey: "controls:hotBarSlotNumber",
    params: {
      number: 6
    }
  },
  HotBarSlot7: {
    translationKey: "controls:hotBarSlotNumber",
    params: {
      number: 7
    }
  },
  HotBarSlot8: {
    translationKey: "controls:hotBarSlotNumber",
    params: {
      number: 8
    }
  },
  HotBarSlot9: {
    translationKey: "controls:hotBarSlotNumber",
    params: {
      number: 9
    }
  },
  HotBarSlot10: {
    translationKey: "controls:hotBarSlotNumber",
    params: {
      number: 10
    }
  }
};
export const o = function () {
  const CC = {};
  for (const IC in LC) {
    var yC;
    const fC = null !== (yC = ky.j.getItem(rC(IC))) && void 0 !== yC ? yC : LC[IC];
    CC[IC] = fC;
  }
  return CC;
}();
function rC(CC) {
  return "bindings-".concat(CC);
}
export function i(CC, yC) {
  const IC = o[CC];
  if (IC && !IC.includes(yC)) {
    OC(CC, [...IC, yC]);
  }
}
export function r(CC, yC) {
  const IC = o[CC];
  if (!IC) {
    return gC.e.ok();
  }
  const fC = IC.filter(CC => CC !== yC);
  return 0 === fC.length && LC[CC].length > 0 ? gC.e.error("controls:mustHaveAtLeastOneBinding") : (OC(CC, fC), gC.e.ok());
}
function OC(CC, yC) {
  yC = yC.filter(CC => k.includes(CC));
  o[CC] = yC;
  ky.j.setItem(rC(CC), yC);
  fC.c.Gy("customBindingsChanged");
}
export function m(CC) {
  const yC = o[CC];
  return yC && 0 !== yC.length ? yC[0] : null;
}
export function u() {
  for (const CC in LC) {
    OC(CC, LC[CC]);
  }
}
export function e(CC) {
  let {
    keyCode: yC
  } = CC;
  const {
    t: IC
  } = (0, AC.n)();
  return null === yC ? null : "string" === typeof n[yC] ? (0, my.jsx)(my.Fragment, {
    children: IC(n[yC])
  }) : (0, my.jsx)(my.Fragment, {
    children: n[yC]
  });
}