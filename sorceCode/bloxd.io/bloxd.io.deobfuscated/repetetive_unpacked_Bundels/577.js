var fC = require("./424.js");
var ky = require("./422.js");
var gC = require("./585.js");
var AC = require("./589.js");
var my = require("./595.js");
var XC = require("./442.js");
var iy = require("./439.js");
const LC = (() => {
  if (void 0 === iy.e.localDomain) {
    throw new Error("localDomain is undefined");
  }
  return (0, XC.x)() ? "http://".concat(iy.e.localDomain, ":").concat(AC.b.indexServerPort) : "https://bloxd.io";
})();
const YC = new class {
  constructor() {
    this.indexUrl = LC;
    this.index2Url = (0, XC.x)() ? LC : "https://index2.bloxd.io";
    this.localGameserverHttpUrl = "http://".concat(iy.e.localDomain, ":").concat(AC.b.gameServerPort);
    this.matchmakingUrl = (0, XC.x)() ? "http://".concat(iy.e.localDomain, ":").concat(AC.b.matchmakingServerPort) : "https://matchmaking.bloxd.io";
    this.matchmakingStagingUrl = (0, XC.x)() ? "http://".concat(iy.e.localDomain, ":").concat(AC.b.matchmakingServerPort) : "https://matchmaking-staging.bloxd.io";
  }
}();
export const b = new class {
  constructor() {
    this.dracoCompressionWasmUrl = (() => {
      const CC = "/static/draco_wasm_wrapper_gltf_v2_1.js";
      return (0, XC.k)() ? "https://".concat(ky.e.discordDomain, "/").concat(CC) : CC;
    })();
    this.dracoCompressionWasmBinaryUrl = (() => {
      const CC = "/static/draco_decoder_gltf_v2_1.wasm";
      return (0, XC.k)() ? "https://".concat(ky.e.discordDomain, "/").concat(CC) : CC;
    })();
    this.indexUrl = (() => {
      if ((0, XC.k)()) {
        return "https://".concat(ky.e.discordDomain, "/index");
      }
      if (XC.b) {
        return "https://bloxd.io";
      }
      return (0, XC.x)() ? "http://".concat(iy.e.localDomain, ":").concat(AC.b.indexServerPort) : window.location.origin;
    })();
    this.staticUrl = (() => {
      if ((0, XC.x)()) {
        return "/no-cdn-static";
      }
      const CC = 1 + Math.floor(8 * Math.random());
      console.log("Using static server index", CC);
      return (0, XC.k)() ? "https://".concat(ky.e.discordDomain, "/bloxd-static/").concat(CC) : "https://static".concat(CC, ".bloxd.io");
    })();
    this.texturePackUrl = (0, XC.k)() ? "https://".concat(ky.e.discordDomain, "/texture-pack") : "https://raw.githubusercontent.com/Bloxdy/texturePacks/main/_json";
    this.localGameserverHttpUrl = (0, XC.k)() ? "https://".concat(ky.e.discordDomain, "/game") : YC.localGameserverHttpUrl;
    this.s3Url = (0, XC.k)() ? "https://".concat(ky.e.discordDomain, "/s3") : "https://cdn.bloxd.io";
    this.wsUrlPrefix = (0, XC.x)() ? "ws://" : "wss://";
    this.matchmakingUrl = (0, XC.k)() ? "https://".concat(ky.e.discordDomain, "/matchmaking") : YC.matchmakingUrl;
  }
  getSocialUrl(CC) {
    return (0, XC.k)() ? "https://".concat(ky.e.discordDomain, "/social/").concat(CC) : (0, my.u)(CC);
  }
  getServerWebSocketUrlFromServerUrl(CC) {
    let yC = "";
    if ((0, XC.k)()) {
      const IC = function (CC) {
        if ((0, XC.x)()) {
          return "game";
        }
        const yC = CC.split(".");
        if (3 !== yC.length) {
          return null;
        }
        const IC = yC[0];
        const ky = yC[1];
        const gC = yC[2];
        return Object.values(fC.h).some(CC => CC === "".concat(ky, ".").concat(gC)) ? "game/".concat(ky, "/").concat(IC) : null;
      }(CC);
      if (null === IC) {
        console.error("Invalid IP for Discord client:", CC);
        return gC.e.error("Badly formatted IP. Please report this error on Discord.");
      }
      yC = "wss://".concat(ky.e.discordDomain, "/").concat(IC);
    } else {
      yC = "".concat(b.wsUrlPrefix).concat(CC);
    }
    return gC.e.value(yC);
  }
}();