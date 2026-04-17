var fC = require("./659.js");
var ky = require("./673.js");
module.exports = {
  Protocol: fC.Service,
  assemble: fC.assembleProtocol
};
ky.copyOwnProperties(fC, module.exports);