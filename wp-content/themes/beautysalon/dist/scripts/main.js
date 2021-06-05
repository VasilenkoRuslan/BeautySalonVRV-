/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/wp-content/themes/beautysalon/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2);
module.exports = __webpack_require__(13);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bootstrap_sass_assets_javascripts_bootstrap_min__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bootstrap_sass_assets_javascripts_bootstrap_min___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_bootstrap_sass_assets_javascripts_bootstrap_min__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__plugins_chart_chart__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__plugins_chart_chart___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__plugins_chart_chart__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__plugins_php_mail_form_validate__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__plugins_php_mail_form_validate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__plugins_php_mail_form_validate__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__plugins_slider_price_range__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__plugins_js_main__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__plugins_js_main___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__plugins_js_main__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_team__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_team___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__pages_team__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_map__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__pages_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_fbi_wanted__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_fbi_wanted___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__pages_fbi_wanted__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_single_product__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_single_product___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__pages_single_product__);
 //plugins



 //main scripts

 //pages






/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");
+function (a) {
  "use strict";

  var b = a.fn.jquery.split(" ")[0].split(".");
  if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1 || b[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4");
}(jQuery), +function (a) {
  "use strict";

  function b() {
    var a = document.createElement("bootstrap"),
        b = {
      WebkitTransition: "webkitTransitionEnd",
      MozTransition: "transitionend",
      OTransition: "oTransitionEnd otransitionend",
      transition: "transitionend"
    };

    for (var c in b) {
      if (void 0 !== a.style[c]) return {
        end: b[c]
      };
    }

    return !1;
  }

  a.fn.emulateTransitionEnd = function (b) {
    var c = !1,
        d = this;
    a(this).one("bsTransitionEnd", function () {
      c = !0;
    });

    var e = function e() {
      c || a(d).trigger(a.support.transition.end);
    };

    return setTimeout(e, b), this;
  }, a(function () {
    a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = {
      bindType: a.support.transition.end,
      delegateType: a.support.transition.end,
      handle: function handle(b) {
        if (a(b.target).is(this)) return b.handleObj.handler.apply(this, arguments);
      }
    });
  });
}(jQuery), +function (a) {
  "use strict";

  function b(b) {
    return this.each(function () {
      var c = a(this),
          e = c.data("bs.alert");
      e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c);
    });
  }

  var c = '[data-dismiss="alert"]',
      d = function d(b) {
    a(b).on("click", c, this.close);
  };

  d.VERSION = "3.3.7", d.TRANSITION_DURATION = 150, d.prototype.close = function (b) {
    function c() {
      g.detach().trigger("closed.bs.alert").remove();
    }

    var e = a(this),
        f = e.attr("data-target");
    f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, ""));
    var g = a("#" === f ? [] : f);
    b && b.preventDefault(), g.length || (g = e.closest(".alert")), g.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c());
  };
  var e = a.fn.alert;
  a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function () {
    return a.fn.alert = e, this;
  }, a(document).on("click.bs.alert.data-api", c, d.prototype.close);
}(jQuery), +function (a) {
  "use strict";

  function b(b) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.button"),
          f = "object" == _typeof(b) && b;
      e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b);
    });
  }

  var c = function c(b, d) {
    this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1;
  };

  c.VERSION = "3.3.7", c.DEFAULTS = {
    loadingText: "loading..."
  }, c.prototype.setState = function (b) {
    var c = "disabled",
        d = this.$element,
        e = d.is("input") ? "val" : "html",
        f = d.data();
    b += "Text", null == f.resetText && d.data("resetText", d[e]()), setTimeout(a.proxy(function () {
      d[e](null == f[b] ? this.options[b] : f[b]), "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c).prop(c, !0)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c).prop(c, !1));
    }, this), 0);
  }, c.prototype.toggle = function () {
    var a = !0,
        b = this.$element.closest('[data-toggle="buttons"]');

    if (b.length) {
      var c = this.$element.find("input");
      "radio" == c.prop("type") ? (c.prop("checked") && (a = !1), b.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == c.prop("type") && (c.prop("checked") !== this.$element.hasClass("active") && (a = !1), this.$element.toggleClass("active")), c.prop("checked", this.$element.hasClass("active")), a && c.trigger("change");
    } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active");
  };
  var d = a.fn.button;
  a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function () {
    return a.fn.button = d, this;
  }, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (c) {
    var d = a(c.target).closest(".btn");
    b.call(d, "toggle"), a(c.target).is('input[type="radio"], input[type="checkbox"]') || (c.preventDefault(), d.is("input,button") ? d.trigger("focus") : d.find("input:visible,button:visible").first().trigger("focus"));
  }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (b) {
    a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type));
  });
}(jQuery), +function (a) {
  "use strict";

  function b(b) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.carousel"),
          f = a.extend({}, c.DEFAULTS, d.data(), "object" == _typeof(b) && b),
          g = "string" == typeof b ? b : f.slide;
      e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle();
    });
  }

  var c = function c(b, _c) {
    this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = _c, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this));
  };

  c.VERSION = "3.3.7", c.TRANSITION_DURATION = 600, c.DEFAULTS = {
    interval: 5e3,
    pause: "hover",
    wrap: !0,
    keyboard: !0
  }, c.prototype.keydown = function (a) {
    if (!/input|textarea/i.test(a.target.tagName)) {
      switch (a.which) {
        case 37:
          this.prev();
          break;

        case 39:
          this.next();
          break;

        default:
          return;
      }

      a.preventDefault();
    }
  }, c.prototype.cycle = function (b) {
    return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this;
  }, c.prototype.getItemIndex = function (a) {
    return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active);
  }, c.prototype.getItemForDirection = function (a, b) {
    var c = this.getItemIndex(b),
        d = "prev" == a && 0 === c || "next" == a && c == this.$items.length - 1;
    if (d && !this.options.wrap) return b;
    var e = "prev" == a ? -1 : 1,
        f = (c + e) % this.$items.length;
    return this.$items.eq(f);
  }, c.prototype.to = function (a) {
    var b = this,
        c = this.getItemIndex(this.$active = this.$element.find(".item.active"));
    if (!(a > this.$items.length - 1 || a < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function () {
      b.to(a);
    }) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a));
  }, c.prototype.pause = function (b) {
    return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this;
  }, c.prototype.next = function () {
    if (!this.sliding) return this.slide("next");
  }, c.prototype.prev = function () {
    if (!this.sliding) return this.slide("prev");
  }, c.prototype.slide = function (b, d) {
    var e = this.$element.find(".item.active"),
        f = d || this.getItemForDirection(b, e),
        g = this.interval,
        h = "next" == b ? "left" : "right",
        i = this;
    if (f.hasClass("active")) return this.sliding = !1;
    var j = f[0],
        k = a.Event("slide.bs.carousel", {
      relatedTarget: j,
      direction: h
    });

    if (this.$element.trigger(k), !k.isDefaultPrevented()) {
      if (this.sliding = !0, g && this.pause(), this.$indicators.length) {
        this.$indicators.find(".active").removeClass("active");
        var l = a(this.$indicators.children()[this.getItemIndex(f)]);
        l && l.addClass("active");
      }

      var m = a.Event("slid.bs.carousel", {
        relatedTarget: j,
        direction: h
      });
      return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one("bsTransitionEnd", function () {
        f.removeClass([b, h].join(" ")).addClass("active"), e.removeClass(["active", h].join(" ")), i.sliding = !1, setTimeout(function () {
          i.$element.trigger(m);
        }, 0);
      }).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"), f.addClass("active"), this.sliding = !1, this.$element.trigger(m)), g && this.cycle(), this;
    }
  };
  var d = a.fn.carousel;
  a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function () {
    return a.fn.carousel = d, this;
  };

  var e = function e(c) {
    var d,
        e = a(this),
        f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));

    if (f.hasClass("carousel")) {
      var g = a.extend({}, f.data(), e.data()),
          h = e.attr("data-slide-to");
      h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault();
    }
  };

  a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), a(window).on("load", function () {
    a('[data-ride="carousel"]').each(function () {
      var c = a(this);
      b.call(c, c.data());
    });
  });
}(jQuery), +function (a) {
  "use strict";

  function b(b) {
    var c,
        d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "");
    return a(d);
  }

  function c(b) {
    return this.each(function () {
      var c = a(this),
          e = c.data("bs.collapse"),
          f = a.extend({}, d.DEFAULTS, c.data(), "object" == _typeof(b) && b);
      !e && f.toggle && /show|hide/.test(b) && (f.toggle = !1), e || c.data("bs.collapse", e = new d(this, f)), "string" == typeof b && e[b]();
    });
  }

  var d = function d(b, c) {
    this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle();
  };

  d.VERSION = "3.3.7", d.TRANSITION_DURATION = 350, d.DEFAULTS = {
    toggle: !0
  }, d.prototype.dimension = function () {
    var a = this.$element.hasClass("width");
    return a ? "width" : "height";
  }, d.prototype.show = function () {
    if (!this.transitioning && !this.$element.hasClass("in")) {
      var b,
          e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");

      if (!(e && e.length && (b = e.data("bs.collapse"), b && b.transitioning))) {
        var f = a.Event("show.bs.collapse");

        if (this.$element.trigger(f), !f.isDefaultPrevented()) {
          e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null));
          var g = this.dimension();
          this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;

          var h = function h() {
            this.$element.removeClass("collapsing").addClass("collapse in")[g](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse");
          };

          if (!a.support.transition) return h.call(this);
          var i = a.camelCase(["scroll", g].join("-"));
          this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i]);
        }
      }
    }
  }, d.prototype.hide = function () {
    if (!this.transitioning && this.$element.hasClass("in")) {
      var b = a.Event("hide.bs.collapse");

      if (this.$element.trigger(b), !b.isDefaultPrevented()) {
        var c = this.dimension();
        this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;

        var e = function e() {
          this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse");
        };

        return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this);
      }
    }
  }, d.prototype.toggle = function () {
    this[this.$element.hasClass("in") ? "hide" : "show"]();
  }, d.prototype.getParent = function () {
    return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function (c, d) {
      var e = a(d);
      this.addAriaAndCollapsedClass(b(e), e);
    }, this)).end();
  }, d.prototype.addAriaAndCollapsedClass = function (a, b) {
    var c = a.hasClass("in");
    a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c);
  };
  var e = a.fn.collapse;
  a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function () {
    return a.fn.collapse = e, this;
  }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (d) {
    var e = a(this);
    e.attr("data-target") || d.preventDefault();
    var f = b(e),
        g = f.data("bs.collapse"),
        h = g ? "toggle" : e.data();
    c.call(f, h);
  });
}(jQuery), +function (a) {
  "use strict";

  function b(b) {
    var c = b.attr("data-target");
    c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
    var d = c && a(c);
    return d && d.length ? d : b.parent();
  }

  function c(c) {
    c && 3 === c.which || (a(e).remove(), a(f).each(function () {
      var d = a(this),
          e = b(d),
          f = {
        relatedTarget: this
      };
      e.hasClass("open") && (c && "click" == c.type && /input|textarea/i.test(c.target.tagName) && a.contains(e[0], c.target) || (e.trigger(c = a.Event("hide.bs.dropdown", f)), c.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger(a.Event("hidden.bs.dropdown", f)))));
    }));
  }

  function d(b) {
    return this.each(function () {
      var c = a(this),
          d = c.data("bs.dropdown");
      d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c);
    });
  }

  var e = ".dropdown-backdrop",
      f = '[data-toggle="dropdown"]',
      g = function g(b) {
    a(b).on("click.bs.dropdown", this.toggle);
  };

  g.VERSION = "3.3.7", g.prototype.toggle = function (d) {
    var e = a(this);

    if (!e.is(".disabled, :disabled")) {
      var f = b(e),
          g = f.hasClass("open");

      if (c(), !g) {
        "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", c);
        var h = {
          relatedTarget: this
        };
        if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;
        e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger(a.Event("shown.bs.dropdown", h));
      }

      return !1;
    }
  }, g.prototype.keydown = function (c) {
    if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName)) {
      var d = a(this);

      if (c.preventDefault(), c.stopPropagation(), !d.is(".disabled, :disabled")) {
        var e = b(d),
            g = e.hasClass("open");
        if (!g && 27 != c.which || g && 27 == c.which) return 27 == c.which && e.find(f).trigger("focus"), d.trigger("click");
        var h = " li:not(.disabled):visible a",
            i = e.find(".dropdown-menu" + h);

        if (i.length) {
          var j = i.index(c.target);
          38 == c.which && j > 0 && j--, 40 == c.which && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus");
        }
      }
    }
  };
  var h = a.fn.dropdown;
  a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function () {
    return a.fn.dropdown = h, this;
  }, a(document).on("click.bs.dropdown.data-api", c).on("click.bs.dropdown.data-api", ".dropdown form", function (a) {
    a.stopPropagation();
  }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", g.prototype.keydown);
}(jQuery), +function (a) {
  "use strict";

  function b(b, d) {
    return this.each(function () {
      var e = a(this),
          f = e.data("bs.modal"),
          g = a.extend({}, c.DEFAULTS, e.data(), "object" == _typeof(b) && b);
      f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d);
    });
  }

  var c = function c(b, _c2) {
    this.options = _c2, this.$body = a(document.body), this.$element = a(b), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function () {
      this.$element.trigger("loaded.bs.modal");
    }, this));
  };

  c.VERSION = "3.3.7", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, c.DEFAULTS = {
    backdrop: !0,
    keyboard: !0,
    show: !0
  }, c.prototype.toggle = function (a) {
    return this.isShown ? this.hide() : this.show(a);
  }, c.prototype.show = function (b) {
    var d = this,
        e = a.Event("show.bs.modal", {
      relatedTarget: b
    });
    this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
      d.$element.one("mouseup.dismiss.bs.modal", function (b) {
        a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0);
      });
    }), this.backdrop(function () {
      var e = a.support.transition && d.$element.hasClass("fade");
      d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in"), d.enforceFocus();
      var f = a.Event("shown.bs.modal", {
        relatedTarget: b
      });
      e ? d.$dialog.one("bsTransitionEnd", function () {
        d.$element.trigger("focus").trigger(f);
      }).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f);
    }));
  }, c.prototype.hide = function (b) {
    b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal());
  }, c.prototype.enforceFocus = function () {
    a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function (a) {
      document === a.target || this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus");
    }, this));
  }, c.prototype.escape = function () {
    this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function (a) {
      27 == a.which && this.hide();
    }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal");
  }, c.prototype.resize = function () {
    this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal");
  }, c.prototype.hideModal = function () {
    var a = this;
    this.$element.hide(), this.backdrop(function () {
      a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal");
    });
  }, c.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove(), this.$backdrop = null;
  }, c.prototype.backdrop = function (b) {
    var d = this,
        e = this.$element.hasClass("fade") ? "fade" : "";

    if (this.isShown && this.options.backdrop) {
      var f = a.support.transition && e;
      if (this.$backdrop = a(document.createElement("div")).addClass("modal-backdrop " + e).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function (a) {
        return this.ignoreBackdropClick ? void (this.ignoreBackdropClick = !1) : void (a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()));
      }, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
      f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b();
    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass("in");

      var g = function g() {
        d.removeBackdrop(), b && b();
      };

      a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g();
    } else b && b();
  }, c.prototype.handleUpdate = function () {
    this.adjustDialog();
  }, c.prototype.adjustDialog = function () {
    var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
    this.$element.css({
      paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",
      paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : ""
    });
  }, c.prototype.resetAdjustments = function () {
    this.$element.css({
      paddingLeft: "",
      paddingRight: ""
    });
  }, c.prototype.checkScrollbar = function () {
    var a = window.innerWidth;

    if (!a) {
      var b = document.documentElement.getBoundingClientRect();
      a = b.right - Math.abs(b.left);
    }

    this.bodyIsOverflowing = document.body.clientWidth < a, this.scrollbarWidth = this.measureScrollbar();
  }, c.prototype.setScrollbar = function () {
    var a = parseInt(this.$body.css("padding-right") || 0, 10);
    this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth);
  }, c.prototype.resetScrollbar = function () {
    this.$body.css("padding-right", this.originalBodyPad);
  }, c.prototype.measureScrollbar = function () {
    var a = document.createElement("div");
    a.className = "modal-scrollbar-measure", this.$body.append(a);
    var b = a.offsetWidth - a.clientWidth;
    return this.$body[0].removeChild(a), b;
  };
  var d = a.fn.modal;
  a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function () {
    return a.fn.modal = d, this;
  }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (c) {
    var d = a(this),
        e = d.attr("href"),
        f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")),
        g = f.data("bs.modal") ? "toggle" : a.extend({
      remote: !/#/.test(e) && e
    }, f.data(), d.data());
    d.is("a") && c.preventDefault(), f.one("show.bs.modal", function (a) {
      a.isDefaultPrevented() || f.one("hidden.bs.modal", function () {
        d.is(":visible") && d.trigger("focus");
      });
    }), b.call(f, g, this);
  });
}(jQuery), +function (a) {
  "use strict";

  function b(b) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.tooltip"),
          f = "object" == _typeof(b) && b;
      !e && /destroy|hide/.test(b) || (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]());
    });
  }

  var c = function c(a, b) {
    this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", a, b);
  };

  c.VERSION = "3.3.7", c.TRANSITION_DURATION = 150, c.DEFAULTS = {
    animation: !0,
    placement: "top",
    selector: !1,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: "hover focus",
    title: "",
    delay: 0,
    html: !1,
    container: !1,
    viewport: {
      selector: "body",
      padding: 0
    }
  }, c.prototype.init = function (b, c, d) {
    if (this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(a.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
      click: !1,
      hover: !1,
      focus: !1
    }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");

    for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
      var g = e[f];
      if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));else if ("manual" != g) {
        var h = "hover" == g ? "mouseenter" : "focusin",
            i = "hover" == g ? "mouseleave" : "focusout";
        this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this));
      }
    }

    this.options.selector ? this._options = a.extend({}, this.options, {
      trigger: "manual",
      selector: ""
    }) : this.fixTitle();
  }, c.prototype.getDefaults = function () {
    return c.DEFAULTS;
  }, c.prototype.getOptions = function (b) {
    return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
      show: b.delay,
      hide: b.delay
    }), b;
  }, c.prototype.getDelegateOptions = function () {
    var b = {},
        c = this.getDefaults();
    return this._options && a.each(this._options, function (a, d) {
      c[a] != d && (b[a] = d);
    }), b;
  }, c.prototype.enter = function (b) {
    var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
    return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusin" == b.type ? "focus" : "hover"] = !0), c.tip().hasClass("in") || "in" == c.hoverState ? void (c.hoverState = "in") : (clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void (c.timeout = setTimeout(function () {
      "in" == c.hoverState && c.show();
    }, c.options.delay.show)) : c.show());
  }, c.prototype.isInStateTrue = function () {
    for (var a in this.inState) {
      if (this.inState[a]) return !0;
    }

    return !1;
  }, c.prototype.leave = function (b) {
    var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
    if (c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusout" == b.type ? "focus" : "hover"] = !1), !c.isInStateTrue()) return clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void (c.timeout = setTimeout(function () {
      "out" == c.hoverState && c.hide();
    }, c.options.delay.hide)) : c.hide();
  }, c.prototype.show = function () {
    var b = a.Event("show.bs." + this.type);

    if (this.hasContent() && this.enabled) {
      this.$element.trigger(b);
      var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
      if (b.isDefaultPrevented() || !d) return;
      var e = this,
          f = this.tip(),
          g = this.getUID(this.type);
      this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade");
      var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement,
          i = /\s?auto?\s?/i,
          j = i.test(h);
      j && (h = h.replace(i, "") || "top"), f.detach().css({
        top: 0,
        left: 0,
        display: "block"
      }).addClass(h).data("bs." + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
      var k = this.getPosition(),
          l = f[0].offsetWidth,
          m = f[0].offsetHeight;

      if (j) {
        var n = h,
            o = this.getPosition(this.$viewport);
        h = "bottom" == h && k.bottom + m > o.bottom ? "top" : "top" == h && k.top - m < o.top ? "bottom" : "right" == h && k.right + l > o.width ? "left" : "left" == h && k.left - l < o.left ? "right" : h, f.removeClass(n).addClass(h);
      }

      var p = this.getCalculatedOffset(h, k, l, m);
      this.applyPlacement(p, h);

      var q = function q() {
        var a = e.hoverState;
        e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e);
      };

      a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", q).emulateTransitionEnd(c.TRANSITION_DURATION) : q();
    }
  }, c.prototype.applyPlacement = function (b, c) {
    var d = this.tip(),
        e = d[0].offsetWidth,
        f = d[0].offsetHeight,
        g = parseInt(d.css("margin-top"), 10),
        h = parseInt(d.css("margin-left"), 10);
    isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top += g, b.left += h, a.offset.setOffset(d[0], a.extend({
      using: function using(a) {
        d.css({
          top: Math.round(a.top),
          left: Math.round(a.left)
        });
      }
    }, b), 0), d.addClass("in");
    var i = d[0].offsetWidth,
        j = d[0].offsetHeight;
    "top" == c && j != f && (b.top = b.top + f - j);
    var k = this.getViewportAdjustedDelta(c, b, i, j);
    k.left ? b.left += k.left : b.top += k.top;
    var l = /top|bottom/.test(c),
        m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
        n = l ? "offsetWidth" : "offsetHeight";
    d.offset(b), this.replaceArrow(m, d[0][n], l);
  }, c.prototype.replaceArrow = function (a, b, c) {
    this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "");
  }, c.prototype.setContent = function () {
    var a = this.tip(),
        b = this.getTitle();
    a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right");
  }, c.prototype.hide = function (b) {
    function d() {
      "in" != e.hoverState && f.detach(), e.$element && e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), b && b();
    }

    var e = this,
        f = a(this.$tip),
        g = a.Event("hide.bs." + this.type);
    if (this.$element.trigger(g), !g.isDefaultPrevented()) return f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), this.hoverState = null, this;
  }, c.prototype.fixTitle = function () {
    var a = this.$element;
    (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "");
  }, c.prototype.hasContent = function () {
    return this.getTitle();
  }, c.prototype.getPosition = function (b) {
    b = b || this.$element;
    var c = b[0],
        d = "BODY" == c.tagName,
        e = c.getBoundingClientRect();
    null == e.width && (e = a.extend({}, e, {
      width: e.right - e.left,
      height: e.bottom - e.top
    }));
    var f = window.SVGElement && c instanceof window.SVGElement,
        g = d ? {
      top: 0,
      left: 0
    } : f ? null : b.offset(),
        h = {
      scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop()
    },
        i = d ? {
      width: a(window).width(),
      height: a(window).height()
    } : null;
    return a.extend({}, e, h, i, g);
  }, c.prototype.getCalculatedOffset = function (a, b, c, d) {
    return "bottom" == a ? {
      top: b.top + b.height,
      left: b.left + b.width / 2 - c / 2
    } : "top" == a ? {
      top: b.top - d,
      left: b.left + b.width / 2 - c / 2
    } : "left" == a ? {
      top: b.top + b.height / 2 - d / 2,
      left: b.left - c
    } : {
      top: b.top + b.height / 2 - d / 2,
      left: b.left + b.width
    };
  }, c.prototype.getViewportAdjustedDelta = function (a, b, c, d) {
    var e = {
      top: 0,
      left: 0
    };
    if (!this.$viewport) return e;
    var f = this.options.viewport && this.options.viewport.padding || 0,
        g = this.getPosition(this.$viewport);

    if (/right|left/.test(a)) {
      var h = b.top - f - g.scroll,
          i = b.top + f - g.scroll + d;
      h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i);
    } else {
      var j = b.left - f,
          k = b.left + f + c;
      j < g.left ? e.left = g.left - j : k > g.right && (e.left = g.left + g.width - k);
    }

    return e;
  }, c.prototype.getTitle = function () {
    var a,
        b = this.$element,
        c = this.options;
    return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title);
  }, c.prototype.getUID = function (a) {
    do {
      a += ~~(1e6 * Math.random());
    } while (document.getElementById(a));

    return a;
  }, c.prototype.tip = function () {
    if (!this.$tip && (this.$tip = a(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
    return this.$tip;
  }, c.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow");
  }, c.prototype.enable = function () {
    this.enabled = !0;
  }, c.prototype.disable = function () {
    this.enabled = !1;
  }, c.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled;
  }, c.prototype.toggle = function (b) {
    var c = this;
    b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), b ? (c.inState.click = !c.inState.click, c.isInStateTrue() ? c.enter(c) : c.leave(c)) : c.tip().hasClass("in") ? c.leave(c) : c.enter(c);
  }, c.prototype.destroy = function () {
    var a = this;
    clearTimeout(this.timeout), this.hide(function () {
      a.$element.off("." + a.type).removeData("bs." + a.type), a.$tip && a.$tip.detach(), a.$tip = null, a.$arrow = null, a.$viewport = null, a.$element = null;
    });
  };
  var d = a.fn.tooltip;
  a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function () {
    return a.fn.tooltip = d, this;
  };
}(jQuery), +function (a) {
  "use strict";

  function b(b) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.popover"),
          f = "object" == _typeof(b) && b;
      !e && /destroy|hide/.test(b) || (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]());
    });
  }

  var c = function c(a, b) {
    this.init("popover", a, b);
  };

  if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
  c.VERSION = "3.3.7", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
    placement: "right",
    trigger: "click",
    content: "",
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  }), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function () {
    return c.DEFAULTS;
  }, c.prototype.setContent = function () {
    var a = this.tip(),
        b = this.getTitle(),
        c = this.getContent();
    a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide();
  }, c.prototype.hasContent = function () {
    return this.getTitle() || this.getContent();
  }, c.prototype.getContent = function () {
    var a = this.$element,
        b = this.options;
    return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content);
  }, c.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find(".arrow");
  };
  var d = a.fn.popover;
  a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function () {
    return a.fn.popover = d, this;
  };
}(jQuery), +function (a) {
  "use strict";

  function b(c, d) {
    this.$body = a(document.body), this.$scrollElement = a(a(c).is(document.body) ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this)), this.refresh(), this.process();
  }

  function c(c) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.scrollspy"),
          f = "object" == _typeof(c) && c;
      e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]();
    });
  }

  b.VERSION = "3.3.7", b.DEFAULTS = {
    offset: 10
  }, b.prototype.getScrollHeight = function () {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight);
  }, b.prototype.refresh = function () {
    var b = this,
        c = "offset",
        d = 0;
    this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), a.isWindow(this.$scrollElement[0]) || (c = "position", d = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
      var b = a(this),
          e = b.data("target") || b.attr("href"),
          f = /^#./.test(e) && a(e);
      return f && f.length && f.is(":visible") && [[f[c]().top + d, e]] || null;
    }).sort(function (a, b) {
      return a[0] - b[0];
    }).each(function () {
      b.offsets.push(this[0]), b.targets.push(this[1]);
    });
  }, b.prototype.process = function () {
    var a,
        b = this.$scrollElement.scrollTop() + this.options.offset,
        c = this.getScrollHeight(),
        d = this.options.offset + c - this.$scrollElement.height(),
        e = this.offsets,
        f = this.targets,
        g = this.activeTarget;
    if (this.scrollHeight != c && this.refresh(), b >= d) return g != (a = f[f.length - 1]) && this.activate(a);
    if (g && b < e[0]) return this.activeTarget = null, this.clear();

    for (a = e.length; a--;) {
      g != f[a] && b >= e[a] && (void 0 === e[a + 1] || b < e[a + 1]) && this.activate(f[a]);
    }
  }, b.prototype.activate = function (b) {
    this.activeTarget = b, this.clear();
    var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
        d = a(c).parents("li").addClass("active");
    d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy");
  }, b.prototype.clear = function () {
    a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
  };
  var d = a.fn.scrollspy;
  a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function () {
    return a.fn.scrollspy = d, this;
  }, a(window).on("load.bs.scrollspy.data-api", function () {
    a('[data-spy="scroll"]').each(function () {
      var b = a(this);
      c.call(b, b.data());
    });
  });
}(jQuery), +function (a) {
  "use strict";

  function b(b) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.tab");
      e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]();
    });
  }

  var c = function c(b) {
    this.element = a(b);
  };

  c.VERSION = "3.3.7", c.TRANSITION_DURATION = 150, c.prototype.show = function () {
    var b = this.element,
        c = b.closest("ul:not(.dropdown-menu)"),
        d = b.data("target");

    if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
      var e = c.find(".active:last a"),
          f = a.Event("hide.bs.tab", {
        relatedTarget: b[0]
      }),
          g = a.Event("show.bs.tab", {
        relatedTarget: e[0]
      });

      if (e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) {
        var h = a(d);
        this.activate(b.closest("li"), c), this.activate(h, h.parent(), function () {
          e.trigger({
            type: "hidden.bs.tab",
            relatedTarget: b[0]
          }), b.trigger({
            type: "shown.bs.tab",
            relatedTarget: e[0]
          });
        });
      }
    }
  }, c.prototype.activate = function (b, d, e) {
    function f() {
      g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu").length && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), e && e();
    }

    var g = d.find("> .active"),
        h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);
    g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), g.removeClass("in");
  };
  var d = a.fn.tab;
  a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function () {
    return a.fn.tab = d, this;
  };

  var e = function e(c) {
    c.preventDefault(), b.call(a(this), "show");
  };

  a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e);
}(jQuery), +function (a) {
  "use strict";

  function b(b) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.affix"),
          f = "object" == _typeof(b) && b;
      e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]();
    });
  }

  var c = function c(b, d) {
    this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition();
  };

  c.VERSION = "3.3.7", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = {
    offset: 0,
    target: window
  }, c.prototype.getState = function (a, b, c, d) {
    var e = this.$target.scrollTop(),
        f = this.$element.offset(),
        g = this.$target.height();
    if (null != c && "top" == this.affixed) return e < c && "top";
    if ("bottom" == this.affixed) return null != c ? !(e + this.unpin <= f.top) && "bottom" : !(e + g <= a - d) && "bottom";
    var h = null == this.affixed,
        i = h ? e : f.top,
        j = h ? g : b;
    return null != c && e <= c ? "top" : null != d && i + j >= a - d && "bottom";
  }, c.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset;
    this.$element.removeClass(c.RESET).addClass("affix");
    var a = this.$target.scrollTop(),
        b = this.$element.offset();
    return this.pinnedOffset = b.top - a;
  }, c.prototype.checkPositionWithEventLoop = function () {
    setTimeout(a.proxy(this.checkPosition, this), 1);
  }, c.prototype.checkPosition = function () {
    if (this.$element.is(":visible")) {
      var b = this.$element.height(),
          d = this.options.offset,
          e = d.top,
          f = d.bottom,
          g = Math.max(a(document).height(), a(document.body).height());
      "object" != _typeof(d) && (f = e = d), "function" == typeof e && (e = d.top(this.$element)), "function" == typeof f && (f = d.bottom(this.$element));
      var h = this.getState(g, b, e, f);

      if (this.affixed != h) {
        null != this.unpin && this.$element.css("top", "");
        var i = "affix" + (h ? "-" + h : ""),
            j = a.Event(i + ".bs.affix");
        if (this.$element.trigger(j), j.isDefaultPrevented()) return;
        this.affixed = h, this.unpin = "bottom" == h ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix");
      }

      "bottom" == h && this.$element.offset({
        top: g - b - f
      });
    }
  };
  var d = a.fn.affix;
  a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function () {
    return a.fn.affix = d, this;
  }, a(window).on("load", function () {
    a('[data-spy="affix"]').each(function () {
      var c = a(this),
          d = c.data();
      d.offset = d.offset || {}, null != d.offsetBottom && (d.offset.bottom = d.offsetBottom), null != d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d);
    });
  });
}(jQuery);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 4 */
/***/ (function(module, exports) {

/*!
 * Chart.js
 * http://chartjs.org/
 *
 * Copyright 2013 Nick Downie
 * Released under the MIT license
 * https://github.com/nnnick/Chart.js/blob/master/LICENSE.md
 */

/* eslint-disable */
//Define the global Chart Variable as a class.
window.Chart = function (context) {
  var chart = this; //Easing functions adapted from Robert Penner's easing equations
  //http://www.robertpenner.com/easing/

  var animationOptions = {
    linear: function linear(t) {
      return t;
    },
    easeInQuad: function easeInQuad(t) {
      return t * t;
    },
    easeOutQuad: function easeOutQuad(t) {
      return -1 * t * (t - 2);
    },
    easeInOutQuad: function easeInOutQuad(t) {
      if ((t /= 1 / 2) < 1) return 1 / 2 * t * t;
      return -1 / 2 * (--t * (t - 2) - 1);
    },
    easeInCubic: function easeInCubic(t) {
      return t * t * t;
    },
    easeOutCubic: function easeOutCubic(t) {
      return 1 * ((t = t / 1 - 1) * t * t + 1);
    },
    easeInOutCubic: function easeInOutCubic(t) {
      if ((t /= 1 / 2) < 1) return 1 / 2 * t * t * t;
      return 1 / 2 * ((t -= 2) * t * t + 2);
    },
    easeInQuart: function easeInQuart(t) {
      return t * t * t * t;
    },
    easeOutQuart: function easeOutQuart(t) {
      return -1 * ((t = t / 1 - 1) * t * t * t - 1);
    },
    easeInOutQuart: function easeInOutQuart(t) {
      if ((t /= 1 / 2) < 1) return 1 / 2 * t * t * t * t;
      return -1 / 2 * ((t -= 2) * t * t * t - 2);
    },
    easeInQuint: function easeInQuint(t) {
      return 1 * (t /= 1) * t * t * t * t;
    },
    easeOutQuint: function easeOutQuint(t) {
      return 1 * ((t = t / 1 - 1) * t * t * t * t + 1);
    },
    easeInOutQuint: function easeInOutQuint(t) {
      if ((t /= 1 / 2) < 1) return 1 / 2 * t * t * t * t * t;
      return 1 / 2 * ((t -= 2) * t * t * t * t + 2);
    },
    easeInSine: function easeInSine(t) {
      return -1 * Math.cos(t / 1 * (Math.PI / 2)) + 1;
    },
    easeOutSine: function easeOutSine(t) {
      return 1 * Math.sin(t / 1 * (Math.PI / 2));
    },
    easeInOutSine: function easeInOutSine(t) {
      return -1 / 2 * (Math.cos(Math.PI * t / 1) - 1);
    },
    easeInExpo: function easeInExpo(t) {
      return t == 0 ? 1 : 1 * Math.pow(2, 10 * (t / 1 - 1));
    },
    easeOutExpo: function easeOutExpo(t) {
      return t == 1 ? 1 : 1 * (-Math.pow(2, -10 * t / 1) + 1);
    },
    easeInOutExpo: function easeInOutExpo(t) {
      if (t == 0) return 0;
      if (t == 1) return 1;
      if ((t /= 1 / 2) < 1) return 1 / 2 * Math.pow(2, 10 * (t - 1));
      return 1 / 2 * (-Math.pow(2, -10 * --t) + 2);
    },
    easeInCirc: function easeInCirc(t) {
      if (t >= 1) return t;
      return -1 * (Math.sqrt(1 - (t /= 1) * t) - 1);
    },
    easeOutCirc: function easeOutCirc(t) {
      return 1 * Math.sqrt(1 - (t = t / 1 - 1) * t);
    },
    easeInOutCirc: function easeInOutCirc(t) {
      if ((t /= 1 / 2) < 1) return -1 / 2 * (Math.sqrt(1 - t * t) - 1);
      return 1 / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1);
    },
    easeInElastic: function easeInElastic(t) {
      var s = 1.70158;
      var p = 0;
      var a = 1;
      if (t == 0) return 0;
      if ((t /= 1) == 1) return 1;
      if (!p) p = 1 * .3;

      if (a < Math.abs(1)) {
        a = 1;
        /*eslint no-redeclare: "error"*/

        var s = p / 4;
      } else var s = p / (2 * Math.PI) * Math.asin(1 / a);

      return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * 1 - s) * (2 * Math.PI) / p));
    },
    easeOutElastic: function easeOutElastic(t) {
      var s = 1.70158;
      var p = 0;
      var a = 1;
      if (t == 0) return 0;
      if ((t /= 1) == 1) return 1;
      if (!p) p = 1 * .3;

      if (a < Math.abs(1)) {
        a = 1;
        var s = p / 4;
      } else var s = p / (2 * Math.PI) * Math.asin(1 / a);

      return a * Math.pow(2, -10 * t) * Math.sin((t * 1 - s) * (2 * Math.PI) / p) + 1;
    },
    easeInOutElastic: function easeInOutElastic(t) {
      var s = 1.70158;
      var p = 0;
      var a = 1;
      if (t == 0) return 0;
      if ((t /= 1 / 2) == 2) return 1;
      if (!p) p = 1 * (.3 * 1.5);

      if (a < Math.abs(1)) {
        a = 1;
        var s = p / 4;
      } else var s = p / (2 * Math.PI) * Math.asin(1 / a);

      if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * 1 - s) * (2 * Math.PI) / p));
      return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * 1 - s) * (2 * Math.PI) / p) * .5 + 1;
    },
    easeInBack: function easeInBack(t) {
      var s = 1.70158;
      return 1 * (t /= 1) * t * ((s + 1) * t - s);
    },
    easeOutBack: function easeOutBack(t) {
      var s = 1.70158;
      return 1 * ((t = t / 1 - 1) * t * ((s + 1) * t + s) + 1);
    },
    easeInOutBack: function easeInOutBack(t) {
      var s = 1.70158;
      if ((t /= 1 / 2) < 1) return 1 / 2 * (t * t * (((s *= 1.525) + 1) * t - s));
      return 1 / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2);
    },
    easeInBounce: function easeInBounce(t) {
      return 1 - animationOptions.easeOutBounce(1 - t);
    },
    easeOutBounce: function easeOutBounce(t) {
      if ((t /= 1) < 1 / 2.75) {
        return 1 * (7.5625 * t * t);
      } else if (t < 2 / 2.75) {
        return 1 * (7.5625 * (t -= 1.5 / 2.75) * t + .75);
      } else if (t < 2.5 / 2.75) {
        return 1 * (7.5625 * (t -= 2.25 / 2.75) * t + .9375);
      } else {
        return 1 * (7.5625 * (t -= 2.625 / 2.75) * t + .984375);
      }
    },
    easeInOutBounce: function easeInOutBounce(t) {
      if (t < 1 / 2) return animationOptions.easeInBounce(t * 2) * .5;
      return animationOptions.easeOutBounce(t * 2 - 1) * .5 + 1 * .5;
    }
  }; //Variables global to the chart

  var width = context.canvas.width;
  var height = context.canvas.height; //High pixel density displays - multiply the size of the canvas height/width by the device pixel ratio, then scale.

  if (window.devicePixelRatio) {
    context.canvas.style.width = width + "px";
    context.canvas.style.height = height + "px";
    context.canvas.height = height * window.devicePixelRatio;
    context.canvas.width = width * window.devicePixelRatio;
    context.scale(window.devicePixelRatio, window.devicePixelRatio);
  }

  this.PolarArea = function (data, options) {
    chart.PolarArea.defaults = {
      scaleOverlay: true,
      scaleOverride: false,
      scaleSteps: null,
      scaleStepWidth: null,
      scaleStartValue: null,
      scaleShowLine: true,
      scaleLineColor: "rgba(0,0,0,.1)",
      scaleLineWidth: 1,
      scaleShowLabels: true,
      scaleLabel: "<%=value%>",
      scaleFontFamily: "'Arial'",
      scaleFontSize: 12,
      scaleFontStyle: "normal",
      scaleFontColor: "#666",
      scaleShowLabelBackdrop: true,
      scaleBackdropColor: "rgba(255,255,255,0.75)",
      scaleBackdropPaddingY: 2,
      scaleBackdropPaddingX: 2,
      segmentShowStroke: true,
      segmentStrokeColor: "#fff",
      segmentStrokeWidth: 2,
      animation: true,
      animationSteps: 100,
      animationEasing: "easeOutBounce",
      animateRotate: true,
      animateScale: false,
      onAnimationComplete: null
    };
    var config = options ? mergeChartConfig(chart.PolarArea.defaults, options) : chart.PolarArea.defaults;
    return new PolarArea(data, config, context);
  };

  this.Radar = function (data, options) {
    chart.Radar.defaults = {
      scaleOverlay: false,
      scaleOverride: false,
      scaleSteps: null,
      scaleStepWidth: null,
      scaleStartValue: null,
      scaleShowLine: true,
      scaleLineColor: "rgba(0,0,0,.1)",
      scaleLineWidth: 1,
      scaleShowLabels: false,
      scaleLabel: "<%=value%>",
      scaleFontFamily: "'Arial'",
      scaleFontSize: 12,
      scaleFontStyle: "normal",
      scaleFontColor: "#666",
      scaleShowLabelBackdrop: true,
      scaleBackdropColor: "rgba(255,255,255,0.75)",
      scaleBackdropPaddingY: 2,
      scaleBackdropPaddingX: 2,
      angleShowLineOut: true,
      angleLineColor: "rgba(0,0,0,.1)",
      angleLineWidth: 1,
      pointLabelFontFamily: "'Arial'",
      pointLabelFontStyle: "normal",
      pointLabelFontSize: 12,
      pointLabelFontColor: "#666",
      pointDot: true,
      pointDotRadius: 3,
      pointDotStrokeWidth: 1,
      datasetStroke: true,
      datasetStrokeWidth: 2,
      datasetFill: true,
      animation: true,
      animationSteps: 60,
      animationEasing: "easeOutQuart",
      onAnimationComplete: null
    };
    var config = options ? mergeChartConfig(chart.Radar.defaults, options) : chart.Radar.defaults;
    return new Radar(data, config, context);
  };

  this.Pie = function (data, options) {
    chart.Pie.defaults = {
      segmentShowStroke: true,
      segmentStrokeColor: "#fff",
      segmentStrokeWidth: 2,
      animation: true,
      animationSteps: 100,
      animationEasing: "easeOutBounce",
      animateRotate: true,
      animateScale: false,
      onAnimationComplete: null
    };
    var config = options ? mergeChartConfig(chart.Pie.defaults, options) : chart.Pie.defaults;
    return new Pie(data, config, context);
  };

  this.Doughnut = function (data, options) {
    chart.Doughnut.defaults = {
      segmentShowStroke: true,
      segmentStrokeColor: "#2c3e50",
      segmentStrokeWidth: 1,
      percentageInnerCutout: 90,
      animation: true,
      animationSteps: 100,
      animationEasing: "easeOutBounce",
      animateRotate: true,
      animateScale: false,
      onAnimationComplete: null
    };
    var config = options ? mergeChartConfig(chart.Doughnut.defaults, options) : chart.Doughnut.defaults;
    return new Doughnut(data, config, context);
  };

  this.Line = function (data, options) {
    chart.Line.defaults = {
      scaleOverlay: false,
      scaleOverride: false,
      scaleSteps: null,
      scaleStepWidth: null,
      scaleStartValue: null,
      scaleLineColor: "rgba(0,0,0,.1)",
      scaleLineWidth: 1,
      scaleShowLabels: true,
      scaleLabel: "<%=value%>",
      scaleFontFamily: "'Arial'",
      scaleFontSize: 12,
      scaleFontStyle: "normal",
      scaleFontColor: "#666",
      scaleShowGridLines: true,
      scaleGridLineColor: "rgba(0,0,0,.05)",
      scaleGridLineWidth: 1,
      bezierCurve: true,
      pointDot: true,
      pointDotRadius: 4,
      pointDotStrokeWidth: 2,
      datasetStroke: true,
      datasetStrokeWidth: 2,
      datasetFill: true,
      animation: true,
      animationSteps: 60,
      animationEasing: "easeOutQuart",
      onAnimationComplete: null
    };
    var config = options ? mergeChartConfig(chart.Line.defaults, options) : chart.Line.defaults;
    return new Line(data, config, context);
  };

  this.Bar = function (data, options) {
    chart.Bar.defaults = {
      scaleOverlay: false,
      scaleOverride: false,
      scaleSteps: null,
      scaleStepWidth: null,
      scaleStartValue: null,
      scaleLineColor: "rgba(0,0,0,.1)",
      scaleLineWidth: 1,
      scaleShowLabels: true,
      scaleLabel: "<%=value%>",
      scaleFontFamily: "'Arial'",
      scaleFontSize: 12,
      scaleFontStyle: "normal",
      scaleFontColor: "#666",
      scaleShowGridLines: true,
      scaleGridLineColor: "rgba(0,0,0,.05)",
      scaleGridLineWidth: 1,
      barShowStroke: true,
      barStrokeWidth: 2,
      barValueSpacing: 5,
      barDatasetSpacing: 1,
      animation: true,
      animationSteps: 60,
      animationEasing: "easeOutQuart",
      onAnimationComplete: null
    };
    var config = options ? mergeChartConfig(chart.Bar.defaults, options) : chart.Bar.defaults;
    return new Bar(data, config, context);
  };

  var clear = function clear(c) {
    c.clearRect(0, 0, width, height);
  };

  var PolarArea = function PolarArea(data, config, ctx) {
    var maxSize, scaleHop, calculatedScale, labelHeight, scaleHeight, valueBounds, labelTemplateString;
    calculateDrawingSizes();
    valueBounds = getValueBounds();
    labelTemplateString = config.scaleShowLabels ? config.scaleLabel : null; //Check and set the scale

    if (!config.scaleOverride) {
      calculatedScale = calculateScale(scaleHeight, valueBounds.maxSteps, valueBounds.minSteps, valueBounds.maxValue, valueBounds.minValue, labelTemplateString);
    } else {
      calculatedScale = {
        steps: config.scaleSteps,
        stepValue: config.scaleStepWidth,
        graphMin: config.scaleStartValue,
        labels: []
      };
      populateLabels(labelTemplateString, calculatedScale.labels, calculatedScale.steps, config.scaleStartValue, config.scaleStepWidth);
    }

    scaleHop = maxSize / calculatedScale.steps; //Wrap in an animation loop wrapper

    animationLoop(config, drawScale, drawAllSegments, ctx);

    function calculateDrawingSizes() {
      maxSize = Min([width, height]) / 2; //Remove whatever is larger - the font size or line width.

      maxSize -= Max([config.scaleFontSize * 0.5, config.scaleLineWidth * 0.5]);
      labelHeight = config.scaleFontSize * 2; //If we're drawing the backdrop - add the Y padding to the label height and remove from drawing region.

      if (config.scaleShowLabelBackdrop) {
        labelHeight += 2 * config.scaleBackdropPaddingY;
        maxSize -= config.scaleBackdropPaddingY * 1.5;
      }

      scaleHeight = maxSize; //If the label height is less than 5, set it to 5 so we don't have lines on top of each other.

      labelHeight = Default(labelHeight, 5);
    }

    function drawScale() {
      for (var i = 0; i < calculatedScale.steps; i++) {
        //If the line object is there
        if (config.scaleShowLine) {
          ctx.beginPath();
          ctx.arc(width / 2, height / 2, scaleHop * (i + 1), 0, Math.PI * 2, true);
          ctx.strokeStyle = config.scaleLineColor;
          ctx.lineWidth = config.scaleLineWidth;
          ctx.stroke();
        }

        if (config.scaleShowLabels) {
          ctx.textAlign = "center";
          ctx.font = config.scaleFontStyle + " " + config.scaleFontSize + "px " + config.scaleFontFamily;
          var label = calculatedScale.labels[i]; //If the backdrop object is within the font object

          if (config.scaleShowLabelBackdrop) {
            var textWidth = ctx.measureText(label).width;
            ctx.fillStyle = config.scaleBackdropColor;
            ctx.beginPath();
            ctx.rect(Math.round(width / 2 - textWidth / 2 - config.scaleBackdropPaddingX), //X
            Math.round(height / 2 - scaleHop * (i + 1) - config.scaleFontSize * 0.5 - config.scaleBackdropPaddingY), //Y
            Math.round(textWidth + config.scaleBackdropPaddingX * 2), //Width
            Math.round(config.scaleFontSize + config.scaleBackdropPaddingY * 2) //Height
            );
            ctx.fill();
          }

          ctx.textBaseline = "middle";
          ctx.fillStyle = config.scaleFontColor;
          ctx.fillText(label, width / 2, height / 2 - scaleHop * (i + 1));
        }
      }
    }

    function drawAllSegments(animationDecimal) {
      var startAngle = -Math.PI / 2,
          angleStep = Math.PI * 2 / data.length,
          scaleAnimation = 1,
          rotateAnimation = 1;

      if (config.animation) {
        if (config.animateScale) {
          scaleAnimation = animationDecimal;
        }

        if (config.animateRotate) {
          rotateAnimation = animationDecimal;
        }
      }

      for (var i = 0; i < data.length; i++) {
        ctx.beginPath();
        ctx.arc(width / 2, height / 2, scaleAnimation * calculateOffset(data[i].value, calculatedScale, scaleHop), startAngle, startAngle + rotateAnimation * angleStep, false);
        ctx.lineTo(width / 2, height / 2);
        ctx.closePath();
        ctx.fillStyle = data[i].color;
        ctx.fill();

        if (config.segmentShowStroke) {
          ctx.strokeStyle = config.segmentStrokeColor;
          ctx.lineWidth = config.segmentStrokeWidth;
          ctx.stroke();
        }

        startAngle += rotateAnimation * angleStep;
      }
    }

    function getValueBounds() {
      var upperValue = Number.MIN_VALUE;
      var lowerValue = Number.MAX_VALUE;

      for (var i = 0; i < data.length; i++) {
        if (data[i].value > upperValue) {
          upperValue = data[i].value;
        }

        if (data[i].value < lowerValue) {
          lowerValue = data[i].value;
        }
      }

      var maxSteps = Math.floor(scaleHeight / (labelHeight * 0.66));
      var minSteps = Math.floor(scaleHeight / labelHeight * 0.5);
      return {
        maxValue: upperValue,
        minValue: lowerValue,
        maxSteps: maxSteps,
        minSteps: minSteps
      };
    }
  };

  var Radar = function Radar(data, config, ctx) {
    var maxSize, scaleHop, calculatedScale, labelHeight, scaleHeight, valueBounds, labelTemplateString; //If no labels are defined set to an empty array, so referencing length for looping doesn't blow up.

    if (!data.labels) data.labels = [];
    calculateDrawingSizes();
    var valueBounds = getValueBounds();
    labelTemplateString = config.scaleShowLabels ? config.scaleLabel : null; //Check and set the scale

    if (!config.scaleOverride) {
      calculatedScale = calculateScale(scaleHeight, valueBounds.maxSteps, valueBounds.minSteps, valueBounds.maxValue, valueBounds.minValue, labelTemplateString);
    } else {
      calculatedScale = {
        steps: config.scaleSteps,
        stepValue: config.scaleStepWidth,
        graphMin: config.scaleStartValue,
        labels: []
      };
      populateLabels(labelTemplateString, calculatedScale.labels, calculatedScale.steps, config.scaleStartValue, config.scaleStepWidth);
    }

    scaleHop = maxSize / calculatedScale.steps;
    animationLoop(config, drawScale, drawAllDataPoints, ctx); //Radar specific functions.

    function drawAllDataPoints(animationDecimal) {
      var rotationDegree = 2 * Math.PI / data.datasets[0].data.length;
      ctx.save(); //translate to the centre of the canvas.

      ctx.translate(width / 2, height / 2); //We accept multiple data sets for radar charts, so show loop through each set

      for (var i = 0; i < data.datasets.length; i++) {
        ctx.beginPath();
        ctx.moveTo(0, animationDecimal * (-1 * calculateOffset(data.datasets[i].data[0], calculatedScale, scaleHop)));

        for (var j = 1; j < data.datasets[i].data.length; j++) {
          ctx.rotate(rotationDegree);
          ctx.lineTo(0, animationDecimal * (-1 * calculateOffset(data.datasets[i].data[j], calculatedScale, scaleHop)));
        }

        ctx.closePath();
        ctx.fillStyle = data.datasets[i].fillColor;
        ctx.strokeStyle = data.datasets[i].strokeColor;
        ctx.lineWidth = config.datasetStrokeWidth;
        ctx.fill();
        ctx.stroke();

        if (config.pointDot) {
          ctx.fillStyle = data.datasets[i].pointColor;
          ctx.strokeStyle = data.datasets[i].pointStrokeColor;
          ctx.lineWidth = config.pointDotStrokeWidth;

          for (var k = 0; k < data.datasets[i].data.length; k++) {
            ctx.rotate(rotationDegree);
            ctx.beginPath();
            ctx.arc(0, animationDecimal * (-1 * calculateOffset(data.datasets[i].data[k], calculatedScale, scaleHop)), config.pointDotRadius, 2 * Math.PI, false);
            ctx.fill();
            ctx.stroke();
          }
        }

        ctx.rotate(rotationDegree);
      }

      ctx.restore();
    }

    function drawScale() {
      var rotationDegree = 2 * Math.PI / data.datasets[0].data.length;
      ctx.save();
      ctx.translate(width / 2, height / 2);

      if (config.angleShowLineOut) {
        ctx.strokeStyle = config.angleLineColor;
        ctx.lineWidth = config.angleLineWidth;

        for (var h = 0; h < data.datasets[0].data.length; h++) {
          ctx.rotate(rotationDegree);
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.lineTo(0, -maxSize);
          ctx.stroke();
        }
      }

      for (var i = 0; i < calculatedScale.steps; i++) {
        ctx.beginPath();

        if (config.scaleShowLine) {
          ctx.strokeStyle = config.scaleLineColor;
          ctx.lineWidth = config.scaleLineWidth;
          ctx.moveTo(0, -scaleHop * (i + 1));

          for (var j = 0; j < data.datasets[0].data.length; j++) {
            ctx.rotate(rotationDegree);
            ctx.lineTo(0, -scaleHop * (i + 1));
          }

          ctx.closePath();
          ctx.stroke();
        }

        if (config.scaleShowLabels) {
          ctx.textAlign = 'center';
          ctx.font = config.scaleFontStyle + " " + config.scaleFontSize + "px " + config.scaleFontFamily;
          ctx.textBaseline = "middle";

          if (config.scaleShowLabelBackdrop) {
            var textWidth = ctx.measureText(calculatedScale.labels[i]).width;
            ctx.fillStyle = config.scaleBackdropColor;
            ctx.beginPath();
            ctx.rect(Math.round(-textWidth / 2 - config.scaleBackdropPaddingX), //X
            Math.round(-scaleHop * (i + 1) - config.scaleFontSize * 0.5 - config.scaleBackdropPaddingY), //Y
            Math.round(textWidth + config.scaleBackdropPaddingX * 2), //Width
            Math.round(config.scaleFontSize + config.scaleBackdropPaddingY * 2) //Height
            );
            ctx.fill();
          }

          ctx.fillStyle = config.scaleFontColor;
          ctx.fillText(calculatedScale.labels[i], 0, -scaleHop * (i + 1));
        }
      }

      for (var k = 0; k < data.labels.length; k++) {
        ctx.font = config.pointLabelFontStyle + " " + config.pointLabelFontSize + "px " + config.pointLabelFontFamily;
        ctx.fillStyle = config.pointLabelFontColor;
        var opposite = Math.sin(rotationDegree * k) * (maxSize + config.pointLabelFontSize);
        var adjacent = Math.cos(rotationDegree * k) * (maxSize + config.pointLabelFontSize);

        if (rotationDegree * k == Math.PI || rotationDegree * k == 0) {
          ctx.textAlign = "center";
        } else if (rotationDegree * k > Math.PI) {
          ctx.textAlign = "right";
        } else {
          ctx.textAlign = "left";
        }

        ctx.textBaseline = "middle";
        ctx.fillText(data.labels[k], opposite, -adjacent);
      }

      ctx.restore();
    }

    ;

    function calculateDrawingSizes() {
      maxSize = Min([width, height]) / 2;
      labelHeight = config.scaleFontSize * 2;
      var labelLength = 0;

      for (var i = 0; i < data.labels.length; i++) {
        ctx.font = config.pointLabelFontStyle + " " + config.pointLabelFontSize + "px " + config.pointLabelFontFamily;
        var textMeasurement = ctx.measureText(data.labels[i]).width;
        if (textMeasurement > labelLength) labelLength = textMeasurement;
      } //Figure out whats the largest - the height of the text or the width of what's there, and minus it from the maximum usable size.


      maxSize -= Max([labelLength, config.pointLabelFontSize / 2 * 1.5]);
      maxSize -= config.pointLabelFontSize;
      maxSize = CapValue(maxSize, null, 0);
      scaleHeight = maxSize; //If the label height is less than 5, set it to 5 so we don't have lines on top of each other.

      labelHeight = Default(labelHeight, 5);
    }

    ;

    function getValueBounds() {
      var upperValue = Number.MIN_VALUE;
      var lowerValue = Number.MAX_VALUE;

      for (var i = 0; i < data.datasets.length; i++) {
        for (var j = 0; j < data.datasets[i].data.length; j++) {
          if (data.datasets[i].data[j] > upperValue) {
            upperValue = data.datasets[i].data[j];
          }

          if (data.datasets[i].data[j] < lowerValue) {
            lowerValue = data.datasets[i].data[j];
          }
        }
      }

      var maxSteps = Math.floor(scaleHeight / (labelHeight * 0.66));
      var minSteps = Math.floor(scaleHeight / labelHeight * 0.5);
      return {
        maxValue: upperValue,
        minValue: lowerValue,
        maxSteps: maxSteps,
        minSteps: minSteps
      };
    }
  };

  var Pie = function Pie(data, config, ctx) {
    var segmentTotal = 0; //In case we have a canvas that is not a square. Minus 5 pixels as padding round the edge.

    var pieRadius = Min([height / 2, width / 2]) - 5;

    for (var i = 0; i < data.length; i++) {
      segmentTotal += data[i].value;
    }

    animationLoop(config, null, drawPieSegments, ctx);

    function drawPieSegments(animationDecimal) {
      var cumulativeAngle = -Math.PI / 2,
          scaleAnimation = 1,
          rotateAnimation = 1;

      if (config.animation) {
        if (config.animateScale) {
          scaleAnimation = animationDecimal;
        }

        if (config.animateRotate) {
          rotateAnimation = animationDecimal;
        }
      }

      for (var i = 0; i < data.length; i++) {
        var segmentAngle = rotateAnimation * (data[i].value / segmentTotal * (Math.PI * 2));
        ctx.beginPath();
        ctx.arc(width / 2, height / 2, scaleAnimation * pieRadius, cumulativeAngle, cumulativeAngle + segmentAngle);
        ctx.lineTo(width / 2, height / 2);
        ctx.closePath();
        ctx.fillStyle = data[i].color;
        ctx.fill();

        if (config.segmentShowStroke) {
          ctx.lineWidth = config.segmentStrokeWidth;
          ctx.strokeStyle = config.segmentStrokeColor;
          ctx.stroke();
        }

        cumulativeAngle += segmentAngle;
      }
    }
  };

  var Doughnut = function Doughnut(data, config, ctx) {
    var segmentTotal = 0; //In case we have a canvas that is not a square. Minus 5 pixels as padding round the edge.

    var doughnutRadius = Min([height / 2, width / 2]) - 5;
    var cutoutRadius = doughnutRadius * (config.percentageInnerCutout / 100);

    for (var i = 0; i < data.length; i++) {
      segmentTotal += data[i].value;
    }

    animationLoop(config, null, drawPieSegments, ctx);

    function drawPieSegments(animationDecimal) {
      var cumulativeAngle = -Math.PI / 2,
          scaleAnimation = 1,
          rotateAnimation = 1;

      if (config.animation) {
        if (config.animateScale) {
          scaleAnimation = animationDecimal;
        }

        if (config.animateRotate) {
          rotateAnimation = animationDecimal;
        }
      }

      for (var i = 0; i < data.length; i++) {
        var segmentAngle = rotateAnimation * (data[i].value / segmentTotal * (Math.PI * 2));
        ctx.beginPath();
        ctx.arc(width / 2, height / 2, scaleAnimation * doughnutRadius, cumulativeAngle, cumulativeAngle + segmentAngle, false);
        ctx.arc(width / 2, height / 2, scaleAnimation * cutoutRadius, cumulativeAngle + segmentAngle, cumulativeAngle, true);
        ctx.closePath();
        ctx.fillStyle = data[i].color;
        ctx.fill();

        if (config.segmentShowStroke) {
          ctx.lineWidth = config.segmentStrokeWidth;
          ctx.strokeStyle = config.segmentStrokeColor;
          ctx.stroke();
        }

        cumulativeAngle += segmentAngle;
      }
    }
  };

  var Line = function Line(data, config, ctx) {
    var maxSize,
        scaleHop,
        calculatedScale,
        labelHeight,
        scaleHeight,
        valueBounds,
        labelTemplateString,
        valueHop,
        widestXLabel,
        xAxisLength,
        yAxisPosX,
        xAxisPosY,
        rotateLabels = 0;
    calculateDrawingSizes();
    valueBounds = getValueBounds(); //Check and set the scale

    labelTemplateString = config.scaleShowLabels ? config.scaleLabel : "";

    if (!config.scaleOverride) {
      calculatedScale = calculateScale(scaleHeight, valueBounds.maxSteps, valueBounds.minSteps, valueBounds.maxValue, valueBounds.minValue, labelTemplateString);
    } else {
      calculatedScale = {
        steps: config.scaleSteps,
        stepValue: config.scaleStepWidth,
        graphMin: config.scaleStartValue,
        labels: []
      };
      populateLabels(labelTemplateString, calculatedScale.labels, calculatedScale.steps, config.scaleStartValue, config.scaleStepWidth);
    }

    scaleHop = Math.floor(scaleHeight / calculatedScale.steps);
    calculateXAxisSize();
    animationLoop(config, drawScale, drawLines, ctx);

    function drawLines(animPc) {
      for (var i = 0; i < data.datasets.length; i++) {
        ctx.strokeStyle = data.datasets[i].strokeColor;
        ctx.lineWidth = config.datasetStrokeWidth;
        ctx.beginPath();
        ctx.moveTo(yAxisPosX, xAxisPosY - animPc * calculateOffset(data.datasets[i].data[0], calculatedScale, scaleHop));

        for (var j = 1; j < data.datasets[i].data.length; j++) {
          if (config.bezierCurve) {
            ctx.bezierCurveTo(xPos(j - 0.5), yPos(i, j - 1), xPos(j - 0.5), yPos(i, j), xPos(j), yPos(i, j));
          } else {
            ctx.lineTo(xPos(j), yPos(i, j));
          }
        }

        ctx.stroke();

        if (config.datasetFill) {
          ctx.lineTo(yAxisPosX + valueHop * (data.datasets[i].data.length - 1), xAxisPosY);
          ctx.lineTo(yAxisPosX, xAxisPosY);
          ctx.closePath();
          ctx.fillStyle = data.datasets[i].fillColor;
          ctx.fill();
        } else {
          ctx.closePath();
        }

        if (config.pointDot) {
          ctx.fillStyle = data.datasets[i].pointColor;
          ctx.strokeStyle = data.datasets[i].pointStrokeColor;
          ctx.lineWidth = config.pointDotStrokeWidth;

          for (var k = 0; k < data.datasets[i].data.length; k++) {
            ctx.beginPath();
            ctx.arc(yAxisPosX + valueHop * k, xAxisPosY - animPc * calculateOffset(data.datasets[i].data[k], calculatedScale, scaleHop), config.pointDotRadius, 0, Math.PI * 2, true);
            ctx.fill();
            ctx.stroke();
          }
        }
      }

      function yPos(dataSet, iteration) {
        return xAxisPosY - animPc * calculateOffset(data.datasets[dataSet].data[iteration], calculatedScale, scaleHop);
      }

      function xPos(iteration) {
        return yAxisPosX + valueHop * iteration;
      }
    }

    function drawScale() {
      //X axis line
      ctx.lineWidth = config.scaleLineWidth;
      ctx.strokeStyle = config.scaleLineColor;
      ctx.beginPath();
      ctx.moveTo(width - widestXLabel / 2 + 5, xAxisPosY);
      ctx.lineTo(width - widestXLabel / 2 - xAxisLength - 5, xAxisPosY);
      ctx.stroke();

      if (rotateLabels > 0) {
        ctx.save();
        ctx.textAlign = "right";
      } else {
        ctx.textAlign = "center";
      }

      ctx.fillStyle = config.scaleFontColor;

      for (var i = 0; i < data.labels.length; i++) {
        ctx.save();

        if (rotateLabels > 0) {
          ctx.translate(yAxisPosX + i * valueHop, xAxisPosY + config.scaleFontSize);
          ctx.rotate(-(rotateLabels * (Math.PI / 180)));
          ctx.fillText(data.labels[i], 0, 0);
          ctx.restore();
        } else {
          ctx.fillText(data.labels[i], yAxisPosX + i * valueHop, xAxisPosY + config.scaleFontSize + 3);
        }

        ctx.beginPath();
        ctx.moveTo(yAxisPosX + i * valueHop, xAxisPosY + 3); //Check i isnt 0, so we dont go over the Y axis twice.

        if (config.scaleShowGridLines && i > 0) {
          ctx.lineWidth = config.scaleGridLineWidth;
          ctx.strokeStyle = config.scaleGridLineColor;
          ctx.lineTo(yAxisPosX + i * valueHop, 5);
        } else {
          ctx.lineTo(yAxisPosX + i * valueHop, xAxisPosY + 3);
        }

        ctx.stroke();
      } //Y axis


      ctx.lineWidth = config.scaleLineWidth;
      ctx.strokeStyle = config.scaleLineColor;
      ctx.beginPath();
      ctx.moveTo(yAxisPosX, xAxisPosY + 5);
      ctx.lineTo(yAxisPosX, 5);
      ctx.stroke();
      ctx.textAlign = "right";
      ctx.textBaseline = "middle";

      for (var j = 0; j < calculatedScale.steps; j++) {
        ctx.beginPath();
        ctx.moveTo(yAxisPosX - 3, xAxisPosY - (j + 1) * scaleHop);

        if (config.scaleShowGridLines) {
          ctx.lineWidth = config.scaleGridLineWidth;
          ctx.strokeStyle = config.scaleGridLineColor;
          ctx.lineTo(yAxisPosX + xAxisLength + 5, xAxisPosY - (j + 1) * scaleHop);
        } else {
          ctx.lineTo(yAxisPosX - 0.5, xAxisPosY - (j + 1) * scaleHop);
        }

        ctx.stroke();

        if (config.scaleShowLabels) {
          ctx.fillText(calculatedScale.labels[j], yAxisPosX - 8, xAxisPosY - (j + 1) * scaleHop);
        }
      }
    }

    function calculateXAxisSize() {
      var longestText = 1; //if we are showing the labels

      if (config.scaleShowLabels) {
        ctx.font = config.scaleFontStyle + " " + config.scaleFontSize + "px " + config.scaleFontFamily;

        for (var i = 0; i < calculatedScale.labels.length; i++) {
          var measuredText = ctx.measureText(calculatedScale.labels[i]).width;
          longestText = measuredText > longestText ? measuredText : longestText;
        } //Add a little extra padding from the y axis


        longestText += 10;
      }

      xAxisLength = width - longestText - widestXLabel;
      valueHop = Math.floor(xAxisLength / (data.labels.length - 1));
      yAxisPosX = width - widestXLabel / 2 - xAxisLength;
      xAxisPosY = scaleHeight + config.scaleFontSize / 2;
    }

    function calculateDrawingSizes() {
      maxSize = height; //Need to check the X axis first - measure the length of each text metric, and figure out if we need to rotate by 45 degrees.

      ctx.font = config.scaleFontStyle + " " + config.scaleFontSize + "px " + config.scaleFontFamily;
      widestXLabel = 1;

      for (var i = 0; i < data.labels.length; i++) {
        var textLength = ctx.measureText(data.labels[i]).width; //If the text length is longer - make that equal to longest text!

        widestXLabel = textLength > widestXLabel ? textLength : widestXLabel;
      }

      if (width / data.labels.length < widestXLabel) {
        rotateLabels = 45;

        if (width / data.labels.length < Math.cos(rotateLabels) * widestXLabel) {
          rotateLabels = 90;
          maxSize -= widestXLabel;
        } else {
          maxSize -= Math.sin(rotateLabels) * widestXLabel;
        }
      } else {
        maxSize -= config.scaleFontSize;
      } //Add a little padding between the x line and the text


      maxSize -= 5;
      labelHeight = config.scaleFontSize;
      maxSize -= labelHeight; //Set 5 pixels greater than the font size to allow for a little padding from the X axis.

      scaleHeight = maxSize; //Then get the area above we can safely draw on.
    }

    function getValueBounds() {
      var upperValue = Number.MIN_VALUE;
      var lowerValue = Number.MAX_VALUE;

      for (var i = 0; i < data.datasets.length; i++) {
        for (var j = 0; j < data.datasets[i].data.length; j++) {
          if (data.datasets[i].data[j] > upperValue) {
            upperValue = data.datasets[i].data[j];
          }

          ;

          if (data.datasets[i].data[j] < lowerValue) {
            lowerValue = data.datasets[i].data[j];
          }

          ;
        }
      }

      ;
      var maxSteps = Math.floor(scaleHeight / (labelHeight * 0.66));
      var minSteps = Math.floor(scaleHeight / labelHeight * 0.5);
      return {
        maxValue: upperValue,
        minValue: lowerValue,
        maxSteps: maxSteps,
        minSteps: minSteps
      };
    }
  };

  var Bar = function Bar(data, config, ctx) {
    var maxSize,
        scaleHop,
        calculatedScale,
        labelHeight,
        scaleHeight,
        valueBounds,
        labelTemplateString,
        valueHop,
        widestXLabel,
        xAxisLength,
        yAxisPosX,
        xAxisPosY,
        barWidth,
        rotateLabels = 0;
    calculateDrawingSizes();
    valueBounds = getValueBounds(); //Check and set the scale

    labelTemplateString = config.scaleShowLabels ? config.scaleLabel : "";

    if (!config.scaleOverride) {
      calculatedScale = calculateScale(scaleHeight, valueBounds.maxSteps, valueBounds.minSteps, valueBounds.maxValue, valueBounds.minValue, labelTemplateString);
    } else {
      calculatedScale = {
        steps: config.scaleSteps,
        stepValue: config.scaleStepWidth,
        graphMin: config.scaleStartValue,
        labels: []
      };
      populateLabels(labelTemplateString, calculatedScale.labels, calculatedScale.steps, config.scaleStartValue, config.scaleStepWidth);
    }

    scaleHop = Math.floor(scaleHeight / calculatedScale.steps);
    calculateXAxisSize();
    animationLoop(config, drawScale, drawBars, ctx);

    function drawBars(animPc) {
      ctx.lineWidth = config.barStrokeWidth;

      for (var i = 0; i < data.datasets.length; i++) {
        ctx.fillStyle = data.datasets[i].fillColor;
        ctx.strokeStyle = data.datasets[i].strokeColor;

        for (var j = 0; j < data.datasets[i].data.length; j++) {
          var barOffset = yAxisPosX + config.barValueSpacing + valueHop * j + barWidth * i + config.barDatasetSpacing * i + config.barStrokeWidth * i;
          ctx.beginPath();
          ctx.moveTo(barOffset, xAxisPosY);
          ctx.lineTo(barOffset, xAxisPosY - animPc * calculateOffset(data.datasets[i].data[j], calculatedScale, scaleHop) + config.barStrokeWidth / 2);
          ctx.lineTo(barOffset + barWidth, xAxisPosY - animPc * calculateOffset(data.datasets[i].data[j], calculatedScale, scaleHop) + config.barStrokeWidth / 2);
          ctx.lineTo(barOffset + barWidth, xAxisPosY);

          if (config.barShowStroke) {
            ctx.stroke();
          }

          ctx.closePath();
          ctx.fill();
        }
      }
    }

    function drawScale() {
      //X axis line
      ctx.lineWidth = config.scaleLineWidth;
      ctx.strokeStyle = config.scaleLineColor;
      ctx.beginPath();
      ctx.moveTo(width - widestXLabel / 2 + 5, xAxisPosY);
      ctx.lineTo(width - widestXLabel / 2 - xAxisLength - 5, xAxisPosY);
      ctx.stroke();

      if (rotateLabels > 0) {
        ctx.save();
        ctx.textAlign = "right";
      } else {
        ctx.textAlign = "center";
      }

      ctx.fillStyle = config.scaleFontColor;

      for (var i = 0; i < data.labels.length; i++) {
        ctx.save();

        if (rotateLabels > 0) {
          ctx.translate(yAxisPosX + i * valueHop, xAxisPosY + config.scaleFontSize);
          ctx.rotate(-(rotateLabels * (Math.PI / 180)));
          ctx.fillText(data.labels[i], 0, 0);
          ctx.restore();
        } else {
          ctx.fillText(data.labels[i], yAxisPosX + i * valueHop + valueHop / 2, xAxisPosY + config.scaleFontSize + 3);
        }

        ctx.beginPath();
        ctx.moveTo(yAxisPosX + (i + 1) * valueHop, xAxisPosY + 3); //Check i isnt 0, so we dont go over the Y axis twice.

        ctx.lineWidth = config.scaleGridLineWidth;
        ctx.strokeStyle = config.scaleGridLineColor;
        ctx.lineTo(yAxisPosX + (i + 1) * valueHop, 5);
        ctx.stroke();
      } //Y axis


      ctx.lineWidth = config.scaleLineWidth;
      ctx.strokeStyle = config.scaleLineColor;
      ctx.beginPath();
      ctx.moveTo(yAxisPosX, xAxisPosY + 5);
      ctx.lineTo(yAxisPosX, 5);
      ctx.stroke();
      ctx.textAlign = "right";
      ctx.textBaseline = "middle";

      for (var j = 0; j < calculatedScale.steps; j++) {
        ctx.beginPath();
        ctx.moveTo(yAxisPosX - 3, xAxisPosY - (j + 1) * scaleHop);

        if (config.scaleShowGridLines) {
          ctx.lineWidth = config.scaleGridLineWidth;
          ctx.strokeStyle = config.scaleGridLineColor;
          ctx.lineTo(yAxisPosX + xAxisLength + 5, xAxisPosY - (j + 1) * scaleHop);
        } else {
          ctx.lineTo(yAxisPosX - 0.5, xAxisPosY - (j + 1) * scaleHop);
        }

        ctx.stroke();

        if (config.scaleShowLabels) {
          ctx.fillText(calculatedScale.labels[j], yAxisPosX - 8, xAxisPosY - (j + 1) * scaleHop);
        }
      }
    }

    function calculateXAxisSize() {
      var longestText = 1; //if we are showing the labels

      if (config.scaleShowLabels) {
        ctx.font = config.scaleFontStyle + " " + config.scaleFontSize + "px " + config.scaleFontFamily;

        for (var i = 0; i < calculatedScale.labels.length; i++) {
          var measuredText = ctx.measureText(calculatedScale.labels[i]).width;
          longestText = measuredText > longestText ? measuredText : longestText;
        } //Add a little extra padding from the y axis


        longestText += 10;
      }

      xAxisLength = width - longestText - widestXLabel;
      valueHop = Math.floor(xAxisLength / data.labels.length);
      barWidth = (valueHop - config.scaleGridLineWidth * 2 - config.barValueSpacing * 2 - (config.barDatasetSpacing * data.datasets.length - 1) - (config.barStrokeWidth / 2 * data.datasets.length - 1)) / data.datasets.length;
      yAxisPosX = width - widestXLabel / 2 - xAxisLength;
      xAxisPosY = scaleHeight + config.scaleFontSize / 2;
    }

    function calculateDrawingSizes() {
      maxSize = height; //Need to check the X axis first - measure the length of each text metric, and figure out if we need to rotate by 45 degrees.

      ctx.font = config.scaleFontStyle + " " + config.scaleFontSize + "px " + config.scaleFontFamily;
      widestXLabel = 1;

      for (var i = 0; i < data.labels.length; i++) {
        var textLength = ctx.measureText(data.labels[i]).width; //If the text length is longer - make that equal to longest text!

        widestXLabel = textLength > widestXLabel ? textLength : widestXLabel;
      }

      if (width / data.labels.length < widestXLabel) {
        rotateLabels = 45;

        if (width / data.labels.length < Math.cos(rotateLabels) * widestXLabel) {
          rotateLabels = 90;
          maxSize -= widestXLabel;
        } else {
          maxSize -= Math.sin(rotateLabels) * widestXLabel;
        }
      } else {
        maxSize -= config.scaleFontSize;
      } //Add a little padding between the x line and the text


      maxSize -= 5;
      labelHeight = config.scaleFontSize;
      maxSize -= labelHeight; //Set 5 pixels greater than the font size to allow for a little padding from the X axis.

      scaleHeight = maxSize; //Then get the area above we can safely draw on.
    }

    function getValueBounds() {
      var upperValue = Number.MIN_VALUE;
      var lowerValue = Number.MAX_VALUE;

      for (var i = 0; i < data.datasets.length; i++) {
        for (var j = 0; j < data.datasets[i].data.length; j++) {
          if (data.datasets[i].data[j] > upperValue) {
            upperValue = data.datasets[i].data[j];
          }

          ;

          if (data.datasets[i].data[j] < lowerValue) {
            lowerValue = data.datasets[i].data[j];
          }

          ;
        }
      }

      ;
      var maxSteps = Math.floor(scaleHeight / (labelHeight * 0.66));
      var minSteps = Math.floor(scaleHeight / labelHeight * 0.5);
      return {
        maxValue: upperValue,
        minValue: lowerValue,
        maxSteps: maxSteps,
        minSteps: minSteps
      };
    }
  };

  function calculateOffset(val, calculatedScale, scaleHop) {
    var outerValue = calculatedScale.steps * calculatedScale.stepValue;
    var adjustedValue = val - calculatedScale.graphMin;
    var scalingFactor = CapValue(adjustedValue / outerValue, 1, 0);
    return scaleHop * calculatedScale.steps * scalingFactor;
  }

  function animationLoop(config, drawScale, drawData, ctx) {
    var animFrameAmount = config.animation ? 1 / CapValue(config.animationSteps, Number.MAX_VALUE, 1) : 1,
        easingFunction = animationOptions[config.animationEasing],
        percentAnimComplete = config.animation ? 0 : 1;
    if (typeof drawScale !== "function") drawScale = function drawScale() {};
    requestAnimFrame(animLoop);

    function animateFrame() {
      var easeAdjustedAnimationPercent = config.animation ? CapValue(easingFunction(percentAnimComplete), null, 0) : 1;
      clear(ctx);

      if (config.scaleOverlay) {
        drawData(easeAdjustedAnimationPercent);
        drawScale();
      } else {
        drawScale();
        drawData(easeAdjustedAnimationPercent);
      }
    }

    function animLoop() {
      //We need to check if the animation is incomplete (less than 1), or complete (1).
      percentAnimComplete += animFrameAmount;
      animateFrame(); //Stop the loop continuing forever

      if (percentAnimComplete <= 1) {
        requestAnimFrame(animLoop);
      } else {
        if (typeof config.onAnimationComplete == "function") config.onAnimationComplete();
      }
    }
  } //Declare global functions to be called within this namespace here.
  // shim layer with setTimeout fallback


  var requestAnimFrame = function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
      window.setTimeout(callback, 1000 / 60);
    };
  }();

  function calculateScale(drawingHeight, maxSteps, minSteps, maxValue, minValue, labelTemplateString) {
    var graphMin, graphMax, graphRange, stepValue, numberOfSteps, valueRange, rangeOrderOfMagnitude, decimalNum;
    valueRange = maxValue - minValue;
    rangeOrderOfMagnitude = calculateOrderOfMagnitude(valueRange);
    graphMin = Math.floor(minValue / (1 * Math.pow(10, rangeOrderOfMagnitude))) * Math.pow(10, rangeOrderOfMagnitude);
    graphMax = Math.ceil(maxValue / (1 * Math.pow(10, rangeOrderOfMagnitude))) * Math.pow(10, rangeOrderOfMagnitude);
    graphRange = graphMax - graphMin;
    stepValue = Math.pow(10, rangeOrderOfMagnitude);
    numberOfSteps = Math.round(graphRange / stepValue); //Compare number of steps to the max and min for that size graph, and add in half steps if need be.

    while (numberOfSteps < minSteps || numberOfSteps > maxSteps) {
      if (numberOfSteps < minSteps) {
        stepValue /= 2;
        numberOfSteps = Math.round(graphRange / stepValue);
      } else {
        stepValue *= 2;
        numberOfSteps = Math.round(graphRange / stepValue);
      }
    }

    ;
    var labels = [];
    populateLabels(labelTemplateString, labels, numberOfSteps, graphMin, stepValue);
    return {
      steps: numberOfSteps,
      stepValue: stepValue,
      graphMin: graphMin,
      labels: labels
    };

    function calculateOrderOfMagnitude(val) {
      return Math.floor(Math.log(val) / Math.LN10);
    }
  } //Populate an array of all the labels by interpolating the string.


  function populateLabels(labelTemplateString, labels, numberOfSteps, graphMin, stepValue) {
    if (labelTemplateString) {
      //Fix floating point errors by setting to fixed the on the same decimal as the stepValue.
      for (var i = 1; i < numberOfSteps + 1; i++) {
        labels.push(tmpl(labelTemplateString, {
          value: (graphMin + stepValue * i).toFixed(getDecimalPlaces(stepValue))
        }));
      }
    }
  } //Max value from array


  function Max(array) {
    return Math.max.apply(Math, array);
  }

  ; //Min value from array

  function Min(array) {
    return Math.min.apply(Math, array);
  }

  ; //Default if undefined

  function Default(userDeclared, valueIfFalse) {
    if (!userDeclared) {
      return valueIfFalse;
    } else {
      return userDeclared;
    }
  }

  ; //Is a number function

  function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  } //Apply cap a value at a high or low number


  function CapValue(valueToCap, maxValue, minValue) {
    if (isNumber(maxValue)) {
      if (valueToCap > maxValue) {
        return maxValue;
      }
    }

    if (isNumber(minValue)) {
      if (valueToCap < minValue) {
        return minValue;
      }
    }

    return valueToCap;
  }

  function getDecimalPlaces(num) {
    var numberOfDecimalPlaces;

    if (num % 1 != 0) {
      return num.toString().split(".")[1].length;
    } else {
      return 0;
    }
  }

  function mergeChartConfig(defaults, userDefined) {
    var returnObj = {};

    for (var attrname in defaults) {
      returnObj[attrname] = defaults[attrname];
    }

    for (var attrname in userDefined) {
      returnObj[attrname] = userDefined[attrname];
    }

    return returnObj;
  } //Javascript micro templating by John Resig - source at http://ejohn.org/blog/javascript-micro-templating/


  var cache = {};

  function tmpl(str, data) {
    // Figure out if we're getting a template, or if we need to
    // load the template - and be sure to cache the result.
    var fn = !/\W/.test(str) ? cache[str] = cache[str] || tmpl(document.getElementById(str).innerHTML) : // Generate a reusable function that will serve as a template
    // generator (and which will be cached).
    new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};" + // Introduce the data as local variables using with(){}
    "with(obj){p.push('" + // Convert the template into pure JavaScript
    str.replace(/[\r\t\n]/g, " ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');"); // Provide some basic currying to the user

    return data ? fn(data) : fn;
  }

  ;
};
/* eslint-enable */

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/* eslint-disable */
jQuery(document).ready(function ($) {
  "use strict"; //Contact

  $('form.php-mail-form').submit(function () {
    var f, ferror, emailExp;
    f = $(this).find('.form-group');
    ferror = false;
    emailExp = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;
    f.children('input').each(function () {
      // run all inputs
      var i = $(this); // current input

      var rule = i.attr('data-rule');

      if (rule !== undefined) {
        var ierror = false; // error flag for current input

        var pos = rule.indexOf(':', 0);

        if (pos >= 0) {
          var exp = rule.substr(pos + 1, rule.length);
          rule = rule.substr(0, pos);
        } else {
          rule = rule.substr(pos + 1, rule.length);
        }

        switch (rule) {
          case 'required':
            if (i.val() === '') {
              ferror = ierror = true;
            }

            break;

          case 'minlen':
            if (i.val().length < parseInt(exp)) {
              ferror = ierror = true;
            }

            break;

          case 'email':
            if (!emailExp.test(i.val())) {
              ferror = ierror = true;
            }

            break;

          case 'checked':
            if (!i.is(':checked')) {
              ferror = ierror = true;
            }

            break;

          case 'regexp':
            exp = new RegExp(exp);

            if (!exp.test(i.val())) {
              ferror = ierror = true;
            }

            break;
        }

        i.next('.validate').html(ierror ? i.attr('data-msg') !== undefined ? i.attr('data-msg') : 'wrong Input' : '').show('blind');
      }
    });
    f.children('textarea').each(function () {
      // run all inputs
      var i = $(this); // current input

      var rule = i.attr('data-rule');

      if (rule !== undefined) {
        var ierror = false; // error flag for current input

        var pos = rule.indexOf(':', 0);

        if (pos >= 0) {
          var exp = rule.substr(pos + 1, rule.length);
          rule = rule.substr(0, pos);
        } else {
          rule = rule.substr(pos + 1, rule.length);
        }

        switch (rule) {
          case 'required':
            if (i.val() === '') {
              ferror = ierror = true;
            }

            break;

          case 'minlen':
            if (i.val().length < parseInt(exp)) {
              ferror = ierror = true;
            }

            break;
        }

        i.next('.validate').html(ierror ? i.attr('data-msg') != undefined ? i.attr('data-msg') : 'wrong Input' : '').show('blind');
      }
    });
    if (ferror) return false;else var str = $(this).serialize();
    var action = $(this).attr('action');

    if (!action) {
      action = 'contactform/contactform.php';
    }

    var this_form = $(this);
    this_form.find('.sent-message').slideUp();
    this_form.find('.error-message').slideUp();
    this_form.find('.loading').slideDown();
    $.ajax({
      type: "POST",
      url: action,
      data: str,
      success: function success(msg) {
        if (msg == 'OK') {
          this_form.find('.loading').slideUp();
          this_form.find('.sent-message').slideDown();
          this_form.find("input, textarea").val('');
        } else {
          this_form.find('.loading').slideUp();
          this_form.find('.error-message').slideDown().html(msg);
        }
      }
    });
    return false;
  });
});
/* eslint-enable */
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__webpack_provided_window_dot_jQuery) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_typeof__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_typeof__);


/* =========================================================
 * bootstrap-slider.js v2.0.0
 * http://www.eyecon.ro/bootstrap-slider
 * =========================================================
 * Copyright 2012 Stefan Petre
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */
!function ($) {
  var Slider = function Slider(element, options) {
    this.element = $(element);
    this.picker = $('<div class="slider">' + '<div class="slider-track">' + '<div class="slider-selection"></div>' + '<div class="slider-handle"></div>' + '<div class="slider-handle"></div>' + '</div>' + '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>' + '</div>').insertBefore(this.element).append(this.element);
    this.id = this.element.data('slider-id') || options.id;

    if (this.id) {
      this.picker[0].id = this.id;
    }

    var Modernizr;

    if (typeof Modernizr !== 'undefined' && Modernizr.touch) {
      this.touchCapable = true;
    }

    var tooltip = this.element.data('slider-tooltip') || options.tooltip;
    this.tooltip = this.picker.find('.tooltip');
    this.tooltipInner = this.tooltip.find('div.tooltip-inner');
    this.orientation = this.element.data('slider-orientation') || options.orientation;

    switch (this.orientation) {
      case 'vertical':
        this.picker.addClass('slider-vertical');
        this.stylePos = 'top';
        this.mousePos = 'pageY';
        this.sizePos = 'offsetHeight';
        this.tooltip.addClass('right')[0].style.left = '100%';
        break;

      default:
        this.picker.addClass('slider-horizontal').css('width', this.element.outerWidth());
        this.orientation = 'horizontal';
        this.stylePos = 'left';
        this.mousePos = 'pageX';
        this.sizePos = 'offsetWidth';
        this.tooltip.addClass('top')[0].style.top = -this.tooltip.outerHeight() - 14 + 'px';
        break;
    }

    this.min = this.element.data('slider-min') || options.min;
    this.max = this.element.data('slider-max') || options.max;
    this.step = this.element.data('slider-step') || options.step;
    this.value = this.element.data('slider-value') || options.value;

    if (this.value[1]) {
      this.range = true;
    }

    this.selection = this.element.data('slider-selection') || options.selection;
    this.selectionEl = this.picker.find('.slider-selection');

    if (this.selection === 'none') {
      this.selectionEl.addClass('hide');
    }

    this.selectionElStyle = this.selectionEl[0].style;
    this.handle1 = this.picker.find('.slider-handle:first');
    this.handle1Stype = this.handle1[0].style;
    this.handle2 = this.picker.find('.slider-handle:last');
    this.handle2Stype = this.handle2[0].style;
    var handle = this.element.data('slider-handle') || options.handle;

    switch (handle) {
      case 'round':
        this.handle1.addClass('round left-round');
        this.handle2.addClass('round');
        break;

      case 'triangle':
        this.handle1.addClass('triangle');
        this.handle2.addClass('triangle');
        break;
    }

    if (this.range) {
      this.value[0] = Math.max(this.min, Math.min(this.max, this.value[0]));
      this.value[1] = Math.max(this.min, Math.min(this.max, this.value[1]));
    } else {
      this.value = [Math.max(this.min, Math.min(this.max, this.value))];
      this.handle2.addClass('hide');

      if (this.selection == 'after') {
        this.value[1] = this.max;
      } else {
        this.value[1] = this.min;
      }
    }

    this.diff = this.max - this.min;
    this.percentage = [(this.value[0] - this.min) * 100 / this.diff, (this.value[1] - this.min) * 100 / this.diff, this.step * 100 / this.diff];
    this.offset = this.picker.offset();
    this.size = this.picker[0][this.sizePos];
    this.formater = options.formater;
    this.layout();

    if (this.touchCapable) {
      // Touch: Bind touch events:
      this.picker.on({
        touchstart: $.proxy(this.mousedown, this)
      });
    } else {
      this.picker.on({
        mousedown: $.proxy(this.mousedown, this)
      });
    }

    if (tooltip === 'show') {
      this.picker.on({
        mouseenter: $.proxy(this.showTooltip, this),
        mouseleave: $.proxy(this.hideTooltip, this)
      });
    } else {
      this.tooltip.addClass('hide');
    }
  };

  Slider.prototype = {
    constructor: Slider,
    over: false,
    inDrag: false,
    showTooltip: function showTooltip() {
      this.tooltip.addClass('in'); //var left = Math.round(this.percent*this.width);
      //this.tooltip.css('left', left - this.tooltip.outerWidth()/2);

      this.over = true;
    },
    hideTooltip: function hideTooltip() {
      if (this.inDrag === false) {
        this.tooltip.removeClass('in');
      }

      this.over = false;
    },
    layout: function layout() {
      this.handle1Stype[this.stylePos] = this.percentage[0] + '%';
      this.handle2Stype[this.stylePos] = this.percentage[1] + '%';

      if (this.orientation == 'vertical') {
        this.selectionElStyle.top = Math.min(this.percentage[0], this.percentage[1]) + '%';
        this.selectionElStyle.height = Math.abs(this.percentage[0] - this.percentage[1]) + '%';
      } else {
        this.selectionElStyle.left = Math.min(this.percentage[0], this.percentage[1]) + '%';
        this.selectionElStyle.width = Math.abs(this.percentage[0] - this.percentage[1]) + '%';
      }

      if (this.range) {
        this.tooltipInner.text(this.formater(this.value[0]) + ' : ' + this.formater(this.value[1]));
        this.tooltip[0].style[this.stylePos] = this.size * (this.percentage[0] + (this.percentage[1] - this.percentage[0]) / 2) / 100 - (this.orientation === 'vertical' ? this.tooltip.outerHeight() / 2 : this.tooltip.outerWidth() / 2) + 'px';
      } else {
        this.tooltipInner.text(this.formater(this.value[0]));
        this.tooltip[0].style[this.stylePos] = this.size * this.percentage[0] / 100 - (this.orientation === 'vertical' ? this.tooltip.outerHeight() / 2 : this.tooltip.outerWidth() / 2) + 'px';
      }
    },
    mousedown: function mousedown(ev) {
      // Touch: Get the original event:
      if (this.touchCapable && ev.type === 'touchstart') {
        ev = ev.originalEvent;
      }

      this.offset = this.picker.offset();
      this.size = this.picker[0][this.sizePos];
      var percentage = this.getPercentage(ev);

      if (this.range) {
        var diff1 = Math.abs(this.percentage[0] - percentage);
        var diff2 = Math.abs(this.percentage[1] - percentage);
        this.dragged = diff1 < diff2 ? 0 : 1;
      } else {
        this.dragged = 0;
      }

      this.percentage[this.dragged] = percentage;
      this.layout();

      if (this.touchCapable) {
        // Touch: Bind touch events:
        $(document).on({
          touchmove: $.proxy(this.mousemove, this),
          touchend: $.proxy(this.mouseup, this)
        });
      } else {
        $(document).on({
          mousemove: $.proxy(this.mousemove, this),
          mouseup: $.proxy(this.mouseup, this)
        });
      }

      this.inDrag = true;
      var val = this.calculateValue();
      this.element.trigger({
        type: 'slideStart',
        value: val
      }).trigger({
        type: 'slide',
        value: val
      });
      return false;
    },
    mousemove: function mousemove(ev) {
      // Touch: Get the original event:
      if (this.touchCapable && ev.type === 'touchmove') {
        ev = ev.originalEvent;
      }

      var percentage = this.getPercentage(ev);

      if (this.range) {
        if (this.dragged === 0 && this.percentage[1] < percentage) {
          this.percentage[0] = this.percentage[1];
          this.dragged = 1;
        } else if (this.dragged === 1 && this.percentage[0] > percentage) {
          this.percentage[1] = this.percentage[0];
          this.dragged = 0;
        }
      }

      this.percentage[this.dragged] = percentage;
      this.layout();
      var val = this.calculateValue();
      this.element.trigger({
        type: 'slide',
        value: val
      }).data('value', val).prop('value', val);
      return false;
    },

    /* eslint-disable */
    mouseup: function mouseup(ev) {
      if (this.touchCapable) {
        // Touch: Bind touch events:
        $(document).off({
          touchmove: this.mousemove,
          touchend: this.mouseup
        });
      } else {
        $(document).off({
          mousemove: this.mousemove,
          mouseup: this.mouseup
        });
      }
      /* eslint-enable */


      this.inDrag = false;

      if (this.over == false) {
        this.hideTooltip();
      }

      this.element;
      var val = this.calculateValue();
      this.element.trigger({
        type: 'slideStop',
        value: val
      }).data('value', val).prop('value', val);
      return false;
    },
    calculateValue: function calculateValue() {
      var val;

      if (this.range) {
        val = [this.min + Math.round(this.diff * this.percentage[0] / 100 / this.step) * this.step, this.min + Math.round(this.diff * this.percentage[1] / 100 / this.step) * this.step];
        this.value = val;
      } else {
        val = this.min + Math.round(this.diff * this.percentage[0] / 100 / this.step) * this.step;
        this.value = [val, this.value[1]];
      }

      return val;
    },
    getPercentage: function getPercentage(ev) {
      if (this.touchCapable) {
        ev = ev.touches[0];
      }

      var percentage = (ev[this.mousePos] - this.offset[this.stylePos]) * 100 / this.size;
      percentage = Math.round(percentage / this.percentage[2]) * this.percentage[2];
      return Math.max(0, Math.min(100, percentage));
    },
    getValue: function getValue() {
      if (this.range) {
        return this.value;
      }

      return this.value[0];
    },
    setValue: function setValue(val) {
      this.value = val;

      if (this.range) {
        this.value[0] = Math.max(this.min, Math.min(this.max, this.value[0]));
        this.value[1] = Math.max(this.min, Math.min(this.max, this.value[1]));
      } else {
        this.value = [Math.max(this.min, Math.min(this.max, this.value))];
        this.handle2.addClass('hide');

        if (this.selection == 'after') {
          this.value[1] = this.max;
        } else {
          this.value[1] = this.min;
        }
      }

      this.diff = this.max - this.min;
      this.percentage = [(this.value[0] - this.min) * 100 / this.diff, (this.value[1] - this.min) * 100 / this.diff, this.step * 100 / this.diff];
      this.layout();
    }
  };

  $.fn.slider = function (option, val) {
    return this.each(function () {
      var $this = $(this),
          data = $this.data('slider'),
          options = __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_typeof___default()(option) === 'object' && option;

      if (!data) {
        $this.data('slider', data = new Slider(this, $.extend({}, $.fn.slider.defaults, options)));
      }

      if (typeof option == 'string') {
        data[option](val);
      }
    });
  };

  $.fn.slider.defaults = {
    min: 0,
    max: 10,
    step: 1,
    orientation: 'horizontal',
    value: 5,
    selection: 'before',
    tooltip: 'show',
    handle: 'round',
    formater: function formater(value) {
      return value;
    }
  };
  $.fn.slider.Constructor = Slider;
}(__webpack_provided_window_dot_jQuery);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 7 */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }

  return _typeof(obj);
}

module.exports = _typeof;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {jQuery(document).ready(function ($) {
  /* eslint-disable */
  var myDoughnut;

  if ($('#canvas').length) {
    var doughnutData = [{
      value: 70,
      color: "#f85c37"
    }, {
      value: 30,
      color: "#ecf0f1"
    }];
    myDoughnut = new Chart(document.getElementById("canvas").getContext("2d")).Doughnut(doughnutData);
  }

  if ($('#canvas2').length) {
    var doughnutData = [{
      value: 90,
      color: "#f85c37"
    }, {
      value: 10,
      color: "#ecf0f1"
    }];
    myDoughnut = new Chart(document.getElementById("canvas2").getContext("2d")).Doughnut(doughnutData);
  }

  if ($('#canvas3').length) {
    var doughnutData = [{
      value: 55,
      color: "#f85c37"
    }, {
      value: 45,
      color: "#ecf0f1"
    }];
    myDoughnut = new Chart(document.getElementById("canvas3").getContext("2d")).Doughnut(doughnutData);
  }

  if ($('#canvas4').length) {
    var doughnutData = [{
      value: 55,
      color: "#f85c37"
    }, {
      value: 45,
      color: "#ecf0f1"
    }];
    new Chart(document.getElementById("canvas4").getContext("2d")).Doughnut(doughnutData);
  }
});
/* eslint-enable */
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(document).ready(function () {
  if ($('.team_page').length > 0) {
    // Click on department link
    $('.team_departments a').click(function () {
      // Если текущая ссылка содержит класс active, то прекращаем выполнение кода
      if ($(this).hasClass('active')) {
        return false;
      } // Get department id from link data attribute


      var department_id = $(this).data('department'); // Remove previous active department link

      $('.team_departments a.active').removeClass('active'); // Display current department link

      $(this).addClass('active');

      if (department_id === 'all') {
        // Hide previous active department list
        $('.dep-block').addClass('active');
        return false;
      } // Hide previous active department list


      $('.dep-block.active').removeClass('active'); // Display current department list

      $('.dep-block[data-department="' + department_id + '"]').addClass('active');
      return false;
    });
  }
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {(function ($) {
  /**
   * initMap
   *
   * Renders a Google Map onto the selected jQuery element
   *
   * @date    22/10/19
   * @since   5.8.6
   *
   * @param   jQuery $el The jQuery element.
   * @return  object The map instance.
   */
  function initMap($el) {
    // Find marker elements within map.
    var $markers = $el.find('.marker'); // Create gerenic map.

    var mapArgs = {
      zoom: $el.data('zoom') || 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map($el[0], mapArgs); // Add markers.

    map.markers = [];
    $markers.each(function () {
      initMarker($(this), map);
    }); // Center map based on markers.

    centerMap(map); // Return map instance.

    return map;
  }
  /**
   * initMarker
   *
   * Creates a marker for the given jQuery element and map.
   *
   * @date    22/10/19
   * @since   5.8.6
   *
   * @param   jQuery $el The jQuery element.
   * @param   object The map instance.
   * @return  object The marker instance.
   */


  function initMarker($marker, map) {
    // Get position from marker.
    var lat = $marker.data('lat');
    var lng = $marker.data('lng');
    var latLng = {
      lat: parseFloat(lat),
      lng: parseFloat(lng)
    }; // Create marker instance.

    var marker = new google.maps.Marker({
      position: latLng,
      map: map
    }); // Append to reference for later use.

    map.markers.push(marker); // If marker contains HTML, add it to an infoWindow.

    if ($marker.html()) {
      // Create info window.
      var infowindow = new google.maps.InfoWindow({
        content: $marker.html()
      }); // Show info window when marker is clicked.

      google.maps.event.addListener(marker, 'click', function () {
        infowindow.open(map, marker);
      });
    }
  }
  /**
   * centerMap
   *
   * Centers the map showing all markers in view.
   *
   * @date    22/10/19
   * @since   5.8.6
   *
   * @param   object The map instance.
   * @return  void
   */


  function centerMap(map) {
    // Create map boundaries from all map markers.
    var bounds = new google.maps.LatLngBounds();
    map.markers.forEach(function (marker) {
      bounds.extend({
        lat: marker.position.lat(),
        lng: marker.position.lng()
      });
    }); // Case: Single marker.

    if (map.markers.length == 1) {
      map.setCenter(bounds.getCenter()); // Case: Multiple markers.
    } else {
      map.fitBounds(bounds);
    }
  } // Render maps on page load.


  $(document).ready(function () {
    $('.acf-map').each(function () {
      initMap($(this));
    });
  });
})(jQuery);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(document).ready(function () {
  if ($('.FBI_page').length > 0) {
    $('.FBI_page .office-items select').change(function () {
      var office = $(this).val();

      if (office === 'false') {
        return '';
      }

      $.ajax({
        url: themeVars.ajaxurl,
        method: "GET",
        data: 'action=get_fbi_data&field_offices=' + office,
        beforeSend: function beforeSend() {
          $('.FBI_page .fbi_results .error_message').hide();
          $('.FBI_page .fbi_results .no_data').hide();
          $('.FBI_page .fbi_results .load_spin').show();
        },
        success: function success(data) {
          /* функция которая будет выполнена после успешного запроса.  */
          $('.list_of_prisoners').empty();
          $('.pagination-block .pagination').empty();

          if (data.status === 'success') {
            if (data.result.length > 0) {
              var list = data.result;
              $('.FBI_page .fbi_results .list_of_prisoners').append(list).show(200);
              $('.pagination-block .pagination').append(data.pages);
            } else {
              $('.FBI_page .fbi_results .no_data').show(200);
            }
          } else {
            var error_message = data.error;
            $('.FBI_page .fbi_results .error_message').text(error_message).show(300);
          }

          $('.FBI_page .fbi_results .load_spin').hide();
        }
      });
    });
    $('.FBI_page .fbi_results .pagination-block .pagination.page-numbers').on('click', 'li', function () {
      if ($(this).hasClass('current')) {
        return '';
      }

      var currentPage = $(this);
      $.ajax({
        url: themeVars.ajaxurl,
        type: 'GET',
        data: 'action=get_fbi_data&field_offices=' + $('.FBI_page .office-items select').val() + '&page=' + $(this).data('page'),
        beforeSend: function beforeSend() {
          $('.FBI_page .fbi_results .error_message').hide();
          $('.FBI_page .fbi_results .no_data').hide();
        },
        success: function success(data) {
          $('.list_of_prisoners').empty();
          $('.FBI_page .fbi_results .list_of_prisoners').append(data.result);
          $('.FBI_page .fbi_results .load_spin').hide();
          $('.pagination.page-numbers > li').removeClass('current');
          currentPage.addClass('current');
          $('html, body').animate({
            scrollTop: $('.FBI_page').offset().top
          }, 1000);
        }
      });
    });
  }
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {/*price range*/
if ($.fn.slider) {
  $('#sl2').slider();
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 13 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map