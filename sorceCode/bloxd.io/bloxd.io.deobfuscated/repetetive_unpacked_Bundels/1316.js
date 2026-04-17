var fC = require("./1321.js");
exports.operation = function (CC) {
  var IC = exports.timeouts(CC);
  return new fC(IC, {
    forever: CC && (CC.forever || CC.retries === 1 / 0),
    unref: CC && CC.unref,
    maxRetryTime: CC && CC.maxRetryTime
  });
};
exports.timeouts = function (CC) {
  if (CC instanceof Array) {
    return [].concat(CC);
  }
  var yC = {
    retries: 10,
    factor: 2,
    minTimeout: 1e3,
    maxTimeout: 1 / 0,
    randomize: !1
  };
  for (var IC in CC) {
    yC[IC] = CC[IC];
  }
  if (yC.minTimeout > yC.maxTimeout) {
    throw new Error("minTimeout is greater than maxTimeout");
  }
  for (var fC = [], ky = 0; ky < yC.retries; ky++) {
    fC.push(this.createTimeout(ky, yC));
  }
  CC && CC.forever && !fC.length && fC.push(this.createTimeout(ky, yC));
  fC.sort(function (CC, yC) {
    return CC - yC;
  });
  return fC;
};
exports.createTimeout = function (CC, yC) {
  var IC = yC.randomize ? Math.random() + 1 : 1;
  var fC = Math.round(IC * Math.max(yC.minTimeout, 1) * Math.pow(yC.factor, CC));
  return fC = Math.min(fC, yC.maxTimeout);
};
exports.wrap = function (CC, IC, fC) {
  IC instanceof Array && (fC = IC, IC = null);
  if (!fC) {
    fC = [];
    for (var ky in CC) {
      "function" === typeof CC[ky] && fC.push(ky);
    }
  }
  for (var gC = 0; gC < fC.length; gC++) {
    var AC = fC[gC];
    var my = CC[AC];
    CC[AC] = function (fC) {
      var ky = exports.operation(IC);
      var gC = Array.prototype.slice.call(arguments, 1);
      var AC = gC.pop();
      gC.push(function (CC) {
        ky.retry(CC) || (CC && (arguments[0] = ky.mainError()), AC.apply(this, arguments));
      });
      ky.attempt(function () {
        fC.apply(CC, gC);
      });
    }.bind(CC, my);
    CC[AC].options = IC;
  }
};