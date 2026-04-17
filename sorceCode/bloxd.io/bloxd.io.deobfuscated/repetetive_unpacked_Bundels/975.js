var fC = require("./671.js");
var ky = require("./673.js");
var gC = require("./675.js");
var AC = require("./983.js");
var my = require("./987.js");
var XC = require("./700.js");
var iy = gC.iI;
var LC = ky.Tap;
var YC = fC.Type;
var bC = XC.debuglog("avsc:services");
var rC = XC.format;
var GC = {
  namespace: "org.apache.avro.ipc"
};
var eC = YC.forSchema("boolean", GC);
var OC = YC.forSchema({
  type: "map",
  values: "bytes"
}, GC);
var SC = YC.forSchema("string", GC);
var TC = YC.forSchema({
  name: "HandshakeRequest",
  type: "record",
  fields: [{
    name: "clientHash",
    type: {
      name: "MD5",
      type: "fixed",
      size: 16
    }
  }, {
    name: "clientProtocol",
    type: ["null", "string"],
    default: null
  }, {
    name: "serverHash",
    type: "MD5"
  }, {
    name: "meta",
    type: ["null", OC],
    default: null
  }]
}, GC);
var NC = YC.forSchema({
  name: "HandshakeResponse",
  type: "record",
  fields: [{
    name: "match",
    type: {
      name: "HandshakeMatch",
      type: "enum",
      symbols: ["BOTH", "CLIENT", "NONE"]
    }
  }, {
    name: "serverProtocol",
    type: ["null", "string"],
    default: null
  }, {
    name: "serverHash",
    type: ["null", "MD5"],
    default: null
  }, {
    name: "meta",
    type: ["null", OC],
    default: null
  }]
}, GC);
var sC = new jy("", YC.forSchema({
  name: "PingRequest",
  type: "record",
  fields: []
}, GC), YC.forSchema(["string"], GC), YC.forSchema("null", GC));
function jy(CC, yC, IC, fC, ky, gC) {
  this.name = CC;
  if (!YC.isType(yC, "record")) {
    throw new Error("invalid request type");
  }
  this.requestType = yC;
  if (!YC.isType(IC, "union") || !YC.isType(IC.getTypes()[0], "string")) {
    throw new Error("invalid error type");
  }
  this.errorType = IC;
  if (ky && (!YC.isType(fC, "null") || IC.getTypes().length > 1)) {
    throw new Error("inapplicable one-way parameter");
  }
  this.responseType = fC;
  this.oneWay = !!ky;
  this.doc = void 0 !== gC ? "" + gC : void 0;
  Object.freeze(this);
}
function qC(CC, yC, IC, fC, gC) {
  if ("string" != typeof CC) {
    return qC.forProtocol(CC, yC);
  }
  this.name = CC;
  this._messagesByName = yC || {};
  this.messages = Object.freeze(ky.objectValues(this._messagesByName));
  this._typesByName = IC || {};
  this.types = Object.freeze(ky.objectValues(this._typesByName));
  this.protocol = fC;
  this._hashStr = ky.getHash(JSON.stringify(fC)).toString("binary");
  this.doc = fC.doc ? "" + fC.doc : void 0;
  this._server = gC || this.createServer({
    silent: !0
  });
  Object.freeze(this);
}
function KC(CC, yC) {
  yC = yC || {};
  AC.EventEmitter.call(this);
  this._svc$ = CC;
  this._channels$ = [];
  this._fns$ = [];
  this._buffering$ = !!yC.buffering;
  this._cache$ = yC.cache || {};
  this._policy$ = yC.channelPolicy;
  this._strict$ = !!yC.strictTypes;
  this._timeout$ = ky.getOption(yC, "timeout", 1e4);
  yC.remoteProtocols && lC(this._cache$, yC.remoteProtocols, CC, !0);
  this._svc$.messages.forEach(function (CC) {
    this[CC.name] = this._createMessageHandler$(CC);
  }, this);
}
function pC(CC, yC) {
  yC = yC || {};
  AC.EventEmitter.call(this);
  this.service = CC;
  this._handlers = {};
  this._fns = [];
  this._channels = {};
  this._nextChannelId = 1;
  this._cache = yC.cache || {};
  this._defaultHandler = yC.defaultHandler;
  this._sysErrFormatter = yC.systemErrorFormatter;
  this._silent = !!yC.silent;
  this._strict = !!yC.strictTypes;
  yC.remoteProtocols && lC(this._cache, yC.remoteProtocols, CC, !1);
  CC.messages.forEach(function (CC) {
    var IC = CC.name;
    yC.noCapitalize || (IC = ky.capitalize(IC));
    this["on" + IC] = this._createMessageHandler(CC);
  }, this);
}
function wC(CC, yC) {
  yC = yC || {};
  AC.EventEmitter.call(this);
  this.client = CC;
  this.timeout = ky.getOption(yC, "timeout", CC._timeout$);
  this._endWritable = !!ky.getOption(yC, "endWritable", !0);
  this._prefix = QC(yC.scope);
  var IC = CC._cache$;
  var fC = CC._svc$;
  var gC = yC.serverHash;
  gC || (gC = fC.hash);
  var my = IC[gC];
  my || (my = IC[gC = fC.hash] = new zC(fC, fC, gC));
  this._adapter = my;
  this._registry = new PC(this, 16);
  this.pending = 0;
  this.destroyed = !1;
  this.draining = !1;
  this.once("_eot", function (CC, yC) {
    bC("client channel EOT");
    this.destroyed = !0;
    this.emit("eot", CC, yC);
  });
}
function HC(CC, yC, IC) {
  wC.call(this, CC, IC);
  this._writableFactory = yC;
  IC && IC.noPing || (bC("emitting ping request"), this.ping());
}
function aC(CC, yC, IC, fC) {
  wC.call(this, CC, fC);
  this._readable = yC;
  this._writable = IC;
  this._connected = !(!fC || !fC.noPing);
  this._readable.on("end", rC);
  this._writable.on("finish", GC);
  var gC;
  var AC = this;
  var my = null;
  function XC(CC) {
    if (!AC.destroyed) {
      gC = AC._createHandshakeRequest(AC._adapter, !CC);
      var yC = [TC.toBuffer(gC), ky.bufferFrom([0, 0])];
      AC._writable.write({
        id: AC._prefix,
        payload: yC
      });
    }
  }
  function LC(CC) {
    if (AC._matchesPrefix(CC.id)) {
      var yC = iy.concat(CC.payload);
      try {
        var IC = uC(NC, yC).head;
        IC.serverHash && (AC._adapter = AC._getAdapter(IC));
      } catch (ky) {
        return void AC.destroy(ky);
      }
      var fC = IC.match;
      bC("handshake match: %s", fC);
      AC.emit("handshake", gC, IC);
      "NONE" === fC ? process.nextTick(function () {
        XC(!0);
      }) : (bC("successfully connected"), my && (clearTimeout(my), my = null), AC._readable.removeListener("data", LC).on("data", YC), AC._connected = !0, AC.emit("_ready"), gC = null);
    } else {
      bC("discarding unscoped response %s (still connecting)", CC.id);
    }
  }
  function YC(CC) {
    var yC = CC.id;
    if (AC._matchesPrefix(yC)) {
      var IC = AC._registry.get(yC);
      IC && process.nextTick(function () {
        bC("received message %s", yC);
        IC(null, iy.concat(CC.payload), AC._adapter);
      });
    } else {
      bC("discarding unscoped message %s", yC);
    }
  }
  function rC() {
    AC.destroy(!0);
  }
  function GC() {
    AC.destroy();
  }
  this.once("eot", function () {
    my && (clearTimeout(my), my = null);
    AC._connected || AC.emit("_ready");
    this._writable.removeListener("finish", GC);
    this._endWritable && (bC("ending transport"), this._writable.end());
    this._readable.removeListener("data", LC).removeListener("data", YC).removeListener("end", rC);
  });
  this._connected ? this._readable.on("data", YC) : (this._readable.on("data", LC), process.nextTick(XC), AC.timeout && (my = setTimeout(function () {
    AC.destroy(new Error("timeout"));
  }, AC.timeout)));
}
function cC(CC, yC) {
  yC = yC || {};
  AC.EventEmitter.call(this);
  this.fL = CC;
  this._endWritable = !!ky.getOption(yC, "endWritable", !0);
  this._prefix = QC(yC.scope);
  var IC = CC._cache;
  var fC = CC.service;
  var gC = fC.hash;
  IC[gC] || (IC[gC] = new zC(fC, fC, gC));
  this._adapter = null;
  this.destroyed = !1;
  this.draining = !1;
  this.pending = 0;
  this.once("_eot", function (CC, yC) {
    bC("server channel EOT");
    this.emit("eot", CC, yC);
  });
}
function UC(CC, yC, IC) {
  cC.call(this, CC, IC);
  this._writable = void 0;
  var fC;
  var ky = this;
  function gC(CC) {
    var yC;
    var IC = CC.id;
    var fC = iy.concat(CC.payload);
    try {
      var gC = uC(TC, fC);
      var AC = gC.head;
      var my = ky._getAdapter(AC);
    } catch (YC) {
      yC = RC("INVALID_HANDSHAKE_REQUEST", YC);
    }
    var XC = ky._createHandshakeResponse(yC, AC);
    function LC(CC) {
      if (!ky.destroyed) {
        if (!ky._writable) {
          return void ky.once("_writable", function () {
            LC(CC);
          });
        }
        ky._writable.write({
          id: IC,
          payload: [NC.toBuffer(XC), CC]
        });
      }
      ky._writable && ky._endWritable && ky._writable.end();
    }
    ky.emit("handshake", AC, XC);
    yC ? LC(ky._encodeSystemError(yC)) : ky._receive(gC.tail, my, LC);
  }
  function AC() {
    ky.destroy();
  }
  function my(CC) {
    fC.removeListener("data", gC).removeListener("end", AC);
    ky.destroy(CC || !0);
  }
  process.nextTick(function () {
    fC = yC.call(ky, function (CC, yC) {
      process.nextTick(function () {
        CC ? my(CC) : (ky._writable = yC.on("finish", my), ky.emit("_writable"));
      });
    }).on("data", gC).on("end", AC);
  });
}
function EC(CC, yC, IC, fC) {
  cC.call(this, CC, fC);
  this._adapter = void 0;
  this._writable = IC.on("finish", XC);
  this._readable = yC.on("data", gC).on("end", my);
  this.once("_drain", function () {
    this._readable.removeListener("data", gC).removeListener("data", AC).removeListener("end", my);
  }).once("eot", function () {
    this._writable.removeListener("finish", XC);
    this._endWritable && this._writable.end();
  });
  var ky = this;
  function gC(CC) {
    var yC = CC.id;
    if (ky._matchesPrefix(yC)) {
      var IC;
      var fC = iy.concat(CC.payload);
      try {
        var my = uC(TC, fC);
        var XC = my.head;
        ky._adapter = ky._getAdapter(XC);
      } catch (bC) {
        IC = RC("INVALID_HANDSHAKE_REQUEST", bC);
      }
      var LC = ky._createHandshakeResponse(IC, XC);
      ky.emit("handshake", XC, LC);
      IC ? YC(ky._encodeSystemError(IC)) : (ky._readable.removeListener("data", gC).on("data", AC), ky._receive(my.tail, ky._adapter, YC));
    }
    function YC(CC) {
      ky.destroyed || ky._writable.write({
        id: yC,
        payload: [NC.toBuffer(LC), CC]
      });
    }
  }
  function AC(CC) {
    var yC = CC.id;
    if (ky._matchesPrefix(yC)) {
      var IC = iy.concat(CC.payload);
      ky._receive(IC, ky._adapter, function (CC, IC) {
        ky.destroyed || IC || ky._writable.write({
          id: yC,
          payload: [CC]
        });
      });
    }
  }
  function my() {
    ky.destroy();
  }
  function XC() {
    ky.destroy(!0);
  }
}
function VC(CC, yC, IC) {
  this._msg = CC;
  this.headers = yC || {};
  this.request = IC || {};
}
function WC(CC, yC, IC, fC) {
  this._msg = CC;
  this.headers = yC;
  this.error = IC;
  this.response = fC;
}
function xC(CC, yC) {
  this.channel = yC;
  this.locals = {};
  this.message = CC;
  Object.freeze(this);
}
function PC(CC, yC) {
  this._ctx = CC;
  this._mask = -1 >>> (0 | yC);
  this._id = 0;
  this._n = 0;
  this._cbs = {};
}
function zC(CC, yC, IC, fC) {
  this._clientSvc = CC;
  this._serverSvc = yC;
  this._hash = IC;
  this._isRemote = !!fC;
  this._readers = ZC(CC, yC);
}
function BC() {
  my.Transform.call(this, {
    readableObjectMode: !0
  });
  this._id = void 0;
  this._buf = ky.newBuffer(0);
  this._bufs = [];
  this.on("finish", function () {
    this.push(null);
  });
}
function tC() {
  my.Transform.call(this, {
    writableObjectMode: !0
  });
  this.on("finish", function () {
    this.push(null);
  });
}
function JC() {
  my.Transform.call(this, {
    readableObjectMode: !0
  });
  this._id = void 0;
  this._frameCount = 0;
  this._buf = ky.newBuffer(0);
  this._bufs = [];
  this.on("finish", function () {
    this.push(null);
  });
}
function nC() {
  my.Transform.call(this, {
    writableObjectMode: !0
  });
  this.on("finish", function () {
    this.push(null);
  });
}
function FC(CC) {
  var yC = ky.newBuffer(4);
  yC.writeInt32BE(CC);
  return yC;
}
function uC(CC, yC) {
  var IC = new LC(yC);
  var fC = CC._read(IC);
  if (!IC.isValid()) {
    throw new Error(rC("truncated %j", CC.schema()));
  }
  return {
    head: fC,
    tail: IC.buf.slice(IC.pos)
  };
}
function DC(CC, yC) {
  return CC.equals(yC) ? CC : CC.createResolver(yC);
}
function ZC(CC, yC) {
  var IC = {};
  CC.messages.forEach(function (CC) {
    var fC = CC.name;
    var ky = yC.message(fC);
    try {
      if (!ky) {
        throw new Error(rC("missing server message: %s", fC));
      }
      if (ky.oneWay !== CC.oneWay) {
        throw new Error(rC("inconsistent one-way message: %s", fC));
      }
      IC[fC + "?"] = DC(ky.requestType, CC.requestType);
      IC[fC + "*"] = DC(CC.errorType, ky.errorType);
      IC[fC + "!"] = DC(CC.responseType, ky.responseType);
    } catch (gC) {
      throw RC("INCOMPATIBLE_PROTOCOL", gC);
    }
  });
  return IC;
}
function lC(CC, yC, IC, fC) {
  Object.keys(yC).forEach(function (ky) {
    var gC;
    var AC;
    var my = yC[ky];
    fC ? (gC = IC, AC = qC.forProtocol(my)) : (gC = qC.forProtocol(my), AC = IC);
    CC[ky] = new zC(gC, AC, ky, !0);
  });
}
function oC(CC, yC) {
  var IC = {};
  Object.keys(CC).forEach(function (fC) {
    var ky = CC[fC];
    if (ky._isRemote) {
      var gC = yC ? ky._serverSvc : ky._clientSvc;
      IC[fC] = gC.protocol;
    }
  });
  return IC;
}
function vC(CC) {
  return !!CC && "[object Error]" === Object.prototype.toString.call(CC);
}
function hC(CC, yC) {
  var IC = new Error(CC);
  IC.cause = yC;
  return IC;
}
function RC(CC, yC) {
  var IC = hC(CC.toLowerCase().replace(/_/g, " "), yC);
  IC.rpcCode = yC && yC.rpcCode ? yC.rpcCode : CC;
  return IC;
}
function dC(CC, yC, IC) {
  var fC;
  var ky;
  var gC;
  var AC = [];
  fC = 0;
  ky = IC.length;
  for (; fC < ky; fC++) {
    (gC = IC[fC]).type.isValid(yC[gC.name], {
      errorHook: iy
    });
  }
  var my = AC.map(function (CC) {
    return rC("%s = %j but expected %s", CC.path, CC.value, CC.type);
  }).join(", ");
  var XC = new Error(rC("%s (%s)", CC, my));
  XC.details = AC;
  return XC;
  function iy(CC, yC, IC) {
    var fC;
    var ky;
    var my;
    var XC = [];
    fC = 0;
    ky = CC.length;
    for (; fC < ky; fC++) {
      my = CC[fC];
      isNaN(my) ? XC.push("." + my) : XC.push("[" + my + "]");
    }
    AC.push({
      path: gC.name + XC.join(""),
      value: yC,
      type: IC
    });
  }
}
function QC(CC) {
  return CC ? ky.getHash(CC).readInt16BE(0) << 16 : 0;
}
function MC(CC, yC) {
  return (CC ^ yC) >> 16 === 0;
}
function Cy(CC) {
  return !(!CC || !CC.pipe);
}
function yy(CC, yC) {
  var IC = CC.message(yC);
  if (!IC) {
    throw new Error(rC("unknown message: %s", yC));
  }
  return IC;
}
function Iy(CC) {
  var yC;
  var IC = [CC.wreq, CC.wres];
  var fC = [];
  function ky() {
    var IC = fC.pop();
    if (IC) {
      var gC = !1;
      IC.call(CC.ctx, yC, function (IC) {
        gC ? CC.onError(hC("duplicate backward middleware call", IC)) : (yC = IC, gC = !0, ky());
      });
    } else {
      CC.onCompletion.call(CC.ctx, yC);
    }
  }
  !function gC(AC) {
    var my = !1;
    AC < CC.fns.length ? CC.fns[AC].apply(CC.ctx, IC.concat(function (IC, XC) {
      if (my) {
        CC.onError(hC("duplicate forward middleware call", IC));
      } else {
        my = !0;
        if (IC || CC.wres && (void 0 !== CC.wres.error || void 0 !== CC.wres.response)) {
          yC = IC;
          return void ky();
        }
        XC && fC.push(XC);
        gC(++AC);
      }
    })) : CC.onTransition.apply(CC.ctx, IC.concat(function (IC) {
      my ? CC.onError(hC("duplicate handler call", IC)) : (my = !0, yC = IC, process.nextTick(ky));
    }));
  }(0);
}
jy.forSchema = function (CC, yC, IC) {
  IC = IC || {};
  if (!ky.isValidName(CC)) {
    throw new Error(rC("invalid message name: %s", CC));
  }
  if (!Array.isArray(yC.request)) {
    throw new Error(rC("invalid message request: %s", CC));
  }
  var fC = rC("%s.%sRequest", GC.namespace, ky.capitalize(CC));
  var gC = YC.forSchema({
    name: fC,
    type: "record",
    namespace: IC.namespace || "",
    fields: yC.request
  }, IC);
  delete IC.cC[fC];
  if (!yC.response) {
    throw new Error(rC("invalid message response: %s", CC));
  }
  var AC = YC.forSchema(yC.response, IC);
  if (void 0 !== yC.errors && !Array.isArray(yC.errors)) {
    throw new Error(rC("invalid message errors: %s", CC));
  }
  return new jy(CC, gC, YC.forSchema(["string"].concat(yC.errors || []), IC), AC, !!yC["one-way"], yC.doc);
};
jy.prototype.schema = YC.prototype.getSchema;
jy.prototype._attrs = function (CC) {
  var yC = {
    request: this.requestType._attrs(CC).fields,
    response: this.responseType._attrs(CC)
  };
  var IC = this.doc;
  void 0 !== IC && (yC.doc = IC);
  var fC = this.errorType._attrs(CC);
  fC.length > 1 && (yC.errors = fC.slice(1));
  this.oneWay && (yC["one-way"] = !0);
  return yC;
};
ky.addDeprecatedGetters(jy, ["name", "errorType", "requestType", "responseType"]);
jy.prototype.isOneWay = XC.deprecate(function () {
  return this.oneWay;
}, "use `.oneWay` directly instead of `.isOneWay()`");
qC.Client = KC;
qC.Server = pC;
qC.compatible = function (CC, yC) {
  try {
    ZC(CC, yC);
  } catch (IC) {
    return !1;
  }
  return !0;
};
qC.forProtocol = function (CC, yC) {
  yC = yC || {};
  var IC;
  var fC = CC.protocol;
  if (!fC) {
    throw new Error("missing protocol name");
  }
  if (void 0 !== CC.namespace) {
    yC.namespace = CC.namespace;
  } else {
    var gC = /^(.*)\.[^.]+$/.exec(fC);
    gC && (yC.namespace = gC[1]);
  }
  fC = ky.qualify(fC, yC.namespace);
  CC.types && CC.types.forEach(function (CC) {
    YC.forSchema(CC, yC);
  });
  CC.messages && (IC = {}, Object.keys(CC.messages).forEach(function (fC) {
    IC[fC] = jy.forSchema(fC, CC.messages[fC], yC);
  }));
  return new qC(fC, IC, yC.cC, CC);
};
qC.isService = function (CC) {
  return !!CC && CC.hasOwnProperty("_hashStr");
};
qC.prototype.createClient = function (CC) {
  var yC = new KC(this, CC);
  process.nextTick(function () {
    if (CC && CC.fL) {
      var IC = {
        objectMode: !0
      };
      var fC = [new my.PassThrough(IC), new my.PassThrough(IC)];
      CC.fL.createChannel({
        readable: fC[0],
        writable: fC[1]
      }, IC);
      yC.createChannel({
        readable: fC[1],
        writable: fC[0]
      }, IC);
    } else {
      CC && CC.transport && yC.createChannel(CC.transport);
    }
  });
  return yC;
};
qC.prototype.createServer = function (CC) {
  return new pC(this, CC);
};
Object.defineProperty(qC.prototype, "hash", {
  enumerable: !0,
  get: function () {
    return ky.bufferFrom(this._hashStr, "binary");
  }
});
qC.prototype.message = function (CC) {
  return this._messagesByName[CC];
};
qC.prototype.type = function (CC) {
  return this._typesByName[CC];
};
qC.prototype.inspect = function () {
  return rC("<Service %j>", this.name);
};
ky.addDeprecatedGetters(qC, ["message", "messages", "name", "type", "types"]);
qC.prototype.createEmitter = XC.deprecate(function (CC, yC) {
  yC = yC || {};
  var IC;
  var fC;
  var ky = this.createClient({
    cache: yC.cache,
    buffering: !1,
    strictTypes: yC.strictErrors,
    timeout: yC.timeout
  });
  var gC = ky.createChannel(CC, yC);
  fC = gC;
  (IC = ky).on("error", function (CC) {
    fC.emit("error", CC, IC);
  });
  return gC;
}, "use `.createClient()` instead of `.createEmitter()`");
qC.prototype.createListener = XC.deprecate(function (CC, yC) {
  if (yC && yC.strictErrors) {
    throw new Error("use `.createServer()` to support strict errors");
  }
  return this._server.createChannel(CC, yC);
}, "use `.createServer().createChannel()` instead of `.createListener()`");
qC.prototype.emit = XC.deprecate(function (CC, yC, IC, fC) {
  if (!IC || !this.equals(IC.client._svc$)) {
    throw new Error("invalid emitter");
  }
  var ky = IC.client;
  KC.prototype.emitMessage.call(ky, CC, yC, fC && fC.bind(this));
  return IC.getPending();
}, "create a client via `.createClient()` to emit messages instead of `.emit()`");
qC.prototype.equals = XC.deprecate(function (CC) {
  return qC.isService(CC) && this.getFingerprint().equals(CC.getFingerprint());
}, "equality testing is deprecated, compare the `.protocol`s instead");
qC.prototype.getFingerprint = XC.deprecate(function (CC) {
  return ky.getHash(JSON.stringify(this.protocol), CC);
}, "use `.hash` instead of `.getFingerprint()`");
qC.prototype.getSchema = XC.deprecate(YC.prototype.getSchema, "use `.protocol` instead of `.getSchema()`");
qC.prototype.on = XC.deprecate(function (CC, yC) {
  var IC = this;
  this._server.KI(CC, function (CC, fC) {
    return yC.call(IC, CC, this.channel, fC);
  });
  return this;
}, "use `.createServer().onMessage()` instead of `.on()`");
qC.prototype.subprotocol = XC.deprecate(function () {
  var CC = this._server;
  var yC = {
    strictTypes: CC._strict,
    cache: CC._cache
  };
  var IC = new pC(CC.service, yC);
  IC._handlers = Object.create(CC._handlers);
  return new qC(this.name, this._messagesByName, this._typesByName, this.protocol, IC);
}, "`.subprotocol()` will be removed in 5.1");
qC.prototype._attrs = function (CC) {
  var yC = {
    protocol: this.name
  };
  var IC = [];
  this.types.forEach(function (yC) {
    if (void 0 !== yC.getName()) {
      var fC = yC._attrs(CC);
      "string" != typeof fC && IC.push(fC);
    }
  });
  IC.length && (yC.types = IC);
  var fC = Object.keys(this._messagesByName);
  fC.length && (yC.messages = {}, fC.forEach(function (IC) {
    yC.messages[IC] = this._messagesByName[IC]._attrs(CC);
  }, this));
  CC && CC.exportAttrs && void 0 !== this.doc && (yC.doc = this.doc);
  return yC;
};
XC.inherits(KC, AC.EventEmitter);
KC.prototype.activeChannels = function () {
  return this._channels$.slice();
};
KC.prototype.createChannel = function (CC, yC) {
  var IC;
  var fC = yC && yC.objectMode;
  if ("function" == typeof CC) {
    var ky;
    ky = fC ? CC : function (yC) {
      var fC = new tC();
      var ky = CC(function (CC, fC) {
        if (CC) {
          yC(CC);
        } else {
          var ky = new BC().once("error", function (CC) {
            IC.destroy(CC);
          });
          yC(null, fC.pipe(ky));
        }
      });
      if (ky) {
        fC.pipe(ky);
        return fC;
      }
    };
    IC = new HC(this, ky, yC);
  } else {
    var gC;
    var AC;
    Cy(CC) ? gC = AC = CC : (gC = CC.readable, AC = CC.writable);
    if (!fC) {
      var my = new JC();
      gC = gC.pipe(my);
      var XC = new nC();
      XC.pipe(AC);
      AC = XC;
    }
    IC = new aC(this, gC, AC, yC);
    fC || (IC.once("eot", function () {
      gC.unpipe(my);
      XC.unpipe(AC);
    }), my.once("error", function (CC) {
      IC.destroy(CC);
    }));
  }
  var iy = this._channels$;
  iy.push(IC);
  IC.once("_drain", function () {
    iy.splice(iy.indexOf(this), 1);
  });
  this._buffering$ = !1;
  this.emit("channel", IC);
  return IC;
};
KC.prototype.destroyChannels = function (CC) {
  this._channels$.forEach(function (yC) {
    yC.destroy(CC && CC.noWait);
  });
};
KC.prototype.emitMessage = function (CC, yC, IC, fC) {
  var ky = new VC(yy(this._svc$, CC), {}, yC);
  this._emitMessage$(ky, IC, fC);
};
KC.prototype.remoteProtocols = function () {
  return oC(this._cache$, !0);
};
Object.defineProperty(KC.prototype, "service", {
  enumerable: !0,
  get: function () {
    return this._svc$;
  }
});
KC.prototype.use = function () {
  var CC;
  var yC;
  var IC;
  CC = 0;
  yC = arguments.length;
  for (; CC < yC; CC++) {
    IC = arguments[CC];
    this._fns$.push(IC.length < 3 ? IC(this) : IC);
  }
  return this;
};
KC.prototype._emitMessage$ = function (CC, yC, IC) {
  IC || "function" !== typeof yC || (IC = yC, yC = void 0);
  var fC = this;
  var ky = this._channels$;
  var gC = ky.length;
  if (gC) {
    var AC;
    void 0 === (yC = yC || {}).timeout && (yC.timeout = this._timeout$);
    if (1 === gC) {
      AC = ky[0];
    } else {
      if (this._policy$) {
        if (!(AC = this._policy$(this._channels$.slice()))) {
          return void bC("policy returned no channel, skipping call");
        }
      } else {
        AC = ky[Math.floor(Math.random() * gC)];
      }
    }
    AC._emit(CC, yC, function (CC, yC) {
      var ky = this;
      var gC = ky.message.errorType;
      if (CC) {
        fC._strict$ && (CC = gC.clone(CC.message, {
          wrapUnions: !0
        }));
        return void AC(CC);
      }
      function AC(CC, yC) {
        IC ? IC.call(ky, CC, yC) : CC && fC.emit("error", CC);
      }
      yC ? (CC = yC.error, fC._strict$ || (void 0 === CC ? CC = null : YC.isType(gC, "union:unwrapped") ? "string" == typeof CC && (CC = new Error(CC)) : CC && CC.string && "string" == typeof CC.string && (CC = new Error(CC.string))), AC(CC, yC.response)) : AC();
    });
  } else {
    if (this._buffering$) {
      bC("no active client channels, buffering call");
      this.once("channel", function () {
        this._emitMessage$(CC, yC, IC);
      });
    } else {
      var my = new Error("no active channels");
      process.nextTick(function () {
        IC ? IC.call(new xC(CC._msg), my) : fC.emit("error", my);
      });
    }
  }
};
KC.prototype._createMessageHandler$ = function (CC) {
  var yC = CC.requestType.getFields().map(function (CC) {
    return CC.getName();
  });
  var IC = "return function " + CC.name + "(";
  yC.length && (IC += yC.join(", ") + ", ");
  IC += "opts, cb) {\n";
  IC += "  var req = {";
  IC += yC.map(function (CC) {
    return CC + ": " + CC;
  }).join(", ");
  IC += "};\n";
  IC += "  return this.emitMessage('" + CC.name + "', req, opts, cb);\n";
  IC += "};";
  return new Function(IC)();
};
XC.inherits(pC, AC.EventEmitter);
pC.prototype.activeChannels = function () {
  return ky.objectValues(this._channels);
};
pC.prototype.createChannel = function (CC, yC) {
  var IC;
  var fC = yC && yC.objectMode;
  if ("function" == typeof CC) {
    var ky;
    ky = fC ? CC : function (yC) {
      var fC = new BC().once("error", function (CC) {
        IC.destroy(CC);
      });
      return CC(function (CC, IC) {
        if (CC) {
          yC(CC);
        } else {
          var fC = new tC();
          fC.pipe(IC);
          yC(null, fC);
        }
      }).pipe(fC);
    };
    IC = new UC(this, ky, yC);
  } else {
    var gC;
    var AC;
    Cy(CC) ? gC = AC = CC : (gC = CC.readable, AC = CC.writable);
    if (!fC) {
      var my = new JC();
      gC = gC.pipe(my);
      var XC = new nC();
      XC.pipe(AC);
      AC = XC;
    }
    IC = new EC(this, gC, AC, yC);
    fC || (IC.once("eot", function () {
      gC.unpipe(my);
      XC.unpipe(AC);
    }), my.once("error", function (CC) {
      IC.destroy(CC);
    }));
  }
  this.listeners("error").length || this.on("error", this._onError);
  var iy = this._nextChannelId++;
  var LC = this._channels;
  LC[iy] = IC.once("eot", function () {
    delete LC[iy];
  });
  this.emit("channel", IC);
  return IC;
};
pC.prototype.KI = function (CC, yC) {
  yy(this.service, CC);
  this._handlers[CC] = yC;
  return this;
};
pC.prototype.remoteProtocols = function () {
  return oC(this._cache, !1);
};
pC.prototype.use = function () {
  var CC;
  var yC;
  var IC;
  CC = 0;
  yC = arguments.length;
  for (; CC < yC; CC++) {
    IC = arguments[CC];
    this._fns.push(IC.length < 3 ? IC(this) : IC);
  }
  return this;
};
pC.prototype._createMessageHandler = function (CC) {
  var yC = CC.name;
  var IC = CC.requestType.fields;
  var fC = IC.length;
  var ky = IC.length ? ", " + IC.map(function (CC) {
    return "req." + CC.name;
  }).join(", ") : "";
  var gC = "return function (handler) {\n";
  gC += "  if (handler.length > " + fC + ") {\n";
  gC += "    return this.onMessage('" + yC + "', function (req, cb) {\n";
  gC += "      return handler.call(this" + ky + ", cb);\n";
  gC += "    });\n";
  gC += "  } else {\n";
  gC += "    return this.onMessage('" + yC + "', function (req) {\n";
  gC += "      return handler.call(this" + ky + ");\n";
  gC += "    });\n";
  gC += "  }\n";
  gC += "};\n";
  return new Function(gC)();
};
pC.prototype._onError = function (CC) {
  this._silent || "UNKNOWN_PROTOCOL" === CC.rpcCode || (console.error(), CC.rpcCode ? (console.error(CC.rpcCode), console.error(CC.cause)) : (console.error("INTERNAL_SERVER_ERROR"), console.error(CC)));
};
XC.inherits(wC, AC.EventEmitter);
wC.prototype.destroy = function (CC) {
  bC("destroying client channel");
  this.draining || (this.draining = !0, this.emit("_drain"));
  var yC = this._registry;
  var IC = this.pending;
  CC && yC.clear();
  CC || !IC ? vC(CC) ? (bC("fatal client channel error: %s", CC), this.emit("_eot", IC, CC)) : this.emit("_eot", IC) : bC("client channel entering drain mode (%s pending)", IC);
};
wC.prototype.ping = function (CC, yC) {
  yC || "function" != typeof CC || (yC = CC, CC = void 0);
  var IC = this;
  var fC = new VC(sC);
  this._emit(fC, {
    timeout: CC
  }, function (CC) {
    yC ? yC.call(IC, CC) : CC && IC.destroy(CC);
  });
};
wC.prototype._createHandshakeRequest = function (CC, yC) {
  var IC = this.client._svc$;
  return {
    clientHash: IC.hash,
    clientProtocol: yC ? null : JSON.stringify(IC.protocol),
    serverHash: CC._hash
  };
};
wC.prototype._emit = function (CC, yC, IC) {
  var fC = CC._msg;
  var ky = fC.oneWay ? void 0 : new WC(fC, {});
  var gC = new xC(fC, this);
  var AC = this;
  function my(CC, IC, ky) {
    var gC;
    var my;
    if (AC.destroyed) {
      gC = new Error("channel destroyed");
    } else {
      try {
        my = CC.toBuffer();
      } catch (LC) {
        gC = dC(rC("invalid %j request", fC.name), CC, [{
          name: "headers",
          type: OC
        }, {
          name: "request",
          type: fC.requestType
        }]);
      }
    }
    if (gC) {
      ky(gC);
    } else {
      var XC = yC && void 0 !== yC.timeout ? yC.timeout : AC.timeout;
      var iy = AC._registry.add(XC, function (CC, yC, gC) {
        if (!CC && !fC.oneWay) {
          try {
            gC._decodeResponse(yC, IC, fC);
          } catch (LC) {
            CC = LC;
          }
        }
        ky(CC);
      });
      iy |= AC._prefix;
      bC("sending message %s", iy);
      AC._send(iy, my, !!fC && fC.oneWay);
    }
  }
  function XC(CC) {
    AC.pending--;
    IC.call(gC, CC, ky);
    !AC.draining || AC.destroyed || AC.pending || AC.destroy();
  }
  function iy(CC) {
    AC.client.emit("error", CC, AC);
  }
  this.pending++;
  process.nextTick(function () {
    if (fC.name) {
      AC.emit("outgoingCall", gC, yC);
      var IC = AC.client._fns$;
      bC("starting client middleware chain (%s middleware)", IC.length);
      Iy({
        fns: IC,
        ctx: gC,
        wreq: CC,
        wres: ky,
        onTransition: my,
        onCompletion: XC,
        onError: iy
      });
    } else {
      my(CC, ky, XC);
    }
  });
};
wC.prototype._getAdapter = function (CC) {
  var yC = CC.serverHash;
  var IC = this.client._cache$;
  var fC = IC[yC];
  if (fC) {
    return fC;
  }
  var ky = JSON.parse(CC.serverProtocol);
  var gC = qC.forProtocol(ky);
  fC = new zC(this.client._svc$, gC, yC, !0);
  return IC[yC] = fC;
};
wC.prototype._matchesPrefix = function (CC) {
  return MC(CC, this._prefix);
};
wC.prototype._send = ky.abstractFunction;
ky.addDeprecatedGetters(wC, ["pending", "timeout"]);
wC.prototype.getCache = XC.deprecate(function () {
  return this.client._cache$;
}, "use `.remoteProtocols()` instead of `.getCache()`");
wC.prototype.getProtocol = XC.deprecate(function () {
  return this.client._svc$;
}, "use `.service` instead or `.getProtocol()`");
wC.prototype.isDestroyed = XC.deprecate(function () {
  return this.destroyed;
}, "use `.destroyed` instead of `.isDestroyed`");
XC.inherits(HC, wC);
HC.prototype._send = function (CC, yC) {
  var IC = this._registry.get(CC);
  var fC = this._adapter;
  var ky = this;
  process.nextTick(function gC(AC) {
    if (ky.destroyed) {
      return;
    }
    var my = ky._createHandshakeRequest(fC, !AC);
    var XC = ky._writableFactory.call(ky, function (CC, yC) {
      CC ? IC(CC) : yC.on("data", function (CC) {
        bC("received response %s", CC.id);
        var yC = iy.concat(CC.payload);
        try {
          var AC = uC(NC, yC);
          var XC = AC.head;
          XC.serverHash && (fC = ky._getAdapter(XC));
        } catch (YC) {
          return void IC(YC);
        }
        var LC = XC.match;
        bC("handshake match: %s", LC);
        ky.emit("handshake", my, XC);
        "NONE" === LC ? process.nextTick(function () {
          gC(!0);
        }) : (ky._adapter = fC, IC(null, AC.tail, fC));
      });
    });
    if (!XC) {
      return void IC(new Error("invalid writable stream"));
    }
    XC.write({
      id: CC,
      payload: [TC.toBuffer(my), yC]
    });
    ky._endWritable && XC.end();
  });
  return !0;
};
XC.inherits(aC, wC);
aC.prototype._emit = function () {
  if (this._connected || this.draining) {
    wC.prototype._emit.apply(this, arguments);
  } else {
    bC("queuing request");
    var CC;
    var yC;
    var IC = [];
    CC = 0;
    yC = arguments.length;
    for (; CC < yC; CC++) {
      IC.push(arguments[CC]);
    }
    this.once("_ready", function () {
      this._emit.apply(this, IC);
    });
  }
};
aC.prototype._send = function (CC, yC, IC) {
  if (IC) {
    var fC = this;
    process.nextTick(function () {
      fC._registry.get(CC)(null, ky.bufferFrom([0, 0, 0]), fC._adapter);
    });
  }
  return this._writable.write({
    id: CC,
    payload: [yC]
  });
};
XC.inherits(cC, AC.EventEmitter);
cC.prototype.destroy = function (CC) {
  this.draining || (this.draining = !0, this.emit("_drain"));
  !CC && this.pending || (this.destroyed = !0, vC(CC) ? (bC("fatal server channel error: %s", CC), this.emit("_eot", this.pending, CC)) : this.emit("_eot", this.pending));
};
cC.prototype._createHandshakeResponse = function (CC, yC) {
  var IC = this.fL.service;
  var fC = IC.hash;
  var ky = yC && yC.serverHash.equals(fC);
  return {
    match: CC ? "NONE" : ky ? "BOTH" : "CLIENT",
    serverProtocol: ky ? null : JSON.stringify(IC.protocol),
    serverHash: ky ? null : fC
  };
};
cC.prototype._getAdapter = function (CC) {
  var yC = CC.clientHash;
  var IC = this.fL._cache[yC];
  if (IC) {
    return IC;
  }
  if (!CC.clientProtocol) {
    throw RC("UNKNOWN_PROTOCOL");
  }
  var fC = JSON.parse(CC.clientProtocol);
  IC = new zC(qC.forProtocol(fC), this.fL.service, yC, !0);
  return this.fL._cache[yC] = IC;
};
cC.prototype._matchesPrefix = function (CC) {
  return MC(CC, this._prefix);
};
cC.prototype._receive = function (CC, yC, IC) {
  var fC;
  var ky = this;
  try {
    fC = yC._decodeRequest(CC);
  } catch (LC) {
    return void IC(ky._encodeSystemError(RC("INVALID_REQUEST", LC)));
  }
  var gC = fC._msg;
  var AC = new WC(gC, {});
  if (!gC.name) {
    AC.response = null;
    return void IC(AC.toBuffer(), !1);
  }
  var my = new xC(gC, this);
  ky.emit("incomingCall", my);
  var XC = this.fL._fns;
  function iy(CC) {
    ky.fL.emit("error", CC, ky);
  }
  bC("starting server middleware chain (%s middleware)", XC.length);
  ky.pending++;
  Iy({
    fns: XC,
    ctx: my,
    wreq: fC,
    wres: AC,
    onTransition: function (CC, yC, IC) {
      var fC = ky.fL._handlers[gC.name];
      if (fC) {
        var AC = !gC.oneWay;
        try {
          AC ? fC.call(my, CC.request, function (CC, fC) {
            AC = !1;
            yC.error = CC;
            yC.response = fC;
            IC();
          }) : (fC.call(my, CC.request), IC());
        } catch (YC) {
          AC ? (AC = !1, IC(YC)) : iy(YC);
        }
      } else {
        var XC = ky.fL._defaultHandler;
        if (XC) {
          XC.call(my, CC, yC, IC);
        } else {
          var LC = new Error(rC("no handler for %s", gC.name));
          IC(RC("NOT_IMPLEMENTED", LC));
        }
      }
    },
    onCompletion: function (CC) {
      ky.pending--;
      var yC;
      var fC = ky.fL;
      if (!CC) {
        var my = AC.error;
        fC._strict || (vC(my) ? AC.error = gC.errorType.clone(my.message, {
          wrapUnions: !0
        }) : null === my && (my = AC.error = void 0), void 0 === my && void 0 === AC.response && gC.responseType.isValid(null) && (AC.response = null));
        try {
          yC = AC.toBuffer();
        } catch (LC) {
          CC = void 0 !== AC.error ? dC(rC("invalid %j error", gC.name), AC, [{
            name: "headers",
            type: OC
          }, {
            name: "error",
            type: gC.errorType
          }]) : dC(rC("invalid %j response", gC.name), AC, [{
            name: "headers",
            type: OC
          }, {
            name: "response",
            type: gC.responseType
          }]);
        }
      }
      yC ? void 0 !== my && fC.emit("error", RC("APPLICATION_ERROR", my)) : yC = ky._encodeSystemError(CC, AC.headers);
      IC(yC, gC.oneWay);
      ky.draining && !ky.pending && ky.destroy();
    },
    onError: iy
  });
};
ky.addDeprecatedGetters(cC, ["pending"]);
cC.prototype.getCache = XC.deprecate(function () {
  return this.fL._cache;
}, "use `.remoteProtocols()` instead of `.getCache()`");
cC.prototype.getProtocol = XC.deprecate(function () {
  return this.fL.service;
}, "use `.service` instead of `.getProtocol()`");
cC.prototype.isDestroyed = XC.deprecate(function () {
  return this.destroyed;
}, "use `.destroyed` instead of `.isDestroyed`");
cC.prototype._encodeSystemError = function (CC, yC) {
  var IC;
  var fC;
  var gC = this.fL;
  gC.emit("error", CC, this);
  gC._sysErrFormatter ? IC = gC._sysErrFormatter.call(this, CC) : CC.rpcCode && (IC = CC.message);
  if (yC) {
    try {
      fC = OC.toBuffer(yC);
    } catch (AC) {
      gC.emit("error", AC, this);
    }
  }
  return iy.concat([fC || ky.bufferFrom([0]), ky.bufferFrom([1, 0]), SC.toBuffer(IC || "internal server error")]);
};
XC.inherits(UC, cC);
XC.inherits(EC, cC);
VC.prototype.toBuffer = function () {
  var CC = this._msg;
  return iy.concat([OC.toBuffer(this.headers), SC.toBuffer(CC.name), CC.requestType.toBuffer(this.request)]);
};
WC.prototype.toBuffer = function () {
  var CC = OC.toBuffer(this.headers);
  var yC = void 0 !== this.error;
  return iy.concat([CC, eC.toBuffer(yC), yC ? this._msg.errorType.toBuffer(this.error) : this._msg.responseType.toBuffer(this.response)]);
};
PC.prototype.get = function (CC) {
  return this._cbs[CC & this._mask];
};
PC.prototype.add = function (CC, yC) {
  this._id = this._id + 1 & this._mask;
  var IC;
  var fC = this;
  var ky = this._id;
  CC > 0 && (IC = setTimeout(function () {
    gC(new Error("timeout"));
  }, CC));
  this._cbs[ky] = gC;
  this._n++;
  return ky;
  function gC() {
    fC._cbs[ky] && (delete fC._cbs[ky], fC._n--, IC && clearTimeout(IC), yC.apply(fC._ctx, arguments));
  }
};
PC.prototype.clear = function () {
  Object.keys(this._cbs).forEach(function (CC) {
    this._cbs[CC](new Error("interrupted"));
  }, this);
};
zC.prototype._decodeRequest = function (CC) {
  var yC;
  var IC;
  var fC = new LC(CC);
  var ky = OC._read(fC);
  var gC = SC._read(fC);
  gC ? (yC = this._serverSvc.message(gC), IC = this._readers[gC + "?"]._read(fC)) : yC = sC;
  if (!fC.isValid()) {
    throw new Error(rC("truncated %s request", gC || "ping$"));
  }
  return new VC(yC, ky, IC);
};
zC.prototype._decodeResponse = function (CC, yC, IC) {
  var fC = new LC(CC);
  ky.copyOwnProperties(OC._read(fC), yC.headers, !0);
  var gC = eC._read(fC);
  var AC = IC.name;
  if (AC) {
    var my = this._readers[AC + (gC ? "*" : "!")];
    IC = this._clientSvc.message(AC);
    gC ? yC.error = my._read(fC) : yC.response = my._read(fC);
    if (!fC.isValid()) {
      throw new Error(rC("truncated %s response", AC));
    }
  } else {
    IC = sC;
  }
};
XC.inherits(BC, my.Transform);
BC.prototype._transform = function (CC, yC, IC) {
  var fC;
  for (CC = iy.concat([this._buf, CC]); CC.length >= 4 && CC.length >= (fC = CC.readInt32BE(0)) + 4;) {
    if (fC) {
      this._bufs.push(CC.slice(4, fC + 4));
    } else {
      var ky = this._bufs;
      this._bufs = [];
      this.push({
        id: null,
        payload: ky
      });
    }
    CC = CC.slice(fC + 4);
  }
  this._buf = CC;
  IC();
};
BC.prototype._flush = function (CC) {
  if (this._buf.length || this._bufs.length) {
    var yC = this._bufs.slice();
    yC.unshift(this._buf);
    var IC = RC("TRAILING_DATA");
    IC.trailingData = iy.concat(yC).toString();
    this.emit("error", IC);
  }
  CC();
};
XC.inherits(tC, my.Transform);
tC.prototype._transform = function (CC, yC, IC) {
  var fC;
  var ky;
  var gC;
  var AC = CC.payload;
  fC = 0;
  ky = AC.length;
  for (; fC < ky; fC++) {
    gC = AC[fC];
    this.push(FC(gC.length));
    this.push(gC);
  }
  this.push(FC(0));
  IC();
};
XC.inherits(JC, my.Transform);
JC.prototype._transform = function (CC, yC, IC) {
  for (CC = iy.concat([this._buf, CC]);;) {
    if (void 0 === this._id) {
      if (CC.length < 8) {
        this._buf = CC;
        return void IC();
      }
      this._id = CC.readInt32BE(0);
      this._frameCount = CC.readInt32BE(4);
      CC = CC.slice(8);
    }
    for (var fC; this._frameCount && CC.length >= 4 && CC.length >= (fC = CC.readInt32BE(0)) + 4;) {
      this._frameCount--;
      this._bufs.push(CC.slice(4, fC + 4));
      CC = CC.slice(fC + 4);
    }
    if (this._frameCount) {
      this._buf = CC;
      return void IC();
    }
    var ky = {
      id: this._id,
      payload: this._bufs
    };
    this._bufs = [];
    this._id = void 0;
    this.push(ky);
  }
};
JC.prototype._flush = BC.prototype._flush;
XC.inherits(nC, my.Transform);
nC.prototype._transform = function (CC, yC, IC) {
  var fC;
  var gC;
  var AC = CC.payload;
  var my = AC.length;
  (fC = ky.newBuffer(8)).writeInt32BE(CC.id, 0);
  fC.writeInt32BE(my, 4);
  this.push(fC);
  gC = 0;
  for (; gC < my; gC++) {
    fC = AC[gC];
    this.push(FC(fC.length));
    this.push(fC);
  }
  IC();
};
module.exports = {
  Adapter: zC,
  HANDSHAKE_REQUEST_TYPE: TC,
  HANDSHAKE_RESPONSE_TYPE: NC,
  Message: jy,
  kY: PC,
  Service: qC,
  discoverProtocol: function (CC, yC, IC) {
    var fC;
    void 0 === IC && "function" == typeof yC && (IC = yC, yC = void 0);
    new qC({
      protocol: "Empty"
    }, GC).createClient({
      timeout: yC && yC.timeout
    }).createChannel(CC, {
      scope: yC && yC.scope,
      endWritable: "function" == typeof CC
    }).once("handshake", function (CC, yC) {
      fC = yC.serverProtocol;
      this.destroy(!0);
    }).once("eot", function (CC, yC) {
      yC && !/interrupted/.test(yC) ? IC(yC) : IC(null, JSON.parse(fC));
    });
  },
  streams: {
    FrameDecoder: BC,
    FrameEncoder: tC,
    NettyDecoder: JC,
    NettyEncoder: nC
  }
};