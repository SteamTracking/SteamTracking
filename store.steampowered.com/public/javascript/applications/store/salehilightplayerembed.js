/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { Lt as t, ft as n } from "./libraries.js";
import { a as r } from "./image.js";
import "./modals.js";
import { t as i } from "./throbber.js";
import { n as a, r as o, t as s } from "./trailertitlebar.js";
import {
  Dc as c,
  Gl as l,
  Hb as u,
  Jv as d,
  Kl as f,
  Qo as p,
  Sc as m,
  Tc as h,
  Uv as g,
  Uy as _,
  Wl as v,
  Xl as y,
  _d as b,
  kn as x,
  kv as S,
  pn as C,
  ql as w,
  yc as T,
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
    { data: r } = g(t),
    a = c(t),
    { data: o } = S(t),
    [s, l] = (0, E.useState)(!1),
    [u, d] = (0, E.useState)(!1),
    f = b(),
    p = r?.highlights?.filter((e) => !f || e.all_ages),
    h = p && p?.length > 0 ? p[0] : void 0,
    _ = E.useCallback(() => {
      h && (n ? d(!0) : l((e) => !e));
    }, [h, n]);
  if (!o)
    return (0, G.jsx)(`div`, {
      className: m(k, D),
      children: (0, G.jsx)(i, { size: `medium` }),
    });
  let v = h
    ? (0, G.jsx)(Q, { trailer: h, bPlayVideo: s, fnTogglePlayTrailer: _ })
    : null;
  return !h && !a?.length
    ? null
    : (0, G.jsxs)(`div`, {
        className: m(k, D),
        children: [
          (0, G.jsx)(q, {
            elFeaturedInCenter: v,
            trailer: h,
            id: t,
            name: o.name || ``,
          }),
          n
            ? (0, G.jsx)(Y, { id: t, bShowModal: u, hideModal: () => d(!1) })
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
      bNoScreenShotModals: l,
    } = e,
    [u, f] = E.useState(void 0),
    [p, g] = r(),
    _ = c(n),
    v = (0, E.useRef)(null),
    [y, b] = (0, E.useState)(0);
  if (!n) return null;
  let x = t || (u !== void 0 && u !== -1) ? u : 0,
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
            onMouseEnter: () => f(0),
            onMouseLeave: () => {
              let e = v.current;
              e && b(e.currentTime);
            },
          },
          `trail_thumb_`,
        ),
      ),
      C.push(
        (0, G.jsx)(
          J,
          {
            ref: v,
            name: i,
            trailer: a,
            bControls: !1,
            bPlayVideo: !0,
            startTime: y,
            fnTogglePlayTrailer: () => {},
          },
          `trail_inline`,
        ),
      )),
    _?.forEach((e, n) => {
      if ((t || n > 0) && S.length < 3) {
        let t = h(e, `thumb`),
          r = h(e, `600x338`),
          a = S.length;
        (S.push(
          (0, G.jsx)(
            `div`,
            {
              className: m({ [z]: !0, [R]: !l }),
              onMouseEnter: () => f(a),
              children: l
                ? (0, G.jsx)(`img`, { src: t, alt: i })
                : (0, G.jsx)(`button`, {
                    type: `button`,
                    className: B,
                    onClick: () => {
                      let e = [...(_ || [])];
                      if (e.length > 0) {
                        for (let t = 0; t < n; ++t) {
                          let t = e.shift();
                          t && e.push(t);
                        }
                        p(e.map((e) => h(e, `full`)));
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
      g,
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
          onMouseLeave: () => f(-1),
          children: [
            w,
            T.map((e, t) =>
              (0, G.jsx)(
                `div`,
                { className: `WDTUiOfZjRM-` },
                `app_${d(n)}_${t}`,
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
  let l = m(U, a && `B4zxAgrjjQU-`);
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
            u.IN_CLIENT && e.type == `video/mp4`
              ? null
              : (0, G.jsx)(
                  `source`,
                  { src: f(r, e.filename || ``), type: e.type },
                  e.filename,
                ),
          ),
        }),
      i &&
        (0, G.jsx)(`button`, {
          type: `button`,
          className: `wrm1TrwYv0M-`,
          "aria-label": _(`#Button_Close`),
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
    { data: s } = S(t),
    c = y(t),
    u = (0, E.useMemo)(() => {
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
      rgDashTrailers: p,
      rgHlsTrailers: m,
      strCaptionManufest: h,
      strScreenshot: g,
    } = (0, E.useMemo)(() => {
      if (!u)
        return {
          rgDashTrailers: [],
          rgHlsTrailers: [],
          strCaptionManufest: ``,
          strScreenshot: ``,
        };
      let { rgDashTrailers: e, rgHlsTrailers: t } = w(u);
      return {
        rgDashTrailers: e,
        rgHlsTrailers: t,
        strCaptionManufest: v(u),
        strScreenshot: l(u),
      };
    }, [u]);
  return !u || !u.adaptive_trailers || p.length == 0
    ? null
    : (0, G.jsx)(C, {
        active: n,
        children: (0, G.jsxs)(x, {
          "aria-labelledby": a(d, f),
          bAllowFullSize: !0,
          bOKDisabled: !0,
          closeModal: i,
          children: [
            (0, G.jsx)(`div`, {
              className: W,
              children: (0, G.jsx)(o, {
                dashManifests: p,
                hlsManifest: m[0] || ``,
                screenshot: g,
                altText: u.trailer_name,
                muteWhenAutoplayBlocked: !0,
                captionManifest: h,
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
              children: u.trailer_name,
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
    className: m({ [j]: !r, [V]: r, [z]: !0 }),
    onClick: n,
    onMouseEnter: i,
    onMouseLeave: a,
    role: `presentation`,
    children: [
      (0, G.jsx)(`img`, { src: l(t), alt: t.trailer_name }),
      (0, G.jsx)(`button`, {
        type: `button`,
        className: H,
        "aria-label": _(`#Playback_Play_Tooltip`),
        children: (0, G.jsx)(p, {}),
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
