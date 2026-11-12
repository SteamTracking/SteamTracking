/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { Lt as t, ft as n } from "./chunk~01cfc309bf.js";
import { a as r } from "./chunk~5adf866415.js";
import "./chunk~8681f5c764.js";
import { t as i } from "./chunk~eefd71512b.js";
import { n as a, r as o, t as s } from "./chunk~38061b7abb.js";
import {
  $v as c,
  Dc as l,
  Jl as u,
  Jv as d,
  Jy as f,
  Mn as p,
  Pv as m,
  Sd as h,
  Xl as g,
  Yl as _,
  Zl as v,
  es as y,
  eu as b,
  fn as x,
  kc as S,
  qb as C,
  wc as w,
  xc as T,
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
    { data: r } = d(t),
    a = S(t),
    { data: o } = m(t),
    [s, c] = (0, E.useState)(!1),
    [l, u] = (0, E.useState)(!1),
    f = h(),
    p = r?.highlights?.filter((e) => !f || e.all_ages),
    g = p && p?.length > 0 ? p[0] : void 0,
    _ = E.useCallback(() => {
      g && (n ? u(!0) : c((e) => !e));
    }, [g, n]);
  if (!o)
    return (0, G.jsx)(`div`, {
      className: w(k, D),
      children: (0, G.jsx)(i, { size: `medium` }),
    });
  let v = g
    ? (0, G.jsx)(Q, { trailer: g, bPlayVideo: s, fnTogglePlayTrailer: _ })
    : null;
  return !g && !a?.length
    ? null
    : (0, G.jsxs)(`div`, {
        className: w(k, D),
        children: [
          (0, G.jsx)(q, {
            elFeaturedInCenter: v,
            trailer: g,
            id: t,
            name: o.name || ``,
          }),
          n
            ? (0, G.jsx)(Y, { id: t, bShowModal: l, hideModal: () => u(!1) })
            : (0, G.jsx)(J, {
                name: o.name || ``,
                trailer: g,
                bPlayVideo: s,
                fnTogglePlayTrailer: _,
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
      bNoScreenShotModals: u,
    } = e,
    [d, f] = E.useState(void 0),
    [p, m] = r(),
    h = S(n),
    g = (0, E.useRef)(null),
    [_, v] = (0, E.useState)(0);
  if (!n) return null;
  let y = t || (d !== void 0 && d !== -1) ? d : 0,
    b = [],
    x = [];
  if (
    (s &&
      a &&
      (b.push(
        (0, G.jsx)(
          Q,
          {
            trailer: a,
            bPlayVideo: !1,
            fnTogglePlayTrailer: () => {},
            onMouseEnter: () => f(0),
            onMouseLeave: () => {
              let e = g.current;
              e && v(e.currentTime);
            },
          },
          `trail_thumb_`,
        ),
      ),
      x.push(
        (0, G.jsx)(
          J,
          {
            ref: g,
            name: i,
            trailer: a,
            bControls: !1,
            bPlayVideo: !0,
            startTime: _,
            fnTogglePlayTrailer: () => {},
          },
          `trail_inline`,
        ),
      )),
    h?.forEach((e, n) => {
      if ((t || n > 0) && b.length < 3) {
        let t = l(e, `thumb`),
          r = l(e, `600x338`),
          a = b.length;
        (b.push(
          (0, G.jsx)(
            `div`,
            {
              className: w({ [z]: !0, [R]: !u }),
              onMouseEnter: () => f(a),
              children: u
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
                        p(e.map((e) => l(e, `full`)));
                      }
                    },
                    children: (0, G.jsx)(`img`, { src: t, alt: i }),
                  }),
            },
            n + `_small_` + t,
          ),
        ),
          x.push(
            (0, G.jsx)(
              `div`,
              { className: M, children: (0, G.jsx)(`img`, { src: r, alt: i }) },
              n + `_big_` + t,
            ),
          ));
      }
    }),
    !t && (!x || x.length == 0))
  )
    return null;
  let C = b.slice(0, 3),
    T = Array.from({ length: Math.max(0, 3 - C.length) });
  return (0, G.jsxs)(G.Fragment, {
    children: [
      m,
      (0, G.jsx)(`div`, {
        className: o || `_4av218OCtYs-`,
        children:
          t && (y === -1 || y === void 0)
            ? (0, G.jsx)(G.Fragment, { children: t })
            : (0, G.jsx)(G.Fragment, { children: y !== void 0 && x[y] }),
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
                `app_${c(n)}_${t}`,
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
  let l = w(U, a && `B4zxAgrjjQU-`);
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
            C.IN_CLIENT && e.type == `video/mp4`
              ? null
              : (0, G.jsx)(
                  `source`,
                  { src: g(r, e.filename || ``), type: e.type },
                  e.filename,
                ),
          ),
        }),
      i &&
        (0, G.jsx)(`button`, {
          type: `button`,
          className: `wrm1TrwYv0M-`,
          "aria-label": f(`#Button_Close`),
          children: (0, G.jsx)(T, {}),
        }),
    ],
  });
}
function Y(e) {
  return e.bShowModal ? (0, G.jsx)(X, { ...e }) : null;
}
function X(e) {
  let { id: t, bShowModal: n, trailerBaseID: r, hideModal: i } = e,
    { data: s } = m(t),
    c = b(t),
    l = (0, E.useMemo)(() => {
      if (c && c.length != 0) {
        if (r) {
          let e = c.find((e) => e.trailer_base_id == r);
          if (e) return e;
        }
        return c[0];
      }
    }, [c, r]),
    d = E.useId(),
    f = E.useId(),
    {
      rgDashTrailers: h,
      rgHlsTrailers: g,
      strCaptionManufest: y,
      strScreenshot: S,
    } = (0, E.useMemo)(() => {
      if (!l)
        return {
          rgDashTrailers: [],
          rgHlsTrailers: [],
          strCaptionManufest: ``,
          strScreenshot: ``,
        };
      let { rgDashTrailers: e, rgHlsTrailers: t } = v(l);
      return {
        rgDashTrailers: e,
        rgHlsTrailers: t,
        strCaptionManufest: u(l),
        strScreenshot: _(l),
      };
    }, [l]);
  return !l || !l.adaptive_trailers || h.length == 0
    ? null
    : (0, G.jsx)(x, {
        active: n,
        children: (0, G.jsxs)(p, {
          "aria-labelledby": a(d, f),
          bAllowFullSize: !0,
          bOKDisabled: !0,
          closeModal: i,
          children: [
            (0, G.jsx)(`div`, {
              className: W,
              children: (0, G.jsx)(o, {
                dashManifests: h,
                hlsManifest: g[0] || ``,
                screenshot: S,
                altText: l.trailer_name,
                muteWhenAutoplayBlocked: !0,
                captionManifest: y,
              }),
            }),
            (0, G.jsx)(`div`, {
              id: d,
              style: { display: `none` },
              children: s?.name || ``,
            }),
            (0, G.jsx)(`div`, {
              id: f,
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
    className: w({ [j]: !r, [V]: r, [z]: !0 }),
    onClick: n,
    onMouseEnter: i,
    onMouseLeave: a,
    role: `presentation`,
    children: [
      (0, G.jsx)(`img`, { src: _(t), alt: t.trailer_name }),
      (0, G.jsx)(`button`, {
        type: `button`,
        className: H,
        "aria-label": f(`#Playback_Play_Tooltip`),
        children: (0, G.jsx)(y, {}),
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
