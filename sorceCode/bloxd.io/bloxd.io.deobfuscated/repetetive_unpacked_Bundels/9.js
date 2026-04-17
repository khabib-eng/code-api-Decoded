var fC = require("./14.js");
window.allowRightClick = () => {
  document.removeEventListener("contextmenu", ky);
};
window.loadVConsole = () => {
  require.e(1).then(require.t.bind(require, 1777, 23)).then(CC => {
    const yC = CC.default;
    console.log(yC);
    new yC();
    console.log("VConsole loaded");
    const IC = document.getElementsByClassName("vc-cmd");
    2 === IC.length && IC[0].remove();
  });
};
const ky = CC => {
  const yC = document.querySelector(".CodeEditorContent");
  if (!yC || !yC.contains(CC.target)) {
    return CC.preventDefault();
  }
};
document.addEventListener("contextmenu", ky);
let gC = !0;
export function c(CC) {
  if ("fweokfewkm" !== CC) {
    throw new Error("Please do not call this method. Should only be called by prepareForUnloadWithoutConfirmation.");
  }
  gC = !1;
}
window.onbeforeunload = function (CC) {
  gC && (CC.preventDefault(), CC.returnValue = "Really want to quit?");
};
window.screen && window.screen.orientation && window.screen.orientation.lock && window.screen.orientation.lock("landscape").catch(CC => {
  console.log("LOADING: Failed to lock screen to landscape");
});
window.scrollTo && window.scrollTo(0, 1);
document.addEventListener("visibilitychange", () => {
  fC.b.set({
    soundOnFromVisibility: "visible" === document.visibilityState
  });
});
setTimeout(() => {
  const CC = document.getElementsByClassName("vc-cmd");
  2 === CC.length && CC[0].remove();
}, 2e3);