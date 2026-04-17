var fC;
!function () {
  function ky() {
    this.init();
  }
  ky.prototype = {
    init: function () {
      var CC = this || gC;
      CC._counter = 1e3;
      CC._html5AudioPool = [];
      CC.html5PoolSize = 10;
      CC._codecs = {};
      CC._howls = [];
      CC._muted = !1;
      CC._volume = 1;
      CC._canPlayEvent = "canplaythrough";
      CC._navigator = "undefined" !== typeof window && window.navigator ? window.navigator : null;
      CC.masterGain = null;
      CC.noAudio = !1;
      CC.usingWebAudio = !0;
      CC.autoSuspend = !0;
      CC.ctx = null;
      CC.autoUnlock = !0;
      CC._setup();
      return CC;
    },
    volume: function (CC) {
      var yC = this || gC;
      CC = parseFloat(CC);
      yC.ctx || rC();
      if ("undefined" !== typeof CC && CC >= 0 && CC <= 1) {
        yC._volume = CC;
        if (yC._muted) {
          return yC;
        }
        yC.usingWebAudio && yC.masterGain.gain.setValueAtTime(CC, gC.ctx.currentTime);
        for (var IC = 0; IC < yC._howls.length; IC++) {
          if (!yC._howls[IC]._webAudio) {
            for (var fC = yC._howls[IC]._getSoundIds(), ky = 0; ky < fC.length; ky++) {
              var AC = yC._howls[IC]._soundById(fC[ky]);
              AC && AC._node && (AC._node.volume = AC._volume * CC);
            }
          }
        }
        return yC;
      }
      return yC._volume;
    },
    mute: function (CC) {
      var yC = this || gC;
      yC.ctx || rC();
      yC._muted = CC;
      yC.usingWebAudio && yC.masterGain.gain.setValueAtTime(CC ? 0 : yC._volume, gC.ctx.currentTime);
      for (var IC = 0; IC < yC._howls.length; IC++) {
        if (!yC._howls[IC]._webAudio) {
          for (var fC = yC._howls[IC]._getSoundIds(), ky = 0; ky < fC.length; ky++) {
            var AC = yC._howls[IC]._soundById(fC[ky]);
            AC && AC._node && (AC._node.muted = !!CC || AC._muted);
          }
        }
      }
      return yC;
    },
    stop: function () {
      for (var CC = this || gC, yC = 0; yC < CC._howls.length; yC++) {
        CC._howls[yC].stop();
      }
      return CC;
    },
    unload: function () {
      for (var CC = this || gC, yC = CC._howls.length - 1; yC >= 0; yC--) {
        CC._howls[yC].unload();
      }
      CC.usingWebAudio && CC.ctx && "undefined" !== typeof CC.ctx.close && (CC.ctx.close(), CC.ctx = null, rC());
      return CC;
    },
    codecs: function (CC) {
      return (this || gC)._codecs[CC.replace(/^x-/, "")];
    },
    _setup: function () {
      var CC = this || gC;
      CC.state = CC.ctx && CC.ctx.state || "suspended";
      CC._autoSuspend();
      if (!CC.usingWebAudio) {
        if ("undefined" !== typeof Audio) {
          try {
            "undefined" === typeof new Audio().oncanplaythrough && (CC._canPlayEvent = "canplay");
          } catch (yC) {
            CC.noAudio = !0;
          }
        } else {
          CC.noAudio = !0;
        }
      }
      try {
        new Audio().muted && (CC.noAudio = !0);
      } catch (yC) {}
      CC.noAudio || CC._setupCodecs();
      return CC;
    },
    _setupCodecs: function () {
      var CC = this || gC;
      var yC = null;
      try {
        yC = "undefined" !== typeof Audio ? new Audio() : null;
      } catch (LC) {
        return CC;
      }
      if (!yC || "function" !== typeof yC.canPlayType) {
        return CC;
      }
      var IC = yC.canPlayType("audio/mpeg;").replace(/^no$/, "");
      var fC = CC._navigator ? CC._navigator.userAgent : "";
      var ky = fC.match(/OPR\/([0-6].)/g);
      var AC = ky && parseInt(ky[0].split("/")[1], 10) < 33;
      var my = -1 !== fC.indexOf("Safari") && -1 === fC.indexOf("Chrome");
      var XC = fC.match(/Version\/(.*?) /);
      var iy = my && XC && parseInt(XC[1], 10) < 15;
      CC._codecs = {
        mp3: !(AC || !IC && !yC.canPlayType("audio/mp3;").replace(/^no$/, "")),
        mpeg: !!IC,
        opus: !!yC.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
        ogg: !!yC.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
        oga: !!yC.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
        wav: !!(yC.canPlayType('audio/wav; codecs="1"') || yC.canPlayType("audio/wav")).replace(/^no$/, ""),
        aac: !!yC.canPlayType("audio/aac;").replace(/^no$/, ""),
        caf: !!yC.canPlayType("audio/x-caf;").replace(/^no$/, ""),
        m4a: !!(yC.canPlayType("audio/x-m4a;") || yC.canPlayType("audio/m4a;") || yC.canPlayType("audio/aac;")).replace(/^no$/, ""),
        m4b: !!(yC.canPlayType("audio/x-m4b;") || yC.canPlayType("audio/m4b;") || yC.canPlayType("audio/aac;")).replace(/^no$/, ""),
        mp4: !!(yC.canPlayType("audio/x-mp4;") || yC.canPlayType("audio/mp4;") || yC.canPlayType("audio/aac;")).replace(/^no$/, ""),
        weba: !(iy || !yC.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
        webm: !(iy || !yC.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
        dolby: !!yC.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
        flac: !!(yC.canPlayType("audio/x-flac;") || yC.canPlayType("audio/flac;")).replace(/^no$/, "")
      };
      return CC;
    },
    _unlockAudio: function () {
      var CC = this || gC;
      if (!CC._audioUnlocked && CC.ctx) {
        CC._audioUnlocked = !1;
        CC.autoUnlock = !1;
        CC._mobileUnloaded || 44100 === CC.ctx.sampleRate || (CC._mobileUnloaded = !0, CC.unload());
        CC._scratchBuffer = CC.ctx.createBuffer(1, 1, 22050);
        function yC(IC) {
          for (; CC._html5AudioPool.length < CC.html5PoolSize;) {
            try {
              var fC = new Audio();
              fC._unlocked = !0;
              CC._releaseHtml5Audio(fC);
            } catch (IC) {
              CC.noAudio = !0;
              break;
            }
          }
          for (var ky = 0; ky < CC._howls.length; ky++) {
            if (!CC._howls[ky]._webAudio) {
              for (var gC = CC._howls[ky]._getSoundIds(), AC = 0; AC < gC.length; AC++) {
                var my = CC._howls[ky]._soundById(gC[AC]);
                my && my._node && !my._node._unlocked && (my._node._unlocked = !0, my._node.load());
              }
            }
          }
          CC._autoResume();
          var XC = CC.ctx.createBufferSource();
          XC.buffer = CC._scratchBuffer;
          XC.connect(CC.ctx.destination);
          "undefined" === typeof XC.start ? XC.noteOn(0) : XC.start(0);
          "function" === typeof CC.ctx.resume && CC.ctx.resume();
          XC.onended = function () {
            XC.disconnect(0);
            CC._audioUnlocked = !0;
            document.removeEventListener("touchstart", yC, !0);
            document.removeEventListener("touchend", yC, !0);
            document.removeEventListener("click", yC, !0);
            document.removeEventListener("keydown", yC, !0);
            for (var IC = 0; IC < CC._howls.length; IC++) {
              CC._howls[IC]._emit("unlock");
            }
          };
        }
        document.addEventListener("touchstart", yC, !0);
        document.addEventListener("touchend", yC, !0);
        document.addEventListener("click", yC, !0);
        document.addEventListener("keydown", yC, !0);
        return CC;
      }
    },
    _obtainHtml5Audio: function () {
      var CC = this || gC;
      if (CC._html5AudioPool.length) {
        return CC._html5AudioPool.pop();
      }
      var yC = new Audio().play();
      yC && "undefined" !== typeof Promise && (yC instanceof Promise || "function" === typeof yC.then) && yC.catch(function () {
        console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.");
      });
      return new Audio();
    },
    _releaseHtml5Audio: function (CC) {
      var yC = this || gC;
      CC._unlocked && yC._html5AudioPool.push(CC);
      return yC;
    },
    _autoSuspend: function () {
      var CC = this;
      if (CC.autoSuspend && CC.ctx && "undefined" !== typeof CC.ctx.suspend && gC.usingWebAudio) {
        for (var yC = 0; yC < CC._howls.length; yC++) {
          if (CC._howls[yC]._webAudio) {
            for (var IC = 0; IC < CC._howls[yC]._sounds.length; IC++) {
              if (!CC._howls[yC]._sounds[IC].wL) {
                return CC;
              }
            }
          }
        }
        CC._suspendTimer && clearTimeout(CC._suspendTimer);
        CC._suspendTimer = setTimeout(function () {
          if (CC.autoSuspend) {
            CC._suspendTimer = null;
            CC.state = "suspending";
            function yC() {
              CC.state = "suspended";
              CC._resumeAfterSuspend && (delete CC._resumeAfterSuspend, CC._autoResume());
            }
            CC.ctx.suspend().then(yC, yC);
          }
        }, 3e4);
        return CC;
      }
    },
    _autoResume: function () {
      var CC = this;
      if (CC.ctx && "undefined" !== typeof CC.ctx.resume && gC.usingWebAudio) {
        "running" === CC.state && "interrupted" !== CC.ctx.state && CC._suspendTimer ? (clearTimeout(CC._suspendTimer), CC._suspendTimer = null) : "suspended" === CC.state || "running" === CC.state && "interrupted" === CC.ctx.state ? (CC.ctx.resume().then(function () {
          CC.state = "running";
          for (var yC = 0; yC < CC._howls.length; yC++) {
            CC._howls[yC]._emit("resume");
          }
        }), CC._suspendTimer && (clearTimeout(CC._suspendTimer), CC._suspendTimer = null)) : "suspending" === CC.state && (CC._resumeAfterSuspend = !0);
        return CC;
      }
    }
  };
  var gC = new ky();
  function AC(CC) {
    CC.src && 0 !== CC.src.length ? this.init(CC) : console.error("An array of source files must be passed with any new Howl.");
  }
  AC.prototype = {
    init: function (CC) {
      var yC = this;
      gC.ctx || rC();
      yC._autoplay = CC.autoplay || !1;
      yC._format = "string" !== typeof CC.format ? CC.format : [CC.format];
      yC._html5 = CC.html5 || !1;
      yC._muted = CC.mute || !1;
      yC._loop = CC.loop || !1;
      yC._pool = CC.pool || 5;
      yC._preload = "boolean" !== typeof CC.preload && "metadata" !== CC.preload || CC.preload;
      yC._rate = CC.rate || 1;
      yC._sprite = CC.sprite || {};
      yC._src = "string" !== typeof CC.src ? CC.src : [CC.src];
      yC._volume = void 0 !== CC.volume ? CC.volume : 1;
      yC._xhr = {
        method: CC.xhr && CC.xhr.method ? CC.xhr.method : "GET",
        headers: CC.xhr && CC.xhr.headers ? CC.xhr.headers : null,
        withCredentials: !(!CC.xhr || !CC.xhr.withCredentials) && CC.xhr.withCredentials
      };
      yC._duration = 0;
      yC._state = "unloaded";
      yC._sounds = [];
      yC._endTimers = {};
      yC._queue = [];
      yC._playLock = !1;
      yC._onend = CC.onend ? [{
        Ky: CC.onend
      }] : [];
      yC._onfade = CC.onfade ? [{
        Ky: CC.onfade
      }] : [];
      yC._onload = CC.onload ? [{
        Ky: CC.onload
      }] : [];
      yC._onloaderror = CC.onloaderror ? [{
        Ky: CC.onloaderror
      }] : [];
      yC._onplayerror = CC.onplayerror ? [{
        Ky: CC.onplayerror
      }] : [];
      yC._onpause = CC.onpause ? [{
        Ky: CC.onpause
      }] : [];
      yC._onplay = CC.onplay ? [{
        Ky: CC.onplay
      }] : [];
      yC._onstop = CC.onstop ? [{
        Ky: CC.onstop
      }] : [];
      yC._onmute = CC.onmute ? [{
        Ky: CC.onmute
      }] : [];
      yC._onvolume = CC.onvolume ? [{
        Ky: CC.onvolume
      }] : [];
      yC._onrate = CC.onrate ? [{
        Ky: CC.onrate
      }] : [];
      yC._onseek = CC.onseek ? [{
        Ky: CC.onseek
      }] : [];
      yC._onunlock = CC.onunlock ? [{
        Ky: CC.onunlock
      }] : [];
      yC._onresume = [];
      yC._webAudio = gC.usingWebAudio && !yC._html5;
      "undefined" !== typeof gC.ctx && gC.ctx && gC.autoUnlock && gC._unlockAudio();
      gC._howls.push(yC);
      yC._autoplay && yC._queue.push({
        event: "play",
        action: function () {
          yC.play();
        }
      });
      yC._preload && "none" !== yC._preload && yC.load();
      return yC;
    },
    load: function () {
      var CC = this;
      var yC = null;
      if (gC.noAudio) {
        CC._emit("loaderror", null, "No audio support.");
      } else {
        "string" === typeof CC._src && (CC._src = [CC._src]);
        for (var IC = 0; IC < CC._src.length; IC++) {
          var fC;
          var ky;
          if (CC._format && CC._format[IC]) {
            fC = CC._format[IC];
          } else {
            if ("string" !== typeof (ky = CC._src[IC])) {
              CC._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
              continue;
            }
            (fC = /^data:audio\/([^;,]+);/i.exec(ky)) || (fC = /\.([^.]+)$/.exec(ky.split("?", 1)[0]));
            fC && (fC = fC[1].toLowerCase());
          }
          fC || console.warn('No file extension was found. Consider using the "format" property or specify an extension.');
          if (fC && gC.codecs(fC)) {
            yC = CC._src[IC];
            break;
          }
        }
        if (yC) {
          CC._src = yC;
          CC._state = "loading";
          "https:" === window.location.protocol && "http:" === yC.slice(0, 5) && (CC._html5 = !0, CC._webAudio = !1);
          new my(CC);
          CC._webAudio && iy(CC);
          return CC;
        }
        CC._emit("loaderror", null, "No codec support for selected audio sources.");
      }
    },
    play: function (CC, yC) {
      var IC = this;
      var fC = null;
      if ("number" === typeof CC) {
        fC = CC;
        CC = null;
      } else {
        if ("string" === typeof CC && "loaded" === IC._state && !IC._sprite[CC]) {
          return null;
        }
        if ("undefined" === typeof CC && (CC = "__default", !IC._playLock)) {
          for (var ky = 0, AC = 0; AC < IC._sounds.length; AC++) {
            IC._sounds[AC].wL && !IC._sounds[AC]._ended && (ky++, fC = IC._sounds[AC]._id);
          }
          1 === ky ? CC = null : fC = null;
        }
      }
      var my = fC ? IC._soundById(fC) : IC._inactiveSound();
      if (!my) {
        return null;
      }
      fC && !CC && (CC = my._sprite || "__default");
      if ("loaded" !== IC._state) {
        my._sprite = CC;
        my._ended = !1;
        var XC = my._id;
        IC._queue.push({
          event: "play",
          action: function () {
            IC.play(XC);
          }
        });
        return XC;
      }
      if (fC && !my.wL) {
        yC || IC._loadQueue("play");
        return my._id;
      }
      IC._webAudio && gC._autoResume();
      var iy = Math.max(0, my._seek > 0 ? my._seek : IC._sprite[CC][0] / 1e3);
      var LC = Math.max(0, (IC._sprite[CC][0] + IC._sprite[CC][1]) / 1e3 - iy);
      var YC = 1e3 * LC / Math.abs(my._rate);
      var bC = IC._sprite[CC][0] / 1e3;
      var rC = (IC._sprite[CC][0] + IC._sprite[CC][1]) / 1e3;
      my._sprite = CC;
      my._ended = !1;
      function GC() {
        my.wL = !1;
        my._seek = iy;
        my._start = bC;
        my._stop = rC;
        my._loop = !(!my._loop && !IC._sprite[CC][2]);
      }
      if (!(iy >= rC)) {
        var eC = my._node;
        if (IC._webAudio) {
          function OC() {
            IC._playLock = !1;
            GC();
            IC._refreshBuffer(my);
            var CC = my._muted || IC._muted ? 0 : my._volume;
            eC.gain.setValueAtTime(CC, gC.ctx.currentTime);
            my._playStart = gC.ctx.currentTime;
            "undefined" === typeof eC.bufferSource.start ? my._loop ? eC.bufferSource.noteGrainOn(0, iy, 86400) : eC.bufferSource.noteGrainOn(0, iy, LC) : my._loop ? eC.bufferSource.start(0, iy, 86400) : eC.bufferSource.start(0, iy, LC);
            YC !== 1 / 0 && (IC._endTimers[my._id] = setTimeout(IC._ended.bind(IC, my), YC));
            yC || setTimeout(function () {
              IC._emit("play", my._id);
              IC._loadQueue();
            }, 0);
          }
          "running" === gC.state && "interrupted" !== gC.ctx.state ? OC() : (IC._playLock = !0, IC.once("resume", OC), IC._clearTimer(my._id));
        } else {
          function SC() {
            eC.currentTime = iy;
            eC.muted = my._muted || IC._muted || gC._muted || eC.muted;
            eC.volume = my._volume * gC.volume();
            eC.playbackRate = my._rate;
            try {
              var fC = eC.play();
              fC && "undefined" !== typeof Promise && (fC instanceof Promise || "function" === typeof fC.then) ? (IC._playLock = !0, GC(), fC.then(function () {
                IC._playLock = !1;
                eC._unlocked = !0;
                yC ? IC._loadQueue() : IC._emit("play", my._id);
              }).catch(function () {
                IC._playLock = !1;
                IC._emit("playerror", my._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                my._ended = !0;
                my.wL = !0;
              })) : yC || (IC._playLock = !1, GC(), IC._emit("play", my._id));
              eC.playbackRate = my._rate;
              if (eC.paused) {
                return void IC._emit("playerror", my._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
              }
              "__default" !== CC || my._loop ? IC._endTimers[my._id] = setTimeout(IC._ended.bind(IC, my), YC) : (IC._endTimers[my._id] = function () {
                IC._ended(my);
                eC.removeEventListener("ended", IC._endTimers[my._id], !1);
              }, eC.addEventListener("ended", IC._endTimers[my._id], !1));
            } catch (ky) {
              IC._emit("playerror", my._id, ky);
            }
          }
          "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA" === eC.src && (eC.src = IC._src, eC.load());
          var TC = window && window.ejecta || !eC.readyState && gC._navigator.isCocoonJS;
          if (eC.readyState >= 3 || TC) {
            SC();
          } else {
            IC._playLock = !0;
            IC._state = "loading";
            function NC() {
              IC._state = "loaded";
              SC();
              eC.removeEventListener(gC._canPlayEvent, NC, !1);
            }
            eC.addEventListener(gC._canPlayEvent, NC, !1);
            IC._clearTimer(my._id);
          }
        }
        return my._id;
      }
      IC._ended(my);
    },
    pause: function (CC) {
      var yC = this;
      if ("loaded" !== yC._state || yC._playLock) {
        yC._queue.push({
          event: "pause",
          action: function () {
            yC.pause(CC);
          }
        });
        return yC;
      }
      for (var IC = yC._getSoundIds(CC), fC = 0; fC < IC.length; fC++) {
        yC._clearTimer(IC[fC]);
        var ky = yC._soundById(IC[fC]);
        if (ky && !ky.wL && (ky._seek = yC.seek(IC[fC]), ky._rateSeek = 0, ky.wL = !0, yC._stopFade(IC[fC]), ky._node)) {
          if (yC._webAudio) {
            if (!ky._node.bufferSource) {
              continue;
            }
            "undefined" === typeof ky._node.bufferSource.stop ? ky._node.bufferSource.noteOff(0) : ky._node.bufferSource.stop(0);
            yC._cleanBuffer(ky._node);
          } else {
            isNaN(ky._node.duration) && ky._node.duration !== 1 / 0 || ky._node.pause();
          }
        }
        arguments[1] || yC._emit("pause", ky ? ky._id : null);
      }
      return yC;
    },
    stop: function (CC, yC) {
      var IC = this;
      if ("loaded" !== IC._state || IC._playLock) {
        IC._queue.push({
          event: "stop",
          action: function () {
            IC.stop(CC);
          }
        });
        return IC;
      }
      for (var fC = IC._getSoundIds(CC), ky = 0; ky < fC.length; ky++) {
        IC._clearTimer(fC[ky]);
        var gC = IC._soundById(fC[ky]);
        gC && (gC._seek = gC._start || 0, gC._rateSeek = 0, gC.wL = !0, gC._ended = !0, IC._stopFade(fC[ky]), gC._node && (IC._webAudio ? gC._node.bufferSource && ("undefined" === typeof gC._node.bufferSource.stop ? gC._node.bufferSource.noteOff(0) : gC._node.bufferSource.stop(0), IC._cleanBuffer(gC._node)) : isNaN(gC._node.duration) && gC._node.duration !== 1 / 0 || (gC._node.currentTime = gC._start || 0, gC._node.pause(), gC._node.duration === 1 / 0 && IC._clearSound(gC._node))), yC || IC._emit("stop", gC._id));
      }
      return IC;
    },
    mute: function (CC, yC) {
      var IC = this;
      if ("loaded" !== IC._state || IC._playLock) {
        IC._queue.push({
          event: "mute",
          action: function () {
            IC.mute(CC, yC);
          }
        });
        return IC;
      }
      if ("undefined" === typeof yC) {
        if ("boolean" !== typeof CC) {
          return IC._muted;
        }
        IC._muted = CC;
      }
      for (var fC = IC._getSoundIds(yC), ky = 0; ky < fC.length; ky++) {
        var AC = IC._soundById(fC[ky]);
        AC && (AC._muted = CC, AC._interval && IC._stopFade(AC._id), IC._webAudio && AC._node ? AC._node.gain.setValueAtTime(CC ? 0 : AC._volume, gC.ctx.currentTime) : AC._node && (AC._node.muted = !!gC._muted || CC), IC._emit("mute", AC._id));
      }
      return IC;
    },
    volume: function () {
      var CC;
      var yC;
      var IC;
      var fC = this;
      var ky = arguments;
      if (0 === ky.length) {
        return fC._volume;
      }
      1 === ky.length || 2 === ky.length && "undefined" === typeof ky[1] ? fC._getSoundIds().indexOf(ky[0]) >= 0 ? yC = parseInt(ky[0], 10) : CC = parseFloat(ky[0]) : ky.length >= 2 && (CC = parseFloat(ky[0]), yC = parseInt(ky[1], 10));
      if (!("undefined" !== typeof CC && CC >= 0 && CC <= 1)) {
        return (IC = yC ? fC._soundById(yC) : fC._sounds[0]) ? IC._volume : 0;
      }
      if ("loaded" !== fC._state || fC._playLock) {
        fC._queue.push({
          event: "volume",
          action: function () {
            fC.volume.apply(fC, ky);
          }
        });
        return fC;
      }
      "undefined" === typeof yC && (fC._volume = CC);
      yC = fC._getSoundIds(yC);
      for (var AC = 0; AC < yC.length; AC++) {
        (IC = fC._soundById(yC[AC])) && (IC._volume = CC, ky[2] || fC._stopFade(yC[AC]), fC._webAudio && IC._node && !IC._muted ? IC._node.gain.setValueAtTime(CC, gC.ctx.currentTime) : IC._node && !IC._muted && (IC._node.volume = CC * gC.volume()), fC._emit("volume", IC._id));
      }
      return fC;
    },
    fade: function (CC, yC, IC, fC) {
      var ky = this;
      if ("loaded" !== ky._state || ky._playLock) {
        ky._queue.push({
          event: "fade",
          action: function () {
            ky.fade(CC, yC, IC, fC);
          }
        });
        return ky;
      }
      CC = Math.min(Math.max(0, parseFloat(CC)), 1);
      yC = Math.min(Math.max(0, parseFloat(yC)), 1);
      IC = parseFloat(IC);
      ky.volume(CC, fC);
      for (var AC = ky._getSoundIds(fC), my = 0; my < AC.length; my++) {
        var XC = ky._soundById(AC[my]);
        if (XC) {
          fC || ky._stopFade(AC[my]);
          if (ky._webAudio && !XC._muted) {
            var iy = gC.ctx.currentTime;
            var LC = iy + IC / 1e3;
            XC._volume = CC;
            XC._node.gain.setValueAtTime(CC, iy);
            XC._node.gain.linearRampToValueAtTime(yC, LC);
          }
          ky._startFadeInterval(XC, CC, yC, IC, AC[my], "undefined" === typeof fC);
        }
      }
      return ky;
    },
    _startFadeInterval: function (CC, yC, IC, fC, ky, gC) {
      var AC = this;
      var my = yC;
      var XC = IC - yC;
      var iy = Math.abs(XC / .01);
      var LC = Math.max(4, iy > 0 ? fC / iy : fC);
      var YC = Date.now();
      CC._fadeTo = IC;
      CC._interval = setInterval(function () {
        var ky = (Date.now() - YC) / fC;
        YC = Date.now();
        my += XC * ky;
        my = Math.round(100 * my) / 100;
        my = XC < 0 ? Math.max(IC, my) : Math.min(IC, my);
        AC._webAudio ? CC._volume = my : AC.volume(my, CC._id, !0);
        gC && (AC._volume = my);
        (IC < yC && my <= IC || IC > yC && my >= IC) && (clearInterval(CC._interval), CC._interval = null, CC._fadeTo = null, AC.volume(IC, CC._id), AC._emit("fade", CC._id));
      }, LC);
    },
    _stopFade: function (CC) {
      var yC = this;
      var IC = yC._soundById(CC);
      IC && IC._interval && (yC._webAudio && IC._node.gain.cancelScheduledValues(gC.ctx.currentTime), clearInterval(IC._interval), IC._interval = null, yC.volume(IC._fadeTo, CC), IC._fadeTo = null, yC._emit("fade", CC));
      return yC;
    },
    loop: function () {
      var CC;
      var yC;
      var IC;
      var fC = this;
      var ky = arguments;
      if (0 === ky.length) {
        return fC._loop;
      }
      if (1 === ky.length) {
        if ("boolean" !== typeof ky[0]) {
          return !!(IC = fC._soundById(parseInt(ky[0], 10))) && IC._loop;
        }
        CC = ky[0];
        fC._loop = CC;
      } else {
        2 === ky.length && (CC = ky[0], yC = parseInt(ky[1], 10));
      }
      for (var gC = fC._getSoundIds(yC), AC = 0; AC < gC.length; AC++) {
        (IC = fC._soundById(gC[AC])) && (IC._loop = CC, fC._webAudio && IC._node && IC._node.bufferSource && (IC._node.bufferSource.loop = CC, CC && (IC._node.bufferSource.loopStart = IC._start || 0, IC._node.bufferSource.loopEnd = IC._stop, fC.playing(gC[AC]) && (fC.pause(gC[AC], !0), fC.play(gC[AC], !0)))));
      }
      return fC;
    },
    rate: function () {
      var CC;
      var yC;
      var IC;
      var fC = this;
      var ky = arguments;
      if (0 === ky.length) {
        yC = fC._sounds[0]._id;
      } else {
        if (1 === ky.length) {
          fC._getSoundIds().indexOf(ky[0]) >= 0 ? yC = parseInt(ky[0], 10) : CC = parseFloat(ky[0]);
        } else {
          2 === ky.length && (CC = parseFloat(ky[0]), yC = parseInt(ky[1], 10));
        }
      }
      if ("number" !== typeof CC) {
        return (IC = fC._soundById(yC)) ? IC._rate : fC._rate;
      }
      if ("loaded" !== fC._state || fC._playLock) {
        fC._queue.push({
          event: "rate",
          action: function () {
            fC.rate.apply(fC, ky);
          }
        });
        return fC;
      }
      "undefined" === typeof yC && (fC._rate = CC);
      yC = fC._getSoundIds(yC);
      for (var AC = 0; AC < yC.length; AC++) {
        if (IC = fC._soundById(yC[AC])) {
          fC.playing(yC[AC]) && (IC._rateSeek = fC.seek(yC[AC]), IC._playStart = fC._webAudio ? gC.ctx.currentTime : IC._playStart);
          IC._rate = CC;
          fC._webAudio && IC._node && IC._node.bufferSource ? IC._node.bufferSource.playbackRate.setValueAtTime(CC, gC.ctx.currentTime) : IC._node && (IC._node.playbackRate = CC);
          var my = fC.seek(yC[AC]);
          var XC = 1e3 * ((fC._sprite[IC._sprite][0] + fC._sprite[IC._sprite][1]) / 1e3 - my) / Math.abs(IC._rate);
          !fC._endTimers[yC[AC]] && IC.wL || (fC._clearTimer(yC[AC]), fC._endTimers[yC[AC]] = setTimeout(fC._ended.bind(fC, IC), XC));
          fC._emit("rate", IC._id);
        }
      }
      return fC;
    },
    seek: function () {
      var CC;
      var yC;
      var IC = this;
      var fC = arguments;
      if (0 === fC.length) {
        IC._sounds.length && (yC = IC._sounds[0]._id);
      } else {
        if (1 === fC.length) {
          IC._getSoundIds().indexOf(fC[0]) >= 0 ? yC = parseInt(fC[0], 10) : IC._sounds.length && (yC = IC._sounds[0]._id, CC = parseFloat(fC[0]));
        } else {
          2 === fC.length && (CC = parseFloat(fC[0]), yC = parseInt(fC[1], 10));
        }
      }
      if ("undefined" === typeof yC) {
        return 0;
      }
      if ("number" === typeof CC && ("loaded" !== IC._state || IC._playLock)) {
        IC._queue.push({
          event: "seek",
          action: function () {
            IC.seek.apply(IC, fC);
          }
        });
        return IC;
      }
      var ky = IC._soundById(yC);
      if (ky) {
        if (!("number" === typeof CC && CC >= 0)) {
          if (IC._webAudio) {
            var AC = IC.playing(yC) ? gC.ctx.currentTime - ky._playStart : 0;
            var my = ky._rateSeek ? ky._rateSeek - ky._seek : 0;
            return ky._seek + (my + AC * Math.abs(ky._rate));
          }
          return ky._node.currentTime;
        }
        var XC = IC.playing(yC);
        XC && IC.pause(yC, !0);
        ky._seek = CC;
        ky._ended = !1;
        IC._clearTimer(yC);
        IC._webAudio || !ky._node || isNaN(ky._node.duration) || (ky._node.currentTime = CC);
        function iy() {
          XC && IC.play(yC, !0);
          IC._emit("seek", yC);
        }
        if (XC && !IC._webAudio) {
          function LC() {
            IC._playLock ? setTimeout(LC, 0) : iy();
          }
          setTimeout(LC, 0);
        } else {
          iy();
        }
      }
      return IC;
    },
    playing: function (CC) {
      var yC = this;
      if ("number" === typeof CC) {
        var IC = yC._soundById(CC);
        return !!IC && !IC.wL;
      }
      for (var fC = 0; fC < yC._sounds.length; fC++) {
        if (!yC._sounds[fC].wL) {
          return !0;
        }
      }
      return !1;
    },
    duration: function (CC) {
      var yC = this;
      var IC = yC._duration;
      var fC = yC._soundById(CC);
      fC && (IC = yC._sprite[fC._sprite][1] / 1e3);
      return IC;
    },
    state: function () {
      return this._state;
    },
    unload: function () {
      for (var CC = this, yC = CC._sounds, IC = 0; IC < yC.length; IC++) {
        yC[IC].wL || CC.stop(yC[IC]._id);
        CC._webAudio || (CC._clearSound(yC[IC]._node), yC[IC]._node.removeEventListener("error", yC[IC]._errorFn, !1), yC[IC]._node.removeEventListener(gC._canPlayEvent, yC[IC]._loadFn, !1), yC[IC]._node.removeEventListener("ended", yC[IC]._endFn, !1), gC._releaseHtml5Audio(yC[IC]._node));
        delete yC[IC]._node;
        CC._clearTimer(yC[IC]._id);
      }
      var fC = gC._howls.indexOf(CC);
      fC >= 0 && gC._howls.splice(fC, 1);
      var ky = !0;
      for (IC = 0; IC < gC._howls.length; IC++) {
        if (gC._howls[IC]._src === CC._src || CC._src.indexOf(gC._howls[IC]._src) >= 0) {
          ky = !1;
          break;
        }
      }
      XC && ky && delete XC[CC._src];
      gC.noAudio = !1;
      CC._state = "unloaded";
      CC._sounds = [];
      CC = null;
      return null;
    },
    on: function (CC, yC, IC, fC) {
      var ky = this["_on" + CC];
      "function" === typeof yC && ky.push(fC ? {
        id: IC,
        Ky: yC,
        once: fC
      } : {
        id: IC,
        Ky: yC
      });
      return this;
    },
    off: function (CC, yC, IC) {
      var fC = this;
      var ky = fC["_on" + CC];
      var gC = 0;
      "number" === typeof yC && (IC = yC, yC = null);
      if (yC || IC) {
        for (gC = 0; gC < ky.length; gC++) {
          var AC = IC === ky[gC].id;
          if (yC === ky[gC].Ky && AC || !yC && AC) {
            ky.splice(gC, 1);
            break;
          }
        }
      } else {
        if (CC) {
          fC["_on" + CC] = [];
        } else {
          var my = Object.keys(fC);
          for (gC = 0; gC < my.length; gC++) {
            0 === my[gC].indexOf("_on") && Array.isArray(fC[my[gC]]) && (fC[my[gC]] = []);
          }
        }
      }
      return fC;
    },
    once: function (CC, yC, IC) {
      this.on(CC, yC, IC, 1);
      return this;
    },
    _emit: function (CC, yC, IC) {
      for (var fC = this, ky = fC["_on" + CC], gC = ky.length - 1; gC >= 0; gC--) {
        ky[gC].id && ky[gC].id !== yC && "load" !== CC || (setTimeout(function (CC) {
          CC.call(this, yC, IC);
        }.bind(fC, ky[gC].Ky), 0), ky[gC].once && fC.off(CC, ky[gC].Ky, ky[gC].id));
      }
      fC._loadQueue(CC);
      return fC;
    },
    _loadQueue: function (CC) {
      var yC = this;
      if (yC._queue.length > 0) {
        var IC = yC._queue[0];
        IC.event === CC && (yC._queue.shift(), yC._loadQueue());
        CC || IC.action();
      }
      return yC;
    },
    _ended: function (CC) {
      var yC = this;
      var IC = CC._sprite;
      if (!yC._webAudio && CC._node && !CC._node.paused && !CC._node.ended && CC._node.currentTime < CC._stop) {
        setTimeout(yC._ended.bind(yC, CC), 100);
        return yC;
      }
      var fC = !(!CC._loop && !yC._sprite[IC][2]);
      yC._emit("end", CC._id);
      !yC._webAudio && fC && yC.stop(CC._id, !0).play(CC._id);
      if (yC._webAudio && fC) {
        yC._emit("play", CC._id);
        CC._seek = CC._start || 0;
        CC._rateSeek = 0;
        CC._playStart = gC.ctx.currentTime;
        var ky = 1e3 * (CC._stop - CC._start) / Math.abs(CC._rate);
        yC._endTimers[CC._id] = setTimeout(yC._ended.bind(yC, CC), ky);
      }
      yC._webAudio && !fC && (CC.wL = !0, CC._ended = !0, CC._seek = CC._start || 0, CC._rateSeek = 0, yC._clearTimer(CC._id), yC._cleanBuffer(CC._node), gC._autoSuspend());
      yC._webAudio || fC || yC.stop(CC._id, !0);
      return yC;
    },
    _clearTimer: function (CC) {
      var yC = this;
      if (yC._endTimers[CC]) {
        if ("function" !== typeof yC._endTimers[CC]) {
          clearTimeout(yC._endTimers[CC]);
        } else {
          var IC = yC._soundById(CC);
          IC && IC._node && IC._node.removeEventListener("ended", yC._endTimers[CC], !1);
        }
        delete yC._endTimers[CC];
      }
      return yC;
    },
    _soundById: function (CC) {
      for (var yC = this, IC = 0; IC < yC._sounds.length; IC++) {
        if (CC === yC._sounds[IC]._id) {
          return yC._sounds[IC];
        }
      }
      return null;
    },
    _inactiveSound: function () {
      var CC = this;
      CC._drain();
      for (var yC = 0; yC < CC._sounds.length; yC++) {
        if (CC._sounds[yC]._ended) {
          return CC._sounds[yC].reset();
        }
      }
      return new my(CC);
    },
    _drain: function () {
      var CC = this;
      var yC = CC._pool;
      var IC = 0;
      var fC = 0;
      if (!(CC._sounds.length < yC)) {
        for (fC = 0; fC < CC._sounds.length; fC++) {
          CC._sounds[fC]._ended && IC++;
        }
        for (fC = CC._sounds.length - 1; fC >= 0; fC--) {
          if (IC <= yC) {
            return;
          }
          CC._sounds[fC]._ended && (CC._webAudio && CC._sounds[fC]._node && CC._sounds[fC]._node.disconnect(0), CC._sounds.splice(fC, 1), IC--);
        }
      }
    },
    _getSoundIds: function (CC) {
      if ("undefined" === typeof CC) {
        for (var yC = [], IC = 0; IC < this._sounds.length; IC++) {
          yC.push(this._sounds[IC]._id);
        }
        return yC;
      }
      return [CC];
    },
    _refreshBuffer: function (CC) {
      CC._node.bufferSource = gC.ctx.createBufferSource();
      CC._node.bufferSource.buffer = XC[this._src];
      CC._panner ? CC._node.bufferSource.connect(CC._panner) : CC._node.bufferSource.connect(CC._node);
      CC._node.bufferSource.loop = CC._loop;
      CC._loop && (CC._node.bufferSource.loopStart = CC._start || 0, CC._node.bufferSource.loopEnd = CC._stop || 0);
      CC._node.bufferSource.playbackRate.setValueAtTime(CC._rate, gC.ctx.currentTime);
      return this;
    },
    _cleanBuffer: function (CC) {
      var yC = gC._navigator && gC._navigator.vendor.indexOf("Apple") >= 0;
      if (gC._scratchBuffer && CC.bufferSource && (CC.bufferSource.onended = null, CC.bufferSource.disconnect(0), yC)) {
        try {
          CC.bufferSource.buffer = gC._scratchBuffer;
        } catch (IC) {}
      }
      CC.bufferSource = null;
      return this;
    },
    _clearSound: function (CC) {
      /MSIE |Trident\//.test(gC._navigator && gC._navigator.userAgent) || (CC.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA");
    }
  };
  function my(CC) {
    this._parent = CC;
    this.init();
  }
  my.prototype = {
    init: function () {
      var CC = this;
      var yC = CC._parent;
      CC._muted = yC._muted;
      CC._loop = yC._loop;
      CC._volume = yC._volume;
      CC._rate = yC._rate;
      CC._seek = 0;
      CC.wL = !0;
      CC._ended = !0;
      CC._sprite = "__default";
      CC._id = ++gC._counter;
      yC._sounds.push(CC);
      CC.create();
      return CC;
    },
    create: function () {
      var CC = this;
      var yC = CC._parent;
      var IC = gC._muted || CC._muted || CC._parent._muted ? 0 : CC._volume;
      yC._webAudio ? (CC._node = "undefined" === typeof gC.ctx.createGain ? gC.ctx.createGainNode() : gC.ctx.createGain(), CC._node.gain.setValueAtTime(IC, gC.ctx.currentTime), CC._node.paused = !0, CC._node.connect(gC.masterGain)) : gC.noAudio || (CC._node = gC._obtainHtml5Audio(), CC._errorFn = CC._errorListener.bind(CC), CC._node.addEventListener("error", CC._errorFn, !1), CC._loadFn = CC._loadListener.bind(CC), CC._node.addEventListener(gC._canPlayEvent, CC._loadFn, !1), CC._endFn = CC._endListener.bind(CC), CC._node.addEventListener("ended", CC._endFn, !1), CC._node.src = yC._src, CC._node.preload = !0 === yC._preload ? "auto" : yC._preload, CC._node.volume = IC * gC.volume(), CC._node.load());
      return CC;
    },
    reset: function () {
      var CC = this;
      var yC = CC._parent;
      CC._muted = yC._muted;
      CC._loop = yC._loop;
      CC._volume = yC._volume;
      CC._rate = yC._rate;
      CC._seek = 0;
      CC._rateSeek = 0;
      CC.wL = !0;
      CC._ended = !0;
      CC._sprite = "__default";
      CC._id = ++gC._counter;
      return CC;
    },
    _errorListener: function () {
      var CC = this;
      CC._parent._emit("loaderror", CC._id, CC._node.error ? CC._node.error.code : 0);
      CC._node.removeEventListener("error", CC._errorFn, !1);
    },
    _loadListener: function () {
      var CC = this;
      var yC = CC._parent;
      yC._duration = Math.ceil(10 * CC._node.duration) / 10;
      0 === Object.keys(yC._sprite).length && (yC._sprite = {
        __default: [0, 1e3 * yC._duration]
      });
      "loaded" !== yC._state && (yC._state = "loaded", yC._emit("load"), yC._loadQueue());
      CC._node.removeEventListener(gC._canPlayEvent, CC._loadFn, !1);
    },
    _endListener: function () {
      var CC = this;
      var yC = CC._parent;
      yC._duration === 1 / 0 && (yC._duration = Math.ceil(10 * CC._node.duration) / 10, yC._sprite.__default[1] === 1 / 0 && (yC._sprite.__default[1] = 1e3 * yC._duration), yC._ended(CC));
      CC._node.removeEventListener("ended", CC._endFn, !1);
    }
  };
  var XC = {};
  function iy(CC) {
    var yC = CC._src;
    if (XC[yC]) {
      CC._duration = XC[yC].duration;
      return void bC(CC);
    }
    if (/^data:[^;]+;base64,/.test(yC)) {
      for (var IC = atob(yC.split(",")[1]), fC = new Uint8Array(IC.length), ky = 0; ky < IC.length; ++ky) {
        fC[ky] = IC.charCodeAt(ky);
      }
      YC(fC.buffer, CC);
    } else {
      var gC = new XMLHttpRequest();
      gC.open(CC._xhr.method, yC, !0);
      gC.withCredentials = CC._xhr.withCredentials;
      gC.responseType = "arraybuffer";
      CC._xhr.headers && Object.keys(CC._xhr.headers).forEach(function (yC) {
        gC.setRequestHeader(yC, CC._xhr.headers[yC]);
      });
      gC.onload = function () {
        var yC = (gC.status + "")[0];
        "0" === yC || "2" === yC || "3" === yC ? YC(gC.response, CC) : CC._emit("loaderror", null, "Failed loading audio file with status: " + gC.status + ".");
      };
      gC.onerror = function () {
        CC._webAudio && (CC._html5 = !0, CC._webAudio = !1, CC._sounds = [], delete XC[yC], CC.load());
      };
      LC(gC);
    }
  }
  function LC(CC) {
    try {
      CC.send();
    } catch (yC) {
      CC.onerror();
    }
  }
  function YC(CC, yC) {
    function IC() {
      yC._emit("loaderror", null, "Decoding audio data failed.");
    }
    function fC(CC) {
      CC && yC._sounds.length > 0 ? (XC[yC._src] = CC, bC(yC, CC)) : IC();
    }
    "undefined" !== typeof Promise && 1 === gC.ctx.decodeAudioData.length ? gC.ctx.decodeAudioData(CC).then(fC).catch(IC) : gC.ctx.decodeAudioData(CC, fC, IC);
  }
  function bC(CC, yC) {
    yC && !CC._duration && (CC._duration = yC.duration);
    0 === Object.keys(CC._sprite).length && (CC._sprite = {
      __default: [0, 1e3 * CC._duration]
    });
    "loaded" !== CC._state && (CC._state = "loaded", CC._emit("load"), CC._loadQueue());
  }
  function rC() {
    if (gC.usingWebAudio) {
      try {
        "undefined" !== typeof AudioContext ? gC.ctx = new AudioContext() : "undefined" !== typeof webkitAudioContext ? gC.ctx = new webkitAudioContext() : gC.usingWebAudio = !1;
      } catch (ky) {
        gC.usingWebAudio = !1;
      }
      gC.ctx || (gC.usingWebAudio = !1);
      var CC = /iP(hone|od|ad)/.test(gC._navigator && gC._navigator.platform);
      var yC = gC._navigator && gC._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
      var IC = yC ? parseInt(yC[1], 10) : null;
      if (CC && IC && IC < 9) {
        var fC = /safari/.test(gC._navigator && gC._navigator.userAgent.toLowerCase());
        gC._navigator && !fC && (gC.usingWebAudio = !1);
      }
      gC.usingWebAudio && (gC.masterGain = "undefined" === typeof gC.ctx.createGain ? gC.ctx.createGainNode() : gC.ctx.createGain(), gC.masterGain.gain.setValueAtTime(gC._muted ? 0 : gC._volume, gC.ctx.currentTime), gC.masterGain.connect(gC.ctx.destination));
      gC._setup();
    }
  }
  void 0 === (fC = function () {
    return {
      Howler: gC,
      Howl: AC
    };
  }.apply(exports, [])) || (module.exports = fC);
  exports.Howler = gC;
  exports.Howl = AC;
  "undefined" !== typeof require.g ? (require.g.HowlerGlobal = ky, require.g.Howler = gC, require.g.Howl = AC, require.g.Sound = my) : "undefined" !== typeof window && (window.HowlerGlobal = ky, window.Howler = gC, window.Howl = AC, window.Sound = my);
}();
(function () {
  var CC;
  HowlerGlobal.prototype._pos = [0, 0, 0];
  HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0];
  HowlerGlobal.prototype.stereo = function (CC) {
    var yC = this;
    if (!yC.ctx || !yC.ctx.listener) {
      return yC;
    }
    for (var IC = yC._howls.length - 1; IC >= 0; IC--) {
      yC._howls[IC].stereo(CC);
    }
    return yC;
  };
  HowlerGlobal.prototype.pos = function (CC, yC, IC) {
    var fC = this;
    return fC.ctx && fC.ctx.listener ? (yC = "number" !== typeof yC ? fC._pos[1] : yC, IC = "number" !== typeof IC ? fC._pos[2] : IC, "number" !== typeof CC ? fC._pos : (fC._pos = [CC, yC, IC], "undefined" !== typeof fC.ctx.listener.positionX ? (fC.ctx.listener.positionX.setTargetAtTime(fC._pos[0], Howler.ctx.currentTime, .1), fC.ctx.listener.positionY.setTargetAtTime(fC._pos[1], Howler.ctx.currentTime, .1), fC.ctx.listener.positionZ.setTargetAtTime(fC._pos[2], Howler.ctx.currentTime, .1)) : fC.ctx.listener.setPosition(fC._pos[0], fC._pos[1], fC._pos[2]), fC)) : fC;
  };
  HowlerGlobal.prototype.orientation = function (CC, yC, IC, fC, ky, gC) {
    var AC = this;
    if (!AC.ctx || !AC.ctx.listener) {
      return AC;
    }
    var my = AC._orientation;
    yC = "number" !== typeof yC ? my[1] : yC;
    IC = "number" !== typeof IC ? my[2] : IC;
    fC = "number" !== typeof fC ? my[3] : fC;
    ky = "number" !== typeof ky ? my[4] : ky;
    gC = "number" !== typeof gC ? my[5] : gC;
    return "number" !== typeof CC ? my : (AC._orientation = [CC, yC, IC, fC, ky, gC], "undefined" !== typeof AC.ctx.listener.forwardX ? (AC.ctx.listener.forwardX.setTargetAtTime(CC, Howler.ctx.currentTime, .1), AC.ctx.listener.forwardY.setTargetAtTime(yC, Howler.ctx.currentTime, .1), AC.ctx.listener.forwardZ.setTargetAtTime(IC, Howler.ctx.currentTime, .1), AC.ctx.listener.upX.setTargetAtTime(fC, Howler.ctx.currentTime, .1), AC.ctx.listener.upY.setTargetAtTime(ky, Howler.ctx.currentTime, .1), AC.ctx.listener.upZ.setTargetAtTime(gC, Howler.ctx.currentTime, .1)) : AC.ctx.listener.setOrientation(CC, yC, IC, fC, ky, gC), AC);
  };
  Howl.prototype.init = (CC = Howl.prototype.init, function (yC) {
    var IC = this;
    IC._orientation = yC.orientation || [1, 0, 0];
    IC._stereo = yC.stereo || null;
    IC._pos = yC.pos || null;
    IC._pannerAttr = {
      coneInnerAngle: "undefined" !== typeof yC.coneInnerAngle ? yC.coneInnerAngle : 360,
      coneOuterAngle: "undefined" !== typeof yC.coneOuterAngle ? yC.coneOuterAngle : 360,
      coneOuterGain: "undefined" !== typeof yC.coneOuterGain ? yC.coneOuterGain : 0,
      distanceModel: "undefined" !== typeof yC.distanceModel ? yC.distanceModel : "inverse",
      maxDistance: "undefined" !== typeof yC.maxDistance ? yC.maxDistance : 1e4,
      panningModel: "undefined" !== typeof yC.panningModel ? yC.panningModel : "HRTF",
      refDistance: "undefined" !== typeof yC.refDistance ? yC.refDistance : 1,
      rolloffFactor: "undefined" !== typeof yC.rolloffFactor ? yC.rolloffFactor : 1
    };
    IC._onstereo = yC.onstereo ? [{
      Ky: yC.onstereo
    }] : [];
    IC._onpos = yC.onpos ? [{
      Ky: yC.onpos
    }] : [];
    IC._onorientation = yC.onorientation ? [{
      Ky: yC.onorientation
    }] : [];
    return CC.call(this, yC);
  });
  Howl.prototype.stereo = function (CC, IC) {
    var fC = this;
    if (!fC._webAudio) {
      return fC;
    }
    if ("loaded" !== fC._state) {
      fC._queue.push({
        event: "stereo",
        action: function () {
          fC.stereo(CC, IC);
        }
      });
      return fC;
    }
    var ky = "undefined" === typeof Howler.ctx.createStereoPanner ? "spatial" : "stereo";
    if ("undefined" === typeof IC) {
      if ("number" !== typeof CC) {
        return fC._stereo;
      }
      fC._stereo = CC;
      fC._pos = [CC, 0, 0];
    }
    for (var gC = fC._getSoundIds(IC), AC = 0; AC < gC.length; AC++) {
      var my = fC._soundById(gC[AC]);
      if (my) {
        if ("number" !== typeof CC) {
          return my._stereo;
        }
        my._stereo = CC;
        my._pos = [CC, 0, 0];
        my._node && (my._pannerAttr.panningModel = "equalpower", my._panner && my._panner.pan || yC(my, ky), "spatial" === ky ? "undefined" !== typeof my._panner.positionX ? (my._panner.positionX.setValueAtTime(CC, Howler.ctx.currentTime), my._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime), my._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime)) : my._panner.setPosition(CC, 0, 0) : my._panner.pan.setValueAtTime(CC, Howler.ctx.currentTime));
        fC._emit("stereo", my._id);
      }
    }
    return fC;
  };
  Howl.prototype.pos = function (CC, IC, fC, ky) {
    var gC = this;
    if (!gC._webAudio) {
      return gC;
    }
    if ("loaded" !== gC._state) {
      gC._queue.push({
        event: "pos",
        action: function () {
          gC.pos(CC, IC, fC, ky);
        }
      });
      return gC;
    }
    IC = "number" !== typeof IC ? 0 : IC;
    fC = "number" !== typeof fC ? -.5 : fC;
    if ("undefined" === typeof ky) {
      if ("number" !== typeof CC) {
        return gC._pos;
      }
      gC._pos = [CC, IC, fC];
    }
    for (var AC = gC._getSoundIds(ky), my = 0; my < AC.length; my++) {
      var XC = gC._soundById(AC[my]);
      if (XC) {
        if ("number" !== typeof CC) {
          return XC._pos;
        }
        XC._pos = [CC, IC, fC];
        XC._node && (XC._panner && !XC._panner.pan || yC(XC, "spatial"), "undefined" !== typeof XC._panner.positionX ? (XC._panner.positionX.setValueAtTime(CC, Howler.ctx.currentTime), XC._panner.positionY.setValueAtTime(IC, Howler.ctx.currentTime), XC._panner.positionZ.setValueAtTime(fC, Howler.ctx.currentTime)) : XC._panner.setPosition(CC, IC, fC));
        gC._emit("pos", XC._id);
      }
    }
    return gC;
  };
  Howl.prototype.orientation = function (CC, IC, fC, ky) {
    var gC = this;
    if (!gC._webAudio) {
      return gC;
    }
    if ("loaded" !== gC._state) {
      gC._queue.push({
        event: "orientation",
        action: function () {
          gC.orientation(CC, IC, fC, ky);
        }
      });
      return gC;
    }
    IC = "number" !== typeof IC ? gC._orientation[1] : IC;
    fC = "number" !== typeof fC ? gC._orientation[2] : fC;
    if ("undefined" === typeof ky) {
      if ("number" !== typeof CC) {
        return gC._orientation;
      }
      gC._orientation = [CC, IC, fC];
    }
    for (var AC = gC._getSoundIds(ky), my = 0; my < AC.length; my++) {
      var XC = gC._soundById(AC[my]);
      if (XC) {
        if ("number" !== typeof CC) {
          return XC._orientation;
        }
        XC._orientation = [CC, IC, fC];
        XC._node && (XC._panner || (XC._pos || (XC._pos = gC._pos || [0, 0, -.5]), yC(XC, "spatial")), "undefined" !== typeof XC._panner.orientationX ? (XC._panner.orientationX.setValueAtTime(CC, Howler.ctx.currentTime), XC._panner.orientationY.setValueAtTime(IC, Howler.ctx.currentTime), XC._panner.orientationZ.setValueAtTime(fC, Howler.ctx.currentTime)) : XC._panner.setOrientation(CC, IC, fC));
        gC._emit("orientation", XC._id);
      }
    }
    return gC;
  };
  Howl.prototype.pannerAttr = function () {
    var CC;
    var IC;
    var fC;
    var ky = this;
    var gC = arguments;
    if (!ky._webAudio) {
      return ky;
    }
    if (0 === gC.length) {
      return ky._pannerAttr;
    }
    if (1 === gC.length) {
      if ("object" !== typeof gC[0]) {
        return (fC = ky._soundById(parseInt(gC[0], 10))) ? fC._pannerAttr : ky._pannerAttr;
      }
      CC = gC[0];
      "undefined" === typeof IC && (CC.pannerAttr || (CC.pannerAttr = {
        coneInnerAngle: CC.coneInnerAngle,
        coneOuterAngle: CC.coneOuterAngle,
        coneOuterGain: CC.coneOuterGain,
        distanceModel: CC.distanceModel,
        maxDistance: CC.maxDistance,
        refDistance: CC.refDistance,
        rolloffFactor: CC.rolloffFactor,
        panningModel: CC.panningModel
      }), ky._pannerAttr = {
        coneInnerAngle: "undefined" !== typeof CC.pannerAttr.coneInnerAngle ? CC.pannerAttr.coneInnerAngle : ky._coneInnerAngle,
        coneOuterAngle: "undefined" !== typeof CC.pannerAttr.coneOuterAngle ? CC.pannerAttr.coneOuterAngle : ky._coneOuterAngle,
        coneOuterGain: "undefined" !== typeof CC.pannerAttr.coneOuterGain ? CC.pannerAttr.coneOuterGain : ky._coneOuterGain,
        distanceModel: "undefined" !== typeof CC.pannerAttr.distanceModel ? CC.pannerAttr.distanceModel : ky._distanceModel,
        maxDistance: "undefined" !== typeof CC.pannerAttr.maxDistance ? CC.pannerAttr.maxDistance : ky._maxDistance,
        refDistance: "undefined" !== typeof CC.pannerAttr.refDistance ? CC.pannerAttr.refDistance : ky._refDistance,
        rolloffFactor: "undefined" !== typeof CC.pannerAttr.rolloffFactor ? CC.pannerAttr.rolloffFactor : ky._rolloffFactor,
        panningModel: "undefined" !== typeof CC.pannerAttr.panningModel ? CC.pannerAttr.panningModel : ky._panningModel
      });
    } else {
      2 === gC.length && (CC = gC[0], IC = parseInt(gC[1], 10));
    }
    for (var AC = ky._getSoundIds(IC), my = 0; my < AC.length; my++) {
      if (fC = ky._soundById(AC[my])) {
        var XC = fC._pannerAttr;
        XC = {
          coneInnerAngle: "undefined" !== typeof CC.coneInnerAngle ? CC.coneInnerAngle : XC.coneInnerAngle,
          coneOuterAngle: "undefined" !== typeof CC.coneOuterAngle ? CC.coneOuterAngle : XC.coneOuterAngle,
          coneOuterGain: "undefined" !== typeof CC.coneOuterGain ? CC.coneOuterGain : XC.coneOuterGain,
          distanceModel: "undefined" !== typeof CC.distanceModel ? CC.distanceModel : XC.distanceModel,
          maxDistance: "undefined" !== typeof CC.maxDistance ? CC.maxDistance : XC.maxDistance,
          refDistance: "undefined" !== typeof CC.refDistance ? CC.refDistance : XC.refDistance,
          rolloffFactor: "undefined" !== typeof CC.rolloffFactor ? CC.rolloffFactor : XC.rolloffFactor,
          panningModel: "undefined" !== typeof CC.panningModel ? CC.panningModel : XC.panningModel
        };
        var iy = fC._panner;
        iy ? (iy.coneInnerAngle = XC.coneInnerAngle, iy.coneOuterAngle = XC.coneOuterAngle, iy.coneOuterGain = XC.coneOuterGain, iy.distanceModel = XC.distanceModel, iy.maxDistance = XC.maxDistance, iy.refDistance = XC.refDistance, iy.rolloffFactor = XC.rolloffFactor, iy.panningModel = XC.panningModel) : (fC._pos || (fC._pos = ky._pos || [0, 0, -.5]), yC(fC, "spatial"));
      }
    }
    return ky;
  };
  Sound.prototype.init = function (CC) {
    return function () {
      var yC = this;
      var IC = yC._parent;
      yC._orientation = IC._orientation;
      yC._stereo = IC._stereo;
      yC._pos = IC._pos;
      yC._pannerAttr = IC._pannerAttr;
      CC.call(this);
      yC._stereo ? IC.stereo(yC._stereo) : yC._pos && IC.pos(yC._pos[0], yC._pos[1], yC._pos[2], yC._id);
    };
  }(Sound.prototype.init);
  Sound.prototype.reset = function (CC) {
    return function () {
      var yC = this;
      var IC = yC._parent;
      yC._orientation = IC._orientation;
      yC._stereo = IC._stereo;
      yC._pos = IC._pos;
      yC._pannerAttr = IC._pannerAttr;
      yC._stereo ? IC.stereo(yC._stereo) : yC._pos ? IC.pos(yC._pos[0], yC._pos[1], yC._pos[2], yC._id) : yC._panner && (yC._panner.disconnect(0), yC._panner = void 0, IC._refreshBuffer(yC));
      return CC.call(this);
    };
  }(Sound.prototype.reset);
  function yC(CC, yC) {
    "spatial" === (yC = yC || "spatial") ? (CC._panner = Howler.ctx.createPanner(), CC._panner.coneInnerAngle = CC._pannerAttr.coneInnerAngle, CC._panner.coneOuterAngle = CC._pannerAttr.coneOuterAngle, CC._panner.coneOuterGain = CC._pannerAttr.coneOuterGain, CC._panner.distanceModel = CC._pannerAttr.distanceModel, CC._panner.maxDistance = CC._pannerAttr.maxDistance, CC._panner.refDistance = CC._pannerAttr.refDistance, CC._panner.rolloffFactor = CC._pannerAttr.rolloffFactor, CC._panner.panningModel = CC._pannerAttr.panningModel, "undefined" !== typeof CC._panner.positionX ? (CC._panner.positionX.setValueAtTime(CC._pos[0], Howler.ctx.currentTime), CC._panner.positionY.setValueAtTime(CC._pos[1], Howler.ctx.currentTime), CC._panner.positionZ.setValueAtTime(CC._pos[2], Howler.ctx.currentTime)) : CC._panner.setPosition(CC._pos[0], CC._pos[1], CC._pos[2]), "undefined" !== typeof CC._panner.orientationX ? (CC._panner.orientationX.setValueAtTime(CC._orientation[0], Howler.ctx.currentTime), CC._panner.orientationY.setValueAtTime(CC._orientation[1], Howler.ctx.currentTime), CC._panner.orientationZ.setValueAtTime(CC._orientation[2], Howler.ctx.currentTime)) : CC._panner.setOrientation(CC._orientation[0], CC._orientation[1], CC._orientation[2])) : (CC._panner = Howler.ctx.createStereoPanner(), CC._panner.pan.setValueAtTime(CC._stereo, Howler.ctx.currentTime));
    CC._panner.connect(CC._node);
    CC.wL || CC._parent.pause(CC._id, !0).play(CC._id, !0);
  }
})();