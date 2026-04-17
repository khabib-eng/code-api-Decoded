function yC(CC, yC) {
  fC(CC, yC);
  IC(CC);
}
function IC(CC) {
  CC._writableState && !CC._writableState.emitClose || CC._readableState && !CC._readableState.emitClose || CC.emit("close");
}
function fC(CC, yC) {
  CC.emit("error", yC);
}
module.exports = {
  destroy: function (CC, ky) {
    var gC = this;
    var AC = this._readableState && this._readableState.destroyed;
    var my = this._writableState && this._writableState.destroyed;
    return AC || my ? (ky ? ky(CC) : CC && (this._writableState ? this._writableState.errorEmitted || (this._writableState.errorEmitted = !0, process.nextTick(fC, this, CC)) : process.nextTick(fC, this, CC)), this) : (this._readableState && (this._readableState.destroyed = !0), this._writableState && (this._writableState.destroyed = !0), this._destroy(CC || null, function (CC) {
      !ky && CC ? gC._writableState ? gC._writableState.errorEmitted ? process.nextTick(IC, gC) : (gC._writableState.errorEmitted = !0, process.nextTick(yC, gC, CC)) : process.nextTick(yC, gC, CC) : ky ? (process.nextTick(IC, gC), ky(CC)) : process.nextTick(IC, gC);
    }), this);
  },
  undestroy: function () {
    this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.endEmitted = !1);
    this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finalCalled = !1, this._writableState.prefinished = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1);
  },
  errorOrDestroy: function (CC, yC) {
    var IC = CC._readableState;
    var fC = CC._writableState;
    IC && IC.autoDestroy || fC && fC.autoDestroy ? CC.destroy(yC) : CC.emit("error", yC);
  }
};