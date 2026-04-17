var js = require("./14.js");
var js2 = require("./18.js");
var v = typeof Float64Array !== "undefined";
function f(p, p2) {
  return p[0] - p2[0];
}
function f2() {
  var v2;
  var v3 = this.stride;
  var v4 = new Array(v3.length);
  for (v2 = 0; v2 < v4.length; ++v2) {
    v4[v2] = [Math.abs(v3[v2]), v2];
  }
  v4.sort(f);
  var v5 = new Array(v4.length);
  for (v2 = 0; v2 < v5.length; ++v2) {
    v5[v2] = v4[v2][1];
  }
  return v5;
}
function f3(p3, p4) {
  var v6 = ["View", p4, "d", p3].join("");
  if (p4 < 0) {
    v6 = "View_Nil" + p3;
  }
  var v7 = p3 === "generic";
  if (p4 === -1) {
    var v8 = "function " + v6 + "(a){this.data=a;};var proto=" + v6 + ".prototype;proto.dtype='" + p3 + "';proto.index=function(){return -1};proto.size=0;proto.dimension=-1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function(){return new " + v6 + "(this.data);};proto.get=proto.set=function(){};proto.pick=function(){return null};return function construct_" + v6 + "(a){return new " + v6 + "(a);}";
    return new Function(v8)();
  }
  if (p4 === 0) {
    v8 = "function " + v6 + "(a,d) {this.data = a;this.offset = d};var proto=" + v6 + ".prototype;proto.dtype='" + p3 + "';proto.index=function(){return this.offset};proto.dimension=0;proto.size=1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function " + v6 + "_copy() {return new " + v6 + "(this.data,this.offset)};proto.pick=function " + v6 + "_pick(){return TrivialArray(this.data);};proto.valueOf=proto.get=function " + v6 + "_get(){return " + (v7 ? "this.data.get(this.offset)" : "this.data[this.offset]") + "};proto.set=function " + v6 + "_set(v){return " + (v7 ? "this.data.set(this.offset,v)" : "this.data[this.offset]=v") + "};return function construct_" + v6 + "(a,b,c,d){return new " + v6 + "(a,d)}";
    return new Function("TrivialArray", v8)(vO[p3][0]);
  }
  v8 = ["'use strict'"];
  var vJs = js(p4);
  var v9 = vJs.map(function (p5) {
    return "i" + p5;
  });
  var v10 = "this.offset+" + vJs.map(function (p6) {
    return "this.stride[" + p6 + "]*i" + p6;
  }).join("+");
  var v11 = vJs.map(function (p7) {
    return "b" + p7;
  }).join(",");
  var v12 = vJs.map(function (p8) {
    return "c" + p8;
  }).join(",");
  v8.push("function " + v6 + "(a," + v11 + "," + v12 + ",d){this.data=a", "this.shape=[" + v11 + "]", "this.stride=[" + v12 + "]", "this.offset=d|0}", "var proto=" + v6 + ".prototype", "proto.dtype='" + p3 + "'", "proto.dimension=" + p4);
  v8.push("Object.defineProperty(proto,'size',{get:function " + v6 + "_size(){return " + vJs.map(function (p9) {
    return "this.shape[" + p9 + "]";
  }).join("*"), "}})");
  if (p4 === 1) {
    v8.push("proto.order=[0]");
  } else {
    v8.push("Object.defineProperty(proto,'order',{get:");
    if (p4 < 4) {
      v8.push("function " + v6 + "_order(){");
      if (p4 === 2) {
        v8.push("return (Math.abs(this.stride[0])>Math.abs(this.stride[1]))?[1,0]:[0,1]}})");
      } else if (p4 === 3) {
        v8.push("var s0=Math.abs(this.stride[0]),s1=Math.abs(this.stride[1]),s2=Math.abs(this.stride[2]);if(s0>s1){if(s1>s2){return [2,1,0];}else if(s0>s2){return [1,2,0];}else{return [1,0,2];}}else if(s0>s2){return [2,0,1];}else if(s2>s1){return [0,1,2];}else{return [0,2,1];}}})");
      }
    } else {
      v8.push("ORDER})");
    }
  }
  v8.push("proto.set=function " + v6 + "_set(" + v9.join(",") + ",v){");
  if (v7) {
    v8.push("return this.data.set(" + v10 + ",v)}");
  } else {
    v8.push("return this.data[" + v10 + "]=v}");
  }
  v8.push("proto.get=function " + v6 + "_get(" + v9.join(",") + "){");
  if (v7) {
    v8.push("return this.data.get(" + v10 + ")}");
  } else {
    v8.push("return this.data[" + v10 + "]}");
  }
  v8.push("proto.index=function " + v6 + "_index(", v9.join(), "){return " + v10 + "}");
  v8.push("proto.hi=function " + v6 + "_hi(" + v9.join(",") + "){return new " + v6 + "(this.data," + vJs.map(function (p10) {
    return ["(typeof i", p10, "!=='number'||i", p10, "<0)?this.shape[", p10, "]:i", p10, "|0"].join("");
  }).join(",") + "," + vJs.map(function (p11) {
    return "this.stride[" + p11 + "]";
  }).join(",") + ",this.offset)}");
  var v13 = vJs.map(function (p12) {
    return "a" + p12 + "=this.shape[" + p12 + "]";
  });
  var v14 = vJs.map(function (p13) {
    return "c" + p13 + "=this.stride[" + p13 + "]";
  });
  v8.push("proto.lo=function " + v6 + "_lo(" + v9.join(",") + "){var b=this.offset,d=0," + v13.join(",") + "," + v14.join(","));
  for (var vLN0 = 0; vLN0 < p4; ++vLN0) {
    v8.push("if(typeof i" + vLN0 + "==='number'&&i" + vLN0 + ">=0){d=i" + vLN0 + "|0;b+=c" + vLN0 + "*d;a" + vLN0 + "-=d}");
  }
  v8.push("return new " + v6 + "(this.data," + vJs.map(function (p14) {
    return "a" + p14;
  }).join(",") + "," + vJs.map(function (p15) {
    return "c" + p15;
  }).join(",") + ",b)}");
  v8.push("proto.step=function " + v6 + "_step(" + v9.join(",") + "){var " + vJs.map(function (p16) {
    return "a" + p16 + "=this.shape[" + p16 + "]";
  }).join(",") + "," + vJs.map(function (p17) {
    return "b" + p17 + "=this.stride[" + p17 + "]";
  }).join(",") + ",c=this.offset,d=0,ceil=Math.ceil");
  for (vLN0 = 0; vLN0 < p4; ++vLN0) {
    v8.push("if(typeof i" + vLN0 + "==='number'){d=i" + vLN0 + "|0;if(d<0){c+=b" + vLN0 + "*(a" + vLN0 + "-1);a" + vLN0 + "=ceil(-a" + vLN0 + "/d)}else{a" + vLN0 + "=ceil(a" + vLN0 + "/d)}b" + vLN0 + "*=d}");
  }
  v8.push("return new " + v6 + "(this.data," + vJs.map(function (p18) {
    return "a" + p18;
  }).join(",") + "," + vJs.map(function (p19) {
    return "b" + p19;
  }).join(",") + ",c)}");
  var v15 = new Array(p4);
  var v16 = new Array(p4);
  for (vLN0 = 0; vLN0 < p4; ++vLN0) {
    v15[vLN0] = "a[i" + vLN0 + "]";
    v16[vLN0] = "b[i" + vLN0 + "]";
  }
  v8.push("proto.transpose=function " + v6 + "_transpose(" + v9 + "){" + v9.map(function (p20, p21) {
    return p20 + "=(" + p20 + "===undefined?" + p21 + ":" + p20 + "|0)";
  }).join(";"), "var a=this.shape,b=this.stride;return new " + v6 + "(this.data," + v15.join(",") + "," + v16.join(",") + ",this.offset)}");
  v8.push("proto.pick=function " + v6 + "_pick(" + v9 + "){var a=[],b=[],c=this.offset");
  for (vLN0 = 0; vLN0 < p4; ++vLN0) {
    v8.push("if(typeof i" + vLN0 + "==='number'&&i" + vLN0 + ">=0){c=(c+this.stride[" + vLN0 + "]*i" + vLN0 + ")|0}else{a.push(this.shape[" + vLN0 + "]);b.push(this.stride[" + vLN0 + "])}");
  }
  v8.push("var ctor=CTOR_LIST[a.length+1];return ctor(this.data,a,b,c)}");
  v8.push("return function construct_" + v6 + "(data,shape,stride,offset){return new " + v6 + "(data," + vJs.map(function (p22) {
    return "shape[" + p22 + "]";
  }).join(",") + "," + vJs.map(function (p23) {
    return "stride[" + p23 + "]";
  }).join(",") + ",offset)}");
  return new Function("CTOR_LIST", "ORDER", v8.join("n"))(vO[p3], f2);
}
var vO = {
  float32: [],
  float64: [],
  int8: [],
  int16: [],
  int32: [],
  uint8: [],
  uint16: [],
  uint32: [],
  array: [],
  uint8_clamped: [],
  bigint64: [],
  biguint64: [],
  buffer: [],
  generic: []
};
module.exports = function (p24, p25, p26, p27) {
  if (p24 === undefined) {
    return (0, vO.array[0])([]);
  }
  if (typeof p24 === "number") {
    p24 = [p24];
  }
  if (p25 === undefined) {
    p25 = [p24.length];
  }
  var v17 = p25.length;
  if (p26 === undefined) {
    p26 = new Array(v17);
    for (var v18 = v17 - 1, vLN1 = 1; v18 >= 0; --v18) {
      p26[v18] = vLN1;
      vLN1 *= p25[v18];
    }
  }
  if (p27 === undefined) {
    p27 = 0;
    for (v18 = 0; v18 < v17; ++v18) {
      if (p26[v18] < 0) {
        p27 -= (p25[v18] - 1) * p26[v18];
      }
    }
  }
  var vF = function (p28) {
    if (js2(p28)) {
      return "buffer";
    }
    if (v) {
      switch (Object.prototype.toString.call(p28)) {
        case "[object Float64Array]":
          return "float64";
        case "[object Float32Array]":
          return "float32";
        case "[object Int8Array]":
          return "int8";
        case "[object Int16Array]":
          return "int16";
        case "[object Int32Array]":
          return "int32";
        case "[object Uint8Array]":
          return "uint8";
        case "[object Uint16Array]":
          return "uint16";
        case "[object Uint32Array]":
          return "uint32";
        case "[object Uint8ClampedArray]":
          return "uint8_clamped";
        case "[object BigInt64Array]":
          return "bigint64";
        case "[object BigUint64Array]":
          return "biguint64";
      }
    }
    if (Array.isArray(p28)) {
      return "array";
    } else {
      return "generic";
    }
  }(p24);
  for (var v19 = vO[vF]; v19.length <= v17 + 1;) {
    v19.push(f3(vF, v19.length - 1));
  }
  return (0, v19[v17 + 1])(p24, p25, p26, p27);
};