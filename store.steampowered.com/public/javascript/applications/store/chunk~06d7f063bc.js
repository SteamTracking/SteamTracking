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
  J as p,
  K as m,
  Q as h,
  Z as g,
  ct as _,
  ft as v,
  ht as y,
  lt as b,
  mt as x,
  nt as S,
  ot as C,
} from "./chunk~6b8ddcaac8.js";
import { n as ee, r as w, t as T } from "./chunk~4c761eb6f4.js";
import {
  Ct as E,
  I as D,
  J as te,
  Q as ne,
  Tt as re,
  Y as ie,
  Z as ae,
  a as oe,
  bt as se,
  c as ce,
  d as le,
  et as ue,
  f as de,
  l as fe,
  n as pe,
  nt as me,
  o as O,
  r as he,
  s as ge,
  t as _e,
  tt as ve,
  u as ye,
  x as be,
  y as xe,
} from "./chunk~2185942436.js";
import {
  B as Se,
  E as Ce,
  G as we,
  H as Te,
  V as Ee,
  X as De,
  nt as Oe,
  rt as ke,
  z as Ae,
} from "./chunk~b8ca037aae.js";
import { t as je } from "./chunk~f0141d9521.js";
import { T as Me, V as Ne, W as Pe, v as Fe } from "./chunk~f57d770d64.js";
import { a as Ie, cn as Le, ut as Re } from "./chunk~cf3721cc1c.js";
import { n as ze } from "./chunk~16aefcf65f.js";
import "./chunk~8681f5c764.js";
import { i as Be } from "./chunk~2f085f1384.js";
import { a as Ve, o as He } from "./chunk~af36c62e9f.js";
import { t as k } from "./chunk~eefd71512b.js";
import { n as Ue } from "./chunk~331382b23f.js";
import { a as We, i as Ge, r as Ke, t as qe } from "./chunk~91ae5e1167.js";
import {
  E as Je,
  M as Ye,
  f as Xe,
  j as Ze,
  n as Qe,
  p as $e,
  t as et,
  u as tt,
  v as nt,
  y as rt,
} from "./chunk~2f8c67b4de.js";
import { i as it, t as at } from "./chunk~d43c81a658.js";
import { o as ot, s as st } from "./chunk~95ecbf576c.js";
import { a as ct } from "./chunk~5a091db425.js";
import { n as lt } from "./chunk~e70aabe4d7.js";
import { n as ut, t as dt } from "./chunk~710e3cfd2f.js";
import { l as ft } from "./chunk~7b4b9eb713.js";
import { f as pt } from "./chunk~3720b337f3.js";
import {
  a as mt,
  c as ht,
  f as gt,
  h as _t,
  i as vt,
  l as yt,
  m as bt,
  n as xt,
  p as A,
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
  Dl as j,
  Eb as M,
  Fn as N,
  Fu as zt,
  Gl as Bt,
  Ju as Vt,
  Jy as P,
  Kc as Ht,
  Lb as Ut,
  Ou as Wt,
  Pi as Gt,
  Pn as Kt,
  Qx as qt,
  TS as Jt,
  Ux as Yt,
  Uy as Xt,
  Vr as Zt,
  Vy as F,
  Wb as Qt,
  Wy as $t,
  Xc as I,
  Xn as L,
  Xx as en,
  Zx as tn,
  a as nn,
  ar as R,
  as as rn,
  ci as an,
  cl as on,
  cx as z,
  dr as B,
  fn as V,
  jc as sn,
  jx as H,
  kn as U,
  kx as cn,
  mS as W,
  mr as ln,
  or as G,
  qb as un,
  sx as dn,
  t as fn,
  ux as pn,
  vl as mn,
  wc as K,
  xc as hn,
  xr as gn,
  yS as q,
  yo as _n,
  zb as vn,
} from "./main.js";
import { n as yn, t as bn } from "./chunk~ec644f97c6.js";
import { t as xn } from "./chunk~cf8a297cc4.js";
var J = e(i(), 1);
function Sn([e, t, n]) {
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
function Cn([e, t, n]) {
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
function wn(e) {
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
function Tn(e) {
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
function En(e) {
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
function Dn(e) {
  let t = Sn([e.r / 255, e.g / 255, e.b / 255]);
  return { h: t[0], s: t[1], v: t[2], a: e.a };
}
function On(e) {
  let t = Cn([e.h, e.s, e.v]);
  return { r: t[0] * 255, g: t[1] * 255, b: t[2] * 255, a: e.a };
}
var kn = [`hex`, `rgb`, `hsl`];
function Y(e) {
  return Math.round(e * 100) / 100;
}
function An(e) {
  let { r: t, g: n, b: r, a: i } = On(e);
  return { r: Math.round(t), g: Math.round(n), b: Math.round(r), a: i };
}
function jn(e, t) {
  let { r: n, g: r, b: i, a } = e,
    o = a >= 1;
  switch (t) {
    case `hex`:
      return Tn(e);
    case `rgb`:
      return o ? `rgb(${n}, ${r}, ${i})` : `rgba(${n}, ${r}, ${i}, ${Y(a)})`;
    case `hsl`: {
      let { h: t, s: n, l: r } = En(e),
        i = `${Math.round(t)}, ${Math.round(n * 100)}%, ${Math.round(r * 100)}%`;
      return o ? `hsl(${i})` : `hsla(${i}, ${Y(a)})`;
    }
  }
}
function Mn(e) {
  return `rgba(${e.r}, ${e.g}, ${e.b}, ${Y(e.a)})`;
}
function Nn(e) {
  let t = /^#?([0-9a-f]{3,4})$/i.exec(e)?.[1],
    n = wn(t ? t.replace(/./g, `$&$&`) : e);
  return n && { ...n, a: Y(n.a) };
}
function Pn(e) {
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
var Fn;
function In(e) {
  if (typeof CSS > `u` || !CSS.supports(`color`, e)) return;
  if (Fn === void 0) {
    let e = document.createElement(`canvas`);
    ((e.width = e.height = 1),
      (Fn = e.getContext(`2d`, { willReadFrequently: !0 })));
  }
  let t = Fn;
  if (!t) return;
  (t.clearRect(0, 0, 1, 1),
    (t.fillStyle = `#000000`),
    (t.fillStyle = e),
    t.fillRect(0, 0, 1, 1));
  let [n, r, i, a] = t.getImageData(0, 0, 1, 1).data;
  return { r: n, g: r, b: i, a: Y(a / 255) };
}
function Ln(e) {
  let t = e?.trim();
  if (t) return Nn(t) ?? Pn(t) ?? In(t);
}
var Rn = `FcfcNn7MYQM-`,
  zn = `mBPBMKMRyFc-`,
  Bn = `Wi9Z0cIQBJQ-`,
  Vn = `CG-aPa5ETcg-`,
  Hn = `XqWa8m4TS-o-`,
  Un = `CT-fGhlJtb8-`,
  Wn = `_-1iQ2DUgeIw-`,
  Gn = `_6empc5TVW6c-`,
  Kn = `X3PwdzXulJQ-`,
  qn = `_362FAsYdx9w-`,
  Jn = `f8RIg1qa2ts-`,
  Yn = `IzorRe2k8io-`,
  Xn = `qWqNnw1hGLY-`,
  Zn = `xVJaIlx-dnY-`,
  Qn = `GOiXAHGmWGg-`,
  $n = `CJ0nwSBwrpE-`,
  er = `pS4NM2hdvRk-`,
  tr = `VSND6o6qGDA-`,
  X = o(),
  nr =
    `#000000.#1b1b1b.#333333.#4d4d4d.#666666.#808080.#999999.#b3b3b3.#d9d9d9.#ffffff.#e53935.#fb8c00.#fdd835.#7cb342.#43a047.#00897b.#00acc1.#1e88e5.#8e24aa.#d81b60.#ef9a9a.#ffcc80.#fff59d.#c5e1a5.#a5d6a7.#80cbc4.#80deea.#90caf9.#ce93d8.#f48fb1.#b71c1c.#e65100.#f57f17.#33691e.#1b5e20.#004d40.#006064.#0d47a1.#4a148c.#880e4f`.split(
      `.`,
    ),
  rr = `rgba(255, 255, 255, 1)`,
  ir = `SharedColorPicker_Format`,
  ar = `ColorPickerSampling`,
  or = 0.01,
  sr = 0.1;
function cr(e) {
  let {
      color: t,
      onChange: n,
      strTitle: r,
      disableAlpha: i,
      onSubmit: a,
      children: o,
    } = e,
    [s, c] = (0, J.useState)(() => ur(t, i)),
    l = (0, J.useRef)(void 0);
  (0, J.useEffect)(() => {
    let e = Ln(t);
    !e || (l.current && lr(e, l.current, i)) || c((e) => Z(t, e.h, i) ?? e);
  }, [t, i]);
  let u = (0, J.useCallback)(
      (e) => {
        let t = i ? { ...e, a: 1 } : e;
        c(t);
        let r = An(t);
        ((l.current = r), n(Mn(r)));
      },
      [i, n],
    ),
    d = An(s),
    f = jn({ ...d, a: 1 }, `hex`),
    p = Mn(d);
  return (0, X.jsxs)(`div`, {
    className: K(Rn, `noOpinionatedGlobalStyles`),
    style: {
      "--colorpicker-hue": `hsl( ${s.h}deg 100% 50% )`,
      "--colorpicker-opaque": f,
      "--colorpicker-current": p,
    },
    children: [
      !!r && (0, X.jsx)(`div`, { className: `GEaX-EfeXNg-`, children: r }),
      (0, X.jsx)(pr, { hsva: s, fnSetColor: u }),
      (0, X.jsx)(mr, {
        className: Un,
        strLabel: M.Localize(`#ColorPicker_Hue`),
        nMax: 360,
        nValue: Math.round(s.h),
        strValueText: `${Math.round(s.h)}°`,
        fnSetValue: (e) => u({ ...s, h: e }),
      }),
      !i &&
        (0, X.jsx)(mr, {
          className: `xV4lUfTUFc4-`,
          strLabel: M.Localize(`#ColorPicker_Opacity`),
          nMax: 100,
          nValue: Math.round(s.a * 100),
          strValueText: `${Math.round(s.a * 100)}%`,
          fnSetValue: (e) => u({ ...s, a: e / 100 }),
        }),
      (0, X.jsx)(hr, { hsva: s, disableAlpha: i, fnSetColor: u, onSubmit: a }),
      (0, X.jsx)(_r, {
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
function lr(e, t, n) {
  return (
    e.r === t.r &&
    e.g === t.g &&
    e.b === t.b &&
    (n || Math.abs(e.a - t.a) < 0.01)
  );
}
function ur(e, t) {
  return Z(e, 0, t) ?? Z(rr, 0, t);
}
function Z(e, t, n) {
  let r = Ln(e);
  if (!r) return;
  let i = Dn(n ? { ...r, a: 1 } : r);
  return i.s === 0 || i.v === 0 ? { ...i, h: t } : i;
}
function dr(e) {
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
function fr(e, t, n) {
  let r = e.shiftKey ? sr : or;
  if (e.key === t) return r;
  if (e.key === n) return -r;
}
function pr(e) {
  let { hsva: t, fnSetColor: n } = e,
    r = dr((e, r) => n({ ...t, s: e, v: 1 - r }));
  return (0, X.jsx)(`div`, {
    className: Bn,
    role: `slider`,
    tabIndex: 0,
    "aria-label": M.Localize(`#ColorPicker_SaturationBrightness`),
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    "aria-valuenow": Math.round(t.v * 100),
    "aria-valuetext": `${Math.round(t.s * 100)}%, ${Math.round(t.v * 100)}%`,
    onKeyDown: (e) => {
      let r = fr(e, `ArrowRight`, `ArrowLeft`),
        i = fr(e, `ArrowUp`, `ArrowDown`);
      (r !== void 0 || i !== void 0) &&
        (e.preventDefault(),
        n({ ...t, s: H(t.s + (r ?? 0), 0, 1), v: H(t.v + (i ?? 0), 0, 1) }));
    },
    ...r,
    children: (0, X.jsx)(`div`, {
      className: zn,
      style: { left: `${t.s * 100}%`, top: `${(1 - t.v) * 100}%` },
    }),
  });
}
function mr(e) {
  let {
    className: t,
    strLabel: n,
    nMax: r,
    nValue: i,
    strValueText: a,
    fnSetValue: o,
  } = e;
  return (0, X.jsx)(`div`, {
    className: Vn,
    children: (0, X.jsx)(ze.Root, {
      min: 0,
      max: r,
      value: [i],
      onValueChange: (e) => o(e[0]),
      children: (0, X.jsx)(ze.Track, {
        render: (0, X.jsx)(`div`, { className: K(Hn, t) }),
        children: (0, X.jsx)(ze.Handle, {
          render: (e) =>
            (0, X.jsx)(`span`, {
              ...e,
              className: zn,
              style: { insetInlineStart: `${(i / r) * 100}%` },
              "aria-label": n,
              "aria-valuetext": a,
            }),
        }),
      }),
    }),
  });
}
function hr(e) {
  let { hsva: t, disableAlpha: n, fnSetColor: r, onSubmit: i } = e,
    [a, o] = E(ir),
    s = kn.find((e) => e === a) ?? `hex`,
    [c, l] = (0, J.useState)(void 0),
    u = jn(An(t), s),
    d = c !== void 0 && c.trim() !== `` && !Ln(c),
    f = (e) => {
      l(e);
      let i = Z(e, t.h, n);
      i && r(i);
    },
    p = (e) => {
      (o(e), l(void 0));
    };
  return (0, X.jsxs)(`div`, {
    className: Wn,
    children: [
      (0, X.jsxs)(`div`, {
        className: Gn,
        children: [
          (0, X.jsx)(`div`, { className: Kn, "aria-hidden": !0 }),
          (0, X.jsx)(`input`, {
            className: K(qn, d && `_5Zk11eFAaLo-`),
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
          (0, X.jsx)(gr, { hsva: t, disableAlpha: n, fnSetColor: r }),
        ],
      }),
      d &&
        (0, X.jsx)(`div`, {
          className: `tHsVe8Ptn-s-`,
          children: M.Localize(`#ColorPicker_InvalidColor`),
        }),
      (0, X.jsx)(`div`, {
        className: Yn,
        role: `radiogroup`,
        children: kn.map((e) =>
          (0, X.jsx)(
            `button`,
            {
              type: `button`,
              role: `radio`,
              "aria-checked": e === s,
              className: K(Xn, e === s && `wBwV8sUsuTo-`),
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
function gr(e) {
  let { hsva: t, disableAlpha: n, fnSetColor: r } = e,
    [i, a] = (0, J.useState)(!1);
  (0, J.useEffect)(() => a(`EyeDropper` in window), []);
  let o = async () => {
    let e = document.documentElement;
    e.classList.add(ar);
    try {
      let e = Z((await new window.EyeDropper().open()).sRGBHex, t.h, n);
      e && r({ ...e, a: t.a });
    } catch (e) {
      console.warn(M.Localize(`#Sale_EyeDropperFailed`), e);
    } finally {
      e.classList.remove(ar);
    }
  };
  if (!i) return null;
  let s = M.Localize(`#Sale_BackgroundColorPicker`);
  return (0, X.jsx)(It, {
    toolTipContent: s,
    children: (0, X.jsx)(`button`, {
      type: `button`,
      className: Jn,
      "aria-label": s,
      onClick: o,
      children: (0, X.jsx)(an, {}),
    }),
  });
}
function _r(e) {
  let { strCurrentHex: t, bOpaque: n, fnPick: r } = e;
  return (0, X.jsx)(`div`, {
    className: Zn,
    role: `group`,
    "aria-label": M.Localize(`#ColorPicker_Palette`),
    children: nr.map((e) => {
      let i = n && e === t;
      return (0, X.jsx)(
        `button`,
        {
          type: `button`,
          className: K(Qn, i && `wBwV8sUsuTo-`),
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
var vr = J.createContext(void 0);
function yr(e) {
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
      children: (0, X.jsx)(cr, {
        color: t,
        disableAlpha: i,
        strTitle: a ?? M.Localize(`#Button_Color`),
        onChange: f,
        onSubmit: p,
        children: (0, X.jsxs)(`div`, {
          className: $n,
          children: [
            (0, X.jsx)(`button`, {
              type: `button`,
              className: K(er, tr),
              onClick: p,
              children: M.Localize(`#Button_Save`),
            }),
            (0, X.jsx)(`button`, {
              type: `button`,
              className: er,
              onClick: r,
              children: M.Localize(`#Button_Cancel`),
            }),
          ],
        }),
      }),
    })
  );
}
function br(e, t, n) {
  let r = t.bLivePreview ?? !0,
    i = r ? n?.fnSnapshot() : void 0,
    a = null,
    o = !1,
    s = (0, X.jsx)(yr, {
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
function xr() {
  let e = (0, J.useContext)(vr);
  return { openColorPicker: (0, J.useCallback)((t, n) => br(t, n, e), [e]) };
}
var Sr = `Vvgd20dCqjc-`;
function Cr(e) {
  let { eventModel: t } = e,
    { data: n } = Le(t.clanSteamID.GetAccountID());
  if (!n || (!n.can_edit && !n.support_user) || vn() == `community`) return;
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
    return (0, X.jsx)(`div`, {
      className: Sr,
      children: (0, X.jsxs)(`div`, {
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
      }),
    });
}
var wr = `_4rizx-X0oWo-`;
function Tr(e) {
  return (
    !e.jsondata.sale_logo_cross_promo_only &&
    (e.jsondata.localized_sale_logo?.filter(Boolean).length ?? 0) > 0
  );
}
function Er(e) {
  let { eventModel: t, language: n } = e,
    [r, i] = f(() => [
      t.jsondata.sale_logo_url,
      Xt.GetWithFallback(t.jsondata.localized_sale_logo, n),
    ]);
  return i && i?.length > 0
    ? r
      ? (0, X.jsx)(`a`, {
          className: wr,
          href: z.STORE_BASE_URL + r,
          children: (0, X.jsx)(Dr, { ...e }),
        })
      : (0, X.jsx)(`div`, {
          className: K(wr, `SalePageLogoCtn`),
          children: (0, X.jsx)(Dr, { ...e }),
        })
    : null;
}
function Dr(e) {
  let { eventModel: t, language: n } = e,
    r = lt(t, `sale_logo`, n);
  return (0, X.jsx)(`img`, { src: r, alt: `logo` });
}
var Or = `_1Bceni0-cAw-`;
function kr(e) {
  let { strURL: t } = e;
  return t
    ? (0, X.jsx)(`div`, {
        className: Or,
        children: (0, X.jsx)(`img`, { alt: ``, src: t }),
      })
    : null;
}
function Ar(e) {
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
            h,
            y[`CustomStyle_${t.jsondata.sale_vanity_id}`],
            `SaleBackground`,
            x,
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
function jr(e) {
  let {
      event: t,
      language: n,
      children: r,
      bIsPreview: i,
      personalizedCarousels: a,
    } = e,
    o = J.useRef(null),
    s = lt(t, `sale_header`, n),
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
      t.jsondata.item_source_type === Fe.k_EContentHub &&
      ((t.jsondata.sale_vanity_id &&
        t.jsondata.sale_vanity_id.includes(`contenthubsalepage_`)) ||
        l),
    d = s ? `url(${s})` : `none`;
  return (0, X.jsxs)(X.Fragment, {
    children: [
      c
        ? (0, X.jsx)(te, {
            event: t,
            language: n,
            bIsPreview: i,
            subMenu: c,
            styleVariation: ie.k_SubMenu,
            personalizedCarousels: a,
          })
        : (0, X.jsx)(kr, { strURL: s }),
      (0, X.jsx)(`div`, {
        className: K({ SaleBackgroundCtn: !0, ContentHubSalePage: u }),
        children: (0, X.jsxs)(`div`, {
          className: K(
            y[`CustomStyle_${t.jsondata.sale_vanity_id}`],
            `SaleCustomCSS`,
            h,
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
                  className: K(Je, et, Qe),
                  src: s,
                  alt: `Header`,
                })
              : (0, X.jsx)(`div`, {
                  className: K(Je, et),
                  style: {
                    backgroundImage: d,
                    backgroundRepeat: t.jsondata.sale_background_repeat,
                  },
                }),
            (0, X.jsx)(Ar, { event: t, bIsPreview: i }),
            (0, X.jsx)(X.Fragment, { children: r }),
          ],
        }),
      }),
    ],
  });
}
var Mr = e(r()),
  Nr = e(d());
function Pr(e) {
  let { nSectionID: t, children: n } = e,
    [r, i] = J.useState(!1),
    [a, o] = J.useState(!1);
  J.useEffect(() => {
    ae.Get().SetMouseOverSection(t, r);
  }, [t, r]);
  let s = f(() => ae.Get().GetMouseOverSectionID()),
    c = t && t == s,
    l = () => ae.Get().JumpToSection(t),
    u = J.useRef(null);
  return (
    ue((e) => t == e && (u.current?.scrollIntoView(), o(!0), !0)),
    (0, X.jsxs)(`div`, {
      ref: u,
      className: K({ [b]: !0, [m]: !!c, [p]: !!a }),
      onAnimationEnd: () => o(!1),
      onMouseEnter: () => i(!0),
      onMouseLeave: () => i(!1),
      children: [
        r &&
          (0, X.jsx)(It, {
            toolTipContent: P(`#Sale_SaleEditor_JumpTo_ttip`),
            direction: `top`,
            children: (0, X.jsx)(`button`, {
              className: `BxPO-muNnTI-`,
              onClick: l,
              children: (0, X.jsx)(_n, {}),
            }),
          }),
        n,
      ],
    })
  );
}
var Fr = `oj4yraCGjDk-`,
  Ir = `oBMBeb6Ow8M-`;
function Lr(e) {
  let { rgPresenters: t } = e;
  if (!t || t.length == 0) return null;
  let n = q(z.LANGUAGE);
  return t.length == 1
    ? (0, X.jsx)(`div`, {
        className: K(Fr, `PresenterDisclaimer`),
        children: M.LocalizeReact(
          `#SalePresented_By`,
          (0, X.jsx)(Rr, { presentor: t[0], lang: n }),
        ),
      })
    : (0, X.jsx)(`div`, {
        className: K(Fr, `PresenterDisclaimer`),
        children: M.LocalizeReact(
          `#SalePresented_By_Multi`,
          t
            .slice(0, t.length - 1)
            .map((e, r) =>
              (0, X.jsxs)(
                J.Fragment,
                {
                  children: [
                    (0, X.jsx)(Rr, { presentor: e, lang: n }),
                    t.length > 2 && `, `,
                  ],
                },
                e.url,
              ),
            ),
          (0, X.jsx)(Rr, { presentor: t[t.length - 1], lang: n }),
        ),
      });
}
function Rr(e) {
  let { presentor: t, lang: n } = e,
    r = Vt(t.url);
  return (0, X.jsx)(Rt, {
    href: r,
    bUseLinkFilter: !0,
    className: Ir,
    children: Xt.GetWithFallback(t.localized_presenter_name, n),
  });
}
function zr(e) {
  let t = q(un.LANGUAGE),
    n = ke(t),
    r = [...new Set(e.flatMap((e) => pt(e) || []))].join(`,`),
    i = J.useMemo(() => (r ? r.split(`,`) : []), [r]),
    a = u({ queries: i.map((e) => Oe(e, t, n)), combine: Br });
  return J.useCallback(
    (e) => {
      let t = pt(e),
        n = t ? i.indexOf(t) : -1;
      return n >= 0 ? a[n] : void 0;
    },
    [i, a],
  );
}
function Br(e) {
  return e.map((e) => e.data);
}
function Vr(e) {
  let { event: t, broadcastEmbedContext: n } = e,
    r = !!t?.jsondata?.broadcast_display_wide_player,
    i = !!t?.jsondata?.broadcast_dispaly_wide_player_allow_chat;
  return (0, X.jsx)(X.Fragment, {
    children:
      !!(
        t.BEventCanShowBroadcastWidget() && t.BSaleShowBroadcastAtTopOfPage()
      ) &&
      (0, X.jsx)(de, {
        event: t,
        broadcastEmbedContext: n,
        bWideBroadcastDisplay: r,
        bWideBroadcastPermitChat: i,
      }),
  });
}
var Hr = `Fh-jFuR9Yvo-`,
  Ur = `_4rNPfhfRBrc-`,
  Wr = `Bc2anSpsdzg-`,
  Gr = `HxVKtqJLU2k-`,
  Kr = `_4oPueAzMcGE-`,
  qr = `kqyJu6iojzM-`,
  Jr = `UhkkMgNIeQo-`,
  Yr = `YSYpQ5wCRA0-`,
  Xr = `gOxlo3KMChI-`,
  Zr = `WUODlv8V5dM-`,
  Qr = `_7grqK8KjlHk-`;
function $r(e, t) {
  return e ? (t ? !!e.valve_admin : !!(e.valve_admin || e.support_user)) : !1;
}
function ei(e, t) {
  let n = !!(e && e.BIsClanAccount()),
    { data: r } = Le(n ? e.GetAccountID() : 0);
  return n && $r(r, t);
}
function ti(e) {
  let { clanSteamID: t, id: n } = e;
  return ei(t, e.requireAdmin)
    ? (0, X.jsx)(`div`, {
        id: n,
        className: K(e.className, e.requireAdmin ? Ze : Ye),
        children: e.children,
      })
    : null;
}
var ni = 12,
  ri = 240;
function ii(e) {
  let { event: t } = e,
    [n] = re(Pe, void 0),
    [r, i] = J.useState(!1),
    a = At(`rgMLRecommenderWishlist`, `application_config`),
    o = Array.isArray(a) && a.length > 0 && Number.isInteger(a[0]);
  return !t.BIsNextFest() || !o || n == Ne.Random || Me(t) > 0
    ? null
    : (0, X.jsxs)(ti, {
        clanSteamID: t.clanSteamID,
        className: Hr,
        children: [
          (0, X.jsxs)(on, {
            className: Ur,
            onClick: () => i(!r),
            children: [r ? `▼` : `▶`, ` Next Fest personalized order (VO)`],
          }),
          r && (0, X.jsx)(ai, { event: t, rgRecommendedAppIDs: a }),
        ],
      });
}
function ai(e) {
  let { event: t, rgRecommendedAppIDs: n } = e,
    [r, i] = J.useState(void 0);
  Tt(n, Dt);
  let [a, o] = J.useState(void 0),
    [s, c] = J.useState(``),
    l = t.jsondata.sale_ml_recommender_weight_exponent || 2.5,
    u = parseFloat(s),
    d = a ?? le(t),
    f = u || l,
    p = J.useMemo(() => ye(n, n, (e) => e, d, f), [n, d, f]),
    m = J.useMemo(() => new Map(n.map((e, t) => [e, t])), [n]),
    h = J.useMemo(() => new Map(p.map((e, t) => [e, t])), [p]),
    g = n.length,
    _ = (e) => m.get(e) ?? 0,
    v = (e) => h.get(e) ?? 0,
    y = (e) => Bt.Get().GetApp(e)?.GetName() ?? `App ${e}`,
    b = (e) => `hsl(${Math.round((240 * _(e)) / g)}, 80%, 65%)`,
    x = (e, t) =>
      (0, X.jsx)(
        `div`,
        {
          className: K(Qr, r == e && `It6LJnFk-X8-`),
          style: { height: ni, color: b(e) },
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
          y1: (_(e) + 0.5) * ni,
          x2: ri,
          y2: (v(e) + 0.5) * ni,
          stroke: t ? `white` : b(e),
          strokeWidth: t ? 2 : 1,
          strokeOpacity: t ? 1 : r === void 0 ? 0.6 : 0.15,
        },
        e,
      );
  return (0, X.jsxs)(`div`, {
    className: Wr,
    children: [
      (0, X.jsxs)(`div`, {
        className: Gr,
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
        className: Kr,
        children: [
          (0, X.jsx)(R, {
            className: qr,
            onClick: () => o(cn()),
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
                className: Jr,
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
        className: Yr,
        onMouseLeave: () => i(void 0),
        children: [
          (0, X.jsxs)(`div`, {
            className: Xr,
            children: [
              (0, X.jsx)(`div`, {
                className: Zr,
                children: `Recommended order`,
              }),
              n.map((e, t) => x(e, `#${t + 1} ${y(e)}`)),
            ],
          }),
          (0, X.jsxs)(`div`, {
            className: Xr,
            children: [
              (0, X.jsx)(`div`, { className: Zr, children: `\xA0` }),
              (0, X.jsxs)(`svg`, {
                width: ri,
                height: g * ni,
                children: [
                  n.filter((e) => e != r).map((e) => S(e, !1)),
                  r !== void 0 && m.has(r) && S(r, !0),
                ],
              }),
            ],
          }),
          (0, X.jsxs)(`div`, {
            className: Xr,
            children: [
              (0, X.jsx)(`div`, { className: Zr, children: `Shuffled order` }),
              p.map((e) => x(e, `#${_(e) + 1} ${y(e)}`)),
            ],
          }),
        ],
      }),
    ],
  });
}
function oi(e) {
  let { event: t, fnOnChangeDayIndex: n, addtionalAdminButtons: r } = e;
  return (0, X.jsxs)(X.Fragment, {
    children: [
      (0, X.jsx)(ii, { event: t }),
      (0, X.jsx)(Ot, {
        eventModel: t,
        fnOnUpdateSaleDayIndex: n,
        addtionalAdminButtons: r,
        bSupportsSticky: !0,
      }),
    ],
  });
}
var si = new Map();
function ci(e, t) {
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
function li(e, t, n) {
  let r = new Map(),
    i = new Map(),
    a = new Map(),
    o,
    s,
    c = 0,
    { selectedTabBackgroundDef: l, nTabSaleSectionIndex: u } = ci(t, n);
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
            Ce(n, o)
              ? (u.push(c),
                i.set(c, s.background_id),
                r === 0 && a.set(c, s.background_id))
              : --r;
          }
          let d = e;
          for (; d < t.length && !Ce(n, t[d]);) d += 1;
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
              Ce(n, e) && i.set(e.unique_id, s.background_id);
            }
        });
        e < t.length && !Ce(n, t[e]);
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
function ui(e, t, n, r) {
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
      fi,
      {
        eventModel: e,
        displayDef: i,
        derivedGroupInfo: t.derivedGroupInfo,
        children:
          i && i.randomize_section_order && n !== O.EPreviewMode_EditBackground
            ? (0, X.jsx)(di, {
                clanEventGID: e.GID,
                elSaleSections: t.elSaleSections,
              })
            : t.elSaleSections,
      },
      `background_group_` + t.groupID,
    )
  );
}
function di(e) {
  let { clanEventGID: t, elSaleSections: n } = e,
    [r, i] = E(`sale_section_seed_${t}`, cn());
  if (!n || n.length === 0) return null;
  if (n.length > 1 && r !== void 0) {
    let e = Ft(r);
    return (0, X.jsx)(X.Fragment, { children: tn(n, 0, e) });
  }
  return (0, X.jsx)(X.Fragment, { children: n });
}
function fi(e) {
  let { displayDef: t, children: n, eventModel: r, derivedGroupInfo: i } = e,
    a = We(),
    o = J.useCallback(
      (e, t) => {
        si.set(i.nBackgroundGroupID, t);
      },
      [i],
    ),
    s = jt(o);
  if (!n || (Array.isArray(n) && n.length == 0)) return null;
  if (!t) return (0, X.jsx)(X.Fragment, { children: n });
  let c;
  if (t.localized_background_art) {
    let e = W(a),
      n =
        e in t.localized_background_art
          ? e
          : $t.GetLanguageFallback(z.LANGUAGE),
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
function pi(e) {
  return typeof e == `string` || typeof e == `number` ? e : JSON.stringify(e);
}
var mi = class {
    Keyify = (e) => pi(e);
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
  hi = `H8RsG3p9zyI-`,
  gi = `-ayc8iJmBgg-`,
  _i = `_6D2hAhDIwmY-`,
  vi = `ZP-iX4isxNw-`,
  yi = `AzJ42SXvU7g-`,
  bi = `DKOEqISmqI8-`,
  xi = `TMYfiVXl17Q-`,
  Si = `j5T-MrFgQ20-`,
  Ci = class e {
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
        (await Nr.default.get(i, { params: a, cancelToken: e && e.token })).data
          .success == 1
      );
    }
    SetPrimaryImageForImageGroup(e, t) {
      (this.m_curLocImageGroup &&
        this.m_curLocImageGroup.primaryImage.imageid == e.imageid &&
        t == this.m_curLocImageGroupType) ||
        ((this.m_curLocImageGroup = { primaryImage: e, localized_images: [] }),
        (this.m_curLocImageGroupType = t),
        (this.m_curLocImageGroup.localized_images = en(
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
Ut([t], Ci.prototype, `m_curLocImageGroup`, void 0);
var Q = new Ci();
function wi(e, t) {
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
    Mr.createPortal(
      (0, X.jsx)(`form`, {
        onSubmit: Ei,
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
function Ti(e) {
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
      onDragOver: t ? Ei : void 0,
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
function Ei(e) {
  e.preventDefault();
}
var Di = `wxWVRBKbQ6Y-`,
  Oi = `_1hQVgn9Glyw-`,
  ki = `OQ-ETv0yIhg-`,
  Ai = `wVGLukava5E-`;
function ji(e) {
  let {
      onDropFiles: t,
      renderDesciption: n,
      elAdditonalButtons: r,
      elOverrideDragAndDropText: i,
    } = e,
    [a, o] = Ti(t),
    [s, c] = wi(t, {
      accept: `image/png, image/jpeg, image/gif, image/webp`,
      multiple: !0,
    });
  return (0, X.jsxs)(`div`, {
    ...a,
    className: K(o ? Oi : Di, `DragAndDropContainer`),
    children: [
      n?.(),
      (0, X.jsx)(`div`, { children: i || P(`#ImagePicker_DragAndDrop`) }),
      (0, X.jsxs)(`div`, {
        className: ki,
        children: [
          s,
          (0, X.jsxs)(`label`, {
            onClick: c,
            children: [
              (0, X.jsxs)(`span`, {
                children: [P(`#ImagePicker_OrBrowse`), ` `],
              }),
              (0, X.jsx)(`span`, {
                className: Ai,
                children: P(`#selectimage_select_file`),
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
var Mi = `_5RINCHFuy0Y-`,
  Ni = `GWe0Hc-fT2A-`,
  Pi = `Wmeqy6nXS1Y-`,
  Fi = `_698Kbr-wNSM-`,
  Ii = `_4l0OY5qTFkk-`,
  Li = `_4StKqHsfdjg-`,
  Ri = `dp7SyRphVOo-`,
  zi = `OoUlU8pBBN4-`;
function Bi(e) {
  let {
      imageUploader: t,
      fnUploadComplete: n,
      elOverrideDragAndDropText: r,
      forceResolution: i,
      elAdditonalButtons: a,
      rgRealmList: o,
    } = e,
    [s, c] = f(() => [t.GetUploadImages(), Ge.Get().GetCurEditLanguage()]),
    l = J.useCallback(
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
                N(
                  (0, X.jsx)(Nt, {
                    strDescription: P(`#ImagePicker_Error`, i.name),
                  }),
                  window,
                )));
          } catch (e) {
            let t = Lt(e);
            (console.error(
              `ImageUploaderPanel.OnDropFiles: ` + t.strErrorMsg,
              t,
            ),
              N(
                (0, X.jsx)(Nt, {
                  strDescription: P(`#EventError_Code`, t.strErrorMsg ?? ``),
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
    (0, X.jsxs)(ji, {
      onDropFiles: l,
      elAdditonalButtons: u,
      elOverrideDragAndDropText: r,
      children: [
        (0, X.jsx)(J.Fragment, {
          children: (0, X.jsx)(`div`, {
            className: Ni,
            children: s.map((e) =>
              (0, X.jsx)(
                Hi,
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
        (0, X.jsx)(Vi, {
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
function Vi(e) {
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
    className: Pi,
    children: [
      !!r.length &&
        (0, X.jsx)(R, {
          style: { margin: `8px` },
          onClick: n,
          disabled: !i,
          children: P(`#ImageUpload_Upload`),
        }),
      !!r.length &&
        (0, X.jsx)(R, {
          style: { margin: `8px` },
          onClick: t.ClearImages,
          disabled: a,
          children: P(`#ImageUpload_Clear`),
        }),
    ],
  });
}
var Hi = l(Ui);
function Ui(e) {
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
        Kt(r, n, `CropModal`, { strTitle: P(`#ImageUpload_CropModalTitle`) });
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
          ((t += ` ${P(`#ImageUpload_Deprecated`)}`),
          (r = P(`#ImageUpload_Deprecated_ttip`))));
      let i;
      return (
        (n.BIsOriginalMinimumDimensions(e) && n.FileTypeMatchesImageTypes(e)) ||
          (i = Mi),
        { label: t, data: e, strOptionClass: i, tooltip: r }
      );
    }).filter((e) => !e.data.bHiddenFromDropdown),
    o = {
      pending: P(`#ImageUpload_Pending`),
      waiting: P(`#ImageUpload_Waiting`),
      uploading: P(`#ImageUpload_Uploading`),
      processing: P(`#ImageUpload_Processing`),
      success: P(`#ImageUpload_SuccessCard`),
      failed: P(`#ImageUpload_Failed`),
    },
    s = n.BSupportsLanguages()
      ? Ki($t.GetLanguageListForRealms(i ?? [Jt.k_ESteamRealmGlobal]))
      : null,
    c = n.IsValidAssetType(e.forceResolution, e.forceFileType),
    l = n.status == `pending`,
    u = o[n.status];
  n.status == `pending` &&
    (c.needsCrop
      ? (u = P(`#ImageUpload_NeedsCrop`))
      : c.error && (u = P(`#ImageUpload_Invalid`)));
  let d,
    f = n.GetCurrentImageOption();
  return (
    f && (d = a?.find((e) => e.data.sKey == f.sKey)?.data),
    (d ||= a?.[0]?.data),
    (0, X.jsxs)(`div`, {
      className: Li,
      children: [
        (0, X.jsx)(`div`, {
          className: Fi,
          onClick: () => r(n),
          children: (0, X.jsx)(hn, {}),
        }),
        (0, X.jsx)(Wi, { asset: n }),
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
          className: K({ [nt]: !0, [Ii]: n.status == `failed` }),
          children: [
            u,
            Ct(n.status) &&
              (0, X.jsx)(`div`, {
                className: `RPxGbDpMPvc-`,
                children: (0, X.jsx)(k, { size: `small` }),
              }),
          ],
        }),
        (0, X.jsx)(`div`, { className: Ii, children: n.message }),
        l &&
          c.error &&
          (0, X.jsx)(`div`, { className: `_4l0OY5qTFkk-`, children: c.error }),
        l &&
          c.needsCrop &&
          (0, X.jsx)(ln, {
            onClick: () => t(n),
            children: P(`#ImageUpload_OpenEditor`),
          }),
      ],
    })
  );
}
function Wi(e) {
  let { asset: t } = e;
  return t.BIsVideo()
    ? (0, X.jsxs)(`div`, {
        className: Ri,
        onClick: (e) => N((0, X.jsx)(Gi, { asset: t }), zt(e)),
        children: [
          (0, X.jsxs)(`span`, {
            className: zi,
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
        className: Ri,
        style: { backgroundImage: `url(${t.dataUrl})` },
        children: (0, X.jsxs)(`span`, {
          className: zi,
          children: [t.width, ` x `, t.height],
        }),
      });
}
function Gi(e) {
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
function Ki(e) {
  let t = [],
    n = [];
  for (let t of e) {
    if (t == 25) continue;
    let e = P(`#Language_` + W(t));
    n.push({ label: e, data: t });
  }
  return (
    n.sort((e, t) => e.label.localeCompare(t.label)),
    n.forEach((e) => t.push({ label: e.label, data: e.data })),
    n
  );
}
var qi = (function (e) {
    return (
      (e[(e.k_eInsertThumbnail = 1)] = `k_eInsertThumbnail`),
      (e[(e.k_eInsertFullImage = 2)] = `k_eInsertFullImage`),
      (e[(e.k_eShowImageGroup = 3)] = `k_eShowImageGroup`),
      (e[(e.k_eInsertVideo = 4)] = `k_eInsertVideo`),
      e
    );
  })({}),
  Ji = `MBOGLVBsJno-`,
  Yi = `W-3Dq3-54Lg-`,
  Xi = `quLSuE3pc1o-`,
  Zi = `lnTEZ3RD-vc-`,
  Qi = `kpa9FPV-AL0-`,
  $i = `n8uggtUd8lI-`,
  ea = `PNoxLvZvnxs-`,
  ta = `iGpmTErZND8-`,
  na = `hAZUPjOGGxE-`,
  ra = `crDJadcMi8A-`,
  ia = `AmP7BU2J8Pw-`;
function aa(e) {
  let { fnSetImageSearch: t } = e,
    n = (0, J.useRef)(null);
  return (0, X.jsx)(`div`, {
    className: ia,
    children: (0, X.jsx)(`input`, {
      ref: n,
      className: ra,
      type: `text`,
      placeholder: P(`#ImagePicker_Search`),
      onChange: (e) => t(e.currentTarget.value),
      onKeyDown: (e) => {
        e.key == `Escape` && (t(``), n.current && (n.current.value = ``));
      },
    }),
  });
}
var oa = J.memo(function (e) {
  let {
    fileNameSearch: t,
    clanAccountID: n,
    imageInsertCallBack: r,
    fnOnExpandImage: i,
    showImageActions: a = !0,
    InternalOpenLocalizeImageGroup: o,
  } = e;
  return (0, X.jsx)(sa, {
    clanAccountID: n,
    fileNameSearch: t,
    children: (e, t) =>
      e.map((e) =>
        (0, X.jsx)(
          ca,
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
function sa(e) {
  let { clanAccountID: t, fileNameSearch: n, children: r } = e,
    i = bt(t),
    a = n.trim().toLowerCase() || ``,
    o = A.GetFilteredClanImagesList(i, a);
  if (o.length == 0) {
    let e = F.InitFromClanID(t, z.EUNIVERSE),
      n = A.GetLoadState(e);
    return n && n.loaded
      ? (0, X.jsx)(
          `div`,
          {
            className: Qi,
            children:
              a.length > 0
                ? P(`#ImagePicker_EmptySearch`)
                : P(`#ImagePicker_Empty`),
          },
          `ImagePicker_Result`,
        )
      : n && n.errMsg
        ? (0, X.jsx)(
            `div`,
            { className: $i, children: P(`#ImagePicker_Error`, n.errMsg) },
            `ImagePicker_Result`,
          )
        : (0, X.jsx)(
            `div`,
            { className: Qi, children: P(`#Loading`) },
            `ImagePicker_Result`,
          );
  }
  return r(o, a);
}
function ca(e) {
  let {
      clanImage: t,
      searchStringHilight: n,
      imageInsertCallBack: r,
      OnImageClick: i,
      showImageActions: a,
      fnOnOpenLocalizedImageGroup: o,
    } = e,
    [s, c] = J.useState(!1),
    l = () => r(t, qi.k_eInsertFullImage),
    u = () => r(t, qi.k_eInsertVideo),
    d = () => r(t, qi.k_eInsertThumbnail),
    f = (e) => {
      t.url &&
        (e.dataTransfer.setData(`text`, t.url),
        A.GetClanImageDragListener().forEach((e) => {
          e(F.InitFromClanID(t.clanAccountID, z.EUNIVERSE), !0);
        }));
    },
    p = (e) => {
      t.url &&
        A.GetClanImageDragListener().forEach((e) => {
          e(F.InitFromClanID(t.clanAccountID, z.EUNIVERSE), !1);
        });
    },
    m = (e) => {
      N(
        (0, X.jsx)(U, {
          strTitle: P(`#ImagePicker_DeleteImageTitle`),
          strDescription: ``,
          onOK: g,
          onCancel: _,
          closeModal: _,
          children: (0, X.jsxs)(J.Fragment, {
            children: [
              (0, X.jsx)(`div`, {
                children: P(`#ImagePicker_DeleteAreYouSure`, t.file_name ?? ``),
              }),
              (0, X.jsx)(`br`, {}),
              (0, X.jsx)(`br`, {}),
              (0, X.jsx)(`div`, { children: P(`#ImagePicker_DeleteWarning`) }),
            ],
          }),
        }),
        zt(e) ?? window,
      );
    },
    h = (e) => {
      (console.log(`ClanImageWrapper on delete error: ` + e),
        N(
          (0, X.jsx)(Nt, {
            strTitle: P(`#Error_FailureNotice`),
            strDescription: P(`#EventDisplay_DeleteEvent_Error`),
            children: (0, X.jsx)(`p`, { children: e }),
          }),
          window,
        ));
    },
    g = () => {
      c(!0);
      let e = F.InitFromClanID(t.clanAccountID, z.EUNIVERSE);
      A.DeleteClanImage(e, t)
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
    b = Ke(n, y, String(t.imageid), ea),
    x = w.BIsClanImageVideo(t),
    S = a && !s && !x,
    C = a && !s && !x,
    ee = a && !s && x,
    T = a && !s && !x;
  return (0, X.jsx)(ut, {
    placeholderHeight: `100vh`,
    className: Ji,
    rootMargin: `0px 0px 100% 0px`,
    children: (0, X.jsxs)(`div`, {
      className: ta,
      children: [
        (0, X.jsx)(`div`, {
          className: Yi,
          style: { backgroundImage: x ? `` : `url( '${t.thumb_url}' )` },
          draggable: !0,
          onDragStart: f,
          onDragEnd: p,
          onDoubleClick: l,
          onClick: v,
          children: (0, X.jsx)(ua, { clanImage: t, className: Xi }),
        }),
        S &&
          (0, X.jsx)(`span`, {
            className: `escPuFxqCbM-`,
            onClick: l,
            children: P(`#ImagePicker_FullSize`),
          }),
        s && (0, X.jsx)(k, { size: `medium`, className: `_9dVXPw6twXc-` }),
        C &&
          (0, X.jsx)(`span`, {
            className: `_9em3bZdejR0-`,
            onClick: d,
            children: P(`#ImagePicker_Thumbnail`),
          }),
        T &&
          o &&
          (0, X.jsx)(la, {
            bDeleting: s,
            clanImage: t,
            fnOnOpenLocalizedImageGroup: o,
          }),
        ee &&
          (0, X.jsx)(`span`, {
            className: `escPuFxqCbM-`,
            onClick: u,
            children: P(`#ImagePicker_Video`),
          }),
        !s &&
          (0, X.jsx)(`span`, {
            className: `LzW73RDKl40-`,
            onClick: m,
            children: (0, X.jsx)(`img`, {}),
          }),
        (0, X.jsx)(`div`, { className: Zi, title: y, children: b }),
      ],
    }),
  });
}
function la(e) {
  let { clanImage: t, fnOnOpenLocalizedImageGroup: n, bDeleting: r } = e,
    { data: i } = Le(t.clanAccountID);
  return r || !i?.valve_admin
    ? null
    : (0, X.jsx)(`span`, {
        className: K(na, Ye),
        onClick: () => n?.(t),
        children: `(VO) ` + P(`#ImagePicker_Localized`),
      });
}
function ua(e) {
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
function da(e) {
  let { clanSteamID: t, closeModal: n, OnClanImageSelected: r } = e,
    i = J.useCallback(
      (e, t) => {
        (r?.(e, t), n?.());
      },
      [r, n],
    ),
    [a, o] = J.useState(``);
  return (0, X.jsxs)(U, {
    strTitle: P(`#ImagePicker_Images`),
    strDescription: P(`#ImagePicker_DoubleClickToSelect`),
    bAlertDialog: !0,
    onOK: n,
    onCancel: n,
    children: [
      (0, X.jsx)(aa, { fnSetImageSearch: o }),
      (0, X.jsx)(oa, {
        clanAccountID: t.GetAccountID(),
        fileNameSearch: a,
        imageInsertCallBack: i,
        showImageActions: !1,
      }),
    ],
  });
}
function fa(e) {
  let { clanSteamID: t, OnClanImageSelected: n } = e;
  return (0, X.jsxs)(`div`, {
    className: ki,
    children: [
      (0, X.jsxs)(`label`, {
        htmlFor: `clanimagedialog`,
        children: [
          (0, X.jsxs)(`span`, {
            children: [P(`#ImagePicker_PreviousImages`), ` `],
          }),
          (0, X.jsx)(`span`, {
            className: Ai,
            children: P(`#ImagePicker_PreviousImages2`),
          }),
        ],
      }),
      (0, X.jsx)(`input`, {
        style: { display: `none` },
        id: `clanimagedialog`,
        type: `button`,
        onClick: (e) => {
          N(
            (0, X.jsx)(da, { clanSteamID: t, OnClanImageSelected: n }),
            zt(e) ?? window,
          );
        },
      }),
    ],
  });
}
function pa(e) {
  let {
      clanSteamID: t,
      rgSupportArtwork: n,
      localizedPrimaryImage: r,
      bAllowPreviousClanImageSelection: i,
      fnSetImageURL: a,
      rgRealmList: o,
    } = e,
    [s] = f(() => [Ge.Get().GetCurEditLanguage()]),
    c = xt(t, n, r),
    l = e.uploaderOverride || c,
    [u, d] = J.useState(!1),
    p = J.useCallback(
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
              N(
                (0, X.jsx)(Nt, {
                  strDescription: P(`#EventError_Code`, t.strErrorMsg ?? ``),
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
                  fa,
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
          let r = A.GetClanImageByImageHash(t, e?.image_hash ?? ``),
            i = n.image.GetCurrentImageOption();
          if (r && i) {
            let e = vt(n.image.language, s, o);
            a(i.artworkType, r, e);
          }
        }
      }
    };
  return (0, X.jsx)(Bi, {
    ...e,
    imageUploader: l,
    rgRealmList: o,
    elAdditonalButtons: u
      ? [
          (0, X.jsx)(
            k,
            { position: `center`, size: `medium`, string: P(`#Loading`) },
            `throbbing`,
          ),
        ]
      : m,
    fnUploadComplete: h,
  });
}
var ma = `x0kXRDaNEsY-`,
  ha = `tggLx72V-Ck-`,
  ga = `DVwf02s2GtI-`,
  _a = `zREkqfL42-U-`,
  va = `_7zBg1-UuADM-`,
  ya = `TMQhyilc41c-`,
  ba = `t2inDYSKOto-`,
  xa = `-FHzhwwvQvA-`,
  Sa = `ZUy8iSsvilc-`,
  Ca = `XRZj1OeBHRk-`,
  wa = `_2lViMA09hm4-`,
  Ta = `BTC1IyUleCA-`,
  Ea = `lEWE2I7Rsj8-`,
  Da = `_12sYjoMc9wE-`,
  Oa = `_8hs8sf5-YPQ-`,
  ka = `Hy2GxVyZVDA-`;
function Aa(e) {
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
    strTitle: P(`#selectimage_change_artwork_lang_title`),
    strDescription: P(`#selectimage_change_artworl_lang_desc`),
    onOK: () => i?.(t, r, s),
    onCancel: n,
    closeModal: n,
    children: (0, X.jsxs)(`div`, {
      className: K(nt, ha),
      children: [
        (0, X.jsx)(`div`, {
          className: ga,
          children: (0, X.jsx)(`img`, { className: ma, src: u }),
        }),
        (0, X.jsx)(qe, {
          selectedLang: s,
          fnLangHasData: o,
          fnOnLanguageChanged: c,
          realms: a,
        }),
      ],
    }),
  });
}
function ja(e) {
  if (!e) return e;
  let t = e.lastIndexOf(`.`);
  return t === -1 ? e : e.substring(0, t);
}
var Ma = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAFo9M/3AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzcyREYxMUExREVBMTFFOUJFQTREQjZGQTJEQ0UzOTMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzcyREYxMUIxREVBMTFFOUJFQTREQjZGQTJEQ0UzOTMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NzJERjExODFERUExMUU5QkVBNERCNkZBMkRDRTM5MyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NzJERjExOTFERUExMUU5QkVBNERCNkZBMkRDRTM5MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pmk/vzIAAAFiSURBVHjaYnz79i0DCDAB8X8gVgUIIEaoSBmIIQRkvAMIIBADJMUIxBVArI0sAAYAAQTTAwNlTEgcXZDpLFDOHCC+A8Sd6FoEAAIIJBAOZKxAEoTZmAPEKSxQSZitFVCz10D5O1iQdE4AYgsouwOKBUBWvAEyRKF+RQa+QLwFIIDQHYUM/gAxC8hfb6C6QTgLKvkaiGtAikBuUAHiD0g6QZJzob5gYUEz9jXUPU+AWAYWETDwG+o9mGQGLLAFoFbcBGJFIGaDagDHCrIV6ti8ArLCFoc3wf4HCDB84YANVEC9HwPEU4B4EiycQKEqgAUjx+F3INYHYkOoZh6YC0CeEUQLS2Qbi4HYCYgvQ8P8AhC3QOMaJRjRNf4C4m3QcP8ODd4QqM0dyIGEDgKgCtmgUf8dypeBamSERoEALi8sAuUnID4AxIegbHQA18OCRTKOlGgBeSECmuH+E4nfQPWAXQwAHbJ3VkYR2TIAAAAASUVORK5CYII=`;
function Na(e) {
  let {
    clanSteamID: t,
    fnGetImageHash: n,
    fnLangHasData: r,
    fnOnRemoveImage: i,
  } = e;
  _t(t.GetAccountID());
  let a = J.useMemo(() => {
      let e = [],
        t = $t.GetLanguageListForRealms([
          Jt.k_ESteamRealmGlobal,
          Jt.k_ESteamRealmChina,
        ]);
      for (let r of t) {
        let t = n(r);
        if (t) {
          let n = W(r),
            i = P(`#Language_` + n);
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
    [o, s, c] = j();
  return (0, X.jsxs)(`div`, {
    className: Ta,
    children: [
      (0, X.jsx)(`div`, {
        className: Ea,
        children: P(`#selectimage_uploaded_languages`),
      }),
      (0, X.jsx)(`div`, {
        className: Sa,
        children: a.map((n) =>
          (0, X.jsx)(
            Pa,
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
            P(`#Sale_RemoveAll`),
            (0, X.jsx)(gn, { tooltip: P(`#Sale_RemoveAll_Tooltip`) }),
          ],
        }),
      (0, X.jsx)(V, {
        active: o,
        children: (0, X.jsx)(U, {
          strTitle: P(`#Dialog_AreYouSure`),
          strDescription: P(`#ImageUpload_DeleteAll_Confirm`),
          closeModal: c,
          onOK: () => {
            for (let e = 0; e < 32; e++) r && i && r(e) && i(e);
          },
        }),
      }),
    ],
  });
}
function Pa(e) {
  let {
      clanSteamID: t,
      langData: n,
      langOverride: r,
      fnOnLanguagePreviewChange: i,
      fnOnArtworkLangChange: a,
      fnOnRemoveImage: o,
    } = e,
    [s, c] = f(() => {
      let e = A.GetClanImageByImageHash(t, n.imgHash),
        i = ``;
      e &&
        (i = w.GenerateURLFromHashAndExtAndLang(
          t,
          w.GetHashAndExt(e),
          T.full,
          n.lang,
        ));
      let a = va;
      return (r != n.lang && (a = n.imgHash ? _a : ya), [i, a]);
    });
  return (0, X.jsxs)(`div`, {
    id: n.strLang,
    className: ba,
    onClick: (e) => {
      let t = q(e.currentTarget.id);
      i(t);
    },
    children: [
      (0, X.jsx)(`div`, { className: c, children: n.locLang }),
      (0, X.jsxs)(`span`, {
        className: xa,
        children: [
          !!s &&
            (0, X.jsx)(`a`, {
              href: s,
              target: `_blank`,
              children: (0, X.jsx)(Zt, {
                toolTipContent: P(`#selectimage_viewimage_ttip`),
                children: rn(),
              }),
            }),
          !!a && (0, X.jsx)(Fa, { ...e }),
          !!o && (0, X.jsx)(Ia, { fnOnRemoveImage: o, langData: n }),
        ],
      }),
    ],
  });
}
function Fa(e) {
  let {
      clanSteamID: t,
      langData: n,
      fnOnArtworkLangChange: r,
      fnGetImageHash: i,
      fnLangHasData: a,
      realms: o,
    } = e,
    [s, c, l] = j(),
    u = f(() => {
      let e = i(n.lang);
      return (
        qt(
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
        (0, X.jsx)(Zt, {
          toolTipContent: P(`#selectimage_reassign_image_ttip`),
          children: (0, X.jsx)(`img`, {
            "data-lang": n.lang,
            src: Ma,
            onClick: () => c(),
          }),
        }),
        (0, X.jsx)(I, {
          children: (0, X.jsx)(V, {
            active: s,
            children: (0, X.jsx)(Aa, {
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
function Ia(e) {
  let { fnOnRemoveImage: t, langData: n } = e,
    [r, i, a] = j();
  return (0, X.jsxs)(X.Fragment, {
    children: [
      (0, X.jsx)(Zt, {
        toolTipContent: P(`#selectimage_delete_image_ttip`),
        children: (0, X.jsx)(`img`, {
          "data-lang": n.lang,
          src: xn,
          onClick: i,
        }),
      }),
      (0, X.jsx)(I, {
        children: (0, X.jsx)(V, {
          active: r,
          children: (0, X.jsx)(U, {
            strTitle: P(`#selectimage_remove_image`),
            strDescription: P(
              `#selectimage_remove_details`,
              P(`#Language_` + W(n.lang)),
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
var La = `dGiOZKKuxfQ-`,
  Ra = `h7-04bl97uc-`,
  za = `MhIotXf5RFA-`,
  Ba = `mSMnUkR7SZM-`,
  Va = `aWAciZoU3Zo-`,
  Ha = `_8AV36Rh-Ve4-`,
  Ua = `lxYifi3D8mU-`,
  Wa = `MwNTpeRZ8FM-`,
  Ga = `RdR4GEnIG5Q-`,
  Ka = `epGy6XXAGPQ-`;
function qa(e) {
  let {
      event: t,
      spotlightURLOverride: n,
      fnHandleOpenEvent: r,
      fnImageFailureCallback: i,
      fnFilterImageURLsForKnownFailures: a,
      langOverride: o,
    } = e,
    s = Be(),
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
  let g = ct(n === void 0 ? t : void 0, m, l, h) ?? (n === void 0 ? [] : [n]);
  a && g && (g = a(g));
  let _ = u.replace(/https:\/\/[^ ]*/gi, ``).trimLeft();
  return (0, X.jsx)(J.Fragment, {
    children: (0, X.jsx)(`div`, {
      className: Ga,
      ref: e.containerRef,
      children: (0, X.jsxs)(sn, {
        className: K(Ka, La),
        onActivate: c,
        focusable: !0,
        children: [
          (0, X.jsx)(`div`, {
            className: Ua,
            children: (0, X.jsx)(je, {
              className: Wa,
              rgSources: g,
              onIncrementalError: (e, t, n) => i && i(t),
            }),
          }),
          (0, X.jsxs)(`div`, {
            className: Ra,
            children: [
              (0, X.jsx)(je, {
                className: za,
                rgSources: g,
                onIncrementalError: (e, t, n) => i && i(t),
              }),
              (0, X.jsx)(`div`, { className: Ha }),
              (0, X.jsx)(`div`, {
                className: Va,
                children:
                  p &&
                  (0, X.jsxs)(`div`, {
                    className: `Kirdf-ZVux8-`,
                    children: [
                      (0, X.jsx)(je, {
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
          (0, X.jsx)(`div`, { className: Ba }),
        ],
      }),
    }),
  });
}
var Ja = `JMbtQkd0K8E-`,
  Ya = `snS7KDov-nE-`,
  Xa = `nvWdGclp6FI-`,
  Za = `xK18jc4N1cw-`,
  Qa = `IQEedJq4bc8-`,
  $a = `fCimlPrmscM-`,
  eo = `e6k9OpDXG-Q-`,
  to = `seprbrMSMhI-`,
  no = `_4CNssq7QFLI-`,
  ro = `yzbYtn5vgZU-`,
  io = `idlQxtNGVBg-`,
  ao = `mELVvJo8G3c-`,
  oo = `fF5tI3UN-YY-`;
function so(e) {
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
    [h] = f(() => [_o(n, d)]);
  return h == 0
    ? (0, X.jsxs)(`div`, {
        className: ga,
        children: [
          n === `capsule` &&
            (0, X.jsx)(uo, {
              imgURL: z.IMG_URL + `events/defaults/default_img_cover.jpg`,
              eventModel: a,
            }),
          n === `background` &&
            (0, X.jsx)(fo, {
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
            (0, X.jsx)(co, { langOverride: t, artworkType: n, eventModel: a }),
          (0, X.jsx)(`div`, { children: P(`#EventEditor_ArtworkMissing`) }),
        ],
      })
    : (0, X.jsxs)(`div`, {
        className: ga,
        children: [
          n === `capsule` &&
            (0, X.jsx)(uo, { imgURL: m, eventModel: a, langOverride: t }),
          n === `background` &&
            (0, X.jsx)(fo, {
              imgURL: m,
              lang: t,
              eventModel: a,
              partnerEventStore: o,
            }),
          n === `spotlight` && (0, X.jsx)(po, { imgURL: m, event: a, lang: t }),
          n === `localized_store_app_spotlight` &&
            (0, X.jsx)(po, { imgURL: m, event: a, lang: t }),
          n === `localized_store_app_spotlight_mobile` &&
            (0, X.jsx)(po, { imgURL: m, event: a, lang: t }),
          (n === `broadcast_left` || n === `broadcast_right`) &&
            (0, X.jsx)(mo, {
              imgURL: m,
              side: n === `broadcast_right` ? `right` : `left`,
            }),
          n === `sale_header` && (0, X.jsx)(ho, { imgURL: m }),
          n === `sale_overlay` && (0, X.jsx)(go, { imgURL: m }),
          ee.includes(n) &&
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
          (0, X.jsx)(Na, {
            langOverride: t,
            clanSteamID: i,
            fnOnLanguagePreviewChange: r,
            fnOnRemoveImage: s,
            fnOnArtworkLangChange: c,
            realms: l,
            fnLangHasData: u,
            fnGetImageHash: (e) => ja(d(n, e) ?? ``),
          }),
        ],
      });
}
function co(e) {
  let { artworkType: t, langOverride: n, eventModel: r } = e,
    i = wt[t],
    a = J.useMemo(
      () => lo(P(`#EventEditor_ArtworkType_` + t), `${i.width} X ${i.height}`),
      [i.height, i.width, t],
    );
  return (0, X.jsx)(po, { lang: n, imgURL: a, event: r });
}
function lo(e, t) {
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
function uo(e) {
  let { imgURL: t, eventModel: n, langOverride: r } = e,
    i = We();
  return (0, X.jsx)(`div`, {
    style: { display: `flex`, width: `304px` },
    children: (0, X.jsx)(D, {
      event: n,
      imageURLOverride: t,
      langOverride: r ?? i,
    }),
  });
}
function fo(e) {
  let { lang: t, eventModel: n, partnerEventStore: r } = e,
    i = nn(),
    [a, o, s, c, l] = f(() => [
      n.GetNameWithFallback(t),
      n.GetDescriptionWithFallback(t),
      n.GetSubTitleWithLanguageFallback(t),
      n.type,
      n.AnnouncementGID,
    ]),
    u = o
      ? (0, X.jsx)(Re, {
          text: o || ``,
          showErrorInfo: !1,
          event: n,
          languageOverride: Ge.Get().GetCurEditLanguage(),
        })
      : P(`#selectimage_display_event_body`);
  return (0, X.jsxs)(`div`, {
    className: Ja,
    children: [
      (0, X.jsx)(`div`, {
        className: Ya,
        children: P(`#selectimage_preview_title_1`),
      }),
      (0, X.jsx)(`div`, {
        className: K(Xa, `DetailPageExample`),
        children: (0, X.jsxs)(`div`, {
          className: Za,
          children: [
            (0, X.jsx)(`div`, {
              className: Qa,
              children: (0, X.jsx)(`img`, { src: e.imgURL }),
            }),
            (0, X.jsx)(`div`, {
              className: $a,
              children: (0, X.jsxs)(`div`, {
                className: eo,
                children: [
                  (0, X.jsx)(`div`, {
                    className: to,
                    children: a || P(`#selectimage_display_event_title`),
                  }),
                  (0, X.jsx)(`div`, {
                    className: no,
                    children: s || P(`#selectimage_display_event_subtitle`),
                  }),
                  (0, X.jsx)(`div`, { className: ro, children: u }),
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
              children: P(`#selectimage_preview_title_2`),
            }),
            (0, X.jsx)(`div`, {
              className: K(`nvWdGclp6FI-`, `DetailPageExample`),
              children: (0, X.jsx)(`div`, {
                className: `wm--jcPYtBE-`,
                children: (0, X.jsx)(
                  Ie,
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
var po = (e) => {
    let [t] = Et(e.event.appid, { include_assets: !0 });
    if (!t) return null;
    let n = t.GetName(),
      r = t.GetAssets()?.GetCommunityIconURL();
    return (0, X.jsx)(`div`, {
      className: io,
      children: (0, X.jsx)(qa, {
        event: e.event,
        strDisplayName: n ?? ``,
        gameIconUrl: r,
        spotlightURLOverride: e.imgURL,
        langOverride: e.lang,
      }),
    });
  },
  mo = (e) => {
    let t = [
      (0, X.jsx)(`img`, { src: e.imgURL }, `img`),
      (0, X.jsx)(`div`, { className: Oa }, `video`),
    ];
    return (
      e.side === `right` && t.reverse(),
      (0, X.jsx)(`div`, { className: ao, children: t })
    );
  },
  ho = (e) =>
    (0, X.jsx)(`div`, {
      className: oo,
      children: (0, X.jsx)(`img`, { style: { width: `100%` }, src: e.imgURL }),
    }),
  go = (e) =>
    (0, X.jsx)(`div`, {
      className: oo,
      children: (0, X.jsx)(`img`, { style: { width: `100%` }, src: e.imgURL }),
    }),
  $ = (e) =>
    (0, X.jsx)(`div`, {
      className: oo,
      children: (0, X.jsx)(`img`, { style: { width: `100%` }, src: e.imgURL }),
    });
function _o(e, t) {
  let n = 0;
  for (let r = 0; r < 32; ++r) (t(e, r)?.length ?? 0) > 0 && (n += 1);
  return n;
}
var vo = `https://partner.steamgames.com/doc/store/localization#supported_languages`;
function yo(e) {
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
        children: P(`#EventEditor_Required`),
      }))
    : n === 1
      ? (g = (0, X.jsx)(`span`, {
          style: { color: `#D7BC86` },
          children: P(`#EventEditor_Suggested`),
        }))
      : n === 3 &&
        (g = (0, X.jsx)(`span`, {
          style: { color: `#D7BC86` },
          children: P(`#EventEditor_Requested`),
        }));
  let _ = null;
  t === `capsule`
    ? (_ = h
        ? (0, X.jsxs)(X.Fragment, {
            children: [
              (0, X.jsxs)(`p`, {
                children: [
                  (0, X.jsx)(`strong`, {
                    children: P(`#selectimage_tip_design_title`),
                  }),
                  `: `,
                  P(`#selectimage_tip_capsule_creatorhome_1`),
                ],
              }),
              (0, X.jsxs)(`p`, {
                children: [
                  (0, X.jsx)(`strong`, {
                    children: P(`#selectimage_tip_usage_title`),
                  }),
                  `: `,
                  P(`#selectimage_tip_capsule_creatorhome_2`),
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
                      children: P(`#PartnerEvent_MM_ArtworkTip`),
                    }),
                    (0, X.jsx)(`p`, {
                      children: (0, X.jsx)(`a`, {
                        href: `${z.PARTNER_BASE_URL}doc/store/assets/promos#popup_update`,
                        children: P(`#PartnerEvent_MM_LearnMore`),
                      }),
                    }),
                  ],
                }),
              (0, X.jsxs)(`p`, {
                children: [
                  (0, X.jsx)(`strong`, {
                    children: P(`#selectimage_tip_design_title`),
                  }),
                  `: `,
                  P(`#selectimage_tip_capsule_1`),
                ],
              }),
              (0, X.jsxs)(`p`, {
                children: [
                  (0, X.jsx)(`strong`, {
                    children: P(`#selectimage_tip_usage_title`),
                  }),
                  `: `,
                  P(`#selectimage_tip_capsule_2`),
                ],
              }),
            ],
          }))
    : t === `background`
      ? (_ = (0, X.jsx)(X.Fragment, {
          children: (0, X.jsxs)(`p`, {
            children: [
              (0, X.jsx)(`strong`, {
                children: P(`#selectimage_tip_design_title`),
              }),
              `: `,
              P(`#selectimage_tip_background_1`),
            ],
          }),
        }))
      : t === `spotlight` || t === `localized_store_app_spotlight`
        ? (_ = (0, X.jsx)(X.Fragment, {
            children: (0, X.jsxs)(`p`, {
              children: [
                (0, X.jsx)(`strong`, {
                  children: P(`#selectimage_tip_usage_title`),
                }),
                `: `,
                P(`#selectimage_tip_store_spotlight_1`),
              ],
            }),
          }))
        : t === `localized_store_app_spotlight_mobile`
          ? (_ = (0, X.jsx)(X.Fragment, {
              children: (0, X.jsxs)(`p`, {
                children: [
                  (0, X.jsx)(`strong`, {
                    children: P(`#selectimage_tip_usage_title`),
                  }),
                  `: `,
                  P(`#selectimage_tip_store_mobile_spotlight`),
                ],
              }),
            }))
          : t === `broadcast_left` || t === `broadcast_right`
            ? (_ = (0, X.jsx)(X.Fragment, {
                children: (0, X.jsx)(`p`, {
                  children: P(`#selectimage_tip_broadcast_1`),
                }),
              }))
            : t === `sale_header`
              ? (_ = (0, X.jsxs)(X.Fragment, {
                  children: [
                    (0, X.jsx)(`div`, {
                      className: $e,
                      children: P(`#selectimage_tip_required_title`),
                    }),
                    (0, X.jsxs)(`p`, {
                      children: [
                        (0, X.jsx)(`b`, {
                          children: P(`#selectimage_tip_usage_title`),
                        }),
                        `: `,
                        P(`#selectimage_tip_sale_header_1`),
                      ],
                    }),
                    (0, X.jsxs)(`p`, {
                      children: [
                        (0, X.jsx)(`b`, {
                          children: P(`#selectimage_tip_design_title`),
                        }),
                        `: `,
                        P(`#selectimage_tip_sale_header_2`),
                      ],
                    }),
                    (0, X.jsx)(`p`, {
                      children: P(`#selectimage_tip_sale_header_4`),
                    }),
                    (0, X.jsxs)(`p`, {
                      children: [
                        (0, X.jsx)(`b`, {
                          children: P(`#selectimage_tip_template_title`),
                        }),
                        `: `,
                        (0, X.jsx)(`a`, {
                          href: `https://www.dropbox.com/scl/fo/mhf604o6bdbcfr1scq7bx/h?rlkey=9bk0ggiwuvs4o1jdnej4xsy0c&dl=0`,
                          children: P(`#selectimage_tip_sale_header_3`),
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
                        children: P(`#selectimage_tip_hero_1`),
                      }),
                      !d.GetAssets()?.GetLibraryHeroURL() &&
                        (0, X.jsx)(`p`, {
                          className: `_9rhLFCwqjPg-`,
                          children: P(`#EventEdtior_ArtworkType_hero_warning`),
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
                          children: P(`#ImagePickerLoc_Desc`),
                        }),
                        (0, X.jsx)(`p`, {
                          children: Mt(
                            `#ImagePickerLoc_Files`,
                            (0, X.jsx)(`a`, {
                              href: vo,
                              target: z.IN_CLIENT ? void 0 : `_blank`,
                              children: P(`#ImagePickerLoc_URL`),
                            }),
                          ),
                        }),
                      ],
                    }))
                  : t === `product_banner`
                    ? (_ = (0, X.jsxs)(X.Fragment, {
                        children: [
                          (0, X.jsx)(`div`, {
                            className: Xe,
                            children: P(`#selectimage_tip_optional_title`),
                          }),
                          (0, X.jsxs)(`p`, {
                            children: [
                              (0, X.jsx)(`b`, {
                                children: P(`#selectimage_tip_usage_title`),
                              }),
                              `: `,
                              P(`#selectimage_tip_sale_product_banner`),
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
                              className: Xe,
                              children: P(`#selectimage_tip_optional_title`),
                            }),
                            (0, X.jsxs)(`p`, {
                              children: [
                                (0, X.jsx)(`b`, {
                                  children: P(`#selectimage_tip_usage_title`),
                                }),
                                `: `,
                                P(`#selectimage_tip_sale_product_banner`),
                                t === `product_mobile_banner` &&
                                  (0, X.jsxs)(`span`, {
                                    children: [
                                      `  `,
                                      P(
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
                                    children: P(
                                      `#selectimage_tip_design_title`,
                                    ),
                                  }),
                                  `:`,
                                  P(`#Sale_Tabs_Background_Design`),
                                ],
                              }),
                              (0, X.jsxs)(`p`, {
                                children: [
                                  (0, X.jsx)(`strong`, {
                                    children: P(`#selectimage_tip_usage_title`),
                                  }),
                                  `:`,
                                  P(`#Sale_Tabs_Background_Usage`),
                                ],
                              }),
                            ],
                          }))
                        : t === `sale_logo`
                          ? (_ = (0, X.jsxs)(X.Fragment, {
                              children: [
                                (0, X.jsx)(`div`, {
                                  className: Xe,
                                  children: P(
                                    `#selectimage_tip_optional_title`,
                                  ),
                                }),
                                (0, X.jsxs)(`p`, {
                                  children: [
                                    (0, X.jsx)(`b`, {
                                      children: P(
                                        `#selectimage_tip_usage_title`,
                                      ),
                                    }),
                                    `: `,
                                    P(`#selectimage_tip_pageLogo`),
                                  ],
                                }),
                              ],
                            }))
                          : t === `sale_cross_promo_logo`
                            ? (_ = (0, X.jsxs)(X.Fragment, {
                                children: [
                                  (0, X.jsx)(`div`, {
                                    className: Xe,
                                    children: P(
                                      `#selectimage_tip_optional_title`,
                                    ),
                                  }),
                                  (0, X.jsxs)(`p`, {
                                    children: [
                                      (0, X.jsx)(`b`, {
                                        children: P(
                                          `#selectimage_tip_usage_title`,
                                        ),
                                      }),
                                      `: `,
                                      P(
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
                                    className: $e,
                                    children: P(
                                      `#selectimage_tip_required_title`,
                                    ),
                                  }),
                                  (0, X.jsxs)(`p`, {
                                    children: [
                                      (0, X.jsx)(`b`, {
                                        children: P(
                                          `#selectimage_tip_usage_title`,
                                        ),
                                      }),
                                      `: `,
                                      P(`#selectimage_tip_bestofyear`),
                                    ],
                                  }),
                                ],
                              }));
  let v = wt[e.artworkType].width,
    y = wt[e.artworkType].height;
  return (0, X.jsxs)(`div`, {
    id: e.id,
    className: Da,
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
              (0, X.jsx)(bn, {
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
                    children: P(`#selectimage_tip_dimensions_title`),
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
              (0, X.jsx)(R, {
                className: `_1k0t2Q-C2OU-`,
                onClick: (t) => {
                  N(
                    (0, X.jsx)(bo, {
                      fnRemoveAllArtwork: e.fnRemoveAllArtwork,
                    }),
                    zt(t) ?? window,
                  );
                },
                children: P(`#Sale_RemoveAll`),
              }),
          ],
        }),
      !e.bIsMinimized &&
        (0, X.jsx)(xo, {
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
function bo(e) {
  let { fnRemoveAllArtwork: t, closeModal: n } = e;
  return (0, X.jsx)(U, {
    strTitle: P(`#Sale_RemoveAll`),
    strDescription: P(`#ImageUpload_DeleteAll_Confirm`),
    onOK: () => {
      (t?.(), n?.());
    },
    onCancel: n,
  });
}
function xo(e) {
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
    [f, p] = J.useState(We()),
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
          (ja(a(t, n) ?? ``) == e.image_hash && o(t, null, n),
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
          children: P(`#ImageUpload_EditHeroImage`),
        }),
      })
    : (0, X.jsxs)(`div`, {
        children: [
          (0, X.jsx)(So, {
            list: m,
            fnOnArtworkLanguageChange: _,
            realms: n,
            fnLangHasData: i,
          }),
          (0, X.jsx)(`div`, {
            children: (0, X.jsx)(`div`, {
              className: K(Ca, wa),
              children: (0, X.jsx)(so, {
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
var So = class extends J.Component {
  ShowLangChangeDialog(e, t) {
    let {
      fnOnArtworkLanguageChange: n,
      realms: r,
      fnLangHasData: i,
    } = this.props;
    N(
      (0, X.jsx)(Aa, {
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
          i = P(`#Language_` + W(r));
        e.push(
          (0, X.jsxs)(
            `div`,
            {
              className: rt,
              children: [
                (0, X.jsx)(`span`, {
                  children: P(
                    `#ImageUpload_Success_Mapping`,
                    n.file_name ?? ``,
                    i,
                  ),
                }),
                (0, X.jsx)(`a`, {
                  onClick: () => this.ShowLangChangeDialog(n, r),
                  children: P(`#ImageUpload_Success_Mapping_Change`),
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
    return (0, X.jsx)(`div`, { className: ka, children: t });
  }
};
(Ut([Yt], So.prototype, `ShowLangChangeDialog`, null), (So = Ut([l], So)));
function Co(e) {
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
    m = xt(t, o),
    h = t.GetAccountID(),
    [g] = f(() => [m.GetFilesToUpload().length - m.GetCompletedFiles()]);
  (0, J.useEffect)(() => {
    (p(!1),
      Q.ClearImageGroup(),
      a?.forEach((e, t) => {
        let n = F.InitFromClanID(h, z.EUNIVERSE);
        if (Q.GetAllLocalizedGroupImages().length == 0) {
          let t = e && w.GetHashFromHashAndExt(e),
            r = t && A.GetClanImageByImageHash(n, t);
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
  return (0, X.jsxs)(U, {
    onCancel: c,
    closeModal: c,
    bDisableBackgroundDismiss: !0,
    bAllowFullSize: !0,
    className: K(st, ot),
    strTitle: e.strLocalizedTitle || P(`#ImagePickerLoc_Title`),
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
              image_hash: ja(t),
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
    strOKButtonText: g > 0 ? P(`#ImagePickerLoc_DismissWarning`) : void 0,
    children: [
      d
        ? (0, X.jsxs)(X.Fragment, {
            children: [
              (0, X.jsx)(pa, {
                clanSteamID: t,
                rgSupportArtwork: [o],
                fnSetImageURL: _,
                bAllowPreviousClanImageSelection: !1,
                rgRealmList: i ?? [],
                uploaderOverride: m,
              }),
              (0, X.jsx)(yo, {
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
        : (0, X.jsx)(k, {
            size: `medium`,
            position: `center`,
            string: P(`#Loading`),
          }),
      e.children,
    ],
  });
}
function wo(e) {
  let { setting: t, fnUpdateSetting: n, label: r } = e,
    i = J.useMemo(() => {
      let e = [];
      return (
        e.push({ label: P(`#EventEditor_Tile_NoRepeat`), data: `no-repeat` }),
        e.push({ label: P(`#EventEditor_Tile_RepeatX`), data: `repeat-x` }),
        e.push({ label: P(`#EventEditor_Tile_RepeatY`), data: `repeat-y` }),
        e.push({ label: P(`#EventEditor_Tile_Repeat`), data: `repeat` }),
        e.push({
          label: P(`#EventEditor_Tile_NoRepeatAndBlur`),
          data: `coverBlur`,
        }),
        e
      );
    }, []);
  return (0, X.jsxs)(X.Fragment, {
    children: [
      (0, X.jsx)(B, { children: r || P(`#EventEditor_Tile_Title`) }),
      (0, X.jsx)(L, {
        strDropDownClassName: tt,
        rgOptions: i,
        selectedOption: t || `no-repeat`,
        onChange: (e) => n(e.data),
        bDisableMouseOverlay: !0,
        contextMenuPositionOptions: { bDisableMouseOverlay: !0 },
      }),
    ],
  });
}
function To(e) {
  let { closeModal: t, imgGroup: n, fnUpdateImageGroup: r, eventModel: i } = e,
    { openColorPicker: a } = xr(),
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
    [_] = (0, J.useState)(() => Eo(o.localized_background_art ?? {}));
  return (0, X.jsxs)(Co, {
    strLocalizedTitle: P(`#BackgroundGroups_Configure`),
    strLocalizedDescription: P(`#BackgroundGroups_DialogDesc`),
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
        className: yi,
        children: [
          (0, X.jsxs)(`div`, {
            className: bi,
            children: [
              (0, X.jsx)(wo, {
                setting: c,
                fnUpdateSetting: (e) => {
                  s(
                    e === `no-repeat`
                      ? { ...o, repeat_setting: e }
                      : { ...o, repeat_setting: e, scaling_setting: `auto` },
                  );
                },
                label: P(`#BackgroundGroups_Repeating`),
              }),
              (0, X.jsx)(Do, {
                scaling_setting: l ?? `contain`,
                disable: c !== `no-repeat`,
                fnUpdateSetting: (e) => s({ ...o, scaling_setting: e }),
              }),
              l != `cover` &&
                (0, X.jsx)(ko, {
                  position_settings: m,
                  fnUpdateSetting: (e) => s({ ...o, position_setting: e }),
                }),
            ],
          }),
          (0, X.jsxs)(`div`, {
            className: xi,
            children: [
              (0, X.jsx)(B, { children: P(`#BackgroundGroups_Color`) }),
              (0, X.jsxs)(`div`, {
                className: Si,
                children: [
                  (0, X.jsx)(R, {
                    style: { backgroundColor: u },
                    onClick: (e) =>
                      a(e, {
                        color: u,
                        onChange: (e) =>
                          s({ ...o, background_color1: e || void 0 }),
                      }),
                    children: P(
                      u === void 0
                        ? `#BackgroundGroups_ColorNum_unset`
                        : `#BackgroundGroups_ColorNum`,
                      1,
                    ),
                  }),
                  `\xA0`,
                  (0, X.jsx)(R, {
                    onClick: () => s({ ...o, background_color1: void 0 }),
                    children: P(`#BackgroundGroups_Color_Clear`),
                  }),
                ],
              }),
              (0, X.jsx)(`div`, {
                className: _i,
                children: (0, X.jsx)(R, {
                  onClick: () =>
                    s({ ...o, background_color1: d, background_color2: u }),
                  children: P(`#BackgroundGroups_Color_Swap`),
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
                      children: P(
                        d === void 0
                          ? `#BackgroundGroups_ColorNum_unset`
                          : `#BackgroundGroups_ColorNum`,
                        2,
                      ),
                    }),
                    `\xA0`,
                    (0, X.jsx)(R, {
                      onClick: () => s({ ...o, background_color2: void 0 }),
                      children: P(`#BackgroundGroups_Color_Clear`),
                    }),
                  ],
                }),
              (0, X.jsx)(Oo, {
                gradient: p ?? `top-to-bottom`,
                fnUpdateSetting: (e) => s({ ...o, gradient_setting: e }),
              }),
            ],
          }),
        ],
      }),
      (0, X.jsx)(ti, {
        clanSteamID: i.clanSteamID,
        children: (0, X.jsx)(Gt, {
          checked: !!g,
          onChange: (e) => {
            o.randomize_section_order = e;
          },
          children: P(`#BackgroundGroups_RandomizeSectionOrder`),
        }),
      }),
    ],
  });
}
function Eo(e) {
  let t = en([], 32, null);
  for (let n in e) {
    let r = q(n);
    r != -1 && (t[r] = e[n]);
  }
  return t;
}
function Do(e) {
  let { scaling_setting: t, fnUpdateSetting: n, label: r, disable: i } = e,
    a = J.useMemo(() => {
      let e = [];
      return (
        e.push({ label: P(`#BackgroundGroups_Scaling_cover`), data: `cover` }),
        e.push({
          label: P(`#BackgroundGroups_Scaling_contain`),
          data: `contain`,
        }),
        e.push({ label: P(`#BackgroundGroups_Scaling_fixed`), data: `auto` }),
        e
      );
    }, []);
  return (0, X.jsxs)(X.Fragment, {
    children: [
      (0, X.jsx)(B, { children: r || P(`#BackgroundGroups_Scaling`) }),
      (0, X.jsx)(L, {
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
function Oo(e) {
  let { gradient: t, fnUpdateSetting: n, label: r } = e,
    i = J.useMemo(() => {
      let e = [];
      return (
        e.push({
          label: P(`#BackgroundGroups_Gradient_Top`),
          data: `top-to-bottom`,
        }),
        e.push({
          label: P(`#BackgroundGroups_Gradient_Left`),
          data: `left-to-right`,
        }),
        e.push({
          label: P(`#BackgroundGroups_Gradient_TopLeft`),
          data: `top-left-to-bottom-right`,
        }),
        e
      );
    }, []);
  return (0, X.jsxs)(X.Fragment, {
    children: [
      (0, X.jsx)(B, { children: r || P(`#EventEditor_ColorSetting_Title`) }),
      (0, X.jsx)(L, {
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
function ko(e) {
  let { position_settings: t, fnUpdateSetting: n, label: r } = e,
    i = J.useMemo(() => {
      let e = [];
      return (
        e.push({ label: P(`#BackgroundGroups_Position_Unset`), data: `unset` }),
        e.push({
          label: P(`#BackgroundGroups_Position_Centered`),
          data: `center`,
        }),
        e.push({
          label: P(`#BackgroundGroups_Position_CenteredTop`),
          data: `top center`,
        }),
        e.push({
          label: P(`#BackgroundGroups_Position_TopLeft`),
          data: `top left`,
        }),
        e.push({
          label: P(`#BackgroundGroups_Position_BottomRight`),
          data: `bottom right`,
        }),
        e
      );
    }, []);
  return (0, X.jsxs)(X.Fragment, {
    children: [
      (0, X.jsx)(B, { children: r || P(`#BackgroundGroups_Position`) }),
      (0, X.jsx)(L, {
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
function Ao(e) {
  let {
      backgroundImageEditModel: t,
      bBackgroundImgGroupEditMode: n,
      fnSetBackgroundImgGroupEditMode: r,
      bShowAsValveOnly: i,
    } = e,
    [a, o] = (0, J.useState)(t.BIsBackgroundImageEnabled()),
    [s, c, l] = j(),
    u = f(() => t.GetSalePageLastCoverSectionUntilEnd());
  return (0, X.jsx)(`div`, {
    className: K(hi, i && `u6DPgTclyv4-`),
    children: (0, X.jsxs)(I, {
      children: [
        (0, X.jsx)(G, {
          label: P(`#BackgroundGroups_Setting`),
          checked: a,
          onChange: (e) => {
            (o(e), t.SetBackgroundImageEnabled(e));
          },
        }),
        a
          ? (0, X.jsxs)(X.Fragment, {
              children: [
                (0, X.jsx)(G, {
                  label: P(`#BackgroundGroups_EditMode`),
                  tooltip: P(`#BackgroundGroups_EditMode_ttip`),
                  checked: n,
                  onChange: r,
                }),
                (0, X.jsx)(G, {
                  label: P(`#BackgroundGroups_ExtendToEnd`),
                  tooltip: P(`#BackgroundGroups_ExtendToEnd_ttip`),
                  checked: u,
                  onChange: (e) => t.SetSalePageLastCoverSectionUntilEnd(e),
                }),
                (0, X.jsx)(`hr`, {}),
                (0, X.jsx)(R, {
                  onClick: c,
                  children: P(`#BackgroundGroups_ClearAllSettings`),
                }),
                (0, X.jsx)(V, {
                  active: s,
                  children: (0, X.jsx)(U, {
                    strTitle: P(`#EventEditor_GenericAreYouSure`),
                    strDescription: P(
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
          : (0, X.jsx)(`p`, { children: P(`#BackgroundGroups_Desc`) }),
        (0, X.jsx)(`br`, {}),
        (0, X.jsx)(`a`, {
          href: `${z.PARTNER_BASE_URL}doc/marketing/event_tools/sales/groups`,
          target: `_blank`,
          children: P(`#EventGeneric_SeeDocs`),
        }),
      ],
    }),
  });
}
var jo = J.forwardRef(function (e, t) {
  let {
      imgGroupDerivedMapping: n,
      backgroundImageEditModel: r,
      groupIndex: i,
      imgGroup: a,
      eventModel: o,
      nTabIndex: s,
    } = e,
    c = We(),
    [l, u, d, p] = f(() => [
      a && n.mapGroupToSections.get(a.background_id),
      (a && n.mapGroupToSections.get(a.background_id)?.sectionUniqueIDs) ?? [],
      s == null
        ? r?.GetSalePageLastCoverSectionUntilEnd()
        : r?.GetTabLastCoverSectionUntilEnd(s),
      s == null ? r?.GetSalePageGroupCount() : r?.GetTabGroupCount(s),
    ]),
    m = d && i + 1 === p,
    [h, g, _] = j(),
    [v, y, b] = j(),
    x;
  l?.nUniqueIDNextSaleSection &&
    (x = De(
      2,
      r.GetSaleSectionByID(l?.nUniqueIDNextSaleSection),
      c,
      o,
      l.nSaleSectionLastIndex + 1,
    ));
  let S;
  if (l && u?.length > 1) {
    let e = u[u.length - 1];
    S = De(2, r?.GetSaleSectionByID(e), c, o, l.nSaleSectionLastIndex);
  }
  return (0, X.jsx)(yn, {
    bStartMinimized: !1,
    title: P(
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
          children: P(`#BackgroundGroups_Configure`),
        }),
        (0, X.jsx)(V, {
          active: h,
          children: (0, X.jsx)(To, {
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
          className: vi,
          children: P(`#BackgroundGroups_ContentTitle`),
        }),
        (0, X.jsxs)(`ul`, {
          children: [
            u.map((e) =>
              (0, X.jsx)(
                `li`,
                {
                  children: De(
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
              (0, X.jsx)(`li`, { children: P(`#BackgroundGroups_EndOfList`) }),
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
            children: P(`#BackgroundGroups_Reduce`, S),
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
            children: P(`#BackgroundGroups_Extend`, x),
          }),
        i > 0 &&
          (0, X.jsxs)(X.Fragment, {
            children: [
              (0, X.jsx)(`hr`, {}),
              (0, X.jsx)(R, {
                className: `_1k0t2Q-C2OU-`,
                onClick: y,
                children: P(`#BackgroundGroups_RemoveThisGroup`),
              }),
              (0, X.jsx)(V, {
                active: v,
                children: (0, X.jsx)(U, {
                  strTitle: P(`#Dialog_AreYouSure`),
                  bDestructiveWarning: !0,
                  strDescription: P(`#BackgroundGroups_RemoveThisGroup_Desc`),
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
function Mo(e) {
  let { backgroundImageEditModel: t, nTabID: n } = e;
  return (0, X.jsx)(`div`, {
    className: gi,
    children: (0, X.jsx)(R, {
      onClick: (e) =>
        n !== void 0 && n >= 0
          ? t?.AddTabBackgroundGroup(n)
          : t?.AddSalePageBackgroundGroup(),
      children: P(
        n !== void 0 && n >= 0
          ? `#BackgroundGroups_AddNewGroupTab`
          : `#BackgroundGroups_AddNewGroup`,
      ),
    }),
  });
}
function No(e) {
  let {
      nTabID: t,
      nSectionUniqueID: n,
      salePageBackgroundDerivedConfig: r,
      backgroundImageEditModel: i,
    } = e,
    a = r.mapFirstSectionToGroup.get(n);
  return n == r.nFirstSaleSectionIDWithoutGroup ||
    n == r.nFirstTabSectionIDWithoutGroup
    ? (0, X.jsx)(Mo, { backgroundImageEditModel: i, nTabID: t })
    : a
      ? (0, X.jsx)(Po, { ...e, groupID: a })
      : null;
}
function Po(e) {
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
    let e = N(
      (0, X.jsx)(U, {
        bAlertDialog: !0,
        closeModal: () => l(!1),
        children: (0, X.jsx)(jo, {
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
  let u = f(() => si.get(t)),
    [d, p] = (0, J.useState)(null),
    m = J.useCallback((e, t) => {
      p(t);
    }, []),
    h = jt(m);
  return (0, X.jsxs)(`div`, {
    className: gi,
    ref: h,
    children: [
      !!(u && d && d > u) &&
        (0, X.jsx)(R, {
          onClick: (e) => l(!0),
          children: P(`#BackgroundGroups_EditBackgroundGroup`),
        }),
      (0, X.jsx)(jo, {
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
var Fo = `Bn58KEX1KcI-`;
function Io(e) {
  let { imgGroupDerivedMapping: t } = e,
    [n, r] = (0, J.useState)(!1);
  (0, J.useEffect)(() => {
    if (!n) return;
    let t = N(
      (0, X.jsx)(U, {
        bAlertDialog: !0,
        closeModal: () => r(!1),
        children: (0, X.jsx)(Lo, { ...e }),
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
        if (n) return si.get(n?.nBackgroundGroupID) ?? 0;
      }
      return 0;
    }),
    [a, o] = (0, J.useState)(null),
    s = J.useCallback((e, t) => {
      o(t);
    }, []),
    c = jt(s),
    l = !!(i >= 0 && a && a > i);
  return (0, X.jsxs)(`div`, {
    className: K(gi, Fo),
    ref: c,
    children: [
      l &&
        (0, X.jsx)(R, {
          onClick: (e) => r(!0),
          children: P(`#BackgroundGroups_EditBackgroundGroup`),
        }),
      (0, X.jsx)(Lo, { ...e }),
    ],
  });
}
function Lo(e) {
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
        label: P(`#BackgroundGroups_TaSetting`),
        checked: s,
        onChange: (e) => {
          if (
            (qt(t, `edit model mising`),
            qt(r !== void 0, `tab setting missing`),
            r !== void 0 && t)
          ) {
            let n = t.SetTabEnabled(r, e);
            (qt(!!n, `Failed to create model TabID ${r}backgroundModel`), a(n));
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
              label: P(`#BackgroundGroups_ExtendToEnd`),
              tooltip: P(`#BackgroundGroups_ExtendToEnd_Tab_ttip`),
              checked: o,
              onChange: (e) => t.SetTabLastCoverSectionUntilEnd(r, e),
            }),
            (0, X.jsx)(jo, {
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
function Ro(e) {
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
    m = oe(n, !!we(n)),
    h = zo(n, c, he(!!r)),
    [g, _] = (0, J.useState)(!1);
  J.useEffect(() => {
    if (
      n.jsondata.sale_custom_css &&
      !u &&
      r &&
      n.jsondata.sale_vanity_id_valve_approved_for_sale_subpath &&
      vn() == `community`
    ) {
      let e = document.getElementsByTagName(`HEAD`)[0],
        t = document.createElement(`style`);
      ((t.innerText = Ht(n.jsondata.sale_custom_css)), d(t), e.appendChild(t));
    }
    let e = document.getElementsByClassName(`react_landing_background`);
    return (
      qt(e.length <= 1, `Must have at most one react_landing_background`),
      e.length >= 1 && (e[0].style.backgroundImage = ``),
      () => {
        u && (u.remove(), d(null));
      }
    );
  }, [n, u, r]);
  let v = n?.jsondata,
    b = J.useMemo(
      () => ({
        promotionName: t,
        clanid: Number(dn.CLANACCOUNTID),
        nAppIDVOD: Number(v?.broadcast_preroll_vod_appid),
        event: n,
        bIsPreview: r,
        language: i,
        accountIDs: r ? v?.broadcast_whitelist : void 0,
        chat_announcement_giveaway: v?.broadcast_chat_announcement_giveaway,
      }),
      [r, n, v, i, t],
    ),
    x = f(() => a?.BIsBackgroundImageEnabled() ?? !1),
    C = ei(n?.clanSteamID);
  if (!n || c === void 0)
    return (0, X.jsx)(`div`, {
      className: fn,
      style: { height: `500px` },
      children: (0, X.jsx)(k, { size: `medium`, string: P(`#Loading`) }),
    });
  {
    let e = Tr(n),
      u = n.BUsesContentHubForItemSource(),
      d = n.GetSaleSections().some((e) => e.section_type === `contenthubtitle`),
      f = u && d,
      v,
      ee = !0;
    e
      ? (v = 0)
      : n.BUsesContentHubForItemSource()
        ? (v = n.jsondata.sale_header_offset === 530 ? 530 : 20)
        : n.GetEventType() == 36
          ? ((v = 0), (ee = !1))
          : (v = n.jsondata.sale_header_offset || 0);
    let w = ee && n.jsondata.sale_header_offset === 530,
      T = !xe
        .Get()
        .BIsPartnerTakeoverActive(
          n.GetContentHubType(),
          n.GetContentHubCategory(),
          n.GetContentHubTag(),
        ),
      E = r
        ? !g && a?.BIsBackgroundImageEnabled()
          ? O.EPreviewMode_EditBackground
          : O.EPreviewMode_Enabled
        : O.EPreviewMode_Disabled,
      D = x || n.GetEventType() != 36,
      te = u ? mn.NoTransform : mn.NoTransformSparseContent,
      ne = K(
        S,
        p && `_9D3431c8-XE-`,
        w && `_5NaHSqwUb-k-`,
        y[`CustomStyle_${n.jsondata.sale_vanity_id}`],
        `SaleOuterContainer`,
        e && `RG63SnOtLk0-`,
        f && void 0,
      );
    return (0, X.jsx)(I, {
      children: (0, X.jsx)(me, {
        eventModel: n,
        language: i,
        children: (0, X.jsx)(Ue, {
          location: r ? 2 : 0,
          children: (0, X.jsxs)(jr, {
            event: n,
            language: i,
            bIsPreview: !!r,
            personalizedCarousels: m,
            children: [
              T && (0, X.jsx)(ve, {}),
              (0, X.jsx)(Cr, { eventModel: n }),
              !!a &&
                (D || C) &&
                (0, X.jsx)(Ao, {
                  backgroundImageEditModel: a,
                  bBackgroundImgGroupEditMode: g,
                  fnSetBackgroundImgGroupEditMode: _,
                  bShowAsValveOnly: !D,
                }),
              (0, X.jsxs)(sn, {
                style: !f || (w && !e) ? { marginTop: `${v || 0}px` } : void 0,
                className: ne,
                scrollIntoViewType: te,
                children: [
                  e && (0, X.jsx)(Er, { eventModel: n, language: i }),
                  (0, X.jsx)(Lr, { rgPresenters: n.jsondata.sale_presenters }),
                  (0, X.jsx)(Vr, { event: n, broadcastEmbedContext: b }),
                  (0, X.jsx)(Ho, {
                    ePreviewMode: E,
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
                    (0, X.jsx)(oi, {
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
function zo(e, t, n) {
  let [r] = He(`tab`, void 0),
    [i] = He(Te, void 0),
    [a] = He(Ee, void 0),
    o = J.useMemo(() => {
      let t = e
        .GetSaleSectionFirstMatchByType(`tabs`)
        ?.tabs?.filter((e) => !e.hide);
      if (t && t.length > 0) {
        let e = r > 0 ? t.find((e) => e.unique_id == r) : void 0;
        e ||= t[0];
        let n = e === t[0];
        return { selTab: e, bIsDefaultTab: n };
      }
    }, [e, r]),
    s = Se(Ae(i, a), o?.selTab.tab_tag_filter, n),
    c = s?.strParentKey,
    l = s?.strChildKey;
  return J.useMemo(() => {
    if (!o) return;
    let n;
    c && (n = { strParentKey: c, strChildKey: l });
    let r =
      e.jsondata.sale_opt_in_page_name || e.jsondata.prune_list_optin_name;
    return new be(o.selTab, t, o.bIsDefaultTab, n, r);
  }, [e, t, o, c, l]);
}
function Bo() {
  if (window?.location?.hash)
    return decodeURIComponent(window.location.hash.substring(1).toLowerCase());
}
function Vo(e) {
  let {
      event: t,
      language: r,
      nSaleDayIndex: i,
      ePreviewMode: a,
      selectedTab: o,
      backgroundImageEditModel: s,
    } = e,
    [c, l] = J.useState(at()),
    u = J.useMemo(() => new mi(), []),
    d = J.useCallback(() => l(at()), []);
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
          let t = Bo();
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
      Ve(p, { ...(t || {}), tab: e.toString() });
    },
    [h, g] = He(`controller`),
    [_, y] = f(() => {
      let e = ft.GetCreatorHome(t.clanSteamID)?.GetAppIDList().length ?? 0,
        n = t.GetSaleSectionIncludingFooterSections(e);
      return [
        li(
          t.jsondata.sale_background_img_groups,
          n,
          o && o.GetActiveTabUniqueID(),
        ),
        n,
      ];
    }),
    b = !1,
    x = [{ elements: [], activeTab: new be(void 0, i) }],
    S = null,
    C = Qt(),
    ee = ne(),
    w = pe(t),
    T = zr(y),
    E = J.useMemo(() => {
      let e = Bo();
      if (!e) return;
      let t = y.findIndex((t) => t.section_anchor === e);
      return t > -1 ? t : void 0;
    }, [y]);
  (y.forEach((n, i) => {
    let l = x[x.length - 1].activeTab;
    if (l && !l.ShouldShowSection(n)) return;
    let d = xe
        .Get()
        .BIsPartnerTakeoverActive(
          t.GetContentHubType(),
          t.GetContentHubCategory(),
          t.GetContentHubTag(),
        ),
      f = c && !d && !t.jsondata.content_hub_restricted_width,
      p = ge(n, a, t, r, C, w, T(n));
    if (p === void 0) return;
    if (!p) {
      if (ce(n) && !pn.logged_in)
        b ||= ((p = (0, X.jsx)(fe, { section: n, event: t, language: r })), !0);
      else {
        let t = n.diable_tab_id_filtering
          ? new be(void 0, l && l.GetSaleDay())
          : l;
        (n.section_type == `tabs` &&
          n.tabs?.some((e) => e.unique_id == o?.GetActiveTabUniqueID()) &&
          x.push({ activeTab: o, elements: [] }),
          (p = (0, X.jsx)(_e, {
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
    ee && (p = (0, X.jsx)(Pr, { nSectionID: n.unique_id, children: p }));
    let v = x && x.length && x[x.length - 1],
      y = (0, X.jsx)(
        Ko,
        {
          section: n,
          nActiveTabID: v && v.activeTab && v.activeTab.GetActiveTabUniqueID(),
          saleSectionIndex: i,
          ePreviewMode: a,
          salePageBackgroundDerivedConfig: _,
          backgroundImageEditModel: s,
          bExpanded: f,
          children: (0, X.jsx)(dt, { enabled: !E || i > E, children: p }),
        },
        `SaleSectionIndex_` + n.unique_id + `_` + i,
      ),
      D = _.mapSectionToGroup.get(n.unique_id);
    (S &&
      S.groupID != D &&
      (x[x.length - 1].elements.push(
        ui(t, S, a, o && o?.GetActiveTabUniqueID()),
      ),
      (S = null)),
      D
        ? ((S ||= {
            groupID: D,
            elSaleSections: [],
            derivedGroupInfo: _.mapGroupToSections.get(D),
          }),
          S.elSaleSections.push(y))
        : x[x.length - 1].elements.push(y));
  }),
    (S &&=
      (x[x.length - 1].elements.push(
        ui(t, S, a, o && o?.GetActiveTabUniqueID()),
      ),
      null)));
  let D = x.map((e, t) =>
    (0, X.jsx)(
      `div`,
      { className: K(v, `SaleSectionTabListContainer`), children: e.elements },
      `TabSection_` + t,
    ),
  );
  return (0, X.jsx)(sn, {
    focusable: !1,
    focusableIfEmpty: !0,
    navKey: `SaleSectionListContainer`,
    children: D,
  });
}
var Ho = a(Vo);
function Uo(e) {
  let {
    visibility_by_door_index_state: t,
    door_index_visibility: n,
    children: r,
  } = e;
  return t && n != null
    ? (0, X.jsx)(Wo, {
        visibility_by_door_index_state: t,
        door_index_visibility: n,
        children: r,
      })
    : (0, X.jsx)(X.Fragment, { children: r });
}
function Wo(e) {
  let {
      visibility_by_door_index_state: t,
      door_index_visibility: n,
      children: r,
    } = e,
    i = se(n);
  return (t == `hide_when_open_door_index` && i) ||
    (t == `show_when_open_door_index` && !i)
    ? null
    : (0, X.jsx)(X.Fragment, { children: r });
}
function Go({ children: e, onChange: t }) {
  return (
    J.useRef(null),
    (0, J.useEffect)(() => {
      t(!!J.Children.toArray(e).filter(Boolean).length);
    }, [e, t]),
    e
  );
}
function Ko(e) {
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
    l = t.section_anchor ? t.section_anchor : it + (t.unique_id || n),
    u = t.section_type != `tabs`,
    [d, f] = (0, J.useState)(!0);
  return d
    ? (0, X.jsx)(I, {
        children: (0, X.jsx)(Uo, {
          visibility_by_door_index_state: t.visibility_by_door_index_state,
          door_index_visibility: t.door_index_visibility,
          children: u
            ? (0, X.jsx)(sn, {
                navKey: l,
                id: l,
                className: K({
                  [_]: !0,
                  SaleSectionCtn: !0,
                  [t.section_type]: !0,
                  [t.internal_section_data?.internal_type || ``]: !0,
                  expanded: s,
                  [t.single_item_style || ``]: !0,
                  [C]: i == O.EPreviewMode_EditBackground,
                  [g]: t.collapse_header_space,
                }),
                children:
                  i === O.EPreviewMode_EditBackground && o
                    ? (0, X.jsxs)(X.Fragment, {
                        children: [
                          c,
                          (0, X.jsx)(No, {
                            nSectionUniqueID: t.unique_id || n,
                            nTabID: r,
                            salePageBackgroundDerivedConfig: a,
                            backgroundImageEditModel: o,
                          }),
                        ],
                      })
                    : (0, X.jsx)(Go, { onChange: f, children: c }),
              })
            : (0, X.jsx)(X.Fragment, {
                children:
                  i === O.EPreviewMode_EditBackground && o
                    ? (0, X.jsxs)(`div`, {
                        id: l,
                        className: K({
                          [_]: !0,
                          [C]: !0,
                          [g]: t.collapse_header_space,
                        }),
                        children: [
                          c,
                          (0, X.jsx)(Io, {
                            backgroundImageEditModel: o,
                            nTabID: r,
                            imgGroupDerivedMapping: a,
                          }),
                        ],
                      })
                    : (0, X.jsx)(Go, { onChange: f, children: c }),
              }),
        }),
      })
    : null;
}
export { Ro as t };
