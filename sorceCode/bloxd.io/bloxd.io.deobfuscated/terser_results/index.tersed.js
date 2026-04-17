var v155;

exports.__esModule = !0, exports.default = void 0;

var v156 = (v155 = require("./91.js")) && v155.__esModule ? v155 : {
    default: v155
}, vP223 = require("./18.js");

function f10(p224, p225) {
    for (var vLN06 = 0; vLN06 < p225.length; vLN06++) {
        var v157 = p225[vLN06];
        v157.enumerable = v157.enumerable || !1, v157.configurable = !0, "value" in v157 && (v157.writable = !0), 
        Object.defineProperty(p224, v157.key, v157);
    }
}

var vF5 = function() {
    function f11() {}
    var v158, v160;
    return f11.getParser = function(p226, p227 = !1) {
        if ("string" != typeof p226) throw new Error("UserAgent should be a string");
        return new v156.default(p226, p227);
    }, f11.parse = function(p228) {
        return new v156.default(p228).getResult();
    }, v158 = f11, v160 = [ {
        key: "BROWSER_MAP",
        get: function() {
            return vP223.BROWSER_MAP;
        }
    }, {
        key: "ENGINE_MAP",
        get: function() {
            return vP223.ENGINE_MAP;
        }
    }, {
        key: "OS_MAP",
        get: function() {
            return vP223.OS_MAP;
        }
    }, {
        key: "PLATFORMS_MAP",
        get: function() {
            return vP223.PLATFORMS_MAP;
        }
    } ], null && f10(v158.prototype, null), v160 && f10(v158, v160), f11;
}();

exports.default = vF5, module.exports = exports.default;