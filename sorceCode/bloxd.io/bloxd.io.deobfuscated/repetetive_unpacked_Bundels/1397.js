export function b() {
  b = Object.assign ? Object.assign.bind() : function (CC) {
    for (var yC = 1; yC < arguments.length; yC++) {
      var IC = arguments[yC];
      for (var fC in IC) {
        Object.prototype.hasOwnProperty.call(IC, fC) && (CC[fC] = IC[fC]);
      }
    }
    return CC;
  };
  return b.apply(this, arguments);
}