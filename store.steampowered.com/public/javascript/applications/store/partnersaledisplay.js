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
  Au as Mt,
  Cl as k,
  Dn as Nt,
  Dr as Pt,
  En as A,
  Ex as j,
  Fu as Ft,
  Gx as It,
  Hb as Lt,
  Iy as M,
  Jb as Rt,
  Jc as N,
  Jy as zt,
  Kx as Bt,
  Lr as Vt,
  Mb as Ht,
  Mn as P,
  Ni as Ut,
  Pb as Wt,
  Rr as Gt,
  Rx as Kt,
  Ry as qt,
  Sc as F,
  Tx as Jt,
  Uu as Yt,
  Uy as I,
  Vl as Xt,
  Wc as Zt,
  Wo as Qt,
  Xc as $t,
  _o as en,
  a as tn,
  ai as nn,
  ax as rn,
  bS as an,
  br as on,
  cr as L,
  dr as sn,
  il as cn,
  jn as ln,
  kc as un,
  lS as R,
  mS as z,
  ml as dn,
  nr as B,
  nx as fn,
  pn as V,
  qn as H,
  qo as pn,
  qx as U,
  rr as W,
  rs as mn,
  rx as G,
  t as hn,
  vr as gn,
  wu as _n,
  wx as vn,
  xb as K,
  yc as yn,
  zb as bn,
  zy as xn,
} from "./main.js";
import { t as Sn } from "./collapseablesection.js";
import { t as Cn } from "./cross.js";
var q = e(i(), 1);
function wn([e, t, n]) {
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
function Tn([e, t, n]) {
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
function En(e) {
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
function Dn(e) {
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
function On(e) {
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
function kn(e) {
  let t = wn([e.r / 255, e.g / 255, e.b / 255]);
  return { h: t[0], s: t[1], v: t[2], a: e.a };
}
function An(e) {
  let t = Tn([e.h, e.s, e.v]);
  return { r: t[0] * 255, g: t[1] * 255, b: t[2] * 255, a: e.a };
}
var jn = [`hex`, `rgb`, `hsl`];
function J(e) {
  return Math.round(e * 100) / 100;
}
function Mn(e) {
  let { r: t, g: n, b: r, a: i } = An(e);
  return { r: Math.round(t), g: Math.round(n), b: Math.round(r), a: i };
}
function Nn(e, t) {
  let { r: n, g: r, b: i, a } = e,
    o = a >= 1;
  switch (t) {
    case `hex`:
      return Dn(e);
    case `rgb`:
      return o ? `rgb(${n}, ${r}, ${i})` : `rgba(${n}, ${r}, ${i}, ${J(a)})`;
    case `hsl`: {
      let { h: t, s: n, l: r } = On(e),
        i = `${Math.round(t)}, ${Math.round(n * 100)}%, ${Math.round(r * 100)}%`;
      return o ? `hsl(${i})` : `hsla(${i}, ${J(a)})`;
    }
  }
}
function Pn(e) {
  return `rgba(${e.r}, ${e.g}, ${e.b}, ${J(e.a)})`;
}
function Fn(e) {
  let t = /^#?([0-9a-f]{3,4})$/i.exec(e)?.[1],
    n = En(t ? t.replace(/./g, `$&$&`) : e);
  return n && { ...n, a: J(n.a) };
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
      r: j(Math.round(parseFloat(n)), 0, 255),
      g: j(Math.round(parseFloat(r)), 0, 255),
      b: j(Math.round(parseFloat(i)), 0, 255),
      a: j(s, 0, 1),
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
  return { r: n, g: r, b: i, a: J(a / 255) };
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
  Y = o(),
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
    [s, c] = (0, q.useState)(() => fr(t, i)),
    l = (0, q.useRef)(void 0);
  (0, q.useEffect)(() => {
    let e = zn(t);
    !e || (l.current && dr(e, l.current, i)) || c((e) => X(t, e.h, i) ?? e);
  }, [t, i]);
  let u = (0, q.useCallback)(
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
  return (0, Y.jsxs)(`div`, {
    className: F(Bn, `noOpinionatedGlobalStyles`),
    style: {
      "--colorpicker-hue": `hsl( ${s.h}deg 100% 50% )`,
      "--colorpicker-opaque": f,
      "--colorpicker-current": p,
    },
    children: [
      !!r && (0, Y.jsx)(`div`, { className: `GEaX-EfeXNg-`, children: r }),
      (0, Y.jsx)(hr, { hsva: s, fnSetColor: u }),
      (0, Y.jsx)(gr, {
        className: Gn,
        strLabel: K.Localize(`#ColorPicker_Hue`),
        nMax: 360,
        nValue: Math.round(s.h),
        strValueText: `${Math.round(s.h)}°`,
        fnSetValue: (e) => u({ ...s, h: e }),
      }),
      !i &&
        (0, Y.jsx)(gr, {
          className: `xV4lUfTUFc4-`,
          strLabel: K.Localize(`#ColorPicker_Opacity`),
          nMax: 100,
          nValue: Math.round(s.a * 100),
          strValueText: `${Math.round(s.a * 100)}%`,
          fnSetValue: (e) => u({ ...s, a: e / 100 }),
        }),
      (0, Y.jsx)(_r, { hsva: s, disableAlpha: i, fnSetColor: u, onSubmit: a }),
      (0, Y.jsx)(yr, {
        strCurrentHex: f,
        bOpaque: d.a >= 1,
        fnPick: (e) => {
          let t = X(e, s.h, i);
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
  return X(e, 0, t) ?? X(ar, 0, t);
}
function X(e, t, n) {
  let r = zn(e);
  if (!r) return;
  let i = kn(n ? { ...r, a: 1 } : r);
  return i.s === 0 || i.v === 0 ? { ...i, h: t } : i;
}
function pr(e) {
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
function mr(e, t, n) {
  let r = e.shiftKey ? lr : cr;
  if (e.key === t) return r;
  if (e.key === n) return -r;
}
function hr(e) {
  let { hsva: t, fnSetColor: n } = e,
    r = pr((e, r) => n({ ...t, s: e, v: 1 - r }));
  return (0, Y.jsx)(`div`, {
    className: Hn,
    role: `slider`,
    tabIndex: 0,
    "aria-label": K.Localize(`#ColorPicker_SaturationBrightness`),
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    "aria-valuenow": Math.round(t.v * 100),
    "aria-valuetext": `${Math.round(t.s * 100)}%, ${Math.round(t.v * 100)}%`,
    onKeyDown: (e) => {
      let r = mr(e, `ArrowRight`, `ArrowLeft`),
        i = mr(e, `ArrowUp`, `ArrowDown`);
      (r !== void 0 || i !== void 0) &&
        (e.preventDefault(),
        n({ ...t, s: j(t.s + (r ?? 0), 0, 1), v: j(t.v + (i ?? 0), 0, 1) }));
    },
    ...r,
    children: (0, Y.jsx)(`div`, {
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
  return (0, Y.jsx)(`div`, {
    className: Un,
    children: (0, Y.jsx)(He.Root, {
      min: 0,
      max: r,
      value: [i],
      onValueChange: (e) => o(e[0]),
      children: (0, Y.jsx)(He.Track, {
        render: (0, Y.jsx)(`div`, { className: F(Wn, t) }),
        children: (0, Y.jsx)(He.Handle, {
          render: (e) =>
            (0, Y.jsx)(`span`, {
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
    [a, o] = g(or),
    s = jn.find((e) => e === a) ?? `hex`,
    [c, l] = (0, q.useState)(void 0),
    u = Nn(Mn(t), s),
    d = c !== void 0 && c.trim() !== `` && !zn(c),
    f = (e) => {
      l(e);
      let i = X(e, t.h, n);
      i && r(i);
    },
    p = (e) => {
      (o(e), l(void 0));
    };
  return (0, Y.jsxs)(`div`, {
    className: Kn,
    children: [
      (0, Y.jsxs)(`div`, {
        className: qn,
        children: [
          (0, Y.jsx)(`div`, { className: Jn, "aria-hidden": !0 }),
          (0, Y.jsx)(`input`, {
            className: F(Yn, d && `_5Zk11eFAaLo-`),
            type: `text`,
            spellCheck: !1,
            autoComplete: `off`,
            "aria-label": K.Localize(`#ColorPicker_ColorValue`),
            "aria-invalid": d,
            value: c ?? u,
            onChange: (e) => f(e.currentTarget.value),
            onBlur: () => l(void 0),
            onKeyDown: (e) => {
              e.key === `Enter` && (e.preventDefault(), l(void 0), i?.());
            },
          }),
          (0, Y.jsx)(vr, { hsva: t, disableAlpha: n, fnSetColor: r }),
        ],
      }),
      d &&
        (0, Y.jsx)(`div`, {
          className: `tHsVe8Ptn-s-`,
          children: K.Localize(`#ColorPicker_InvalidColor`),
        }),
      (0, Y.jsx)(`div`, {
        className: Zn,
        role: `radiogroup`,
        children: jn.map((e) =>
          (0, Y.jsx)(
            `button`,
            {
              type: `button`,
              role: `radio`,
              "aria-checked": e === s,
              className: F(Qn, e === s && `wBwV8sUsuTo-`),
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
    [i, a] = (0, q.useState)(!1);
  (0, q.useEffect)(() => a(`EyeDropper` in window), []);
  let o = async () => {
    let e = document.documentElement;
    e.classList.add(sr);
    try {
      let e = X((await new window.EyeDropper().open()).sRGBHex, t.h, n);
      e && r({ ...e, a: t.a });
    } catch (e) {
      console.warn(K.Localize(`#Sale_EyeDropperFailed`), e);
    } finally {
      e.classList.remove(sr);
    }
  };
  if (!i) return null;
  let s = K.Localize(`#Sale_BackgroundColorPicker`);
  return (0, Y.jsx)(Vt, {
    toolTipContent: s,
    children: (0, Y.jsx)(`button`, {
      type: `button`,
      className: Xn,
      "aria-label": s,
      onClick: o,
      children: (0, Y.jsx)(nn, {}),
    }),
  });
}
function yr(e) {
  let { strCurrentHex: t, bOpaque: n, fnPick: r } = e;
  return (0, Y.jsx)(`div`, {
    className: $n,
    role: `group`,
    "aria-label": K.Localize(`#ColorPicker_Palette`),
    children: ir.map((e) => {
      let i = n && e === t;
      return (0, Y.jsx)(
        `button`,
        {
          type: `button`,
          className: F(er, i && `wBwV8sUsuTo-`),
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
var br = q.createContext(void 0);
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
    c = (0, q.useRef)(null),
    l = (0, q.useRef)(void 0),
    u = (0, q.useRef)(!1),
    d = (0, q.useRef)({
      color: t,
      onChange: n,
      fnRestoreChanges: s,
      bLivePreview: o,
    });
  d.current = { color: t, onChange: n, fnRestoreChanges: s, bLivePreview: o };
  let f = (0, q.useCallback)(
      (e) => {
        ((l.current = e), o && n(e));
      },
      [o, n],
    ),
    p = (0, q.useCallback)(() => {
      ((u.current = !0), !o && l.current !== void 0 && n(l.current), r());
    }, [o, n, r]);
  return (
    (0, q.useEffect)(
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
    (0, q.useEffect)(() => {
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
    (0, Y.jsx)(`div`, {
      ref: c,
      children: (0, Y.jsx)(ur, {
        color: t,
        disableAlpha: i,
        strTitle: a ?? K.Localize(`#Button_Color`),
        onChange: f,
        onSubmit: p,
        children: (0, Y.jsxs)(`div`, {
          className: tr,
          children: [
            (0, Y.jsx)(`button`, {
              type: `button`,
              className: F(nr, rr),
              onClick: p,
              children: K.Localize(`#Button_Save`),
            }),
            (0, Y.jsx)(`button`, {
              type: `button`,
              className: nr,
              onClick: r,
              children: K.Localize(`#Button_Cancel`),
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
    s = (0, Y.jsx)(xr, {
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
  let e = (0, q.useContext)(br);
  return { openColorPicker: (0, q.useCallback)((t, n) => Sr(t, n, e), [e]) };
}
var wr = `Vvgd20dCqjc-`;
function Tr(e) {
  let { eventModel: t } = e,
    { data: n } = ze(t.clanSteamID.GetAccountID());
  if (!n || (!n.can_edit && !n.support_user) || Wt() == `community`) return;
  let r = t.GetAllTags(),
    i = [];
  if (
    (r.includes(`hide_store`) &&
      i.push(K.Localize(`#Sale_SaleEventIsHidden_Reason_ProductHide`)),
    r.includes(`mod_hide_store`) &&
      n.support_user &&
      i.push(K.Localize(`#Sale_SaleEventIsHidden_Reason_Mod`)),
    !t.BIsVisibleEvent() &&
      r.includes(`contenthub`) &&
      i.push(K.Localize(`#Sale_SaleEventIsHidden_ContentHub_Preview`)),
    !(t.BIsVisibleEvent() && i.length == 0))
  )
    return (0, Y.jsx)(`div`, {
      className: wr,
      children: (0, Y.jsxs)(`div`, {
        children: [
          !t.BIsVisibleEvent() &&
            (0, Y.jsx)(`div`, {
              className: `XZUb9Zq6ctI-`,
              children: K.Localize(`#Sale_SaleEventIsHidden`),
            }),
          i.length > 0 &&
            (0, Y.jsxs)(`div`, {
              className: `XZUb9Zq6ctI-`,
              children: [
                K.LocalizePlural(`#Sale_SaleEventIsHidden_Reason`, i.length),
                (0, Y.jsx)(`ul`, {
                  children: i.map((e) => (0, Y.jsx)(`li`, { children: e }, e)),
                }),
              ],
            }),
        ],
      }),
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
      qt.GetWithFallback(t.jsondata.localized_sale_logo, n),
    ]);
  return i && i?.length > 0
    ? r
      ? (0, Y.jsx)(`a`, {
          className: Er,
          href: G.STORE_BASE_URL + r,
          children: (0, Y.jsx)(kr, { ...e }),
        })
      : (0, Y.jsx)(`div`, {
          className: F(Er, `SalePageLogoCtn`),
          children: (0, Y.jsx)(kr, { ...e }),
        })
    : null;
}
function kr(e) {
  let { eventModel: t, language: n } = e,
    r = dt(t, `sale_logo`, n);
  return (0, Y.jsx)(`img`, { src: r, alt: `logo` });
}
var Ar = `_1Bceni0-cAw-`;
function jr(e) {
  let { strURL: t } = e;
  return t
    ? (0, Y.jsx)(`div`, {
        className: Ar,
        children: (0, Y.jsx)(`img`, { alt: ``, src: t }),
      })
    : null;
}
function Mr(e) {
  let { event: t, bIsPreview: n } = e,
    r = t.jsondata.sale_background_video_webm,
    i = t.jsondata.sale_background_video_mp4;
  return i || r
    ? (0, Y.jsx)(N, {
        children: (0, Y.jsxs)(`video`, {
          loop: !0,
          muted: !0,
          autoPlay: !0,
          playsInline: !0,
          className: F(
            Ne,
            we[`CustomStyle_${t.jsondata.sale_vanity_id}`],
            `SaleBackground`,
            De,
          ),
          style: {
            backgroundColor: n ? t.jsondata.sale_background_color : void 0,
          },
          children: [
            r && (0, Y.jsx)(`source`, { src: r, type: `video/webm` }),
            i &&
              !G.IN_CLIENT &&
              (0, Y.jsx)(`source`, { src: i, type: `video/mp4` }),
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
    o = q.useRef(null),
    s = dt(t, `sale_header`, n),
    [c] = f(() => [t.jsondata.sale_sub_menu]);
  q.useEffect(() => {
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
  return (0, Y.jsxs)(Y.Fragment, {
    children: [
      c
        ? (0, Y.jsx)(v, {
            event: t,
            language: n,
            bIsPreview: i,
            subMenu: c,
            styleVariation: x.k_SubMenu,
            personalizedCarousels: a,
          })
        : (0, Y.jsx)(jr, { strURL: s }),
      (0, Y.jsx)(`div`, {
        className: F({ SaleBackgroundCtn: !0, ContentHubSalePage: u }),
        children: (0, Y.jsxs)(`div`, {
          className: F(
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
              ? (0, Y.jsx)(`img`, {
                  className: F(Xe, it, rt),
                  src: s,
                  alt: `Header`,
                })
              : (0, Y.jsx)(`div`, {
                  className: F(Xe, it),
                  style: {
                    backgroundImage: d,
                    backgroundRepeat: t.jsondata.sale_background_repeat,
                  },
                }),
            (0, Y.jsx)(Mr, { event: t, bIsPreview: i }),
            (0, Y.jsx)(Y.Fragment, { children: r }),
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
    [r, i] = q.useState(!1),
    [a, o] = q.useState(!1);
  q.useEffect(() => {
    S.Get().SetMouseOverSection(t, r);
  }, [t, r]);
  let s = f(() => S.Get().GetMouseOverSectionID()),
    c = t && t == s,
    l = () => S.Get().JumpToSection(t),
    u = q.useRef(null);
  return (
    ne((e) => t == e && (u.current?.scrollIntoView(), o(!0), !0)),
    (0, Y.jsxs)(`div`, {
      ref: u,
      className: F({ [je]: !0, [Ae]: !!c, [Me]: !!a }),
      onAnimationEnd: () => o(!1),
      onMouseEnter: () => i(!0),
      onMouseLeave: () => i(!1),
      children: [
        r &&
          (0, Y.jsx)(Vt, {
            toolTipContent: I(`#Sale_SaleEditor_JumpTo_ttip`),
            direction: `top`,
            children: (0, Y.jsx)(`button`, {
              className: `BxPO-muNnTI-`,
              onClick: l,
              children: (0, Y.jsx)(en, {}),
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
  let n = z(G.LANGUAGE);
  return t.length == 1
    ? (0, Y.jsx)(`div`, {
        className: F(Lr, `PresenterDisclaimer`),
        children: K.LocalizeReact(
          `#SalePresented_By`,
          (0, Y.jsx)(Br, { presentor: t[0], lang: n }),
        ),
      })
    : (0, Y.jsx)(`div`, {
        className: F(Lr, `PresenterDisclaimer`),
        children: K.LocalizeReact(
          `#SalePresented_By_Multi`,
          t
            .slice(0, t.length - 1)
            .map((e, r) =>
              (0, Y.jsxs)(
                q.Fragment,
                {
                  children: [
                    (0, Y.jsx)(Br, { presentor: e, lang: n }),
                    t.length > 2 && `, `,
                  ],
                },
                e.url,
              ),
            ),
          (0, Y.jsx)(Br, { presentor: t[t.length - 1], lang: n }),
        ),
      });
}
function Br(e) {
  let { presentor: t, lang: n } = e,
    r = Yt(t.url);
  return (0, Y.jsx)(on, {
    href: r,
    bUseLinkFilter: !0,
    className: Rr,
    children: qt.GetWithFallback(t.localized_presenter_name, n),
  });
}
function Vr(e) {
  let t = z(Lt.LANGUAGE),
    n = xe(t),
    r = [...new Set(e.flatMap((e) => be(e) || []))].join(`,`),
    i = q.useMemo(() => (r ? r.split(`,`) : []), [r]),
    a = u({ queries: i.map((e) => ye(e, t, n)), combine: Hr });
  return q.useCallback(
    (e) => {
      let t = be(e),
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
  return (0, Y.jsx)(Y.Fragment, {
    children:
      !!(
        t.BEventCanShowBroadcastWidget() && t.BSaleShowBroadcastAtTopOfPage()
      ) &&
      (0, Y.jsx)(re, {
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
    { data: r } = ze(n ? e.GetAccountID() : 0);
  return n && ti(r, t);
}
function ri(e) {
  let { clanSteamID: t, id: n } = e;
  return ni(t, e.requireAdmin)
    ? (0, Y.jsx)(`div`, {
        id: n,
        className: F(e.className, e.requireAdmin ? Ze : Qe),
        children: e.children,
      })
    : null;
}
var ii = 12,
  ai = 240;
function oi(e) {
  let { event: t } = e,
    [n] = b(Le, void 0),
    [r, i] = q.useState(!1),
    a = Rt(`rgMLRecommenderWishlist`, `application_config`),
    o = Array.isArray(a) && a.length > 0 && Number.isInteger(a[0]);
  return !t.BIsNextFest() || !o || n == Ie.Random || Fe(t) > 0
    ? null
    : (0, Y.jsxs)(ri, {
        clanSteamID: t.clanSteamID,
        className: Wr,
        children: [
          (0, Y.jsxs)(cn, {
            className: Gr,
            onClick: () => i(!r),
            children: [r ? `▼` : `▶`, ` Next Fest personalized order (VO)`],
          }),
          r && (0, Y.jsx)(si, { event: t, rgRecommendedAppIDs: a }),
        ],
      });
}
function si(e) {
  let { event: t, rgRecommendedAppIDs: n } = e,
    [r, i] = q.useState(void 0);
  Dt(n, kt);
  let [a, o] = q.useState(void 0),
    [s, c] = q.useState(``),
    l = t.jsondata.sale_ml_recommender_weight_exponent || 2.5,
    u = parseFloat(s),
    d = a ?? w(t),
    f = u || l,
    p = q.useMemo(() => ue(n, n, (e) => e, d, f), [n, d, f]),
    m = q.useMemo(() => new Map(n.map((e, t) => [e, t])), [n]),
    h = q.useMemo(() => new Map(p.map((e, t) => [e, t])), [p]),
    g = n.length,
    _ = (e) => Xt.Get().GetApp(e)?.GetName() ?? `App ${e}`,
    v = (e) => `hsl(${Math.round((240 * m.get(e)) / g)}, 80%, 65%)`,
    y = (e, t) =>
      (0, Y.jsx)(
        `div`,
        {
          className: F(ei, r == e && `It6LJnFk-X8-`),
          style: { height: ii, color: v(e) },
          title: `${_(e)} (${e}): recommended #${m.get(e) + 1}, shuffled to #${h.get(e) + 1}`,
          onMouseEnter: () => i(e),
          children: t,
        },
        e,
      ),
    b = (e, t) =>
      (0, Y.jsx)(
        `line`,
        {
          x1: 0,
          y1: (m.get(e) + 0.5) * ii,
          x2: ai,
          y2: (h.get(e) + 0.5) * ii,
          stroke: t ? `white` : v(e),
          strokeWidth: t ? 2 : 1,
          strokeOpacity: t ? 1 : r === void 0 ? 0.6 : 0.15,
        },
        e,
      );
  return (0, Y.jsxs)(`div`, {
    className: Kr,
    children: [
      (0, Y.jsxs)(`div`, {
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
      (0, Y.jsxs)(`div`, {
        className: Jr,
        children: [
          (0, Y.jsx)(B, {
            className: Yr,
            onClick: () => o(vn()),
            children: `Reshuffle`,
          }),
          (0, Y.jsxs)(`label`, {
            children: [
              `Exponent`,
              ` `,
              (0, Y.jsx)(`input`, {
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
            (0, Y.jsx)(B, {
              className: `kqyJu6iojzM-`,
              onClick: () => {
                (o(void 0), c(``));
              },
              children: `Reset to page's order`,
            }),
          (0, Y.jsx)(`span`, {
            children: `Only affects this chart, not the page`,
          }),
        ],
      }),
      (0, Y.jsxs)(`div`, {
        className: Zr,
        onMouseLeave: () => i(void 0),
        children: [
          (0, Y.jsxs)(`div`, {
            className: Qr,
            children: [
              (0, Y.jsx)(`div`, {
                className: $r,
                children: `Recommended order`,
              }),
              n.map((e, t) => y(e, `#${t + 1} ${_(e)}`)),
            ],
          }),
          (0, Y.jsxs)(`div`, {
            className: Qr,
            children: [
              (0, Y.jsx)(`div`, { className: $r, children: `\xA0` }),
              (0, Y.jsxs)(`svg`, {
                width: ai,
                height: g * ii,
                children: [
                  n.filter((e) => e != r).map((e) => b(e, !1)),
                  r !== void 0 && m.has(r) && b(r, !0),
                ],
              }),
            ],
          }),
          (0, Y.jsxs)(`div`, {
            className: Qr,
            children: [
              (0, Y.jsx)(`div`, { className: $r, children: `Shuffled order` }),
              p.map((e) => y(e, `#${m.get(e) + 1} ${_(e)}`)),
            ],
          }),
        ],
      }),
    ],
  });
}
function ci(e) {
  let { event: t, fnOnChangeDayIndex: n, addtionalAdminButtons: r } = e;
  return (0, Y.jsxs)(Y.Fragment, {
    children: [
      (0, Y.jsx)(oi, { event: t }),
      (0, Y.jsx)(At, {
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
    (0, Y.jsx)(
      mi,
      {
        eventModel: e,
        displayDef: i,
        derivedGroupInfo: t.derivedGroupInfo,
        children:
          i && i.randomize_section_order && n !== E.EPreviewMode_EditBackground
            ? (0, Y.jsx)(pi, {
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
    [r, i] = g(`sale_section_seed_${t}`, vn());
  if (!n || n.length === 0) return null;
  if (n.length > 1 && r !== void 0) {
    let e = Jt(r);
    return (0, Y.jsx)(Y.Fragment, { children: Bt(n, 0, e) });
  }
  return (0, Y.jsx)(Y.Fragment, { children: n });
}
function mi(e) {
  let { displayDef: t, children: n, eventModel: r, derivedGroupInfo: i } = e,
    a = Ke(),
    o = q.useCallback(
      (e, t) => {
        li.set(i.nBackgroundGroupID, t);
      },
      [i],
    ),
    s = $t(o);
  if (!n || (Array.isArray(n) && n.length == 0)) return null;
  if (!t) return (0, Y.jsx)(Y.Fragment, { children: n });
  let c;
  if (t.localized_background_art) {
    let e = R(a),
      n =
        e in t.localized_background_art
          ? e
          : xn.GetLanguageFallback(G.LANGUAGE),
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
  return (0, Y.jsx)(`div`, {
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
          G.COMMUNITY_BASE_URL +
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
        (this.m_curLocImageGroup.localized_images = It(
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
        r = M.InitFromClanID(n.clanAccountID, G.EUNIVERSE),
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
        let e = M.InitFromClanID(n.clanAccountID, G.EUNIVERSE),
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
Ht([t], Ti.prototype, `m_curLocImageGroup`, void 0);
var Z = new Ti();
function Ei(e, t) {
  let n = q.useRef(void 0),
    r = q.useCallback(
      (t) => {
        t.currentTarget.files.length > 0 &&
          (e(t.currentTarget.files), (t.currentTarget.value = ``));
      },
      [e],
    ),
    i = q.useCallback(() => n.current.click(), []);
  return [
    Pr.createPortal(
      (0, Y.jsx)(`form`, {
        onSubmit: Oi,
        style: { display: `none` },
        children: (0, Y.jsx)(`input`, {
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
  let [t, n] = q.useState(!1);
  return [
    {
      onDragEnter: q.useCallback((e) => {
        ((e.dataTransfer.files && e.dataTransfer.files[0]) ||
          (e.dataTransfer.types && e.dataTransfer.types[0] == `Files`)) &&
          n(!0);
      }, []),
      onDragLeave: q.useCallback((e) => {
        _n(e) && n(!1);
      }, []),
      onDragEnd: q.useCallback(() => n(!1), []),
      onDragOver: t ? Oi : void 0,
      onDrop: q.useCallback(
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
  return (0, Y.jsxs)(`div`, {
    ...a,
    className: F(o ? Ai : ki, `DragAndDropContainer`),
    children: [
      !!n && n(),
      (0, Y.jsx)(`div`, { children: i || I(`#ImagePicker_DragAndDrop`) }),
      (0, Y.jsxs)(`div`, {
        className: ji,
        children: [
          s,
          (0, Y.jsxs)(`label`, {
            onClick: c,
            children: [
              (0, Y.jsxs)(`span`, {
                children: [I(`#ImagePicker_OrBrowse`), ` `],
              }),
              (0, Y.jsx)(`span`, {
                className: Mi,
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
    [s, c] = f(() => [t.GetUploadImages(), qe.Get().GetCurEditLanguage()]),
    l = q.useCallback(
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
                P(
                  (0, Y.jsx)(Nt, {
                    strDescription: I(`#ImagePicker_Error`, i.name),
                  }),
                  window,
                )));
          } catch (e) {
            let t = Ft(e);
            (console.error(
              `ImageUploaderPanel.OnDropFiles: ` + t.strErrorMsg,
              t,
            ),
              P(
                (0, Y.jsx)(Nt, {
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
    u = q.useMemo(
      () =>
        a instanceof Array
          ? a
          : [(0, Y.jsx)(q.Fragment, { children: a }, `elAdditonalButtons`)],
      [a],
    );
  return (
    f(() => s.map((e) => ({ a: e.GetCurrentImageOption(), b: e.language }))),
    (0, Y.jsxs)(Ni, {
      onDropFiles: l,
      elAdditonalButtons: u,
      elOverrideDragAndDropText: r,
      children: [
        (0, Y.jsx)(q.Fragment, {
          children: (0, Y.jsx)(`div`, {
            className: Fi,
            children: s.map((e) =>
              (0, Y.jsx)(
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
        (0, Y.jsx)(Ui, {
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
  return (0, Y.jsxs)(`div`, {
    style: { display: `flex` },
    className: Ii,
    children: [
      !!r.length &&
        (0, Y.jsx)(B, {
          style: { margin: `8px` },
          onClick: n,
          disabled: !i,
          children: I(`#ImageUpload_Upload`),
        }),
      !!r.length &&
        (0, Y.jsx)(B, {
          style: { margin: `8px` },
          onClick: t.ClearImages,
          disabled: a,
          children: I(`#ImageUpload_Clear`),
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
          r = (0, Y.jsx)(xt, {
            ownerWin: n,
            uploadFile: t,
            forceResolution: e.forceResolution,
            fileType: e.forceFileType || 3,
          });
        ln(r, n, `CropModal`, { strTitle: I(`#ImageUpload_CropModalTitle`) });
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
          (i = Pi),
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
      ? Ji(xn.GetLanguageListForRealms(i ?? [an.k_ESteamRealmGlobal]))
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
    (0, Y.jsxs)(`div`, {
      className: zi,
      children: [
        (0, Y.jsx)(`div`, {
          className: Li,
          onClick: () => r(n),
          children: (0, Y.jsx)(yn, {}),
        }),
        (0, Y.jsx)(Ki, { asset: n }),
        s &&
          (0, Y.jsx)(H, {
            strDropDownClassName: `ZsXFGEgobIY-`,
            rgOptions: s,
            selectedOption: n.language,
            onChange: (e) => (n.language = e.data),
            disabled: !l,
          }),
        a &&
          a?.length > 1 &&
          (0, Y.jsx)(H, {
            label: n.GetImageOptionLabel(),
            rgOptions: a,
            selectedOption: d,
            onChange: (e) => n.SetCurrentImageOption(e.data),
            disabled: !l,
          }),
        l &&
          c.warnings?.map((e, t) =>
            (0, Y.jsx)(
              `div`,
              { className: `hb0m5mPiE2A-`, children: e },
              `warning${t}`,
            ),
          ),
        l &&
          c.messages?.map((e, t) =>
            (0, Y.jsx)(
              `div`,
              { className: `CGM5a4V3nBU-`, children: e },
              `message${t}`,
            ),
          ),
        (0, Y.jsxs)(`div`, {
          className: F({ [$e]: !0, [Ri]: n.status == `failed` }),
          children: [
            u,
            Tt(n.status) &&
              (0, Y.jsx)(`div`, {
                className: `RPxGbDpMPvc-`,
                children: (0, Y.jsx)(D, { size: `small` }),
              }),
          ],
        }),
        (0, Y.jsx)(`div`, { className: Ri, children: n.message }),
        l &&
          c.error &&
          (0, Y.jsx)(`div`, { className: `_4l0OY5qTFkk-`, children: c.error }),
        l &&
          c.needsCrop &&
          (0, Y.jsx)(sn, {
            onClick: () => t(n),
            children: I(`#ImageUpload_OpenEditor`),
          }),
      ],
    })
  );
}
function Ki(e) {
  let { asset: t } = e;
  return t.BIsVideo()
    ? (0, Y.jsxs)(`div`, {
        className: Bi,
        onClick: (e) => P((0, Y.jsx)(qi, { asset: t }), Mt(e)),
        children: [
          (0, Y.jsxs)(`span`, {
            className: Vi,
            children: [t.width, ` x `, t.height],
          }),
          (0, Y.jsx)(`video`, {
            height: 120,
            controls: !1,
            autoPlay: !0,
            loop: !0,
            muted: !0,
            children: (0, Y.jsx)(`source`, { src: t.dataUrl }),
          }),
        ],
      })
    : (0, Y.jsx)(`div`, {
        className: Bi,
        style: { backgroundImage: `url(${t.dataUrl})` },
        children: (0, Y.jsxs)(`span`, {
          className: Vi,
          children: [t.width, ` x `, t.height],
        }),
      });
}
function qi(e) {
  let { asset: t, closeModal: n } = e;
  return (0, Y.jsx)(A, {
    bAlertDialog: !0,
    closeModal: n,
    bAllowFullSize: !0,
    children: (0, Y.jsx)(`video`, {
      controls: !0,
      autoPlay: !0,
      loop: !0,
      muted: !0,
      children: (0, Y.jsx)(`source`, { src: t.dataUrl }),
    }),
  });
}
function Ji(e) {
  let t = [],
    n = [];
  for (let t of e) {
    if (t == 25) continue;
    let e = I(`#Language_` + R(t));
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
    n = (0, q.useRef)(null);
  return (0, Y.jsx)(`div`, {
    className: oa,
    children: (0, Y.jsx)(`input`, {
      ref: n,
      className: aa,
      type: `text`,
      placeholder: I(`#ImagePicker_Search`),
      onChange: (e) => t(e.currentTarget.value),
      onKeyDown: (e) => {
        e.key == `Escape` && (t(``), n.current && (n.current.value = ``));
      },
    }),
  });
}
var ca = q.memo(function (e) {
  let {
    fileNameSearch: t,
    clanAccountID: n,
    imageInsertCallBack: r,
    fnOnExpandImage: i,
    showImageActions: a = !0,
    InternalOpenLocalizeImageGroup: o,
  } = e;
  return (0, Y.jsx)(la, {
    clanAccountID: n,
    fileNameSearch: t,
    children: (e, t) =>
      e.map((e) =>
        (0, Y.jsx)(
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
    o = O.GetFilteredClanImagesList(i, a);
  if (o.length == 0) {
    let e = M.InitFromClanID(t, G.EUNIVERSE),
      n = O.GetLoadState(e);
    return n && n.loaded
      ? (0, Y.jsx)(
          `div`,
          {
            className: ea,
            children:
              a.length > 0
                ? I(`#ImagePicker_EmptySearch`)
                : I(`#ImagePicker_Empty`),
          },
          `ImagePicker_Result`,
        )
      : n && n.errMsg
        ? (0, Y.jsx)(
            `div`,
            { className: ta, children: I(`#ImagePicker_Error`, n.errMsg) },
            `ImagePicker_Result`,
          )
        : (0, Y.jsx)(
            `div`,
            { className: ea, children: I(`#Loading`) },
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
    [s, c] = q.useState(!1),
    l = () => r(t, Yi.k_eInsertFullImage),
    u = () => r(t, Yi.k_eInsertVideo),
    d = () => r(t, Yi.k_eInsertThumbnail),
    f = (e) => {
      t.url &&
        (e.dataTransfer.setData(`text`, t.url),
        O.GetClanImageDragListener().forEach((e) => {
          e(M.InitFromClanID(t.clanAccountID, G.EUNIVERSE), !0);
        }));
    },
    p = (e) => {
      t.url &&
        O.GetClanImageDragListener().forEach((e) => {
          e(M.InitFromClanID(t.clanAccountID, G.EUNIVERSE), !1);
        });
    },
    h = (e) => {
      P(
        (0, Y.jsx)(A, {
          strTitle: I(`#ImagePicker_DeleteImageTitle`),
          strDescription: ``,
          onOK: _,
          onCancel: v,
          closeModal: v,
          children: (0, Y.jsxs)(q.Fragment, {
            children: [
              (0, Y.jsx)(`div`, {
                children: I(`#ImagePicker_DeleteAreYouSure`, t.file_name ?? ``),
              }),
              (0, Y.jsx)(`br`, {}),
              (0, Y.jsx)(`br`, {}),
              (0, Y.jsx)(`div`, { children: I(`#ImagePicker_DeleteWarning`) }),
            ],
          }),
        }),
        Mt(e) ?? window,
      );
    },
    g = (e) => {
      (console.log(`ClanImageWrapper on delete error: ` + e),
        P(
          (0, Y.jsx)(Nt, {
            strTitle: I(`#Error_FailureNotice`),
            strDescription: I(`#EventDisplay_DeleteEvent_Error`),
            children: (0, Y.jsx)(`p`, { children: e }),
          }),
          window,
        ));
    },
    _ = () => {
      c(!0);
      let e = M.InitFromClanID(t.clanAccountID, G.EUNIVERSE);
      O.DeleteClanImage(e, t)
        .then((e) => {
          (e.success != 1 && g(Ft(e).strErrorMsg), c(!1));
        })
        .catch((e) => {
          (g(Ft(e).strErrorMsg), c(!1));
        });
    },
    v = () => {},
    y = () => {
      i && i(t);
    },
    b = t.file_name ? t.file_name : ``,
    x = Je(n, b, String(t.imageid), na),
    S = m.BIsClanImageVideo(t),
    C = a && !s && !S,
    ee = a && !s && !S,
    te = a && !s && S,
    w = a && !s && !S;
  return (0, Y.jsx)(ft, {
    placeholderHeight: `100vh`,
    className: Xi,
    rootMargin: `0px 0px 100% 0px`,
    children: (0, Y.jsxs)(`div`, {
      className: ra,
      children: [
        (0, Y.jsx)(`div`, {
          className: Zi,
          style: { backgroundImage: S ? `` : `url( '${t.thumb_url}' )` },
          draggable: !0,
          onDragStart: f,
          onDragEnd: p,
          onDoubleClick: l,
          onClick: y,
          children: (0, Y.jsx)(fa, { clanImage: t, className: Qi }),
        }),
        C &&
          (0, Y.jsx)(`span`, {
            className: `escPuFxqCbM-`,
            onClick: l,
            children: I(`#ImagePicker_FullSize`),
          }),
        s && (0, Y.jsx)(D, { size: `medium`, className: `_9dVXPw6twXc-` }),
        ee &&
          (0, Y.jsx)(`span`, {
            className: `_9em3bZdejR0-`,
            onClick: d,
            children: I(`#ImagePicker_Thumbnail`),
          }),
        w &&
          o &&
          (0, Y.jsx)(da, {
            bDeleting: s,
            clanImage: t,
            fnOnOpenLocalizedImageGroup: o,
          }),
        te &&
          (0, Y.jsx)(`span`, {
            className: `escPuFxqCbM-`,
            onClick: u,
            children: I(`#ImagePicker_Video`),
          }),
        !s &&
          (0, Y.jsx)(`span`, {
            className: `LzW73RDKl40-`,
            onClick: h,
            children: (0, Y.jsx)(`img`, {}),
          }),
        (0, Y.jsx)(`div`, { className: $i, title: b, children: x }),
      ],
    }),
  });
}
function da(e) {
  let { clanImage: t, fnOnOpenLocalizedImageGroup: n, bDeleting: r } = e,
    { data: i } = ze(t.clanAccountID);
  return r || !i?.valve_admin
    ? null
    : (0, Y.jsx)(`span`, {
        className: F(ia, Qe),
        onClick: () => n?.(t),
        children: `(VO) ` + I(`#ImagePicker_Localized`),
      });
}
function fa(e) {
  let { clanImage: t, className: n } = e;
  return m.BIsClanImageVideo(t)
    ? (0, Y.jsx)(`video`, {
        autoPlay: !0,
        loop: !0,
        muted: !0,
        className: n,
        children: (0, Y.jsx)(`source`, {
          src: t.url,
          type: `video/` + (t.file_type == 4 ? `mp4` : `webm`),
        }),
      })
    : null;
}
function pa(e) {
  let { clanSteamID: t, closeModal: n, OnClanImageSelected: r } = e,
    i = q.useCallback(
      (e, t) => {
        (r?.(e, t), n?.());
      },
      [r, n],
    ),
    [a, o] = q.useState(``);
  return (0, Y.jsxs)(A, {
    strTitle: I(`#ImagePicker_Images`),
    strDescription: I(`#ImagePicker_DoubleClickToSelect`),
    bAlertDialog: !0,
    onOK: n,
    onCancel: n,
    children: [
      (0, Y.jsx)(sa, { fnSetImageSearch: o }),
      (0, Y.jsx)(ca, {
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
  return (0, Y.jsxs)(`div`, {
    className: ji,
    children: [
      (0, Y.jsxs)(`label`, {
        htmlFor: `clanimagedialog`,
        children: [
          (0, Y.jsxs)(`span`, {
            children: [I(`#ImagePicker_PreviousImages`), ` `],
          }),
          (0, Y.jsx)(`span`, {
            className: Mi,
            children: I(`#ImagePicker_PreviousImages2`),
          }),
        ],
      }),
      (0, Y.jsx)(`input`, {
        style: { display: `none` },
        id: `clanimagedialog`,
        type: `button`,
        onClick: (e) => {
          P(
            (0, Y.jsx)(pa, { clanSteamID: t, OnClanImageSelected: n }),
            Mt(e) ?? window,
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
    [s] = f(() => [qe.Get().GetCurEditLanguage()]),
    c = Ct(t, n, r),
    l = e.uploaderOverride || c,
    [u, d] = q.useState(!1),
    p = q.useCallback(
      async (e, t) => {
        if (!u) {
          d(!0);
          try {
            let { language: t } = wt(e.file_name ?? ``, s),
              n = bt(t, s, o);
            await l.AddExistingClanImage(e, n);
          } catch (e) {
            let t = Ft(e);
            (console.error(`AddExistingClanImage: ` + t.strErrorMsg, t),
              P(
                (0, Y.jsx)(Nt, {
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
    m = q.useMemo(
      () =>
        i
          ? [
              [
                (0, Y.jsx)(
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
          Z.AddLocalizeImageUploaded(e.origimagehash, t);
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
  return (0, Y.jsx)(Hi, {
    ...e,
    imageUploader: l,
    rgRealmList: o,
    elAdditonalButtons: u
      ? [
          (0, Y.jsx)(
            D,
            { position: `center`, size: `medium`, string: I(`#Loading`) },
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
    [s, c] = (0, q.useState)(r),
    l = M.InitFromClanID(t.clanAccountID, G.EUNIVERSE),
    u = f(() => m.GenerateURLFromHashAndExt(l, m.GetHashAndExt(t) ?? ``));
  return (0, Y.jsx)(A, {
    strTitle: I(`#selectimage_change_artwork_lang_title`),
    strDescription: I(`#selectimage_change_artworl_lang_desc`),
    onOK: () => i?.(t, r, s),
    onCancel: n,
    closeModal: n,
    children: (0, Y.jsxs)(`div`, {
      className: F($e, _a),
      children: [
        (0, Y.jsx)(`div`, {
          className: va,
          children: (0, Y.jsx)(`img`, { className: ga, src: u }),
        }),
        (0, Y.jsx)(Ye, {
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
  let a = q.useMemo(() => {
      let e = [],
        t = xn.GetLanguageListForRealms([
          an.k_ESteamRealmGlobal,
          an.k_ESteamRealmChina,
        ]);
      for (let r of t) {
        let t = n(r);
        if (t) {
          let n = R(r),
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
    [o, s, c] = k();
  return (0, Y.jsxs)(`div`, {
    className: Da,
    children: [
      (0, Y.jsx)(`div`, {
        className: Oa,
        children: I(`#selectimage_uploaded_languages`),
      }),
      (0, Y.jsx)(`div`, {
        className: wa,
        children: a.map((n) =>
          (0, Y.jsx)(
            Ia,
            { langData: n, ...e },
            `lang_select_` + t.GetAccountID() + ` ` + n.strLang,
          ),
        ),
      }),
      !!i &&
        (0, Y.jsxs)(B, {
          onClick: s,
          children: [
            I(`#Sale_RemoveAll`),
            (0, Y.jsx)(gn, { tooltip: I(`#Sale_RemoveAll_Tooltip`) }),
          ],
        }),
      (0, Y.jsx)(V, {
        active: o,
        children: (0, Y.jsx)(A, {
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
      let e = O.GetClanImageByImageHash(t, n.imgHash),
        i = ``;
      e &&
        (i = m.GenerateURLFromHashAndExtAndLang(
          t,
          m.GetHashAndExt(e),
          h.full,
          n.lang,
        ));
      let a = ba;
      return (r != n.lang && (a = n.imgHash ? ya : xa), [i, a]);
    });
  return (0, Y.jsxs)(`div`, {
    id: n.strLang,
    className: Sa,
    onClick: (e) => {
      let t = z(e.currentTarget.id);
      i(t);
    },
    children: [
      (0, Y.jsx)(`div`, { className: c, children: n.locLang }),
      (0, Y.jsxs)(`span`, {
        className: Ca,
        children: [
          !!s &&
            (0, Y.jsx)(`a`, {
              href: s,
              target: `_blank`,
              children: (0, Y.jsx)(Gt, {
                toolTipContent: I(`#selectimage_viewimage_ttip`),
                children: mn(),
              }),
            }),
          !!a && (0, Y.jsx)(La, { ...e }),
          !!o && (0, Y.jsx)(Ra, { fnOnRemoveImage: o, langData: n }),
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
    [s, c, l] = k(),
    u = f(() => {
      let e = i(n.lang);
      return (
        U(
          !e || !e.includes(`.`),
          `ChangeLanguageButton: Unexpected File Extension: ` + e,
        ),
        O.GetClanImageByImageHash(t, e)
      );
    });
  if (!u) console.error(`image does not exists on server`);
  else
    return (0, Y.jsxs)(Y.Fragment, {
      children: [
        (0, Y.jsx)(Gt, {
          toolTipContent: I(`#selectimage_reassign_image_ttip`),
          children: (0, Y.jsx)(`img`, {
            "data-lang": n.lang,
            src: Pa,
            onClick: () => c(),
          }),
        }),
        (0, Y.jsx)(N, {
          children: (0, Y.jsx)(V, {
            active: s,
            children: (0, Y.jsx)(Ma, {
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
    [r, i, a] = k();
  return (0, Y.jsxs)(Y.Fragment, {
    children: [
      (0, Y.jsx)(Gt, {
        toolTipContent: I(`#selectimage_delete_image_ttip`),
        children: (0, Y.jsx)(`img`, {
          "data-lang": n.lang,
          src: Cn,
          onClick: i,
        }),
      }),
      (0, Y.jsx)(N, {
        children: (0, Y.jsx)(V, {
          active: r,
          children: (0, Y.jsx)(A, {
            strTitle: I(`#selectimage_remove_image`),
            strDescription: I(
              `#selectimage_remove_details`,
              I(`#Language_` + R(n.lang)),
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
    s = Ue(),
    c = q.useCallback(
      (e) => {
        (e.preventDefault(), r && r(t));
      },
      [t, r],
    ),
    l = o || z(G.LANGUAGE),
    [u, d, p] = f(() => [
      t.GetSummaryWithFallback(l),
      t.GetNameWithFallback(l),
      t.BShowLibrarySpotlightText(),
    ]),
    m = `spotlight`,
    g = h.spotlight_main;
  (t.appid == 2434320 || G.EUNIVERSE == 2) &&
    ((m = s
      ? `localized_store_app_spotlight_mobile`
      : `localized_store_app_spotlight`),
    (g = h.full));
  let _ = ut(n === void 0 ? t : void 0, m, l, g) ?? (n === void 0 ? [] : [n]);
  a && _ && (_ = a(_));
  let v = u.replace(/https:\/\/[^ ]*/gi, ``).trimLeft();
  return (0, Y.jsx)(q.Fragment, {
    children: (0, Y.jsx)(`div`, {
      className: qa,
      ref: e.containerRef,
      children: (0, Y.jsxs)(un, {
        className: F(Ja, za),
        onActivate: c,
        focusable: !0,
        children: [
          (0, Y.jsx)(`div`, {
            className: Ga,
            children: (0, Y.jsx)(Pe, {
              className: Ka,
              rgSources: _,
              onIncrementalError: (e, t, n) => i && i(t),
            }),
          }),
          (0, Y.jsxs)(`div`, {
            className: Ba,
            children: [
              (0, Y.jsx)(Pe, {
                className: Va,
                rgSources: _,
                onIncrementalError: (e, t, n) => i && i(t),
              }),
              (0, Y.jsx)(`div`, { className: Wa }),
              (0, Y.jsx)(`div`, {
                className: Ua,
                children:
                  p &&
                  (0, Y.jsxs)(`div`, {
                    className: `Kirdf-ZVux8-`,
                    children: [
                      (0, Y.jsx)(Pe, {
                        className: `D6QCZmpoq5M-`,
                        rgSources: _,
                        onIncrementalError: (e, t, n) => i && i(t),
                      }),
                      (0, Y.jsxs)(`div`, {
                        className: `SPJgXF8Oqn4-`,
                        children: [
                          (0, Y.jsx)(`div`, {
                            className: `mTAOqZLWhOo-`,
                            children: d,
                          }),
                          (0, Y.jsx)(`div`, {
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
          (0, Y.jsx)(`div`, { className: Ha }),
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
    g = d(n, t),
    _ = g ? m.GenerateURLFromHashAndExtAndLang(i, g, h.full, t) : ``,
    [v] = f(() => [yo(n, d)]);
  return v == 0
    ? (0, Y.jsxs)(`div`, {
        className: va,
        children: [
          n === `capsule` &&
            (0, Y.jsx)(po, {
              imgURL: G.IMG_URL + `events/defaults/default_img_cover.jpg`,
              eventModel: a,
            }),
          n === `background` &&
            (0, Y.jsx)(mo, {
              imgURL: G.IMG_URL + `events/defaults/default_img_header.jpg`,
              lang: t,
              eventModel: a,
              partnerEventStore: o,
            }),
          !![
            `spotlight`,
            `localized_store_app_spotlight`,
            `localized_store_app_spotlight_mobile`,
          ].includes(n) &&
            (0, Y.jsx)(uo, { langOverride: t, artworkType: n, eventModel: a }),
          (0, Y.jsx)(`div`, { children: I(`#EventEditor_ArtworkMissing`) }),
        ],
      })
    : (0, Y.jsxs)(`div`, {
        className: va,
        children: [
          n === `capsule` &&
            (0, Y.jsx)(po, { imgURL: _, eventModel: a, langOverride: t }),
          n === `background` &&
            (0, Y.jsx)(mo, {
              imgURL: _,
              lang: t,
              eventModel: a,
              partnerEventStore: o,
            }),
          n === `spotlight` && (0, Y.jsx)(ho, { imgURL: _, event: a, lang: t }),
          n === `localized_store_app_spotlight` &&
            (0, Y.jsx)(ho, { imgURL: _, event: a, lang: t }),
          n === `localized_store_app_spotlight_mobile` &&
            (0, Y.jsx)(ho, { imgURL: _, event: a, lang: t }),
          (n === `broadcast_left` || n === `broadcast_right`) &&
            (0, Y.jsx)(go, {
              imgURL: _,
              side: n === `broadcast_right` ? `right` : `left`,
            }),
          n === `sale_header` && (0, Y.jsx)(_o, { imgURL: _ }),
          n === `sale_overlay` && (0, Y.jsx)(vo, { imgURL: _ }),
          p.includes(n) &&
            (0, Y.jsx)(`img`, {
              className: `_1MBhWd0--I8-`,
              src: Z.GetLocalizedImageGroupForEditAsURL(i, t) ?? void 0,
            }),
          n === `product_banner` && (0, Y.jsx)(Q, { imgURL: _ }),
          n === `product_mobile_banner` && (0, Y.jsx)(Q, { imgURL: _ }),
          n === `sale_logo` && (0, Y.jsx)(Q, { imgURL: _ }),
          n === `bestofyear_banner` && (0, Y.jsx)(Q, { imgURL: _ }),
          n === `bestofyear_banner_mobile` && (0, Y.jsx)(Q, { imgURL: _ }),
          (0, Y.jsx)(Fa, {
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
    a = q.useMemo(
      () => fo(I(`#EventEditor_ArtworkType_` + t), `${i.width} X ${i.height}`),
      [i.height, i.width, t],
    );
  return (0, Y.jsx)(ho, { lang: n, imgURL: a, event: r });
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
    i = Ke();
  return (0, Y.jsx)(`div`, {
    style: { display: `flex`, width: `304px` },
    children: (0, Y.jsx)(_, {
      event: n,
      imageURLOverride: t,
      langOverride: r ?? i,
    }),
  });
}
function mo(e) {
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
      ? (0, Y.jsx)(Be, {
          text: o || ``,
          showErrorInfo: !1,
          event: n,
          languageOverride: qe.Get().GetCurEditLanguage(),
        })
      : I(`#selectimage_display_event_body`);
  return (0, Y.jsxs)(`div`, {
    className: Xa,
    children: [
      (0, Y.jsx)(`div`, {
        className: Za,
        children: I(`#selectimage_preview_title_1`),
      }),
      (0, Y.jsx)(`div`, {
        className: F(Qa, `DetailPageExample`),
        children: (0, Y.jsxs)(`div`, {
          className: $a,
          children: [
            (0, Y.jsx)(`div`, {
              className: eo,
              children: (0, Y.jsx)(`img`, { src: e.imgURL }),
            }),
            (0, Y.jsx)(`div`, {
              className: to,
              children: (0, Y.jsxs)(`div`, {
                className: no,
                children: [
                  (0, Y.jsx)(`div`, {
                    className: ro,
                    children: a || I(`#selectimage_display_event_title`),
                  }),
                  (0, Y.jsx)(`div`, {
                    className: io,
                    children: s || I(`#selectimage_display_event_subtitle`),
                  }),
                  (0, Y.jsx)(`div`, { className: ao, children: u }),
                ],
              }),
            }),
          ],
        }),
      }),
      c != 12 &&
        (0, Y.jsxs)(q.Fragment, {
          children: [
            (0, Y.jsx)(`div`, { className: `y-gExtn9yi8-` }),
            (0, Y.jsx)(`div`, {
              className: `snS7KDov-nE-`,
              children: I(`#selectimage_preview_title_2`),
            }),
            (0, Y.jsx)(`div`, {
              className: F(`nvWdGclp6FI-`, `DetailPageExample`),
              children: (0, Y.jsx)(`div`, {
                className: `wm--jcPYtBE-`,
                children: (0, Y.jsx)(
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
var ho = (e) => {
    let [t] = Ot(e.event.appid, { include_assets: !0 });
    if (!t) return null;
    let n = t.GetName(),
      r = t.GetAssets()?.GetCommunityIconURL();
    return (0, Y.jsx)(`div`, {
      className: oo,
      children: (0, Y.jsx)(Ya, {
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
      (0, Y.jsx)(`img`, { src: e.imgURL }, `img`),
      (0, Y.jsx)(`div`, { className: Aa }, `video`),
    ];
    return (
      e.side === `right` && t.reverse(),
      (0, Y.jsx)(`div`, { className: so, children: t })
    );
  },
  _o = (e) =>
    (0, Y.jsx)(`div`, {
      className: co,
      children: (0, Y.jsx)(`img`, { style: { width: `100%` }, src: e.imgURL }),
    }),
  vo = (e) =>
    (0, Y.jsx)(`div`, {
      className: co,
      children: (0, Y.jsx)(`img`, { style: { width: `100%` }, src: e.imgURL }),
    }),
  Q = (e) =>
    (0, Y.jsx)(`div`, {
      className: co,
      children: (0, Y.jsx)(`img`, { style: { width: `100%` }, src: e.imgURL }),
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
    ? (g = (0, Y.jsx)(`span`, {
        style: { color: `#C6512B` },
        children: I(`#EventEditor_Required`),
      }))
    : n === 1
      ? (g = (0, Y.jsx)(`span`, {
          style: { color: `#D7BC86` },
          children: I(`#EventEditor_Suggested`),
        }))
      : n === 3 &&
        (g = (0, Y.jsx)(`span`, {
          style: { color: `#D7BC86` },
          children: I(`#EventEditor_Requested`),
        }));
  let _ = null;
  t === `capsule`
    ? (_ = h
        ? (0, Y.jsxs)(Y.Fragment, {
            children: [
              (0, Y.jsxs)(`p`, {
                children: [
                  (0, Y.jsx)(`strong`, {
                    children: I(`#selectimage_tip_design_title`),
                  }),
                  `: `,
                  I(`#selectimage_tip_capsule_creatorhome_1`),
                ],
              }),
              (0, Y.jsxs)(`p`, {
                children: [
                  (0, Y.jsx)(`strong`, {
                    children: I(`#selectimage_tip_usage_title`),
                  }),
                  `: `,
                  I(`#selectimage_tip_capsule_creatorhome_2`),
                ],
              }),
            ],
          })
        : (0, Y.jsxs)(Y.Fragment, {
            children: [
              !!m &&
                (0, Y.jsxs)(`div`, {
                  className: `GF-R3pK6u-A-`,
                  children: [
                    (0, Y.jsx)(`p`, {
                      children: I(`#PartnerEvent_MM_ArtworkTip`),
                    }),
                    (0, Y.jsx)(`p`, {
                      children: (0, Y.jsx)(`a`, {
                        href: `${G.PARTNER_BASE_URL}doc/store/assets/promos#popup_update`,
                        children: I(`#PartnerEvent_MM_LearnMore`),
                      }),
                    }),
                  ],
                }),
              (0, Y.jsxs)(`p`, {
                children: [
                  (0, Y.jsx)(`strong`, {
                    children: I(`#selectimage_tip_design_title`),
                  }),
                  `: `,
                  I(`#selectimage_tip_capsule_1`),
                ],
              }),
              (0, Y.jsxs)(`p`, {
                children: [
                  (0, Y.jsx)(`strong`, {
                    children: I(`#selectimage_tip_usage_title`),
                  }),
                  `: `,
                  I(`#selectimage_tip_capsule_2`),
                ],
              }),
            ],
          }))
    : t === `background`
      ? (_ = (0, Y.jsx)(Y.Fragment, {
          children: (0, Y.jsxs)(`p`, {
            children: [
              (0, Y.jsx)(`strong`, {
                children: I(`#selectimage_tip_design_title`),
              }),
              `: `,
              I(`#selectimage_tip_background_1`),
            ],
          }),
        }))
      : t === `spotlight` || t === `localized_store_app_spotlight`
        ? (_ = (0, Y.jsx)(Y.Fragment, {
            children: (0, Y.jsxs)(`p`, {
              children: [
                (0, Y.jsx)(`strong`, {
                  children: I(`#selectimage_tip_usage_title`),
                }),
                `: `,
                I(`#selectimage_tip_store_spotlight_1`),
              ],
            }),
          }))
        : t === `localized_store_app_spotlight_mobile`
          ? (_ = (0, Y.jsx)(Y.Fragment, {
              children: (0, Y.jsxs)(`p`, {
                children: [
                  (0, Y.jsx)(`strong`, {
                    children: I(`#selectimage_tip_usage_title`),
                  }),
                  `: `,
                  I(`#selectimage_tip_store_mobile_spotlight`),
                ],
              }),
            }))
          : t === `broadcast_left` || t === `broadcast_right`
            ? (_ = (0, Y.jsx)(Y.Fragment, {
                children: (0, Y.jsx)(`p`, {
                  children: I(`#selectimage_tip_broadcast_1`),
                }),
              }))
            : t === `sale_header`
              ? (_ = (0, Y.jsxs)(Y.Fragment, {
                  children: [
                    (0, Y.jsx)(`div`, {
                      className: tt,
                      children: I(`#selectimage_tip_required_title`),
                    }),
                    (0, Y.jsxs)(`p`, {
                      children: [
                        (0, Y.jsx)(`b`, {
                          children: I(`#selectimage_tip_usage_title`),
                        }),
                        `: `,
                        I(`#selectimage_tip_sale_header_1`),
                      ],
                    }),
                    (0, Y.jsxs)(`p`, {
                      children: [
                        (0, Y.jsx)(`b`, {
                          children: I(`#selectimage_tip_design_title`),
                        }),
                        `: `,
                        I(`#selectimage_tip_sale_header_2`),
                      ],
                    }),
                    (0, Y.jsx)(`p`, {
                      children: I(`#selectimage_tip_sale_header_4`),
                    }),
                    (0, Y.jsxs)(`p`, {
                      children: [
                        (0, Y.jsx)(`b`, {
                          children: I(`#selectimage_tip_template_title`),
                        }),
                        `: `,
                        (0, Y.jsx)(`a`, {
                          href: `https://www.dropbox.com/scl/fo/mhf604o6bdbcfr1scq7bx/h?rlkey=9bk0ggiwuvs4o1jdnej4xsy0c&dl=0`,
                          children: I(`#selectimage_tip_sale_header_3`),
                        }),
                      ],
                    }),
                    (0, Y.jsx)(`br`, {}),
                  ],
                }))
              : t === `hero`
                ? d &&
                  (_ = (0, Y.jsxs)(Y.Fragment, {
                    children: [
                      (0, Y.jsx)(`p`, {
                        children: I(`#selectimage_tip_hero_1`),
                      }),
                      !d.GetAssets()?.GetLibraryHeroURL() &&
                        (0, Y.jsx)(`p`, {
                          className: `_9rhLFCwqjPg-`,
                          children: I(`#EventEdtior_ArtworkType_hero_warning`),
                        }),
                    ],
                  }))
                : (_ =
                    t === `localized_image_group` ||
                    t === `link_capsule` ||
                    t === `sale_section_title` ||
                    t === `schedule_track_art` ||
                    t === `localized_background_art`
                      ? (0, Y.jsxs)(Y.Fragment, {
                          children: [
                            (0, Y.jsx)(`p`, {
                              children: I(`#ImagePickerLoc_Desc`),
                            }),
                            (0, Y.jsx)(`p`, {
                              children: zt(
                                `#ImagePickerLoc_Files`,
                                (0, Y.jsx)(`a`, {
                                  href: bo,
                                  target: G.IN_CLIENT ? void 0 : `_blank`,
                                  children: I(`#ImagePickerLoc_URL`),
                                }),
                              ),
                            }),
                          ],
                        })
                      : t === `product_banner`
                        ? (0, Y.jsxs)(Y.Fragment, {
                            children: [
                              (0, Y.jsx)(`div`, {
                                className: et,
                                children: I(`#selectimage_tip_optional_title`),
                              }),
                              (0, Y.jsxs)(`p`, {
                                children: [
                                  (0, Y.jsx)(`b`, {
                                    children: I(`#selectimage_tip_usage_title`),
                                  }),
                                  `: `,
                                  I(`#selectimage_tip_sale_product_banner`),
                                ],
                              }),
                            ],
                          })
                        : t === `product_mobile_banner` ||
                            t === `product_banner_override` ||
                            t === `product_mobile_banner_override`
                          ? (0, Y.jsxs)(Y.Fragment, {
                              children: [
                                (0, Y.jsx)(`div`, {
                                  className: et,
                                  children: I(
                                    `#selectimage_tip_optional_title`,
                                  ),
                                }),
                                (0, Y.jsxs)(`p`, {
                                  children: [
                                    (0, Y.jsx)(`b`, {
                                      children: I(
                                        `#selectimage_tip_usage_title`,
                                      ),
                                    }),
                                    `: `,
                                    I(`#selectimage_tip_sale_product_banner`),
                                    t === `product_mobile_banner` &&
                                      (0, Y.jsxs)(`span`, {
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
                            })
                          : t === `tab_bar_background`
                            ? (0, Y.jsxs)(Y.Fragment, {
                                children: [
                                  (0, Y.jsxs)(`p`, {
                                    children: [
                                      (0, Y.jsx)(`strong`, {
                                        children: I(
                                          `#selectimage_tip_design_title`,
                                        ),
                                      }),
                                      `:`,
                                      I(`#Sale_Tabs_Background_Design`),
                                    ],
                                  }),
                                  (0, Y.jsxs)(`p`, {
                                    children: [
                                      (0, Y.jsx)(`strong`, {
                                        children: I(
                                          `#selectimage_tip_usage_title`,
                                        ),
                                      }),
                                      `:`,
                                      I(`#Sale_Tabs_Background_Usage`),
                                    ],
                                  }),
                                ],
                              })
                            : t === `sale_logo`
                              ? (0, Y.jsxs)(Y.Fragment, {
                                  children: [
                                    (0, Y.jsx)(`div`, {
                                      className: et,
                                      children: I(
                                        `#selectimage_tip_optional_title`,
                                      ),
                                    }),
                                    (0, Y.jsxs)(`p`, {
                                      children: [
                                        (0, Y.jsx)(`b`, {
                                          children: I(
                                            `#selectimage_tip_usage_title`,
                                          ),
                                        }),
                                        `: `,
                                        I(`#selectimage_tip_pageLogo`),
                                      ],
                                    }),
                                  ],
                                })
                              : (0, Y.jsxs)(Y.Fragment, {
                                  children: [
                                    (0, Y.jsx)(`div`, {
                                      className: tt,
                                      children: I(
                                        `#selectimage_tip_required_title`,
                                      ),
                                    }),
                                    (0, Y.jsxs)(`p`, {
                                      children: [
                                        (0, Y.jsx)(`b`, {
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
  let v = Et[e.artworkType].width,
    y = Et[e.artworkType].height;
  return (0, Y.jsxs)(`div`, {
    id: e.id,
    className: ka,
    children: [
      !!e.title &&
        (0, Y.jsxs)(`div`, {
          className: `Y63LZFKwGXE-`,
          onDoubleClick: i,
          children: [
            e.title,
            (0, Y.jsx)(`span`, { children: `\xA0` }),
            g,
            i &&
              (0, Y.jsx)(B, {
                onClick: i,
                children: (0, Y.jsx)(Gt, {
                  toolTipContent: I(
                    e.bIsMinimized
                      ? `#Sale_Section_Maximize_Tooltip`
                      : `#Sale_Section_Minimize_Tooltip`,
                  ),
                  children: e.bIsMinimized
                    ? (0, Y.jsx)(Qt, {})
                    : (0, Y.jsx)(pn, {}),
                }),
              }),
          ],
        }),
      !e.bIsMinimized &&
        (0, Y.jsxs)(`div`, {
          className: F(`XRZj1OeBHRk-`, `hvd5bQPy4pQ-`),
          children: [
            _,
            !!(v && y) &&
              (0, Y.jsxs)(`p`, {
                children: [
                  (0, Y.jsx)(`b`, {
                    children: I(`#selectimage_tip_dimensions_title`),
                  }),
                  `:\xA0`,
                  zt(`#selectimage_tip1`, vt(v), vt(y)),
                ],
              }),
            !!e.strWarning &&
              (0, Y.jsx)(`div`, {
                children: (0, Y.jsx)(`p`, {
                  className: `n7RXDTH-Wf8-`,
                  children: e.strWarning,
                }),
              }),
            e.elEventArtworkExample,
            `\xA0`,
            (0, Y.jsx)(`br`, {}),
            e.elAdditionalControls,
            !!e.fnRemoveAllArtwork &&
              (0, Y.jsx)(B, {
                onClick: (t) => {
                  P(
                    (0, Y.jsx)(So, {
                      fnRemoveAllArtwork: e.fnRemoveAllArtwork,
                    }),
                    Mt(t) ?? window,
                  );
                },
                children: I(`#Sale_RemoveAll`),
              }),
          ],
        }),
      !e.bIsMinimized &&
        (0, Y.jsx)(Co, {
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
  return (0, Y.jsx)(A, {
    strTitle: I(`#Sale_RemoveAll`),
    strDescription: I(`#ImageUpload_DeleteAll_Confirm`),
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
    [f, p] = q.useState(Ke()),
    [m, h] = q.useState([]),
    g = q.useCallback(
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
    _ = q.useCallback(
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
    ? (0, Y.jsx)(`div`, {
        style: { padding: `16px` },
        children: (0, Y.jsx)(B, {
          style: { textTransform: `uppercase`, width: `200px` },
          onClick: () =>
            window.open(
              `${G.PARTNER_BASE_URL}admin/game/editbyappid/${l}?activetab=tab_graphicalassets`,
            ),
          children: I(`#ImageUpload_EditHeroImage`),
        }),
      })
    : (0, Y.jsxs)(`div`, {
        children: [
          (0, Y.jsx)($, {
            list: m,
            fnOnArtworkLanguageChange: _,
            realms: n,
            fnLangHasData: i,
          }),
          (0, Y.jsx)(`div`, {
            children: (0, Y.jsx)(`div`, {
              className: F(Ta, Ea),
              children: (0, Y.jsx)(lo, {
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
var $ = class extends q.Component {
  ShowLangChangeDialog(e, t) {
    let {
      fnOnArtworkLanguageChange: n,
      realms: r,
      fnLangHasData: i,
    } = this.props;
    P(
      (0, Y.jsx)(Ma, {
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
          i = I(`#Language_` + R(r));
        e.push(
          (0, Y.jsxs)(
            `div`,
            {
              className: at,
              children: [
                (0, Y.jsx)(`span`, {
                  children: I(
                    `#ImageUpload_Success_Mapping`,
                    n.file_name ?? ``,
                    i,
                  ),
                }),
                (0, Y.jsx)(`a`, {
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
    if (!e || e.length == 0) return (0, Y.jsx)(`div`, {});
    let t = this.GenerateImageMappings();
    return (0, Y.jsx)(`div`, { className: ja, children: t });
  }
};
(Ht([Kt], $.prototype, `ShowLangChangeDialog`, null), ($ = Ht([l], $)));
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
    [d, p] = (0, q.useState)(!1),
    h = Ct(t, o),
    g = t.GetAccountID(),
    [_] = f(() => [h.GetFilesToUpload().length - h.GetCompletedFiles()]);
  (0, q.useEffect)(() => {
    (p(!1),
      Z.ClearImageGroup(),
      a?.forEach((e, t) => {
        let n = M.InitFromClanID(g, G.EUNIVERSE);
        if (Z.GetAllLocalizedGroupImages().length == 0) {
          let t = e && m.GetHashFromHashAndExt(e),
            r = t && O.GetClanImageByImageHash(n, t);
          r && Z.SetPrimaryImageForImageGroup(r, o);
        }
        Z.SetLocalizedImageGroupAtLang(t, n, e ?? null);
      }),
      p(!0));
  }, [a, g, o]);
  let v = (0, q.useCallback)(
      (e, t, n = 0) => {
        let r = M.InitFromClanID(g, G.EUNIVERSE),
          i = m.GetHashAndExt(t ?? null);
        if (Z.GetAllLocalizedGroupImages().length == 0) {
          let t = i && m.GetHashFromHashAndExt(i),
            n = t && O.GetClanImageByImageHash(r, t);
          n && Z.SetPrimaryImageForImageGroup(n, e);
        }
        Z.SetLocalizedImageGroupAtLang(n, r, i);
      },
      [g],
    ),
    y = (0, q.useCallback)((e, t) => {
      let n = Z.GetLocalizedImageGroupForEdit()?.localized_images[t];
      return n && n.split(`/`).pop();
    }, []);
  return (0, Y.jsxs)(A, {
    onCancel: c,
    closeModal: c,
    bDisableBackgroundDismiss: !0,
    bAllowFullSize: !0,
    className: F(lt, ct),
    strTitle: e.strLocalizedTitle || I(`#ImagePickerLoc_Title`),
    strDescription: e.strLocalizedDescription,
    bOKDisabled: _ > 0,
    onOK: () => {
      let t = Z.GetLocalizedImageGroupForEdit();
      for (let e = 0; e < 32; ++e) {
        let n = t?.localized_images[e];
        if (n) {
          let t = n.split(`/`).pop() || ``;
          l(
            o,
            {
              image_hash: Na(t),
              clanAccountID: g,
              file_type: _t(t) ?? 0,
              imageid: 0,
            },
            e,
          );
        } else l(o, null, e);
      }
      (Z.ClearImageGroup(), e.onOK ? e.onOK() : c?.());
    },
    strOKButtonText: _ > 0 ? I(`#ImagePickerLoc_DismissWarning`) : void 0,
    children: [
      d
        ? (0, Y.jsxs)(Y.Fragment, {
            children: [
              (0, Y.jsx)(ha, {
                clanSteamID: t,
                rgSupportArtwork: [o],
                fnSetImageURL: v,
                bAllowPreviousClanImageSelection: !1,
                rgRealmList: i ?? [],
                uploaderOverride: h,
              }),
              (0, Y.jsx)(xo, {
                clanSteamID: t,
                eventModel: r,
                artworkType: o,
                title: null,
                appid: n,
                realms: i,
                fnRemoveAllArtwork: () => Z.ClearImageGroup(),
                fnSetImageURL: v,
                fnGetImageHashAndExt: y,
                fnLangHasData: s,
                partnerEventStore: u,
              }),
            ],
          })
        : (0, Y.jsx)(D, {
            size: `medium`,
            position: `center`,
            string: I(`#Loading`),
          }),
      e.children,
    ],
  });
}
function To(e) {
  let { setting: t, fnUpdateSetting: n, label: r } = e,
    i = q.useMemo(() => {
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
  return (0, Y.jsxs)(Y.Fragment, {
    children: [
      (0, Y.jsx)(L, { children: r || I(`#EventEditor_Tile_Title`) }),
      (0, Y.jsx)(H, {
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
    { openColorPicker: a } = Cr(),
    [o, s] = (0, q.useState)(() => n),
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
    [v] = (0, q.useState)(() => Do(o.localized_background_art ?? {}));
  return (0, Y.jsxs)(wo, {
    strLocalizedTitle: I(`#BackgroundGroups_Configure`),
    strLocalizedDescription: I(`#BackgroundGroups_DialogDesc`),
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
          i ? (r[R(n)] = i) : delete r[R(n)],
          { ...e, localized_background_art: r }
        );
      });
    },
    onOK: () => {
      s((e) => (r(e), t && setTimeout(t, 1), { ...e }));
    },
    children: [
      (0, Y.jsxs)(`div`, {
        className: xi,
        children: [
          (0, Y.jsxs)(`div`, {
            className: Si,
            children: [
              (0, Y.jsx)(To, {
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
              (0, Y.jsx)(Oo, {
                scaling_setting: l ?? `contain`,
                disable: c !== `no-repeat`,
                fnUpdateSetting: (e) => s({ ...o, scaling_setting: e }),
              }),
              l != `cover` &&
                (0, Y.jsx)(Ao, {
                  position_settings: h,
                  fnUpdateSetting: (e) => s({ ...o, position_setting: e }),
                }),
            ],
          }),
          (0, Y.jsxs)(`div`, {
            className: Ci,
            children: [
              (0, Y.jsx)(L, { children: I(`#BackgroundGroups_Color`) }),
              (0, Y.jsxs)(`div`, {
                className: wi,
                children: [
                  (0, Y.jsx)(B, {
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
                  (0, Y.jsx)(B, {
                    onClick: () => s({ ...o, background_color1: void 0 }),
                    children: I(`#BackgroundGroups_Color_Clear`),
                  }),
                ],
              }),
              (0, Y.jsx)(`div`, {
                className: yi,
                children: (0, Y.jsx)(B, {
                  onClick: () =>
                    s({ ...o, background_color1: d, background_color2: u }),
                  children: I(`#BackgroundGroups_Color_Swap`),
                }),
              }),
              p !== `single-color` &&
                (0, Y.jsxs)(`div`, {
                  className: `j5T-MrFgQ20-`,
                  children: [
                    (0, Y.jsx)(B, {
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
                    (0, Y.jsx)(B, {
                      onClick: () => s({ ...o, background_color2: void 0 }),
                      children: I(`#BackgroundGroups_Color_Clear`),
                    }),
                  ],
                }),
              (0, Y.jsx)(ko, {
                gradient: p ?? `top-to-bottom`,
                fnUpdateSetting: (e) => s({ ...o, gradient_setting: e }),
              }),
            ],
          }),
        ],
      }),
      (0, Y.jsx)(ri, {
        clanSteamID: i.clanSteamID,
        children: (0, Y.jsx)(Ut, {
          checked: !!_,
          onChange: (e) => {
            o.randomize_section_order = e;
          },
          children: I(`#BackgroundGroups_RandomizeSectionOrder`),
        }),
      }),
    ],
  });
}
function Do(e) {
  let t = It([], 32, null);
  for (let n in e) {
    let r = z(n);
    r != -1 && (t[r] = e[n]);
  }
  return t;
}
function Oo(e) {
  let { scaling_setting: t, fnUpdateSetting: n, label: r, disable: i } = e,
    a = q.useMemo(() => {
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
  return (0, Y.jsxs)(Y.Fragment, {
    children: [
      (0, Y.jsx)(L, { children: r || I(`#BackgroundGroups_Scaling`) }),
      (0, Y.jsx)(H, {
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
    i = q.useMemo(() => {
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
  return (0, Y.jsxs)(Y.Fragment, {
    children: [
      (0, Y.jsx)(L, { children: r || I(`#EventEditor_ColorSetting_Title`) }),
      (0, Y.jsx)(H, {
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
    i = q.useMemo(() => {
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
  return (0, Y.jsxs)(Y.Fragment, {
    children: [
      (0, Y.jsx)(L, { children: r || I(`#BackgroundGroups_Position`) }),
      (0, Y.jsx)(H, {
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
    [a, o] = (0, q.useState)(t.BIsBackgroundImageEnabled()),
    [s, c, l] = k(),
    u = f(() => t.GetSalePageLastCoverSectionUntilEnd());
  return (0, Y.jsx)(`div`, {
    className: F(_i, i && `u6DPgTclyv4-`),
    children: (0, Y.jsxs)(N, {
      children: [
        (0, Y.jsx)(W, {
          label: I(`#BackgroundGroups_Setting`),
          checked: a,
          onChange: (e) => {
            (o(e), t.SetBackgroundImageEnabled(e));
          },
        }),
        a
          ? (0, Y.jsxs)(Y.Fragment, {
              children: [
                (0, Y.jsx)(W, {
                  label: I(`#BackgroundGroups_EditMode`),
                  tooltip: I(`#BackgroundGroups_EditMode_ttip`),
                  checked: n,
                  onChange: r,
                }),
                (0, Y.jsx)(W, {
                  label: I(`#BackgroundGroups_ExtendToEnd`),
                  tooltip: I(`#BackgroundGroups_ExtendToEnd_ttip`),
                  checked: u,
                  onChange: (e) => t.SetSalePageLastCoverSectionUntilEnd(e),
                }),
                (0, Y.jsx)(`hr`, {}),
                (0, Y.jsx)(B, {
                  onClick: c,
                  children: I(`#BackgroundGroups_ClearAllSettings`),
                }),
                (0, Y.jsx)(V, {
                  active: s,
                  children: (0, Y.jsx)(A, {
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
          : (0, Y.jsx)(`p`, { children: I(`#BackgroundGroups_Desc`) }),
        (0, Y.jsx)(`br`, {}),
        (0, Y.jsx)(`a`, {
          href: `${G.PARTNER_BASE_URL}doc/marketing/event_tools/sales/groups`,
          target: `_blank`,
          children: I(`#EventGeneric_SeeDocs`),
        }),
      ],
    }),
  });
}
var Mo = q.forwardRef(function (e, t) {
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
    [h, g, _] = k(),
    [v, y, b] = k(),
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
  return (0, Y.jsx)(Sn, {
    bStartMinimized: !1,
    title: I(
      s == null
        ? `#BackgroundGroups_Sale_GroupNum`
        : `#BackgroundGroups_Sale_Tab_GroupNum`,
      i + 1,
    ),
    className: e.classNameHeader,
    children: (0, Y.jsxs)(`div`, {
      ref: t,
      children: [
        (0, Y.jsx)(B, {
          onClick: g,
          children: I(`#BackgroundGroups_Configure`),
        }),
        (0, Y.jsx)(V, {
          active: h,
          children: (0, Y.jsx)(Eo, {
            imgGroup: a,
            closeModal: _,
            eventModel: o,
            fnUpdateImageGroup: (e) =>
              s == null
                ? r.SetSalePageBackgroundGroup(i, e)
                : r.SetTabBackgroundGroup(s, i, e),
          }),
        }),
        (0, Y.jsx)(`br`, {}),
        (0, Y.jsx)(`div`, {
          className: bi,
          children: I(`#BackgroundGroups_ContentTitle`),
        }),
        (0, Y.jsxs)(`ul`, {
          children: [
            u.map((e) =>
              (0, Y.jsx)(
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
              (0, Y.jsx)(`li`, { children: I(`#BackgroundGroups_EndOfList`) }),
          ],
        }),
        !!S &&
          (0, Y.jsx)(B, {
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
          (0, Y.jsx)(B, {
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
          (0, Y.jsxs)(Y.Fragment, {
            children: [
              (0, Y.jsx)(`hr`, {}),
              (0, Y.jsx)(B, {
                onClick: y,
                children: I(`#BackgroundGroups_RemoveThisGroup`),
              }),
              (0, Y.jsx)(V, {
                active: v,
                children: (0, Y.jsx)(A, {
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
function No(e) {
  let { backgroundImageEditModel: t, nTabID: n } = e;
  return (0, Y.jsx)(`div`, {
    className: vi,
    children: (0, Y.jsx)(B, {
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
    ? (0, Y.jsx)(No, { backgroundImageEditModel: i, nTabID: t })
    : a
      ? (0, Y.jsx)(Fo, { ...e, groupID: a })
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
    [c, l] = (0, q.useState)(!1);
  (0, q.useEffect)(() => {
    if (!c) return;
    let e = P(
      (0, Y.jsx)(A, {
        bAlertDialog: !0,
        closeModal: () => l(!1),
        children: (0, Y.jsx)(Mo, {
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
    [d, p] = (0, q.useState)(null),
    m = q.useCallback((e, t) => {
      p(t);
    }, []),
    h = $t(m);
  return (0, Y.jsxs)(`div`, {
    className: vi,
    ref: h,
    children: [
      !!(u && d && d > u) &&
        (0, Y.jsx)(B, {
          onClick: (e) => l(!0),
          children: I(`#BackgroundGroups_EditBackgroundGroup`),
        }),
      (0, Y.jsx)(Mo, {
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
    [n, r] = (0, q.useState)(!1);
  (0, q.useEffect)(() => {
    if (!n) return;
    let t = P(
      (0, Y.jsx)(A, {
        bAlertDialog: !0,
        closeModal: () => r(!1),
        children: (0, Y.jsx)(Ro, { ...e }),
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
    [a, o] = (0, q.useState)(null),
    s = q.useCallback((e, t) => {
      o(t);
    }, []),
    c = $t(s),
    l = !!(i >= 0 && a && a > i);
  return (0, Y.jsxs)(`div`, {
    className: F(vi, Io),
    ref: c,
    children: [
      l &&
        (0, Y.jsx)(B, {
          onClick: (e) => r(!0),
          children: I(`#BackgroundGroups_EditBackgroundGroup`),
        }),
      (0, Y.jsx)(Ro, { ...e }),
    ],
  });
}
function Ro(e) {
  let { backgroundImageEditModel: t, imgGroupDerivedMapping: n, nTabID: r } = e,
    [i, a] = (0, q.useState)(null),
    [o, s, c, l] = f(() => [
      t?.GetTabLastCoverSectionUntilEnd(r),
      t?.BIsTabEnabled(r),
      n.selectedTabBackgroundDef,
      t?.GetEventModel(),
    ]);
  return (0, Y.jsxs)(N, {
    children: [
      (0, Y.jsx)(W, {
        label: I(`#BackgroundGroups_TaSetting`),
        checked: s,
        onChange: (e) => {
          if (
            (U(t, `edit model mising`),
            U(r !== void 0, `tab setting missing`),
            r !== void 0 && t)
          ) {
            let n = t.SetTabEnabled(r, e);
            (U(!!n, `Failed to create model TabID ${r}backgroundModel`), a(n));
          } else
            console.error(
              `Failed to enable table group, edit mode: ${!!t}, TabID: ${r}.`,
            );
        },
      }),
      !!s &&
        (0, Y.jsxs)(Y.Fragment, {
          children: [
            (0, Y.jsx)(W, {
              label: I(`#BackgroundGroups_ExtendToEnd`),
              tooltip: I(`#BackgroundGroups_ExtendToEnd_Tab_ttip`),
              checked: o,
              onChange: (e) => t.SetTabLastCoverSectionUntilEnd(r, e),
            }),
            (0, Y.jsx)(Mo, {
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
    [c, l] = q.useState(n?.GetDayIndexFromEventStart()),
    [u, d] = q.useState(null),
    p = f(() => n.jsondata.sale_header_disable_top_margin),
    m = C(n, !!me(n)),
    h = Bo(n, c, oe(!!r)),
    [g, _] = (0, q.useState)(!1);
  q.useEffect(() => {
    if (
      n.jsondata.sale_custom_css &&
      !u &&
      r &&
      n.jsondata.sale_vanity_id_valve_approved_for_sale_subpath &&
      Wt() == `community`
    ) {
      let e = document.getElementsByTagName(`HEAD`)[0],
        t = document.createElement(`style`);
      ((t.innerText = Zt(n.jsondata.sale_custom_css)), d(t), e.appendChild(t));
    }
    let e = document.getElementsByClassName(`react_landing_background`);
    return (
      U(e.length <= 1, `Must have at most one react_landing_background`),
      e.length >= 1 && (e[0].style.backgroundImage = ``),
      () => {
        u && (u.remove(), d(null));
      }
    );
  }, [n, u, r]);
  let v = n?.jsondata,
    y = q.useMemo(
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
    x = ni(n?.clanSteamID);
  if (!n || c === void 0)
    return (0, Y.jsx)(`div`, {
      className: hn,
      style: { height: `500px` },
      children: (0, Y.jsx)(D, { size: `medium`, string: I(`#Loading`) }),
    });
  {
    let e = Dr(n),
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
      ne = u ? dn.NoTransform : dn.NoTransformSparseContent,
      re = F(
        Oe,
        p && `_9D3431c8-XE-`,
        C && `_5NaHSqwUb-k-`,
        we[`CustomStyle_${n.jsondata.sale_vanity_id}`],
        `SaleOuterContainer`,
        e && `RG63SnOtLk0-`,
        f && void 0,
      );
    return (0, Y.jsx)(N, {
      children: (0, Y.jsx)(ae, {
        eventModel: n,
        language: i,
        children: (0, Y.jsx)(ht, {
          location: r ? 2 : 0,
          children: (0, Y.jsxs)(Nr, {
            event: n,
            language: i,
            bIsPreview: !!r,
            personalizedCarousels: m,
            children: [
              ee && (0, Y.jsx)(le, {}),
              (0, Y.jsx)(Tr, { eventModel: n }),
              !!a &&
                (w || x) &&
                (0, Y.jsx)(jo, {
                  backgroundImageEditModel: a,
                  bBackgroundImgGroupEditMode: g,
                  fnSetBackgroundImgGroupEditMode: _,
                  bShowAsValveOnly: !w,
                }),
              (0, Y.jsxs)(un, {
                style: !f || (C && !e) ? { marginTop: `${v || 0}px` } : void 0,
                className: re,
                scrollIntoViewType: ne,
                children: [
                  e && (0, Y.jsx)(Or, { eventModel: n, language: i }),
                  (0, Y.jsx)(zr, { rgPresenters: n.jsondata.sale_presenters }),
                  (0, Y.jsx)(Ur, { event: n, broadcastEmbedContext: y }),
                  (0, Y.jsx)(Uo, {
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
                    (0, Y.jsx)(ci, {
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
    o = q.useMemo(() => {
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
  return q.useMemo(() => {
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
    [c, l] = q.useState(st()),
    u = q.useMemo(() => new gi(), []),
    d = q.useCallback(() => l(st()), []);
  (q.useEffect(
    () => (
      window.addEventListener(`resize`, d),
      () => window.removeEventListener(`resize`, d)
    ),
    [d],
  ),
    q.useEffect(() => {
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
        di(
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
    C = bn(),
    ee = y(),
    w = T(t),
    ne = Vr(v),
    re = q.useMemo(() => {
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
      if (te(n) && !rn.logged_in)
        b ||= ((p = (0, Y.jsx)(ie, { section: n, event: t, language: r })), !0);
      else {
        let t = n.diable_tab_id_filtering
          ? new de(void 0, l && l.GetSaleDay())
          : l;
        (n.section_type == `tabs` &&
          n.tabs?.some((e) => e.unique_id == o?.GetActiveTabUniqueID()) &&
          x.push({ activeTab: o, elements: [] }),
          (p = (0, Y.jsx)(ce, {
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
    ee && (p = (0, Y.jsx)(Ir, { nSectionID: n.unique_id, children: p }));
    let v = x && x.length && x[x.length - 1],
      y = (0, Y.jsx)(
        qo,
        {
          section: n,
          nActiveTabID: v && v.activeTab && v.activeTab.GetActiveTabUniqueID(),
          saleSectionIndex: i,
          ePreviewMode: a,
          salePageBackgroundDerivedConfig: _,
          backgroundImageEditModel: s,
          bExpanded: f,
          children: (0, Y.jsx)(pt, { enabled: !re || i > re, children: p }),
        },
        `SaleSectionIndex_` + n.unique_id + `_` + i,
      ),
      T = _.mapSectionToGroup.get(n.unique_id);
    (S &&
      S.groupID != T &&
      (x[x.length - 1].elements.push(
        fi(t, S, a, o && o?.GetActiveTabUniqueID()),
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
        fi(t, S, a, o && o?.GetActiveTabUniqueID()),
      ),
      null)));
  let ae = x.map((e, t) =>
    (0, Y.jsx)(
      `div`,
      { className: F(Te, `SaleSectionTabListContainer`), children: e.elements },
      `TabSection_` + t,
    ),
  );
  return (0, Y.jsx)(un, {
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
    ? (0, Y.jsx)(Go, {
        visibility_by_door_index_state: t,
        door_index_visibility: n,
        children: r,
      })
    : (0, Y.jsx)(Y.Fragment, { children: r });
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
    : (0, Y.jsx)(Y.Fragment, { children: r });
}
function Ko({ children: e, onChange: t }) {
  return (
    q.useRef(null),
    (0, q.useEffect)(() => {
      t(!!q.Children.toArray(e).filter(Boolean).length);
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
    [d, f] = (0, q.useState)(!0);
  return d
    ? (0, Y.jsx)(N, {
        children: (0, Y.jsx)(Wo, {
          visibility_by_door_index_state: t.visibility_by_door_index_state,
          door_index_visibility: t.door_index_visibility,
          children: u
            ? (0, Y.jsx)(un, {
                navKey: l,
                id: l,
                className: F({
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
                    ? (0, Y.jsxs)(Y.Fragment, {
                        children: [
                          c,
                          (0, Y.jsx)(Po, {
                            nSectionUniqueID: t.unique_id || n,
                            nTabID: r,
                            salePageBackgroundDerivedConfig: a,
                            backgroundImageEditModel: o,
                          }),
                        ],
                      })
                    : (0, Y.jsx)(Ko, { onChange: f, children: c }),
              })
            : (0, Y.jsx)(Y.Fragment, {
                children:
                  i === E.EPreviewMode_EditBackground
                    ? (0, Y.jsxs)(`div`, {
                        id: l,
                        className: F({
                          [Ee]: !0,
                          [Ce]: !0,
                          [ke]: t.collapse_header_space,
                        }),
                        children: [
                          c,
                          (0, Y.jsx)(Lo, {
                            backgroundImageEditModel: o,
                            nTabID: r,
                            imgGroupDerivedMapping: a,
                          }),
                        ],
                      })
                    : (0, Y.jsx)(Ko, { onChange: f, children: c }),
              }),
        }),
      })
    : null;
}
export { zo as t };
