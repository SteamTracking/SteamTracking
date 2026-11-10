/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
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
} from "./libraries.js";
import { n as p, r as m, t as h } from "./clanimagemodels.js";
import {
  Ct as g,
  I as _,
  J as v,
  Q as y,
  Tt as b,
  Y as x,
  Z as S,
  a as C,
  bt as ee,
  c as te,
  d as w,
  et as ne,
  f as re,
  l as ie,
  n as T,
  nt as ae,
  o as E,
  r as oe,
  s as se,
  t as ce,
  tt as le,
  u as ue,
  x as de,
  y as fe,
} from "./salesectionfactory.js";
import {
  C as pe,
  H as me,
  I as he,
  L as ge,
  R as _e,
  et as ve,
  ot as ye,
  q as be,
  st as xe,
  z as Se,
} from "./linkwidget.js";
import {
  E as Ce,
  F as we,
  M as Te,
  O as Ee,
  P as De,
  S as Oe,
  _ as ke,
  f as Ae,
  k as je,
  m as Me,
  v as Ne,
} from "./storelink.js";
import { t as Pe } from "./multisourceimage.js";
import { E as Fe, V as Ie, W as Le, y as Re } from "./partnerevent.js";
import { At as ze, l as Be, n as Ve } from "./apppartnereventspage.js";
import { n as He } from "./slider.js";
import "./modals.js";
import { i as Ue } from "./ostype.js";
import { a as We, o as Ge } from "./historyutils.js";
import { t as D } from "./throbber.js";
import { a as Ke, i as qe, r as Je, t as Ye } from "./languagepicker.js";
import {
  D as Xe,
  M as Ze,
  N as Qe,
  _ as $e,
  d as et,
  f as tt,
  l as nt,
  n as rt,
  t as it,
  v as at,
} from "./partnereventshared.module.js";
import { l as ot, o as st } from "./carouselarrows.js";
import { o as ct, s as lt } from "./simplesuccesserror.js";
import { a as ut } from "./loyaltyrewarddefs.js";
import { n as dt } from "./eventimageurlwithfallback.js";
import { n as ft, t as pt } from "./lazyrenderchildren.js";
import { l as mt } from "./creatorhomestore.js";
import { n as ht } from "./partnereventeditorcontext.js";
import {
  a as gt,
  c as _t,
  f as vt,
  h as yt,
  i as bt,
  l as xt,
  m as St,
  n as Ct,
  p as O,
  r as wt,
  s as Tt,
  u as Et,
} from "./clanimageupload.js";
import { a as Dt, n as Ot } from "./storeitemhooks.js";
import { r as kt } from "./storedisplayutils.js";
import { t as At } from "./eventadminpanel.js";
import { n as jt } from "./partnereventstore.js";
import {
  Ac as Mt,
  Bb as Nt,
  By as Pt,
  Cc as k,
  Dn as A,
  Dx as j,
  Ex as Ft,
  Fb as It,
  Gc as Lt,
  Go as Rt,
  Hl as zt,
  Iu as Bt,
  Jn as M,
  Jo as Vt,
  Jx as N,
  Kx as Ht,
  Ly as P,
  Mn as Ut,
  Nb as Wt,
  Nn as F,
  On as I,
  Or as Gt,
  Pi as Kt,
  Rr as qt,
  Sb as L,
  Tu as Jt,
  Tx as Yt,
  Ub as Xt,
  Wu as Zt,
  Wy as R,
  Yb as Qt,
  Yc as z,
  Yy as $t,
  Zc as en,
  a as tn,
  al as nn,
  bc as rn,
  fr as an,
  hS as B,
  hl as on,
  ir as V,
  is as sn,
  ix as H,
  ju as cn,
  lr as U,
  mn as W,
  oi as ln,
  ox as un,
  qx as dn,
  rr as G,
  rx as fn,
  t as pn,
  uS as K,
  vo as mn,
  wl as q,
  xS as hn,
  xr as gn,
  yr as _n,
  zr as vn,
  zx as yn,
  zy as bn,
} from "./main.js";
import { t as xn } from "./collapseablesection.js";
import { t as Sn } from "./cross.js";
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
      r: j(Math.round(parseFloat(n)), 0, 255),
      g: j(Math.round(parseFloat(r)), 0, 255),
      b: j(Math.round(parseFloat(i)), 0, 255),
      a: j(s, 0, 1),
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
    className: k(zn, `noOpinionatedGlobalStyles`),
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
        strLabel: L.Localize(`#ColorPicker_Hue`),
        nMax: 360,
        nValue: Math.round(s.h),
        strValueText: `${Math.round(s.h)}°`,
        fnSetValue: (e) => u({ ...s, h: e }),
      }),
      !i &&
        (0, X.jsx)(hr, {
          className: `xV4lUfTUFc4-`,
          strLabel: L.Localize(`#ColorPicker_Opacity`),
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
    e(j(r, 0, 1), j(i, 0, 1));
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
    "aria-label": L.Localize(`#ColorPicker_SaturationBrightness`),
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    "aria-valuenow": Math.round(t.v * 100),
    "aria-valuetext": `${Math.round(t.s * 100)}%, ${Math.round(t.v * 100)}%`,
    onKeyDown: (e) => {
      let r = pr(e, `ArrowRight`, `ArrowLeft`),
        i = pr(e, `ArrowUp`, `ArrowDown`);
      (r !== void 0 || i !== void 0) &&
        (e.preventDefault(),
        n({ ...t, s: j(t.s + (r ?? 0), 0, 1), v: j(t.v + (i ?? 0), 0, 1) }));
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
    children: (0, X.jsx)(He.Root, {
      min: 0,
      max: r,
      value: [i],
      onValueChange: (e) => o(e[0]),
      children: (0, X.jsx)(He.Track, {
        render: (0, X.jsx)(`div`, { className: k(Un, t) }),
        children: (0, X.jsx)(He.Handle, {
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
    [a, o] = g(ar),
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
            className: k(Jn, d && `_5Zk11eFAaLo-`),
            type: `text`,
            spellCheck: !1,
            autoComplete: `off`,
            "aria-label": L.Localize(`#ColorPicker_ColorValue`),
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
          children: L.Localize(`#ColorPicker_InvalidColor`),
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
              className: k(Zn, e === s && `wBwV8sUsuTo-`),
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
      console.warn(L.Localize(`#Sale_EyeDropperFailed`), e);
    } finally {
      e.classList.remove(or);
    }
  };
  if (!i) return null;
  let s = L.Localize(`#Sale_BackgroundColorPicker`);
  return (0, X.jsx)(qt, {
    toolTipContent: s,
    children: (0, X.jsx)(`button`, {
      type: `button`,
      className: Yn,
      "aria-label": s,
      onClick: o,
      children: (0, X.jsx)(ln, {}),
    }),
  });
}
function vr(e) {
  let { strCurrentHex: t, bOpaque: n, fnPick: r } = e;
  return (0, X.jsx)(`div`, {
    className: Qn,
    role: `group`,
    "aria-label": L.Localize(`#ColorPicker_Palette`),
    children: rr.map((e) => {
      let i = n && e === t;
      return (0, X.jsx)(
        `button`,
        {
          type: `button`,
          className: k($n, i && `wBwV8sUsuTo-`),
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
        strTitle: a ?? L.Localize(`#Button_Color`),
        onChange: f,
        onSubmit: p,
        children: (0, X.jsxs)(`div`, {
          className: er,
          children: [
            (0, X.jsx)(`button`, {
              type: `button`,
              className: k(tr, nr),
              onClick: p,
              children: L.Localize(`#Button_Save`),
            }),
            (0, X.jsx)(`button`, {
              type: `button`,
              className: tr,
              onClick: r,
              children: L.Localize(`#Button_Cancel`),
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
  a = (e instanceof HTMLElement, Gt(s, e, { bDisablePopTop: !0 }));
}
function Sr() {
  let e = (0, J.useContext)(yr);
  return { openColorPicker: (0, J.useCallback)((t, n) => xr(t, n, e), [e]) };
}
var Cr = `Vvgd20dCqjc-`;
function wr(e) {
  let { eventModel: t } = e,
    { data: n } = ze(t.clanSteamID.GetAccountID());
  if (!n || (!n.can_edit && !n.support_user) || It() == `community`) return;
  let r = t.GetAllTags(),
    i = [];
  if (
    (r.includes(`hide_store`) &&
      i.push(L.Localize(`#Sale_SaleEventIsHidden_Reason_ProductHide`)),
    r.includes(`mod_hide_store`) &&
      n.support_user &&
      i.push(L.Localize(`#Sale_SaleEventIsHidden_Reason_Mod`)),
    !t.BIsVisibleEvent() &&
      r.includes(`contenthub`) &&
      i.push(L.Localize(`#Sale_SaleEventIsHidden_ContentHub_Preview`)),
    !(t.BIsVisibleEvent() && i.length == 0))
  )
    return (0, X.jsx)(`div`, {
      className: Cr,
      children: (0, X.jsxs)(`div`, {
        children: [
          !t.BIsVisibleEvent() &&
            (0, X.jsx)(`div`, {
              className: `XZUb9Zq6ctI-`,
              children: L.Localize(`#Sale_SaleEventIsHidden`),
            }),
          i.length > 0 &&
            (0, X.jsxs)(`div`, {
              className: `XZUb9Zq6ctI-`,
              children: [
                L.LocalizePlural(`#Sale_SaleEventIsHidden_Reason`, i.length),
                (0, X.jsx)(`ul`, {
                  children: i.map((e) => (0, X.jsx)(`li`, { children: e }, e)),
                }),
              ],
            }),
        ],
      }),
    });
}
var Tr = `_4rizx-X0oWo-`;
function Er(e) {
  return (
    !e.jsondata.sale_logo_cross_promo_only &&
    (e.jsondata.localized_sale_logo?.filter(Boolean).length ?? 0) > 0
  );
}
function Dr(e) {
  let { eventModel: t, language: n } = e,
    [r, i] = f(() => [
      t.jsondata.sale_logo_url,
      bn.GetWithFallback(t.jsondata.localized_sale_logo, n),
    ]);
  return i && i?.length > 0
    ? r
      ? (0, X.jsx)(`a`, {
          className: Tr,
          href: H.STORE_BASE_URL + r,
          children: (0, X.jsx)(Or, { ...e }),
        })
      : (0, X.jsx)(`div`, {
          className: k(Tr, `SalePageLogoCtn`),
          children: (0, X.jsx)(Or, { ...e }),
        })
    : null;
}
function Or(e) {
  let { eventModel: t, language: n } = e,
    r = dt(t, `sale_logo`, n);
  return (0, X.jsx)(`img`, { src: r, alt: `logo` });
}
var kr = `_1Bceni0-cAw-`;
function Ar(e) {
  let { strURL: t } = e;
  return t
    ? (0, X.jsx)(`div`, {
        className: kr,
        children: (0, X.jsx)(`img`, { alt: ``, src: t }),
      })
    : null;
}
function jr(e) {
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
          className: k(
            Ne,
            we[`CustomStyle_${t.jsondata.sale_vanity_id}`],
            `SaleBackground`,
            De,
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
function Mr(e) {
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
      t.jsondata.item_source_type === Re.k_EContentHub &&
      ((t.jsondata.sale_vanity_id &&
        t.jsondata.sale_vanity_id.includes(`contenthubsalepage_`)) ||
        l),
    d = s ? `url(${s})` : `none`;
  return (0, X.jsxs)(X.Fragment, {
    children: [
      c
        ? (0, X.jsx)(v, {
            event: t,
            language: n,
            bIsPreview: i,
            subMenu: c,
            styleVariation: x.k_SubMenu,
            personalizedCarousels: a,
          })
        : (0, X.jsx)(Ar, { strURL: s }),
      (0, X.jsx)(`div`, {
        className: k({ SaleBackgroundCtn: !0, ContentHubSalePage: u }),
        children: (0, X.jsxs)(`div`, {
          className: k(
            we[`CustomStyle_${t.jsondata.sale_vanity_id}`],
            `SaleCustomCSS`,
            Ne,
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
                  className: k(Xe, it, rt),
                  src: s,
                  alt: `Header`,
                })
              : (0, X.jsx)(`div`, {
                  className: k(Xe, it),
                  style: {
                    backgroundImage: d,
                    backgroundRepeat: t.jsondata.sale_background_repeat,
                  },
                }),
            (0, X.jsx)(jr, { event: t, bIsPreview: i }),
            (0, X.jsx)(X.Fragment, { children: r }),
          ],
        }),
      }),
    ],
  });
}
var Nr = e(r()),
  Pr = e(d());
function Fr(e) {
  let { nSectionID: t, children: n } = e,
    [r, i] = J.useState(!1),
    [a, o] = J.useState(!1);
  J.useEffect(() => {
    S.Get().SetMouseOverSection(t, r);
  }, [t, r]);
  let s = f(() => S.Get().GetMouseOverSectionID()),
    c = t && t == s,
    l = () => S.Get().JumpToSection(t),
    u = J.useRef(null);
  return (
    ne((e) => t == e && (u.current?.scrollIntoView(), o(!0), !0)),
    (0, X.jsxs)(`div`, {
      ref: u,
      className: k({ [je]: !0, [Ae]: !!c, [Me]: !!a }),
      onAnimationEnd: () => o(!1),
      onMouseEnter: () => i(!0),
      onMouseLeave: () => i(!1),
      children: [
        r &&
          (0, X.jsx)(qt, {
            toolTipContent: R(`#Sale_SaleEditor_JumpTo_ttip`),
            direction: `top`,
            children: (0, X.jsx)(`button`, {
              className: `BxPO-muNnTI-`,
              onClick: l,
              children: (0, X.jsx)(mn, {}),
            }),
          }),
        n,
      ],
    })
  );
}
var Ir = `oj4yraCGjDk-`,
  Lr = `oBMBeb6Ow8M-`;
function Rr(e) {
  let { rgPresenters: t } = e;
  if (!t || t.length == 0) return null;
  let n = B(H.LANGUAGE);
  return t.length == 1
    ? (0, X.jsx)(`div`, {
        className: k(Ir, `PresenterDisclaimer`),
        children: L.LocalizeReact(
          `#SalePresented_By`,
          (0, X.jsx)(zr, { presentor: t[0], lang: n }),
        ),
      })
    : (0, X.jsx)(`div`, {
        className: k(Ir, `PresenterDisclaimer`),
        children: L.LocalizeReact(
          `#SalePresented_By_Multi`,
          t
            .slice(0, t.length - 1)
            .map((e, r) =>
              (0, X.jsxs)(
                J.Fragment,
                {
                  children: [
                    (0, X.jsx)(zr, { presentor: e, lang: n }),
                    t.length > 2 && `, `,
                  ],
                },
                e.url,
              ),
            ),
          (0, X.jsx)(zr, { presentor: t[t.length - 1], lang: n }),
        ),
      });
}
function zr(e) {
  let { presentor: t, lang: n } = e,
    r = Zt(t.url);
  return (0, X.jsx)(gn, {
    href: r,
    bUseLinkFilter: !0,
    className: Lr,
    children: bn.GetWithFallback(t.localized_presenter_name, n),
  });
}
function Br(e) {
  let t = B(Xt.LANGUAGE),
    n = xe(t),
    r = [...new Set(e.flatMap((e) => be(e) || []))].join(`,`),
    i = J.useMemo(() => (r ? r.split(`,`) : []), [r]),
    a = u({ queries: i.map((e) => ye(e, t, n)), combine: Vr });
  return J.useCallback(
    (e) => {
      let t = be(e),
        n = t ? i.indexOf(t) : -1;
      return n >= 0 ? a[n] : void 0;
    },
    [i, a],
  );
}
function Vr(e) {
  return e.map((e) => e.data);
}
function Hr(e) {
  let { event: t, broadcastEmbedContext: n } = e,
    r = !!t?.jsondata?.broadcast_display_wide_player,
    i = !!t?.jsondata?.broadcast_dispaly_wide_player_allow_chat;
  return (0, X.jsx)(X.Fragment, {
    children:
      !!(
        t.BEventCanShowBroadcastWidget() && t.BSaleShowBroadcastAtTopOfPage()
      ) &&
      (0, X.jsx)(re, {
        event: t,
        broadcastEmbedContext: n,
        bWideBroadcastDisplay: r,
        bWideBroadcastPermitChat: i,
      }),
  });
}
var Ur = `Fh-jFuR9Yvo-`,
  Wr = `_4rNPfhfRBrc-`,
  Gr = `Bc2anSpsdzg-`,
  Kr = `HxVKtqJLU2k-`,
  qr = `_4oPueAzMcGE-`,
  Jr = `kqyJu6iojzM-`,
  Yr = `UhkkMgNIeQo-`,
  Xr = `YSYpQ5wCRA0-`,
  Zr = `gOxlo3KMChI-`,
  Qr = `WUODlv8V5dM-`,
  $r = `_7grqK8KjlHk-`;
function ei(e, t) {
  return e ? (t ? !!e.valve_admin : !!(e.valve_admin || e.support_user)) : !1;
}
function ti(e, t) {
  let n = !!(e && e.BIsClanAccount()),
    { data: r } = ze(n ? e.GetAccountID() : 0);
  return n && ei(r, t);
}
function ni(e) {
  let { clanSteamID: t, id: n } = e;
  return ti(t, e.requireAdmin)
    ? (0, X.jsx)(`div`, {
        id: n,
        className: k(e.className, e.requireAdmin ? Ze : Qe),
        children: e.children,
      })
    : null;
}
var ri = 12,
  ii = 240;
function ai(e) {
  let { event: t } = e,
    [n] = b(Le, void 0),
    [r, i] = J.useState(!1),
    a = Qt(`rgMLRecommenderWishlist`, `application_config`),
    o = Array.isArray(a) && a.length > 0 && Number.isInteger(a[0]);
  return !t.BIsNextFest() || !o || n == Ie.Random || Fe(t) > 0
    ? null
    : (0, X.jsxs)(ni, {
        clanSteamID: t.clanSteamID,
        className: Ur,
        children: [
          (0, X.jsxs)(nn, {
            className: Wr,
            onClick: () => i(!r),
            children: [r ? `▼` : `▶`, ` Next Fest personalized order (VO)`],
          }),
          r && (0, X.jsx)(oi, { event: t, rgRecommendedAppIDs: a }),
        ],
      });
}
function oi(e) {
  let { event: t, rgRecommendedAppIDs: n } = e,
    [r, i] = J.useState(void 0);
  Dt(n, kt);
  let [a, o] = J.useState(void 0),
    [s, c] = J.useState(``),
    l = t.jsondata.sale_ml_recommender_weight_exponent || 2.5,
    u = parseFloat(s),
    d = a ?? w(t),
    f = u || l,
    p = J.useMemo(() => ue(n, n, (e) => e, d, f), [n, d, f]),
    m = J.useMemo(() => new Map(n.map((e, t) => [e, t])), [n]),
    h = J.useMemo(() => new Map(p.map((e, t) => [e, t])), [p]),
    g = n.length,
    _ = (e) => zt.Get().GetApp(e)?.GetName() ?? `App ${e}`,
    v = (e) => `hsl(${Math.round((240 * m.get(e)) / g)}, 80%, 65%)`,
    y = (e, t) =>
      (0, X.jsx)(
        `div`,
        {
          className: k($r, r == e && `It6LJnFk-X8-`),
          style: { height: ri, color: v(e) },
          title: `${_(e)} (${e}): recommended #${m.get(e) + 1}, shuffled to #${h.get(e) + 1}`,
          onMouseEnter: () => i(e),
          children: t,
        },
        e,
      ),
    b = (e, t) =>
      (0, X.jsx)(
        `line`,
        {
          x1: 0,
          y1: (m.get(e) + 0.5) * ri,
          x2: ii,
          y2: (h.get(e) + 0.5) * ri,
          stroke: t ? `white` : v(e),
          strokeWidth: t ? 2 : 1,
          strokeOpacity: t ? 1 : r === void 0 ? 0.6 : 0.15,
        },
        e,
      );
  return (0, X.jsxs)(`div`, {
    className: Gr,
    children: [
      (0, X.jsxs)(`div`, {
        className: Kr,
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
        className: qr,
        children: [
          (0, X.jsx)(G, {
            className: Jr,
            onClick: () => o(Yt()),
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
                className: Yr,
                placeholder: String(l),
                value: s,
                onChange: (e) => c(e.target.value),
              }),
            ],
          }),
          (a !== void 0 || s != ``) &&
            (0, X.jsx)(G, {
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
        className: Xr,
        onMouseLeave: () => i(void 0),
        children: [
          (0, X.jsxs)(`div`, {
            className: Zr,
            children: [
              (0, X.jsx)(`div`, {
                className: Qr,
                children: `Recommended order`,
              }),
              n.map((e, t) => y(e, `#${t + 1} ${_(e)}`)),
            ],
          }),
          (0, X.jsxs)(`div`, {
            className: Zr,
            children: [
              (0, X.jsx)(`div`, { className: Qr, children: `\xA0` }),
              (0, X.jsxs)(`svg`, {
                width: ii,
                height: g * ri,
                children: [
                  n.filter((e) => e != r).map((e) => b(e, !1)),
                  r !== void 0 && m.has(r) && b(r, !0),
                ],
              }),
            ],
          }),
          (0, X.jsxs)(`div`, {
            className: Zr,
            children: [
              (0, X.jsx)(`div`, { className: Qr, children: `Shuffled order` }),
              p.map((e) => y(e, `#${m.get(e) + 1} ${_(e)}`)),
            ],
          }),
        ],
      }),
    ],
  });
}
function si(e) {
  let { event: t, fnOnChangeDayIndex: n, addtionalAdminButtons: r } = e;
  return (0, X.jsxs)(X.Fragment, {
    children: [
      (0, X.jsx)(ai, { event: t }),
      (0, X.jsx)(At, {
        eventModel: t,
        fnOnUpdateSaleDayIndex: n,
        addtionalAdminButtons: r,
        bSupportsSticky: !0,
      }),
    ],
  });
}
var ci = new Map();
function li(e, t) {
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
function ui(e, t, n) {
  let r = new Map(),
    i = new Map(),
    a = new Map(),
    o,
    s,
    c = 0,
    { selectedTabBackgroundDef: l, nTabSaleSectionIndex: u } = li(t, n);
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
            pe(n, o)
              ? (u.push(c),
                i.set(c, s.background_id),
                r === 0 && a.set(c, s.background_id))
              : --r;
          }
          let d = e;
          for (; d < t.length && !pe(n, t[d]);) d += 1;
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
              pe(n, e) && i.set(e.unique_id, s.background_id);
            }
        });
        e < t.length && !pe(n, t[e]);
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
function di(e, t, n, r) {
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
      pi,
      {
        eventModel: e,
        displayDef: i,
        derivedGroupInfo: t.derivedGroupInfo,
        children:
          i && i.randomize_section_order && n !== E.EPreviewMode_EditBackground
            ? (0, X.jsx)(fi, {
                clanEventGID: e.GID,
                elSaleSections: t.elSaleSections,
              })
            : t.elSaleSections,
      },
      `background_group_` + t.groupID,
    )
  );
}
function fi(e) {
  let { clanEventGID: t, elSaleSections: n } = e,
    [r, i] = g(`sale_section_seed_${t}`, Yt());
  if (!n || n.length === 0) return null;
  if (n.length > 1 && r !== void 0) {
    let e = Ft(r);
    return (0, X.jsx)(X.Fragment, { children: dn(n, 0, e) });
  }
  return (0, X.jsx)(X.Fragment, { children: n });
}
function pi(e) {
  let { displayDef: t, children: n, eventModel: r, derivedGroupInfo: i } = e,
    a = Ke(),
    o = J.useCallback(
      (e, t) => {
        ci.set(i.nBackgroundGroupID, t);
      },
      [i],
    ),
    s = en(o);
  if (!n || (Array.isArray(n) && n.length == 0)) return null;
  if (!t) return (0, X.jsx)(X.Fragment, { children: n });
  let c;
  if (t.localized_background_art) {
    let e = K(a),
      n =
        e in t.localized_background_art
          ? e
          : Pt.GetLanguageFallback(H.LANGUAGE),
      i = t.localized_background_art[n];
    i && (c = m.GenerateURLFromHashAndExt(r.clanSteamID, i));
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
function mi(e) {
  return typeof e == `string` || typeof e == `number` ? e : JSON.stringify(e);
}
var hi = class {
    Keyify = (e) => mi(e);
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
  gi = `H8RsG3p9zyI-`,
  _i = `-ayc8iJmBgg-`,
  vi = `_6D2hAhDIwmY-`,
  yi = `ZP-iX4isxNw-`,
  bi = `AzJ42SXvU7g-`,
  xi = `DKOEqISmqI8-`,
  Si = `TMYfiVXl17Q-`,
  Ci = `j5T-MrFgQ20-`,
  wi = class e {
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
        (await Pr.default.get(i, { params: a, cancelToken: e && e.token })).data
          .success == 1
      );
    }
    SetPrimaryImageForImageGroup(e, t) {
      (this.m_curLocImageGroup &&
        this.m_curLocImageGroup.primaryImage.imageid == e.imageid &&
        t == this.m_curLocImageGroupType) ||
        ((this.m_curLocImageGroup = { primaryImage: e, localized_images: [] }),
        (this.m_curLocImageGroupType = t),
        (this.m_curLocImageGroup.localized_images = Ht(
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
          : m.GenerateURLFromHashAndExt(e, m.GetHashAndExt(n) ?? ``);
      }
      return null;
    }
    async DetermineAvailableLocalizationForGroup(t) {
      if (!this.m_curLocImageGroup) return;
      let n = this.m_curLocImageGroup.primaryImage,
        r = P.InitFromClanID(n.clanAccountID, H.EUNIVERSE),
        i = m.GetHashAndExt(n) ?? ``,
        a = [];
      for (let n = 0; n < 32; ++n)
        a.push(e.BDoesClanImageFileExistsOnCDNOrOrigin(t, r, i, n));
      let o = await Promise.all(a);
      s(() => {
        for (let e = 0; e < 32; ++e)
          o[e] &&
            (this.m_curLocImageGroup.localized_images[e] =
              m.GenerateURLFromHashAndExtAndLang(
                r,
                i,
                h.full,
                e,
                this.m_curLocImageGroupType ?? void 0,
              ));
      });
    }
    SetLocalizedImageGroupAtLang(e, t, n) {
      this.m_curLocImageGroup &&
        (this.m_curLocImageGroup.localized_images[e] = n
          ? m.GenerateURLFromHashAndExtAndLang(
              t,
              n,
              h.full,
              e,
              this.m_curLocImageGroupType ?? void 0,
            )
          : null);
    }
    AddLocalizeImageUploaded(e, t) {
      if (!this.m_curLocImageGroup) return;
      let n = this.m_curLocImageGroup.primaryImage;
      if (n?.image_hash == e) {
        let e = P.InitFromClanID(n.clanAccountID, H.EUNIVERSE),
          r = m.GetHashAndExt(n);
        r &&
          (this.m_curLocImageGroup.localized_images[t] =
            m.GenerateURLFromHashAndExtAndLang(
              e,
              r,
              h.full,
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
        .map((e) => m.GetHashAndExtFromURL(e));
    }
  };
Wt([t], wi.prototype, `m_curLocImageGroup`, void 0);
var Q = new wi();
function Ti(e, t) {
  let n = J.useRef(void 0),
    r = J.useCallback(
      (t) => {
        t.currentTarget.files.length > 0 &&
          (e(t.currentTarget.files), (t.currentTarget.value = ``));
      },
      [e],
    ),
    i = J.useCallback(() => n.current.click(), []);
  return [
    Nr.createPortal(
      (0, X.jsx)(`form`, {
        onSubmit: Di,
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
function Ei(e) {
  let [t, n] = J.useState(!1);
  return [
    {
      onDragEnter: J.useCallback((e) => {
        ((e.dataTransfer.files && e.dataTransfer.files[0]) ||
          (e.dataTransfer.types && e.dataTransfer.types[0] == `Files`)) &&
          n(!0);
      }, []),
      onDragLeave: J.useCallback((e) => {
        Jt(e) && n(!1);
      }, []),
      onDragEnd: J.useCallback(() => n(!1), []),
      onDragOver: t ? Di : void 0,
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
function Di(e) {
  e.preventDefault();
}
var Oi = `wxWVRBKbQ6Y-`,
  ki = `_1hQVgn9Glyw-`,
  Ai = `OQ-ETv0yIhg-`,
  ji = `wVGLukava5E-`;
function Mi(e) {
  let {
      onDropFiles: t,
      renderDesciption: n,
      elAdditonalButtons: r,
      elOverrideDragAndDropText: i,
    } = e,
    [a, o] = Ei(t),
    [s, c] = Ti(t, {
      accept: `image/png, image/jpeg, image/gif, image/webp`,
      multiple: !0,
    });
  return (0, X.jsxs)(`div`, {
    ...a,
    className: k(o ? ki : Oi, `DragAndDropContainer`),
    children: [
      !!n && n(),
      (0, X.jsx)(`div`, { children: i || R(`#ImagePicker_DragAndDrop`) }),
      (0, X.jsxs)(`div`, {
        className: Ai,
        children: [
          s,
          (0, X.jsxs)(`label`, {
            onClick: c,
            children: [
              (0, X.jsxs)(`span`, {
                children: [R(`#ImagePicker_OrBrowse`), ` `],
              }),
              (0, X.jsx)(`span`, {
                className: ji,
                children: R(`#selectimage_select_file`),
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
var Ni = `_5RINCHFuy0Y-`,
  Pi = `GWe0Hc-fT2A-`,
  Fi = `Wmeqy6nXS1Y-`,
  Ii = `_698Kbr-wNSM-`,
  Li = `_4l0OY5qTFkk-`,
  Ri = `_4StKqHsfdjg-`,
  zi = `dp7SyRphVOo-`,
  Bi = `OoUlU8pBBN4-`;
function Vi(e) {
  let {
      imageUploader: t,
      fnUploadComplete: n,
      elOverrideDragAndDropText: r,
      forceResolution: i,
      elAdditonalButtons: a,
      rgRealmList: o,
    } = e,
    [s, c] = f(() => [t.GetUploadImages(), qe.Get().GetCurEditLanguage()]),
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
                F(
                  (0, X.jsx)(I, {
                    strDescription: R(`#ImagePicker_Error`, i.name),
                  }),
                  window,
                )));
          } catch (e) {
            let t = Bt(e);
            (console.error(
              `ImageUploaderPanel.OnDropFiles: ` + t.strErrorMsg,
              t,
            ),
              F(
                (0, X.jsx)(I, {
                  strDescription: R(`#EventError_Code`, t.strErrorMsg ?? ``),
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
    (0, X.jsxs)(Mi, {
      onDropFiles: l,
      elAdditonalButtons: u,
      elOverrideDragAndDropText: r,
      children: [
        (0, X.jsx)(J.Fragment, {
          children: (0, X.jsx)(`div`, {
            className: Pi,
            children: s.map((e) =>
              (0, X.jsx)(
                Ui,
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
        (0, X.jsx)(Hi, {
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
function Hi(e) {
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
    className: Fi,
    children: [
      !!r.length &&
        (0, X.jsx)(G, {
          style: { margin: `8px` },
          onClick: n,
          disabled: !i,
          children: R(`#ImageUpload_Upload`),
        }),
      !!r.length &&
        (0, X.jsx)(G, {
          style: { margin: `8px` },
          onClick: t.ClearImages,
          disabled: a,
          children: R(`#ImageUpload_Clear`),
        }),
    ],
  });
}
var Ui = l(Wi);
function Wi(e) {
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
        Ut(r, n, `CropModal`, { strTitle: R(`#ImageUpload_CropModalTitle`) });
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
          ((t += ` ${R(`#ImageUpload_Deprecated`)}`),
          (r = R(`#ImageUpload_Deprecated_ttip`))));
      let i;
      return (
        (n.BIsOriginalMinimumDimensions(e) && n.FileTypeMatchesImageTypes(e)) ||
          (i = Ni),
        { label: t, data: e, strOptionClass: i, tooltip: r }
      );
    }).filter((e) => !e.data.bHiddenFromDropdown),
    o = {
      pending: R(`#ImageUpload_Pending`),
      waiting: R(`#ImageUpload_Waiting`),
      uploading: R(`#ImageUpload_Uploading`),
      processing: R(`#ImageUpload_Processing`),
      success: R(`#ImageUpload_SuccessCard`),
      failed: R(`#ImageUpload_Failed`),
    },
    s = n.BSupportsLanguages()
      ? qi(Pt.GetLanguageListForRealms(i ?? [hn.k_ESteamRealmGlobal]))
      : null,
    c = n.IsValidAssetType(e.forceResolution, e.forceFileType),
    l = n.status == `pending`,
    u = o[n.status];
  n.status == `pending` &&
    (c.needsCrop
      ? (u = R(`#ImageUpload_NeedsCrop`))
      : c.error && (u = R(`#ImageUpload_Invalid`)));
  let d,
    f = n.GetCurrentImageOption();
  return (
    f && (d = a?.find((e) => e.data.sKey == f.sKey)?.data),
    (d ||= a?.[0]?.data),
    (0, X.jsxs)(`div`, {
      className: Ri,
      children: [
        (0, X.jsx)(`div`, {
          className: Ii,
          onClick: () => r(n),
          children: (0, X.jsx)(rn, {}),
        }),
        (0, X.jsx)(Gi, { asset: n }),
        s &&
          (0, X.jsx)(M, {
            strDropDownClassName: `ZsXFGEgobIY-`,
            rgOptions: s,
            selectedOption: n.language,
            onChange: (e) => (n.language = e.data),
            disabled: !l,
          }),
        a &&
          a?.length > 1 &&
          (0, X.jsx)(M, {
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
          className: k({ [$e]: !0, [Li]: n.status == `failed` }),
          children: [
            u,
            Tt(n.status) &&
              (0, X.jsx)(`div`, {
                className: `RPxGbDpMPvc-`,
                children: (0, X.jsx)(D, { size: `small` }),
              }),
          ],
        }),
        (0, X.jsx)(`div`, { className: Li, children: n.message }),
        l &&
          c.error &&
          (0, X.jsx)(`div`, { className: `_4l0OY5qTFkk-`, children: c.error }),
        l &&
          c.needsCrop &&
          (0, X.jsx)(an, {
            onClick: () => t(n),
            children: R(`#ImageUpload_OpenEditor`),
          }),
      ],
    })
  );
}
function Gi(e) {
  let { asset: t } = e;
  return t.BIsVideo()
    ? (0, X.jsxs)(`div`, {
        className: zi,
        onClick: (e) => F((0, X.jsx)(Ki, { asset: t }), cn(e)),
        children: [
          (0, X.jsxs)(`span`, {
            className: Bi,
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
        className: zi,
        style: { backgroundImage: `url(${t.dataUrl})` },
        children: (0, X.jsxs)(`span`, {
          className: Bi,
          children: [t.width, ` x `, t.height],
        }),
      });
}
function Ki(e) {
  let { asset: t, closeModal: n } = e;
  return (0, X.jsx)(A, {
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
function qi(e) {
  let t = [],
    n = [];
  for (let t of e) {
    if (t == 25) continue;
    let e = R(`#Language_` + K(t));
    n.push({ label: e, data: t });
  }
  return (
    n.sort((e, t) => e.label.localeCompare(t.label)),
    n.forEach((e) => t.push({ label: e.label, data: e.data })),
    n
  );
}
var Ji = (function (e) {
    return (
      (e[(e.k_eInsertThumbnail = 1)] = `k_eInsertThumbnail`),
      (e[(e.k_eInsertFullImage = 2)] = `k_eInsertFullImage`),
      (e[(e.k_eShowImageGroup = 3)] = `k_eShowImageGroup`),
      (e[(e.k_eInsertVideo = 4)] = `k_eInsertVideo`),
      e
    );
  })({}),
  Yi = `MBOGLVBsJno-`,
  Xi = `W-3Dq3-54Lg-`,
  Zi = `quLSuE3pc1o-`,
  Qi = `lnTEZ3RD-vc-`,
  $i = `kpa9FPV-AL0-`,
  ea = `n8uggtUd8lI-`,
  ta = `PNoxLvZvnxs-`,
  na = `iGpmTErZND8-`,
  ra = `hAZUPjOGGxE-`,
  ia = `crDJadcMi8A-`,
  aa = `AmP7BU2J8Pw-`;
function oa(e) {
  let { fnSetImageSearch: t } = e,
    n = (0, J.useRef)(null);
  return (0, X.jsx)(`div`, {
    className: aa,
    children: (0, X.jsx)(`input`, {
      ref: n,
      className: ia,
      type: `text`,
      placeholder: R(`#ImagePicker_Search`),
      onChange: (e) => t(e.currentTarget.value),
      onKeyDown: (e) => {
        e.key == `Escape` && (t(``), n.current && (n.current.value = ``));
      },
    }),
  });
}
var sa = J.memo(function (e) {
  let {
    fileNameSearch: t,
    clanAccountID: n,
    imageInsertCallBack: r,
    fnOnExpandImage: i,
    showImageActions: a = !0,
    InternalOpenLocalizeImageGroup: o,
  } = e;
  return (0, X.jsx)(ca, {
    clanAccountID: n,
    fileNameSearch: t,
    children: (e, t) =>
      e.map((e) =>
        (0, X.jsx)(
          la,
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
function ca(e) {
  let { clanAccountID: t, fileNameSearch: n, children: r } = e,
    i = St(t),
    a = n.trim().toLowerCase() || ``,
    o = O.GetFilteredClanImagesList(i, a);
  if (o.length == 0) {
    let e = P.InitFromClanID(t, H.EUNIVERSE),
      n = O.GetLoadState(e);
    return n && n.loaded
      ? (0, X.jsx)(
          `div`,
          {
            className: $i,
            children:
              a.length > 0
                ? R(`#ImagePicker_EmptySearch`)
                : R(`#ImagePicker_Empty`),
          },
          `ImagePicker_Result`,
        )
      : n && n.errMsg
        ? (0, X.jsx)(
            `div`,
            { className: ea, children: R(`#ImagePicker_Error`, n.errMsg) },
            `ImagePicker_Result`,
          )
        : (0, X.jsx)(
            `div`,
            { className: $i, children: R(`#Loading`) },
            `ImagePicker_Result`,
          );
  }
  return r(o, a);
}
function la(e) {
  let {
      clanImage: t,
      searchStringHilight: n,
      imageInsertCallBack: r,
      OnImageClick: i,
      showImageActions: a,
      fnOnOpenLocalizedImageGroup: o,
    } = e,
    [s, c] = J.useState(!1),
    l = () => r(t, Ji.k_eInsertFullImage),
    u = () => r(t, Ji.k_eInsertVideo),
    d = () => r(t, Ji.k_eInsertThumbnail),
    f = (e) => {
      t.url &&
        (e.dataTransfer.setData(`text`, t.url),
        O.GetClanImageDragListener().forEach((e) => {
          e(P.InitFromClanID(t.clanAccountID, H.EUNIVERSE), !0);
        }));
    },
    p = (e) => {
      t.url &&
        O.GetClanImageDragListener().forEach((e) => {
          e(P.InitFromClanID(t.clanAccountID, H.EUNIVERSE), !1);
        });
    },
    h = (e) => {
      F(
        (0, X.jsx)(A, {
          strTitle: R(`#ImagePicker_DeleteImageTitle`),
          strDescription: ``,
          onOK: _,
          onCancel: v,
          closeModal: v,
          children: (0, X.jsxs)(J.Fragment, {
            children: [
              (0, X.jsx)(`div`, {
                children: R(`#ImagePicker_DeleteAreYouSure`, t.file_name ?? ``),
              }),
              (0, X.jsx)(`br`, {}),
              (0, X.jsx)(`br`, {}),
              (0, X.jsx)(`div`, { children: R(`#ImagePicker_DeleteWarning`) }),
            ],
          }),
        }),
        cn(e) ?? window,
      );
    },
    g = (e) => {
      (console.log(`ClanImageWrapper on delete error: ` + e),
        F(
          (0, X.jsx)(I, {
            strTitle: R(`#Error_FailureNotice`),
            strDescription: R(`#EventDisplay_DeleteEvent_Error`),
            children: (0, X.jsx)(`p`, { children: e }),
          }),
          window,
        ));
    },
    _ = () => {
      c(!0);
      let e = P.InitFromClanID(t.clanAccountID, H.EUNIVERSE);
      O.DeleteClanImage(e, t)
        .then((e) => {
          (e.success != 1 && g(Bt(e).strErrorMsg), c(!1));
        })
        .catch((e) => {
          (g(Bt(e).strErrorMsg), c(!1));
        });
    },
    v = () => {},
    y = () => {
      i && i(t);
    },
    b = t.file_name ? t.file_name : ``,
    x = Je(n, b, String(t.imageid), ta),
    S = m.BIsClanImageVideo(t),
    C = a && !s && !S,
    ee = a && !s && !S,
    te = a && !s && S,
    w = a && !s && !S;
  return (0, X.jsx)(ft, {
    placeholderHeight: `100vh`,
    className: Yi,
    rootMargin: `0px 0px 100% 0px`,
    children: (0, X.jsxs)(`div`, {
      className: na,
      children: [
        (0, X.jsx)(`div`, {
          className: Xi,
          style: { backgroundImage: S ? `` : `url( '${t.thumb_url}' )` },
          draggable: !0,
          onDragStart: f,
          onDragEnd: p,
          onDoubleClick: l,
          onClick: y,
          children: (0, X.jsx)(da, { clanImage: t, className: Zi }),
        }),
        C &&
          (0, X.jsx)(`span`, {
            className: `escPuFxqCbM-`,
            onClick: l,
            children: R(`#ImagePicker_FullSize`),
          }),
        s && (0, X.jsx)(D, { size: `medium`, className: `_9dVXPw6twXc-` }),
        ee &&
          (0, X.jsx)(`span`, {
            className: `_9em3bZdejR0-`,
            onClick: d,
            children: R(`#ImagePicker_Thumbnail`),
          }),
        w &&
          o &&
          (0, X.jsx)(ua, {
            bDeleting: s,
            clanImage: t,
            fnOnOpenLocalizedImageGroup: o,
          }),
        te &&
          (0, X.jsx)(`span`, {
            className: `escPuFxqCbM-`,
            onClick: u,
            children: R(`#ImagePicker_Video`),
          }),
        !s &&
          (0, X.jsx)(`span`, {
            className: `LzW73RDKl40-`,
            onClick: h,
            children: (0, X.jsx)(`img`, {}),
          }),
        (0, X.jsx)(`div`, { className: Qi, title: b, children: x }),
      ],
    }),
  });
}
function ua(e) {
  let { clanImage: t, fnOnOpenLocalizedImageGroup: n, bDeleting: r } = e,
    { data: i } = ze(t.clanAccountID);
  return r || !i?.valve_admin
    ? null
    : (0, X.jsx)(`span`, {
        className: k(ra, Qe),
        onClick: () => n?.(t),
        children: `(VO) ` + R(`#ImagePicker_Localized`),
      });
}
function da(e) {
  let { clanImage: t, className: n } = e;
  return m.BIsClanImageVideo(t)
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
function fa(e) {
  let { clanSteamID: t, closeModal: n, OnClanImageSelected: r } = e,
    i = J.useCallback(
      (e, t) => {
        (r?.(e, t), n?.());
      },
      [r, n],
    ),
    [a, o] = J.useState(``);
  return (0, X.jsxs)(A, {
    strTitle: R(`#ImagePicker_Images`),
    strDescription: R(`#ImagePicker_DoubleClickToSelect`),
    bAlertDialog: !0,
    onOK: n,
    onCancel: n,
    children: [
      (0, X.jsx)(oa, { fnSetImageSearch: o }),
      (0, X.jsx)(sa, {
        clanAccountID: t.GetAccountID(),
        fileNameSearch: a,
        imageInsertCallBack: i,
        showImageActions: !1,
      }),
    ],
  });
}
function pa(e) {
  let { clanSteamID: t, OnClanImageSelected: n } = e;
  return (0, X.jsxs)(`div`, {
    className: Ai,
    children: [
      (0, X.jsxs)(`label`, {
        htmlFor: `clanimagedialog`,
        children: [
          (0, X.jsxs)(`span`, {
            children: [R(`#ImagePicker_PreviousImages`), ` `],
          }),
          (0, X.jsx)(`span`, {
            className: ji,
            children: R(`#ImagePicker_PreviousImages2`),
          }),
        ],
      }),
      (0, X.jsx)(`input`, {
        style: { display: `none` },
        id: `clanimagedialog`,
        type: `button`,
        onClick: (e) => {
          F(
            (0, X.jsx)(fa, { clanSteamID: t, OnClanImageSelected: n }),
            cn(e) ?? window,
          );
        },
      }),
    ],
  });
}
function ma(e) {
  let {
      clanSteamID: t,
      rgSupportArtwork: n,
      localizedPrimaryImage: r,
      bAllowPreviousClanImageSelection: i,
      fnSetImageURL: a,
      rgRealmList: o,
    } = e,
    [s] = f(() => [qe.Get().GetCurEditLanguage()]),
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
            let t = Bt(e);
            (console.error(`AddExistingClanImage: ` + t.strErrorMsg, t),
              F(
                (0, X.jsx)(I, {
                  strDescription: R(`#EventError_Code`, t.strErrorMsg ?? ``),
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
                  pa,
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
          let r = O.GetClanImageByImageHash(t, e?.image_hash ?? ``),
            i = n.image.GetCurrentImageOption();
          if (r && i) {
            let e = bt(n.image.language, s, o);
            a(i.artworkType, r, e);
          }
        }
      }
    };
  return (0, X.jsx)(Vi, {
    ...e,
    imageUploader: l,
    rgRealmList: o,
    elAdditonalButtons: u
      ? [
          (0, X.jsx)(
            D,
            { position: `center`, size: `medium`, string: R(`#Loading`) },
            `throbbing`,
          ),
        ]
      : m,
    fnUploadComplete: h,
  });
}
var ha = `x0kXRDaNEsY-`,
  ga = `tggLx72V-Ck-`,
  _a = `DVwf02s2GtI-`,
  va = `zREkqfL42-U-`,
  ya = `_7zBg1-UuADM-`,
  ba = `TMQhyilc41c-`,
  xa = `t2inDYSKOto-`,
  Sa = `-FHzhwwvQvA-`,
  Ca = `ZUy8iSsvilc-`,
  wa = `XRZj1OeBHRk-`,
  Ta = `_2lViMA09hm4-`,
  Ea = `BTC1IyUleCA-`,
  Da = `lEWE2I7Rsj8-`,
  Oa = `_12sYjoMc9wE-`,
  ka = `_8hs8sf5-YPQ-`,
  Aa = `Hy2GxVyZVDA-`;
function ja(e) {
  let {
      clanImage: t,
      closeModal: n,
      lang: r,
      fnOnArtworkLangChange: i,
      realms: a,
      fnLangHasData: o,
    } = e,
    [s, c] = (0, J.useState)(r),
    l = P.InitFromClanID(t.clanAccountID, H.EUNIVERSE),
    u = f(() => m.GenerateURLFromHashAndExt(l, m.GetHashAndExt(t) ?? ``));
  return (0, X.jsx)(A, {
    strTitle: R(`#selectimage_change_artwork_lang_title`),
    strDescription: R(`#selectimage_change_artworl_lang_desc`),
    onOK: () => i?.(t, r, s),
    onCancel: n,
    closeModal: n,
    children: (0, X.jsxs)(`div`, {
      className: k($e, ga),
      children: [
        (0, X.jsx)(`div`, {
          className: _a,
          children: (0, X.jsx)(`img`, { className: ha, src: u }),
        }),
        (0, X.jsx)(Ye, {
          selectedLang: s,
          fnLangHasData: o,
          fnOnLanguageChanged: c,
          realms: a,
        }),
      ],
    }),
  });
}
function Ma(e) {
  if (!e) return e;
  let t = e.lastIndexOf(`.`);
  return t === -1 ? e : e.substring(0, t);
}
var Na = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAFo9M/3AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzcyREYxMUExREVBMTFFOUJFQTREQjZGQTJEQ0UzOTMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzcyREYxMUIxREVBMTFFOUJFQTREQjZGQTJEQ0UzOTMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NzJERjExODFERUExMUU5QkVBNERCNkZBMkRDRTM5MyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NzJERjExOTFERUExMUU5QkVBNERCNkZBMkRDRTM5MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pmk/vzIAAAFiSURBVHjaYnz79i0DCDAB8X8gVgUIIEaoSBmIIQRkvAMIIBADJMUIxBVArI0sAAYAAQTTAwNlTEgcXZDpLFDOHCC+A8Sd6FoEAAIIJBAOZKxAEoTZmAPEKSxQSZitFVCz10D5O1iQdE4AYgsouwOKBUBWvAEyRKF+RQa+QLwFIIDQHYUM/gAxC8hfb6C6QTgLKvkaiGtAikBuUAHiD0g6QZJzob5gYUEz9jXUPU+AWAYWETDwG+o9mGQGLLAFoFbcBGJFIGaDagDHCrIV6ti8ArLCFoc3wf4HCDB84YANVEC9HwPEU4B4EiycQKEqgAUjx+F3INYHYkOoZh6YC0CeEUQLS2Qbi4HYCYgvQ8P8AhC3QOMaJRjRNf4C4m3QcP8ODd4QqM0dyIGEDgKgCtmgUf8dypeBamSERoEALi8sAuUnID4AxIegbHQA18OCRTKOlGgBeSECmuH+E4nfQPWAXQwAHbJ3VkYR2TIAAAAASUVORK5CYII=`;
function Pa(e) {
  let {
    clanSteamID: t,
    fnGetImageHash: n,
    fnLangHasData: r,
    fnOnRemoveImage: i,
  } = e;
  yt(t.GetAccountID());
  let a = J.useMemo(() => {
      let e = [],
        t = Pt.GetLanguageListForRealms([
          hn.k_ESteamRealmGlobal,
          hn.k_ESteamRealmChina,
        ]);
      for (let r of t) {
        let t = n(r);
        if (t) {
          let n = K(r),
            i = R(`#Language_` + n);
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
    [o, s, c] = q();
  return (0, X.jsxs)(`div`, {
    className: Ea,
    children: [
      (0, X.jsx)(`div`, {
        className: Da,
        children: R(`#selectimage_uploaded_languages`),
      }),
      (0, X.jsx)(`div`, {
        className: Ca,
        children: a.map((n) =>
          (0, X.jsx)(
            Fa,
            { langData: n, ...e },
            `lang_select_` + t.GetAccountID() + ` ` + n.strLang,
          ),
        ),
      }),
      !!i &&
        (0, X.jsxs)(G, {
          onClick: s,
          children: [
            R(`#Sale_RemoveAll`),
            (0, X.jsx)(_n, { tooltip: R(`#Sale_RemoveAll_Tooltip`) }),
          ],
        }),
      (0, X.jsx)(W, {
        active: o,
        children: (0, X.jsx)(A, {
          strTitle: R(`#Dialog_AreYouSure`),
          strDescription: R(`#ImageUpload_DeleteAll_Confirm`),
          closeModal: c,
          onOK: () => {
            for (let e = 0; e < 32; e++) r && i && r(e) && i(e);
          },
        }),
      }),
    ],
  });
}
function Fa(e) {
  let {
      clanSteamID: t,
      langData: n,
      langOverride: r,
      fnOnLanguagePreviewChange: i,
      fnOnArtworkLangChange: a,
      fnOnRemoveImage: o,
    } = e,
    [s, c] = f(() => {
      let e = O.GetClanImageByImageHash(t, n.imgHash),
        i = ``;
      e &&
        (i = m.GenerateURLFromHashAndExtAndLang(
          t,
          m.GetHashAndExt(e),
          h.full,
          n.lang,
        ));
      let a = ya;
      return (r != n.lang && (a = n.imgHash ? va : ba), [i, a]);
    });
  return (0, X.jsxs)(`div`, {
    id: n.strLang,
    className: xa,
    onClick: (e) => {
      let t = B(e.currentTarget.id);
      i(t);
    },
    children: [
      (0, X.jsx)(`div`, { className: c, children: n.locLang }),
      (0, X.jsxs)(`span`, {
        className: Sa,
        children: [
          !!s &&
            (0, X.jsx)(`a`, {
              href: s,
              target: `_blank`,
              children: (0, X.jsx)(vn, {
                toolTipContent: R(`#selectimage_viewimage_ttip`),
                children: sn(),
              }),
            }),
          !!a && (0, X.jsx)(Ia, { ...e }),
          !!o && (0, X.jsx)(La, { fnOnRemoveImage: o, langData: n }),
        ],
      }),
    ],
  });
}
function Ia(e) {
  let {
      clanSteamID: t,
      langData: n,
      fnOnArtworkLangChange: r,
      fnGetImageHash: i,
      fnLangHasData: a,
      realms: o,
    } = e,
    [s, c, l] = q(),
    u = f(() => {
      let e = i(n.lang);
      return (
        N(
          !e || !e.includes(`.`),
          `ChangeLanguageButton: Unexpected File Extension: ` + e,
        ),
        O.GetClanImageByImageHash(t, e)
      );
    });
  if (!u) console.error(`image does not exists on server`);
  else
    return (0, X.jsxs)(X.Fragment, {
      children: [
        (0, X.jsx)(vn, {
          toolTipContent: R(`#selectimage_reassign_image_ttip`),
          children: (0, X.jsx)(`img`, {
            "data-lang": n.lang,
            src: Na,
            onClick: () => c(),
          }),
        }),
        (0, X.jsx)(z, {
          children: (0, X.jsx)(W, {
            active: s,
            children: (0, X.jsx)(ja, {
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
function La(e) {
  let { fnOnRemoveImage: t, langData: n } = e,
    [r, i, a] = q();
  return (0, X.jsxs)(X.Fragment, {
    children: [
      (0, X.jsx)(vn, {
        toolTipContent: R(`#selectimage_delete_image_ttip`),
        children: (0, X.jsx)(`img`, {
          "data-lang": n.lang,
          src: Sn,
          onClick: i,
        }),
      }),
      (0, X.jsx)(z, {
        children: (0, X.jsx)(W, {
          active: r,
          children: (0, X.jsx)(A, {
            strTitle: R(`#selectimage_remove_image`),
            strDescription: R(
              `#selectimage_remove_details`,
              R(`#Language_` + K(n.lang)),
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
var Ra = `dGiOZKKuxfQ-`,
  za = `h7-04bl97uc-`,
  Ba = `MhIotXf5RFA-`,
  Va = `mSMnUkR7SZM-`,
  Ha = `aWAciZoU3Zo-`,
  Ua = `_8AV36Rh-Ve4-`,
  Wa = `lxYifi3D8mU-`,
  Ga = `MwNTpeRZ8FM-`,
  Ka = `RdR4GEnIG5Q-`,
  qa = `epGy6XXAGPQ-`;
function Ja(e) {
  let {
      event: t,
      spotlightURLOverride: n,
      fnHandleOpenEvent: r,
      fnImageFailureCallback: i,
      fnFilterImageURLsForKnownFailures: a,
      langOverride: o,
    } = e,
    s = Ue(),
    c = J.useCallback(
      (e) => {
        (e.preventDefault(), r && r(t));
      },
      [t, r],
    ),
    l = o || B(H.LANGUAGE),
    [u, d, p] = f(() => [
      t.GetSummaryWithFallback(l),
      t.GetNameWithFallback(l),
      t.BShowLibrarySpotlightText(),
    ]),
    m = `spotlight`,
    g = h.spotlight_main;
  (t.appid == 2434320 || H.EUNIVERSE == 2) &&
    ((m = s
      ? `localized_store_app_spotlight_mobile`
      : `localized_store_app_spotlight`),
    (g = h.full));
  let _ = ut(n === void 0 ? t : void 0, m, l, g) ?? (n === void 0 ? [] : [n]);
  a && _ && (_ = a(_));
  let v = u.replace(/https:\/\/[^ ]*/gi, ``).trimLeft();
  return (0, X.jsx)(J.Fragment, {
    children: (0, X.jsx)(`div`, {
      className: Ka,
      ref: e.containerRef,
      children: (0, X.jsxs)(Mt, {
        className: k(qa, Ra),
        onActivate: c,
        focusable: !0,
        children: [
          (0, X.jsx)(`div`, {
            className: Wa,
            children: (0, X.jsx)(Pe, {
              className: Ga,
              rgSources: _,
              onIncrementalError: (e, t, n) => i && i(t),
            }),
          }),
          (0, X.jsxs)(`div`, {
            className: za,
            children: [
              (0, X.jsx)(Pe, {
                className: Ba,
                rgSources: _,
                onIncrementalError: (e, t, n) => i && i(t),
              }),
              (0, X.jsx)(`div`, { className: Ua }),
              (0, X.jsx)(`div`, {
                className: Ha,
                children:
                  p &&
                  (0, X.jsxs)(`div`, {
                    className: `Kirdf-ZVux8-`,
                    children: [
                      (0, X.jsx)(Pe, {
                        className: `D6QCZmpoq5M-`,
                        rgSources: _,
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
                            children: v,
                          }),
                        ],
                      }),
                    ],
                  }),
              }),
            ],
          }),
          (0, X.jsx)(`div`, { className: Va }),
        ],
      }),
    }),
  });
}
var Ya = `JMbtQkd0K8E-`,
  Xa = `snS7KDov-nE-`,
  Za = `nvWdGclp6FI-`,
  Qa = `xK18jc4N1cw-`,
  $a = `IQEedJq4bc8-`,
  eo = `fCimlPrmscM-`,
  to = `e6k9OpDXG-Q-`,
  no = `seprbrMSMhI-`,
  ro = `_4CNssq7QFLI-`,
  io = `yzbYtn5vgZU-`,
  ao = `idlQxtNGVBg-`,
  oo = `mELVvJo8G3c-`,
  so = `fF5tI3UN-YY-`;
function co(e) {
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
    g = d(n, t),
    _ = g ? m.GenerateURLFromHashAndExtAndLang(i, g, h.full, t) : ``,
    [v] = f(() => [vo(n, d)]);
  return v == 0
    ? (0, X.jsxs)(`div`, {
        className: _a,
        children: [
          n === `capsule` &&
            (0, X.jsx)(fo, {
              imgURL: H.IMG_URL + `events/defaults/default_img_cover.jpg`,
              eventModel: a,
            }),
          n === `background` &&
            (0, X.jsx)(po, {
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
            (0, X.jsx)(lo, { langOverride: t, artworkType: n, eventModel: a }),
          (0, X.jsx)(`div`, { children: R(`#EventEditor_ArtworkMissing`) }),
        ],
      })
    : (0, X.jsxs)(`div`, {
        className: _a,
        children: [
          n === `capsule` &&
            (0, X.jsx)(fo, { imgURL: _, eventModel: a, langOverride: t }),
          n === `background` &&
            (0, X.jsx)(po, {
              imgURL: _,
              lang: t,
              eventModel: a,
              partnerEventStore: o,
            }),
          n === `spotlight` && (0, X.jsx)(mo, { imgURL: _, event: a, lang: t }),
          n === `localized_store_app_spotlight` &&
            (0, X.jsx)(mo, { imgURL: _, event: a, lang: t }),
          n === `localized_store_app_spotlight_mobile` &&
            (0, X.jsx)(mo, { imgURL: _, event: a, lang: t }),
          (n === `broadcast_left` || n === `broadcast_right`) &&
            (0, X.jsx)(ho, {
              imgURL: _,
              side: n === `broadcast_right` ? `right` : `left`,
            }),
          n === `sale_header` && (0, X.jsx)(go, { imgURL: _ }),
          n === `sale_overlay` && (0, X.jsx)(_o, { imgURL: _ }),
          p.includes(n) &&
            (0, X.jsx)(`img`, {
              className: `_1MBhWd0--I8-`,
              src: Q.GetLocalizedImageGroupForEditAsURL(i, t) ?? void 0,
            }),
          n === `product_banner` && (0, X.jsx)($, { imgURL: _ }),
          n === `product_mobile_banner` && (0, X.jsx)($, { imgURL: _ }),
          n === `sale_logo` && (0, X.jsx)($, { imgURL: _ }),
          n === `bestofyear_banner` && (0, X.jsx)($, { imgURL: _ }),
          n === `bestofyear_banner_mobile` && (0, X.jsx)($, { imgURL: _ }),
          (0, X.jsx)(Pa, {
            langOverride: t,
            clanSteamID: i,
            fnOnLanguagePreviewChange: r,
            fnOnRemoveImage: s,
            fnOnArtworkLangChange: c,
            realms: l,
            fnLangHasData: u,
            fnGetImageHash: (e) => Ma(d(n, e) ?? ``),
          }),
        ],
      });
}
function lo(e) {
  let { artworkType: t, langOverride: n, eventModel: r } = e,
    i = Et[t],
    a = J.useMemo(
      () => uo(R(`#EventEditor_ArtworkType_` + t), `${i.width} X ${i.height}`),
      [i.height, i.width, t],
    );
  return (0, X.jsx)(mo, { lang: n, imgURL: a, event: r });
}
function uo(e, t) {
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
function fo(e) {
  let { imgURL: t, eventModel: n, langOverride: r } = e,
    i = Ke();
  return (0, X.jsx)(`div`, {
    style: { display: `flex`, width: `304px` },
    children: (0, X.jsx)(_, {
      event: n,
      imageURLOverride: t,
      langOverride: r ?? i,
    }),
  });
}
function po(e) {
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
      ? (0, X.jsx)(Be, {
          text: o || ``,
          showErrorInfo: !1,
          event: n,
          languageOverride: qe.Get().GetCurEditLanguage(),
        })
      : R(`#selectimage_display_event_body`);
  return (0, X.jsxs)(`div`, {
    className: Ya,
    children: [
      (0, X.jsx)(`div`, {
        className: Xa,
        children: R(`#selectimage_preview_title_1`),
      }),
      (0, X.jsx)(`div`, {
        className: k(Za, `DetailPageExample`),
        children: (0, X.jsxs)(`div`, {
          className: Qa,
          children: [
            (0, X.jsx)(`div`, {
              className: $a,
              children: (0, X.jsx)(`img`, { src: e.imgURL }),
            }),
            (0, X.jsx)(`div`, {
              className: eo,
              children: (0, X.jsxs)(`div`, {
                className: to,
                children: [
                  (0, X.jsx)(`div`, {
                    className: no,
                    children: a || R(`#selectimage_display_event_title`),
                  }),
                  (0, X.jsx)(`div`, {
                    className: ro,
                    children: s || R(`#selectimage_display_event_subtitle`),
                  }),
                  (0, X.jsx)(`div`, { className: io, children: u }),
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
              children: R(`#selectimage_preview_title_2`),
            }),
            (0, X.jsx)(`div`, {
              className: k(`nvWdGclp6FI-`, `DetailPageExample`),
              children: (0, X.jsx)(`div`, {
                className: `wm--jcPYtBE-`,
                children: (0, X.jsx)(
                  Ve,
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
var mo = (e) => {
    let [t] = Ot(e.event.appid, { include_assets: !0 });
    if (!t) return null;
    let n = t.GetName(),
      r = t.GetAssets()?.GetCommunityIconURL();
    return (0, X.jsx)(`div`, {
      className: ao,
      children: (0, X.jsx)(Ja, {
        event: e.event,
        strDisplayName: n ?? ``,
        gameIconUrl: r,
        spotlightURLOverride: e.imgURL,
        langOverride: e.lang,
      }),
    });
  },
  ho = (e) => {
    let t = [
      (0, X.jsx)(`img`, { src: e.imgURL }, `img`),
      (0, X.jsx)(`div`, { className: ka }, `video`),
    ];
    return (
      e.side === `right` && t.reverse(),
      (0, X.jsx)(`div`, { className: oo, children: t })
    );
  },
  go = (e) =>
    (0, X.jsx)(`div`, {
      className: so,
      children: (0, X.jsx)(`img`, { style: { width: `100%` }, src: e.imgURL }),
    }),
  _o = (e) =>
    (0, X.jsx)(`div`, {
      className: so,
      children: (0, X.jsx)(`img`, { style: { width: `100%` }, src: e.imgURL }),
    }),
  $ = (e) =>
    (0, X.jsx)(`div`, {
      className: so,
      children: (0, X.jsx)(`img`, { style: { width: `100%` }, src: e.imgURL }),
    });
function vo(e, t) {
  let n = 0;
  for (let r = 0; r < 32; ++r) (t(e, r)?.length ?? 0) > 0 && (n += 1);
  return n;
}
var yo = `https://partner.steamgames.com/doc/store/localization#supported_languages`;
function bo(e) {
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
        children: R(`#EventEditor_Required`),
      }))
    : n === 1
      ? (g = (0, X.jsx)(`span`, {
          style: { color: `#D7BC86` },
          children: R(`#EventEditor_Suggested`),
        }))
      : n === 3 &&
        (g = (0, X.jsx)(`span`, {
          style: { color: `#D7BC86` },
          children: R(`#EventEditor_Requested`),
        }));
  let _ = null;
  t === `capsule`
    ? (_ = h
        ? (0, X.jsxs)(X.Fragment, {
            children: [
              (0, X.jsxs)(`p`, {
                children: [
                  (0, X.jsx)(`strong`, {
                    children: R(`#selectimage_tip_design_title`),
                  }),
                  `: `,
                  R(`#selectimage_tip_capsule_creatorhome_1`),
                ],
              }),
              (0, X.jsxs)(`p`, {
                children: [
                  (0, X.jsx)(`strong`, {
                    children: R(`#selectimage_tip_usage_title`),
                  }),
                  `: `,
                  R(`#selectimage_tip_capsule_creatorhome_2`),
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
                      children: R(`#PartnerEvent_MM_ArtworkTip`),
                    }),
                    (0, X.jsx)(`p`, {
                      children: (0, X.jsx)(`a`, {
                        href: `${H.PARTNER_BASE_URL}doc/store/assets/promos#popup_update`,
                        children: R(`#PartnerEvent_MM_LearnMore`),
                      }),
                    }),
                  ],
                }),
              (0, X.jsxs)(`p`, {
                children: [
                  (0, X.jsx)(`strong`, {
                    children: R(`#selectimage_tip_design_title`),
                  }),
                  `: `,
                  R(`#selectimage_tip_capsule_1`),
                ],
              }),
              (0, X.jsxs)(`p`, {
                children: [
                  (0, X.jsx)(`strong`, {
                    children: R(`#selectimage_tip_usage_title`),
                  }),
                  `: `,
                  R(`#selectimage_tip_capsule_2`),
                ],
              }),
            ],
          }))
    : t === `background`
      ? (_ = (0, X.jsx)(X.Fragment, {
          children: (0, X.jsxs)(`p`, {
            children: [
              (0, X.jsx)(`strong`, {
                children: R(`#selectimage_tip_design_title`),
              }),
              `: `,
              R(`#selectimage_tip_background_1`),
            ],
          }),
        }))
      : t === `spotlight` || t === `localized_store_app_spotlight`
        ? (_ = (0, X.jsx)(X.Fragment, {
            children: (0, X.jsxs)(`p`, {
              children: [
                (0, X.jsx)(`strong`, {
                  children: R(`#selectimage_tip_usage_title`),
                }),
                `: `,
                R(`#selectimage_tip_store_spotlight_1`),
              ],
            }),
          }))
        : t === `localized_store_app_spotlight_mobile`
          ? (_ = (0, X.jsx)(X.Fragment, {
              children: (0, X.jsxs)(`p`, {
                children: [
                  (0, X.jsx)(`strong`, {
                    children: R(`#selectimage_tip_usage_title`),
                  }),
                  `: `,
                  R(`#selectimage_tip_store_mobile_spotlight`),
                ],
              }),
            }))
          : t === `broadcast_left` || t === `broadcast_right`
            ? (_ = (0, X.jsx)(X.Fragment, {
                children: (0, X.jsx)(`p`, {
                  children: R(`#selectimage_tip_broadcast_1`),
                }),
              }))
            : t === `sale_header`
              ? (_ = (0, X.jsxs)(X.Fragment, {
                  children: [
                    (0, X.jsx)(`div`, {
                      className: tt,
                      children: R(`#selectimage_tip_required_title`),
                    }),
                    (0, X.jsxs)(`p`, {
                      children: [
                        (0, X.jsx)(`b`, {
                          children: R(`#selectimage_tip_usage_title`),
                        }),
                        `: `,
                        R(`#selectimage_tip_sale_header_1`),
                      ],
                    }),
                    (0, X.jsxs)(`p`, {
                      children: [
                        (0, X.jsx)(`b`, {
                          children: R(`#selectimage_tip_design_title`),
                        }),
                        `: `,
                        R(`#selectimage_tip_sale_header_2`),
                      ],
                    }),
                    (0, X.jsx)(`p`, {
                      children: R(`#selectimage_tip_sale_header_4`),
                    }),
                    (0, X.jsxs)(`p`, {
                      children: [
                        (0, X.jsx)(`b`, {
                          children: R(`#selectimage_tip_template_title`),
                        }),
                        `: `,
                        (0, X.jsx)(`a`, {
                          href: `https://www.dropbox.com/scl/fo/mhf604o6bdbcfr1scq7bx/h?rlkey=9bk0ggiwuvs4o1jdnej4xsy0c&dl=0`,
                          children: R(`#selectimage_tip_sale_header_3`),
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
                        children: R(`#selectimage_tip_hero_1`),
                      }),
                      !d.GetAssets()?.GetLibraryHeroURL() &&
                        (0, X.jsx)(`p`, {
                          className: `_9rhLFCwqjPg-`,
                          children: R(`#EventEdtior_ArtworkType_hero_warning`),
                        }),
                    ],
                  }))
                : (_ =
                    t === `localized_image_group` ||
                    t === `link_capsule` ||
                    t === `sale_section_title` ||
                    t === `schedule_track_art` ||
                    t === `localized_background_art`
                      ? (0, X.jsxs)(X.Fragment, {
                          children: [
                            (0, X.jsx)(`p`, {
                              children: R(`#ImagePickerLoc_Desc`),
                            }),
                            (0, X.jsx)(`p`, {
                              children: $t(
                                `#ImagePickerLoc_Files`,
                                (0, X.jsx)(`a`, {
                                  href: yo,
                                  target: H.IN_CLIENT ? void 0 : `_blank`,
                                  children: R(`#ImagePickerLoc_URL`),
                                }),
                              ),
                            }),
                          ],
                        })
                      : t === `product_banner`
                        ? (0, X.jsxs)(X.Fragment, {
                            children: [
                              (0, X.jsx)(`div`, {
                                className: et,
                                children: R(`#selectimage_tip_optional_title`),
                              }),
                              (0, X.jsxs)(`p`, {
                                children: [
                                  (0, X.jsx)(`b`, {
                                    children: R(`#selectimage_tip_usage_title`),
                                  }),
                                  `: `,
                                  R(`#selectimage_tip_sale_product_banner`),
                                ],
                              }),
                            ],
                          })
                        : t === `product_mobile_banner` ||
                            t === `product_banner_override` ||
                            t === `product_mobile_banner_override`
                          ? (0, X.jsxs)(X.Fragment, {
                              children: [
                                (0, X.jsx)(`div`, {
                                  className: et,
                                  children: R(
                                    `#selectimage_tip_optional_title`,
                                  ),
                                }),
                                (0, X.jsxs)(`p`, {
                                  children: [
                                    (0, X.jsx)(`b`, {
                                      children: R(
                                        `#selectimage_tip_usage_title`,
                                      ),
                                    }),
                                    `: `,
                                    R(`#selectimage_tip_sale_product_banner`),
                                    t === `product_mobile_banner` &&
                                      (0, X.jsxs)(`span`, {
                                        children: [
                                          `  `,
                                          R(
                                            `#selectimage_tip_sale_product_banner_mobile`,
                                          ),
                                        ],
                                      }),
                                  ],
                                }),
                              ],
                            })
                          : t === `tab_bar_background`
                            ? (0, X.jsxs)(X.Fragment, {
                                children: [
                                  (0, X.jsxs)(`p`, {
                                    children: [
                                      (0, X.jsx)(`strong`, {
                                        children: R(
                                          `#selectimage_tip_design_title`,
                                        ),
                                      }),
                                      `:`,
                                      R(`#Sale_Tabs_Background_Design`),
                                    ],
                                  }),
                                  (0, X.jsxs)(`p`, {
                                    children: [
                                      (0, X.jsx)(`strong`, {
                                        children: R(
                                          `#selectimage_tip_usage_title`,
                                        ),
                                      }),
                                      `:`,
                                      R(`#Sale_Tabs_Background_Usage`),
                                    ],
                                  }),
                                ],
                              })
                            : t === `sale_logo`
                              ? (0, X.jsxs)(X.Fragment, {
                                  children: [
                                    (0, X.jsx)(`div`, {
                                      className: et,
                                      children: R(
                                        `#selectimage_tip_optional_title`,
                                      ),
                                    }),
                                    (0, X.jsxs)(`p`, {
                                      children: [
                                        (0, X.jsx)(`b`, {
                                          children: R(
                                            `#selectimage_tip_usage_title`,
                                          ),
                                        }),
                                        `: `,
                                        R(`#selectimage_tip_pageLogo`),
                                      ],
                                    }),
                                  ],
                                })
                              : (0, X.jsxs)(X.Fragment, {
                                  children: [
                                    (0, X.jsx)(`div`, {
                                      className: tt,
                                      children: R(
                                        `#selectimage_tip_required_title`,
                                      ),
                                    }),
                                    (0, X.jsxs)(`p`, {
                                      children: [
                                        (0, X.jsx)(`b`, {
                                          children: R(
                                            `#selectimage_tip_usage_title`,
                                          ),
                                        }),
                                        `: `,
                                        R(`#selectimage_tip_bestofyear`),
                                      ],
                                    }),
                                  ],
                                }));
  let v = Et[e.artworkType].width,
    y = Et[e.artworkType].height;
  return (0, X.jsxs)(`div`, {
    id: e.id,
    className: Oa,
    children: [
      !!e.title &&
        (0, X.jsxs)(`div`, {
          className: `Y63LZFKwGXE-`,
          onDoubleClick: i,
          children: [
            e.title,
            (0, X.jsx)(`span`, { children: `\xA0` }),
            g,
            i &&
              (0, X.jsx)(G, {
                onClick: i,
                children: (0, X.jsx)(vn, {
                  toolTipContent: R(
                    e.bIsMinimized
                      ? `#Sale_Section_Maximize_Tooltip`
                      : `#Sale_Section_Minimize_Tooltip`,
                  ),
                  children: e.bIsMinimized
                    ? (0, X.jsx)(Rt, {})
                    : (0, X.jsx)(Vt, {}),
                }),
              }),
          ],
        }),
      !e.bIsMinimized &&
        (0, X.jsxs)(`div`, {
          className: k(`XRZj1OeBHRk-`, `hvd5bQPy4pQ-`),
          children: [
            _,
            !!(v && y) &&
              (0, X.jsxs)(`p`, {
                children: [
                  (0, X.jsx)(`b`, {
                    children: R(`#selectimage_tip_dimensions_title`),
                  }),
                  `:\xA0`,
                  $t(`#selectimage_tip1`, vt(v), vt(y)),
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
              (0, X.jsx)(G, {
                onClick: (t) => {
                  F(
                    (0, X.jsx)(xo, {
                      fnRemoveAllArtwork: e.fnRemoveAllArtwork,
                    }),
                    cn(t) ?? window,
                  );
                },
                children: R(`#Sale_RemoveAll`),
              }),
          ],
        }),
      !e.bIsMinimized &&
        (0, X.jsx)(So, {
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
function xo(e) {
  let { fnRemoveAllArtwork: t, closeModal: n } = e;
  return (0, X.jsx)(A, {
    strTitle: R(`#Sale_RemoveAll`),
    strDescription: R(`#ImageUpload_DeleteAll_Confirm`),
    onOK: () => {
      (t?.(), n?.());
    },
    onCancel: n,
  });
}
function So(e) {
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
    [f, p] = J.useState(Ke()),
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
          (Ma(a(t, n) ?? ``) == e.image_hash && o(t, null, n),
            o(t, e, r),
            g(e, r, !1));
        });
      },
      [a, t, o, g],
    );
  return t === `hero`
    ? (0, X.jsx)(`div`, {
        style: { padding: `16px` },
        children: (0, X.jsx)(G, {
          style: { textTransform: `uppercase`, width: `200px` },
          onClick: () =>
            window.open(
              `${H.PARTNER_BASE_URL}admin/game/editbyappid/${l}?activetab=tab_graphicalassets`,
            ),
          children: R(`#ImageUpload_EditHeroImage`),
        }),
      })
    : (0, X.jsxs)(`div`, {
        children: [
          (0, X.jsx)(Co, {
            list: m,
            fnOnArtworkLanguageChange: _,
            realms: n,
            fnLangHasData: i,
          }),
          (0, X.jsx)(`div`, {
            children: (0, X.jsx)(`div`, {
              className: k(wa, Ta),
              children: (0, X.jsx)(co, {
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
var Co = class extends J.Component {
  ShowLangChangeDialog(e, t) {
    let {
      fnOnArtworkLanguageChange: n,
      realms: r,
      fnLangHasData: i,
    } = this.props;
    F(
      (0, X.jsx)(ja, {
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
          i = R(`#Language_` + K(r));
        e.push(
          (0, X.jsxs)(
            `div`,
            {
              className: at,
              children: [
                (0, X.jsx)(`span`, {
                  children: R(
                    `#ImageUpload_Success_Mapping`,
                    n.file_name ?? ``,
                    i,
                  ),
                }),
                (0, X.jsx)(`a`, {
                  onClick: () => this.ShowLangChangeDialog(n, r),
                  children: R(`#ImageUpload_Success_Mapping_Change`),
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
    return (0, X.jsx)(`div`, { className: Aa, children: t });
  }
};
(Wt([yn], Co.prototype, `ShowLangChangeDialog`, null), (Co = Wt([l], Co)));
function wo(e) {
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
    h = Ct(t, o),
    g = t.GetAccountID(),
    [_] = f(() => [h.GetFilesToUpload().length - h.GetCompletedFiles()]);
  (0, J.useEffect)(() => {
    (p(!1),
      Q.ClearImageGroup(),
      a?.forEach((e, t) => {
        let n = P.InitFromClanID(g, H.EUNIVERSE);
        if (Q.GetAllLocalizedGroupImages().length == 0) {
          let t = e && m.GetHashFromHashAndExt(e),
            r = t && O.GetClanImageByImageHash(n, t);
          r && Q.SetPrimaryImageForImageGroup(r, o);
        }
        Q.SetLocalizedImageGroupAtLang(t, n, e ?? null);
      }),
      p(!0));
  }, [a, g, o]);
  let v = (0, J.useCallback)(
      (e, t, n = 0) => {
        let r = P.InitFromClanID(g, H.EUNIVERSE),
          i = m.GetHashAndExt(t ?? null);
        if (Q.GetAllLocalizedGroupImages().length == 0) {
          let t = i && m.GetHashFromHashAndExt(i),
            n = t && O.GetClanImageByImageHash(r, t);
          n && Q.SetPrimaryImageForImageGroup(n, e);
        }
        Q.SetLocalizedImageGroupAtLang(n, r, i);
      },
      [g],
    ),
    y = (0, J.useCallback)((e, t) => {
      let n = Q.GetLocalizedImageGroupForEdit()?.localized_images[t];
      return n && n.split(`/`).pop();
    }, []);
  return (0, X.jsxs)(A, {
    onCancel: c,
    closeModal: c,
    bDisableBackgroundDismiss: !0,
    bAllowFullSize: !0,
    className: k(lt, ct),
    strTitle: e.strLocalizedTitle || R(`#ImagePickerLoc_Title`),
    strDescription: e.strLocalizedDescription,
    bOKDisabled: _ > 0,
    onOK: () => {
      let t = Q.GetLocalizedImageGroupForEdit();
      for (let e = 0; e < 32; ++e) {
        let n = t?.localized_images[e];
        if (n) {
          let t = n.split(`/`).pop() || ``;
          l(
            o,
            {
              image_hash: Ma(t),
              clanAccountID: g,
              file_type: _t(t) ?? 0,
              imageid: 0,
            },
            e,
          );
        } else l(o, null, e);
      }
      (Q.ClearImageGroup(), e.onOK ? e.onOK() : c?.());
    },
    strOKButtonText: _ > 0 ? R(`#ImagePickerLoc_DismissWarning`) : void 0,
    children: [
      d
        ? (0, X.jsxs)(X.Fragment, {
            children: [
              (0, X.jsx)(ma, {
                clanSteamID: t,
                rgSupportArtwork: [o],
                fnSetImageURL: v,
                bAllowPreviousClanImageSelection: !1,
                rgRealmList: i ?? [],
                uploaderOverride: h,
              }),
              (0, X.jsx)(bo, {
                clanSteamID: t,
                eventModel: r,
                artworkType: o,
                title: null,
                appid: n,
                realms: i,
                fnRemoveAllArtwork: () => Q.ClearImageGroup(),
                fnSetImageURL: v,
                fnGetImageHashAndExt: y,
                fnLangHasData: s,
                partnerEventStore: u,
              }),
            ],
          })
        : (0, X.jsx)(D, {
            size: `medium`,
            position: `center`,
            string: R(`#Loading`),
          }),
      e.children,
    ],
  });
}
function To(e) {
  let { setting: t, fnUpdateSetting: n, label: r } = e,
    i = J.useMemo(() => {
      let e = [];
      return (
        e.push({ label: R(`#EventEditor_Tile_NoRepeat`), data: `no-repeat` }),
        e.push({ label: R(`#EventEditor_Tile_RepeatX`), data: `repeat-x` }),
        e.push({ label: R(`#EventEditor_Tile_RepeatY`), data: `repeat-y` }),
        e.push({ label: R(`#EventEditor_Tile_Repeat`), data: `repeat` }),
        e.push({
          label: R(`#EventEditor_Tile_NoRepeatAndBlur`),
          data: `coverBlur`,
        }),
        e
      );
    }, []);
  return (0, X.jsxs)(X.Fragment, {
    children: [
      (0, X.jsx)(U, { children: r || R(`#EventEditor_Tile_Title`) }),
      (0, X.jsx)(M, {
        strDropDownClassName: nt,
        rgOptions: i,
        selectedOption: t || `no-repeat`,
        onChange: (e) => n(e.data),
        bDisableMouseOverlay: !0,
        contextMenuPositionOptions: { bDisableMouseOverlay: !0 },
      }),
    ],
  });
}
function Eo(e) {
  let { closeModal: t, imgGroup: n, fnUpdateImageGroup: r, eventModel: i } = e,
    { openColorPicker: a } = Sr(),
    [o, s] = (0, J.useState)(() => n),
    [c, l, u, d, p, h, g, _] = f(() => [
      o.repeat_setting,
      o.scaling_setting,
      o.background_color1,
      o.background_color2,
      o.gradient_setting,
      o.position_setting,
      i.GetIncludedRealmList(),
      o.randomize_section_order,
    ]),
    [v] = (0, J.useState)(() => Do(o.localized_background_art ?? {}));
  return (0, X.jsxs)(wo, {
    strLocalizedTitle: R(`#BackgroundGroups_Configure`),
    strLocalizedDescription: R(`#BackgroundGroups_DialogDesc`),
    appid: i.appid,
    eventModel: i,
    clanSteamID: i.clanSteamID,
    closeModal: t,
    partnerEventStore: jt,
    artworkType: `localized_background_art`,
    realms: g,
    loc_images: v,
    fnLangHasData: (e) => !!v[e],
    fnGetImageHash: (e, t) => v[t],
    fnSetImageURL: async (e, t, n) => {
      s((e) => {
        let r = { ...e.localized_background_art },
          i = m.GetHashAndExt(t);
        return (
          i ? (r[K(n)] = i) : delete r[K(n)],
          { ...e, localized_background_art: r }
        );
      });
    },
    onOK: () => {
      s((e) => (r(e), t && setTimeout(t, 1), { ...e }));
    },
    children: [
      (0, X.jsxs)(`div`, {
        className: bi,
        children: [
          (0, X.jsxs)(`div`, {
            className: xi,
            children: [
              (0, X.jsx)(To, {
                setting: c,
                fnUpdateSetting: (e) => {
                  s(
                    e === `no-repeat`
                      ? { ...o, repeat_setting: e }
                      : { ...o, repeat_setting: e, scaling_setting: `auto` },
                  );
                },
                label: R(`#BackgroundGroups_Repeating`),
              }),
              (0, X.jsx)(Oo, {
                scaling_setting: l ?? `contain`,
                disable: c !== `no-repeat`,
                fnUpdateSetting: (e) => s({ ...o, scaling_setting: e }),
              }),
              l != `cover` &&
                (0, X.jsx)(Ao, {
                  position_settings: h,
                  fnUpdateSetting: (e) => s({ ...o, position_setting: e }),
                }),
            ],
          }),
          (0, X.jsxs)(`div`, {
            className: Si,
            children: [
              (0, X.jsx)(U, { children: R(`#BackgroundGroups_Color`) }),
              (0, X.jsxs)(`div`, {
                className: Ci,
                children: [
                  (0, X.jsx)(G, {
                    style: { backgroundColor: u },
                    onClick: (e) =>
                      a(e, {
                        color: u,
                        onChange: (e) =>
                          s({ ...o, background_color1: e || void 0 }),
                      }),
                    children: R(
                      u === void 0
                        ? `#BackgroundGroups_ColorNum_unset`
                        : `#BackgroundGroups_ColorNum`,
                      1,
                    ),
                  }),
                  `\xA0`,
                  (0, X.jsx)(G, {
                    onClick: () => s({ ...o, background_color1: void 0 }),
                    children: R(`#BackgroundGroups_Color_Clear`),
                  }),
                ],
              }),
              (0, X.jsx)(`div`, {
                className: vi,
                children: (0, X.jsx)(G, {
                  onClick: () =>
                    s({ ...o, background_color1: d, background_color2: u }),
                  children: R(`#BackgroundGroups_Color_Swap`),
                }),
              }),
              p !== `single-color` &&
                (0, X.jsxs)(`div`, {
                  className: `j5T-MrFgQ20-`,
                  children: [
                    (0, X.jsx)(G, {
                      style: { backgroundColor: d },
                      onClick: (e) =>
                        a(e, {
                          color: d,
                          onChange: (e) =>
                            s({ ...o, background_color2: e || void 0 }),
                        }),
                      children: R(
                        d === void 0
                          ? `#BackgroundGroups_ColorNum_unset`
                          : `#BackgroundGroups_ColorNum`,
                        2,
                      ),
                    }),
                    `\xA0`,
                    (0, X.jsx)(G, {
                      onClick: () => s({ ...o, background_color2: void 0 }),
                      children: R(`#BackgroundGroups_Color_Clear`),
                    }),
                  ],
                }),
              (0, X.jsx)(ko, {
                gradient: p ?? `top-to-bottom`,
                fnUpdateSetting: (e) => s({ ...o, gradient_setting: e }),
              }),
            ],
          }),
        ],
      }),
      (0, X.jsx)(ni, {
        clanSteamID: i.clanSteamID,
        children: (0, X.jsx)(Kt, {
          checked: !!_,
          onChange: (e) => {
            o.randomize_section_order = e;
          },
          children: R(`#BackgroundGroups_RandomizeSectionOrder`),
        }),
      }),
    ],
  });
}
function Do(e) {
  let t = Ht([], 32, null);
  for (let n in e) {
    let r = B(n);
    r != -1 && (t[r] = e[n]);
  }
  return t;
}
function Oo(e) {
  let { scaling_setting: t, fnUpdateSetting: n, label: r, disable: i } = e,
    a = J.useMemo(() => {
      let e = [];
      return (
        e.push({ label: R(`#BackgroundGroups_Scaling_cover`), data: `cover` }),
        e.push({
          label: R(`#BackgroundGroups_Scaling_contain`),
          data: `contain`,
        }),
        e.push({ label: R(`#BackgroundGroups_Scaling_fixed`), data: `auto` }),
        e
      );
    }, []);
  return (0, X.jsxs)(X.Fragment, {
    children: [
      (0, X.jsx)(U, { children: r || R(`#BackgroundGroups_Scaling`) }),
      (0, X.jsx)(M, {
        strDropDownClassName: nt,
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
function ko(e) {
  let { gradient: t, fnUpdateSetting: n, label: r } = e,
    i = J.useMemo(() => {
      let e = [];
      return (
        e.push({
          label: R(`#BackgroundGroups_Gradient_Top`),
          data: `top-to-bottom`,
        }),
        e.push({
          label: R(`#BackgroundGroups_Gradient_Left`),
          data: `left-to-right`,
        }),
        e.push({
          label: R(`#BackgroundGroups_Gradient_TopLeft`),
          data: `top-left-to-bottom-right`,
        }),
        e
      );
    }, []);
  return (0, X.jsxs)(X.Fragment, {
    children: [
      (0, X.jsx)(U, { children: r || R(`#EventEditor_ColorSetting_Title`) }),
      (0, X.jsx)(M, {
        strDropDownClassName: nt,
        rgOptions: i,
        selectedOption: t || `top-to-bottom`,
        onChange: (e) => n(e.data),
        bDisableMouseOverlay: !0,
        contextMenuPositionOptions: { bDisableMouseOverlay: !0 },
      }),
    ],
  });
}
function Ao(e) {
  let { position_settings: t, fnUpdateSetting: n, label: r } = e,
    i = J.useMemo(() => {
      let e = [];
      return (
        e.push({ label: R(`#BackgroundGroups_Position_Unset`), data: `unset` }),
        e.push({
          label: R(`#BackgroundGroups_Position_Centered`),
          data: `center`,
        }),
        e.push({
          label: R(`#BackgroundGroups_Position_CenteredTop`),
          data: `top center`,
        }),
        e.push({
          label: R(`#BackgroundGroups_Position_TopLeft`),
          data: `top left`,
        }),
        e.push({
          label: R(`#BackgroundGroups_Position_BottomRight`),
          data: `bottom right`,
        }),
        e
      );
    }, []);
  return (0, X.jsxs)(X.Fragment, {
    children: [
      (0, X.jsx)(U, { children: r || R(`#BackgroundGroups_Position`) }),
      (0, X.jsx)(M, {
        strDropDownClassName: nt,
        rgOptions: i,
        selectedOption: t || `unset`,
        onChange: (e) => n(e.data),
        bDisableMouseOverlay: !0,
        contextMenuPositionOptions: { bDisableMouseOverlay: !0 },
      }),
    ],
  });
}
function jo(e) {
  let {
      backgroundImageEditModel: t,
      bBackgroundImgGroupEditMode: n,
      fnSetBackgroundImgGroupEditMode: r,
      bShowAsValveOnly: i,
    } = e,
    [a, o] = (0, J.useState)(t.BIsBackgroundImageEnabled()),
    [s, c, l] = q(),
    u = f(() => t.GetSalePageLastCoverSectionUntilEnd());
  return (0, X.jsx)(`div`, {
    className: k(gi, i && `u6DPgTclyv4-`),
    children: (0, X.jsxs)(z, {
      children: [
        (0, X.jsx)(V, {
          label: R(`#BackgroundGroups_Setting`),
          checked: a,
          onChange: (e) => {
            (o(e), t.SetBackgroundImageEnabled(e));
          },
        }),
        a
          ? (0, X.jsxs)(X.Fragment, {
              children: [
                (0, X.jsx)(V, {
                  label: R(`#BackgroundGroups_EditMode`),
                  tooltip: R(`#BackgroundGroups_EditMode_ttip`),
                  checked: n,
                  onChange: r,
                }),
                (0, X.jsx)(V, {
                  label: R(`#BackgroundGroups_ExtendToEnd`),
                  tooltip: R(`#BackgroundGroups_ExtendToEnd_ttip`),
                  checked: u,
                  onChange: (e) => t.SetSalePageLastCoverSectionUntilEnd(e),
                }),
                (0, X.jsx)(`hr`, {}),
                (0, X.jsx)(G, {
                  onClick: c,
                  children: R(`#BackgroundGroups_ClearAllSettings`),
                }),
                (0, X.jsx)(W, {
                  active: s,
                  children: (0, X.jsx)(A, {
                    strTitle: R(`#EventEditor_GenericAreYouSure`),
                    strDescription: R(
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
          : (0, X.jsx)(`p`, { children: R(`#BackgroundGroups_Desc`) }),
        (0, X.jsx)(`br`, {}),
        (0, X.jsx)(`a`, {
          href: `${H.PARTNER_BASE_URL}doc/marketing/event_tools/sales/groups`,
          target: `_blank`,
          children: R(`#EventGeneric_SeeDocs`),
        }),
      ],
    }),
  });
}
var Mo = J.forwardRef(function (e, t) {
  let {
      imgGroupDerivedMapping: n,
      backgroundImageEditModel: r,
      groupIndex: i,
      imgGroup: a,
      eventModel: o,
      nTabIndex: s,
    } = e,
    c = Ke(),
    [l, u, d, p] = f(() => [
      a && n.mapGroupToSections.get(a.background_id),
      (a && n.mapGroupToSections.get(a.background_id)?.sectionUniqueIDs) ?? [],
      s == null
        ? r?.GetSalePageLastCoverSectionUntilEnd()
        : r?.GetTabLastCoverSectionUntilEnd(s),
      s == null ? r?.GetSalePageGroupCount() : r?.GetTabGroupCount(s),
    ]),
    m = d && i + 1 === p,
    [h, g, _] = q(),
    [v, y, b] = q(),
    x;
  l?.nUniqueIDNextSaleSection &&
    (x = ve(
      2,
      r.GetSaleSectionByID(l?.nUniqueIDNextSaleSection),
      c,
      o,
      l.nSaleSectionLastIndex + 1,
    ));
  let S;
  if (l && u?.length > 1) {
    let e = u[u.length - 1];
    S = ve(2, r?.GetSaleSectionByID(e), c, o, l.nSaleSectionLastIndex);
  }
  return (0, X.jsx)(xn, {
    bStartMinimized: !1,
    title: R(
      s == null
        ? `#BackgroundGroups_Sale_GroupNum`
        : `#BackgroundGroups_Sale_Tab_GroupNum`,
      i + 1,
    ),
    className: e.classNameHeader,
    children: (0, X.jsxs)(`div`, {
      ref: t,
      children: [
        (0, X.jsx)(G, {
          onClick: g,
          children: R(`#BackgroundGroups_Configure`),
        }),
        (0, X.jsx)(W, {
          active: h,
          children: (0, X.jsx)(Eo, {
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
          className: yi,
          children: R(`#BackgroundGroups_ContentTitle`),
        }),
        (0, X.jsxs)(`ul`, {
          children: [
            u.map((e) =>
              (0, X.jsx)(
                `li`,
                {
                  children: ve(
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
              (0, X.jsx)(`li`, { children: R(`#BackgroundGroups_EndOfList`) }),
          ],
        }),
        !!S &&
          (0, X.jsx)(G, {
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
            children: R(`#BackgroundGroups_Reduce`, S),
          }),
        !!x &&
          (0, X.jsx)(G, {
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
            children: R(`#BackgroundGroups_Extend`, x),
          }),
        i > 0 &&
          (0, X.jsxs)(X.Fragment, {
            children: [
              (0, X.jsx)(`hr`, {}),
              (0, X.jsx)(G, {
                onClick: y,
                children: R(`#BackgroundGroups_RemoveThisGroup`),
              }),
              (0, X.jsx)(W, {
                active: v,
                children: (0, X.jsx)(A, {
                  strTitle: R(`#Dialog_AreYouSure`),
                  bDestructiveWarning: !0,
                  strDescription: R(`#BackgroundGroups_RemoveThisGroup_Desc`),
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
function No(e) {
  let { backgroundImageEditModel: t, nTabID: n } = e;
  return (0, X.jsx)(`div`, {
    className: _i,
    children: (0, X.jsx)(G, {
      onClick: (e) =>
        n !== void 0 && n >= 0
          ? t?.AddTabBackgroundGroup(n)
          : t?.AddSalePageBackgroundGroup(),
      children: R(
        n !== void 0 && n >= 0
          ? `#BackgroundGroups_AddNewGroupTab`
          : `#BackgroundGroups_AddNewGroup`,
      ),
    }),
  });
}
function Po(e) {
  let {
      nTabID: t,
      nSectionUniqueID: n,
      salePageBackgroundDerivedConfig: r,
      backgroundImageEditModel: i,
    } = e,
    a = r.mapFirstSectionToGroup.get(n);
  return n == r.nFirstSaleSectionIDWithoutGroup ||
    n == r.nFirstTabSectionIDWithoutGroup
    ? (0, X.jsx)(No, { backgroundImageEditModel: i, nTabID: t })
    : a
      ? (0, X.jsx)(Fo, { ...e, groupID: a })
      : null;
}
function Fo(e) {
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
    let e = F(
      (0, X.jsx)(A, {
        bAlertDialog: !0,
        closeModal: () => l(!1),
        children: (0, X.jsx)(Mo, {
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
  let u = f(() => ci.get(t)),
    [d, p] = (0, J.useState)(null),
    m = J.useCallback((e, t) => {
      p(t);
    }, []),
    h = en(m);
  return (0, X.jsxs)(`div`, {
    className: _i,
    ref: h,
    children: [
      !!(u && d && d > u) &&
        (0, X.jsx)(G, {
          onClick: (e) => l(!0),
          children: R(`#BackgroundGroups_EditBackgroundGroup`),
        }),
      (0, X.jsx)(Mo, {
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
var Io = `Bn58KEX1KcI-`;
function Lo(e) {
  let { imgGroupDerivedMapping: t } = e,
    [n, r] = (0, J.useState)(!1);
  (0, J.useEffect)(() => {
    if (!n) return;
    let t = F(
      (0, X.jsx)(A, {
        bAlertDialog: !0,
        closeModal: () => r(!1),
        children: (0, X.jsx)(Ro, { ...e }),
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
        if (n) return ci.get(n?.nBackgroundGroupID) ?? 0;
      }
      return 0;
    }),
    [a, o] = (0, J.useState)(null),
    s = J.useCallback((e, t) => {
      o(t);
    }, []),
    c = en(s),
    l = !!(i >= 0 && a && a > i);
  return (0, X.jsxs)(`div`, {
    className: k(_i, Io),
    ref: c,
    children: [
      l &&
        (0, X.jsx)(G, {
          onClick: (e) => r(!0),
          children: R(`#BackgroundGroups_EditBackgroundGroup`),
        }),
      (0, X.jsx)(Ro, { ...e }),
    ],
  });
}
function Ro(e) {
  let { backgroundImageEditModel: t, imgGroupDerivedMapping: n, nTabID: r } = e,
    [i, a] = (0, J.useState)(null),
    [o, s, c, l] = f(() => [
      t?.GetTabLastCoverSectionUntilEnd(r),
      t?.BIsTabEnabled(r),
      n.selectedTabBackgroundDef,
      t?.GetEventModel(),
    ]);
  return (0, X.jsxs)(z, {
    children: [
      (0, X.jsx)(V, {
        label: R(`#BackgroundGroups_TaSetting`),
        checked: s,
        onChange: (e) => {
          if (
            (N(t, `edit model mising`),
            N(r !== void 0, `tab setting missing`),
            r !== void 0 && t)
          ) {
            let n = t.SetTabEnabled(r, e);
            (N(!!n, `Failed to create model TabID ${r}backgroundModel`), a(n));
          } else
            console.error(
              `Failed to enable table group, edit mode: ${!!t}, TabID: ${r}.`,
            );
        },
      }),
      !!s &&
        (0, X.jsxs)(X.Fragment, {
          children: [
            (0, X.jsx)(V, {
              label: R(`#BackgroundGroups_ExtendToEnd`),
              tooltip: R(`#BackgroundGroups_ExtendToEnd_Tab_ttip`),
              checked: o,
              onChange: (e) => t.SetTabLastCoverSectionUntilEnd(r, e),
            }),
            (0, X.jsx)(Mo, {
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
function zo(e) {
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
    m = C(n, !!me(n)),
    h = Bo(n, c, oe(!!r)),
    [g, _] = (0, J.useState)(!1);
  J.useEffect(() => {
    if (
      n.jsondata.sale_custom_css &&
      !u &&
      r &&
      n.jsondata.sale_vanity_id_valve_approved_for_sale_subpath &&
      It() == `community`
    ) {
      let e = document.getElementsByTagName(`HEAD`)[0],
        t = document.createElement(`style`);
      ((t.innerText = Lt(n.jsondata.sale_custom_css)), d(t), e.appendChild(t));
    }
    let e = document.getElementsByClassName(`react_landing_background`);
    return (
      N(e.length <= 1, `Must have at most one react_landing_background`),
      e.length >= 1 && (e[0].style.backgroundImage = ``),
      () => {
        u && (u.remove(), d(null));
      }
    );
  }, [n, u, r]);
  let v = n?.jsondata,
    y = J.useMemo(
      () => ({
        promotionName: t,
        clanid: Number(fn.CLANACCOUNTID),
        nAppIDVOD: Number(v?.broadcast_preroll_vod_appid),
        event: n,
        bIsPreview: r,
        language: i,
        accountIDs: r ? v?.broadcast_whitelist : void 0,
        chat_announcement_giveaway: v?.broadcast_chat_announcement_giveaway,
      }),
      [r, n, v, i, t],
    ),
    b = f(() => a?.BIsBackgroundImageEnabled() ?? !1),
    x = ti(n?.clanSteamID);
  if (!n || c === void 0)
    return (0, X.jsx)(`div`, {
      className: pn,
      style: { height: `500px` },
      children: (0, X.jsx)(D, { size: `medium`, string: R(`#Loading`) }),
    });
  {
    let e = Er(n),
      u = n.BUsesContentHubForItemSource(),
      d = n.GetSaleSections().some((e) => e.section_type === `contenthubtitle`),
      f = u && d,
      v,
      S = !0;
    e
      ? (v = 0)
      : n.BUsesContentHubForItemSource()
        ? (v = n.jsondata.sale_header_offset === 530 ? 530 : 20)
        : n.GetEventType() == 36
          ? ((v = 0), (S = !1))
          : (v = n.jsondata.sale_header_offset || 0);
    let C = S && n.jsondata.sale_header_offset === 530,
      ee = !fe
        .Get()
        .BIsPartnerTakeoverActive(
          n.GetContentHubType(),
          n.GetContentHubCategory(),
          n.GetContentHubTag(),
        ),
      te = r
        ? !g && a?.BIsBackgroundImageEnabled()
          ? E.EPreviewMode_EditBackground
          : E.EPreviewMode_Enabled
        : E.EPreviewMode_Disabled,
      w = b || n.GetEventType() != 36,
      ne = u ? on.NoTransform : on.NoTransformSparseContent,
      re = k(
        Oe,
        p && `_9D3431c8-XE-`,
        C && `_5NaHSqwUb-k-`,
        we[`CustomStyle_${n.jsondata.sale_vanity_id}`],
        `SaleOuterContainer`,
        e && `RG63SnOtLk0-`,
        f && void 0,
      );
    return (0, X.jsx)(z, {
      children: (0, X.jsx)(ae, {
        eventModel: n,
        language: i,
        children: (0, X.jsx)(ht, {
          location: r ? 2 : 0,
          children: (0, X.jsxs)(Mr, {
            event: n,
            language: i,
            bIsPreview: !!r,
            personalizedCarousels: m,
            children: [
              ee && (0, X.jsx)(le, {}),
              (0, X.jsx)(wr, { eventModel: n }),
              !!a &&
                (w || x) &&
                (0, X.jsx)(jo, {
                  backgroundImageEditModel: a,
                  bBackgroundImgGroupEditMode: g,
                  fnSetBackgroundImgGroupEditMode: _,
                  bShowAsValveOnly: !w,
                }),
              (0, X.jsxs)(Mt, {
                style: !f || (C && !e) ? { marginTop: `${v || 0}px` } : void 0,
                className: re,
                scrollIntoViewType: ne,
                children: [
                  e && (0, X.jsx)(Dr, { eventModel: n, language: i }),
                  (0, X.jsx)(Rr, { rgPresenters: n.jsondata.sale_presenters }),
                  (0, X.jsx)(Hr, { event: n, broadcastEmbedContext: y }),
                  (0, X.jsx)(Uo, {
                    ePreviewMode: te,
                    event: n,
                    backgroundImageEditModel: a,
                    language: i,
                    promotionName: t,
                    nSaleDayIndex: c,
                    broadcastEmbedContext: y,
                    selectedTab: h,
                    tagSelection: h?.GetTagSelection(),
                  }),
                  !s &&
                    (0, X.jsx)(si, {
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
function Bo(e, t, n) {
  let [r] = Ge(`tab`, void 0),
    [i] = Ge(Se, void 0),
    [a] = Ge(_e, void 0),
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
    s = ge(he(i, a), o?.selTab.tab_tag_filter, n),
    c = s?.strParentKey,
    l = s?.strChildKey;
  return J.useMemo(() => {
    if (!o) return;
    let n;
    c && (n = { strParentKey: c, strChildKey: l });
    let r =
      e.jsondata.sale_opt_in_page_name || e.jsondata.prune_list_optin_name;
    return new de(o.selTab, t, o.bIsDefaultTab, n, r);
  }, [e, t, o, c, l]);
}
function Vo() {
  if (window?.location?.hash)
    return decodeURIComponent(window.location.hash.substring(1).toLowerCase());
}
function Ho(e) {
  let {
      event: t,
      language: r,
      nSaleDayIndex: i,
      ePreviewMode: a,
      selectedTab: o,
      backgroundImageEditModel: s,
    } = e,
    [c, l] = J.useState(st()),
    u = J.useMemo(() => new hi(), []),
    d = J.useCallback(() => l(st()), []);
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
          let t = Vo();
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
      We(p, { ...(t || {}), tab: e.toString() });
    },
    [h, g] = Ge(`controller`),
    [_, v] = f(() => {
      let e = mt.GetCreatorHome(t.clanSteamID)?.GetAppIDList().length ?? 0,
        n = t.GetSaleSectionIncludingFooterSections(e);
      return [
        ui(
          t.jsondata.sale_background_img_groups,
          n,
          o && o.GetActiveTabUniqueID(),
        ),
        n,
      ];
    }),
    b = !1,
    x = [{ elements: [], activeTab: new de(void 0, i) }],
    S = null,
    C = Nt(),
    ee = y(),
    w = T(t),
    ne = Br(v),
    re = J.useMemo(() => {
      let e = Vo();
      if (!e) return;
      let t = v.findIndex((t) => t.section_anchor === e);
      return t > -1 ? t : void 0;
    }, [v]);
  (v.forEach((n, i) => {
    let l = x[x.length - 1].activeTab;
    if (l && !l.ShouldShowSection(n)) return;
    let d = fe
        .Get()
        .BIsPartnerTakeoverActive(
          t.GetContentHubType(),
          t.GetContentHubCategory(),
          t.GetContentHubTag(),
        ),
      f = c && !d && !t.jsondata.content_hub_restricted_width,
      p = se(n, a, t, r, C, w, ne(n));
    if (p === void 0) return;
    if (!p) {
      if (te(n) && !un.logged_in)
        b ||= ((p = (0, X.jsx)(ie, { section: n, event: t, language: r })), !0);
      else {
        let t = n.diable_tab_id_filtering
          ? new de(void 0, l && l.GetSaleDay())
          : l;
        (n.section_type == `tabs` &&
          n.tabs?.some((e) => e.unique_id == o?.GetActiveTabUniqueID()) &&
          x.push({ activeTab: o, elements: [] }),
          (p = (0, X.jsx)(ce, {
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
    ee && (p = (0, X.jsx)(Fr, { nSectionID: n.unique_id, children: p }));
    let v = x && x.length && x[x.length - 1],
      y = (0, X.jsx)(
        qo,
        {
          section: n,
          nActiveTabID: v && v.activeTab && v.activeTab.GetActiveTabUniqueID(),
          saleSectionIndex: i,
          ePreviewMode: a,
          salePageBackgroundDerivedConfig: _,
          backgroundImageEditModel: s,
          bExpanded: f,
          children: (0, X.jsx)(pt, { enabled: !re || i > re, children: p }),
        },
        `SaleSectionIndex_` + n.unique_id + `_` + i,
      ),
      T = _.mapSectionToGroup.get(n.unique_id);
    (S &&
      S.groupID != T &&
      (x[x.length - 1].elements.push(
        di(t, S, a, o && o?.GetActiveTabUniqueID()),
      ),
      (S = null)),
      T
        ? ((S ||= {
            groupID: T,
            elSaleSections: [],
            derivedGroupInfo: _.mapGroupToSections.get(T),
          }),
          S.elSaleSections.push(y))
        : x[x.length - 1].elements.push(y));
  }),
    (S &&=
      (x[x.length - 1].elements.push(
        di(t, S, a, o && o?.GetActiveTabUniqueID()),
      ),
      null)));
  let ae = x.map((e, t) =>
    (0, X.jsx)(
      `div`,
      { className: k(Te, `SaleSectionTabListContainer`), children: e.elements },
      `TabSection_` + t,
    ),
  );
  return (0, X.jsx)(Mt, {
    focusable: !1,
    focusableIfEmpty: !0,
    navKey: `SaleSectionListContainer`,
    children: ae,
  });
}
var Uo = a(Ho);
function Wo(e) {
  let {
    visibility_by_door_index_state: t,
    door_index_visibility: n,
    children: r,
  } = e;
  return t && n != null
    ? (0, X.jsx)(Go, {
        visibility_by_door_index_state: t,
        door_index_visibility: n,
        children: r,
      })
    : (0, X.jsx)(X.Fragment, { children: r });
}
function Go(e) {
  let {
      visibility_by_door_index_state: t,
      door_index_visibility: n,
      children: r,
    } = e,
    i = ee(n);
  return (t == `hide_when_open_door_index` && i) ||
    (t == `show_when_open_door_index` && !i)
    ? null
    : (0, X.jsx)(X.Fragment, { children: r });
}
function Ko({ children: e, onChange: t }) {
  return (
    J.useRef(null),
    (0, J.useEffect)(() => {
      t(!!J.Children.toArray(e).filter(Boolean).length);
    }, [e, t]),
    e
  );
}
function qo(e) {
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
    l = t.section_anchor ? t.section_anchor : ot + (t.unique_id || n),
    u = t.section_type != `tabs`,
    [d, f] = (0, J.useState)(!0);
  return d
    ? (0, X.jsx)(z, {
        children: (0, X.jsx)(Wo, {
          visibility_by_door_index_state: t.visibility_by_door_index_state,
          door_index_visibility: t.door_index_visibility,
          children: u
            ? (0, X.jsx)(Mt, {
                navKey: l,
                id: l,
                className: k({
                  [Ee]: !0,
                  SaleSectionCtn: !0,
                  [t.section_type]: !0,
                  [t.internal_section_data?.internal_type || ``]: !0,
                  expanded: s,
                  [t.single_item_style || ``]: !0,
                  [Ce]: i == E.EPreviewMode_EditBackground,
                  [ke]: t.collapse_header_space,
                }),
                children:
                  i === E.EPreviewMode_EditBackground
                    ? (0, X.jsxs)(X.Fragment, {
                        children: [
                          c,
                          (0, X.jsx)(Po, {
                            nSectionUniqueID: t.unique_id || n,
                            nTabID: r,
                            salePageBackgroundDerivedConfig: a,
                            backgroundImageEditModel: o,
                          }),
                        ],
                      })
                    : (0, X.jsx)(Ko, { onChange: f, children: c }),
              })
            : (0, X.jsx)(X.Fragment, {
                children:
                  i === E.EPreviewMode_EditBackground
                    ? (0, X.jsxs)(`div`, {
                        id: l,
                        className: k({
                          [Ee]: !0,
                          [Ce]: !0,
                          [ke]: t.collapse_header_space,
                        }),
                        children: [
                          c,
                          (0, X.jsx)(Lo, {
                            backgroundImageEditModel: o,
                            nTabID: r,
                            imgGroupDerivedMapping: a,
                          }),
                        ],
                      })
                    : (0, X.jsx)(Ko, { onChange: f, children: c }),
              }),
        }),
      })
    : null;
}
export { zo as t };
