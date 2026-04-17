if (typeof Object.create === "function") {
  module.exports = function (p, p2) {
    if (p2) {
      p.super_ = p2;
      p.prototype = Object.create(p2.prototype, {
        constructor: {
          value: p,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
    }
  };
} else {
  module.exports = function (p3, p4) {
    if (p4) {
      p3.super_ = p4;
      function f() {}
      f.prototype = p4.prototype;
      p3.prototype = new f();
      p3.prototype.constructor = p3;
    }
  };
}