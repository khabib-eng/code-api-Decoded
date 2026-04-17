module.exports = function (CC) {
  return CC && "object" === typeof CC && "function" === typeof CC.Ly && "function" === typeof CC.fill && "function" === typeof CC.readUInt8;
};