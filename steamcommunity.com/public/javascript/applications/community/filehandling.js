/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { Pt as t, T as n, at as r } from "./chunk~01cfc309bf.js";
import {
  $h as i,
  Hs as a,
  Ju as o,
  Kt as s,
  Lh as c,
  Ot as l,
  Wt as u,
  bu as d,
  cd as f,
  ma as p,
  ms as m,
  uh as h,
  vf as g,
} from "./main.js";
var _ = e(t(), 1),
  v = `_0hkFFtEKd8o-`,
  y = `_7oKujRBWBjo-`,
  b = `SfXKOOd0Sto-`,
  x = `KqhOexCat44-`,
  S = `GQmysqJfjG0-`,
  C = r(),
  w = Object.assign(ee, { Root: E, Track: A, Range: j, Handle: M });
function ee(e) {
  let { value: t, onValueChange: n, onValueSettled: r, min: i, ...a } = e,
    o = [t],
    s = (0, _.useCallback)((e) => n(e[0]), [n]),
    c = (0, _.useCallback)((e) => r?.(e[0]), [r]);
  return (0, C.jsxs)(E, {
    ...a,
    min: i,
    onValueChange: s,
    onValueSettled: c,
    value: o,
    children: [
      (0, C.jsx)(A, { children: (0, C.jsx)(j, { start: i, end: t }) }),
      (0, C.jsx)(M, {}),
    ],
  });
}
function te(e) {
  let { value: t } = e;
  return (0, C.jsxs)(E, {
    ...e,
    children: [
      (0, C.jsx)(A, { children: (0, C.jsx)(j, { start: t[0], end: t[1] }) }),
      (0, C.jsx)(M, {}),
      (0, C.jsx)(M, {}),
    ],
  });
}
var T = (0, _.createContext)(null);
function E(e) {
  let { children: t, color: n, ...r } = e,
    {
      min: i,
      max: a,
      onValueChange: o,
      value: c,
      step: l = 1,
      onValueSettled: d,
      ...f
    } = r,
    p = {
      min: i,
      max: a,
      step: l,
      value: c,
      onValueChange: o,
      onValueSettled: d,
    },
    m = s({ ...f, className: v }, u),
    h = (0, _.useRef)(null),
    g = (0, _.useRef)(null),
    [b] = (0, _.useState)(() => new Set()),
    [x, S] = (0, _.useState)(!1);
  return (0, C.jsx)(T.Provider, {
    value: { ...p, handles: b, bDragActive: x },
    children: (0, C.jsx)(`div`, {
      ...m,
      "data-accent-color": n,
      ref: h,
      onPointerDown: (e) => {
        if (h.current) {
          if ((e.target.setPointerCapture(e.pointerId), typeof c != `number`)) {
            let t = h.current.getBoundingClientRect(),
              n = N(D(h.current, t, e.clientX), [0, t.width], [i, a]);
            g.current = { activeValueIndex: k(c, n), bMoved: !1 };
          } else g.current = { activeValueIndex: 0, bMoved: !1 };
          S(!0);
        }
      },
      onPointerUp: (e) => {
        let t = e.target;
        t.hasPointerCapture(e.pointerId) &&
          (t.releasePointerCapture(e.pointerId),
          d && g.current?.bMoved && d(c),
          S(!1));
      },
      onPointerMove: (e) => {
        if (e.target.hasPointerCapture(e.pointerId) && h.current && g.current) {
          let t = h.current.getBoundingClientRect(),
            n = P({
              value: N(D(h.current, t, e.clientX), [0, t.width], [i, a]),
              min: i,
              max: a,
              step: l,
            }),
            r = [...c];
          ((r[g.current.activeValueIndex] = n),
            r.sort((e, t) => e - t),
            (g.current.activeValueIndex = r.indexOf(n)),
            (g.current.bMoved = !0),
            o(r));
        }
      },
      onClick: (e) => {
        if (!h.current || g.current?.bMoved) return;
        let t = h.current.getBoundingClientRect(),
          n = N(D(h.current, t, e.clientX), [0, t.width], [i, a]),
          r = P({ value: n, min: i, max: a, step: l }),
          s = k(c, n),
          u = [...c];
        ((u[s] = r), o(u), d && d(u));
      },
      children: (0, C.jsx)(`div`, { className: y, children: t }),
    }),
  });
}
function D(e, t, n) {
  return e.matches(`:dir(rtl)`) ? t.right - n : n - t.left;
}
function O(e, t, n) {
  let r = t > 0 ? e[t - 1] : -1 / 0,
    i = t < e.length - 1 ? e[t + 1] : 1 / 0;
  return Math.min(Math.max(n, r), i);
}
function k(e, t) {
  if (e.length <= 1) return e.length - 1;
  let n = 0,
    r = Math.abs(t - e[0]);
  for (let i = 1; i < e.length; i++) {
    let a = Math.abs(e[i] - t);
    a < r && ((n = i), (r = a));
  }
  return n;
}
function A(e) {
  let { render: t, ...n } = e;
  return l(t, (0, C.jsx)(`div`, { className: b }), n, void 0);
}
function j(e) {
  let { start: t, end: n, render: r } = e,
    a = (0, _.useContext)(T);
  i(a, `SliderRange must be used within a SliderRoot!`);
  let { min: o, max: s } = a,
    c = F(t, o, s),
    u = 100 - F(n, o, s);
  return l(
    r,
    (0, C.jsx)(`div`, {
      className: x,
      style: { "--pct-left": `${c}%`, "--pct-right": `${u}%` },
    }),
    {},
    void 0,
  );
}
function M(e) {
  let { render: t } = e,
    n = (0, _.useContext)(T);
  i(n, `SliderHandle must be used within a SliderRoot!`);
  let {
      min: r,
      max: a,
      handles: o,
      value: s,
      step: c = 1,
      onValueChange: u,
      onValueSettled: d,
    } = n,
    [f, p] = (0, _.useState)(null),
    [m, h] = (0, _.useState)(-1);
  (0, _.useEffect)(
    () => (f ? (o.add(f), h(o.size - 1), () => o.delete(f)) : () => {}),
    [f, o],
  );
  let g = m > -1,
    v = { "--handle-pct": `${F(g ? s[m] : r, r, a)}%` },
    y = (e) => {
      switch (e.key) {
        case `ArrowRight`:
        case `ArrowUp`:
        case `ArrowLeft`:
        case `ArrowDown`: {
          let t = `ArrowRight`;
          e.currentTarget.matches(`:dir(rtl)`) && (t = `ArrowLeft`);
          let n = e.key === t || e.key === `ArrowUp`,
            i = c * (n ? 1 : -1),
            o = P({ value: s[m] + i, min: r, max: a, step: c }),
            l = [...s];
          ((l[m] = O(s, m, o)),
            u(l),
            d && d(l),
            e.preventDefault(),
            e.stopPropagation());
          break;
        }
        case `PageUp`:
        case `PageDown`: {
          let t = e.key === `PageUp`,
            n = Math.round((a - r) / 10) * (t ? 1 : -1),
            i = P({ value: s[m] + n, min: r, max: a, step: c }),
            o = [...s];
          ((o[m] = O(s, m, i)),
            u(o),
            d && d(o),
            e.preventDefault(),
            e.stopPropagation());
          break;
        }
      }
    };
  g || (v.display = `none`);
  let b = {
    ref: p,
    role: `slider`,
    "aria-valuenow": s[m],
    "aria-valuemin": r,
    "aria-valuemax": a,
    tabIndex: 0,
    onKeyDown: y,
  };
  return l(t, (0, C.jsx)(`span`, { className: S, style: v }), b, {
    value: s[m],
    bDragActive: n.bDragActive,
  });
}
function N(e, t, n) {
  if (t[0] === t[1] || n[0] === n[1]) return n[0];
  let r = ((n[1] - n[0]) / (t[1] - t[0])) * (e - t[0]) + n[0];
  return h(r, n[0], n[1]);
}
function P(e) {
  let { value: t, min: n, max: r, step: i } = e,
    a = Math.round((t - n) / i) / (1 / i);
  return h(a + n, n, r);
}
function F(e, t, n) {
  return ((e - t) / (n - t)) * 100;
}
var I = (e) => e != null;
function L(e, t) {
  let [n, r] = _.useState(() => window.localStorage.getItem(e) ?? void 0),
    i = _.useRef(e),
    a = _.useCallback(
      (t) => {
        let n = I(t) ? String(t) : void 0;
        (n === void 0
          ? window.localStorage.removeItem(e)
          : window.localStorage.setItem(e, n),
          r(n),
          R.Get().GetLocalStoreChangeCallback(e).Dispatch(n));
      },
      [e, r],
    );
  _.useEffect(() => {
    e != i.current &&
      (r(window.localStorage.getItem(e) ?? void 0), (i.current = e));
  }, [e]);
  let o = e == i.current ? n : window.localStorage.getItem(e),
    s = t;
  return (
    I(o) &&
      (I(t)
        ? typeof t == `boolean`
          ? (s = t.constructor(o !== `false`))
          : t != null && t != null && (s = t.constructor(o))
        : (s = o)),
    f(R.Get().GetLocalStoreChangeCallback(e), r),
    [s, a]
  );
}
var R = class e {
  m_mapChangeCallback = new Map();
  GetLocalStoreChangeCallback(e) {
    return (
      this.m_mapChangeCallback.has(e) ||
        this.m_mapChangeCallback.set(e, new c()),
      this.m_mapChangeCallback.get(e)
    );
  }
  static s_Singleton;
  static Get() {
    return ((e.s_Singleton ||= new e()), e.s_Singleton);
  }
};
function ne([e, t, n]) {
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
function re([e, t, n]) {
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
function ie(e) {
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
function ae(e) {
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
function oe(e) {
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
function se(e) {
  let t = ne([e.r / 255, e.g / 255, e.b / 255]);
  return { h: t[0], s: t[1], v: t[2], a: e.a };
}
function ce(e) {
  let t = re([e.h, e.s, e.v]);
  return { r: t[0] * 255, g: t[1] * 255, b: t[2] * 255, a: e.a };
}
var z = [`hex`, `rgb`, `hsl`];
function B(e) {
  return Math.round(e * 100) / 100;
}
function V(e) {
  let { r: t, g: n, b: r, a: i } = ce(e);
  return { r: Math.round(t), g: Math.round(n), b: Math.round(r), a: i };
}
function H(e, t) {
  let { r: n, g: r, b: i, a } = e,
    o = a >= 1;
  switch (t) {
    case `hex`:
      return ae(e);
    case `rgb`:
      return o ? `rgb(${n}, ${r}, ${i})` : `rgba(${n}, ${r}, ${i}, ${B(a)})`;
    case `hsl`: {
      let { h: t, s: n, l: r } = oe(e),
        i = `${Math.round(t)}, ${Math.round(n * 100)}%, ${Math.round(r * 100)}%`;
      return o ? `hsl(${i})` : `hsla(${i}, ${B(a)})`;
    }
  }
}
function U(e) {
  return `rgba(${e.r}, ${e.g}, ${e.b}, ${B(e.a)})`;
}
function le(e) {
  let t = /^#?([0-9a-f]{3,4})$/i.exec(e)?.[1],
    n = ie(t ? t.replace(/./g, `$&$&`) : e);
  return n && { ...n, a: B(n.a) };
}
function ue(e) {
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
      r: h(Math.round(parseFloat(n)), 0, 255),
      g: h(Math.round(parseFloat(r)), 0, 255),
      b: h(Math.round(parseFloat(i)), 0, 255),
      a: h(s, 0, 1),
    }
  );
}
var W;
function de(e) {
  if (typeof CSS > `u` || !CSS.supports(`color`, e)) return;
  if (W === void 0) {
    let e = document.createElement(`canvas`);
    ((e.width = e.height = 1),
      (W = e.getContext(`2d`, { willReadFrequently: !0 })));
  }
  let t = W;
  if (!t) return;
  (t.clearRect(0, 0, 1, 1),
    (t.fillStyle = `#000000`),
    (t.fillStyle = e),
    t.fillRect(0, 0, 1, 1));
  let [n, r, i, a] = t.getImageData(0, 0, 1, 1).data;
  return { r: n, g: r, b: i, a: B(a / 255) };
}
function G(e) {
  let t = e?.trim();
  if (t) return le(t) ?? ue(t) ?? de(t);
}
function fe(e) {
  let t = G(e);
  return t ? H({ ...t, a: 1 }, `hex`) : void 0;
}
var pe = `FcfcNn7MYQM-`,
  K = `mBPBMKMRyFc-`,
  me = `Wi9Z0cIQBJQ-`,
  he = `CG-aPa5ETcg-`,
  ge = `XqWa8m4TS-o-`,
  _e = `CT-fGhlJtb8-`,
  ve = `_-1iQ2DUgeIw-`,
  ye = `_6empc5TVW6c-`,
  be = `X3PwdzXulJQ-`,
  xe = `_362FAsYdx9w-`,
  Se = `f8RIg1qa2ts-`,
  Ce = `IzorRe2k8io-`,
  we = `qWqNnw1hGLY-`,
  Te = `xVJaIlx-dnY-`,
  Ee = `GOiXAHGmWGg-`,
  De = `CJ0nwSBwrpE-`,
  q = `pS4NM2hdvRk-`,
  Oe = `VSND6o6qGDA-`,
  ke =
    `#000000.#1b1b1b.#333333.#4d4d4d.#666666.#808080.#999999.#b3b3b3.#d9d9d9.#ffffff.#e53935.#fb8c00.#fdd835.#7cb342.#43a047.#00897b.#00acc1.#1e88e5.#8e24aa.#d81b60.#ef9a9a.#ffcc80.#fff59d.#c5e1a5.#a5d6a7.#80cbc4.#80deea.#90caf9.#ce93d8.#f48fb1.#b71c1c.#e65100.#f57f17.#33691e.#1b5e20.#004d40.#006064.#0d47a1.#4a148c.#880e4f`.split(
      `.`,
    ),
  Ae = `rgba(255, 255, 255, 1)`,
  je = `SharedColorPicker_Format`,
  J = `ColorPickerSampling`,
  Me = 0.01,
  Ne = 0.1;
function Pe(e) {
  let {
      color: t,
      onChange: n,
      strTitle: r,
      disableAlpha: i,
      onSubmit: a,
      children: o,
    } = e,
    [s, c] = (0, _.useState)(() => Ie(t, i)),
    l = (0, _.useRef)(void 0);
  (0, _.useEffect)(() => {
    let e = G(t);
    !e || (l.current && Fe(e, l.current, i)) || c((e) => Y(t, e.h, i) ?? e);
  }, [t, i]);
  let u = (0, _.useCallback)(
      (e) => {
        let t = i ? { ...e, a: 1 } : e;
        c(t);
        let r = V(t);
        ((l.current = r), n(U(r)));
      },
      [i, n],
    ),
    f = V(s),
    p = H({ ...f, a: 1 }, `hex`),
    m = U(f);
  return (0, C.jsxs)(`div`, {
    className: d(pe, `noOpinionatedGlobalStyles`),
    style: {
      "--colorpicker-hue": `hsl( ${s.h}deg 100% 50% )`,
      "--colorpicker-opaque": p,
      "--colorpicker-current": m,
    },
    children: [
      !!r && (0, C.jsx)(`div`, { className: `GEaX-EfeXNg-`, children: r }),
      (0, C.jsx)(Re, { hsva: s, fnSetColor: u }),
      (0, C.jsx)(Z, {
        className: _e,
        strLabel: g.Localize(`#ColorPicker_Hue`),
        nMax: 360,
        nValue: Math.round(s.h),
        strValueText: `${Math.round(s.h)}°`,
        fnSetValue: (e) => u({ ...s, h: e }),
      }),
      !i &&
        (0, C.jsx)(Z, {
          className: `xV4lUfTUFc4-`,
          strLabel: g.Localize(`#ColorPicker_Opacity`),
          nMax: 100,
          nValue: Math.round(s.a * 100),
          strValueText: `${Math.round(s.a * 100)}%`,
          fnSetValue: (e) => u({ ...s, a: e / 100 }),
        }),
      (0, C.jsx)(ze, { hsva: s, disableAlpha: i, fnSetColor: u, onSubmit: a }),
      (0, C.jsx)(Ve, {
        strCurrentHex: p,
        bOpaque: f.a >= 1,
        fnPick: (e) => {
          let t = Y(e, s.h, i);
          t && u(t);
        },
      }),
      o,
    ],
  });
}
function Fe(e, t, n) {
  return (
    e.r === t.r &&
    e.g === t.g &&
    e.b === t.b &&
    (n || Math.abs(e.a - t.a) < 0.01)
  );
}
function Ie(e, t) {
  return Y(e, 0, t) ?? Y(Ae, 0, t);
}
function Y(e, t, n) {
  let r = G(e);
  if (!r) return;
  let i = se(n ? { ...r, a: 1 } : r);
  return i.s === 0 || i.v === 0 ? { ...i, h: t } : i;
}
function Le(e) {
  let t = (t) => {
    let n = t.currentTarget.getBoundingClientRect(),
      r = n.width ? (t.clientX - n.left) / n.width : 0,
      i = n.height ? (t.clientY - n.top) / n.height : 0;
    e(h(r, 0, 1), h(i, 0, 1));
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
function X(e, t, n) {
  let r = e.shiftKey ? Ne : Me;
  if (e.key === t) return r;
  if (e.key === n) return -r;
}
function Re(e) {
  let { hsva: t, fnSetColor: n } = e,
    r = Le((e, r) => n({ ...t, s: e, v: 1 - r }));
  return (0, C.jsx)(`div`, {
    className: me,
    role: `slider`,
    tabIndex: 0,
    "aria-label": g.Localize(`#ColorPicker_SaturationBrightness`),
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    "aria-valuenow": Math.round(t.v * 100),
    "aria-valuetext": `${Math.round(t.s * 100)}%, ${Math.round(t.v * 100)}%`,
    onKeyDown: (e) => {
      let r = X(e, `ArrowRight`, `ArrowLeft`),
        i = X(e, `ArrowUp`, `ArrowDown`);
      (r !== void 0 || i !== void 0) &&
        (e.preventDefault(),
        n({ ...t, s: h(t.s + (r ?? 0), 0, 1), v: h(t.v + (i ?? 0), 0, 1) }));
    },
    ...r,
    children: (0, C.jsx)(`div`, {
      className: K,
      style: { left: `${t.s * 100}%`, top: `${(1 - t.v) * 100}%` },
    }),
  });
}
function Z(e) {
  let {
    className: t,
    strLabel: n,
    nMax: r,
    nValue: i,
    strValueText: a,
    fnSetValue: o,
  } = e;
  return (0, C.jsx)(`div`, {
    className: he,
    children: (0, C.jsx)(w.Root, {
      min: 0,
      max: r,
      value: [i],
      onValueChange: (e) => o(e[0]),
      children: (0, C.jsx)(w.Track, {
        render: (0, C.jsx)(`div`, { className: d(ge, t) }),
        children: (0, C.jsx)(w.Handle, {
          render: (e) =>
            (0, C.jsx)(`span`, {
              ...e,
              className: K,
              style: { insetInlineStart: `${(i / r) * 100}%` },
              "aria-label": n,
              "aria-valuetext": a,
            }),
        }),
      }),
    }),
  });
}
function ze(e) {
  let { hsva: t, disableAlpha: n, fnSetColor: r, onSubmit: i } = e,
    [a, o] = L(je),
    s = z.find((e) => e === a) ?? `hex`,
    [c, l] = (0, _.useState)(void 0),
    u = H(V(t), s),
    f = c !== void 0 && c.trim() !== `` && !G(c),
    p = (e) => {
      l(e);
      let i = Y(e, t.h, n);
      i && r(i);
    },
    m = (e) => {
      (o(e), l(void 0));
    };
  return (0, C.jsxs)(`div`, {
    className: ve,
    children: [
      (0, C.jsxs)(`div`, {
        className: ye,
        children: [
          (0, C.jsx)(`div`, { className: be, "aria-hidden": !0 }),
          (0, C.jsx)(`input`, {
            className: d(xe, f && `_5Zk11eFAaLo-`),
            type: `text`,
            spellCheck: !1,
            autoComplete: `off`,
            "aria-label": g.Localize(`#ColorPicker_ColorValue`),
            "aria-invalid": f,
            value: c ?? u,
            onChange: (e) => p(e.currentTarget.value),
            onBlur: () => l(void 0),
            onKeyDown: (e) => {
              e.key === `Enter` && (e.preventDefault(), l(void 0), i?.());
            },
          }),
          (0, C.jsx)(Be, { hsva: t, disableAlpha: n, fnSetColor: r }),
        ],
      }),
      f &&
        (0, C.jsx)(`div`, {
          className: `tHsVe8Ptn-s-`,
          children: g.Localize(`#ColorPicker_InvalidColor`),
        }),
      (0, C.jsx)(`div`, {
        className: Ce,
        role: `radiogroup`,
        children: z.map((e) =>
          (0, C.jsx)(
            `button`,
            {
              type: `button`,
              role: `radio`,
              "aria-checked": e === s,
              className: d(we, e === s && `wBwV8sUsuTo-`),
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
function Be(e) {
  let { hsva: t, disableAlpha: n, fnSetColor: r } = e,
    [i, a] = (0, _.useState)(!1);
  (0, _.useEffect)(() => a(`EyeDropper` in window), []);
  let o = async () => {
    let e = document.documentElement;
    e.classList.add(J);
    try {
      let e = Y((await new window.EyeDropper().open()).sRGBHex, t.h, n);
      e && r({ ...e, a: t.a });
    } catch (e) {
      console.warn(g.Localize(`#Sale_EyeDropperFailed`), e);
    } finally {
      e.classList.remove(J);
    }
  };
  if (!i) return null;
  let s = g.Localize(`#Sale_BackgroundColorPicker`);
  return (0, C.jsx)(m, {
    toolTipContent: s,
    children: (0, C.jsx)(`button`, {
      type: `button`,
      className: Se,
      "aria-label": s,
      onClick: o,
      children: (0, C.jsx)(p, {}),
    }),
  });
}
function Ve(e) {
  let { strCurrentHex: t, bOpaque: n, fnPick: r } = e;
  return (0, C.jsx)(`div`, {
    className: Te,
    role: `group`,
    "aria-label": g.Localize(`#ColorPicker_Palette`),
    children: ke.map((e) => {
      let i = n && e === t;
      return (0, C.jsx)(
        `button`,
        {
          type: `button`,
          className: d(Ee, i && `wBwV8sUsuTo-`),
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
var Q = _.createContext(void 0);
function He(e) {
  let {
      color: t,
      onChange: n,
      onRequestClose: r,
      disableAlpha: i,
      strTitle: a,
      bLivePreview: o = !0,
      fnRestoreChanges: s,
    } = e,
    c = (0, _.useRef)(null),
    l = (0, _.useRef)(void 0),
    u = (0, _.useRef)(!1),
    f = (0, _.useRef)({
      color: t,
      onChange: n,
      fnRestoreChanges: s,
      bLivePreview: o,
    });
  f.current = { color: t, onChange: n, fnRestoreChanges: s, bLivePreview: o };
  let p = (0, _.useCallback)(
      (e) => {
        ((l.current = e), o && n(e));
      },
      [o, n],
    ),
    m = (0, _.useCallback)(() => {
      ((u.current = !0), !o && l.current !== void 0 && n(l.current), r());
    }, [o, n, r]);
  return (
    (0, _.useEffect)(
      () => () => {
        let e = f.current;
        if (!u.current && e.bLivePreview && l.current !== void 0)
          try {
            (e.onChange(e.color), e.fnRestoreChanges?.());
          } catch (e) {
            console.error(`Color picker: could not undo a previewed color`, e);
          }
      },
      [],
    ),
    (0, _.useEffect)(() => {
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
    (0, C.jsx)(`div`, {
      ref: c,
      children: (0, C.jsx)(Pe, {
        color: t,
        disableAlpha: i,
        strTitle: a ?? g.Localize(`#Button_Color`),
        onChange: p,
        onSubmit: m,
        children: (0, C.jsxs)(`div`, {
          className: De,
          children: [
            (0, C.jsx)(`button`, {
              type: `button`,
              className: d(q, Oe),
              onClick: m,
              children: g.Localize(`#Button_Save`),
            }),
            (0, C.jsx)(`button`, {
              type: `button`,
              className: q,
              onClick: r,
              children: g.Localize(`#Button_Cancel`),
            }),
          ],
        }),
      }),
    })
  );
}
function Ue(e, t, n) {
  let r = t.bLivePreview ?? !0,
    i = r ? n?.fnSnapshot() : void 0,
    o = null,
    s = !1,
    c = (0, C.jsx)(He, {
      color: t.color,
      disableAlpha: t.disableAlpha,
      strTitle: t.strTitle,
      onChange: t.onChange,
      bLivePreview: r,
      fnRestoreChanges: i,
      onRequestClose: () => {
        s || ((s = !0), o?.Hide(), t.onClose?.());
      },
    });
  o = (e instanceof HTMLElement, a(c, e, { bDisablePopTop: !0 }));
}
function We() {
  let e = (0, _.useContext)(Q);
  return { openColorPicker: (0, _.useCallback)((t, n) => Ue(t, n, e), [e]) };
}
var Ge = e(n());
function Ke(e, t) {
  let n = _.useRef(null),
    r = _.useCallback(
      (t) => {
        t.currentTarget.files.length > 0 &&
          (e(t.currentTarget.files), (t.currentTarget.value = ``));
      },
      [e],
    ),
    i = _.useCallback(() => n.current?.click(), []);
  return [
    Ge.createPortal(
      (0, C.jsx)(`form`, {
        onSubmit: $,
        style: { display: `none` },
        children: (0, C.jsx)(`input`, {
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
function qe(e) {
  let [t, n] = _.useState(!1);
  return [
    {
      onDragEnter: _.useCallback((e) => {
        ((e.dataTransfer.files && e.dataTransfer.files[0]) ||
          (e.dataTransfer.types && e.dataTransfer.types[0] == `Files`)) &&
          n(!0);
      }, []),
      onDragLeave: _.useCallback((e) => {
        o(e) && n(!1);
      }, []),
      onDragEnd: _.useCallback(() => n(!1), []),
      onDragOver: t ? $ : void 0,
      onDrop: _.useCallback(
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
function $(e) {
  e.preventDefault();
}
function Je(e) {
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
  Ue as a,
  L as c,
  Q as i,
  te as l,
  qe as n,
  We as o,
  Ke as r,
  fe as s,
  Je as t,
};
