exports.d = void 0;
var fC;
var ky = function (CC) {
  if (CC && CC.__esModule) {
    return CC;
  }
  if (null === CC || "object" !== my(CC) && "function" !== typeof CC) {
    return {
      default: CC
    };
  }
  var yC = AC();
  if (yC && yC.has(CC)) {
    return yC.get(CC);
  }
  var IC = {};
  var fC = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var ky in CC) {
    if (Object.prototype.hasOwnProperty.call(CC, ky)) {
      var gC = fC ? Object.getOwnPropertyDescriptor(CC, ky) : null;
      gC && (gC.get || gC.set) ? Object.defineProperty(IC, ky, gC) : IC[ky] = CC[ky];
    }
  }
  IC.default = CC;
  yC && yC.set(CC, IC);
  return IC;
}(require("./49.js"));
var gC = (fC = require("./554.js")) && fC.__esModule ? fC : {
  default: fC
};
function AC() {
  if ("function" !== typeof WeakMap) {
    return null;
  }
  var CC = new WeakMap();
  AC = function () {
    return CC;
  };
  return CC;
}
function my(CC) {
  my = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (CC) {
    return typeof CC;
  } : function (CC) {
    return CC && "function" === typeof Symbol && CC.constructor === Symbol && CC !== Symbol.prototype ? "symbol" : typeof CC;
  };
  return my(CC);
}
function XC(CC, yC, IC) {
  yC in CC ? Object.defineProperty(CC, yC, {
    value: IC,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : CC[yC] = IC;
  return CC;
}
function iy(CC, yC) {
  for (var IC = 0; IC < yC.length; IC++) {
    var fC = yC[IC];
    fC.enumerable = fC.enumerable || !1;
    fC.configurable = !0;
    "value" in fC && (fC.writable = !0);
    Object.defineProperty(CC, fC.key, fC);
  }
}
function LC(CC) {
  LC = Object.setPrototypeOf ? Object.getPrototypeOf : function (CC) {
    return CC.__proto__ || Object.getPrototypeOf(CC);
  };
  return LC(CC);
}
function YC(CC) {
  if (void 0 === CC) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return CC;
}
function bC(CC, yC) {
  bC = Object.setPrototypeOf || function (CC, yC) {
    CC.__proto__ = yC;
    return CC;
  };
  return bC(CC, yC);
}
var rC = "Select...";
var GC = function (CC) {
  function yC(CC) {
    var IC;
    (function (CC, yC) {
      if (!(CC instanceof yC)) {
        throw new TypeError("Cannot call a class as a function");
      }
    })(this, yC);
    (IC = function (CC, yC) {
      return !yC || "object" !== my(yC) && "function" !== typeof yC ? YC(CC) : yC;
    }(this, LC(yC).call(this, CC))).state = {
      selected: IC.parseValue(CC.value, CC.options) || {
        label: "undefined" === typeof CC.placeholder ? rC : CC.placeholder,
        value: ""
      },
      isOpen: !1
    };
    IC.dropdownRef = (0, ky.createRef)();
    IC.mounted = !0;
    IC.handleDocumentClick = IC.handleDocumentClick.bind(YC(IC));
    IC.fireChangeEvent = IC.fireChangeEvent.bind(YC(IC));
    return IC;
  }
  var IC;
  var fC;
  var AC;
  (function (CC, yC) {
    if ("function" !== typeof yC && null !== yC) {
      throw new TypeError("Super expression must either be null or a function");
    }
    CC.prototype = Object.create(yC && yC.prototype, {
      constructor: {
        value: CC,
        writable: !0,
        configurable: !0
      }
    });
    yC && bC(CC, yC);
  })(yC, CC);
  IC = yC;
  (fC = [{
    key: "componentDidUpdate",
    value: function (CC) {
      if (this.props.value !== CC.value) {
        if (this.props.value) {
          var yC = this.parseValue(this.props.value, this.props.options);
          yC !== this.state.selected && this.setState({
            selected: yC
          });
        } else {
          this.setState({
            selected: {
              label: "undefined" === typeof this.props.placeholder ? rC : this.props.placeholder,
              value: ""
            }
          });
        }
      }
    }
  }, {
    key: "componentDidMount",
    value: function () {
      document.addEventListener("click", this.handleDocumentClick, !1);
      document.addEventListener("touchend", this.handleDocumentClick, !1);
    }
  }, {
    key: "componentWillUnmount",
    value: function () {
      this.mounted = !1;
      document.removeEventListener("click", this.handleDocumentClick, !1);
      document.removeEventListener("touchend", this.handleDocumentClick, !1);
    }
  }, {
    key: "handleMouseDown",
    value: function (CC) {
      this.props.onFocus && "function" === typeof this.props.onFocus && this.props.onFocus(this.state.isOpen);
      "mousedown" === CC.type && 0 !== CC.button || (CC.stopPropagation(), CC.preventDefault(), this.props.disabled || this.setState({
        isOpen: !this.state.isOpen
      }));
    }
  }, {
    key: "parseValue",
    value: function (CC, yC) {
      var IC;
      if ("string" === typeof CC) {
        for (var fC = 0, ky = yC.length; fC < ky; fC++) {
          if ("group" === yC[fC].type) {
            var gC = yC[fC].items.filter(function (yC) {
              return yC.value === CC;
            });
            gC.length && (IC = gC[0]);
          } else {
            "undefined" !== typeof yC[fC].value && yC[fC].value === CC && (IC = yC[fC]);
          }
        }
      }
      return IC || CC;
    }
  }, {
    key: "setValue",
    value: function (CC, yC) {
      var IC = {
        selected: {
          value: CC,
          label: yC
        },
        isOpen: !1
      };
      this.fireChangeEvent(IC);
      this.setState(IC);
    }
  }, {
    key: "fireChangeEvent",
    value: function (CC) {
      CC.selected !== this.state.selected && this.props.onChange && this.props.onChange(CC.selected);
    }
  }, {
    key: "renderOption",
    value: function (CC) {
      var yC;
      var IC = CC.value;
      "undefined" === typeof IC && (IC = CC.label || CC);
      var fC = CC.label || CC.value || CC;
      var AC = IC === this.state.selected.value || IC === this.state.selected;
      XC(yC = {}, "".concat(this.props.baseClassName, "-option"), !0);
      XC(yC, CC.className, !!CC.className);
      XC(yC, "is-selected", AC);
      var my = yC;
      var iy = (0, gC.default)(my);
      return ky.default.createElement("div", {
        key: IC,
        className: iy,
        onMouseDown: this.setValue.bind(this, IC, fC),
        onClick: this.setValue.bind(this, IC, fC),
        role: "option",
        "aria-selected": AC ? "true" : "false"
      }, fC);
    }
  }, {
    key: "buildMenu",
    value: function () {
      var CC = this;
      var yC = this.props;
      var IC = yC.options;
      var fC = yC.baseClassName;
      var gC = IC.map(function (yC) {
        if ("group" === yC.type) {
          var IC = ky.default.createElement("div", {
            className: "".concat(fC, "-title")
          }, yC.name);
          var gC = yC.items.map(function (yC) {
            return CC.renderOption(yC);
          });
          return ky.default.createElement("div", {
            className: "".concat(fC, "-group"),
            key: yC.name,
            role: "listbox",
            tabIndex: "-1"
          }, IC, gC);
        }
        return CC.renderOption(yC);
      });
      return gC.length ? gC : ky.default.createElement("div", {
        className: "".concat(fC, "-noresults")
      }, "No options found");
    }
  }, {
    key: "handleDocumentClick",
    value: function (CC) {
      this.mounted && (this.dropdownRef.current.contains(CC.target) || this.state.isOpen && this.setState({
        isOpen: !1
      }));
    }
  }, {
    key: "isValueSelected",
    value: function () {
      return "string" === typeof this.state.selected || "" !== this.state.selected.value;
    }
  }, {
    key: "render",
    value: function () {
      var CC;
      var yC;
      var IC;
      var fC;
      var AC;
      var my = this.props;
      var iy = my.baseClassName;
      var LC = my.controlClassName;
      var YC = my.placeholderClassName;
      var bC = my.menuClassName;
      var rC = my.arrowClassName;
      var GC = my.arrowClosed;
      var eC = my.arrowOpen;
      var OC = my.className;
      var SC = this.props.disabled ? "Dropdown-disabled" : "";
      var TC = "string" === typeof this.state.selected ? this.state.selected : this.state.selected.label;
      var NC = (0, gC.default)((XC(CC = {}, "".concat(iy, "-root"), !0), XC(CC, OC, !!OC), XC(CC, "is-open", this.state.isOpen), CC));
      var sC = (0, gC.default)((XC(yC = {}, "".concat(iy, "-control"), !0), XC(yC, LC, !!LC), XC(yC, SC, !!SC), yC));
      var jy = (0, gC.default)((XC(IC = {}, "".concat(iy, "-placeholder"), !0), XC(IC, YC, !!YC), XC(IC, "is-selected", this.isValueSelected()), IC));
      var qC = (0, gC.default)((XC(fC = {}, "".concat(iy, "-menu"), !0), XC(fC, bC, !!bC), fC));
      var KC = (0, gC.default)((XC(AC = {}, "".concat(iy, "-arrow"), !0), XC(AC, rC, !!rC), AC));
      var pC = ky.default.createElement("div", {
        className: jy
      }, TC);
      var wC = this.state.isOpen ? ky.default.createElement("div", {
        className: qC,
        "aria-expanded": "true"
      }, this.buildMenu()) : null;
      return ky.default.createElement("div", {
        ref: this.dropdownRef,
        className: NC
      }, ky.default.createElement("div", {
        className: sC,
        onMouseDown: this.handleMouseDown.bind(this),
        onTouchEnd: this.handleMouseDown.bind(this),
        "aria-haspopup": "listbox"
      }, pC, ky.default.createElement("div", {
        className: "".concat(iy, "-arrow-wrapper")
      }, eC && GC ? this.state.isOpen ? eC : GC : ky.default.createElement("span", {
        className: KC
      }))), wC);
    }
  }]) && iy(IC.prototype, fC);
  AC && iy(IC, AC);
  return yC;
}(ky.Component);
GC.defaultProps = {
  baseClassName: "Dropdown"
};
var eC = GC;
exports.d = eC;