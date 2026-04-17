var fC = require("./49.js");
var ky = require("./544.js");
var gC = require("./1338.js");
var AC = require("./422.js");
var my = require("./1259.js");
var XC = require("./577.js");
var iy = require("./439.js");
var LC = require("./1374.js");
var YC = require("./442.js");
var bC = require("./1383.js");
var rC = require("./1447.js");
function GC() {
  return "discord" === YC.D ? null : iy.e.useXsollaTestProject ? "test" : "crazygames" === YC.D ? "crazygames" : "bloxd";
}
const eC = 3e5;
const OC = new Map();
const SC = new Map();
function TC(CC, yC) {
  const IC = AC.m[CC];
  const fC = gC.f.get().getCurrentLanguageCode();
  const ky = "".concat(IC, ":").concat(yC, ":").concat(fC);
  const my = OC.get(ky);
  if (my && Date.now() < my.expiresAt) {
    return Promise.resolve(my.data);
  }
  const XC = SC.get(ky);
  if (XC) {
    return XC;
  }
  const iy = new URLSearchParams({
    locale: fC,
    "additional_fields[]": "custom_attributes"
  }).toString();
  const LC = fetch("https://store.xsolla.com/api/v2/project/".concat(IC, "/items/group/").concat(yC, "?").concat(iy), {
    method: "GET"
  }).then(CC => {
    if (!CC.ok) {
      throw new Error("Xsolla catalogue request failed: ".concat(CC.status));
    }
    return CC.json();
  }).then(CC => {
    OC.set(ky, {
      data: CC,
      expiresAt: Date.now() + eC
    });
    SC.delete(ky);
    return CC;
  }).catch(CC => {
    SC.delete(ky);
    throw CC;
  });
  SC.set(ky, LC);
  return LC;
}
function NC(CC, yC, IC) {
  let fC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
  let ky = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
  const AC = {
    project: yC,
    sku: IC,
    language: function () {
      var CC;
      const yC = gC.f.get().getCurrentLanguageCode();
      return null !== (CC = {
        [gC.c.CHINESE_SIMPLIFIED]: "tw",
        [gC.c.CHINESE_TRADITIONAL]: "cn",
        [gC.c.PORTUGUESE_BRAZILIAN]: "pt"
      }[yC]) && void 0 !== CC ? CC : yC.split("_")[0];
    }()
  };
  fC && (AC.giftRecipientName = fC);
  ky && (AC.cosmeticPack = ky);
  return (0, my.t)("".concat(XC.b.indexUrl, "/index/xsolla/get-payment-token"), AC, {
    retries: fC ? 0 : 3
  }, CC.getMetricsCookies()).then(CC => {
    let {
      token: yC,
      orderId: IC
    } = CC;
    return {
      token: yC,
      orderId: IC,
      err: null
    };
  }).catch(CC => {
    console.error("Bad response from the server when trying to obtain payment token:", CC);
    return {
      token: null,
      orderId: null,
      err: "An error occurred trying to open the payment UI! Please report on discord what steps you took to get this error message."
    };
  });
}
function sC(CC, yC, IC, fC) {
  const ky = document.createElement("script");
  ky.type = "text/javascript";
  ky.async = !0;
  ky.src = "https://cdn.xsolla.net/payments-bucket-prod/embed/1.5.0/widget.min.js";
  ky.addEventListener("load", () => {
    XPayStationWidget.init({
      access_token: yC,
      sandbox: iy.e.useXsollaSandbox,
      "payment_widget_ui.lightbox.spinner": "round",
      lightbox: {
        closeByClick: !1,
        closeByKeyboard: !1
      }
    });
    XPayStationWidget.open();
    let ky = !1;
    let gC = !1;
    XPayStationWidget.on("status-troubled", () => {
      console.log("Xsolla Payment troubled");
      gC = !0;
    });
    XPayStationWidget.on("status-done", () => {
      console.log("Xsolla Payment done");
      (0, bC.s)();
      if ("crazygames" === YC.D && !ky) {
        const fC = AC.m[CC];
        fetch("https://store.xsolla.com/api/v2/project/".concat(fC, "/order/").concat(IC), {
          method: "GET",
          headers: {
            Authorization: "Bearer ".concat(yC)
          }
        }).then(CC => CC.json()).then(CC => {
          (0, LC.k)(CC);
        });
      }
      ky = !0;
    });
    XPayStationWidget.on("close", () => {
      fC(ky, gC);
    });
  }, !1);
  document.getElementsByTagName("head")[0].appendChild(ky);
}
export function f() {
  const CC = (0, rC.t)();
  const [yC, IC] = (0, fC.ey)(null);
  const [gC, my] = (0, fC.ey)(!1);
  const {
    userContext: XC
  } = (0, ky.fb)();
  const iy = GC();
  (0, fC.Oy)(() => {
    iy ? TC(iy, AC.q).then(CC => {
      let yC = CC.items[0];
      for (let IC = 1; IC < CC.items.length; IC++) {
        const fC = CC.items[IC];
        yC.price.amount > fC.price.amount && (yC = fC);
      }
      yC.sku || (console.error("Tried to get product sku and got", yC), my(!1));
      IC(yC);
    }) : console.error("Xsolla project missing for site:", YC.D);
  }, [iy]);
  return {
    xsollaItem: yC,
    xsollaWidgetInControl: gC,
    buySuperRank: async function (IC, fC) {
      let ky = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      if (yC && yC.sku) {
        my(!0);
        if (IC || fC || ky) {
          if (!IC) {
            return console.error("Missing token");
          }
          if (!fC) {
            return console.error("Missing orderId");
          }
          if (!ky) {
            return console.error("Missing giftRecipientName");
          }
        } else {
          const CC = await NC(XC, iy, yC.sku);
          if (CC.err) {
            my(!1);
            return console.error("Error when trying to get purchase token", CC.err);
          }
          IC = CC.token;
          fC = CC.orderId;
        }
        sC(iy, IC, fC, (yC, IC) => {
          my(!1);
          !yC || IC || ky || (CC("/super-rank-welcome"), (0, bC.v)());
        });
      }
    },
    createXsollaOrder: function (CC, IC) {
      return NC(CC, iy, yC.sku, IC);
    }
  };
}
export function b() {
  const CC = (0, rC.t)();
  const [yC, IC] = (0, fC.ey)({});
  const [gC, my] = (0, fC.ey)(!1);
  const {
    userContext: XC
  } = (0, ky.fb)();
  const iy = GC();
  (0, fC.Oy)(() => {
    iy && TC(iy, AC.k).then(CC => {
      const yC = {};
      for (const IC of null !== (fC = CC.items) && void 0 !== fC ? fC : []) {
        var fC;
        var ky;
        const CC = null === (ky = IC.custom_attributes) || void 0 === ky ? void 0 : ky.cosmetic_pack;
        CC && (yC[CC] = IC);
      }
      IC(yC);
    }).catch(CC => {
      console.error("Failed to fetch cosmetic pack catalogue:", CC);
    });
  }, [iy]);
  return {
    packItems: yC,
    xsollaWidgetInControl: gC,
    buyPack: async function (IC) {
      const fC = yC[IC];
      if (!fC || !fC.sku) {
        return void console.error("No Xsolla item found for cosmetic pack:", IC);
      }
      my(!0);
      const ky = await NC(XC, iy, fC.sku, "", IC);
      if (ky.err || !ky.token || !ky.orderId) {
        console.error("Error when trying to get cosmetic pack purchase token", ky.err);
        return void my(!1);
      }
      sC(iy, ky.token, ky.orderId, (yC, fC) => {
        my(!1);
        yC && !fC && (CC("/pack-welcome/".concat(IC)), (0, bC.v)());
      });
    }
  };
}