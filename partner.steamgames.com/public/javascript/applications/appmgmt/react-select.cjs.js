/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
/* Third-party software licenses can be found at licenses.txt */
import { an as e, kt as t, nn as n, rn as r, tn as i } from "./mobx.esm.js";
import { E as a, f as o } from "./react-router.js";
var s = i((e, t) => {
    function n(e) {
      "@babel/helpers - typeof";
      return (
        (t.exports = n =
          typeof Symbol == `function` && typeof Symbol.iterator == `symbol`
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  typeof Symbol == `function` &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? `symbol`
                  : typeof e;
              }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports),
        n(e)
      );
    }
    ((t.exports = n),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports));
  }),
  c = i((e, t) => {
    var n = s().default;
    function r(e, t) {
      if (n(e) != `object` || !e) return e;
      var r;
      if (typeof Symbol < `u` && (r = e[Symbol.toPrimitive]) !== void 0) {
        var i = r.call(e, t || `default`);
        if (n(i) != `object`) return i;
        throw TypeError(`@@toPrimitive must return a primitive value.`);
      }
      return (t === `string` ? String : Number)(e);
    }
    ((t.exports = r),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports));
  }),
  l = i((e, t) => {
    var n = s().default,
      r = c();
    function i(e) {
      var t = r(e, `string`);
      return n(t) == `symbol` ? t : t + ``;
    }
    ((t.exports = i),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports));
  }),
  u = i((e, t) => {
    var n = l();
    function r(e, t, r) {
      return (
        (t = n(t)) in e
          ? Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = r),
        e
      );
    }
    ((t.exports = r),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports));
  }),
  d = i((e, t) => {
    var n = u();
    function r(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r));
      }
      return n;
    }
    function i(e) {
      for (var t = 1; t < arguments.length; t++) {
        var i = arguments[t] == null ? {} : arguments[t];
        t % 2
          ? r(Object(i), !0).forEach(function (t) {
              n(e, t, i[t]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
            : r(Object(i)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(i, t),
                );
              });
      }
      return e;
    }
    ((t.exports = i),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports));
  }),
  f = i((e, t) => {
    function n(e) {
      if (Array.isArray(e)) return e;
    }
    ((t.exports = n),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports));
  }),
  p = i((e, t) => {
    function n(e, t) {
      var n =
        e == null
          ? null
          : (typeof Symbol < `u` && e[Symbol.iterator]) || e[`@@iterator`];
      if (n != null) {
        var r,
          i,
          a,
          o,
          s = [],
          c = !0,
          l = !1;
        try {
          if (((a = (n = n.call(e)).next), t === 0)) {
            if (Object(n) !== n) return;
            c = !1;
          } else
            for (
              ;
              !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t);
              c = !0
            );
        } catch (e) {
          ((l = !0), (i = e));
        } finally {
          try {
            if (!c && n.return != null && ((o = n.return()), Object(o) !== o))
              return;
          } finally {
            if (l) throw i;
          }
        }
        return s;
      }
    }
    ((t.exports = n),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports));
  }),
  m = i((e, t) => {
    function n(e, t) {
      (t == null || t > e.length) && (t = e.length);
      for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
      return r;
    }
    ((t.exports = n),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports));
  }),
  h = i((e, t) => {
    var n = m();
    function r(e, t) {
      if (e) {
        if (typeof e == `string`) return n(e, t);
        var r = {}.toString.call(e).slice(8, -1);
        return (
          r === `Object` && e.constructor && (r = e.constructor.name),
          r === `Map` || r === `Set`
            ? Array.from(e)
            : r === `Arguments` ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? n(e, t)
              : void 0
        );
      }
    }
    ((t.exports = r),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports));
  }),
  g = i((e, t) => {
    function n() {
      throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    ((t.exports = n),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports));
  }),
  _ = i((e, t) => {
    var n = f(),
      r = p(),
      i = h(),
      a = g();
    function o(e, t) {
      return n(e) || r(e, t) || i(e, t) || a();
    }
    ((t.exports = o),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports));
  }),
  v = i((e, t) => {
    function n(e, t) {
      if (e == null) return {};
      var n = {};
      for (var r in e)
        if ({}.hasOwnProperty.call(e, r)) {
          if (t.indexOf(r) !== -1) continue;
          n[r] = e[r];
        }
      return n;
    }
    ((t.exports = n),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports));
  }),
  y = i((e, t) => {
    var n = v();
    function r(e, t) {
      if (e == null) return {};
      var r,
        i,
        a = n(e, t);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (i = 0; i < o.length; i++)
          ((r = o[i]),
            t.indexOf(r) === -1 &&
              {}.propertyIsEnumerable.call(e, r) &&
              (a[r] = e[r]));
      }
      return a;
    }
    ((t.exports = r),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports));
  }),
  b = i((e) => {
    var n = d(),
      r = _(),
      i = y(),
      a = t(),
      o = [
        `defaultInputValue`,
        `defaultMenuIsOpen`,
        `defaultValue`,
        `inputValue`,
        `menuIsOpen`,
        `onChange`,
        `onInputChange`,
        `onMenuClose`,
        `onMenuOpen`,
        `value`,
      ];
    function s(e) {
      var t = e.defaultInputValue,
        s = t === void 0 ? `` : t,
        c = e.defaultMenuIsOpen,
        l = c !== void 0 && c,
        u = e.defaultValue,
        d = u === void 0 ? null : u,
        f = e.inputValue,
        p = e.menuIsOpen,
        m = e.onChange,
        h = e.onInputChange,
        g = e.onMenuClose,
        _ = e.onMenuOpen,
        v = e.value,
        y = i(e, o),
        b = r(a.useState(f === void 0 ? s : f), 2),
        x = b[0],
        S = b[1],
        C = r(a.useState(p === void 0 ? l : p), 2),
        w = C[0],
        T = C[1],
        E = r(a.useState(v === void 0 ? d : v), 2),
        D = E[0],
        O = E[1],
        k = a.useCallback(
          function (e, t) {
            (typeof m == `function` && m(e, t), O(e));
          },
          [m],
        ),
        A = a.useCallback(
          function (e, t) {
            var n;
            (typeof h == `function` && (n = h(e, t)), S(n === void 0 ? e : n));
          },
          [h],
        ),
        j = a.useCallback(
          function () {
            (typeof _ == `function` && _(), T(!0));
          },
          [_],
        ),
        M = a.useCallback(
          function () {
            (typeof g == `function` && g(), T(!1));
          },
          [g],
        ),
        N = f === void 0 ? x : f,
        P = p === void 0 ? w : p,
        F = v === void 0 ? D : v;
      return n(
        n({}, y),
        {},
        {
          inputValue: N,
          menuIsOpen: P,
          onChange: k,
          onInputChange: A,
          onMenuClose: M,
          onMenuOpen: j,
          value: F,
        },
      );
    }
    e.useStateManager = s;
  }),
  x = i((e, t) => {
    function n() {
      return (
        (t.exports = n =
          Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports),
        n.apply(null, arguments)
      );
    }
    ((t.exports = n),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports));
  }),
  S = i((e, t) => {
    function n(e, t) {
      if (!(e instanceof t))
        throw TypeError(`Cannot call a class as a function`);
    }
    ((t.exports = n),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports));
  }),
  C = i((e, t) => {
    var n = l();
    function r(e, t) {
      for (var r = 0; r < t.length; r++) {
        var i = t[r];
        ((i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          `value` in i && (i.writable = !0),
          Object.defineProperty(e, n(i.key), i));
      }
    }
    function i(e, t, n) {
      return (
        t && r(e.prototype, t),
        n && r(e, n),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        e
      );
    }
    ((t.exports = i),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports));
  }),
  w = i((e, t) => {
    function n(e, r) {
      return (
        (t.exports = n =
          Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return ((e.__proto__ = t), e);
              }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports),
        n(e, r)
      );
    }
    ((t.exports = n),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports));
  }),
  T = i((e, t) => {
    var n = w();
    function r(e, t) {
      if (typeof t != `function` && t !== null)
        throw TypeError(`Super expression must either be null or a function`);
      ((e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
      })),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        t && n(e, t));
    }
    ((t.exports = r),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports));
  }),
  E = i((e, t) => {
    function n(e) {
      return (
        (t.exports = n =
          Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports),
        n(e)
      );
    }
    ((t.exports = n),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports));
  }),
  D = i((e, t) => {
    function n() {
      try {
        var e = !Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {}),
        );
      } catch {}
      return ((t.exports = n =
        function () {
          return !!e;
        }),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports))();
    }
    ((t.exports = n),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports));
  }),
  O = i((e, t) => {
    function n(e) {
      if (e === void 0)
        throw ReferenceError(
          `this hasn't been initialised - super() hasn't been called`,
        );
      return e;
    }
    ((t.exports = n),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports));
  }),
  k = i((e, t) => {
    var n = s().default,
      r = O();
    function i(e, t) {
      if (t && (n(t) == `object` || typeof t == `function`)) return t;
      if (t !== void 0)
        throw TypeError(
          `Derived constructors may only return object or undefined`,
        );
      return r(e);
    }
    ((t.exports = i),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports));
  }),
  A = i((e, t) => {
    var n = E(),
      r = D(),
      i = k();
    function a(e) {
      var t = r();
      return function () {
        var r,
          a = n(e);
        if (t) {
          var o = n(this).constructor;
          r = Reflect.construct(a, arguments, o);
        } else r = a.apply(this, arguments);
        return i(this, r);
      };
    }
    ((t.exports = a),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports));
  }),
  j = i((e, t) => {
    var n = m();
    function r(e) {
      if (Array.isArray(e)) return n(e);
    }
    ((t.exports = r),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports));
  }),
  M = i((e, t) => {
    function n(e) {
      if (
        (typeof Symbol < `u` && e[Symbol.iterator] != null) ||
        e[`@@iterator`] != null
      )
        return Array.from(e);
    }
    ((t.exports = n),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports));
  }),
  N = i((e, t) => {
    function n() {
      throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    ((t.exports = n),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports));
  }),
  P = i((e, t) => {
    var n = j(),
      r = M(),
      i = h(),
      a = N();
    function o(e) {
      return n(e) || r(e) || i(e) || a();
    }
    ((t.exports = o),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports));
  }),
  F = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    function t(e) {
      if (e.sheet) return e.sheet;
      for (var t = 0; t < document.styleSheets.length; t++)
        if (document.styleSheets[t].ownerNode === e)
          return document.styleSheets[t];
    }
    function n(e) {
      var t = document.createElement(`style`);
      return (
        t.setAttribute(`data-emotion`, e.key),
        e.nonce !== void 0 && t.setAttribute(`nonce`, e.nonce),
        t.appendChild(document.createTextNode(``)),
        t.setAttribute(`data-s`, ``),
        t
      );
    }
    e.StyleSheet = (function () {
      function e(e) {
        var t = this;
        ((this._insertTag = function (e) {
          var n =
            t.tags.length === 0
              ? t.insertionPoint
                ? t.insertionPoint.nextSibling
                : t.prepend
                  ? t.container.firstChild
                  : t.before
              : t.tags[t.tags.length - 1].nextSibling;
          (t.container.insertBefore(e, n), t.tags.push(e));
        }),
          (this.isSpeedy = e.speedy === void 0 || e.speedy),
          (this.tags = []),
          (this.ctr = 0),
          (this.nonce = e.nonce),
          (this.key = e.key),
          (this.container = e.container),
          (this.prepend = e.prepend),
          (this.insertionPoint = e.insertionPoint),
          (this.before = null));
      }
      var r = e.prototype;
      return (
        (r.hydrate = function (e) {
          e.forEach(this._insertTag);
        }),
        (r.insert = function (e) {
          this.ctr % (this.isSpeedy ? 65e3 : 1) == 0 &&
            this._insertTag(n(this));
          var r = this.tags[this.tags.length - 1];
          if (this.isSpeedy) {
            var i = t(r);
            try {
              i.insertRule(e, i.cssRules.length);
            } catch {}
          } else r.appendChild(document.createTextNode(e));
          this.ctr++;
        }),
        (r.flush = function () {
          (this.tags.forEach(function (e) {
            return e.parentNode && e.parentNode.removeChild(e);
          }),
            (this.tags = []),
            (this.ctr = 0));
        }),
        e
      );
    })();
  }),
  I = i((e, t) => {
    t.exports = F();
  }),
  L = i((e, t, n) => {
    (function (n, r) {
      typeof e == `object` && t !== void 0
        ? r(e)
        : typeof define == `function` && define.amd
          ? define([`exports`], r)
          : ((n ||= self), r((n.stylis = {})));
    })(n, function (e) {
      var t = `-ms-`,
        n = `-moz-`,
        r = `-webkit-`,
        i = `comm`,
        a = `rule`,
        o = `decl`,
        s = `@page`,
        c = `@media`,
        l = `@import`,
        u = `@charset`,
        d = `@viewport`,
        f = `@supports`,
        p = `@document`,
        m = `@namespace`,
        h = `@keyframes`,
        g = `@font-face`,
        _ = `@counter-style`,
        v = `@font-feature-values`,
        y = `@layer`,
        b = Math.abs,
        x = String.fromCharCode,
        S = Object.assign;
      function C(e, t) {
        return O(e, 0) ^ 45
          ? (((((((t << 2) ^ O(e, 0)) << 2) ^ O(e, 1)) << 2) ^ O(e, 2)) << 2) ^
              O(e, 3)
          : 0;
      }
      function w(e) {
        return e.trim();
      }
      function T(e, t) {
        return (e = t.exec(e)) ? e[0] : e;
      }
      function E(e, t, n) {
        return e.replace(t, n);
      }
      function D(e, t) {
        return e.indexOf(t);
      }
      function O(e, t) {
        return e.charCodeAt(t) | 0;
      }
      function k(e, t, n) {
        return e.slice(t, n);
      }
      function A(e) {
        return e.length;
      }
      function j(e) {
        return e.length;
      }
      function M(e, t) {
        return (t.push(e), e);
      }
      function N(e, t) {
        return e.map(t).join(``);
      }
      ((e.line = 1),
        (e.column = 1),
        (e.length = 0),
        (e.position = 0),
        (e.character = 0),
        (e.characters = ``));
      function P(t, n, r, i, a, o, s) {
        return {
          value: t,
          root: n,
          parent: r,
          type: i,
          props: a,
          children: o,
          line: e.line,
          column: e.column,
          length: s,
          return: ``,
        };
      }
      function F(e, t) {
        return S(
          P(``, null, null, ``, null, null, 0),
          e,
          { length: -e.length },
          t,
        );
      }
      function I() {
        return e.character;
      }
      function L() {
        return (
          (e.character = e.position > 0 ? O(e.characters, --e.position) : 0),
          e.column--,
          e.character === 10 && ((e.column = 1), e.line--),
          e.character
        );
      }
      function R() {
        return (
          (e.character =
            e.position < e.length ? O(e.characters, e.position++) : 0),
          e.column++,
          e.character === 10 && ((e.column = 1), e.line++),
          e.character
        );
      }
      function z() {
        return O(e.characters, e.position);
      }
      function B() {
        return e.position;
      }
      function V(t, n) {
        return k(e.characters, t, n);
      }
      function H(e) {
        switch (e) {
          case 0:
          case 9:
          case 10:
          case 13:
          case 32:
            return 5;
          case 33:
          case 43:
          case 44:
          case 47:
          case 62:
          case 64:
          case 126:
          case 59:
          case 123:
          case 125:
            return 4;
          case 58:
            return 3;
          case 34:
          case 39:
          case 40:
          case 91:
            return 2;
          case 41:
          case 93:
            return 1;
        }
        return 0;
      }
      function U(t) {
        return (
          (e.line = e.column = 1),
          (e.length = A((e.characters = t))),
          (e.position = 0),
          []
        );
      }
      function W(t) {
        return ((e.characters = ``), t);
      }
      function G(t) {
        return w(V(e.position - 1, q(t === 91 ? t + 2 : t === 40 ? t + 1 : t)));
      }
      function K(e) {
        return W(te(U(e)));
      }
      function ee(t) {
        for (; (e.character = z()) && e.character < 33;) R();
        return H(t) > 2 || H(e.character) > 3 ? `` : ` `;
      }
      function te(t) {
        for (; R();)
          switch (H(e.character)) {
            case 0:
              M(Y(e.position - 1), t);
              break;
            case 2:
              M(G(e.character), t);
              break;
            default:
              M(x(e.character), t);
          }
        return t;
      }
      function ne(t, n) {
        for (
          ;
          --n &&
          R() &&
          !(
            e.character < 48 ||
            e.character > 102 ||
            (e.character > 57 && e.character < 65) ||
            (e.character > 70 && e.character < 97)
          );
        );
        return V(t, B() + (n < 6 && z() == 32 && R() == 32));
      }
      function q(t) {
        for (; R();)
          switch (e.character) {
            case t:
              return e.position;
            case 34:
            case 39:
              t !== 34 && t !== 39 && q(e.character);
              break;
            case 40:
              t === 41 && q(t);
              break;
            case 92:
              R();
          }
        return e.position;
      }
      function J(t, n) {
        for (
          ;
          R() &&
          t + e.character !== 57 &&
          (t + e.character !== 84 || z() !== 47);
        );
        return `/*` + V(n, e.position - 1) + `*` + x(t === 47 ? t : R());
      }
      function Y(t) {
        for (; !H(z());) R();
        return V(t, e.position);
      }
      function X(e) {
        return W(Z(``, null, null, null, [``], (e = U(e)), 0, [0], e));
      }
      function Z(e, t, n, r, i, a, o, s, c) {
        for (
          var l = 0,
            u = 0,
            d = o,
            f = 0,
            p = 0,
            m = 0,
            h = 1,
            g = 1,
            _ = 1,
            v = 0,
            y = ``,
            b = i,
            S = a,
            C = r,
            w = y;
          g;
        )
          switch (((m = v), (v = R()))) {
            case 40:
              if (m != 108 && O(w, d - 1) == 58) {
                D((w += E(G(v), `&`, `&\f`)), `&\f`) != -1 && (_ = -1);
                break;
              }
            case 34:
            case 39:
            case 91:
              w += G(v);
              break;
            case 9:
            case 10:
            case 13:
            case 32:
              w += ee(m);
              break;
            case 92:
              w += ne(B() - 1, 7);
              continue;
            case 47:
              switch (z()) {
                case 42:
                case 47:
                  M(Q(J(R(), B()), t, n), c);
                  break;
                default:
                  w += `/`;
              }
              break;
            case 123 * h:
              s[l++] = A(w) * _;
            case 125 * h:
            case 59:
            case 0:
              switch (v) {
                case 0:
                case 125:
                  g = 0;
                case 59 + u:
                  (_ == -1 && (w = E(w, /\f/g, ``)),
                    p > 0 &&
                      A(w) - d &&
                      M(
                        p > 32
                          ? ie(w + `;`, r, n, d - 1)
                          : ie(E(w, ` `, ``) + `;`, r, n, d - 2),
                        c,
                      ));
                  break;
                case 59:
                  w += `;`;
                default:
                  if (
                    (M(
                      (C = re(w, t, n, l, u, i, s, y, (b = []), (S = []), d)),
                      a,
                    ),
                    v === 123)
                  ) {
                    if (u === 0) Z(w, t, C, C, b, a, d, s, S);
                    else
                      switch (f === 99 && O(w, 3) === 110 ? 100 : f) {
                        case 100:
                        case 108:
                        case 109:
                        case 115:
                          Z(
                            e,
                            C,
                            C,
                            r &&
                              M(re(e, C, C, 0, 0, i, s, y, i, (b = []), d), S),
                            i,
                            S,
                            d,
                            s,
                            r ? b : S,
                          );
                          break;
                        default:
                          Z(w, C, C, C, [``], S, 0, s, S);
                      }
                  }
              }
              ((l = u = p = 0), (h = _ = 1), (y = w = ``), (d = o));
              break;
            case 58:
              ((d = 1 + A(w)), (p = m));
            default:
              if (h < 1) {
                if (v == 123) --h;
                else if (v == 125 && h++ == 0 && L() == 125) continue;
              }
              switch (((w += x(v)), v * h)) {
                case 38:
                  _ = u > 0 ? 1 : ((w += `\f`), -1);
                  break;
                case 44:
                  ((s[l++] = (A(w) - 1) * _), (_ = 1));
                  break;
                case 64:
                  (z() === 45 && (w += G(R())),
                    (f = z()),
                    (u = d = A((y = w += Y(B())))),
                    v++);
                  break;
                case 45:
                  m === 45 && A(w) == 2 && (h = 0);
              }
          }
        return a;
      }
      function re(e, t, n, r, i, o, s, c, l, u, d) {
        for (
          var f = i - 1, p = i === 0 ? o : [``], m = j(p), h = 0, g = 0, _ = 0;
          h < r;
          ++h
        )
          for (
            var v = 0, y = k(e, f + 1, (f = b((g = s[h])))), x = e;
            v < m;
            ++v
          )
            (x = w(g > 0 ? p[v] + ` ` + y : E(y, /&\f/g, p[v]))) &&
              (l[_++] = x);
        return P(e, t, n, i === 0 ? a : c, l, u, d);
      }
      function Q(e, t, n) {
        return P(e, t, n, i, x(I()), k(e, 2, -2), 0);
      }
      function ie(e, t, n, r) {
        return P(e, t, n, o, k(e, 0, r), k(e, r + 1, -1), r);
      }
      function ae(e, i, a) {
        switch (C(e, i)) {
          case 5103:
            return r + `print-` + e + e;
          case 5737:
          case 4201:
          case 3177:
          case 3433:
          case 1641:
          case 4457:
          case 2921:
          case 5572:
          case 6356:
          case 5844:
          case 3191:
          case 6645:
          case 3005:
          case 6391:
          case 5879:
          case 5623:
          case 6135:
          case 4599:
          case 4855:
          case 4215:
          case 6389:
          case 5109:
          case 5365:
          case 5621:
          case 3829:
            return r + e + e;
          case 4789:
            return n + e + e;
          case 5349:
          case 4246:
          case 4810:
          case 6968:
          case 2756:
            return r + e + n + e + t + e + e;
          case 5936:
            switch (O(e, i + 11)) {
              case 114:
                return r + e + t + E(e, /[svh]\w+-[tblr]{2}/, `tb`) + e;
              case 108:
                return r + e + t + E(e, /[svh]\w+-[tblr]{2}/, `tb-rl`) + e;
              case 45:
                return r + e + t + E(e, /[svh]\w+-[tblr]{2}/, `lr`) + e;
            }
          case 6828:
          case 4268:
          case 2903:
            return r + e + t + e + e;
          case 6165:
            return r + e + t + `flex-` + e + e;
          case 5187:
            return (
              r +
              e +
              E(e, /(\w+).+(:[^]+)/, r + `box-$1$2` + t + `flex-$1$2`) +
              e
            );
          case 5443:
            return (
              r +
              e +
              t +
              `flex-item-` +
              E(e, /flex-|-self/g, ``) +
              (T(e, /flex-|baseline/)
                ? ``
                : t + `grid-row-` + E(e, /flex-|-self/g, ``)) +
              e
            );
          case 4675:
            return (
              r +
              e +
              t +
              `flex-line-pack` +
              E(e, /align-content|flex-|-self/g, ``) +
              e
            );
          case 5548:
            return r + e + t + E(e, `shrink`, `negative`) + e;
          case 5292:
            return r + e + t + E(e, `basis`, `preferred-size`) + e;
          case 6060:
            return (
              r +
              `box-` +
              E(e, `-grow`, ``) +
              r +
              e +
              t +
              E(e, `grow`, `positive`) +
              e
            );
          case 4554:
            return r + E(e, /([^-])(transform)/g, `$1` + r + `$2`) + e;
          case 6187:
            return (
              E(
                E(E(e, /(zoom-|grab)/, r + `$1`), /(image-set)/, r + `$1`),
                e,
                ``,
              ) + e
            );
          case 5495:
          case 3959:
            return E(e, /(image-set\([^]*)/, r + "$1$`$1");
          case 4968:
            return (
              E(
                E(
                  e,
                  /(.+:)(flex-)?(.*)/,
                  r + `box-pack:$3` + t + `flex-pack:$3`,
                ),
                /s.+-b[^;]+/,
                `justify`,
              ) +
              r +
              e +
              e
            );
          case 4200:
            if (!T(e, /flex-|baseline/))
              return t + `grid-column-align` + k(e, i) + e;
            break;
          case 2592:
          case 3360:
            return t + E(e, `template-`, ``) + e;
          case 4384:
          case 3616:
            return a &&
              a.some(function (e, t) {
                return ((i = t), T(e.props, /grid-\w+-end/));
              })
              ? ~D(e + (a = a[i].value), `span`)
                ? e
                : t +
                  E(e, `-start`, ``) +
                  e +
                  t +
                  `grid-row-span:` +
                  (~D(a, `span`) ? T(a, /\d+/) : +T(a, /\d+/) - T(e, /\d+/)) +
                  `;`
              : t + E(e, `-start`, ``) + e;
          case 4896:
          case 4128:
            return a &&
              a.some(function (e) {
                return T(e.props, /grid-\w+-start/);
              })
              ? e
              : t + E(E(e, `-end`, `-span`), `span `, ``) + e;
          case 4095:
          case 3583:
          case 4068:
          case 2532:
            return E(e, /(.+)-inline(.+)/, r + `$1$2`) + e;
          case 8116:
          case 7059:
          case 5753:
          case 5535:
          case 5445:
          case 5701:
          case 4933:
          case 4677:
          case 5533:
          case 5789:
          case 5021:
          case 4765:
            if (A(e) - 1 - i > 6)
              switch (O(e, i + 1)) {
                case 109:
                  if (O(e, i + 4) !== 45) break;
                case 102:
                  return (
                    E(
                      e,
                      /(.+:)(.+)-([^]+)/,
                      `$1` +
                        r +
                        `$2-$3$1` +
                        n +
                        (O(e, i + 3) == 108 ? `$3` : `$2-$3`),
                    ) + e
                  );
                case 115:
                  return ~D(e, `stretch`)
                    ? ae(E(e, `stretch`, `fill-available`), i, a) + e
                    : e;
              }
            break;
          case 5152:
          case 5920:
            return E(
              e,
              /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,
              function (n, r, i, a, o, s, c) {
                return (
                  t +
                  r +
                  `:` +
                  i +
                  c +
                  (a ? t + r + `-span:` + (o ? s : +s - i) + c : ``) +
                  e
                );
              },
            );
          case 4949:
            if (O(e, i + 6) === 121) return E(e, `:`, `:` + r) + e;
            break;
          case 6444:
            switch (O(e, O(e, 14) === 45 ? 18 : 11)) {
              case 120:
                return (
                  E(
                    e,
                    /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,
                    `$1` +
                      r +
                      (O(e, 14) === 45 ? `inline-` : ``) +
                      `box$3$1` +
                      r +
                      `$2$3$1` +
                      t +
                      `$2box$3`,
                  ) + e
                );
              case 100:
                return E(e, `:`, `:` + t) + e;
            }
            break;
          case 5719:
          case 2647:
          case 2135:
          case 3927:
          case 2391:
            return E(e, `scroll-`, `scroll-snap-`) + e;
        }
        return e;
      }
      function $(e, t) {
        for (var n = ``, r = j(e), i = 0; i < r; i++)
          n += t(e[i], i, e, t) || ``;
        return n;
      }
      function oe(e, t, n, r) {
        switch (e.type) {
          case y:
            if (e.children.length) break;
          case l:
          case o:
            return (e.return = e.return || e.value);
          case i:
            return ``;
          case h:
            return (e.return = e.value + `{` + $(e.children, r) + `}`);
          case a:
            e.value = e.props.join(`,`);
        }
        return A((n = $(e.children, r)))
          ? (e.return = e.value + `{` + n + `}`)
          : ``;
      }
      function se(e) {
        var t = j(e);
        return function (n, r, i, a) {
          for (var o = ``, s = 0; s < t; s++) o += e[s](n, r, i, a) || ``;
          return o;
        };
      }
      function ce(e) {
        return function (t) {
          t.root || ((t = t.return) && e(t));
        };
      }
      function le(e, i, s, c) {
        if (e.length > -1 && !e.return)
          switch (e.type) {
            case o:
              e.return = ae(e.value, e.length, s);
              return;
            case h:
              return $([F(e, { value: E(e.value, `@`, `@` + r) })], c);
            case a:
              if (e.length)
                return N(e.props, function (i) {
                  switch (T(i, /(::plac\w+|:read-\w+)/)) {
                    case `:read-only`:
                    case `:read-write`:
                      return $(
                        [
                          F(e, {
                            props: [E(i, /:(read-\w+)/, `:` + n + `$1`)],
                          }),
                        ],
                        c,
                      );
                    case `::placeholder`:
                      return $(
                        [
                          F(e, {
                            props: [E(i, /:(plac\w+)/, `:` + r + `input-$1`)],
                          }),
                          F(e, { props: [E(i, /:(plac\w+)/, `:` + n + `$1`)] }),
                          F(e, { props: [E(i, /:(plac\w+)/, t + `input-$1`)] }),
                        ],
                        c,
                      );
                  }
                  return ``;
                });
          }
      }
      function ue(e) {
        switch (e.type) {
          case a:
            e.props = e.props.map(function (t) {
              return N(K(t), function (t, n, r) {
                switch (O(t, 0)) {
                  case 12:
                    return k(t, 1, A(t));
                  case 0:
                  case 40:
                  case 43:
                  case 62:
                  case 126:
                    return t;
                  case 58:
                    r[++n] === `global` &&
                      ((r[n] = ``), (r[++n] = `\f` + k(r[n], (n = 1), -1)));
                  case 32:
                    return n === 1 ? `` : t;
                  default:
                    switch (n) {
                      case 0:
                        return ((e = t), j(r) > 1 ? `` : t);
                      case (n = j(r) - 1):
                      case 2:
                        return n === 2 ? t + e + e : t + e;
                      default:
                        return t;
                    }
                }
              });
            });
        }
      }
      ((e.CHARSET = u),
        (e.COMMENT = i),
        (e.COUNTER_STYLE = _),
        (e.DECLARATION = o),
        (e.DOCUMENT = p),
        (e.FONT_FACE = g),
        (e.FONT_FEATURE_VALUES = v),
        (e.IMPORT = l),
        (e.KEYFRAMES = h),
        (e.LAYER = y),
        (e.MEDIA = c),
        (e.MOZ = n),
        (e.MS = t),
        (e.NAMESPACE = m),
        (e.PAGE = s),
        (e.RULESET = a),
        (e.SUPPORTS = f),
        (e.VIEWPORT = d),
        (e.WEBKIT = r),
        (e.abs = b),
        (e.alloc = U),
        (e.append = M),
        (e.assign = S),
        (e.caret = B),
        (e.char = I),
        (e.charat = O),
        (e.combine = N),
        (e.comment = Q),
        (e.commenter = J),
        (e.compile = X),
        (e.copy = F),
        (e.dealloc = W),
        (e.declaration = ie),
        (e.delimit = G),
        (e.delimiter = q),
        (e.escaping = ne),
        (e.from = x),
        (e.hash = C),
        (e.identifier = Y),
        (e.indexof = D),
        (e.match = T),
        (e.middleware = se),
        (e.namespace = ue),
        (e.next = R),
        (e.node = P),
        (e.parse = Z),
        (e.peek = z),
        (e.prefix = ae),
        (e.prefixer = le),
        (e.prev = L),
        (e.replace = E),
        (e.ruleset = re),
        (e.rulesheet = ce),
        (e.serialize = $),
        (e.sizeof = j),
        (e.slice = V),
        (e.stringify = oe),
        (e.strlen = A),
        (e.substr = k),
        (e.token = H),
        (e.tokenize = K),
        (e.tokenizer = te),
        (e.trim = w),
        (e.whitespace = ee),
        Object.defineProperty(e, "__esModule", { value: !0 }));
    });
  }),
  R = i((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = function (e) {
        var t = new WeakMap();
        return function (n) {
          if (t.has(n)) return t.get(n);
          var r = e(n);
          return (t.set(n, r), r);
        };
      }));
  }),
  z = i((e, t) => {
    t.exports = R();
  }),
  B = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    function t(e) {
      var t = Object.create(null);
      return function (n) {
        return (t[n] === void 0 && (t[n] = e(n)), t[n]);
      };
    }
    e.default = t;
  }),
  V = i((e, t) => {
    t.exports = B();
  }),
  H = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    var t = I(),
      n = L(),
      r = z(),
      i = V();
    function a(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var o = a(r),
      s = a(i),
      c = function (e, t, r) {
        for (
          var i = 0, a = 0;
          (i = a),
            (a = n.peek()),
            i === 38 && a === 12 && (t[r] = 1),
            !n.token(a);
        )
          n.next();
        return n.slice(e, n.position);
      },
      l = function (e, t) {
        var r = -1,
          i = 44;
        do
          switch (n.token(i)) {
            case 0:
              (i === 38 && n.peek() === 12 && (t[r] = 1),
                (e[r] += c(n.position - 1, t, r)));
              break;
            case 2:
              e[r] += n.delimit(i);
              break;
            case 4:
              if (i === 44) {
                ((e[++r] = n.peek() === 58 ? `&\f` : ``), (t[r] = e[r].length));
                break;
              }
            default:
              e[r] += n.from(i);
          }
        while ((i = n.next()));
        return e;
      },
      u = function (e, t) {
        return n.dealloc(l(n.alloc(e), t));
      },
      d = new WeakMap(),
      f = function (e) {
        if (!(e.type !== `rule` || !e.parent || e.length < 1)) {
          for (
            var t = e.value,
              n = e.parent,
              r = e.column === n.column && e.line === n.line;
            n.type !== `rule`;
          )
            if (((n = n.parent), !n)) return;
          if (
            (e.props.length !== 1 || t.charCodeAt(0) === 58 || d.get(n)) &&
            !r
          ) {
            d.set(e, !0);
            for (
              var i = [], a = u(t, i), o = n.props, s = 0, c = 0;
              s < a.length;
              s++
            )
              for (var l = 0; l < o.length; l++, c++)
                e.props[c] = i[s]
                  ? a[s].replace(/&\f/g, o[l])
                  : o[l] + ` ` + a[s];
          }
        }
      },
      p = function (e) {
        if (e.type === `decl`) {
          var t = e.value;
          t.charCodeAt(0) === 108 &&
            t.charCodeAt(2) === 98 &&
            ((e.return = ``), (e.value = ``));
        }
      };
    function m(e, t) {
      switch (n.hash(e, t)) {
        case 5103:
          return n.WEBKIT + `print-` + e + e;
        case 5737:
        case 4201:
        case 3177:
        case 3433:
        case 1641:
        case 4457:
        case 2921:
        case 5572:
        case 6356:
        case 5844:
        case 3191:
        case 6645:
        case 3005:
        case 6391:
        case 5879:
        case 5623:
        case 6135:
        case 4599:
        case 4855:
        case 4215:
        case 6389:
        case 5109:
        case 5365:
        case 5621:
        case 3829:
          return n.WEBKIT + e + e;
        case 5349:
        case 4246:
        case 4810:
        case 6968:
        case 2756:
          return n.WEBKIT + e + n.MOZ + e + n.MS + e + e;
        case 6828:
        case 4268:
          return n.WEBKIT + e + n.MS + e + e;
        case 6165:
          return n.WEBKIT + e + n.MS + `flex-` + e + e;
        case 5187:
          return (
            n.WEBKIT +
            e +
            n.replace(
              e,
              /(\w+).+(:[^]+)/,
              n.WEBKIT + `box-$1$2` + n.MS + `flex-$1$2`,
            ) +
            e
          );
        case 5443:
          return (
            n.WEBKIT +
            e +
            n.MS +
            `flex-item-` +
            n.replace(e, /flex-|-self/, ``) +
            e
          );
        case 4675:
          return (
            n.WEBKIT +
            e +
            n.MS +
            `flex-line-pack` +
            n.replace(e, /align-content|flex-|-self/, ``) +
            e
          );
        case 5548:
          return n.WEBKIT + e + n.MS + n.replace(e, `shrink`, `negative`) + e;
        case 5292:
          return (
            n.WEBKIT + e + n.MS + n.replace(e, `basis`, `preferred-size`) + e
          );
        case 6060:
          return (
            n.WEBKIT +
            `box-` +
            n.replace(e, `-grow`, ``) +
            n.WEBKIT +
            e +
            n.MS +
            n.replace(e, `grow`, `positive`) +
            e
          );
        case 4554:
          return (
            n.WEBKIT +
            n.replace(e, /([^-])(transform)/g, `$1` + n.WEBKIT + `$2`) +
            e
          );
        case 6187:
          return (
            n.replace(
              n.replace(
                n.replace(e, /(zoom-|grab)/, n.WEBKIT + `$1`),
                /(image-set)/,
                n.WEBKIT + `$1`,
              ),
              e,
              ``,
            ) + e
          );
        case 5495:
        case 3959:
          return n.replace(e, /(image-set\([^]*)/, n.WEBKIT + "$1$`$1");
        case 4968:
          return (
            n.replace(
              n.replace(
                e,
                /(.+:)(flex-)?(.*)/,
                n.WEBKIT + `box-pack:$3` + n.MS + `flex-pack:$3`,
              ),
              /s.+-b[^;]+/,
              `justify`,
            ) +
            n.WEBKIT +
            e +
            e
          );
        case 4095:
        case 3583:
        case 4068:
        case 2532:
          return n.replace(e, /(.+)-inline(.+)/, n.WEBKIT + `$1$2`) + e;
        case 8116:
        case 7059:
        case 5753:
        case 5535:
        case 5445:
        case 5701:
        case 4933:
        case 4677:
        case 5533:
        case 5789:
        case 5021:
        case 4765:
          if (n.strlen(e) - 1 - t > 6)
            switch (n.charat(e, t + 1)) {
              case 109:
                if (n.charat(e, t + 4) !== 45) break;
              case 102:
                return (
                  n.replace(
                    e,
                    /(.+:)(.+)-([^]+)/,
                    `$1` +
                      n.WEBKIT +
                      `$2-$3$1` +
                      n.MOZ +
                      (n.charat(e, t + 3) == 108 ? `$3` : `$2-$3`),
                  ) + e
                );
              case 115:
                return ~n.indexof(e, `stretch`)
                  ? m(n.replace(e, `stretch`, `fill-available`), t) + e
                  : e;
            }
          break;
        case 4949:
          if (n.charat(e, t + 1) !== 115) break;
        case 6444:
          switch (
            n.charat(e, n.strlen(e) - 3 - (~n.indexof(e, `!important`) && 10))
          ) {
            case 107:
              return n.replace(e, `:`, `:` + n.WEBKIT) + e;
            case 101:
              return (
                n.replace(
                  e,
                  /(.+:)([^;!]+)(;|!.+)?/,
                  `$1` +
                    n.WEBKIT +
                    (n.charat(e, 14) === 45 ? `inline-` : ``) +
                    `box$3$1` +
                    n.WEBKIT +
                    `$2$3$1` +
                    n.MS +
                    `$2box$3`,
                ) + e
              );
          }
          break;
        case 5936:
          switch (n.charat(e, t + 11)) {
            case 114:
              return (
                n.WEBKIT +
                e +
                n.MS +
                n.replace(e, /[svh]\w+-[tblr]{2}/, `tb`) +
                e
              );
            case 108:
              return (
                n.WEBKIT +
                e +
                n.MS +
                n.replace(e, /[svh]\w+-[tblr]{2}/, `tb-rl`) +
                e
              );
            case 45:
              return (
                n.WEBKIT +
                e +
                n.MS +
                n.replace(e, /[svh]\w+-[tblr]{2}/, `lr`) +
                e
              );
          }
          return n.WEBKIT + e + n.MS + e + e;
      }
      return e;
    }
    var h = function (e, t, r, i) {
        if (e.length > -1 && !e.return)
          switch (e.type) {
            case n.DECLARATION:
              e.return = m(e.value, e.length);
              break;
            case n.KEYFRAMES:
              return n.serialize(
                [n.copy(e, { value: n.replace(e.value, `@`, `@` + n.WEBKIT) })],
                i,
              );
            case n.RULESET:
              if (e.length)
                return n.combine(e.props, function (t) {
                  switch (n.match(t, /(::plac\w+|:read-\w+)/)) {
                    case `:read-only`:
                    case `:read-write`:
                      return n.serialize(
                        [
                          n.copy(e, {
                            props: [
                              n.replace(t, /:(read-\w+)/, `:` + n.MOZ + `$1`),
                            ],
                          }),
                        ],
                        i,
                      );
                    case `::placeholder`:
                      return n.serialize(
                        [
                          n.copy(e, {
                            props: [
                              n.replace(
                                t,
                                /:(plac\w+)/,
                                `:` + n.WEBKIT + `input-$1`,
                              ),
                            ],
                          }),
                          n.copy(e, {
                            props: [
                              n.replace(t, /:(plac\w+)/, `:` + n.MOZ + `$1`),
                            ],
                          }),
                          n.copy(e, {
                            props: [
                              n.replace(t, /:(plac\w+)/, n.MS + `input-$1`),
                            ],
                          }),
                        ],
                        i,
                      );
                  }
                  return ``;
                });
          }
      },
      g = typeof document < `u`,
      _ = g
        ? void 0
        : o.default(function () {
            return s.default(function () {
              var e = {};
              return function (t) {
                return e[t];
              };
            });
          }),
      v = [h];
    e.default = function (e) {
      var r = e.key;
      if (g && r === `css`) {
        var i = document.querySelectorAll(`style[data-emotion]:not([data-s])`);
        Array.prototype.forEach.call(i, function (e) {
          e.getAttribute(`data-emotion`).indexOf(` `) !== -1 &&
            (document.head.appendChild(e), e.setAttribute(`data-s`, ``));
        });
      }
      var a = e.stylisPlugins || v,
        o = {},
        s,
        c = [];
      g &&
        ((s = e.container || document.head),
        Array.prototype.forEach.call(
          document.querySelectorAll(`style[data-emotion^="` + r + ` "]`),
          function (e) {
            for (
              var t = e.getAttribute(`data-emotion`).split(` `), n = 1;
              n < t.length;
              n++
            )
              o[t[n]] = !0;
            c.push(e);
          },
        ));
      var l,
        u = [f, p];
      if (g) {
        var d,
          m = [
            n.stringify,
            n.rulesheet(function (e) {
              d.insert(e);
            }),
          ],
          h = n.middleware(u.concat(a, m)),
          y = function (e) {
            return n.serialize(n.compile(e), h);
          };
        l = function (e, t, n, r) {
          ((d = n),
            y(e ? e + `{` + t.styles + `}` : t.styles),
            r && (T.inserted[t.name] = !0));
        };
      } else {
        var b = [n.stringify],
          x = n.middleware(u.concat(a, b)),
          S = function (e) {
            return n.serialize(n.compile(e), x);
          },
          C = _(a)(r),
          w = function (e, t) {
            var n = t.name;
            return (
              C[n] === void 0 &&
                (C[n] = S(e ? e + `{` + t.styles + `}` : t.styles)),
              C[n]
            );
          };
        l = function (e, t, n, r) {
          var i = t.name,
            a = w(e, t);
          if (T.compat === void 0) return (r && (T.inserted[i] = !0), a);
          if (r) T.inserted[i] = a;
          else return a;
        };
      }
      var T = {
        key: r,
        sheet: new t.StyleSheet({
          key: r,
          container: s,
          nonce: e.nonce,
          speedy: e.speedy,
          prepend: e.prepend,
          insertionPoint: e.insertionPoint,
        }),
        nonce: e.nonce,
        inserted: o,
        registered: {},
        insert: l,
      };
      return (T.sheet.hydrate(c), T);
    };
  }),
  U = i((e, t) => {
    t.exports = H();
  }),
  W = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    var t = o();
    function n(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var r = n(t);
    e.default = function (e, t) {
      return r.default(e, t);
    };
  }),
  G = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    var t = typeof document < `u`;
    function n(e, t, n) {
      var r = ``;
      return (
        n.split(` `).forEach(function (n) {
          e[n] === void 0 ? (r += n + ` `) : t.push(e[n] + `;`);
        }),
        r
      );
    }
    var r = function (e, n, r) {
      var i = e.key + `-` + n.name;
      (r === !1 || (t === !1 && e.compat !== void 0)) &&
        e.registered[i] === void 0 &&
        (e.registered[i] = n.styles);
    };
    ((e.getRegisteredStyles = n),
      (e.insertStyles = function (e, n, i) {
        r(e, n, i);
        var a = e.key + `-` + n.name;
        if (e.inserted[n.name] === void 0) {
          var o = ``,
            s = n;
          do {
            var c = e.insert(n === s ? `.` + a : ``, s, e.sheet, !0);
            (!t && c !== void 0 && (o += c), (s = s.next));
          } while (s !== void 0);
          if (!t && o.length !== 0) return o;
        }
      }),
      (e.registerStyles = r));
  }),
  K = i((e, t) => {
    t.exports = G();
  }),
  ee = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    function t(e) {
      for (var t = 0, n, r = 0, i = e.length; i >= 4; ++r, i -= 4)
        ((n =
          (e.charCodeAt(r) & 255) |
          ((e.charCodeAt(++r) & 255) << 8) |
          ((e.charCodeAt(++r) & 255) << 16) |
          ((e.charCodeAt(++r) & 255) << 24)),
          (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
          (n ^= n >>> 24),
          (t =
            ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)) ^
            ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16))));
      switch (i) {
        case 3:
          t ^= (e.charCodeAt(r + 2) & 255) << 16;
        case 2:
          t ^= (e.charCodeAt(r + 1) & 255) << 8;
        case 1:
          ((t ^= e.charCodeAt(r) & 255),
            (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
      }
      return (
        (t ^= t >>> 13),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
        ((t ^ (t >>> 15)) >>> 0).toString(36)
      );
    }
    e.default = t;
  }),
  te = i((e, t) => {
    t.exports = ee();
  }),
  ne = i((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = {
        animationIterationCount: 1,
        aspectRatio: 1,
        borderImageOutset: 1,
        borderImageSlice: 1,
        borderImageWidth: 1,
        boxFlex: 1,
        boxFlexGroup: 1,
        boxOrdinalGroup: 1,
        columnCount: 1,
        columns: 1,
        flex: 1,
        flexGrow: 1,
        flexPositive: 1,
        flexShrink: 1,
        flexNegative: 1,
        flexOrder: 1,
        gridRow: 1,
        gridRowEnd: 1,
        gridRowSpan: 1,
        gridRowStart: 1,
        gridColumn: 1,
        gridColumnEnd: 1,
        gridColumnSpan: 1,
        gridColumnStart: 1,
        msGridRow: 1,
        msGridRowSpan: 1,
        msGridColumn: 1,
        msGridColumnSpan: 1,
        fontWeight: 1,
        lineHeight: 1,
        opacity: 1,
        order: 1,
        orphans: 1,
        tabSize: 1,
        widows: 1,
        zIndex: 1,
        zoom: 1,
        WebkitLineClamp: 1,
        fillOpacity: 1,
        floodOpacity: 1,
        stopOpacity: 1,
        strokeDasharray: 1,
        strokeDashoffset: 1,
        strokeMiterlimit: 1,
        strokeOpacity: 1,
        strokeWidth: 1,
      }));
  }),
  q = i((e, t) => {
    t.exports = ne();
  }),
  J = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    var t = te(),
      n = q(),
      r = V();
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var a = i(t),
      o = i(n),
      s = i(r),
      c = /[A-Z]|^ms/g,
      l = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
      u = function (e) {
        return e.charCodeAt(1) === 45;
      },
      d = function (e) {
        return e != null && typeof e != `boolean`;
      },
      f = s.default(function (e) {
        return u(e) ? e : e.replace(c, `-$&`).toLowerCase();
      }),
      p = function (e, t) {
        switch (e) {
          case `animation`:
          case `animationName`:
            if (typeof t == `string`)
              return t.replace(l, function (e, t, n) {
                return ((_ = { name: t, styles: n, next: _ }), t);
              });
        }
        return o.default[e] !== 1 && !u(e) && typeof t == `number` && t !== 0
          ? t + `px`
          : t;
      };
    function m(e, t, n) {
      if (n == null) return ``;
      if (n.__emotion_styles !== void 0) return n;
      switch (typeof n) {
        case `boolean`:
          return ``;
        case `object`:
          if (n.anim === 1)
            return ((_ = { name: n.name, styles: n.styles, next: _ }), n.name);
          if (n.styles !== void 0) {
            var r = n.next;
            if (r !== void 0)
              for (; r !== void 0;)
                ((_ = { name: r.name, styles: r.styles, next: _ }),
                  (r = r.next));
            return n.styles + `;`;
          }
          return h(e, t, n);
        case `function`:
          if (e !== void 0) {
            var i = _,
              a = n(e);
            return ((_ = i), m(e, t, a));
          }
      }
      if (t == null) return n;
      var o = t[n];
      return o === void 0 ? n : o;
    }
    function h(e, t, n) {
      var r = ``;
      if (Array.isArray(n))
        for (var i = 0; i < n.length; i++) r += m(e, t, n[i]) + `;`;
      else
        for (var a in n) {
          var o = n[a];
          if (typeof o != `object`)
            t != null && t[o] !== void 0
              ? (r += a + `{` + t[o] + `}`)
              : d(o) && (r += f(a) + `:` + p(a, o) + `;`);
          else if (
            Array.isArray(o) &&
            typeof o[0] == `string` &&
            (t == null || t[o[0]] === void 0)
          )
            for (var s = 0; s < o.length; s++)
              d(o[s]) && (r += f(a) + `:` + p(a, o[s]) + `;`);
          else {
            var c = m(e, t, o);
            switch (a) {
              case `animation`:
              case `animationName`:
                r += f(a) + `:` + c + `;`;
                break;
              default:
                r += a + `{` + c + `}`;
            }
          }
        }
      return r;
    }
    var g = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
      _;
    e.serializeStyles = function (e, t, n) {
      if (
        e.length === 1 &&
        typeof e[0] == `object` &&
        e[0] !== null &&
        e[0].styles !== void 0
      )
        return e[0];
      var r = !0,
        i = ``;
      _ = void 0;
      var o = e[0];
      o == null || o.raw === void 0
        ? ((r = !1), (i += m(n, t, o)))
        : (i += o[0]);
      for (var s = 1; s < e.length; s++)
        ((i += m(n, t, e[s])), r && (i += o[s]));
      g.lastIndex = 0;
      for (var c = ``, l; (l = g.exec(i)) !== null;) c += `-` + l[1];
      return { name: a.default(i) + c, styles: i, next: _ };
    };
  }),
  Y = i((e, t) => {
    t.exports = J();
  }),
  X = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = t();
    function r(e) {
      if (e && e.__esModule) return e;
      var t = Object.create(null);
      return (
        e &&
          Object.keys(e).forEach(function (n) {
            if (n !== "default") {
              var r = Object.getOwnPropertyDescriptor(e, n);
              Object.defineProperty(
                t,
                n,
                r.get
                  ? r
                  : {
                      enumerable: !0,
                      get: function () {
                        return e[n];
                      },
                    },
              );
            }
          }),
        (t.default = e),
        Object.freeze(t)
      );
    }
    var i = r(n),
      a = typeof document < `u`,
      o = function (e) {
        return e();
      },
      s = i.useInsertionEffect ? i.useInsertionEffect : !1,
      c = (a && s) || o,
      l = s || i.useLayoutEffect;
    ((e.useInsertionEffectAlwaysWithSyncFallback = c),
      (e.useInsertionEffectWithLayoutFallback = l));
  }),
  Z = i((e, t) => {
    t.exports = X();
  }),
  re = i((e) => {
    var n = t(),
      r = U(),
      i = x(),
      a = z(),
      o = W(),
      s = K(),
      c = Y(),
      l = Z();
    function u(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function d(e) {
      if (e && e.__esModule) return e;
      var t = Object.create(null);
      return (
        e &&
          Object.keys(e).forEach(function (n) {
            if (n !== "default") {
              var r = Object.getOwnPropertyDescriptor(e, n);
              Object.defineProperty(
                t,
                n,
                r.get
                  ? r
                  : {
                      enumerable: !0,
                      get: function () {
                        return e[n];
                      },
                    },
              );
            }
          }),
        (t.default = e),
        Object.freeze(t)
      );
    }
    var f = d(n),
      p = u(r),
      m = u(a),
      h = typeof document < `u`,
      g = {}.hasOwnProperty,
      _ = f.createContext(
        typeof HTMLElement < `u` ? p.default({ key: `css` }) : null,
      ),
      v = _.Provider,
      y = function () {
        return n.useContext(_);
      };
    ((e.withEmotionCache = function (e) {
      return n.forwardRef(function (t, r) {
        return e(t, n.useContext(_), r);
      });
    }),
      h ||
        (e.withEmotionCache = function (e) {
          return function (t) {
            var r = n.useContext(_);
            return r === null
              ? ((r = p.default({ key: `css` })),
                f.createElement(_.Provider, { value: r }, e(t, r)))
              : e(t, r);
          };
        }));
    var b = f.createContext({}),
      S = function () {
        return f.useContext(b);
      },
      C = function (e, t) {
        return typeof t == `function` ? t(e) : i({}, e, t);
      },
      w = m.default(function (e) {
        return m.default(function (t) {
          return C(e, t);
        });
      }),
      T = function (e) {
        var t = f.useContext(b);
        return (
          e.theme !== t && (t = w(t)(e.theme)),
          f.createElement(b.Provider, { value: t }, e.children)
        );
      };
    function E(e) {
      var t = e.displayName || e.name || `Component`,
        n = f.forwardRef(function (t, n) {
          var r = f.useContext(b);
          return f.createElement(e, i({ theme: r, ref: n }, t));
        });
      return ((n.displayName = `WithTheme(` + t + `)`), o.default(n, e));
    }
    var D = `__EMOTION_TYPE_PLEASE_DO_NOT_USE__`,
      O = function (e, t) {
        var n = {};
        for (var r in t) g.call(t, r) && (n[r] = t[r]);
        return ((n[D] = e), n);
      },
      k = function (e) {
        var t = e.cache,
          n = e.serialized,
          r = e.isStringTag;
        s.registerStyles(t, n, r);
        var i = l.useInsertionEffectAlwaysWithSyncFallback(function () {
          return s.insertStyles(t, n, r);
        });
        if (!h && i !== void 0) {
          for (var a, o = n.name, c = n.next; c !== void 0;)
            ((o += ` ` + c.name), (c = c.next));
          return f.createElement(
            `style`,
            ((a = {}),
            (a[`data-emotion`] = t.key + ` ` + o),
            (a.dangerouslySetInnerHTML = { __html: i }),
            (a.nonce = t.sheet.nonce),
            a),
          );
        }
        return null;
      },
      A = e.withEmotionCache(function (e, t, n) {
        var r = e.css;
        typeof r == `string` &&
          t.registered[r] !== void 0 &&
          (r = t.registered[r]);
        var i = e[D],
          a = [r],
          o = ``;
        typeof e.className == `string`
          ? (o = s.getRegisteredStyles(t.registered, a, e.className))
          : e.className != null && (o = e.className + ` `);
        var l = c.serializeStyles(a, void 0, f.useContext(b));
        o += t.key + `-` + l.name;
        var u = {};
        for (var d in e)
          g.call(e, d) && d !== `css` && d !== D && (u[d] = e[d]);
        return (
          (u.ref = n),
          (u.className = o),
          f.createElement(
            f.Fragment,
            null,
            f.createElement(k, {
              cache: t,
              serialized: l,
              isStringTag: typeof i == `string`,
            }),
            f.createElement(i, u),
          )
        );
      });
    ((e.CacheProvider = v),
      (e.Emotion = A),
      (e.ThemeContext = b),
      (e.ThemeProvider = T),
      (e.__unsafe_useEmotionCache = y),
      (e.createEmotionProps = O),
      (e.hasOwnProperty = g),
      (e.isBrowser = h),
      (e.useTheme = S),
      (e.withTheme = E));
  }),
  Q = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = re(),
      r = t(),
      i = K(),
      a = Z(),
      s = Y();
    (U(), x(), z(), W(), o());
    function c(e) {
      if (e && e.__esModule) return e;
      var t = Object.create(null);
      return (
        e &&
          Object.keys(e).forEach(function (n) {
            if (n !== "default") {
              var r = Object.getOwnPropertyDescriptor(e, n);
              Object.defineProperty(
                t,
                n,
                r.get
                  ? r
                  : {
                      enumerable: !0,
                      get: function () {
                        return e[n];
                      },
                    },
              );
            }
          }),
        (t.default = e),
        Object.freeze(t)
      );
    }
    var l = c(r),
      u = function (e, t) {
        var r = arguments;
        if (t == null || !n.hasOwnProperty.call(t, `css`))
          return l.createElement.apply(void 0, r);
        var i = r.length,
          a = Array(i);
        ((a[0] = n.Emotion), (a[1] = n.createEmotionProps(e, t)));
        for (var o = 2; o < i; o++) a[o] = r[o];
        return l.createElement.apply(null, a);
      },
      d = n.withEmotionCache(function (e, t) {
        var r = e.styles,
          o = s.serializeStyles([r], void 0, l.useContext(n.ThemeContext));
        if (!n.isBrowser) {
          for (var c, u = o.name, d = o.styles, f = o.next; f !== void 0;)
            ((u += ` ` + f.name), (d += f.styles), (f = f.next));
          var p = t.compat === !0,
            m = t.insert(``, { name: u, styles: d }, t.sheet, p);
          return p
            ? null
            : l.createElement(
                `style`,
                ((c = {}),
                (c[`data-emotion`] = t.key + `-global ` + u),
                (c.dangerouslySetInnerHTML = { __html: m }),
                (c.nonce = t.sheet.nonce),
                c),
              );
        }
        var h = l.useRef();
        return (
          a.useInsertionEffectWithLayoutFallback(
            function () {
              var e = t.key + `-global`,
                n = new t.sheet.constructor({
                  key: e,
                  nonce: t.sheet.nonce,
                  container: t.sheet.container,
                  speedy: t.sheet.isSpeedy,
                }),
                r = !1,
                i = document.querySelector(
                  `style[data-emotion="` + e + ` ` + o.name + `"]`,
                );
              return (
                t.sheet.tags.length && (n.before = t.sheet.tags[0]),
                i !== null &&
                  ((r = !0), i.setAttribute(`data-emotion`, e), n.hydrate([i])),
                (h.current = [n, r]),
                function () {
                  n.flush();
                }
              );
            },
            [t],
          ),
          a.useInsertionEffectWithLayoutFallback(
            function () {
              var e = h.current,
                n = e[0];
              e[1]
                ? (e[1] = !1)
                : (o.next !== void 0 && i.insertStyles(t, o.next, !0),
                  n.tags.length &&
                    ((n.before = n.tags[n.tags.length - 1].nextElementSibling),
                    n.flush()),
                  t.insert(``, o, n, !1));
            },
            [t, o.name],
          ),
          null
        );
      });
    function f() {
      var e = [...arguments];
      return s.serializeStyles(e);
    }
    var p = function () {
        var e = f.apply(void 0, arguments),
          t = `animation-` + e.name;
        return {
          name: t,
          styles: `@keyframes ` + t + `{` + e.styles + `}`,
          anim: 1,
          toString: function () {
            return `_EMO_` + this.name + `_` + this.styles + `_EMO_`;
          },
        };
      },
      m = function e(t) {
        for (var n = t.length, r = 0, i = ``; r < n; r++) {
          var a = t[r];
          if (a != null) {
            var o = void 0;
            switch (typeof a) {
              case `boolean`:
                break;
              case `object`:
                if (Array.isArray(a)) o = e(a);
                else
                  for (var s in ((o = ``), a))
                    a[s] && s && (o && (o += ` `), (o += s));
                break;
              default:
                o = a;
            }
            o && (i && (i += ` `), (i += o));
          }
        }
        return i;
      };
    function h(e, t, n) {
      var r = [],
        a = i.getRegisteredStyles(e, r, n);
      return r.length < 2 ? n : a + t(r);
    }
    var g = function (e) {
        var t = e.cache,
          r = e.serializedArr,
          o = a.useInsertionEffectAlwaysWithSyncFallback(function () {
            for (var e = ``, a = 0; a < r.length; a++) {
              var o = i.insertStyles(t, r[a], !1);
              !n.isBrowser && o !== void 0 && (e += o);
            }
            if (!n.isBrowser) return e;
          });
        if (!n.isBrowser && o.length !== 0) {
          var s;
          return l.createElement(
            `style`,
            ((s = {}),
            (s[`data-emotion`] =
              t.key +
              ` ` +
              r
                .map(function (e) {
                  return e.name;
                })
                .join(` `)),
            (s.dangerouslySetInnerHTML = { __html: o }),
            (s.nonce = t.sheet.nonce),
            s),
          );
        }
        return null;
      },
      _ = n.withEmotionCache(function (e, t) {
        var r = [],
          a = function () {
            var e = [...arguments],
              n = s.serializeStyles(e, t.registered);
            return (
              r.push(n), i.registerStyles(t, n, !1), t.key + `-` + n.name
            );
          },
          o = {
            css: a,
            cx: function () {
              var e = [...arguments];
              return h(t.registered, a, m(e));
            },
            theme: l.useContext(n.ThemeContext),
          },
          c = e.children(o);
        return l.createElement(
          l.Fragment,
          null,
          l.createElement(g, { cache: t, serializedArr: r }),
          c,
        );
      });
    ((e.CacheProvider = n.CacheProvider),
      (e.ThemeContext = n.ThemeContext),
      (e.ThemeProvider = n.ThemeProvider),
      (e.__unsafe_useEmotionCache = n.__unsafe_useEmotionCache),
      (e.useTheme = n.useTheme),
      Object.defineProperty(e, "withEmotionCache", {
        enumerable: !0,
        get: function () {
          return n.withEmotionCache;
        },
      }),
      (e.withTheme = n.withTheme),
      (e.ClassNames = _),
      (e.Global = d),
      (e.createElement = u),
      (e.css = f),
      (e.jsx = u),
      (e.keyframes = p));
  }),
  ie = i((e, t) => {
    t.exports = Q();
  }),
  ae = i((e, t) => {
    function n(e, t) {
      return (
        (t ||= e.slice(0)),
        Object.freeze(
          Object.defineProperties(e, { raw: { value: Object.freeze(t) } }),
        )
      );
    }
    ((t.exports = n),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports));
  }),
  $ = i((e, t, n) => {
    (function (n, r) {
      typeof e == `object` && t !== void 0
        ? r(e)
        : typeof define == `function` && define.amd
          ? define([`exports`], r)
          : ((n = typeof globalThis < `u` ? globalThis : n || self),
            r((n.FloatingUICore = {})));
    })(n, function (e) {
      let t = [`top`, `right`, `bottom`, `left`],
        n = [`start`, `end`],
        r = t.reduce((e, t) => e.concat(t, t + `-` + n[0], t + `-` + n[1]), []),
        i = Math.min,
        a = Math.max,
        o = { left: `right`, right: `left`, bottom: `top`, top: `bottom` };
      function s(e, t, n) {
        return a(e, i(t, n));
      }
      function c(e, t) {
        return typeof e == `function` ? e(t) : e;
      }
      function l(e) {
        return e.split(`-`)[0];
      }
      function u(e) {
        return e.split(`-`)[1];
      }
      function d(e) {
        return e === `x` ? `y` : `x`;
      }
      function f(e) {
        return e === `y` ? `height` : `width`;
      }
      function p(e) {
        let t = e[0];
        return t === `t` || t === `b` ? `y` : `x`;
      }
      function m(e) {
        return d(p(e));
      }
      function h(e, t, n) {
        n === void 0 && (n = !1);
        let r = u(e),
          i = m(e),
          a = f(i),
          o =
            i === `x`
              ? r === (n ? `end` : `start`)
                ? `right`
                : `left`
              : r === `start`
                ? `bottom`
                : `top`;
        return (t.reference[a] > t.floating[a] && (o = w(o)), [o, w(o)]);
      }
      function g(e) {
        let t = w(e);
        return [_(e), t, _(t)];
      }
      function _(e) {
        return e.includes(`start`)
          ? e.replace(`start`, `end`)
          : e.replace(`end`, `start`);
      }
      let v = [`left`, `right`],
        y = [`right`, `left`],
        b = [`top`, `bottom`],
        x = [`bottom`, `top`];
      function S(e, t, n) {
        switch (e) {
          case `top`:
          case `bottom`:
            return n ? (t ? y : v) : t ? v : y;
          case `left`:
          case `right`:
            return t ? b : x;
          default:
            return [];
        }
      }
      function C(e, t, n, r) {
        let i = u(e),
          a = S(l(e), n === `start`, r);
        return (
          i && ((a = a.map((e) => e + `-` + i)), t && (a = a.concat(a.map(_)))),
          a
        );
      }
      function w(e) {
        let t = l(e);
        return o[t] + e.slice(t.length);
      }
      function T(e) {
        return {
          top: e.top ?? 0,
          right: e.right ?? 0,
          bottom: e.bottom ?? 0,
          left: e.left ?? 0,
        };
      }
      function E(e) {
        return typeof e == `number`
          ? { top: e, right: e, bottom: e, left: e }
          : T(e);
      }
      function D(e) {
        let { x: t, y: n, width: r, height: i } = e;
        return {
          width: r,
          height: i,
          top: n,
          left: t,
          right: t + r,
          bottom: n + i,
          x: t,
          y: n,
        };
      }
      function O(e, t, n) {
        let { reference: r, floating: i } = e,
          a = p(t),
          o = m(t),
          s = f(o),
          c = l(t),
          d = a === `y`,
          h = r.x + r.width / 2 - i.width / 2,
          g = r.y + r.height / 2 - i.height / 2,
          _ = r[s] / 2 - i[s] / 2,
          v;
        switch (c) {
          case `top`:
            v = { x: h, y: r.y - i.height };
            break;
          case `bottom`:
            v = { x: h, y: r.y + r.height };
            break;
          case `right`:
            v = { x: r.x + r.width, y: g };
            break;
          case `left`:
            v = { x: r.x - i.width, y: g };
            break;
          default:
            v = { x: r.x, y: r.y };
        }
        let y = u(t);
        return (
          y && (v[o] += _ * (y === `end` ? 1 : -1) * (n && d ? -1 : 1)), v
        );
      }
      async function k(e, t) {
        t === void 0 && (t = {});
        let { x: n, y: r, platform: i, rects: a, elements: o, strategy: s } = e,
          {
            boundary: l = `clippingAncestors`,
            rootBoundary: u = `viewport`,
            elementContext: d = `floating`,
            altBoundary: f = !1,
            padding: p = 0,
          } = c(t, e),
          m = E(p),
          h = o[f ? (d === `floating` ? `reference` : `floating`) : d],
          g = D(
            await i.getClippingRect({
              element:
                ((await (i.isElement == null ? void 0 : i.isElement(h))) ?? !0)
                  ? h
                  : h.contextElement ||
                    (await (i.getDocumentElement == null
                      ? void 0
                      : i.getDocumentElement(o.floating))),
              boundary: l,
              rootBoundary: u,
              strategy: s,
            }),
          ),
          _ =
            d === `floating`
              ? {
                  x: n,
                  y: r,
                  width: a.floating.width,
                  height: a.floating.height,
                }
              : a.reference,
          v = await (i.getOffsetParent == null
            ? void 0
            : i.getOffsetParent(o.floating)),
          y = ((await (i.isElement == null ? void 0 : i.isElement(v))) &&
            (await (i.getScale == null ? void 0 : i.getScale(v)))) || {
            x: 1,
            y: 1,
          },
          b = D(
            i.convertOffsetParentRelativeRectToViewportRelativeRect
              ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
                  elements: o,
                  rect: _,
                  offsetParent: v,
                  strategy: s,
                })
              : _,
          );
        return {
          top: (g.top - b.top + m.top) / y.y,
          bottom: (b.bottom - g.bottom + m.bottom) / y.y,
          left: (g.left - b.left + m.left) / y.x,
          right: (b.right - g.right + m.right) / y.x,
        };
      }
      let A = async (e, t, n) => {
          let {
              placement: r = `bottom`,
              strategy: i = `absolute`,
              middleware: a = [],
              platform: o,
            } = n,
            s = o.detectOverflow ? o : { ...o, detectOverflow: k },
            c = await (o.isRTL == null ? void 0 : o.isRTL(t)),
            l = await o.getElementRects({
              reference: e,
              floating: t,
              strategy: i,
            }),
            { x: u, y: d } = O(l, r, c),
            f = r,
            p = 0,
            m = {};
          for (let n = 0; n < a.length; n++) {
            let h = a[n];
            if (!h) continue;
            let { name: g, fn: _ } = h,
              {
                x: v,
                y,
                data: b,
                reset: x,
              } = await _({
                x: u,
                y: d,
                initialPlacement: r,
                placement: f,
                strategy: i,
                middlewareData: m,
                rects: l,
                platform: s,
                elements: { reference: e, floating: t },
              });
            ((u = v ?? u),
              (d = y ?? d),
              (m[g] = { ...m[g], ...b }),
              x &&
                p < 50 &&
                (p++,
                typeof x == `object` &&
                  (x.placement && (f = x.placement),
                  x.rects &&
                    (l =
                      x.rects === !0
                        ? await o.getElementRects({
                            reference: e,
                            floating: t,
                            strategy: i,
                          })
                        : x.rects),
                  ({ x: u, y: d } = O(l, f, c))),
                (n = -1)));
          }
          return { x: u, y: d, placement: f, strategy: i, middlewareData: m };
        },
        j = (e) => ({
          name: `arrow`,
          options: e,
          async fn(t) {
            let {
                x: n,
                y: r,
                placement: a,
                rects: o,
                platform: l,
                elements: d,
                middlewareData: p,
              } = t,
              { element: h, padding: g = 0 } = c(e, t) || {};
            if (h == null) return {};
            let _ = E(g),
              v = { x: n, y: r },
              y = m(a),
              b = f(y),
              x = await l.getDimensions(h),
              S = y === `y`,
              C = S ? `top` : `left`,
              w = S ? `bottom` : `right`,
              T = S ? `clientHeight` : `clientWidth`,
              D = o.reference[b] + o.reference[y] - v[y] - o.floating[b],
              O = v[y] - o.reference[y],
              k = await (l.getOffsetParent == null
                ? void 0
                : l.getOffsetParent(h)),
              A = k ? k[T] : 0;
            (A && (await (l.isElement == null ? void 0 : l.isElement(k)))) ||
              (A = d.floating[T] || o.floating[b]);
            let j = D / 2 - O / 2,
              M = A / 2 - x[b] / 2 - 1,
              N = i(_[C], M),
              P = i(_[w], M),
              F = A - x[b] - P,
              I = A / 2 - x[b] / 2 + j,
              L = s(N, I, F),
              R =
                !p.arrow &&
                u(a) != null &&
                I !== L &&
                o.reference[b] / 2 - (I < N ? N : P) - x[b] / 2 < 0,
              z = R ? (I < N ? I - N : I - F) : 0;
            return {
              [y]: v[y] + z,
              data: {
                [y]: L,
                centerOffset: I - L - z,
                ...(R && { alignmentOffset: z }),
              },
              reset: R,
            };
          },
        });
      function M(e, t, n) {
        return (
          e
            ? [...n.filter((t) => u(t) === e), ...n.filter((t) => u(t) !== e)]
            : n.filter((e) => l(e) === e)
        ).filter((n) => !e || u(n) === e || (t ? _(n) !== n : !1));
      }
      let N = function (e) {
          return (
            e === void 0 && (e = {}),
            {
              name: `autoPlacement`,
              options: e,
              async fn(t) {
                let {
                    rects: n,
                    middlewareData: i,
                    placement: a,
                    platform: o,
                    elements: s,
                  } = t,
                  {
                    crossAxis: d = !1,
                    alignment: f,
                    allowedPlacements: p = r,
                    autoAlignment: m = !0,
                    ...g
                  } = c(e, t),
                  _ = f !== void 0 || p === r ? M(f || null, m, p) : p,
                  v = i.autoPlacement?.index || 0,
                  y = _[v];
                if (y == null) return {};
                if (a !== y) return { reset: { placement: _[0] } };
                let b = await o.detectOverflow(t, g),
                  x = h(
                    y,
                    n,
                    await (o.isRTL == null ? void 0 : o.isRTL(s.floating)),
                  ),
                  S = [b[l(y)], b[x[0]], b[x[1]]],
                  C = [
                    ...(i.autoPlacement?.overflows || []),
                    { placement: y, overflows: S },
                  ],
                  w = _[v + 1];
                if (w)
                  return {
                    data: { index: v + 1, overflows: C },
                    reset: { placement: w },
                  };
                let T = C.map((e) => {
                    let t = u(e.placement);
                    return [
                      e.placement,
                      t && d
                        ? e.overflows.slice(0, 2).reduce((e, t) => e + t, 0)
                        : e.overflows[0],
                      e.overflows,
                    ];
                  }).sort((e, t) => e[1] - t[1]),
                  E =
                    T.filter((e) =>
                      e[2].slice(0, u(e[0]) ? 2 : 3).every((e) => e <= 0),
                    )[0]?.[0] || T[0][0];
                return E === a
                  ? {}
                  : {
                      data: { index: v + 1, overflows: C },
                      reset: { placement: E },
                    };
              },
            }
          );
        },
        P = function (e) {
          return (
            e === void 0 && (e = {}),
            {
              name: `flip`,
              options: e,
              async fn(t) {
                var n;
                let {
                    placement: r,
                    middlewareData: i,
                    rects: a,
                    initialPlacement: o,
                    platform: s,
                    elements: u,
                  } = t,
                  {
                    mainAxis: d = !0,
                    crossAxis: f = !0,
                    fallbackPlacements: m,
                    fallbackStrategy: _ = `bestFit`,
                    fallbackAxisSideDirection: v = `none`,
                    flipAlignment: y = !0,
                    ...b
                  } = c(e, t);
                if ((n = i.arrow) != null && n.alignmentOffset) return {};
                let x = l(r),
                  S = p(o),
                  T = l(o) === o,
                  E = await (s.isRTL == null ? void 0 : s.isRTL(u.floating)),
                  D = m || (T || !y ? [w(o)] : g(o)),
                  O = v !== `none`;
                !m && O && D.push(...C(o, y, v, E));
                let k = [o, ...D],
                  A = await s.detectOverflow(t, b),
                  j = [],
                  M = i.flip?.overflows || [];
                if ((d && j.push(A[x]), f)) {
                  let e = h(r, a, E);
                  j.push(A[e[0]], A[e[1]]);
                }
                if (
                  ((M = [...M, { placement: r, overflows: j }]),
                  !j.every((e) => e <= 0))
                ) {
                  let e = (i.flip?.index || 0) + 1,
                    t = k[e];
                  if (
                    t &&
                    (f !== `alignment` ||
                      S === p(t) ||
                      M.every(
                        (e) => p(e.placement) !== S || e.overflows[0] > 0,
                      ))
                  )
                    return {
                      data: { index: e, overflows: M },
                      reset: { placement: t },
                    };
                  let n = M.filter((e) => e.overflows[0] <= 0).sort(
                    (e, t) => e.overflows[1] - t.overflows[1],
                  )[0]?.placement;
                  if (!n)
                    switch (_) {
                      case `bestFit`: {
                        let e = M.filter((e) => {
                          if (O) {
                            let t = p(e.placement);
                            return t === S || t === `y`;
                          }
                          return !0;
                        })
                          .map((e) => [
                            e.placement,
                            e.overflows
                              .filter((e) => e > 0)
                              .reduce((e, t) => e + t, 0),
                          ])
                          .sort((e, t) => e[1] - t[1])[0]?.[0];
                        e && (n = e);
                        break;
                      }
                      case `initialPlacement`:
                        n = o;
                    }
                  if (r !== n) return { reset: { placement: n } };
                }
                return {};
              },
            }
          );
        };
      function F(e, t) {
        return {
          top: e.top - t.height,
          right: e.right - t.width,
          bottom: e.bottom - t.height,
          left: e.left - t.width,
        };
      }
      function I(e) {
        return t.some((t) => e[t] >= 0);
      }
      let L = function (e) {
        return (
          e === void 0 && (e = {}),
          {
            name: `hide`,
            options: e,
            async fn(t) {
              let { rects: n, platform: r } = t,
                { strategy: i = `referenceHidden`, ...a } = c(e, t);
              switch (i) {
                case `referenceHidden`: {
                  let e = F(
                    await r.detectOverflow(t, {
                      ...a,
                      elementContext: `reference`,
                    }),
                    n.reference,
                  );
                  return {
                    data: { referenceHiddenOffsets: e, referenceHidden: I(e) },
                  };
                }
                case `escaped`: {
                  let e = F(
                    await r.detectOverflow(t, { ...a, altBoundary: !0 }),
                    n.floating,
                  );
                  return { data: { escapedOffsets: e, escaped: I(e) } };
                }
                default:
                  return {};
              }
            },
          }
        );
      };
      function R(e) {
        let t = i(...e.map((e) => e.left)),
          n = i(...e.map((e) => e.top)),
          r = a(...e.map((e) => e.right)),
          o = a(...e.map((e) => e.bottom));
        return { x: t, y: n, width: r - t, height: o - n };
      }
      function z(e) {
        let t = e.slice().sort((e, t) => e.y - t.y),
          n = [],
          r = null;
        for (let e = 0; e < t.length; e++) {
          let i = t[e];
          (!r || i.y - r.y > r.height / 2
            ? n.push([i])
            : n[n.length - 1].push(i),
            (r = i));
        }
        return n.map((e) => D(R(e)));
      }
      let B = function (e) {
          return (
            e === void 0 && (e = {}),
            {
              name: `inline`,
              options: e,
              async fn(t) {
                let {
                    placement: n,
                    elements: r,
                    rects: o,
                    platform: s,
                    strategy: u,
                  } = t,
                  { padding: d = 2, x: f, y: m } = c(e, t),
                  h = Array.from(
                    (await (s.getClientRects == null
                      ? void 0
                      : s.getClientRects(r.reference))) || [],
                  );
                if (!h.length) return {};
                let g = z(h),
                  _ = D(R(h)),
                  v = E(d);
                function y() {
                  if (
                    g.length === 2 &&
                    (g[0].left > g[1].right || g[1].left > g[0].right) &&
                    f != null &&
                    m != null
                  )
                    return (
                      g.find(
                        (e) =>
                          f > e.left - v.left &&
                          f < e.right + v.right &&
                          m > e.top - v.top &&
                          m < e.bottom + v.bottom,
                      ) || _
                    );
                  if (g.length >= 2) {
                    if (p(n) === `y`) {
                      let e = g[0],
                        t = g[g.length - 1],
                        r = l(n) === `top`,
                        i = e.top,
                        a = t.bottom,
                        o = r ? e.left : t.left;
                      return D({
                        x: o,
                        y: i,
                        width: (r ? e.right : t.right) - o,
                        height: a - i,
                      });
                    }
                    let e = l(n) === `left`,
                      t = a(...g.map((e) => e.right)),
                      r = i(...g.map((e) => e.left)),
                      o = g.filter((n) => (e ? n.left === r : n.right === t)),
                      s = o[0].top,
                      c = o[o.length - 1].bottom;
                    return D({ x: r, y: s, width: t - r, height: c - s });
                  }
                  return _;
                }
                let b = await s.getElementRects({
                  reference: { getBoundingClientRect: y },
                  floating: r.floating,
                  strategy: u,
                });
                return o.reference.x !== b.reference.x ||
                  o.reference.y !== b.reference.y ||
                  o.reference.width !== b.reference.width ||
                  o.reference.height !== b.reference.height
                  ? { reset: { rects: b } }
                  : {};
              },
            }
          );
        },
        V = new Set([`left`, `top`]);
      async function H(e, t) {
        let { placement: n, platform: r, elements: i } = e,
          a = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)),
          o = l(n),
          s = u(n),
          d = p(n) === `y`,
          f = V.has(o) ? -1 : 1,
          m = a && d ? -1 : 1,
          h = c(t, e),
          {
            mainAxis: g,
            crossAxis: _,
            alignmentAxis: v,
          } = typeof h == `number`
            ? { mainAxis: h, crossAxis: 0, alignmentAxis: null }
            : {
                mainAxis: h.mainAxis || 0,
                crossAxis: h.crossAxis || 0,
                alignmentAxis: h.alignmentAxis,
              };
        return (
          s && typeof v == `number` && (_ = s === `end` ? v * -1 : v),
          d ? { x: _ * m, y: g * f } : { x: g * f, y: _ * m }
        );
      }
      ((e.arrow = j),
        (e.autoPlacement = N),
        (e.computePosition = A),
        (e.detectOverflow = k),
        (e.flip = P),
        (e.hide = L),
        (e.inline = B),
        (e.limitShift = function (e) {
          return (
            e === void 0 && (e = {}),
            {
              options: e,
              fn(t) {
                let {
                    x: n,
                    y: r,
                    placement: i,
                    rects: a,
                    middlewareData: o,
                  } = t,
                  {
                    offset: s = 0,
                    mainAxis: u = !0,
                    crossAxis: f = !0,
                  } = c(e, t),
                  m = { x: n, y: r },
                  h = p(i),
                  g = d(h),
                  _ = m[g],
                  v = m[h],
                  y = c(s, t),
                  b =
                    typeof y == `number`
                      ? { mainAxis: y, crossAxis: 0 }
                      : {
                          mainAxis: y.mainAxis ?? 0,
                          crossAxis: y.crossAxis ?? 0,
                        };
                if (u) {
                  let e = g === `y` ? `height` : `width`,
                    t = a.reference[g] - a.floating[e] + b.mainAxis,
                    n = a.reference[g] + a.reference[e] - b.mainAxis;
                  _ < t ? (_ = t) : _ > n && (_ = n);
                }
                if (f) {
                  let e = g === `y` ? `width` : `height`,
                    t = V.has(l(i)),
                    n =
                      a.reference[h] -
                      a.floating[e] +
                      ((t && o.offset?.[h]) || 0) +
                      (t ? 0 : b.crossAxis),
                    r =
                      a.reference[h] +
                      a.reference[e] +
                      (t ? 0 : o.offset?.[h] || 0) -
                      (t ? b.crossAxis : 0);
                  v < n ? (v = n) : v > r && (v = r);
                }
                return { [g]: _, [h]: v };
              },
            }
          );
        }),
        (e.offset = function (e) {
          return (
            e === void 0 && (e = 0),
            {
              name: `offset`,
              options: e,
              async fn(t) {
                var n;
                let { x: r, y: i, placement: a, middlewareData: o } = t,
                  s = await H(t, e);
                return a === o.offset?.placement &&
                  (n = o.arrow) != null &&
                  n.alignmentOffset
                  ? {}
                  : { x: r + s.x, y: i + s.y, data: { ...s, placement: a } };
              },
            }
          );
        }),
        (e.rectToClientRect = D),
        (e.shift = function (e) {
          return (
            e === void 0 && (e = {}),
            {
              name: `shift`,
              options: e,
              async fn(t) {
                let { x: n, y: r, placement: i, platform: a } = t,
                  {
                    mainAxis: o = !0,
                    crossAxis: l = !1,
                    limiter: u = {
                      fn: (e) => {
                        let { x: t, y: n } = e;
                        return { x: t, y: n };
                      },
                    },
                    ...f
                  } = c(e, t),
                  m = { x: n, y: r },
                  h = await a.detectOverflow(t, f),
                  g = p(i),
                  _ = d(g),
                  v = m[_],
                  y = m[g],
                  b = (e, t) =>
                    s(
                      t + h[e === `y` ? `top` : `left`],
                      t,
                      t - h[e === `y` ? `bottom` : `right`],
                    );
                (o && (v = b(_, v)), l && (y = b(g, y)));
                let x = u.fn({ ...t, [_]: v, [g]: y });
                return {
                  ...x,
                  data: { x: x.x - n, y: x.y - r, enabled: { [_]: o, [g]: l } },
                };
              },
            }
          );
        }),
        (e.size = function (e) {
          return (
            e === void 0 && (e = {}),
            {
              name: `size`,
              options: e,
              async fn(t) {
                let { placement: n, rects: r, platform: o, elements: s } = t,
                  { apply: d = () => {}, ...f } = c(e, t),
                  m = await o.detectOverflow(t, f),
                  h = l(n),
                  g = u(n),
                  _ = p(n) === `y`,
                  { width: v, height: y } = r.floating,
                  b,
                  x;
                h === `top` || h === `bottom`
                  ? ((b = h),
                    (x =
                      g ===
                      ((await (o.isRTL == null ? void 0 : o.isRTL(s.floating)))
                        ? `start`
                        : `end`)
                        ? `left`
                        : `right`))
                  : ((x = h), (b = g === `end` ? `top` : `bottom`));
                let S = y - m.top - m.bottom,
                  C = v - m.left - m.right,
                  w = i(y - m[b], S),
                  T = i(v - m[x], C),
                  E = t.middlewareData.shift,
                  D = !E,
                  O = w,
                  k = T;
                (E != null && E.enabled.x && (k = C),
                  E != null && E.enabled.y && (O = S),
                  D &&
                    !g &&
                    (_
                      ? (k = v - 2 * a(m.left, m.right))
                      : (O = y - 2 * a(m.top, m.bottom))),
                  await d({ ...t, availableWidth: k, availableHeight: O }));
                let A = await o.getDimensions(s.floating);
                return v !== A.width || y !== A.height
                  ? { reset: { rects: !0 } }
                  : {};
              },
            }
          );
        }));
    });
  }),
  oe = i((e, t, n) => {
    (function (n, r) {
      typeof e == `object` && t !== void 0
        ? r(e, $())
        : typeof define == `function` && define.amd
          ? define([`exports`, `@floating-ui/core`], r)
          : ((n = typeof globalThis < `u` ? globalThis : n || self),
            r((n.FloatingUIDOM = {}), n.FloatingUICore));
    })(n, function (e, t) {
      let n = Math.min,
        r = Math.max,
        i = Math.round,
        a = Math.floor,
        o = (e) => ({ x: e, y: e });
      function s() {
        return typeof window < `u`;
      }
      function c(e) {
        return d(e) ? (e.nodeName || ``).toLowerCase() : `#document`;
      }
      function l(e) {
        var t;
        return (
          (e == null || (t = e.ownerDocument) == null
            ? void 0
            : t.defaultView) || window
        );
      }
      function u(e) {
        return ((d(e) ? e.ownerDocument : e.document) || window.document)
          ?.documentElement;
      }
      function d(e) {
        return s() ? e instanceof Node || e instanceof l(e).Node : !1;
      }
      function f(e) {
        return s() ? e instanceof Element || e instanceof l(e).Element : !1;
      }
      function p(e) {
        return s()
          ? e instanceof HTMLElement || e instanceof l(e).HTMLElement
          : !1;
      }
      function m(e) {
        return !s() || typeof ShadowRoot > `u`
          ? !1
          : e instanceof ShadowRoot || e instanceof l(e).ShadowRoot;
      }
      function h(e) {
        let { overflow: t, overflowX: n, overflowY: r, display: i } = E(e);
        return (
          /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
          i !== `inline` &&
          i !== `contents`
        );
      }
      function g(e) {
        return /^(table|td|th)$/.test(c(e));
      }
      function _(e) {
        try {
          if (e.matches(`:popover-open`)) return !0;
        } catch {}
        try {
          return e.matches(`:modal`);
        } catch {
          return !1;
        }
      }
      let v = /transform|translate|scale|rotate|perspective|filter/,
        y = /paint|layout|strict|content/,
        b = (e) => !!e && e !== `none`,
        x;
      function S(e) {
        let t = f(e) ? E(e) : e;
        return (
          b(t.transform) ||
          b(t.translate) ||
          b(t.scale) ||
          b(t.rotate) ||
          b(t.perspective) ||
          (!w() && (b(t.backdropFilter) || b(t.filter))) ||
          v.test(t.willChange || ``) ||
          y.test(t.contain || ``)
        );
      }
      function C(e) {
        let t = O(e);
        for (; p(t) && !T(t);) {
          if (S(t)) return t;
          if (_(t)) return null;
          t = O(t);
        }
        return null;
      }
      function w() {
        return (
          (x ??=
            typeof CSS < `u` &&
            CSS.supports &&
            CSS.supports(`-webkit-backdrop-filter`, `none`)),
          x
        );
      }
      function T(e) {
        return /^(html|body|#document)$/.test(c(e));
      }
      function E(e) {
        return l(e).getComputedStyle(e);
      }
      function D(e) {
        return f(e)
          ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
          : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
      }
      function O(e) {
        if (c(e) === `html`) return e;
        let t = e.assignedSlot || e.parentNode || (m(e) && e.host) || u(e);
        return m(t) ? t.host : t;
      }
      function k(e) {
        let t = O(e);
        return T(t) ? (e.ownerDocument || e).body : p(t) && h(t) ? t : k(t);
      }
      function A(e, t, n) {
        (t === void 0 && (t = []), n === void 0 && (n = !0));
        let r = k(e),
          i = r === e.ownerDocument?.body,
          a = l(r);
        if (i) {
          let e = j(a);
          return t.concat(
            a,
            a.visualViewport || [],
            h(r) ? r : [],
            e && n ? A(e) : [],
          );
        }
        return t.concat(r, A(r, [], n));
      }
      function j(e) {
        return e.parent && Object.getPrototypeOf(e.parent)
          ? e.frameElement
          : null;
      }
      function M(e) {
        let t = E(e),
          n = parseFloat(t.width) || 0,
          r = parseFloat(t.height) || 0,
          a = p(e),
          o = a ? e.offsetWidth : n,
          s = a ? e.offsetHeight : r,
          c = i(n) !== o || i(r) !== s;
        return (c && ((n = o), (r = s)), { width: n, height: r, $: c });
      }
      function N(e) {
        return f(e) ? e : e.contextElement;
      }
      function P(e) {
        let t = N(e);
        if (!p(t)) return o(1);
        let n = t.getBoundingClientRect(),
          { width: r, height: a, $: s } = M(t),
          c = (s ? i(n.width) : n.width) / r,
          l = (s ? i(n.height) : n.height) / a;
        return (
          (c && Number.isFinite(c)) || (c = 1),
          (l && Number.isFinite(l)) || (l = 1),
          { x: c, y: l }
        );
      }
      let F = o(0);
      function I(e) {
        let t = l(e);
        return !w() || !t.visualViewport
          ? F
          : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
      }
      function L(e, t, n) {
        return (t === void 0 && (t = !1), !!n && t && n === l(e));
      }
      function R(e, n, r, i) {
        (n === void 0 && (n = !1), r === void 0 && (r = !1));
        let a = e.getBoundingClientRect(),
          s = N(e),
          c = o(1);
        n && (i ? f(i) && (c = P(i)) : (c = P(e)));
        let u = L(s, r, i) ? I(s) : o(0),
          d = (a.left + u.x) / c.x,
          p = (a.top + u.y) / c.y,
          m = a.width / c.x,
          h = a.height / c.y;
        if (s && i) {
          let e = l(s),
            t = f(i) ? l(i) : i,
            n = e,
            r = j(n);
          for (; r && t !== n;) {
            let e = P(r),
              t = r.getBoundingClientRect(),
              i = E(r),
              a = t.left + (r.clientLeft + parseFloat(i.paddingLeft)) * e.x,
              o = t.top + (r.clientTop + parseFloat(i.paddingTop)) * e.y;
            ((d *= e.x),
              (p *= e.y),
              (m *= e.x),
              (h *= e.y),
              (d += a),
              (p += o),
              (n = l(r)),
              (r = j(n)));
          }
        }
        return t.rectToClientRect({ width: m, height: h, x: d, y: p });
      }
      function z(e, t) {
        let n = D(e).scrollLeft;
        return t ? t.left + n : R(u(e)).left + n;
      }
      function B(e, t) {
        let n = e.getBoundingClientRect();
        return { x: n.left + t.scrollLeft - z(e, n), y: n.top + t.scrollTop };
      }
      function V(e) {
        let { elements: t, rect: n, offsetParent: r, strategy: i } = e,
          a = i === `fixed`,
          s = u(r),
          l = t ? _(t.floating) : !1;
        if (r === s || (l && a)) return n;
        let d = { scrollLeft: 0, scrollTop: 0 },
          f = o(1),
          m = o(0),
          g = p(r);
        if ((g || !a) && ((c(r) !== `body` || h(s)) && (d = D(r)), g)) {
          let e = R(r);
          ((f = P(r)), (m.x = e.x + r.clientLeft), (m.y = e.y + r.clientTop));
        }
        let v = s && !g && !a ? B(s, d) : o(0);
        return {
          width: n.width * f.x,
          height: n.height * f.y,
          x: n.x * f.x - d.scrollLeft * f.x + m.x + v.x,
          y: n.y * f.y - d.scrollTop * f.y + m.y + v.y,
        };
      }
      function H(e) {
        return e.getClientRects ? Array.from(e.getClientRects()) : [];
      }
      function U(e) {
        let t = D(e),
          n = e.ownerDocument.body,
          i = r(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth),
          a = r(e.scrollHeight, e.clientHeight, n.scrollHeight, n.clientHeight),
          o = -t.scrollLeft + z(e),
          s = -t.scrollTop;
        return (
          E(n).direction === `rtl` &&
            (o += r(e.clientWidth, n.clientWidth) - i),
          { width: i, height: a, x: o, y: s }
        );
      }
      function W(e, t, n) {
        n === void 0 && (n = `viewport`);
        let r = n === `layoutViewport`,
          i = l(e),
          a = u(e),
          o = i.visualViewport,
          s = a.clientWidth,
          c = a.clientHeight,
          d = 0,
          f = 0;
        if (o) {
          let e = !w() || t === `fixed`;
          r
            ? e || ((d = -o.offsetLeft), (f = -o.offsetTop))
            : ((s = o.width),
              (c = o.height),
              e && ((d = o.offsetLeft), (f = o.offsetTop)));
        }
        if (z(a) <= 0) {
          let e = a.ownerDocument,
            t = e.body,
            n = getComputedStyle(t),
            r =
              (e.compatMode === `CSS1Compat` &&
                parseFloat(n.marginLeft) + parseFloat(n.marginRight)) ||
              0,
            i = Math.abs(a.clientWidth - t.clientWidth - r),
            o =
              getComputedStyle(a).scrollbarGutter === `stable both-edges`
                ? i / 2
                : i;
          o <= 25 && (s -= o);
        }
        return { width: s, height: c, x: d, y: f };
      }
      function G(e, t) {
        let n = R(e, !0, t === `fixed`),
          r = n.top + e.clientTop,
          i = n.left + e.clientLeft,
          a = P(e);
        return {
          width: e.clientWidth * a.x,
          height: e.clientHeight * a.y,
          x: i * a.x,
          y: r * a.y,
        };
      }
      function K(e, n, r) {
        let i;
        if (n === `viewport` || n === `layoutViewport`) i = W(e, r, n);
        else if (n === `document`) i = U(u(e));
        else if (f(n)) i = G(n, r);
        else {
          let t = I(e);
          i = { x: n.x - t.x, y: n.y - t.y, width: n.width, height: n.height };
        }
        return t.rectToClientRect(i);
      }
      function ee(e, t) {
        let n = t.get(e);
        if (n) return n;
        let r = A(e, [], !1).filter((e) => f(e) && c(e) !== `body`),
          i = null,
          a = E(e).position === `fixed`,
          o = a ? O(e) : e;
        for (; f(o) && !T(o);) {
          let e = E(o),
            t = S(o),
            n = i ? i.position : a ? `fixed` : ``;
          (!t &&
          (n === `fixed` || (n === `absolute` && e.position === `static`))
            ? (r = r.filter((e) => e !== o))
            : (i = e),
            (o = O(o)));
        }
        return (t.set(e, r), r);
      }
      function te(e) {
        let { element: t, boundary: i, rootBoundary: a, strategy: o } = e,
          s = [
            ...(i === `clippingAncestors`
              ? _(t)
                ? []
                : ee(t, this._c)
              : [].concat(i)),
            a,
          ],
          c = K(t, s[0], o),
          l = c.top,
          u = c.right,
          d = c.bottom,
          f = c.left;
        for (let e = 1; e < s.length; e++) {
          let i = K(t, s[e], o);
          ((l = r(i.top, l)),
            (u = n(i.right, u)),
            (d = n(i.bottom, d)),
            (f = r(i.left, f)));
        }
        return { width: u - f, height: d - l, x: f, y: l };
      }
      function ne(e) {
        let { width: t, height: n } = M(e);
        return { width: t, height: n };
      }
      function q(e, t, n) {
        let r = p(t),
          i = u(t),
          a = n === `fixed`,
          s = R(e, !0, a, t),
          l = { scrollLeft: 0, scrollTop: 0 },
          d = o(0);
        if ((r || !a) && ((c(t) !== `body` || h(i)) && (l = D(t)), r)) {
          let e = R(t, !0, a, t);
          ((d.x = e.x + t.clientLeft), (d.y = e.y + t.clientTop));
        }
        !r && i && (d.x = z(i));
        let f = i && !r && !a ? B(i, l) : o(0);
        return {
          x: s.left + l.scrollLeft - d.x - f.x,
          y: s.top + l.scrollTop - d.y - f.y,
          width: s.width,
          height: s.height,
        };
      }
      function J(e) {
        return E(e).position === `static`;
      }
      function Y(e, t) {
        if (!p(e) || E(e).position === `fixed`) return null;
        if (t) return t(e);
        let n = e.offsetParent;
        return (u(e) === n && (n = n.ownerDocument.body), n);
      }
      function X(e, t) {
        let n = l(e);
        if (_(e)) return n;
        if (!p(e)) {
          let t = O(e);
          for (; t && !T(t);) {
            if (f(t) && !J(t)) return t;
            t = O(t);
          }
          return n;
        }
        let r = Y(e, t);
        for (; r && g(r) && J(r);) r = Y(r, t);
        return r && T(r) && J(r) && !S(r) ? n : r || C(e) || n;
      }
      let Z = async function (e) {
        let t = this.getOffsetParent || X,
          n = this.getDimensions,
          r = await n(e.floating);
        return {
          reference: q(e.reference, await t(e.floating), e.strategy),
          floating: { x: 0, y: 0, width: r.width, height: r.height },
        };
      };
      function re(e) {
        return E(e).direction === `rtl`;
      }
      let Q = {
        convertOffsetParentRelativeRectToViewportRelativeRect: V,
        getDocumentElement: u,
        getClippingRect: te,
        getOffsetParent: X,
        getElementRects: Z,
        getClientRects: H,
        getDimensions: ne,
        getScale: P,
        isElement: f,
        isRTL: re,
      };
      function ie(e, t) {
        return (
          e.x === t.x &&
          e.y === t.y &&
          e.width === t.width &&
          e.height === t.height
        );
      }
      function ae(e, t, i) {
        let o = null,
          s,
          c = u(e);
        function d() {
          var e;
          (clearTimeout(s), (e = o) == null || e.disconnect(), (o = null));
        }
        function f(i, l) {
          (i === void 0 && (i = !1), l === void 0 && (l = 1), d());
          let u = e.getBoundingClientRect(),
            { left: p, top: m, width: h, height: g } = u;
          if ((i || t(), !h || !g)) return;
          let _ = a(m),
            v = a(c.clientWidth - (p + h)),
            y = a(c.clientHeight - (m + g)),
            b = a(p),
            x = {
              rootMargin: -_ + `px ` + -v + `px ` + -y + `px ` + -b + `px`,
              threshold: r(0, n(1, l)) || 1,
            },
            S = !0;
          function C(t) {
            let n = t[0].intersectionRatio;
            if (!ie(u, e.getBoundingClientRect())) return f();
            if (n !== l) {
              if (!S) return f();
              n
                ? f(!1, n)
                : (s = setTimeout(() => {
                    f(!1, 1e-7);
                  }, 1e3));
            }
            S = !1;
          }
          try {
            o = new IntersectionObserver(C, { ...x, root: c.ownerDocument });
          } catch {
            o = new IntersectionObserver(C, x);
          }
          o.observe(e);
        }
        let p = l(e),
          m = () => f(i);
        return (
          p.addEventListener(`resize`, m),
          f(!0),
          () => {
            (p.removeEventListener(`resize`, m), d());
          }
        );
      }
      function $(e, t, n, r) {
        r === void 0 && (r = {});
        let {
            ancestorScroll: i = !0,
            ancestorResize: a = !0,
            elementResize: o = typeof ResizeObserver == `function`,
            layoutShift: s = typeof IntersectionObserver == `function`,
            animationFrame: c = !1,
          } = r,
          l = N(e),
          u = i || a ? [...(l ? A(l) : []), ...(t ? A(t) : [])] : [];
        u.forEach((e) => {
          (i && e.addEventListener(`scroll`, n),
            a && e.addEventListener(`resize`, n));
        });
        let d = l && s ? ae(l, n, a) : null,
          f = -1,
          p = null;
        o &&
          ((p = new ResizeObserver((e) => {
            let [r] = e;
            (r &&
              r.target === l &&
              p &&
              t &&
              (p.unobserve(t),
              cancelAnimationFrame(f),
              (f = requestAnimationFrame(() => {
                var e;
                (e = p) == null || e.observe(t);
              }))),
              n());
          })),
          l && !c && p.observe(l),
          t && p.observe(t));
        let m,
          h = c ? R(e) : null;
        c && g();
        function g() {
          let t = R(e);
          (h && !ie(h, t) && n(), (h = t), (m = requestAnimationFrame(g)));
        }
        return (
          n(),
          () => {
            var e;
            (u.forEach((e) => {
              (i && e.removeEventListener(`scroll`, n),
                a && e.removeEventListener(`resize`, n));
            }),
              d?.(),
              (e = p) == null || e.disconnect(),
              (p = null),
              c && cancelAnimationFrame(m));
          }
        );
      }
      let oe = t.detectOverflow,
        se = t.offset,
        ce = t.autoPlacement,
        le = t.shift,
        ue = t.flip,
        de = t.size,
        fe = t.hide,
        pe = t.arrow,
        me = t.inline,
        he = t.limitShift;
      ((e.arrow = pe),
        (e.autoPlacement = ce),
        (e.autoUpdate = $),
        (e.computePosition = (e, n, r) => {
          let i = new Map(),
            a = r ?? {},
            o = { ...Q, ...a.platform, _c: i };
          return t.computePosition(e, n, { ...a, platform: o });
        }),
        (e.detectOverflow = oe),
        (e.flip = ue),
        (e.getOverflowAncestors = A),
        (e.hide = fe),
        (e.inline = me),
        (e.limitShift = he),
        (e.offset = se),
        (e.platform = Q),
        (e.shift = le),
        (e.size = de));
    });
  }),
  se = i((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = t().useLayoutEffect));
  }),
  ce = i((e) => {
    var n = d(),
      r = x(),
      i = ie(),
      o = _(),
      c = y(),
      l = s(),
      f = ae(),
      p = u(),
      m = t(),
      h = a(),
      g = oe(),
      v = se();
    function b(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var S = b(v),
      C = [
        `className`,
        `clearValue`,
        `cx`,
        `getStyles`,
        `getClassNames`,
        `getValue`,
        `hasValue`,
        `isMulti`,
        `isRtl`,
        `options`,
        `selectOption`,
        `selectProps`,
        `setValue`,
        `theme`,
      ],
      w = function () {};
    function T(e, t) {
      return t ? (t[0] === `-` ? e + t : e + `__` + t) : e;
    }
    function E(e, t) {
      var n = [...arguments].slice(2),
        r = [].concat(n);
      if (t && e)
        for (var i in t) t.hasOwnProperty(i) && t[i] && r.push(`${T(e, i)}`);
      return r
        .filter(function (e) {
          return e;
        })
        .map(function (e) {
          return String(e).trim();
        })
        .join(` `);
    }
    var D = function (e) {
        return ee(e)
          ? e.filter(Boolean)
          : l(e) === `object` && e !== null
            ? [e]
            : [];
      },
      O = function (e) {
        return (
          e.className,
          e.clearValue,
          e.cx,
          e.getStyles,
          e.getClassNames,
          e.getValue,
          e.hasValue,
          e.isMulti,
          e.isRtl,
          e.options,
          e.selectOption,
          e.selectProps,
          e.setValue,
          e.theme,
          n({}, c(e, C))
        );
      },
      k = function (e, t, n) {
        var r = e.cx,
          i = e.getStyles,
          a = e.getClassNames,
          o = e.className;
        return { css: i(t, e), className: r(n ?? {}, a(t, e), o) };
      };
    function A(e, t, n) {
      if (n) {
        var r = n(e, t);
        if (typeof r == `string`) return r;
      }
      return e;
    }
    function j(e) {
      return [document.documentElement, document.body, window].indexOf(e) > -1;
    }
    function M(e) {
      return j(e) ? window.innerHeight : e.clientHeight;
    }
    function N(e) {
      return j(e) ? window.pageYOffset : e.scrollTop;
    }
    function P(e, t) {
      j(e) ? window.scrollTo(0, t) : (e.scrollTop = t);
    }
    function F(e) {
      var t = getComputedStyle(e),
        n = t.position === `absolute`,
        r = /(auto|scroll)/;
      if (t.position === `fixed`) return document.documentElement;
      for (var i = e; (i = i.parentElement);)
        if (
          ((t = getComputedStyle(i)),
          !(n && t.position === `static`) &&
            r.test(t.overflow + t.overflowY + t.overflowX))
        )
          return i;
      return document.documentElement;
    }
    function I(e, t, n, r) {
      return n * ((e = e / r - 1) * e * e + 1) + t;
    }
    function L(e, t) {
      var n =
          arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 200,
        r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : w,
        i = N(e),
        a = t - i,
        o = 10,
        s = 0;
      function c() {
        ((s += o),
          P(e, I(s, i, a, n)),
          s < n ? window.requestAnimationFrame(c) : r(e));
      }
      c();
    }
    function R(e, t) {
      var n = e.getBoundingClientRect(),
        r = t.getBoundingClientRect(),
        i = t.offsetHeight / 3;
      r.bottom + i > n.bottom
        ? P(
            e,
            Math.min(
              t.offsetTop + t.clientHeight - e.offsetHeight + i,
              e.scrollHeight,
            ),
          )
        : r.top - i < n.top && P(e, Math.max(t.offsetTop - i, 0));
    }
    function z(e) {
      var t = e.getBoundingClientRect();
      return {
        bottom: t.bottom,
        height: t.height,
        left: t.left,
        right: t.right,
        top: t.top,
        width: t.width,
      };
    }
    function B() {
      try {
        return (document.createEvent(`TouchEvent`), !0);
      } catch {
        return !1;
      }
    }
    function V() {
      try {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent,
        );
      } catch {
        return !1;
      }
    }
    var H = !1,
      U = {
        get passive() {
          return (H = !0);
        },
      },
      W = typeof window < `u` ? window : {};
    W.addEventListener &&
      W.removeEventListener &&
      (W.addEventListener(`p`, w, U), W.removeEventListener(`p`, w, !1));
    var G = H;
    function K(e) {
      return e != null;
    }
    function ee(e) {
      return Array.isArray(e);
    }
    function te(e, t, n) {
      return e ? t : n;
    }
    function ne(e) {
      return e;
    }
    function q(e) {
      return e;
    }
    var J = function (e) {
        var t = [...arguments].slice(1);
        return Object.entries(e)
          .filter(function (e) {
            var n = o(e, 1)[0];
            return !t.includes(n);
          })
          .reduce(function (e, t) {
            var n = o(t, 2),
              r = n[0];
            return ((e[r] = n[1]), e);
          }, {});
      },
      Y = [`children`, `innerProps`],
      X = [`children`, `innerProps`];
    function Z(e) {
      var t = e.maxHeight,
        n = e.menuEl,
        r = e.minHeight,
        i = e.placement,
        a = e.shouldScroll,
        o = e.isFixedPosition,
        s = e.controlHeight,
        c = F(n),
        l = { placement: `bottom`, maxHeight: t };
      if (!n || !n.offsetParent) return l;
      var u = c.getBoundingClientRect().height,
        d = n.getBoundingClientRect(),
        f = d.bottom,
        p = d.height,
        m = d.top,
        h = n.offsetParent.getBoundingClientRect().top,
        g = o ? window.innerHeight : M(c),
        _ = N(c),
        v = parseInt(getComputedStyle(n).marginBottom, 10),
        y = parseInt(getComputedStyle(n).marginTop, 10),
        b = h - y,
        x = g - m,
        S = b + _,
        C = u - _ - m,
        w = f - g + _ + v,
        T = _ + m - y,
        E = 160;
      switch (i) {
        case `auto`:
        case `bottom`:
          if (x >= p) return { placement: `bottom`, maxHeight: t };
          if (C >= p && !o)
            return (a && L(c, w, E), { placement: `bottom`, maxHeight: t });
          if ((!o && C >= r) || (o && x >= r))
            return (
              a && L(c, w, E),
              { placement: `bottom`, maxHeight: o ? x - v : C - v }
            );
          if (i === `auto` || o) {
            var D = t,
              O = o ? b : S;
            return (
              O >= r && (D = Math.min(O - v - s, t)),
              { placement: `top`, maxHeight: D }
            );
          }
          if (i === `bottom`)
            return (a && P(c, w), { placement: `bottom`, maxHeight: t });
          break;
        case `top`:
          if (b >= p) return { placement: `top`, maxHeight: t };
          if (S >= p && !o)
            return (a && L(c, T, E), { placement: `top`, maxHeight: t });
          if ((!o && S >= r) || (o && b >= r)) {
            var k = t;
            return (
              ((!o && S >= r) || (o && b >= r)) && (k = o ? b - y : S - y),
              a && L(c, T, E),
              { placement: `top`, maxHeight: k }
            );
          }
          return { placement: `bottom`, maxHeight: t };
        default:
          throw Error(`Invalid placement provided "${i}".`);
      }
      return l;
    }
    function re(e) {
      return e ? { bottom: `top`, top: `bottom` }[e] : `bottom`;
    }
    var Q = function (e) {
        return e === `auto` ? `bottom` : e;
      },
      $ = function (e, t) {
        var r,
          i = e.placement,
          a = e.theme,
          o = a.borderRadius,
          s = a.spacing,
          c = a.colors;
        return n(
          ((r = { label: `menu` }),
          p(r, re(i), `100%`),
          p(r, `position`, `absolute`),
          p(r, `width`, `100%`),
          p(r, `zIndex`, 1),
          r),
          t
            ? {}
            : {
                backgroundColor: c.neutral0,
                borderRadius: o,
                boxShadow: `0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)`,
                marginBottom: s.menuGutter,
                marginTop: s.menuGutter,
              },
        );
      },
      ce = m.createContext(null),
      le = function (e) {
        var t = e.children,
          r = e.minMenuHeight,
          i = e.maxMenuHeight,
          a = e.menuPlacement,
          s = e.menuPosition,
          c = e.menuShouldScrollIntoView,
          l = e.theme,
          u = (m.useContext(ce) || {}).setPortalPlacement,
          d = m.useRef(null),
          f = o(m.useState(i), 2),
          p = f[0],
          h = f[1],
          g = o(m.useState(null), 2),
          _ = g[0],
          v = g[1],
          y = l.spacing.controlHeight;
        return (
          S.default(
            function () {
              var e = d.current;
              if (e) {
                var t = s === `fixed`,
                  n = Z({
                    maxHeight: i,
                    menuEl: e,
                    minHeight: r,
                    placement: a,
                    shouldScroll: c && !t,
                    isFixedPosition: t,
                    controlHeight: y,
                  });
                (h(n.maxHeight), v(n.placement), u?.(n.placement));
              }
            },
            [i, a, s, c, r, u, y],
          ),
          t({
            ref: d,
            placerProps: n(
              n({}, e),
              {},
              { placement: _ || Q(a), maxHeight: p },
            ),
          })
        );
      },
      ue = function (e) {
        var t = e.children,
          n = e.innerRef,
          a = e.innerProps;
        return i.jsx(
          `div`,
          r({}, k(e, `menu`, { menu: !0 }), { ref: n }, a),
          t,
        );
      },
      de = function (e, t) {
        var r = e.maxHeight,
          i = e.theme.spacing.baseUnit;
        return n(
          {
            maxHeight: r,
            overflowY: `auto`,
            position: `relative`,
            WebkitOverflowScrolling: `touch`,
          },
          t ? {} : { paddingBottom: i, paddingTop: i },
        );
      },
      fe = function (e) {
        var t = e.children,
          n = e.innerProps,
          a = e.innerRef,
          o = e.isMulti;
        return i.jsx(
          `div`,
          r(
            {},
            k(e, `menuList`, { "menu-list": !0, "menu-list--is-multi": o }),
            { ref: a },
            n,
          ),
          t,
        );
      },
      pe = function (e, t) {
        var r = e.theme,
          i = r.spacing.baseUnit,
          a = r.colors;
        return n(
          { textAlign: `center` },
          t ? {} : { color: a.neutral40, padding: `${i * 2}px ${i * 3}px` },
        );
      },
      me = pe,
      he = pe,
      ge = function (e) {
        var t = e.children,
          a = t === void 0 ? `No options` : t,
          o = e.innerProps,
          s = c(e, Y);
        return i.jsx(
          `div`,
          r(
            {},
            k(
              n(n({}, s), {}, { children: a, innerProps: o }),
              `noOptionsMessage`,
              { "menu-notice": !0, "menu-notice--no-options": !0 },
            ),
            o,
          ),
          a,
        );
      },
      _e = function (e) {
        var t = e.children,
          a = t === void 0 ? `Loading...` : t,
          o = e.innerProps,
          s = c(e, X);
        return i.jsx(
          `div`,
          r(
            {},
            k(
              n(n({}, s), {}, { children: a, innerProps: o }),
              `loadingMessage`,
              { "menu-notice": !0, "menu-notice--loading": !0 },
            ),
            o,
          ),
          a,
        );
      },
      ve = function (e) {
        var t = e.rect,
          n = e.offset,
          r = e.position;
        return { left: t.left, position: r, top: n, width: t.width, zIndex: 1 };
      },
      ye = function (e) {
        var t = e.appendTo,
          a = e.children,
          s = e.controlElement,
          c = e.innerProps,
          l = e.menuPlacement,
          u = e.menuPosition,
          d = m.useRef(null),
          f = m.useRef(null),
          p = o(m.useState(Q(l)), 2),
          _ = p[0],
          v = p[1],
          y = m.useMemo(function () {
            return { setPortalPlacement: v };
          }, []),
          b = o(m.useState(null), 2),
          x = b[0],
          C = b[1],
          w = m.useCallback(
            function () {
              if (s) {
                var e = z(s),
                  t = u === `fixed` ? 0 : window.pageYOffset,
                  n = e[_] + t;
                (n !== x?.offset ||
                  e.left !== x?.rect.left ||
                  e.width !== x?.rect.width) &&
                  C({ offset: n, rect: e });
              }
            },
            [s, u, _, x?.offset, x?.rect.left, x?.rect.width],
          );
        S.default(
          function () {
            w();
          },
          [w],
        );
        var T = m.useCallback(
          function () {
            (typeof f.current == `function` &&
              (f.current(), (f.current = null)),
              s &&
                d.current &&
                (f.current = g.autoUpdate(s, d.current, w, {
                  elementResize: `ResizeObserver` in window,
                })));
          },
          [s, w],
        );
        S.default(
          function () {
            T();
          },
          [T],
        );
        var E = m.useCallback(
          function (e) {
            ((d.current = e), T());
          },
          [T],
        );
        if ((!t && u !== `fixed`) || !x) return null;
        var D = i.jsx(
          `div`,
          r(
            { ref: E },
            k(
              n(n({}, e), {}, { offset: x.offset, position: u, rect: x.rect }),
              `menuPortal`,
              { "menu-portal": !0 },
            ),
            c,
          ),
          a,
        );
        return i.jsx(ce.Provider, { value: y }, t ? h.createPortal(D, t) : D);
      },
      be = function (e) {
        var t = e.isDisabled;
        return {
          label: `container`,
          direction: e.isRtl ? `rtl` : void 0,
          pointerEvents: t ? `none` : void 0,
          position: `relative`,
        };
      },
      xe = function (e) {
        var t = e.children,
          n = e.innerProps,
          a = e.isDisabled,
          o = e.isRtl;
        return i.jsx(
          `div`,
          r({}, k(e, `container`, { "--is-disabled": a, "--is-rtl": o }), n),
          t,
        );
      },
      Se = function (e, t) {
        var r = e.theme.spacing,
          i = e.isMulti,
          a = e.hasValue,
          o = e.selectProps.controlShouldRenderValue;
        return n(
          {
            alignItems: `center`,
            display: i && a && o ? `flex` : `grid`,
            flex: 1,
            flexWrap: `wrap`,
            WebkitOverflowScrolling: `touch`,
            position: `relative`,
            overflow: `hidden`,
          },
          t ? {} : { padding: `${r.baseUnit / 2}px ${r.baseUnit * 2}px` },
        );
      },
      Ce = function (e) {
        var t = e.children,
          n = e.innerProps,
          a = e.isMulti,
          o = e.hasValue;
        return i.jsx(
          `div`,
          r(
            {},
            k(e, `valueContainer`, {
              "value-container": !0,
              "value-container--is-multi": a,
              "value-container--has-value": o,
            }),
            n,
          ),
          t,
        );
      },
      we = function () {
        return {
          alignItems: `center`,
          alignSelf: `stretch`,
          display: `flex`,
          flexShrink: 0,
        };
      },
      Te = function (e) {
        var t = e.children,
          n = e.innerProps;
        return i.jsx(
          `div`,
          r({}, k(e, `indicatorsContainer`, { indicators: !0 }), n),
          t,
        );
      },
      Ee,
      De = [`size`],
      Oe = [`innerProps`, `isRtl`, `size`],
      ke = {
        name: `8mmkcg`,
        styles: `display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0`,
      },
      Ae = function (e) {
        var t = e.size,
          n = c(e, De);
        return i.jsx(
          `svg`,
          r(
            {
              height: t,
              width: t,
              viewBox: `0 0 20 20`,
              "aria-hidden": `true`,
              focusable: `false`,
              css: ke,
            },
            n,
          ),
        );
      },
      je = function (e) {
        return i.jsx(
          Ae,
          r({ size: 20 }, e),
          i.jsx(`path`, {
            d: `M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z`,
          }),
        );
      },
      Me = function (e) {
        return i.jsx(
          Ae,
          r({ size: 20 }, e),
          i.jsx(`path`, {
            d: `M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z`,
          }),
        );
      },
      Ne = function (e, t) {
        var r = e.isFocused,
          i = e.theme,
          a = i.spacing.baseUnit,
          o = i.colors;
        return n(
          {
            label: `indicatorContainer`,
            display: `flex`,
            transition: `color 150ms`,
          },
          t
            ? {}
            : {
                color: r ? o.neutral60 : o.neutral20,
                padding: a * 2,
                ":hover": { color: r ? o.neutral80 : o.neutral40 },
              },
        );
      },
      Pe = Ne,
      Fe = function (e) {
        var t = e.children,
          n = e.innerProps;
        return i.jsx(
          `div`,
          r(
            {},
            k(e, `dropdownIndicator`, {
              indicator: !0,
              "dropdown-indicator": !0,
            }),
            n,
          ),
          t || i.jsx(Me, null),
        );
      },
      Ie = Ne,
      Le = function (e) {
        var t = e.children,
          n = e.innerProps;
        return i.jsx(
          `div`,
          r(
            {},
            k(e, `clearIndicator`, { indicator: !0, "clear-indicator": !0 }),
            n,
          ),
          t || i.jsx(je, null),
        );
      },
      Re = function (e, t) {
        var r = e.isDisabled,
          i = e.theme,
          a = i.spacing.baseUnit,
          o = i.colors;
        return n(
          { label: `indicatorSeparator`, alignSelf: `stretch`, width: 1 },
          t
            ? {}
            : {
                backgroundColor: r ? o.neutral10 : o.neutral20,
                marginBottom: a * 2,
                marginTop: a * 2,
              },
        );
      },
      ze = function (e) {
        var t = e.innerProps;
        return i.jsx(
          `span`,
          r({}, t, k(e, `indicatorSeparator`, { "indicator-separator": !0 })),
        );
      },
      Be = i.keyframes(
        (Ee ||= f([
          `
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`,
        ])),
      ),
      Ve = function (e, t) {
        var r = e.isFocused,
          i = e.size,
          a = e.theme,
          o = a.colors,
          s = a.spacing.baseUnit;
        return n(
          {
            label: `loadingIndicator`,
            display: `flex`,
            transition: `color 150ms`,
            alignSelf: `center`,
            fontSize: i,
            lineHeight: 1,
            marginRight: i,
            textAlign: `center`,
            verticalAlign: `middle`,
          },
          t ? {} : { color: r ? o.neutral60 : o.neutral20, padding: s * 2 },
        );
      },
      He = function (e) {
        var t = e.delay,
          n = e.offset;
        return i.jsx(`span`, {
          css: i.css(
            {
              animation: `${Be} 1s ease-in-out ${t}ms infinite;`,
              backgroundColor: `currentColor`,
              borderRadius: `1em`,
              display: `inline-block`,
              marginLeft: n ? `1em` : void 0,
              height: `1em`,
              verticalAlign: `top`,
              width: `1em`,
            },
            ``,
            ``,
          ),
        });
      },
      Ue = function (e) {
        var t = e.innerProps,
          a = e.isRtl,
          o = e.size,
          s = o === void 0 ? 4 : o,
          l = c(e, Oe);
        return i.jsx(
          `div`,
          r(
            {},
            k(
              n(n({}, l), {}, { innerProps: t, isRtl: a, size: s }),
              `loadingIndicator`,
              { indicator: !0, "loading-indicator": !0 },
            ),
            t,
          ),
          i.jsx(He, { delay: 0, offset: a }),
          i.jsx(He, { delay: 160, offset: !0 }),
          i.jsx(He, { delay: 320, offset: !a }),
        );
      },
      We = function (e, t) {
        var r = e.isDisabled,
          i = e.isFocused,
          a = e.theme,
          o = a.colors,
          s = a.borderRadius,
          c = a.spacing;
        return n(
          {
            label: `control`,
            alignItems: `center`,
            cursor: `default`,
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            minHeight: c.controlHeight,
            outline: `0 !important`,
            position: `relative`,
            transition: `all 100ms`,
          },
          t
            ? {}
            : {
                backgroundColor: r ? o.neutral5 : o.neutral0,
                borderColor: r ? o.neutral10 : i ? o.primary : o.neutral20,
                borderRadius: s,
                borderStyle: `solid`,
                borderWidth: 1,
                boxShadow: i ? `0 0 0 1px ${o.primary}` : void 0,
                "&:hover": { borderColor: i ? o.primary : o.neutral30 },
              },
        );
      },
      Ge = function (e) {
        var t = e.children,
          n = e.isDisabled,
          a = e.isFocused,
          o = e.innerRef,
          s = e.innerProps,
          c = e.menuIsOpen;
        return i.jsx(
          `div`,
          r(
            { ref: o },
            k(e, `control`, {
              control: !0,
              "control--is-disabled": n,
              "control--is-focused": a,
              "control--menu-is-open": c,
            }),
            s,
            { "aria-disabled": n || void 0 },
          ),
          t,
        );
      },
      Ke = [`data`],
      qe = function (e, t) {
        var n = e.theme.spacing;
        return t
          ? {}
          : { paddingBottom: n.baseUnit * 2, paddingTop: n.baseUnit * 2 };
      },
      Je = function (e) {
        var t = e.children,
          n = e.cx,
          a = e.getStyles,
          o = e.getClassNames,
          s = e.Heading,
          c = e.headingProps,
          l = e.innerProps,
          u = e.label,
          d = e.theme,
          f = e.selectProps;
        return i.jsx(
          `div`,
          r({}, k(e, `group`, { group: !0 }), l),
          i.jsx(
            s,
            r({}, c, {
              selectProps: f,
              theme: d,
              getStyles: a,
              getClassNames: o,
              cx: n,
            }),
            u,
          ),
          i.jsx(`div`, null, t),
        );
      },
      Ye = function (e, t) {
        var r = e.theme,
          i = r.colors,
          a = r.spacing;
        return n(
          { label: `group`, cursor: `default`, display: `block` },
          t
            ? {}
            : {
                color: i.neutral40,
                fontSize: `75%`,
                fontWeight: 500,
                marginBottom: `0.25em`,
                paddingLeft: a.baseUnit * 3,
                paddingRight: a.baseUnit * 3,
                textTransform: `uppercase`,
              },
        );
      },
      Xe = function (e) {
        var t = O(e);
        t.data;
        var n = c(t, Ke);
        return i.jsx(
          `div`,
          r({}, k(e, `groupHeading`, { "group-heading": !0 }), n),
        );
      },
      Ze = Je,
      Qe = [`innerRef`, `isDisabled`, `isHidden`, `inputClassName`],
      $e = function (e, t) {
        var r = e.isDisabled,
          i = e.value,
          a = e.theme,
          o = a.spacing,
          s = a.colors;
        return n(
          n(
            {
              visibility: r ? `hidden` : `visible`,
              transform: i ? `translateZ(0)` : ``,
            },
            tt,
          ),
          t
            ? {}
            : {
                margin: o.baseUnit / 2,
                paddingBottom: o.baseUnit / 2,
                paddingTop: o.baseUnit / 2,
                color: s.neutral80,
              },
        );
      },
      et = {
        gridArea: `1 / 2`,
        font: `inherit`,
        minWidth: `2px`,
        border: 0,
        margin: 0,
        outline: 0,
        padding: 0,
      },
      tt = {
        flex: `1 1 auto`,
        display: `inline-grid`,
        gridArea: `1 / 1 / 2 / 3`,
        gridTemplateColumns: `0 min-content`,
        "&:after": n(
          {
            content: `attr(data-value) " "`,
            visibility: `hidden`,
            whiteSpace: `pre`,
          },
          et,
        ),
      },
      nt = function (e) {
        return n(
          {
            label: `input`,
            color: `inherit`,
            background: 0,
            opacity: +!e,
            width: `100%`,
          },
          et,
        );
      },
      rt = function (e) {
        var t = e.cx,
          n = e.value,
          a = O(e),
          o = a.innerRef,
          s = a.isDisabled,
          l = a.isHidden,
          u = a.inputClassName,
          d = c(a, Qe);
        return i.jsx(
          `div`,
          r({}, k(e, `input`, { "input-container": !0 }), {
            "data-value": n || ``,
          }),
          i.jsx(
            `input`,
            r(
              {
                className: t({ input: !0 }, u),
                ref: o,
                style: nt(l),
                disabled: s,
              },
              d,
            ),
          ),
        );
      },
      it = function (e, t) {
        var r = e.theme,
          i = r.spacing,
          a = r.borderRadius,
          o = r.colors;
        return n(
          { label: `multiValue`, display: `flex`, minWidth: 0 },
          t
            ? {}
            : {
                backgroundColor: o.neutral10,
                borderRadius: a / 2,
                margin: i.baseUnit / 2,
              },
        );
      },
      at = function (e, t) {
        var r = e.theme,
          i = r.borderRadius,
          a = r.colors,
          o = e.cropWithEllipsis;
        return n(
          {
            overflow: `hidden`,
            textOverflow: o || o === void 0 ? `ellipsis` : void 0,
            whiteSpace: `nowrap`,
          },
          t
            ? {}
            : {
                borderRadius: i / 2,
                color: a.neutral80,
                fontSize: `85%`,
                padding: 3,
                paddingLeft: 6,
              },
        );
      },
      ot = function (e, t) {
        var r = e.theme,
          i = r.spacing,
          a = r.borderRadius,
          o = r.colors,
          s = e.isFocused;
        return n(
          { alignItems: `center`, display: `flex` },
          t
            ? {}
            : {
                borderRadius: a / 2,
                backgroundColor: s ? o.dangerLight : void 0,
                paddingLeft: i.baseUnit,
                paddingRight: i.baseUnit,
                ":hover": { backgroundColor: o.dangerLight, color: o.danger },
              },
        );
      },
      st = function (e) {
        var t = e.children,
          n = e.innerProps;
        return i.jsx(`div`, n, t);
      },
      ct = st,
      lt = st;
    function ut(e) {
      var t = e.children,
        n = e.innerProps;
      return i.jsx(
        `div`,
        r({ role: `button` }, n),
        t || i.jsx(je, { size: 14 }),
      );
    }
    var dt = function (e) {
        var t = e.children,
          r = e.components,
          a = e.data,
          o = e.innerProps,
          s = e.isDisabled,
          c = e.removeProps,
          l = e.selectProps,
          u = r.Container,
          d = r.Label,
          f = r.Remove;
        return i.jsx(
          u,
          {
            data: a,
            innerProps: n(
              n(
                {},
                k(e, `multiValue`, {
                  "multi-value": !0,
                  "multi-value--is-disabled": s,
                }),
              ),
              o,
            ),
            selectProps: l,
          },
          i.jsx(
            d,
            {
              data: a,
              innerProps: n(
                {},
                k(e, `multiValueLabel`, { "multi-value__label": !0 }),
              ),
              selectProps: l,
            },
            t,
          ),
          i.jsx(f, {
            data: a,
            innerProps: n(
              n({}, k(e, `multiValueRemove`, { "multi-value__remove": !0 })),
              {},
              { "aria-label": `Remove ${t || `option`}` },
              c,
            ),
            selectProps: l,
          }),
        );
      },
      ft = function (e, t) {
        var r = e.isDisabled,
          i = e.isFocused,
          a = e.isSelected,
          o = e.theme,
          s = o.spacing,
          c = o.colors;
        return n(
          {
            label: `option`,
            cursor: `default`,
            display: `block`,
            fontSize: `inherit`,
            width: `100%`,
            userSelect: `none`,
            WebkitTapHighlightColor: `rgba(0, 0, 0, 0)`,
          },
          t
            ? {}
            : {
                backgroundColor: a
                  ? c.primary
                  : i
                    ? c.primary25
                    : `transparent`,
                color: r ? c.neutral20 : a ? c.neutral0 : `inherit`,
                padding: `${s.baseUnit * 2}px ${s.baseUnit * 3}px`,
                ":active": {
                  backgroundColor: r ? void 0 : a ? c.primary : c.primary50,
                },
              },
        );
      },
      pt = function (e) {
        var t = e.children,
          n = e.isDisabled,
          a = e.isFocused,
          o = e.isSelected,
          s = e.innerRef,
          c = e.innerProps;
        return i.jsx(
          `div`,
          r(
            {},
            k(e, `option`, {
              option: !0,
              "option--is-disabled": n,
              "option--is-focused": a,
              "option--is-selected": o,
            }),
            { ref: s, "aria-disabled": n },
            c,
          ),
          t,
        );
      },
      mt = function (e, t) {
        var r = e.theme,
          i = r.spacing,
          a = r.colors;
        return n(
          { label: `placeholder`, gridArea: `1 / 1 / 2 / 3` },
          t
            ? {}
            : {
                color: a.neutral50,
                marginLeft: i.baseUnit / 2,
                marginRight: i.baseUnit / 2,
              },
        );
      },
      ht = function (e) {
        var t = e.children,
          n = e.innerProps;
        return i.jsx(
          `div`,
          r({}, k(e, `placeholder`, { placeholder: !0 }), n),
          t,
        );
      },
      gt = function (e, t) {
        var r = e.isDisabled,
          i = e.theme,
          a = i.spacing,
          o = i.colors;
        return n(
          {
            label: `singleValue`,
            gridArea: `1 / 1 / 2 / 3`,
            maxWidth: `100%`,
            overflow: `hidden`,
            textOverflow: `ellipsis`,
            whiteSpace: `nowrap`,
          },
          t
            ? {}
            : {
                color: r ? o.neutral40 : o.neutral80,
                marginLeft: a.baseUnit / 2,
                marginRight: a.baseUnit / 2,
              },
        );
      },
      _t = {
        ClearIndicator: Le,
        Control: Ge,
        DropdownIndicator: Fe,
        DownChevron: Me,
        CrossIcon: je,
        Group: Ze,
        GroupHeading: Xe,
        IndicatorsContainer: Te,
        IndicatorSeparator: ze,
        Input: rt,
        LoadingIndicator: Ue,
        Menu: ue,
        MenuList: fe,
        MenuPortal: ye,
        LoadingMessage: _e,
        NoOptionsMessage: ge,
        MultiValue: dt,
        MultiValueContainer: ct,
        MultiValueLabel: lt,
        MultiValueRemove: ut,
        Option: pt,
        Placeholder: ht,
        SelectContainer: xe,
        SingleValue: function (e) {
          var t = e.children,
            n = e.isDisabled,
            a = e.innerProps;
          return i.jsx(
            `div`,
            r(
              {},
              k(e, `singleValue`, {
                "single-value": !0,
                "single-value--is-disabled": n,
              }),
              a,
            ),
            t,
          );
        },
        ValueContainer: Ce,
      };
    ((e.MenuPlacer = le),
      (e.classNames = E),
      (e.cleanValue = D),
      (e.clearIndicatorCSS = Ie),
      (e.components = _t),
      (e.containerCSS = be),
      (e.css = We),
      (e.css$1 = gt),
      (e.defaultComponents = function (e) {
        return n(n({}, _t), e.components);
      }),
      (e.dropdownIndicatorCSS = Pe),
      (e.groupCSS = qe),
      (e.groupHeadingCSS = Ye),
      (e.handleInputChange = A),
      (e.indicatorSeparatorCSS = Re),
      (e.indicatorsContainerCSS = we),
      (e.inputCSS = $e),
      (e.isDocumentElement = j),
      (e.isMobileDevice = V),
      (e.isTouchCapable = B),
      (e.loadingIndicatorCSS = Ve),
      (e.loadingMessageCSS = he),
      (e.menuCSS = $),
      (e.menuListCSS = de),
      (e.menuPortalCSS = ve),
      (e.multiValueAsValue = q),
      (e.multiValueCSS = it),
      (e.multiValueLabelCSS = at),
      (e.multiValueRemoveCSS = ot),
      (e.noOptionsMessageCSS = me),
      (e.noop = w),
      (e.notNullish = K),
      (e.optionCSS = ft),
      (e.placeholderCSS = mt),
      (e.removeProps = J),
      (e.scrollIntoView = R),
      (e.singleValueAsValue = ne),
      (e.supportsPassiveEvents = G),
      (e.valueContainerCSS = Se),
      (e.valueTernary = te));
  }),
  le = r({ default: () => fe });
function ue(e, t) {
  return !!(e === t || (pe(e) && pe(t)));
}
function de(e, t) {
  if (e.length !== t.length) return !1;
  for (var n = 0; n < e.length; n++) if (!ue(e[n], t[n])) return !1;
  return !0;
}
function fe(e, t) {
  t === void 0 && (t = de);
  var n = null;
  function r() {
    var r = [...arguments];
    if (n && n.lastThis === this && t(r, n.lastArgs)) return n.lastResult;
    var i = e.apply(this, r);
    return ((n = { lastResult: i, lastArgs: r, lastThis: this }), i);
  }
  return (
    (r.clear = function () {
      n = null;
    }),
    r
  );
}
var pe,
  me = n(() => {
    pe =
      Number.isNaN ||
      function (e) {
        return typeof e == `number` && e !== e;
      };
  }),
  he = i((n) => {
    var r = x(),
      i = d(),
      a = S(),
      o = C(),
      s = T(),
      c = A(),
      l = P(),
      u = t(),
      f = ce(),
      p = ie(),
      m = (me(), e(le)),
      h = y();
    function g(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function _(e) {
      if (e && e.__esModule) return e;
      var t = Object.create(null);
      return (
        e &&
          Object.keys(e).forEach(function (n) {
            if (n !== "default") {
              var r = Object.getOwnPropertyDescriptor(e, n);
              Object.defineProperty(
                t,
                n,
                r.get
                  ? r
                  : {
                      enumerable: !0,
                      get: function () {
                        return e[n];
                      },
                    },
              );
            }
          }),
        (t.default = e),
        Object.freeze(t)
      );
    }
    for (
      var v = _(u),
        b = g(m),
        w = {
          name: `7pg0cj-a11yText`,
          styles: `label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap`,
        },
        E = function (e) {
          return p.jsx(`span`, r({ css: w }, e));
        },
        D = {
          guidance: function (e) {
            var t = e.isSearchable,
              n = e.isMulti,
              r = e.tabSelectsValue,
              i = e.context,
              a = e.isInitialFocus;
            switch (i) {
              case `menu`:
                return `Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu${r ? `, press Tab to select the option and exit the menu` : ``}.`;
              case `input`:
                return a
                  ? `${e[`aria-label`] || `Select`} is focused ${t ? `,type to refine list` : ``}, press Down to open the menu, ${n ? ` press left to focus selected values` : ``}`
                  : ``;
              case `value`:
                return `Use left and right to toggle between focused values, press Backspace to remove the currently focused value`;
              default:
                return ``;
            }
          },
          onChange: function (e) {
            var t = e.action,
              n = e.label,
              r = n === void 0 ? `` : n,
              i = e.labels,
              a = e.isDisabled;
            switch (t) {
              case `deselect-option`:
              case `pop-value`:
              case `remove-value`:
                return `option ${r}, deselected.`;
              case `clear`:
                return `All selected options have been cleared.`;
              case `initial-input-focus`:
                return `option${i.length > 1 ? `s` : ``} ${i.join(`,`)}, selected.`;
              case `select-option`:
                return a
                  ? `option ${r} is disabled. Select another option.`
                  : `option ${r}, selected.`;
              default:
                return ``;
            }
          },
          onFocus: function (e) {
            var t = e.context,
              n = e.focused,
              r = e.options,
              i = e.label,
              a = i === void 0 ? `` : i,
              o = e.selectValue,
              s = e.isDisabled,
              c = e.isSelected,
              l = e.isAppleDevice,
              u = function (e, t) {
                return e && e.length
                  ? `${e.indexOf(t) + 1} of ${e.length}`
                  : ``;
              };
            return t === `value` && o
              ? `value ${a} focused, ${u(o, n)}.`
              : t === `menu` && l
                ? `${a}${`${c ? ` selected` : ``}${s ? ` disabled` : ``}`}, ${u(r, n)}.`
                : ``;
          },
          onFilter: function (e) {
            var t = e.inputValue;
            return `${e.resultsMessage}${t ? ` for search term ` + t : ``}.`;
          },
        },
        O = function (e) {
          var t = e.ariaSelection,
            n = e.focusedOption,
            r = e.focusedValue,
            a = e.focusableOptions,
            o = e.isFocused,
            s = e.selectValue,
            c = e.selectProps,
            l = e.id,
            d = e.isAppleDevice,
            f = c.ariaLiveMessages,
            m = c.getOptionLabel,
            h = c.inputValue,
            g = c.isMulti,
            _ = c.isOptionDisabled,
            v = c.isSearchable,
            y = c.menuIsOpen,
            b = c.options,
            x = c.screenReaderStatus,
            S = c.tabSelectsValue,
            C = c.isLoading,
            w = c[`aria-label`],
            T = c[`aria-live`],
            O = u.useMemo(
              function () {
                return i(i({}, D), f || {});
              },
              [f],
            ),
            k = u.useMemo(
              function () {
                var e = ``;
                if (t && O.onChange) {
                  var n = t.option,
                    r = t.options,
                    a = t.removedValue,
                    o = t.removedValues,
                    c = t.value,
                    l =
                      a ||
                      n ||
                      (function (e) {
                        return Array.isArray(e) ? null : e;
                      })(c),
                    u = l ? m(l) : ``,
                    d = r || o || void 0,
                    f = d ? d.map(m) : [],
                    p = i({ isDisabled: l && _(l, s), label: u, labels: f }, t);
                  e = O.onChange(p);
                }
                return e;
              },
              [t, O, _, s, m],
            ),
            A = u.useMemo(
              function () {
                var e = ``,
                  t = n || r,
                  i = !!(n && s && s.includes(n));
                if (t && O.onFocus) {
                  var o = {
                    focused: t,
                    label: m(t),
                    isDisabled: _(t, s),
                    isSelected: i,
                    options: a,
                    context: t === n ? `menu` : `value`,
                    selectValue: s,
                    isAppleDevice: d,
                  };
                  e = O.onFocus(o);
                }
                return e;
              },
              [n, r, m, _, O, a, s, d],
            ),
            j = u.useMemo(
              function () {
                var e = ``;
                if (y && b.length && !C && O.onFilter) {
                  var t = x({ count: a.length });
                  e = O.onFilter({ inputValue: h, resultsMessage: t });
                }
                return e;
              },
              [a, h, y, O, b, x, C],
            ),
            M = t?.action === `initial-input-focus`,
            N = u.useMemo(
              function () {
                var e = ``;
                if (O.guidance) {
                  var t = r ? `value` : y ? `menu` : `input`;
                  e = O.guidance({
                    "aria-label": w,
                    context: t,
                    isDisabled: n && _(n, s),
                    isMulti: g,
                    isSearchable: v,
                    tabSelectsValue: S,
                    isInitialFocus: M,
                  });
                }
                return e;
              },
              [w, n, r, g, _, v, y, O, s, S, M],
            ),
            P = p.jsx(
              u.Fragment,
              null,
              p.jsx(`span`, { id: `aria-selection` }, k),
              p.jsx(`span`, { id: `aria-focused` }, A),
              p.jsx(`span`, { id: `aria-results` }, j),
              p.jsx(`span`, { id: `aria-guidance` }, N),
            );
          return p.jsx(
            u.Fragment,
            null,
            p.jsx(E, { id: l }, M && P),
            p.jsx(
              E,
              {
                "aria-live": T,
                "aria-atomic": `false`,
                "aria-relevant": `additions text`,
                role: `log`,
              },
              o && !M && P,
            ),
          );
        },
        k = [
          { base: `A`, letters: `AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ` },
          { base: `AA`, letters: `Ꜳ` },
          { base: `AE`, letters: `ÆǼǢ` },
          { base: `AO`, letters: `Ꜵ` },
          { base: `AU`, letters: `Ꜷ` },
          { base: `AV`, letters: `ꜸꜺ` },
          { base: `AY`, letters: `Ꜽ` },
          { base: `B`, letters: `BⒷＢḂḄḆɃƂƁ` },
          { base: `C`, letters: `CⒸＣĆĈĊČÇḈƇȻꜾ` },
          { base: `D`, letters: `DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ` },
          { base: `DZ`, letters: `ǱǄ` },
          { base: `Dz`, letters: `ǲǅ` },
          { base: `E`, letters: `EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ` },
          { base: `F`, letters: `FⒻＦḞƑꝻ` },
          { base: `G`, letters: `GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ` },
          { base: `H`, letters: `HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ` },
          { base: `I`, letters: `IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ` },
          { base: `J`, letters: `JⒿＪĴɈ` },
          { base: `K`, letters: `KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ` },
          { base: `L`, letters: `LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ` },
          { base: `LJ`, letters: `Ǉ` },
          { base: `Lj`, letters: `ǈ` },
          { base: `M`, letters: `MⓂＭḾṀṂⱮƜ` },
          { base: `N`, letters: `NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ` },
          { base: `NJ`, letters: `Ǌ` },
          { base: `Nj`, letters: `ǋ` },
          {
            base: `O`,
            letters: `OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ`,
          },
          { base: `OI`, letters: `Ƣ` },
          { base: `OO`, letters: `Ꝏ` },
          { base: `OU`, letters: `Ȣ` },
          { base: `P`, letters: `PⓅＰṔṖƤⱣꝐꝒꝔ` },
          { base: `Q`, letters: `QⓆＱꝖꝘɊ` },
          { base: `R`, letters: `RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ` },
          { base: `S`, letters: `SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ` },
          { base: `T`, letters: `TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ` },
          { base: `TZ`, letters: `Ꜩ` },
          { base: `U`, letters: `UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ` },
          { base: `V`, letters: `VⓋＶṼṾƲꝞɅ` },
          { base: `VY`, letters: `Ꝡ` },
          { base: `W`, letters: `WⓌＷẀẂŴẆẄẈⱲ` },
          { base: `X`, letters: `XⓍＸẊẌ` },
          { base: `Y`, letters: `YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ` },
          { base: `Z`, letters: `ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ` },
          { base: `a`, letters: `aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ` },
          { base: `aa`, letters: `ꜳ` },
          { base: `ae`, letters: `æǽǣ` },
          { base: `ao`, letters: `ꜵ` },
          { base: `au`, letters: `ꜷ` },
          { base: `av`, letters: `ꜹꜻ` },
          { base: `ay`, letters: `ꜽ` },
          { base: `b`, letters: `bⓑｂḃḅḇƀƃɓ` },
          { base: `c`, letters: `cⓒｃćĉċčçḉƈȼꜿↄ` },
          { base: `d`, letters: `dⓓｄḋďḍḑḓḏđƌɖɗꝺ` },
          { base: `dz`, letters: `ǳǆ` },
          { base: `e`, letters: `eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ` },
          { base: `f`, letters: `fⓕｆḟƒꝼ` },
          { base: `g`, letters: `gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ` },
          { base: `h`, letters: `hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ` },
          { base: `hv`, letters: `ƕ` },
          { base: `i`, letters: `iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı` },
          { base: `j`, letters: `jⓙｊĵǰɉ` },
          { base: `k`, letters: `kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ` },
          { base: `l`, letters: `lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ` },
          { base: `lj`, letters: `ǉ` },
          { base: `m`, letters: `mⓜｍḿṁṃɱɯ` },
          { base: `n`, letters: `nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ` },
          { base: `nj`, letters: `ǌ` },
          {
            base: `o`,
            letters: `oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ`,
          },
          { base: `oi`, letters: `ƣ` },
          { base: `ou`, letters: `ȣ` },
          { base: `oo`, letters: `ꝏ` },
          { base: `p`, letters: `pⓟｐṕṗƥᵽꝑꝓꝕ` },
          { base: `q`, letters: `qⓠｑɋꝗꝙ` },
          { base: `r`, letters: `rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ` },
          { base: `s`, letters: `sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ` },
          { base: `t`, letters: `tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ` },
          { base: `tz`, letters: `ꜩ` },
          { base: `u`, letters: `uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ` },
          { base: `v`, letters: `vⓥｖṽṿʋꝟʌ` },
          { base: `vy`, letters: `ꝡ` },
          { base: `w`, letters: `wⓦｗẁẃŵẇẅẘẉⱳ` },
          { base: `x`, letters: `xⓧｘẋẍ` },
          { base: `y`, letters: `yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ` },
          { base: `z`, letters: `zⓩｚźẑżžẓẕƶȥɀⱬꝣ` },
        ],
        j = RegExp(
          `[` +
            k
              .map(function (e) {
                return e.letters;
              })
              .join(``) +
            `]`,
          `g`,
        ),
        M = {},
        N = 0;
      N < k.length;
      N++
    )
      for (var F = k[N], I = 0; I < F.letters.length; I++)
        M[F.letters[I]] = F.base;
    var L = function (e) {
        return e.replace(j, function (e) {
          return M[e];
        });
      },
      R = b.default(L),
      z = function (e) {
        return e.replace(/^\s+|\s+$/g, ``);
      },
      B = function (e) {
        return `${e.label} ${e.value}`;
      },
      V = function (e) {
        return function (t, n) {
          if (t.data.__isNew__) return !0;
          var r = i(
              {
                ignoreCase: !0,
                ignoreAccents: !0,
                stringify: B,
                trim: !0,
                matchFrom: `any`,
              },
              e,
            ),
            a = r.ignoreCase,
            o = r.ignoreAccents,
            s = r.stringify,
            c = r.trim,
            l = r.matchFrom,
            u = c ? z(n) : n,
            d = c ? z(s(t)) : s(t);
          return (
            a && ((u = u.toLowerCase()), (d = d.toLowerCase())),
            o && ((u = R(u)), (d = L(d))),
            l === `start` ? d.substr(0, u.length) === u : d.indexOf(u) > -1
          );
        };
      },
      H = [`innerRef`];
    function U(e) {
      var t = e.innerRef,
        n = h(e, H),
        i = f.removeProps(n, `onExited`, `in`, `enter`, `exit`, `appear`);
      return p.jsx(
        `input`,
        r({ ref: t }, i, {
          css: p.css(
            {
              label: `dummyInput`,
              background: 0,
              border: 0,
              caretColor: `transparent`,
              fontSize: `inherit`,
              gridArea: `1 / 1 / 2 / 3`,
              outline: 0,
              padding: 0,
              width: 1,
              color: `transparent`,
              left: -100,
              opacity: 0,
              position: `relative`,
              transform: `scale(.01)`,
            },
            ``,
            ``,
          ),
        }),
      );
    }
    var W = function (e) {
      (e.cancelable && e.preventDefault(), e.stopPropagation());
    };
    function G(e) {
      var t = e.isEnabled,
        n = e.onBottomArrive,
        r = e.onBottomLeave,
        i = e.onTopArrive,
        a = e.onTopLeave,
        o = u.useRef(!1),
        s = u.useRef(!1),
        c = u.useRef(0),
        l = u.useRef(null),
        d = u.useCallback(
          function (e, t) {
            if (l.current !== null) {
              var c = l.current,
                u = c.scrollTop,
                d = c.scrollHeight,
                f = c.clientHeight,
                p = l.current,
                m = t > 0,
                h = d - f - u,
                g = !1;
              (h > t && o.current && (r && r(e), (o.current = !1)),
                m && s.current && (a && a(e), (s.current = !1)),
                m && t > h
                  ? (n && !o.current && n(e),
                    (p.scrollTop = d),
                    (g = !0),
                    (o.current = !0))
                  : !m &&
                    -t > u &&
                    (i && !s.current && i(e),
                    (p.scrollTop = 0),
                    (g = !0),
                    (s.current = !0)),
                g && W(e));
            }
          },
          [n, r, i, a],
        ),
        p = u.useCallback(
          function (e) {
            d(e, e.deltaY);
          },
          [d],
        ),
        m = u.useCallback(function (e) {
          c.current = e.changedTouches[0].clientY;
        }, []),
        h = u.useCallback(
          function (e) {
            d(e, c.current - e.changedTouches[0].clientY);
          },
          [d],
        ),
        g = u.useCallback(
          function (e) {
            if (e) {
              var t = f.supportsPassiveEvents ? { passive: !1 } : !1;
              (e.addEventListener(`wheel`, p, t),
                e.addEventListener(`touchstart`, m, t),
                e.addEventListener(`touchmove`, h, t));
            }
          },
          [h, m, p],
        ),
        _ = u.useCallback(
          function (e) {
            e &&
              (e.removeEventListener(`wheel`, p, !1),
              e.removeEventListener(`touchstart`, m, !1),
              e.removeEventListener(`touchmove`, h, !1));
          },
          [h, m, p],
        );
      return (
        u.useEffect(
          function () {
            if (t) {
              var e = l.current;
              return (
                g(e),
                function () {
                  _(e);
                }
              );
            }
          },
          [t, g, _],
        ),
        function (e) {
          l.current = e;
        }
      );
    }
    var K = [`boxSizing`, `height`, `overflow`, `paddingRight`, `position`],
      ee = {
        boxSizing: `border-box`,
        overflow: `hidden`,
        position: `relative`,
        height: `100%`,
      };
    function te(e) {
      e.cancelable && e.preventDefault();
    }
    function ne(e) {
      e.stopPropagation();
    }
    function q() {
      var e = this.scrollTop,
        t = this.scrollHeight,
        n = e + this.offsetHeight;
      e === 0 ? (this.scrollTop = 1) : n === t && (this.scrollTop = e - 1);
    }
    function J() {
      return `ontouchstart` in window || navigator.maxTouchPoints;
    }
    var Y = !!(
        typeof window < `u` &&
        window.document &&
        window.document.createElement
      ),
      X = 0,
      Z = { capture: !1, passive: !1 };
    function re(e) {
      var t = e.isEnabled,
        n = e.accountForScrollbars,
        r = n === void 0 || n,
        i = u.useRef({}),
        a = u.useRef(null),
        o = u.useCallback(
          function (e) {
            if (Y) {
              var t = document.body,
                n = t && t.style;
              if (
                (r &&
                  K.forEach(function (e) {
                    var t = n && n[e];
                    i.current[e] = t;
                  }),
                r && X < 1)
              ) {
                var a = parseInt(i.current.paddingRight, 10) || 0,
                  o = document.body ? document.body.clientWidth : 0,
                  s = window.innerWidth - o + a || 0;
                (Object.keys(ee).forEach(function (e) {
                  var t = ee[e];
                  n && (n[e] = t);
                }),
                  n && (n.paddingRight = `${s}px`));
              }
              (t &&
                J() &&
                (t.addEventListener(`touchmove`, te, Z),
                e &&
                  (e.addEventListener(`touchstart`, q, Z),
                  e.addEventListener(`touchmove`, ne, Z))),
                (X += 1));
            }
          },
          [r],
        ),
        s = u.useCallback(
          function (e) {
            if (Y) {
              var t = document.body,
                n = t && t.style;
              ((X = Math.max(X - 1, 0)),
                r &&
                  X < 1 &&
                  K.forEach(function (e) {
                    var t = i.current[e];
                    n && (n[e] = t);
                  }),
                t &&
                  J() &&
                  (t.removeEventListener(`touchmove`, te, Z),
                  e &&
                    (e.removeEventListener(`touchstart`, q, Z),
                    e.removeEventListener(`touchmove`, ne, Z))));
            }
          },
          [r],
        );
      return (
        u.useEffect(
          function () {
            if (t) {
              var e = a.current;
              return (
                o(e),
                function () {
                  s(e);
                }
              );
            }
          },
          [t, o, s],
        ),
        function (e) {
          a.current = e;
        }
      );
    }
    var Q = function (e) {
        var t = e.target;
        return (
          t.ownerDocument.activeElement && t.ownerDocument.activeElement.blur()
        );
      },
      ae = {
        name: `1kfdb0e`,
        styles: `position:fixed;left:0;bottom:0;right:0;top:0`,
      };
    function $(e) {
      var t = e.children,
        n = e.lockEnabled,
        r = e.captureEnabled,
        i = r === void 0 || r,
        a = e.onBottomArrive,
        o = e.onBottomLeave,
        s = e.onTopArrive,
        c = e.onTopLeave,
        l = G({
          isEnabled: i,
          onBottomArrive: a,
          onBottomLeave: o,
          onTopArrive: s,
          onTopLeave: c,
        }),
        d = re({ isEnabled: n });
      return p.jsx(
        u.Fragment,
        null,
        n && p.jsx(`div`, { onClick: Q, css: ae }),
        t(function (e) {
          (l(e), d(e));
        }),
      );
    }
    var oe = {
        name: `1a0ro4n-requiredInput`,
        styles: `label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%`,
      },
      se = function (e) {
        var t = e.name,
          n = e.onFocus;
        return p.jsx(`input`, {
          required: !0,
          name: t,
          tabIndex: -1,
          "aria-hidden": `true`,
          onFocus: n,
          css: oe,
          value: ``,
          onChange: function () {},
        });
      };
    function ue(e) {
      return (
        typeof window < `u` &&
        window.navigator != null &&
        e.test(
          window.navigator.userAgentData?.platform || window.navigator.platform,
        )
      );
    }
    function de() {
      return ue(/^iPhone/i);
    }
    function fe() {
      return ue(/^Mac/i);
    }
    function pe() {
      return ue(/^iPad/i) || (fe() && navigator.maxTouchPoints > 1);
    }
    function he() {
      return de() || pe();
    }
    function ge() {
      return fe() || he();
    }
    var _e = function (e) {
        return e.label;
      },
      ve = function (e) {
        return e.label;
      },
      ye = function (e) {
        return e.value;
      },
      be = function (e) {
        return !!e.isDisabled;
      },
      xe = {
        clearIndicator: f.clearIndicatorCSS,
        container: f.containerCSS,
        control: f.css,
        dropdownIndicator: f.dropdownIndicatorCSS,
        group: f.groupCSS,
        groupHeading: f.groupHeadingCSS,
        indicatorsContainer: f.indicatorsContainerCSS,
        indicatorSeparator: f.indicatorSeparatorCSS,
        input: f.inputCSS,
        loadingIndicator: f.loadingIndicatorCSS,
        loadingMessage: f.loadingMessageCSS,
        menu: f.menuCSS,
        menuList: f.menuListCSS,
        menuPortal: f.menuPortalCSS,
        multiValue: f.multiValueCSS,
        multiValueLabel: f.multiValueLabelCSS,
        multiValueRemove: f.multiValueRemoveCSS,
        noOptionsMessage: f.noOptionsMessageCSS,
        option: f.optionCSS,
        placeholder: f.placeholderCSS,
        singleValue: f.css$1,
        valueContainer: f.valueContainerCSS,
      };
    function Se(e) {
      var t =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
        n = i({}, e);
      return (
        Object.keys(t).forEach(function (r) {
          var i = r;
          n[i] = e[i]
            ? function (n, r) {
                return t[i](e[i](n, r), r);
              }
            : t[i];
        }),
        n
      );
    }
    var Ce = {
        primary: `#2684FF`,
        primary75: `#4C9AFF`,
        primary50: `#B2D4FF`,
        primary25: `#DEEBFF`,
        danger: `#DE350B`,
        dangerLight: `#FFBDAD`,
        neutral0: `hsl(0, 0%, 100%)`,
        neutral5: `hsl(0, 0%, 95%)`,
        neutral10: `hsl(0, 0%, 90%)`,
        neutral20: `hsl(0, 0%, 80%)`,
        neutral30: `hsl(0, 0%, 70%)`,
        neutral40: `hsl(0, 0%, 60%)`,
        neutral50: `hsl(0, 0%, 50%)`,
        neutral60: `hsl(0, 0%, 40%)`,
        neutral70: `hsl(0, 0%, 30%)`,
        neutral80: `hsl(0, 0%, 20%)`,
        neutral90: `hsl(0, 0%, 10%)`,
      },
      we = 4,
      Te = 4,
      Ee = {
        borderRadius: we,
        colors: Ce,
        spacing: { baseUnit: Te, controlHeight: 38, menuGutter: Te * 2 },
      },
      De = {
        "aria-live": `polite`,
        backspaceRemovesValue: !0,
        blurInputOnSelect: f.isTouchCapable(),
        captureMenuScroll: !f.isTouchCapable(),
        classNames: {},
        closeMenuOnSelect: !0,
        closeMenuOnScroll: !1,
        components: {},
        controlShouldRenderValue: !0,
        escapeClearsValue: !1,
        filterOption: V(),
        formatGroupLabel: _e,
        getOptionLabel: ve,
        getOptionValue: ye,
        isDisabled: !1,
        isLoading: !1,
        isMulti: !1,
        isRtl: !1,
        isSearchable: !0,
        isOptionDisabled: be,
        loadingMessage: function () {
          return `Loading...`;
        },
        maxMenuHeight: 300,
        minMenuHeight: 140,
        menuIsOpen: !1,
        menuPlacement: `bottom`,
        menuPosition: `absolute`,
        menuShouldBlockScroll: !1,
        menuShouldScrollIntoView: !f.isMobileDevice(),
        noOptionsMessage: function () {
          return `No options`;
        },
        openMenuOnFocus: !1,
        openMenuOnClick: !0,
        options: [],
        pageSize: 5,
        placeholder: `Select...`,
        screenReaderStatus: function (e) {
          var t = e.count;
          return `${t} result${t === 1 ? `` : `s`} available`;
        },
        styles: {},
        tabIndex: 0,
        tabSelectsValue: !0,
        unstyled: !1,
      };
    function Oe(e, t, n, r) {
      return {
        type: `option`,
        data: t,
        isDisabled: ze(e, t, n),
        isSelected: Be(e, t, n),
        label: Le(e, t),
        value: Re(e, t),
        index: r,
      };
    }
    function ke(e, t) {
      return e.options
        .map(function (n, r) {
          if (`options` in n) {
            var i = n.options
              .map(function (n, r) {
                return Oe(e, n, t, r);
              })
              .filter(function (t) {
                return Ne(e, t);
              });
            return i.length > 0
              ? { type: `group`, data: n, options: i, index: r }
              : void 0;
          }
          var a = Oe(e, n, t, r);
          return Ne(e, a) ? a : void 0;
        })
        .filter(f.notNullish);
    }
    function Ae(e) {
      return e.reduce(function (e, t) {
        return (
          t.type === `group`
            ? e.push.apply(
                e,
                l(
                  t.options.map(function (e) {
                    return e.data;
                  }),
                ),
              )
            : e.push(t.data),
          e
        );
      }, []);
    }
    function je(e, t) {
      return e.reduce(function (e, n) {
        return (
          n.type === `group`
            ? e.push.apply(
                e,
                l(
                  n.options.map(function (e) {
                    return { data: e.data, id: `${t}-${n.index}-${e.index}` };
                  }),
                ),
              )
            : e.push({ data: n.data, id: `${t}-${n.index}` }),
          e
        );
      }, []);
    }
    function Me(e, t) {
      return Ae(ke(e, t));
    }
    function Ne(e, t) {
      var n = e.inputValue,
        r = n === void 0 ? `` : n,
        i = t.data,
        a = t.isSelected,
        o = t.label,
        s = t.value;
      return (!He(e) || !a) && Ve(e, { label: o, value: s, data: i }, r);
    }
    function Pe(e, t) {
      var n = e.focusedValue,
        r = e.selectValue.indexOf(n);
      if (r > -1) {
        if (t.indexOf(n) > -1) return n;
        if (r < t.length) return t[r];
      }
      return null;
    }
    function Fe(e, t) {
      var n = e.focusedOption;
      return n && t.indexOf(n) > -1 ? n : t[0];
    }
    var Ie = function (e, t) {
        return (
          e.find(function (e) {
            return e.data === t;
          })?.id || null
        );
      },
      Le = function (e, t) {
        return e.getOptionLabel(t);
      },
      Re = function (e, t) {
        return e.getOptionValue(t);
      };
    function ze(e, t, n) {
      return (
        typeof e.isOptionDisabled == `function` && e.isOptionDisabled(t, n)
      );
    }
    function Be(e, t, n) {
      if (n.indexOf(t) > -1) return !0;
      if (typeof e.isOptionSelected == `function`)
        return e.isOptionSelected(t, n);
      var r = Re(e, t);
      return n.some(function (t) {
        return Re(e, t) === r;
      });
    }
    function Ve(e, t, n) {
      return !e.filterOption || e.filterOption(t, n);
    }
    var He = function (e) {
        var t = e.hideSelectedOptions,
          n = e.isMulti;
        return t === void 0 ? n : t;
      },
      Ue = 1,
      We = (function (e) {
        s(n, e);
        var t = c(n);
        function n(e) {
          var r;
          if (
            (a(this, n),
            (r = t.call(this, e)),
            (r.state = {
              ariaSelection: null,
              focusedOption: null,
              focusedOptionId: null,
              focusableOptionsWithIds: [],
              focusedValue: null,
              inputIsHidden: !1,
              isFocused: !1,
              selectValue: [],
              clearFocusValueOnUpdate: !1,
              prevWasFocused: !1,
              inputIsHiddenAfterUpdate: void 0,
              prevProps: void 0,
              instancePrefix: ``,
            }),
            (r.blockOptionHover = !1),
            (r.isComposing = !1),
            (r.commonProps = void 0),
            (r.initialTouchX = 0),
            (r.initialTouchY = 0),
            (r.openAfterFocus = !1),
            (r.scrollToFocusedOptionOnUpdate = !1),
            (r.userIsDragging = void 0),
            (r.isAppleDevice = ge()),
            (r.controlRef = null),
            (r.getControlRef = function (e) {
              r.controlRef = e;
            }),
            (r.focusedOptionRef = null),
            (r.getFocusedOptionRef = function (e) {
              r.focusedOptionRef = e;
            }),
            (r.menuListRef = null),
            (r.getMenuListRef = function (e) {
              r.menuListRef = e;
            }),
            (r.inputRef = null),
            (r.getInputRef = function (e) {
              r.inputRef = e;
            }),
            (r.focus = r.focusInput),
            (r.blur = r.blurInput),
            (r.onChange = function (e, t) {
              var n = r.props,
                i = n.onChange;
              ((t.name = n.name), r.ariaOnChange(e, t), i(e, t));
            }),
            (r.setValue = function (e, t, n) {
              var i = r.props,
                a = i.closeMenuOnSelect,
                o = i.isMulti,
                s = i.inputValue;
              (r.onInputChange(``, { action: `set-value`, prevInputValue: s }),
                a &&
                  (r.setState({ inputIsHiddenAfterUpdate: !o }),
                  r.onMenuClose()),
                r.setState({ clearFocusValueOnUpdate: !0 }),
                r.onChange(e, { action: t, option: n }));
            }),
            (r.selectOption = function (e) {
              var t = r.props,
                n = t.blurInputOnSelect,
                i = t.isMulti,
                a = t.name,
                o = r.state.selectValue,
                s = i && r.isOptionSelected(e, o),
                c = r.isOptionDisabled(e, o);
              if (s) {
                var u = r.getOptionValue(e);
                r.setValue(
                  f.multiValueAsValue(
                    o.filter(function (e) {
                      return r.getOptionValue(e) !== u;
                    }),
                  ),
                  `deselect-option`,
                  e,
                );
              } else if (!c)
                i
                  ? r.setValue(
                      f.multiValueAsValue([].concat(l(o), [e])),
                      `select-option`,
                      e,
                    )
                  : r.setValue(f.singleValueAsValue(e), `select-option`);
              else {
                r.ariaOnChange(f.singleValueAsValue(e), {
                  action: `select-option`,
                  option: e,
                  name: a,
                });
                return;
              }
              n && r.blurInput();
            }),
            (r.removeValue = function (e) {
              var t = r.props.isMulti,
                n = r.state.selectValue,
                i = r.getOptionValue(e),
                a = n.filter(function (e) {
                  return r.getOptionValue(e) !== i;
                }),
                o = f.valueTernary(t, a, a[0] || null);
              (r.onChange(o, { action: `remove-value`, removedValue: e }),
                r.focusInput());
            }),
            (r.clearValue = function () {
              var e = r.state.selectValue;
              r.onChange(f.valueTernary(r.props.isMulti, [], null), {
                action: `clear`,
                removedValues: e,
              });
            }),
            (r.popValue = function () {
              var e = r.props.isMulti,
                t = r.state.selectValue,
                n = t[t.length - 1],
                i = t.slice(0, t.length - 1),
                a = f.valueTernary(e, i, i[0] || null);
              n && r.onChange(a, { action: `pop-value`, removedValue: n });
            }),
            (r.getFocusedOptionId = function (e) {
              return Ie(r.state.focusableOptionsWithIds, e);
            }),
            (r.getFocusableOptionsWithIds = function () {
              return je(
                ke(r.props, r.state.selectValue),
                r.getElementId(`option`),
              );
            }),
            (r.getValue = function () {
              return r.state.selectValue;
            }),
            (r.cx = function () {
              var e = [...arguments];
              return f.classNames.apply(
                void 0,
                [r.props.classNamePrefix].concat(e),
              );
            }),
            (r.getOptionLabel = function (e) {
              return Le(r.props, e);
            }),
            (r.getOptionValue = function (e) {
              return Re(r.props, e);
            }),
            (r.getStyles = function (e, t) {
              var n = r.props.unstyled,
                i = xe[e](t, n);
              i.boxSizing = `border-box`;
              var a = r.props.styles[e];
              return a ? a(i, t) : i;
            }),
            (r.getClassNames = function (e, t) {
              var n;
              return (n = r.props.classNames)[e]?.call(n, t);
            }),
            (r.getElementId = function (e) {
              return `${r.state.instancePrefix}-${e}`;
            }),
            (r.getComponents = function () {
              return f.defaultComponents(r.props);
            }),
            (r.buildCategorizedOptions = function () {
              return ke(r.props, r.state.selectValue);
            }),
            (r.getCategorizedOptions = function () {
              return r.props.menuIsOpen ? r.buildCategorizedOptions() : [];
            }),
            (r.buildFocusableOptions = function () {
              return Ae(r.buildCategorizedOptions());
            }),
            (r.getFocusableOptions = function () {
              return r.props.menuIsOpen ? r.buildFocusableOptions() : [];
            }),
            (r.ariaOnChange = function (e, t) {
              r.setState({ ariaSelection: i({ value: e }, t) });
            }),
            (r.onMenuMouseDown = function (e) {
              e.button === 0 &&
                (e.stopPropagation(), e.preventDefault(), r.focusInput());
            }),
            (r.onMenuMouseMove = function (e) {
              r.blockOptionHover = !1;
            }),
            (r.onControlMouseDown = function (e) {
              if (!e.defaultPrevented) {
                var t = r.props.openMenuOnClick;
                (r.state.isFocused
                  ? r.props.menuIsOpen
                    ? e.target.tagName !== `INPUT` &&
                      e.target.tagName !== `TEXTAREA` &&
                      r.onMenuClose()
                    : t && r.openMenu(`first`)
                  : (t && (r.openAfterFocus = !0), r.focusInput()),
                  e.target.tagName !== `INPUT` &&
                    e.target.tagName !== `TEXTAREA` &&
                    e.preventDefault());
              }
            }),
            (r.onDropdownIndicatorMouseDown = function (e) {
              if (
                !(e && e.type === `mousedown` && e.button !== 0) &&
                !r.props.isDisabled
              ) {
                var t = r.props,
                  n = t.isMulti,
                  i = t.menuIsOpen;
                (r.focusInput(),
                  i
                    ? (r.setState({ inputIsHiddenAfterUpdate: !n }),
                      r.onMenuClose())
                    : r.openMenu(`first`),
                  e.preventDefault());
              }
            }),
            (r.onClearIndicatorMouseDown = function (e) {
              (e && e.type === `mousedown` && e.button !== 0) ||
                (r.clearValue(),
                e.preventDefault(),
                (r.openAfterFocus = !1),
                e.type === `touchend`
                  ? r.focusInput()
                  : setTimeout(function () {
                      return r.focusInput();
                    }));
            }),
            (r.onScroll = function (e) {
              typeof r.props.closeMenuOnScroll == `boolean`
                ? e.target instanceof HTMLElement &&
                  f.isDocumentElement(e.target) &&
                  r.props.onMenuClose()
                : typeof r.props.closeMenuOnScroll == `function` &&
                  r.props.closeMenuOnScroll(e) &&
                  r.props.onMenuClose();
            }),
            (r.onCompositionStart = function () {
              r.isComposing = !0;
            }),
            (r.onCompositionEnd = function () {
              r.isComposing = !1;
            }),
            (r.onTouchStart = function (e) {
              var t = e.touches,
                n = t && t.item(0);
              n &&
                ((r.initialTouchX = n.clientX),
                (r.initialTouchY = n.clientY),
                (r.userIsDragging = !1));
            }),
            (r.onTouchMove = function (e) {
              var t = e.touches,
                n = t && t.item(0);
              if (n) {
                var i = Math.abs(n.clientX - r.initialTouchX),
                  a = Math.abs(n.clientY - r.initialTouchY),
                  o = 5;
                r.userIsDragging = i > o || a > o;
              }
            }),
            (r.onTouchEnd = function (e) {
              r.userIsDragging ||
                (r.controlRef &&
                  !r.controlRef.contains(e.target) &&
                  r.menuListRef &&
                  !r.menuListRef.contains(e.target) &&
                  r.blurInput(),
                (r.initialTouchX = 0),
                (r.initialTouchY = 0));
            }),
            (r.onControlTouchEnd = function (e) {
              r.userIsDragging || r.onControlMouseDown(e);
            }),
            (r.onClearIndicatorTouchEnd = function (e) {
              r.userIsDragging || r.onClearIndicatorMouseDown(e);
            }),
            (r.onDropdownIndicatorTouchEnd = function (e) {
              r.userIsDragging || r.onDropdownIndicatorMouseDown(e);
            }),
            (r.handleInputChange = function (e) {
              var t = r.props.inputValue,
                n = e.currentTarget.value;
              (r.setState({ inputIsHiddenAfterUpdate: !1 }),
                r.onInputChange(n, {
                  action: `input-change`,
                  prevInputValue: t,
                }),
                r.props.menuIsOpen || r.onMenuOpen());
            }),
            (r.onInputFocus = function (e) {
              (r.props.onFocus && r.props.onFocus(e),
                r.setState({ inputIsHiddenAfterUpdate: !1, isFocused: !0 }),
                (r.openAfterFocus || r.props.openMenuOnFocus) &&
                  r.openMenu(`first`),
                (r.openAfterFocus = !1));
            }),
            (r.onInputBlur = function (e) {
              var t = r.props.inputValue;
              r.menuListRef && r.menuListRef.contains(document.activeElement)
                ? r.inputRef.focus()
                : (r.props.onBlur && r.props.onBlur(e),
                  r.onInputChange(``, {
                    action: `input-blur`,
                    prevInputValue: t,
                  }),
                  r.onMenuClose(),
                  r.setState({ focusedValue: null, isFocused: !1 }));
            }),
            (r.onOptionHover = function (e) {
              if (!(r.blockOptionHover || r.state.focusedOption === e)) {
                var t = r.getFocusableOptions().indexOf(e);
                r.setState({
                  focusedOption: e,
                  focusedOptionId: t > -1 ? r.getFocusedOptionId(e) : null,
                });
              }
            }),
            (r.shouldHideSelectedOptions = function () {
              return He(r.props);
            }),
            (r.onValueInputFocus = function (e) {
              (e.preventDefault(), e.stopPropagation(), r.focus());
            }),
            (r.onKeyDown = function (e) {
              var t = r.props,
                n = t.isMulti,
                i = t.backspaceRemovesValue,
                a = t.escapeClearsValue,
                o = t.inputValue,
                s = t.isClearable,
                c = t.isDisabled,
                l = t.menuIsOpen,
                u = t.onKeyDown,
                d = t.tabSelectsValue,
                f = t.openMenuOnFocus,
                p = r.state,
                m = p.focusedOption,
                h = p.focusedValue,
                g = p.selectValue;
              if (
                !c &&
                !(typeof u == `function` && (u(e), e.defaultPrevented))
              ) {
                switch (((r.blockOptionHover = !0), e.key)) {
                  case `ArrowLeft`:
                    if (!n || o) return;
                    r.focusValue(`previous`);
                    break;
                  case `ArrowRight`:
                    if (!n || o) return;
                    r.focusValue(`next`);
                    break;
                  case `Delete`:
                  case `Backspace`:
                    if (o) return;
                    if (h) r.removeValue(h);
                    else {
                      if (!i) return;
                      n ? r.popValue() : s && r.clearValue();
                    }
                    break;
                  case `Tab`:
                    if (
                      r.isComposing ||
                      e.shiftKey ||
                      !l ||
                      !d ||
                      !m ||
                      (f && r.isOptionSelected(m, g))
                    )
                      return;
                    r.selectOption(m);
                    break;
                  case `Enter`:
                    if (e.keyCode === 229) break;
                    if (l) {
                      if (!m || r.isComposing) return;
                      r.selectOption(m);
                      break;
                    }
                    return;
                  case `Escape`:
                    l
                      ? (r.setState({ inputIsHiddenAfterUpdate: !1 }),
                        r.onInputChange(``, {
                          action: `menu-close`,
                          prevInputValue: o,
                        }),
                        r.onMenuClose())
                      : s && a && r.clearValue();
                    break;
                  case ` `:
                    if (o) return;
                    if (!l) {
                      r.openMenu(`first`);
                      break;
                    }
                    if (!m) return;
                    r.selectOption(m);
                    break;
                  case `ArrowUp`:
                    l ? r.focusOption(`up`) : r.openMenu(`last`);
                    break;
                  case `ArrowDown`:
                    l ? r.focusOption(`down`) : r.openMenu(`first`);
                    break;
                  case `PageUp`:
                    if (!l) return;
                    r.focusOption(`pageup`);
                    break;
                  case `PageDown`:
                    if (!l) return;
                    r.focusOption(`pagedown`);
                    break;
                  case `Home`:
                    if (!l) return;
                    r.focusOption(`first`);
                    break;
                  case `End`:
                    if (!l) return;
                    r.focusOption(`last`);
                    break;
                  default:
                    return;
                }
                e.preventDefault();
              }
            }),
            (r.state.instancePrefix =
              `react-select-` + (r.props.instanceId || ++Ue)),
            (r.state.selectValue = f.cleanValue(e.value)),
            e.menuIsOpen && r.state.selectValue.length)
          ) {
            var o = r.getFocusableOptionsWithIds(),
              s = r.buildFocusableOptions(),
              c = s.indexOf(r.state.selectValue[0]);
            ((r.state.focusableOptionsWithIds = o),
              (r.state.focusedOption = s[c]),
              (r.state.focusedOptionId = Ie(o, s[c])));
          }
          return r;
        }
        return (
          o(
            n,
            [
              {
                key: `componentDidMount`,
                value: function () {
                  (this.startListeningComposition(),
                    this.startListeningToTouch(),
                    this.props.closeMenuOnScroll &&
                      document &&
                      document.addEventListener &&
                      document.addEventListener(`scroll`, this.onScroll, !0),
                    this.props.autoFocus && this.focusInput(),
                    this.props.menuIsOpen &&
                      this.state.focusedOption &&
                      this.menuListRef &&
                      this.focusedOptionRef &&
                      f.scrollIntoView(
                        this.menuListRef,
                        this.focusedOptionRef,
                      ));
                },
              },
              {
                key: `componentDidUpdate`,
                value: function (e) {
                  var t = this.props,
                    n = t.isDisabled,
                    r = t.menuIsOpen,
                    i = this.state.isFocused;
                  (((i && !n && e.isDisabled) || (i && r && !e.menuIsOpen)) &&
                    this.focusInput(),
                    i && n && !e.isDisabled
                      ? this.setState({ isFocused: !1 }, this.onMenuClose)
                      : !i &&
                        !n &&
                        e.isDisabled &&
                        this.inputRef === document.activeElement &&
                        this.setState({ isFocused: !0 }),
                    this.menuListRef &&
                      this.focusedOptionRef &&
                      this.scrollToFocusedOptionOnUpdate &&
                      (f.scrollIntoView(
                        this.menuListRef,
                        this.focusedOptionRef,
                      ),
                      (this.scrollToFocusedOptionOnUpdate = !1)));
                },
              },
              {
                key: `componentWillUnmount`,
                value: function () {
                  (this.stopListeningComposition(),
                    this.stopListeningToTouch(),
                    document.removeEventListener(`scroll`, this.onScroll, !0));
                },
              },
              {
                key: `onMenuOpen`,
                value: function () {
                  this.props.onMenuOpen();
                },
              },
              {
                key: `onMenuClose`,
                value: function () {
                  (this.onInputChange(``, {
                    action: `menu-close`,
                    prevInputValue: this.props.inputValue,
                  }),
                    this.props.onMenuClose());
                },
              },
              {
                key: `onInputChange`,
                value: function (e, t) {
                  this.props.onInputChange(e, t);
                },
              },
              {
                key: `focusInput`,
                value: function () {
                  this.inputRef && this.inputRef.focus();
                },
              },
              {
                key: `blurInput`,
                value: function () {
                  this.inputRef && this.inputRef.blur();
                },
              },
              {
                key: `openMenu`,
                value: function (e) {
                  var t = this,
                    n = this.state,
                    r = n.selectValue,
                    i = n.isFocused,
                    a = this.buildFocusableOptions(),
                    o = e === `first` ? 0 : a.length - 1;
                  if (!this.props.isMulti) {
                    var s = a.indexOf(r[0]);
                    s > -1 && (o = s);
                  }
                  ((this.scrollToFocusedOptionOnUpdate = !(
                    i && this.menuListRef
                  )),
                    this.setState(
                      {
                        inputIsHiddenAfterUpdate: !1,
                        focusedValue: null,
                        focusedOption: a[o],
                        focusedOptionId: this.getFocusedOptionId(a[o]),
                      },
                      function () {
                        return t.onMenuOpen();
                      },
                    ));
                },
              },
              {
                key: `focusValue`,
                value: function (e) {
                  var t = this.state,
                    n = t.selectValue,
                    r = t.focusedValue;
                  if (this.props.isMulti) {
                    this.setState({ focusedOption: null });
                    var i = n.indexOf(r);
                    r || (i = -1);
                    var a = n.length - 1,
                      o = -1;
                    if (n.length) {
                      switch (e) {
                        case `previous`:
                          o = i === 0 ? 0 : i === -1 ? a : i - 1;
                          break;
                        case `next`:
                          i > -1 && i < a && (o = i + 1);
                      }
                      this.setState({
                        inputIsHidden: o !== -1,
                        focusedValue: n[o],
                      });
                    }
                  }
                },
              },
              {
                key: `focusOption`,
                value: function () {
                  var e =
                      arguments.length > 0 && arguments[0] !== void 0
                        ? arguments[0]
                        : `first`,
                    t = this.props.pageSize,
                    n = this.state.focusedOption,
                    r = this.getFocusableOptions();
                  if (r.length) {
                    var i = 0,
                      a = r.indexOf(n);
                    (n || (a = -1),
                      e === `up`
                        ? (i = a > 0 ? a - 1 : r.length - 1)
                        : e === `down`
                          ? (i = (a + 1) % r.length)
                          : e === `pageup`
                            ? ((i = a - t), i < 0 && (i = 0))
                            : e === `pagedown`
                              ? ((i = a + t),
                                i > r.length - 1 && (i = r.length - 1))
                              : e === `last` && (i = r.length - 1),
                      (this.scrollToFocusedOptionOnUpdate = !0),
                      this.setState({
                        focusedOption: r[i],
                        focusedValue: null,
                        focusedOptionId: this.getFocusedOptionId(r[i]),
                      }));
                  }
                },
              },
              {
                key: `getTheme`,
                value: function () {
                  return this.props.theme
                    ? typeof this.props.theme == `function`
                      ? this.props.theme(Ee)
                      : i(i({}, Ee), this.props.theme)
                    : Ee;
                },
              },
              {
                key: `getCommonProps`,
                value: function () {
                  var e = this.clearValue,
                    t = this.cx,
                    n = this.getStyles,
                    r = this.getClassNames,
                    i = this.getValue,
                    a = this.selectOption,
                    o = this.setValue,
                    s = this.props,
                    c = s.isMulti,
                    l = s.isRtl,
                    u = s.options;
                  return {
                    clearValue: e,
                    cx: t,
                    getStyles: n,
                    getClassNames: r,
                    getValue: i,
                    hasValue: this.hasValue(),
                    isMulti: c,
                    isRtl: l,
                    options: u,
                    selectOption: a,
                    selectProps: s,
                    setValue: o,
                    theme: this.getTheme(),
                  };
                },
              },
              {
                key: `hasValue`,
                value: function () {
                  return this.state.selectValue.length > 0;
                },
              },
              {
                key: `hasOptions`,
                value: function () {
                  return !!this.getFocusableOptions().length;
                },
              },
              {
                key: `isClearable`,
                value: function () {
                  var e = this.props,
                    t = e.isClearable,
                    n = e.isMulti;
                  return t === void 0 ? n : t;
                },
              },
              {
                key: `isOptionDisabled`,
                value: function (e, t) {
                  return ze(this.props, e, t);
                },
              },
              {
                key: `isOptionSelected`,
                value: function (e, t) {
                  return Be(this.props, e, t);
                },
              },
              {
                key: `filterOption`,
                value: function (e, t) {
                  return Ve(this.props, e, t);
                },
              },
              {
                key: `formatOptionLabel`,
                value: function (e, t) {
                  if (typeof this.props.formatOptionLabel == `function`) {
                    var n = this.props.inputValue,
                      r = this.state.selectValue;
                    return this.props.formatOptionLabel(e, {
                      context: t,
                      inputValue: n,
                      selectValue: r,
                    });
                  }
                  return this.getOptionLabel(e);
                },
              },
              {
                key: `formatGroupLabel`,
                value: function (e) {
                  return this.props.formatGroupLabel(e);
                },
              },
              {
                key: `startListeningComposition`,
                value: function () {
                  document &&
                    document.addEventListener &&
                    (document.addEventListener(
                      `compositionstart`,
                      this.onCompositionStart,
                      !1,
                    ),
                    document.addEventListener(
                      `compositionend`,
                      this.onCompositionEnd,
                      !1,
                    ));
                },
              },
              {
                key: `stopListeningComposition`,
                value: function () {
                  document &&
                    document.removeEventListener &&
                    (document.removeEventListener(
                      `compositionstart`,
                      this.onCompositionStart,
                    ),
                    document.removeEventListener(
                      `compositionend`,
                      this.onCompositionEnd,
                    ));
                },
              },
              {
                key: `startListeningToTouch`,
                value: function () {
                  document &&
                    document.addEventListener &&
                    (document.addEventListener(
                      `touchstart`,
                      this.onTouchStart,
                      !1,
                    ),
                    document.addEventListener(
                      `touchmove`,
                      this.onTouchMove,
                      !1,
                    ),
                    document.addEventListener(`touchend`, this.onTouchEnd, !1));
                },
              },
              {
                key: `stopListeningToTouch`,
                value: function () {
                  document &&
                    document.removeEventListener &&
                    (document.removeEventListener(
                      `touchstart`,
                      this.onTouchStart,
                    ),
                    document.removeEventListener(`touchmove`, this.onTouchMove),
                    document.removeEventListener(`touchend`, this.onTouchEnd));
                },
              },
              {
                key: `renderInput`,
                value: function () {
                  var e = this.props,
                    t = e.isDisabled,
                    n = e.isSearchable,
                    a = e.inputId,
                    o = e.inputValue,
                    s = e.tabIndex,
                    c = e.form,
                    l = e.menuIsOpen,
                    u = e.required,
                    d = this.getComponents().Input,
                    p = this.state,
                    m = p.inputIsHidden,
                    h = p.ariaSelection,
                    g = this.commonProps,
                    _ = a || this.getElementId(`input`),
                    y = i(
                      i(
                        i(
                          {
                            "aria-autocomplete": `list`,
                            "aria-expanded": l,
                            "aria-haspopup": !0,
                            "aria-errormessage":
                              this.props[`aria-errormessage`],
                            "aria-invalid": this.props[`aria-invalid`],
                            "aria-label": this.props[`aria-label`],
                            "aria-labelledby": this.props[`aria-labelledby`],
                            "aria-required": u,
                            role: `combobox`,
                            "aria-activedescendant": this.isAppleDevice
                              ? void 0
                              : this.state.focusedOptionId || ``,
                          },
                          l && {
                            "aria-controls": this.getElementId(`listbox`),
                          },
                        ),
                        !n && { "aria-readonly": !0 },
                      ),
                      this.hasValue()
                        ? h?.action === `initial-input-focus` && {
                            "aria-describedby":
                              this.getElementId(`live-region`),
                          }
                        : {
                            "aria-describedby":
                              this.getElementId(`placeholder`),
                          },
                    );
                  return n
                    ? v.createElement(
                        d,
                        r(
                          {},
                          g,
                          {
                            autoCapitalize: `none`,
                            autoComplete: `off`,
                            autoCorrect: `off`,
                            id: _,
                            innerRef: this.getInputRef,
                            isDisabled: t,
                            isHidden: m,
                            onBlur: this.onInputBlur,
                            onChange: this.handleInputChange,
                            onFocus: this.onInputFocus,
                            spellCheck: `false`,
                            tabIndex: s,
                            form: c,
                            type: `text`,
                            value: o,
                          },
                          y,
                        ),
                      )
                    : v.createElement(
                        U,
                        r(
                          {
                            id: _,
                            innerRef: this.getInputRef,
                            onBlur: this.onInputBlur,
                            onChange: f.noop,
                            onFocus: this.onInputFocus,
                            disabled: t,
                            tabIndex: s,
                            inputMode: `none`,
                            form: c,
                            value: ``,
                          },
                          y,
                        ),
                      );
                },
              },
              {
                key: `renderPlaceholderOrValue`,
                value: function () {
                  var e = this,
                    t = this.getComponents(),
                    n = t.MultiValue,
                    i = t.MultiValueContainer,
                    a = t.MultiValueLabel,
                    o = t.MultiValueRemove,
                    s = t.SingleValue,
                    c = t.Placeholder,
                    l = this.commonProps,
                    u = this.props,
                    d = u.controlShouldRenderValue,
                    f = u.isDisabled,
                    p = u.isMulti,
                    m = u.inputValue,
                    h = u.placeholder,
                    g = this.state,
                    _ = g.selectValue,
                    y = g.focusedValue,
                    b = g.isFocused;
                  if (!this.hasValue() || !d)
                    return m
                      ? null
                      : v.createElement(
                          c,
                          r({}, l, {
                            key: `placeholder`,
                            isDisabled: f,
                            isFocused: b,
                            innerProps: {
                              id: this.getElementId(`placeholder`),
                            },
                          }),
                          h,
                        );
                  if (p)
                    return _.map(function (t, s) {
                      var c = t === y,
                        u = `${e.getOptionLabel(t)}-${e.getOptionValue(t)}`;
                      return v.createElement(
                        n,
                        r({}, l, {
                          components: { Container: i, Label: a, Remove: o },
                          isFocused: c,
                          isDisabled: f,
                          key: u,
                          index: s,
                          removeProps: {
                            onClick: function () {
                              return e.removeValue(t);
                            },
                            onTouchEnd: function () {
                              return e.removeValue(t);
                            },
                            onMouseDown: function (e) {
                              e.preventDefault();
                            },
                          },
                          data: t,
                        }),
                        e.formatOptionLabel(t, `value`),
                      );
                    });
                  if (m) return null;
                  var x = _[0];
                  return v.createElement(
                    s,
                    r({}, l, { data: x, isDisabled: f }),
                    this.formatOptionLabel(x, `value`),
                  );
                },
              },
              {
                key: `renderClearIndicator`,
                value: function () {
                  var e = this.getComponents().ClearIndicator,
                    t = this.commonProps,
                    n = this.props,
                    i = n.isDisabled,
                    a = n.isLoading,
                    o = this.state.isFocused;
                  if (!this.isClearable() || !e || i || !this.hasValue() || a)
                    return null;
                  var s = {
                    onMouseDown: this.onClearIndicatorMouseDown,
                    onTouchEnd: this.onClearIndicatorTouchEnd,
                    "aria-hidden": `true`,
                  };
                  return v.createElement(
                    e,
                    r({}, t, { innerProps: s, isFocused: o }),
                  );
                },
              },
              {
                key: `renderLoadingIndicator`,
                value: function () {
                  var e = this.getComponents().LoadingIndicator,
                    t = this.commonProps,
                    n = this.props,
                    i = n.isDisabled,
                    a = n.isLoading,
                    o = this.state.isFocused;
                  return !e || !a
                    ? null
                    : v.createElement(
                        e,
                        r({}, t, {
                          innerProps: { "aria-hidden": `true` },
                          isDisabled: i,
                          isFocused: o,
                        }),
                      );
                },
              },
              {
                key: `renderIndicatorSeparator`,
                value: function () {
                  var e = this.getComponents(),
                    t = e.DropdownIndicator,
                    n = e.IndicatorSeparator;
                  if (!t || !n) return null;
                  var i = this.commonProps,
                    a = this.props.isDisabled,
                    o = this.state.isFocused;
                  return v.createElement(
                    n,
                    r({}, i, { isDisabled: a, isFocused: o }),
                  );
                },
              },
              {
                key: `renderDropdownIndicator`,
                value: function () {
                  var e = this.getComponents().DropdownIndicator;
                  if (!e) return null;
                  var t = this.commonProps,
                    n = this.props.isDisabled,
                    i = this.state.isFocused,
                    a = {
                      onMouseDown: this.onDropdownIndicatorMouseDown,
                      onTouchEnd: this.onDropdownIndicatorTouchEnd,
                      "aria-hidden": `true`,
                    };
                  return v.createElement(
                    e,
                    r({}, t, { innerProps: a, isDisabled: n, isFocused: i }),
                  );
                },
              },
              {
                key: `renderMenu`,
                value: function () {
                  var e = this,
                    t = this.getComponents(),
                    n = t.Group,
                    i = t.GroupHeading,
                    a = t.Menu,
                    o = t.MenuList,
                    s = t.MenuPortal,
                    c = t.LoadingMessage,
                    l = t.NoOptionsMessage,
                    u = t.Option,
                    d = this.commonProps,
                    p = this.state.focusedOption,
                    m = this.props,
                    h = m.captureMenuScroll,
                    g = m.inputValue,
                    _ = m.isLoading,
                    y = m.loadingMessage,
                    b = m.minMenuHeight,
                    x = m.maxMenuHeight,
                    S = m.menuIsOpen,
                    C = m.menuPlacement,
                    w = m.menuPosition,
                    T = m.menuPortalTarget,
                    E = m.menuShouldBlockScroll,
                    D = m.menuShouldScrollIntoView,
                    O = m.noOptionsMessage,
                    k = m.onMenuScrollToTop,
                    A = m.onMenuScrollToBottom;
                  if (!S) return null;
                  var j = function (t, n) {
                      var i = t.type,
                        a = t.data,
                        o = t.isDisabled,
                        s = t.isSelected,
                        c = t.label,
                        l = t.value,
                        f = p === a,
                        m = o
                          ? void 0
                          : function () {
                              return e.onOptionHover(a);
                            },
                        h = o
                          ? void 0
                          : function () {
                              return e.selectOption(a);
                            },
                        g = `${e.getElementId(`option`)}-${n}`,
                        _ = {
                          id: g,
                          onClick: h,
                          onMouseMove: m,
                          onMouseOver: m,
                          tabIndex: -1,
                          role: `option`,
                          "aria-selected": e.isAppleDevice ? void 0 : s,
                        };
                      return v.createElement(
                        u,
                        r({}, d, {
                          innerProps: _,
                          data: a,
                          isDisabled: o,
                          isSelected: s,
                          key: g,
                          label: c,
                          type: i,
                          value: l,
                          isFocused: f,
                          innerRef: f ? e.getFocusedOptionRef : void 0,
                        }),
                        e.formatOptionLabel(t.data, `menu`),
                      );
                    },
                    M;
                  if (this.hasOptions())
                    M = this.getCategorizedOptions().map(function (t) {
                      if (t.type === `group`) {
                        var a = t.data,
                          o = t.options,
                          s = t.index,
                          c = `${e.getElementId(`group`)}-${s}`,
                          l = `${c}-heading`;
                        return v.createElement(
                          n,
                          r({}, d, {
                            key: c,
                            data: a,
                            options: o,
                            Heading: i,
                            headingProps: { id: l, data: t.data },
                            label: e.formatGroupLabel(t.data),
                          }),
                          t.options.map(function (e) {
                            return j(e, `${s}-${e.index}`);
                          }),
                        );
                      }
                      if (t.type === `option`) return j(t, `${t.index}`);
                    });
                  else if (_) {
                    var N = y({ inputValue: g });
                    if (N === null) return null;
                    M = v.createElement(c, d, N);
                  } else {
                    var P = O({ inputValue: g });
                    if (P === null) return null;
                    M = v.createElement(l, d, P);
                  }
                  var F = {
                      minMenuHeight: b,
                      maxMenuHeight: x,
                      menuPlacement: C,
                      menuPosition: w,
                      menuShouldScrollIntoView: D,
                    },
                    I = v.createElement(
                      f.MenuPlacer,
                      r({}, d, F),
                      function (t) {
                        var n = t.ref,
                          i = t.placerProps,
                          s = i.placement,
                          c = i.maxHeight;
                        return v.createElement(
                          a,
                          r({}, d, F, {
                            innerRef: n,
                            innerProps: {
                              onMouseDown: e.onMenuMouseDown,
                              onMouseMove: e.onMenuMouseMove,
                            },
                            isLoading: _,
                            placement: s,
                          }),
                          v.createElement(
                            $,
                            {
                              captureEnabled: h,
                              onTopArrive: k,
                              onBottomArrive: A,
                              lockEnabled: E,
                            },
                            function (t) {
                              return v.createElement(
                                o,
                                r({}, d, {
                                  innerRef: function (n) {
                                    (e.getMenuListRef(n), t(n));
                                  },
                                  innerProps: {
                                    role: `listbox`,
                                    "aria-multiselectable": d.isMulti,
                                    id: e.getElementId(`listbox`),
                                  },
                                  isLoading: _,
                                  maxHeight: c,
                                  focusedOption: p,
                                }),
                                M,
                              );
                            },
                          ),
                        );
                      },
                    );
                  return T || w === `fixed`
                    ? v.createElement(
                        s,
                        r({}, d, {
                          appendTo: T,
                          controlElement: this.controlRef,
                          menuPlacement: C,
                          menuPosition: w,
                        }),
                        I,
                      )
                    : I;
                },
              },
              {
                key: `renderFormField`,
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.delimiter,
                    r = t.isDisabled,
                    i = t.isMulti,
                    a = t.name,
                    o = t.required,
                    s = this.state.selectValue;
                  if (o && !this.hasValue() && !r)
                    return v.createElement(se, {
                      name: a,
                      onFocus: this.onValueInputFocus,
                    });
                  if (a && !r) {
                    if (i) {
                      if (n) {
                        var c = s
                          .map(function (t) {
                            return e.getOptionValue(t);
                          })
                          .join(n);
                        return v.createElement(`input`, {
                          name: a,
                          type: `hidden`,
                          value: c,
                        });
                      }
                      var l =
                        s.length > 0
                          ? s.map(function (t, n) {
                              return v.createElement(`input`, {
                                key: `i-${n}`,
                                name: a,
                                type: `hidden`,
                                value: e.getOptionValue(t),
                              });
                            })
                          : v.createElement(`input`, {
                              name: a,
                              type: `hidden`,
                              value: ``,
                            });
                      return v.createElement(`div`, null, l);
                    }
                    var u = s[0] ? this.getOptionValue(s[0]) : ``;
                    return v.createElement(`input`, {
                      name: a,
                      type: `hidden`,
                      value: u,
                    });
                  }
                },
              },
              {
                key: `renderLiveRegion`,
                value: function () {
                  var e = this.commonProps,
                    t = this.state,
                    n = t.ariaSelection,
                    i = t.focusedOption,
                    a = t.focusedValue,
                    o = t.isFocused,
                    s = t.selectValue,
                    c = this.getFocusableOptions();
                  return v.createElement(
                    O,
                    r({}, e, {
                      id: this.getElementId(`live-region`),
                      ariaSelection: n,
                      focusedOption: i,
                      focusedValue: a,
                      isFocused: o,
                      selectValue: s,
                      focusableOptions: c,
                      isAppleDevice: this.isAppleDevice,
                    }),
                  );
                },
              },
              {
                key: `render`,
                value: function () {
                  var e = this.getComponents(),
                    t = e.Control,
                    n = e.IndicatorsContainer,
                    i = e.SelectContainer,
                    a = e.ValueContainer,
                    o = this.props,
                    s = o.className,
                    c = o.id,
                    l = o.isDisabled,
                    u = o.menuIsOpen,
                    d = this.state.isFocused,
                    f = (this.commonProps = this.getCommonProps());
                  return v.createElement(
                    i,
                    r({}, f, {
                      className: s,
                      innerProps: { id: c, onKeyDown: this.onKeyDown },
                      isDisabled: l,
                      isFocused: d,
                    }),
                    this.renderLiveRegion(),
                    v.createElement(
                      t,
                      r({}, f, {
                        innerRef: this.getControlRef,
                        innerProps: {
                          onMouseDown: this.onControlMouseDown,
                          onTouchEnd: this.onControlTouchEnd,
                        },
                        isDisabled: l,
                        isFocused: d,
                        menuIsOpen: u,
                      }),
                      v.createElement(
                        a,
                        r({}, f, { isDisabled: l }),
                        this.renderPlaceholderOrValue(),
                        this.renderInput(),
                      ),
                      v.createElement(
                        n,
                        r({}, f, { isDisabled: l }),
                        this.renderClearIndicator(),
                        this.renderLoadingIndicator(),
                        this.renderIndicatorSeparator(),
                        this.renderDropdownIndicator(),
                      ),
                    ),
                    this.renderMenu(),
                    this.renderFormField(),
                  );
                },
              },
            ],
            [
              {
                key: `getDerivedStateFromProps`,
                value: function (e, t) {
                  var n = t.prevProps,
                    r = t.clearFocusValueOnUpdate,
                    a = t.inputIsHiddenAfterUpdate,
                    o = t.ariaSelection,
                    s = t.isFocused,
                    c = t.prevWasFocused,
                    l = t.instancePrefix,
                    u = e.options,
                    d = e.value,
                    p = e.menuIsOpen,
                    m = e.inputValue,
                    h = e.isMulti,
                    g = f.cleanValue(d),
                    _ = {};
                  if (
                    n &&
                    (d !== n.value ||
                      u !== n.options ||
                      p !== n.menuIsOpen ||
                      m !== n.inputValue)
                  ) {
                    var v = p ? Me(e, g) : [],
                      y = p ? je(ke(e, g), `${l}-option`) : [],
                      b = r ? Pe(t, g) : null,
                      x = Fe(t, v);
                    _ = {
                      selectValue: g,
                      focusedOption: x,
                      focusedOptionId: Ie(y, x),
                      focusableOptionsWithIds: y,
                      focusedValue: b,
                      clearFocusValueOnUpdate: !1,
                    };
                  }
                  var S =
                      a != null && e !== n
                        ? { inputIsHidden: a, inputIsHiddenAfterUpdate: void 0 }
                        : {},
                    C = o,
                    w = s && c;
                  return (
                    s &&
                      !w &&
                      ((C = {
                        value: f.valueTernary(h, g, g[0] || null),
                        options: g,
                        action: `initial-input-focus`,
                      }),
                      (w = !c)),
                    o?.action === `initial-input-focus` && (C = null),
                    i(
                      i(i({}, _), S),
                      {},
                      { prevProps: e, ariaSelection: C, prevWasFocused: w },
                    )
                  );
                },
              },
            ],
          ),
          n
        );
      })(u.Component);
    ((We.defaultProps = De),
      (n.Select = We),
      (n.createFilter = V),
      (n.defaultProps = De),
      (n.defaultTheme = Ee),
      (n.getOptionLabel = ve),
      (n.getOptionValue = ye),
      (n.mergeStyles = Se));
  }),
  ge = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = b(),
      r = x(),
      i = t(),
      o = he(),
      c = ie(),
      l = U(),
      f = ce();
    (d(),
      _(),
      y(),
      S(),
      C(),
      T(),
      A(),
      P(),
      me(),
      s(),
      ae(),
      u(),
      a(),
      oe(),
      se());
    function p(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function m(e) {
      if (e && e.__esModule) return e;
      var t = Object.create(null);
      return (
        e &&
          Object.keys(e).forEach(function (n) {
            if (n !== "default") {
              var r = Object.getOwnPropertyDescriptor(e, n);
              Object.defineProperty(
                t,
                n,
                r.get
                  ? r
                  : {
                      enumerable: !0,
                      get: function () {
                        return e[n];
                      },
                    },
              );
            }
          }),
        (t.default = e),
        Object.freeze(t)
      );
    }
    var h = m(i),
      g = p(l),
      v = i.forwardRef(function (e, t) {
        var i = n.useStateManager(e);
        return h.createElement(o.Select, r({ ref: t }, i));
      });
    ((e.useStateManager = n.useStateManager),
      (e.createFilter = o.createFilter),
      (e.defaultTheme = o.defaultTheme),
      (e.mergeStyles = o.mergeStyles),
      (e.components = f.components),
      (e.NonceProvider = function (e) {
        var t = e.nonce,
          n = e.children,
          r = e.cacheKey,
          a = i.useMemo(
            function () {
              return g.default({ key: r, nonce: t });
            },
            [r, t],
          );
        return h.createElement(c.CacheProvider, { value: a }, n);
      }),
      (e.default = v));
  }),
  _e = i((e, t) => {
    t.exports = ge();
  }),
  ve = i((e) => {
    e._default = _e().default;
  })();
export { ve as t };
