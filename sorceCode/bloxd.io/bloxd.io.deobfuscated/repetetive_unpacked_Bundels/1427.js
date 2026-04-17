var fC = require("./1397.js");
var ky = require("./516.js");
var gC = require("./1434.js");
function AC(CC, yC) {
  CC.prototype = Object.create(yC.prototype);
  CC.prototype.constructor = CC;
  (0, gC.d)(CC, yC);
}
function my(CC, yC) {
  return CC.replace(new RegExp("(^|\\s)" + yC + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
}
var XC = require("./49.js");
var iy = require("./518.js");
const LC = !1;
const YC = XC.createContext(null);
var bC = "unmounted";
var rC = "exited";
var GC = "entering";
var eC = "entered";
var OC = "exiting";
var SC = function (CC) {
  function yC(yC, IC) {
    var fC;
    fC = CC.call(this, yC, IC) || this;
    var ky;
    var gC = IC && !IC.isMounting ? yC.enter : yC.appear;
    fC.appearStatus = null;
    yC.in ? gC ? (ky = rC, fC.appearStatus = GC) : ky = eC : ky = yC.unmountOnExit || yC.mountOnEnter ? bC : rC;
    fC.state = {
      status: ky
    };
    fC.nextCallback = null;
    return fC;
  }
  AC(yC, CC);
  yC.getDerivedStateFromProps = function (CC, yC) {
    return CC.in && yC.status === bC ? {
      status: rC
    } : null;
  };
  var IC = yC.prototype;
  IC.componentDidMount = function () {
    this.updateStatus(!0, this.appearStatus);
  };
  IC.componentDidUpdate = function (CC) {
    var yC = null;
    if (CC !== this.props) {
      var IC = this.state.status;
      this.props.in ? IC !== GC && IC !== eC && (yC = GC) : IC !== GC && IC !== eC || (yC = OC);
    }
    this.updateStatus(!1, yC);
  };
  IC.componentWillUnmount = function () {
    this.cancelNextCallback();
  };
  IC.getTimeouts = function () {
    var CC;
    var yC;
    var IC;
    var fC = this.props.timeout;
    CC = yC = IC = fC;
    null != fC && "number" !== typeof fC && (CC = fC.exit, yC = fC.enter, IC = void 0 !== fC.appear ? fC.appear : yC);
    return {
      exit: CC,
      enter: yC,
      appear: IC
    };
  };
  IC.updateStatus = function (CC, yC) {
    void 0 === CC && (CC = !1);
    null !== yC ? (this.cancelNextCallback(), yC === GC ? this.performEnter(CC) : this.performExit()) : this.props.unmountOnExit && this.state.status === rC && this.setState({
      status: bC
    });
  };
  IC.performEnter = function (CC) {
    var yC = this;
    var IC = this.props.enter;
    var fC = this.context ? this.context.isMounting : CC;
    var ky = this.props.nodeRef ? [fC] : [iy.findDOMNode(this), fC];
    var gC = ky[0];
    var AC = ky[1];
    var my = this.getTimeouts();
    var XC = fC ? my.appear : my.enter;
    !CC && !IC || LC ? this.safeSetState({
      status: eC
    }, function () {
      yC.props.onEntered(gC);
    }) : (this.props.onEnter(gC, AC), this.safeSetState({
      status: GC
    }, function () {
      yC.props.onEntering(gC, AC);
      yC.onTransitionEnd(XC, function () {
        yC.safeSetState({
          status: eC
        }, function () {
          yC.props.onEntered(gC, AC);
        });
      });
    }));
  };
  IC.performExit = function () {
    var CC = this;
    var yC = this.props.exit;
    var IC = this.getTimeouts();
    var fC = this.props.nodeRef ? void 0 : iy.findDOMNode(this);
    yC && !LC ? (this.props.onExit(fC), this.safeSetState({
      status: OC
    }, function () {
      CC.props.onExiting(fC);
      CC.onTransitionEnd(IC.exit, function () {
        CC.safeSetState({
          status: rC
        }, function () {
          CC.props.onExited(fC);
        });
      });
    })) : this.safeSetState({
      status: rC
    }, function () {
      CC.props.onExited(fC);
    });
  };
  IC.cancelNextCallback = function () {
    null !== this.nextCallback && (this.nextCallback.cancel(), this.nextCallback = null);
  };
  IC.safeSetState = function (CC, yC) {
    yC = this.setNextCallback(yC);
    this.setState(CC, yC);
  };
  IC.setNextCallback = function (CC) {
    var yC = this;
    var IC = !0;
    this.nextCallback = function (fC) {
      IC && (IC = !1, yC.nextCallback = null, CC(fC));
    };
    this.nextCallback.cancel = function () {
      IC = !1;
    };
    return this.nextCallback;
  };
  IC.onTransitionEnd = function (CC, yC) {
    this.setNextCallback(yC);
    var IC = this.props.nodeRef ? this.props.nodeRef.current : iy.findDOMNode(this);
    var fC = null == CC && !this.props.addEndListener;
    if (IC && !fC) {
      if (this.props.addEndListener) {
        var ky = this.props.nodeRef ? [this.nextCallback] : [IC, this.nextCallback];
        var gC = ky[0];
        var AC = ky[1];
        this.props.addEndListener(gC, AC);
      }
      null != CC && setTimeout(this.nextCallback, CC);
    } else {
      setTimeout(this.nextCallback, 0);
    }
  };
  IC.render = function () {
    var CC = this.state.status;
    if (CC === bC) {
      return null;
    }
    var yC = this.props;
    var IC = yC.children;
    yC.in;
    yC.mountOnEnter;
    yC.unmountOnExit;
    yC.appear;
    yC.enter;
    yC.exit;
    yC.timeout;
    yC.addEndListener;
    yC.onEnter;
    yC.onEntering;
    yC.onEntered;
    yC.onExit;
    yC.onExiting;
    yC.onExited;
    yC.nodeRef;
    var fC = (0, ky.d)(yC, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return XC.createElement(YC.Provider, {
      value: null
    }, "function" === typeof IC ? IC(CC, fC) : XC.cloneElement(XC.Children.only(IC), fC));
  };
  return yC;
}(XC.Component);
function TC() {}
SC.contextType = YC;
SC.propTypes = {};
SC.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: TC,
  onEntering: TC,
  onEntered: TC,
  onExit: TC,
  onExiting: TC,
  onExited: TC
};
SC.UNMOUNTED = bC;
SC.EXITED = rC;
SC.ENTERING = GC;
SC.ENTERED = eC;
SC.EXITING = OC;
const NC = SC;
function sC(CC, yC) {
  return CC && yC && yC.split(" ").forEach(function (yC) {
    fC = yC;
    return void ((IC = CC).classList ? IC.classList.remove(fC) : "string" === typeof IC.className ? IC.className = my(IC.className, fC) : IC.setAttribute("class", my(IC.className && IC.className.baseVal || "", fC)));
    var IC;
    var fC;
  });
}
var jy = function (CC) {
  function yC() {
    for (var yC, IC = arguments.length, fC = new Array(IC), ky = 0; ky < IC; ky++) {
      fC[ky] = arguments[ky];
    }
    (yC = CC.call.apply(CC, [this].concat(fC)) || this).appliedClasses = {
      appear: {},
      enter: {},
      exit: {}
    };
    yC.onEnter = function (CC, IC) {
      var fC = yC.resolveArguments(CC, IC);
      var ky = fC[0];
      var gC = fC[1];
      yC.removeClasses(ky, "exit");
      yC.addClass(ky, gC ? "appear" : "enter", "base");
      yC.props.onEnter && yC.props.onEnter(CC, IC);
    };
    yC.onEntering = function (CC, IC) {
      var fC = yC.resolveArguments(CC, IC);
      var ky = fC[0];
      var gC = fC[1] ? "appear" : "enter";
      yC.addClass(ky, gC, "active");
      yC.props.onEntering && yC.props.onEntering(CC, IC);
    };
    yC.onEntered = function (CC, IC) {
      var fC = yC.resolveArguments(CC, IC);
      var ky = fC[0];
      var gC = fC[1] ? "appear" : "enter";
      yC.removeClasses(ky, gC);
      yC.addClass(ky, gC, "done");
      yC.props.onEntered && yC.props.onEntered(CC, IC);
    };
    yC.onExit = function (CC) {
      var IC = yC.resolveArguments(CC)[0];
      yC.removeClasses(IC, "appear");
      yC.removeClasses(IC, "enter");
      yC.addClass(IC, "exit", "base");
      yC.props.onExit && yC.props.onExit(CC);
    };
    yC.onExiting = function (CC) {
      var IC = yC.resolveArguments(CC)[0];
      yC.addClass(IC, "exit", "active");
      yC.props.onExiting && yC.props.onExiting(CC);
    };
    yC.onExited = function (CC) {
      var IC = yC.resolveArguments(CC)[0];
      yC.removeClasses(IC, "exit");
      yC.addClass(IC, "exit", "done");
      yC.props.onExited && yC.props.onExited(CC);
    };
    yC.resolveArguments = function (CC, IC) {
      return yC.props.nodeRef ? [yC.props.nodeRef.current, CC] : [CC, IC];
    };
    yC.getClassNames = function (CC) {
      var IC = yC.props.classNames;
      var fC = "string" === typeof IC;
      var ky = fC ? "" + (fC && IC ? IC + "-" : "") + CC : IC[CC];
      return {
        baseClassName: ky,
        activeClassName: fC ? ky + "-active" : IC[CC + "Active"],
        doneClassName: fC ? ky + "-done" : IC[CC + "Done"]
      };
    };
    return yC;
  }
  AC(yC, CC);
  var IC = yC.prototype;
  IC.addClass = function (CC, yC, IC) {
    var fC = this.getClassNames(yC)[IC + "ClassName"];
    var ky = this.getClassNames("enter").doneClassName;
    "appear" === yC && "done" === IC && ky && (fC += " " + ky);
    "active" === IC && CC && CC.scrollTop;
    fC && (this.appliedClasses[yC][IC] = fC, function (CC, yC) {
      CC && yC && yC.split(" ").forEach(function (yC) {
        fC = yC;
        return void ((IC = CC).classList ? IC.classList.add(fC) : function (CC, yC) {
          return CC.classList ? !!yC && CC.classList.contains(yC) : -1 !== (" " + (CC.className.baseVal || CC.className) + " ").indexOf(" " + yC + " ");
        }(IC, fC) || ("string" === typeof IC.className ? IC.className = IC.className + " " + fC : IC.setAttribute("class", (IC.className && IC.className.baseVal || "") + " " + fC)));
        var IC;
        var fC;
      });
    }(CC, fC));
  };
  IC.removeClasses = function (CC, yC) {
    var IC = this.appliedClasses[yC];
    var fC = IC.base;
    var ky = IC.active;
    var gC = IC.done;
    this.appliedClasses[yC] = {};
    fC && sC(CC, fC);
    ky && sC(CC, ky);
    gC && sC(CC, gC);
  };
  IC.render = function () {
    var CC = this.props;
    CC.classNames;
    var yC = (0, ky.d)(CC, ["classNames"]);
    return XC.createElement(NC, (0, fC.b)({}, yC, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  };
  return yC;
}(XC.Component);
jy.defaultProps = {
  classNames: ""
};
jy.propTypes = {};
export const d = jy;