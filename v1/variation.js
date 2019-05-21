/* eslint-disable */ /* jshint ignore: start */
// HJ is hotjar and definted variables at top are the Optimizely methods
(function(VARIATION, PAGE, SHARED) {
    "use strict";
    SHARED.init(VARIATION, PAGE);
    var _SHARED = SHARED,
        utils = _SHARED.utils,
        log = _SHARED.log,
        waitUntil = utils.waitUntil;
    if (-1 === window.location.search.indexOf("o143=1")) {
        log("Param not found!"), $("html").addClass("gen246-fouc");
        var base = window.location.href.split("?")[0],
            params = window.location.search,
            hash = window.location.hash,
            newParam = (params ? "&" : "?") + "o143=1";
        window.location.href = base + params + newParam + hash
    } else waitUntil(function() {
        return log("polling for hj..."), !!window.hj
    }).then(function() {
        log("sending hj"), window.hj("trigger", "ab319-v1-postredirect")
    });
})('v1', 'course-dgm', window.CRO_SHARED_11699711078);