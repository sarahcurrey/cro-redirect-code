//jshint ignore: start
(function(VARIATION, PAGE, SHARED) {
    "use strict";
    var _SHARED$utils = SHARED.utils,
        getParam = _SHARED$utils.getParam,
        log = _SHARED$utils.log;
    log("ABTST-143: Drupal Course Design - v1"), getParam("o143") ? (log("redirect has already occurred"), $(function() {
        $("#metro-dropdown + div > .ga-m-bottom-sm a")[0].pathname = "/education/digital-marketing/online", $('a[href*="/education/digital-marketing"]:not([href*="remote"])').each(function(e, o) {
            o.href = o.href + (o.search ? "&" : "?") + "o143=1"
        }), $(".webform-callout__button").text("Request Syllabus")
    })) : (log("running redirect"), function() {
        var e = location.origin + location.pathname + (location.search ? location.search + "&" : "?") + "o143=1";
        location.replace(e)
    }()), SHARED.hj("abtst319-dgm-redirect-variation-1");
})('v1', 'digital-marketing', window.CRO_SHARED_9727844217);