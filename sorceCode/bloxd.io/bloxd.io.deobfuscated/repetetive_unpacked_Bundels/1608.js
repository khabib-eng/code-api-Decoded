var fC = require("./1397.js");
var ky = require("./27.js");
var gC = require("./510.js");
var AC = require("./18.js");
var my = require("./32.js");
function XC(CC, yC) {
  for (var IC = 0; IC < yC.length; IC++) {
    var fC = yC[IC];
    fC.enumerable = fC.enumerable || !1;
    fC.configurable = !0;
    "value" in fC && (fC.writable = !0);
    Object.defineProperty(CC, (0, my.d)(fC.key), fC);
  }
}
var iy = require("./1434.js");
function LC(CC) {
  LC = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (CC) {
    return CC.__proto__ || Object.getPrototypeOf(CC);
  };
  return LC(CC);
}
function YC() {
  try {
    var CC = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (CC) {}
  return (YC = function () {
    return !!CC;
  })();
}
var bC = require("./34.js");
function rC(CC, yC) {
  if (yC && ("object" === (0, bC.e)(yC) || "function" === typeof yC)) {
    return yC;
  }
  if (void 0 !== yC) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return function (CC) {
    if (void 0 === CC) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return CC;
  }(CC);
}
var GC = require("./49.js");
var eC = require("./554.js");
var OC = eC;
var SC = function (CC) {
  !function (CC, yC) {
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
    Object.defineProperty(CC, "prototype", {
      writable: !1
    });
    yC && (0, iy.d)(CC, yC);
  }(eC, CC);
  var yC;
  var IC;
  var my;
  var bC = function (CC) {
    var yC = YC();
    return function () {
      var IC;
      var fC = LC(CC);
      if (yC) {
        var ky = LC(this).constructor;
        IC = Reflect.construct(fC, arguments, ky);
      } else {
        IC = fC.apply(this, arguments);
      }
      return rC(this, IC);
    };
  }(eC);
  function eC(CC) {
    var yC;
    !function (CC, yC) {
      if (!(CC instanceof yC)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }(this, eC);
    (yC = bC.call(this, CC)).handleChange = function (CC) {
      var IC = yC.props;
      var fC = IC.disabled;
      var ky = IC.onChange;
      fC || ("checked" in yC.props || yC.setState({
        checked: CC.target.checked
      }), ky && ky({
        target: (0, AC.d)((0, AC.d)({}, yC.props), {}, {
          checked: CC.target.checked
        }),
        stopPropagation: function () {
          CC.stopPropagation();
        },
        preventDefault: function () {
          CC.preventDefault();
        },
        nativeEvent: CC.nativeEvent
      }));
    };
    yC.saveInput = function (CC) {
      yC.input = CC;
    };
    var IC = "checked" in CC ? CC.checked : CC.defaultChecked;
    yC.state = {
      checked: IC
    };
    return yC;
  }
  yC = eC;
  my = [{
    key: "getDerivedStateFromProps",
    value: function (CC, yC) {
      return "checked" in CC ? (0, AC.d)((0, AC.d)({}, yC), {}, {
        checked: CC.checked
      }) : null;
    }
  }];
  (IC = [{
    key: "focus",
    value: function () {
      this.input.focus();
    }
  }, {
    key: "blur",
    value: function () {
      this.input.blur();
    }
  }, {
    key: "render",
    value: function () {
      var CC;
      var yC = this.props;
      var IC = yC.prefixCls;
      var AC = yC.className;
      var my = yC.style;
      var XC = yC.name;
      var iy = yC.id;
      var LC = yC.type;
      var YC = yC.disabled;
      var bC = yC.readOnly;
      var rC = yC.tabIndex;
      var eC = yC.onClick;
      var SC = yC.onFocus;
      var TC = yC.onBlur;
      var NC = yC.onKeyDown;
      var sC = yC.onKeyPress;
      var jy = yC.onKeyUp;
      var qC = yC.autoFocus;
      var KC = yC.value;
      var pC = yC.required;
      var wC = (0, gC.e)(yC, ["prefixCls", "className", "style", "name", "id", "type", "disabled", "readOnly", "tabIndex", "onClick", "onFocus", "onBlur", "onKeyDown", "onKeyPress", "onKeyUp", "autoFocus", "value", "required"]);
      var HC = Object.keys(wC).reduce(function (CC, yC) {
        "aria-" !== yC.substr(0, 5) && "data-" !== yC.substr(0, 5) && "role" !== yC || (CC[yC] = wC[yC]);
        return CC;
      }, {});
      var aC = this.state.checked;
      var cC = OC(IC, AC, (CC = {}, (0, ky.c)(CC, "".concat(IC, "-checked"), aC), (0, ky.c)(CC, "".concat(IC, "-disabled"), YC), CC));
      return GC.createElement("span", {
        className: cC,
        style: my
      }, GC.createElement("input", (0, fC.b)({
        name: XC,
        id: iy,
        type: LC,
        required: pC,
        readOnly: bC,
        disabled: YC,
        tabIndex: rC,
        className: "".concat(IC, "-input"),
        checked: !!aC,
        onClick: eC,
        onFocus: SC,
        onBlur: TC,
        onKeyUp: jy,
        onKeyDown: NC,
        onKeyPress: sC,
        onChange: this.handleChange,
        autoFocus: qC,
        ref: this.saveInput,
        value: KC
      }, HC)), GC.createElement("span", {
        className: "".concat(IC, "-inner")
      }));
    }
  }]) && XC(yC.prototype, IC);
  my && XC(yC, my);
  Object.defineProperty(yC, "prototype", {
    writable: !1
  });
  return eC;
}(GC.Component);
SC.defaultProps = {
  prefixCls: "rc-checkbox",
  className: "",
  style: {},
  type: "checkbox",
  defaultChecked: !1,
  onFocus: function () {},
  onBlur: function () {},
  onChange: function () {},
  onKeyDown: function () {},
  onKeyPress: function () {},
  onKeyUp: function () {}
};
const TC = SC;
var NC = require("./534.js");
export function e(CC) {
  let {
    className: yC,
    name: IC,
    checked: fC,
    onChange: ky,
    disabled: gC
  } = CC;
  return (0, NC.jsx)(TC, {
    className: yC,
    name: IC,
    checked: fC,
    onChange: ky,
    disabled: gC
  });
}