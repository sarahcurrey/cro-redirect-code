//jshint ignore: start
(function(SHARED) {
    ! function e(r, o, t) {
        function n(u, c) {
            if (!o[u]) {
                if (!r[u]) {
                    var s = "function" == typeof require && require;
                    if (!c && s) return s(u, !0);
                    if (i) return i(u, !0);
                    var a = new Error("Cannot find module '" + u + "'");
                    throw a.code = "MODULE_NOT_FOUND", a
                }
                var f = o[u] = {
                    "exports": {}
                };
                r[u][0].call(f.exports, function(e) {
                    var o = r[u][1][e];
                    return n(o || e)
                }, f, f.exports, e, r, o, t)
            }
            return o[u].exports
        }
        for (var i = "function" == typeof require && require, u = 0; u < t.length; u++) n(t[u]);
        return n
    }({
        "1": [function(e, r, o) {
            "use strict";

            function t() {
                if (n && window.hasOwnProperty("console") && console.hasOwnProperty("info")) {
                    for (var e, r = arguments.length, o = Array(r), t = 0; t < r; t++) o[t] = arguments[t];
                    (e = console).info.apply(e, ["crometrics:"].concat(o))
                }
            }
            Object.defineProperty(o, "__esModule", {
                "value": !0
            }), /cro(metrics)?-debug|optimizely_(x|local)|optcli/.test(location.search) && (document.cookie = "crometrics-debug=true;path=/;");
            var n = /crometrics-debug=true/.test(document.cookie);
            o["default"] = t
        }, {}],
        "2": [function(e, r, o) {
            "use strict";
            var t = e("cromedics/log"),
                n = function(e) {
                    return e && e.__esModule ? e : {
                        "default": e
                    }
                }(t),
                i = SHARED.tag = "abtst319";
            (0, n["default"])("ABTST-319: DGM Redirect - " + i + "v0.1"), SHARED.log = n["default"], SHARED.utils = window.optimizely.get("utils"), SHARED.hj = function(e) {
                var r = window.hj = window.hj || function() {
                    (r.q = r.q || []).push(arguments)
                };
                r("trigger", e)
            }
        }, {
            "cromedics/log": 1
        }]
    }, {}, [2]);
})(window.CRO_SHARED_9727844217 || (window.CRO_SHARED_9727844217 = {
    id: 9727844217,
    tag: 'abtst319'
}));