/*! jQuery Mobile vGit Build: SHA1: 4c6c7d2c9bde2e709c3fc559e734b710a0e436ce <> Date: Mon Feb 6 10:58:35 2012 +0700 jquerymobile.com | jquery.org/license */
(function (G, n, k) { typeof define === "function" && define.amd ? define(["jquery"], function (a) { k(a, G, n); return a.mobile }) : k(G.jQuery, G, n) })(this, document, function (G, n, k) {
    (function (a, c, b, g) {
        function d(a) { for (; a && typeof a.originalEvent !== "undefined"; ) a = a.originalEvent; return a } function e(b) { for (var d = {}, e, f; b; ) { e = a.data(b, k); for (f in e) if (e[f]) d[f] = d.hasVirtualBinding = true; b = b.parentNode } return d } function f() { s && (clearTimeout(s), s = 0); s = setTimeout(function () { F = s = 0; B.length = 0; E = false; y = true }, a.vmouse.resetTimerDuration) }
        function h(b, e, f) {
            var c, h; if (!(h = f && f[b])) { if (f = !f)a: { for (f = e.target; f; ) { if ((h = a.data(f, k)) && (!b || h[b])) break a; f = f.parentNode } f = null } h = f } if (h) {
                c = e; var f = c.type, y, j; c = a.Event(c); c.type = b; h = c.originalEvent; y = a.event.props; f.search(/mouse/) > -1 && (y = v); if (h) for (j = y.length; j; ) b = y[--j], c[b] = h[b]; if (f.search(/mouse(down|up)|click/) > -1 && !c.which) c.which = 1; if (f.search(/^touch/) !== -1 && (b = d(h), f = b.touches, b = b.changedTouches, f = f && f.length ? f[0] : b && b.length ? b[0] : g)) for (h = 0, len = n.length; h < len; h++) b = n[h], c[b] = f[b];
                a(e.target).trigger(c)
            } return c
        } function j(b) { var d = a.data(b.target, z); if (!E && (!F || F !== d)) if (d = h("v" + b.type, b)) d.isDefaultPrevented() && b.preventDefault(), d.isPropagationStopped() && b.stopPropagation(), d.isImmediatePropagationStopped() && b.stopImmediatePropagation() } function q(b) { var f = d(b).touches, c; if (f && f.length === 1 && (c = b.target, f = e(c), f.hasVirtualBinding)) F = K++, a.data(c, z, F), s && (clearTimeout(s), s = 0), x = y = false, c = d(b).touches[0], A = c.pageX, w = c.pageY, h("vmouseover", b, f), h("vmousedown", b, f) } function m(a) {
            y ||
(x || h("vmousecancel", a, e(a.target)), x = true, f())
        } function u(b) { if (!y) { var c = d(b).touches[0], g = x, j = a.vmouse.moveDistanceThreshold; x = x || Math.abs(c.pageX - A) > j || Math.abs(c.pageY - w) > j; flags = e(b.target); x && !g && h("vmousecancel", b, flags); h("vmousemove", b, flags); f() } } function r(a) { if (!y) { y = true; var b = e(a.target), c; h("vmouseup", a, b); if (!x && (c = h("vclick", a, b)) && c.isDefaultPrevented()) c = d(a).changedTouches[0], B.push({ touchID: F, x: c.clientX, y: c.clientY }), E = true; h("vmouseout", a, b); x = false; f() } } function l(b) {
            var b =
a.data(b, k), d; if (b) for (d in b) if (b[d]) return true; return false
        } function o() { } function p(b) {
            var d = b.substr(1); return { setup: function () { l(this) || a.data(this, k, {}); a.data(this, k)[b] = true; t[b] = (t[b] || 0) + 1; t[b] === 1 && H.bind(d, j); a(this).bind(d, o); if (J) t.touchstart = (t.touchstart || 0) + 1, t.touchstart === 1 && H.bind("touchstart", q).bind("touchend", r).bind("touchmove", u).bind("scroll", m) }, teardown: function () {
                --t[b]; t[b] || H.unbind(d, j); J && (--t.touchstart, t.touchstart || H.unbind("touchstart", q).unbind("touchmove", u).unbind("touchend",
r).unbind("scroll", m)); var e = a(this), f = a.data(this, k); f && (f[b] = false); e.unbind(d, o); l(this) || e.removeData(k)
            } 
            }
        } var k = "virtualMouseBindings", z = "virtualTouchID", c = "vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "), n = "clientX clientY pageX pageY screenX screenY".split(" "), v = a.event.props.concat(a.event.mouseHooks ? a.event.mouseHooks.props : []), t = {}, s = 0, A = 0, w = 0, x = false, B = [], E = false, y = false, J = "addEventListener" in b, H = a(b), K = 1, F = 0; a.vmouse = { moveDistanceThreshold: 10, clickDistanceThreshold: 10,
            resetTimerDuration: 1500
        }; for (var I = 0; I < c.length; I++) a.event.special[c[I]] = p(c[I]); J && b.addEventListener("click", function (b) { var d = B.length, e = b.target, f, c, g, h, y; if (d) { f = b.clientX; c = b.clientY; threshold = a.vmouse.clickDistanceThreshold; for (g = e; g; ) { for (h = 0; h < d; h++) if (y = B[h], g === e && Math.abs(y.x - f) < threshold && Math.abs(y.y - c) < threshold || a.data(g, z) === y.touchID) { b.preventDefault(); b.stopPropagation(); return } g = g.parentNode } } }, true)
    })(jQuery, n, k); (function (a, c, b) {
        function g(a) {
            a = a || location.href; return "#" + a.replace(/^[^#]*#?(.*)$/,
"$1")
        } var d = "hashchange", e = k, f, h = a.event.special, j = e.documentMode, q = "on" + d in c && (j === b || j > 7); a.fn[d] = function (a) { return a ? this.bind(d, a) : this.trigger(d) }; a.fn[d].delay = 50; h[d] = a.extend(h[d], { setup: function () { if (q) return false; a(f.start) }, teardown: function () { if (q) return false; a(f.stop) } }); f = function () {
            function f() { var b = g(), e = k(l); if (b !== l) p(l = b, e), a(c).trigger(d); else if (e !== l) location.href = location.href.replace(/#.*/, "") + e; j = setTimeout(f, a.fn[d].delay) } var h = {}, j, l = g(), o = function (a) { return a }, p =
o, k = o; h.start = function () { j || f() }; h.stop = function () { j && clearTimeout(j); j = b }; a.browser.msie && !q && function () {
    var b, c; h.start = function () { if (!b) c = (c = a.fn[d].src) && c + g(), b = a('<iframe tabindex="-1" title="empty"/>').hide().one("load", function () { c || p(g()); f() }).attr("src", c || "javascript:0").insertAfter("body")[0].contentWindow, e.onpropertychange = function () { try { if (event.propertyName === "title") b.document.title = e.title } catch (a) { } } }; h.stop = o; k = function () { return g(b.location.href) }; p = function (f, c) {
        var h = b.document,
g = a.fn[d].domain; if (f !== c) h.title = e.title, h.open(), g && h.write('<script>document.domain="' + g + '"<\/script>'), h.close(), b.location.hash = f
    } 
} (); return h
        } ()
    })(jQuery, this); (function (a, c) {
        if (a.cleanData) { var b = a.cleanData; a.cleanData = function (d) { for (var e = 0, f; (f = d[e]) != null; e++) a(f).triggerHandler("remove"); b(d) } } else {
            var g = a.fn.remove; a.fn.remove = function (b, e) {
                return this.each(function () {
                    e || (!b || a.filter(b, [this]).length) && a("*", this).add([this]).each(function () { a(this).triggerHandler("remove") }); return g.call(a(this),
b, e)
                })
            } 
        } a.widget = function (b, e, f) { var c = b.split(".")[0], g, b = b.split(".")[1]; g = c + "-" + b; if (!f) f = e, e = a.Widget; a.expr[":"][g] = function (e) { return !!a.data(e, b) }; a[c] = a[c] || {}; a[c][b] = function (a, b) { arguments.length && this._createWidget(a, b) }; e = new e; e.options = a.extend(true, {}, e.options); a[c][b].prototype = a.extend(true, e, { namespace: c, widgetName: b, widgetEventPrefix: a[c][b].prototype.widgetEventPrefix || b, widgetBaseClass: g }, f); a.widget.bridge(b, a[c][b]) }; a.widget.bridge = function (b, e) {
            a.fn[b] = function (f) {
                var g =
typeof f === "string", j = Array.prototype.slice.call(arguments, 1), q = this, f = !g && j.length ? a.extend.apply(null, [true, f].concat(j)) : f; if (g && f.charAt(0) === "_") return q; g ? this.each(function () { var e = a.data(this, b); if (!e) throw "cannot call methods on " + b + " prior to initialization; attempted to call method '" + f + "'"; if (!a.isFunction(e[f])) throw "no such method '" + f + "' for " + b + " widget instance"; var g = e[f].apply(e, j); if (g !== e && g !== c) return q = g, false }) : this.each(function () {
    var c = a.data(this, b); c ? c.option(f || {})._init() :
a.data(this, b, new e(f, this))
}); return q
            } 
        }; a.Widget = function (a, b) { arguments.length && this._createWidget(a, b) }; a.Widget.prototype = { widgetName: "widget", widgetEventPrefix: "", options: { disabled: false }, _createWidget: function (b, e) { a.data(e, this.widgetName, this); this.element = a(e); this.options = a.extend(true, {}, this.options, this._getCreateOptions(), b); var f = this; this.element.bind("remove." + this.widgetName, function () { f.destroy() }); this._create(); this._trigger("create"); this._init() }, _getCreateOptions: function () {
            var b =
{}; a.metadata && (b = a.metadata.get(element)[this.widgetName]); return b
        }, _create: function () { }, _init: function () { }, destroy: function () { this.element.unbind("." + this.widgetName).removeData(this.widgetName); this.widget().unbind("." + this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass + "-disabled ui-state-disabled") }, widget: function () { return this.element }, option: function (b, e) {
            var f = b; if (arguments.length === 0) return a.extend({}, this.options); if (typeof b === "string") {
                if (e === c) return this.options[b];
                f = {}; f[b] = e
            } this._setOptions(f); return this
        }, _setOptions: function (b) { var e = this; a.each(b, function (a, b) { e._setOption(a, b) }); return this }, _setOption: function (a, b) { this.options[a] = b; a === "disabled" && this.widget()[b ? "addClass" : "removeClass"](this.widgetBaseClass + "-disabled ui-state-disabled").attr("aria-disabled", b); return this }, enable: function () { return this._setOption("disabled", false) }, disable: function () { return this._setOption("disabled", true) }, _trigger: function (b, e, f) {
            var c = this.options[b], e = a.Event(e);
            e.type = (b === this.widgetEventPrefix ? b : this.widgetEventPrefix + b).toLowerCase(); f = f || {}; if (e.originalEvent) for (var b = a.event.props.length, g; b; ) g = a.event.props[--b], e[g] = e.originalEvent[g]; this.element.trigger(e, f); return !(a.isFunction(c) && c.call(this.element[0], e, f) === false || e.isDefaultPrevented())
        } 
        }
    })(jQuery); (function (a, c) {
        a.widget("mobile.widget", { _createWidget: function () { a.Widget.prototype._createWidget.apply(this, arguments); this._trigger("init") }, _getCreateOptions: function () {
            var b = this.element,
g = {}; a.each(this.options, function (a) { var e = b.jqmData(a.replace(/[A-Z]/g, function (a) { return "-" + a.toLowerCase() })); e !== c && (g[a] = e) }); return g
        }, enhanceWithin: function (b, c) { var d, e; e = a(this.options.initSelector, b); if (a.mobile.ignoreContentEnabled) { if (!e.closest(":jqmData(ignore)").length) e[this.widgetName]() } else if (c) d = (d = a.mobile.closestPageData(a(b))) && d.keepNativeSelector() || "", e.not(d)[this.widgetName](); else e[this.widgetName]() } 
        })
    })(jQuery); (function (a, c) {
        var b = {}; a.mobile = a.extend({}, { version: "1.1pre",
            ns: "", subPageUrlKey: "ui-page", activePageClass: "ui-page-active", activeBtnClass: "ui-btn-active", focusClass: "ui-focus", ajaxEnabled: true, hashListeningEnabled: true, linkBindingEnabled: true, defaultPageTransition: "fade", maxTransitionWidth: false, minScrollBack: 10, touchOverflowEnabled: false, defaultDialogTransition: "pop", loadingMessage: "loading", pageLoadErrorMessage: "Error Loading Page", loadingMessageTextVisible: false, loadingMessageTheme: "a", pageLoadErrorMessageTheme: "e", autoInitializePage: true, pushStateEnabled: true,
            ignoreContentEnabled: false, orientationChangeEnabled: true, keyCode: { ALT: 18, BACKSPACE: 8, CAPS_LOCK: 20, COMMA: 188, COMMAND: 91, COMMAND_LEFT: 91, COMMAND_RIGHT: 93, CONTROL: 17, DELETE: 46, DOWN: 40, END: 35, ENTER: 13, ESCAPE: 27, HOME: 36, INSERT: 45, LEFT: 37, MENU: 93, NUMPAD_ADD: 107, NUMPAD_DECIMAL: 110, NUMPAD_DIVIDE: 111, NUMPAD_ENTER: 108, NUMPAD_MULTIPLY: 106, NUMPAD_SUBTRACT: 109, PAGE_DOWN: 34, PAGE_UP: 33, PERIOD: 190, RIGHT: 39, SHIFT: 16, SPACE: 32, TAB: 9, UP: 38, WINDOWS: 91 }, silentScroll: function (b) {
                if (a.type(b) !== "number") b = a.mobile.defaultHomeScroll;
                a.event.special.scrollstart.enabled = false; setTimeout(function () { c.scrollTo(0, b); a(k).trigger("silentscroll", { x: 0, y: b }) }, 20); setTimeout(function () { a.event.special.scrollstart.enabled = true }, 150)
            }, nsNormalizeDict: b, nsNormalize: function (e) { return !e ? void 0 : b[e] || (b[e] = a.camelCase(a.mobile.ns + e)) }, getInheritedTheme: function (a, b) { for (var c = a[0], d = "", g = /ui-(bar|body)-([a-z])\b/, m, u; c; ) { m = c.className || ""; if ((u = g.exec(m)) && (d = u[2])) break; c = c.parentNode } return d || b || "a" }, closestPageData: function (a) { return a.closest(':jqmData(role="page"), :jqmData(role="dialog")').data("page") } 
        },
a.mobile); a.fn.jqmData = function (b, c) { var d; typeof b != "undefined" && (d = this.data(b ? a.mobile.nsNormalize(b) : b, c)); return d }; a.jqmData = function (b, c, d) { var g; typeof c != "undefined" && (g = a.data(b, c ? a.mobile.nsNormalize(c) : c, d)); return g }; a.fn.jqmRemoveData = function (b) { return this.removeData(a.mobile.nsNormalize(b)) }; a.jqmRemoveData = function (b, c) { return a.removeData(b, a.mobile.nsNormalize(c)) }; a.fn.removeWithDependents = function () { a.removeWithDependents(this) }; a.removeWithDependents = function (b) {
    b = a(b); (b.jqmData("dependents") ||
a()).remove(); b.remove()
}; a.fn.addDependents = function (b) { a.addDependents(a(this), b) }; a.addDependents = function (b, c) { var d = a(b).jqmData("dependents") || a(); a(b).jqmData("dependents", a.merge(d, c)) }; a.fn.getEncodedText = function () { return a("<div/>").text(a(this).text()).html() }; var g = a.find, d = /:jqmData\(([^)]*)\)/g; a.find = function (b, c, h, j) { b = b.replace(d, "[data-" + (a.mobile.ns || "") + "$1]"); return g.call(this, b, c, h, j) }; a.extend(a.find, g); a.find.matches = function (b, c) { return a.find(b, null, null, c) }; a.find.matchesSelector =
function (b, c) { return a.find(c, null, null, [b]).length > 0 } 
    })(jQuery, this); (function (a) { a(n); var c = a("html"); a.mobile.media = function () { var b = {}, g = a("<div id='jquery-mediatest'>"), d = a("<body>").append(g); return function (a) { if (!(a in b)) { var f = k.createElement("style"), h = "@media " + a + " { #jquery-mediatest { position:absolute; } }"; f.type = "text/css"; f.styleSheet ? f.styleSheet.cssText = h : f.appendChild(k.createTextNode(h)); c.prepend(d).prepend(f); b[a] = g.css("position") === "absolute"; d.add(f).remove() } return b[a] } } () })(jQuery);
    (function (a, c) {
        function b(a) { var b = a.charAt(0).toUpperCase() + a.substr(1), a = (a + " " + f.join(b + " ") + b).split(" "), d; for (d in a) if (e[a[d]] !== c) return true } function g(a, b, c) { var d = k.createElement("div"), c = c ? [c] : f, e; for (i = 0; i < c.length; i++) { var g = c[i], h = "-" + g.charAt(0).toLowerCase() + g.substr(1) + "-" + a + ": " + b + ";", g = g.charAt(0).toUpperCase() + g.substr(1) + (a.charAt(0).toUpperCase() + a.substr(1)); d.setAttribute("style", h); d.style[g] && (e = true) } return !!e } var d = a("<body>").prependTo("html"), e = d[0].style, f = ["Webkit",
"Moz", "O"], h = "palmGetResource" in n, j = n.operamini && {}.toString.call(n.operamini) === "[object OperaMini]", q = n.blackberry; a.extend(a.mobile, { browser: {} }); a.mobile.browser.ie = function () { for (var a = 3, b = k.createElement("div"), c = b.all || []; b.innerHTML = "<\!--[if gt IE " + ++a + "]><br><![endif]--\>", c[0]; ); return a > 4 ? a : !a } (); a.extend(a.support, { orientation: "orientation" in n && "onorientationchange" in n, touch: "ontouchend" in k, cssTransitions: "WebKitTransitionEvent" in n || g("transition", "height 100ms linear"), pushState: "pushState" in
history && "replaceState" in history, mediaquery: a.mobile.media("only all"), cssPseudoElement: !!b("content"), touchOverflow: !!b("overflowScrolling"), cssTransform3d: g("perspective", "10px", "moz") || a.mobile.media("(-" + f.join("-transform-3d),(-") + "-transform-3d),(transform-3d)"), boxShadow: !!b("boxShadow") && !q, scrollTop: ("pageXOffset" in n || "scrollTop" in k.documentElement || "scrollTop" in d[0]) && !h && !j, dynamicBaseTag: function () {
    var b = location.protocol + "//" + location.host + location.pathname + "ui-dir/", c = a("head base"),
e = null, f = "", g; c.length ? f = c.attr("href") : c = e = a("<base>", { href: b }).appendTo("head"); g = a("<a href='testurl' />").prependTo(d)[0].href; c[0].href = f || location.pathname; e && e.remove(); return g.indexOf(b) === 0
} ()
}); d.remove(); h = function () { var a = n.navigator.userAgent; return a.indexOf("Nokia") > -1 && (a.indexOf("Symbian/3") > -1 || a.indexOf("Series60/5") > -1) && a.indexOf("AppleWebKit") > -1 && a.match(/(BrowserNG|NokiaBrowser)\/7\.[0-3]/) } (); a.mobile.gradeA = function () {
    return a.support.mediaquery || a.mobile.browser.ie && a.mobile.browser.ie >=
7
}; a.mobile.ajaxBlacklist = n.blackberry && !n.WebKitPoint || j || h; h && a(function () { a("head link[rel='stylesheet']").attr("rel", "alternate stylesheet").attr("rel", "stylesheet") }); a.support.boxShadow || a("html").addClass("ui-mobile-nosupport-boxshadow")
    })(jQuery); (function (a, c, b) {
        function g(b, c, d) { var e = d.type; d.type = c; a.event.handle.call(b, d); d.type = e } a.each("touchstart touchmove touchend orientationchange throttledresize tap taphold swipe swipeleft swiperight scrollstart scrollstop".split(" "), function (b,
c) { a.fn[c] = function (a) { return a ? this.bind(c, a) : this.trigger(c) }; a.attrFn[c] = true }); var d = a.support.touch, e = d ? "touchstart" : "mousedown", f = d ? "touchend" : "mouseup", h = d ? "touchmove" : "mousemove"; a.event.special.scrollstart = { enabled: true, setup: function () { function b(a, e) { d = e; g(c, d ? "scrollstart" : "scrollstop", a) } var c = this, d, e; a(c).bind("touchmove scroll", function (c) { a.event.special.scrollstart.enabled && (d || b(c, true), clearTimeout(e), e = setTimeout(function () { b(c, false) }, 50)) }) } }; a.event.special.tap = { setup: function () {
    var b =
this, c = a(b); c.bind("vmousedown", function (d) { function e() { clearTimeout(p) } function f() { e(); c.unbind("vclick", h).unbind("vmouseup", e); a(k).unbind("vmousecancel", f) } function h(a) { f(); o == a.target && g(b, "tap", a) } if (d.which && d.which !== 1) return false; var o = d.target, p; c.bind("vmouseup", e).bind("vclick", h); a(k).bind("vmousecancel", f); p = setTimeout(function () { g(b, "taphold", a.Event("taphold")) }, 750) })
} 
}; a.event.special.swipe = { scrollSupressionThreshold: 10, durationThreshold: 1E3, horizontalDistanceThreshold: 30, verticalDistanceThreshold: 75,
    setup: function () {
        var c = a(this); c.bind(e, function (d) {
            function e(b) { if (k) { var c = b.originalEvent.touches ? b.originalEvent.touches[0] : b; l = { time: (new Date).getTime(), coords: [c.pageX, c.pageY] }; Math.abs(k.coords[0] - l.coords[0]) > a.event.special.swipe.scrollSupressionThreshold && b.preventDefault() } } var g = d.originalEvent.touches ? d.originalEvent.touches[0] : d, k = { time: (new Date).getTime(), coords: [g.pageX, g.pageY], origin: a(d.target) }, l; c.bind(h, e).one(f, function () {
                c.unbind(h, e); k && l && l.time - k.time < a.event.special.swipe.durationThreshold &&
Math.abs(k.coords[0] - l.coords[0]) > a.event.special.swipe.horizontalDistanceThreshold && Math.abs(k.coords[1] - l.coords[1]) < a.event.special.swipe.verticalDistanceThreshold && k.origin.trigger("swipe").trigger(k.coords[0] > l.coords[0] ? "swipeleft" : "swiperight"); k = l = b
            })
        })
    } 
}; (function (a, b) {
    function c() { var a = e(); a !== f && (f = a, d.trigger("orientationchange")) } var d = a(b), e, f, g, h, n = { 0: true, 180: true }; if (a.support.orientation && (g = a.mobile.media("all and (orientation: landscape)"), h = n[b.orientation], g && h || !g && !h)) n = { "-90": true,
        90: true
    }; a.event.special.orientationchange = { setup: function () { if (a.support.orientation && a.mobile.orientationChangeEnabled) return false; f = e(); d.bind("throttledresize", c) }, teardown: function () { if (a.support.orientation && a.mobile.orientationChangeEnabled) return false; d.unbind("throttledresize", c) }, add: function (a) { var b = a.handler; a.handler = function (a) { a.orientation = e(); return b.apply(this, arguments) } } }; a.event.special.orientationchange.orientation = e = function () {
        var c = true, c = k.documentElement; return (c = a.support.orientation ?
n[b.orientation] : c && c.clientWidth / c.clientHeight < 1.1) ? "portrait" : "landscape"
    } 
})(jQuery, c); (function () { a.event.special.throttledresize = { setup: function () { a(this).bind("resize", b) }, teardown: function () { a(this).unbind("resize", b) } }; var b = function () { e = (new Date).getTime(); f = e - c; f >= 250 ? (c = e, a(this).trigger("throttledresize")) : (d && clearTimeout(d), d = setTimeout(b, 250 - f)) }, c = 0, d, e, f })(); a.each({ scrollstop: "scrollstart", taphold: "tap", swipeleft: "swipe", swiperight: "swipe" }, function (b, c) {
    a.event.special[b] = { setup: function () {
        a(this).bind(c,
a.noop)
    } 
    }
})
    })(jQuery, this); (function (a) {
        a.widget("mobile.page", a.mobile.widget, { options: { theme: "c", domCache: false, keepNativeDefault: ":jqmData(role='none'), :jqmData(role='nojs')" }, _create: function () { if (this._trigger("beforecreate") === false) return false; this.element.attr("tabindex", "0").addClass("ui-page ui-body-" + this.options.theme) }, keepNativeSelector: function () {
            var c = this.options; return c.keepNative && a.trim(c.keepNative) && c.keepNative !== c.keepNativeDefault ? [c.keepNative, c.keepNativeDefault].join(", ") :
c.keepNativeDefault
        } 
        })
    })(jQuery); (function (a, c) {
        a.mobile.defaultTransitionHandler = function (b, g, d, e) {
            b && !a.support.cssTransform3d && a.mobile.transitionFallbacks[b] && (b = a.mobile.transitionFallbacks[b]); var f = new a.Deferred, h = g ? " reverse" : "", j = a.mobile.urlHistory.getActive().lastScroll || a.mobile.defaultHomeScroll, k = a.mobile.getScreenHeight(), m = "ui-mobile-viewport-transitioning viewport-" + b, u = a.mobile.maxTransitionWidth !== false && a(c).width() > a.mobile.maxTransitionWidth, n = !a.support.cssTransitions || u ||
!b || b === "none", u = function () { e && e.removeClass(a.mobile.activePageClass + " out in reverse " + b).height(""); d.addClass(a.mobile.activePageClass); n || d.animationComplete(l); a.mobile.focusPage(d); d.height(k + j); a.mobile.silentScroll(j); d.addClass(b + " in" + h); n && l() }, l = function () { d.removeClass("out in reverse " + b).height("").parent().removeClass(m); f.resolve(b, g, d, e, true) }; d.parent().addClass(m); e && !n ? e.animationComplete(u).height(k + a(c).scrollTop()).addClass(b + " out" + h) : u(); return f.promise()
        }; a.mobile.transitionHandlers =
{ "default": a.mobile.defaultTransitionHandler }; a.mobile.transitionFallbacks = {}
    })(jQuery, this); (function (a, c) {
        function b(b) { o && (!o.closest(".ui-page-active").length || b) && o.removeClass(a.mobile.activeBtnClass); o = null } function g() { z = false; D.length > 0 && a.mobile.changePage.apply(null, D.pop()) } function d(b, c, d, e) {
            c && c.data("page")._trigger("beforehide", null, { nextPage: b }); b.data("page")._trigger("beforeshow", null, { prevPage: c || a("") }); a.mobile.hidePageLoadingMsg(); d = (a.mobile.transitionHandlers[d || "default"] ||
a.mobile.defaultTransitionHandler)(d, e, b, c); d.done(function () { c && c.data("page")._trigger("hide", null, { nextPage: b }); b.data("page")._trigger("show", null, { prevPage: c || a("") }) }); return d
        } function e() { var b = a.event.special.orientationchange.orientation() === "portrait", c = b ? screen.availHeight : screen.availWidth, b = Math.max(b ? 480 : 320, a(n).height()); return Math.min(c, b) } function f() { a("." + a.mobile.activePageClass).css("min-height", e()) } function h(b, c) { c && b.attr("data-" + a.mobile.ns + "role", c); b.page() } function j(a) {
            for (; a; ) {
                if (typeof a.nodeName ===
"string" && a.nodeName.toLowerCase() == "a") break; a = a.parentNode
            } return a
        } function q(b) { var b = a(b).closest(".ui-page").jqmData("url"), c = s.hrefNoHash; if (!b || !l.isPath(b)) b = c; return l.makeUrlAbsolute(b, c) } var m = a(n), u = a("html"), r = a("head"), l = { urlParseRE: /^(((([^:\/#\?]+:)?(?:(\/\/)((?:(([^:@\/#\?]+)(?:\:([^:@\/#\?]+))?)@)?(([^:\/#\?\]\[]+|\[[^\/\]@#?]+\])(?:\:([0-9]+))?))?)?)?((\/?(?:[^\/\?#]+\/+)*)([^\?#]*)))?(\?[^#]+)?)(#.*)?/, parseUrl: function (b) {
            if (a.type(b) === "object") return b; b = l.urlParseRE.exec(b ||
"") || []; return { href: b[0] || "", hrefNoHash: b[1] || "", hrefNoSearch: b[2] || "", domain: b[3] || "", protocol: b[4] || "", doubleSlash: b[5] || "", authority: b[6] || "", username: b[8] || "", password: b[9] || "", host: b[10] || "", hostname: b[11] || "", port: b[12] || "", pathname: b[13] || "", directory: b[14] || "", filename: b[15] || "", search: b[16] || "", hash: b[17] || ""}
        }, makePathAbsolute: function (a, b) {
            if (a && a.charAt(0) === "/") return a; for (var a = a || "", c = (b = b ? b.replace(/^\/|(\/[^\/]*|[^\/]+)$/g, "") : "") ? b.split("/") : [], d = a.split("/"), e = 0; e < d.length; e++) {
                var f =
d[e]; switch (f) { case ".": break; case "..": c.length && c.pop(); break; default: c.push(f) } 
            } return "/" + c.join("/")
        }, isSameDomain: function (a, b) { return l.parseUrl(a).domain === l.parseUrl(b).domain }, isRelativeUrl: function (a) { return l.parseUrl(a).protocol === "" }, isAbsoluteUrl: function (a) { return l.parseUrl(a).protocol !== "" }, makeUrlAbsolute: function (a, b) {
            if (!l.isRelativeUrl(a)) return a; var c = l.parseUrl(a), d = l.parseUrl(b), e = c.protocol || d.protocol, f = c.protocol ? c.doubleSlash : c.doubleSlash || d.doubleSlash, g = c.authority ||
d.authority, h = c.pathname !== "", j = l.makePathAbsolute(c.pathname || d.filename, d.pathname); return e + f + g + j + (c.search || !h && d.search || "") + c.hash
        }, addSearchParams: function (b, c) { var d = l.parseUrl(b), e = typeof c === "object" ? a.param(c) : c, f = d.search || "?"; return d.hrefNoSearch + f + (f.charAt(f.length - 1) !== "?" ? "&" : "") + e + (d.hash || "") }, convertUrlToDataUrl: function (a) {
            var b = l.parseUrl(a); if (l.isEmbeddedPage(b)) return b.hash.split(C)[0].replace(/^#/, ""); else if (l.isSameDomain(b, s)) return b.hrefNoHash.replace(s.domain, "");
            return a
        }, get: function (a) { if (a === c) a = location.hash; return l.stripHash(a).replace(/[^\/]*\.[^\/*]+$/, "") }, getFilePath: function (b) { var c = "&" + a.mobile.subPageUrlKey; return b && b.split(c)[0].split(C)[0] }, set: function (a) { location.hash = a }, isPath: function (a) { return /\//.test(a) }, clean: function (a) { return a.replace(s.domain, "") }, stripHash: function (a) { return a.replace(/^#/, "") }, cleanHash: function (a) { return l.stripHash(a.replace(/\?.*$/, "").replace(C, "")) }, isExternal: function (a) {
            a = l.parseUrl(a); return a.protocol &&
a.domain !== t.domain ? true : false
        }, hasProtocol: function (a) { return /^(:?\w+:)/.test(a) }, isFirstPageUrl: function (b) { var b = l.parseUrl(l.makeUrlAbsolute(b, s)), d = a.mobile.firstPage, d = d && d[0] ? d[0].id : c; return (b.hrefNoHash === t.hrefNoHash || A && b.hrefNoHash === s.hrefNoHash) && (!b.hash || b.hash === "#" || d && b.hash.replace(/^#/, "") === d) }, isEmbeddedPage: function (a) { a = l.parseUrl(a); return a.protocol !== "" ? a.hash && (a.hrefNoHash === t.hrefNoHash || A && a.hrefNoHash === s.hrefNoHash) : /^#/.test(a.href) } 
        }, o = null, p = { stack: [], activeIndex: 0,
            getActive: function () { return p.stack[p.activeIndex] }, getPrev: function () { return p.stack[p.activeIndex - 1] }, getNext: function () { return p.stack[p.activeIndex + 1] }, addNew: function (a, b, c, d, e) { p.getNext() && p.clearForward(); p.stack.push({ url: a, transition: b, title: c, pageUrl: d, role: e }); p.activeIndex = p.stack.length - 1 }, clearForward: function () { p.stack = p.stack.slice(0, p.activeIndex + 1) }, directHashChange: function (b) {
                var d, e, f; this.getActive(); a.each(p.stack, function (a, c) {
                    b.currentUrl === c.url && (d = a < p.activeIndex, e = !d,
f = a)
                }); this.activeIndex = f !== c ? f : this.activeIndex; d ? (b.either || b.isBack)(true) : e && (b.either || b.isForward)(false)
            }, ignoreNextHashChange: false
        }, D = [], z = false, C = "&ui-state=dialog", v = r.children("base"), t = l.parseUrl(location.href), s = v.length ? l.parseUrl(l.makeUrlAbsolute(v.attr("href"), t.href)) : t, A = t.hrefNoHash !== s.hrefNoHash, w = a.support.dynamicBaseTag ? { element: v.length ? v : a("<base>", { href: s.hrefNoHash }).prependTo(r), set: function (a) { w.element.attr("href", l.makeUrlAbsolute(a, s)) }, reset: function () {
            w.element.attr("href",
s.hrefNoHash)
        } 
        } : c; a.mobile.focusPage = function (a) { var b = a.find(".ui-title:eq(0)"); b.length ? b.focus() : a.focus() }; var x = true, B, E; B = function () { if (x) { var b = a.mobile.urlHistory.getActive(); if (b) { var c = m.scrollTop(); b.lastScroll = c < a.mobile.minScrollBack ? a.mobile.defaultHomeScroll : c } } }; E = function () { setTimeout(B, 100) }; m.bind(a.support.pushState ? "popstate" : "hashchange", function () { x = false }); m.one(a.support.pushState ? "popstate" : "hashchange", function () { x = true }); m.one("pagecontainercreate", function () {
            a.mobile.pageContainer.bind("pagechange",
function () { x = true; m.unbind("scrollstop", E); m.bind("scrollstop", E) })
        }); m.bind("scrollstop", E); a.mobile.getScreenHeight = e; a.fn.animationComplete = function (b) { return a.support.cssTransitions ? a(this).one("webkitAnimationEnd animationend", b) : (setTimeout(b, 0), a(this)) }; a.mobile.path = l; a.mobile.base = w; a.mobile.urlHistory = p; a.mobile.dialogHashKey = C; a.mobile.allowCrossDomainPages = false; a.mobile.getDocumentUrl = function (b) { return b ? a.extend({}, t) : t.href }; a.mobile.getDocumentBase = function (b) {
            return b ? a.extend({},
s) : s.href
        }; a.mobile._bindPageRemove = function () { var b = a(this); !b.data("page").options.domCache && b.is(":jqmData(external-page='true')") && b.bind("pagehide.remove", function () { var b = a(this), c = new a.Event("pageremove"); b.trigger(c); c.isDefaultPrevented() || b.removeWithDependents() }) }; a.mobile.loadPage = function (b, d) {
            var e = a.Deferred(), f = a.extend({}, a.mobile.loadPage.defaults, d), g = null, j = null, k = l.makeUrlAbsolute(b, a.mobile.activePage && q(a.mobile.activePage) || s.hrefNoHash); if (f.data && f.type === "get") k = l.addSearchParams(k,
f.data), f.data = c; if (f.data && f.type === "post") f.reloadPage = true; var v = l.getFilePath(k), m = l.convertUrlToDataUrl(k); f.pageContainer = f.pageContainer || a.mobile.pageContainer; g = f.pageContainer.children(":jqmData(url='" + m + "')"); g.length === 0 && m && !l.isPath(m) && (g = f.pageContainer.children("#" + m).attr("data-" + a.mobile.ns + "url", m)); if (g.length === 0) if (a.mobile.firstPage && l.isFirstPageUrl(v)) a.mobile.firstPage.parent().length && (g = a(a.mobile.firstPage)); else if (l.isEmbeddedPage(v)) return e.reject(k, d), e.promise();
            w && w.reset(); if (g.length) { if (!f.reloadPage) return h(g, f.role), e.resolve(k, d, g), e.promise(); j = g } var p = f.pageContainer, o = new a.Event("pagebeforeload"), n = { url: b, absUrl: k, dataUrl: m, deferred: e, options: f }; p.trigger(o, n); if (o.isDefaultPrevented()) return e.promise(); if (f.showLoadMsg) var u = setTimeout(function () { a.mobile.showPageLoadingMsg() }, f.loadMsgDelay); !a.mobile.allowCrossDomainPages && !l.isSameDomain(t, k) ? e.reject(k, d) : a.ajax({ url: v, type: f.type, data: f.data, dataType: "html", success: function (c, q, p) {
                var o =
a("<div></div>"), t = c.match(/<title[^>]*>([^<]*)/) && RegExp.$1, s = RegExp("\\bdata-" + a.mobile.ns + "url=[\"']?([^\"'>]*)[\"']?"); RegExp("(<[^>]+\\bdata-" + a.mobile.ns + "role=[\"']?page[\"']?[^>]*>)").test(c) && RegExp.$1 && s.test(RegExp.$1) && RegExp.$1 && (b = v = l.getFilePath(RegExp.$1)); w && w.set(v); o.get(0).innerHTML = c; g = o.find(":jqmData(role='page'), :jqmData(role='dialog')").first(); g.length || (g = a("<div data-" + a.mobile.ns + "role='page'>" + c.split(/<\/?body[^>]*>/gmi)[1] + "</div>")); t && !g.jqmData("title") && (~t.indexOf("&") &&
(t = a("<div>" + t + "</div>").text()), g.jqmData("title", t)); if (!a.support.dynamicBaseTag) { var r = l.get(v); g.find("[src], link[href], a[rel='external'], :jqmData(ajax='false'), a[target]").each(function () { var b = a(this).is("[href]") ? "href" : a(this).is("[src]") ? "src" : "action", c = a(this).attr(b), c = c.replace(location.protocol + "//" + location.host + location.pathname, ""); /^(\w+:|#|\/)/.test(c) || a(this).attr(b, r + c) }) } g.attr("data-" + a.mobile.ns + "url", l.convertUrlToDataUrl(v)).attr("data-" + a.mobile.ns + "external-page",
true).appendTo(f.pageContainer); g.one("pagecreate", a.mobile._bindPageRemove); h(g, f.role); k.indexOf("&" + a.mobile.subPageUrlKey) > -1 && (g = f.pageContainer.children(":jqmData(url='" + m + "')")); f.showLoadMsg && (clearTimeout(u), a.mobile.hidePageLoadingMsg()); n.xhr = p; n.textStatus = q; n.page = g; f.pageContainer.trigger("pageload", n); e.resolve(k, d, g, j)
            }, error: function (b, c, g) {
                w && w.set(l.get()); n.xhr = b; n.textStatus = c; n.errorThrown = g; b = new a.Event("pageloadfailed"); f.pageContainer.trigger(b, n); b.isDefaultPrevented() ||
(f.showLoadMsg && (clearTimeout(u), a.mobile.hidePageLoadingMsg(), a.mobile.showPageLoadingMsg(a.mobile.pageLoadErrorMessageTheme, a.mobile.pageLoadErrorMessage, true), setTimeout(a.mobile.hidePageLoadingMsg, 1500)), e.reject(k, d))
            } 
            }); return e.promise()
        }; a.mobile.loadPage.defaults = { type: "get", data: c, reloadPage: false, role: c, showLoadMsg: false, pageContainer: c, loadMsgDelay: 50 }; a.mobile.changePage = function (e, f) {
            if (z) D.unshift(arguments); else {
                var j = a.extend({}, a.mobile.changePage.defaults, f); j.pageContainer = j.pageContainer ||
a.mobile.pageContainer; j.fromPage = j.fromPage || a.mobile.activePage; var v = j.pageContainer, m = new a.Event("pagebeforechange"), q = { toPage: e, options: j }; v.trigger(m, q); if (!m.isDefaultPrevented()) if (e = q.toPage, z = true, typeof e == "string") a.mobile.loadPage(e, j).done(function (b, c, d, e) { z = false; c.duplicateCachedPage = e; a.mobile.changePage(d, c) }).fail(function () { z = false; b(true); g(); j.pageContainer.trigger("pagechangefailed", q) }); else {
                    if (e[0] === a.mobile.firstPage[0] && !j.dataUrl) j.dataUrl = t.hrefNoHash; var m = j.fromPage,
o = j.dataUrl && l.convertUrlToDataUrl(j.dataUrl) || e.jqmData("url"), n = o; l.getFilePath(o); var s = p.getActive(), r = p.activeIndex === 0, w = 0, A = k.title, x = j.role === "dialog" || e.jqmData("role") === "dialog"; if (m && m[0] === e[0] && !j.allowSamePageTransition) z = false, v.trigger("pagechange", q); else {
                        h(e, j.role); j.fromHashChange && p.directHashChange({ currentUrl: o, isBack: function () { w = -1 }, isForward: function () { w = 1 } }); try { k.activeElement && k.activeElement.nodeName.toLowerCase() != "body" ? a(k.activeElement).blur() : a("input:focus, textarea:focus, select:focus").blur() } catch (E) { } x &&
s && (o = (s.url || "") + C); if (j.changeHash !== false && o) p.ignoreNextHashChange = true, l.set(o); var B = !s ? A : e.jqmData("title") || e.children(":jqmData(role='header')").find(".ui-title").getEncodedText(); B && A == k.title && (A = B); e.jqmData("title") || e.jqmData("title", A); j.transition = j.transition || (w && !r ? s.transition : c) || (x ? a.mobile.defaultDialogTransition : a.mobile.defaultPageTransition); w || p.addNew(o, j.transition, A, n, j.role); k.title = p.getActive().title; a.mobile.activePage = e; j.reverse = j.reverse || w < 0; d(e, m, j.transition,
j.reverse).done(function (c, d, f, h, l) { b(); j.duplicateCachedPage && j.duplicateCachedPage.remove(); u.removeClass("ui-mobile-rendering"); l || a.mobile.focusPage(e); g(); v.trigger("pagechange", q) })
                    } 
                } 
            } 
        }; a.mobile.changePage.defaults = { transition: c, reverse: false, changeHash: true, fromHashChange: false, role: c, duplicateCachedPage: c, pageContainer: c, showLoadMsg: true, dataUrl: c, fromPage: c, allowSamePageTransition: false }; a.mobile._registerInternalEvents = function () {
            a(k).delegate("form", "submit", function (b) {
                var c = a(this); if (a.mobile.ajaxEnabled &&
!c.is(":jqmData(ajax='false')")) { var d = c.attr("method"), e = c.attr("target"), f = c.attr("action"); if (!f && (f = q(c), f === s.hrefNoHash)) f = t.hrefNoSearch; f = l.makeUrlAbsolute(f, q(c)); !l.isExternal(f) && !e && (a.mobile.changePage(f, { type: d && d.length && d.toLowerCase() || "get", data: c.serialize(), transition: c.jqmData("transition"), direction: c.jqmData("direction"), reloadPage: true }), b.preventDefault()) } 
            }); a(k).bind("vclick", function (c) {
                if (!(c.which > 1) && a.mobile.linkBindingEnabled && (c = j(c.target)) && l.parseUrl(c.getAttribute("href") ||
"#").hash !== "#") b(true), o = a(c).closest(".ui-btn").not(".ui-disabled"), o.addClass(a.mobile.activeBtnClass), a("." + a.mobile.activePageClass + " .ui-btn").not(c).blur(), a(c).jqmData("href", a(c).attr("href")).attr("href", "#")
            }); a(k).bind("click", function (d) {
                if (a.mobile.linkBindingEnabled) {
                    var e = j(d.target); if (e && !(d.which > 1)) {
                        var f = a(e), g = function () { n.setTimeout(function () { b(true) }, 200) }; f.jqmData("href") && f.attr("href", f.jqmData("href")); if (f.is(":jqmData(rel='back')")) return n.history.back(), false; var h =
q(f), e = l.makeUrlAbsolute(f.attr("href") || "#", h); if (!a.mobile.ajaxEnabled && !l.isEmbeddedPage(e)) g(); else {
                            if (e.search("#") != -1) if (e = e.replace(/[^#]*#/, "")) e = l.isPath(e) ? l.makeUrlAbsolute(e, h) : l.makeUrlAbsolute("#" + e, t.hrefNoHash); else { d.preventDefault(); return } var h = f.is("[rel='external']") || f.is(":jqmData(ajax='false')") || f.is("[target]"), k = a.mobile.allowCrossDomainPages && t.protocol === "file:" && e.search(/^https?:/) != -1; h || l.isExternal(e) && !k ? g() : (g = f.jqmData("transition"), h = (h = f.jqmData("direction")) &&
h === "reverse" || f.jqmData("back"), f = f.attr("data-" + a.mobile.ns + "rel") || c, a.mobile.changePage(e, { transition: g, reverse: h, role: f }), d.preventDefault())
                        } 
                    } 
                } 
            }); a(k).delegate(".ui-page", "pageshow.prefetch", function () { var b = []; a(this).find("a:jqmData(prefetch)").each(function () { var c = a(this), d = c.attr("href"); d && a.inArray(d, b) === -1 && (b.push(d), a.mobile.loadPage(d, { role: c.attr("data-" + a.mobile.ns + "rel") })) }) }); a.mobile._handleHashChange = function (b) {
                var d = l.stripHash(b), e = { transition: a.mobile.urlHistory.stack.length ===
0 ? "none" : c, changeHash: false, fromHashChange: true
                }; if (!a.mobile.hashListeningEnabled || p.ignoreNextHashChange) p.ignoreNextHashChange = false; else {
                    if (p.stack.length > 1 && d.indexOf(C) > -1) if (a.mobile.activePage.is(".ui-dialog-page")) p.directHashChange({ currentUrl: d, either: function (b) { var c = a.mobile.urlHistory.getActive(); d = c.pageUrl; a.extend(e, { role: c.role, transition: c.transition, reverse: b }) } }); else {
                        p.directHashChange({ currentUrl: d, isBack: function () { n.history.back() }, isForward: function () { n.history.forward() } });
                        return
                    } d ? (d = typeof d === "string" && !l.isPath(d) ? l.makeUrlAbsolute("#" + d, s) : d, a.mobile.changePage(d, e)) : a.mobile.changePage(a.mobile.firstPage, e)
                } 
            }; m.bind("hashchange", function () { a.mobile._handleHashChange(location.hash) }); a(k).bind("pageshow", f); a(n).bind("throttledresize", f)
        } 
    })(jQuery); (function (a, c) {
        var b = {}, g = a(c), d = a.mobile.path.parseUrl(location.href); a.extend(b, { initialFilePath: d.pathname + d.search, initialHref: d.hrefNoHash, state: function () {
            return { hash: location.hash || "#" + b.initialFilePath, title: k.title,
                initialHref: b.initialHref
            }
        }, resetUIKeys: function (b) { var c = "&" + a.mobile.subPageUrlKey, d = b.indexOf(a.mobile.dialogHashKey); d > -1 ? b = b.slice(0, d) + "#" + b.slice(d) : b.indexOf(c) > -1 && (b = b.split(c).join("#" + c)); return b }, hashValueAfterReset: function (c) { c = b.resetUIKeys(c); return a.mobile.path.parseUrl(c).hash }, nextHashChangePrevented: function (c) { a.mobile.urlHistory.ignoreNextHashChange = c; b.onHashChangeDisabled = c }, onHashChange: function () {
            if (!b.onHashChangeDisabled) {
                var c, d; c = location.hash; var g = a.mobile.path.isPath(c),
j = g ? location.href : a.mobile.getDocumentUrl(); c = g ? c.replace("#", "") : c; d = b.state(); c = a.mobile.path.makeUrlAbsolute(c, j); g && (c = b.resetUIKeys(c)); history.replaceState(d, k.title, c)
            } 
        }, onPopState: function (c) {
            var c = c.originalEvent.state, d, h; if (c) {
                d = b.hashValueAfterReset(a.mobile.urlHistory.getActive().url); h = b.hashValueAfterReset(c.hash.replace("#", "")); if (d = d !== h) g.one("hashchange.pushstate", function () { b.nextHashChangePrevented(false) }); b.nextHashChangePrevented(false); a.mobile._handleHashChange(c.hash);
                d && b.nextHashChangePrevented(true)
            } 
        }, init: function () { g.bind("hashchange", b.onHashChange); g.bind("popstate", b.onPopState); location.hash === "" && history.replaceState(b.state(), k.title, location.href) } 
        }); a(function () { a.mobile.pushStateEnabled && a.support.pushState && b.init() })
    })(jQuery, this); jQuery.mobile.transitionFallbacks.pop = "fade"; jQuery.mobile.transitionFallbacks.slide = "fade"; jQuery.mobile.transitionFallbacks.slidedown = "fade"; jQuery.mobile.transitionFallbacks.slideup = "fade"; jQuery.mobile.transitionFallbacks.flip =
"fade"; jQuery.mobile.transitionFallbacks.flow = "fade"; jQuery.mobile.transitionFallbacks.turn = "fade"; (function (a) {
    a.mobile.page.prototype.options.degradeInputs = { color: false, date: false, datetime: false, "datetime-local": false, email: false, month: false, number: false, range: "number", search: "text", tel: false, time: false, url: false, week: false }; a(k).bind("pagecreate create", function (c) {
        var b = a.mobile.closestPageData(a(c.target)), g; if (b) g = b.options, a(c.target).find("input").not(b.keepNativeSelector()).each(function () {
            var b =
a(this), c = this.getAttribute("type"), f = g.degradeInputs[c] || "text"; if (g.degradeInputs[c]) { var h = a("<div>").html(b.clone()).html(), j = h.indexOf(" type=") > -1; b.replaceWith(h.replace(j ? /\s+type=["']?\w+['"]?/ : /\/?>/, ' type="' + f + '" data-' + a.mobile.ns + 'type="' + c + '"' + (j ? "" : ">"))) } 
        })
    })
})(jQuery); (function (a, c) {
    a.widget("mobile.dialog", a.mobile.widget, { options: { closeBtnText: "Close", overlayTheme: "a", initSelector: ":jqmData(role='dialog')" }, _create: function () {
        var b = this, c = this.element, d = a("<a href='#' data-" + a.mobile.ns +
"icon='delete' data-" + a.mobile.ns + "iconpos='notext'>" + this.options.closeBtnText + "</a>"), e = a("<div/>", { role: "dialog", "class": "ui-dialog ui-corner-all ui-overlay-shadow" }); c.addClass("ui-dialog-page ui-overlay-" + this.options.overlayTheme); c.wrapInner(e).find(":jqmData(role='header')").prepend(d).end().find(":first-child").addClass("ui-corner-top").end().find(":last-child").addClass("ui-corner-bottom"); d.bind("click", function () { b.close() }); c.bind("vclick submit", function (b) {
    var b = a(b.target).closest(b.type ===
"vclick" ? "a" : "form"), c; b.length && !b.jqmData("transition") && (c = a.mobile.urlHistory.getActive() || {}, b.attr("data-" + a.mobile.ns + "transition", c.transition || a.mobile.defaultDialogTransition).attr("data-" + a.mobile.ns + "direction", "reverse"))
}).bind("pagehide", function (c, d) {
    a(this).find("." + a.mobile.activeBtnClass).removeClass(a.mobile.activeBtnClass); b.options.overlayTheme && (!d.nextPage || !d.nextPage.is(".ui-dialog-page.ui-overlay-" + b.options.overlayTheme)) && a.mobile.pageContainer.removeClass("ui-overlay-" +
b.options.overlayTheme)
}).bind("pagebeforeshow", function () { b.options.overlayTheme && a.mobile.pageContainer.addClass("ui-overlay-" + b.options.overlayTheme) })
    }, close: function () { c.history.back() } 
    }); a(k).delegate(a.mobile.dialog.prototype.options.initSelector, "pagecreate", function () { a(this).dialog() })
})(jQuery, this); (function (a) { a.fn.fieldcontain = function () { return this.addClass("ui-field-contain ui-body ui-br") }; a(k).bind("pagecreate create", function (c) { a(":jqmData(role='fieldcontain')", c.target).fieldcontain() }) })(jQuery);
    (function (a) { a.fn.grid = function (c) { return this.each(function () { var b = a(this), g = a.extend({ grid: null }, c), d = b.children(), e = { solo: 1, a: 2, b: 3, c: 4, d: 5 }, g = g.grid; if (!g) if (d.length <= 5) for (var f in e) e[f] === d.length && (g = f); else g = "a"; e = e[g]; b.addClass("ui-grid-" + g); d.filter(":nth-child(" + e + "n+1)").addClass("ui-block-a"); e > 1 && d.filter(":nth-child(" + e + "n+2)").addClass("ui-block-b"); e > 2 && d.filter(":nth-child(3n+3)").addClass("ui-block-c"); e > 3 && d.filter(":nth-child(4n+4)").addClass("ui-block-d"); e > 4 && d.filter(":nth-child(5n+5)").addClass("ui-block-e") }) } })(jQuery);
    (function (a) { a(k).bind("pagecreate create", function (c) { a(":jqmData(role='nojs')", c.target).addClass("ui-nojs") }) })(jQuery); (function (a, c) {
        function b(a) { for (var b; a; ) { if ((b = typeof a.className === "string" && a.className + " ") && b.indexOf("ui-btn ") > -1 && b.indexOf("ui-disabled ") < 0) break; a = a.parentNode } return a } a.fn.buttonMarkup = function (b) {
            for (var b = b || {}, e = 0; e < this.length; e++) {
                var f = this.eq(e), h = f[0], j = a.extend({}, a.fn.buttonMarkup.defaults, { icon: b.icon !== c ? b.icon : f.jqmData("icon"), iconpos: b.iconpos !== c ?
b.iconpos : f.jqmData("iconpos"), theme: b.theme !== c ? b.theme : f.jqmData("theme"), inline: b.inline !== c ? b.inline : f.jqmData("inline"), shadow: b.shadow !== c ? b.shadow : f.jqmData("shadow"), corners: b.corners !== c ? b.corners : f.jqmData("corners"), iconshadow: b.iconshadow !== c ? b.iconshadow : f.jqmData("iconshadow")
                }, b), q = "ui-btn-inner", m, n, r = k.createElement(j.wrapperEls), l = k.createElement(j.wrapperEls), o = j.icon ? k.createElement("span") : null; if (!(h.tagName === "INPUT" && f.jqmData("role") === "button")) if (h.tagName === "BUTTON") a(h.parentNode).hasClass("ui-btn") ||
a(h).button(); else {
                    g && g(); if (!j.theme) j.theme = a.mobile.getInheritedTheme(f, "c"); m = "ui-btn ui-btn-up-" + j.theme; j.inline && (m += " ui-btn-inline"); if (j.icon) j.icon = "ui-icon-" + j.icon, j.iconpos = j.iconpos || "left", n = "ui-icon " + j.icon, j.iconshadow && (n += " ui-icon-shadow"); j.iconpos && (m += " ui-btn-icon-" + j.iconpos, j.iconpos == "notext" && !f.attr("title") && f.attr("title", f.getEncodedText())); j.corners && (m += " ui-btn-corner-all", q += " ui-btn-corner-all"); j.shadow && (m += " ui-shadow"); h.setAttribute("data-" + a.mobile.ns +
"theme", j.theme); f.removeClass("ui-link").addClass(m); r.className = q; l.className = "ui-btn-text"; r.appendChild(l); if (o) o.className = n, r.appendChild(o); for (; h.firstChild; ) l.appendChild(h.firstChild); h.appendChild(r); a.data(h, "textWrapper", a(l))
                } 
            } return this
        }; a.fn.buttonMarkup.defaults = { corners: true, shadow: true, iconshadow: true, inline: false, wrapperEls: "span" }; var g = function () {
            var c, e; a(k).bind({ vmousedown: function (e) {
                var e = b(e.target), g, j; e && (g = a(e), j = g.attr("data-" + a.mobile.ns + "theme"), a.support.touch ?
c = setTimeout(function () { g.removeClass("ui-btn-up-" + j).addClass("ui-btn-down-" + j) }, 200) : g.removeClass("ui-btn-up-" + j).addClass("ui-btn-down-" + j))
            }, "vmousecancel vmouseup": function (c) { var c = b(c.target), d; c && (c = a(c), d = c.attr("data-" + a.mobile.ns + "theme"), c.removeClass("ui-btn-down-" + d).addClass("ui-btn-up-" + d)) }, "vmouseover focus": function (c) {
                var c = b(c.target), d, g; c && (d = a(c), g = d.attr("data-" + a.mobile.ns + "theme"), a.support.touch ? e = setTimeout(function () {
                    d.removeClass("ui-btn-up-" + g).addClass("ui-btn-hover-" +
g)
                }, 200) : d.removeClass("ui-btn-up-" + g).addClass("ui-btn-hover-" + g))
            }, "vmouseout blur scrollstart": function (g) { var g = b(g.target), h; g && (g = a(g), h = g.attr("data-" + a.mobile.ns + "theme"), g.removeClass("ui-btn-hover-" + h + " ui-btn-down-" + h).addClass("ui-btn-up-" + h), c && clearTimeout(c), e && clearTimeout(e)) } 
            }); g = null
        }; a(k).bind("pagecreate create", function (b) { a(":jqmData(role='button'), .ui-bar > a, .ui-header > a, .ui-footer > a, .ui-bar > :jqmData(role='controlgroup') > a", b.target).not(".ui-btn, :jqmData(role='none'), :jqmData(role='nojs')").buttonMarkup() })
    })(jQuery);
    (function (a) {
        a.mobile.page.prototype.options.backBtnText = "Back"; a.mobile.page.prototype.options.addBackBtn = false; a.mobile.page.prototype.options.backBtnTheme = null; a.mobile.page.prototype.options.headerTheme = "a"; a.mobile.page.prototype.options.footerTheme = "a"; a.mobile.page.prototype.options.contentTheme = null; a(k).delegate(":jqmData(role='page'), :jqmData(role='dialog')", "pagecreate", function () {
            var c = a(this), b = c.data("page").options, g = c.jqmData("role"), d = b.theme; a(":jqmData(role='header'), :jqmData(role='footer'), :jqmData(role='content')",
this).each(function () {
    var c = a(this), f = c.jqmData("role"), h = c.jqmData("theme"), j = h || b.contentTheme || g === "dialog" && d, k; c.addClass("ui-" + f); if (f === "header" || f === "footer") {
        var m = h || (f === "header" ? b.headerTheme : b.footerTheme) || d; c.addClass("ui-bar-" + m).attr("role", f === "header" ? "banner" : "contentinfo"); h = c.children("a"); j = h.hasClass("ui-btn-left"); k = h.hasClass("ui-btn-right"); j = j || h.eq(0).not(".ui-btn-right").addClass("ui-btn-left").length; k || h.eq(1).addClass("ui-btn-right"); b.addBackBtn && f === "header" && a(".ui-page").length >
1 && c.jqmData("url") !== a.mobile.path.stripHash(location.hash) && !j && a("<a href='#' class='ui-btn-left' data-" + a.mobile.ns + "rel='back' data-" + a.mobile.ns + "icon='arrow-l'>" + b.backBtnText + "</a>").attr("data-" + a.mobile.ns + "theme", b.backBtnTheme || m).prependTo(c); c.children("h1, h2, h3, h4, h5, h6").addClass("ui-title").attr({ tabindex: "0", role: "heading", "aria-level": "1" })
    } else f === "content" && (j && c.addClass("ui-body-" + j), c.attr("role", "main"))
})
        })
    })(jQuery); (function (a) {
        a.widget("mobile.collapsible", a.mobile.widget,
{ options: { expandCueText: " click to expand contents", collapseCueText: " click to collapse contents", collapsed: true, heading: "h1,h2,h3,h4,h5,h6,legend", theme: null, contentTheme: null, iconTheme: "d", initSelector: ":jqmData(role='collapsible')" }, _create: function () {
    var c = this.element, b = this.options, g = c.addClass("ui-collapsible"), d = c.children(b.heading).first(), e = g.wrapInner("<div class='ui-collapsible-content'></div>").find(".ui-collapsible-content"), f = c.closest(":jqmData(role='collapsible-set')").addClass("ui-collapsible-set");
    d.is("legend") && (d = a("<div role='heading'>" + d.html() + "</div>").insertBefore(d), d.next().remove()); if (f.length) { if (!b.theme) b.theme = f.jqmData("theme"); if (!b.contentTheme) b.contentTheme = f.jqmData("content-theme") } e.addClass(b.contentTheme ? "ui-body-" + b.contentTheme : ""); d.insertBefore(e).addClass("ui-collapsible-heading").append("<span class='ui-collapsible-heading-status'></span>").wrapInner("<a href='#' class='ui-collapsible-heading-toggle'></a>").find("a").first().buttonMarkup({ shadow: false, corners: false,
        iconPos: "left", icon: "plus", theme: b.theme
    }).add(".ui-btn-inner").addClass("ui-corner-top ui-corner-bottom"); g.bind("expand collapse", function (c) {
        if (!c.isDefaultPrevented()) {
            c.preventDefault(); var j = a(this), c = c.type === "collapse", k = b.contentTheme; d.toggleClass("ui-collapsible-heading-collapsed", c).find(".ui-collapsible-heading-status").text(c ? b.expandCueText : b.collapseCueText).end().find(".ui-icon").toggleClass("ui-icon-minus", !c).toggleClass("ui-icon-plus", c); j.toggleClass("ui-collapsible-collapsed",
c); e.toggleClass("ui-collapsible-content-collapsed", c).attr("aria-hidden", c); if (k && (!f.length || g.jqmData("collapsible-last"))) d.find("a").first().add(d.find(".ui-btn-inner")).toggleClass("ui-corner-bottom", c), e.toggleClass("ui-corner-bottom", !c); e.trigger("updatelayout")
        } 
    }).trigger(b.collapsed ? "collapse" : "expand"); d.bind("click", function (a) { var b = d.is(".ui-collapsible-heading-collapsed") ? "expand" : "collapse"; g.trigger(b); a.preventDefault() })
} 
}); a(k).bind("pagecreate create", function (c) {
    a(a.mobile.collapsible.prototype.options.initSelector,
c.target).collapsible()
})
    })(jQuery); (function (a) {
        a.widget("mobile.collapsibleset", a.mobile.widget, { options: { initSelector: ":jqmData(role='collapsible-set')" }, _create: function () {
            var c = this.element.addClass("ui-collapsible-set"), b = this.options, g = c.children(":jqmData(role='collapsible')"); if (!b.theme) b.theme = c.jqmData("theme"); if (!b.contentTheme) b.contentTheme = c.jqmData("content-theme"); c.jqmData("collapsiblebound") || (c.jqmData("collapsiblebound", true).bind("expand collapse", function (b) {
                var c = b.type ===
"collapse", b = a(b.target).closest(".ui-collapsible"), g = b.data("collapsible"); g.options.contentTheme && b.jqmData("collapsible-last") && (b.find(g.options.heading).first().find("a").first().add(".ui-btn-inner").toggleClass("ui-corner-bottom", c), b.find(".ui-collapsible-content").toggleClass("ui-corner-bottom", !c))
            }).bind("expand", function (b) { a(b.target).closest(".ui-collapsible").siblings(".ui-collapsible").trigger("collapse") }), g.each(function () { a(this).find(a.mobile.collapsible.prototype.options.heading).find("a").first().add(".ui-btn-inner").removeClass("ui-corner-top ui-corner-bottom") }),
g.first().find("a").first().addClass("ui-corner-top").find(".ui-btn-inner").addClass("ui-corner-top"), g.last().jqmData("collapsible-last", true).find("a").first().addClass("ui-corner-bottom").find(".ui-btn-inner").addClass("ui-corner-bottom"))
        } 
        }); a(k).bind("pagecreate create", function (c) { a(a.mobile.collapsibleset.prototype.options.initSelector, c.target).collapsibleset() })
    })(jQuery); (function (a, c) {
        a.widget("mobile.navbar", a.mobile.widget, { options: { iconpos: "top", grid: null, initSelector: ":jqmData(role='navbar')" },
            _create: function () { var b = this.element, g = b.find("a"), d = g.filter(":jqmData(icon)").length ? this.options.iconpos : c; b.addClass("ui-navbar").attr("role", "navigation").find("ul").grid({ grid: this.options.grid }); d || b.addClass("ui-navbar-noicons"); g.buttonMarkup({ corners: false, shadow: false, iconpos: d }); b.delegate("a", "vclick", function (b) { a(b.target).hasClass("ui-disabled") || (g.removeClass(a.mobile.activeBtnClass), a(this).addClass(a.mobile.activeBtnClass)) }); b.closest(".ui-page").bind("pagebeforeshow", function () { g.filter(".ui-state-persist").addClass(a.mobile.activeBtnClass) }) } 
        });
        a(k).bind("pagecreate create", function (b) { a(a.mobile.navbar.prototype.options.initSelector, b.target).navbar() })
    })(jQuery); (function (a) {
        var c = {}; a.widget("mobile.listview", a.mobile.widget, { options: { theme: null, countTheme: "c", headerTheme: "b", dividerTheme: "b", splitIcon: "arrow-r", splitTheme: "b", inset: false, initSelector: ":jqmData(role='listview')" }, _create: function () {
            var a = this; a.element.addClass(function (c, d) { return d + " ui-listview " + (a.options.inset ? " ui-listview-inset ui-corner-all ui-shadow " : "") });
            a.refresh(true)
        }, _removeCorners: function (a, c) { a = a.add(a.find(".ui-btn-inner, .ui-li-link-alt, .ui-li-thumb")); c === "top" ? a.removeClass("ui-corner-top ui-corner-tr ui-corner-tl") : c === "bottom" ? a.removeClass("ui-corner-bottom ui-corner-br ui-corner-bl") : a.removeClass("ui-corner-top ui-corner-tr ui-corner-tl ui-corner-bottom ui-corner-br ui-corner-bl") }, _refreshCorners: function (a) {
            var c, d; this.options.inset && (c = this.element.children("li"), d = a ? c.not(".ui-screen-hidden") : c.filter(":visible"), this._removeCorners(c),
c = d.first().addClass("ui-corner-top"), c.add(c.find(".ui-btn-inner").not(".ui-li-link-alt span:first-child")).addClass("ui-corner-top").end().find(".ui-li-link-alt, .ui-li-link-alt span:first-child").addClass("ui-corner-tr").end().find(".ui-li-thumb").not(".ui-li-icon").addClass("ui-corner-tl"), d = d.last().addClass("ui-corner-bottom"), d.add(d.find(".ui-btn-inner")).find(".ui-li-link-alt").addClass("ui-corner-br").end().find(".ui-li-thumb").not(".ui-li-icon").addClass("ui-corner-bl")); a || this.element.trigger("updatelayout")
        },
            _findFirstElementByTagName: function (a, c, d, e) { var f = {}; for (f[d] = f[e] = true; a; ) { if (f[a.nodeName]) return a; a = a[c] } return null }, _getChildrenByTagName: function (b, c, d) { var e = [], f = {}; f[c] = f[d] = true; for (b = b.firstChild; b; ) f[b.nodeName] && e.push(b), b = b.nextSibling; return a(e) }, _addThumbClasses: function (b) {
                var c, d, e = b.length; for (c = 0; c < e; c++) d = a(this._findFirstElementByTagName(b[c].firstChild, "nextSibling", "img", "IMG")), d.length && (d.addClass("ui-li-thumb"), a(this._findFirstElementByTagName(d[0].parentNode, "parentNode",
"li", "LI")).addClass(d.is(".ui-li-icon") ? "ui-li-has-icon" : "ui-li-has-thumb"))
            }, refresh: function (b) {
                this.parentPage = this.element.closest(".ui-page"); this._createSubPages(); var c = this.options, d = this.element, e = d.jqmData("dividertheme") || c.dividerTheme, f = d.jqmData("splittheme"), h = d.jqmData("spliticon"), j = this._getChildrenByTagName(d[0], "li", "LI"), q = a.support.cssPseudoElement || !a.nodeName(d[0], "ol") ? 0 : 1, m = {}, n, r, l, o, p; q && d.find(".ui-li-dec").remove(); if (!c.theme) c.theme = a.mobile.getInheritedTheme(this.element,
"c"); for (var D = 0, z = j.length; D < z; D++) {
                    n = j.eq(D); r = "ui-li"; if (b || !n.hasClass("ui-li")) l = n.jqmData("theme") || c.theme, o = this._getChildrenByTagName(n[0], "a", "A"), o.length ? (p = n.jqmData("icon"), n.buttonMarkup({ wrapperEls: "div", shadow: false, corners: false, iconpos: "right", icon: o.length > 1 || p === false ? false : p || "arrow-r", theme: l }), p != false && o.length == 1 && n.addClass("ui-li-has-arrow"), o.first().removeClass("ui-link").addClass("ui-link-inherit"), o.length > 1 && (r += " ui-li-has-alt", o = o.last(), p = f || o.jqmData("theme") ||
c.splitTheme, o.appendTo(n).attr("title", o.getEncodedText()).addClass("ui-li-link-alt").empty().buttonMarkup({ shadow: false, corners: false, theme: l, icon: false, iconpos: false }).find(".ui-btn-inner").append(a(k.createElement("span")).buttonMarkup({ shadow: true, corners: true, theme: p, iconpos: "notext", icon: h || o.jqmData("icon") || c.splitIcon })))) : n.jqmData("role") === "list-divider" ? (r += " ui-li-divider ui-btn ui-bar-" + e, n.attr("role", "heading"), q && (q = 1)) : r += " ui-li-static ui-body-" + l; q && r.indexOf("ui-li-divider") <
0 && (l = n.is(".ui-li-static:first") ? n : n.find(".ui-link-inherit"), l.addClass("ui-li-jsnumbering").prepend("<span class='ui-li-dec'>" + q++ + ". </span>")); m[r] || (m[r] = []); m[r].push(n[0])
                } for (r in m) a(m[r]).addClass(r).children(".ui-btn-inner").addClass(r); d.find("h1, h2, h3, h4, h5, h6").addClass("ui-li-heading").end().find("p, dl").addClass("ui-li-desc").end().find(".ui-li-aside").each(function () { var b = a(this); b.prependTo(b.parent()) }).end().find(".ui-li-count").each(function () { a(this).closest("li").addClass("ui-li-has-count") }).addClass("ui-btn-up-" +
(d.jqmData("counttheme") || this.options.countTheme) + " ui-btn-corner-all"); this._addThumbClasses(j); this._addThumbClasses(d.find(".ui-link-inherit")); this._refreshCorners(b)
            }, _idStringEscape: function (a) { return a.replace(/[^a-zA-Z0-9]/g, "-") }, _createSubPages: function () {
                var b = this.element, g = b.closest(".ui-page"), d = g.jqmData("url"), e = d || g[0][a.expando], f = b.attr("id"), h = this.options, j = "data-" + a.mobile.ns, k = this, m = g.find(":jqmData(role='footer')").jqmData("id"), n; typeof c[e] === "undefined" && (c[e] = -1); f = f ||
++c[e]; a(b.find("li>ul, li>ol").toArray().reverse()).each(function (c) {
    var e = a(this), g = e.attr("id") || f + "-" + c, c = e.parent(), k = a(e.prevAll().toArray().reverse()), k = k.length ? k : a("<span>" + a.trim(c.contents()[0].nodeValue) + "</span>"), q = k.first().getEncodedText(), g = (d || "") + "&" + a.mobile.subPageUrlKey + "=" + g, z = e.jqmData("theme") || h.theme, C = e.jqmData("counttheme") || b.jqmData("counttheme") || h.countTheme; n = true; e.detach().wrap("<div " + j + "role='page' " + j + "url='" + g + "' " + j + "theme='" + z + "' " + j + "count-theme='" + C + "'><div " +
j + "role='content'></div></div>").parent().before("<div " + j + "role='header' " + j + "theme='" + h.headerTheme + "'><div class='ui-title'>" + q + "</div></div>").after(m ? a("<div " + j + "role='footer' " + j + "id='" + m + "'>") : "").parent().appendTo(a.mobile.pageContainer).page(); e = c.find("a:first"); e.length || (e = a("<a/>").html(k || q).prependTo(c.empty())); e.attr("href", "#" + g)
}).listview(); n && g.is(":jqmData(external-page='true')") && g.data("page").options.domCache === false && g.unbind("pagehide.remove").bind("pagehide.remove", function (b,
c) { var e = c.nextPage; c.nextPage && (e = e.jqmData("url"), e.indexOf(d + "&" + a.mobile.subPageUrlKey) !== 0 && (k.childPages().remove(), g.remove())) })
            }, childPages: function () { var b = this.parentPage.jqmData("url"); return a(":jqmData(url^='" + b + "&" + a.mobile.subPageUrlKey + "')") } 
        }); a(k).bind("pagecreate create", function (b) { a(a.mobile.listview.prototype.options.initSelector, b.target).listview() })
    })(jQuery); (function (a, c) {
        a.widget("mobile.checkboxradio", a.mobile.widget, { options: { theme: null, initSelector: "input[type='checkbox'],input[type='radio']" },
            _create: function () {
                var b = this, g = this.element, d = g.closest("form,fieldset,:jqmData(role='page')").find("label").filter("[for='" + g[0].id + "']"), e = g.attr("type"), f = e + "-on", h = e + "-off", j = g.parents(":jqmData(type='horizontal')").length ? c : h; if (!(e !== "checkbox" && e !== "radio")) {
                    a.extend(this, { label: d, inputtype: e, checkedClass: "ui-" + f + (j ? "" : " " + a.mobile.activeBtnClass), uncheckedClass: "ui-" + h, checkedicon: "ui-icon-" + f, uncheckedicon: "ui-icon-" + h }); if (!this.options.theme) this.options.theme = this.element.jqmData("theme");
                    d.buttonMarkup({ theme: this.options.theme, icon: j, shadow: false }); g.add(d).wrapAll("<div class='ui-" + e + "'></div>"); d.bind({ vmouseover: function (b) { a(this).parent().is(".ui-disabled") && b.stopPropagation() }, vclick: function (a) { if (g.is(":disabled")) a.preventDefault(); else return b._cacheVals(), g.attr("checked", e === "radio" && true || !g.attr("checked")), g.triggerHandler("click"), b._getInputSet().not(g).removeAttr("checked"), b._updateAll(), false } }); g.bind({ vmousedown: function () { b._cacheVals() }, vclick: function () {
                        var c =
a(this); c.is(":checked") ? (c.attr("checked", "checked"), b._getInputSet().not(c).removeAttr("checked")) : c.removeAttr("checked"); b._updateAll()
                    }, focus: function () { d.addClass(a.mobile.focusClass) }, blur: function () { d.removeClass(a.mobile.focusClass) } 
                    }); this.refresh()
                } 
            }, _cacheVals: function () { this._getInputSet().each(function () { var b = a(this); b.jqmData("cacheVal", b.is(":checked")) }) }, _getInputSet: function () {
                return this.inputtype == "checkbox" ? this.element : this.element.closest("form,fieldset,:jqmData(role='page')").find("input[name='" +
this.element.attr("name") + "'][type='" + this.inputtype + "']")
            }, _updateAll: function () { var b = this; this._getInputSet().each(function () { var c = a(this); (c.is(":checked") || b.inputtype === "checkbox") && c.trigger("change") }).checkboxradio("refresh") }, refresh: function () {
                var a = this.element, c = this.label, d = c.find(".ui-icon"); a[0].getAttribute("checked") ? (c.addClass(this.checkedClass).removeClass(this.uncheckedClass), d.addClass(this.checkedicon).removeClass(this.uncheckedicon)) : (c.removeClass(this.checkedClass).addClass(this.uncheckedClass),
d.removeClass(this.checkedicon).addClass(this.uncheckedicon)); a.is(":disabled") ? this.disable() : this.enable()
            }, disable: function () { this.element.attr("disabled", true).parent().addClass("ui-disabled") }, enable: function () { this.element.prop("disabled", false).parent().removeClass("ui-disabled") } 
        }); a(k).bind("pagecreate create", function (b) { a.mobile.checkboxradio.prototype.enhanceWithin(b.target, true) })
    })(jQuery); (function (a, c) {
        a.widget("mobile.button", a.mobile.widget, { options: { theme: null, icon: null, iconpos: null,
            inline: null, corners: true, shadow: true, iconshadow: true, initSelector: "button, [type='button'], [type='submit'], [type='reset'], [type='image']"
        }, _create: function () {
            var b = this.element, g, d = this.options, e, f; b[0].tagName === "A" ? b.hasClass("ui-btn") || b.buttonMarkup() : (g = this.button = a("<div></div>").text(b.text() || b.val()).insertBefore(b).buttonMarkup({ theme: d.theme, icon: d.icon, iconpos: d.iconpos, inline: d.inline, corners: d.corners, shadow: d.shadow, iconshadow: d.iconshadow }).append(b.addClass("ui-btn-hidden")),
d = b.attr("type"), e = b.attr("name"), d !== "button" && d !== "reset" && e && b.bind("vclick", function () { f === c && (f = a("<input>", { type: "hidden", name: b.attr("name"), value: b.attr("value") }).insertBefore(b), a(k).one("submit", function () { f.remove(); f = c })) }), b.bind({ focus: function () { g.addClass(a.mobile.focusClass) }, blur: function () { g.removeClass(a.mobile.focusClass) } }), this.refresh())
        }, enable: function () {
            this.element.attr("disabled", false); this.button.removeClass("ui-disabled").attr("aria-disabled", false); return this._setOption("disabled",
false)
        }, disable: function () { this.element.attr("disabled", true); this.button.addClass("ui-disabled").attr("aria-disabled", true); return this._setOption("disabled", true) }, refresh: function () { var a = this.element; a.prop("disabled") ? this.disable() : this.enable(); this.button.data("textWrapper").text(a.text() || a.val()) } 
        }); a(k).bind("pagecreate create", function (b) { a.mobile.button.prototype.enhanceWithin(b.target, true) })
    })(jQuery); (function (a) {
        a.widget("mobile.textinput", a.mobile.widget, { options: { theme: null, initSelector: "input[type='text'], input[type='search'], :jqmData(type='search'), input[type='number'], :jqmData(type='number'), input[type='password'], input[type='email'], input[type='url'], input[type='tel'], textarea, input[type='time'], input[type='date'], input[type='month'], input[type='week'], input[type='datetime'], input[type='datetime-local'], input[type='color'], input:not([type])" },
            _create: function () {
                var c = this.element, b = this.options.theme || a.mobile.getInheritedTheme(this.element, "c"), g = " ui-body-" + b, d, e; a("label[for='" + c.attr("id") + "']").addClass("ui-input-text"); d = c.addClass("ui-input-text ui-body-" + b); typeof c[0].autocorrect !== "undefined" && !a.support.touchOverflow && (c[0].setAttribute("autocorrect", "off"), c[0].setAttribute("autocomplete", "off")); c.is("[type='search'],:jqmData(type='search')") ? (d = c.wrap("<div class='ui-input-search ui-shadow-inset ui-btn-corner-all ui-btn-shadow ui-icon-searchfield" +
g + "'></div>").parent(), e = a("<a href='#' class='ui-input-clear' title='clear text'>clear text</a>").tap(function (a) { c.val("").focus(); c.trigger("change"); e.addClass("ui-input-clear-hidden"); a.preventDefault() }).appendTo(d).buttonMarkup({ icon: "delete", iconpos: "notext", corners: true, shadow: true }), b = function () { setTimeout(function () { e.toggleClass("ui-input-clear-hidden", !c.val()) }, 0) }, b(), c.bind("paste cut keyup focus change blur", b)) : c.addClass("ui-corner-all ui-shadow-inset" + g); c.focus(function () { d.addClass(a.mobile.focusClass) }).blur(function () { d.removeClass(a.mobile.focusClass) });
                if (c.is("textarea")) { var f = function () { var a = c[0].scrollHeight; c[0].clientHeight < a && c.height(a + 15) }, h; c.keyup(function () { clearTimeout(h); h = setTimeout(f, 100) }); a(k).one("pagechange", f); a.trim(c.val()) && a(n).load(f) } 
            }, disable: function () { (this.element.attr("disabled", true).is("[type='search'],:jqmData(type='search')") ? this.element.parent() : this.element).addClass("ui-disabled") }, enable: function () { (this.element.attr("disabled", false).is("[type='search'],:jqmData(type='search')") ? this.element.parent() : this.element).removeClass("ui-disabled") } 
        });
        a(k).bind("pagecreate create", function (c) { a.mobile.textinput.prototype.enhanceWithin(c.target, true) })
    })(jQuery); (function (a) {
        a.mobile.listview.prototype.options.filter = false; a.mobile.listview.prototype.options.filterPlaceholder = "Filter items..."; a.mobile.listview.prototype.options.filterTheme = "c"; a.mobile.listview.prototype.options.filterCallback = function (a, b) { return a.toLowerCase().indexOf(b) === -1 }; a(k).delegate(":jqmData(role='listview')", "listviewcreate", function () {
            var c = a(this), b = c.data("listview");
            if (b.options.filter) {
                var g = a("<form>", { "class": "ui-listview-filter ui-bar-" + b.options.filterTheme, role: "search" }); a("<input>", { placeholder: b.options.filterPlaceholder }).attr("data-" + a.mobile.ns + "type", "search").jqmData("lastval", "").bind("keyup change", function () {
                    var d = a(this), e = this.value.toLowerCase(), f = null, f = d.jqmData("lastval") + "", g = false, j = ""; d.jqmData("lastval", e); f = e.length < f.length || e.indexOf(f) !== 0 ? c.children() : c.children(":not(.ui-screen-hidden)"); if (e) {
                        for (var k = f.length - 1; k >= 0; k--) d =
a(f[k]), j = d.jqmData("filtertext") || d.text(), d.is("li:jqmData(role=list-divider)") ? (d.toggleClass("ui-filter-hidequeue", !g), g = false) : b.options.filterCallback(j, e) ? d.toggleClass("ui-filter-hidequeue", true) : g = true; f.filter(":not(.ui-filter-hidequeue)").toggleClass("ui-screen-hidden", false); f.filter(".ui-filter-hidequeue").toggleClass("ui-screen-hidden", true).toggleClass("ui-filter-hidequeue", false)
                    } else f.toggleClass("ui-screen-hidden", false); b._refreshCorners()
                }).appendTo(g).textinput(); a(this).jqmData("inset") &&
g.addClass("ui-listview-filter-inset"); g.bind("submit", function () { return false }).insertBefore(c)
            } 
        })
    })(jQuery); (function (a, c) {
        a.widget("mobile.slider", a.mobile.widget, { options: { theme: null, trackTheme: null, disabled: false, initSelector: "input[type='range'], :jqmData(type='range'), :jqmData(role='slider')" }, _create: function () {
            var b = this, g = this.element, d = a.mobile.getInheritedTheme(g, "c"), e = this.options.theme || d, f = this.options.trackTheme || d, h = g[0].nodeName.toLowerCase(), d = h == "select" ? "ui-slider-switch" : "",
j = g.attr("id"), q = j + "-label", j = a("[for='" + j + "']").attr("id", q), m = function () { return h == "input" ? parseFloat(g.val()) : g[0].selectedIndex }, u = h == "input" ? parseFloat(g.attr("min")) : 0, r = h == "input" ? parseFloat(g.attr("max")) : g.find("option").length - 1, l = n.parseFloat(g.attr("step") || 1), o = a("<div class='ui-slider " + d + " ui-btn-down-" + f + " ui-btn-corner-all' role='application'></div>"), p = a("<a href='#' class='ui-slider-handle'></a>").appendTo(o).buttonMarkup({ corners: true, theme: e, shadow: true }).attr({ role: "slider",
    "aria-valuemin": u, "aria-valuemax": r, "aria-valuenow": m(), "aria-valuetext": m(), title: m(), "aria-labelledby": q
}); a.extend(this, { slider: o, handle: p, dragging: false, beforeStart: null, userModified: false, mouseMoved: false }); h == "select" && (o.wrapInner("<div class='ui-slider-inneroffset'></div>"), p.addClass("ui-slider-handle-snapping"), g.find("option"), g.find("option").each(function (b) {
    var c = !b ? "b" : "a", d = !b ? "right" : "left", b = !b ? " ui-btn-down-" + f : " " + a.mobile.activeBtnClass; a("<div class='ui-slider-labelbg ui-slider-labelbg-" +
c + b + " ui-btn-corner-" + d + "'></div>").prependTo(o); a("<span class='ui-slider-label ui-slider-label-" + c + b + " ui-btn-corner-" + d + "' role='img'>" + a(this).getEncodedText() + "</span>").prependTo(p)
})); j.addClass("ui-slider"); g.addClass(h === "input" ? "ui-slider-input" : "ui-slider-switch").change(function () { b.mouseMoved || b.refresh(m(), true) }).keyup(function () { b.refresh(m(), true, true) }).blur(function () { b.refresh(m(), true) }); a(k).bind("vmousemove", function (a) {
    if (b.dragging) return b.mouseMoved = true, h === "select" && p.removeClass("ui-slider-handle-snapping"),
b.refresh(a), b.userModified = b.beforeStart !== g[0].selectedIndex, false
}); o.bind("vmousedown", function (a) { b.dragging = true; b.userModified = false; b.mouseMoved = false; if (h === "select") b.beforeStart = g[0].selectedIndex; b.refresh(a); return false }); o.add(k).bind("vmouseup", function () { if (b.dragging) return b.dragging = false, h === "select" && (p.addClass("ui-slider-handle-snapping"), b.mouseMoved ? b.userModified ? b.refresh(b.beforeStart == 0 ? 1 : 0) : b.refresh(b.beforeStart) : b.refresh(b.beforeStart == 0 ? 1 : 0)), b.mouseMoved = false });
            o.insertAfter(g); h == "select" && this.handle.bind({ focus: function () { o.addClass(a.mobile.focusClass) }, blur: function () { o.removeClass(a.mobile.focusClass) } }); this.handle.bind({ vmousedown: function () { a(this).focus() }, vclick: false, keydown: function (c) {
                var d = m(); if (!b.options.disabled) {
                    switch (c.keyCode) {
                        case a.mobile.keyCode.HOME: case a.mobile.keyCode.END: case a.mobile.keyCode.PAGE_UP: case a.mobile.keyCode.PAGE_DOWN: case a.mobile.keyCode.UP: case a.mobile.keyCode.RIGHT: case a.mobile.keyCode.DOWN: case a.mobile.keyCode.LEFT: if (c.preventDefault(),
!b._keySliding) b._keySliding = true, a(this).addClass("ui-state-active")
                    } switch (c.keyCode) { case a.mobile.keyCode.HOME: b.refresh(u); break; case a.mobile.keyCode.END: b.refresh(r); break; case a.mobile.keyCode.PAGE_UP: case a.mobile.keyCode.UP: case a.mobile.keyCode.RIGHT: b.refresh(d + l); break; case a.mobile.keyCode.PAGE_DOWN: case a.mobile.keyCode.DOWN: case a.mobile.keyCode.LEFT: b.refresh(d - l) } 
                } 
            }, keyup: function () { if (b._keySliding) b._keySliding = false, a(this).removeClass("ui-state-active") } 
            }); this.refresh(c, c, true)
        },
            refresh: function (a, c, d) {
                (this.options.disabled || this.element.attr("disabled")) && this.disable(); var e = this.element, f = e[0].nodeName.toLowerCase(), h = f === "input" ? parseFloat(e.attr("min")) : 0, j = f === "input" ? parseFloat(e.attr("max")) : e.find("option").length - 1, k = f === "input" && parseFloat(e.attr("step")) > 0 ? parseFloat(e.attr("step")) : 1; if (typeof a === "object") {
                    if (!this.dragging || a.pageX < this.slider.offset().left - 8 || a.pageX > this.slider.offset().left + this.slider.width() + 8) return; a = Math.round((a.pageX - this.slider.offset().left) /
this.slider.width() * 100)
                } else a == null && (a = f === "input" ? parseFloat(e.val() || 0) : e[0].selectedIndex), a = (parseFloat(a) - h) / (j - h) * 100; if (!isNaN(a)) {
                    a < 0 && (a = 0); a > 100 && (a = 100); var m = a / 100 * (j - h) + h, n = (m - h) % k; m -= n; Math.abs(n) * 2 >= k && (m += n > 0 ? k : -k); m = parseFloat(m.toFixed(5)); m < h && (m = h); m > j && (m = j); this.handle.css("left", a + "%"); this.handle.attr({ "aria-valuenow": f === "input" ? m : e.find("option").eq(m).attr("value"), "aria-valuetext": f === "input" ? m : e.find("option").eq(m).getEncodedText(), title: f === "input" ? m : e.find("option").eq(m).getEncodedText() });
                    f === "select" && (m === 0 ? this.slider.addClass("ui-slider-switch-a").removeClass("ui-slider-switch-b") : this.slider.addClass("ui-slider-switch-b").removeClass("ui-slider-switch-a")); if (!d) d = false, f === "input" ? (d = e.val() !== m, e.val(m)) : (d = e[0].selectedIndex !== m, e[0].selectedIndex = m), !c && d && e.trigger("change")
                } 
            }, enable: function () { this.element.attr("disabled", false); this.slider.removeClass("ui-disabled").attr("aria-disabled", false); return this._setOption("disabled", false) }, disable: function () {
                this.element.attr("disabled",
true); this.slider.addClass("ui-disabled").attr("aria-disabled", true); return this._setOption("disabled", true)
            } 
        }); a(k).bind("pagecreate create", function (b) { a.mobile.slider.prototype.enhanceWithin(b.target, true) })
    })(jQuery); (function (a) {
        a.fn.controlgroup = function (c) {
            return this.each(function () {
                function b(a) { a.removeClass("ui-btn-corner-all ui-shadow").eq(0).addClass(f[0]).end().last().addClass(f[1]).addClass("ui-controlgroup-last") } var g = a(this), d = a.extend({ direction: g.jqmData("type") || "vertical", shadow: false,
                    excludeInvisible: true
                }, c), e = g.children("legend"), f = d.direction == "horizontal" ? ["ui-corner-left", "ui-corner-right"] : ["ui-corner-top", "ui-corner-bottom"]; g.find("input").first().attr("type"); e.length && (g.wrapInner("<div class='ui-controlgroup-controls'></div>"), a("<div role='heading' class='ui-controlgroup-label'>" + e.html() + "</div>").insertBefore(g.children(0)), e.remove()); g.addClass("ui-corner-all ui-controlgroup ui-controlgroup-" + d.direction); b(g.find(".ui-btn" + (d.excludeInvisible ? ":visible" : "")));
                b(g.find(".ui-btn-inner")); d.shadow && g.addClass("ui-shadow")
            })
        } 
    })(jQuery); (function (a) { a(k).bind("pagecreate create", function (c) { a(c.target).find("a").not(".ui-btn, .ui-link-inherit, :jqmData(role='none'), :jqmData(role='nojs')").addClass("ui-link") }) })(jQuery); (function (a) {
        var c = a("meta[name=viewport]"), b = c.attr("content"), g = b + ",maximum-scale=1, user-scalable=no", d = b + ",maximum-scale=10, user-scalable=yes"; a.mobile.zoom = a.extend({}, { enabled: true, locked: false, disable: function (b) {
            if (!a.mobile.zoom.locked) c.attr("content",
g), a.mobile.zoom.enabled = false, a.mobile.zoom.locked = b || false
        }, enable: function (b) { if (!a.mobile.zoom.locked || b) c.attr("content", d), a.mobile.zoom.enabled = true, a.mobile.zoom.locked = false }, restore: function () { c.attr("content", b); a.mobile.zoom.enabled = true } 
        })
    })(jQuery); (function (a) {
        a.widget("mobile.selectmenu", a.mobile.widget, { options: { theme: null, disabled: false, icon: "arrow-d", iconpos: "right", inline: null, corners: true, shadow: true, iconshadow: true, menuPageTheme: "b", overlayTheme: "a", hidePlaceholderMenuItems: true,
            closeText: "Close", nativeMenu: true, preventFocusZoom: /iPhone|iPad|iPod/.test(navigator.platform) && navigator.userAgent.indexOf("AppleWebKit") > -1, initSelector: "select:not(:jqmData(role='slider'))"
        }, _button: function () { return a("<div/>") }, _setDisabled: function (a) { this.element.attr("disabled", a); this.button.attr("aria-disabled", a); return this._setOption("disabled", a) }, _focusButton: function () { var a = this; setTimeout(function () { a.button.focus() }, 40) }, _selectOptions: function () { return this.select.find("option") },
            _preExtension: function () { this.select = this.element.wrap("<div class='ui-select'>"); this.selectID = this.select.attr("id"); this.label = a("label[for='" + this.selectID + "']").addClass("ui-select"); this.isMultiple = this.select[0].multiple; if (!this.options.theme) this.options.theme = a.mobile.getInheritedTheme(this.select, "c") }, _create: function () {
                this._preExtension(); this._trigger("beforeCreate"); this.button = this._button(); var c = this, b = this.options, g = this.button.text(a(this.select[0].options.item(this.select[0].selectedIndex ==
-1 ? 0 : this.select[0].selectedIndex)).text()).insertBefore(this.select).buttonMarkup({ theme: b.theme, icon: b.icon, iconpos: b.iconpos, inline: b.inline, corners: b.corners, shadow: b.shadow, iconshadow: b.iconshadow }); b.nativeMenu && n.opera && n.opera.version && this.select.addClass("ui-select-nativeonly"); if (this.isMultiple) this.buttonCount = a("<span>").addClass("ui-li-count ui-btn-up-c ui-btn-corner-all").hide().appendTo(g.addClass("ui-li-has-count")); (b.disabled || this.element.attr("disabled")) && this.disable(); this.select.change(function () { c.refresh() });
                this.build()
            }, build: function () {
                var c = this; this.select.appendTo(c.button).bind("vmousedown", function () { c.button.addClass(a.mobile.activeBtnClass) }).bind("focus", function () { c.button.addClass(a.mobile.focusClass) }).bind("blur", function () { c.button.removeClass(a.mobile.focusClass) }).bind("focus vmouseover", function () { c.button.trigger("vmouseover") }).bind("vmousemove", function () { c.button.removeClass(a.mobile.activeBtnClass) }).bind("change blur vmouseout", function () { c.button.trigger("vmouseout").removeClass(a.mobile.activeBtnClass) }).bind("change blur",
function () { c.button.removeClass("ui-btn-down-" + c.options.theme) }); c.button.bind("vmousedown", function () { c.options.preventFocusZoom && a.mobile.zoom.disable(true) }).bind("mouseup", function () { c.options.preventFocusZoom && a.mobile.zoom.enable(true) })
            }, selected: function () { return this._selectOptions().filter(":selected") }, selectedIndices: function () { var a = this; return this.selected().map(function () { return a._selectOptions().index(this) }).get() }, setButtonText: function () {
                var c = this, b = this.selected(); this.button.find(".ui-btn-text").text(function () {
                    return !c.isMultiple ?
b.text() : b.length ? b.map(function () { return a(this).text() }).get().join(", ") : c.placeholder
                })
            }, setButtonCount: function () { var a = this.selected(); this.isMultiple && this.buttonCount[a.length > 1 ? "show" : "hide"]().text(a.length) }, refresh: function () { this.setButtonText(); this.setButtonCount() }, open: a.noop, close: a.noop, disable: function () { this._setDisabled(true); this.button.addClass("ui-disabled") }, enable: function () { this._setDisabled(false); this.button.removeClass("ui-disabled") } 
        }); a(k).bind("pagecreate create",
function (c) { a.mobile.selectmenu.prototype.enhanceWithin(c.target, true) })
    })(jQuery); (function (a) {
        var c = function (b) {
            var c = b.selectID, d = b.label, e = b.select.closest(".ui-page"), f = a("<div>", { "class": "ui-selectmenu-screen ui-screen-hidden" }).appendTo(e), h = b._selectOptions(), j = b.isMultiple = b.select[0].multiple, q = c + "-button", m = c + "-menu", u = a("<div data-" + a.mobile.ns + "role='dialog' data-" + a.mobile.ns + "theme='" + b.options.theme + "' data-" + a.mobile.ns + "overlay-theme='" + b.options.overlayTheme + "'><div data-" + a.mobile.ns +
"role='header'><div class='ui-title'>" + d.getEncodedText() + "</div></div><div data-" + a.mobile.ns + "role='content'></div></div>").appendTo(a.mobile.pageContainer).page(), r = a("<div>", { "class": "ui-selectmenu ui-selectmenu-hidden ui-overlay-shadow ui-corner-all ui-body-" + b.options.overlayTheme + " " + a.mobile.defaultDialogTransition }).insertAfter(f), l = a("<ul>", { "class": "ui-selectmenu-list", id: m, role: "listbox", "aria-labelledby": q }).attr("data-" + a.mobile.ns + "theme", b.options.theme).appendTo(r), o = a("<div>", { "class": "ui-header ui-bar-" +
b.options.theme
}).prependTo(r), p = a("<h1>", { "class": "ui-title" }).appendTo(o), D = a("<a>", { text: b.options.closeText, href: "#", "class": "ui-btn-left" }).attr("data-" + a.mobile.ns + "iconpos", "notext").attr("data-" + a.mobile.ns + "icon", "delete").appendTo(o).buttonMarkup(), z = u.find(".ui-content"), C = u.find(".ui-header a"); a.extend(b, { select: b.select, selectID: c, buttonId: q, menuId: m, thisPage: e, menuPage: u, label: d, screen: f, selectOptions: h, isMultiple: j, theme: b.options.theme, listbox: r, list: l, header: o, headerTitle: p, headerClose: D,
    menuPageContent: z, menuPageClose: C, placeholder: "", build: function () {
        var b = this; b.refresh(); b.select.attr("tabindex", "-1").focus(function () { a(this).blur(); b.button.focus() }); b.button.bind("vclick keydown", function (c) { if (c.type == "vclick" || c.keyCode && (c.keyCode === a.mobile.keyCode.ENTER || c.keyCode === a.mobile.keyCode.SPACE)) b.open(), c.preventDefault() }); b.list.attr("role", "listbox").delegate(".ui-li>a", "focusin", function () { a(this).attr("tabindex", "0") }).delegate(".ui-li>a", "focusout", function () {
            a(this).attr("tabindex",
"-1")
        }).delegate("li:not(.ui-disabled, .ui-li-divider)", "click", function (c) { var d = b.select[0].selectedIndex, e = b.list.find("li:not(.ui-li-divider)").index(this), f = b._selectOptions().eq(e)[0]; f.selected = b.isMultiple ? !f.selected : true; b.isMultiple && a(this).find(".ui-icon").toggleClass("ui-icon-checkbox-on", f.selected).toggleClass("ui-icon-checkbox-off", !f.selected); (b.isMultiple || d !== e) && b.select.trigger("change"); b.isMultiple || b.close(); c.preventDefault() }).keydown(function (b) {
            var c = a(b.target), d = c.closest("li");
            switch (b.keyCode) { case 38: return b = d.prev(), b.length && (c.blur().attr("tabindex", "-1"), b.find("a").first().focus()), false; case 40: return b = d.next(), b.length && (c.blur().attr("tabindex", "-1"), b.find("a").first().focus()), false; case 13: case 32: return c.trigger("click"), false } 
        }); b.menuPage.bind("pagehide", function () { b.list.appendTo(b.listbox); b._focusButton(); a.mobile._bindPageRemove.call(b.thisPage) }); b.screen.bind("vclick", function () { b.close() }); b.headerClose.click(function () {
            if (b.menuType == "overlay") return b.close(),
false
        }); b.thisPage.addDependents(this.menuPage)
    }, _isRebuildRequired: function () { var a = this.list.find("li"); return this._selectOptions().text() !== a.text() }, refresh: function (b) {
        var c = this; this._selectOptions(); this.selected(); var d = this.selectedIndices(); (b || this._isRebuildRequired()) && c._buildList(); c.setButtonText(); c.setButtonCount(); c.list.find("li:not(.ui-li-divider)").removeClass(a.mobile.activeBtnClass).attr("aria-selected", false).each(function (b) {
            a.inArray(b, d) > -1 && (b = a(this), b.attr("aria-selected",
true), c.isMultiple ? b.find(".ui-icon").removeClass("ui-icon-checkbox-off").addClass("ui-icon-checkbox-on") : b.addClass(a.mobile.activeBtnClass))
        })
    }, close: function () { if (!this.options.disabled && this.isOpen) this.menuType == "page" ? n.history.back() : (this.screen.addClass("ui-screen-hidden"), this.listbox.addClass("ui-selectmenu-hidden").removeAttr("style").removeClass("in"), this.list.appendTo(this.listbox), this._focusButton()), this.isOpen = false }, open: function () {
        if (!this.options.disabled) {
            var b = this, c = a(n),
d = b.list.parent(), e = d.outerHeight(), d = d.outerWidth(); a(".ui-page-active"); var f = c.scrollTop(), g = b.button.offset().top, h = c.height(), c = c.width(); b.button.addClass(a.mobile.activeBtnClass); setTimeout(function () { b.button.removeClass(a.mobile.activeBtnClass) }, 300); if (e > h - 80 || !a.support.scrollTop) {
                b.thisPage.unbind("pagehide.remove"); if (f == 0 && g > h) b.thisPage.one("pagehide", function () { a(this).jqmData("lastScroll", g) }); b.menuPage.one("pageshow", function () {
                    a(n).one("silentscroll", function () { b.list.find(a.mobile.activeBtnClass).focus() });
                    b.isOpen = true
                }); b.menuType = "page"; b.menuPageContent.append(b.list); b.menuPage.find("div .ui-title").text(b.label.text()); a.mobile.changePage(b.menuPage, { transition: a.mobile.defaultDialogTransition })
            } else {
                b.menuType = "overlay"; b.screen.height(a(k).height()).removeClass("ui-screen-hidden"); var j = g - f, l = f + h - g, m = e / 2, o = parseFloat(b.list.parent().css("max-width")), e = j > e / 2 && l > e / 2 ? g + b.button.outerHeight() / 2 - m : j > l ? f + h - e - 30 : f + 30; d < o ? f = (c - d) / 2 : (f = b.button.offset().left + b.button.outerWidth() / 2 - d / 2, f < 30 ? f = 30 : f +
d > c && (f = c - d - 30)); b.listbox.append(b.list).removeClass("ui-selectmenu-hidden").css({ top: e, left: f }).addClass("in"); b.list.find(a.mobile.activeBtnClass).focus(); b.isOpen = true
            } 
        } 
    }, _buildList: function () {
        var b = this, c = this.options, d = this.placeholder, e = [], f = [], g = b.isMultiple ? "checkbox-off" : "false"; b.list.empty().filter(".ui-listview").listview("destroy"); b.select.find("option").each(function (h) {
            var j = a(this), k = j.parent(), l = j.getEncodedText(), n = "<a href='#'>" + l + "</a>", m = [], o = []; k.is("optgroup") && (k = k.attr("label"),
a.inArray(k, e) === -1 && (f.push("<li data-" + a.mobile.ns + "role='list-divider'>" + k + "</li>"), e.push(k))); if (!this.getAttribute("value") || l.length == 0 || j.jqmData("placeholder")) c.hidePlaceholderMenuItems && m.push("ui-selectmenu-placeholder"), d = b.placeholder = l; this.disabled && (m.push("ui-disabled"), o.push("aria-disabled='true'")); f.push("<li data-" + a.mobile.ns + "option-index='" + h + "' data-" + a.mobile.ns + "icon='" + g + "' class='" + m.join(" ") + "' " + o.join(" ") + ">" + n + "</li>")
        }); b.list.html(f.join(" ")); b.list.find("li").attr({ role: "option",
            tabindex: "-1"
        }).first().attr("tabindex", "0"); this.isMultiple || this.headerClose.hide(); !this.isMultiple && !d.length ? this.header.hide() : this.headerTitle.text(this.placeholder); b.list.listview()
    }, _button: function () { return a("<a>", { href: "#", role: "button", id: this.buttonId, "aria-haspopup": "true", "aria-owns": this.menuId }) } 
})
        }; a(k).delegate("select", "selectmenubeforecreate", function () { var b = a(this).data("selectmenu"); b.options.nativeMenu || c(b) })
    })(jQuery); (function (a) {
        a.widget("mobile.fixedtoolbar", a.mobile.widget,
{ options: { visibleOnPageShow: true, disablePageZoom: true, transition: "slide", fullscreen: false, tapToggle: true, tapToggleBlacklist: "a, input, select, textarea, .ui-header-fixed, .ui-footer-fixed", hideDuringFocus: "input, textarea, select", updatePagePadding: true, trackPersistentToolbars: true, supportBlacklist: function () {
    var a = navigator.userAgent, b = navigator.platform, g = a.match(/AppleWebKit\/([0-9]+)/), g = !!g && g[1], d = a.match(/Fennec\/([0-9]+)/), d = !!d && d[1], e = a.match(/Opera Mobile\/([0-9]+)/), f = n; return (b.indexOf("iPhone") >
-1 || b.indexOf("iPad") > -1 || b.indexOf("iPod") > -1) && g && g < 534 || f.operamini && {}.toString.call(f.operamini) === "[object OperaMini]" || e && omverson < 7458 || a.indexOf("Android") > -1 && g && g < 533 || d && d < 6 || "palmGetResource" in n && g && g < 534 || a.indexOf("MeeGo") > -1 && a.indexOf("NokiaBrowser/8.5.0") > -1 ? true : false
}, initSelector: ":jqmData(position='fixed')"
}, _create: function () {
    var a = this.options, b = this.element, g = b.is(".ui-header") ? "header" : "footer", d = b.closest(".ui-page"); a.supportBlacklist() ? this.destroy() : (b.addClass("ui-" +
g + "-fixed"), b.jqmData("fullscreen") ? (b.addClass("ui-" + g + "-fullscreen"), d.addClass("ui-page-" + g + "-fullscreen")) : d.addClass("ui-page-" + g + "-fixed"), this._addTransitionClass(), this._bindPageEvents(), this._bindToggleHandlers())
}, _addTransitionClass: function () { var a = this.options.transition; a && a !== "none" && (a === "slide" && (a = this.element.is(".ui-header") ? "slidedown" : "slideup"), this.element.addClass(a)) }, _bindPageEvents: function () {
    var c = this, b = c.options; c.element.closest(".ui-page").bind("pagebeforeshow", function () {
        b.disablePageZoom &&
a.mobile.zoom.disable(true); b.visibleOnPageShow && c.show(true)
    }).bind("webkitAnimationStart animationstart updatelayout", function () { b.updatePagePadding && c.updatePagePadding() }).bind("pageshow", function () { c.updatePagePadding(); b.updatePagePadding && a(n).bind("throttledresize." + c.widgetName, function () { c.updatePagePadding() }) }).bind("pagebeforehide", function (g, d) {
        b.disablePageZoom && a.mobile.zoom.enable(true); b.updatePagePadding && a(n).unbind("throttledresize." + c.widgetName); if (b.trackPersistentToolbars) {
            var e =
a(".ui-footer-fixed:jqmData(id)", this), f = a(".ui-header-fixed:jqmData(id)", this), h = e.length && d.nextPage && a(".ui-footer-fixed:jqmData(id='" + e.jqmData("id") + "')", d.nextPage), j = f.length && d.nextPage && a(".ui-header-fixed:jqmData(id='" + f.jqmData("id") + "')", d.nextPage); if (h.length || j.length) h.add(j).appendTo(a.mobile.pageContainer), d.nextPage.one("pageshow", function () { h.add(j).appendTo(this) })
        } 
    })
}, _visible: false, updatePagePadding: function () {
    var a = this.element, b = a.is(".ui-header"); this.options.fullscreen ||
a.closest(".ui-page").css("padding-" + (b ? "top" : "bottom"), a.outerHeight())
}, show: function (c) {
    var b = this.element, g = a(n), d = g.scrollTop(), e = b.height(), f = b.closest(".ui-page").height(), g = Math.min(screen.height, g.height()), h = b.is(".ui-header") ? "header" : "footer"; !c && (this.options.transition && this.options.transition !== "none" && (h === "header" && !this.options.fullscreen && d > e || h === "footer" && !this.options.fullscreen && d + g < f - e) || this.options.fullscreen) ? b.removeClass("out ui-fixed-hidden").addClass("in") : b.removeClass("ui-fixed-hidden");
    this._visible = true
}, hide: function (c) {
    var b = this.element, g = a(n), d = g.scrollTop(), e = b.height(), f = b.closest(".ui-page").height(), g = Math.min(screen.height, g.height()), h = b.is(".ui-header") ? "header" : "footer", j = "out" + (this.options.transition === "slide" ? " reverse" : ""); !c && (this.options.transition && this.options.transition !== "none" && (h === "header" && !this.options.fullscreen && d > e || h === "footer" && !this.options.fullscreen && d + g < f - e) || this.options.fullscreen) ? b.addClass(j).removeClass("in").animationComplete(function () { b.addClass("ui-fixed-hidden").removeClass(j) }) :
b.addClass("ui-fixed-hidden").removeClass(j); this._visible = false
}, toggle: function () { this[this._visible ? "hide" : "show"]() }, _bindToggleHandlers: function () {
    var c = this, b = c.options; c.element.closest(".ui-page").bind("vclick", function (g) { b.tapToggle && !a(g.target).closest(b.tapToggleBlacklist).length && c.toggle() }).bind("focusin focusout", function (g) {
        if (screen.width < 500 && a(g.target).is(b.hideDuringFocus) && !a(g.target).closest(".ui-header-fixed, .ui-footer-fixed").length) c[g.type === "focusin" && c._visible ? "hide" :
"show"]()
    })
}, destroy: function () { this.element.removeClass("ui-header-fixed ui-footer-fixed ui-header-fullscreen ui-footer-fullscreen in out fade slidedown slideup ui-fixed-hidden"); this.element.closest(".ui-page").removeClass("ui-page-header-fixed ui-page-footer-fixed ui-page-header-fullscreen ui-page-footer-fullscreen") } 
}); a(k).bind("pagecreate create", function (c) { a(a.mobile.fixedtoolbar.prototype.options.initSelector, c.target).fixedtoolbar() })
    })(jQuery); (function (a, c) {
        if (/iPhone|iPad|iPod/.test(navigator.platform) &&
navigator.userAgent.indexOf("AppleWebKit") > -1) { var b = a.mobile.zoom, g, d, e, f, h; a(c).bind("orientationchange.iosorientationfix", b.enable).bind("devicemotion.iosorientationfix", function (a) { g = a.originalEvent; h = g.accelerationIncludingGravity; d = Math.abs(h.x); e = Math.abs(h.y); f = Math.abs(h.z); !c.orientation && (d > 7 || (f > 6 && e < 8 || f < 8 && e > 6) && d > 5) ? b.enabled && b.disable() : b.enabled || b.enable() }) } 
    })(jQuery, this); (function (a, c) {
        function b() {
            f.css({ top: a.support.scrollTop && e.scrollTop() + e.height() / 2 || activeBtn.length &&
activeBtn.offset().top || 100
            })
        } function g() { f.offset().top < e.scrollTop() && (f.addClass("ui-loader-fakefix"), b(), e.unbind("scroll", g).bind("scroll", b)) } var d = a("html"); a("head"); var e = a(c); a(c.document).trigger("mobileinit"); if (a.mobile.gradeA()) {
            if (a.mobile.ajaxBlacklist) a.mobile.ajaxEnabled = false; d.addClass("ui-mobile ui-mobile-rendering"); var f = a("<div class='ui-loader'><span class='ui-icon ui-icon-loading'></span><h1></h1></div>"); a.extend(a.mobile, { showPageLoadingMsg: function (b, c, k) {
                d.addClass("ui-loading");
                a.mobile.loadingMessage && (a("." + a.mobile.activeBtnClass).first(), b = b || a.mobile.loadingMessageTheme, f.attr("class", "ui-loader ui-body-" + (b || "a") + " ui-loader-" + (k || a.mobile.loadingMessageTextVisible ? "verbose" : "default") + (k ? " ui-loader-textonly" : "")).find("h1").text(c || a.mobile.loadingMessage).end().appendTo(a.mobile.pageContainer), g(), e.bind("scroll", g))
            }, hidePageLoadingMsg: function () { d.removeClass("ui-loading"); a.mobile.loadingMessage && f.removeClass("ui-loader-fakefix"); a(c).unbind("scroll", b) }, initializePage: function () {
                var b,
c = a(":jqmData(role='page')"); c.length || (b = a(":jqmData(role='dialog')"), b.length ? (b.first().attr("data-" + a.mobile.ns + "role", "page"), c = c.add(b.get().shift())) : c = a("body").wrapInner("<div data-" + a.mobile.ns + "role='page'></div>").children(0)); c.add(":jqmData(role='dialog')").each(function () { var b = a(this); b.jqmData("url") || b.attr("data-" + a.mobile.ns + "url", b.attr("id") || location.pathname + location.search) }); a.mobile.firstPage = c.first(); a.mobile.pageContainer = c.first().parent().addClass("ui-mobile-viewport");
                e.trigger("pagecontainercreate"); a.mobile.showPageLoadingMsg(); !a.mobile.hashListeningEnabled || !a.mobile.path.stripHash(location.hash) ? a.mobile.changePage(a.mobile.firstPage, { transition: "none", reverse: true, changeHash: false, fromHashChange: true }) : e.trigger("hashchange", [true])
            } 
            }); a.mobile._registerInternalEvents(); a(function () {
                c.scrollTo(0, 1); a.mobile.defaultHomeScroll = !a.support.scrollTop || a(c).scrollTop() === 1 ? 0 : 1; a.fn.controlgroup && a(k).bind("pagecreate create", function (b) {
                    a(":jqmData(role='controlgroup')",
b.target).controlgroup({ excludeInvisible: false })
                }); a.mobile.autoInitializePage && a.mobile.initializePage(); e.load(a.mobile.silentScroll)
            })
        } 
    })(jQuery, this)
});