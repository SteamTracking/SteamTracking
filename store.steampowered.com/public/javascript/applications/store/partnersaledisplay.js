/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import {
  At as t,
  Ft as n,
  It as r,
  Ot as i,
  U as a,
  c as o,
  ct as s,
  dt as c,
  et as l,
  kt as u,
  l as d,
  z as f,
} from "./chunk~01cfc309bf.js";
import {
  An as p,
  D as m,
  E as h,
  In as g,
  Ln as _,
  Lt as v,
  Nn as y,
  O as b,
  On as x,
  P as S,
  Ut as ee,
  Vt as te,
  Xt as C,
  _n as ne,
  bn as re,
  hn as ie,
  jn as ae,
  k as w,
  nn as oe,
  q as se,
  rn as ce,
  wn as le,
  yn as ue,
} from "./chunk~6b8ddcaac8.js";
import {
  T as de,
  V as fe,
  W as pe,
  at as T,
  ot as me,
  st as E,
  v as he,
} from "./chunk~f57d770d64.js";
import {
  $ as ge,
  Dt as _e,
  F as ve,
  St as ye,
  Tt as be,
  X as xe,
  Y as Se,
  Z as Ce,
  a as we,
  b as Te,
  c as Ee,
  d as De,
  et as Oe,
  it as ke,
  l as D,
  n as Ae,
  nt as je,
  o as Me,
  r as Ne,
  rt as Pe,
  s as Fe,
  t as Ie,
  u as Le,
  v as Re,
} from "./chunk~2185942436.js";
import { c as ze, i as Be } from "./chunk~4eed35ad1f.js";
import { t as Ve } from "./chunk~f0141d9521.js";
import { Bt as He, a as Ue, yt as We } from "./chunk~cf3721cc1c.js";
import { n as Ge } from "./chunk~16aefcf65f.js";
import "./chunk~8681f5c764.js";
import { i as Ke } from "./chunk~2f085f1384.js";
import { a as qe, o as Je } from "./chunk~af36c62e9f.js";
import { t as O } from "./chunk~eefd71512b.js";
import {
  E as Ye,
  M as Xe,
  N as Ze,
  f as k,
  n as Qe,
  p as $e,
  t as et,
  u as tt,
  v as nt,
  y as rt,
} from "./chunk~2f8c67b4de.js";
import { l as it } from "./chunk~7b4b9eb713.js";
import { a as at, i as ot, r as st, t as ct } from "./chunk~91ae5e1167.js";
import { o as lt, s as ut } from "./chunk~95ecbf576c.js";
import { a as dt } from "./chunk~5a091db425.js";
import { n as ft, r as pt } from "./chunk~e70aabe4d7.js";
import { n as mt, t as ht } from "./chunk~710e3cfd2f.js";
import { O as gt } from "./chunk~b8ca037aae.js";
import { r as _t } from "./chunk~a243b6a34b.js";
import {
  a as vt,
  c as yt,
  f as bt,
  h as xt,
  i as St,
  l as Ct,
  m as wt,
  n as Tt,
  p as A,
  r as Et,
  s as Dt,
  u as Ot,
} from "./chunk~0be5d7b286.js";
import { a as kt, n as At } from "./chunk~a7c5e71e12.js";
import { t as jt } from "./chunk~e60a8972cb.js";
import { n as Mt } from "./chunk~fc8a9e4879.js";
import {
  $y as Nt,
  AS as Pt,
  Ar as Ft,
  Bx as It,
  Gu as Lt,
  Hn as j,
  IS as Rt,
  Ib as M,
  In as N,
  Jr as zt,
  Ll as P,
  Ln as Bt,
  Lr as Vt,
  Ol as Ht,
  Or as Ut,
  Pc as F,
  Ru as Wt,
  TS as I,
  Vc as Gt,
  Vn as Kt,
  Vx as L,
  Wi as qt,
  Xr as Jt,
  Xu as Yt,
  Yb as Xt,
  Zy as R,
  _i as Zt,
  _x as Qt,
  a as $t,
  bx as en,
  cS as tn,
  eS as nn,
  eb as rn,
  ex as an,
  fr as z,
  hs as on,
  ib as B,
  id as sn,
  jc as cn,
  ko as ln,
  lS as V,
  lb as un,
  ll as dn,
  lx as fn,
  nl as pn,
  ol as H,
  pr as U,
  qb as mn,
  rr as W,
  rx as hn,
  sS as gn,
  t as _n,
  tu as vn,
  vl as yn,
  vr as G,
  vx as K,
  xr as bn,
  yn as q,
  zx as xn,
} from "./main.js";
import { n as Sn, t as Cn } from "./chunk~ec644f97c6.js";
import { t as wn } from "./chunk~cf8a297cc4.js";
var J = e(r(), 1);
function Tn([e, t, n]) {
  let r = Math.max(e, t, n),
    i = Math.min(e, t, n),
    a = r,
    o,
    s;
  if (r !== 0) s = (r - i) / r;
  else return ((s = 0), (o = 0), [o, s, a]);
  if (s === 0) o = 0;
  else {
    let a = r - i;
    ((o = e === r ? (t - n) / a : t === r ? 2 + (n - e) / a : 4 + (e - t) / a),
      (o *= 60),
      o < 0 && (o += 360));
  }
  return [o, s, a];
}
function En([e, t, n]) {
  if (t === 0) return [n, n, n];
  ((e = ((e % 360) + 360) % 360), (e /= 60));
  let r = Math.floor(e),
    i = e - r,
    a = n * (1 - t),
    o = n * (1 - t * i),
    s = n * (1 - t * (1 - i));
  switch (r) {
    case 0:
      return [n, s, a];
    case 1:
      return [o, n, a];
    case 2:
      return [a, n, s];
    case 3:
      return [a, o, n];
    case 4:
      return [s, a, n];
    case 5:
      return [n, a, o];
    default:
      return [0, 0, 0];
  }
}
function Dn(e) {
  if (
    typeof e == `string` &&
    (e.startsWith(`#`) && (e = e.substring(1)),
    e.length == 6 && (e += `FF`),
    e.match(/^[0-9a-fA-F]{8}$/))
  )
    return {
      r: parseInt(e.substring(0, 2), 16),
      g: parseInt(e.substring(2, 4), 16),
      b: parseInt(e.substring(4, 6), 16),
      a: parseInt(e.substring(6, 8), 16) / 255,
    };
}
function On(e) {
  if (e == null) return;
  let t = (e) => Math.round(e).toString(16).padStart(2, `0`),
    n = `#`;
  return (
    (n += t(e.r)),
    (n += t(e.g)),
    (n += t(e.b)),
    e.a != 1 && (n += t(e.a * 255)),
    n
  );
}
function kn(e) {
  if (e == null) return;
  let t = { r: e.r / 255, g: e.g / 255, b: e.b / 255 },
    n = Math.min(t.r, t.g, t.b),
    r = Math.max(t.r, t.g, t.b),
    i = r - n,
    a = (n + r) / 2,
    o;
  o = i == 0 ? 0 : i / (1 - Math.abs(2 * a - 1));
  let s = 0;
  return (
    i == 0
      ? (s = 0)
      : r == t.r
        ? (s = ((t.g - t.b) / i) % 6)
        : r == t.g
          ? (s = 2 + (t.b - t.r) / i)
          : r == t.b && (s = 4 + (t.r - t.g) / i),
    (s *= 60),
    s < 0 && (s += 360),
    { h: s, s: o, l: a, a: e.a }
  );
}
function An(e) {
  let t = Tn([e.r / 255, e.g / 255, e.b / 255]);
  return { h: t[0], s: t[1], v: t[2], a: e.a };
}
function jn(e) {
  let t = En([e.h, e.s, e.v]);
  return { r: t[0] * 255, g: t[1] * 255, b: t[2] * 255, a: e.a };
}
var Mn = [`hex`, `rgb`, `hsl`];
function Y(e) {
  return Math.round(e * 100) / 100;
}
function Nn(e) {
  let { r: t, g: n, b: r, a: i } = jn(e);
  return { r: Math.round(t), g: Math.round(n), b: Math.round(r), a: i };
}
function Pn(e, t) {
  let { r: n, g: r, b: i, a } = e,
    o = a >= 1;
  switch (t) {
    case `hex`:
      return On(e);
    case `rgb`:
      return o ? `rgb(${n}, ${r}, ${i})` : `rgba(${n}, ${r}, ${i}, ${Y(a)})`;
    case `hsl`: {
      let { h: t, s: n, l: r } = kn(e),
        i = `${Math.round(t)}, ${Math.round(n * 100)}%, ${Math.round(r * 100)}%`;
      return o ? `hsl(${i})` : `hsla(${i}, ${Y(a)})`;
    }
  }
}
function Fn(e) {
  return `rgba(${e.r}, ${e.g}, ${e.b}, ${Y(e.a)})`;
}
function In(e) {
  let t = /^#?([0-9a-f]{3,4})$/i.exec(e)?.[1],
    n = Dn(t ? t.replace(/./g, `$&$&`) : e);
  return n && { ...n, a: Y(n.a) };
}
function Ln(e) {
  let t =
    /^rgba?\(\s*([\d.]+)[\s,]+([\d.]+)[\s,]+([\d.]+)\s*(?:[,/]\s*([\d.]+)(%?)\s*)?\)$/i.exec(
      e,
    );
  if (!t) return;
  let [, n, r, i, a, o] = t,
    s = a === void 0 ? 1 : parseFloat(a);
  return (
    o && (s /= 100),
    {
      r: L(Math.round(parseFloat(n)), 0, 255),
      g: L(Math.round(parseFloat(r)), 0, 255),
      b: L(Math.round(parseFloat(i)), 0, 255),
      a: L(s, 0, 1),
    }
  );
}
var Rn;
function zn(e) {
  if (typeof CSS > `u` || !CSS.supports(`color`, e)) return;
  if (Rn === void 0) {
    let e = document.createElement(`canvas`);
    ((e.width = e.height = 1),
      (Rn = e.getContext(`2d`, { willReadFrequently: !0 })));
  }
  let t = Rn;
  if (!t) return;
  (t.clearRect(0, 0, 1, 1),
    (t.fillStyle = `#000000`),
    (t.fillStyle = e),
    t.fillRect(0, 0, 1, 1));
  let [n, r, i, a] = t.getImageData(0, 0, 1, 1).data;
  return { r: n, g: r, b: i, a: Y(a / 255) };
}
function Bn(e) {
  let t = e?.trim();
  if (t) return In(t) ?? Ln(t) ?? zn(t);
}
var Vn = `FcfcNn7MYQM-`,
  Hn = `mBPBMKMRyFc-`,
  Un = `Wi9Z0cIQBJQ-`,
  Wn = `CG-aPa5ETcg-`,
  Gn = `XqWa8m4TS-o-`,
  Kn = `CT-fGhlJtb8-`,
  qn = `_-1iQ2DUgeIw-`,
  Jn = `_6empc5TVW6c-`,
  Yn = `X3PwdzXulJQ-`,
  Xn = `_362FAsYdx9w-`,
  Zn = `f8RIg1qa2ts-`,
  Qn = `IzorRe2k8io-`,
  $n = `qWqNnw1hGLY-`,
  er = `xVJaIlx-dnY-`,
  tr = `GOiXAHGmWGg-`,
  nr = `CJ0nwSBwrpE-`,
  rr = `pS4NM2hdvRk-`,
  ir = `VSND6o6qGDA-`,
  X = c(),
  ar =
    `#000000.#1b1b1b.#333333.#4d4d4d.#666666.#808080.#999999.#b3b3b3.#d9d9d9.#ffffff.#e53935.#fb8c00.#fdd835.#7cb342.#43a047.#00897b.#00acc1.#1e88e5.#8e24aa.#d81b60.#ef9a9a.#ffcc80.#fff59d.#c5e1a5.#a5d6a7.#80cbc4.#80deea.#90caf9.#ce93d8.#f48fb1.#b71c1c.#e65100.#f57f17.#33691e.#1b5e20.#004d40.#006064.#0d47a1.#4a148c.#880e4f`.split(
      `.`,
    ),
  or = `rgba(255, 255, 255, 1)`,
  sr = `SharedColorPicker_Format`,
  cr = `ColorPickerSampling`,
  lr = 0.01,
  ur = 0.1;
function dr(e) {
  let {
      color: t,
      onChange: n,
      strTitle: r,
      disableAlpha: i,
      onSubmit: a,
      children: o,
    } = e,
    [s, c] = (0, J.useState)(() => pr(t, i)),
    l = (0, J.useRef)(void 0);
  (0, J.useEffect)(() => {
    let e = Bn(t);
    !e || (l.current && fr(e, l.current, i)) || c((e) => Z(t, e.h, i) ?? e);
  }, [t, i]);
  let u = (0, J.useCallback)(
      (e) => {
        let t = i ? { ...e, a: 1 } : e;
        c(t);
        let r = Nn(t);
        ((l.current = r), n(Fn(r)));
      },
      [i, n],
    ),
    d = Nn(s),
    f = Pn({ ...d, a: 1 }, `hex`),
    p = Fn(d);
  return (0, X.jsxs)(`div`, {
    className: F(Vn, `noOpinionatedGlobalStyles`),
    style: {
      "--colorpicker-hue": `hsl( ${s.h}deg 100% 50% )`,
      "--colorpicker-opaque": f,
      "--colorpicker-current": p,
    },
    children: [
      !!r && (0, X.jsx)(`div`, { className: `GEaX-EfeXNg-`, children: r }),
      (0, X.jsx)(gr, { hsva: s, fnSetColor: u }),
      (0, X.jsx)(_r, {
        className: Kn,
        strLabel: M.Localize(`#ColorPicker_Hue`),
        nMax: 360,
        nValue: Math.round(s.h),
        strValueText: `${Math.round(s.h)}°`,
        fnSetValue: (e) => u({ ...s, h: e }),
      }),
      !i &&
        (0, X.jsx)(_r, {
          className: `xV4lUfTUFc4-`,
          strLabel: M.Localize(`#ColorPicker_Opacity`),
          nMax: 100,
          nValue: Math.round(s.a * 100),
          strValueText: `${Math.round(s.a * 100)}%`,
          fnSetValue: (e) => u({ ...s, a: e / 100 }),
        }),
      (0, X.jsx)(vr, { hsva: s, disableAlpha: i, fnSetColor: u, onSubmit: a }),
      (0, X.jsx)(br, {
        strCurrentHex: f,
        bOpaque: d.a >= 1,
        fnPick: (e) => {
          let t = Z(e, s.h, i);
          t && u(t);
        },
      }),
      o,
    ],
  });
}
function fr(e, t, n) {
  return (
    e.r === t.r &&
    e.g === t.g &&
    e.b === t.b &&
    (n || Math.abs(e.a - t.a) < 0.01)
  );
}
function pr(e, t) {
  return Z(e, 0, t) ?? Z(or, 0, t);
}
function Z(e, t, n) {
  let r = Bn(e);
  if (!r) return;
  let i = An(n ? { ...r, a: 1 } : r);
  return i.s === 0 || i.v === 0 ? { ...i, h: t } : i;
}
function mr(e) {
  let t = (t) => {
    let n = t.currentTarget.getBoundingClientRect(),
      r = n.width ? (t.clientX - n.left) / n.width : 0,
      i = n.height ? (t.clientY - n.top) / n.height : 0;
    e(L(r, 0, 1), L(i, 0, 1));
  };
  return {
    onPointerDown: (e) => {
      e.button === 0 &&
        (e.preventDefault(),
        e.currentTarget.setPointerCapture(e.pointerId),
        e.currentTarget.focus(),
        t(e));
    },
    onPointerMove: (e) => {
      e.currentTarget.hasPointerCapture(e.pointerId) && t(e);
    },
  };
}
function hr(e, t, n) {
  let r = e.shiftKey ? ur : lr;
  if (e.key === t) return r;
  if (e.key === n) return -r;
}
function gr(e) {
  let { hsva: t, fnSetColor: n } = e,
    r = mr((e, r) => n({ ...t, s: e, v: 1 - r }));
  return (0, X.jsx)(`div`, {
    className: Un,
    role: `slider`,
    tabIndex: 0,
    "aria-label": M.Localize(`#ColorPicker_SaturationBrightness`),
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    "aria-valuenow": Math.round(t.v * 100),
    "aria-valuetext": `${Math.round(t.s * 100)}%, ${Math.round(t.v * 100)}%`,
    onKeyDown: (e) => {
      let r = hr(e, `ArrowRight`, `ArrowLeft`),
        i = hr(e, `ArrowUp`, `ArrowDown`);
      (r !== void 0 || i !== void 0) &&
        (e.preventDefault(),
        n({ ...t, s: L(t.s + (r ?? 0), 0, 1), v: L(t.v + (i ?? 0), 0, 1) }));
    },
    ...r,
    children: (0, X.jsx)(`div`, {
      className: Hn,
      style: { left: `${t.s * 100}%`, top: `${(1 - t.v) * 100}%` },
    }),
  });
}
function _r(e) {
  let {
    className: t,
    strLabel: n,
    nMax: r,
    nValue: i,
    strValueText: a,
    fnSetValue: o,
  } = e;
  return (0, X.jsx)(`div`, {
    className: Wn,
    children: (0, X.jsx)(Ge.Root, {
      min: 0,
      max: r,
      value: [i],
      onValueChange: (e) => o(e[0]),
      children: (0, X.jsx)(Ge.Track, {
        render: (0, X.jsx)(`div`, { className: F(Gn, t) }),
        children: (0, X.jsx)(Ge.Handle, {
          render: (e) =>
            (0, X.jsx)(`span`, {
              ...e,
              className: Hn,
              style: { insetInlineStart: `${(i / r) * 100}%` },
              "aria-label": n,
              "aria-valuetext": a,
            }),
        }),
      }),
    }),
  });
}
function vr(e) {
  let { hsva: t, disableAlpha: n, fnSetColor: r, onSubmit: i } = e,
    [a, o] = be(sr),
    s = Mn.find((e) => e === a) ?? `hex`,
    [c, l] = (0, J.useState)(void 0),
    u = Pn(Nn(t), s),
    d = c !== void 0 && c.trim() !== `` && !Bn(c),
    f = (e) => {
      l(e);
      let i = Z(e, t.h, n);
      i && r(i);
    },
    p = (e) => {
      (o(e), l(void 0));
    };
  return (0, X.jsxs)(`div`, {
    className: qn,
    children: [
      (0, X.jsxs)(`div`, {
        className: Jn,
        children: [
          (0, X.jsx)(`div`, { className: Yn, "aria-hidden": !0 }),
          (0, X.jsx)(`input`, {
            className: F(Xn, d && `_5Zk11eFAaLo-`),
            type: `text`,
            spellCheck: !1,
            autoComplete: `off`,
            "aria-label": M.Localize(`#ColorPicker_ColorValue`),
            "aria-invalid": d,
            value: c ?? u,
            onChange: (e) => f(e.currentTarget.value),
            onBlur: () => l(void 0),
            onKeyDown: (e) => {
              e.key === `Enter` && (e.preventDefault(), l(void 0), i?.());
            },
          }),
          (0, X.jsx)(yr, { hsva: t, disableAlpha: n, fnSetColor: r }),
        ],
      }),
      d &&
        (0, X.jsx)(`div`, {
          className: `tHsVe8Ptn-s-`,
          children: M.Localize(`#ColorPicker_InvalidColor`),
        }),
      (0, X.jsx)(`div`, {
        className: Qn,
        role: `radiogroup`,
        children: Mn.map((e) =>
          (0, X.jsx)(
            `button`,
            {
              type: `button`,
              role: `radio`,
              "aria-checked": e === s,
              className: F($n, e === s && `wBwV8sUsuTo-`),
              onClick: () => p(e),
              children: e.toUpperCase(),
            },
            e,
          ),
        ),
      }),
    ],
  });
}
function yr(e) {
  let { hsva: t, disableAlpha: n, fnSetColor: r } = e,
    [i, a] = (0, J.useState)(!1);
  (0, J.useEffect)(() => a(`EyeDropper` in window), []);
  let o = async () => {
    let e = document.documentElement;
    e.classList.add(cr);
    try {
      let e = Z((await new window.EyeDropper().open()).sRGBHex, t.h, n);
      e && r({ ...e, a: t.a });
    } catch (e) {
      console.warn(M.Localize(`#Sale_EyeDropperFailed`), e);
    } finally {
      e.classList.remove(cr);
    }
  };
  if (!i) return null;
  let s = M.Localize(`#Sale_BackgroundColorPicker`);
  return (0, X.jsx)(zt, {
    toolTipContent: s,
    children: (0, X.jsx)(`button`, {
      type: `button`,
      className: Zn,
      "aria-label": s,
      onClick: o,
      children: (0, X.jsx)(Zt, {}),
    }),
  });
}
function br(e) {
  let { strCurrentHex: t, bOpaque: n, fnPick: r } = e;
  return (0, X.jsx)(`div`, {
    className: er,
    role: `group`,
    "aria-label": M.Localize(`#ColorPicker_Palette`),
    children: ar.map((e) => {
      let i = n && e === t;
      return (0, X.jsx)(
        `button`,
        {
          type: `button`,
          className: F(tr, i && `wBwV8sUsuTo-`),
          style: { background: e },
          "aria-label": e,
          "aria-pressed": i,
          title: e,
          onClick: () => r(e),
        },
        e,
      );
    }),
  });
}
var xr = J.createContext(void 0);
function Sr(e) {
  let {
      color: t,
      onChange: n,
      onRequestClose: r,
      disableAlpha: i,
      strTitle: a,
      bLivePreview: o = !0,
      fnRestoreChanges: s,
    } = e,
    c = (0, J.useRef)(null),
    l = (0, J.useRef)(void 0),
    u = (0, J.useRef)(!1),
    d = (0, J.useRef)({
      color: t,
      onChange: n,
      fnRestoreChanges: s,
      bLivePreview: o,
    });
  d.current = { color: t, onChange: n, fnRestoreChanges: s, bLivePreview: o };
  let f = (0, J.useCallback)(
      (e) => {
        ((l.current = e), o && n(e));
      },
      [o, n],
    ),
    p = (0, J.useCallback)(() => {
      ((u.current = !0), !o && l.current !== void 0 && n(l.current), r());
    }, [o, n, r]);
  return (
    (0, J.useEffect)(
      () => () => {
        let e = d.current;
        if (!u.current && e.bLivePreview && l.current !== void 0)
          try {
            (e.onChange(e.color), e.fnRestoreChanges?.());
          } catch (e) {
            console.error(`Color picker: could not undo a previewed color`, e);
          }
      },
      [],
    ),
    (0, J.useEffect)(() => {
      let e = c.current?.ownerDocument ?? document,
        t = (e) => {
          c.current && !c.current.contains(e.target) && r();
        },
        n = (e) => {
          e.key === `Escape` && (e.stopPropagation(), e.preventDefault(), r());
        };
      return (
        e.addEventListener(`pointerdown`, t, !0),
        e.addEventListener(`keydown`, n, !0),
        () => {
          (e.removeEventListener(`pointerdown`, t, !0),
            e.removeEventListener(`keydown`, n, !0));
        }
      );
    }, [r]),
    (0, X.jsx)(`div`, {
      ref: c,
      children: (0, X.jsx)(dr, {
        color: t,
        disableAlpha: i,
        strTitle: a ?? M.Localize(`#Button_Color`),
        onChange: f,
        onSubmit: p,
        children: (0, X.jsxs)(`div`, {
          className: nr,
          children: [
            (0, X.jsx)(`button`, {
              type: `button`,
              className: F(rr, ir),
              onClick: p,
              children: M.Localize(`#Button_Save`),
            }),
            (0, X.jsx)(`button`, {
              type: `button`,
              className: rr,
              onClick: r,
              children: M.Localize(`#Button_Cancel`),
            }),
          ],
        }),
      }),
    })
  );
}
function Cr(e, t, n) {
  let r = t.bLivePreview ?? !0,
    i = r ? n?.fnSnapshot() : void 0,
    a = null,
    o = !1,
    s = (0, X.jsx)(Sr, {
      color: t.color,
      disableAlpha: t.disableAlpha,
      strTitle: t.strTitle,
      onChange: t.onChange,
      bLivePreview: r,
      fnRestoreChanges: i,
      onRequestClose: () => {
        o || ((o = !0), a?.Hide(), t.onClose?.());
      },
    });
  a = (e instanceof HTMLElement, Vt(s, e, { bDisablePopTop: !0 }));
}
function wr() {
  let e = (0, J.useContext)(xr);
  return { openColorPicker: (0, J.useCallback)((t, n) => Cr(t, n, e), [e]) };
}
var Tr = `Vvgd20dCqjc-`;
function Er(e) {
  return (0, X.jsx)(`div`, {
    className: F(Tr, e.bValveOnly && `zt09NDfGU3s-`),
    children: (0, X.jsx)(`div`, { children: e.children }),
  });
}
function Dr(e) {
  let { eventModel: t } = e,
    { data: n } = He(t.clanSteamID.GetAccountID());
  if (!n || (!n.can_edit && !n.support_user) || Xt() == `community`) return;
  let r = t.GetAllTags(),
    i = [];
  if (
    (r.includes(`hide_store`) &&
      i.push(M.Localize(`#Sale_SaleEventIsHidden_Reason_ProductHide`)),
    r.includes(`mod_hide_store`) &&
      n.support_user &&
      i.push(M.Localize(`#Sale_SaleEventIsHidden_Reason_Mod`)),
    !t.BIsVisibleEvent() &&
      r.includes(`contenthub`) &&
      i.push(M.Localize(`#Sale_SaleEventIsHidden_ContentHub_Preview`)),
    !(t.BIsVisibleEvent() && i.length == 0))
  )
    return (0, X.jsxs)(Er, {
      children: [
        !t.BIsVisibleEvent() &&
          (0, X.jsx)(`div`, {
            className: `XZUb9Zq6ctI-`,
            children: M.Localize(`#Sale_SaleEventIsHidden`),
          }),
        i.length > 0 &&
          (0, X.jsxs)(`div`, {
            className: `XZUb9Zq6ctI-`,
            children: [
              M.LocalizePlural(`#Sale_SaleEventIsHidden_Reason`, i.length),
              (0, X.jsx)(`ul`, {
                children: i.map((e) => (0, X.jsx)(`li`, { children: e }, e)),
              }),
            ],
          }),
      ],
    });
}
var Or = `_4rizx-X0oWo-`;
function kr(e) {
  return (
    !e.jsondata.sale_logo_cross_promo_only &&
    (e.jsondata.localized_sale_logo?.filter(Boolean).length ?? 0) > 0
  );
}
function Ar(e) {
  let { eventModel: t, language: n } = e,
    [r, i] = d(() => [
      t.jsondata.sale_logo_url,
      Nt.GetWithFallback(t.jsondata.localized_sale_logo, n),
    ]);
  return i && i?.length > 0
    ? r
      ? (0, X.jsx)(`a`, {
          className: Or,
          href: K.STORE_BASE_URL + r,
          children: (0, X.jsx)(jr, { ...e }),
        })
      : (0, X.jsx)(`div`, {
          className: F(Or, `SalePageLogoCtn`),
          children: (0, X.jsx)(jr, { ...e }),
        })
    : null;
}
function jr(e) {
  let { eventModel: t, language: n } = e,
    r = pt(t, `sale_logo`, n);
  return (0, X.jsx)(`img`, { src: r, alt: `logo` });
}
var Mr = `_1Bceni0-cAw-`;
function Nr(e) {
  let { strURL: t } = e;
  return t
    ? (0, X.jsx)(`div`, {
        className: Mr,
        children: (0, X.jsx)(`img`, { alt: ``, src: t }),
      })
    : null;
}
function Pr(e) {
  let { event: t, bIsPreview: n } = e,
    r = t.jsondata.sale_background_video_webm,
    i = t.jsondata.sale_background_video_mp4;
  return i || r
    ? (0, X.jsx)(H, {
        children: (0, X.jsxs)(`video`, {
          loop: !0,
          muted: !0,
          autoPlay: !0,
          playsInline: !0,
          className: F(
            re,
            _[`CustomStyle_${t.jsondata.sale_vanity_id}`],
            `SaleBackground`,
            g,
          ),
          style: {
            backgroundColor: n ? t.jsondata.sale_background_color : void 0,
          },
          children: [
            r && (0, X.jsx)(`source`, { src: r, type: `video/webm` }),
            i &&
              !K.IN_CLIENT &&
              (0, X.jsx)(`source`, { src: i, type: `video/mp4` }),
          ],
        }),
      })
    : null;
}
function Fr(e) {
  let {
      event: t,
      language: n,
      children: r,
      bIsPreview: i,
      personalizedCarousels: a,
    } = e,
    o = J.useRef(null),
    s = pt(t, `sale_header`, n),
    c = d(() => ft(t, `sale_secondary_background`, n)),
    [l] = d(() => [t.jsondata.sale_sub_menu]);
  J.useEffect(() => {
    if (!s) return;
    let e = new Image();
    ((e.onload = () => {
      let t = (100 * e.width) / 950 + `%`;
      o.current && o.current.style.setProperty(`--background-scale`, t);
    }),
      (e.src = s));
  }, [s]);
  let u = t.jsondata.sale_sections?.some(
      (e) => e.section_type === `contenthubmaincarousel`,
    ),
    f =
      t.jsondata.item_source_type === he.k_EContentHub &&
      ((t.jsondata.sale_vanity_id &&
        t.jsondata.sale_vanity_id.includes(`contenthubsalepage_`)) ||
        u),
    p = s ? `url(${s})` : `none`;
  return (0, X.jsxs)(X.Fragment, {
    children: [
      l
        ? (0, X.jsx)(xe, {
            event: t,
            language: n,
            bIsPreview: i,
            subMenu: l,
            styleVariation: Ce.k_SubMenu,
            personalizedCarousels: a,
          })
        : (0, X.jsx)(Nr, { strURL: s }),
      (0, X.jsx)(`div`, {
        className: F({ SaleBackgroundCtn: !0, ContentHubSalePage: f }),
        children: (0, X.jsxs)(`div`, {
          className: F(
            _[`CustomStyle_${t.jsondata.sale_vanity_id}`],
            `SaleCustomCSS`,
            re,
            `SaleBackground`,
          ),
          style: {
            display: `flex`,
            position: `relative`,
            flexDirection: `column`,
            backgroundColor: t.jsondata.sale_background_color,
          },
          ref: o,
          children: [
            s && t.jsondata.sale_background_repeat == `coverBlur`
              ? (0, X.jsx)(`img`, {
                  className: F(Ye, et, Qe),
                  src: s,
                  alt: `Header`,
                })
              : (0, X.jsx)(`div`, {
                  className: F(Ye, et),
                  style: {
                    backgroundImage: p,
                    backgroundRepeat: t.jsondata.sale_background_repeat,
                  },
                }),
            (0, X.jsx)(Pr, { event: t, bIsPreview: i }),
            c &&
              (0, X.jsx)(`div`, {
                className: F(`I8KIyXU8ZWk-`, `SaleSecondaryBackground`),
                style: {
                  backgroundImage: `url(${c})`,
                  backgroundRepeat:
                    t.jsondata.sale_secondary_background_repeat || `no-repeat`,
                },
              }),
            (0, X.jsx)(X.Fragment, { children: r }),
          ],
        }),
      }),
    ],
  });
}
var Ir = e(n()),
  Lr = e(l());
function Rr(e) {
  let { nSectionID: t, children: n } = e,
    [r, i] = J.useState(!1),
    [a, o] = J.useState(!1);
  J.useEffect(() => {
    ge.Get().SetMouseOverSection(t, r);
  }, [t, r]);
  let s = d(() => ge.Get().GetMouseOverSectionID()),
    c = t && t == s,
    l = () => ge.Get().JumpToSection(t),
    u = J.useRef(null);
  return (
    je((e) => t == e && (u.current?.scrollIntoView(), o(!0), !0)),
    (0, X.jsxs)(`div`, {
      ref: u,
      className: F({ [ae]: !0, [ie]: !!c, [ne]: !!a }),
      onAnimationEnd: () => o(!1),
      onMouseEnter: () => i(!0),
      onMouseLeave: () => i(!1),
      children: [
        r &&
          (0, X.jsx)(zt, {
            toolTipContent: B(`#Sale_SaleEditor_JumpTo_ttip`),
            direction: `top`,
            children: (0, X.jsx)(`button`, {
              className: `BxPO-muNnTI-`,
              onClick: l,
              children: (0, X.jsx)(ln, {}),
            }),
          }),
        n,
      ],
    })
  );
}
var zr = `oj4yraCGjDk-`,
  Br = `oBMBeb6Ow8M-`;
function Vr(e) {
  let { rgPresenters: t } = e;
  if (!t || t.length == 0) return null;
  let n = Pt(K.LANGUAGE);
  return t.length == 1
    ? (0, X.jsx)(`div`, {
        className: F(zr, `PresenterDisclaimer`),
        children: M.LocalizeReact(
          `#SalePresented_By`,
          (0, X.jsx)(Hr, { presentor: t[0], lang: n }),
        ),
      })
    : (0, X.jsx)(`div`, {
        className: F(zr, `PresenterDisclaimer`),
        children: M.LocalizeReact(
          `#SalePresented_By_Multi`,
          t
            .slice(0, t.length - 1)
            .map((e, r) =>
              (0, X.jsxs)(
                J.Fragment,
                {
                  children: [
                    (0, X.jsx)(Hr, { presentor: e, lang: n }),
                    t.length > 2 && `, `,
                  ],
                },
                e.url,
              ),
            ),
          (0, X.jsx)(Hr, { presentor: t[t.length - 1], lang: n }),
        ),
      });
}
function Hr(e) {
  let { presentor: t, lang: n } = e,
    r = sn(t.url);
  return (0, X.jsx)(Ft, {
    href: r,
    bUseLinkFilter: !0,
    className: Br,
    children: Nt.GetWithFallback(t.localized_presenter_name, n),
  });
}
function Ur(e) {
  let t = Pt(hn.LANGUAGE),
    n = ce(t),
    r = [...new Set(e.flatMap((e) => se(e) || []))].join(`,`),
    i = J.useMemo(() => (r ? r.split(`,`) : []), [r]),
    a = s({ queries: i.map((e) => oe(e, t, n)), combine: Wr });
  return J.useCallback(
    (e) => {
      let t = se(e),
        n = t ? i.indexOf(t) : -1;
      return n >= 0 ? a[n] : void 0;
    },
    [i, a],
  );
}
function Wr(e) {
  return e.map((e) => e.data);
}
function Gr(e) {
  let { event: t, broadcastEmbedContext: n } = e,
    r = !!t?.jsondata?.broadcast_display_wide_player,
    i = !!t?.jsondata?.broadcast_dispaly_wide_player_allow_chat;
  return (0, X.jsx)(X.Fragment, {
    children:
      !!(
        t.BEventCanShowBroadcastWidget() && t.BSaleShowBroadcastAtTopOfPage()
      ) &&
      (0, X.jsx)(De, {
        event: t,
        broadcastEmbedContext: n,
        bWideBroadcastDisplay: r,
        bWideBroadcastPermitChat: i,
      }),
  });
}
var Kr = `Fh-jFuR9Yvo-`,
  qr = `_4rNPfhfRBrc-`,
  Jr = `Bc2anSpsdzg-`,
  Yr = `HxVKtqJLU2k-`,
  Xr = `_4oPueAzMcGE-`,
  Zr = `kqyJu6iojzM-`,
  Qr = `UhkkMgNIeQo-`,
  $r = `YSYpQ5wCRA0-`,
  ei = `gOxlo3KMChI-`,
  ti = `WUODlv8V5dM-`,
  ni = `_7grqK8KjlHk-`;
function ri(e, t) {
  return e ? (t ? !!e.valve_admin : !!(e.valve_admin || e.support_user)) : !1;
}
function ii(e, t) {
  let n = !!(e && e.BIsClanAccount()),
    { data: r } = He(n ? e.GetAccountID() : 0);
  return n && ri(r, t);
}
function ai(e) {
  let { clanSteamID: t, id: n } = e;
  return ii(t, e.requireAdmin)
    ? (0, X.jsx)(`div`, {
        id: n,
        className: F(e.className, e.requireAdmin ? Xe : Ze),
        children: e.children,
      })
    : null;
}
var oi = 12,
  si = 240;
function ci(e) {
  let { event: t } = e,
    [n] = _e(pe, void 0),
    [r, i] = J.useState(!1),
    a = fn(`rgMLRecommenderWishlist`, `application_config`),
    o = Array.isArray(a) && a.length > 0 && Number.isInteger(a[0]);
  return !t.BIsNextFest() || !o || n == fe.Random || de(t) > 0
    ? null
    : (0, X.jsxs)(ai, {
        clanSteamID: t.clanSteamID,
        className: Kr,
        children: [
          (0, X.jsxs)(yn, {
            className: qr,
            onClick: () => i(!r),
            children: [r ? `▼` : `▶`, ` Next Fest personalized order (VO)`],
          }),
          r && (0, X.jsx)(li, { event: t, rgRecommendedAppIDs: a }),
        ],
      });
}
function li(e) {
  let { event: t, rgRecommendedAppIDs: n } = e,
    [r, i] = J.useState(void 0);
  kt(n, _t);
  let [a, o] = J.useState(void 0),
    [s, c] = J.useState(``),
    l = t.jsondata.sale_ml_recommender_weight_exponent || 2.5,
    u = parseFloat(s),
    d = a ?? Ee(t),
    f = u || l,
    p = J.useMemo(() => Fe(n, n, (e) => e, d, f), [n, d, f]),
    m = J.useMemo(() => new Map(n.map((e, t) => [e, t])), [n]),
    h = J.useMemo(() => new Map(p.map((e, t) => [e, t])), [p]),
    g = n.length,
    _ = (e) => m.get(e) ?? 0,
    v = (e) => h.get(e) ?? 0,
    y = (e) => vn.Get().GetApp(e)?.GetName() ?? `App ${e}`,
    b = (e) => `hsl(${Math.round((240 * _(e)) / g)}, 80%, 65%)`,
    x = (e, t) =>
      (0, X.jsx)(
        `div`,
        {
          className: F(ni, r == e && `It6LJnFk-X8-`),
          style: { height: oi, color: b(e) },
          title: `${y(e)} (${e}): recommended #${_(e) + 1}, shuffled to #${v(e) + 1}`,
          onMouseEnter: () => i(e),
          children: t,
        },
        e,
      ),
    S = (e, t) =>
      (0, X.jsx)(
        `line`,
        {
          x1: 0,
          y1: (_(e) + 0.5) * oi,
          x2: si,
          y2: (v(e) + 0.5) * oi,
          stroke: t ? `white` : b(e),
          strokeWidth: t ? 2 : 1,
          strokeOpacity: t ? 1 : r === void 0 ? 0.6 : 0.15,
        },
        e,
      );
  return (0, X.jsxs)(`div`, {
    className: Jr,
    children: [
      (0, X.jsxs)(`div`, {
        className: Yr,
        children: [
          g,
          ` recommendations, exponent `,
          f,
          f < 0 && ` (shuffle disabled)`,
          `, seed `,
          d,
          `. Apps that aren't recommended are placed after these in a uniform random order. Each section shows the apps it contains in this same relative order. Hover a row to highlight it.`,
        ],
      }),
      (0, X.jsxs)(`div`, {
        className: Xr,
        children: [
          (0, X.jsx)(z, {
            className: Zr,
            onClick: () => o(xn()),
            children: `Reshuffle`,
          }),
          (0, X.jsxs)(`label`, {
            children: [
              `Exponent`,
              ` `,
              (0, X.jsx)(`input`, {
                type: `number`,
                min: -1,
                step: 0.1,
                className: Qr,
                placeholder: String(l),
                value: s,
                onChange: (e) => c(e.target.value),
              }),
            ],
          }),
          (a !== void 0 || s != ``) &&
            (0, X.jsx)(z, {
              className: `kqyJu6iojzM-`,
              onClick: () => {
                (o(void 0), c(``));
              },
              children: `Reset to page's order`,
            }),
          (0, X.jsx)(`span`, {
            children: `Only affects this chart, not the page`,
          }),
        ],
      }),
      (0, X.jsxs)(`div`, {
        className: $r,
        onMouseLeave: () => i(void 0),
        children: [
          (0, X.jsxs)(`div`, {
            className: ei,
            children: [
              (0, X.jsx)(`div`, {
                className: ti,
                children: `Recommended order`,
              }),
              n.map((e, t) => x(e, `#${t + 1} ${y(e)}`)),
            ],
          }),
          (0, X.jsxs)(`div`, {
            className: ei,
            children: [
              (0, X.jsx)(`div`, { className: ti, children: `\xA0` }),
              (0, X.jsxs)(`svg`, {
                width: si,
                height: g * oi,
                children: [
                  n.filter((e) => e != r).map((e) => S(e, !1)),
                  r !== void 0 && m.has(r) && S(r, !0),
                ],
              }),
            ],
          }),
          (0, X.jsxs)(`div`, {
            className: ei,
            children: [
              (0, X.jsx)(`div`, { className: ti, children: `Shuffled order` }),
              p.map((e) => x(e, `#${_(e) + 1} ${y(e)}`)),
            ],
          }),
        ],
      }),
    ],
  });
}
function ui(e) {
  let { event: t, fnOnChangeDayIndex: n, addtionalAdminButtons: r } = e;
  return (0, X.jsxs)(X.Fragment, {
    children: [
      (0, X.jsx)(ci, { event: t }),
      (0, X.jsx)(jt, {
        eventModel: t,
        fnOnUpdateSaleDayIndex: n,
        addtionalAdminButtons: r,
        bSupportsSticky: !0,
      }),
    ],
  });
}
var di = new Map();
function fi(e, t) {
  let n = e.findIndex((e) => e.section_type === `tabs`);
  if (n >= 0 && t !== void 0) {
    let r = e[n],
      i = r.tabs?.findIndex((e) => e.unique_id === t);
    if (i !== void 0 && i >= 0 && r.tabs)
      return {
        selectedTabBackgroundDef: r.tabs[i].tab_background_img_groups,
        nTabSaleSectionIndex: n,
      };
  }
  return { selectedTabBackgroundDef: void 0, nTabSaleSectionIndex: void 0 };
}
function pi(e, t, n) {
  let r = new Map(),
    i = new Map(),
    a = new Map(),
    o,
    s,
    c = 0,
    { selectedTabBackgroundDef: l, nTabSaleSectionIndex: u } = fi(t, n);
  if (e?.enabled) {
    let d = e.groups?.length;
    if (
      (e.groups?.forEach((n, o) => {
        if (c >= t.length || t[c].section_type == `tabs`) return;
        let s = [];
        for (
          let e = 0;
          e < (n?.num_sections || 0) &&
          c < t.length &&
          t[c].section_type != `tabs`;
          ++e, ++c
        ) {
          let r = t[c].unique_id;
          (s.push(r),
            i.set(r, n.background_id),
            e === 0 && a.set(r, n.background_id));
        }
        if (
          (r.set(n.background_id, {
            nBackgroundGroupID: n.background_id,
            sectionUniqueIDs: s,
            nSaleSectionLastIndex: c - 1,
            nUniqueIDNextSaleSection:
              c < t.length && (u === void 0 || c < u) ? t[c].unique_id : void 0,
          }),
          o + 1 == d && e.last_group_until_cover_section_until_end)
        )
          for (
            let e = c;
            e < t.length &&
            (!l || !l.enabled || e < u) &&
            !(t[e].section_type == `tabs` && l?.enabled);
            ++e
          ) {
            let r = t[e].unique_id;
            i.set(r, n.background_id);
          }
      }),
      c < t.length && (u === void 0 || c < u) && (o = t[c].unique_id),
      l?.enabled && u !== void 0)
    ) {
      let e = u,
        o = l.groups.length;
      for (
        l.groups.forEach((s, c) => {
          if (e >= t.length) return;
          let u = [];
          for (let r = 0; r < s.num_sections && e < t.length; ++r, ++e) {
            let o = t[e],
              c = o.unique_id;
            gt(n, o)
              ? (u.push(c),
                i.set(c, s.background_id),
                r === 0 && a.set(c, s.background_id))
              : --r;
          }
          let d = e;
          for (; d < t.length && !gt(n, t[d]);) d += 1;
          if (
            (r.set(s.background_id, {
              nBackgroundGroupID: s.background_id,
              sectionUniqueIDs: u,
              nSaleSectionLastIndex: e - 1,
              nUniqueIDNextSaleSection: d < t.length ? t[d].unique_id : void 0,
            }),
            c + 1 == o && l.last_group_until_cover_section_until_end)
          )
            for (let r = e; r < t.length; ++r) {
              let e = t[r];
              if (e.section_type == `tabs` && l?.enabled) break;
              gt(n, e) && i.set(e.unique_id, s.background_id);
            }
        });
        e < t.length && !gt(n, t[e]);
      )
        e++;
      e < t.length && (s = t[e].unique_id);
    }
  } else t?.length > 0 && (o = t[0].unique_id);
  return {
    mapGroupToSections: r,
    nFirstSaleSectionIDWithoutGroup: o,
    mapSectionToGroup: i,
    mapFirstSectionToGroup: a,
    selectedTabBackgroundDef: l,
    nTabSaleSectionIndex: u,
    nFirstTabSectionIDWithoutGroup: s,
  };
}
function mi(e, t, n, r) {
  let i = e.jsondata.sale_background_img_groups.groups.find(
    (e) => e.background_id === t.groupID,
  );
  return (
    !i &&
      r >= 0 &&
      (i = e
        .GetSaleSectionFirstMatchByType(`tabs`)
        ?.tabs?.find((e) => e.unique_id == r)
        ?.tab_background_img_groups?.groups?.find(
          (e) => e.background_id == t.groupID,
        )),
    (0, X.jsx)(
      gi,
      {
        eventModel: e,
        displayDef: i,
        derivedGroupInfo: t.derivedGroupInfo,
        children:
          i && i.randomize_section_order && n !== D.EPreviewMode_EditBackground
            ? (0, X.jsx)(hi, {
                clanEventGID: e.GID,
                elSaleSections: t.elSaleSections,
              })
            : t.elSaleSections,
      },
      `background_group_` + t.groupID,
    )
  );
}
function hi(e) {
  let { clanEventGID: t, elSaleSections: n } = e,
    [r, i] = be(`sale_section_seed_${t}`, xn());
  if (!n || n.length === 0) return null;
  if (n.length > 1 && r !== void 0) {
    let e = It(r);
    return (0, X.jsx)(X.Fragment, { children: tn(n, 0, e) });
  }
  return (0, X.jsx)(X.Fragment, { children: n });
}
function gi(e) {
  let { displayDef: t, children: n, eventModel: r, derivedGroupInfo: i } = e,
    a = at(),
    o = J.useCallback(
      (e, t) => {
        di.set(i.nBackgroundGroupID, t);
      },
      [i],
    ),
    s = dn(o);
  if (!n || (Array.isArray(n) && n.length == 0)) return null;
  if (!t) return (0, X.jsx)(X.Fragment, { children: n });
  let c;
  if (t.localized_background_art) {
    let e = I(a),
      n =
        e in t.localized_background_art
          ? e
          : rn.GetLanguageFallback(K.LANGUAGE),
      i = t.localized_background_art[n];
    i && (c = E.GenerateURLFromHashAndExt(r.clanSteamID, i));
  }
  let l = `linear-gradient(`;
  switch (t.gradient_setting) {
    case `top-to-bottom`:
      l += `to bottom,`;
      break;
    case `left-to-right`:
      l += `to right,`;
      break;
    case `top-left-to-bottom-right`:
      l += `to bottom right,`;
      break;
    case `single-color`:
      l = void 0;
  }
  t.background_color1 &&
  t.background_color2 &&
  t.background_color1 != t.background_color2
    ? ((l += ` ` + t.background_color1),
      (l += `, ` + t.background_color2),
      (l += `)`))
    : (l = null);
  let u =
      t.background_color1 &&
      (!t.background_color2 ||
        t.gradient_setting == `single-color` ||
        t.background_color1 == t.background_color2),
    d = t.scaling_setting !== `cover` && t.position_setting !== `unset`,
    f = {
      backgroundImage: l ? `url(${c}), ${l}` : `url(${c})`,
      backgroundSize: t.scaling_setting,
      backgroundRepeat: t.repeat_setting,
      backgroundPosition: d ? t.position_setting : void 0,
      backgroundColor: u ? t.background_color1 : void 0,
      overflowY: `hidden`,
    };
  return (0, X.jsx)(`div`, {
    ref: s,
    style: f,
    id: `background_group_` + t.background_id,
    children: n,
  });
}
function _i(e) {
  return typeof e == `string` || typeof e == `number` ? e : JSON.stringify(e);
}
var vi = class {
    Keyify = (e) => _i(e);
    m_mapVisible = new Map();
    m_mapOwners = new Map();
    IsAlreadyVisible(e) {
      return this.m_mapVisible.has(this.Keyify(e));
    }
    SortKey(e, t) {
      return (
        (this.m_mapVisible.get(this.Keyify(e)) || 0) -
        (this.m_mapVisible.get(this.Keyify(t)) || 0)
      );
    }
    BMarkAppVisibile(e, t) {
      let n = this.EnsureOwnerSetExists(e),
        r = this.Keyify(t);
      return (
        n.add(r),
        this.IsAlreadyVisible(t)
          ? (this.m_mapVisible.set(r, (this.m_mapVisible.get(r) ?? 0) + 1), !1)
          : (this.m_mapVisible.set(r, 1), !0)
      );
    }
    BMarkAppNotVisible(e, t) {
      if (!this.IsAlreadyVisible(t)) return !1;
      let n = this.EnsureOwnerSetExists(e),
        r = this.Keyify(t);
      return n.has(r) ? (this.DecrementAppVisibility(r), !0) : !1;
    }
    MarkAllAppsNotVisible(e) {
      this.m_mapOwners.has(e) &&
        (this.m_mapOwners
          .get(e)
          .forEach(this.DecrementAppVisibility.bind(this)),
        this.m_mapOwners.delete(e));
    }
    EnsureOwnerSetExists(e) {
      let t = this.m_mapOwners.get(e);
      return (
        (t ||= (this.m_mapOwners.set(e, new Set()), this.m_mapOwners.get(e))), t
      );
    }
    DecrementAppVisibility(e) {
      let t = (this.m_mapVisible.get(e) ?? 0) - 1;
      t > 0 ? this.m_mapVisible.set(e, t) : this.m_mapVisible.delete(e);
    }
  },
  yi = `H8RsG3p9zyI-`,
  bi = `-ayc8iJmBgg-`,
  xi = `_6D2hAhDIwmY-`,
  Si = `ZP-iX4isxNw-`,
  Ci = `AzJ42SXvU7g-`,
  wi = `DKOEqISmqI8-`,
  Ti = `TMYfiVXl17Q-`,
  Ei = `j5T-MrFgQ20-`,
  Di = class e {
    m_curLocImageGroup = null;
    m_curLocImageGroupType = null;
    constructor() {
      i(this);
    }
    static async BDoesClanImageFileExistsOnCDNOrOrigin(e, t, n, r) {
      let i =
          K.COMMUNITY_BASE_URL +
          `gid/` +
          t.ConvertTo64BitString() +
          `/hasclanimagefile`,
        a = { image_hash_and_ext: n, lang: `` + r };
      return (
        (await Lr.default.get(i, { params: a, cancelToken: e && e.token })).data
          .success == 1
      );
    }
    SetPrimaryImageForImageGroup(e, t) {
      (this.m_curLocImageGroup &&
        this.m_curLocImageGroup.primaryImage.imageid == e.imageid &&
        t == this.m_curLocImageGroupType) ||
        ((this.m_curLocImageGroup = { primaryImage: e, localized_images: [] }),
        (this.m_curLocImageGroupType = t),
        (this.m_curLocImageGroup.localized_images = gn(
          this.m_curLocImageGroup.localized_images,
          32,
          null,
        )));
    }
    GetPrimaryImageForImageGroup() {
      return this.m_curLocImageGroup?.primaryImage;
    }
    ClearImageGroup() {
      ((this.m_curLocImageGroup = null), (this.m_curLocImageGroupType = null));
    }
    GetLocalizedImageGroupForEdit() {
      return this.m_curLocImageGroup;
    }
    GetLocalizedImageGroupForEditAsURL(e, t) {
      if (this.m_curLocImageGroup) {
        let n = this.m_curLocImageGroup.primaryImage;
        return this.m_curLocImageGroup.localized_images[t]
          ? this.m_curLocImageGroup.localized_images[t]
          : E.GenerateURLFromHashAndExt(e, E.GetHashAndExt(n) ?? ``);
      }
      return null;
    }
    async DetermineAvailableLocalizationForGroup(n) {
      if (!this.m_curLocImageGroup) return;
      let r = this.m_curLocImageGroup.primaryImage,
        i = R.InitFromClanID(r.clanAccountID, K.EUNIVERSE),
        a = E.GetHashAndExt(r) ?? ``,
        o = [];
      for (let t = 0; t < 32; ++t)
        o.push(e.BDoesClanImageFileExistsOnCDNOrOrigin(n, i, a, t));
      let s = await Promise.all(o);
      t(() => {
        for (let e = 0; e < 32; ++e)
          s[e] &&
            (this.m_curLocImageGroup.localized_images[e] =
              E.GenerateURLFromHashAndExtAndLang(
                i,
                a,
                T.full,
                e,
                this.m_curLocImageGroupType ?? void 0,
              ));
      });
    }
    SetLocalizedImageGroupAtLang(e, t, n) {
      this.m_curLocImageGroup &&
        (this.m_curLocImageGroup.localized_images[e] = n
          ? E.GenerateURLFromHashAndExtAndLang(
              t,
              n,
              T.full,
              e,
              this.m_curLocImageGroupType ?? void 0,
            )
          : null);
    }
    AddLocalizeImageUploaded(e, t) {
      if (!this.m_curLocImageGroup) return;
      let n = this.m_curLocImageGroup.primaryImage;
      if (n?.image_hash == e) {
        let e = R.InitFromClanID(n.clanAccountID, K.EUNIVERSE),
          r = E.GetHashAndExt(n);
        r &&
          (this.m_curLocImageGroup.localized_images[t] =
            E.GenerateURLFromHashAndExtAndLang(
              e,
              r,
              T.full,
              t,
              this.m_curLocImageGroupType ?? void 0,
            ));
      }
    }
    GetAllLocalizedGroupImages() {
      return (
        (this.m_curLocImageGroup && this.m_curLocImageGroup.localized_images) ||
        []
      );
    }
    GetAllLocalizedGroupImageHashAndExts() {
      return this.GetAllLocalizedGroupImages()
        .filter(Boolean)
        .map((e) => E.GetHashAndExtFromURL(e));
    }
  };
mn([u], Di.prototype, `m_curLocImageGroup`, void 0);
var Q = new Di();
function Oi(e, t) {
  let n = J.useRef(null),
    r = J.useCallback(
      (t) => {
        t.currentTarget.files.length > 0 &&
          (e(t.currentTarget.files), (t.currentTarget.value = ``));
      },
      [e],
    ),
    i = J.useCallback(() => n.current?.click(), []);
  return [
    Ir.createPortal(
      (0, X.jsx)(`form`, {
        onSubmit: Ai,
        style: { display: `none` },
        children: (0, X.jsx)(`input`, {
          ...t,
          type: `file`,
          ref: n,
          onChange: r,
        }),
      }),
      window.document.body,
    ),
    i,
  ];
}
function ki(e) {
  let [t, n] = J.useState(!1);
  return [
    {
      onDragEnter: J.useCallback((e) => {
        ((e.dataTransfer.files && e.dataTransfer.files[0]) ||
          (e.dataTransfer.types && e.dataTransfer.types[0] == `Files`)) &&
          n(!0);
      }, []),
      onDragLeave: J.useCallback((e) => {
        Wt(e) && n(!1);
      }, []),
      onDragEnd: J.useCallback(() => n(!1), []),
      onDragOver: t ? Ai : void 0,
      onDrop: J.useCallback(
        (t) => {
          (t.dataTransfer.files?.length &&
            (e(t.dataTransfer.files, t),
            t.preventDefault(),
            t.stopPropagation()),
            n(!1));
        },
        [e],
      ),
    },
    t,
  ];
}
function Ai(e) {
  e.preventDefault();
}
var ji = `wxWVRBKbQ6Y-`,
  Mi = `_1hQVgn9Glyw-`,
  Ni = `OQ-ETv0yIhg-`,
  Pi = `wVGLukava5E-`;
function Fi(e) {
  let {
      onDropFiles: t,
      renderDesciption: n,
      elAdditonalButtons: r,
      elOverrideDragAndDropText: i,
    } = e,
    [a, o] = ki(t),
    [s, c] = Oi(t, {
      accept: `image/png, image/jpeg, image/gif, image/webp`,
      multiple: !0,
    });
  return (0, X.jsxs)(`div`, {
    ...a,
    className: F(o ? Mi : ji, `DragAndDropContainer`),
    children: [
      n?.(),
      (0, X.jsx)(`div`, { children: i || B(`#ImagePicker_DragAndDrop`) }),
      (0, X.jsxs)(`div`, {
        className: Ni,
        children: [
          s,
          (0, X.jsxs)(`label`, {
            onClick: c,
            children: [
              (0, X.jsxs)(`span`, {
                children: [B(`#ImagePicker_OrBrowse`), ` `],
              }),
              (0, X.jsx)(`span`, {
                className: Pi,
                children: B(`#selectimage_select_file`),
              }),
            ],
          }),
        ],
      }),
      r,
      e.children,
    ],
  });
}
var Ii = `_5RINCHFuy0Y-`,
  Li = `GWe0Hc-fT2A-`,
  Ri = `Wmeqy6nXS1Y-`,
  zi = `_698Kbr-wNSM-`,
  Bi = `_4l0OY5qTFkk-`,
  Vi = `_4StKqHsfdjg-`,
  Hi = `dp7SyRphVOo-`,
  Ui = `OoUlU8pBBN4-`;
function Wi(e) {
  let {
      imageUploader: t,
      fnUploadComplete: n,
      elOverrideDragAndDropText: r,
      forceResolution: i,
      elAdditonalButtons: a,
      rgRealmList: o,
    } = e,
    [s, c] = d(() => [t.GetUploadImages(), ot.Get().GetCurEditLanguage()]),
    l = J.useCallback(
      async (e) => {
        let n = Array.from(e),
          r = !0;
        for (let e = 0; e < n.length; e++) {
          let i = n[e],
            { language: a } = Et(i?.name, c);
          try {
            let n = St(a, c, o);
            ((r = await t.AddImageForLanguage(i, n)),
              r ||
                (console.error(
                  `ImageUploaderPanel.OnDropFiles: failed on i=` +
                    e +
                    ` file=` +
                    i.name,
                ),
                j(
                  (0, X.jsx)(Bt, {
                    strDescription: B(`#ImagePicker_Error`, i.name),
                  }),
                  window,
                )));
          } catch (e) {
            let t = Yt(e);
            (console.error(
              `ImageUploaderPanel.OnDropFiles: ` + t.strErrorMsg,
              t,
            ),
              j(
                (0, X.jsx)(Bt, {
                  strDescription: B(`#EventError_Code`, t.strErrorMsg ?? ``),
                }),
                window,
              ));
          }
        }
        return r;
      },
      [c, t, o],
    ),
    u = J.useMemo(
      () =>
        a instanceof Array
          ? a
          : [(0, X.jsx)(J.Fragment, { children: a }, `elAdditonalButtons`)],
      [a],
    );
  return (
    d(() => s.map((e) => ({ a: e.GetCurrentImageOption(), b: e.language }))),
    (0, X.jsxs)(Fi, {
      onDropFiles: l,
      elAdditonalButtons: u,
      elOverrideDragAndDropText: r,
      children: [
        (0, X.jsx)(J.Fragment, {
          children: (0, X.jsx)(`div`, {
            className: Li,
            children: s.map((e) =>
              (0, X.jsx)(
                Ki,
                {
                  asset: e,
                  forceResolution: i,
                  fnOnRemove: () => t.DeleteUploadImage(e),
                  languageRealms: o,
                },
                `arttabupload_` + e.filename + `_` + e.uploadTime,
              ),
            ),
          }),
        }),
        (0, X.jsx)(Gi, {
          imageUploader: t,
          fnOnUploadImageRequested: async () => {
            let e = await t.UploadAllImages(i);
            n?.(e);
          },
        }),
      ],
    })
  );
}
function Gi(e) {
  let { imageUploader: t, fnOnUploadImageRequested: n } = e,
    [r] = d(() => [t.GetUploadImages()]),
    i = r.some((e) => e.status == `pending`),
    a = r.some(
      (e) =>
        e.status == `waiting` ||
        e.status == `uploading` ||
        e.status == `processing`,
    );
  return (0, X.jsxs)(`div`, {
    style: { display: `flex` },
    className: Ri,
    children: [
      !!r.length &&
        (0, X.jsx)(z, {
          style: { margin: `8px` },
          onClick: n,
          disabled: !i,
          children: B(`#ImageUpload_Upload`),
        }),
      !!r.length &&
        (0, X.jsx)(z, {
          style: { margin: `8px` },
          onClick: t.ClearImages,
          disabled: a,
          children: B(`#ImageUpload_Clear`),
        }),
    ],
  });
}
var Ki = o(qi);
function qi(e) {
  let t = (t) => {
      if (t instanceof vt) {
        t.ResetImage();
        let n = window,
          r = (0, X.jsx)(Ct, {
            ownerWin: n,
            uploadFile: t,
            forceResolution: e.forceResolution,
            fileType: e.forceFileType || 3,
          });
        Kt(r, n, `CropModal`, { strTitle: B(`#ImageUpload_CropModalTitle`) });
      } else
        console.log(
          `ImageUploadEmbeddedDialog trying to crop non image`,
          t.fileType,
          JSON.stringify(t.GetCurrentImageOption()),
        );
    },
    { asset: n, fnOnRemove: r, languageRealms: i } = e,
    a = n.ImageOptions?.map((e) => {
      let t = e?.fnGetLabelText(),
        r;
      (e.bEnforceDimensions && (t += ` - ${e.width}x${e.height}`),
        e.bDeprecated &&
          ((t += ` ${B(`#ImageUpload_Deprecated`)}`),
          (r = B(`#ImageUpload_Deprecated_ttip`))));
      let i;
      return (
        (n.BIsOriginalMinimumDimensions(e) && n.FileTypeMatchesImageTypes(e)) ||
          (i = Ii),
        { label: t, data: e, strOptionClass: i, tooltip: r }
      );
    }).filter((e) => !e.data.bHiddenFromDropdown),
    o = {
      pending: B(`#ImageUpload_Pending`),
      waiting: B(`#ImageUpload_Waiting`),
      uploading: B(`#ImageUpload_Uploading`),
      processing: B(`#ImageUpload_Processing`),
      success: B(`#ImageUpload_SuccessCard`),
      failed: B(`#ImageUpload_Failed`),
    },
    s = n.BSupportsLanguages()
      ? Xi(rn.GetLanguageListForRealms(i ?? [Rt.k_ESteamRealmGlobal]))
      : null,
    c = n.IsValidAssetType(e.forceResolution, e.forceFileType),
    l = n.status == `pending`,
    u = o[n.status];
  n.status == `pending` &&
    (c.needsCrop
      ? (u = B(`#ImageUpload_NeedsCrop`))
      : c.error && (u = B(`#ImageUpload_Invalid`)));
  let d,
    f = n.GetCurrentImageOption();
  return (
    f && (d = a?.find((e) => e.data.sKey == f.sKey)?.data),
    (d ||= a?.[0]?.data),
    (0, X.jsxs)(`div`, {
      className: Vi,
      children: [
        (0, X.jsx)(`div`, {
          className: zi,
          onClick: () => r(n),
          children: (0, X.jsx)(cn, {}),
        }),
        (0, X.jsx)(Ji, { asset: n }),
        s &&
          (0, X.jsx)(W, {
            strDropDownClassName: `ZsXFGEgobIY-`,
            rgOptions: s,
            selectedOption: n.language,
            onChange: (e) => (n.language = e.data),
            disabled: !l,
          }),
        a &&
          a?.length > 1 &&
          (0, X.jsx)(W, {
            label: n.GetImageOptionLabel(),
            rgOptions: a,
            selectedOption: d,
            onChange: (e) => n.SetCurrentImageOption(e.data),
            disabled: !l,
          }),
        l &&
          c.warnings?.map((e, t) =>
            (0, X.jsx)(
              `div`,
              { className: `hb0m5mPiE2A-`, children: e },
              `warning${t}`,
            ),
          ),
        l &&
          c.messages?.map((e, t) =>
            (0, X.jsx)(
              `div`,
              { className: `CGM5a4V3nBU-`, children: e },
              `message${t}`,
            ),
          ),
        (0, X.jsxs)(`div`, {
          className: F({ [nt]: !0, [Bi]: n.status == `failed` }),
          children: [
            u,
            Dt(n.status) &&
              (0, X.jsx)(`div`, {
                className: `RPxGbDpMPvc-`,
                children: (0, X.jsx)(O, { size: `small` }),
              }),
          ],
        }),
        (0, X.jsx)(`div`, { className: Bi, children: n.message }),
        l &&
          c.error &&
          (0, X.jsx)(`div`, { className: `_4l0OY5qTFkk-`, children: c.error }),
        l &&
          c.needsCrop &&
          (0, X.jsx)(bn, {
            onClick: () => t(n),
            children: B(`#ImageUpload_OpenEditor`),
          }),
      ],
    })
  );
}
function Ji(e) {
  let { asset: t } = e;
  return t.BIsVideo()
    ? (0, X.jsxs)(`div`, {
        className: Hi,
        onClick: (e) => j((0, X.jsx)(Yi, { asset: t }), Lt(e)),
        children: [
          (0, X.jsxs)(`span`, {
            className: Ui,
            children: [t.width, ` x `, t.height],
          }),
          (0, X.jsx)(`video`, {
            height: 120,
            controls: !1,
            autoPlay: !0,
            loop: !0,
            muted: !0,
            children: (0, X.jsx)(`source`, { src: t.dataUrl }),
          }),
        ],
      })
    : (0, X.jsx)(`div`, {
        className: Hi,
        style: { backgroundImage: `url(${t.dataUrl})` },
        children: (0, X.jsxs)(`span`, {
          className: Ui,
          children: [t.width, ` x `, t.height],
        }),
      });
}
function Yi(e) {
  let { asset: t, closeModal: n } = e;
  return (0, X.jsx)(N, {
    bAlertDialog: !0,
    closeModal: n,
    bAllowFullSize: !0,
    children: (0, X.jsx)(`video`, {
      controls: !0,
      autoPlay: !0,
      loop: !0,
      muted: !0,
      children: (0, X.jsx)(`source`, { src: t.dataUrl }),
    }),
  });
}
function Xi(e) {
  let t = [],
    n = [];
  for (let t of e) {
    if (t == 25) continue;
    let e = B(`#Language_` + I(t));
    n.push({ label: e, data: t });
  }
  return (
    n.sort((e, t) => e.label.localeCompare(t.label)),
    n.forEach((e) => t.push({ label: e.label, data: e.data })),
    n
  );
}
var Zi = (function (e) {
    return (
      (e[(e.k_eInsertThumbnail = 1)] = `k_eInsertThumbnail`),
      (e[(e.k_eInsertFullImage = 2)] = `k_eInsertFullImage`),
      (e[(e.k_eShowImageGroup = 3)] = `k_eShowImageGroup`),
      (e[(e.k_eInsertVideo = 4)] = `k_eInsertVideo`),
      e
    );
  })({}),
  Qi = `MBOGLVBsJno-`,
  $i = `W-3Dq3-54Lg-`,
  ea = `quLSuE3pc1o-`,
  ta = `lnTEZ3RD-vc-`,
  na = `kpa9FPV-AL0-`,
  ra = `n8uggtUd8lI-`,
  ia = `PNoxLvZvnxs-`,
  aa = `iGpmTErZND8-`,
  oa = `hAZUPjOGGxE-`,
  sa = `crDJadcMi8A-`,
  ca = `AmP7BU2J8Pw-`;
function la(e) {
  let { fnSetImageSearch: t } = e,
    n = (0, J.useRef)(null);
  return (0, X.jsx)(`div`, {
    className: ca,
    children: (0, X.jsx)(`input`, {
      ref: n,
      className: sa,
      type: `text`,
      placeholder: B(`#ImagePicker_Search`),
      onChange: (e) => t(e.currentTarget.value),
      onKeyDown: (e) => {
        e.key == `Escape` && (t(``), n.current && (n.current.value = ``));
      },
    }),
  });
}
var ua = J.memo(function (e) {
  let {
    fileNameSearch: t,
    clanAccountID: n,
    imageInsertCallBack: r,
    fnOnExpandImage: i,
    showImageActions: a = !0,
    InternalOpenLocalizeImageGroup: o,
  } = e;
  return (0, X.jsx)(da, {
    clanAccountID: n,
    fileNameSearch: t,
    children: (e, t) =>
      e.map((e) =>
        (0, X.jsx)(
          fa,
          {
            clanImage: e,
            searchStringHilight: t,
            imageInsertCallBack: r,
            showImageActions: a,
            fnOnOpenLocalizedImageGroup: o,
            OnImageClick: i,
          },
          e.imageid,
        ),
      ),
  });
});
function da(e) {
  let { clanAccountID: t, fileNameSearch: n, children: r } = e,
    i = wt(t),
    a = n.trim().toLowerCase() || ``,
    o = A.GetFilteredClanImagesList(i, a);
  if (o.length == 0) {
    let e = R.InitFromClanID(t, K.EUNIVERSE),
      n = A.GetLoadState(e);
    return n && n.loaded
      ? (0, X.jsx)(
          `div`,
          {
            className: na,
            children:
              a.length > 0
                ? B(`#ImagePicker_EmptySearch`)
                : B(`#ImagePicker_Empty`),
          },
          `ImagePicker_Result`,
        )
      : n && n.errMsg
        ? (0, X.jsx)(
            `div`,
            { className: ra, children: B(`#ImagePicker_Error`, n.errMsg) },
            `ImagePicker_Result`,
          )
        : (0, X.jsx)(
            `div`,
            { className: na, children: B(`#Loading`) },
            `ImagePicker_Result`,
          );
  }
  return r(o, a);
}
function fa(e) {
  let {
      clanImage: t,
      searchStringHilight: n,
      imageInsertCallBack: r,
      OnImageClick: i,
      showImageActions: a,
      fnOnOpenLocalizedImageGroup: o,
    } = e,
    [s, c] = J.useState(!1),
    l = () => r(t, Zi.k_eInsertFullImage),
    u = () => r(t, Zi.k_eInsertVideo),
    d = () => r(t, Zi.k_eInsertThumbnail),
    f = (e) => {
      t.url &&
        (e.dataTransfer.setData(`text`, t.url),
        A.GetClanImageDragListener().forEach((e) => {
          e(R.InitFromClanID(t.clanAccountID, K.EUNIVERSE), !0);
        }));
    },
    p = (e) => {
      t.url &&
        A.GetClanImageDragListener().forEach((e) => {
          e(R.InitFromClanID(t.clanAccountID, K.EUNIVERSE), !1);
        });
    },
    m = (e) => {
      j(
        (0, X.jsx)(N, {
          strTitle: B(`#ImagePicker_DeleteImageTitle`),
          strDescription: ``,
          onOK: g,
          onCancel: _,
          closeModal: _,
          children: (0, X.jsxs)(J.Fragment, {
            children: [
              (0, X.jsx)(`div`, {
                children: B(`#ImagePicker_DeleteAreYouSure`, t.file_name ?? ``),
              }),
              (0, X.jsx)(`br`, {}),
              (0, X.jsx)(`br`, {}),
              (0, X.jsx)(`div`, { children: B(`#ImagePicker_DeleteWarning`) }),
            ],
          }),
        }),
        Lt(e) ?? window,
      );
    },
    h = (e) => {
      (console.log(`ClanImageWrapper on delete error: ` + e),
        j(
          (0, X.jsx)(Bt, {
            strTitle: B(`#Error_FailureNotice`),
            strDescription: B(`#EventDisplay_DeleteEvent_Error`),
            children: (0, X.jsx)(`p`, { children: e }),
          }),
          window,
        ));
    },
    g = () => {
      c(!0);
      let e = R.InitFromClanID(t.clanAccountID, K.EUNIVERSE);
      A.DeleteClanImage(e, t)
        .then((e) => {
          (e.success != 1 && h(Yt(e).strErrorMsg), c(!1));
        })
        .catch((e) => {
          (h(Yt(e).strErrorMsg), c(!1));
        });
    },
    _ = () => {},
    v = () => {
      i && i(t);
    },
    y = t.file_name ? t.file_name : ``,
    b = st(n, y, String(t.imageid), ia),
    x = E.BIsClanImageVideo(t),
    S = a && !s && !x,
    ee = a && !s && !x,
    te = a && !s && x,
    C = a && !s && !x;
  return (0, X.jsx)(mt, {
    placeholderHeight: `100vh`,
    className: Qi,
    rootMargin: `0px 0px 100% 0px`,
    children: (0, X.jsxs)(`div`, {
      className: aa,
      children: [
        (0, X.jsx)(`div`, {
          className: $i,
          style: { backgroundImage: x ? `` : `url( '${t.thumb_url}' )` },
          draggable: !0,
          onDragStart: f,
          onDragEnd: p,
          onDoubleClick: l,
          onClick: v,
          children: (0, X.jsx)(ma, { clanImage: t, className: ea }),
        }),
        S &&
          (0, X.jsx)(`span`, {
            className: `escPuFxqCbM-`,
            onClick: l,
            children: B(`#ImagePicker_FullSize`),
          }),
        s && (0, X.jsx)(O, { size: `medium`, className: `_9dVXPw6twXc-` }),
        ee &&
          (0, X.jsx)(`span`, {
            className: `_9em3bZdejR0-`,
            onClick: d,
            children: B(`#ImagePicker_Thumbnail`),
          }),
        C &&
          o &&
          (0, X.jsx)(pa, {
            bDeleting: s,
            clanImage: t,
            fnOnOpenLocalizedImageGroup: o,
          }),
        te &&
          (0, X.jsx)(`span`, {
            className: `escPuFxqCbM-`,
            onClick: u,
            children: B(`#ImagePicker_Video`),
          }),
        !s &&
          (0, X.jsx)(`span`, {
            className: `LzW73RDKl40-`,
            onClick: m,
            children: (0, X.jsx)(`img`, {}),
          }),
        (0, X.jsx)(`div`, { className: ta, title: y, children: b }),
      ],
    }),
  });
}
function pa(e) {
  let { clanImage: t, fnOnOpenLocalizedImageGroup: n, bDeleting: r } = e,
    { data: i } = He(t.clanAccountID);
  return r || !i?.valve_admin
    ? null
    : (0, X.jsx)(`span`, {
        className: F(oa, Ze),
        onClick: () => n?.(t),
        children: `(VO) ` + B(`#ImagePicker_Localized`),
      });
}
function ma(e) {
  let { clanImage: t, className: n } = e;
  return E.BIsClanImageVideo(t)
    ? (0, X.jsx)(`video`, {
        autoPlay: !0,
        loop: !0,
        muted: !0,
        className: n,
        children: (0, X.jsx)(`source`, {
          src: t.url,
          type: `video/` + (t.file_type == 4 ? `mp4` : `webm`),
        }),
      })
    : null;
}
function ha(e) {
  let { clanSteamID: t, closeModal: n, OnClanImageSelected: r } = e,
    i = J.useCallback(
      (e, t) => {
        (r?.(e, t), n?.());
      },
      [r, n],
    ),
    [a, o] = J.useState(``);
  return (0, X.jsxs)(N, {
    strTitle: B(`#ImagePicker_Images`),
    strDescription: B(`#ImagePicker_DoubleClickToSelect`),
    bAlertDialog: !0,
    onOK: n,
    onCancel: n,
    children: [
      (0, X.jsx)(la, { fnSetImageSearch: o }),
      (0, X.jsx)(ua, {
        clanAccountID: t.GetAccountID(),
        fileNameSearch: a,
        imageInsertCallBack: i,
        showImageActions: !1,
      }),
    ],
  });
}
function ga(e) {
  let { clanSteamID: t, OnClanImageSelected: n } = e;
  return (0, X.jsxs)(`div`, {
    className: Ni,
    children: [
      (0, X.jsxs)(`label`, {
        htmlFor: `clanimagedialog`,
        children: [
          (0, X.jsxs)(`span`, {
            children: [B(`#ImagePicker_PreviousImages`), ` `],
          }),
          (0, X.jsx)(`span`, {
            className: Pi,
            children: B(`#ImagePicker_PreviousImages2`),
          }),
        ],
      }),
      (0, X.jsx)(`input`, {
        style: { display: `none` },
        id: `clanimagedialog`,
        type: `button`,
        onClick: (e) => {
          j(
            (0, X.jsx)(ha, { clanSteamID: t, OnClanImageSelected: n }),
            Lt(e) ?? window,
          );
        },
      }),
    ],
  });
}
function _a(e) {
  let {
      clanSteamID: t,
      rgSupportArtwork: n,
      localizedPrimaryImage: r,
      bAllowPreviousClanImageSelection: i,
      fnSetImageURL: a,
      rgRealmList: o,
    } = e,
    [s] = d(() => [ot.Get().GetCurEditLanguage()]),
    c = Tt(t, n, r),
    l = e.uploaderOverride || c,
    [u, f] = J.useState(!1),
    p = J.useCallback(
      async (e, t) => {
        if (!u) {
          f(!0);
          try {
            let { language: t } = Et(e.file_name ?? ``, s),
              n = St(t, s, o);
            await l.AddExistingClanImage(e, n);
          } catch (e) {
            let t = Yt(e);
            (console.error(`AddExistingClanImage: ` + t.strErrorMsg, t),
              j(
                (0, X.jsx)(Bt, {
                  strDescription: B(`#EventError_Code`, t.strErrorMsg ?? ``),
                }),
                window,
              ));
          }
          f(!1);
        }
      },
      [u, l, s, o],
    ),
    m = J.useMemo(
      () =>
        i
          ? [
              [
                (0, X.jsx)(
                  ga,
                  { clanSteamID: t, OnClanImageSelected: p },
                  `clanartworkpicker`,
                ),
              ],
            ]
          : null,
      [p, i, t],
    ),
    h = (e) => {
      for (let n of e) {
        let e = n.uploadResult;
        if (e?.origimagehash) {
          let t = St(e.language, s, o);
          Q.AddLocalizeImageUploaded(e.origimagehash, t);
        } else {
          let r = A.GetClanImageByImageHash(t, e?.image_hash ?? ``),
            i = n.image.GetCurrentImageOption();
          if (r && i) {
            let e = St(n.image.language, s, o);
            a(i.artworkType, r, e);
          }
        }
      }
    };
  return (0, X.jsx)(Wi, {
    ...e,
    imageUploader: l,
    rgRealmList: o,
    elAdditonalButtons: u
      ? [
          (0, X.jsx)(
            O,
            { position: `center`, size: `medium`, string: B(`#Loading`) },
            `throbbing`,
          ),
        ]
      : m,
    fnUploadComplete: h,
  });
}
var va = `x0kXRDaNEsY-`,
  ya = `tggLx72V-Ck-`,
  ba = `DVwf02s2GtI-`,
  xa = `zREkqfL42-U-`,
  Sa = `_7zBg1-UuADM-`,
  Ca = `TMQhyilc41c-`,
  wa = `t2inDYSKOto-`,
  Ta = `-FHzhwwvQvA-`,
  Ea = `ZUy8iSsvilc-`,
  Da = `XRZj1OeBHRk-`,
  Oa = `_2lViMA09hm4-`,
  ka = `BTC1IyUleCA-`,
  Aa = `lEWE2I7Rsj8-`,
  ja = `_12sYjoMc9wE-`,
  Ma = `_8hs8sf5-YPQ-`,
  Na = `Hy2GxVyZVDA-`;
function Pa(e) {
  let {
      clanImage: t,
      closeModal: n,
      lang: r,
      fnOnArtworkLangChange: i,
      realms: a,
      fnLangHasData: o,
    } = e,
    [s, c] = (0, J.useState)(r),
    l = R.InitFromClanID(t.clanAccountID, K.EUNIVERSE),
    u = d(() => E.GenerateURLFromHashAndExt(l, E.GetHashAndExt(t) ?? ``));
  return (0, X.jsx)(N, {
    strTitle: B(`#selectimage_change_artwork_lang_title`),
    strDescription: B(`#selectimage_change_artworl_lang_desc`),
    onOK: () => i?.(t, r, s),
    onCancel: n,
    closeModal: n,
    children: (0, X.jsxs)(`div`, {
      className: F(nt, ya),
      children: [
        (0, X.jsx)(`div`, {
          className: ba,
          children: (0, X.jsx)(`img`, { className: va, src: u }),
        }),
        (0, X.jsx)(ct, {
          selectedLang: s,
          fnLangHasData: o,
          fnOnLanguageChanged: c,
          realms: a,
        }),
      ],
    }),
  });
}
function Fa(e) {
  if (!e) return e;
  let t = e.lastIndexOf(`.`);
  return t === -1 ? e : e.substring(0, t);
}
var Ia = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAFo9M/3AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzcyREYxMUExREVBMTFFOUJFQTREQjZGQTJEQ0UzOTMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzcyREYxMUIxREVBMTFFOUJFQTREQjZGQTJEQ0UzOTMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NzJERjExODFERUExMUU5QkVBNERCNkZBMkRDRTM5MyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NzJERjExOTFERUExMUU5QkVBNERCNkZBMkRDRTM5MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pmk/vzIAAAFiSURBVHjaYnz79i0DCDAB8X8gVgUIIEaoSBmIIQRkvAMIIBADJMUIxBVArI0sAAYAAQTTAwNlTEgcXZDpLFDOHCC+A8Sd6FoEAAIIJBAOZKxAEoTZmAPEKSxQSZitFVCz10D5O1iQdE4AYgsouwOKBUBWvAEyRKF+RQa+QLwFIIDQHYUM/gAxC8hfb6C6QTgLKvkaiGtAikBuUAHiD0g6QZJzob5gYUEz9jXUPU+AWAYWETDwG+o9mGQGLLAFoFbcBGJFIGaDagDHCrIV6ti8ArLCFoc3wf4HCDB84YANVEC9HwPEU4B4EiycQKEqgAUjx+F3INYHYkOoZh6YC0CeEUQLS2Qbi4HYCYgvQ8P8AhC3QOMaJRjRNf4C4m3QcP8ODd4QqM0dyIGEDgKgCtmgUf8dypeBamSERoEALi8sAuUnID4AxIegbHQA18OCRTKOlGgBeSECmuH+E4nfQPWAXQwAHbJ3VkYR2TIAAAAASUVORK5CYII=`;
function La(e) {
  let {
    clanSteamID: t,
    fnGetImageHash: n,
    fnLangHasData: r,
    fnOnRemoveImage: i,
  } = e;
  xt(t.GetAccountID());
  let a = J.useMemo(() => {
      let e = [],
        t = rn.GetLanguageListForRealms([
          Rt.k_ESteamRealmGlobal,
          Rt.k_ESteamRealmChina,
        ]);
      for (let r of t) {
        let t = n(r);
        if (t) {
          let n = I(r),
            i = B(`#Language_` + n);
          e.push({ lang: r, strLang: n, locLang: i, imgHash: t });
        }
      }
      return (
        (e = e.sort((e, t) =>
          e.locLang > t.locLang ? 1 : e.locLang < t.locLang ? -1 : 0,
        )),
        e
      );
    }, [n]),
    [o, s, c] = P();
  return (0, X.jsxs)(`div`, {
    className: ka,
    children: [
      (0, X.jsx)(`div`, {
        className: Aa,
        children: B(`#selectimage_uploaded_languages`),
      }),
      (0, X.jsx)(`div`, {
        className: Ea,
        children: a.map((n) =>
          (0, X.jsx)(
            Ra,
            { langData: n, ...e },
            `lang_select_` + t.GetAccountID() + ` ` + n.strLang,
          ),
        ),
      }),
      !!i &&
        (0, X.jsxs)(z, {
          className: `_1k0t2Q-C2OU-`,
          onClick: s,
          children: [
            B(`#Sale_RemoveAll`),
            (0, X.jsx)(Ut, { tooltip: B(`#Sale_RemoveAll_Tooltip`) }),
          ],
        }),
      (0, X.jsx)(q, {
        active: o,
        children: (0, X.jsx)(N, {
          strTitle: B(`#Dialog_AreYouSure`),
          strDescription: B(`#ImageUpload_DeleteAll_Confirm`),
          closeModal: c,
          onOK: () => {
            for (let e = 0; e < 32; e++) r && i && r(e) && i(e);
          },
        }),
      }),
    ],
  });
}
function Ra(e) {
  let {
      clanSteamID: t,
      langData: n,
      langOverride: r,
      fnOnLanguagePreviewChange: i,
      fnOnArtworkLangChange: a,
      fnOnRemoveImage: o,
    } = e,
    [s, c] = d(() => {
      let e = A.GetClanImageByImageHash(t, n.imgHash),
        i = ``;
      e &&
        (i = E.GenerateURLFromHashAndExtAndLang(
          t,
          E.GetHashAndExt(e),
          T.full,
          n.lang,
        ));
      let a = Sa;
      return (r != n.lang && (a = n.imgHash ? xa : Ca), [i, a]);
    });
  return (0, X.jsxs)(`div`, {
    id: n.strLang,
    className: wa,
    onClick: (e) => {
      let t = Pt(e.currentTarget.id);
      i(t);
    },
    children: [
      (0, X.jsx)(`div`, { className: c, children: n.locLang }),
      (0, X.jsxs)(`span`, {
        className: Ta,
        children: [
          !!s &&
            (0, X.jsx)(`a`, {
              href: s,
              target: `_blank`,
              children: (0, X.jsx)(Jt, {
                toolTipContent: B(`#selectimage_viewimage_ttip`),
                children: on(),
              }),
            }),
          !!a && (0, X.jsx)(za, { ...e }),
          !!o && (0, X.jsx)(Ba, { fnOnRemoveImage: o, langData: n }),
        ],
      }),
    ],
  });
}
function za(e) {
  let {
      clanSteamID: t,
      langData: n,
      fnOnArtworkLangChange: r,
      fnGetImageHash: i,
      fnLangHasData: a,
      realms: o,
    } = e,
    [s, c, l] = P(),
    u = d(() => {
      let e = i(n.lang);
      return (
        V(
          !e || !e.includes(`.`),
          `ChangeLanguageButton: Unexpected File Extension: ` + e,
        ),
        A.GetClanImageByImageHash(t, e)
      );
    });
  if (!u) console.error(`image does not exists on server`);
  else
    return (0, X.jsxs)(X.Fragment, {
      children: [
        (0, X.jsx)(Jt, {
          toolTipContent: B(`#selectimage_reassign_image_ttip`),
          children: (0, X.jsx)(`img`, {
            "data-lang": n.lang,
            src: Ia,
            onClick: () => c(),
          }),
        }),
        (0, X.jsx)(H, {
          children: (0, X.jsx)(q, {
            active: s,
            children: (0, X.jsx)(Pa, {
              clanImage: u,
              lang: n.lang,
              fnOnArtworkLangChange: r,
              fnLangHasData: a,
              realms: o,
              closeModal: l,
            }),
          }),
        }),
      ],
    });
}
function Ba(e) {
  let { fnOnRemoveImage: t, langData: n } = e,
    [r, i, a] = P();
  return (0, X.jsxs)(X.Fragment, {
    children: [
      (0, X.jsx)(Jt, {
        toolTipContent: B(`#selectimage_delete_image_ttip`),
        children: (0, X.jsx)(`img`, {
          "data-lang": n.lang,
          src: wn,
          onClick: i,
        }),
      }),
      (0, X.jsx)(H, {
        children: (0, X.jsx)(q, {
          active: r,
          children: (0, X.jsx)(N, {
            strTitle: B(`#selectimage_remove_image`),
            strDescription: B(
              `#selectimage_remove_details`,
              B(`#Language_` + I(n.lang)),
            ),
            onOK: () => {
              t(n.lang);
            },
            closeModal: a,
          }),
        }),
      }),
    ],
  });
}
var Va = `dGiOZKKuxfQ-`,
  Ha = `h7-04bl97uc-`,
  Ua = `MhIotXf5RFA-`,
  Wa = `mSMnUkR7SZM-`,
  Ga = `aWAciZoU3Zo-`,
  Ka = `_8AV36Rh-Ve4-`,
  qa = `lxYifi3D8mU-`,
  Ja = `MwNTpeRZ8FM-`,
  Ya = `RdR4GEnIG5Q-`,
  Xa = `epGy6XXAGPQ-`;
function Za(e) {
  let {
      event: t,
      spotlightURLOverride: n,
      fnHandleOpenEvent: r,
      fnImageFailureCallback: i,
      fnFilterImageURLsForKnownFailures: a,
      langOverride: o,
    } = e,
    s = Ke(),
    c = J.useCallback(
      (e) => {
        (e.preventDefault(), r && r(t));
      },
      [t, r],
    ),
    l = o || Pt(K.LANGUAGE),
    [u, f, p] = d(() => [
      t.GetSummaryWithFallback(l),
      t.GetNameWithFallback(l),
      t.BShowLibrarySpotlightText(),
    ]),
    m = `spotlight`,
    h = T.spotlight_main;
  (t.appid == 2434320 || K.EUNIVERSE == 2) &&
    ((m = s
      ? `localized_store_app_spotlight_mobile`
      : `localized_store_app_spotlight`),
    (h = T.full));
  let g = dt(n === void 0 ? t : void 0, m, l, h) ?? (n === void 0 ? [] : [n]);
  a && g && (g = a(g));
  let _ = u.replace(/https:\/\/[^ ]*/gi, ``).trimLeft();
  return (0, X.jsx)(J.Fragment, {
    children: (0, X.jsx)(`div`, {
      className: Ya,
      ref: e.containerRef,
      children: (0, X.jsxs)(Gt, {
        className: F(Xa, Va),
        onActivate: c,
        focusable: !0,
        children: [
          (0, X.jsx)(`div`, {
            className: qa,
            children: (0, X.jsx)(Ve, {
              className: Ja,
              rgSources: g,
              onIncrementalError: (e, t, n) => i && i(t),
            }),
          }),
          (0, X.jsxs)(`div`, {
            className: Ha,
            children: [
              (0, X.jsx)(Ve, {
                className: Ua,
                rgSources: g,
                onIncrementalError: (e, t, n) => i && i(t),
              }),
              (0, X.jsx)(`div`, { className: Ka }),
              (0, X.jsx)(`div`, {
                className: Ga,
                children:
                  p &&
                  (0, X.jsxs)(`div`, {
                    className: `Kirdf-ZVux8-`,
                    children: [
                      (0, X.jsx)(Ve, {
                        className: `D6QCZmpoq5M-`,
                        rgSources: g,
                        onIncrementalError: (e, t, n) => i && i(t),
                      }),
                      (0, X.jsxs)(`div`, {
                        className: `SPJgXF8Oqn4-`,
                        children: [
                          (0, X.jsx)(`div`, {
                            className: `mTAOqZLWhOo-`,
                            children: f,
                          }),
                          (0, X.jsx)(`div`, {
                            className: `_9RjQ-a9Uc6o-`,
                            children: _,
                          }),
                        ],
                      }),
                    ],
                  }),
              }),
            ],
          }),
          (0, X.jsx)(`div`, { className: Wa }),
        ],
      }),
    }),
  });
}
var Qa = `JMbtQkd0K8E-`,
  $a = `snS7KDov-nE-`,
  eo = `nvWdGclp6FI-`,
  to = `xK18jc4N1cw-`,
  no = `IQEedJq4bc8-`,
  ro = `fCimlPrmscM-`,
  io = `e6k9OpDXG-Q-`,
  ao = `seprbrMSMhI-`,
  oo = `_4CNssq7QFLI-`,
  so = `yzbYtn5vgZU-`,
  co = `idlQxtNGVBg-`,
  lo = `mELVvJo8G3c-`,
  uo = `fF5tI3UN-YY-`;
function fo(e) {
  let {
      langOverride: t,
      artworkType: n,
      fnOnLanguagePreviewChange: r,
      clanSteamID: i,
      eventModel: a,
      partnerEventStore: o,
      fnOnRemoveImage: s,
      fnOnArtworkLangChange: c,
      realms: l,
      fnLangHasData: u,
      fnGetImageHashAndExt: f,
    } = e,
    p = f(n, t),
    m = p ? E.GenerateURLFromHashAndExtAndLang(i, p, T.full, t) : ``,
    [h] = d(() => [xo(n, f)]);
  return h == 0
    ? (0, X.jsxs)(`div`, {
        className: ba,
        children: [
          n === `capsule` &&
            (0, X.jsx)(ho, {
              imgURL: K.IMG_URL + `events/defaults/default_img_cover.jpg`,
              eventModel: a,
            }),
          n === `background` &&
            (0, X.jsx)(go, {
              imgURL: K.IMG_URL + `events/defaults/default_img_header.jpg`,
              lang: t,
              eventModel: a,
              partnerEventStore: o,
            }),
          !![
            `spotlight`,
            `localized_store_app_spotlight`,
            `localized_store_app_spotlight_mobile`,
          ].includes(n) &&
            (0, X.jsx)(po, { langOverride: t, artworkType: n, eventModel: a }),
          (0, X.jsx)(`div`, { children: B(`#EventEditor_ArtworkMissing`) }),
        ],
      })
    : (0, X.jsxs)(`div`, {
        className: ba,
        children: [
          n === `capsule` &&
            (0, X.jsx)(ho, { imgURL: m, eventModel: a, langOverride: t }),
          n === `background` &&
            (0, X.jsx)(go, {
              imgURL: m,
              lang: t,
              eventModel: a,
              partnerEventStore: o,
            }),
          n === `spotlight` && (0, X.jsx)(_o, { imgURL: m, event: a, lang: t }),
          n === `localized_store_app_spotlight` &&
            (0, X.jsx)(_o, { imgURL: m, event: a, lang: t }),
          n === `localized_store_app_spotlight_mobile` &&
            (0, X.jsx)(_o, { imgURL: m, event: a, lang: t }),
          (n === `broadcast_left` || n === `broadcast_right`) &&
            (0, X.jsx)(vo, {
              imgURL: m,
              side: n === `broadcast_right` ? `right` : `left`,
            }),
          n === `sale_header` && (0, X.jsx)(yo, { imgURL: m }),
          n === `sale_secondary_background` && (0, X.jsx)(yo, { imgURL: m }),
          n === `sale_overlay` && (0, X.jsx)(bo, { imgURL: m }),
          me.includes(n) &&
            (0, X.jsx)(`img`, {
              className: `_1MBhWd0--I8-`,
              src: Q.GetLocalizedImageGroupForEditAsURL(i, t) ?? void 0,
            }),
          n === `product_banner` && (0, X.jsx)($, { imgURL: m }),
          n === `product_mobile_banner` && (0, X.jsx)($, { imgURL: m }),
          n === `sale_logo` && (0, X.jsx)($, { imgURL: m }),
          n === `sale_cross_promo_logo` && (0, X.jsx)($, { imgURL: m }),
          n === `bestofyear_banner` && (0, X.jsx)($, { imgURL: m }),
          n === `bestofyear_banner_mobile` && (0, X.jsx)($, { imgURL: m }),
          (0, X.jsx)(La, {
            langOverride: t,
            clanSteamID: i,
            fnOnLanguagePreviewChange: r,
            fnOnRemoveImage: s,
            fnOnArtworkLangChange: c,
            realms: l,
            fnLangHasData: u,
            fnGetImageHash: (e) => Fa(f(n, e) ?? ``),
          }),
        ],
      });
}
function po(e) {
  let { artworkType: t, langOverride: n, eventModel: r } = e,
    i = Ot[t],
    a = J.useMemo(
      () => mo(B(`#EventEditor_ArtworkType_` + t), `${i.width} X ${i.height}`),
      [i.height, i.width, t],
    );
  return (0, X.jsx)(_o, { lang: n, imgURL: a, event: r });
}
function mo(e, t) {
  let n = document.createElement(`canvas`);
  ((n.width = 780), (n.height = 200));
  let r = n.getContext(`2d`);
  for (let e = 0; e < 200; e += 20)
    for (let t = 0; t < 780; t += 20)
      ((r.fillStyle = (t / 20 + e / 20) % 2 == 0 ? `#a405e3ff` : `#000000`),
        r.fillRect(t, e, 20, 20));
  let i = r.createLinearGradient(0, 0, 780, 0);
  (i.addColorStop(0, `rgba(32,32,32,0.8)`),
    i.addColorStop(1, `rgba(60,60,60,0.8)`),
    (r.fillStyle = i),
    r.fillRect(0, 0, 780, 200));
  let a = r.createRadialGradient(390, 100, 0, 390, 100, 650);
  return (
    a.addColorStop(0, `rgba(0,0,0,0)`),
    a.addColorStop(1, `rgba(0,0,0,0.6)`),
    (r.fillStyle = a),
    r.fillRect(0, 0, 780, 200),
    (r.fillStyle = `#fff`),
    (r.font = `32px Arial`),
    (r.textAlign = `center`),
    (r.textBaseline = `middle`),
    r.fillText(e, 390, 80),
    t && ((r.font = `18px Arial`), r.fillText(t, 390, 125)),
    n.toDataURL(`image/png`)
  );
}
function ho(e) {
  let { imgURL: t, eventModel: n, langOverride: r } = e,
    i = at();
  return (0, X.jsx)(`div`, {
    style: { display: `flex`, width: `304px` },
    children: (0, X.jsx)(ve, {
      event: n,
      imageURLOverride: t,
      langOverride: r ?? i,
    }),
  });
}
function go(e) {
  let { lang: t, eventModel: n, partnerEventStore: r } = e,
    i = $t(),
    [a, o, s, c, l] = d(() => [
      n.GetNameWithFallback(t),
      n.GetDescriptionWithFallback(t),
      n.GetSubTitleWithLanguageFallback(t),
      n.type,
      n.AnnouncementGID,
    ]),
    u = o
      ? (0, X.jsx)(We, {
          text: o || ``,
          showErrorInfo: !1,
          event: n,
          languageOverride: ot.Get().GetCurEditLanguage(),
        })
      : B(`#selectimage_display_event_body`);
  return (0, X.jsxs)(`div`, {
    className: Qa,
    children: [
      (0, X.jsx)(`div`, {
        className: $a,
        children: B(`#selectimage_preview_title_1`),
      }),
      (0, X.jsx)(`div`, {
        className: F(eo, `DetailPageExample`),
        children: (0, X.jsxs)(`div`, {
          className: to,
          children: [
            (0, X.jsx)(`div`, {
              className: no,
              children: (0, X.jsx)(`img`, { src: e.imgURL }),
            }),
            (0, X.jsx)(`div`, {
              className: ro,
              children: (0, X.jsxs)(`div`, {
                className: io,
                children: [
                  (0, X.jsx)(`div`, {
                    className: ao,
                    children: a || B(`#selectimage_display_event_title`),
                  }),
                  (0, X.jsx)(`div`, {
                    className: oo,
                    children: s || B(`#selectimage_display_event_subtitle`),
                  }),
                  (0, X.jsx)(`div`, { className: so, children: u }),
                ],
              }),
            }),
          ],
        }),
      }),
      c != 12 &&
        (0, X.jsxs)(J.Fragment, {
          children: [
            (0, X.jsx)(`div`, { className: `y-gExtn9yi8-` }),
            (0, X.jsx)(`div`, {
              className: `snS7KDov-nE-`,
              children: B(`#selectimage_preview_title_2`),
            }),
            (0, X.jsx)(`div`, {
              className: F(`nvWdGclp6FI-`, `DetailPageExample`),
              children: (0, X.jsx)(`div`, {
                className: `wm--jcPYtBE-`,
                children: (0, X.jsx)(
                  Ue,
                  {
                    event: n,
                    emoticonStore: i,
                    partnerEventStore: r,
                    headerClassnames: `editor`,
                    langOverride: t,
                    bDisableBroadcastPlayer: !0,
                  },
                  l,
                ),
              }),
            }),
          ],
        }),
    ],
  });
}
var _o = (e) => {
    let [t] = At(e.event.appid, { include_assets: !0 });
    if (!t) return null;
    let n = t.GetName(),
      r = t.GetAssets()?.GetCommunityIconURL();
    return (0, X.jsx)(`div`, {
      className: co,
      children: (0, X.jsx)(Za, {
        event: e.event,
        strDisplayName: n ?? ``,
        gameIconUrl: r,
        spotlightURLOverride: e.imgURL,
        langOverride: e.lang,
      }),
    });
  },
  vo = (e) => {
    let t = [
      (0, X.jsx)(`img`, { src: e.imgURL }, `img`),
      (0, X.jsx)(`div`, { className: Ma }, `video`),
    ];
    return (
      e.side === `right` && t.reverse(),
      (0, X.jsx)(`div`, { className: lo, children: t })
    );
  },
  yo = (e) =>
    (0, X.jsx)(`div`, {
      className: uo,
      children: (0, X.jsx)(`img`, { style: { width: `100%` }, src: e.imgURL }),
    }),
  bo = (e) =>
    (0, X.jsx)(`div`, {
      className: uo,
      children: (0, X.jsx)(`img`, { style: { width: `100%` }, src: e.imgURL }),
    }),
  $ = (e) =>
    (0, X.jsx)(`div`, {
      className: uo,
      children: (0, X.jsx)(`img`, { style: { width: `100%` }, src: e.imgURL }),
    });
function xo(e, t) {
  let n = 0;
  for (let r = 0; r < 32; ++r) (t(e, r)?.length ?? 0) > 0 && (n += 1);
  return n;
}
var So = `https://partner.steamgames.com/doc/store/localization#supported_languages`;
function Co(e) {
  let {
      artworkType: t,
      headerHint: n,
      appid: r,
      fnToggleMinimize: i,
      realms: a,
      eventModel: o,
      fnLangHasData: s,
      fnGetImageHashAndExt: c,
      fnSetImageURL: l,
      partnerEventStore: u,
    } = e,
    [f] = At(r, { include_assets: !0 }),
    [p, m] = d(() => [o?.GetEventType(), o?.BHasTag(`vo_marketing_message`)]),
    h = p == 36,
    g = null;
  n === 2
    ? (g = (0, X.jsx)(`span`, {
        style: { color: `#C6512B` },
        children: B(`#EventEditor_Required`),
      }))
    : n === 1
      ? (g = (0, X.jsx)(`span`, {
          style: { color: `#D7BC86` },
          children: B(`#EventEditor_Suggested`),
        }))
      : n === 3 &&
        (g = (0, X.jsx)(`span`, {
          style: { color: `#D7BC86` },
          children: B(`#EventEditor_Requested`),
        }));
  let _ = null;
  t === `capsule`
    ? (_ = h
        ? (0, X.jsxs)(X.Fragment, {
            children: [
              (0, X.jsxs)(`p`, {
                children: [
                  (0, X.jsx)(`strong`, {
                    children: B(`#selectimage_tip_design_title`),
                  }),
                  `: `,
                  B(`#selectimage_tip_capsule_creatorhome_1`),
                ],
              }),
              (0, X.jsxs)(`p`, {
                children: [
                  (0, X.jsx)(`strong`, {
                    children: B(`#selectimage_tip_usage_title`),
                  }),
                  `: `,
                  B(`#selectimage_tip_capsule_creatorhome_2`),
                ],
              }),
            ],
          })
        : (0, X.jsxs)(X.Fragment, {
            children: [
              !!m &&
                (0, X.jsxs)(`div`, {
                  className: `GF-R3pK6u-A-`,
                  children: [
                    (0, X.jsx)(`p`, {
                      children: B(`#PartnerEvent_MM_ArtworkTip`),
                    }),
                    (0, X.jsx)(`p`, {
                      children: (0, X.jsx)(`a`, {
                        href: `${K.PARTNER_BASE_URL}doc/store/assets/promos#popup_update`,
                        children: B(`#PartnerEvent_MM_LearnMore`),
                      }),
                    }),
                  ],
                }),
              (0, X.jsxs)(`p`, {
                children: [
                  (0, X.jsx)(`strong`, {
                    children: B(`#selectimage_tip_design_title`),
                  }),
                  `: `,
                  B(`#selectimage_tip_capsule_1`),
                ],
              }),
              (0, X.jsxs)(`p`, {
                children: [
                  (0, X.jsx)(`strong`, {
                    children: B(`#selectimage_tip_usage_title`),
                  }),
                  `: `,
                  B(`#selectimage_tip_capsule_2`),
                ],
              }),
            ],
          }))
    : t === `background`
      ? (_ = (0, X.jsx)(X.Fragment, {
          children: (0, X.jsxs)(`p`, {
            children: [
              (0, X.jsx)(`strong`, {
                children: B(`#selectimage_tip_design_title`),
              }),
              `: `,
              B(`#selectimage_tip_background_1`),
            ],
          }),
        }))
      : t === `spotlight` || t === `localized_store_app_spotlight`
        ? (_ = (0, X.jsx)(X.Fragment, {
            children: (0, X.jsxs)(`p`, {
              children: [
                (0, X.jsx)(`strong`, {
                  children: B(`#selectimage_tip_usage_title`),
                }),
                `: `,
                B(`#selectimage_tip_store_spotlight_1`),
              ],
            }),
          }))
        : t === `localized_store_app_spotlight_mobile`
          ? (_ = (0, X.jsx)(X.Fragment, {
              children: (0, X.jsxs)(`p`, {
                children: [
                  (0, X.jsx)(`strong`, {
                    children: B(`#selectimage_tip_usage_title`),
                  }),
                  `: `,
                  B(`#selectimage_tip_store_mobile_spotlight`),
                ],
              }),
            }))
          : t === `broadcast_left` || t === `broadcast_right`
            ? (_ = (0, X.jsx)(X.Fragment, {
                children: (0, X.jsx)(`p`, {
                  children: B(`#selectimage_tip_broadcast_1`),
                }),
              }))
            : t === `sale_header`
              ? (_ = (0, X.jsxs)(X.Fragment, {
                  children: [
                    (0, X.jsx)(`div`, {
                      className: $e,
                      children: B(`#selectimage_tip_required_title`),
                    }),
                    (0, X.jsxs)(`p`, {
                      children: [
                        (0, X.jsx)(`b`, {
                          children: B(`#selectimage_tip_usage_title`),
                        }),
                        `: `,
                        B(`#selectimage_tip_sale_header_1`),
                      ],
                    }),
                    (0, X.jsxs)(`p`, {
                      children: [
                        (0, X.jsx)(`b`, {
                          children: B(`#selectimage_tip_design_title`),
                        }),
                        `: `,
                        B(`#selectimage_tip_sale_header_2`),
                      ],
                    }),
                    (0, X.jsx)(`p`, {
                      children: B(`#selectimage_tip_sale_header_4`),
                    }),
                    (0, X.jsxs)(`p`, {
                      children: [
                        (0, X.jsx)(`b`, {
                          children: B(`#selectimage_tip_template_title`),
                        }),
                        `: `,
                        (0, X.jsx)(`a`, {
                          href: `https://www.dropbox.com/scl/fo/mhf604o6bdbcfr1scq7bx/h?rlkey=9bk0ggiwuvs4o1jdnej4xsy0c&dl=0`,
                          children: B(`#selectimage_tip_sale_header_3`),
                        }),
                      ],
                    }),
                    (0, X.jsx)(`br`, {}),
                  ],
                }))
              : t === `hero`
                ? f &&
                  (_ = (0, X.jsxs)(X.Fragment, {
                    children: [
                      (0, X.jsx)(`p`, {
                        children: B(`#selectimage_tip_hero_1`),
                      }),
                      !f.GetAssets()?.GetLibraryHeroURL() &&
                        (0, X.jsx)(`p`, {
                          className: `_9rhLFCwqjPg-`,
                          children: B(`#EventEdtior_ArtworkType_hero_warning`),
                        }),
                    ],
                  }))
                : t === `localized_image_group` ||
                    t === `link_capsule` ||
                    t === `sale_section_title` ||
                    t === `schedule_track_art` ||
                    t === `localized_background_art`
                  ? (_ = (0, X.jsxs)(X.Fragment, {
                      children: [
                        (0, X.jsx)(`p`, {
                          children: B(`#ImagePickerLoc_Desc`),
                        }),
                        (0, X.jsx)(`p`, {
                          children: un(
                            `#ImagePickerLoc_Files`,
                            (0, X.jsx)(`a`, {
                              href: So,
                              target: K.IN_CLIENT ? void 0 : `_blank`,
                              children: B(`#ImagePickerLoc_URL`),
                            }),
                          ),
                        }),
                      ],
                    }))
                  : t === `product_banner`
                    ? (_ = (0, X.jsxs)(X.Fragment, {
                        children: [
                          (0, X.jsx)(`div`, {
                            className: k,
                            children: B(`#selectimage_tip_optional_title`),
                          }),
                          (0, X.jsxs)(`p`, {
                            children: [
                              (0, X.jsx)(`b`, {
                                children: B(`#selectimage_tip_usage_title`),
                              }),
                              `: `,
                              B(`#selectimage_tip_sale_product_banner`),
                            ],
                          }),
                        ],
                      }))
                    : t === `product_mobile_banner` ||
                        t === `product_banner_override` ||
                        t === `product_mobile_banner_override`
                      ? (_ = (0, X.jsxs)(X.Fragment, {
                          children: [
                            (0, X.jsx)(`div`, {
                              className: k,
                              children: B(`#selectimage_tip_optional_title`),
                            }),
                            (0, X.jsxs)(`p`, {
                              children: [
                                (0, X.jsx)(`b`, {
                                  children: B(`#selectimage_tip_usage_title`),
                                }),
                                `: `,
                                B(`#selectimage_tip_sale_product_banner`),
                                t === `product_mobile_banner` &&
                                  (0, X.jsxs)(`span`, {
                                    children: [
                                      `  `,
                                      B(
                                        `#selectimage_tip_sale_product_banner_mobile`,
                                      ),
                                    ],
                                  }),
                              ],
                            }),
                          ],
                        }))
                      : t === `tab_bar_background`
                        ? (_ = (0, X.jsxs)(X.Fragment, {
                            children: [
                              (0, X.jsxs)(`p`, {
                                children: [
                                  (0, X.jsx)(`strong`, {
                                    children: B(
                                      `#selectimage_tip_design_title`,
                                    ),
                                  }),
                                  `:`,
                                  B(`#Sale_Tabs_Background_Design`),
                                ],
                              }),
                              (0, X.jsxs)(`p`, {
                                children: [
                                  (0, X.jsx)(`strong`, {
                                    children: B(`#selectimage_tip_usage_title`),
                                  }),
                                  `:`,
                                  B(`#Sale_Tabs_Background_Usage`),
                                ],
                              }),
                            ],
                          }))
                        : t === `sale_logo`
                          ? (_ = (0, X.jsxs)(X.Fragment, {
                              children: [
                                (0, X.jsx)(`div`, {
                                  className: k,
                                  children: B(
                                    `#selectimage_tip_optional_title`,
                                  ),
                                }),
                                (0, X.jsxs)(`p`, {
                                  children: [
                                    (0, X.jsx)(`b`, {
                                      children: B(
                                        `#selectimage_tip_usage_title`,
                                      ),
                                    }),
                                    `: `,
                                    B(`#selectimage_tip_pageLogo`),
                                  ],
                                }),
                              ],
                            }))
                          : t === `sale_cross_promo_logo`
                            ? (_ = (0, X.jsxs)(X.Fragment, {
                                children: [
                                  (0, X.jsx)(`div`, {
                                    className: k,
                                    children: B(
                                      `#selectimage_tip_optional_title`,
                                    ),
                                  }),
                                  (0, X.jsxs)(`p`, {
                                    children: [
                                      (0, X.jsx)(`b`, {
                                        children: B(
                                          `#selectimage_tip_usage_title`,
                                        ),
                                      }),
                                      `: `,
                                      B(
                                        `#selectimage_tip_sale_cross_promo_logo`,
                                      ),
                                    ],
                                  }),
                                ],
                              }))
                            : t === `sale_secondary_background`
                              ? (_ = (0, X.jsxs)(X.Fragment, {
                                  children: [
                                    (0, X.jsx)(`div`, {
                                      className: k,
                                      children: B(
                                        `#selectimage_tip_optional_title`,
                                      ),
                                    }),
                                    (0, X.jsxs)(`p`, {
                                      children: [
                                        (0, X.jsx)(`b`, {
                                          children: B(
                                            `#selectimage_tip_usage_title`,
                                          ),
                                        }),
                                        `: `,
                                        B(
                                          `#selectimage_tip_sale_secondary_background`,
                                        ),
                                      ],
                                    }),
                                  ],
                                }))
                              : (t === `bestofyear_banner` ||
                                  t === `bestofyear_banner_mobile`) &&
                                (_ = (0, X.jsxs)(X.Fragment, {
                                  children: [
                                    (0, X.jsx)(`div`, {
                                      className: $e,
                                      children: B(
                                        `#selectimage_tip_required_title`,
                                      ),
                                    }),
                                    (0, X.jsxs)(`p`, {
                                      children: [
                                        (0, X.jsx)(`b`, {
                                          children: B(
                                            `#selectimage_tip_usage_title`,
                                          ),
                                        }),
                                        `: `,
                                        B(`#selectimage_tip_bestofyear`),
                                      ],
                                    }),
                                  ],
                                }));
  let v = Ot[e.artworkType].width,
    y = Ot[e.artworkType].height;
  return (0, X.jsxs)(`div`, {
    id: e.id,
    className: ja,
    children: [
      !!e.title &&
        (0, X.jsxs)(`div`, {
          className: F(`Y63LZFKwGXE-`, i && `tU9SaxlQ-9k-`),
          onClick: i,
          children: [
            e.title,
            (0, X.jsx)(`span`, { children: `\xA0` }),
            g,
            i &&
              (0, X.jsx)(Cn, {
                bIsMinimized: !!e.bIsMinimized,
                fnToggleMinimize: i,
              }),
          ],
        }),
      !e.bIsMinimized &&
        (0, X.jsxs)(`div`, {
          className: F(`XRZj1OeBHRk-`, `hvd5bQPy4pQ-`),
          children: [
            _,
            !!(v && y) &&
              (0, X.jsxs)(`p`, {
                children: [
                  (0, X.jsx)(`b`, {
                    children: B(`#selectimage_tip_dimensions_title`),
                  }),
                  `:\xA0`,
                  un(`#selectimage_tip1`, bt(v), bt(y)),
                ],
              }),
            !!e.strWarning &&
              (0, X.jsx)(`div`, {
                children: (0, X.jsx)(`p`, {
                  className: `n7RXDTH-Wf8-`,
                  children: e.strWarning,
                }),
              }),
            e.elEventArtworkExample,
            !!(e.elAdditionalControls || e.fnRemoveAllArtwork) &&
              (0, X.jsxs)(`div`, {
                className: `WWzuGfx5KX0-`,
                children: [
                  e.elAdditionalControls,
                  !!e.fnRemoveAllArtwork &&
                    (0, X.jsx)(z, {
                      className: `_1k0t2Q-C2OU-`,
                      onClick: (t) => {
                        j(
                          (0, X.jsx)(wo, {
                            fnRemoveAllArtwork: e.fnRemoveAllArtwork,
                          }),
                          Lt(t) ?? window,
                        );
                      },
                      children: B(`#Sale_RemoveAll`),
                    }),
                ],
              }),
          ],
        }),
      !e.bIsMinimized &&
        (0, X.jsx)(To, {
          clanSteamID: e.clanSteamID,
          title: e.title ?? ``,
          eventModel: o,
          artworkType: e.artworkType,
          realms: a,
          appid: r,
          fnGetImageHashAndExt: c,
          fnSetImageURL: l,
          fnLangHasData: s,
          partnerEventStore: u,
        }),
    ],
  });
}
function wo(e) {
  let { fnRemoveAllArtwork: t, closeModal: n } = e;
  return (0, X.jsx)(N, {
    strTitle: B(`#Sale_RemoveAll`),
    strDescription: B(`#ImageUpload_DeleteAll_Confirm`),
    onOK: () => {
      (t?.(), n?.());
    },
    onCancel: n,
  });
}
function To(e) {
  let {
      artworkType: n,
      realms: r,
      clanSteamID: i,
      fnLangHasData: a,
      fnGetImageHashAndExt: o,
      fnSetImageURL: s,
      eventModel: c,
      appid: l,
      partnerEventStore: u,
    } = e,
    d = n === `localized_image_group`,
    [f, p] = J.useState(at()),
    [m, h] = J.useState([]),
    g = J.useCallback(
      (e, t, n) => {
        let r = [];
        (m.find((t) => t.clanImage.imageid == e.imageid)
          ? (r = m.map((n) =>
              n.clanImage.imageid == e.imageid ? { clanImage: e, lang: t } : n,
            ))
          : n && (r = m.concat({ clanImage: e, lang: t })),
          h(r));
      },
      [m],
    ),
    _ = J.useCallback(
      (e, r, i) => {
        t(() => {
          (Fa(o(n, r) ?? ``) == e.image_hash && s(n, null, r),
            s(n, e, i),
            g(e, i, !1));
        });
      },
      [o, n, s, g],
    );
  return n === `hero`
    ? (0, X.jsx)(`div`, {
        style: { padding: `16px` },
        children: (0, X.jsx)(z, {
          style: { textTransform: `uppercase`, width: `200px` },
          onClick: () =>
            window.open(
              `${K.PARTNER_BASE_URL}admin/game/editbyappid/${l}?activetab=tab_graphicalassets`,
            ),
          children: B(`#ImageUpload_EditHeroImage`),
        }),
      })
    : (0, X.jsxs)(`div`, {
        children: [
          (0, X.jsx)(Eo, {
            list: m,
            fnOnArtworkLanguageChange: _,
            realms: r,
            fnLangHasData: a,
          }),
          (0, X.jsx)(`div`, {
            children: (0, X.jsx)(`div`, {
              className: F(Da, Oa),
              children: (0, X.jsx)(fo, {
                eventModel: c,
                clanSteamID: i,
                fnOnLanguagePreviewChange: (e) => {
                  e != f && p(e);
                },
                langOverride: f,
                fnOnArtworkLangChange: d ? null : _,
                artworkType: n,
                fnOnRemoveImage: d ? null : (e) => s(n, null, e),
                realms: r,
                fnLangHasData: a,
                fnGetImageHashAndExt: o,
                partnerEventStore: u,
              }),
            }),
          }),
        ],
      });
}
var Eo = class extends J.Component {
  ShowLangChangeDialog(e, t) {
    let {
      fnOnArtworkLanguageChange: n,
      realms: r,
      fnLangHasData: i,
    } = this.props;
    j(
      (0, X.jsx)(Pa, {
        clanImage: e,
        lang: t,
        fnOnArtworkLangChange: n,
        fnLangHasData: i,
        realms: r,
      }),
      window,
    );
  }
  GenerateImageMappings() {
    let e = [],
      { list: t } = this.props;
    return (
      t.forEach((t) => {
        let { clanImage: n, lang: r } = t,
          i = B(`#Language_` + I(r));
        e.push(
          (0, X.jsxs)(
            `div`,
            {
              className: rt,
              children: [
                (0, X.jsx)(`span`, {
                  children: B(
                    `#ImageUpload_Success_Mapping`,
                    n.file_name ?? ``,
                    i,
                  ),
                }),
                (0, X.jsx)(`a`, {
                  onClick: () => this.ShowLangChangeDialog(n, r),
                  children: B(`#ImageUpload_Success_Mapping_Change`),
                }),
              ],
            },
            `img_lang_` + t.clanImage.imageid + `_` + r,
          ),
        );
      }),
      e
    );
  }
  render() {
    let { list: e } = this.props;
    if (!e || e.length == 0) return (0, X.jsx)(`div`, {});
    let t = this.GenerateImageMappings();
    return (0, X.jsx)(`div`, { className: Na, children: t });
  }
};
(mn([nn], Eo.prototype, `ShowLangChangeDialog`, null), (Eo = mn([o], Eo)));
function Do(e) {
  let {
      clanSteamID: t,
      appid: n,
      eventModel: r,
      realms: i,
      loc_images: a,
      artworkType: o,
      fnLangHasData: s,
      closeModal: c,
      fnSetImageURL: l,
      partnerEventStore: u,
    } = e,
    [f, p] = (0, J.useState)(!1),
    m = Tt(t, o),
    h = t.GetAccountID(),
    [g] = d(() => [m.GetFilesToUpload().length - m.GetCompletedFiles()]);
  (0, J.useEffect)(() => {
    (p(!1),
      Q.ClearImageGroup(),
      a?.forEach((e, t) => {
        let n = R.InitFromClanID(h, K.EUNIVERSE);
        if (Q.GetAllLocalizedGroupImages().length == 0) {
          let t = e && E.GetHashFromHashAndExt(e),
            r = t && A.GetClanImageByImageHash(n, t);
          r && Q.SetPrimaryImageForImageGroup(r, o);
        }
        Q.SetLocalizedImageGroupAtLang(t, n, e ?? null);
      }),
      p(!0));
  }, [a, h, o]);
  let _ = (0, J.useCallback)(
      (e, t, n = 0) => {
        let r = R.InitFromClanID(h, K.EUNIVERSE),
          i = E.GetHashAndExt(t ?? null);
        if (Q.GetAllLocalizedGroupImages().length == 0) {
          let t = i && E.GetHashFromHashAndExt(i),
            n = t && A.GetClanImageByImageHash(r, t);
          n && Q.SetPrimaryImageForImageGroup(n, e);
        }
        Q.SetLocalizedImageGroupAtLang(n, r, i);
      },
      [h],
    ),
    v = (0, J.useCallback)((e, t) => {
      let n = Q.GetLocalizedImageGroupForEdit()?.localized_images[t];
      return n && n.split(`/`).pop();
    }, []);
  return (0, X.jsxs)(N, {
    onCancel: c,
    closeModal: c,
    bDisableBackgroundDismiss: !0,
    bAllowFullSize: !0,
    className: F(ut, lt),
    strTitle: e.strLocalizedTitle || B(`#ImagePickerLoc_Title`),
    strDescription: e.strLocalizedDescription,
    bOKDisabled: g > 0,
    onOK: () => {
      let t = Q.GetLocalizedImageGroupForEdit();
      for (let e = 0; e < 32; ++e) {
        let n = t?.localized_images[e];
        if (n) {
          let t = n.split(`/`).pop() || ``;
          l(
            o,
            {
              image_hash: Fa(t),
              clanAccountID: h,
              file_type: yt(t) ?? 0,
              imageid: 0,
            },
            e,
          );
        } else l(o, null, e);
      }
      (Q.ClearImageGroup(), e.onOK ? e.onOK() : c?.());
    },
    strOKButtonText: g > 0 ? B(`#ImagePickerLoc_DismissWarning`) : void 0,
    children: [
      f
        ? (0, X.jsxs)(X.Fragment, {
            children: [
              (0, X.jsx)(_a, {
                clanSteamID: t,
                rgSupportArtwork: [o],
                fnSetImageURL: _,
                bAllowPreviousClanImageSelection: !1,
                rgRealmList: i ?? [],
                uploaderOverride: m,
              }),
              (0, X.jsx)(Co, {
                clanSteamID: t,
                eventModel: r,
                artworkType: o,
                title: null,
                appid: n,
                realms: i,
                fnRemoveAllArtwork: () => Q.ClearImageGroup(),
                fnSetImageURL: _,
                fnGetImageHashAndExt: v,
                fnLangHasData: s,
                partnerEventStore: u,
              }),
            ],
          })
        : (0, X.jsx)(O, {
            size: `medium`,
            position: `center`,
            string: B(`#Loading`),
          }),
      e.children,
    ],
  });
}
function Oo(e) {
  let { setting: t, fnUpdateSetting: n, label: r, bHideBlur: i } = e,
    a = J.useMemo(() => {
      let e = [];
      return (
        e.push({ label: B(`#EventEditor_Tile_NoRepeat`), data: `no-repeat` }),
        e.push({ label: B(`#EventEditor_Tile_RepeatX`), data: `repeat-x` }),
        e.push({ label: B(`#EventEditor_Tile_RepeatY`), data: `repeat-y` }),
        e.push({ label: B(`#EventEditor_Tile_Repeat`), data: `repeat` }),
        i ||
          e.push({
            label: B(`#EventEditor_Tile_NoRepeatAndBlur`),
            data: `coverBlur`,
          }),
        e
      );
    }, [i]);
  return (0, X.jsxs)(X.Fragment, {
    children: [
      (0, X.jsx)(G, { children: r || B(`#EventEditor_Tile_Title`) }),
      (0, X.jsx)(W, {
        strDropDownClassName: tt,
        rgOptions: a,
        selectedOption: t || `no-repeat`,
        onChange: (e) => n(e.data),
        bDisableMouseOverlay: !0,
        contextMenuPositionOptions: { bDisableMouseOverlay: !0 },
      }),
    ],
  });
}
function ko(e) {
  let { closeModal: t, imgGroup: n, fnUpdateImageGroup: r, eventModel: i } = e,
    { openColorPicker: a } = wr(),
    [o, s] = (0, J.useState)(() => n),
    [c, l, u, f, p, m, h, g] = d(() => [
      o.repeat_setting,
      o.scaling_setting,
      o.background_color1,
      o.background_color2,
      o.gradient_setting,
      o.position_setting,
      i.GetIncludedRealmList(),
      o.randomize_section_order,
    ]),
    [_] = (0, J.useState)(() => Ao(o.localized_background_art ?? {}));
  return (0, X.jsxs)(Do, {
    strLocalizedTitle: B(`#BackgroundGroups_Configure`),
    strLocalizedDescription: B(`#BackgroundGroups_DialogDesc`),
    appid: i.appid,
    eventModel: i,
    clanSteamID: i.clanSteamID,
    closeModal: t,
    partnerEventStore: Mt,
    artworkType: `localized_background_art`,
    realms: h,
    loc_images: _,
    fnLangHasData: (e) => !!_[e],
    fnGetImageHash: (e, t) => _[t],
    fnSetImageURL: async (e, t, n) => {
      s((e) => {
        let r = { ...e.localized_background_art },
          i = E.GetHashAndExt(t);
        return (
          i ? (r[I(n)] = i) : delete r[I(n)],
          { ...e, localized_background_art: r }
        );
      });
    },
    onOK: () => {
      s((e) => (r(e), t && setTimeout(t, 1), { ...e }));
    },
    children: [
      (0, X.jsxs)(`div`, {
        className: Ci,
        children: [
          (0, X.jsxs)(`div`, {
            className: wi,
            children: [
              (0, X.jsx)(Oo, {
                setting: c,
                fnUpdateSetting: (e) => {
                  s(
                    e === `no-repeat`
                      ? { ...o, repeat_setting: e }
                      : { ...o, repeat_setting: e, scaling_setting: `auto` },
                  );
                },
                label: B(`#BackgroundGroups_Repeating`),
              }),
              (0, X.jsx)(jo, {
                scaling_setting: l ?? `contain`,
                disable: c !== `no-repeat`,
                fnUpdateSetting: (e) => s({ ...o, scaling_setting: e }),
              }),
              l != `cover` &&
                (0, X.jsx)(No, {
                  position_settings: m,
                  fnUpdateSetting: (e) => s({ ...o, position_setting: e }),
                }),
            ],
          }),
          (0, X.jsxs)(`div`, {
            className: Ti,
            children: [
              (0, X.jsx)(G, { children: B(`#BackgroundGroups_Color`) }),
              (0, X.jsxs)(`div`, {
                className: Ei,
                children: [
                  (0, X.jsx)(z, {
                    style: { backgroundColor: u },
                    onClick: (e) =>
                      a(e, {
                        color: u,
                        onChange: (e) =>
                          s({ ...o, background_color1: e || void 0 }),
                      }),
                    children: B(
                      u === void 0
                        ? `#BackgroundGroups_ColorNum_unset`
                        : `#BackgroundGroups_ColorNum`,
                      1,
                    ),
                  }),
                  `\xA0`,
                  (0, X.jsx)(z, {
                    onClick: () => s({ ...o, background_color1: void 0 }),
                    children: B(`#BackgroundGroups_Color_Clear`),
                  }),
                ],
              }),
              (0, X.jsx)(`div`, {
                className: xi,
                children: (0, X.jsx)(z, {
                  onClick: () =>
                    s({ ...o, background_color1: f, background_color2: u }),
                  children: B(`#BackgroundGroups_Color_Swap`),
                }),
              }),
              p !== `single-color` &&
                (0, X.jsxs)(`div`, {
                  className: `j5T-MrFgQ20-`,
                  children: [
                    (0, X.jsx)(z, {
                      style: { backgroundColor: f },
                      onClick: (e) =>
                        a(e, {
                          color: f,
                          onChange: (e) =>
                            s({ ...o, background_color2: e || void 0 }),
                        }),
                      children: B(
                        f === void 0
                          ? `#BackgroundGroups_ColorNum_unset`
                          : `#BackgroundGroups_ColorNum`,
                        2,
                      ),
                    }),
                    `\xA0`,
                    (0, X.jsx)(z, {
                      onClick: () => s({ ...o, background_color2: void 0 }),
                      children: B(`#BackgroundGroups_Color_Clear`),
                    }),
                  ],
                }),
              (0, X.jsx)(Mo, {
                gradient: p ?? `top-to-bottom`,
                fnUpdateSetting: (e) => s({ ...o, gradient_setting: e }),
              }),
            ],
          }),
        ],
      }),
      (0, X.jsx)(ai, {
        clanSteamID: i.clanSteamID,
        children: (0, X.jsx)(qt, {
          checked: !!g,
          onChange: (e) => {
            o.randomize_section_order = e;
          },
          children: B(`#BackgroundGroups_RandomizeSectionOrder`),
        }),
      }),
    ],
  });
}
function Ao(e) {
  let t = gn([], 32, null);
  for (let n in e) {
    let r = Pt(n);
    r != -1 && (t[r] = e[n]);
  }
  return t;
}
function jo(e) {
  let { scaling_setting: t, fnUpdateSetting: n, label: r, disable: i } = e,
    a = J.useMemo(() => {
      let e = [];
      return (
        e.push({ label: B(`#BackgroundGroups_Scaling_cover`), data: `cover` }),
        e.push({
          label: B(`#BackgroundGroups_Scaling_contain`),
          data: `contain`,
        }),
        e.push({ label: B(`#BackgroundGroups_Scaling_fixed`), data: `auto` }),
        e
      );
    }, []);
  return (0, X.jsxs)(X.Fragment, {
    children: [
      (0, X.jsx)(G, { children: r || B(`#BackgroundGroups_Scaling`) }),
      (0, X.jsx)(W, {
        strDropDownClassName: tt,
        disabled: i,
        rgOptions: a,
        selectedOption: t || `cover`,
        onChange: (e) => n(e.data),
        bDisableMouseOverlay: !0,
        contextMenuPositionOptions: { bDisableMouseOverlay: !0 },
      }),
    ],
  });
}
function Mo(e) {
  let { gradient: t, fnUpdateSetting: n, label: r } = e,
    i = J.useMemo(() => {
      let e = [];
      return (
        e.push({
          label: B(`#BackgroundGroups_Gradient_Top`),
          data: `top-to-bottom`,
        }),
        e.push({
          label: B(`#BackgroundGroups_Gradient_Left`),
          data: `left-to-right`,
        }),
        e.push({
          label: B(`#BackgroundGroups_Gradient_TopLeft`),
          data: `top-left-to-bottom-right`,
        }),
        e
      );
    }, []);
  return (0, X.jsxs)(X.Fragment, {
    children: [
      (0, X.jsx)(G, { children: r || B(`#EventEditor_ColorSetting_Title`) }),
      (0, X.jsx)(W, {
        strDropDownClassName: tt,
        rgOptions: i,
        selectedOption: t || `top-to-bottom`,
        onChange: (e) => n(e.data),
        bDisableMouseOverlay: !0,
        contextMenuPositionOptions: { bDisableMouseOverlay: !0 },
      }),
    ],
  });
}
function No(e) {
  let { position_settings: t, fnUpdateSetting: n, label: r } = e,
    i = J.useMemo(() => {
      let e = [];
      return (
        e.push({ label: B(`#BackgroundGroups_Position_Unset`), data: `unset` }),
        e.push({
          label: B(`#BackgroundGroups_Position_Centered`),
          data: `center`,
        }),
        e.push({
          label: B(`#BackgroundGroups_Position_CenteredTop`),
          data: `top center`,
        }),
        e.push({
          label: B(`#BackgroundGroups_Position_TopLeft`),
          data: `top left`,
        }),
        e.push({
          label: B(`#BackgroundGroups_Position_BottomRight`),
          data: `bottom right`,
        }),
        e
      );
    }, []);
  return (0, X.jsxs)(X.Fragment, {
    children: [
      (0, X.jsx)(G, { children: r || B(`#BackgroundGroups_Position`) }),
      (0, X.jsx)(W, {
        strDropDownClassName: tt,
        rgOptions: i,
        selectedOption: t || `unset`,
        onChange: (e) => n(e.data),
        bDisableMouseOverlay: !0,
        contextMenuPositionOptions: { bDisableMouseOverlay: !0 },
      }),
    ],
  });
}
function Po(e) {
  let {
      backgroundImageEditModel: t,
      bBackgroundImgGroupEditMode: n,
      fnSetBackgroundImgGroupEditMode: r,
      bShowAsValveOnly: i,
    } = e,
    [a, o] = (0, J.useState)(t.BIsBackgroundImageEnabled()),
    [s, c, l] = P(),
    u = d(() => t.GetSalePageLastCoverSectionUntilEnd());
  return (0, X.jsx)(`div`, {
    className: F(yi, i && `u6DPgTclyv4-`),
    children: (0, X.jsxs)(H, {
      children: [
        (0, X.jsx)(U, {
          label: B(`#BackgroundGroups_Setting`),
          checked: a,
          onChange: (e) => {
            (o(e), t.SetBackgroundImageEnabled(e));
          },
        }),
        a
          ? (0, X.jsxs)(X.Fragment, {
              children: [
                (0, X.jsx)(U, {
                  label: B(`#BackgroundGroups_EditMode`),
                  tooltip: B(`#BackgroundGroups_EditMode_ttip`),
                  checked: n,
                  onChange: r,
                }),
                (0, X.jsx)(U, {
                  label: B(`#BackgroundGroups_ExtendToEnd`),
                  tooltip: B(`#BackgroundGroups_ExtendToEnd_ttip`),
                  checked: u,
                  onChange: (e) => t.SetSalePageLastCoverSectionUntilEnd(e),
                }),
                (0, X.jsx)(`hr`, {}),
                (0, X.jsx)(z, {
                  onClick: c,
                  children: B(`#BackgroundGroups_ClearAllSettings`),
                }),
                (0, X.jsx)(q, {
                  active: s,
                  children: (0, X.jsx)(N, {
                    strTitle: B(`#EventEditor_GenericAreYouSure`),
                    strDescription: B(
                      `#BackgroundGroups_ClearAllSettings_Desc`,
                    ),
                    bDestructiveWarning: !0,
                    onOK: () => {
                      (t.ClearAllBackgroundImageGroupSettings(), o(!1));
                    },
                    closeModal: l,
                  }),
                }),
              ],
            })
          : (0, X.jsx)(`p`, { children: B(`#BackgroundGroups_Desc`) }),
        (0, X.jsx)(`br`, {}),
        (0, X.jsx)(`a`, {
          href: `${K.PARTNER_BASE_URL}doc/marketing/event_tools/sales/groups`,
          target: `_blank`,
          children: B(`#EventGeneric_SeeDocs`),
        }),
      ],
    }),
  });
}
var Fo = J.forwardRef(function (e, t) {
  let {
      imgGroupDerivedMapping: n,
      backgroundImageEditModel: r,
      groupIndex: i,
      imgGroup: a,
      eventModel: o,
      nTabIndex: s,
    } = e,
    c = at(),
    [l, u, f, p] = d(() => [
      a && n.mapGroupToSections.get(a.background_id),
      (a && n.mapGroupToSections.get(a.background_id)?.sectionUniqueIDs) ?? [],
      s == null
        ? r?.GetSalePageLastCoverSectionUntilEnd()
        : r?.GetTabLastCoverSectionUntilEnd(s),
      s == null ? r?.GetSalePageGroupCount() : r?.GetTabGroupCount(s),
    ]),
    m = f && i + 1 === p,
    [h, g, _] = P(),
    [v, y, b] = P(),
    x;
  l?.nUniqueIDNextSaleSection &&
    (x = C(
      2,
      r.GetSaleSectionByID(l?.nUniqueIDNextSaleSection),
      c,
      o,
      l.nSaleSectionLastIndex + 1,
    ));
  let S;
  if (l && u?.length > 1) {
    let e = u[u.length - 1];
    S = C(2, r?.GetSaleSectionByID(e), c, o, l.nSaleSectionLastIndex);
  }
  return (0, X.jsx)(Sn, {
    bStartMinimized: !1,
    title: B(
      s == null
        ? `#BackgroundGroups_Sale_GroupNum`
        : `#BackgroundGroups_Sale_Tab_GroupNum`,
      i + 1,
    ),
    className: e.classNameHeader,
    children: (0, X.jsxs)(`div`, {
      ref: t,
      children: [
        (0, X.jsx)(z, {
          onClick: g,
          children: B(`#BackgroundGroups_Configure`),
        }),
        (0, X.jsx)(q, {
          active: h,
          children: (0, X.jsx)(ko, {
            imgGroup: a,
            closeModal: _,
            eventModel: o,
            fnUpdateImageGroup: (e) =>
              s == null
                ? r.SetSalePageBackgroundGroup(i, e)
                : r.SetTabBackgroundGroup(s, i, e),
          }),
        }),
        (0, X.jsx)(`br`, {}),
        (0, X.jsx)(`div`, {
          className: Si,
          children: B(`#BackgroundGroups_ContentTitle`),
        }),
        (0, X.jsxs)(`ul`, {
          children: [
            u.map((e) =>
              (0, X.jsx)(
                `li`,
                {
                  children: C(
                    3,
                    r.GetSaleSectionByID(e),
                    c,
                    o,
                    r.GetSaleSectionIndexByID(e, !0),
                  ),
                },
                `li_` + e,
              ),
            ),
            !!m &&
              (0, X.jsx)(`li`, { children: B(`#BackgroundGroups_EndOfList`) }),
          ],
        }),
        !!S &&
          (0, X.jsx)(z, {
            onClick: () =>
              s == null
                ? r.SetSalePageBackgroundGroup(i, {
                    ...a,
                    num_sections: a.num_sections - 1,
                  })
                : r.SetTabBackgroundGroup(s, i, {
                    ...a,
                    num_sections: a.num_sections - 1,
                  }),
            children: B(`#BackgroundGroups_Reduce`, S),
          }),
        !!x &&
          (0, X.jsx)(z, {
            onClick: () =>
              s == null
                ? r.SetSalePageBackgroundGroup(i, {
                    ...a,
                    num_sections: a.num_sections + 1,
                  })
                : r.SetTabBackgroundGroup(s, i, {
                    ...a,
                    num_sections: a.num_sections + 1,
                  }),
            children: B(`#BackgroundGroups_Extend`, x),
          }),
        i > 0 &&
          (0, X.jsxs)(X.Fragment, {
            children: [
              (0, X.jsx)(`hr`, {}),
              (0, X.jsx)(z, {
                className: `_1k0t2Q-C2OU-`,
                onClick: y,
                children: B(`#BackgroundGroups_RemoveThisGroup`),
              }),
              (0, X.jsx)(q, {
                active: v,
                children: (0, X.jsx)(N, {
                  strTitle: B(`#Dialog_AreYouSure`),
                  bDestructiveWarning: !0,
                  strDescription: B(`#BackgroundGroups_RemoveThisGroup_Desc`),
                  onOK: () =>
                    s == null
                      ? r.RemoveSalePageBackgroundGroup(i)
                      : r.RemoveTabBackgroundGroup(s, i),
                  closeModal: b,
                }),
              }),
            ],
          }),
      ],
    }),
  });
});
function Io(e) {
  let { backgroundImageEditModel: t, nTabID: n } = e;
  return (0, X.jsx)(`div`, {
    className: bi,
    children: (0, X.jsx)(z, {
      onClick: (e) =>
        n !== void 0 && n >= 0
          ? t?.AddTabBackgroundGroup(n)
          : t?.AddSalePageBackgroundGroup(),
      children: B(
        n !== void 0 && n >= 0
          ? `#BackgroundGroups_AddNewGroupTab`
          : `#BackgroundGroups_AddNewGroup`,
      ),
    }),
  });
}
function Lo(e) {
  let {
      nTabID: t,
      nSectionUniqueID: n,
      salePageBackgroundDerivedConfig: r,
      backgroundImageEditModel: i,
    } = e,
    a = r.mapFirstSectionToGroup.get(n);
  return n == r.nFirstSaleSectionIDWithoutGroup ||
    n == r.nFirstTabSectionIDWithoutGroup
    ? (0, X.jsx)(Io, { backgroundImageEditModel: i, nTabID: t })
    : a
      ? (0, X.jsx)(Ro, { ...e, groupID: a })
      : null;
}
function Ro(e) {
  let {
      groupID: t,
      nTabID: n,
      salePageBackgroundDerivedConfig: r,
      backgroundImageEditModel: i,
    } = e,
    a =
      n && n >= 0
        ? r.selectedTabBackgroundDef.groups
        : i.GetSalePageGroupDefinition().groups,
    o = a.findIndex((e) => e.background_id === t),
    s = a[o],
    [c, l] = (0, J.useState)(!1);
  (0, J.useEffect)(() => {
    if (!c) return;
    let e = j(
      (0, X.jsx)(N, {
        bAlertDialog: !0,
        closeModal: () => l(!1),
        children: (0, X.jsx)(Fo, {
          backgroundImageEditModel: i,
          groupIndex: o,
          imgGroup: s,
          imgGroupDerivedMapping: r,
          eventModel: i.GetEventModel(),
          nTabIndex: n,
        }),
      }),
      window,
    );
    return () => {
      e.then((e) => e.Close());
    };
  }, [c, i, s, o, n, r]);
  let u = d(() => di.get(t)),
    [f, p] = (0, J.useState)(null),
    m = J.useCallback((e, t) => {
      p(t);
    }, []),
    h = dn(m);
  return (0, X.jsxs)(`div`, {
    className: bi,
    ref: h,
    children: [
      !!(u && f && f > u) &&
        (0, X.jsx)(z, {
          onClick: (e) => l(!0),
          children: B(`#BackgroundGroups_EditBackgroundGroup`),
        }),
      (0, X.jsx)(Fo, {
        backgroundImageEditModel: i,
        groupIndex: o,
        imgGroup: s,
        imgGroupDerivedMapping: r,
        eventModel: i.GetEventModel(),
        nTabIndex: n,
      }),
    ],
  });
}
var zo = `Bn58KEX1KcI-`;
function Bo(e) {
  let { imgGroupDerivedMapping: t } = e,
    [n, r] = (0, J.useState)(!1);
  (0, J.useEffect)(() => {
    if (!n) return;
    let t = j(
      (0, X.jsx)(N, {
        bAlertDialog: !0,
        closeModal: () => r(!1),
        children: (0, X.jsx)(Vo, { ...e }),
      }),
      window,
    );
    return () => {
      t.then((e) => e.Close());
    };
  }, [n, e]);
  let i = d(() => {
      let e = t.selectedTabBackgroundDef?.groups?.[0].background_id;
      if (e) {
        let n = t.mapGroupToSections.get(e);
        if (n) return di.get(n?.nBackgroundGroupID) ?? 0;
      }
      return 0;
    }),
    [a, o] = (0, J.useState)(null),
    s = J.useCallback((e, t) => {
      o(t);
    }, []),
    c = dn(s),
    l = !!(i >= 0 && a && a > i);
  return (0, X.jsxs)(`div`, {
    className: F(bi, zo),
    ref: c,
    children: [
      l &&
        (0, X.jsx)(z, {
          onClick: (e) => r(!0),
          children: B(`#BackgroundGroups_EditBackgroundGroup`),
        }),
      (0, X.jsx)(Vo, { ...e }),
    ],
  });
}
function Vo(e) {
  let { backgroundImageEditModel: t, imgGroupDerivedMapping: n, nTabID: r } = e,
    [i, a] = (0, J.useState)(null),
    [o, s, c, l] = d(() => [
      t?.GetTabLastCoverSectionUntilEnd(r),
      t?.BIsTabEnabled(r),
      n.selectedTabBackgroundDef,
      t?.GetEventModel(),
    ]);
  return (0, X.jsxs)(H, {
    children: [
      (0, X.jsx)(U, {
        label: B(`#BackgroundGroups_TaSetting`),
        checked: s,
        onChange: (e) => {
          if (
            (V(t, `edit model mising`),
            V(r !== void 0, `tab setting missing`),
            r !== void 0 && t)
          ) {
            let n = t.SetTabEnabled(r, e);
            (V(!!n, `Failed to create model TabID ${r}backgroundModel`), a(n));
          } else
            console.error(
              `Failed to enable table group, edit mode: ${!!t}, TabID: ${r}.`,
            );
        },
      }),
      !!s &&
        (0, X.jsxs)(X.Fragment, {
          children: [
            (0, X.jsx)(U, {
              label: B(`#BackgroundGroups_ExtendToEnd`),
              tooltip: B(`#BackgroundGroups_ExtendToEnd_Tab_ttip`),
              checked: o,
              onChange: (e) => t.SetTabLastCoverSectionUntilEnd(r, e),
            }),
            (0, X.jsx)(Fo, {
              backgroundImageEditModel: t,
              groupIndex: 0,
              imgGroup: (c || i)?.groups[0],
              imgGroupDerivedMapping: n,
              eventModel: l,
              nTabIndex: r,
              classNameHeader: `a0LGsk01Sc0-`,
            }),
          ],
        }),
    ],
  });
}
function Ho(e) {
  let {
      promotionName: t,
      eventModel: n,
      bIsPreview: r,
      language: i,
      backgroundImageEditModel: a,
      addtionalAdminButtons: o,
      bDynamicallyCreatedSale: s,
    } = e,
    [c, l] = J.useState(n?.GetDayIndexFromEventStart()),
    [u, f] = J.useState(null),
    p = d(() => n.jsondata.sale_header_disable_top_margin),
    m = we(n, !!S(n)),
    h = Uo(n, i, c, Ne(!!r)),
    [g, y] = (0, J.useState)(!1);
  J.useEffect(() => {
    if (
      n.jsondata.sale_custom_css &&
      !u &&
      r &&
      n.jsondata.sale_vanity_id_valve_approved_for_sale_subpath &&
      Xt() == `community`
    ) {
      let e = document.getElementsByTagName(`HEAD`)[0],
        t = document.createElement(`style`);
      ((t.innerText = pn(n.jsondata.sale_custom_css)), f(t), e.appendChild(t));
    }
    let e = document.getElementsByClassName(`react_landing_background`);
    return (
      V(e.length <= 1, `Must have at most one react_landing_background`),
      e.length >= 1 && (e[0].style.backgroundImage = ``),
      () => {
        u && (u.remove(), f(null));
      }
    );
  }, [n, u, r]);
  let b = n?.jsondata,
    x = J.useMemo(
      () => ({
        promotionName: t,
        clanid: Number(Qt.CLANACCOUNTID),
        nAppIDVOD: Number(b?.broadcast_preroll_vod_appid),
        event: n,
        bIsPreview: r,
        language: i,
        accountIDs: r ? b?.broadcast_whitelist : void 0,
        chat_announcement_giveaway: b?.broadcast_chat_announcement_giveaway,
      }),
      [r, n, b, i, t],
    ),
    ee = d(() => a?.BIsBackgroundImageEnabled() ?? !1),
    te = ii(n?.clanSteamID);
  if (!n || c === void 0)
    return (0, X.jsx)(`div`, {
      className: _n,
      style: { height: `500px` },
      children: (0, X.jsx)(O, { size: `medium`, string: B(`#Loading`) }),
    });
  {
    let e = kr(n),
      u = n.BUsesContentHubForItemSource(),
      d = n.GetSaleSections().some((e) => e.section_type === `contenthubtitle`),
      f = u && d,
      b,
      S = !0;
    e
      ? (b = 0)
      : n.BUsesContentHubForItemSource()
        ? (b = n.jsondata.sale_header_offset === 530 ? 530 : 20)
        : n.GetEventType() == 36
          ? ((b = 0), (S = !1))
          : (b = n.jsondata.sale_header_offset || 0);
    let C = S && n.jsondata.sale_header_offset === 530,
      ne = !Re.Get().BIsPartnerTakeoverActive(
        n.GetContentHubType(),
        n.GetContentHubCategory(),
        n.GetContentHubTag(),
      ),
      re = r
        ? !g && a?.BIsBackgroundImageEnabled()
          ? D.EPreviewMode_EditBackground
          : D.EPreviewMode_Enabled
        : D.EPreviewMode_Disabled,
      ie = ee || n.GetEventType() != 36,
      ae = u ? Ht.NoTransform : Ht.NoTransformSparseContent,
      w = F(
        le,
        p && `_9D3431c8-XE-`,
        C && `_5NaHSqwUb-k-`,
        _[`CustomStyle_${n.jsondata.sale_vanity_id}`],
        `SaleOuterContainer`,
        e && `RG63SnOtLk0-`,
        f && void 0,
      );
    return (0, X.jsx)(H, {
      children: (0, X.jsx)(ke, {
        eventModel: n,
        language: i,
        children: (0, X.jsx)(v, {
          location: r ? 2 : 0,
          children: (0, X.jsxs)(Fr, {
            event: n,
            language: i,
            bIsPreview: !!r,
            personalizedCarousels: m,
            children: [
              ne && (0, X.jsx)(Pe, {}),
              (0, X.jsx)(Dr, { eventModel: n }),
              !!a &&
                (ie || te) &&
                (0, X.jsx)(Po, {
                  backgroundImageEditModel: a,
                  bBackgroundImgGroupEditMode: g,
                  fnSetBackgroundImgGroupEditMode: y,
                  bShowAsValveOnly: !ie,
                }),
              (0, X.jsxs)(Gt, {
                style: !f || (C && !e) ? { marginTop: `${b || 0}px` } : void 0,
                className: w,
                scrollIntoViewType: ae,
                children: [
                  e && (0, X.jsx)(Ar, { eventModel: n, language: i }),
                  (0, X.jsx)(Vr, { rgPresenters: n.jsondata.sale_presenters }),
                  (0, X.jsx)(Gr, { event: n, broadcastEmbedContext: x }),
                  (0, X.jsx)(Ko, {
                    ePreviewMode: re,
                    event: n,
                    backgroundImageEditModel: a,
                    language: i,
                    promotionName: t,
                    nSaleDayIndex: c,
                    broadcastEmbedContext: x,
                    selectedTab: h,
                    tagSelection: h?.GetTagSelection(),
                  }),
                  !s &&
                    (0, X.jsx)(ui, {
                      event: n,
                      addtionalAdminButtons: o,
                      fnOnChangeDayIndex: (e) => {
                        e != c && ((n.m_overrideCurrentDay = e), l(e));
                      },
                    }),
                ],
              }),
            ],
          }),
        }),
      }),
    });
  }
}
function Uo(e, t, n, r) {
  let i = d(() => e.GetSaleSectionFirstMatchByType(`tabs`)),
    a = Se(i, t),
    [o] = Je(`tab`, void 0),
    [s] = Je(w, void 0),
    [c] = Je(b, void 0),
    l = J.useMemo(() => {
      let e = a?.filter((e) => !e.hide);
      if (e && e.length > 0) {
        let t = o > 0 ? e.find((e) => e.unique_id == o) : void 0;
        t ||= e[0];
        let n = t === e[0];
        return { selTab: t, bIsDefaultTab: n };
      }
    }, [a, o]),
    u = m(h(s, c), l?.selTab.tab_tag_filter, r),
    f = u?.strParentKey,
    p = u?.strChildKey;
  return J.useMemo(() => {
    if (!l) return;
    let t;
    f && (t = { strParentKey: f, strChildKey: p });
    let r =
      e.jsondata.sale_opt_in_page_name || e.jsondata.prune_list_optin_name;
    return new Te(l.selTab, n, l.bIsDefaultTab, t, r);
  }, [e, n, l, f, p]);
}
function Wo() {
  if (window?.location?.hash)
    return decodeURIComponent(window.location.hash.substring(1).toLowerCase());
}
function Go(e) {
  let {
      event: t,
      language: n,
      nSaleDayIndex: r,
      ePreviewMode: i,
      selectedTab: a,
      backgroundImageEditModel: o,
    } = e,
    [s, c] = J.useState(Be()),
    l = J.useMemo(() => new vi(), []),
    u = J.useCallback(() => c(Be()), []);
  (J.useEffect(
    () => (
      window.addEventListener(`resize`, u),
      () => window.removeEventListener(`resize`, u)
    ),
    [u],
  ),
    J.useEffect(() => {
      let e = ``,
        t = () => {
          let t = Wo();
          if (t && t != e) {
            let n = document.getElementById(t);
            n && ((e = t), n.scrollIntoView({ block: `start` }));
          }
        },
        n = setTimeout(() => t(), 150);
      return (
        window.addEventListener(`hashchange`, t),
        () => {
          (clearTimeout(n), window.removeEventListener(`hashchange`, t));
        }
      );
    }, []));
  let p = f(),
    m = (e, t) => {
      qe(p, { ...(t || {}), tab: e.toString() });
    },
    [h, g] = Je(`controller`),
    [_, v] = d(() => {
      let e = it.GetCreatorHome(t.clanSteamID)?.GetAppIDList().length ?? 0,
        n = t.GetSaleSectionIncludingFooterSections(e);
      return [
        pi(
          t.jsondata.sale_background_img_groups,
          n,
          a && a.GetSectionTabUniqueID(),
        ),
        n,
      ];
    }),
    b = !1,
    x = [{ elements: [], activeTab: new Te(void 0, r) }],
    S = null,
    C = an(),
    ne = Oe(),
    re = Ae(t),
    ie = Ur(v),
    ae = J.useMemo(() => {
      let e = Wo();
      if (!e) return;
      let t = v.findIndex((t) => t.section_anchor === e);
      return t > -1 ? t : void 0;
    }, [v]);
  (v.forEach((r, c) => {
    let u = x[x.length - 1].activeTab;
    if (u && !u.ShouldShowSection(r)) return;
    let d = Re.Get().BIsPartnerTakeoverActive(
        t.GetContentHubType(),
        t.GetContentHubCategory(),
        t.GetContentHubTag(),
      ),
      f = s && !d && !t.jsondata.content_hub_restricted_width,
      p = Le(r, i, t, n, C, re, ie(r));
    if (p === void 0) return;
    if (!p) {
      if (te(r, Me()) && !en.logged_in)
        b ||= ((p = (0, X.jsx)(ee, { section: r, event: t, language: n })), !0);
      else {
        let t = r.diable_tab_id_filtering
          ? new Te(void 0, u && u.GetSaleDay())
          : u;
        (r.section_type == `tabs` &&
          r.tabs?.some((e) => e.unique_id == a?.GetSectionTabUniqueID()) &&
          x.push({ activeTab: a, elements: [] }),
          (p = (0, X.jsx)(Ie, {
            ...e,
            section: r,
            activeTab: t,
            appVisibilityTracker: l,
            selectedTab: a,
            setTabUniqueIDQueryParam: m,
            expanded: f,
            controllerCategory: h,
            setControllerCategory: g,
          })));
      }
    }
    ne && (p = (0, X.jsx)(Rr, { nSectionID: r.unique_id, children: p }));
    let v = x && x.length && x[x.length - 1],
      y = (0, X.jsx)(
        Xo,
        {
          section: r,
          nActiveTabID: v && v.activeTab && v.activeTab.GetSectionTabUniqueID(),
          saleSectionIndex: c,
          ePreviewMode: i,
          salePageBackgroundDerivedConfig: _,
          backgroundImageEditModel: o,
          bExpanded: f,
          children: (0, X.jsx)(ht, { enabled: !ae || c > ae, children: p }),
        },
        `SaleSectionIndex_` + r.unique_id + `_` + c,
      ),
      w = _.mapSectionToGroup.get(r.unique_id);
    (S &&
      S.groupID != w &&
      (x[x.length - 1].elements.push(
        mi(t, S, i, a && a?.GetSectionTabUniqueID()),
      ),
      (S = null)),
      w
        ? ((S ||= {
            groupID: w,
            elSaleSections: [],
            derivedGroupInfo: _.mapGroupToSections.get(w),
          }),
          S.elSaleSections.push(y))
        : x[x.length - 1].elements.push(y));
  }),
    (S &&=
      (x[x.length - 1].elements.push(
        mi(t, S, i, a && a?.GetSectionTabUniqueID()),
      ),
      null)));
  let w = x.map((e, t) =>
    (0, X.jsx)(
      `div`,
      { className: F(y, `SaleSectionTabListContainer`), children: e.elements },
      `TabSection_` + t,
    ),
  );
  return (0, X.jsx)(Gt, {
    focusable: !1,
    focusableIfEmpty: !0,
    navKey: `SaleSectionListContainer`,
    children: w,
  });
}
var Ko = a(Go);
function qo(e) {
  let {
    visibility_by_door_index_state: t,
    door_index_visibility: n,
    children: r,
  } = e;
  return t && n != null
    ? (0, X.jsx)(Jo, {
        visibility_by_door_index_state: t,
        door_index_visibility: n,
        children: r,
      })
    : (0, X.jsx)(X.Fragment, { children: r });
}
function Jo(e) {
  let {
      visibility_by_door_index_state: t,
      door_index_visibility: n,
      children: r,
    } = e,
    i = ye(n);
  return (t == `hide_when_open_door_index` && i) ||
    (t == `show_when_open_door_index` && !i)
    ? null
    : (0, X.jsx)(X.Fragment, { children: r });
}
function Yo({ children: e, onChange: t }) {
  return (
    J.useRef(null),
    (0, J.useEffect)(() => {
      t(!!J.Children.toArray(e).filter(Boolean).length);
    }, [e, t]),
    e
  );
}
function Xo(e) {
  let {
      section: t,
      saleSectionIndex: n,
      nActiveTabID: r,
      ePreviewMode: i,
      salePageBackgroundDerivedConfig: a,
      backgroundImageEditModel: o,
      bExpanded: s,
      children: c,
    } = e,
    l = t.section_anchor ? t.section_anchor : ze + (t.unique_id || n),
    u = t.section_type != `tabs`,
    [d, f] = (0, J.useState)(!0);
  return d
    ? (0, X.jsx)(H, {
        children: (0, X.jsx)(qo, {
          visibility_by_door_index_state: t.visibility_by_door_index_state,
          door_index_visibility: t.door_index_visibility,
          children: u
            ? (0, X.jsx)(Gt, {
                navKey: l,
                id: l,
                className: F({
                  [p]: !0,
                  SaleSectionCtn: !0,
                  [t.section_type]: !0,
                  [t.internal_section_data?.internal_type || ``]: !0,
                  expanded: s,
                  [t.single_item_style || ``]: !0,
                  [x]: i == D.EPreviewMode_EditBackground,
                  [ue]: t.collapse_header_space,
                }),
                children:
                  i === D.EPreviewMode_EditBackground && o
                    ? (0, X.jsxs)(X.Fragment, {
                        children: [
                          c,
                          (0, X.jsx)(Lo, {
                            nSectionUniqueID: t.unique_id || n,
                            nTabID: r,
                            salePageBackgroundDerivedConfig: a,
                            backgroundImageEditModel: o,
                          }),
                        ],
                      })
                    : (0, X.jsx)(Yo, { onChange: f, children: c }),
              })
            : (0, X.jsx)(X.Fragment, {
                children:
                  i === D.EPreviewMode_EditBackground && o
                    ? (0, X.jsxs)(`div`, {
                        id: l,
                        className: F({
                          [p]: !0,
                          [x]: !0,
                          [ue]: t.collapse_header_space,
                        }),
                        children: [
                          c,
                          (0, X.jsx)(Bo, {
                            backgroundImageEditModel: o,
                            nTabID: r,
                            imgGroupDerivedMapping: a,
                          }),
                        ],
                      })
                    : (0, X.jsx)(Yo, { onChange: f, children: c }),
              }),
        }),
      })
    : null;
}
export { Ho as t };
