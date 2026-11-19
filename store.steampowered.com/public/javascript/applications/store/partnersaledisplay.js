/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import {
  At as t,
  B as n,
  It as r,
  Lt as i,
  W as a,
  ft as o,
  jt as s,
  kt as c,
  l,
  lt as u,
  tt as d,
  u as f,
} from "./chunk~01cfc309bf.js";
import {
  At as p,
  D as m,
  E as h,
  Et as g,
  Gt as _,
  Kt as v,
  Mt as y,
  N as b,
  O as x,
  R as S,
  Sn as C,
  T as w,
  Tn as T,
  _n as ee,
  bn as te,
  cn as E,
  in as ne,
  ln as D,
  on as re,
  pn as ie,
  wn as ae,
  yn as oe,
  zt as se,
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
import { t as Ie } from "./chunk~f0141d9521.js";
import { a as Le, cn as Re, ut as ze } from "./chunk~cf3721cc1c.js";
import { n as Be } from "./chunk~16aefcf65f.js";
import "./chunk~8681f5c764.js";
import { i as Ve } from "./chunk~2f085f1384.js";
import { r as He, s as Ue } from "./chunk~ffe4581a06.js";
import { a as We, o as Ge } from "./chunk~af36c62e9f.js";
import { t as j } from "./chunk~eefd71512b.js";
import {
  E as Ke,
  M as qe,
  f as Je,
  j as Ye,
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
import { D as pt } from "./chunk~b8ca037aae.js";
import {
  a as mt,
  c as ht,
  f as gt,
  h as _t,
  i as vt,
  l as yt,
  m as bt,
  n as xt,
  p as M,
  r as St,
  s as Ct,
  u as wt,
} from "./chunk~0be5d7b286.js";
import { a as Tt, n as Et } from "./chunk~a7c5e71e12.js";
import { r as Dt } from "./chunk~a243b6a34b.js";
import { t as Ot } from "./chunk~e60a8972cb.js";
import { n as kt } from "./chunk~fc8a9e4879.js";
import {
  $b as At,
  $c as jt,
  $y as Mt,
  An as Nt,
  Ar as Pt,
  Ax as Ft,
  Br as It,
  Bu as Lt,
  Cr as Rt,
  Dl as N,
  Eb as P,
  Fn as F,
  Fu as zt,
  Gl as Bt,
  Ju as Vt,
  Jy as I,
  Kc as Ht,
  Lb as Ut,
  Ou as Wt,
  Pi as Gt,
  Pn as Kt,
  Qx as L,
  TS as qt,
  Ux as Jt,
  Uy as Yt,
  Vr as Xt,
  Vy as R,
  Wb as Zt,
  Wy as Qt,
  Xc as z,
  Xn as B,
  Xx as $t,
  Zx as en,
  a as tn,
  ar as V,
  as as nn,
  ci as rn,
  cl as an,
  cx as H,
  dr as U,
  fn as W,
  jc as on,
  jx as G,
  kn as K,
  kx as sn,
  mS as q,
  mr as cn,
  or as ln,
  qb as un,
  sx as dn,
  t as fn,
  ux as pn,
  vl as mn,
  wc as J,
  xc as hn,
  xr as gn,
  yS as _n,
  yo as vn,
  zb as yn,
} from "./main.js";
import { n as bn, t as xn } from "./chunk~ec644f97c6.js";
import { t as Sn } from "./chunk~cf8a297cc4.js";
var Y = e(i(), 1);
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
      r: G(Math.round(parseFloat(n)), 0, 255),
      g: G(Math.round(parseFloat(r)), 0, 255),
      b: G(Math.round(parseFloat(i)), 0, 255),
      a: G(s, 0, 1),
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
  X = o(),
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
    className: J(Bn, `noOpinionatedGlobalStyles`),
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
        strLabel: P.Localize(`#ColorPicker_Hue`),
        nMax: 360,
        nValue: Math.round(s.h),
        strValueText: `${Math.round(s.h)}°`,
        fnSetValue: (e) => u({ ...s, h: e }),
      }),
      !i &&
        (0, X.jsx)(gr, {
          className: `xV4lUfTUFc4-`,
          strLabel: P.Localize(`#ColorPicker_Opacity`),
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
    e(G(r, 0, 1), G(i, 0, 1));
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
    "aria-label": P.Localize(`#ColorPicker_SaturationBrightness`),
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    "aria-valuenow": Math.round(t.v * 100),
    "aria-valuetext": `${Math.round(t.s * 100)}%, ${Math.round(t.v * 100)}%`,
    onKeyDown: (e) => {
      let r = mr(e, `ArrowRight`, `ArrowLeft`),
        i = mr(e, `ArrowUp`, `ArrowDown`);
      (r !== void 0 || i !== void 0) &&
        (e.preventDefault(),
        n({ ...t, s: G(t.s + (r ?? 0), 0, 1), v: G(t.v + (i ?? 0), 0, 1) }));
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
    children: (0, X.jsx)(Be.Root, {
      min: 0,
      max: r,
      value: [i],
      onValueChange: (e) => o(e[0]),
      children: (0, X.jsx)(Be.Track, {
        render: (0, X.jsx)(`div`, { className: J(Wn, t) }),
        children: (0, X.jsx)(Be.Handle, {
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
            className: J(Yn, d && `_5Zk11eFAaLo-`),
            type: `text`,
            spellCheck: !1,
            autoComplete: `off`,
            "aria-label": P.Localize(`#ColorPicker_ColorValue`),
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
          children: P.Localize(`#ColorPicker_InvalidColor`),
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
              className: J(Qn, e === s && `wBwV8sUsuTo-`),
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
      console.warn(P.Localize(`#Sale_EyeDropperFailed`), e);
    } finally {
      e.classList.remove(sr);
    }
  };
  if (!i) return null;
  let s = P.Localize(`#Sale_BackgroundColorPicker`);
  return (0, X.jsx)(It, {
    toolTipContent: s,
    children: (0, X.jsx)(`button`, {
      type: `button`,
      className: Xn,
      "aria-label": s,
      onClick: o,
      children: (0, X.jsx)(rn, {}),
    }),
  });
}
function yr(e) {
  let { strCurrentHex: t, bOpaque: n, fnPick: r } = e;
  return (0, X.jsx)(`div`, {
    className: $n,
    role: `group`,
    "aria-label": P.Localize(`#ColorPicker_Palette`),
    children: ir.map((e) => {
      let i = n && e === t;
      return (0, X.jsx)(
        `button`,
        {
          type: `button`,
          className: J(er, i && `wBwV8sUsuTo-`),
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
        strTitle: a ?? P.Localize(`#Button_Color`),
        onChange: f,
        onSubmit: p,
        children: (0, X.jsxs)(`div`, {
          className: tr,
          children: [
            (0, X.jsx)(`button`, {
              type: `button`,
              className: J(nr, rr),
              onClick: p,
              children: P.Localize(`#Button_Save`),
            }),
            (0, X.jsx)(`button`, {
              type: `button`,
              className: nr,
              onClick: r,
              children: P.Localize(`#Button_Cancel`),
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
  a = (e instanceof HTMLElement, Pt(s, e, { bDisablePopTop: !0 }));
}
function Cr() {
  let e = (0, Y.useContext)(br);
  return { openColorPicker: (0, Y.useCallback)((t, n) => Sr(t, n, e), [e]) };
}
var wr = `Vvgd20dCqjc-`;
function Tr(e) {
  return (0, X.jsx)(`div`, {
    className: J(wr, e.bValveOnly && `zt09NDfGU3s-`),
    children: (0, X.jsx)(`div`, { children: e.children }),
  });
}
function Er(e) {
  let { eventModel: t } = e,
    { data: n } = Re(t.clanSteamID.GetAccountID());
  if (!n || (!n.can_edit && !n.support_user) || yn() == `community`) return;
  let r = t.GetAllTags(),
    i = [];
  if (
    (r.includes(`hide_store`) &&
      i.push(P.Localize(`#Sale_SaleEventIsHidden_Reason_ProductHide`)),
    r.includes(`mod_hide_store`) &&
      n.support_user &&
      i.push(P.Localize(`#Sale_SaleEventIsHidden_Reason_Mod`)),
    !t.BIsVisibleEvent() &&
      r.includes(`contenthub`) &&
      i.push(P.Localize(`#Sale_SaleEventIsHidden_ContentHub_Preview`)),
    !(t.BIsVisibleEvent() && i.length == 0))
  )
    return (0, X.jsxs)(Tr, {
      children: [
        !t.BIsVisibleEvent() &&
          (0, X.jsx)(`div`, {
            className: `XZUb9Zq6ctI-`,
            children: P.Localize(`#Sale_SaleEventIsHidden`),
          }),
        i.length > 0 &&
          (0, X.jsxs)(`div`, {
            className: `XZUb9Zq6ctI-`,
            children: [
              P.LocalizePlural(`#Sale_SaleEventIsHidden_Reason`, i.length),
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
    [r, i] = f(() => [
      t.jsondata.sale_logo_url,
      Yt.GetWithFallback(t.jsondata.localized_sale_logo, n),
    ]);
  return i && i?.length > 0
    ? r
      ? (0, X.jsx)(`a`, {
          className: Dr,
          href: H.STORE_BASE_URL + r,
          children: (0, X.jsx)(Ar, { ...e }),
        })
      : (0, X.jsx)(`div`, {
          className: J(Dr, `SalePageLogoCtn`),
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
    ? (0, X.jsx)(z, {
        children: (0, X.jsxs)(`video`, {
          loop: !0,
          muted: !0,
          autoPlay: !0,
          playsInline: !0,
          className: J(
            D,
            T[`CustomStyle_${t.jsondata.sale_vanity_id}`],
            `SaleBackground`,
            ae,
          ),
          style: {
            backgroundColor: n ? t.jsondata.sale_background_color : void 0,
          },
          children: [
            r && (0, X.jsx)(`source`, { src: r, type: `video/webm` }),
            i &&
              !H.IN_CLIENT &&
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
    [c] = f(() => [t.jsondata.sale_sub_menu]);
  Y.useEffect(() => {
    if (!s) return;
    let e = new Image();
    ((e.onload = () => {
      let t = (100 * e.width) / 950 + `%`;
      o.current && o.current.style.setProperty(`--background-scale`, t);
    }),
      (e.src = s));
  }, [s]);
  let l = t.jsondata.sale_sections?.some(
      (e) => e.section_type === `contenthubmaincarousel`,
    ),
    u =
      t.jsondata.item_source_type === fe.k_EContentHub &&
      ((t.jsondata.sale_vanity_id &&
        t.jsondata.sale_vanity_id.includes(`contenthubsalepage_`)) ||
        l),
    d = s ? `url(${s})` : `none`;
  return (0, X.jsxs)(X.Fragment, {
    children: [
      c
        ? (0, X.jsx)(ve, {
            event: t,
            language: n,
            bIsPreview: i,
            subMenu: c,
            styleVariation: be.k_SubMenu,
            personalizedCarousels: a,
          })
        : (0, X.jsx)(Mr, { strURL: s }),
      (0, X.jsx)(`div`, {
        className: J({ SaleBackgroundCtn: !0, ContentHubSalePage: u }),
        children: (0, X.jsxs)(`div`, {
          className: J(
            T[`CustomStyle_${t.jsondata.sale_vanity_id}`],
            `SaleCustomCSS`,
            D,
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
                  className: J(Ke, Qe, Xe),
                  src: s,
                  alt: `Header`,
                })
              : (0, X.jsx)(`div`, {
                  className: J(Ke, Qe),
                  style: {
                    backgroundImage: d,
                    backgroundRepeat: t.jsondata.sale_background_repeat,
                  },
                }),
            (0, X.jsx)(Nr, { event: t, bIsPreview: i }),
            (0, X.jsx)(X.Fragment, { children: r }),
          ],
        }),
      }),
    ],
  });
}
var Fr = e(r()),
  Ir = e(d());
function Lr(e) {
  let { nSectionID: t, children: n } = e,
    [r, i] = Y.useState(!1),
    [a, o] = Y.useState(!1);
  Y.useEffect(() => {
    pe.Get().SetMouseOverSection(t, r);
  }, [t, r]);
  let s = f(() => pe.Get().GetMouseOverSectionID()),
    c = t && t == s,
    l = () => pe.Get().JumpToSection(t),
    u = Y.useRef(null);
  return (
    Oe((e) => t == e && (u.current?.scrollIntoView(), o(!0), !0)),
    (0, X.jsxs)(`div`, {
      ref: u,
      className: J({ [te]: !0, [ne]: !!c, [re]: !!a }),
      onAnimationEnd: () => o(!1),
      onMouseEnter: () => i(!0),
      onMouseLeave: () => i(!1),
      children: [
        r &&
          (0, X.jsx)(It, {
            toolTipContent: I(`#Sale_SaleEditor_JumpTo_ttip`),
            direction: `top`,
            children: (0, X.jsx)(`button`, {
              className: `BxPO-muNnTI-`,
              onClick: l,
              children: (0, X.jsx)(vn, {}),
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
  let n = _n(H.LANGUAGE);
  return t.length == 1
    ? (0, X.jsx)(`div`, {
        className: J(Rr, `PresenterDisclaimer`),
        children: P.LocalizeReact(
          `#SalePresented_By`,
          (0, X.jsx)(Vr, { presentor: t[0], lang: n }),
        ),
      })
    : (0, X.jsx)(`div`, {
        className: J(Rr, `PresenterDisclaimer`),
        children: P.LocalizeReact(
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
    r = Vt(t.url);
  return (0, X.jsx)(Rt, {
    href: r,
    bUseLinkFilter: !0,
    className: zr,
    children: Yt.GetWithFallback(t.localized_presenter_name, n),
  });
}
function Hr(e) {
  let t = _n(un.LANGUAGE),
    n = v(t),
    r = [...new Set(e.flatMap((e) => S(e) || []))].join(`,`),
    i = Y.useMemo(() => (r ? r.split(`,`) : []), [r]),
    a = u({ queries: i.map((e) => _(e, t, n)), combine: Ur });
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
    { data: r } = Re(n ? e.GetAccountID() : 0);
  return n && ni(r, t);
}
function ii(e) {
  let { clanSteamID: t, id: n } = e;
  return ri(t, e.requireAdmin)
    ? (0, X.jsx)(`div`, {
        id: n,
        className: J(e.className, e.requireAdmin ? Ye : qe),
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
    a = At(`rgMLRecommenderWishlist`, `application_config`),
    o = Array.isArray(a) && a.length > 0 && Number.isInteger(a[0]);
  return !t.BIsNextFest() || !o || n == le.Random || ce(t) > 0
    ? null
    : (0, X.jsxs)(ii, {
        clanSteamID: t.clanSteamID,
        className: Gr,
        children: [
          (0, X.jsxs)(an, {
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
  Tt(n, Dt);
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
    y = (e) => Bt.Get().GetApp(e)?.GetName() ?? `App ${e}`,
    b = (e) => `hsl(${Math.round((240 * _(e)) / g)}, 80%, 65%)`,
    x = (e, t) =>
      (0, X.jsx)(
        `div`,
        {
          className: J(ti, r == e && `It6LJnFk-X8-`),
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
          (0, X.jsx)(V, {
            className: Xr,
            onClick: () => o(sn()),
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
            (0, X.jsx)(V, {
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
    [r, i] = _e(`sale_section_seed_${t}`, sn());
  if (!n || n.length === 0) return null;
  if (n.length > 1 && r !== void 0) {
    let e = Ft(r);
    return (0, X.jsx)(X.Fragment, { children: en(n, 0, e) });
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
    s = jt(o);
  if (!n || (Array.isArray(n) && n.length == 0)) return null;
  if (!t) return (0, X.jsx)(X.Fragment, { children: n });
  let c;
  if (t.localized_background_art) {
    let e = q(a),
      n =
        e in t.localized_background_art
          ? e
          : Qt.GetLanguageFallback(H.LANGUAGE),
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
      c(this);
    }
    static async BDoesClanImageFileExistsOnCDNOrOrigin(e, t, n, r) {
      let i =
          H.COMMUNITY_BASE_URL +
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
        (this.m_curLocImageGroup.localized_images = $t(
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
    async DetermineAvailableLocalizationForGroup(t) {
      if (!this.m_curLocImageGroup) return;
      let n = this.m_curLocImageGroup.primaryImage,
        r = R.InitFromClanID(n.clanAccountID, H.EUNIVERSE),
        i = k.GetHashAndExt(n) ?? ``,
        a = [];
      for (let n = 0; n < 32; ++n)
        a.push(e.BDoesClanImageFileExistsOnCDNOrOrigin(t, r, i, n));
      let o = await Promise.all(a);
      s(() => {
        for (let e = 0; e < 32; ++e)
          o[e] &&
            (this.m_curLocImageGroup.localized_images[e] =
              k.GenerateURLFromHashAndExtAndLang(
                r,
                i,
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
        let e = R.InitFromClanID(n.clanAccountID, H.EUNIVERSE),
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
Ut([t], Ei.prototype, `m_curLocImageGroup`, void 0);
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
        Wt(e) && n(!1);
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
    className: J(o ? ji : Ai, `DragAndDropContainer`),
    children: [
      n?.(),
      (0, X.jsx)(`div`, { children: i || I(`#ImagePicker_DragAndDrop`) }),
      (0, X.jsxs)(`div`, {
        className: Mi,
        children: [
          s,
          (0, X.jsxs)(`label`, {
            onClick: c,
            children: [
              (0, X.jsxs)(`span`, {
                children: [I(`#ImagePicker_OrBrowse`), ` `],
              }),
              (0, X.jsx)(`span`, {
                className: Ni,
                children: I(`#selectimage_select_file`),
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
    [s, c] = f(() => [t.GetUploadImages(), it.Get().GetCurEditLanguage()]),
    l = Y.useCallback(
      async (e) => {
        let n = Array.from(e),
          r = !0;
        for (let e = 0; e < n.length; e++) {
          let i = n[e],
            { language: a } = St(i?.name, c);
          try {
            let n = vt(a, c, o);
            ((r = await t.AddImageForLanguage(i, n)),
              r ||
                (console.error(
                  `ImageUploaderPanel.OnDropFiles: failed on i=` +
                    e +
                    ` file=` +
                    i.name,
                ),
                F(
                  (0, X.jsx)(Nt, {
                    strDescription: I(`#ImagePicker_Error`, i.name),
                  }),
                  window,
                )));
          } catch (e) {
            let t = Lt(e);
            (console.error(
              `ImageUploaderPanel.OnDropFiles: ` + t.strErrorMsg,
              t,
            ),
              F(
                (0, X.jsx)(Nt, {
                  strDescription: I(`#EventError_Code`, t.strErrorMsg ?? ``),
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
    f(() => s.map((e) => ({ a: e.GetCurrentImageOption(), b: e.language }))),
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
    [r] = f(() => [t.GetUploadImages()]),
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
        (0, X.jsx)(V, {
          style: { margin: `8px` },
          onClick: n,
          disabled: !i,
          children: I(`#ImageUpload_Upload`),
        }),
      !!r.length &&
        (0, X.jsx)(V, {
          style: { margin: `8px` },
          onClick: t.ClearImages,
          disabled: a,
          children: I(`#ImageUpload_Clear`),
        }),
    ],
  });
}
var Gi = l(Ki);
function Ki(e) {
  let t = (t) => {
      if (t instanceof mt) {
        t.ResetImage();
        let n = window,
          r = (0, X.jsx)(yt, {
            ownerWin: n,
            uploadFile: t,
            forceResolution: e.forceResolution,
            fileType: e.forceFileType || 3,
          });
        Kt(r, n, `CropModal`, { strTitle: I(`#ImageUpload_CropModalTitle`) });
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
          ((t += ` ${I(`#ImageUpload_Deprecated`)}`),
          (r = I(`#ImageUpload_Deprecated_ttip`))));
      let i;
      return (
        (n.BIsOriginalMinimumDimensions(e) && n.FileTypeMatchesImageTypes(e)) ||
          (i = Fi),
        { label: t, data: e, strOptionClass: i, tooltip: r }
      );
    }).filter((e) => !e.data.bHiddenFromDropdown),
    o = {
      pending: I(`#ImageUpload_Pending`),
      waiting: I(`#ImageUpload_Waiting`),
      uploading: I(`#ImageUpload_Uploading`),
      processing: I(`#ImageUpload_Processing`),
      success: I(`#ImageUpload_SuccessCard`),
      failed: I(`#ImageUpload_Failed`),
    },
    s = n.BSupportsLanguages()
      ? Yi(Qt.GetLanguageListForRealms(i ?? [qt.k_ESteamRealmGlobal]))
      : null,
    c = n.IsValidAssetType(e.forceResolution, e.forceFileType),
    l = n.status == `pending`,
    u = o[n.status];
  n.status == `pending` &&
    (c.needsCrop
      ? (u = I(`#ImageUpload_NeedsCrop`))
      : c.error && (u = I(`#ImageUpload_Invalid`)));
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
          children: (0, X.jsx)(hn, {}),
        }),
        (0, X.jsx)(qi, { asset: n }),
        s &&
          (0, X.jsx)(B, {
            strDropDownClassName: `ZsXFGEgobIY-`,
            rgOptions: s,
            selectedOption: n.language,
            onChange: (e) => (n.language = e.data),
            disabled: !l,
          }),
        a &&
          a?.length > 1 &&
          (0, X.jsx)(B, {
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
          className: J({ [et]: !0, [zi]: n.status == `failed` }),
          children: [
            u,
            Ct(n.status) &&
              (0, X.jsx)(`div`, {
                className: `RPxGbDpMPvc-`,
                children: (0, X.jsx)(j, { size: `small` }),
              }),
          ],
        }),
        (0, X.jsx)(`div`, { className: zi, children: n.message }),
        l &&
          c.error &&
          (0, X.jsx)(`div`, { className: `_4l0OY5qTFkk-`, children: c.error }),
        l &&
          c.needsCrop &&
          (0, X.jsx)(cn, {
            onClick: () => t(n),
            children: I(`#ImageUpload_OpenEditor`),
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
        onClick: (e) => F((0, X.jsx)(Ji, { asset: t }), zt(e)),
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
  return (0, X.jsx)(K, {
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
    let e = I(`#Language_` + q(t));
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
      placeholder: I(`#ImagePicker_Search`),
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
    i = bt(t),
    a = n.trim().toLowerCase() || ``,
    o = M.GetFilteredClanImagesList(i, a);
  if (o.length == 0) {
    let e = R.InitFromClanID(t, H.EUNIVERSE),
      n = M.GetLoadState(e);
    return n && n.loaded
      ? (0, X.jsx)(
          `div`,
          {
            className: ta,
            children:
              a.length > 0
                ? I(`#ImagePicker_EmptySearch`)
                : I(`#ImagePicker_Empty`),
          },
          `ImagePicker_Result`,
        )
      : n && n.errMsg
        ? (0, X.jsx)(
            `div`,
            { className: na, children: I(`#ImagePicker_Error`, n.errMsg) },
            `ImagePicker_Result`,
          )
        : (0, X.jsx)(
            `div`,
            { className: ta, children: I(`#Loading`) },
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
          e(R.InitFromClanID(t.clanAccountID, H.EUNIVERSE), !0);
        }));
    },
    p = (e) => {
      t.url &&
        M.GetClanImageDragListener().forEach((e) => {
          e(R.InitFromClanID(t.clanAccountID, H.EUNIVERSE), !1);
        });
    },
    m = (e) => {
      F(
        (0, X.jsx)(K, {
          strTitle: I(`#ImagePicker_DeleteImageTitle`),
          strDescription: ``,
          onOK: g,
          onCancel: _,
          closeModal: _,
          children: (0, X.jsxs)(Y.Fragment, {
            children: [
              (0, X.jsx)(`div`, {
                children: I(`#ImagePicker_DeleteAreYouSure`, t.file_name ?? ``),
              }),
              (0, X.jsx)(`br`, {}),
              (0, X.jsx)(`br`, {}),
              (0, X.jsx)(`div`, { children: I(`#ImagePicker_DeleteWarning`) }),
            ],
          }),
        }),
        zt(e) ?? window,
      );
    },
    h = (e) => {
      (console.log(`ClanImageWrapper on delete error: ` + e),
        F(
          (0, X.jsx)(Nt, {
            strTitle: I(`#Error_FailureNotice`),
            strDescription: I(`#EventDisplay_DeleteEvent_Error`),
            children: (0, X.jsx)(`p`, { children: e }),
          }),
          window,
        ));
    },
    g = () => {
      c(!0);
      let e = R.InitFromClanID(t.clanAccountID, H.EUNIVERSE);
      M.DeleteClanImage(e, t)
        .then((e) => {
          (e.success != 1 && h(Lt(e).strErrorMsg), c(!1));
        })
        .catch((e) => {
          (h(Lt(e).strErrorMsg), c(!1));
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
            children: I(`#ImagePicker_FullSize`),
          }),
        s && (0, X.jsx)(j, { size: `medium`, className: `_9dVXPw6twXc-` }),
        C &&
          (0, X.jsx)(`span`, {
            className: `_9em3bZdejR0-`,
            onClick: d,
            children: I(`#ImagePicker_Thumbnail`),
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
            children: I(`#ImagePicker_Video`),
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
    { data: i } = Re(t.clanAccountID);
  return r || !i?.valve_admin
    ? null
    : (0, X.jsx)(`span`, {
        className: J(aa, qe),
        onClick: () => n?.(t),
        children: `(VO) ` + I(`#ImagePicker_Localized`),
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
  return (0, X.jsxs)(K, {
    strTitle: I(`#ImagePicker_Images`),
    strDescription: I(`#ImagePicker_DoubleClickToSelect`),
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
            children: [I(`#ImagePicker_PreviousImages`), ` `],
          }),
          (0, X.jsx)(`span`, {
            className: Ni,
            children: I(`#ImagePicker_PreviousImages2`),
          }),
        ],
      }),
      (0, X.jsx)(`input`, {
        style: { display: `none` },
        id: `clanimagedialog`,
        type: `button`,
        onClick: (e) => {
          F(
            (0, X.jsx)(ma, { clanSteamID: t, OnClanImageSelected: n }),
            zt(e) ?? window,
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
    [s] = f(() => [it.Get().GetCurEditLanguage()]),
    c = xt(t, n, r),
    l = e.uploaderOverride || c,
    [u, d] = Y.useState(!1),
    p = Y.useCallback(
      async (e, t) => {
        if (!u) {
          d(!0);
          try {
            let { language: t } = St(e.file_name ?? ``, s),
              n = vt(t, s, o);
            await l.AddExistingClanImage(e, n);
          } catch (e) {
            let t = Lt(e);
            (console.error(`AddExistingClanImage: ` + t.strErrorMsg, t),
              F(
                (0, X.jsx)(Nt, {
                  strDescription: I(`#EventError_Code`, t.strErrorMsg ?? ``),
                }),
                window,
              ));
          }
          d(!1);
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
          let t = vt(e.language, s, o);
          Q.AddLocalizeImageUploaded(e.origimagehash, t);
        } else {
          let r = M.GetClanImageByImageHash(t, e?.image_hash ?? ``),
            i = n.image.GetCurrentImageOption();
          if (r && i) {
            let e = vt(n.image.language, s, o);
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
            j,
            { position: `center`, size: `medium`, string: I(`#Loading`) },
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
    l = R.InitFromClanID(t.clanAccountID, H.EUNIVERSE),
    u = f(() => k.GenerateURLFromHashAndExt(l, k.GetHashAndExt(t) ?? ``));
  return (0, X.jsx)(K, {
    strTitle: I(`#selectimage_change_artwork_lang_title`),
    strDescription: I(`#selectimage_change_artworl_lang_desc`),
    onOK: () => i?.(t, r, s),
    onCancel: n,
    closeModal: n,
    children: (0, X.jsxs)(`div`, {
      className: J(et, va),
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
  _t(t.GetAccountID());
  let a = Y.useMemo(() => {
      let e = [],
        t = Qt.GetLanguageListForRealms([
          qt.k_ESteamRealmGlobal,
          qt.k_ESteamRealmChina,
        ]);
      for (let r of t) {
        let t = n(r);
        if (t) {
          let n = q(r),
            i = I(`#Language_` + n);
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
    [o, s, c] = N();
  return (0, X.jsxs)(`div`, {
    className: Oa,
    children: [
      (0, X.jsx)(`div`, {
        className: ka,
        children: I(`#selectimage_uploaded_languages`),
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
        (0, X.jsxs)(V, {
          className: `_1k0t2Q-C2OU-`,
          onClick: s,
          children: [
            I(`#Sale_RemoveAll`),
            (0, X.jsx)(gn, { tooltip: I(`#Sale_RemoveAll_Tooltip`) }),
          ],
        }),
      (0, X.jsx)(W, {
        active: o,
        children: (0, X.jsx)(K, {
          strTitle: I(`#Dialog_AreYouSure`),
          strDescription: I(`#ImageUpload_DeleteAll_Confirm`),
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
    [s, c] = f(() => {
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
      let t = _n(e.currentTarget.id);
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
              children: (0, X.jsx)(Xt, {
                toolTipContent: I(`#selectimage_viewimage_ttip`),
                children: nn(),
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
    [s, c, l] = N(),
    u = f(() => {
      let e = i(n.lang);
      return (
        L(
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
        (0, X.jsx)(Xt, {
          toolTipContent: I(`#selectimage_reassign_image_ttip`),
          children: (0, X.jsx)(`img`, {
            "data-lang": n.lang,
            src: Fa,
            onClick: () => c(),
          }),
        }),
        (0, X.jsx)(z, {
          children: (0, X.jsx)(W, {
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
    [r, i, a] = N();
  return (0, X.jsxs)(X.Fragment, {
    children: [
      (0, X.jsx)(Xt, {
        toolTipContent: I(`#selectimage_delete_image_ttip`),
        children: (0, X.jsx)(`img`, {
          "data-lang": n.lang,
          src: Sn,
          onClick: i,
        }),
      }),
      (0, X.jsx)(z, {
        children: (0, X.jsx)(W, {
          active: r,
          children: (0, X.jsx)(K, {
            strTitle: I(`#selectimage_remove_image`),
            strDescription: I(
              `#selectimage_remove_details`,
              I(`#Language_` + q(n.lang)),
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
    s = Ve(),
    c = Y.useCallback(
      (e) => {
        (e.preventDefault(), r && r(t));
      },
      [t, r],
    ),
    l = o || _n(H.LANGUAGE),
    [u, d, p] = f(() => [
      t.GetSummaryWithFallback(l),
      t.GetNameWithFallback(l),
      t.BShowLibrarySpotlightText(),
    ]),
    m = `spotlight`,
    h = O.spotlight_main;
  (t.appid == 2434320 || H.EUNIVERSE == 2) &&
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
      children: (0, X.jsxs)(on, {
        className: J(Ya, Ba),
        onActivate: c,
        focusable: !0,
        children: [
          (0, X.jsx)(`div`, {
            className: Ka,
            children: (0, X.jsx)(Ie, {
              className: qa,
              rgSources: g,
              onIncrementalError: (e, t, n) => i && i(t),
            }),
          }),
          (0, X.jsxs)(`div`, {
            className: Va,
            children: [
              (0, X.jsx)(Ie, {
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
                      (0, X.jsx)(Ie, {
                        className: `D6QCZmpoq5M-`,
                        rgSources: g,
                        onIncrementalError: (e, t, n) => i && i(t),
                      }),
                      (0, X.jsxs)(`div`, {
                        className: `SPJgXF8Oqn4-`,
                        children: [
                          (0, X.jsx)(`div`, {
                            className: `mTAOqZLWhOo-`,
                            children: d,
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
      fnGetImageHashAndExt: d,
    } = e,
    p = d(n, t),
    m = p ? k.GenerateURLFromHashAndExtAndLang(i, p, O.full, t) : ``,
    [h] = f(() => [bo(n, d)]);
  return h == 0
    ? (0, X.jsxs)(`div`, {
        className: ya,
        children: [
          n === `capsule` &&
            (0, X.jsx)(mo, {
              imgURL: H.IMG_URL + `events/defaults/default_img_cover.jpg`,
              eventModel: a,
            }),
          n === `background` &&
            (0, X.jsx)(ho, {
              imgURL: H.IMG_URL + `events/defaults/default_img_header.jpg`,
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
          (0, X.jsx)(`div`, { children: I(`#EventEditor_ArtworkMissing`) }),
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
            fnGetImageHash: (e) => Pa(d(n, e) ?? ``),
          }),
        ],
      });
}
function fo(e) {
  let { artworkType: t, langOverride: n, eventModel: r } = e,
    i = wt[t],
    a = Y.useMemo(
      () => po(I(`#EventEditor_ArtworkType_` + t), `${i.width} X ${i.height}`),
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
    i = tn(),
    [a, o, s, c, l] = f(() => [
      n.GetNameWithFallback(t),
      n.GetDescriptionWithFallback(t),
      n.GetSubTitleWithLanguageFallback(t),
      n.type,
      n.AnnouncementGID,
    ]),
    u = o
      ? (0, X.jsx)(ze, {
          text: o || ``,
          showErrorInfo: !1,
          event: n,
          languageOverride: it.Get().GetCurEditLanguage(),
        })
      : I(`#selectimage_display_event_body`);
  return (0, X.jsxs)(`div`, {
    className: Za,
    children: [
      (0, X.jsx)(`div`, {
        className: Qa,
        children: I(`#selectimage_preview_title_1`),
      }),
      (0, X.jsx)(`div`, {
        className: J($a, `DetailPageExample`),
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
                    children: a || I(`#selectimage_display_event_title`),
                  }),
                  (0, X.jsx)(`div`, {
                    className: ao,
                    children: s || I(`#selectimage_display_event_subtitle`),
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
              children: I(`#selectimage_preview_title_2`),
            }),
            (0, X.jsx)(`div`, {
              className: J(`nvWdGclp6FI-`, `DetailPageExample`),
              children: (0, X.jsx)(`div`, {
                className: `wm--jcPYtBE-`,
                children: (0, X.jsx)(
                  Le,
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
    let [t] = Et(e.event.appid, { include_assets: !0 });
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
    [d] = Et(r, { include_assets: !0 }),
    [p, m] = f(() => [o?.GetEventType(), o?.BHasTag(`vo_marketing_message`)]),
    h = p == 36,
    g = null;
  n === 2
    ? (g = (0, X.jsx)(`span`, {
        style: { color: `#C6512B` },
        children: I(`#EventEditor_Required`),
      }))
    : n === 1
      ? (g = (0, X.jsx)(`span`, {
          style: { color: `#D7BC86` },
          children: I(`#EventEditor_Suggested`),
        }))
      : n === 3 &&
        (g = (0, X.jsx)(`span`, {
          style: { color: `#D7BC86` },
          children: I(`#EventEditor_Requested`),
        }));
  let _ = null;
  t === `capsule`
    ? (_ = h
        ? (0, X.jsxs)(X.Fragment, {
            children: [
              (0, X.jsxs)(`p`, {
                children: [
                  (0, X.jsx)(`strong`, {
                    children: I(`#selectimage_tip_design_title`),
                  }),
                  `: `,
                  I(`#selectimage_tip_capsule_creatorhome_1`),
                ],
              }),
              (0, X.jsxs)(`p`, {
                children: [
                  (0, X.jsx)(`strong`, {
                    children: I(`#selectimage_tip_usage_title`),
                  }),
                  `: `,
                  I(`#selectimage_tip_capsule_creatorhome_2`),
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
                      children: I(`#PartnerEvent_MM_ArtworkTip`),
                    }),
                    (0, X.jsx)(`p`, {
                      children: (0, X.jsx)(`a`, {
                        href: `${H.PARTNER_BASE_URL}doc/store/assets/promos#popup_update`,
                        children: I(`#PartnerEvent_MM_LearnMore`),
                      }),
                    }),
                  ],
                }),
              (0, X.jsxs)(`p`, {
                children: [
                  (0, X.jsx)(`strong`, {
                    children: I(`#selectimage_tip_design_title`),
                  }),
                  `: `,
                  I(`#selectimage_tip_capsule_1`),
                ],
              }),
              (0, X.jsxs)(`p`, {
                children: [
                  (0, X.jsx)(`strong`, {
                    children: I(`#selectimage_tip_usage_title`),
                  }),
                  `: `,
                  I(`#selectimage_tip_capsule_2`),
                ],
              }),
            ],
          }))
    : t === `background`
      ? (_ = (0, X.jsx)(X.Fragment, {
          children: (0, X.jsxs)(`p`, {
            children: [
              (0, X.jsx)(`strong`, {
                children: I(`#selectimage_tip_design_title`),
              }),
              `: `,
              I(`#selectimage_tip_background_1`),
            ],
          }),
        }))
      : t === `spotlight` || t === `localized_store_app_spotlight`
        ? (_ = (0, X.jsx)(X.Fragment, {
            children: (0, X.jsxs)(`p`, {
              children: [
                (0, X.jsx)(`strong`, {
                  children: I(`#selectimage_tip_usage_title`),
                }),
                `: `,
                I(`#selectimage_tip_store_spotlight_1`),
              ],
            }),
          }))
        : t === `localized_store_app_spotlight_mobile`
          ? (_ = (0, X.jsx)(X.Fragment, {
              children: (0, X.jsxs)(`p`, {
                children: [
                  (0, X.jsx)(`strong`, {
                    children: I(`#selectimage_tip_usage_title`),
                  }),
                  `: `,
                  I(`#selectimage_tip_store_mobile_spotlight`),
                ],
              }),
            }))
          : t === `broadcast_left` || t === `broadcast_right`
            ? (_ = (0, X.jsx)(X.Fragment, {
                children: (0, X.jsx)(`p`, {
                  children: I(`#selectimage_tip_broadcast_1`),
                }),
              }))
            : t === `sale_header`
              ? (_ = (0, X.jsxs)(X.Fragment, {
                  children: [
                    (0, X.jsx)(`div`, {
                      className: Ze,
                      children: I(`#selectimage_tip_required_title`),
                    }),
                    (0, X.jsxs)(`p`, {
                      children: [
                        (0, X.jsx)(`b`, {
                          children: I(`#selectimage_tip_usage_title`),
                        }),
                        `: `,
                        I(`#selectimage_tip_sale_header_1`),
                      ],
                    }),
                    (0, X.jsxs)(`p`, {
                      children: [
                        (0, X.jsx)(`b`, {
                          children: I(`#selectimage_tip_design_title`),
                        }),
                        `: `,
                        I(`#selectimage_tip_sale_header_2`),
                      ],
                    }),
                    (0, X.jsx)(`p`, {
                      children: I(`#selectimage_tip_sale_header_4`),
                    }),
                    (0, X.jsxs)(`p`, {
                      children: [
                        (0, X.jsx)(`b`, {
                          children: I(`#selectimage_tip_template_title`),
                        }),
                        `: `,
                        (0, X.jsx)(`a`, {
                          href: `https://www.dropbox.com/scl/fo/mhf604o6bdbcfr1scq7bx/h?rlkey=9bk0ggiwuvs4o1jdnej4xsy0c&dl=0`,
                          children: I(`#selectimage_tip_sale_header_3`),
                        }),
                      ],
                    }),
                    (0, X.jsx)(`br`, {}),
                  ],
                }))
              : t === `hero`
                ? d &&
                  (_ = (0, X.jsxs)(X.Fragment, {
                    children: [
                      (0, X.jsx)(`p`, {
                        children: I(`#selectimage_tip_hero_1`),
                      }),
                      !d.GetAssets()?.GetLibraryHeroURL() &&
                        (0, X.jsx)(`p`, {
                          className: `_9rhLFCwqjPg-`,
                          children: I(`#EventEdtior_ArtworkType_hero_warning`),
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
                          children: I(`#ImagePickerLoc_Desc`),
                        }),
                        (0, X.jsx)(`p`, {
                          children: Mt(
                            `#ImagePickerLoc_Files`,
                            (0, X.jsx)(`a`, {
                              href: xo,
                              target: H.IN_CLIENT ? void 0 : `_blank`,
                              children: I(`#ImagePickerLoc_URL`),
                            }),
                          ),
                        }),
                      ],
                    }))
                  : t === `product_banner`
                    ? (_ = (0, X.jsxs)(X.Fragment, {
                        children: [
                          (0, X.jsx)(`div`, {
                            className: Je,
                            children: I(`#selectimage_tip_optional_title`),
                          }),
                          (0, X.jsxs)(`p`, {
                            children: [
                              (0, X.jsx)(`b`, {
                                children: I(`#selectimage_tip_usage_title`),
                              }),
                              `: `,
                              I(`#selectimage_tip_sale_product_banner`),
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
                              className: Je,
                              children: I(`#selectimage_tip_optional_title`),
                            }),
                            (0, X.jsxs)(`p`, {
                              children: [
                                (0, X.jsx)(`b`, {
                                  children: I(`#selectimage_tip_usage_title`),
                                }),
                                `: `,
                                I(`#selectimage_tip_sale_product_banner`),
                                t === `product_mobile_banner` &&
                                  (0, X.jsxs)(`span`, {
                                    children: [
                                      `  `,
                                      I(
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
                                    children: I(
                                      `#selectimage_tip_design_title`,
                                    ),
                                  }),
                                  `:`,
                                  I(`#Sale_Tabs_Background_Design`),
                                ],
                              }),
                              (0, X.jsxs)(`p`, {
                                children: [
                                  (0, X.jsx)(`strong`, {
                                    children: I(`#selectimage_tip_usage_title`),
                                  }),
                                  `:`,
                                  I(`#Sale_Tabs_Background_Usage`),
                                ],
                              }),
                            ],
                          }))
                        : t === `sale_logo`
                          ? (_ = (0, X.jsxs)(X.Fragment, {
                              children: [
                                (0, X.jsx)(`div`, {
                                  className: Je,
                                  children: I(
                                    `#selectimage_tip_optional_title`,
                                  ),
                                }),
                                (0, X.jsxs)(`p`, {
                                  children: [
                                    (0, X.jsx)(`b`, {
                                      children: I(
                                        `#selectimage_tip_usage_title`,
                                      ),
                                    }),
                                    `: `,
                                    I(`#selectimage_tip_pageLogo`),
                                  ],
                                }),
                              ],
                            }))
                          : t === `sale_cross_promo_logo`
                            ? (_ = (0, X.jsxs)(X.Fragment, {
                                children: [
                                  (0, X.jsx)(`div`, {
                                    className: Je,
                                    children: I(
                                      `#selectimage_tip_optional_title`,
                                    ),
                                  }),
                                  (0, X.jsxs)(`p`, {
                                    children: [
                                      (0, X.jsx)(`b`, {
                                        children: I(
                                          `#selectimage_tip_usage_title`,
                                        ),
                                      }),
                                      `: `,
                                      I(
                                        `#selectimage_tip_sale_cross_promo_logo`,
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
                                    children: I(
                                      `#selectimage_tip_required_title`,
                                    ),
                                  }),
                                  (0, X.jsxs)(`p`, {
                                    children: [
                                      (0, X.jsx)(`b`, {
                                        children: I(
                                          `#selectimage_tip_usage_title`,
                                        ),
                                      }),
                                      `: `,
                                      I(`#selectimage_tip_bestofyear`),
                                    ],
                                  }),
                                ],
                              }));
  let v = wt[e.artworkType].width,
    y = wt[e.artworkType].height;
  return (0, X.jsxs)(`div`, {
    id: e.id,
    className: Aa,
    children: [
      !!e.title &&
        (0, X.jsxs)(`div`, {
          className: J(`Y63LZFKwGXE-`, i && `tU9SaxlQ-9k-`),
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
          className: J(`XRZj1OeBHRk-`, `hvd5bQPy4pQ-`),
          children: [
            _,
            !!(v && y) &&
              (0, X.jsxs)(`p`, {
                children: [
                  (0, X.jsx)(`b`, {
                    children: I(`#selectimage_tip_dimensions_title`),
                  }),
                  `:\xA0`,
                  Mt(`#selectimage_tip1`, gt(v), gt(y)),
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
            `\xA0`,
            (0, X.jsx)(`br`, {}),
            e.elAdditionalControls,
            !!e.fnRemoveAllArtwork &&
              (0, X.jsx)(V, {
                className: `_1k0t2Q-C2OU-`,
                onClick: (t) => {
                  F(
                    (0, X.jsx)(Co, {
                      fnRemoveAllArtwork: e.fnRemoveAllArtwork,
                    }),
                    zt(t) ?? window,
                  );
                },
                children: I(`#Sale_RemoveAll`),
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
  return (0, X.jsx)(K, {
    strTitle: I(`#Sale_RemoveAll`),
    strDescription: I(`#ImageUpload_DeleteAll_Confirm`),
    onOK: () => {
      (t?.(), n?.());
    },
    onCancel: n,
  });
}
function wo(e) {
  let {
      artworkType: t,
      realms: n,
      clanSteamID: r,
      fnLangHasData: i,
      fnGetImageHashAndExt: a,
      fnSetImageURL: o,
      eventModel: c,
      appid: l,
      partnerEventStore: u,
    } = e,
    d = t === `localized_image_group`,
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
      (e, n, r) => {
        s(() => {
          (Pa(a(t, n) ?? ``) == e.image_hash && o(t, null, n),
            o(t, e, r),
            g(e, r, !1));
        });
      },
      [a, t, o, g],
    );
  return t === `hero`
    ? (0, X.jsx)(`div`, {
        style: { padding: `16px` },
        children: (0, X.jsx)(V, {
          style: { textTransform: `uppercase`, width: `200px` },
          onClick: () =>
            window.open(
              `${H.PARTNER_BASE_URL}admin/game/editbyappid/${l}?activetab=tab_graphicalassets`,
            ),
          children: I(`#ImageUpload_EditHeroImage`),
        }),
      })
    : (0, X.jsxs)(`div`, {
        children: [
          (0, X.jsx)(To, {
            list: m,
            fnOnArtworkLanguageChange: _,
            realms: n,
            fnLangHasData: i,
          }),
          (0, X.jsx)(`div`, {
            children: (0, X.jsx)(`div`, {
              className: J(Ea, Da),
              children: (0, X.jsx)(uo, {
                eventModel: c,
                clanSteamID: r,
                fnOnLanguagePreviewChange: (e) => {
                  e != f && p(e);
                },
                langOverride: f,
                fnOnArtworkLangChange: d ? null : _,
                artworkType: t,
                fnOnRemoveImage: d ? null : (e) => o(t, null, e),
                realms: n,
                fnLangHasData: i,
                fnGetImageHashAndExt: a,
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
    F(
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
          i = I(`#Language_` + q(r));
        e.push(
          (0, X.jsxs)(
            `div`,
            {
              className: tt,
              children: [
                (0, X.jsx)(`span`, {
                  children: I(
                    `#ImageUpload_Success_Mapping`,
                    n.file_name ?? ``,
                    i,
                  ),
                }),
                (0, X.jsx)(`a`, {
                  onClick: () => this.ShowLangChangeDialog(n, r),
                  children: I(`#ImageUpload_Success_Mapping_Change`),
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
(Ut([Jt], To.prototype, `ShowLangChangeDialog`, null), (To = Ut([l], To)));
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
    [d, p] = (0, Y.useState)(!1),
    m = xt(t, o),
    h = t.GetAccountID(),
    [g] = f(() => [m.GetFilesToUpload().length - m.GetCompletedFiles()]);
  (0, Y.useEffect)(() => {
    (p(!1),
      Q.ClearImageGroup(),
      a?.forEach((e, t) => {
        let n = R.InitFromClanID(h, H.EUNIVERSE);
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
        let r = R.InitFromClanID(h, H.EUNIVERSE),
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
  return (0, X.jsxs)(K, {
    onCancel: c,
    closeModal: c,
    bDisableBackgroundDismiss: !0,
    bAllowFullSize: !0,
    className: J(ct, st),
    strTitle: e.strLocalizedTitle || I(`#ImagePickerLoc_Title`),
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
              file_type: ht(t) ?? 0,
              imageid: 0,
            },
            e,
          );
        } else l(o, null, e);
      }
      (Q.ClearImageGroup(), e.onOK ? e.onOK() : c?.());
    },
    strOKButtonText: g > 0 ? I(`#ImagePickerLoc_DismissWarning`) : void 0,
    children: [
      d
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
        : (0, X.jsx)(j, {
            size: `medium`,
            position: `center`,
            string: I(`#Loading`),
          }),
      e.children,
    ],
  });
}
function Do(e) {
  let { setting: t, fnUpdateSetting: n, label: r } = e,
    i = Y.useMemo(() => {
      let e = [];
      return (
        e.push({ label: I(`#EventEditor_Tile_NoRepeat`), data: `no-repeat` }),
        e.push({ label: I(`#EventEditor_Tile_RepeatX`), data: `repeat-x` }),
        e.push({ label: I(`#EventEditor_Tile_RepeatY`), data: `repeat-y` }),
        e.push({ label: I(`#EventEditor_Tile_Repeat`), data: `repeat` }),
        e.push({
          label: I(`#EventEditor_Tile_NoRepeatAndBlur`),
          data: `coverBlur`,
        }),
        e
      );
    }, []);
  return (0, X.jsxs)(X.Fragment, {
    children: [
      (0, X.jsx)(U, { children: r || I(`#EventEditor_Tile_Title`) }),
      (0, X.jsx)(B, {
        strDropDownClassName: $e,
        rgOptions: i,
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
    [c, l, u, d, p, m, h, g] = f(() => [
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
    strLocalizedTitle: I(`#BackgroundGroups_Configure`),
    strLocalizedDescription: I(`#BackgroundGroups_DialogDesc`),
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
          i ? (r[q(n)] = i) : delete r[q(n)],
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
                label: I(`#BackgroundGroups_Repeating`),
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
              (0, X.jsx)(U, { children: I(`#BackgroundGroups_Color`) }),
              (0, X.jsxs)(`div`, {
                className: Ti,
                children: [
                  (0, X.jsx)(V, {
                    style: { backgroundColor: u },
                    onClick: (e) =>
                      a(e, {
                        color: u,
                        onChange: (e) =>
                          s({ ...o, background_color1: e || void 0 }),
                      }),
                    children: I(
                      u === void 0
                        ? `#BackgroundGroups_ColorNum_unset`
                        : `#BackgroundGroups_ColorNum`,
                      1,
                    ),
                  }),
                  `\xA0`,
                  (0, X.jsx)(V, {
                    onClick: () => s({ ...o, background_color1: void 0 }),
                    children: I(`#BackgroundGroups_Color_Clear`),
                  }),
                ],
              }),
              (0, X.jsx)(`div`, {
                className: bi,
                children: (0, X.jsx)(V, {
                  onClick: () =>
                    s({ ...o, background_color1: d, background_color2: u }),
                  children: I(`#BackgroundGroups_Color_Swap`),
                }),
              }),
              p !== `single-color` &&
                (0, X.jsxs)(`div`, {
                  className: `j5T-MrFgQ20-`,
                  children: [
                    (0, X.jsx)(V, {
                      style: { backgroundColor: d },
                      onClick: (e) =>
                        a(e, {
                          color: d,
                          onChange: (e) =>
                            s({ ...o, background_color2: e || void 0 }),
                        }),
                      children: I(
                        d === void 0
                          ? `#BackgroundGroups_ColorNum_unset`
                          : `#BackgroundGroups_ColorNum`,
                        2,
                      ),
                    }),
                    `\xA0`,
                    (0, X.jsx)(V, {
                      onClick: () => s({ ...o, background_color2: void 0 }),
                      children: I(`#BackgroundGroups_Color_Clear`),
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
        children: (0, X.jsx)(Gt, {
          checked: !!g,
          onChange: (e) => {
            o.randomize_section_order = e;
          },
          children: I(`#BackgroundGroups_RandomizeSectionOrder`),
        }),
      }),
    ],
  });
}
function ko(e) {
  let t = $t([], 32, null);
  for (let n in e) {
    let r = _n(n);
    r != -1 && (t[r] = e[n]);
  }
  return t;
}
function Ao(e) {
  let { scaling_setting: t, fnUpdateSetting: n, label: r, disable: i } = e,
    a = Y.useMemo(() => {
      let e = [];
      return (
        e.push({ label: I(`#BackgroundGroups_Scaling_cover`), data: `cover` }),
        e.push({
          label: I(`#BackgroundGroups_Scaling_contain`),
          data: `contain`,
        }),
        e.push({ label: I(`#BackgroundGroups_Scaling_fixed`), data: `auto` }),
        e
      );
    }, []);
  return (0, X.jsxs)(X.Fragment, {
    children: [
      (0, X.jsx)(U, { children: r || I(`#BackgroundGroups_Scaling`) }),
      (0, X.jsx)(B, {
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
          label: I(`#BackgroundGroups_Gradient_Top`),
          data: `top-to-bottom`,
        }),
        e.push({
          label: I(`#BackgroundGroups_Gradient_Left`),
          data: `left-to-right`,
        }),
        e.push({
          label: I(`#BackgroundGroups_Gradient_TopLeft`),
          data: `top-left-to-bottom-right`,
        }),
        e
      );
    }, []);
  return (0, X.jsxs)(X.Fragment, {
    children: [
      (0, X.jsx)(U, { children: r || I(`#EventEditor_ColorSetting_Title`) }),
      (0, X.jsx)(B, {
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
        e.push({ label: I(`#BackgroundGroups_Position_Unset`), data: `unset` }),
        e.push({
          label: I(`#BackgroundGroups_Position_Centered`),
          data: `center`,
        }),
        e.push({
          label: I(`#BackgroundGroups_Position_CenteredTop`),
          data: `top center`,
        }),
        e.push({
          label: I(`#BackgroundGroups_Position_TopLeft`),
          data: `top left`,
        }),
        e.push({
          label: I(`#BackgroundGroups_Position_BottomRight`),
          data: `bottom right`,
        }),
        e
      );
    }, []);
  return (0, X.jsxs)(X.Fragment, {
    children: [
      (0, X.jsx)(U, { children: r || I(`#BackgroundGroups_Position`) }),
      (0, X.jsx)(B, {
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
    [s, c, l] = N(),
    u = f(() => t.GetSalePageLastCoverSectionUntilEnd());
  return (0, X.jsx)(`div`, {
    className: J(vi, i && `u6DPgTclyv4-`),
    children: (0, X.jsxs)(z, {
      children: [
        (0, X.jsx)(ln, {
          label: I(`#BackgroundGroups_Setting`),
          checked: a,
          onChange: (e) => {
            (o(e), t.SetBackgroundImageEnabled(e));
          },
        }),
        a
          ? (0, X.jsxs)(X.Fragment, {
              children: [
                (0, X.jsx)(ln, {
                  label: I(`#BackgroundGroups_EditMode`),
                  tooltip: I(`#BackgroundGroups_EditMode_ttip`),
                  checked: n,
                  onChange: r,
                }),
                (0, X.jsx)(ln, {
                  label: I(`#BackgroundGroups_ExtendToEnd`),
                  tooltip: I(`#BackgroundGroups_ExtendToEnd_ttip`),
                  checked: u,
                  onChange: (e) => t.SetSalePageLastCoverSectionUntilEnd(e),
                }),
                (0, X.jsx)(`hr`, {}),
                (0, X.jsx)(V, {
                  onClick: c,
                  children: I(`#BackgroundGroups_ClearAllSettings`),
                }),
                (0, X.jsx)(W, {
                  active: s,
                  children: (0, X.jsx)(K, {
                    strTitle: I(`#EventEditor_GenericAreYouSure`),
                    strDescription: I(
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
          : (0, X.jsx)(`p`, { children: I(`#BackgroundGroups_Desc`) }),
        (0, X.jsx)(`br`, {}),
        (0, X.jsx)(`a`, {
          href: `${H.PARTNER_BASE_URL}doc/marketing/event_tools/sales/groups`,
          target: `_blank`,
          children: I(`#EventGeneric_SeeDocs`),
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
    [l, u, d, p] = f(() => [
      a && n.mapGroupToSections.get(a.background_id),
      (a && n.mapGroupToSections.get(a.background_id)?.sectionUniqueIDs) ?? [],
      s == null
        ? r?.GetSalePageLastCoverSectionUntilEnd()
        : r?.GetTabLastCoverSectionUntilEnd(s),
      s == null ? r?.GetSalePageGroupCount() : r?.GetTabGroupCount(s),
    ]),
    m = d && i + 1 === p,
    [h, g, _] = N(),
    [v, y, b] = N(),
    x;
  l?.nUniqueIDNextSaleSection &&
    (x = se(
      2,
      r.GetSaleSectionByID(l?.nUniqueIDNextSaleSection),
      c,
      o,
      l.nSaleSectionLastIndex + 1,
    ));
  let S;
  if (l && u?.length > 1) {
    let e = u[u.length - 1];
    S = se(2, r?.GetSaleSectionByID(e), c, o, l.nSaleSectionLastIndex);
  }
  return (0, X.jsx)(bn, {
    bStartMinimized: !1,
    title: I(
      s == null
        ? `#BackgroundGroups_Sale_GroupNum`
        : `#BackgroundGroups_Sale_Tab_GroupNum`,
      i + 1,
    ),
    className: e.classNameHeader,
    children: (0, X.jsxs)(`div`, {
      ref: t,
      children: [
        (0, X.jsx)(V, {
          onClick: g,
          children: I(`#BackgroundGroups_Configure`),
        }),
        (0, X.jsx)(W, {
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
          children: I(`#BackgroundGroups_ContentTitle`),
        }),
        (0, X.jsxs)(`ul`, {
          children: [
            u.map((e) =>
              (0, X.jsx)(
                `li`,
                {
                  children: se(
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
              (0, X.jsx)(`li`, { children: I(`#BackgroundGroups_EndOfList`) }),
          ],
        }),
        !!S &&
          (0, X.jsx)(V, {
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
            children: I(`#BackgroundGroups_Reduce`, S),
          }),
        !!x &&
          (0, X.jsx)(V, {
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
            children: I(`#BackgroundGroups_Extend`, x),
          }),
        i > 0 &&
          (0, X.jsxs)(X.Fragment, {
            children: [
              (0, X.jsx)(`hr`, {}),
              (0, X.jsx)(V, {
                className: `_1k0t2Q-C2OU-`,
                onClick: y,
                children: I(`#BackgroundGroups_RemoveThisGroup`),
              }),
              (0, X.jsx)(W, {
                active: v,
                children: (0, X.jsx)(K, {
                  strTitle: I(`#Dialog_AreYouSure`),
                  bDestructiveWarning: !0,
                  strDescription: I(`#BackgroundGroups_RemoveThisGroup_Desc`),
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
    children: (0, X.jsx)(V, {
      onClick: (e) =>
        n !== void 0 && n >= 0
          ? t?.AddTabBackgroundGroup(n)
          : t?.AddSalePageBackgroundGroup(),
      children: I(
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
    let e = F(
      (0, X.jsx)(K, {
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
  let u = f(() => ui.get(t)),
    [d, p] = (0, Y.useState)(null),
    m = Y.useCallback((e, t) => {
      p(t);
    }, []),
    h = jt(m);
  return (0, X.jsxs)(`div`, {
    className: yi,
    ref: h,
    children: [
      !!(u && d && d > u) &&
        (0, X.jsx)(V, {
          onClick: (e) => l(!0),
          children: I(`#BackgroundGroups_EditBackgroundGroup`),
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
    let t = F(
      (0, X.jsx)(K, {
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
  let i = f(() => {
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
    c = jt(s),
    l = !!(i >= 0 && a && a > i);
  return (0, X.jsxs)(`div`, {
    className: J(yi, Ro),
    ref: c,
    children: [
      l &&
        (0, X.jsx)(V, {
          onClick: (e) => r(!0),
          children: I(`#BackgroundGroups_EditBackgroundGroup`),
        }),
      (0, X.jsx)(Bo, { ...e }),
    ],
  });
}
function Bo(e) {
  let { backgroundImageEditModel: t, imgGroupDerivedMapping: n, nTabID: r } = e,
    [i, a] = (0, Y.useState)(null),
    [o, s, c, l] = f(() => [
      t?.GetTabLastCoverSectionUntilEnd(r),
      t?.BIsTabEnabled(r),
      n.selectedTabBackgroundDef,
      t?.GetEventModel(),
    ]);
  return (0, X.jsxs)(z, {
    children: [
      (0, X.jsx)(ln, {
        label: I(`#BackgroundGroups_TaSetting`),
        checked: s,
        onChange: (e) => {
          if (
            (L(t, `edit model mising`),
            L(r !== void 0, `tab setting missing`),
            r !== void 0 && t)
          ) {
            let n = t.SetTabEnabled(r, e);
            (L(!!n, `Failed to create model TabID ${r}backgroundModel`), a(n));
          } else
            console.error(
              `Failed to enable table group, edit mode: ${!!t}, TabID: ${r}.`,
            );
        },
      }),
      !!s &&
        (0, X.jsxs)(X.Fragment, {
          children: [
            (0, X.jsx)(ln, {
              label: I(`#BackgroundGroups_ExtendToEnd`),
              tooltip: I(`#BackgroundGroups_ExtendToEnd_Tab_ttip`),
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
    [u, d] = Y.useState(null),
    p = f(() => n.jsondata.sale_header_disable_top_margin),
    m = xe(n, !!b(n)),
    h = Ho(n, i, c, Ae(!!r)),
    [_, v] = (0, Y.useState)(!1);
  Y.useEffect(() => {
    if (
      n.jsondata.sale_custom_css &&
      !u &&
      r &&
      n.jsondata.sale_vanity_id_valve_approved_for_sale_subpath &&
      yn() == `community`
    ) {
      let e = document.getElementsByTagName(`HEAD`)[0],
        t = document.createElement(`style`);
      ((t.innerText = Ht(n.jsondata.sale_custom_css)), d(t), e.appendChild(t));
    }
    let e = document.getElementsByClassName(`react_landing_background`);
    return (
      L(e.length <= 1, `Must have at most one react_landing_background`),
      e.length >= 1 && (e[0].style.backgroundImage = ``),
      () => {
        u && (u.remove(), d(null));
      }
    );
  }, [n, u, r]);
  let y = n?.jsondata,
    x = Y.useMemo(
      () => ({
        promotionName: t,
        clanid: Number(dn.CLANACCOUNTID),
        nAppIDVOD: Number(y?.broadcast_preroll_vod_appid),
        event: n,
        bIsPreview: r,
        language: i,
        accountIDs: r ? y?.broadcast_whitelist : void 0,
        chat_announcement_giveaway: y?.broadcast_chat_announcement_giveaway,
      }),
      [r, n, y, i, t],
    ),
    S = f(() => a?.BIsBackgroundImageEnabled() ?? !1),
    C = ri(n?.clanSteamID);
  if (!n || c === void 0)
    return (0, X.jsx)(`div`, {
      className: fn,
      style: { height: `500px` },
      children: (0, X.jsx)(j, { size: `medium`, string: I(`#Loading`) }),
    });
  {
    let e = Or(n),
      u = n.BUsesContentHubForItemSource(),
      d = n.GetSaleSections().some((e) => e.section_type === `contenthubtitle`),
      f = u && d,
      y,
      b = !0;
    e
      ? (y = 0)
      : n.BUsesContentHubForItemSource()
        ? (y = n.jsondata.sale_header_offset === 530 ? 530 : 20)
        : n.GetEventType() == 36
          ? ((y = 0), (b = !1))
          : (y = n.jsondata.sale_header_offset || 0);
    let w = b && n.jsondata.sale_header_offset === 530,
      ee = !Fe.Get().BIsPartnerTakeoverActive(
        n.GetContentHubType(),
        n.GetContentHubCategory(),
        n.GetContentHubTag(),
      ),
      te = r
        ? !_ && a?.BIsBackgroundImageEnabled()
          ? A.EPreviewMode_EditBackground
          : A.EPreviewMode_Enabled
        : A.EPreviewMode_Disabled,
      E = S || n.GetEventType() != 36,
      ne = u ? mn.NoTransform : mn.NoTransformSparseContent,
      D = J(
        ie,
        p && `_9D3431c8-XE-`,
        w && `_5NaHSqwUb-k-`,
        T[`CustomStyle_${n.jsondata.sale_vanity_id}`],
        `SaleOuterContainer`,
        e && `RG63SnOtLk0-`,
        f && void 0,
      );
    return (0, X.jsx)(z, {
      children: (0, X.jsx)(Ee, {
        eventModel: n,
        language: i,
        children: (0, X.jsx)(g, {
          location: r ? 2 : 0,
          children: (0, X.jsxs)(Pr, {
            event: n,
            language: i,
            bIsPreview: !!r,
            personalizedCarousels: m,
            children: [
              ee && (0, X.jsx)(je, {}),
              (0, X.jsx)(Er, { eventModel: n }),
              !!a &&
                (E || C) &&
                (0, X.jsx)(No, {
                  backgroundImageEditModel: a,
                  bBackgroundImgGroupEditMode: _,
                  fnSetBackgroundImgGroupEditMode: v,
                  bShowAsValveOnly: !E,
                }),
              (0, X.jsxs)(on, {
                style: !f || (w && !e) ? { marginTop: `${y || 0}px` } : void 0,
                className: D,
                scrollIntoViewType: ne,
                children: [
                  e && (0, X.jsx)(kr, { eventModel: n, language: i }),
                  (0, X.jsx)(Br, { rgPresenters: n.jsondata.sale_presenters }),
                  (0, X.jsx)(Wr, { event: n, broadcastEmbedContext: x }),
                  (0, X.jsx)(Go, {
                    ePreviewMode: te,
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
  let i = f(() => e.GetSaleSectionFirstMatchByType(`tabs`)),
    a = ye(i, t),
    [o] = Ge(`tab`, void 0),
    [s] = Ge(x, void 0),
    [c] = Ge(m, void 0),
    l = Y.useMemo(() => {
      let e = a?.filter((e) => !e.hide);
      if (e && e.length > 0) {
        let t = o > 0 ? e.find((e) => e.unique_id == o) : void 0;
        t ||= e[0];
        let n = t === e[0];
        return { selTab: t, bIsDefaultTab: n };
      }
    }, [a, o]),
    u = h(w(s, c), l?.selTab.tab_tag_filter, r),
    d = u?.strParentKey,
    p = u?.strChildKey;
  return Y.useMemo(() => {
    if (!l) return;
    let t;
    d && (t = { strParentKey: d, strChildKey: p });
    let r =
      e.jsondata.sale_opt_in_page_name || e.jsondata.prune_list_optin_name;
    return new Se(l.selTab, n, l.bIsDefaultTab, t, r);
  }, [e, n, l, d, p]);
}
function Uo() {
  if (window?.location?.hash)
    return decodeURIComponent(window.location.hash.substring(1).toLowerCase());
}
function Wo(e) {
  let {
      event: t,
      language: r,
      nSaleDayIndex: i,
      ePreviewMode: a,
      selectedTab: o,
      backgroundImageEditModel: s,
    } = e,
    [c, l] = Y.useState(He()),
    u = Y.useMemo(() => new _i(), []),
    d = Y.useCallback(() => l(He()), []);
  (Y.useEffect(
    () => (
      window.addEventListener(`resize`, d),
      () => window.removeEventListener(`resize`, d)
    ),
    [d],
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
  let m = n(),
    h = (e, t) => {
      We(m, { ...(t || {}), tab: e.toString() });
    },
    [g, _] = Ge(`controller`),
    [v, b] = f(() => {
      let e = nt.GetCreatorHome(t.clanSteamID)?.GetAppIDList().length ?? 0,
        n = t.GetSaleSectionIncludingFooterSections(e);
      return [
        fi(
          t.jsondata.sale_background_img_groups,
          n,
          o && o.GetSectionTabUniqueID(),
        ),
        n,
      ];
    }),
    x = !1,
    S = [{ elements: [], activeTab: new Se(void 0, i) }],
    w = null,
    T = Zt(),
    ee = Te(),
    te = De(t),
    E = Hr(b),
    ne = Y.useMemo(() => {
      let e = Uo();
      if (!e) return;
      let t = b.findIndex((t) => t.section_anchor === e);
      return t > -1 ? t : void 0;
    }, [b]);
  (b.forEach((n, i) => {
    let l = S[S.length - 1].activeTab;
    if (l && !l.ShouldShowSection(n)) return;
    let d = Fe.Get().BIsPartnerTakeoverActive(
        t.GetContentHubType(),
        t.GetContentHubCategory(),
        t.GetContentHubTag(),
      ),
      f = c && !d && !t.jsondata.content_hub_restricted_width,
      m = Pe(n, a, t, r, T, te, E(n));
    if (m === void 0) return;
    if (!m) {
      if (p(n, ke()) && !pn.logged_in)
        x ||= ((m = (0, X.jsx)(y, { section: n, event: t, language: r })), !0);
      else {
        let t = n.diable_tab_id_filtering
          ? new Se(void 0, l && l.GetSaleDay())
          : l;
        (n.section_type == `tabs` &&
          n.tabs?.some((e) => e.unique_id == o?.GetSectionTabUniqueID()) &&
          S.push({ activeTab: o, elements: [] }),
          (m = (0, X.jsx)(Ne, {
            ...e,
            section: n,
            activeTab: t,
            appVisibilityTracker: u,
            selectedTab: o,
            setTabUniqueIDQueryParam: h,
            expanded: f,
            controllerCategory: g,
            setControllerCategory: _,
          })));
      }
    }
    ee && (m = (0, X.jsx)(Lr, { nSectionID: n.unique_id, children: m }));
    let b = S && S.length && S[S.length - 1],
      C = (0, X.jsx)(
        Yo,
        {
          section: n,
          nActiveTabID: b && b.activeTab && b.activeTab.GetSectionTabUniqueID(),
          saleSectionIndex: i,
          ePreviewMode: a,
          salePageBackgroundDerivedConfig: v,
          backgroundImageEditModel: s,
          bExpanded: f,
          children: (0, X.jsx)(ft, { enabled: !ne || i > ne, children: m }),
        },
        `SaleSectionIndex_` + n.unique_id + `_` + i,
      ),
      D = v.mapSectionToGroup.get(n.unique_id);
    (w &&
      w.groupID != D &&
      (S[S.length - 1].elements.push(
        pi(t, w, a, o && o?.GetSectionTabUniqueID()),
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
        pi(t, w, a, o && o?.GetSectionTabUniqueID()),
      ),
      null)));
  let D = S.map((e, t) =>
    (0, X.jsx)(
      `div`,
      { className: J(C, `SaleSectionTabListContainer`), children: e.elements },
      `TabSection_` + t,
    ),
  );
  return (0, X.jsx)(on, {
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
    l = t.section_anchor ? t.section_anchor : Ue + (t.unique_id || n),
    u = t.section_type != `tabs`,
    [d, f] = (0, Y.useState)(!0);
  return d
    ? (0, X.jsx)(z, {
        children: (0, X.jsx)(Ko, {
          visibility_by_door_index_state: t.visibility_by_door_index_state,
          door_index_visibility: t.door_index_visibility,
          children: u
            ? (0, X.jsx)(on, {
                navKey: l,
                id: l,
                className: J({
                  [oe]: !0,
                  SaleSectionCtn: !0,
                  [t.section_type]: !0,
                  [t.internal_section_data?.internal_type || ``]: !0,
                  expanded: s,
                  [t.single_item_style || ``]: !0,
                  [ee]: i == A.EPreviewMode_EditBackground,
                  [E]: t.collapse_header_space,
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
                        className: J({
                          [oe]: !0,
                          [ee]: !0,
                          [E]: t.collapse_header_space,
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
