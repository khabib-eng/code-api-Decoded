var fC = require("./408.js");
const ky = {
  recaptchaLoadedPromise: new Promise((CC, yC) => {
    window.onRecaptchaLoaded = () => {
      CC();
    };
    window.grecaptcha && window.grecaptcha.ready(() => {
      CC();
    });
  }).then(() => {
    console.log("Recaptcha libraries loaded");
  }),
  getRecaptchaToken: async () => window.grecaptcha.execute("6LcPavIpAAAAANyg3LnQvmaWqESD8DUTRgQ7TRDk", {
    action: "Greenlight"
  })
};
const gC = {
  recaptchaLoadedPromise: Promise.resolve(),
  getRecaptchaToken: async () => "[RECAPTCHA_DISABLED]"
};
export const c = fC.g.useTurnstile ? ky : gC;