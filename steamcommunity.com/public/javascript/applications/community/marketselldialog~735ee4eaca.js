/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
/* Third-party software licenses can be found at licenses.txt */
import { o as e } from "./chunk~f025431ab0.js";
import {
  Ft as t,
  G as n,
  Pt as r,
  W as i,
  at as a,
} from "./chunk~01cfc309bf.js";
import { t as o } from "./chunk~e53a8c8667.js";
import { n as s, t as c } from "./chunk~cfd048ddd7.js";
import { n as l, t as u } from "./chunk~6e8a72cfb5.js";
import { i as d, n as f, r as p, t as m } from "./chunk~bb87983663.js";
import { t as h } from "./chunk~5412a9f1de.js";
import { t as g } from "./chunk~93195fc4a9.js";
import {
  $ as _,
  A as v,
  B as y,
  C as b,
  D as x,
  E as S,
  F as C,
  G as w,
  H as T,
  I as E,
  J as D,
  K as ee,
  L as te,
  M as ne,
  N as re,
  O as ie,
  P as ae,
  Q as oe,
  R as se,
  S as O,
  T as ce,
  U as le,
  V as ue,
  W as de,
  Y as fe,
  Z as pe,
  _ as me,
  _t as k,
  at as he,
  b as ge,
  c as _e,
  ct as ve,
  d as ye,
  dt as be,
  et as xe,
  f as Se,
  ft as Ce,
  g as we,
  gt as Te,
  h as Ee,
  ht as De,
  i as Oe,
  it as ke,
  j as Ae,
  k as je,
  l as Me,
  lt as A,
  m as Ne,
  mt as j,
  nt as Pe,
  o as Fe,
  ot as Ie,
  p as Le,
  pt as Re,
  q as ze,
  r as Be,
  rt as Ve,
  s as He,
  st as Ue,
  t as We,
  tt as Ge,
  u as Ke,
  ut as qe,
  v as Je,
  vt as Ye,
  w as Xe,
  x as Ze,
  y as Qe,
  yt as $e,
  z as et,
} from "./chunk~cfb555d6e5.js";
import { t as tt } from "./chunk~008c00a198.js";
import {
  $h as nt,
  Ah as M,
  Bt as N,
  Cu as rt,
  Fh as P,
  Ih as F,
  It as it,
  Mh as I,
  Nh as L,
  Nt as at,
  Ph as R,
  Xt as ot,
  Yf as z,
  bu as st,
  cm as ct,
  eg as lt,
  jh as B,
  jt as V,
  kh as H,
  kt as ut,
  nh as U,
  om as dt,
  pt as ft,
  qt as pt,
  rm as mt,
  rt as ht,
  vt as gt,
  x as _t,
  yf as vt,
  zt as W,
} from "./main.js";
var G = e(r(), 1),
  K = a();
function yt(e) {
  let { defaultValue: t = 0, currency: n, placeholder: r, ...i } = e;
  return (0, K.jsx)(u, {
    valueToString: (e) => xt(e, n.bWholeUnitsOnly),
    valueFromString: (e) => St(e, t, n.bWholeUnitsOnly),
    checkValidText: (e, t) => !e || (t !== l && !isNaN(t)),
    beforeContent: n.bSuffixSymbol ? void 0 : n.strSymbol,
    afterContent: n.bSuffixSymbol ? n.strSymbol : void 0,
    placeholder: typeof r == `number` ? xt(r, n.bWholeUnitsOnly) : r,
    ...i,
  });
}
var bt = `∞`;
function xt(e, t) {
  return e === void 0
    ? ``
    : e === 1 / 0
      ? bt
      : t
        ? Math.round(e / 100).toString()
        : (e / 100).toFixed(2);
}
function St(e, t, n) {
  return e === bt
    ? 1 / 0
    : e === ``
      ? t
      : n
        ? parseInt(e) * 100
        : Math.round(parseFloat(e) * 100);
}
function Ct() {
  return (
    (Ct = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ct.apply(null, arguments)
  );
}
var wt = (e) => {
  var { cx: t, cy: n, r, className: i } = e,
    a = $e(`recharts-dot`, i);
  return t === +t && n === +n && r === +r
    ? G.createElement(
        `circle`,
        Ct({}, k(e), ve(e), { className: a, cx: t, cy: n, r }),
      )
    : null;
};
function Tt(e, t) {
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
function Et(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Tt(Object(n), !0).forEach(function (t) {
          Dt(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Tt(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Dt(e, t, n) {
  return (
    (t = Ot(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Ot(e) {
  var t = kt(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function kt(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var At = (e) => {
  var { point: t, childIndex: n, mainColor: r, activeDot: i, dataKey: a } = e;
  if (i === !1 || t.x == null || t.y == null) return null;
  var o = Et(
      Et(
        {
          index: n,
          dataKey: a,
          cx: t.x,
          cy: t.y,
          r: 4,
          fill: r ?? `none`,
          strokeWidth: 2,
          stroke: `#fff`,
          payload: t.payload,
          value: t.value,
        },
        Ye(i),
      ),
      ve(i),
    ),
    s = (0, G.isValidElement)(i)
      ? (0, G.cloneElement)(i, o)
      : typeof i == `function`
        ? i(o)
        : G.createElement(wt, o);
  return G.createElement(j, { className: `recharts-active-dot` }, s);
};
function jt(e) {
  var { points: t, mainColor: n, activeDot: r, itemDataKey: i } = e,
    a = Ue(ae),
    o = Je();
  if (t == null || o == null) return null;
  var s = t.find((e) => o.includes(e.payload));
  return be(s)
    ? null
    : At({
        point: s,
        childIndex: Number(a),
        mainColor: n,
        dataKey: i,
        activeDot: r,
      });
}
function Mt(e, t) {
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
function Nt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Mt(Object(n), !0).forEach(function (t) {
          Pt(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Mt(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Pt(e, t, n) {
  return (
    (t = Ft(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Ft(e) {
  var t = It(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function It(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function Lt() {
  return (
    (Lt = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Lt.apply(null, arguments)
  );
}
var Rt = (e, t, n, r, i, a, o) => {
    var { x1: s, x2: c, y1: l, y2: u } = o;
    if (i == null || a == null) return null;
    var d = Se({ x: i, y: a }),
      f = {
        x: e ? d.x.apply(s, { position: `start` }) : d.x.rangeMin,
        y: n ? d.y.apply(l, { position: `start` }) : d.y.rangeMin,
      },
      p = {
        x: t ? d.x.apply(c, { position: `end` }) : d.x.rangeMax,
        y: r ? d.y.apply(u, { position: `end` }) : d.y.rangeMax,
      };
    return o.ifOverflow === `discard` && (!d.isInRange(f) || !d.isInRange(p))
      ? null
      : Le(f, p);
  },
  zt = (e, t) =>
    G.isValidElement(e)
      ? G.cloneElement(e, t)
      : typeof e == `function`
        ? e(t)
        : G.createElement(
            T,
            Lt({}, t, { className: `recharts-reference-area-rect` }),
          );
function Bt(e) {
  var t = Ie();
  return (
    (0, G.useEffect)(
      () => (
        t(Ke(e)),
        () => {
          t(ye(e));
        }
      ),
    ),
    null
  );
}
function Vt(e) {
  var {
      x1: t,
      x2: n,
      y1: r,
      y2: i,
      className: a,
      shape: o,
      xAxisId: s,
      yAxisId: c,
    } = e,
    l = Me(),
    u = oe(),
    d = Ue((e) => C(e, `xAxis`, s, u)),
    f = Ue((e) => C(e, `yAxis`, c, u));
  if (d == null || !f == null) return null;
  var p = Ce(t),
    m = Ce(n),
    h = Ce(r),
    g = Ce(i);
  if (!p && !m && !h && !g && !o) return null;
  var _ = Rt(p, m, h, g, d, f, e);
  if (!_ && !o) return null;
  var v = e.ifOverflow === `hidden` ? `url(#${l})` : void 0;
  return G.createElement(
    j,
    { className: $e(`recharts-reference-area`, a) },
    zt(o, Nt(Nt({ clipPath: v }, De(e)), _)),
    G.createElement(x, _, G.createElement(ie, { label: e.label }), e.children),
  );
}
function Ht(e) {
  return G.createElement(
    G.Fragment,
    null,
    G.createElement(Bt, {
      yAxisId: e.yAxisId,
      xAxisId: e.xAxisId,
      ifOverflow: e.ifOverflow,
      x1: e.x1,
      x2: e.x2,
      y1: e.y1,
      y2: e.y2,
    }),
    G.createElement(Vt, e),
  );
}
var Ut = class extends G.Component {
  render() {
    return G.createElement(Ht, this.props);
  }
};
(Pt(Ut, `displayName`, `ReferenceArea`),
  Pt(Ut, `defaultProps`, {
    ifOverflow: `discard`,
    xAxisId: 0,
    yAxisId: 0,
    r: 10,
    fill: `#ccc`,
    fillOpacity: 0.5,
    stroke: `none`,
    strokeWidth: 1,
  }));
var Wt = (e, t, n, r) => E(e, `xAxis`, t, r),
  Gt = (e, t, n, r) => se(e, `xAxis`, t, r),
  Kt = (e, t, n, r) => E(e, `yAxis`, n, r),
  qt = (e, t, n, r) => se(e, `yAxis`, n, r),
  Jt = he([D, Wt, Kt, Gt, qt], (e, t, n, r, i) =>
    ke(e, `xAxis`) ? _(t, r, !1) : _(n, i, !1),
  ),
  Yt = (e, t, n, r, i) => i;
function Xt(e) {
  return e.type === `line`;
}
var Zt = he([et, Yt], (e, t) => e.filter(Xt).find((e) => e.id === t)),
  Qt = he([D, Wt, Kt, Gt, qt, Zt, Jt, ue], (e, t, n, r, i, a, o, s) => {
    var { chartData: c, dataStartIndex: l, dataEndIndex: u } = s;
    if (
      a != null &&
      t != null &&
      n != null &&
      r != null &&
      i != null &&
      r.length !== 0 &&
      i.length !== 0 &&
      o != null
    ) {
      var { dataKey: d, data: f } = a,
        p = f != null && f.length > 0 ? f : c?.slice(l, u + 1);
      if (p != null)
        return On({
          layout: e,
          xAxis: t,
          yAxis: n,
          xAxisTicks: r,
          yAxisTicks: i,
          dataKey: d,
          bandSize: o,
          displayedData: p,
        });
    }
  });
function $t(e) {
  var t = Ye(e),
    n = 3,
    r = 2;
  if (t != null) {
    var { r: i, strokeWidth: a } = t,
      o = Number(i),
      s = Number(a);
    return (
      (Number.isNaN(o) || o < 0) && (o = n),
      (Number.isNaN(s) || s < 0) && (s = r),
      { r: o, strokeWidth: s }
    );
  }
  return { r: n, strokeWidth: r };
}
var en = [`id`],
  tn = [`type`, `layout`, `connectNulls`, `needClip`],
  nn = [
    `activeDot`,
    `animateNewValues`,
    `animationBegin`,
    `animationDuration`,
    `animationEasing`,
    `connectNulls`,
    `dot`,
    `hide`,
    `isAnimationActive`,
    `label`,
    `legendType`,
    `xAxisId`,
    `yAxisId`,
    `id`,
  ];
function rn(e, t) {
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
function q(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? rn(Object(n), !0).forEach(function (t) {
          an(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : rn(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function an(e, t, n) {
  return (
    (t = on(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function on(e) {
  var t = sn(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function sn(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function cn(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = ln(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]));
  }
  return i;
}
function ln(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function un() {
  return (
    (un = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    un.apply(null, arguments)
  );
}
var dn = (e) => {
  var { dataKey: t, name: n, stroke: r, legendType: i, hide: a } = e;
  return [
    { inactive: a, dataKey: t, type: i, color: r, value: Pe(n, t), payload: e },
  ];
};
function fn(e) {
  var {
    dataKey: t,
    data: n,
    stroke: r,
    strokeWidth: i,
    fill: a,
    name: o,
    hide: s,
    unit: c,
  } = e;
  return {
    dataDefinedOnItem: n,
    positions: void 0,
    settings: {
      stroke: r,
      strokeWidth: i,
      fill: a,
      dataKey: t,
      nameKey: void 0,
      name: Pe(o, t),
      hide: s,
      type: e.tooltipType,
      color: e.stroke,
      unit: c,
    },
  };
}
var pn = (e, t) => `${t}px ${e - t}px`;
function mn(e, t) {
  for (var n = e.length % 2 == 0 ? e : [...e, 0], r = [], i = 0; i < t; ++i)
    r = [...r, ...n];
  return r;
}
var hn = (e, t, n) => {
  var r = n.reduce((e, t) => e + t);
  if (!r) return pn(t, e);
  for (
    var i = Math.floor(e / r), a = e % r, o = t - e, s = [], c = 0, l = 0;
    c < n.length;
    l += n[c], ++c
  )
    if (l + n[c] > a) {
      s = [...n.slice(0, c), a - l];
      break;
    }
  var u = s.length % 2 == 0 ? [0, o] : [o];
  return [...mn(n, i), ...s, ...u].map((e) => `${e}px`).join(`, `);
};
function gn(e, t) {
  var n;
  if (G.isValidElement(e)) n = G.cloneElement(e, t);
  else if (typeof e == `function`) n = e(t);
  else {
    var r = $e(`recharts-line-dot`, typeof e == `boolean` ? `` : e.className);
    n = G.createElement(wt, un({}, t, { className: r }));
  }
  return n;
}
function _n(e, t) {
  return e == null ? !1 : t ? !0 : e.length === 1;
}
function vn(e) {
  var { clipPathId: t, points: n, props: r } = e,
    { dot: i, dataKey: a, needClip: o } = r;
  if (!_n(n, i)) return null;
  var { id: s } = r,
    c = cn(r, en),
    l = Xe(i),
    u = k(c),
    d = Te(i),
    f = n.map((e, t) =>
      gn(
        i,
        q(
          q(q({ key: `dot-${t}`, r: 3 }, u), d),
          {},
          {
            index: t,
            cx: e.x,
            cy: e.y,
            dataKey: a,
            value: e.value,
            payload: e.payload,
            points: n,
          },
        ),
      ),
    ),
    p = { clipPath: o ? `url(#clipPath-${l ? `` : `dots-`}${t})` : void 0 };
  return G.createElement(
    j,
    un({ className: `recharts-line-dots`, key: `dots` }, p),
    f,
  );
}
function yn(e) {
  var { showLabels: t, children: n, points: r } = e,
    i = (0, G.useMemo)(
      () =>
        r?.map((e) => {
          var t = { x: e.x, y: e.y, width: 0, height: 0 };
          return q(
            q({}, t),
            {},
            {
              value: e.value,
              payload: e.payload,
              viewBox: t,
              parentViewBox: void 0,
              fill: void 0,
            },
          );
        }),
      [r],
    );
  return G.createElement(ce, { value: t ? i : null }, n);
}
function bn(e) {
  var {
      clipPathId: t,
      pathRef: n,
      points: r,
      strokeDasharray: i,
      props: a,
    } = e,
    { type: o, layout: s, connectNulls: c, needClip: l } = a,
    u = cn(a, tn),
    d = q(
      q({}, De(u)),
      {},
      {
        fill: `none`,
        className: `recharts-line-curve`,
        clipPath: l ? `url(#clipPath-${t})` : void 0,
        points: r,
        type: o,
        layout: s,
        connectNulls: c,
        strokeDasharray: i ?? a.strokeDasharray,
      },
    );
  return G.createElement(
    G.Fragment,
    null,
    r?.length > 1 && G.createElement(ee, un({}, d, { pathRef: n })),
    G.createElement(vn, { points: r, clipPathId: t, props: a }),
  );
}
function xn(e) {
  try {
    return (e && e.getTotalLength && e.getTotalLength()) || 0;
  } catch {
    return 0;
  }
}
function Sn(e) {
  var {
      clipPathId: t,
      props: n,
      pathRef: r,
      previousPointsRef: i,
      longestAnimatedLengthRef: a,
    } = e,
    {
      points: o,
      strokeDasharray: s,
      isAnimationActive: c,
      animationBegin: l,
      animationDuration: u,
      animationEasing: d,
      animateNewValues: f,
      width: p,
      height: m,
      onAnimationEnd: h,
      onAnimationStart: g,
    } = n,
    _ = i.current,
    v = le(n, `recharts-line-`),
    [y, b] = (0, G.useState)(!1),
    x = !y,
    C = (0, G.useCallback)(() => {
      (typeof h == `function` && h(), b(!1));
    }, [h]),
    w = (0, G.useCallback)(() => {
      (typeof g == `function` && g(), b(!0));
    }, [g]),
    T = xn(r.current),
    E = a.current;
  return G.createElement(
    yn,
    { points: o, showLabels: x },
    n.children,
    G.createElement(
      de,
      {
        animationId: v,
        begin: l,
        duration: u,
        isActive: c,
        easing: d,
        onAnimationEnd: C,
        onAnimationStart: w,
        key: v,
      },
      (e) => {
        var l = A(E, T + E, e),
          u = Math.min(l, T),
          d = c
            ? s
              ? hn(
                  u,
                  T,
                  `${s}`.split(/[,\s]+/gim).map((e) => parseFloat(e)),
                )
              : pn(T, u)
            : s == null
              ? void 0
              : String(s);
        if (_) {
          var h = _.length / o.length,
            g =
              e === 1
                ? o
                : o.map((t, n) => {
                    var r = Math.floor(n * h);
                    if (_[r]) {
                      var i = _[r];
                      return q(
                        q({}, t),
                        {},
                        { x: A(i.x, t.x, e), y: A(i.y, t.y, e) },
                      );
                    }
                    return f
                      ? q(
                          q({}, t),
                          {},
                          { x: A(p * 2, t.x, e), y: A(m / 2, t.y, e) },
                        )
                      : q(q({}, t), {}, { x: t.x, y: t.y });
                  });
          return (
            (i.current = g),
            G.createElement(bn, {
              props: n,
              points: g,
              clipPathId: t,
              pathRef: r,
              strokeDasharray: d,
            })
          );
        }
        return (
          e > 0 && T > 0 && ((i.current = o), (a.current = u)),
          G.createElement(bn, {
            props: n,
            points: o,
            clipPathId: t,
            pathRef: r,
            strokeDasharray: d,
          })
        );
      },
    ),
    G.createElement(S, { label: n.label }),
  );
}
function Cn(e) {
  var { clipPathId: t, props: n } = e,
    r = (0, G.useRef)(null),
    i = (0, G.useRef)(0),
    a = (0, G.useRef)(null);
  return G.createElement(Sn, {
    props: n,
    clipPathId: t,
    previousPointsRef: r,
    longestAnimatedLengthRef: i,
    pathRef: a,
  });
}
var wn = (e, t) => ({
    x: e.x,
    y: e.y,
    value: e.value,
    errorVal: Ve(e.payload, t),
  }),
  Tn = class extends G.Component {
    render() {
      var {
        hide: e,
        dot: t,
        points: n,
        className: r,
        xAxisId: i,
        yAxisId: a,
        top: o,
        left: s,
        width: c,
        height: l,
        id: u,
        needClip: d,
      } = this.props;
      if (e) return null;
      var f = $e(`recharts-line`, r),
        p = u,
        { r: m, strokeWidth: h } = $t(t),
        g = Xe(t),
        _ = m * 2 + h;
      return G.createElement(
        G.Fragment,
        null,
        G.createElement(
          j,
          { className: f },
          d &&
            G.createElement(
              `defs`,
              null,
              G.createElement(Ee, { clipPathId: p, xAxisId: i, yAxisId: a }),
              !g &&
                G.createElement(
                  `clipPath`,
                  { id: `clipPath-dots-${p}` },
                  G.createElement(`rect`, {
                    x: s - _ / 2,
                    y: o - _ / 2,
                    width: c + _,
                    height: l + _,
                  }),
                ),
            ),
          G.createElement(
            me,
            {
              xAxisId: i,
              yAxisId: a,
              data: n,
              dataPointFormatter: wn,
              errorBarOffset: 0,
            },
            G.createElement(Cn, { props: this.props, clipPathId: p }),
          ),
        ),
        G.createElement(jt, {
          activeDot: this.props.activeDot,
          points: n,
          mainColor: this.props.stroke,
          itemDataKey: this.props.dataKey,
        }),
      );
    }
  },
  En = {
    activeDot: !0,
    animateNewValues: !0,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: `ease`,
    connectNulls: !1,
    dot: !0,
    fill: `#fff`,
    hide: !1,
    isAnimationActive: !ze.isSsr,
    label: !1,
    legendType: `line`,
    stroke: `#3182bd`,
    strokeWidth: 1,
    xAxisId: 0,
    yAxisId: 0,
  };
function Dn(e) {
  var t = w(e, En),
    {
      activeDot: n,
      animateNewValues: r,
      animationBegin: i,
      animationDuration: a,
      animationEasing: o,
      connectNulls: s,
      dot: c,
      hide: l,
      isAnimationActive: u,
      label: d,
      legendType: f,
      xAxisId: p,
      yAxisId: m,
      id: h,
    } = t,
    g = cn(t, nn),
    { needClip: _ } = we(p, m),
    v = Qe(),
    y = fe(),
    b = oe(),
    x = Ue((e) => Qt(e, p, m, b, h));
  if ((y !== `horizontal` && y !== `vertical`) || x == null || v == null)
    return null;
  var { height: S, width: C, x: T, y: E } = v;
  return G.createElement(
    Tn,
    un({}, g, {
      id: h,
      connectNulls: s,
      dot: c,
      activeDot: n,
      animateNewValues: r,
      animationBegin: i,
      animationDuration: a,
      animationEasing: o,
      isAnimationActive: u,
      hide: l,
      label: d,
      legendType: f,
      xAxisId: p,
      yAxisId: m,
      points: x,
      layout: y,
      height: S,
      width: C,
      left: T,
      top: E,
      needClip: _,
    }),
  );
}
function On(e) {
  var {
    layout: t,
    xAxis: n,
    yAxis: r,
    xAxisTicks: i,
    yAxisTicks: a,
    dataKey: o,
    bandSize: s,
    displayedData: c,
  } = e;
  return c
    .map((e, c) => {
      var l = Ve(e, o);
      if (t === `horizontal`)
        return {
          x: xe({ axis: n, ticks: i, bandSize: s, entry: e, index: c }),
          y: be(l) ? null : r.scale(l),
          value: l,
          payload: e,
        };
      var u = be(l) ? null : n.scale(l),
        d = xe({ axis: r, ticks: a, bandSize: s, entry: e, index: c });
      return u == null || d == null
        ? null
        : { x: u, y: d, value: l, payload: e };
    })
    .filter(Boolean);
}
function kn(e) {
  var t = w(e, En),
    n = oe();
  return G.createElement(Ze, { id: t.id, type: `line` }, (e) =>
    G.createElement(
      G.Fragment,
      null,
      G.createElement(O, { legendPayload: dn(t) }),
      G.createElement(b, { fn, args: t }),
      G.createElement(ge, {
        type: `line`,
        id: e,
        data: t.data,
        xAxisId: t.xAxisId,
        yAxisId: t.yAxisId,
        zAxisId: 0,
        dataKey: t.dataKey,
        hide: t.hide,
        isPanorama: n,
      }),
      G.createElement(Dn, un({}, t, { id: e })),
    ),
  );
}
var An = G.memo(kn);
An.displayName = `Line`;
var jn = (e, t, n, r) => E(e, `xAxis`, t, r),
  Mn = (e, t, n, r) => se(e, `xAxis`, t, r),
  Nn = (e, t, n, r) => E(e, `yAxis`, n, r),
  Pn = (e, t, n, r) => se(e, `yAxis`, n, r),
  Fn = he([D, jn, Nn, Mn, Pn], (e, t, n, r, i) =>
    ke(e, `xAxis`) ? _(t, r, !1) : _(n, i, !1),
  ),
  In = he([et, (e, t, n, r, i) => i], (e, t) =>
    e.filter((e) => e.type === `area`).find((e) => e.id === t),
  ),
  Ln = he(
    [
      D,
      jn,
      Nn,
      Mn,
      Pn,
      (e, t, n, r, i) => {
        var a = In(e, t, n, r, i);
        if (a != null) {
          var o = D(e),
            s = ke(o, `xAxis`) ? te(e, `yAxis`, n, r) : te(e, `xAxis`, t, r);
          if (s != null) {
            var { stackId: c } = a,
              l = y(a);
            if (c != null && l != null)
              return s[c]?.stackedData?.find((e) => e.key === l);
          }
        }
      },
      ue,
      Fn,
      In,
    ],
    (e, t, n, r, i, a, o, s, c) => {
      var { chartData: l, dataStartIndex: u, dataEndIndex: d } = o;
      if (
        !(
          c == null ||
          (e !== `horizontal` && e !== `vertical`) ||
          t == null ||
          n == null ||
          r == null ||
          i == null ||
          r.length === 0 ||
          i.length === 0 ||
          s == null
        )
      ) {
        var { data: f } = c,
          p = f && f.length > 0 ? f : l?.slice(u, d + 1);
        if (p != null)
          return lr({
            layout: e,
            xAxis: t,
            yAxis: n,
            xAxisTicks: r,
            yAxisTicks: i,
            dataStartIndex: u,
            areaSettings: c,
            stackedData: a,
            displayedData: p,
            chartBaseValue: void 0,
            bandSize: s,
          });
      }
    },
  ),
  Rn = [`id`],
  zn = [
    `activeDot`,
    `animationBegin`,
    `animationDuration`,
    `animationEasing`,
    `connectNulls`,
    `dot`,
    `fill`,
    `fillOpacity`,
    `hide`,
    `isAnimationActive`,
    `legendType`,
    `stroke`,
    `xAxisId`,
    `yAxisId`,
  ];
function Bn(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = Vn(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]));
  }
  return i;
}
function Vn(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function Hn(e, t) {
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
function J(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Hn(Object(n), !0).forEach(function (t) {
          Un(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Hn(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Un(e, t, n) {
  return (
    (t = Wn(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Wn(e) {
  var t = Gn(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function Gn(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function Y() {
  return (
    (Y = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Y.apply(null, arguments)
  );
}
function Kn(e, t) {
  return e && e !== `none` ? e : t;
}
var qn = (e) => {
  var { dataKey: t, name: n, stroke: r, fill: i, legendType: a, hide: o } = e;
  return [
    {
      inactive: o,
      dataKey: t,
      type: a,
      color: Kn(r, i),
      value: Pe(n, t),
      payload: e,
    },
  ];
};
function Jn(e) {
  var {
    dataKey: t,
    data: n,
    stroke: r,
    strokeWidth: i,
    fill: a,
    name: o,
    hide: s,
    unit: c,
  } = e;
  return {
    dataDefinedOnItem: n,
    positions: void 0,
    settings: {
      stroke: r,
      strokeWidth: i,
      fill: a,
      dataKey: t,
      nameKey: void 0,
      name: Pe(o, t),
      hide: s,
      type: e.tooltipType,
      color: Kn(r, a),
      unit: c,
    },
  };
}
var Yn = (e, t) => {
  var n;
  if (G.isValidElement(e)) n = G.cloneElement(e, t);
  else if (typeof e == `function`) n = e(t);
  else {
    var r = $e(`recharts-area-dot`, typeof e == `boolean` ? `` : e.className);
    n = G.createElement(wt, Y({}, t, { className: r }));
  }
  return n;
};
function Xn(e, t) {
  return e == null ? !1 : t ? !0 : e.length === 1;
}
function Zn(e) {
  var { clipPathId: t, points: n, props: r } = e,
    { needClip: i, dot: a, dataKey: o } = r;
  if (!Xn(n, a)) return null;
  var s = Xe(a),
    c = k(r),
    l = Te(a),
    u = n.map((e, t) =>
      Yn(
        a,
        J(
          J(J({ key: `dot-${t}`, r: 3 }, c), l),
          {},
          {
            index: t,
            cx: e.x,
            cy: e.y,
            dataKey: o,
            value: e.value,
            payload: e.payload,
            points: n,
          },
        ),
      ),
    ),
    d = { clipPath: i ? `url(#clipPath-${s ? `` : `dots-`}${t})` : void 0 };
  return G.createElement(j, Y({ className: `recharts-area-dots` }, d), u);
}
function Qn(e) {
  var { showLabels: t, children: n, points: r } = e,
    i = r.map((e) => {
      var t = { x: e.x, y: e.y, width: 0, height: 0 };
      return J(
        J({}, t),
        {},
        {
          value: e.value,
          payload: e.payload,
          parentViewBox: void 0,
          viewBox: t,
          fill: void 0,
        },
      );
    });
  return G.createElement(ce, { value: t ? i : null }, n);
}
function $n(e) {
  var { points: t, baseLine: n, needClip: r, clipPathId: i, props: a } = e,
    { layout: o, type: s, stroke: c, connectNulls: l, isRange: u } = a,
    { id: d } = a,
    f = Bn(a, Rn),
    p = k(f);
  return G.createElement(
    G.Fragment,
    null,
    t?.length > 1 &&
      G.createElement(
        j,
        { clipPath: r ? `url(#clipPath-${i})` : void 0 },
        G.createElement(
          ee,
          Y({}, p, {
            id: d,
            points: t,
            connectNulls: l,
            type: s,
            baseLine: n,
            layout: o,
            stroke: `none`,
            className: `recharts-area-area`,
          }),
        ),
        c !== `none` &&
          G.createElement(
            ee,
            Y({}, p, {
              className: `recharts-area-curve`,
              layout: o,
              type: s,
              connectNulls: l,
              fill: `none`,
              points: t,
            }),
          ),
        c !== `none` &&
          u &&
          G.createElement(
            ee,
            Y({}, p, {
              className: `recharts-area-curve`,
              layout: o,
              type: s,
              connectNulls: l,
              fill: `none`,
              points: n,
            }),
          ),
      ),
    G.createElement(Zn, { points: t, props: f, clipPathId: i }),
  );
}
function er(e) {
  var { alpha: t, baseLine: n, points: r, strokeWidth: i } = e,
    a = r[0].y,
    o = r[r.length - 1].y;
  if (!pe(a) || !pe(o)) return null;
  var s = t * Math.abs(a - o),
    c = Math.max(...r.map((e) => e.x || 0));
  return (
    Re(n)
      ? (c = Math.max(n, c))
      : n &&
        Array.isArray(n) &&
        n.length &&
        (c = Math.max(...n.map((e) => e.x || 0), c)),
    Re(c)
      ? G.createElement(`rect`, {
          x: 0,
          y: a < o ? a : a - s,
          width: c + (i ? parseInt(`${i}`, 10) : 1),
          height: Math.floor(s),
        })
      : null
  );
}
function tr(e) {
  var { alpha: t, baseLine: n, points: r, strokeWidth: i } = e,
    a = r[0].x,
    o = r[r.length - 1].x;
  if (!pe(a) || !pe(o)) return null;
  var s = t * Math.abs(a - o),
    c = Math.max(...r.map((e) => e.y || 0));
  return (
    Re(n)
      ? (c = Math.max(n, c))
      : n &&
        Array.isArray(n) &&
        n.length &&
        (c = Math.max(...n.map((e) => e.y || 0), c)),
    Re(c)
      ? G.createElement(`rect`, {
          x: a < o ? a : a - s,
          y: 0,
          width: s,
          height: Math.floor(c + (i ? parseInt(`${i}`, 10) : 1)),
        })
      : null
  );
}
function nr(e) {
  var { alpha: t, layout: n, points: r, baseLine: i, strokeWidth: a } = e;
  return n === `vertical`
    ? G.createElement(er, { alpha: t, points: r, baseLine: i, strokeWidth: a })
    : G.createElement(tr, { alpha: t, points: r, baseLine: i, strokeWidth: a });
}
function rr(e) {
  var {
      needClip: t,
      clipPathId: n,
      props: r,
      previousPointsRef: i,
      previousBaselineRef: a,
    } = e,
    {
      points: o,
      baseLine: s,
      isAnimationActive: c,
      animationBegin: l,
      animationDuration: u,
      animationEasing: d,
      onAnimationStart: f,
      onAnimationEnd: p,
    } = r,
    m = le(r, `recharts-area-`),
    [h, g] = (0, G.useState)(!1),
    _ = !h,
    v = (0, G.useCallback)(() => {
      (typeof p == `function` && p(), g(!1));
    }, [p]),
    y = (0, G.useCallback)(() => {
      (typeof f == `function` && f(), g(!0));
    }, [f]),
    b = i.current,
    x = a.current;
  return G.createElement(
    Qn,
    { showLabels: _, points: o },
    r.children,
    G.createElement(
      de,
      {
        animationId: m,
        begin: l,
        duration: u,
        isActive: c,
        easing: d,
        onAnimationEnd: v,
        onAnimationStart: y,
        key: m,
      },
      (e) => {
        if (b) {
          var l = b.length / o.length,
            u =
              e === 1
                ? o
                : o.map((t, n) => {
                    var r = Math.floor(n * l);
                    if (b[r]) {
                      var i = b[r];
                      return J(
                        J({}, t),
                        {},
                        { x: A(i.x, t.x, e), y: A(i.y, t.y, e) },
                      );
                    }
                    return t;
                  }),
            d = Re(s)
              ? A(x, s, e)
              : be(s) || qe(s)
                ? A(x, 0, e)
                : s.map((t, n) => {
                    var r = Math.floor(n * l);
                    if (Array.isArray(x) && x[r]) {
                      var i = x[r];
                      return J(
                        J({}, t),
                        {},
                        { x: A(i.x, t.x, e), y: A(i.y, t.y, e) },
                      );
                    }
                    return t;
                  });
          return (
            e > 0 && ((i.current = u), (a.current = d)),
            G.createElement($n, {
              points: u,
              baseLine: d,
              needClip: t,
              clipPathId: n,
              props: r,
            })
          );
        }
        return (
          e > 0 && ((i.current = o), (a.current = s)),
          G.createElement(
            j,
            null,
            c &&
              G.createElement(
                `defs`,
                null,
                G.createElement(
                  `clipPath`,
                  { id: `animationClipPath-${n}` },
                  G.createElement(nr, {
                    alpha: e,
                    points: o,
                    baseLine: s,
                    layout: r.layout,
                    strokeWidth: r.strokeWidth,
                  }),
                ),
              ),
            G.createElement(
              j,
              { clipPath: `url(#animationClipPath-${n})` },
              G.createElement($n, {
                points: o,
                baseLine: s,
                needClip: t,
                clipPathId: n,
                props: r,
              }),
            ),
          )
        );
      },
    ),
    G.createElement(S, { label: r.label }),
  );
}
function ir(e) {
  var { needClip: t, clipPathId: n, props: r } = e,
    i = (0, G.useRef)(null),
    a = (0, G.useRef)();
  return G.createElement(rr, {
    needClip: t,
    clipPathId: n,
    props: r,
    previousPointsRef: i,
    previousBaselineRef: a,
  });
}
var ar = class extends G.PureComponent {
    render() {
      var {
        hide: e,
        dot: t,
        points: n,
        className: r,
        top: i,
        left: a,
        needClip: o,
        xAxisId: s,
        yAxisId: c,
        width: l,
        height: u,
        id: d,
        baseLine: f,
      } = this.props;
      if (e) return null;
      var p = $e(`recharts-area`, r),
        m = d,
        { r: h, strokeWidth: g } = $t(t),
        _ = Xe(t),
        v = h * 2 + g;
      return G.createElement(
        G.Fragment,
        null,
        G.createElement(
          j,
          { className: p },
          o &&
            G.createElement(
              `defs`,
              null,
              G.createElement(Ee, { clipPathId: m, xAxisId: s, yAxisId: c }),
              !_ &&
                G.createElement(
                  `clipPath`,
                  { id: `clipPath-dots-${m}` },
                  G.createElement(`rect`, {
                    x: a - v / 2,
                    y: i - v / 2,
                    width: l + v,
                    height: u + v,
                  }),
                ),
            ),
          G.createElement(ir, {
            needClip: o,
            clipPathId: m,
            props: this.props,
          }),
        ),
        G.createElement(jt, {
          points: n,
          mainColor: Kn(this.props.stroke, this.props.fill),
          itemDataKey: this.props.dataKey,
          activeDot: this.props.activeDot,
        }),
        this.props.isRange &&
          Array.isArray(f) &&
          G.createElement(jt, {
            points: f,
            mainColor: Kn(this.props.stroke, this.props.fill),
            itemDataKey: this.props.dataKey,
            activeDot: this.props.activeDot,
          }),
      );
    }
  },
  or = {
    activeDot: !0,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: `ease`,
    connectNulls: !1,
    dot: !1,
    fill: `#3182bd`,
    fillOpacity: 0.6,
    hide: !1,
    isAnimationActive: !ze.isSsr,
    legendType: `line`,
    stroke: `#3182bd`,
    xAxisId: 0,
    yAxisId: 0,
  };
function sr(e) {
  var t = w(e, or),
    {
      activeDot: n,
      animationBegin: r,
      animationDuration: i,
      animationEasing: a,
      connectNulls: o,
      dot: s,
      fill: c,
      fillOpacity: l,
      hide: u,
      isAnimationActive: d,
      legendType: f,
      stroke: p,
      xAxisId: m,
      yAxisId: h,
    } = t,
    g = Bn(t, zn),
    _ = fe(),
    v = re(),
    { needClip: y } = we(m, h),
    b = oe(),
    {
      points: x,
      isRange: S,
      baseLine: C,
    } = Ue((t) => Ln(t, m, h, b, e.id)) ?? {},
    T = Qe();
  if (
    (_ !== `horizontal` && _ !== `vertical`) ||
    T == null ||
    (v !== `AreaChart` && v !== `ComposedChart`)
  )
    return null;
  var { height: E, width: D, x: ee, y: te } = T;
  return !x || !x.length
    ? null
    : G.createElement(
        ar,
        Y({}, g, {
          activeDot: n,
          animationBegin: r,
          animationDuration: i,
          animationEasing: a,
          baseLine: C,
          connectNulls: o,
          dot: s,
          fill: c,
          fillOpacity: l,
          height: E,
          hide: u,
          layout: _,
          isAnimationActive: d,
          isRange: S,
          legendType: f,
          needClip: y,
          points: x,
          stroke: p,
          width: D,
          left: ee,
          top: te,
          xAxisId: m,
          yAxisId: h,
        }),
      );
}
var cr = (e, t, n, r, i) => {
  var a = n ?? t;
  if (Re(a)) return a;
  var o = e === `horizontal` ? i : r,
    s = o.scale.domain();
  if (o.type === `number`) {
    var c = Math.max(s[0], s[1]),
      l = Math.min(s[0], s[1]);
    return a === `dataMin`
      ? l
      : a === `dataMax` || c < 0
        ? c
        : Math.max(Math.min(s[0], s[1]), 0);
  }
  return a === `dataMin` ? s[0] : a === `dataMax` ? s[1] : s[0];
};
function lr(e) {
  var {
      areaSettings: { connectNulls: t, baseValue: n, dataKey: r },
      stackedData: i,
      layout: a,
      chartBaseValue: o,
      xAxis: s,
      yAxis: c,
      displayedData: l,
      dataStartIndex: u,
      xAxisTicks: d,
      yAxisTicks: f,
      bandSize: p,
    } = e,
    m = i && i.length,
    h = cr(a, o, n, s, c),
    g = a === `horizontal`,
    _ = !1,
    v = l.map((e, n) => {
      var a;
      m
        ? (a = i[u + n])
        : ((a = Ve(e, r)), Array.isArray(a) ? (_ = !0) : (a = [h, a]));
      var o = a[1] == null || (m && !t && Ve(e, r) == null);
      return g
        ? {
            x: xe({ axis: s, ticks: d, bandSize: p, entry: e, index: n }),
            y: o ? null : c.scale(a[1]),
            value: a,
            payload: e,
          }
        : {
            x: o ? null : s.scale(a[1]),
            y: xe({ axis: c, ticks: f, bandSize: p, entry: e, index: n }),
            value: a,
            payload: e,
          };
    });
  return {
    points: v,
    baseLine:
      m || _
        ? v.map((e) => {
            var t = Array.isArray(e.value) ? e.value[0] : null;
            return g
              ? {
                  x: e.x,
                  y: t != null && e.y != null ? c.scale(t) : null,
                  payload: e.payload,
                }
              : {
                  x: t == null ? null : s.scale(t),
                  y: e.y,
                  payload: e.payload,
                };
          })
        : g
          ? c.scale(h)
          : s.scale(h),
    isRange: _,
  };
}
function ur(e) {
  var t = w(e, or),
    n = oe();
  return G.createElement(Ze, { id: t.id, type: `area` }, (e) =>
    G.createElement(
      G.Fragment,
      null,
      G.createElement(O, { legendPayload: qn(t) }),
      G.createElement(b, { fn: Jn, args: t }),
      G.createElement(ge, {
        type: `area`,
        id: e,
        data: t.data,
        dataKey: t.dataKey,
        xAxisId: t.xAxisId,
        yAxisId: t.yAxisId,
        zAxisId: 0,
        stackId: Ge(t.stackId),
        hide: t.hide,
        barSize: void 0,
        baseValue: t.baseValue,
        isPanorama: n,
        connectNulls: t.connectNulls,
      }),
      G.createElement(sr, Y({}, t, { id: e })),
    ),
  );
}
var dr = G.memo(ur);
dr.displayName = `Area`;
var fr = [`axis`],
  pr = (0, G.forwardRef)((e, t) =>
    G.createElement(Oe, {
      chartName: `ComposedChart`,
      defaultTooltipEventType: `axis`,
      validateTooltipEventTypes: fr,
      tooltipPayloadSearcher: ne,
      categoricalChartProps: e,
      ref: t,
    }),
  );
function mr(e, t, n = NaN) {
  let { strSymbol: r, strDecimalSymbol: i, strThousandsSeparator: a } = Be(t);
  ((e = e
    .replace(r, ``)
    .replace(`.--`, `.00`)
    .replace(/ /g, ``)
    .replace(hr(a), ``)),
    i !== `.` && (e = e.replace(hr(i), `.`)));
  let o = e.indexOf(`.`),
    s = e.lastIndexOf(`.`);
  if (o !== -1 && o !== s) {
    let t = e.split(`.`);
    t[t.length - 1].length > 0 &&
      (e = `${t.slice(0, -1).join(``)}.${t[t.length - 1]}`);
  }
  let c = parseFloat(e) * 100;
  return isNaN(c) ? n : Math.floor(c + 1e-6);
}
function hr(e) {
  return e === `.` ? /\./g : new RegExp(e, `g`);
}
function gr(e) {
  let { children: t } = e;
  return (0, K.jsx)(Ae, {
    isAnimationActive: !1,
    content: (e) => {
      let n = typeof t == `function` ? t(e) : t;
      return n
        ? (0, K.jsx)(N, {
            background: `dull-7`,
            radius: `md`,
            padding: `2`,
            elevation: `1`,
            children: n,
          })
        : null;
    },
  });
}
G.memo(function () {
  return (0, K.jsx)(_e, { stroke: `#FFFFFF10`, fill: `var(--color-dull-5)` });
});
function _r(e) {
  let [t, n] = (0, G.useState)(null);
  return {
    props: {
      onMouseDown: (e, t) => {
        e.activeCoordinate &&
          (n([e, e]), t.preventDefault(), t.stopPropagation());
      },
      onMouseUp: (r, i) => {
        if (
          t &&
          r.activeCoordinate &&
          t[0].activeCoordinate.x !== r.activeCoordinate.x
        ) {
          let n = t[0];
          n.activeCoordinate.x < r.activeCoordinate.x
            ? e.onSelection(n, r)
            : e.onSelection(r, n);
        }
        n(null);
      },
      onMouseMove: t ? (e) => n((t) => t && [t[0], e]) : void 0,
    },
    activeDrag: t,
  };
}
function vr(e) {
  let {
    id: t,
    color: n,
    stops: r = [
      [`0%`, 0.7],
      [`100%`, 0],
    ],
    gradientUnits: i,
  } = e;
  return (0, K.jsx)(`linearGradient`, {
    id: t,
    x1: `0`,
    y1: `0`,
    x2: `0`,
    y2: `100%`,
    gradientUnits: i,
    children: r.map(([e, t, r], i) =>
      (0, K.jsx)(`stop`, { offset: e, stopColor: r ?? n, stopOpacity: t }, i),
    ),
  });
}
function yr(e) {
  let { dataKey: t, color: n, numPoints: r, ...i } = e;
  return (0, K.jsx)(An, {
    dataKey: t,
    stroke: n,
    dot: r === 1,
    strokeWidth: 2,
    yAxisId: `price`,
    isAnimationActive: !1,
    connectNulls: !0,
    ...i,
  });
}
function br(e) {
  let { scale: t, dataKey: n } = e,
    r = (0, G.useId)(),
    i = {
      dataKey: n,
      fill: `url(#${r})`,
      yAxisId: `purchases`,
      isAnimationActive: !1,
    };
  return (0, K.jsxs)(K.Fragment, {
    children: [
      (0, K.jsx)(`defs`, {
        children: (0, K.jsx)(vr, {
          id: r,
          color: `var(--color-blue-9)`,
          stops: [
            [`0%`, 1],
            [
              `50%`,
              1,
              `color-mix(in srgb, var(--color-blue-9) 25%, var(--color-dull-5))`,
            ],
          ],
          gradientUnits: `userSpaceOnUse`,
        }),
      }),
      t === `lifetime`
        ? (0, K.jsx)(dr, { ...i, strokeOpacity: 0.25, connectNulls: !0 })
        : (0, K.jsx)(Ne, { ...i }),
    ],
  });
}
function xr() {
  typeof v == `function`
    ? v({
        measureText: (e, t) => {
          let n = e.toString(),
            r = typeof t?.fontSize == `number` ? t.fontSize : 13;
          return { width: n.length * 8, height: r * 1.3 };
        },
      })
    : console.error(
        `Cannot find configureTextMeasurement. Recharts not patched correctly for this context.`,
      );
}
var X = e(t(), 1),
  Sr = class e extends X.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.webcookie || H(e.M()),
        X.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { webcookie: { n: 1, br: I.readString, bw: F.writeString } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= L(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return P(e.M(), t, n);
    }
    static fromObject(t) {
      return B(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new X.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return M(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new X.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      R(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new X.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEconMarket_IsMarketplaceAllowed_Request`;
    }
  },
  Cr = class e extends X.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.allowed || H(e.M()),
        X.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            allowed: { n: 1, br: I.readBool, bw: F.writeBool },
            reason: { n: 2, br: I.readUint32, bw: F.writeUint32 },
            allowed_at_time: { n: 3, br: I.readUint32, bw: F.writeUint32 },
            steamguard_required_days: {
              n: 4,
              br: I.readUint32,
              bw: F.writeUint32,
            },
            forms_requested: { n: 7, br: I.readBool, bw: F.writeBool },
            forms_require_verification: {
              n: 8,
              br: I.readBool,
              bw: F.writeBool,
            },
            new_device_cooldown_days: {
              n: 9,
              br: I.readUint32,
              bw: F.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= L(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return P(e.M(), t, n);
    }
    static fromObject(t) {
      return B(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new X.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return M(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new X.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      R(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new X.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEconMarket_IsMarketplaceAllowed_Response`;
    }
  },
  wr;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`EconMarket.IsMarketplaceAllowed#1`, U(Sr, t, n), Cr, {
      ePrivilege: 1,
    });
  }
  e.IsMarketplaceAllowed = t;
})((wr ||= {}));
var Tr = { resultsView: `grid`, priceTimeScale: `month`, searchSort: 0 },
  Er = (0, G.createContext)({
    prefs: Tr,
    onChange: () =>
      console.error(
        `Cannot update market display preferences. Missing provider.`,
      ),
  });
function Dr(e) {
  let { prefs: t, onChange: n, children: r } = e,
    i = (0, G.useRef)(t);
  i.current = t;
  let a = (0, G.useMemo)(() => ({ ...Tr, ...t }), [t]),
    o = (0, G.useCallback)(
      (e) => {
        let t = (e) => {
          let t = { ...e };
          for (let [e, n] of Object.entries(Tr)) t[e] === n && delete t[e];
          return t;
        };
        n(
          typeof e == `function`
            ? (n) => {
                let r = e({ ...Tr, ...n });
                return t(r);
              }
            : e,
        );
      },
      [n],
    ),
    s = (0, G.useMemo)(() => ({ prefs: a, onChange: o }), [a, o]);
  return (0, K.jsx)(Er, { value: s, children: r });
}
function Or() {
  let { prefs: e, onChange: t } = (0, G.useContext)(Er);
  return [e, t];
}
function kr(e) {
  let [t, n] = Or();
  return [
    t[e],
    (0, G.useCallback)((t) => n((n) => ({ ...n, [e]: t })), [n, e]),
  ];
}
var Z = {};
((Z.arabic = () =>
  z(() => import(`./chunk~df8277130c.js`), [], import.meta.url)),
  (Z.brazilian = () =>
    z(() => import(`./chunk~624e62faa7.js`), [], import.meta.url)),
  (Z.bulgarian = () =>
    z(() => import(`./chunk~2dab28bf00.js`), [], import.meta.url)),
  (Z.czech = () =>
    z(() => import(`./chunk~5c580574d0.js`), [], import.meta.url)),
  (Z.danish = () =>
    z(() => import(`./chunk~9cb9b8701f.js`), [], import.meta.url)),
  (Z.dutch = () =>
    z(() => import(`./chunk~fad1e44128.js`), [], import.meta.url)),
  (Z.english = () =>
    z(() => import(`./chunk~dff62a182b.js`), [], import.meta.url)),
  (Z.finnish = () =>
    z(() => import(`./chunk~336bc0f543.js`), [], import.meta.url)),
  (Z.french = () =>
    z(() => import(`./chunk~bc71fc4fa7.js`), [], import.meta.url)),
  (Z.german = () =>
    z(() => import(`./chunk~ed5eab38d8.js`), [], import.meta.url)),
  (Z.greek = () =>
    z(() => import(`./chunk~8bde6a9c1d.js`), [], import.meta.url)),
  (Z.hungarian = () =>
    z(() => import(`./chunk~eef2431860.js`), [], import.meta.url)),
  (Z.indonesian = () =>
    z(() => import(`./chunk~b945780e89.js`), [], import.meta.url)),
  (Z.italian = () =>
    z(() => import(`./chunk~1755269fed.js`), [], import.meta.url)),
  (Z.japanese = () =>
    z(() => import(`./chunk~da0b237224.js`), [], import.meta.url)),
  (Z.koreana = () =>
    z(() => import(`./chunk~f087aedf6e.js`), [], import.meta.url)),
  (Z.latam = () =>
    z(() => import(`./chunk~72dfb8f5d7.js`), [], import.meta.url)),
  (Z.malay = () =>
    z(() => import(`./chunk~d239a1a2ed.js`), [], import.meta.url)),
  (Z.norwegian = () =>
    z(() => import(`./chunk~8faa6628c1.js`), [], import.meta.url)),
  (Z.polish = () =>
    z(() => import(`./chunk~d3ac1f45d5.js`), [], import.meta.url)),
  (Z.portuguese = () =>
    z(() => import(`./chunk~6a2a9cc2f1.js`), [], import.meta.url)),
  (Z.romanian = () =>
    z(() => import(`./chunk~1aecc8c977.js`), [], import.meta.url)),
  (Z.russian = () =>
    z(() => import(`./chunk~b1220e7a02.js`), [], import.meta.url)),
  (Z.sc_schinese = () =>
    z(() => import(`./chunk~9ca6b64b66.js`), [], import.meta.url)),
  (Z.schinese = () =>
    z(() => import(`./chunk~99317c4a75.js`), [], import.meta.url)),
  (Z.spanish = () =>
    z(() => import(`./chunk~b208e3a0b4.js`), [], import.meta.url)),
  (Z.swedish = () =>
    z(() => import(`./chunk~210522a79f.js`), [], import.meta.url)),
  (Z.tchinese = () =>
    z(() => import(`./chunk~8f5204043c.js`), [], import.meta.url)),
  (Z.thai = () =>
    z(() => import(`./chunk~224f05f927.js`), [], import.meta.url)),
  (Z.turkish = () =>
    z(() => import(`./chunk~4808d08850.js`), [], import.meta.url)),
  (Z.ukrainian = () =>
    z(() => import(`./chunk~7eaca1a6b4.js`), [], import.meta.url)),
  (Z.vietnamese = () =>
    z(() => import(`./chunk~9efd690e22.js`), [], import.meta.url)));
async function Ar(e) {
  if (Z[e]) return await Z[e]();
}
var Q = vt(Ar),
  jr = `VJlhvA2sWGg-`,
  Mr = 86400,
  Nr = 604800;
xr();
var Pr = { week: Mr / 4, month: Mr, year: Nr, lifetime: Nr },
  Fr = { week: Mr / 48, month: Mr / 48, year: Mr / 2, lifetime: Mr / 2 };
function Ir(e, t) {
  let n = new Date(e * 1e3);
  switch (t) {
    case `week`:
      n.setDate(n.getDate() - 7);
      break;
    case `month`:
      n.setMonth(n.getMonth() - 1);
      break;
    case `year`:
    case `lifetime`:
      n.setFullYear(n.getFullYear() - 1);
      break;
    default:
      lt(t, `Unhandled graph scale: ${t}`);
  }
  return Math.floor(n.getTime() / 1e3);
}
function Lr(e) {
  let { priceHistory: t, height: n } = e,
    [r, i] = kr(`priceTimeScale`),
    a = Wr(t, r),
    o = (0, G.useMemo)(
      () => a.reduce((e, t) => e + +(t.purchases > 0), 0),
      [a],
    ),
    s = (0, G.useId)();
  return (0, K.jsxs)(Rr, {
    currency: t.ecurrency,
    data: a,
    scale: r,
    onScaleChange: i,
    height: n,
    children: [
      (0, K.jsx)(_e, {
        horizontal: !1,
        vertical: !1,
        fill: `var(--color-dull-5)`,
        yAxisId: `price`,
      }),
      (0, K.jsxs)(`defs`, {
        children: [
          (0, K.jsx)(vr, {
            id: `${s}price`,
            color: `var(--color-green-7)`,
            stops: [
              [`0%`, 0.5],
              [`90%`, 0],
            ],
            gradientUnits: `userSpaceOnUse`,
          }),
          (0, K.jsxs)(`filter`, {
            id: `${s}band`,
            children: [
              (0, K.jsx)(`feColorMatrix`, {
                in: `SourceAlpha`,
                values: `0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 100 0`,
                result: `solid`,
              }),
              (0, K.jsx)(`feOffset`, {
                in: `solid`,
                dy: `60`,
                result: `shifted`,
              }),
              (0, K.jsx)(`feGaussianBlur`, {
                in: `shifted`,
                stdDeviation: `25`,
                result: `blurred`,
              }),
              (0, K.jsx)(`feComposite`, {
                in: `SourceGraphic`,
                in2: `blurred`,
                operator: `out`,
              }),
            ],
          }),
        ],
      }),
      (0, K.jsx)(br, { dataKey: `purchases`, scale: r }),
      (0, K.jsx)(dr, {
        dataKey: `price`,
        yAxisId: `price`,
        stroke: `none`,
        fill: `url(#${s}price)`,
        fillOpacity: 1,
        filter: `url(#${s}band)`,
        activeDot: !1,
        tooltipType: `none`,
        isAnimationActive: !1,
        connectNulls: !0,
      }),
      (0, K.jsx)(yr, {
        dataKey: `price`,
        color: `var(--color-green-7)`,
        numPoints: o,
        strokeWidth: 1.5,
        className: jr,
      }),
      a.length === 0 &&
        (0, K.jsx)(je, {
          position: `center`,
          children: Q.Localize(`#Graph_NoData`),
        }),
    ],
  });
}
function Rr(e) {
  let {
      children: t,
      currency: n,
      data: r,
      scale: i,
      onScaleChange: a,
      tooltipComponent: s,
      height: c,
    } = e,
    l = i === `week` || i === `month`,
    u = new Intl.DateTimeFormat(gt(), {
      year: `numeric`,
      month: `numeric`,
      day: `numeric`,
      hour: l ? `numeric` : void 0,
    }),
    [d, f] = (0, G.useState)(null),
    { props: p, activeDrag: m } = _r({
      onSelection: (e, t) =>
        e.activeLabel && t.activeLabel && f([e.activeLabel, t.activeLabel]),
    }),
    g = !!a,
    _ = (e) => {
      (f(null), a && a(e));
    },
    v = !ot(`sm`),
    y =
      g &&
      (0, K.jsx)(h, {
        value: d ? null : i,
        onValueChange: _,
        options: [`week`, `month`, `year`, `lifetime`],
        getOptionLabel: Ur,
        radius: `sm`,
        variant: `dim`,
      });
  return (0, K.jsxs)(N, {
    children: [
      (0, K.jsxs)(W, {
        align: `end`,
        justify: `between`,
        marginBottom: `2`,
        children: [
          (0, K.jsx)(o, {
            size: `5`,
            contrast: `subtitle`,
            children: Q.Localize(`#MedianSalePrice_Graph_Title`),
          }),
          !v &&
            (0, K.jsxs)(W, {
              justify: `center`,
              gap: `2`,
              children: [
                d &&
                  (0, K.jsxs)(at, {
                    color: `dull`,
                    onClick: () => f(null),
                    children: [
                      (0, K.jsxs)(V, {
                        size: `2`,
                        contrast: `title`,
                        children: [
                          u.format(d[0] * 1e3),
                          ` - `,
                          u.format(d[1] * 1e3),
                        ],
                      }),
                      (0, K.jsx)(ut, { marginLeft: `2` }),
                    ],
                  }),
                y,
              ],
            }),
        ],
      }),
      (0, K.jsx)(N, {
        background: `dull-6`,
        padding: { initial: `1`, sm: `4` },
        paddingTop: `5`,
        children: (0, K.jsxs)(pr, {
          style: {
            width: `100%`,
            ...(c
              ? { height: c }
              : { maxHeight: `min( 70vh, 350px )`, minHeight: `320px` }),
            fontSize: `var(--text-size-3)`,
          },
          data: r,
          responsive: !0,
          ...p,
          margin: { left: 20, right: 20 },
          children: [
            (0, K.jsx)(zr, {
              currency: n,
              scale: i,
              customDomain: d,
              tooltipComponent: s,
            }),
            m &&
              (0, K.jsx)(Ut, {
                x1: m[0].activeLabel,
                x2: m[1].activeLabel,
                fill: `#FFFFFF`,
                fillOpacity: 0.3,
                yAxisId: `price`,
                ifOverflow: `visible`,
              }),
            t,
          ],
        }),
      }),
      v && (0, K.jsx)(N, { marginTop: `2`, children: y }),
    ],
  });
}
var zr = G.memo(function (e) {
    let { scale: t, currency: n, customDomain: r, tooltipComponent: i } = e,
      [
        {
          rtMount: a,
          dayDateFormatter: o,
          hourDateFormatter: s,
          numberFormatter: c,
        },
      ] = (0, G.useState)(() => ({
        rtMount: Math.floor(Date.now() / 1e3),
        dayDateFormatter: new Intl.DateTimeFormat(gt(), {
          year: `numeric`,
          month: `numeric`,
          day: `numeric`,
          hour: void 0,
        }),
        hourDateFormatter: new Intl.DateTimeFormat(gt(), {
          year: `numeric`,
          month: `numeric`,
          day: `numeric`,
          hour: `numeric`,
        }),
        numberFormatter: new Intl.NumberFormat(gt()),
      })),
      l = i || Vr,
      u = t === `week` || t === `month` ? s : o,
      d = (0, G.useCallback)((e) => c.format(e), [c]),
      f = (0, G.useCallback)((e) => We(Math.round(e * 100), n), [n]);
    return (0, K.jsxs)(K.Fragment, {
      children: [
        (0, K.jsx)(Br, {
          dateFormatter: u,
          mountTime: a,
          scale: t,
          customDomain: r,
        }),
        (0, K.jsx)(Fe, {
          yAxisId: `price`,
          tickMargin: 3,
          tickFormatter: f,
          width: `auto`,
          children: (0, K.jsx)(je, {
            angle: -90,
            position: `left`,
            offset: 10,
            fill: `var(--color-green-7)`,
            children: Q.Localize(`#Graph_Label_Price`),
          }),
        }),
        (0, K.jsx)(Fe, {
          yAxisId: `purchases`,
          tickMargin: 3,
          orientation: `right`,
          tickFormatter: d,
          width: `auto`,
          allowDecimals: !1,
          children: (0, K.jsx)(je, {
            angle: 90,
            position: `right`,
            offset: 10,
            fill: `var(--color-blue-8)`,
            children: Q.Localize(`#Graph_Label_Volume`),
          }),
        }),
        (0, K.jsx)(l, { dateFormatter: u, currency: n }),
      ],
    });
  }),
  Br = G.memo(function (e) {
    let { dateFormatter: t, mountTime: n, scale: r, customDomain: i } = e,
      a = (0, G.useMemo)(
        () => [
          (e) => Math.min(e - Fr[r], Ir(n, r)),
          (e) => Math.max(e + Fr[r], n),
        ],
        [n, r],
      ),
      o = i || a,
      s = (0, G.useCallback)((e) => t.format(e * 1e3), [t]);
    return (0, K.jsx)(He, {
      dataKey: `time`,
      tickMargin: 3,
      minTickGap: 24,
      tickFormatter: s,
      scale: `time`,
      type: `number`,
      domain: o,
      allowDataOverflow: !0,
    });
  });
function Vr(e) {
  let {
      dateFormatter: t,
      currency: n,
      priceKey: r = `price`,
      purchasesKey: i = `purchases`,
    } = e,
    a = new Intl.NumberFormat();
  return (0, K.jsx)(gr, {
    children: (e) => {
      if (!e.active || !e.payload?.length || !e.payload[0].payload) return null;
      let o = e.payload[0].payload,
        s = o[r],
        c = o[i],
        l = o.time;
      if (s === void 0 || c === void 0) return null;
      let u = We(Math.round(s * 100), n),
        d = Q.Localize(`#Graph_NumberSold`, a.format(c)),
        f = t.format(l * 1e3);
      return (0, K.jsxs)(W, {
        direction: `column`,
        gap: `2`,
        children: [
          (0, K.jsx)(V, { weight: `medium`, contrast: `title`, children: f }),
          (0, K.jsx)(V, { color: `green-7`, children: u }),
          (0, K.jsx)(V, { color: `blue-9`, children: d }),
        ],
      });
    },
  });
}
var Hr = {
  week: `#Graph_TimeScale_Week`,
  month: `#Graph_TimeScale_Month`,
  year: `#Graph_TimeScale_Year`,
  lifetime: `#Graph_TimeScale_Lifetime`,
};
function Ur(e) {
  return Q.Localize(Hr[e]);
}
function Wr(e, t) {
  let [n] = (0, G.useState)(() => Math.floor(Date.now() / 1e3));
  return (0, G.useMemo)(() => Gr(e, n), [e, n])[t];
}
function Gr(e, t) {
  let n = { week: [], month: [], year: [], lifetime: [] },
    r,
    i = new Date();
  i.setDate(i.getDate() - 7);
  let a = Math.floor(i.getTime() / 1e3),
    o = new Date();
  o.setMonth(o.getMonth() - 1);
  let s = Math.floor(o.getTime() / 1e3),
    c = new Date();
  c.setFullYear(c.getFullYear() - 1);
  let l = Math.floor(c.getTime() / 1e3);
  for (let t of e.prices || []) {
    let e = Qr(t);
    (t.time >= a && n.week.push(e), t.time >= s && n.month.push(e));
    let i = !!r && Xr(r.time, e.time);
    if (t.time >= l) {
      if (!i) n.year.push(e);
      else {
        let t = n.year[n.year.length - 1];
        Array.isArray(t) ? t.push(e) : (n.year[n.year.length - 1] = [t, e]);
      }
    }
    if (!i) n.lifetime.push(e);
    else {
      let t = n.lifetime[n.lifetime.length - 1];
      Array.isArray(t)
        ? t.push(e)
        : (n.lifetime[n.lifetime.length - 1] = [t, e]);
    }
    r = e;
  }
  let u = (e, n) => {
    if (n.length === 0) return [];
    let r = n.map((e) => (Array.isArray(e) ? $r(e) : e));
    return [...qr(e, t, r), ...Kr(e, r), ...Jr(e, t, r)];
  };
  return {
    week: u(`week`, n.week),
    month: u(`month`, n.month),
    year: u(`year`, n.year),
    lifetime: u(`lifetime`, n.lifetime),
  };
}
function Kr(e, t) {
  if (t.length <= 1) return t;
  let n = [t[0]];
  for (let r = 1; r < t.length; r++) {
    let i = t[r - 1],
      a = t[r],
      o = i.time + Pr[e];
    for (; o < a.time && !Yr(o, a.time, e);)
      (n.push({ time: o, price: void 0, purchases: 0 }), (o += Pr[e]));
    n.push(a);
  }
  return n;
}
function qr(e, t, n) {
  let r = Ir(t, e);
  if (!n.length || Yr(r, n[0].time, e)) return [];
  let i = n[0].time - Pr[e],
    a = [];
  for (; i >= r;)
    (a.push({ time: i, price: void 0, purchases: 0 }), (i -= Pr[e]));
  return a.reverse();
}
function Jr(e, t, n) {
  if (!n.length || Yr(t, n[n.length - 1].time, e)) return [];
  let r = t,
    i = [],
    a = n[n.length - 1].time;
  for (; r > a && !Yr(r, a, e);)
    (i.push({ time: r, price: void 0, purchases: 0 }), (r -= Pr[e]));
  return i.reverse();
}
function Yr(e, t, n) {
  switch (n) {
    case `lifetime`:
    case `year`:
      return Xr(e, t);
    case `month`:
    case `week`:
      return Zr(e, t);
    default:
      return (lt(n, `Unhandled time scale "${n}"`), !1);
  }
}
function Xr(e, t) {
  let n = new Date(e * 1e3),
    r = new Date(t * 1e3);
  return (
    n.getFullYear() === r.getFullYear() &&
    n.getMonth() === r.getMonth() &&
    n.getDate() === r.getDate()
  );
}
function Zr(e, t) {
  return (
    Xr(e, t) && new Date(e * 1e3).getHours() === new Date(t * 1e3).getHours()
  );
}
function Qr(e) {
  return { time: e.time, price: e.price_median, purchases: e.purchases };
}
function $r(e) {
  if (
    (nt(e.length, `Cannot merge a list of zero data points!`), e.length === 1)
  )
    return e[0];
  let { unAvgSum: t, cTotal: n } = e.reduce(
      (e, t) => (
        t.price === void 0 ||
          t.purchases === void 0 ||
          ((e.unAvgSum += t.price * t.purchases), (e.cTotal += t.purchases)),
        e
      ),
      { unAvgSum: 0, cTotal: 0 },
    ),
    r = t / n;
  return { time: e[0].time, price: r, purchases: n };
}
var ei = 1e-5;
function ti(e) {
  return {
    nFloor: parseInt(e.wallet_market_minimum) || 1,
    nIncrement: parseInt(e.wallet_currency_increment) || 1,
  };
}
function ni(e, t, n) {
  let r = e;
  if (t > 1) {
    let i = e / t,
      a = i < 0 ? -1 : 1,
      o = Math.abs(i);
    r = a * (n ? Math.ceil(o) : Math.floor(o + 0.5)) * t;
  }
  return Math.max(r, t);
}
function ri(e, t, n, r) {
  return e <= t ? t : ni(e, n, r);
}
function ii(e, t) {
  let { nFloor: n, nIncrement: r } = ti(t);
  return ri(e, n, r, !0);
}
function ai(e, t, n, r) {
  let i = t.fee_rate ?? 0;
  if (i <= ei) return { nFee: 0, bCapped: !1 };
  let a = ri(Math.trunc(e * i), n, r, !1),
    o = t.fee_cap ? parseInt(t.fee_cap) : 0;
  return o > 0 && a >= o ? { nFee: o, bCapped: !0 } : { nFee: a, bCapped: !1 };
}
function oi(e) {
  return !!e?.steam_fee && !!e?.publisher_fee;
}
function $(e, t, n) {
  if (e == 0)
    return {
      nBasePrice: 0,
      nSteamFee: 0,
      nPublisherFee: 0,
      nTotal: 0,
      bSteamFeeCapped: !1,
      bPublisherFeeCapped: !1,
    };
  let { nFloor: r, nIncrement: i } = ti(n),
    a = ri(e, r, i, !0),
    o = ai(a, t.publisher_fee ?? {}, r, i),
    s = ai(a, t.steam_fee ?? {}, r, i);
  return {
    nBasePrice: a,
    nSteamFee: s.nFee,
    nPublisherFee: o.nFee,
    nTotal: a + s.nFee + o.nFee,
    bSteamFeeCapped: s.bCapped,
    bPublisherFeeCapped: o.bCapped,
  };
}
function si(e, t, n) {
  let { nFloor: r, nIncrement: i } = ti(n),
    a = t.publisher_fee?.fee_rate ?? 0,
    o = t.steam_fee?.fee_rate ?? 0,
    s = e - 2 * r,
    c = (t, n) => Math.min(Math.trunc((e - n) / (1 + t)), s),
    l = $(c(a + o, 0), t, n);
  (l.bSteamFeeCapped != l.bPublisherFeeCapped &&
    (l.bPublisherFeeCapped
      ? (l = $(c(o, l.nPublisherFee), t, n))
      : l.bSteamFeeCapped && (l = $(c(a, l.nSteamFee), t, n))),
    l.bPublisherFeeCapped &&
      l.bSteamFeeCapped &&
      (l = $(e - (l.nSteamFee + l.nPublisherFee), t, n)));
  for (let r = 0; r < 3 && l.nTotal != e; r++)
    if (l.nTotal < e) l = $(l.nBasePrice + i, t, n);
    else {
      l = $(l.nBasePrice - i, t, n);
      break;
    }
  return l.nBasePrice < r ? $(r, t, n) : l;
}
function ci(e, t, n) {
  return $(e, t, n).nTotal;
}
function li(e, t, n) {
  return si(e, t, n).nBasePrice;
}
var ui = `_37rzH4CvbMw-`;
function di(e) {
  let {
      value: t,
      defaultValue: n,
      currency: r,
      editable: i,
      onValueChange: a,
      status: o,
      inputRef: s,
      placeholder: c,
      wide: l,
    } = e,
    u = t ?? 0,
    d = r.bWholeUnitsOnly
      ? Math.round(u / 100).toString()
      : (u / 100).toFixed(2),
    f = Math.max(d.length, l ? 9 : 4) + r.strSymbol.length + 0.5,
    p = i || l,
    m = p ? `calc( ${f}ch + 2 * var(--spacing-2) )` : `${f}ch`;
  return (0, K.jsx)(N, {
    className: st(ui, !p && `YVYRIADuxks-`),
    width: l ? { initial: `100%`, sm: m } : m,
    children: (0, K.jsx)(yt, {
      size: `2`,
      variant: p ? `inset` : `bare`,
      currency: r,
      value: t,
      defaultValue: n,
      onValueChange: a ?? (() => void 0),
      readOnly: !i,
      tabIndex: i ? void 0 : -1,
      gamepadFocusable: i,
      status: o,
      inputRef: s,
      placeholder: c,
    }),
  });
}
function fi(e) {
  let { children: t, type: n } = e;
  return n == `warning`
    ? (0, K.jsx)(N, {
        background: `dull-5`,
        padding: { initial: `3`, sm: `5` },
        width: `100%`,
        children: (0, K.jsx)(V, {
          as: `div`,
          size: `3`,
          align: `center`,
          color: `amber-9`,
          whiteSpace: `pre-wrap`,
          children: t,
        }),
      })
    : n == `error`
      ? (0, K.jsx)(N, {
          radius: `sm`,
          background: `red-3`,
          outline: `red-5`,
          padding: { initial: `3`, sm: `5` },
          width: `100%`,
          children: (0, K.jsx)(V, {
            as: `div`,
            size: `3`,
            align: `center`,
            color: `red-10`,
            whiteSpace: `pre-wrap`,
            children: t,
          }),
        })
      : (0, K.jsx)(V, {
          size: `3`,
          align: `end`,
          color: `green-11`,
          whiteSpace: `pre-wrap`,
          children: t,
        });
}
var pi = `Xice-lU-2-8-`,
  mi = `Pv3PuwbbHSo-`,
  hi = `oZO2DSFoyy4-`;
function gi(e) {
  let {
      onClose: t,
      children: n,
      capHeight: r,
      fitContent: i,
      onSubmit: a,
      ...o
    } = e,
    s = st(
      pi,
      i && `wr8reWdSeMQ-`,
      r && `_5ODqSmieNFc-`,
      `noOpinionatedGlobalStyles`,
    );
  return (0, K.jsxs)(_t, {
    onClose: t,
    className: s,
    children: [
      (0, K.jsx)(`div`, {
        className: hi,
        children: (0, K.jsx)(ut, { size: `5`, onClick: t }),
      }),
      (0, K.jsx)(`form`, {
        onSubmit: (e) => {
          (e.preventDefault(), a && a());
        },
        className: st(mi, r && `ELsvkQVzGqY-`),
        children: (0, K.jsx)(W, {
          direction: `column`,
          gap: `4`,
          padding: { initial: `3`, sm: `5` },
          minHeight: r ? `0` : void 0,
          flexGrow: r ? `1` : void 0,
          ...o,
          children: n,
        }),
      }),
    ],
  });
}
function _i(e) {
  let { lastUpdate: t, agreed: n, onAgreeChange: r, disabled: i } = e,
    a = ft(t),
    o = `${mt.STORE_BASE_URL}subscriber_agreement`;
  return (0, K.jsx)(ht, {
    checked: n,
    onChange: r,
    disabled: i,
    align: `start`,
    children: (0, K.jsx)(V, {
      size: `3`,
      style: { paddingTop: `2px` },
      children: Q.LocalizeReact(
        `#PurchaseDialog_SSA_Link`,
        (0, K.jsx)(c, {
          href: o,
          target: `_blank`,
          children: Q.Localize(`#PurchaseDialog_SSA_Link_Title`),
        }),
        a,
      ),
    }),
  });
}
function vi(e) {
  let { selling: t } = e;
  return (0, K.jsx)(V, {
    size: `3`,
    children: Q.Localize(t ? `#SellDialog_EU_SSA` : `#PurchaseDialog_EU_SSA`),
  });
}
function yi(e, t) {
  if (typeof window > `u`) return;
  let n = Reflect.get(window, `ReactNativeWebView`);
  typeof n?.postMessage == `function` &&
    n.postMessage(
      JSON.stringify({ event_name: `marketconfirm`, type: e, creator_id: t }),
    );
}
var bi = class e extends X.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), X.Message.initialize(this, e, 0, -1, void 0, null));
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new X.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new X.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new X.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMobilePerAccount_GetSettings_Request`;
    }
  },
  xi = class e extends X.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.has_settings || H(e.M()),
        X.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            has_settings: { n: 4, br: I.readBool, bw: F.writeBool },
            allow_sale_push: { n: 2, br: I.readBool, bw: F.writeBool },
            allow_wishlist_push: { n: 3, br: I.readBool, bw: F.writeBool },
            chat_notification_level: {
              n: 5,
              br: I.readUint32,
              bw: F.writeUint32,
            },
            notify_direct_chat: { n: 6, br: I.readBool, bw: F.writeBool },
            notify_group_chat: { n: 7, br: I.readBool, bw: F.writeBool },
            allow_event_push: { n: 8, d: !0, br: I.readBool, bw: F.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= L(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return P(e.M(), t, n);
    }
    static fromObject(t) {
      return B(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new X.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return M(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new X.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      R(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new X.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMobilePerAccount_GetSettings_Response`;
    }
  },
  Si = class e extends X.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.allow_sale_push || H(e.M()),
        X.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            allow_sale_push: { n: 2, br: I.readBool, bw: F.writeBool },
            allow_wishlist_push: { n: 3, br: I.readBool, bw: F.writeBool },
            chat_notification_level: {
              n: 4,
              br: I.readUint32,
              bw: F.writeUint32,
            },
            notify_direct_chat: { n: 5, br: I.readBool, bw: F.writeBool },
            notify_group_chat: { n: 6, br: I.readBool, bw: F.writeBool },
            allow_event_push: { n: 7, d: !0, br: I.readBool, bw: F.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= L(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return P(e.M(), t, n);
    }
    static fromObject(t) {
      return B(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new X.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return M(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new X.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      R(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new X.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMobilePerAccount_SetSettings_Request`;
    }
  },
  Ci = class e extends X.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), X.Message.initialize(this, e, 0, -1, void 0, null));
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new X.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new X.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new X.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMobilePerAccount_SetSettings_Response`;
    }
  },
  wi = class e extends X.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.deviceid || H(e.M()),
        X.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            deviceid: { n: 1, br: I.readString, bw: F.writeString },
            language: { n: 2, br: I.readString, bw: F.writeString },
            push_enabled: { n: 3, br: I.readBool, bw: F.writeBool },
            app_version: { n: 4, br: I.readString, bw: F.writeString },
            os_version: { n: 5, br: I.readString, bw: F.writeString },
            device_model: { n: 6, br: I.readString, bw: F.writeString },
            twofactor_device_identifier: {
              n: 7,
              br: I.readString,
              bw: F.writeString,
            },
            mobile_app: { n: 8, br: I.readEnum, bw: F.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= L(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return P(e.M(), t, n);
    }
    static fromObject(t) {
      return B(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new X.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return M(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new X.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      R(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new X.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMobileDevice_RegisterMobileDevice_Request`;
    }
  },
  Ti = class e extends X.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.unique_deviceid || H(e.M()),
        X.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            unique_deviceid: { n: 2, br: I.readUint32, bw: F.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= L(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return P(e.M(), t, n);
    }
    static fromObject(t) {
      return B(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new X.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return M(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new X.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      R(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new X.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMobileDevice_RegisterMobileDevice_Response`;
    }
  },
  Ei = class e extends X.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.deviceid || H(e.M()),
        X.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { deviceid: { n: 1, br: I.readString, bw: F.writeString } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= L(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return P(e.M(), t, n);
    }
    static fromObject(t) {
      return B(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new X.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return M(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new X.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      R(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new X.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMobileDevice_DeregisterMobileDevice_Notification`;
    }
  },
  Di = class e extends X.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.app_type || H(e.M()),
        X.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            app_type: { n: 1, br: I.readEnum, bw: F.writeEnum },
            push_enabled_only: { n: 2, br: I.readBool, bw: F.writeBool },
            minimum_version: { n: 3, br: I.readString, bw: F.writeString },
            twofactor_device_identifier: {
              n: 4,
              br: I.readString,
              bw: F.writeString,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= L(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return P(e.M(), t, n);
    }
    static fromObject(t) {
      return B(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new X.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return M(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new X.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      R(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new X.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMobileDevice_HasMobileDevice_Request`;
    }
  },
  Oi = class e extends X.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.found_device || H(e.M()),
        X.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            found_device: { n: 1, br: I.readBool, bw: F.writeBool },
            up_to_date: { n: 2, br: I.readBool, bw: F.writeBool },
            max_version: { n: 3, br: I.readString, bw: F.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= L(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return P(e.M(), t, n);
    }
    static fromObject(t) {
      return B(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new X.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return M(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new X.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      R(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new X.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMobileDevice_HasMobileDevice_Response`;
    }
  },
  ki = class e extends X.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.authenticator_gid || H(e.M()),
        X.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            authenticator_gid: {
              n: 1,
              br: I.readFixed64String,
              bw: F.writeFixed64String,
            },
            device_identifier: { n: 2, br: I.readString, bw: F.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= L(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return P(e.M(), t, n);
    }
    static fromObject(t) {
      return B(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new X.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return M(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new X.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      R(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new X.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMobileApp_GetMobileSummary_Request`;
    }
  },
  Ai = class e extends X.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.stale_time_seconds || H(e.M()),
        X.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            stale_time_seconds: { n: 1, br: I.readUint32, bw: F.writeUint32 },
            is_authenticator_valid: { n: 2, br: I.readBool, bw: F.writeBool },
            owned_games: { n: 3, br: I.readUint32, bw: F.writeUint32 },
            friend_count: { n: 4, br: I.readUint32, bw: F.writeUint32 },
            wallet_balance: { n: 5, br: I.readString, bw: F.writeString },
            language: { n: 6, br: I.readString, bw: F.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= L(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return P(e.M(), t, n);
    }
    static fromObject(t) {
      return B(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new X.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return M(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new X.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      R(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new X.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMobileApp_GetMobileSummary_Response`;
    }
  },
  ji;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`MobilePerAccount.GetSettings#1`, U(bi, t, n), xi, {
      ePrivilege: 1,
    });
  }
  e.GetSettings = t;
  function n(e, t, n) {
    return e.SendMsg(`MobilePerAccount.SetSettings#1`, U(Si, t, n), Ci, {
      ePrivilege: 1,
    });
  }
  e.SetSettings = n;
})((ji ||= {}));
var Mi;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`MobileDevice.RegisterMobileDevice#1`, U(wi, t, n), Ti, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.RegisterMobileDevice = t;
  function n(e, t) {
    return e.SendNotification(
      `MobileDevice.DeregisterMobileDevice#1`,
      U(Ei, t),
      { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
    );
  }
  e.DeregisterMobileDevice = n;
  function r(e, t, n) {
    return e.SendMsg(`MobileDevice.HasMobileDevice#1`, U(Di, t, n), Oi, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.HasMobileDevice = r;
})((Mi ||= {}));
var Ni;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`MobileApp.GetMobileSummary#1`, U(ki, t, n), Ai, {
      ePrivilege: 1,
    });
  }
  e.GetMobileSummary = t;
})((Ni ||= {}));
function Pi(e) {
  let [t, n] = (0, G.useState)(null);
  (0, G.useEffect)(() => {
    let e = window;
    return (
      (e.ShowReactSellItemDialog = (e, t, r) =>
        n({ item: e, appContext: t, onSold: r })),
      e.g_PendingReactSellItemDialog &&
        (n(e.g_PendingReactSellItemDialog),
        delete e.g_PendingReactSellItemDialog),
      () => {
        delete e.ShowReactSellItemDialog;
      }
    );
  }, []);
  let [r, i] = (0, G.useState)({});
  return t
    ? (0, K.jsx)(p, {
        steamidOwner: dt.steamid,
        children: (0, K.jsx)(Dr, {
          prefs: r,
          onChange: i,
          children: (0, K.jsx)(rt, {
            children: (0, K.jsx)(
              Fi,
              {
                ...e,
                item: t.item,
                appContext: t.appContext,
                onSold: t.onSold,
                onClose: () => n(null),
              },
              `${t.item.appid}_${t.item.contextid}_${t.item.assetid}`,
            ),
          }),
        }),
      })
    : null;
}
function Fi(e) {
  let {
      item: t,
      appContext: n,
      walletInfo: r,
      newFeeRates: a,
      inPlaceListing: s,
      holdDays: c,
      holdReason: l,
      ssaUpdateTime: u,
      showEUSSA: d,
      onSold: f,
      onClose: p,
    } = e,
    { description: m } = t,
    h = r.wallet_currency,
    g = t.appid,
    _ = Ii(m),
    v = parseInt(String(t.amount)) || 1,
    y = (0, G.useMemo)(
      () => ({
        wallet_market_minimum: String(r.wallet_market_minimum ?? 1),
        wallet_currency_increment: String(r.wallet_currency_increment ?? 1),
      }),
      [r],
    ),
    b = Ri(g, a, r, n),
    x = Hi(h, g, _),
    S = oi(b.data) ? b.data : void 0,
    [C, w] = (0, G.useState)(`edit`),
    [T, E] = (0, G.useState)(void 0),
    [D, ee] = (0, G.useState)(1),
    [te, ne] = (0, G.useState)(!1),
    [re, ie] = (0, G.useState)(null),
    ae = S && T ? ci(T, S, y) : void 0,
    oe = parseInt(y.wallet_market_minimum) || 1,
    se = (0, G.useRef)(!1);
  (0, G.useEffect)(() => {
    if (se.current || !S || !x) return;
    se.current = !0;
    let e = mr(x, h);
    T === void 0 && e > 0 && E(li(e, S, y));
  }, [S, x, h, y, T]);
  let O = i({
      mutationFn: qi,
      onSuccess: (e, t) => {
        if (!e.success) return;
        let n = !!e.requires_confirmation;
        (f({ quantity: t.amount, requires_confirmation: n }),
          n
            ? (e.needs_mobile_confirmation && e.listingid && yi(3, e.listingid),
              w(`confirm`))
            : p());
      },
    }),
    ce = () => {
      let e = Li({
        bAgreedSSA: te,
        nQuantity: D,
        nAvailable: v,
        nSellerPrice: T ?? 0,
        nBuyerPrice: ae ?? 0,
        nFloor: oe,
        nMaxBalance: parseInt(String(r.wallet_trade_max_balance ?? 0)) || 0,
        eCurrency: h,
      });
      (ie(e), e || w(`review`));
    },
    le = () => {
      !O.isPending &&
        T &&
        O.mutate({
          appid: g,
          contextid: t.contextid,
          assetid: t.assetid,
          amount: D,
          price: ii(T, y),
        });
    },
    ue = () => {
      (O.reset(), w(`edit`));
    },
    de = C === `edit` && !!S,
    fe = (0, G.useRef)(null),
    pe = (0, G.useRef)(!1);
  (0, G.useEffect)(() => {
    de &&
      !pe.current &&
      ((pe.current = !0),
      window.UseTouchFriendlyMode?.() || fe.current?.focus());
  }, [de]);
  let me = Q.Localize(
      C === `edit` ? `#SellDialog_Title` : `#SellDialog_Confirm_Title`,
    ),
    k = null;
  return (
    C === `confirm` && O.data
      ? (k = (0, K.jsx)(Wi, { result: O.data }))
      : O.isError || (O.isSuccess && !O.data.success)
        ? (k = (0, K.jsx)(fi, {
            type: `error`,
            children:
              O.data?.message || Q.Localize(`#SellDialog_Error_Generic`),
          }))
        : re
          ? (k = (0, K.jsx)(fi, { type: `error`, children: re }))
          : (b.isError || (b.isSuccess && !S)) &&
            (k = (0, K.jsx)(fi, {
              type: `error`,
              children: Q.Localize(`#SellDialog_PriceEntryUnavailable`),
            })),
    (0, K.jsxs)(gi, {
      onClose: p,
      fitContent: !0,
      onSubmit: () => {
        C === `edit` ? ce() : C === `review` && le();
      },
      children: [
        (0, K.jsx)(o, { size: `6`, weight: `heavy`, children: me }),
        (0, K.jsx)(zi, { item: t }),
        (0, K.jsxs)(N, {
          children: [
            (0, K.jsx)(Bi, {
              inPlace: s && !!n?.inplace_listing,
              holdDays: c,
              holdReason: l,
            }),
            (0, K.jsx)(tt, {
              visible: C === `edit`,
              keepMounted: !0,
              children: (0, K.jsx)(N, {
                paddingTop: `4`,
                children: (0, K.jsx)(Vi, {
                  appid: g,
                  hashName: _,
                  currency: h,
                }),
              }),
            }),
          ],
        }),
        (0, K.jsx)(Gi, {
          message: k,
          prices: (0, K.jsx)(Ki, {
            currency: h,
            marketLow: C === `confirm` ? void 0 : x,
            buyerPrice: ae,
            sellerPrice: T,
            onBuyerPriceChange:
              de && S ? (e) => E(e ? li(e, S, y) : void 0) : void 0,
            onSellerPriceChange: de ? (e) => E(e || void 0) : void 0,
            sellerPriceStatus: T !== void 0 && T < oe ? `error` : void 0,
            sellerInputRef: fe,
            summary:
              v > 1 &&
              (0, K.jsx)(V, {
                size: `3`,
                align: `center`,
                children: Q.Localize(
                  `#SellDialog_TotalYouReceive`,
                  We((T ?? 0) * D, h),
                ),
              }),
            children:
              v > 1 &&
              (0, K.jsx)(Ui, {
                value: D,
                available: v,
                editable: C === `edit`,
                onChange: ee,
              }),
          }),
          children: (0, K.jsxs)(W, {
            justify: `between`,
            wrap: `wrap`,
            gap: `2`,
            align: `center`,
            children: [
              (0, K.jsx)(tt, {
                visible: C !== `confirm`,
                children: (0, K.jsxs)(W, {
                  direction: `column`,
                  gap: `2`,
                  children: [
                    (0, K.jsx)(_i, {
                      lastUpdate: u,
                      agreed: te,
                      onAgreeChange: ne,
                      disabled: C !== `edit`,
                    }),
                    d && (0, K.jsx)(vi, { selling: !0 }),
                  ],
                }),
              }),
              (0, K.jsxs)(W, {
                flexGrow: `1`,
                justify: `end`,
                align: `center`,
                gap: `2`,
                children: [
                  C === `edit` &&
                    (0, K.jsx)(at, {
                      type: `submit`,
                      minWidth: `120px`,
                      disabled: !S,
                      children: Q.Localize(`#SellDialog_Button_Continue`),
                    }),
                  C === `review` &&
                    (0, K.jsxs)(K.Fragment, {
                      children: [
                        (0, K.jsx)(at, {
                          color: `dull`,
                          onClick: ue,
                          disabled: O.isPending,
                          children: Q.Localize(`#ManageListing_Dialog_Back`),
                        }),
                        (0, K.jsx)(at, {
                          type: `submit`,
                          minWidth: `120px`,
                          loading: O.isPending,
                          children: Q.Localize(`#SellDialog_Button_Confirm`),
                        }),
                      ],
                    }),
                  C === `confirm` &&
                    (0, K.jsx)(at, {
                      color: `dull`,
                      onClick: p,
                      children: Q.Localize(`#Button_Close`),
                    }),
                ],
              }),
            ],
          }),
        }),
      ],
    })
  );
}
function Ii(e) {
  return e.market_hash_name || e.market_name || e.name || ``;
}
function Li(e) {
  let {
    bAgreedSSA: t,
    nQuantity: n,
    nAvailable: r,
    nSellerPrice: i,
    nBuyerPrice: a,
    nFloor: o,
    nMaxBalance: s,
    eCurrency: c,
  } = e;
  return t
    ? n < 1 || n > r
      ? Q.Localize(`#SellDialog_Error_InvalidQuantity`)
      : a > s || i > s
        ? Q.Localize(`#SellDialog_Error_PriceExceedsMaximum`, We(s, c))
        : i < o || a < 3 * o
          ? Q.Localize(`#SellDialog_Error_MinPrice`, We(o, c))
          : null
    : Q.Localize(`#SellDialog_Error_SSA`);
}
function Ri(e, t, r, i) {
  return n({
    queryKey: [`inventory`, `sellfees`, e, t],
    queryFn: async () => {
      if (!t)
        return {
          steam_fee: {
            fee_rate: parseFloat(String(r.wallet_fee_percent ?? 0.05)),
          },
          publisher_fee: {
            fee_rate: parseFloat(
              String(
                i?.market_pubfee_rate ??
                  r.wallet_publisher_fee_percent_default ??
                  0.1,
              ),
            ),
          },
        };
      let n = new URLSearchParams({ appid: e.toString() }),
        a = await fetch(
          `${mt.COMMUNITY_BASE_URL}market/ajaxfeestructure/?${n.toString()}`,
          { credentials: `include` },
        );
      if (!a.ok) throw Error(`Fee structure request failed: ${a.status}`);
      let o = await a.json();
      return {
        ...o,
        steam_fee: o.steam_fee && {
          ...o.steam_fee,
          fee_rate: parseFloat(String(o.steam_fee.fee_rate ?? 0)),
        },
        publisher_fee: o.publisher_fee && {
          ...o.publisher_fee,
          fee_rate: parseFloat(String(o.publisher_fee.fee_rate ?? 0)),
        },
      };
    },
    staleTime: 1 / 0,
  });
}
function zi(e) {
  let { item: t } = e,
    { description: n } = t,
    r = (0, G.useMemo)(
      () => ({
        appid: t.appid,
        contextid: t.contextid,
        assetid: t.assetid,
        amount: t.amount,
        asset_properties: t.asset_properties,
      }),
      [t],
    ),
    i = d(n),
    a = { initial: `64px`, sm: `96px` };
  return (0, K.jsx)(m.Root, {
    description: n,
    asset: r,
    bInteractable: !1,
    children: (0, K.jsxs)(W, {
      align: `center`,
      gap: `3`,
      children: [
        (0, K.jsx)(W, {
          flexShrink: `0`,
          width: a,
          height: a,
          align: `center`,
          justify: `center`,
          style: {
            border: `1px solid ${n.name_color ? `#${n.name_color}` : `var(--color-dull-8)`}`,
            background: n.background_color ? `#${n.background_color}` : void 0,
          },
          children: (0, K.jsx)(`img`, {
            src: i,
            alt: n.name,
            style: { maxWidth: `100%`, maxHeight: `100%` },
          }),
        }),
        (0, K.jsxs)(W, {
          direction: `column`,
          gap: `2`,
          minWidth: `0`,
          children: [
            (0, K.jsx)(m.Name, { size: `5` }),
            (0, K.jsx)(m.GameInfo, {}),
          ],
        }),
      ],
    }),
  });
}
function Bi(e) {
  let { inPlace: t, holdDays: n, holdReason: r } = e,
    i = () => window.ShowEscrowExplanationDialog?.(!0),
    a = null;
  return (
    r === `no2fa` || r === `recently_activated`
      ? (a = Q.Localize(`#SellDialog_WarningOnHoldUser`, 7))
      : r === `recently_transferred` &&
        (a = Q.Localize(`#SellDialog_WarningOnHoldForTransfer`)),
    (0, K.jsxs)(W, {
      direction: `column`,
      gap: `2`,
      background: `dull-5`,
      padding: `3`,
      children: [
        (0, K.jsx)(V, {
          size: `3`,
          color: `text-warning`,
          children: Q.Localize(
            t ? `#SellDialog_Warning_InPlace` : `#SellDialog_Warning`,
          ),
        }),
        n > 0 &&
          (0, K.jsxs)(W, {
            direction: `column`,
            gap: `1`,
            children: [
              (0, K.jsx)(V, {
                size: `3`,
                color: `text-warning`,
                children: Q.Localize(`#SellDialog_WarningOnHoldForDays`, n),
              }),
              a &&
                (0, K.jsx)(V, {
                  size: `3`,
                  color: `text-warning`,
                  children: a,
                }),
              (0, K.jsx)(N, {
                children: (0, K.jsx)(s, {
                  size: `3`,
                  onClick: i,
                  children: Q.Localize(`#SellDialog_WarningOnHoldRemove`),
                }),
              }),
            ],
          }),
      ],
    })
  );
}
function Vi(e) {
  let { appid: t, hashName: r, currency: i } = e,
    a = pt({ initial: `200px`, sm: `240px` }),
    o = n({
      queryKey: [`inventory`, `sellpricehistory`, t, r],
      queryFn: async () => {
        let e = new URLSearchParams({
            raw: `1`,
            appid: t.toString(),
            market_hash_name: r,
          }),
          n = await (
            await fetch(
              `${mt.COMMUNITY_BASE_URL}market/pricehistory/?${e.toString()}`,
              { credentials: `include` },
            )
          ).json();
        if (!n?.success) throw Error(`Price history unavailable`);
        return { ecurrency: n.ecurrency, prices: n.prices ?? [] };
      },
      staleTime: 1 / 0,
      retry: !1,
    });
  if (o.isPending)
    return (0, K.jsx)(W, {
      align: `center`,
      justify: `center`,
      minHeight: `calc( ${a} + 60px )`,
      children: (0, K.jsx)(it, { size: `5` }),
    });
  let s = o.data ?? { ecurrency: i, prices: [] };
  return (0, K.jsx)(Lr, { priceHistory: s, height: a });
}
function Hi(e, t, r) {
  let { data: i } = n(f(e, t, r));
  return i?.lowest_price || void 0;
}
function Ui(e) {
  let { value: t, available: n, editable: r, onChange: i } = e;
  return (0, K.jsxs)(W, {
    align: `center`,
    gap: `2`,
    children: [
      (0, K.jsx)(V, {
        size: `3`,
        weight: `heavy`,
        whiteSpace: `nowrap`,
        children: Q.Localize(`#SellDialog_Quantity`),
      }),
      (0, K.jsx)(N, {
        width: `8ch`,
        children: (0, K.jsx)(u, {
          size: `2`,
          variant: r ? `inset` : `bare`,
          value: t,
          onValueChange: i,
          valueToString: (e) => e.toString(),
          valueFromString: (e) => (isNaN(parseInt(e)) ? l : parseInt(e)),
          readOnly: !r,
          tabIndex: r ? void 0 : -1,
        }),
      }),
      (0, K.jsx)(V, {
        size: `3`,
        contrast: `description`,
        whiteSpace: `nowrap`,
        children: Q.Localize(`#SellDialog_QuantityAvailable`, n),
      }),
    ],
  });
}
function Wi(e) {
  let { result: t } = e,
    n = t.needs_mobile_confirmation
      ? `${Q.Localize(`#SellDialog_MobileConfirmation`)}\n\n${Q.Localize(`#SellDialog_MobileConfirmation_CheckVersion`)}`
      : Q.Localize(`#SellDialog_EmailConfirmation`, t.email_domain ?? ``);
  return (0, K.jsx)(fi, { type: `warning`, children: n });
}
function Gi(e) {
  let { message: t, prices: n, children: r } = e,
    i = (0, G.useRef)(t);
  return (
    t && (i.current = t),
    (0, K.jsxs)(W, {
      direction: `column`,
      paddingTop: `3`,
      children: [
        n,
        (0, K.jsx)(tt, {
          visible: !!t,
          children: (0, K.jsx)(W, {
            justify: `center`,
            paddingTop: `4`,
            children: i.current,
          }),
        }),
        (0, K.jsx)(N, { paddingTop: `4`, children: r }),
      ],
    })
  );
}
function Ki(e) {
  let {
      currency: t,
      marketLow: n,
      buyerPrice: r,
      sellerPrice: i,
      onBuyerPriceChange: a,
      onSellerPriceChange: o,
      sellerPriceStatus: s,
      sellerInputRef: c,
      children: l,
      summary: u,
    } = e,
    d = Be(t),
    f = !ot(`sm`),
    p = (0, G.useRef)(n);
  n != null && (p.current = n);
  let m = (0, K.jsx)(V, {
      size: `3`,
      weight: `heavy`,
      whiteSpace: `nowrap`,
      children: Q.Localize(`#RepriceListing_Dialog_BuyerPays`),
    }),
    h = (0, K.jsx)(di, {
      currency: d,
      value: r,
      defaultValue: 0,
      editable: !!a,
      onValueChange: a,
      wide: !0,
      placeholder: 0,
    }),
    _ = (0, K.jsx)(V, {
      size: `3`,
      weight: `heavy`,
      whiteSpace: `nowrap`,
      children: Q.Localize(`#RepriceListing_Dialog_YouReceive`),
    }),
    v = (0, K.jsx)(di, {
      currency: d,
      value: i,
      defaultValue: 0,
      editable: !!o,
      onValueChange: o,
      status: s,
      inputRef: c,
      wide: !0,
      placeholder: 0,
    });
  return (0, K.jsxs)(W, {
    direction: `column`,
    gap: `2`,
    align: f ? `stretch` : `center`,
    children: [
      (0, K.jsxs)(W, {
        align: `center`,
        justify: `center`,
        gap: f ? `3` : `5`,
        wrap: `wrap`,
        children: [
          l,
          f
            ? (0, K.jsxs)(g, {
                columns: `max-content minmax( 0, 1fr )`,
                gap: `2`,
                alignItems: `center`,
                width: `100%`,
                children: [m, h, _, v],
              })
            : (0, K.jsxs)(W, {
                align: `center`,
                gap: `5`,
                children: [
                  (0, K.jsxs)(W, {
                    align: `center`,
                    gap: `2`,
                    children: [m, h],
                  }),
                  (0, K.jsxs)(W, {
                    align: `center`,
                    gap: `2`,
                    children: [_, v],
                  }),
                ],
              }),
        ],
      }),
      (0, K.jsx)(tt, {
        visible: n != null,
        children: (0, K.jsxs)(W, {
          align: `center`,
          justify: `center`,
          gap: `2`,
          children: [
            (0, K.jsx)(V, {
              size: `3`,
              contrast: `description`,
              whiteSpace: `nowrap`,
              children: Q.Localize(`#ManageListing_Dialog_MarketLow`),
            }),
            (0, K.jsx)(V, {
              size: `3`,
              contrast: `description`,
              whiteSpace: `nowrap`,
              children: p.current,
            }),
          ],
        }),
      }),
      u,
    ],
  });
}
async function qi(e) {
  let t = new URLSearchParams({
      sessionid: ct(),
      appid: e.appid.toString(),
      contextid: e.contextid,
      assetid: e.assetid,
      amount: e.amount.toString(),
      price: e.price.toString(),
    }),
    n = await fetch(`${mt.COMMUNITY_BASE_URL}market/sellitem/`, {
      method: `POST`,
      body: t,
      credentials: `include`,
    });
  try {
    return await n.json();
  } catch {
    return { success: !1 };
  }
}
export { Pi as default };
