var fC = require("./668.js");
var ky = require("./975.js");
var gC = require("./1086.js");
var AC = require("./673.js");
module.exports = {
  Service: ky.Service,
  assembleProtocol: gC.assembleProtocol,
  discoverProtocol: ky.discoverProtocol,
  parse: function (CC, yC) {
    var IC = gC.read(CC);
    return IC.protocol ? ky.Service.forProtocol(IC, yC) : fC.Type.forSchema(IC, yC);
  },
  readProtocol: gC.readProtocol,
  readSchema: gC.readSchema
};
AC.copyOwnProperties(fC, module.exports);