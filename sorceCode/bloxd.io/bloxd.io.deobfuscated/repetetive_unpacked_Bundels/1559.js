!function () {
  var yC = "undefined" !== typeof window && "undefined" !== typeof window.document ? window.document : {};
  var IC = module.exports;
  var fC = function () {
    for (var CC, IC = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]], fC = 0, ky = IC.length, gC = {}; fC < ky; fC++) {
      if ((CC = IC[fC]) && CC[1] in yC) {
        for (fC = 0; fC < CC.length; fC++) {
          gC[IC[0][fC]] = CC[fC];
        }
        return gC;
      }
    }
    return !1;
  }();
  var ky = {
    change: fC.fullscreenchange,
    error: fC.fullscreenerror
  };
  var gC = {
    request: function (CC, IC) {
      return new Promise(function (ky, gC) {
        var AC = function () {
          this.off("change", AC);
          ky();
        }.bind(this);
        this.on("change", AC);
        var my = (CC = CC || yC.documentElement)[fC.requestFullscreen](IC);
        my instanceof Promise && my.then(AC).catch(gC);
      }.bind(this));
    },
    exit: function () {
      return new Promise(function (CC, IC) {
        if (this.isFullscreen) {
          var ky = function () {
            this.off("change", ky);
            CC();
          }.bind(this);
          this.on("change", ky);
          var gC = yC[fC.exitFullscreen]();
          gC instanceof Promise && gC.then(ky).catch(IC);
        } else {
          CC();
        }
      }.bind(this));
    },
    toggle: function (CC, yC) {
      return this.isFullscreen ? this.exit() : this.request(CC, yC);
    },
    onchange: function (CC) {
      this.on("change", CC);
    },
    onerror: function (CC) {
      this.on("error", CC);
    },
    on: function (CC, IC) {
      var fC = ky[CC];
      fC && yC.addEventListener(fC, IC, !1);
    },
    off: function (CC, IC) {
      var fC = ky[CC];
      fC && yC.removeEventListener(fC, IC, !1);
    },
    raw: fC
  };
  fC ? (Object.defineProperties(gC, {
    isFullscreen: {
      get: function () {
        return Boolean(yC[fC.fullscreenElement]);
      }
    },
    element: {
      enumerable: !0,
      get: function () {
        return yC[fC.fullscreenElement];
      }
    },
    isEnabled: {
      enumerable: !0,
      get: function () {
        return Boolean(yC[fC.fullscreenEnabled]);
      }
    }
  }), IC ? module.exports = gC : window.screenfull = gC) : IC ? module.exports = {
    isEnabled: !1
  } : window.screenfull = {
    isEnabled: !1
  };
}();