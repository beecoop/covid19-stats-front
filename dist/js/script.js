"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function (e, t) {
  "use strict";

  "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = e.document ? t(e, !0) : function (e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");
    return t(e);
  } : t(e);
}("undefined" != typeof window ? window : void 0, function (C, e) {
  "use strict";

  var t = [],
      E = C.document,
      r = Object.getPrototypeOf,
      s = t.slice,
      g = t.concat,
      u = t.push,
      i = t.indexOf,
      n = {},
      o = n.toString,
      v = n.hasOwnProperty,
      a = v.toString,
      l = a.call(Object),
      y = {},
      m = function m(e) {
    return "function" == typeof e && "number" != typeof e.nodeType;
  },
      x = function x(e) {
    return null != e && e === e.window;
  },
      c = {
    type: !0,
    src: !0,
    nonce: !0,
    noModule: !0
  };

  function b(e, t, n) {
    var r,
        i,
        o = (n = n || E).createElement("script");
    if (o.text = e, t) for (r in c) {
      (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
    }
    n.head.appendChild(o).parentNode.removeChild(o);
  }

  function w(e) {
    return null == e ? e + "" : "object" == _typeof(e) || "function" == typeof e ? n[o.call(e)] || "object" : _typeof(e);
  }

  var f = "3.4.1",
      k = function k(e, t) {
    return new k.fn.init(e, t);
  },
      p = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

  function d(e) {
    var t = !!e && "length" in e && e.length,
        n = w(e);
    return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e);
  }

  k.fn = k.prototype = {
    jquery: f,
    constructor: k,
    length: 0,
    toArray: function toArray() {
      return s.call(this);
    },
    get: function get(e) {
      return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e];
    },
    pushStack: function pushStack(e) {
      var t = k.merge(this.constructor(), e);
      return t.prevObject = this, t;
    },
    each: function each(e) {
      return k.each(this, e);
    },
    map: function map(n) {
      return this.pushStack(k.map(this, function (e, t) {
        return n.call(e, t, e);
      }));
    },
    slice: function slice() {
      return this.pushStack(s.apply(this, arguments));
    },
    first: function first() {
      return this.eq(0);
    },
    last: function last() {
      return this.eq(-1);
    },
    eq: function eq(e) {
      var t = this.length,
          n = +e + (e < 0 ? t : 0);
      return this.pushStack(0 <= n && n < t ? [this[n]] : []);
    },
    end: function end() {
      return this.prevObject || this.constructor();
    },
    push: u,
    sort: t.sort,
    splice: t.splice
  }, k.extend = k.fn.extend = function () {
    var e,
        t,
        n,
        r,
        i,
        o,
        a = arguments[0] || {},
        s = 1,
        u = arguments.length,
        l = !1;

    for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == _typeof(a) || m(a) || (a = {}), s === u && (a = this, s--); s < u; s++) {
      if (null != (e = arguments[s])) for (t in e) {
        r = e[t], "__proto__" !== t && a !== r && (l && r && (k.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || k.isPlainObject(n) ? n : {}, i = !1, a[t] = k.extend(l, o, r)) : void 0 !== r && (a[t] = r));
      }
    }

    return a;
  }, k.extend({
    expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function error(e) {
      throw new Error(e);
    },
    noop: function noop() {},
    isPlainObject: function isPlainObject(e) {
      var t, n;
      return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof (n = v.call(t, "constructor") && t.constructor) && a.call(n) === l);
    },
    isEmptyObject: function isEmptyObject(e) {
      var t;

      for (t in e) {
        return !1;
      }

      return !0;
    },
    globalEval: function globalEval(e, t) {
      b(e, {
        nonce: t && t.nonce
      });
    },
    each: function each(e, t) {
      var n,
          r = 0;

      if (d(e)) {
        for (n = e.length; r < n; r++) {
          if (!1 === t.call(e[r], r, e[r])) break;
        }
      } else for (r in e) {
        if (!1 === t.call(e[r], r, e[r])) break;
      }

      return e;
    },
    trim: function trim(e) {
      return null == e ? "" : (e + "").replace(p, "");
    },
    makeArray: function makeArray(e, t) {
      var n = t || [];
      return null != e && (d(Object(e)) ? k.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n;
    },
    inArray: function inArray(e, t, n) {
      return null == t ? -1 : i.call(t, e, n);
    },
    merge: function merge(e, t) {
      for (var n = +t.length, r = 0, i = e.length; r < n; r++) {
        e[i++] = t[r];
      }

      return e.length = i, e;
    },
    grep: function grep(e, t, n) {
      for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) {
        !t(e[i], i) !== a && r.push(e[i]);
      }

      return r;
    },
    map: function map(e, t, n) {
      var r,
          i,
          o = 0,
          a = [];
      if (d(e)) for (r = e.length; o < r; o++) {
        null != (i = t(e[o], o, n)) && a.push(i);
      } else for (o in e) {
        null != (i = t(e[o], o, n)) && a.push(i);
      }
      return g.apply([], a);
    },
    guid: 1,
    support: y
  }), "function" == typeof Symbol && (k.fn[Symbol.iterator] = t[Symbol.iterator]), k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
    n["[object " + t + "]"] = t.toLowerCase();
  });

  var h = function (n) {
    var e,
        d,
        b,
        o,
        i,
        h,
        f,
        g,
        w,
        u,
        l,
        T,
        C,
        a,
        E,
        v,
        s,
        c,
        y,
        k = "sizzle" + 1 * new Date(),
        m = n.document,
        S = 0,
        r = 0,
        p = ue(),
        x = ue(),
        N = ue(),
        A = ue(),
        D = function D(e, t) {
      return e === t && (l = !0), 0;
    },
        j = {}.hasOwnProperty,
        t = [],
        q = t.pop,
        L = t.push,
        H = t.push,
        O = t.slice,
        P = function P(e, t) {
      for (var n = 0, r = e.length; n < r; n++) {
        if (e[n] === t) return n;
      }

      return -1;
    },
        R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        M = "[\\x20\\t\\r\\n\\f]",
        I = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
        W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
        $ = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
        F = new RegExp(M + "+", "g"),
        B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
        _ = new RegExp("^" + M + "*," + M + "*"),
        z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
        U = new RegExp(M + "|>"),
        X = new RegExp($),
        V = new RegExp("^" + I + "$"),
        G = {
      ID: new RegExp("^#(" + I + ")"),
      CLASS: new RegExp("^\\.(" + I + ")"),
      TAG: new RegExp("^(" + I + "|[*])"),
      ATTR: new RegExp("^" + W),
      PSEUDO: new RegExp("^" + $),
      CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
      bool: new RegExp("^(?:" + R + ")$", "i"),
      needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
    },
        Y = /HTML$/i,
        Q = /^(?:input|select|textarea|button)$/i,
        J = /^h\d$/i,
        K = /^[^{]+\{\s*\[native \w/,
        Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        ee = /[+~]/,
        te = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
        ne = function ne(e, t, n) {
      var r = "0x" + t - 65536;
      return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320);
    },
        re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        ie = function ie(e, t) {
      return t ? "\0" === e ? "\uFFFD" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
    },
        oe = function oe() {
      T();
    },
        ae = be(function (e) {
      return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
    }, {
      dir: "parentNode",
      next: "legend"
    });

    try {
      H.apply(t = O.call(m.childNodes), m.childNodes), t[m.childNodes.length].nodeType;
    } catch (e) {
      H = {
        apply: t.length ? function (e, t) {
          L.apply(e, O.call(t));
        } : function (e, t) {
          var n = e.length,
              r = 0;

          while (e[n++] = t[r++]) {
            ;
          }

          e.length = n - 1;
        }
      };
    }

    function se(t, e, n, r) {
      var i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = e && e.ownerDocument,
          p = e ? e.nodeType : 9;
      if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;

      if (!r && ((e ? e.ownerDocument || e : m) !== C && T(e), e = e || C, E)) {
        if (11 !== p && (u = Z.exec(t))) if (i = u[1]) {
          if (9 === p) {
            if (!(a = e.getElementById(i))) return n;
            if (a.id === i) return n.push(a), n;
          } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i) return n.push(a), n;
        } else {
          if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
          if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), n;
        }

        if (d.qsa && !A[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
          if (c = t, f = e, 1 === p && U.test(t)) {
            (s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = k), o = (l = h(t)).length;

            while (o--) {
              l[o] = "#" + s + " " + xe(l[o]);
            }

            c = l.join(","), f = ee.test(t) && ye(e.parentNode) || e;
          }

          try {
            return H.apply(n, f.querySelectorAll(c)), n;
          } catch (e) {
            A(t, !0);
          } finally {
            s === k && e.removeAttribute("id");
          }
        }
      }

      return g(t.replace(B, "$1"), e, n, r);
    }

    function ue() {
      var r = [];
      return function e(t, n) {
        return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n;
      };
    }

    function le(e) {
      return e[k] = !0, e;
    }

    function ce(e) {
      var t = C.createElement("fieldset");

      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null;
      }
    }

    function fe(e, t) {
      var n = e.split("|"),
          r = n.length;

      while (r--) {
        b.attrHandle[n[r]] = t;
      }
    }

    function pe(e, t) {
      var n = t && e,
          r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n) while (n = n.nextSibling) {
        if (n === t) return -1;
      }
      return e ? 1 : -1;
    }

    function de(t) {
      return function (e) {
        return "input" === e.nodeName.toLowerCase() && e.type === t;
      };
    }

    function he(n) {
      return function (e) {
        var t = e.nodeName.toLowerCase();
        return ("input" === t || "button" === t) && e.type === n;
      };
    }

    function ge(t) {
      return function (e) {
        return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t;
      };
    }

    function ve(a) {
      return le(function (o) {
        return o = +o, le(function (e, t) {
          var n,
              r = a([], e.length, o),
              i = r.length;

          while (i--) {
            e[n = r[i]] && (e[n] = !(t[n] = e[n]));
          }
        });
      });
    }

    function ye(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }

    for (e in d = se.support = {}, i = se.isXML = function (e) {
      var t = e.namespaceURI,
          n = (e.ownerDocument || e).documentElement;
      return !Y.test(t || n && n.nodeName || "HTML");
    }, T = se.setDocument = function (e) {
      var t,
          n,
          r = e ? e.ownerDocument || e : m;
      return r !== C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, E = !i(C), m !== C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), d.attributes = ce(function (e) {
        return e.className = "i", !e.getAttribute("className");
      }), d.getElementsByTagName = ce(function (e) {
        return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length;
      }), d.getElementsByClassName = K.test(C.getElementsByClassName), d.getById = ce(function (e) {
        return a.appendChild(e).id = k, !C.getElementsByName || !C.getElementsByName(k).length;
      }), d.getById ? (b.filter.ID = function (e) {
        var t = e.replace(te, ne);
        return function (e) {
          return e.getAttribute("id") === t;
        };
      }, b.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && E) {
          var n = t.getElementById(e);
          return n ? [n] : [];
        }
      }) : (b.filter.ID = function (e) {
        var n = e.replace(te, ne);
        return function (e) {
          var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
          return t && t.value === n;
        };
      }, b.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && E) {
          var n,
              r,
              i,
              o = t.getElementById(e);

          if (o) {
            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
            i = t.getElementsByName(e), r = 0;

            while (o = i[r++]) {
              if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
            }
          }

          return [];
        }
      }), b.find.TAG = d.getElementsByTagName ? function (e, t) {
        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0;
      } : function (e, t) {
        var n,
            r = [],
            i = 0,
            o = t.getElementsByTagName(e);

        if ("*" === e) {
          while (n = o[i++]) {
            1 === n.nodeType && r.push(n);
          }

          return r;
        }

        return o;
      }, b.find.CLASS = d.getElementsByClassName && function (e, t) {
        if ("undefined" != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e);
      }, s = [], v = [], (d.qsa = K.test(C.querySelectorAll)) && (ce(function (e) {
        a.appendChild(e).innerHTML = "<a id='" + k + "'></a><select id='" + k + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + k + "-]").length || v.push("~="), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + k + "+*").length || v.push(".#.+[+~]");
      }), ce(function (e) {
        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
        var t = C.createElement("input");
        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:");
      })), (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function (e) {
        d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", $);
      }), v = v.length && new RegExp(v.join("|")), s = s.length && new RegExp(s.join("|")), t = K.test(a.compareDocumentPosition), y = t || K.test(a.contains) ? function (e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e,
            r = t && t.parentNode;
        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
      } : function (e, t) {
        if (t) while (t = t.parentNode) {
          if (t === e) return !0;
        }
        return !1;
      }, D = t ? function (e, t) {
        if (e === t) return l = !0, 0;
        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
        return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e === C || e.ownerDocument === m && y(m, e) ? -1 : t === C || t.ownerDocument === m && y(m, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1);
      } : function (e, t) {
        if (e === t) return l = !0, 0;
        var n,
            r = 0,
            i = e.parentNode,
            o = t.parentNode,
            a = [e],
            s = [t];
        if (!i || !o) return e === C ? -1 : t === C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
        if (i === o) return pe(e, t);
        n = e;

        while (n = n.parentNode) {
          a.unshift(n);
        }

        n = t;

        while (n = n.parentNode) {
          s.unshift(n);
        }

        while (a[r] === s[r]) {
          r++;
        }

        return r ? pe(a[r], s[r]) : a[r] === m ? -1 : s[r] === m ? 1 : 0;
      }), C;
    }, se.matches = function (e, t) {
      return se(e, null, null, t);
    }, se.matchesSelector = function (e, t) {
      if ((e.ownerDocument || e) !== C && T(e), d.matchesSelector && E && !A[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))) try {
        var n = c.call(e, t);
        if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n;
      } catch (e) {
        A(t, !0);
      }
      return 0 < se(t, C, null, [e]).length;
    }, se.contains = function (e, t) {
      return (e.ownerDocument || e) !== C && T(e), y(e, t);
    }, se.attr = function (e, t) {
      (e.ownerDocument || e) !== C && T(e);
      var n = b.attrHandle[t.toLowerCase()],
          r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
      return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
    }, se.escape = function (e) {
      return (e + "").replace(re, ie);
    }, se.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }, se.uniqueSort = function (e) {
      var t,
          n = [],
          r = 0,
          i = 0;

      if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(D), l) {
        while (t = e[i++]) {
          t === e[i] && (r = n.push(i));
        }

        while (r--) {
          e.splice(n[r], 1);
        }
      }

      return u = null, e;
    }, o = se.getText = function (e) {
      var t,
          n = "",
          r = 0,
          i = e.nodeType;

      if (i) {
        if (1 === i || 9 === i || 11 === i) {
          if ("string" == typeof e.textContent) return e.textContent;

          for (e = e.firstChild; e; e = e.nextSibling) {
            n += o(e);
          }
        } else if (3 === i || 4 === i) return e.nodeValue;
      } else while (t = e[r++]) {
        n += o(t);
      }

      return n;
    }, (b = se.selectors = {
      cacheLength: 50,
      createPseudo: le,
      match: G,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: !0
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: !0
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        ATTR: function ATTR(e) {
          return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
        },
        CHILD: function CHILD(e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e;
        },
        PSEUDO: function PSEUDO(e) {
          var t,
              n = !e[6] && e[2];
          return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
        }
      },
      filter: {
        TAG: function TAG(e) {
          var t = e.replace(te, ne).toLowerCase();
          return "*" === e ? function () {
            return !0;
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t;
          };
        },
        CLASS: function CLASS(e) {
          var t = p[e + " "];
          return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && p(e, function (e) {
            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "");
          });
        },
        ATTR: function ATTR(n, r, i) {
          return function (e) {
            var t = se.attr(e, n);
            return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(F, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"));
          };
        },
        CHILD: function CHILD(h, e, t, g, v) {
          var y = "nth" !== h.slice(0, 3),
              m = "last" !== h.slice(-4),
              x = "of-type" === e;
          return 1 === g && 0 === v ? function (e) {
            return !!e.parentNode;
          } : function (e, t, n) {
            var r,
                i,
                o,
                a,
                s,
                u,
                l = y !== m ? "nextSibling" : "previousSibling",
                c = e.parentNode,
                f = x && e.nodeName.toLowerCase(),
                p = !n && !x,
                d = !1;

            if (c) {
              if (y) {
                while (l) {
                  a = e;

                  while (a = a[l]) {
                    if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                  }

                  u = l = "only" === h && !u && "nextSibling";
                }

                return !0;
              }

              if (u = [m ? c.firstChild : c.lastChild], m && p) {
                d = (s = (r = (i = (o = (a = c)[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]) && r[2], a = s && c.childNodes[s];

                while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) {
                  if (1 === a.nodeType && ++d && a === e) {
                    i[h] = [S, s, d];
                    break;
                  }
                }
              } else if (p && (d = s = (r = (i = (o = (a = e)[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]), !1 === d) while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) {
                if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [S, d]), a === e)) break;
              }

              return (d -= v) === g || d % g == 0 && 0 <= d / g;
            }
          };
        },
        PSEUDO: function PSEUDO(e, o) {
          var t,
              a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
          return a[k] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function (e, t) {
            var n,
                r = a(e, o),
                i = r.length;

            while (i--) {
              e[n = P(e, r[i])] = !(t[n] = r[i]);
            }
          }) : function (e) {
            return a(e, 0, t);
          }) : a;
        }
      },
      pseudos: {
        not: le(function (e) {
          var r = [],
              i = [],
              s = f(e.replace(B, "$1"));
          return s[k] ? le(function (e, t, n, r) {
            var i,
                o = s(e, null, r, []),
                a = e.length;

            while (a--) {
              (i = o[a]) && (e[a] = !(t[a] = i));
            }
          }) : function (e, t, n) {
            return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop();
          };
        }),
        has: le(function (t) {
          return function (e) {
            return 0 < se(t, e).length;
          };
        }),
        contains: le(function (t) {
          return t = t.replace(te, ne), function (e) {
            return -1 < (e.textContent || o(e)).indexOf(t);
          };
        }),
        lang: le(function (n) {
          return V.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(), function (e) {
            var t;

            do {
              if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-");
            } while ((e = e.parentNode) && 1 === e.nodeType);

            return !1;
          };
        }),
        target: function target(e) {
          var t = n.location && n.location.hash;
          return t && t.slice(1) === e.id;
        },
        root: function root(e) {
          return e === a;
        },
        focus: function focus(e) {
          return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
        },
        enabled: ge(!1),
        disabled: ge(!0),
        checked: function checked(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && !!e.checked || "option" === t && !!e.selected;
        },
        selected: function selected(e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
        },
        empty: function empty(e) {
          for (e = e.firstChild; e; e = e.nextSibling) {
            if (e.nodeType < 6) return !1;
          }

          return !0;
        },
        parent: function parent(e) {
          return !b.pseudos.empty(e);
        },
        header: function header(e) {
          return J.test(e.nodeName);
        },
        input: function input(e) {
          return Q.test(e.nodeName);
        },
        button: function button(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && "button" === e.type || "button" === t;
        },
        text: function text(e) {
          var t;
          return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
        },
        first: ve(function () {
          return [0];
        }),
        last: ve(function (e, t) {
          return [t - 1];
        }),
        eq: ve(function (e, t, n) {
          return [n < 0 ? n + t : n];
        }),
        even: ve(function (e, t) {
          for (var n = 0; n < t; n += 2) {
            e.push(n);
          }

          return e;
        }),
        odd: ve(function (e, t) {
          for (var n = 1; n < t; n += 2) {
            e.push(n);
          }

          return e;
        }),
        lt: ve(function (e, t, n) {
          for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) {
            e.push(r);
          }

          return e;
        }),
        gt: ve(function (e, t, n) {
          for (var r = n < 0 ? n + t : n; ++r < t;) {
            e.push(r);
          }

          return e;
        })
      }
    }).pseudos.nth = b.pseudos.eq, {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0
    }) {
      b.pseudos[e] = de(e);
    }

    for (e in {
      submit: !0,
      reset: !0
    }) {
      b.pseudos[e] = he(e);
    }

    function me() {}

    function xe(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) {
        r += e[t].value;
      }

      return r;
    }

    function be(s, e, t) {
      var u = e.dir,
          l = e.next,
          c = l || u,
          f = t && "parentNode" === c,
          p = r++;
      return e.first ? function (e, t, n) {
        while (e = e[u]) {
          if (1 === e.nodeType || f) return s(e, t, n);
        }

        return !1;
      } : function (e, t, n) {
        var r,
            i,
            o,
            a = [S, p];

        if (n) {
          while (e = e[u]) {
            if ((1 === e.nodeType || f) && s(e, t, n)) return !0;
          }
        } else while (e = e[u]) {
          if (1 === e.nodeType || f) if (i = (o = e[k] || (e[k] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e;else {
            if ((r = i[c]) && r[0] === S && r[1] === p) return a[2] = r[2];
            if ((i[c] = a)[2] = s(e, t, n)) return !0;
          }
        }

        return !1;
      };
    }

    function we(i) {
      return 1 < i.length ? function (e, t, n) {
        var r = i.length;

        while (r--) {
          if (!i[r](e, t, n)) return !1;
        }

        return !0;
      } : i[0];
    }

    function Te(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) {
        (o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
      }

      return a;
    }

    function Ce(d, h, g, v, y, e) {
      return v && !v[k] && (v = Ce(v)), y && !y[k] && (y = Ce(y, e)), le(function (e, t, n, r) {
        var i,
            o,
            a,
            s = [],
            u = [],
            l = t.length,
            c = e || function (e, t, n) {
          for (var r = 0, i = t.length; r < i; r++) {
            se(e, t[r], n);
          }

          return n;
        }(h || "*", n.nodeType ? [n] : n, []),
            f = !d || !e && h ? c : Te(c, s, d, n, r),
            p = g ? y || (e ? d : l || v) ? [] : t : f;

        if (g && g(f, p, n, r), v) {
          i = Te(p, u), v(i, [], n, r), o = i.length;

          while (o--) {
            (a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
          }
        }

        if (e) {
          if (y || d) {
            if (y) {
              i = [], o = p.length;

              while (o--) {
                (a = p[o]) && i.push(f[o] = a);
              }

              y(null, p = [], i, r);
            }

            o = p.length;

            while (o--) {
              (a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a));
            }
          }
        } else p = Te(p === t ? p.splice(l, p.length) : p), y ? y(null, t, p, r) : H.apply(t, p);
      });
    }

    function Ee(e) {
      for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function (e) {
        return e === i;
      }, a, !0), l = be(function (e) {
        return -1 < P(i, e);
      }, a, !0), c = [function (e, t, n) {
        var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
        return i = null, r;
      }]; s < r; s++) {
        if (t = b.relative[e[s].type]) c = [be(we(c), t)];else {
          if ((t = b.filter[e[s].type].apply(null, e[s].matches))[k]) {
            for (n = ++s; n < r; n++) {
              if (b.relative[e[n].type]) break;
            }

            return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({
              value: " " === e[s - 2].type ? "*" : ""
            })).replace(B, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e));
          }

          c.push(t);
        }
      }

      return we(c);
    }

    return me.prototype = b.filters = b.pseudos, b.setFilters = new me(), h = se.tokenize = function (e, t) {
      var n,
          r,
          i,
          o,
          a,
          s,
          u,
          l = x[e + " "];
      if (l) return t ? 0 : l.slice(0);
      a = e, s = [], u = b.preFilter;

      while (a) {
        for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = z.exec(a)) && (n = r.shift(), i.push({
          value: n,
          type: r[0].replace(B, " ")
        }), a = a.slice(n.length)), b.filter) {
          !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
            value: n,
            type: o,
            matches: r
          }), a = a.slice(n.length));
        }

        if (!n) break;
      }

      return t ? a.length : a ? se.error(e) : x(e, s).slice(0);
    }, f = se.compile = function (e, t) {
      var n,
          v,
          y,
          m,
          x,
          r,
          i = [],
          o = [],
          a = N[e + " "];

      if (!a) {
        t || (t = h(e)), n = t.length;

        while (n--) {
          (a = Ee(t[n]))[k] ? i.push(a) : o.push(a);
        }

        (a = N(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function r(e, t, n, _r, i) {
          var o,
              a,
              s,
              u = 0,
              l = "0",
              c = e && [],
              f = [],
              p = w,
              d = e || x && b.find.TAG("*", i),
              h = S += null == p ? 1 : Math.random() || .1,
              g = d.length;

          for (i && (w = t === C || t || i); l !== g && null != (o = d[l]); l++) {
            if (x && o) {
              a = 0, t || o.ownerDocument === C || (T(o), n = !E);

              while (s = v[a++]) {
                if (s(o, t || C, n)) {
                  _r.push(o);

                  break;
                }
              }

              i && (S = h);
            }

            m && ((o = !s && o) && u--, e && c.push(o));
          }

          if (u += l, m && l !== u) {
            a = 0;

            while (s = y[a++]) {
              s(c, f, t, n);
            }

            if (e) {
              if (0 < u) while (l--) {
                c[l] || f[l] || (f[l] = q.call(_r));
              }
              f = Te(f);
            }

            H.apply(_r, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(_r);
          }

          return i && (S = h, w = p), c;
        }, m ? le(r) : r))).selector = e;
      }

      return a;
    }, g = se.select = function (e, t, n, r) {
      var i,
          o,
          a,
          s,
          u,
          l = "function" == typeof e && e,
          c = !r && h(e = l.selector || e);

      if (n = n || [], 1 === c.length) {
        if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
          if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
          l && (t = t.parentNode), e = e.slice(o.shift().value.length);
        }

        i = G.needsContext.test(e) ? 0 : o.length;

        while (i--) {
          if (a = o[i], b.relative[s = a.type]) break;

          if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) {
            if (o.splice(i, 1), !(e = r.length && xe(o))) return H.apply(n, r), n;
            break;
          }
        }
      }

      return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t), n;
    }, d.sortStable = k.split("").sort(D).join("") === k, d.detectDuplicates = !!l, T(), d.sortDetached = ce(function (e) {
      return 1 & e.compareDocumentPosition(C.createElement("fieldset"));
    }), ce(function (e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
    }) || fe("type|href|height|width", function (e, t, n) {
      if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
    }), d.attributes && ce(function (e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
    }) || fe("value", function (e, t, n) {
      if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
    }), ce(function (e) {
      return null == e.getAttribute("disabled");
    }) || fe(R, function (e, t, n) {
      var r;
      if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
    }), se;
  }(C);

  k.find = h, k.expr = h.selectors, k.expr[":"] = k.expr.pseudos, k.uniqueSort = k.unique = h.uniqueSort, k.text = h.getText, k.isXMLDoc = h.isXML, k.contains = h.contains, k.escapeSelector = h.escape;

  var T = function T(e, t, n) {
    var r = [],
        i = void 0 !== n;

    while ((e = e[t]) && 9 !== e.nodeType) {
      if (1 === e.nodeType) {
        if (i && k(e).is(n)) break;
        r.push(e);
      }
    }

    return r;
  },
      S = function S(e, t) {
    for (var n = []; e; e = e.nextSibling) {
      1 === e.nodeType && e !== t && n.push(e);
    }

    return n;
  },
      N = k.expr.match.needsContext;

  function A(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }

  var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

  function j(e, n, r) {
    return m(n) ? k.grep(e, function (e, t) {
      return !!n.call(e, t, e) !== r;
    }) : n.nodeType ? k.grep(e, function (e) {
      return e === n !== r;
    }) : "string" != typeof n ? k.grep(e, function (e) {
      return -1 < i.call(n, e) !== r;
    }) : k.filter(n, e, r);
  }

  k.filter = function (e, t, n) {
    var r = t[0];
    return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? k.find.matchesSelector(r, e) ? [r] : [] : k.find.matches(e, k.grep(t, function (e) {
      return 1 === e.nodeType;
    }));
  }, k.fn.extend({
    find: function find(e) {
      var t,
          n,
          r = this.length,
          i = this;
      if ("string" != typeof e) return this.pushStack(k(e).filter(function () {
        for (t = 0; t < r; t++) {
          if (k.contains(i[t], this)) return !0;
        }
      }));

      for (n = this.pushStack([]), t = 0; t < r; t++) {
        k.find(e, i[t], n);
      }

      return 1 < r ? k.uniqueSort(n) : n;
    },
    filter: function filter(e) {
      return this.pushStack(j(this, e || [], !1));
    },
    not: function not(e) {
      return this.pushStack(j(this, e || [], !0));
    },
    is: function is(e) {
      return !!j(this, "string" == typeof e && N.test(e) ? k(e) : e || [], !1).length;
    }
  });
  var q,
      L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (k.fn.init = function (e, t, n) {
    var r, i;
    if (!e) return this;

    if (n = n || q, "string" == typeof e) {
      if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : L.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);

      if (r[1]) {
        if (t = t instanceof k ? t[0] : t, k.merge(this, k.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), D.test(r[1]) && k.isPlainObject(t)) for (r in t) {
          m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        }
        return this;
      }

      return (i = E.getElementById(r[2])) && (this[0] = i, this.length = 1), this;
    }

    return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(k) : k.makeArray(e, this);
  }).prototype = k.fn, q = k(E);
  var H = /^(?:parents|prev(?:Until|All))/,
      O = {
    children: !0,
    contents: !0,
    next: !0,
    prev: !0
  };

  function P(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType) {
      ;
    }

    return e;
  }

  k.fn.extend({
    has: function has(e) {
      var t = k(e, this),
          n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) {
          if (k.contains(this, t[e])) return !0;
        }
      });
    },
    closest: function closest(e, t) {
      var n,
          r = 0,
          i = this.length,
          o = [],
          a = "string" != typeof e && k(e);
      if (!N.test(e)) for (; r < i; r++) {
        for (n = this[r]; n && n !== t; n = n.parentNode) {
          if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && k.find.matchesSelector(n, e))) {
            o.push(n);
            break;
          }
        }
      }
      return this.pushStack(1 < o.length ? k.uniqueSort(o) : o);
    },
    index: function index(e) {
      return e ? "string" == typeof e ? i.call(k(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function add(e, t) {
      return this.pushStack(k.uniqueSort(k.merge(this.get(), k(e, t))));
    },
    addBack: function addBack(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    }
  }), k.each({
    parent: function parent(e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null;
    },
    parents: function parents(e) {
      return T(e, "parentNode");
    },
    parentsUntil: function parentsUntil(e, t, n) {
      return T(e, "parentNode", n);
    },
    next: function next(e) {
      return P(e, "nextSibling");
    },
    prev: function prev(e) {
      return P(e, "previousSibling");
    },
    nextAll: function nextAll(e) {
      return T(e, "nextSibling");
    },
    prevAll: function prevAll(e) {
      return T(e, "previousSibling");
    },
    nextUntil: function nextUntil(e, t, n) {
      return T(e, "nextSibling", n);
    },
    prevUntil: function prevUntil(e, t, n) {
      return T(e, "previousSibling", n);
    },
    siblings: function siblings(e) {
      return S((e.parentNode || {}).firstChild, e);
    },
    children: function children(e) {
      return S(e.firstChild);
    },
    contents: function contents(e) {
      return "undefined" != typeof e.contentDocument ? e.contentDocument : (A(e, "template") && (e = e.content || e), k.merge([], e.childNodes));
    }
  }, function (r, i) {
    k.fn[r] = function (e, t) {
      var n = k.map(this, i, e);
      return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = k.filter(t, n)), 1 < this.length && (O[r] || k.uniqueSort(n), H.test(r) && n.reverse()), this.pushStack(n);
    };
  });
  var R = /[^\x20\t\r\n\f]+/g;

  function M(e) {
    return e;
  }

  function I(e) {
    throw e;
  }

  function W(e, t, n, r) {
    var i;

    try {
      e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }

  k.Callbacks = function (r) {
    var e, n;
    r = "string" == typeof r ? (e = r, n = {}, k.each(e.match(R) || [], function (e, t) {
      n[t] = !0;
    }), n) : k.extend({}, r);

    var i,
        t,
        o,
        a,
        s = [],
        u = [],
        l = -1,
        c = function c() {
      for (a = a || r.once, o = i = !0; u.length; l = -1) {
        t = u.shift();

        while (++l < s.length) {
          !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1);
        }
      }

      r.memory || (t = !1), i = !1, a && (s = t ? [] : "");
    },
        f = {
      add: function add() {
        return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) {
          k.each(e, function (e, t) {
            m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t);
          });
        }(arguments), t && !i && c()), this;
      },
      remove: function remove() {
        return k.each(arguments, function (e, t) {
          var n;

          while (-1 < (n = k.inArray(t, s, n))) {
            s.splice(n, 1), n <= l && l--;
          }
        }), this;
      },
      has: function has(e) {
        return e ? -1 < k.inArray(e, s) : 0 < s.length;
      },
      empty: function empty() {
        return s && (s = []), this;
      },
      disable: function disable() {
        return a = u = [], s = t = "", this;
      },
      disabled: function disabled() {
        return !s;
      },
      lock: function lock() {
        return a = u = [], t || i || (s = t = ""), this;
      },
      locked: function locked() {
        return !!a;
      },
      fireWith: function fireWith(e, t) {
        return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this;
      },
      fire: function fire() {
        return f.fireWith(this, arguments), this;
      },
      fired: function fired() {
        return !!o;
      }
    };

    return f;
  }, k.extend({
    Deferred: function Deferred(e) {
      var o = [["notify", "progress", k.Callbacks("memory"), k.Callbacks("memory"), 2], ["resolve", "done", k.Callbacks("once memory"), k.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", k.Callbacks("once memory"), k.Callbacks("once memory"), 1, "rejected"]],
          i = "pending",
          a = {
        state: function state() {
          return i;
        },
        always: function always() {
          return s.done(arguments).fail(arguments), this;
        },
        "catch": function _catch(e) {
          return a.then(null, e);
        },
        pipe: function pipe() {
          var i = arguments;
          return k.Deferred(function (r) {
            k.each(o, function (e, t) {
              var n = m(i[t[4]]) && i[t[4]];
              s[t[1]](function () {
                var e = n && n.apply(this, arguments);
                e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments);
              });
            }), i = null;
          }).promise();
        },
        then: function then(t, n, r) {
          var u = 0;

          function l(i, o, a, s) {
            return function () {
              var n = this,
                  r = arguments,
                  e = function e() {
                var e, t;

                if (!(i < u)) {
                  if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                  t = e && ("object" == _typeof(e) || "function" == typeof e) && e.then, m(t) ? s ? t.call(e, l(u, o, M, s), l(u, o, I, s)) : (u++, t.call(e, l(u, o, M, s), l(u, o, I, s), l(u, o, M, o.notifyWith))) : (a !== M && (n = void 0, r = [e]), (s || o.resolveWith)(n, r));
                }
              },
                  t = s ? e : function () {
                try {
                  e();
                } catch (e) {
                  k.Deferred.exceptionHook && k.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== I && (n = void 0, r = [e]), o.rejectWith(n, r));
                }
              };

              i ? t() : (k.Deferred.getStackHook && (t.stackTrace = k.Deferred.getStackHook()), C.setTimeout(t));
            };
          }

          return k.Deferred(function (e) {
            o[0][3].add(l(0, e, m(r) ? r : M, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : M)), o[2][3].add(l(0, e, m(n) ? n : I));
          }).promise();
        },
        promise: function promise(e) {
          return null != e ? k.extend(e, a) : a;
        }
      },
          s = {};
      return k.each(o, function (e, t) {
        var n = t[2],
            r = t[5];
        a[t[1]] = n.add, r && n.add(function () {
          i = r;
        }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function () {
          return s[t[0] + "With"](this === s ? void 0 : this, arguments), this;
        }, s[t[0] + "With"] = n.fireWith;
      }), a.promise(s), e && e.call(s, s), s;
    },
    when: function when(e) {
      var n = arguments.length,
          t = n,
          r = Array(t),
          i = s.call(arguments),
          o = k.Deferred(),
          a = function a(t) {
        return function (e) {
          r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i);
        };
      };

      if (n <= 1 && (W(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then))) return o.then();

      while (t--) {
        W(i[t], a(t), o.reject);
      }

      return o.promise();
    }
  });
  var $ = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  k.Deferred.exceptionHook = function (e, t) {
    C.console && C.console.warn && e && $.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
  }, k.readyException = function (e) {
    C.setTimeout(function () {
      throw e;
    });
  };
  var F = k.Deferred();

  function B() {
    E.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), k.ready();
  }

  k.fn.ready = function (e) {
    return F.then(e)["catch"](function (e) {
      k.readyException(e);
    }), this;
  }, k.extend({
    isReady: !1,
    readyWait: 1,
    ready: function ready(e) {
      (!0 === e ? --k.readyWait : k.isReady) || (k.isReady = !0) !== e && 0 < --k.readyWait || F.resolveWith(E, [k]);
    }
  }), k.ready.then = F.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(k.ready) : (E.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B));

  var _ = function _(e, t, n, r, i, o, a) {
    var s = 0,
        u = e.length,
        l = null == n;
    if ("object" === w(n)) for (s in i = !0, n) {
      _(e, t, s, n[s], !0, o, a);
    } else if (void 0 !== r && (i = !0, m(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function t(e, _t2, n) {
      return l.call(k(e), n);
    })), t)) for (; s < u; s++) {
      t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
    }
    return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
  },
      z = /^-ms-/,
      U = /-([a-z])/g;

  function X(e, t) {
    return t.toUpperCase();
  }

  function V(e) {
    return e.replace(z, "ms-").replace(U, X);
  }

  var G = function G(e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };

  function Y() {
    this.expando = k.expando + Y.uid++;
  }

  Y.uid = 1, Y.prototype = {
    cache: function cache(e) {
      var t = e[this.expando];
      return t || (t = {}, G(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
        value: t,
        configurable: !0
      }))), t;
    },
    set: function set(e, t, n) {
      var r,
          i = this.cache(e);
      if ("string" == typeof t) i[V(t)] = n;else for (r in t) {
        i[V(r)] = t[r];
      }
      return i;
    },
    get: function get(e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][V(t)];
    },
    access: function access(e, t, n) {
      return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
    },
    remove: function remove(e, t) {
      var n,
          r = e[this.expando];

      if (void 0 !== r) {
        if (void 0 !== t) {
          n = (t = Array.isArray(t) ? t.map(V) : (t = V(t)) in r ? [t] : t.match(R) || []).length;

          while (n--) {
            delete r[t[n]];
          }
        }

        (void 0 === t || k.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
      }
    },
    hasData: function hasData(e) {
      var t = e[this.expando];
      return void 0 !== t && !k.isEmptyObject(t);
    }
  };
  var Q = new Y(),
      J = new Y(),
      K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      Z = /[A-Z]/g;

  function ee(e, t, n) {
    var r, i;
    if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(Z, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
      try {
        n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : K.test(i) ? JSON.parse(i) : i);
      } catch (e) {}

      J.set(e, t, n);
    } else n = void 0;
    return n;
  }

  k.extend({
    hasData: function hasData(e) {
      return J.hasData(e) || Q.hasData(e);
    },
    data: function data(e, t, n) {
      return J.access(e, t, n);
    },
    removeData: function removeData(e, t) {
      J.remove(e, t);
    },
    _data: function _data(e, t, n) {
      return Q.access(e, t, n);
    },
    _removeData: function _removeData(e, t) {
      Q.remove(e, t);
    }
  }), k.fn.extend({
    data: function data(n, e) {
      var t,
          r,
          i,
          o = this[0],
          a = o && o.attributes;

      if (void 0 === n) {
        if (this.length && (i = J.get(o), 1 === o.nodeType && !Q.get(o, "hasDataAttrs"))) {
          t = a.length;

          while (t--) {
            a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = V(r.slice(5)), ee(o, r, i[r]));
          }

          Q.set(o, "hasDataAttrs", !0);
        }

        return i;
      }

      return "object" == _typeof(n) ? this.each(function () {
        J.set(this, n);
      }) : _(this, function (e) {
        var t;
        if (o && void 0 === e) return void 0 !== (t = J.get(o, n)) ? t : void 0 !== (t = ee(o, n)) ? t : void 0;
        this.each(function () {
          J.set(this, n, e);
        });
      }, null, e, 1 < arguments.length, null, !0);
    },
    removeData: function removeData(e) {
      return this.each(function () {
        J.remove(this, e);
      });
    }
  }), k.extend({
    queue: function queue(e, t, n) {
      var r;
      if (e) return t = (t || "fx") + "queue", r = Q.get(e, t), n && (!r || Array.isArray(n) ? r = Q.access(e, t, k.makeArray(n)) : r.push(n)), r || [];
    },
    dequeue: function dequeue(e, t) {
      t = t || "fx";

      var n = k.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = k._queueHooks(e, t);

      "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () {
        k.dequeue(e, t);
      }, o)), !r && o && o.empty.fire();
    },
    _queueHooks: function _queueHooks(e, t) {
      var n = t + "queueHooks";
      return Q.get(e, n) || Q.access(e, n, {
        empty: k.Callbacks("once memory").add(function () {
          Q.remove(e, [t + "queue", n]);
        })
      });
    }
  }), k.fn.extend({
    queue: function queue(t, n) {
      var e = 2;
      return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? k.queue(this[0], t) : void 0 === n ? this : this.each(function () {
        var e = k.queue(this, t, n);
        k._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && k.dequeue(this, t);
      });
    },
    dequeue: function dequeue(e) {
      return this.each(function () {
        k.dequeue(this, e);
      });
    },
    clearQueue: function clearQueue(e) {
      return this.queue(e || "fx", []);
    },
    promise: function promise(e, t) {
      var n,
          r = 1,
          i = k.Deferred(),
          o = this,
          a = this.length,
          s = function s() {
        --r || i.resolveWith(o, [o]);
      };

      "string" != typeof e && (t = e, e = void 0), e = e || "fx";

      while (a--) {
        (n = Q.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
      }

      return s(), i.promise(t);
    }
  });

  var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      ne = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$", "i"),
      re = ["Top", "Right", "Bottom", "Left"],
      ie = E.documentElement,
      oe = function oe(e) {
    return k.contains(e.ownerDocument, e);
  },
      ae = {
    composed: !0
  };

  ie.getRootNode && (oe = function oe(e) {
    return k.contains(e.ownerDocument, e) || e.getRootNode(ae) === e.ownerDocument;
  });

  var se = function se(e, t) {
    return "none" === (e = t || e).style.display || "" === e.style.display && oe(e) && "none" === k.css(e, "display");
  },
      ue = function ue(e, t, n, r) {
    var i,
        o,
        a = {};

    for (o in t) {
      a[o] = e.style[o], e.style[o] = t[o];
    }

    for (o in i = n.apply(e, r || []), t) {
      e.style[o] = a[o];
    }

    return i;
  };

  function le(e, t, n, r) {
    var i,
        o,
        a = 20,
        s = r ? function () {
      return r.cur();
    } : function () {
      return k.css(e, t, "");
    },
        u = s(),
        l = n && n[3] || (k.cssNumber[t] ? "" : "px"),
        c = e.nodeType && (k.cssNumber[t] || "px" !== l && +u) && ne.exec(k.css(e, t));

    if (c && c[3] !== l) {
      u /= 2, l = l || c[3], c = +u || 1;

      while (a--) {
        k.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
      }

      c *= 2, k.style(e, t, c + l), n = n || [];
    }

    return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i;
  }

  var ce = {};

  function fe(e, t) {
    for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++) {
      (r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Q.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && se(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ce[s]) || (o = a.body.appendChild(a.createElement(s)), u = k.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ce[s] = u)))) : "none" !== n && (l[c] = "none", Q.set(r, "display", n)));
    }

    for (c = 0; c < f; c++) {
      null != l[c] && (e[c].style.display = l[c]);
    }

    return e;
  }

  k.fn.extend({
    show: function show() {
      return fe(this, !0);
    },
    hide: function hide() {
      return fe(this);
    },
    toggle: function toggle(e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        se(this) ? k(this).show() : k(this).hide();
      });
    }
  });
  var pe = /^(?:checkbox|radio)$/i,
      de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
      he = /^$|^module$|\/(?:java|ecma)script/i,
      ge = {
    option: [1, "<select multiple='multiple'>", "</select>"],
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  };

  function ve(e, t) {
    var n;
    return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? k.merge([e], n) : n;
  }

  function ye(e, t) {
    for (var n = 0, r = e.length; n < r; n++) {
      Q.set(e[n], "globalEval", !t || Q.get(t[n], "globalEval"));
    }
  }

  ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td;
  var me,
      xe,
      be = /<|&#?\w+;/;

  function we(e, t, n, r, i) {
    for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) {
      if ((o = e[d]) || 0 === o) if ("object" === w(o)) k.merge(p, o.nodeType ? [o] : o);else if (be.test(o)) {
        a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + k.htmlPrefilter(o) + u[2], c = u[0];

        while (c--) {
          a = a.lastChild;
        }

        k.merge(p, a.childNodes), (a = f.firstChild).textContent = "";
      } else p.push(t.createTextNode(o));
    }

    f.textContent = "", d = 0;

    while (o = p[d++]) {
      if (r && -1 < k.inArray(o, r)) i && i.push(o);else if (l = oe(o), a = ve(f.appendChild(o), "script"), l && ye(a), n) {
        c = 0;

        while (o = a[c++]) {
          he.test(o.type || "") && n.push(o);
        }
      }
    }

    return f;
  }

  me = E.createDocumentFragment().appendChild(E.createElement("div")), (xe = E.createElement("input")).setAttribute("type", "radio"), xe.setAttribute("checked", "checked"), xe.setAttribute("name", "t"), me.appendChild(xe), y.checkClone = me.cloneNode(!0).cloneNode(!0).lastChild.checked, me.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!me.cloneNode(!0).lastChild.defaultValue;
  var Te = /^key/,
      Ce = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      Ee = /^([^.]*)(?:\.(.+)|)/;

  function ke() {
    return !0;
  }

  function Se() {
    return !1;
  }

  function Ne(e, t) {
    return e === function () {
      try {
        return E.activeElement;
      } catch (e) {}
    }() == ("focus" === t);
  }

  function Ae(e, t, n, r, i, o) {
    var a, s;

    if ("object" == _typeof(t)) {
      for (s in "string" != typeof n && (r = r || n, n = void 0), t) {
        Ae(e, s, n, r, t[s], o);
      }

      return e;
    }

    if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Se;else if (!i) return e;
    return 1 === o && (a = i, (i = function i(e) {
      return k().off(e), a.apply(this, arguments);
    }).guid = a.guid || (a.guid = k.guid++)), e.each(function () {
      k.event.add(this, t, i, r, n);
    });
  }

  function De(e, i, o) {
    o ? (Q.set(e, i, !1), k.event.add(e, i, {
      namespace: !1,
      handler: function handler(e) {
        var t,
            n,
            r = Q.get(this, i);

        if (1 & e.isTrigger && this[i]) {
          if (r.length) (k.event.special[i] || {}).delegateType && e.stopPropagation();else if (r = s.call(arguments), Q.set(this, i, r), t = o(this, i), this[i](), r !== (n = Q.get(this, i)) || t ? Q.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n.value;
        } else r.length && (Q.set(this, i, {
          value: k.event.trigger(k.extend(r[0], k.Event.prototype), r.slice(1), this)
        }), e.stopImmediatePropagation());
      }
    })) : void 0 === Q.get(e, i) && k.event.add(e, i, ke);
  }

  k.event = {
    global: {},
    add: function add(t, e, n, r, i) {
      var o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h,
          g,
          v = Q.get(t);

      if (v) {
        n.handler && (n = (o = n).handler, i = o.selector), i && k.find.matchesSelector(ie, i), n.guid || (n.guid = k.guid++), (u = v.events) || (u = v.events = {}), (a = v.handle) || (a = v.handle = function (e) {
          return "undefined" != typeof k && k.event.triggered !== e.type ? k.event.dispatch.apply(t, arguments) : void 0;
        }), l = (e = (e || "").match(R) || [""]).length;

        while (l--) {
          d = g = (s = Ee.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = k.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = k.event.special[d] || {}, c = k.extend({
            type: d,
            origType: g,
            data: r,
            handler: n,
            guid: n.guid,
            selector: i,
            needsContext: i && k.expr.match.needsContext.test(i),
            namespace: h.join(".")
          }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), k.event.global[d] = !0);
        }
      }
    },
    remove: function remove(e, t, n, r, i) {
      var o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h,
          g,
          v = Q.hasData(e) && Q.get(e);

      if (v && (u = v.events)) {
        l = (t = (t || "").match(R) || [""]).length;

        while (l--) {
          if (d = g = (s = Ee.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
            f = k.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;

            while (o--) {
              c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
            }

            a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || k.removeEvent(e, d, v.handle), delete u[d]);
          } else for (d in u) {
            k.event.remove(e, d + t[l], n, r, !0);
          }
        }

        k.isEmptyObject(u) && Q.remove(e, "handle events");
      }
    },
    dispatch: function dispatch(e) {
      var t,
          n,
          r,
          i,
          o,
          a,
          s = k.event.fix(e),
          u = new Array(arguments.length),
          l = (Q.get(this, "events") || {})[s.type] || [],
          c = k.event.special[s.type] || {};

      for (u[0] = s, t = 1; t < arguments.length; t++) {
        u[t] = arguments[t];
      }

      if (s.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
        a = k.event.handlers.call(this, s, l), t = 0;

        while ((i = a[t++]) && !s.isPropagationStopped()) {
          s.currentTarget = i.elem, n = 0;

          while ((o = i.handlers[n++]) && !s.isImmediatePropagationStopped()) {
            s.rnamespace && !1 !== o.namespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, void 0 !== (r = ((k.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation()));
          }
        }

        return c.postDispatch && c.postDispatch.call(this, s), s.result;
      }
    },
    handlers: function handlers(e, t) {
      var n,
          r,
          i,
          o,
          a,
          s = [],
          u = t.delegateCount,
          l = e.target;
      if (u && l.nodeType && !("click" === e.type && 1 <= e.button)) for (; l !== this; l = l.parentNode || this) {
        if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
          for (o = [], a = {}, n = 0; n < u; n++) {
            void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < k(i, this).index(l) : k.find(i, this, null, [l]).length), a[i] && o.push(r);
          }

          o.length && s.push({
            elem: l,
            handlers: o
          });
        }
      }
      return l = this, u < t.length && s.push({
        elem: l,
        handlers: t.slice(u)
      }), s;
    },
    addProp: function addProp(t, e) {
      Object.defineProperty(k.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: m(e) ? function () {
          if (this.originalEvent) return e(this.originalEvent);
        } : function () {
          if (this.originalEvent) return this.originalEvent[t];
        },
        set: function set(e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
          });
        }
      });
    },
    fix: function fix(e) {
      return e[k.expando] ? e : new k.Event(e);
    },
    special: {
      load: {
        noBubble: !0
      },
      click: {
        setup: function setup(e) {
          var t = this || e;
          return pe.test(t.type) && t.click && A(t, "input") && De(t, "click", ke), !1;
        },
        trigger: function trigger(e) {
          var t = this || e;
          return pe.test(t.type) && t.click && A(t, "input") && De(t, "click"), !0;
        },
        _default: function _default(e) {
          var t = e.target;
          return pe.test(t.type) && t.click && A(t, "input") && Q.get(t, "click") || A(t, "a");
        }
      },
      beforeunload: {
        postDispatch: function postDispatch(e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
        }
      }
    }
  }, k.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n);
  }, k.Event = function (e, t) {
    if (!(this instanceof k.Event)) return new k.Event(e, t);
    e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? ke : Se, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && k.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[k.expando] = !0;
  }, k.Event.prototype = {
    constructor: k.Event,
    isDefaultPrevented: Se,
    isPropagationStopped: Se,
    isImmediatePropagationStopped: Se,
    isSimulated: !1,
    preventDefault: function preventDefault() {
      var e = this.originalEvent;
      this.isDefaultPrevented = ke, e && !this.isSimulated && e.preventDefault();
    },
    stopPropagation: function stopPropagation() {
      var e = this.originalEvent;
      this.isPropagationStopped = ke, e && !this.isSimulated && e.stopPropagation();
    },
    stopImmediatePropagation: function stopImmediatePropagation() {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = ke, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
    }
  }, k.each({
    altKey: !0,
    bubbles: !0,
    cancelable: !0,
    changedTouches: !0,
    ctrlKey: !0,
    detail: !0,
    eventPhase: !0,
    metaKey: !0,
    pageX: !0,
    pageY: !0,
    shiftKey: !0,
    view: !0,
    "char": !0,
    code: !0,
    charCode: !0,
    key: !0,
    keyCode: !0,
    button: !0,
    buttons: !0,
    clientX: !0,
    clientY: !0,
    offsetX: !0,
    offsetY: !0,
    pointerId: !0,
    pointerType: !0,
    screenX: !0,
    screenY: !0,
    targetTouches: !0,
    toElement: !0,
    touches: !0,
    which: function which(e) {
      var t = e.button;
      return null == e.which && Te.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ce.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
    }
  }, k.event.addProp), k.each({
    focus: "focusin",
    blur: "focusout"
  }, function (e, t) {
    k.event.special[e] = {
      setup: function setup() {
        return De(this, e, Ne), !1;
      },
      trigger: function trigger() {
        return De(this, e), !0;
      },
      delegateType: t
    };
  }), k.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (e, i) {
    k.event.special[e] = {
      delegateType: i,
      bindType: i,
      handle: function handle(e) {
        var t,
            n = e.relatedTarget,
            r = e.handleObj;
        return n && (n === this || k.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t;
      }
    };
  }), k.fn.extend({
    on: function on(e, t, n, r) {
      return Ae(this, e, t, n, r);
    },
    one: function one(e, t, n, r) {
      return Ae(this, e, t, n, r, 1);
    },
    off: function off(e, t, n) {
      var r, i;
      if (e && e.preventDefault && e.handleObj) return r = e.handleObj, k(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;

      if ("object" == _typeof(e)) {
        for (i in e) {
          this.off(i, t, e[i]);
        }

        return this;
      }

      return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Se), this.each(function () {
        k.event.remove(this, e, n, t);
      });
    }
  });
  var je = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      qe = /<script|<style|<link/i,
      Le = /checked\s*(?:[^=]|=\s*.checked.)/i,
      He = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

  function Oe(e, t) {
    return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && k(e).children("tbody")[0] || e;
  }

  function Pe(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
  }

  function Re(e) {
    return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
  }

  function Me(e, t) {
    var n, r, i, o, a, s, u, l;

    if (1 === t.nodeType) {
      if (Q.hasData(e) && (o = Q.access(e), a = Q.set(t, o), l = o.events)) for (i in delete a.handle, a.events = {}, l) {
        for (n = 0, r = l[i].length; n < r; n++) {
          k.event.add(t, i, l[i][n]);
        }
      }
      J.hasData(e) && (s = J.access(e), u = k.extend({}, s), J.set(t, u));
    }
  }

  function Ie(n, r, i, o) {
    r = g.apply([], r);
    var e,
        t,
        a,
        s,
        u,
        l,
        c = 0,
        f = n.length,
        p = f - 1,
        d = r[0],
        h = m(d);
    if (h || 1 < f && "string" == typeof d && !y.checkClone && Le.test(d)) return n.each(function (e) {
      var t = n.eq(e);
      h && (r[0] = d.call(this, e, t.html())), Ie(t, r, i, o);
    });

    if (f && (t = (e = we(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
      for (s = (a = k.map(ve(e, "script"), Pe)).length; c < f; c++) {
        u = e, c !== p && (u = k.clone(u, !0, !0), s && k.merge(a, ve(u, "script"))), i.call(n[c], u, c);
      }

      if (s) for (l = a[a.length - 1].ownerDocument, k.map(a, Re), c = 0; c < s; c++) {
        u = a[c], he.test(u.type || "") && !Q.access(u, "globalEval") && k.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? k._evalUrl && !u.noModule && k._evalUrl(u.src, {
          nonce: u.nonce || u.getAttribute("nonce")
        }) : b(u.textContent.replace(He, ""), u, l));
      }
    }

    return n;
  }

  function We(e, t, n) {
    for (var r, i = t ? k.filter(t, e) : e, o = 0; null != (r = i[o]); o++) {
      n || 1 !== r.nodeType || k.cleanData(ve(r)), r.parentNode && (n && oe(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
    }

    return e;
  }

  k.extend({
    htmlPrefilter: function htmlPrefilter(e) {
      return e.replace(je, "<$1></$2>");
    },
    clone: function clone(e, t, n) {
      var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c = e.cloneNode(!0),
          f = oe(e);
      if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || k.isXMLDoc(e))) for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++) {
        s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
      }
      if (t) if (n) for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++) {
        Me(o[r], a[r]);
      } else Me(e, c);
      return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c;
    },
    cleanData: function cleanData(e) {
      for (var t, n, r, i = k.event.special, o = 0; void 0 !== (n = e[o]); o++) {
        if (G(n)) {
          if (t = n[Q.expando]) {
            if (t.events) for (r in t.events) {
              i[r] ? k.event.remove(n, r) : k.removeEvent(n, r, t.handle);
            }
            n[Q.expando] = void 0;
          }

          n[J.expando] && (n[J.expando] = void 0);
        }
      }
    }
  }), k.fn.extend({
    detach: function detach(e) {
      return We(this, e, !0);
    },
    remove: function remove(e) {
      return We(this, e);
    },
    text: function text(e) {
      return _(this, function (e) {
        return void 0 === e ? k.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
        });
      }, null, e, arguments.length);
    },
    append: function append() {
      return Ie(this, arguments, function (e) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Oe(this, e).appendChild(e);
      });
    },
    prepend: function prepend() {
      return Ie(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = Oe(this, e);
          t.insertBefore(e, t.firstChild);
        }
      });
    },
    before: function before() {
      return Ie(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    },
    after: function after() {
      return Ie(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    },
    empty: function empty() {
      for (var e, t = 0; null != (e = this[t]); t++) {
        1 === e.nodeType && (k.cleanData(ve(e, !1)), e.textContent = "");
      }

      return this;
    },
    clone: function clone(e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function () {
        return k.clone(this, e, t);
      });
    },
    html: function html(e) {
      return _(this, function (e) {
        var t = this[0] || {},
            n = 0,
            r = this.length;
        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;

        if ("string" == typeof e && !qe.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = k.htmlPrefilter(e);

          try {
            for (; n < r; n++) {
              1 === (t = this[n] || {}).nodeType && (k.cleanData(ve(t, !1)), t.innerHTML = e);
            }

            t = 0;
          } catch (e) {}
        }

        t && this.empty().append(e);
      }, null, e, arguments.length);
    },
    replaceWith: function replaceWith() {
      var n = [];
      return Ie(this, arguments, function (e) {
        var t = this.parentNode;
        k.inArray(this, n) < 0 && (k.cleanData(ve(this)), t && t.replaceChild(e, this));
      }, n);
    }
  }), k.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (e, a) {
    k.fn[e] = function (e) {
      for (var t, n = [], r = k(e), i = r.length - 1, o = 0; o <= i; o++) {
        t = o === i ? this : this.clone(!0), k(r[o])[a](t), u.apply(n, t.get());
      }

      return this.pushStack(n);
    };
  });

  var $e = new RegExp("^(" + te + ")(?!px)[a-z%]+$", "i"),
      Fe = function Fe(e) {
    var t = e.ownerDocument.defaultView;
    return t && t.opener || (t = C), t.getComputedStyle(e);
  },
      Be = new RegExp(re.join("|"), "i");

  function _e(e, t, n) {
    var r,
        i,
        o,
        a,
        s = e.style;
    return (n = n || Fe(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || oe(e) || (a = k.style(e, t)), !y.pixelBoxStyles() && $e.test(a) && Be.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a;
  }

  function ze(e, t) {
    return {
      get: function get() {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      }
    };
  }

  !function () {
    function e() {
      if (u) {
        s.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ie.appendChild(s).appendChild(u);
        var e = C.getComputedStyle(u);
        n = "1%" !== e.top, a = 12 === t(e.marginLeft), u.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), u.style.position = "absolute", i = 12 === t(u.offsetWidth / 3), ie.removeChild(s), u = null;
      }
    }

    function t(e) {
      return Math.round(parseFloat(e));
    }

    var n,
        r,
        i,
        o,
        a,
        s = E.createElement("div"),
        u = E.createElement("div");
    u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === u.style.backgroundClip, k.extend(y, {
      boxSizingReliable: function boxSizingReliable() {
        return e(), r;
      },
      pixelBoxStyles: function pixelBoxStyles() {
        return e(), o;
      },
      pixelPosition: function pixelPosition() {
        return e(), n;
      },
      reliableMarginLeft: function reliableMarginLeft() {
        return e(), a;
      },
      scrollboxSize: function scrollboxSize() {
        return e(), i;
      }
    }));
  }();
  var Ue = ["Webkit", "Moz", "ms"],
      Xe = E.createElement("div").style,
      Ve = {};

  function Ge(e) {
    var t = k.cssProps[e] || Ve[e];
    return t || (e in Xe ? e : Ve[e] = function (e) {
      var t = e[0].toUpperCase() + e.slice(1),
          n = Ue.length;

      while (n--) {
        if ((e = Ue[n] + t) in Xe) return e;
      }
    }(e) || e);
  }

  var Ye = /^(none|table(?!-c[ea]).+)/,
      Qe = /^--/,
      Je = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
  },
      Ke = {
    letterSpacing: "0",
    fontWeight: "400"
  };

  function Ze(e, t, n) {
    var r = ne.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }

  function et(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
        s = 0,
        u = 0;
    if (n === (r ? "border" : "content")) return 0;

    for (; a < 4; a += 2) {
      "margin" === n && (u += k.css(e, n + re[a], !0, i)), r ? ("content" === n && (u -= k.css(e, "padding" + re[a], !0, i)), "margin" !== n && (u -= k.css(e, "border" + re[a] + "Width", !0, i))) : (u += k.css(e, "padding" + re[a], !0, i), "padding" !== n ? u += k.css(e, "border" + re[a] + "Width", !0, i) : s += k.css(e, "border" + re[a] + "Width", !0, i));
    }

    return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u;
  }

  function tt(e, t, n) {
    var r = Fe(e),
        i = (!y.boxSizingReliable() || n) && "border-box" === k.css(e, "boxSizing", !1, r),
        o = i,
        a = _e(e, t, r),
        s = "offset" + t[0].toUpperCase() + t.slice(1);

    if ($e.test(a)) {
      if (!n) return a;
      a = "auto";
    }

    return (!y.boxSizingReliable() && i || "auto" === a || !parseFloat(a) && "inline" === k.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === k.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + et(e, t, n || (i ? "border" : "content"), o, r, a) + "px";
  }

  function nt(e, t, n, r, i) {
    return new nt.prototype.init(e, t, n, r, i);
  }

  k.extend({
    cssHooks: {
      opacity: {
        get: function get(e, t) {
          if (t) {
            var n = _e(e, "opacity");

            return "" === n ? "1" : n;
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {},
    style: function style(e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
            o,
            a,
            s = V(t),
            u = Qe.test(t),
            l = e.style;
        if (u || (t = Ge(s)), a = k.cssHooks[t] || k.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        "string" === (o = _typeof(n)) && (i = ne.exec(n)) && i[1] && (n = le(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (k.cssNumber[s] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n));
      }
    },
    css: function css(e, t, n, r) {
      var i,
          o,
          a,
          s = V(t);
      return Qe.test(t) || (t = Ge(s)), (a = k.cssHooks[t] || k.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = _e(e, t, r)), "normal" === i && t in Ke && (i = Ke[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i;
    }
  }), k.each(["height", "width"], function (e, u) {
    k.cssHooks[u] = {
      get: function get(e, t, n) {
        if (t) return !Ye.test(k.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? tt(e, u, n) : ue(e, Je, function () {
          return tt(e, u, n);
        });
      },
      set: function set(e, t, n) {
        var r,
            i = Fe(e),
            o = !y.scrollboxSize() && "absolute" === i.position,
            a = (o || n) && "border-box" === k.css(e, "boxSizing", !1, i),
            s = n ? et(e, u, n, a, i) : 0;
        return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - et(e, u, "border", !1, i) - .5)), s && (r = ne.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = k.css(e, u)), Ze(0, t, s);
      }
    };
  }), k.cssHooks.marginLeft = ze(y.reliableMarginLeft, function (e, t) {
    if (t) return (parseFloat(_e(e, "marginLeft")) || e.getBoundingClientRect().left - ue(e, {
      marginLeft: 0
    }, function () {
      return e.getBoundingClientRect().left;
    })) + "px";
  }), k.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (i, o) {
    k.cssHooks[i + o] = {
      expand: function expand(e) {
        for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) {
          n[i + re[t] + o] = r[t] || r[t - 2] || r[0];
        }

        return n;
      }
    }, "margin" !== i && (k.cssHooks[i + o].set = Ze);
  }), k.fn.extend({
    css: function css(e, t) {
      return _(this, function (e, t, n) {
        var r,
            i,
            o = {},
            a = 0;

        if (Array.isArray(t)) {
          for (r = Fe(e), i = t.length; a < i; a++) {
            o[t[a]] = k.css(e, t[a], !1, r);
          }

          return o;
        }

        return void 0 !== n ? k.style(e, t, n) : k.css(e, t);
      }, e, t, 1 < arguments.length);
    }
  }), ((k.Tween = nt).prototype = {
    constructor: nt,
    init: function init(e, t, n, r, i, o) {
      this.elem = e, this.prop = n, this.easing = i || k.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (k.cssNumber[n] ? "" : "px");
    },
    cur: function cur() {
      var e = nt.propHooks[this.prop];
      return e && e.get ? e.get(this) : nt.propHooks._default.get(this);
    },
    run: function run(e) {
      var t,
          n = nt.propHooks[this.prop];
      return this.options.duration ? this.pos = t = k.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : nt.propHooks._default.set(this), this;
    }
  }).init.prototype = nt.prototype, (nt.propHooks = {
    _default: {
      get: function get(e) {
        var t;
        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = k.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
      },
      set: function set(e) {
        k.fx.step[e.prop] ? k.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !k.cssHooks[e.prop] && null == e.elem.style[Ge(e.prop)] ? e.elem[e.prop] = e.now : k.style(e.elem, e.prop, e.now + e.unit);
      }
    }
  }).scrollTop = nt.propHooks.scrollLeft = {
    set: function set(e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
    }
  }, k.easing = {
    linear: function linear(e) {
      return e;
    },
    swing: function swing(e) {
      return .5 - Math.cos(e * Math.PI) / 2;
    },
    _default: "swing"
  }, k.fx = nt.prototype.init, k.fx.step = {};
  var rt,
      it,
      ot,
      at,
      st = /^(?:toggle|show|hide)$/,
      ut = /queueHooks$/;

  function lt() {
    it && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(lt) : C.setTimeout(lt, k.fx.interval), k.fx.tick());
  }

  function ct() {
    return C.setTimeout(function () {
      rt = void 0;
    }), rt = Date.now();
  }

  function ft(e, t) {
    var n,
        r = 0,
        i = {
      height: e
    };

    for (t = t ? 1 : 0; r < 4; r += 2 - t) {
      i["margin" + (n = re[r])] = i["padding" + n] = e;
    }

    return t && (i.opacity = i.width = e), i;
  }

  function pt(e, t, n) {
    for (var r, i = (dt.tweeners[t] || []).concat(dt.tweeners["*"]), o = 0, a = i.length; o < a; o++) {
      if (r = i[o].call(n, t, e)) return r;
    }
  }

  function dt(o, e, t) {
    var n,
        a,
        r = 0,
        i = dt.prefilters.length,
        s = k.Deferred().always(function () {
      delete u.elem;
    }),
        u = function u() {
      if (a) return !1;

      for (var e = rt || ct(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) {
        l.tweens[r].run(n);
      }

      return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1);
    },
        l = s.promise({
      elem: o,
      props: k.extend({}, e),
      opts: k.extend(!0, {
        specialEasing: {},
        easing: k.easing._default
      }, t),
      originalProperties: e,
      originalOptions: t,
      startTime: rt || ct(),
      duration: t.duration,
      tweens: [],
      createTween: function createTween(e, t) {
        var n = k.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
        return l.tweens.push(n), n;
      },
      stop: function stop(e) {
        var t = 0,
            n = e ? l.tweens.length : 0;
        if (a) return this;

        for (a = !0; t < n; t++) {
          l.tweens[t].run(1);
        }

        return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this;
      }
    }),
        c = l.props;

    for (!function (e, t) {
      var n, r, i, o, a;

      for (n in e) {
        if (i = t[r = V(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = k.cssHooks[r]) && ("expand" in a)) for (n in o = a.expand(o), delete e[r], o) {
          (n in e) || (e[n] = o[n], t[n] = i);
        } else t[r] = i;
      }
    }(c, l.opts.specialEasing); r < i; r++) {
      if (n = dt.prefilters[r].call(l, o, c, l.opts)) return m(n.stop) && (k._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
    }

    return k.map(c, pt, l), m(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), k.fx.timer(k.extend(u, {
      elem: o,
      anim: l,
      queue: l.opts.queue
    })), l;
  }

  k.Animation = k.extend(dt, {
    tweeners: {
      "*": [function (e, t) {
        var n = this.createTween(e, t);
        return le(n.elem, e, ne.exec(t), n), n;
      }]
    },
    tweener: function tweener(e, t) {
      m(e) ? (t = e, e = ["*"]) : e = e.match(R);

      for (var n, r = 0, i = e.length; r < i; r++) {
        n = e[r], dt.tweeners[n] = dt.tweeners[n] || [], dt.tweeners[n].unshift(t);
      }
    },
    prefilters: [function (e, t, n) {
      var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = "width" in t || "height" in t,
          p = this,
          d = {},
          h = e.style,
          g = e.nodeType && se(e),
          v = Q.get(e, "fxshow");

      for (r in n.queue || (null == (a = k._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
        a.unqueued || s();
      }), a.unqueued++, p.always(function () {
        p.always(function () {
          a.unqueued--, k.queue(e, "fx").length || a.empty.fire();
        });
      })), t) {
        if (i = t[r], st.test(i)) {
          if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
            if ("show" !== i || !v || void 0 === v[r]) continue;
            g = !0;
          }

          d[r] = v && v[r] || k.style(e, r);
        }
      }

      if ((u = !k.isEmptyObject(t)) || !k.isEmptyObject(d)) for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = Q.get(e, "display")), "none" === (c = k.css(e, "display")) && (l ? c = l : (fe([e], !0), l = e.style.display || l, c = k.css(e, "display"), fe([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === k.css(e, "float") && (u || (p.done(function () {
        h.display = l;
      }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
      })), u = !1, d) {
        u || (v ? "hidden" in v && (g = v.hidden) : v = Q.access(e, "fxshow", {
          display: l
        }), o && (v.hidden = !g), g && fe([e], !0), p.done(function () {
          for (r in g || fe([e]), Q.remove(e, "fxshow"), d) {
            k.style(e, r, d[r]);
          }
        })), u = pt(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0));
      }
    }],
    prefilter: function prefilter(e, t) {
      t ? dt.prefilters.unshift(e) : dt.prefilters.push(e);
    }
  }), k.speed = function (e, t, n) {
    var r = e && "object" == _typeof(e) ? k.extend({}, e) : {
      complete: n || !n && t || m(e) && e,
      duration: e,
      easing: n && t || t && !m(t) && t
    };
    return k.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in k.fx.speeds ? r.duration = k.fx.speeds[r.duration] : r.duration = k.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
      m(r.old) && r.old.call(this), r.queue && k.dequeue(this, r.queue);
    }, r;
  }, k.fn.extend({
    fadeTo: function fadeTo(e, t, n, r) {
      return this.filter(se).css("opacity", 0).show().end().animate({
        opacity: t
      }, e, n, r);
    },
    animate: function animate(t, e, n, r) {
      var i = k.isEmptyObject(t),
          o = k.speed(e, n, r),
          a = function a() {
        var e = dt(this, k.extend({}, t), o);
        (i || Q.get(this, "finish")) && e.stop(!0);
      };

      return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
    },
    stop: function stop(i, e, o) {
      var a = function a(e) {
        var t = e.stop;
        delete e.stop, t(o);
      };

      return "string" != typeof i && (o = e, e = i, i = void 0), e && !1 !== i && this.queue(i || "fx", []), this.each(function () {
        var e = !0,
            t = null != i && i + "queueHooks",
            n = k.timers,
            r = Q.get(this);
        if (t) r[t] && r[t].stop && a(r[t]);else for (t in r) {
          r[t] && r[t].stop && ut.test(t) && a(r[t]);
        }

        for (t = n.length; t--;) {
          n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
        }

        !e && o || k.dequeue(this, i);
      });
    },
    finish: function finish(a) {
      return !1 !== a && (a = a || "fx"), this.each(function () {
        var e,
            t = Q.get(this),
            n = t[a + "queue"],
            r = t[a + "queueHooks"],
            i = k.timers,
            o = n ? n.length : 0;

        for (t.finish = !0, k.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) {
          i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
        }

        for (e = 0; e < o; e++) {
          n[e] && n[e].finish && n[e].finish.call(this);
        }

        delete t.finish;
      });
    }
  }), k.each(["toggle", "show", "hide"], function (e, r) {
    var i = k.fn[r];

    k.fn[r] = function (e, t, n) {
      return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(ft(r, !0), e, t, n);
    };
  }), k.each({
    slideDown: ft("show"),
    slideUp: ft("hide"),
    slideToggle: ft("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function (e, r) {
    k.fn[e] = function (e, t, n) {
      return this.animate(r, e, t, n);
    };
  }), k.timers = [], k.fx.tick = function () {
    var e,
        t = 0,
        n = k.timers;

    for (rt = Date.now(); t < n.length; t++) {
      (e = n[t])() || n[t] !== e || n.splice(t--, 1);
    }

    n.length || k.fx.stop(), rt = void 0;
  }, k.fx.timer = function (e) {
    k.timers.push(e), k.fx.start();
  }, k.fx.interval = 13, k.fx.start = function () {
    it || (it = !0, lt());
  }, k.fx.stop = function () {
    it = null;
  }, k.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, k.fn.delay = function (r, e) {
    return r = k.fx && k.fx.speeds[r] || r, e = e || "fx", this.queue(e, function (e, t) {
      var n = C.setTimeout(e, r);

      t.stop = function () {
        C.clearTimeout(n);
      };
    });
  }, ot = E.createElement("input"), at = E.createElement("select").appendChild(E.createElement("option")), ot.type = "checkbox", y.checkOn = "" !== ot.value, y.optSelected = at.selected, (ot = E.createElement("input")).value = "t", ot.type = "radio", y.radioValue = "t" === ot.value;
  var ht,
      gt = k.expr.attrHandle;
  k.fn.extend({
    attr: function attr(e, t) {
      return _(this, k.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function removeAttr(e) {
      return this.each(function () {
        k.removeAttr(this, e);
      });
    }
  }), k.extend({
    attr: function attr(e, t, n) {
      var r,
          i,
          o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? k.prop(e, t, n) : (1 === o && k.isXMLDoc(e) || (i = k.attrHooks[t.toLowerCase()] || (k.expr.match.bool.test(t) ? ht : void 0)), void 0 !== n ? null === n ? void k.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = k.find.attr(e, t)) ? void 0 : r);
    },
    attrHooks: {
      type: {
        set: function set(e, t) {
          if (!y.radioValue && "radio" === t && A(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t;
          }
        }
      }
    },
    removeAttr: function removeAttr(e, t) {
      var n,
          r = 0,
          i = t && t.match(R);
      if (i && 1 === e.nodeType) while (n = i[r++]) {
        e.removeAttribute(n);
      }
    }
  }), ht = {
    set: function set(e, t, n) {
      return !1 === t ? k.removeAttr(e, n) : e.setAttribute(n, n), n;
    }
  }, k.each(k.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var a = gt[t] || k.find.attr;

    gt[t] = function (e, t, n) {
      var r,
          i,
          o = t.toLowerCase();
      return n || (i = gt[o], gt[o] = r, r = null != a(e, t, n) ? o : null, gt[o] = i), r;
    };
  });
  var vt = /^(?:input|select|textarea|button)$/i,
      yt = /^(?:a|area)$/i;

  function mt(e) {
    return (e.match(R) || []).join(" ");
  }

  function xt(e) {
    return e.getAttribute && e.getAttribute("class") || "";
  }

  function bt(e) {
    return Array.isArray(e) ? e : "string" == typeof e && e.match(R) || [];
  }

  k.fn.extend({
    prop: function prop(e, t) {
      return _(this, k.prop, e, t, 1 < arguments.length);
    },
    removeProp: function removeProp(e) {
      return this.each(function () {
        delete this[k.propFix[e] || e];
      });
    }
  }), k.extend({
    prop: function prop(e, t, n) {
      var r,
          i,
          o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return 1 === o && k.isXMLDoc(e) || (t = k.propFix[t] || t, i = k.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
    },
    propHooks: {
      tabIndex: {
        get: function get(e) {
          var t = k.find.attr(e, "tabindex");
          return t ? parseInt(t, 10) : vt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1;
        }
      }
    },
    propFix: {
      "for": "htmlFor",
      "class": "className"
    }
  }), y.optSelected || (k.propHooks.selected = {
    get: function get(e) {
      var t = e.parentNode;
      return t && t.parentNode && t.parentNode.selectedIndex, null;
    },
    set: function set(e) {
      var t = e.parentNode;
      t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
    }
  }), k.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    k.propFix[this.toLowerCase()] = this;
  }), k.fn.extend({
    addClass: function addClass(t) {
      var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
      if (m(t)) return this.each(function (e) {
        k(this).addClass(t.call(this, e, xt(this)));
      });
      if ((e = bt(t)).length) while (n = this[u++]) {
        if (i = xt(n), r = 1 === n.nodeType && " " + mt(i) + " ") {
          a = 0;

          while (o = e[a++]) {
            r.indexOf(" " + o + " ") < 0 && (r += o + " ");
          }

          i !== (s = mt(r)) && n.setAttribute("class", s);
        }
      }
      return this;
    },
    removeClass: function removeClass(t) {
      var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
      if (m(t)) return this.each(function (e) {
        k(this).removeClass(t.call(this, e, xt(this)));
      });
      if (!arguments.length) return this.attr("class", "");
      if ((e = bt(t)).length) while (n = this[u++]) {
        if (i = xt(n), r = 1 === n.nodeType && " " + mt(i) + " ") {
          a = 0;

          while (o = e[a++]) {
            while (-1 < r.indexOf(" " + o + " ")) {
              r = r.replace(" " + o + " ", " ");
            }
          }

          i !== (s = mt(r)) && n.setAttribute("class", s);
        }
      }
      return this;
    },
    toggleClass: function toggleClass(i, t) {
      var o = _typeof(i),
          a = "string" === o || Array.isArray(i);

      return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function (e) {
        k(this).toggleClass(i.call(this, e, xt(this), t), t);
      }) : this.each(function () {
        var e, t, n, r;

        if (a) {
          t = 0, n = k(this), r = bt(i);

          while (e = r[t++]) {
            n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
          }
        } else void 0 !== i && "boolean" !== o || ((e = xt(this)) && Q.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Q.get(this, "__className__") || ""));
      });
    },
    hasClass: function hasClass(e) {
      var t,
          n,
          r = 0;
      t = " " + e + " ";

      while (n = this[r++]) {
        if (1 === n.nodeType && -1 < (" " + mt(xt(n)) + " ").indexOf(t)) return !0;
      }

      return !1;
    }
  });
  var wt = /\r/g;
  k.fn.extend({
    val: function val(n) {
      var r,
          e,
          i,
          t = this[0];
      return arguments.length ? (i = m(n), this.each(function (e) {
        var t;
        1 === this.nodeType && (null == (t = i ? n.call(this, e, k(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = k.map(t, function (e) {
          return null == e ? "" : e + "";
        })), (r = k.valHooks[this.type] || k.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t));
      })) : t ? (r = k.valHooks[t.type] || k.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(wt, "") : null == e ? "" : e : void 0;
    }
  }), k.extend({
    valHooks: {
      option: {
        get: function get(e) {
          var t = k.find.attr(e, "value");
          return null != t ? t : mt(k.text(e));
        }
      },
      select: {
        get: function get(e) {
          var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              a = "select-one" === e.type,
              s = a ? null : [],
              u = a ? o + 1 : i.length;

          for (r = o < 0 ? u : a ? o : 0; r < u; r++) {
            if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
              if (t = k(n).val(), a) return t;
              s.push(t);
            }
          }

          return s;
        },
        set: function set(e, t) {
          var n,
              r,
              i = e.options,
              o = k.makeArray(t),
              a = i.length;

          while (a--) {
            ((r = i[a]).selected = -1 < k.inArray(k.valHooks.option.get(r), o)) && (n = !0);
          }

          return n || (e.selectedIndex = -1), o;
        }
      }
    }
  }), k.each(["radio", "checkbox"], function () {
    k.valHooks[this] = {
      set: function set(e, t) {
        if (Array.isArray(t)) return e.checked = -1 < k.inArray(k(e).val(), t);
      }
    }, y.checkOn || (k.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value;
    });
  }), y.focusin = "onfocusin" in C;

  var Tt = /^(?:focusinfocus|focusoutblur)$/,
      Ct = function Ct(e) {
    e.stopPropagation();
  };

  k.extend(k.event, {
    trigger: function trigger(e, t, n, r) {
      var i,
          o,
          a,
          s,
          u,
          l,
          c,
          f,
          p = [n || E],
          d = v.call(e, "type") ? e.type : e,
          h = v.call(e, "namespace") ? e.namespace.split(".") : [];

      if (o = f = a = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !Tt.test(d + k.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[k.expando] ? e : new k.Event(d, "object" == _typeof(e) && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : k.makeArray(t, [e]), c = k.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
        if (!r && !c.noBubble && !x(n)) {
          for (s = c.delegateType || d, Tt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) {
            p.push(o), a = o;
          }

          a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C);
        }

        i = 0;

        while ((o = p[i++]) && !e.isPropagationStopped()) {
          f = o, e.type = 1 < i ? s : c.bindType || d, (l = (Q.get(o, "events") || {})[e.type] && Q.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && G(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
        }

        return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !G(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), k.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, Ct), n[d](), e.isPropagationStopped() && f.removeEventListener(d, Ct), k.event.triggered = void 0, a && (n[u] = a)), e.result;
      }
    },
    simulate: function simulate(e, t, n) {
      var r = k.extend(new k.Event(), n, {
        type: e,
        isSimulated: !0
      });
      k.event.trigger(r, null, t);
    }
  }), k.fn.extend({
    trigger: function trigger(e, t) {
      return this.each(function () {
        k.event.trigger(e, t, this);
      });
    },
    triggerHandler: function triggerHandler(e, t) {
      var n = this[0];
      if (n) return k.event.trigger(e, t, n, !0);
    }
  }), y.focusin || k.each({
    focus: "focusin",
    blur: "focusout"
  }, function (n, r) {
    var i = function i(e) {
      k.event.simulate(r, e.target, k.event.fix(e));
    };

    k.event.special[r] = {
      setup: function setup() {
        var e = this.ownerDocument || this,
            t = Q.access(e, r);
        t || e.addEventListener(n, i, !0), Q.access(e, r, (t || 0) + 1);
      },
      teardown: function teardown() {
        var e = this.ownerDocument || this,
            t = Q.access(e, r) - 1;
        t ? Q.access(e, r, t) : (e.removeEventListener(n, i, !0), Q.remove(e, r));
      }
    };
  });
  var Et = C.location,
      kt = Date.now(),
      St = /\?/;

  k.parseXML = function (e) {
    var t;
    if (!e || "string" != typeof e) return null;

    try {
      t = new C.DOMParser().parseFromString(e, "text/xml");
    } catch (e) {
      t = void 0;
    }

    return t && !t.getElementsByTagName("parsererror").length || k.error("Invalid XML: " + e), t;
  };

  var Nt = /\[\]$/,
      At = /\r?\n/g,
      Dt = /^(?:submit|button|image|reset|file)$/i,
      jt = /^(?:input|select|textarea|keygen)/i;

  function qt(n, e, r, i) {
    var t;
    if (Array.isArray(e)) k.each(e, function (e, t) {
      r || Nt.test(n) ? i(n, t) : qt(n + "[" + ("object" == _typeof(t) && null != t ? e : "") + "]", t, r, i);
    });else if (r || "object" !== w(e)) i(n, e);else for (t in e) {
      qt(n + "[" + t + "]", e[t], r, i);
    }
  }

  k.param = function (e, t) {
    var n,
        r = [],
        i = function i(e, t) {
      var n = m(t) ? t() : t;
      r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
    };

    if (null == e) return "";
    if (Array.isArray(e) || e.jquery && !k.isPlainObject(e)) k.each(e, function () {
      i(this.name, this.value);
    });else for (n in e) {
      qt(n, e[n], t, i);
    }
    return r.join("&");
  }, k.fn.extend({
    serialize: function serialize() {
      return k.param(this.serializeArray());
    },
    serializeArray: function serializeArray() {
      return this.map(function () {
        var e = k.prop(this, "elements");
        return e ? k.makeArray(e) : this;
      }).filter(function () {
        var e = this.type;
        return this.name && !k(this).is(":disabled") && jt.test(this.nodeName) && !Dt.test(e) && (this.checked || !pe.test(e));
      }).map(function (e, t) {
        var n = k(this).val();
        return null == n ? null : Array.isArray(n) ? k.map(n, function (e) {
          return {
            name: t.name,
            value: e.replace(At, "\r\n")
          };
        }) : {
          name: t.name,
          value: n.replace(At, "\r\n")
        };
      }).get();
    }
  });
  var Lt = /%20/g,
      Ht = /#.*$/,
      Ot = /([?&])_=[^&]*/,
      Pt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Rt = /^(?:GET|HEAD)$/,
      Mt = /^\/\//,
      It = {},
      Wt = {},
      $t = "*/".concat("*"),
      Ft = E.createElement("a");

  function Bt(o) {
    return function (e, t) {
      "string" != typeof e && (t = e, e = "*");
      var n,
          r = 0,
          i = e.toLowerCase().match(R) || [];
      if (m(t)) while (n = i[r++]) {
        "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t);
      }
    };
  }

  function _t(t, i, o, a) {
    var s = {},
        u = t === Wt;

    function l(e) {
      var r;
      return s[e] = !0, k.each(t[e] || [], function (e, t) {
        var n = t(i, o, a);
        return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1);
      }), r;
    }

    return l(i.dataTypes[0]) || !s["*"] && l("*");
  }

  function zt(e, t) {
    var n,
        r,
        i = k.ajaxSettings.flatOptions || {};

    for (n in t) {
      void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    }

    return r && k.extend(!0, e, r), e;
  }

  Ft.href = Et.href, k.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: Et.href,
      type: "GET",
      isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": $t,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": JSON.parse,
        "text xml": k.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function ajaxSetup(e, t) {
      return t ? zt(zt(e, k.ajaxSettings), t) : zt(k.ajaxSettings, e);
    },
    ajaxPrefilter: Bt(It),
    ajaxTransport: Bt(Wt),
    ajax: function ajax(e, t) {
      "object" == _typeof(e) && (t = e, e = void 0), t = t || {};
      var c,
          f,
          p,
          n,
          d,
          r,
          h,
          g,
          i,
          o,
          v = k.ajaxSetup({}, t),
          y = v.context || v,
          m = v.context && (y.nodeType || y.jquery) ? k(y) : k.event,
          x = k.Deferred(),
          b = k.Callbacks("once memory"),
          w = v.statusCode || {},
          a = {},
          s = {},
          u = "canceled",
          T = {
        readyState: 0,
        getResponseHeader: function getResponseHeader(e) {
          var t;

          if (h) {
            if (!n) {
              n = {};

              while (t = Pt.exec(p)) {
                n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
              }
            }

            t = n[e.toLowerCase() + " "];
          }

          return null == t ? null : t.join(", ");
        },
        getAllResponseHeaders: function getAllResponseHeaders() {
          return h ? p : null;
        },
        setRequestHeader: function setRequestHeader(e, t) {
          return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this;
        },
        overrideMimeType: function overrideMimeType(e) {
          return null == h && (v.mimeType = e), this;
        },
        statusCode: function statusCode(e) {
          var t;
          if (e) if (h) T.always(e[T.status]);else for (t in e) {
            w[t] = [w[t], e[t]];
          }
          return this;
        },
        abort: function abort(e) {
          var t = e || u;
          return c && c.abort(t), l(0, t), this;
        }
      };

      if (x.promise(T), v.url = ((e || v.url || Et.href) + "").replace(Mt, Et.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(R) || [""], null == v.crossDomain) {
        r = E.createElement("a");

        try {
          r.href = v.url, r.href = r.href, v.crossDomain = Ft.protocol + "//" + Ft.host != r.protocol + "//" + r.host;
        } catch (e) {
          v.crossDomain = !0;
        }
      }

      if (v.data && v.processData && "string" != typeof v.data && (v.data = k.param(v.data, v.traditional)), _t(It, v, t, T), h) return T;

      for (i in (g = k.event && v.global) && 0 == k.active++ && k.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Rt.test(v.type), f = v.url.replace(Ht, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(Lt, "+")) : (o = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (St.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(Ot, "$1"), o = (St.test(f) ? "&" : "?") + "_=" + kt++ + o), v.url = f + o), v.ifModified && (k.lastModified[f] && T.setRequestHeader("If-Modified-Since", k.lastModified[f]), k.etag[f] && T.setRequestHeader("If-None-Match", k.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : v.accepts["*"]), v.headers) {
        T.setRequestHeader(i, v.headers[i]);
      }

      if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();

      if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = _t(Wt, v, t, T)) {
        if (T.readyState = 1, g && m.trigger("ajaxSend", [T, v]), h) return T;
        v.async && 0 < v.timeout && (d = C.setTimeout(function () {
          T.abort("timeout");
        }, v.timeout));

        try {
          h = !1, c.send(a, l);
        } catch (e) {
          if (h) throw e;
          l(-1, e);
        }
      } else l(-1, "No Transport");

      function l(e, t, n, r) {
        var i,
            o,
            a,
            s,
            u,
            l = t;
        h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function (e, t, n) {
          var r,
              i,
              o,
              a,
              s = e.contents,
              u = e.dataTypes;

          while ("*" === u[0]) {
            u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
          }

          if (r) for (i in s) {
            if (s[i] && s[i].test(r)) {
              u.unshift(i);
              break;
            }
          }
          if (u[0] in n) o = u[0];else {
            for (i in n) {
              if (!u[0] || e.converters[i + " " + u[0]]) {
                o = i;
                break;
              }

              a || (a = i);
            }

            o = o || a;
          }
          if (o) return o !== u[0] && u.unshift(o), n[o];
        }(v, T, n)), s = function (e, t, n, r) {
          var i,
              o,
              a,
              s,
              u,
              l = {},
              c = e.dataTypes.slice();
          if (c[1]) for (a in e.converters) {
            l[a.toLowerCase()] = e.converters[a];
          }
          o = c.shift();

          while (o) {
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u;else if ("*" !== u && u !== o) {
              if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) {
                if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                  !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                  break;
                }
              }
              if (!0 !== a) if (a && e["throws"]) t = a(t);else try {
                t = a(t);
              } catch (e) {
                return {
                  state: "parsererror",
                  error: a ? e : "No conversion from " + u + " to " + o
                };
              }
            }
          }

          return {
            state: "success",
            data: t
          };
        }(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (k.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (k.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --k.active || k.event.trigger("ajaxStop")));
      }

      return T;
    },
    getJSON: function getJSON(e, t, n) {
      return k.get(e, t, n, "json");
    },
    getScript: function getScript(e, t) {
      return k.get(e, void 0, t, "script");
    }
  }), k.each(["get", "post"], function (e, i) {
    k[i] = function (e, t, n, r) {
      return m(t) && (r = r || n, n = t, t = void 0), k.ajax(k.extend({
        url: e,
        type: i,
        dataType: r,
        data: t,
        success: n
      }, k.isPlainObject(e) && e));
    };
  }), k._evalUrl = function (e, t) {
    return k.ajax({
      url: e,
      type: "GET",
      dataType: "script",
      cache: !0,
      async: !1,
      global: !1,
      converters: {
        "text script": function textScript() {}
      },
      dataFilter: function dataFilter(e) {
        k.globalEval(e, t);
      }
    });
  }, k.fn.extend({
    wrapAll: function wrapAll(e) {
      var t;
      return this[0] && (m(e) && (e = e.call(this[0])), t = k(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
        var e = this;

        while (e.firstElementChild) {
          e = e.firstElementChild;
        }

        return e;
      }).append(this)), this;
    },
    wrapInner: function wrapInner(n) {
      return m(n) ? this.each(function (e) {
        k(this).wrapInner(n.call(this, e));
      }) : this.each(function () {
        var e = k(this),
            t = e.contents();
        t.length ? t.wrapAll(n) : e.append(n);
      });
    },
    wrap: function wrap(t) {
      var n = m(t);
      return this.each(function (e) {
        k(this).wrapAll(n ? t.call(this, e) : t);
      });
    },
    unwrap: function unwrap(e) {
      return this.parent(e).not("body").each(function () {
        k(this).replaceWith(this.childNodes);
      }), this;
    }
  }), k.expr.pseudos.hidden = function (e) {
    return !k.expr.pseudos.visible(e);
  }, k.expr.pseudos.visible = function (e) {
    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
  }, k.ajaxSettings.xhr = function () {
    try {
      return new C.XMLHttpRequest();
    } catch (e) {}
  };
  var Ut = {
    0: 200,
    1223: 204
  },
      Xt = k.ajaxSettings.xhr();
  y.cors = !!Xt && "withCredentials" in Xt, y.ajax = Xt = !!Xt, k.ajaxTransport(function (i) {
    var _o, a;

    if (y.cors || Xt && !i.crossDomain) return {
      send: function send(e, t) {
        var n,
            r = i.xhr();
        if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields) for (n in i.xhrFields) {
          r[n] = i.xhrFields[n];
        }

        for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) {
          r.setRequestHeader(n, e[n]);
        }

        _o = function o(e) {
          return function () {
            _o && (_o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Ut[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
              binary: r.response
            } : {
              text: r.responseText
            }, r.getAllResponseHeaders()));
          };
        }, r.onload = _o(), a = r.onerror = r.ontimeout = _o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function () {
          4 === r.readyState && C.setTimeout(function () {
            _o && a();
          });
        }, _o = _o("abort");

        try {
          r.send(i.hasContent && i.data || null);
        } catch (e) {
          if (_o) throw e;
        }
      },
      abort: function abort() {
        _o && _o();
      }
    };
  }), k.ajaxPrefilter(function (e) {
    e.crossDomain && (e.contents.script = !1);
  }), k.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function textScript(e) {
        return k.globalEval(e), e;
      }
    }
  }), k.ajaxPrefilter("script", function (e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
  }), k.ajaxTransport("script", function (n) {
    var r, _i;

    if (n.crossDomain || n.scriptAttrs) return {
      send: function send(e, t) {
        r = k("<script>").attr(n.scriptAttrs || {}).prop({
          charset: n.scriptCharset,
          src: n.url
        }).on("load error", _i = function i(e) {
          r.remove(), _i = null, e && t("error" === e.type ? 404 : 200, e.type);
        }), E.head.appendChild(r[0]);
      },
      abort: function abort() {
        _i && _i();
      }
    };
  });
  var Vt,
      Gt = [],
      Yt = /(=)\?(?=&|$)|\?\?/;
  k.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function jsonpCallback() {
      var e = Gt.pop() || k.expando + "_" + kt++;
      return this[e] = !0, e;
    }
  }), k.ajaxPrefilter("json jsonp", function (e, t, n) {
    var r,
        i,
        o,
        a = !1 !== e.jsonp && (Yt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Yt.test(e.data) && "data");
    if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Yt, "$1" + r) : !1 !== e.jsonp && (e.url += (St.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
      return o || k.error(r + " was not called"), o[0];
    }, e.dataTypes[0] = "json", i = C[r], C[r] = function () {
      o = arguments;
    }, n.always(function () {
      void 0 === i ? k(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Gt.push(r)), o && m(i) && i(o[0]), o = i = void 0;
    }), "script";
  }), y.createHTMLDocument = ((Vt = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Vt.childNodes.length), k.parseHTML = function (e, t, n) {
    return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t.head.appendChild(r)) : t = E), o = !n && [], (i = D.exec(e)) ? [t.createElement(i[1])] : (i = we([e], t, o), o && o.length && k(o).remove(), k.merge([], i.childNodes)));
    var r, i, o;
  }, k.fn.load = function (e, t, n) {
    var r,
        i,
        o,
        a = this,
        s = e.indexOf(" ");
    return -1 < s && (r = mt(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == _typeof(t) && (i = "POST"), 0 < a.length && k.ajax({
      url: e,
      type: i || "GET",
      dataType: "html",
      data: t
    }).done(function (e) {
      o = arguments, a.html(r ? k("<div>").append(k.parseHTML(e)).find(r) : e);
    }).always(n && function (e, t) {
      a.each(function () {
        n.apply(this, o || [e.responseText, t, e]);
      });
    }), this;
  }, k.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    k.fn[t] = function (e) {
      return this.on(t, e);
    };
  }), k.expr.pseudos.animated = function (t) {
    return k.grep(k.timers, function (e) {
      return t === e.elem;
    }).length;
  }, k.offset = {
    setOffset: function setOffset(e, t, n) {
      var r,
          i,
          o,
          a,
          s,
          u,
          l = k.css(e, "position"),
          c = k(e),
          f = {};
      "static" === l && (e.style.position = "relative"), s = c.offset(), o = k.css(e, "top"), u = k.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m(t) && (t = t.call(e, n, k.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f);
    }
  }, k.fn.extend({
    offset: function offset(t) {
      if (arguments.length) return void 0 === t ? this : this.each(function (e) {
        k.offset.setOffset(this, t, e);
      });
      var e,
          n,
          r = this[0];
      return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
        top: e.top + n.pageYOffset,
        left: e.left + n.pageXOffset
      }) : {
        top: 0,
        left: 0
      } : void 0;
    },
    position: function position() {
      if (this[0]) {
        var e,
            t,
            n,
            r = this[0],
            i = {
          top: 0,
          left: 0
        };
        if ("fixed" === k.css(r, "position")) t = r.getBoundingClientRect();else {
          t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;

          while (e && (e === n.body || e === n.documentElement) && "static" === k.css(e, "position")) {
            e = e.parentNode;
          }

          e && e !== r && 1 === e.nodeType && ((i = k(e).offset()).top += k.css(e, "borderTopWidth", !0), i.left += k.css(e, "borderLeftWidth", !0));
        }
        return {
          top: t.top - i.top - k.css(r, "marginTop", !0),
          left: t.left - i.left - k.css(r, "marginLeft", !0)
        };
      }
    },
    offsetParent: function offsetParent() {
      return this.map(function () {
        var e = this.offsetParent;

        while (e && "static" === k.css(e, "position")) {
          e = e.offsetParent;
        }

        return e || ie;
      });
    }
  }), k.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (t, i) {
    var o = "pageYOffset" === i;

    k.fn[t] = function (e) {
      return _(this, function (e, t, n) {
        var r;
        if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
        r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n;
      }, t, e, arguments.length);
    };
  }), k.each(["top", "left"], function (e, n) {
    k.cssHooks[n] = ze(y.pixelPosition, function (e, t) {
      if (t) return t = _e(e, n), $e.test(t) ? k(e).position()[n] + "px" : t;
    });
  }), k.each({
    Height: "height",
    Width: "width"
  }, function (a, s) {
    k.each({
      padding: "inner" + a,
      content: s,
      "": "outer" + a
    }, function (r, o) {
      k.fn[o] = function (e, t) {
        var n = arguments.length && (r || "boolean" != typeof e),
            i = r || (!0 === e || !0 === t ? "margin" : "border");
        return _(this, function (e, t, n) {
          var r;
          return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? k.css(e, t, i) : k.style(e, t, n, i);
        }, s, n ? e : void 0, n);
      };
    });
  }), k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) {
    k.fn[n] = function (e, t) {
      return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n);
    };
  }), k.fn.extend({
    hover: function hover(e, t) {
      return this.mouseenter(e).mouseleave(t || e);
    }
  }), k.fn.extend({
    bind: function bind(e, t, n) {
      return this.on(e, null, t, n);
    },
    unbind: function unbind(e, t) {
      return this.off(e, null, t);
    },
    delegate: function delegate(e, t, n, r) {
      return this.on(t, e, n, r);
    },
    undelegate: function undelegate(e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
    }
  }), k.proxy = function (e, t) {
    var n, r, i;
    if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = s.call(arguments, 2), (i = function i() {
      return e.apply(t || this, r.concat(s.call(arguments)));
    }).guid = e.guid = e.guid || k.guid++, i;
  }, k.holdReady = function (e) {
    e ? k.readyWait++ : k.ready(!0);
  }, k.isArray = Array.isArray, k.parseJSON = JSON.parse, k.nodeName = A, k.isFunction = m, k.isWindow = x, k.camelCase = V, k.type = w, k.now = Date.now, k.isNumeric = function (e) {
    var t = k.type(e);
    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
  }, "function" == typeof define && define.amd && define("jquery", [], function () {
    return k;
  });
  var Qt = C.jQuery,
      Jt = C.$;
  return k.noConflict = function (e) {
    return C.$ === k && (C.$ = Jt), e && C.jQuery === k && (C.jQuery = Qt), k;
  }, e || (C.jQuery = C.$ = k), k;
});
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * VERSION: 2.1.3
 * DATE: 2019-05-17
 * UPDATES AND DOCS AT: http://greensock.com
 * 
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/

/* eslint-disable */
var _gsScope = typeof module !== "undefined" && module.exports && typeof global !== "undefined" ? global : void 0 || window; //helps ensure compatibility with AMD/RequireJS and CommonJS/Node


(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
  "use strict";

  _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (Animation, SimpleTimeline, TweenLite) {
    var _slice = function _slice(a) {
      //don't use [].slice because that doesn't work in IE8 with a NodeList that's returned by querySelectorAll()
      var b = [],
          l = a.length,
          i;

      for (i = 0; i !== l; b.push(a[i++])) {
        ;
      }

      return b;
    },
        _applyCycle = function _applyCycle(vars, targets, i) {
      var alt = vars.cycle,
          p,
          val;

      for (p in alt) {
        val = alt[p];
        vars[p] = typeof val === "function" ? val(i, targets[i], targets) : val[i % val.length];
      }

      delete vars.cycle;
    },
        //for distributing values across an array. Can accept a number, a function or (most commonly) a function which can contain the following properties: {base, amount, from, ease, grid, axis, length, each}. Returns a function that expects the following parameters: index, target, array. Recognizes the following
    _distribute = function _distribute(v) {
      if (typeof v === "function") {
        return v;
      }

      var vars = _typeof(v) === "object" ? v : {
        each: v
      },
          //n:1 is just to indicate v was a number; we leverage that later to set v according to the length we get. If a number is passed in, we treat it like the old stagger value where 0.1, for example, would mean that things would be distributed with 0.1 between each element in the array rather than a total "amount" that's chunked out among them all.
      ease = vars.ease,
          from = vars.from || 0,
          base = vars.base || 0,
          cache = {},
          isFromKeyword = isNaN(from),
          axis = vars.axis,
          ratio = {
        center: 0.5,
        end: 1
      }[from] || 0;
      return function (i, target, a) {
        var l = (a || vars).length,
            distances = cache[l],
            originX,
            originY,
            x,
            y,
            d,
            j,
            max,
            min,
            wrap;

        if (!distances) {
          wrap = vars.grid === "auto" ? 0 : (vars.grid || [Infinity])[0];

          if (!wrap) {
            max = -Infinity;

            while (max < (max = a[wrap++].getBoundingClientRect().left) && wrap < l) {}

            wrap--;
          }

          distances = cache[l] = [];
          originX = isFromKeyword ? Math.min(wrap, l) * ratio - 0.5 : from % wrap;
          originY = isFromKeyword ? l * ratio / wrap - 0.5 : from / wrap | 0;
          max = 0;
          min = Infinity;

          for (j = 0; j < l; j++) {
            x = j % wrap - originX;
            y = originY - (j / wrap | 0);
            distances[j] = d = !axis ? Math.sqrt(x * x + y * y) : Math.abs(axis === "y" ? y : x);

            if (d > max) {
              max = d;
            }

            if (d < min) {
              min = d;
            }
          }

          distances.max = max - min;
          distances.min = min;
          distances.v = l = vars.amount || vars.each * (wrap > l ? l - 1 : !axis ? Math.max(wrap, l / wrap) : axis === "y" ? l / wrap : wrap) || 0;
          distances.b = l < 0 ? base - l : base;
        }

        l = (distances[i] - distances.min) / distances.max;
        return distances.b + (ease ? ease.getRatio(l) : l) * distances.v;
      };
    },
        TweenMax = function TweenMax(target, duration, vars) {
      TweenLite.call(this, target, duration, vars);
      this._cycle = 0;
      this._yoyo = this.vars.yoyo === true || !!this.vars.yoyoEase;
      this._repeat = this.vars.repeat || 0;
      this._repeatDelay = this.vars.repeatDelay || 0;

      if (this._repeat) {
        this._uncache(true); //ensures that if there is any repeat, the totalDuration will get recalculated to accurately report it.

      }

      this.render = TweenMax.prototype.render; //speed optimization (avoid prototype lookup on this "hot" method)
    },
        _tinyNum = 0.00000001,
        TweenLiteInternals = TweenLite._internals,
        _isSelector = TweenLiteInternals.isSelector,
        _isArray = TweenLiteInternals.isArray,
        p = TweenMax.prototype = TweenLite.to({}, 0.1, {}),
        _blankArray = [];

    TweenMax.version = "2.1.3";
    p.constructor = TweenMax;
    p.kill()._gc = false;
    TweenMax.killTweensOf = TweenMax.killDelayedCallsTo = TweenLite.killTweensOf;
    TweenMax.getTweensOf = TweenLite.getTweensOf;
    TweenMax.lagSmoothing = TweenLite.lagSmoothing;
    TweenMax.ticker = TweenLite.ticker;
    TweenMax.render = TweenLite.render;
    TweenMax.distribute = _distribute;

    p.invalidate = function () {
      this._yoyo = this.vars.yoyo === true || !!this.vars.yoyoEase;
      this._repeat = this.vars.repeat || 0;
      this._repeatDelay = this.vars.repeatDelay || 0;
      this._yoyoEase = null;

      this._uncache(true);

      return TweenLite.prototype.invalidate.call(this);
    };

    p.updateTo = function (vars, resetDuration) {
      var self = this,
          curRatio = self.ratio,
          immediate = self.vars.immediateRender || vars.immediateRender,
          p;

      if (resetDuration && self._startTime < self._timeline._time) {
        self._startTime = self._timeline._time;

        self._uncache(false);

        if (self._gc) {
          self._enabled(true, false);
        } else {
          self._timeline.insert(self, self._startTime - self._delay); //ensures that any necessary re-sequencing of Animations in the timeline occurs to make sure the rendering order is correct.

        }
      }

      for (p in vars) {
        self.vars[p] = vars[p];
      }

      if (self._initted || immediate) {
        if (resetDuration) {
          self._initted = false;

          if (immediate) {
            self.render(0, true, true);
          }
        } else {
          if (self._gc) {
            self._enabled(true, false);
          }

          if (self._notifyPluginsOfEnabled && self._firstPT) {
            TweenLite._onPluginEvent("_onDisable", self); //in case a plugin like MotionBlur must perform some cleanup tasks

          }

          if (self._time / self._duration > 0.998) {
            //if the tween has finished (or come extremely close to finishing), we just need to rewind it to 0 and then render it again at the end which forces it to re-initialize (parsing the new vars). We allow tweens that are close to finishing (but haven't quite finished) to work this way too because otherwise, the values are so small when determining where to project the starting values that binary math issues creep in and can make the tween appear to render incorrectly when run backwards.
            var prevTime = self._totalTime;
            self.render(0, true, false);
            self._initted = false;
            self.render(prevTime, true, false);
          } else {
            self._initted = false;

            self._init();

            if (self._time > 0 || immediate) {
              var inv = 1 / (1 - curRatio),
                  pt = self._firstPT,
                  endValue;

              while (pt) {
                endValue = pt.s + pt.c;
                pt.c *= inv;
                pt.s = endValue - pt.c;
                pt = pt._next;
              }
            }
          }
        }
      }

      return self;
    };

    p.render = function (time, suppressEvents, force) {
      if (!this._initted) if (this._duration === 0 && this.vars.repeat) {
        //zero duration tweens that render immediately have render() called from TweenLite's constructor, before TweenMax's constructor has finished setting _repeat, _repeatDelay, and _yoyo which are critical in determining totalDuration() so we need to call invalidate() which is a low-kb way to get those set properly.
        this.invalidate();
      }
      var self = this,
          totalDur = !self._dirty ? self._totalDuration : self.totalDuration(),
          prevTime = self._time,
          prevTotalTime = self._totalTime,
          prevCycle = self._cycle,
          duration = self._duration,
          prevRawPrevTime = self._rawPrevTime,
          isComplete,
          callback,
          pt,
          cycleDuration,
          r,
          type,
          pow,
          rawPrevTime,
          yoyoEase;

      if (time >= totalDur - _tinyNum && time >= 0) {
        //to work around occasional floating point math artifacts.
        self._totalTime = totalDur;
        self._cycle = self._repeat;

        if (self._yoyo && (self._cycle & 1) !== 0) {
          self._time = 0;
          self.ratio = self._ease._calcEnd ? self._ease.getRatio(0) : 0;
        } else {
          self._time = duration;
          self.ratio = self._ease._calcEnd ? self._ease.getRatio(1) : 1;
        }

        if (!self._reversed) {
          isComplete = true;
          callback = "onComplete";
          force = force || self._timeline.autoRemoveChildren; //otherwise, if the animation is unpaused/activated after it's already finished, it doesn't get removed from the parent timeline.
        }

        if (duration === 0) if (self._initted || !self.vars.lazy || force) {
          //zero-duration tweens are tricky because we must discern the momentum/direction of time in order to determine whether the starting values should be rendered or the ending values. If the "playhead" of its timeline goes past the zero-duration tween in the forward direction or lands directly on it, the end values should be rendered, but if the timeline's "playhead" moves past it in the backward direction (from a postitive time to a negative time), the starting values must be rendered.
          if (self._startTime === self._timeline._duration) {
            //if a zero-duration tween is at the VERY end of a timeline and that timeline renders at its end, it will typically add a tiny bit of cushion to the render time to prevent rounding errors from getting in the way of tweens rendering their VERY end. If we then reverse() that timeline, the zero-duration tween will trigger its onReverseComplete even though technically the playhead didn't pass over it again. It's a very specific edge case we must accommodate.
            time = 0;
          }

          if (prevRawPrevTime < 0 || time <= 0 && time >= -_tinyNum || prevRawPrevTime === _tinyNum && self.data !== "isPause") if (prevRawPrevTime !== time) {
            //note: when this.data is "isPause", it's a callback added by addPause() on a timeline that we should not be triggered when LEAVING its exact start time. In other words, tl.addPause(1).play(1) shouldn't pause.
            force = true;

            if (prevRawPrevTime > _tinyNum) {
              callback = "onReverseComplete";
            }
          }
          self._rawPrevTime = rawPrevTime = !suppressEvents || time || prevRawPrevTime === time ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
        }
      } else if (time < _tinyNum) {
        //to work around occasional floating point math artifacts, round super small values to 0.
        self._totalTime = self._time = self._cycle = 0;
        self.ratio = self._ease._calcEnd ? self._ease.getRatio(0) : 0;

        if (prevTotalTime !== 0 || duration === 0 && prevRawPrevTime > 0) {
          callback = "onReverseComplete";
          isComplete = self._reversed;
        }

        if (time > -_tinyNum) {
          time = 0;
        } else if (time < 0) {
          self._active = false;
          if (duration === 0) if (self._initted || !self.vars.lazy || force) {
            //zero-duration tweens are tricky because we must discern the momentum/direction of time in order to determine whether the starting values should be rendered or the ending values. If the "playhead" of its timeline goes past the zero-duration tween in the forward direction or lands directly on it, the end values should be rendered, but if the timeline's "playhead" moves past it in the backward direction (from a postitive time to a negative time), the starting values must be rendered.
            if (prevRawPrevTime >= 0) {
              force = true;
            }

            self._rawPrevTime = rawPrevTime = !suppressEvents || time || prevRawPrevTime === time ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
          }
        }

        if (!self._initted) {
          //if we render the very beginning (time == 0) of a fromTo(), we must force the render (normal tweens wouldn't need to render at a time of 0 when the prevTime was also 0). This is also mandatory to make sure overwriting kicks in immediately.
          force = true;
        }
      } else {
        self._totalTime = self._time = time;

        if (self._repeat !== 0) {
          cycleDuration = duration + self._repeatDelay;
          self._cycle = self._totalTime / cycleDuration >> 0; //originally _totalTime % cycleDuration but floating point errors caused problems, so I normalized it. (4 % 0.8 should be 0 but some browsers report it as 0.79999999!)

          if (self._cycle !== 0) if (self._cycle === self._totalTime / cycleDuration && prevTotalTime <= time) {
            self._cycle--; //otherwise when rendered exactly at the end time, it will act as though it is repeating (at the beginning)
          }
          self._time = self._totalTime - self._cycle * cycleDuration;
          if (self._yoyo) if ((self._cycle & 1) !== 0) {
            self._time = duration - self._time;
            yoyoEase = self._yoyoEase || self.vars.yoyoEase; //note: we don't set this._yoyoEase in _init() like we do other properties because it's TweenMax-specific and doing it here allows us to optimize performance (most tweens don't have a yoyoEase). Note that we also must skip the this.ratio calculation further down right after we _init() in this function, because we're doing it here.

            if (yoyoEase) {
              if (!self._yoyoEase) {
                if (yoyoEase === true && !self._initted) {
                  //if it's not initted and yoyoEase is true, this._ease won't have been populated yet so we must discern it here.
                  yoyoEase = self.vars.ease;
                  self._yoyoEase = yoyoEase = !yoyoEase ? TweenLite.defaultEase : yoyoEase instanceof Ease ? yoyoEase : typeof yoyoEase === "function" ? new Ease(yoyoEase, self.vars.easeParams) : Ease.map[yoyoEase] || TweenLite.defaultEase;
                } else {
                  self._yoyoEase = yoyoEase = yoyoEase === true ? self._ease : yoyoEase instanceof Ease ? yoyoEase : Ease.map[yoyoEase];
                }
              }

              self.ratio = yoyoEase ? 1 - yoyoEase.getRatio((duration - self._time) / duration) : 0;
            }
          }

          if (self._time > duration) {
            self._time = duration;
          } else if (self._time < 0) {
            self._time = 0;
          }
        }

        if (self._easeType && !yoyoEase) {
          r = self._time / duration;
          type = self._easeType;
          pow = self._easePower;

          if (type === 1 || type === 3 && r >= 0.5) {
            r = 1 - r;
          }

          if (type === 3) {
            r *= 2;
          }

          if (pow === 1) {
            r *= r;
          } else if (pow === 2) {
            r *= r * r;
          } else if (pow === 3) {
            r *= r * r * r;
          } else if (pow === 4) {
            r *= r * r * r * r;
          }

          self.ratio = type === 1 ? 1 - r : type === 2 ? r : self._time / duration < 0.5 ? r / 2 : 1 - r / 2;
        } else if (!yoyoEase) {
          self.ratio = self._ease.getRatio(self._time / duration);
        }
      }

      if (prevTime === self._time && !force && prevCycle === self._cycle) {
        if (prevTotalTime !== self._totalTime) if (self._onUpdate) if (!suppressEvents) {
          //so that onUpdate fires even during the repeatDelay - as long as the totalTime changed, we should trigger onUpdate.
          self._callback("onUpdate");
        }
        return;
      } else if (!self._initted) {
        self._init();

        if (!self._initted || self._gc) {
          //immediateRender tweens typically won't initialize until the playhead advances (_time is greater than 0) in order to ensure that overwriting occurs properly. Also, if all of the tweening properties have been overwritten (which would cause _gc to be true, as set in _init()), we shouldn't continue otherwise an onStart callback could be called for example.
          return;
        } else if (!force && self._firstPT && (self.vars.lazy !== false && self._duration || self.vars.lazy && !self._duration)) {
          //we stick it in the queue for rendering at the very end of the tick - this is a performance optimization because browsers invalidate styles and force a recalculation if you read, write, and then read style data (so it's better to read/read/read/write/write/write than read/write/read/write/read/write). The down side, of course, is that usually you WANT things to render immediately because you may have code running right after that which depends on the change. Like imagine running TweenLite.set(...) and then immediately after that, creating a nother tween that animates the same property to another value; the starting values of that 2nd tween wouldn't be accurate if lazy is true.
          self._time = prevTime;
          self._totalTime = prevTotalTime;
          self._rawPrevTime = prevRawPrevTime;
          self._cycle = prevCycle;
          TweenLiteInternals.lazyTweens.push(self);
          self._lazy = [time, suppressEvents];
          return;
        } //_ease is initially set to defaultEase, so now that init() has run, _ease is set properly and we need to recalculate the ratio. Overall this is faster than using conditional logic earlier in the method to avoid having to set ratio twice because we only init() once but renderTime() gets called VERY frequently.


        if (self._time && !isComplete && !yoyoEase) {
          self.ratio = self._ease.getRatio(self._time / duration);
        } else if (isComplete && this._ease._calcEnd && !yoyoEase) {
          self.ratio = self._ease.getRatio(self._time === 0 ? 0 : 1);
        }
      }

      if (self._lazy !== false) {
        self._lazy = false;
      }

      if (!self._active) if (!self._paused && self._time !== prevTime && time >= 0) {
        self._active = true; //so that if the user renders a tween (as opposed to the timeline rendering it), the timeline is forced to re-render and align it with the proper time/frame on the next rendering cycle. Maybe the tween already finished but the user manually re-renders it as halfway done.
      }

      if (prevTotalTime === 0) {
        if (self._initted === 2 && time > 0) {
          self._init(); //will just apply overwriting since _initted of (2) means it was a from() tween that had immediateRender:true

        }

        if (self._startAt) {
          if (time >= 0) {
            self._startAt.render(time, true, force);
          } else if (!callback) {
            callback = "_dummyGS"; //if no callback is defined, use a dummy value just so that the condition at the end evaluates as true because _startAt should render AFTER the normal render loop when the time is negative. We could handle this in a more intuitive way, of course, but the render loop is the MOST important thing to optimize, so this technique allows us to avoid adding extra conditional logic in a high-frequency area.
          }
        }

        if (self.vars.onStart) if (self._totalTime !== 0 || duration === 0) if (!suppressEvents) {
          self._callback("onStart");
        }
      }

      pt = self._firstPT;

      while (pt) {
        if (pt.f) {
          pt.t[pt.p](pt.c * self.ratio + pt.s);
        } else {
          pt.t[pt.p] = pt.c * self.ratio + pt.s;
        }

        pt = pt._next;
      }

      if (self._onUpdate) {
        if (time < 0) if (self._startAt && self._startTime) {
          //if the tween is positioned at the VERY beginning (_startTime 0) of its parent timeline, it's illegal for the playhead to go back further, so we should not render the recorded startAt values.
          self._startAt.render(time, true, force); //note: for performance reasons, we tuck this conditional logic inside less traveled areas (most tweens don't have an onUpdate). We'd just have it at the end before the onComplete, but the values should be updated before any onUpdate is called, so we ALSO put it here and then if it's not called, we do so later near the onComplete.

        }
        if (!suppressEvents) if (self._totalTime !== prevTotalTime || callback) {
          self._callback("onUpdate");
        }
      }

      if (self._cycle !== prevCycle) if (!suppressEvents) if (!self._gc) if (self.vars.onRepeat) {
        self._callback("onRepeat");
      }
      if (callback) if (!self._gc || force) {
        //check gc because there's a chance that kill() could be called in an onUpdate
        if (time < 0 && self._startAt && !self._onUpdate && self._startTime) {
          //if the tween is positioned at the VERY beginning (_startTime 0) of its parent timeline, it's illegal for the playhead to go back further, so we should not render the recorded startAt values.
          self._startAt.render(time, true, force);
        }

        if (isComplete) {
          if (self._timeline.autoRemoveChildren) {
            self._enabled(false, false);
          }

          self._active = false;
        }

        if (!suppressEvents && self.vars[callback]) {
          self._callback(callback);
        }

        if (duration === 0 && self._rawPrevTime === _tinyNum && rawPrevTime !== _tinyNum) {
          //the onComplete or onReverseComplete could trigger movement of the playhead and for zero-duration tweens (which must discern direction) that land directly back on their start time, we don't want to fire again on the next render. Think of several addPause()'s in a timeline that forces the playhead to a certain spot, but what if it's already paused and another tween is tweening the "time" of the timeline? Each time it moves [forward] past that spot, it would move back, and since suppressEvents is true, it'd reset _rawPrevTime to _tinyNum so that when it begins again, the callback would fire (so ultimately it could bounce back and forth during that tween). Again, this is a very uncommon scenario, but possible nonetheless.
          self._rawPrevTime = 0;
        }
      }
    }; //---- STATIC FUNCTIONS -----------------------------------------------------------------------------------------------------------


    TweenMax.to = function (target, duration, vars) {
      return new TweenMax(target, duration, vars);
    };

    TweenMax.from = function (target, duration, vars) {
      vars.runBackwards = true;
      vars.immediateRender = vars.immediateRender != false;
      return new TweenMax(target, duration, vars);
    };

    TweenMax.fromTo = function (target, duration, fromVars, toVars) {
      toVars.startAt = fromVars;
      toVars.immediateRender = toVars.immediateRender != false && fromVars.immediateRender != false;
      return new TweenMax(target, duration, toVars);
    };

    TweenMax.staggerTo = TweenMax.allTo = function (targets, duration, vars, stagger, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
      var a = [],
          staggerFunc = _distribute(vars.stagger || stagger),
          cycle = vars.cycle,
          fromCycle = (vars.startAt || _blankArray).cycle,
          l,
          copy,
          i,
          p;

      if (!_isArray(targets)) {
        if (typeof targets === "string") {
          targets = TweenLite.selector(targets) || targets;
        }

        if (_isSelector(targets)) {
          targets = _slice(targets);
        }
      }

      targets = targets || [];
      l = targets.length - 1;

      for (i = 0; i <= l; i++) {
        copy = {};

        for (p in vars) {
          copy[p] = vars[p];
        }

        if (cycle) {
          _applyCycle(copy, targets, i);

          if (copy.duration != null) {
            duration = copy.duration;
            delete copy.duration;
          }
        }

        if (fromCycle) {
          fromCycle = copy.startAt = {};

          for (p in vars.startAt) {
            fromCycle[p] = vars.startAt[p];
          }

          _applyCycle(copy.startAt, targets, i);
        }

        copy.delay = staggerFunc(i, targets[i], targets) + (copy.delay || 0);

        if (i === l && onCompleteAll) {
          copy.onComplete = function () {
            if (vars.onComplete) {
              vars.onComplete.apply(vars.onCompleteScope || this, arguments);
            }

            onCompleteAll.apply(onCompleteAllScope || vars.callbackScope || this, onCompleteAllParams || _blankArray);
          };
        }

        a[i] = new TweenMax(targets[i], duration, copy);
      }

      return a;
    };

    TweenMax.staggerFrom = TweenMax.allFrom = function (targets, duration, vars, stagger, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
      vars.runBackwards = true;
      vars.immediateRender = vars.immediateRender != false;
      return TweenMax.staggerTo(targets, duration, vars, stagger, onCompleteAll, onCompleteAllParams, onCompleteAllScope);
    };

    TweenMax.staggerFromTo = TweenMax.allFromTo = function (targets, duration, fromVars, toVars, stagger, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
      toVars.startAt = fromVars;
      toVars.immediateRender = toVars.immediateRender != false && fromVars.immediateRender != false;
      return TweenMax.staggerTo(targets, duration, toVars, stagger, onCompleteAll, onCompleteAllParams, onCompleteAllScope);
    };

    TweenMax.delayedCall = function (delay, callback, params, scope, useFrames) {
      return new TweenMax(callback, 0, {
        delay: delay,
        onComplete: callback,
        onCompleteParams: params,
        callbackScope: scope,
        onReverseComplete: callback,
        onReverseCompleteParams: params,
        immediateRender: false,
        useFrames: useFrames,
        overwrite: 0
      });
    };

    TweenMax.set = function (target, vars) {
      return new TweenMax(target, 0, vars);
    };

    TweenMax.isTweening = function (target) {
      return TweenLite.getTweensOf(target, true).length > 0;
    };

    var _getChildrenOf = function _getChildrenOf(timeline, includeTimelines) {
      var a = [],
          cnt = 0,
          tween = timeline._first;

      while (tween) {
        if (tween instanceof TweenLite) {
          a[cnt++] = tween;
        } else {
          if (includeTimelines) {
            a[cnt++] = tween;
          }

          a = a.concat(_getChildrenOf(tween, includeTimelines));
          cnt = a.length;
        }

        tween = tween._next;
      }

      return a;
    },
        getAllTweens = TweenMax.getAllTweens = function (includeTimelines) {
      return _getChildrenOf(Animation._rootTimeline, includeTimelines).concat(_getChildrenOf(Animation._rootFramesTimeline, includeTimelines));
    };

    TweenMax.killAll = function (complete, tweens, delayedCalls, timelines) {
      if (tweens == null) {
        tweens = true;
      }

      if (delayedCalls == null) {
        delayedCalls = true;
      }

      var a = getAllTweens(timelines != false),
          l = a.length,
          allTrue = tweens && delayedCalls && timelines,
          isDC,
          tween,
          i;

      for (i = 0; i < l; i++) {
        tween = a[i];

        if (allTrue || tween instanceof SimpleTimeline || (isDC = tween.target === tween.vars.onComplete) && delayedCalls || tweens && !isDC) {
          if (complete) {
            tween.totalTime(tween._reversed ? 0 : tween.totalDuration());
          } else {
            tween._enabled(false, false);
          }
        }
      }
    };

    TweenMax.killChildTweensOf = function (parent, complete) {
      if (parent == null) {
        return;
      }

      var tl = TweenLiteInternals.tweenLookup,
          a,
          curParent,
          p,
          i,
          l;

      if (typeof parent === "string") {
        parent = TweenLite.selector(parent) || parent;
      }

      if (_isSelector(parent)) {
        parent = _slice(parent);
      }

      if (_isArray(parent)) {
        i = parent.length;

        while (--i > -1) {
          TweenMax.killChildTweensOf(parent[i], complete);
        }

        return;
      }

      a = [];

      for (p in tl) {
        curParent = tl[p].target.parentNode;

        while (curParent) {
          if (curParent === parent) {
            a = a.concat(tl[p].tweens);
          }

          curParent = curParent.parentNode;
        }
      }

      l = a.length;

      for (i = 0; i < l; i++) {
        if (complete) {
          a[i].totalTime(a[i].totalDuration());
        }

        a[i]._enabled(false, false);
      }
    };

    var _changePause = function _changePause(pause, tweens, delayedCalls, timelines) {
      tweens = tweens !== false;
      delayedCalls = delayedCalls !== false;
      timelines = timelines !== false;
      var a = getAllTweens(timelines),
          allTrue = tweens && delayedCalls && timelines,
          i = a.length,
          isDC,
          tween;

      while (--i > -1) {
        tween = a[i];

        if (allTrue || tween instanceof SimpleTimeline || (isDC = tween.target === tween.vars.onComplete) && delayedCalls || tweens && !isDC) {
          tween.paused(pause);
        }
      }
    };

    TweenMax.pauseAll = function (tweens, delayedCalls, timelines) {
      _changePause(true, tweens, delayedCalls, timelines);
    };

    TweenMax.resumeAll = function (tweens, delayedCalls, timelines) {
      _changePause(false, tweens, delayedCalls, timelines);
    };

    TweenMax.globalTimeScale = function (value) {
      var tl = Animation._rootTimeline,
          t = TweenLite.ticker.time;

      if (!arguments.length) {
        return tl._timeScale;
      }

      value = value || _tinyNum; //can't allow zero because it'll throw the math off

      tl._startTime = t - (t - tl._startTime) * tl._timeScale / value;
      tl = Animation._rootFramesTimeline;
      t = TweenLite.ticker.frame;
      tl._startTime = t - (t - tl._startTime) * tl._timeScale / value;
      tl._timeScale = Animation._rootTimeline._timeScale = value;
      return value;
    }; //---- GETTERS / SETTERS ----------------------------------------------------------------------------------------------------------


    p.progress = function (value, suppressEvents) {
      return !arguments.length ? this.duration() ? this._time / this._duration : this.ratio : this.totalTime(this.duration() * (this._yoyo && (this._cycle & 1) !== 0 ? 1 - value : value) + this._cycle * (this._duration + this._repeatDelay), suppressEvents);
    };

    p.totalProgress = function (value, suppressEvents) {
      return !arguments.length ? this._totalTime / this.totalDuration() : this.totalTime(this.totalDuration() * value, suppressEvents);
    };

    p.time = function (value, suppressEvents) {
      if (!arguments.length) {
        return this._time;
      }

      if (this._dirty) {
        this.totalDuration();
      }

      var duration = this._duration,
          cycle = this._cycle,
          cycleDur = cycle * (duration + this._repeatDelay);

      if (value > duration) {
        value = duration;
      }

      return this.totalTime(this._yoyo && cycle & 1 ? duration - value + cycleDur : this._repeat ? value + cycleDur : value, suppressEvents);
    };

    p.duration = function (value) {
      if (!arguments.length) {
        return this._duration; //don't set _dirty = false because there could be repeats that haven't been factored into the _totalDuration yet. Otherwise, if you create a repeated TweenMax and then immediately check its duration(), it would cache the value and the totalDuration would not be correct, thus repeats wouldn't take effect.
      }

      return Animation.prototype.duration.call(this, value);
    };

    p.totalDuration = function (value) {
      if (!arguments.length) {
        if (this._dirty) {
          //instead of Infinity, we use 999999999999 so that we can accommodate reverses
          this._totalDuration = this._repeat === -1 ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat;
          this._dirty = false;
        }

        return this._totalDuration;
      }

      return this._repeat === -1 ? this : this.duration((value - this._repeat * this._repeatDelay) / (this._repeat + 1));
    };

    p.repeat = function (value) {
      if (!arguments.length) {
        return this._repeat;
      }

      this._repeat = value;
      return this._uncache(true);
    };

    p.repeatDelay = function (value) {
      if (!arguments.length) {
        return this._repeatDelay;
      }

      this._repeatDelay = value;
      return this._uncache(true);
    };

    p.yoyo = function (value) {
      if (!arguments.length) {
        return this._yoyo;
      }

      this._yoyo = value;
      return this;
    };

    return TweenMax;
  }, true);
  /*
   * ----------------------------------------------------------------
   * TimelineLite
   * ----------------------------------------------------------------
   */


  _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (Animation, SimpleTimeline, TweenLite) {
    var TimelineLite = function TimelineLite(vars) {
      SimpleTimeline.call(this, vars);
      var self = this,
          v = self.vars,
          val,
          p;
      self._labels = {};
      self.autoRemoveChildren = !!v.autoRemoveChildren;
      self.smoothChildTiming = !!v.smoothChildTiming;
      self._sortChildren = true;
      self._onUpdate = v.onUpdate;

      for (p in v) {
        val = v[p];
        if (_isArray(val)) if (val.join("").indexOf("{self}") !== -1) {
          v[p] = self._swapSelfInParams(val);
        }
      }

      if (_isArray(v.tweens)) {
        self.add(v.tweens, 0, v.align, v.stagger);
      }
    },
        _tinyNum = 0.00000001,
        TweenLiteInternals = TweenLite._internals,
        _internals = TimelineLite._internals = {},
        _isSelector = TweenLiteInternals.isSelector,
        _isArray = TweenLiteInternals.isArray,
        _lazyTweens = TweenLiteInternals.lazyTweens,
        _lazyRender = TweenLiteInternals.lazyRender,
        _globals = _gsScope._gsDefine.globals,
        _copy = function _copy(vars) {
      var copy = {},
          p;

      for (p in vars) {
        copy[p] = vars[p];
      }

      return copy;
    },
        _applyCycle = function _applyCycle(vars, targets, i) {
      var alt = vars.cycle,
          p,
          val;

      for (p in alt) {
        val = alt[p];
        vars[p] = typeof val === "function" ? val(i, targets[i], targets) : val[i % val.length];
      }

      delete vars.cycle;
    },
        _pauseCallback = _internals.pauseCallback = function () {},
        _slice = function _slice(a) {
      //don't use [].slice because that doesn't work in IE8 with a NodeList that's returned by querySelectorAll()
      var b = [],
          l = a.length,
          i;

      for (i = 0; i !== l; b.push(a[i++])) {
        ;
      }

      return b;
    },
        _defaultImmediateRender = function _defaultImmediateRender(tl, toVars, fromVars, defaultFalse) {
      //default to immediateRender:true unless otherwise set in toVars, fromVars or if defaultFalse is passed in as true
      var ir = "immediateRender";

      if (!(ir in toVars)) {
        toVars[ir] = !(fromVars && fromVars[ir] === false || defaultFalse);
      }

      return toVars;
    },
        //for distributing values across an array. Can accept a number, a function or (most commonly) a function which can contain the following properties: {base, amount, from, ease, grid, axis, length, each}. Returns a function that expects the following parameters: index, target, array. Recognizes the following
    _distribute = function _distribute(v) {
      if (typeof v === "function") {
        return v;
      }

      var vars = _typeof(v) === "object" ? v : {
        each: v
      },
          //n:1 is just to indicate v was a number; we leverage that later to set v according to the length we get. If a number is passed in, we treat it like the old stagger value where 0.1, for example, would mean that things would be distributed with 0.1 between each element in the array rather than a total "amount" that's chunked out among them all.
      ease = vars.ease,
          from = vars.from || 0,
          base = vars.base || 0,
          cache = {},
          isFromKeyword = isNaN(from),
          axis = vars.axis,
          ratio = {
        center: 0.5,
        end: 1
      }[from] || 0;
      return function (i, target, a) {
        var l = (a || vars).length,
            distances = cache[l],
            originX,
            originY,
            x,
            y,
            d,
            j,
            max,
            min,
            wrap;

        if (!distances) {
          wrap = vars.grid === "auto" ? 0 : (vars.grid || [Infinity])[0];

          if (!wrap) {
            max = -Infinity;

            while (max < (max = a[wrap++].getBoundingClientRect().left) && wrap < l) {}

            wrap--;
          }

          distances = cache[l] = [];
          originX = isFromKeyword ? Math.min(wrap, l) * ratio - 0.5 : from % wrap;
          originY = isFromKeyword ? l * ratio / wrap - 0.5 : from / wrap | 0;
          max = 0;
          min = Infinity;

          for (j = 0; j < l; j++) {
            x = j % wrap - originX;
            y = originY - (j / wrap | 0);
            distances[j] = d = !axis ? Math.sqrt(x * x + y * y) : Math.abs(axis === "y" ? y : x);

            if (d > max) {
              max = d;
            }

            if (d < min) {
              min = d;
            }
          }

          distances.max = max - min;
          distances.min = min;
          distances.v = l = vars.amount || vars.each * (wrap > l ? l - 1 : !axis ? Math.max(wrap, l / wrap) : axis === "y" ? l / wrap : wrap) || 0;
          distances.b = l < 0 ? base - l : base;
        }

        l = (distances[i] - distances.min) / distances.max;
        return distances.b + (ease ? ease.getRatio(l) : l) * distances.v;
      };
    },
        p = TimelineLite.prototype = new SimpleTimeline();

    TimelineLite.version = "2.1.3";
    TimelineLite.distribute = _distribute;
    p.constructor = TimelineLite;
    p.kill()._gc = p._forcingPlayhead = p._hasPause = false;
    /* might use later...
    //translates a local time inside an animation to the corresponding time on the root/global timeline, factoring in all nesting and timeScales.
    function localToGlobal(time, animation) {
    	while (animation) {
    		time = (time / animation._timeScale) + animation._startTime;
    		animation = animation.timeline;
    	}
    	return time;
    }
    	//translates the supplied time on the root/global timeline into the corresponding local time inside a particular animation, factoring in all nesting and timeScales
    function globalToLocal(time, animation) {
    	var scale = 1;
    	time -= localToGlobal(0, animation);
    	while (animation) {
    		scale *= animation._timeScale;
    		animation = animation.timeline;
    	}
    	return time * scale;
    }
    */

    p.to = function (target, duration, vars, position) {
      var Engine = vars.repeat && _globals.TweenMax || TweenLite;
      return duration ? this.add(new Engine(target, duration, vars), position) : this.set(target, vars, position);
    };

    p.from = function (target, duration, vars, position) {
      return this.add((vars.repeat && _globals.TweenMax || TweenLite).from(target, duration, _defaultImmediateRender(this, vars)), position);
    };

    p.fromTo = function (target, duration, fromVars, toVars, position) {
      var Engine = toVars.repeat && _globals.TweenMax || TweenLite;
      toVars = _defaultImmediateRender(this, toVars, fromVars);
      return duration ? this.add(Engine.fromTo(target, duration, fromVars, toVars), position) : this.set(target, toVars, position);
    };

    p.staggerTo = function (targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
      var tl = new TimelineLite({
        onComplete: onCompleteAll,
        onCompleteParams: onCompleteAllParams,
        callbackScope: onCompleteAllScope,
        smoothChildTiming: this.smoothChildTiming
      }),
          staggerFunc = _distribute(vars.stagger || stagger),
          startAt = vars.startAt,
          cycle = vars.cycle,
          copy,
          i;

      if (typeof targets === "string") {
        targets = TweenLite.selector(targets) || targets;
      }

      targets = targets || [];

      if (_isSelector(targets)) {
        //if the targets object is a selector, translate it into an array.
        targets = _slice(targets);
      }

      for (i = 0; i < targets.length; i++) {
        copy = _copy(vars);

        if (startAt) {
          copy.startAt = _copy(startAt);

          if (startAt.cycle) {
            _applyCycle(copy.startAt, targets, i);
          }
        }

        if (cycle) {
          _applyCycle(copy, targets, i);

          if (copy.duration != null) {
            duration = copy.duration;
            delete copy.duration;
          }
        }

        tl.to(targets[i], duration, copy, staggerFunc(i, targets[i], targets));
      }

      return this.add(tl, position);
    };

    p.staggerFrom = function (targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
      vars.runBackwards = true;
      return this.staggerTo(targets, duration, _defaultImmediateRender(this, vars), stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope);
    };

    p.staggerFromTo = function (targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
      toVars.startAt = fromVars;
      return this.staggerTo(targets, duration, _defaultImmediateRender(this, toVars, fromVars), stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope);
    };

    p.call = function (callback, params, scope, position) {
      return this.add(TweenLite.delayedCall(0, callback, params, scope), position);
    };

    p.set = function (target, vars, position) {
      return this.add(new TweenLite(target, 0, _defaultImmediateRender(this, vars, null, true)), position);
    };

    TimelineLite.exportRoot = function (vars, ignoreDelayedCalls) {
      vars = vars || {};

      if (vars.smoothChildTiming == null) {
        vars.smoothChildTiming = true;
      }

      var tl = new TimelineLite(vars),
          root = tl._timeline,
          hasNegativeStart,
          time,
          tween,
          next;

      if (ignoreDelayedCalls == null) {
        ignoreDelayedCalls = true;
      }

      root._remove(tl, true);

      tl._startTime = 0;
      tl._rawPrevTime = tl._time = tl._totalTime = root._time;
      tween = root._first;

      while (tween) {
        next = tween._next;

        if (!ignoreDelayedCalls || !(tween instanceof TweenLite && tween.target === tween.vars.onComplete)) {
          time = tween._startTime - tween._delay;

          if (time < 0) {
            hasNegativeStart = 1;
          }

          tl.add(tween, time);
        }

        tween = next;
      }

      root.add(tl, 0);

      if (hasNegativeStart) {
        //calling totalDuration() will force the adjustment necessary to shift the children forward so none of them start before zero, and moves the timeline backwards the same amount, so the playhead is still aligned where it should be globally, but the timeline doesn't have illegal children that start before zero.
        tl.totalDuration();
      }

      return tl;
    };

    p.add = function (value, position, align, stagger) {
      var self = this,
          curTime,
          l,
          i,
          child,
          tl,
          beforeRawTime;

      if (typeof position !== "number") {
        position = self._parseTimeOrLabel(position, 0, true, value);
      }

      if (!(value instanceof Animation)) {
        if (value instanceof Array || value && value.push && _isArray(value)) {
          align = align || "normal";
          stagger = stagger || 0;
          curTime = position;
          l = value.length;

          for (i = 0; i < l; i++) {
            if (_isArray(child = value[i])) {
              child = new TimelineLite({
                tweens: child
              });
            }

            self.add(child, curTime);

            if (typeof child !== "string" && typeof child !== "function") {
              if (align === "sequence") {
                curTime = child._startTime + child.totalDuration() / child._timeScale;
              } else if (align === "start") {
                child._startTime -= child.delay();
              }
            }

            curTime += stagger;
          }

          return self._uncache(true);
        } else if (typeof value === "string") {
          return self.addLabel(value, position);
        } else if (typeof value === "function") {
          value = TweenLite.delayedCall(0, value);
        } else {
          throw "Cannot add " + value + " into the timeline; it is not a tween, timeline, function, or string.";
        }
      }

      SimpleTimeline.prototype.add.call(self, value, position);

      if (value._time || !value._duration && value._initted) {
        //in case, for example, the _startTime is moved on a tween that has already rendered. Imagine it's at its end state, then the startTime is moved WAY later (after the end of this timeline), it should render at its beginning.
        curTime = (self.rawTime() - value._startTime) * value._timeScale;

        if (!value._duration || Math.abs(Math.max(0, Math.min(value.totalDuration(), curTime))) - value._totalTime > 0.00001) {
          value.render(curTime, false, false);
        }
      } //if the timeline has already ended but the inserted tween/timeline extends the duration, we should enable this timeline again so that it renders properly. We should also align the playhead with the parent timeline's when appropriate.


      if (self._gc || self._time === self._duration) if (!self._paused) if (self._duration < self.duration()) {
        //in case any of the ancestors had completed but should now be enabled...
        tl = self;
        beforeRawTime = tl.rawTime() > value._startTime; //if the tween is placed on the timeline so that it starts BEFORE the current rawTime, we should align the playhead (move the timeline). This is because sometimes users will create a timeline, let it finish, and much later append a tween and expect it to run instead of jumping to its end state. While technically one could argue that it should jump to its end state, that's not what users intuitively expect.

        while (tl._timeline) {
          if (beforeRawTime && tl._timeline.smoothChildTiming) {
            tl.totalTime(tl._totalTime, true); //moves the timeline (shifts its startTime) if necessary, and also enables it.
          } else if (tl._gc) {
            tl._enabled(true, false);
          }

          tl = tl._timeline;
        }
      }
      return self;
    };

    p.remove = function (value) {
      if (value instanceof Animation) {
        this._remove(value, false);

        var tl = value._timeline = value.vars.useFrames ? Animation._rootFramesTimeline : Animation._rootTimeline; //now that it's removed, default it to the root timeline so that if it gets played again, it doesn't jump back into this timeline.

        value._startTime = (value._paused ? value._pauseTime : tl._time) - (!value._reversed ? value._totalTime : value.totalDuration() - value._totalTime) / value._timeScale; //ensure that if it gets played again, the timing is correct.

        return this;
      } else if (value instanceof Array || value && value.push && _isArray(value)) {
        var i = value.length;

        while (--i > -1) {
          this.remove(value[i]);
        }

        return this;
      } else if (typeof value === "string") {
        return this.removeLabel(value);
      }

      return this.kill(null, value);
    };

    p._remove = function (tween, skipDisable) {
      SimpleTimeline.prototype._remove.call(this, tween, skipDisable);

      var last = this._last;

      if (!last) {
        this._time = this._totalTime = this._duration = this._totalDuration = 0;
      } else if (this._time > this.duration()) {
        this._time = this._duration;
        this._totalTime = this._totalDuration;
      }

      return this;
    };

    p.append = function (value, offsetOrLabel) {
      return this.add(value, this._parseTimeOrLabel(null, offsetOrLabel, true, value));
    };

    p.insert = p.insertMultiple = function (value, position, align, stagger) {
      return this.add(value, position || 0, align, stagger);
    };

    p.appendMultiple = function (tweens, offsetOrLabel, align, stagger) {
      return this.add(tweens, this._parseTimeOrLabel(null, offsetOrLabel, true, tweens), align, stagger);
    };

    p.addLabel = function (label, position) {
      this._labels[label] = this._parseTimeOrLabel(position);
      return this;
    };

    p.addPause = function (position, callback, params, scope) {
      var t = TweenLite.delayedCall(0, _pauseCallback, params, scope || this);
      t.vars.onComplete = t.vars.onReverseComplete = callback;
      t.data = "isPause";
      this._hasPause = true;
      return this.add(t, position);
    };

    p.removeLabel = function (label) {
      delete this._labels[label];
      return this;
    };

    p.getLabelTime = function (label) {
      return this._labels[label] != null ? this._labels[label] : -1;
    };

    p._parseTimeOrLabel = function (timeOrLabel, offsetOrLabel, appendIfAbsent, ignore) {
      var clippedDuration, i; //if we're about to add a tween/timeline (or an array of them) that's already a child of this timeline, we should remove it first so that it doesn't contaminate the duration().

      if (ignore instanceof Animation && ignore.timeline === this) {
        this.remove(ignore);
      } else if (ignore && (ignore instanceof Array || ignore.push && _isArray(ignore))) {
        i = ignore.length;

        while (--i > -1) {
          if (ignore[i] instanceof Animation && ignore[i].timeline === this) {
            this.remove(ignore[i]);
          }
        }
      }

      clippedDuration = typeof timeOrLabel === "number" && !offsetOrLabel ? 0 : this.duration() > 99999999999 ? this.recent().endTime(false) : this._duration; //in case there's a child that infinitely repeats, users almost never intend for the insertion point of a new child to be based on a SUPER long value like that so we clip it and assume the most recently-added child's endTime should be used instead.

      if (typeof offsetOrLabel === "string") {
        return this._parseTimeOrLabel(offsetOrLabel, appendIfAbsent && typeof timeOrLabel === "number" && this._labels[offsetOrLabel] == null ? timeOrLabel - clippedDuration : 0, appendIfAbsent);
      }

      offsetOrLabel = offsetOrLabel || 0;

      if (typeof timeOrLabel === "string" && (isNaN(timeOrLabel) || this._labels[timeOrLabel] != null)) {
        //if the string is a number like "1", check to see if there's a label with that name, otherwise interpret it as a number (absolute value).
        i = timeOrLabel.indexOf("=");

        if (i === -1) {
          if (this._labels[timeOrLabel] == null) {
            return appendIfAbsent ? this._labels[timeOrLabel] = clippedDuration + offsetOrLabel : offsetOrLabel;
          }

          return this._labels[timeOrLabel] + offsetOrLabel;
        }

        offsetOrLabel = parseInt(timeOrLabel.charAt(i - 1) + "1", 10) * Number(timeOrLabel.substr(i + 1));
        timeOrLabel = i > 1 ? this._parseTimeOrLabel(timeOrLabel.substr(0, i - 1), 0, appendIfAbsent) : clippedDuration;
      } else if (timeOrLabel == null) {
        timeOrLabel = clippedDuration;
      }

      return Number(timeOrLabel) + offsetOrLabel;
    };

    p.seek = function (position, suppressEvents) {
      return this.totalTime(typeof position === "number" ? position : this._parseTimeOrLabel(position), suppressEvents !== false);
    };

    p.stop = function () {
      return this.paused(true);
    };

    p.gotoAndPlay = function (position, suppressEvents) {
      return this.play(position, suppressEvents);
    };

    p.gotoAndStop = function (position, suppressEvents) {
      return this.pause(position, suppressEvents);
    };

    p.render = function (time, suppressEvents, force) {
      if (this._gc) {
        this._enabled(true, false);
      }

      var self = this,
          prevTime = self._time,
          totalDur = !self._dirty ? self._totalDuration : self.totalDuration(),
          prevStart = self._startTime,
          prevTimeScale = self._timeScale,
          prevPaused = self._paused,
          tween,
          isComplete,
          next,
          callback,
          internalForce,
          pauseTween,
          curTime,
          pauseTime;

      if (prevTime !== self._time) {
        //if totalDuration() finds a child with a negative startTime and smoothChildTiming is true, things get shifted around internally so we need to adjust the time accordingly. For example, if a tween starts at -30 we must shift EVERYTHING forward 30 seconds and move this timeline's startTime backward by 30 seconds so that things align with the playhead (no jump).
        time += self._time - prevTime;
      }

      if (self._hasPause && !self._forcingPlayhead && !suppressEvents) {
        if (time > prevTime) {
          tween = self._first;

          while (tween && tween._startTime <= time && !pauseTween) {
            if (!tween._duration) if (tween.data === "isPause" && !tween.ratio && !(tween._startTime === 0 && self._rawPrevTime === 0)) {
              pauseTween = tween;
            }
            tween = tween._next;
          }
        } else {
          tween = self._last;

          while (tween && tween._startTime >= time && !pauseTween) {
            if (!tween._duration) if (tween.data === "isPause" && tween._rawPrevTime > 0) {
              pauseTween = tween;
            }
            tween = tween._prev;
          }
        }

        if (pauseTween) {
          self._time = self._totalTime = time = pauseTween._startTime;
          pauseTime = self._startTime + (self._reversed ? self._duration - time : time) / self._timeScale;
        }
      }

      if (time >= totalDur - _tinyNum && time >= 0) {
        //to work around occasional floating point math artifacts.
        self._totalTime = self._time = totalDur;
        if (!self._reversed) if (!self._hasPausedChild()) {
          isComplete = true;
          callback = "onComplete";
          internalForce = !!self._timeline.autoRemoveChildren; //otherwise, if the animation is unpaused/activated after it's already finished, it doesn't get removed from the parent timeline.

          if (self._duration === 0) if (time <= 0 && time >= -_tinyNum || self._rawPrevTime < 0 || self._rawPrevTime === _tinyNum) if (self._rawPrevTime !== time && self._first) {
            internalForce = true;

            if (self._rawPrevTime > _tinyNum) {
              callback = "onReverseComplete";
            }
          }
        }
        self._rawPrevTime = self._duration || !suppressEvents || time || self._rawPrevTime === time ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline or tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.

        time = totalDur + 0.0001; //to avoid occasional floating point rounding errors - sometimes child tweens/timelines were not being fully completed (their progress might be 0.999999999999998 instead of 1 because when _time - tween._startTime is performed, floating point errors would return a value that was SLIGHTLY off). Try (999999999999.7 - 999999999999) * 1 = 0.699951171875 instead of 0.7.
      } else if (time < _tinyNum) {
        //to work around occasional floating point math artifacts, round super small values to 0.
        self._totalTime = self._time = 0;

        if (time > -_tinyNum) {
          time = 0;
        }

        if (prevTime !== 0 || self._duration === 0 && self._rawPrevTime !== _tinyNum && (self._rawPrevTime > 0 || time < 0 && self._rawPrevTime >= 0)) {
          callback = "onReverseComplete";
          isComplete = self._reversed;
        }

        if (time < 0) {
          self._active = false;

          if (self._timeline.autoRemoveChildren && self._reversed) {
            //ensures proper GC if a timeline is resumed after it's finished reversing.
            internalForce = isComplete = true;
            callback = "onReverseComplete";
          } else if (self._rawPrevTime >= 0 && self._first) {
            //when going back beyond the start, force a render so that zero-duration tweens that sit at the very beginning render their start values properly. Otherwise, if the parent timeline's playhead lands exactly at this timeline's startTime, and then moves backwards, the zero-duration tweens at the beginning would still be at their end state.
            internalForce = true;
          }

          self._rawPrevTime = time;
        } else {
          self._rawPrevTime = self._duration || !suppressEvents || time || self._rawPrevTime === time ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline or tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.

          if (time === 0 && isComplete) {
            //if there's a zero-duration tween at the very beginning of a timeline and the playhead lands EXACTLY at time 0, that tween will correctly render its end values, but we need to keep the timeline alive for one more render so that the beginning values render properly as the parent's playhead keeps moving beyond the begining. Imagine obj.x starts at 0 and then we do tl.set(obj, {x:100}).to(obj, 1, {x:200}) and then later we tl.reverse()...the goal is to have obj.x revert to 0. If the playhead happens to land on exactly 0, without this chunk of code, it'd complete the timeline and remove it from the rendering queue (not good).
            tween = self._first;

            while (tween && tween._startTime === 0) {
              if (!tween._duration) {
                isComplete = false;
              }

              tween = tween._next;
            }
          }

          time = 0; //to avoid occasional floating point rounding errors (could cause problems especially with zero-duration tweens at the very beginning of the timeline)

          if (!self._initted) {
            internalForce = true;
          }
        }
      } else {
        self._totalTime = self._time = self._rawPrevTime = time;
      }

      if ((self._time === prevTime || !self._first) && !force && !internalForce && !pauseTween) {
        return;
      } else if (!self._initted) {
        self._initted = true;
      }

      if (!self._active) if (!self._paused && self._time !== prevTime && time > 0) {
        self._active = true; //so that if the user renders the timeline (as opposed to the parent timeline rendering it), it is forced to re-render and align it with the proper time/frame on the next rendering cycle. Maybe the timeline already finished but the user manually re-renders it as halfway done, for example.
      }
      if (prevTime === 0) if (self.vars.onStart) if (self._time !== 0 || !self._duration) if (!suppressEvents) {
        self._callback("onStart");
      }
      curTime = self._time;

      if (curTime >= prevTime) {
        tween = self._first;

        while (tween) {
          next = tween._next; //record it here because the value could change after rendering...

          if (curTime !== self._time || self._paused && !prevPaused) {
            //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
            break;
          } else if (tween._active || tween._startTime <= curTime && !tween._paused && !tween._gc) {
            if (pauseTween === tween) {
              self.pause();
              self._pauseTime = pauseTime; //so that when we resume(), it's starting from exactly the right spot (the pause() method uses the rawTime for the parent, but that may be a bit too far ahead)
            }

            if (!tween._reversed) {
              tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force);
            } else {
              tween.render((!tween._dirty ? tween._totalDuration : tween.totalDuration()) - (time - tween._startTime) * tween._timeScale, suppressEvents, force);
            }
          }

          tween = next;
        }
      } else {
        tween = self._last;

        while (tween) {
          next = tween._prev; //record it here because the value could change after rendering...

          if (curTime !== self._time || self._paused && !prevPaused) {
            //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
            break;
          } else if (tween._active || tween._startTime <= prevTime && !tween._paused && !tween._gc) {
            if (pauseTween === tween) {
              pauseTween = tween._prev; //the linked list is organized by _startTime, thus it's possible that a tween could start BEFORE the pause and end after it, in which case it would be positioned before the pause tween in the linked list, but we should render it before we pause() the timeline and cease rendering. This is only a concern when going in reverse.

              while (pauseTween && pauseTween.endTime() > self._time) {
                pauseTween.render(pauseTween._reversed ? pauseTween.totalDuration() - (time - pauseTween._startTime) * pauseTween._timeScale : (time - pauseTween._startTime) * pauseTween._timeScale, suppressEvents, force);
                pauseTween = pauseTween._prev;
              }

              pauseTween = null;
              self.pause();
              self._pauseTime = pauseTime; //so that when we resume(), it's starting from exactly the right spot (the pause() method uses the rawTime for the parent, but that may be a bit too far ahead)
            }

            if (!tween._reversed) {
              tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force);
            } else {
              tween.render((!tween._dirty ? tween._totalDuration : tween.totalDuration()) - (time - tween._startTime) * tween._timeScale, suppressEvents, force);
            }
          }

          tween = next;
        }
      }

      if (self._onUpdate) if (!suppressEvents) {
        if (_lazyTweens.length) {
          //in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onUpdate on a timeline that reports/checks tweened values.
          _lazyRender();
        }

        self._callback("onUpdate");
      }
      if (callback) if (!self._gc) if (prevStart === self._startTime || prevTimeScale !== self._timeScale) if (self._time === 0 || totalDur >= self.totalDuration()) {
        //if one of the tweens that was rendered altered this timeline's startTime (like if an onComplete reversed the timeline), it probably isn't complete. If it is, don't worry, because whatever call altered the startTime would complete if it was necessary at the new time. The only exception is the timeScale property. Also check _gc because there's a chance that kill() could be called in an onUpdate
        if (isComplete) {
          if (_lazyTweens.length) {
            //in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onComplete on a timeline that reports/checks tweened values.
            _lazyRender();
          }

          if (self._timeline.autoRemoveChildren) {
            self._enabled(false, false);
          }

          self._active = false;
        }

        if (!suppressEvents && self.vars[callback]) {
          self._callback(callback);
        }
      }
    };

    p._hasPausedChild = function () {
      var tween = this._first;

      while (tween) {
        if (tween._paused || tween instanceof TimelineLite && tween._hasPausedChild()) {
          return true;
        }

        tween = tween._next;
      }

      return false;
    };

    p.getChildren = function (nested, tweens, timelines, ignoreBeforeTime) {
      ignoreBeforeTime = ignoreBeforeTime || -9999999999;
      var a = [],
          tween = this._first,
          cnt = 0;

      while (tween) {
        if (tween._startTime < ignoreBeforeTime) {//do nothing
        } else if (tween instanceof TweenLite) {
          if (tweens !== false) {
            a[cnt++] = tween;
          }
        } else {
          if (timelines !== false) {
            a[cnt++] = tween;
          }

          if (nested !== false) {
            a = a.concat(tween.getChildren(true, tweens, timelines));
            cnt = a.length;
          }
        }

        tween = tween._next;
      }

      return a;
    };

    p.getTweensOf = function (target, nested) {
      var disabled = this._gc,
          a = [],
          cnt = 0,
          tweens,
          i;

      if (disabled) {
        this._enabled(true, true); //getTweensOf() filters out disabled tweens, and we have to mark them as _gc = true when the timeline completes in order to allow clean garbage collection, so temporarily re-enable the timeline here.

      }

      tweens = TweenLite.getTweensOf(target);
      i = tweens.length;

      while (--i > -1) {
        if (tweens[i].timeline === this || nested && this._contains(tweens[i])) {
          a[cnt++] = tweens[i];
        }
      }

      if (disabled) {
        this._enabled(false, true);
      }

      return a;
    };

    p.recent = function () {
      return this._recent;
    };

    p._contains = function (tween) {
      var tl = tween.timeline;

      while (tl) {
        if (tl === this) {
          return true;
        }

        tl = tl.timeline;
      }

      return false;
    };

    p.shiftChildren = function (amount, adjustLabels, ignoreBeforeTime) {
      ignoreBeforeTime = ignoreBeforeTime || 0;
      var tween = this._first,
          labels = this._labels,
          p;

      while (tween) {
        if (tween._startTime >= ignoreBeforeTime) {
          tween._startTime += amount;
        }

        tween = tween._next;
      }

      if (adjustLabels) {
        for (p in labels) {
          if (labels[p] >= ignoreBeforeTime) {
            labels[p] += amount;
          }
        }
      }

      return this._uncache(true);
    };

    p._kill = function (vars, target) {
      if (!vars && !target) {
        return this._enabled(false, false);
      }

      var tweens = !target ? this.getChildren(true, true, false) : this.getTweensOf(target),
          i = tweens.length,
          changed = false;

      while (--i > -1) {
        if (tweens[i]._kill(vars, target)) {
          changed = true;
        }
      }

      return changed;
    };

    p.clear = function (labels) {
      var tweens = this.getChildren(false, true, true),
          i = tweens.length;
      this._time = this._totalTime = 0;

      while (--i > -1) {
        tweens[i]._enabled(false, false);
      }

      if (labels !== false) {
        this._labels = {};
      }

      return this._uncache(true);
    };

    p.invalidate = function () {
      var tween = this._first;

      while (tween) {
        tween.invalidate();
        tween = tween._next;
      }

      return Animation.prototype.invalidate.call(this);
      ;
    };

    p._enabled = function (enabled, ignoreTimeline) {
      if (enabled === this._gc) {
        var tween = this._first;

        while (tween) {
          tween._enabled(enabled, true);

          tween = tween._next;
        }
      }

      return SimpleTimeline.prototype._enabled.call(this, enabled, ignoreTimeline);
    };

    p.totalTime = function (time, suppressEvents, uncapped) {
      this._forcingPlayhead = true;
      var val = Animation.prototype.totalTime.apply(this, arguments);
      this._forcingPlayhead = false;
      return val;
    };

    p.duration = function (value) {
      if (!arguments.length) {
        if (this._dirty) {
          this.totalDuration(); //just triggers recalculation
        }

        return this._duration;
      }

      if (this.duration() !== 0 && value !== 0) {
        this.timeScale(this._duration / value);
      }

      return this;
    };

    p.totalDuration = function (value) {
      if (!arguments.length) {
        if (this._dirty) {
          var max = 0,
              self = this,
              tween = self._last,
              prevStart = 999999999999,
              prev,
              end;

          while (tween) {
            prev = tween._prev; //record it here in case the tween changes position in the sequence...

            if (tween._dirty) {
              tween.totalDuration(); //could change the tween._startTime, so make sure the tween's cache is clean before analyzing it.
            }

            if (tween._startTime > prevStart && self._sortChildren && !tween._paused && !self._calculatingDuration) {
              //in case one of the tweens shifted out of order, it needs to be re-inserted into the correct position in the sequence
              self._calculatingDuration = 1; //prevent endless recursive calls - there are methods that get triggered that check duration/totalDuration when we add(), like _parseTimeOrLabel().

              self.add(tween, tween._startTime - tween._delay);
              self._calculatingDuration = 0;
            } else {
              prevStart = tween._startTime;
            }

            if (tween._startTime < 0 && !tween._paused) {
              //children aren't allowed to have negative startTimes unless smoothChildTiming is true, so adjust here if one is found.
              max -= tween._startTime;

              if (self._timeline.smoothChildTiming) {
                self._startTime += tween._startTime / self._timeScale;
                self._time -= tween._startTime;
                self._totalTime -= tween._startTime;
                self._rawPrevTime -= tween._startTime;
              }

              self.shiftChildren(-tween._startTime, false, -9999999999);
              prevStart = 0;
            }

            end = tween._startTime + tween._totalDuration / tween._timeScale;

            if (end > max) {
              max = end;
            }

            tween = prev;
          }

          self._duration = self._totalDuration = max;
          self._dirty = false;
        }

        return this._totalDuration;
      }

      return value && this.totalDuration() ? this.timeScale(this._totalDuration / value) : this;
    };

    p.paused = function (value) {
      if (value === false && this._paused) {
        //if there's a pause directly at the spot from where we're unpausing, skip it.
        var tween = this._first;

        while (tween) {
          if (tween._startTime === this._time && tween.data === "isPause") {
            tween._rawPrevTime = 0; //remember, _rawPrevTime is how zero-duration tweens/callbacks sense directionality and determine whether or not to fire. If _rawPrevTime is the same as _startTime on the next render, it won't fire.
          }

          tween = tween._next;
        }
      }

      return Animation.prototype.paused.apply(this, arguments);
    };

    p.usesFrames = function () {
      var tl = this._timeline;

      while (tl._timeline) {
        tl = tl._timeline;
      }

      return tl === Animation._rootFramesTimeline;
    };

    p.rawTime = function (wrapRepeats) {
      return wrapRepeats && (this._paused || this._repeat && this.time() > 0 && this.totalProgress() < 1) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(wrapRepeats) - this._startTime) * this._timeScale;
    };

    return TimelineLite;
  }, true);
  /*
   * ----------------------------------------------------------------
   * TimelineMax
   * ----------------------------------------------------------------
   */


  _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function (TimelineLite, TweenLite, Ease) {
    var TimelineMax = function TimelineMax(vars) {
      TimelineLite.call(this, vars);
      this._repeat = this.vars.repeat || 0;
      this._repeatDelay = this.vars.repeatDelay || 0;
      this._cycle = 0;
      this._yoyo = !!this.vars.yoyo;
      this._dirty = true;
    },
        _tinyNum = 0.00000001,
        TweenLiteInternals = TweenLite._internals,
        _lazyTweens = TweenLiteInternals.lazyTweens,
        _lazyRender = TweenLiteInternals.lazyRender,
        _globals = _gsScope._gsDefine.globals,
        _easeNone = new Ease(null, null, 1, 0),
        p = TimelineMax.prototype = new TimelineLite();

    p.constructor = TimelineMax;
    p.kill()._gc = false;
    TimelineMax.version = "2.1.3";

    p.invalidate = function () {
      this._yoyo = !!this.vars.yoyo;
      this._repeat = this.vars.repeat || 0;
      this._repeatDelay = this.vars.repeatDelay || 0;

      this._uncache(true);

      return TimelineLite.prototype.invalidate.call(this);
    };

    p.addCallback = function (callback, position, params, scope) {
      return this.add(TweenLite.delayedCall(0, callback, params, scope), position);
    };

    p.removeCallback = function (callback, position) {
      if (callback) {
        if (position == null) {
          this._kill(null, callback);
        } else {
          var a = this.getTweensOf(callback, false),
              i = a.length,
              time = this._parseTimeOrLabel(position);

          while (--i > -1) {
            if (a[i]._startTime === time) {
              a[i]._enabled(false, false);
            }
          }
        }
      }

      return this;
    };

    p.removePause = function (position) {
      return this.removeCallback(TimelineLite._internals.pauseCallback, position);
    };

    p.tweenTo = function (position, vars) {
      vars = vars || {};
      var copy = {
        ease: _easeNone,
        useFrames: this.usesFrames(),
        immediateRender: false,
        lazy: false
      },
          Engine = vars.repeat && _globals.TweenMax || TweenLite,
          duration,
          p,
          t;

      for (p in vars) {
        copy[p] = vars[p];
      }

      copy.time = this._parseTimeOrLabel(position);
      duration = Math.abs(Number(copy.time) - this._time) / this._timeScale || 0.001;
      t = new Engine(this, duration, copy);

      copy.onStart = function () {
        t.target.paused(true);

        if (t.vars.time !== t.target.time() && duration === t.duration() && !t.isFromTo) {
          //don't make the duration zero - if it's supposed to be zero, don't worry because it's already initting the tween and will complete immediately, effectively making the duration zero anyway. If we make duration zero, the tween won't run at all.
          t.duration(Math.abs(t.vars.time - t.target.time()) / t.target._timeScale).render(t.time(), true, true); //render() right away to ensure that things look right, especially in the case of .tweenTo(0).
        }

        if (vars.onStart) {
          //in case the user had an onStart in the vars - we don't want to overwrite it.
          vars.onStart.apply(vars.onStartScope || vars.callbackScope || t, vars.onStartParams || []); //don't use t._callback("onStart") or it'll point to the copy.onStart and we'll get a recursion error.
        }
      };

      return t;
    };

    p.tweenFromTo = function (fromPosition, toPosition, vars) {
      vars = vars || {};
      fromPosition = this._parseTimeOrLabel(fromPosition);
      vars.startAt = {
        onComplete: this.seek,
        onCompleteParams: [fromPosition],
        callbackScope: this
      };
      vars.immediateRender = vars.immediateRender !== false;
      var t = this.tweenTo(toPosition, vars);
      t.isFromTo = 1; //to ensure we don't mess with the duration in the onStart (we've got the start and end values here, so lock it in)

      return t.duration(Math.abs(t.vars.time - fromPosition) / this._timeScale || 0.001);
    };

    p.render = function (time, suppressEvents, force) {
      if (this._gc) {
        this._enabled(true, false);
      }

      var self = this,
          prevTime = self._time,
          totalDur = !self._dirty ? self._totalDuration : self.totalDuration(),
          dur = self._duration,
          prevTotalTime = self._totalTime,
          prevStart = self._startTime,
          prevTimeScale = self._timeScale,
          prevRawPrevTime = self._rawPrevTime,
          prevPaused = self._paused,
          prevCycle = self._cycle,
          tween,
          isComplete,
          next,
          callback,
          internalForce,
          cycleDuration,
          pauseTween,
          curTime,
          pauseTime;

      if (prevTime !== self._time) {
        //if totalDuration() finds a child with a negative startTime and smoothChildTiming is true, things get shifted around internally so we need to adjust the time accordingly. For example, if a tween starts at -30 we must shift EVERYTHING forward 30 seconds and move this timeline's startTime backward by 30 seconds so that things align with the playhead (no jump).
        time += self._time - prevTime;
      }

      if (time >= totalDur - _tinyNum && time >= 0) {
        //to work around occasional floating point math artifacts.
        if (!self._locked) {
          self._totalTime = totalDur;
          self._cycle = self._repeat;
        }

        if (!self._reversed) if (!self._hasPausedChild()) {
          isComplete = true;
          callback = "onComplete";
          internalForce = !!self._timeline.autoRemoveChildren; //otherwise, if the animation is unpaused/activated after it's already finished, it doesn't get removed from the parent timeline.

          if (self._duration === 0) if (time <= 0 && time >= -_tinyNum || prevRawPrevTime < 0 || prevRawPrevTime === _tinyNum) if (prevRawPrevTime !== time && self._first) {
            internalForce = true;

            if (prevRawPrevTime > _tinyNum) {
              callback = "onReverseComplete";
            }
          }
        }
        self._rawPrevTime = self._duration || !suppressEvents || time || self._rawPrevTime === time ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline or tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.

        if (self._yoyo && self._cycle & 1) {
          self._time = time = 0;
        } else {
          self._time = dur;
          time = dur + 0.0001; //to avoid occasional floating point rounding errors - sometimes child tweens/timelines were not being fully completed (their progress might be 0.999999999999998 instead of 1 because when _time - tween._startTime is performed, floating point errors would return a value that was SLIGHTLY off). Try (999999999999.7 - 999999999999) * 1 = 0.699951171875 instead of 0.7. We cannot do less then 0.0001 because the same issue can occur when the duration is extremely large like 999999999999 in which case adding 0.00000001, for example, causes it to act like nothing was added.
        }
      } else if (time < _tinyNum) {
        //to work around occasional floating point math artifacts, round super small values to 0.
        if (!self._locked) {
          self._totalTime = self._cycle = 0;
        }

        self._time = 0;

        if (time > -_tinyNum) {
          time = 0;
        }

        if (prevTime !== 0 || dur === 0 && prevRawPrevTime !== _tinyNum && (prevRawPrevTime > 0 || time < 0 && prevRawPrevTime >= 0) && !self._locked) {
          //edge case for checking time < 0 && prevRawPrevTime >= 0: a zero-duration fromTo() tween inside a zero-duration timeline (yeah, very rare)
          callback = "onReverseComplete";
          isComplete = self._reversed;
        }

        if (time < 0) {
          self._active = false;

          if (self._timeline.autoRemoveChildren && self._reversed) {
            internalForce = isComplete = true;
            callback = "onReverseComplete";
          } else if (prevRawPrevTime >= 0 && self._first) {
            //when going back beyond the start, force a render so that zero-duration tweens that sit at the very beginning render their start values properly. Otherwise, if the parent timeline's playhead lands exactly at this timeline's startTime, and then moves backwards, the zero-duration tweens at the beginning would still be at their end state.
            internalForce = true;
          }

          self._rawPrevTime = time;
        } else {
          self._rawPrevTime = dur || !suppressEvents || time || self._rawPrevTime === time ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline or tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.

          if (time === 0 && isComplete) {
            //if there's a zero-duration tween at the very beginning of a timeline and the playhead lands EXACTLY at time 0, that tween will correctly render its end values, but we need to keep the timeline alive for one more render so that the beginning values render properly as the parent's playhead keeps moving beyond the begining. Imagine obj.x starts at 0 and then we do tl.set(obj, {x:100}).to(obj, 1, {x:200}) and then later we tl.reverse()...the goal is to have obj.x revert to 0. If the playhead happens to land on exactly 0, without this chunk of code, it'd complete the timeline and remove it from the rendering queue (not good).
            tween = self._first;

            while (tween && tween._startTime === 0) {
              if (!tween._duration) {
                isComplete = false;
              }

              tween = tween._next;
            }
          }

          time = 0; //to avoid occasional floating point rounding errors (could cause problems especially with zero-duration tweens at the very beginning of the timeline)

          if (!self._initted) {
            internalForce = true;
          }
        }
      } else {
        if (dur === 0 && prevRawPrevTime < 0) {
          //without this, zero-duration repeating timelines (like with a simple callback nested at the very beginning and a repeatDelay) wouldn't render the first time through.
          internalForce = true;
        }

        self._time = self._rawPrevTime = time;

        if (!self._locked) {
          self._totalTime = time;

          if (self._repeat !== 0) {
            cycleDuration = dur + self._repeatDelay;
            self._cycle = self._totalTime / cycleDuration >> 0; //originally _totalTime % cycleDuration but floating point errors caused problems, so I normalized it. (4 % 0.8 should be 0 but it gets reported as 0.79999999!)

            if (self._cycle) if (self._cycle === self._totalTime / cycleDuration && prevTotalTime <= time) {
              self._cycle--; //otherwise when rendered exactly at the end time, it will act as though it is repeating (at the beginning)
            }
            self._time = self._totalTime - self._cycle * cycleDuration;
            if (self._yoyo) if (self._cycle & 1) {
              self._time = dur - self._time;
            }

            if (self._time > dur) {
              self._time = dur;
              time = dur + 0.0001; //to avoid occasional floating point rounding error
            } else if (self._time < 0) {
              self._time = time = 0;
            } else {
              time = self._time;
            }
          }
        }
      }

      if (self._hasPause && !self._forcingPlayhead && !suppressEvents) {
        time = self._time;

        if (time > prevTime || self._repeat && prevCycle !== self._cycle) {
          tween = self._first;

          while (tween && tween._startTime <= time && !pauseTween) {
            if (!tween._duration) if (tween.data === "isPause" && !tween.ratio && !(tween._startTime === 0 && self._rawPrevTime === 0)) {
              pauseTween = tween;
            }
            tween = tween._next;
          }
        } else {
          tween = self._last;

          while (tween && tween._startTime >= time && !pauseTween) {
            if (!tween._duration) if (tween.data === "isPause" && tween._rawPrevTime > 0) {
              pauseTween = tween;
            }
            tween = tween._prev;
          }
        }

        if (pauseTween) {
          pauseTime = self._startTime + (self._reversed ? self._duration - pauseTween._startTime : pauseTween._startTime) / self._timeScale;

          if (pauseTween._startTime < dur) {
            self._time = self._rawPrevTime = time = pauseTween._startTime;
            self._totalTime = time + self._cycle * (self._totalDuration + self._repeatDelay);
          }
        }
      }

      if (self._cycle !== prevCycle) if (!self._locked) {
        /*
        make sure children at the end/beginning of the timeline are rendered properly. If, for example,
        a 3-second long timeline rendered at 2.9 seconds previously, and now renders at 3.2 seconds (which
        would get translated to 2.8 seconds if the timeline yoyos or 0.2 seconds if it just repeats), there
        could be a callback or a short tween that's at 2.95 or 3 seconds in which wouldn't render. So
        we need to push the timeline to the end (and/or beginning depending on its yoyo value). Also we must
        ensure that zero-duration tweens at the very beginning or end of the TimelineMax work.
        */
        var backwards = self._yoyo && (prevCycle & 1) !== 0,
            wrap = backwards === (self._yoyo && (self._cycle & 1) !== 0),
            recTotalTime = self._totalTime,
            recCycle = self._cycle,
            recRawPrevTime = self._rawPrevTime,
            recTime = self._time;
        self._totalTime = prevCycle * dur;

        if (self._cycle < prevCycle) {
          backwards = !backwards;
        } else {
          self._totalTime += dur;
        }

        self._time = prevTime; //temporarily revert _time so that render() renders the children in the correct order. Without this, tweens won't rewind correctly. We could arhictect things in a "cleaner" way by splitting out the rendering queue into a separate method but for performance reasons, we kept it all inside this method.

        self._rawPrevTime = dur === 0 ? prevRawPrevTime - 0.0001 : prevRawPrevTime;
        self._cycle = prevCycle;
        self._locked = true; //prevents changes to totalTime and skips repeat/yoyo behavior when we recursively call render()

        prevTime = backwards ? 0 : dur;
        self.render(prevTime, suppressEvents, dur === 0);
        if (!suppressEvents) if (!self._gc) {
          if (self.vars.onRepeat) {
            self._cycle = recCycle; //in case the onRepeat alters the playhead or invalidates(), we shouldn't stay locked or use the previous cycle.

            self._locked = false;

            self._callback("onRepeat");
          }
        }

        if (prevTime !== self._time) {
          //in case there's a callback like onComplete in a nested tween/timeline that changes the playhead position, like via seek(), we should just abort.
          return;
        }

        if (wrap) {
          self._cycle = prevCycle; //if there's an onRepeat, we reverted this above, so make sure it's set properly again. We also unlocked in that scenario, so reset that too.

          self._locked = true;
          prevTime = backwards ? dur + 0.0001 : -0.0001;
          self.render(prevTime, true, false);
        }

        self._locked = false;

        if (self._paused && !prevPaused) {
          //if the render() triggered callback that paused this timeline, we should abort (very rare, but possible)
          return;
        }

        self._time = recTime;
        self._totalTime = recTotalTime;
        self._cycle = recCycle;
        self._rawPrevTime = recRawPrevTime;
      }

      if ((self._time === prevTime || !self._first) && !force && !internalForce && !pauseTween) {
        if (prevTotalTime !== self._totalTime) if (self._onUpdate) if (!suppressEvents) {
          //so that onUpdate fires even during the repeatDelay - as long as the totalTime changed, we should trigger onUpdate.
          self._callback("onUpdate");
        }
        return;
      } else if (!self._initted) {
        self._initted = true;
      }

      if (!self._active) if (!self._paused && self._totalTime !== prevTotalTime && time > 0) {
        self._active = true; //so that if the user renders the timeline (as opposed to the parent timeline rendering it), it is forced to re-render and align it with the proper time/frame on the next rendering cycle. Maybe the timeline already finished but the user manually re-renders it as halfway done, for example.
      }
      if (prevTotalTime === 0) if (self.vars.onStart) if (self._totalTime !== 0 || !self._totalDuration) if (!suppressEvents) {
        self._callback("onStart");
      }
      curTime = self._time;

      if (curTime >= prevTime) {
        tween = self._first;

        while (tween) {
          next = tween._next; //record it here because the value could change after rendering...

          if (curTime !== self._time || self._paused && !prevPaused) {
            //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
            break;
          } else if (tween._active || tween._startTime <= self._time && !tween._paused && !tween._gc) {
            if (pauseTween === tween) {
              self.pause();
              self._pauseTime = pauseTime; //so that when we resume(), it's starting from exactly the right spot (the pause() method uses the rawTime for the parent, but that may be a bit too far ahead)
            }

            if (!tween._reversed) {
              tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force);
            } else {
              tween.render((!tween._dirty ? tween._totalDuration : tween.totalDuration()) - (time - tween._startTime) * tween._timeScale, suppressEvents, force);
            }
          }

          tween = next;
        }
      } else {
        tween = self._last;

        while (tween) {
          next = tween._prev; //record it here because the value could change after rendering...

          if (curTime !== self._time || self._paused && !prevPaused) {
            //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
            break;
          } else if (tween._active || tween._startTime <= prevTime && !tween._paused && !tween._gc) {
            if (pauseTween === tween) {
              pauseTween = tween._prev; //the linked list is organized by _startTime, thus it's possible that a tween could start BEFORE the pause and end after it, in which case it would be positioned before the pause tween in the linked list, but we should render it before we pause() the timeline and cease rendering. This is only a concern when going in reverse.

              while (pauseTween && pauseTween.endTime() > self._time) {
                pauseTween.render(pauseTween._reversed ? pauseTween.totalDuration() - (time - pauseTween._startTime) * pauseTween._timeScale : (time - pauseTween._startTime) * pauseTween._timeScale, suppressEvents, force);
                pauseTween = pauseTween._prev;
              }

              pauseTween = null;
              self.pause();
              self._pauseTime = pauseTime; //so that when we resume(), it's starting from exactly the right spot (the pause() method uses the rawTime for the parent, but that may be a bit too far ahead)
            }

            if (!tween._reversed) {
              tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force);
            } else {
              tween.render((!tween._dirty ? tween._totalDuration : tween.totalDuration()) - (time - tween._startTime) * tween._timeScale, suppressEvents, force);
            }
          }

          tween = next;
        }
      }

      if (self._onUpdate) if (!suppressEvents) {
        if (_lazyTweens.length) {
          //in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onUpdate on a timeline that reports/checks tweened values.
          _lazyRender();
        }

        self._callback("onUpdate");
      }
      if (callback) if (!self._locked) if (!self._gc) if (prevStart === self._startTime || prevTimeScale !== self._timeScale) if (self._time === 0 || totalDur >= self.totalDuration()) {
        //if one of the tweens that was rendered altered this timeline's startTime (like if an onComplete reversed the timeline), it probably isn't complete. If it is, don't worry, because whatever call altered the startTime would complete if it was necessary at the new time. The only exception is the timeScale property. Also check _gc because there's a chance that kill() could be called in an onUpdate
        if (isComplete) {
          if (_lazyTweens.length) {
            //in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onComplete on a timeline that reports/checks tweened values.
            _lazyRender();
          }

          if (self._timeline.autoRemoveChildren) {
            self._enabled(false, false);
          }

          self._active = false;
        }

        if (!suppressEvents && self.vars[callback]) {
          self._callback(callback);
        }
      }
    };

    p.getActive = function (nested, tweens, timelines) {
      var a = [],
          all = this.getChildren(nested || nested == null, tweens || nested == null, !!timelines),
          cnt = 0,
          l = all.length,
          i,
          tween;

      for (i = 0; i < l; i++) {
        tween = all[i];

        if (tween.isActive()) {
          a[cnt++] = tween;
        }
      }

      return a;
    };

    p.getLabelAfter = function (time) {
      if (!time) if (time !== 0) {
        //faster than isNan()
        time = this._time;
      }
      var labels = this.getLabelsArray(),
          l = labels.length,
          i;

      for (i = 0; i < l; i++) {
        if (labels[i].time > time) {
          return labels[i].name;
        }
      }

      return null;
    };

    p.getLabelBefore = function (time) {
      if (time == null) {
        time = this._time;
      }

      var labels = this.getLabelsArray(),
          i = labels.length;

      while (--i > -1) {
        if (labels[i].time < time) {
          return labels[i].name;
        }
      }

      return null;
    };

    p.getLabelsArray = function () {
      var a = [],
          cnt = 0,
          p;

      for (p in this._labels) {
        a[cnt++] = {
          time: this._labels[p],
          name: p
        };
      }

      a.sort(function (a, b) {
        return a.time - b.time;
      });
      return a;
    };

    p.invalidate = function () {
      this._locked = false; //unlock and set cycle in case invalidate() is called from inside an onRepeat

      return TimelineLite.prototype.invalidate.call(this);
    }; //---- GETTERS / SETTERS -------------------------------------------------------------------------------------------------------


    p.progress = function (value, suppressEvents) {
      return !arguments.length ? this._time / this.duration() || 0 : this.totalTime(this.duration() * (this._yoyo && (this._cycle & 1) !== 0 ? 1 - value : value) + this._cycle * (this._duration + this._repeatDelay), suppressEvents);
    };

    p.totalProgress = function (value, suppressEvents) {
      return !arguments.length ? this._totalTime / this.totalDuration() || 0 : this.totalTime(this.totalDuration() * value, suppressEvents);
    };

    p.totalDuration = function (value) {
      if (!arguments.length) {
        if (this._dirty) {
          TimelineLite.prototype.totalDuration.call(this); //just forces refresh
          //Instead of Infinity, we use 999999999999 so that we can accommodate reverses.

          this._totalDuration = this._repeat === -1 ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat;
        }

        return this._totalDuration;
      }

      return this._repeat === -1 || !value ? this : this.timeScale(this.totalDuration() / value);
    };

    p.time = function (value, suppressEvents) {
      if (!arguments.length) {
        return this._time;
      }

      if (this._dirty) {
        this.totalDuration();
      }

      var duration = this._duration,
          cycle = this._cycle,
          cycleDur = cycle * (duration + this._repeatDelay);

      if (value > duration) {
        value = duration;
      }

      return this.totalTime(this._yoyo && cycle & 1 ? duration - value + cycleDur : this._repeat ? value + cycleDur : value, suppressEvents);
    };

    p.repeat = function (value) {
      if (!arguments.length) {
        return this._repeat;
      }

      this._repeat = value;
      return this._uncache(true);
    };

    p.repeatDelay = function (value) {
      if (!arguments.length) {
        return this._repeatDelay;
      }

      this._repeatDelay = value;
      return this._uncache(true);
    };

    p.yoyo = function (value) {
      if (!arguments.length) {
        return this._yoyo;
      }

      this._yoyo = value;
      return this;
    };

    p.currentLabel = function (value) {
      if (!arguments.length) {
        return this.getLabelBefore(this._time + _tinyNum);
      }

      return this.seek(value, true);
    };

    return TimelineMax;
  }, true);
  /*
   * ----------------------------------------------------------------
   * BezierPlugin
   * ----------------------------------------------------------------
   */


  (function () {
    var _RAD2DEG = 180 / Math.PI,
        _r1 = [],
        _r2 = [],
        _r3 = [],
        _corProps = {},
        _globals = _gsScope._gsDefine.globals,
        Segment = function Segment(a, b, c, d) {
      if (c === d) {
        //if c and d match, the final autoRotate value could lock at -90 degrees, so differentiate them slightly.
        c = d - (d - b) / 1000000;
      }

      if (a === b) {
        //if a and b match, the starting autoRotate value could lock at -90 degrees, so differentiate them slightly.
        b = a + (c - a) / 1000000;
      }

      this.a = a;
      this.b = b;
      this.c = c;
      this.d = d;
      this.da = d - a;
      this.ca = c - a;
      this.ba = b - a;
    },
        _correlate = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
        cubicToQuadratic = function cubicToQuadratic(a, b, c, d) {
      var q1 = {
        a: a
      },
          q2 = {},
          q3 = {},
          q4 = {
        c: d
      },
          mab = (a + b) / 2,
          mbc = (b + c) / 2,
          mcd = (c + d) / 2,
          mabc = (mab + mbc) / 2,
          mbcd = (mbc + mcd) / 2,
          m8 = (mbcd - mabc) / 8;
      q1.b = mab + (a - mab) / 4;
      q2.b = mabc + m8;
      q1.c = q2.a = (q1.b + q2.b) / 2;
      q2.c = q3.a = (mabc + mbcd) / 2;
      q3.b = mbcd - m8;
      q4.b = mcd + (d - mcd) / 4;
      q3.c = q4.a = (q3.b + q4.b) / 2;
      return [q1, q2, q3, q4];
    },
        _calculateControlPoints = function _calculateControlPoints(a, curviness, quad, basic, correlate) {
      var l = a.length - 1,
          ii = 0,
          cp1 = a[0].a,
          i,
          p1,
          p2,
          p3,
          seg,
          m1,
          m2,
          mm,
          cp2,
          qb,
          r1,
          r2,
          tl;

      for (i = 0; i < l; i++) {
        seg = a[ii];
        p1 = seg.a;
        p2 = seg.d;
        p3 = a[ii + 1].d;

        if (correlate) {
          r1 = _r1[i];
          r2 = _r2[i];
          tl = (r2 + r1) * curviness * 0.25 / (basic ? 0.5 : _r3[i] || 0.5);
          m1 = p2 - (p2 - p1) * (basic ? curviness * 0.5 : r1 !== 0 ? tl / r1 : 0);
          m2 = p2 + (p3 - p2) * (basic ? curviness * 0.5 : r2 !== 0 ? tl / r2 : 0);
          mm = p2 - (m1 + ((m2 - m1) * (r1 * 3 / (r1 + r2) + 0.5) / 4 || 0));
        } else {
          m1 = p2 - (p2 - p1) * curviness * 0.5;
          m2 = p2 + (p3 - p2) * curviness * 0.5;
          mm = p2 - (m1 + m2) / 2;
        }

        m1 += mm;
        m2 += mm;
        seg.c = cp2 = m1;

        if (i !== 0) {
          seg.b = cp1;
        } else {
          seg.b = cp1 = seg.a + (seg.c - seg.a) * 0.6; //instead of placing b on a exactly, we move it inline with c so that if the user specifies an ease like Back.easeIn or Elastic.easeIn which goes BEYOND the beginning, it will do so smoothly.
        }

        seg.da = p2 - p1;
        seg.ca = cp2 - p1;
        seg.ba = cp1 - p1;

        if (quad) {
          qb = cubicToQuadratic(p1, cp1, cp2, p2);
          a.splice(ii, 1, qb[0], qb[1], qb[2], qb[3]);
          ii += 4;
        } else {
          ii++;
        }

        cp1 = m2;
      }

      seg = a[ii];
      seg.b = cp1;
      seg.c = cp1 + (seg.d - cp1) * 0.4; //instead of placing c on d exactly, we move it inline with b so that if the user specifies an ease like Back.easeOut or Elastic.easeOut which goes BEYOND the end, it will do so smoothly.

      seg.da = seg.d - seg.a;
      seg.ca = seg.c - seg.a;
      seg.ba = cp1 - seg.a;

      if (quad) {
        qb = cubicToQuadratic(seg.a, cp1, seg.c, seg.d);
        a.splice(ii, 1, qb[0], qb[1], qb[2], qb[3]);
      }
    },
        _parseAnchors = function _parseAnchors(values, p, correlate, prepend) {
      var a = [],
          l,
          i,
          p1,
          p2,
          p3,
          tmp;

      if (prepend) {
        values = [prepend].concat(values);
        i = values.length;

        while (--i > -1) {
          if (typeof (tmp = values[i][p]) === "string") if (tmp.charAt(1) === "=") {
            values[i][p] = prepend[p] + Number(tmp.charAt(0) + tmp.substr(2)); //accommodate relative values. Do it inline instead of breaking it out into a function for speed reasons
          }
        }
      }

      l = values.length - 2;

      if (l < 0) {
        a[0] = new Segment(values[0][p], 0, 0, values[0][p]);
        return a;
      }

      for (i = 0; i < l; i++) {
        p1 = values[i][p];
        p2 = values[i + 1][p];
        a[i] = new Segment(p1, 0, 0, p2);

        if (correlate) {
          p3 = values[i + 2][p];
          _r1[i] = (_r1[i] || 0) + (p2 - p1) * (p2 - p1);
          _r2[i] = (_r2[i] || 0) + (p3 - p2) * (p3 - p2);
        }
      }

      a[i] = new Segment(values[i][p], 0, 0, values[i + 1][p]);
      return a;
    },
        bezierThrough = function bezierThrough(values, curviness, quadratic, basic, correlate, prepend) {
      var obj = {},
          props = [],
          first = prepend || values[0],
          i,
          p,
          a,
          j,
          r,
          l,
          seamless,
          last;
      correlate = typeof correlate === "string" ? "," + correlate + "," : _correlate;

      if (curviness == null) {
        curviness = 1;
      }

      for (p in values[0]) {
        props.push(p);
      } //check to see if the last and first values are identical (well, within 0.05). If so, make seamless by appending the second element to the very end of the values array and the 2nd-to-last element to the very beginning (we'll remove those segments later)


      if (values.length > 1) {
        last = values[values.length - 1];
        seamless = true;
        i = props.length;

        while (--i > -1) {
          p = props[i];

          if (Math.abs(first[p] - last[p]) > 0.05) {
            //build in a tolerance of +/-0.05 to accommodate rounding errors.
            seamless = false;
            break;
          }
        }

        if (seamless) {
          values = values.concat(); //duplicate the array to avoid contaminating the original which the user may be reusing for other tweens

          if (prepend) {
            values.unshift(prepend);
          }

          values.push(values[1]);
          prepend = values[values.length - 3];
        }
      }

      _r1.length = _r2.length = _r3.length = 0;
      i = props.length;

      while (--i > -1) {
        p = props[i];
        _corProps[p] = correlate.indexOf("," + p + ",") !== -1;
        obj[p] = _parseAnchors(values, p, _corProps[p], prepend);
      }

      i = _r1.length;

      while (--i > -1) {
        _r1[i] = Math.sqrt(_r1[i]);
        _r2[i] = Math.sqrt(_r2[i]);
      }

      if (!basic) {
        i = props.length;

        while (--i > -1) {
          if (_corProps[p]) {
            a = obj[props[i]];
            l = a.length - 1;

            for (j = 0; j < l; j++) {
              r = a[j + 1].da / _r2[j] + a[j].da / _r1[j] || 0;
              _r3[j] = (_r3[j] || 0) + r * r;
            }
          }
        }

        i = _r3.length;

        while (--i > -1) {
          _r3[i] = Math.sqrt(_r3[i]);
        }
      }

      i = props.length;
      j = quadratic ? 4 : 1;

      while (--i > -1) {
        p = props[i];
        a = obj[p];

        _calculateControlPoints(a, curviness, quadratic, basic, _corProps[p]); //this method requires that _parseAnchors() and _setSegmentRatios() ran first so that _r1, _r2, and _r3 values are populated for all properties


        if (seamless) {
          a.splice(0, j);
          a.splice(a.length - j, j);
        }
      }

      return obj;
    },
        _parseBezierData = function _parseBezierData(values, type, prepend) {
      type = type || "soft";
      var obj = {},
          inc = type === "cubic" ? 3 : 2,
          soft = type === "soft",
          props = [],
          a,
          b,
          c,
          d,
          cur,
          i,
          j,
          l,
          p,
          cnt,
          tmp;

      if (soft && prepend) {
        values = [prepend].concat(values);
      }

      if (values == null || values.length < inc + 1) {
        throw "invalid Bezier data";
      }

      for (p in values[0]) {
        props.push(p);
      }

      i = props.length;

      while (--i > -1) {
        p = props[i];
        obj[p] = cur = [];
        cnt = 0;
        l = values.length;

        for (j = 0; j < l; j++) {
          a = prepend == null ? values[j][p] : typeof (tmp = values[j][p]) === "string" && tmp.charAt(1) === "=" ? prepend[p] + Number(tmp.charAt(0) + tmp.substr(2)) : Number(tmp);
          if (soft) if (j > 1) if (j < l - 1) {
            cur[cnt++] = (a + cur[cnt - 2]) / 2;
          }
          cur[cnt++] = a;
        }

        l = cnt - inc + 1;
        cnt = 0;

        for (j = 0; j < l; j += inc) {
          a = cur[j];
          b = cur[j + 1];
          c = cur[j + 2];
          d = inc === 2 ? 0 : cur[j + 3];
          cur[cnt++] = tmp = inc === 3 ? new Segment(a, b, c, d) : new Segment(a, (2 * b + a) / 3, (2 * b + c) / 3, c);
        }

        cur.length = cnt;
      }

      return obj;
    },
        _addCubicLengths = function _addCubicLengths(a, steps, resolution) {
      var inc = 1 / resolution,
          j = a.length,
          d,
          d1,
          s,
          da,
          ca,
          ba,
          p,
          i,
          inv,
          bez,
          index;

      while (--j > -1) {
        bez = a[j];
        s = bez.a;
        da = bez.d - s;
        ca = bez.c - s;
        ba = bez.b - s;
        d = d1 = 0;

        for (i = 1; i <= resolution; i++) {
          p = inc * i;
          inv = 1 - p;
          d = d1 - (d1 = (p * p * da + 3 * inv * (p * ca + inv * ba)) * p);
          index = j * resolution + i - 1;
          steps[index] = (steps[index] || 0) + d * d;
        }
      }
    },
        _parseLengthData = function _parseLengthData(obj, resolution) {
      resolution = resolution >> 0 || 6;
      var a = [],
          lengths = [],
          d = 0,
          total = 0,
          threshold = resolution - 1,
          segments = [],
          curLS = [],
          //current length segments array
      p,
          i,
          l,
          index;

      for (p in obj) {
        _addCubicLengths(obj[p], a, resolution);
      }

      l = a.length;

      for (i = 0; i < l; i++) {
        d += Math.sqrt(a[i]);
        index = i % resolution;
        curLS[index] = d;

        if (index === threshold) {
          total += d;
          index = i / resolution >> 0;
          segments[index] = curLS;
          lengths[index] = total;
          d = 0;
          curLS = [];
        }
      }

      return {
        length: total,
        lengths: lengths,
        segments: segments
      };
    },
        BezierPlugin = _gsScope._gsDefine.plugin({
      propName: "bezier",
      priority: -1,
      version: "1.3.9",
      API: 2,
      global: true,
      //gets called when the tween renders for the first time. This is where initial values should be recorded and any setup routines should run.
      init: function init(target, vars, tween) {
        this._target = target;

        if (vars instanceof Array) {
          vars = {
            values: vars
          };
        }

        this._func = {};
        this._mod = {};
        this._props = [];
        this._timeRes = vars.timeResolution == null ? 6 : parseInt(vars.timeResolution, 10);
        var values = vars.values || [],
            first = {},
            second = values[0],
            autoRotate = vars.autoRotate || tween.vars.orientToBezier,
            p,
            isFunc,
            i,
            j,
            prepend;
        this._autoRotate = autoRotate ? autoRotate instanceof Array ? autoRotate : [["x", "y", "rotation", autoRotate === true ? 0 : Number(autoRotate) || 0]] : null;

        for (p in second) {
          this._props.push(p);
        }

        i = this._props.length;

        while (--i > -1) {
          p = this._props[i];

          this._overwriteProps.push(p);

          isFunc = this._func[p] = typeof target[p] === "function";
          first[p] = !isFunc ? parseFloat(target[p]) : target[p.indexOf("set") || typeof target["get" + p.substr(3)] !== "function" ? p : "get" + p.substr(3)]();
          if (!prepend) if (first[p] !== values[0][p]) {
            prepend = first;
          }
        }

        this._beziers = vars.type !== "cubic" && vars.type !== "quadratic" && vars.type !== "soft" ? bezierThrough(values, isNaN(vars.curviness) ? 1 : vars.curviness, false, vars.type === "thruBasic", vars.correlate, prepend) : _parseBezierData(values, vars.type, first);
        this._segCount = this._beziers[p].length;

        if (this._timeRes) {
          var ld = _parseLengthData(this._beziers, this._timeRes);

          this._length = ld.length;
          this._lengths = ld.lengths;
          this._segments = ld.segments;
          this._l1 = this._li = this._s1 = this._si = 0;
          this._l2 = this._lengths[0];
          this._curSeg = this._segments[0];
          this._s2 = this._curSeg[0];
          this._prec = 1 / this._curSeg.length;
        }

        if (autoRotate = this._autoRotate) {
          this._initialRotations = [];

          if (!(autoRotate[0] instanceof Array)) {
            this._autoRotate = autoRotate = [autoRotate];
          }

          i = autoRotate.length;

          while (--i > -1) {
            for (j = 0; j < 3; j++) {
              p = autoRotate[i][j];
              this._func[p] = typeof target[p] === "function" ? target[p.indexOf("set") || typeof target["get" + p.substr(3)] !== "function" ? p : "get" + p.substr(3)] : false;
            }

            p = autoRotate[i][2];
            this._initialRotations[i] = (this._func[p] ? this._func[p].call(this._target) : this._target[p]) || 0;

            this._overwriteProps.push(p);
          }
        }

        this._startRatio = tween.vars.runBackwards ? 1 : 0; //we determine the starting ratio when the tween inits which is always 0 unless the tween has runBackwards:true (indicating it's a from() tween) in which case it's 1.

        return true;
      },
      //called each time the values should be updated, and the ratio gets passed as the only parameter (typically it's a value between 0 and 1, but it can exceed those when using an ease like Elastic.easeOut or Back.easeOut, etc.)
      set: function set(v) {
        var segments = this._segCount,
            func = this._func,
            target = this._target,
            notStart = v !== this._startRatio,
            curIndex,
            inv,
            i,
            p,
            b,
            t,
            val,
            l,
            lengths,
            curSeg,
            v1;

        if (!this._timeRes) {
          curIndex = v < 0 ? 0 : v >= 1 ? segments - 1 : segments * v >> 0;
          t = (v - curIndex * (1 / segments)) * segments;
        } else {
          lengths = this._lengths;
          curSeg = this._curSeg;
          v1 = v * this._length;
          i = this._li; //find the appropriate segment (if the currently cached one isn't correct)

          if (v1 > this._l2 && i < segments - 1) {
            l = segments - 1;

            while (i < l && (this._l2 = lengths[++i]) <= v1) {}

            this._l1 = lengths[i - 1];
            this._li = i;
            this._curSeg = curSeg = this._segments[i];
            this._s2 = curSeg[this._s1 = this._si = 0];
          } else if (v1 < this._l1 && i > 0) {
            while (i > 0 && (this._l1 = lengths[--i]) >= v1) {}

            if (i === 0 && v1 < this._l1) {
              this._l1 = 0;
            } else {
              i++;
            }

            this._l2 = lengths[i];
            this._li = i;
            this._curSeg = curSeg = this._segments[i];
            this._s1 = curSeg[(this._si = curSeg.length - 1) - 1] || 0;
            this._s2 = curSeg[this._si];
          }

          curIndex = i; //now find the appropriate sub-segment (we split it into the number of pieces that was defined by "precision" and measured each one)

          v1 -= this._l1;
          i = this._si;

          if (v1 > this._s2 && i < curSeg.length - 1) {
            l = curSeg.length - 1;

            while (i < l && (this._s2 = curSeg[++i]) <= v1) {}

            this._s1 = curSeg[i - 1];
            this._si = i;
          } else if (v1 < this._s1 && i > 0) {
            while (i > 0 && (this._s1 = curSeg[--i]) >= v1) {}

            if (i === 0 && v1 < this._s1) {
              this._s1 = 0;
            } else {
              i++;
            }

            this._s2 = curSeg[i];
            this._si = i;
          }

          t = v === 1 ? 1 : (i + (v1 - this._s1) / (this._s2 - this._s1)) * this._prec || 0;
        }

        inv = 1 - t;
        i = this._props.length;

        while (--i > -1) {
          p = this._props[i];
          b = this._beziers[p][curIndex];
          val = (t * t * b.da + 3 * inv * (t * b.ca + inv * b.ba)) * t + b.a;

          if (this._mod[p]) {
            val = this._mod[p](val, target);
          }

          if (func[p]) {
            target[p](val);
          } else {
            target[p] = val;
          }
        }

        if (this._autoRotate) {
          var ar = this._autoRotate,
              b2,
              x1,
              y1,
              x2,
              y2,
              add,
              conv;
          i = ar.length;

          while (--i > -1) {
            p = ar[i][2];
            add = ar[i][3] || 0;
            conv = ar[i][4] === true ? 1 : _RAD2DEG;
            b = this._beziers[ar[i][0]];
            b2 = this._beziers[ar[i][1]];

            if (b && b2) {
              //in case one of the properties got overwritten.
              b = b[curIndex];
              b2 = b2[curIndex];
              x1 = b.a + (b.b - b.a) * t;
              x2 = b.b + (b.c - b.b) * t;
              x1 += (x2 - x1) * t;
              x2 += (b.c + (b.d - b.c) * t - x2) * t;
              y1 = b2.a + (b2.b - b2.a) * t;
              y2 = b2.b + (b2.c - b2.b) * t;
              y1 += (y2 - y1) * t;
              y2 += (b2.c + (b2.d - b2.c) * t - y2) * t;
              val = notStart ? Math.atan2(y2 - y1, x2 - x1) * conv + add : this._initialRotations[i];

              if (this._mod[p]) {
                val = this._mod[p](val, target); //for modProps
              }

              if (func[p]) {
                target[p](val);
              } else {
                target[p] = val;
              }
            }
          }
        }
      }
    }),
        p = BezierPlugin.prototype;

    BezierPlugin.bezierThrough = bezierThrough;
    BezierPlugin.cubicToQuadratic = cubicToQuadratic;
    BezierPlugin._autoCSS = true; //indicates that this plugin can be inserted into the "css" object using the autoCSS feature of TweenLite

    BezierPlugin.quadraticToCubic = function (a, b, c) {
      return new Segment(a, (2 * b + a) / 3, (2 * b + c) / 3, c);
    };

    BezierPlugin._cssRegister = function () {
      var CSSPlugin = _globals.CSSPlugin;

      if (!CSSPlugin) {
        return;
      }

      var _internals = CSSPlugin._internals,
          _parseToProxy = _internals._parseToProxy,
          _setPluginRatio = _internals._setPluginRatio,
          CSSPropTween = _internals.CSSPropTween;

      _internals._registerComplexSpecialProp("bezier", {
        parser: function parser(t, e, prop, cssp, pt, plugin) {
          if (e instanceof Array) {
            e = {
              values: e
            };
          }

          plugin = new BezierPlugin();
          var values = e.values,
              l = values.length - 1,
              pluginValues = [],
              v = {},
              i,
              p,
              data;

          if (l < 0) {
            return pt;
          }

          for (i = 0; i <= l; i++) {
            data = _parseToProxy(t, values[i], cssp, pt, plugin, l !== i);
            pluginValues[i] = data.end;
          }

          for (p in e) {
            v[p] = e[p]; //duplicate the vars object because we need to alter some things which would cause problems if the user plans to reuse the same vars object for another tween.
          }

          v.values = pluginValues;
          pt = new CSSPropTween(t, "bezier", 0, 0, data.pt, 2);
          pt.data = data;
          pt.plugin = plugin;
          pt.setRatio = _setPluginRatio;

          if (v.autoRotate === 0) {
            v.autoRotate = true;
          }

          if (v.autoRotate && !(v.autoRotate instanceof Array)) {
            i = v.autoRotate === true ? 0 : Number(v.autoRotate);
            v.autoRotate = data.end.left != null ? [["left", "top", "rotation", i, false]] : data.end.x != null ? [["x", "y", "rotation", i, false]] : false;
          }

          if (v.autoRotate) {
            if (!cssp._transform) {
              cssp._enableTransforms(false);
            }

            data.autoRotate = cssp._target._gsTransform;
            data.proxy.rotation = data.autoRotate.rotation || 0;

            cssp._overwriteProps.push("rotation");
          }

          plugin._onInitTween(data.proxy, v, cssp._tween);

          return pt;
        }
      });
    };

    p._mod = function (lookup) {
      var op = this._overwriteProps,
          i = op.length,
          val;

      while (--i > -1) {
        val = lookup[op[i]];

        if (val && typeof val === "function") {
          this._mod[op[i]] = val;
        }
      }
    };

    p._kill = function (lookup) {
      var a = this._props,
          p,
          i;

      for (p in this._beziers) {
        if (p in lookup) {
          delete this._beziers[p];
          delete this._func[p];
          i = a.length;

          while (--i > -1) {
            if (a[i] === p) {
              a.splice(i, 1);
            }
          }
        }
      }

      a = this._autoRotate;

      if (a) {
        i = a.length;

        while (--i > -1) {
          if (lookup[a[i][2]]) {
            a.splice(i, 1);
          }
        }
      }

      return this._super._kill.call(this, lookup);
    };
  })();
  /*
   * ----------------------------------------------------------------
   * CSSPlugin
   * ----------------------------------------------------------------
   */


  _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function (TweenPlugin, TweenLite) {
    /** @constructor **/
    var CSSPlugin = function CSSPlugin() {
      TweenPlugin.call(this, "css");
      this._overwriteProps.length = 0;
      this.setRatio = CSSPlugin.prototype.setRatio; //speed optimization (avoid prototype lookup on this "hot" method)
    },
        _globals = _gsScope._gsDefine.globals,
        _hasPriority,
        //turns true whenever a CSSPropTween instance is created that has a priority other than 0. This helps us discern whether or not we should spend the time organizing the linked list or not after a CSSPlugin's _onInitTween() method is called.
    _suffixMap,
        //we set this in _onInitTween() each time as a way to have a persistent variable we can use in other methods like _parse() without having to pass it around as a parameter and we keep _parse() decoupled from a particular CSSPlugin instance
    _cs,
        //computed style (we store this in a shared variable to conserve memory and make minification tighter
    _overwriteProps,
        //alias to the currently instantiating CSSPlugin's _overwriteProps array. We use this closure in order to avoid having to pass a reference around from method to method and aid in minification.
    _specialProps = {},
        p = CSSPlugin.prototype = new TweenPlugin("css");

    p.constructor = CSSPlugin;
    CSSPlugin.version = "2.1.3";
    CSSPlugin.API = 2;
    CSSPlugin.defaultTransformPerspective = 0;
    CSSPlugin.defaultSkewType = "compensated";
    CSSPlugin.defaultSmoothOrigin = true;
    p = "px"; //we'll reuse the "p" variable to keep file size down

    CSSPlugin.suffixMap = {
      top: p,
      right: p,
      bottom: p,
      left: p,
      width: p,
      height: p,
      fontSize: p,
      padding: p,
      margin: p,
      perspective: p,
      lineHeight: ""
    };

    var _numExp = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
        _relNumExp = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
        _valuesExp = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
        //finds all the values that begin with numbers or += or -= and then a number. Includes suffixes. We use this to split complex values apart like "1px 5px 20px rgb(255,102,51)"
    _valuesExpWithCommas = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b),?/gi,
        //finds all the values that begin with numbers or += or -= and then a number. Includes suffixes. We use this to split complex values apart like "1px 5px 20px rgb(255,102,51)"
    _NaNExp = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
        //also allows scientific notation and doesn't kill the leading -/+ in -= and +=
    _suffixExp = /(?:\d|\-|\+|=|#|\.)*/g,
        _opacityExp = /opacity *= *([^)]*)/i,
        _opacityValExp = /opacity:([^;]*)/i,
        _alphaFilterExp = /alpha\(opacity *=.+?\)/i,
        _rgbhslExp = /^(rgb|hsl)/,
        _capsExp = /([A-Z])/g,
        _camelExp = /-([a-z])/gi,
        _urlExp = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
        //for pulling out urls from url(...) or url("...") strings (some browsers wrap urls in quotes, some don't when reporting things like backgroundImage)
    _camelFunc = function _camelFunc(s, g) {
      return g.toUpperCase();
    },
        _horizExp = /(?:Left|Right|Width)/i,
        _ieGetMatrixExp = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
        _ieSetMatrixExp = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
        _commasOutsideParenExp = /,(?=[^\)]*(?:\(|$))/gi,
        //finds any commas that are not within parenthesis
    _complexExp = /[\s,\(]/i,
        //for testing a string to find if it has a space, comma, or open parenthesis (clues that it's a complex value)
    _DEG2RAD = Math.PI / 180,
        _RAD2DEG = 180 / Math.PI,
        _forcePT = {},
        _dummyElement = {
      style: {}
    },
        _doc = _gsScope.document || {
      createElement: function createElement() {
        return _dummyElement;
      }
    },
        _createElement = function _createElement(type, ns) {
      var e = _doc.createElementNS ? _doc.createElementNS(ns || "http://www.w3.org/1999/xhtml", type) : _doc.createElement(type);
      return e.style ? e : _doc.createElement(type); //some environments won't allow access to the element's style when created with a namespace in which case we default to the standard createElement() to work around the issue. Also note that when GSAP is embedded directly inside an SVG file, createElement() won't allow access to the style object in Firefox (see https://greensock.com/forums/topic/20215-problem-using-tweenmax-in-standalone-self-containing-svg-file-err-cannot-set-property-csstext-of-undefined/).
    },
        _tempDiv = _createElement("div"),
        _tempImg = _createElement("img"),
        _internals = CSSPlugin._internals = {
      _specialProps: _specialProps
    },
        //provides a hook to a few internal methods that we need to access from inside other plugins
    _agent = (_gsScope.navigator || {}).userAgent || "",
        _autoRound,
        _reqSafariFix,
        //we won't apply the Safari transform fix until we actually come across a tween that affects a transform property (to maintain best performance).
    _isSafari,
        _isFirefox,
        //Firefox has a bug that causes 3D transformed elements to randomly disappear unless a repaint is forced after each update on each element.
    _isSafariLT6,
        //Safari (and Android 4 which uses a flavor of Safari) has a bug that prevents changes to "top" and "left" properties from rendering properly if changed on the same frame as a transform UNLESS we set the element's WebkitBackfaceVisibility to hidden (weird, I know). Doing this for Android 3 and earlier seems to actually cause other problems, though (fun!)
    _ieVers,
        _supportsOpacity = function () {
      //we set _isSafari, _ieVers, _isFirefox, and _supportsOpacity all in one function here to reduce file size slightly, especially in the minified version.
      var i = _agent.indexOf("Android"),
          a = _createElement("a");

      _isSafari = _agent.indexOf("Safari") !== -1 && _agent.indexOf("Chrome") === -1 && (i === -1 || parseFloat(_agent.substr(i + 8, 2)) > 3);
      _isSafariLT6 = _isSafari && parseFloat(_agent.substr(_agent.indexOf("Version/") + 8, 2)) < 6;
      _isFirefox = _agent.indexOf("Firefox") !== -1;

      if (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(_agent) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(_agent)) {
        _ieVers = parseFloat(RegExp.$1);
      }

      if (!a) {
        return false;
      }

      a.style.cssText = "top:1px;opacity:.55;";
      return /^0.55/.test(a.style.opacity);
    }(),
        _getIEOpacity = function _getIEOpacity(v) {
      return _opacityExp.test(typeof v === "string" ? v : (v.currentStyle ? v.currentStyle.filter : v.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1;
    },
        _log = function _log(s) {
      //for logging messages, but in a way that won't throw errors in old versions of IE.
      if (_gsScope.console) {
        console.log(s);
      }
    },
        _target,
        //when initting a CSSPlugin, we set this variable so that we can access it from within many other functions without having to pass it around as params
    _index,
        //when initting a CSSPlugin, we set this variable so that we can access it from within many other functions without having to pass it around as params
    _prefixCSS = "",
        //the non-camelCase vendor prefix like "-o-", "-moz-", "-ms-", or "-webkit-"
    _prefix = "",
        //camelCase vendor prefix like "O", "ms", "Webkit", or "Moz".
    // @private feed in a camelCase property name like "transform" and it will check to see if it is valid as-is or if it needs a vendor prefix. It returns the corrected camelCase property name (i.e. "WebkitTransform" or "MozTransform" or "transform" or null if no such property is found, like if the browser is IE8 or before, "transform" won't be found at all)
    _checkPropPrefix = function _checkPropPrefix(p, e) {
      e = e || _tempDiv;
      var s = e.style,
          a,
          i;

      if (s[p] !== undefined) {
        return p;
      }

      p = p.charAt(0).toUpperCase() + p.substr(1);
      a = ["O", "Moz", "ms", "Ms", "Webkit"];
      i = 5;

      while (--i > -1 && s[a[i] + p] === undefined) {}

      if (i >= 0) {
        _prefix = i === 3 ? "ms" : a[i];
        _prefixCSS = "-" + _prefix.toLowerCase() + "-";
        return _prefix + p;
      }

      return null;
    },
        _computedStyleScope = typeof window !== "undefined" ? window : _doc.defaultView || {
      getComputedStyle: function getComputedStyle() {}
    },
        _getComputedStyle = function _getComputedStyle(e) {
      return _computedStyleScope.getComputedStyle(e); //to avoid errors in Microsoft Edge, we need to call getComputedStyle() from a specific scope, typically window.
    },

    /**
     * @private Returns the css style for a particular property of an element. For example, to get whatever the current "left" css value for an element with an ID of "myElement", you could do:
     * var currentLeft = CSSPlugin.getStyle( document.getElementById("myElement"), "left");
     *
     * @param {!Object} t Target element whose style property you want to query
     * @param {!string} p Property name (like "left" or "top" or "marginTop", etc.)
     * @param {Object=} cs Computed style object. This just provides a way to speed processing if you're going to get several properties on the same element in quick succession - you can reuse the result of the getComputedStyle() call.
     * @param {boolean=} calc If true, the value will not be read directly from the element's "style" property (if it exists there), but instead the getComputedStyle() result will be used. This can be useful when you want to ensure that the browser itself is interpreting the value.
     * @param {string=} dflt Default value that should be returned in the place of null, "none", "auto" or "auto auto".
     * @return {?string} The current property value
     */
    _getStyle = CSSPlugin.getStyle = function (t, p, cs, calc, dflt) {
      var rv;
      if (!_supportsOpacity) if (p === "opacity") {
        //several versions of IE don't use the standard "opacity" property - they use things like filter:alpha(opacity=50), so we parse that here.
        return _getIEOpacity(t);
      }

      if (!calc && t.style[p]) {
        rv = t.style[p];
      } else if (cs = cs || _getComputedStyle(t)) {
        rv = cs[p] || cs.getPropertyValue(p) || cs.getPropertyValue(p.replace(_capsExp, "-$1").toLowerCase());
      } else if (t.currentStyle) {
        rv = t.currentStyle[p];
      }

      return dflt != null && (!rv || rv === "none" || rv === "auto" || rv === "auto auto") ? dflt : rv;
    },

    /**
     * @private Pass the target element, the property name, the numeric value, and the suffix (like "%", "em", "px", etc.) and it will spit back the equivalent pixel number.
     * @param {!Object} t Target element
     * @param {!string} p Property name (like "left", "top", "marginLeft", etc.)
     * @param {!number} v Value
     * @param {string=} sfx Suffix (like "px" or "%" or "em")
     * @param {boolean=} recurse If true, the call is a recursive one. In some browsers (like IE7/8), occasionally the value isn't accurately reported initially, but if we run the function again it will take effect.
     * @return {number} value in pixels
     */
    _convertToPixels = _internals.convertToPixels = function (t, p, v, sfx, recurse) {
      if (sfx === "px" || !sfx && p !== "lineHeight") {
        return v;
      }

      if (sfx === "auto" || !v) {
        return 0;
      }

      var horiz = _horizExp.test(p),
          node = t,
          style = _tempDiv.style,
          neg = v < 0,
          precise = v === 1,
          pix,
          cache,
          time;

      if (neg) {
        v = -v;
      }

      if (precise) {
        v *= 100;
      }

      if (p === "lineHeight" && !sfx) {
        //special case of when a simple lineHeight (without a unit) is used. Set it to the value, read back the computed value, and then revert.
        cache = _getComputedStyle(t).lineHeight;
        t.style.lineHeight = v;
        pix = parseFloat(_getComputedStyle(t).lineHeight);
        t.style.lineHeight = cache;
      } else if (sfx === "%" && p.indexOf("border") !== -1) {
        pix = v / 100 * (horiz ? t.clientWidth : t.clientHeight);
      } else {
        style.cssText = "border:0 solid red;position:" + _getStyle(t, "position") + ";line-height:0;";

        if (sfx === "%" || !node.appendChild || sfx.charAt(0) === "v" || sfx === "rem") {
          node = t.parentNode || _doc.body;

          if (_getStyle(node, "display").indexOf("flex") !== -1) {
            //Edge and IE11 have a bug that causes offsetWidth to report as 0 if the container has display:flex and the child is position:relative. Switching to position: absolute solves it.
            style.position = "absolute";
          }

          cache = node._gsCache;
          time = TweenLite.ticker.frame;

          if (cache && horiz && cache.time === time) {
            //performance optimization: we record the width of elements along with the ticker frame so that we can quickly get it again on the same tick (seems relatively safe to assume it wouldn't change on the same tick)
            return cache.width * v / 100;
          }

          style[horiz ? "width" : "height"] = v + sfx;
        } else {
          style[horiz ? "borderLeftWidth" : "borderTopWidth"] = v + sfx;
        }

        node.appendChild(_tempDiv);
        pix = parseFloat(_tempDiv[horiz ? "offsetWidth" : "offsetHeight"]);
        node.removeChild(_tempDiv);

        if (horiz && sfx === "%" && CSSPlugin.cacheWidths !== false) {
          cache = node._gsCache = node._gsCache || {};
          cache.time = time;
          cache.width = pix / v * 100;
        }

        if (pix === 0 && !recurse) {
          pix = _convertToPixels(t, p, v, sfx, true);
        }
      }

      if (precise) {
        pix /= 100;
      }

      return neg ? -pix : pix;
    },
        _calculateOffset = _internals.calculateOffset = function (t, p, cs) {
      //for figuring out "top" or "left" in px when it's "auto". We need to factor in margin with the offsetLeft/offsetTop
      if (_getStyle(t, "position", cs) !== "absolute") {
        return 0;
      }

      var dim = p === "left" ? "Left" : "Top",
          v = _getStyle(t, "margin" + dim, cs);

      return t["offset" + dim] - (_convertToPixels(t, p, parseFloat(v), v.replace(_suffixExp, "")) || 0);
    },
        // @private returns at object containing ALL of the style properties in camelCase and their associated values.
    _getAllStyles = function _getAllStyles(t, cs) {
      var s = {},
          i,
          tr,
          p;

      if (cs = cs || _getComputedStyle(t, null)) {
        if (i = cs.length) {
          while (--i > -1) {
            p = cs[i];

            if (p.indexOf("-transform") === -1 || _transformPropCSS === p) {
              //Some webkit browsers duplicate transform values, one non-prefixed and one prefixed ("transform" and "WebkitTransform"), so we must weed out the extra one here.
              s[p.replace(_camelExp, _camelFunc)] = cs.getPropertyValue(p);
            }
          }
        } else {
          //some browsers behave differently - cs.length is always 0, so we must do a for...in loop.
          for (i in cs) {
            if (i.indexOf("Transform") === -1 || _transformProp === i) {
              //Some webkit browsers duplicate transform values, one non-prefixed and one prefixed ("transform" and "WebkitTransform"), so we must weed out the extra one here.
              s[i] = cs[i];
            }
          }
        }
      } else if (cs = t.currentStyle || t.style) {
        for (i in cs) {
          if (typeof i === "string" && s[i] === undefined) {
            s[i.replace(_camelExp, _camelFunc)] = cs[i];
          }
        }
      }

      if (!_supportsOpacity) {
        s.opacity = _getIEOpacity(t);
      }

      tr = _getTransform(t, cs, false);
      s.rotation = tr.rotation;
      s.skewX = tr.skewX;
      s.scaleX = tr.scaleX;
      s.scaleY = tr.scaleY;
      s.x = tr.x;
      s.y = tr.y;

      if (_supports3D) {
        s.z = tr.z;
        s.rotationX = tr.rotationX;
        s.rotationY = tr.rotationY;
        s.scaleZ = tr.scaleZ;
      }

      if (s.filters) {
        delete s.filters;
      }

      return s;
    },
        // @private analyzes two style objects (as returned by _getAllStyles()) and only looks for differences between them that contain tweenable values (like a number or color). It returns an object with a "difs" property which refers to an object containing only those isolated properties and values for tweening, and a "firstMPT" property which refers to the first MiniPropTween instance in a linked list that recorded all the starting values of the different properties so that we can revert to them at the end or beginning of the tween - we don't want the cascading to get messed up. The forceLookup parameter is an optional generic object with properties that should be forced into the results - this is necessary for className tweens that are overwriting others because imagine a scenario where a rollover/rollout adds/removes a class and the user swipes the mouse over the target SUPER fast, thus nothing actually changed yet and the subsequent comparison of the properties would indicate they match (especially when px rounding is taken into consideration), thus no tweening is necessary even though it SHOULD tween and remove those properties after the tween (otherwise the inline styles will contaminate things). See the className SpecialProp code for details.
    _cssDif = function _cssDif(t, s1, s2, vars, forceLookup) {
      var difs = {},
          style = t.style,
          val,
          p,
          mpt;

      for (p in s2) {
        if (p !== "cssText") if (p !== "length") if (isNaN(p)) if (s1[p] !== (val = s2[p]) || forceLookup && forceLookup[p]) if (p.indexOf("Origin") === -1) if (typeof val === "number" || typeof val === "string") {
          difs[p] = val === "auto" && (p === "left" || p === "top") ? _calculateOffset(t, p) : (val === "" || val === "auto" || val === "none") && typeof s1[p] === "string" && s1[p].replace(_NaNExp, "") !== "" ? 0 : val; //if the ending value is defaulting ("" or "auto"), we check the starting value and if it can be parsed into a number (a string which could have a suffix too, like 700px), then we swap in 0 for "" or "auto" so that things actually tween.

          if (style[p] !== undefined) {
            //for className tweens, we must remember which properties already existed inline - the ones that didn't should be removed when the tween isn't in progress because they were only introduced to facilitate the transition between classes.
            mpt = new MiniPropTween(style, p, style[p], mpt);
          }
        }
      }

      if (vars) {
        for (p in vars) {
          //copy properties (except className)
          if (p !== "className") {
            difs[p] = vars[p];
          }
        }
      }

      return {
        difs: difs,
        firstMPT: mpt
      };
    },
        _dimensions = {
      width: ["Left", "Right"],
      height: ["Top", "Bottom"]
    },
        _margins = ["marginLeft", "marginRight", "marginTop", "marginBottom"],

    /**
     * @private Gets the width or height of an element
     * @param {!Object} t Target element
     * @param {!string} p Property name ("width" or "height")
     * @param {Object=} cs Computed style object (if one exists). Just a speed optimization.
     * @return {number} Dimension (in pixels)
     */
    _getDimension = function _getDimension(t, p, cs) {
      if ((t.nodeName + "").toLowerCase() === "svg") {
        //Chrome no longer supports offsetWidth/offsetHeight on SVG elements.
        return (cs || _getComputedStyle(t))[p] || 0;
      } else if (t.getCTM && _isSVG(t)) {
        return t.getBBox()[p] || 0;
      }

      var v = parseFloat(p === "width" ? t.offsetWidth : t.offsetHeight),
          a = _dimensions[p],
          i = a.length;
      cs = cs || _getComputedStyle(t, null);

      while (--i > -1) {
        v -= parseFloat(_getStyle(t, "padding" + a[i], cs, true)) || 0;
        v -= parseFloat(_getStyle(t, "border" + a[i] + "Width", cs, true)) || 0;
      }

      return v;
    },
        // @private Parses position-related complex strings like "top left" or "50px 10px" or "70% 20%", etc. which are used for things like transformOrigin or backgroundPosition. Optionally decorates a supplied object (recObj) with the following properties: "ox" (offsetX), "oy" (offsetY), "oxp" (if true, "ox" is a percentage not a pixel value), and "oxy" (if true, "oy" is a percentage not a pixel value)
    _parsePosition = function _parsePosition(v, recObj) {
      if (v === "contain" || v === "auto" || v === "auto auto") {
        //note: Firefox uses "auto auto" as default whereas Chrome uses "auto".
        return v + " ";
      }

      if (v == null || v === "") {
        v = "0 0";
      }

      var a = v.split(" "),
          x = v.indexOf("left") !== -1 ? "0%" : v.indexOf("right") !== -1 ? "100%" : a[0],
          y = v.indexOf("top") !== -1 ? "0%" : v.indexOf("bottom") !== -1 ? "100%" : a[1],
          i;

      if (a.length > 3 && !recObj) {
        //multiple positions
        a = v.split(", ").join(",").split(",");
        v = [];

        for (i = 0; i < a.length; i++) {
          v.push(_parsePosition(a[i]));
        }

        return v.join(",");
      }

      if (y == null) {
        y = x === "center" ? "50%" : "0";
      } else if (y === "center") {
        y = "50%";
      }

      if (x === "center" || isNaN(parseFloat(x)) && (x + "").indexOf("=") === -1) {
        //remember, the user could flip-flop the values and say "bottom center" or "center bottom", etc. "center" is ambiguous because it could be used to describe horizontal or vertical, hence the isNaN(). If there's an "=" sign in the value, it's relative.
        x = "50%";
      }

      v = x + " " + y + (a.length > 2 ? " " + a[2] : "");

      if (recObj) {
        recObj.oxp = x.indexOf("%") !== -1;
        recObj.oyp = y.indexOf("%") !== -1;
        recObj.oxr = x.charAt(1) === "=";
        recObj.oyr = y.charAt(1) === "=";
        recObj.ox = parseFloat(x.replace(_NaNExp, ""));
        recObj.oy = parseFloat(y.replace(_NaNExp, ""));
        recObj.v = v;
      }

      return recObj || v;
    },

    /**
     * @private Takes an ending value (typically a string, but can be a number) and a starting value and returns the change between the two, looking for relative value indicators like += and -= and it also ignores suffixes (but make sure the ending value starts with a number or +=/-= and that the starting value is a NUMBER!)
     * @param {(number|string)} e End value which is typically a string, but could be a number
     * @param {(number|string)} b Beginning value which is typically a string but could be a number
     * @return {number} Amount of change between the beginning and ending values (relative values that have a "+=" or "-=" are recognized)
     */
    _parseChange = function _parseChange(e, b) {
      if (typeof e === "function") {
        e = e(_index, _target);
      }

      return typeof e === "string" && e.charAt(1) === "=" ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) : parseFloat(e) - parseFloat(b) || 0;
    },

    /**
     * @private Takes a value and a default number, checks if the value is relative, null, or numeric and spits back a normalized number accordingly. Primarily used in the _parseTransform() function.
     * @param {Object} v Value to be parsed
     * @param {!number} d Default value (which is also used for relative calculations if "+=" or "-=" is found in the first parameter)
     * @return {number} Parsed value
     */
    _parseVal = function _parseVal(v, d) {
      if (typeof v === "function") {
        v = v(_index, _target);
      }

      var isRelative = typeof v === "string" && v.charAt(1) === "=";

      if (typeof v === "string" && v.charAt(v.length - 2) === "v") {
        //convert vw and vh into px-equivalents.
        v = (isRelative ? v.substr(0, 2) : 0) + window["inner" + (v.substr(-2) === "vh" ? "Height" : "Width")] * (parseFloat(isRelative ? v.substr(2) : v) / 100);
      }

      return v == null ? d : isRelative ? parseInt(v.charAt(0) + "1", 10) * parseFloat(v.substr(2)) + d : parseFloat(v) || 0;
    },

    /**
     * @private Translates strings like "40deg" or "40" or 40rad" or "+=40deg" or "270_short" or "-90_cw" or "+=45_ccw" to a numeric radian angle. Of course a starting/default value must be fed in too so that relative values can be calculated properly.
     * @param {Object} v Value to be parsed
     * @param {!number} d Default value (which is also used for relative calculations if "+=" or "-=" is found in the first parameter)
     * @param {string=} p property name for directionalEnd (optional - only used when the parsed value is directional ("_short", "_cw", or "_ccw" suffix). We need a way to store the uncompensated value so that at the end of the tween, we set it to exactly what was requested with no directional compensation). Property name would be "rotation", "rotationX", or "rotationY"
     * @param {Object=} directionalEnd An object that will store the raw end values for directional angles ("_short", "_cw", or "_ccw" suffix). We need a way to store the uncompensated value so that at the end of the tween, we set it to exactly what was requested with no directional compensation.
     * @return {number} parsed angle in radians
     */
    _parseAngle = function _parseAngle(v, d, p, directionalEnd) {
      var min = 0.000001,
          cap,
          split,
          dif,
          result,
          isRelative;

      if (typeof v === "function") {
        v = v(_index, _target);
      }

      if (v == null) {
        result = d;
      } else if (typeof v === "number") {
        result = v;
      } else {
        cap = 360;
        split = v.split("_");
        isRelative = v.charAt(1) === "=";
        dif = (isRelative ? parseInt(v.charAt(0) + "1", 10) * parseFloat(split[0].substr(2)) : parseFloat(split[0])) * (v.indexOf("rad") === -1 ? 1 : _RAD2DEG) - (isRelative ? 0 : d);

        if (split.length) {
          if (directionalEnd) {
            directionalEnd[p] = d + dif;
          }

          if (v.indexOf("short") !== -1) {
            dif = dif % cap;

            if (dif !== dif % (cap / 2)) {
              dif = dif < 0 ? dif + cap : dif - cap;
            }
          }

          if (v.indexOf("_cw") !== -1 && dif < 0) {
            dif = (dif + cap * 9999999999) % cap - (dif / cap | 0) * cap;
          } else if (v.indexOf("ccw") !== -1 && dif > 0) {
            dif = (dif - cap * 9999999999) % cap - (dif / cap | 0) * cap;
          }
        }

        result = d + dif;
      }

      if (result < min && result > -min) {
        result = 0;
      }

      return result;
    },
        _colorLookup = {
      aqua: [0, 255, 255],
      lime: [0, 255, 0],
      silver: [192, 192, 192],
      black: [0, 0, 0],
      maroon: [128, 0, 0],
      teal: [0, 128, 128],
      blue: [0, 0, 255],
      navy: [0, 0, 128],
      white: [255, 255, 255],
      fuchsia: [255, 0, 255],
      olive: [128, 128, 0],
      yellow: [255, 255, 0],
      orange: [255, 165, 0],
      gray: [128, 128, 128],
      purple: [128, 0, 128],
      green: [0, 128, 0],
      red: [255, 0, 0],
      pink: [255, 192, 203],
      cyan: [0, 255, 255],
      transparent: [255, 255, 255, 0]
    },
        _hue = function _hue(h, m1, m2) {
      h = h < 0 ? h + 1 : h > 1 ? h - 1 : h;
      return (h * 6 < 1 ? m1 + (m2 - m1) * h * 6 : h < 0.5 ? m2 : h * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * 255 + 0.5 | 0;
    },

    /**
     * @private Parses a color (like #9F0, #FF9900, rgb(255,51,153) or hsl(108, 50%, 10%)) into an array with 3 elements for red, green, and blue or if toHSL parameter is true, it will populate the array with hue, saturation, and lightness values. If a relative value is found in an hsl() or hsla() string, it will preserve those relative prefixes and all the values in the array will be strings instead of numbers (in all other cases it will be populated with numbers).
     * @param {(string|number)} v The value the should be parsed which could be a string like #9F0 or rgb(255,102,51) or rgba(255,0,0,0.5) or it could be a number like 0xFF00CC or even a named color like red, blue, purple, etc.
     * @param {(boolean)} toHSL If true, an hsl() or hsla() value will be returned instead of rgb() or rgba()
     * @return {Array.<number>} An array containing red, green, and blue (and optionally alpha) in that order, or if the toHSL parameter was true, the array will contain hue, saturation and lightness (and optionally alpha) in that order. Always numbers unless there's a relative prefix found in an hsl() or hsla() string and toHSL is true.
     */
    _parseColor = CSSPlugin.parseColor = function (v, toHSL) {
      var a, r, g, b, h, s, l, max, min, d, wasHSL;

      if (!v) {
        a = _colorLookup.black;
      } else if (typeof v === "number") {
        a = [v >> 16, v >> 8 & 255, v & 255];
      } else {
        if (v.charAt(v.length - 1) === ",") {
          //sometimes a trailing comma is included and we should chop it off (typically from a comma-delimited list of values like a textShadow:"2px 2px 2px blue, 5px 5px 5px rgb(255,0,0)" - in this example "blue," has a trailing comma. We could strip it out inside parseComplex() but we'd need to do it to the beginning and ending values plus it wouldn't provide protection from other potential scenarios like if the user passes in a similar value.
          v = v.substr(0, v.length - 1);
        }

        if (_colorLookup[v]) {
          a = _colorLookup[v];
        } else if (v.charAt(0) === "#") {
          if (v.length === 4) {
            //for shorthand like #9F0
            r = v.charAt(1);
            g = v.charAt(2);
            b = v.charAt(3);
            v = "#" + r + r + g + g + b + b;
          }

          v = parseInt(v.substr(1), 16);
          a = [v >> 16, v >> 8 & 255, v & 255];
        } else if (v.substr(0, 3) === "hsl") {
          a = wasHSL = v.match(_numExp);

          if (!toHSL) {
            h = Number(a[0]) % 360 / 360;
            s = Number(a[1]) / 100;
            l = Number(a[2]) / 100;
            g = l <= 0.5 ? l * (s + 1) : l + s - l * s;
            r = l * 2 - g;

            if (a.length > 3) {
              a[3] = Number(a[3]);
            }

            a[0] = _hue(h + 1 / 3, r, g);
            a[1] = _hue(h, r, g);
            a[2] = _hue(h - 1 / 3, r, g);
          } else if (v.indexOf("=") !== -1) {
            //if relative values are found, just return the raw strings with the relative prefixes in place.
            return v.match(_relNumExp);
          }
        } else {
          a = v.match(_numExp) || _colorLookup.transparent;
        }

        a[0] = Number(a[0]);
        a[1] = Number(a[1]);
        a[2] = Number(a[2]);

        if (a.length > 3) {
          a[3] = Number(a[3]);
        }
      }

      if (toHSL && !wasHSL) {
        r = a[0] / 255;
        g = a[1] / 255;
        b = a[2] / 255;
        max = Math.max(r, g, b);
        min = Math.min(r, g, b);
        l = (max + min) / 2;

        if (max === min) {
          h = s = 0;
        } else {
          d = max - min;
          s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
          h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
          h *= 60;
        }

        a[0] = h + 0.5 | 0;
        a[1] = s * 100 + 0.5 | 0;
        a[2] = l * 100 + 0.5 | 0;
      }

      return a;
    },
        _formatColors = function _formatColors(s, toHSL) {
      var colors = s.match(_colorExp) || [],
          charIndex = 0,
          parsed = "",
          i,
          color,
          temp;

      if (!colors.length) {
        return s;
      }

      for (i = 0; i < colors.length; i++) {
        color = colors[i];
        temp = s.substr(charIndex, s.indexOf(color, charIndex) - charIndex);
        charIndex += temp.length + color.length;
        color = _parseColor(color, toHSL);

        if (color.length === 3) {
          color.push(1);
        }

        parsed += temp + (toHSL ? "hsla(" + color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : "rgba(" + color.join(",")) + ")";
      }

      return parsed + s.substr(charIndex);
    },
        _colorExp = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b"; //we'll dynamically build this Regular Expression to conserve file size. After building it, it will be able to find rgb(), rgba(), # (hexadecimal), and named color values like red, blue, purple, etc.


    for (p in _colorLookup) {
      _colorExp += "|" + p + "\\b";
    }

    _colorExp = new RegExp(_colorExp + ")", "gi");

    CSSPlugin.colorStringFilter = function (a) {
      var combined = a[0] + " " + a[1],
          toHSL;

      if (_colorExp.test(combined)) {
        toHSL = combined.indexOf("hsl(") !== -1 || combined.indexOf("hsla(") !== -1;
        a[0] = _formatColors(a[0], toHSL);
        a[1] = _formatColors(a[1], toHSL);
      }

      _colorExp.lastIndex = 0;
    };

    if (!TweenLite.defaultStringFilter) {
      TweenLite.defaultStringFilter = CSSPlugin.colorStringFilter;
    }
    /**
     * @private Returns a formatter function that handles taking a string (or number in some cases) and returning a consistently formatted one in terms of delimiters, quantity of values, etc. For example, we may get boxShadow values defined as "0px red" or "0px 0px 10px rgb(255,0,0)" or "0px 0px 20px 20px #F00" and we need to ensure that what we get back is described with 4 numbers and a color. This allows us to feed it into the _parseComplex() method and split the values up appropriately. The neat thing about this _getFormatter() function is that the dflt defines a pattern as well as a default, so for example, _getFormatter("0px 0px 0px 0px #777", true) not only sets the default as 0px for all distances and #777 for the color, but also sets the pattern such that 4 numbers and a color will always get returned.
     * @param {!string} dflt The default value and pattern to follow. So "0px 0px 0px 0px #777" will ensure that 4 numbers and a color will always get returned.
     * @param {boolean=} clr If true, the values should be searched for color-related data. For example, boxShadow values typically contain a color whereas borderRadius don't.
     * @param {boolean=} collapsible If true, the value is a top/left/right/bottom style one that acts like margin or padding, where if only one value is received, it's used for all 4; if 2 are received, the first is duplicated for 3rd (bottom) and the 2nd is duplicated for the 4th spot (left), etc.
     * @return {Function} formatter function
     */


    var _getFormatter = function _getFormatter(dflt, clr, collapsible, multi) {
      if (dflt == null) {
        return function (v) {
          return v;
        };
      }

      var dColor = clr ? (dflt.match(_colorExp) || [""])[0] : "",
          dVals = dflt.split(dColor).join("").match(_valuesExp) || [],
          pfx = dflt.substr(0, dflt.indexOf(dVals[0])),
          sfx = dflt.charAt(dflt.length - 1) === ")" ? ")" : "",
          delim = dflt.indexOf(" ") !== -1 ? " " : ",",
          numVals = dVals.length,
          dSfx = numVals > 0 ? dVals[0].replace(_numExp, "") : "",
          _formatter2;

      if (!numVals) {
        return function (v) {
          return v;
        };
      }

      if (clr) {
        _formatter2 = function formatter(v) {
          var color, vals, i, a;

          if (typeof v === "number") {
            v += dSfx;
          } else if (multi && _commasOutsideParenExp.test(v)) {
            a = v.replace(_commasOutsideParenExp, "|").split("|");

            for (i = 0; i < a.length; i++) {
              a[i] = _formatter2(a[i]);
            }

            return a.join(",");
          }

          color = (v.match(_colorExp) || [dColor])[0];
          vals = v.split(color).join("").match(_valuesExp) || [];
          i = vals.length;

          if (numVals > i--) {
            while (++i < numVals) {
              vals[i] = collapsible ? vals[(i - 1) / 2 | 0] : dVals[i];
            }
          }

          return pfx + vals.join(delim) + delim + color + sfx + (v.indexOf("inset") !== -1 ? " inset" : "");
        };

        return _formatter2;
      }

      _formatter2 = function _formatter(v) {
        var vals, a, i;

        if (typeof v === "number") {
          v += dSfx;
        } else if (multi && _commasOutsideParenExp.test(v)) {
          a = v.replace(_commasOutsideParenExp, "|").split("|");

          for (i = 0; i < a.length; i++) {
            a[i] = _formatter2(a[i]);
          }

          return a.join(",");
        }

        vals = v.match(delim === "," ? _valuesExp : _valuesExpWithCommas) || [];
        i = vals.length;

        if (numVals > i--) {
          while (++i < numVals) {
            vals[i] = collapsible ? vals[(i - 1) / 2 | 0] : dVals[i];
          }
        }

        return (pfx && v !== "none" ? v.substr(0, v.indexOf(vals[0])) || pfx : pfx) + vals.join(delim) + sfx; //note: prefix might be different, like for clipPath it could start with inset( or polygon(
      };

      return _formatter2;
    },

    /**
     * @private returns a formatter function that's used for edge-related values like marginTop, marginLeft, paddingBottom, paddingRight, etc. Just pass a comma-delimited list of property names related to the edges.
     * @param {!string} props a comma-delimited list of property names in order from top to left, like "marginTop,marginRight,marginBottom,marginLeft"
     * @return {Function} a formatter function
     */
    _getEdgeParser = function _getEdgeParser(props) {
      props = props.split(",");
      return function (t, e, p, cssp, pt, plugin, vars) {
        var a = (e + "").split(" "),
            i;
        vars = {};

        for (i = 0; i < 4; i++) {
          vars[props[i]] = a[i] = a[i] || a[(i - 1) / 2 >> 0];
        }

        return cssp.parse(t, vars, pt, plugin);
      };
    },
        // @private used when other plugins must tween values first, like BezierPlugin or ThrowPropsPlugin, etc. That plugin's setRatio() gets called first so that the values are updated, and then we loop through the MiniPropTweens which handle copying the values into their appropriate slots so that they can then be applied correctly in the main CSSPlugin setRatio() method. Remember, we typically create a proxy object that has a bunch of uniquely-named properties that we feed to the sub-plugin and it does its magic normally, and then we must interpret those values and apply them to the css because often numbers must get combined/concatenated, suffixes added, etc. to work with css, like boxShadow could have 4 values plus a color.
    _setPluginRatio = _internals._setPluginRatio = function (v) {
      this.plugin.setRatio(v);
      var d = this.data,
          proxy = d.proxy,
          mpt = d.firstMPT,
          min = 0.000001,
          val,
          pt,
          i,
          str,
          p;

      while (mpt) {
        val = proxy[mpt.v];

        if (mpt.r) {
          val = mpt.r(val);
        } else if (val < min && val > -min) {
          val = 0;
        }

        mpt.t[mpt.p] = val;
        mpt = mpt._next;
      }

      if (d.autoRotate) {
        d.autoRotate.rotation = d.mod ? d.mod.call(this._tween, proxy.rotation, this.t, this._tween) : proxy.rotation; //special case for ModifyPlugin to hook into an auto-rotating bezier
      } //at the end, we must set the CSSPropTween's "e" (end) value dynamically here because that's what is used in the final setRatio() method. Same for "b" at the beginning.


      if (v === 1 || v === 0) {
        mpt = d.firstMPT;
        p = v === 1 ? "e" : "b";

        while (mpt) {
          pt = mpt.t;

          if (!pt.type) {
            pt[p] = pt.s + pt.xs0;
          } else if (pt.type === 1) {
            str = pt.xs0 + pt.s + pt.xs1;

            for (i = 1; i < pt.l; i++) {
              str += pt["xn" + i] + pt["xs" + (i + 1)];
            }

            pt[p] = str;
          }

          mpt = mpt._next;
        }
      }
    },

    /**
     * @private @constructor Used by a few SpecialProps to hold important values for proxies. For example, _parseToProxy() creates a MiniPropTween instance for each property that must get tweened on the proxy, and we record the original property name as well as the unique one we create for the proxy, plus whether or not the value needs to be rounded plus the original value.
     * @param {!Object} t target object whose property we're tweening (often a CSSPropTween)
     * @param {!string} p property name
     * @param {(number|string|object)} v value
     * @param {MiniPropTween=} next next MiniPropTween in the linked list
     * @param {boolean=} r if true, the tweened value should be rounded to the nearest integer
     */
    MiniPropTween = function MiniPropTween(t, p, v, next, r) {
      this.t = t;
      this.p = p;
      this.v = v;
      this.r = r;

      if (next) {
        next._prev = this;
        this._next = next;
      }
    },

    /**
     * @private Most other plugins (like BezierPlugin and ThrowPropsPlugin and others) can only tween numeric values, but CSSPlugin must accommodate special values that have a bunch of extra data (like a suffix or strings between numeric values, etc.). For example, boxShadow has values like "10px 10px 20px 30px rgb(255,0,0)" which would utterly confuse other plugins. This method allows us to split that data apart and grab only the numeric data and attach it to uniquely-named properties of a generic proxy object ({}) so that we can feed that to virtually any plugin to have the numbers tweened. However, we must also keep track of which properties from the proxy go with which CSSPropTween values and instances. So we create a linked list of MiniPropTweens. Each one records a target (the original CSSPropTween), property (like "s" or "xn1" or "xn2") that we're tweening and the unique property name that was used for the proxy (like "boxShadow_xn1" and "boxShadow_xn2") and whether or not they need to be rounded. That way, in the _setPluginRatio() method we can simply copy the values over from the proxy to the CSSPropTween instance(s). Then, when the main CSSPlugin setRatio() method runs and applies the CSSPropTween values accordingly, they're updated nicely. So the external plugin tweens the numbers, _setPluginRatio() copies them over, and setRatio() acts normally, applying css-specific values to the element.
     * This method returns an object that has the following properties:
     *  - proxy: a generic object containing the starting values for all the properties that will be tweened by the external plugin.  This is what we feed to the external _onInitTween() as the target
     *  - end: a generic object containing the ending values for all the properties that will be tweened by the external plugin. This is what we feed to the external plugin's _onInitTween() as the destination values
     *  - firstMPT: the first MiniPropTween in the linked list
     *  - pt: the first CSSPropTween in the linked list that was created when parsing. If shallow is true, this linked list will NOT attach to the one passed into the _parseToProxy() as the "pt" (4th) parameter.
     * @param {!Object} t target object to be tweened
     * @param {!(Object|string)} vars the object containing the information about the tweening values (typically the end/destination values) that should be parsed
     * @param {!CSSPlugin} cssp The CSSPlugin instance
     * @param {CSSPropTween=} pt the next CSSPropTween in the linked list
     * @param {TweenPlugin=} plugin the external TweenPlugin instance that will be handling tweening the numeric values
     * @param {boolean=} shallow if true, the resulting linked list from the parse will NOT be attached to the CSSPropTween that was passed in as the "pt" (4th) parameter.
     * @return An object containing the following properties: proxy, end, firstMPT, and pt (see above for descriptions)
     */
    _parseToProxy = _internals._parseToProxy = function (t, vars, cssp, pt, plugin, shallow) {
      var bpt = pt,
          start = {},
          end = {},
          transform = cssp._transform,
          oldForce = _forcePT,
          i,
          p,
          xp,
          mpt,
          firstPT;
      cssp._transform = null;
      _forcePT = vars;
      pt = firstPT = cssp.parse(t, vars, pt, plugin);
      _forcePT = oldForce; //break off from the linked list so the new ones are isolated.

      if (shallow) {
        cssp._transform = transform;

        if (bpt) {
          bpt._prev = null;

          if (bpt._prev) {
            bpt._prev._next = null;
          }
        }
      }

      while (pt && pt !== bpt) {
        if (pt.type <= 1) {
          p = pt.p;
          end[p] = pt.s + pt.c;
          start[p] = pt.s;

          if (!shallow) {
            mpt = new MiniPropTween(pt, "s", p, mpt, pt.r);
            pt.c = 0;
          }

          if (pt.type === 1) {
            i = pt.l;

            while (--i > 0) {
              xp = "xn" + i;
              p = pt.p + "_" + xp;
              end[p] = pt.data[xp];
              start[p] = pt[xp];

              if (!shallow) {
                mpt = new MiniPropTween(pt, xp, p, mpt, pt.rxp[xp]);
              }
            }
          }
        }

        pt = pt._next;
      }

      return {
        proxy: start,
        end: end,
        firstMPT: mpt,
        pt: firstPT
      };
    },

    /**
     * @constructor Each property that is tweened has at least one CSSPropTween associated with it. These instances store important information like the target, property, starting value, amount of change, etc. They can also optionally have a number of "extra" strings and numeric values named xs1, xn1, xs2, xn2, xs3, xn3, etc. where "s" indicates string and "n" indicates number. These can be pieced together in a complex-value tween (type:1) that has alternating types of data like a string, number, string, number, etc. For example, boxShadow could be "5px 5px 8px rgb(102, 102, 51)". In that value, there are 6 numbers that may need to tween and then pieced back together into a string again with spaces, suffixes, etc. xs0 is special in that it stores the suffix for standard (type:0) tweens, -OR- the first string (prefix) in a complex-value (type:1) CSSPropTween -OR- it can be the non-tweening value in a type:-1 CSSPropTween. We do this to conserve memory.
     * CSSPropTweens have the following optional properties as well (not defined through the constructor):
     *  - l: Length in terms of the number of extra properties that the CSSPropTween has (default: 0). For example, for a boxShadow we may need to tween 5 numbers in which case l would be 5; Keep in mind that the start/end values for the first number that's tweened are always stored in the s and c properties to conserve memory. All additional values thereafter are stored in xn1, xn2, etc.
     *  - xfirst: The first instance of any sub-CSSPropTweens that are tweening properties of this instance. For example, we may split up a boxShadow tween so that there's a main CSSPropTween of type:1 that has various xs* and xn* values associated with the h-shadow, v-shadow, blur, color, etc. Then we spawn a CSSPropTween for each of those that has a higher priority and runs BEFORE the main CSSPropTween so that the values are all set by the time it needs to re-assemble them. The xfirst gives us an easy way to identify the first one in that chain which typically ends at the main one (because they're all prepende to the linked list)
     *  - plugin: The TweenPlugin instance that will handle the tweening of any complex values. For example, sometimes we don't want to use normal subtweens (like xfirst refers to) to tween the values - we might want ThrowPropsPlugin or BezierPlugin some other plugin to do the actual tweening, so we create a plugin instance and store a reference here. We need this reference so that if we get a request to round values or disable a tween, we can pass along that request.
     *  - data: Arbitrary data that needs to be stored with the CSSPropTween. Typically if we're going to have a plugin handle the tweening of a complex-value tween, we create a generic object that stores the END values that we're tweening to and the CSSPropTween's xs1, xs2, etc. have the starting values. We store that object as data. That way, we can simply pass that object to the plugin and use the CSSPropTween as the target.
     *  - setRatio: Only used for type:2 tweens that require custom functionality. In this case, we call the CSSPropTween's setRatio() method and pass the ratio each time the tween updates. This isn't quite as efficient as doing things directly in the CSSPlugin's setRatio() method, but it's very convenient and flexible.
     * @param {!Object} t Target object whose property will be tweened. Often a DOM element, but not always. It could be anything.
     * @param {string} p Property to tween (name). For example, to tween element.width, p would be "width".
     * @param {number} s Starting numeric value
     * @param {number} c Change in numeric value over the course of the entire tween. For example, if element.width starts at 5 and should end at 100, c would be 95.
     * @param {CSSPropTween=} next The next CSSPropTween in the linked list. If one is defined, we will define its _prev as the new instance, and the new instance's _next will be pointed at it.
     * @param {number=} type The type of CSSPropTween where -1 = a non-tweening value, 0 = a standard simple tween, 1 = a complex value (like one that has multiple numbers in a comma- or space-delimited string like border:"1px solid red"), and 2 = one that uses a custom setRatio function that does all of the work of applying the values on each update.
     * @param {string=} n Name of the property that should be used for overwriting purposes which is typically the same as p but not always. For example, we may need to create a subtween for the 2nd part of a "clip:rect(...)" tween in which case "p" might be xs1 but "n" is still "clip"
     * @param {boolean=} r If true, the value(s) should be rounded
     * @param {number=} pr Priority in the linked list order. Higher priority CSSPropTweens will be updated before lower priority ones. The default priority is 0.
     * @param {string=} b Beginning value. We store this to ensure that it is EXACTLY what it was when the tween began without any risk of interpretation issues.
     * @param {string=} e Ending value. We store this to ensure that it is EXACTLY what the user defined at the end of the tween without any risk of interpretation issues.
     */
    CSSPropTween = _internals.CSSPropTween = function (t, p, s, c, next, type, n, r, pr, b, e) {
      this.t = t; //target

      this.p = p; //property

      this.s = s; //starting value

      this.c = c; //change value

      this.n = n || p; //name that this CSSPropTween should be associated to (usually the same as p, but not always - n is what overwriting looks at)

      if (!(t instanceof CSSPropTween)) {
        _overwriteProps.push(this.n);
      }

      this.r = !r ? r : typeof r === "function" ? r : Math.round; //round (boolean)

      this.type = type || 0; //0 = normal tween, -1 = non-tweening (in which case xs0 will be applied to the target's property, like tp.t[tp.p] = tp.xs0), 1 = complex-value SpecialProp, 2 = custom setRatio() that does all the work

      if (pr) {
        this.pr = pr;
        _hasPriority = true;
      }

      this.b = b === undefined ? s : b;
      this.e = e === undefined ? s + c : e;

      if (next) {
        this._next = next;
        next._prev = this;
      }
    },
        _addNonTweeningNumericPT = function _addNonTweeningNumericPT(target, prop, start, end, next, overwriteProp) {
      //cleans up some code redundancies and helps minification. Just a fast way to add a NUMERIC non-tweening CSSPropTween
      var pt = new CSSPropTween(target, prop, start, end - start, next, -1, overwriteProp);
      pt.b = start;
      pt.e = pt.xs0 = end;
      return pt;
    },

    /**
     * Takes a target, the beginning value and ending value (as strings) and parses them into a CSSPropTween (possibly with child CSSPropTweens) that accommodates multiple numbers, colors, comma-delimited values, etc. For example:
     * sp.parseComplex(element, "boxShadow", "5px 10px 20px rgb(255,102,51)", "0px 0px 0px red", true, "0px 0px 0px rgb(0,0,0,0)", pt);
     * It will walk through the beginning and ending values (which should be in the same format with the same number and type of values) and figure out which parts are numbers, what strings separate the numeric/tweenable values, and then create the CSSPropTweens accordingly. If a plugin is defined, no child CSSPropTweens will be created. Instead, the ending values will be stored in the "data" property of the returned CSSPropTween like: {s:-5, xn1:-10, xn2:-20, xn3:255, xn4:0, xn5:0} so that it can be fed to any other plugin and it'll be plain numeric tweens but the recomposition of the complex value will be handled inside CSSPlugin's setRatio().
     * If a setRatio is defined, the type of the CSSPropTween will be set to 2 and recomposition of the values will be the responsibility of that method.
     *
     * @param {!Object} t Target whose property will be tweened
     * @param {!string} p Property that will be tweened (its name, like "left" or "backgroundColor" or "boxShadow")
     * @param {string} b Beginning value
     * @param {string} e Ending value
     * @param {boolean} clrs If true, the value could contain a color value like "rgb(255,0,0)" or "#F00" or "red". The default is false, so no colors will be recognized (a performance optimization)
     * @param {(string|number|Object)} dflt The default beginning value that should be used if no valid beginning value is defined or if the number of values inside the complex beginning and ending values don't match
     * @param {?CSSPropTween} pt CSSPropTween instance that is the current head of the linked list (we'll prepend to this).
     * @param {number=} pr Priority in the linked list order. Higher priority properties will be updated before lower priority ones. The default priority is 0.
     * @param {TweenPlugin=} plugin If a plugin should handle the tweening of extra properties, pass the plugin instance here. If one is defined, then NO subtweens will be created for any extra properties (the properties will be created - just not additional CSSPropTween instances to tween them) because the plugin is expected to do so. However, the end values WILL be populated in the "data" property, like {s:100, xn1:50, xn2:300}
     * @param {function(number)=} setRatio If values should be set in a custom function instead of being pieced together in a type:1 (complex-value) CSSPropTween, define that custom function here.
     * @return {CSSPropTween} The first CSSPropTween in the linked list which includes the new one(s) added by the parseComplex() call.
     */
    _parseComplex = CSSPlugin.parseComplex = function (t, p, b, e, clrs, dflt, pt, pr, plugin, setRatio) {
      //DEBUG: _log("parseComplex: "+p+", b: "+b+", e: "+e);
      b = b || dflt || "";

      if (typeof e === "function") {
        e = e(_index, _target);
      }

      pt = new CSSPropTween(t, p, 0, 0, pt, setRatio ? 2 : 1, null, false, pr, b, e);
      e += ""; //ensures it's a string

      if (clrs && _colorExp.test(e + b)) {
        //if colors are found, normalize the formatting to rgba() or hsla().
        e = [b, e];
        CSSPlugin.colorStringFilter(e);
        b = e[0];
        e = e[1];
      }

      var ba = b.split(", ").join(",").split(" "),
          //beginning array
      ea = e.split(", ").join(",").split(" "),
          //ending array
      l = ba.length,
          autoRound = _autoRound !== false,
          i,
          xi,
          ni,
          bv,
          ev,
          bnums,
          enums,
          bn,
          hasAlpha,
          temp,
          cv,
          str,
          useHSL;

      if (e.indexOf(",") !== -1 || b.indexOf(",") !== -1) {
        if ((e + b).indexOf("rgb") !== -1 || (e + b).indexOf("hsl") !== -1) {
          //keep rgb(), rgba(), hsl(), and hsla() values together! (remember, we're splitting on spaces)
          ba = ba.join(" ").replace(_commasOutsideParenExp, ", ").split(" ");
          ea = ea.join(" ").replace(_commasOutsideParenExp, ", ").split(" ");
        } else {
          ba = ba.join(" ").split(",").join(", ").split(" ");
          ea = ea.join(" ").split(",").join(", ").split(" ");
        }

        l = ba.length;
      }

      if (l !== ea.length) {
        //DEBUG: _log("mismatched formatting detected on " + p + " (" + b + " vs " + e + ")");
        ba = (dflt || "").split(" ");
        l = ba.length;
      }

      pt.plugin = plugin;
      pt.setRatio = setRatio;
      _colorExp.lastIndex = 0;

      for (i = 0; i < l; i++) {
        bv = ba[i];
        ev = ea[i] + "";
        bn = parseFloat(bv); //if the value begins with a number (most common). It's fine if it has a suffix like px

        if (bn || bn === 0) {
          pt.appendXtra("", bn, _parseChange(ev, bn), ev.replace(_relNumExp, ""), autoRound && ev.indexOf("px") !== -1 ? Math.round : false, true); //if the value is a color
        } else if (clrs && _colorExp.test(bv)) {
          str = ev.indexOf(")") + 1;
          str = ")" + (str ? ev.substr(str) : ""); //if there's a comma or ) at the end, retain it.

          useHSL = ev.indexOf("hsl") !== -1 && _supportsOpacity;
          temp = ev; //original string value so we can look for any prefix later.

          bv = _parseColor(bv, useHSL);
          ev = _parseColor(ev, useHSL);
          hasAlpha = bv.length + ev.length > 6;

          if (hasAlpha && !_supportsOpacity && ev[3] === 0) {
            //older versions of IE don't support rgba(), so if the destination alpha is 0, just use "transparent" for the end color
            pt["xs" + pt.l] += pt.l ? " transparent" : "transparent";
            pt.e = pt.e.split(ea[i]).join("transparent");
          } else {
            if (!_supportsOpacity) {
              //old versions of IE don't support rgba().
              hasAlpha = false;
            }

            if (useHSL) {
              pt.appendXtra(temp.substr(0, temp.indexOf("hsl")) + (hasAlpha ? "hsla(" : "hsl("), bv[0], _parseChange(ev[0], bv[0]), ",", false, true).appendXtra("", bv[1], _parseChange(ev[1], bv[1]), "%,", false).appendXtra("", bv[2], _parseChange(ev[2], bv[2]), hasAlpha ? "%," : "%" + str, false);
            } else {
              pt.appendXtra(temp.substr(0, temp.indexOf("rgb")) + (hasAlpha ? "rgba(" : "rgb("), bv[0], ev[0] - bv[0], ",", Math.round, true).appendXtra("", bv[1], ev[1] - bv[1], ",", Math.round).appendXtra("", bv[2], ev[2] - bv[2], hasAlpha ? "," : str, Math.round);
            }

            if (hasAlpha) {
              bv = bv.length < 4 ? 1 : bv[3];
              pt.appendXtra("", bv, (ev.length < 4 ? 1 : ev[3]) - bv, str, false);
            }
          }

          _colorExp.lastIndex = 0; //otherwise the test() on the RegExp could move the lastIndex and taint future results.
        } else {
          bnums = bv.match(_numExp); //gets each group of numbers in the beginning value string and drops them into an array
          //if no number is found, treat it as a non-tweening value and just append the string to the current xs.

          if (!bnums) {
            pt["xs" + pt.l] += pt.l || pt["xs" + pt.l] ? " " + ev : ev; //loop through all the numbers that are found and construct the extra values on the pt.
          } else {
            enums = ev.match(_relNumExp); //get each group of numbers in the end value string and drop them into an array. We allow relative values too, like +=50 or -=.5

            if (!enums || enums.length !== bnums.length) {
              //DEBUG: _log("mismatched formatting detected on " + p + " (" + b + " vs " + e + ")");
              return pt;
            }

            ni = 0;

            for (xi = 0; xi < bnums.length; xi++) {
              cv = bnums[xi];
              temp = bv.indexOf(cv, ni);
              pt.appendXtra(bv.substr(ni, temp - ni), Number(cv), _parseChange(enums[xi], cv), "", autoRound && bv.substr(temp + cv.length, 2) === "px" ? Math.round : false, xi === 0);
              ni = temp + cv.length;
            }

            pt["xs" + pt.l] += bv.substr(ni);
          }
        }
      } //if there are relative values ("+=" or "-=" prefix), we need to adjust the ending value to eliminate the prefixes and combine the values properly.


      if (e.indexOf("=") !== -1) if (pt.data) {
        str = pt.xs0 + pt.data.s;

        for (i = 1; i < pt.l; i++) {
          str += pt["xs" + i] + pt.data["xn" + i];
        }

        pt.e = str + pt["xs" + i];
      }

      if (!pt.l) {
        pt.type = -1;
        pt.xs0 = pt.e;
      }

      return pt.xfirst || pt;
    },
        i = 9;

    p = CSSPropTween.prototype;
    p.l = p.pr = 0; //length (number of extra properties like xn1, xn2, xn3, etc.

    while (--i > 0) {
      p["xn" + i] = 0;
      p["xs" + i] = "";
    }

    p.xs0 = "";
    p._next = p._prev = p.xfirst = p.data = p.plugin = p.setRatio = p.rxp = null;
    /**
     * Appends and extra tweening value to a CSSPropTween and automatically manages any prefix and suffix strings. The first extra value is stored in the s and c of the main CSSPropTween instance, but thereafter any extras are stored in the xn1, xn2, xn3, etc. The prefixes and suffixes are stored in the xs0, xs1, xs2, etc. properties. For example, if I walk through a clip value like "rect(10px, 5px, 0px, 20px)", the values would be stored like this:
     * xs0:"rect(", s:10, xs1:"px, ", xn1:5, xs2:"px, ", xn2:0, xs3:"px, ", xn3:20, xn4:"px)"
     * And they'd all get joined together when the CSSPlugin renders (in the setRatio() method).
     * @param {string=} pfx Prefix (if any)
     * @param {!number} s Starting value
     * @param {!number} c Change in numeric value over the course of the entire tween. For example, if the start is 5 and the end is 100, the change would be 95.
     * @param {string=} sfx Suffix (if any)
     * @param {boolean=} r Round (if true).
     * @param {boolean=} pad If true, this extra value should be separated by the previous one by a space. If there is no previous extra and pad is true, it will automatically drop the space.
     * @return {CSSPropTween} returns itself so that multiple methods can be chained together.
     */

    p.appendXtra = function (pfx, s, c, sfx, r, pad) {
      var pt = this,
          l = pt.l;
      pt["xs" + l] += pad && (l || pt["xs" + l]) ? " " + pfx : pfx || "";
      if (!c) if (l !== 0 && !pt.plugin) {
        //typically we'll combine non-changing values right into the xs to optimize performance, but we don't combine them when there's a plugin that will be tweening the values because it may depend on the values being split apart, like for a bezier, if a value doesn't change between the first and second iteration but then it does on the 3rd, we'll run into trouble because there's no xn slot for that value!
        pt["xs" + l] += s + (sfx || "");
        return pt;
      }
      pt.l++;
      pt.type = pt.setRatio ? 2 : 1;
      pt["xs" + pt.l] = sfx || "";

      if (l > 0) {
        pt.data["xn" + l] = s + c;
        pt.rxp["xn" + l] = r; //round extra property (we need to tap into this in the _parseToProxy() method)

        pt["xn" + l] = s;

        if (!pt.plugin) {
          pt.xfirst = new CSSPropTween(pt, "xn" + l, s, c, pt.xfirst || pt, 0, pt.n, r, pt.pr);
          pt.xfirst.xs0 = 0; //just to ensure that the property stays numeric which helps modern browsers speed up processing. Remember, in the setRatio() method, we do pt.t[pt.p] = val + pt.xs0 so if pt.xs0 is "" (the default), it'll cast the end value as a string. When a property is a number sometimes and a string sometimes, it prevents the compiler from locking in the data type, slowing things down slightly.
        }

        return pt;
      }

      pt.data = {
        s: s + c
      };
      pt.rxp = {};
      pt.s = s;
      pt.c = c;
      pt.r = r;
      return pt;
    };
    /**
     * @constructor A SpecialProp is basically a css property that needs to be treated in a non-standard way, like if it may contain a complex value like boxShadow:"5px 10px 15px rgb(255, 102, 51)" or if it is associated with another plugin like ThrowPropsPlugin or BezierPlugin. Every SpecialProp is associated with a particular property name like "boxShadow" or "throwProps" or "bezier" and it will intercept those values in the vars object that's passed to the CSSPlugin and handle them accordingly.
     * @param {!string} p Property name (like "boxShadow" or "throwProps")
     * @param {Object=} options An object containing any of the following configuration options:
     *                      - defaultValue: the default value
     *                      - parser: A function that should be called when the associated property name is found in the vars. This function should return a CSSPropTween instance and it should ensure that it is properly inserted into the linked list. It will receive 4 paramters: 1) The target, 2) The value defined in the vars, 3) The CSSPlugin instance (whose _firstPT should be used for the linked list), and 4) A computed style object if one was calculated (this is a speed optimization that allows retrieval of starting values quicker)
     *                      - formatter: a function that formats any value received for this special property (for example, boxShadow could take "5px 5px red" and format it to "5px 5px 0px 0px red" so that both the beginning and ending values have a common order and quantity of values.)
     *                      - prefix: if true, we'll determine whether or not this property requires a vendor prefix (like Webkit or Moz or ms or O)
     *                      - color: set this to true if the value for this SpecialProp may contain color-related values like rgb(), rgba(), etc.
     *                      - priority: priority in the linked list order. Higher priority SpecialProps will be updated before lower priority ones. The default priority is 0.
     *                      - multi: if true, the formatter should accommodate a comma-delimited list of values, like boxShadow could have multiple boxShadows listed out.
     *                      - collapsible: if true, the formatter should treat the value like it's a top/right/bottom/left value that could be collapsed, like "5px" would apply to all, "5px, 10px" would use 5px for top/bottom and 10px for right/left, etc.
     *                      - keyword: a special keyword that can [optionally] be found inside the value (like "inset" for boxShadow). This allows us to validate beginning/ending values to make sure they match (if the keyword is found in one, it'll be added to the other for consistency by default).
     */


    var SpecialProp = function SpecialProp(p, options) {
      options = options || {};
      this.p = options.prefix ? _checkPropPrefix(p) || p : p;
      _specialProps[p] = _specialProps[this.p] = this;
      this.format = options.formatter || _getFormatter(options.defaultValue, options.color, options.collapsible, options.multi);

      if (options.parser) {
        this.parse = options.parser;
      }

      this.clrs = options.color;
      this.multi = options.multi;
      this.keyword = options.keyword;
      this.dflt = options.defaultValue;
      this.allowFunc = options.allowFunc;
      this.pr = options.priority || 0;
    },
        //shortcut for creating a new SpecialProp that can accept multiple properties as a comma-delimited list (helps minification). dflt can be an array for multiple values (we don't do a comma-delimited list because the default value may contain commas, like rect(0px,0px,0px,0px)). We attach this method to the SpecialProp class/object instead of using a private _createSpecialProp() method so that we can tap into it externally if necessary, like from another plugin.
    _registerComplexSpecialProp = _internals._registerComplexSpecialProp = function (p, options, defaults) {
      if (_typeof(options) !== "object") {
        options = {
          parser: defaults
        }; //to make backwards compatible with older versions of BezierPlugin and ThrowPropsPlugin
      }

      var a = p.split(","),
          d = options.defaultValue,
          i,
          temp;
      defaults = defaults || [d];

      for (i = 0; i < a.length; i++) {
        options.prefix = i === 0 && options.prefix;
        options.defaultValue = defaults[i] || d;
        temp = new SpecialProp(a[i], options);
      }
    },
        //creates a placeholder special prop for a plugin so that the property gets caught the first time a tween of it is attempted, and at that time it makes the plugin register itself, thus taking over for all future tweens of that property. This allows us to not mandate that things load in a particular order and it also allows us to log() an error that informs the user when they attempt to tween an external plugin-related property without loading its .js file.
    _registerPluginProp = _internals._registerPluginProp = function (p) {
      if (!_specialProps[p]) {
        var pluginName = p.charAt(0).toUpperCase() + p.substr(1) + "Plugin";

        _registerComplexSpecialProp(p, {
          parser: function parser(t, e, p, cssp, pt, plugin, vars) {
            var pluginClass = _globals.com.greensock.plugins[pluginName];

            if (!pluginClass) {
              _log("Error: " + pluginName + " js file not loaded.");

              return pt;
            }

            pluginClass._cssRegister();

            return _specialProps[p].parse(t, e, p, cssp, pt, plugin, vars);
          }
        });
      }
    };

    p = SpecialProp.prototype;
    /**
     * Alias for _parseComplex() that automatically plugs in certain values for this SpecialProp, like its property name, whether or not colors should be sensed, the default value, and priority. It also looks for any keyword that the SpecialProp defines (like "inset" for boxShadow) and ensures that the beginning and ending values have the same number of values for SpecialProps where multi is true (like boxShadow and textShadow can have a comma-delimited list)
     * @param {!Object} t target element
     * @param {(string|number|object)} b beginning value
     * @param {(string|number|object)} e ending (destination) value
     * @param {CSSPropTween=} pt next CSSPropTween in the linked list
     * @param {TweenPlugin=} plugin If another plugin will be tweening the complex value, that TweenPlugin instance goes here.
     * @param {function=} setRatio If a custom setRatio() method should be used to handle this complex value, that goes here.
     * @return {CSSPropTween=} First CSSPropTween in the linked list
     */

    p.parseComplex = function (t, b, e, pt, plugin, setRatio) {
      var kwd = this.keyword,
          i,
          ba,
          ea,
          l,
          bi,
          ei; //if this SpecialProp's value can contain a comma-delimited list of values (like boxShadow or textShadow), we must parse them in a special way, and look for a keyword (like "inset" for boxShadow) and ensure that the beginning and ending BOTH have it if the end defines it as such. We also must ensure that there are an equal number of values specified (we can't tween 1 boxShadow to 3 for example)

      if (this.multi) if (_commasOutsideParenExp.test(e) || _commasOutsideParenExp.test(b)) {
        ba = b.replace(_commasOutsideParenExp, "|").split("|");
        ea = e.replace(_commasOutsideParenExp, "|").split("|");
      } else if (kwd) {
        ba = [b];
        ea = [e];
      }

      if (ea) {
        l = ea.length > ba.length ? ea.length : ba.length;

        for (i = 0; i < l; i++) {
          b = ba[i] = ba[i] || this.dflt;
          e = ea[i] = ea[i] || this.dflt;

          if (kwd) {
            bi = b.indexOf(kwd);
            ei = e.indexOf(kwd);

            if (bi !== ei) {
              if (ei === -1) {
                //if the keyword isn't in the end value, remove it from the beginning one.
                ba[i] = ba[i].split(kwd).join("");
              } else if (bi === -1) {
                //if the keyword isn't in the beginning, add it.
                ba[i] += " " + kwd;
              }
            }
          }
        }

        b = ba.join(", ");
        e = ea.join(", ");
      }

      return _parseComplex(t, this.p, b, e, this.clrs, this.dflt, pt, this.pr, plugin, setRatio);
    };
    /**
     * Accepts a target and end value and spits back a CSSPropTween that has been inserted into the CSSPlugin's linked list and conforms with all the conventions we use internally, like type:-1, 0, 1, or 2, setting up any extra property tweens, priority, etc. For example, if we have a boxShadow SpecialProp and call:
     * this._firstPT = sp.parse(element, "5px 10px 20px rgb(2550,102,51)", "boxShadow", this);
     * It should figure out the starting value of the element's boxShadow, compare it to the provided end value and create all the necessary CSSPropTweens of the appropriate types to tween the boxShadow. The CSSPropTween that gets spit back should already be inserted into the linked list (the 4th parameter is the current head, so prepend to that).
     * @param {!Object} t Target object whose property is being tweened
     * @param {Object} e End value as provided in the vars object (typically a string, but not always - like a throwProps would be an object).
     * @param {!string} p Property name
     * @param {!CSSPlugin} cssp The CSSPlugin instance that should be associated with this tween.
     * @param {?CSSPropTween} pt The CSSPropTween that is the current head of the linked list (we'll prepend to it)
     * @param {TweenPlugin=} plugin If a plugin will be used to tween the parsed value, this is the plugin instance.
     * @param {Object=} vars Original vars object that contains the data for parsing.
     * @return {CSSPropTween} The first CSSPropTween in the linked list which includes the new one(s) added by the parse() call.
     */


    p.parse = function (t, e, p, cssp, pt, plugin, vars) {
      return this.parseComplex(t.style, this.format(_getStyle(t, this.p, _cs, false, this.dflt)), this.format(e), pt, plugin);
    };
    /**
     * Registers a special property that should be intercepted from any "css" objects defined in tweens. This allows you to handle them however you want without CSSPlugin doing it for you. The 2nd parameter should be a function that accepts 3 parameters:
     *  1) Target object whose property should be tweened (typically a DOM element)
     *  2) The end/destination value (could be a string, number, object, or whatever you want)
     *  3) The tween instance (you probably don't need to worry about this, but it can be useful for looking up information like the duration)
     *
     * Then, your function should return a function which will be called each time the tween gets rendered, passing a numeric "ratio" parameter to your function that indicates the change factor (usually between 0 and 1). For example:
     *
     * CSSPlugin.registerSpecialProp("myCustomProp", function(target, value, tween) {
     *      var start = target.style.width;
     *      return function(ratio) {
     *              target.style.width = (start + value * ratio) + "px";
     *              console.log("set width to " + target.style.width);
     *          }
     * }, 0);
     *
     * Then, when I do this tween, it will trigger my special property:
     *
     * TweenLite.to(element, 1, {css:{myCustomProp:100}});
     *
     * In the example, of course, we're just changing the width, but you can do anything you want.
     *
     * @param {!string} name Property name (or comma-delimited list of property names) that should be intercepted and handled by your function. For example, if I define "myCustomProp", then it would handle that portion of the following tween: TweenLite.to(element, 1, {css:{myCustomProp:100}})
     * @param {!function(Object, Object, Object, string):function(number)} onInitTween The function that will be called when a tween of this special property is performed. The function will receive 4 parameters: 1) Target object that should be tweened, 2) Value that was passed to the tween, 3) The tween instance itself (rarely used), and 4) The property name that's being tweened. Your function should return a function that should be called on every update of the tween. That function will receive a single parameter that is a "change factor" value (typically between 0 and 1) indicating the amount of change as a ratio. You can use this to determine how to set the values appropriately in your function.
     * @param {number=} priority Priority that helps the engine determine the order in which to set the properties (default: 0). Higher priority properties will be updated before lower priority ones.
     */


    CSSPlugin.registerSpecialProp = function (name, onInitTween, priority) {
      _registerComplexSpecialProp(name, {
        parser: function parser(t, e, p, cssp, pt, plugin, vars) {
          var rv = new CSSPropTween(t, p, 0, 0, pt, 2, p, false, priority);
          rv.plugin = plugin;
          rv.setRatio = onInitTween(t, e, cssp._tween, p);
          return rv;
        },
        priority: priority
      });
    }; //transform-related methods and properties


    CSSPlugin.useSVGTransformAttr = true; //Safari and Firefox both have some rendering bugs when applying CSS transforms to SVG elements, so default to using the "transform" attribute instead (users can override this).

    var _transformProps = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
        _transformProp = _checkPropPrefix("transform"),
        //the Javascript (camelCase) transform property, like msTransform, WebkitTransform, MozTransform, or OTransform.
    _transformPropCSS = _prefixCSS + "transform",
        _transformOriginProp = _checkPropPrefix("transformOrigin"),
        _supports3D = _checkPropPrefix("perspective") !== null,
        Transform = _internals.Transform = function () {
      this.perspective = parseFloat(CSSPlugin.defaultTransformPerspective) || 0;
      this.force3D = CSSPlugin.defaultForce3D === false || !_supports3D ? false : CSSPlugin.defaultForce3D || "auto";
    },
        _SVGElement = _gsScope.SVGElement,
        _useSVGTransformAttr,
        //Some browsers (like Firefox and IE) don't honor transform-origin properly in SVG elements, so we need to manually adjust the matrix accordingly. We feature detect here rather than always doing the conversion for certain browsers because they may fix the problem at some point in the future.
    _createSVG = function _createSVG(type, container, attributes) {
      var element = _doc.createElementNS("http://www.w3.org/2000/svg", type),
          reg = /([a-z])([A-Z])/g,
          p;

      for (p in attributes) {
        element.setAttributeNS(null, p.replace(reg, "$1-$2").toLowerCase(), attributes[p]);
      }

      container.appendChild(element);
      return element;
    },
        _docElement = _doc.documentElement || {},
        _forceSVGTransformAttr = function () {
      //IE and Android stock don't support CSS transforms on SVG elements, so we must write them to the "transform" attribute. We populate this variable in the _parseTransform() method, and only if/when we come across an SVG element
      var force = _ieVers || /Android/i.test(_agent) && !_gsScope.chrome,
          svg,
          rect,
          width;

      if (_doc.createElementNS && _docElement.appendChild && !force) {
        //IE8 and earlier doesn't support SVG anyway
        svg = _createSVG("svg", _docElement);
        rect = _createSVG("rect", svg, {
          width: 100,
          height: 50,
          x: 100
        });
        width = rect.getBoundingClientRect().width;
        rect.style[_transformOriginProp] = "50% 50%";
        rect.style[_transformProp] = "scaleX(0.5)";
        force = width === rect.getBoundingClientRect().width && !(_isFirefox && _supports3D); //note: Firefox fails the test even though it does support CSS transforms in 3D. Since we can't push 3D stuff into the transform attribute, we force Firefox to pass the test here (as long as it does truly support 3D).

        _docElement.removeChild(svg);
      }

      return force;
    }(),
        _parseSVGOrigin = function _parseSVGOrigin(e, local, decoratee, absolute, smoothOrigin, skipRecord) {
      var tm = e._gsTransform,
          m = _getMatrix(e, true),
          v,
          x,
          y,
          xOrigin,
          yOrigin,
          a,
          b,
          c,
          d,
          tx,
          ty,
          determinant,
          xOriginOld,
          yOriginOld;

      if (tm) {
        xOriginOld = tm.xOrigin; //record the original values before we alter them.

        yOriginOld = tm.yOrigin;
      }

      if (!absolute || (v = absolute.split(" ")).length < 2) {
        b = e.getBBox();

        if (b.x === 0 && b.y === 0 && b.width + b.height === 0) {
          //some browsers (like Firefox) misreport the bounds if the element has zero width and height (it just assumes it's at x:0, y:0), thus we need to manually grab the position in that case.
          b = {
            x: parseFloat(e.hasAttribute("x") ? e.getAttribute("x") : e.hasAttribute("cx") ? e.getAttribute("cx") : 0) || 0,
            y: parseFloat(e.hasAttribute("y") ? e.getAttribute("y") : e.hasAttribute("cy") ? e.getAttribute("cy") : 0) || 0,
            width: 0,
            height: 0
          };
        }

        local = _parsePosition(local).split(" ");
        v = [(local[0].indexOf("%") !== -1 ? parseFloat(local[0]) / 100 * b.width : parseFloat(local[0])) + b.x, (local[1].indexOf("%") !== -1 ? parseFloat(local[1]) / 100 * b.height : parseFloat(local[1])) + b.y];
      }

      decoratee.xOrigin = xOrigin = parseFloat(v[0]);
      decoratee.yOrigin = yOrigin = parseFloat(v[1]);

      if (absolute && m !== _identity2DMatrix) {
        //if svgOrigin is being set, we must invert the matrix and determine where the absolute point is, factoring in the current transforms. Otherwise, the svgOrigin would be based on the element's non-transformed position on the canvas.
        a = m[0];
        b = m[1];
        c = m[2];
        d = m[3];
        tx = m[4];
        ty = m[5];
        determinant = a * d - b * c;

        if (determinant) {
          //if it's zero (like if scaleX and scaleY are zero), skip it to avoid errors with dividing by zero.
          x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + (c * ty - d * tx) / determinant;
          y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - (a * ty - b * tx) / determinant;
          xOrigin = decoratee.xOrigin = v[0] = x;
          yOrigin = decoratee.yOrigin = v[1] = y;
        }
      }

      if (tm) {
        //avoid jump when transformOrigin is changed - adjust the x/y values accordingly
        if (skipRecord) {
          decoratee.xOffset = tm.xOffset;
          decoratee.yOffset = tm.yOffset;
          tm = decoratee;
        }

        if (smoothOrigin || smoothOrigin !== false && CSSPlugin.defaultSmoothOrigin !== false) {
          x = xOrigin - xOriginOld;
          y = yOrigin - yOriginOld; //originally, we simply adjusted the x and y values, but that would cause problems if, for example, you created a rotational tween part-way through an x/y tween. Managing the offset in a separate variable gives us ultimate flexibility.
          //tm.x -= x - (x * m[0] + y * m[2]);
          //tm.y -= y - (x * m[1] + y * m[3]);

          tm.xOffset += x * m[0] + y * m[2] - x;
          tm.yOffset += x * m[1] + y * m[3] - y;
        } else {
          tm.xOffset = tm.yOffset = 0;
        }
      }

      if (!skipRecord) {
        e.setAttribute("data-svg-origin", v.join(" "));
      }
    },
        _getBBoxHack = function _getBBoxHack(swapIfPossible) {
      //works around issues in some browsers (like Firefox) that don't correctly report getBBox() on SVG elements inside a <defs> element and/or <mask>. We try creating an SVG, adding it to the documentElement and toss the element in there so that it's definitely part of the rendering tree, then grab the bbox and if it works, we actually swap out the original getBBox() method for our own that does these extra steps whenever getBBox is needed. This helps ensure that performance is optimal (only do all these extra steps when absolutely necessary...most elements don't need it).
      var svg = _createElement("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
          oldParent = this.parentNode,
          oldSibling = this.nextSibling,
          oldCSS = this.style.cssText,
          bbox;

      _docElement.appendChild(svg);

      svg.appendChild(this);
      this.style.display = "block";

      if (swapIfPossible) {
        try {
          bbox = this.getBBox();
          this._originalGetBBox = this.getBBox;
          this.getBBox = _getBBoxHack;
        } catch (e) {}
      } else if (this._originalGetBBox) {
        bbox = this._originalGetBBox();
      }

      if (oldSibling) {
        oldParent.insertBefore(this, oldSibling);
      } else {
        oldParent.appendChild(this);
      }

      _docElement.removeChild(svg);

      this.style.cssText = oldCSS;
      return bbox;
    },
        _getBBox = function _getBBox(e) {
      try {
        return e.getBBox(); //Firefox throws errors if you try calling getBBox() on an SVG element that's not rendered (like in a <symbol> or <defs>). https://bugzilla.mozilla.org/show_bug.cgi?id=612118
      } catch (error) {
        return _getBBoxHack.call(e, true);
      }
    },
        _isSVG = function _isSVG(e) {
      //reports if the element is an SVG on which getBBox() actually works
      return !!(_SVGElement && e.getCTM && (!e.parentNode || e.ownerSVGElement) && _getBBox(e));
    },
        _identity2DMatrix = [1, 0, 0, 1, 0, 0],
        _getMatrix = function _getMatrix(e, force2D) {
      var tm = e._gsTransform || new Transform(),
          rnd = 100000,
          style = e.style,
          isDefault,
          s,
          m,
          n,
          dec,
          nextSibling,
          parent;

      if (_transformProp) {
        s = _getStyle(e, _transformPropCSS, null, true);
      } else if (e.currentStyle) {
        //for older versions of IE, we need to interpret the filter portion that is in the format: progid:DXImageTransform.Microsoft.Matrix(M11=6.123233995736766e-17, M12=-1, M21=1, M22=6.123233995736766e-17, sizingMethod='auto expand') Notice that we need to swap b and c compared to a normal matrix.
        s = e.currentStyle.filter.match(_ieGetMatrixExp);
        s = s && s.length === 4 ? [s[0].substr(4), Number(s[2].substr(4)), Number(s[1].substr(4)), s[3].substr(4), tm.x || 0, tm.y || 0].join(",") : "";
      }

      isDefault = !s || s === "none" || s === "matrix(1, 0, 0, 1, 0, 0)";

      if (_transformProp && isDefault && !e.offsetParent && e !== _docElement) {
        //note: if offsetParent is null, that means the element isn't in the normal document flow, like if it has display:none or one of its ancestors has display:none). Firefox returns null for getComputedStyle() if the element is in an iframe that has display:none. https://bugzilla.mozilla.org/show_bug.cgi?id=548397
        //browsers don't report transforms accurately unless the element is in the DOM and has a display value that's not "none". Firefox and Microsoft browsers have a partial bug where they'll report transforms even if display:none BUT not any percentage-based values like translate(-50%, 8px) will be reported as if it's translate(0, 8px).
        n = style.display;
        style.display = "block";
        parent = e.parentNode;

        if (!parent || !e.offsetParent) {
          dec = 1; //flag

          nextSibling = e.nextSibling;

          _docElement.appendChild(e); //we must add it to the DOM in order to get values properly

        }

        s = _getStyle(e, _transformPropCSS, null, true);
        isDefault = !s || s === "none" || s === "matrix(1, 0, 0, 1, 0, 0)";

        if (n) {
          style.display = n;
        } else {
          _removeProp(style, "display");
        }

        if (dec) {
          if (nextSibling) {
            parent.insertBefore(e, nextSibling);
          } else if (parent) {
            parent.appendChild(e);
          } else {
            _docElement.removeChild(e);
          }
        }
      }

      if (tm.svg || e.getCTM && _isSVG(e)) {
        if (isDefault && (style[_transformProp] + "").indexOf("matrix") !== -1) {
          //some browsers (like Chrome 40) don't correctly report transforms that are applied inline on an SVG element (they don't get included in the computed style), so we double-check here and accept matrix values
          s = style[_transformProp];
          isDefault = 0;
        }

        m = e.getAttribute("transform");

        if (isDefault && m) {
          m = e.transform.baseVal.consolidate().matrix; //ensures that even complex values like "translate(50,60) rotate(135,0,0)" are parsed because it mashes it into a matrix.

          s = "matrix(" + m.a + "," + m.b + "," + m.c + "," + m.d + "," + m.e + "," + m.f + ")";
          isDefault = 0;
        }
      }

      if (isDefault) {
        return _identity2DMatrix;
      } //split the matrix values out into an array (m for matrix)


      m = (s || "").match(_numExp) || [];
      i = m.length;

      while (--i > -1) {
        n = Number(m[i]);
        m[i] = (dec = n - (n |= 0)) ? (dec * rnd + (dec < 0 ? -0.5 : 0.5) | 0) / rnd + n : n; //convert strings to Numbers and round to 5 decimal places to avoid issues with tiny numbers. Roughly 20x faster than Number.toFixed(). We also must make sure to round before dividing so that values like 0.9999999999 become 1 to avoid glitches in browser rendering and interpretation of flipped/rotated 3D matrices. And don't just multiply the number by rnd, floor it, and then divide by rnd because the bitwise operations max out at a 32-bit signed integer, thus it could get clipped at a relatively low value (like 22,000.00000 for example).
      }

      return force2D && m.length > 6 ? [m[0], m[1], m[4], m[5], m[12], m[13]] : m;
    },

    /**
     * Parses the transform values for an element, returning an object with x, y, z, scaleX, scaleY, scaleZ, rotation, rotationX, rotationY, skewX, and skewY properties. Note: by default (for performance reasons), all skewing is combined into skewX and rotation but skewY still has a place in the transform object so that we can record how much of the skew is attributed to skewX vs skewY. Remember, a skewY of 10 looks the same as a rotation of 10 and skewX of -10.
     * @param {!Object} t target element
     * @param {Object=} cs computed style object (optional)
     * @param {boolean=} rec if true, the transform values will be recorded to the target element's _gsTransform object, like target._gsTransform = {x:0, y:0, z:0, scaleX:1...}
     * @param {boolean=} parse if true, we'll ignore any _gsTransform values that already exist on the element, and force a reparsing of the css (calculated style)
     * @return {object} object containing all of the transform properties/values like {x:0, y:0, z:0, scaleX:1...}
     */
    _getTransform = _internals.getTransform = function (t, cs, rec, parse) {
      if (t._gsTransform && rec && !parse) {
        return t._gsTransform; //if the element already has a _gsTransform, use that. Note: some browsers don't accurately return the calculated style for the transform (particularly for SVG), so it's almost always safest to just use the values we've already applied rather than re-parsing things.
      }

      var tm = rec ? t._gsTransform || new Transform() : new Transform(),
          invX = tm.scaleX < 0,
          //in order to interpret things properly, we need to know if the user applied a negative scaleX previously so that we can adjust the rotation and skewX accordingly. Otherwise, if we always interpret a flipped matrix as affecting scaleY and the user only wants to tween the scaleX on multiple sequential tweens, it would keep the negative scaleY without that being the user's intent.
      min = 0.00002,
          rnd = 100000,
          zOrigin = _supports3D ? parseFloat(_getStyle(t, _transformOriginProp, cs, false, "0 0 0").split(" ")[2]) || tm.zOrigin || 0 : 0,
          defaultTransformPerspective = parseFloat(CSSPlugin.defaultTransformPerspective) || 0,
          m,
          i,
          scaleX,
          scaleY,
          rotation,
          skewX;
      tm.svg = !!(t.getCTM && _isSVG(t));

      if (tm.svg) {
        _parseSVGOrigin(t, _getStyle(t, _transformOriginProp, cs, false, "50% 50%") + "", tm, t.getAttribute("data-svg-origin"));

        _useSVGTransformAttr = CSSPlugin.useSVGTransformAttr || _forceSVGTransformAttr;
      }

      m = _getMatrix(t);

      if (m !== _identity2DMatrix) {
        if (m.length === 16) {
          //we'll only look at these position-related 6 variables first because if x/y/z all match, it's relatively safe to assume we don't need to re-parse everything which risks losing important rotational information (like rotationX:180 plus rotationY:180 would look the same as rotation:180 - there's no way to know for sure which direction was taken based solely on the matrix3d() values)
          var a11 = m[0],
              a21 = m[1],
              a31 = m[2],
              a41 = m[3],
              a12 = m[4],
              a22 = m[5],
              a32 = m[6],
              a42 = m[7],
              a13 = m[8],
              a23 = m[9],
              a33 = m[10],
              a14 = m[12],
              a24 = m[13],
              a34 = m[14],
              a43 = m[11],
              angle = Math.atan2(a32, a33),
              t1,
              t2,
              t3,
              t4,
              cos,
              sin; //we manually compensate for non-zero z component of transformOrigin to work around bugs in Safari

          if (tm.zOrigin) {
            a34 = -tm.zOrigin;
            a14 = a13 * a34 - m[12];
            a24 = a23 * a34 - m[13];
            a34 = a33 * a34 + tm.zOrigin - m[14];
          } //note for possible future consolidation: rotationX: Math.atan2(a32, a33), rotationY: Math.atan2(-a31, Math.sqrt(a33 * a33 + a32 * a32)), rotation: Math.atan2(a21, a11), skew: Math.atan2(a12, a22). However, it doesn't seem to be quite as reliable as the full-on backwards rotation procedure.


          tm.rotationX = angle * _RAD2DEG; //rotationX

          if (angle) {
            cos = Math.cos(-angle);
            sin = Math.sin(-angle);
            t1 = a12 * cos + a13 * sin;
            t2 = a22 * cos + a23 * sin;
            t3 = a32 * cos + a33 * sin;
            a13 = a12 * -sin + a13 * cos;
            a23 = a22 * -sin + a23 * cos;
            a33 = a32 * -sin + a33 * cos;
            a43 = a42 * -sin + a43 * cos;
            a12 = t1;
            a22 = t2;
            a32 = t3;
          } //rotationY


          angle = Math.atan2(-a31, a33);
          tm.rotationY = angle * _RAD2DEG;

          if (angle) {
            cos = Math.cos(-angle);
            sin = Math.sin(-angle);
            t1 = a11 * cos - a13 * sin;
            t2 = a21 * cos - a23 * sin;
            t3 = a31 * cos - a33 * sin;
            a23 = a21 * sin + a23 * cos;
            a33 = a31 * sin + a33 * cos;
            a43 = a41 * sin + a43 * cos;
            a11 = t1;
            a21 = t2;
            a31 = t3;
          } //rotationZ


          angle = Math.atan2(a21, a11);
          tm.rotation = angle * _RAD2DEG;

          if (angle) {
            cos = Math.cos(angle);
            sin = Math.sin(angle);
            t1 = a11 * cos + a21 * sin;
            t2 = a12 * cos + a22 * sin;
            t3 = a13 * cos + a23 * sin;
            a21 = a21 * cos - a11 * sin;
            a22 = a22 * cos - a12 * sin;
            a23 = a23 * cos - a13 * sin;
            a11 = t1;
            a12 = t2;
            a13 = t3;
          }

          if (tm.rotationX && Math.abs(tm.rotationX) + Math.abs(tm.rotation) > 359.9) {
            //when rotationY is set, it will often be parsed as 180 degrees different than it should be, and rotationX and rotation both being 180 (it looks the same), so we adjust for that here.
            tm.rotationX = tm.rotation = 0;
            tm.rotationY = 180 - tm.rotationY;
          } //skewX


          angle = Math.atan2(a12, a22); //scales

          tm.scaleX = (Math.sqrt(a11 * a11 + a21 * a21 + a31 * a31) * rnd + 0.5 | 0) / rnd;
          tm.scaleY = (Math.sqrt(a22 * a22 + a32 * a32) * rnd + 0.5 | 0) / rnd;
          tm.scaleZ = (Math.sqrt(a13 * a13 + a23 * a23 + a33 * a33) * rnd + 0.5 | 0) / rnd;
          a11 /= tm.scaleX;
          a12 /= tm.scaleY;
          a21 /= tm.scaleX;
          a22 /= tm.scaleY;

          if (Math.abs(angle) > min) {
            tm.skewX = angle * _RAD2DEG;
            a12 = 0; //unskews

            if (tm.skewType !== "simple") {
              tm.scaleY *= 1 / Math.cos(angle); //by default, we compensate the scale based on the skew so that the element maintains a similar proportion when skewed, so we have to alter the scaleY here accordingly to match the default (non-adjusted) skewing that CSS does (stretching more and more as it skews).
            }
          } else {
            tm.skewX = 0;
          }
          /* //for testing purposes
          var transform = "matrix3d(",
          	comma = ",",
          	zero = "0";
          a13 /= tm.scaleZ;
          a23 /= tm.scaleZ;
          a31 /= tm.scaleX;
          a32 /= tm.scaleY;
          a33 /= tm.scaleZ;
          transform += ((a11 < min && a11 > -min) ? zero : a11) + comma + ((a21 < min && a21 > -min) ? zero : a21) + comma + ((a31 < min && a31 > -min) ? zero : a31);
          transform += comma + ((a41 < min && a41 > -min) ? zero : a41) + comma + ((a12 < min && a12 > -min) ? zero : a12) + comma + ((a22 < min && a22 > -min) ? zero : a22);
          transform += comma + ((a32 < min && a32 > -min) ? zero : a32) + comma + ((a42 < min && a42 > -min) ? zero : a42) + comma + ((a13 < min && a13 > -min) ? zero : a13);
          transform += comma + ((a23 < min && a23 > -min) ? zero : a23) + comma + ((a33 < min && a33 > -min) ? zero : a33) + comma + ((a43 < min && a43 > -min) ? zero : a43) + comma;
          transform += a14 + comma + a24 + comma + a34 + comma + (tm.perspective ? (1 + (-a34 / tm.perspective)) : 1) + ")";
          console.log(transform);
          document.querySelector(".test").style[_transformProp] = transform;
          */


          tm.perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
          tm.x = a14;
          tm.y = a24;
          tm.z = a34;

          if (tm.svg) {
            tm.x -= tm.xOrigin - (tm.xOrigin * a11 - tm.yOrigin * a12);
            tm.y -= tm.yOrigin - (tm.yOrigin * a21 - tm.xOrigin * a22);
          }
        } else if (!_supports3D || parse || !m.length || tm.x !== m[4] || tm.y !== m[5] || !tm.rotationX && !tm.rotationY) {
          //sometimes a 6-element matrix is returned even when we performed 3D transforms, like if rotationX and rotationY are 180. In cases like this, we still need to honor the 3D transforms. If we just rely on the 2D info, it could affect how the data is interpreted, like scaleY might get set to -1 or rotation could get offset by 180 degrees. For example, do a TweenLite.to(element, 1, {css:{rotationX:180, rotationY:180}}) and then later, TweenLite.to(element, 1, {css:{rotationX:0}}) and without this conditional logic in place, it'd jump to a state of being unrotated when the 2nd tween starts. Then again, we need to honor the fact that the user COULD alter the transforms outside of CSSPlugin, like by manually applying new css, so we try to sense that by looking at x and y because if those changed, we know the changes were made outside CSSPlugin and we force a reinterpretation of the matrix values. Also, in Webkit browsers, if the element's "display" is "none", its calculated style value will always return empty, so if we've already recorded the values in the _gsTransform object, we'll just rely on those.
          var k = m.length >= 6,
              a = k ? m[0] : 1,
              b = m[1] || 0,
              c = m[2] || 0,
              d = k ? m[3] : 1;
          tm.x = m[4] || 0;
          tm.y = m[5] || 0;
          scaleX = Math.sqrt(a * a + b * b);
          scaleY = Math.sqrt(d * d + c * c);
          rotation = a || b ? Math.atan2(b, a) * _RAD2DEG : tm.rotation || 0; //note: if scaleX is 0, we cannot accurately measure rotation. Same for skewX with a scaleY of 0. Therefore, we default to the previously recorded value (or zero if that doesn't exist).

          skewX = c || d ? Math.atan2(c, d) * _RAD2DEG + rotation : tm.skewX || 0;
          tm.scaleX = scaleX;
          tm.scaleY = scaleY;
          tm.rotation = rotation;
          tm.skewX = skewX;

          if (_supports3D) {
            tm.rotationX = tm.rotationY = tm.z = 0;
            tm.perspective = defaultTransformPerspective;
            tm.scaleZ = 1;
          }

          if (tm.svg) {
            tm.x -= tm.xOrigin - (tm.xOrigin * a + tm.yOrigin * c);
            tm.y -= tm.yOrigin - (tm.xOrigin * b + tm.yOrigin * d);
          }
        }

        if (Math.abs(tm.skewX) > 90 && Math.abs(tm.skewX) < 270) {
          if (invX) {
            tm.scaleX *= -1;
            tm.skewX += tm.rotation <= 0 ? 180 : -180;
            tm.rotation += tm.rotation <= 0 ? 180 : -180;
          } else {
            tm.scaleY *= -1;
            tm.skewX += tm.skewX <= 0 ? 180 : -180;
          }
        }

        tm.zOrigin = zOrigin; //some browsers have a hard time with very small values like 2.4492935982947064e-16 (notice the "e-" towards the end) and would render the object slightly off. So we round to 0 in these cases. The conditional logic here is faster than calling Math.abs(). Also, browsers tend to render a SLIGHTLY rotated object in a fuzzy way, so we need to snap to exactly 0 when appropriate.

        for (i in tm) {
          if (tm[i] < min) if (tm[i] > -min) {
            tm[i] = 0;
          }
        }
      } //DEBUG: _log("parsed rotation of " + t.getAttribute("id")+": "+(tm.rotationX)+", "+(tm.rotationY)+", "+(tm.rotation)+", scale: "+tm.scaleX+", "+tm.scaleY+", "+tm.scaleZ+", position: "+tm.x+", "+tm.y+", "+tm.z+", perspective: "+tm.perspective+ ", origin: "+ tm.xOrigin+ ","+ tm.yOrigin);


      if (rec) {
        t._gsTransform = tm; //record to the object's _gsTransform which we use so that tweens can control individual properties independently (we need all the properties to accurately recompose the matrix in the setRatio() method)

        if (tm.svg) {
          //if we're supposed to apply transforms to the SVG element's "transform" attribute, make sure there aren't any CSS transforms applied or they'll override the attribute ones. Also clear the transform attribute if we're using CSS, just to be clean.
          if (_useSVGTransformAttr && t.style[_transformProp]) {
            TweenLite.delayedCall(0.001, function () {
              //if we apply this right away (before anything has rendered), we risk there being no transforms for a brief moment and it also interferes with adjusting the transformOrigin in a tween with immediateRender:true (it'd try reading the matrix and it wouldn't have the appropriate data in place because we just removed it).
              _removeProp(t.style, _transformProp);
            });
          } else if (!_useSVGTransformAttr && t.getAttribute("transform")) {
            TweenLite.delayedCall(0.001, function () {
              t.removeAttribute("transform");
            });
          }
        }
      }

      return tm;
    },
        //for setting 2D transforms in IE6, IE7, and IE8 (must use a "filter" to emulate the behavior of modern day browser transforms)
    _setIETransformRatio = function _setIETransformRatio(v) {
      var t = this.data,
          //refers to the element's _gsTransform object
      ang = -t.rotation * _DEG2RAD,
          skew = ang + t.skewX * _DEG2RAD,
          rnd = 100000,
          a = (Math.cos(ang) * t.scaleX * rnd | 0) / rnd,
          b = (Math.sin(ang) * t.scaleX * rnd | 0) / rnd,
          c = (Math.sin(skew) * -t.scaleY * rnd | 0) / rnd,
          d = (Math.cos(skew) * t.scaleY * rnd | 0) / rnd,
          style = this.t.style,
          cs = this.t.currentStyle,
          filters,
          val;

      if (!cs) {
        return;
      }

      val = b; //just for swapping the variables an inverting them (reused "val" to avoid creating another variable in memory). IE's filter matrix uses a non-standard matrix configuration (angle goes the opposite way, and b and c are reversed and inverted)

      b = -c;
      c = -val;
      filters = cs.filter;
      style.filter = ""; //remove filters so that we can accurately measure offsetWidth/offsetHeight

      var w = this.t.offsetWidth,
          h = this.t.offsetHeight,
          clip = cs.position !== "absolute",
          m = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + b + ", M21=" + c + ", M22=" + d,
          ox = t.x + w * t.xPercent / 100,
          oy = t.y + h * t.yPercent / 100,
          dx,
          dy; //if transformOrigin is being used, adjust the offset x and y

      if (t.ox != null) {
        dx = (t.oxp ? w * t.ox * 0.01 : t.ox) - w / 2;
        dy = (t.oyp ? h * t.oy * 0.01 : t.oy) - h / 2;
        ox += dx - (dx * a + dy * b);
        oy += dy - (dx * c + dy * d);
      }

      if (!clip) {
        m += ", sizingMethod='auto expand')";
      } else {
        dx = w / 2;
        dy = h / 2; //translate to ensure that transformations occur around the correct origin (default is center).

        m += ", Dx=" + (dx - (dx * a + dy * b) + ox) + ", Dy=" + (dy - (dx * c + dy * d) + oy) + ")";
      }

      if (filters.indexOf("DXImageTransform.Microsoft.Matrix(") !== -1) {
        style.filter = filters.replace(_ieSetMatrixExp, m);
      } else {
        style.filter = m + " " + filters; //we must always put the transform/matrix FIRST (before alpha(opacity=xx)) to avoid an IE bug that slices part of the object when rotation is applied with alpha.
      } //at the end or beginning of the tween, if the matrix is normal (1, 0, 0, 1) and opacity is 100 (or doesn't exist), remove the filter to improve browser performance.


      if (v === 0 || v === 1) if (a === 1) if (b === 0) if (c === 0) if (d === 1) if (!clip || m.indexOf("Dx=0, Dy=0") !== -1) if (!_opacityExp.test(filters) || parseFloat(RegExp.$1) === 100) if (filters.indexOf("gradient(" && filters.indexOf("Alpha")) === -1) {
        style.removeAttribute("filter");
      } //we must set the margins AFTER applying the filter in order to avoid some bugs in IE8 that could (in rare scenarios) cause them to be ignored intermittently (vibration).

      if (!clip) {
        var mult = _ieVers < 8 ? 1 : -1,
            //in Internet Explorer 7 and before, the box model is broken, causing the browser to treat the width/height of the actual rotated filtered image as the width/height of the box itself, but Microsoft corrected that in IE8. We must use a negative offset in IE8 on the right/bottom
        marg,
            prop,
            dif;
        dx = t.ieOffsetX || 0;
        dy = t.ieOffsetY || 0;
        t.ieOffsetX = Math.round((w - ((a < 0 ? -a : a) * w + (b < 0 ? -b : b) * h)) / 2 + ox);
        t.ieOffsetY = Math.round((h - ((d < 0 ? -d : d) * h + (c < 0 ? -c : c) * w)) / 2 + oy);

        for (i = 0; i < 4; i++) {
          prop = _margins[i];
          marg = cs[prop]; //we need to get the current margin in case it is being tweened separately (we want to respect that tween's changes)

          val = marg.indexOf("px") !== -1 ? parseFloat(marg) : _convertToPixels(this.t, prop, parseFloat(marg), marg.replace(_suffixExp, "")) || 0;

          if (val !== t[prop]) {
            dif = i < 2 ? -t.ieOffsetX : -t.ieOffsetY; //if another tween is controlling a margin, we cannot only apply the difference in the ieOffsets, so we essentially zero-out the dx and dy here in that case. We record the margin(s) later so that we can keep comparing them, making this code very flexible.
          } else {
            dif = i < 2 ? dx - t.ieOffsetX : dy - t.ieOffsetY;
          }

          style[prop] = (t[prop] = Math.round(val - dif * (i === 0 || i === 2 ? 1 : mult))) + "px";
        }
      }
    },

    /* translates a super small decimal to a string WITHOUT scientific notation
    _safeDecimal = function(n) {
    	var s = (n < 0 ? -n : n) + "",
    		a = s.split("e-");
    	return (n < 0 ? "-0." : "0.") + new Array(parseInt(a[1], 10) || 0).join("0") + a[0].split(".").join("");
    },
    */
    _setTransformRatio = _internals.set3DTransformRatio = _internals.setTransformRatio = function (v) {
      var t = this.data,
          //refers to the element's _gsTransform object
      style = this.t.style,
          angle = t.rotation,
          rotationX = t.rotationX,
          rotationY = t.rotationY,
          sx = t.scaleX,
          sy = t.scaleY,
          sz = t.scaleZ,
          x = t.x,
          y = t.y,
          z = t.z,
          isSVG = t.svg,
          perspective = t.perspective,
          force3D = t.force3D,
          skewY = t.skewY,
          skewX = t.skewX,
          t1,
          a11,
          a12,
          a13,
          a21,
          a22,
          a23,
          a31,
          a32,
          a33,
          a41,
          a42,
          a43,
          zOrigin,
          min,
          cos,
          sin,
          t2,
          transform,
          comma,
          zero,
          skew,
          rnd;

      if (skewY) {
        //for performance reasons, we combine all skewing into the skewX and rotation values. Remember, a skewY of 10 degrees looks the same as a rotation of 10 degrees plus a skewX of 10 degrees.
        skewX += skewY;
        angle += skewY;
      } //check to see if we should render as 2D (and SVGs must use 2D when _useSVGTransformAttr is true)


      if (((v === 1 || v === 0) && force3D === "auto" && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime) || !force3D) && !z && !perspective && !rotationY && !rotationX && sz === 1 || _useSVGTransformAttr && isSVG || !_supports3D) {
        //on the final render (which could be 0 for a from tween), if there are no 3D aspects, render in 2D to free up memory and improve performance especially on mobile devices. Check the tween's totalTime/totalDuration too in order to make sure it doesn't happen between repeats if it's a repeating tween.
        //2D
        if (angle || skewX || isSVG) {
          angle *= _DEG2RAD;
          skew = skewX * _DEG2RAD;
          rnd = 100000;
          a11 = Math.cos(angle) * sx;
          a21 = Math.sin(angle) * sx;
          a12 = Math.sin(angle - skew) * -sy;
          a22 = Math.cos(angle - skew) * sy;

          if (skew && t.skewType === "simple") {
            //by default, we compensate skewing on the other axis to make it look more natural, but you can set the skewType to "simple" to use the uncompensated skewing that CSS does
            t1 = Math.tan(skew - skewY * _DEG2RAD);
            t1 = Math.sqrt(1 + t1 * t1);
            a12 *= t1;
            a22 *= t1;

            if (skewY) {
              t1 = Math.tan(skewY * _DEG2RAD);
              t1 = Math.sqrt(1 + t1 * t1);
              a11 *= t1;
              a21 *= t1;
            }
          }

          if (isSVG) {
            x += t.xOrigin - (t.xOrigin * a11 + t.yOrigin * a12) + t.xOffset;
            y += t.yOrigin - (t.xOrigin * a21 + t.yOrigin * a22) + t.yOffset;

            if (_useSVGTransformAttr && (t.xPercent || t.yPercent)) {
              //The SVG spec doesn't support percentage-based translation in the "transform" attribute, so we merge it into the matrix to simulate it.
              min = this.t.getBBox();
              x += t.xPercent * 0.01 * min.width;
              y += t.yPercent * 0.01 * min.height;
            }

            min = 0.000001;
            if (x < min) if (x > -min) {
              x = 0;
            }
            if (y < min) if (y > -min) {
              y = 0;
            }
          }

          transform = (a11 * rnd | 0) / rnd + "," + (a21 * rnd | 0) / rnd + "," + (a12 * rnd | 0) / rnd + "," + (a22 * rnd | 0) / rnd + "," + x + "," + y + ")";

          if (isSVG && _useSVGTransformAttr) {
            this.t.setAttribute("transform", "matrix(" + transform);
          } else {
            //some browsers have a hard time with very small values like 2.4492935982947064e-16 (notice the "e-" towards the end) and would render the object slightly off. So we round to 5 decimal places.
            style[_transformProp] = (t.xPercent || t.yPercent ? "translate(" + t.xPercent + "%," + t.yPercent + "%) matrix(" : "matrix(") + transform;
          }
        } else {
          style[_transformProp] = (t.xPercent || t.yPercent ? "translate(" + t.xPercent + "%," + t.yPercent + "%) matrix(" : "matrix(") + sx + ",0,0," + sy + "," + x + "," + y + ")";
        }

        return;
      }

      if (_isFirefox) {
        //Firefox has a bug (at least in v25) that causes it to render the transparent part of 32-bit PNG images as black when displayed inside an iframe and the 3D scale is very small and doesn't change sufficiently enough between renders (like if you use a Power4.easeInOut to scale from 0 to 1 where the beginning values only change a tiny amount to begin the tween before accelerating). In this case, we force the scale to be 0.00002 instead which is visually the same but works around the Firefox issue.
        min = 0.0001;

        if (sx < min && sx > -min) {
          sx = sz = 0.00002;
        }

        if (sy < min && sy > -min) {
          sy = sz = 0.00002;
        }

        if (perspective && !t.z && !t.rotationX && !t.rotationY) {
          //Firefox has a bug that causes elements to have an odd super-thin, broken/dotted black border on elements that have a perspective set but aren't utilizing 3D space (no rotationX, rotationY, or z).
          perspective = 0;
        }
      }

      if (angle || skewX) {
        angle *= _DEG2RAD;
        cos = a11 = Math.cos(angle);
        sin = a21 = Math.sin(angle);

        if (skewX) {
          angle -= skewX * _DEG2RAD;
          cos = Math.cos(angle);
          sin = Math.sin(angle);

          if (t.skewType === "simple") {
            //by default, we compensate skewing on the other axis to make it look more natural, but you can set the skewType to "simple" to use the uncompensated skewing that CSS does
            t1 = Math.tan((skewX - skewY) * _DEG2RAD);
            t1 = Math.sqrt(1 + t1 * t1);
            cos *= t1;
            sin *= t1;

            if (t.skewY) {
              t1 = Math.tan(skewY * _DEG2RAD);
              t1 = Math.sqrt(1 + t1 * t1);
              a11 *= t1;
              a21 *= t1;
            }
          }
        }

        a12 = -sin;
        a22 = cos;
      } else if (!rotationY && !rotationX && sz === 1 && !perspective && !isSVG) {
        //if we're only translating and/or 2D scaling, this is faster...
        style[_transformProp] = (t.xPercent || t.yPercent ? "translate(" + t.xPercent + "%," + t.yPercent + "%) translate3d(" : "translate3d(") + x + "px," + y + "px," + z + "px)" + (sx !== 1 || sy !== 1 ? " scale(" + sx + "," + sy + ")" : "");
        return;
      } else {
        a11 = a22 = 1;
        a12 = a21 = 0;
      } // KEY  INDEX   AFFECTS a[row][column]
      // a11  0       rotation, rotationY, scaleX
      // a21  1       rotation, rotationY, scaleX
      // a31  2       rotationY, scaleX
      // a41  3       rotationY, scaleX
      // a12  4       rotation, skewX, rotationX, scaleY
      // a22  5       rotation, skewX, rotationX, scaleY
      // a32  6       rotationX, scaleY
      // a42  7       rotationX, scaleY
      // a13  8       rotationY, rotationX, scaleZ
      // a23  9       rotationY, rotationX, scaleZ
      // a33  10      rotationY, rotationX, scaleZ
      // a43  11      rotationY, rotationX, perspective, scaleZ
      // a14  12      x, zOrigin, svgOrigin
      // a24  13      y, zOrigin, svgOrigin
      // a34  14      z, zOrigin
      // a44  15
      // rotation: Math.atan2(a21, a11)
      // rotationY: Math.atan2(a13, a33) (or Math.atan2(a13, a11))
      // rotationX: Math.atan2(a32, a33)


      a33 = 1;
      a13 = a23 = a31 = a32 = a41 = a42 = 0;
      a43 = perspective ? -1 / perspective : 0;
      zOrigin = t.zOrigin;
      min = 0.000001; //threshold below which browsers use scientific notation which won't work.

      comma = ",";
      zero = "0";
      angle = rotationY * _DEG2RAD;

      if (angle) {
        cos = Math.cos(angle);
        sin = Math.sin(angle);
        a31 = -sin;
        a41 = a43 * -sin;
        a13 = a11 * sin;
        a23 = a21 * sin;
        a33 = cos;
        a43 *= cos;
        a11 *= cos;
        a21 *= cos;
      }

      angle = rotationX * _DEG2RAD;

      if (angle) {
        cos = Math.cos(angle);
        sin = Math.sin(angle);
        t1 = a12 * cos + a13 * sin;
        t2 = a22 * cos + a23 * sin;
        a32 = a33 * sin;
        a42 = a43 * sin;
        a13 = a12 * -sin + a13 * cos;
        a23 = a22 * -sin + a23 * cos;
        a33 = a33 * cos;
        a43 = a43 * cos;
        a12 = t1;
        a22 = t2;
      }

      if (sz !== 1) {
        a13 *= sz;
        a23 *= sz;
        a33 *= sz;
        a43 *= sz;
      }

      if (sy !== 1) {
        a12 *= sy;
        a22 *= sy;
        a32 *= sy;
        a42 *= sy;
      }

      if (sx !== 1) {
        a11 *= sx;
        a21 *= sx;
        a31 *= sx;
        a41 *= sx;
      }

      if (zOrigin || isSVG) {
        if (zOrigin) {
          x += a13 * -zOrigin;
          y += a23 * -zOrigin;
          z += a33 * -zOrigin + zOrigin;
        }

        if (isSVG) {
          //due to bugs in some browsers, we need to manage the transform-origin of SVG manually
          x += t.xOrigin - (t.xOrigin * a11 + t.yOrigin * a12) + t.xOffset;
          y += t.yOrigin - (t.xOrigin * a21 + t.yOrigin * a22) + t.yOffset;
        }

        if (x < min && x > -min) {
          x = zero;
        }

        if (y < min && y > -min) {
          y = zero;
        }

        if (z < min && z > -min) {
          z = 0; //don't use string because we calculate perspective later and need the number.
        }
      } //optimized way of concatenating all the values into a string. If we do it all in one shot, it's slower because of the way browsers have to create temp strings and the way it affects memory. If we do it piece-by-piece with +=, it's a bit slower too. We found that doing it in these sized chunks works best overall:


      transform = t.xPercent || t.yPercent ? "translate(" + t.xPercent + "%," + t.yPercent + "%) matrix3d(" : "matrix3d(";
      transform += (a11 < min && a11 > -min ? zero : a11) + comma + (a21 < min && a21 > -min ? zero : a21) + comma + (a31 < min && a31 > -min ? zero : a31);
      transform += comma + (a41 < min && a41 > -min ? zero : a41) + comma + (a12 < min && a12 > -min ? zero : a12) + comma + (a22 < min && a22 > -min ? zero : a22);

      if (rotationX || rotationY || sz !== 1) {
        //performance optimization (often there's no rotationX or rotationY, so we can skip these calculations)
        transform += comma + (a32 < min && a32 > -min ? zero : a32) + comma + (a42 < min && a42 > -min ? zero : a42) + comma + (a13 < min && a13 > -min ? zero : a13);
        transform += comma + (a23 < min && a23 > -min ? zero : a23) + comma + (a33 < min && a33 > -min ? zero : a33) + comma + (a43 < min && a43 > -min ? zero : a43) + comma;
      } else {
        transform += ",0,0,0,0,1,0,";
      }

      transform += x + comma + y + comma + z + comma + (perspective ? 1 + -z / perspective : 1) + ")";
      style[_transformProp] = transform;
    };

    p = Transform.prototype;
    p.x = p.y = p.z = p.skewX = p.skewY = p.rotation = p.rotationX = p.rotationY = p.zOrigin = p.xPercent = p.yPercent = p.xOffset = p.yOffset = 0;
    p.scaleX = p.scaleY = p.scaleZ = 1;

    _registerComplexSpecialProp("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
      parser: function parser(t, e, parsingProp, cssp, pt, plugin, vars) {
        if (cssp._lastParsedTransform === vars) {
          return pt;
        } //only need to parse the transform once, and only if the browser supports it.


        cssp._lastParsedTransform = vars;
        var scaleFunc = vars.scale && typeof vars.scale === "function" ? vars.scale : 0; //if there's a function-based "scale" value, swap in the resulting numeric value temporarily. Otherwise, if it's called for both scaleX and scaleY independently, they may not match (like if the function uses Math.random()).

        if (scaleFunc) {
          vars.scale = scaleFunc(_index, t);
        }

        var originalGSTransform = t._gsTransform,
            style = t.style,
            min = 0.000001,
            i = _transformProps.length,
            v = vars,
            endRotations = {},
            transformOriginString = "transformOrigin",
            m1 = _getTransform(t, _cs, true, v.parseTransform),
            orig = v.transform && (typeof v.transform === "function" ? v.transform(_index, _target) : v.transform),
            m2,
            copy,
            has3D,
            hasChange,
            dr,
            x,
            y,
            matrix,
            p;

        m1.skewType = v.skewType || m1.skewType || CSSPlugin.defaultSkewType;
        cssp._transform = m1;

        if ("rotationZ" in v) {
          v.rotation = v.rotationZ;
        }

        if (orig && typeof orig === "string" && _transformProp) {
          //for values like transform:"rotate(60deg) scale(0.5, 0.8)"
          copy = _tempDiv.style; //don't use the original target because it might be SVG in which case some browsers don't report computed style correctly.

          copy[_transformProp] = orig;
          copy.display = "block"; //if display is "none", the browser often refuses to report the transform properties correctly.

          copy.position = "absolute";

          if (orig.indexOf("%") !== -1) {
            //%-based translations will fail unless we set the width/height to match the original target...
            copy.width = _getStyle(t, "width");
            copy.height = _getStyle(t, "height");
          }

          _doc.body.appendChild(_tempDiv);

          m2 = _getTransform(_tempDiv, null, false);

          if (m1.skewType === "simple") {
            //the default _getTransform() reports the skewX/scaleY as if skewType is "compensated", thus we need to adjust that here if skewType is "simple".
            m2.scaleY *= Math.cos(m2.skewX * _DEG2RAD);
          }

          if (m1.svg) {
            //if it's an SVG element, x/y part of the matrix will be affected by whatever we use as the origin and the offsets, so compensate here...
            x = m1.xOrigin;
            y = m1.yOrigin;
            m2.x -= m1.xOffset;
            m2.y -= m1.yOffset;

            if (v.transformOrigin || v.svgOrigin) {
              //if this tween is altering the origin, we must factor that in here. The actual work of recording the transformOrigin values and setting up the PropTween is done later (still inside this function) so we cannot leave the changes intact here - we only want to update the x/y accordingly.
              orig = {};

              _parseSVGOrigin(t, _parsePosition(v.transformOrigin), orig, v.svgOrigin, v.smoothOrigin, true);

              x = orig.xOrigin;
              y = orig.yOrigin;
              m2.x -= orig.xOffset - m1.xOffset;
              m2.y -= orig.yOffset - m1.yOffset;
            }

            if (x || y) {
              matrix = _getMatrix(_tempDiv, true);
              m2.x -= x - (x * matrix[0] + y * matrix[2]);
              m2.y -= y - (x * matrix[1] + y * matrix[3]);
            }
          }

          _doc.body.removeChild(_tempDiv);

          if (!m2.perspective) {
            m2.perspective = m1.perspective; //tweening to no perspective gives very unintuitive results - just keep the same perspective in that case.
          }

          if (v.xPercent != null) {
            m2.xPercent = _parseVal(v.xPercent, m1.xPercent);
          }

          if (v.yPercent != null) {
            m2.yPercent = _parseVal(v.yPercent, m1.yPercent);
          }
        } else if (_typeof(v) === "object") {
          //for values like scaleX, scaleY, rotation, x, y, skewX, and skewY or transform:{...} (object)
          m2 = {
            scaleX: _parseVal(v.scaleX != null ? v.scaleX : v.scale, m1.scaleX),
            scaleY: _parseVal(v.scaleY != null ? v.scaleY : v.scale, m1.scaleY),
            scaleZ: _parseVal(v.scaleZ, m1.scaleZ),
            x: _parseVal(v.x, m1.x),
            y: _parseVal(v.y, m1.y),
            z: _parseVal(v.z, m1.z),
            xPercent: _parseVal(v.xPercent, m1.xPercent),
            yPercent: _parseVal(v.yPercent, m1.yPercent),
            perspective: _parseVal(v.transformPerspective, m1.perspective)
          };
          dr = v.directionalRotation;

          if (dr != null) {
            if (_typeof(dr) === "object") {
              for (copy in dr) {
                v[copy] = dr[copy];
              }
            } else {
              v.rotation = dr;
            }
          }

          if (typeof v.x === "string" && v.x.indexOf("%") !== -1) {
            m2.x = 0;
            m2.xPercent = _parseVal(v.x, m1.xPercent);
          }

          if (typeof v.y === "string" && v.y.indexOf("%") !== -1) {
            m2.y = 0;
            m2.yPercent = _parseVal(v.y, m1.yPercent);
          }

          m2.rotation = _parseAngle("rotation" in v ? v.rotation : "shortRotation" in v ? v.shortRotation + "_short" : m1.rotation, m1.rotation, "rotation", endRotations);

          if (_supports3D) {
            m2.rotationX = _parseAngle("rotationX" in v ? v.rotationX : "shortRotationX" in v ? v.shortRotationX + "_short" : m1.rotationX || 0, m1.rotationX, "rotationX", endRotations);
            m2.rotationY = _parseAngle("rotationY" in v ? v.rotationY : "shortRotationY" in v ? v.shortRotationY + "_short" : m1.rotationY || 0, m1.rotationY, "rotationY", endRotations);
          }

          m2.skewX = _parseAngle(v.skewX, m1.skewX);
          m2.skewY = _parseAngle(v.skewY, m1.skewY);
        }

        if (_supports3D && v.force3D != null) {
          m1.force3D = v.force3D;
          hasChange = true;
        }

        has3D = m1.force3D || m1.z || m1.rotationX || m1.rotationY || m2.z || m2.rotationX || m2.rotationY || m2.perspective;

        if (!has3D && v.scale != null) {
          m2.scaleZ = 1; //no need to tween scaleZ.
        }

        while (--i > -1) {
          p = _transformProps[i];
          orig = m2[p] - m1[p];

          if (orig > min || orig < -min || v[p] != null || _forcePT[p] != null) {
            hasChange = true;
            pt = new CSSPropTween(m1, p, m1[p], orig, pt);

            if (p in endRotations) {
              pt.e = endRotations[p]; //directional rotations typically have compensated values during the tween, but we need to make sure they end at exactly what the user requested
            }

            pt.xs0 = 0; //ensures the value stays numeric in setRatio()

            pt.plugin = plugin;

            cssp._overwriteProps.push(pt.n);
          }
        }

        orig = typeof v.transformOrigin === "function" ? v.transformOrigin(_index, _target) : v.transformOrigin;

        if (m1.svg && (orig || v.svgOrigin)) {
          x = m1.xOffset; //when we change the origin, in order to prevent things from jumping we adjust the x/y so we must record those here so that we can create PropTweens for them and flip them at the same time as the origin

          y = m1.yOffset;

          _parseSVGOrigin(t, _parsePosition(orig), m2, v.svgOrigin, v.smoothOrigin);

          pt = _addNonTweeningNumericPT(m1, "xOrigin", (originalGSTransform ? m1 : m2).xOrigin, m2.xOrigin, pt, transformOriginString); //note: if there wasn't a transformOrigin defined yet, just start with the destination one; it's wasteful otherwise, and it causes problems with fromTo() tweens. For example, TweenLite.to("#wheel", 3, {rotation:180, transformOrigin:"50% 50%", delay:1}); TweenLite.fromTo("#wheel", 3, {scale:0.5, transformOrigin:"50% 50%"}, {scale:1, delay:2}); would cause a jump when the from values revert at the beginning of the 2nd tween.

          pt = _addNonTweeningNumericPT(m1, "yOrigin", (originalGSTransform ? m1 : m2).yOrigin, m2.yOrigin, pt, transformOriginString);

          if (x !== m1.xOffset || y !== m1.yOffset) {
            pt = _addNonTweeningNumericPT(m1, "xOffset", originalGSTransform ? x : m1.xOffset, m1.xOffset, pt, transformOriginString);
            pt = _addNonTweeningNumericPT(m1, "yOffset", originalGSTransform ? y : m1.yOffset, m1.yOffset, pt, transformOriginString);
          }

          orig = "0px 0px"; //certain browsers (like firefox) completely botch transform-origin, so we must remove it to prevent it from contaminating transforms. We manage it ourselves with xOrigin and yOrigin
        }

        if (orig || _supports3D && has3D && m1.zOrigin) {
          //if anything 3D is happening and there's a transformOrigin with a z component that's non-zero, we must ensure that the transformOrigin's z-component is set to 0 so that we can manually do those calculations to get around Safari bugs. Even if the user didn't specifically define a "transformOrigin" in this particular tween (maybe they did it via css directly).
          if (_transformProp) {
            hasChange = true;
            p = _transformOriginProp;

            if (!orig) {
              orig = (_getStyle(t, p, _cs, false, "50% 50%") + "").split(" ");
              orig = orig[0] + " " + orig[1] + " " + m1.zOrigin + "px";
            }

            orig += "";
            pt = new CSSPropTween(style, p, 0, 0, pt, -1, transformOriginString);
            pt.b = style[p];
            pt.plugin = plugin;

            if (_supports3D) {
              copy = m1.zOrigin;
              orig = orig.split(" ");
              m1.zOrigin = (orig.length > 2 ? parseFloat(orig[2]) : copy) || 0; //Safari doesn't handle the z part of transformOrigin correctly, so we'll manually handle it in the _set3DTransformRatio() method.

              pt.xs0 = pt.e = orig[0] + " " + (orig[1] || "50%") + " 0px"; //we must define a z value of 0px specifically otherwise iOS 5 Safari will stick with the old one (if one was defined)!

              pt = new CSSPropTween(m1, "zOrigin", 0, 0, pt, -1, pt.n); //we must create a CSSPropTween for the _gsTransform.zOrigin so that it gets reset properly at the beginning if the tween runs backward (as opposed to just setting m1.zOrigin here)

              pt.b = copy;
              pt.xs0 = pt.e = m1.zOrigin;
            } else {
              pt.xs0 = pt.e = orig;
            } //for older versions of IE (6-8), we need to manually calculate things inside the setRatio() function. We record origin x and y (ox and oy) and whether or not the values are percentages (oxp and oyp).

          } else {
            _parsePosition(orig + "", m1);
          }
        }

        if (hasChange) {
          cssp._transformType = !(m1.svg && _useSVGTransformAttr) && (has3D || this._transformType === 3) ? 3 : 2; //quicker than calling cssp._enableTransforms();
        }

        if (scaleFunc) {
          vars.scale = scaleFunc;
        }

        return pt;
      },
      allowFunc: true,
      prefix: true
    });

    _registerComplexSpecialProp("boxShadow", {
      defaultValue: "0px 0px 0px 0px #999",
      prefix: true,
      color: true,
      multi: true,
      keyword: "inset"
    });

    _registerComplexSpecialProp("clipPath", {
      defaultValue: "inset(0%)",
      prefix: true,
      multi: true,
      formatter: _getFormatter("inset(0% 0% 0% 0%)", false, true)
    });

    _registerComplexSpecialProp("borderRadius", {
      defaultValue: "0px",
      parser: function parser(t, e, p, cssp, pt, plugin) {
        e = this.format(e);
        var props = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
            style = t.style,
            ea1,
            i,
            es2,
            bs2,
            bs,
            es,
            bn,
            en,
            w,
            h,
            esfx,
            bsfx,
            rel,
            hn,
            vn,
            em;
        w = parseFloat(t.offsetWidth);
        h = parseFloat(t.offsetHeight);
        ea1 = e.split(" ");

        for (i = 0; i < props.length; i++) {
          //if we're dealing with percentages, we must convert things separately for the horizontal and vertical axis!
          if (this.p.indexOf("border")) {
            //older browsers used a prefix
            props[i] = _checkPropPrefix(props[i]);
          }

          bs = bs2 = _getStyle(t, props[i], _cs, false, "0px");

          if (bs.indexOf(" ") !== -1) {
            bs2 = bs.split(" ");
            bs = bs2[0];
            bs2 = bs2[1];
          }

          es = es2 = ea1[i];
          bn = parseFloat(bs);
          bsfx = bs.substr((bn + "").length);
          rel = es.charAt(1) === "=";

          if (rel) {
            en = parseInt(es.charAt(0) + "1", 10);
            es = es.substr(2);
            en *= parseFloat(es);
            esfx = es.substr((en + "").length - (en < 0 ? 1 : 0)) || "";
          } else {
            en = parseFloat(es);
            esfx = es.substr((en + "").length);
          }

          if (esfx === "") {
            esfx = _suffixMap[p] || bsfx;
          }

          if (esfx !== bsfx) {
            hn = _convertToPixels(t, "borderLeft", bn, bsfx); //horizontal number (we use a bogus "borderLeft" property just because the _convertToPixels() method searches for the keywords "Left", "Right", "Top", and "Bottom" to determine of it's a horizontal or vertical property, and we need "border" in the name so that it knows it should measure relative to the element itself, not its parent.

            vn = _convertToPixels(t, "borderTop", bn, bsfx); //vertical number

            if (esfx === "%") {
              bs = hn / w * 100 + "%";
              bs2 = vn / h * 100 + "%";
            } else if (esfx === "em") {
              em = _convertToPixels(t, "borderLeft", 1, "em");
              bs = hn / em + "em";
              bs2 = vn / em + "em";
            } else {
              bs = hn + "px";
              bs2 = vn + "px";
            }

            if (rel) {
              es = parseFloat(bs) + en + esfx;
              es2 = parseFloat(bs2) + en + esfx;
            }
          }

          pt = _parseComplex(style, props[i], bs + " " + bs2, es + " " + es2, false, "0px", pt);
        }

        return pt;
      },
      prefix: true,
      formatter: _getFormatter("0px 0px 0px 0px", false, true)
    });

    _registerComplexSpecialProp("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
      defaultValue: "0px",
      parser: function parser(t, e, p, cssp, pt, plugin) {
        return _parseComplex(t.style, p, this.format(_getStyle(t, p, _cs, false, "0px 0px")), this.format(e), false, "0px", pt);
      },
      prefix: true,
      formatter: _getFormatter("0px 0px", false, true)
    });

    _registerComplexSpecialProp("backgroundPosition", {
      defaultValue: "0 0",
      parser: function parser(t, e, p, cssp, pt, plugin) {
        var bp = "background-position",
            cs = _cs || _getComputedStyle(t, null),
            bs = this.format((cs ? _ieVers ? cs.getPropertyValue(bp + "-x") + " " + cs.getPropertyValue(bp + "-y") : cs.getPropertyValue(bp) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
            //Internet Explorer doesn't report background-position correctly - we must query background-position-x and background-position-y and combine them (even in IE10). Before IE9, we must do the same with the currentStyle object and use camelCase
        es = this.format(e),
            ba,
            ea,
            i,
            pct,
            overlap,
            src;

        if (bs.indexOf("%") !== -1 !== (es.indexOf("%") !== -1) && es.split(",").length < 2) {
          src = _getStyle(t, "backgroundImage").replace(_urlExp, "");

          if (src && src !== "none") {
            ba = bs.split(" ");
            ea = es.split(" ");

            _tempImg.setAttribute("src", src); //set the temp IMG's src to the background-image so that we can measure its width/height


            i = 2;

            while (--i > -1) {
              bs = ba[i];
              pct = bs.indexOf("%") !== -1;

              if (pct !== (ea[i].indexOf("%") !== -1)) {
                overlap = i === 0 ? t.offsetWidth - _tempImg.width : t.offsetHeight - _tempImg.height;
                ba[i] = pct ? parseFloat(bs) / 100 * overlap + "px" : parseFloat(bs) / overlap * 100 + "%";
              }
            }

            bs = ba.join(" ");
          }
        }

        return this.parseComplex(t.style, bs, es, pt, plugin);
      },
      formatter: _parsePosition
    });

    _registerComplexSpecialProp("backgroundSize", {
      defaultValue: "0 0",
      formatter: function formatter(v) {
        v += ""; //ensure it's a string

        return v.substr(0, 2) === "co" ? v : _parsePosition(v.indexOf(" ") === -1 ? v + " " + v : v); //if set to something like "100% 100%", Safari typically reports the computed style as just "100%" (no 2nd value), but we should ensure that there are two values, so copy the first one. Otherwise, it'd be interpreted as "100% 0" (wrong). Also remember that it could be "cover" or "contain" which we can't tween but should be able to set.
      }
    });

    _registerComplexSpecialProp("perspective", {
      defaultValue: "0px",
      prefix: true
    });

    _registerComplexSpecialProp("perspectiveOrigin", {
      defaultValue: "50% 50%",
      prefix: true
    });

    _registerComplexSpecialProp("transformStyle", {
      prefix: true
    });

    _registerComplexSpecialProp("backfaceVisibility", {
      prefix: true
    });

    _registerComplexSpecialProp("userSelect", {
      prefix: true
    });

    _registerComplexSpecialProp("margin", {
      parser: _getEdgeParser("marginTop,marginRight,marginBottom,marginLeft")
    });

    _registerComplexSpecialProp("padding", {
      parser: _getEdgeParser("paddingTop,paddingRight,paddingBottom,paddingLeft")
    });

    _registerComplexSpecialProp("clip", {
      defaultValue: "rect(0px,0px,0px,0px)",
      parser: function parser(t, e, p, cssp, pt, plugin) {
        var b, cs, delim;

        if (_ieVers < 9) {
          //IE8 and earlier don't report a "clip" value in the currentStyle - instead, the values are split apart into clipTop, clipRight, clipBottom, and clipLeft. Also, in IE7 and earlier, the values inside rect() are space-delimited, not comma-delimited.
          cs = t.currentStyle;
          delim = _ieVers < 8 ? " " : ",";
          b = "rect(" + cs.clipTop + delim + cs.clipRight + delim + cs.clipBottom + delim + cs.clipLeft + ")";
          e = this.format(e).split(",").join(delim);
        } else {
          b = this.format(_getStyle(t, this.p, _cs, false, this.dflt));
          e = this.format(e);
        }

        return this.parseComplex(t.style, b, e, pt, plugin);
      }
    });

    _registerComplexSpecialProp("textShadow", {
      defaultValue: "0px 0px 0px #999",
      color: true,
      multi: true
    });

    _registerComplexSpecialProp("autoRound,strictUnits", {
      parser: function parser(t, e, p, cssp, pt) {
        return pt;
      }
    }); //just so that we can ignore these properties (not tween them)


    _registerComplexSpecialProp("border", {
      defaultValue: "0px solid #000",
      parser: function parser(t, e, p, cssp, pt, plugin) {
        var bw = _getStyle(t, "borderTopWidth", _cs, false, "0px"),
            end = this.format(e).split(" "),
            esfx = end[0].replace(_suffixExp, "");

        if (esfx !== "px") {
          //if we're animating to a non-px value, we need to convert the beginning width to that unit.
          bw = parseFloat(bw) / _convertToPixels(t, "borderTopWidth", 1, esfx) + esfx;
        }

        return this.parseComplex(t.style, this.format(bw + " " + _getStyle(t, "borderTopStyle", _cs, false, "solid") + " " + _getStyle(t, "borderTopColor", _cs, false, "#000")), end.join(" "), pt, plugin);
      },
      color: true,
      formatter: function formatter(v) {
        var a = v.split(" ");
        return a[0] + " " + (a[1] || "solid") + " " + (v.match(_colorExp) || ["#000"])[0];
      }
    });

    _registerComplexSpecialProp("borderWidth", {
      parser: _getEdgeParser("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
    }); //Firefox doesn't pick up on borderWidth set in style sheets (only inline).


    _registerComplexSpecialProp("float,cssFloat,styleFloat", {
      parser: function parser(t, e, p, cssp, pt, plugin) {
        var s = t.style,
            prop = "cssFloat" in s ? "cssFloat" : "styleFloat";
        return new CSSPropTween(s, prop, 0, 0, pt, -1, p, false, 0, s[prop], e);
      }
    }); //opacity-related


    var _setIEOpacityRatio = function _setIEOpacityRatio(v) {
      var t = this.t,
          //refers to the element's style property
      filters = t.filter || _getStyle(this.data, "filter") || "",
          val = this.s + this.c * v | 0,
          skip;

      if (val === 100) {
        //for older versions of IE that need to use a filter to apply opacity, we should remove the filter if opacity hits 1 in order to improve performance, but make sure there isn't a transform (matrix) or gradient in the filters.
        if (filters.indexOf("atrix(") === -1 && filters.indexOf("radient(") === -1 && filters.indexOf("oader(") === -1) {
          t.removeAttribute("filter");
          skip = !_getStyle(this.data, "filter"); //if a class is applied that has an alpha filter, it will take effect (we don't want that), so re-apply our alpha filter in that case. We must first remove it and then check.
        } else {
          t.filter = filters.replace(_alphaFilterExp, "");
          skip = true;
        }
      }

      if (!skip) {
        if (this.xn1) {
          t.filter = filters = filters || "alpha(opacity=" + val + ")"; //works around bug in IE7/8 that prevents changes to "visibility" from being applied properly if the filter is changed to a different alpha on the same frame.
        }

        if (filters.indexOf("pacity") === -1) {
          //only used if browser doesn't support the standard opacity style property (IE 7 and 8). We omit the "O" to avoid case-sensitivity issues
          if (val !== 0 || !this.xn1) {
            //bugs in IE7/8 won't render the filter properly if opacity is ADDED on the same frame/render as "visibility" changes (this.xn1 is 1 if this tween is an "autoAlpha" tween)
            t.filter = filters + " alpha(opacity=" + val + ")"; //we round the value because otherwise, bugs in IE7/8 can prevent "visibility" changes from being applied properly.
          }
        } else {
          t.filter = filters.replace(_opacityExp, "opacity=" + val);
        }
      }
    };

    _registerComplexSpecialProp("opacity,alpha,autoAlpha", {
      defaultValue: "1",
      parser: function parser(t, e, p, cssp, pt, plugin) {
        var b = parseFloat(_getStyle(t, "opacity", _cs, false, "1")),
            style = t.style,
            isAutoAlpha = p === "autoAlpha";

        if (typeof e === "string" && e.charAt(1) === "=") {
          e = (e.charAt(0) === "-" ? -1 : 1) * parseFloat(e.substr(2)) + b;
        }

        if (isAutoAlpha && b === 1 && _getStyle(t, "visibility", _cs) === "hidden" && e !== 0) {
          //if visibility is initially set to "hidden", we should interpret that as intent to make opacity 0 (a convenience)
          b = 0;
        }

        if (_supportsOpacity) {
          pt = new CSSPropTween(style, "opacity", b, e - b, pt);
        } else {
          pt = new CSSPropTween(style, "opacity", b * 100, (e - b) * 100, pt);
          pt.xn1 = isAutoAlpha ? 1 : 0; //we need to record whether or not this is an autoAlpha so that in the setRatio(), we know to duplicate the setting of the alpha in order to work around a bug in IE7 and IE8 that prevents changes to "visibility" from taking effect if the filter is changed to a different alpha(opacity) at the same time. Setting it to the SAME value first, then the new value works around the IE7/8 bug.

          style.zoom = 1; //helps correct an IE issue.

          pt.type = 2;
          pt.b = "alpha(opacity=" + pt.s + ")";
          pt.e = "alpha(opacity=" + (pt.s + pt.c) + ")";
          pt.data = t;
          pt.plugin = plugin;
          pt.setRatio = _setIEOpacityRatio;
        }

        if (isAutoAlpha) {
          //we have to create the "visibility" PropTween after the opacity one in the linked list so that they run in the order that works properly in IE8 and earlier
          pt = new CSSPropTween(style, "visibility", 0, 0, pt, -1, null, false, 0, b !== 0 ? "inherit" : "hidden", e === 0 ? "hidden" : "inherit");
          pt.xs0 = "inherit";

          cssp._overwriteProps.push(pt.n);

          cssp._overwriteProps.push(p);
        }

        return pt;
      }
    });

    var _removeProp = function _removeProp(s, p) {
      if (p) {
        if (s.removeProperty) {
          if (p.substr(0, 2) === "ms" || p.substr(0, 6) === "webkit") {
            //Microsoft and some Webkit browsers don't conform to the standard of capitalizing the first prefix character, so we adjust so that when we prefix the caps with a dash, it's correct (otherwise it'd be "ms-transform" instead of "-ms-transform" for IE9, for example)
            p = "-" + p;
          }

          s.removeProperty(p.replace(_capsExp, "-$1").toLowerCase());
        } else {
          //note: old versions of IE use "removeAttribute()" instead of "removeProperty()"
          s.removeAttribute(p);
        }
      }
    },
        _setClassNameRatio = function _setClassNameRatio(v) {
      this.t._gsClassPT = this;

      if (v === 1 || v === 0) {
        this.t.setAttribute("class", v === 0 ? this.b : this.e);
        var mpt = this.data,
            //first MiniPropTween
        s = this.t.style;

        while (mpt) {
          if (!mpt.v) {
            _removeProp(s, mpt.p);
          } else {
            s[mpt.p] = mpt.v;
          }

          mpt = mpt._next;
        }

        if (v === 1 && this.t._gsClassPT === this) {
          this.t._gsClassPT = null;
        }
      } else if (this.t.getAttribute("class") !== this.e) {
        this.t.setAttribute("class", this.e);
      }
    };

    _registerComplexSpecialProp("className", {
      parser: function parser(t, e, p, cssp, pt, plugin, vars) {
        var b = t.getAttribute("class") || "",
            //don't use t.className because it doesn't work consistently on SVG elements; getAttribute("class") and setAttribute("class", value") is more reliable.
        cssText = t.style.cssText,
            difData,
            bs,
            cnpt,
            cnptLookup,
            mpt;
        pt = cssp._classNamePT = new CSSPropTween(t, p, 0, 0, pt, 2);
        pt.setRatio = _setClassNameRatio;
        pt.pr = -11;
        _hasPriority = true;
        pt.b = b;
        bs = _getAllStyles(t, _cs); //if there's a className tween already operating on the target, force it to its end so that the necessary inline styles are removed and the class name is applied before we determine the end state (we don't want inline styles interfering that were there just for class-specific values)

        cnpt = t._gsClassPT;

        if (cnpt) {
          cnptLookup = {};
          mpt = cnpt.data; //first MiniPropTween which stores the inline styles - we need to force these so that the inline styles don't contaminate things. Otherwise, there's a small chance that a tween could start and the inline values match the destination values and they never get cleaned.

          while (mpt) {
            cnptLookup[mpt.p] = 1;
            mpt = mpt._next;
          }

          cnpt.setRatio(1);
        }

        t._gsClassPT = pt;
        pt.e = e.charAt(1) !== "=" ? e : b.replace(new RegExp("(?:\\s|^)" + e.substr(2) + "(?![\\w-])"), "") + (e.charAt(0) === "+" ? " " + e.substr(2) : "");
        t.setAttribute("class", pt.e);
        difData = _cssDif(t, bs, _getAllStyles(t), vars, cnptLookup);
        t.setAttribute("class", b);
        pt.data = difData.firstMPT;

        if (t.style.cssText !== cssText) {
          //only apply if things change. Otherwise, in cases like a background-image that's pulled dynamically, it could cause a refresh. See https://greensock.com/forums/topic/20368-possible-gsap-bug-switching-classnames-in-chrome/.
          t.style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
        }

        pt = pt.xfirst = cssp.parse(t, difData.difs, pt, plugin); //we record the CSSPropTween as the xfirst so that we can handle overwriting propertly (if "className" gets overwritten, we must kill all the properties associated with the className part of the tween, so we can loop through from xfirst to the pt itself)

        return pt;
      }
    });

    var _setClearPropsRatio = function _setClearPropsRatio(v) {
      if (v === 1 || v === 0) if (this.data._totalTime === this.data._totalDuration && this.data.data !== "isFromStart") {
        //this.data refers to the tween. Only clear at the END of the tween (remember, from() tweens make the ratio go from 1 to 0, so we can't just check that and if the tween is the zero-duration one that's created internally to render the starting values in a from() tween, ignore that because otherwise, for example, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in).
        var s = this.t.style,
            transformParse = _specialProps.transform.parse,
            a,
            p,
            i,
            clearTransform,
            transform;

        if (this.e === "all") {
          s.cssText = "";
          clearTransform = true;
        } else {
          a = this.e.split(" ").join("").split(",");
          i = a.length;

          while (--i > -1) {
            p = a[i];

            if (_specialProps[p]) {
              if (_specialProps[p].parse === transformParse) {
                clearTransform = true;
              } else {
                p = p === "transformOrigin" ? _transformOriginProp : _specialProps[p].p; //ensures that special properties use the proper browser-specific property name, like "scaleX" might be "-webkit-transform" or "boxShadow" might be "-moz-box-shadow"
              }
            }

            _removeProp(s, p);
          }
        }

        if (clearTransform) {
          _removeProp(s, _transformProp);

          transform = this.t._gsTransform;

          if (transform) {
            if (transform.svg) {
              this.t.removeAttribute("data-svg-origin");
              this.t.removeAttribute("transform");
            }

            delete this.t._gsTransform;
          }
        }
      }
    };

    _registerComplexSpecialProp("clearProps", {
      parser: function parser(t, e, p, cssp, pt) {
        pt = new CSSPropTween(t, p, 0, 0, pt, 2);
        pt.setRatio = _setClearPropsRatio;
        pt.e = e;
        pt.pr = -10;
        pt.data = cssp._tween;
        _hasPriority = true;
        return pt;
      }
    });

    p = "bezier,throwProps,physicsProps,physics2D".split(",");
    i = p.length;

    while (i--) {
      _registerPluginProp(p[i]);
    }

    p = CSSPlugin.prototype;
    p._firstPT = p._lastParsedTransform = p._transform = null; //gets called when the tween renders for the first time. This kicks everything off, recording start/end values, etc.

    p._onInitTween = function (target, vars, tween, index) {
      if (!target.nodeType) {
        //css is only for dom elements
        return false;
      }

      this._target = _target = target;
      this._tween = tween;
      this._vars = vars;
      _index = index;
      _autoRound = vars.autoRound;
      _hasPriority = false;
      _suffixMap = vars.suffixMap || CSSPlugin.suffixMap;
      _cs = _getComputedStyle(target, "");
      _overwriteProps = this._overwriteProps;
      var style = target.style,
          v,
          pt,
          pt2,
          first,
          last,
          next,
          zIndex,
          tpt,
          threeD;
      if (_reqSafariFix) if (style.zIndex === "") {
        v = _getStyle(target, "zIndex", _cs);

        if (v === "auto" || v === "") {
          //corrects a bug in [non-Android] Safari that prevents it from repainting elements in their new positions if they don't have a zIndex set. We also can't just apply this inside _parseTransform() because anything that's moved in any way (like using "left" or "top" instead of transforms like "x" and "y") can be affected, so it is best to ensure that anything that's tweening has a z-index. Setting "WebkitPerspective" to a non-zero value worked too except that on iOS Safari things would flicker randomly. Plus zIndex is less memory-intensive.
          this._addLazySet(style, "zIndex", 0);
        }
      }

      if (typeof vars === "string") {
        first = style.cssText;
        v = _getAllStyles(target, _cs);
        style.cssText = first + ";" + vars;
        v = _cssDif(target, v, _getAllStyles(target)).difs;

        if (!_supportsOpacity && _opacityValExp.test(vars)) {
          v.opacity = parseFloat(RegExp.$1);
        }

        vars = v;
        style.cssText = first;
      }

      if (vars.className) {
        //className tweens will combine any differences they find in the css with the vars that are passed in, so {className:"myClass", scale:0.5, left:20} would work.
        this._firstPT = pt = _specialProps.className.parse(target, vars.className, "className", this, null, null, vars);
      } else {
        this._firstPT = pt = this.parse(target, vars, null);
      }

      if (this._transformType) {
        threeD = this._transformType === 3;

        if (!_transformProp) {
          style.zoom = 1; //helps correct an IE issue.
        } else if (_isSafari) {
          _reqSafariFix = true; //if zIndex isn't set, iOS Safari doesn't repaint things correctly sometimes (seemingly at random).

          if (style.zIndex === "") {
            zIndex = _getStyle(target, "zIndex", _cs);

            if (zIndex === "auto" || zIndex === "") {
              this._addLazySet(style, "zIndex", 0);
            }
          } //Setting WebkitBackfaceVisibility corrects 3 bugs:
          // 1) [non-Android] Safari skips rendering changes to "top" and "left" that are made on the same frame/render as a transform update.
          // 2) iOS Safari sometimes neglects to repaint elements in their new positions. Setting "WebkitPerspective" to a non-zero value worked too except that on iOS Safari things would flicker randomly.
          // 3) Safari sometimes displayed odd artifacts when tweening the transform (or WebkitTransform) property, like ghosts of the edges of the element remained. Definitely a browser bug.
          //Note: we allow the user to override the auto-setting by defining WebkitBackfaceVisibility in the vars of the tween.


          if (_isSafariLT6) {
            this._addLazySet(style, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (threeD ? "visible" : "hidden"));
          }
        }

        pt2 = pt;

        while (pt2 && pt2._next) {
          pt2 = pt2._next;
        }

        tpt = new CSSPropTween(target, "transform", 0, 0, null, 2);

        this._linkCSSP(tpt, null, pt2);

        tpt.setRatio = _transformProp ? _setTransformRatio : _setIETransformRatio;
        tpt.data = this._transform || _getTransform(target, _cs, true);
        tpt.tween = tween;
        tpt.pr = -1; //ensures that the transforms get applied after the components are updated.

        _overwriteProps.pop(); //we don't want to force the overwrite of all "transform" tweens of the target - we only care about individual transform properties like scaleX, rotation, etc. The CSSPropTween constructor automatically adds the property to _overwriteProps which is why we need to pop() here.

      }

      if (_hasPriority) {
        //reorders the linked list in order of pr (priority)
        while (pt) {
          next = pt._next;
          pt2 = first;

          while (pt2 && pt2.pr > pt.pr) {
            pt2 = pt2._next;
          }

          if (pt._prev = pt2 ? pt2._prev : last) {
            pt._prev._next = pt;
          } else {
            first = pt;
          }

          if (pt._next = pt2) {
            pt2._prev = pt;
          } else {
            last = pt;
          }

          pt = next;
        }

        this._firstPT = first;
      }

      return true;
    };

    p.parse = function (target, vars, pt, plugin) {
      var style = target.style,
          p,
          sp,
          bn,
          en,
          bs,
          es,
          bsfx,
          esfx,
          isStr,
          rel;

      for (p in vars) {
        es = vars[p]; //ending value string

        sp = _specialProps[p]; //SpecialProp lookup.

        if (typeof es === "function" && !(sp && sp.allowFunc)) {
          es = es(_index, _target);
        }

        if (sp) {
          pt = sp.parse(target, es, p, this, pt, plugin, vars);
        } else if (p.substr(0, 2) === "--") {
          //for tweening CSS variables (which always start with "--"). To maximize performance and simplicity, we bypass CSSPlugin altogether and just add a normal property tween to the tween instance itself.
          this._tween._propLookup[p] = this._addTween.call(this._tween, target.style, "setProperty", _getComputedStyle(target).getPropertyValue(p) + "", es + "", p, false, p);
          continue;
        } else {
          bs = _getStyle(target, p, _cs) + "";
          isStr = typeof es === "string";

          if (p === "color" || p === "fill" || p === "stroke" || p.indexOf("Color") !== -1 || isStr && _rgbhslExp.test(es)) {
            //Opera uses background: to define color sometimes in addition to backgroundColor:
            if (!isStr) {
              es = _parseColor(es);
              es = (es.length > 3 ? "rgba(" : "rgb(") + es.join(",") + ")";
            }

            pt = _parseComplex(style, p, bs, es, true, "transparent", pt, 0, plugin);
          } else if (isStr && _complexExp.test(es)) {
            pt = _parseComplex(style, p, bs, es, true, null, pt, 0, plugin);
          } else {
            bn = parseFloat(bs);
            bsfx = bn || bn === 0 ? bs.substr((bn + "").length) : ""; //remember, bs could be non-numeric like "normal" for fontWeight, so we should default to a blank suffix in that case.

            if (bs === "" || bs === "auto") {
              if (p === "width" || p === "height") {
                bn = _getDimension(target, p, _cs);
                bsfx = "px";
              } else if (p === "left" || p === "top") {
                bn = _calculateOffset(target, p, _cs);
                bsfx = "px";
              } else {
                bn = p !== "opacity" ? 0 : 1;
                bsfx = "";
              }
            }

            rel = isStr && es.charAt(1) === "=";

            if (rel) {
              en = parseInt(es.charAt(0) + "1", 10);
              es = es.substr(2);
              en *= parseFloat(es);
              esfx = es.replace(_suffixExp, "");
            } else {
              en = parseFloat(es);
              esfx = isStr ? es.replace(_suffixExp, "") : "";
            }

            if (esfx === "") {
              esfx = p in _suffixMap ? _suffixMap[p] : bsfx; //populate the end suffix, prioritizing the map, then if none is found, use the beginning suffix.
            }

            es = en || en === 0 ? (rel ? en + bn : en) + esfx : vars[p]; //ensures that any += or -= prefixes are taken care of. Record the end value before normalizing the suffix because we always want to end the tween on exactly what they intended even if it doesn't match the beginning value's suffix.
            //if the beginning/ending suffixes don't match, normalize them...

            if (bsfx !== esfx) if (esfx !== "" || p === "lineHeight") if (en || en === 0) if (bn) {
              //note: if the beginning value (bn) is 0, we don't need to convert units!
              bn = _convertToPixels(target, p, bn, bsfx);

              if (esfx === "%") {
                bn /= _convertToPixels(target, p, 100, "%") / 100;

                if (vars.strictUnits !== true) {
                  //some browsers report only "px" values instead of allowing "%" with getComputedStyle(), so we assume that if we're tweening to a %, we should start there too unless strictUnits:true is defined. This approach is particularly useful for responsive designs that use from() tweens.
                  bs = bn + "%";
                }
              } else if (esfx === "em" || esfx === "rem" || esfx === "vw" || esfx === "vh") {
                bn /= _convertToPixels(target, p, 1, esfx); //otherwise convert to pixels.
              } else if (esfx !== "px") {
                en = _convertToPixels(target, p, en, esfx);
                esfx = "px"; //we don't use bsfx after this, so we don't need to set it to px too.
              }

              if (rel) if (en || en === 0) {
                es = en + bn + esfx; //the changes we made affect relative calculations, so adjust the end value here.
              }
            }

            if (rel) {
              en += bn;
            }

            if ((bn || bn === 0) && (en || en === 0)) {
              //faster than isNaN(). Also, previously we required en !== bn but that doesn't really gain much performance and it prevents _parseToProxy() from working properly if beginning and ending values match but need to get tweened by an external plugin anyway. For example, a bezier tween where the target starts at left:0 and has these points: [{left:50},{left:0}] wouldn't work properly because when parsing the last point, it'd match the first (current) one and a non-tweening CSSPropTween would be recorded when we actually need a normal tween (type:0) so that things get updated during the tween properly.
              pt = new CSSPropTween(style, p, bn, en - bn, pt, 0, p, _autoRound !== false && (esfx === "px" || p === "zIndex"), 0, bs, es);
              pt.xs0 = esfx; //DEBUG: _log("tween "+p+" from "+pt.b+" ("+bn+esfx+") to "+pt.e+" with suffix: "+pt.xs0);
            } else if (style[p] === undefined || !es && (es + "" === "NaN" || es == null)) {
              _log("invalid " + p + " tween value: " + vars[p]);
            } else {
              pt = new CSSPropTween(style, p, en || bn || 0, 0, pt, -1, p, false, 0, bs, es);
              pt.xs0 = es === "none" && (p === "display" || p.indexOf("Style") !== -1) ? bs : es; //intermediate value should typically be set immediately (end value) except for "display" or things like borderTopStyle, borderBottomStyle, etc. which should use the beginning value during the tween.
              //DEBUG: _log("non-tweening value "+p+": "+pt.xs0);
            }
          }
        }

        if (plugin) if (pt && !pt.plugin) {
          pt.plugin = plugin;
        }
      }

      return pt;
    }; //gets called every time the tween updates, passing the new ratio (typically a value between 0 and 1, but not always (for example, if an Elastic.easeOut is used, the value can jump above 1 mid-tween). It will always start and 0 and end at 1.


    p.setRatio = function (v) {
      var pt = this._firstPT,
          min = 0.000001,
          val,
          str,
          i; //at the end of the tween, we set the values to exactly what we received in order to make sure non-tweening values (like "position" or "float" or whatever) are set and so that if the beginning/ending suffixes (units) didn't match and we normalized to px, the value that the user passed in is used here. We check to see if the tween is at its beginning in case it's a from() tween in which case the ratio will actually go from 1 to 0 over the course of the tween (backwards).

      if (v === 1 && (this._tween._time === this._tween._duration || this._tween._time === 0)) {
        while (pt) {
          if (pt.type !== 2) {
            if (pt.r && pt.type !== -1) {
              val = pt.r(pt.s + pt.c);

              if (!pt.type) {
                pt.t[pt.p] = val + pt.xs0;
              } else if (pt.type === 1) {
                //complex value (one that typically has multiple numbers inside a string, like "rect(5px,10px,20px,25px)"
                i = pt.l;
                str = pt.xs0 + val + pt.xs1;

                for (i = 1; i < pt.l; i++) {
                  str += pt["xn" + i] + pt["xs" + (i + 1)];
                }

                pt.t[pt.p] = str;
              }
            } else {
              pt.t[pt.p] = pt.e;
            }
          } else {
            pt.setRatio(v);
          }

          pt = pt._next;
        }
      } else if (v || !(this._tween._time === this._tween._duration || this._tween._time === 0) || this._tween._rawPrevTime === -0.000001) {
        while (pt) {
          val = pt.c * v + pt.s;

          if (pt.r) {
            val = pt.r(val);
          } else if (val < min) if (val > -min) {
            val = 0;
          }

          if (!pt.type) {
            pt.t[pt.p] = val + pt.xs0;
          } else if (pt.type === 1) {
            //complex value (one that typically has multiple numbers inside a string, like "rect(5px,10px,20px,25px)"
            i = pt.l;

            if (i === 2) {
              pt.t[pt.p] = pt.xs0 + val + pt.xs1 + pt.xn1 + pt.xs2;
            } else if (i === 3) {
              pt.t[pt.p] = pt.xs0 + val + pt.xs1 + pt.xn1 + pt.xs2 + pt.xn2 + pt.xs3;
            } else if (i === 4) {
              pt.t[pt.p] = pt.xs0 + val + pt.xs1 + pt.xn1 + pt.xs2 + pt.xn2 + pt.xs3 + pt.xn3 + pt.xs4;
            } else if (i === 5) {
              pt.t[pt.p] = pt.xs0 + val + pt.xs1 + pt.xn1 + pt.xs2 + pt.xn2 + pt.xs3 + pt.xn3 + pt.xs4 + pt.xn4 + pt.xs5;
            } else {
              str = pt.xs0 + val + pt.xs1;

              for (i = 1; i < pt.l; i++) {
                str += pt["xn" + i] + pt["xs" + (i + 1)];
              }

              pt.t[pt.p] = str;
            }
          } else if (pt.type === -1) {
            //non-tweening value
            pt.t[pt.p] = pt.xs0;
          } else if (pt.setRatio) {
            //custom setRatio() for things like SpecialProps, external plugins, etc.
            pt.setRatio(v);
          }

          pt = pt._next;
        } //if the tween is reversed all the way back to the beginning, we need to restore the original values which may have different units (like % instead of px or em or whatever).

      } else {
        while (pt) {
          if (pt.type !== 2) {
            pt.t[pt.p] = pt.b;
          } else {
            pt.setRatio(v);
          }

          pt = pt._next;
        }
      }
    };
    /**
     * @private
     * Forces rendering of the target's transforms (rotation, scale, etc.) whenever the CSSPlugin's setRatio() is called.
     * Basically, this tells the CSSPlugin to create a CSSPropTween (type 2) after instantiation that runs last in the linked
     * list and calls the appropriate (3D or 2D) rendering function. We separate this into its own method so that we can call
     * it from other plugins like BezierPlugin if, for example, it needs to apply an autoRotation and this CSSPlugin
     * doesn't have any transform-related properties of its own. You can call this method as many times as you
     * want and it won't create duplicate CSSPropTweens.
     *
     * @param {boolean} threeD if true, it should apply 3D tweens (otherwise, just 2D ones are fine and typically faster)
     */


    p._enableTransforms = function (threeD) {
      this._transform = this._transform || _getTransform(this._target, _cs, true); //ensures that the element has a _gsTransform property with the appropriate values.

      this._transformType = !(this._transform.svg && _useSVGTransformAttr) && (threeD || this._transformType === 3) ? 3 : 2;
    };

    var lazySet = function lazySet(v) {
      this.t[this.p] = this.e;

      this.data._linkCSSP(this, this._next, null, true); //we purposefully keep this._next even though it'd make sense to null it, but this is a performance optimization, as this happens during the while (pt) {} loop in setRatio() at the bottom of which it sets pt = pt._next, so if we null it, the linked list will be broken in that loop.

    };
    /** @private Gives us a way to set a value on the first render (and only the first render). **/


    p._addLazySet = function (t, p, v) {
      var pt = this._firstPT = new CSSPropTween(t, p, 0, 0, this._firstPT, 2);
      pt.e = v;
      pt.setRatio = lazySet;
      pt.data = this;
    };
    /** @private **/


    p._linkCSSP = function (pt, next, prev, remove) {
      if (pt) {
        if (next) {
          next._prev = pt;
        }

        if (pt._next) {
          pt._next._prev = pt._prev;
        }

        if (pt._prev) {
          pt._prev._next = pt._next;
        } else if (this._firstPT === pt) {
          this._firstPT = pt._next;
          remove = true; //just to prevent resetting this._firstPT 5 lines down in case pt._next is null. (optimized for speed)
        }

        if (prev) {
          prev._next = pt;
        } else if (!remove && this._firstPT === null) {
          this._firstPT = pt;
        }

        pt._next = next;
        pt._prev = prev;
      }

      return pt;
    };

    p._mod = function (lookup) {
      var pt = this._firstPT;

      while (pt) {
        if (typeof lookup[pt.p] === "function") {
          //only gets called by RoundPropsPlugin (ModifyPlugin manages all the rendering internally for CSSPlugin properties that need modification). Remember, we handle rounding a bit differently in this plugin for performance reasons, leveraging "r" as an indicator that the value should be rounded internally.
          pt.r = lookup[pt.p];
        }

        pt = pt._next;
      }
    }; //we need to make sure that if alpha or autoAlpha is killed, opacity is too. And autoAlpha affects the "visibility" property.


    p._kill = function (lookup) {
      var copy = lookup,
          pt,
          p,
          xfirst;

      if (lookup.autoAlpha || lookup.alpha) {
        copy = {};

        for (p in lookup) {
          //copy the lookup so that we're not changing the original which may be passed elsewhere.
          copy[p] = lookup[p];
        }

        copy.opacity = 1;

        if (copy.autoAlpha) {
          copy.visibility = 1;
        }
      }

      if (lookup.className && (pt = this._classNamePT)) {
        //for className tweens, we need to kill any associated CSSPropTweens too; a linked list starts at the className's "xfirst".
        xfirst = pt.xfirst;

        if (xfirst && xfirst._prev) {
          this._linkCSSP(xfirst._prev, pt._next, xfirst._prev._prev); //break off the prev

        } else if (xfirst === this._firstPT) {
          this._firstPT = pt._next;
        }

        if (pt._next) {
          this._linkCSSP(pt._next, pt._next._next, xfirst._prev);
        }

        this._classNamePT = null;
      }

      pt = this._firstPT;

      while (pt) {
        if (pt.plugin && pt.plugin !== p && pt.plugin._kill) {
          //for plugins that are registered with CSSPlugin, we should notify them of the kill.
          pt.plugin._kill(lookup);

          p = pt.plugin;
        }

        pt = pt._next;
      }

      return TweenPlugin.prototype._kill.call(this, copy);
    }; //used by cascadeTo() for gathering all the style properties of each child element into an array for comparison.


    var _getChildStyles = function _getChildStyles(e, props, targets) {
      var children, i, child, type;

      if (e.slice) {
        i = e.length;

        while (--i > -1) {
          _getChildStyles(e[i], props, targets);
        }

        return;
      }

      children = e.childNodes;
      i = children.length;

      while (--i > -1) {
        child = children[i];
        type = child.type;

        if (child.style) {
          props.push(_getAllStyles(child));

          if (targets) {
            targets.push(child);
          }
        }

        if ((type === 1 || type === 9 || type === 11) && child.childNodes.length) {
          _getChildStyles(child, props, targets);
        }
      }
    };
    /**
     * Typically only useful for className tweens that may affect child elements, this method creates a TweenLite
     * and then compares the style properties of all the target's child elements at the tween's start and end, and
     * if any are different, it also creates tweens for those and returns an array containing ALL of the resulting
     * tweens (so that you can easily add() them to a TimelineLite, for example). The reason this functionality is
     * wrapped into a separate static method of CSSPlugin instead of being integrated into all regular className tweens
     * is because it creates entirely new tweens that may have completely different targets than the original tween,
     * so if they were all lumped into the original tween instance, it would be inconsistent with the rest of the API
     * and it would create other problems. For example:
     *  - If I create a tween of elementA, that tween instance may suddenly change its target to include 50 other elements (unintuitive if I specifically defined the target I wanted)
     *  - We can't just create new independent tweens because otherwise, what happens if the original/parent tween is reversed or pause or dropped into a TimelineLite for tight control? You'd expect that tween's behavior to affect all the others.
     *  - Analyzing every style property of every child before and after the tween is an expensive operation when there are many children, so this behavior shouldn't be imposed on all className tweens by default, especially since it's probably rare that this extra functionality is needed.
     *
     * @param {Object} target object to be tweened
     * @param {number} Duration in seconds (or frames for frames-based tweens)
     * @param {Object} Object containing the end values, like {className:"newClass", ease:Linear.easeNone}
     * @return {Array} An array of TweenLite instances
     */


    CSSPlugin.cascadeTo = function (target, duration, vars) {
      var tween = TweenLite.to(target, duration, vars),
          results = [tween],
          b = [],
          e = [],
          targets = [],
          _reservedProps = TweenLite._internals.reservedProps,
          i,
          difs,
          p,
          from;
      target = tween._targets || tween.target;

      _getChildStyles(target, b, targets);

      tween.render(duration, true, true);

      _getChildStyles(target, e);

      tween.render(0, true, true);

      tween._enabled(true);

      i = targets.length;

      while (--i > -1) {
        difs = _cssDif(targets[i], b[i], e[i]);

        if (difs.firstMPT) {
          difs = difs.difs;

          for (p in vars) {
            if (_reservedProps[p]) {
              difs[p] = vars[p];
            }
          }

          from = {};

          for (p in difs) {
            from[p] = b[i][p];
          }

          results.push(TweenLite.fromTo(targets[i], duration, from, difs));
        }
      }

      return results;
    };

    TweenPlugin.activate([CSSPlugin]);
    return CSSPlugin;
  }, true);
  /*
   * ----------------------------------------------------------------
   * RoundPropsPlugin
   * ----------------------------------------------------------------
   */


  (function () {
    var RoundPropsPlugin = _gsScope._gsDefine.plugin({
      propName: "roundProps",
      version: "1.7.0",
      priority: -1,
      API: 2,
      //called when the tween renders for the first time. This is where initial values should be recorded and any setup routines should run.
      init: function init(target, value, tween) {
        this._tween = tween;
        return true;
      }
    }),
        _getRoundFunc = function _getRoundFunc(v) {
      //pass in 0.1 get a function that'll round to the nearest tenth, or 5 to round to the closest 5, or 0.001 to the closest 1000th, etc.
      var p = v < 1 ? Math.pow(10, (v + "").length - 2) : 1; //to avoid floating point math errors (like 24 * 0.1 == 2.4000000000000004), we chop off at a specific number of decimal places (much faster than toFixed()

      return function (n) {
        return (Math.round(n / v) * v * p | 0) / p;
      };
    },
        _roundLinkedList = function _roundLinkedList(node, mod) {
      while (node) {
        if (!node.f && !node.blob) {
          node.m = mod || Math.round;
        }

        node = node._next;
      }
    },
        p = RoundPropsPlugin.prototype;

    p._onInitAllProps = function () {
      var tween = this._tween,
          rp = tween.vars.roundProps,
          lookup = {},
          rpt = tween._propLookup.roundProps,
          pt,
          next,
          i,
          p;

      if (_typeof(rp) === "object" && !rp.push) {
        for (p in rp) {
          lookup[p] = _getRoundFunc(rp[p]);
        }
      } else {
        if (typeof rp === "string") {
          rp = rp.split(",");
        }

        i = rp.length;

        while (--i > -1) {
          lookup[rp[i]] = Math.round;
        }
      }

      for (p in lookup) {
        pt = tween._firstPT;

        while (pt) {
          next = pt._next; //record here, because it may get removed

          if (pt.pg) {
            pt.t._mod(lookup);
          } else if (pt.n === p) {
            if (pt.f === 2 && pt.t) {
              //a blob (text containing multiple numeric values)
              _roundLinkedList(pt.t._firstPT, lookup[p]);
            } else {
              this._add(pt.t, p, pt.s, pt.c, lookup[p]); //remove from linked list


              if (next) {
                next._prev = pt._prev;
              }

              if (pt._prev) {
                pt._prev._next = next;
              } else if (tween._firstPT === pt) {
                tween._firstPT = next;
              }

              pt._next = pt._prev = null;
              tween._propLookup[p] = rpt;
            }
          }

          pt = next;
        }
      }

      return false;
    };

    p._add = function (target, p, s, c, mod) {
      this._addTween(target, p, s, s + c, p, mod || Math.round);

      this._overwriteProps.push(p);
    };
  })();
  /*
   * ----------------------------------------------------------------
   * AttrPlugin
   * ----------------------------------------------------------------
   */


  (function () {
    _gsScope._gsDefine.plugin({
      propName: "attr",
      API: 2,
      version: "0.6.1",
      //called when the tween renders for the first time. This is where initial values should be recorded and any setup routines should run.
      init: function init(target, value, tween, index) {
        var p, end;

        if (typeof target.setAttribute !== "function") {
          return false;
        }

        for (p in value) {
          end = value[p];

          if (typeof end === "function") {
            end = end(index, target);
          }

          this._addTween(target, "setAttribute", target.getAttribute(p) + "", end + "", p, false, p);

          this._overwriteProps.push(p);
        }

        return true;
      }
    });
  })();
  /*
   * ----------------------------------------------------------------
   * DirectionalRotationPlugin
   * ----------------------------------------------------------------
   */


  _gsScope._gsDefine.plugin({
    propName: "directionalRotation",
    version: "0.3.1",
    API: 2,
    //called when the tween renders for the first time. This is where initial values should be recorded and any setup routines should run.
    init: function init(target, value, tween, index) {
      if (_typeof(value) !== "object") {
        value = {
          rotation: value
        };
      }

      this.finals = {};
      var cap = value.useRadians === true ? Math.PI * 2 : 360,
          min = 0.000001,
          p,
          v,
          start,
          end,
          dif,
          split;

      for (p in value) {
        if (p !== "useRadians") {
          end = value[p];

          if (typeof end === "function") {
            end = end(index, target);
          }

          split = (end + "").split("_");
          v = split[0];
          start = parseFloat(typeof target[p] !== "function" ? target[p] : target[p.indexOf("set") || typeof target["get" + p.substr(3)] !== "function" ? p : "get" + p.substr(3)]());
          end = this.finals[p] = typeof v === "string" && v.charAt(1) === "=" ? start + parseInt(v.charAt(0) + "1", 10) * Number(v.substr(2)) : Number(v) || 0;
          dif = end - start;

          if (split.length) {
            v = split.join("_");

            if (v.indexOf("short") !== -1) {
              dif = dif % cap;

              if (dif !== dif % (cap / 2)) {
                dif = dif < 0 ? dif + cap : dif - cap;
              }
            }

            if (v.indexOf("_cw") !== -1 && dif < 0) {
              dif = (dif + cap * 9999999999) % cap - (dif / cap | 0) * cap;
            } else if (v.indexOf("ccw") !== -1 && dif > 0) {
              dif = (dif - cap * 9999999999) % cap - (dif / cap | 0) * cap;
            }
          }

          if (dif > min || dif < -min) {
            this._addTween(target, p, start, start + dif, p);

            this._overwriteProps.push(p);
          }
        }
      }

      return true;
    },
    //called each time the values should be updated, and the ratio gets passed as the only parameter (typically it's a value between 0 and 1, but it can exceed those when using an ease like Elastic.easeOut or Back.easeOut, etc.)
    set: function set(ratio) {
      var pt;

      if (ratio !== 1) {
        this._super.setRatio.call(this, ratio);
      } else {
        pt = this._firstPT;

        while (pt) {
          if (pt.f) {
            pt.t[pt.p](this.finals[pt.p]);
          } else {
            pt.t[pt.p] = this.finals[pt.p];
          }

          pt = pt._next;
        }
      }
    }
  })._autoCSS = true;
  /*
   * ----------------------------------------------------------------
   * EasePack
   * ----------------------------------------------------------------
   */

  _gsScope._gsDefine("easing.Back", ["easing.Ease"], function (Ease) {
    var w = _gsScope.GreenSockGlobals || _gsScope,
        gs = w.com.greensock,
        _2PI = Math.PI * 2,
        _HALF_PI = Math.PI / 2,
        _class = gs._class,
        _create = function _create(n, f) {
      var C = _class("easing." + n, function () {}, true),
          p = C.prototype = new Ease();

      p.constructor = C;
      p.getRatio = f;
      return C;
    },
        _easeReg = Ease.register || function () {},
        //put an empty function in place just as a safety measure in case someone loads an OLD version of TweenLite.js where Ease.register doesn't exist.
    _wrap = function _wrap(name, EaseOut, EaseIn, EaseInOut, aliases) {
      var C = _class("easing." + name, {
        easeOut: new EaseOut(),
        easeIn: new EaseIn(),
        easeInOut: new EaseInOut()
      }, true);

      _easeReg(C, name);

      return C;
    },
        EasePoint = function EasePoint(time, value, next) {
      this.t = time;
      this.v = value;

      if (next) {
        this.next = next;
        next.prev = this;
        this.c = next.v - value;
        this.gap = next.t - time;
      }
    },
        //Back
    _createBack = function _createBack(n, f) {
      var C = _class("easing." + n, function (overshoot) {
        this._p1 = overshoot || overshoot === 0 ? overshoot : 1.70158;
        this._p2 = this._p1 * 1.525;
      }, true),
          p = C.prototype = new Ease();

      p.constructor = C;
      p.getRatio = f;

      p.config = function (overshoot) {
        return new C(overshoot);
      };

      return C;
    },
        Back = _wrap("Back", _createBack("BackOut", function (p) {
      return (p = p - 1) * p * ((this._p1 + 1) * p + this._p1) + 1;
    }), _createBack("BackIn", function (p) {
      return p * p * ((this._p1 + 1) * p - this._p1);
    }), _createBack("BackInOut", function (p) {
      return (p *= 2) < 1 ? 0.5 * p * p * ((this._p2 + 1) * p - this._p2) : 0.5 * ((p -= 2) * p * ((this._p2 + 1) * p + this._p2) + 2);
    })),
        //SlowMo
    SlowMo = _class("easing.SlowMo", function (linearRatio, power, yoyoMode) {
      power = power || power === 0 ? power : 0.7;

      if (linearRatio == null) {
        linearRatio = 0.7;
      } else if (linearRatio > 1) {
        linearRatio = 1;
      }

      this._p = linearRatio !== 1 ? power : 0;
      this._p1 = (1 - linearRatio) / 2;
      this._p2 = linearRatio;
      this._p3 = this._p1 + this._p2;
      this._calcEnd = yoyoMode === true;
    }, true),
        p = SlowMo.prototype = new Ease(),
        SteppedEase,
        ExpoScaleEase,
        RoughEase,
        _createElastic;

    p.constructor = SlowMo;

    p.getRatio = function (p) {
      var r = p + (0.5 - p) * this._p;

      if (p < this._p1) {
        return this._calcEnd ? 1 - (p = 1 - p / this._p1) * p : r - (p = 1 - p / this._p1) * p * p * p * r;
      } else if (p > this._p3) {
        return this._calcEnd ? p === 1 ? 0 : 1 - (p = (p - this._p3) / this._p1) * p : r + (p - r) * (p = (p - this._p3) / this._p1) * p * p * p; //added p === 1 ? 0 to avoid floating point rounding errors from affecting the final value, like 1 - 0.7 = 0.30000000000000004 instead of 0.3
      }

      return this._calcEnd ? 1 : r;
    };

    SlowMo.ease = new SlowMo(0.7, 0.7);

    p.config = SlowMo.config = function (linearRatio, power, yoyoMode) {
      return new SlowMo(linearRatio, power, yoyoMode);
    }; //SteppedEase


    SteppedEase = _class("easing.SteppedEase", function (steps, immediateStart) {
      steps = steps || 1;
      this._p1 = 1 / steps;
      this._p2 = steps + (immediateStart ? 0 : 1);
      this._p3 = immediateStart ? 1 : 0;
    }, true);
    p = SteppedEase.prototype = new Ease();
    p.constructor = SteppedEase;

    p.getRatio = function (p) {
      if (p < 0) {
        p = 0;
      } else if (p >= 1) {
        p = 0.999999999;
      }

      return ((this._p2 * p | 0) + this._p3) * this._p1;
    };

    p.config = SteppedEase.config = function (steps, immediateStart) {
      return new SteppedEase(steps, immediateStart);
    }; //ExpoScaleEase


    ExpoScaleEase = _class("easing.ExpoScaleEase", function (start, end, ease) {
      this._p1 = Math.log(end / start);
      this._p2 = end - start;
      this._p3 = start;
      this._ease = ease;
    }, true);
    p = ExpoScaleEase.prototype = new Ease();
    p.constructor = ExpoScaleEase;

    p.getRatio = function (p) {
      if (this._ease) {
        p = this._ease.getRatio(p);
      }

      return (this._p3 * Math.exp(this._p1 * p) - this._p3) / this._p2;
    };

    p.config = ExpoScaleEase.config = function (start, end, ease) {
      return new ExpoScaleEase(start, end, ease);
    }; //RoughEase


    RoughEase = _class("easing.RoughEase", function (vars) {
      vars = vars || {};
      var taper = vars.taper || "none",
          a = [],
          cnt = 0,
          points = (vars.points || 20) | 0,
          i = points,
          randomize = vars.randomize !== false,
          clamp = vars.clamp === true,
          template = vars.template instanceof Ease ? vars.template : null,
          strength = typeof vars.strength === "number" ? vars.strength * 0.4 : 0.4,
          x,
          y,
          bump,
          invX,
          obj,
          pnt;

      while (--i > -1) {
        x = randomize ? Math.random() : 1 / points * i;
        y = template ? template.getRatio(x) : x;

        if (taper === "none") {
          bump = strength;
        } else if (taper === "out") {
          invX = 1 - x;
          bump = invX * invX * strength;
        } else if (taper === "in") {
          bump = x * x * strength;
        } else if (x < 0.5) {
          //"both" (start)
          invX = x * 2;
          bump = invX * invX * 0.5 * strength;
        } else {
          //"both" (end)
          invX = (1 - x) * 2;
          bump = invX * invX * 0.5 * strength;
        }

        if (randomize) {
          y += Math.random() * bump - bump * 0.5;
        } else if (i % 2) {
          y += bump * 0.5;
        } else {
          y -= bump * 0.5;
        }

        if (clamp) {
          if (y > 1) {
            y = 1;
          } else if (y < 0) {
            y = 0;
          }
        }

        a[cnt++] = {
          x: x,
          y: y
        };
      }

      a.sort(function (a, b) {
        return a.x - b.x;
      });
      pnt = new EasePoint(1, 1, null);
      i = points;

      while (--i > -1) {
        obj = a[i];
        pnt = new EasePoint(obj.x, obj.y, pnt);
      }

      this._prev = new EasePoint(0, 0, pnt.t !== 0 ? pnt : pnt.next);
    }, true);
    p = RoughEase.prototype = new Ease();
    p.constructor = RoughEase;

    p.getRatio = function (p) {
      var pnt = this._prev;

      if (p > pnt.t) {
        while (pnt.next && p >= pnt.t) {
          pnt = pnt.next;
        }

        pnt = pnt.prev;
      } else {
        while (pnt.prev && p <= pnt.t) {
          pnt = pnt.prev;
        }
      }

      this._prev = pnt;
      return pnt.v + (p - pnt.t) / pnt.gap * pnt.c;
    };

    p.config = function (vars) {
      return new RoughEase(vars);
    };

    RoughEase.ease = new RoughEase(); //Bounce

    _wrap("Bounce", _create("BounceOut", function (p) {
      if (p < 1 / 2.75) {
        return 7.5625 * p * p;
      } else if (p < 2 / 2.75) {
        return 7.5625 * (p -= 1.5 / 2.75) * p + 0.75;
      } else if (p < 2.5 / 2.75) {
        return 7.5625 * (p -= 2.25 / 2.75) * p + 0.9375;
      }

      return 7.5625 * (p -= 2.625 / 2.75) * p + 0.984375;
    }), _create("BounceIn", function (p) {
      if ((p = 1 - p) < 1 / 2.75) {
        return 1 - 7.5625 * p * p;
      } else if (p < 2 / 2.75) {
        return 1 - (7.5625 * (p -= 1.5 / 2.75) * p + 0.75);
      } else if (p < 2.5 / 2.75) {
        return 1 - (7.5625 * (p -= 2.25 / 2.75) * p + 0.9375);
      }

      return 1 - (7.5625 * (p -= 2.625 / 2.75) * p + 0.984375);
    }), _create("BounceInOut", function (p) {
      var invert = p < 0.5;

      if (invert) {
        p = 1 - p * 2;
      } else {
        p = p * 2 - 1;
      }

      if (p < 1 / 2.75) {
        p = 7.5625 * p * p;
      } else if (p < 2 / 2.75) {
        p = 7.5625 * (p -= 1.5 / 2.75) * p + 0.75;
      } else if (p < 2.5 / 2.75) {
        p = 7.5625 * (p -= 2.25 / 2.75) * p + 0.9375;
      } else {
        p = 7.5625 * (p -= 2.625 / 2.75) * p + 0.984375;
      }

      return invert ? (1 - p) * 0.5 : p * 0.5 + 0.5;
    })); //CIRC


    _wrap("Circ", _create("CircOut", function (p) {
      return Math.sqrt(1 - (p = p - 1) * p);
    }), _create("CircIn", function (p) {
      return -(Math.sqrt(1 - p * p) - 1);
    }), _create("CircInOut", function (p) {
      return (p *= 2) < 1 ? -0.5 * (Math.sqrt(1 - p * p) - 1) : 0.5 * (Math.sqrt(1 - (p -= 2) * p) + 1);
    })); //Elastic


    _createElastic = function _createElastic(n, f, def) {
      var C = _class("easing." + n, function (amplitude, period) {
        this._p1 = amplitude >= 1 ? amplitude : 1; //note: if amplitude is < 1, we simply adjust the period for a more natural feel. Otherwise the math doesn't work right and the curve starts at 1.

        this._p2 = (period || def) / (amplitude < 1 ? amplitude : 1);
        this._p3 = this._p2 / _2PI * (Math.asin(1 / this._p1) || 0);
        this._p2 = _2PI / this._p2; //precalculate to optimize
      }, true),
          p = C.prototype = new Ease();

      p.constructor = C;
      p.getRatio = f;

      p.config = function (amplitude, period) {
        return new C(amplitude, period);
      };

      return C;
    };

    _wrap("Elastic", _createElastic("ElasticOut", function (p) {
      return this._p1 * Math.pow(2, -10 * p) * Math.sin((p - this._p3) * this._p2) + 1;
    }, 0.3), _createElastic("ElasticIn", function (p) {
      return -(this._p1 * Math.pow(2, 10 * (p -= 1)) * Math.sin((p - this._p3) * this._p2));
    }, 0.3), _createElastic("ElasticInOut", function (p) {
      return (p *= 2) < 1 ? -0.5 * (this._p1 * Math.pow(2, 10 * (p -= 1)) * Math.sin((p - this._p3) * this._p2)) : this._p1 * Math.pow(2, -10 * (p -= 1)) * Math.sin((p - this._p3) * this._p2) * 0.5 + 1;
    }, 0.45)); //Expo


    _wrap("Expo", _create("ExpoOut", function (p) {
      return 1 - Math.pow(2, -10 * p);
    }), _create("ExpoIn", function (p) {
      return Math.pow(2, 10 * (p - 1)) - 0.001;
    }), _create("ExpoInOut", function (p) {
      return (p *= 2) < 1 ? 0.5 * Math.pow(2, 10 * (p - 1)) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));
    })); //Sine


    _wrap("Sine", _create("SineOut", function (p) {
      return Math.sin(p * _HALF_PI);
    }), _create("SineIn", function (p) {
      return -Math.cos(p * _HALF_PI) + 1;
    }), _create("SineInOut", function (p) {
      return -0.5 * (Math.cos(Math.PI * p) - 1);
    }));

    _class("easing.EaseLookup", {
      find: function find(s) {
        return Ease.map[s];
      }
    }, true); //register the non-standard eases


    _easeReg(w.SlowMo, "SlowMo", "ease,");

    _easeReg(RoughEase, "RoughEase", "ease,");

    _easeReg(SteppedEase, "SteppedEase", "ease,");

    return Back;
  }, true);
});

if (_gsScope._gsDefine) {
  _gsScope._gsQueue.pop()();
} //necessary in case TweenLite was already loaded separately.

/*
 * ----------------------------------------------------------------
 * Base classes like TweenLite, SimpleTimeline, Ease, Ticker, etc.
 * ----------------------------------------------------------------
 */


(function (window, moduleName) {
  "use strict";

  var _exports = {},
      _doc = window.document,
      _globals = window.GreenSockGlobals = window.GreenSockGlobals || window,
      existingModule = _globals[moduleName];

  if (existingModule) {
    if (typeof module !== "undefined" && module.exports) {
      //node
      module.exports = existingModule;
    }

    return existingModule; //in case the core set of classes is already loaded, don't instantiate twice.
  }

  var _namespace = function _namespace(ns) {
    var a = ns.split("."),
        p = _globals,
        i;

    for (i = 0; i < a.length; i++) {
      p[a[i]] = p = p[a[i]] || {};
    }

    return p;
  },
      gs = _namespace("com.greensock"),
      _tinyNum = 0.00000001,
      _slice = function _slice(a) {
    //don't use Array.prototype.slice.call(target, 0) because that doesn't work in IE8 with a NodeList that's returned by querySelectorAll()
    var b = [],
        l = a.length,
        i;

    for (i = 0; i !== l; b.push(a[i++])) {}

    return b;
  },
      _emptyFunc = function _emptyFunc() {},
      _isArray = function () {
    //works around issues in iframe environments where the Array global isn't shared, thus if the object originates in a different window/iframe, "(obj instanceof Array)" will evaluate false. We added some speed optimizations to avoid Object.prototype.toString.call() unless it's absolutely necessary because it's VERY slow (like 20x slower)
    var toString = Object.prototype.toString,
        array = toString.call([]);
    return function (obj) {
      return obj != null && (obj instanceof Array || _typeof(obj) === "object" && !!obj.push && toString.call(obj) === array);
    };
  }(),
      a,
      i,
      p,
      _ticker,
      _tickerActive,
      _defLookup = {},

  /**
   * @constructor
   * Defines a GreenSock class, optionally with an array of dependencies that must be instantiated first and passed into the definition.
   * This allows users to load GreenSock JS files in any order even if they have interdependencies (like CSSPlugin extends TweenPlugin which is
   * inside TweenLite.js, but if CSSPlugin is loaded first, it should wait to run its code until TweenLite.js loads and instantiates TweenPlugin
   * and then pass TweenPlugin to CSSPlugin's definition). This is all done automatically and internally.
   *
   * Every definition will be added to a "com.greensock" global object (typically window, but if a window.GreenSockGlobals object is found,
   * it will go there as of v1.7). For example, TweenLite will be found at window.com.greensock.TweenLite and since it's a global class that should be available anywhere,
   * it is ALSO referenced at window.TweenLite. However some classes aren't considered global, like the base com.greensock.core.Animation class, so
   * those will only be at the package like window.com.greensock.core.Animation. Again, if you define a GreenSockGlobals object on the window, everything
   * gets tucked neatly inside there instead of on the window directly. This allows you to do advanced things like load multiple versions of GreenSock
   * files and put them into distinct objects (imagine a banner ad uses a newer version but the main site uses an older one). In that case, you could
   * sandbox the banner one like:
   *
   * <script>
   *     var gs = window.GreenSockGlobals = {}; //the newer version we're about to load could now be referenced in a "gs" object, like gs.TweenLite.to(...). Use whatever alias you want as long as it's unique, "gs" or "banner" or whatever.
   * </script>
   * <script src="js/greensock/v1.7/TweenMax.js"></script>
   * <script>
   *     window.GreenSockGlobals = window._gsQueue = window._gsDefine = null; //reset it back to null (along with the special _gsQueue variable) so that the next load of TweenMax affects the window and we can reference things directly like TweenLite.to(...)
   * </script>
   * <script src="js/greensock/v1.6/TweenMax.js"></script>
   * <script>
   *     gs.TweenLite.to(...); //would use v1.7
   *     TweenLite.to(...); //would use v1.6
   * </script>
   *
   * @param {!string} ns The namespace of the class definition, leaving off "com.greensock." as that's assumed. For example, "TweenLite" or "plugins.CSSPlugin" or "easing.Back".
   * @param {!Array.<string>} dependencies An array of dependencies (described as their namespaces minus "com.greensock." prefix). For example ["TweenLite","plugins.TweenPlugin","core.Animation"]
   * @param {!function():Object} func The function that should be called and passed the resolved dependencies which will return the actual class for this definition.
   * @param {boolean=} global If true, the class will be added to the global scope (typically window unless you define a window.GreenSockGlobals object)
   */
  Definition = function Definition(ns, dependencies, func, global) {
    this.sc = _defLookup[ns] ? _defLookup[ns].sc : []; //subclasses

    _defLookup[ns] = this;
    this.gsClass = null;
    this.func = func;
    var _classes = [];

    this.check = function (init) {
      var i = dependencies.length,
          missing = i,
          cur,
          a,
          n,
          cl;

      while (--i > -1) {
        if ((cur = _defLookup[dependencies[i]] || new Definition(dependencies[i], [])).gsClass) {
          _classes[i] = cur.gsClass;
          missing--;
        } else if (init) {
          cur.sc.push(this);
        }
      }

      if (missing === 0 && func) {
        a = ("com.greensock." + ns).split(".");
        n = a.pop();
        cl = _namespace(a.join("."))[n] = this.gsClass = func.apply(func, _classes); //exports to multiple environments

        if (global) {
          _globals[n] = _exports[n] = cl; //provides a way to avoid global namespace pollution. By default, the main classes like TweenLite, Power1, Strong, etc. are added to window unless a GreenSockGlobals is defined. So if you want to have things added to a custom object instead, just do something like window.GreenSockGlobals = {} before loading any GreenSock files. You can even set up an alias like window.GreenSockGlobals = windows.gs = {} so that you can access everything like gs.TweenLite. Also remember that ALL classes are added to the window.com.greensock object (in their respective packages, like com.greensock.easing.Power1, com.greensock.TweenLite, etc.)

          if (typeof module !== "undefined" && module.exports) {
            //node
            if (ns === moduleName) {
              module.exports = _exports[moduleName] = cl;

              for (i in _exports) {
                cl[i] = _exports[i];
              }
            } else if (_exports[moduleName]) {
              _exports[moduleName][n] = cl;
            }
          } else if (typeof define === "function" && define.amd) {
            //AMD
            define((window.GreenSockAMDPath ? window.GreenSockAMDPath + "/" : "") + ns.split(".").pop(), [], function () {
              return cl;
            });
          }
        }

        for (i = 0; i < this.sc.length; i++) {
          this.sc[i].check();
        }
      }
    };

    this.check(true);
  },
      //used to create Definition instances (which basically registers a class that has dependencies).
  _gsDefine = window._gsDefine = function (ns, dependencies, func, global) {
    return new Definition(ns, dependencies, func, global);
  },
      //a quick way to create a class that doesn't have any dependencies. Returns the class, but first registers it in the GreenSock namespace so that other classes can grab it (other classes might be dependent on the class).
  _class = gs._class = function (ns, func, global) {
    func = func || function () {};

    _gsDefine(ns, [], function () {
      return func;
    }, global);

    return func;
  };

  _gsDefine.globals = _globals;
  /*
   * ----------------------------------------------------------------
   * Ease
   * ----------------------------------------------------------------
   */

  var _baseParams = [0, 0, 1, 1],
      Ease = _class("easing.Ease", function (func, extraParams, type, power) {
    this._func = func;
    this._type = type || 0;
    this._power = power || 0;
    this._params = extraParams ? _baseParams.concat(extraParams) : _baseParams;
  }, true),
      _easeMap = Ease.map = {},
      _easeReg = Ease.register = function (ease, names, types, create) {
    var na = names.split(","),
        i = na.length,
        ta = (types || "easeIn,easeOut,easeInOut").split(","),
        e,
        name,
        j,
        type;

    while (--i > -1) {
      name = na[i];
      e = create ? _class("easing." + name, null, true) : gs.easing[name] || {};
      j = ta.length;

      while (--j > -1) {
        type = ta[j];
        _easeMap[name + "." + type] = _easeMap[type + name] = e[type] = ease.getRatio ? ease : ease[type] || new ease();
      }
    }
  };

  p = Ease.prototype;
  p._calcEnd = false;

  p.getRatio = function (p) {
    if (this._func) {
      this._params[0] = p;
      return this._func.apply(null, this._params);
    }

    var t = this._type,
        pw = this._power,
        r = t === 1 ? 1 - p : t === 2 ? p : p < 0.5 ? p * 2 : (1 - p) * 2;

    if (pw === 1) {
      r *= r;
    } else if (pw === 2) {
      r *= r * r;
    } else if (pw === 3) {
      r *= r * r * r;
    } else if (pw === 4) {
      r *= r * r * r * r;
    }

    return t === 1 ? 1 - r : t === 2 ? r : p < 0.5 ? r / 2 : 1 - r / 2;
  }; //create all the standard eases like Linear, Quad, Cubic, Quart, Quint, Strong, Power0, Power1, Power2, Power3, and Power4 (each with easeIn, easeOut, and easeInOut)


  a = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"];
  i = a.length;

  while (--i > -1) {
    p = a[i] + ",Power" + i;

    _easeReg(new Ease(null, null, 1, i), p, "easeOut", true);

    _easeReg(new Ease(null, null, 2, i), p, "easeIn" + (i === 0 ? ",easeNone" : ""));

    _easeReg(new Ease(null, null, 3, i), p, "easeInOut");
  }

  _easeMap.linear = gs.easing.Linear.easeIn;
  _easeMap.swing = gs.easing.Quad.easeInOut; //for jQuery folks

  /*
   * ----------------------------------------------------------------
   * EventDispatcher
   * ----------------------------------------------------------------
   */

  var EventDispatcher = _class("events.EventDispatcher", function (target) {
    this._listeners = {};
    this._eventTarget = target || this;
  });

  p = EventDispatcher.prototype;

  p.addEventListener = function (type, callback, scope, useParam, priority) {
    priority = priority || 0;
    var list = this._listeners[type],
        index = 0,
        listener,
        i;

    if (this === _ticker && !_tickerActive) {
      _ticker.wake();
    }

    if (list == null) {
      this._listeners[type] = list = [];
    }

    i = list.length;

    while (--i > -1) {
      listener = list[i];

      if (listener.c === callback && listener.s === scope) {
        list.splice(i, 1);
      } else if (index === 0 && listener.pr < priority) {
        index = i + 1;
      }
    }

    list.splice(index, 0, {
      c: callback,
      s: scope,
      up: useParam,
      pr: priority
    });
  };

  p.removeEventListener = function (type, callback) {
    var list = this._listeners[type],
        i;

    if (list) {
      i = list.length;

      while (--i > -1) {
        if (list[i].c === callback) {
          list.splice(i, 1);
          return;
        }
      }
    }
  };

  p.dispatchEvent = function (type) {
    var list = this._listeners[type],
        i,
        t,
        listener;

    if (list) {
      i = list.length;

      if (i > 1) {
        list = list.slice(0); //in case addEventListener() is called from within a listener/callback (otherwise the index could change, resulting in a skip)
      }

      t = this._eventTarget;

      while (--i > -1) {
        listener = list[i];

        if (listener) {
          if (listener.up) {
            listener.c.call(listener.s || t, {
              type: type,
              target: t
            });
          } else {
            listener.c.call(listener.s || t);
          }
        }
      }
    }
  };
  /*
   * ----------------------------------------------------------------
   * Ticker
   * ----------------------------------------------------------------
   */


  var _reqAnimFrame = window.requestAnimationFrame,
      _cancelAnimFrame = window.cancelAnimationFrame,
      _getTime = Date.now || function () {
    return new Date().getTime();
  },
      _lastUpdate = _getTime(); //now try to determine the requestAnimationFrame and cancelAnimationFrame functions and if none are found, we'll use a setTimeout()/clearTimeout() polyfill.


  a = ["ms", "moz", "webkit", "o"];
  i = a.length;

  while (--i > -1 && !_reqAnimFrame) {
    _reqAnimFrame = window[a[i] + "RequestAnimationFrame"];
    _cancelAnimFrame = window[a[i] + "CancelAnimationFrame"] || window[a[i] + "CancelRequestAnimationFrame"];
  }

  _class("Ticker", function (fps, useRAF) {
    var _self = this,
        _startTime = _getTime(),
        _useRAF = useRAF !== false && _reqAnimFrame ? "auto" : false,
        _lagThreshold = 500,
        _adjustedLag = 33,
        _tickWord = "tick",
        //helps reduce gc burden
    _fps,
        _req,
        _id,
        _gap,
        _nextTime,
        _tick = function _tick(manual) {
      var elapsed = _getTime() - _lastUpdate,
          overlap,
          dispatch;

      if (elapsed > _lagThreshold) {
        _startTime += elapsed - _adjustedLag;
      }

      _lastUpdate += elapsed;
      _self.time = (_lastUpdate - _startTime) / 1000;
      overlap = _self.time - _nextTime;

      if (!_fps || overlap > 0 || manual === true) {
        _self.frame++;
        _nextTime += overlap + (overlap >= _gap ? 0.004 : _gap - overlap);
        dispatch = true;
      }

      if (manual !== true) {
        //make sure the request is made before we dispatch the "tick" event so that timing is maintained. Otherwise, if processing the "tick" requires a bunch of time (like 15ms) and we're using a setTimeout() that's based on 16.7ms, it'd technically take 31.7ms between frames otherwise.
        _id = _req(_tick);
      }

      if (dispatch) {
        _self.dispatchEvent(_tickWord);
      }
    };

    EventDispatcher.call(_self);
    _self.time = _self.frame = 0;

    _self.tick = function () {
      _tick(true);
    };

    _self.lagSmoothing = function (threshold, adjustedLag) {
      if (!arguments.length) {
        //if lagSmoothing() is called with no arguments, treat it like a getter that returns a boolean indicating if it's enabled or not. This is purposely undocumented and is for internal use.
        return _lagThreshold < 1 / _tinyNum;
      }

      _lagThreshold = threshold || 1 / _tinyNum; //zero should be interpreted as basically unlimited

      _adjustedLag = Math.min(adjustedLag, _lagThreshold, 0);
    };

    _self.sleep = function () {
      if (_id == null) {
        return;
      }

      if (!_useRAF || !_cancelAnimFrame) {
        clearTimeout(_id);
      } else {
        _cancelAnimFrame(_id);
      }

      _req = _emptyFunc;
      _id = null;

      if (_self === _ticker) {
        _tickerActive = false;
      }
    };

    _self.wake = function (seamless) {
      if (_id !== null) {
        _self.sleep();
      } else if (seamless) {
        _startTime += -_lastUpdate + (_lastUpdate = _getTime());
      } else if (_self.frame > 10) {
        //don't trigger lagSmoothing if we're just waking up, and make sure that at least 10 frames have elapsed because of the iOS bug that we work around below with the 1.5-second setTimout().
        _lastUpdate = _getTime() - _lagThreshold + 5;
      }

      _req = _fps === 0 ? _emptyFunc : !_useRAF || !_reqAnimFrame ? function (f) {
        return setTimeout(f, (_nextTime - _self.time) * 1000 + 1 | 0);
      } : _reqAnimFrame;

      if (_self === _ticker) {
        _tickerActive = true;
      }

      _tick(2);
    };

    _self.fps = function (value) {
      if (!arguments.length) {
        return _fps;
      }

      _fps = value;
      _gap = 1 / (_fps || 60);
      _nextTime = this.time + _gap;

      _self.wake();
    };

    _self.useRAF = function (value) {
      if (!arguments.length) {
        return _useRAF;
      }

      _self.sleep();

      _useRAF = value;

      _self.fps(_fps);
    };

    _self.fps(fps); //a bug in iOS 6 Safari occasionally prevents the requestAnimationFrame from working initially, so we use a 1.5-second timeout that automatically falls back to setTimeout() if it senses this condition.


    setTimeout(function () {
      if (_useRAF === "auto" && _self.frame < 5 && (_doc || {}).visibilityState !== "hidden") {
        _self.useRAF(false);
      }
    }, 1500);
  });

  p = gs.Ticker.prototype = new gs.events.EventDispatcher();
  p.constructor = gs.Ticker;
  /*
   * ----------------------------------------------------------------
   * Animation
   * ----------------------------------------------------------------
   */

  var Animation = _class("core.Animation", function (duration, vars) {
    this.vars = vars = vars || {};
    this._duration = this._totalDuration = duration || 0;
    this._delay = Number(vars.delay) || 0;
    this._timeScale = 1;
    this._active = !!vars.immediateRender;
    this.data = vars.data;
    this._reversed = !!vars.reversed;

    if (!_rootTimeline) {
      return;
    }

    if (!_tickerActive) {
      //some browsers (like iOS 6 Safari) shut down JavaScript execution when the tab is disabled and they [occasionally] neglect to start up requestAnimationFrame again when returning - this code ensures that the engine starts up again properly.
      _ticker.wake();
    }

    var tl = this.vars.useFrames ? _rootFramesTimeline : _rootTimeline;
    tl.add(this, tl._time);

    if (this.vars.paused) {
      this.paused(true);
    }
  });

  _ticker = Animation.ticker = new gs.Ticker();
  p = Animation.prototype;
  p._dirty = p._gc = p._initted = p._paused = false;
  p._totalTime = p._time = 0;
  p._rawPrevTime = -1;
  p._next = p._last = p._onUpdate = p._timeline = p.timeline = null;
  p._paused = false; //some browsers (like iOS) occasionally drop the requestAnimationFrame event when the user switches to a different tab and then comes back again, so we use a 2-second setTimeout() to sense if/when that condition occurs and then wake() the ticker.

  var _checkTimeout = function _checkTimeout() {
    if (_tickerActive && _getTime() - _lastUpdate > 2000 && ((_doc || {}).visibilityState !== "hidden" || !_ticker.lagSmoothing())) {
      //note: if the tab is hidden, we should still wake if lagSmoothing has been disabled.
      _ticker.wake();
    }

    var t = setTimeout(_checkTimeout, 2000);

    if (t.unref) {
      // allows a node process to exit even if the timeout’s callback hasn't been invoked. Without it, the node process could hang as this function is called every two seconds.
      t.unref();
    }
  };

  _checkTimeout();

  p.play = function (from, suppressEvents) {
    if (from != null) {
      this.seek(from, suppressEvents);
    }

    return this.reversed(false).paused(false);
  };

  p.pause = function (atTime, suppressEvents) {
    if (atTime != null) {
      this.seek(atTime, suppressEvents);
    }

    return this.paused(true);
  };

  p.resume = function (from, suppressEvents) {
    if (from != null) {
      this.seek(from, suppressEvents);
    }

    return this.paused(false);
  };

  p.seek = function (time, suppressEvents) {
    return this.totalTime(Number(time), suppressEvents !== false);
  };

  p.restart = function (includeDelay, suppressEvents) {
    return this.reversed(false).paused(false).totalTime(includeDelay ? -this._delay : 0, suppressEvents !== false, true);
  };

  p.reverse = function (from, suppressEvents) {
    if (from != null) {
      this.seek(from || this.totalDuration(), suppressEvents);
    }

    return this.reversed(true).paused(false);
  };

  p.render = function (time, suppressEvents, force) {//stub - we override this method in subclasses.
  };

  p.invalidate = function () {
    this._time = this._totalTime = 0;
    this._initted = this._gc = false;
    this._rawPrevTime = -1;

    if (this._gc || !this.timeline) {
      this._enabled(true);
    }

    return this;
  };

  p.isActive = function () {
    var tl = this._timeline,
        //the 2 root timelines won't have a _timeline; they're always active.
    startTime = this._startTime,
        rawTime;
    return !tl || !this._gc && !this._paused && tl.isActive() && (rawTime = tl.rawTime(true)) >= startTime && rawTime < startTime + this.totalDuration() / this._timeScale - _tinyNum;
  };

  p._enabled = function (enabled, ignoreTimeline) {
    if (!_tickerActive) {
      _ticker.wake();
    }

    this._gc = !enabled;
    this._active = this.isActive();

    if (ignoreTimeline !== true) {
      if (enabled && !this.timeline) {
        this._timeline.add(this, this._startTime - this._delay);
      } else if (!enabled && this.timeline) {
        this._timeline._remove(this, true);
      }
    }

    return false;
  };

  p._kill = function (vars, target) {
    return this._enabled(false, false);
  };

  p.kill = function (vars, target) {
    this._kill(vars, target);

    return this;
  };

  p._uncache = function (includeSelf) {
    var tween = includeSelf ? this : this.timeline;

    while (tween) {
      tween._dirty = true;
      tween = tween.timeline;
    }

    return this;
  };

  p._swapSelfInParams = function (params) {
    var i = params.length,
        copy = params.concat();

    while (--i > -1) {
      if (params[i] === "{self}") {
        copy[i] = this;
      }
    }

    return copy;
  };

  p._callback = function (type) {
    var v = this.vars,
        callback = v[type],
        params = v[type + "Params"],
        scope = v[type + "Scope"] || v.callbackScope || this,
        l = params ? params.length : 0;

    switch (l) {
      //speed optimization; call() is faster than apply() so use it when there are only a few parameters (which is by far most common). Previously we simply did var v = this.vars; v[type].apply(v[type + "Scope"] || v.callbackScope || this, v[type + "Params"] || _blankArray);
      case 0:
        callback.call(scope);
        break;

      case 1:
        callback.call(scope, params[0]);
        break;

      case 2:
        callback.call(scope, params[0], params[1]);
        break;

      default:
        callback.apply(scope, params);
    }
  }; //----Animation getters/setters --------------------------------------------------------


  p.eventCallback = function (type, callback, params, scope) {
    if ((type || "").substr(0, 2) === "on") {
      var v = this.vars;

      if (arguments.length === 1) {
        return v[type];
      }

      if (callback == null) {
        delete v[type];
      } else {
        v[type] = callback;
        v[type + "Params"] = _isArray(params) && params.join("").indexOf("{self}") !== -1 ? this._swapSelfInParams(params) : params;
        v[type + "Scope"] = scope;
      }

      if (type === "onUpdate") {
        this._onUpdate = callback;
      }
    }

    return this;
  };

  p.delay = function (value) {
    if (!arguments.length) {
      return this._delay;
    }

    if (this._timeline.smoothChildTiming) {
      this.startTime(this._startTime + value - this._delay);
    }

    this._delay = value;
    return this;
  };

  p.duration = function (value) {
    if (!arguments.length) {
      this._dirty = false;
      return this._duration;
    }

    this._duration = this._totalDuration = value;

    this._uncache(true); //true in case it's a TweenMax or TimelineMax that has a repeat - we'll need to refresh the totalDuration.


    if (this._timeline.smoothChildTiming) if (this._time > 0) if (this._time < this._duration) if (value !== 0) {
      this.totalTime(this._totalTime * (value / this._duration), true);
    }
    return this;
  };

  p.totalDuration = function (value) {
    this._dirty = false;
    return !arguments.length ? this._totalDuration : this.duration(value);
  };

  p.time = function (value, suppressEvents) {
    if (!arguments.length) {
      return this._time;
    }

    if (this._dirty) {
      this.totalDuration();
    }

    return this.totalTime(value > this._duration ? this._duration : value, suppressEvents);
  };

  p.totalTime = function (time, suppressEvents, uncapped) {
    if (!_tickerActive) {
      _ticker.wake();
    }

    if (!arguments.length) {
      return this._totalTime;
    }

    if (this._timeline) {
      if (time < 0 && !uncapped) {
        time += this.totalDuration();
      }

      if (this._timeline.smoothChildTiming) {
        if (this._dirty) {
          this.totalDuration();
        }

        var totalDuration = this._totalDuration,
            tl = this._timeline;

        if (time > totalDuration && !uncapped) {
          time = totalDuration;
        }

        this._startTime = (this._paused ? this._pauseTime : tl._time) - (!this._reversed ? time : totalDuration - time) / this._timeScale;

        if (!tl._dirty) {
          //for performance improvement. If the parent's cache is already dirty, it already took care of marking the ancestors as dirty too, so skip the function call here.
          this._uncache(false);
        } //in case any of the ancestor timelines had completed but should now be enabled, we should reset their totalTime() which will also ensure that they're lined up properly and enabled. Skip for animations that are on the root (wasteful). Example: a TimelineLite.exportRoot() is performed when there's a paused tween on the root, the export will not complete until that tween is unpaused, but imagine a child gets restarted later, after all [unpaused] tweens have completed. The startTime of that child would get pushed out, but one of the ancestors may have completed.


        if (tl._timeline) {
          while (tl._timeline) {
            if (tl._timeline._time !== (tl._startTime + tl._totalTime) / tl._timeScale) {
              tl.totalTime(tl._totalTime, true);
            }

            tl = tl._timeline;
          }
        }
      }

      if (this._gc) {
        this._enabled(true, false);
      }

      if (this._totalTime !== time || this._duration === 0) {
        if (_lazyTweens.length) {
          _lazyRender();
        }

        this.render(time, suppressEvents, false);

        if (_lazyTweens.length) {
          //in case rendering caused any tweens to lazy-init, we should render them because typically when someone calls seek() or time() or progress(), they expect an immediate render.
          _lazyRender();
        }
      }
    }

    return this;
  };

  p.progress = p.totalProgress = function (value, suppressEvents) {
    var duration = this.duration();
    return !arguments.length ? duration ? this._time / duration : this.ratio : this.totalTime(duration * value, suppressEvents);
  };

  p.startTime = function (value) {
    if (!arguments.length) {
      return this._startTime;
    }

    if (value !== this._startTime) {
      this._startTime = value;
      if (this.timeline) if (this.timeline._sortChildren) {
        this.timeline.add(this, value - this._delay); //ensures that any necessary re-sequencing of Animations in the timeline occurs to make sure the rendering order is correct.
      }
    }

    return this;
  };

  p.endTime = function (includeRepeats) {
    return this._startTime + (includeRepeats != false ? this.totalDuration() : this.duration()) / this._timeScale;
  };

  p.timeScale = function (value) {
    if (!arguments.length) {
      return this._timeScale;
    }

    var pauseTime, t;
    value = value || _tinyNum; //can't allow zero because it'll throw the math off

    if (this._timeline && this._timeline.smoothChildTiming) {
      pauseTime = this._pauseTime;
      t = pauseTime || pauseTime === 0 ? pauseTime : this._timeline.totalTime();
      this._startTime = t - (t - this._startTime) * this._timeScale / value;
    }

    this._timeScale = value;
    t = this.timeline;

    while (t && t.timeline) {
      //must update the duration/totalDuration of all ancestor timelines immediately in case in the middle of a render loop, one tween alters another tween's timeScale which shoves its startTime before 0, forcing the parent timeline to shift around and shiftChildren() which could affect that next tween's render (startTime). Doesn't matter for the root timeline though.
      t._dirty = true;
      t.totalDuration();
      t = t.timeline;
    }

    return this;
  };

  p.reversed = function (value) {
    if (!arguments.length) {
      return this._reversed;
    }

    if (value != this._reversed) {
      this._reversed = value;
      this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, true);
    }

    return this;
  };

  p.paused = function (value) {
    if (!arguments.length) {
      return this._paused;
    }

    var tl = this._timeline,
        raw,
        elapsed;
    if (value != this._paused) if (tl) {
      if (!_tickerActive && !value) {
        _ticker.wake();
      }

      raw = tl.rawTime();
      elapsed = raw - this._pauseTime;

      if (!value && tl.smoothChildTiming) {
        this._startTime += elapsed;

        this._uncache(false);
      }

      this._pauseTime = value ? raw : null;
      this._paused = value;
      this._active = this.isActive();

      if (!value && elapsed !== 0 && this._initted && this.duration()) {
        raw = tl.smoothChildTiming ? this._totalTime : (raw - this._startTime) / this._timeScale;
        this.render(raw, raw === this._totalTime, true); //in case the target's properties changed via some other tween or manual update by the user, we should force a render.
      }
    }

    if (this._gc && !value) {
      this._enabled(true, false);
    }

    return this;
  };
  /*
   * ----------------------------------------------------------------
   * SimpleTimeline
   * ----------------------------------------------------------------
   */


  var SimpleTimeline = _class("core.SimpleTimeline", function (vars) {
    Animation.call(this, 0, vars);
    this.autoRemoveChildren = this.smoothChildTiming = true;
  });

  p = SimpleTimeline.prototype = new Animation();
  p.constructor = SimpleTimeline;
  p.kill()._gc = false;
  p._first = p._last = p._recent = null;
  p._sortChildren = false;

  p.add = p.insert = function (child, position, align, stagger) {
    var prevTween, st;
    child._startTime = Number(position || 0) + child._delay;
    if (child._paused) if (this !== child._timeline) {
      //we only adjust the _pauseTime if it wasn't in this timeline already. Remember, sometimes a tween will be inserted again into the same timeline when its startTime is changed so that the tweens in the TimelineLite/Max are re-ordered properly in the linked list (so everything renders in the proper order).
      child._pauseTime = this.rawTime() - (child._timeline.rawTime() - child._pauseTime);
    }

    if (child.timeline) {
      child.timeline._remove(child, true); //removes from existing timeline so that it can be properly added to this one.

    }

    child.timeline = child._timeline = this;

    if (child._gc) {
      child._enabled(true, true);
    }

    prevTween = this._last;

    if (this._sortChildren) {
      st = child._startTime;

      while (prevTween && prevTween._startTime > st) {
        prevTween = prevTween._prev;
      }
    }

    if (prevTween) {
      child._next = prevTween._next;
      prevTween._next = child;
    } else {
      child._next = this._first;
      this._first = child;
    }

    if (child._next) {
      child._next._prev = child;
    } else {
      this._last = child;
    }

    child._prev = prevTween;
    this._recent = child;

    if (this._timeline) {
      this._uncache(true);
    }

    return this;
  };

  p._remove = function (tween, skipDisable) {
    if (tween.timeline === this) {
      if (!skipDisable) {
        tween._enabled(false, true);
      }

      if (tween._prev) {
        tween._prev._next = tween._next;
      } else if (this._first === tween) {
        this._first = tween._next;
      }

      if (tween._next) {
        tween._next._prev = tween._prev;
      } else if (this._last === tween) {
        this._last = tween._prev;
      }

      tween._next = tween._prev = tween.timeline = null;

      if (tween === this._recent) {
        this._recent = this._last;
      }

      if (this._timeline) {
        this._uncache(true);
      }
    }

    return this;
  };

  p.render = function (time, suppressEvents, force) {
    var tween = this._first,
        next;
    this._totalTime = this._time = this._rawPrevTime = time;

    while (tween) {
      next = tween._next; //record it here because the value could change after rendering...

      if (tween._active || time >= tween._startTime && !tween._paused && !tween._gc) {
        if (!tween._reversed) {
          tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force);
        } else {
          tween.render((!tween._dirty ? tween._totalDuration : tween.totalDuration()) - (time - tween._startTime) * tween._timeScale, suppressEvents, force);
        }
      }

      tween = next;
    }
  };

  p.rawTime = function () {
    if (!_tickerActive) {
      _ticker.wake();
    }

    return this._totalTime;
  };
  /*
   * ----------------------------------------------------------------
   * TweenLite
   * ----------------------------------------------------------------
   */


  var TweenLite = _class("TweenLite", function (target, duration, vars) {
    Animation.call(this, duration, vars);
    this.render = TweenLite.prototype.render; //speed optimization (avoid prototype lookup on this "hot" method)

    if (target == null) {
      throw "Cannot tween a null target.";
    }

    this.target = target = typeof target !== "string" ? target : TweenLite.selector(target) || target;
    var isSelector = target.jquery || target.length && target !== window && target[0] && (target[0] === window || target[0].nodeType && target[0].style && !target.nodeType),
        overwrite = this.vars.overwrite,
        i,
        targ,
        targets;
    this._overwrite = overwrite = overwrite == null ? _overwriteLookup[TweenLite.defaultOverwrite] : typeof overwrite === "number" ? overwrite >> 0 : _overwriteLookup[overwrite];

    if ((isSelector || target instanceof Array || target.push && _isArray(target)) && typeof target[0] !== "number") {
      this._targets = targets = _slice(target); //don't use Array.prototype.slice.call(target, 0) because that doesn't work in IE8 with a NodeList that's returned by querySelectorAll()

      this._propLookup = [];
      this._siblings = [];

      for (i = 0; i < targets.length; i++) {
        targ = targets[i];

        if (!targ) {
          targets.splice(i--, 1);
          continue;
        } else if (typeof targ === "string") {
          targ = targets[i--] = TweenLite.selector(targ); //in case it's an array of strings

          if (typeof targ === "string") {
            targets.splice(i + 1, 1); //to avoid an endless loop (can't imagine why the selector would return a string, but just in case)
          }

          continue;
        } else if (targ.length && targ !== window && targ[0] && (targ[0] === window || targ[0].nodeType && targ[0].style && !targ.nodeType)) {
          //in case the user is passing in an array of selector objects (like jQuery objects), we need to check one more level and pull things out if necessary. Also note that <select> elements pass all the criteria regarding length and the first child having style, so we must also check to ensure the target isn't an HTML node itself.
          targets.splice(i--, 1);
          this._targets = targets = targets.concat(_slice(targ));
          continue;
        }

        this._siblings[i] = _register(targ, this, false);
        if (overwrite === 1) if (this._siblings[i].length > 1) {
          _applyOverwrite(targ, this, null, 1, this._siblings[i]);
        }
      }
    } else {
      this._propLookup = {};
      this._siblings = _register(target, this, false);
      if (overwrite === 1) if (this._siblings.length > 1) {
        _applyOverwrite(target, this, null, 1, this._siblings);
      }
    }

    if (this.vars.immediateRender || duration === 0 && this._delay === 0 && this.vars.immediateRender !== false) {
      this._time = -_tinyNum; //forces a render without having to set the render() "force" parameter to true because we want to allow lazying by default (using the "force" parameter always forces an immediate full render)

      this.render(Math.min(0, -this._delay)); //in case delay is negative
    }
  }, true),
      _isSelector = function _isSelector(v) {
    return v && v.length && v !== window && v[0] && (v[0] === window || v[0].nodeType && v[0].style && !v.nodeType); //we cannot check "nodeType" if the target is window from within an iframe, otherwise it will trigger a security error in some browsers like Firefox.
  },
      _autoCSS = function _autoCSS(vars, target) {
    var css = {},
        p;

    for (p in vars) {
      if (!_reservedProps[p] && (!(p in target) || p === "transform" || p === "x" || p === "y" || p === "width" || p === "height" || p === "className" || p === "border") && (!_plugins[p] || _plugins[p] && _plugins[p]._autoCSS)) {
        //note: <img> elements contain read-only "x" and "y" properties. We should also prioritize editing css width/height rather than the element's properties.
        css[p] = vars[p];
        delete vars[p];
      }
    }

    vars.css = css;
  };

  p = TweenLite.prototype = new Animation();
  p.constructor = TweenLite;
  p.kill()._gc = false; //----TweenLite defaults, overwrite management, and root updates ----------------------------------------------------

  p.ratio = 0;
  p._firstPT = p._targets = p._overwrittenProps = p._startAt = null;
  p._notifyPluginsOfEnabled = p._lazy = false;
  TweenLite.version = "2.1.3";
  TweenLite.defaultEase = p._ease = new Ease(null, null, 1, 1);
  TweenLite.defaultOverwrite = "auto";
  TweenLite.ticker = _ticker;
  TweenLite.autoSleep = 120;

  TweenLite.lagSmoothing = function (threshold, adjustedLag) {
    _ticker.lagSmoothing(threshold, adjustedLag);
  };

  TweenLite.selector = window.$ || window.jQuery || function (e) {
    var selector = window.$ || window.jQuery;

    if (selector) {
      TweenLite.selector = selector;
      return selector(e);
    }

    if (!_doc) {
      //in some dev environments (like Angular 6), GSAP gets loaded before the document is defined! So re-query it here if/when necessary.
      _doc = window.document;
    }

    return !_doc ? e : _doc.querySelectorAll ? _doc.querySelectorAll(e) : _doc.getElementById(e.charAt(0) === "#" ? e.substr(1) : e);
  };

  var _lazyTweens = [],
      _lazyLookup = {},
      _numbersExp = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,
      _relExp = /[\+-]=-?[\.\d]/,
      //_nonNumbersExp = /(?:([\-+](?!(\d|=)))|[^\d\-+=e]|(e(?![\-+][\d])))+/ig,
  _setRatio = function _setRatio(v) {
    var pt = this._firstPT,
        min = 0.000001,
        val;

    while (pt) {
      val = !pt.blob ? pt.c * v + pt.s : v === 1 && this.end != null ? this.end : v ? this.join("") : this.start;

      if (pt.m) {
        val = pt.m.call(this._tween, val, this._target || pt.t, this._tween);
      } else if (val < min) if (val > -min && !pt.blob) {
        //prevents issues with converting very small numbers to strings in the browser
        val = 0;
      }

      if (!pt.f) {
        pt.t[pt.p] = val;
      } else if (pt.fp) {
        pt.t[pt.p](pt.fp, val);
      } else {
        pt.t[pt.p](val);
      }

      pt = pt._next;
    }
  },
      _blobRound = function _blobRound(v) {
    return (v * 1000 | 0) / 1000 + "";
  },
      //compares two strings (start/end), finds the numbers that are different and spits back an array representing the whole value but with the changing values isolated as elements. For example, "rgb(0,0,0)" and "rgb(100,50,0)" would become ["rgb(", 0, ",", 50, ",0)"]. Notice it merges the parts that are identical (performance optimization). The array also has a linked list of PropTweens attached starting with _firstPT that contain the tweening data (t, p, s, c, f, etc.). It also stores the starting value as a "start" property so that we can revert to it if/when necessary, like when a tween rewinds fully. If the quantity of numbers differs between the start and end, it will always prioritize the end value(s). The pt parameter is optional - it's for a PropTween that will be appended to the end of the linked list and is typically for actually setting the value after all of the elements have been updated (with array.join("")).
  _blobDif = function _blobDif(start, end, filter, pt) {
    var a = [],
        charIndex = 0,
        s = "",
        color = 0,
        startNums,
        endNums,
        num,
        i,
        l,
        nonNumbers,
        currentNum;
    a.start = start;
    a.end = end;
    start = a[0] = start + ""; //ensure values are strings

    end = a[1] = end + "";

    if (filter) {
      filter(a); //pass an array with the starting and ending values and let the filter do whatever it needs to the values.

      start = a[0];
      end = a[1];
    }

    a.length = 0;
    startNums = start.match(_numbersExp) || [];
    endNums = end.match(_numbersExp) || [];

    if (pt) {
      pt._next = null;
      pt.blob = 1;
      a._firstPT = a._applyPT = pt; //apply last in the linked list (which means inserting it first)
    }

    l = endNums.length;

    for (i = 0; i < l; i++) {
      currentNum = endNums[i];
      nonNumbers = end.substr(charIndex, end.indexOf(currentNum, charIndex) - charIndex);
      s += nonNumbers || !i ? nonNumbers : ","; //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.

      charIndex += nonNumbers.length;

      if (color) {
        //sense rgba() values and round them.
        color = (color + 1) % 5;
      } else if (nonNumbers.substr(-5) === "rgba(") {
        color = 1;
      }

      if (currentNum === startNums[i] || startNums.length <= i) {
        s += currentNum;
      } else {
        if (s) {
          a.push(s);
          s = "";
        }

        num = parseFloat(startNums[i]);
        a.push(num);
        a._firstPT = {
          _next: a._firstPT,
          t: a,
          p: a.length - 1,
          s: num,
          c: (currentNum.charAt(1) === "=" ? parseInt(currentNum.charAt(0) + "1", 10) * parseFloat(currentNum.substr(2)) : parseFloat(currentNum) - num) || 0,
          f: 0,
          m: color && color < 4 ? Math.round : _blobRound
        }; //limiting to 3 decimal places and casting as a string can really help performance when array.join() is called!
        //note: we don't set _prev because we'll never need to remove individual PropTweens from this list.
      }

      charIndex += currentNum.length;
    }

    s += end.substr(charIndex);

    if (s) {
      a.push(s);
    }

    a.setRatio = _setRatio;

    if (_relExp.test(end)) {
      //if the end string contains relative values, delete it so that on the final render (in _setRatio()), we don't actually set it to the string with += or -= characters (forces it to use the calculated value).
      a.end = null;
    }

    return a;
  },
      //note: "funcParam" is only necessary for function-based getters/setters that require an extra parameter like getAttribute("width") and setAttribute("width", value). In this example, funcParam would be "width". Used by AttrPlugin for example.
  _addPropTween = function _addPropTween(target, prop, start, end, overwriteProp, mod, funcParam, stringFilter, index) {
    if (typeof end === "function") {
      end = end(index || 0, target);
    }

    var type = _typeof(target[prop]),
        getterName = type !== "function" ? "" : prop.indexOf("set") || typeof target["get" + prop.substr(3)] !== "function" ? prop : "get" + prop.substr(3),
        s = start !== "get" ? start : !getterName ? target[prop] : funcParam ? target[getterName](funcParam) : target[getterName](),
        isRelative = typeof end === "string" && end.charAt(1) === "=",
        pt = {
      t: target,
      p: prop,
      s: s,
      f: type === "function",
      pg: 0,
      n: overwriteProp || prop,
      m: !mod ? 0 : typeof mod === "function" ? mod : Math.round,
      pr: 0,
      c: isRelative ? parseInt(end.charAt(0) + "1", 10) * parseFloat(end.substr(2)) : parseFloat(end) - s || 0
    },
        blob;

    if (typeof s !== "number" || typeof end !== "number" && !isRelative) {
      if (funcParam || isNaN(s) || !isRelative && isNaN(end) || typeof s === "boolean" || typeof end === "boolean") {
        //a blob (string that has multiple numbers in it)
        pt.fp = funcParam;
        blob = _blobDif(s, isRelative ? parseFloat(pt.s) + pt.c + (pt.s + "").replace(/[0-9\-\.]/g, "") : end, stringFilter || TweenLite.defaultStringFilter, pt);
        pt = {
          t: blob,
          p: "setRatio",
          s: 0,
          c: 1,
          f: 2,
          pg: 0,
          n: overwriteProp || prop,
          pr: 0,
          m: 0
        }; //"2" indicates it's a Blob property tween. Needed for RoundPropsPlugin for example.
      } else {
        pt.s = parseFloat(s);

        if (!isRelative) {
          pt.c = parseFloat(end) - pt.s || 0;
        }
      }
    }

    if (pt.c) {
      //only add it to the linked list if there's a change.
      if (pt._next = this._firstPT) {
        pt._next._prev = pt;
      }

      this._firstPT = pt;
      return pt;
    }
  },
      _internals = TweenLite._internals = {
    isArray: _isArray,
    isSelector: _isSelector,
    lazyTweens: _lazyTweens,
    blobDif: _blobDif
  },
      //gives us a way to expose certain private values to other GreenSock classes without contaminating tha main TweenLite object.
  _plugins = TweenLite._plugins = {},
      _tweenLookup = _internals.tweenLookup = {},
      _tweenLookupNum = 0,
      _reservedProps = _internals.reservedProps = {
    ease: 1,
    delay: 1,
    overwrite: 1,
    onComplete: 1,
    onCompleteParams: 1,
    onCompleteScope: 1,
    useFrames: 1,
    runBackwards: 1,
    startAt: 1,
    onUpdate: 1,
    onUpdateParams: 1,
    onUpdateScope: 1,
    onStart: 1,
    onStartParams: 1,
    onStartScope: 1,
    onReverseComplete: 1,
    onReverseCompleteParams: 1,
    onReverseCompleteScope: 1,
    onRepeat: 1,
    onRepeatParams: 1,
    onRepeatScope: 1,
    easeParams: 1,
    yoyo: 1,
    immediateRender: 1,
    repeat: 1,
    repeatDelay: 1,
    data: 1,
    paused: 1,
    reversed: 1,
    autoCSS: 1,
    lazy: 1,
    onOverwrite: 1,
    callbackScope: 1,
    stringFilter: 1,
    id: 1,
    yoyoEase: 1,
    stagger: 1
  },
      _overwriteLookup = {
    none: 0,
    all: 1,
    auto: 2,
    concurrent: 3,
    allOnStart: 4,
    preexisting: 5,
    "true": 1,
    "false": 0
  },
      _rootFramesTimeline = Animation._rootFramesTimeline = new SimpleTimeline(),
      _rootTimeline = Animation._rootTimeline = new SimpleTimeline(),
      _nextGCFrame = 30,
      _lazyRender = _internals.lazyRender = function () {
    var l = _lazyTweens.length,
        i,
        tween;
    _lazyLookup = {};

    for (i = 0; i < l; i++) {
      tween = _lazyTweens[i];

      if (tween && tween._lazy !== false) {
        tween.render(tween._lazy[0], tween._lazy[1], true);
        tween._lazy = false;
      }
    }

    _lazyTweens.length = 0;
  };

  _rootTimeline._startTime = _ticker.time;
  _rootFramesTimeline._startTime = _ticker.frame;
  _rootTimeline._active = _rootFramesTimeline._active = true;
  setTimeout(_lazyRender, 1); //on some mobile devices, there isn't a "tick" before code runs which means any lazy renders wouldn't run before the next official "tick".

  Animation._updateRoot = TweenLite.render = function () {
    var i, a, p;

    if (_lazyTweens.length) {
      //if code is run outside of the requestAnimationFrame loop, there may be tweens queued AFTER the engine refreshed, so we need to ensure any pending renders occur before we refresh again.
      _lazyRender();
    }

    _rootTimeline.render((_ticker.time - _rootTimeline._startTime) * _rootTimeline._timeScale, false, false);

    _rootFramesTimeline.render((_ticker.frame - _rootFramesTimeline._startTime) * _rootFramesTimeline._timeScale, false, false);

    if (_lazyTweens.length) {
      _lazyRender();
    }

    if (_ticker.frame >= _nextGCFrame) {
      //dump garbage every 120 frames or whatever the user sets TweenLite.autoSleep to
      _nextGCFrame = _ticker.frame + (parseInt(TweenLite.autoSleep, 10) || 120);

      for (p in _tweenLookup) {
        a = _tweenLookup[p].tweens;
        i = a.length;

        while (--i > -1) {
          if (a[i]._gc) {
            a.splice(i, 1);
          }
        }

        if (a.length === 0) {
          delete _tweenLookup[p];
        }
      } //if there are no more tweens in the root timelines, or if they're all paused, make the _timer sleep to reduce load on the CPU slightly


      p = _rootTimeline._first;
      if (!p || p._paused) if (TweenLite.autoSleep && !_rootFramesTimeline._first && _ticker._listeners.tick.length === 1) {
        while (p && p._paused) {
          p = p._next;
        }

        if (!p) {
          _ticker.sleep();
        }
      }
    }
  };

  _ticker.addEventListener("tick", Animation._updateRoot);

  var _register = function _register(target, tween, scrub) {
    var id = target._gsTweenID,
        a,
        i;

    if (!_tweenLookup[id || (target._gsTweenID = id = "t" + _tweenLookupNum++)]) {
      _tweenLookup[id] = {
        target: target,
        tweens: []
      };
    }

    if (tween) {
      a = _tweenLookup[id].tweens;
      a[i = a.length] = tween;

      if (scrub) {
        while (--i > -1) {
          if (a[i] === tween) {
            a.splice(i, 1);
          }
        }
      }
    }

    return _tweenLookup[id].tweens;
  },
      _onOverwrite = function _onOverwrite(overwrittenTween, overwritingTween, target, killedProps) {
    var func = overwrittenTween.vars.onOverwrite,
        r1,
        r2;

    if (func) {
      r1 = func(overwrittenTween, overwritingTween, target, killedProps);
    }

    func = TweenLite.onOverwrite;

    if (func) {
      r2 = func(overwrittenTween, overwritingTween, target, killedProps);
    }

    return r1 !== false && r2 !== false;
  },
      _applyOverwrite = function _applyOverwrite(target, tween, props, mode, siblings) {
    var i, changed, curTween, l;

    if (mode === 1 || mode >= 4) {
      l = siblings.length;

      for (i = 0; i < l; i++) {
        if ((curTween = siblings[i]) !== tween) {
          if (!curTween._gc) {
            if (curTween._kill(null, target, tween)) {
              changed = true;
            }
          }
        } else if (mode === 5) {
          break;
        }
      }

      return changed;
    } //NOTE: Add tiny amount to overcome floating point errors that can cause the startTime to be VERY slightly off (when a tween's time() is set for example)


    var startTime = tween._startTime + _tinyNum,
        overlaps = [],
        oCount = 0,
        zeroDur = tween._duration === 0,
        globalStart;
    i = siblings.length;

    while (--i > -1) {
      if ((curTween = siblings[i]) === tween || curTween._gc || curTween._paused) {//ignore
      } else if (curTween._timeline !== tween._timeline) {
        globalStart = globalStart || _checkOverlap(tween, 0, zeroDur);

        if (_checkOverlap(curTween, globalStart, zeroDur) === 0) {
          overlaps[oCount++] = curTween;
        }
      } else if (curTween._startTime <= startTime) if (curTween._startTime + curTween.totalDuration() / curTween._timeScale > startTime) if (!((zeroDur || !curTween._initted) && startTime - curTween._startTime <= _tinyNum * 2)) {
        overlaps[oCount++] = curTween;
      }
    }

    i = oCount;

    while (--i > -1) {
      curTween = overlaps[i];
      l = curTween._firstPT; //we need to discern if there were property tweens originally; if they all get removed in the next line's _kill() call, the tween should be killed. See https://github.com/greensock/GreenSock-JS/issues/278

      if (mode === 2) if (curTween._kill(props, target, tween)) {
        changed = true;
      }

      if (mode !== 2 || !curTween._firstPT && curTween._initted && l) {
        if (mode !== 2 && !_onOverwrite(curTween, tween)) {
          continue;
        }

        if (curTween._enabled(false, false)) {
          //if all property tweens have been overwritten, kill the tween.
          changed = true;
        }
      }
    }

    return changed;
  },
      _checkOverlap = function _checkOverlap(tween, reference, zeroDur) {
    var tl = tween._timeline,
        ts = tl._timeScale,
        t = tween._startTime;

    while (tl._timeline) {
      t += tl._startTime;
      ts *= tl._timeScale;

      if (tl._paused) {
        return -100;
      }

      tl = tl._timeline;
    }

    t /= ts;
    return t > reference ? t - reference : zeroDur && t === reference || !tween._initted && t - reference < 2 * _tinyNum ? _tinyNum : (t += tween.totalDuration() / tween._timeScale / ts) > reference + _tinyNum ? 0 : t - reference - _tinyNum;
  }; //---- TweenLite instance methods -----------------------------------------------------------------------------


  p._init = function () {
    var v = this.vars,
        op = this._overwrittenProps,
        dur = this._duration,
        immediate = !!v.immediateRender,
        ease = v.ease,
        startAt = this._startAt,
        i,
        initPlugins,
        pt,
        p,
        startVars,
        l;

    if (v.startAt) {
      if (startAt) {
        startAt.render(-1, true); //if we've run a startAt previously (when the tween instantiated), we should revert it so that the values re-instantiate correctly particularly for relative tweens. Without this, a TweenLite.fromTo(obj, 1, {x:"+=100"}, {x:"-=100"}), for example, would actually jump to +=200 because the startAt would run twice, doubling the relative change.

        startAt.kill();
      }

      startVars = {};

      for (p in v.startAt) {
        //copy the properties/values into a new object to avoid collisions, like var to = {x:0}, from = {x:500}; timeline.fromTo(e, 1, from, to).fromTo(e, 1, to, from);
        startVars[p] = v.startAt[p];
      }

      startVars.data = "isStart";
      startVars.overwrite = false;
      startVars.immediateRender = true;
      startVars.lazy = immediate && v.lazy !== false;
      startVars.startAt = startVars.delay = null; //no nesting of startAt objects allowed (otherwise it could cause an infinite loop).

      startVars.onUpdate = v.onUpdate;
      startVars.onUpdateParams = v.onUpdateParams;
      startVars.onUpdateScope = v.onUpdateScope || v.callbackScope || this;
      this._startAt = TweenLite.to(this.target || {}, 0, startVars);

      if (immediate) {
        if (this._time > 0) {
          this._startAt = null; //tweens that render immediately (like most from() and fromTo() tweens) shouldn't revert when their parent timeline's playhead goes backward past the startTime because the initial render could have happened anytime and it shouldn't be directly correlated to this tween's startTime. Imagine setting up a complex animation where the beginning states of various objects are rendered immediately but the tween doesn't happen for quite some time - if we revert to the starting values as soon as the playhead goes backward past the tween's startTime, it will throw things off visually. Reversion should only happen in TimelineLite/Max instances where immediateRender was false (which is the default in the convenience methods like from()).
        } else if (dur !== 0) {
          return; //we skip initialization here so that overwriting doesn't occur until the tween actually begins. Otherwise, if you create several immediateRender:true tweens of the same target/properties to drop into a TimelineLite or TimelineMax, the last one created would overwrite the first ones because they didn't get placed into the timeline yet before the first render occurs and kicks in overwriting.
        }
      }
    } else if (v.runBackwards && dur !== 0) {
      //from() tweens must be handled uniquely: their beginning values must be rendered but we don't want overwriting to occur yet (when time is still 0). Wait until the tween actually begins before doing all the routines like overwriting. At that time, we should render at the END of the tween to ensure that things initialize correctly (remember, from() tweens go backwards)
      if (startAt) {
        startAt.render(-1, true);
        startAt.kill();
        this._startAt = null;
      } else {
        if (this._time !== 0) {
          //in rare cases (like if a from() tween runs and then is invalidate()-ed), immediateRender could be true but the initial forced-render gets skipped, so there's no need to force the render in this context when the _time is greater than 0
          immediate = false;
        }

        pt = {};

        for (p in v) {
          //copy props into a new object and skip any reserved props, otherwise onComplete or onUpdate or onStart could fire. We should, however, permit autoCSS to go through.
          if (!_reservedProps[p] || p === "autoCSS") {
            pt[p] = v[p];
          }
        }

        pt.overwrite = 0;
        pt.data = "isFromStart"; //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.

        pt.lazy = immediate && v.lazy !== false;
        pt.immediateRender = immediate; //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)

        this._startAt = TweenLite.to(this.target, 0, pt);

        if (!immediate) {
          this._startAt._init(); //ensures that the initial values are recorded


          this._startAt._enabled(false); //no need to have the tween render on the next cycle. Disable it because we'll always manually control the renders of the _startAt tween.


          if (this.vars.immediateRender) {
            this._startAt = null;
          }
        } else if (this._time === 0) {
          return;
        }
      }
    }

    this._ease = ease = !ease ? TweenLite.defaultEase : ease instanceof Ease ? ease : typeof ease === "function" ? new Ease(ease, v.easeParams) : _easeMap[ease] || TweenLite.defaultEase;

    if (v.easeParams instanceof Array && ease.config) {
      this._ease = ease.config.apply(ease, v.easeParams);
    }

    this._easeType = this._ease._type;
    this._easePower = this._ease._power;
    this._firstPT = null;

    if (this._targets) {
      l = this._targets.length;

      for (i = 0; i < l; i++) {
        if (this._initProps(this._targets[i], this._propLookup[i] = {}, this._siblings[i], op ? op[i] : null, i)) {
          initPlugins = true;
        }
      }
    } else {
      initPlugins = this._initProps(this.target, this._propLookup, this._siblings, op, 0);
    }

    if (initPlugins) {
      TweenLite._onPluginEvent("_onInitAllProps", this); //reorders the array in order of priority. Uses a static TweenPlugin method in order to minimize file size in TweenLite

    }

    if (op) if (!this._firstPT) if (typeof this.target !== "function") {
      //if all tweening properties have been overwritten, kill the tween. If the target is a function, it's probably a delayedCall so let it live.
      this._enabled(false, false);
    }

    if (v.runBackwards) {
      pt = this._firstPT;

      while (pt) {
        pt.s += pt.c;
        pt.c = -pt.c;
        pt = pt._next;
      }
    }

    this._onUpdate = v.onUpdate;
    this._initted = true;
  };

  p._initProps = function (target, propLookup, siblings, overwrittenProps, index) {
    var p, i, initPlugins, plugin, pt, v;

    if (target == null) {
      return false;
    }

    if (_lazyLookup[target._gsTweenID]) {
      _lazyRender(); //if other tweens of the same target have recently initted but haven't rendered yet, we've got to force the render so that the starting values are correct (imagine populating a timeline with a bunch of sequential tweens and then jumping to the end)

    }

    if (!this.vars.css) if (target.style) if (target !== window && target.nodeType) if (_plugins.css) if (this.vars.autoCSS !== false) {
      //it's so common to use TweenLite/Max to animate the css of DOM elements, we assume that if the target is a DOM element, that's what is intended (a convenience so that users don't have to wrap things in css:{}, although we still recommend it for a slight performance boost and better specificity). Note: we cannot check "nodeType" on the window inside an iframe.
      _autoCSS(this.vars, target);
    }

    for (p in this.vars) {
      v = this.vars[p];

      if (_reservedProps[p]) {
        if (v) if (v instanceof Array || v.push && _isArray(v)) if (v.join("").indexOf("{self}") !== -1) {
          this.vars[p] = v = this._swapSelfInParams(v, this);
        }
      } else if (_plugins[p] && (plugin = new _plugins[p]())._onInitTween(target, this.vars[p], this, index)) {
        //t - target 		[object]
        //p - property 		[string]
        //s - start			[number]
        //c - change		[number]
        //f - isFunction	[boolean]
        //n - name			[string]
        //pg - isPlugin 	[boolean]
        //pr - priority		[number]
        //m - mod           [function | 0]
        this._firstPT = pt = {
          _next: this._firstPT,
          t: plugin,
          p: "setRatio",
          s: 0,
          c: 1,
          f: 1,
          n: p,
          pg: 1,
          pr: plugin._priority,
          m: 0
        };
        i = plugin._overwriteProps.length;

        while (--i > -1) {
          propLookup[plugin._overwriteProps[i]] = this._firstPT;
        }

        if (plugin._priority || plugin._onInitAllProps) {
          initPlugins = true;
        }

        if (plugin._onDisable || plugin._onEnable) {
          this._notifyPluginsOfEnabled = true;
        }

        if (pt._next) {
          pt._next._prev = pt;
        }
      } else {
        propLookup[p] = _addPropTween.call(this, target, p, "get", v, p, 0, null, this.vars.stringFilter, index);
      }
    }

    if (overwrittenProps) if (this._kill(overwrittenProps, target)) {
      //another tween may have tried to overwrite properties of this tween before init() was called (like if two tweens start at the same time, the one created second will run first)
      return this._initProps(target, propLookup, siblings, overwrittenProps, index);
    }
    if (this._overwrite > 1) if (this._firstPT) if (siblings.length > 1) if (_applyOverwrite(target, this, propLookup, this._overwrite, siblings)) {
      this._kill(propLookup, target);

      return this._initProps(target, propLookup, siblings, overwrittenProps, index);
    }
    if (this._firstPT) if (this.vars.lazy !== false && this._duration || this.vars.lazy && !this._duration) {
      //zero duration tweens don't lazy render by default; everything else does.
      _lazyLookup[target._gsTweenID] = true;
    }
    return initPlugins;
  };

  p.render = function (time, suppressEvents, force) {
    var self = this,
        prevTime = self._time,
        duration = self._duration,
        prevRawPrevTime = self._rawPrevTime,
        isComplete,
        callback,
        pt,
        rawPrevTime;

    if (time >= duration - _tinyNum && time >= 0) {
      //to work around occasional floating point math artifacts.
      self._totalTime = self._time = duration;
      self.ratio = self._ease._calcEnd ? self._ease.getRatio(1) : 1;

      if (!self._reversed) {
        isComplete = true;
        callback = "onComplete";
        force = force || self._timeline.autoRemoveChildren; //otherwise, if the animation is unpaused/activated after it's already finished, it doesn't get removed from the parent timeline.
      }

      if (duration === 0) if (self._initted || !self.vars.lazy || force) {
        //zero-duration tweens are tricky because we must discern the momentum/direction of time in order to determine whether the starting values should be rendered or the ending values. If the "playhead" of its timeline goes past the zero-duration tween in the forward direction or lands directly on it, the end values should be rendered, but if the timeline's "playhead" moves past it in the backward direction (from a postitive time to a negative time), the starting values must be rendered.
        if (self._startTime === self._timeline._duration) {
          //if a zero-duration tween is at the VERY end of a timeline and that timeline renders at its end, it will typically add a tiny bit of cushion to the render time to prevent rounding errors from getting in the way of tweens rendering their VERY end. If we then reverse() that timeline, the zero-duration tween will trigger its onReverseComplete even though technically the playhead didn't pass over it again. It's a very specific edge case we must accommodate.
          time = 0;
        }

        if (prevRawPrevTime < 0 || time <= 0 && time >= -_tinyNum || prevRawPrevTime === _tinyNum && self.data !== "isPause") if (prevRawPrevTime !== time) {
          //note: when this.data is "isPause", it's a callback added by addPause() on a timeline that we should not be triggered when LEAVING its exact start time. In other words, tl.addPause(1).play(1) shouldn't pause.
          force = true;

          if (prevRawPrevTime > _tinyNum) {
            callback = "onReverseComplete";
          }
        }
        self._rawPrevTime = rawPrevTime = !suppressEvents || time || prevRawPrevTime === time ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
      }
    } else if (time < _tinyNum) {
      //to work around occasional floating point math artifacts, round super small values to 0.
      self._totalTime = self._time = 0;
      self.ratio = self._ease._calcEnd ? self._ease.getRatio(0) : 0;

      if (prevTime !== 0 || duration === 0 && prevRawPrevTime > 0) {
        callback = "onReverseComplete";
        isComplete = self._reversed;
      }

      if (time > -_tinyNum) {
        time = 0;
      } else if (time < 0) {
        self._active = false;
        if (duration === 0) if (self._initted || !self.vars.lazy || force) {
          //zero-duration tweens are tricky because we must discern the momentum/direction of time in order to determine whether the starting values should be rendered or the ending values. If the "playhead" of its timeline goes past the zero-duration tween in the forward direction or lands directly on it, the end values should be rendered, but if the timeline's "playhead" moves past it in the backward direction (from a postitive time to a negative time), the starting values must be rendered.
          if (prevRawPrevTime >= 0 && !(prevRawPrevTime === _tinyNum && self.data === "isPause")) {
            force = true;
          }

          self._rawPrevTime = rawPrevTime = !suppressEvents || time || prevRawPrevTime === time ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
        }
      }

      if (!self._initted || self._startAt && self._startAt.progress()) {
        //if we render the very beginning (time == 0) of a fromTo(), we must force the render (normal tweens wouldn't need to render at a time of 0 when the prevTime was also 0). This is also mandatory to make sure overwriting kicks in immediately. Also, we check progress() because if startAt has already rendered at its end, we should force a render at its beginning. Otherwise, if you put the playhead directly on top of where a fromTo({immediateRender:false}) starts, and then move it backwards, the from() won't revert its values.
        force = true;
      }
    } else {
      self._totalTime = self._time = time;

      if (self._easeType) {
        var r = time / duration,
            type = self._easeType,
            pow = self._easePower;

        if (type === 1 || type === 3 && r >= 0.5) {
          r = 1 - r;
        }

        if (type === 3) {
          r *= 2;
        }

        if (pow === 1) {
          r *= r;
        } else if (pow === 2) {
          r *= r * r;
        } else if (pow === 3) {
          r *= r * r * r;
        } else if (pow === 4) {
          r *= r * r * r * r;
        }

        self.ratio = type === 1 ? 1 - r : type === 2 ? r : time / duration < 0.5 ? r / 2 : 1 - r / 2;
      } else {
        self.ratio = self._ease.getRatio(time / duration);
      }
    }

    if (self._time === prevTime && !force) {
      return;
    } else if (!self._initted) {
      self._init();

      if (!self._initted || self._gc) {
        //immediateRender tweens typically won't initialize until the playhead advances (_time is greater than 0) in order to ensure that overwriting occurs properly. Also, if all of the tweening properties have been overwritten (which would cause _gc to be true, as set in _init()), we shouldn't continue otherwise an onStart callback could be called for example.
        return;
      } else if (!force && self._firstPT && (self.vars.lazy !== false && self._duration || self.vars.lazy && !self._duration)) {
        self._time = self._totalTime = prevTime;
        self._rawPrevTime = prevRawPrevTime;

        _lazyTweens.push(self);

        self._lazy = [time, suppressEvents];
        return;
      } //_ease is initially set to defaultEase, so now that init() has run, _ease is set properly and we need to recalculate the ratio. Overall this is faster than using conditional logic earlier in the method to avoid having to set ratio twice because we only init() once but renderTime() gets called VERY frequently.


      if (self._time && !isComplete) {
        self.ratio = self._ease.getRatio(self._time / duration);
      } else if (isComplete && self._ease._calcEnd) {
        self.ratio = self._ease.getRatio(self._time === 0 ? 0 : 1);
      }
    }

    if (self._lazy !== false) {
      //in case a lazy render is pending, we should flush it because the new render is occurring now (imagine a lazy tween instantiating and then immediately the user calls tween.seek(tween.duration()), skipping to the end - the end render would be forced, and then if we didn't flush the lazy render, it'd fire AFTER the seek(), rendering it at the wrong time.
      self._lazy = false;
    }

    if (!self._active) if (!self._paused && self._time !== prevTime && time >= 0) {
      self._active = true; //so that if the user renders a tween (as opposed to the timeline rendering it), the timeline is forced to re-render and align it with the proper time/frame on the next rendering cycle. Maybe the tween already finished but the user manually re-renders it as halfway done.
    }

    if (prevTime === 0) {
      if (self._startAt) {
        if (time >= 0) {
          self._startAt.render(time, true, force);
        } else if (!callback) {
          callback = "_dummyGS"; //if no callback is defined, use a dummy value just so that the condition at the end evaluates as true because _startAt should render AFTER the normal render loop when the time is negative. We could handle this in a more intuitive way, of course, but the render loop is the MOST important thing to optimize, so this technique allows us to avoid adding extra conditional logic in a high-frequency area.
        }
      }

      if (self.vars.onStart) if (self._time !== 0 || duration === 0) if (!suppressEvents) {
        self._callback("onStart");
      }
    }

    pt = self._firstPT;

    while (pt) {
      if (pt.f) {
        pt.t[pt.p](pt.c * self.ratio + pt.s);
      } else {
        pt.t[pt.p] = pt.c * self.ratio + pt.s;
      }

      pt = pt._next;
    }

    if (self._onUpdate) {
      if (time < 0) if (self._startAt && time !== -0.0001) {
        //if the tween is positioned at the VERY beginning (_startTime 0) of its parent timeline, it's illegal for the playhead to go back further, so we should not render the recorded startAt values.
        self._startAt.render(time, true, force); //note: for performance reasons, we tuck this conditional logic inside less traveled areas (most tweens don't have an onUpdate). We'd just have it at the end before the onComplete, but the values should be updated before any onUpdate is called, so we ALSO put it here and then if it's not called, we do so later near the onComplete.

      }
      if (!suppressEvents) if (self._time !== prevTime || isComplete || force) {
        self._callback("onUpdate");
      }
    }

    if (callback) if (!self._gc || force) {
      //check _gc because there's a chance that kill() could be called in an onUpdate
      if (time < 0 && self._startAt && !self._onUpdate && time !== -0.0001) {
        //-0.0001 is a special value that we use when looping back to the beginning of a repeated TimelineMax, in which case we shouldn't render the _startAt values.
        self._startAt.render(time, true, force);
      }

      if (isComplete) {
        if (self._timeline.autoRemoveChildren) {
          self._enabled(false, false);
        }

        self._active = false;
      }

      if (!suppressEvents && self.vars[callback]) {
        self._callback(callback);
      }

      if (duration === 0 && self._rawPrevTime === _tinyNum && rawPrevTime !== _tinyNum) {
        //the onComplete or onReverseComplete could trigger movement of the playhead and for zero-duration tweens (which must discern direction) that land directly back on their start time, we don't want to fire again on the next render. Think of several addPause()'s in a timeline that forces the playhead to a certain spot, but what if it's already paused and another tween is tweening the "time" of the timeline? Each time it moves [forward] past that spot, it would move back, and since suppressEvents is true, it'd reset _rawPrevTime to _tinyNum so that when it begins again, the callback would fire (so ultimately it could bounce back and forth during that tween). Again, this is a very uncommon scenario, but possible nonetheless.
        self._rawPrevTime = 0;
      }
    }
  };

  p._kill = function (vars, target, overwritingTween) {
    if (vars === "all") {
      vars = null;
    }

    if (vars == null) if (target == null || target === this.target) {
      this._lazy = false;
      return this._enabled(false, false);
    }
    target = typeof target !== "string" ? target || this._targets || this.target : TweenLite.selector(target) || target;
    var simultaneousOverwrite = overwritingTween && this._time && overwritingTween._startTime === this._startTime && this._timeline === overwritingTween._timeline,
        firstPT = this._firstPT,
        i,
        overwrittenProps,
        p,
        pt,
        propLookup,
        changed,
        killProps,
        record,
        killed;

    if ((_isArray(target) || _isSelector(target)) && typeof target[0] !== "number") {
      i = target.length;

      while (--i > -1) {
        if (this._kill(vars, target[i], overwritingTween)) {
          changed = true;
        }
      }
    } else {
      if (this._targets) {
        i = this._targets.length;

        while (--i > -1) {
          if (target === this._targets[i]) {
            propLookup = this._propLookup[i] || {};
            this._overwrittenProps = this._overwrittenProps || [];
            overwrittenProps = this._overwrittenProps[i] = vars ? this._overwrittenProps[i] || {} : "all";
            break;
          }
        }
      } else if (target !== this.target) {
        return false;
      } else {
        propLookup = this._propLookup;
        overwrittenProps = this._overwrittenProps = vars ? this._overwrittenProps || {} : "all";
      }

      if (propLookup) {
        killProps = vars || propLookup;
        record = vars !== overwrittenProps && overwrittenProps !== "all" && vars !== propLookup && (_typeof(vars) !== "object" || !vars._tempKill); //_tempKill is a super-secret way to delete a particular tweening property but NOT have it remembered as an official overwritten property (like in BezierPlugin)

        if (overwritingTween && (TweenLite.onOverwrite || this.vars.onOverwrite)) {
          for (p in killProps) {
            if (propLookup[p]) {
              if (!killed) {
                killed = [];
              }

              killed.push(p);
            }
          }

          if ((killed || !vars) && !_onOverwrite(this, overwritingTween, target, killed)) {
            //if the onOverwrite returned false, that means the user wants to override the overwriting (cancel it).
            return false;
          }
        }

        for (p in killProps) {
          if (pt = propLookup[p]) {
            if (simultaneousOverwrite) {
              //if another tween overwrites this one and they both start at exactly the same time, yet this tween has already rendered once (for example, at 0.001) because it's first in the queue, we should revert the values to where they were at 0 so that the starting values aren't contaminated on the overwriting tween.
              if (pt.f) {
                pt.t[pt.p](pt.s);
              } else {
                pt.t[pt.p] = pt.s;
              }

              changed = true;
            }

            if (pt.pg && pt.t._kill(killProps)) {
              changed = true; //some plugins need to be notified so they can perform cleanup tasks first
            }

            if (!pt.pg || pt.t._overwriteProps.length === 0) {
              if (pt._prev) {
                pt._prev._next = pt._next;
              } else if (pt === this._firstPT) {
                this._firstPT = pt._next;
              }

              if (pt._next) {
                pt._next._prev = pt._prev;
              }

              pt._next = pt._prev = null;
            }

            delete propLookup[p];
          }

          if (record) {
            overwrittenProps[p] = 1;
          }
        }

        if (!this._firstPT && this._initted && firstPT) {
          //if all tweening properties are killed, kill the tween. Without this line, if there's a tween with multiple targets and then you killTweensOf() each target individually, the tween would technically still remain active and fire its onComplete even though there aren't any more properties tweening.
          this._enabled(false, false);
        }
      }
    }

    return changed;
  };

  p.invalidate = function () {
    if (this._notifyPluginsOfEnabled) {
      TweenLite._onPluginEvent("_onDisable", this);
    }

    var t = this._time;
    this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null;
    this._notifyPluginsOfEnabled = this._active = this._lazy = false;
    this._propLookup = this._targets ? {} : [];
    Animation.prototype.invalidate.call(this);

    if (this.vars.immediateRender) {
      this._time = -_tinyNum; //forces a render without having to set the render() "force" parameter to true because we want to allow lazying by default (using the "force" parameter always forces an immediate full render)

      this.render(t, false, this.vars.lazy !== false);
    }

    return this;
  };

  p._enabled = function (enabled, ignoreTimeline) {
    if (!_tickerActive) {
      _ticker.wake();
    }

    if (enabled && this._gc) {
      var targets = this._targets,
          i;

      if (targets) {
        i = targets.length;

        while (--i > -1) {
          this._siblings[i] = _register(targets[i], this, true);
        }
      } else {
        this._siblings = _register(this.target, this, true);
      }
    }

    Animation.prototype._enabled.call(this, enabled, ignoreTimeline);

    if (this._notifyPluginsOfEnabled) if (this._firstPT) {
      return TweenLite._onPluginEvent(enabled ? "_onEnable" : "_onDisable", this);
    }
    return false;
  }; //----TweenLite static methods -----------------------------------------------------


  TweenLite.to = function (target, duration, vars) {
    return new TweenLite(target, duration, vars);
  };

  TweenLite.from = function (target, duration, vars) {
    vars.runBackwards = true;
    vars.immediateRender = vars.immediateRender != false;
    return new TweenLite(target, duration, vars);
  };

  TweenLite.fromTo = function (target, duration, fromVars, toVars) {
    toVars.startAt = fromVars;
    toVars.immediateRender = toVars.immediateRender != false && fromVars.immediateRender != false;
    return new TweenLite(target, duration, toVars);
  };

  TweenLite.delayedCall = function (delay, callback, params, scope, useFrames) {
    return new TweenLite(callback, 0, {
      delay: delay,
      onComplete: callback,
      onCompleteParams: params,
      callbackScope: scope,
      onReverseComplete: callback,
      onReverseCompleteParams: params,
      immediateRender: false,
      lazy: false,
      useFrames: useFrames,
      overwrite: 0
    });
  };

  TweenLite.set = function (target, vars) {
    return new TweenLite(target, 0, vars);
  };

  TweenLite.getTweensOf = function (target, onlyActive) {
    if (target == null) {
      return [];
    }

    target = typeof target !== "string" ? target : TweenLite.selector(target) || target;
    var i, a, j, t;

    if ((_isArray(target) || _isSelector(target)) && typeof target[0] !== "number") {
      i = target.length;
      a = [];

      while (--i > -1) {
        a = a.concat(TweenLite.getTweensOf(target[i], onlyActive));
      }

      i = a.length; //now get rid of any duplicates (tweens of arrays of objects could cause duplicates)

      while (--i > -1) {
        t = a[i];
        j = i;

        while (--j > -1) {
          if (t === a[j]) {
            a.splice(i, 1);
          }
        }
      }
    } else if (target._gsTweenID) {
      a = _register(target).concat();
      i = a.length;

      while (--i > -1) {
        if (a[i]._gc || onlyActive && !a[i].isActive()) {
          a.splice(i, 1);
        }
      }
    }

    return a || [];
  };

  TweenLite.killTweensOf = TweenLite.killDelayedCallsTo = function (target, onlyActive, vars) {
    if (_typeof(onlyActive) === "object") {
      vars = onlyActive; //for backwards compatibility (before "onlyActive" parameter was inserted)

      onlyActive = false;
    }

    var a = TweenLite.getTweensOf(target, onlyActive),
        i = a.length;

    while (--i > -1) {
      a[i]._kill(vars, target);
    }
  };
  /*
   * ----------------------------------------------------------------
   * TweenPlugin   (could easily be split out as a separate file/class, but included for ease of use (so that people don't need to include another script call before loading plugins which is easy to forget)
   * ----------------------------------------------------------------
   */


  var TweenPlugin = _class("plugins.TweenPlugin", function (props, priority) {
    this._overwriteProps = (props || "").split(",");
    this._propName = this._overwriteProps[0];
    this._priority = priority || 0;
    this._super = TweenPlugin.prototype;
  }, true);

  p = TweenPlugin.prototype;
  TweenPlugin.version = "1.19.0";
  TweenPlugin.API = 2;
  p._firstPT = null;
  p._addTween = _addPropTween;
  p.setRatio = _setRatio;

  p._kill = function (lookup) {
    var a = this._overwriteProps,
        pt = this._firstPT,
        i;

    if (lookup[this._propName] != null) {
      this._overwriteProps = [];
    } else {
      i = a.length;

      while (--i > -1) {
        if (lookup[a[i]] != null) {
          a.splice(i, 1);
        }
      }
    }

    while (pt) {
      if (lookup[pt.n] != null) {
        if (pt._next) {
          pt._next._prev = pt._prev;
        }

        if (pt._prev) {
          pt._prev._next = pt._next;
          pt._prev = null;
        } else if (this._firstPT === pt) {
          this._firstPT = pt._next;
        }
      }

      pt = pt._next;
    }

    return false;
  };

  p._mod = p._roundProps = function (lookup) {
    var pt = this._firstPT,
        val;

    while (pt) {
      val = lookup[this._propName] || pt.n != null && lookup[pt.n.split(this._propName + "_").join("")];

      if (val && typeof val === "function") {
        //some properties that are very plugin-specific add a prefix named after the _propName plus an underscore, so we need to ignore that extra stuff here.
        if (pt.f === 2) {
          pt.t._applyPT.m = val;
        } else {
          pt.m = val;
        }
      }

      pt = pt._next;
    }
  };

  TweenLite._onPluginEvent = function (type, tween) {
    var pt = tween._firstPT,
        changed,
        pt2,
        first,
        last,
        next;

    if (type === "_onInitAllProps") {
      //sorts the PropTween linked list in order of priority because some plugins need to render earlier/later than others, like MotionBlurPlugin applies its effects after all x/y/alpha tweens have rendered on each frame.
      while (pt) {
        next = pt._next;
        pt2 = first;

        while (pt2 && pt2.pr > pt.pr) {
          pt2 = pt2._next;
        }

        if (pt._prev = pt2 ? pt2._prev : last) {
          pt._prev._next = pt;
        } else {
          first = pt;
        }

        if (pt._next = pt2) {
          pt2._prev = pt;
        } else {
          last = pt;
        }

        pt = next;
      }

      pt = tween._firstPT = first;
    }

    while (pt) {
      if (pt.pg) if (typeof pt.t[type] === "function") if (pt.t[type]()) {
        changed = true;
      }
      pt = pt._next;
    }

    return changed;
  };

  TweenPlugin.activate = function (plugins) {
    var i = plugins.length;

    while (--i > -1) {
      if (plugins[i].API === TweenPlugin.API) {
        _plugins[new plugins[i]()._propName] = plugins[i];
      }
    }

    return true;
  }; //provides a more concise way to define plugins that have no dependencies besides TweenPlugin and TweenLite, wrapping common boilerplate stuff into one function (added in 1.9.0). You don't NEED to use this to define a plugin - the old way still works and can be useful in certain (rare) situations.


  _gsDefine.plugin = function (config) {
    if (!config || !config.propName || !config.init || !config.API) {
      throw "illegal plugin definition.";
    }

    var propName = config.propName,
        priority = config.priority || 0,
        overwriteProps = config.overwriteProps,
        map = {
      init: "_onInitTween",
      set: "setRatio",
      kill: "_kill",
      round: "_mod",
      mod: "_mod",
      initAll: "_onInitAllProps"
    },
        Plugin = _class("plugins." + propName.charAt(0).toUpperCase() + propName.substr(1) + "Plugin", function () {
      TweenPlugin.call(this, propName, priority);
      this._overwriteProps = overwriteProps || [];
    }, config.global === true),
        p = Plugin.prototype = new TweenPlugin(propName),
        prop;

    p.constructor = Plugin;
    Plugin.API = config.API;

    for (prop in map) {
      if (typeof config[prop] === "function") {
        p[map[prop]] = config[prop];
      }
    }

    Plugin.version = config.version;
    TweenPlugin.activate([Plugin]);
    return Plugin;
  }; //now run through all the dependencies discovered and if any are missing, log that to the console as a warning. This is why it's best to have TweenLite load last - it can check all the dependencies for you.


  a = window._gsQueue;

  if (a) {
    for (i = 0; i < a.length; i++) {
      a[i]();
    }

    for (p in _defLookup) {
      if (!_defLookup[p].func) {
        window.console.log("GSAP encountered missing dependency: " + p);
      }
    }
  }

  _tickerActive = false; //ensures that the first official animation forces a ticker.tick() to update the time when it is instantiated
})(typeof module !== "undefined" && module.exports && typeof global !== "undefined" ? global : void 0 || window, "TweenMax");
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
    A simple jQuery modal (http://github.com/kylefox/jquery-modal)
    Version 0.9.2
*/
!function (o) {
  "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? o(require("jquery"), window, document) : o(jQuery, window, document);
}(function (o, t, i, e) {
  var s = [],
      l = function l() {
    return s.length ? s[s.length - 1] : null;
  },
      n = function n() {
    var o,
        t = !1;

    for (o = s.length - 1; o >= 0; o--) {
      s[o].$blocker && (s[o].$blocker.toggleClass("current", !t).toggleClass("behind", t), t = !0);
    }
  };

  o.modal = function (t, i) {
    var e, n;
    if (this.$body = o("body"), this.options = o.extend({}, o.modal.defaults, i), this.options.doFade = !isNaN(parseInt(this.options.fadeDuration, 10)), this.$blocker = null, this.options.closeExisting) for (; o.modal.isActive();) {
      o.modal.close();
    }
    if (s.push(this), t.is("a")) {
      if (n = t.attr("href"), this.anchor = t, /^#/.test(n)) {
        if (this.$elm = o(n), 1 !== this.$elm.length) return null;
        this.$body.append(this.$elm), this.open();
      } else this.$elm = o("<div>"), this.$body.append(this.$elm), e = function e(o, t) {
        t.elm.remove();
      }, this.showSpinner(), t.trigger(o.modal.AJAX_SEND), o.get(n).done(function (i) {
        if (o.modal.isActive()) {
          t.trigger(o.modal.AJAX_SUCCESS);
          var s = l();
          s.$elm.empty().append(i).on(o.modal.CLOSE, e), s.hideSpinner(), s.open(), t.trigger(o.modal.AJAX_COMPLETE);
        }
      }).fail(function () {
        t.trigger(o.modal.AJAX_FAIL);
        var i = l();
        i.hideSpinner(), s.pop(), t.trigger(o.modal.AJAX_COMPLETE);
      });
    } else this.$elm = t, this.anchor = t, this.$body.append(this.$elm), this.open();
  }, o.modal.prototype = {
    constructor: o.modal,
    open: function open() {
      var t = this;
      this.block(), this.anchor.blur(), this.options.doFade ? setTimeout(function () {
        t.show();
      }, this.options.fadeDuration * this.options.fadeDelay) : this.show(), o(i).off("keydown.modal").on("keydown.modal", function (o) {
        var t = l();
        27 === o.which && t.options.escapeClose && t.close();
      }), this.options.clickClose && this.$blocker.click(function (t) {
        t.target === this && o.modal.close();
      });
    },
    close: function close() {
      s.pop(), this.unblock(), this.hide(), o.modal.isActive() || o(i).off("keydown.modal");
    },
    block: function block() {
      this.$elm.trigger(o.modal.BEFORE_BLOCK, [this._ctx()]), this.$body.css("overflow", "hidden"), this.$blocker = o('<div class="' + this.options.blockerClass + ' blocker current"></div>').appendTo(this.$body), n(), this.options.doFade && this.$blocker.css("opacity", 0).animate({
        opacity: 1
      }, this.options.fadeDuration), this.$elm.trigger(o.modal.BLOCK, [this._ctx()]);
    },
    unblock: function unblock(t) {
      !t && this.options.doFade ? this.$blocker.fadeOut(this.options.fadeDuration, this.unblock.bind(this, !0)) : (this.$blocker.children().appendTo(this.$body), this.$blocker.remove(), this.$blocker = null, n(), o.modal.isActive() || this.$body.css("overflow", ""));
    },
    show: function show() {
      this.$elm.trigger(o.modal.BEFORE_OPEN, [this._ctx()]), this.options.showClose && (this.closeButton = o('<a href="#close-modal" rel="modal:close" class="close-modal ' + this.options.closeClass + '">' + this.options.closeText + "</a>"), this.$elm.append(this.closeButton)), this.$elm.addClass(this.options.modalClass).appendTo(this.$blocker), this.options.doFade ? this.$elm.css({
        opacity: 0,
        display: "inline-block"
      }).animate({
        opacity: 1
      }, this.options.fadeDuration) : this.$elm.css("display", "inline-block"), this.$elm.trigger(o.modal.OPEN, [this._ctx()]);
    },
    hide: function hide() {
      this.$elm.trigger(o.modal.BEFORE_CLOSE, [this._ctx()]), this.closeButton && this.closeButton.remove();
      var t = this;
      this.options.doFade ? this.$elm.fadeOut(this.options.fadeDuration, function () {
        t.$elm.trigger(o.modal.AFTER_CLOSE, [t._ctx()]);
      }) : this.$elm.hide(0, function () {
        t.$elm.trigger(o.modal.AFTER_CLOSE, [t._ctx()]);
      }), this.$elm.trigger(o.modal.CLOSE, [this._ctx()]);
    },
    showSpinner: function showSpinner() {
      this.options.showSpinner && (this.spinner = this.spinner || o('<div class="' + this.options.modalClass + '-spinner"></div>').append(this.options.spinnerHtml), this.$body.append(this.spinner), this.spinner.show());
    },
    hideSpinner: function hideSpinner() {
      this.spinner && this.spinner.remove();
    },
    _ctx: function _ctx() {
      return {
        elm: this.$elm,
        $elm: this.$elm,
        $blocker: this.$blocker,
        options: this.options,
        $anchor: this.anchor
      };
    }
  }, o.modal.close = function (t) {
    if (o.modal.isActive()) {
      t && t.preventDefault();
      var i = l();
      return i.close(), i.$elm;
    }
  }, o.modal.isActive = function () {
    return s.length > 0;
  }, o.modal.getCurrent = l, o.modal.defaults = {
    closeExisting: !0,
    escapeClose: !0,
    clickClose: !0,
    closeText: "Close",
    closeClass: "",
    modalClass: "modal",
    blockerClass: "jquery-modal",
    spinnerHtml: '<div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div>',
    showSpinner: !0,
    showClose: !0,
    fadeDuration: null,
    fadeDelay: 1
  }, o.modal.BEFORE_BLOCK = "modal:before-block", o.modal.BLOCK = "modal:block", o.modal.BEFORE_OPEN = "modal:before-open", o.modal.OPEN = "modal:open", o.modal.BEFORE_CLOSE = "modal:before-close", o.modal.CLOSE = "modal:close", o.modal.AFTER_CLOSE = "modal:after-close", o.modal.AJAX_SEND = "modal:ajax:send", o.modal.AJAX_SUCCESS = "modal:ajax:success", o.modal.AJAX_FAIL = "modal:ajax:fail", o.modal.AJAX_COMPLETE = "modal:ajax:complete", o.fn.modal = function (t) {
    return 1 === this.length && new o.modal(this, t), this;
  }, o(i).on("click.modal", 'a[rel~="modal:close"]', o.modal.close), o(i).on("click.modal", 'a[rel~="modal:open"]', function (t) {
    t.preventDefault(), o(this).modal();
  });
});
"use strict";

/**
 * jQuery.marquee - scrolling text like old marquee element
 * @author Aamir Afridi - aamirafridi(at)gmail(dot)com / http://aamirafridi.com/jquery/jquery-marquee-plugin
 */
(function (f) {
  f.fn.marquee = function (x) {
    return this.each(function () {
      var a = f.extend({}, f.fn.marquee.defaults, x),
          b = f(this),
          c,
          t,
          e = 3,
          y = "animation-play-state",
          p = !1,
          E = function E(a, b, c) {
        for (var e = ["webkit", "moz", "MS", "o", ""], d = 0; d < e.length; d++) {
          e[d] || (b = b.toLowerCase()), a.addEventListener(e[d] + b, c, !1);
        }
      },
          F = function F(a) {
        var b = [],
            c;

        for (c in a) {
          a.hasOwnProperty(c) && b.push(c + ":" + a[c]);
        }

        b.push();
        return "{" + b.join(",") + "}";
      },
          l = {
        pause: function pause() {
          p && a.allowCss3Support ? c.css(y, "paused") : f.fn.pause && c.pause();
          b.data("runningStatus", "paused");
          b.trigger("paused");
        },
        resume: function resume() {
          p && a.allowCss3Support ? c.css(y, "running") : f.fn.resume && c.resume();
          b.data("runningStatus", "resumed");
          b.trigger("resumed");
        },
        toggle: function toggle() {
          l["resumed" == b.data("runningStatus") ? "pause" : "resume"]();
        },
        destroy: function destroy() {
          clearTimeout(b.timer);
          b.find("*").addBack().unbind();
          b.html(b.find(".js-marquee:first").html());
        }
      };

      if ("string" === typeof x) f.isFunction(l[x]) && (c || (c = b.find(".js-marquee-wrapper")), !0 === b.data("css3AnimationIsSupported") && (p = !0), l[x]());else {
        var u;
        f.each(a, function (c, d) {
          u = b.attr("data-" + c);

          if ("undefined" !== typeof u) {
            switch (u) {
              case "true":
                u = !0;
                break;

              case "false":
                u = !1;
            }

            a[c] = u;
          }
        });
        a.speed && (a.duration = parseInt(b.width(), 10) / a.speed * 1E3);
        var v = "up" == a.direction || "down" == a.direction;
        a.gap = a.duplicated ? parseInt(a.gap) : 0;
        b.wrapInner('<div class="js-marquee"></div>');
        var h = b.find(".js-marquee").css({
          "margin-right": a.gap,
          "float": "left"
        });
        a.duplicated && h.clone(!0).appendTo(b);
        b.wrapInner('<div style="width:100000px" class="js-marquee-wrapper"></div>');
        c = b.find(".js-marquee-wrapper");

        if (v) {
          var k = b.height();
          c.removeAttr("style");
          b.height(k);
          b.find(".js-marquee").css({
            "float": "none",
            "margin-bottom": a.gap,
            "margin-right": 0
          });
          a.duplicated && b.find(".js-marquee:last").css({
            "margin-bottom": 0
          });
          var q = b.find(".js-marquee:first").height() + a.gap;
          a.startVisible && !a.duplicated ? (a._completeDuration = (parseInt(q, 10) + parseInt(k, 10)) / parseInt(k, 10) * a.duration, a.duration *= parseInt(q, 10) / parseInt(k, 10)) : a.duration *= (parseInt(q, 10) + parseInt(k, 10)) / parseInt(k, 10);
        } else {
          var m = b.find(".js-marquee:first").width() + a.gap;
          var n = b.width();
          a.startVisible && !a.duplicated ? (a._completeDuration = (parseInt(m, 10) + parseInt(n, 10)) / parseInt(n, 10) * a.duration, a.duration *= parseInt(m, 10) / parseInt(n, 10)) : a.duration *= (parseInt(m, 10) + parseInt(n, 10)) / parseInt(n, 10);
        }

        a.duplicated && (a.duration /= 2);

        if (a.allowCss3Support) {
          h = document.body || document.createElement("div");
          var g = "marqueeAnimation-" + Math.floor(1E7 * Math.random()),
              A = ["Webkit", "Moz", "O", "ms", "Khtml"],
              B = "animation",
              d = "",
              r = "";
          h.style.animation && (r = "@keyframes " + g + " ", p = !0);
          if (!1 === p) for (var z = 0; z < A.length; z++) {
            if (void 0 !== h.style[A[z] + "AnimationName"]) {
              h = "-" + A[z].toLowerCase() + "-";
              B = h + B;
              y = h + y;
              r = "@" + h + "keyframes " + g + " ";
              p = !0;
              break;
            }
          }
          p && (d = g + " " + a.duration / 1E3 + "s " + a.delayBeforeStart / 1E3 + "s infinite " + a.css3easing, b.data("css3AnimationIsSupported", !0));
        }

        var C = function C() {
          c.css("transform", "translateY(" + ("up" == a.direction ? k + "px" : "-" + q + "px") + ")");
        },
            D = function D() {
          c.css("transform", "translateX(" + ("left" == a.direction ? n + "px" : "-" + m + "px") + ")");
        };

        a.duplicated ? (v ? a.startVisible ? c.css("transform", "translateY(0)") : c.css("transform", "translateY(" + ("up" == a.direction ? k + "px" : "-" + (2 * q - a.gap) + "px") + ")") : a.startVisible ? c.css("transform", "translateX(0)") : c.css("transform", "translateX(" + ("left" == a.direction ? n + "px" : "-" + (2 * m - a.gap) + "px") + ")"), a.startVisible || (e = 1)) : a.startVisible ? e = 2 : v ? C() : D();

        var w = function w() {
          a.duplicated && (1 === e ? (a._originalDuration = a.duration, a.duration = v ? "up" == a.direction ? a.duration + k / (q / a.duration) : 2 * a.duration : "left" == a.direction ? a.duration + n / (m / a.duration) : 2 * a.duration, d && (d = g + " " + a.duration / 1E3 + "s " + a.delayBeforeStart / 1E3 + "s " + a.css3easing), e++) : 2 === e && (a.duration = a._originalDuration, d && (g += "0", r = f.trim(r) + "0 ", d = g + " " + a.duration / 1E3 + "s 0s infinite " + a.css3easing), e++));
          v ? a.duplicated ? (2 < e && c.css("transform", "translateY(" + ("up" == a.direction ? 0 : "-" + q + "px") + ")"), t = {
            transform: "translateY(" + ("up" == a.direction ? "-" + q + "px" : 0) + ")"
          }) : a.startVisible ? 2 === e ? (d && (d = g + " " + a.duration / 1E3 + "s " + a.delayBeforeStart / 1E3 + "s " + a.css3easing), t = {
            transform: "translateY(" + ("up" == a.direction ? "-" + q + "px" : k + "px") + ")"
          }, e++) : 3 === e && (a.duration = a._completeDuration, d && (g += "0", r = f.trim(r) + "0 ", d = g + " " + a.duration / 1E3 + "s 0s infinite " + a.css3easing), C()) : (C(), t = {
            transform: "translateY(" + ("up" == a.direction ? "-" + c.height() + "px" : k + "px") + ")"
          }) : a.duplicated ? (2 < e && c.css("transform", "translateX(" + ("left" == a.direction ? 0 : "-" + m + "px") + ")"), t = {
            transform: "translateX(" + ("left" == a.direction ? "-" + m + "px" : 0) + ")"
          }) : a.startVisible ? 2 === e ? (d && (d = g + " " + a.duration / 1E3 + "s " + a.delayBeforeStart / 1E3 + "s " + a.css3easing), t = {
            transform: "translateX(" + ("left" == a.direction ? "-" + m + "px" : n + "px") + ")"
          }, e++) : 3 === e && (a.duration = a._completeDuration, d && (g += "0", r = f.trim(r) + "0 ", d = g + " " + a.duration / 1E3 + "s 0s infinite " + a.css3easing), D()) : (D(), t = {
            transform: "translateX(" + ("left" == a.direction ? "-" + m + "px" : n + "px") + ")"
          });
          b.trigger("beforeStarting");

          if (p) {
            c.css(B, d);
            var h = r + " { 100%  " + F(t) + "}",
                l = c.find("style");
            0 !== l.length ? l.filter(":last").html(h) : f("head").append("<style>" + h + "</style>");
            E(c[0], "AnimationIteration", function () {
              b.trigger("finished");
            });
            E(c[0], "AnimationEnd", function () {
              w();
              b.trigger("finished");
            });
          } else c.animate(t, a.duration, a.easing, function () {
            b.trigger("finished");
            a.pauseOnCycle ? b.timer = setTimeout(w, a.delayBeforeStart) : w();
          });

          b.data("runningStatus", "resumed");
        };

        b.bind("pause", l.pause);
        b.bind("resume", l.resume);
        a.pauseOnHover && (b.bind("mouseenter", l.pause), b.bind("mouseleave", l.resume));
        p && a.allowCss3Support ? w() : b.timer = setTimeout(w, a.delayBeforeStart);
      }
    });
  };

  f.fn.marquee.defaults = {
    allowCss3Support: !0,
    css3easing: "linear",
    easing: "linear",
    delayBeforeStart: 1E3,
    direction: "left",
    duplicated: !1,
    duration: 5E3,
    gap: 20,
    pauseOnCycle: !1,
    pauseOnHover: !1,
    startVisible: !1
  };
})(jQuery);
"use strict";

/*!
 * SlickQuiz jQuery Plugin
 * http://github.com/jewlofthelotus/SlickQuiz
 *
 * @updated October 25, 2014
 * @version 1.5.20
 *
 * @author Julie Cameron - http://www.juliecameron.com
 * @copyright (c) 2013 Quicken Loans - http://www.quickenloans.com
 * @license MIT
 */
(function ($) {
  $.slickQuiz = function (element, options) {
    var plugin = this,
        $element = $(element),
        _element = '#' + $element.attr('id'),
        defaults = {
      checkAnswerText: 'Check My Answer!',
      nextQuestionText: 'Next &raquo;',
      backButtonText: '',
      completeQuizText: '',
      tryAgainText: '',
      questionCountText: 'Question %current of %total',
      preventUnansweredText: 'You must select at least one answer.',
      questionTemplateText: '%count. %text',
      scoreTemplateText: '%score / %total',
      nameTemplateText: '<span>Quiz: </span>%name',
      skipStartButton: false,
      numberOfQuestions: null,
      randomSortQuestions: false,
      randomSortAnswers: false,
      preventUnanswered: false,
      disableScore: false,
      disableRanking: false,
      scoreAsPercentage: false,
      perQuestionResponseMessaging: true,
      perQuestionResponseAnswers: false,
      completionResponseMessaging: false,
      displayQuestionCount: true,
      // Deprecate?
      displayQuestionNumber: true,
      // Deprecate?
      animationCallbacks: {
        // only for the methods that have jQuery animations offering callback
        setupQuiz: function setupQuiz() {},
        startQuiz: function startQuiz() {},
        resetQuiz: function resetQuiz() {},
        checkAnswer: function checkAnswer() {},
        nextQuestion: function nextQuestion() {},
        backToQuestion: function backToQuestion() {},
        completeQuiz: function completeQuiz() {}
      },
      events: {
        onStartQuiz: function onStartQuiz(options) {},
        onCompleteQuiz: function onCompleteQuiz(options) {} // reserved: options.questionCount, options.score

      }
    },
        // Class Name Strings (Used for building quiz and for selectors)
    questionCountClass = 'questionCount',
        questionGroupClass = 'questions',
        questionClass = 'question',
        answersClass = 'answers',
        responsesClass = 'responses',
        completeClass = 'complete',
        correctClass = 'correctResponse',
        incorrectClass = 'incorrectResponse',
        correctResponseClass = 'correct',
        incorrectResponseClass = 'incorrect',
        checkAnswerClass = 'checkAnswer',
        nextQuestionClass = 'nextQuestion',
        lastQuestionClass = 'lastQuestion',
        backToQuestionClass = 'backToQuestion',
        tryAgainClass = 'tryAgain',
        // Sub-Quiz / Sub-Question Class Selectors
    _questionCount = '.' + questionCountClass,
        _questions = '.' + questionGroupClass,
        _question = '.' + questionClass,
        _answers = '.' + answersClass,
        _answer = '.' + answersClass + ' li',
        _responses = '.' + responsesClass,
        _response = '.' + responsesClass + ' li',
        _correct = '.' + correctClass,
        _correctResponse = '.' + correctResponseClass,
        _incorrectResponse = '.' + incorrectResponseClass,
        _checkAnswerBtn = '.' + checkAnswerClass,
        _nextQuestionBtn = '.' + nextQuestionClass,
        _prevQuestionBtn = '.' + backToQuestionClass,
        _tryAgainBtn = '.' + tryAgainClass,
        // Top Level Quiz Element Class Selectors
    _quizStarter = _element + ' .startQuiz',
        _quizName = _element + ' .quizName',
        _quizArea = _element + ' .quizArea',
        _quizResults = _element + ' .quizResults',
        _quizResultsCopy = _element + ' .quizResultsCopy',
        _quizHeader = _element + ' .quizHeader',
        _quizScore = _element + ' .quizScore',
        _quizLevel = _element + ' .quizLevel',
        // Top Level Quiz Element Objects
    $quizStarter = $(_quizStarter),
        $quizName = $(_quizName),
        $quizArea = $(_quizArea),
        $quizResults = $(_quizResults),
        $quizResultsCopy = $(_quizResultsCopy),
        $quizHeader = $(_quizHeader),
        $quizScore = $(_quizScore),
        $quizLevel = $(_quizLevel); // Reassign user-submitted deprecated options


    var depMsg = '';

    if (options && typeof options.disableNext != 'undefined') {
      if (typeof options.preventUnanswered == 'undefined') {
        options.preventUnanswered = options.disableNext;
      }

      depMsg += 'The \'disableNext\' option has been deprecated, please use \'preventUnanswered\' in it\'s place.\n\n';
    }

    if (options && typeof options.disableResponseMessaging != 'undefined') {
      if (typeof options.preventUnanswered == 'undefined') {
        options.perQuestionResponseMessaging = options.disableResponseMessaging;
      }

      depMsg += 'The \'disableResponseMessaging\' option has been deprecated, please use' + ' \'perQuestionResponseMessaging\' and \'completionResponseMessaging\' in it\'s place.\n\n';
    }

    if (options && typeof options.randomSort != 'undefined') {
      if (typeof options.randomSortQuestions == 'undefined') {
        options.randomSortQuestions = options.randomSort;
      }

      if (typeof options.randomSortAnswers == 'undefined') {
        options.randomSortAnswers = options.randomSort;
      }

      depMsg += 'The \'randomSort\' option has been deprecated, please use' + ' \'randomSortQuestions\' and \'randomSortAnswers\' in it\'s place.\n\n';
    }

    if (depMsg !== '') {
      if (typeof console != 'undefined') {
        console.warn(depMsg);
      } else {
        alert(depMsg);
      }
    } // End of deprecation reassignment


    plugin.config = $.extend(defaults, options); // Set via json option or quizJSON variable (see covid19SymptomsQuiz-config.js)

    var quizValues = plugin.config.json ? plugin.config.json : typeof quizJSON != 'undefined' ? quizJSON : null; // Get questions, possibly sorted randomly

    var questions = plugin.config.randomSortQuestions ? quizValues.questions.sort(function () {
      return Math.round(Math.random()) - 0.5;
    }) : quizValues.questions; // Count the number of questions

    var questionCount = questions.length; // Select X number of questions to load if options is set

    if (plugin.config.numberOfQuestions && questionCount >= plugin.config.numberOfQuestions) {
      questions = questions.slice(0, plugin.config.numberOfQuestions);
      questionCount = questions.length;
    } // some special private/internal methods


    var internal = {
      method: {
        // get a key whose notches are "resolved jQ deferred" objects; one per notch on the key
        // think of the key as a house key with notches on it
        getKey: function getKey(notches) {
          // returns [], notches >= 1
          var key = [];

          for (var i = 0; i < notches; i++) {
            key[i] = $.Deferred();
          }

          return key;
        },
        // put the key in the door, if all the notches pass then you can turn the key and "go"
        turnKeyAndGo: function turnKeyAndGo(key, go) {
          // key = [], go = function ()
          // when all the notches of the key are accepted (resolved) then the key turns and the engine (callback/go) starts
          $.when.apply(null, key).then(function () {
            go();
          });
        },
        // get one jQ
        getKeyNotch: function getKeyNotch(key, notch) {
          // notch >= 1, key = []
          // key has several notches, numbered as 1, 2, 3, ... (no zero notch)
          // we resolve and return the "jQ deferred" object at specified notch
          return function () {
            key[notch - 1].resolve(); // it is ASSUMED that you initiated the key with enough notches
          };
        }
      }
    };
    plugin.method = {
      // Sets up the questions and answers based on above array
      setupQuiz: function setupQuiz(options) {
        // use 'options' object to pass args
        var key, keyNotch, kN;
        key = internal.method.getKey(3); // how many notches == how many jQ animations you will run

        keyNotch = internal.method.getKeyNotch; // a function that returns a jQ animation callback function

        kN = keyNotch; // you specify the notch, you get a callback function for your animation

        $quizName.hide().html(plugin.config.nameTemplateText.replace('%name', quizValues.info.name)).fadeIn(1000, kN(key, 1));
        $quizHeader.hide().prepend($('<div class="quizDescription">' + quizValues.info.main + '</div>')).fadeIn(1000, kN(key, 2));
        $quizResultsCopy.append(quizValues.info.results); // add retry button to results view, if enabled

        if (plugin.config.tryAgainText && plugin.config.tryAgainText !== '') {
          $quizResultsCopy.append('<p><a class="button ' + tryAgainClass + '" href="#">' + plugin.config.tryAgainText + '</a></p>');
        } // Setup questions


        var quiz = $('<ol class="' + questionGroupClass + '"></ol>'),
            count = 1; // Loop through questions object

        for (var i in questions) {
          if (questions.hasOwnProperty(i)) {
            var question = questions[i];
            var questionHTML = $('<li class="' + questionClass + '" id="question' + (count - 1) + '"></li>');

            if (plugin.config.displayQuestionCount) {
              questionHTML.append('<div class="' + questionCountClass + '">' + plugin.config.questionCountText.replace('%current', '<span class="current">' + count + '</span>').replace('%total', '<span class="total">' + questionCount + '</span>') + '</div>');
            }

            var formatQuestion = '';

            if (plugin.config.displayQuestionNumber) {
              formatQuestion = plugin.config.questionTemplateText.replace('%count', count).replace('%text', question.q);
            } else {
              formatQuestion = question.q;
            }

            questionHTML.append('<h3>' + formatQuestion + '</h3>'); // Count the number of true values

            var truths = 0;

            for (var i in question.a) {
              if (question.a.hasOwnProperty(i)) {
                answer = question.a[i];

                if (answer.correct) {
                  truths++;
                }
              }
            } // Now let's append the answers with checkboxes or radios depending on truth count


            var answerHTML = $('<ul class="' + answersClass + '"></ul>'); // Get the answers

            var answers = plugin.config.randomSortAnswers ? question.a.sort(function () {
              return Math.round(Math.random()) - 0.5;
            }) : question.a; // prepare a name for the answer inputs based on the question

            var selectAny = question.select_any ? question.select_any : false,
                forceCheckbox = question.force_checkbox ? question.force_checkbox : false,
                checkbox = truths > 1 && !selectAny || forceCheckbox,
                inputName = $element.attr('id') + '_question' + (count - 1),
                inputType = checkbox ? 'checkbox' : 'radio';

            if (count == quizValues.questions.length) {
              nextQuestionClass = nextQuestionClass + ' ' + lastQuestionClass;
            }

            for (var i in answers) {
              if (answers.hasOwnProperty(i)) {
                var answer = answers[i],
                    optionId = inputName + '_' + i.toString(); // If question has >1 true answers and is not a select any, use checkboxes; otherwise, radios

                var input = '<input id="' + optionId + '" name="' + inputName + '" type="' + inputType + '" /> ';
                var optionLabel = '<label for="' + optionId + '">' + answer.option + '</label>';
                var answerContent = $('<li></li>').append(input).append(optionLabel);
                answerHTML.append(answerContent);
              }
            } // Append answers to question


            questionHTML.append(answerHTML); // If response messaging is NOT disabled, add it

            if (plugin.config.perQuestionResponseMessaging || plugin.config.completionResponseMessaging) {
              // Now let's append the correct / incorrect response messages
              var responseHTML = $('<ul class="' + responsesClass + '"></ul>');
              responseHTML.append('<li class="' + correctResponseClass + '">' + question.correct + '</li>');
              responseHTML.append('<li class="' + incorrectResponseClass + '">' + question.incorrect + '</li>'); // Append responses to question

              questionHTML.append(responseHTML);
            } // Appends check answer / back / next question buttons


            if (plugin.config.backButtonText && plugin.config.backButtonText !== '') {
              questionHTML.append('<a href="#" class="button ' + backToQuestionClass + '">' + plugin.config.backButtonText + '</a>');
            }

            var nextText = plugin.config.nextQuestionText;

            if (plugin.config.completeQuizText && count == questionCount) {
              nextText = plugin.config.completeQuizText;
            } // If we're not showing responses per question, show next question button and make it check the answer too


            if (!plugin.config.perQuestionResponseMessaging) {
              questionHTML.append('<a href="#" class="button ' + nextQuestionClass + ' ' + checkAnswerClass + '">' + nextText + '</a>');
            } else {
              questionHTML.append('<a href="#" class="button ' + nextQuestionClass + '">' + nextText + '</a>');
              questionHTML.append('<a href="#" class="button ' + checkAnswerClass + '">' + plugin.config.checkAnswerText + '</a>');
            } // Append question & answers to quiz


            quiz.append(questionHTML);
            count++;
          }
        } // Add the quiz content to the page


        $quizArea.append(quiz); // Toggle the start button OR start the quiz if start button is disabled

        if (plugin.config.skipStartButton || $quizStarter.length == 0) {
          $quizStarter.hide();
          plugin.method.startQuiz.apply(this, [{
            callback: plugin.config.animationCallbacks.startQuiz
          }]); // TODO: determine why 'this' is being passed as arg to startQuiz method

          kN(key, 3).apply(null, []);
        } else {
          $quizStarter.fadeIn(500, kN(key, 3)); // 3d notch on key must be on both sides of if/else, otherwise key won't turn
        }

        internal.method.turnKeyAndGo(key, options && options.callback ? options.callback : function () {});
      },
      // Starts the quiz (hides start button and displays first question)
      startQuiz: function startQuiz(options) {
        var key, keyNotch, kN;
        key = internal.method.getKey(1); // how many notches == how many jQ animations you will run

        keyNotch = internal.method.getKeyNotch; // a function that returns a jQ animation callback function

        kN = keyNotch; // you specify the notch, you get a callback function for your animation

        function start(options) {
          var firstQuestion = $(_element + ' ' + _questions + ' li').first();

          if (firstQuestion.length) {
            firstQuestion.fadeIn(500, function () {
              if (options && options.callback) options.callback();
            });
          }
        }

        if (plugin.config.skipStartButton || $quizStarter.length == 0) {
          start({
            callback: kN(key, 1)
          });
        } else {
          $quizStarter.fadeOut(300, function () {
            start({
              callback: kN(key, 1)
            }); // 1st notch on key must be on both sides of if/else, otherwise key won't turn
          });
        }

        internal.method.turnKeyAndGo(key, options && options.callback ? options.callback : function () {});

        if (plugin.config.events && plugin.config.events.onStartQuiz) {
          plugin.config.events.onStartQuiz.apply(null, []);
        }
      },
      // Resets (restarts) the quiz (hides results, resets inputs, and displays first question)
      resetQuiz: function resetQuiz(startButton, options) {
        var key, keyNotch, kN;
        key = internal.method.getKey(1); // how many notches == how many jQ animations you will run

        keyNotch = internal.method.getKeyNotch; // a function that returns a jQ animation callback function

        kN = keyNotch; // you specify the notch, you get a callback function for your animation

        $quizResults.fadeOut(300, function () {
          $(_element + ' input').prop('checked', false).prop('disabled', false);
          $quizLevel.attr('class', 'quizLevel');
          $(_element + ' ' + _question).removeClass(correctClass).removeClass(incorrectClass).remove(completeClass);
          $(_element + ' ' + _answer).removeClass(correctResponseClass).removeClass(incorrectResponseClass);
          $(_element + ' ' + _question + ',' + _element + ' ' + _responses + ',' + _element + ' ' + _response + ',' + _element + ' ' + _nextQuestionBtn + ',' + _element + ' ' + _prevQuestionBtn).hide();
          $(_element + ' ' + _questionCount + ',' + _element + ' ' + _answers + ',' + _element + ' ' + _checkAnswerBtn).show();
          $quizArea.append($(_element + ' ' + _questions)).show();
          kN(key, 1).apply(null, []);
          plugin.method.startQuiz({
            callback: plugin.config.animationCallbacks.startQuiz
          }, $quizResults); // TODO: determine why $quizResults is being passed
        });
        internal.method.turnKeyAndGo(key, options && options.callback ? options.callback : function () {});
      },
      // Validates the response selection(s), displays explanations & next question button
      checkAnswer: function checkAnswer(checkButton, options) {
        var key, keyNotch, kN;
        key = internal.method.getKey(2); // how many notches == how many jQ animations you will run

        keyNotch = internal.method.getKeyNotch; // a function that returns a jQ animation callback function

        kN = keyNotch; // you specify the notch, you get a callback function for your animation

        var questionLI = $($(checkButton).parents(_question)[0]),
            answerLIs = questionLI.find(_answers + ' li'),
            answerSelects = answerLIs.find('input:checked'),
            questionIndex = parseInt(questionLI.attr('id').replace(/(question)/, ''), 10),
            answers = questions[questionIndex].a,
            selectAny = questions[questionIndex].select_any ? questions[questionIndex].select_any : false;
        answerLIs.addClass(incorrectResponseClass); // Collect the true answers needed for a correct response

        var trueAnswers = [];

        for (var i in answers) {
          if (answers.hasOwnProperty(i)) {
            var answer = answers[i],
                index = parseInt(i, 10);

            if (answer.correct) {
              trueAnswers.push(index);
              answerLIs.eq(index).removeClass(incorrectResponseClass).addClass(correctResponseClass);
            }
          }
        } // TODO: Now that we're marking answer LIs as correct / incorrect, we might be able
        // to do all our answer checking at the same time
        // NOTE: Collecting answer index for comparison aims to ensure that HTML entities
        // and HTML elements that may be modified by the browser / other scrips match up
        // Collect the answers submitted


        var selectedAnswers = [];
        answerSelects.each(function () {
          var id = $(this).attr('id');
          selectedAnswers.push(parseInt(id.replace(/(.*\_question\d{1,}_)/, ''), 10));
        });

        if (plugin.config.preventUnanswered && selectedAnswers.length === 0) {
          alert(plugin.config.preventUnansweredText);
          return false;
        } // Verify all/any true answers (and no false ones) were submitted


        var correctResponse = plugin.method.compareAnswers(trueAnswers, selectedAnswers, selectAny);

        if (correctResponse) {
          questionLI.addClass(correctClass);
        } else {
          questionLI.addClass(incorrectClass);
        } // Toggle appropriate response (either for display now and / or on completion)


        questionLI.find(correctResponse ? _correctResponse : _incorrectResponse).show(); // If perQuestionResponseMessaging is enabled, toggle response and navigation now

        if (plugin.config.perQuestionResponseMessaging) {
          $(checkButton).hide();

          if (!plugin.config.perQuestionResponseAnswers) {
            // Make sure answers don't highlight for a split second before they hide
            questionLI.find(_answers).hide({
              duration: 0,
              complete: function complete() {
                questionLI.addClass(completeClass);
              }
            });
          } else {
            questionLI.addClass(completeClass);
          }

          questionLI.find('input').prop('disabled', true);
          questionLI.find(_responses).show();
          questionLI.find(_nextQuestionBtn).fadeIn(300, kN(key, 1));
          questionLI.find(_prevQuestionBtn).fadeIn(300, kN(key, 2));
          if (!questionLI.find(_prevQuestionBtn).length) kN(key, 2).apply(null, []); // 2nd notch on key must be passed even if there's no "back" button
        } else {
          kN(key, 1).apply(null, []); // 1st notch on key must be on both sides of if/else, otherwise key won't turn

          kN(key, 2).apply(null, []); // 2nd notch on key must be on both sides of if/else, otherwise key won't turn
        }

        internal.method.turnKeyAndGo(key, options && options.callback ? options.callback : function () {});
      },
      // Moves to the next question OR completes the quiz if on last question
      nextQuestion: function nextQuestion(nextButton, options) {
        var key, keyNotch, kN;
        key = internal.method.getKey(1); // how many notches == how many jQ animations you will run

        keyNotch = internal.method.getKeyNotch; // a function that returns a jQ animation callback function

        kN = keyNotch; // you specify the notch, you get a callback function for your animation

        var currentQuestion = $($(nextButton).parents(_question)[0]),
            nextQuestion = currentQuestion.next(_question),
            answerInputs = currentQuestion.find('input:checked'); // If response messaging has been disabled or moved to completion,
        // make sure we have an answer if we require it, let checkAnswer handle the alert messaging

        if (plugin.config.preventUnanswered && answerInputs.length === 0) {
          return false;
        }

        if (nextQuestion.length) {
          currentQuestion.fadeOut(300, function () {
            nextQuestion.find(_prevQuestionBtn).show().end().fadeIn(500, kN(key, 1));
            if (!nextQuestion.find(_prevQuestionBtn).show().end().length) kN(key, 1).apply(null, []); // 1st notch on key must be passed even if there's no "back" button
          });
        } else {
          kN(key, 1).apply(null, []); // 1st notch on key must be on both sides of if/else, otherwise key won't turn

          plugin.method.completeQuiz({
            callback: plugin.config.animationCallbacks.completeQuiz
          });
        }

        internal.method.turnKeyAndGo(key, options && options.callback ? options.callback : function () {});
      },
      // Go back to the last question
      backToQuestion: function backToQuestion(backButton, options) {
        var key, keyNotch, kN;
        key = internal.method.getKey(2); // how many notches == how many jQ animations you will run

        keyNotch = internal.method.getKeyNotch; // a function that returns a jQ animation callback function

        kN = keyNotch; // you specify the notch, you get a callback function for your animation

        var questionLI = $($(backButton).parents(_question)[0]),
            responses = questionLI.find(_responses); // Back to question from responses

        if (responses.css('display') === 'block') {
          questionLI.find(_responses).fadeOut(300, function () {
            questionLI.removeClass(correctClass).removeClass(incorrectClass).removeClass(completeClass);
            questionLI.find(_responses + ', ' + _response).hide();
            questionLI.find(_answers).show();
            questionLI.find(_answer).removeClass(correctResponseClass).removeClass(incorrectResponseClass);
            questionLI.find('input').prop('disabled', false);
            questionLI.find(_answers).fadeIn(500, kN(key, 1)); // 1st notch on key must be on both sides of if/else, otherwise key won't turn

            questionLI.find(_checkAnswerBtn).fadeIn(500, kN(key, 2));
            questionLI.find(_nextQuestionBtn).hide(); // if question is first, don't show back button on question

            if (questionLI.attr('id') != 'question0') {
              questionLI.find(_prevQuestionBtn).show();
            } else {
              questionLI.find(_prevQuestionBtn).hide();
            }
          }); // Back to previous question
        } else {
          var prevQuestion = questionLI.prev(_question);
          questionLI.fadeOut(300, function () {
            prevQuestion.removeClass(correctClass).removeClass(incorrectClass).removeClass(completeClass);
            prevQuestion.find(_responses + ', ' + _response).hide();
            prevQuestion.find(_answers).show();
            prevQuestion.find(_answer).removeClass(correctResponseClass).removeClass(incorrectResponseClass);
            prevQuestion.find('input').prop('disabled', false);
            prevQuestion.find(_nextQuestionBtn).hide();
            prevQuestion.find(_checkAnswerBtn).show();

            if (prevQuestion.attr('id') != 'question0') {
              prevQuestion.find(_prevQuestionBtn).show();
            } else {
              prevQuestion.find(_prevQuestionBtn).hide();
            }

            prevQuestion.fadeIn(500, kN(key, 1));
            kN(key, 2).apply(null, []); // 2nd notch on key must be on both sides of if/else, otherwise key won't turn
          });
        }

        internal.method.turnKeyAndGo(key, options && options.callback ? options.callback : function () {});
      },
      // Hides all questions, displays the final score and some conclusive information
      completeQuiz: function completeQuiz(options) {
        var key, keyNotch, kN;
        key = internal.method.getKey(1); // how many notches == how many jQ animations you will run

        keyNotch = internal.method.getKeyNotch; // a function that returns a jQ animation callback function

        kN = keyNotch; // you specify the notch, you get a callback function for your animation

        var score = $(_element + ' ' + _correct).length,
            displayScore = score;

        if (plugin.config.scoreAsPercentage) {
          displayScore = (score / questionCount).toFixed(2) * 100 + "%";
        }

        if (plugin.config.disableScore) {
          $(_quizScore).remove();
        } else {
          $(_quizScore + ' span').html(plugin.config.scoreTemplateText.replace('%score', displayScore).replace('%total', questionCount));
        }

        if (plugin.config.disableRanking) {
          $(_quizLevel).remove();
        } else {
          var levels = [quizValues.info.level1, // 80-100%
          quizValues.info.level2, // 60-79%
          quizValues.info.level3, // 40-59%
          quizValues.info.level4, // 20-39%
          quizValues.info.level5 // 0-19%
          ],
              levelRank = plugin.method.calculateLevel(score),
              levelText = $.isNumeric(levelRank) ? levels[levelRank] : '';
          $(_quizLevel + ' span').html(levelText);
          $(_quizLevel).addClass('level' + levelRank);
        }

        $quizArea.fadeOut(300, function () {
          // If response messaging is set to show upon quiz completion, show it now
          if (plugin.config.completionResponseMessaging) {
            $(_element + ' .button:not(' + _tryAgainBtn + '), ' + _element + ' ' + _questionCount).hide();
            $(_element + ' ' + _question + ', ' + _element + ' ' + _answers + ', ' + _element + ' ' + _responses).show();
            $quizResults.append($(_element + ' ' + _questions)).fadeIn(500, kN(key, 1));
          } else {
            $quizResults.fadeIn(500, kN(key, 1)); // 1st notch on key must be on both sides of if/else, otherwise key won't turn
          }
        });
        internal.method.turnKeyAndGo(key, options && options.callback ? options.callback : function () {});

        if (plugin.config.events && plugin.config.events.onCompleteQuiz) {
          plugin.config.events.onCompleteQuiz.apply(null, [{
            questionCount: questionCount,
            score: score
          }]);
        }
      },
      // Compares selected responses with true answers, returns true if they match exactly
      compareAnswers: function compareAnswers(trueAnswers, selectedAnswers, selectAny) {
        if (selectAny) {
          return $.inArray(selectedAnswers[0], trueAnswers) > -1;
        } else {
          // crafty array comparison (http://stackoverflow.com/a/7726509)
          return $(trueAnswers).not(selectedAnswers).length === 0 && $(selectedAnswers).not(trueAnswers).length === 0;
        }
      },
      // Calculates knowledge level based on number of correct answers
      calculateLevel: function calculateLevel(correctAnswers) {
        var percent = (correctAnswers / questionCount).toFixed(2),
            level = null;

        if (plugin.method.inRange(0, 0.20, percent)) {
          level = 4;
        } else if (plugin.method.inRange(0.21, 0.40, percent)) {
          level = 3;
        } else if (plugin.method.inRange(0.41, 0.60, percent)) {
          level = 2;
        } else if (plugin.method.inRange(0.61, 0.80, percent)) {
          level = 1;
        } else if (plugin.method.inRange(0.81, 1.00, percent)) {
          level = 0;
        }

        return level;
      },
      // Determines if percentage of correct values is within a level range
      inRange: function inRange(start, end, value) {
        return value >= start && value <= end;
      }
    };

    plugin.init = function () {
      // Setup quiz
      plugin.method.setupQuiz.apply(null, [{
        callback: plugin.config.animationCallbacks.setupQuiz
      }]); // Bind "start" button

      $quizStarter.on('click', function (e) {
        e.preventDefault();

        if (!this.disabled && !$(this).hasClass('disabled')) {
          plugin.method.startQuiz.apply(null, [{
            callback: plugin.config.animationCallbacks.startQuiz
          }]);
        }
      }); // Bind "try again" button

      $(_element + ' ' + _tryAgainBtn).on('click', function (e) {
        e.preventDefault();
        plugin.method.resetQuiz(this, {
          callback: plugin.config.animationCallbacks.resetQuiz
        });
      }); // Bind "check answer" buttons

      $(_element + ' ' + _checkAnswerBtn).on('click', function (e) {
        e.preventDefault();
        plugin.method.checkAnswer(this, {
          callback: plugin.config.animationCallbacks.checkAnswer
        });
      }); // Bind "back" buttons

      $(_element + ' ' + _prevQuestionBtn).on('click', function (e) {
        e.preventDefault();
        plugin.method.backToQuestion(this, {
          callback: plugin.config.animationCallbacks.backToQuestion
        });
      }); // Bind "next" buttons

      $(_element + ' ' + _nextQuestionBtn).on('click', function (e) {
        e.preventDefault();
        plugin.method.nextQuestion(this, {
          callback: plugin.config.animationCallbacks.nextQuestion
        });
      }); // Accessibility (WAI-ARIA).

      var _qnid = $element.attr('id') + '-name';

      $quizName.attr('id', _qnid);
      $element.attr({
        'aria-labelledby': _qnid,
        'aria-live': 'polite',
        'aria-relevant': 'additions',
        'role': 'form'
      });
      $(_quizStarter + ', [href = "#"]').attr('role', 'button');
    }; // move to next question without submitting


    function removeNextButton() {
      $('a.button.nextQuestion').hide();
      $element.find('input').on('change', function () {
        plugin.method.checkAnswer(this, {
          callback: plugin.config.animationCallbacks.checkAnswer
        });
        plugin.method.nextQuestion(this, {
          callback: plugin.config.animationCallbacks.nextQuestion
        });
        $(this).addClass('animated fadeOutLeft');
      });
    }

    $(document).ready(function () {
      removeNextButton();
    });
    plugin.init();
  };

  $.fn.slickQuiz = function (options) {
    return this.each(function () {
      if (undefined === $(this).data('slickQuiz')) {
        var plugin = new $.slickQuiz(this, options);
        $(this).data('slickQuiz', plugin);
      }
    });
  };
})(jQuery);
"use strict";

var fadeInContentAnimation = function fadeInContentAnimation() {};

var showNewsBar = function showNewsBar() {};

$(function () {
  // Content fade in animation
  // ========================
  var mtWidth = 1366;
  var mWidth = 576;
  var mainAnimDuration = 1.5;
  var animEase = Sine.easeInOut;

  fadeInContentAnimation = function fadeInContentAnimation() {
    // show main content after the globe animations
    var $main = $('main');
    TweenMax.to($main, mainAnimDuration, {
      opacity: 1,
      ease: animEase
    });
    TweenMax.to($main, mainAnimDuration, {
      y: 0,
      ease: animEase
    });
  };

  if (window.innerWidth <= mtWidth || true) {
    fadeInContentAnimation();
  }

  var $nav = $('nav');
  var $info_btn = $('section.info-btn');
  TweenMax.to($nav, mainAnimDuration, {
    opacity: 1,
    ease: animEase
  });
  TweenMax.to($info_btn, mainAnimDuration, {
    opacity: 1,
    ease: animEase
  }); // quiz logic
  // ========================

  $.modal.defaults.fadeDuration = 500;
  $.modal.defaults.fadeDelay = 0; // Symptoms Quiz

  $('#symptoms-quiz').on($.modal.OPEN, function () {
    $('body').removeClass('blurred').addClass('blurred');
  }).on($.modal.CLOSE, function () {
    $('body').removeClass('blurred');
  });
  $('#SymptomsQuiz').slickQuiz({
    skipStartButton: true,
    perQuestionResponseMessaging: false,
    preventUnanswered: true,
    preventUnansweredText: 'أخطار إجابة يعيشك',
    questionCountText: '%current/%total',
    questionTemplateText: '%text',
    json: {
      "info": {
        "name": "إرشادات حول الأعراض",
        "main": "<small><span>COVID-19</span>جاوب معانا عالأسئلة هاذم كانك شاك انو عندك الـ </small>",
        "results": "حسب الإجابات متعك :",
        "level1": "حط روحك في الحجر الذاتي، ابعد على الناس إلي قرابلك و إتصل بالرقم الأخضر.<p class='green-num'>80 10 19 19</p>",
        "level2": "حتى لو كان ماعندكش الأعراض الكل، إبعد على الناس الي تعز عليك حتى تتأكد أنك لباس و أكيد اتصل بالرقم الأخضر.<p class='green-num'>80 10 19 19</p>",
        "level3": "حتى لو كان ماعندكش الأعراض الكل، إبعد على الناس الي تعز عليك حتى تتأكد أنك لباس و أكيد اتصل بالرقم الأخضر.<p class='green-num'>80 10 19 19</p>",
        "level4": "حتى لو كان ماعندكش الأعراض الكل، إبعد على الناس الي تعز عليك حتى تتأكد أنك لباس و أكيد اتصل بالرقم الأخضر.<p class='green-num'>80 10 19 19</p>",
        "level5": "تلهى بصحتك و إتصل بالرقم الأخضر كان حسيت عندك الأعراض هذه.<p class='green-num'>80 10 19 19</p>"
      },
      "questions": [{
        "q": "تكح الأيامات الفائتة ؟",
        "a": [{
          "option": "نعم",
          "correct": true
        }, {
          "option": "لا",
          "correct": false
        }]
      }, {
        "q": "خشمك يجري ؟",
        "a": [{
          "option": "نعم",
          "correct": true
        }, {
          "option": "لا",
          "correct": false
        }]
      }, {
        "q": "عندك وجيعة في الحلق ؟",
        "a": [{
          "option": "نعم",
          "correct": true
        }, {
          "option": "لا",
          "correct": false
        }]
      }, {
        "q": "عندك السخانة ؟",
        "a": [{
          "option": "نعم",
          "correct": true
        }, {
          "option": "لا",
          "correct": false
        }]
      }]
    }
  }); // Prevention Quiz

  $('#prevention-quiz').on($.modal.OPEN, function () {
    $('body').removeClass('blurred').addClass('blurred');
  }).on($.modal.CLOSE, function () {
    $('body').removeClass('blurred');
  });
  $('#PreventionQuiz').slickQuiz({
    skipStartButton: true,
    perQuestionResponseMessaging: false,
    preventUnanswered: true,
    preventUnansweredText: 'أخطار إجابة يعيشك',
    questionCountText: '%current/%total',
    questionTemplateText: '%text',
    json: {
      "info": {
        "name": "إرشادات حول الوقاية",
        "main": "<p>جاوب معانا عالأسلة هاذم باش تتعرف على حالتك</p>",
        "results": "حسب الإجابات متعك :",
        "level1": "هايل ياسر ، بالتزامك الإجراءات ، أنت تنقذ الناس من حولك.",
        "level2": "ناسي بعض المبادئ التوجيهية . الوقاية هي أهم شيء باش نحميو الناس إلي العزاز علينا.",
        "level3": "ناسي بعض المبادئ التوجيهية . الوقاية هي أهم شيء باش نحميو الناس إلي العزاز علينا.",
        "level4": "ناسي بعض المبادئ التوجيهية . الوقاية هي أهم شيء باش نحميو الناس إلي العزاز علينا.",
        "level5": " أبدا في ممارسة المبادئ التوجيهية لمنظمة الصحة العالمية و وزارة الصحة."
      },
      "questions": [{
        "q": "تغسل يديك بعد ما تكح ولا تعطس ؟",
        "a": [{
          "option": "نعم",
          "correct": true
        }, {
          "option": "لا",
          "correct": false
        }]
      }, {
        "q": "تغسل يديك عديد المرات في النهار ؟",
        "a": [{
          "option": "نعم",
          "correct": true
        }, {
          "option": "لا",
          "correct": false
        }]
      }, {
        "q": "تستعمل في المطهر ؟",
        "a": [{
          "option": "نعم",
          "correct": true
        }, {
          "option": "لا",
          "correct": false
        }]
      }, {
        "q": "تستعمل قناع الوجه كي تخرج ؟",
        "a": [{
          "option": "نعم",
          "correct": true
        }, {
          "option": "لا",
          "correct": false
        }]
      }, {
        "q": "إتبع في الإرشادات الوقائية للوزارة الصحة ؟",
        "a": [{
          "option": "نعم",
          "correct": true
        }, {
          "option": "لا",
          "correct": false
        }]
      }]
    }
  }); // info popup logic
  // ========================

  $('#info-btn').on('click', function () {
    if (window.innerWidth <= mWidth) {
      $('body').toggleClass('bg-transparent');
    }

    $(this).toggleClass('opened');
  }); // news bar
  // ========================

  showNewsBar = function showNewsBar() {
    var $news_bar = $('section.news');
    var newsAnimDuration = 1.5;
    var newsAnimEase = Sine.easeInOut;
    TweenMax.to($news_bar, newsAnimDuration, {
      opacity: 1,
      y: 0,
      ease: newsAnimEase
    });
    $('section.news > *').marquee({
      speed: 100,
      direction: 'right'
    });
  };
});
"use strict";

var API_BASE_URL = 'https://api.covid19.beecoop.co';
var STATS_PER_COUNTRY_ENDPOINT = '/stats?country=';
var NEWS_ENDPOINT = '/news';
var COUNTRY = 'Tunisia';
$(document).ready(function () {
  $.ajax({
    url: API_BASE_URL + STATS_PER_COUNTRY_ENDPOINT + COUNTRY,
    method: "GET",
    dataType: "json"
  }).done(function (data) {
    var $cases_output = $('#cases .stat-value');
    var $recovered_output = $('#recovered .stat-value');
    var $deaths_output = $('#deaths .stat-value');
    var $loader = $("main .stat .loader"); // set stats data

    $cases_output.html(data.active);
    $recovered_output.html(data.recovered);
    $deaths_output.html(data.deaths); // display data with animation

    $loader.fadeOut(function () {
      $recovered_output.fadeIn(2000);
      $cases_output.fadeIn(2000);
      $deaths_output.fadeIn(2000);
    });
  }).fail(function (error) {
    console.log(JSON.stringify(error));
  });
  $.ajax({
    url: API_BASE_URL + NEWS_ENDPOINT,
    method: "GET",
    dataType: "json"
  }).done(function (data) {
    var $news_content = $('section.news .content');
    var news_texts = [];
    data.forEach(function (news_obj, index) {
      news_texts.push(news_obj.news_entry);
    });
    var news = news_texts.join(' &bull; ');
    $news_content.html(news);
    showNewsBar();
  }).fail(function (error) {
    console.log(JSON.stringify(error));
  });
});