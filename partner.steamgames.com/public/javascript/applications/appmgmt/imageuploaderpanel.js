/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  A as e,
  Ct as t,
  _t as n,
  ct as r,
  gt as i,
  kt as a,
  on as o,
} from "./mobx.esm.js";
import { Lt as s, P as c, Q as l, ut as u } from "./src.js";
import {
  In as d,
  Ji as f,
  La as p,
  U as m,
  Vt as h,
  c as g,
  ea as ee,
  f as te,
  fn as ne,
  jt as _,
  nn as v,
  oa as y,
  p as b,
  s as re,
} from "./dialogs.js";
import { C as ie, E as ae, w as x } from "./react-router.js";
import { n as S } from "./slider.js";
import "./modals.js";
import { t as C } from "./axiosutils.js";
import { t as w } from "./throbber.js";
import { t as oe } from "./editorlocalizationstore.js";
import { m as se } from "./partnereventshared.module.js";
import "./steammessages_community_pb.js";
import {
  f as ce,
  i as le,
  l as ue,
  o as de,
  r as fe,
} from "./genericimageupload.js";
import "./shared_common.module.js";
var T = o(a()),
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
        this.m_mapChangeCallback.set(e, new s()),
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
  let n =
    /^rgba?\(\s*([\d.]+)[\s,]+([\d.]+)[\s,]+([\d.]+)\s*(?:[,/]\s*([\d.]+)(%?)\s*)?\)$/i.exec(
      e,
    );
  if (!n) return;
  let [, r, i, a, o, s] = n,
    c = o === void 0 ? 1 : parseFloat(o);
  return (
    s && (c /= 100),
    {
      r: t(Math.round(parseFloat(r)), 0, 255),
      g: t(Math.round(parseFloat(i)), 0, 255),
      b: t(Math.round(parseFloat(a)), 0, 255),
      a: t(c, 0, 1),
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
  z = n(),
  ze =
    `#000000.#1b1b1b.#333333.#4d4d4d.#666666.#808080.#999999.#b3b3b3.#d9d9d9.#ffffff.#e53935.#fb8c00.#fdd835.#7cb342.#43a047.#00897b.#00acc1.#1e88e5.#8e24aa.#d81b60.#ef9a9a.#ffcc80.#fff59d.#c5e1a5.#a5d6a7.#80cbc4.#80deea.#90caf9.#ce93d8.#f48fb1.#b71c1c.#e65100.#f57f17.#33691e.#1b5e20.#004d40.#006064.#0d47a1.#4a148c.#880e4f`.split(
      `.`,
    ),
  Be = `rgba(255, 255, 255, 1)`,
  Ve = `SharedColorPicker_Format`,
  B = `ColorPickerSampling`,
  He = 0.01,
  Ue = 0.1;
function We(t) {
  let {
      color: n,
      onChange: r,
      strTitle: i,
      disableAlpha: a,
      onSubmit: o,
      children: s,
    } = t,
    [c, l] = (0, T.useState)(() => Ke(n, a)),
    u = (0, T.useRef)(void 0);
  (0, T.useEffect)(() => {
    let e = I(n);
    !e || (u.current && Ge(e, u.current, a)) || l((e) => V(n, e.h, a) ?? e);
  }, [n, a]);
  let d = (0, T.useCallback)(
      (e) => {
        let t = a ? { ...e, a: 1 } : e;
        l(t);
        let n = j(t);
        ((u.current = n), r(N(n)));
      },
      [a, r],
    ),
    f = j(c),
    m = M({ ...f, a: 1 }, `hex`),
    h = N(f);
  return (0, z.jsxs)(`div`, {
    className: e(Ce, `noOpinionatedGlobalStyles`),
    style: {
      "--colorpicker-hue": `hsl( ${c.h}deg 100% 50% )`,
      "--colorpicker-opaque": m,
      "--colorpicker-current": h,
    },
    children: [
      !!i && (0, z.jsx)(`div`, { className: `GEaX-EfeXNg-`, children: i }),
      (0, z.jsx)(Je, { hsva: c, fnSetColor: d }),
      (0, z.jsx)(U, {
        className: De,
        strLabel: p.Localize(`#ColorPicker_Hue`),
        nMax: 360,
        nValue: Math.round(c.h),
        strValueText: `${Math.round(c.h)}°`,
        fnSetValue: (e) => d({ ...c, h: e }),
      }),
      !a &&
        (0, z.jsx)(U, {
          className: `xV4lUfTUFc4-`,
          strLabel: p.Localize(`#ColorPicker_Opacity`),
          nMax: 100,
          nValue: Math.round(c.a * 100),
          strValueText: `${Math.round(c.a * 100)}%`,
          fnSetValue: (e) => d({ ...c, a: e / 100 }),
        }),
      (0, z.jsx)(Ye, { hsva: c, disableAlpha: a, fnSetColor: d, onSubmit: o }),
      (0, z.jsx)(Ze, {
        strCurrentHex: m,
        bOpaque: f.a >= 1,
        fnPick: (e) => {
          let t = V(e, c.h, a);
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
  let n = (n) => {
    let r = n.currentTarget.getBoundingClientRect(),
      i = r.width ? (n.clientX - r.left) / r.width : 0,
      a = r.height ? (n.clientY - r.top) / r.height : 0;
    e(t(i, 0, 1), t(a, 0, 1));
  };
  return {
    onPointerDown: (e) => {
      e.button === 0 &&
        (e.preventDefault(),
        e.currentTarget.setPointerCapture(e.pointerId),
        e.currentTarget.focus(),
        n(e));
    },
    onPointerMove: (e) => {
      e.currentTarget.hasPointerCapture(e.pointerId) && n(e);
    },
  };
}
function H(e, t, n) {
  let r = e.shiftKey ? Ue : He;
  if (e.key === t) return r;
  if (e.key === n) return -r;
}
function Je(e) {
  let { hsva: n, fnSetColor: r } = e,
    i = qe((e, t) => r({ ...n, s: e, v: 1 - t }));
  return (0, z.jsx)(`div`, {
    className: we,
    role: `slider`,
    tabIndex: 0,
    "aria-label": p.Localize(`#ColorPicker_SaturationBrightness`),
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    "aria-valuenow": Math.round(n.v * 100),
    "aria-valuetext": `${Math.round(n.s * 100)}%, ${Math.round(n.v * 100)}%`,
    onKeyDown: (e) => {
      let i = H(e, `ArrowRight`, `ArrowLeft`),
        a = H(e, `ArrowUp`, `ArrowDown`);
      (i !== void 0 || a !== void 0) &&
        (e.preventDefault(),
        r({ ...n, s: t(n.s + (i ?? 0), 0, 1), v: t(n.v + (a ?? 0), 0, 1) }));
    },
    ...i,
    children: (0, z.jsx)(`div`, {
      className: L,
      style: { left: `${n.s * 100}%`, top: `${(1 - n.v) * 100}%` },
    }),
  });
}
function U(t) {
  let {
    className: n,
    strLabel: r,
    nMax: i,
    nValue: a,
    strValueText: o,
    fnSetValue: s,
  } = t;
  return (0, z.jsx)(`div`, {
    className: Te,
    children: (0, z.jsx)(S.Root, {
      min: 0,
      max: i,
      value: [a],
      onValueChange: (e) => s(e[0]),
      children: (0, z.jsx)(S.Track, {
        render: (0, z.jsx)(`div`, { className: e(Ee, n) }),
        children: (0, z.jsx)(S.Handle, {
          render: (e) =>
            (0, z.jsx)(`span`, {
              ...e,
              className: L,
              style: { insetInlineStart: `${(a / i) * 100}%` },
              "aria-label": r,
              "aria-valuetext": o,
            }),
        }),
      }),
    }),
  });
}
function Ye(t) {
  let { hsva: n, disableAlpha: r, fnSetColor: i, onSubmit: a } = t,
    [o, s] = D(Ve),
    c = k.find((e) => e === o) ?? `hex`,
    [l, u] = (0, T.useState)(void 0),
    d = M(j(n), c),
    f = l !== void 0 && l.trim() !== `` && !I(l),
    m = (e) => {
      u(e);
      let t = V(e, n.h, r);
      t && i(t);
    },
    h = (e) => {
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
            className: e(je, f && `_5Zk11eFAaLo-`),
            type: `text`,
            spellCheck: !1,
            autoComplete: `off`,
            "aria-label": p.Localize(`#ColorPicker_ColorValue`),
            "aria-invalid": f,
            value: l ?? d,
            onChange: (e) => m(e.currentTarget.value),
            onBlur: () => u(void 0),
            onKeyDown: (e) => {
              e.key === `Enter` && (e.preventDefault(), u(void 0), a?.());
            },
          }),
          (0, z.jsx)(Xe, { hsva: n, disableAlpha: r, fnSetColor: i }),
        ],
      }),
      f &&
        (0, z.jsx)(`div`, {
          className: `tHsVe8Ptn-s-`,
          children: p.Localize(`#ColorPicker_InvalidColor`),
        }),
      (0, z.jsx)(`div`, {
        className: Ne,
        role: `radiogroup`,
        children: k.map((t) =>
          (0, z.jsx)(
            `button`,
            {
              type: `button`,
              role: `radio`,
              "aria-checked": t === c,
              className: e(Pe, t === c && `wBwV8sUsuTo-`),
              onClick: () => h(t),
              children: t.toUpperCase(),
            },
            t,
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
      console.warn(p.Localize(`#Sale_EyeDropperFailed`), e);
    } finally {
      e.classList.remove(B);
    }
  };
  if (!i) return null;
  let s = p.Localize(`#Sale_BackgroundColorPicker`);
  return (0, z.jsx)(ne, {
    toolTipContent: s,
    children: (0, z.jsx)(`button`, {
      type: `button`,
      className: Me,
      "aria-label": s,
      onClick: o,
      children: (0, z.jsx)(m, {}),
    }),
  });
}
function Ze(t) {
  let { strCurrentHex: n, bOpaque: r, fnPick: i } = t;
  return (0, z.jsx)(`div`, {
    className: Fe,
    role: `group`,
    "aria-label": p.Localize(`#ColorPicker_Palette`),
    children: ze.map((t) => {
      let a = r && t === n;
      return (0, z.jsx)(
        `button`,
        {
          type: `button`,
          className: e(Ie, a && `wBwV8sUsuTo-`),
          style: { background: t },
          "aria-label": t,
          "aria-pressed": a,
          title: t,
          onClick: () => i(t),
        },
        t,
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
function $e(t) {
  let {
      color: n,
      onChange: r,
      onRequestClose: i,
      disableAlpha: a,
      strTitle: o,
      bLivePreview: s = !0,
      fnRestoreChanges: c,
    } = t,
    l = (0, T.useRef)(null),
    u = (0, T.useRef)(void 0),
    d = (0, T.useRef)(!1),
    f = (0, T.useRef)({
      color: n,
      onChange: r,
      fnRestoreChanges: c,
      bLivePreview: s,
    });
  f.current = { color: n, onChange: r, fnRestoreChanges: c, bLivePreview: s };
  let m = (0, T.useCallback)(
      (e) => {
        ((u.current = e), s && r(e));
      },
      [s, r],
    ),
    h = (0, T.useCallback)(() => {
      ((d.current = !0), !s && u.current !== void 0 && r(u.current), i());
    }, [s, r, i]);
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
          l.current && !l.current.contains(e.target) && i();
        },
        n = (e) => {
          e.key === `Escape` && (e.stopPropagation(), e.preventDefault(), i());
        };
      return (
        e.addEventListener(`pointerdown`, t, !0),
        e.addEventListener(`keydown`, n, !0),
        () => {
          (e.removeEventListener(`pointerdown`, t, !0),
            e.removeEventListener(`keydown`, n, !0));
        }
      );
    }, [i]),
    (0, z.jsx)(`div`, {
      ref: l,
      children: (0, z.jsx)(We, {
        color: n,
        disableAlpha: a,
        strTitle: o ?? p.Localize(`#Button_Color`),
        onChange: m,
        onSubmit: h,
        children: (0, z.jsxs)(`div`, {
          className: Le,
          children: [
            (0, z.jsx)(`button`, {
              type: `button`,
              className: e(R, Re),
              onClick: h,
              children: p.Localize(`#Button_Save`),
            }),
            (0, z.jsx)(`button`, {
              type: `button`,
              className: R,
              onClick: i,
              children: p.Localize(`#Button_Cancel`),
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
  a = (e instanceof HTMLElement, d(s, e, { bDisablePopTop: !0 }));
}
function et() {
  let e = (0, T.useContext)(W);
  return { openColorPicker: (0, T.useCallback)((t, n) => G(t, n, e), [e]) };
}
var tt = o(ae());
function K(e, t) {
  let n = T.useRef(void 0),
    r = T.useCallback(
      (t) => {
        t.currentTarget.files.length > 0 &&
          (e(t.currentTarget.files), (t.currentTarget.value = ``));
      },
      [e],
    ),
    i = T.useCallback(() => n.current.click(), []);
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
function Y(t) {
  let {
      onDropFiles: n,
      renderDesciption: r,
      elAdditonalButtons: i,
      elOverrideDragAndDropText: a,
    } = t,
    [o, s] = q(n),
    [c, l] = K(n, {
      accept: `image/png, image/jpeg, image/gif, image/webp`,
      multiple: !0,
    });
  return (0, z.jsxs)(`div`, {
    ...o,
    className: e(s ? rt : nt, `DragAndDropContainer`),
    children: [
      !!r && r(),
      (0, z.jsx)(`div`, { children: a || y(`#ImagePicker_DragAndDrop`) }),
      (0, z.jsxs)(`div`, {
        className: it,
        children: [
          c,
          (0, z.jsxs)(`label`, {
            onClick: l,
            children: [
              (0, z.jsxs)(`span`, {
                children: [y(`#ImagePicker_OrBrowse`), ` `],
              }),
              (0, z.jsx)(`span`, {
                className: at,
                children: y(`#selectimage_select_file`),
              }),
            ],
          }),
        ],
      }),
      i,
      t.children,
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
    [s, c] = x(() => [t.GetUploadImages(), oe.Get().GetCurEditLanguage()]),
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
                b(
                  (0, z.jsx)(g, {
                    strDescription: y(`#ImagePicker_Error`, i.name),
                  }),
                  window,
                )));
          } catch (e) {
            let t = C(e);
            (console.error(
              `ImageUploaderPanel.OnDropFiles: ` + t.strErrorMsg,
              t,
            ),
              b(
                (0, z.jsx)(g, {
                  strDescription: y(`#EventError_Code`, t.strErrorMsg ?? ``),
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
          children: y(`#ImageUpload_Upload`),
        }),
      !!r.length &&
        (0, z.jsx)(h, {
          style: { margin: `8px` },
          onClick: t.ClearImages,
          disabled: a,
          children: y(`#ImageUpload_Clear`),
        }),
    ],
  });
}
var pt = ie(mt);
function mt(t) {
  let n = (e) => {
      if (e instanceof de) {
        e.ResetImage();
        let n = window,
          r = (0, z.jsx)(ce, {
            ownerWin: n,
            uploadFile: e,
            forceResolution: t.forceResolution,
            fileType: t.forceFileType || 3,
          });
        te(r, n, `CropModal`, { strTitle: y(`#ImageUpload_CropModalTitle`) });
      } else
        console.log(
          `ImageUploadEmbeddedDialog trying to crop non image`,
          e.fileType,
          JSON.stringify(e.GetCurrentImageOption()),
        );
    },
    { asset: r, fnOnRemove: a, languageRealms: o } = t,
    s = r.ImageOptions?.map((e) => {
      let t = e?.fnGetLabelText(),
        n;
      (e.bEnforceDimensions && (t += ` - ${e.width}x${e.height}`),
        e.bDeprecated &&
          ((t += ` ${y(`#ImageUpload_Deprecated`)}`),
          (n = y(`#ImageUpload_Deprecated_ttip`))));
      let i;
      return (
        (r.BIsOriginalMinimumDimensions(e) && r.FileTypeMatchesImageTypes(e)) ||
          (i = ot),
        { label: t, data: e, strOptionClass: i, tooltip: n }
      );
    }).filter((e) => !e.data.bHiddenFromDropdown),
    c = {
      pending: y(`#ImageUpload_Pending`),
      waiting: y(`#ImageUpload_Waiting`),
      uploading: y(`#ImageUpload_Uploading`),
      processing: y(`#ImageUpload_Processing`),
      success: y(`#ImageUpload_SuccessCard`),
      failed: y(`#ImageUpload_Failed`),
    },
    l = r.BSupportsLanguages()
      ? $(ee.GetLanguageListForRealms(o ?? [i.k_ESteamRealmGlobal]))
      : null,
    u = r.IsValidAssetType(t.forceResolution, t.forceFileType),
    d = r.status == `pending`,
    p = c[r.status];
  r.status == `pending` &&
    (u.needsCrop
      ? (p = y(`#ImageUpload_NeedsCrop`))
      : u.error && (p = y(`#ImageUpload_Invalid`)));
  let m,
    h = r.GetCurrentImageOption();
  return (
    h && (m = s?.find((e) => e.data.sKey == h.sKey)?.data),
    (m ||= s?.[0]?.data),
    (0, z.jsxs)(`div`, {
      className: ut,
      children: [
        (0, z.jsx)(`div`, {
          className: lt,
          onClick: () => a(r),
          children: (0, z.jsx)(f, {}),
        }),
        (0, z.jsx)(ht, { asset: r }),
        l &&
          (0, z.jsx)(_, {
            strDropDownClassName: `ZsXFGEgobIY-`,
            rgOptions: l,
            selectedOption: r.language,
            onChange: (e) => (r.language = e.data),
            disabled: !d,
          }),
        s &&
          s?.length > 1 &&
          (0, z.jsx)(_, {
            label: r.GetImageOptionLabel(),
            rgOptions: s,
            selectedOption: m,
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
          className: e({ [se]: !0, [X]: r.status == `failed` }),
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
          (0, z.jsx)(v, {
            onClick: () => n(r),
            children: y(`#ImageUpload_OpenEditor`),
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
        onClick: (e) => b((0, z.jsx)(gt, { asset: t }), u(e)),
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
  return (0, z.jsx)(re, {
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
function $(e) {
  let t = [],
    n = [];
  for (let t of e) {
    if (t == 25) continue;
    let e = y(`#Language_` + r(t));
    n.push({ label: e, data: t });
  }
  return (
    n.sort((e, t) => e.label.localeCompare(t.label)),
    n.forEach((e) => t.push({ label: e.label, data: e.data })),
    n
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
