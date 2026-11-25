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
  Bt as m,
  Cn as h,
  D as g,
  Dn as _,
  E as v,
  Fn as y,
  Ht as b,
  It as x,
  K as S,
  Mn as C,
  O as w,
  P as T,
  Pn as ee,
  Yt as te,
  gn as ne,
  k as E,
  kn as D,
  mn as re,
  nn as ie,
  tn as ae,
  vn as oe,
  yn as se,
} from "./chunk~6b8ddcaac8.js";
import {
  T as ce,
  V as le,
  W as ue,
  at as O,
  ot as de,
  st as k,
  v as fe,
} from "./chunk~f57d770d64.js";
import {
  $ as pe,
  Dt as me,
  F as he,
  St as ge,
  Tt as _e,
  X as ve,
  Y as ye,
  Z as be,
  a as xe,
  b as Se,
  c as Ce,
  d as we,
  et as Te,
  it as Ee,
  l as A,
  n as De,
  nt as Oe,
  o as ke,
  r as Ae,
  rt as je,
  s as Me,
  t as Ne,
  u as Pe,
  v as Fe,
} from "./chunk~2185942436.js";
import { c as Ie, i as Le } from "./chunk~4eed35ad1f.js";
import { t as Re } from "./chunk~f0141d9521.js";
import { Bt as ze, a as Be, yt as Ve } from "./chunk~cf3721cc1c.js";
import { n as He } from "./chunk~16aefcf65f.js";
import "./chunk~8681f5c764.js";
import { i as Ue } from "./chunk~2f085f1384.js";
import { a as We, o as Ge } from "./chunk~af36c62e9f.js";
import { t as Ke } from "./chunk~eefd71512b.js";
import {
  E as qe,
  M as Je,
  N as Ye,
  f as j,
  n as Xe,
  p as Ze,
  t as Qe,
  u as $e,
  v as et,
  y as tt,
} from "./chunk~2f8c67b4de.js";
import { l as nt } from "./chunk~7b4b9eb713.js";
import { a as rt, i as it, r as at, t as ot } from "./chunk~91ae5e1167.js";
import { o as st, s as ct } from "./chunk~95ecbf576c.js";
import { a as lt } from "./chunk~5a091db425.js";
import { n as ut } from "./chunk~e70aabe4d7.js";
import { n as dt, t as ft } from "./chunk~710e3cfd2f.js";
import { O as pt } from "./chunk~b8ca037aae.js";
import { r as mt } from "./chunk~a243b6a34b.js";
import {
  a as ht,
  c as gt,
  f as _t,
  h as vt,
  i as yt,
  l as bt,
  m as xt,
  n as St,
  p as M,
  r as Ct,
  s as wt,
  u as Tt,
} from "./chunk~0be5d7b286.js";
import { a as Et, n as Dt } from "./chunk~a7c5e71e12.js";
import { t as Ot } from "./chunk~e60a8972cb.js";
import { n as kt } from "./chunk~fc8a9e4879.js";
import {
  $y as At,
  AS as N,
  Ar as jt,
  Bx as Mt,
  Gu as Nt,
  Hn as P,
  IS as Pt,
  Ib as F,
  In as I,
  Jr as Ft,
  Ll as L,
  Ln as It,
  Lr as Lt,
  Ol as Rt,
  Or as zt,
  Pc as R,
  Ru as Bt,
  TS as z,
  Vc as Vt,
  Vn as Ht,
  Vx as B,
  Wi as Ut,
  Xr as Wt,
  Xu as Gt,
  Yb as Kt,
  Zy as V,
  _i as qt,
  _x as Jt,
  a as Yt,
  bx as Xt,
  cS as Zt,
  eS as Qt,
  eb as $t,
  ex as en,
  fr as H,
  hs as tn,
  ib as U,
  id as nn,
  jc as rn,
  ko as an,
  lS as W,
  lb as on,
  ll as sn,
  lx as cn,
  nl as ln,
  ol as G,
  pr as un,
  qb as dn,
  rr as K,
  rx as fn,
  sS as pn,
  t as mn,
  tu as hn,
  vl as gn,
  vr as _n,
  vx as q,
  xr as vn,
  yn as J,
  zx as yn,
} from "./main.js";
import { n as bn, t as xn } from "./chunk~ec644f97c6.js";
import { t as Sn } from "./chunk~cf8a297cc4.js";
var Y = e(r(), 1);
function Cn([e, t, n]) {
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
function wn([e, t, n]) {
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
function Tn(e) {
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
function En(e) {
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
function Dn(e) {
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
function On(e) {
  let t = Cn([e.r / 255, e.g / 255, e.b / 255]);
  return { h: t[0], s: t[1], v: t[2], a: e.a };
}
function kn(e) {
  let t = wn([e.h, e.s, e.v]);
  return { r: t[0] * 255, g: t[1] * 255, b: t[2] * 255, a: e.a };
}
var An = [`hex`, `rgb`, `hsl`];
function jn(e) {
  return Math.round(e * 100) / 100;
}
function Mn(e) {
  let { r: t, g: n, b: r, a: i } = kn(e);
  return { r: Math.round(t), g: Math.round(n), b: Math.round(r), a: i };
}
function Nn(e, t) {
  let { r: n, g: r, b: i, a } = e,
    o = a >= 1;
  switch (t) {
    case `hex`:
      return En(e);
    case `rgb`:
      return o ? `rgb(${n}, ${r}, ${i})` : `rgba(${n}, ${r}, ${i}, ${jn(a)})`;
    case `hsl`: {
      let { h: t, s: n, l: r } = Dn(e),
        i = `${Math.round(t)}, ${Math.round(n * 100)}%, ${Math.round(r * 100)}%`;
      return o ? `hsl(${i})` : `hsla(${i}, ${jn(a)})`;
    }
  }
}
function Pn(e) {
  return `rgba(${e.r}, ${e.g}, ${e.b}, ${jn(e.a)})`;
}
function Fn(e) {
  let t = /^#?([0-9a-f]{3,4})$/i.exec(e)?.[1],
    n = Tn(t ? t.replace(/./g, `$&$&`) : e);
  return n && { ...n, a: jn(n.a) };
}
function In(e) {
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
      r: B(Math.round(parseFloat(n)), 0, 255),
      g: B(Math.round(parseFloat(r)), 0, 255),
      b: B(Math.round(parseFloat(i)), 0, 255),
      a: B(s, 0, 1),
    }
  );
}
var Ln;
function Rn(e) {
  if (typeof CSS > `u` || !CSS.supports(`color`, e)) return;
  if (Ln === void 0) {
    let e = document.createElement(`canvas`);
    ((e.width = e.height = 1),
      (Ln = e.getContext(`2d`, { willReadFrequently: !0 })));
  }
  let t = Ln;
  if (!t) return;
  (t.clearRect(0, 0, 1, 1),
    (t.fillStyle = `#000000`),
    (t.fillStyle = e),
    t.fillRect(0, 0, 1, 1));
  let [n, r, i, a] = t.getImageData(0, 0, 1, 1).data;
  return { r: n, g: r, b: i, a: jn(a / 255) };
}
function zn(e) {
  let t = e?.trim();
  if (t) return Fn(t) ?? In(t) ?? Rn(t);
}
var Bn = `FcfcNn7MYQM-`,
  Vn = `mBPBMKMRyFc-`,
  Hn = `Wi9Z0cIQBJQ-`,
  Un = `CG-aPa5ETcg-`,
  Wn = `XqWa8m4TS-o-`,
  Gn = `CT-fGhlJtb8-`,
  Kn = `_-1iQ2DUgeIw-`,
  qn = `_6empc5TVW6c-`,
  Jn = `X3PwdzXulJQ-`,
  Yn = `_362FAsYdx9w-`,
  Xn = `f8RIg1qa2ts-`,
  Zn = `IzorRe2k8io-`,
  Qn = `qWqNnw1hGLY-`,
  $n = `xVJaIlx-dnY-`,
  er = `GOiXAHGmWGg-`,
  tr = `CJ0nwSBwrpE-`,
  nr = `pS4NM2hdvRk-`,
  rr = `VSND6o6qGDA-`,
  X = c(),
  ir =
    `#000000.#1b1b1b.#333333.#4d4d4d.#666666.#808080.#999999.#b3b3b3.#d9d9d9.#ffffff.#e53935.#fb8c00.#fdd835.#7cb342.#43a047.#00897b.#00acc1.#1e88e5.#8e24aa.#d81b60.#ef9a9a.#ffcc80.#fff59d.#c5e1a5.#a5d6a7.#80cbc4.#80deea.#90caf9.#ce93d8.#f48fb1.#b71c1c.#e65100.#f57f17.#33691e.#1b5e20.#004d40.#006064.#0d47a1.#4a148c.#880e4f`.split(
      `.`,
    ),
  ar = `rgba(255, 255, 255, 1)`,
  or = `SharedColorPicker_Format`,
  sr = `ColorPickerSampling`,
  cr = 0.01,
  lr = 0.1;
function ur(e) {
  let {
      color: t,
      onChange: n,
      strTitle: r,
      disableAlpha: i,
      onSubmit: a,
      children: o,
    } = e,
    [s, c] = (0, Y.useState)(() => fr(t, i)),
    l = (0, Y.useRef)(void 0);
  (0, Y.useEffect)(() => {
    let e = zn(t);
    !e || (l.current && dr(e, l.current, i)) || c((e) => Z(t, e.h, i) ?? e);
  }, [t, i]);
  let u = (0, Y.useCallback)(
      (e) => {
        let t = i ? { ...e, a: 1 } : e;
        c(t);
        let r = Mn(t);
        ((l.current = r), n(Pn(r)));
      },
      [i, n],
    ),
    d = Mn(s),
    f = Nn({ ...d, a: 1 }, `hex`),
    p = Pn(d);
  return (0, X.jsxs)(`div`, {
    className: R(Bn, `noOpinionatedGlobalStyles`),
    style: {
      "--colorpicker-hue": `hsl( ${s.h}deg 100% 50% )`,
      "--colorpicker-opaque": f,
      "--colorpicker-current": p,
    },
    children: [
      !!r && (0, X.jsx)(`div`, { className: `GEaX-EfeXNg-`, children: r }),
      (0, X.jsx)(hr, { hsva: s, fnSetColor: u }),
      (0, X.jsx)(gr, {
        className: Gn,
        strLabel: F.Localize(`#ColorPicker_Hue`),
        nMax: 360,
        nValue: Math.round(s.h),
        strValueText: `${Math.round(s.h)}°`,
        fnSetValue: (e) => u({ ...s, h: e }),
      }),
      !i &&
        (0, X.jsx)(gr, {
          className: `xV4lUfTUFc4-`,
          strLabel: F.Localize(`#ColorPicker_Opacity`),
          nMax: 100,
          nValue: Math.round(s.a * 100),
          strValueText: `${Math.round(s.a * 100)}%`,
          fnSetValue: (e) => u({ ...s, a: e / 100 }),
        }),
      (0, X.jsx)(_r, { hsva: s, disableAlpha: i, fnSetColor: u, onSubmit: a }),
      (0, X.jsx)(yr, {
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
function dr(e, t, n) {
  return (
    e.r === t.r &&
    e.g === t.g &&
    e.b === t.b &&
    (n || Math.abs(e.a - t.a) < 0.01)
  );
}
function fr(e, t) {
  return Z(e, 0, t) ?? Z(ar, 0, t);
}
function Z(e, t, n) {
  let r = zn(e);
  if (!r) return;
  let i = On(n ? { ...r, a: 1 } : r);
  return i.s === 0 || i.v === 0 ? { ...i, h: t } : i;
}
function pr(e) {
  let t = (t) => {
    let n = t.currentTarget.getBoundingClientRect(),
      r = n.width ? (t.clientX - n.left) / n.width : 0,
      i = n.height ? (t.clientY - n.top) / n.height : 0;
    e(B(r, 0, 1), B(i, 0, 1));
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
function mr(e, t, n) {
  let r = e.shiftKey ? lr : cr;
  if (e.key === t) return r;
  if (e.key === n) return -r;
}
function hr(e) {
  let { hsva: t, fnSetColor: n } = e,
    r = pr((e, r) => n({ ...t, s: e, v: 1 - r }));
  return (0, X.jsx)(`div`, {
    className: Hn,
    role: `slider`,
    tabIndex: 0,
    "aria-label": F.Localize(`#ColorPicker_SaturationBrightness`),
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    "aria-valuenow": Math.round(t.v * 100),
    "aria-valuetext": `${Math.round(t.s * 100)}%, ${Math.round(t.v * 100)}%`,
    onKeyDown: (e) => {
      let r = mr(e, `ArrowRight`, `ArrowLeft`),
        i = mr(e, `ArrowUp`, `ArrowDown`);
      (r !== void 0 || i !== void 0) &&
        (e.preventDefault(),
        n({ ...t, s: B(t.s + (r ?? 0), 0, 1), v: B(t.v + (i ?? 0), 0, 1) }));
    },
    ...r,
    children: (0, X.jsx)(`div`, {
      className: Vn,
      style: { left: `${t.s * 100}%`, top: `${(1 - t.v) * 100}%` },
    }),
  });
}
function gr(e) {
  let {
    className: t,
    strLabel: n,
    nMax: r,
    nValue: i,
    strValueText: a,
    fnSetValue: o,
  } = e;
  return (0, X.jsx)(`div`, {
    className: Un,
    children: (0, X.jsx)(He.Root, {
      min: 0,
      max: r,
      value: [i],
      onValueChange: (e) => o(e[0]),
      children: (0, X.jsx)(He.Track, {
        render: (0, X.jsx)(`div`, { className: R(Wn, t) }),
        children: (0, X.jsx)(He.Handle, {
          render: (e) =>
            (0, X.jsx)(`span`, {
              ...e,
              className: Vn,
              style: { insetInlineStart: `${(i / r) * 100}%` },
              "aria-label": n,
              "aria-valuetext": a,
            }),
        }),
      }),
    }),
  });
}
function _r(e) {
  let { hsva: t, disableAlpha: n, fnSetColor: r, onSubmit: i } = e,
    [a, o] = _e(or),
    s = An.find((e) => e === a) ?? `hex`,
    [c, l] = (0, Y.useState)(void 0),
    u = Nn(Mn(t), s),
    d = c !== void 0 && c.trim() !== `` && !zn(c),
    f = (e) => {
      l(e);
      let i = Z(e, t.h, n);
      i && r(i);
    },
    p = (e) => {
      (o(e), l(void 0));
    };
  return (0, X.jsxs)(`div`, {
    className: Kn,
    children: [
      (0, X.jsxs)(`div`, {
        className: qn,
        children: [
          (0, X.jsx)(`div`, { className: Jn, "aria-hidden": !0 }),
          (0, X.jsx)(`input`, {
            className: R(Yn, d && `_5Zk11eFAaLo-`),
            type: `text`,
            spellCheck: !1,
            autoComplete: `off`,
            "aria-label": F.Localize(`#ColorPicker_ColorValue`),
            "aria-invalid": d,
            value: c ?? u,
            onChange: (e) => f(e.currentTarget.value),
            onBlur: () => l(void 0),
            onKeyDown: (e) => {
              e.key === `Enter` && (e.preventDefault(), l(void 0), i?.());
            },
          }),
          (0, X.jsx)(vr, { hsva: t, disableAlpha: n, fnSetColor: r }),
        ],
      }),
      d &&
        (0, X.jsx)(`div`, {
          className: `tHsVe8Ptn-s-`,
          children: F.Localize(`#ColorPicker_InvalidColor`),
        }),
      (0, X.jsx)(`div`, {
        className: Zn,
        role: `radiogroup`,
        children: An.map((e) =>
          (0, X.jsx)(
            `button`,
            {
              type: `button`,
              role: `radio`,
              "aria-checked": e === s,
              className: R(Qn, e === s && `wBwV8sUsuTo-`),
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
function vr(e) {
  let { hsva: t, disableAlpha: n, fnSetColor: r } = e,
    [i, a] = (0, Y.useState)(!1);
  (0, Y.useEffect)(() => a(`EyeDropper` in window), []);
  let o = async () => {
    let e = document.documentElement;
    e.classList.add(sr);
    try {
      let e = Z((await new window.EyeDropper().open()).sRGBHex, t.h, n);
      e && r({ ...e, a: t.a });
    } catch (e) {
      console.warn(F.Localize(`#Sale_EyeDropperFailed`), e);
    } finally {
      e.classList.remove(sr);
    }
  };
  if (!i) return null;
  let s = F.Localize(`#Sale_BackgroundColorPicker`);
  return (0, X.jsx)(Ft, {
    toolTipContent: s,
    children: (0, X.jsx)(`button`, {
      type: `button`,
      className: Xn,
      "aria-label": s,
      onClick: o,
      children: (0, X.jsx)(qt, {}),
    }),
  });
}
function yr(e) {
  let { strCurrentHex: t, bOpaque: n, fnPick: r } = e;
  return (0, X.jsx)(`div`, {
    className: $n,
    role: `group`,
    "aria-label": F.Localize(`#ColorPicker_Palette`),
    children: ir.map((e) => {
      let i = n && e === t;
      return (0, X.jsx)(
        `button`,
        {
          type: `button`,
          className: R(er, i && `wBwV8sUsuTo-`),
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
var br = Y.createContext(void 0);
function xr(e) {
  let {
      color: t,
      onChange: n,
      onRequestClose: r,
      disableAlpha: i,
      strTitle: a,
      bLivePreview: o = !0,
      fnRestoreChanges: s,
    } = e,
    c = (0, Y.useRef)(null),
    l = (0, Y.useRef)(void 0),
    u = (0, Y.useRef)(!1),
    d = (0, Y.useRef)({
      color: t,
      onChange: n,
      fnRestoreChanges: s,
      bLivePreview: o,
    });
  d.current = { color: t, onChange: n, fnRestoreChanges: s, bLivePreview: o };
  let f = (0, Y.useCallback)(
      (e) => {
        ((l.current = e), o && n(e));
      },
      [o, n],
    ),
    p = (0, Y.useCallback)(() => {
      ((u.current = !0), !o && l.current !== void 0 && n(l.current), r());
    }, [o, n, r]);
  return (
    (0, Y.useEffect)(
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
    (0, Y.useEffect)(() => {
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
      children: (0, X.jsx)(ur, {
        color: t,
        disableAlpha: i,
        strTitle: a ?? F.Localize(`#Button_Color`),
        onChange: f,
        onSubmit: p,
        children: (0, X.jsxs)(`div`, {
          className: tr,
          children: [
            (0, X.jsx)(`button`, {
              type: `button`,
              className: R(nr, rr),
              onClick: p,
              children: F.Localize(`#Button_Save`),
            }),
            (0, X.jsx)(`button`, {
              type: `button`,
              className: nr,
              onClick: r,
              children: F.Localize(`#Button_Cancel`),
            }),
          ],
        }),
      }),
    })
  );
}
function Sr(e, t, n) {
  let r = t.bLivePreview ?? !0,
    i = r ? n?.fnSnapshot() : void 0,
    a = null,
    o = !1,
    s = (0, X.jsx)(xr, {
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
  a = (e instanceof HTMLElement, Lt(s, e, { bDisablePopTop: !0 }));
}
function Cr() {
  let e = (0, Y.useContext)(br);
  return { openColorPicker: (0, Y.useCallback)((t, n) => Sr(t, n, e), [e]) };
}
var wr = `Vvgd20dCqjc-`;
function Tr(e) {
  return (0, X.jsx)(`div`, {
    className: R(wr, e.bValveOnly && `zt09NDfGU3s-`),
    children: (0, X.jsx)(`div`, { children: e.children }),
  });
}
function Er(e) {
  let { eventModel: t } = e,
    { data: n } = ze(t.clanSteamID.GetAccountID());
  if (!n || (!n.can_edit && !n.support_user) || Kt() == `community`) return;
  let r = t.GetAllTags(),
    i = [];
  if (
    (r.includes(`hide_store`) &&
      i.push(F.Localize(`#Sale_SaleEventIsHidden_Reason_ProductHide`)),
    r.includes(`mod_hide_store`) &&
      n.support_user &&
      i.push(F.Localize(`#Sale_SaleEventIsHidden_Reason_Mod`)),
    !t.BIsVisibleEvent() &&
      r.includes(`contenthub`) &&
      i.push(F.Localize(`#Sale_SaleEventIsHidden_ContentHub_Preview`)),
    !(t.BIsVisibleEvent() && i.length == 0))
  )
    return (0, X.jsxs)(Tr, {
      children: [
        !t.BIsVisibleEvent() &&
          (0, X.jsx)(`div`, {
            className: `XZUb9Zq6ctI-`,
            children: F.Localize(`#Sale_SaleEventIsHidden`),
          }),
        i.length > 0 &&
          (0, X.jsxs)(`div`, {
            className: `XZUb9Zq6ctI-`,
            children: [
              F.LocalizePlural(`#Sale_SaleEventIsHidden_Reason`, i.length),
              (0, X.jsx)(`ul`, {
                children: i.map((e) => (0, X.jsx)(`li`, { children: e }, e)),
              }),
            ],
          }),
      ],
    });
}
var Dr = `_4rizx-X0oWo-`;
function Or(e) {
  return (
    !e.jsondata.sale_logo_cross_promo_only &&
    (e.jsondata.localized_sale_logo?.filter(Boolean).length ?? 0) > 0
  );
}
function kr(e) {
  let { eventModel: t, language: n } = e,
    [r, i] = d(() => [
      t.jsondata.sale_logo_url,
      At.GetWithFallback(t.jsondata.localized_sale_logo, n),
    ]);
  return i && i?.length > 0
    ? r
      ? (0, X.jsx)(`a`, {
          className: Dr,
          href: q.STORE_BASE_URL + r,
          children: (0, X.jsx)(Ar, { ...e }),
        })
      : (0, X.jsx)(`div`, {
          className: R(Dr, `SalePageLogoCtn`),
          children: (0, X.jsx)(Ar, { ...e }),
        })
    : null;
}
function Ar(e) {
  let { eventModel: t, language: n } = e,
    r = ut(t, `sale_logo`, n);
  return (0, X.jsx)(`img`, { src: r, alt: `logo` });
}
var jr = `_1Bceni0-cAw-`;
function Mr(e) {
  let { strURL: t } = e;
  return t
    ? (0, X.jsx)(`div`, {
        className: jr,
        children: (0, X.jsx)(`img`, { alt: ``, src: t }),
      })
    : null;
}
function Nr(e) {
  let { event: t, bIsPreview: n } = e,
    r = t.jsondata.sale_background_video_webm,
    i = t.jsondata.sale_background_video_mp4;
  return i || r
    ? (0, X.jsx)(G, {
        children: (0, X.jsxs)(`video`, {
          loop: !0,
          muted: !0,
          autoPlay: !0,
          playsInline: !0,
          className: R(
            se,
            y[`CustomStyle_${t.jsondata.sale_vanity_id}`],
            `SaleBackground`,
            ee,
          ),
          style: {
            backgroundColor: n ? t.jsondata.sale_background_color : void 0,
          },
          children: [
            r && (0, X.jsx)(`source`, { src: r, type: `video/webm` }),
            i &&
              !q.IN_CLIENT &&
              (0, X.jsx)(`source`, { src: i, type: `video/mp4` }),
          ],
        }),
      })
    : null;
}
function Pr(e) {
  let {
      event: t,
      language: n,
      children: r,
      bIsPreview: i,
      personalizedCarousels: a,
    } = e,
    o = Y.useRef(null),
    s = ut(t, `sale_header`, n),
    c = ut(t, `sale_secondary_background`, n),
    [l] = d(() => [t.jsondata.sale_sub_menu]);
  Y.useEffect(() => {
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
      t.jsondata.item_source_type === fe.k_EContentHub &&
      ((t.jsondata.sale_vanity_id &&
        t.jsondata.sale_vanity_id.includes(`contenthubsalepage_`)) ||
        u),
    p = s ? `url(${s})` : `none`;
  return (0, X.jsxs)(X.Fragment, {
    children: [
      l
        ? (0, X.jsx)(ve, {
            event: t,
            language: n,
            bIsPreview: i,
            subMenu: l,
            styleVariation: be.k_SubMenu,
            personalizedCarousels: a,
          })
        : (0, X.jsx)(Mr, { strURL: s }),
      (0, X.jsx)(`div`, {
        className: R({ SaleBackgroundCtn: !0, ContentHubSalePage: f }),
        children: (0, X.jsxs)(`div`, {
          className: R(
            y[`CustomStyle_${t.jsondata.sale_vanity_id}`],
            `SaleCustomCSS`,
            se,
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
                  className: R(qe, Qe, Xe),
                  src: s,
                  alt: `Header`,
                })
              : (0, X.jsx)(`div`, {
                  className: R(qe, Qe),
                  style: {
                    backgroundImage: p,
                    backgroundRepeat: t.jsondata.sale_background_repeat,
                  },
                }),
            (0, X.jsx)(Nr, { event: t, bIsPreview: i }),
            c &&
              (0, X.jsx)(`div`, {
                className: R(`I8KIyXU8ZWk-`, `SaleSecondaryBackground`),
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
var Fr = e(n()),
  Ir = e(l());
function Lr(e) {
  let { nSectionID: t, children: n } = e,
    [r, i] = Y.useState(!1),
    [a, o] = Y.useState(!1);
  Y.useEffect(() => {
    pe.Get().SetMouseOverSection(t, r);
  }, [t, r]);
  let s = d(() => pe.Get().GetMouseOverSectionID()),
    c = t && t == s,
    l = () => pe.Get().JumpToSection(t),
    u = Y.useRef(null);
  return (
    Oe((e) => t == e && (u.current?.scrollIntoView(), o(!0), !0)),
    (0, X.jsxs)(`div`, {
      ref: u,
      className: R({ [p]: !0, [re]: !!c, [ne]: !!a }),
      onAnimationEnd: () => o(!1),
      onMouseEnter: () => i(!0),
      onMouseLeave: () => i(!1),
      children: [
        r &&
          (0, X.jsx)(Ft, {
            toolTipContent: U(`#Sale_SaleEditor_JumpTo_ttip`),
            direction: `top`,
            children: (0, X.jsx)(`button`, {
              className: `BxPO-muNnTI-`,
              onClick: l,
              children: (0, X.jsx)(an, {}),
            }),
          }),
        n,
      ],
    })
  );
}
var Rr = `oj4yraCGjDk-`,
  zr = `oBMBeb6Ow8M-`;
function Br(e) {
  let { rgPresenters: t } = e;
  if (!t || t.length == 0) return null;
  let n = N(q.LANGUAGE);
  return t.length == 1
    ? (0, X.jsx)(`div`, {
        className: R(Rr, `PresenterDisclaimer`),
        children: F.LocalizeReact(
          `#SalePresented_By`,
          (0, X.jsx)(Vr, { presentor: t[0], lang: n }),
        ),
      })
    : (0, X.jsx)(`div`, {
        className: R(Rr, `PresenterDisclaimer`),
        children: F.LocalizeReact(
          `#SalePresented_By_Multi`,
          t
            .slice(0, t.length - 1)
            .map((e, r) =>
              (0, X.jsxs)(
                Y.Fragment,
                {
                  children: [
                    (0, X.jsx)(Vr, { presentor: e, lang: n }),
                    t.length > 2 && `, `,
                  ],
                },
                e.url,
              ),
            ),
          (0, X.jsx)(Vr, { presentor: t[t.length - 1], lang: n }),
        ),
      });
}
function Vr(e) {
  let { presentor: t, lang: n } = e,
    r = nn(t.url);
  return (0, X.jsx)(jt, {
    href: r,
    bUseLinkFilter: !0,
    className: zr,
    children: At.GetWithFallback(t.localized_presenter_name, n),
  });
}
function Hr(e) {
  let t = N(fn.LANGUAGE),
    n = ie(t),
    r = [...new Set(e.flatMap((e) => S(e) || []))].join(`,`),
    i = Y.useMemo(() => (r ? r.split(`,`) : []), [r]),
    a = s({ queries: i.map((e) => ae(e, t, n)), combine: Ur });
  return Y.useCallback(
    (e) => {
      let t = S(e),
        n = t ? i.indexOf(t) : -1;
      return n >= 0 ? a[n] : void 0;
    },
    [i, a],
  );
}
function Ur(e) {
  return e.map((e) => e.data);
}
function Wr(e) {
  let { event: t, broadcastEmbedContext: n } = e,
    r = !!t?.jsondata?.broadcast_display_wide_player,
    i = !!t?.jsondata?.broadcast_dispaly_wide_player_allow_chat;
  return (0, X.jsx)(X.Fragment, {
    children:
      !!(
        t.BEventCanShowBroadcastWidget() && t.BSaleShowBroadcastAtTopOfPage()
      ) &&
      (0, X.jsx)(we, {
        event: t,
        broadcastEmbedContext: n,
        bWideBroadcastDisplay: r,
        bWideBroadcastPermitChat: i,
      }),
  });
}
var Gr = `Fh-jFuR9Yvo-`,
  Kr = `_4rNPfhfRBrc-`,
  qr = `Bc2anSpsdzg-`,
  Jr = `HxVKtqJLU2k-`,
  Yr = `_4oPueAzMcGE-`,
  Xr = `kqyJu6iojzM-`,
  Zr = `UhkkMgNIeQo-`,
  Qr = `YSYpQ5wCRA0-`,
  $r = `gOxlo3KMChI-`,
  ei = `WUODlv8V5dM-`,
  ti = `_7grqK8KjlHk-`;
function ni(e, t) {
  return e ? (t ? !!e.valve_admin : !!(e.valve_admin || e.support_user)) : !1;
}
function ri(e, t) {
  let n = !!(e && e.BIsClanAccount()),
    { data: r } = ze(n ? e.GetAccountID() : 0);
  return n && ni(r, t);
}
function ii(e) {
  let { clanSteamID: t, id: n } = e;
  return ri(t, e.requireAdmin)
    ? (0, X.jsx)(`div`, {
        id: n,
        className: R(e.className, e.requireAdmin ? Je : Ye),
        children: e.children,
      })
    : null;
}
var ai = 12,
  oi = 240;
function si(e) {
  let { event: t } = e,
    [n] = me(ue, void 0),
    [r, i] = Y.useState(!1),
    a = cn(`rgMLRecommenderWishlist`, `application_config`),
    o = Array.isArray(a) && a.length > 0 && Number.isInteger(a[0]);
  return !t.BIsNextFest() || !o || n == le.Random || ce(t) > 0
    ? null
    : (0, X.jsxs)(ii, {
        clanSteamID: t.clanSteamID,
        className: Gr,
        children: [
          (0, X.jsxs)(gn, {
            className: Kr,
            onClick: () => i(!r),
            children: [r ? `▼` : `▶`, ` Next Fest personalized order (VO)`],
          }),
          r && (0, X.jsx)(ci, { event: t, rgRecommendedAppIDs: a }),
        ],
      });
}
function ci(e) {
  let { event: t, rgRecommendedAppIDs: n } = e,
    [r, i] = Y.useState(void 0);
  Et(n, mt);
  let [a, o] = Y.useState(void 0),
    [s, c] = Y.useState(``),
    l = t.jsondata.sale_ml_recommender_weight_exponent || 2.5,
    u = parseFloat(s),
    d = a ?? Ce(t),
    f = u || l,
    p = Y.useMemo(() => Me(n, n, (e) => e, d, f), [n, d, f]),
    m = Y.useMemo(() => new Map(n.map((e, t) => [e, t])), [n]),
    h = Y.useMemo(() => new Map(p.map((e, t) => [e, t])), [p]),
    g = n.length,
    _ = (e) => m.get(e) ?? 0,
    v = (e) => h.get(e) ?? 0,
    y = (e) => hn.Get().GetApp(e)?.GetName() ?? `App ${e}`,
    b = (e) => `hsl(${Math.round((240 * _(e)) / g)}, 80%, 65%)`,
    x = (e, t) =>
      (0, X.jsx)(
        `div`,
        {
          className: R(ti, r == e && `It6LJnFk-X8-`),
          style: { height: ai, color: b(e) },
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
          y1: (_(e) + 0.5) * ai,
          x2: oi,
          y2: (v(e) + 0.5) * ai,
          stroke: t ? `white` : b(e),
          strokeWidth: t ? 2 : 1,
          strokeOpacity: t ? 1 : r === void 0 ? 0.6 : 0.15,
        },
        e,
      );
  return (0, X.jsxs)(`div`, {
    className: qr,
    children: [
      (0, X.jsxs)(`div`, {
        className: Jr,
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
        className: Yr,
        children: [
          (0, X.jsx)(H, {
            className: Xr,
            onClick: () => o(yn()),
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
                className: Zr,
                placeholder: String(l),
                value: s,
                onChange: (e) => c(e.target.value),
              }),
            ],
          }),
          (a !== void 0 || s != ``) &&
            (0, X.jsx)(H, {
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
        className: Qr,
        onMouseLeave: () => i(void 0),
        children: [
          (0, X.jsxs)(`div`, {
            className: $r,
            children: [
              (0, X.jsx)(`div`, {
                className: ei,
                children: `Recommended order`,
              }),
              n.map((e, t) => x(e, `#${t + 1} ${y(e)}`)),
            ],
          }),
          (0, X.jsxs)(`div`, {
            className: $r,
            children: [
              (0, X.jsx)(`div`, { className: ei, children: `\xA0` }),
              (0, X.jsxs)(`svg`, {
                width: oi,
                height: g * ai,
                children: [
                  n.filter((e) => e != r).map((e) => S(e, !1)),
                  r !== void 0 && m.has(r) && S(r, !0),
                ],
              }),
            ],
          }),
          (0, X.jsxs)(`div`, {
            className: $r,
            children: [
              (0, X.jsx)(`div`, { className: ei, children: `Shuffled order` }),
              p.map((e) => x(e, `#${_(e) + 1} ${y(e)}`)),
            ],
          }),
        ],
      }),
    ],
  });
}
function li(e) {
  let { event: t, fnOnChangeDayIndex: n, addtionalAdminButtons: r } = e;
  return (0, X.jsxs)(X.Fragment, {
    children: [
      (0, X.jsx)(si, { event: t }),
      (0, X.jsx)(Ot, {
        eventModel: t,
        fnOnUpdateSaleDayIndex: n,
        addtionalAdminButtons: r,
        bSupportsSticky: !0,
      }),
    ],
  });
}
var ui = new Map();
function di(e, t) {
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
function fi(e, t, n) {
  let r = new Map(),
    i = new Map(),
    a = new Map(),
    o,
    s,
    c = 0,
    { selectedTabBackgroundDef: l, nTabSaleSectionIndex: u } = di(t, n);
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
            pt(n, o)
              ? (u.push(c),
                i.set(c, s.background_id),
                r === 0 && a.set(c, s.background_id))
              : --r;
          }
          let d = e;
          for (; d < t.length && !pt(n, t[d]);) d += 1;
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
              pt(n, e) && i.set(e.unique_id, s.background_id);
            }
        });
        e < t.length && !pt(n, t[e]);
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
function pi(e, t, n, r) {
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
      hi,
      {
        eventModel: e,
        displayDef: i,
        derivedGroupInfo: t.derivedGroupInfo,
        children:
          i && i.randomize_section_order && n !== A.EPreviewMode_EditBackground
            ? (0, X.jsx)(mi, {
                clanEventGID: e.GID,
                elSaleSections: t.elSaleSections,
              })
            : t.elSaleSections,
      },
      `background_group_` + t.groupID,
    )
  );
}
function mi(e) {
  let { clanEventGID: t, elSaleSections: n } = e,
    [r, i] = _e(`sale_section_seed_${t}`, yn());
  if (!n || n.length === 0) return null;
  if (n.length > 1 && r !== void 0) {
    let e = Mt(r);
    return (0, X.jsx)(X.Fragment, { children: Zt(n, 0, e) });
  }
  return (0, X.jsx)(X.Fragment, { children: n });
}
function hi(e) {
  let { displayDef: t, children: n, eventModel: r, derivedGroupInfo: i } = e,
    a = rt(),
    o = Y.useCallback(
      (e, t) => {
        ui.set(i.nBackgroundGroupID, t);
      },
      [i],
    ),
    s = sn(o);
  if (!n || (Array.isArray(n) && n.length == 0)) return null;
  if (!t) return (0, X.jsx)(X.Fragment, { children: n });
  let c;
  if (t.localized_background_art) {
    let e = z(a),
      n =
        e in t.localized_background_art
          ? e
          : $t.GetLanguageFallback(q.LANGUAGE),
      i = t.localized_background_art[n];
    i && (c = k.GenerateURLFromHashAndExt(r.clanSteamID, i));
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
function gi(e) {
  return typeof e == `string` || typeof e == `number` ? e : JSON.stringify(e);
}
var _i = class {
    Keyify = (e) => gi(e);
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
  vi = `H8RsG3p9zyI-`,
  yi = `-ayc8iJmBgg-`,
  bi = `_6D2hAhDIwmY-`,
  xi = `ZP-iX4isxNw-`,
  Si = `AzJ42SXvU7g-`,
  Ci = `DKOEqISmqI8-`,
  wi = `TMYfiVXl17Q-`,
  Ti = `j5T-MrFgQ20-`,
  Ei = class e {
    m_curLocImageGroup = null;
    m_curLocImageGroupType = null;
    constructor() {
      i(this);
    }
    static async BDoesClanImageFileExistsOnCDNOrOrigin(e, t, n, r) {
      let i =
          q.COMMUNITY_BASE_URL +
          `gid/` +
          t.ConvertTo64BitString() +
          `/hasclanimagefile`,
        a = { image_hash_and_ext: n, lang: `` + r };
      return (
        (await Ir.default.get(i, { params: a, cancelToken: e && e.token })).data
          .success == 1
      );
    }
    SetPrimaryImageForImageGroup(e, t) {
      (this.m_curLocImageGroup &&
        this.m_curLocImageGroup.primaryImage.imageid == e.imageid &&
        t == this.m_curLocImageGroupType) ||
        ((this.m_curLocImageGroup = { primaryImage: e, localized_images: [] }),
        (this.m_curLocImageGroupType = t),
        (this.m_curLocImageGroup.localized_images = pn(
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
          : k.GenerateURLFromHashAndExt(e, k.GetHashAndExt(n) ?? ``);
      }
      return null;
    }
    async DetermineAvailableLocalizationForGroup(n) {
      if (!this.m_curLocImageGroup) return;
      let r = this.m_curLocImageGroup.primaryImage,
        i = V.InitFromClanID(r.clanAccountID, q.EUNIVERSE),
        a = k.GetHashAndExt(r) ?? ``,
        o = [];
      for (let t = 0; t < 32; ++t)
        o.push(e.BDoesClanImageFileExistsOnCDNOrOrigin(n, i, a, t));
      let s = await Promise.all(o);
      t(() => {
        for (let e = 0; e < 32; ++e)
          s[e] &&
            (this.m_curLocImageGroup.localized_images[e] =
              k.GenerateURLFromHashAndExtAndLang(
                i,
                a,
                O.full,
                e,
                this.m_curLocImageGroupType ?? void 0,
              ));
      });
    }
    SetLocalizedImageGroupAtLang(e, t, n) {
      this.m_curLocImageGroup &&
        (this.m_curLocImageGroup.localized_images[e] = n
          ? k.GenerateURLFromHashAndExtAndLang(
              t,
              n,
              O.full,
              e,
              this.m_curLocImageGroupType ?? void 0,
            )
          : null);
    }
    AddLocalizeImageUploaded(e, t) {
      if (!this.m_curLocImageGroup) return;
      let n = this.m_curLocImageGroup.primaryImage;
      if (n?.image_hash == e) {
        let e = V.InitFromClanID(n.clanAccountID, q.EUNIVERSE),
          r = k.GetHashAndExt(n);
        r &&
          (this.m_curLocImageGroup.localized_images[t] =
            k.GenerateURLFromHashAndExtAndLang(
              e,
              r,
              O.full,
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
        .map((e) => k.GetHashAndExtFromURL(e));
    }
  };
dn([u], Ei.prototype, `m_curLocImageGroup`, void 0);
var Q = new Ei();
function Di(e, t) {
  let n = Y.useRef(null),
    r = Y.useCallback(
      (t) => {
        t.currentTarget.files.length > 0 &&
          (e(t.currentTarget.files), (t.currentTarget.value = ``));
      },
      [e],
    ),
    i = Y.useCallback(() => n.current?.click(), []);
  return [
    Fr.createPortal(
      (0, X.jsx)(`form`, {
        onSubmit: ki,
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
function Oi(e) {
  let [t, n] = Y.useState(!1);
  return [
    {
      onDragEnter: Y.useCallback((e) => {
        ((e.dataTransfer.files && e.dataTransfer.files[0]) ||
          (e.dataTransfer.types && e.dataTransfer.types[0] == `Files`)) &&
          n(!0);
      }, []),
      onDragLeave: Y.useCallback((e) => {
        Bt(e) && n(!1);
      }, []),
      onDragEnd: Y.useCallback(() => n(!1), []),
      onDragOver: t ? ki : void 0,
      onDrop: Y.useCallback(
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
function ki(e) {
  e.preventDefault();
}
var Ai = `wxWVRBKbQ6Y-`,
  ji = `_1hQVgn9Glyw-`,
  Mi = `OQ-ETv0yIhg-`,
  Ni = `wVGLukava5E-`;
function Pi(e) {
  let {
      onDropFiles: t,
      renderDesciption: n,
      elAdditonalButtons: r,
      elOverrideDragAndDropText: i,
    } = e,
    [a, o] = Oi(t),
    [s, c] = Di(t, {
      accept: `image/png, image/jpeg, image/gif, image/webp`,
      multiple: !0,
    });
  return (0, X.jsxs)(`div`, {
    ...a,
    className: R(o ? ji : Ai, `DragAndDropContainer`),
    children: [
      n?.(),
      (0, X.jsx)(`div`, { children: i || U(`#ImagePicker_DragAndDrop`) }),
      (0, X.jsxs)(`div`, {
        className: Mi,
        children: [
          s,
          (0, X.jsxs)(`label`, {
            onClick: c,
            children: [
              (0, X.jsxs)(`span`, {
                children: [U(`#ImagePicker_OrBrowse`), ` `],
              }),
              (0, X.jsx)(`span`, {
                className: Ni,
                children: U(`#selectimage_select_file`),
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
var Fi = `_5RINCHFuy0Y-`,
  Ii = `GWe0Hc-fT2A-`,
  Li = `Wmeqy6nXS1Y-`,
  Ri = `_698Kbr-wNSM-`,
  zi = `_4l0OY5qTFkk-`,
  Bi = `_4StKqHsfdjg-`,
  Vi = `dp7SyRphVOo-`,
  Hi = `OoUlU8pBBN4-`;
function Ui(e) {
  let {
      imageUploader: t,
      fnUploadComplete: n,
      elOverrideDragAndDropText: r,
      forceResolution: i,
      elAdditonalButtons: a,
      rgRealmList: o,
    } = e,
    [s, c] = d(() => [t.GetUploadImages(), it.Get().GetCurEditLanguage()]),
    l = Y.useCallback(
      async (e) => {
        let n = Array.from(e),
          r = !0;
        for (let e = 0; e < n.length; e++) {
          let i = n[e],
            { language: a } = Ct(i?.name, c);
          try {
            let n = yt(a, c, o);
            ((r = await t.AddImageForLanguage(i, n)),
              r ||
                (console.error(
                  `ImageUploaderPanel.OnDropFiles: failed on i=` +
                    e +
                    ` file=` +
                    i.name,
                ),
                P(
                  (0, X.jsx)(It, {
                    strDescription: U(`#ImagePicker_Error`, i.name),
                  }),
                  window,
                )));
          } catch (e) {
            let t = Gt(e);
            (console.error(
              `ImageUploaderPanel.OnDropFiles: ` + t.strErrorMsg,
              t,
            ),
              P(
                (0, X.jsx)(It, {
                  strDescription: U(`#EventError_Code`, t.strErrorMsg ?? ``),
                }),
                window,
              ));
          }
        }
        return r;
      },
      [c, t, o],
    ),
    u = Y.useMemo(
      () =>
        a instanceof Array
          ? a
          : [(0, X.jsx)(Y.Fragment, { children: a }, `elAdditonalButtons`)],
      [a],
    );
  return (
    d(() => s.map((e) => ({ a: e.GetCurrentImageOption(), b: e.language }))),
    (0, X.jsxs)(Pi, {
      onDropFiles: l,
      elAdditonalButtons: u,
      elOverrideDragAndDropText: r,
      children: [
        (0, X.jsx)(Y.Fragment, {
          children: (0, X.jsx)(`div`, {
            className: Ii,
            children: s.map((e) =>
              (0, X.jsx)(
                Gi,
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
        (0, X.jsx)(Wi, {
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
function Wi(e) {
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
    className: Li,
    children: [
      !!r.length &&
        (0, X.jsx)(H, {
          style: { margin: `8px` },
          onClick: n,
          disabled: !i,
          children: U(`#ImageUpload_Upload`),
        }),
      !!r.length &&
        (0, X.jsx)(H, {
          style: { margin: `8px` },
          onClick: t.ClearImages,
          disabled: a,
          children: U(`#ImageUpload_Clear`),
        }),
    ],
  });
}
var Gi = o(Ki);
function Ki(e) {
  let t = (t) => {
      if (t instanceof ht) {
        t.ResetImage();
        let n = window,
          r = (0, X.jsx)(bt, {
            ownerWin: n,
            uploadFile: t,
            forceResolution: e.forceResolution,
            fileType: e.forceFileType || 3,
          });
        Ht(r, n, `CropModal`, { strTitle: U(`#ImageUpload_CropModalTitle`) });
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
          ((t += ` ${U(`#ImageUpload_Deprecated`)}`),
          (r = U(`#ImageUpload_Deprecated_ttip`))));
      let i;
      return (
        (n.BIsOriginalMinimumDimensions(e) && n.FileTypeMatchesImageTypes(e)) ||
          (i = Fi),
        { label: t, data: e, strOptionClass: i, tooltip: r }
      );
    }).filter((e) => !e.data.bHiddenFromDropdown),
    o = {
      pending: U(`#ImageUpload_Pending`),
      waiting: U(`#ImageUpload_Waiting`),
      uploading: U(`#ImageUpload_Uploading`),
      processing: U(`#ImageUpload_Processing`),
      success: U(`#ImageUpload_SuccessCard`),
      failed: U(`#ImageUpload_Failed`),
    },
    s = n.BSupportsLanguages()
      ? Yi($t.GetLanguageListForRealms(i ?? [Pt.k_ESteamRealmGlobal]))
      : null,
    c = n.IsValidAssetType(e.forceResolution, e.forceFileType),
    l = n.status == `pending`,
    u = o[n.status];
  n.status == `pending` &&
    (c.needsCrop
      ? (u = U(`#ImageUpload_NeedsCrop`))
      : c.error && (u = U(`#ImageUpload_Invalid`)));
  let d,
    f = n.GetCurrentImageOption();
  return (
    f && (d = a?.find((e) => e.data.sKey == f.sKey)?.data),
    (d ||= a?.[0]?.data),
    (0, X.jsxs)(`div`, {
      className: Bi,
      children: [
        (0, X.jsx)(`div`, {
          className: Ri,
          onClick: () => r(n),
          children: (0, X.jsx)(rn, {}),
        }),
        (0, X.jsx)(qi, { asset: n }),
        s &&
          (0, X.jsx)(K, {
            strDropDownClassName: `ZsXFGEgobIY-`,
            rgOptions: s,
            selectedOption: n.language,
            onChange: (e) => (n.language = e.data),
            disabled: !l,
          }),
        a &&
          a?.length > 1 &&
          (0, X.jsx)(K, {
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
          className: R({ [et]: !0, [zi]: n.status == `failed` }),
          children: [
            u,
            wt(n.status) &&
              (0, X.jsx)(`div`, {
                className: `RPxGbDpMPvc-`,
                children: (0, X.jsx)(Ke, { size: `small` }),
              }),
          ],
        }),
        (0, X.jsx)(`div`, { className: zi, children: n.message }),
        l &&
          c.error &&
          (0, X.jsx)(`div`, { className: `_4l0OY5qTFkk-`, children: c.error }),
        l &&
          c.needsCrop &&
          (0, X.jsx)(vn, {
            onClick: () => t(n),
            children: U(`#ImageUpload_OpenEditor`),
          }),
      ],
    })
  );
}
function qi(e) {
  let { asset: t } = e;
  return t.BIsVideo()
    ? (0, X.jsxs)(`div`, {
        className: Vi,
        onClick: (e) => P((0, X.jsx)(Ji, { asset: t }), Nt(e)),
        children: [
          (0, X.jsxs)(`span`, {
            className: Hi,
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
        className: Vi,
        style: { backgroundImage: `url(${t.dataUrl})` },
        children: (0, X.jsxs)(`span`, {
          className: Hi,
          children: [t.width, ` x `, t.height],
        }),
      });
}
function Ji(e) {
  let { asset: t, closeModal: n } = e;
  return (0, X.jsx)(I, {
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
function Yi(e) {
  let t = [],
    n = [];
  for (let t of e) {
    if (t == 25) continue;
    let e = U(`#Language_` + z(t));
    n.push({ label: e, data: t });
  }
  return (
    n.sort((e, t) => e.label.localeCompare(t.label)),
    n.forEach((e) => t.push({ label: e.label, data: e.data })),
    n
  );
}
var Xi = (function (e) {
    return (
      (e[(e.k_eInsertThumbnail = 1)] = `k_eInsertThumbnail`),
      (e[(e.k_eInsertFullImage = 2)] = `k_eInsertFullImage`),
      (e[(e.k_eShowImageGroup = 3)] = `k_eShowImageGroup`),
      (e[(e.k_eInsertVideo = 4)] = `k_eInsertVideo`),
      e
    );
  })({}),
  Zi = `MBOGLVBsJno-`,
  Qi = `W-3Dq3-54Lg-`,
  $i = `quLSuE3pc1o-`,
  ea = `lnTEZ3RD-vc-`,
  ta = `kpa9FPV-AL0-`,
  na = `n8uggtUd8lI-`,
  ra = `PNoxLvZvnxs-`,
  ia = `iGpmTErZND8-`,
  aa = `hAZUPjOGGxE-`,
  oa = `crDJadcMi8A-`,
  sa = `AmP7BU2J8Pw-`;
function ca(e) {
  let { fnSetImageSearch: t } = e,
    n = (0, Y.useRef)(null);
  return (0, X.jsx)(`div`, {
    className: sa,
    children: (0, X.jsx)(`input`, {
      ref: n,
      className: oa,
      type: `text`,
      placeholder: U(`#ImagePicker_Search`),
      onChange: (e) => t(e.currentTarget.value),
      onKeyDown: (e) => {
        e.key == `Escape` && (t(``), n.current && (n.current.value = ``));
      },
    }),
  });
}
var la = Y.memo(function (e) {
  let {
    fileNameSearch: t,
    clanAccountID: n,
    imageInsertCallBack: r,
    fnOnExpandImage: i,
    showImageActions: a = !0,
    InternalOpenLocalizeImageGroup: o,
  } = e;
  return (0, X.jsx)(ua, {
    clanAccountID: n,
    fileNameSearch: t,
    children: (e, t) =>
      e.map((e) =>
        (0, X.jsx)(
          da,
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
function ua(e) {
  let { clanAccountID: t, fileNameSearch: n, children: r } = e,
    i = xt(t),
    a = n.trim().toLowerCase() || ``,
    o = M.GetFilteredClanImagesList(i, a);
  if (o.length == 0) {
    let e = V.InitFromClanID(t, q.EUNIVERSE),
      n = M.GetLoadState(e);
    return n && n.loaded
      ? (0, X.jsx)(
          `div`,
          {
            className: ta,
            children:
              a.length > 0
                ? U(`#ImagePicker_EmptySearch`)
                : U(`#ImagePicker_Empty`),
          },
          `ImagePicker_Result`,
        )
      : n && n.errMsg
        ? (0, X.jsx)(
            `div`,
            { className: na, children: U(`#ImagePicker_Error`, n.errMsg) },
            `ImagePicker_Result`,
          )
        : (0, X.jsx)(
            `div`,
            { className: ta, children: U(`#Loading`) },
            `ImagePicker_Result`,
          );
  }
  return r(o, a);
}
function da(e) {
  let {
      clanImage: t,
      searchStringHilight: n,
      imageInsertCallBack: r,
      OnImageClick: i,
      showImageActions: a,
      fnOnOpenLocalizedImageGroup: o,
    } = e,
    [s, c] = Y.useState(!1),
    l = () => r(t, Xi.k_eInsertFullImage),
    u = () => r(t, Xi.k_eInsertVideo),
    d = () => r(t, Xi.k_eInsertThumbnail),
    f = (e) => {
      t.url &&
        (e.dataTransfer.setData(`text`, t.url),
        M.GetClanImageDragListener().forEach((e) => {
          e(V.InitFromClanID(t.clanAccountID, q.EUNIVERSE), !0);
        }));
    },
    p = (e) => {
      t.url &&
        M.GetClanImageDragListener().forEach((e) => {
          e(V.InitFromClanID(t.clanAccountID, q.EUNIVERSE), !1);
        });
    },
    m = (e) => {
      P(
        (0, X.jsx)(I, {
          strTitle: U(`#ImagePicker_DeleteImageTitle`),
          strDescription: ``,
          onOK: g,
          onCancel: _,
          closeModal: _,
          children: (0, X.jsxs)(Y.Fragment, {
            children: [
              (0, X.jsx)(`div`, {
                children: U(`#ImagePicker_DeleteAreYouSure`, t.file_name ?? ``),
              }),
              (0, X.jsx)(`br`, {}),
              (0, X.jsx)(`br`, {}),
              (0, X.jsx)(`div`, { children: U(`#ImagePicker_DeleteWarning`) }),
            ],
          }),
        }),
        Nt(e) ?? window,
      );
    },
    h = (e) => {
      (console.log(`ClanImageWrapper on delete error: ` + e),
        P(
          (0, X.jsx)(It, {
            strTitle: U(`#Error_FailureNotice`),
            strDescription: U(`#EventDisplay_DeleteEvent_Error`),
            children: (0, X.jsx)(`p`, { children: e }),
          }),
          window,
        ));
    },
    g = () => {
      c(!0);
      let e = V.InitFromClanID(t.clanAccountID, q.EUNIVERSE);
      M.DeleteClanImage(e, t)
        .then((e) => {
          (e.success != 1 && h(Gt(e).strErrorMsg), c(!1));
        })
        .catch((e) => {
          (h(Gt(e).strErrorMsg), c(!1));
        });
    },
    _ = () => {},
    v = () => {
      i && i(t);
    },
    y = t.file_name ? t.file_name : ``,
    b = at(n, y, String(t.imageid), ra),
    x = k.BIsClanImageVideo(t),
    S = a && !s && !x,
    C = a && !s && !x,
    w = a && !s && x,
    T = a && !s && !x;
  return (0, X.jsx)(dt, {
    placeholderHeight: `100vh`,
    className: Zi,
    rootMargin: `0px 0px 100% 0px`,
    children: (0, X.jsxs)(`div`, {
      className: ia,
      children: [
        (0, X.jsx)(`div`, {
          className: Qi,
          style: { backgroundImage: x ? `` : `url( '${t.thumb_url}' )` },
          draggable: !0,
          onDragStart: f,
          onDragEnd: p,
          onDoubleClick: l,
          onClick: v,
          children: (0, X.jsx)(pa, { clanImage: t, className: $i }),
        }),
        S &&
          (0, X.jsx)(`span`, {
            className: `escPuFxqCbM-`,
            onClick: l,
            children: U(`#ImagePicker_FullSize`),
          }),
        s && (0, X.jsx)(Ke, { size: `medium`, className: `_9dVXPw6twXc-` }),
        C &&
          (0, X.jsx)(`span`, {
            className: `_9em3bZdejR0-`,
            onClick: d,
            children: U(`#ImagePicker_Thumbnail`),
          }),
        T &&
          o &&
          (0, X.jsx)(fa, {
            bDeleting: s,
            clanImage: t,
            fnOnOpenLocalizedImageGroup: o,
          }),
        w &&
          (0, X.jsx)(`span`, {
            className: `escPuFxqCbM-`,
            onClick: u,
            children: U(`#ImagePicker_Video`),
          }),
        !s &&
          (0, X.jsx)(`span`, {
            className: `LzW73RDKl40-`,
            onClick: m,
            children: (0, X.jsx)(`img`, {}),
          }),
        (0, X.jsx)(`div`, { className: ea, title: y, children: b }),
      ],
    }),
  });
}
function fa(e) {
  let { clanImage: t, fnOnOpenLocalizedImageGroup: n, bDeleting: r } = e,
    { data: i } = ze(t.clanAccountID);
  return r || !i?.valve_admin
    ? null
    : (0, X.jsx)(`span`, {
        className: R(aa, Ye),
        onClick: () => n?.(t),
        children: `(VO) ` + U(`#ImagePicker_Localized`),
      });
}
function pa(e) {
  let { clanImage: t, className: n } = e;
  return k.BIsClanImageVideo(t)
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
function ma(e) {
  let { clanSteamID: t, closeModal: n, OnClanImageSelected: r } = e,
    i = Y.useCallback(
      (e, t) => {
        (r?.(e, t), n?.());
      },
      [r, n],
    ),
    [a, o] = Y.useState(``);
  return (0, X.jsxs)(I, {
    strTitle: U(`#ImagePicker_Images`),
    strDescription: U(`#ImagePicker_DoubleClickToSelect`),
    bAlertDialog: !0,
    onOK: n,
    onCancel: n,
    children: [
      (0, X.jsx)(ca, { fnSetImageSearch: o }),
      (0, X.jsx)(la, {
        clanAccountID: t.GetAccountID(),
        fileNameSearch: a,
        imageInsertCallBack: i,
        showImageActions: !1,
      }),
    ],
  });
}
function ha(e) {
  let { clanSteamID: t, OnClanImageSelected: n } = e;
  return (0, X.jsxs)(`div`, {
    className: Mi,
    children: [
      (0, X.jsxs)(`label`, {
        htmlFor: `clanimagedialog`,
        children: [
          (0, X.jsxs)(`span`, {
            children: [U(`#ImagePicker_PreviousImages`), ` `],
          }),
          (0, X.jsx)(`span`, {
            className: Ni,
            children: U(`#ImagePicker_PreviousImages2`),
          }),
        ],
      }),
      (0, X.jsx)(`input`, {
        style: { display: `none` },
        id: `clanimagedialog`,
        type: `button`,
        onClick: (e) => {
          P(
            (0, X.jsx)(ma, { clanSteamID: t, OnClanImageSelected: n }),
            Nt(e) ?? window,
          );
        },
      }),
    ],
  });
}
function ga(e) {
  let {
      clanSteamID: t,
      rgSupportArtwork: n,
      localizedPrimaryImage: r,
      bAllowPreviousClanImageSelection: i,
      fnSetImageURL: a,
      rgRealmList: o,
    } = e,
    [s] = d(() => [it.Get().GetCurEditLanguage()]),
    c = St(t, n, r),
    l = e.uploaderOverride || c,
    [u, f] = Y.useState(!1),
    p = Y.useCallback(
      async (e, t) => {
        if (!u) {
          f(!0);
          try {
            let { language: t } = Ct(e.file_name ?? ``, s),
              n = yt(t, s, o);
            await l.AddExistingClanImage(e, n);
          } catch (e) {
            let t = Gt(e);
            (console.error(`AddExistingClanImage: ` + t.strErrorMsg, t),
              P(
                (0, X.jsx)(It, {
                  strDescription: U(`#EventError_Code`, t.strErrorMsg ?? ``),
                }),
                window,
              ));
          }
          f(!1);
        }
      },
      [u, l, s, o],
    ),
    m = Y.useMemo(
      () =>
        i
          ? [
              [
                (0, X.jsx)(
                  ha,
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
          let t = yt(e.language, s, o);
          Q.AddLocalizeImageUploaded(e.origimagehash, t);
        } else {
          let r = M.GetClanImageByImageHash(t, e?.image_hash ?? ``),
            i = n.image.GetCurrentImageOption();
          if (r && i) {
            let e = yt(n.image.language, s, o);
            a(i.artworkType, r, e);
          }
        }
      }
    };
  return (0, X.jsx)(Ui, {
    ...e,
    imageUploader: l,
    rgRealmList: o,
    elAdditonalButtons: u
      ? [
          (0, X.jsx)(
            Ke,
            { position: `center`, size: `medium`, string: U(`#Loading`) },
            `throbbing`,
          ),
        ]
      : m,
    fnUploadComplete: h,
  });
}
var _a = `x0kXRDaNEsY-`,
  va = `tggLx72V-Ck-`,
  ya = `DVwf02s2GtI-`,
  ba = `zREkqfL42-U-`,
  xa = `_7zBg1-UuADM-`,
  Sa = `TMQhyilc41c-`,
  Ca = `t2inDYSKOto-`,
  wa = `-FHzhwwvQvA-`,
  Ta = `ZUy8iSsvilc-`,
  Ea = `XRZj1OeBHRk-`,
  Da = `_2lViMA09hm4-`,
  Oa = `BTC1IyUleCA-`,
  ka = `lEWE2I7Rsj8-`,
  Aa = `_12sYjoMc9wE-`,
  ja = `_8hs8sf5-YPQ-`,
  Ma = `Hy2GxVyZVDA-`;
function Na(e) {
  let {
      clanImage: t,
      closeModal: n,
      lang: r,
      fnOnArtworkLangChange: i,
      realms: a,
      fnLangHasData: o,
    } = e,
    [s, c] = (0, Y.useState)(r),
    l = V.InitFromClanID(t.clanAccountID, q.EUNIVERSE),
    u = d(() => k.GenerateURLFromHashAndExt(l, k.GetHashAndExt(t) ?? ``));
  return (0, X.jsx)(I, {
    strTitle: U(`#selectimage_change_artwork_lang_title`),
    strDescription: U(`#selectimage_change_artworl_lang_desc`),
    onOK: () => i?.(t, r, s),
    onCancel: n,
    closeModal: n,
    children: (0, X.jsxs)(`div`, {
      className: R(et, va),
      children: [
        (0, X.jsx)(`div`, {
          className: ya,
          children: (0, X.jsx)(`img`, { className: _a, src: u }),
        }),
        (0, X.jsx)(ot, {
          selectedLang: s,
          fnLangHasData: o,
          fnOnLanguageChanged: c,
          realms: a,
        }),
      ],
    }),
  });
}
function Pa(e) {
  if (!e) return e;
  let t = e.lastIndexOf(`.`);
  return t === -1 ? e : e.substring(0, t);
}
var Fa = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAFo9M/3AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzcyREYxMUExREVBMTFFOUJFQTREQjZGQTJEQ0UzOTMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzcyREYxMUIxREVBMTFFOUJFQTREQjZGQTJEQ0UzOTMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NzJERjExODFERUExMUU5QkVBNERCNkZBMkRDRTM5MyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NzJERjExOTFERUExMUU5QkVBNERCNkZBMkRDRTM5MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pmk/vzIAAAFiSURBVHjaYnz79i0DCDAB8X8gVgUIIEaoSBmIIQRkvAMIIBADJMUIxBVArI0sAAYAAQTTAwNlTEgcXZDpLFDOHCC+A8Sd6FoEAAIIJBAOZKxAEoTZmAPEKSxQSZitFVCz10D5O1iQdE4AYgsouwOKBUBWvAEyRKF+RQa+QLwFIIDQHYUM/gAxC8hfb6C6QTgLKvkaiGtAikBuUAHiD0g6QZJzob5gYUEz9jXUPU+AWAYWETDwG+o9mGQGLLAFoFbcBGJFIGaDagDHCrIV6ti8ArLCFoc3wf4HCDB84YANVEC9HwPEU4B4EiycQKEqgAUjx+F3INYHYkOoZh6YC0CeEUQLS2Qbi4HYCYgvQ8P8AhC3QOMaJRjRNf4C4m3QcP8ODd4QqM0dyIGEDgKgCtmgUf8dypeBamSERoEALi8sAuUnID4AxIegbHQA18OCRTKOlGgBeSECmuH+E4nfQPWAXQwAHbJ3VkYR2TIAAAAASUVORK5CYII=`;
function Ia(e) {
  let {
    clanSteamID: t,
    fnGetImageHash: n,
    fnLangHasData: r,
    fnOnRemoveImage: i,
  } = e;
  vt(t.GetAccountID());
  let a = Y.useMemo(() => {
      let e = [],
        t = $t.GetLanguageListForRealms([
          Pt.k_ESteamRealmGlobal,
          Pt.k_ESteamRealmChina,
        ]);
      for (let r of t) {
        let t = n(r);
        if (t) {
          let n = z(r),
            i = U(`#Language_` + n);
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
    [o, s, c] = L();
  return (0, X.jsxs)(`div`, {
    className: Oa,
    children: [
      (0, X.jsx)(`div`, {
        className: ka,
        children: U(`#selectimage_uploaded_languages`),
      }),
      (0, X.jsx)(`div`, {
        className: Ta,
        children: a.map((n) =>
          (0, X.jsx)(
            La,
            { langData: n, ...e },
            `lang_select_` + t.GetAccountID() + ` ` + n.strLang,
          ),
        ),
      }),
      !!i &&
        (0, X.jsxs)(H, {
          className: `_1k0t2Q-C2OU-`,
          onClick: s,
          children: [
            U(`#Sale_RemoveAll`),
            (0, X.jsx)(zt, { tooltip: U(`#Sale_RemoveAll_Tooltip`) }),
          ],
        }),
      (0, X.jsx)(J, {
        active: o,
        children: (0, X.jsx)(I, {
          strTitle: U(`#Dialog_AreYouSure`),
          strDescription: U(`#ImageUpload_DeleteAll_Confirm`),
          closeModal: c,
          onOK: () => {
            for (let e = 0; e < 32; e++) r && i && r(e) && i(e);
          },
        }),
      }),
    ],
  });
}
function La(e) {
  let {
      clanSteamID: t,
      langData: n,
      langOverride: r,
      fnOnLanguagePreviewChange: i,
      fnOnArtworkLangChange: a,
      fnOnRemoveImage: o,
    } = e,
    [s, c] = d(() => {
      let e = M.GetClanImageByImageHash(t, n.imgHash),
        i = ``;
      e &&
        (i = k.GenerateURLFromHashAndExtAndLang(
          t,
          k.GetHashAndExt(e),
          O.full,
          n.lang,
        ));
      let a = xa;
      return (r != n.lang && (a = n.imgHash ? ba : Sa), [i, a]);
    });
  return (0, X.jsxs)(`div`, {
    id: n.strLang,
    className: Ca,
    onClick: (e) => {
      let t = N(e.currentTarget.id);
      i(t);
    },
    children: [
      (0, X.jsx)(`div`, { className: c, children: n.locLang }),
      (0, X.jsxs)(`span`, {
        className: wa,
        children: [
          !!s &&
            (0, X.jsx)(`a`, {
              href: s,
              target: `_blank`,
              children: (0, X.jsx)(Wt, {
                toolTipContent: U(`#selectimage_viewimage_ttip`),
                children: tn(),
              }),
            }),
          !!a && (0, X.jsx)(Ra, { ...e }),
          !!o && (0, X.jsx)(za, { fnOnRemoveImage: o, langData: n }),
        ],
      }),
    ],
  });
}
function Ra(e) {
  let {
      clanSteamID: t,
      langData: n,
      fnOnArtworkLangChange: r,
      fnGetImageHash: i,
      fnLangHasData: a,
      realms: o,
    } = e,
    [s, c, l] = L(),
    u = d(() => {
      let e = i(n.lang);
      return (
        W(
          !e || !e.includes(`.`),
          `ChangeLanguageButton: Unexpected File Extension: ` + e,
        ),
        M.GetClanImageByImageHash(t, e)
      );
    });
  if (!u) console.error(`image does not exists on server`);
  else
    return (0, X.jsxs)(X.Fragment, {
      children: [
        (0, X.jsx)(Wt, {
          toolTipContent: U(`#selectimage_reassign_image_ttip`),
          children: (0, X.jsx)(`img`, {
            "data-lang": n.lang,
            src: Fa,
            onClick: () => c(),
          }),
        }),
        (0, X.jsx)(G, {
          children: (0, X.jsx)(J, {
            active: s,
            children: (0, X.jsx)(Na, {
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
function za(e) {
  let { fnOnRemoveImage: t, langData: n } = e,
    [r, i, a] = L();
  return (0, X.jsxs)(X.Fragment, {
    children: [
      (0, X.jsx)(Wt, {
        toolTipContent: U(`#selectimage_delete_image_ttip`),
        children: (0, X.jsx)(`img`, {
          "data-lang": n.lang,
          src: Sn,
          onClick: i,
        }),
      }),
      (0, X.jsx)(G, {
        children: (0, X.jsx)(J, {
          active: r,
          children: (0, X.jsx)(I, {
            strTitle: U(`#selectimage_remove_image`),
            strDescription: U(
              `#selectimage_remove_details`,
              U(`#Language_` + z(n.lang)),
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
var Ba = `dGiOZKKuxfQ-`,
  Va = `h7-04bl97uc-`,
  Ha = `MhIotXf5RFA-`,
  Ua = `mSMnUkR7SZM-`,
  Wa = `aWAciZoU3Zo-`,
  Ga = `_8AV36Rh-Ve4-`,
  Ka = `lxYifi3D8mU-`,
  qa = `MwNTpeRZ8FM-`,
  Ja = `RdR4GEnIG5Q-`,
  Ya = `epGy6XXAGPQ-`;
function Xa(e) {
  let {
      event: t,
      spotlightURLOverride: n,
      fnHandleOpenEvent: r,
      fnImageFailureCallback: i,
      fnFilterImageURLsForKnownFailures: a,
      langOverride: o,
    } = e,
    s = Ue(),
    c = Y.useCallback(
      (e) => {
        (e.preventDefault(), r && r(t));
      },
      [t, r],
    ),
    l = o || N(q.LANGUAGE),
    [u, f, p] = d(() => [
      t.GetSummaryWithFallback(l),
      t.GetNameWithFallback(l),
      t.BShowLibrarySpotlightText(),
    ]),
    m = `spotlight`,
    h = O.spotlight_main;
  (t.appid == 2434320 || q.EUNIVERSE == 2) &&
    ((m = s
      ? `localized_store_app_spotlight_mobile`
      : `localized_store_app_spotlight`),
    (h = O.full));
  let g = lt(n === void 0 ? t : void 0, m, l, h) ?? (n === void 0 ? [] : [n]);
  a && g && (g = a(g));
  let _ = u.replace(/https:\/\/[^ ]*/gi, ``).trimLeft();
  return (0, X.jsx)(Y.Fragment, {
    children: (0, X.jsx)(`div`, {
      className: Ja,
      ref: e.containerRef,
      children: (0, X.jsxs)(Vt, {
        className: R(Ya, Ba),
        onActivate: c,
        focusable: !0,
        children: [
          (0, X.jsx)(`div`, {
            className: Ka,
            children: (0, X.jsx)(Re, {
              className: qa,
              rgSources: g,
              onIncrementalError: (e, t, n) => i && i(t),
            }),
          }),
          (0, X.jsxs)(`div`, {
            className: Va,
            children: [
              (0, X.jsx)(Re, {
                className: Ha,
                rgSources: g,
                onIncrementalError: (e, t, n) => i && i(t),
              }),
              (0, X.jsx)(`div`, { className: Ga }),
              (0, X.jsx)(`div`, {
                className: Wa,
                children:
                  p &&
                  (0, X.jsxs)(`div`, {
                    className: `Kirdf-ZVux8-`,
                    children: [
                      (0, X.jsx)(Re, {
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
          (0, X.jsx)(`div`, { className: Ua }),
        ],
      }),
    }),
  });
}
var Za = `JMbtQkd0K8E-`,
  Qa = `snS7KDov-nE-`,
  $a = `nvWdGclp6FI-`,
  eo = `xK18jc4N1cw-`,
  to = `IQEedJq4bc8-`,
  no = `fCimlPrmscM-`,
  ro = `e6k9OpDXG-Q-`,
  io = `seprbrMSMhI-`,
  ao = `_4CNssq7QFLI-`,
  oo = `yzbYtn5vgZU-`,
  so = `idlQxtNGVBg-`,
  co = `mELVvJo8G3c-`,
  lo = `fF5tI3UN-YY-`;
function uo(e) {
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
    m = p ? k.GenerateURLFromHashAndExtAndLang(i, p, O.full, t) : ``,
    [h] = d(() => [bo(n, f)]);
  return h == 0
    ? (0, X.jsxs)(`div`, {
        className: ya,
        children: [
          n === `capsule` &&
            (0, X.jsx)(mo, {
              imgURL: q.IMG_URL + `events/defaults/default_img_cover.jpg`,
              eventModel: a,
            }),
          n === `background` &&
            (0, X.jsx)(ho, {
              imgURL: q.IMG_URL + `events/defaults/default_img_header.jpg`,
              lang: t,
              eventModel: a,
              partnerEventStore: o,
            }),
          !![
            `spotlight`,
            `localized_store_app_spotlight`,
            `localized_store_app_spotlight_mobile`,
          ].includes(n) &&
            (0, X.jsx)(fo, { langOverride: t, artworkType: n, eventModel: a }),
          (0, X.jsx)(`div`, { children: U(`#EventEditor_ArtworkMissing`) }),
        ],
      })
    : (0, X.jsxs)(`div`, {
        className: ya,
        children: [
          n === `capsule` &&
            (0, X.jsx)(mo, { imgURL: m, eventModel: a, langOverride: t }),
          n === `background` &&
            (0, X.jsx)(ho, {
              imgURL: m,
              lang: t,
              eventModel: a,
              partnerEventStore: o,
            }),
          n === `spotlight` && (0, X.jsx)(go, { imgURL: m, event: a, lang: t }),
          n === `localized_store_app_spotlight` &&
            (0, X.jsx)(go, { imgURL: m, event: a, lang: t }),
          n === `localized_store_app_spotlight_mobile` &&
            (0, X.jsx)(go, { imgURL: m, event: a, lang: t }),
          (n === `broadcast_left` || n === `broadcast_right`) &&
            (0, X.jsx)(_o, {
              imgURL: m,
              side: n === `broadcast_right` ? `right` : `left`,
            }),
          n === `sale_header` && (0, X.jsx)(vo, { imgURL: m }),
          n === `sale_secondary_background` && (0, X.jsx)(vo, { imgURL: m }),
          n === `sale_overlay` && (0, X.jsx)(yo, { imgURL: m }),
          de.includes(n) &&
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
          (0, X.jsx)(Ia, {
            langOverride: t,
            clanSteamID: i,
            fnOnLanguagePreviewChange: r,
            fnOnRemoveImage: s,
            fnOnArtworkLangChange: c,
            realms: l,
            fnLangHasData: u,
            fnGetImageHash: (e) => Pa(f(n, e) ?? ``),
          }),
        ],
      });
}
function fo(e) {
  let { artworkType: t, langOverride: n, eventModel: r } = e,
    i = Tt[t],
    a = Y.useMemo(
      () => po(U(`#EventEditor_ArtworkType_` + t), `${i.width} X ${i.height}`),
      [i.height, i.width, t],
    );
  return (0, X.jsx)(go, { lang: n, imgURL: a, event: r });
}
function po(e, t) {
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
function mo(e) {
  let { imgURL: t, eventModel: n, langOverride: r } = e,
    i = rt();
  return (0, X.jsx)(`div`, {
    style: { display: `flex`, width: `304px` },
    children: (0, X.jsx)(he, {
      event: n,
      imageURLOverride: t,
      langOverride: r ?? i,
    }),
  });
}
function ho(e) {
  let { lang: t, eventModel: n, partnerEventStore: r } = e,
    i = Yt(),
    [a, o, s, c, l] = d(() => [
      n.GetNameWithFallback(t),
      n.GetDescriptionWithFallback(t),
      n.GetSubTitleWithLanguageFallback(t),
      n.type,
      n.AnnouncementGID,
    ]),
    u = o
      ? (0, X.jsx)(Ve, {
          text: o || ``,
          showErrorInfo: !1,
          event: n,
          languageOverride: it.Get().GetCurEditLanguage(),
        })
      : U(`#selectimage_display_event_body`);
  return (0, X.jsxs)(`div`, {
    className: Za,
    children: [
      (0, X.jsx)(`div`, {
        className: Qa,
        children: U(`#selectimage_preview_title_1`),
      }),
      (0, X.jsx)(`div`, {
        className: R($a, `DetailPageExample`),
        children: (0, X.jsxs)(`div`, {
          className: eo,
          children: [
            (0, X.jsx)(`div`, {
              className: to,
              children: (0, X.jsx)(`img`, { src: e.imgURL }),
            }),
            (0, X.jsx)(`div`, {
              className: no,
              children: (0, X.jsxs)(`div`, {
                className: ro,
                children: [
                  (0, X.jsx)(`div`, {
                    className: io,
                    children: a || U(`#selectimage_display_event_title`),
                  }),
                  (0, X.jsx)(`div`, {
                    className: ao,
                    children: s || U(`#selectimage_display_event_subtitle`),
                  }),
                  (0, X.jsx)(`div`, { className: oo, children: u }),
                ],
              }),
            }),
          ],
        }),
      }),
      c != 12 &&
        (0, X.jsxs)(Y.Fragment, {
          children: [
            (0, X.jsx)(`div`, { className: `y-gExtn9yi8-` }),
            (0, X.jsx)(`div`, {
              className: `snS7KDov-nE-`,
              children: U(`#selectimage_preview_title_2`),
            }),
            (0, X.jsx)(`div`, {
              className: R(`nvWdGclp6FI-`, `DetailPageExample`),
              children: (0, X.jsx)(`div`, {
                className: `wm--jcPYtBE-`,
                children: (0, X.jsx)(
                  Be,
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
var go = (e) => {
    let [t] = Dt(e.event.appid, { include_assets: !0 });
    if (!t) return null;
    let n = t.GetName(),
      r = t.GetAssets()?.GetCommunityIconURL();
    return (0, X.jsx)(`div`, {
      className: so,
      children: (0, X.jsx)(Xa, {
        event: e.event,
        strDisplayName: n ?? ``,
        gameIconUrl: r,
        spotlightURLOverride: e.imgURL,
        langOverride: e.lang,
      }),
    });
  },
  _o = (e) => {
    let t = [
      (0, X.jsx)(`img`, { src: e.imgURL }, `img`),
      (0, X.jsx)(`div`, { className: ja }, `video`),
    ];
    return (
      e.side === `right` && t.reverse(),
      (0, X.jsx)(`div`, { className: co, children: t })
    );
  },
  vo = (e) =>
    (0, X.jsx)(`div`, {
      className: lo,
      children: (0, X.jsx)(`img`, { style: { width: `100%` }, src: e.imgURL }),
    }),
  yo = (e) =>
    (0, X.jsx)(`div`, {
      className: lo,
      children: (0, X.jsx)(`img`, { style: { width: `100%` }, src: e.imgURL }),
    }),
  $ = (e) =>
    (0, X.jsx)(`div`, {
      className: lo,
      children: (0, X.jsx)(`img`, { style: { width: `100%` }, src: e.imgURL }),
    });
function bo(e, t) {
  let n = 0;
  for (let r = 0; r < 32; ++r) (t(e, r)?.length ?? 0) > 0 && (n += 1);
  return n;
}
var xo = `https://partner.steamgames.com/doc/store/localization#supported_languages`;
function So(e) {
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
    [f] = Dt(r, { include_assets: !0 }),
    [p, m] = d(() => [o?.GetEventType(), o?.BHasTag(`vo_marketing_message`)]),
    h = p == 36,
    g = null;
  n === 2
    ? (g = (0, X.jsx)(`span`, {
        style: { color: `#C6512B` },
        children: U(`#EventEditor_Required`),
      }))
    : n === 1
      ? (g = (0, X.jsx)(`span`, {
          style: { color: `#D7BC86` },
          children: U(`#EventEditor_Suggested`),
        }))
      : n === 3 &&
        (g = (0, X.jsx)(`span`, {
          style: { color: `#D7BC86` },
          children: U(`#EventEditor_Requested`),
        }));
  let _ = null;
  t === `capsule`
    ? (_ = h
        ? (0, X.jsxs)(X.Fragment, {
            children: [
              (0, X.jsxs)(`p`, {
                children: [
                  (0, X.jsx)(`strong`, {
                    children: U(`#selectimage_tip_design_title`),
                  }),
                  `: `,
                  U(`#selectimage_tip_capsule_creatorhome_1`),
                ],
              }),
              (0, X.jsxs)(`p`, {
                children: [
                  (0, X.jsx)(`strong`, {
                    children: U(`#selectimage_tip_usage_title`),
                  }),
                  `: `,
                  U(`#selectimage_tip_capsule_creatorhome_2`),
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
                      children: U(`#PartnerEvent_MM_ArtworkTip`),
                    }),
                    (0, X.jsx)(`p`, {
                      children: (0, X.jsx)(`a`, {
                        href: `${q.PARTNER_BASE_URL}doc/store/assets/promos#popup_update`,
                        children: U(`#PartnerEvent_MM_LearnMore`),
                      }),
                    }),
                  ],
                }),
              (0, X.jsxs)(`p`, {
                children: [
                  (0, X.jsx)(`strong`, {
                    children: U(`#selectimage_tip_design_title`),
                  }),
                  `: `,
                  U(`#selectimage_tip_capsule_1`),
                ],
              }),
              (0, X.jsxs)(`p`, {
                children: [
                  (0, X.jsx)(`strong`, {
                    children: U(`#selectimage_tip_usage_title`),
                  }),
                  `: `,
                  U(`#selectimage_tip_capsule_2`),
                ],
              }),
            ],
          }))
    : t === `background`
      ? (_ = (0, X.jsx)(X.Fragment, {
          children: (0, X.jsxs)(`p`, {
            children: [
              (0, X.jsx)(`strong`, {
                children: U(`#selectimage_tip_design_title`),
              }),
              `: `,
              U(`#selectimage_tip_background_1`),
            ],
          }),
        }))
      : t === `spotlight` || t === `localized_store_app_spotlight`
        ? (_ = (0, X.jsx)(X.Fragment, {
            children: (0, X.jsxs)(`p`, {
              children: [
                (0, X.jsx)(`strong`, {
                  children: U(`#selectimage_tip_usage_title`),
                }),
                `: `,
                U(`#selectimage_tip_store_spotlight_1`),
              ],
            }),
          }))
        : t === `localized_store_app_spotlight_mobile`
          ? (_ = (0, X.jsx)(X.Fragment, {
              children: (0, X.jsxs)(`p`, {
                children: [
                  (0, X.jsx)(`strong`, {
                    children: U(`#selectimage_tip_usage_title`),
                  }),
                  `: `,
                  U(`#selectimage_tip_store_mobile_spotlight`),
                ],
              }),
            }))
          : t === `broadcast_left` || t === `broadcast_right`
            ? (_ = (0, X.jsx)(X.Fragment, {
                children: (0, X.jsx)(`p`, {
                  children: U(`#selectimage_tip_broadcast_1`),
                }),
              }))
            : t === `sale_header`
              ? (_ = (0, X.jsxs)(X.Fragment, {
                  children: [
                    (0, X.jsx)(`div`, {
                      className: Ze,
                      children: U(`#selectimage_tip_required_title`),
                    }),
                    (0, X.jsxs)(`p`, {
                      children: [
                        (0, X.jsx)(`b`, {
                          children: U(`#selectimage_tip_usage_title`),
                        }),
                        `: `,
                        U(`#selectimage_tip_sale_header_1`),
                      ],
                    }),
                    (0, X.jsxs)(`p`, {
                      children: [
                        (0, X.jsx)(`b`, {
                          children: U(`#selectimage_tip_design_title`),
                        }),
                        `: `,
                        U(`#selectimage_tip_sale_header_2`),
                      ],
                    }),
                    (0, X.jsx)(`p`, {
                      children: U(`#selectimage_tip_sale_header_4`),
                    }),
                    (0, X.jsxs)(`p`, {
                      children: [
                        (0, X.jsx)(`b`, {
                          children: U(`#selectimage_tip_template_title`),
                        }),
                        `: `,
                        (0, X.jsx)(`a`, {
                          href: `https://www.dropbox.com/scl/fo/mhf604o6bdbcfr1scq7bx/h?rlkey=9bk0ggiwuvs4o1jdnej4xsy0c&dl=0`,
                          children: U(`#selectimage_tip_sale_header_3`),
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
                        children: U(`#selectimage_tip_hero_1`),
                      }),
                      !f.GetAssets()?.GetLibraryHeroURL() &&
                        (0, X.jsx)(`p`, {
                          className: `_9rhLFCwqjPg-`,
                          children: U(`#EventEdtior_ArtworkType_hero_warning`),
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
                          children: U(`#ImagePickerLoc_Desc`),
                        }),
                        (0, X.jsx)(`p`, {
                          children: on(
                            `#ImagePickerLoc_Files`,
                            (0, X.jsx)(`a`, {
                              href: xo,
                              target: q.IN_CLIENT ? void 0 : `_blank`,
                              children: U(`#ImagePickerLoc_URL`),
                            }),
                          ),
                        }),
                      ],
                    }))
                  : t === `product_banner`
                    ? (_ = (0, X.jsxs)(X.Fragment, {
                        children: [
                          (0, X.jsx)(`div`, {
                            className: j,
                            children: U(`#selectimage_tip_optional_title`),
                          }),
                          (0, X.jsxs)(`p`, {
                            children: [
                              (0, X.jsx)(`b`, {
                                children: U(`#selectimage_tip_usage_title`),
                              }),
                              `: `,
                              U(`#selectimage_tip_sale_product_banner`),
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
                              className: j,
                              children: U(`#selectimage_tip_optional_title`),
                            }),
                            (0, X.jsxs)(`p`, {
                              children: [
                                (0, X.jsx)(`b`, {
                                  children: U(`#selectimage_tip_usage_title`),
                                }),
                                `: `,
                                U(`#selectimage_tip_sale_product_banner`),
                                t === `product_mobile_banner` &&
                                  (0, X.jsxs)(`span`, {
                                    children: [
                                      `  `,
                                      U(
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
                                    children: U(
                                      `#selectimage_tip_design_title`,
                                    ),
                                  }),
                                  `:`,
                                  U(`#Sale_Tabs_Background_Design`),
                                ],
                              }),
                              (0, X.jsxs)(`p`, {
                                children: [
                                  (0, X.jsx)(`strong`, {
                                    children: U(`#selectimage_tip_usage_title`),
                                  }),
                                  `:`,
                                  U(`#Sale_Tabs_Background_Usage`),
                                ],
                              }),
                            ],
                          }))
                        : t === `sale_logo`
                          ? (_ = (0, X.jsxs)(X.Fragment, {
                              children: [
                                (0, X.jsx)(`div`, {
                                  className: j,
                                  children: U(
                                    `#selectimage_tip_optional_title`,
                                  ),
                                }),
                                (0, X.jsxs)(`p`, {
                                  children: [
                                    (0, X.jsx)(`b`, {
                                      children: U(
                                        `#selectimage_tip_usage_title`,
                                      ),
                                    }),
                                    `: `,
                                    U(`#selectimage_tip_pageLogo`),
                                  ],
                                }),
                              ],
                            }))
                          : t === `sale_cross_promo_logo`
                            ? (_ = (0, X.jsxs)(X.Fragment, {
                                children: [
                                  (0, X.jsx)(`div`, {
                                    className: j,
                                    children: U(
                                      `#selectimage_tip_optional_title`,
                                    ),
                                  }),
                                  (0, X.jsxs)(`p`, {
                                    children: [
                                      (0, X.jsx)(`b`, {
                                        children: U(
                                          `#selectimage_tip_usage_title`,
                                        ),
                                      }),
                                      `: `,
                                      U(
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
                                      className: j,
                                      children: U(
                                        `#selectimage_tip_optional_title`,
                                      ),
                                    }),
                                    (0, X.jsxs)(`p`, {
                                      children: [
                                        (0, X.jsx)(`b`, {
                                          children: U(
                                            `#selectimage_tip_usage_title`,
                                          ),
                                        }),
                                        `: `,
                                        U(
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
                                      className: Ze,
                                      children: U(
                                        `#selectimage_tip_required_title`,
                                      ),
                                    }),
                                    (0, X.jsxs)(`p`, {
                                      children: [
                                        (0, X.jsx)(`b`, {
                                          children: U(
                                            `#selectimage_tip_usage_title`,
                                          ),
                                        }),
                                        `: `,
                                        U(`#selectimage_tip_bestofyear`),
                                      ],
                                    }),
                                  ],
                                }));
  let v = Tt[e.artworkType].width,
    y = Tt[e.artworkType].height;
  return (0, X.jsxs)(`div`, {
    id: e.id,
    className: Aa,
    children: [
      !!e.title &&
        (0, X.jsxs)(`div`, {
          className: R(`Y63LZFKwGXE-`, i && `tU9SaxlQ-9k-`),
          onClick: i,
          children: [
            e.title,
            (0, X.jsx)(`span`, { children: `\xA0` }),
            g,
            i &&
              (0, X.jsx)(xn, {
                bIsMinimized: !!e.bIsMinimized,
                fnToggleMinimize: i,
              }),
          ],
        }),
      !e.bIsMinimized &&
        (0, X.jsxs)(`div`, {
          className: R(`XRZj1OeBHRk-`, `hvd5bQPy4pQ-`),
          children: [
            _,
            !!(v && y) &&
              (0, X.jsxs)(`p`, {
                children: [
                  (0, X.jsx)(`b`, {
                    children: U(`#selectimage_tip_dimensions_title`),
                  }),
                  `:\xA0`,
                  on(`#selectimage_tip1`, _t(v), _t(y)),
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
                    (0, X.jsx)(H, {
                      className: `_1k0t2Q-C2OU-`,
                      onClick: (t) => {
                        P(
                          (0, X.jsx)(Co, {
                            fnRemoveAllArtwork: e.fnRemoveAllArtwork,
                          }),
                          Nt(t) ?? window,
                        );
                      },
                      children: U(`#Sale_RemoveAll`),
                    }),
                ],
              }),
          ],
        }),
      !e.bIsMinimized &&
        (0, X.jsx)(wo, {
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
function Co(e) {
  let { fnRemoveAllArtwork: t, closeModal: n } = e;
  return (0, X.jsx)(I, {
    strTitle: U(`#Sale_RemoveAll`),
    strDescription: U(`#ImageUpload_DeleteAll_Confirm`),
    onOK: () => {
      (t?.(), n?.());
    },
    onCancel: n,
  });
}
function wo(e) {
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
    [f, p] = Y.useState(rt()),
    [m, h] = Y.useState([]),
    g = Y.useCallback(
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
    _ = Y.useCallback(
      (e, r, i) => {
        t(() => {
          (Pa(o(n, r) ?? ``) == e.image_hash && s(n, null, r),
            s(n, e, i),
            g(e, i, !1));
        });
      },
      [o, n, s, g],
    );
  return n === `hero`
    ? (0, X.jsx)(`div`, {
        style: { padding: `16px` },
        children: (0, X.jsx)(H, {
          style: { textTransform: `uppercase`, width: `200px` },
          onClick: () =>
            window.open(
              `${q.PARTNER_BASE_URL}admin/game/editbyappid/${l}?activetab=tab_graphicalassets`,
            ),
          children: U(`#ImageUpload_EditHeroImage`),
        }),
      })
    : (0, X.jsxs)(`div`, {
        children: [
          (0, X.jsx)(To, {
            list: m,
            fnOnArtworkLanguageChange: _,
            realms: r,
            fnLangHasData: a,
          }),
          (0, X.jsx)(`div`, {
            children: (0, X.jsx)(`div`, {
              className: R(Ea, Da),
              children: (0, X.jsx)(uo, {
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
var To = class extends Y.Component {
  ShowLangChangeDialog(e, t) {
    let {
      fnOnArtworkLanguageChange: n,
      realms: r,
      fnLangHasData: i,
    } = this.props;
    P(
      (0, X.jsx)(Na, {
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
          i = U(`#Language_` + z(r));
        e.push(
          (0, X.jsxs)(
            `div`,
            {
              className: tt,
              children: [
                (0, X.jsx)(`span`, {
                  children: U(
                    `#ImageUpload_Success_Mapping`,
                    n.file_name ?? ``,
                    i,
                  ),
                }),
                (0, X.jsx)(`a`, {
                  onClick: () => this.ShowLangChangeDialog(n, r),
                  children: U(`#ImageUpload_Success_Mapping_Change`),
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
    return (0, X.jsx)(`div`, { className: Ma, children: t });
  }
};
(dn([Qt], To.prototype, `ShowLangChangeDialog`, null), (To = dn([o], To)));
function Eo(e) {
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
    [f, p] = (0, Y.useState)(!1),
    m = St(t, o),
    h = t.GetAccountID(),
    [g] = d(() => [m.GetFilesToUpload().length - m.GetCompletedFiles()]);
  (0, Y.useEffect)(() => {
    (p(!1),
      Q.ClearImageGroup(),
      a?.forEach((e, t) => {
        let n = V.InitFromClanID(h, q.EUNIVERSE);
        if (Q.GetAllLocalizedGroupImages().length == 0) {
          let t = e && k.GetHashFromHashAndExt(e),
            r = t && M.GetClanImageByImageHash(n, t);
          r && Q.SetPrimaryImageForImageGroup(r, o);
        }
        Q.SetLocalizedImageGroupAtLang(t, n, e ?? null);
      }),
      p(!0));
  }, [a, h, o]);
  let _ = (0, Y.useCallback)(
      (e, t, n = 0) => {
        let r = V.InitFromClanID(h, q.EUNIVERSE),
          i = k.GetHashAndExt(t ?? null);
        if (Q.GetAllLocalizedGroupImages().length == 0) {
          let t = i && k.GetHashFromHashAndExt(i),
            n = t && M.GetClanImageByImageHash(r, t);
          n && Q.SetPrimaryImageForImageGroup(n, e);
        }
        Q.SetLocalizedImageGroupAtLang(n, r, i);
      },
      [h],
    ),
    v = (0, Y.useCallback)((e, t) => {
      let n = Q.GetLocalizedImageGroupForEdit()?.localized_images[t];
      return n && n.split(`/`).pop();
    }, []);
  return (0, X.jsxs)(I, {
    onCancel: c,
    closeModal: c,
    bDisableBackgroundDismiss: !0,
    bAllowFullSize: !0,
    className: R(ct, st),
    strTitle: e.strLocalizedTitle || U(`#ImagePickerLoc_Title`),
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
              image_hash: Pa(t),
              clanAccountID: h,
              file_type: gt(t) ?? 0,
              imageid: 0,
            },
            e,
          );
        } else l(o, null, e);
      }
      (Q.ClearImageGroup(), e.onOK ? e.onOK() : c?.());
    },
    strOKButtonText: g > 0 ? U(`#ImagePickerLoc_DismissWarning`) : void 0,
    children: [
      f
        ? (0, X.jsxs)(X.Fragment, {
            children: [
              (0, X.jsx)(ga, {
                clanSteamID: t,
                rgSupportArtwork: [o],
                fnSetImageURL: _,
                bAllowPreviousClanImageSelection: !1,
                rgRealmList: i ?? [],
                uploaderOverride: m,
              }),
              (0, X.jsx)(So, {
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
        : (0, X.jsx)(Ke, {
            size: `medium`,
            position: `center`,
            string: U(`#Loading`),
          }),
      e.children,
    ],
  });
}
function Do(e) {
  let { setting: t, fnUpdateSetting: n, label: r, bHideBlur: i } = e,
    a = Y.useMemo(() => {
      let e = [];
      return (
        e.push({ label: U(`#EventEditor_Tile_NoRepeat`), data: `no-repeat` }),
        e.push({ label: U(`#EventEditor_Tile_RepeatX`), data: `repeat-x` }),
        e.push({ label: U(`#EventEditor_Tile_RepeatY`), data: `repeat-y` }),
        e.push({ label: U(`#EventEditor_Tile_Repeat`), data: `repeat` }),
        i ||
          e.push({
            label: U(`#EventEditor_Tile_NoRepeatAndBlur`),
            data: `coverBlur`,
          }),
        e
      );
    }, [i]);
  return (0, X.jsxs)(X.Fragment, {
    children: [
      (0, X.jsx)(_n, { children: r || U(`#EventEditor_Tile_Title`) }),
      (0, X.jsx)(K, {
        strDropDownClassName: $e,
        rgOptions: a,
        selectedOption: t || `no-repeat`,
        onChange: (e) => n(e.data),
        bDisableMouseOverlay: !0,
        contextMenuPositionOptions: { bDisableMouseOverlay: !0 },
      }),
    ],
  });
}
function Oo(e) {
  let { closeModal: t, imgGroup: n, fnUpdateImageGroup: r, eventModel: i } = e,
    { openColorPicker: a } = Cr(),
    [o, s] = (0, Y.useState)(() => n),
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
    [_] = (0, Y.useState)(() => ko(o.localized_background_art ?? {}));
  return (0, X.jsxs)(Eo, {
    strLocalizedTitle: U(`#BackgroundGroups_Configure`),
    strLocalizedDescription: U(`#BackgroundGroups_DialogDesc`),
    appid: i.appid,
    eventModel: i,
    clanSteamID: i.clanSteamID,
    closeModal: t,
    partnerEventStore: kt,
    artworkType: `localized_background_art`,
    realms: h,
    loc_images: _,
    fnLangHasData: (e) => !!_[e],
    fnGetImageHash: (e, t) => _[t],
    fnSetImageURL: async (e, t, n) => {
      s((e) => {
        let r = { ...e.localized_background_art },
          i = k.GetHashAndExt(t);
        return (
          i ? (r[z(n)] = i) : delete r[z(n)],
          { ...e, localized_background_art: r }
        );
      });
    },
    onOK: () => {
      s((e) => (r(e), t && setTimeout(t, 1), { ...e }));
    },
    children: [
      (0, X.jsxs)(`div`, {
        className: Si,
        children: [
          (0, X.jsxs)(`div`, {
            className: Ci,
            children: [
              (0, X.jsx)(Do, {
                setting: c,
                fnUpdateSetting: (e) => {
                  s(
                    e === `no-repeat`
                      ? { ...o, repeat_setting: e }
                      : { ...o, repeat_setting: e, scaling_setting: `auto` },
                  );
                },
                label: U(`#BackgroundGroups_Repeating`),
              }),
              (0, X.jsx)(Ao, {
                scaling_setting: l ?? `contain`,
                disable: c !== `no-repeat`,
                fnUpdateSetting: (e) => s({ ...o, scaling_setting: e }),
              }),
              l != `cover` &&
                (0, X.jsx)(Mo, {
                  position_settings: m,
                  fnUpdateSetting: (e) => s({ ...o, position_setting: e }),
                }),
            ],
          }),
          (0, X.jsxs)(`div`, {
            className: wi,
            children: [
              (0, X.jsx)(_n, { children: U(`#BackgroundGroups_Color`) }),
              (0, X.jsxs)(`div`, {
                className: Ti,
                children: [
                  (0, X.jsx)(H, {
                    style: { backgroundColor: u },
                    onClick: (e) =>
                      a(e, {
                        color: u,
                        onChange: (e) =>
                          s({ ...o, background_color1: e || void 0 }),
                      }),
                    children: U(
                      u === void 0
                        ? `#BackgroundGroups_ColorNum_unset`
                        : `#BackgroundGroups_ColorNum`,
                      1,
                    ),
                  }),
                  `\xA0`,
                  (0, X.jsx)(H, {
                    onClick: () => s({ ...o, background_color1: void 0 }),
                    children: U(`#BackgroundGroups_Color_Clear`),
                  }),
                ],
              }),
              (0, X.jsx)(`div`, {
                className: bi,
                children: (0, X.jsx)(H, {
                  onClick: () =>
                    s({ ...o, background_color1: f, background_color2: u }),
                  children: U(`#BackgroundGroups_Color_Swap`),
                }),
              }),
              p !== `single-color` &&
                (0, X.jsxs)(`div`, {
                  className: `j5T-MrFgQ20-`,
                  children: [
                    (0, X.jsx)(H, {
                      style: { backgroundColor: f },
                      onClick: (e) =>
                        a(e, {
                          color: f,
                          onChange: (e) =>
                            s({ ...o, background_color2: e || void 0 }),
                        }),
                      children: U(
                        f === void 0
                          ? `#BackgroundGroups_ColorNum_unset`
                          : `#BackgroundGroups_ColorNum`,
                        2,
                      ),
                    }),
                    `\xA0`,
                    (0, X.jsx)(H, {
                      onClick: () => s({ ...o, background_color2: void 0 }),
                      children: U(`#BackgroundGroups_Color_Clear`),
                    }),
                  ],
                }),
              (0, X.jsx)(jo, {
                gradient: p ?? `top-to-bottom`,
                fnUpdateSetting: (e) => s({ ...o, gradient_setting: e }),
              }),
            ],
          }),
        ],
      }),
      (0, X.jsx)(ii, {
        clanSteamID: i.clanSteamID,
        children: (0, X.jsx)(Ut, {
          checked: !!g,
          onChange: (e) => {
            o.randomize_section_order = e;
          },
          children: U(`#BackgroundGroups_RandomizeSectionOrder`),
        }),
      }),
    ],
  });
}
function ko(e) {
  let t = pn([], 32, null);
  for (let n in e) {
    let r = N(n);
    r != -1 && (t[r] = e[n]);
  }
  return t;
}
function Ao(e) {
  let { scaling_setting: t, fnUpdateSetting: n, label: r, disable: i } = e,
    a = Y.useMemo(() => {
      let e = [];
      return (
        e.push({ label: U(`#BackgroundGroups_Scaling_cover`), data: `cover` }),
        e.push({
          label: U(`#BackgroundGroups_Scaling_contain`),
          data: `contain`,
        }),
        e.push({ label: U(`#BackgroundGroups_Scaling_fixed`), data: `auto` }),
        e
      );
    }, []);
  return (0, X.jsxs)(X.Fragment, {
    children: [
      (0, X.jsx)(_n, { children: r || U(`#BackgroundGroups_Scaling`) }),
      (0, X.jsx)(K, {
        strDropDownClassName: $e,
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
function jo(e) {
  let { gradient: t, fnUpdateSetting: n, label: r } = e,
    i = Y.useMemo(() => {
      let e = [];
      return (
        e.push({
          label: U(`#BackgroundGroups_Gradient_Top`),
          data: `top-to-bottom`,
        }),
        e.push({
          label: U(`#BackgroundGroups_Gradient_Left`),
          data: `left-to-right`,
        }),
        e.push({
          label: U(`#BackgroundGroups_Gradient_TopLeft`),
          data: `top-left-to-bottom-right`,
        }),
        e
      );
    }, []);
  return (0, X.jsxs)(X.Fragment, {
    children: [
      (0, X.jsx)(_n, { children: r || U(`#EventEditor_ColorSetting_Title`) }),
      (0, X.jsx)(K, {
        strDropDownClassName: $e,
        rgOptions: i,
        selectedOption: t || `top-to-bottom`,
        onChange: (e) => n(e.data),
        bDisableMouseOverlay: !0,
        contextMenuPositionOptions: { bDisableMouseOverlay: !0 },
      }),
    ],
  });
}
function Mo(e) {
  let { position_settings: t, fnUpdateSetting: n, label: r } = e,
    i = Y.useMemo(() => {
      let e = [];
      return (
        e.push({ label: U(`#BackgroundGroups_Position_Unset`), data: `unset` }),
        e.push({
          label: U(`#BackgroundGroups_Position_Centered`),
          data: `center`,
        }),
        e.push({
          label: U(`#BackgroundGroups_Position_CenteredTop`),
          data: `top center`,
        }),
        e.push({
          label: U(`#BackgroundGroups_Position_TopLeft`),
          data: `top left`,
        }),
        e.push({
          label: U(`#BackgroundGroups_Position_BottomRight`),
          data: `bottom right`,
        }),
        e
      );
    }, []);
  return (0, X.jsxs)(X.Fragment, {
    children: [
      (0, X.jsx)(_n, { children: r || U(`#BackgroundGroups_Position`) }),
      (0, X.jsx)(K, {
        strDropDownClassName: $e,
        rgOptions: i,
        selectedOption: t || `unset`,
        onChange: (e) => n(e.data),
        bDisableMouseOverlay: !0,
        contextMenuPositionOptions: { bDisableMouseOverlay: !0 },
      }),
    ],
  });
}
function No(e) {
  let {
      backgroundImageEditModel: t,
      bBackgroundImgGroupEditMode: n,
      fnSetBackgroundImgGroupEditMode: r,
      bShowAsValveOnly: i,
    } = e,
    [a, o] = (0, Y.useState)(t.BIsBackgroundImageEnabled()),
    [s, c, l] = L(),
    u = d(() => t.GetSalePageLastCoverSectionUntilEnd());
  return (0, X.jsx)(`div`, {
    className: R(vi, i && `u6DPgTclyv4-`),
    children: (0, X.jsxs)(G, {
      children: [
        (0, X.jsx)(un, {
          label: U(`#BackgroundGroups_Setting`),
          checked: a,
          onChange: (e) => {
            (o(e), t.SetBackgroundImageEnabled(e));
          },
        }),
        a
          ? (0, X.jsxs)(X.Fragment, {
              children: [
                (0, X.jsx)(un, {
                  label: U(`#BackgroundGroups_EditMode`),
                  tooltip: U(`#BackgroundGroups_EditMode_ttip`),
                  checked: n,
                  onChange: r,
                }),
                (0, X.jsx)(un, {
                  label: U(`#BackgroundGroups_ExtendToEnd`),
                  tooltip: U(`#BackgroundGroups_ExtendToEnd_ttip`),
                  checked: u,
                  onChange: (e) => t.SetSalePageLastCoverSectionUntilEnd(e),
                }),
                (0, X.jsx)(`hr`, {}),
                (0, X.jsx)(H, {
                  onClick: c,
                  children: U(`#BackgroundGroups_ClearAllSettings`),
                }),
                (0, X.jsx)(J, {
                  active: s,
                  children: (0, X.jsx)(I, {
                    strTitle: U(`#EventEditor_GenericAreYouSure`),
                    strDescription: U(
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
          : (0, X.jsx)(`p`, { children: U(`#BackgroundGroups_Desc`) }),
        (0, X.jsx)(`br`, {}),
        (0, X.jsx)(`a`, {
          href: `${q.PARTNER_BASE_URL}doc/marketing/event_tools/sales/groups`,
          target: `_blank`,
          children: U(`#EventGeneric_SeeDocs`),
        }),
      ],
    }),
  });
}
var Po = Y.forwardRef(function (e, t) {
  let {
      imgGroupDerivedMapping: n,
      backgroundImageEditModel: r,
      groupIndex: i,
      imgGroup: a,
      eventModel: o,
      nTabIndex: s,
    } = e,
    c = rt(),
    [l, u, f, p] = d(() => [
      a && n.mapGroupToSections.get(a.background_id),
      (a && n.mapGroupToSections.get(a.background_id)?.sectionUniqueIDs) ?? [],
      s == null
        ? r?.GetSalePageLastCoverSectionUntilEnd()
        : r?.GetTabLastCoverSectionUntilEnd(s),
      s == null ? r?.GetSalePageGroupCount() : r?.GetTabGroupCount(s),
    ]),
    m = f && i + 1 === p,
    [h, g, _] = L(),
    [v, y, b] = L(),
    x;
  l?.nUniqueIDNextSaleSection &&
    (x = te(
      2,
      r.GetSaleSectionByID(l?.nUniqueIDNextSaleSection),
      c,
      o,
      l.nSaleSectionLastIndex + 1,
    ));
  let S;
  if (l && u?.length > 1) {
    let e = u[u.length - 1];
    S = te(2, r?.GetSaleSectionByID(e), c, o, l.nSaleSectionLastIndex);
  }
  return (0, X.jsx)(bn, {
    bStartMinimized: !1,
    title: U(
      s == null
        ? `#BackgroundGroups_Sale_GroupNum`
        : `#BackgroundGroups_Sale_Tab_GroupNum`,
      i + 1,
    ),
    className: e.classNameHeader,
    children: (0, X.jsxs)(`div`, {
      ref: t,
      children: [
        (0, X.jsx)(H, {
          onClick: g,
          children: U(`#BackgroundGroups_Configure`),
        }),
        (0, X.jsx)(J, {
          active: h,
          children: (0, X.jsx)(Oo, {
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
          className: xi,
          children: U(`#BackgroundGroups_ContentTitle`),
        }),
        (0, X.jsxs)(`ul`, {
          children: [
            u.map((e) =>
              (0, X.jsx)(
                `li`,
                {
                  children: te(
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
              (0, X.jsx)(`li`, { children: U(`#BackgroundGroups_EndOfList`) }),
          ],
        }),
        !!S &&
          (0, X.jsx)(H, {
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
            children: U(`#BackgroundGroups_Reduce`, S),
          }),
        !!x &&
          (0, X.jsx)(H, {
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
            children: U(`#BackgroundGroups_Extend`, x),
          }),
        i > 0 &&
          (0, X.jsxs)(X.Fragment, {
            children: [
              (0, X.jsx)(`hr`, {}),
              (0, X.jsx)(H, {
                className: `_1k0t2Q-C2OU-`,
                onClick: y,
                children: U(`#BackgroundGroups_RemoveThisGroup`),
              }),
              (0, X.jsx)(J, {
                active: v,
                children: (0, X.jsx)(I, {
                  strTitle: U(`#Dialog_AreYouSure`),
                  bDestructiveWarning: !0,
                  strDescription: U(`#BackgroundGroups_RemoveThisGroup_Desc`),
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
function Fo(e) {
  let { backgroundImageEditModel: t, nTabID: n } = e;
  return (0, X.jsx)(`div`, {
    className: yi,
    children: (0, X.jsx)(H, {
      onClick: (e) =>
        n !== void 0 && n >= 0
          ? t?.AddTabBackgroundGroup(n)
          : t?.AddSalePageBackgroundGroup(),
      children: U(
        n !== void 0 && n >= 0
          ? `#BackgroundGroups_AddNewGroupTab`
          : `#BackgroundGroups_AddNewGroup`,
      ),
    }),
  });
}
function Io(e) {
  let {
      nTabID: t,
      nSectionUniqueID: n,
      salePageBackgroundDerivedConfig: r,
      backgroundImageEditModel: i,
    } = e,
    a = r.mapFirstSectionToGroup.get(n);
  return n == r.nFirstSaleSectionIDWithoutGroup ||
    n == r.nFirstTabSectionIDWithoutGroup
    ? (0, X.jsx)(Fo, { backgroundImageEditModel: i, nTabID: t })
    : a
      ? (0, X.jsx)(Lo, { ...e, groupID: a })
      : null;
}
function Lo(e) {
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
    [c, l] = (0, Y.useState)(!1);
  (0, Y.useEffect)(() => {
    if (!c) return;
    let e = P(
      (0, X.jsx)(I, {
        bAlertDialog: !0,
        closeModal: () => l(!1),
        children: (0, X.jsx)(Po, {
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
  let u = d(() => ui.get(t)),
    [f, p] = (0, Y.useState)(null),
    m = Y.useCallback((e, t) => {
      p(t);
    }, []),
    h = sn(m);
  return (0, X.jsxs)(`div`, {
    className: yi,
    ref: h,
    children: [
      !!(u && f && f > u) &&
        (0, X.jsx)(H, {
          onClick: (e) => l(!0),
          children: U(`#BackgroundGroups_EditBackgroundGroup`),
        }),
      (0, X.jsx)(Po, {
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
var Ro = `Bn58KEX1KcI-`;
function zo(e) {
  let { imgGroupDerivedMapping: t } = e,
    [n, r] = (0, Y.useState)(!1);
  (0, Y.useEffect)(() => {
    if (!n) return;
    let t = P(
      (0, X.jsx)(I, {
        bAlertDialog: !0,
        closeModal: () => r(!1),
        children: (0, X.jsx)(Bo, { ...e }),
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
        if (n) return ui.get(n?.nBackgroundGroupID) ?? 0;
      }
      return 0;
    }),
    [a, o] = (0, Y.useState)(null),
    s = Y.useCallback((e, t) => {
      o(t);
    }, []),
    c = sn(s),
    l = !!(i >= 0 && a && a > i);
  return (0, X.jsxs)(`div`, {
    className: R(yi, Ro),
    ref: c,
    children: [
      l &&
        (0, X.jsx)(H, {
          onClick: (e) => r(!0),
          children: U(`#BackgroundGroups_EditBackgroundGroup`),
        }),
      (0, X.jsx)(Bo, { ...e }),
    ],
  });
}
function Bo(e) {
  let { backgroundImageEditModel: t, imgGroupDerivedMapping: n, nTabID: r } = e,
    [i, a] = (0, Y.useState)(null),
    [o, s, c, l] = d(() => [
      t?.GetTabLastCoverSectionUntilEnd(r),
      t?.BIsTabEnabled(r),
      n.selectedTabBackgroundDef,
      t?.GetEventModel(),
    ]);
  return (0, X.jsxs)(G, {
    children: [
      (0, X.jsx)(un, {
        label: U(`#BackgroundGroups_TaSetting`),
        checked: s,
        onChange: (e) => {
          if (
            (W(t, `edit model mising`),
            W(r !== void 0, `tab setting missing`),
            r !== void 0 && t)
          ) {
            let n = t.SetTabEnabled(r, e);
            (W(!!n, `Failed to create model TabID ${r}backgroundModel`), a(n));
          } else
            console.error(
              `Failed to enable table group, edit mode: ${!!t}, TabID: ${r}.`,
            );
        },
      }),
      !!s &&
        (0, X.jsxs)(X.Fragment, {
          children: [
            (0, X.jsx)(un, {
              label: U(`#BackgroundGroups_ExtendToEnd`),
              tooltip: U(`#BackgroundGroups_ExtendToEnd_Tab_ttip`),
              checked: o,
              onChange: (e) => t.SetTabLastCoverSectionUntilEnd(r, e),
            }),
            (0, X.jsx)(Po, {
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
function Vo(e) {
  let {
      promotionName: t,
      eventModel: n,
      bIsPreview: r,
      language: i,
      backgroundImageEditModel: a,
      addtionalAdminButtons: o,
      bDynamicallyCreatedSale: s,
    } = e,
    [c, l] = Y.useState(n?.GetDayIndexFromEventStart()),
    [u, f] = Y.useState(null),
    p = d(() => n.jsondata.sale_header_disable_top_margin),
    m = xe(n, !!T(n)),
    g = Ho(n, i, c, Ae(!!r)),
    [_, v] = (0, Y.useState)(!1);
  Y.useEffect(() => {
    if (
      n.jsondata.sale_custom_css &&
      !u &&
      r &&
      n.jsondata.sale_vanity_id_valve_approved_for_sale_subpath &&
      Kt() == `community`
    ) {
      let e = document.getElementsByTagName(`HEAD`)[0],
        t = document.createElement(`style`);
      ((t.innerText = ln(n.jsondata.sale_custom_css)), f(t), e.appendChild(t));
    }
    let e = document.getElementsByClassName(`react_landing_background`);
    return (
      W(e.length <= 1, `Must have at most one react_landing_background`),
      e.length >= 1 && (e[0].style.backgroundImage = ``),
      () => {
        u && (u.remove(), f(null));
      }
    );
  }, [n, u, r]);
  let b = n?.jsondata,
    S = Y.useMemo(
      () => ({
        promotionName: t,
        clanid: Number(Jt.CLANACCOUNTID),
        nAppIDVOD: Number(b?.broadcast_preroll_vod_appid),
        event: n,
        bIsPreview: r,
        language: i,
        accountIDs: r ? b?.broadcast_whitelist : void 0,
        chat_announcement_giveaway: b?.broadcast_chat_announcement_giveaway,
      }),
      [r, n, b, i, t],
    ),
    C = d(() => a?.BIsBackgroundImageEnabled() ?? !1),
    w = ri(n?.clanSteamID);
  if (!n || c === void 0)
    return (0, X.jsx)(`div`, {
      className: mn,
      style: { height: `500px` },
      children: (0, X.jsx)(Ke, { size: `medium`, string: U(`#Loading`) }),
    });
  {
    let e = Or(n),
      u = n.BUsesContentHubForItemSource(),
      d = n.GetSaleSections().some((e) => e.section_type === `contenthubtitle`),
      f = u && d,
      b,
      T = !0;
    e
      ? (b = 0)
      : n.BUsesContentHubForItemSource()
        ? (b = n.jsondata.sale_header_offset === 530 ? 530 : 20)
        : n.GetEventType() == 36
          ? ((b = 0), (T = !1))
          : (b = n.jsondata.sale_header_offset || 0);
    let ee = T && n.jsondata.sale_header_offset === 530,
      te = !Fe.Get().BIsPartnerTakeoverActive(
        n.GetContentHubType(),
        n.GetContentHubCategory(),
        n.GetContentHubTag(),
      ),
      ne = r
        ? !_ && a?.BIsBackgroundImageEnabled()
          ? A.EPreviewMode_EditBackground
          : A.EPreviewMode_Enabled
        : A.EPreviewMode_Disabled,
      E = C || n.GetEventType() != 36,
      D = u ? Rt.NoTransform : Rt.NoTransformSparseContent,
      re = R(
        h,
        p && `_9D3431c8-XE-`,
        ee && `_5NaHSqwUb-k-`,
        y[`CustomStyle_${n.jsondata.sale_vanity_id}`],
        `SaleOuterContainer`,
        e && `RG63SnOtLk0-`,
        f && void 0,
      );
    return (0, X.jsx)(G, {
      children: (0, X.jsx)(Ee, {
        eventModel: n,
        language: i,
        children: (0, X.jsx)(x, {
          location: r ? 2 : 0,
          children: (0, X.jsxs)(Pr, {
            event: n,
            language: i,
            bIsPreview: !!r,
            personalizedCarousels: m,
            children: [
              te && (0, X.jsx)(je, {}),
              (0, X.jsx)(Er, { eventModel: n }),
              !!a &&
                (E || w) &&
                (0, X.jsx)(No, {
                  backgroundImageEditModel: a,
                  bBackgroundImgGroupEditMode: _,
                  fnSetBackgroundImgGroupEditMode: v,
                  bShowAsValveOnly: !E,
                }),
              (0, X.jsxs)(Vt, {
                style: !f || (ee && !e) ? { marginTop: `${b || 0}px` } : void 0,
                className: re,
                scrollIntoViewType: D,
                children: [
                  e && (0, X.jsx)(kr, { eventModel: n, language: i }),
                  (0, X.jsx)(Br, { rgPresenters: n.jsondata.sale_presenters }),
                  (0, X.jsx)(Wr, { event: n, broadcastEmbedContext: S }),
                  (0, X.jsx)(Go, {
                    ePreviewMode: ne,
                    event: n,
                    backgroundImageEditModel: a,
                    language: i,
                    promotionName: t,
                    nSaleDayIndex: c,
                    broadcastEmbedContext: S,
                    selectedTab: g,
                    tagSelection: g?.GetTagSelection(),
                  }),
                  !s &&
                    (0, X.jsx)(li, {
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
function Ho(e, t, n, r) {
  let i = d(() => e.GetSaleSectionFirstMatchByType(`tabs`)),
    a = ye(i, t),
    [o] = Ge(`tab`, void 0),
    [s] = Ge(E, void 0),
    [c] = Ge(w, void 0),
    l = Y.useMemo(() => {
      let e = a?.filter((e) => !e.hide);
      if (e && e.length > 0) {
        let t = o > 0 ? e.find((e) => e.unique_id == o) : void 0;
        t ||= e[0];
        let n = t === e[0];
        return { selTab: t, bIsDefaultTab: n };
      }
    }, [a, o]),
    u = g(v(s, c), l?.selTab.tab_tag_filter, r),
    f = u?.strParentKey,
    p = u?.strChildKey;
  return Y.useMemo(() => {
    if (!l) return;
    let t;
    f && (t = { strParentKey: f, strChildKey: p });
    let r =
      e.jsondata.sale_opt_in_page_name || e.jsondata.prune_list_optin_name;
    return new Se(l.selTab, n, l.bIsDefaultTab, t, r);
  }, [e, n, l, f, p]);
}
function Uo() {
  if (window?.location?.hash)
    return decodeURIComponent(window.location.hash.substring(1).toLowerCase());
}
function Wo(e) {
  let {
      event: t,
      language: n,
      nSaleDayIndex: r,
      ePreviewMode: i,
      selectedTab: a,
      backgroundImageEditModel: o,
    } = e,
    [s, c] = Y.useState(Le()),
    l = Y.useMemo(() => new _i(), []),
    u = Y.useCallback(() => c(Le()), []);
  (Y.useEffect(
    () => (
      window.addEventListener(`resize`, u),
      () => window.removeEventListener(`resize`, u)
    ),
    [u],
  ),
    Y.useEffect(() => {
      let e = ``,
        t = () => {
          let t = Uo();
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
    h = (e, t) => {
      We(p, { ...(t || {}), tab: e.toString() });
    },
    [g, _] = Ge(`controller`),
    [v, y] = d(() => {
      let e = nt.GetCreatorHome(t.clanSteamID)?.GetAppIDList().length ?? 0,
        n = t.GetSaleSectionIncludingFooterSections(e);
      return [
        fi(
          t.jsondata.sale_background_img_groups,
          n,
          a && a.GetSectionTabUniqueID(),
        ),
        n,
      ];
    }),
    x = !1,
    S = [{ elements: [], activeTab: new Se(void 0, r) }],
    w = null,
    T = en(),
    ee = Te(),
    te = De(t),
    ne = Hr(y),
    E = Y.useMemo(() => {
      let e = Uo();
      if (!e) return;
      let t = y.findIndex((t) => t.section_anchor === e);
      return t > -1 ? t : void 0;
    }, [y]);
  (y.forEach((r, c) => {
    let u = S[S.length - 1].activeTab;
    if (u && !u.ShouldShowSection(r)) return;
    let d = Fe.Get().BIsPartnerTakeoverActive(
        t.GetContentHubType(),
        t.GetContentHubCategory(),
        t.GetContentHubTag(),
      ),
      f = s && !d && !t.jsondata.content_hub_restricted_width,
      p = Pe(r, i, t, n, T, te, ne(r));
    if (p === void 0) return;
    if (!p) {
      if (m(r, ke()) && !Xt.logged_in)
        x ||= ((p = (0, X.jsx)(b, { section: r, event: t, language: n })), !0);
      else {
        let t = r.diable_tab_id_filtering
          ? new Se(void 0, u && u.GetSaleDay())
          : u;
        (r.section_type == `tabs` &&
          r.tabs?.some((e) => e.unique_id == a?.GetSectionTabUniqueID()) &&
          S.push({ activeTab: a, elements: [] }),
          (p = (0, X.jsx)(Ne, {
            ...e,
            section: r,
            activeTab: t,
            appVisibilityTracker: l,
            selectedTab: a,
            setTabUniqueIDQueryParam: h,
            expanded: f,
            controllerCategory: g,
            setControllerCategory: _,
          })));
      }
    }
    ee && (p = (0, X.jsx)(Lr, { nSectionID: r.unique_id, children: p }));
    let y = S && S.length && S[S.length - 1],
      C = (0, X.jsx)(
        Yo,
        {
          section: r,
          nActiveTabID: y && y.activeTab && y.activeTab.GetSectionTabUniqueID(),
          saleSectionIndex: c,
          ePreviewMode: i,
          salePageBackgroundDerivedConfig: v,
          backgroundImageEditModel: o,
          bExpanded: f,
          children: (0, X.jsx)(ft, { enabled: !E || c > E, children: p }),
        },
        `SaleSectionIndex_` + r.unique_id + `_` + c,
      ),
      D = v.mapSectionToGroup.get(r.unique_id);
    (w &&
      w.groupID != D &&
      (S[S.length - 1].elements.push(
        pi(t, w, i, a && a?.GetSectionTabUniqueID()),
      ),
      (w = null)),
      D
        ? ((w ||= {
            groupID: D,
            elSaleSections: [],
            derivedGroupInfo: v.mapGroupToSections.get(D),
          }),
          w.elSaleSections.push(C))
        : S[S.length - 1].elements.push(C));
  }),
    (w &&=
      (S[S.length - 1].elements.push(
        pi(t, w, i, a && a?.GetSectionTabUniqueID()),
      ),
      null)));
  let D = S.map((e, t) =>
    (0, X.jsx)(
      `div`,
      { className: R(C, `SaleSectionTabListContainer`), children: e.elements },
      `TabSection_` + t,
    ),
  );
  return (0, X.jsx)(Vt, {
    focusable: !1,
    focusableIfEmpty: !0,
    navKey: `SaleSectionListContainer`,
    children: D,
  });
}
var Go = a(Wo);
function Ko(e) {
  let {
    visibility_by_door_index_state: t,
    door_index_visibility: n,
    children: r,
  } = e;
  return t && n != null
    ? (0, X.jsx)(qo, {
        visibility_by_door_index_state: t,
        door_index_visibility: n,
        children: r,
      })
    : (0, X.jsx)(X.Fragment, { children: r });
}
function qo(e) {
  let {
      visibility_by_door_index_state: t,
      door_index_visibility: n,
      children: r,
    } = e,
    i = ge(n);
  return (t == `hide_when_open_door_index` && i) ||
    (t == `show_when_open_door_index` && !i)
    ? null
    : (0, X.jsx)(X.Fragment, { children: r });
}
function Jo({ children: e, onChange: t }) {
  return (
    Y.useRef(null),
    (0, Y.useEffect)(() => {
      t(!!Y.Children.toArray(e).filter(Boolean).length);
    }, [e, t]),
    e
  );
}
function Yo(e) {
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
    l = t.section_anchor ? t.section_anchor : Ie + (t.unique_id || n),
    u = t.section_type != `tabs`,
    [d, f] = (0, Y.useState)(!0);
  return d
    ? (0, X.jsx)(G, {
        children: (0, X.jsx)(Ko, {
          visibility_by_door_index_state: t.visibility_by_door_index_state,
          door_index_visibility: t.door_index_visibility,
          children: u
            ? (0, X.jsx)(Vt, {
                navKey: l,
                id: l,
                className: R({
                  [D]: !0,
                  SaleSectionCtn: !0,
                  [t.section_type]: !0,
                  [t.internal_section_data?.internal_type || ``]: !0,
                  expanded: s,
                  [t.single_item_style || ``]: !0,
                  [_]: i == A.EPreviewMode_EditBackground,
                  [oe]: t.collapse_header_space,
                }),
                children:
                  i === A.EPreviewMode_EditBackground && o
                    ? (0, X.jsxs)(X.Fragment, {
                        children: [
                          c,
                          (0, X.jsx)(Io, {
                            nSectionUniqueID: t.unique_id || n,
                            nTabID: r,
                            salePageBackgroundDerivedConfig: a,
                            backgroundImageEditModel: o,
                          }),
                        ],
                      })
                    : (0, X.jsx)(Jo, { onChange: f, children: c }),
              })
            : (0, X.jsx)(X.Fragment, {
                children:
                  i === A.EPreviewMode_EditBackground && o
                    ? (0, X.jsxs)(`div`, {
                        id: l,
                        className: R({
                          [D]: !0,
                          [_]: !0,
                          [oe]: t.collapse_header_space,
                        }),
                        children: [
                          c,
                          (0, X.jsx)(zo, {
                            backgroundImageEditModel: o,
                            nTabID: r,
                            imgGroupDerivedMapping: a,
                          }),
                        ],
                      })
                    : (0, X.jsx)(Jo, { onChange: f, children: c }),
              }),
        }),
      })
    : null;
}
export { Vo as t };
