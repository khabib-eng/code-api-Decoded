Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.getCiphers = exports.makeSectionHeader = exports.findChar = exports.rand = exports.getAsciiWithoutLetters = exports.getHumanReadableAscii = exports.getAsciiTable = exports.getAlphabet = exports.getRepeatedChars = exports.getRandomCiphers = exports.getCustomCiphers = exports.getUniformCiphers = exports.getUniqueRotations = exports.randomRotation = void 0;
const fC = require("./1132.js");
function ky(CC) {
  let yC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
  let IC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 126;
  return CC ? Array.from(CC).map(CC => bC(yC, IC)) : [];
}
function gC(CC, yC) {
  const IC = new Set();
  for (let fC = 0; fC < yC; fC++) {
    IC.add(ky(CC));
  }
  return IC;
}
function AC(CC) {
  const yC = [];
  for (let IC = 1; IC < 27; IC++) {
    yC.push("".concat((0, fC.caesarCipher)(CC, IC), " | ").concat(IC));
  }
  return yC;
}
function my(CC, yC) {
  return yC ? yC.map(yC => "".concat((0, fC.caesarCipher)(CC, 0, yC), " | [").concat(yC, "]")) : [];
}
function XC(CC) {
  return [...gC(CC, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 250)].map(yC => "".concat((0, fC.caesarCipher)(CC, 0, yC), " | [").concat(yC, "]"));
}
function iy(CC, yC) {
  return "".padEnd(yC, CC);
}
function LC() {
  const CC = [];
  for (let yC = 33, IC = 0; yC < 127; yC++, IC++) {
    CC[IC] = String.fromCharCode(yC);
  }
  return CC;
}
function YC() {
  return Array.from(LC().values());
}
function bC(CC, yC) {
  yC = Math.ceil(yC);
  CC = Math.ceil(CC);
  return Math.floor(Math.random() * (yC - CC + 1) + CC);
}
function rC(CC, yC) {
  let IC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  const fC = "input: ".concat(CC);
  const ky = iy(" ", CC.length - 4);
  const gC = "name".concat(ky, " | rotation");
  const AC = IC ? "" : "".concat(fC, "\n").concat(gC, "\n").concat(iy("-", 39), "\n");
  return "---------- ".concat(yC, " ----------\n").concat(AC);
}
exports.randomRotation = ky;
exports.getUniqueRotations = gC;
exports.getUniformCiphers = AC;
exports.getCustomCiphers = my;
exports.getRandomCiphers = XC;
exports.getRepeatedChars = iy;
exports.getAlphabet = function () {
  let CC = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
  const yC = [];
  const IC = CC ? 123 : 91;
  for (let fC = CC ? 97 : 65, ky = 0; fC < IC; fC++, ky++) {
    yC[ky] = String.fromCharCode(fC);
  }
  return yC;
};
exports.getAsciiTable = LC;
exports.getHumanReadableAscii = YC;
exports.getAsciiWithoutLetters = function () {
  const CC = YC();
  return CC.slice(0, 32).concat(CC.slice(91, 96)).concat(CC.slice(123, 126));
};
exports.rand = bC;
exports.findChar = function (CC, yC) {
  return yC.findIndex(yC => yC === CC);
};
exports.makeSectionHeader = rC;
exports.getCiphers = function (CC, yC, IC) {
  if (!CC) {
    return {};
  }
  const fC = [];
  let ky = rC(CC, "Uniform Rotations");
  let gC = rC(CC, "Custom Rotations", !0);
  let iy = rC(CC, "Random Rotations", !0);
  const LC = AC(CC);
  const YC = my(CC, yC);
  const bC = XC(CC, IC);
  ky += LC.join("\n");
  gC += YC.join("\n");
  iy += bC.join("\n");
  fC.push(...LC);
  fC.push(...YC);
  fC.push(...bC);
  return {
    ciphers: fC,
    cipherString: "".concat(ky, "\n").concat(gC, "\n").concat(iy),
    createdAt: new Date().toISOString()
  };
};