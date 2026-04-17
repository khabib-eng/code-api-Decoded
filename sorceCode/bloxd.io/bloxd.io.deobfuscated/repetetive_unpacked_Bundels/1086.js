var fC = require("./1095.js");
var ky = require("./673.js");
var gC = require("./1100.js");
var AC = require("./700.js").format;
var my = {
  date: {
    type: "int",
    logicalType: "date"
  },
  decimal: {
    type: "bytes",
    logicalType: "decimal"
  },
  time_ms: {
    type: "long",
    logicalType: "time-millis"
  },
  timestamp_ms: {
    type: "long",
    logicalType: "timestamp-millis"
  }
};
function XC(CC, yC, IC) {
  function ky(CC, IC) {
    yC.importHook(CC, "idl", function (fC, my) {
      if (fC) {
        IC(fC);
      } else {
        if (void 0 !== my) {
          try {
            var XC = new iy(my, yC)._readProtocol(my, yC);
          } catch (fC) {
            fC.path = CC;
            return void IC(fC);
          }
          !function (CC, IC, my, XC) {
            var iy = [];
            function LC() {
              var YC = IC.shift();
              if (YC) {
                var rC = gC.join(my, YC.name);
                "idl" === YC.kind ? ky(rC, function (CC, yC) {
                  CC ? XC(CC) : (yC && iy.push(yC), LC());
                }) : yC.importHook(rC, YC.kind, function (CC, yC) {
                  if (CC) {
                    XC(CC);
                  } else {
                    switch (YC.kind) {
                      case "protocol":
                      case "schema":
                        if (void 0 === yC) {
                          return void LC();
                        }
                        try {
                          var IC = JSON.parse(yC);
                        } catch (CC) {
                          CC.path = rC;
                          return void XC(CC);
                        }
                        var fC = "schema" === YC.kind ? {
                          types: [IC]
                        } : IC;
                        iy.push(fC);
                        return void LC();
                      default:
                        XC(new Error(AC("invalid import kind: %s", YC.kind)));
                    }
                  }
                });
              } else {
                iy.reverse();
                try {
                  iy.forEach(function (yC) {
                    !function (CC, yC) {
                      var IC = yC.types || [];
                      IC.reverse();
                      IC.forEach(function (IC) {
                        CC.types || (CC.types = []);
                        void 0 === IC.namespace && (IC.namespace = bC(yC) || "");
                        CC.types.unshift(IC);
                      });
                      Object.keys(yC.messages || {}).forEach(function (IC) {
                        CC.messages || (CC.messages = {});
                        if (CC.messages[IC]) {
                          throw new Error(AC("duplicate message: %s", IC));
                        }
                        CC.messages[IC] = yC.messages[IC];
                      });
                    }(CC, yC);
                  });
                } catch (fC) {
                  return void XC(fC);
                }
                XC(null, CC);
              }
            }
            LC();
          }(XC.protocol, XC.imports, gC.dirname(CC), IC);
        } else {
          IC();
        }
      }
    });
  }
  IC || "function" != typeof yC || (IC = yC, yC = void 0);
  (yC = yC || {}).importHook || (yC.importHook = fC.createImportHook());
  ky(CC, function (CC, yC) {
    if (CC) {
      IC(CC);
    } else {
      if (yC) {
        var fC = yC.types;
        if (fC) {
          var ky = bC(yC) || "";
          fC.forEach(function (CC) {
            CC.namespace === ky && delete CC.namespace;
          });
        }
        IC(null, yC);
      } else {
        IC(new Error("empty root import"));
      }
    }
  });
}
function iy(CC, yC) {
  yC = yC || {};
  this._tk = new LC(CC);
  this._ackVoidMessages = !!yC.ackVoidMessages;
  this._implicitTags = !yC.delimitedCollections;
  this._typeRefs = yC.typeRefs || my;
}
function LC(CC) {
  this._str = CC;
  this.pos = 0;
}
function YC(CC) {
  for (var yC = CC.replace(/^[ \t]+|[ \t]+$/g, "").split("\n").map(function (CC, yC) {
    return yC ? CC.replace(/^\s*\*\s?/, "") : CC;
  }); yC.length && !yC[0];) {
    yC.shift();
  }
  for (; yC.length && !yC[yC.length - 1];) {
    yC.pop();
  }
  return yC.join("\n");
}
function bC(CC) {
  if (CC.namespace) {
    return CC.namespace;
  }
  var yC = /^(.*)\.[^.]+$/.exec(CC.protocol);
  return yC ? yC[1] : void 0;
}
iy.readProtocol = function (CC, yC) {
  var IC = new iy(CC, yC)._readProtocol();
  if (IC.imports.length) {
    throw new Error("unresolvable import");
  }
  return IC.protocol;
};
iy.readSchema = function (CC, yC) {
  var IC = new iy(CC, yC);
  var fC = IC._readJavadoc();
  var ky = IC._readType(void 0 === fC ? {} : {
    doc: fC
  }, !0);
  IC._tk.next({
    id: "(eof)"
  });
  return ky;
};
iy.prototype._readProtocol = function () {
  var CC;
  var yC = this._tk;
  var IC = [];
  var fC = [];
  var ky = {};
  this._readImports(IC);
  var gC = {};
  var my = this._readJavadoc();
  void 0 !== my && (gC.doc = my);
  this._readAnnotations(gC);
  yC.next({
    val: "protocol"
  });
  yC.next({
    val: "{",
    silent: !0
  }) || (gC.protocol = yC.next({
    id: "name"
  }).val, yC.next({
    val: "{"
  }));
  for (; !yC.next({
    val: "}",
    silent: !0
  });) {
    if (!this._readImports(IC)) {
      var XC = this._readJavadoc();
      var iy = this._readType({}, !0);
      var LC = this._readImports(IC, !0);
      var YC = void 0;
      CC = yC.pos;
      if (!LC && (YC = this._readMessage(iy))) {
        void 0 !== XC && void 0 === YC.schema.doc && (YC.schema.doc = XC);
        var bC = !1;
        "void" !== YC.schema.response && "void" !== YC.schema.response.type || (bC = !this._ackVoidMessages && !YC.schema.errors, "void" === YC.schema.response ? YC.schema.response = "null" : YC.schema.response.type = "null");
        bC && (YC.schema["one-way"] = !0);
        if (ky[YC.name]) {
          throw new Error(AC("duplicate message: %s", YC.name));
        }
        ky[YC.name] = YC.schema;
      } else {
        XC && ("string" == typeof iy ? iy = {
          doc: XC,
          type: iy
        } : void 0 === iy.doc && (iy.doc = XC));
        fC.push(iy);
        yC.pos = CC;
        yC.next({
          val: ";",
          silent: !0
        });
      }
      XC = void 0;
    }
  }
  yC.next({
    id: "(eof)"
  });
  fC.length && (gC.types = fC);
  Object.keys(ky).length && (gC.messages = ky);
  return {
    protocol: gC,
    imports: IC
  };
};
iy.prototype._readAnnotations = function (CC) {
  for (var yC = this._tk; yC.next({
    val: "@",
    silent: !0
  });) {
    for (var IC = []; !yC.next({
      val: "(",
      silent: !0
    });) {
      IC.push(yC.next().val);
    }
    CC[IC.join("")] = yC.next({
      id: "json"
    }).val;
    yC.next({
      val: ")"
    });
  }
};
iy.prototype._readMessage = function (CC) {
  var yC = this._tk;
  var IC = {
    request: [],
    response: CC
  };
  this._readAnnotations(IC);
  var fC = yC.next().val;
  if ("(" === yC.next().val) {
    if (!yC.next({
      val: ")",
      silent: !0
    })) {
      do {
        IC.request.push(this._readField());
      } while (!yC.next({
        val: ")",
        silent: !0
      }) && yC.next({
        val: ","
      }));
    }
    var ky = yC.next();
    switch (ky.val) {
      case "throws":
        IC.errors = [];
        do {
          IC.errors.push(this._readType());
        } while (!yC.next({
          val: ";",
          silent: !0
        }) && yC.next({
          val: ","
        }));
        break;
      case "oneway":
        IC["one-way"] = !0;
        yC.next({
          val: ";"
        });
        break;
      case ";":
        break;
      default:
        throw yC.error("invalid message suffix", ky);
    }
    return {
      name: fC,
      schema: IC
    };
  }
};
iy.prototype._readJavadoc = function () {
  var CC = this._tk.next({
    id: "javadoc",
    emitJavadoc: !0,
    silent: !0
  });
  if (CC) {
    return CC.val;
  }
};
iy.prototype._readField = function () {
  var CC = this._tk;
  var yC = this._readJavadoc();
  var IC = {
    type: this._readType()
  };
  void 0 !== yC && void 0 === IC.doc && (IC.doc = yC);
  this._readAnnotations(IC);
  IC.name = CC.next({
    id: "name"
  }).val;
  CC.next({
    val: "=",
    silent: !0
  }) && (IC.default = CC.next({
    id: "json"
  }).val);
  return IC;
};
iy.prototype._readType = function (CC, yC) {
  CC = CC || {};
  this._readAnnotations(CC);
  CC.type = this._tk.next({
    id: "name"
  }).val;
  switch (CC.type) {
    case "record":
    case "error":
      return this._readRecord(CC);
    case "fixed":
      return this._readFixed(CC);
    case "enum":
      return this._readEnum(CC, yC);
    case "map":
      return this._readMap(CC);
    case "array":
      return this._readArray(CC);
    case "union":
      if (Object.keys(CC).length > 1) {
        throw new Error("union annotations are not supported");
      }
      return this._readUnion();
    default:
      var IC = this._typeRefs[CC.type];
      IC && (delete CC.type, ky.copyOwnProperties(IC, CC));
      return Object.keys(CC).length > 1 ? CC : CC.type;
  }
};
iy.prototype._readFixed = function (CC) {
  var yC = this._tk;
  yC.next({
    val: "(",
    silent: !0
  }) || (CC.name = yC.next({
    id: "name"
  }).val, yC.next({
    val: "("
  }));
  CC.size = parseInt(yC.next({
    id: "number"
  }).val);
  yC.next({
    val: ")"
  });
  return CC;
};
iy.prototype._readMap = function (CC) {
  var yC = this._tk;
  var IC = this._implicitTags;
  var fC = void 0 === yC.next({
    val: "<",
    silent: IC
  });
  CC.values = this._readType();
  yC.next({
    val: ">",
    silent: fC
  });
  return CC;
};
iy.prototype._readArray = function (CC) {
  var yC = this._tk;
  var IC = this._implicitTags;
  var fC = void 0 === yC.next({
    val: "<",
    silent: IC
  });
  CC.items = this._readType();
  yC.next({
    val: ">",
    silent: fC
  });
  return CC;
};
iy.prototype._readEnum = function (CC, yC) {
  var IC = this._tk;
  IC.next({
    val: "{",
    silent: !0
  }) || (CC.name = IC.next({
    id: "name"
  }).val, IC.next({
    val: "{"
  }));
  CC.symbols = [];
  do {
    CC.symbols.push(IC.next().val);
  } while (!IC.next({
    val: "}",
    silent: !0
  }) && IC.next({
    val: ","
  }));
  yC && IC.next({
    val: "=",
    silent: !0
  }) && (CC.default = IC.next().val, IC.next({
    val: ";"
  }));
  return CC;
};
iy.prototype._readUnion = function () {
  var CC = this._tk;
  var yC = [];
  CC.next({
    val: "{"
  });
  do {
    yC.push(this._readType());
  } while (!CC.next({
    val: "}",
    silent: !0
  }) && CC.next({
    val: ","
  }));
  return yC;
};
iy.prototype._readRecord = function (CC) {
  var yC = this._tk;
  yC.next({
    val: "{",
    silent: !0
  }) || (CC.name = yC.next({
    id: "name"
  }).val, yC.next({
    val: "{"
  }));
  CC.fields = [];
  for (; !yC.next({
    val: "}",
    silent: !0
  });) {
    CC.fields.push(this._readField());
    yC.next({
      val: ";"
    });
  }
  return CC;
};
iy.prototype._readImports = function (CC, yC) {
  for (var IC = this._tk, fC = 0, ky = IC.pos; IC.next({
    val: "import",
    silent: !0
  });) {
    if (!fC && yC && IC.next({
      val: "(",
      silent: !0
    })) {
      return void (IC.pos = ky);
    }
    var gC = IC.next({
      id: "name"
    }).val;
    var AC = JSON.parse(IC.next({
      id: "string"
    }).val);
    IC.next({
      val: ";"
    });
    CC.push({
      kind: gC,
      name: AC
    });
    fC++;
  }
  return fC;
};
LC.prototype.next = function (CC) {
  var yC;
  var IC = {
    pos: this.pos,
    id: void 0,
    val: void 0
  };
  var fC = this._skip(CC && CC.emitJavadoc);
  if ("string" == typeof fC) {
    IC.id = "javadoc";
    IC.val = fC;
  } else {
    var ky = this.pos;
    var gC = this._str;
    var my = gC.charAt(ky);
    if (my) {
      CC && "json" === CC.id ? (IC.id = "json", this.pos = this._endOfJson()) : '"' === my ? (IC.id = "string", this.pos = this._endOfString()) : /[0-9]/.test(my) ? (IC.id = "number", this.pos = this._endOf(/[0-9]/)) : /[`A-Za-z_.]/.test(my) ? (IC.id = "name", this.pos = this._endOf(/[`A-Za-z0-9_.]/)) : (IC.id = "operator", this.pos = ky + 1);
      IC.val = gC.slice(ky, this.pos);
      if ("json" === IC.id) {
        try {
          IC.val = JSON.parse(IC.val);
        } catch (yC) {
          throw this.error("invalid JSON", IC);
        }
      } else {
        "name" === IC.id && (IC.val = IC.val.replace(/`/g, ""));
      }
    } else {
      IC.id = "(eof)";
    }
  }
  CC && CC.id && CC.id !== IC.id ? yC = this.error(AC("expected ID %s", CC.id), IC) : CC && CC.val && CC.val !== IC.val && (yC = this.error(AC("expected value %s", CC.val), IC));
  if (yC) {
    if (CC && CC.silent) {
      return void (this.pos = IC.pos);
    }
    throw yC;
  }
  return IC;
};
LC.prototype.error = function (CC, yC) {
  var IC;
  var fC = "number" != typeof yC;
  var ky = fC ? yC.pos : yC;
  var gC = this._str;
  var my = 1;
  var XC = 0;
  for (IC = 0; IC < ky; IC++) {
    "\n" === gC.charAt(IC) && (my++, XC = IC);
  }
  var iy = fC ? AC("invalid token %j: %s", yC, CC) : CC;
  var LC = new Error(iy);
  LC.token = fC ? yC : void 0;
  LC.lineNum = my;
  LC.colNum = ky - XC;
  return LC;
};
LC.prototype._skip = function (CC) {
  for (var yC, IC, fC = this._str, ky = !1; (IC = fC.charAt(this.pos)) && /\s/.test(IC);) {
    this.pos++;
  }
  yC = this.pos;
  if ("/" === IC) {
    switch (fC.charAt(this.pos + 1)) {
      case "/":
        for (this.pos += 2; (IC = fC.charAt(this.pos)) && "\n" !== IC;) {
          this.pos++;
        }
        return this._skip(CC);
      case "*":
        this.pos += 2;
        "*" === fC.charAt(this.pos) && (ky = !0);
        for (; IC = fC.charAt(this.pos++);) {
          if ("*" === IC && "/" === fC.charAt(this.pos)) {
            this.pos++;
            return ky && CC ? YC(fC.slice(yC + 3, this.pos - 2)) : this._skip(CC);
          }
        }
        throw this.error("unterminated comment", yC);
    }
  }
};
LC.prototype._endOf = function (CC) {
  for (var yC = this.pos, IC = this._str; CC.test(IC.charAt(yC));) {
    yC++;
  }
  return yC;
};
LC.prototype._endOfString = function () {
  for (var CC, yC = this.pos + 1, IC = this._str; CC = IC.charAt(yC);) {
    if ('"' === CC) {
      return yC + 1;
    }
    "\\" === CC ? yC += 2 : yC++;
  }
  throw this.error("unterminated string", yC - 1);
};
LC.prototype._endOfJson = function () {
  var CC = ky.jsonEnd(this._str, this.pos);
  if (CC < 0) {
    throw this.error("invalid JSON", CC);
  }
  return CC;
};
module.exports = {
  Tokenizer: LC,
  assembleProtocol: XC,
  read: function (CC) {
    var yC;
    if ("string" == typeof CC && ~CC.indexOf(gC.sep) && fC.existsSync(CC)) {
      var IC = fC.readFileSync(CC, {
        encoding: "utf8"
      });
      try {
        return JSON.parse(IC);
      } catch (ky) {
        XC(CC, {
          importHook: fC.createSyncImportHook()
        }, function (CC, fC) {
          yC = CC ? IC : fC;
        });
      }
    } else {
      yC = CC;
    }
    if ("string" != typeof yC || "null" === yC) {
      return yC;
    }
    try {
      return JSON.parse(yC);
    } catch (ky) {
      try {
        return iy.readProtocol(yC);
      } catch (ky) {
        try {
          return iy.readSchema(yC);
        } catch (ky) {
          return yC;
        }
      }
    }
  },
  readProtocol: iy.readProtocol,
  readSchema: iy.readSchema
};