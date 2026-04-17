var fC = require("./510.js");
var ky = require("./27.js");
var gC = require("./18.js");
var AC = require("./49.js");
var my = require("./1406.js");
var XC = my;
var iy = require("./1481.js");
var LC = iy;
var YC = require("./1483.js");
var bC = YC;
const rC = ["children"];
const GC = ["children"];
var eC;
var OC;
var SC = (CC => {
  CC.BASE = "base";
  CC.BODY = "body";
  CC.HEAD = "head";
  CC.HTML = "html";
  CC.LINK = "link";
  CC.META = "meta";
  CC.NOSCRIPT = "noscript";
  CC.SCRIPT = "script";
  CC.STYLE = "style";
  CC.TITLE = "title";
  CC.FRAGMENT = "Symbol(react.fragment)";
  return CC;
})(SC || {});
var TC = {
  rel: ["amphtml", "canonical", "alternate"]
};
var NC = {
  type: ["application/ld+json"]
};
var sC = {
  charset: "",
  name: ["generator", "robots", "description"],
  property: ["og:type", "og:title", "og:url", "og:image", "og:image:alt", "og:description", "twitter:url", "twitter:title", "twitter:description", "twitter:image", "twitter:image:alt", "twitter:card", "twitter:site"]
};
var jy = Object.values(SC);
var qC = {
  accesskey: "accessKey",
  charset: "charSet",
  class: "className",
  contenteditable: "contentEditable",
  contextmenu: "contextMenu",
  "http-equiv": "httpEquiv",
  itemprop: "itemProp",
  tabindex: "tabIndex"
};
var KC = Object.entries(qC).reduce((CC, yC) => {
  let [IC, fC] = yC;
  CC[fC] = IC;
  return CC;
}, {});
var pC = "data-rh";
var wC = "defaultTitle";
var HC = "defer";
var aC = "encodeSpecialCharacters";
var cC = "onChangeClientState";
var UC = "titleTemplate";
var EC = "prioritizeSeoTags";
var VC = (CC, yC) => {
  for (let IC = CC.length - 1; IC >= 0; IC -= 1) {
    const fC = CC[IC];
    if (Object.prototype.hasOwnProperty.call(fC, yC)) {
      return fC[yC];
    }
  }
  return null;
};
var WC = CC => {
  let yC = VC(CC, "title");
  const IC = VC(CC, UC);
  Array.isArray(yC) && (yC = yC.join(""));
  if (IC && yC) {
    return IC.replace(/%s/g, () => yC);
  }
  const fC = VC(CC, wC);
  return yC || fC || void 0;
};
var xC = CC => VC(CC, cC) || (() => {});
var PC = (CC, yC) => yC.filter(yC => "undefined" !== typeof yC[CC]).map(yC => yC[CC]).reduce((CC, yC) => (0, gC.d)((0, gC.d)({}, CC), yC), {});
var zC = (CC, yC) => yC.filter(CC => "undefined" !== typeof CC.base).map(CC => CC.base).reverse().reduce((yC, IC) => {
  if (!yC.length) {
    const fC = Object.keys(IC);
    for (let ky = 0; ky < fC.length; ky += 1) {
      const gC = fC[ky].toLowerCase();
      if (-1 !== CC.indexOf(gC) && IC[gC]) {
        return yC.concat(IC);
      }
    }
  }
  return yC;
}, []);
var BC = (CC, yC, IC) => {
  const fC = {};
  return IC.filter(yC => {
    return !!Array.isArray(yC[CC]) || ("undefined" !== typeof yC[CC] && (IC = "Helmet: ".concat(CC, ' should be of type "Array". Instead found type "').concat(typeof yC[CC], '"'), console && "function" === typeof console.warn && console.warn(IC)), !1);
    var IC;
  }).map(yC => yC[CC]).reverse().reduce((CC, IC) => {
    const ky = {};
    IC.filter(CC => {
      let IC;
      const gC = Object.keys(CC);
      for (let fC = 0; fC < gC.length; fC += 1) {
        const ky = gC[fC];
        const AC = ky.toLowerCase();
        -1 === yC.indexOf(AC) || "rel" === IC && "canonical" === CC[IC].toLowerCase() || "rel" === AC && "stylesheet" === CC[AC].toLowerCase() || (IC = AC);
        -1 === yC.indexOf(ky) || "innerHTML" !== ky && "cssText" !== ky && "itemprop" !== ky || (IC = ky);
      }
      if (!IC || !CC[IC]) {
        return !1;
      }
      const AC = CC[IC].toLowerCase();
      fC[IC] || (fC[IC] = {});
      ky[IC] || (ky[IC] = {});
      return !fC[IC][AC] && (ky[IC][AC] = !0, !0);
    }).reverse().forEach(yC => CC.push(yC));
    const AC = Object.keys(ky);
    for (let yC = 0; yC < AC.length; yC += 1) {
      const CC = AC[yC];
      const IC = (0, gC.d)((0, gC.d)({}, fC[CC]), ky[CC]);
      fC[CC] = IC;
    }
    return CC;
  }, []).reverse();
};
var tC = (CC, yC) => {
  if (Array.isArray(CC) && CC.length) {
    for (let IC = 0; IC < CC.length; IC += 1) {
      if (CC[IC][yC]) {
        return !0;
      }
    }
  }
  return !1;
};
var JC = CC => Array.isArray(CC) ? CC.join("") : CC;
var nC = (CC, yC) => Array.isArray(CC) ? CC.reduce((CC, IC) => {
  ((CC, yC) => {
    const IC = Object.keys(CC);
    for (let fC = 0; fC < IC.length; fC += 1) {
      if (yC[IC[fC]] && yC[IC[fC]].includes(CC[IC[fC]])) {
        return !0;
      }
    }
    return !1;
  })(IC, yC) ? CC.priority.push(IC) : CC.default.push(IC);
  return CC;
}, {
  priority: [],
  default: []
}) : {
  default: CC,
  priority: []
};
var FC = (CC, yC) => (0, gC.d)((0, gC.d)({}, CC), {}, {
  [yC]: void 0
});
var uC = ["noscript", "script", "style"];
function DC(CC) {
  return !1 === (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) ? String(CC) : String(CC).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
}
var ZC = CC => Object.keys(CC).reduce((yC, IC) => {
  const fC = "undefined" !== typeof CC[IC] ? "".concat(IC, '="').concat(CC[IC], '"') : "".concat(IC);
  return yC ? "".concat(yC, " ").concat(fC) : fC;
}, "");
function lC(CC) {
  let yC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  return Object.keys(CC).reduce((yC, IC) => {
    yC[qC[IC] || IC] = CC[IC];
    return yC;
  }, yC);
}
var oC = (CC, yC) => yC.map((yC, IC) => {
  const fC = {
    key: IC,
    [pC]: !0
  };
  Object.keys(yC).forEach(CC => {
    const IC = qC[CC] || CC;
    if ("innerHTML" === IC || "cssText" === IC) {
      const CC = yC.innerHTML || yC.cssText;
      fC.dangerouslySetInnerHTML = {
        __html: CC
      };
    } else {
      fC[IC] = yC[CC];
    }
  });
  return AC.createElement(CC, fC);
});
function vC(CC, yC) {
  let IC = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
  switch (CC) {
    case "title":
      return {
        toComponent: () => ((CC, yC, IC) => {
          const fC = lC(IC, {
            key: yC,
            [pC]: !0
          });
          return [AC.createElement("title", fC, yC)];
        })(0, yC.title, yC.titleAttributes),
        toString: () => ((CC, yC, IC, fC) => {
          const ky = ZC(IC);
          const gC = JC(yC);
          return ky ? "<".concat(CC, " ").concat(pC, '="true" ').concat(ky, ">").concat(DC(gC, fC), "</").concat(CC, ">") : "<".concat(CC, " ").concat(pC, '="true">').concat(DC(gC, fC), "</").concat(CC, ">");
        })(CC, yC.title, yC.titleAttributes, IC)
      };
    case "bodyAttributes":
    case "htmlAttributes":
      return {
        toComponent: () => lC(yC),
        toString: () => ZC(yC)
      };
    default:
      return {
        toComponent: () => oC(CC, yC),
        toString: () => function (CC, yC) {
          let IC = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          return yC.reduce((yC, fC) => {
            const ky = fC;
            const gC = Object.keys(ky).filter(CC => !("innerHTML" === CC || "cssText" === CC)).reduce((CC, yC) => {
              const fC = "undefined" === typeof ky[yC] ? yC : "".concat(yC, '="').concat(DC(ky[yC], IC), '"');
              return CC ? "".concat(CC, " ").concat(fC) : fC;
            }, "");
            const AC = ky.innerHTML || ky.cssText || "";
            const my = -1 === uC.indexOf(CC);
            return "".concat(yC, "<").concat(CC, " ").concat(pC, '="true" ').concat(gC).concat(my ? "/>" : ">".concat(AC, "</").concat(CC, ">"));
          }, "");
        }(CC, yC, IC)
      };
  }
}
var hC = CC => {
  const {
    baseTag: yC,
    bodyAttributes: IC,
    encode: fC = !0,
    htmlAttributes: ky,
    noscriptTags: gC,
    styleTags: AC,
    title: my = "",
    titleAttributes: XC,
    prioritizeSeoTags: iy
  } = CC;
  let {
    linkTags: LC,
    metaTags: YC,
    scriptTags: bC
  } = CC;
  let rC = {
    toComponent: () => {},
    toString: () => ""
  };
  iy && ({
    priorityMethods: rC,
    linkTags: LC,
    metaTags: YC,
    scriptTags: bC
  } = (CC => {
    let {
      metaTags: yC,
      linkTags: IC,
      scriptTags: fC,
      encode: ky
    } = CC;
    const gC = nC(yC, sC);
    const AC = nC(IC, TC);
    const my = nC(fC, NC);
    return {
      priorityMethods: {
        toComponent: () => [...oC("meta", gC.priority), ...oC("link", AC.priority), ...oC("script", my.priority)],
        toString: () => "".concat(vC("meta", gC.priority, ky), " ").concat(vC("link", AC.priority, ky), " ").concat(vC("script", my.priority, ky))
      },
      metaTags: gC.default,
      linkTags: AC.default,
      scriptTags: my.default
    };
  })(CC));
  return {
    priority: rC,
    base: vC("base", yC, fC),
    bodyAttributes: vC("bodyAttributes", IC, fC),
    htmlAttributes: vC("htmlAttributes", ky, fC),
    link: vC("link", LC, fC),
    meta: vC("meta", YC, fC),
    noscript: vC("noscript", gC, fC),
    script: vC("script", bC, fC),
    style: vC("style", AC, fC),
    title: vC("title", {
      title: my,
      titleAttributes: XC
    }, fC)
  };
};
var RC = [];
var dC = !("undefined" === typeof window || !window.document || !window.document.createElement);
var QC = class {
  constructor(CC, yC) {
    (0, ky.c)(this, "instances", []);
    (0, ky.c)(this, "canUseDOM", dC);
    (0, ky.c)(this, "context", void 0);
    (0, ky.c)(this, "value", {
      setHelmet: CC => {
        this.context.helmet = CC;
      },
      helmetInstances: {
        get: () => this.canUseDOM ? RC : this.instances,
        add: CC => {
          (this.canUseDOM ? RC : this.instances).push(CC);
        },
        remove: CC => {
          const yC = (this.canUseDOM ? RC : this.instances).indexOf(CC);
          (this.canUseDOM ? RC : this.instances).splice(yC, 1);
        }
      }
    });
    this.context = CC;
    this.canUseDOM = yC || !1;
    yC || (CC.helmet = hC({
      baseTag: [],
      bodyAttributes: {},
      encodeSpecialCharacters: !0,
      htmlAttributes: {},
      linkTags: [],
      metaTags: [],
      noscriptTags: [],
      scriptTags: [],
      styleTags: [],
      title: "",
      titleAttributes: {}
    }));
  }
};
var MC = AC.createContext({});
eC = class CC extends AC.Component {
  constructor(yC) {
    super(yC);
    (0, ky.c)(this, "helmetData", void 0);
    this.helmetData = new QC(this.props.context || {}, CC.canUseDOM);
  }
  render() {
    return AC.createElement(MC.Provider, {
      value: this.helmetData.value
    }, this.props.children);
  }
};
(0, ky.c)(eC, "canUseDOM", dC);
export var d = eC;
var yy = (CC, yC) => {
  const IC = document.head || document.querySelector("head");
  const fC = IC.querySelectorAll("".concat(CC, "[").concat(pC, "]"));
  const ky = [].slice.call(fC);
  const gC = [];
  let AC;
  yC && yC.length && yC.forEach(yC => {
    const IC = document.createElement(CC);
    for (const CC in yC) {
      if (Object.prototype.hasOwnProperty.call(yC, CC)) {
        if ("innerHTML" === CC) {
          IC.innerHTML = yC.innerHTML;
        } else {
          if ("cssText" === CC) {
            IC.styleSheet ? IC.styleSheet.cssText = yC.cssText : IC.appendChild(document.createTextNode(yC.cssText));
          } else {
            const fC = CC;
            const ky = "undefined" === typeof yC[fC] ? "" : yC[fC];
            IC.setAttribute(CC, ky);
          }
        }
      }
    }
    IC.setAttribute(pC, "true");
    ky.some((CC, yC) => {
      AC = yC;
      return IC.isEqualNode(CC);
    }) ? ky.splice(AC, 1) : gC.push(IC);
  });
  ky.forEach(CC => {
    var yC;
    return null === (yC = CC.parentNode) || void 0 === yC ? void 0 : yC.removeChild(CC);
  });
  gC.forEach(CC => IC.appendChild(CC));
  return {
    oldTags: ky,
    newTags: gC
  };
};
var Iy = (CC, yC) => {
  const IC = document.getElementsByTagName(CC)[0];
  if (!IC) {
    return;
  }
  const fC = IC.getAttribute(pC);
  const ky = fC ? fC.split(",") : [];
  const gC = [...ky];
  const AC = Object.keys(yC);
  for (const my of AC) {
    const CC = yC[my] || "";
    IC.getAttribute(my) !== CC && IC.setAttribute(my, CC);
    -1 === ky.indexOf(my) && ky.push(my);
    const fC = gC.indexOf(my);
    -1 !== fC && gC.splice(fC, 1);
  }
  for (let my = gC.length - 1; my >= 0; my -= 1) {
    IC.removeAttribute(gC[my]);
  }
  ky.length === gC.length ? IC.removeAttribute(pC) : IC.getAttribute(pC) !== AC.join(",") && IC.setAttribute(pC, AC.join(","));
};
var fy = (CC, yC) => {
  const {
    baseTag: IC,
    bodyAttributes: fC,
    htmlAttributes: ky,
    linkTags: gC,
    metaTags: AC,
    noscriptTags: my,
    onChangeClientState: XC,
    scriptTags: iy,
    styleTags: LC,
    title: YC,
    titleAttributes: bC
  } = CC;
  Iy("body", fC);
  Iy("html", ky);
  ((CC, yC) => {
    "undefined" !== typeof CC && document.title !== CC && (document.title = JC(CC));
    Iy("title", yC);
  })(YC, bC);
  const rC = {
    baseTag: yy("base", IC),
    linkTags: yy("link", gC),
    metaTags: yy("meta", AC),
    noscriptTags: yy("noscript", my),
    scriptTags: yy("script", iy),
    styleTags: yy("style", LC)
  };
  const GC = {};
  const eC = {};
  Object.keys(rC).forEach(CC => {
    const {
      newTags: yC,
      oldTags: IC
    } = rC[CC];
    yC.length && (GC[CC] = yC);
    IC.length && (eC[CC] = rC[CC].oldTags);
  });
  yC && yC();
  XC(CC, GC, eC);
};
var kI = null;
var gy = CC => {
  kI && cancelAnimationFrame(kI);
  CC.defer ? kI = requestAnimationFrame(() => {
    fy(CC, () => {
      kI = null;
    });
  }) : (fy(CC), kI = null);
};
var Ay = class extends AC.Component {
  constructor() {
    super(...arguments);
    (0, ky.c)(this, "rendered", !1);
  }
  shouldComponentUpdate(CC) {
    return !bC(CC, this.props);
  }
  componentDidUpdate() {
    this.emitChange();
  }
  componentWillUnmount() {
    const {
      helmetInstances: CC
    } = this.props.context;
    CC.remove(this);
    this.emitChange();
  }
  emitChange() {
    const {
      helmetInstances: CC,
      setHelmet: yC
    } = this.props.context;
    let IC = null;
    ky = CC.get().map(CC => {
      const yC = (0, gC.d)({}, CC.props);
      delete yC.context;
      return yC;
    });
    const fC = {
      baseTag: zC(["href"], ky),
      bodyAttributes: PC("bodyAttributes", ky),
      defer: VC(ky, HC),
      encode: VC(ky, aC),
      htmlAttributes: PC("htmlAttributes", ky),
      linkTags: BC("link", ["rel", "href"], ky),
      metaTags: BC("meta", ["name", "charset", "http-equiv", "property", "itemprop"], ky),
      noscriptTags: BC("noscript", ["innerHTML"], ky),
      onChangeClientState: xC(ky),
      scriptTags: BC("script", ["src", "innerHTML"], ky),
      styleTags: BC("style", ["cssText"], ky),
      title: WC(ky),
      titleAttributes: PC("titleAttributes", ky),
      prioritizeSeoTags: tC(ky, EC)
    };
    var ky;
    d.canUseDOM ? gy(fC) : hC && (IC = hC(fC));
    yC(IC);
  }
  init() {
    if (this.rendered) {
      return;
    }
    this.rendered = !0;
    const {
      helmetInstances: CC
    } = this.props.context;
    CC.add(this);
    this.emitChange();
  }
  render() {
    this.init();
    return null;
  }
};
OC = class extends AC.Component {
  shouldComponentUpdate(CC) {
    return !XC(FC(this.props, "helmetData"), FC(CC, "helmetData"));
  }
  mapNestedChildrenToProps(CC, yC) {
    if (!yC) {
      return null;
    }
    switch (CC.type) {
      case "script":
      case "noscript":
        return {
          innerHTML: yC
        };
      case "style":
        return {
          cssText: yC
        };
      default:
        throw new Error("<".concat(CC.type, " /> elements are self-closing and can not contain children. Refer to our API for more information."));
    }
  }
  flattenArrayTypeChildren(CC, yC, IC, fC) {
    return (0, gC.d)((0, gC.d)({}, yC), {}, {
      [CC.type]: [...(yC[CC.type] || []), (0, gC.d)((0, gC.d)({}, IC), this.mapNestedChildrenToProps(CC, fC))]
    });
  }
  mapObjectTypeChildren(CC, yC, IC, fC) {
    switch (CC.type) {
      case "title":
        return (0, gC.d)((0, gC.d)({}, yC), {}, {
          [CC.type]: fC,
          titleAttributes: (0, gC.d)({}, IC)
        });
      case "body":
        return (0, gC.d)((0, gC.d)({}, yC), {}, {
          bodyAttributes: (0, gC.d)({}, IC)
        });
      case "html":
        return (0, gC.d)((0, gC.d)({}, yC), {}, {
          htmlAttributes: (0, gC.d)({}, IC)
        });
      default:
        return (0, gC.d)((0, gC.d)({}, yC), {}, {
          [CC.type]: (0, gC.d)({}, IC)
        });
    }
  }
  mapArrayTypeChildrenToProps(CC, yC) {
    let IC = (0, gC.d)({}, yC);
    Object.keys(CC).forEach(yC => {
      IC = (0, gC.d)((0, gC.d)({}, IC), {}, {
        [yC]: CC[yC]
      });
    });
    return IC;
  }
  warnOnInvalidChildren(CC, yC) {
    LC(jy.some(yC => CC.type === yC), "function" === typeof CC.type ? "You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information." : "Only elements types ".concat(jy.join(", "), " are allowed. Helmet does not support rendering <").concat(CC.type, "> elements. Refer to our API for more information."));
    LC(!yC || "string" === typeof yC || Array.isArray(yC) && !yC.some(CC => "string" !== typeof CC), "Helmet expects a string as a child of <".concat(CC.type, ">. Did you forget to wrap your children in braces? ( <").concat(CC.type, ">{``}</").concat(CC.type, "> ) Refer to our API for more information."));
    return !0;
  }
  mapChildrenToProps(CC, yC) {
    let IC = {};
    AC.Children.forEach(CC, CC => {
      if (!CC || !CC.props) {
        return;
      }
      const ky = CC.props;
      const {
        children: gC
      } = ky;
      const AC = (0, fC.e)(ky, rC);
      const my = Object.keys(AC).reduce((CC, yC) => {
        CC[KC[yC] || yC] = AC[yC];
        return CC;
      }, {});
      let {
        type: XC
      } = CC;
      "symbol" === typeof XC ? XC = XC.toString() : this.warnOnInvalidChildren(CC, gC);
      switch (XC) {
        case "Symbol(react.fragment)":
          yC = this.mapChildrenToProps(gC, yC);
          break;
        case "link":
        case "meta":
        case "noscript":
        case "script":
        case "style":
          IC = this.flattenArrayTypeChildren(CC, IC, my, gC);
          break;
        default:
          yC = this.mapObjectTypeChildren(CC, yC, my, gC);
      }
    });
    return this.mapArrayTypeChildrenToProps(IC, yC);
  }
  render() {
    const CC = this.props;
    const {
      children: yC
    } = CC;
    const IC = (0, fC.e)(CC, GC);
    let ky = (0, gC.d)({}, IC);
    let {
      helmetData: my
    } = IC;
    yC && (ky = this.mapChildrenToProps(yC, ky));
    if (my && !(my instanceof QC)) {
      my = new QC(my.context, !0);
      delete ky.helmetData;
    }
    return my ? AC.createElement(Ay, (0, gC.d)((0, gC.d)({}, ky), {}, {
      context: my.value
    })) : AC.createElement(MC.Consumer, null, CC => AC.createElement(Ay, (0, gC.d)((0, gC.d)({}, ky), {}, {
      context: CC
    })));
  }
};
(0, ky.c)(OC, "defaultProps", {
  defer: !0,
  encodeSpecialCharacters: !0,
  prioritizeSeoTags: !1
});
export var h = OC;