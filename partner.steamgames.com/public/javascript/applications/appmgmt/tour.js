/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { Pt as e, W as t, n, nt as r, t as i } from "./chunk~de7f2df91c.js";
import { Et as a } from "./chunk~bd90a5fce7.js";
import { $i as o, T as s, da as c, on as l } from "./chunk~1fa4b8f2ff.js";
import { w as u } from "./chunk~44f252525d.js";
import { a as d } from "./chunk~f8b6a4beb3.js";
import { S as f, i as p, x as m } from "./chunk~96e60d7578.js";
var h = e(r()),
  g = `PnqfSYRVFFE-`,
  _ = `SmIdDo8BaVc-`,
  v = `GMLvP3ZFHIM-`,
  y = `_6aw5qTRFKMI-`,
  b = `e3aaQ99w4H0-`,
  x = `IHFgWI28RyQ-`,
  S = `A4MFF8rl-ys-`,
  C = `adOdkeorCF8-`,
  w = e(i()),
  T = t(),
  E = class {
    m_tours = {};
    m_strActiveTour = ``;
    m_storage = void 0;
    m_bReady = !1;
    constructor() {
      m(this);
    }
    async Init(e) {
      if (this.m_storage) return;
      this.m_storage = e;
      let t = await O(e);
      (Object.keys(t || {}).forEach((e) => {
        let n = !!t[e];
        this.m_tours[e] = { ...(this.m_tours[e] || { stops: {} }), bSeen: n };
      }),
        (this.m_bReady = !0));
    }
    UpdateStop(e, t, n, r) {
      (this.m_tours[e] || (this.m_tours[e] = { bSeen: !1, stops: {} }),
        (this.m_tours[e].stops[t] = { options: n, elem: r }));
    }
    BHasSeenTour(e) {
      return !this.m_bReady || (this.m_tours[e] && this.m_tours[e].bSeen);
    }
    GetTrackedStops(e) {
      return this.m_tours[e]?.stops || {};
    }
    ActivateTour(e) {
      (this.m_strActiveTour &&
        this.m_strActiveTour !== e &&
        this.DismissTour(this.m_strActiveTour),
        (this.m_strActiveTour = e));
    }
    DismissTour(e) {
      this.m_tours[e] &&
        (this.MarkTourSeen(e),
        (this.m_tours[e].bSeen = !0),
        this.m_strActiveTour === e && (this.m_strActiveTour = ``));
    }
    MarkTourSeen(e) {
      return k(this.m_storage, e, Date.now());
    }
    MarkTourUnseen(e) {
      return k(this.m_storage, e, void 0);
    }
  };
(n([f], E.prototype, `m_tours`, void 0),
  n([f], E.prototype, `m_strActiveTour`, void 0),
  n([f], E.prototype, `m_bReady`, void 0),
  n([p.bound], E.prototype, `UpdateStop`, null),
  n([p], E.prototype, `ActivateTour`, null),
  n([p], E.prototype, `DismissTour`, null));
var D = `tour_history`;
async function O(e) {
  let t = await e.GetObject(D);
  return !t || typeof t != `object` ? {} : t;
}
async function k(e, t, n) {
  let r = await O(e);
  return e.StoreObject(D, { ...r, [t]: n });
}
var A = new E();
function j() {
  let e = d();
  return (
    (0, h.useEffect)(() => {
      A.Init(e);
    }, [e]),
    A
  );
}
function M(e) {
  let t = j(),
    { bShowTour: n, stopElems: r } = u(() => ({
      bShowTour: !t.BHasSeenTour(e),
      stopElems: t.GetTrackedStops(e),
    }));
  return {
    bShowTour: n,
    stopElems: r,
    onInteraction: (0, h.useCallback)(() => t.MarkTourSeen(e), [t, e]),
    onDismiss: (0, h.useCallback)(() => t.DismissTour(e), [t, e]),
    onActivate: (0, h.useCallback)(() => t.ActivateTour(e), [t, e]),
    updateStop: t.UpdateStop,
  };
}
function N(e) {
  let { children: t } = e;
  return (0, T.jsxs)(T.Fragment, { children: [t, (0, T.jsx)(P, { ...e })] });
}
function P(e) {
  let { active: t, name: n, stops: r } = e,
    { bShowTour: i, onInteraction: a, onDismiss: o, stopElems: s } = M(n),
    [u, d] = (0, h.useState)(0);
  if (!i || !t || u >= r.length) return null;
  let f = () => {
      (d(u + 1), a());
    },
    { id: p, title: m, content: g } = r[u],
    _ = s[p];
  if (!_ || !_.elem) return null;
  let v = g;
  return (
    Array.isArray(g) &&
      (v = g.map((e, t) => (0, T.jsx)(`div`, { children: e }, t))),
    (0, T.jsx)(F, {
      ..._,
      children: (0, T.jsxs)(L, {
        tour: n,
        title: m,
        onRequestClose: o,
        children: [
          v,
          (0, T.jsxs)(`div`, {
            className: S,
            children: [
              r.length > 1 &&
                (0, T.jsx)(`div`, {
                  className: `heY0SzmLbNE-`,
                  children: c(`#Tour_TipCount`, u + 1, r.length),
                }),
              u < r.length - 1
                ? (0, T.jsx)(l, { onClick: f, children: c(`#Button_Next`) })
                : (0, T.jsx)(l, { onClick: o, children: c(`#Button_Done`) }),
            ],
          }),
        ],
      }),
    })
  );
}
function F(e) {
  let { elem: t, options: n, children: r } = e,
    { ownerWindow: i } = s(),
    a = t.getBoundingClientRect(),
    { style: o, position: c } = I(i, a, n.position, n.offset);
  return (0, w.createPortal)(
    (0, T.jsxs)(`div`, {
      className: g,
      style: o,
      "data-position": c,
      children: [(0, T.jsx)(z, { position: c, targetRect: a }), r],
    }),
    i.document.body,
  );
}
function I(e, t, n, r = 0) {
  let i,
    a = n,
    o = r + V,
    s = 250 + o,
    c = e.document.body.matches(`:dir(rtl)`);
  switch (
    (c && (a === `left` ? (a = `right`) : a === `right` && (a = `left`)),
    ((a === `left` && t.x < s) ||
      (a === `right` && e.innerWidth - (t.x + t.width) < s)) &&
      (a = `below`),
    a)
  ) {
    case `left`:
      i = {
        top: t.top,
        width: t.left - 10 - o,
        left: 10,
        minWidth: 240,
        flexDirection: `row`,
        justifyContent: `flex-end`,
      };
      break;
    case `right`:
      i = {
        top: t.top,
        left: t.right + o,
        right: 10,
        minWidth: 240,
        flexDirection: `row`,
        justifyContent: `flex-start`,
      };
      break;
    case `above`:
      i = {
        top: 10,
        height: t.y - 10 - o,
        left: t.x,
        flexDirection: `column`,
        justifyContent: `flex-end`,
      };
      break;
    default:
      i = c
        ? {
            top: t.y + t.height + o,
            right: e.innerWidth - t.right,
            flexDirection: `column`,
            justifyContent: `flex-start`,
          }
        : {
            top: t.y + t.height + o,
            left: t.x,
            flexDirection: `column`,
            justifyContent: `flex-start`,
          };
  }
  let l = { display: `flex` };
  return { style: { ...i, ...l }, position: a, rect: t };
}
function L(e) {
  let { tour: t, title: n, onRequestClose: r, children: i } = e,
    { onActivate: a } = M(t);
  return (
    (0, h.useEffect)(() => a(), [a]),
    (0, T.jsxs)(`div`, {
      className: _,
      children: [
        (0, T.jsx)(`div`, {
          onClick: r,
          className: v,
          children: (0, T.jsx)(o, { className: y }),
        }),
        (0, T.jsx)(`div`, { className: b, children: n }),
        (0, T.jsx)(`div`, { className: x, children: i }),
      ],
    })
  );
}
function R(e) {
  let { name: t, tour: n, options: r, children: i } = e,
    { updateStop: o } = M(n),
    s = (0, h.useCallback)((e) => o(n, t, r, e), [o, n, t]),
    c = h.Children.only(i),
    l = a(s, c.props.ref);
  return (0, h.cloneElement)(h.Children.only(i), { ref: l });
}
function z(e) {
  let { position: t, targetRect: n } = e;
  return (0, T.jsx)(`svg`, {
    viewBox: `0 0 28 10`,
    className: C,
    style: H(t, n),
    children: (0, T.jsx)(`polygon`, {
      points: `0,0 14,10 28,0`,
      fill: `currentColor`,
    }),
  });
}
var B = 28,
  V = 10;
function H(e, t) {
  let n = { width: `${B}px`, height: `${V}px` };
  switch (e) {
    case `right`:
      ((n.left = `0px`), (n.top = `${Math.max(t.height / 2 - V, V)}px`));
      break;
    case `left`:
      ((n.right = `0px`), (n.top = `${Math.max(t.height / 2 - V, V)}px`));
      break;
    case `above`:
      ((n.bottom = `-10px`),
        (n.insetInlineStart = `${Math.max(t.width / 2 - V, V)}px`));
      break;
    case `below`:
      ((n.top = `-10px`),
        (n.insetInlineStart = `${Math.max(t.width / 2 - V, V)}px`));
  }
  return n;
}
export { R as n, N as t };
