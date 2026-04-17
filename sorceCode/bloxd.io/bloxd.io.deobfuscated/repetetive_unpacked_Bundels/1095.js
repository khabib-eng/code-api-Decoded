function yC() {
  return new Error("unsupported in the browser");
}
module.exports = {
  createImportHook: function () {
    return function (CC, IC, fC) {
      fC(yC());
    };
  },
  createSyncImportHook: function () {
    return function () {
      throw yC();
    };
  },
  existsSync: function () {
    return !1;
  },
  readFileSync: function () {
    throw yC();
  }
};