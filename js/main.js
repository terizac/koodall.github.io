!(function (e) {
    var t = {};
    function n(i) {
        if (t[i]) return t[i].exports;
        var o = (t[i] = { i: i, l: !1, exports: {} });
        return e[i].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
    }
    (n.m = e),
        (n.c = t),
        (n.d = function (e, t, i) {
            n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i });
        }),
        (n.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (n.t = function (e, t) {
            if ((1 & t && (e = n(e)), 8 & t)) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var i = Object.create(null);
            if ((n.r(i), Object.defineProperty(i, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
                for (var o in e)
                    n.d(
                        i,
                        o,
                        function (t) {
                            return e[t];
                        }.bind(null, o)
                    );
            return i;
        }),
        (n.n = function (e) {
            var t =
                e && e.__esModule
                    ? function () {
                          return e.default;
                      }
                    : function () {
                          return e;
                      };
            return n.d(t, "a", t), t;
        }),
        (n.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (n.p = ""),
        n((n.s = 860));
})({
    268: function (e, t, n) {
        "use strict";
        var i =
            (this && this.__rest) ||
            function (e, t) {
                var n = {};
                for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (n[i] = e[i]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                    var o = 0;
                    for (i = Object.getOwnPropertySymbols(e); o < i.length; o++) t.indexOf(i[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[o]) && (n[i[o]] = e[i[o]]);
                }
                return n;
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.onUserEmailSupplied = t.showConversation = t.showTicket = t.startChecklist = t.startSurvey = t.showNews = t.showArticle = t.startTour = t.getVisitorId = t.trackEvent = t.onUnreadCountChange = t.onShow = t.onHide = t.showNewMessage = t.showMessages = t.showSpace = t.show = t.hide = t.update = t.shutdown = t.boot = t.Intercom = void 0);
        const o = n(857),
            r = n(858),
            a = (e, ...t) => {
                void 0 !== typeof window && window.Intercom ? window.Intercom(e, ...t) : console.warn("Please ensure Intercom is setup and running on client-side!");
            };
        (t.Intercom = (e) => {
            if ("object" != typeof e) return void console.warn("Intercom initialiser called with invalid parameters.");
            const { region: t = "us" } = e,
                n = i(e, ["region"]);
            "undefined" == typeof window || r.ref || ((window.intercomSettings = Object.assign(Object.assign({}, n), { api_base: o.regionAPIs.get(t) })), (0, r.init)());
        }),
            (t.default = t.Intercom);
        t.boot = (e) => a("boot", e);
        t.shutdown = () => a("shutdown");
        t.update = (e) => a("update", e);
        t.hide = () => a("hide");
        t.show = () => a("show");
        t.showSpace = (e) => a("showSpace", e);
        t.showMessages = () => a("showMessages");
        t.showNewMessage = (e) => a("showNewMessage", e);
        t.onHide = (e) => a("onHide", e);
        t.onShow = (e) => a("onShow", e);
        t.onUnreadCountChange = (e) => a("onUnreadCountChange", e);
        t.trackEvent = (...e) => a("trackEvent", ...e);
        t.getVisitorId = () => a("getVisitorId");
        t.startTour = (e) => a("startTour", e);
        t.showArticle = (e) => a("showArticle", e);
        t.showNews = (e) => a("showNews", e);
        t.startSurvey = (e) => a("startSurvey", e);
        t.startChecklist = (e) => a("startChecklist", e);
        t.showTicket = (e) => a("showTicket", e);
        t.showConversation = (e) => a("showConversation", e);
        t.onUserEmailSupplied = (e) => a("onUserEmailSupplied", e);
    },
    800: function (e, t) {
        var n = {
            _listeners: [],
            _documentClickListeners: [],
            is_mobile: 0,
            is_small_tablet: 0,
            is_tablet: 0,
            is_laptop: 0,
            isMobileLayout: function () {
                return $(window).width() <= 767;
            },
            isSmallTabletLayout: function () {
                return $(window).width() <= 1025;
            },
            isTabletLayout: function () {
                return $(window).width() <= 1023;
            },
            isLaptopLayout: function () {
                return $(window).width() <= 1260;
            },
            isDesktopLayout: function () {
                return !1 === this.isMobileLayout() && !1 === this.isTabletLayout() && !1 === this.isSmallTabletLayout() && !1 === this.isLaptopLayout();
            },
            addListener: function (e) {
                this._listeners.push(e);
            },
            _fireChangeMode: function () {
                var e = this;
                setTimeout(function () {
                    for (var t = 0; t < e._listeners.length; t++) e._listeners[t](e.is_mobile);
                }, 0);
            },
            addDocumentClickHandler: function (e) {
                this._documentClickListeners.push(e);
            },
            fireDocumentClick: function (e) {
                this._documentClickListeners.forEach(function (t) {
                    t(e);
                });
            },
            isTouchDevice: function () {
                return "ontouchstart" in document.documentElement;
            },
            init: function () {
                (this.is_mobile = this.isMobileLayout()),
                    $(window).on("resize", function () {
                        var e = n.isMobileLayout(),
                            t = n.isSmallTabletLayout(),
                            i = n.isTabletLayout(),
                            o = n.isLaptopLayout();
                        e !== n.is_mobile
                            ? ((n.is_mobile = e), n._fireChangeMode())
                            : t !== n.is_small_tablet
                            ? ((n.is_small_tablet = t), n._fireChangeMode())
                            : i !== n.is_tablet
                            ? ((n.is_tablet = i), n._fireChangeMode())
                            : o !== n.is_laptop && ((n.is_laptop = o), n._fireChangeMode());
                    });
                var e = !1;
                $(document).on("touchstart", function () {
                    e = !0;
                }),
                    $(document).on("touchmove", function () {
                        e = !1;
                    }),
                    $(document).on("click touchend", function (t) {
                        "click" === t.type && (e = !0), e && n.fireDocumentClick(t);
                    });
            },
        };
        n.init(),
            (window.Layout = n),
            (window.isMobileLayout = function () {
                return n.isMobileLayout();
            }),
            (window.isSmallTabletLayout = function () {
                return n.isSmallTabletLayout();
            }),
            (window.isTabletLayout = function () {
                return n.isTabletLayout();
            }),
            (window.isLaptopLayout = function () {
                return n.isLaptopLayout();
            }),
            (window.isDesktopLayout = function () {
                return n.isDesktopLayout();
            });
    },
    801: function (e, t) {
        function n(e) {
            return (n =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      })(e);
        }
        function i(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, o(i.key), i);
            }
        }
        function o(e) {
            var t = (function (e, t) {
                if ("object" != n(e) || !e) return e;
                var i = e[Symbol.toPrimitive];
                if (void 0 !== i) {
                    var o = i.call(e, t || "default");
                    if ("object" != n(o)) return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == n(t) ? t : t + "";
        }
        var r = new ((function () {
            return (
                (e = function e() {
                    !(function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                        (this.listeners = []),
                        (this.ticking = !1),
                        this.observeScroll();
                }),
                (t = [
                    {
                        key: "observeScroll",
                        value: function () {
                            var e = this;
                            document.addEventListener(
                                "scroll",
                                function () {
                                    if (e.ticking) return null;
                                    (e.ticking = !0),
                                        raf(function () {
                                            e.listeners.forEach(function (e) {
                                                return e();
                                            }),
                                                (e.ticking = !1);
                                        });
                                },
                                passiveIfSupported
                            );
                        },
                    },
                    {
                        key: "subscribe",
                        value: function (e) {
                            this.listeners.push(e);
                        },
                    },
                ]) && i(e.prototype, t),
                n && i(e, n),
                Object.defineProperty(e, "prototype", { writable: !1 }),
                e
            );
            var e, t, n;
        })())();
        window.onScroll = function (e) {
            return r.subscribe(e);
        };
    },
    802: function (e, t) {
        function n(e) {
            return (n =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      })(e);
        }
        function i(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, o(i.key), i);
            }
        }
        function o(e) {
            var t = (function (e, t) {
                if ("object" != n(e) || !e) return e;
                var i = e[Symbol.toPrimitive];
                if (void 0 !== i) {
                    var o = i.call(e, t || "default");
                    if ("object" != n(o)) return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == n(t) ? t : t + "";
        }
        var r = new ((function () {
            return (
                (e = function e() {
                    !(function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                        (this.listeners = []),
                        this.observeResize();
                }),
                (t = [
                    {
                        key: "observeResize",
                        value: function () {
                            var e = this;
                            window.addEventListener("resize", function () {
                                if (!e.listeners.length) return null;
                                e.listeners.forEach(function (e) {
                                    return e();
                                });
                            });
                        },
                    },
                    {
                        key: "subscribe",
                        value: function (e) {
                            this.listeners.push(e);
                        },
                    },
                ]) && i(e.prototype, t),
                n && i(e, n),
                Object.defineProperty(e, "prototype", { writable: !1 }),
                e
            );
            var e, t, n;
        })())();
        window.onResize = function (e) {
            return r.subscribe(e);
        };
    },
    803: function (e, t) {
        function n(e) {
            return (n =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      })(e);
        }
        function i(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, o(i.key), i);
            }
        }
        function o(e) {
            var t = (function (e, t) {
                if ("object" != n(e) || !e) return e;
                var i = e[Symbol.toPrimitive];
                if (void 0 !== i) {
                    var o = i.call(e, t || "default");
                    if ("object" != n(o)) return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == n(t) ? t : t + "";
        }
        var r = new ((function () {
            function e() {
                var t = this;
                !(function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                })(this, e),
                    (this.isFixedScroll = !1),
                    (this.lastScrollPos = this._getScrollPos()),
                    onScroll(function () {
                        if (t.isFixedScroll) return !1;
                        t.lastScrollPos = t._getScrollPos();
                    });
            }
            return (
                (t = e),
                (o = [
                    {
                        key: "_calcScrollbarWidth",
                        value: function () {
                            var e = document.createElement("div");
                            (e.className = "scroll-measure"), document.body.appendChild(e);
                            var t = e.offsetWidth,
                                n = e.clientWidth,
                                i = "".concat(t - n, "px");
                            return document.body.removeChild(e), i;
                        },
                    },
                ]),
                (n = [
                    {
                        key: "_getScrollPos",
                        value: function () {
                            return window.pageYOffset;
                        },
                    },
                    {
                        key: "showScrollbar",
                        value: function () {
                            if (!document.body.classList.contains("fixed-scroll")) return !1;
                            document.body.classList.remove("fixed-scroll"),
                                (document.body.style.paddingRight = ""),
                                isMobileLayout() && ((this.lastScrollPos = parseFloat(getComputedStyle(document.body).top || "0")), (document.body.style.top = ""), window.scrollTo(0, -1 * this.lastScrollPos)),
                                (this.isFixedScroll = !1);
                        },
                    },
                    {
                        key: "hideScrollbar",
                        value: function () {
                            if (document.body.classList.contains("fixed-scroll")) return !1;
                            isMobileLayout() && (document.body.style.top = "-".concat(this.lastScrollPos, "px")),
                                document.body.classList.add("fixed-scroll"),
                                (document.body.style.paddingRight = e._calcScrollbarWidth()),
                                (this.isFixedScroll = !0);
                        },
                    },
                    {
                        key: "getScrollbarState",
                        value: function () {
                            return this.isFixedScroll;
                        },
                    },
                    {
                        key: "getLastScrollPos",
                        value: function () {
                            return this.lastScrollPos;
                        },
                    },
                ]) && i(t.prototype, n),
                o && i(t, o),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                t
            );
            var t, n, o;
        })())();
        (window.showScrollbar = r.showScrollbar.bind(r)), (window.hideScrollbar = r.hideScrollbar.bind(r)), (window.getScrollPos = r.getLastScrollPos.bind(r)), (window.isFixedSCroll = r.getScrollbarState.bind(r));
    },
    804: function (e, t) {
        function n(e) {
            return (n =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      })(e);
        }
        function i(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, o(i.key), i);
            }
        }
        function o(e) {
            var t = (function (e, t) {
                if ("object" != n(e) || !e) return e;
                var i = e[Symbol.toPrimitive];
                if (void 0 !== i) {
                    var o = i.call(e, t || "default");
                    if ("object" != n(o)) return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == n(t) ? t : t + "";
        }
        var r = (function () {
            return (
                (e = function e() {
                    !(function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                    })(this, e);
                }),
                (n = [
                    {
                        key: "disablingPreloader",
                        value: function () {
                            var e = document.querySelector(".js-preloader");
                            if (e) {
                                var t = function (n) {
                                    if (n.target !== n.currentTarget) return !1;
                                    e.removeEventListener(endEvents.animation, t),
                                        (e.style.display = "none"),
                                        e.classList.remove("hide"),
                                        setTimeout(function () {
                                            var e = new CustomEvent("pageLoaded");
                                            document.dispatchEvent(e);
                                        }, 1e3);
                                };
                                e.addEventListener(endEvents.animation, t), e.classList.add("hide");
                            }
                            var n = document.querySelector(".js-uikit-preloader");
                            if (n) {
                                var i = function (e) {
                                    if (e.target !== e.currentTarget) return !1;
                                    n.removeEventListener(endEvents.animation, i),
                                        (n.style.display = "none"),
                                        n.classList.remove("hide"),
                                        setTimeout(function () {
                                            var e = new CustomEvent("pageLoaded");
                                            document.dispatchEvent(e);
                                        }, 1e3);
                                };
                                setTimeout(function () {
                                    n.addEventListener(endEvents.animation, i), n.classList.add("hide");
                                }, 500);
                            }
                            document.body.classList.add("loaded");
                        },
                    },
                ]),
                (t = null) && i(e.prototype, t),
                n && i(e, n),
                Object.defineProperty(e, "prototype", { writable: !1 }),
                e
            );
            var e, t, n;
        })();
        window.disablingPreloader = r.disablingPreloader;
    },
    805: function (e, t) {
        function n(e) {
            return (n =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      })(e);
        }
        function i(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, o(i.key), i);
            }
        }
        function o(e) {
            var t = (function (e, t) {
                if ("object" != n(e) || !e) return e;
                var i = e[Symbol.toPrimitive];
                if (void 0 !== i) {
                    var o = i.call(e, t || "default");
                    if ("object" != n(o)) return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == n(t) ? t : t + "";
        }
        var r = (function () {
            function e() {
                !(function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                })(this, e);
            }
            return (function (e, t, n) {
                return t && i(e.prototype, t), n && i(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
            })(e, null, [
                {
                    key: "startAnimation",
                    value: function (t) {
                        var n,
                            i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1200;
                        if (t === document.querySelector("#form")) n = t.getBoundingClientRect().top - 25 - document.querySelector(".js-header").getBoundingClientRect().height;
                        else if ("H2" === t.tagName && t.id.startsWith("toc-")) {
                            var o = window.innerWidth < 1265 ? 90 : 120;
                            n = t.getBoundingClientRect().top - o;
                        } else n = t.getBoundingClientRect().top - 80;
                        if ("scrollBehavior" in document.body.style) return e.respond(t), scrollBy({ top: n, behavior: "smooth" });
                        var r = i,
                            a = getScrollPos(),
                            s = performance.now();
                        function l(i) {
                            var o = i - s,
                                c = e.timingFunction(o, a, n, r);
                            scrollTo(0, c), o < r ? raf(l) : e.respond(t);
                        }
                        raf(l);
                    },
                },
                {
                    key: "timingFunction",
                    value: function (e, t, n, i) {
                        return (e /= i / 2) < 1 ? (n / 2) * e * e * e + t : (n / 2) * ((e -= 2) * e * e + 2) + t;
                    },
                },
                {
                    key: "respond",
                    value: function (e) {
                        var t = new CustomEvent("endScroll", { detail: { targetElem: e } });
                        document.dispatchEvent(t);
                    },
                },
            ]);
        })();
        window.startScrollTo = r.startAnimation;
    },
    806: function (e, t) {
        function n(e) {
            return (n =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      })(e);
        }
        function i(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, o(i.key), i);
            }
        }
        function o(e) {
            var t = (function (e, t) {
                if ("object" != n(e) || !e) return e;
                var i = e[Symbol.toPrimitive];
                if (void 0 !== i) {
                    var o = i.call(e, t || "default");
                    if ("object" != n(o)) return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == n(t) ? t : t + "";
        }
        var r = (function () {
            function e() {
                !(function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                })(this, e);
            }
            return (
                (t = e),
                (o = [
                    {
                        key: "validateForm",
                        value: function (t) {
                            t.querySelectorAll("[data-validation]").forEach(function (t) {
                                e.validateInput(t);
                            });
                        },
                    },
                    {
                        key: "isFormValid",
                        value: function (t) {
                            var n = !0;
                            return (
                                t.querySelectorAll("[data-validation]").forEach(function (t) {
                                    n || e.validateInput(t), (n = e.validateInput(t));
                                }),
                                n
                            );
                        },
                    },
                    {
                        key: "validateInput",
                        value: function (t) {
                            var n = e.getInputErrors(t),
                                i = t.parentNode;
                            return n.length > 0 ? (i.classList.contains("error") ? e.updateErrorMessage(t, n[0]) : (e.addErrorMessage(t, n[0]), e.addErrorClass(t)), !1) : (e.removeErrorMessage(t), e.removeErrorClass(t), !0);
                        },
                    },
                    {
                        key: "addErrorClass",
                        value: function (e) {
                            e.parentNode.classList.add("error");
                        },
                    },
                    {
                        key: "addErrorMessage",
                        value: function (e, t) {
                            var n = e.parentNode,
                                i = document.createElement("span");
                            (i.className = "form-message"), (i.innerHTML = t), n.append(i);
                        },
                    },
                    {
                        key: "updateErrorMessage",
                        value: function (e, t) {
                            e.parentNode.getElementsByClassName("form-message")[0].innerHTML = t;
                        },
                    },
                    {
                        key: "removeErrorMessage",
                        value: function (e) {
                            var t = e.parentNode;
                            if (t.classList.contains("error")) {
                                var n = t.getElementsByClassName("form-message")[0];
                                t.removeChild(n);
                            }
                        },
                    },
                    {
                        key: "removeErrorClass",
                        value: function (e) {
                            var t = e.parentNode;
                            t.classList.contains("error") && t.classList.remove("error");
                        },
                    },
                    {
                        key: "getInputErrors",
                        value: function (t) {
                            var n = [];
                            return (
                                t
                                    .getAttribute("data-validation")
                                    .split(",")
                                    .forEach(function (i) {
                                        var o = e[i](t);
                                        o && n.push(o);
                                    }),
                                n
                            );
                        },
                    },
                    {
                        key: "isNotEmpty",
                        value: function (e) {
                            if (!e.value) return "Please, enter your " + e.getAttribute("name");
                        },
                    },
                    {
                        key: "isValidEmail",
                        value: function (e) {
                            if (!RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/).test(e.value)) return "Please, enter a valid email";
                        },
                    },
                    {
                        key: "init",
                        value: function () {
                            document.querySelectorAll("[data-validation]").forEach(function (t) {
                                var n = t.parentNode;
                                t.addEventListener("focusout", function () {
                                    e.validateInput(t);
                                }),
                                    t.addEventListener("change", function () {
                                        n.classList.contains("error") && e.validateInput(t);
                                    }),
                                    t.addEventListener("input", function () {
                                        n.classList.contains("error") && e.validateInput(t);
                                    });
                            });
                        },
                    },
                ]),
                (n = null) && i(t.prototype, n),
                o && i(t, o),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                t
            );
            var t, n, o;
        })();
        r.init(), (window.Validation = r);
    },
    807: function (e, t) {
        var n, i;
        (i = function () {
            var e = 0.01 * document.documentElement.clientHeight;
            document.documentElement.style.setProperty("--vh", "".concat(e, "px")), document.documentElement.style.setProperty("--bodyWidth", "".concat(document.body.offsetWidth, "px"));
        }),
            window.onResize(i),
            i(),
            (n = 0.01 * document.documentElement.clientHeight),
            document.documentElement.style.setProperty("--staticVh", "".concat(n, "px"));
    },
    808: function (e, t) {
        function n(e) {
            return (n =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      })(e);
        }
        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function o(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, r(i.key), i);
            }
        }
        function r(e) {
            var t = (function (e, t) {
                if ("object" != n(e) || !e) return e;
                var i = e[Symbol.toPrimitive];
                if (void 0 !== i) {
                    var o = i.call(e, t || "default");
                    if ("object" != n(o)) return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == n(t) ? t : t + "";
        }
        var a = (function () {
            return (
                (e = function e(t, n) {
                    var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    i(this, e), (this.$node = t), this.$node && ((this.selector = n ? ("." === n.substr(0, 1) ? n.substr(1) : n) : null), (this.breakpoint = o), (this.breakpointStatus = null), (this.inited = !1), (this.eventHandlers = {}));
                }),
                (t = [
                    {
                        key: "init",
                        value: function () {
                            this.inited ? this.updateBreakpointCache() : (this.breakpoint ? (onResize(this.updateBreakpointCache.bind(this)), this.updateBreakpointCache()) : this.build(), (this.inited = !0));
                        },
                    },
                    {
                        key: "checkBreakpoint",
                        value: function () {
                            switch (this.breakpoint) {
                                case null:
                                    return !0;
                                case "mobile":
                                    return isMobileLayout();
                                case "mobile up":
                                    return !isMobileLayout();
                                case "tablet":
                                    return isTabletLayout();
                                case "tablet up":
                                    return !isTabletLayout();
                                case "tablet-mobile":
                                    return isMobileLayout() || isTabletLayout();
                                case "smallTablet-mobile":
                                    return isMobileLayout() || (isTabletLayout() && !isBigTabletLayout());
                                case "laptop":
                                    return isLaptopLayout();
                                case "desktop":
                                    return isDesktopLayout();
                                case "no-desktop":
                                    return !isDesktopLayout();
                                case "bigTablet-desktop":
                                    return isDesktopLayout() || isBigTabletLayout();
                                default:
                                    return !0;
                            }
                        },
                    },
                    {
                        key: "updateBreakpointCache",
                        value: function () {
                            var e = this.checkBreakpoint();
                            (!1 !== this.breakpointStatus && null !== this.breakpointStatus) || !e
                                ? this.breakpointStatus && !e && ((this.breakpointStatus = !1), "function" == typeof this.destroy && this.destroy())
                                : ((this.breakpointStatus = !0), "function" == typeof this.build && this.build());
                        },
                    },
                    { key: "build", value: function () {} },
                    { key: "destroy", value: function () {} },
                    {
                        key: "rebuild",
                        value: function () {
                            this.destroy(), this.build();
                        },
                    },
                    {
                        key: "queryElement",
                        value: function (e) {
                            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                            if (!this.$node) return null;
                            var n = null;
                            if ((e && (("." === e[0] && (n = this.$node.querySelector("." + this.selector + "__" + e.substr(1)))) || (n = this.$node.querySelector(e))), !n && t))
                                throw new Error('Widget "'.concat(this.selector, '" Error: Child element (selector "').concat(e, '") not found'));
                            return n;
                        },
                    },
                    {
                        key: "queryElements",
                        value: function (e) {
                            if (!this.$node) return null;
                            var t = null;
                            return e && ("." === e[0] ? 0 === (t = this.$node.querySelectorAll("." + this.selector + "__" + e.substr(1))).length && (t = this.$node.querySelectorAll(e)) : (t = this.$node.querySelectorAll(e))), t;
                        },
                    },
                    {
                        key: "on",
                        value: function (e, t) {
                            e in this.eventHandlers || (this.eventHandlers[e] = []), this.eventHandlers[e].push(t);
                        },
                    },
                    {
                        key: "trigger",
                        value: function (e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            e in this.eventHandlers &&
                                this.eventHandlers[e].forEach(function (e) {
                                    return e(t);
                                });
                        },
                    },
                ]) && o(e.prototype, t),
                n && o(e, n),
                Object.defineProperty(e, "prototype", { writable: !1 }),
                e
            );
            var e, t, n;
        })();
        window.Widget = a;
    },
    809: function (e, t) {
        function n(e) {
            return (n =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      })(e);
        }
        function i(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t &&
                    (i = i.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    n.push.apply(n, i);
            }
            return n;
        }
        function o(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2
                    ? i(Object(n), !0).forEach(function (t) {
                          r(e, t, n[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                    : i(Object(n)).forEach(function (t) {
                          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                      });
            }
            return e;
        }
        function r(e, t, n) {
            return (t = s(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
        }
        function a(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, s(i.key), i);
            }
        }
        function s(e) {
            var t = (function (e, t) {
                if ("object" != n(e) || !e) return e;
                var i = e[Symbol.toPrimitive];
                if (void 0 !== i) {
                    var o = i.call(e, t || "default");
                    if ("object" != n(o)) return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == n(t) ? t : t + "";
        }
        var l = "".concat("js-drawer", "-no-scroll"),
            c = ".".concat("js-drawer-container"),
            u = {
                position: "left",
                height: "100%",
                width: "250px",
                startOpen: !0,
                closeable: !0,
                minClosedSize: 0,
                toggleButton: "",
                embed: !1,
                navigationItemWidth: "0px",
                navigationItemHeight: "0px",
                autoclose: !1,
                autocloseDelay: 5e3,
                clickOutsideToClose: !0,
                nameOfStore: "target-drawer",
            },
            d = (function () {
                function e(t, n) {
                    if (
                        ((function (e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                        })(this, e),
                        (this.config = o(o({}, u), n)),
                        !t)
                    )
                        throw new Error("Missing required attribute: target element (css selector or DOM node) must be provided");
                    if (this.__isString(t)) this.targetElement = document.querySelector(t);
                    else {
                        if (!this.__isDOMElement(t)) throw new Error("Incorrect type: target element must be DOM node or string css selector");
                        this.targetElement = t;
                    }
                    this.targetElement.classList.add("js-drawer"),
                        this.config.embed && this.targetElement.parentElement.classList.add("js-drawer-embed-container"),
                        (this.containerElement = this.targetElement.querySelector(c)),
                        (this.toggleButtonElement = document.querySelector(this.config.toggleButton)),
                        this.__applyConfig(this.config),
                        this.__attachEventListeners();
                }
                return (
                    (t = e),
                    (i = [
                        {
                            key: "init",
                            value: function (t, n) {
                                t && new e(t, n);
                            },
                        },
                    ]),
                    (n = [
                        {
                            key: "setPosition",
                            value: function (e) {
                                this.targetElement.classList.add("".concat("js-drawer", "-").concat(e));
                            },
                        },
                        {
                            key: "setHeight",
                            value: function (e) {
                                this.targetElement.style.height = e;
                            },
                        },
                        {
                            key: "setWidth",
                            value: function (e) {
                                this.targetElement.style.width = e;
                            },
                        },
                        {
                            key: "setAutoClose",
                            value: function (e) {
                                this.autocloseTimeout && clearTimeout(this.autocloseTimeout), (this.autocloseTimeout = setTimeout(this.close.bind(this), e));
                            },
                        },
                        {
                            key: "open",
                            value: function () {
                                this.fire("beforeOpen", [this.targetElement]),
                                    document.body.classList.add(l),
                                    this.toggleButtonElement && this.toggleButtonElement.classList.add("open"),
                                    this.targetElement.classList.remove("closed"),
                                    this.targetElement.classList.add("open"),
                                    this.__updateEmbeding(),
                                    window.localStorage && window.localStorage.setItem(this.config.nameOfStore, JSON.stringify(!0)),
                                    this.fire("afterOpen", [this.targetElement]);
                            },
                        },
                        {
                            key: "close",
                            value: function () {
                                this.fire("beforeClose", [this.targetElement]),
                                    document.body.classList.remove(l),
                                    this.toggleButtonElement && this.toggleButtonElement.classList.remove("open"),
                                    this.targetElement.classList.remove("open"),
                                    this.targetElement.classList.add("closed"),
                                    this.__updateEmbeding(),
                                    window.localStorage && window.localStorage.setItem(this.config.nameOfStore, JSON.stringify(!1)),
                                    this.fire("afterClose", [this.targetElement]);
                            },
                        },
                        {
                            key: "isOpen",
                            value: function () {
                                return this.targetElement.classList.contains("open");
                            },
                        },
                        {
                            key: "isActive",
                            value: function (e) {
                                if (this.__isString(e)) e = document.getElementById(e);
                                else if (!this.__isDOMElement(e)) return !1;
                                return e.classList.contains("active");
                            },
                        },
                        {
                            key: "__isStart",
                            value: function (e) {
                                this.__isBoolean(e)
                                    ? this.config.startOpen
                                        ? this.open()
                                        : this.close()
                                    : this.__isString(e) && "save" === e && window.localStorage && null !== window.localStorage.getItem(this.config.nameOfStore) && !0 === JSON.parse(window.localStorage.getItem(this.config.nameOfStore))
                                    ? this.open()
                                    : this.close();
                            },
                        },
                        {
                            key: "__applyConfig",
                            value: function (e) {
                                this.setPosition(e.position), this.__isStart(e.startOpen), this.setWidth(e.width), this.setHeight(e.height), this.__updateEmbeding(), e.autoclose && this.setAutoClose();
                            },
                        },
                        {
                            key: "__attachEventListeners",
                            value: function () {
                                this.autocloseTimeout && (this.containerElement.addEventListener("mouseover", this.onMouseOver.bind(this)), this.containerElement.addEventListener("mouseout", this.onMouseOut.bind(this))),
                                    this.config.clickOutsideToClose && document.addEventListener("click", this.onDocumentClick.bind(this), !1),
                                    this.config.toggleButton && this.toggleButtonElement && this.toggleButtonElement.addEventListener("click", this.onToggleButtonClick.bind(this));
                            },
                        },
                        {
                            key: "__updateEmbeding",
                            value: function () {
                                this.config.embed &&
                                    ("left" === this.config.position
                                        ? (this.targetElement.parentElement.style.marginLeft = this.isOpen()
                                              ? "calc(".concat(this.config.width, " - ").concat(this.config.navigationItemWidth, ")")
                                              : "".concat(this.config.minClosedSize, "px"))
                                        : "right" === this.config.position
                                        ? ((this.targetElement.parentElement.style.marginRight = this.isOpen()
                                              ? "calc(".concat(this.config.width, " - ").concat(this.config.navigationItemWidth, ")")
                                              : "".concat(this.config.minClosedSize, "px")),
                                          (this.targetElement.parentElement.style.marginLeft = this.isOpen()
                                              ? "calc(-".concat(this.config.width, " + ").concat(this.config.navigationItemWidth, ")")
                                              : "".concat(this.config.minClosedSize, "px")))
                                        : "top" === this.config.position
                                        ? (this.targetElement.parentElement.style.marginTop = this.isOpen()
                                              ? "calc(".concat(this.config.height, " - ").concat(this.config.navigationItemHeight, ")")
                                              : "".concat(this.config.minClosedSize, "px"))
                                        : "bottom" === this.config.position &&
                                          (this.targetElement.parentElement.style.marginBottom = this.isOpen()
                                              ? "calc(".concat(this.config.height, " - ").concat(this.config.navigationItemHeight, ")")
                                              : "".concat(this.config.minClosedSize, "px")));
                            },
                        },
                        {
                            key: "onMouseOver",
                            value: function () {
                                clearTimeout(this.autocloseTimeout);
                            },
                        },
                        {
                            key: "onMouseOut",
                            value: function () {
                                this.setAutoClose(this.config.autocloseDelay);
                            },
                        },
                        {
                            key: "onDocumentClick",
                            value: function (e) {
                                this.targetElement.contains(e.target) || (this.toggleButtonElement && this.toggleButtonElement.contains(e.target)) || this.close();
                            },
                        },
                        {
                            key: "onToggleButtonClick",
                            value: function () {
                                this.isOpen() ? this.close() : this.open();
                            },
                        },
                        {
                            key: "fire",
                            value: function (e, t) {
                                this.config.listeners && this.config.listeners[e] && this.config.listeners[e].apply(this, t);
                            },
                        },
                        {
                            key: "__isDOMElement",
                            value: function (e) {
                                return e && (e.nodeType === document.ELEMENT_NODE || e.nodeType === document.DOCUMENT_FRAGMENT_NODE);
                            },
                        },
                        {
                            key: "__isString",
                            value: function (e) {
                                return "string" == typeof e;
                            },
                        },
                        {
                            key: "__isBoolean",
                            value: function (e) {
                                return !0 === e || !1 === e || "boolean" == typeof e;
                            },
                        },
                    ]) && a(t.prototype, n),
                    i && a(t, i),
                    Object.defineProperty(t, "prototype", { writable: !1 }),
                    t
                );
                var t, n, i;
            })();
        document.addEventListener("DOMContentLoaded", function () {
            var e = { toggleButton: ".js-drawer-toggle", startOpen: "save", embed: !0, clickOutsideToClose: !1 };
            document.querySelectorAll(".js-drawer").forEach(function (t) {
                return d.init(t, e);
            });
        });
    },
    810: function (e, t) {
        function n(e) {
            return (n =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      })(e);
        }
        function i(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t &&
                    (i = i.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    n.push.apply(n, i);
            }
            return n;
        }
        function o(e, t, n) {
            return (t = a(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
        }
        function r(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, a(i.key), i);
            }
        }
        function a(e) {
            var t = (function (e, t) {
                if ("object" != n(e) || !e) return e;
                var i = e[Symbol.toPrimitive];
                if (void 0 !== i) {
                    var o = i.call(e, t || "default");
                    if ("object" != n(o)) return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == n(t) ? t : t + "";
        }
        var s = (function () {
            function e(t, n, r) {
                !(function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                })(this, e),
                    (this.element = this.isElement(t)),
                    (this.selector = this.isSelector(n)),
                    (this.config = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2
                                ? i(Object(n), !0).forEach(function (t) {
                                      o(e, t, n[t]);
                                  })
                                : Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                                : i(Object(n)).forEach(function (t) {
                                      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                                  });
                        }
                        return e;
                    })({ position: 3 }, r)),
                    this.events();
            }
            return (
                (t = e),
                (a = [
                    {
                        key: "init",
                        value: function (t, n, i) {
                            t && new e(t, n, i);
                        },
                    },
                ]),
                (n = [
                    {
                        key: "events",
                        value: function () {
                            document.addEventListener("DOMContentLoaded", this.updateScrollTopPosition.bind(this)), onScroll(this.updateScrollTopPosition.bind(this)), this.initScrollEvents();
                        },
                    },
                    {
                        key: "updateScrollTopPosition",
                        value: function () {
                            this.scrollTop = (window.pageYOffset || document.scrollTop) - (document.clientTop || 0) || 0;
                        },
                    },
                    {
                        key: "initScrollEvents",
                        value: function () {
                            document.addEventListener("DOMContentLoaded", this.onScrollEvents.bind(this)), onScroll(this.onScrollEvents.bind(this));
                        },
                    },
                    {
                        key: "onScrollEvents",
                        value: function () {
                            var e = "".concat(this.selector, "_box-shadow");
                            this.scrollTop > this.config.position ? this.element.classList.add(e) : this.element.classList.remove(e);
                        },
                    },
                    {
                        key: "isElement",
                        value: function (e) {
                            if (e && e instanceof HTMLElement) return e;
                            throw new Error('Widget "uikit scroll header": Missing required attribute: target element (DOM node) must be provided');
                        },
                    },
                    {
                        key: "isSelector",
                        value: function (e) {
                            return e ? ("." === e.substr(0, 1) ? e.substr(1) : e) : null;
                        },
                    },
                ]) && r(t.prototype, n),
                a && r(t, a),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                t
            );
            var t, n, a;
        })();
        document.addEventListener("DOMContentLoaded", function () {
            document.querySelectorAll(".js-uikit-header").forEach(function (e) {
                s.init(e, "uikit-header", { position: 0 });
            });
        });
    },
    811: function (e, t) {
        function n(e) {
            return (n =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      })(e);
        }
        function i(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, o(i.key), i);
            }
        }
        function o(e) {
            var t = (function (e, t) {
                if ("object" != n(e) || !e) return e;
                var i = e[Symbol.toPrimitive];
                if (void 0 !== i) {
                    var o = i.call(e, t || "default");
                    if ("object" != n(o)) return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == n(t) ? t : t + "";
        }
        var r = (function () {
            function e(t, n) {
                var i = this;
                !(function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                })(this, e),
                    (this.element = t);
                (this.config = Object.assign({}, { selector: "js-autogenerator" }, n)), (this.insertAdjacentElement = document.querySelector("".concat(this.config.selector, "-append")));
                var o = "";
                this.element.querySelectorAll("".concat(this.config.selector, "-title")).forEach(function (e) {
                    var t = e.parentElement.parentElement;
                    o += '\n        <li>\n          <a class="uikit-aside__link" href="#" data-id="'.concat(t.id, '">').concat(e.textContent, "</a>\n      ");
                    var n = t.querySelectorAll("".concat(i.config.selector, "-subtitle"));
                    n.length &&
                        ((o += "\n          <ul>\n        "),
                        n.forEach(function (e) {
                            o += '\n            <li>\n              <a class="uikit-aside__sublink" href="#" data-id="'.concat(e.parentElement.id, '">').concat(e.textContent, "</a>\n            </li>\n          ");
                        }),
                        (o += "\n        </ul>\n      ")),
                        (o += "\n        </li>\n      ");
                }),
                    this.insertAdjacentElement.insertAdjacentHTML("beforeend", o);
            }
            return (
                (t = e),
                (o = [
                    {
                        key: "init",
                        value: function (t, n) {
                            t && new e(t, n);
                        },
                    },
                ]),
                (n = null) && i(t.prototype, n),
                o && i(t, o),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                t
            );
            var t, n, o;
        })();
        document.addEventListener("DOMContentLoaded", function () {
            document.querySelectorAll(".js-uikit-autogenerator").forEach(function (e) {
                return r.init(e, { selector: ".js-uikit-autogenerator" });
            }),
                $('.uikit-aside__nav a[href="#"][data-id]').on("click", function (e) {
                    e.preventDefault();
                    var t = $(this).data("id"),
                        n = document.getElementById(t),
                        i = n.closest(".js-uikit-accord"),
                        o = document.querySelectorAll(".js-uikit-accord");
                    i.classList.contains("opened") || i.classList.add("opened"),
                        $("html, body").animate({ scrollTop: $("#".concat(t)).offset().top - 80 }, 600),
                        n.classList.contains("uikit-subsection") ||
                            (o.forEach(function (e) {
                                e.classList.add("inactive"),
                                    setTimeout(function () {
                                        e.classList.remove("inactive");
                                    }, 2100);
                            }),
                            i.classList.remove("inactive"),
                            i.classList.add("animate"),
                            setTimeout(function () {
                                i.classList.remove("animate");
                            }, 2100));
                });
        });
    },
    812: function (e, t) {
        function n(e) {
            return (n =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      })(e);
        }
        function i(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, o(i.key), i);
            }
        }
        function o(e) {
            var t = (function (e, t) {
                if ("object" != n(e) || !e) return e;
                var i = e[Symbol.toPrimitive];
                if (void 0 !== i) {
                    var o = i.call(e, t || "default");
                    if ("object" != n(o)) return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == n(t) ? t : t + "";
        }
        var r = (function () {
            function e(t) {
                !(function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                })(this, e),
                    (this.copyText = t),
                    (this.message = document.querySelector(".js-copy-message")),
                    this.addEvents();
            }
            return (
                (t = e),
                (o = [
                    {
                        key: "init",
                        value: function (t) {
                            new e(t);
                        },
                    },
                ]),
                (n = [
                    {
                        key: "addEvents",
                        value: function () {
                            var e = this;
                            this.copyText.addEventListener("click", function (t) {
                                return (
                                    e.copyText.querySelector(".uikit-colors__item") ? e.textCopy(e.copyText.nextElementSibling.textContent) : e.textCopy(e.copyText.textContent),
                                    e.setActive(e.message),
                                    setTimeout(function () {
                                        return e.removeActive(e.message);
                                    }, 800),
                                    !1
                                );
                            });
                        },
                    },
                    {
                        key: "textCopy",
                        value: function (e) {
                            var t = document.createElement("textarea");
                            (t.style.position = "absolute"), (t.textContent = e), this.copyText.appendChild(t), t.focus(), t.setSelectionRange(0, t.value.length);
                            try {
                                document.execCommand("copy"), t.remove();
                            } catch (e) {}
                        },
                    },
                    {
                        key: "setActive",
                        value: function (e) {
                            e.classList.add("active");
                        },
                    },
                    {
                        key: "removeActive",
                        value: function (e) {
                            e.classList.remove("active");
                        },
                    },
                ]) && i(t.prototype, n),
                o && i(t, o),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                t
            );
            var t, n, o;
        })();
        document.addEventListener("DOMContentLoaded", function () {
            document.querySelectorAll(".js-copy-to-clipboard").forEach(function (e) {
                r.init(e);
            });
        });
    },
    813: function (e, t) {
        function n(e) {
            return (n =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      })(e);
        }
        function i(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, o(i.key), i);
            }
        }
        function o(e) {
            var t = (function (e, t) {
                if ("object" != n(e) || !e) return e;
                var i = e[Symbol.toPrimitive];
                if (void 0 !== i) {
                    var o = i.call(e, t || "default");
                    if ("object" != n(o)) return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == n(t) ? t : t + "";
        }
        var r = (function () {
            function e() {
                !(function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                })(this, e);
            }
            return (function (e, t, n) {
                return t && i(e.prototype, t), n && i(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
            })(e, null, [
                {
                    key: "startAnimation",
                    value: function (t, n) {
                        var i = t.getBoundingClientRect().top - 70;
                        if ("scrollBehavior" in document.body.style) return e.respond(t), scrollBy({ top: i, behavior: "smooth" });
                        var o = getScrollPos(),
                            r = performance.now();
                        raf(function n(a) {
                            var s = a - r,
                                l = e.timingFunction(s, o, i, 1200);
                            scrollTo(0, l), s < 1200 ? raf(n) : e.respond(t);
                        });
                    },
                },
                {
                    key: "timingFunction",
                    value: function (e, t, n, i) {
                        return (e /= i / 2) < 1 ? (n / 2) * e * e * e + t : (n / 2) * ((e -= 2) * e * e + 2) + t;
                    },
                },
                {
                    key: "respond",
                    value: function (e) {
                        var t = new CustomEvent("endScroll", { detail: { targetElem: e } });
                        document.dispatchEvent(t);
                    },
                },
            ]);
        })();
        window.startUikitScrollTo = r.startAnimation;
    },
    814: function (e, t) {
        function n(e) {
            return (n =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      })(e);
        }
        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function o(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, r(i.key), i);
            }
        }
        function r(e) {
            var t = (function (e, t) {
                if ("object" != n(e) || !e) return e;
                var i = e[Symbol.toPrimitive];
                if (void 0 !== i) {
                    var o = i.call(e, t || "default");
                    if ("object" != n(o)) return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == n(t) ? t : t + "";
        }
        function a(e, t, i) {
            return (
                (t = s(t)),
                (function (e, t) {
                    if (t && ("object" == n(t) || "function" == typeof t)) return t;
                    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                    return (function (e) {
                        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e;
                    })(e);
                })(
                    e,
                    (function () {
                        try {
                            var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
                        } catch (e) {}
                        return (function () {
                            return !!e;
                        })();
                    })()
                        ? Reflect.construct(t, i || [], s(e).constructor)
                        : t.apply(e, i)
                )
            );
        }
        function s(e) {
            return (s = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (e) {
                      return e.__proto__ || Object.getPrototypeOf(e);
                  })(e);
        }
        function l(e, t) {
            return (l = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (e, t) {
                      return (e.__proto__ = t), e;
                  })(e, t);
        }
        var c = new Map(),
            u = (function (e) {
                function t(e) {
                    var n,
                        o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return (
                        i(this, t),
                        ((n = a(this, t, [e, "js-uikit-accord"])).$toggle = o.toggleElement ? o.toggleElement : n.queryElement(".toggle")),
                        (n.$body = o.bodyElement ? o.bodyElement : n.queryElement(".body")),
                        (n.opened = n.$node.classList.contains("opened")),
                        (n.busy = !1),
                        (n.eventHandlers = {}),
                        (n.onToggleClick = n.onToggleClick.bind(n)),
                        n
                    );
                }
                return (
                    (function (e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), Object.defineProperty(e, "prototype", { writable: !1 }), t && l(e, t);
                    })(t, Widget),
                    (function (e, t, n) {
                        return t && o(e.prototype, t), n && o(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
                    })(
                        t,
                        [
                            {
                                key: "build",
                                value: function () {
                                    this.$toggle.addEventListener("click", this.onToggleClick);
                                },
                            },
                            {
                                key: "destroy",
                                value: function () {
                                    this.$toggle.removeEventListener("click", this.onToggleClick);
                                },
                            },
                            {
                                key: "on",
                                value: function (e, t) {
                                    e in this.eventHandlers || (this.eventHandlers[e] = []), this.eventHandlers[e].push(t);
                                },
                            },
                            {
                                key: "trigger",
                                value: function (e) {
                                    e in this.eventHandlers &&
                                        this.eventHandlers[e].forEach(function (e) {
                                            return e();
                                        });
                                },
                            },
                            {
                                key: "scrollToView",
                                value: function () {
                                    startUikitScrollTo(this.$node);
                                },
                            },
                            {
                                key: "open",
                                value: function () {
                                    var e = this;
                                    this.$node.classList.add("opened"),
                                        this.expand(),
                                        this.trigger("opening"),
                                        setTimeout(function () {
                                            return e.scrollToView();
                                        }, 300);
                                },
                            },
                            {
                                key: "close",
                                value: function () {
                                    this.collapse(), this.$node.classList.remove("opened");
                                },
                            },
                            {
                                key: "onToggleClick",
                                value: function (e) {
                                    e.preventDefault(), this.busy || ((this.busy = !0), this.$node.classList.contains("opened") ? this.close() : this.open());
                                },
                            },
                            {
                                key: "collapse",
                                value: function () {
                                    this.animate({ from: this.$body.scrollHeight, to: 0 });
                                },
                            },
                            {
                                key: "expand",
                                value: function () {
                                    this.animate({ from: 0, to: this.$body.scrollHeight });
                                },
                            },
                            {
                                key: "animate",
                                value: function (e) {
                                    var t = this,
                                        n = this.$body,
                                        i = function (e) {
                                            if (e.target !== e.currentTarget) return !1;
                                            n.removeEventListener(endEvents.transition, i), n.classList.remove("animate"), (n.style.height = ""), (t.busy = !1);
                                        };
                                    n.addEventListener(endEvents.transition, i),
                                        n.classList.add("animate"),
                                        (n.style.height = "".concat(e.from, "px")),
                                        raf2x(function () {
                                            n.style.height = "".concat(e.to, "px");
                                        });
                                },
                            },
                        ],
                        [
                            {
                                key: "destroy",
                                value: function (e) {
                                    c.get(e).destroy();
                                },
                            },
                            {
                                key: "init",
                                value: function (e) {
                                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                    return !1 === c.has(e) && c.set(e, new t(e, n)), c.get(e).build(), c.get(e);
                                },
                            },
                        ]
                    )
                );
            })();
        document.addEventListener("DOMContentLoaded", function () {
            document.querySelectorAll(".js-uikit-accord").forEach(function (e) {
                u.init(e);
            });
        }),
            (window.UikitAccord = u);
    },
    815: function (e, t) {
        function n(e) {
            return (n =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      })(e);
        }
        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function o(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, a(i.key), i);
            }
        }
        function r(e, t, n) {
            return t && o(e.prototype, t), n && o(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
        }
        function a(e) {
            var t = (function (e, t) {
                if ("object" != n(e) || !e) return e;
                var i = e[Symbol.toPrimitive];
                if (void 0 !== i) {
                    var o = i.call(e, t || "default");
                    if ("object" != n(o)) return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == n(t) ? t : t + "";
        }
        var s = (function () {
                return r(
                    function e(t) {
                        i(this, e), (this.eventHandlers = {}), (this.nodeElement = t), (this.id = t.dataset.popupId), this.init();
                    },
                    [
                        {
                            key: "on",
                            value: function (e, t) {
                                e in this.eventHandlers || (this.eventHandlers[e] = []);
                                for (var n = 0; n < this.eventHandlers[e]; n++) if (this.eventHandlers[e][n] === t) return;
                                this.eventHandlers[e].push(t);
                            },
                        },
                        {
                            key: "trigger",
                            value: function (e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                e in this.eventHandlers &&
                                    this.eventHandlers[e].forEach(function (e) {
                                        return e(t);
                                    });
                            },
                        },
                        {
                            key: "getId",
                            value: function () {
                                return this.id;
                            },
                        },
                        {
                            key: "onCloseClick",
                            value: function (e) {
                                e.preventDefault(), this.close();
                            },
                        },
                        {
                            key: "init",
                            value: function () {
                                var e = this;
                                this.nodeElement.querySelectorAll(".js-popup-close").forEach(function (t) {
                                    return t.addEventListener("click", e.onCloseClick.bind(e));
                                });
                            },
                        },
                        {
                            key: "close",
                            value: function () {
                                var e = this;
                                this.nodeElement.classList.remove("opened"),
                                    setTimeout(function () {
                                        e.trigger("closed");
                                    }, 0);
                            },
                        },
                        {
                            key: "open",
                            value: function () {
                                this.nodeElement.classList.add("opened");
                            },
                        },
                    ]
                );
            })(),
            l = new ((function () {
                return r(
                    function e() {
                        var t = this;
                        i(this, e),
                            (this.popups = {}),
                            (this.callbacks = {
                                video: [
                                    function (e, t) {
                                        var n,
                                            i = e.querySelector(".js-popup-close"),
                                            o = e.querySelector(".js-video-block"),
                                            r = Object.entries(null != t ? t : {});
                                        (isMobileLayout() && (i.style.display = "none"), r.length < 1) ||
                                            ((e.querySelector(".js-popup-title").textContent = null !== (n = null == t ? void 0 : t.videoTitle) && void 0 !== n ? n : ""),
                                            r.forEach(function (e) {
                                                o.setAttribute("data-".concat(e[0]), "".concat(e[1]));
                                            }));
                                    },
                                ],
                            }),
                            (this.closeCallbacks = {
                                video: [
                                    function (e) {
                                        var t = e.querySelector(".js-popup-close"),
                                            n = e.querySelector("video"),
                                            i = e.querySelector(".js-video-block__control");
                                        (t.style.display = "block"), n && (n.pause(), i.classList.remove("play"));
                                    },
                                ],
                            }),
                            (this.visiblePopup = null),
                            document.querySelectorAll(".js-popup-open[data-popup]").forEach(function (e) {
                                e.addEventListener("click", function (n) {
                                    n.preventDefault();
                                    var i = document.querySelectorAll(".js-popup.opened");
                                    i &&
                                        i.forEach(function (e) {
                                            t.close(e);
                                        }),
                                        t.open(n.target.dataset.popup, e);
                                });
                            });
                    },
                    [
                        {
                            key: "add",
                            value: function (e) {
                                !1 === e.parentElement.classList.contains("page__inner") && document.querySelector(".page__inner").appendChild(e);
                                var t = new s(e);
                                this.popups[t.getId()] = t;
                            },
                        },
                        {
                            key: "open",
                            value: function (e, t) {
                                var n = this;
                                if (!(e in this.popups)) throw new Error("popup not found");
                                this.createOverlay();
                                var i = this.popups[e];
                                i.open(),
                                    (this.visiblePopup = i),
                                    i.on("closed", function () {
                                        n.hideOverlay(),
                                            e in n.closeCallbacks &&
                                                n.closeCallbacks[e].forEach(function (e) {
                                                    e(i.nodeElement);
                                                });
                                    }),
                                    e in this.callbacks &&
                                        this.callbacks[e].forEach(function (e) {
                                            e(i.nodeElement, t ? t.dataset : null);
                                        });
                            },
                        },
                        {
                            key: "close",
                            value: function (e) {
                                e.classList.remove("opened");
                            },
                        },
                        {
                            key: "createOverlay",
                            value: function () {
                                var e = this;
                                if (this.overlay) return this.overlay.classList.remove("not-visible"), void (document.body.style.overflow = "hidden");
                                (this.overlay = document.createElement("div")),
                                    this.overlay.classList.add("popup-overlay"),
                                    document.body.appendChild(this.overlay),
                                    (document.body.style.overflow = "hidden"),
                                    this.overlay.addEventListener("click", function () {
                                        e.visiblePopup && e.visiblePopup.close();
                                    });
                            },
                        },
                        {
                            key: "hideOverlay",
                            value: function () {
                                if (this.overlay) {
                                    var e = this.overlay;
                                    this.overlay.classList.add("not-visible"),
                                        (document.body.style.overflow = "visible"),
                                        this.overlay.addEventListener("transitionend", function () {
                                            e.remove();
                                        }),
                                        (this.overlay = null);
                                }
                            },
                        },
                        {
                            key: "init",
                            value: function () {
                                document.querySelectorAll(".js-popup").forEach(function (e) {
                                    return l.add(e);
                                }),
                                    document.querySelectorAll('a[href="#popup"]').forEach(function (e) {
                                        e.addEventListener("click", function (e) {
                                            e.preventDefault(), l.open("form");
                                        });
                                    }),
                                    document.addEventListener("click", function (e) {
                                        e.target.closest('a[cta_dest_link^="https://share.hsforms.com/"]') && (e.preventDefault(), l.open("form"));
                                    });
                            },
                        },
                        {
                            key: "onPopupOpened",
                            value: function (e, t) {
                                e in this.callbacks || (this.callbacks[e] = []), this.callbacks[e].push(t);
                            },
                        },
                        {
                            key: "onPopupClosed",
                            value: function (e, t) {
                                e in this.callbacks || (this.closeCallbacks[e] = []), this.closeCallbacks[e].push(t);
                            },
                        },
                    ]
                );
            })())();
        l.init(), (window.PopupManager = l);
    },
    816: function (e, t) {
        function n(e, t) {
            var n = this,
                i = e.attr("data-scroll");
            (this.$elem = e),
                (this.prefix = "prefix" in t ? t.prefix : ""),
                (this.placeholder = "placeholder" in t ? t.placeholder : e.data("placeholder")),
                (this.scroll = "scroll" in t ? t.scroll : e.data("scroll")),
                (this.className = "class" in t ? t.className : e.data("class")),
                (this.selectionMode = "selection" in t ? t.selection : e.data("selection")),
                (this.$pageContent = document.querySelector(".page__content ")),
                (this.$container = null),
                (this.$header = null),
                (this.$headerLabel = null),
                (this.$dropdown = null),
                (this.$dropdownInner = null),
                (this.$field = null),
                (this.options = {}),
                (this.activeValue = null),
                (this.activeLabel = null);
            var o = !1;
            if (
                ((this.buildHtml = function () {
                    var e;
                    this.$container && this.$container.remove(),
                        (this.$container = $("<div>").addClass("dropdown")),
                        (this.$header = $("<div>")
                            .addClass("dropdown__header")
                            .text(n.prefix ? n.prefix + " " : "")),
                        (this.$dropdown = $("<div>").addClass("dropdown__box")),
                        (this.$dropdownInner = $("<div>").addClass("dropdown__content").appendTo(this.$dropdown)),
                        (this.$headerLabel = $('<span class="dropdown__label">').appendTo(this.$header)),
                        (this.$headerArrow = $('<span class="dropdown__arrow">').appendTo(this.$header)),
                        (this.$dropdownScroll = $('<div class="dropdown__scroll"></div>').appendTo(this.$dropdownInner)),
                        (this.$dropdownHeaderList = $('<div class="dropdown__list-header"></div>').appendTo(this.$dropdownScroll)),
                        (this.$dropdownList = $('<div class="dropdown__list"></div>').appendTo(this.$dropdownScroll)),
                        0 !== this.$elem.find("optgroup").length
                            ? this.$elem.find("optgroup").each(function () {
                                  var e = $(this).attr("label");
                                  n.$dropdownList.append('<div class="group-label">'.concat(e, "</div>")),
                                      $(this)
                                          .find("option")
                                          .each(function () {
                                              (n.options[$(this).val()] = $(this).text()),
                                                  n.$dropdownList.append(
                                                      '<a class="dropdown__item" data-value="'.concat($(this).val(), '">\n               <span class="dropdown__item-text">').concat($(this).text(), "</span>\n             </a>")
                                                  );
                                          });
                              })
                            : this.$elem.find("option").each(function () {
                                  (n.options[$(this).val()] = $(this).text()),
                                      n.$dropdownList.append('<a class="dropdown__item" data-value="'.concat($(this).val(), '">\n             <span class="dropdown__item-text">').concat($(this).text(), "</span>\n           </a>"));
                              }),
                        this.$container.append(this.$header),
                        this.$container.append(this.$dropdown),
                        this.$elem.addClass("visually-hidden"),
                        this.$container.insertAfter(this.$elem),
                        (this.$field = $(this.$container).closest(".hs-form-field")),
                        (this.$fieldLabel = null === (e = $(this.$field).find("label").find("span")[0]) || void 0 === e ? void 0 : e.textContent),
                        this.$dropdownHeaderList.text(this.$fieldLabel);
                }),
                (this.setActiveValue = function (e) {
                    this.$header.removeClass("dropdown__header--placeholder"),
                        (this.activeLabel = this.activeValue = this.options[e]),
                        this.$headerLabel.text(this.activeLabel),
                        (this.$elem[0].value = e),
                        this.$elem[0].dispatchEvent(createEvent("change"));
                }),
                (this.setActiveItem = function (e) {
                    var t = this.$dropdown.find('a[data-value="'.concat(e, '"]'));
                    switch (this.selectionMode) {
                        case "highlight":
                            this.$dropdown.find("a.highlight").removeClass("highlight"), $(t).addClass("highlight");
                            break;
                        case "hide":
                        default:
                            this.$dropdown.find("a.hide").removeClass("hide"), $(t).addClass("hide");
                    }
                }),
                (this.showDropdown = function () {
                    this.$container.addClass("opened"), (o = !0), i && this.$dropdown.addClass(this.scroll), n.pageScrollControl("hide"), isMobileLayout() && (this.$pageContent.style.zIndex = "auto");
                }),
                (this.fieldAddFocused = function () {
                    this.$field.addClass("focused");
                }),
                (this.fieldRemoveFocused = function () {
                    this.$field.removeClass("focused");
                }),
                (this.hideDropdown = function () {
                    this.$container.removeClass("opened"), (o = !1), n.pageScrollControl("show"), isMobileLayout() && (this.$pageContent.style.zIndex = "10");
                }),
                (this.pageScrollControl = function (e) {
                    if (isTabletLayout())
                        switch (e) {
                            case "show":
                                showScrollbar();
                                break;
                            case "hide":
                                hideScrollbar();
                        }
                }),
                (this.bindEvents = function () {
                    $(document).on("click", function (e) {
                        var t = $(e.target);
                        if (!t.closest(".dropdown__list").length) {
                            var i = t.closest(".dropdown")[0];
                            o ? n.hideDropdown() : n.$container[0] === i && n.showDropdown();
                        }
                    }),
                        this.$dropdown.find("a").on("click", function () {
                            var e = $(this).data("value");
                            if (n.options[e]) return n.setActiveValue(e), n.setActiveItem(e), n.hideDropdown(), n.fieldAddFocused(), !1;
                        }),
                        this.$elem.on("change", function (e) {
                            var t = e.originalEvent;
                            if (t.target !== t.currentTarget || t.isTrusted) {
                                var i = $(this).val();
                                n.options[i] && (n.setActiveValue(i), n.setActiveItem(i));
                            }
                        });
                }),
                this.buildHtml(),
                this.bindEvents(),
                this.placeholder && !e.find("option:selected").attr("selected"))
            );
            else {
                var r = this.$elem.val() ? this.$elem.val() : this.$elem.find("option").first().val();
                this.setActiveValue(r), this.setActiveItem(r);
            }
            return (
                e.attr("data-class") && this.$container.addClass(this.className),
                (this.update = function () {
                    if ((n.buildHtml(), n.bindEvents(), n.placeholder));
                    else {
                        var e = n.$elem.val() ? n.$elem.val() : n.$elem.find("option").first().val();
                        n.setActiveValue(e), n.setActiveItem(e);
                    }
                }),
                this
            );
        }
        var i = [];
        ($.fn.dropdown = function (e) {
            if ("string" != typeof e)
                $(this).each(function () {
                    var t = Math.floor(65536 * (1 + Math.random())).toString(16) + Math.floor(65536 * (1 + Math.random())).toString(16) + Math.floor(65536 * (1 + Math.random())).toString(16);
                    (i[t] = new n($(this), e)), $(this).data("dropdown-guid", t);
                });
            else {
                var t = $(this).data("dropdown-guid");
                t in i && i[t][e]();
            }
        }),
            $(".js-dropdown-box").each(function () {
                $(this).dropdown({ prefix: $(this).data("prefix") });
            });
    },
    817: function (e, t) {
        function n(e) {
            return (n =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      })(e);
        }
        function i(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, o(i.key), i);
            }
        }
        function o(e) {
            var t = (function (e, t) {
                if ("object" != n(e) || !e) return e;
                var i = e[Symbol.toPrimitive];
                if (void 0 !== i) {
                    var o = i.call(e, t || "default");
                    if ("object" != n(o)) return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == n(t) ? t : t + "";
        }
        var r = !1,
            a = (function () {
                function e(t) {
                    !(function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                        (this.accord = t),
                        (this.parent = this.accord.parentElement),
                        this.addEvents();
                }
                return (
                    (t = e),
                    (o = [
                        {
                            key: "collapse",
                            value: function (t) {
                                var n = { from: t.scrollHeight, to: 0 };
                                e.animate(t, n);
                            },
                        },
                        {
                            key: "expand",
                            value: function (t) {
                                var n = { from: 0, to: t.scrollHeight };
                                e.animate(t, n);
                            },
                        },
                        {
                            key: "animate",
                            value: function (e, t) {
                                var n = function (t) {
                                    if (t.target !== t.currentTarget) return !1;
                                    e.removeEventListener(endEvents.transition, n), e.classList.remove("animate"), (e.style.height = ""), (r = !1);
                                };
                                e.addEventListener(endEvents.transition, n),
                                    e.classList.add("animate"),
                                    (e.style.height = "".concat(t.from, "px")),
                                    raf2x(function () {
                                        e.style.height = "".concat(t.to, "px");
                                    });
                            },
                        },
                        {
                            key: "setActive",
                            value: function (e) {
                                e.classList.add("active");
                            },
                        },
                        {
                            key: "removeActive",
                            value: function (e) {
                                e.classList.remove("active");
                            },
                        },
                        {
                            key: "init",
                            value: function (t) {
                                new e(t);
                            },
                        },
                    ]),
                    (n = [
                        {
                            key: "addEvents",
                            value: function () {
                                var t = this;
                                this.parent.querySelector("span.header-dropdown__item-group-name")
                                    ? this.parent.querySelector("span").addEventListener("click", function () {
                                          if (r) return !1;
                                          if (((r = !0), t.accord.classList.contains("active"))) e.collapse(t.accord.nextElementSibling), e.removeActive(t.accord);
                                          else {
                                              var n = t.accord.closest(".js-accords");
                                              if (n) {
                                                  var i = n.querySelector(".js-accord.active, .header-menu__link.active"),
                                                      o = n.querySelector(".header-dropdown__item-group-name.active");
                                                  i && t.accord.classList.contains("header-menu__link") && (e.collapse(i.nextElementSibling), e.removeActive(i), o && (e.collapse(o.nextElementSibling), e.removeActive(o))),
                                                      o && (e.collapse(o.nextElementSibling), e.removeActive(o));
                                              }
                                              e.setActive(t.accord), e.expand(t.accord.nextElementSibling);
                                          }
                                      })
                                    : this.parent.addEventListener("click", function () {
                                          if (r) return !1;
                                          if (((r = !0), t.accord.classList.contains("active"))) e.collapse(t.accord.nextElementSibling), e.removeActive(t.accord);
                                          else {
                                              var n = t.accord.closest(".js-accords");
                                              if (n) {
                                                  var i = n.querySelector(".js-accord.active, .header-menu__link.active");
                                                  i && (e.collapse(i.nextElementSibling), e.removeActive(i));
                                              }
                                              e.setActive(t.accord), e.expand(t.accord.nextElementSibling);
                                          }
                                      });
                            },
                        },
                    ]) && i(t.prototype, n),
                    o && i(t, o),
                    Object.defineProperty(t, "prototype", { writable: !1 }),
                    t
                );
                var t, n, o;
            })();
        document.addEventListener("DOMContentLoaded", function () {
            document.querySelectorAll(".js-accord").forEach(function (e) {
                a.init(e);
            });
        }),
            (window.Accord = a);
    },
    818: function (e, t) {
        function n(e) {
            return (n =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      })(e);
        }
        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function o(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, r(i.key), i);
            }
        }
        function r(e) {
            var t = (function (e, t) {
                if ("object" != n(e) || !e) return e;
                var i = e[Symbol.toPrimitive];
                if (void 0 !== i) {
                    var o = i.call(e, t || "default");
                    if ("object" != n(o)) return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == n(t) ? t : t + "";
        }
        function a(e, t, i) {
            return (
                (t = s(t)),
                (function (e, t) {
                    if (t && ("object" == n(t) || "function" == typeof t)) return t;
                    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                    return (function (e) {
                        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e;
                    })(e);
                })(
                    e,
                    (function () {
                        try {
                            var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
                        } catch (e) {}
                        return (function () {
                            return !!e;
                        })();
                    })()
                        ? Reflect.construct(t, i || [], s(e).constructor)
                        : t.apply(e, i)
                )
            );
        }
        function s(e) {
            return (s = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (e) {
                      return e.__proto__ || Object.getPrototypeOf(e);
                  })(e);
        }
        function l(e, t) {
            return (l = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (e, t) {
                      return (e.__proto__ = t), e;
                  })(e, t);
        }
        var c = new Map(),
            u = (function (e) {
                function t(e) {
                    var n;
                    return (
                        i(this, t),
                        ((n = a(this, t, [e, ".header2023", "desktop"])).$menuItems = n.queryElements(".header-menu__item")),
                        (n.onMouseOver = n.onMouseOver.bind(n)),
                        (n.onMouseOut = n.onMouseOut.bind(n)),
                        (n.onMouseOverDropdown = n.onMouseOverDropdown.bind(n)),
                        (n.onMouseOutDropdown = n.onMouseOutDropdown.bind(n)),
                        (n.onMouseOutTimeout = null),
                        (n.onMouseOverTimeout = null),
                        (n.onDropdownMouseOutTimeout = null),
                        (n.$activeElement = null),
                        (n.$hoveredDropdownItem = null),
                        (n.$hoveredItem = null),
                        n.init(),
                        n
                    );
                }
                return (
                    (function (e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), Object.defineProperty(e, "prototype", { writable: !1 }), t && l(e, t);
                    })(t, Widget),
                    (n = t),
                    (s = [
                        {
                            key: "init",
                            value: function (e) {
                                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                return !1 === c.has(e) && c.set(e, new t(e, n)), c.get(e).init(), c.get(e);
                            },
                        },
                    ]),
                    (r = [
                        {
                            key: "build",
                            value: function () {
                                var e = this;
                                this.$menuItems.forEach(function (t) {
                                    var n = t.querySelector(".header-menu__link");
                                    if (n) {
                                        n.addEventListener("mouseover", function () {
                                            return e.onMouseOver(t);
                                        }),
                                            n.addEventListener("mouseout", function () {
                                                return e.onMouseOut(t);
                                            });
                                        var i = t.querySelector(".header-dropdown");
                                        i &&
                                            (i.addEventListener("mouseenter", function () {
                                                return e.onMouseOverDropdown(t);
                                            }),
                                            i.addEventListener("mouseleave", function () {
                                                return e.onMouseOutDropdown(t);
                                            }));
                                    }
                                });
                            },
                        },
                        {
                            key: "onMouseOverDropdown",
                            value: function (e) {
                                this.$hoveredDropdownItem = e;
                            },
                        },
                        {
                            key: "onMouseOutDropdown",
                            value: function () {
                                var e = this;
                                this.onDropdownMouseOutTimeout && clearTimeout(this.onDropdownMouseOutTimeout),
                                    (this.$hoveredDropdownItem = null),
                                    (this.onDropdownMouseOutTimeout = setTimeout(function () {
                                        e.$hoveredDropdownItem || e.$hoveredItem || e.setMenuActive(!1);
                                    }, 100));
                            },
                        },
                        {
                            key: "onMouseOver",
                            value: function (e) {
                                var t = this;
                                (this.$hoveredItem = e),
                                    this.onMouseOutTimeout && clearTimeout(this.onMouseOutTimeout),
                                    this.onMouseOverTimeout && clearTimeout(this.onMouseOverTimeout),
                                    (this.onMouseOverTimeout = setTimeout(function () {
                                        t.$hoveredDropdownItem || t.setMenuActive(e);
                                    }, 100));
                            },
                        },
                        {
                            key: "onMouseOut",
                            value: function () {
                                var e = this;
                                (this.$hoveredItem = null),
                                    this.onMouseOutTimeout && clearTimeout(this.onMouseOutTimeout),
                                    (this.onMouseOutTimeout = setTimeout(function () {
                                        e.$hoveredDropdownItem || e.setMenuActive(null);
                                    }, 100));
                            },
                        },
                        {
                            key: "setMenuActive",
                            value: function (e) {
                                (this.$activeElement = e),
                                    this.$menuItems.forEach(function (e) {
                                        e.classList.remove("_active");
                                    }),
                                    e && e.classList.add("_active");
                            },
                        },
                    ]) && o(n.prototype, r),
                    s && o(n, s),
                    Object.defineProperty(n, "prototype", { writable: !1 }),
                    n
                );
                var n, r, s;
            })();
        document.addEventListener("DOMContentLoaded", function () {
            document.querySelectorAll(".js-header-menu-desktop").forEach(function (e) {
                u.init(e);
            });
        }),
            (window.HeaderMenuDesktop = u);
    },
    819: function (e, t) {
        function n(e) {
            return (n =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      })(e);
        }
        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function o(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, r(i.key), i);
            }
        }
        function r(e) {
            var t = (function (e, t) {
                if ("object" != n(e) || !e) return e;
                var i = e[Symbol.toPrimitive];
                if (void 0 !== i) {
                    var o = i.call(e, t || "default");
                    if ("object" != n(o)) return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == n(t) ? t : t + "";
        }
        function a(e, t, i) {
            return (
                (t = s(t)),
                (function (e, t) {
                    if (t && ("object" == n(t) || "function" == typeof t)) return t;
                    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                    return (function (e) {
                        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e;
                    })(e);
                })(
                    e,
                    (function () {
                        try {
                            var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
                        } catch (e) {}
                        return (function () {
                            return !!e;
                        })();
                    })()
                        ? Reflect.construct(t, i || [], s(e).constructor)
                        : t.apply(e, i)
                )
            );
        }
        function s(e) {
            return (s = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (e) {
                      return e.__proto__ || Object.getPrototypeOf(e);
                  })(e);
        }
        function l(e, t) {
            return (l = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (e, t) {
                      return (e.__proto__ = t), e;
                  })(e, t);
        }
        var c = new Map(),
            u = (function (e) {
                function t(e) {
                    var n;
                    return (
                        i(this, t), ((n = a(this, t, [e, ".header2023", "tablet-mobile"])).$burger = n.queryElement(".burger")), (n.onBurgerClick = n.onBurgerClick.bind(n)), (n.onButtonClick = n.onButtonClick.bind(n)), (n.opened = !1), n
                    );
                }
                return (
                    (function (e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), Object.defineProperty(e, "prototype", { writable: !1 }), t && l(e, t);
                    })(t, Widget),
                    (n = t),
                    (s = [
                        {
                            key: "init",
                            value: function (e) {
                                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                return !1 === c.has(e) && c.set(e, new t(e, n)), c.get(e).build(), c.get(e);
                            },
                        },
                    ]),
                    (r = [
                        {
                            key: "build",
                            value: function () {
                                this.$burger.addEventListener("click", this.onBurgerClick),
                                    this.$node.querySelectorAll(".header-menu__link").forEach(function (e) {
                                        Accord.init(e);
                                    }),
                                    this.$node.querySelectorAll(".header-dropdown__item-group-name").forEach(function (e) {
                                        Accord.init(e);
                                    });
                            },
                        },
                        {
                            key: "destroy",
                            value: function () {
                                this.$burger.removeEventListener("click", this.onBurgerClick), this.close();
                            },
                        },
                        {
                            key: "onButtonClick",
                            value: function () {
                                this.close();
                            },
                        },
                        {
                            key: "onBurgerClick",
                            value: function (e) {
                                this.opened ? this.close() : this.open();
                            },
                        },
                        {
                            key: "close",
                            value: function () {
                                this.$node.classList.remove("_opened"), this.$burger.classList.remove("_opened"), showScrollbar(), (this.opened = !1);
                            },
                        },
                        {
                            key: "open",
                            value: function () {
                                this.$node.classList.add("_opened"), this.$burger.classList.add("_opened"), hideScrollbar(), (this.opened = !0);
                            },
                        },
                    ]) && o(n.prototype, r),
                    s && o(n, s),
                    Object.defineProperty(n, "prototype", { writable: !1 }),
                    n
                );
                var n, r, s;
            })();
        document.addEventListener("DOMContentLoaded", function () {
            document.querySelectorAll(".js-header-mobile").forEach(function (e) {
                u.init(e);
            });
        }),
            (window.HeaderMobile = u);
    },
    820: function (e, t) {
        function n(e) {
            return (n =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      })(e);
        }
        function i(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, o(i.key), i);
            }
        }
        function o(e) {
            var t = (function (e, t) {
                if ("object" != n(e) || !e) return e;
                var i = e[Symbol.toPrimitive];
                if (void 0 !== i) {
                    var o = i.call(e, t || "default");
                    if ("object" != n(o)) return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == n(t) ? t : t + "";
        }
        var r = (function () {
            return (
                (e = function e(t) {
                    !(function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                        (this.nodeElement = t),
                        (this.isMenuFixed = !1),
                        (this.viewportHeight = null),
                        this.updateCache(),
                        this.init();
                }),
                (t = [
                    {
                        key: "setAsFixed",
                        value: function () {
                            this.isMenuFixed || (this.nodeElement.classList.add("_blurred"), (this.isMenuFixed = !0));
                        },
                    },
                    {
                        key: "setAsNotFixed",
                        value: function () {
                            this.isMenuFixed && (this.nodeElement.classList.remove("_blurred"), (this.isMenuFixed = !1));
                        },
                    },
                    {
                        key: "isMobileMenuOpened",
                        value: function () {
                            return document.querySelector(".header-menu").classList.contains("opened");
                        },
                    },
                    {
                        key: "onScroll",
                        value: function () {
                            if (!this.isMobileMenuOpened()) {
                                var e = getScrollPos();
                                e > 50 ? this.setAsFixed() : this.setAsNotFixed(), e < 300 && this.nodeElement.classList.remove("fixed-start");
                            }
                        },
                    },
                    {
                        key: "updateCache",
                        value: function () {
                            this.viewportHeight = window.innerHeight;
                        },
                    },
                    {
                        key: "init",
                        value: function () {
                            onResize(this.updateCache.bind(this)), onScroll(this.onScroll.bind(this));
                        },
                    },
                ]) && i(e.prototype, t),
                n && i(e, n),
                Object.defineProperty(e, "prototype", { writable: !1 }),
                e
            );
            var e, t, n;
        })();
        document.addEventListener("DOMContentLoaded", function () {
            var e = document.querySelector(".js-header");
            e && new r(e);
        });
    },
    821: function (e, t) {
        function n(e) {
            return (n =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      })(e);
        }
        function i(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, o(i.key), i);
            }
        }
        function o(e) {
            var t = (function (e, t) {
                if ("object" != n(e) || !e) return e;
                var i = e[Symbol.toPrimitive];
                if (void 0 !== i) {
                    var o = i.call(e, t || "default");
                    if ("object" != n(o)) return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == n(t) ? t : t + "";
        }
        var r = (function () {
                function e() {
                    !(function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                        (this.observer = null),
                        (this.config = { root: null, threshold: 0 });
                }
                return (
                    (t = e),
                    (o = [
                        {
                            key: "onObserve",
                            value: function (e) {
                                e.forEach(function (e) {
                                    var t = e.intersectionRatio,
                                        n = e.target;
                                    t > 0 ? n.play() : n.pause();
                                });
                            },
                        },
                        {
                            key: "playAutoplay",
                            value: function (e, t) {
                                var n = e.querySelectorAll("video[autoplay]");
                                switch (t) {
                                    case "play":
                                        n.forEach(function (e) {
                                            return e.play();
                                        });
                                        break;
                                    case "pause":
                                        n.forEach(function (e) {
                                            return e.pause();
                                        });
                                }
                            },
                        },
                    ]),
                    (n = [
                        {
                            key: "createObserver",
                            value: function () {
                                return this.observer || new IntersectionObserver(e.onObserve, this.config);
                            },
                        },
                        {
                            key: "init",
                            value: function () {
                                var e = this,
                                    t = document.querySelectorAll("video[autoplay]");
                                if (!t.length) return !1;
                                (this.observer = this.createObserver()),
                                    raf2x(function () {
                                        t.forEach(function (t) {
                                            e.observer.observe(t);
                                        });
                                    });
                            },
                        },
                    ]) && i(t.prototype, n),
                    o && i(t, o),
                    Object.defineProperty(t, "prototype", { writable: !1 }),
                    t
                );
                var t, n, o;
            })(),
            a = new r();
        (window.initAutoplayVideo = a.init.bind(a)), (window.playAutoplay = r.playAutoplay);
    },
    822: function (e, t) {
        function n(e, t) {
            return (
                (function (e) {
                    if (Array.isArray(e)) return e;
                })(e) ||
                (function (e, t) {
                    var n = null == e ? null : ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
                    if (null != n) {
                        var i,
                            o,
                            r,
                            a,
                            s = [],
                            l = !0,
                            c = !1;
                        try {
                            if (((r = (n = n.call(e)).next), 0 === t)) {
                                if (Object(n) !== n) return;
                                l = !1;
                            } else for (; !(l = (i = r.call(n)).done) && (s.push(i.value), s.length !== t); l = !0);
                        } catch (e) {
                            (c = !0), (o = e);
                        } finally {
                            try {
                                if (!l && null != n.return && ((a = n.return()), Object(a) !== a)) return;
                            } finally {
                                if (c) throw o;
                            }
                        }
                        return s;
                    }
                })(e, t) ||
                (function (e, t) {
                    if (e) {
                        if ("string" == typeof e) return i(e, t);
                        var n = {}.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? i(e, t) : void 0;
                    }
                })(e, t) ||
                (function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                })()
            );
        }
        function i(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
            return i;
        }
        function o() {
            var e = document.querySelector("#tpl-article-video"),
                t = document.createElement("div");
            return (t.innerHTML = e.innerHTML), [t.querySelector("[data-container]"), t.querySelector("[data-inner]"), t.querySelector("[data-caption]")];
        }
        function r(e) {
            for (var t = 0, n = 0; n < e.length; n++) {
                if (e[n].trim()) {
                    e.splice(0, t);
                    break;
                }
                t++;
            }
            return e;
        }
        window.initArticleParser = function () {
            var e = document.querySelector(".js-article-parser");
            e &&
                (function (e) {
                    (function (e) {
                        var t = n(((r = document.querySelector("#tpl-article-image")), (a = document.createElement("div")), (a.innerHTML = r.innerHTML), [a.querySelector("[data-container]"), a.querySelector("[data-caption]")]), 2),
                            i = t[0],
                            o = (t[1], e.querySelectorAll("p > img:only-of-type"));
                        var r, a;
                        if (!o.length) return null;
                        o.forEach(function (e) {
                            var t = i.cloneNode(!0);
                            t.style.float = e.style.float;
                            var n = e.parentNode,
                                o = t.querySelector("img");
                            (o.src = e.src), (o.alt = e.alt);
                            var r = e.parentNode.innerHTML.replace(/<img.+?>/gi, "");
                            e.width && (o.style.width = e.width + "px"), e.height && (o.style.height = e.height + "px");
                            var a = document.createElement("em");
                            (a.innerHTML = r), t.appendChild(a), n.parentNode.replaceChild(t, n);
                        });
                    })(e),
                        (function (e) {
                            var t = n(
                                    ((a = document.querySelector("#tpl-article-slider")),
                                    (s = document.createElement("div")),
                                    (s.innerHTML = a.innerHTML),
                                    [s.querySelector("[data-container]"), s.querySelector("[data-slide]"), s.querySelector("[data-caption]")]),
                                    3
                                ),
                                i = t[0],
                                o = t[1],
                                r = t[2];
                            var a, s;
                            e.querySelectorAll("p > img:not(:only-of-type):first-child").forEach(function (e) {
                                var t = i.cloneNode(!0),
                                    n = document.createDocumentFragment(),
                                    a = e.parentNode;
                                a.querySelectorAll("img").forEach(function (e) {
                                    var t = o.cloneNode(!0),
                                        i = t.querySelector("img");
                                    (i.src = e.src), (i.alt = e.alt);
                                    var a = e.nextElementSibling;
                                    if (a && a.matches("em")) {
                                        var s = r.cloneNode(!0);
                                        s.insertAdjacentHTML("afterbegin", a.innerHTML), i.parentNode.insertAdjacentElement("afterend", s);
                                    }
                                    n.appendChild(t);
                                }),
                                    t.querySelector("[data-slides]").appendChild(n),
                                    a.parentNode.replaceChild(t, a);
                            });
                        })(e),
                        (function (e) {
                            var t =
                                    '<svg class="copy-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <mask id="mask0_5260_127185" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">\n    <path d="M0 0H24V24H0V0Z" fill="white"/>\n    </mask>\n    <g mask="url(#mask0_5260_127185)">\n    <path d="M15 1.00002H4C2.9 1.00002 2 1.90002 2 3.00002V16C2 16.55 2.45 17 3 17C3.55 17 4 16.55 4 16V4.00002C4 3.45002 4.45 3.00002 5 3.00002H15C15.55 3.00002 16 2.55002 16 2.00002C16 1.45002 15.55 1.00002 15 1.00002ZM19 5.00002H8C6.9 5.00002 6 5.90002 6 7.00002V21C6 22.1 6.9 23 8 23H19C20.1 23 21 22.1 21 21V7.00002C21 5.90002 20.1 5.00002 19 5.00002ZM18 21H9C8.45 21 8 20.55 8 20V8.00002C8 7.45002 8.45 7.00002 9 7.00002H18C18.55 7.00002 19 7.45002 19 8.00002V20C19 20.55 18.55 21 18 21Z" fill="#191428"/>\n    </g>\n    </svg>',
                                n = e.innerHTML,
                                i = [],
                                o = [],
                                a = {};
                            (n = n.replace(/(?:<p>)*\[code\s*([\s\S]*?)\]([\s\S]+?)\[\/code\](?:<\/p>)*/g, function (e, n, s, l, c) {
                                var u, d, f, h;
                                (d = (u = (u = s).replace(/<br\/*>/g, "\n", u)).split("\n")),
                                    (f = 0),
                                    (h = (d = r(r(d).reverse()).reverse()).slice(0, 25).join("\n")),
                                    d.forEach(function (e) {
                                        f++;
                                    });
                                var p = "";
                                ((a = { dividersCount: f, lessContent: h, fullContent: d.join("\n") }).lessContent = a.lessContent
                                    .replace(/<br>/g, "\n")
                                    .split("\n")
                                    .map(function (e) {
                                        return e.replace(/^\s{1,6}/g, "");
                                    })
                                    .join("\n")),
                                    (a.fullContent = a.fullContent
                                        .replace(/<br>/g, "\n")
                                        .split("\n")
                                        .map(function (e) {
                                            return e.replace(/^\s{1,6}/g, "");
                                        })
                                        .join("\n"));
                                var v = n ? 'class="language-'.concat(n, '"') : "";
                                return (
                                    a.dividersCount > 25
                                        ? ((p = '\n        <div class="article-code">\n        <div class="copy-block"><div class="copy-success fade-out">Code copied</div>'
                                              .concat(t, '</div>\n          <div class="article-code__inner"><pre><code ')
                                              .concat(v, ">")
                                              .concat(
                                                  a.lessContent,
                                                  '</code></pre></div>\n          <div class="article-code__btn-wrapper">\n            <button class="article-code__btn js-code-more">Show more</button>\n          </div>\n        </div>\n      '
                                              )),
                                          i.push(a))
                                        : (p = '<div class="article-code">\n        <div class="copy-block">\n          <div class="copy-success fade-out">Code copied</div>'
                                              .concat(t, "</div>\n          <pre><code ")
                                              .concat(v, ">")
                                              .concat(a.fullContent, "</code></pre>\n        </div>")),
                                    o.push(a),
                                    p
                                );
                            })),
                                (e.innerHTML = n),
                                (function (e, t, n) {
                                    e.querySelectorAll(".js-code-more").forEach(function (e, n) {
                                        e.addEventListener("click", function (e) {
                                            return (function (e, t, n) {
                                                e.preventDefault();
                                                var i = e.target,
                                                    o = i.closest(".article-code").querySelector("code");
                                                i.classList.contains("active")
                                                    ? (i.classList.remove("active"), (o.innerHTML = t[n].lessContent), (i.innerHTML = "Show more"))
                                                    : (i.classList.add("active"), (o.innerHTML = t[n].fullContent), (i.innerHTML = "Show less"));
                                                hljs.highlightElement(o);
                                            })(e, t, n);
                                        });
                                    }),
                                        e.querySelectorAll(".copy-block").forEach(function (e, t) {
                                            var i = e.querySelector(".copy-icon"),
                                                o = e.querySelector(".copy-success");
                                            i.addEventListener("click", function (e) {
                                                var i = document.createElement("code");
                                                i.innerHTML = n[t].fullContent;
                                                var r = i.innerText.replace(/\u00a0/g, " ");
                                                console.log(r),
                                                    navigator.clipboard.writeText(r).then(function () {
                                                        return i.remove();
                                                    }),
                                                    o.classList.add("fade-in"),
                                                    o.classList.remove("fade-out"),
                                                    setTimeout(function () {
                                                        o.classList.remove("fade-in"), o.classList.add("fade-out");
                                                    }, 2e3);
                                            });
                                        });
                                })(e, i, o);
                        })(e),
                        (t = new CustomEvent("domMutation")),
                        document.dispatchEvent(t),
                        (function (e) {
                            e.querySelectorAll("video").forEach(function (e) {
                                var t,
                                    n,
                                    i = document.createElement("div");
                                i.classList.add("article-video"), (t = e), (n = (n = i) || document.createElement("div")), t.parentNode.appendChild(n), n.appendChild(t), e.play();
                            });
                            var t = e.querySelectorAll(".vidyard-player-embed"),
                                i = n(o(), 1)[0];
                            t.forEach(function (e) {
                                var t = i.cloneNode(!0),
                                    n = e.parentNode;
                                if ("P" === n.nextElementSibling.tagName && 1 === n.nextElementSibling.querySelectorAll("em").length) {
                                    var o = document.createElement("em");
                                    (o.innerHTML = n.nextElementSibling.innerText), t.appendChild(o), n.nextElementSibling.remove();
                                }
                                n.replaceChild(t, e), t.querySelector("[data-inner]").append(e);
                            });
                        })(e),
                        (function (e) {
                            var t = e.querySelectorAll(".hs-video-widget"),
                                i = n(o(), 1)[0];
                            t.forEach(function (e) {
                                var t, n;
                                (t = e), (n = document.createElement("div")), t.parentNode.insertBefore(n, t), n.appendChild(t);
                            }),
                                e.querySelectorAll(".hs-video-widget").forEach(function (e) {
                                    var t = i.cloneNode(!0),
                                        n = e.parentNode;
                                    if ("P" === n.nextElementSibling.tagName && 1 === n.nextElementSibling.querySelectorAll("em").length) {
                                        var o = document.createElement("em");
                                        (o.innerHTML = n.nextElementSibling.innerText), t.appendChild(o), n.nextElementSibling.remove();
                                    }
                                    n.replaceChild(t, e), t.querySelector("[data-inner]").append(e);
                                });
                        })(e),
                        (function (e) {
                            e.querySelectorAll(".hs-cta-wrapper").forEach(function (e) {
                                return e.parentElement.classList.add("blog-cta-wrapper");
                            });
                        })(e);
                    var t;
                })(e);
        };
    },
    823: function (e, t) {
        var n = {
            vkontakte: function (e, t, i, o) {
                var r = "http://vkontakte.ru/share.php?";
                (r += "url=" + encodeURIComponent(e)), (r += "&title=" + encodeURIComponent(t)), (r += "&description=" + encodeURIComponent(o)), (r += "&image=" + encodeURIComponent(i)), (r += "&noparse=true"), n.popup(r);
            },
            odnoklassniki: function (e) {
                var t = "http://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1";
                (t += "&st._surl=" + e), n.popup(t);
            },
            facebook: function (e, t, i, o) {
                encodeURIComponent(t), encodeURIComponent(o), encodeURIComponent(e), encodeURIComponent(i), n.popup("https://www.facebook.com/sharer/sharer.php?u=" + e);
            },
            twitter: function (e, t, i, o) {
                var r = "http://twitter.com/share?";
                void 0 !== t && (r += "text=" + encodeURIComponent(t.length ? t : o)), (r += "&url=" + encodeURIComponent(e)), (r += "&counturl=" + encodeURIComponent(e)), n.popup(r);
            },
            gplus: function (e) {
                n.popup("https://plus.google.com/share?url=" + encodeURIComponent(e));
            },
            linkedIn: function (e, t) {
                var i = "https://www.linkedin.com/shareArticle?mini=true";
                (i += "&url=".concat(encodeURIComponent(e))), (i += "&title=".concat(encodeURIComponent(t))), n.popup(i);
            },
            popup: function (e) {
                window.open(e, "", "toolbar=0,status=0,width=626,height=436");
            },
        };
        function i(e) {
            var t = $('meta[property="og:' + e + '"]');
            return t.length ? t.attr("content") : "";
        }
        function o() {
            setTimeout(function () {
                $(".js-social-share:not([data-init])").each(function (e, t) {
                    $(t).attr("data-init", "true"),
                        $(t).on("click", function () {
                            var e = $(this).data("social"),
                                t = e in n ? n[e] : null;
                            return null === t || t(document.location.href, i("title"), i("image"), i("description")), !1;
                        });
                });
            });
        }
        document.addEventListener("DOMContentLoaded", o), document.addEventListener("domMutation", o);
    },
    824: function (e, t) {
        var n = {
            clipboard: function () {
                var e,
                    t,
                    n = document.location.href;
                (e = n),
                    ((t = document.createElement("textarea")).value = e),
                    t.setAttribute("readonly", ""),
                    (t.style.position = "absolute"),
                    (t.style.left = "-9999px"),
                    document.body.appendChild(t),
                    t.select(),
                    document.execCommand("copy"),
                    document.body.removeChild(t);
            },
        };
        function i() {
            setTimeout(function () {
                $(".js-copy:not([data-init])").each(function (e, t) {
                    $(t).attr("data-init", "true"),
                        $(t).on("click", function () {
                            var e = this,
                                t = $(this).data("copy"),
                                i = t in n ? n[t] : null;
                            if ("clipboard" === t) {
                                $(this)
                                    .find("span")
                                    .css({ animation: "fadeTip ".concat(3e3, "ms ease forwards") });
                                setTimeout(function () {
                                    $(e).find("span").css({ animation: "" });
                                }, 3e3);
                            }
                            return null === i || i(document.location.href), !1;
                        });
                });
            });
        }
        document.addEventListener("DOMContentLoaded", i), document.addEventListener("domMutation", i);
    },
    825: function (e, t) {
        function n(e) {
            return (n =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      })(e);
        }
        function i(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, o(i.key), i);
            }
        }
        function o(e) {
            var t = (function (e, t) {
                if ("object" != n(e) || !e) return e;
                var i = e[Symbol.toPrimitive];
                if (void 0 !== i) {
                    var o = i.call(e, t || "default");
                    if ("object" != n(o)) return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == n(t) ? t : t + "";
        }
        var r = (function () {
            function e(t) {
                !(function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                })(this, e),
                    (this.node = t),
                    (this.posts = this.node.querySelectorAll(".js-add-item")),
                    (this.addButton = this.node.querySelector(".js-add-button")),
                    (this.start = null),
                    (this.end = null),
                    (this.step = 6),
                    this.init();
            }
            return (
                (t = e),
                (o = [
                    {
                        key: "setActive",
                        value: function (e) {
                            e.classList.add("active");
                        },
                    },
                ]),
                (n = [
                    {
                        key: "events",
                        value: function () {
                            if (!this.checkCondition()) {
                                for (
                                    null === this.start
                                        ? this.step < this.posts.length
                                            ? (this.end = this.step)
                                            : (this.end = this.posts.length)
                                        : this.end < this.posts.length
                                        ? (this.end = this.start + this.step)
                                        : (this.end = this.posts.length),
                                        null === this.start ? (this.start = 0) : this.start;
                                    this.start < this.end;
                                    this.start++
                                )
                                    e.setActive(this.posts[this.start]);
                                (this.end = this.start + this.step), this.checkCondition() && this.addButton && this.addButton.remove();
                            }
                        },
                    },
                    {
                        key: "toggle",
                        value: function () {
                            this.addButton.addEventListener("click", this.events.bind(this));
                        },
                    },
                    {
                        key: "checkCondition",
                        value: function () {
                            return this.posts.length === this.start;
                        },
                    },
                    {
                        key: "init",
                        value: function () {
                            this.checkCondition(), this.events(), this.toggle();
                        },
                    },
                ]) && i(t.prototype, n),
                o && i(t, o),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                t
            );
            var t, n, o;
        })();
        document.addEventListener("DOMContentLoaded", function () {
            document.querySelectorAll(".js-add-container").forEach(function (e) {
                new r(e);
            });
        });
    },
    826: function (e, t) {
        function n(e) {
            return (n =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      })(e);
        }
        function i(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, o(i.key), i);
            }
        }
        function o(e) {
            var t = (function (e, t) {
                if ("object" != n(e) || !e) return e;
                var i = e[Symbol.toPrimitive];
                if (void 0 !== i) {
                    var o = i.call(e, t || "default");
                    if ("object" != n(o)) return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == n(t) ? t : t + "";
        }
        var r = (function () {
            function e(t) {
                !(function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                })(this, e),
                    (this.node = t),
                    (this.posts = this.node.querySelectorAll(".js-add-item")),
                    (this.total = this.posts.length),
                    (this.limit = 12),
                    (this.offset = 0),
                    (this.loading = !1),
                    this.init();
            }
            return (
                (t = e),
                (o = [
                    {
                        key: "setActive",
                        value: function (e) {
                            e.classList.add("active");
                        },
                    },
                ]),
                (n = [
                    {
                        key: "addPosts",
                        value: function () {
                            var t = this;
                            this.posts.forEach(function (n, i) {
                                i + 1 >= t.offset && i + 1 <= t.offset + t.limit && e.setActive(t.posts[i]);
                            }),
                                this.removeSpinner(),
                                (this.offset += this.limit),
                                (this.loading = !1);
                        },
                    },
                    {
                        key: "addEvents",
                        value: function () {
                            var e = this;
                            document.addEventListener("scroll", function (t) {
                                return e.scrollHandler(t);
                            }),
                                (window.onbeforeunload = function () {
                                    history.scrollRestoration && (history.scrollRestoration = "manual");
                                });
                        },
                    },
                    {
                        key: "getCoordinates",
                        value: function (e) {
                            var t = e.getBoundingClientRect(),
                                n = document.documentElement,
                                i = window.pageYOffset,
                                o = n.clientTop,
                                r = t.top + i - o;
                            return { top: Math.round(r), height: t.height };
                        },
                    },
                    {
                        key: "addSpinner",
                        value: function () {
                            this.node.insertAdjacentHTML("beforeend", '\n       <div class="spinner">\n          <span class="spinner__icon"/>\n      </div>\n    ');
                        },
                    },
                    {
                        key: "removeSpinner",
                        value: function () {
                            var e = this.node.querySelector(".spinner");
                            e && e.remove();
                        },
                    },
                    {
                        key: "scrollHandler",
                        value: function (e) {
                            var t = this,
                                n = this.getCoordinates(this.node);
                            window.pageYOffset + window.innerHeight >= n.top + n.height - 120 &&
                                this.offset < this.total &&
                                !this.loading &&
                                ((this.loading = !0),
                                this.addSpinner(),
                                setTimeout(function () {
                                    t.addPosts();
                                }, 300));
                        },
                    },
                    {
                        key: "init",
                        value: function () {
                            this.addPosts(), this.addEvents();
                        },
                    },
                ]) && i(t.prototype, n),
                o && i(t, o),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                t
            );
            var t, n, o;
        })();
        document.addEventListener("DOMContentLoaded", function () {
            document.querySelectorAll(".js-add-container-on-scroll").forEach(function (e) {
                new r(e);
            });
        });
    },
    827: function (e, t) {
        function n(e) {
            return (n =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      })(e);
        }
        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function o(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, a(i.key), i);
            }
        }
        function r(e, t, n) {
            return t && o(e.prototype, t), n && o(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
        }
        function a(e) {
            var t = (function (e, t) {
                if ("object" != n(e) || !e) return e;
                var i = e[Symbol.toPrimitive];
                if (void 0 !== i) {
                    var o = i.call(e, t || "default");
                    if ("object" != n(o)) return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == n(t) ? t : t + "";
        }
        var s = (function () {
                function e(t) {
                    i(this, e), (this.node = t), (this.image = t.querySelector("img")), this.events();
                }
                return r(
                    e,
                    [
                        {
                            key: "events",
                            value: function () {
                                var e = this;
                                this.node.classList.add("loading"),
                                    this.image.addEventListener("load", function () {
                                        e.node.classList.remove("loading");
                                    });
                            },
                        },
                    ],
                    [
                        {
                            key: "init",
                            value: function (t) {
                                new e(t);
                            },
                        },
                    ]
                );
            })(),
            l = (function () {
                return r(
                    function e() {
                        i(this, e);
                    },
                    null,
                    [
                        {
                            key: "init",
                            value: function () {
                                document.querySelectorAll(".js-image-loading").forEach(function (e) {
                                    s.init(e);
                                });
                            },
                        },
                    ]
                );
            })();
        document.addEventListener("DOMContentLoaded", function () {
            l.init();
        });
    },
    828: function (e, t) {
        function n(e) {
            return (n =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      })(e);
        }
        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function o(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, a(i.key), i);
            }
        }
        function r(e, t, n) {
            return t && o(e.prototype, t), n && o(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
        }
        function a(e) {
            var t = (function (e, t) {
                if ("object" != n(e) || !e) return e;
                var i = e[Symbol.toPrimitive];
                if (void 0 !== i) {
                    var o = i.call(e, t || "default");
                    if ("object" != n(o)) return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == n(t) ? t : t + "";
        }
        var s = (function () {
                return r(
                    function e(t) {
                        i(this, e), (this.nodeElement = t);
                    },
                    [
                        {
                            key: "setHeight",
                            value: function () {
                                !1 !== Layout.isMobileLayout() && (this.nodeElement.style.height = "".concat(document.documentElement.clientHeight, "px"));
                            },
                        },
                        {
                            key: "init",
                            value: function () {
                                this.setHeight(), onScroll(this.setHeight.bind(this)), onResize(this.setHeight.bind(this));
                            },
                        },
                    ]
                );
            })(),
            l = (function () {
                return r(
                    function e() {
                        i(this, e);
                    },
                    null,
                    [
                        {
                            key: "init",
                            value: function () {
                                document.querySelectorAll(".js-full-height-section").forEach(function (e) {
                                    new s(e);
                                });
                            },
                        },
                    ]
                );
            })();
        document.addEventListener("DOMContentLoaded", function () {
            l.init();
        }),
            (window.FullHeightSectionUI = l);
    },
    829: function (e, t) {
        function n(e) {
            return (n =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      })(e);
        }
        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function o(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, a(i.key), i);
            }
        }
        function r(e, t, n) {
            return t && o(e.prototype, t), n && o(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
        }
        function a(e) {
            var t = (function (e, t) {
                if ("object" != n(e) || !e) return e;
                var i = e[Symbol.toPrimitive];
                if (void 0 !== i) {
                    var o = i.call(e, t || "default");
                    if ("object" != n(o)) return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == n(t) ? t : t + "";
        }
        var s = (function () {
                return r(
                    function e(t) {
                        i(this, e),
                            (this.nodeElement = t),
                            (this.items = this.nodeElement.querySelectorAll("input[type=checkbox]")),
                            (this.field = this.nodeElement.closest(".hs-form-field")),
                            (this.originalLabels = this.nodeElement.querySelectorAll(".hs-form-checkbox")),
                            (this.$pageContent = document.querySelector(".page__content ")),
                            this.nodeElement.querySelector("ul") && (this.nodeElement.querySelector("ul").style.display = "none"),
                            (this.$dropdown = null),
                            (this.$dropdownClose = null),
                            (this.$dropdownContent = null),
                            (this.$view = null),
                            (this.$value = null),
                            (this.opened = !1),
                            (this.bodyClickListener = this.bodyClickListener.bind(this)),
                            this.initHtml(),
                            this.bindEvents(),
                            this.updateValue();
                    },
                    [
                        {
                            key: "initHtml",
                            value: function () {
                                var e = this,
                                    t = document.createElement("div");
                                t.classList.add("hubspot-checkboxes");
                                var n = document.createElement("div");
                                n.classList.add("hubspot-checkboxes__view"), t.append(n), (this.$view = n);
                                var i = document.createElement("span");
                                i.classList.add("hubspot-checkboxes__placeholder"), (i.innerText = ""), n.append(i);
                                var o = document.createElement("span");
                                o.classList.add("hubspot-checkboxes__value"), n.append(o), (this.$value = o);
                                var r = document.createElement("div");
                                r.classList.add("hubspot-checkboxes__dropdown"), t.append(r), (this.$dropdown = r);
                                var a = document.createElement("div");
                                a.classList.add("hubspot-checkboxes__container"), r.append(a);
                                var s = document.createElement("div");
                                s.classList.add("hubspot-checkboxes__content"), a.append(s), (this.$dropdownContent = s);
                                var l = document.createElement("div");
                                l.classList.add("hubspot-checkboxes__title"), s.append(l);
                                var c = document.createElement("div");
                                c.classList.add("hubspot-checkboxes__list"), s.append(c);
                                var u = document.createElement("button");
                                u.classList.add("hubspot-checkboxes__close"),
                                    (u.textContent = "Done"),
                                    s.append(u),
                                    (this.$dropdownClose = u),
                                    this.items.forEach(function (t, n) {
                                        var i = document.createElement("label");
                                        i.classList.add("hubspot-checkboxes__label"), i.append(t);
                                        var o = e.originalLabels[n].querySelector("span").innerText,
                                            r = document.createElement("span");
                                        (r.innerText = o), i.append(r), (e.$fieldLabel = e.field.querySelector("label").querySelector("span").textContent), (l.textContent = e.$fieldLabel), c.append(i);
                                    }),
                                    this.nodeElement.append(t),
                                    this.fieldRemoveFocused();
                            },
                        },
                        {
                            key: "bindEvents",
                            value: function () {
                                var e = this;
                                this.$view.addEventListener("click", function (t) {
                                    t.preventDefault(), e.open();
                                }),
                                    this.items.forEach(function (t) {
                                        return t.addEventListener("change", function (t) {
                                            e.updateValue();
                                        });
                                    }),
                                    this.$dropdownClose.addEventListener("click", function (t) {
                                        t.preventDefault(), e.close();
                                    });
                            },
                        },
                        {
                            key: "bodyClickListener",
                            value: function (e) {
                                var t, n;
                                (t = this.$dropdownContent), (n = e.target), (t !== n && t.contains(n)) || this.close();
                            },
                        },
                        {
                            key: "pageScrollControl",
                            value: function (e) {
                                if (isMobileLayout())
                                    switch (e) {
                                        case "show":
                                            showScrollbar();
                                            break;
                                        case "hide":
                                            hideScrollbar();
                                    }
                            },
                        },
                        {
                            key: "open",
                            value: function () {
                                var e = this;
                                this.opened ||
                                    (this.$dropdown.classList.add("opened"),
                                    (this.openTimer = setTimeout(function () {
                                        document.addEventListener("click", e.bodyClickListener);
                                    }, 100)),
                                    (this.opened = !0),
                                    this.pageScrollControl("hide"),
                                    isMobileLayout() && (this.$pageContent.style.zIndex = "auto"));
                            },
                        },
                        {
                            key: "close",
                            value: function () {
                                document.removeEventListener("click", this.bodyClickListener),
                                    this.$dropdown.classList.remove("opened"),
                                    (this.opened = !1),
                                    this.pageScrollControl("show"),
                                    isMobileLayout() && (this.$pageContent.style.zIndex = "10");
                            },
                        },
                        {
                            key: "fieldAddFocused",
                            value: function () {
                                this.field.classList.add("focused");
                            },
                        },
                        {
                            key: "fieldRemoveFocused",
                            value: function () {
                                this.field.classList.remove("focused");
                            },
                        },
                        {
                            key: "updateValue",
                            value: function () {
                                var e = this,
                                    t = [];
                                this.items.forEach(function (n, i) {
                                    !1 !== n.checked && t.push(e.originalLabels[i].querySelector("span").innerText);
                                }),
                                    t.length > 0 ? this.fieldAddFocused() : this.fieldRemoveFocused(),
                                    this.$view.classList.toggle("_with-value", t.length > 0),
                                    (this.$value.innerText = t.join(", "));
                            },
                        },
                    ]
                );
            })(),
            l = (function () {
                return r(
                    function e() {
                        i(this, e);
                    },
                    null,
                    [
                        {
                            key: "initInstance",
                            value: function (e) {
                                new s(e);
                            },
                        },
                    ]
                );
            })();
        window.HubspotCheckboxesUi = l;
    },
    830: function (e, t) {
        function n(e) {
            return (n =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      })(e);
        }
        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function o(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, a(i.key), i);
            }
        }
        function r(e, t, n) {
            return t && o(e.prototype, t), n && o(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
        }
        function a(e) {
            var t = (function (e, t) {
                if ("object" != n(e) || !e) return e;
                var i = e[Symbol.toPrimitive];
                if (void 0 !== i) {
                    var o = i.call(e, t || "default");
                    if ("object" != n(o)) return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == n(t) ? t : t + "";
        }
        var s = (function () {
                return r(
                    function e(t) {
                        i(this, e), (this.nodeElement = t), (this.activeTab = null), (this.tabs = []), this.initTabs(), this.tabs.length > 0 && this.init();
                    },
                    [
                        {
                            key: "initTabs",
                            value: function () {
                                var e = this;
                                this.findTabs().forEach(function (t) {
                                    var n = t.dataset.target;
                                    if (n) {
                                        var i = e.nodeElement.querySelector(n);
                                        i || console.error('Tab content with selector "'.concat(n, '" not found'));
                                        var o = null === e.activeTab && t.classList.contains("active"),
                                            r = { isActive: o, tabElement: t, tabContentElement: i };
                                        o && (e.activeTab = r), e.tabs.push(r);
                                    } else console.error('Tab "'.concat(t.innerText, '" does not have data-target attribute'));
                                });
                            },
                        },
                        {
                            key: "findTabs",
                            value: function () {
                                var e = this,
                                    t = [];
                                return (
                                    this.nodeElement.querySelectorAll(".js-tab").forEach(function (n) {
                                        n.closest(".js-tabs") === e.nodeElement && t.push(n);
                                    }),
                                    t
                                );
                            },
                        },
                        {
                            key: "hideTab",
                            value: function (e) {
                                e.tabElement.classList.remove("active"), e.tabContentElement && e.tabContentElement.classList.remove("active"), (e.isActive = !1);
                            },
                        },
                        {
                            key: "showTab",
                            value: function (e) {
                                e.tabElement.classList.add("active"), e.tabContentElement && e.tabContentElement.classList.add("active"), (e.isActive = !0);
                            },
                        },
                        {
                            key: "setActiveTab",
                            value: function (e) {
                                e.isActive || this.tabs.forEach(this.hideTab), this.showTab(e);
                            },
                        },
                        {
                            key: "onTabClick",
                            value: function (e, t) {
                                e.preventDefault(), this.setActiveTab(t);
                            },
                        },
                        {
                            key: "setDefaults",
                            value: function () {
                                this.activeTab ? this.setActiveTab(this.activeTab) : this.setActiveTab(this.tabs[0]);
                            },
                        },
                        {
                            key: "init",
                            value: function () {
                                var e = this;
                                this.setDefaults(),
                                    this.tabs.forEach(function (t) {
                                        t.tabElement.addEventListener("click", function (n) {
                                            return e.onTabClick(n, t);
                                        });
                                    });
                            },
                        },
                    ]
                );
            })(),
            l = (function () {
                return r(
                    function e() {
                        i(this, e);
                    },
                    null,
                    [
                        {
                            key: "initOnLoad",
                            value: function () {
                                var e = this;
                                document.addEventListener("DOMContentLoaded", function () {
                                    document.querySelectorAll(".js-tabs").forEach(e.initInstance);
                                });
                            },
                        },
                        {
                            key: "initInstance",
                            value: function (e) {
                                new s(e);
                            },
                        },
                    ]
                );
            })();
        l.initOnLoad(), (window.TabsUI = l);
    },
    831: function (e, t) {
        function n(e) {
            return (n =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      })(e);
        }
        function i(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, o(i.key), i);
            }
        }
        function o(e) {
            var t = (function (e, t) {
                if ("object" != n(e) || !e) return e;
                var i = e[Symbol.toPrimitive];
                if (void 0 !== i) {
                    var o = i.call(e, t || "default");
                    if ("object" != n(o)) return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == n(t) ? t : t + "";
        }
        var r = (function () {
            return (
                (e = function e(t) {
                    !(function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                        (this.nodeElement = t);
                    var n = this.nodeElement.getAttribute("href");
                    n.startsWith("http") || ((this.targetElement = "#top" === n ? document.body : document.querySelector(n)), this.targetElement && this.init());
                }),
                (t = [
                    {
                        key: "init",
                        value: function () {
                            var e = this;
                            this.nodeElement.addEventListener("click", function (t) {
                                t.preventDefault(),
                                    ("#top" !== e.nodeElement.getAttribute("href") &&
                                        !1 !==
                                            (function e(t, n) {
                                                return !(!t || !t.className) && (!(null == t || !t.className || !t.className.split(" ").includes(n)) || (t.parentNode && e(t.parentNode, n)));
                                            })(e.targetElement, "popup")) ||
                                        startScrollTo(e.targetElement);
                            });
                        },
                    },
                ]) && i(e.prototype, t),
                n && i(e, n),
                Object.defineProperty(e, "prototype", { writable: !1 }),
                e
            );
            var e, t, n;
        })();
        document.addEventListener("DOMContentLoaded", function () {
            document.querySelectorAll(".js-scroll-to").forEach(function (e) {
                return new r(e);
            });
        });
    },
    832: function (e, t) {
        function n(e) {
            return (n =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      })(e);
        }
        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function o(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, a(i.key), i);
            }
        }
        function r(e, t, n) {
            return t && o(e.prototype, t), n && o(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
        }
        function a(e) {
            var t = (function (e, t) {
                if ("object" != n(e) || !e) return e;
                var i = e[Symbol.toPrimitive];
                if (void 0 !== i) {
                    var o = i.call(e, t || "default");
                    if ("object" != n(o)) return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == n(t) ? t : t + "";
        }
        var s = (function () {
                return r(
                    function e(t) {
                        i(this, e),
                            (this.nodeElement = t),
                            (this.timeout = +this.nodeElement.dataset.timeout || 5e3),
                            (this.pagination = t.querySelector(".js-slider-hero__pagination")),
                            (this.slidesCount = t.querySelectorAll(".swiper-slide").length),
                            (this.startTime = null),
                            (this.elapsedTime = null),
                            (this.timeFraction = null),
                            (this.activeSlideElement = null),
                            (this.activeSlideElementProgress = null),
                            this.init();
                    },
                    [
                        {
                            key: "initSwiper",
                            value: function () {
                                (this.swiper = new Swiper(this.nodeElement, {
                                    effect: "fade",
                                    fadeEffect: { crossFade: !0 },
                                    speed: 1e3,
                                    autoplay: !1,
                                    on: { init: this.onSlideChange.bind(this), slideChange: this.onSlideChange.bind(this) },
                                })),
                                    this.updateActiveSlideElement();
                            },
                        },
                        {
                            key: "prepareHtmlPaginationForSlide",
                            value: function (e, t) {
                                var n = this;
                                if (!e.querySelector(".js-slider-hero__pagination")) {
                                    var i = document.createElement("div");
                                    i.classList.add("js-slider-hero__pagination");
                                    for (
                                        var o = function () {
                                                var e = document.createElement("div");
                                                e.classList.add("js-slider-hero__bullet");
                                                var o = document.createElement("div");
                                                if ((o.classList.add("js-slider-hero__inner"), o.appendChild(e), r === t)) {
                                                    var a = document.createElement("div");
                                                    a.classList.add("js-slider-hero__progress"), e.appendChild(a);
                                                }
                                                i.appendChild(o),
                                                    (function (e) {
                                                        o.addEventListener("click", function (t) {
                                                            t.preventDefault(), n.swiper.slideTo(e);
                                                        });
                                                    })(r);
                                            },
                                            r = 0;
                                        r < this.slidesCount;
                                        r++
                                    )
                                        o();
                                    e.querySelector(".home-hero-slider__content").appendChild(i);
                                }
                            },
                        },
                        {
                            key: "updateActiveSlideElement",
                            value: function () {
                                this.swiper &&
                                    ((this.activeSlideElement = this.swiper.slides[this.swiper.activeIndex]),
                                    this.prepareHtmlPaginationForSlide(this.activeSlideElement, this.swiper.realIndex),
                                    this.activeSlideElement ? (this.activeSlideElementProgress = this.activeSlideElement.querySelector(".js-slider-hero__progress")) : (this.activeSlideElementProgress = null));
                            },
                        },
                        {
                            key: "init",
                            value: function () {
                                this.initSwiper();
                            },
                        },
                        {
                            key: "toNextSlide",
                            value: function () {
                                this.swiper.realIndex === this.swiper.slides.length - 1 ? this.swiper.slideTo(0) : this.swiper.slideNext();
                            },
                        },
                        {
                            key: "timing",
                            value: function (e) {
                                return e;
                            },
                        },
                        {
                            key: "animate",
                            value: function (e) {
                                var t = (e - this.startTime + this.elapsedTime) / this.timeout;
                                t > 1 && (t = 1);
                                var n = this.timing(t);
                                this.drawProgress(n), t < 1 ? (this.animationId = raf(this.animate.bind(this))) : this.toNextSlide();
                            },
                        },
                        {
                            key: "drawProgress",
                            value: function (e) {
                                this.activeSlideElementProgress && (this.activeSlideElementProgress.style.transform = "scaleX(".concat(e, ")"));
                            },
                        },
                        {
                            key: "startProgress",
                            value: function () {
                                (this.activeSlideElement = this.swiper ? this.swiper.slides[this.swiper.activeIndex] : null), (this.startTime = performance.now()), (this.elapsedTime = 0), (this.animationId = raf(this.animate.bind(this)));
                            },
                        },
                        {
                            key: "resetProgress",
                            value: function () {
                                (this.startTime = null), (this.elapsedTime = null), (this.timeFraction = null), this.drawProgress(0);
                            },
                        },
                        {
                            key: "onSlideChange",
                            value: function () {
                                this.updateActiveSlideElement(), this.resetProgress(), this.startProgress();
                            },
                        },
                    ]
                );
            })(),
            l = (function () {
                return r(
                    function e() {
                        i(this, e);
                    },
                    null,
                    [
                        {
                            key: "initOnLoad",
                            value: function () {
                                document.querySelectorAll(".js-slider-hero").forEach(function (e) {
                                    new s(e);
                                });
                            },
                        },
                    ]
                );
            })();
        l.initOnLoad(), (window.SliderHeroUI = l);
    },
    833: function (e, t) {
        function n(e) {
            return (n =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      })(e);
        }
        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function o(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, a(i.key), i);
            }
        }
        function r(e, t, n) {
            return t && o(e.prototype, t), n && o(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
        }
        function a(e) {
            var t = (function (e, t) {
                if ("object" != n(e) || !e) return e;
                var i = e[Symbol.toPrimitive];
                if (void 0 !== i) {
                    var o = i.call(e, t || "default");
                    if ("object" != n(o)) return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == n(t) ? t : t + "";
        }
        var s = (function () {
                return r(
                    function e(t) {
                        i(this, e), (this.nodeElement = t), (this.isMobile = !1), (this.mobileBreakpoint = t.dataset.mobileBreakpoint || "mobile"), (this.swiperContainer = null), this.init();
                    },
                    [
                        {
                            key: "enableMobile",
                            value: function () {
                                this.prepareMobileHtml(),
                                    (this.isMobile = !0),
                                    this.nodeElement.classList.add("slider-mobile--enabled"),
                                    (this.slider = new Swiper(this.swiperContainer, {
                                        slidesPerView: 1,
                                        spaceBetween: 20,
                                        pagination: {
                                            el: ".slider-pagination",
                                            type: "bullets",
                                            clickable: !0,
                                            renderBullet: function (e, t) {
                                                return '<span class="slider-pagination__item ' + t + '"></span>';
                                            },
                                        },
                                        breakpoints: { 768: { slidesPerView: 2 } },
                                    }));
                            },
                        },
                        {
                            key: "disableMobile",
                            value: function () {
                                (this.isMobile = !1), this.nodeElement.classList.remove("slider-mobile--enabled"), this.slider && (this.slider.destroy(!0, !0), (this.slider = null)), this.disableMobileHtml();
                            },
                        },
                        {
                            key: "checkIfNeedMobileNow",
                            value: function () {
                                switch (this.mobileBreakpoint) {
                                    case "mobile":
                                        return Layout.isMobileLayout();
                                    case "small-tablet":
                                        return Layout.isTabletLayout();
                                    case "tablet":
                                        return Layout.isLaptopLayout();
                                    default:
                                        return !1;
                                }
                            },
                        },
                        {
                            key: "disableMobileHtml",
                            value: function () {
                                var e;
                                this.swiperContainer.classList.remove("swiper-container"),
                                    this.nodeElement.classList.remove("swiper-wrapper"),
                                    this.nodeElement.childNodes.forEach(function (e) {
                                        e.classList && (e.classList.remove("swiper-slide"), e.classList.remove("swiper-slide-duplicate-prev"));
                                    }),
                                    (e = this.nodeElement),
                                    this.swiperContainer.parentElement.appendChild(e),
                                    (function (e) {
                                        e.parentNode.removeChild(e);
                                    })(this.swiperContainer),
                                    (this.swiperContainer = null);
                            },
                        },
                        {
                            key: "prepareMobileHtml",
                            value: function () {
                                if (!this.swiperContainer) {
                                    (this.swiperContainer = document.createElement("div")), (t = this.nodeElement), (n = this.swiperContainer), t.parentNode.insertBefore(n, t), n.appendChild(t);
                                    var e = document.createElement("div");
                                    e.classList.add("slider-pagination"), this.swiperContainer.appendChild(e);
                                }
                                var t, n;
                                this.swiperContainer.classList.add("swiper-container"),
                                    this.nodeElement.childNodes.forEach(function (e) {
                                        e.classList && e.classList.add("swiper-slide");
                                    }),
                                    this.nodeElement.classList.add("swiper-wrapper");
                            },
                        },
                        {
                            key: "update",
                            value: function () {
                                !1 === this.isMobile && this.checkIfNeedMobileNow() && this.enableMobile(), this.isMobile && !this.checkIfNeedMobileNow() && this.disableMobile();
                            },
                        },
                        {
                            key: "init",
                            value: function () {
                                this.update(), Layout.addListener(this.update.bind(this));
                            },
                        },
                    ]
                );
            })(),
            l = (function () {
                return r(
                    function e() {
                        i(this, e);
                    },
                    null,
                    [
                        {
                            key: "initOnLoad",
                            value: function () {
                                var e = this;
                                document.addEventListener("DOMContentLoaded", function () {
                                    document.querySelectorAll(".js-slider-mobile").forEach(function (t) {
                                        return e.initInstance(t);
                                    });
                                });
                            },
                        },
                        {
                            key: "initInstance",
                            value: function (e) {
                                new s(e);
                            },
                        },
                    ]
                );
            })();
        l.initOnLoad(), (window.SliderMobileUI = l);
    },
    834: function (e, t) {
        function n(e) {
            return (n =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      })(e);
        }
        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function o(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, a(i.key), i);
            }
        }
        function r(e, t, n) {
            return t && o(e.prototype, t), n && o(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
        }
        function a(e) {
            var t = (function (e, t) {
                if ("object" != n(e) || !e) return e;
                var i = e[Symbol.toPrimitive];
                if (void 0 !== i) {
                    var o = i.call(e, t || "default");
                    if ("object" != n(o)) return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == n(t) ? t : t + "";
        }
        var s = (function () {
                return r(
                    function e(t) {
                        i(this, e),
                            (this.nodeElement = t),
                            (this.timeout = +this.nodeElement.dataset.timeout || 5e3),
                            (this.pagination = t.querySelector(".article-slider__pagination")),
                            (this.slidesCount = t.querySelectorAll(".swiper-slide").length),
                            (this.startTime = null),
                            (this.elapsedTime = null),
                            (this.timeFraction = null),
                            (this.activeSlideElement = null),
                            (this.activeSlideElementProgress = null),
                            this.init();
                    },
                    [
                        {
                            key: "initSwiper",
                            value: function () {
                                (this.swiper = new Swiper(this.nodeElement, {
                                    effect: "fade",
                                    loop: !0,
                                    speed: 1e3,
                                    autoplay: !1,
                                    on: { init: this.onSlideChange.bind(this), slideChange: this.onSlideChange.bind(this) },
                                    fadeEffect: { crossFade: !0 },
                                })),
                                    this.updateActiveSlideElement();
                            },
                        },
                        {
                            key: "prepareHtmlPaginationForSlide",
                            value: function (e, t) {
                                var n = this;
                                if (!e.querySelector(".article-slider__pagination")) {
                                    var i = document.createElement("div");
                                    i.classList.add("article-slider__pagination");
                                    for (
                                        var o = function () {
                                                var e = document.createElement("div");
                                                if ((e.classList.add("article-slider__bullet"), r === t)) {
                                                    var o = document.createElement("div");
                                                    o.classList.add("article-slider__progress"), e.appendChild(o);
                                                }
                                                i.appendChild(e),
                                                    (function (t) {
                                                        e.addEventListener("click", function (e) {
                                                            e.preventDefault(),
                                                                n.swiper.realIndex !== t &&
                                                                    (n.swiper.realIndex === n.slidesCount - 1 && 0 === t
                                                                        ? n.swiper.slideNext()
                                                                        : 0 === n.swiper.realIndex && t === n.slidesCount - 1
                                                                        ? n.swiper.slidePrev()
                                                                        : n.swiper.slideTo(t + 1));
                                                        });
                                                    })(r);
                                            },
                                            r = 0;
                                        r < this.slidesCount;
                                        r++
                                    )
                                        o();
                                    e.querySelector(".article-slider__pagination-wrapper").appendChild(i);
                                }
                            },
                        },
                        {
                            key: "updateActiveSlideElement",
                            value: function () {
                                this.swiper &&
                                    ((this.activeSlideElement = this.swiper.slides[this.swiper.activeIndex]),
                                    this.prepareHtmlPaginationForSlide(this.activeSlideElement, this.swiper.realIndex),
                                    this.activeSlideElement ? (this.activeSlideElementProgress = this.activeSlideElement.querySelector(".article-slider__progress")) : (this.activeSlideElementProgress = null));
                            },
                        },
                        {
                            key: "init",
                            value: function () {
                                this.initSwiper();
                            },
                        },
                        {
                            key: "toNextSlide",
                            value: function () {
                                this.swiper.slideNext();
                            },
                        },
                        {
                            key: "timing",
                            value: function (e) {
                                return e;
                            },
                        },
                        {
                            key: "animate",
                            value: function (e) {
                                var t = (e - this.startTime + this.elapsedTime) / this.timeout;
                                t > 1 && (t = 1);
                                var n = this.timing(t);
                                this.drawProgress(n), t < 1 ? (this.animationId = raf(this.animate.bind(this))) : this.toNextSlide();
                            },
                        },
                        {
                            key: "drawProgress",
                            value: function (e) {
                                this.activeSlideElementProgress && (this.activeSlideElementProgress.style.transform = "scaleX(".concat(e, ")"));
                            },
                        },
                        {
                            key: "startProgress",
                            value: function () {
                                (this.activeSlideElement = this.swiper ? this.swiper.slides[this.swiper.activeIndex] : null), (this.startTime = performance.now()), (this.elapsedTime = 0), (this.animationId = raf(this.animate.bind(this)));
                            },
                        },
                        {
                            key: "resetProgress",
                            value: function () {
                                (this.startTime = null), (this.elapsedTime = null), (this.timeFraction = null), this.drawProgress(0);
                            },
                        },
                        {
                            key: "onSlideChange",
                            value: function () {
                                this.updateActiveSlideElement(), this.resetProgress(), this.startProgress();
                            },
                        },
                    ]
                );
            })(),
            l = (function () {
                return r(
                    function e() {
                        i(this, e);
                    },
                    null,
                    [
                        {
                            key: "initOnLoad",
                            value: function () {
                                document.querySelectorAll(".js-slider-article:not([data-init])").forEach(function (e) {
                                    return (e.dataset.init = "true"), new s(e);
                                });
                            },
                        },
                    ]
                );
            })();
        l.initOnLoad(), document.addEventListener("domMutation", l.initOnLoad), (window.SliderArticleUI = l);
    },
    835: function (e, t) {
        function n(e) {
            return (n =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      })(e);
        }
        function i() {
            "use strict";
            i = function () {
                return t;
            };
            var e,
                t = {},
                o = Object.prototype,
                r = o.hasOwnProperty,
                a =
                    Object.defineProperty ||
                    function (e, t, n) {
                        e[t] = n.value;
                    },
                s = "function" == typeof Symbol ? Symbol : {},
                l = s.iterator || "@@iterator",
                c = s.asyncIterator || "@@asyncIterator",
                u = s.toStringTag || "@@toStringTag";
            function d(e, t, n) {
                return Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }), e[t];
            }
            try {
                d({}, "");
            } catch (e) {
                d = function (e, t, n) {
                    return (e[t] = n);
                };
            }
            function f(e, t, n, i) {
                var o = t && t.prototype instanceof b ? t : b,
                    r = Object.create(o.prototype),
                    s = new x(i || []);
                return a(r, "_invoke", { value: T(e, n, s) }), r;
            }
            function h(e, t, n) {
                try {
                    return { type: "normal", arg: e.call(t, n) };
                } catch (e) {
                    return { type: "throw", arg: e };
                }
            }
            t.wrap = f;
            var p = "suspendedStart",
                v = "executing",
                y = "completed",
                m = {};
            function b() {}
            function g() {}
            function w() {}
            var S = {};
            d(S, l, function () {
                return this;
            });
            var E = Object.getPrototypeOf,
                k = E && E(E($([])));
            k && k !== o && r.call(k, l) && (S = k);
            var L = (w.prototype = b.prototype = Object.create(S));
            function _(e) {
                ["next", "throw", "return"].forEach(function (t) {
                    d(e, t, function (e) {
                        return this._invoke(t, e);
                    });
                });
            }
            function j(e, t) {
                function i(o, a, s, l) {
                    var c = h(e[o], e, a);
                    if ("throw" !== c.type) {
                        var u = c.arg,
                            d = u.value;
                        return d && "object" == n(d) && r.call(d, "__await")
                            ? t.resolve(d.__await).then(
                                  function (e) {
                                      i("next", e, s, l);
                                  },
                                  function (e) {
                                      i("throw", e, s, l);
                                  }
                              )
                            : t.resolve(d).then(
                                  function (e) {
                                      (u.value = e), s(u);
                                  },
                                  function (e) {
                                      return i("throw", e, s, l);
                                  }
                              );
                    }
                    l(c.arg);
                }
                var o;
                a(this, "_invoke", {
                    value: function (e, n) {
                        function r() {
                            return new t(function (t, o) {
                                i(e, n, t, o);
                            });
                        }
                        return (o = o ? o.then(r, r) : r());
                    },
                });
            }
            function T(t, n, i) {
                var o = p;
                return function (r, a) {
                    if (o === v) throw Error("Generator is already running");
                    if (o === y) {
                        if ("throw" === r) throw a;
                        return { value: e, done: !0 };
                    }
                    for (i.method = r, i.arg = a; ; ) {
                        var s = i.delegate;
                        if (s) {
                            var l = C(s, i);
                            if (l) {
                                if (l === m) continue;
                                return l;
                            }
                        }
                        if ("next" === i.method) i.sent = i._sent = i.arg;
                        else if ("throw" === i.method) {
                            if (o === p) throw ((o = y), i.arg);
                            i.dispatchException(i.arg);
                        } else "return" === i.method && i.abrupt("return", i.arg);
                        o = v;
                        var c = h(t, n, i);
                        if ("normal" === c.type) {
                            if (((o = i.done ? y : "suspendedYield"), c.arg === m)) continue;
                            return { value: c.arg, done: i.done };
                        }
                        "throw" === c.type && ((o = y), (i.method = "throw"), (i.arg = c.arg));
                    }
                };
            }
            function C(t, n) {
                var i = n.method,
                    o = t.iterator[i];
                if (o === e)
                    return (
                        (n.delegate = null),
                        ("throw" === i && t.iterator.return && ((n.method = "return"), (n.arg = e), C(t, n), "throw" === n.method)) ||
                            ("return" !== i && ((n.method = "throw"), (n.arg = new TypeError("The iterator does not provide a '" + i + "' method")))),
                        m
                    );
                var r = h(o, t.iterator, n.arg);
                if ("throw" === r.type) return (n.method = "throw"), (n.arg = r.arg), (n.delegate = null), m;
                var a = r.arg;
                return a
                    ? a.done
                        ? ((n[t.resultName] = a.value), (n.next = t.nextLoc), "return" !== n.method && ((n.method = "next"), (n.arg = e)), (n.delegate = null), m)
                        : a
                    : ((n.method = "throw"), (n.arg = new TypeError("iterator result is not an object")), (n.delegate = null), m);
            }
            function O(e) {
                var t = { tryLoc: e[0] };
                1 in e && (t.catchLoc = e[1]), 2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])), this.tryEntries.push(t);
            }
            function P(e) {
                var t = e.completion || {};
                (t.type = "normal"), delete t.arg, (e.completion = t);
            }
            function x(e) {
                (this.tryEntries = [{ tryLoc: "root" }]), e.forEach(O, this), this.reset(!0);
            }
            function $(t) {
                if (t || "" === t) {
                    var i = t[l];
                    if (i) return i.call(t);
                    if ("function" == typeof t.next) return t;
                    if (!isNaN(t.length)) {
                        var o = -1,
                            a = function n() {
                                for (; ++o < t.length; ) if (r.call(t, o)) return (n.value = t[o]), (n.done = !1), n;
                                return (n.value = e), (n.done = !0), n;
                            };
                        return (a.next = a);
                    }
                }
                throw new TypeError(n(t) + " is not iterable");
            }
            return (
                (g.prototype = w),
                a(L, "constructor", { value: w, configurable: !0 }),
                a(w, "constructor", { value: g, configurable: !0 }),
                (g.displayName = d(w, u, "GeneratorFunction")),
                (t.isGeneratorFunction = function (e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === g || "GeneratorFunction" === (t.displayName || t.name));
                }),
                (t.mark = function (e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, w) : ((e.__proto__ = w), d(e, u, "GeneratorFunction")), (e.prototype = Object.create(L)), e;
                }),
                (t.awrap = function (e) {
                    return { __await: e };
                }),
                _(j.prototype),
                d(j.prototype, c, function () {
                    return this;
                }),
                (t.AsyncIterator = j),
                (t.async = function (e, n, i, o, r) {
                    void 0 === r && (r = Promise);
                    var a = new j(f(e, n, i, o), r);
                    return t.isGeneratorFunction(n)
                        ? a
                        : a.next().then(function (e) {
                              return e.done ? e.value : a.next();
                          });
                }),
                _(L),
                d(L, u, "Generator"),
                d(L, l, function () {
                    return this;
                }),
                d(L, "toString", function () {
                    return "[object Generator]";
                }),
                (t.keys = function (e) {
                    var t = Object(e),
                        n = [];
                    for (var i in t) n.push(i);
                    return (
                        n.reverse(),
                        function e() {
                            for (; n.length; ) {
                                var i = n.pop();
                                if (i in t) return (e.value = i), (e.done = !1), e;
                            }
                            return (e.done = !0), e;
                        }
                    );
                }),
                (t.values = $),
                (x.prototype = {
                    constructor: x,
                    reset: function (t) {
                        if (((this.prev = 0), (this.next = 0), (this.sent = this._sent = e), (this.done = !1), (this.delegate = null), (this.method = "next"), (this.arg = e), this.tryEntries.forEach(P), !t))
                            for (var n in this) "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e);
                    },
                    stop: function () {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type) throw e.arg;
                        return this.rval;
                    },
                    dispatchException: function (t) {
                        if (this.done) throw t;
                        var n = this;
                        function i(i, o) {
                            return (s.type = "throw"), (s.arg = t), (n.next = i), o && ((n.method = "next"), (n.arg = e)), !!o;
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var a = this.tryEntries[o],
                                s = a.completion;
                            if ("root" === a.tryLoc) return i("end");
                            if (a.tryLoc <= this.prev) {
                                var l = r.call(a, "catchLoc"),
                                    c = r.call(a, "finallyLoc");
                                if (l && c) {
                                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                                } else if (l) {
                                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                                } else {
                                    if (!c) throw Error("try statement without catch or finally");
                                    if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                                }
                            }
                        }
                    },
                    abrupt: function (e, t) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var i = this.tryEntries[n];
                            if (i.tryLoc <= this.prev && r.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                                var o = i;
                                break;
                            }
                        }
                        o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                        var a = o ? o.completion : {};
                        return (a.type = e), (a.arg = t), o ? ((this.method = "next"), (this.next = o.finallyLoc), m) : this.complete(a);
                    },
                    complete: function (e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return (
                            "break" === e.type || "continue" === e.type
                                ? (this.next = e.arg)
                                : "return" === e.type
                                ? ((this.rval = this.arg = e.arg), (this.method = "return"), (this.next = "end"))
                                : "normal" === e.type && t && (this.next = t),
                            m
                        );
                    },
                    finish: function (e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), P(n), m;
                        }
                    },
                    catch: function (e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.tryLoc === e) {
                                var i = n.completion;
                                if ("throw" === i.type) {
                                    var o = i.arg;
                                    P(n);
                                }
                                return o;
                            }
                        }
                        throw Error("illegal catch attempt");
                    },
                    delegateYield: function (t, n, i) {
                        return (this.delegate = { iterator: $(t), resultName: n, nextLoc: i }), "next" === this.method && (this.arg = e), m;
                    },
                }),
                t
            );
        }
        function o(e, t, n, i, o, r, a) {
            try {
                var s = e[r](a),
                    l = s.value;
            } catch (e) {
                return void n(e);
            }
            s.done ? t(l) : Promise.resolve(l).then(i, o);
        }
        function r(e, t) {
            return (
                (function (e) {
                    if (Array.isArray(e)) return e;
                })(e) ||
                (function (e, t) {
                    var n = null == e ? null : ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
                    if (null != n) {
                        var i,
                            o,
                            r,
                            a,
                            s = [],
                            l = !0,
                            c = !1;
                        try {
                            if (((r = (n = n.call(e)).next), 0 === t)) {
                                if (Object(n) !== n) return;
                                l = !1;
                            } else for (; !(l = (i = r.call(n)).done) && (s.push(i.value), s.length !== t); l = !0);
                        } catch (e) {
                            (c = !0), (o = e);
                        } finally {
                            try {
                                if (!l && null != n.return && ((a = n.return()), Object(a) !== a)) return;
                            } finally {
                                if (c) throw o;
                            }
                        }
                        return s;
                    }
                })(e, t) ||
                s(e, t) ||
                (function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                })()
            );
        }
        function a(e, t) {
            var n = ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
            if (!n) {
                if (Array.isArray(e) || (n = s(e)) || (t && e && "number" == typeof e.length)) {
                    n && (e = n);
                    var i = 0,
                        o = function () {};
                    return {
                        s: o,
                        n: function () {
                            return i >= e.length ? { done: !0 } : { done: !1, value: e[i++] };
                        },
                        e: function (e) {
                            throw e;
                        },
                        f: o,
                    };
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            var r,
                a = !0,
                l = !1;
            return {
                s: function () {
                    n = n.call(e);
                },
                n: function () {
                    var e = n.next();
                    return (a = e.done), e;
                },
                e: function (e) {
                    (l = !0), (r = e);
                },
                f: function () {
                    try {
                        a || null == n.return || n.return();
                    } finally {
                        if (l) throw r;
                    }
                },
            };
        }
        function s(e, t) {
            if (e) {
                if ("string" == typeof e) return l(e, t);
                var n = {}.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? l(e, t) : void 0;
            }
        }
        function l(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
            return i;
        }
        function c(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, u(i.key), i);
            }
        }
        function u(e) {
            var t = (function (e, t) {
                if ("object" != n(e) || !e) return e;
                var i = e[Symbol.toPrimitive];
                if (void 0 !== i) {
                    var o = i.call(e, t || "default");
                    if ("object" != n(o)) return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == n(t) ? t : t + "";
        }
        var d = /\bapi\b|\bsdk\b|\bsoftware\s+development\s+kit\b|\btint\b|\bface\s+\bar\b|\bpartnership\b|\bvideo\s+editor\b|\bvto\b|\btry[\s|-]on\b|\bplugin\b|\bimplement\b|\bintegrate\b|\btest(ing)?\b|\bdevelop\b|\btrial\b|\bresearch\b|\bconsulting\b|\bflutter\b|\breact\s+native\b|\b3d\b|\bdemo\b|\bvirtual\s+makeover\b|\bsimulator\b|\bai\s+mirror\b|\bvirtual\s+mirror\b|\bglasses\b|\bjewelry\b|\bmakeup\b|\bbeauty\s+tech\b|\bcosmetics\b|\btry[\s|-]before[\s|-]you[\s|-]buy\b|\bhair\b|\bnail\b|\bring\b|\blenses\b|\bbooths\b|\bfilter(s)?\b|\bface\s+analyzer\b|\bapp(lication)?\b|\bvideo(conferencing|editor)\b|\bchat\b|\bmesh\b|\bmorph\b|\bsnapchat\b|\btiktok\b|\binstagram\b|\bsocial\s+media\b|\bbody\b|\btracking\b|\brecognition\b|\bcustomer\b|\bbackground\b|\breplacement\b|\bchanger\b|\btouch-up\b|\bcamera api\b|\bbeautification\b|\bunity\s+ar\b/,
            f = "Describe your project in a couple of sentences, please",
            h = {
                SDK: ["AR_face_filters", "Social_media_app", "Video_editing_app", "Video_conferencing", "Face_beauty", "Virtual_background", "AR_avatars", "Hand_tracking_gesture", "Face AR SDK", "AI Video Editor SDK"],
                TINT: ["VTO", "TINT"],
                OTHER: ["Other"],
            },
            p = (function () {
                return (function (e, t, n) {
                    return t && c(e.prototype, t), n && c(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
                })(
                    function e(t) {
                        !(function (e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                        })(this, e),
                            (this.nodeElement = t),
                            (this.$isForm = !!document.querySelector(".section-form")),
                            (this.$isSliding = !!document.querySelector(".sliding-form")),
                            (this.$hasProgressBar = !!document.querySelector(".progress-bar")),
                            (this.$useRegex = !!document.querySelector(".use-regex-form")),
                            (this.$header = this.nodeElement.querySelector(".js-contact-form__header")),
                            (this.$formHubspot = document.querySelector(".js-contact-form__inner > .js-form-hubspot")),
                            this.$formHubspot || (this.$formHubspot = this.nodeElement.querySelector(".js-contact-form__inner > span > div")),
                            (this.$textFields = null),
                            (this.$textAreaFields = null),
                            (this.$fieldSets = null),
                            (this.$progressBar = null),
                            (this.$selectedProducts = null),
                            (this.$userEmail = null),
                            (this.timerEmail = null),
                            (this.$checkedCheckboxes = new Set()),
                            this.init();
                    },
                    [
                        {
                            key: "process",
                            value: function () {
                                var e,
                                    t = this;
                                $(this.nodeElement)
                                    .find("select")
                                    .each(function () {
                                        if (!$(this).parents(".hs-fieldtype-intl-phone").length) {
                                            var e = $(this).data("placeholder");
                                            if (!e) {
                                                var t = $(this).find("option").first();
                                                (e = t.text()), t.remove();
                                            }
                                            $(this).dropdown({ placeholder: e });
                                        }
                                    }),
                                    $(this.nodeElement)
                                        .find(".hs-fieldtype-checkbox .input")
                                        .each(function () {
                                            HubspotCheckboxesUi.initInstance($(this).get(0));
                                        });
                                var n = $(this.nodeElement).find("textarea");
                                (this.$error = document.createElement("span")), this.$error.classList.add("hs-error-msg"), this.$error.classList.add("js-contact-form__msg"), this.$error.after(n), $(this.$error).insertAfter(n);
                                var i = this.nodeElement.querySelector(".hubspot-checkboxes__dropdown");
                                (null === (e = this.nodeElement.querySelector(".hubspot-checkboxes__list")) || void 0 === e ? void 0 : e.childElementCount) > 5 &&
                                    window.screen.width > 767 &&
                                    ((i.style.left = "-348px"), (i.style.minWidth = "738px"));
                                var o = this.nodeElement.querySelector("[type=submit]");
                                o &&
                                    o.addEventListener("click", function (e) {
                                        if (((t.$selectedProducts = []), t.nodeElement.querySelector(".hubspot-checkboxes__list"))) {
                                            var i,
                                                o = a(t.nodeElement.querySelector(".hubspot-checkboxes__list").children);
                                            try {
                                                for (o.s(); !(i = o.n()).done; ) {
                                                    var r = i.value.querySelector("[type=checkbox]");
                                                    r.checked && t.$selectedProducts.push(r.value);
                                                }
                                            } catch (e) {
                                                o.e(e);
                                            } finally {
                                                o.f();
                                            }
                                        }
                                        var s = n.val();
                                        (t.$error.innerHTML = ""), s && !t.isValidTextarea(s) && ((t.$error.innerHTML = f), e.preventDefault()), (t.$userEmail = t.nodeElement.querySelector("input[type=email]").value);
                                    }),
                                    (this.$textFields = this.nodeElement.querySelectorAll(".hs-fieldtype-text")),
                                    (this.$textAreaFields = this.nodeElement.querySelectorAll(".hs-fieldtype-textarea")),
                                    this.$isSliding &&
                                        ((this.$fieldSets = this.nodeElement.querySelectorAll("fieldset")),
                                        (this.$fieldSets = Object.values(this.$fieldSets).filter(function (e) {
                                            return !Object.values(e.getElementsByTagName("div")).some(function (e) {
                                                return "none" === e.style.display;
                                            });
                                        })),
                                        (this.$progressBar = this.nodeElement.querySelector(".progress-bar")),
                                        this.$fieldSets.forEach(function (e, n) {
                                            if (t.$hasProgressBar) {
                                                var i = document.createElement("div");
                                                i.classList.add("progress-bar__item"), (i.id = "progress-bar__item-" + n), t.$progressBar.append(i);
                                            }
                                            n > 0 && ((e.style.display = "none"), (e.style.opacity = 0));
                                        })),
                                    this.bindEvents();
                                var r = setInterval(function () {
                                    if (document.querySelector(".submitted-message")) {
                                        if (t.$header) {
                                            var e;
                                            t.$header.remove();
                                            var n = document.querySelector(".submitted-message"),
                                                i = (n.querySelectorAll("p"), null === (e = t.$formHubspot) || void 0 === e || null === (e = e.dataset) || void 0 === e ? void 0 : e.redirectUrl);
                                            if (i)
                                                if ("stripe-payment" === i)
                                                    t.nodeElement.querySelector(".subscriptions__contact-form__features").remove(),
                                                        (n.innerHTML = '<div style="margin:auto" class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>'),
                                                        console.log("stripe"),
                                                        console.log("this.$userEmail", t.$userEmail),
                                                        document.querySelectorAll('input[name="subscription-plan"]').forEach(function (e) {
                                                            e.checked &&
                                                                t.getVidByEmail(t.$userEmail).then(function (n) {
                                                                    if (n) {
                                                                        sessionStorage.setItem("email", t.$userEmail), sessionStorage.setItem("vid", n);
                                                                        var i = encodeURI(e.value + "?prefilled_email=".concat(t.$userEmail, "&client_reference_id=").concat(n));
                                                                        console.log(i), (window.location.href = i);
                                                                    }
                                                                });
                                                        });
                                                else {
                                                    var o = "<p></p><p>Thank you for your message.</p><p>In a second you’ll be redirected to the instructions page.",
                                                        a = t.$selectedProducts.some(function (e) {
                                                            return h.SDK.includes(e);
                                                        });
                                                    (o += a ? "<br>Instructions are also sent to your email.</p>" : "<br>Our manager will contact you soon.</p>"),
                                                        (n.innerHTML = o),
                                                        "auto" !== i
                                                            ? (window.location.href = i)
                                                            : t.$selectedProducts &&
                                                              (a
                                                                  ? (sessionStorage.setItem("email", t.$userEmail), t.removeQueryParams(), (window.location.href = "https://www.koodall.ai/thank-you-page"))
                                                                  : ((window.location.href = "https://www.koodall.ai/thank-you-tint"), t.removeQueryParams()));
                                                }
                                        }
                                        clearInterval(r);
                                    }
                                }, 50);
                            },
                        },
                        {
                            key: "bindEvents",
                            value: function () {
                                var e = this;
                                this.$textFields.forEach(function (t) {
                                    var n = t.querySelector("input");
                                    n && (n.value ? e.addFocused(t) : e.removeFocused(t), e.onInputFocused(n, t), e.onInputBlur(n, t));
                                }),
                                    this.$textAreaFields.forEach(function (t) {
                                        var n = t.querySelector("textarea");
                                        n &&
                                            (n.value ? e.addFocused(t) : e.removeFocused(t),
                                            e.onInputFocused(n, t),
                                            e.onInputBlur(n, t),
                                            n.addEventListener("input", function () {
                                                (n.style.minHeight = "auto"), (n.style.minHeight = n.scrollHeight + "px");
                                            }));
                                    }),
                                    this.$isSliding &&
                                        this.$fieldSets.forEach(function (t, n) {
                                            var i = e.getInputs(t).map(function (e) {
                                                    return { input: e, isFilled: !e.required };
                                                }),
                                                o = Array.from(t.querySelectorAll("input[type=checkbox]")).map(function (e) {
                                                    return e.checked ? { checkbox: e, isFilled: !0 } : { checkbox: e, isFilled: !1 };
                                                });
                                            e.onFill(i, o, n);
                                        });
                            },
                        },
                        {
                            key: "removeQueryParams",
                            value: function () {
                                if (document.referrer) {
                                    var e,
                                        t = new URL(window.location.href),
                                        n = a(new URL(document.referrer).searchParams);
                                    try {
                                        for (n.s(); !(e = n.n()).done; ) {
                                            var i = r(e.value, 2),
                                                o = i[0];
                                            i[1];
                                            t.searchParams.delete(o);
                                        }
                                    } catch (e) {
                                        n.e(e);
                                    } finally {
                                        n.f();
                                    }
                                    window.history.replaceState(null, null, t);
                                }
                            },
                        },
                        {
                            key: "checkEmailStruct",
                            value: function (e) {
                                return e.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
                            },
                        },
                        {
                            key: "isValidTextarea",
                            value: function (e) {
                                return (!!this.$useRegex && e && e.toLowerCase().match(d)) || e.length >= 15;
                            },
                        },
                        {
                            key: "onFill",
                            value: function (e, t, n) {
                                var i = this;
                                e.length &&
                                    e.forEach(function (o) {
                                        "email" === o.input.type &&
                                            o.input.addEventListener("change", function () {
                                                setTimeout(function () {
                                                    i.checkEmailStruct(o.input.value) && (o.input.classList.contains("error") || ((o.isFilled = !0), i.setDisplay(e, t, n)));
                                                }, 750);
                                            }),
                                            o.input.addEventListener("keyup", function () {
                                                if ("textarea" === o.input.type) {
                                                    var r = o.input.value;
                                                    (i.$error.innerHTML = ""), r.length ? (i.isValidTextarea(r) ? ((o.isFilled = !0), i.setDisplay(e, t, n)) : (i.$error.innerHTML = f)) : (i.$error.innerHTML = "");
                                                }
                                            }),
                                            o.input.addEventListener("input", function () {
                                                if (("tel" === o.input.type && o.input.value.length > 5) || o.input.value)
                                                    switch (o.input.type) {
                                                        case "email":
                                                            clearTimeout(i.timerEmail),
                                                                (i.timerEmail = setTimeout(function () {
                                                                    i.checkEmailStruct(o.input.value) && (o.input.classList.contains("error") || ((o.isFilled = !0), i.setDisplay(e, t, n)));
                                                                    console.log("input this.$userEmail", i.$userEmail);
                                                                }, 1200));
                                                            break;
                                                        case "textarea":
                                                            break;
                                                        default:
                                                            (o.isFilled = !0), i.setDisplay(e, t, n);
                                                    }
                                            });
                                    }),
                                    t &&
                                        t.forEach(function (o) {
                                            o.checkbox.addEventListener("change", function () {
                                                n <= i.$fieldSets.length &&
                                                    ("Other" === o.checkbox.value
                                                        ? ((o.isFilled = !o.isFilled),
                                                          t.forEach(function (e, t) {
                                                              "Other" !== e.checkbox.value &&
                                                                  (o.isFilled
                                                                      ? ((e.checkbox.disabled = !0),
                                                                        e.checkbox.checked && ((e.checkbox.checked = !1), e.checkbox.dispatchEvent(new Event("change")), i.$checkedCheckboxes.add(t)),
                                                                        i.nodeElement.querySelector(".hubspot-checkboxes__list").children[t].querySelector("span").classList.add("disabled"))
                                                                      : ((e.checkbox.disabled = !1),
                                                                        (e.checkbox.checked = i.$checkedCheckboxes.has(t)),
                                                                        i.$checkedCheckboxes.delete(t),
                                                                        e.checkbox.dispatchEvent(new Event("change")),
                                                                        i.nodeElement.querySelector(".hubspot-checkboxes__list").children[t].querySelector("span").classList.remove("disabled")));
                                                          }))
                                                        : (o.isFilled = !o.isFilled),
                                                    i.setDisplay(e, t, n));
                                            });
                                        });
                            },
                        },
                        {
                            key: "setDisplay",
                            value: function (e, t, n) {
                                var i = this,
                                    o =
                                        !e.length ||
                                        e.every(function (e) {
                                            return !0 === e.isFilled;
                                        }),
                                    r =
                                        !t.length ||
                                        t.some(function (e) {
                                            return !0 === e.isFilled;
                                        });
                                if (o && r) {
                                    if (this.$hasProgressBar) 0 === n && (document.querySelector(".js-contact-form").style.overflow = "hidden"), (document.querySelector("#progress-bar__item-" + n).style.backgroundPosition = "left");
                                    if (n === this.$fieldSets.length - 1) return;
                                    this.$fieldSets[n + 1].style.removeProperty("display"),
                                        setTimeout(function () {
                                            i.$fieldSets[n + 1].style.opacity = 1;
                                        }, 150);
                                }
                            },
                        },
                        {
                            key: "getInputs",
                            value: function (e) {
                                var t = [];
                                return (
                                    e.getElementsByTagName("div").forEach(function (e) {
                                        if (e.classList.contains("hs-fieldtype-text") || e.classList.contains("hs-fieldtype-intl-phone")) {
                                            var n = e.querySelector("input");
                                            t.push(n);
                                        } else if (e.classList.contains("hs-fieldtype-textarea")) {
                                            var i = e.querySelector("textarea");
                                            t.push(i);
                                        }
                                    }),
                                    t
                                );
                            },
                        },
                        {
                            key: "wait",
                            value: function (e) {
                                return new Promise(function (t) {
                                    return setTimeout(t, e);
                                });
                            },
                        },
                        {
                            key: "fetchRetry",
                            value: function (e, t, n) {
                                var i = this,
                                    o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                                    r = function (r) {
                                        if (0 === n) throw r;
                                        return i.wait(t).then(function () {
                                            return i.fetchRetry(e, t, n - 1, o);
                                        });
                                    };
                                return fetch(e, o).catch(r);
                            },
                        },
                        {
                            key: "getVidByEmail",
                            value:
                                ((e = i().mark(function e(t) {
                                    var n, o;
                                    return i().wrap(
                                        function (e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        return (e.prev = 0), (e.next = 3), this.fetchRetry("https://svc.arcloud.banuba.net/arcloud/vid", 2e3, 5, { method: "POST", body: JSON.stringify({ email: t }) });
                                                    case 3:
                                                        return (n = e.sent), (e.next = 6), n.json();
                                                    case 6:
                                                        return (o = e.sent), e.abrupt("return", null == o ? void 0 : o.vid);
                                                    case 10:
                                                        return (e.prev = 10), (e.t0 = e.catch(0)), e.abrupt("return", void 0);
                                                    case 13:
                                                    case "end":
                                                        return e.stop();
                                                }
                                        },
                                        e,
                                        this,
                                        [[0, 10]]
                                    );
                                })),
                                (t = function () {
                                    var t = this,
                                        n = arguments;
                                    return new Promise(function (i, r) {
                                        var a = e.apply(t, n);
                                        function s(e) {
                                            o(a, i, r, s, l, "next", e);
                                        }
                                        function l(e) {
                                            o(a, i, r, s, l, "throw", e);
                                        }
                                        s(void 0);
                                    });
                                }),
                                function (e) {
                                    return t.apply(this, arguments);
                                }),
                        },
                        {
                            key: "addFocused",
                            value: function (e) {
                                e.classList.add("focused");
                            },
                        },
                        {
                            key: "removeFocused",
                            value: function (e) {
                                e.classList.remove("focused");
                            },
                        },
                        {
                            key: "onInputFocused",
                            value: function (e, t) {
                                var n = this;
                                e.addEventListener("focus", function () {
                                    n.addFocused(t);
                                });
                            },
                        },
                        {
                            key: "onInputBlur",
                            value: function (e, t) {
                                var n = this;
                                e.addEventListener("blur", function () {
                                    e.value || n.removeFocused(t);
                                });
                            },
                        },
                        {
                            key: "check",
                            value: function () {
                                var e, t;
                                (null === (e = this.$textFields) || void 0 === e ? void 0 : e.length) > 0 ||
                                    ((null === this.$formHubspot || (null === (t = this.$formHubspot.innerHTML.trim()) || void 0 === t ? void 0 : t.length) > 10) && (this.process(), this.timer && clearInterval(this.timer)));
                            },
                        },
                        {
                            key: "checkSuccess",
                            value: function () {
                                this.$formHubspot && this.$formHubspot.classList.contains("submitted-message") && ((window.CONTACT_FORM_SUBMITTED = !0), this.successTimer && clearInterval(this.successTimer));
                            },
                        },
                        {
                            key: "init",
                            value: function () {
                                (this.timer = setInterval(this.check.bind(this), 10)), (this.successTimer = setInterval(this.checkSuccess.bind(this), 10));
                            },
                        },
                    ]
                );
                var e, t;
            })();
        document.addEventListener("DOMContentLoaded", function () {
            document.querySelectorAll(".js-contact-form").forEach(function (e) {
                return new p(e);
            });
        });
    },
    836: function (e, t) {
        function n(e) {
            return (n =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      })(e);
        }
        function i(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, o(i.key), i);
            }
        }
        function o(e) {
            var t = (function (e, t) {
                if ("object" != n(e) || !e) return e;
                var i = e[Symbol.toPrimitive];
                if (void 0 !== i) {
                    var o = i.call(e, t || "default");
                    if ("object" != n(o)) return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == n(t) ? t : t + "";
        }
        var r = (function () {
            return (
                (e = function e(t, n, i, o) {
                    !(function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                        (this.nodeElement = t),
                        (this.btnShare = n),
                        (this.btnClose = i),
                        (this.contentShare = o),
                        this.openShare(),
                        this.closeShare();
                }),
                (t = [
                    {
                        key: "openShare",
                        value: function () {
                            var e = this;
                            this.btnShare.addEventListener("click", function (t) {
                                t.preventDefault(), e.contentShare.classList.contains("active") ? e.contentShare.classList.remove("active") : e.contentShare.classList.add("active");
                            });
                        },
                    },
                    {
                        key: "closeShare",
                        value: function () {
                            var e = this;
                            this.btnClose.addEventListener("click", function (t) {
                                t.preventDefault(), e.contentShare.classList.contains("active") ? e.contentShare.classList.remove("active") : e.contentShare.classList.add("active");
                            });
                        },
                    },
                ]) && i(e.prototype, t),
                n && i(e, n),
                Object.defineProperty(e, "prototype", { writable: !1 }),
                e
            );
            var e, t, n;
        })();
        function a() {
            setTimeout(function () {
                document.querySelectorAll(".js-share-section:not([data-init])").forEach(function (e) {
                    var t = e.querySelector(".content__share-btn"),
                        n = e.querySelector(".content__close-btn"),
                        i = e.querySelector(".content__share");
                    if (t && n && i) return (e.dataset.init = "true"), new r(e, t, n, i);
                });
            });
        }
        document.addEventListener("DOMContentLoaded", a), document.addEventListener("domMutation", a), (window.shareSection = r);
    },
    837: function (e, t) {
        function n(e) {
            return (n =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      })(e);
        }
        function i(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, o(i.key), i);
            }
        }
        function o(e) {
            var t = (function (e, t) {
                if ("object" != n(e) || !e) return e;
                var i = e[Symbol.toPrimitive];
                if (void 0 !== i) {
                    var o = i.call(e, t || "default");
                    if ("object" != n(o)) return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == n(t) ? t : t + "";
        }
        var r = new ((function () {
            return (
                (e = function e() {
                    !(function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                        (this.elem = null),
                        (this.progress = null),
                        (this.screeHeight = null);
                }),
                (t = [
                    {
                        key: "addEvents",
                        value: function () {
                            var e = this;
                            onResize(this.getScreenHeight.bind(this)),
                                document.addEventListener(
                                    "scroll",
                                    function () {
                                        raf(function () {
                                            return e.onScroll();
                                        });
                                    },
                                    passiveIfSupported
                                );
                        },
                    },
                    {
                        key: "onScroll",
                        value: function () {
                            this.calcProgress(), this.drawProgress();
                        },
                    },
                    {
                        key: "calcProgress",
                        value: function () {
                            var e = getScrollPos(),
                                t = document.body.scrollHeight;
                            this.progress = (e + this.screeHeight) / t;
                        },
                    },
                    {
                        key: "drawProgress",
                        value: function () {
                            this.elem.style.transform = "scaleX(".concat(this.progress, ") translateZ(0)");
                        },
                    },
                    {
                        key: "getScreenHeight",
                        value: function () {
                            this.screeHeight = document.documentElement.clientHeight;
                        },
                    },
                    {
                        key: "init",
                        value: function () {
                            var e = document.querySelector(".js-scroll-progress");
                            if (!e) return !1;
                            this.getScreenHeight(), (this.elem = e), (this.progress = this.calcProgress()), this.drawProgress(), this.addEvents();
                        },
                    },
                ]) && i(e.prototype, t),
                n && i(e, n),
                Object.defineProperty(e, "prototype", { writable: !1 }),
                e
            );
            var e, t, n;
        })())();
        window.initScrollProgress = r.init.bind(r);
    },
    838: function (e, t) {
        function n(e) {
            return (n =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      })(e);
        }
        function i(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, o(i.key), i);
            }
        }
        function o(e) {
            var t = (function (e, t) {
                if ("object" != n(e) || !e) return e;
                var i = e[Symbol.toPrimitive];
                if (void 0 !== i) {
                    var o = i.call(e, t || "default");
                    if ("object" != n(o)) return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == n(t) ? t : t + "";
        }
        var r = (function () {
            return (
                (e = function e(t) {
                    !(function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                        (this.node = t),
                        (this.header = document.querySelector(".header")),
                        this.header && ((this.headerHeight = null), (this.scrollPosition = null), this.init(), this.updateCache());
                }),
                (t = [
                    {
                        key: "events",
                        value: function () {
                            !1 === Layout.isMobileLayout() && (this.node.style.transform = ""),
                                !1 === Layout.isMobileLayout() && this.node.classList.contains("fixed") && this.node.classList.remove("fixed"),
                                !1 !== Layout.isMobileLayout() &&
                                    (this.scrollPosition > window.innerHeight ? (this.node.style.transform = "translateY(".concat(this.headerHeight, "px)")) : (this.node.style.transform = ""),
                                    this.scrollPosition > this.headerHeight ? this.node.classList.add("fixed") : this.node.classList.remove("fixed"));
                        },
                    },
                    {
                        key: "updateCache",
                        value: function () {
                            (this.scrollPosition = getScrollPos()), (this.headerHeight = this.header ? this.header.getBoundingClientRect().height : null);
                        },
                    },
                    {
                        key: "init",
                        value: function () {
                            onResize(this.updateCache.bind(this)), onScroll(this.updateCache.bind(this)), onResize(this.events.bind(this)), onScroll(this.events.bind(this));
                        },
                    },
                ]) && i(e.prototype, t),
                n && i(e, n),
                Object.defineProperty(e, "prototype", { writable: !1 }),
                e
            );
            var e, t, n;
        })();
        document.addEventListener("DOMContentLoaded", function () {
            var e = document.querySelector(".js-blog-tabs");
            e && new r(e);
        });
    },
    839: function (e, t) {
        function n(e) {
            return (n =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      })(e);
        }
        function i(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, o(i.key), i);
            }
        }
        function o(e) {
            var t = (function (e, t) {
                if ("object" != n(e) || !e) return e;
                var i = e[Symbol.toPrimitive];
                if (void 0 !== i) {
                    var o = i.call(e, t || "default");
                    if ("object" != n(o)) return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == n(t) ? t : t + "";
        }
        var r = (function () {
            return (
                (e = function e(t) {
                    !(function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                        (this.node = t),
                        (this.closeButton = this.node.querySelector(".subscribe-popup__close")),
                        this.init();
                }),
                (t = [
                    {
                        key: "events",
                        value: function () {
                            var e = this;
                            (this.node.style.visibility = "visible"),
                                (this.node.style.opacity = "1"),
                                this.closeButton.addEventListener("click", function () {
                                    e.node.style.opacity = "0";
                                    var t = function () {
                                        return setTimeout(function () {
                                            e.node.style.display = "none";
                                        }, 1e3);
                                    };
                                    t(), clearTimeout(t()), localStorage.setItem("isKoodallSubscribePopupWatched", "true");
                                });
                        },
                    },
                    {
                        key: "checkLS",
                        value: function () {
                            return localStorage.getItem("isKoodallSubscribePopupWatched");
                        },
                    },
                    {
                        key: "timer",
                        value: function () {
                            setTimeout(this.events.bind(this), 0);
                        },
                    },
                    {
                        key: "init",
                        value: function () {
                            null === this.checkLS() && (this.timer(), clearTimeout(this.timer.bind(this)));
                        },
                    },
                ]) && i(e.prototype, t),
                n && i(e, n),
                Object.defineProperty(e, "prototype", { writable: !1 }),
                e
            );
            var e, t, n;
        })();
        document.addEventListener("DOMContentLoaded", function () {
            var e = document.querySelector(".js-subscribe-popup");
            e && new r(e);
        });
    },
    840: function (e, t) {
        function n(e) {
            return (n =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      })(e);
        }
        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function o(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, a(i.key), i);
            }
        }
        function r(e, t, n) {
            return t && o(e.prototype, t), n && o(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
        }
        function a(e) {
            var t = (function (e, t) {
                if ("object" != n(e) || !e) return e;
                var i = e[Symbol.toPrimitive];
                if (void 0 !== i) {
                    var o = i.call(e, t || "default");
                    if ("object" != n(o)) return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == n(t) ? t : t + "";
        }
        var s = !1,
            l = (function () {
                function e(t) {
                    i(this, e),
                        (this.node = t),
                        (this.wrapper = this.node.querySelector(".js-wl-wrapper")),
                        (this.screens = this.node.querySelectorAll(".js-wl-screen")),
                        (this.offset = null),
                        (this.isWheelEventInited = !1),
                        (this.movementCounter = 0),
                        (this.inited = !1),
                        (this.isFirstInit = !0),
                        (this.isScrollingNow = !1),
                        (this.isSmallTabletLayout = null),
                        (this.scrollToButtons = document.querySelectorAll(".js-scroll-to")),
                        this.events(),
                        onResize(this.events.bind(this));
                }
                return r(
                    e,
                    [
                        {
                            key: "events",
                            value: function () {
                                var e = this;
                                (this.isSmallTabletLayout = window.innerWidth <= 1025 || window.innerHeight < 600),
                                    this.scrollToButtons.forEach(function (t) {
                                        t.addEventListener("click", function () {
                                            (e.isScrollingNow = !0),
                                                ((1 !== e.movementCounter && e.isWheelEventInited) || (0 !== e.movementCounter && e.isWheelEventInited)) &&
                                                    (e.movementCounter < 1
                                                        ? ((e.movementCounter = -2), (e.wrapper.style.transform = "translateY(".concat(0, "px)")))
                                                        : ((e.movementCounter = 3), (e.wrapper.style.transform = "translateY(".concat(-e.offset, "px)"))),
                                                    (e.isWheelEventInited = !1)),
                                                setTimeout(function () {
                                                    return (e.isScrollingNow = !1);
                                                }, 1200);
                                        });
                                    }),
                                    Promise.resolve()
                                        .then(function () {
                                            e.isSmallTabletLayout && ((e.wrapper.style.transform = "translateY(".concat(0, "px)")), (e.isFirstInit = !1)),
                                                e.isFirstInit && startScrollTo(document.querySelector(".page")),
                                                (e.isFirstInit = !1);
                                        })
                                        .then(function () {
                                            setTimeout(function () {
                                                (e.offset = e.screens[1].getBoundingClientRect().height),
                                                    0 === e.movementCounter && (e.wrapper.style.transform = "translateY(".concat(0, "px)")),
                                                    1 === e.movementCounter && (e.wrapper.style.transform = "translateY(".concat(-e.offset - 160, "px)")),
                                                    onScroll(e.initObserver.bind(e));
                                            }, 1e3);
                                        });
                            },
                        },
                        {
                            key: "initObserver",
                            value: function () {
                                var e = this;
                                if (!this.isScrollingNow) {
                                    s = this.isWheelEventInited;
                                    new IntersectionObserver(
                                        function (t) {
                                            t.forEach(function (t) {
                                                return e.scrollStatements(t);
                                            });
                                        },
                                        { root: null, rootMargin: "100px", threshold: 1 }
                                    ).observe(this.node);
                                }
                            },
                        },
                        {
                            key: "scrollStatements",
                            value: function (e) {
                                ((!e.isIntersecting || this.isScrollingNow || this.isWheelEventInited || 0 !== this.movementCounter) && (!e.isIntersecting || this.isScrollingNow || this.isWheelEventInited || 1 !== this.movementCounter)) ||
                                    ((this.isWheelEventInited = !0), this.isSmallTabletLayout ? this.commonEvents() : this.desktopEvents());
                            },
                        },
                        {
                            key: "desktopEvents",
                            value: function () {
                                var e = this;
                                Promise.resolve()
                                    .then(startScrollTo(this.node, 100))
                                    .then(hideScrollbar())
                                    .then(function () {
                                        return e.commonEvents();
                                    });
                            },
                        },
                        {
                            key: "commonEvents",
                            value: function () {
                                var e = this,
                                    t = function (n) {
                                        e.inited ||
                                            ((e.inited = !0),
                                            (n.deltaY || n.details || 0) > 0 ? ++e.movementCounter : --e.movementCounter,
                                            (function () {
                                                switch (e.movementCounter) {
                                                    case -3:
                                                    case -2:
                                                    case -1:
                                                        (e.movementCounter = 0),
                                                            showScrollbar(),
                                                            document.removeEventListener("wheel", t),
                                                            setTimeout(function () {
                                                                return (e.isWheelEventInited = !1);
                                                            }, 1e3);
                                                        break;
                                                    case 0:
                                                        e.wrapper.style.transform = "translateY(".concat(0, "px)");
                                                        break;
                                                    case 1:
                                                        e.wrapper.style.transform = "translateY(".concat(-e.offset - 160, "px)");
                                                        break;
                                                    case 2:
                                                    case 3:
                                                    case 4:
                                                        showScrollbar(),
                                                            (e.movementCounter = 1),
                                                            document.removeEventListener("wheel", t),
                                                            setTimeout(function () {
                                                                return (e.isWheelEventInited = !1);
                                                            }, 1e3);
                                                }
                                            })(),
                                            setTimeout(function () {
                                                e.inited = !1;
                                            }, 1500),
                                            e.isScrollingNow && document.removeEventListener("wheel", t));
                                    };
                                this.isSmallTabletLayout || this.isScrollingNow ? document.removeEventListener("wheel", t) : document.addEventListener("wheel", t);
                            },
                        },
                    ],
                    [
                        {
                            key: "init",
                            value: function (t) {
                                new e(t);
                            },
                        },
                    ]
                );
            })(),
            c = (function () {
                function e(t) {
                    i(this, e),
                        (this.nodeElement = t),
                        (this.timeout = +this.nodeElement.dataset.timeout || 5e3),
                        (this.isSmallTabletLayout = null),
                        (this.sliderInnerContainer = this.nodeElement.querySelectorAll(".slider-slide__container")),
                        (this.pagination = t.querySelector(".js-whitelabel-slider__pagination")),
                        (this.slidesCount = t.querySelectorAll(".swiper-slide").length),
                        (this.startTime = null),
                        (this.elapsedTime = null),
                        (this.timeFraction = null),
                        (this.activeSlideElement = null),
                        (this.activeSlideElementProgress = null),
                        (this.swiper = null),
                        this.init(),
                        onResize(this.init.bind(this));
                }
                return r(
                    e,
                    [
                        {
                            key: "init",
                            value: function () {
                                var e = this;
                                (this.isSmallTabletLayout = window.innerWidth <= 1025 || window.innerHeight < 600),
                                    this.isSmallTabletLayout
                                        ? this.swiper && (this.swiper.destroy(!0, !0), (this.swiper = null))
                                        : null !== this.swiper
                                        ? (this.onSlideChange(),
                                          this.nodeElement.addEventListener("click", function (t) {
                                              var n = t.target;
                                              if (n.classList.contains("js-whitelabel-slider__pagination") || n.classList.contains("js-whitelabel-slider__bullet") || n.classList.contains("js-whitelabel-slider__progress")) return null;
                                              e.swiper && s && e.swiper.slideNext();
                                          }))
                                        : this.initSwiper();
                            },
                        },
                        {
                            key: "initSwiper",
                            value: function () {
                                (this.swiper = new Swiper(this.nodeElement, {
                                    effect: "fade",
                                    loop: !0,
                                    speed: 1e3,
                                    autoplay: !1,
                                    on: { init: this.onSlideChange.bind(this), slideChange: this.onSlideChange.bind(this) },
                                    fadeEffect: { crossFade: !0 },
                                })),
                                    this.updateActiveSlideElement();
                            },
                        },
                        {
                            key: "onSlideChange",
                            value: function () {
                                this.updateActiveSlideElement(), this.resetProgress(), this.startProgress();
                            },
                        },
                        {
                            key: "prepareHtmlPaginationForSlide",
                            value: function (e, t) {
                                var n = this;
                                if (!e.querySelector(".js-whitelabel-slider__pagination")) {
                                    var i = document.createElement("div");
                                    i.classList.add("js-whitelabel-slider__pagination");
                                    for (
                                        var o = function () {
                                                var e = document.createElement("div");
                                                if ((e.classList.add("js-whitelabel-slider__bullet"), r === t)) {
                                                    var o = document.createElement("div");
                                                    o.classList.add("js-whitelabel-slider__progress"), e.appendChild(o);
                                                }
                                                i.appendChild(e),
                                                    (function (t) {
                                                        e.addEventListener("click", function (e) {
                                                            e.preventDefault(),
                                                                n.swiper.realIndex !== t &&
                                                                    (n.swiper.realIndex === n.slidesCount - 1 && 0 === t
                                                                        ? n.swiper.slideNext()
                                                                        : 0 === n.swiper.realIndex && t === n.slidesCount - 1
                                                                        ? n.swiper.slidePrev()
                                                                        : n.swiper.slideTo(t + 1));
                                                        });
                                                    })(r);
                                            },
                                            r = 0;
                                        r < this.slidesCount;
                                        r++
                                    )
                                        o();
                                    e.appendChild(i);
                                }
                            },
                        },
                        {
                            key: "updateActiveSlideElement",
                            value: function () {
                                this.swiper &&
                                    this.swiper.slides &&
                                    ((this.activeSlideElement = this.swiper.slides[this.swiper.activeIndex]),
                                    this.prepareHtmlPaginationForSlide(this.activeSlideElement, this.swiper.realIndex),
                                    this.activeSlideElement ? (this.activeSlideElementProgress = this.activeSlideElement.querySelector(".js-whitelabel-slider__progress")) : (this.activeSlideElementProgress = null));
                            },
                        },
                        {
                            key: "toNextSlide",
                            value: function () {
                                this.swiper.slideNext();
                            },
                        },
                        {
                            key: "timing",
                            value: function (e) {
                                return e;
                            },
                        },
                        {
                            key: "animate",
                            value: function (e) {
                                var t = (e - this.startTime + this.elapsedTime) / this.timeout;
                                t > 1 && (t = 1);
                                var n = this.timing(t);
                                this.drawProgress(n), t < 1 ? (this.animationId = raf(this.animate.bind(this))) : this.toNextSlide();
                            },
                        },
                        {
                            key: "drawProgress",
                            value: function (e) {
                                this.activeSlideElementProgress && (this.activeSlideElementProgress.style.transform = "scaleY(".concat(e, ")"));
                            },
                        },
                        {
                            key: "startProgress",
                            value: function () {
                                (this.activeSlideElement = this.swiper ? this.swiper.slides[this.swiper.activeIndex] : null), (this.startTime = performance.now()), (this.elapsedTime = 0), (this.animationId = raf(this.animate.bind(this)));
                            },
                        },
                        {
                            key: "resetProgress",
                            value: function () {
                                (this.startTime = null), (this.elapsedTime = null), (this.timeFraction = null), this.drawProgress(0);
                            },
                        },
                    ],
                    [
                        {
                            key: "init",
                            value: function (t) {
                                new e(t);
                            },
                        },
                    ]
                );
            })();
        document.addEventListener("DOMContentLoaded", function () {
            document.querySelectorAll(".js-wl-section").forEach(function (e) {
                return l.init(e);
            }),
                document.querySelectorAll(".js-whitelabel-slider").forEach(function (e) {
                    return c.init(e);
                });
        });
    },
    841: function (e, t) {
        function n(e) {
            return (n =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      })(e);
        }
        function i(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, o(i.key), i);
            }
        }
        function o(e) {
            var t = (function (e, t) {
                if ("object" != n(e) || !e) return e;
                var i = e[Symbol.toPrimitive];
                if (void 0 !== i) {
                    var o = i.call(e, t || "default");
                    if ("object" != n(o)) return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == n(t) ? t : t + "";
        }
        var r = (function () {
            function e(t) {
                !(function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                })(this, e),
                    (this.$node = t),
                    (this.$close = this.$node.querySelector(".article-cta-modal__close")),
                    (this.lsKey = "".concat(encodeURIComponent(document.location.href), "-cta-modal-").concat(this.$node.dataset.ctaModal)),
                    (this.lsLocalKey = localStorage.getItem("".concat(this.lsKey))),
                    this.events();
            }
            return (
                (t = e),
                (o = [
                    {
                        key: "init",
                        value: function (t) {
                            new e(t);
                        },
                    },
                ]),
                (n = [
                    {
                        key: "events",
                        value: function () {
                            var e = this;
                            switch (this.lsLocalKey) {
                                case null:
                                case "1":
                                    this.show(this.$node);
                                    break;
                                default:
                                    return null;
                            }
                            this.show(this.$node),
                                this.$close.addEventListener("click", function (t) {
                                    return t.preventDefault(), e.$node.classList.contains("active") && e.hide(e.$node), null;
                                });
                        },
                    },
                    {
                        key: "show",
                        value: function (e) {
                            e.addEventListener(endEvents.transition, e.classList.add("active"));
                        },
                    },
                    {
                        key: "hide",
                        value: function (e) {
                            switch (this.lsLocalKey) {
                                case null:
                                    localStorage.setItem("".concat(this.lsKey), "1");
                                    break;
                                case "1":
                                    localStorage.setItem("".concat(this.lsKey), "2");
                                    break;
                                default:
                                    return null;
                            }
                            e.addEventListener(endEvents.transition, e.classList.remove("active"));
                        },
                    },
                ]) && i(t.prototype, n),
                o && i(t, o),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                t
            );
            var t, n, o;
        })();
        document.addEventListener("DOMContentLoaded", function () {
            setTimeout(function () {
                document.querySelectorAll(".js-cta-modal").forEach(function (e) {
                    return r.init(e);
                });
            }, 1500);
        });
    },
    842: function (e, t) {
        function n(e) {
            return (n =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      })(e);
        }
        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function o(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, a(i.key), i);
            }
        }
        function r(e, t, n) {
            return t && o(e.prototype, t), n && o(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
        }
        function a(e) {
            var t = (function (e, t) {
                if ("object" != n(e) || !e) return e;
                var i = e[Symbol.toPrimitive];
                if (void 0 !== i) {
                    var o = i.call(e, t || "default");
                    if ("object" != n(o)) return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == n(t) ? t : t + "";
        }
        var s = (function () {
                return r(
                    function e(t) {
                        i(this, e), (this.nodeElement = t), (this.visible = !1), this.init();
                    },
                    [
                        {
                            key: "init",
                            value: function () {
                                this.bindEvents(), this.update();
                            },
                        },
                        {
                            key: "bindEvents",
                            value: function () {
                                var e = this;
                                this.nodeElement.addEventListener("click", function (e) {
                                    e.preventDefault(), ScrollTo.scrollToY(0);
                                }),
                                    window.addEventListener("scroll", function (t) {
                                        e.update();
                                    });
                            },
                        },
                        {
                            key: "show",
                            value: function () {
                                this.visible || (this.nodeElement.classList.add("visible"), (this.visible = !0));
                            },
                        },
                        {
                            key: "hide",
                            value: function () {
                                this.visible && (this.nodeElement.classList.remove("visible"), (this.visible = !1));
                            },
                        },
                        {
                            key: "update",
                            value: function () {
                                (self.pageYOffset ? self.pageYOffset : document.documentElement && document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop ? document.body.scrollTop : 0) >
                                window.innerHeight
                                    ? this.show()
                                    : this.hide();
                            },
                        },
                    ]
                );
            })(),
            l = (function () {
                return r(
                    function e() {
                        i(this, e);
                    },
                    null,
                    [
                        {
                            key: "initOnLoad",
                            value: function () {
                                document.addEventListener("DOMContentLoaded", this.init);
                            },
                        },
                        {
                            key: "init",
                            value: function () {
                                document.querySelectorAll(".js-scroll-up").forEach(function (e) {
                                    e.dataset.initialized || ((e.dataset.initialized = !0), new s(e));
                                });
                            },
                        },
                    ]
                );
            })();
        l.initOnLoad(), (window.ScrollUpUi = l);
    },
    843: function (e, t) {
        function n(e) {
            return (n =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      })(e);
        }
        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function o(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, a(i.key), i);
            }
        }
        function r(e, t, n) {
            return t && o(e.prototype, t), n && o(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
        }
        function a(e) {
            var t = (function (e, t) {
                if ("object" != n(e) || !e) return e;
                var i = e[Symbol.toPrimitive];
                if (void 0 !== i) {
                    var o = i.call(e, t || "default");
                    if ("object" != n(o)) return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == n(t) ? t : t + "";
        }
        var s = (function () {
            return r(
                function e() {
                    i(this, e);
                },
                null,
                [
                    {
                        key: "startAnimation",
                        value: function (e) {
                            var t = window.pageYOffset,
                                n = e.getBoundingClientRect().top - 75,
                                i = performance.now();
                            raf(function e(o) {
                                var r = o - i,
                                    a = ((s = r), (l = t), (c = n), (u = 600), (s /= u / 2) < 1 ? (c / 2) * s * s * s + l : (c / 2) * ((s -= 2) * s * s + 2) + l);
                                var s, l, c, u;
                                scrollTo(0, a), r < 600 && raf(e);
                            });
                        },
                    },
                ]
            );
        })();
        function l(e) {
            var t = self.pageYOffset ? self.pageYOffset : document.documentElement && document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop ? document.body.scrollTop : 0,
                n = e > t ? e - t : t - e;
            if (n < 100) scrollTo(0, e);
            else {
                var i = Math.round(n / 100);
                i >= 20 && (i = 20);
                var o = Math.round(n / 25),
                    r = e > t ? t + o : t - o,
                    a = 0;
                if (!(e > t)) {
                    for (s = t; s > e; s -= o) setTimeout("window.scrollTo(0, " + r + ")", a * i), (r -= o) < e && (r = e), a++;
                    return !1;
                }
                for (var s = t; s < e; s += o) setTimeout("window.scrollTo(0, " + r + ")", a * i), (r += o) > e && (r = e), a++;
            }
        }
        var c = (function () {
            return r(
                function e() {
                    i(this, e);
                },
                null,
                [
                    { key: "init", value: function () {} },
                    {
                        key: "scrollToElement",
                        value: function (e) {
                            s.startAnimation(e);
                        },
                    },
                    {
                        key: "scrollToY",
                        value: function (e) {
                            l(e);
                        },
                    },
                ]
            );
        })();
        document.addEventListener("DOMContentLoaded", function () {
            c.init();
            var e = document.querySelector(".js-scroll-on-load");
            e && Layout.isDesktopLayout() && c.scrollToElement(e);
        }),
            (window.ScrollTo = c);
    },
    844: function (e, t) {
        function n(e) {
            return (n =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      })(e);
        }
        function i(e) {
            return (
                (function (e) {
                    if (Array.isArray(e)) return o(e);
                })(e) ||
                (function (e) {
                    if (("undefined" != typeof Symbol && null != e[Symbol.iterator]) || null != e["@@iterator"]) return Array.from(e);
                })(e) ||
                (function (e, t) {
                    if (e) {
                        if ("string" == typeof e) return o(e, t);
                        var n = {}.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? o(e, t) : void 0;
                    }
                })(e) ||
                (function () {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                })()
            );
        }
        function o(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
            return i;
        }
        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function a(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, s(i.key), i);
            }
        }
        function s(e) {
            var t = (function (e, t) {
                if ("object" != n(e) || !e) return e;
                var i = e[Symbol.toPrimitive];
                if (void 0 !== i) {
                    var o = i.call(e, t || "default");
                    if ("object" != n(o)) return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == n(t) ? t : t + "";
        }
        var l = { levels: "h2, h3, h4, h5, h6", heading: "Table of Contents", headingLevel: "h2", listType: "ul" },
            c = (function () {
                return (
                    (e = function e(t, n) {
                        var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        r(this, e),
                            (this.contentElement = document.querySelector(t)),
                            this.contentElement &&
                                ((this.keyword = n || "[navigation]"),
                                (this.options = i),
                                (this.settings = {}),
                                (this.headings = null),
                                (this.tocId = 0),
                                (this.articleInner = document.querySelector(".article-inner")),
                                (this.headers = this.articleInner.querySelectorAll("h2")),
                                (this.lastId = null),
                                this.init());
                    }),
                    (t = [
                        {
                            key: "merge",
                            value: function (e) {
                                for (var t in l) Object.prototype.hasOwnProperty.call(l, t) && (this.settings[t] = Object.prototype.hasOwnProperty.call(e, t) ? e[t] : l[t]);
                            },
                        },
                        {
                            key: "createID",
                            value: function (e) {
                                e.id.length || (e.id = "toc-".concat(this.tocId++, "-").concat(String(e.textContent.replace(/[^A-Za-z0-9]/g, "-")).toLowerCase()));
                            },
                        },
                        {
                            key: "getIndent",
                            value: function (e) {
                                for (var t = "", n = 0; n < e; n++) t += "<".concat(this.settings.listType, ">");
                                return t;
                            },
                        },
                        {
                            key: "getOutdent",
                            value: function (e) {
                                for (var t = "", n = 0; n < e; n++) t += "</".concat(this.settings.listType, "></li>");
                                return t;
                            },
                        },
                        {
                            key: "getStartingHTML",
                            value: function (e, t) {
                                return e > 0 ? this.getIndent(e) : e < 0 ? this.getOutdent(Math.abs(e)) : t && !e ? "</li>" : "";
                            },
                        },
                        {
                            key: "injectTOC",
                            value: function () {
                                var e = this,
                                    t = this.headings[0].tagName.slice(1),
                                    n = t,
                                    i = this.headings.length - 1,
                                    o = '\n            <div class="'
                                        .concat("article-navigation", '">\n                <')
                                        .concat(this.settings.headingLevel, ' class="')
                                        .concat("article-navigation__title", '">')
                                        .concat(this.settings.heading, "</")
                                        .concat(this.settings.headingLevel, ">\n                <")
                                        .concat(this.settings.listType, ' class="')
                                        .concat("article-navigation__list", '">\n                    ')
                                        .concat(
                                            this.headings
                                                .map(function (o, r) {
                                                    e.createID(o);
                                                    var a = o.tagName.slice(1),
                                                        s = a - t;
                                                    t = a;
                                                    var l = e.getStartingHTML(s, r);
                                                    return (
                                                        (l += '\n                            <li class="'
                                                            .concat("article-navigation__item", '">\n                                <a href="#')
                                                            .concat(o.id, '">')
                                                            .concat(o.innerHTML.trim(), "</a>\n                        ")),
                                                        r === i && (l += e.getOutdent(Math.abs(n - a))),
                                                        l
                                                    );
                                                })
                                                .join(""),
                                            "\n                </"
                                        )
                                        .concat(this.settings.listType, ">\n            </div>\n        ");
                                this.contentElement.innerHTML = String(this.contentElement.innerHTML).replace(this.keyword, "");
                                var r = document.createElement("div");
                                (r.innerHTML = o), this.articleInner.querySelector(".article-intro").after(r.firstElementChild);
                                var a = '\n            <div class="article-navigation--side__menu">\n                <'
                                        .concat(this.settings.headingLevel, ' class="article-navigation--side__title">')
                                        .concat(this.settings.heading, "</")
                                        .concat(this.settings.headingLevel, ">\n                <")
                                        .concat(this.settings.listType, ' class="article-navigation--side__list">\n                  <div class="article-navigation--side__list--inner">\n                    ')
                                        .concat(
                                            this.headings
                                                .map(function (o, r) {
                                                    e.createID(o);
                                                    var a = o.tagName.slice(1),
                                                        s = a - t;
                                                    t = a;
                                                    var l = e.getStartingHTML(s, r);
                                                    return (
                                                        (l += '\n                            <li class="article-navigation--side__item">\n                                <a '
                                                            .concat(0 === r ? 'class="active"' : "", ' href="#')
                                                            .concat(o.id, '">')
                                                            .concat(o.innerHTML.trim(), "</a>\n                        ")),
                                                        r === i && (l += e.getOutdent(Math.abs(n - a))),
                                                        l
                                                    );
                                                })
                                                .join(""),
                                            "\n                    </div>\n                </"
                                        )
                                        .concat(
                                            this.settings.listType,
                                            '>\n            </div>\n            <ul class="socials ">\n                <li class="socials__item">\n                  <button class="js-social-share" type="button" data-social="facebook"></button>\n                </li>\n                <li class="socials__item">\n                  <button class="js-social-share" type="button" data-social="linkedIn"></button>\n                </li>\n                <li class="socials__item">\n                  <button class="js-social-share" type="button" data-social="twitter"></button>\n                </li>\n                <li class="socials__item">\n                  <button class="js-copy" type="button" data-copy="clipboard">\n                    <span>Copied to clipboard</span>\n                  </button>\n                </li>\n              </ul>\n        '
                                        ),
                                    s = document.createElement("div");
                                (s.innerHTML = a), s.classList.add("article-navigation--side"), this.contentElement.querySelector(".article-left-side__image") && s.append();
                                var l = this.articleInner.querySelector(".article-left-side");
                                l.prepend(s), (l.style.display = "block");
                            },
                        },
                        {
                            key: "init",
                            value: function () {
                                this.merge(this.options || {}),
                                    this.contentElement.innerText.includes(this.keyword) &&
                                        ((this.headings = i(this.contentElement.querySelectorAll(String(this.settings.levels)))), this.headings.length && (this.injectTOC(), this.addEvents()));
                            },
                        },
                        {
                            key: "addEvents",
                            value: function () {
                                var e = this;
                                this.articleInner
                                    .querySelector(".article-navigation")
                                    .querySelectorAll("a")
                                    .forEach(function (t) {
                                        (e.lastId = t),
                                            t.addEventListener("click", function (e) {
                                                e.preventDefault();
                                                var n = t.href.split("#")[1],
                                                    i = document.getElementById(n);
                                                startScrollTo(i);
                                            });
                                    }),
                                    this.articleInner
                                        .querySelector(".article-navigation--side")
                                        .querySelectorAll("a")
                                        .forEach(function (t) {
                                            (e.lastId = t),
                                                t.addEventListener("click", function (n) {
                                                    n.preventDefault();
                                                    var i = e.articleInner.querySelector("a.active");
                                                    i && i.classList.remove("active"), t.classList.add("active");
                                                    var o = t.href.split("#")[1],
                                                        r = document.getElementById(o);
                                                    startScrollTo(r);
                                                });
                                        }),
                                    window.addEventListener("scroll", function () {
                                        var t = window.scrollY + 120,
                                            n = e.articleInner.querySelectorAll('h2[id^="toc-"]'),
                                            i = e.articleInner.querySelector(".article-navigation--side").querySelectorAll("a"),
                                            o = [n[0]];
                                        n.forEach(function (e, n) {
                                            0 !== n && e.offsetTop < t && o.push(e);
                                        }),
                                            e.lastId !== o[o.length - 1].id &&
                                                ((e.lastId = o[o.length - 1].id),
                                                i.forEach(function (t) {
                                                    if ((t.classList.remove("active"), t.getAttribute("href") === "#".concat(e.lastId))) {
                                                        t.classList.add("active");
                                                        var n = e.articleInner.querySelector(".article-navigation--side__list"),
                                                            i = n.getBoundingClientRect(),
                                                            o = t.getBoundingClientRect();
                                                        o.top + 10 >= i.bottom ? n.scroll({ top: i.height + o.height, behavior: "smooth" }) : o.bottom - 10 <= i.top && n.scroll({ top: o.height - o.height, behavior: "smooth" });
                                                    }
                                                }));
                                    });
                            },
                        },
                    ]) && a(e.prototype, t),
                    n && a(e, n),
                    Object.defineProperty(e, "prototype", { writable: !1 }),
                    e
                );
                var e, t, n;
            })();
        document.addEventListener("DOMContentLoaded", function () {
            new c(".js-blog-article", "[navigation]", { levels: "h2", heading: "TABLE OF CONTENTS", listType: "ul" });
        });
    },
    845: function (e, t) {
        function n(e) {
            return (n =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      })(e);
        }
        function i(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, o(i.key), i);
            }
        }
        function o(e) {
            var t = (function (e, t) {
                if ("object" != n(e) || !e) return e;
                var i = e[Symbol.toPrimitive];
                if (void 0 !== i) {
                    var o = i.call(e, t || "default");
                    if ("object" != n(o)) return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == n(t) ? t : t + "";
        }
        var r = (function () {
            function e(t) {
                !(function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                })(this, e),
                    (this.videoWrapper = t),
                    (this.video = this.videoWrapper.querySelector("video")),
                    (this.videoDesktop = this.video.src),
                    (this.videoPosterDesktop = this.video.getAttribute("poster")),
                    (this.videoTablet = this.video.dataset.tabletSrc),
                    (this.videoPosterTablet = this.video.dataset.tabletPoster),
                    (this.videoMobile = this.video.dataset.mobileSrc),
                    (this.videoPosterMobile = this.video.dataset.mobilePoster),
                    this.setVideo(),
                    this.update();
            }
            return (
                (t = e),
                (o = [
                    {
                        key: "init",
                        value: function (t) {
                            new e(t);
                        },
                    },
                ]),
                (n = [
                    {
                        key: "update",
                        value: function () {
                            onResize(this.setVideo.bind(this));
                        },
                    },
                    {
                        key: "setVideo",
                        value: function () {
                            isMobileLayout()
                                ? ((this.video.src = this.videoMobile), this.video.setAttribute("poster", "".concat(this.videoPosterMobile)))
                                : isSmallTabletLayout()
                                ? ((this.video.src = this.videoTablet), this.video.setAttribute("poster", "".concat(this.videoPosterTablet)))
                                : ((this.video.src = this.videoDesktop), this.video.setAttribute("poster", "".concat(this.videoPosterDesktop)));
                        },
                    },
                ]) && i(t.prototype, n),
                o && i(t, o),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                t
            );
            var t, n, o;
        })();
        document.addEventListener("DOMContentLoaded", function () {
            document.querySelectorAll(".js-video-update").forEach(function (e) {
                r.init(e);
            });
        });
    },
    846: function (e, t) {
        function n(e) {
            return (n =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      })(e);
        }
        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function o(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, a(i.key), i);
            }
        }
        function r(e, t, n) {
            return t && o(e.prototype, t), n && o(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
        }
        function a(e) {
            var t = (function (e, t) {
                if ("object" != n(e) || !e) return e;
                var i = e[Symbol.toPrimitive];
                if (void 0 !== i) {
                    var o = i.call(e, t || "default");
                    if ("object" != n(o)) return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == n(t) ? t : t + "";
        }
        var s = (function () {
                return r(
                    function e(t) {
                        i(this, e),
                            (this.nodeElement = t),
                            (this.grids = this.nodeElement.querySelectorAll(".js-effects-grid__item")),
                            (this.isMobile = !1),
                            (this.tabletBreakpoint = t.dataset.tabletBreakpoint || "tablet"),
                            (this.onDesktopClick = this.onDesktopClick.bind(this)),
                            this.init();
                    },
                    [
                        {
                            key: "enableDesktop",
                            value: function () {
                                var e = this;
                                this.grids.forEach(function (t) {
                                    t.addEventListener("click", function (t) {
                                        var n = t.target.closest(".js-effects-grid__item");
                                        n.classList.contains("active")
                                            ? n.classList.remove("active")
                                            : (e.grids.forEach(function (e) {
                                                  e.classList.remove("active");
                                              }),
                                              n.classList.add("active"));
                                    });
                                }),
                                    document.addEventListener("click", this.onDesktopClick);
                            },
                        },
                        {
                            key: "onDesktopClick",
                            value: function (e) {
                                e.target.closest(".js-effects-grid__item") ||
                                    this.grids.forEach(function (e) {
                                        e.classList.remove("active");
                                    });
                            },
                        },
                        {
                            key: "enableMobile",
                            value: function () {
                                var e = this;
                                (this.isMobile = !0),
                                    this.grids.forEach(function (t) {
                                        t.querySelector(".effects-grid__item-details") &&
                                            t.addEventListener("click", function (t) {
                                                var n = t.target.closest(".js-effects-grid__item");
                                                e.createOverlay(), e.createPopup(n);
                                            });
                                    });
                            },
                        },
                        {
                            key: "disableDesktop",
                            value: function () {
                                var e = this;
                                this.grids.forEach(function (t) {
                                    t.removeEventListener("click", function (t) {
                                        var n = t.target.closest(".js-effects-grid__item");
                                        n.classList.contains("active")
                                            ? n.classList.remove("active")
                                            : (e.grids.forEach(function (e) {
                                                  e.classList.remove("active");
                                              }),
                                              n.classList.add("active"));
                                    });
                                }),
                                    document.removeEventListener("click", this.onDesktopClick);
                            },
                        },
                        {
                            key: "disableMobile",
                            value: function () {
                                this.isMobile = !1;
                            },
                        },
                        {
                            key: "checkIfNeedMobileNow",
                            value: function () {
                                switch (this.tabletBreakpoint) {
                                    case "mobile":
                                        return Layout.isMobileLayout();
                                    case "small-tablet":
                                        return Layout.isTabletLayout();
                                    case "tablet":
                                        return Layout.isLaptopLayout();
                                    default:
                                        return !1;
                                }
                            },
                        },
                        {
                            key: "update",
                            value: function () {
                                !1 === this.isMobile && this.checkIfNeedMobileNow() ? this.enableMobile() : this.disableDesktop(), this.isMobile && !this.checkIfNeedMobileNow() ? this.disableMobile() : this.enableDesktop();
                            },
                        },
                        {
                            key: "createOverlay",
                            value: function () {
                                var e = this;
                                this.overlay
                                    ? this.overlay.classList.remove("not-visible")
                                    : ((this.overlay = document.createElement("div")),
                                      this.overlay.classList.add("popup-overlay"),
                                      document.body.appendChild(this.overlay),
                                      (document.body.style.overflow = "hidden"),
                                      this.overlay.addEventListener("click", function (t) {
                                          t.target.classList.contains("popup-overlay") && e.closePopup();
                                      }));
                            },
                        },
                        {
                            key: "hideOverlay",
                            value: function () {
                                if (this.overlay) {
                                    var e = this.overlay;
                                    this.overlay.classList.add("not-visible"),
                                        (document.body.style.overflow = "visible"),
                                        this.overlay.addEventListener("transitionend", function () {
                                            e.remove();
                                        }),
                                        (this.overlay = null);
                                }
                            },
                        },
                        {
                            key: "createPopup",
                            value: function (e) {
                                var t = this,
                                    n = e.querySelector(".effects-grid__item-title").textContent,
                                    i = e.querySelector(".effects-grid__item-image").innerHTML,
                                    o = e.querySelector(".effects-grid__item-static").innerHTML,
                                    r = document.querySelector(".popup-overlay");
                                r.insertAdjacentHTML(
                                    "afterbegin",
                                    '\n        <div class="popup-effects-grid">\n          <div class="popup-effects-grid__inner">\n            <div class="popup-effects-grid__top">\n              <span class="popup-effects-grid__title">'
                                        .concat(
                                            n,
                                            '</span>\n            </div>\n            <div class="popup-effects-grid__content">\n              <div class="popup-effects-grid__image">\n                <div class="popup-effects-grid__image-inner">\n                     '
                                        )
                                        .concat(i, '\n                </div>\n              </div>\n              <div class="popup-effects-grid__static">\n                ')
                                        .concat(
                                            o,
                                            '\n              </div>\n            </div>\n            <div class="popup-effects-grid__bottom">\n              <button class="btn  js-popup-close">OK</button>\n            </div>\n          </div>\n        </div>\n      '
                                        )
                                );
                                var a = r.querySelector(".popup-effects-grid");
                                setTimeout(function () {
                                    a.classList.add("opened");
                                }, 100),
                                    a.querySelector(".js-popup-close").addEventListener("click", function (e) {
                                        t.closePopup();
                                    });
                            },
                        },
                        {
                            key: "closePopup",
                            value: function () {
                                var e = this;
                                document.querySelector(".popup-overlay").querySelector(".popup-effects-grid").classList.remove("opened"),
                                    setTimeout(function () {
                                        e.hideOverlay();
                                    }, 0);
                            },
                        },
                        {
                            key: "init",
                            value: function () {
                                this.update(), Layout.addListener(this.update.bind(this));
                            },
                        },
                    ]
                );
            })(),
            l = (function () {
                return r(
                    function e() {
                        i(this, e);
                    },
                    null,
                    [
                        {
                            key: "initOnLoad",
                            value: function () {
                                var e = this;
                                document.addEventListener("DOMContentLoaded", function () {
                                    document.querySelectorAll(".js-effects-grid").forEach(function (t) {
                                        return e.initInstance(t);
                                    });
                                });
                            },
                        },
                        {
                            key: "initInstance",
                            value: function (e) {
                                new s(e);
                            },
                        },
                    ]
                );
            })();
        l.initOnLoad(), (window.EffectsGridMobileUI = l);
    },
    847: function (e, t) {
        function n(e) {
            return (n =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      })(e);
        }
        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function o(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, a(i.key), i);
            }
        }
        function r(e, t, n) {
            return t && o(e.prototype, t), n && o(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
        }
        function a(e) {
            var t = (function (e, t) {
                if ("object" != n(e) || !e) return e;
                var i = e[Symbol.toPrimitive];
                if (void 0 !== i) {
                    var o = i.call(e, t || "default");
                    if ("object" != n(o)) return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == n(t) ? t : t + "";
        }
        var s = {
                speed: 500,
                slidesPerView: 1,
                spaceBetween: 40,
                loop: !0,
                autoplay: { delay: 2e3 },
                pagination: { el: ".swiper-pagination", type: "bullets", clickable: !0 },
                navigation: { nextEl: ".swiper-next", prevEl: ".swiper-prev" },
                breakpoints: { 320: { slidesPerView: 1, spaceBetween: 40 }, 768: { slidesPerView: 2, spaceBetween: 28 }, 1024: { slidesPerView: 2, spaceBetween: 40 }, 1259: { slidesPerView: 3 } },
            },
            l = (function () {
                function e(t) {
                    i(this, e), (this.nodeElement = t), (this.container = this.nodeElement.querySelector(".js-cards-slider__swiper")), this.initSlider();
                }
                return r(
                    e,
                    [
                        {
                            key: "initSlider",
                            value: function () {
                                this.swiper = new Swiper(this.container, s);
                            },
                        },
                    ],
                    [
                        {
                            key: "init",
                            value: function (t) {
                                new e(t);
                            },
                        },
                    ]
                );
            })();
        document.addEventListener("DOMContentLoaded", function () {});
        var c = (function () {
            return r(
                function e() {
                    i(this, e);
                },
                null,
                [
                    {
                        key: "initOnLoad",
                        value: function () {
                            document.querySelectorAll(".js-cards-slider").forEach(function (e) {
                                l.init(e);
                            });
                        },
                    },
                ]
            );
        })();
        c.initOnLoad(), document.addEventListener("domMutation", c.initOnLoad), (window.CardsSliderUI = c);
    },
    848: function (e, t) {
        function n(e) {
            return (n =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      })(e);
        }
        function i(e, t) {
            var n = ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
            if (!n) {
                if (
                    Array.isArray(e) ||
                    (n = (function (e, t) {
                        if (e) {
                            if ("string" == typeof e) return o(e, t);
                            var n = {}.toString.call(e).slice(8, -1);
                            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? o(e, t) : void 0;
                        }
                    })(e)) ||
                    (t && e && "number" == typeof e.length)
                ) {
                    n && (e = n);
                    var i = 0,
                        r = function () {};
                    return {
                        s: r,
                        n: function () {
                            return i >= e.length ? { done: !0 } : { done: !1, value: e[i++] };
                        },
                        e: function (e) {
                            throw e;
                        },
                        f: r,
                    };
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            var a,
                s = !0,
                l = !1;
            return {
                s: function () {
                    n = n.call(e);
                },
                n: function () {
                    var e = n.next();
                    return (s = e.done), e;
                },
                e: function (e) {
                    (l = !0), (a = e);
                },
                f: function () {
                    try {
                        s || null == n.return || n.return();
                    } finally {
                        if (l) throw a;
                    }
                },
            };
        }
        function o(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
            return i;
        }
        function r(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, a(i.key), i);
            }
        }
        function a(e) {
            var t = (function (e, t) {
                if ("object" != n(e) || !e) return e;
                var i = e[Symbol.toPrimitive];
                if (void 0 !== i) {
                    var o = i.call(e, t || "default");
                    if ("object" != n(o)) return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == n(t) ? t : t + "";
        }
        var s = (function () {
            function e(t) {
                !(function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                })(this, e),
                    (this.videoWrapper = t),
                    (this.video = this.videoWrapper.querySelector("video")),
                    (this.videoFullscreen = this.videoWrapper.querySelector(".js-video-block__fullscreen")),
                    (this.videoControl = this.videoWrapper.querySelector(".js-video-block__control")),
                    (this.popupWrapper = this.video.closest(".popup__inner")),
                    (this.popupInner = this.video.closest(".popup-video")),
                    (this.$observer = null),
                    this.setVideo(),
                    this.update(),
                    this.addEvents();
            }
            return (function (e, t, n) {
                return t && r(e.prototype, t), n && r(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
            })(
                e,
                [
                    {
                        key: "update",
                        value: function () {
                            this.setVideo();
                        },
                    },
                    {
                        key: "setVideo",
                        value: function () {
                            this.video &&
                                ((this.videoPoster = this.videoWrapper.dataset.poster),
                                (this.videoUrl = this.videoWrapper.dataset.videofile),
                                (this.video.src = this.videoUrl),
                                this.videoPoster && this.video.setAttribute("poster", "".concat(this.videoPoster)));
                        },
                    },
                    {
                        key: "addEvents",
                        value: function () {
                            var e = this;
                            this.video.addEventListener("click", function (t) {
                                return e.onClickControl(t);
                            }),
                                this.videoFullscreen.addEventListener("click", function (t) {
                                    return e.onClickFullscreen(t);
                                }),
                                (this.$observer = new MutationObserver(function (t) {
                                    return e.observeHandler(t);
                                })),
                                this.$observer.observe(this.videoWrapper, { attributes: !0 }),
                                document.addEventListener("keyup", function (t) {
                                    return e.onKeyPress(t);
                                });
                        },
                    },
                    {
                        key: "removeEvents",
                        value: function () {
                            var e = this;
                            this.video.removeEventListener("click", function (t) {
                                return e.onClickControl(t);
                            }),
                                this.videoFullscreen.removeEventListener("click", function (t) {
                                    return e.onClickFullscreen(t);
                                }),
                                this.$observer.disconnect(),
                                document.removeEventListener("keyup", function (t) {
                                    return e.onKeyPress(t);
                                });
                        },
                    },
                    {
                        key: "onClickControl",
                        value: function (e) {
                            e.preventDefault(), this.videoControl.classList.contains("play") ? this.pauseVideo() : this.playVideo();
                        },
                    },
                    {
                        key: "onClickFullscreen",
                        value: function (e) {
                            e.preventDefault(), this.videoFullscreen.classList.contains("full") ? this.fullscreenClose() : this.fullscreenOpen();
                        },
                    },
                    {
                        key: "onKeyPress",
                        value: function (e) {
                            27 == e.keyCode && (e.preventDefault(), this.fullscreenClose());
                        },
                    },
                    {
                        key: "playVideo",
                        value: function () {
                            var e = navigator.userAgent.match(/(iPhone|iPod)/g);
                            this.video.play(), this.videoControl.classList.add("play"), e && this.videoControl.classList.remove("play");
                        },
                    },
                    {
                        key: "pauseVideo",
                        value: function () {
                            this.video.pause(), this.videoControl.classList.remove("play");
                        },
                    },
                    {
                        key: "fullscreenOpen",
                        value: function () {
                            this.videoControl.classList.add("full"), this.videoFullscreen.classList.add("full"), this.launchFullScreen(this.videoWrapper);
                        },
                    },
                    {
                        key: "fullscreenClose",
                        value: function () {
                            this.cancelFullscreen(), this.videoControl.classList.remove("full"), this.videoFullscreen.classList.remove("full");
                        },
                    },
                    {
                        key: "launchFullScreen",
                        value: function (e) {
                            e.requestFullScreen ? e.requestFullScreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.webkitRequestFullScreen && e.webkitRequestFullScreen();
                        },
                    },
                    {
                        key: "cancelFullscreen",
                        value: function () {
                            document.cancelFullScreen ? document.cancelFullScreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen && document.webkitCancelFullScreen();
                        },
                    },
                    {
                        key: "observeHandler",
                        value: function (e) {
                            var t,
                                n = i(e);
                            try {
                                for (n.s(); !(t = n.n()).done; ) {
                                    "attributes" === t.value.type && this.update();
                                }
                            } catch (e) {
                                n.e(e);
                            } finally {
                                n.f();
                            }
                        },
                    },
                ],
                [
                    {
                        key: "init",
                        value: function (t) {
                            new e(t);
                        },
                    },
                ]
            );
        })();
        document.addEventListener("DOMContentLoaded", function () {
            document.querySelectorAll(".js-video-block").forEach(function (e) {
                s.init(e);
            });
        }),
            (window.VideoBlock = s);
    },
    849: function (e, t) {
        function n(e) {
            return (n =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      })(e);
        }
        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function o(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, r(i.key), i);
            }
        }
        function r(e) {
            var t = (function (e, t) {
                if ("object" != n(e) || !e) return e;
                var i = e[Symbol.toPrimitive];
                if (void 0 !== i) {
                    var o = i.call(e, t || "default");
                    if ("object" != n(o)) return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == n(t) ? t : t + "";
        }
        function a(e, t, i) {
            return (
                (t = s(t)),
                (function (e, t) {
                    if (t && ("object" == n(t) || "function" == typeof t)) return t;
                    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                    return (function (e) {
                        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e;
                    })(e);
                })(
                    e,
                    (function () {
                        try {
                            var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
                        } catch (e) {}
                        return (function () {
                            return !!e;
                        })();
                    })()
                        ? Reflect.construct(t, i || [], s(e).constructor)
                        : t.apply(e, i)
                )
            );
        }
        function s(e) {
            return (s = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (e) {
                      return e.__proto__ || Object.getPrototypeOf(e);
                  })(e);
        }
        function l(e, t) {
            return (l = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (e, t) {
                      return (e.__proto__ = t), e;
                  })(e, t);
        }
        var c = new Map(),
            u = (function (e) {
                function t(e) {
                    var n;
                    return i(this, t), ((n = a(this, t, [e, ".js-testimonials"])).$prev = n.queryElement(".prev")), (n.$next = n.queryElement(".next")), (n.$slider = n.queryElement(".slider")), n;
                }
                return (
                    (function (e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), Object.defineProperty(e, "prototype", { writable: !1 }), t && l(e, t);
                    })(t, Widget),
                    (n = t),
                    (s = [
                        {
                            key: "init",
                            value: function (e) {
                                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                return !1 === c.has(e) && c.set(e, new t(e, n)), c.get(e).build(), c.get(e);
                            },
                        },
                    ]),
                    (r = [
                        {
                            key: "build",
                            value: function () {
                                this.swiper = new Swiper(this.$slider, {
                                    effect: "slide",
                                    loop: !0,
                                    fadeEffect: { crossFade: !0 },
                                    speed: 1e3,
                                    autoplay: !1,
                                    navigation: { nextEl: this.$next, prevEl: this.$prev },
                                    breakpoints: { 320: { autoHeight: !1 }, 768: { autoHeight: !1 } },
                                });
                            },
                        },
                    ]) && o(n.prototype, r),
                    s && o(n, s),
                    Object.defineProperty(n, "prototype", { writable: !1 }),
                    n
                );
                var n, r, s;
            })();
        document.addEventListener("DOMContentLoaded", function () {
            document.querySelectorAll(".js-testimonials").forEach(function (e) {
                u.init(e);
            });
        }),
            (window.Testimonials = u);
    },
    850: function (e, t) {
        function n(e) {
            return (n =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      })(e);
        }
        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function o(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, r(i.key), i);
            }
        }
        function r(e) {
            var t = (function (e, t) {
                if ("object" != n(e) || !e) return e;
                var i = e[Symbol.toPrimitive];
                if (void 0 !== i) {
                    var o = i.call(e, t || "default");
                    if ("object" != n(o)) return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == n(t) ? t : t + "";
        }
        function a(e, t, i) {
            return (
                (t = s(t)),
                (function (e, t) {
                    if (t && ("object" == n(t) || "function" == typeof t)) return t;
                    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                    return (function (e) {
                        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e;
                    })(e);
                })(
                    e,
                    (function () {
                        try {
                            var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
                        } catch (e) {}
                        return (function () {
                            return !!e;
                        })();
                    })()
                        ? Reflect.construct(t, i || [], s(e).constructor)
                        : t.apply(e, i)
                )
            );
        }
        function s(e) {
            return (s = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (e) {
                      return e.__proto__ || Object.getPrototypeOf(e);
                  })(e);
        }
        function l(e, t) {
            return (l = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (e, t) {
                      return (e.__proto__ = t), e;
                  })(e, t);
        }
        var c = new Map(),
            u = (function (e) {
                function t(e) {
                    var n;
                    return (
                        i(this, t),
                        ((n = a(this, t, [e, ".js-cases"])).swiper = null),
                        (n.navSwiper = null),
                        (n.$slider = n.queryElement(".slider")),
                        (n.$navSlider = n.queryElement(".nav")),
                        n.$navSlider.querySelectorAll(".cases__nav-item").forEach(function (e, t) {
                            e.setAttribute("data-index", t);
                        }),
                        n.$navSlider.querySelectorAll('.cases__nav-item[data-index="0"]').forEach(function (e) {
                            return e.classList.add("_active");
                        }),
                        (n.navSliderActive = 0),
                        n
                    );
                }
                return (
                    (function (e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), Object.defineProperty(e, "prototype", { writable: !1 }), t && l(e, t);
                    })(t, Widget),
                    (n = t),
                    (s = [
                        {
                            key: "init",
                            value: function (e) {
                                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                return !1 === c.has(e) && c.set(e, new t(e, n)), c.get(e).build(), c.get(e);
                            },
                        },
                    ]),
                    (r = [
                        {
                            key: "build",
                            value: function () {
                                var e = this,
                                    t = this.$navSlider.querySelectorAll(".swiper-slide").length;
                                (this.navSwiper = new Swiper(this.$navSlider, {
                                    effect: "slide",
                                    loop: !0,
                                    loopAdditionalSlides: 10,
                                    speed: 2e3,
                                    autoplay: { delay: 4e3 },
                                    touchRatio: 0.2,
                                    slideToClickedSlide: !0,
                                    breakpoints: { 320: { slidesPerView: t > 3 ? 3.5 : 2.5 }, 768: { slidesPerView: t } },
                                })),
                                    this.navSwiper.on("slideChange", function () {
                                        e.navSliderActive !== e.navSwiper.realIndex &&
                                            ((e.navSliderActive = e.navSwiper.realIndex),
                                            e.$navSlider.querySelectorAll(".cases__nav-item").forEach(function (e) {
                                                return e.classList.remove("_active");
                                            }),
                                            e.$navSlider.querySelectorAll('.cases__nav-item[data-index="' + e.navSwiper.realIndex + '"]').forEach(function (e) {
                                                return e.classList.add("_active");
                                            }));
                                    }),
                                    (this.swiper = new Swiper(this.$slider, { effect: "slide", loop: !0, loopAdditionalSlides: 14, speed: 2e3 })),
                                    this.navSwiper.controller && (this.navSwiper.controller.control = this.swiper),
                                    this.swiper.controller && (this.swiper.controller.control = this.navSwiper);
                            },
                        },
                    ]) && o(n.prototype, r),
                    s && o(n, s),
                    Object.defineProperty(n, "prototype", { writable: !1 }),
                    n
                );
                var n, r, s;
            })();
        document.addEventListener("DOMContentLoaded", function () {
            document.querySelectorAll(".js-cases").forEach(function (e) {
                u.init(e);
            });
        }),
            (window.Cases = u);
    },
    851: function (e, t) {
        function n(e) {
            return (n =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      })(e);
        }
        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function o(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, r(i.key), i);
            }
        }
        function r(e) {
            var t = (function (e, t) {
                if ("object" != n(e) || !e) return e;
                var i = e[Symbol.toPrimitive];
                if (void 0 !== i) {
                    var o = i.call(e, t || "default");
                    if ("object" != n(o)) return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == n(t) ? t : t + "";
        }
        function a(e, t, i) {
            return (
                (t = s(t)),
                (function (e, t) {
                    if (t && ("object" == n(t) || "function" == typeof t)) return t;
                    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                    return (function (e) {
                        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e;
                    })(e);
                })(
                    e,
                    (function () {
                        try {
                            var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
                        } catch (e) {}
                        return (function () {
                            return !!e;
                        })();
                    })()
                        ? Reflect.construct(t, i || [], s(e).constructor)
                        : t.apply(e, i)
                )
            );
        }
        function s(e) {
            return (s = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (e) {
                      return e.__proto__ || Object.getPrototypeOf(e);
                  })(e);
        }
        function l(e, t) {
            return (l = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (e, t) {
                      return (e.__proto__ = t), e;
                  })(e, t);
        }
        var c = new Map(),
            u = (function (e) {
                function t(e) {
                    var n;
                    return (
                        i(this, t),
                        ((n = a(this, t, [e, ".js-header-language"])).$links = Array.from(document.querySelectorAll(".header-language__link"))),
                        (n.$headerLinks = Array.from(document.querySelectorAll(".header-dropdown-item"))),
                        n
                    );
                }
                return (
                    (function (e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), Object.defineProperty(e, "prototype", { writable: !1 }), t && l(e, t);
                    })(t, Widget),
                    (n = t),
                    (s = [
                        {
                            key: "init",
                            value: function (e) {
                                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                return !1 === c.has(e) && c.set(e, new t(e, n)), c.get(e).build(), c.get(e);
                            },
                        },
                    ]),
                    (r = [
                        {
                            key: "build",
                            value: function () {
                                this.$links.forEach(function (e, t, n) {
                                    var i = e.dataset.lang.toLowerCase(),
                                        o = "".concat(document.location.origin, "/").concat("en" === i ? "" : i),
                                        r = document.location.pathname;
                                    (o = r.startsWith("/en/") || r.startsWith("/cn/") || r.startsWith("/tw/") ? o + r.substring("en" === i ? 4 : 3) : o + ("/" === r ? "" : r)), e.setAttribute("href", o);
                                });
                                var e = window.location.href,
                                    t = e.includes("/tw/") ? "tw" : e.includes("/cn/") ? "cn" : "en";
                                if (t) {
                                    var n = this.$links.find(function (e) {
                                        return e.getAttribute("data-lang") == t;
                                    });
                                    n && (document.querySelector(".header-language__current").textContent = n.textContent);
                                }
                                e.includes(t) &&
                                    this.$headerLinks.forEach(function (e) {
                                        if (e.href.includes("/".concat(t, "/"))) return !1;
                                        var n = new URL(e);
                                        return (e.href = "".concat(n.origin, "/").concat(t).concat(n.pathname)), !0;
                                    });
                            },
                        },
                    ]) && o(n.prototype, r),
                    s && o(n, s),
                    Object.defineProperty(n, "prototype", { writable: !1 }),
                    n
                );
                var n, r, s;
            })();
        document.addEventListener("DOMContentLoaded", function () {
            document.querySelectorAll(".js-header-language").forEach(function (e) {
                u.init(e);
            });
        }),
            (window.HeaderLanguage = u);
    },
    852: function (e, t) {
        function n(e) {
            return (n =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      })(e);
        }
        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function o(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, r(i.key), i);
            }
        }
        function r(e) {
            var t = (function (e, t) {
                if ("object" != n(e) || !e) return e;
                var i = e[Symbol.toPrimitive];
                if (void 0 !== i) {
                    var o = i.call(e, t || "default");
                    if ("object" != n(o)) return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == n(t) ? t : t + "";
        }
        function a(e, t, i) {
            return (
                (t = s(t)),
                (function (e, t) {
                    if (t && ("object" == n(t) || "function" == typeof t)) return t;
                    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                    return (function (e) {
                        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e;
                    })(e);
                })(
                    e,
                    (function () {
                        try {
                            var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
                        } catch (e) {}
                        return (function () {
                            return !!e;
                        })();
                    })()
                        ? Reflect.construct(t, i || [], s(e).constructor)
                        : t.apply(e, i)
                )
            );
        }
        function s(e) {
            return (s = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (e) {
                      return e.__proto__ || Object.getPrototypeOf(e);
                  })(e);
        }
        function l(e, t) {
            return (l = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (e, t) {
                      return (e.__proto__ = t), e;
                  })(e, t);
        }
        var c = new Map(),
            u = {
                en: {
                    invalidEmail: "Please enter a valid email address.",
                    invalidEmailFormat: "Email must be formatted correctly.",
                    forbiddenEmailDomain: "Please enter your business email.",
                    forbiddenEmailDomainGeneric: "Please enter your business email (not that domain).",
                    manuallyBlockedEmailDomain: "Please enter a different email.",
                    submissionErrors: { SERVER_ERROR: "Sorry, the form was not submitted. Please try again later.", TOO_MANY_REQUESTS: "Please wait a few seconds and try again." },
                },
                es: {
                    invalidEmail: "Introduzca una dirección de correo electrónico válida.",
                    invalidEmailFormat: "La dirección de correo electrónico debe tener un formato correcto.",
                    forbiddenEmailDomain: "Ingrese su correo electrónico comercial.",
                    forbiddenEmailDomainGeneric: "Ingrese su correo electrónico comercial (no ese dominio).",
                    manuallyBlockedEmailDomain: "Ingrese un correo electrónico diferente.",
                    "submissionErrors.SERVER_ERROR": "Lo sentimos, no se envió el formulario. Inténtelo más tarde.",
                    "submissionErrors.TOO_MANY_REQUESTS": "Espere unos segundos y vuelva a intentarlo.",
                },
                it: {
                    invalidEmail: "Inserisci un indirizzo e-mail valido.",
                    invalidEmailFormat: "L'e-mail deve essere formattata correttamente.",
                    forbiddenEmailDomain: "Inserisci il tuo indirizzo e-mail.",
                    forbiddenEmailDomainGeneric: "Inserisci il tuo indirizzo e-mail (non quel dominio).",
                    manuallyBlockedEmailDomain: "Inserisci un altro indirizzo e-mail.",
                    "submissionErrors.SERVER_ERROR": "Purtroppo il modulo non è stato inviato. Riprova più tardi.",
                    "submissionErrors.TOO_MANY_REQUESTS": "Si prega di attendere qualche secondo e riprovare.",
                },
            },
            d = (function (e) {
                function t(e) {
                    var n;
                    return i(this, t), ((n = a(this, t, [e, ".js-form-hubspot"])).formId = n.$node.dataset.formId), (n.pageId = n.$node.dataset.pageId), (n.locale = n.$node.dataset.locale), n;
                }
                return (
                    (function (e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), Object.defineProperty(e, "prototype", { writable: !1 }), t && l(e, t);
                    })(t, Widget),
                    (n = t),
                    (s = [
                        {
                            key: "getTranslation",
                            value: function (e) {
                                return u[e];
                            },
                        },
                        {
                            key: "init",
                            value: function (e) {
                                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                return !1 === c.has(e) && c.set(e, new t(e, n)), c.get(e).build(), c.get(e);
                            },
                        },
                    ]),
                    (r = [
                        {
                            key: "build",
                            value: function () {
                                var e = { portalId: "4992313", formId: this.formId, pageId: this.pageId, locale: this.locale, target: "#form_hubspot", translations: u };
                                hbspt.forms.create(e);
                            },
                        },
                    ]) && o(n.prototype, r),
                    s && o(n, s),
                    Object.defineProperty(n, "prototype", { writable: !1 }),
                    n
                );
                var n, r, s;
            })();
        document.addEventListener("DOMContentLoaded", function () {
            document.querySelectorAll(".js-form-hubspot").forEach(function (e) {
                d.init(e);
            });
        }),
            (window.FormHubspot = d);
    },
    853: function (e, t) {
        function n(e) {
            return (n =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      })(e);
        }
        function i() {
            "use strict";
            i = function () {
                return t;
            };
            var e,
                t = {},
                o = Object.prototype,
                r = o.hasOwnProperty,
                a =
                    Object.defineProperty ||
                    function (e, t, n) {
                        e[t] = n.value;
                    },
                s = "function" == typeof Symbol ? Symbol : {},
                l = s.iterator || "@@iterator",
                c = s.asyncIterator || "@@asyncIterator",
                u = s.toStringTag || "@@toStringTag";
            function d(e, t, n) {
                return Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }), e[t];
            }
            try {
                d({}, "");
            } catch (e) {
                d = function (e, t, n) {
                    return (e[t] = n);
                };
            }
            function f(e, t, n, i) {
                var o = t && t.prototype instanceof b ? t : b,
                    r = Object.create(o.prototype),
                    s = new x(i || []);
                return a(r, "_invoke", { value: T(e, n, s) }), r;
            }
            function h(e, t, n) {
                try {
                    return { type: "normal", arg: e.call(t, n) };
                } catch (e) {
                    return { type: "throw", arg: e };
                }
            }
            t.wrap = f;
            var p = "suspendedStart",
                v = "executing",
                y = "completed",
                m = {};
            function b() {}
            function g() {}
            function w() {}
            var S = {};
            d(S, l, function () {
                return this;
            });
            var E = Object.getPrototypeOf,
                k = E && E(E($([])));
            k && k !== o && r.call(k, l) && (S = k);
            var L = (w.prototype = b.prototype = Object.create(S));
            function _(e) {
                ["next", "throw", "return"].forEach(function (t) {
                    d(e, t, function (e) {
                        return this._invoke(t, e);
                    });
                });
            }
            function j(e, t) {
                function i(o, a, s, l) {
                    var c = h(e[o], e, a);
                    if ("throw" !== c.type) {
                        var u = c.arg,
                            d = u.value;
                        return d && "object" == n(d) && r.call(d, "__await")
                            ? t.resolve(d.__await).then(
                                  function (e) {
                                      i("next", e, s, l);
                                  },
                                  function (e) {
                                      i("throw", e, s, l);
                                  }
                              )
                            : t.resolve(d).then(
                                  function (e) {
                                      (u.value = e), s(u);
                                  },
                                  function (e) {
                                      return i("throw", e, s, l);
                                  }
                              );
                    }
                    l(c.arg);
                }
                var o;
                a(this, "_invoke", {
                    value: function (e, n) {
                        function r() {
                            return new t(function (t, o) {
                                i(e, n, t, o);
                            });
                        }
                        return (o = o ? o.then(r, r) : r());
                    },
                });
            }
            function T(t, n, i) {
                var o = p;
                return function (r, a) {
                    if (o === v) throw Error("Generator is already running");
                    if (o === y) {
                        if ("throw" === r) throw a;
                        return { value: e, done: !0 };
                    }
                    for (i.method = r, i.arg = a; ; ) {
                        var s = i.delegate;
                        if (s) {
                            var l = C(s, i);
                            if (l) {
                                if (l === m) continue;
                                return l;
                            }
                        }
                        if ("next" === i.method) i.sent = i._sent = i.arg;
                        else if ("throw" === i.method) {
                            if (o === p) throw ((o = y), i.arg);
                            i.dispatchException(i.arg);
                        } else "return" === i.method && i.abrupt("return", i.arg);
                        o = v;
                        var c = h(t, n, i);
                        if ("normal" === c.type) {
                            if (((o = i.done ? y : "suspendedYield"), c.arg === m)) continue;
                            return { value: c.arg, done: i.done };
                        }
                        "throw" === c.type && ((o = y), (i.method = "throw"), (i.arg = c.arg));
                    }
                };
            }
            function C(t, n) {
                var i = n.method,
                    o = t.iterator[i];
                if (o === e)
                    return (
                        (n.delegate = null),
                        ("throw" === i && t.iterator.return && ((n.method = "return"), (n.arg = e), C(t, n), "throw" === n.method)) ||
                            ("return" !== i && ((n.method = "throw"), (n.arg = new TypeError("The iterator does not provide a '" + i + "' method")))),
                        m
                    );
                var r = h(o, t.iterator, n.arg);
                if ("throw" === r.type) return (n.method = "throw"), (n.arg = r.arg), (n.delegate = null), m;
                var a = r.arg;
                return a
                    ? a.done
                        ? ((n[t.resultName] = a.value), (n.next = t.nextLoc), "return" !== n.method && ((n.method = "next"), (n.arg = e)), (n.delegate = null), m)
                        : a
                    : ((n.method = "throw"), (n.arg = new TypeError("iterator result is not an object")), (n.delegate = null), m);
            }
            function O(e) {
                var t = { tryLoc: e[0] };
                1 in e && (t.catchLoc = e[1]), 2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])), this.tryEntries.push(t);
            }
            function P(e) {
                var t = e.completion || {};
                (t.type = "normal"), delete t.arg, (e.completion = t);
            }
            function x(e) {
                (this.tryEntries = [{ tryLoc: "root" }]), e.forEach(O, this), this.reset(!0);
            }
            function $(t) {
                if (t || "" === t) {
                    var i = t[l];
                    if (i) return i.call(t);
                    if ("function" == typeof t.next) return t;
                    if (!isNaN(t.length)) {
                        var o = -1,
                            a = function n() {
                                for (; ++o < t.length; ) if (r.call(t, o)) return (n.value = t[o]), (n.done = !1), n;
                                return (n.value = e), (n.done = !0), n;
                            };
                        return (a.next = a);
                    }
                }
                throw new TypeError(n(t) + " is not iterable");
            }
            return (
                (g.prototype = w),
                a(L, "constructor", { value: w, configurable: !0 }),
                a(w, "constructor", { value: g, configurable: !0 }),
                (g.displayName = d(w, u, "GeneratorFunction")),
                (t.isGeneratorFunction = function (e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === g || "GeneratorFunction" === (t.displayName || t.name));
                }),
                (t.mark = function (e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, w) : ((e.__proto__ = w), d(e, u, "GeneratorFunction")), (e.prototype = Object.create(L)), e;
                }),
                (t.awrap = function (e) {
                    return { __await: e };
                }),
                _(j.prototype),
                d(j.prototype, c, function () {
                    return this;
                }),
                (t.AsyncIterator = j),
                (t.async = function (e, n, i, o, r) {
                    void 0 === r && (r = Promise);
                    var a = new j(f(e, n, i, o), r);
                    return t.isGeneratorFunction(n)
                        ? a
                        : a.next().then(function (e) {
                              return e.done ? e.value : a.next();
                          });
                }),
                _(L),
                d(L, u, "Generator"),
                d(L, l, function () {
                    return this;
                }),
                d(L, "toString", function () {
                    return "[object Generator]";
                }),
                (t.keys = function (e) {
                    var t = Object(e),
                        n = [];
                    for (var i in t) n.push(i);
                    return (
                        n.reverse(),
                        function e() {
                            for (; n.length; ) {
                                var i = n.pop();
                                if (i in t) return (e.value = i), (e.done = !1), e;
                            }
                            return (e.done = !0), e;
                        }
                    );
                }),
                (t.values = $),
                (x.prototype = {
                    constructor: x,
                    reset: function (t) {
                        if (((this.prev = 0), (this.next = 0), (this.sent = this._sent = e), (this.done = !1), (this.delegate = null), (this.method = "next"), (this.arg = e), this.tryEntries.forEach(P), !t))
                            for (var n in this) "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e);
                    },
                    stop: function () {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type) throw e.arg;
                        return this.rval;
                    },
                    dispatchException: function (t) {
                        if (this.done) throw t;
                        var n = this;
                        function i(i, o) {
                            return (s.type = "throw"), (s.arg = t), (n.next = i), o && ((n.method = "next"), (n.arg = e)), !!o;
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var a = this.tryEntries[o],
                                s = a.completion;
                            if ("root" === a.tryLoc) return i("end");
                            if (a.tryLoc <= this.prev) {
                                var l = r.call(a, "catchLoc"),
                                    c = r.call(a, "finallyLoc");
                                if (l && c) {
                                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                                } else if (l) {
                                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                                } else {
                                    if (!c) throw Error("try statement without catch or finally");
                                    if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                                }
                            }
                        }
                    },
                    abrupt: function (e, t) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var i = this.tryEntries[n];
                            if (i.tryLoc <= this.prev && r.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                                var o = i;
                                break;
                            }
                        }
                        o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                        var a = o ? o.completion : {};
                        return (a.type = e), (a.arg = t), o ? ((this.method = "next"), (this.next = o.finallyLoc), m) : this.complete(a);
                    },
                    complete: function (e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return (
                            "break" === e.type || "continue" === e.type
                                ? (this.next = e.arg)
                                : "return" === e.type
                                ? ((this.rval = this.arg = e.arg), (this.method = "return"), (this.next = "end"))
                                : "normal" === e.type && t && (this.next = t),
                            m
                        );
                    },
                    finish: function (e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), P(n), m;
                        }
                    },
                    catch: function (e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.tryLoc === e) {
                                var i = n.completion;
                                if ("throw" === i.type) {
                                    var o = i.arg;
                                    P(n);
                                }
                                return o;
                            }
                        }
                        throw Error("illegal catch attempt");
                    },
                    delegateYield: function (t, n, i) {
                        return (this.delegate = { iterator: $(t), resultName: n, nextLoc: i }), "next" === this.method && (this.arg = e), m;
                    },
                }),
                t
            );
        }
        function o(e, t, n, i, o, r, a) {
            try {
                var s = e[r](a),
                    l = s.value;
            } catch (e) {
                return void n(e);
            }
            s.done ? t(l) : Promise.resolve(l).then(i, o);
        }
        function r(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, a(i.key), i);
            }
        }
        function a(e) {
            var t = (function (e, t) {
                if ("object" != n(e) || !e) return e;
                var i = e[Symbol.toPrimitive];
                if (void 0 !== i) {
                    var o = i.call(e, t || "default");
                    if ("object" != n(o)) return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == n(t) ? t : t + "";
        }
        var s = (function () {
            return (function (e, t, n) {
                return t && r(e.prototype, t), n && r(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
            })(
                function e(t) {
                    !(function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                        (this.nodeElement = t),
                        (this.errorMessage = this.nodeElement.dataset.errorMsg),
                        (this.tokenBlock = this.nodeElement.querySelector(".thank-you-page-token__text")),
                        (this.timer = this.nodeElement.querySelector(".thank-you-page-token__timer")),
                        (this.seconds = parseInt(this.timer.innerText)),
                        (this.interval = null);
                    var n = new Proxy(new URLSearchParams(window.location.search), {
                        get: function (e, t) {
                            return e.get(t);
                        },
                    });
                    (this.vid = n.vid), this.startTimer();
                },
                [
                    {
                        key: "startTimer",
                        value: function () {
                            this.vid ? (this.myTimer(), (this.interval = setInterval(this.myTimer.bind(this), 1e3))) : this.renderError();
                        },
                    },
                    {
                        key: "myTimer",
                        value: function () {
                            var e = this;
                            (this.timer.innerText = this.str_pad_left(this.seconds, "0", 2)),
                                this.seconds % 10 == 0 &&
                                    this.getToken().then(function (t) {
                                        null != t && t.length && (e.renderToken(t), clearInterval(e.interval));
                                    }),
                                this.seconds < 1 &&
                                    (this.getToken().then(function (t) {
                                        null != t && t.length ? e.renderToken(t) : e.renderError();
                                    }),
                                    clearInterval(this.interval)),
                                (this.seconds -= 1);
                        },
                    },
                    {
                        key: "renderToken",
                        value: function (e) {
                            (this.tokenBlock.style.textAlign = "end"),
                                this.tokenBlock.classList.add("thank-you-page-token__offset"),
                                (this.tokenBlock.innerHTML = '<div class="copySuccess fade-out">Token copied</div>'
                                    .concat(
                                        '<svg class="copy-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<mask id="mask0_5260_127185" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">\n<path d="M0 0H24V24H0V0Z" fill="white"/>\n</mask>\n<g mask="url(#mask0_5260_127185)">\n<path d="M15 1.00002H4C2.9 1.00002 2 1.90002 2 3.00002V16C2 16.55 2.45 17 3 17C3.55 17 4 16.55 4 16V4.00002C4 3.45002 4.45 3.00002 5 3.00002H15C15.55 3.00002 16 2.55002 16 2.00002C16 1.45002 15.55 1.00002 15 1.00002ZM19 5.00002H8C6.9 5.00002 6 5.90002 6 7.00002V21C6 22.1 6.9 23 8 23H19C20.1 23 21 22.1 21 21V7.00002C21 5.90002 20.1 5.00002 19 5.00002ZM18 21H9C8.45 21 8 20.55 8 20V8.00002C8 7.45002 8.45 7.00002 9 7.00002H18C18.55 7.00002 19 7.45002 19 8.00002V20C19 20.55 18.55 21 18 21Z" fill="#191428"/>\n</g>\n</svg>',
                                        '<div class="thank-you-page-token__token">"'
                                    )
                                    .concat(e, '"</div>')),
                                document.querySelector(".copy-icon").addEventListener("click", this.copyToClipboard.bind(this));
                        },
                    },
                    {
                        key: "copyToClipboard",
                        value: function () {
                            var e = document.querySelector(".thank-you-page-token__token").innerText;
                            navigator.clipboard.writeText(e).then();
                            var t = document.querySelector(".copySuccess");
                            t.classList.add("fade-in"),
                                t.classList.remove("fade-out"),
                                setTimeout(function () {
                                    t.classList.remove("fade-in"), t.classList.add("fade-out");
                                }, 2e3);
                        },
                    },
                    {
                        key: "renderError",
                        value: function () {
                            this.tokenBlock.innerHTML = this.errorMessage;
                        },
                    },
                    {
                        key: "str_pad_left",
                        value: function (e, t, n) {
                            return (new Array(n + 1).join(t) + e).slice(-n);
                        },
                    },
                    {
                        key: "getToken",
                        value:
                            ((e = i().mark(function e() {
                                var t, n;
                                return i().wrap(
                                    function (e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    return (e.prev = 0), (e.next = 3), fetch("https://svc.arcloud.banuba.net/arcloud/token-by-vid", { method: "POST", body: JSON.stringify({ vid: this.vid }) });
                                                case 3:
                                                    if (200 !== (t = e.sent).status) {
                                                        e.next = 9;
                                                        break;
                                                    }
                                                    return (e.next = 7), t.json();
                                                case 7:
                                                    return (n = e.sent), e.abrupt("return", null == n ? void 0 : n.token);
                                                case 9:
                                                    e.next = 13;
                                                    break;
                                                case 11:
                                                    (e.prev = 11), (e.t0 = e.catch(0));
                                                case 13:
                                                case "end":
                                                    return e.stop();
                                            }
                                    },
                                    e,
                                    this,
                                    [[0, 11]]
                                );
                            })),
                            (t = function () {
                                var t = this,
                                    n = arguments;
                                return new Promise(function (i, r) {
                                    var a = e.apply(t, n);
                                    function s(e) {
                                        o(a, i, r, s, l, "next", e);
                                    }
                                    function l(e) {
                                        o(a, i, r, s, l, "throw", e);
                                    }
                                    s(void 0);
                                });
                            }),
                            function () {
                                return t.apply(this, arguments);
                            }),
                    },
                ]
            );
            var e, t;
        })();
        document.addEventListener("DOMContentLoaded", function () {
            document.querySelectorAll(".thank-you-page-token").forEach(function (e) {
                return new s(e);
            });
        });
    },
    854: function (e, t) {
        function n(e) {
            return (n =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      })(e);
        }
        function i(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, o(i.key), i);
            }
        }
        function o(e) {
            var t = (function (e, t) {
                if ("object" != n(e) || !e) return e;
                var i = e[Symbol.toPrimitive];
                if (void 0 !== i) {
                    var o = i.call(e, t || "default");
                    if ("object" != n(o)) return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == n(t) ? t : t + "";
        }
        var r = (function () {
            return (
                (e = function e(t) {
                    !(function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                        (this.nodeElement = t),
                        (this.videoContainer = this.nodeElement.querySelector(".home-hero-compare-video__container")),
                        (this.afterVideo = this.nodeElement.querySelector("#after-video")),
                        (this.afterSource = this.nodeElement.querySelector("#after-source")),
                        (this.videoClipper = this.nodeElement.querySelector(".home-hero-compare-video__clipper")),
                        (this.isCompare = !!this.videoClipper),
                        this.isCompare &&
                            ((this.clippedVideo = this.videoClipper.querySelector("video")),
                            (this.controlLine = this.nodeElement.querySelector(".home-hero-compare-video__slider-line")),
                            (this.controlButton = this.nodeElement.querySelector(".home-hero-compare-video__slider-button"))),
                        (this.controlsBlock = this.nodeElement.querySelector(".home-hero-compare-video__controls")),
                        (this.videoItems = this.nodeElement.querySelector(".home-hero-compare-video__controls--content-items")),
                        (this.buttonLeft = this.nodeElement.querySelector(".home-hero-compare-video__controls--btn-left")),
                        (this.buttonRight = this.nodeElement.querySelector(".home-hero-compare-video__controls--btn-right")),
                        (this.isMouseDown = !1),
                        (this.beforeLoaded = !1),
                        (this.afterLoaded = !1),
                        (this.isChanginVideo = !1),
                        (this.currentVideo = 0),
                        (this.currentItem = 0),
                        (this.videosList = this.getVideosList()),
                        this.prepareItems(),
                        this.bindEvents(),
                        this.isCompare && this.present(),
                        this.loadVideos();
                }),
                (t = [
                    {
                        key: "getVideosList",
                        value: function () {
                            return Array.from(this.videoItems.children).map(function (e) {
                                return fetch(e.dataset.video).then(), { poster: e.dataset.poster, video: e.dataset.video };
                            });
                        },
                    },
                    {
                        key: "resizeVideos",
                        value: function (e) {
                            e >= 5 && e <= 95 && ((this.controlLine.style.left = "".concat(e, "%")), (this.videoClipper.style.width = "".concat(e, "%")), (this.clippedVideo.style.width = "".concat((100 / e) * 100, "%")));
                        },
                    },
                    {
                        key: "present",
                        value: function () {
                            var e = this,
                                t = 1,
                                n = 51,
                                i = function () {
                                    if (!(3 === t && n >= 50)) {
                                        switch (t) {
                                            case 1:
                                                n < 96 ? (n += 0.5) : ((t = 2), (n -= 0.5));
                                                break;
                                            case 2:
                                                n > 4 ? (n -= 0.5) : ((t = 3), (n += 0.5));
                                                break;
                                            case 3:
                                                n += 0.5;
                                        }
                                        e.resizeVideos(n), setTimeout(i, 1);
                                    }
                                },
                                o = setInterval(function () {
                                    document.body.classList.contains("loaded") && (i(), clearInterval(o));
                                }, 500);
                        },
                    },
                    {
                        key: "bindEvents",
                        value: function () {
                            var e = this;
                            this.isCompare &&
                                (this.clippedVideo.addEventListener("loadeddata", function () {
                                    (e.afterLoaded = !0), e.beforeLoaded && e.playVideos();
                                }),
                                this.controlButton.addEventListener("mousedown", function () {
                                    return (e.isMouseDown = !0);
                                }),
                                this.controlButton.addEventListener("mouseup", function () {
                                    return (e.isMouseDown = !1);
                                }),
                                this.controlLine.addEventListener("mousedown", function () {
                                    return (e.isMouseDown = !0);
                                }),
                                this.controlLine.addEventListener("mouseup", function () {
                                    return (e.isMouseDown = !1);
                                }),
                                this.videoContainer.addEventListener("mouseup", function () {
                                    return (e.isMouseDown = !1);
                                }),
                                this.videoContainer.addEventListener(
                                    "mousemove",
                                    function (t) {
                                        if ((t.preventDefault(), e.isMouseDown)) {
                                            var n = e.videoContainer.getBoundingClientRect(),
                                                i = ((t.pageX - n.left) / e.videoContainer.offsetWidth) * 100;
                                            e.resizeVideos(i);
                                        }
                                    },
                                    !1
                                ),
                                this.controlButton.addEventListener("touchstart", function () {
                                    return (e.isMouseDown = !0);
                                }),
                                this.controlButton.addEventListener("touchend", function () {
                                    return (e.isMouseDown = !1);
                                }),
                                this.controlLine.addEventListener("touchstart", function () {
                                    return (e.isMouseDown = !0);
                                }),
                                this.controlLine.addEventListener("touchend", function () {
                                    return (e.isMouseDown = !1);
                                }),
                                this.videoContainer.addEventListener(
                                    "touchmove",
                                    function (t) {
                                        if ((t.preventDefault(), e.isMouseDown)) {
                                            var n = e.videoContainer.getBoundingClientRect(),
                                                i = ((t.changedTouches[0].pageX - n.left) / e.videoContainer.offsetWidth) * 100;
                                            e.resizeVideos(i);
                                        }
                                    },
                                    !1
                                )),
                                this.afterVideo.addEventListener("loadeddata", function () {
                                    (e.beforeLoaded = !0), (!e.afterLoaded && e.isCompare) || e.playVideos();
                                }),
                                this.buttonRight.addEventListener("click", function () {
                                    return e.changeVideo(1);
                                }),
                                this.buttonLeft.addEventListener("click", function () {
                                    return e.changeVideo(-1);
                                }),
                                this.isCompare &&
                                    window.addEventListener("focus", function () {
                                        e.loadVideos();
                                    }),
                                this.videoItems.addEventListener("transitionend", function (t) {
                                    if (t.target.classList.contains("home-hero-compare-video__controls--content-items")) {
                                        if ((e.videoItems.classList.remove("animate"), e.currentVideo !== e.currentItem)) {
                                            var n = e.videoItems.children[e.currentItem + 1];
                                            e.currentItem = e.currentVideo;
                                            var i = e.videoItems.children[e.currentItem + 1];
                                            n.classList.add("not-animate"),
                                                i.classList.add("not-animate"),
                                                n.classList.remove("visible"),
                                                (e.currentItem = e.currentVideo),
                                                i.classList.add("visible"),
                                                (e.videoItems.style.transform = "translateX(-".concat(e.getItemWidth() * (e.currentItem + 1), "px)")),
                                                n.classList.remove("not-animate"),
                                                i.classList.remove("not-animate");
                                        }
                                        e.isChanginVideo = !1;
                                    }
                                });
                        },
                    },
                    {
                        key: "getItemWidth",
                        value: function () {
                            return this.videoItems.children[0].offsetWidth;
                        },
                    },
                    {
                        key: "changeVideo",
                        value: function (e) {
                            this.isChanginVideo ||
                                ((this.isChanginVideo = !0),
                                this.stopVideos(),
                                (this.currentVideo = (this.currentVideo + e + this.videosList.length) % this.videosList.length),
                                this.videoItems.classList.add("animate"),
                                this.videoItems.children[this.currentItem + 1].classList.remove("visible"),
                                (this.currentItem += e),
                                this.videoItems.children[this.currentItem + 1].classList.add("visible"),
                                (this.videoItems.style.transform = "translateX(-".concat(this.getItemWidth() * (this.currentItem + 1), "px)")),
                                (this.afterSource.src = this.videosList[this.currentVideo].video),
                                (this.afterVideo.poster = this.videosList[this.currentVideo].poster),
                                this.loadVideos());
                        },
                    },
                    {
                        key: "loadVideos",
                        value: function () {
                            this.isCompare && this.clippedVideo.load(), this.afterVideo.load();
                        },
                    },
                    {
                        key: "playVideos",
                        value: function () {
                            this.isCompare && this.clippedVideo.play(), this.afterVideo.play();
                        },
                    },
                    {
                        key: "stopVideos",
                        value: function () {
                            this.isCompare && ((this.beforeLoaded = !1), this.clippedVideo.pause()), (this.afterLoaded = !1), this.afterVideo.pause();
                        },
                    },
                    {
                        key: "prepareItems",
                        value: function () {
                            if (this.videoItems.children.length > 1) {
                                var e = this.videoItems.children[0].cloneNode(!0),
                                    t = this.videoItems.children[this.videoItems.children.length - 1].cloneNode(!0);
                                this.videoItems.children[0].classList.add("visible"),
                                    this.videoItems.appendChild(e),
                                    this.videoItems.insertBefore(t, this.videoItems.children[0]),
                                    (this.videoItems.style.transform = "translateX(-".concat(this.getItemWidth(), "px)"));
                            } else this.controlsBlock.style.display = "none";
                        },
                    },
                ]) && i(e.prototype, t),
                n && i(e, n),
                Object.defineProperty(e, "prototype", { writable: !1 }),
                e
            );
            var e, t, n;
        })();
        document.addEventListener("DOMContentLoaded", function () {
            document.querySelectorAll(".home-hero-compare-video").forEach(function (e) {
                new r(e);
            });
        });
    },
    855: function (e, t) {
        function n(e) {
            return (n =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      })(e);
        }
        function i() {
            "use strict";
            i = function () {
                return t;
            };
            var e,
                t = {},
                o = Object.prototype,
                r = o.hasOwnProperty,
                a =
                    Object.defineProperty ||
                    function (e, t, n) {
                        e[t] = n.value;
                    },
                s = "function" == typeof Symbol ? Symbol : {},
                l = s.iterator || "@@iterator",
                c = s.asyncIterator || "@@asyncIterator",
                u = s.toStringTag || "@@toStringTag";
            function d(e, t, n) {
                return Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }), e[t];
            }
            try {
                d({}, "");
            } catch (e) {
                d = function (e, t, n) {
                    return (e[t] = n);
                };
            }
            function f(e, t, n, i) {
                var o = t && t.prototype instanceof b ? t : b,
                    r = Object.create(o.prototype),
                    s = new x(i || []);
                return a(r, "_invoke", { value: T(e, n, s) }), r;
            }
            function h(e, t, n) {
                try {
                    return { type: "normal", arg: e.call(t, n) };
                } catch (e) {
                    return { type: "throw", arg: e };
                }
            }
            t.wrap = f;
            var p = "suspendedStart",
                v = "executing",
                y = "completed",
                m = {};
            function b() {}
            function g() {}
            function w() {}
            var S = {};
            d(S, l, function () {
                return this;
            });
            var E = Object.getPrototypeOf,
                k = E && E(E($([])));
            k && k !== o && r.call(k, l) && (S = k);
            var L = (w.prototype = b.prototype = Object.create(S));
            function _(e) {
                ["next", "throw", "return"].forEach(function (t) {
                    d(e, t, function (e) {
                        return this._invoke(t, e);
                    });
                });
            }
            function j(e, t) {
                function i(o, a, s, l) {
                    var c = h(e[o], e, a);
                    if ("throw" !== c.type) {
                        var u = c.arg,
                            d = u.value;
                        return d && "object" == n(d) && r.call(d, "__await")
                            ? t.resolve(d.__await).then(
                                  function (e) {
                                      i("next", e, s, l);
                                  },
                                  function (e) {
                                      i("throw", e, s, l);
                                  }
                              )
                            : t.resolve(d).then(
                                  function (e) {
                                      (u.value = e), s(u);
                                  },
                                  function (e) {
                                      return i("throw", e, s, l);
                                  }
                              );
                    }
                    l(c.arg);
                }
                var o;
                a(this, "_invoke", {
                    value: function (e, n) {
                        function r() {
                            return new t(function (t, o) {
                                i(e, n, t, o);
                            });
                        }
                        return (o = o ? o.then(r, r) : r());
                    },
                });
            }
            function T(t, n, i) {
                var o = p;
                return function (r, a) {
                    if (o === v) throw Error("Generator is already running");
                    if (o === y) {
                        if ("throw" === r) throw a;
                        return { value: e, done: !0 };
                    }
                    for (i.method = r, i.arg = a; ; ) {
                        var s = i.delegate;
                        if (s) {
                            var l = C(s, i);
                            if (l) {
                                if (l === m) continue;
                                return l;
                            }
                        }
                        if ("next" === i.method) i.sent = i._sent = i.arg;
                        else if ("throw" === i.method) {
                            if (o === p) throw ((o = y), i.arg);
                            i.dispatchException(i.arg);
                        } else "return" === i.method && i.abrupt("return", i.arg);
                        o = v;
                        var c = h(t, n, i);
                        if ("normal" === c.type) {
                            if (((o = i.done ? y : "suspendedYield"), c.arg === m)) continue;
                            return { value: c.arg, done: i.done };
                        }
                        "throw" === c.type && ((o = y), (i.method = "throw"), (i.arg = c.arg));
                    }
                };
            }
            function C(t, n) {
                var i = n.method,
                    o = t.iterator[i];
                if (o === e)
                    return (
                        (n.delegate = null),
                        ("throw" === i && t.iterator.return && ((n.method = "return"), (n.arg = e), C(t, n), "throw" === n.method)) ||
                            ("return" !== i && ((n.method = "throw"), (n.arg = new TypeError("The iterator does not provide a '" + i + "' method")))),
                        m
                    );
                var r = h(o, t.iterator, n.arg);
                if ("throw" === r.type) return (n.method = "throw"), (n.arg = r.arg), (n.delegate = null), m;
                var a = r.arg;
                return a
                    ? a.done
                        ? ((n[t.resultName] = a.value), (n.next = t.nextLoc), "return" !== n.method && ((n.method = "next"), (n.arg = e)), (n.delegate = null), m)
                        : a
                    : ((n.method = "throw"), (n.arg = new TypeError("iterator result is not an object")), (n.delegate = null), m);
            }
            function O(e) {
                var t = { tryLoc: e[0] };
                1 in e && (t.catchLoc = e[1]), 2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])), this.tryEntries.push(t);
            }
            function P(e) {
                var t = e.completion || {};
                (t.type = "normal"), delete t.arg, (e.completion = t);
            }
            function x(e) {
                (this.tryEntries = [{ tryLoc: "root" }]), e.forEach(O, this), this.reset(!0);
            }
            function $(t) {
                if (t || "" === t) {
                    var i = t[l];
                    if (i) return i.call(t);
                    if ("function" == typeof t.next) return t;
                    if (!isNaN(t.length)) {
                        var o = -1,
                            a = function n() {
                                for (; ++o < t.length; ) if (r.call(t, o)) return (n.value = t[o]), (n.done = !1), n;
                                return (n.value = e), (n.done = !0), n;
                            };
                        return (a.next = a);
                    }
                }
                throw new TypeError(n(t) + " is not iterable");
            }
            return (
                (g.prototype = w),
                a(L, "constructor", { value: w, configurable: !0 }),
                a(w, "constructor", { value: g, configurable: !0 }),
                (g.displayName = d(w, u, "GeneratorFunction")),
                (t.isGeneratorFunction = function (e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === g || "GeneratorFunction" === (t.displayName || t.name));
                }),
                (t.mark = function (e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, w) : ((e.__proto__ = w), d(e, u, "GeneratorFunction")), (e.prototype = Object.create(L)), e;
                }),
                (t.awrap = function (e) {
                    return { __await: e };
                }),
                _(j.prototype),
                d(j.prototype, c, function () {
                    return this;
                }),
                (t.AsyncIterator = j),
                (t.async = function (e, n, i, o, r) {
                    void 0 === r && (r = Promise);
                    var a = new j(f(e, n, i, o), r);
                    return t.isGeneratorFunction(n)
                        ? a
                        : a.next().then(function (e) {
                              return e.done ? e.value : a.next();
                          });
                }),
                _(L),
                d(L, u, "Generator"),
                d(L, l, function () {
                    return this;
                }),
                d(L, "toString", function () {
                    return "[object Generator]";
                }),
                (t.keys = function (e) {
                    var t = Object(e),
                        n = [];
                    for (var i in t) n.push(i);
                    return (
                        n.reverse(),
                        function e() {
                            for (; n.length; ) {
                                var i = n.pop();
                                if (i in t) return (e.value = i), (e.done = !1), e;
                            }
                            return (e.done = !0), e;
                        }
                    );
                }),
                (t.values = $),
                (x.prototype = {
                    constructor: x,
                    reset: function (t) {
                        if (((this.prev = 0), (this.next = 0), (this.sent = this._sent = e), (this.done = !1), (this.delegate = null), (this.method = "next"), (this.arg = e), this.tryEntries.forEach(P), !t))
                            for (var n in this) "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e);
                    },
                    stop: function () {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type) throw e.arg;
                        return this.rval;
                    },
                    dispatchException: function (t) {
                        if (this.done) throw t;
                        var n = this;
                        function i(i, o) {
                            return (s.type = "throw"), (s.arg = t), (n.next = i), o && ((n.method = "next"), (n.arg = e)), !!o;
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var a = this.tryEntries[o],
                                s = a.completion;
                            if ("root" === a.tryLoc) return i("end");
                            if (a.tryLoc <= this.prev) {
                                var l = r.call(a, "catchLoc"),
                                    c = r.call(a, "finallyLoc");
                                if (l && c) {
                                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                                } else if (l) {
                                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                                } else {
                                    if (!c) throw Error("try statement without catch or finally");
                                    if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                                }
                            }
                        }
                    },
                    abrupt: function (e, t) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var i = this.tryEntries[n];
                            if (i.tryLoc <= this.prev && r.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                                var o = i;
                                break;
                            }
                        }
                        o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                        var a = o ? o.completion : {};
                        return (a.type = e), (a.arg = t), o ? ((this.method = "next"), (this.next = o.finallyLoc), m) : this.complete(a);
                    },
                    complete: function (e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return (
                            "break" === e.type || "continue" === e.type
                                ? (this.next = e.arg)
                                : "return" === e.type
                                ? ((this.rval = this.arg = e.arg), (this.method = "return"), (this.next = "end"))
                                : "normal" === e.type && t && (this.next = t),
                            m
                        );
                    },
                    finish: function (e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), P(n), m;
                        }
                    },
                    catch: function (e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.tryLoc === e) {
                                var i = n.completion;
                                if ("throw" === i.type) {
                                    var o = i.arg;
                                    P(n);
                                }
                                return o;
                            }
                        }
                        throw Error("illegal catch attempt");
                    },
                    delegateYield: function (t, n, i) {
                        return (this.delegate = { iterator: $(t), resultName: n, nextLoc: i }), "next" === this.method && (this.arg = e), m;
                    },
                }),
                t
            );
        }
        function o(e, t, n, i, o, r, a) {
            try {
                var s = e[r](a),
                    l = s.value;
            } catch (e) {
                return void n(e);
            }
            s.done ? t(l) : Promise.resolve(l).then(i, o);
        }
        function r(e) {
            return function () {
                var t = this,
                    n = arguments;
                return new Promise(function (i, r) {
                    var a = e.apply(t, n);
                    function s(e) {
                        o(a, i, r, s, l, "next", e);
                    }
                    function l(e) {
                        o(a, i, r, s, l, "throw", e);
                    }
                    s(void 0);
                });
            };
        }
        function a(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, s(i.key), i);
            }
        }
        function s(e) {
            var t = (function (e, t) {
                if ("object" != n(e) || !e) return e;
                var i = e[Symbol.toPrimitive];
                if (void 0 !== i) {
                    var o = i.call(e, t || "default");
                    if ("object" != n(o)) return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == n(t) ? t : t + "";
        }
        var l = (function () {
            return (
                (e = function e(t) {
                    !(function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                        (this.nodeElement = t),
                        (this.inner = t.querySelector(".thank-you-page-1__inner")),
                        (this.spinner = t.querySelector(".thank-you-page-1__spinner")),
                        (this.userEmail = sessionStorage.getItem("email")),
                        this.init().then();
                }),
                (t = [
                    {
                        key: "hideSpinner",
                        value: function () {
                            (this.spinner.style.display = "none"), (this.inner.style.visibility = "visible");
                        },
                    },
                    {
                        key: "init",
                        value:
                            ((s = r(
                                i().mark(function e() {
                                    var t,
                                        n = this;
                                    return i().wrap(
                                        function (e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        return (e.next = 2), this.getVidByEmail(this.userEmail);
                                                    case 2:
                                                        (t = e.sent),
                                                            (this.inner.querySelector(".thank-you-page-1__title").querySelector("a").href = t ? "https://www.banuba.com/token-page?vid=".concat(t) : "https://www.banuba.com/sdk-instructions"),
                                                            setTimeout(function () {
                                                                n.hideSpinner();
                                                            }, 1200);
                                                    case 6:
                                                    case "end":
                                                        return e.stop();
                                                }
                                        },
                                        e,
                                        this
                                    );
                                })
                            )),
                            function () {
                                return s.apply(this, arguments);
                            }),
                    },
                    {
                        key: "wait",
                        value: function (e) {
                            return new Promise(function (t) {
                                return setTimeout(t, e);
                            });
                        },
                    },
                    {
                        key: "fetchRetry",
                        value: function (e, t, n) {
                            var i = this,
                                o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                                r = function (r) {
                                    if (0 === n) throw r;
                                    return i.wait(t).then(function () {
                                        return i.fetchRetry(e, t, n - 1, o);
                                    });
                                };
                            return fetch(e, o).catch(r);
                        },
                    },
                    {
                        key: "getVidByEmail",
                        value:
                            ((o = r(
                                i().mark(function e(t) {
                                    var n, o;
                                    return i().wrap(
                                        function (e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        return (e.prev = 0), (e.next = 3), this.fetchRetry("https://svc.arcloud.banuba.net/arcloud/vid", 2e3, 5, { method: "POST", body: JSON.stringify({ email: t }) });
                                                    case 3:
                                                        return (n = e.sent), (e.next = 6), n.json();
                                                    case 6:
                                                        return (o = e.sent), e.abrupt("return", null == o ? void 0 : o.vid);
                                                    case 10:
                                                        return (e.prev = 10), (e.t0 = e.catch(0)), e.abrupt("return", void 0);
                                                    case 13:
                                                    case "end":
                                                        return e.stop();
                                                }
                                        },
                                        e,
                                        this,
                                        [[0, 10]]
                                    );
                                })
                            )),
                            function (e) {
                                return o.apply(this, arguments);
                            }),
                    },
                ]) && a(e.prototype, t),
                n && a(e, n),
                Object.defineProperty(e, "prototype", { writable: !1 }),
                e
            );
            var e, t, n, o, s;
        })();
        document.addEventListener("DOMContentLoaded", function () {
            document.querySelectorAll(".thank-you-page-1").forEach(function (e) {
                return new l(e);
            });
        });
    },
    856: function (e, t) {
        function n(e) {
            return (n =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      })(e);
        }
        function i(e, t) {
            return (
                (function (e) {
                    if (Array.isArray(e)) return e;
                })(e) ||
                (function (e, t) {
                    var n = null == e ? null : ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
                    if (null != n) {
                        var i,
                            o,
                            r,
                            a,
                            s = [],
                            l = !0,
                            c = !1;
                        try {
                            if (((r = (n = n.call(e)).next), 0 === t)) {
                                if (Object(n) !== n) return;
                                l = !1;
                            } else for (; !(l = (i = r.call(n)).done) && (s.push(i.value), s.length !== t); l = !0);
                        } catch (e) {
                            (c = !0), (o = e);
                        } finally {
                            try {
                                if (!l && null != n.return && ((a = n.return()), Object(a) !== a)) return;
                            } finally {
                                if (c) throw o;
                            }
                        }
                        return s;
                    }
                })(e, t) ||
                r(e, t) ||
                (function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                })()
            );
        }
        function o(e, t) {
            var n = ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
            if (!n) {
                if (Array.isArray(e) || (n = r(e)) || (t && e && "number" == typeof e.length)) {
                    n && (e = n);
                    var i = 0,
                        o = function () {};
                    return {
                        s: o,
                        n: function () {
                            return i >= e.length ? { done: !0 } : { done: !1, value: e[i++] };
                        },
                        e: function (e) {
                            throw e;
                        },
                        f: o,
                    };
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            var a,
                s = !0,
                l = !1;
            return {
                s: function () {
                    n = n.call(e);
                },
                n: function () {
                    var e = n.next();
                    return (s = e.done), e;
                },
                e: function (e) {
                    (l = !0), (a = e);
                },
                f: function () {
                    try {
                        s || null == n.return || n.return();
                    } finally {
                        if (l) throw a;
                    }
                },
            };
        }
        function r(e, t) {
            if (e) {
                if ("string" == typeof e) return a(e, t);
                var n = {}.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? a(e, t) : void 0;
            }
        }
        function a(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
            return i;
        }
        function s(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, l(i.key), i);
            }
        }
        function l(e) {
            var t = (function (e, t) {
                if ("object" != n(e) || !e) return e;
                var i = e[Symbol.toPrimitive];
                if (void 0 !== i) {
                    var o = i.call(e, t || "default");
                    if ("object" != n(o)) return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == n(t) ? t : t + "";
        }
        new ((function () {
            return (
                (e = function e() {
                    !(function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                        this.addEvents();
                }),
                (t = [
                    {
                        key: "addEvents",
                        value: function () {
                            var e = this;
                            if (
                                (document.addEventListener("DOMContentLoaded", function (t) {
                                    if (
                                        (e.initLibs(),
                                        e.initModules(),
                                        document.querySelectorAll('[href*="#form"]').forEach(function (e) {
                                            var t = e.href.split("#")[1];
                                            e.addEventListener("click", function (e) {
                                                window.CONTACT_FORM_SUBMITTED
                                                    ? (e.preventDefault(), localStorage.setItem("open_form_on_load", "1"), window.location.reload())
                                                    : !document.querySelector(".section-form #".concat(t)) && document.querySelector(".popup-form #".concat(t)) && (e.preventDefault(), PopupManager.open(t));
                                            });
                                        }),
                                        localStorage.getItem("open_form_on_load"))
                                    ) {
                                        localStorage.removeItem("open_form_on_load");
                                        var n = document.querySelector('[href="#form"]');
                                        n && n.click();
                                    }
                                }),
                                document.documentElement.addEventListener("touchstart", function (e) {
                                    e.touches.length > 1 && e.preventDefault();
                                }),
                                document.referrer)
                            ) {
                                var t,
                                    n = new URL(window.location.href),
                                    r = o(new URL(document.referrer).searchParams);
                                try {
                                    for (r.s(); !(t = r.n()).done; ) {
                                        var a = i(t.value, 2),
                                            s = a[0],
                                            l = a[1];
                                        s.toLowerCase().startsWith("utm_") && n.searchParams.set(s, l);
                                    }
                                } catch (e) {
                                    r.e(e);
                                } finally {
                                    r.f();
                                }
                                window.history.replaceState(null, null, n),
                                    document.querySelectorAll(".js-go-back").forEach(function (e) {
                                        console.log(document.referrer),
                                            e.addEventListener("click", function (e) {
                                                e.preventDefault(), window.history.back();
                                            });
                                    });
                            }
                            var c = window.location.search,
                                u = new URLSearchParams(c);
                            document.querySelectorAll("a[href^='https://tryon.koodall.ai/']").forEach(function (e) {
                                var t,
                                    n = new URL(e.href),
                                    r = o(u);
                                try {
                                    for (r.s(); !(t = r.n()).done; ) {
                                        var a = i(t.value, 2),
                                            s = a[0],
                                            l = a[1];
                                        s.startsWith("utm_") && n.searchParams.set(s, l);
                                    }
                                } catch (e) {
                                    r.e(e);
                                } finally {
                                    r.f();
                                }
                                e.href = n.href;
                            });
                        },
                    },
                    {
                        key: "initLibs",
                        value: function () {
                            window.svg4everybody();
                        },
                    },
                    {
                        key: "initModules",
                        value: function () {
                            disablingPreloader(), initAutoplayVideo(), initArticleParser(), initScrollProgress();
                        },
                    },
                ]) && s(e.prototype, t),
                n && s(e, n),
                Object.defineProperty(e, "prototype", { writable: !1 }),
                e
            );
            var e, t, n;
        })())();
    },
    857: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.regionAPIs = void 0),
            (t.regionAPIs = new Map([
                ["us", "https://api-iam.intercom.io"],
                ["eu", "https://api-iam.eu.intercom.io"],
                ["ap", "https://api-iam.au.intercom.io"],
            ]));
    },
    858: function (e, t, n) {
        "use strict";
        var i =
            (this && this.__awaiter) ||
            function (e, t, n, i) {
                return new (n || (n = Promise))(function (o, r) {
                    function a(e) {
                        try {
                            l(i.next(e));
                        } catch (e) {
                            r(e);
                        }
                    }
                    function s(e) {
                        try {
                            l(i.throw(e));
                        } catch (e) {
                            r(e);
                        }
                    }
                    function l(e) {
                        var t;
                        e.done
                            ? o(e.value)
                            : ((t = e.value),
                              t instanceof n
                                  ? t
                                  : new n(function (e) {
                                        e(t);
                                    })).then(a, s);
                    }
                    l((i = i.apply(e, t || [])).next());
                });
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.ref = t.init = void 0);
        const o = function () {
            o.loaderQueue(arguments);
        };
        (o.q = []),
            (o.loaderQueue = function (e) {
                o.q.push(e);
            });
        const r = function () {
                var e,
                    t,
                    n = document;
                if (!n.getElementById("_intercom_npm_loader")) {
                    var i = n.createElement("script");
                    (i.type = "text/javascript"), (i.async = !0), (i.id = "_intercom_npm_loader"), (i.src = "https://widget.intercom.io/widget/" + (null === (e = window.intercomSettings) || void 0 === e ? void 0 : e.app_id));
                    var o = n.getElementsByTagName("script")[0];
                    null === (t = o.parentNode) || void 0 === t || t.insertBefore(i, o);
                }
            },
            a = () => "complete" === document.readyState || "interactive" === document.readyState;
        (t.init = () =>
            i(void 0, void 0, void 0, function* () {
                var e = window,
                    t = e.Intercom;
                e.intercomSettings && (e.intercomSettings.installation_type = "npm-package"),
                    "function" == typeof t
                        ? (t("reattach_activator"), t("update", e.intercomSettings))
                        : ((e.Intercom = o),
                          a()
                              ? r()
                              : (document.addEventListener("readystatechange", function () {
                                    a() && r();
                                }),
                                e.attachEvent ? e.attachEvent("onload", r) : e.addEventListener("load", r, !1)));
            })),
            (t.ref = void 0);
    },
    860: function (e, t, n) {
        "use strict";
        n.r(t);
        n(800),
            n(801),
            n(802),
            n(803),
            n(804),
            n(805),
            n(806),
            n(807),
            n(808),
            n(809),
            n(810),
            n(811),
            n(812),
            n(813),
            n(814),
            n(815),
            n(816),
            n(817),
            n(818),
            n(819),
            n(820),
            n(821),
            n(822),
            n(823),
            n(824),
            n(825),
            n(826),
            n(827),
            n(828),
            n(829),
            n(830),
            n(831),
            n(832),
            n(833),
            n(834),
            n(835),
            n(836),
            n(837),
            n(838),
            n(839),
            n(840),
            n(841),
            n(842),
            n(843);
        function i(e) {
            return e && "." === e.substr(0, 1) ? e.substr(1) : e;
        }
        function o(e) {
            return (o =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      })(e);
        }
        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function a(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, l(i.key), i);
            }
        }
        function s(e, t, n) {
            return t && a(e.prototype, t), n && a(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
        }
        function l(e) {
            var t = (function (e, t) {
                if ("object" != o(e) || !e) return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var i = n.call(e, t || "default");
                    if ("object" != o(i)) return i;
                    throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == o(t) ? t : t + "";
        }
        var c = (function () {
                return s(
                    function e(t) {
                        r(this, e),
                            (this.nodeElement = t),
                            this.nodeElement &&
                                ((this.timeout = Number(this.nodeElement.dataset.timeout) || 7e3),
                                (this.slidesCount = t.querySelectorAll(".swiper-slide").length),
                                (this.startTime = null),
                                (this.elapsedTime = null),
                                (this.timeFraction = null),
                                (this.activeSlideElement = null),
                                (this.activeSlideElementProgress = null),
                                this.init());
                    },
                    [
                        {
                            key: "initSwiper",
                            value: function () {
                                (this.swiper = new Swiper(this.nodeElement, {
                                    slidesPerView: 1,
                                    centeredSlides: !0,
                                    spaceBetween: 0,
                                    loop: !0,
                                    speed: 1e3,
                                    autoplay: !1,
                                    on: { init: this.onSlideChange.bind(this), slideChange: this.onSlideChange.bind(this) },
                                    breakpoints: { 768: { spaceBetween: 0 }, 1280: { spaceBetween: 0 } },
                                })),
                                    this.addNavigation(),
                                    this.updateActiveSlideElement();
                            },
                        },
                        {
                            key: "_createNextElement",
                            value: function () {
                                var e = this,
                                    t = document.createElement("div");
                                return (
                                    t.classList.add(i(".js-slider-case-studies__button-next")),
                                    t.addEventListener("click", function () {
                                        e.swiper.slideNext();
                                    }),
                                    t
                                );
                            },
                        },
                        {
                            key: "_createPrevElement",
                            value: function () {
                                var e = this,
                                    t = document.createElement("div");
                                return (
                                    t.classList.add(i(".js-slider-case-studies__button-prev")),
                                    t.addEventListener("click", function () {
                                        e.swiper.slidePrev();
                                    }),
                                    t
                                );
                            },
                        },
                        {
                            key: "_createNavigationElement",
                            value: function () {
                                var e = document.createElement("div");
                                return e.classList.add(i(".js-slider-case-studies__navigation")), e.append(this._createPrevElement()), e.append(this._createNextElement()), e;
                            },
                        },
                        {
                            key: "addNavigation",
                            value: function () {
                                var e = this._createNavigationElement();
                                e.classList.add("case-studies__container"), this.nodeElement.append(e);
                            },
                        },
                        {
                            key: "updateNavigation",
                            value: function (e) {
                                var t = e.nextElementSibling.querySelector(".case").dataset.slideTitle,
                                    n = e.previousElementSibling.querySelector(".case").dataset.slideTitle,
                                    i = this.nodeElement.querySelector(".js-slider-case-studies__navigation"),
                                    o = i.querySelector(".js-slider-case-studies__button-next"),
                                    r = i.querySelector(".js-slider-case-studies__button-prev");
                                (o.textContent = t), (r.textContent = n);
                            },
                        },
                        {
                            key: "prepareHtmlPaginationForSlide",
                            value: function (e, t) {
                                var n = this;
                                if (!e.querySelector(".js-slider-case-studies__pagination")) {
                                    var i = document.createElement("div");
                                    i.classList.add("js-slider-case-studies__pagination");
                                    for (
                                        var o = function () {
                                                var e = document.createElement("div");
                                                if ((e.classList.add("js-slider-case-studies__bullet"), r === t)) {
                                                    var o = document.createElement("div");
                                                    o.classList.add("js-slider-case-studies__progress"), e.appendChild(o);
                                                }
                                                i.appendChild(e),
                                                    (function (t) {
                                                        e.addEventListener("click", function (e) {
                                                            e.preventDefault(),
                                                                n.swiper.realIndex !== t &&
                                                                    (n.swiper.realIndex === n.slidesCount - 1 && 0 === t
                                                                        ? n.swiper.slideNext()
                                                                        : 0 === n.swiper.realIndex && t === n.slidesCount - 1
                                                                        ? n.swiper.slidePrev()
                                                                        : n.swiper.slideTo(t + 1));
                                                        });
                                                    })(r);
                                            },
                                            r = 0;
                                        r < this.slidesCount;
                                        r++
                                    )
                                        o();
                                    var a = e.querySelector(".case-studies-item__navigation");
                                    a && (a.classList.add("active"), a.append(i));
                                }
                            },
                        },
                        {
                            key: "updateActiveSlideElement",
                            value: function () {
                                this.swiper &&
                                    ((this.activeSlideElement = this.swiper.slides[this.swiper.activeIndex]),
                                    this.prepareHtmlPaginationForSlide(this.activeSlideElement, this.swiper.realIndex),
                                    this.activeSlideElement ? (this.activeSlideElementProgress = this.activeSlideElement.querySelector(".js-slider-case-studies__progress")) : (this.activeSlideElementProgress = null));
                            },
                        },
                        {
                            key: "init",
                            value: function () {
                                this.initSwiper();
                            },
                        },
                        {
                            key: "toNextSlide",
                            value: function () {
                                this.swiper.slideNext();
                            },
                        },
                        {
                            key: "timing",
                            value: function (e) {
                                return e;
                            },
                        },
                        {
                            key: "animate",
                            value: function (e) {
                                var t = (e - this.startTime + this.elapsedTime) / this.timeout;
                                t > 1 && (t = 1);
                                var n = this.timing(t);
                                this.drawProgress(n), t < 1 ? (this.animationId = raf(this.animate.bind(this))) : this.toNextSlide();
                            },
                        },
                        {
                            key: "drawProgress",
                            value: function (e) {
                                this.activeSlideElementProgress && (this.activeSlideElementProgress.style.transform = "scaleX(".concat(e, ")"));
                            },
                        },
                        {
                            key: "startProgress",
                            value: function () {
                                (this.activeSlideElement = this.swiper ? this.swiper.slides[this.swiper.activeIndex] : null), (this.startTime = performance.now()), (this.elapsedTime = 0), (this.animationId = raf(this.animate.bind(this)));
                            },
                        },
                        {
                            key: "resetProgress",
                            value: function () {
                                (this.startTime = null), (this.elapsedTime = null), (this.timeFraction = null), this.drawProgress(0);
                            },
                        },
                        {
                            key: "onSlideChange",
                            value: function () {
                                this.updateActiveSlideElement(), this.resetProgress(), this.startProgress();
                            },
                        },
                    ]
                );
            })(),
            u = (function () {
                return s(
                    function e() {
                        r(this, e);
                    },
                    null,
                    [
                        {
                            key: "initOnLoad",
                            value: function () {
                                document.querySelectorAll(".js-slider-case-studies").forEach(function (e) {
                                    new c(e);
                                });
                            },
                        },
                    ]
                );
            })();
        u.initOnLoad(), (window.SliderCaseStudiesUI = u);
        n(844), n(845), n(846), n(847), n(848), n(849), n(850), n(851), n(852), n(853), n(854), n(855), n(856);
        var d = n(268);
        n.n(d)()({ app_id: null });
    },
});
