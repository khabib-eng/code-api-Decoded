function f(p, p2) {
  f3(p, p2);
  f2(p);
}
function f2(p3) {
  if ((!p3._writableState || !!p3._writableState.emitClose) && (!p3._readableState || !!p3._readableState.emitClose)) {
    p3.emit("close");
  }
}
function f3(p4, p5) {
  p4.emit("error", p5);
}
module.exports = {
  destroy: function (p6, p7) {
    var vThis = this;
    var v = this._readableState && this._readableState.destroyed;
    var v2 = this._writableState && this._writableState.destroyed;
    if (v || v2) {
      if (p7) {
        p7(p6);
      } else if (p6) {
        if (this._writableState) {
          if (!this._writableState.errorEmitted) {
            this._writableState.errorEmitted = true;
            process.nextTick(f3, this, p6);
          }
        } else {
          process.nextTick(f3, this, p6);
        }
      }
      return this;
    } else {
      if (this._readableState) {
        this._readableState.destroyed = true;
      }
      if (this._writableState) {
        this._writableState.destroyed = true;
      }
      this._destroy(p6 || null, function (p8) {
        if (!p7 && p8) {
          if (vThis._writableState) {
            if (vThis._writableState.errorEmitted) {
              process.nextTick(f2, vThis);
            } else {
              vThis._writableState.errorEmitted = true;
              process.nextTick(f, vThis, p8);
            }
          } else {
            process.nextTick(f, vThis, p8);
          }
        } else if (p7) {
          process.nextTick(f2, vThis);
          p7(p8);
        } else {
          process.nextTick(f2, vThis);
        }
      });
      return this;
    }
  },
  undestroy: function () {
    if (this._readableState) {
      this._readableState.destroyed = false;
      this._readableState.reading = false;
      this._readableState.ended = false;
      this._readableState.endEmitted = false;
    }
    if (this._writableState) {
      this._writableState.destroyed = false;
      this._writableState.ended = false;
      this._writableState.ending = false;
      this._writableState.finalCalled = false;
      this._writableState.prefinished = false;
      this._writableState.finished = false;
      this._writableState.errorEmitted = false;
    }
  },
  errorOrDestroy: function (p9, p10) {
    var v3 = p9._readableState;
    var v4 = p9._writableState;
    if (v3 && v3.autoDestroy || v4 && v4.autoDestroy) {
      p9.destroy(p10);
    } else {
      p9.emit("error", p10);
    }
  }
};