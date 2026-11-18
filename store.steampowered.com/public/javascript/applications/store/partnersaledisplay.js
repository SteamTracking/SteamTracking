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
  $ as p,
  Q as m,
  Y as h,
  gt as g,
  ht as _,
  lt as v,
  pt as y,
  q as b,
  rt as x,
  st as S,
  ut as ee,
} from "./chunk~6b8ddcaac8.js";
import { n as C, r as w, t as T } from "./chunk~4c761eb6f4.js";
import {
  Ct as te,
  Et as E,
  I as ne,
  Ot as re,
  Q as ie,
  X as ae,
  Z as oe,
  a as se,
  at as ce,
  c as le,
  d as ue,
  et as de,
  f as fe,
  it as pe,
  l as me,
  n as he,
  o as D,
  r as ge,
  rt as _e,
  s as ve,
  t as ye,
  tt as be,
  u as xe,
  x as Se,
  y as Ce,
} from "./chunk~2185942436.js";
import {
  M as we,
  N as Te,
  P as Ee,
  R as De,
  U as Oe,
  j as ke,
} from "./chunk~3720b337f3.js";
import { t as Ae } from "./chunk~f0141d9521.js";
import { T as je, V as Me, W as Ne, v as Pe } from "./chunk~f57d770d64.js";
import { a as Fe, cn as Ie, ut as Le } from "./chunk~cf3721cc1c.js";
import { n as Re } from "./chunk~16aefcf65f.js";
import "./chunk~8681f5c764.js";
import { i as ze } from "./chunk~2f085f1384.js";
import { a as Be, o as Ve } from "./chunk~af36c62e9f.js";
import { t as O } from "./chunk~eefd71512b.js";
import { a as He, i as Ue, r as We, t as Ge } from "./chunk~91ae5e1167.js";
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
import { i as nt, t as rt } from "./chunk~d43c81a658.js";
import { D as it, F as at, I as ot, k as st } from "./chunk~b8ca037aae.js";
import { o as ct, s as lt } from "./chunk~95ecbf576c.js";
import { a as ut } from "./chunk~5a091db425.js";
import { n as dt } from "./chunk~e70aabe4d7.js";
import { n as ft, t as pt } from "./chunk~710e3cfd2f.js";
import { l as mt } from "./chunk~7b4b9eb713.js";
import { n as ht } from "./chunk~331382b23f.js";
import {
  a as gt,
  c as _t,
  f as vt,
  h as yt,
  i as bt,
  l as xt,
  m as St,
  n as Ct,
  p as k,
  r as wt,
  s as Tt,
  u as Et,
} from "./chunk~0be5d7b286.js";
import { a as Dt, n as Ot } from "./chunk~a7c5e71e12.js";
import { r as kt } from "./chunk~a243b6a34b.js";
import { t as At } from "./chunk~e60a8972cb.js";
import { n as jt } from "./chunk~fc8a9e4879.js";
import {
  $b as Mt,
  $c as Nt,
  $y as Pt,
  An as Ft,
  Ar as It,
  Ax as Lt,
  Br as Rt,
  Bu as zt,
  Cr as Bt,
  Dl as A,
  Eb as j,
  Fn as M,
  Fu as Vt,
  Gl as Ht,
  Ju as Ut,
  Jy as N,
  Kc as Wt,
  Lb as Gt,
  Ou as Kt,
  Pi as qt,
  Pn as Jt,
  Qx as P,
  TS as Yt,
  Ux as Xt,
  Uy as Zt,
  Vr as Qt,
  Vy as F,
  Wb as $t,
  Wy as en,
  Xc as I,
  Xn as L,
  Xx as tn,
  Zx as nn,
  a as rn,
  ar as R,
  as as an,
  ci as on,
  cl as sn,
  cx as z,
  dr as B,
  fn as V,
  jc as cn,
  jx as H,
  kn as U,
  kx as ln,
  mS as W,
  mr as un,
  or as G,
  qb as dn,
  sx as fn,
  t as pn,
  ux as mn,
  vl as hn,
  wc as K,
  xc as gn,
  xr as _n,
  yS as q,
  yo as vn,
  zb as yn,
} from "./main.js";
import { n as bn, t as xn } from "./chunk~ec644f97c6.js";
import { t as Sn } from "./chunk~cf8a297cc4.js";
var J = e(i(), 1);
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
function Y(e) {
  return Math.round(e * 100) / 100;
}
function jn(e) {
  let { r: t, g: n, b: r, a: i } = kn(e);
  return { r: Math.round(t), g: Math.round(n), b: Math.round(r), a: i };
}
function Mn(e, t) {
  let { r: n, g: r, b: i, a } = e,
    o = a >= 1;
  switch (t) {
    case `hex`:
      return En(e);
    case `rgb`:
      return o ? `rgb(${n}, ${r}, ${i})` : `rgba(${n}, ${r}, ${i}, ${Y(a)})`;
    case `hsl`: {
      let { h: t, s: n, l: r } = Dn(e),
        i = `${Math.round(t)}, ${Math.round(n * 100)}%, ${Math.round(r * 100)}%`;
      return o ? `hsl(${i})` : `hsla(${i}, ${Y(a)})`;
    }
  }
}
function Nn(e) {
  return `rgba(${e.r}, ${e.g}, ${e.b}, ${Y(e.a)})`;
}
function Pn(e) {
  let t = /^#?([0-9a-f]{3,4})$/i.exec(e)?.[1],
    n = Tn(t ? t.replace(/./g, `$&$&`) : e);
  return n && { ...n, a: Y(n.a) };
}
function Fn(e) {
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
      r: H(Math.round(parseFloat(n)), 0, 255),
      g: H(Math.round(parseFloat(r)), 0, 255),
      b: H(Math.round(parseFloat(i)), 0, 255),
      a: H(s, 0, 1),
    }
  );
}
var In;
function Ln(e) {
  if (typeof CSS > `u` || !CSS.supports(`color`, e)) return;
  if (In === void 0) {
    let e = document.createElement(`canvas`);
    ((e.width = e.height = 1),
      (In = e.getContext(`2d`, { willReadFrequently: !0 })));
  }
  let t = In;
  if (!t) return;
  (t.clearRect(0, 0, 1, 1),
    (t.fillStyle = `#000000`),
    (t.fillStyle = e),
    t.fillRect(0, 0, 1, 1));
  let [n, r, i, a] = t.getImageData(0, 0, 1, 1).data;
  return { r: n, g: r, b: i, a: Y(a / 255) };
}
function Rn(e) {
  let t = e?.trim();
  if (t) return Pn(t) ?? Fn(t) ?? Ln(t);
}
var zn = `FcfcNn7MYQM-`,
  Bn = `mBPBMKMRyFc-`,
  Vn = `Wi9Z0cIQBJQ-`,
  Hn = `CG-aPa5ETcg-`,
  Un = `XqWa8m4TS-o-`,
  Wn = `CT-fGhlJtb8-`,
  Gn = `_-1iQ2DUgeIw-`,
  Kn = `_6empc5TVW6c-`,
  qn = `X3PwdzXulJQ-`,
  Jn = `_362FAsYdx9w-`,
  Yn = `f8RIg1qa2ts-`,
  Xn = `IzorRe2k8io-`,
  Zn = `qWqNnw1hGLY-`,
  Qn = `xVJaIlx-dnY-`,
  $n = `GOiXAHGmWGg-`,
  er = `CJ0nwSBwrpE-`,
  tr = `pS4NM2hdvRk-`,
  nr = `VSND6o6qGDA-`,
  X = o(),
  rr =
    `#000000.#1b1b1b.#333333.#4d4d4d.#666666.#808080.#999999.#b3b3b3.#d9d9d9.#ffffff.#e53935.#fb8c00.#fdd835.#7cb342.#43a047.#00897b.#00acc1.#1e88e5.#8e24aa.#d81b60.#ef9a9a.#ffcc80.#fff59d.#c5e1a5.#a5d6a7.#80cbc4.#80deea.#90caf9.#ce93d8.#f48fb1.#b71c1c.#e65100.#f57f17.#33691e.#1b5e20.#004d40.#006064.#0d47a1.#4a148c.#880e4f`.split(
      `.`,
    ),
  ir = `rgba(255, 255, 255, 1)`,
  ar = `SharedColorPicker_Format`,
  or = `ColorPickerSampling`,
  sr = 0.01,
  cr = 0.1;
function lr(e) {
  let {
      color: t,
      onChange: n,
      strTitle: r,
      disableAlpha: i,
      onSubmit: a,
      children: o,
    } = e,
    [s, c] = (0, J.useState)(() => dr(t, i)),
    l = (0, J.useRef)(void 0);
  (0, J.useEffect)(() => {
    let e = Rn(t);
    !e || (l.current && ur(e, l.current, i)) || c((e) => Z(t, e.h, i) ?? e);
  }, [t, i]);
  let u = (0, J.useCallback)(
      (e) => {
        let t = i ? { ...e, a: 1 } : e;
        c(t);
        let r = jn(t);
        ((l.current = r), n(Nn(r)));
      },
      [i, n],
    ),
    d = jn(s),
    f = Mn({ ...d, a: 1 }, `hex`),
    p = Nn(d);
  return (0, X.jsxs)(`div`, {
    className: K(zn, `noOpinionatedGlobalStyles`),
    style: {
      "--colorpicker-hue": `hsl( ${s.h}deg 100% 50% )`,
      "--colorpicker-opaque": f,
      "--colorpicker-current": p,
    },
    children: [
      !!r && (0, X.jsx)(`div`, { className: `GEaX-EfeXNg-`, children: r }),
      (0, X.jsx)(mr, { hsva: s, fnSetColor: u }),
      (0, X.jsx)(hr, {
        className: Wn,
        strLabel: j.Localize(`#ColorPicker_Hue`),
        nMax: 360,
        nValue: Math.round(s.h),
        strValueText: `${Math.round(s.h)}°`,
        fnSetValue: (e) => u({ ...s, h: e }),
      }),
      !i &&
        (0, X.jsx)(hr, {
          className: `xV4lUfTUFc4-`,
          strLabel: j.Localize(`#ColorPicker_Opacity`),
          nMax: 100,
          nValue: Math.round(s.a * 100),
          strValueText: `${Math.round(s.a * 100)}%`,
          fnSetValue: (e) => u({ ...s, a: e / 100 }),
        }),
      (0, X.jsx)(gr, { hsva: s, disableAlpha: i, fnSetColor: u, onSubmit: a }),
      (0, X.jsx)(vr, {
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
function ur(e, t, n) {
  return (
    e.r === t.r &&
    e.g === t.g &&
    e.b === t.b &&
    (n || Math.abs(e.a - t.a) < 0.01)
  );
}
function dr(e, t) {
  return Z(e, 0, t) ?? Z(ir, 0, t);
}
function Z(e, t, n) {
  let r = Rn(e);
  if (!r) return;
  let i = On(n ? { ...r, a: 1 } : r);
  return i.s === 0 || i.v === 0 ? { ...i, h: t } : i;
}
function fr(e) {
  let t = (t) => {
    let n = t.currentTarget.getBoundingClientRect(),
      r = n.width ? (t.clientX - n.left) / n.width : 0,
      i = n.height ? (t.clientY - n.top) / n.height : 0;
    e(H(r, 0, 1), H(i, 0, 1));
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
function pr(e, t, n) {
  let r = e.shiftKey ? cr : sr;
  if (e.key === t) return r;
  if (e.key === n) return -r;
}
function mr(e) {
  let { hsva: t, fnSetColor: n } = e,
    r = fr((e, r) => n({ ...t, s: e, v: 1 - r }));
  return (0, X.jsx)(`div`, {
    className: Vn,
    role: `slider`,
    tabIndex: 0,
    "aria-label": j.Localize(`#ColorPicker_SaturationBrightness`),
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    "aria-valuenow": Math.round(t.v * 100),
    "aria-valuetext": `${Math.round(t.s * 100)}%, ${Math.round(t.v * 100)}%`,
    onKeyDown: (e) => {
      let r = pr(e, `ArrowRight`, `ArrowLeft`),
        i = pr(e, `ArrowUp`, `ArrowDown`);
      (r !== void 0 || i !== void 0) &&
        (e.preventDefault(),
        n({ ...t, s: H(t.s + (r ?? 0), 0, 1), v: H(t.v + (i ?? 0), 0, 1) }));
    },
    ...r,
    children: (0, X.jsx)(`div`, {
      className: Bn,
      style: { left: `${t.s * 100}%`, top: `${(1 - t.v) * 100}%` },
    }),
  });
}
function hr(e) {
  let {
    className: t,
    strLabel: n,
    nMax: r,
    nValue: i,
    strValueText: a,
    fnSetValue: o,
  } = e;
  return (0, X.jsx)(`div`, {
    className: Hn,
    children: (0, X.jsx)(Re.Root, {
      min: 0,
      max: r,
      value: [i],
      onValueChange: (e) => o(e[0]),
      children: (0, X.jsx)(Re.Track, {
        render: (0, X.jsx)(`div`, { className: K(Un, t) }),
        children: (0, X.jsx)(Re.Handle, {
          render: (e) =>
            (0, X.jsx)(`span`, {
              ...e,
              className: Bn,
              style: { insetInlineStart: `${(i / r) * 100}%` },
              "aria-label": n,
              "aria-valuetext": a,
            }),
        }),
      }),
    }),
  });
}
function gr(e) {
  let { hsva: t, disableAlpha: n, fnSetColor: r, onSubmit: i } = e,
    [a, o] = E(ar),
    s = An.find((e) => e === a) ?? `hex`,
    [c, l] = (0, J.useState)(void 0),
    u = Mn(jn(t), s),
    d = c !== void 0 && c.trim() !== `` && !Rn(c),
    f = (e) => {
      l(e);
      let i = Z(e, t.h, n);
      i && r(i);
    },
    p = (e) => {
      (o(e), l(void 0));
    };
  return (0, X.jsxs)(`div`, {
    className: Gn,
    children: [
      (0, X.jsxs)(`div`, {
        className: Kn,
        children: [
          (0, X.jsx)(`div`, { className: qn, "aria-hidden": !0 }),
          (0, X.jsx)(`input`, {
            className: K(Jn, d && `_5Zk11eFAaLo-`),
            type: `text`,
            spellCheck: !1,
            autoComplete: `off`,
            "aria-label": j.Localize(`#ColorPicker_ColorValue`),
            "aria-invalid": d,
            value: c ?? u,
            onChange: (e) => f(e.currentTarget.value),
            onBlur: () => l(void 0),
            onKeyDown: (e) => {
              e.key === `Enter` && (e.preventDefault(), l(void 0), i?.());
            },
          }),
          (0, X.jsx)(_r, { hsva: t, disableAlpha: n, fnSetColor: r }),
        ],
      }),
      d &&
        (0, X.jsx)(`div`, {
          className: `tHsVe8Ptn-s-`,
          children: j.Localize(`#ColorPicker_InvalidColor`),
        }),
      (0, X.jsx)(`div`, {
        className: Xn,
        role: `radiogroup`,
        children: An.map((e) =>
          (0, X.jsx)(
            `button`,
            {
              type: `button`,
              role: `radio`,
              "aria-checked": e === s,
              className: K(Zn, e === s && `wBwV8sUsuTo-`),
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
function _r(e) {
  let { hsva: t, disableAlpha: n, fnSetColor: r } = e,
    [i, a] = (0, J.useState)(!1);
  (0, J.useEffect)(() => a(`EyeDropper` in window), []);
  let o = async () => {
    let e = document.documentElement;
    e.classList.add(or);
    try {
      let e = Z((await new window.EyeDropper().open()).sRGBHex, t.h, n);
      e && r({ ...e, a: t.a });
    } catch (e) {
      console.warn(j.Localize(`#Sale_EyeDropperFailed`), e);
    } finally {
      e.classList.remove(or);
    }
  };
  if (!i) return null;
  let s = j.Localize(`#Sale_BackgroundColorPicker`);
  return (0, X.jsx)(Rt, {
    toolTipContent: s,
    children: (0, X.jsx)(`button`, {
      type: `button`,
      className: Yn,
      "aria-label": s,
      onClick: o,
      children: (0, X.jsx)(on, {}),
    }),
  });
}
function vr(e) {
  let { strCurrentHex: t, bOpaque: n, fnPick: r } = e;
  return (0, X.jsx)(`div`, {
    className: Qn,
    role: `group`,
    "aria-label": j.Localize(`#ColorPicker_Palette`),
    children: rr.map((e) => {
      let i = n && e === t;
      return (0, X.jsx)(
        `button`,
        {
          type: `button`,
          className: K($n, i && `wBwV8sUsuTo-`),
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
var yr = J.createContext(void 0);
function br(e) {
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
      children: (0, X.jsx)(lr, {
        color: t,
        disableAlpha: i,
        strTitle: a ?? j.Localize(`#Button_Color`),
        onChange: f,
        onSubmit: p,
        children: (0, X.jsxs)(`div`, {
          className: er,
          children: [
            (0, X.jsx)(`button`, {
              type: `button`,
              className: K(tr, nr),
              onClick: p,
              children: j.Localize(`#Button_Save`),
            }),
            (0, X.jsx)(`button`, {
              type: `button`,
              className: tr,
              onClick: r,
              children: j.Localize(`#Button_Cancel`),
            }),
          ],
        }),
      }),
    })
  );
}
function xr(e, t, n) {
  let r = t.bLivePreview ?? !0,
    i = r ? n?.fnSnapshot() : void 0,
    a = null,
    o = !1,
    s = (0, X.jsx)(br, {
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
  a = (e instanceof HTMLElement, It(s, e, { bDisablePopTop: !0 }));
}
function Sr() {
  let e = (0, J.useContext)(yr);
  return { openColorPicker: (0, J.useCallback)((t, n) => xr(t, n, e), [e]) };
}
var Cr = `Vvgd20dCqjc-`;
function wr(e) {
  return (0, X.jsx)(`div`, {
    className: K(Cr, e.bValveOnly && `zt09NDfGU3s-`),
    children: (0, X.jsx)(`div`, { children: e.children }),
  });
}
function Tr(e) {
  let { eventModel: t } = e,
    { data: n } = Ie(t.clanSteamID.GetAccountID());
  if (!n || (!n.can_edit && !n.support_user) || yn() == `community`) return;
  let r = t.GetAllTags(),
    i = [];
  if (
    (r.includes(`hide_store`) &&
      i.push(j.Localize(`#Sale_SaleEventIsHidden_Reason_ProductHide`)),
    r.includes(`mod_hide_store`) &&
      n.support_user &&
      i.push(j.Localize(`#Sale_SaleEventIsHidden_Reason_Mod`)),
    !t.BIsVisibleEvent() &&
      r.includes(`contenthub`) &&
      i.push(j.Localize(`#Sale_SaleEventIsHidden_ContentHub_Preview`)),
    !(t.BIsVisibleEvent() && i.length == 0))
  )
    return (0, X.jsxs)(wr, {
      children: [
        !t.BIsVisibleEvent() &&
          (0, X.jsx)(`div`, {
            className: `XZUb9Zq6ctI-`,
            children: j.Localize(`#Sale_SaleEventIsHidden`),
          }),
        i.length > 0 &&
          (0, X.jsxs)(`div`, {
            className: `XZUb9Zq6ctI-`,
            children: [
              j.LocalizePlural(`#Sale_SaleEventIsHidden_Reason`, i.length),
              (0, X.jsx)(`ul`, {
                children: i.map((e) => (0, X.jsx)(`li`, { children: e }, e)),
              }),
            ],
          }),
      ],
    });
}
var Er = `_4rizx-X0oWo-`;
function Dr(e) {
  return (
    !e.jsondata.sale_logo_cross_promo_only &&
    (e.jsondata.localized_sale_logo?.filter(Boolean).length ?? 0) > 0
  );
}
function Or(e) {
  let { eventModel: t, language: n } = e,
    [r, i] = f(() => [
      t.jsondata.sale_logo_url,
      Zt.GetWithFallback(t.jsondata.localized_sale_logo, n),
    ]);
  return i && i?.length > 0
    ? r
      ? (0, X.jsx)(`a`, {
          className: Er,
          href: z.STORE_BASE_URL + r,
          children: (0, X.jsx)(kr, { ...e }),
        })
      : (0, X.jsx)(`div`, {
          className: K(Er, `SalePageLogoCtn`),
          children: (0, X.jsx)(kr, { ...e }),
        })
    : null;
}
function kr(e) {
  let { eventModel: t, language: n } = e,
    r = dt(t, `sale_logo`, n);
  return (0, X.jsx)(`img`, { src: r, alt: `logo` });
}
var Ar = `_1Bceni0-cAw-`;
function jr(e) {
  let { strURL: t } = e;
  return t
    ? (0, X.jsx)(`div`, {
        className: Ar,
        children: (0, X.jsx)(`img`, { alt: ``, src: t }),
      })
    : null;
}
function Mr(e) {
  let { event: t, bIsPreview: n } = e,
    r = t.jsondata.sale_background_video_webm,
    i = t.jsondata.sale_background_video_mp4;
  return i || r
    ? (0, X.jsx)(I, {
        children: (0, X.jsxs)(`video`, {
          loop: !0,
          muted: !0,
          autoPlay: !0,
          playsInline: !0,
          className: K(
            p,
            g[`CustomStyle_${t.jsondata.sale_vanity_id}`],
            `SaleBackground`,
            _,
          ),
          style: {
            backgroundColor: n ? t.jsondata.sale_background_color : void 0,
          },
          children: [
            r && (0, X.jsx)(`source`, { src: r, type: `video/webm` }),
            i &&
              !z.IN_CLIENT &&
              (0, X.jsx)(`source`, { src: i, type: `video/mp4` }),
          ],
        }),
      })
    : null;
}
function Nr(e) {
  let {
      event: t,
      language: n,
      children: r,
      bIsPreview: i,
      personalizedCarousels: a,
    } = e,
    o = J.useRef(null),
    s = dt(t, `sale_header`, n),
    [c] = f(() => [t.jsondata.sale_sub_menu]);
  J.useEffect(() => {
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
      t.jsondata.item_source_type === Pe.k_EContentHub &&
      ((t.jsondata.sale_vanity_id &&
        t.jsondata.sale_vanity_id.includes(`contenthubsalepage_`)) ||
        l),
    d = s ? `url(${s})` : `none`;
  return (0, X.jsxs)(X.Fragment, {
    children: [
      c
        ? (0, X.jsx)(oe, {
            event: t,
            language: n,
            bIsPreview: i,
            subMenu: c,
            styleVariation: ie.k_SubMenu,
            personalizedCarousels: a,
          })
        : (0, X.jsx)(jr, { strURL: s }),
      (0, X.jsx)(`div`, {
        className: K({ SaleBackgroundCtn: !0, ContentHubSalePage: u }),
        children: (0, X.jsxs)(`div`, {
          className: K(
            g[`CustomStyle_${t.jsondata.sale_vanity_id}`],
            `SaleCustomCSS`,
            p,
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
                  className: K(Ke, Qe, Xe),
                  src: s,
                  alt: `Header`,
                })
              : (0, X.jsx)(`div`, {
                  className: K(Ke, Qe),
                  style: {
                    backgroundImage: d,
                    backgroundRepeat: t.jsondata.sale_background_repeat,
                  },
                }),
            (0, X.jsx)(Mr, { event: t, bIsPreview: i }),
            (0, X.jsx)(X.Fragment, { children: r }),
          ],
        }),
      }),
    ],
  });
}
var Pr = e(r()),
  Fr = e(d());
function Ir(e) {
  let { nSectionID: t, children: n } = e,
    [r, i] = J.useState(!1),
    [a, o] = J.useState(!1);
  J.useEffect(() => {
    de.Get().SetMouseOverSection(t, r);
  }, [t, r]);
  let s = f(() => de.Get().GetMouseOverSectionID()),
    c = t && t == s,
    l = () => de.Get().JumpToSection(t),
    u = J.useRef(null);
  return (
    _e((e) => t == e && (u.current?.scrollIntoView(), o(!0), !0)),
    (0, X.jsxs)(`div`, {
      ref: u,
      className: K({ [ee]: !0, [b]: !!c, [h]: !!a }),
      onAnimationEnd: () => o(!1),
      onMouseEnter: () => i(!0),
      onMouseLeave: () => i(!1),
      children: [
        r &&
          (0, X.jsx)(Rt, {
            toolTipContent: N(`#Sale_SaleEditor_JumpTo_ttip`),
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
var Lr = `oj4yraCGjDk-`,
  Rr = `oBMBeb6Ow8M-`;
function zr(e) {
  let { rgPresenters: t } = e;
  if (!t || t.length == 0) return null;
  let n = q(z.LANGUAGE);
  return t.length == 1
    ? (0, X.jsx)(`div`, {
        className: K(Lr, `PresenterDisclaimer`),
        children: j.LocalizeReact(
          `#SalePresented_By`,
          (0, X.jsx)(Br, { presentor: t[0], lang: n }),
        ),
      })
    : (0, X.jsx)(`div`, {
        className: K(Lr, `PresenterDisclaimer`),
        children: j.LocalizeReact(
          `#SalePresented_By_Multi`,
          t
            .slice(0, t.length - 1)
            .map((e, r) =>
              (0, X.jsxs)(
                J.Fragment,
                {
                  children: [
                    (0, X.jsx)(Br, { presentor: e, lang: n }),
                    t.length > 2 && `, `,
                  ],
                },
                e.url,
              ),
            ),
          (0, X.jsx)(Br, { presentor: t[t.length - 1], lang: n }),
        ),
      });
}
function Br(e) {
  let { presentor: t, lang: n } = e,
    r = Ut(t.url);
  return (0, X.jsx)(Bt, {
    href: r,
    bUseLinkFilter: !0,
    className: Rr,
    children: Zt.GetWithFallback(t.localized_presenter_name, n),
  });
}
function Vr(e) {
  let t = q(dn.LANGUAGE),
    n = ot(t),
    r = [...new Set(e.flatMap((e) => Oe(e) || []))].join(`,`),
    i = J.useMemo(() => (r ? r.split(`,`) : []), [r]),
    a = u({ queries: i.map((e) => at(e, t, n)), combine: Hr });
  return J.useCallback(
    (e) => {
      let t = Oe(e),
        n = t ? i.indexOf(t) : -1;
      return n >= 0 ? a[n] : void 0;
    },
    [i, a],
  );
}
function Hr(e) {
  return e.map((e) => e.data);
}
function Ur(e) {
  let { event: t, broadcastEmbedContext: n } = e,
    r = !!t?.jsondata?.broadcast_display_wide_player,
    i = !!t?.jsondata?.broadcast_dispaly_wide_player_allow_chat;
  return (0, X.jsx)(X.Fragment, {
    children:
      !!(
        t.BEventCanShowBroadcastWidget() && t.BSaleShowBroadcastAtTopOfPage()
      ) &&
      (0, X.jsx)(fe, {
        event: t,
        broadcastEmbedContext: n,
        bWideBroadcastDisplay: r,
        bWideBroadcastPermitChat: i,
      }),
  });
}
var Wr = `Fh-jFuR9Yvo-`,
  Gr = `_4rNPfhfRBrc-`,
  Kr = `Bc2anSpsdzg-`,
  qr = `HxVKtqJLU2k-`,
  Jr = `_4oPueAzMcGE-`,
  Yr = `kqyJu6iojzM-`,
  Xr = `UhkkMgNIeQo-`,
  Zr = `YSYpQ5wCRA0-`,
  Qr = `gOxlo3KMChI-`,
  $r = `WUODlv8V5dM-`,
  ei = `_7grqK8KjlHk-`;
function ti(e, t) {
  return e ? (t ? !!e.valve_admin : !!(e.valve_admin || e.support_user)) : !1;
}
function ni(e, t) {
  let n = !!(e && e.BIsClanAccount()),
    { data: r } = Ie(n ? e.GetAccountID() : 0);
  return n && ti(r, t);
}
function ri(e) {
  let { clanSteamID: t, id: n } = e;
  return ni(t, e.requireAdmin)
    ? (0, X.jsx)(`div`, {
        id: n,
        className: K(e.className, e.requireAdmin ? Ye : qe),
        children: e.children,
      })
    : null;
}
var ii = 12,
  ai = 240;
function oi(e) {
  let { event: t } = e,
    [n] = re(Ne, void 0),
    [r, i] = J.useState(!1),
    a = Mt(`rgMLRecommenderWishlist`, `application_config`),
    o = Array.isArray(a) && a.length > 0 && Number.isInteger(a[0]);
  return !t.BIsNextFest() || !o || n == Me.Random || je(t) > 0
    ? null
    : (0, X.jsxs)(ri, {
        clanSteamID: t.clanSteamID,
        className: Wr,
        children: [
          (0, X.jsxs)(sn, {
            className: Gr,
            onClick: () => i(!r),
            children: [r ? `▼` : `▶`, ` Next Fest personalized order (VO)`],
          }),
          r && (0, X.jsx)(si, { event: t, rgRecommendedAppIDs: a }),
        ],
      });
}
function si(e) {
  let { event: t, rgRecommendedAppIDs: n } = e,
    [r, i] = J.useState(void 0);
  Dt(n, kt);
  let [a, o] = J.useState(void 0),
    [s, c] = J.useState(``),
    l = t.jsondata.sale_ml_recommender_weight_exponent || 2.5,
    u = parseFloat(s),
    d = a ?? ue(t),
    f = u || l,
    p = J.useMemo(() => xe(n, n, (e) => e, d, f), [n, d, f]),
    m = J.useMemo(() => new Map(n.map((e, t) => [e, t])), [n]),
    h = J.useMemo(() => new Map(p.map((e, t) => [e, t])), [p]),
    g = n.length,
    _ = (e) => m.get(e) ?? 0,
    v = (e) => h.get(e) ?? 0,
    y = (e) => Ht.Get().GetApp(e)?.GetName() ?? `App ${e}`,
    b = (e) => `hsl(${Math.round((240 * _(e)) / g)}, 80%, 65%)`,
    x = (e, t) =>
      (0, X.jsx)(
        `div`,
        {
          className: K(ei, r == e && `It6LJnFk-X8-`),
          style: { height: ii, color: b(e) },
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
          y1: (_(e) + 0.5) * ii,
          x2: ai,
          y2: (v(e) + 0.5) * ii,
          stroke: t ? `white` : b(e),
          strokeWidth: t ? 2 : 1,
          strokeOpacity: t ? 1 : r === void 0 ? 0.6 : 0.15,
        },
        e,
      );
  return (0, X.jsxs)(`div`, {
    className: Kr,
    children: [
      (0, X.jsxs)(`div`, {
        className: qr,
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
        className: Jr,
        children: [
          (0, X.jsx)(R, {
            className: Yr,
            onClick: () => o(ln()),
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
                className: Xr,
                placeholder: String(l),
                value: s,
                onChange: (e) => c(e.target.value),
              }),
            ],
          }),
          (a !== void 0 || s != ``) &&
            (0, X.jsx)(R, {
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
        className: Zr,
        onMouseLeave: () => i(void 0),
        children: [
          (0, X.jsxs)(`div`, {
            className: Qr,
            children: [
              (0, X.jsx)(`div`, {
                className: $r,
                children: `Recommended order`,
              }),
              n.map((e, t) => x(e, `#${t + 1} ${y(e)}`)),
            ],
          }),
          (0, X.jsxs)(`div`, {
            className: Qr,
            children: [
              (0, X.jsx)(`div`, { className: $r, children: `\xA0` }),
              (0, X.jsxs)(`svg`, {
                width: ai,
                height: g * ii,
                children: [
                  n.filter((e) => e != r).map((e) => S(e, !1)),
                  r !== void 0 && m.has(r) && S(r, !0),
                ],
              }),
            ],
          }),
          (0, X.jsxs)(`div`, {
            className: Qr,
            children: [
              (0, X.jsx)(`div`, { className: $r, children: `Shuffled order` }),
              p.map((e) => x(e, `#${_(e) + 1} ${y(e)}`)),
            ],
          }),
        ],
      }),
    ],
  });
}
function ci(e) {
  let { event: t, fnOnChangeDayIndex: n, addtionalAdminButtons: r } = e;
  return (0, X.jsxs)(X.Fragment, {
    children: [
      (0, X.jsx)(oi, { event: t }),
      (0, X.jsx)(At, {
        eventModel: t,
        fnOnUpdateSaleDayIndex: n,
        addtionalAdminButtons: r,
        bSupportsSticky: !0,
      }),
    ],
  });
}
var li = new Map();
function ui(e, t) {
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
function di(e, t, n) {
  let r = new Map(),
    i = new Map(),
    a = new Map(),
    o,
    s,
    c = 0,
    { selectedTabBackgroundDef: l, nTabSaleSectionIndex: u } = ui(t, n);
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
            it(n, o)
              ? (u.push(c),
                i.set(c, s.background_id),
                r === 0 && a.set(c, s.background_id))
              : --r;
          }
          let d = e;
          for (; d < t.length && !it(n, t[d]);) d += 1;
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
              it(n, e) && i.set(e.unique_id, s.background_id);
            }
        });
        e < t.length && !it(n, t[e]);
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
function fi(e, t, n, r) {
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
      mi,
      {
        eventModel: e,
        displayDef: i,
        derivedGroupInfo: t.derivedGroupInfo,
        children:
          i && i.randomize_section_order && n !== D.EPreviewMode_EditBackground
            ? (0, X.jsx)(pi, {
                clanEventGID: e.GID,
                elSaleSections: t.elSaleSections,
              })
            : t.elSaleSections,
      },
      `background_group_` + t.groupID,
    )
  );
}
function pi(e) {
  let { clanEventGID: t, elSaleSections: n } = e,
    [r, i] = E(`sale_section_seed_${t}`, ln());
  if (!n || n.length === 0) return null;
  if (n.length > 1 && r !== void 0) {
    let e = Lt(r);
    return (0, X.jsx)(X.Fragment, { children: nn(n, 0, e) });
  }
  return (0, X.jsx)(X.Fragment, { children: n });
}
function mi(e) {
  let { displayDef: t, children: n, eventModel: r, derivedGroupInfo: i } = e,
    a = He(),
    o = J.useCallback(
      (e, t) => {
        li.set(i.nBackgroundGroupID, t);
      },
      [i],
    ),
    s = Nt(o);
  if (!n || (Array.isArray(n) && n.length == 0)) return null;
  if (!t) return (0, X.jsx)(X.Fragment, { children: n });
  let c;
  if (t.localized_background_art) {
    let e = W(a),
      n =
        e in t.localized_background_art
          ? e
          : en.GetLanguageFallback(z.LANGUAGE),
      i = t.localized_background_art[n];
    i && (c = w.GenerateURLFromHashAndExt(r.clanSteamID, i));
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
function hi(e) {
  return typeof e == `string` || typeof e == `number` ? e : JSON.stringify(e);
}
var gi = class {
    Keyify = (e) => hi(e);
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
  _i = `H8RsG3p9zyI-`,
  vi = `-ayc8iJmBgg-`,
  yi = `_6D2hAhDIwmY-`,
  bi = `ZP-iX4isxNw-`,
  xi = `AzJ42SXvU7g-`,
  Si = `DKOEqISmqI8-`,
  Ci = `TMYfiVXl17Q-`,
  wi = `j5T-MrFgQ20-`,
  Ti = class e {
    m_curLocImageGroup = null;
    m_curLocImageGroupType = null;
    constructor() {
      c(this);
    }
    static async BDoesClanImageFileExistsOnCDNOrOrigin(e, t, n, r) {
      let i =
          z.COMMUNITY_BASE_URL +
          `gid/` +
          t.ConvertTo64BitString() +
          `/hasclanimagefile`,
        a = { image_hash_and_ext: n, lang: `` + r };
      return (
        (await Fr.default.get(i, { params: a, cancelToken: e && e.token })).data
          .success == 1
      );
    }
    SetPrimaryImageForImageGroup(e, t) {
      (this.m_curLocImageGroup &&
        this.m_curLocImageGroup.primaryImage.imageid == e.imageid &&
        t == this.m_curLocImageGroupType) ||
        ((this.m_curLocImageGroup = { primaryImage: e, localized_images: [] }),
        (this.m_curLocImageGroupType = t),
        (this.m_curLocImageGroup.localized_images = tn(
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
          : w.GenerateURLFromHashAndExt(e, w.GetHashAndExt(n) ?? ``);
      }
      return null;
    }
    async DetermineAvailableLocalizationForGroup(t) {
      if (!this.m_curLocImageGroup) return;
      let n = this.m_curLocImageGroup.primaryImage,
        r = F.InitFromClanID(n.clanAccountID, z.EUNIVERSE),
        i = w.GetHashAndExt(n) ?? ``,
        a = [];
      for (let n = 0; n < 32; ++n)
        a.push(e.BDoesClanImageFileExistsOnCDNOrOrigin(t, r, i, n));
      let o = await Promise.all(a);
      s(() => {
        for (let e = 0; e < 32; ++e)
          o[e] &&
            (this.m_curLocImageGroup.localized_images[e] =
              w.GenerateURLFromHashAndExtAndLang(
                r,
                i,
                T.full,
                e,
                this.m_curLocImageGroupType ?? void 0,
              ));
      });
    }
    SetLocalizedImageGroupAtLang(e, t, n) {
      this.m_curLocImageGroup &&
        (this.m_curLocImageGroup.localized_images[e] = n
          ? w.GenerateURLFromHashAndExtAndLang(
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
        let e = F.InitFromClanID(n.clanAccountID, z.EUNIVERSE),
          r = w.GetHashAndExt(n);
        r &&
          (this.m_curLocImageGroup.localized_images[t] =
            w.GenerateURLFromHashAndExtAndLang(
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
        .map((e) => w.GetHashAndExtFromURL(e));
    }
  };
Gt([t], Ti.prototype, `m_curLocImageGroup`, void 0);
var Q = new Ti();
function Ei(e, t) {
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
    Pr.createPortal(
      (0, X.jsx)(`form`, {
        onSubmit: Oi,
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
function Di(e) {
  let [t, n] = J.useState(!1);
  return [
    {
      onDragEnter: J.useCallback((e) => {
        ((e.dataTransfer.files && e.dataTransfer.files[0]) ||
          (e.dataTransfer.types && e.dataTransfer.types[0] == `Files`)) &&
          n(!0);
      }, []),
      onDragLeave: J.useCallback((e) => {
        Kt(e) && n(!1);
      }, []),
      onDragEnd: J.useCallback(() => n(!1), []),
      onDragOver: t ? Oi : void 0,
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
function Oi(e) {
  e.preventDefault();
}
var ki = `wxWVRBKbQ6Y-`,
  Ai = `_1hQVgn9Glyw-`,
  ji = `OQ-ETv0yIhg-`,
  Mi = `wVGLukava5E-`;
function Ni(e) {
  let {
      onDropFiles: t,
      renderDesciption: n,
      elAdditonalButtons: r,
      elOverrideDragAndDropText: i,
    } = e,
    [a, o] = Di(t),
    [s, c] = Ei(t, {
      accept: `image/png, image/jpeg, image/gif, image/webp`,
      multiple: !0,
    });
  return (0, X.jsxs)(`div`, {
    ...a,
    className: K(o ? Ai : ki, `DragAndDropContainer`),
    children: [
      n?.(),
      (0, X.jsx)(`div`, { children: i || N(`#ImagePicker_DragAndDrop`) }),
      (0, X.jsxs)(`div`, {
        className: ji,
        children: [
          s,
          (0, X.jsxs)(`label`, {
            onClick: c,
            children: [
              (0, X.jsxs)(`span`, {
                children: [N(`#ImagePicker_OrBrowse`), ` `],
              }),
              (0, X.jsx)(`span`, {
                className: Mi,
                children: N(`#selectimage_select_file`),
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
var Pi = `_5RINCHFuy0Y-`,
  Fi = `GWe0Hc-fT2A-`,
  Ii = `Wmeqy6nXS1Y-`,
  Li = `_698Kbr-wNSM-`,
  Ri = `_4l0OY5qTFkk-`,
  zi = `_4StKqHsfdjg-`,
  Bi = `dp7SyRphVOo-`,
  Vi = `OoUlU8pBBN4-`;
function Hi(e) {
  let {
      imageUploader: t,
      fnUploadComplete: n,
      elOverrideDragAndDropText: r,
      forceResolution: i,
      elAdditonalButtons: a,
      rgRealmList: o,
    } = e,
    [s, c] = f(() => [t.GetUploadImages(), Ue.Get().GetCurEditLanguage()]),
    l = J.useCallback(
      async (e) => {
        let n = Array.from(e),
          r = !0;
        for (let e = 0; e < n.length; e++) {
          let i = n[e],
            { language: a } = wt(i?.name, c);
          try {
            let n = bt(a, c, o);
            ((r = await t.AddImageForLanguage(i, n)),
              r ||
                (console.error(
                  `ImageUploaderPanel.OnDropFiles: failed on i=` +
                    e +
                    ` file=` +
                    i.name,
                ),
                M(
                  (0, X.jsx)(Ft, {
                    strDescription: N(`#ImagePicker_Error`, i.name),
                  }),
                  window,
                )));
          } catch (e) {
            let t = zt(e);
            (console.error(
              `ImageUploaderPanel.OnDropFiles: ` + t.strErrorMsg,
              t,
            ),
              M(
                (0, X.jsx)(Ft, {
                  strDescription: N(`#EventError_Code`, t.strErrorMsg ?? ``),
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
    f(() => s.map((e) => ({ a: e.GetCurrentImageOption(), b: e.language }))),
    (0, X.jsxs)(Ni, {
      onDropFiles: l,
      elAdditonalButtons: u,
      elOverrideDragAndDropText: r,
      children: [
        (0, X.jsx)(J.Fragment, {
          children: (0, X.jsx)(`div`, {
            className: Fi,
            children: s.map((e) =>
              (0, X.jsx)(
                Wi,
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
        (0, X.jsx)(Ui, {
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
function Ui(e) {
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
    className: Ii,
    children: [
      !!r.length &&
        (0, X.jsx)(R, {
          style: { margin: `8px` },
          onClick: n,
          disabled: !i,
          children: N(`#ImageUpload_Upload`),
        }),
      !!r.length &&
        (0, X.jsx)(R, {
          style: { margin: `8px` },
          onClick: t.ClearImages,
          disabled: a,
          children: N(`#ImageUpload_Clear`),
        }),
    ],
  });
}
var Wi = l(Gi);
function Gi(e) {
  let t = (t) => {
      if (t instanceof gt) {
        t.ResetImage();
        let n = window,
          r = (0, X.jsx)(xt, {
            ownerWin: n,
            uploadFile: t,
            forceResolution: e.forceResolution,
            fileType: e.forceFileType || 3,
          });
        Jt(r, n, `CropModal`, { strTitle: N(`#ImageUpload_CropModalTitle`) });
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
          ((t += ` ${N(`#ImageUpload_Deprecated`)}`),
          (r = N(`#ImageUpload_Deprecated_ttip`))));
      let i;
      return (
        (n.BIsOriginalMinimumDimensions(e) && n.FileTypeMatchesImageTypes(e)) ||
          (i = Pi),
        { label: t, data: e, strOptionClass: i, tooltip: r }
      );
    }).filter((e) => !e.data.bHiddenFromDropdown),
    o = {
      pending: N(`#ImageUpload_Pending`),
      waiting: N(`#ImageUpload_Waiting`),
      uploading: N(`#ImageUpload_Uploading`),
      processing: N(`#ImageUpload_Processing`),
      success: N(`#ImageUpload_SuccessCard`),
      failed: N(`#ImageUpload_Failed`),
    },
    s = n.BSupportsLanguages()
      ? Ji(en.GetLanguageListForRealms(i ?? [Yt.k_ESteamRealmGlobal]))
      : null,
    c = n.IsValidAssetType(e.forceResolution, e.forceFileType),
    l = n.status == `pending`,
    u = o[n.status];
  n.status == `pending` &&
    (c.needsCrop
      ? (u = N(`#ImageUpload_NeedsCrop`))
      : c.error && (u = N(`#ImageUpload_Invalid`)));
  let d,
    f = n.GetCurrentImageOption();
  return (
    f && (d = a?.find((e) => e.data.sKey == f.sKey)?.data),
    (d ||= a?.[0]?.data),
    (0, X.jsxs)(`div`, {
      className: zi,
      children: [
        (0, X.jsx)(`div`, {
          className: Li,
          onClick: () => r(n),
          children: (0, X.jsx)(gn, {}),
        }),
        (0, X.jsx)(Ki, { asset: n }),
        s &&
          (0, X.jsx)(L, {
            strDropDownClassName: `ZsXFGEgobIY-`,
            rgOptions: s,
            selectedOption: n.language,
            onChange: (e) => (n.language = e.data),
            disabled: !l,
          }),
        a &&
          a?.length > 1 &&
          (0, X.jsx)(L, {
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
          className: K({ [et]: !0, [Ri]: n.status == `failed` }),
          children: [
            u,
            Tt(n.status) &&
              (0, X.jsx)(`div`, {
                className: `RPxGbDpMPvc-`,
                children: (0, X.jsx)(O, { size: `small` }),
              }),
          ],
        }),
        (0, X.jsx)(`div`, { className: Ri, children: n.message }),
        l &&
          c.error &&
          (0, X.jsx)(`div`, { className: `_4l0OY5qTFkk-`, children: c.error }),
        l &&
          c.needsCrop &&
          (0, X.jsx)(un, {
            onClick: () => t(n),
            children: N(`#ImageUpload_OpenEditor`),
          }),
      ],
    })
  );
}
function Ki(e) {
  let { asset: t } = e;
  return t.BIsVideo()
    ? (0, X.jsxs)(`div`, {
        className: Bi,
        onClick: (e) => M((0, X.jsx)(qi, { asset: t }), Vt(e)),
        children: [
          (0, X.jsxs)(`span`, {
            className: Vi,
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
        className: Bi,
        style: { backgroundImage: `url(${t.dataUrl})` },
        children: (0, X.jsxs)(`span`, {
          className: Vi,
          children: [t.width, ` x `, t.height],
        }),
      });
}
function qi(e) {
  let { asset: t, closeModal: n } = e;
  return (0, X.jsx)(U, {
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
function Ji(e) {
  let t = [],
    n = [];
  for (let t of e) {
    if (t == 25) continue;
    let e = N(`#Language_` + W(t));
    n.push({ label: e, data: t });
  }
  return (
    n.sort((e, t) => e.label.localeCompare(t.label)),
    n.forEach((e) => t.push({ label: e.label, data: e.data })),
    n
  );
}
var Yi = (function (e) {
    return (
      (e[(e.k_eInsertThumbnail = 1)] = `k_eInsertThumbnail`),
      (e[(e.k_eInsertFullImage = 2)] = `k_eInsertFullImage`),
      (e[(e.k_eShowImageGroup = 3)] = `k_eShowImageGroup`),
      (e[(e.k_eInsertVideo = 4)] = `k_eInsertVideo`),
      e
    );
  })({}),
  Xi = `MBOGLVBsJno-`,
  Zi = `W-3Dq3-54Lg-`,
  Qi = `quLSuE3pc1o-`,
  $i = `lnTEZ3RD-vc-`,
  ea = `kpa9FPV-AL0-`,
  ta = `n8uggtUd8lI-`,
  na = `PNoxLvZvnxs-`,
  ra = `iGpmTErZND8-`,
  ia = `hAZUPjOGGxE-`,
  aa = `crDJadcMi8A-`,
  oa = `AmP7BU2J8Pw-`;
function sa(e) {
  let { fnSetImageSearch: t } = e,
    n = (0, J.useRef)(null);
  return (0, X.jsx)(`div`, {
    className: oa,
    children: (0, X.jsx)(`input`, {
      ref: n,
      className: aa,
      type: `text`,
      placeholder: N(`#ImagePicker_Search`),
      onChange: (e) => t(e.currentTarget.value),
      onKeyDown: (e) => {
        e.key == `Escape` && (t(``), n.current && (n.current.value = ``));
      },
    }),
  });
}
var ca = J.memo(function (e) {
  let {
    fileNameSearch: t,
    clanAccountID: n,
    imageInsertCallBack: r,
    fnOnExpandImage: i,
    showImageActions: a = !0,
    InternalOpenLocalizeImageGroup: o,
  } = e;
  return (0, X.jsx)(la, {
    clanAccountID: n,
    fileNameSearch: t,
    children: (e, t) =>
      e.map((e) =>
        (0, X.jsx)(
          ua,
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
function la(e) {
  let { clanAccountID: t, fileNameSearch: n, children: r } = e,
    i = St(t),
    a = n.trim().toLowerCase() || ``,
    o = k.GetFilteredClanImagesList(i, a);
  if (o.length == 0) {
    let e = F.InitFromClanID(t, z.EUNIVERSE),
      n = k.GetLoadState(e);
    return n && n.loaded
      ? (0, X.jsx)(
          `div`,
          {
            className: ea,
            children:
              a.length > 0
                ? N(`#ImagePicker_EmptySearch`)
                : N(`#ImagePicker_Empty`),
          },
          `ImagePicker_Result`,
        )
      : n && n.errMsg
        ? (0, X.jsx)(
            `div`,
            { className: ta, children: N(`#ImagePicker_Error`, n.errMsg) },
            `ImagePicker_Result`,
          )
        : (0, X.jsx)(
            `div`,
            { className: ea, children: N(`#Loading`) },
            `ImagePicker_Result`,
          );
  }
  return r(o, a);
}
function ua(e) {
  let {
      clanImage: t,
      searchStringHilight: n,
      imageInsertCallBack: r,
      OnImageClick: i,
      showImageActions: a,
      fnOnOpenLocalizedImageGroup: o,
    } = e,
    [s, c] = J.useState(!1),
    l = () => r(t, Yi.k_eInsertFullImage),
    u = () => r(t, Yi.k_eInsertVideo),
    d = () => r(t, Yi.k_eInsertThumbnail),
    f = (e) => {
      t.url &&
        (e.dataTransfer.setData(`text`, t.url),
        k.GetClanImageDragListener().forEach((e) => {
          e(F.InitFromClanID(t.clanAccountID, z.EUNIVERSE), !0);
        }));
    },
    p = (e) => {
      t.url &&
        k.GetClanImageDragListener().forEach((e) => {
          e(F.InitFromClanID(t.clanAccountID, z.EUNIVERSE), !1);
        });
    },
    m = (e) => {
      M(
        (0, X.jsx)(U, {
          strTitle: N(`#ImagePicker_DeleteImageTitle`),
          strDescription: ``,
          onOK: g,
          onCancel: _,
          closeModal: _,
          children: (0, X.jsxs)(J.Fragment, {
            children: [
              (0, X.jsx)(`div`, {
                children: N(`#ImagePicker_DeleteAreYouSure`, t.file_name ?? ``),
              }),
              (0, X.jsx)(`br`, {}),
              (0, X.jsx)(`br`, {}),
              (0, X.jsx)(`div`, { children: N(`#ImagePicker_DeleteWarning`) }),
            ],
          }),
        }),
        Vt(e) ?? window,
      );
    },
    h = (e) => {
      (console.log(`ClanImageWrapper on delete error: ` + e),
        M(
          (0, X.jsx)(Ft, {
            strTitle: N(`#Error_FailureNotice`),
            strDescription: N(`#EventDisplay_DeleteEvent_Error`),
            children: (0, X.jsx)(`p`, { children: e }),
          }),
          window,
        ));
    },
    g = () => {
      c(!0);
      let e = F.InitFromClanID(t.clanAccountID, z.EUNIVERSE);
      k.DeleteClanImage(e, t)
        .then((e) => {
          (e.success != 1 && h(zt(e).strErrorMsg), c(!1));
        })
        .catch((e) => {
          (h(zt(e).strErrorMsg), c(!1));
        });
    },
    _ = () => {},
    v = () => {
      i && i(t);
    },
    y = t.file_name ? t.file_name : ``,
    b = We(n, y, String(t.imageid), na),
    x = w.BIsClanImageVideo(t),
    S = a && !s && !x,
    ee = a && !s && !x,
    C = a && !s && x,
    T = a && !s && !x;
  return (0, X.jsx)(ft, {
    placeholderHeight: `100vh`,
    className: Xi,
    rootMargin: `0px 0px 100% 0px`,
    children: (0, X.jsxs)(`div`, {
      className: ra,
      children: [
        (0, X.jsx)(`div`, {
          className: Zi,
          style: { backgroundImage: x ? `` : `url( '${t.thumb_url}' )` },
          draggable: !0,
          onDragStart: f,
          onDragEnd: p,
          onDoubleClick: l,
          onClick: v,
          children: (0, X.jsx)(fa, { clanImage: t, className: Qi }),
        }),
        S &&
          (0, X.jsx)(`span`, {
            className: `escPuFxqCbM-`,
            onClick: l,
            children: N(`#ImagePicker_FullSize`),
          }),
        s && (0, X.jsx)(O, { size: `medium`, className: `_9dVXPw6twXc-` }),
        ee &&
          (0, X.jsx)(`span`, {
            className: `_9em3bZdejR0-`,
            onClick: d,
            children: N(`#ImagePicker_Thumbnail`),
          }),
        T &&
          o &&
          (0, X.jsx)(da, {
            bDeleting: s,
            clanImage: t,
            fnOnOpenLocalizedImageGroup: o,
          }),
        C &&
          (0, X.jsx)(`span`, {
            className: `escPuFxqCbM-`,
            onClick: u,
            children: N(`#ImagePicker_Video`),
          }),
        !s &&
          (0, X.jsx)(`span`, {
            className: `LzW73RDKl40-`,
            onClick: m,
            children: (0, X.jsx)(`img`, {}),
          }),
        (0, X.jsx)(`div`, { className: $i, title: y, children: b }),
      ],
    }),
  });
}
function da(e) {
  let { clanImage: t, fnOnOpenLocalizedImageGroup: n, bDeleting: r } = e,
    { data: i } = Ie(t.clanAccountID);
  return r || !i?.valve_admin
    ? null
    : (0, X.jsx)(`span`, {
        className: K(ia, qe),
        onClick: () => n?.(t),
        children: `(VO) ` + N(`#ImagePicker_Localized`),
      });
}
function fa(e) {
  let { clanImage: t, className: n } = e;
  return w.BIsClanImageVideo(t)
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
function pa(e) {
  let { clanSteamID: t, closeModal: n, OnClanImageSelected: r } = e,
    i = J.useCallback(
      (e, t) => {
        (r?.(e, t), n?.());
      },
      [r, n],
    ),
    [a, o] = J.useState(``);
  return (0, X.jsxs)(U, {
    strTitle: N(`#ImagePicker_Images`),
    strDescription: N(`#ImagePicker_DoubleClickToSelect`),
    bAlertDialog: !0,
    onOK: n,
    onCancel: n,
    children: [
      (0, X.jsx)(sa, { fnSetImageSearch: o }),
      (0, X.jsx)(ca, {
        clanAccountID: t.GetAccountID(),
        fileNameSearch: a,
        imageInsertCallBack: i,
        showImageActions: !1,
      }),
    ],
  });
}
function ma(e) {
  let { clanSteamID: t, OnClanImageSelected: n } = e;
  return (0, X.jsxs)(`div`, {
    className: ji,
    children: [
      (0, X.jsxs)(`label`, {
        htmlFor: `clanimagedialog`,
        children: [
          (0, X.jsxs)(`span`, {
            children: [N(`#ImagePicker_PreviousImages`), ` `],
          }),
          (0, X.jsx)(`span`, {
            className: Mi,
            children: N(`#ImagePicker_PreviousImages2`),
          }),
        ],
      }),
      (0, X.jsx)(`input`, {
        style: { display: `none` },
        id: `clanimagedialog`,
        type: `button`,
        onClick: (e) => {
          M(
            (0, X.jsx)(pa, { clanSteamID: t, OnClanImageSelected: n }),
            Vt(e) ?? window,
          );
        },
      }),
    ],
  });
}
function ha(e) {
  let {
      clanSteamID: t,
      rgSupportArtwork: n,
      localizedPrimaryImage: r,
      bAllowPreviousClanImageSelection: i,
      fnSetImageURL: a,
      rgRealmList: o,
    } = e,
    [s] = f(() => [Ue.Get().GetCurEditLanguage()]),
    c = Ct(t, n, r),
    l = e.uploaderOverride || c,
    [u, d] = J.useState(!1),
    p = J.useCallback(
      async (e, t) => {
        if (!u) {
          d(!0);
          try {
            let { language: t } = wt(e.file_name ?? ``, s),
              n = bt(t, s, o);
            await l.AddExistingClanImage(e, n);
          } catch (e) {
            let t = zt(e);
            (console.error(`AddExistingClanImage: ` + t.strErrorMsg, t),
              M(
                (0, X.jsx)(Ft, {
                  strDescription: N(`#EventError_Code`, t.strErrorMsg ?? ``),
                }),
                window,
              ));
          }
          d(!1);
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
                  ma,
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
          let t = bt(e.language, s, o);
          Q.AddLocalizeImageUploaded(e.origimagehash, t);
        } else {
          let r = k.GetClanImageByImageHash(t, e?.image_hash ?? ``),
            i = n.image.GetCurrentImageOption();
          if (r && i) {
            let e = bt(n.image.language, s, o);
            a(i.artworkType, r, e);
          }
        }
      }
    };
  return (0, X.jsx)(Hi, {
    ...e,
    imageUploader: l,
    rgRealmList: o,
    elAdditonalButtons: u
      ? [
          (0, X.jsx)(
            O,
            { position: `center`, size: `medium`, string: N(`#Loading`) },
            `throbbing`,
          ),
        ]
      : m,
    fnUploadComplete: h,
  });
}
var ga = `x0kXRDaNEsY-`,
  _a = `tggLx72V-Ck-`,
  va = `DVwf02s2GtI-`,
  ya = `zREkqfL42-U-`,
  ba = `_7zBg1-UuADM-`,
  xa = `TMQhyilc41c-`,
  Sa = `t2inDYSKOto-`,
  Ca = `-FHzhwwvQvA-`,
  wa = `ZUy8iSsvilc-`,
  Ta = `XRZj1OeBHRk-`,
  Ea = `_2lViMA09hm4-`,
  Da = `BTC1IyUleCA-`,
  Oa = `lEWE2I7Rsj8-`,
  ka = `_12sYjoMc9wE-`,
  Aa = `_8hs8sf5-YPQ-`,
  ja = `Hy2GxVyZVDA-`;
function Ma(e) {
  let {
      clanImage: t,
      closeModal: n,
      lang: r,
      fnOnArtworkLangChange: i,
      realms: a,
      fnLangHasData: o,
    } = e,
    [s, c] = (0, J.useState)(r),
    l = F.InitFromClanID(t.clanAccountID, z.EUNIVERSE),
    u = f(() => w.GenerateURLFromHashAndExt(l, w.GetHashAndExt(t) ?? ``));
  return (0, X.jsx)(U, {
    strTitle: N(`#selectimage_change_artwork_lang_title`),
    strDescription: N(`#selectimage_change_artworl_lang_desc`),
    onOK: () => i?.(t, r, s),
    onCancel: n,
    closeModal: n,
    children: (0, X.jsxs)(`div`, {
      className: K(et, _a),
      children: [
        (0, X.jsx)(`div`, {
          className: va,
          children: (0, X.jsx)(`img`, { className: ga, src: u }),
        }),
        (0, X.jsx)(Ge, {
          selectedLang: s,
          fnLangHasData: o,
          fnOnLanguageChanged: c,
          realms: a,
        }),
      ],
    }),
  });
}
function Na(e) {
  if (!e) return e;
  let t = e.lastIndexOf(`.`);
  return t === -1 ? e : e.substring(0, t);
}
var Pa = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAFo9M/3AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzcyREYxMUExREVBMTFFOUJFQTREQjZGQTJEQ0UzOTMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzcyREYxMUIxREVBMTFFOUJFQTREQjZGQTJEQ0UzOTMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NzJERjExODFERUExMUU5QkVBNERCNkZBMkRDRTM5MyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NzJERjExOTFERUExMUU5QkVBNERCNkZBMkRDRTM5MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pmk/vzIAAAFiSURBVHjaYnz79i0DCDAB8X8gVgUIIEaoSBmIIQRkvAMIIBADJMUIxBVArI0sAAYAAQTTAwNlTEgcXZDpLFDOHCC+A8Sd6FoEAAIIJBAOZKxAEoTZmAPEKSxQSZitFVCz10D5O1iQdE4AYgsouwOKBUBWvAEyRKF+RQa+QLwFIIDQHYUM/gAxC8hfb6C6QTgLKvkaiGtAikBuUAHiD0g6QZJzob5gYUEz9jXUPU+AWAYWETDwG+o9mGQGLLAFoFbcBGJFIGaDagDHCrIV6ti8ArLCFoc3wf4HCDB84YANVEC9HwPEU4B4EiycQKEqgAUjx+F3INYHYkOoZh6YC0CeEUQLS2Qbi4HYCYgvQ8P8AhC3QOMaJRjRNf4C4m3QcP8ODd4QqM0dyIGEDgKgCtmgUf8dypeBamSERoEALi8sAuUnID4AxIegbHQA18OCRTKOlGgBeSECmuH+E4nfQPWAXQwAHbJ3VkYR2TIAAAAASUVORK5CYII=`;
function Fa(e) {
  let {
    clanSteamID: t,
    fnGetImageHash: n,
    fnLangHasData: r,
    fnOnRemoveImage: i,
  } = e;
  yt(t.GetAccountID());
  let a = J.useMemo(() => {
      let e = [],
        t = en.GetLanguageListForRealms([
          Yt.k_ESteamRealmGlobal,
          Yt.k_ESteamRealmChina,
        ]);
      for (let r of t) {
        let t = n(r);
        if (t) {
          let n = W(r),
            i = N(`#Language_` + n);
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
    [o, s, c] = A();
  return (0, X.jsxs)(`div`, {
    className: Da,
    children: [
      (0, X.jsx)(`div`, {
        className: Oa,
        children: N(`#selectimage_uploaded_languages`),
      }),
      (0, X.jsx)(`div`, {
        className: wa,
        children: a.map((n) =>
          (0, X.jsx)(
            Ia,
            { langData: n, ...e },
            `lang_select_` + t.GetAccountID() + ` ` + n.strLang,
          ),
        ),
      }),
      !!i &&
        (0, X.jsxs)(R, {
          className: `_1k0t2Q-C2OU-`,
          onClick: s,
          children: [
            N(`#Sale_RemoveAll`),
            (0, X.jsx)(_n, { tooltip: N(`#Sale_RemoveAll_Tooltip`) }),
          ],
        }),
      (0, X.jsx)(V, {
        active: o,
        children: (0, X.jsx)(U, {
          strTitle: N(`#Dialog_AreYouSure`),
          strDescription: N(`#ImageUpload_DeleteAll_Confirm`),
          closeModal: c,
          onOK: () => {
            for (let e = 0; e < 32; e++) r && i && r(e) && i(e);
          },
        }),
      }),
    ],
  });
}
function Ia(e) {
  let {
      clanSteamID: t,
      langData: n,
      langOverride: r,
      fnOnLanguagePreviewChange: i,
      fnOnArtworkLangChange: a,
      fnOnRemoveImage: o,
    } = e,
    [s, c] = f(() => {
      let e = k.GetClanImageByImageHash(t, n.imgHash),
        i = ``;
      e &&
        (i = w.GenerateURLFromHashAndExtAndLang(
          t,
          w.GetHashAndExt(e),
          T.full,
          n.lang,
        ));
      let a = ba;
      return (r != n.lang && (a = n.imgHash ? ya : xa), [i, a]);
    });
  return (0, X.jsxs)(`div`, {
    id: n.strLang,
    className: Sa,
    onClick: (e) => {
      let t = q(e.currentTarget.id);
      i(t);
    },
    children: [
      (0, X.jsx)(`div`, { className: c, children: n.locLang }),
      (0, X.jsxs)(`span`, {
        className: Ca,
        children: [
          !!s &&
            (0, X.jsx)(`a`, {
              href: s,
              target: `_blank`,
              children: (0, X.jsx)(Qt, {
                toolTipContent: N(`#selectimage_viewimage_ttip`),
                children: an(),
              }),
            }),
          !!a && (0, X.jsx)(La, { ...e }),
          !!o && (0, X.jsx)(Ra, { fnOnRemoveImage: o, langData: n }),
        ],
      }),
    ],
  });
}
function La(e) {
  let {
      clanSteamID: t,
      langData: n,
      fnOnArtworkLangChange: r,
      fnGetImageHash: i,
      fnLangHasData: a,
      realms: o,
    } = e,
    [s, c, l] = A(),
    u = f(() => {
      let e = i(n.lang);
      return (
        P(
          !e || !e.includes(`.`),
          `ChangeLanguageButton: Unexpected File Extension: ` + e,
        ),
        k.GetClanImageByImageHash(t, e)
      );
    });
  if (!u) console.error(`image does not exists on server`);
  else
    return (0, X.jsxs)(X.Fragment, {
      children: [
        (0, X.jsx)(Qt, {
          toolTipContent: N(`#selectimage_reassign_image_ttip`),
          children: (0, X.jsx)(`img`, {
            "data-lang": n.lang,
            src: Pa,
            onClick: () => c(),
          }),
        }),
        (0, X.jsx)(I, {
          children: (0, X.jsx)(V, {
            active: s,
            children: (0, X.jsx)(Ma, {
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
function Ra(e) {
  let { fnOnRemoveImage: t, langData: n } = e,
    [r, i, a] = A();
  return (0, X.jsxs)(X.Fragment, {
    children: [
      (0, X.jsx)(Qt, {
        toolTipContent: N(`#selectimage_delete_image_ttip`),
        children: (0, X.jsx)(`img`, {
          "data-lang": n.lang,
          src: Sn,
          onClick: i,
        }),
      }),
      (0, X.jsx)(I, {
        children: (0, X.jsx)(V, {
          active: r,
          children: (0, X.jsx)(U, {
            strTitle: N(`#selectimage_remove_image`),
            strDescription: N(
              `#selectimage_remove_details`,
              N(`#Language_` + W(n.lang)),
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
var za = `dGiOZKKuxfQ-`,
  Ba = `h7-04bl97uc-`,
  Va = `MhIotXf5RFA-`,
  Ha = `mSMnUkR7SZM-`,
  Ua = `aWAciZoU3Zo-`,
  Wa = `_8AV36Rh-Ve4-`,
  Ga = `lxYifi3D8mU-`,
  Ka = `MwNTpeRZ8FM-`,
  qa = `RdR4GEnIG5Q-`,
  Ja = `epGy6XXAGPQ-`;
function Ya(e) {
  let {
      event: t,
      spotlightURLOverride: n,
      fnHandleOpenEvent: r,
      fnImageFailureCallback: i,
      fnFilterImageURLsForKnownFailures: a,
      langOverride: o,
    } = e,
    s = ze(),
    c = J.useCallback(
      (e) => {
        (e.preventDefault(), r && r(t));
      },
      [t, r],
    ),
    l = o || q(z.LANGUAGE),
    [u, d, p] = f(() => [
      t.GetSummaryWithFallback(l),
      t.GetNameWithFallback(l),
      t.BShowLibrarySpotlightText(),
    ]),
    m = `spotlight`,
    h = T.spotlight_main;
  (t.appid == 2434320 || z.EUNIVERSE == 2) &&
    ((m = s
      ? `localized_store_app_spotlight_mobile`
      : `localized_store_app_spotlight`),
    (h = T.full));
  let g = ut(n === void 0 ? t : void 0, m, l, h) ?? (n === void 0 ? [] : [n]);
  a && g && (g = a(g));
  let _ = u.replace(/https:\/\/[^ ]*/gi, ``).trimLeft();
  return (0, X.jsx)(J.Fragment, {
    children: (0, X.jsx)(`div`, {
      className: qa,
      ref: e.containerRef,
      children: (0, X.jsxs)(cn, {
        className: K(Ja, za),
        onActivate: c,
        focusable: !0,
        children: [
          (0, X.jsx)(`div`, {
            className: Ga,
            children: (0, X.jsx)(Ae, {
              className: Ka,
              rgSources: g,
              onIncrementalError: (e, t, n) => i && i(t),
            }),
          }),
          (0, X.jsxs)(`div`, {
            className: Ba,
            children: [
              (0, X.jsx)(Ae, {
                className: Va,
                rgSources: g,
                onIncrementalError: (e, t, n) => i && i(t),
              }),
              (0, X.jsx)(`div`, { className: Wa }),
              (0, X.jsx)(`div`, {
                className: Ua,
                children:
                  p &&
                  (0, X.jsxs)(`div`, {
                    className: `Kirdf-ZVux8-`,
                    children: [
                      (0, X.jsx)(Ae, {
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
          (0, X.jsx)(`div`, { className: Ha }),
        ],
      }),
    }),
  });
}
var Xa = `JMbtQkd0K8E-`,
  Za = `snS7KDov-nE-`,
  Qa = `nvWdGclp6FI-`,
  $a = `xK18jc4N1cw-`,
  eo = `IQEedJq4bc8-`,
  to = `fCimlPrmscM-`,
  no = `e6k9OpDXG-Q-`,
  ro = `seprbrMSMhI-`,
  io = `_4CNssq7QFLI-`,
  ao = `yzbYtn5vgZU-`,
  oo = `idlQxtNGVBg-`,
  so = `mELVvJo8G3c-`,
  co = `fF5tI3UN-YY-`;
function lo(e) {
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
    m = p ? w.GenerateURLFromHashAndExtAndLang(i, p, T.full, t) : ``,
    [h] = f(() => [yo(n, d)]);
  return h == 0
    ? (0, X.jsxs)(`div`, {
        className: va,
        children: [
          n === `capsule` &&
            (0, X.jsx)(po, {
              imgURL: z.IMG_URL + `events/defaults/default_img_cover.jpg`,
              eventModel: a,
            }),
          n === `background` &&
            (0, X.jsx)(mo, {
              imgURL: z.IMG_URL + `events/defaults/default_img_header.jpg`,
              lang: t,
              eventModel: a,
              partnerEventStore: o,
            }),
          !![
            `spotlight`,
            `localized_store_app_spotlight`,
            `localized_store_app_spotlight_mobile`,
          ].includes(n) &&
            (0, X.jsx)(uo, { langOverride: t, artworkType: n, eventModel: a }),
          (0, X.jsx)(`div`, { children: N(`#EventEditor_ArtworkMissing`) }),
        ],
      })
    : (0, X.jsxs)(`div`, {
        className: va,
        children: [
          n === `capsule` &&
            (0, X.jsx)(po, { imgURL: m, eventModel: a, langOverride: t }),
          n === `background` &&
            (0, X.jsx)(mo, {
              imgURL: m,
              lang: t,
              eventModel: a,
              partnerEventStore: o,
            }),
          n === `spotlight` && (0, X.jsx)(ho, { imgURL: m, event: a, lang: t }),
          n === `localized_store_app_spotlight` &&
            (0, X.jsx)(ho, { imgURL: m, event: a, lang: t }),
          n === `localized_store_app_spotlight_mobile` &&
            (0, X.jsx)(ho, { imgURL: m, event: a, lang: t }),
          (n === `broadcast_left` || n === `broadcast_right`) &&
            (0, X.jsx)(go, {
              imgURL: m,
              side: n === `broadcast_right` ? `right` : `left`,
            }),
          n === `sale_header` && (0, X.jsx)(_o, { imgURL: m }),
          n === `sale_overlay` && (0, X.jsx)(vo, { imgURL: m }),
          C.includes(n) &&
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
          (0, X.jsx)(Fa, {
            langOverride: t,
            clanSteamID: i,
            fnOnLanguagePreviewChange: r,
            fnOnRemoveImage: s,
            fnOnArtworkLangChange: c,
            realms: l,
            fnLangHasData: u,
            fnGetImageHash: (e) => Na(d(n, e) ?? ``),
          }),
        ],
      });
}
function uo(e) {
  let { artworkType: t, langOverride: n, eventModel: r } = e,
    i = Et[t],
    a = J.useMemo(
      () => fo(N(`#EventEditor_ArtworkType_` + t), `${i.width} X ${i.height}`),
      [i.height, i.width, t],
    );
  return (0, X.jsx)(ho, { lang: n, imgURL: a, event: r });
}
function fo(e, t) {
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
function po(e) {
  let { imgURL: t, eventModel: n, langOverride: r } = e,
    i = He();
  return (0, X.jsx)(`div`, {
    style: { display: `flex`, width: `304px` },
    children: (0, X.jsx)(ne, {
      event: n,
      imageURLOverride: t,
      langOverride: r ?? i,
    }),
  });
}
function mo(e) {
  let { lang: t, eventModel: n, partnerEventStore: r } = e,
    i = rn(),
    [a, o, s, c, l] = f(() => [
      n.GetNameWithFallback(t),
      n.GetDescriptionWithFallback(t),
      n.GetSubTitleWithLanguageFallback(t),
      n.type,
      n.AnnouncementGID,
    ]),
    u = o
      ? (0, X.jsx)(Le, {
          text: o || ``,
          showErrorInfo: !1,
          event: n,
          languageOverride: Ue.Get().GetCurEditLanguage(),
        })
      : N(`#selectimage_display_event_body`);
  return (0, X.jsxs)(`div`, {
    className: Xa,
    children: [
      (0, X.jsx)(`div`, {
        className: Za,
        children: N(`#selectimage_preview_title_1`),
      }),
      (0, X.jsx)(`div`, {
        className: K(Qa, `DetailPageExample`),
        children: (0, X.jsxs)(`div`, {
          className: $a,
          children: [
            (0, X.jsx)(`div`, {
              className: eo,
              children: (0, X.jsx)(`img`, { src: e.imgURL }),
            }),
            (0, X.jsx)(`div`, {
              className: to,
              children: (0, X.jsxs)(`div`, {
                className: no,
                children: [
                  (0, X.jsx)(`div`, {
                    className: ro,
                    children: a || N(`#selectimage_display_event_title`),
                  }),
                  (0, X.jsx)(`div`, {
                    className: io,
                    children: s || N(`#selectimage_display_event_subtitle`),
                  }),
                  (0, X.jsx)(`div`, { className: ao, children: u }),
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
              children: N(`#selectimage_preview_title_2`),
            }),
            (0, X.jsx)(`div`, {
              className: K(`nvWdGclp6FI-`, `DetailPageExample`),
              children: (0, X.jsx)(`div`, {
                className: `wm--jcPYtBE-`,
                children: (0, X.jsx)(
                  Fe,
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
var ho = (e) => {
    let [t] = Ot(e.event.appid, { include_assets: !0 });
    if (!t) return null;
    let n = t.GetName(),
      r = t.GetAssets()?.GetCommunityIconURL();
    return (0, X.jsx)(`div`, {
      className: oo,
      children: (0, X.jsx)(Ya, {
        event: e.event,
        strDisplayName: n ?? ``,
        gameIconUrl: r,
        spotlightURLOverride: e.imgURL,
        langOverride: e.lang,
      }),
    });
  },
  go = (e) => {
    let t = [
      (0, X.jsx)(`img`, { src: e.imgURL }, `img`),
      (0, X.jsx)(`div`, { className: Aa }, `video`),
    ];
    return (
      e.side === `right` && t.reverse(),
      (0, X.jsx)(`div`, { className: so, children: t })
    );
  },
  _o = (e) =>
    (0, X.jsx)(`div`, {
      className: co,
      children: (0, X.jsx)(`img`, { style: { width: `100%` }, src: e.imgURL }),
    }),
  vo = (e) =>
    (0, X.jsx)(`div`, {
      className: co,
      children: (0, X.jsx)(`img`, { style: { width: `100%` }, src: e.imgURL }),
    }),
  $ = (e) =>
    (0, X.jsx)(`div`, {
      className: co,
      children: (0, X.jsx)(`img`, { style: { width: `100%` }, src: e.imgURL }),
    });
function yo(e, t) {
  let n = 0;
  for (let r = 0; r < 32; ++r) (t(e, r)?.length ?? 0) > 0 && (n += 1);
  return n;
}
var bo = `https://partner.steamgames.com/doc/store/localization#supported_languages`;
function xo(e) {
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
    [d] = Ot(r, { include_assets: !0 }),
    [p, m] = f(() => [o?.GetEventType(), o?.BHasTag(`vo_marketing_message`)]),
    h = p == 36,
    g = null;
  n === 2
    ? (g = (0, X.jsx)(`span`, {
        style: { color: `#C6512B` },
        children: N(`#EventEditor_Required`),
      }))
    : n === 1
      ? (g = (0, X.jsx)(`span`, {
          style: { color: `#D7BC86` },
          children: N(`#EventEditor_Suggested`),
        }))
      : n === 3 &&
        (g = (0, X.jsx)(`span`, {
          style: { color: `#D7BC86` },
          children: N(`#EventEditor_Requested`),
        }));
  let _ = null;
  t === `capsule`
    ? (_ = h
        ? (0, X.jsxs)(X.Fragment, {
            children: [
              (0, X.jsxs)(`p`, {
                children: [
                  (0, X.jsx)(`strong`, {
                    children: N(`#selectimage_tip_design_title`),
                  }),
                  `: `,
                  N(`#selectimage_tip_capsule_creatorhome_1`),
                ],
              }),
              (0, X.jsxs)(`p`, {
                children: [
                  (0, X.jsx)(`strong`, {
                    children: N(`#selectimage_tip_usage_title`),
                  }),
                  `: `,
                  N(`#selectimage_tip_capsule_creatorhome_2`),
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
                      children: N(`#PartnerEvent_MM_ArtworkTip`),
                    }),
                    (0, X.jsx)(`p`, {
                      children: (0, X.jsx)(`a`, {
                        href: `${z.PARTNER_BASE_URL}doc/store/assets/promos#popup_update`,
                        children: N(`#PartnerEvent_MM_LearnMore`),
                      }),
                    }),
                  ],
                }),
              (0, X.jsxs)(`p`, {
                children: [
                  (0, X.jsx)(`strong`, {
                    children: N(`#selectimage_tip_design_title`),
                  }),
                  `: `,
                  N(`#selectimage_tip_capsule_1`),
                ],
              }),
              (0, X.jsxs)(`p`, {
                children: [
                  (0, X.jsx)(`strong`, {
                    children: N(`#selectimage_tip_usage_title`),
                  }),
                  `: `,
                  N(`#selectimage_tip_capsule_2`),
                ],
              }),
            ],
          }))
    : t === `background`
      ? (_ = (0, X.jsx)(X.Fragment, {
          children: (0, X.jsxs)(`p`, {
            children: [
              (0, X.jsx)(`strong`, {
                children: N(`#selectimage_tip_design_title`),
              }),
              `: `,
              N(`#selectimage_tip_background_1`),
            ],
          }),
        }))
      : t === `spotlight` || t === `localized_store_app_spotlight`
        ? (_ = (0, X.jsx)(X.Fragment, {
            children: (0, X.jsxs)(`p`, {
              children: [
                (0, X.jsx)(`strong`, {
                  children: N(`#selectimage_tip_usage_title`),
                }),
                `: `,
                N(`#selectimage_tip_store_spotlight_1`),
              ],
            }),
          }))
        : t === `localized_store_app_spotlight_mobile`
          ? (_ = (0, X.jsx)(X.Fragment, {
              children: (0, X.jsxs)(`p`, {
                children: [
                  (0, X.jsx)(`strong`, {
                    children: N(`#selectimage_tip_usage_title`),
                  }),
                  `: `,
                  N(`#selectimage_tip_store_mobile_spotlight`),
                ],
              }),
            }))
          : t === `broadcast_left` || t === `broadcast_right`
            ? (_ = (0, X.jsx)(X.Fragment, {
                children: (0, X.jsx)(`p`, {
                  children: N(`#selectimage_tip_broadcast_1`),
                }),
              }))
            : t === `sale_header`
              ? (_ = (0, X.jsxs)(X.Fragment, {
                  children: [
                    (0, X.jsx)(`div`, {
                      className: Ze,
                      children: N(`#selectimage_tip_required_title`),
                    }),
                    (0, X.jsxs)(`p`, {
                      children: [
                        (0, X.jsx)(`b`, {
                          children: N(`#selectimage_tip_usage_title`),
                        }),
                        `: `,
                        N(`#selectimage_tip_sale_header_1`),
                      ],
                    }),
                    (0, X.jsxs)(`p`, {
                      children: [
                        (0, X.jsx)(`b`, {
                          children: N(`#selectimage_tip_design_title`),
                        }),
                        `: `,
                        N(`#selectimage_tip_sale_header_2`),
                      ],
                    }),
                    (0, X.jsx)(`p`, {
                      children: N(`#selectimage_tip_sale_header_4`),
                    }),
                    (0, X.jsxs)(`p`, {
                      children: [
                        (0, X.jsx)(`b`, {
                          children: N(`#selectimage_tip_template_title`),
                        }),
                        `: `,
                        (0, X.jsx)(`a`, {
                          href: `https://www.dropbox.com/scl/fo/mhf604o6bdbcfr1scq7bx/h?rlkey=9bk0ggiwuvs4o1jdnej4xsy0c&dl=0`,
                          children: N(`#selectimage_tip_sale_header_3`),
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
                        children: N(`#selectimage_tip_hero_1`),
                      }),
                      !d.GetAssets()?.GetLibraryHeroURL() &&
                        (0, X.jsx)(`p`, {
                          className: `_9rhLFCwqjPg-`,
                          children: N(`#EventEdtior_ArtworkType_hero_warning`),
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
                          children: N(`#ImagePickerLoc_Desc`),
                        }),
                        (0, X.jsx)(`p`, {
                          children: Pt(
                            `#ImagePickerLoc_Files`,
                            (0, X.jsx)(`a`, {
                              href: bo,
                              target: z.IN_CLIENT ? void 0 : `_blank`,
                              children: N(`#ImagePickerLoc_URL`),
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
                            children: N(`#selectimage_tip_optional_title`),
                          }),
                          (0, X.jsxs)(`p`, {
                            children: [
                              (0, X.jsx)(`b`, {
                                children: N(`#selectimage_tip_usage_title`),
                              }),
                              `: `,
                              N(`#selectimage_tip_sale_product_banner`),
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
                              children: N(`#selectimage_tip_optional_title`),
                            }),
                            (0, X.jsxs)(`p`, {
                              children: [
                                (0, X.jsx)(`b`, {
                                  children: N(`#selectimage_tip_usage_title`),
                                }),
                                `: `,
                                N(`#selectimage_tip_sale_product_banner`),
                                t === `product_mobile_banner` &&
                                  (0, X.jsxs)(`span`, {
                                    children: [
                                      `  `,
                                      N(
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
                                    children: N(
                                      `#selectimage_tip_design_title`,
                                    ),
                                  }),
                                  `:`,
                                  N(`#Sale_Tabs_Background_Design`),
                                ],
                              }),
                              (0, X.jsxs)(`p`, {
                                children: [
                                  (0, X.jsx)(`strong`, {
                                    children: N(`#selectimage_tip_usage_title`),
                                  }),
                                  `:`,
                                  N(`#Sale_Tabs_Background_Usage`),
                                ],
                              }),
                            ],
                          }))
                        : t === `sale_logo`
                          ? (_ = (0, X.jsxs)(X.Fragment, {
                              children: [
                                (0, X.jsx)(`div`, {
                                  className: Je,
                                  children: N(
                                    `#selectimage_tip_optional_title`,
                                  ),
                                }),
                                (0, X.jsxs)(`p`, {
                                  children: [
                                    (0, X.jsx)(`b`, {
                                      children: N(
                                        `#selectimage_tip_usage_title`,
                                      ),
                                    }),
                                    `: `,
                                    N(`#selectimage_tip_pageLogo`),
                                  ],
                                }),
                              ],
                            }))
                          : t === `sale_cross_promo_logo`
                            ? (_ = (0, X.jsxs)(X.Fragment, {
                                children: [
                                  (0, X.jsx)(`div`, {
                                    className: Je,
                                    children: N(
                                      `#selectimage_tip_optional_title`,
                                    ),
                                  }),
                                  (0, X.jsxs)(`p`, {
                                    children: [
                                      (0, X.jsx)(`b`, {
                                        children: N(
                                          `#selectimage_tip_usage_title`,
                                        ),
                                      }),
                                      `: `,
                                      N(
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
                                    children: N(
                                      `#selectimage_tip_required_title`,
                                    ),
                                  }),
                                  (0, X.jsxs)(`p`, {
                                    children: [
                                      (0, X.jsx)(`b`, {
                                        children: N(
                                          `#selectimage_tip_usage_title`,
                                        ),
                                      }),
                                      `: `,
                                      N(`#selectimage_tip_bestofyear`),
                                    ],
                                  }),
                                ],
                              }));
  let v = Et[e.artworkType].width,
    y = Et[e.artworkType].height;
  return (0, X.jsxs)(`div`, {
    id: e.id,
    className: ka,
    children: [
      !!e.title &&
        (0, X.jsxs)(`div`, {
          className: K(`Y63LZFKwGXE-`, i && `tU9SaxlQ-9k-`),
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
          className: K(`XRZj1OeBHRk-`, `hvd5bQPy4pQ-`),
          children: [
            _,
            !!(v && y) &&
              (0, X.jsxs)(`p`, {
                children: [
                  (0, X.jsx)(`b`, {
                    children: N(`#selectimage_tip_dimensions_title`),
                  }),
                  `:\xA0`,
                  Pt(`#selectimage_tip1`, vt(v), vt(y)),
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
              (0, X.jsx)(R, {
                className: `_1k0t2Q-C2OU-`,
                onClick: (t) => {
                  M(
                    (0, X.jsx)(So, {
                      fnRemoveAllArtwork: e.fnRemoveAllArtwork,
                    }),
                    Vt(t) ?? window,
                  );
                },
                children: N(`#Sale_RemoveAll`),
              }),
          ],
        }),
      !e.bIsMinimized &&
        (0, X.jsx)(Co, {
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
function So(e) {
  let { fnRemoveAllArtwork: t, closeModal: n } = e;
  return (0, X.jsx)(U, {
    strTitle: N(`#Sale_RemoveAll`),
    strDescription: N(`#ImageUpload_DeleteAll_Confirm`),
    onOK: () => {
      (t?.(), n?.());
    },
    onCancel: n,
  });
}
function Co(e) {
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
    [f, p] = J.useState(He()),
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
      (e, n, r) => {
        s(() => {
          (Na(a(t, n) ?? ``) == e.image_hash && o(t, null, n),
            o(t, e, r),
            g(e, r, !1));
        });
      },
      [a, t, o, g],
    );
  return t === `hero`
    ? (0, X.jsx)(`div`, {
        style: { padding: `16px` },
        children: (0, X.jsx)(R, {
          style: { textTransform: `uppercase`, width: `200px` },
          onClick: () =>
            window.open(
              `${z.PARTNER_BASE_URL}admin/game/editbyappid/${l}?activetab=tab_graphicalassets`,
            ),
          children: N(`#ImageUpload_EditHeroImage`),
        }),
      })
    : (0, X.jsxs)(`div`, {
        children: [
          (0, X.jsx)(wo, {
            list: m,
            fnOnArtworkLanguageChange: _,
            realms: n,
            fnLangHasData: i,
          }),
          (0, X.jsx)(`div`, {
            children: (0, X.jsx)(`div`, {
              className: K(Ta, Ea),
              children: (0, X.jsx)(lo, {
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
var wo = class extends J.Component {
  ShowLangChangeDialog(e, t) {
    let {
      fnOnArtworkLanguageChange: n,
      realms: r,
      fnLangHasData: i,
    } = this.props;
    M(
      (0, X.jsx)(Ma, {
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
          i = N(`#Language_` + W(r));
        e.push(
          (0, X.jsxs)(
            `div`,
            {
              className: tt,
              children: [
                (0, X.jsx)(`span`, {
                  children: N(
                    `#ImageUpload_Success_Mapping`,
                    n.file_name ?? ``,
                    i,
                  ),
                }),
                (0, X.jsx)(`a`, {
                  onClick: () => this.ShowLangChangeDialog(n, r),
                  children: N(`#ImageUpload_Success_Mapping_Change`),
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
    return (0, X.jsx)(`div`, { className: ja, children: t });
  }
};
(Gt([Xt], wo.prototype, `ShowLangChangeDialog`, null), (wo = Gt([l], wo)));
function To(e) {
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
    [d, p] = (0, J.useState)(!1),
    m = Ct(t, o),
    h = t.GetAccountID(),
    [g] = f(() => [m.GetFilesToUpload().length - m.GetCompletedFiles()]);
  (0, J.useEffect)(() => {
    (p(!1),
      Q.ClearImageGroup(),
      a?.forEach((e, t) => {
        let n = F.InitFromClanID(h, z.EUNIVERSE);
        if (Q.GetAllLocalizedGroupImages().length == 0) {
          let t = e && w.GetHashFromHashAndExt(e),
            r = t && k.GetClanImageByImageHash(n, t);
          r && Q.SetPrimaryImageForImageGroup(r, o);
        }
        Q.SetLocalizedImageGroupAtLang(t, n, e ?? null);
      }),
      p(!0));
  }, [a, h, o]);
  let _ = (0, J.useCallback)(
      (e, t, n = 0) => {
        let r = F.InitFromClanID(h, z.EUNIVERSE),
          i = w.GetHashAndExt(t ?? null);
        if (Q.GetAllLocalizedGroupImages().length == 0) {
          let t = i && w.GetHashFromHashAndExt(i),
            n = t && k.GetClanImageByImageHash(r, t);
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
  return (0, X.jsxs)(U, {
    onCancel: c,
    closeModal: c,
    bDisableBackgroundDismiss: !0,
    bAllowFullSize: !0,
    className: K(lt, ct),
    strTitle: e.strLocalizedTitle || N(`#ImagePickerLoc_Title`),
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
              image_hash: Na(t),
              clanAccountID: h,
              file_type: _t(t) ?? 0,
              imageid: 0,
            },
            e,
          );
        } else l(o, null, e);
      }
      (Q.ClearImageGroup(), e.onOK ? e.onOK() : c?.());
    },
    strOKButtonText: g > 0 ? N(`#ImagePickerLoc_DismissWarning`) : void 0,
    children: [
      d
        ? (0, X.jsxs)(X.Fragment, {
            children: [
              (0, X.jsx)(ha, {
                clanSteamID: t,
                rgSupportArtwork: [o],
                fnSetImageURL: _,
                bAllowPreviousClanImageSelection: !1,
                rgRealmList: i ?? [],
                uploaderOverride: m,
              }),
              (0, X.jsx)(xo, {
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
            string: N(`#Loading`),
          }),
      e.children,
    ],
  });
}
function Eo(e) {
  let { setting: t, fnUpdateSetting: n, label: r } = e,
    i = J.useMemo(() => {
      let e = [];
      return (
        e.push({ label: N(`#EventEditor_Tile_NoRepeat`), data: `no-repeat` }),
        e.push({ label: N(`#EventEditor_Tile_RepeatX`), data: `repeat-x` }),
        e.push({ label: N(`#EventEditor_Tile_RepeatY`), data: `repeat-y` }),
        e.push({ label: N(`#EventEditor_Tile_Repeat`), data: `repeat` }),
        e.push({
          label: N(`#EventEditor_Tile_NoRepeatAndBlur`),
          data: `coverBlur`,
        }),
        e
      );
    }, []);
  return (0, X.jsxs)(X.Fragment, {
    children: [
      (0, X.jsx)(B, { children: r || N(`#EventEditor_Tile_Title`) }),
      (0, X.jsx)(L, {
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
function Do(e) {
  let { closeModal: t, imgGroup: n, fnUpdateImageGroup: r, eventModel: i } = e,
    { openColorPicker: a } = Sr(),
    [o, s] = (0, J.useState)(() => n),
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
    [_] = (0, J.useState)(() => Oo(o.localized_background_art ?? {}));
  return (0, X.jsxs)(To, {
    strLocalizedTitle: N(`#BackgroundGroups_Configure`),
    strLocalizedDescription: N(`#BackgroundGroups_DialogDesc`),
    appid: i.appid,
    eventModel: i,
    clanSteamID: i.clanSteamID,
    closeModal: t,
    partnerEventStore: jt,
    artworkType: `localized_background_art`,
    realms: h,
    loc_images: _,
    fnLangHasData: (e) => !!_[e],
    fnGetImageHash: (e, t) => _[t],
    fnSetImageURL: async (e, t, n) => {
      s((e) => {
        let r = { ...e.localized_background_art },
          i = w.GetHashAndExt(t);
        return (
          i ? (r[W(n)] = i) : delete r[W(n)],
          { ...e, localized_background_art: r }
        );
      });
    },
    onOK: () => {
      s((e) => (r(e), t && setTimeout(t, 1), { ...e }));
    },
    children: [
      (0, X.jsxs)(`div`, {
        className: xi,
        children: [
          (0, X.jsxs)(`div`, {
            className: Si,
            children: [
              (0, X.jsx)(Eo, {
                setting: c,
                fnUpdateSetting: (e) => {
                  s(
                    e === `no-repeat`
                      ? { ...o, repeat_setting: e }
                      : { ...o, repeat_setting: e, scaling_setting: `auto` },
                  );
                },
                label: N(`#BackgroundGroups_Repeating`),
              }),
              (0, X.jsx)(ko, {
                scaling_setting: l ?? `contain`,
                disable: c !== `no-repeat`,
                fnUpdateSetting: (e) => s({ ...o, scaling_setting: e }),
              }),
              l != `cover` &&
                (0, X.jsx)(jo, {
                  position_settings: m,
                  fnUpdateSetting: (e) => s({ ...o, position_setting: e }),
                }),
            ],
          }),
          (0, X.jsxs)(`div`, {
            className: Ci,
            children: [
              (0, X.jsx)(B, { children: N(`#BackgroundGroups_Color`) }),
              (0, X.jsxs)(`div`, {
                className: wi,
                children: [
                  (0, X.jsx)(R, {
                    style: { backgroundColor: u },
                    onClick: (e) =>
                      a(e, {
                        color: u,
                        onChange: (e) =>
                          s({ ...o, background_color1: e || void 0 }),
                      }),
                    children: N(
                      u === void 0
                        ? `#BackgroundGroups_ColorNum_unset`
                        : `#BackgroundGroups_ColorNum`,
                      1,
                    ),
                  }),
                  `\xA0`,
                  (0, X.jsx)(R, {
                    onClick: () => s({ ...o, background_color1: void 0 }),
                    children: N(`#BackgroundGroups_Color_Clear`),
                  }),
                ],
              }),
              (0, X.jsx)(`div`, {
                className: yi,
                children: (0, X.jsx)(R, {
                  onClick: () =>
                    s({ ...o, background_color1: d, background_color2: u }),
                  children: N(`#BackgroundGroups_Color_Swap`),
                }),
              }),
              p !== `single-color` &&
                (0, X.jsxs)(`div`, {
                  className: `j5T-MrFgQ20-`,
                  children: [
                    (0, X.jsx)(R, {
                      style: { backgroundColor: d },
                      onClick: (e) =>
                        a(e, {
                          color: d,
                          onChange: (e) =>
                            s({ ...o, background_color2: e || void 0 }),
                        }),
                      children: N(
                        d === void 0
                          ? `#BackgroundGroups_ColorNum_unset`
                          : `#BackgroundGroups_ColorNum`,
                        2,
                      ),
                    }),
                    `\xA0`,
                    (0, X.jsx)(R, {
                      onClick: () => s({ ...o, background_color2: void 0 }),
                      children: N(`#BackgroundGroups_Color_Clear`),
                    }),
                  ],
                }),
              (0, X.jsx)(Ao, {
                gradient: p ?? `top-to-bottom`,
                fnUpdateSetting: (e) => s({ ...o, gradient_setting: e }),
              }),
            ],
          }),
        ],
      }),
      (0, X.jsx)(ri, {
        clanSteamID: i.clanSteamID,
        children: (0, X.jsx)(qt, {
          checked: !!g,
          onChange: (e) => {
            o.randomize_section_order = e;
          },
          children: N(`#BackgroundGroups_RandomizeSectionOrder`),
        }),
      }),
    ],
  });
}
function Oo(e) {
  let t = tn([], 32, null);
  for (let n in e) {
    let r = q(n);
    r != -1 && (t[r] = e[n]);
  }
  return t;
}
function ko(e) {
  let { scaling_setting: t, fnUpdateSetting: n, label: r, disable: i } = e,
    a = J.useMemo(() => {
      let e = [];
      return (
        e.push({ label: N(`#BackgroundGroups_Scaling_cover`), data: `cover` }),
        e.push({
          label: N(`#BackgroundGroups_Scaling_contain`),
          data: `contain`,
        }),
        e.push({ label: N(`#BackgroundGroups_Scaling_fixed`), data: `auto` }),
        e
      );
    }, []);
  return (0, X.jsxs)(X.Fragment, {
    children: [
      (0, X.jsx)(B, { children: r || N(`#BackgroundGroups_Scaling`) }),
      (0, X.jsx)(L, {
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
function Ao(e) {
  let { gradient: t, fnUpdateSetting: n, label: r } = e,
    i = J.useMemo(() => {
      let e = [];
      return (
        e.push({
          label: N(`#BackgroundGroups_Gradient_Top`),
          data: `top-to-bottom`,
        }),
        e.push({
          label: N(`#BackgroundGroups_Gradient_Left`),
          data: `left-to-right`,
        }),
        e.push({
          label: N(`#BackgroundGroups_Gradient_TopLeft`),
          data: `top-left-to-bottom-right`,
        }),
        e
      );
    }, []);
  return (0, X.jsxs)(X.Fragment, {
    children: [
      (0, X.jsx)(B, { children: r || N(`#EventEditor_ColorSetting_Title`) }),
      (0, X.jsx)(L, {
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
function jo(e) {
  let { position_settings: t, fnUpdateSetting: n, label: r } = e,
    i = J.useMemo(() => {
      let e = [];
      return (
        e.push({ label: N(`#BackgroundGroups_Position_Unset`), data: `unset` }),
        e.push({
          label: N(`#BackgroundGroups_Position_Centered`),
          data: `center`,
        }),
        e.push({
          label: N(`#BackgroundGroups_Position_CenteredTop`),
          data: `top center`,
        }),
        e.push({
          label: N(`#BackgroundGroups_Position_TopLeft`),
          data: `top left`,
        }),
        e.push({
          label: N(`#BackgroundGroups_Position_BottomRight`),
          data: `bottom right`,
        }),
        e
      );
    }, []);
  return (0, X.jsxs)(X.Fragment, {
    children: [
      (0, X.jsx)(B, { children: r || N(`#BackgroundGroups_Position`) }),
      (0, X.jsx)(L, {
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
function Mo(e) {
  let {
      backgroundImageEditModel: t,
      bBackgroundImgGroupEditMode: n,
      fnSetBackgroundImgGroupEditMode: r,
      bShowAsValveOnly: i,
    } = e,
    [a, o] = (0, J.useState)(t.BIsBackgroundImageEnabled()),
    [s, c, l] = A(),
    u = f(() => t.GetSalePageLastCoverSectionUntilEnd());
  return (0, X.jsx)(`div`, {
    className: K(_i, i && `u6DPgTclyv4-`),
    children: (0, X.jsxs)(I, {
      children: [
        (0, X.jsx)(G, {
          label: N(`#BackgroundGroups_Setting`),
          checked: a,
          onChange: (e) => {
            (o(e), t.SetBackgroundImageEnabled(e));
          },
        }),
        a
          ? (0, X.jsxs)(X.Fragment, {
              children: [
                (0, X.jsx)(G, {
                  label: N(`#BackgroundGroups_EditMode`),
                  tooltip: N(`#BackgroundGroups_EditMode_ttip`),
                  checked: n,
                  onChange: r,
                }),
                (0, X.jsx)(G, {
                  label: N(`#BackgroundGroups_ExtendToEnd`),
                  tooltip: N(`#BackgroundGroups_ExtendToEnd_ttip`),
                  checked: u,
                  onChange: (e) => t.SetSalePageLastCoverSectionUntilEnd(e),
                }),
                (0, X.jsx)(`hr`, {}),
                (0, X.jsx)(R, {
                  onClick: c,
                  children: N(`#BackgroundGroups_ClearAllSettings`),
                }),
                (0, X.jsx)(V, {
                  active: s,
                  children: (0, X.jsx)(U, {
                    strTitle: N(`#EventEditor_GenericAreYouSure`),
                    strDescription: N(
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
          : (0, X.jsx)(`p`, { children: N(`#BackgroundGroups_Desc`) }),
        (0, X.jsx)(`br`, {}),
        (0, X.jsx)(`a`, {
          href: `${z.PARTNER_BASE_URL}doc/marketing/event_tools/sales/groups`,
          target: `_blank`,
          children: N(`#EventGeneric_SeeDocs`),
        }),
      ],
    }),
  });
}
var No = J.forwardRef(function (e, t) {
  let {
      imgGroupDerivedMapping: n,
      backgroundImageEditModel: r,
      groupIndex: i,
      imgGroup: a,
      eventModel: o,
      nTabIndex: s,
    } = e,
    c = He(),
    [l, u, d, p] = f(() => [
      a && n.mapGroupToSections.get(a.background_id),
      (a && n.mapGroupToSections.get(a.background_id)?.sectionUniqueIDs) ?? [],
      s == null
        ? r?.GetSalePageLastCoverSectionUntilEnd()
        : r?.GetTabLastCoverSectionUntilEnd(s),
      s == null ? r?.GetSalePageGroupCount() : r?.GetTabGroupCount(s),
    ]),
    m = d && i + 1 === p,
    [h, g, _] = A(),
    [v, y, b] = A(),
    x;
  l?.nUniqueIDNextSaleSection &&
    (x = st(
      2,
      r.GetSaleSectionByID(l?.nUniqueIDNextSaleSection),
      c,
      o,
      l.nSaleSectionLastIndex + 1,
    ));
  let S;
  if (l && u?.length > 1) {
    let e = u[u.length - 1];
    S = st(2, r?.GetSaleSectionByID(e), c, o, l.nSaleSectionLastIndex);
  }
  return (0, X.jsx)(bn, {
    bStartMinimized: !1,
    title: N(
      s == null
        ? `#BackgroundGroups_Sale_GroupNum`
        : `#BackgroundGroups_Sale_Tab_GroupNum`,
      i + 1,
    ),
    className: e.classNameHeader,
    children: (0, X.jsxs)(`div`, {
      ref: t,
      children: [
        (0, X.jsx)(R, {
          onClick: g,
          children: N(`#BackgroundGroups_Configure`),
        }),
        (0, X.jsx)(V, {
          active: h,
          children: (0, X.jsx)(Do, {
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
          className: bi,
          children: N(`#BackgroundGroups_ContentTitle`),
        }),
        (0, X.jsxs)(`ul`, {
          children: [
            u.map((e) =>
              (0, X.jsx)(
                `li`,
                {
                  children: st(
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
              (0, X.jsx)(`li`, { children: N(`#BackgroundGroups_EndOfList`) }),
          ],
        }),
        !!S &&
          (0, X.jsx)(R, {
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
            children: N(`#BackgroundGroups_Reduce`, S),
          }),
        !!x &&
          (0, X.jsx)(R, {
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
            children: N(`#BackgroundGroups_Extend`, x),
          }),
        i > 0 &&
          (0, X.jsxs)(X.Fragment, {
            children: [
              (0, X.jsx)(`hr`, {}),
              (0, X.jsx)(R, {
                className: `_1k0t2Q-C2OU-`,
                onClick: y,
                children: N(`#BackgroundGroups_RemoveThisGroup`),
              }),
              (0, X.jsx)(V, {
                active: v,
                children: (0, X.jsx)(U, {
                  strTitle: N(`#Dialog_AreYouSure`),
                  bDestructiveWarning: !0,
                  strDescription: N(`#BackgroundGroups_RemoveThisGroup_Desc`),
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
function Po(e) {
  let { backgroundImageEditModel: t, nTabID: n } = e;
  return (0, X.jsx)(`div`, {
    className: vi,
    children: (0, X.jsx)(R, {
      onClick: (e) =>
        n !== void 0 && n >= 0
          ? t?.AddTabBackgroundGroup(n)
          : t?.AddSalePageBackgroundGroup(),
      children: N(
        n !== void 0 && n >= 0
          ? `#BackgroundGroups_AddNewGroupTab`
          : `#BackgroundGroups_AddNewGroup`,
      ),
    }),
  });
}
function Fo(e) {
  let {
      nTabID: t,
      nSectionUniqueID: n,
      salePageBackgroundDerivedConfig: r,
      backgroundImageEditModel: i,
    } = e,
    a = r.mapFirstSectionToGroup.get(n);
  return n == r.nFirstSaleSectionIDWithoutGroup ||
    n == r.nFirstTabSectionIDWithoutGroup
    ? (0, X.jsx)(Po, { backgroundImageEditModel: i, nTabID: t })
    : a
      ? (0, X.jsx)(Io, { ...e, groupID: a })
      : null;
}
function Io(e) {
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
    let e = M(
      (0, X.jsx)(U, {
        bAlertDialog: !0,
        closeModal: () => l(!1),
        children: (0, X.jsx)(No, {
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
  let u = f(() => li.get(t)),
    [d, p] = (0, J.useState)(null),
    m = J.useCallback((e, t) => {
      p(t);
    }, []),
    h = Nt(m);
  return (0, X.jsxs)(`div`, {
    className: vi,
    ref: h,
    children: [
      !!(u && d && d > u) &&
        (0, X.jsx)(R, {
          onClick: (e) => l(!0),
          children: N(`#BackgroundGroups_EditBackgroundGroup`),
        }),
      (0, X.jsx)(No, {
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
var Lo = `Bn58KEX1KcI-`;
function Ro(e) {
  let { imgGroupDerivedMapping: t } = e,
    [n, r] = (0, J.useState)(!1);
  (0, J.useEffect)(() => {
    if (!n) return;
    let t = M(
      (0, X.jsx)(U, {
        bAlertDialog: !0,
        closeModal: () => r(!1),
        children: (0, X.jsx)(zo, { ...e }),
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
        if (n) return li.get(n?.nBackgroundGroupID) ?? 0;
      }
      return 0;
    }),
    [a, o] = (0, J.useState)(null),
    s = J.useCallback((e, t) => {
      o(t);
    }, []),
    c = Nt(s),
    l = !!(i >= 0 && a && a > i);
  return (0, X.jsxs)(`div`, {
    className: K(vi, Lo),
    ref: c,
    children: [
      l &&
        (0, X.jsx)(R, {
          onClick: (e) => r(!0),
          children: N(`#BackgroundGroups_EditBackgroundGroup`),
        }),
      (0, X.jsx)(zo, { ...e }),
    ],
  });
}
function zo(e) {
  let { backgroundImageEditModel: t, imgGroupDerivedMapping: n, nTabID: r } = e,
    [i, a] = (0, J.useState)(null),
    [o, s, c, l] = f(() => [
      t?.GetTabLastCoverSectionUntilEnd(r),
      t?.BIsTabEnabled(r),
      n.selectedTabBackgroundDef,
      t?.GetEventModel(),
    ]);
  return (0, X.jsxs)(I, {
    children: [
      (0, X.jsx)(G, {
        label: N(`#BackgroundGroups_TaSetting`),
        checked: s,
        onChange: (e) => {
          if (
            (P(t, `edit model mising`),
            P(r !== void 0, `tab setting missing`),
            r !== void 0 && t)
          ) {
            let n = t.SetTabEnabled(r, e);
            (P(!!n, `Failed to create model TabID ${r}backgroundModel`), a(n));
          } else
            console.error(
              `Failed to enable table group, edit mode: ${!!t}, TabID: ${r}.`,
            );
        },
      }),
      !!s &&
        (0, X.jsxs)(X.Fragment, {
          children: [
            (0, X.jsx)(G, {
              label: N(`#BackgroundGroups_ExtendToEnd`),
              tooltip: N(`#BackgroundGroups_ExtendToEnd_Tab_ttip`),
              checked: o,
              onChange: (e) => t.SetTabLastCoverSectionUntilEnd(r, e),
            }),
            (0, X.jsx)(No, {
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
function Bo(e) {
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
    [u, d] = J.useState(null),
    p = f(() => n.jsondata.sale_header_disable_top_margin),
    m = se(n, !!De(n)),
    h = Vo(n, i, c, ge(!!r)),
    [_, v] = (0, J.useState)(!1);
  J.useEffect(() => {
    if (
      n.jsondata.sale_custom_css &&
      !u &&
      r &&
      n.jsondata.sale_vanity_id_valve_approved_for_sale_subpath &&
      yn() == `community`
    ) {
      let e = document.getElementsByTagName(`HEAD`)[0],
        t = document.createElement(`style`);
      ((t.innerText = Wt(n.jsondata.sale_custom_css)), d(t), e.appendChild(t));
    }
    let e = document.getElementsByClassName(`react_landing_background`);
    return (
      P(e.length <= 1, `Must have at most one react_landing_background`),
      e.length >= 1 && (e[0].style.backgroundImage = ``),
      () => {
        u && (u.remove(), d(null));
      }
    );
  }, [n, u, r]);
  let y = n?.jsondata,
    b = J.useMemo(
      () => ({
        promotionName: t,
        clanid: Number(fn.CLANACCOUNTID),
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
    ee = ni(n?.clanSteamID);
  if (!n || c === void 0)
    return (0, X.jsx)(`div`, {
      className: pn,
      style: { height: `500px` },
      children: (0, X.jsx)(O, { size: `medium`, string: N(`#Loading`) }),
    });
  {
    let e = Dr(n),
      u = n.BUsesContentHubForItemSource(),
      d = n.GetSaleSections().some((e) => e.section_type === `contenthubtitle`),
      f = u && d,
      y,
      C = !0;
    e
      ? (y = 0)
      : n.BUsesContentHubForItemSource()
        ? (y = n.jsondata.sale_header_offset === 530 ? 530 : 20)
        : n.GetEventType() == 36
          ? ((y = 0), (C = !1))
          : (y = n.jsondata.sale_header_offset || 0);
    let w = C && n.jsondata.sale_header_offset === 530,
      T = !Ce.Get().BIsPartnerTakeoverActive(
        n.GetContentHubType(),
        n.GetContentHubCategory(),
        n.GetContentHubTag(),
      ),
      te = r
        ? !_ && a?.BIsBackgroundImageEnabled()
          ? D.EPreviewMode_EditBackground
          : D.EPreviewMode_Enabled
        : D.EPreviewMode_Disabled,
      E = S || n.GetEventType() != 36,
      ne = u ? hn.NoTransform : hn.NoTransformSparseContent,
      re = K(
        x,
        p && `_9D3431c8-XE-`,
        w && `_5NaHSqwUb-k-`,
        g[`CustomStyle_${n.jsondata.sale_vanity_id}`],
        `SaleOuterContainer`,
        e && `RG63SnOtLk0-`,
        f && void 0,
      );
    return (0, X.jsx)(I, {
      children: (0, X.jsx)(ce, {
        eventModel: n,
        language: i,
        children: (0, X.jsx)(ht, {
          location: r ? 2 : 0,
          children: (0, X.jsxs)(Nr, {
            event: n,
            language: i,
            bIsPreview: !!r,
            personalizedCarousels: m,
            children: [
              T && (0, X.jsx)(pe, {}),
              (0, X.jsx)(Tr, { eventModel: n }),
              !!a &&
                (E || ee) &&
                (0, X.jsx)(Mo, {
                  backgroundImageEditModel: a,
                  bBackgroundImgGroupEditMode: _,
                  fnSetBackgroundImgGroupEditMode: v,
                  bShowAsValveOnly: !E,
                }),
              (0, X.jsxs)(cn, {
                style: !f || (w && !e) ? { marginTop: `${y || 0}px` } : void 0,
                className: re,
                scrollIntoViewType: ne,
                children: [
                  e && (0, X.jsx)(Or, { eventModel: n, language: i }),
                  (0, X.jsx)(zr, { rgPresenters: n.jsondata.sale_presenters }),
                  (0, X.jsx)(Ur, { event: n, broadcastEmbedContext: b }),
                  (0, X.jsx)(Wo, {
                    ePreviewMode: te,
                    event: n,
                    backgroundImageEditModel: a,
                    language: i,
                    promotionName: t,
                    nSaleDayIndex: c,
                    broadcastEmbedContext: b,
                    selectedTab: h,
                    tagSelection: h?.GetTagSelection(),
                  }),
                  !s &&
                    (0, X.jsx)(ci, {
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
function Vo(e, t, n, r) {
  let i = f(() => e.GetSaleSectionFirstMatchByType(`tabs`)),
    a = ae(i, t),
    [o] = Ve(`tab`, void 0),
    [s] = Ve(Ee, void 0),
    [c] = Ve(Te, void 0),
    l = J.useMemo(() => {
      let e = a?.filter((e) => !e.hide);
      if (e && e.length > 0) {
        let t = o > 0 ? e.find((e) => e.unique_id == o) : void 0;
        t ||= e[0];
        let n = t === e[0];
        return { selTab: t, bIsDefaultTab: n };
      }
    }, [a, o]),
    u = we(ke(s, c), l?.selTab.tab_tag_filter, r),
    d = u?.strParentKey,
    p = u?.strChildKey;
  return J.useMemo(() => {
    if (!l) return;
    let t;
    d && (t = { strParentKey: d, strChildKey: p });
    let r =
      e.jsondata.sale_opt_in_page_name || e.jsondata.prune_list_optin_name;
    return new Se(l.selTab, n, l.bIsDefaultTab, t, r);
  }, [e, n, l, d, p]);
}
function Ho() {
  if (window?.location?.hash)
    return decodeURIComponent(window.location.hash.substring(1).toLowerCase());
}
function Uo(e) {
  let {
      event: t,
      language: r,
      nSaleDayIndex: i,
      ePreviewMode: a,
      selectedTab: o,
      backgroundImageEditModel: s,
    } = e,
    [c, l] = J.useState(rt()),
    u = J.useMemo(() => new gi(), []),
    d = J.useCallback(() => l(rt()), []);
  (J.useEffect(
    () => (
      window.addEventListener(`resize`, d),
      () => window.removeEventListener(`resize`, d)
    ),
    [d],
  ),
    J.useEffect(() => {
      let e = ``,
        t = () => {
          let t = Ho();
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
  let p = n(),
    m = (e, t) => {
      Be(p, { ...(t || {}), tab: e.toString() });
    },
    [h, g] = Ve(`controller`),
    [_, v] = f(() => {
      let e = mt.GetCreatorHome(t.clanSteamID)?.GetAppIDList().length ?? 0,
        n = t.GetSaleSectionIncludingFooterSections(e);
      return [
        di(
          t.jsondata.sale_background_img_groups,
          n,
          o && o.GetSectionTabUniqueID(),
        ),
        n,
      ];
    }),
    b = !1,
    x = [{ elements: [], activeTab: new Se(void 0, i) }],
    S = null,
    ee = $t(),
    C = be(),
    w = he(t),
    T = Vr(v),
    te = J.useMemo(() => {
      let e = Ho();
      if (!e) return;
      let t = v.findIndex((t) => t.section_anchor === e);
      return t > -1 ? t : void 0;
    }, [v]);
  (v.forEach((n, i) => {
    let l = x[x.length - 1].activeTab;
    if (l && !l.ShouldShowSection(n)) return;
    let d = Ce.Get().BIsPartnerTakeoverActive(
        t.GetContentHubType(),
        t.GetContentHubCategory(),
        t.GetContentHubTag(),
      ),
      f = c && !d && !t.jsondata.content_hub_restricted_width,
      p = ve(n, a, t, r, ee, w, T(n));
    if (p === void 0) return;
    if (!p) {
      if (le(n) && !mn.logged_in)
        b ||= ((p = (0, X.jsx)(me, { section: n, event: t, language: r })), !0);
      else {
        let t = n.diable_tab_id_filtering
          ? new Se(void 0, l && l.GetSaleDay())
          : l;
        (n.section_type == `tabs` &&
          n.tabs?.some((e) => e.unique_id == o?.GetSectionTabUniqueID()) &&
          x.push({ activeTab: o, elements: [] }),
          (p = (0, X.jsx)(ye, {
            ...e,
            section: n,
            activeTab: t,
            appVisibilityTracker: u,
            selectedTab: o,
            setTabUniqueIDQueryParam: m,
            expanded: f,
            controllerCategory: h,
            setControllerCategory: g,
          })));
      }
    }
    C && (p = (0, X.jsx)(Ir, { nSectionID: n.unique_id, children: p }));
    let v = x && x.length && x[x.length - 1],
      y = (0, X.jsx)(
        Jo,
        {
          section: n,
          nActiveTabID: v && v.activeTab && v.activeTab.GetSectionTabUniqueID(),
          saleSectionIndex: i,
          ePreviewMode: a,
          salePageBackgroundDerivedConfig: _,
          backgroundImageEditModel: s,
          bExpanded: f,
          children: (0, X.jsx)(pt, { enabled: !te || i > te, children: p }),
        },
        `SaleSectionIndex_` + n.unique_id + `_` + i,
      ),
      E = _.mapSectionToGroup.get(n.unique_id);
    (S &&
      S.groupID != E &&
      (x[x.length - 1].elements.push(
        fi(t, S, a, o && o?.GetSectionTabUniqueID()),
      ),
      (S = null)),
      E
        ? ((S ||= {
            groupID: E,
            elSaleSections: [],
            derivedGroupInfo: _.mapGroupToSections.get(E),
          }),
          S.elSaleSections.push(y))
        : x[x.length - 1].elements.push(y));
  }),
    (S &&=
      (x[x.length - 1].elements.push(
        fi(t, S, a, o && o?.GetSectionTabUniqueID()),
      ),
      null)));
  let E = x.map((e, t) =>
    (0, X.jsx)(
      `div`,
      { className: K(y, `SaleSectionTabListContainer`), children: e.elements },
      `TabSection_` + t,
    ),
  );
  return (0, X.jsx)(cn, {
    focusable: !1,
    focusableIfEmpty: !0,
    navKey: `SaleSectionListContainer`,
    children: E,
  });
}
var Wo = a(Uo);
function Go(e) {
  let {
    visibility_by_door_index_state: t,
    door_index_visibility: n,
    children: r,
  } = e;
  return t && n != null
    ? (0, X.jsx)(Ko, {
        visibility_by_door_index_state: t,
        door_index_visibility: n,
        children: r,
      })
    : (0, X.jsx)(X.Fragment, { children: r });
}
function Ko(e) {
  let {
      visibility_by_door_index_state: t,
      door_index_visibility: n,
      children: r,
    } = e,
    i = te(n);
  return (t == `hide_when_open_door_index` && i) ||
    (t == `show_when_open_door_index` && !i)
    ? null
    : (0, X.jsx)(X.Fragment, { children: r });
}
function qo({ children: e, onChange: t }) {
  return (
    J.useRef(null),
    (0, J.useEffect)(() => {
      t(!!J.Children.toArray(e).filter(Boolean).length);
    }, [e, t]),
    e
  );
}
function Jo(e) {
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
    l = t.section_anchor ? t.section_anchor : nt + (t.unique_id || n),
    u = t.section_type != `tabs`,
    [d, f] = (0, J.useState)(!0);
  return d
    ? (0, X.jsx)(I, {
        children: (0, X.jsx)(Go, {
          visibility_by_door_index_state: t.visibility_by_door_index_state,
          door_index_visibility: t.door_index_visibility,
          children: u
            ? (0, X.jsx)(cn, {
                navKey: l,
                id: l,
                className: K({
                  [v]: !0,
                  SaleSectionCtn: !0,
                  [t.section_type]: !0,
                  [t.internal_section_data?.internal_type || ``]: !0,
                  expanded: s,
                  [t.single_item_style || ``]: !0,
                  [S]: i == D.EPreviewMode_EditBackground,
                  [m]: t.collapse_header_space,
                }),
                children:
                  i === D.EPreviewMode_EditBackground && o
                    ? (0, X.jsxs)(X.Fragment, {
                        children: [
                          c,
                          (0, X.jsx)(Fo, {
                            nSectionUniqueID: t.unique_id || n,
                            nTabID: r,
                            salePageBackgroundDerivedConfig: a,
                            backgroundImageEditModel: o,
                          }),
                        ],
                      })
                    : (0, X.jsx)(qo, { onChange: f, children: c }),
              })
            : (0, X.jsx)(X.Fragment, {
                children:
                  i === D.EPreviewMode_EditBackground && o
                    ? (0, X.jsxs)(`div`, {
                        id: l,
                        className: K({
                          [v]: !0,
                          [S]: !0,
                          [m]: t.collapse_header_space,
                        }),
                        children: [
                          c,
                          (0, X.jsx)(Ro, {
                            backgroundImageEditModel: o,
                            nTabID: r,
                            imgGroupDerivedMapping: a,
                          }),
                        ],
                      })
                    : (0, X.jsx)(qo, { onChange: f, children: c }),
              }),
        }),
      })
    : null;
}
export { Bo as t };
