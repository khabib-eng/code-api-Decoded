var fC = require("./14.js");
const ky = {
  googleSignInWithPopup: null,
  googleGetCurrentUser: 2e3,
  googleSignOut: null,
  appleSignInWithPopup: null,
  appleGetCurrentUser: 2e3,
  appleSignOut: null,
  microsoftSignInWithPopup: null,
  microsoftGetCurrentUser: 2e3,
  microsoftSignOut: null
};
const gC = new Map();
export async function b(CC, yC) {
  return new Promise((IC, fC) => {
    window.ReactNativeWebView ? (window.ReactNativeWebView.postMessage(JSON.stringify({
      messageName: CC,
      messageContent: yC
    })), gC.set(CC, IC), null !== ky[CC] && setTimeout(() => {
      gC.delete(CC);
      fC(new Error("Response for message ".concat(CC, " timed out after ").concat(ky[CC], "ms")));
    }, ky[CC])) : fC(new Error("React Native WebView is not available"));
  });
}
window.onMessageFromRN = CC => {
  const {
    messageName: yC,
    messageContent: IC
  } = JSON.parse(CC);
  console.log("Received message from react native: ", yC, IC);
  if ("notchSize" === yC) {
    fC.b.set({
      notchSize: IC
    });
  } else {
    if ("featureFlags" === yC) {
      fC.b.set({
        reactNativeFeatureFlags: IC
      });
    } else {
      if (gC.has(yC)) {
        const CC = gC.get(yC);
        CC && (CC(IC), gC.delete(yC));
      }
    }
  }
};