/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { Lt as t, ft as n } from "./libraries.js";
import { a as r } from "./image.js";
import "./modals.js";
import { t as i } from "./throbber.js";
import { n as a, r as o, t as s } from "./trailertitlebar.js";
import {
  $o as c,
  An as l,
  Av as u,
  Cc as d,
  Ec as f,
  Gl as p,
  Jl as m,
  Kl as h,
  Oc as g,
  Ub as _,
  Wv as v,
  Wy as y,
  Yv as b,
  Zl as x,
  bc as S,
  mn as C,
  ql as w,
  vd as T,
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
    { data: r } = v(t),
    a = g(t),
    { data: o } = u(t),
    [s, c] = (0, E.useState)(!1),
    [l, f] = (0, E.useState)(!1),
    p = T(),
    m = r?.highlights?.filter((e) => !p || e.all_ages),
    h = m && m?.length > 0 ? m[0] : void 0,
    _ = E.useCallback(() => {
      h && (n ? f(!0) : c((e) => !e));
    }, [h, n]);
  if (!o)
    return (0, G.jsx)(`div`, {
      className: d(k, D),
      children: (0, G.jsx)(i, { size: `medium` }),
    });
  let y = h
    ? (0, G.jsx)(Q, { trailer: h, bPlayVideo: s, fnTogglePlayTrailer: _ })
    : null;
  return !h && !a?.length
    ? null
    : (0, G.jsxs)(`div`, {
        className: d(k, D),
        children: [
          (0, G.jsx)(q, {
            elFeaturedInCenter: y,
            trailer: h,
            id: t,
            name: o.name || ``,
          }),
          n
            ? (0, G.jsx)(Y, { id: t, bShowModal: l, hideModal: () => f(!1) })
            : (0, G.jsx)(J, {
                name: o.name || ``,
                trailer: h,
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
      bNoScreenShotModals: c,
    } = e,
    [l, u] = E.useState(void 0),
    [p, m] = r(),
    h = g(n),
    _ = (0, E.useRef)(null),
    [v, y] = (0, E.useState)(0);
  if (!n) return null;
  let x = t || (l !== void 0 && l !== -1) ? l : 0,
    S = [],
    C = [];
  if (
    (s &&
      a &&
      (S.push(
        (0, G.jsx)(
          Q,
          {
            trailer: a,
            bPlayVideo: !1,
            fnTogglePlayTrailer: () => {},
            onMouseEnter: () => u(0),
            onMouseLeave: () => {
              let e = _.current;
              e && y(e.currentTime);
            },
          },
          `trail_thumb_`,
        ),
      ),
      C.push(
        (0, G.jsx)(
          J,
          {
            ref: _,
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
      if ((t || n > 0) && S.length < 3) {
        let t = f(e, `thumb`),
          r = f(e, `600x338`),
          a = S.length;
        (S.push(
          (0, G.jsx)(
            `div`,
            {
              className: d({ [z]: !0, [R]: !c }),
              onMouseEnter: () => u(a),
              children: c
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
                        p(e.map((e) => f(e, `full`)));
                      }
                    },
                    children: (0, G.jsx)(`img`, { src: t, alt: i }),
                  }),
            },
            n + `_small_` + t,
          ),
        ),
          C.push(
            (0, G.jsx)(
              `div`,
              { className: M, children: (0, G.jsx)(`img`, { src: r, alt: i }) },
              n + `_big_` + t,
            ),
          ));
      }
    }),
    !t && (!C || C.length == 0))
  )
    return null;
  let w = S.slice(0, 3),
    T = Array.from({ length: Math.max(0, 3 - w.length) });
  return (0, G.jsxs)(G.Fragment, {
    children: [
      m,
      (0, G.jsx)(`div`, {
        className: o || `_4av218OCtYs-`,
        children:
          t && (x === -1 || x === void 0)
            ? (0, G.jsx)(G.Fragment, { children: t })
            : (0, G.jsx)(G.Fragment, { children: x !== void 0 && C[x] }),
      }),
      w.length > 0 &&
        (0, G.jsxs)(`div`, {
          className: `zPYR9--wLLQ-`,
          onMouseLeave: () => u(-1),
          children: [
            w,
            T.map((e, t) =>
              (0, G.jsx)(
                `div`,
                { className: `WDTUiOfZjRM-` },
                `app_${b(n)}_${t}`,
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
  let l = d(U, a && `B4zxAgrjjQU-`);
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
            _.IN_CLIENT && e.type == `video/mp4`
              ? null
              : (0, G.jsx)(
                  `source`,
                  { src: w(r, e.filename || ``), type: e.type },
                  e.filename,
                ),
          ),
        }),
      i &&
        (0, G.jsx)(`button`, {
          type: `button`,
          className: `wrm1TrwYv0M-`,
          "aria-label": y(`#Button_Close`),
          children: (0, G.jsx)(S, {}),
        }),
    ],
  });
}
function Y(e) {
  return e.bShowModal ? (0, G.jsx)(X, { ...e }) : null;
}
function X(e) {
  let { id: t, bShowModal: n, trailerBaseID: r, hideModal: i } = e,
    { data: s } = u(t),
    c = x(t),
    d = (0, E.useMemo)(() => {
      if (c && c.length != 0) {
        if (r) {
          let e = c.find((e) => e.trailer_base_id == r);
          if (e) return e;
        }
        return c[0];
      }
    }, [c, r]),
    f = E.useId(),
    g = E.useId(),
    {
      rgDashTrailers: _,
      rgHlsTrailers: v,
      strCaptionManufest: y,
      strScreenshot: b,
    } = (0, E.useMemo)(() => {
      if (!d)
        return {
          rgDashTrailers: [],
          rgHlsTrailers: [],
          strCaptionManufest: ``,
          strScreenshot: ``,
        };
      let { rgDashTrailers: e, rgHlsTrailers: t } = m(d);
      return {
        rgDashTrailers: e,
        rgHlsTrailers: t,
        strCaptionManufest: p(d),
        strScreenshot: h(d),
      };
    }, [d]);
  return !d || !d.adaptive_trailers || _.length == 0
    ? null
    : (0, G.jsx)(C, {
        active: n,
        children: (0, G.jsxs)(l, {
          "aria-labelledby": a(f, g),
          bAllowFullSize: !0,
          bOKDisabled: !0,
          closeModal: i,
          children: [
            (0, G.jsx)(`div`, {
              className: W,
              children: (0, G.jsx)(o, {
                dashManifests: _,
                hlsManifest: v[0] || ``,
                screenshot: b,
                altText: d.trailer_name,
                muteWhenAutoplayBlocked: !0,
                captionManifest: y,
              }),
            }),
            (0, G.jsx)(`div`, {
              id: f,
              style: { display: `none` },
              children: s?.name || ``,
            }),
            (0, G.jsx)(`div`, {
              id: g,
              style: { display: `none` },
              children: d.trailer_name,
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
    className: d({ [j]: !r, [V]: r, [z]: !0 }),
    onClick: n,
    onMouseEnter: i,
    onMouseLeave: a,
    role: `presentation`,
    children: [
      (0, G.jsx)(`img`, { src: h(t), alt: t.trailer_name }),
      (0, G.jsx)(`button`, {
        type: `button`,
        className: H,
        "aria-label": y(`#Playback_Play_Tooltip`),
        children: (0, G.jsx)(c, {}),
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
