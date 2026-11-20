/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
/* Third-party software licenses can be found at licenses.txt */
import { o as e } from "./chunk~f025431ab0.js";
import {
  Ft as t,
  G as n,
  It as r,
  K as i,
  ot as a,
} from "./chunk~01cfc309bf.js";
import { t as o } from "./chunk~e53a8c8667.js";
import { n as s, t as c } from "./chunk~cfd048ddd7.js";
import { n as l, t as u } from "./chunk~6e8a72cfb5.js";
import { v as d, y as f } from "./chunk~e8ef2e6942.js";
import { t as p } from "./chunk~5412a9f1de.js";
import { t as m } from "./chunk~93195fc4a9.js";
import {
  $ as h,
  A as g,
  B as _,
  C as v,
  D as y,
  E as b,
  F as x,
  G as S,
  H as C,
  I as w,
  J as T,
  K as E,
  L as ee,
  M as te,
  N as ne,
  O as re,
  P as ie,
  Q as D,
  R as ae,
  S as oe,
  T as se,
  U as ce,
  V as O,
  W as le,
  Y as ue,
  Z as de,
  _ as fe,
  _t as k,
  at as A,
  b as pe,
  c as j,
  ct as me,
  d as he,
  dt as ge,
  et as _e,
  f as ve,
  ft as ye,
  g as be,
  gt as xe,
  h as Se,
  ht as Ce,
  i as we,
  it as Te,
  j as Ee,
  k as De,
  l as Oe,
  lt as M,
  m as ke,
  mt as N,
  nt as Ae,
  o as je,
  ot as Me,
  p as Ne,
  pt as Pe,
  q as Fe,
  r as Ie,
  rt as Le,
  s as Re,
  st as ze,
  t as Be,
  tt as Ve,
  u as He,
  ut as Ue,
  v as We,
  vt as Ge,
  w as Ke,
  x as qe,
  y as Je,
  yt as Ye,
  z as Xe,
} from "./chunk~cfb555d6e5.js";
import { t as Ze } from "./chunk~008c00a198.js";
import {
  $t as Qe,
  Bh as P,
  Ct as $e,
  Fh as F,
  Gt as I,
  Ih as L,
  It as R,
  Kt as z,
  Lh as B,
  Nh as V,
  Ou as et,
  Ph as H,
  Pt as tt,
  Rh as U,
  Rt as nt,
  Tu as rt,
  Vt as it,
  cm as at,
  dm as ot,
  ig as st,
  nn as ct,
  pm as lt,
  rg as ut,
  sh as W,
  st as dt,
  vt as ft,
  x as pt,
  zh as G,
} from "./main.js";
import { i as mt, n as ht, r as gt, t as _t } from "./chunk~bb87983663.js";
var K = e(t());
function vt() {
  return (
    (vt = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    vt.apply(null, arguments)
  );
}
var yt = (e) => {
  var { cx: t, cy: n, r, className: i } = e,
    a = Ye(`recharts-dot`, i);
  return t === +t && n === +n && r === +r
    ? K.createElement(
        `circle`,
        vt({}, k(e), me(e), { className: a, cx: t, cy: n, r }),
      )
    : null;
};
function bt(e, t) {
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
function xt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? bt(Object(n), !0).forEach(function (t) {
          St(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : bt(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function St(e, t, n) {
  return (
    (t = Ct(t)) in e
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
function Ct(e) {
  var t = wt(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function wt(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var Tt = (e) => {
  var { point: t, childIndex: n, mainColor: r, activeDot: i, dataKey: a } = e;
  if (i === !1 || t.x == null || t.y == null) return null;
  var o = xt(
      xt(
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
        Ge(i),
      ),
      me(i),
    ),
    s = (0, K.isValidElement)(i)
      ? (0, K.cloneElement)(i, o)
      : typeof i == `function`
        ? i(o)
        : K.createElement(yt, o);
  return K.createElement(N, { className: `recharts-active-dot` }, s);
};
function Et(e) {
  var { points: t, mainColor: n, activeDot: r, itemDataKey: i } = e,
    a = ze(ie),
    o = We();
  if (t == null || o == null) return null;
  var s = t.find((e) => o.includes(e.payload));
  return ge(s)
    ? null
    : Tt({
        point: s,
        childIndex: Number(a),
        mainColor: n,
        dataKey: i,
        activeDot: r,
      });
}
function Dt(e, t) {
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
function Ot(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Dt(Object(n), !0).forEach(function (t) {
          kt(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Dt(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function kt(e, t, n) {
  return (
    (t = At(t)) in e
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
function At(e) {
  var t = jt(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function jt(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function Mt() {
  return (
    (Mt = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Mt.apply(null, arguments)
  );
}
var Nt = (e, t, n, r, i, a, o) => {
    var { x1: s, x2: c, y1: l, y2: u } = o;
    if (i == null || a == null) return null;
    var d = ve({ x: i, y: a }),
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
      : Ne(f, p);
  },
  Pt = (e, t) =>
    K.isValidElement(e)
      ? K.cloneElement(e, t)
      : typeof e == `function`
        ? e(t)
        : K.createElement(
            C,
            Mt({}, t, { className: `recharts-reference-area-rect` }),
          );
function Ft(e) {
  var t = Me();
  return (
    (0, K.useEffect)(
      () => (
        t(He(e)),
        () => {
          t(he(e));
        }
      ),
    ),
    null
  );
}
function It(e) {
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
    l = Oe(),
    u = D(),
    d = ze((e) => x(e, `xAxis`, s, u)),
    f = ze((e) => x(e, `yAxis`, c, u));
  if (d == null || !f == null) return null;
  var p = ye(t),
    m = ye(n),
    h = ye(r),
    g = ye(i);
  if (!p && !m && !h && !g && !o) return null;
  var _ = Nt(p, m, h, g, d, f, e);
  if (!_ && !o) return null;
  var v = e.ifOverflow === `hidden` ? `url(#${l})` : void 0;
  return K.createElement(
    N,
    { className: Ye(`recharts-reference-area`, a) },
    Pt(o, Ot(Ot({ clipPath: v }, Ce(e)), _)),
    K.createElement(y, _, K.createElement(re, { label: e.label }), e.children),
  );
}
function Lt(e) {
  return K.createElement(
    K.Fragment,
    null,
    K.createElement(Ft, {
      yAxisId: e.yAxisId,
      xAxisId: e.xAxisId,
      ifOverflow: e.ifOverflow,
      x1: e.x1,
      x2: e.x2,
      y1: e.y1,
      y2: e.y2,
    }),
    K.createElement(It, e),
  );
}
var Rt = class extends K.Component {
  render() {
    return K.createElement(Lt, this.props);
  }
};
(kt(Rt, `displayName`, `ReferenceArea`),
  kt(Rt, `defaultProps`, {
    ifOverflow: `discard`,
    xAxisId: 0,
    yAxisId: 0,
    r: 10,
    fill: `#ccc`,
    fillOpacity: 0.5,
    stroke: `none`,
    strokeWidth: 1,
  }));
var zt = (e, t, n, r) => w(e, `xAxis`, t, r),
  Bt = (e, t, n, r) => ae(e, `xAxis`, t, r),
  Vt = (e, t, n, r) => w(e, `yAxis`, n, r),
  Ht = (e, t, n, r) => ae(e, `yAxis`, n, r),
  Ut = A([T, zt, Vt, Bt, Ht], (e, t, n, r, i) =>
    Te(e, `xAxis`) ? h(t, r, !1) : h(n, i, !1),
  ),
  Wt = (e, t, n, r, i) => i;
function Gt(e) {
  return e.type === `line`;
}
var Kt = A([Xe, Wt], (e, t) => e.filter(Gt).find((e) => e.id === t)),
  qt = A([T, zt, Vt, Bt, Ht, Kt, Ut, O], (e, t, n, r, i, a, o, s) => {
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
        return Sn({
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
function Jt(e) {
  var t = Ge(e),
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
var Yt = [`id`],
  Xt = [`type`, `layout`, `connectNulls`, `needClip`],
  Zt = [
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
function Qt(e, t) {
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
      ? Qt(Object(n), !0).forEach(function (t) {
          $t(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Qt(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function $t(e, t, n) {
  return (
    (t = en(t)) in e
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
function en(e) {
  var t = tn(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function tn(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function nn(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = rn(e, t);
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
function rn(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function J() {
  return (
    (J = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    J.apply(null, arguments)
  );
}
var an = (e) => {
  var { dataKey: t, name: n, stroke: r, legendType: i, hide: a } = e;
  return [
    { inactive: a, dataKey: t, type: i, color: r, value: Ae(n, t), payload: e },
  ];
};
function on(e) {
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
      name: Ae(o, t),
      hide: s,
      type: e.tooltipType,
      color: e.stroke,
      unit: c,
    },
  };
}
var sn = (e, t) => `${t}px ${e - t}px`;
function cn(e, t) {
  for (var n = e.length % 2 == 0 ? e : [...e, 0], r = [], i = 0; i < t; ++i)
    r = [...r, ...n];
  return r;
}
var ln = (e, t, n) => {
  var r = n.reduce((e, t) => e + t);
  if (!r) return sn(t, e);
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
  return [...cn(n, i), ...s, ...u].map((e) => `${e}px`).join(`, `);
};
function un(e, t) {
  var n;
  if (K.isValidElement(e)) n = K.cloneElement(e, t);
  else if (typeof e == `function`) n = e(t);
  else {
    var r = Ye(`recharts-line-dot`, typeof e == `boolean` ? `` : e.className);
    n = K.createElement(yt, J({}, t, { className: r }));
  }
  return n;
}
function dn(e, t) {
  return e == null ? !1 : t ? !0 : e.length === 1;
}
function fn(e) {
  var { clipPathId: t, points: n, props: r } = e,
    { dot: i, dataKey: a, needClip: o } = r;
  if (!dn(n, i)) return null;
  var { id: s } = r,
    c = nn(r, Yt),
    l = Ke(i),
    u = k(c),
    d = xe(i),
    f = n.map((e, t) =>
      un(
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
  return K.createElement(
    N,
    J({ className: `recharts-line-dots`, key: `dots` }, p),
    f,
  );
}
function pn(e) {
  var { showLabels: t, children: n, points: r } = e,
    i = (0, K.useMemo)(
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
  return K.createElement(se, { value: t ? i : null }, n);
}
function mn(e) {
  var {
      clipPathId: t,
      pathRef: n,
      points: r,
      strokeDasharray: i,
      props: a,
    } = e,
    { type: o, layout: s, connectNulls: c, needClip: l } = a,
    u = nn(a, Xt),
    d = q(
      q({}, Ce(u)),
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
  return K.createElement(
    K.Fragment,
    null,
    r?.length > 1 && K.createElement(E, J({}, d, { pathRef: n })),
    K.createElement(fn, { points: r, clipPathId: t, props: a }),
  );
}
function hn(e) {
  try {
    return (e && e.getTotalLength && e.getTotalLength()) || 0;
  } catch {
    return 0;
  }
}
function gn(e) {
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
    v = ce(n, `recharts-line-`),
    [y, x] = (0, K.useState)(!1),
    S = !y,
    C = (0, K.useCallback)(() => {
      (typeof h == `function` && h(), x(!1));
    }, [h]),
    w = (0, K.useCallback)(() => {
      (typeof g == `function` && g(), x(!0));
    }, [g]),
    T = hn(r.current),
    E = a.current;
  return K.createElement(
    pn,
    { points: o, showLabels: S },
    n.children,
    K.createElement(
      le,
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
        var l = M(E, T + E, e),
          u = Math.min(l, T),
          d = c
            ? s
              ? ln(
                  u,
                  T,
                  `${s}`.split(/[,\s]+/gim).map((e) => parseFloat(e)),
                )
              : sn(T, u)
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
                        { x: M(i.x, t.x, e), y: M(i.y, t.y, e) },
                      );
                    }
                    return f
                      ? q(
                          q({}, t),
                          {},
                          { x: M(p * 2, t.x, e), y: M(m / 2, t.y, e) },
                        )
                      : q(q({}, t), {}, { x: t.x, y: t.y });
                  });
          return (
            (i.current = g),
            K.createElement(mn, {
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
          K.createElement(mn, {
            props: n,
            points: o,
            clipPathId: t,
            pathRef: r,
            strokeDasharray: d,
          })
        );
      },
    ),
    K.createElement(b, { label: n.label }),
  );
}
function _n(e) {
  var { clipPathId: t, props: n } = e,
    r = (0, K.useRef)(null),
    i = (0, K.useRef)(0),
    a = (0, K.useRef)(null);
  return K.createElement(gn, {
    props: n,
    clipPathId: t,
    previousPointsRef: r,
    longestAnimatedLengthRef: i,
    pathRef: a,
  });
}
var vn = (e, t) => ({
    x: e.x,
    y: e.y,
    value: e.value,
    errorVal: Le(e.payload, t),
  }),
  yn = class extends K.Component {
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
      var f = Ye(`recharts-line`, r),
        p = u,
        { r: m, strokeWidth: h } = Jt(t),
        g = Ke(t),
        _ = m * 2 + h;
      return K.createElement(
        K.Fragment,
        null,
        K.createElement(
          N,
          { className: f },
          d &&
            K.createElement(
              `defs`,
              null,
              K.createElement(Se, { clipPathId: p, xAxisId: i, yAxisId: a }),
              !g &&
                K.createElement(
                  `clipPath`,
                  { id: `clipPath-dots-${p}` },
                  K.createElement(`rect`, {
                    x: s - _ / 2,
                    y: o - _ / 2,
                    width: c + _,
                    height: l + _,
                  }),
                ),
            ),
          K.createElement(
            fe,
            {
              xAxisId: i,
              yAxisId: a,
              data: n,
              dataPointFormatter: vn,
              errorBarOffset: 0,
            },
            K.createElement(_n, { props: this.props, clipPathId: p }),
          ),
        ),
        K.createElement(Et, {
          activeDot: this.props.activeDot,
          points: n,
          mainColor: this.props.stroke,
          itemDataKey: this.props.dataKey,
        }),
      );
    }
  },
  bn = {
    activeDot: !0,
    animateNewValues: !0,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: `ease`,
    connectNulls: !1,
    dot: !0,
    fill: `#fff`,
    hide: !1,
    isAnimationActive: !Fe.isSsr,
    label: !1,
    legendType: `line`,
    stroke: `#3182bd`,
    strokeWidth: 1,
    xAxisId: 0,
    yAxisId: 0,
  };
function xn(e) {
  var t = S(e, bn),
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
    g = nn(t, Zt),
    { needClip: _ } = be(p, m),
    v = Je(),
    y = ue(),
    b = D(),
    x = ze((e) => qt(e, p, m, b, h));
  if ((y !== `horizontal` && y !== `vertical`) || x == null || v == null)
    return null;
  var { height: C, width: w, x: T, y: E } = v;
  return K.createElement(
    yn,
    J({}, g, {
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
      height: C,
      width: w,
      left: T,
      top: E,
      needClip: _,
    }),
  );
}
function Sn(e) {
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
      var l = Le(e, o);
      if (t === `horizontal`)
        return {
          x: _e({ axis: n, ticks: i, bandSize: s, entry: e, index: c }),
          y: ge(l) ? null : r.scale(l),
          value: l,
          payload: e,
        };
      var u = ge(l) ? null : n.scale(l),
        d = _e({ axis: r, ticks: a, bandSize: s, entry: e, index: c });
      return u == null || d == null
        ? null
        : { x: u, y: d, value: l, payload: e };
    })
    .filter(Boolean);
}
function Cn(e) {
  var t = S(e, bn),
    n = D();
  return K.createElement(qe, { id: t.id, type: `line` }, (e) =>
    K.createElement(
      K.Fragment,
      null,
      K.createElement(oe, { legendPayload: an(t) }),
      K.createElement(v, { fn: on, args: t }),
      K.createElement(pe, {
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
      K.createElement(xn, J({}, t, { id: e })),
    ),
  );
}
var wn = K.memo(Cn);
wn.displayName = `Line`;
var Tn = (e, t, n, r) => w(e, `xAxis`, t, r),
  En = (e, t, n, r) => ae(e, `xAxis`, t, r),
  Dn = (e, t, n, r) => w(e, `yAxis`, n, r),
  On = (e, t, n, r) => ae(e, `yAxis`, n, r),
  kn = A([T, Tn, Dn, En, On], (e, t, n, r, i) =>
    Te(e, `xAxis`) ? h(t, r, !1) : h(n, i, !1),
  ),
  An = A([Xe, (e, t, n, r, i) => i], (e, t) =>
    e.filter((e) => e.type === `area`).find((e) => e.id === t),
  ),
  jn = A(
    [
      T,
      Tn,
      Dn,
      En,
      On,
      (e, t, n, r, i) => {
        var a = An(e, t, n, r, i);
        if (a != null) {
          var o = T(e),
            s = Te(o, `xAxis`) ? ee(e, `yAxis`, n, r) : ee(e, `xAxis`, t, r);
          if (s != null) {
            var { stackId: c } = a,
              l = _(a);
            if (c != null && l != null)
              return s[c]?.stackedData?.find((e) => e.key === l);
          }
        }
      },
      O,
      kn,
      An,
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
          return rr({
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
  Mn = [`id`],
  Nn = [
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
function Pn(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = Fn(e, t);
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
function Fn(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function In(e, t) {
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
function Y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? In(Object(n), !0).forEach(function (t) {
          Ln(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : In(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Ln(e, t, n) {
  return (
    (t = Rn(t)) in e
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
function Rn(e) {
  var t = zn(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function zn(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function X() {
  return (
    (X = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    X.apply(null, arguments)
  );
}
function Bn(e, t) {
  return e && e !== `none` ? e : t;
}
var Vn = (e) => {
  var { dataKey: t, name: n, stroke: r, fill: i, legendType: a, hide: o } = e;
  return [
    {
      inactive: o,
      dataKey: t,
      type: a,
      color: Bn(r, i),
      value: Ae(n, t),
      payload: e,
    },
  ];
};
function Hn(e) {
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
      name: Ae(o, t),
      hide: s,
      type: e.tooltipType,
      color: Bn(r, a),
      unit: c,
    },
  };
}
var Un = (e, t) => {
  var n;
  if (K.isValidElement(e)) n = K.cloneElement(e, t);
  else if (typeof e == `function`) n = e(t);
  else {
    var r = Ye(`recharts-area-dot`, typeof e == `boolean` ? `` : e.className);
    n = K.createElement(yt, X({}, t, { className: r }));
  }
  return n;
};
function Wn(e, t) {
  return e == null ? !1 : t ? !0 : e.length === 1;
}
function Gn(e) {
  var { clipPathId: t, points: n, props: r } = e,
    { needClip: i, dot: a, dataKey: o } = r;
  if (!Wn(n, a)) return null;
  var s = Ke(a),
    c = k(r),
    l = xe(a),
    u = n.map((e, t) =>
      Un(
        a,
        Y(
          Y(Y({ key: `dot-${t}`, r: 3 }, c), l),
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
  return K.createElement(N, X({ className: `recharts-area-dots` }, d), u);
}
function Kn(e) {
  var { showLabels: t, children: n, points: r } = e,
    i = r.map((e) => {
      var t = { x: e.x, y: e.y, width: 0, height: 0 };
      return Y(
        Y({}, t),
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
  return K.createElement(se, { value: t ? i : null }, n);
}
function qn(e) {
  var { points: t, baseLine: n, needClip: r, clipPathId: i, props: a } = e,
    { layout: o, type: s, stroke: c, connectNulls: l, isRange: u } = a,
    { id: d } = a,
    f = Pn(a, Mn),
    p = k(f);
  return K.createElement(
    K.Fragment,
    null,
    t?.length > 1 &&
      K.createElement(
        N,
        { clipPath: r ? `url(#clipPath-${i})` : void 0 },
        K.createElement(
          E,
          X({}, p, {
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
          K.createElement(
            E,
            X({}, p, {
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
          K.createElement(
            E,
            X({}, p, {
              className: `recharts-area-curve`,
              layout: o,
              type: s,
              connectNulls: l,
              fill: `none`,
              points: n,
            }),
          ),
      ),
    K.createElement(Gn, { points: t, props: f, clipPathId: i }),
  );
}
function Jn(e) {
  var { alpha: t, baseLine: n, points: r, strokeWidth: i } = e,
    a = r[0].y,
    o = r[r.length - 1].y;
  if (!de(a) || !de(o)) return null;
  var s = t * Math.abs(a - o),
    c = Math.max(...r.map((e) => e.x || 0));
  return (
    Pe(n)
      ? (c = Math.max(n, c))
      : n &&
        Array.isArray(n) &&
        n.length &&
        (c = Math.max(...n.map((e) => e.x || 0), c)),
    Pe(c)
      ? K.createElement(`rect`, {
          x: 0,
          y: a < o ? a : a - s,
          width: c + (i ? parseInt(`${i}`, 10) : 1),
          height: Math.floor(s),
        })
      : null
  );
}
function Yn(e) {
  var { alpha: t, baseLine: n, points: r, strokeWidth: i } = e,
    a = r[0].x,
    o = r[r.length - 1].x;
  if (!de(a) || !de(o)) return null;
  var s = t * Math.abs(a - o),
    c = Math.max(...r.map((e) => e.y || 0));
  return (
    Pe(n)
      ? (c = Math.max(n, c))
      : n &&
        Array.isArray(n) &&
        n.length &&
        (c = Math.max(...n.map((e) => e.y || 0), c)),
    Pe(c)
      ? K.createElement(`rect`, {
          x: a < o ? a : a - s,
          y: 0,
          width: s,
          height: Math.floor(c + (i ? parseInt(`${i}`, 10) : 1)),
        })
      : null
  );
}
function Xn(e) {
  var { alpha: t, layout: n, points: r, baseLine: i, strokeWidth: a } = e;
  return n === `vertical`
    ? K.createElement(Jn, { alpha: t, points: r, baseLine: i, strokeWidth: a })
    : K.createElement(Yn, { alpha: t, points: r, baseLine: i, strokeWidth: a });
}
function Zn(e) {
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
    m = ce(r, `recharts-area-`),
    [h, g] = (0, K.useState)(!1),
    _ = !h,
    v = (0, K.useCallback)(() => {
      (typeof p == `function` && p(), g(!1));
    }, [p]),
    y = (0, K.useCallback)(() => {
      (typeof f == `function` && f(), g(!0));
    }, [f]),
    x = i.current,
    S = a.current;
  return K.createElement(
    Kn,
    { showLabels: _, points: o },
    r.children,
    K.createElement(
      le,
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
        if (x) {
          var l = x.length / o.length,
            u =
              e === 1
                ? o
                : o.map((t, n) => {
                    var r = Math.floor(n * l);
                    if (x[r]) {
                      var i = x[r];
                      return Y(
                        Y({}, t),
                        {},
                        { x: M(i.x, t.x, e), y: M(i.y, t.y, e) },
                      );
                    }
                    return t;
                  }),
            d = Pe(s)
              ? M(S, s, e)
              : ge(s) || Ue(s)
                ? M(S, 0, e)
                : s.map((t, n) => {
                    var r = Math.floor(n * l);
                    if (Array.isArray(S) && S[r]) {
                      var i = S[r];
                      return Y(
                        Y({}, t),
                        {},
                        { x: M(i.x, t.x, e), y: M(i.y, t.y, e) },
                      );
                    }
                    return t;
                  });
          return (
            e > 0 && ((i.current = u), (a.current = d)),
            K.createElement(qn, {
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
          K.createElement(
            N,
            null,
            c &&
              K.createElement(
                `defs`,
                null,
                K.createElement(
                  `clipPath`,
                  { id: `animationClipPath-${n}` },
                  K.createElement(Xn, {
                    alpha: e,
                    points: o,
                    baseLine: s,
                    layout: r.layout,
                    strokeWidth: r.strokeWidth,
                  }),
                ),
              ),
            K.createElement(
              N,
              { clipPath: `url(#animationClipPath-${n})` },
              K.createElement(qn, {
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
    K.createElement(b, { label: r.label }),
  );
}
function Qn(e) {
  var { needClip: t, clipPathId: n, props: r } = e,
    i = (0, K.useRef)(null),
    a = (0, K.useRef)();
  return K.createElement(Zn, {
    needClip: t,
    clipPathId: n,
    props: r,
    previousPointsRef: i,
    previousBaselineRef: a,
  });
}
var $n = class extends K.PureComponent {
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
      var p = Ye(`recharts-area`, r),
        m = d,
        { r: h, strokeWidth: g } = Jt(t),
        _ = Ke(t),
        v = h * 2 + g;
      return K.createElement(
        K.Fragment,
        null,
        K.createElement(
          N,
          { className: p },
          o &&
            K.createElement(
              `defs`,
              null,
              K.createElement(Se, { clipPathId: m, xAxisId: s, yAxisId: c }),
              !_ &&
                K.createElement(
                  `clipPath`,
                  { id: `clipPath-dots-${m}` },
                  K.createElement(`rect`, {
                    x: a - v / 2,
                    y: i - v / 2,
                    width: l + v,
                    height: u + v,
                  }),
                ),
            ),
          K.createElement(Qn, {
            needClip: o,
            clipPathId: m,
            props: this.props,
          }),
        ),
        K.createElement(Et, {
          points: n,
          mainColor: Bn(this.props.stroke, this.props.fill),
          itemDataKey: this.props.dataKey,
          activeDot: this.props.activeDot,
        }),
        this.props.isRange &&
          Array.isArray(f) &&
          K.createElement(Et, {
            points: f,
            mainColor: Bn(this.props.stroke, this.props.fill),
            itemDataKey: this.props.dataKey,
            activeDot: this.props.activeDot,
          }),
      );
    }
  },
  er = {
    activeDot: !0,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: `ease`,
    connectNulls: !1,
    dot: !1,
    fill: `#3182bd`,
    fillOpacity: 0.6,
    hide: !1,
    isAnimationActive: !Fe.isSsr,
    legendType: `line`,
    stroke: `#3182bd`,
    xAxisId: 0,
    yAxisId: 0,
  };
function tr(e) {
  var t = S(e, er),
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
    g = Pn(t, Nn),
    _ = ue(),
    v = ne(),
    { needClip: y } = be(m, h),
    b = D(),
    {
      points: x,
      isRange: C,
      baseLine: w,
    } = ze((t) => jn(t, m, h, b, e.id)) ?? {},
    T = Je();
  if (
    (_ !== `horizontal` && _ !== `vertical`) ||
    T == null ||
    (v !== `AreaChart` && v !== `ComposedChart`)
  )
    return null;
  var { height: E, width: ee, x: te, y: re } = T;
  return !x || !x.length
    ? null
    : K.createElement(
        $n,
        X({}, g, {
          activeDot: n,
          animationBegin: r,
          animationDuration: i,
          animationEasing: a,
          baseLine: w,
          connectNulls: o,
          dot: s,
          fill: c,
          fillOpacity: l,
          height: E,
          hide: u,
          layout: _,
          isAnimationActive: d,
          isRange: C,
          legendType: f,
          needClip: y,
          points: x,
          stroke: p,
          width: ee,
          left: te,
          top: re,
          xAxisId: m,
          yAxisId: h,
        }),
      );
}
var nr = (e, t, n, r, i) => {
  var a = n ?? t;
  if (Pe(a)) return a;
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
function rr(e) {
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
    h = nr(a, o, n, s, c),
    g = a === `horizontal`,
    _ = !1,
    v = l.map((e, n) => {
      var a;
      m
        ? (a = i[u + n])
        : ((a = Le(e, r)), Array.isArray(a) ? (_ = !0) : (a = [h, a]));
      var o = a[1] == null || (m && !t && Le(e, r) == null);
      return g
        ? {
            x: _e({ axis: s, ticks: d, bandSize: p, entry: e, index: n }),
            y: o ? null : c.scale(a[1]),
            value: a,
            payload: e,
          }
        : {
            x: o ? null : s.scale(a[1]),
            y: _e({ axis: c, ticks: f, bandSize: p, entry: e, index: n }),
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
function ir(e) {
  var t = S(e, er),
    n = D();
  return K.createElement(qe, { id: t.id, type: `area` }, (e) =>
    K.createElement(
      K.Fragment,
      null,
      K.createElement(oe, { legendPayload: Vn(t) }),
      K.createElement(v, { fn: Hn, args: t }),
      K.createElement(pe, {
        type: `area`,
        id: e,
        data: t.data,
        dataKey: t.dataKey,
        xAxisId: t.xAxisId,
        yAxisId: t.yAxisId,
        zAxisId: 0,
        stackId: Ve(t.stackId),
        hide: t.hide,
        barSize: void 0,
        baseValue: t.baseValue,
        isPanorama: n,
        connectNulls: t.connectNulls,
      }),
      K.createElement(tr, X({}, t, { id: e })),
    ),
  );
}
var ar = K.memo(ir);
ar.displayName = `Area`;
var or = [`axis`],
  sr = (0, K.forwardRef)((e, t) =>
    K.createElement(we, {
      chartName: `ComposedChart`,
      defaultTooltipEventType: `axis`,
      validateTooltipEventTypes: or,
      tooltipPayloadSearcher: te,
      categoricalChartProps: e,
      ref: t,
    }),
  );
function cr(e, t, n = NaN) {
  let { strSymbol: r, strDecimalSymbol: i, strThousandsSeparator: a } = Ie(t);
  ((e = e
    .replace(r, ``)
    .replace(`.--`, `.00`)
    .replace(/ /g, ``)
    .replace(lr(a), ``)),
    i !== `.` && (e = e.replace(lr(i), `.`)));
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
function lr(e) {
  return e === `.` ? /\./g : new RegExp(e, `g`);
}
var Z = a();
function ur(e) {
  let { children: t } = e;
  return (0, Z.jsx)(Ee, {
    isAnimationActive: !1,
    content: (e) => {
      let n = typeof t == `function` ? t(e) : t;
      return n
        ? (0, Z.jsx)(z, {
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
K.memo(function () {
  return (0, Z.jsx)(j, { stroke: `#FFFFFF10`, fill: `var(--color-dull-5)` });
});
function dr(e) {
  let [t, n] = (0, K.useState)(null);
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
function fr(e) {
  let {
    id: t,
    color: n,
    stops: r = [
      [`0%`, 0.7],
      [`100%`, 0],
    ],
    gradientUnits: i,
  } = e;
  return (0, Z.jsx)(`linearGradient`, {
    id: t,
    x1: `0`,
    y1: `0`,
    x2: `0`,
    y2: `100%`,
    gradientUnits: i,
    children: r.map(([e, t, r], i) =>
      (0, Z.jsx)(`stop`, { offset: e, stopColor: r ?? n, stopOpacity: t }, i),
    ),
  });
}
function pr(e) {
  let { dataKey: t, color: n, numPoints: r, ...i } = e;
  return (0, Z.jsx)(wn, {
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
function mr(e) {
  let { scale: t, dataKey: n } = e,
    r = (0, K.useId)(),
    i = {
      dataKey: n,
      fill: `url(#${r})`,
      yAxisId: `purchases`,
      isAnimationActive: !1,
    };
  return (0, Z.jsxs)(Z.Fragment, {
    children: [
      (0, Z.jsx)(`defs`, {
        children: (0, Z.jsx)(fr, {
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
        ? (0, Z.jsx)(ar, { ...i, strokeOpacity: 0.25, connectNulls: !0 })
        : (0, Z.jsx)(ke, { ...i }),
    ],
  });
}
function hr() {
  typeof g == `function`
    ? g({
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
var Q = e(r(), 1),
  gr = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.webcookie || V(e.M()),
        Q.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { webcookie: { n: 1, br: L.readString, bw: P.writeString } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= B(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return G(e.M(), t, n);
    }
    static fromObject(t) {
      return F(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return H(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEconMarket_IsMarketplaceAllowed_Request`;
    }
  },
  _r = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.allowed || V(e.M()),
        Q.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            allowed: { n: 1, br: L.readBool, bw: P.writeBool },
            reason: { n: 2, br: L.readUint32, bw: P.writeUint32 },
            allowed_at_time: { n: 3, br: L.readUint32, bw: P.writeUint32 },
            steamguard_required_days: {
              n: 4,
              br: L.readUint32,
              bw: P.writeUint32,
            },
            forms_requested: { n: 7, br: L.readBool, bw: P.writeBool },
            forms_require_verification: {
              n: 8,
              br: L.readBool,
              bw: P.writeBool,
            },
            new_device_cooldown_days: {
              n: 9,
              br: L.readUint32,
              bw: P.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= B(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return G(e.M(), t, n);
    }
    static fromObject(t) {
      return F(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return H(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEconMarket_IsMarketplaceAllowed_Response`;
    }
  },
  vr;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`EconMarket.IsMarketplaceAllowed#1`, W(gr, t, n), _r, {
      ePrivilege: 1,
    });
  }
  e.IsMarketplaceAllowed = t;
})((vr ||= {}));
var yr = { resultsView: `grid`, priceTimeScale: `month`, searchSort: 0 },
  br = (0, K.createContext)({
    prefs: yr,
    onChange: () =>
      console.error(
        `Cannot update market display preferences. Missing provider.`,
      ),
  });
function xr(e) {
  let { prefs: t, onChange: n, children: r } = e,
    i = (0, K.useRef)(t);
  i.current = t;
  let a = (0, K.useMemo)(() => ({ ...yr, ...t }), [t]),
    o = (0, K.useCallback)(
      (e) => {
        let t = (e) => {
          let t = { ...e };
          for (let [e, n] of Object.entries(yr)) t[e] === n && delete t[e];
          return t;
        };
        n(
          typeof e == `function`
            ? (n) => {
                let r = e({ ...yr, ...n });
                return t(r);
              }
            : e,
        );
      },
      [n],
    ),
    s = (0, K.useMemo)(() => ({ prefs: a, onChange: o }), [a, o]);
  return (0, Z.jsx)(br, { value: s, children: r });
}
function Sr() {
  let { prefs: e, onChange: t } = (0, K.useContext)(br);
  return [e, t];
}
function Cr(e) {
  let [t, n] = Sr();
  return [
    e === `resultsView` ? `grid` : t[e],
    (0, K.useCallback)((t) => n((n) => ({ ...n, [e]: t })), [n, e]),
  ];
}
var wr = `VJlhvA2sWGg-`,
  Tr = 86400,
  Er = 604800;
hr();
var Dr = { week: Tr / 4, month: Tr, year: Er, lifetime: Er },
  Or = { week: Tr / 48, month: Tr / 48, year: Tr / 2, lifetime: Tr / 2 };
function kr(e, t) {
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
      st(t, `Unhandled graph scale: ${t}`);
  }
  return Math.floor(n.getTime() / 1e3);
}
function Ar(e) {
  let { priceHistory: t, height: n } = e,
    [r, i] = Cr(`priceTimeScale`),
    a = Lr(t, r),
    o = (0, K.useMemo)(
      () => a.reduce((e, t) => e + +(t.purchases > 0), 0),
      [a],
    ),
    s = (0, K.useId)();
  return (0, Z.jsxs)(jr, {
    currency: t.ecurrency,
    data: a,
    scale: r,
    onScaleChange: i,
    height: n,
    children: [
      (0, Z.jsx)(j, {
        horizontal: !1,
        vertical: !1,
        fill: `var(--color-dull-5)`,
        yAxisId: `price`,
      }),
      (0, Z.jsxs)(`defs`, {
        children: [
          (0, Z.jsx)(fr, {
            id: `${s}price`,
            color: `var(--color-green-9)`,
            stops: [
              [`0%`, 0.5],
              [`90%`, 0],
            ],
            gradientUnits: `userSpaceOnUse`,
          }),
          (0, Z.jsxs)(`filter`, {
            id: `${s}band`,
            children: [
              (0, Z.jsx)(`feColorMatrix`, {
                in: `SourceAlpha`,
                values: `0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 100 0`,
                result: `solid`,
              }),
              (0, Z.jsx)(`feOffset`, {
                in: `solid`,
                dy: `60`,
                result: `shifted`,
              }),
              (0, Z.jsx)(`feGaussianBlur`, {
                in: `shifted`,
                stdDeviation: `25`,
                result: `blurred`,
              }),
              (0, Z.jsx)(`feComposite`, {
                in: `SourceGraphic`,
                in2: `blurred`,
                operator: `out`,
              }),
            ],
          }),
        ],
      }),
      (0, Z.jsx)(mr, { dataKey: `purchases`, scale: r }),
      (0, Z.jsx)(ar, {
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
      (0, Z.jsx)(pr, {
        dataKey: `price`,
        color: `var(--color-green-9)`,
        numPoints: o,
        strokeWidth: 1.5,
        className: wr,
      }),
      a.length === 0 &&
        (0, Z.jsx)(De, {
          position: `center`,
          children: d.Localize(`#Graph_NoData`),
        }),
    ],
  });
}
function jr(e) {
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
    u = new Intl.DateTimeFormat($e(), {
      year: `numeric`,
      month: `numeric`,
      day: `numeric`,
      hour: l ? `numeric` : void 0,
    }),
    [f, m] = (0, K.useState)(null),
    { props: h, activeDrag: g } = dr({
      onSelection: (e, t) =>
        e.activeLabel && t.activeLabel && m([e.activeLabel, t.activeLabel]),
    }),
    _ = !!a,
    v = (e) => {
      (m(null), a && a(e));
    },
    y = !ct(`sm`),
    b =
      _ &&
      (0, Z.jsx)(p, {
        value: f ? null : i,
        onValueChange: v,
        options: [`week`, `month`, `year`, `lifetime`],
        getOptionLabel: Ir,
        radius: `sm`,
        variant: `dim`,
      });
  return (0, Z.jsxs)(z, {
    children: [
      (0, Z.jsxs)(I, {
        align: `end`,
        justify: `between`,
        marginBottom: `2`,
        children: [
          (0, Z.jsx)(o, {
            size: `5`,
            contrast: `subtitle`,
            children: d.Localize(`#MedianSalePrice_Graph_Title`),
          }),
          !y &&
            (0, Z.jsxs)(I, {
              justify: `center`,
              gap: `2`,
              children: [
                f &&
                  (0, Z.jsxs)(nt, {
                    color: `dull`,
                    onClick: () => m(null),
                    children: [
                      (0, Z.jsxs)(R, {
                        size: `2`,
                        contrast: `title`,
                        children: [
                          u.format(f[0] * 1e3),
                          ` - `,
                          u.format(f[1] * 1e3),
                        ],
                      }),
                      (0, Z.jsx)(tt, { marginLeft: `2` }),
                    ],
                  }),
                b,
              ],
            }),
        ],
      }),
      (0, Z.jsx)(z, {
        background: `dull-6`,
        padding: { initial: `1`, sm: `4` },
        paddingTop: `5`,
        children: (0, Z.jsxs)(sr, {
          style: {
            width: `100%`,
            ...(c
              ? { height: c }
              : { maxHeight: `min( 70vh, 350px )`, minHeight: `320px` }),
            fontSize: `var(--text-size-3)`,
          },
          data: r,
          responsive: !0,
          ...h,
          margin: { left: 20, right: 20 },
          children: [
            (0, Z.jsx)(Mr, {
              currency: n,
              scale: i,
              customDomain: f,
              tooltipComponent: s,
            }),
            g &&
              (0, Z.jsx)(Rt, {
                x1: g[0].activeLabel,
                x2: g[1].activeLabel,
                fill: `#FFFFFF`,
                fillOpacity: 0.3,
                yAxisId: `price`,
                ifOverflow: `visible`,
              }),
            t,
          ],
        }),
      }),
      y && (0, Z.jsx)(z, { marginTop: `2`, children: b }),
    ],
  });
}
var Mr = K.memo(function (e) {
    let { scale: t, currency: n, customDomain: r, tooltipComponent: i } = e,
      [
        {
          rtMount: a,
          dayDateFormatter: o,
          hourDateFormatter: s,
          numberFormatter: c,
        },
      ] = (0, K.useState)(() => ({
        rtMount: Math.floor(Date.now() / 1e3),
        dayDateFormatter: new Intl.DateTimeFormat($e(), {
          year: `numeric`,
          month: `numeric`,
          day: `numeric`,
          hour: void 0,
        }),
        hourDateFormatter: new Intl.DateTimeFormat($e(), {
          year: `numeric`,
          month: `numeric`,
          day: `numeric`,
          hour: `numeric`,
        }),
        numberFormatter: new Intl.NumberFormat($e()),
      })),
      l = i || Pr,
      u = t === `week` || t === `month` ? s : o,
      f = (0, K.useCallback)((e) => c.format(e), [c]),
      p = (0, K.useCallback)((e) => Be(Math.round(e * 100), n), [n]);
    return (0, Z.jsxs)(Z.Fragment, {
      children: [
        (0, Z.jsx)(Nr, {
          dateFormatter: u,
          mountTime: a,
          scale: t,
          customDomain: r,
        }),
        (0, Z.jsx)(je, {
          yAxisId: `price`,
          tickMargin: 3,
          tickFormatter: p,
          width: `auto`,
          children: (0, Z.jsx)(De, {
            angle: -90,
            position: `left`,
            offset: 10,
            fill: `var(--color-green-8)`,
            children: d.Localize(`#Graph_Label_Price`),
          }),
        }),
        (0, Z.jsx)(je, {
          yAxisId: `purchases`,
          tickMargin: 3,
          orientation: `right`,
          tickFormatter: f,
          width: `auto`,
          allowDecimals: !1,
          children: (0, Z.jsx)(De, {
            angle: 90,
            position: `right`,
            offset: 10,
            fill: `var(--color-blue-8)`,
            children: d.Localize(`#Graph_Label_Volume`),
          }),
        }),
        (0, Z.jsx)(l, { dateFormatter: u, currency: n }),
      ],
    });
  }),
  Nr = K.memo(function (e) {
    let { dateFormatter: t, mountTime: n, scale: r, customDomain: i } = e,
      a = (0, K.useMemo)(
        () => [
          (e) => Math.min(e - Or[r], kr(n, r)),
          (e) => Math.max(e + Or[r], n),
        ],
        [n, r],
      ),
      o = i || a,
      s = (0, K.useCallback)((e) => t.format(e * 1e3), [t]);
    return (0, Z.jsx)(Re, {
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
function Pr(e) {
  let {
      dateFormatter: t,
      currency: n,
      priceKey: r = `price`,
      purchasesKey: i = `purchases`,
    } = e,
    a = new Intl.NumberFormat();
  return (0, Z.jsx)(ur, {
    children: (e) => {
      if (!e.active || !e.payload?.length || !e.payload[0].payload) return null;
      let o = e.payload[0].payload,
        s = o[r],
        c = o[i],
        l = o.time;
      if (s === void 0 || c === void 0) return null;
      let u = Be(Math.round(s * 100), n),
        f = d.Localize(`#Graph_NumberSold`, a.format(c)),
        p = t.format(l * 1e3);
      return (0, Z.jsxs)(I, {
        direction: `column`,
        gap: `2`,
        children: [
          (0, Z.jsx)(R, { weight: `medium`, contrast: `title`, children: p }),
          (0, Z.jsx)(R, { color: `green-9`, children: u }),
          (0, Z.jsx)(R, { color: `blue-9`, children: f }),
        ],
      });
    },
  });
}
var Fr = {
  week: `#Graph_TimeScale_Week`,
  month: `#Graph_TimeScale_Month`,
  year: `#Graph_TimeScale_Year`,
  lifetime: `#Graph_TimeScale_Lifetime`,
};
function Ir(e) {
  return d.Localize(Fr[e]);
}
function Lr(e, t) {
  let [n] = (0, K.useState)(() => Math.floor(Date.now() / 1e3));
  return (0, K.useMemo)(() => Rr(e, n), [e, n])[t];
}
function Rr(e, t) {
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
    let e = Gr(t);
    (t.time >= a && n.week.push(e), t.time >= s && n.month.push(e));
    let i = !!r && Ur(r.time, e.time);
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
    let r = n.map((e) => (Array.isArray(e) ? Kr(e) : e));
    return [...Br(e, t, r), ...zr(e, r), ...Vr(e, t, r)];
  };
  return {
    week: u(`week`, n.week),
    month: u(`month`, n.month),
    year: u(`year`, n.year),
    lifetime: u(`lifetime`, n.lifetime),
  };
}
function zr(e, t) {
  if (t.length <= 1) return t;
  let n = [t[0]];
  for (let r = 1; r < t.length; r++) {
    let i = t[r - 1],
      a = t[r],
      o = i.time + Dr[e];
    for (; o < a.time && !Hr(o, a.time, e);)
      (n.push({ time: o, price: void 0, purchases: 0 }), (o += Dr[e]));
    n.push(a);
  }
  return n;
}
function Br(e, t, n) {
  let r = kr(t, e);
  if (!n.length || Hr(r, n[0].time, e)) return [];
  let i = n[0].time - Dr[e],
    a = [];
  for (; i >= r;)
    (a.push({ time: i, price: void 0, purchases: 0 }), (i -= Dr[e]));
  return a.reverse();
}
function Vr(e, t, n) {
  if (!n.length || Hr(t, n[n.length - 1].time, e)) return [];
  let r = t,
    i = [],
    a = n[n.length - 1].time;
  for (; r > a && !Hr(r, a, e);)
    (i.push({ time: r, price: void 0, purchases: 0 }), (r -= Dr[e]));
  return i.reverse();
}
function Hr(e, t, n) {
  switch (n) {
    case `lifetime`:
    case `year`:
      return Ur(e, t);
    case `month`:
    case `week`:
      return Wr(e, t);
    default:
      return (st(n, `Unhandled time scale "${n}"`), !1);
  }
}
function Ur(e, t) {
  let n = new Date(e * 1e3),
    r = new Date(t * 1e3);
  return (
    n.getFullYear() === r.getFullYear() &&
    n.getMonth() === r.getMonth() &&
    n.getDate() === r.getDate()
  );
}
function Wr(e, t) {
  return (
    Ur(e, t) && new Date(e * 1e3).getHours() === new Date(t * 1e3).getHours()
  );
}
function Gr(e) {
  return { time: e.time, price: e.price_median, purchases: e.purchases };
}
function Kr(e) {
  if (
    (ut(e.length, `Cannot merge a list of zero data points!`), e.length === 1)
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
var qr = 1e-5;
function Jr(e) {
  return {
    nFloor: parseInt(e.wallet_market_minimum) || 1,
    nIncrement: parseInt(e.wallet_currency_increment) || 1,
  };
}
function Yr(e, t, n) {
  let r = e;
  if (t > 1) {
    let i = e / t,
      a = i < 0 ? -1 : 1,
      o = Math.abs(i);
    r = a * (n ? Math.ceil(o) : Math.floor(o + 0.5)) * t;
  }
  return Math.max(r, t);
}
function Xr(e, t, n, r) {
  return e <= t ? t : Yr(e, n, r);
}
function Zr(e, t) {
  let { nFloor: n, nIncrement: r } = Jr(t);
  return Xr(e, n, r, !0);
}
function Qr(e, t, n, r) {
  let i = t.fee_rate ?? 0;
  if (i <= qr) return { nFee: 0, bCapped: !1 };
  let a = Xr(Math.trunc(e * i), n, r, !1),
    o = t.fee_cap ? parseInt(t.fee_cap) : 0;
  return o > 0 && a >= o ? { nFee: o, bCapped: !0 } : { nFee: a, bCapped: !1 };
}
function $r(e) {
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
  let { nFloor: r, nIncrement: i } = Jr(n),
    a = Xr(e, r, i, !0),
    o = Qr(a, t.publisher_fee ?? {}, r, i),
    s = Qr(a, t.steam_fee ?? {}, r, i);
  return {
    nBasePrice: a,
    nSteamFee: s.nFee,
    nPublisherFee: o.nFee,
    nTotal: a + s.nFee + o.nFee,
    bSteamFeeCapped: s.bCapped,
    bPublisherFeeCapped: o.bCapped,
  };
}
function ei(e, t, n) {
  let { nFloor: r, nIncrement: i } = Jr(n),
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
function ti(e, t, n) {
  return $(e, t, n).nTotal;
}
function ni(e, t, n) {
  return ei(e, t, n).nBasePrice;
}
var ri = `_37rzH4CvbMw-`;
function ii(e) {
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
    p = Math.max(d.length, l ? 9 : 4) + r.strSymbol.length + 0.5,
    m = i || l,
    h = m ? `calc( ${p}ch + 2 * var(--spacing-2) )` : `${p}ch`;
  return (0, Z.jsx)(z, {
    className: rt(ri, !m && `YVYRIADuxks-`),
    width: l ? { initial: `100%`, sm: h } : h,
    children: (0, Z.jsx)(f, {
      size: `2`,
      variant: m ? `inset` : `bare`,
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
function ai(e) {
  let { children: t, type: n } = e;
  return n == `warning`
    ? (0, Z.jsx)(z, {
        background: `dull-5`,
        padding: { initial: `3`, sm: `5` },
        width: `100%`,
        children: (0, Z.jsx)(R, {
          as: `div`,
          size: `3`,
          align: `center`,
          color: `text-warning`,
          whiteSpace: `pre-wrap`,
          children: t,
        }),
      })
    : (0, Z.jsx)(R, {
        size: `3`,
        align: `end`,
        color: n == `error` ? `red-10` : `green-11`,
        whiteSpace: `pre-wrap`,
        children: t,
      });
}
var oi = `Xice-lU-2-8-`,
  si = `Pv3PuwbbHSo-`,
  ci = `oZO2DSFoyy4-`;
function li(e) {
  let {
      onClose: t,
      children: n,
      capHeight: r,
      fitContent: i,
      onSubmit: a,
      ...o
    } = e,
    s = rt(
      oi,
      i && `wr8reWdSeMQ-`,
      r && `_5ODqSmieNFc-`,
      `noOpinionatedGlobalStyles`,
    );
  return (0, Z.jsxs)(pt, {
    onClose: t,
    className: s,
    children: [
      (0, Z.jsx)(`div`, {
        className: ci,
        children: (0, Z.jsx)(tt, { size: `5`, onClick: t }),
      }),
      (0, Z.jsx)(`form`, {
        onSubmit: (e) => {
          (e.preventDefault(), a && a());
        },
        className: rt(si, r && `ELsvkQVzGqY-`),
        children: (0, Z.jsx)(I, {
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
function ui(e) {
  let { lastUpdate: t, agreed: n, onAgreeChange: r, disabled: i } = e,
    a = ft(t),
    o = `${at.STORE_BASE_URL}subscriber_agreement`;
  return (0, Z.jsx)(dt, {
    checked: n,
    onChange: r,
    disabled: i,
    align: `start`,
    children: (0, Z.jsx)(R, {
      size: `3`,
      style: { paddingTop: `2px` },
      children: d.LocalizeReact(
        `#PurchaseDialog_SSA_Link`,
        (0, Z.jsx)(c, {
          href: o,
          target: `_blank`,
          children: d.Localize(`#PurchaseDialog_SSA_Link_Title`),
        }),
        a,
      ),
    }),
  });
}
function di(e) {
  let { selling: t } = e;
  return (0, Z.jsx)(R, {
    size: `3`,
    children: d.Localize(t ? `#SellDialog_EU_SSA` : `#PurchaseDialog_EU_SSA`),
  });
}
function fi(e, t) {
  if (typeof window > `u`) return;
  let n = Reflect.get(window, `ReactNativeWebView`);
  typeof n?.postMessage == `function` &&
    n.postMessage(
      JSON.stringify({ event_name: `marketconfirm`, type: e, creator_id: t }),
    );
}
var pi = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), Q.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMobilePerAccount_GetSettings_Request`;
    }
  },
  mi = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.has_settings || V(e.M()),
        Q.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            has_settings: { n: 4, br: L.readBool, bw: P.writeBool },
            allow_sale_push: { n: 2, br: L.readBool, bw: P.writeBool },
            allow_wishlist_push: { n: 3, br: L.readBool, bw: P.writeBool },
            chat_notification_level: {
              n: 5,
              br: L.readUint32,
              bw: P.writeUint32,
            },
            notify_direct_chat: { n: 6, br: L.readBool, bw: P.writeBool },
            notify_group_chat: { n: 7, br: L.readBool, bw: P.writeBool },
            allow_event_push: { n: 8, d: !0, br: L.readBool, bw: P.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= B(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return G(e.M(), t, n);
    }
    static fromObject(t) {
      return F(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return H(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMobilePerAccount_GetSettings_Response`;
    }
  },
  hi = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.allow_sale_push || V(e.M()),
        Q.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            allow_sale_push: { n: 2, br: L.readBool, bw: P.writeBool },
            allow_wishlist_push: { n: 3, br: L.readBool, bw: P.writeBool },
            chat_notification_level: {
              n: 4,
              br: L.readUint32,
              bw: P.writeUint32,
            },
            notify_direct_chat: { n: 5, br: L.readBool, bw: P.writeBool },
            notify_group_chat: { n: 6, br: L.readBool, bw: P.writeBool },
            allow_event_push: { n: 7, d: !0, br: L.readBool, bw: P.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= B(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return G(e.M(), t, n);
    }
    static fromObject(t) {
      return F(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return H(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMobilePerAccount_SetSettings_Request`;
    }
  },
  gi = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), Q.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMobilePerAccount_SetSettings_Response`;
    }
  },
  _i = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.deviceid || V(e.M()),
        Q.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            deviceid: { n: 1, br: L.readString, bw: P.writeString },
            language: { n: 2, br: L.readString, bw: P.writeString },
            push_enabled: { n: 3, br: L.readBool, bw: P.writeBool },
            app_version: { n: 4, br: L.readString, bw: P.writeString },
            os_version: { n: 5, br: L.readString, bw: P.writeString },
            device_model: { n: 6, br: L.readString, bw: P.writeString },
            twofactor_device_identifier: {
              n: 7,
              br: L.readString,
              bw: P.writeString,
            },
            mobile_app: { n: 8, br: L.readEnum, bw: P.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= B(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return G(e.M(), t, n);
    }
    static fromObject(t) {
      return F(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return H(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMobileDevice_RegisterMobileDevice_Request`;
    }
  },
  vi = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.unique_deviceid || V(e.M()),
        Q.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            unique_deviceid: { n: 2, br: L.readUint32, bw: P.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= B(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return G(e.M(), t, n);
    }
    static fromObject(t) {
      return F(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return H(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMobileDevice_RegisterMobileDevice_Response`;
    }
  },
  yi = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.deviceid || V(e.M()),
        Q.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { deviceid: { n: 1, br: L.readString, bw: P.writeString } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= B(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return G(e.M(), t, n);
    }
    static fromObject(t) {
      return F(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return H(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMobileDevice_DeregisterMobileDevice_Notification`;
    }
  },
  bi = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.app_type || V(e.M()),
        Q.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            app_type: { n: 1, br: L.readEnum, bw: P.writeEnum },
            push_enabled_only: { n: 2, br: L.readBool, bw: P.writeBool },
            minimum_version: { n: 3, br: L.readString, bw: P.writeString },
            twofactor_device_identifier: {
              n: 4,
              br: L.readString,
              bw: P.writeString,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= B(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return G(e.M(), t, n);
    }
    static fromObject(t) {
      return F(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return H(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMobileDevice_HasMobileDevice_Request`;
    }
  },
  xi = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.found_device || V(e.M()),
        Q.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            found_device: { n: 1, br: L.readBool, bw: P.writeBool },
            up_to_date: { n: 2, br: L.readBool, bw: P.writeBool },
            max_version: { n: 3, br: L.readString, bw: P.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= B(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return G(e.M(), t, n);
    }
    static fromObject(t) {
      return F(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return H(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMobileDevice_HasMobileDevice_Response`;
    }
  },
  Si = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.authenticator_gid || V(e.M()),
        Q.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: L.readFixed64String,
              bw: P.writeFixed64String,
            },
            device_identifier: { n: 2, br: L.readString, bw: P.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= B(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return G(e.M(), t, n);
    }
    static fromObject(t) {
      return F(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return H(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMobileApp_GetMobileSummary_Request`;
    }
  },
  Ci = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.stale_time_seconds || V(e.M()),
        Q.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            stale_time_seconds: { n: 1, br: L.readUint32, bw: P.writeUint32 },
            is_authenticator_valid: { n: 2, br: L.readBool, bw: P.writeBool },
            owned_games: { n: 3, br: L.readUint32, bw: P.writeUint32 },
            friend_count: { n: 4, br: L.readUint32, bw: P.writeUint32 },
            wallet_balance: { n: 5, br: L.readString, bw: P.writeString },
            language: { n: 6, br: L.readString, bw: P.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= B(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return G(e.M(), t, n);
    }
    static fromObject(t) {
      return F(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return H(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMobileApp_GetMobileSummary_Response`;
    }
  },
  wi;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`MobilePerAccount.GetSettings#1`, W(pi, t, n), mi, {
      ePrivilege: 1,
    });
  }
  e.GetSettings = t;
  function n(e, t, n) {
    return e.SendMsg(`MobilePerAccount.SetSettings#1`, W(hi, t, n), gi, {
      ePrivilege: 1,
    });
  }
  e.SetSettings = n;
})((wi ||= {}));
var Ti;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`MobileDevice.RegisterMobileDevice#1`, W(_i, t, n), vi, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.RegisterMobileDevice = t;
  function n(e, t) {
    return e.SendNotification(
      `MobileDevice.DeregisterMobileDevice#1`,
      W(yi, t),
      { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
    );
  }
  e.DeregisterMobileDevice = n;
  function r(e, t, n) {
    return e.SendMsg(`MobileDevice.HasMobileDevice#1`, W(bi, t, n), xi, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.HasMobileDevice = r;
})((Ti ||= {}));
var Ei;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`MobileApp.GetMobileSummary#1`, W(Si, t, n), Ci, {
      ePrivilege: 1,
    });
  }
  e.GetMobileSummary = t;
})((Ei ||= {}));
function Di(e) {
  let [t, n] = (0, K.useState)(null);
  (0, K.useEffect)(() => {
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
  let [r, i] = (0, K.useState)({});
  return t
    ? (0, Z.jsx)(gt, {
        steamidOwner: ot.steamid,
        children: (0, Z.jsx)(xr, {
          prefs: r,
          onChange: i,
          children: (0, Z.jsx)(et, {
            children: (0, Z.jsx)(
              Oi,
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
function Oi(e) {
  let {
      item: t,
      appContext: r,
      walletInfo: i,
      newFeeRates: a,
      inPlaceListing: s,
      holdDays: c,
      holdReason: l,
      ssaUpdateTime: u,
      showEUSSA: f,
      onSold: p,
      onClose: m,
    } = e,
    { description: h } = t,
    g = i.wallet_currency,
    _ = t.appid,
    v = ki(h),
    y = parseInt(String(t.amount)) || 1,
    b = (0, K.useMemo)(
      () => ({
        wallet_market_minimum: String(i.wallet_market_minimum ?? 1),
        wallet_currency_increment: String(i.wallet_currency_increment ?? 1),
      }),
      [i],
    ),
    x = ji(_, a, i, r),
    S = Fi(g, _, v),
    C = $r(x.data) ? x.data : void 0,
    [w, T] = (0, K.useState)(`edit`),
    [E, ee] = (0, K.useState)(void 0),
    [te, ne] = (0, K.useState)(1),
    [re, ie] = (0, K.useState)(!1),
    [D, ae] = (0, K.useState)(null),
    oe = C && E ? ti(E, C, b) : void 0,
    se = parseInt(b.wallet_market_minimum) || 1,
    ce = (0, K.useRef)(!1);
  (0, K.useEffect)(() => {
    if (ce.current || !C || !S) return;
    ce.current = !0;
    let e = cr(S, g);
    E === void 0 && e > 0 && ee(ni(e, C, b));
  }, [C, S, g, b, E]);
  let O = n({
      mutationFn: Vi,
      onSuccess: (e, t) => {
        if (!e.success) return;
        let n = !!e.requires_confirmation;
        (p({ quantity: t.amount, requires_confirmation: n }),
          n
            ? (e.needs_mobile_confirmation && e.listingid && fi(3, e.listingid),
              T(`confirm`))
            : m());
      },
    }),
    le = () => {
      let e = Ai({
        bAgreedSSA: re,
        nQuantity: te,
        nAvailable: y,
        nSellerPrice: E ?? 0,
        nBuyerPrice: oe ?? 0,
        nFloor: se,
        nMaxBalance: parseInt(String(i.wallet_trade_max_balance ?? 0)) || 0,
        eCurrency: g,
      });
      (ae(e), e || T(`review`));
    },
    ue = () => {
      !O.isPending &&
        E &&
        O.mutate({
          appid: _,
          contextid: t.contextid,
          assetid: t.assetid,
          amount: te,
          price: Zr(E, b),
        });
    },
    de = () => {
      (O.reset(), T(`edit`));
    },
    fe = w === `edit` && !!C,
    k = (0, K.useRef)(null),
    A = (0, K.useRef)(!1);
  (0, K.useEffect)(() => {
    fe &&
      !A.current &&
      ((A.current = !0), window.UseTouchFriendlyMode?.() || k.current?.focus());
  }, [fe]);
  let pe = d.Localize(
      w === `edit` ? `#SellDialog_Title` : `#SellDialog_Confirm_Title`,
    ),
    j = null;
  return (
    w === `confirm` && O.data
      ? (j = (0, Z.jsx)(Li, { result: O.data }))
      : O.isError || (O.isSuccess && !O.data.success)
        ? (j = (0, Z.jsx)(zi, {
            type: `error`,
            children:
              O.data?.message || d.Localize(`#SellDialog_Error_Generic`),
          }))
        : D
          ? (j = (0, Z.jsx)(zi, { type: `error`, children: D }))
          : (x.isError || (x.isSuccess && !C)) &&
            (j = (0, Z.jsx)(zi, {
              type: `error`,
              children: d.Localize(`#SellDialog_PriceEntryUnavailable`),
            })),
    (0, Z.jsxs)(li, {
      onClose: m,
      fitContent: !0,
      onSubmit: () => {
        w === `edit` ? le() : w === `review` && ue();
      },
      children: [
        (0, Z.jsx)(o, { size: `6`, weight: `heavy`, children: pe }),
        (0, Z.jsx)(Mi, { item: t }),
        (0, Z.jsxs)(z, {
          children: [
            (0, Z.jsx)(Ni, {
              inPlace: s && !!r?.inplace_listing,
              holdDays: c,
              holdReason: l,
            }),
            (0, Z.jsx)(Ze, {
              visible: w === `edit`,
              keepMounted: !0,
              children: (0, Z.jsx)(z, {
                paddingTop: `4`,
                children: (0, Z.jsx)(Pi, {
                  appid: _,
                  hashName: v,
                  currency: g,
                }),
              }),
            }),
          ],
        }),
        (0, Z.jsx)(Ri, {
          message: j,
          prices: (0, Z.jsx)(Bi, {
            currency: g,
            marketLow: w === `confirm` ? void 0 : S,
            buyerPrice: oe,
            sellerPrice: E,
            onBuyerPriceChange:
              fe && C ? (e) => ee(e ? ni(e, C, b) : void 0) : void 0,
            onSellerPriceChange: fe ? (e) => ee(e || void 0) : void 0,
            sellerPriceStatus: E !== void 0 && E < se ? `error` : void 0,
            sellerInputRef: k,
            summary:
              y > 1 &&
              (0, Z.jsx)(R, {
                size: `3`,
                align: `center`,
                children: d.Localize(
                  `#SellDialog_TotalYouReceive`,
                  Be((E ?? 0) * te, g),
                ),
              }),
            children:
              y > 1 &&
              (0, Z.jsx)(Ii, {
                value: te,
                available: y,
                editable: w === `edit`,
                onChange: ne,
              }),
          }),
          children: (0, Z.jsxs)(I, {
            justify: `between`,
            wrap: `wrap`,
            gap: `2`,
            align: `center`,
            children: [
              (0, Z.jsx)(Ze, {
                visible: w !== `confirm`,
                children: (0, Z.jsxs)(I, {
                  direction: `column`,
                  gap: `2`,
                  children: [
                    (0, Z.jsx)(ui, {
                      lastUpdate: u,
                      agreed: re,
                      onAgreeChange: ie,
                      disabled: w !== `edit`,
                    }),
                    f && (0, Z.jsx)(di, { selling: !0 }),
                  ],
                }),
              }),
              (0, Z.jsxs)(I, {
                flexGrow: `1`,
                justify: `end`,
                align: `center`,
                gap: `2`,
                children: [
                  w === `edit` &&
                    (0, Z.jsx)(nt, {
                      type: `submit`,
                      minWidth: `120px`,
                      disabled: !C,
                      children: d.Localize(`#SellDialog_Button_Continue`),
                    }),
                  w === `review` &&
                    (0, Z.jsxs)(Z.Fragment, {
                      children: [
                        (0, Z.jsx)(nt, {
                          color: `dull`,
                          onClick: de,
                          disabled: O.isPending,
                          children: d.Localize(`#ManageListing_Dialog_Back`),
                        }),
                        (0, Z.jsx)(nt, {
                          type: `submit`,
                          minWidth: `120px`,
                          loading: O.isPending,
                          children: d.Localize(`#SellDialog_Button_Confirm`),
                        }),
                      ],
                    }),
                  w === `confirm` &&
                    (0, Z.jsx)(nt, {
                      color: `dull`,
                      onClick: m,
                      children: d.Localize(`#Button_Close`),
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
function ki(e) {
  return e.market_hash_name || e.market_name || e.name || ``;
}
function Ai(e) {
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
      ? d.Localize(`#SellDialog_Error_InvalidQuantity`)
      : a > s || i > s
        ? d.Localize(`#SellDialog_Error_PriceExceedsMaximum`, Be(s, c))
        : i < o || a < 3 * o
          ? d.Localize(`#SellDialog_Error_MinPrice`, Be(o, c))
          : null
    : d.Localize(`#SellDialog_Error_SSA`);
}
function ji(e, t, n, r) {
  return i({
    queryKey: [`inventory`, `sellfees`, e, t],
    queryFn: async () => {
      if (!t)
        return {
          steam_fee: {
            fee_rate: parseFloat(String(n.wallet_fee_percent ?? 0.05)),
          },
          publisher_fee: {
            fee_rate: parseFloat(
              String(
                r?.market_pubfee_rate ??
                  n.wallet_publisher_fee_percent_default ??
                  0.1,
              ),
            ),
          },
        };
      let i = new URLSearchParams({ appid: e.toString() }),
        a = await fetch(
          `${at.COMMUNITY_BASE_URL}market/ajaxfeestructure/?${i.toString()}`,
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
function Mi(e) {
  let { item: t } = e,
    { description: n } = t,
    r = (0, K.useMemo)(
      () => ({
        appid: t.appid,
        contextid: t.contextid,
        assetid: t.assetid,
        amount: t.amount,
        asset_properties: t.asset_properties,
      }),
      [t],
    ),
    i = mt(n),
    a = { initial: `64px`, sm: `96px` };
  return (0, Z.jsx)(_t.Root, {
    description: n,
    asset: r,
    bInteractable: !1,
    children: (0, Z.jsxs)(I, {
      align: `center`,
      gap: `3`,
      children: [
        (0, Z.jsx)(I, {
          flexShrink: `0`,
          width: a,
          height: a,
          align: `center`,
          justify: `center`,
          style: {
            border: `1px solid ${n.name_color ? `#${n.name_color}` : `var(--color-dull-8)`}`,
            background: n.background_color ? `#${n.background_color}` : void 0,
          },
          children: (0, Z.jsx)(`img`, {
            src: i,
            alt: n.name,
            style: { maxWidth: `100%`, maxHeight: `100%` },
          }),
        }),
        (0, Z.jsxs)(I, {
          direction: `column`,
          gap: `2`,
          minWidth: `0`,
          children: [
            (0, Z.jsx)(_t.Name, { size: `5` }),
            (0, Z.jsx)(_t.GameInfo, {}),
          ],
        }),
      ],
    }),
  });
}
function Ni(e) {
  let { inPlace: t, holdDays: n, holdReason: r } = e,
    i = () => window.ShowEscrowExplanationDialog?.(!0),
    a = null;
  return (
    r === `no2fa` || r === `recently_activated`
      ? (a = d.Localize(`#SellDialog_WarningOnHoldUser`, 7))
      : r === `recently_transferred` &&
        (a = d.Localize(`#SellDialog_WarningOnHoldForTransfer`)),
    (0, Z.jsxs)(I, {
      direction: `column`,
      gap: `2`,
      background: `dull-5`,
      padding: `3`,
      children: [
        (0, Z.jsx)(R, {
          size: `3`,
          color: `text-warning`,
          children: d.Localize(
            t ? `#SellDialog_Warning_InPlace` : `#SellDialog_Warning`,
          ),
        }),
        n > 0 &&
          (0, Z.jsxs)(I, {
            direction: `column`,
            gap: `1`,
            children: [
              (0, Z.jsx)(R, {
                size: `3`,
                color: `text-warning`,
                children: d.Localize(`#SellDialog_WarningOnHoldForDays`, n),
              }),
              a &&
                (0, Z.jsx)(R, {
                  size: `3`,
                  color: `text-warning`,
                  children: a,
                }),
              (0, Z.jsx)(z, {
                children: (0, Z.jsx)(s, {
                  size: `3`,
                  onClick: i,
                  children: d.Localize(`#SellDialog_WarningOnHoldRemove`),
                }),
              }),
            ],
          }),
      ],
    })
  );
}
function Pi(e) {
  let { appid: t, hashName: n, currency: r } = e,
    a = Qe({ initial: `200px`, sm: `240px` }),
    o = i({
      queryKey: [`inventory`, `sellpricehistory`, t, n],
      queryFn: async () => {
        let e = new URLSearchParams({
            raw: `1`,
            appid: t.toString(),
            market_hash_name: n,
          }),
          r = await (
            await fetch(
              `${at.COMMUNITY_BASE_URL}market/pricehistory/?${e.toString()}`,
              { credentials: `include` },
            )
          ).json();
        if (!r?.success) throw Error(`Price history unavailable`);
        return { ecurrency: r.ecurrency, prices: r.prices ?? [] };
      },
      staleTime: 1 / 0,
      retry: !1,
    });
  if (o.isPending)
    return (0, Z.jsx)(I, {
      align: `center`,
      justify: `center`,
      minHeight: `calc( ${a} + 60px )`,
      children: (0, Z.jsx)(it, { size: `5` }),
    });
  let s = o.data ?? { ecurrency: r, prices: [] };
  return (0, Z.jsx)(Ar, { priceHistory: s, height: a });
}
function Fi(e, t, n) {
  let { data: r } = i(ht(e, t, n));
  return r?.lowest_price || void 0;
}
function Ii(e) {
  let { value: t, available: n, editable: r, onChange: i } = e;
  return (0, Z.jsxs)(I, {
    align: `center`,
    gap: `2`,
    children: [
      (0, Z.jsx)(R, {
        size: `3`,
        weight: `heavy`,
        whiteSpace: `nowrap`,
        children: d.Localize(`#SellDialog_Quantity`),
      }),
      (0, Z.jsx)(z, {
        width: `8ch`,
        children: (0, Z.jsx)(u, {
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
      (0, Z.jsx)(R, {
        size: `3`,
        contrast: `description`,
        whiteSpace: `nowrap`,
        children: d.Localize(`#SellDialog_QuantityAvailable`, n),
      }),
    ],
  });
}
function Li(e) {
  let { result: t } = e,
    n = t.needs_mobile_confirmation
      ? `${d.Localize(`#SellDialog_MobileConfirmation`)}\n\n${d.Localize(`#SellDialog_MobileConfirmation_CheckVersion`)}`
      : d.Localize(`#SellDialog_EmailConfirmation`, t.email_domain ?? ``);
  return (0, Z.jsx)(zi, { type: `warning`, children: n });
}
function Ri(e) {
  let { message: t, prices: n, children: r } = e,
    i = (0, K.useRef)(t);
  return (
    t && (i.current = t),
    (0, Z.jsxs)(I, {
      direction: `column`,
      paddingTop: `3`,
      children: [
        n,
        (0, Z.jsx)(Ze, {
          visible: !!t,
          children: (0, Z.jsx)(I, {
            justify: `center`,
            paddingTop: `4`,
            children: i.current,
          }),
        }),
        (0, Z.jsx)(z, { paddingTop: `4`, children: r }),
      ],
    })
  );
}
function zi(e) {
  let { children: t, type: n } = e;
  return n == `warning`
    ? (0, Z.jsx)(ai, { type: `warning`, children: t })
    : (0, Z.jsx)(z, {
        radius: `sm`,
        background: `red-3`,
        outline: `red-5`,
        padding: { initial: `3`, sm: `5` },
        width: `100%`,
        children: (0, Z.jsx)(R, {
          as: `div`,
          size: `3`,
          align: `center`,
          color: `red-10`,
          whiteSpace: `pre-wrap`,
          children: t,
        }),
      });
}
function Bi(e) {
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
    f = Ie(t),
    p = !ct(`sm`),
    h = (0, K.useRef)(n);
  n != null && (h.current = n);
  let g = (0, Z.jsx)(R, {
      size: `3`,
      weight: `heavy`,
      whiteSpace: `nowrap`,
      children: d.Localize(`#RepriceListing_Dialog_BuyerPays`),
    }),
    _ = (0, Z.jsx)(ii, {
      currency: f,
      value: r,
      defaultValue: 0,
      editable: !!a,
      onValueChange: a,
      wide: !0,
      placeholder: 0,
    }),
    v = (0, Z.jsx)(R, {
      size: `3`,
      weight: `heavy`,
      whiteSpace: `nowrap`,
      children: d.Localize(`#RepriceListing_Dialog_YouReceive`),
    }),
    y = (0, Z.jsx)(ii, {
      currency: f,
      value: i,
      defaultValue: 0,
      editable: !!o,
      onValueChange: o,
      status: s,
      inputRef: c,
      wide: !0,
      placeholder: 0,
    });
  return (0, Z.jsxs)(I, {
    direction: `column`,
    gap: `2`,
    align: p ? `stretch` : `center`,
    children: [
      (0, Z.jsxs)(I, {
        align: `center`,
        justify: `center`,
        gap: p ? `3` : `5`,
        wrap: `wrap`,
        children: [
          l,
          p
            ? (0, Z.jsxs)(m, {
                columns: `max-content minmax( 0, 1fr )`,
                gap: `2`,
                alignItems: `center`,
                width: `100%`,
                children: [g, _, v, y],
              })
            : (0, Z.jsxs)(I, {
                align: `center`,
                gap: `5`,
                children: [
                  (0, Z.jsxs)(I, {
                    align: `center`,
                    gap: `2`,
                    children: [g, _],
                  }),
                  (0, Z.jsxs)(I, {
                    align: `center`,
                    gap: `2`,
                    children: [v, y],
                  }),
                ],
              }),
        ],
      }),
      (0, Z.jsx)(Ze, {
        visible: n != null,
        children: (0, Z.jsxs)(I, {
          align: `center`,
          justify: `center`,
          gap: `2`,
          children: [
            (0, Z.jsx)(R, {
              size: `3`,
              contrast: `description`,
              whiteSpace: `nowrap`,
              children: d.Localize(`#ManageListing_Dialog_MarketLow`),
            }),
            (0, Z.jsx)(R, {
              size: `3`,
              contrast: `description`,
              whiteSpace: `nowrap`,
              children: h.current,
            }),
          ],
        }),
      }),
      u,
    ],
  });
}
async function Vi(e) {
  let t = new URLSearchParams({
      sessionid: lt(),
      appid: e.appid.toString(),
      contextid: e.contextid,
      assetid: e.assetid,
      amount: e.amount.toString(),
      price: e.price.toString(),
    }),
    n = await fetch(`${at.COMMUNITY_BASE_URL}market/sellitem/`, {
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
export { Di as default };
