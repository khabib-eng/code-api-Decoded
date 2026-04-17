var fC = require("./671.js");
module.exports = {
  Type: fC.Type,
  parse: function (CC, yC) {
    var IC;
    if ("string" == typeof CC) {
      try {
        IC = JSON.parse(CC);
      } catch (ky) {
        IC = CC;
      }
    } else {
      IC = CC;
    }
    return fC.Type.forSchema(IC, yC);
  },
  types: fC.builtins,
  combine: fC.Type.forTypes,
  infer: fC.Type.forValue
};