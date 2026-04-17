var fC = require("./673.js");
var ky = require("./675.js");
var gC = require("./700.js");
var AC = ky.iI;
var my = ky.SlowBuffer;
var XC = fC.Tap;
var iy = gC.debuglog("avsc:types");
var LC = gC.format;
var YC = {
  array: WC,
  boolean: NC,
  bytes: wC,
  double: KC,
  enum: UC,
  error: xC,
  fixed: EC,
  float: qC,
  int: sC,
  long: jy,
  map: VC,
  null: TC,
  record: xC,
  string: pC
};
var bC = new fC.Lcg();
var rC = new XC(new my(1024));
var GC = null;
var eC = [];
function OC(CC, yC) {
  var IC;
  GC ? (IC = GC, eC.push([GC, this]), GC = null) : IC = this;
  this._hash = new JC();
  this.name = void 0;
  this.aliases = void 0;
  this.doc = CC && CC.doc ? "" + CC.doc : void 0;
  if (CC) {
    var fC = CC.name;
    var ky = void 0 === CC.namespace ? yC && yC.namespace : CC.namespace;
    if (void 0 !== fC) {
      if (DC(fC = RC(fC, ky))) {
        throw new Error(LC("cannot rename primitive type: %j", fC));
      }
      var gC = yC && yC.cC;
      if (gC) {
        if (void 0 !== gC[fC]) {
          throw new Error(LC("duplicate type name: %s", fC));
        }
        gC[fC] = IC;
      }
    } else {
      if (yC && yC.noAnonymousTypes) {
        throw new Error(LC("missing name property in schema: %j", CC));
      }
    }
    this.name = fC;
    this.aliases = CC.aliases ? CC.aliases.map(function (CC) {
      return RC(CC, ky);
    }) : [];
  }
}
function SC(CC) {
  OC.call(this);
  this._branchConstructor = this._createBranchConstructor();
  CC || Object.freeze(this);
}
function TC() {
  SC.call(this);
}
function NC() {
  SC.call(this);
}
function sC() {
  SC.call(this);
}
function jy() {
  SC.call(this);
}
function qC() {
  SC.call(this);
}
function KC() {
  SC.call(this);
}
function pC() {
  SC.call(this);
}
function wC() {
  SC.call(this);
}
function HC(CC, yC) {
  OC.call(this);
  if (!Array.isArray(CC)) {
    throw new Error(LC("non-array union schema: %j", CC));
  }
  if (!CC.length) {
    throw new Error("empty union");
  }
  this.types = Object.freeze(CC.map(function (CC) {
    return OC.forSchema(CC, yC);
  }));
  this._branchIndices = {};
  this.types.forEach(function (CC, yC) {
    if (OC.isType(CC, "union")) {
      throw new Error("unions cannot be directly nested");
    }
    var IC = CC.branchName;
    if (void 0 !== this._branchIndices[IC]) {
      throw new Error(LC("duplicate union branch name: %j", IC));
    }
    this._branchIndices[IC] = yC;
  }, this);
}
function aC(CC, yC) {
  HC.call(this, CC, yC);
  this._dynamicBranches = null;
  this._bucketIndices = {};
  this.types.forEach(function (CC, yC) {
    if (OC.isType(CC, "abstract", "logical")) {
      this._dynamicBranches || (this._dynamicBranches = []);
      this._dynamicBranches.push({
        index: yC,
        type: CC
      });
    } else {
      var IC = dC(CC);
      if (void 0 !== this._bucketIndices[IC]) {
        throw new Error(LC("ambiguous unwrapped union: %j", this));
      }
      this._bucketIndices[IC] = yC;
    }
  }, this);
  Object.freeze(this);
}
function cC(CC, yC) {
  HC.call(this, CC, yC);
  Object.freeze(this);
}
function UC(CC, yC) {
  OC.call(this, CC, yC);
  if (!Array.isArray(CC.symbols) || !CC.symbols.length) {
    throw new Error(LC("invalid enum symbols: %j", CC.symbols));
  }
  this.symbols = Object.freeze(CC.symbols.slice());
  this._indices = {};
  this.symbols.forEach(function (CC, yC) {
    if (!fC.isValidName(CC)) {
      throw new Error(LC("invalid %s symbol: %j", this, CC));
    }
    if (void 0 !== this._indices[CC]) {
      throw new Error(LC("duplicate %s symbol: %j", this, CC));
    }
    this._indices[CC] = yC;
  }, this);
  this.default = CC.default;
  if (void 0 !== this.default && void 0 === this._indices[this.default]) {
    throw new Error(LC("invalid %s default: %j", this, this.default));
  }
  this._branchConstructor = this._createBranchConstructor();
  Object.freeze(this);
}
function EC(CC, yC) {
  OC.call(this, CC, yC);
  if (CC.size !== (0 | CC.size) || CC.size < 0) {
    throw new Error(LC("invalid %s size", this.branchName));
  }
  this.size = 0 | CC.size;
  this._branchConstructor = this._createBranchConstructor();
  Object.freeze(this);
}
function VC(CC, yC) {
  OC.call(this);
  if (!CC.values) {
    throw new Error(LC("missing map values: %j", CC));
  }
  this.valuesType = OC.forSchema(CC.values, yC);
  this._branchConstructor = this._createBranchConstructor();
  Object.freeze(this);
}
function WC(CC, yC) {
  OC.call(this);
  if (!CC.items) {
    throw new Error(LC("missing array items: %j", CC));
  }
  this.itemsType = OC.forSchema(CC.items, yC);
  this._branchConstructor = this._createBranchConstructor();
  Object.freeze(this);
}
function xC(CC, yC) {
  var IC = (yC = yC || {}).namespace;
  if (void 0 !== CC.namespace) {
    yC.namespace = CC.namespace;
  } else {
    if (CC.name) {
      var ky = fC.impliedNamespace(CC.name);
      void 0 !== ky && (yC.namespace = ky);
    }
  }
  OC.call(this, CC, yC);
  if (!Array.isArray(CC.fields)) {
    throw new Error(LC("non-array record fields: %j", CC.fields));
  }
  if (fC.hasDuplicates(CC.fields, function (CC) {
    return CC.name;
  })) {
    throw new Error(LC("duplicate field name: %j", CC.fields));
  }
  this._fieldsByName = {};
  this.fields = Object.freeze(CC.fields.map(function (CC) {
    var IC = new BC(CC, yC);
    this._fieldsByName[IC.name] = IC;
    return IC;
  }, this));
  this._branchConstructor = this._createBranchConstructor();
  this._isError = "error" === CC.type;
  this.recordConstructor = this._createConstructor(yC.errorStackTraces, yC.omitRecordMethods);
  this._read = this._createReader();
  this._skip = this._createSkipper();
  this._write = this._createWriter();
  this._check = this._createChecker();
  yC.namespace = IC;
  Object.freeze(this);
}
function PC(CC, yC) {
  this._logicalTypeName = CC.logicalType;
  OC.call(this);
  GC = this;
  try {
    this._underlyingType = OC.forSchema(CC, yC);
  } finally {
    GC = null;
    var IC = eC.length;
    IC && eC[IC - 1][0] === this && eC.pop();
  }
  OC.isType(this.underlyingType, "union") ? this._branchConstructor = this.underlyingType._branchConstructor : this._branchConstructor = this.underlyingType._createBranchConstructor();
}
function zC(CC) {
  this._concreteTypeName = "long";
  SC.call(this, !0);
  this._noUnpack = !!CC;
}
function BC(CC, yC) {
  var IC = CC.name;
  if ("string" != typeof IC || !fC.isValidName(IC)) {
    throw new Error(LC("invalid field name: %s", IC));
  }
  this.name = IC;
  this.type = OC.forSchema(CC.type, yC);
  this.aliases = CC.aliases || [];
  this.doc = void 0 !== CC.doc ? "" + CC.doc : void 0;
  this._order = function (CC) {
    switch (CC) {
      case "ascending":
        return 1;
      case "descending":
        return -1;
      case "ignore":
        return 0;
      default:
        throw new Error(LC("invalid order: %j", CC));
    }
  }(void 0 === CC.order ? "ascending" : CC.order);
  var ky = CC.default;
  if (void 0 !== ky) {
    var gC;
    var AC = this.type;
    try {
      gC = AC._copy(ky, {
        coerce: 2,
        wrap: 2
      });
    } catch (XC) {
      var my = LC("incompatible field default %j (%s)", ky, XC.message);
      OC.isType(AC, "union") && (my += LC(", union defaults must match the first branch's type (%j)", AC.types[0]));
      throw new Error(my);
    }
    DC(AC.typeName) && "bytes" !== AC.typeName ? this.defaultValue = function () {
      return gC;
    } : this.defaultValue = function () {
      return AC._copy(gC);
    };
  }
  Object.freeze(this);
}
function tC(CC) {
  this._readerType = CC;
  this._read = null;
  this.itemsType = null;
  this.size = 0;
  this.symbols = null;
  this.valuesType = null;
}
function JC() {
  this.str = void 0;
}
function nC(CC, yC, IC, fC) {
  if (IC) {
    if (IC._readerType !== CC) {
      throw new Error("invalid resolver");
    }
    return IC._read(yC, fC);
  }
  return CC._read(yC);
}
function FC(CC) {
  var yC = {};
  CC.name && (yC[CC.name] = !0);
  var IC;
  var fC;
  var ky = CC.aliases;
  IC = 0;
  fC = ky.length;
  for (; IC < fC; IC++) {
    yC[ky[IC]] = !0;
  }
  return Object.keys(yC);
}
function uC(CC, yC, IC) {
  if (!yC.name) {
    return !0;
  }
  var ky;
  var gC;
  var AC;
  var my = IC ? yC.name : fC.unqualify(yC.name);
  var XC = FC(CC);
  ky = 0;
  gC = XC.length;
  for (; ky < gC; ky++) {
    AC = XC[ky];
    IC || (AC = fC.unqualify(AC));
    if (AC === my) {
      return !0;
    }
  }
  return !1;
}
function DC(CC) {
  var yC = YC[CC];
  return yC && yC.prototype instanceof SC;
}
function ZC(CC) {
  if ("error" === CC) {
    CC = "record";
  } else {
    var yC = /^([^:]+):(.*)$/.exec(CC);
    yC && (CC = "union" === yC[1] ? yC[2] + "Union" : yC[1]);
  }
  return fC.capitalize(CC) + "Type";
}
function lC(CC) {
  var yC = CC.readLong();
  yC < 0 && (yC = -yC, CC.skipLong());
  return yC;
}
function oC(CC) {
  return CC >= -9007199254740990 && CC <= 9007199254740990;
}
function vC(CC) {
  return CC && "iI" === CC.type && Array.isArray(CC.data);
}
function hC(CC, yC) {
  throw new Error(LC("invalid %j: %j", yC.schema(), CC));
}
function RC(CC, yC) {
  var IC = fC.unqualify(CC);
  return DC(IC) ? IC : fC.qualify(CC, yC);
}
function dC(CC) {
  var yC = CC.typeName;
  switch (yC) {
    case "double":
    case "float":
    case "int":
    case "long":
      return "number";
    case "bytes":
    case "fixed":
      return "buffer";
    case "enum":
      return "string";
    case "map":
    case "error":
    case "record":
      return "object";
    default:
      return yC;
  }
}
function QC(CC) {
  if (null === CC) {
    return "null";
  }
  var yC = typeof CC;
  if ("object" === yC) {
    if (Array.isArray(CC)) {
      return "array";
    }
    if (AC.isBuffer(CC)) {
      return "buffer";
    }
  }
  return yC;
}
OC.forSchema = function (CC, yC) {
  (yC = yC || {}).cC = yC.cC || {};
  var IC;
  var fC = function (CC) {
    !0 === CC ? CC = "always" : !1 === CC ? CC = "never" : void 0 === CC ? CC = "auto" : "string" == typeof CC && (CC = CC.toLowerCase());
    switch (CC) {
      case "always":
        return cC;
      case "never":
        return aC;
      case "auto":
        return;
      default:
        throw new Error(LC("invalid wrap unions option: %j", CC));
    }
  }(yC.wrapUnions);
  if (null === CC) {
    throw new Error('invalid type: null (did you mean "null"?)');
  }
  if (OC.isType(CC)) {
    return CC;
  }
  if (yC.typeHook && (IC = yC.typeHook(CC, yC))) {
    if (!OC.isType(IC)) {
      throw new Error(LC("invalid typehook return value: %j", IC));
    }
    return IC;
  }
  if ("string" == typeof CC) {
    CC = RC(CC, yC.namespace);
    if (IC = yC.cC[CC]) {
      return IC;
    }
    if (DC(CC)) {
      return yC.cC[CC] = OC.forSchema({
        type: CC
      }, yC);
    }
    throw new Error(LC("undefined type name: %s", CC));
  }
  if (CC.logicalType && yC.logicalTypes && !GC) {
    var ky = yC.logicalTypes[CC.logicalType];
    if (ky) {
      var gC = yC.namespace;
      var AC = {};
      Object.keys(yC.cC).forEach(function (CC) {
        AC[CC] = yC.cC[CC];
      });
      try {
        iy("instantiating logical type for %s", CC.logicalType);
        return new ky(CC, yC);
      } catch (bC) {
        iy("failed to instantiate logical type for %s", CC.logicalType);
        if (yC.assertLogicalTypes) {
          throw bC;
        }
        GC = null;
        yC.namespace = gC;
        yC.cC = AC;
      }
    }
  }
  if (Array.isArray(CC)) {
    var my = GC;
    GC = null;
    var XC = CC.map(function (CC) {
      return OC.forSchema(CC, yC);
    });
    fC || (fC = function (CC) {
      var yC;
      var IC;
      var fC;
      var ky;
      var gC = {};
      yC = 0;
      IC = CC.length;
      for (; yC < IC; yC++) {
        ky = CC[yC];
        if (!OC.isType(ky, "logical")) {
          if (gC[fC = dC(ky)]) {
            return !0;
          }
          gC[fC] = !0;
        }
      }
      return !1;
    }(XC) ? cC : aC);
    GC = my;
    IC = new fC(XC, yC);
  } else {
    IC = function (IC) {
      var fC = YC[IC];
      if (void 0 === fC) {
        throw new Error(LC("unknown type: %j", IC));
      }
      return new fC(CC, yC);
    }(CC.type);
  }
  return IC;
};
OC.forValue = function (CC, yC) {
  (yC = yC || {}).emptyArrayType = yC.emptyArrayType || OC.forSchema({
    type: "array",
    items: "null"
  });
  if (yC.valueHook) {
    var IC = yC.valueHook(CC, yC);
    if (void 0 !== IC) {
      if (!OC.isType(IC)) {
        throw new Error(LC("invalid value hook return value: %j", IC));
      }
      return IC;
    }
  }
  switch (typeof CC) {
    case "string":
      return OC.forSchema("string", yC);
    case "boolean":
      return OC.forSchema("boolean", yC);
    case "number":
      return (0 | CC) === CC ? OC.forSchema("int", yC) : Math.abs(CC) < 9007199254740991 ? OC.forSchema("float", yC) : OC.forSchema("double", yC);
    case "object":
      if (null === CC) {
        return OC.forSchema("null", yC);
      }
      if (Array.isArray(CC)) {
        return CC.length ? OC.forSchema({
          type: "array",
          items: OC.forTypes(CC.map(function (CC) {
            return OC.forValue(CC, yC);
          }), yC)
        }, yC) : yC.emptyArrayType;
      }
      if (AC.isBuffer(CC)) {
        return OC.forSchema("bytes", yC);
      }
      var ky = Object.keys(CC);
      return ky.some(function (CC) {
        return !fC.isValidName(CC);
      }) ? OC.forSchema({
        type: "map",
        values: OC.forTypes(ky.map(function (IC) {
          return OC.forValue(CC[IC], yC);
        }), yC)
      }, yC) : OC.forSchema({
        type: "record",
        fields: ky.map(function (IC) {
          return {
            name: IC,
            type: OC.forValue(CC[IC], yC)
          };
        })
      }, yC);
    default:
      throw new Error(LC("cannot infer type from: %j", CC));
  }
};
OC.forTypes = function (CC, yC) {
  if (!CC.length) {
    throw new Error("no types to combine");
  }
  if (1 === CC.length) {
    return CC[0];
  }
  yC = yC || {};
  var IC = [];
  var fC = 0;
  var ky = !0;
  CC.forEach(function (CC) {
    switch (CC.typeName) {
      case "union:unwrapped":
        ky = !1;
        IC = IC.concat(CC.types);
        break;
      case "union:wrapped":
        fC++;
        IC = IC.concat(CC.types);
        break;
      case "null":
        IC.push(CC);
        break;
      default:
        ky = !1;
        IC.push(CC);
    }
  });
  if (fC) {
    if (!ky) {
      throw new Error("cannot combine wrapped union");
    }
    var gC = {};
    IC.forEach(function (CC) {
      var yC = CC.branchName;
      var IC = gC[yC];
      if (IC) {
        if (!CC.equals(IC)) {
          throw new Error("inconsistent branch type");
        }
      } else {
        gC[yC] = CC;
      }
    });
    var AC;
    var my = yC.wrapUnions;
    yC.wrapUnions = !0;
    try {
      AC = OC.forSchema(Object.keys(gC).map(function (CC) {
        return gC[CC];
      }), yC);
    } catch (LC) {
      yC.wrapUnions = my;
      throw LC;
    }
    yC.wrapUnions = my;
    return AC;
  }
  var XC = {};
  IC.forEach(function (CC) {
    var yC = dC(CC);
    var IC = XC[yC];
    IC || (XC[yC] = IC = []);
    IC.push(CC);
  });
  var iy = Object.keys(XC).map(function (CC) {
    var IC = XC[CC];
    if (1 === IC.length) {
      return IC[0];
    }
    switch (CC) {
      case "null":
      case "boolean":
        return IC[0];
      case "number":
        return function (CC) {
          var yC;
          var IC;
          var fC;
          var ky;
          var gC = ["int", "long", "float", "double"];
          var AC = -1;
          var my = null;
          yC = 0;
          IC = CC.length;
          for (; yC < IC; yC++) {
            fC = CC[yC];
            (ky = gC.indexOf(fC.typeName)) > AC && (AC = ky, my = fC);
          }
          return my;
        }(IC);
      case "string":
        return function (CC, yC) {
          var IC;
          var fC;
          var ky;
          var gC;
          var AC = {};
          IC = 0;
          fC = CC.length;
          for (; IC < fC; IC++) {
            if ("string" === (ky = CC[IC]).typeName) {
              return ky;
            }
            var my;
            var XC;
            my = 0;
            XC = (gC = ky.symbols).length;
            for (; my < XC; my++) {
              AC[gC[my]] = !0;
            }
          }
          return OC.forSchema({
            type: "enum",
            symbols: Object.keys(AC)
          }, yC);
        }(IC, yC);
      case "buffer":
        return function (CC, yC) {
          var IC;
          var fC;
          var ky;
          var gC = -1;
          IC = 0;
          fC = CC.length;
          for (; IC < fC; IC++) {
            if ("bytes" === (ky = CC[IC]).typeName) {
              return ky;
            }
            -1 === gC ? gC = ky.size : ky.size !== gC && (gC = -2);
          }
          return gC < 0 ? OC.forSchema("bytes", yC) : CC[0];
        }(IC, yC);
      case "array":
        return (IC = IC.filter(function (CC) {
          return CC !== yC.emptyArrayType;
        })).length ? OC.forSchema({
          type: "array",
          items: OC.forTypes(IC.map(function (CC) {
            return CC.itemsType;
          }), yC)
        }, yC) : yC.emptyArrayType;
      default:
        return function (CC, yC) {
          var IC;
          var fC;
          var ky;
          var gC;
          var AC;
          var my = [];
          var XC = {};
          var iy = {};
          var LC = !0;
          IC = 0;
          fC = CC.length;
          for (; IC < fC; IC++) {
            var YC;
            var bC;
            var rC;
            var GC;
            var eC;
            var SC;
            if ("map" === (ky = CC[IC]).typeName) {
              LC = !1;
              my.push(ky.valuesType);
            } else {
              YC = 0;
              bC = (gC = ky.fields).length;
              for (; YC < bC; YC++) {
                eC = (rC = gC[YC]).name;
                SC = rC.type;
                my.push(SC);
                LC && (XC[eC] || (XC[eC] = []), XC[eC].push(SC), void 0 !== (GC = rC.defaultValue()) && (iy[eC] = GC));
              }
            }
          }
          if (LC) {
            var TC = Object.keys(XC);
            IC = 0;
            fC = TC.length;
            for (; IC < fC; IC++) {
              eC = TC[IC];
              XC[eC].length < CC.length && void 0 === iy[eC] && (yC && yC.strictDefaults ? LC = !1 : (XC[eC].unshift(OC.forSchema("null", yC)), iy[eC] = null));
            }
          }
          AC = LC ? {
            type: "record",
            fields: TC.map(function (CC) {
              var IC = OC.forTypes(XC[CC], yC);
              var fC = iy[CC];
              if (void 0 !== fC && ~IC.typeName.indexOf("union")) {
                var ky;
                var gC;
                var AC = IC.types.slice();
                ky = 0;
                gC = AC.length;
                for (; ky < gC && !AC[ky].isValid(fC); ky++);
                if (ky > 0) {
                  var my = AC[0];
                  AC[0] = AC[ky];
                  AC[ky] = my;
                  IC = OC.forSchema(AC, yC);
                }
              }
              return {
                name: CC,
                type: IC,
                default: iy[CC]
              };
            })
          } : {
            type: "map",
            values: OC.forTypes(my, yC)
          };
          return OC.forSchema(AC, yC);
        }(IC, yC);
    }
  });
  return 1 === iy.length ? iy[0] : OC.forSchema(iy, yC);
};
OC.isType = function () {
  var CC = arguments.length;
  if (!CC) {
    return !1;
  }
  var yC = arguments[0];
  if (!yC || "function" != typeof yC._update || "function" != typeof yC.fingerprint) {
    return !1;
  }
  if (1 === CC) {
    return !0;
  }
  var IC;
  var fC = yC.typeName;
  for (IC = 1; IC < CC; IC++) {
    if (0 === fC.indexOf(arguments[IC])) {
      return !0;
    }
  }
  return !1;
};
OC.__reset = function (CC) {
  iy("resetting type buffer to %d", CC);
  rC.buf = new my(CC);
};
Object.defineProperty(OC.prototype, "branchName", {
  enumerable: !0,
  get: function () {
    var CC = OC.isType(this, "logical") ? this.underlyingType : this;
    return CC.name ? CC.name : OC.isType(CC, "abstract") ? CC._concreteTypeName : OC.isType(CC, "union") ? void 0 : CC.typeName;
  }
});
OC.prototype.clone = function (CC, yC) {
  return yC ? (yC = {
    coerce: 0 | !!yC.coerceBuffers,
    fieldHook: yC.fieldHook,
    qualifyNames: !!yC.qualifyNames,
    skip: !!yC.skipMissingFields,
    wrap: 0 | !!yC.wrapUnions
  }, this._copy(CC, yC)) : this.fromBuffer(this.toBuffer(CC));
};
OC.prototype.compare = fC.abstractFunction;
OC.prototype.compareBuffers = function (CC, yC) {
  return this._match(new XC(CC), new XC(yC));
};
OC.prototype.createResolver = function (CC, yC) {
  if (!OC.isType(CC)) {
    throw new Error(LC("not a type: %j", CC));
  }
  if (!OC.isType(this, "union", "logical") && OC.isType(CC, "logical")) {
    return this.createResolver(CC.underlyingType, yC);
  }
  var IC;
  var fC;
  (yC = yC || {}).cC = yC.cC || {};
  if (OC.isType(this, "record", "error") && OC.isType(CC, "record", "error") && (fC = this.name + ":" + CC.name, IC = yC.cC[fC])) {
    return IC;
  }
  IC = new tC(this);
  fC && (yC.cC[fC] = IC);
  if (OC.isType(CC, "union")) {
    var ky = CC.types.map(function (CC) {
      return this.createResolver(CC, yC);
    }, this);
    IC._read = function (CC) {
      var yC = CC.readLong();
      if (void 0 === ky[yC]) {
        throw new Error(LC("invalid union index: %s", yC));
      }
      return ky[yC]._read(CC);
    };
  } else {
    this._update(IC, CC, yC);
  }
  if (!IC._read) {
    throw new Error(LC("cannot read %s as %s", CC, this));
  }
  return Object.freeze(IC);
};
OC.prototype.decode = function (CC, yC, IC) {
  var fC = new XC(CC, yC);
  var ky = nC(this, fC, IC);
  return fC.isValid() ? {
    value: ky,
    offset: fC.pos
  } : {
    value: void 0,
    offset: -1
  };
};
OC.prototype.encode = function (CC, yC, IC) {
  var fC = new XC(yC, IC);
  this._write(fC, CC);
  return fC.isValid() ? fC.pos : yC.length - fC.pos;
};
OC.prototype.equals = function (CC, yC) {
  var IC = OC.isType(CC) && this.fingerprint().equals(CC.fingerprint());
  return IC && yC && yC.strict ? JSON.stringify(this.schema({
    exportAttrs: !0
  })) === JSON.stringify(CC.schema({
    exportAttrs: !0
  })) : IC;
};
OC.prototype.fingerprint = function (CC) {
  if (CC) {
    return fC.getHash(JSON.stringify(this.schema()), CC);
  }
  if (!this._hash.str) {
    var yC = JSON.stringify(this.schema());
    this._hash.str = fC.getHash(yC).toString("binary");
  }
  return fC.bufferFrom(this._hash.str, "binary");
};
OC.prototype.fromBuffer = function (CC, yC, IC) {
  var fC = new XC(CC);
  var ky = nC(this, fC, yC, IC);
  if (!fC.isValid()) {
    throw new Error("truncated buffer");
  }
  if (!IC && fC.pos < CC.length) {
    throw new Error("trailing data");
  }
  return ky;
};
OC.prototype.fromString = function (CC) {
  return this._copy(JSON.parse(CC), {
    coerce: 2
  });
};
OC.prototype.inspect = function () {
  var CC = this.typeName;
  var yC = ZC(CC);
  if (DC(CC)) {
    return LC("<%s>", yC);
  }
  var IC = this.schema({
    exportAttrs: !0,
    noDeref: !0
  });
  "object" != typeof IC || OC.isType(this, "logical") || (IC.type = void 0);
  return LC("<%s %j>", yC, IC);
};
OC.prototype.isValid = function (CC, yC) {
  var IC;
  var fC;
  var ky = 0 | (yC && yC.noUndeclaredFields);
  var gC = yC && yC.errorHook;
  gC && (fC = [], IC = function (yC, IC) {
    gC.call(this, fC.slice(), yC, IC, CC);
  });
  return this._check(CC, ky, IC, fC);
};
OC.prototype.random = fC.abstractFunction;
OC.prototype.schema = function (CC) {
  return this._attrs({
    exportAttrs: !(!CC || !CC.exportAttrs),
    noDeref: !(!CC || !CC.noDeref)
  });
};
OC.prototype.toBuffer = function (CC) {
  rC.pos = 0;
  this._write(rC, CC);
  var yC = fC.newBuffer(rC.pos);
  rC.isValid() ? rC.buf.Ly(yC, 0, 0, rC.pos) : this._write(new XC(yC), CC);
  return yC;
};
OC.prototype.toJSON = function () {
  return this.schema({
    exportAttrs: !0
  });
};
OC.prototype.toString = function (CC) {
  return void 0 === CC ? JSON.stringify(this.schema({
    noDeref: !0
  })) : JSON.stringify(this._copy(CC, {
    coerce: 3
  }));
};
OC.prototype.wrap = function (CC) {
  var yC = this._branchConstructor;
  return null === yC ? null : new yC(CC);
};
OC.prototype._attrs = function (CC) {
  CC.derefed = CC.derefed || {};
  var yC = this.name;
  if (void 0 !== yC) {
    if (CC.noDeref || CC.derefed[yC]) {
      return yC;
    }
    CC.derefed[yC] = !0;
  }
  var IC = {};
  void 0 !== this.name && (IC.name = yC);
  IC.type = this.typeName;
  var fC = this._deref(IC, CC);
  void 0 !== fC && (IC = fC);
  CC.exportAttrs && (this.aliases && this.aliases.length && (IC.aliases = this.aliases), void 0 !== this.doc && (IC.doc = this.doc));
  return IC;
};
OC.prototype._createBranchConstructor = function () {
  var CC = this.branchName;
  if ("null" === CC) {
    return null;
  }
  var yC = ~CC.indexOf(".") ? "this['" + CC + "']" : "this." + CC;
  var IC = new Function("return function Branch$(val) { " + yC + " = val; };")();
  IC.type = this;
  IC.prototype.unwrap = new Function("return " + yC + ";");
  IC.prototype.unwrapped = IC.prototype.unwrap;
  return IC;
};
OC.prototype._peek = function (CC) {
  var yC = CC.pos;
  var IC = this._read(CC);
  CC.pos = yC;
  return IC;
};
OC.prototype._check = fC.abstractFunction;
OC.prototype._copy = fC.abstractFunction;
OC.prototype._deref = fC.abstractFunction;
OC.prototype._match = fC.abstractFunction;
OC.prototype._read = fC.abstractFunction;
OC.prototype._skip = fC.abstractFunction;
OC.prototype._update = fC.abstractFunction;
OC.prototype._write = fC.abstractFunction;
OC.prototype.getAliases = function () {
  return this.aliases;
};
OC.prototype.getFingerprint = OC.prototype.fingerprint;
OC.prototype.getName = function (CC) {
  return this.name || !CC ? this.name : this.branchName;
};
OC.prototype.getSchema = OC.prototype.schema;
OC.prototype.getTypeName = function () {
  return this.typeName;
};
gC.inherits(SC, OC);
SC.prototype._update = function (CC, yC) {
  yC.typeName === this.typeName && (CC._read = this._read);
};
SC.prototype._copy = function (CC) {
  this._check(CC, void 0, hC);
  return CC;
};
SC.prototype._deref = function () {
  return this.typeName;
};
SC.prototype.compare = fC.compare;
gC.inherits(TC, SC);
TC.prototype._check = function (CC, yC, IC) {
  var fC = null === CC;
  !fC && IC && IC(CC, this);
  return fC;
};
TC.prototype._read = function () {
  return null;
};
TC.prototype._skip = function () {};
TC.prototype._write = function (CC, yC) {
  null !== yC && hC(yC, this);
};
TC.prototype._match = function () {
  return 0;
};
TC.prototype.compare = TC.prototype._match;
TC.prototype.typeName = "null";
TC.prototype.random = TC.prototype._read;
gC.inherits(NC, SC);
NC.prototype._check = function (CC, yC, IC) {
  var fC = "boolean" == typeof CC;
  !fC && IC && IC(CC, this);
  return fC;
};
NC.prototype._read = function (CC) {
  return CC.readBoolean();
};
NC.prototype._skip = function (CC) {
  CC.skipBoolean();
};
NC.prototype._write = function (CC, yC) {
  "boolean" != typeof yC && hC(yC, this);
  CC.writeBoolean(yC);
};
NC.prototype._match = function (CC, yC) {
  return CC.matchBoolean(yC);
};
NC.prototype.typeName = "boolean";
NC.prototype.random = function () {
  return bC.nextBoolean();
};
gC.inherits(sC, SC);
sC.prototype._check = function (CC, yC, IC) {
  var fC = CC === (0 | CC);
  !fC && IC && IC(CC, this);
  return fC;
};
sC.prototype._read = function (CC) {
  return CC.readInt();
};
sC.prototype._skip = function (CC) {
  CC.skipInt();
};
sC.prototype._write = function (CC, yC) {
  yC !== (0 | yC) && hC(yC, this);
  CC.writeInt(yC);
};
sC.prototype._match = function (CC, yC) {
  return CC.matchInt(yC);
};
sC.prototype.typeName = "int";
sC.prototype.random = function () {
  return 0 | bC.nextInt(1e3);
};
gC.inherits(jy, SC);
jy.prototype._check = function (CC, yC, IC) {
  var fC = "number" == typeof CC && CC % 1 === 0 && oC(CC);
  !fC && IC && IC(CC, this);
  return fC;
};
jy.prototype._read = function (CC) {
  var yC = CC.readLong();
  if (!oC(yC)) {
    throw new Error("potential precision loss");
  }
  return yC;
};
jy.prototype._skip = function (CC) {
  CC.skipLong();
};
jy.prototype._write = function (CC, yC) {
  ("number" != typeof yC || yC % 1 || !oC(yC)) && hC(yC, this);
  CC.writeLong(yC);
};
jy.prototype._match = function (CC, yC) {
  return CC.matchLong(yC);
};
jy.prototype._update = function (CC, yC) {
  switch (yC.typeName) {
    case "int":
      CC._read = yC._read;
      break;
    case "abstract:long":
    case "long":
      CC._read = this._read;
  }
};
jy.prototype.typeName = "long";
jy.prototype.random = function () {
  return bC.nextInt();
};
jy.__with = function (CC, yC) {
  CC = CC || {};
  var IC = {
    toBuffer: "_toBuffer",
    fromBuffer: "_fromBuffer",
    fromJSON: "_fromJSON",
    toJSON: "_toJSON",
    isValid: "_isValid",
    compare: "compare"
  };
  var fC = new zC(yC);
  Object.keys(IC).forEach(function (yC) {
    if (void 0 === CC[yC]) {
      throw new Error(LC("missing method implementation: %s", yC));
    }
    fC[IC[yC]] = CC[yC];
  });
  return Object.freeze(fC);
};
gC.inherits(qC, SC);
qC.prototype._check = function (CC, yC, IC) {
  var fC = "number" == typeof CC;
  !fC && IC && IC(CC, this);
  return fC;
};
qC.prototype._read = function (CC) {
  return CC.readFloat();
};
qC.prototype._skip = function (CC) {
  CC.skipFloat();
};
qC.prototype._write = function (CC, yC) {
  "number" != typeof yC && hC(yC, this);
  CC.writeFloat(yC);
};
qC.prototype._match = function (CC, yC) {
  return CC.matchFloat(yC);
};
qC.prototype._update = function (CC, yC) {
  switch (yC.typeName) {
    case "float":
    case "int":
      CC._read = yC._read;
      break;
    case "abstract:long":
    case "long":
      CC._read = function (CC) {
        return CC.readLong();
      };
  }
};
qC.prototype.typeName = "float";
qC.prototype.random = function () {
  return bC.nextFloat(1e3);
};
gC.inherits(KC, SC);
KC.prototype._check = function (CC, yC, IC) {
  var fC = "number" == typeof CC;
  !fC && IC && IC(CC, this);
  return fC;
};
KC.prototype._read = function (CC) {
  return CC.readDouble();
};
KC.prototype._skip = function (CC) {
  CC.skipDouble();
};
KC.prototype._write = function (CC, yC) {
  "number" != typeof yC && hC(yC, this);
  CC.writeDouble(yC);
};
KC.prototype._match = function (CC, yC) {
  return CC.matchDouble(yC);
};
KC.prototype._update = function (CC, yC) {
  switch (yC.typeName) {
    case "double":
    case "float":
    case "int":
      CC._read = yC._read;
      break;
    case "abstract:long":
    case "long":
      CC._read = function (CC) {
        return CC.readLong();
      };
  }
};
KC.prototype.typeName = "double";
KC.prototype.random = function () {
  return bC.nextFloat();
};
gC.inherits(pC, SC);
pC.prototype._check = function (CC, yC, IC) {
  var fC = "string" == typeof CC;
  !fC && IC && IC(CC, this);
  return fC;
};
pC.prototype._read = function (CC) {
  return CC.readString();
};
pC.prototype._skip = function (CC) {
  CC.skipString();
};
pC.prototype._write = function (CC, yC) {
  "string" != typeof yC && hC(yC, this);
  CC.writeString(yC);
};
pC.prototype._match = function (CC, yC) {
  return CC.matchString(yC);
};
pC.prototype._update = function (CC, yC) {
  switch (yC.typeName) {
    case "bytes":
    case "string":
      CC._read = this._read;
  }
};
pC.prototype.typeName = "string";
pC.prototype.random = function () {
  return bC.nextString(bC.nextInt(32));
};
gC.inherits(wC, SC);
wC.prototype._check = function (CC, yC, IC) {
  var fC = AC.isBuffer(CC);
  !fC && IC && IC(CC, this);
  return fC;
};
wC.prototype._read = function (CC) {
  return CC.readBytes();
};
wC.prototype._skip = function (CC) {
  CC.skipBytes();
};
wC.prototype._write = function (CC, yC) {
  AC.isBuffer(yC) || hC(yC, this);
  CC.writeBytes(yC);
};
wC.prototype._match = function (CC, yC) {
  return CC.matchBytes(yC);
};
wC.prototype._update = pC.prototype._update;
wC.prototype._copy = function (CC, yC) {
  var IC;
  switch (0 | (yC && yC.coerce)) {
    case 3:
      this._check(CC, void 0, hC);
      return CC.toString("binary");
    case 2:
      if ("string" != typeof CC) {
        throw new Error(LC("cannot coerce to buffer: %j", CC));
      }
      IC = fC.bufferFrom(CC, "binary");
      this._check(IC, void 0, hC);
      return IC;
    case 1:
      if (!vC(CC)) {
        throw new Error(LC("cannot coerce to buffer: %j", CC));
      }
      IC = fC.bufferFrom(CC.data);
      this._check(IC, void 0, hC);
      return IC;
    default:
      this._check(CC, void 0, hC);
      return fC.bufferFrom(CC);
  }
};
wC.prototype.compare = AC.compare;
wC.prototype.typeName = "bytes";
wC.prototype.random = function () {
  return bC.nextBuffer(bC.nextInt(32));
};
gC.inherits(HC, OC);
HC.prototype._branchConstructor = function () {
  throw new Error("unions cannot be directly wrapped");
};
HC.prototype._skip = function (CC) {
  this.types[CC.readLong()]._skip(CC);
};
HC.prototype._match = function (CC, yC) {
  var IC = CC.readLong();
  var fC = yC.readLong();
  return IC === fC ? this.types[IC]._match(CC, yC) : IC < fC ? -1 : 1;
};
HC.prototype._deref = function (CC, yC) {
  return this.types.map(function (CC) {
    return CC._attrs(yC);
  });
};
HC.prototype.getTypes = function () {
  return this.types;
};
gC.inherits(aC, HC);
aC.prototype._getIndex = function (CC) {
  var yC = this._bucketIndices[QC(CC)];
  this._dynamicBranches && (yC = this._getBranchIndex(CC, yC));
  return yC;
};
aC.prototype._getBranchIndex = function (CC, yC) {
  var IC;
  var fC;
  var ky;
  var gC = this._dynamicBranches;
  IC = 0;
  fC = gC.length;
  for (; IC < fC; IC++) {
    if ((ky = gC[IC]).type._check(CC)) {
      if (void 0 !== yC) {
        throw new Error("ambiguous conversion");
      }
      yC = ky.index;
    }
  }
  return yC;
};
aC.prototype._check = function (CC, yC, IC, fC) {
  var ky = this._getIndex(CC);
  var gC = void 0 !== ky;
  return gC ? this.types[ky]._check(CC, yC, IC, fC) : (IC && IC(CC, this), gC);
};
aC.prototype._read = function (CC) {
  var yC = CC.readLong();
  var IC = this.types[yC];
  if (IC) {
    return IC._read(CC);
  }
  throw new Error(LC("invalid union index: %s", yC));
};
aC.prototype._write = function (CC, yC) {
  var IC = this._getIndex(yC);
  void 0 === IC && hC(yC, this);
  CC.writeLong(IC);
  null !== yC && this.types[IC]._write(CC, yC);
};
aC.prototype._update = function (CC, yC, IC) {
  var fC;
  var ky;
  var gC;
  fC = 0;
  ky = this.types.length;
  for (; fC < ky; fC++) {
    try {
      gC = this.types[fC].createResolver(yC, IC);
    } catch (AC) {
      continue;
    }
    return void (CC._read = function (CC) {
      return gC._read(CC);
    });
  }
};
aC.prototype._copy = function (CC, yC) {
  var IC;
  var fC = yC && 0 | yC.coerce;
  var ky = yC && 0 | yC.wrap;
  if (2 === ky) {
    IC = 0;
  } else {
    switch (fC) {
      case 1:
        IC = vC(CC) && void 0 !== this._bucketIndices.buffer ? this._bucketIndices.buffer : this._getIndex(CC);
        break;
      case 2:
        if (null === CC) {
          IC = this._bucketIndices.null;
        } else {
          if ("object" === typeof CC) {
            var gC = Object.keys(CC);
            1 === gC.length && (IC = this._branchIndices[gC[0]], CC = CC[gC[0]]);
          }
        }
        break;
      default:
        IC = this._getIndex(CC);
    }
    void 0 === IC && hC(CC, this);
  }
  var AC = this.types[IC];
  if (null === CC || 3 === ky) {
    return AC._copy(CC, yC);
  }
  if (3 === fC) {
    var my = {};
    my[AC.branchName] = AC._copy(CC, yC);
    return my;
  }
  return AC._copy(CC, yC);
};
aC.prototype.compare = function (CC, yC) {
  var IC = this._getIndex(CC);
  var ky = this._getIndex(yC);
  if (void 0 === IC) {
    hC(CC, this);
  } else {
    if (void 0 !== ky) {
      return IC === ky ? this.types[IC].compare(CC, yC) : fC.compare(IC, ky);
    }
    hC(yC, this);
  }
};
aC.prototype.typeName = "union:unwrapped";
aC.prototype.random = function () {
  var CC = bC.nextInt(this.types.length);
  return this.types[CC].random();
};
gC.inherits(cC, HC);
cC.prototype._check = function (CC, yC, IC, fC) {
  var ky = !1;
  if (null === CC) {
    ky = void 0 !== this._branchIndices.null;
  } else {
    if ("object" == typeof CC) {
      var gC = Object.keys(CC);
      if (1 === gC.length) {
        var AC = gC[0];
        var my = this._branchIndices[AC];
        if (void 0 !== my) {
          return IC ? (fC.push(AC), ky = this.types[my]._check(CC[AC], yC, IC, fC), fC.pop(), ky) : this.types[my]._check(CC[AC], yC);
        }
      }
    }
  }
  !ky && IC && IC(CC, this);
  return ky;
};
cC.prototype._read = function (CC) {
  var yC = this.types[CC.readLong()];
  if (!yC) {
    throw new Error(LC("invalid union index"));
  }
  var IC = yC._branchConstructor;
  return null === IC ? null : new IC(yC._read(CC));
};
cC.prototype._write = function (CC, yC) {
  var IC;
  var fC;
  var ky;
  null === yC ? (void 0 === (IC = this._branchIndices.null) && hC(yC, this), CC.writeLong(IC)) : (1 === (fC = Object.keys(yC)).length && (ky = fC[0], IC = this._branchIndices[ky]), void 0 === IC && hC(yC, this), CC.writeLong(IC), this.types[IC]._write(CC, yC[ky]));
};
cC.prototype._update = function (CC, yC, IC) {
  var fC;
  var ky;
  var gC;
  var AC;
  fC = 0;
  ky = this.types.length;
  for (; fC < ky; fC++) {
    try {
      gC = this.types[fC].createResolver(yC, IC);
    } catch (my) {
      continue;
    }
    AC = this.types[fC]._branchConstructor;
    return void (CC._read = AC ? function (CC) {
      return new AC(gC._read(CC));
    } : function () {
      return null;
    });
  }
};
cC.prototype._copy = function (CC, yC) {
  var IC;
  var ky;
  var gC;
  var AC = yC && 0 | yC.wrap;
  if (2 === AC) {
    var my = this.types[0];
    return null === CC && "null" === my.typeName ? null : new my._branchConstructor(my._copy(CC, yC));
  }
  if (null === CC && void 0 !== this._branchIndices.null) {
    return null;
  }
  if ("object" == typeof CC) {
    var XC = Object.keys(CC);
    if (1 === XC.length) {
      var iy;
      var LC;
      var YC = XC[0];
      if (void 0 === (IC = this._branchIndices[YC]) && yC.qualifyNames) {
        iy = 0;
        ky = this.types.length;
        for (; iy < ky; iy++) {
          if ((LC = this.types[iy]).name && YC === fC.unqualify(LC.name)) {
            IC = iy;
            break;
          }
        }
      }
      void 0 !== IC && (gC = this.types[IC]._copy(CC[YC], yC));
    }
  }
  if (1 === AC && void 0 === gC) {
    IC = 0;
    ky = this.types.length;
    for (; IC < ky && void 0 === gC;) {
      try {
        gC = this.types[IC]._copy(CC, yC);
      } catch (bC) {
        IC++;
      }
    }
  }
  if (void 0 !== gC) {
    return 3 === AC ? gC : new this.types[IC]._branchConstructor(gC);
  }
  hC(CC, this);
};
cC.prototype.compare = function (CC, yC) {
  var IC = null === CC ? "null" : Object.keys(CC)[0];
  var ky = null === yC ? "null" : Object.keys(yC)[0];
  var gC = this._branchIndices[IC];
  return IC === ky ? "null" === IC ? 0 : this.types[gC].compare(CC[IC], yC[IC]) : fC.compare(gC, this._branchIndices[ky]);
};
cC.prototype.typeName = "union:wrapped";
cC.prototype.random = function () {
  var CC = bC.nextInt(this.types.length);
  var yC = this.types[CC];
  var IC = yC._branchConstructor;
  return IC ? new IC(yC.random()) : null;
};
gC.inherits(UC, OC);
UC.prototype._check = function (CC, yC, IC) {
  var fC = void 0 !== this._indices[CC];
  !fC && IC && IC(CC, this);
  return fC;
};
UC.prototype._read = function (CC) {
  var yC = CC.readLong();
  var IC = this.symbols[yC];
  if (void 0 === IC) {
    throw new Error(LC("invalid %s enum index: %s", this.name, yC));
  }
  return IC;
};
UC.prototype._skip = function (CC) {
  CC.skipLong();
};
UC.prototype._write = function (CC, yC) {
  var IC = this._indices[yC];
  void 0 === IC && hC(yC, this);
  CC.writeLong(IC);
};
UC.prototype._match = function (CC, yC) {
  return CC.matchLong(yC);
};
UC.prototype.compare = function (CC, yC) {
  return fC.compare(this._indices[CC], this._indices[yC]);
};
UC.prototype._update = function (CC, yC, IC) {
  var fC = this.symbols;
  "enum" === yC.typeName && uC(this, yC, !IC.ignoreNamespaces) && (yC.symbols.every(function (CC) {
    return ~fC.indexOf(CC);
  }) || void 0 !== this.default) && (CC.symbols = yC.symbols.map(function (CC) {
    return void 0 === this._indices[CC] ? this.default : CC;
  }, this), CC._read = yC._read);
};
UC.prototype._copy = function (CC) {
  this._check(CC, void 0, hC);
  return CC;
};
UC.prototype._deref = function (CC) {
  CC.symbols = this.symbols;
};
UC.prototype.getSymbols = function () {
  return this.symbols;
};
UC.prototype.typeName = "enum";
UC.prototype.random = function () {
  return bC.choice(this.symbols);
};
gC.inherits(EC, OC);
EC.prototype._check = function (CC, yC, IC) {
  var fC = AC.isBuffer(CC) && CC.length === this.size;
  !fC && IC && IC(CC, this);
  return fC;
};
EC.prototype._read = function (CC) {
  return CC.readFixed(this.size);
};
EC.prototype._skip = function (CC) {
  CC.skipFixed(this.size);
};
EC.prototype._write = function (CC, yC) {
  AC.isBuffer(yC) && yC.length === this.size || hC(yC, this);
  CC.writeFixed(yC, this.size);
};
EC.prototype._match = function (CC, yC) {
  return CC.matchFixed(yC, this.size);
};
EC.prototype.compare = AC.compare;
EC.prototype._update = function (CC, yC, IC) {
  "fixed" === yC.typeName && this.size === yC.size && uC(this, yC, !IC.ignoreNamespaces) && (CC.size = this.size, CC._read = this._read);
};
EC.prototype._copy = wC.prototype._copy;
EC.prototype._deref = function (CC) {
  CC.size = this.size;
};
EC.prototype.getSize = function () {
  return this.size;
};
EC.prototype.typeName = "fixed";
EC.prototype.random = function () {
  return bC.nextBuffer(this.size);
};
gC.inherits(VC, OC);
VC.prototype._check = function (CC, yC, IC, fC) {
  if (!CC || "object" != typeof CC || Array.isArray(CC)) {
    IC && IC(CC, this);
    return !1;
  }
  var ky;
  var gC;
  var AC;
  var my;
  var XC = Object.keys(CC);
  var iy = !0;
  if (IC) {
    AC = fC.length;
    fC.push("");
    ky = 0;
    gC = XC.length;
    for (; ky < gC; ky++) {
      my = fC[AC] = XC[ky];
      this.valuesType._check(CC[my], yC, IC, fC) || (iy = !1);
    }
    fC.pop();
  } else {
    ky = 0;
    gC = XC.length;
    for (; ky < gC; ky++) {
      if (!this.valuesType._check(CC[XC[ky]], yC)) {
        return !1;
      }
    }
  }
  return iy;
};
VC.prototype._read = function (CC) {
  for (var yC, IC = this.valuesType, fC = {}; yC = lC(CC);) {
    for (; yC--;) {
      fC[CC.readString()] = IC._read(CC);
    }
  }
  return fC;
};
VC.prototype._skip = function (CC) {
  for (var yC, IC, fC = this.valuesType; IC = CC.readLong();) {
    if (IC < 0) {
      yC = CC.readLong();
      CC.pos += yC;
    } else {
      for (; IC--;) {
        CC.skipString();
        fC._skip(CC);
      }
    }
  }
};
VC.prototype._write = function (CC, yC) {
  yC && "object" == typeof yC && !Array.isArray(yC) || hC(yC, this);
  var IC;
  var fC;
  var ky = this.valuesType;
  var gC = Object.keys(yC);
  var AC = gC.length;
  if (AC) {
    CC.writeLong(AC);
    IC = 0;
    for (; IC < AC; IC++) {
      fC = gC[IC];
      CC.writeString(fC);
      ky._write(CC, yC[fC]);
    }
  }
  CC.writeLong(0);
};
VC.prototype._match = function () {
  throw new Error("maps cannot be compared");
};
VC.prototype._update = function (CC, yC, IC) {
  "map" === yC.typeName && (CC.valuesType = this.valuesType.createResolver(yC.valuesType, IC), CC._read = this._read);
};
VC.prototype._copy = function (CC, yC) {
  if (CC && "object" == typeof CC && !Array.isArray(CC)) {
    var IC;
    var fC;
    var ky;
    var gC = this.valuesType;
    var AC = Object.keys(CC);
    var my = {};
    IC = 0;
    fC = AC.length;
    for (; IC < fC; IC++) {
      my[ky = AC[IC]] = gC._copy(CC[ky], yC);
    }
    return my;
  }
  hC(CC, this);
};
VC.prototype.compare = VC.prototype._match;
VC.prototype.typeName = "map";
VC.prototype.getValuesType = function () {
  return this.valuesType;
};
VC.prototype.random = function () {
  var CC;
  var yC;
  var IC = {};
  CC = 0;
  yC = bC.nextInt(10);
  for (; CC < yC; CC++) {
    IC[bC.nextString(bC.nextInt(20))] = this.valuesType.random();
  }
  return IC;
};
VC.prototype._deref = function (CC, yC) {
  CC.values = this.valuesType._attrs(yC);
};
gC.inherits(WC, OC);
WC.prototype._check = function (CC, yC, IC, fC) {
  if (!Array.isArray(CC)) {
    IC && IC(CC, this);
    return !1;
  }
  var ky;
  var gC;
  var AC;
  var my = this.itemsType;
  var XC = !0;
  if (IC) {
    AC = fC.length;
    fC.push("");
    ky = 0;
    gC = CC.length;
    for (; ky < gC; ky++) {
      fC[AC] = "" + ky;
      my._check(CC[ky], yC, IC, fC) || (XC = !1);
    }
    fC.pop();
  } else {
    ky = 0;
    gC = CC.length;
    for (; ky < gC; ky++) {
      if (!my._check(CC[ky], yC)) {
        return !1;
      }
    }
  }
  return XC;
};
WC.prototype._read = function (CC) {
  for (var yC, IC, fC = this.itemsType, ky = 0; IC = CC.readLong();) {
    IC < 0 && (IC = -IC, CC.skipLong());
    yC = yC || new Array(IC);
    for (; IC--;) {
      yC[ky++] = fC._read(CC);
    }
  }
  return yC || [];
};
WC.prototype._skip = function (CC) {
  for (var yC, IC, fC = this.itemsType; IC = CC.readLong();) {
    if (IC < 0) {
      yC = CC.readLong();
      CC.pos += yC;
    } else {
      for (; IC--;) {
        fC._skip(CC);
      }
    }
  }
};
WC.prototype._write = function (CC, yC) {
  Array.isArray(yC) || hC(yC, this);
  var IC;
  var fC = this.itemsType;
  var ky = yC.length;
  if (ky) {
    CC.writeLong(ky);
    IC = 0;
    for (; IC < ky; IC++) {
      fC._write(CC, yC[IC]);
    }
  }
  CC.writeLong(0);
};
WC.prototype._match = function (CC, yC) {
  for (var IC, ky = CC.readLong(), gC = yC.readLong(); ky && gC;) {
    if (IC = this.itemsType._match(CC, yC)) {
      return IC;
    }
    --ky || (ky = lC(CC));
    --gC || (gC = lC(yC));
  }
  return fC.compare(ky, gC);
};
WC.prototype._update = function (CC, yC, IC) {
  "array" === yC.typeName && (CC.itemsType = this.itemsType.createResolver(yC.itemsType, IC), CC._read = this._read);
};
WC.prototype._copy = function (CC, yC) {
  Array.isArray(CC) || hC(CC, this);
  var IC;
  var fC;
  var ky = new Array(CC.length);
  IC = 0;
  fC = CC.length;
  for (; IC < fC; IC++) {
    ky[IC] = this.itemsType._copy(CC[IC], yC);
  }
  return ky;
};
WC.prototype._deref = function (CC, yC) {
  CC.items = this.itemsType._attrs(yC);
};
WC.prototype.compare = function (CC, yC) {
  var IC;
  var ky;
  var gC;
  var AC = CC.length;
  var my = yC.length;
  IC = 0;
  ky = Math.min(AC, my);
  for (; IC < ky; IC++) {
    if (gC = this.itemsType.compare(CC[IC], yC[IC])) {
      return gC;
    }
  }
  return fC.compare(AC, my);
};
WC.prototype.getItemsType = function () {
  return this.itemsType;
};
WC.prototype.typeName = "array";
WC.prototype.random = function () {
  var CC;
  var yC;
  var IC = [];
  CC = 0;
  yC = bC.nextInt(10);
  for (; CC < yC; CC++) {
    IC.push(this.itemsType.random());
  }
  return IC;
};
gC.inherits(xC, OC);
xC.prototype._getConstructorName = function () {
  return this.name ? fC.capitalize(fC.unqualify(this.name)) : this._isError ? "Error$" : "Record$";
};
xC.prototype._createConstructor = function (CC, yC) {
  var IC;
  var fC;
  var ky;
  var AC;
  var my;
  var XC;
  var iy;
  var LC = [];
  var YC = [];
  var bC = [];
  var rC = "";
  IC = 0;
  fC = this.fields.length;
  for (; IC < fC; IC++) {
    XC = void 0 !== (my = (ky = this.fields[IC]).defaultValue)();
    AC = ky.name;
    CC && this._isError && "stack" === AC && OC.isType(ky.type, "string") && !XC && (iy = ky);
    YC.push("v" + IC);
    rC += "  ";
    XC ? (rC += "if (v" + IC + " === undefined) { ", rC += "this." + AC + " = d" + bC.length + "(); ", rC += "} else { this." + AC + " = v" + IC + "; }\n", LC.push("d" + bC.length), bC.push(my)) : rC += "this." + AC + " = v" + IC + ";\n";
  }
  iy && (rC += "  if (this.stack === undefined) { ", "function" == typeof Error.captureStackTrace ? rC += "Error.captureStackTrace(this, this.constructor);" : rC += "this.stack = Error().stack;", rC += " }\n");
  var GC = "return function " + this._getConstructorName() + "(";
  GC += YC.join() + ") {\n" + rC + "};";
  var eC = new Function(LC.join(), GC).apply(void 0, bC);
  if (yC) {
    return eC;
  }
  var SC = this;
  eC.getType = function () {
    return SC;
  };
  eC.type = SC;
  this._isError && (gC.inherits(eC, Error), eC.prototype.name = this._getConstructorName());
  eC.prototype.clone = function (CC) {
    return SC.clone(this, CC);
  };
  eC.prototype.compare = function (CC) {
    return SC.compare(this, CC);
  };
  eC.prototype.isValid = function (CC) {
    return SC.isValid(this, CC);
  };
  eC.prototype.toBuffer = function () {
    return SC.toBuffer(this);
  };
  eC.prototype.toString = function () {
    return SC.toString(this);
  };
  eC.prototype.wrap = function () {
    return SC.wrap(this);
  };
  eC.prototype.wrapped = eC.prototype.wrap;
  return eC;
};
xC.prototype._createChecker = function () {
  var CC = [];
  var yC = [];
  var IC = "return function check" + this._getConstructorName() + "(v, f, h, p) {\n";
  IC += "  if (\n";
  IC += "    v === null ||\n";
  IC += "    typeof v != 'object' ||\n";
  IC += "    (f && !this._checkFields(v))\n";
  IC += "  ) {\n";
  IC += "    if (h) { h(v, this); }\n";
  IC += "    return false;\n";
  IC += "  }\n";
  if (this.fields.length) {
    fC = 0;
    ky = this.fields.length;
    for (; fC < ky; fC++) {
      gC = this.fields[fC];
      CC.push("t" + fC);
      yC.push(gC.type);
      void 0 !== gC.defaultValue() && (IC += "  var v" + fC + " = v." + gC.name + ";\n");
    }
    var fC;
    var ky;
    var gC;
    IC += "  if (h) {\n";
    IC += "    var b = 1;\n";
    IC += "    var j = p.length;\n";
    IC += "    p.push('');\n";
    fC = 0;
    ky = this.fields.length;
    for (; fC < ky; fC++) {
      IC += "    p[j] = '" + (gC = this.fields[fC]).name + "';\n";
      IC += "    b &= ";
      void 0 === gC.defaultValue() ? IC += "t" + fC + "._check(v." + gC.name + ", f, h, p);\n" : (IC += "v" + fC + " === undefined || ", IC += "t" + fC + "._check(v" + fC + ", f, h, p);\n");
    }
    IC += "    p.pop();\n";
    IC += "    return !!b;\n";
    IC += "  } else {\n    return (\n      ";
    IC += this.fields.map(function (CC, yC) {
      return void 0 === CC.defaultValue() ? "t" + yC + "._check(v." + CC.name + ", f)" : "(v" + yC + " === undefined || t" + yC + "._check(v" + yC + ", f))";
    }).join(" &&\n      ");
    IC += "\n    );\n  }\n";
  } else {
    IC += "  return true;\n";
  }
  IC += "};";
  return new Function(CC.join(), IC).apply(void 0, yC);
};
xC.prototype._createReader = function () {
  var CC;
  var yC;
  var IC = [];
  var fC = [this.recordConstructor];
  CC = 0;
  yC = this.fields.length;
  for (; CC < yC; CC++) {
    IC.push("t" + CC);
    fC.push(this.fields[CC].type);
  }
  var ky = this._getConstructorName();
  var gC = "return function read" + ky + "(t) {\n";
  gC += "  return new " + ky + "(\n    ";
  gC += IC.map(function (CC) {
    return CC + "._read(t)";
  }).join(",\n    ");
  gC += "\n  );\n};";
  IC.unshift(ky);
  return new Function(IC.join(), gC).apply(void 0, fC);
};
xC.prototype._createSkipper = function () {
  var CC;
  var yC;
  var IC = [];
  var fC = "return function skip" + this._getConstructorName() + "(t) {\n";
  var ky = [];
  CC = 0;
  yC = this.fields.length;
  for (; CC < yC; CC++) {
    IC.push("t" + CC);
    ky.push(this.fields[CC].type);
    fC += "  t" + CC + "._skip(t);\n";
  }
  fC += "}";
  return new Function(IC.join(), fC).apply(void 0, ky);
};
xC.prototype._createWriter = function () {
  var CC;
  var yC;
  var IC;
  var fC;
  var ky = [];
  var gC = "return function write" + this._getConstructorName() + "(t, v) {\n";
  var AC = [];
  CC = 0;
  yC = this.fields.length;
  for (; CC < yC; CC++) {
    IC = this.fields[CC];
    ky.push("t" + CC);
    AC.push(IC.type);
    gC += "  ";
    void 0 === IC.defaultValue() ? gC += "t" + CC + "._write(t, v." + IC.name + ");\n" : (fC = IC.type.toBuffer(IC.defaultValue()).toString("binary"), ky.push("d" + CC), AC.push(fC), gC += "var v" + CC + " = v." + IC.name + ";\n", gC += "if (v" + CC + " === undefined) {\n", gC += "    t.writeBinary(d" + CC + ", " + fC.length + ");\n", gC += "  } else {\n    t" + CC + "._write(t, v" + CC + ");\n  }\n");
  }
  gC += "}";
  return new Function(ky.join(), gC).apply(void 0, AC);
};
xC.prototype._update = function (CC, yC, IC) {
  if (!uC(this, yC, !IC.ignoreNamespaces)) {
    throw new Error(LC("no alias found for %s", yC.name));
  }
  var ky;
  var gC;
  var AC;
  var my;
  var XC;
  var iy;
  var YC;
  var bC = this.fields;
  var rC = yC.fields;
  var GC = fC.toMap(rC, function (CC) {
    return CC.name;
  });
  var eC = [];
  var OC = {};
  for (ky = 0; ky < bC.length; ky++) {
    XC = FC(AC = bC[ky]);
    iy = [];
    gC = 0;
    for (; gC < XC.length; gC++) {
      GC[my = XC[gC]] && iy.push(my);
    }
    if (iy.length > 1) {
      throw new Error(LC("ambiguous aliasing for %s.%s (%s)", yC.name, AC.name, iy));
    }
    if (iy.length) {
      my = iy[0];
      YC = {
        resolver: AC.type.createResolver(GC[my].type, IC),
        name: "_" + AC.name
      };
      OC[my] ? OC[my].push(YC) : OC[my] = [YC];
      eC.push(YC.name);
    } else {
      if (void 0 === AC.defaultValue()) {
        throw new Error(LC("no matching field for default-less %s.%s", yC.name, AC.name));
      }
      eC.push("undefined");
    }
  }
  var SC = -1;
  for (ky = rC.length; ky && void 0 === OC[rC[--ky].name];) {
    SC = ky;
  }
  var TC = this._getConstructorName();
  var NC = [TC];
  var sC = [this.recordConstructor];
  var jy = "  return function read" + TC + "(t, b) {\n";
  for (ky = 0; ky < rC.length; ky++) {
    ky === SC && (jy += "  if (!b) {\n");
    if (void 0 === OC[my = (AC = yC.fields[ky]).name]) {
      jy += ~SC && ky >= SC ? "    " : "  ";
      NC.push("r" + ky);
      sC.push(AC.type);
      jy += "r" + ky + "._skip(t);\n";
    } else {
      for (gC = OC[my].length; gC--;) {
        jy += ~SC && ky >= SC ? "    " : "  ";
        NC.push("r" + ky + "f" + gC);
        YC = OC[my][gC];
        sC.push(YC.resolver);
        jy += "var " + YC.name + " = ";
        jy += "r" + ky + "f" + gC + "._" + (gC ? "peek" : "read") + "(t);\n";
      }
    }
  }
  ~SC && (jy += "  }\n");
  jy += "  return new " + TC + "(" + eC.join() + ");\n};";
  CC._read = new Function(NC.join(), jy).apply(void 0, sC);
};
xC.prototype._match = function (CC, yC) {
  var IC;
  var fC;
  var ky;
  var gC;
  var AC;
  var my = this.fields;
  IC = 0;
  fC = my.length;
  for (; IC < fC; IC++) {
    gC = (ky = my[IC])._order;
    AC = ky.type;
    if (gC) {
      if (gC *= AC._match(CC, yC)) {
        return gC;
      }
    } else {
      AC._skip(CC);
      AC._skip(yC);
    }
  }
  return 0;
};
xC.prototype._checkFields = function (CC) {
  var yC;
  var IC;
  var fC = Object.keys(CC);
  yC = 0;
  IC = fC.length;
  for (; yC < IC; yC++) {
    if (!this._fieldsByName[fC[yC]]) {
      return !1;
    }
  }
  return !0;
};
xC.prototype._copy = function (CC, yC) {
  var IC;
  var fC;
  var ky;
  var gC;
  var AC = yC && yC.fieldHook;
  var my = [void 0];
  IC = 0;
  fC = this.fields.length;
  for (; IC < fC; IC++) {
    void 0 === (gC = CC[(ky = this.fields[IC]).name]) && ky.hasOwnProperty("defaultValue") && (gC = ky.defaultValue());
    (yC && !yC.skip || void 0 !== gC) && (gC = ky.type._copy(gC, yC));
    AC && (gC = AC(ky, gC, this));
    my.push(gC);
  }
  var XC = this.recordConstructor;
  return new (XC.bind.apply(XC, my))();
};
xC.prototype._deref = function (CC, yC) {
  CC.fields = this.fields.map(function (CC) {
    var IC = CC.type;
    var fC = {
      name: CC.name,
      type: IC._attrs(yC)
    };
    if (yC.exportAttrs) {
      var ky = CC.defaultValue();
      void 0 !== ky && (fC.default = IC._copy(ky, {
        coerce: 3,
        wrap: 3
      }));
      var gC = CC.order;
      "ascending" !== gC && (fC.order = gC);
      var AC = CC.aliases;
      AC.length && (fC.aliases = AC);
      var my = CC.doc;
      void 0 !== my && (fC.doc = my);
    }
    return fC;
  });
};
xC.prototype.compare = function (CC, yC) {
  var IC;
  var fC;
  var ky;
  var gC;
  var AC;
  var my;
  var XC = this.fields;
  IC = 0;
  fC = XC.length;
  for (; IC < fC; IC++) {
    gC = (ky = XC[IC]).name;
    AC = ky._order;
    my = ky.type;
    if (AC && (AC *= my.compare(CC[gC], yC[gC]))) {
      return AC;
    }
  }
  return 0;
};
xC.prototype.random = function () {
  var CC = this.fields.map(function (CC) {
    return CC.type.random();
  });
  CC.unshift(void 0);
  var yC = this.recordConstructor;
  return new (yC.bind.apply(yC, CC))();
};
xC.prototype.field = function (CC) {
  return this._fieldsByName[CC];
};
xC.prototype.getField = xC.prototype.field;
xC.prototype.getFields = function () {
  return this.fields;
};
xC.prototype.getRecordConstructor = function () {
  return this.recordConstructor;
};
Object.defineProperty(xC.prototype, "typeName", {
  enumerable: !0,
  get: function () {
    return this._isError ? "error" : "record";
  }
});
gC.inherits(PC, OC);
Object.defineProperty(PC.prototype, "typeName", {
  enumerable: !0,
  get: function () {
    return "logical:" + this._logicalTypeName;
  }
});
Object.defineProperty(PC.prototype, "underlyingType", {
  enumerable: !0,
  get: function () {
    if (this._underlyingType) {
      return this._underlyingType;
    }
    var CC;
    var yC;
    var IC;
    CC = 0;
    yC = eC.length;
    for (; CC < yC; CC++) {
      if ((IC = eC[CC])[0] === this) {
        return IC[1];
      }
    }
  }
});
PC.prototype.getUnderlyingType = function () {
  return this.underlyingType;
};
PC.prototype._read = function (CC) {
  return this._fromValue(this.underlyingType._read(CC));
};
PC.prototype._write = function (CC, yC) {
  this.underlyingType._write(CC, this._toValue(yC));
};
PC.prototype._check = function (CC, yC, IC, fC) {
  try {
    var ky = this._toValue(CC);
  } catch (gC) {}
  return void 0 === ky ? (IC && IC(CC, this), !1) : this.underlyingType._check(ky, yC, IC, fC);
};
PC.prototype._copy = function (CC, yC) {
  var IC = this.underlyingType;
  switch (yC && yC.coerce) {
    case 3:
      return IC._copy(this._toValue(CC), yC);
    case 2:
      return this._fromValue(IC._copy(CC, yC));
    default:
      return this._fromValue(IC._copy(this._toValue(CC), yC));
  }
};
PC.prototype._update = function (CC, yC, IC) {
  var fC = this._resolve(yC, IC);
  fC && (CC._read = function (CC) {
    return fC(yC._read(CC));
  });
};
PC.prototype.compare = function (CC, yC) {
  var IC = this._toValue(CC);
  var fC = this._toValue(yC);
  return this.underlyingType.compare(IC, fC);
};
PC.prototype.random = function () {
  return this._fromValue(this.underlyingType.random());
};
PC.prototype._deref = function (CC, yC) {
  var IC = this.underlyingType;
  var fC = void 0 !== IC.name && yC.derefed[IC.name];
  CC = IC._attrs(yC);
  !fC && yC.exportAttrs && ("string" == typeof CC && (CC = {
    type: CC
  }), CC.logicalType = this._logicalTypeName, this._export(CC));
  return CC;
};
PC.prototype._skip = function (CC) {
  this.underlyingType._skip(CC);
};
PC.prototype._export = function () {};
PC.prototype._fromValue = fC.abstractFunction;
PC.prototype._toValue = fC.abstractFunction;
PC.prototype._resolve = fC.abstractFunction;
gC.inherits(zC, jy);
zC.prototype.typeName = "abstract:long";
zC.prototype._check = function (CC, yC, IC) {
  var fC = this._isValid(CC);
  !fC && IC && IC(CC, this);
  return fC;
};
zC.prototype._read = function (CC) {
  var yC;
  var IC;
  this._noUnpack ? (IC = CC.pos, CC.skipLong(), yC = CC.buf.slice(IC, CC.pos)) : yC = CC.unpackLongBytes(CC);
  if (CC.isValid()) {
    return this._fromBuffer(yC);
  }
};
zC.prototype._write = function (CC, yC) {
  this._isValid(yC) || hC(yC, this);
  var IC = this._toBuffer(yC);
  this._noUnpack ? CC.writeFixed(IC) : CC.packLongBytes(IC);
};
zC.prototype._copy = function (CC, yC) {
  switch (yC && yC.coerce) {
    case 3:
      return this._toJSON(CC);
    case 2:
      return this._fromJSON(CC);
    default:
      return this._fromJSON(this._toJSON(CC));
  }
};
zC.prototype._deref = function () {
  return "long";
};
zC.prototype._update = function (CC, yC) {
  var IC = this;
  switch (yC.typeName) {
    case "int":
      CC._read = function (CC) {
        return IC._fromJSON(yC._read(CC));
      };
      break;
    case "abstract:long":
    case "long":
      CC._read = function (CC) {
        return IC._read(CC);
      };
  }
};
zC.prototype.random = function () {
  return this._fromJSON(jy.prototype.random());
};
zC.prototype._fromBuffer = fC.abstractFunction;
zC.prototype._toBuffer = fC.abstractFunction;
zC.prototype._fromJSON = fC.abstractFunction;
zC.prototype._toJSON = fC.abstractFunction;
zC.prototype._isValid = fC.abstractFunction;
zC.prototype.compare = fC.abstractFunction;
BC.prototype.defaultValue = function () {};
Object.defineProperty(BC.prototype, "order", {
  enumerable: !0,
  get: function () {
    return ["descending", "ignore", "ascending"][this._order + 1];
  }
});
BC.prototype.getAliases = function () {
  return this.aliases;
};
BC.prototype.getDefault = BC.prototype.defaultValue;
BC.prototype.getName = function () {
  return this.name;
};
BC.prototype.getOrder = function () {
  return this.order;
};
BC.prototype.getType = function () {
  return this.type;
};
tC.prototype._peek = OC.prototype._peek;
tC.prototype.inspect = function () {
  return "<Resolver>";
};
module.exports = {
  Type: OC,
  getTypeBucket: dC,
  getValueBucket: QC,
  isPrimitive: DC,
  builtins: function () {
    var CC;
    var yC;
    var IC;
    var fC = {
      LogicalType: PC,
      UnwrappedUnionType: aC,
      WrappedUnionType: cC
    };
    var ky = Object.keys(YC);
    CC = 0;
    yC = ky.length;
    for (; CC < yC; CC++) {
      fC[ZC(IC = ky[CC])] = YC[IC];
    }
    return fC;
  }()
};