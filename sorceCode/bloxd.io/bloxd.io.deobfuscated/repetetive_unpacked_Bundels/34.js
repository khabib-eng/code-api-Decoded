export function e(CC) {
  e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (CC) {
    return typeof CC;
  } : function (CC) {
    return CC && "function" == typeof Symbol && CC.constructor === Symbol && CC !== Symbol.prototype ? "symbol" : typeof CC;
  };
  return e(CC);
}