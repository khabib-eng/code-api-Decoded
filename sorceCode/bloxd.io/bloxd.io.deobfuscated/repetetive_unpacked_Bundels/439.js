var fC = require("./442.js");
export const e = {
  localGameName: null,
  enabledLocalGameNames: ["classic"],
  allowDuplicateIds: !1,
  useLocalDatabase: !1,
  useXsollaSandbox: !1,
  useXsollaTestProject: !1,
  greenlightChecksEnabled: !0,
  offlineMode: !1,
  localDomain: "localhost"
};
if ((0, fC.x)()) {
  const CC = function () {
    {
      const CC = require("./452.js");
      for (const yC of CC.keys()) {
        return CC(yC).localConfigValues;
      }
    }
  }();
  for (const yC in CC) {
    e[yC] = CC[yC];
  }
}
!0 === e.offlineMode && (console.log("Booting in offline mode..."), !1 === e.useLocalDatabase && console.log("useLocalDatabase is false in offline mode. Setting useLocalDatabase to true."), e.useLocalDatabase = !0, !0 === e.greenlightChecksEnabled && console.log("greenlightChecksEnabled is true in offline mode. Setting greenlightChecksEnabled to false."), e.greenlightChecksEnabled = !1);