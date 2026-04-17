export const k = {
  developer: {
    icon: "wrench",
    mainRGB: "#a4a4a4",
    bracketRGB: "#cef3ff",
    chatTag: [{
      str: "Dev",
      strRGB: "#cef3ff"
    }],
    nameTag: {
      iconShadowRGB: "#838383"
    },
    visible: !0
  },
  admin: {
    icon: "person-military-pointing",
    mainRGB: "#556c7d",
    bracketRGB: "#cef3ff",
    chatTag: [{
      str: "Dev",
      strRGB: "#cef3ff"
    }],
    nameTag: {
      iconShadowRGB: "#435562"
    },
    visible: !1
  },
  super: {
    icon: "zap",
    mainRGB: "#ffcc00",
    chatTag: [{
      str: "Super"
    }],
    nameTag: {
      iconShadowRGB: "#eea020"
    },
    visible: !0
  },
  youtuber: {
    icon: "youtube",
    mainRGB: "#fe0000",
    bracketRGB: "#cef3ff",
    chatTag: [{
      str: "You",
      strRGB: "white"
    }, {
      str: "Tuber",
      strRGB: "#fe0000"
    }],
    nameTag: {},
    visible: !0
  }
};
export const e = "none";
export const o = [e, "super", "super_inverted", "youtuber", "pig", "cow_normal", "cow_cream", "sheep"];
export const i = {
  [e]: {
    requiresRanks: []
  },
  super: {
    requiresRanks: ["super"]
  },
  super_inverted: {
    requiresRanks: ["super"]
  },
  youtuber: {
    requiresRanks: ["super", "youtuber"]
  },
  pig: {
    requiresRanks: ["super"]
  },
  cow_normal: {
    requiresRanks: ["super"]
  },
  cow_cream: {
    requiresRanks: ["super"]
  },
  sheep: {
    requiresRanks: ["super"]
  }
};
export const d = "default";
export const q = {
  [d]: "#dff8ff",
  yellow: "#ffff66",
  lime: "#b3ff66",
  green: "#66ff66",
  aqua: "#66ffb3",
  cyan: "#66ffff",
  blue: "#66bcff",
  purple: "#cc66ff",
  pink: "#ff80bb",
  red: "#ff6666",
  orange: "#ffaa66"
};