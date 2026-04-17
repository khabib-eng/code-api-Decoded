var fC = require("./577.js");
export let z = function (CC) {
  CC.DEFAULT = "default";
  CC.DEFAULT2 = "default2";
  CC.BAREBLOXBONES = "bareBloxBones";
  CC.JAMBLOXDS = "jamBloxds";
  CC.H4DES = "h4des";
  CC.SIMPLEBETTER = "simpleBetter";
  CC.TINYBITS = "tinyBits";
  CC.CUSTOM = "custom";
  return CC;
}({});
export const A = {
  [z.DEFAULT]: 1,
  [z.DEFAULT2]: 1,
  [z.BAREBLOXBONES]: 2,
  [z.JAMBLOXDS]: 9,
  [z.H4DES]: 2,
  [z.SIMPLEBETTER]: 2,
  [z.TINYBITS]: 3,
  [z.CUSTOM]: 1
};
export let j = function (CC) {
  CC.BLOCK = "BLOCK";
  CC.ITEM = "ITEM";
  CC.ICON = "ICON";
  CC.LIFEFORM_ATLAS = "LIFEFORM_ATLAS";
  CC.PLAYER_ASSET = "PLAYER_ASSET";
  return CC;
}({});
export let b = function (CC) {
  CC.BLOCK = "BLOCK";
  CC.ITEM = "ITEM";
  CC.LIFEFORM = "LIFEFORM";
  return CC;
}({});
export const p = {
  "font-family": "font-family",
  src: "src",
  "font-style": "font-style",
  "font-weight": "font-weight",
  "font-stretch": "font-stretch",
  "font-display": "font-display",
  "unicode-range": "unicode-range",
  "font-variant": "font-variant",
  "font-feature-settings": "font-feature-settings",
  "font-variation-settings": "font-variation-settings"
};
export const n = {
  background: "background",
  "background-color": "background-color",
  "background-image": "background-image",
  "backdrop-filter": "backdrop-filter",
  "background-size": "background-size",
  "background-position": "background-position",
  "background-repeat": "background-repeat",
  "image-rendering": "image-rendering",
  filter: "filter",
  "touch-action": "touch-action",
  color: "color",
  opacity: "opacity",
  visibility: "visibility",
  border: "border",
  "border-radius": "border-radius",
  "border-color": "border-color",
  "border-style": "border-style",
  "border-width": "border-width",
  "border-image-source": "border-image-source",
  "border-image-slice": "border-image-slice",
  "border-image-width": "border-image-width",
  "border-image-outset": "border-image-outset",
  "border-image-repeat": "border-image-repeat",
  "border-image": "border-image",
  outline: "outline",
  contain: "contain",
  "box-shadow": "box-shadow",
  font: "font",
  "font-family": "font-family",
  "font-size": "font-size",
  "font-weight": "font-weight",
  "font-style": "font-style",
  "line-height": "line-height",
  "text-align": "text-align",
  "text-shadow": "text-shadow",
  "-webkit-text-stroke": "-webkit-text-stroke",
  "text-stroke": "text-stroke",
  "letter-spacing": "letter-spacing",
  "word-spacing": "word-spacing",
  "text-transform": "text-transform",
  "text-decoration": "text-decoration",
  "white-space": "white-space",
  overflow: "overflow",
  cursor: "cursor",
  padding: "padding",
  "padding-top": "padding-top",
  "padding-right": "padding-right",
  "padding-bottom": "padding-bottom",
  "padding-left": "padding-left",
  margin: "margin",
  "margin-top": "margin-top",
  "margin-right": "margin-right",
  "margin-bottom": "margin-bottom",
  "margin-left": "margin-left",
  width: "width",
  height: "height",
  "min-width": "min-width",
  "min-height": "min-height",
  "max-width": "max-width",
  "max-height": "max-height",
  "aspect-ratio": "aspect-ratio",
  position: "position",
  top: "top",
  right: "right",
  bottom: "bottom",
  left: "left",
  display: "display",
  flex: "flex",
  "flex-direction": "flex-direction",
  "flex-wrap": "flex-wrap",
  "justify-content": "justify-content",
  "align-items": "align-items",
  "align-content": "align-content",
  gap: "gap",
  order: "order",
  "flex-grow": "flex-grow",
  "flex-shrink": "flex-shrink",
  "flex-basis": "flex-basis",
  "align-self": "align-self",
  grid: "grid",
  "grid-template-columns": "grid-template-columns",
  "grid-template-rows": "grid-template-rows",
  "grid-template-areas": "grid-template-areas",
  "grid-template": "grid-template",
  "grid-auto-columns": "grid-auto-columns",
  "grid-auto-rows": "grid-auto-rows",
  "grid-auto-flow": "grid-auto-flow",
  "grid-column-gap": "grid-column-gap",
  "grid-row-gap": "grid-row-gap",
  "grid-gap": "grid-gap",
  "grid-area": "grid-area",
  "justify-self": "justify-self",
  "place-self": "place-self",
  "place-items": "place-items",
  "place-content": "place-content",
  transform: "transform",
  rotate: "rotate",
  scale: "scale",
  translate: "translate",
  transition: "transition",
  "z-index": "z-index"
};
export const q = ["$", "&", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "{", "|", "}", "~"];
export let k = function (CC) {
  CC.BASE64 = "Base64";
  CC.HTTP = "HTTP";
  return CC;
}({});
export let f = function (CC) {
  CC.TEXTURES = "textures";
  CC.MODELS = "models";
  CC.SKYBOXES = "skyBoxes";
  CC.CSS = "css";
  return CC;
}({});
export async function B(CC) {
  let yC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  if (CC === z.DEFAULT) {
    return {
      metaData: {
        id: z.DEFAULT,
        name: "Default",
        version: 1,
        previewImage: require("./607.js")
      }
    };
  }
  if (CC === z.CUSTOM) {
    return {
      metaData: {
        id: z.CUSTOM,
        name: "Custom",
        version: 1
      }
    };
  }
  {
    const IC = await fetch("".concat(fC.b.texturePackUrl, "/").concat(CC, ".json"), {
      cache: yC ? "reload" : "default"
    });
    return IC.ok ? IC.json() : void console.log("Error fetching texture pack json");
  }
}
export function r(CC) {
  const yC = [];
  const IC = {
    result: yC
  };
  CC.forEach(CC => {
    let yC = CC.path;
    "/" === yC.charAt(0) && (yC = yC.slice(1));
    yC.split("/").reduce((yC, IC, fC, ky) => {
      yC[IC] || (yC[IC] = {
        result: []
      }, yC.result.push({
        name: IC,
        children: yC[IC].result,
        file: fC === ky.length - 1 ? CC : void 0
      }));
      return yC[IC];
    }, IC);
  });
  return yC;
}
export function u(CC) {
  let yC = [];
  CC.children.forEach(CC => {
    CC.file ? yC.push(CC.file) : yC = yC.concat(u(CC));
  });
  return yC;
}
export async function x(CC) {
  const yC = new FileReader();
  yC.readAsDataURL(CC);
  return new Promise(CC => {
    yC.onloadend = () => {
      CC(yC.result);
    };
  });
}