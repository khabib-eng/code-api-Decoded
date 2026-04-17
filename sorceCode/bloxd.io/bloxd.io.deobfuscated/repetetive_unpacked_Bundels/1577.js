function fC(CC) {
  fC = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (CC) {
    return typeof CC;
  } : function (CC) {
    return CC && "function" == typeof Symbol && CC.constructor === Symbol && CC !== Symbol.prototype ? "symbol" : typeof CC;
  };
  return fC(CC);
}
Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.default = void 0;
var ky = YC(require("./554.js"));
var gC = function (CC, yC) {
  if (!yC && CC && CC.__esModule) {
    return CC;
  }
  if (null === CC || "object" !== fC(CC) && "function" !== typeof CC) {
    return {
      default: CC
    };
  }
  var IC = LC(yC);
  if (IC && IC.has(CC)) {
    return IC.get(CC);
  }
  var ky = {};
  var gC = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var AC in CC) {
    if ("default" !== AC && Object.prototype.hasOwnProperty.call(CC, AC)) {
      var my = gC ? Object.getOwnPropertyDescriptor(CC, AC) : null;
      my && (my.get || my.set) ? Object.defineProperty(ky, AC, my) : ky[AC] = CC[AC];
    }
  }
  ky.default = CC;
  IC && IC.set(CC, ky);
  return ky;
}(require("./49.js"));
var AC = YC(require("./1583.js"));
var my = YC(require("./1604.js"));
var XC = require("./1606.js");
var iy = require("./534.js");
function LC(CC) {
  if ("function" !== typeof WeakMap) {
    return null;
  }
  var yC = new WeakMap();
  var IC = new WeakMap();
  return (LC = function (CC) {
    return CC ? IC : yC;
  })(CC);
}
function YC(CC) {
  return CC && CC.__esModule ? CC : {
    default: CC
  };
}
function bC(CC, yC) {
  var IC = "undefined" !== typeof Symbol && CC[Symbol.iterator] || CC["@@iterator"];
  if (!IC) {
    if (Array.isArray(CC) || (IC = function (CC, yC) {
      if (!CC) {
        return;
      }
      if ("string" === typeof CC) {
        return rC(CC, yC);
      }
      var IC = Object.prototype.toString.call(CC).slice(8, -1);
      "Object" === IC && CC.constructor && (IC = CC.constructor.name);
      if ("Map" === IC || "Set" === IC) {
        return Array.from(CC);
      }
      if ("Arguments" === IC || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(IC)) {
        return rC(CC, yC);
      }
    }(CC)) || yC && CC && "number" === typeof CC.length) {
      IC && (CC = IC);
      var fC = 0;
      function ky() {}
      return {
        s: ky,
        n: function () {
          return fC >= CC.length ? {
            done: !0
          } : {
            done: !1,
            value: CC[fC++]
          };
        },
        e: function (CC) {
          throw CC;
        },
        f: ky
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var gC;
  var AC = !0;
  var my = !1;
  return {
    s: function () {
      IC = IC.call(CC);
    },
    n: function () {
      var CC = IC.next();
      AC = CC.done;
      return CC;
    },
    e: function (CC) {
      my = !0;
      gC = CC;
    },
    f: function () {
      try {
        AC || null == IC.return || IC.return();
      } finally {
        if (my) {
          throw gC;
        }
      }
    }
  };
}
function rC(CC, yC) {
  (null == yC || yC > CC.length) && (yC = CC.length);
  for (var IC = 0, fC = new Array(yC); IC < yC; IC++) {
    fC[IC] = CC[IC];
  }
  return fC;
}
function GC(CC, yC) {
  for (var IC = 0; IC < yC.length; IC++) {
    var fC = yC[IC];
    fC.enumerable = fC.enumerable || !1;
    fC.configurable = !0;
    "value" in fC && (fC.writable = !0);
    Object.defineProperty(CC, fC.key, fC);
  }
}
function eC(CC, yC) {
  eC = Object.setPrototypeOf || function (CC, yC) {
    CC.__proto__ = yC;
    return CC;
  };
  return eC(CC, yC);
}
function OC(CC) {
  var yC = function () {
    if ("undefined" === typeof Reflect || !Reflect.construct) {
      return !1;
    }
    if (Reflect.construct.sham) {
      return !1;
    }
    if ("function" === typeof Proxy) {
      return !0;
    }
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return !0;
    } catch (CC) {
      return !1;
    }
  }();
  return function () {
    var IC;
    var ky = TC(CC);
    if (yC) {
      var gC = TC(this).constructor;
      IC = Reflect.construct(ky, arguments, gC);
    } else {
      IC = ky.apply(this, arguments);
    }
    return function (CC, yC) {
      if (yC && ("object" === fC(yC) || "function" === typeof yC)) {
        return yC;
      }
      if (void 0 !== yC) {
        throw new TypeError("Derived constructors may only return object or undefined");
      }
      return SC(CC);
    }(this, IC);
  };
}
function SC(CC) {
  if (void 0 === CC) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return CC;
}
function TC(CC) {
  TC = Object.setPrototypeOf ? Object.getPrototypeOf : function (CC) {
    return CC.__proto__ || Object.getPrototypeOf(CC);
  };
  return TC(CC);
}
function NC(CC, yC, IC) {
  yC in CC ? Object.defineProperty(CC, yC, {
    value: IC,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : CC[yC] = IC;
  return CC;
}
var sC = {
  orientation: {
    horizontal: {
      dimension: "width",
      direction: "left",
      reverseDirection: "right",
      coordinate: "x"
    },
    vertical: {
      dimension: "height",
      direction: "top",
      reverseDirection: "bottom",
      coordinate: "y"
    }
  }
};
var jy = function (CC) {
  !function (CC, yC) {
    if ("function" !== typeof yC && null !== yC) {
      throw new TypeError("Super expression must either be null or a function");
    }
    Object.defineProperty(CC, "prototype", {
      value: Object.create(yC && yC.prototype, {
        constructor: {
          value: CC,
          writable: !0,
          configurable: !0
        }
      }),
      writable: !1
    });
    yC && eC(CC, yC);
  }(AC, CC);
  var yC;
  var IC;
  var fC;
  var gC = OC(AC);
  function AC(CC, yC) {
    var IC;
    (function (CC, yC) {
      if (!(CC instanceof yC)) {
        throw new TypeError("Cannot call a class as a function");
      }
    })(this, AC);
    NC(SC(IC = gC.call(this, CC, yC)), "handleFormat", function (CC) {
      var yC = IC.props.format;
      return yC ? yC(CC) : CC;
    });
    NC(SC(IC), "handleUpdate", function () {
      if (IC.slider) {
        var CC = IC.props.orientation;
        var yC = (0, XC.capitalize)(sC.orientation[CC].dimension);
        var fC = IC.slider["offset".concat(yC)];
        var ky = IC.handle["offset".concat(yC)];
        IC.setState({
          limit: fC - ky,
          grab: ky / 2
        });
      }
    });
    NC(SC(IC), "handleStart", function (CC) {
      var yC = IC.props.onChangeStart;
      document.addEventListener("mousemove", IC.handleDrag);
      document.addEventListener("mouseup", IC.handleEnd);
      IC.setState({
        active: !0
      }, function () {
        yC && yC(CC);
      });
    });
    NC(SC(IC), "handleDrag", function (CC) {
      CC.stopPropagation();
      var yC = IC.props.onChange;
      var fC = CC.target;
      var ky = fC.className;
      var gC = fC.classList;
      var AC = fC.dataset;
      if (yC && "rangeslider__labels" !== ky) {
        var my = IC.position(CC);
        gC && gC.contains("rangeslider__label-item") && AC.value && (my = parseFloat(AC.value));
        yC && yC(my, CC);
      }
    });
    NC(SC(IC), "handleEnd", function (CC) {
      var yC = IC.props.onChangeComplete;
      IC.setState({
        active: !1
      }, function () {
        yC && yC(CC);
      });
      document.removeEventListener("mousemove", IC.handleDrag);
      document.removeEventListener("mouseup", IC.handleEnd);
    });
    NC(SC(IC), "handleKeyDown", function (CC) {
      CC.preventDefault();
      var yC;
      var fC = CC.keyCode;
      var ky = IC.props;
      var gC = ky.value;
      var AC = ky.min;
      var my = ky.max;
      var XC = ky.step;
      var iy = ky.onChange;
      switch (fC) {
        case 38:
        case 39:
          yC = gC + XC > my ? my : gC + XC;
          iy && iy(yC, CC);
          break;
        case 37:
        case 40:
          yC = gC - XC < AC ? AC : gC - XC;
          iy && iy(yC, CC);
      }
    });
    NC(SC(IC), "getPositionFromValue", function (CC) {
      var yC = IC.state.limit;
      var fC = IC.props;
      var ky = fC.min;
      var gC = (CC - ky) / (fC.max - ky);
      return Math.round(gC * yC);
    });
    NC(SC(IC), "getValueFromPosition", function (CC) {
      var yC = IC.state.limit;
      var fC = IC.props;
      var ky = fC.orientation;
      var gC = fC.min;
      var AC = fC.max;
      var my = fC.step;
      var iy = (0, XC.clamp)(CC, 0, yC) / (yC || 1);
      var LC = my * Math.round(iy * (AC - gC) / my);
      var YC = "horizontal" === ky ? LC + gC : AC - LC;
      return (0, XC.clamp)(YC, gC, AC);
    });
    NC(SC(IC), "position", function (CC) {
      var yC = IC.state.grab;
      var fC = IC.props;
      var ky = fC.orientation;
      var gC = fC.reverse;
      var AC = IC.slider;
      var my = sC.orientation[ky].coordinate;
      var iy = gC ? sC.orientation[ky].reverseDirection : sC.orientation[ky].direction;
      var LC = "client".concat((0, XC.capitalize)(my));
      var YC = CC.touches ? CC.touches[0][LC] : CC[LC];
      var bC = AC.getBoundingClientRect()[iy];
      var rC = gC ? bC - YC - yC : YC - bC - yC;
      return IC.getValueFromPosition(rC);
    });
    NC(SC(IC), "coordinates", function (CC) {
      var yC = IC.state;
      var fC = yC.limit;
      var ky = yC.grab;
      var gC = IC.props.orientation;
      var AC = IC.getValueFromPosition(CC);
      var my = IC.getPositionFromValue(AC);
      var XC = "horizontal" === gC ? my + ky : my;
      return {
        fill: "horizontal" === gC ? XC : fC - XC,
        handle: XC,
        label: XC
      };
    });
    NC(SC(IC), "renderLabels", function (CC) {
      return (0, iy.jsx)("ul", {
        ref: function (CC) {
          IC.labels = CC;
        },
        className: (0, ky.default)("rangeslider__labels"),
        children: CC
      });
    });
    IC.state = {
      active: !1,
      limit: 0,
      grab: 0
    };
    return IC;
  }
  yC = AC;
  (IC = [{
    key: "componentDidMount",
    value: function () {
      this.handleUpdate();
      new my.default(this.handleUpdate).observe(this.slider);
    }
  }, {
    key: "render",
    value: function () {
      var CC = this;
      var yC = this.props;
      var IC = yC.value;
      var fC = yC.orientation;
      var gC = yC.className;
      var AC = yC.tooltip;
      var my = yC.reverse;
      var XC = yC.labels;
      var LC = yC.min;
      var YC = yC.max;
      var rC = yC.handleLabel;
      var GC = this.state.active;
      var eC = sC.orientation[fC].dimension;
      var OC = my ? sC.orientation[fC].reverseDirection : sC.orientation[fC].direction;
      var SC = this.getPositionFromValue(IC);
      var TC = this.coordinates(SC);
      var jy = NC({}, eC, "".concat(TC.fill, "px"));
      var qC = NC({}, OC, "".concat(TC.handle, "px"));
      var KC = AC && GC;
      var pC = [];
      var wC = Object.keys(XC);
      if (wC.length > 0) {
        var HC;
        var aC = bC(wC = wC.sort(function (CC, yC) {
          return my ? CC - yC : yC - CC;
        }));
        try {
          for (aC.s(); !(HC = aC.n()).done;) {
            var cC = HC.value;
            var UC = this.getPositionFromValue(cC);
            var EC = this.coordinates(UC);
            var VC = NC({}, OC, "".concat(EC.label, "px"));
            pC.push((0, iy.jsx)("li", {
              className: (0, ky.default)("rangeslider__label-item"),
              "data-value": cC,
              onMouseDown: this.handleDrag,
              onTouchStart: this.handleStart,
              onTouchEnd: this.handleEnd,
              style: VC,
              children: this.props.labels[cC]
            }, cC));
          }
        } catch (WC) {
          aC.e(WC);
        } finally {
          aC.f();
        }
      }
      return (0, iy.jsxs)("div", {
        ref: function (yC) {
          CC.slider = yC;
        },
        className: (0, ky.default)("rangeslider", "rangeslider-".concat(fC), {
          "rangeslider-reverse": my
        }, gC),
        onMouseDown: this.handleDrag,
        onMouseUp: this.handleEnd,
        onTouchStart: this.handleStart,
        onTouchEnd: this.handleEnd,
        "aria-valuemin": LC,
        "aria-valuemax": YC,
        "aria-valuenow": IC,
        "aria-orientation": fC,
        children: [(0, iy.jsx)("div", {
          className: "rangeslider__fill",
          style: jy
        }), (0, iy.jsxs)("div", {
          ref: function (yC) {
            CC.handle = yC;
          },
          className: "rangeslider__handle",
          onMouseDown: this.handleStart,
          onTouchMove: this.handleDrag,
          onTouchEnd: this.handleEnd,
          onKeyDown: this.handleKeyDown,
          style: qC,
          tabIndex: 0,
          children: [KC && (0, iy.jsx)("div", {
            ref: function (yC) {
              CC.tooltip = yC;
            },
            className: "rangeslider__handle-tooltip",
            children: (0, iy.jsx)("span", {
              children: this.handleFormat(IC)
            })
          }), (0, iy.jsx)("div", {
            className: "rangeslider__handle-label",
            children: rC
          })]
        }), XC && this.renderLabels(pC)]
      });
    }
  }]) && GC(yC.prototype, IC);
  fC && GC(yC, fC);
  Object.defineProperty(yC, "prototype", {
    writable: !1
  });
  return AC;
}(gC.Component);
NC(jy, "propTypes", {
  min: AC.default.number,
  max: AC.default.number,
  step: AC.default.number,
  value: AC.default.number,
  orientation: AC.default.string,
  tooltip: AC.default.bool,
  reverse: AC.default.bool,
  labels: AC.default.object,
  handleLabel: AC.default.string,
  format: AC.default.func,
  onChangeStart: AC.default.func,
  onChange: AC.default.func,
  onChangeComplete: AC.default.func
});
NC(jy, "defaultProps", {
  min: 0,
  max: 100,
  step: 1,
  value: 0,
  orientation: "horizontal",
  tooltip: !0,
  reverse: !1,
  labels: {},
  handleLabel: ""
});
var qC = jy;
exports.default = qC;