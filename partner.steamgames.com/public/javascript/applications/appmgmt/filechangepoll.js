/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
/* Third-party software licenses can be found at licenses.txt */
import { in as e, nn as t } from "./chunk~de7f2df91c.js";
import { t as n } from "./chunk~f4e4ed5c17.js";
var r = e({
    BigNumber: () => m,
    ComparisonRichTable: () => y,
    CreateNewSaleButton: () => c,
    DashboardCtn: () => i,
    DashboardDesc: () => s,
    DashboardSectionActive: () => a,
    DashboardSectionFeatured: () => o,
    DateToolTip: () => l,
    DatesCtn: () => v,
    EventDetailsCtn: () => d,
    EventName: () => f,
    FeaturedApps: () => p,
    Highlight: () => h,
    QuickViewCtn: () => x,
    SaleItems: () => S,
    StatText: () => g,
    StatusCtn: () => _,
    TopStatsCtn: () => u,
    VisualBar: () => b,
    default: () => C,
  }),
  i = `RBE9K2oWfMw-`,
  a = `_98avS834Rro-`,
  o = `W4nYlcY1unY-`,
  s = `B5NpoSr5fB0-`,
  c = `QDFZPJdgDoA-`,
  l = `W7TR0kedXXg-`,
  u = `JpPrMquNqdQ-`,
  d = `YYbvz6XMyk4-`,
  f = `LPLZr3RmTVI-`,
  p = `ah0W0dtf434-`,
  m = `kbApK-h12XM-`,
  h = `Ns-h1abF2Rg-`,
  g = `mabmyPT4Jvs-`,
  _ = `Djd1-RW-F5g-`,
  v = `iVy4hkMEd1Y-`,
  y = `glhVgntn6L0-`,
  b = `zDkOGLA8lYo-`,
  x = `tdjxU9Zb9zw-`,
  S = `x6PGcH6MD2k-`,
  C = {
    DashboardCtn: i,
    DashboardSectionActive: a,
    DashboardSectionFeatured: o,
    DashboardDesc: s,
    CreateNewSaleButton: c,
    DateToolTip: l,
    TopStatsCtn: u,
    EventDetailsCtn: d,
    EventName: f,
    FeaturedApps: p,
    BigNumber: m,
    Highlight: h,
    StatText: g,
    StatusCtn: _,
    DatesCtn: v,
    ComparisonRichTable: y,
    VisualBar: b,
    QuickViewCtn: x,
    SaleItems: S,
  },
  w = `c7uRbf9EBBk-`,
  T = `_1VnflXBOuMU-`,
  E = `PXsyJxEl-h0-`,
  D = `NGOZCYa56Kg-`,
  O = `EoyCUTfWvgE-`,
  k = `e1OT7Tk3uoU-`,
  A = `X-ta0xVqehs-`,
  j = `MNDFcGujxCA-`,
  M = `gMuyBMbTuKA-`,
  N = t((e, t) => {
    var n = -1,
      r = 1,
      i = 0;
    function a(e, t, n, r, a) {
      if (e === t) return e ? [[i, e]] : [];
      if (n != null) {
        var s = D(e, t, n);
        if (s) return s;
      }
      var c = l(e, t),
        u = e.substring(0, c);
      ((e = e.substring(c)), (t = t.substring(c)), (c = d(e, t)));
      var f = e.substring(e.length - c);
      ((e = e.substring(0, e.length - c)), (t = t.substring(0, t.length - c)));
      var m = o(e, t);
      return (
        u && m.unshift([i, u]), f && m.push([i, f]), b(m, a), r && p(m), m
      );
    }
    function o(e, t) {
      var o;
      if (!e) return [[r, t]];
      if (!t) return [[n, e]];
      var c = e.length > t.length ? e : t,
        l = e.length > t.length ? t : e,
        u = c.indexOf(l);
      if (u !== -1)
        return (
          (o = [
            [r, c.substring(0, u)],
            [i, l],
            [r, c.substring(u + l.length)],
          ]),
          e.length > t.length && (o[0][0] = o[2][0] = n),
          o
        );
      if (l.length === 1)
        return [
          [n, e],
          [r, t],
        ];
      var d = f(e, t);
      if (d) {
        var p = d[0],
          m = d[1],
          h = d[2],
          g = d[3],
          _ = d[4],
          v = a(p, h),
          y = a(m, g);
        return v.concat([[i, _]], y);
      }
      return s(e, t);
    }
    function s(e, t) {
      for (
        var i = e.length,
          a = t.length,
          o = Math.ceil((i + a) / 2),
          s = o,
          l = 2 * o,
          u = Array(l),
          d = Array(l),
          f = 0;
        f < l;
        f++
      )
        ((u[f] = -1), (d[f] = -1));
      ((u[s + 1] = 0), (d[s + 1] = 0));
      for (
        var p = i - a, m = p % 2 != 0, h = 0, g = 0, _ = 0, v = 0, y = 0;
        y < o;
        y++
      ) {
        for (var b = -y + h; b <= y - g; b += 2) {
          for (
            var x = s + b,
              S =
                b === -y || (b !== y && u[x - 1] < u[x + 1])
                  ? u[x + 1]
                  : u[x - 1] + 1,
              C = S - b;
            S < i && C < a && e.charAt(S) === t.charAt(C);
          )
            (S++, C++);
          if (((u[x] = S), S > i)) g += 2;
          else if (C > a) h += 2;
          else if (m) {
            var w = s + p - b;
            if (w >= 0 && w < l && d[w] !== -1) {
              var T = i - d[w];
              if (S >= T) return c(e, t, S, C);
            }
          }
        }
        for (var E = -y + _; E <= y - v; E += 2) {
          for (
            var w = s + E,
              T =
                E === -y || (E !== y && d[w - 1] < d[w + 1])
                  ? d[w + 1]
                  : d[w - 1] + 1,
              D = T - E;
            T < i && D < a && e.charAt(i - T - 1) === t.charAt(a - D - 1);
          )
            (T++, D++);
          if (((d[w] = T), T > i)) v += 2;
          else if (D > a) _ += 2;
          else if (!m) {
            var x = s + p - E;
            if (x >= 0 && x < l && u[x] !== -1) {
              var S = u[x],
                C = s + S - x;
              if (((T = i - T), S >= T)) return c(e, t, S, C);
            }
          }
        }
      }
      return [
        [n, e],
        [r, t],
      ];
    }
    function c(e, t, n, r) {
      var i = e.substring(0, n),
        o = t.substring(0, r),
        s = e.substring(n),
        c = t.substring(r),
        l = a(i, o),
        u = a(s, c);
      return l.concat(u);
    }
    function l(e, t) {
      if (!e || !t || e.charAt(0) !== t.charAt(0)) return 0;
      for (var n = 0, r = Math.min(e.length, t.length), i = r, a = 0; n < i;)
        (e.substring(a, i) == t.substring(a, i) ? ((n = i), (a = n)) : (r = i),
          (i = Math.floor((r - n) / 2 + n)));
      return (x(e.charCodeAt(i - 1)) && i--, i);
    }
    function u(e, t) {
      var n = e.length,
        r = t.length;
      if (n == 0 || r == 0) return 0;
      n > r ? (e = e.substring(n - r)) : n < r && (t = t.substring(0, n));
      var i = Math.min(n, r);
      if (e == t) return i;
      for (var a = 0, o = 1; ;) {
        var s = e.substring(i - o),
          c = t.indexOf(s);
        if (c == -1) return a;
        ((o += c),
          (c == 0 || e.substring(i - o) == t.substring(0, o)) &&
            ((a = o), o++));
      }
    }
    function d(e, t) {
      if (!e || !t || e.slice(-1) !== t.slice(-1)) return 0;
      for (var n = 0, r = Math.min(e.length, t.length), i = r, a = 0; n < i;)
        (e.substring(e.length - i, e.length - a) ==
        t.substring(t.length - i, t.length - a)
          ? ((n = i), (a = n))
          : (r = i),
          (i = Math.floor((r - n) / 2 + n)));
      return (S(e.charCodeAt(e.length - i)) && i--, i);
    }
    function f(e, t) {
      var n = e.length > t.length ? e : t,
        r = e.length > t.length ? t : e;
      if (n.length < 4 || r.length * 2 < n.length) return null;
      function i(e, t, n) {
        for (
          var r = e.substring(n, n + Math.floor(e.length / 4)),
            i = -1,
            a = ``,
            o,
            s,
            c,
            u;
          (i = t.indexOf(r, i + 1)) !== -1;
        ) {
          var f = l(e.substring(n), t.substring(i)),
            p = d(e.substring(0, n), t.substring(0, i));
          a.length < p + f &&
            ((a = t.substring(i - p, i) + t.substring(i, i + f)),
            (o = e.substring(0, n - p)),
            (s = e.substring(n + f)),
            (c = t.substring(0, i - p)),
            (u = t.substring(i + f)));
        }
        return a.length * 2 >= e.length ? [o, s, c, u, a] : null;
      }
      var a = i(n, r, Math.ceil(n.length / 4)),
        o = i(n, r, Math.ceil(n.length / 2)),
        s;
      if (!a && !o) return null;
      s = o ? (a && a[4].length > o[4].length ? a : o) : a;
      var c, u, f, p;
      e.length > t.length
        ? ((c = s[0]), (u = s[1]), (f = s[2]), (p = s[3]))
        : ((f = s[0]), (p = s[1]), (c = s[2]), (u = s[3]));
      var m = s[4];
      return [c, u, f, p, m];
    }
    function p(e) {
      for (
        var t = !1, a = [], o = 0, s = null, c = 0, l = 0, d = 0, f = 0, p = 0;
        c < e.length;
      )
        (e[c][0] == i
          ? ((a[o++] = c), (l = f), (d = p), (f = 0), (p = 0), (s = e[c][1]))
          : (e[c][0] == r ? (f += e[c][1].length) : (p += e[c][1].length),
            s &&
              s.length <= Math.max(l, d) &&
              s.length <= Math.max(f, p) &&
              (e.splice(a[o - 1], 0, [n, s]),
              (e[a[o - 1] + 1][0] = r),
              o--,
              o--,
              (c = o > 0 ? a[o - 1] : -1),
              (l = 0),
              (d = 0),
              (f = 0),
              (p = 0),
              (s = null),
              (t = !0))),
          c++);
      for (t && b(e), y(e), c = 1; c < e.length;) {
        if (e[c - 1][0] == n && e[c][0] == r) {
          var m = e[c - 1][1],
            h = e[c][1],
            g = u(m, h),
            _ = u(h, m);
          (g >= _
            ? (g >= m.length / 2 || g >= h.length / 2) &&
              (e.splice(c, 0, [i, h.substring(0, g)]),
              (e[c - 1][1] = m.substring(0, m.length - g)),
              (e[c + 1][1] = h.substring(g)),
              c++)
            : (_ >= m.length / 2 || _ >= h.length / 2) &&
              (e.splice(c, 0, [i, m.substring(0, _)]),
              (e[c - 1][0] = r),
              (e[c - 1][1] = h.substring(0, h.length - _)),
              (e[c + 1][0] = n),
              (e[c + 1][1] = m.substring(_)),
              c++),
            c++);
        }
        c++;
      }
    }
    var m = /[^a-zA-Z0-9]/,
      h = /\s/,
      g = /[\r\n]/,
      _ = /\n\r?\n$/,
      v = /^\r?\n\r?\n/;
    function y(e) {
      function t(e, t) {
        if (!e || !t) return 6;
        var n = e.charAt(e.length - 1),
          r = t.charAt(0),
          i = n.match(m),
          a = r.match(m),
          o = i && n.match(h),
          s = a && r.match(h),
          c = o && n.match(g),
          l = s && r.match(g),
          u = c && e.match(_),
          d = l && t.match(v);
        return u || d
          ? 5
          : c || l
            ? 4
            : i && !o && s
              ? 3
              : o || s
                ? 2
                : i || a
                  ? 1
                  : 0;
      }
      for (var n = 1; n < e.length - 1;) {
        if (e[n - 1][0] == i && e[n + 1][0] == i) {
          var r = e[n - 1][1],
            a = e[n][1],
            o = e[n + 1][1],
            s = d(r, a);
          if (s) {
            var c = a.substring(a.length - s);
            ((r = r.substring(0, r.length - s)),
              (a = c + a.substring(0, a.length - s)),
              (o = c + o));
          }
          for (
            var l = r, u = a, f = o, p = t(r, a) + t(a, o);
            a.charAt(0) === o.charAt(0);
          ) {
            ((r += a.charAt(0)),
              (a = a.substring(1) + o.charAt(0)),
              (o = o.substring(1)));
            var y = t(r, a) + t(a, o);
            y >= p && ((p = y), (l = r), (u = a), (f = o));
          }
          e[n - 1][1] != l &&
            (l ? (e[n - 1][1] = l) : (e.splice(n - 1, 1), n--),
            (e[n][1] = u),
            f ? (e[n + 1][1] = f) : (e.splice(n + 1, 1), n--));
        }
        n++;
      }
    }
    function b(e, t) {
      e.push([i, ``]);
      for (var a = 0, o = 0, s = 0, c = ``, u = ``, f; a < e.length;)
        if (a < e.length - 1 && !e[a][1]) e.splice(a, 1);
        else
          switch (e[a][0]) {
            case r:
              (s++, (u += e[a][1]), a++);
              break;
            case n:
              (o++, (c += e[a][1]), a++);
              break;
            case i:
              var p = a - s - o - 1;
              if (t) {
                if (p >= 0 && w(e[p][1])) {
                  var m = e[p][1].slice(-1);
                  if (
                    ((e[p][1] = e[p][1].slice(0, -1)),
                    (c = m + c),
                    (u = m + u),
                    !e[p][1])
                  ) {
                    (e.splice(p, 1), a--);
                    var h = p - 1;
                    (e[h] && e[h][0] === r && (s++, (u = e[h][1] + u), h--),
                      e[h] && e[h][0] === n && (o++, (c = e[h][1] + c), h--),
                      (p = h));
                  }
                }
                if (C(e[a][1])) {
                  var m = e[a][1].charAt(0);
                  ((e[a][1] = e[a][1].slice(1)), (c += m), (u += m));
                }
              }
              if (a < e.length - 1 && !e[a][1]) {
                e.splice(a, 1);
                break;
              }
              if (c.length > 0 || u.length > 0) {
                c.length > 0 &&
                  u.length > 0 &&
                  ((f = l(u, c)),
                  f !== 0 &&
                    (p >= 0
                      ? (e[p][1] += u.substring(0, f))
                      : (e.splice(0, 0, [i, u.substring(0, f)]), a++),
                    (u = u.substring(f)),
                    (c = c.substring(f))),
                  (f = d(u, c)),
                  f !== 0 &&
                    ((e[a][1] = u.substring(u.length - f) + e[a][1]),
                    (u = u.substring(0, u.length - f)),
                    (c = c.substring(0, c.length - f))));
                var g = s + o;
                c.length === 0 && u.length === 0
                  ? (e.splice(a - g, g), (a -= g))
                  : c.length === 0
                    ? (e.splice(a - g, g, [r, u]), (a = a - g + 1))
                    : u.length === 0
                      ? (e.splice(a - g, g, [n, c]), (a = a - g + 1))
                      : (e.splice(a - g, g, [n, c], [r, u]), (a = a - g + 2));
              }
              (a !== 0 && e[a - 1][0] === i
                ? ((e[a - 1][1] += e[a][1]), e.splice(a, 1))
                : a++,
                (s = 0),
                (o = 0),
                (c = ``),
                (u = ``));
          }
      e[e.length - 1][1] === `` && e.pop();
      var _ = !1;
      for (a = 1; a < e.length - 1;)
        (e[a - 1][0] === i &&
          e[a + 1][0] === i &&
          (e[a][1].substring(e[a][1].length - e[a - 1][1].length) ===
          e[a - 1][1]
            ? ((e[a][1] =
                e[a - 1][1] +
                e[a][1].substring(0, e[a][1].length - e[a - 1][1].length)),
              (e[a + 1][1] = e[a - 1][1] + e[a + 1][1]),
              e.splice(a - 1, 1),
              (_ = !0))
            : e[a][1].substring(0, e[a + 1][1].length) == e[a + 1][1] &&
              ((e[a - 1][1] += e[a + 1][1]),
              (e[a][1] = e[a][1].substring(e[a + 1][1].length) + e[a + 1][1]),
              e.splice(a + 1, 1),
              (_ = !0))),
          a++);
      _ && b(e, t);
    }
    function x(e) {
      return e >= 55296 && e <= 56319;
    }
    function S(e) {
      return e >= 56320 && e <= 57343;
    }
    function C(e) {
      return S(e.charCodeAt(0));
    }
    function w(e) {
      return x(e.charCodeAt(e.length - 1));
    }
    function T(e) {
      for (var t = [], n = 0; n < e.length; n++)
        e[n][1].length > 0 && t.push(e[n]);
      return t;
    }
    function E(e, t, a, o) {
      return w(e) || C(o)
        ? null
        : T([
            [i, e],
            [n, t],
            [r, a],
            [i, o],
          ]);
    }
    function D(e, t, n) {
      var r = typeof n == `number` ? { index: n, length: 0 } : n.oldRange,
        i = typeof n == `number` ? null : n.newRange,
        a = e.length,
        o = t.length;
      if (r.length === 0 && (i === null || i.length === 0)) {
        var s = r.index,
          c = e.slice(0, s),
          l = e.slice(s),
          u = i ? i.index : null;
        editBefore: {
          var d = s + o - a;
          if ((u !== null && u !== d) || d < 0 || d > o) break editBefore;
          var f = t.slice(0, d),
            p = t.slice(d);
          if (p !== l) break editBefore;
          var m = Math.min(s, d),
            h = c.slice(0, m),
            g = f.slice(0, m);
          if (h !== g) break editBefore;
          var _ = c.slice(m),
            v = f.slice(m);
          return E(h, _, v, l);
        }
        editAfter: {
          if (u !== null && u !== s) break editAfter;
          var y = s,
            f = t.slice(0, y),
            p = t.slice(y);
          if (f !== c) break editAfter;
          var b = Math.min(a - y, o - y),
            x = l.slice(l.length - b),
            S = p.slice(p.length - b);
          if (x !== S) break editAfter;
          var _ = l.slice(0, l.length - b),
            v = p.slice(0, p.length - b);
          return E(c, _, v, x);
        }
      }
      if (r.length > 0 && i && i.length === 0)
        replaceRange: {
          var h = e.slice(0, r.index),
            x = e.slice(r.index + r.length),
            m = h.length,
            b = x.length;
          if (o < m + b) break replaceRange;
          var g = t.slice(0, m),
            S = t.slice(o - b);
          if (h !== g || x !== S) break replaceRange;
          var _ = e.slice(m, a - b),
            v = t.slice(m, o - b);
          return E(h, _, v, x);
        }
      return null;
    }
    function O(e, t, n, r) {
      return a(e, t, n, r, !0);
    }
    ((O.INSERT = r), (O.DELETE = n), (O.EQUAL = i), (t.exports = O));
  });
(n(), N());
export {
  S as C,
  b as D,
  u as E,
  r as O,
  x as S,
  _ as T,
  v as _,
  A as a,
  p as b,
  j as c,
  y as d,
  c as f,
  o as g,
  a as h,
  w as i,
  D as l,
  s as m,
  k as n,
  T as o,
  i as p,
  M as r,
  E as s,
  O as t,
  m as u,
  d as v,
  g as w,
  h as x,
  f as y,
};
