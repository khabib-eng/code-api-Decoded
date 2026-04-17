Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.capitalize = function (CC) {
  return CC.charAt(0).toUpperCase() + CC.substr(1);
};
exports.clamp = function (CC, yC, IC) {
  return Math.min(Math.max(CC, yC), IC);
};