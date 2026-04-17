import * as fC from "./38.js";
import * as ky from "./1323.js";
import * as gC from "./1329.js";
import * as AC from "./1363.js";
import * as my from "./14.js";
export let matchmakeAndPlayMaybeUnloaded;
export let InGameUi;
export let CharacterCustomisationUI;
export let CharacterPreview;
export let Lobbyleaderboard;
export let BloxdClient;
require.e(31).then(require.t.bind(require, 17575, 23)).then(CC => {
  CC.polyfill();
});
const GC = Promise.all([require.e(14), require.e(17), require.e(13), require.e(9), require.e(19), require.e(8), require.e(18), require.e(23), require.e(24), require.e(25), require.e(22), require.e(21), require.e(27), require.e(34), require.e(33), require.e(3), require.e(32)]).then(require.bind(require, 17584)).then(CC => {
  console.log("Matchmaking libraries loaded");
  matchmakeAndPlayMaybeUnloaded = CC.matchmakeAndPlay;
  InGameUi = CC.InGameUi;
  CharacterCustomisationUI = CC.CharacterCustomisationUI;
  CharacterPreview = CC.CharacterPreview;
  Lobbyleaderboard = CC.LobbyLeaderboard;
  BloxdClient = CC.BloxdClient;
});
let eC = null;
export function ensureGameSetup() {
  return eC || (eC = GC.then(() => {
    if (!BloxdClient.hasPlayedFirstGame) {
      const CC = BloxdClient.initialSetup();
      return CC.isError() ? (eC = null, Promise.reject(CC.asError().message)) : CC.getValue().promise;
    }
  }), eC);
}
export const reqLibsLoadedPromise = Promise.all([GC, ky.c.recaptchaLoadedPromise, gC.f.turnstileLoadedPromise, AC.i.waitUntilAllSdksReady()]).then(() => {
  console.log("All required libraries loaded");
});
reqLibsLoadedPromise.then(() => {
  my.b.set({
    requiredLibrariesLoaded: !0
  });
  fC.c.Gy("requiredLibrariesLoaded");
});