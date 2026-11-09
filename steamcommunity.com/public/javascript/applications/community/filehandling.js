/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { E as t, Pt as n, ot as r } from "./libraries.js";
import { n as i } from "./slider.js";
import {
  Nh as a,
  Us as o,
  _f as s,
  ha as c,
  hs as l,
  qu as u,
  sd as d,
  sh as f,
  xu as p,
} from "./main.js";
var m = e(n()),
  h = (e) => e != null;
function g(e, t) {
  let [n, r] = m.useState(() => window.localStorage.getItem(e) ?? void 0),
    i = m.useRef(e),
    a = m.useCallback(
      (t) => {
        let n = h(t) ? String(t) : void 0;
        (n === void 0
          ? window.localStorage.removeItem(e)
          : window.localStorage.setItem(e, n),
          r(n),
          _.Get().GetLocalStoreChangeCallback(e).Dispatch(n));
      },
      [e, r],
    );
  m.useEffect(() => {
    e != i.current &&
      (r(window.localStorage.getItem(e) ?? void 0), (i.current = e));
  }, [e]);
  let o = e == i.current ? n : window.localStorage.getItem(e),
    s = t;
  return (
    h(o) &&
      (h(t)
        ? typeof t == `boolean`
          ? (s = t.constructor(o !== `false`))
          : t != null && t != null && (s = t.constructor(o))
        : (s = o)),
    d(_.Get().GetLocalStoreChangeCallback(e), r),
    [s, a]
  );
}
var _ = class e {
  m_mapChangeCallback = new Map();
  GetLocalStoreChangeCallback(e) {
    return (
      this.m_mapChangeCallback.has(e) ||
        this.m_mapChangeCallback.set(e, new a()),
      this.m_mapChangeCallback.get(e)
    );
  }
  static s_Singleton;
  static Get() {
    return ((e.s_Singleton ||= new e()), e.s_Singleton);
  }
};
function v([e, t, n]) {
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
function y([e, t, n]) {
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
function b(e) {
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
function ee(e) {
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
function te(e) {
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
function ne(e) {
  let t = v([e.r / 255, e.g / 255, e.b / 255]);
  return { h: t[0], s: t[1], v: t[2], a: e.a };
}
function re(e) {
  let t = y([e.h, e.s, e.v]);
  return { r: t[0] * 255, g: t[1] * 255, b: t[2] * 255, a: e.a };
}
var x = [`hex`, `rgb`, `hsl`];
function S(e) {
  return Math.round(e * 100) / 100;
}
function C(e) {
  let { r: t, g: n, b: r, a: i } = re(e);
  return { r: Math.round(t), g: Math.round(n), b: Math.round(r), a: i };
}
function w(e, t) {
  let { r: n, g: r, b: i, a } = e,
    o = a >= 1;
  switch (t) {
    case `hex`:
      return ee(e);
    case `rgb`:
      return o ? `rgb(${n}, ${r}, ${i})` : `rgba(${n}, ${r}, ${i}, ${S(a)})`;
    case `hsl`: {
      let { h: t, s: n, l: r } = te(e),
        i = `${Math.round(t)}, ${Math.round(n * 100)}%, ${Math.round(r * 100)}%`;
      return o ? `hsl(${i})` : `hsla(${i}, ${S(a)})`;
    }
  }
}
function T(e) {
  return `rgba(${e.r}, ${e.g}, ${e.b}, ${S(e.a)})`;
}
function ie(e) {
  let t = /^#?([0-9a-f]{3,4})$/i.exec(e)?.[1],
    n = b(t ? t.replace(/./g, `$&$&`) : e);
  return n && { ...n, a: S(n.a) };
}
function ae(e) {
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
      r: f(Math.round(parseFloat(n)), 0, 255),
      g: f(Math.round(parseFloat(r)), 0, 255),
      b: f(Math.round(parseFloat(i)), 0, 255),
      a: f(s, 0, 1),
    }
  );
}
var E;
function oe(e) {
  if (typeof CSS > `u` || !CSS.supports(`color`, e)) return;
  if (E === void 0) {
    let e = document.createElement(`canvas`);
    ((e.width = e.height = 1),
      (E = e.getContext(`2d`, { willReadFrequently: !0 })));
  }
  let t = E;
  if (!t) return;
  (t.clearRect(0, 0, 1, 1),
    (t.fillStyle = `#000000`),
    (t.fillStyle = e),
    t.fillRect(0, 0, 1, 1));
  let [n, r, i, a] = t.getImageData(0, 0, 1, 1).data;
  return { r: n, g: r, b: i, a: S(a / 255) };
}
function D(e) {
  let t = e?.trim();
  if (t) return ie(t) ?? ae(t) ?? oe(t);
}
function se(e) {
  let t = D(e);
  return t ? w({ ...t, a: 1 }, `hex`) : void 0;
}
var ce = `FcfcNn7MYQM-`,
  O = `mBPBMKMRyFc-`,
  k = `Wi9Z0cIQBJQ-`,
  A = `CG-aPa5ETcg-`,
  j = `XqWa8m4TS-o-`,
  M = `CT-fGhlJtb8-`,
  N = `_-1iQ2DUgeIw-`,
  P = `_6empc5TVW6c-`,
  F = `X3PwdzXulJQ-`,
  I = `_362FAsYdx9w-`,
  L = `f8RIg1qa2ts-`,
  R = `IzorRe2k8io-`,
  z = `qWqNnw1hGLY-`,
  B = `xVJaIlx-dnY-`,
  V = `GOiXAHGmWGg-`,
  H = `CJ0nwSBwrpE-`,
  U = `pS4NM2hdvRk-`,
  W = `VSND6o6qGDA-`,
  G = r(),
  le =
    `#000000.#1b1b1b.#333333.#4d4d4d.#666666.#808080.#999999.#b3b3b3.#d9d9d9.#ffffff.#e53935.#fb8c00.#fdd835.#7cb342.#43a047.#00897b.#00acc1.#1e88e5.#8e24aa.#d81b60.#ef9a9a.#ffcc80.#fff59d.#c5e1a5.#a5d6a7.#80cbc4.#80deea.#90caf9.#ce93d8.#f48fb1.#b71c1c.#e65100.#f57f17.#33691e.#1b5e20.#004d40.#006064.#0d47a1.#4a148c.#880e4f`.split(
      `.`,
    ),
  ue = `rgba(255, 255, 255, 1)`,
  de = `SharedColorPicker_Format`,
  K = `ColorPickerSampling`,
  fe = 0.01,
  pe = 0.1;
function me(e) {
  let {
      color: t,
      onChange: n,
      strTitle: r,
      disableAlpha: i,
      onSubmit: a,
      children: o,
    } = e,
    [c, l] = (0, m.useState)(() => ge(t, i)),
    u = (0, m.useRef)(void 0);
  (0, m.useEffect)(() => {
    let e = D(t);
    !e || (u.current && he(e, u.current, i)) || l((e) => q(t, e.h, i) ?? e);
  }, [t, i]);
  let d = (0, m.useCallback)(
      (e) => {
        let t = i ? { ...e, a: 1 } : e;
        l(t);
        let r = C(t);
        ((u.current = r), n(T(r)));
      },
      [i, n],
    ),
    f = C(c),
    h = w({ ...f, a: 1 }, `hex`),
    g = T(f);
  return (0, G.jsxs)(`div`, {
    className: p(ce, `noOpinionatedGlobalStyles`),
    style: {
      "--colorpicker-hue": `hsl( ${c.h}deg 100% 50% )`,
      "--colorpicker-opaque": h,
      "--colorpicker-current": g,
    },
    children: [
      !!r && (0, G.jsx)(`div`, { className: `GEaX-EfeXNg-`, children: r }),
      (0, G.jsx)(ve, { hsva: c, fnSetColor: d }),
      (0, G.jsx)(Y, {
        className: M,
        strLabel: s.Localize(`#ColorPicker_Hue`),
        nMax: 360,
        nValue: Math.round(c.h),
        strValueText: `${Math.round(c.h)}°`,
        fnSetValue: (e) => d({ ...c, h: e }),
      }),
      !i &&
        (0, G.jsx)(Y, {
          className: `xV4lUfTUFc4-`,
          strLabel: s.Localize(`#ColorPicker_Opacity`),
          nMax: 100,
          nValue: Math.round(c.a * 100),
          strValueText: `${Math.round(c.a * 100)}%`,
          fnSetValue: (e) => d({ ...c, a: e / 100 }),
        }),
      (0, G.jsx)(ye, { hsva: c, disableAlpha: i, fnSetColor: d, onSubmit: a }),
      (0, G.jsx)(xe, {
        strCurrentHex: h,
        bOpaque: f.a >= 1,
        fnPick: (e) => {
          let t = q(e, c.h, i);
          t && d(t);
        },
      }),
      o,
    ],
  });
}
function he(e, t, n) {
  return (
    e.r === t.r &&
    e.g === t.g &&
    e.b === t.b &&
    (n || Math.abs(e.a - t.a) < 0.01)
  );
}
function ge(e, t) {
  return q(e, 0, t) ?? q(ue, 0, t);
}
function q(e, t, n) {
  let r = D(e);
  if (!r) return;
  let i = ne(n ? { ...r, a: 1 } : r);
  return i.s === 0 || i.v === 0 ? { ...i, h: t } : i;
}
function _e(e) {
  let t = (t) => {
    let n = t.currentTarget.getBoundingClientRect(),
      r = n.width ? (t.clientX - n.left) / n.width : 0,
      i = n.height ? (t.clientY - n.top) / n.height : 0;
    e(f(r, 0, 1), f(i, 0, 1));
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
function J(e, t, n) {
  let r = e.shiftKey ? pe : fe;
  if (e.key === t) return r;
  if (e.key === n) return -r;
}
function ve(e) {
  let { hsva: t, fnSetColor: n } = e,
    r = _e((e, r) => n({ ...t, s: e, v: 1 - r }));
  return (0, G.jsx)(`div`, {
    className: k,
    role: `slider`,
    tabIndex: 0,
    "aria-label": s.Localize(`#ColorPicker_SaturationBrightness`),
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    "aria-valuenow": Math.round(t.v * 100),
    "aria-valuetext": `${Math.round(t.s * 100)}%, ${Math.round(t.v * 100)}%`,
    onKeyDown: (e) => {
      let r = J(e, `ArrowRight`, `ArrowLeft`),
        i = J(e, `ArrowUp`, `ArrowDown`);
      (r !== void 0 || i !== void 0) &&
        (e.preventDefault(),
        n({ ...t, s: f(t.s + (r ?? 0), 0, 1), v: f(t.v + (i ?? 0), 0, 1) }));
    },
    ...r,
    children: (0, G.jsx)(`div`, {
      className: O,
      style: { left: `${t.s * 100}%`, top: `${(1 - t.v) * 100}%` },
    }),
  });
}
function Y(e) {
  let {
    className: t,
    strLabel: n,
    nMax: r,
    nValue: a,
    strValueText: o,
    fnSetValue: s,
  } = e;
  return (0, G.jsx)(`div`, {
    className: A,
    children: (0, G.jsx)(i.Root, {
      min: 0,
      max: r,
      value: [a],
      onValueChange: (e) => s(e[0]),
      children: (0, G.jsx)(i.Track, {
        render: (0, G.jsx)(`div`, { className: p(j, t) }),
        children: (0, G.jsx)(i.Handle, {
          render: (e) =>
            (0, G.jsx)(`span`, {
              ...e,
              className: O,
              style: { insetInlineStart: `${(a / r) * 100}%` },
              "aria-label": n,
              "aria-valuetext": o,
            }),
        }),
      }),
    }),
  });
}
function ye(e) {
  let { hsva: t, disableAlpha: n, fnSetColor: r, onSubmit: i } = e,
    [a, o] = g(de),
    c = x.find((e) => e === a) ?? `hex`,
    [l, u] = (0, m.useState)(void 0),
    d = w(C(t), c),
    f = l !== void 0 && l.trim() !== `` && !D(l),
    h = (e) => {
      u(e);
      let i = q(e, t.h, n);
      i && r(i);
    },
    _ = (e) => {
      (o(e), u(void 0));
    };
  return (0, G.jsxs)(`div`, {
    className: N,
    children: [
      (0, G.jsxs)(`div`, {
        className: P,
        children: [
          (0, G.jsx)(`div`, { className: F, "aria-hidden": !0 }),
          (0, G.jsx)(`input`, {
            className: p(I, f && `_5Zk11eFAaLo-`),
            type: `text`,
            spellCheck: !1,
            autoComplete: `off`,
            "aria-label": s.Localize(`#ColorPicker_ColorValue`),
            "aria-invalid": f,
            value: l ?? d,
            onChange: (e) => h(e.currentTarget.value),
            onBlur: () => u(void 0),
            onKeyDown: (e) => {
              e.key === `Enter` && (e.preventDefault(), u(void 0), i?.());
            },
          }),
          (0, G.jsx)(be, { hsva: t, disableAlpha: n, fnSetColor: r }),
        ],
      }),
      f &&
        (0, G.jsx)(`div`, {
          className: `tHsVe8Ptn-s-`,
          children: s.Localize(`#ColorPicker_InvalidColor`),
        }),
      (0, G.jsx)(`div`, {
        className: R,
        role: `radiogroup`,
        children: x.map((e) =>
          (0, G.jsx)(
            `button`,
            {
              type: `button`,
              role: `radio`,
              "aria-checked": e === c,
              className: p(z, e === c && `wBwV8sUsuTo-`),
              onClick: () => _(e),
              children: e.toUpperCase(),
            },
            e,
          ),
        ),
      }),
    ],
  });
}
function be(e) {
  let { hsva: t, disableAlpha: n, fnSetColor: r } = e,
    [i, a] = (0, m.useState)(!1);
  (0, m.useEffect)(() => a(`EyeDropper` in window), []);
  let o = async () => {
    let e = document.documentElement;
    e.classList.add(K);
    try {
      let e = q((await new window.EyeDropper().open()).sRGBHex, t.h, n);
      e && r({ ...e, a: t.a });
    } catch (e) {
      console.warn(s.Localize(`#Sale_EyeDropperFailed`), e);
    } finally {
      e.classList.remove(K);
    }
  };
  if (!i) return null;
  let u = s.Localize(`#Sale_BackgroundColorPicker`);
  return (0, G.jsx)(l, {
    toolTipContent: u,
    children: (0, G.jsx)(`button`, {
      type: `button`,
      className: L,
      "aria-label": u,
      onClick: o,
      children: (0, G.jsx)(c, {}),
    }),
  });
}
function xe(e) {
  let { strCurrentHex: t, bOpaque: n, fnPick: r } = e;
  return (0, G.jsx)(`div`, {
    className: B,
    role: `group`,
    "aria-label": s.Localize(`#ColorPicker_Palette`),
    children: le.map((e) => {
      let i = n && e === t;
      return (0, G.jsx)(
        `button`,
        {
          type: `button`,
          className: p(V, i && `wBwV8sUsuTo-`),
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
var X = m.createContext(void 0);
function Se(e) {
  let {
      color: t,
      onChange: n,
      onRequestClose: r,
      disableAlpha: i,
      strTitle: a,
      bLivePreview: o = !0,
      fnRestoreChanges: c,
    } = e,
    l = (0, m.useRef)(null),
    u = (0, m.useRef)(void 0),
    d = (0, m.useRef)(!1),
    f = (0, m.useRef)({
      color: t,
      onChange: n,
      fnRestoreChanges: c,
      bLivePreview: o,
    });
  f.current = { color: t, onChange: n, fnRestoreChanges: c, bLivePreview: o };
  let h = (0, m.useCallback)(
      (e) => {
        ((u.current = e), o && n(e));
      },
      [o, n],
    ),
    g = (0, m.useCallback)(() => {
      ((d.current = !0), !o && u.current !== void 0 && n(u.current), r());
    }, [o, n, r]);
  return (
    (0, m.useEffect)(
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
    (0, m.useEffect)(() => {
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
    (0, G.jsx)(`div`, {
      ref: l,
      children: (0, G.jsx)(me, {
        color: t,
        disableAlpha: i,
        strTitle: a ?? s.Localize(`#Button_Color`),
        onChange: h,
        onSubmit: g,
        children: (0, G.jsxs)(`div`, {
          className: H,
          children: [
            (0, G.jsx)(`button`, {
              type: `button`,
              className: p(U, W),
              onClick: g,
              children: s.Localize(`#Button_Save`),
            }),
            (0, G.jsx)(`button`, {
              type: `button`,
              className: U,
              onClick: r,
              children: s.Localize(`#Button_Cancel`),
            }),
          ],
        }),
      }),
    })
  );
}
function Z(e, t, n) {
  let r = t.bLivePreview ?? !0,
    i = r ? n?.fnSnapshot() : void 0,
    a = null,
    s = !1,
    c = (0, G.jsx)(Se, {
      color: t.color,
      disableAlpha: t.disableAlpha,
      strTitle: t.strTitle,
      onChange: t.onChange,
      bLivePreview: r,
      fnRestoreChanges: i,
      onRequestClose: () => {
        s || ((s = !0), a?.Hide(), t.onClose?.());
      },
    });
  a = (e instanceof HTMLElement, o(c, e, { bDisablePopTop: !0 }));
}
function Ce() {
  let e = (0, m.useContext)(X);
  return { openColorPicker: (0, m.useCallback)((t, n) => Z(t, n, e), [e]) };
}
var we = e(t());
function Q(e, t) {
  let n = m.useRef(void 0),
    r = m.useCallback(
      (t) => {
        t.currentTarget.files.length > 0 &&
          (e(t.currentTarget.files), (t.currentTarget.value = ``));
      },
      [e],
    ),
    i = m.useCallback(() => n.current.click(), []);
  return [
    we.createPortal(
      (0, G.jsx)(`form`, {
        onSubmit: $,
        style: { display: `none` },
        children: (0, G.jsx)(`input`, {
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
function Te(e) {
  let [t, n] = m.useState(!1);
  return [
    {
      onDragEnter: m.useCallback((e) => {
        ((e.dataTransfer.files && e.dataTransfer.files[0]) ||
          (e.dataTransfer.types && e.dataTransfer.types[0] == `Files`)) &&
          n(!0);
      }, []),
      onDragLeave: m.useCallback((e) => {
        u(e) && n(!1);
      }, []),
      onDragEnd: m.useCallback(() => n(!1), []),
      onDragOver: t ? $ : void 0,
      onDrop: m.useCallback(
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
async function Ee(e, t = 1e3) {
  return await new Promise((n, r) => {
    let i = new Image();
    ((i.src = e),
      (i.onload = () => n(`success`)),
      (i.onerror = () => n(`error`)),
      t > 0 && window.setTimeout(() => n(`timeout`), t));
  });
}
function $(e) {
  e.preventDefault();
}
function De(e) {
  switch (e.type) {
    case `image/jpeg`:
      return `jpg`;
    case `image/png`:
      return `png`;
    case `image/gif`:
      return `gif`;
    default:
      let t = e.name.match(/(?<=\.)[^.]+$/);
      return t ? t[0] : void 0;
  }
}
export {
  X as a,
  se as c,
  Q as i,
  g as l,
  Ee as n,
  Z as o,
  Te as r,
  Ce as s,
  De as t,
};
