var fC = require("./18.js");
var ky = require("./82.js");
var gC = require("./447.js");
function AC() {
  return gC.e.hasSearchParam("referrer") ? gC.e.getSearchParam("referrer") : window.location !== window.parent.location && document.referrer && "" !== document.referrer ? document.referrer : document.location.href;
}
const my = [{
  type: "partiallySupportedDimensions",
  dimensions: {
    width: 970,
    height: 250
  },
  supportedAdIds: [1, 3, 5, 6, 7]
}, {
  type: "partiallySupportedDimensions",
  dimensions: {
    width: 970,
    height: 90
  },
  supportedAdIds: [1, 3, 5, 6, 7]
}, {
  type: "partiallySupportedDimensions",
  dimensions: {
    width: 320,
    height: 100
  },
  supportedAdIds: [1, 3, 5, 6, 7]
}];
export const y = {
  bloxd: {
    enabled: !0,
    showPrivacyPolicy: !0,
    adConfig: {
      playPrerollOnJoin: !0,
      showRewardedAds: !0,
      canUseBanners: !0,
      bannerSupportRules: my,
      checkBannerViewability: !0
    }
  },
  crazygames: {
    enabled: !0,
    showPrivacyPolicy: !1,
    adConfig: {
      playPrerollOnJoin: !1,
      showRewardedAds: !0,
      canUseBanners: !0,
      bannerSupportRules: [],
      checkBannerViewability: !0
    }
  },
  y8: {
    enabled: !1,
    showPrivacyPolicy: !1,
    adConfig: {
      playPrerollOnJoin: !1,
      showRewardedAds: !1,
      canUseBanners: !0,
      bannerSupportRules: [],
      checkBannerViewability: !0
    }
  },
  gamemonetize: {
    enabled: !1,
    showPrivacyPolicy: !1,
    adConfig: {
      playPrerollOnJoin: !0,
      showRewardedAds: !1,
      canUseBanners: !0,
      bannerSupportRules: [],
      checkBannerViewability: !0
    }
  },
  gamedistribution: {
    enabled: !1,
    showPrivacyPolicy: !1,
    adConfig: {
      playPrerollOnJoin: !1,
      showRewardedAds: !1,
      canUseBanners: !0,
      bannerSupportRules: [],
      checkBannerViewability: !0
    }
  },
  yandex: {
    enabled: !1,
    showPrivacyPolicy: !1,
    adConfig: {
      playPrerollOnJoin: !1,
      showRewardedAds: !1,
      canUseBanners: !1,
      bannerSupportRules: [],
      checkBannerViewability: !0
    }
  },
  discord: {
    enabled: !0,
    showPrivacyPolicy: !0,
    adConfig: {
      playPrerollOnJoin: !1,
      showRewardedAds: !1,
      canUseBanners: !1,
      bannerSupportRules: [],
      checkBannerViewability: !0
    }
  },
  coolmathgames: {
    enabled: !0,
    showPrivacyPolicy: !1,
    adConfig: {
      playPrerollOnJoin: !0,
      showRewardedAds: !1,
      canUseBanners: !1,
      bannerSupportRules: [],
      checkBannerViewability: !0
    }
  },
  mobileIos: {
    enabled: !0,
    showPrivacyPolicy: !1,
    adConfig: {
      playPrerollOnJoin: !0,
      showRewardedAds: !0,
      canUseBanners: !0,
      bannerSupportRules: my,
      checkBannerViewability: !0
    }
  },
  mobileAndroid: {
    enabled: !0,
    showPrivacyPolicy: !0,
    adConfig: {
      playPrerollOnJoin: !0,
      showRewardedAds: !0,
      canUseBanners: !0,
      bannerSupportRules: my,
      checkBannerViewability: !0
    }
  },
  msnPlay: {
    enabled: !0,
    showPrivacyPolicy: !0,
    adConfig: {
      playPrerollOnJoin: !1,
      showRewardedAds: !0,
      canUseBanners: !0,
      bannerSupportRules: [],
      checkBannerViewability: !1
    }
  },
  desktopMicrosoftStore: {
    enabled: !0,
    showPrivacyPolicy: !0,
    adConfig: {
      playPrerollOnJoin: !0,
      showRewardedAds: !0,
      canUseBanners: !0,
      bannerSupportRules: my,
      checkBannerViewability: !0
    }
  },
  gxGames: {
    enabled: !0,
    showPrivacyPolicy: !0,
    adConfig: {
      playPrerollOnJoin: !1,
      showRewardedAds: !1,
      canUseBanners: !1,
      bannerSupportRules: [],
      checkBannerViewability: !0
    }
  }
};
export const F = (0, fC.d)((0, fC.d)({}, y), {}, {
  minijuegos: {
    enabled: !0
  },
  playground123: {
    enabled: !0
  },
  nowgg: {
    enabled: !0
  },
  crazyGamesNinetyNineNightsBundle: {
    enabled: !0
  }
});
Object.keys(y).filter(CC => y[CC].enabled);
Object.keys(F).filter(CC => F[CC].enabled);
export const z = "siteUsed";
export const J = "subsiteUsed";
export const D = function () {
  let CC = "bloxd";
  if (gC.e.hasSearchParam(z)) {
    var yC;
    var IC;
    const CC = gC.e.getSearchParam(z);
    gC.e.removeSearchParam(z);
    if (null !== (yC = null === (IC = y[CC]) || void 0 === IC ? void 0 : IC.enabled) && void 0 !== yC && yC) {
      return CC;
    }
    console.error("Found unsupported siteUsedSearchParamKey, ignoring it:", CC);
  }
  console.info("Parent url is", AC());
  const fC = [".crazygames.", ".dev-crazygames.be"];
  for (const gC of fC) {
    AC().includes(gC) && (CC = "crazygames");
  }
  const ky = [".msn."];
  for (const gC of ky) {
    AC().includes(gC) && (CC = "msnPlay");
  }
  AC().includes("discord") && !AC().includes("/auth-callback/discord") && (CC = "discord");
  (AC().includes("coolmathgames") || gC.e.hasSearchParam("coolmath")) && (CC = "coolmathgames");
  AC().includes("gx.games") && (CC = "gxGames");
  console.info("Site used is ".concat(CC));
  y[CC].enabled || console.error("Selected siteUsed ".concat(CC, " but it is not enabled"));
  return CC;
}();
export const N = function (CC) {
  if (gC.e.hasSearchParam(J)) {
    var yC;
    var IC;
    const CC = gC.e.getSearchParam(J);
    gC.e.removeSearchParam(J);
    if (null !== (yC = null === (IC = F[CC]) || void 0 === IC ? void 0 : IC.enabled) && void 0 !== yC && yC) {
      return CC;
    }
    console.error("Found unsupported value for subsiteUsedSearchParamKey, ignoring it:", CC);
  }
  if ("bloxd" === CC) {
    const CC = ["miniplay.com", "minijuegos.com", "minijuegos.mx", "minigiochi.com", "minijogos.com.br", "minispelletjes.com", "grymini.pl"];
    for (const yC of CC) {
      if (AC().includes(yC)) {
        return "minijuegos";
      }
    }
    if ("playground123" === gC.e.getSearchParam("utm_source")) {
      return "playground123";
    }
    if (gC.e.hasSearchParam("nggPlayUrl") || AC().includes("now.gg")) {
      return "nowgg";
    }
  }
  return CC;
}(D);
export const s = !(-1 !== AC().indexOf("localhost:") || -1 !== AC().indexOf("https://bloxdhop") || -1 !== AC().indexOf("https://www.bloxdhop") || -1 !== AC().indexOf("bloxd.io") || -1 !== AC().indexOf("192.168"));
export const p = function () {
  const CC = ky.e.getItem("___Secure-3PSIDMC");
  return void 0 === CC || null === CC || "undefined" === CC;
}();
export function k() {
  return "discord" === D;
}
export function o() {
  return !k();
}
export const f = "1219647973806571553";
export const h = "1336701983750492191";
export function w() {
  return document.location.href.includes("staging") || document.location.href.includes(h);
}
export const b = !1;
export function x() {
  return !1;
}