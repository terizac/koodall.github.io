(() => {
  var ue = Object.create;
  var Q = Object.defineProperty;
  var he = Object.getOwnPropertyDescriptor;
  var de = Object.getOwnPropertyNames;
  var fe = Object.getPrototypeOf,
      pe = Object.prototype.hasOwnProperty;
  var ge = (e, s) => () => (s || e((s = {
      exports: {}
  }).exports, s), s.exports);
  var me = (e, s, i, a) => {
      if (s && typeof s == "object" || typeof s == "function")
          for (let o of de(s)) !pe.call(e, o) && o !== i && Q(e, o, {
              get: () => s[o],
              enumerable: !(a = he(s, o)) || a.enumerable
          });
      return e
  };
  var be = (e, s, i) => (i = e != null ? ue(fe(e)) : {}, me(s || !e || !e.__esModule ? Q(i, "default", {
      value: e,
      enumerable: !0
  }) : i, e));
  var K = ge((G, Z) => {
      (function(e, s) {
          typeof define == "function" && define.amd ? define(function() {
              return e.is = s()
          }) : typeof G == "object" ? Z.exports = s() : e.is = s()
      })(G, function() {
          var e = {};
          e.VERSION = "0.8.0", e.not = {}, e.all = {}, e.any = {};
          var s = Object.prototype.toString,
              i = Array.prototype.slice,
              a = Object.prototype.hasOwnProperty;

          function o(t) {
              return function() {
                  return !t.apply(null, i.call(arguments))
              }
          }

          function l(t) {
              return function() {
                  for (var r = f(arguments), p = r.length, $ = 0; $ < p; $++)
                      if (!t.call(null, r[$])) return !1;
                  return !0
              }
          }

          function h(t) {
              return function() {
                  for (var r = f(arguments), p = r.length, $ = 0; $ < p; $++)
                      if (t.call(null, r[$])) return !0;
                  return !1
              }
          }
          var m = {
              "<": function(t, r) {
                  return t < r
              },
              "<=": function(t, r) {
                  return t <= r
              },
              ">": function(t, r) {
                  return t > r
              },
              ">=": function(t, r) {
                  return t >= r
              }
          };

          function d(t, r) {
              var p = r + "",
                  $ = +(p.match(/\d+/) || NaN),
                  R = p.match(/^[<>]=?|/)[0];
              return m[R] ? m[R](t, $) : t == $ || $ !== $
          }

          function f(t) {
              var r = i.call(t),
                  p = r.length;
              return p === 1 && e.array(r[0]) && (r = r[0]), r
          }
          e.arguments = function(t) {
              return s.call(t) === "[object Arguments]" || t != null && typeof t == "object" && "callee" in t
          }, e.array = Array.isArray || function(t) {
              return s.call(t) === "[object Array]"
          }, e.boolean = function(t) {
              return t === !0 || t === !1 || s.call(t) === "[object Boolean]"
          }, e.char = function(t) {
              return e.string(t) && t.length === 1
          }, e.date = function(t) {
              return s.call(t) === "[object Date]"
          }, e.domNode = function(t) {
              return e.object(t) && t.nodeType > 0
          }, e.error = function(t) {
              return s.call(t) === "[object Error]"
          }, e.function = function(t) {
              return s.call(t) === "[object Function]" || typeof t == "function"
          }, e.json = function(t) {
              return s.call(t) === "[object Object]"
          }, e.nan = function(t) {
              return t !== t
          }, e.null = function(t) {
              return t === null
          }, e.number = function(t) {
              return e.not.nan(t) && s.call(t) === "[object Number]"
          }, e.object = function(t) {
              return Object(t) === t
          }, e.regexp = function(t) {
              return s.call(t) === "[object RegExp]"
          }, e.sameType = function(t, r) {
              var p = s.call(t);
              return p !== s.call(r) ? !1 : p === "[object Number]" ? !e.any.nan(t, r) || e.all.nan(t, r) : !0
          }, e.sameType.api = ["not"], e.string = function(t) {
              return s.call(t) === "[object String]"
          }, e.undefined = function(t) {
              return t === void 0
          }, e.windowObject = function(t) {
              return t != null && typeof t == "object" && "setInterval" in t
          }, e.empty = function(t) {
              if (e.object(t)) {
                  var r = Object.getOwnPropertyNames(t).length;
                  return !!(r === 0 || r === 1 && e.array(t) || r === 2 && e.arguments(t))
              }
              return t === ""
          }, e.existy = function(t) {
              return t != null
          }, e.falsy = function(t) {
              return !t
          }, e.truthy = o(e.falsy), e.above = function(t, r) {
              return e.all.number(t, r) && t > r
          }, e.above.api = ["not"], e.decimal = function(t) {
              return e.number(t) && t % 1 !== 0
          }, e.equal = function(t, r) {
              return e.all.number(t, r) ? t === r && 1 / t === 1 / r : e.all.string(t, r) || e.all.regexp(t, r) ? "" + t == "" + r : e.all.boolean(t, r) ? t === r : !1
          }, e.equal.api = ["not"], e.even = function(t) {
              return e.number(t) && t % 2 === 0
          }, e.finite = isFinite || function(t) {
              return e.not.infinite(t) && e.not.nan(t)
          }, e.infinite = function(t) {
              return t === 1 / 0 || t === -1 / 0
          }, e.integer = function(t) {
              return e.number(t) && t % 1 === 0
          }, e.negative = function(t) {
              return e.number(t) && t < 0
          }, e.odd = function(t) {
              return e.number(t) && t % 2 === 1
          }, e.positive = function(t) {
              return e.number(t) && t > 0
          }, e.under = function(t, r) {
              return e.all.number(t, r) && t < r
          }, e.under.api = ["not"], e.within = function(t, r, p) {
              return e.all.number(t, r, p) && t > r && t < p
          }, e.within.api = ["not"];
          var b = {
              affirmative: /^(?:1|t(?:rue)?|y(?:es)?|ok(?:ay)?)$/,
              alphaNumeric: /^[A-Za-z0-9]+$/,
              caPostalCode: /^(?!.*[DFIOQU])[A-VXY][0-9][A-Z]\s?[0-9][A-Z][0-9]$/,
              creditCard: /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/,
              dateString: /^(1[0-2]|0?[1-9])([\/-])(3[01]|[12][0-9]|0?[1-9])(?:\2)(?:[0-9]{2})?[0-9]{2}$/,
              email: /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i,
              eppPhone: /^\+[0-9]{1,3}\.[0-9]{4,14}(?:x.+)?$/,
              hexadecimal: /^(?:0x)?[0-9a-fA-F]+$/,
              hexColor: /^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/,
              ipv4: /^(?:(?:\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])\.){3}(?:\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])$/,
              ipv6: /^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i,
              nanpPhone: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
              socialSecurityNumber: /^(?!000|666)[0-8][0-9]{2}-?(?!00)[0-9]{2}-?(?!0000)[0-9]{4}$/,
              timeString: /^(2[0-3]|[01]?[0-9]):([0-5]?[0-9]):([0-5]?[0-9])$/,
              ukPostCode: /^[A-Z]{1,2}[0-9RCHNQ][0-9A-Z]?\s?[0-9][ABD-HJLNP-UW-Z]{2}$|^[A-Z]{2}-?[0-9]{4}$/,
              url: /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/i,
              usZipCode: /^[0-9]{5}(?:-[0-9]{4})?$/
          };

          function _(t, r) {
              e[t] = function(p) {
                  return r[t].test(p)
              }
          }
          for (var E in b) b.hasOwnProperty(E) && _(E, b);
          e.ip = function(t) {
              return e.ipv4(t) || e.ipv6(t)
          }, e.capitalized = function(t) {
              if (e.not.string(t)) return !1;
              for (var r = t.split(" "), p = 0; p < r.length; p++) {
                  var $ = r[p];
                  if ($.length) {
                      var R = $.charAt(0);
                      if (R !== R.toUpperCase()) return !1
                  }
              }
              return !0
          }, e.endWith = function(t, r) {
              if (e.not.string(t)) return !1;
              r += "";
              var p = t.length - r.length;
              return p >= 0 && t.indexOf(r, p) === p
          }, e.endWith.api = ["not"], e.include = function(t, r) {
              return t.indexOf(r) > -1
          }, e.include.api = ["not"], e.lowerCase = function(t) {
              return e.string(t) && t === t.toLowerCase()
          }, e.palindrome = function(t) {
              if (e.not.string(t)) return !1;
              t = t.replace(/[^a-zA-Z0-9]+/g, "").toLowerCase();
              for (var r = t.length - 1, p = 0, $ = Math.floor(r / 2); p <= $; p++)
                  if (t.charAt(p) !== t.charAt(r - p)) return !1;
              return !0
          }, e.space = function(t) {
              if (e.not.char(t)) return !1;
              var r = t.charCodeAt(0);
              return r > 8 && r < 14 || r === 32
          }, e.startWith = function(t, r) {
              return e.string(t) && t.indexOf(r) === 0
          }, e.startWith.api = ["not"], e.upperCase = function(t) {
              return e.string(t) && t === t.toUpperCase()
          };
          var S = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"],
              O = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
          e.day = function(t, r) {
              return e.date(t) && r.toLowerCase() === S[t.getDay()]
          }, e.day.api = ["not"], e.dayLightSavingTime = function(t) {
              var r = new Date(t.getFullYear(), 0, 1),
                  p = new Date(t.getFullYear(), 6, 1),
                  $ = Math.max(r.getTimezoneOffset(), p.getTimezoneOffset());
              return t.getTimezoneOffset() < $
          }, e.future = function(t) {
              var r = new Date;
              return e.date(t) && t.getTime() > r.getTime()
          }, e.inDateRange = function(t, r, p) {
              if (e.not.date(t) || e.not.date(r) || e.not.date(p)) return !1;
              var $ = t.getTime();
              return $ > r.getTime() && $ < p.getTime()
          }, e.inDateRange.api = ["not"], e.inLastMonth = function(t) {
              return e.inDateRange(t, new Date(new Date().setMonth(new Date().getMonth() - 1)), new Date)
          }, e.inLastWeek = function(t) {
              return e.inDateRange(t, new Date(new Date().setDate(new Date().getDate() - 7)), new Date)
          }, e.inLastYear = function(t) {
              return e.inDateRange(t, new Date(new Date().setFullYear(new Date().getFullYear() - 1)), new Date)
          }, e.inNextMonth = function(t) {
              return e.inDateRange(t, new Date, new Date(new Date().setMonth(new Date().getMonth() + 1)))
          }, e.inNextWeek = function(t) {
              return e.inDateRange(t, new Date, new Date(new Date().setDate(new Date().getDate() + 7)))
          }, e.inNextYear = function(t) {
              return e.inDateRange(t, new Date, new Date(new Date().setFullYear(new Date().getFullYear() + 1)))
          }, e.leapYear = function(t) {
              return e.number(t) && (t % 4 === 0 && t % 100 !== 0 || t % 400 === 0)
          }, e.month = function(t, r) {
              return e.date(t) && r.toLowerCase() === O[t.getMonth()]
          }, e.month.api = ["not"], e.past = function(t) {
              var r = new Date;
              return e.date(t) && t.getTime() < r.getTime()
          }, e.quarterOfYear = function(t, r) {
              return e.date(t) && e.number(r) && r === Math.floor((t.getMonth() + 3) / 3)
          }, e.quarterOfYear.api = ["not"], e.today = function(t) {
              var r = new Date,
                  p = r.toDateString();
              return e.date(t) && t.toDateString() === p
          }, e.tomorrow = function(t) {
              var r = new Date,
                  p = new Date(r.setDate(r.getDate() + 1)).toDateString();
              return e.date(t) && t.toDateString() === p
          }, e.weekend = function(t) {
              return e.date(t) && (t.getDay() === 6 || t.getDay() === 0)
          }, e.weekday = o(e.weekend), e.year = function(t, r) {
              return e.date(t) && e.number(r) && r === t.getFullYear()
          }, e.year.api = ["not"], e.yesterday = function(t) {
              var r = new Date,
                  p = new Date(r.setDate(r.getDate() - 1)).toDateString();
              return e.date(t) && t.toDateString() === p
          };
          var ae = e.windowObject(typeof global == "object" && global) && global,
              D = e.windowObject(typeof self == "object" && self) && self,
              ne = e.windowObject(typeof this == "object" && this) && this,
              J = ae || D || ne || Function("return this")(),
              Y = D && D.document,
              oe = J.is,
              M = D && D.navigator,
              j = (M && M.appVersion || "").toLowerCase(),
              v = (M && M.userAgent || "").toLowerCase(),
              ce = (M && M.vendor || "").toLowerCase();
          e.android = function() {
              return /android/.test(v)
          }, e.android.api = ["not"], e.androidPhone = function() {
              return /android/.test(v) && /mobile/.test(v)
          }, e.androidPhone.api = ["not"], e.androidTablet = function() {
              return /android/.test(v) && !/mobile/.test(v)
          }, e.androidTablet.api = ["not"], e.blackberry = function() {
              return /blackberry/.test(v) || /bb10/.test(v)
          }, e.blackberry.api = ["not"], e.chrome = function(t) {
              var r = /google inc/.test(ce) ? v.match(/(?:chrome|crios)\/(\d+)/) : null;
              return r !== null && d(r[1], t)
          }, e.chrome.api = ["not"], e.desktop = function() {
              return e.not.mobile() && e.not.tablet()
          }, e.desktop.api = ["not"], e.edge = function(t) {
              var r = v.match(/edge\/(\d+)/);
              return r !== null && d(r[1], t)
          }, e.edge.api = ["not"], e.firefox = function(t) {
              var r = v.match(/(?:firefox|fxios)\/(\d+)/);
              return r !== null && d(r[1], t)
          }, e.firefox.api = ["not"], e.ie = function(t) {
              var r = v.match(/(?:msie |trident.+?; rv:)(\d+)/);
              return r !== null && d(r[1], t)
          }, e.ie.api = ["not"], e.ios = function() {
              return e.iphone() || e.ipad() || e.ipod()
          }, e.ios.api = ["not"], e.ipad = function(t) {
              var r = v.match(/ipad.+?os (\d+)/);
              return r !== null && d(r[1], t)
          }, e.ipad.api = ["not"], e.iphone = function(t) {
              var r = v.match(/iphone(?:.+?os (\d+))?/);
              return r !== null && d(r[1] || 1, t)
          }, e.iphone.api = ["not"], e.ipod = function(t) {
              var r = v.match(/ipod.+?os (\d+)/);
              return r !== null && d(r[1], t)
          }, e.ipod.api = ["not"], e.linux = function() {
              return /linux/.test(j)
          }, e.linux.api = ["not"], e.mac = function() {
              return /mac/.test(j)
          }, e.mac.api = ["not"], e.mobile = function() {
              return e.iphone() || e.ipod() || e.androidPhone() || e.blackberry() || e.windowsPhone()
          }, e.mobile.api = ["not"], e.offline = o(e.online), e.offline.api = ["not"], e.online = function() {
              return !M || M.onLine === !0
          }, e.online.api = ["not"], e.opera = function(t) {
              var r = v.match(/(?:^opera.+?version|opr)\/(\d+)/);
              return r !== null && d(r[1], t)
          }, e.opera.api = ["not"], e.phantom = function(t) {
              var r = v.match(/phantomjs\/(\d+)/);
              return r !== null && d(r[1], t)
          }, e.phantom.api = ["not"], e.safari = function(t) {
              var r = v.match(/version\/(\d+).+?safari/);
              return r !== null && d(r[1], t)
          }, e.safari.api = ["not"], e.tablet = function() {
              return e.ipad() || e.androidTablet() || e.windowsTablet()
          }, e.tablet.api = ["not"], e.touchDevice = function() {
              return !!Y && ("ontouchstart" in D || "DocumentTouch" in D && Y instanceof DocumentTouch)
          }, e.touchDevice.api = ["not"], e.windows = function() {
              return /win/.test(j)
          }, e.windows.api = ["not"], e.windowsPhone = function() {
              return e.windows() && /phone/.test(v)
          }, e.windowsPhone.api = ["not"], e.windowsTablet = function() {
              return e.windows() && e.not.windowsPhone() && /touch/.test(v)
          }, e.windowsTablet.api = ["not"], e.propertyCount = function(t, r) {
              if (e.not.object(t) || e.not.number(r)) return !1;
              var p = 0;
              for (var $ in t)
                  if (a.call(t, $) && ++p > r) return !1;
              return p === r
          }, e.propertyCount.api = ["not"], e.propertyDefined = function(t, r) {
              return e.object(t) && e.string(r) && r in t
          }, e.propertyDefined.api = ["not"], e.inArray = function(t, r) {
              if (e.not.array(r)) return !1;
              for (var p = 0; p < r.length; p++)
                  if (r[p] === t) return !0;
              return !1
          }, e.inArray.api = ["not"], e.sorted = function(t, r) {
              if (e.not.array(t)) return !1;
              for (var p = m[r] || m[">="], $ = 1; $ < t.length; $++)
                  if (!p(t[$], t[$ - 1])) return !1;
              return !0
          };

          function le() {
              var t = e;
              for (var r in t)
                  if (a.call(t, r) && e.function(t[r]))
                      for (var p = t[r].api || ["not", "all", "any"], $ = 0; $ < p.length; $++) p[$] === "not" && (e.not[r] = o(e[r])), p[$] === "all" && (e.all[r] = l(e[r])), p[$] === "any" && (e.any[r] = h(e[r]))
          }
          return le(), e.setNamespace = function() {
              return J.is = oe, this
          }, e.setRegexp = function(t, r) {
              for (var p in b) a.call(b, p) && r === p && (b[p] = t)
          }, e
      })
  });
  var $e = {
          virtual_try_on: {
              label: "Virtual Try On",
              categories: {
                  glasses: {
                      label: "Glasses Try On",
                      groups: {
                          glasses_model: {
                              label: "Glasses model",
                              effects: [{
                                  name: "Glasses_Clear",
                                  icon: "Glasses_Clear.svg"
                              }, {
                                  name: "glasses_RayBan4165_Dark",
                                  icon: "Glasses_Dark.svg"
                              }]
                          },
                          lenses_try_on: {
                              label: "Lenses try on",
                              effects: [{
                                  name: "Eye_lenses_Blue",
                                  style: "background-color:#33B3FF;border:2px solid #FFFFFF;"
                              }, {
                                  name: "Eye_lenses_Green",
                                  style: "background-color:#33FF33;border:2px solid #FFFFFF;"
                              }]
                          },
                          pupillary_distance: {
                              label: "Eyes distance",
                              effects: [{
                                  name: "empty_effect",
                                  control: "PD"
                              }]
                          }
                      }
                  },
                  head_wearings: {
                      label: "Head wearings",
                      groups: {
                          headdresse: {
                              label: "Headdress",
                              effects: [{
                                  name: "VTO_Headdresse_01",
                                  icon: "VTO_Headdresse_01.svg"
                              }, {
                                  name: "VTO_Headdresse_cap",
                                  icon: "VTO_Headdresse_cap.svg"
                              }]
                          }
                      }
                  },
                  jewelry: {
                      label: "Jewelry",
                      groups: {
                          earring: {
                              label: "Earring",
                              effects: [{
                                  name: "earrings_01",
                                  icon: "earrings_01.svg"
                              }, {
                                  name: "earrings_02",
                                  icon: "earrings_02.svg"
                              }]
                          },
                          necklace: {
                              label: "Necklace",
                              effects: [{
                                  name: "necklace_01",
                                  icon: "necklace_01.svg"
                              }, {
                                  name: "necklace_02",
                                  icon: "necklace_02.svg"
                              }]
                          }
                      }
                  },
                  makeup: {
                      label: "Makeup",
                      groups: {
                          lips: {
                              label: "Lips",
                              effects: [{
                                  name: "Low_Lipstick_GUCCI",
                                  icon: "Low_Lipstick_GUCCI.svg"
                              }, {
                                  name: "Low_Lipstick_REVLON",
                                  icon: "Low_Lipstick_REVLON.svg"
                              }]
                          },
                          face: {
                              label: "Face",
                              effects: [{
                                  name: "Low_Foundation_C110",
                                  icon: "Low_Foundation_C110.svg"
                              }, {
                                  name: "Low_Foundation_C190",
                                  icon: "Low_Foundation_C190.svg"
                              }]
                          },
                          eyes: {
                              label: "Eyes",
                              effects: [{
                                  name: "Low_Eyeshadow_1",
                                  icon: "Low_Eyeshadow_1.svg"
                              }, {
                                  name: "Low_Eyeshadow_2",
                                  icon: "Low_Eyeshadow_2.svg"
                              }]
                          },
                          looks: {
                              label: "Looks",
                              effects: [{
                                  name: "Low_look_clubs",
                                  icon: "Low_look_clubs.svg"
                              }, {
                                  name: "Low_look_relook",
                                  icon: "Low_look_relook.svg"
                              }]
                          }
                      }
                  },
                  hair: {
                      label: "Hair Coloring",
                      groups: {
                          hair_recolor: {
                              label: "Hair recolor",
                              effects: [{
                                  name: "VTO_Hair_blue",
                                  style: "background-color:#154F9F;border:2px solid #FFFFFF;"
                              }, {
                                  name: "VTO_Hair_green",
                                  style: "background-color:#45AB70;border:2px solid #FFFFFF;"
                              }, {
                                  name: "VTO_Hair_pink",
                                  style: "background-color:#BC6EBC;border:2px solid #FFFFFF;"
                              }]
                          }
                      }
                  }
              }
          },
          beauty_touch_up: {
              label: "Beauty / Touch UP",
              categories: {
                  skin: {
                      label: "Skin",
                      groups: {
                          skin_sharpness: {
                              label: "Skin sharpness",
                              effects: [{
                                  name: "SkinSoftening",
                                  control: "slider",
                                  params: ["Skin.softening"],
                                  direction: 1
                              }]
                          },
                          dark_circles: {
                              label: "Dark Circles",
                              effects: [{
                                  name: "Dark_Circles"
                              }]
                          }
                      }
                  },
                  face_morphing: {
                      label: "Face morphing",
                      groups: {
                          facemorphing: {
                              label: "Face morphing",
                              effects: [{
                                  name: "Morphings_1.7.0",
                                  control: "slider",
                                  params: ["FaceMorph.face"],
                                  arg: "narrowing",
                                  direction: 1,
                                  icon: "face_narrowing.svg"
                              }, {
                                  name: "Morphings_1.7.0",
                                  control: "slider",
                                  params: ["FaceMorph.face"],
                                  arg: "v_shape",
                                  direction: 1,
                                  icon: "face_v_shape.svg"
                              }, {
                                  name: "Morphings_1.7.0",
                                  control: "slider",
                                  params: ["FaceMorph.face"],
                                  arg: "cheekbones_narrowing",
                                  direction: 1,
                                  icon: "face_cheekbones_narrowing.svg"
                              }, {
                                  name: "Morphings_1.7.0",
                                  control: "slider",
                                  params: ["FaceMorph.face"],
                                  arg: "cheeks_narrowing",
                                  direction: 1,
                                  icon: "face_cheeks_narrowing.svg"
                              }, {
                                  name: "Morphings_1.7.0",
                                  control: "slider",
                                  params: ["FaceMorph.face"],
                                  arg: "jaw_narrowing",
                                  direction: 1,
                                  icon: "face_jaw_narrowing.svg"
                              }, {
                                  name: "Morphings_1.7.0",
                                  control: "slider",
                                  params: ["FaceMorph.face"],
                                  arg: "chin_shortening",
                                  direction: 1,
                                  icon: "face_chin_shortening.svg"
                              }, {
                                  name: "Morphings_1.7.0",
                                  control: "slider",
                                  params: ["FaceMorph.face"],
                                  arg: "chin_narrowing",
                                  direction: 1,
                                  icon: "face_chin_narrowing.svg"
                              }, {
                                  name: "Morphings_1.7.0",
                                  control: "slider",
                                  params: ["FaceMorph.face"],
                                  arg: "sunken_cheeks",
                                  minValue: "0",
                                  direction: 1,
                                  icon: "face_sunken_cheeks.svg"
                              }, {
                                  name: "Morphings_1.7.0",
                                  control: "slider",
                                  params: ["FaceMorph.face"],
                                  arg: "cheeks_jaw_narrowing",
                                  direction: 1,
                                  icon: "face_cheeks_jaw_narrowing.svg"
                              }]
                          },
                          nose: {
                              label: "Nose",
                              effects: [{
                                  name: "Morphings_1.7.0",
                                  control: "slider",
                                  params: ["FaceMorph.nose"],
                                  arg: "width",
                                  direction: 1,
                                  icon: "nose_width.svg"
                              }, {
                                  name: "Morphings_1.7.0",
                                  control: "slider",
                                  params: ["FaceMorph.nose"],
                                  arg: "length",
                                  direction: 1,
                                  icon: "nose_length.svg"
                              }, {
                                  name: "Morphings_1.7.0",
                                  control: "slider",
                                  params: ["FaceMorph.nose"],
                                  arg: "tip_width",
                                  direction: -1,
                                  icon: "nose_tip_width.svg"
                              }]
                          },
                          eyes: {
                              label: "Eyes",
                              effects: [{
                                  name: "Morphings_1.7.0",
                                  control: "slider",
                                  params: ["FaceMorph.eyes"],
                                  arg: "rounding",
                                  minValue: "0",
                                  direction: 1,
                                  icon: "eyes_rounding.svg"
                              }, {
                                  name: "Morphings_1.7.0",
                                  control: "slider",
                                  params: ["FaceMorph.eyes"],
                                  arg: "enlargement",
                                  direction: 1,
                                  icon: "eyes_enlargement.svg"
                              }, {
                                  name: "Morphings_1.7.0",
                                  control: "slider",
                                  params: ["FaceMorph.eyes"],
                                  arg: "height",
                                  direction: 1,
                                  icon: "eyes_height.svg"
                              }, {
                                  name: "Morphings_1.7.0",
                                  control: "slider",
                                  params: ["FaceMorph.eyes"],
                                  arg: "spacing",
                                  direction: 1,
                                  icon: "eyes_spacing.svg"
                              }, {
                                  name: "Morphings_1.7.0",
                                  control: "slider",
                                  params: ["FaceMorph.eyes"],
                                  arg: "squint",
                                  direction: -1,
                                  icon: "eyes_squint.svg"
                              }, {
                                  name: "Morphings_1.7.0",
                                  control: "slider",
                                  params: ["FaceMorph.eyes"],
                                  arg: "lower_eyelid_pos",
                                  direction: 1,
                                  icon: "eyes_lower_eyelid_pos.svg"
                              }, {
                                  name: "Morphings_1.7.0",
                                  control: "slider",
                                  params: ["FaceMorph.eyes"],
                                  arg: "lower_eyelid_size",
                                  direction: -1,
                                  icon: "eyes_lower_eyelid_size.svg"
                              }]
                          },
                          eyebrows: {
                              label: "Eyebrows",
                              effects: [{
                                  name: "Morphings_1.7.0",
                                  control: "slider",
                                  params: ["FaceMorph.eyebrows"],
                                  arg: "spacing",
                                  direction: -1,
                                  icon: "eyebrows_spacing.svg"
                              }, {
                                  name: "Morphings_1.7.0",
                                  control: "slider",
                                  params: ["FaceMorph.eyebrows"],
                                  arg: "height",
                                  direction: -1,
                                  icon: "eyebrows_height.svg"
                              }, {
                                  name: "Morphings_1.7.0",
                                  control: "slider",
                                  params: ["FaceMorph.eyebrows"],
                                  arg: "bend",
                                  direction: 1,
                                  icon: "eyebrows_bend.svg"
                              }]
                          },
                          lips: {
                              label: "Lips",
                              effects: [{
                                  name: "Morphings_1.7.0",
                                  control: "slider",
                                  params: ["FaceMorph.lips"],
                                  direction: 1,
                                  arg: "size",
                                  icon: "lips_size.svg"
                              }, {
                                  name: "Morphings_1.7.0",
                                  control: "slider",
                                  params: ["FaceMorph.lips"],
                                  direction: 1,
                                  arg: "height",
                                  icon: "lips_height.svg"
                              }, {
                                  name: "Morphings_1.7.0",
                                  control: "slider",
                                  params: ["FaceMorph.lips"],
                                  direction: 1,
                                  arg: "thickness",
                                  icon: "lips_thickness.svg"
                              }, {
                                  name: "Morphings_1.7.0",
                                  control: "slider",
                                  params: ["FaceMorph.lips"],
                                  direction: -1,
                                  arg: "mouth_size",
                                  icon: "lips_mouth_size.svg"
                              }, {
                                  name: "Morphings_1.7.0",
                                  control: "slider",
                                  params: ["FaceMorph.lips"],
                                  direction: 1,
                                  minValue: "0",
                                  arg: "smile",
                                  icon: "lips_smile.svg"
                              }, {
                                  name: "Morphings_1.7.0",
                                  control: "slider",
                                  params: ["FaceMorph.lips"],
                                  direction: -1,
                                  arg: "shape",
                                  icon: "lips_shape.svg"
                              }]
                          }
                      }
                  },
                  whitening: {
                      label: "Whitening",
                      groups: {
                          eye_whitening: {
                              label: "Eye Whitening",
                              effects: [{
                                  name: "EyesWitening_Toggle",
                                  control: "toggle",
                                  params: ["onDataUpdate"]
                              }]
                          },
                          tooth_whitening: {
                              label: "Tooth Whitening",
                              effects: [{
                                  name: "TeethWitening_Toggle",
                                  control: "toggle",
                                  params: ["onDataUpdate"]
                              }]
                          }
                      }
                  }
              }
          },
      },
      L = $e;
  var N = be(K());

  function we(e) {
      return arguments.length > 1 ? console.debug(...arguments) : console.debug(e), !0
  }
  var A = we;

  function c(e, s) {
      if (!e?.classList) return !1;
      if (Array.isArray(s) && s.length > 0)
          for (let i of s) e.classList.contains(i) || e.classList.add(i);
      else s.length > 0 && !e.classList.contains(s) && e.classList.add(s);
      return !0
  }

  function g(e, s) {
      if (!e?.classList) return !1;
      if (Array.isArray(s) && s.length > 0)
          for (let i of s) e.classList.contains(i) && e.classList.remove(i);
      else s.length > 0 && e.classList.contains(s) && e.classList.remove(s);
      return !0
  }

  function B(e, s = "click", i = document) {
      return !i || !s?.length || !e ? (A("Wrong parameters", {
          el: i,
          eventName: s,
          callback: e
      }), !1) : (i.addEventListener(s, e), i)
  }

  function y(e, s = document) {
      return e?.length ? s.querySelector(e) : null
  }

  function q(e, s = document) {
      return e?.length ? Array.from(s.querySelectorAll(e)) : []
  }

  function C(e, s = document) {
      return e?.length ? s.getElementById(e) : null
  }

  function w(e, s = document) {
      return e?.length ? s.createElement(e) : null
  }

  function X(e = !1, s = () => {}) {
      let i = new IntersectionObserver(s);
      return i.observe(e), i
  }

  function _e(e = new Date, s = ":") {
      let i = e.getHours().toString().padStart(2, "0"),
          a = e.getMinutes().toString().padStart(2, "0"),
          o = e.getSeconds().toString().padStart(2, "0");
      return `${i}${s}${a}${s}${o}`
  }
  var ee = _e;
  var ye = window.innerWidth,
      te = null;
  document.addEventListener("resize", () => {
      clearTimeout(te), te = setTimeout(() => {
          ye = window.innerWidth
      }, 17)
  });

  function ve() {
      return window.innerWidth < 768
  }
  var se = ve;
  var F = "1.16.1",
      k, n = "hidden",
      I = "active",
      ie = "https://cdn.jsdelivr.net/npm/@banuba/webar",
      re, H = {
          centerInsufficientSlides: !0,
          centeredSlidesBounds: !0,
          centeredSlides: !0,
          slideToClickedSlide: !0,
          slidesPerView: "auto"
      },
      P = "#4794FE",
      z = "#EEF2F7",
      x = 512,
      W = !1,
      T = new URLSearchParams(window.location.search);
  T.has("sdk") && (F = T.get("sdk"), u("Set SDK version: ", F));
  T.has("size") && (x = parseInt(T.get("size"), 10), u("Scale size: ", x));
  T.has("fps") && (W = T.get("fps") == "true", u("Show FPS: ", W));

  function V(e) {
      return new Promise(s => setTimeout(s, e))
  }

  function u() {
      return A(`[Webar ${ee()}]`, ...arguments)
  }
  var U = class e extends Widget {
      constructor(s) {
          super(s, ".js-webar-sdk"), this.heavyModules = {
              background: !1,
              body: !1,
              eyes: !1,
              face_attributes: !1,
              face_tracker: !1,
              hair: !1,
              hands: !1,
              lips: !1,
              makeup: !1,
              skin: !1
          }, this.$scene = this.queryElement(".scene"), this.$main = y(".js-webar-sdk"), this.$canvas = null, this.dataPath = this.$node.dataset.path, this.clientToken = this.$node.dataset.clientToken, this.$selectedTech = L.virtual_try_on.value, this.$selectedGroup = null, this.$selectedEffect = null, this.$techInputs = this.queryElement(".webar-sdk-techs__list"), this.$categoryInputs = this.queryElement(".webar-sdk-effect__type-list"), this.$groupInputs = this.queryElement(".webar-sdk-effect__group-list"), this.$effectInputs = this.queryElement(".webar-sdk-effect__items"), this.$effectControl = this.queryElement(".webar-sdk-effect__control"), this.$analiseResult = this.queryElement(".webar-sdk-effect__result"), this.$tips = this.queryElement(".webar-sdk-effect__tips"), this.$triggerTip = this.queryElement(".webar-sdk-effect__trigger-tip"), this.$biometric = this.queryElement(".webar-sdk-effect__biometric"), this.$pdBox = this.queryElement(".webar-sdk-effect__pd"), this.$infoButton = this.queryElement(".webar-sdk__info"), this.$fpsInfoBlock = this.queryElement(".webar-sdk__fps"), this.$switchCameraButton = y(".js-webar-sdk__switch_camera"), this.$biometricFirstInput = C("first-image"), this.$biometricSecondInput = C("second-image"), this.$biometricFirstImage = C("result-image-first"), this.$biometricSecondImage = C("result-image-second"), this.$biometricResultMatch = C("biometric-match"), this.$biometricResultNotFound = C("biometric-not-found"), this.$biometricResultError = C("biometric-error"), this.$biometricButton1 = C("biometric-button-1"), this.$biometricButton2 = C("biometric-button-2"), this.$biometricButton3 = C("biometric-button-3"), this.$icons = {
              skin: y(".js-webar-sdk__info-skin"),
              hair: y(".js-webar-sdk__info-hair"),
              glasses: y(".js-webar-sdk__info-glasses"),
              noGlasses: y(".js-webar-sdk__info-no-glasses"),
              beardAndMustache: y(".js-webar-sdk__info-beard-and-mustache"),
              beard: y(".js-webar-sdk__info-beard"),
              noBeard: y(".js-webar-sdk__info-no-beard"),
              mustache: y(".js-webar-sdk__info-mustache"),
              noMustache: y(".js-webar-sdk__info-no-mustache")
          }, this.$effectListLabel = "", this.$faces = {
              first: null,
              second: null
          }, this.firstImage = null, this.secondImage = null, this.recognizer = null, this.$popupF = null, this.$categorySwiper = null, this.effectListToPreload = [], this.$spinner = this.queryElement(".webar-sdk__spinner"), this.$spinnerOverlay = this.queryElement(".webar-sdk__spinner-overlay"), this.$curAnaliseResult = null, this.$webcamDeniedMessage = this.queryElement(".denied"), this.wcams = {}, this.wcam_id = null, this.facingMode = "user", this.player = null, this.effects = {}, this.$statusMessage = this.queryElement(".status"), this.$overlay = null;
          let i = new URLSearchParams(window.location.search);
          this.techQueryParam = i.get("technology"), this.categoryQueryParam = i.get("category"), this.groupQueryParam = i.get("group"), this.effectQueryParam = i.get("effect"), this.$menuChevron = y(".js-webar-sdk__menu"), this.$menuToggle = y(".js-webar-sdk__accord-toggle"), this.$isMenu = !0, this.$swiperEffects = null, this.$swiperRadio = null, this.$swiperEffectsItems = null, this.$popup = y(".js-webar-sdk__popup"), this.$popupTitle = y(".js-webar-sdk__popup-title"), this.$popupDesc = y(".js-webar-sdk__popup-desc"), this.$popupButton = y(".js-webar-sdk__popup-button"), this.cameras = [], this.sources = [], this.switchCameraFailCount = 0, document.addEventListener("devicechange", this.deviceChanged), this.init()
      }
      fps = {
          cam: 0,
          processing: 0,
          render: 0
      };
      fpsCounter = {
          cam: 0,
          processing: 0,
          render: 0
      };
      get wcam() {
          return this.wcams[this.wcam_id]
      }
      async build() {
          return await this.deviceChanged(), c(this.$node.querySelector(".webar-sdk__left"), n), this.addBiometricEvents(), (async () => {
              try {
                  k = await import(`https://cdn.jsdelivr.net/npm/@banuba/webar@${F}/dist/BanubaSDK.browser.esm.min.js`)
              } catch (i) {
                  return console.error("Load SDK error: ", F, i), this.setStatusMessage("Can not find BanubaSDK"), !1
              }
              if (!k) return this.setStatusMessage("Can not find BanubaSDK"), console.error("Can not find BanubaSDK"), !1;
              if (k.VERSION != F && (console.warn(`Version dont match: requested ${F} - received ${k.VERSION}`), F = k.VERSION, F.includes("-") && (console.warn("SDK version includes '-'. Removing it..."), F = F.slice(0, F.indexOf("-")))), !this.cameras.length) return this.setStatusMessage("Camera not found! Please, connect the camera to the computer"), !1;
              this.setStatusMessage("Webcam initializing"), this.wcam_id = this.cameras[0].deviceId, this.wcams[this.wcam_id] = new k.Webcam({
                  deviceId: this.wcam_id
              }), this.setStatusMessage("Player initializing"), u("Player initializing: ", k.VERSION);
              let s = await k.Player.create({
                  clientToken: this.clientToken,
                  useFutureInterpolate: !1,
                  locateFile: `${ie}@${F}/dist`
              });
              this.player = s, this.player.setVolume(1), await this.enableCameraAndStartPlayer(), this.setStatusMessage("Connect camera with player"), this.setStatusMessage("Render video"), k.Dom.render(this.player, this.$scene), this.setStatusMessage(null), this.$canvas = this.$scene.querySelector("canvas"), this.createTechList(), this.$techInputs.querySelectorAll(".webar-sdk-radio__input").forEach(i => {
                  i.addEventListener("click", this.onTechSelect.bind(this)), i.value === this.techQueryParam && (i.click(), this.techQueryParam = null)
              }), g(this.$node.querySelector(".webar-sdk__left"), n)
          })(), this.$tips.querySelector(".webar-sdk-effect__tips-button").addEventListener("click", () => {
              g(this.$infoButton, n), c(this.$tips, n)
          }), this.$scene.addEventListener("click", () => {
              this.$selectedTech && this.collapseTechMenu()
          }), this.$node.querySelector(".webar-sdk__top").addEventListener("click", () => {
              this.$selectedTech && this.collapseTechMenu()
          }), this.$node.querySelector(".webar-sdk__bottom").addEventListener("click", () => {
              this.$selectedTech && this.collapseTechMenu()
          }), this.$switchCameraButton && this.$switchCameraButton.addEventListener("click", async () => {
              try {
                  this.switchCamera()
              } catch (s) {
                  u("Switch camera error: ", s)
              }
          }), this.$infoButton && this.$infoButton.addEventListener("click", () => {
              g(this.$tips, n)
          }), !0
      }
      async enableCameraAndStartPlayer() {
          this.hideWebcamPermissionError();
          try {
              await this.wcam.start(), await this.player.use(this.wcam), this.player.play(), this.startFpsTracking(), c(this.$main, I), document.addEventListener("visibilitychange", async () => {
                  if (document.hidden) {
                      await this.wcam.stop();
                      return
                  }
                  await this.wcam.start(), await this.player.use(this.wcam), this.player.play()
              }), this.toggleSwitchCameraButton(this.cameras.length > 1)
          } catch (s) {
              console.error("webcam error", s), this.showWebcamPermissionError()
          }
          return !0
      }
      toggleSwitchCameraButton(s = !0) {
          u("Toggle switch camera button: ", s);
          let i = y(".js-webar-sdk__switch_camera");
          return s ? g(i, n) : c(i, n), !0
      }
      createTechList() {
          this.expendTechMenu(), this.$menuToggle && this.$menuToggle.addEventListener("click", () => {
              this.expendTechMenu()
          }), this.$menuChevron && this.$menuChevron.addEventListener("click", () => {
              this.$isMenu ? this.collapseTechMenu() : this.expendTechMenu()
          });
          for (let s in L) {
              let i = w("div");
              c(i, "webar-sdk-radio");
              let a = w("label");
              c(a, "webar-sdk-radio__label");
              let o = w("input");
              o.type = "radio", o.name = "tech", o.value = s, c(o, "webar-sdk-radio__input");
              let l = w("div");
              c(l, "webar-sdk-radio__content"), l.textContent = L[s].label, a.appendChild(o), a.appendChild(l), i.appendChild(a), this.$techInputs.appendChild(i)
          }
          return !0
      }
      createCategoryList() {
          let s = this.$selectedTech.categories;
          this.$categorySwiper = w("div"), c(this.$categorySwiper, "webar-sdk-effect__type-list__swiper-wrapper"), c(this.$categorySwiper, "swiper-wrapper");
          let i = 0;
          for (let a in s) {
              let o = w("div");
              c(o, "webar-sdk-radio__type"), c(o, "swiper-slide"), i || c(o, "swiper-slide-active");
              let l = w("label");
              c(l, "webar-sdk-radio__label");
              let h = w("input");
              h.type = "radio", h.name = "type", h.value = a, c(h, "webar-sdk-radio__input");
              let m = w("div");
              c(m, "webar-sdk-radio__type-content"), m.textContent = s[a].label, l.appendChild(h), l.appendChild(m), o.appendChild(l), this.$categorySwiper.appendChild(o), i++
          }
          return this.$categoryInputs.innerHTML = null, this.$categoryInputs.appendChild(this.$categorySwiper, this.$categoryInputs.firstChild), this.$swiperEffects && this.$swiperEffects.destroy(), this.$swiperEffects = new Swiper(".js-webar-sdk__slider", H), this.$swiperEffects.slideTo(0), Array.from(this.$categorySwiper.children).forEach((a, o) => {
              a.addEventListener("click", this.onCategorySelect.bind(this)), o === 0 && !this.categoryQueryParam ? this.makeClick(a) : this.categoryQueryParam === a.querySelector(".webar-sdk-radio__input").value && (this.makeClick(a), this.categoryQueryParam = null)
          }), !0
      }
      createGroupList() {
          let s = this.$selectedCategory?.groups,
              i = "<div class='swiper-wrapper'>";
          if (this.$groupInputs.innerHTML = "", this.$effectInputs.innerHTML = "", this.player.removeEventListener("framedata", this.f), s) {
              let a = 0;
              for (let o in s) {
                  let l = `<div class="webar-sdk-radio__group swiper-slide${a?"":" swiper-slide-active"}"><label class="webar-sdk-radio__label"><input type="radio" name="group" value=${o} class="webar-sdk-radio__input"><div class="webar-sdk-radio__group-content"><span>${s[o].label}</span>${s[o]?.beta?'<span class="webar-sdk-radio__group--beta">beta</span>':""}</div></label></div>`;
                  i += l, a++
              }
              i += "</div>", this.$groupInputs.innerHTML = i, this.$swiperRadio && this.$swiperRadio.destroy(), this.$swiperRadio = new Swiper(".js-webar-sdk__radio", H), this.$swiperRadio.slideTo(0), Array.from(q(".webar-sdk-radio__group")).forEach((o, l) => {
                  o.addEventListener("click", this.onGroupSelect.bind(this)), l === 0 && !this.groupQueryParam ? this.makeClick(o) : this.groupQueryParam === o.querySelector(".webar-sdk-radio__input").value && (this.makeClick(o), this.groupQueryParam = null)
              });
              return
          }
          this.$selectedCategory?.effects && (this.$swiperRadio && this.$swiperRadio.destroy(), this.$selectedGroup = this.$selectedCategory, this.createEffectList())
      }
      async createEffectList() {
          if (this.$effectInputs.innerHTML = "", this.$effectControl.innerHTML = "", this.player.removeEventListener("framedata", this.f), this.startSpinner(), await this.preloadEffects(this.$selectedGroup.effects), this.$selectedGroup?.label === this.effectListLabel) return u("Effect list already created: ", this.$selectedGroup?.label), !1;
          if (u("Create effect list: ", this.$selectedGroup?.label), this.effectListLabel = this.$selectedGroup?.label, this.$selectedGroup.effects.length > 1) {
              let s = w("div");
              s.classList.add("swiper-wrapper"), this.$selectedGroup.effects.forEach((i, a) => {
                  let o = w("div");
                  o.classList.add("swiper-slide"), a || o.classList.add("swiper-slide-active");
                  let l = w("div");
                  l.classList.add("webar-sdk-radio__effect-content--border");
                  let h = w("div");
                  h.classList.add("webar-sdk-radio__effect-content--padding");
                  let m = w("div");
                  if (m.classList.add("webar-sdk-radio__effect-content"), m.style.cssText = i.style || "", h.appendChild(m), i.icon) {
                      let b = w("img");
                      b.src = `${this.dataPath}/icons/${i.icon}`, m.appendChild(b)
                  }
                  l.appendChild(h);
                  let d = w("label");
                  d.classList.add("webar-sdk-radio__label");
                  let f = w("input");
                  f.type = "radio", f.name = "effect", f.value = i.name, f.classList.add("webar-sdk-radio__input"), d.appendChild(f), d.appendChild(l), o.appendChild(d), s.appendChild(o)
              }), this.$effectInputs.appendChild(s), this.$swiperEffectsItems && this.$swiperEffectsItems.destroy(), this.$swiperEffectsItems = new Swiper(".js-webar-sdk__effects", H), this.$swiperEffectsItems.slideTo(0), Array.from(this.$effectInputs.children[0].children).forEach((i, a) => {
                  i.addEventListener("click", this.onEffectSelect.bind(this, a)), a === 0 && !this.effectQueryParam ? this.makeClick(i) : this.effectQueryParam === i.querySelector(".webar-sdk-radio__input").value && (this.makeClick(i), this.effectQueryParam = null)
              })
          } else this.$swiperEffectsItems && this.$swiperEffectsItems.destroy(), await this.setEffect(this.$selectedGroup.effects[0]);
          this.stopSpinner(), await this.preloadEffects(this.effectListToPreload)
      }
      onTechSelect(s) {
          if (this.$selectedTech === L[s.target.value]) {
              this.collapseTechMenu();
              return
          }
          return this.clearEffect(), this.$selectedTech = L[s.target.value], this.effectListToPreload = [], this.collapseTechMenu(), this.createCategoryList(), !0
      }
      expendTechMenu() {
          u("Expand menu"), this.$isMenu = !0, g(this.$menuChevron, I), c(y(".webar-sdk__left-top"), I), c(this.$menuToggle, n), g(y(".js-webar-sdk__accord-content"), n), c(this.$menuToggle, n);
          for (let s of this.$menuToggle.children) c(s, n);
          return !0
      }
      collapseTechMenu() {
          u("Collapse menu"), this.$isMenu = !1, c(this.$menuChevron, I), y(".webar-sdk-block__top-title").innerText = this.$selectedTech.label, g(y(".webar-sdk__left-top"), I), c(y(".js-webar-sdk__accord-content"), n), g(this.$menuToggle, n);
          for (let s of this.$menuToggle.children) g(s, n);
          return !0
      }
      onCategorySelect(s) {
          if (!s.target.value || this.$selectedCategory === this.$selectedTech.categories[s.target.value]) return !1;
          let i = s.target.value;
          return u("Select category: ", i), this.$selectedCategory = this.$selectedTech.categories[i], c(this.$analiseResult, n), c(this.$tips, n), c(this.$infoButton, n), c(this.$pdBox, n), this.createGroupList(), !0
      }
      onGroupSelect(s) {
          if (!s.target.value || this.$selectedCategory.groups[s.target.value] === this.$selectedGroup) return !1;
          let i = s.target.value;
          return u("Select group: ", i), this.$selectedGroup = this.$selectedCategory.groups[i], c(this.$analiseResult, n), c(this.$tips, n), c(this.$infoButton, n), c(this.$pdBox, n), this.$curAnaliseResult = "", this.$selectedGroup.effects && this.createEffectList(), !0
      }
      makeClick(s) {
          return s.querySelector("input").click(), !0
      }
      clearBiometric() {
          return u("Clear biometric"), c(this.$biometricResultMatch, n), c(this.$biometricResultNotFound, n), c(this.$biometricResultError, n), c(this.$biometric, n), g(this.$biometric, ["step-1", "step-2", "step-3"]), g(this.$scene, "result"), this.$faces = {
              first: null,
              second: null
          }, this.firstImage = null, this.secondImage = null, this.$biometricFirstImage && this.$biometricFirstImage.setAttribute("src", ""), this.$biometricSecondImage && this.$biometricSecondImage.setAttribute("src", ""), this.$biometricFirstInput && (this.$biometricFirstInput.value = ""), this.$biometricSecondInput && (this.$biometricSecondInput.value = ""), !0
      }
      hideAnalyticsIcons() {
          for (let s in this.$icons) c(this.$icons[s], n);
          return !0
      }
      showIcon(s = !1) {
          if (!s?.length) return !1;
          switch (s) {
              case "skin":
                  for (let i in this.$icons) i == "skin" ? g(this.$icons[i], n) : c(this.$icons[i], n);
                  break;
              case "hair":
                  for (let i in this.$icons) i == "hair" ? g(this.$icons[i], n) : c(this.$icons[i], n);
                  break;
              case "glasses":
                  for (let i in this.$icons) i == "glasses" || i == "noGlasses" ? g(this.$icons[i], n) : c(this.$icons[i], n);
                  break;
              case "beard":
                  for (let i in this.$icons)["beard", "noBeard", "mustache", "noMustache", "beardAndMustache"].includes(i) ? g(this.$icons[i], n) : c(this.$icons[i], n);
                  break;
              default:
                  for (let i in this.$icons) c(this.$icons[i], n);
                  break
          }
          return !0
      }
      clearEffect() {
          return u("Clear effect"), this.$groupInputs.innerHTML = "", this.$effectInputs.innerHTML = "", this.$analiseResult.innerHTML = "", this.$effectControl.innerHTML = "", c(this.$analiseResult, n), c(this.$tips, n), c(this.$infoButton, n), c(this.$pdBox, n), this.player.removeEventListener("framedata", this.f), this.player.clearEffect(), this.hideAnalyticsIcons(), this.clearBiometric(), !0
      }
      showWebcamPermissionError() {
          return c(this.$webcamDeniedMessage, "visible"), this.$node.querySelector("canvas") && (this.$node.querySelector("canvas").style.display = "none"), !0
      }
      hideWebcamPermissionError() {
          return g(this.$webcamDeniedMessage, "visible"), this.$node.querySelector("canvas") && (this.$node.querySelector("canvas").style.display = "block"), !0
      }
      loadModule(s, i = []) {
          return s?.length ? this.heavyModules[s] ? !0 : (i.push(new Promise(async a => {
              try {
                  let o = await k.Module.preload(`${ie}@${F}/dist/modules/${s}.zip`);
                  return o ? (await this.player.addModule(o), this.heavyModules[s] = !0, a(o), !0) : (console.error(`Module ${s} not loaded!`), !1)
              } catch (o) {
                  console.error(`Load module ${s} error: `, o), a(!1)
              }
          })), !1) : (console.error("Can't load module without id!"), !1)
      }
      async preloadEffects(s) {
          let i = [];
          switch (this.loadModule("face_tracker", i), this.$selectedTech.label) {
              case "Virtual Try On":
                  ["face_attributes", "lips", "eyes", "skin", "hair"].forEach(l => this.loadModule(l, i));
                  break;
              case "Beauty / Touch UP":
                  ["makeup", "lips", "face_attributes", "skin", "eyes"].forEach(l => this.loadModule(l, i));
                  break;
          }
          let a = [...new Set(s.map(l => l.name))];
          for (let l of a) !this.effects[l] && l?.length && i.push(new Promise(async h => {
              let m = `${this.dataPath}/effects/${l}.zip`,
                  d = await k.Effect.preload(m);
              if (!d) return h();
              this.effects[l] = d, h(d)
          }));
          this.startSpinner();
          let o = await Promise.all(i);
          return this.stopSpinner(), o
      }
      setStatusMessage(s) {
          return this.$statusMessage.textContent = s, !0
      }
      async setEffect(s) {
          if (this.$selectedEffect === s) return !1;
          switch (u("Set effect: ", s), this.player.clearEffect(), c(this.$analiseResult, n), c(this.$triggerTip, n), c(this.$biometric, n), c(this.$popup, n), this.$popupDesc && (this.$popupDesc.innerHTML = "Something went wrong.<br/>Try again."), this.$popupButton && (this.$popupButton.removeEventListener("click", this.$popupF), s?.control == "biometric" ? (u("Add close popup on biometric"), this.$popupF = this.startBiometric.bind(this), this.$popupButton.addEventListener("click", this.$popupF)) : s?.control == "PD" ? (u("Add close popup on PD"), this.$popupF = this.restartIPD.bind(this), this.$popupButton.addEventListener("click", this.$popupF)) : u("Reset close popup")), this.$curAnaliseResult = null, this.player.removeEventListener("framedata", this.f), this.$scene.removeEventListener("click", this.f), this.$selectedEffect = s, g(this.$menuChevron, n), this.toggleSwitchCameraButton(this.cameras.length > 1), this.hideAnalyticsIcons(), this.effects[s.name] && await this.player.applyEffect(this.effects[s.name]), this.$selectedEffect.control) {
              case "slider":
                  this.setEffectParam(this.$selectedEffect.params, this.$selectedEffect?.value || 0);
                  let i = this.$selectedEffect?.minValue || -10,
                      a = this.$selectedEffect?.value * 10 || 0,
                      o = w("div");
                  c(o, "webar-sdk__slidecontainer");
                  let l = w("input");
                  l.type = "range", l.min = i, l.max = 10, l.value = a, c(l, "webar-sdk__slider"), o.appendChild(l), this.$effectControl.innerHTML = null, this.$effectControl.appendChild(o);
                  let h = y(".webar-sdk__slider"),
                      m = (0 - i) / (10 - i) * 100;
                  h.style.background = `linear-gradient(to right, ${P} 0%, ${P} ${this.$selectedEffect?.value?this.$selectedEffect?.value*100:m}%, ${z} ${m}%, ${z} 100%)`, h.addEventListener("input", this.onSliderInput.bind(this));
                  break;
              case "toggle":
                  let d = w("input");
                  d.type = "checkbox", d.name = "toggle", d.classList.add("webar-sdk-effect__control-toggle"), d.checked = !0, this.$effectControl.innerHTML = null, this.$effectControl.appendChild(d), y(".webar-sdk-effect__control-toggle").addEventListener("change", this.onToggleChange.bind(this));
                  break;
              case "analise":
                  this.$curAnaliseResult = null, this.createTips(), this.f = this.getAnaliseResult.bind(this), this.player.addEventListener("framedata", this.f);
                  break;
              case "trigger":
                  this.createTriggerTip(), this.f = this.showTriggerTip.bind(this), this.player.addEventListener("framedata", this.f);
                  break;
              case "game":
                  this.f = this.startGame.bind(this), this.$scene.addEventListener("click", this.f);
                  break;
              case "avatar":
                  this.f = this.changeAvatar.bind(this), this.$scene.addEventListener("click", this.f);
                  break;
              case "PD":
                  this.getIPD();
                  break;
              case "gender_recognition":
                  this.getGender();
                  break;
              case "detect":
                  this.effects[this.$selectedEffect.name].evalJs("bnb.scene.enableRecognizerFeature(bnb.FeatureID.FACE_ATTRIBUTES);"), this.f = this.detectFaceAttributes.bind(this), this.player.addEventListener("framedata", this.f);
                  break;
              case "biometric":
                  this.toggleSwitchCameraButton(!1), this.startBiometric(), this.f = this.biometricFrameDataEvent.bind(this), this.player.addEventListener("framedata", this.f);
                  break
          }
      }
      getGender() {
          u("Get gender call"), this.effects[this.$selectedEffect.name].evalJs("bnb.scene.enableRecognizerFeature(bnb.FeatureID.FACE_ATTRIBUTES);");
          let s = async ({
              detail: i
          }) => {
              let l = (JSON.parse(i.get("faceAttributes")?.value())?.Face).gender;
              this.$curAnaliseResult = l.charAt(0).toUpperCase() + l.slice(1), this.renderResult(), this.player.removeEventListener("framedata", s)
          };
          return this.player.addEventListener("framedata", s), !0
      }
      detectFaceAttributes({
          detail: s
      }) {
          switch (this.$selectedEffect.label) {
              case "skin-color":
                  this.showIcon("skin");
                  try {
                      let o = JSON.parse(s.get("faceAttributes")?.value()).Face.color.replace("@", ""),
                          [l, h, m] = o.split(",").map(d => d * 255);
                      o?.length ? this.$icons.skin.setAttribute("style", `background-color: rgba(${l}, ${h}, ${m}, 1);`) : this.$icons.skin.setAttribute("style", "")
                  } catch {
                      this.$icons.skin.setAttribute("style", "")
                  }
                  break;
              case "hair-color":
                  this.showIcon("hair");
                  try {
                      let o = JSON.parse(s.get("faceAttributes")?.value()).Hair.color.replace("@", ""),
                          [l, h, m] = o.split(",").map(d => d * 255);
                      o?.length ? this.$icons.hair.setAttribute("style", `background-color: rgba(${l}, ${h}, ${m}, 1);`) : this.$icons.hair.setAttribute("style", "")
                  } catch {
                      this.$icons.hair.setAttribute("style", "")
                  }
                  break;
              case "glasses-detector":
                  this.showIcon("glasses");
                  try {
                      JSON.parse(s.get("faceAttributes")?.value()).Glasses.frame == "default" ? (c(this.$icons.glasses, n), g(this.$icons.noGlasses, n)) : (g(this.$icons.glasses, n), c(this.$icons.noGlasses, n))
                  } catch {
                      c(this.$icons.glasses, n), g(this.$icons.noGlasses, n)
                  }
                  break;
              case "beard-and-mustache-detector":
                  this.showIcon("beard");
                  try {
                      switch (JSON.parse(s.get("faceAttributes")?.value()).FacialHair.shape) {
                          case "shape_4":
                              g(this.$icons.beard, n), c(this.$icons.noBeard, n), c(this.$icons.mustache, n), g(this.$icons.noMustache, n);
                              break;
                          case "shape_2":
                              c(this.$icons.beard, n), g(this.$icons.noBeard, n), g(this.$icons.mustache, n), c(this.$icons.noMustache, n);
                              break;
                          default:
                              c(this.$icons.beard, n), g(this.$icons.noBeard, n), c(this.$icons.mustache, n), g(this.$icons.noMustache, n);
                              break
                      }
                  } catch {
                      c(this.$icons.beard, n), g(this.$icons.noBeard, n), c(this.$icons.mustache, n), g(this.$icons.noMustache, n)
                  }
                  break
          }
          return !0
      }
      createTriggerTip() {
          return this.$triggerTip.querySelector(".webar-sdk-effect__trigger-tip-inner").innerHTML = this.$selectedEffect.tip, g(this.$triggerTip, n), !0
      }
      async showTriggerTip() {
          return await this.effects[this.$selectedEffect.name].evalJs(this.$selectedEffect.params[0]) === "true" && (c(this.$triggerTip, n), this.player.removeEventListener("framedata", this.f)), !0
      }
      startGame() {
          return u("Start game"), this.effects[this.$selectedEffect.name].evalJs("isButtonTouched").then(s => {
              s === "false" && this.effects[this.$selectedEffect.name].evalJs("onClick()")
          }), !0
      }
      changeAvatar() {
          return u("Change avatar call"), this.effects[this.$selectedEffect.name].evalJs("onClick()"), !0
      }
      biometricFrameDataEvent({
          detail: s
      }) {
          if (this.$selectedEffect?.label == "Photo Match" || !this.$faces.first) return !1;
          try {
              if (!s.get("frxRecognitionResult.faces.0.hasFace")) return !1;
              let a = s.get("frxRecognitionResult.faces.0");
              this.$faces.second = [a]
          } catch (i) {
              console.error(`Get face from frame data error: ${i}`)
          }
          return this.analyzeFaces(), !0
      }
      initRecognizer() {
          if (!this.recognizer) {
              let s = this.player._sdk;
              if (u("Init recognizer"), this.recognizer = s.Recognizer.create(s.RecognizerMode.SYNCHRONOUS), this.recognizer == null) throw new Error("Recognizer creation error");
              this.recognizer.setFeatures([s.FeatureId.FRX, s.FeatureId.ACTION_UNITS, s.FeatureId.FACE_MATCH]), this.recognizer.setOfflineMode(!0), this.recognizer.setMaxFaces(10)
          }
          return !0
      }
      async startBiometric() {
          return u("Start biometric match"), c(this.$popup, n), this.initRecognizer(), this.$biometric ? (this.clearBiometric(), c(this.$biometricResultMatch, n), c(this.$biometricResultNotFound, n), c(this.$biometricResultError, n), c(this.$biometric, "step-1"), g(this.$biometric, ["step-2", "step-3", n]), g(this.$scene, "result"), this.$selectedEffect.label == "Photo Match" ? (c(this.$scene, "biometric-photo"), g(this.$scene, "biometric-camera")) : (g(this.$scene, "biometric-photo"), c(this.$scene, "biometric-camera")), !0) : !1
      }
      async toImageData(s) {
          if (!s) return !1;
          let i = w("img");
          i.setAttribute("src", s);
          let a = w("canvas"),
              {
                  width: o,
                  height: l
              } = i,
              h = 1;
          if (o > x || l > x) {
              h = Math.max(o, l) / x, a.width = Math.floor(o / h), a.height = Math.floor(l / h);
              let m = await createImageBitmap(i, {
                  resizeWidth: a.width,
                  resizeHeight: a.height,
                  resizeQuality: "high"
              });
              a.getContext("2d").drawImage(m, 0, 0)
          } else a.width = o, a.height = l, a.getContext("2d").drawImage(i, 0, 0);
          return {
              data: a.getContext("2d").getImageData(0, 0, a.width, a.height),
              ratio: h
          }
      }
      async recognizeImage(s, i = "first") {
          if (!s) return u("Input image for recognize not defined!"), !1;
          try {
              let a = this.player._sdk;
              u(`Recognize image ${i} with id: `, s.getAttribute("id")), this.startSpinner();
              let {
                  ratio: o,
                  data: l
              } = await this.toImageData(s.src), h = a.FrameData.makeFromBpc8(l, a.PixelFormat.RGBA, 1);
              this.recognizer.process(h);
              let f = h.getFrxRecognitionResult().getFaces().get(0);
              this.recognizer.clear(), this.$faces[i] = [], f.hasFace() && (this.$faces[i].push(f), this.cutImage(s, f, o)), this.stopSpinner(), u(`Found ${this.$faces[i].length} faces for id ${i}: `, s.getAttribute("id"))
          } catch (a) {
              console.warn("Error: ", a), g(this.$popup, n)
          }
          return !0
      }
      cutImage(s, i, a = 1) {
          u("Cut image: ", s.getAttribute("id"), "; with scale ratio: ", a);
          let o = i.getFaceRect(),
              {
                  x: l,
                  y: h,
                  w: m,
                  h: d
              } = o,
              f = m * a * .15,
              b = d * a * .15,
              _ = w("canvas");
          return _.width = m + f + b, _.height = d + f + b, _.getContext("2d").drawImage(s, l * a - f, h * a - b, m * a + f + b, d * a + f + b, 0, 0, m + f + b, d + f + b), s.setAttribute("src", _.toDataURL()), !0
      }
      async analyzeFaces() {
          u("Analyze faces");
          try {
              let {
                  $faces: s
              } = this;
              if (this.$faces.first = this.$faces.first.filter(f => f.hasFace()), this.$faces.second = this.$faces.first.filter(f => f.hasFace()), !s.first?.length || !s.second?.length) return u("Not enough faces found: ", JSON.stringify({
                  first: s.first?.length,
                  second: s.second?.length
              })), c(this.$biometricResultMatch, n), g(this.$biometricResultNotFound, n), !1;
              let i = [];
              for (let [f, b] of Object.entries(s)) i.push(...b.map(_ => _.getEmbeddings()));
              let a = [],
                  o = i[0],
                  l = i[1],
                  h = o.size(),
                  m = l.size();
              if (!h || !m || h != m) return u("Different emb sizes:", h, m), c(this.$biometricResultMatch, n), c(this.$biometricResultNotFound, n), !1;
              for (let f = 0; f < h; f++) {
                  let b = o.get(f),
                      _ = l.get(f);
                  a[f] = b * _, b = null, _ = null
              }
              h = null, m = null, o = null, l = null;
              let d = a.reduce((f, b) => f + b, 0);
              a = null, i = null, u("Face match weight: ", d), d && d >= .3 ? (g(this.$biometricResultMatch, n), c(this.$biometricResultNotFound, n)) : (c(this.$biometricResultMatch, n), g(this.$biometricResultNotFound, n))
          } catch (s) {
              console.error(s), c(this.$biometricResultMatch, n), c(this.$biometricResultNotFound, n), g(this.$popup, n)
          }
          return !0
      }
      addBiometricEvents() {
          return u("Add biometric event handlers"), B(() => this.$biometric ? (u("Biometric button 1 clicked"), g(this.$biometric, ["step-1", "step-3"]), c(this.$biometric, "step-2"), g(this.$scene, "result"), !0) : !1, "click", this.$biometricButton1), B(async s => {
              let i = s.target.files[0];
              if (!i) return !1;
              u("File change for first image input");
              let a = !1;
              if (this.firstImage ? a = !0 : this.$selectedEffect.label == "Photo Match" ? (g(this.$biometric, ["step-1", "step-2", n]), c(this.$biometric, "step-3"), g(this.$scene, "result")) : (g(this.$biometric, ["step-1", "step-2", "step-1"]), c(this.$biometric, n), c(this.$scene, "result")), this.firstImage = await this.blobToBase64(i), !this.$biometricFirstImage) return u("First image element not found!"), !1;
              this.$biometricFirstImage.setAttribute("src", this.firstImage), await new Promise(o => {
                  this.$biometricFirstImage.onload = o
              }), await this.recognizeImage(this.$biometricFirstImage, "first"), (this.$selectedEffect.label != "Photo Match" || a) && this.analyzeFaces()
          }, "change", this.$biometricFirstInput), B(async s => {
              let i = s.target.files[0];
              if (!i) return !1;
              if (u("File change for second image input"), this.secondImage = await this.blobToBase64(i), !this.$biometricSecondImage) return u("Second image element not found!"), !1;
              this.$biometricSecondImage.setAttribute("src", this.secondImage), await new Promise(a => {
                  this.$biometricSecondImage.onload = a
              }), await this.recognizeImage(this.$biometricSecondImage, "second"), this.analyzeFaces(), g(this.$biometric, ["step-1", "step-2", "step-3"]), c(this.$biometric, n), c(this.$scene, "result")
          }, "change", this.$biometricSecondInput), !0
      }
      createTips() {
          if (this.$selectedEffect.name !== "Detection_gestures") return !1;
          u("Create gestures tips");
          let s = w("div");
          c(s, "webar-sdk-effect__tips__hand-gestures");
          let i = w("div");
          c(i, "webar-sdk-effect__tips__hand-gestures--title"), i.textContent = "Tip", s.appendChild(i);
          let a = w("div");
          c(a, "webar-sdk-effect__tips__hand-gestures--subtitle"), a.textContent = "Supported gestures:", s.appendChild(a);
          let o = w("div");
          return c(o, "webar-sdk-effect__tips__hand-gestures--content"), [{
              name: "Like",
              icon: "Like.svg"
          }, {
              name: "Ok",
              icon: "Ok.svg"
          }, {
              name: "Rock",
              icon: "Rock.svg"
          }, {
              name: "Victory",
              icon: "Victory.svg"
          }, {
              name: "Palm",
              icon: "Palm.svg"
          }].forEach(({
              name: h,
              icon: m
          }) => {
              let d = w("div");
              c(d, "webar-sdk-effect__tips__hand-gestures--content-item");
              let f = w("img");
              f.src = `${this.dataPath}/icons/hand_gestures/${m}`, f.alt = h, d.appendChild(f);
              let b = w("label");
              b.textContent = `"${h}"`, d.appendChild(b), o.appendChild(d)
          }), s.appendChild(o), this.$tips.querySelector(".webar-sdk-effect__tips-inner").innerHTML = "", this.$tips.querySelector(".webar-sdk-effect__tips-inner").appendChild(s), g(this.$tips, n), !0
      }
      async getAnaliseResult() {
          if (!this.$tips.classList.contains(n)) return !1;
          u("Get analise result"), g(this.$analiseResult, n);
          let s = await this.effects[this.$selectedEffect.name].evalJs(this.$selectedEffect.params[0]);
          return this.$curAnaliseResult !== s && s && (this.$curAnaliseResult = s.trim(), this.renderResult()), !0
      }
      blobToBase64(s) {
          return new Promise((i, a) => {
              let o = new FileReader;
              o.onloadend = () => i(o.result), o.readAsDataURL(s)
          })
      }
      restartIPD() {
          return u("Restart IPD"), c(this.$popup, n), this.getIPD(), !0
      }
      getIPD() {
          u("Get IPD"), this.effects[this.$selectedEffect.name].evalJs("bnb.scene.enableRecognizerFeature(bnb.FeatureID.EYES);"), this.effects[this.$selectedEffect.name].evalJs("bnb.scene.enableRecognizerFeature(bnb.FeatureID.FACE_ATTRIBUTES);"), this.$curAnaliseResult = "Look straight to the camera", this.renderResult();
          let s = !1,
              i = !1;
          g(this.$pdBox, n);
          let a = async ({
              detail: o
          }) => {
              let l = o.get("EyesState"),
                  h = l?.isOpenLeft,
                  m = l?.isOpenRight,
                  d, f = !1;
              try {
                  d = JSON.parse(o.get("faceAttributes")?.value()).Glasses.frame, f = !0
              } catch (b) {
                  u("Get glasses error for IPD: ", b), f = !1
              }
              if (!s && !i && f && h && m && (d == "default" || !d)) {
                  i = !0, this.$curAnaliseResult = "Detecting", this.renderResult(), u("IPD detecting");
                  let _ = await new k.ImageCapture(this.player).takePhoto(),
                      E = await this.blobToBase64(_);
                  try {
                      let S = await fetch("https://dev-rest-ipd.tintvto.com/rnd-ipd/v1/ipd", {
                          method: "POST",
                          headers: {
                              "Content-Type": "application/json",
                              Authorization: "Basic aXBkc2VydmljZTpBQ2goJiR6cQ=="
                          },
                          body: JSON.stringify({
                              body: E.replace("data:", "").replace(/^.+,/, ""),
                              isBase64Encoded: !0
                          })
                      });
                      if (this.$selectedEffect.control == "PD") {
                          let O = await S.text();
                          this.$curAnaliseResult = O.trim().replaceAll('"', ""), this.renderResult()
                      }
                      s = !0, i = !1, c(this.$pdBox, n)
                  } catch (S) {
                      i = !1, this.$selectedEffect.control == "PD" && (u("IPD get error: ", S), this.$curAnaliseResult = "Something went wrong", this.renderResult()), c(this.$pdBox, n), c(this.$analiseResult, n), g(this.$popup, n)
                  }
                  return this.player.removeEventListener("framedata", a), !0
              }
              this.$selectedEffect.control == "PD" ? (this.$curAnaliseResult = d == "default" || !d ? i ? "Detecting" : "Look straight to the camera" : "Take off your glasses", this.renderResult()) : this.player.removeEventListener("framedata", a)
          };
          return this.player.addEventListener("framedata", a), !0
      }
      renderResult() {
          for (let s of this.$analiseResult.classList) s !== "webar-sdk-effect__result" && this.$analiseResult.classList.remove(s);
          switch (this.$selectedEffect.name) {
              case "Detection_gestures":
                  this.$analiseResult.classList.add("gesture");
                  let s = this.$curAnaliseResult === "No Gesture" ? "" : `<img src="${this.dataPath}/icons/${this.$selectedEffect.iconsPath}/${this.$curAnaliseResult}.svg" alt="${this.$curAnaliseResult}"/>`;
                  this.$analiseResult.innerHTML = `${s}<span>${this.$curAnaliseResult}</span>`;
                  break;
              case "test_Ruler":
                  this.$analiseResult.classList.add("distance"), this.$analiseResult.innerHTML = `<span>${this.$curAnaliseResult}</span>`;
                  break;
              case "heart_rate":
                  this.$curAnaliseResult.includes("calculation") ? this.$analiseResult.classList.add("heart_rate--analyze") : this.$analiseResult.classList.add("heart_rate--rate"), this.$analiseResult.innerHTML = `<span>${this.$curAnaliseResult}</span>`;
                  break;
              default:
                  this.$analiseResult.innerHTML = `<span>${this.$curAnaliseResult}</span>`, this.$analiseResult.classList.remove(n), this.$analiseResult.classList.remove("gesture")
          }
          return !0
      }
      onEffectSelect(s, i) {
          return i.target.value && this.setEffect(this.$selectedGroup.effects[s]).then(), !0
      }
      onSliderInput(s) {
          let {
              value: i,
              min: a,
              max: o
          } = s.target, l = (i - a) / (o - a) * 100, h = `linear-gradient(to right, ${P} 0%, ${P} ${l}%, ${z} ${l}%, ${z} 100%)`;
          y(".webar-sdk__slider").style.background = h;
          let {
              params: m,
              arg: d,
              direction: f
          } = this.$selectedEffect;
          return this.setEffectParam(m, s.target.value * f / 10, d), !0
      }
      onToggleChange(s) {
          return this.setEffectParam(this.$selectedEffect.params, s.target.checked ? 1 : 0), !0
      }
      startSpinner() {
          return u("Start spinner"), g(this.$spinner, n), g(this.$spinnerOverlay, "webar-sdk__spinner-overlay--hidden"), !0
      }
      stopSpinner() {
          return u("Stop spinner"), c(this.$spinner, n), c(this.$spinnerOverlay, "webar-sdk__spinner-overlay--hidden"), !0
      }
      setEffectParam(s, i, a) {
          u("Set effect params: ", s, i), s.forEach(o => {
              if (o == "makeup_eyebags") {
                  let h = {
                      scene: "dark_circles",
                      version: "2.0.0",
                      faces: [{
                          makeup_eyebags: {
                              alpha: i
                          }
                      }]
                  };
                  try {
                      this.player._effectManager.reloadConfig(JSON.stringify(h))
                  } catch (m) {
                      console.error(m)
                  }
                  return !0
              }
              let l = a ? `${o}({${a}:${i}})` : `${o}(${i})`;
              this.effects[this.$selectedEffect.name].evalJs(l)
          })
      }
      handleSuccess(s) {
          window.stream = s
      }
      async getDevices() {
          u("Get devices call");
          let s = !1;
          if (navigator.mediaDevices?.enumerateDevices) try {
              try {
                  await navigator.mediaDevices.getUserMedia({
                      video: !0
                  }), s = !0
              } catch {
                  A("Permission not granted"), s = !1
              }
              let i = [],
                  a = await navigator.mediaDevices.enumerateDevices();
              a = a.filter(h => h.kind == "videoinput"), this.sources = a;
              let o = N.default.desktop(),
                  l = navigator.platform.startsWith("iP") || navigator.platform.startsWith("Mac");
              if (u(`Found ${a.length} before filter video inputs: `, {
                      persmissions: s,
                      desktop: o,
                      ios: l
                  }), (!o || l) && a.length > 2) {
                  let h = !1,
                      m = !1;
                  u(`Filter ${a.length} cameras on mobile device`);
                  for (let d of a) {
                      let f = d.getCapabilities();
                      if (u(`Camera ${d.label} supported params: `, {
                              width: f.width?.max,
                              height: f.height?.max,
                              frameRate: f.frameRate?.max,
                              facingMode: f?.facingMode?.[0] || ""
                          }), f.facingMode.includes("environment") && !m) {
                          m = !0, i.push(d);
                          continue
                      }
                      if (f.facingMode.includes("user") && !h) {
                          h = !0, i.push(d);
                          continue
                      }
                      u("Camera ignored, because front and back cameras already detected")
                  }
                  i.length || (u("Back/front cameras not found, take all cameras instead"), i = [...a])
              } else i = [...a];
              return u(`Found ${i.length} video inputs`), u("Cameras labels: ", i.map(h => `'${h.label}'`).join(", ")), i
          } catch (i) {
              console.error(`Get video inputs error: ${i.message}`)
          } else u("enumerateDevices() not supported.");
          return !1
      }
      async deviceChanged() {
          u("Device changed"), this.player && this.player.pause();
          let s = await this.getDevices();
          return this.cameras = s, !s?.length || s.length < 2 ? (u("Not enough cameras found. Hide switch camera button"), this.toggleSwitchCameraButton(!1), !1) : (this.player && !this.cameras.find(i => i.deviceId === this.wcam_id) && this.switchCamera(), this.player && (this.toggleSwitchCameraButton(this.cameras.length > 1), this.player.play()), !0)
      }
      async switchCamera(s = !1) {
          if (u("Switch camera call: ", s), this.switchCameraFailCount > 5) return u("Camera switch failed too many times. Try another camera."), this.switchCameraFailCount = 0, this.switchCamera(), !1;
          this.startSpinner();
          try {
              this.player.pause(), this.wcam.stop()
          } catch {
              return u("Can't start webcam"), await V(200), this.switchCameraFailCount++, this.switchCamera(s || this.wcam_id)
          }
          let i = this.wcam_id,
              a = this.cameras.findIndex(_ => _.deviceId === i),
              o = await navigator.mediaDevices.getUserMedia({
                  video: {
                      deviceId: i
                  }
              });
          o.getTracks().forEach(_ => {
              _.stop(), o.removeTrack(_)
          });
          let l = a >= this.cameras.length - 1 ? 0 : a + 1,
              h = s || this.cameras[l].deviceId,
              m = s ? this.cameras.find(_ => _.deviceId === s).label : this.cameras[l].label,
              d = this.cameras.find(_ => _.deviceId === h);
          this.wcam_id = h;
          let f = {};
          se() && !N.default.ios() && this.sources.length <= 2 ? (f.facingMode = this.facingMode == "user" ? "environment" : "user", this.facingMode = f.facingMode == "user" ? "environment" : "user") : (f.deviceId = h, this.facingMode = "user"), m.toLowerCase().includes("back") && (this.facingMode = "environment");
          try {
              let _ = await navigator.mediaDevices.getUserMedia({
                  video: {
                      deviceId: h
                  }
              });
              _.getTracks().forEach(S => {
                  S.stop(), _.removeTrack(S)
              });
              let E = d.getCapabilities();
              u("Supported params: ", E), E?.facingMode?.[0] && (this.facingMode = E.facingMode[0], this.facingMode != "user" && (f.facingMode = this.facingMode))
          } catch (_) {
              return u("Get supported params error: ", _), await V(200), this.switchCameraFailCount++, this.switchCamera(h)
          }
          h in this.wcams || (this.wcams[h] = new k.Webcam(f));
          let b;
          try {
              this.wcam.start(), await this.player.use(this.wcam), b = setInterval(() => {
                  if (!this.wcam._stream) return !1;
                  clearInterval(b), this.wcam._stream.then(() => {
                      u("Camera stream started"), this.$canvas && (this.facingMode == "environment" ? this.$canvas.setAttribute("style", "max-width: 100%; object-fit: cover; transform: translate(-50%, -50%) rotateY(180deg);") : this.$canvas.setAttribute("style", "max-width: 100%; object-fit: cover;")), setTimeout(() => {
                          this.stopSpinner()
                      }, 1e3)
                  })
              }, 10), u(`Switch camera from ${this.cameras[a].label}(${i}) to ${m}(${h}) with config: ${JSON.stringify(f)}`), this.player.play({
                  pauseOnEmpty: !1
              }), this.switchCameraFailCount = 0
          } catch (_) {
              return u("Switch camera error: ", _), clearInterval(b), await V(200), this.switchCameraFailCount++, this.switchCamera(h)
          }
          return !0
      }
      startFpsTracking() {
          return u("Start player FPS tracking"), this.player.addEventListener("framereceived", () => this.fpsCounter.cam++), this.player.addEventListener("frameprocessed", ({
              detail: s
          }) => this.fpsCounter.processing = 1e3 / s.averagedDuration), this.player.addEventListener("framerendered", () => this.fpsCounter.render++), setInterval(() => {
              this.fps.cam = this.fpsCounter.cam, this.fps.render = this.fpsCounter.render, this.fps.processing = this.fpsCounter.processing, this.fpsCounter.cam = 0, this.fpsCounter.render = 0, this.$fpsInfoBlock.textContent = `${this.fps.cam}fps`, this.$fpsInfoBlock && W ? g(this.$fpsInfoBlock, n) : c(this.$fpsInfoBlock, n)
          }, 1e3), !0
      }
      static init(s) {
          re = re ?? new e(s)
      }
  };
  document.addEventListener("DOMContentLoaded", () => {
      q(".js-webar-sdk").forEach(e => {
          X(e, (s, i) => {
              for (let a of s) {
                  let {
                      isIntersecting: o
                  } = a;
                  o && U.init(e)
              }
          })
      })
  });
  window.DEMO_VERSION = "1.2.1";
})();
/*! Bundled license information:

is_js/is.js:
(*!
 * is.js 0.8.0
 * Author: Aras Atasaygin
 *)
*/