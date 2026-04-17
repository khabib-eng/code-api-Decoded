export function d(CC, yC) {
  d = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (CC, yC) {
    CC.__proto__ = yC;
    return CC;
  };
  return d(CC, yC);
}