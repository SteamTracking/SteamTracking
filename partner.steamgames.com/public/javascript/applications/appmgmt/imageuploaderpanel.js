/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  F as e,
  Pt as t,
  U as n,
  W as r,
  X as i,
  nt as a,
  r as o,
  t as s,
} from "./chunk~de7f2df91c.js";
import { A as c, J as l, Nt as u, ot as d } from "./chunk~bd90a5fce7.js";
import {
  $i as f,
  Bn as p,
  Ft as m,
  Gt as h,
  Ha as g,
  aa as ee,
  da as _,
  gn as te,
  h as v,
  l as y,
  m as ne,
  on as re,
  q as ie,
  u as b,
} from "./chunk~1fa4b8f2ff.js";
import { C as ae, w as x } from "./chunk~44f252525d.js";
import { n as S } from "./chunk~16aefcf65f.js";
import "./chunk~8681f5c764.js";
import { t as C } from "./chunk~c55709d290.js";
import { t as w } from "./chunk~eefd71512b.js";
import "./chunk~ca0c999570.js";
import { m as oe } from "./chunk~2f8c67b4de.js";
import { t as se } from "./chunk~802e967112.js";
import {
  f as ce,
  i as le,
  l as ue,
  o as de,
  r as fe,
} from "./chunk~d6693aba87.js";
import "./chunk~166eab4331.js";
var T = t(a()),
  E = (e) => e != null;
function D(e, t) {
  let [n, r] = T.useState(() => window.localStorage.getItem(e) ?? void 0),
    i = T.useRef(e),
    a = T.useCallback(
      (t) => {
        let n = E(t) ? String(t) : void 0;
        (n === void 0
          ? window.localStorage.removeItem(e)
          : window.localStorage.setItem(e, n),
          r(n),
          O.Get().GetLocalStoreChangeCallback(e).Dispatch(n));
      },
      [e, r],
    );
  T.useEffect(() => {
    e != i.current &&
      (r(window.localStorage.getItem(e) ?? void 0), (i.current = e));
  }, [e]);
  let o = e == i.current ? n : window.localStorage.getItem(e),
    s = t;
  return (
    E(o) &&
      (E(t)
        ? typeof t == `boolean`
          ? (s = t.constructor(o !== `false`))
          : t != null && t != null && (s = t.constructor(o))
        : (s = o)),
    c(O.Get().GetLocalStoreChangeCallback(e), r),
    [s, a]
  );
}
var O = class e {
  m_mapChangeCallback = new Map();
  GetLocalStoreChangeCallback(e) {
    return (
      this.m_mapChangeCallback.has(e) ||
        this.m_mapChangeCallback.set(e, new u()),
      this.m_mapChangeCallback.get(e)
    );
  }
  static s_Singleton;
  static Get() {
    return ((e.s_Singleton ||= new e()), e.s_Singleton);
  }
};
function pe([e, t, n]) {
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
function me([e, t, n]) {
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
function he(e) {
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
function ge(e) {
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
function _e(e) {
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
function ve(e) {
  let t = pe([e.r / 255, e.g / 255, e.b / 255]);
  return { h: t[0], s: t[1], v: t[2], a: e.a };
}
function ye(e) {
  let t = me([e.h, e.s, e.v]);
  return { r: t[0] * 255, g: t[1] * 255, b: t[2] * 255, a: e.a };
}
var k = [`hex`, `rgb`, `hsl`];
function A(e) {
  return Math.round(e * 100) / 100;
}
function j(e) {
  let { r: t, g: n, b: r, a: i } = ye(e);
  return { r: Math.round(t), g: Math.round(n), b: Math.round(r), a: i };
}
function M(e, t) {
  let { r: n, g: r, b: i, a } = e,
    o = a >= 1;
  switch (t) {
    case `hex`:
      return ge(e);
    case `rgb`:
      return o ? `rgb(${n}, ${r}, ${i})` : `rgba(${n}, ${r}, ${i}, ${A(a)})`;
    case `hsl`: {
      let { h: t, s: n, l: r } = _e(e),
        i = `${Math.round(t)}, ${Math.round(n * 100)}%, ${Math.round(r * 100)}%`;
      return o ? `hsl(${i})` : `hsla(${i}, ${A(a)})`;
    }
  }
}
function N(e) {
  return `rgba(${e.r}, ${e.g}, ${e.b}, ${A(e.a)})`;
}
function P(e) {
  let t = /^#?([0-9a-f]{3,4})$/i.exec(e)?.[1],
    n = he(t ? t.replace(/./g, `$&$&`) : e);
  return n && { ...n, a: A(n.a) };
}
function be(e) {
  let t =
    /^rgba?\(\s*([\d.]+)[\s,]+([\d.]+)[\s,]+([\d.]+)\s*(?:[,/]\s*([\d.]+)(%?)\s*)?\)$/i.exec(
      e,
    );
  if (!t) return;
  let [, n, r, a, o, s] = t,
    c = o === void 0 ? 1 : parseFloat(o);
  return (
    s && (c /= 100),
    {
      r: i(Math.round(parseFloat(n)), 0, 255),
      g: i(Math.round(parseFloat(r)), 0, 255),
      b: i(Math.round(parseFloat(a)), 0, 255),
      a: i(c, 0, 1),
    }
  );
}
var F;
function xe(e) {
  if (typeof CSS > `u` || !CSS.supports(`color`, e)) return;
  if (F === void 0) {
    let e = document.createElement(`canvas`);
    ((e.width = e.height = 1),
      (F = e.getContext(`2d`, { willReadFrequently: !0 })));
  }
  let t = F;
  if (!t) return;
  (t.clearRect(0, 0, 1, 1),
    (t.fillStyle = `#000000`),
    (t.fillStyle = e),
    t.fillRect(0, 0, 1, 1));
  let [n, r, i, a] = t.getImageData(0, 0, 1, 1).data;
  return { r: n, g: r, b: i, a: A(a / 255) };
}
function I(e) {
  let t = e?.trim();
  if (t) return P(t) ?? be(t) ?? xe(t);
}
function Se(e) {
  let t = I(e);
  return t ? M({ ...t, a: 1 }, `hex`) : void 0;
}
var Ce = `FcfcNn7MYQM-`,
  L = `mBPBMKMRyFc-`,
  we = `Wi9Z0cIQBJQ-`,
  Te = `CG-aPa5ETcg-`,
  Ee = `XqWa8m4TS-o-`,
  De = `CT-fGhlJtb8-`,
  Oe = `_-1iQ2DUgeIw-`,
  ke = `_6empc5TVW6c-`,
  Ae = `X3PwdzXulJQ-`,
  je = `_362FAsYdx9w-`,
  Me = `f8RIg1qa2ts-`,
  Ne = `IzorRe2k8io-`,
  Pe = `qWqNnw1hGLY-`,
  Fe = `xVJaIlx-dnY-`,
  Ie = `GOiXAHGmWGg-`,
  Le = `CJ0nwSBwrpE-`,
  R = `pS4NM2hdvRk-`,
  Re = `VSND6o6qGDA-`,
  z = r(),
  ze =
    `#000000.#1b1b1b.#333333.#4d4d4d.#666666.#808080.#999999.#b3b3b3.#d9d9d9.#ffffff.#e53935.#fb8c00.#fdd835.#7cb342.#43a047.#00897b.#00acc1.#1e88e5.#8e24aa.#d81b60.#ef9a9a.#ffcc80.#fff59d.#c5e1a5.#a5d6a7.#80cbc4.#80deea.#90caf9.#ce93d8.#f48fb1.#b71c1c.#e65100.#f57f17.#33691e.#1b5e20.#004d40.#006064.#0d47a1.#4a148c.#880e4f`.split(
      `.`,
    ),
  Be = `rgba(255, 255, 255, 1)`,
  Ve = `SharedColorPicker_Format`,
  B = `ColorPickerSampling`,
  He = 0.01,
  Ue = 0.1;
function We(e) {
  let {
      color: t,
      onChange: n,
      strTitle: r,
      disableAlpha: i,
      onSubmit: a,
      children: s,
    } = e,
    [c, l] = (0, T.useState)(() => Ke(t, i)),
    u = (0, T.useRef)(void 0);
  (0, T.useEffect)(() => {
    let e = I(t);
    !e || (u.current && Ge(e, u.current, i)) || l((e) => V(t, e.h, i) ?? e);
  }, [t, i]);
  let d = (0, T.useCallback)(
      (e) => {
        let t = i ? { ...e, a: 1 } : e;
        l(t);
        let r = j(t);
        ((u.current = r), n(N(r)));
      },
      [i, n],
    ),
    f = j(c),
    p = M({ ...f, a: 1 }, `hex`),
    m = N(f);
  return (0, z.jsxs)(`div`, {
    className: o(Ce, `noOpinionatedGlobalStyles`),
    style: {
      "--colorpicker-hue": `hsl( ${c.h}deg 100% 50% )`,
      "--colorpicker-opaque": p,
      "--colorpicker-current": m,
    },
    children: [
      !!r && (0, z.jsx)(`div`, { className: `GEaX-EfeXNg-`, children: r }),
      (0, z.jsx)(Je, { hsva: c, fnSetColor: d }),
      (0, z.jsx)(U, {
        className: De,
        strLabel: g.Localize(`#ColorPicker_Hue`),
        nMax: 360,
        nValue: Math.round(c.h),
        strValueText: `${Math.round(c.h)}°`,
        fnSetValue: (e) => d({ ...c, h: e }),
      }),
      !i &&
        (0, z.jsx)(U, {
          className: `xV4lUfTUFc4-`,
          strLabel: g.Localize(`#ColorPicker_Opacity`),
          nMax: 100,
          nValue: Math.round(c.a * 100),
          strValueText: `${Math.round(c.a * 100)}%`,
          fnSetValue: (e) => d({ ...c, a: e / 100 }),
        }),
      (0, z.jsx)(Ye, { hsva: c, disableAlpha: i, fnSetColor: d, onSubmit: a }),
      (0, z.jsx)(Ze, {
        strCurrentHex: p,
        bOpaque: f.a >= 1,
        fnPick: (e) => {
          let t = V(e, c.h, i);
          t && d(t);
        },
      }),
      s,
    ],
  });
}
function Ge(e, t, n) {
  return (
    e.r === t.r &&
    e.g === t.g &&
    e.b === t.b &&
    (n || Math.abs(e.a - t.a) < 0.01)
  );
}
function Ke(e, t) {
  return V(e, 0, t) ?? V(Be, 0, t);
}
function V(e, t, n) {
  let r = I(e);
  if (!r) return;
  let i = ve(n ? { ...r, a: 1 } : r);
  return i.s === 0 || i.v === 0 ? { ...i, h: t } : i;
}
function qe(e) {
  let t = (t) => {
    let n = t.currentTarget.getBoundingClientRect(),
      r = n.width ? (t.clientX - n.left) / n.width : 0,
      a = n.height ? (t.clientY - n.top) / n.height : 0;
    e(i(r, 0, 1), i(a, 0, 1));
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
function H(e, t, n) {
  let r = e.shiftKey ? Ue : He;
  if (e.key === t) return r;
  if (e.key === n) return -r;
}
function Je(e) {
  let { hsva: t, fnSetColor: n } = e,
    r = qe((e, r) => n({ ...t, s: e, v: 1 - r }));
  return (0, z.jsx)(`div`, {
    className: we,
    role: `slider`,
    tabIndex: 0,
    "aria-label": g.Localize(`#ColorPicker_SaturationBrightness`),
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    "aria-valuenow": Math.round(t.v * 100),
    "aria-valuetext": `${Math.round(t.s * 100)}%, ${Math.round(t.v * 100)}%`,
    onKeyDown: (e) => {
      let r = H(e, `ArrowRight`, `ArrowLeft`),
        a = H(e, `ArrowUp`, `ArrowDown`);
      (r !== void 0 || a !== void 0) &&
        (e.preventDefault(),
        n({ ...t, s: i(t.s + (r ?? 0), 0, 1), v: i(t.v + (a ?? 0), 0, 1) }));
    },
    ...r,
    children: (0, z.jsx)(`div`, {
      className: L,
      style: { left: `${t.s * 100}%`, top: `${(1 - t.v) * 100}%` },
    }),
  });
}
function U(e) {
  let {
    className: t,
    strLabel: n,
    nMax: r,
    nValue: i,
    strValueText: a,
    fnSetValue: s,
  } = e;
  return (0, z.jsx)(`div`, {
    className: Te,
    children: (0, z.jsx)(S.Root, {
      min: 0,
      max: r,
      value: [i],
      onValueChange: (e) => s(e[0]),
      children: (0, z.jsx)(S.Track, {
        render: (0, z.jsx)(`div`, { className: o(Ee, t) }),
        children: (0, z.jsx)(S.Handle, {
          render: (e) =>
            (0, z.jsx)(`span`, {
              ...e,
              className: L,
              style: { insetInlineStart: `${(i / r) * 100}%` },
              "aria-label": n,
              "aria-valuetext": a,
            }),
        }),
      }),
    }),
  });
}
function Ye(e) {
  let { hsva: t, disableAlpha: n, fnSetColor: r, onSubmit: i } = e,
    [a, s] = D(Ve),
    c = k.find((e) => e === a) ?? `hex`,
    [l, u] = (0, T.useState)(void 0),
    d = M(j(t), c),
    f = l !== void 0 && l.trim() !== `` && !I(l),
    p = (e) => {
      u(e);
      let i = V(e, t.h, n);
      i && r(i);
    },
    m = (e) => {
      (s(e), u(void 0));
    };
  return (0, z.jsxs)(`div`, {
    className: Oe,
    children: [
      (0, z.jsxs)(`div`, {
        className: ke,
        children: [
          (0, z.jsx)(`div`, { className: Ae, "aria-hidden": !0 }),
          (0, z.jsx)(`input`, {
            className: o(je, f && `_5Zk11eFAaLo-`),
            type: `text`,
            spellCheck: !1,
            autoComplete: `off`,
            "aria-label": g.Localize(`#ColorPicker_ColorValue`),
            "aria-invalid": f,
            value: l ?? d,
            onChange: (e) => p(e.currentTarget.value),
            onBlur: () => u(void 0),
            onKeyDown: (e) => {
              e.key === `Enter` && (e.preventDefault(), u(void 0), i?.());
            },
          }),
          (0, z.jsx)(Xe, { hsva: t, disableAlpha: n, fnSetColor: r }),
        ],
      }),
      f &&
        (0, z.jsx)(`div`, {
          className: `tHsVe8Ptn-s-`,
          children: g.Localize(`#ColorPicker_InvalidColor`),
        }),
      (0, z.jsx)(`div`, {
        className: Ne,
        role: `radiogroup`,
        children: k.map((e) =>
          (0, z.jsx)(
            `button`,
            {
              type: `button`,
              role: `radio`,
              "aria-checked": e === c,
              className: o(Pe, e === c && `wBwV8sUsuTo-`),
              onClick: () => m(e),
              children: e.toUpperCase(),
            },
            e,
          ),
        ),
      }),
    ],
  });
}
function Xe(e) {
  let { hsva: t, disableAlpha: n, fnSetColor: r } = e,
    [i, a] = (0, T.useState)(!1);
  (0, T.useEffect)(() => a(`EyeDropper` in window), []);
  let o = async () => {
    let e = document.documentElement;
    e.classList.add(B);
    try {
      let e = V((await new window.EyeDropper().open()).sRGBHex, t.h, n);
      e && r({ ...e, a: t.a });
    } catch (e) {
      console.warn(g.Localize(`#Sale_EyeDropperFailed`), e);
    } finally {
      e.classList.remove(B);
    }
  };
  if (!i) return null;
  let s = g.Localize(`#Sale_BackgroundColorPicker`);
  return (0, z.jsx)(te, {
    toolTipContent: s,
    children: (0, z.jsx)(`button`, {
      type: `button`,
      className: Me,
      "aria-label": s,
      onClick: o,
      children: (0, z.jsx)(ie, {}),
    }),
  });
}
function Ze(e) {
  let { strCurrentHex: t, bOpaque: n, fnPick: r } = e;
  return (0, z.jsx)(`div`, {
    className: Fe,
    role: `group`,
    "aria-label": g.Localize(`#ColorPicker_Palette`),
    children: ze.map((e) => {
      let i = n && e === t;
      return (0, z.jsx)(
        `button`,
        {
          type: `button`,
          className: o(Ie, i && `wBwV8sUsuTo-`),
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
var W = T.createContext(void 0);
function Qe(e, t) {
  return {
    fnSnapshot: () => {
      let n = e();
      return () => t(n);
    },
  };
}
function $e(e) {
  let {
      color: t,
      onChange: n,
      onRequestClose: r,
      disableAlpha: i,
      strTitle: a,
      bLivePreview: s = !0,
      fnRestoreChanges: c,
    } = e,
    l = (0, T.useRef)(null),
    u = (0, T.useRef)(void 0),
    d = (0, T.useRef)(!1),
    f = (0, T.useRef)({
      color: t,
      onChange: n,
      fnRestoreChanges: c,
      bLivePreview: s,
    });
  f.current = { color: t, onChange: n, fnRestoreChanges: c, bLivePreview: s };
  let p = (0, T.useCallback)(
      (e) => {
        ((u.current = e), s && n(e));
      },
      [s, n],
    ),
    m = (0, T.useCallback)(() => {
      ((d.current = !0), !s && u.current !== void 0 && n(u.current), r());
    }, [s, n, r]);
  return (
    (0, T.useEffect)(
      () => () => {
        let e = f.current;
        if (!d.current && e.bLivePreview && u.current !== void 0)
          try {
            (e.onChange(e.color), e.fnRestoreChanges?.());
          } catch (e) {
            console.error(`Color picker: could not undo a previewed color`, e);
          }
      },
      [],
    ),
    (0, T.useEffect)(() => {
      let e = l.current?.ownerDocument ?? document,
        t = (e) => {
          l.current && !l.current.contains(e.target) && r();
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
    (0, z.jsx)(`div`, {
      ref: l,
      children: (0, z.jsx)(We, {
        color: t,
        disableAlpha: i,
        strTitle: a ?? g.Localize(`#Button_Color`),
        onChange: p,
        onSubmit: m,
        children: (0, z.jsxs)(`div`, {
          className: Le,
          children: [
            (0, z.jsx)(`button`, {
              type: `button`,
              className: o(R, Re),
              onClick: m,
              children: g.Localize(`#Button_Save`),
            }),
            (0, z.jsx)(`button`, {
              type: `button`,
              className: R,
              onClick: r,
              children: g.Localize(`#Button_Cancel`),
            }),
          ],
        }),
      }),
    })
  );
}
function G(e, t, n) {
  let r = t.bLivePreview ?? !0,
    i = r ? n?.fnSnapshot() : void 0,
    a = null,
    o = !1,
    s = (0, z.jsx)($e, {
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
  a = (e instanceof HTMLElement, p(s, e, { bDisablePopTop: !0 }));
}
function et() {
  let e = (0, T.useContext)(W);
  return { openColorPicker: (0, T.useCallback)((t, n) => G(t, n, e), [e]) };
}
var tt = t(s());
function K(e, t) {
  let n = T.useRef(null),
    r = T.useCallback(
      (t) => {
        t.currentTarget.files.length > 0 &&
          (e(t.currentTarget.files), (t.currentTarget.value = ``));
      },
      [e],
    ),
    i = T.useCallback(() => n.current?.click(), []);
  return [
    tt.createPortal(
      (0, z.jsx)(`form`, {
        onSubmit: J,
        style: { display: `none` },
        children: (0, z.jsx)(`input`, {
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
function q(e) {
  let [t, n] = T.useState(!1);
  return [
    {
      onDragEnter: T.useCallback((e) => {
        ((e.dataTransfer.files && e.dataTransfer.files[0]) ||
          (e.dataTransfer.types && e.dataTransfer.types[0] == `Files`)) &&
          n(!0);
      }, []),
      onDragLeave: T.useCallback((e) => {
        l(e) && n(!1);
      }, []),
      onDragEnd: T.useCallback(() => n(!1), []),
      onDragOver: t ? J : void 0,
      onDrop: T.useCallback(
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
function J(e) {
  e.preventDefault();
}
var nt = `wxWVRBKbQ6Y-`,
  rt = `_1hQVgn9Glyw-`,
  it = `OQ-ETv0yIhg-`,
  at = `wVGLukava5E-`;
function Y(e) {
  let {
      onDropFiles: t,
      renderDesciption: n,
      elAdditonalButtons: r,
      elOverrideDragAndDropText: i,
    } = e,
    [a, s] = q(t),
    [c, l] = K(t, {
      accept: `image/png, image/jpeg, image/gif, image/webp`,
      multiple: !0,
    });
  return (0, z.jsxs)(`div`, {
    ...a,
    className: o(s ? rt : nt, `DragAndDropContainer`),
    children: [
      n?.(),
      (0, z.jsx)(`div`, { children: i || _(`#ImagePicker_DragAndDrop`) }),
      (0, z.jsxs)(`div`, {
        className: it,
        children: [
          c,
          (0, z.jsxs)(`label`, {
            onClick: l,
            children: [
              (0, z.jsxs)(`span`, {
                children: [_(`#ImagePicker_OrBrowse`), ` `],
              }),
              (0, z.jsx)(`span`, {
                className: at,
                children: _(`#selectimage_select_file`),
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
var ot = `_5RINCHFuy0Y-`,
  st = `GWe0Hc-fT2A-`,
  ct = `Wmeqy6nXS1Y-`,
  lt = `_698Kbr-wNSM-`,
  X = `_4l0OY5qTFkk-`,
  ut = `_4StKqHsfdjg-`,
  Z = `dp7SyRphVOo-`,
  Q = `OoUlU8pBBN4-`;
function dt(e) {
  let {
      imageUploader: t,
      fnUploadComplete: n,
      elOverrideDragAndDropText: r,
      forceResolution: i,
      elAdditonalButtons: a,
      rgRealmList: o,
    } = e,
    [s, c] = x(() => [t.GetUploadImages(), se.Get().GetCurEditLanguage()]),
    l = T.useCallback(
      async (e) => {
        let n = Array.from(e),
          r = !0;
        for (let e = 0; e < n.length; e++) {
          let i = n[e],
            { language: a } = fe(i?.name, c);
          try {
            let n = le(a, c, o);
            ((r = await t.AddImageForLanguage(i, n)),
              r ||
                (console.error(
                  `ImageUploaderPanel.OnDropFiles: failed on i=` +
                    e +
                    ` file=` +
                    i.name,
                ),
                v(
                  (0, z.jsx)(b, {
                    strDescription: _(`#ImagePicker_Error`, i.name),
                  }),
                  window,
                )));
          } catch (e) {
            let t = C(e);
            (console.error(
              `ImageUploaderPanel.OnDropFiles: ` + t.strErrorMsg,
              t,
            ),
              v(
                (0, z.jsx)(b, {
                  strDescription: _(`#EventError_Code`, t.strErrorMsg ?? ``),
                }),
                window,
              ));
          }
        }
        return r;
      },
      [c, t, o],
    ),
    u = T.useMemo(
      () =>
        a instanceof Array
          ? a
          : [(0, z.jsx)(T.Fragment, { children: a }, `elAdditonalButtons`)],
      [a],
    );
  return (
    x(() => s.map((e) => ({ a: e.GetCurrentImageOption(), b: e.language }))),
    (0, z.jsxs)(Y, {
      onDropFiles: l,
      elAdditonalButtons: u,
      elOverrideDragAndDropText: r,
      children: [
        (0, z.jsx)(T.Fragment, {
          children: (0, z.jsx)(`div`, {
            className: st,
            children: s.map((e) =>
              (0, z.jsx)(
                pt,
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
        (0, z.jsx)(ft, {
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
function ft(e) {
  let { imageUploader: t, fnOnUploadImageRequested: n } = e,
    [r] = x(() => [t.GetUploadImages()]),
    i = r.some((e) => e.status == `pending`),
    a = r.some(
      (e) =>
        e.status == `waiting` ||
        e.status == `uploading` ||
        e.status == `processing`,
    );
  return (0, z.jsxs)(`div`, {
    style: { display: `flex` },
    className: ct,
    children: [
      !!r.length &&
        (0, z.jsx)(h, {
          style: { margin: `8px` },
          onClick: n,
          disabled: !i,
          children: _(`#ImageUpload_Upload`),
        }),
      !!r.length &&
        (0, z.jsx)(h, {
          style: { margin: `8px` },
          onClick: t.ClearImages,
          disabled: a,
          children: _(`#ImageUpload_Clear`),
        }),
    ],
  });
}
var pt = ae(mt);
function mt(e) {
  let t = (t) => {
      if (t instanceof de) {
        t.ResetImage();
        let n = window,
          r = (0, z.jsx)(ce, {
            ownerWin: n,
            uploadFile: t,
            forceResolution: e.forceResolution,
            fileType: e.forceFileType || 3,
          });
        ne(r, n, `CropModal`, { strTitle: _(`#ImageUpload_CropModalTitle`) });
      } else
        console.log(
          `ImageUploadEmbeddedDialog trying to crop non image`,
          t.fileType,
          JSON.stringify(t.GetCurrentImageOption()),
        );
    },
    { asset: r, fnOnRemove: i, languageRealms: a } = e,
    s = r.ImageOptions?.map((e) => {
      let t = e?.fnGetLabelText(),
        n;
      (e.bEnforceDimensions && (t += ` - ${e.width}x${e.height}`),
        e.bDeprecated &&
          ((t += ` ${_(`#ImageUpload_Deprecated`)}`),
          (n = _(`#ImageUpload_Deprecated_ttip`))));
      let i;
      return (
        (r.BIsOriginalMinimumDimensions(e) && r.FileTypeMatchesImageTypes(e)) ||
          (i = ot),
        { label: t, data: e, strOptionClass: i, tooltip: n }
      );
    }).filter((e) => !e.data.bHiddenFromDropdown),
    c = {
      pending: _(`#ImageUpload_Pending`),
      waiting: _(`#ImageUpload_Waiting`),
      uploading: _(`#ImageUpload_Uploading`),
      processing: _(`#ImageUpload_Processing`),
      success: _(`#ImageUpload_SuccessCard`),
      failed: _(`#ImageUpload_Failed`),
    },
    l = r.BSupportsLanguages()
      ? $(ee.GetLanguageListForRealms(a ?? [n.k_ESteamRealmGlobal]))
      : null,
    u = r.IsValidAssetType(e.forceResolution, e.forceFileType),
    d = r.status == `pending`,
    p = c[r.status];
  r.status == `pending` &&
    (u.needsCrop
      ? (p = _(`#ImageUpload_NeedsCrop`))
      : u.error && (p = _(`#ImageUpload_Invalid`)));
  let h,
    g = r.GetCurrentImageOption();
  return (
    g && (h = s?.find((e) => e.data.sKey == g.sKey)?.data),
    (h ||= s?.[0]?.data),
    (0, z.jsxs)(`div`, {
      className: ut,
      children: [
        (0, z.jsx)(`div`, {
          className: lt,
          onClick: () => i(r),
          children: (0, z.jsx)(f, {}),
        }),
        (0, z.jsx)(ht, { asset: r }),
        l &&
          (0, z.jsx)(m, {
            strDropDownClassName: `ZsXFGEgobIY-`,
            rgOptions: l,
            selectedOption: r.language,
            onChange: (e) => (r.language = e.data),
            disabled: !d,
          }),
        s &&
          s?.length > 1 &&
          (0, z.jsx)(m, {
            label: r.GetImageOptionLabel(),
            rgOptions: s,
            selectedOption: h,
            onChange: (e) => r.SetCurrentImageOption(e.data),
            disabled: !d,
          }),
        d &&
          u.warnings?.map((e, t) =>
            (0, z.jsx)(
              `div`,
              { className: `hb0m5mPiE2A-`, children: e },
              `warning${t}`,
            ),
          ),
        d &&
          u.messages?.map((e, t) =>
            (0, z.jsx)(
              `div`,
              { className: `CGM5a4V3nBU-`, children: e },
              `message${t}`,
            ),
          ),
        (0, z.jsxs)(`div`, {
          className: o({ [oe]: !0, [X]: r.status == `failed` }),
          children: [
            p,
            ue(r.status) &&
              (0, z.jsx)(`div`, {
                className: `RPxGbDpMPvc-`,
                children: (0, z.jsx)(w, { size: `small` }),
              }),
          ],
        }),
        (0, z.jsx)(`div`, { className: X, children: r.message }),
        d &&
          u.error &&
          (0, z.jsx)(`div`, { className: `_4l0OY5qTFkk-`, children: u.error }),
        d &&
          u.needsCrop &&
          (0, z.jsx)(re, {
            onClick: () => t(r),
            children: _(`#ImageUpload_OpenEditor`),
          }),
      ],
    })
  );
}
function ht(e) {
  let { asset: t } = e;
  return t.BIsVideo()
    ? (0, z.jsxs)(`div`, {
        className: Z,
        onClick: (e) => v((0, z.jsx)(gt, { asset: t }), d(e)),
        children: [
          (0, z.jsxs)(`span`, {
            className: Q,
            children: [t.width, ` x `, t.height],
          }),
          (0, z.jsx)(`video`, {
            height: 120,
            controls: !1,
            autoPlay: !0,
            loop: !0,
            muted: !0,
            children: (0, z.jsx)(`source`, { src: t.dataUrl }),
          }),
        ],
      })
    : (0, z.jsx)(`div`, {
        className: Z,
        style: { backgroundImage: `url(${t.dataUrl})` },
        children: (0, z.jsxs)(`span`, {
          className: Q,
          children: [t.width, ` x `, t.height],
        }),
      });
}
function gt(e) {
  let { asset: t, closeModal: n } = e;
  return (0, z.jsx)(y, {
    bAlertDialog: !0,
    closeModal: n,
    bAllowFullSize: !0,
    children: (0, z.jsx)(`video`, {
      controls: !0,
      autoPlay: !0,
      loop: !0,
      muted: !0,
      children: (0, z.jsx)(`source`, { src: t.dataUrl }),
    }),
  });
}
function $(t) {
  let n = [],
    r = [];
  for (let n of t) {
    if (n == 25) continue;
    let t = _(`#Language_` + e(n));
    r.push({ label: t, data: n });
  }
  return (
    r.sort((e, t) => e.label.localeCompare(t.label)),
    r.forEach((e) => n.push({ label: e.label, data: e.data })),
    r
  );
}
export {
  W as a,
  et as c,
  K as i,
  Se as l,
  dt as n,
  Qe as o,
  q as r,
  G as s,
  $ as t,
  D as u,
};
