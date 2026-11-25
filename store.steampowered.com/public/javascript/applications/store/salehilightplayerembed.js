/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { It as t, dt as n } from "./chunk~01cfc309bf.js";
import { a as r } from "./chunk~5adf866415.js";
import "./chunk~8681f5c764.js";
import { t as i } from "./chunk~eefd71512b.js";
import { n as a, r as o, t as s } from "./chunk~38061b7abb.js";
import {
  Lc as c,
  Md as l,
  Pc as u,
  Wv as d,
  au as f,
  ib as p,
  iu as m,
  iy as h,
  jc as g,
  ly as _,
  ou as v,
  rx as y,
  su as b,
  us as x,
  uu as S,
  yn as C,
  zc as w,
  zn as T,
} from "./main.js";
var E = e(t(), 1),
  D = `_7OxSOadMubQ-`,
  O = `SoeJSTHTKi4-`,
  k = `_5tpsR11QFTo-`,
  A = `_4av218OCtYs-`,
  j = `RylL--hTWB0-`,
  M = `mGOBKozFlf0-`,
  N = `r048Hv39npI-`,
  P = `EjUPF3bt2-A-`,
  F = `ZvA83f32Rb8-`,
  I = `Mlx3eU2LaJ0-`,
  L = `DSoaCiA4Ylg-`,
  R = `kTZDgZ5dX-8-`,
  z = `WDTUiOfZjRM-`,
  B = `bgTVZST3FaE-`,
  V = `B4zxAgrjjQU-`,
  H = `ZQJlDRLSD2I-`,
  U = `NxfxOoNRnJc-`,
  W = `_6hGeFUDe5X0-`,
  G = n();
function K(e) {
  let { id: t, bPopOutTrailerPlayback: n } = e,
    { data: r } = h(t),
    a = w(t),
    { data: o } = d(t),
    [s, c] = (0, E.useState)(!1),
    [f, p] = (0, E.useState)(!1),
    m = l(),
    g = r?.highlights?.filter((e) => !m || e.all_ages),
    _ = g && g?.length > 0 ? g[0] : void 0,
    v = E.useCallback(() => {
      _ && (n ? p(!0) : c((e) => !e));
    }, [_, n]);
  if (!o)
    return (0, G.jsx)(`div`, {
      className: u(k, D),
      children: (0, G.jsx)(i, { size: `medium` }),
    });
  let y = _
    ? (0, G.jsx)(Q, { trailer: _, bPlayVideo: s, fnTogglePlayTrailer: v })
    : null;
  return !_ && !a?.length
    ? null
    : (0, G.jsxs)(`div`, {
        className: u(k, D),
        children: [
          (0, G.jsx)(q, {
            elFeaturedInCenter: y,
            trailer: _,
            id: t,
            name: o.name || ``,
          }),
          n
            ? (0, G.jsx)(Y, { id: t, bShowModal: f, hideModal: () => p(!1) })
            : (0, G.jsx)(J, {
                name: o.name || ``,
                trailer: _,
                bPlayVideo: s,
                fnTogglePlayTrailer: v,
                bControls: !0,
              }),
        ],
      });
}
function q(e) {
  let {
      elFeaturedInCenter: t,
      id: n,
      name: i,
      trailer: a,
      featureElementclassName: o,
      bUseTrailerAsFirstThumb: s,
      bNoScreenShotModals: l,
    } = e,
    [d, f] = E.useState(void 0),
    [p, m] = r(),
    h = w(n),
    g = (0, E.useRef)(null),
    [v, y] = (0, E.useState)(0);
  if (!n) return null;
  let b = t || (d !== void 0 && d !== -1) ? d : 0,
    x = [],
    S = [];
  if (
    (s &&
      a &&
      (x.push(
        (0, G.jsx)(
          Q,
          {
            trailer: a,
            bPlayVideo: !1,
            fnTogglePlayTrailer: () => {},
            onMouseEnter: () => f(0),
            onMouseLeave: () => {
              let e = g.current;
              e && y(e.currentTime);
            },
          },
          `trail_thumb_`,
        ),
      ),
      S.push(
        (0, G.jsx)(
          J,
          {
            ref: g,
            name: i,
            trailer: a,
            bControls: !1,
            bPlayVideo: !0,
            startTime: v,
            fnTogglePlayTrailer: () => {},
          },
          `trail_inline`,
        ),
      )),
    h?.forEach((e, n) => {
      if ((t || n > 0) && x.length < 3) {
        let t = c(e, `thumb`),
          r = c(e, `600x338`),
          a = x.length;
        (x.push(
          (0, G.jsx)(
            `div`,
            {
              className: u({ [z]: !0, [R]: !l }),
              onMouseEnter: () => f(a),
              children: l
                ? (0, G.jsx)(`img`, { src: t, alt: i })
                : (0, G.jsx)(`button`, {
                    type: `button`,
                    className: B,
                    onClick: () => {
                      let e = [...(h || [])];
                      if (e.length > 0) {
                        for (let t = 0; t < n; ++t) {
                          let t = e.shift();
                          t && e.push(t);
                        }
                        p(e.map((e) => c(e, `full`)));
                      }
                    },
                    children: (0, G.jsx)(`img`, { src: t, alt: i }),
                  }),
            },
            n + `_small_` + t,
          ),
        ),
          S.push(
            (0, G.jsx)(
              `div`,
              { className: M, children: (0, G.jsx)(`img`, { src: r, alt: i }) },
              n + `_big_` + t,
            ),
          ));
      }
    }),
    !t && (!S || S.length == 0))
  )
    return null;
  let C = x.slice(0, 3),
    T = Array.from({ length: Math.max(0, 3 - C.length) });
  return (0, G.jsxs)(G.Fragment, {
    children: [
      m,
      (0, G.jsx)(`div`, {
        className: o || `_4av218OCtYs-`,
        children:
          t && (b === -1 || b === void 0)
            ? (0, G.jsx)(G.Fragment, { children: t })
            : (0, G.jsx)(G.Fragment, { children: b !== void 0 && S[b] }),
      }),
      C.length > 0 &&
        (0, G.jsxs)(`div`, {
          className: `zPYR9--wLLQ-`,
          onMouseLeave: () => f(-1),
          children: [
            C,
            T.map((e, t) =>
              (0, G.jsx)(
                `div`,
                { className: `WDTUiOfZjRM-` },
                `app_${_(n)}_${t}`,
              ),
            ),
          ],
        }),
    ],
  });
}
function J(e) {
  let {
    ref: t,
    name: n,
    trailer: r,
    bControls: i,
    bPlayVideo: a,
    fnTogglePlayTrailer: o,
    startTime: c,
  } = e;
  if (
    ((0, E.useEffect)(() => {
      let e = t?.current;
      if (c != null && c > 0 && e) {
        let t = () => {
          e.currentTime = c || 0;
        };
        return (
          e.addEventListener(`loadedmetadata`, t),
          () => {
            e.removeEventListener(`loadedmetadata`, t);
          }
        );
      }
    }, [t, c]),
    !r)
  )
    return null;
  let l = u(U, a && `B4zxAgrjjQU-`);
  return (0, G.jsxs)(`div`, {
    className: l,
    onClick: o,
    role: `presentation`,
    children: [
      (0, G.jsx)(s, {
        name: n,
        trailerCategory: r.trailer_category,
        trailerDisplay: 1,
        mouseOver: !1,
      }),
      !!(a && r.microtrailer) &&
        (0, G.jsx)(`video`, {
          className: `YL-tCU7ggsU-`,
          ref: t,
          controls: i,
          autoPlay: !0,
          loop: !0,
          muted: !0,
          poster: c != null && c > 0 ? void 0 : r.screenshot_full,
          children: r.microtrailer?.map((e) =>
            y.IN_CLIENT && e.type == `video/mp4`
              ? null
              : (0, G.jsx)(
                  `source`,
                  { src: v(r, e.filename || ``), type: e.type },
                  e.filename,
                ),
          ),
        }),
      i &&
        (0, G.jsx)(`button`, {
          type: `button`,
          className: `wrm1TrwYv0M-`,
          "aria-label": p(`#Button_Close`),
          children: (0, G.jsx)(g, {}),
        }),
    ],
  });
}
function Y(e) {
  return e.bShowModal ? (0, G.jsx)(X, { ...e }) : null;
}
function X(e) {
  let { id: t, bShowModal: n, trailerBaseID: r, hideModal: i } = e,
    { data: s } = d(t),
    c = S(t),
    l = (0, E.useMemo)(() => {
      if (c && c.length != 0) {
        if (r) {
          let e = c.find((e) => e.trailer_base_id == r);
          if (e) return e;
        }
        return c[0];
      }
    }, [c, r]),
    u = E.useId(),
    p = E.useId(),
    {
      rgDashTrailers: h,
      rgHlsTrailers: g,
      strCaptionManufest: _,
      strScreenshot: v,
    } = (0, E.useMemo)(() => {
      if (!l)
        return {
          rgDashTrailers: [],
          rgHlsTrailers: [],
          strCaptionManufest: ``,
          strScreenshot: ``,
        };
      let { rgDashTrailers: e, rgHlsTrailers: t } = b(l);
      return {
        rgDashTrailers: e,
        rgHlsTrailers: t,
        strCaptionManufest: m(l),
        strScreenshot: f(l),
      };
    }, [l]);
  return !l || !l.adaptive_trailers || h.length == 0
    ? null
    : (0, G.jsx)(C, {
        active: n,
        children: (0, G.jsxs)(T, {
          "aria-labelledby": a(u, p),
          bAllowFullSize: !0,
          bOKDisabled: !0,
          closeModal: i,
          children: [
            (0, G.jsx)(`div`, {
              className: W,
              children: (0, G.jsx)(o, {
                dashManifests: h,
                hlsManifest: g[0] || ``,
                screenshot: v,
                altText: l.trailer_name,
                muteWhenAutoplayBlocked: !0,
                captionManifest: _,
              }),
            }),
            (0, G.jsx)(`div`, {
              id: u,
              style: { display: `none` },
              children: s?.name || ``,
            }),
            (0, G.jsx)(`div`, {
              id: p,
              style: { display: `none` },
              children: l.trailer_name,
            }),
          ],
        }),
      });
}
function Z(e) {
  let { appid: t, trailerBaseID: n, bShowModal: r, hideModal: i } = e,
    a = (0, E.useMemo)(() => ({ appid: t }), [t]);
  return (0, G.jsx)(Y, {
    id: a,
    trailerBaseID: n,
    bShowModal: r,
    hideModal: i,
  });
}
function Q(e) {
  let {
    trailer: t,
    fnTogglePlayTrailer: n,
    bPlayVideo: r,
    onMouseEnter: i,
    onMouseLeave: a,
  } = e;
  return (0, G.jsxs)(`div`, {
    className: u({ [j]: !r, [V]: r, [z]: !0 }),
    onClick: n,
    onMouseEnter: i,
    onMouseLeave: a,
    role: `presentation`,
    children: [
      (0, G.jsx)(`img`, { src: f(t), alt: t.trailer_name }),
      (0, G.jsx)(`button`, {
        type: `button`,
        className: H,
        "aria-label": p(`#Playback_Play_Tooltip`),
        children: (0, G.jsx)(x, {}),
      }),
    ],
  });
}
export {
  F as a,
  P as c,
  D as d,
  O as f,
  Z as i,
  N as l,
  W as m,
  Y as n,
  I as o,
  L as p,
  K as r,
  k as s,
  q as t,
  A as u,
};
