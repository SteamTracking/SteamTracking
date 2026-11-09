/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { Lt as t, ft as n, st as r } from "./libraries.js";
import { V as i } from "./storelink.js";
import {
  Et as a,
  M as o,
  Ot as s,
  ht as c,
  j as l,
  mt as u,
  pt as d,
  wt as f,
} from "./saletags.js";
import { r as p } from "./microtrailerdisplay.js";
import { r as m, t as h } from "./trailertitlebar.js";
import { t as g } from "./trailerstate.js";
import {
  Dc as _,
  Gb as v,
  Sc as y,
  Tc as b,
  Uy as x,
  Vv as S,
  Wl as C,
  Wu as w,
  Xb as T,
  Yl as E,
  Zb as D,
  ax as O,
  cn as k,
  dc as A,
  in as j,
  iy as M,
  kc as N,
  kv as P,
  md as F,
  od as I,
  pd as ee,
  ql as L,
  rr as R,
  rx as z,
  vl as B,
  vt as V,
  wc as te,
  wv as ne,
  xb as H,
  zb as U,
} from "./main.js";
var W = e(t()),
  G = `tYEw8zCMszM-`,
  re = `NCpHzW0zAz4-`,
  ie = `_8LSrWZvsPDA-`,
  ae = `bUpZq7n9J9M-`,
  oe = `qXndu6aUanY-`,
  K = n();
function q(e) {
  let {
    className: t,
    showPriorAsActive: n,
    count: r,
    selectedIndex: i,
    fnNavigate: a,
  } = e;
  return (0, K.jsx)(N, {
    "flow-children": `row`,
    className: y(G, t),
    children: Array.from({ length: r }).map((e, t) =>
      (0, K.jsx)(
        `div`,
        {
          className: y({ [re]: !0, [ie]: n && t < i, [ae]: t == i, [oe]: !!a }),
          onClick: a ? () => a(t) : void 0,
        },
        `dot_` + t,
      ),
    ),
  });
}
async function se(e, t) {
  let n = I(z.STORE_BASE_URL, t, O.country_code);
  return (await (await fetch(n)).json()).rgRecommendedTags || [];
}
function ce() {
  let e = M(),
    t = v.accountid;
  return r(le(e, t));
}
function le(e, t) {
  return {
    queryKey: ue(t),
    queryFn: async () => (t ? await se(e, t) : []),
    staleTime: 6e5,
  };
}
function ue(e) {
  return [`RecommendedTag`, e ?? 0];
}
var de = `_1wbMyxGnGy8-`,
  fe = `-D61WKs-ZxQ-`,
  pe = `XUHGRxAX2xY-`,
  me = `NH1MEWmeFeg-`,
  he = `Ef3pPDTc654-`,
  ge = `URoGnzLvPas-`,
  _e = `T-FsaU490gE-`,
  ve = `rMfcun2JSm8-`,
  ye = `YVFVQr81mPI-`,
  be = `atnaqSRaIew-`,
  xe = `LkfujtBIcfQ-`,
  Se = `RmSUNTNiH6o-`,
  Ce = `nVMhmfpEhl0-`,
  we = `D-0yhpQ3YbY-`,
  Te = `_2J2v30O7L10-`,
  Ee = `md8klOzvRXo-`,
  De = `G80uW2Mpt6o-`,
  Oe = `_4KA4WmZc39M-`,
  ke = `lnv5hodvZ5U-`;
function Ae(e, t) {
  W.useEffect(() => {
    if (!t || !t.onended || !e) return;
    let n = t.onended,
      r = setTimeout(() => {
        n();
      }, 6e3);
    return () => clearTimeout(r);
  }, [e, t]);
}
function je(e, t) {
  W.useEffect(() => {
    if (!e) return;
    let n = () => t(!0),
      r = () => t(!1);
    return (
      e.addEventListener(`play`, n),
      e.addEventListener(`pause`, r),
      () => {
        (e.removeEventListener(`play`, n), e.removeEventListener(`pause`, r));
      }
    );
  }, [t, e]);
}
function Me(e, t, n, r) {
  return W.useCallback(() => {
    e == 0
      ? t(!0)
      : e == 1 && n
        ? n.paused
          ? n.play()
          : n.pause()
        : e == 2 && r && (r.IsPaused() ? r.Play() : r.Pause());
  }, [e, n, r, t]);
}
function Ne(e, t, n, r, i, a) {
  let [o, s] = W.useState(!1);
  W.useEffect(() => {
    e && !o
      ? t == 1 && n && r
        ? (n.pause(), s(!0))
        : t == 2 && i && a && (i.Pause(), s(!0))
      : !e && o && (t == 1 && n ? n.play() : t == 2 && i && i.Play(), s(!1));
  }, [t, e, o, r, a, n, i]);
}
var J = new B(`TrailerAppVideo`),
  Y = `bGameHighlightAutoplayDisabled`;
function Pe(e) {
  let {
      id: t,
      bCurrentlyActive: n,
      autoPlayCookieName: r,
      trailerBaseID: i,
      showScreenshotInsteadOfMainCap: a,
      autoplayCheckboxPosition: o,
      refTogglePlayPause: s,
      bShowAOAutoPlayWarning: c,
      ...l
    } = e,
    [u, d] = W.useState(!1),
    [f, p] = W.useState(!1),
    m = ee(),
    g = E(t, i, !0, c),
    { data: v } = P(t),
    { data: S } = ne(t),
    C = _(t),
    w = (c ?? !0) && g && !g.all_ages && m == `masked`,
    T = F(),
    [O, k] = W.useState(!1),
    [A, j] = W.useState(0),
    [M, I] = (0, W.useState)(null),
    [L, R] = (0, W.useState)(null),
    { bCookieLoaded: z } = Ie(r, n, d),
    B = z;
  (W.useEffect(() => {
    n && B && u && !w && p(!0);
  }, [u, B, n, w]),
    W.useEffect(() => {
      w && f && u && T();
    }, [f, w, u, T]));
  let V = (e) => {
      (D(r ?? Y, String(!e), 3650), d(e), p(e));
    },
    U = Me(A, p, L, M);
  W.useEffect(() => {
    s && (s.current = U);
  }, [U, s]);
  let G =
    a && C && C.length > 0
      ? b(C[0], `600x338`)
      : S
        ? te(S, `main_capsule`)
        : void 0;
  return (0, K.jsxs)(N, {
    className: be,
    onMouseEnter: () => k(!0),
    onMouseLeave: () => k(!1),
    children: [
      (0, K.jsx)(`button`, {
        onClick: U,
        "aria-label": H.Localize(`#SaleTrailerCarousel_PlayPause`),
        children: (0, K.jsx)(`img`, {
          className: y(Oe, A != 0 && void 0),
          src: G,
          alt: ``,
        }),
      }),
      v &&
        (0, K.jsx)(Ve, {
          appID: v.appid,
          bAutoplayVideos: u,
          autoplayCheckboxPosition: o,
          fnSetAutoPlayVideos: V,
        }),
      (0, K.jsx)(h, {
        name: v?.name ?? ``,
        trailerCategory: g?.trailer_category,
        trailerDisplay: A,
        mouseOver: O,
      }),
      (0, K.jsx)(Le, {
        eTrailerDisplay: A,
        setTrailerDisplay: j,
        featuredTrailer: g,
        fnSetMainTrailer: I,
        fnSetMicroTrailer: R,
        loadedAndActive: B && n,
        setVideoShouldStart: p,
        bMouseOverVideo: O,
        id: t,
        fnTogglePlayPause: U,
        bAutoplayVideos: u,
        bVideoShouldStart: f,
        ...l,
      }),
      w &&
        u &&
        (0, K.jsxs)(`div`, {
          className: `pTTlmyp5hVo-`,
          children: [
            (0, K.jsx)(`div`, {
              className: `ERlbHjA197s-`,
              children: x(`#StoreTrailer_AOWarning_1`),
            }),
            (0, K.jsx)(`div`, {
              className: `ERlbHjA197s-`,
              children: x(`#StoreTrailer_AOWarning_2`),
            }),
          ],
        }),
    ],
  });
}
function Fe(e, t) {
  let [n, r] = W.useState(!1);
  return (
    W.useEffect(() => (e && (t(), r(!0)), () => r(!1)), [e, t]),
    { bCookieLoaded: n }
  );
}
function Ie(e, t, n) {
  return Fe(
    t,
    W.useCallback(() => {
      let t = T(e ?? Y);
      n(!(t && t.toLowerCase() === `true`));
    }, [e, n]),
  );
}
function Le(e) {
  let {
      id: t,
      featuredTrailer: n,
      bSkipMicroTrailer: r,
      nFadeRatio: i,
      fnPlayPause: a,
      bRequestPause: o,
      fnComplete: s,
      eTrailerDisplay: c,
      setTrailerDisplay: l,
      fnSetMainTrailer: u,
      fnSetMicroTrailer: d,
      loadedAndActive: f,
      setVideoShouldStart: m,
      fnTogglePlayPause: h,
      bAutoplayVideos: g,
      bVideoShouldStart: _,
    } = e,
    [v, y] = W.useState(!1),
    [b, x] = W.useState(!1),
    [S, C] = W.useState(!1),
    [w, T] = W.useState(!1),
    [E, D] = (0, W.useState)(null),
    [O, k] = (0, W.useState)(null),
    { data: j } = P(t),
    M = !!n;
  (W.useEffect(() => {
    let e = !1;
    (f && b && M && (e = c === 0 || (c === 1 && !S) || (c === 2 && !w)),
      y(e),
      a?.(g && e));
  }, [a, c, w, S, f, g, b, M]),
    je(O, C),
    W.useEffect(() => {
      _ ||
        (l(0),
        y(!1),
        x(!1),
        O && (O.pause(), (O.currentTime = 0)),
        E && (E.Pause(), E.SeekToStart()));
    }, [_, E, O, l]));
  let F = W.useRef(!1);
  (W.useEffect(() => {
    if (f && c === 0) {
      if ((x(!0), _)) {
        if (E) {
          (J.Debug(`Starting microtrailer`), l(1));
          let e = () => ze(F, l, E);
          r || !O
            ? e()
            : (C(!0), (O.onended = e), Be(O, `microtrailer`, () => C(!1)));
        }
      } else J.Debug(`Showing image`);
    }
  }, [f, c, r, _, s, l, E, O]),
    Ae(S, O),
    W.useEffect(() => {
      f || m(!1);
    }, [f, m]),
    Ne(!!o, c, O, S, E, w));
  let I = (0, W.useCallback)((e) => {
    (d(e), k(e));
  }, []);
  return !j || !j.visible || !n
    ? null
    : (0, K.jsxs)(K.Fragment, {
        children: [
          v &&
            (0, K.jsx)(N, {
              focusable: !0,
              onClick: h,
              className: `z39v7Mbdy8s-`,
              children: (0, K.jsx)(A, {}),
            }),
          n.microtrailer &&
            (0, K.jsx)(`video`, {
              className: X(!0, c),
              ref: I,
              preload: `auto`,
              playsInline: !0,
              muted: !0,
              onClick: h,
              children: (0, K.jsx)(p, { trailer: n }),
            }),
          (0, K.jsx)(Re, {
            trailer: n,
            onRefChange: (e) => {
              (D(e), u(e));
            },
            eTrailerDisplay: c,
            fadeRatio: i,
            onPlayPauseChange: T,
            onPlaybackEnd: s,
          }),
        ],
      });
}
function Re(e) {
  let {
      trailer: t,
      eTrailerDisplay: n,
      fadeRatio: r,
      onPlayPauseChange: i,
      onPlaybackEnd: a,
      onRefChange: o,
    } = e,
    [s, c] = (0, W.useState)(null);
  (0, W.useEffect)(() => {
    if (r !== void 0 && s) {
      let e = s.GetVolume() * r;
      s.SetVolume(e, !0);
    }
  }, [r, s]);
  let l = n != 2,
    u = X(!1, n),
    d = (0, W.useMemo)(() => L(t), [t]),
    f = (0, W.useCallback)((e) => {
      (c(e), o(e));
    }, []),
    p = (0, W.useCallback)(() => {
      i(!0);
    }, [i]);
  return (0, K.jsx)(g, {
    children: (0, K.jsx)(`div`, {
      className: u,
      children: (0, K.jsx)(m, {
        ref: f,
        dashManifests: d.rgDashTrailers,
        hlsManifest: d.rgHlsTrailers[0],
        captionManifest: C(t),
        screenshot: ``,
        altText: t.trailer_name,
        forcePause: l,
        muteWhenAutoplayBlocked: !0,
        onPlaybackEnd: a,
        onPlaybackStart: p,
        onPlayPauseChange: i,
      }),
    }),
  });
}
function ze(e, t, n) {
  e.current ||
    ((e.current = !0), J.Debug(`Starting main trailer`), t(2), n.Play());
}
function Be(e, t, n) {
  e.play().catch((e) => {
    (n(), J.Warning(`Failed to play ${t}: `, e));
  });
}
function X(e, t) {
  return y({
    [Se]: !0,
    [we]: t == 2,
    [Te]: t == 1,
    [Ee]: t == 0,
    [Ce]: e,
    [De]: !e,
  });
}
function Ve(e) {
  let {
      appID: t,
      bAutoplayVideos: n,
      fnSetAutoPlayVideos: r,
      autoplayCheckboxPosition: i,
    } = e,
    a = { [i || `top`]: 0 };
  return (0, K.jsx)(K.Fragment, {
    children: (0, K.jsx)(`div`, {
      onClick: (e) => {
        (e.preventDefault(), e.stopPropagation());
      },
      className: ke,
      children: (0, K.jsx)(
        R,
        {
          controlled: !0,
          checked: n,
          className: xe,
          style: a,
          label: V.Localize(`#StoreTrailer_AutoPlayVideos`),
          onChange: r,
        },
        t,
      ),
    }),
  });
}
function He(e) {
  let {
      appID: t,
      trailerBaseID: n,
      focused: r,
      skipMicroTrailer: a,
      autoPlayCookieName: o,
      showAOAutoPlayWarning: s,
      showScreenshotInsteadOfMainCap: c,
      fadeRatio: l,
      fnPlayPause: u,
      refTogglePlayPause: d,
      bRequestPause: f,
      fnComplete: p,
    } = e,
    m = i(t),
    { data: h } = P(m),
    { data: g } = S(m),
    { bIsIgnored: _ } = Z(t),
    { bIsWishlisted: v } = Q(t),
    { bIsWishlisted: b } = Q(h?.related_items?.parent_appid),
    [C, w] = k();
  return (0, K.jsxs)(N, {
    className: y(de, `AppVideoCtn`),
    children: [
      (0, K.jsx)(`div`, {
        className: y(fe, (v || b) && `cIdEvZnHFHs-`),
        children: x(`#Sale_OnWishlist`),
      }),
      C &&
        (0, K.jsx)(j, {
          eDisplay: w,
          className: `ojoUrkK-4ss-`,
          storeItemPlatform: g,
        }),
      (0, K.jsxs)(`div`, {
        className: pe,
        children: [
          (0, K.jsx)(Ue, { appID: t }),
          (0, K.jsx)(
            Pe,
            {
              id: m,
              trailerBaseID: n,
              bCurrentlyActive: r && !_,
              autoplayCheckboxPosition: `top`,
              autoPlayCookieName: o,
              bShowAOAutoPlayWarning: s,
              bSkipMicroTrailer: a,
              nFadeRatio: l,
              showScreenshotInsteadOfMainCap: c,
              fnPlayPause: u,
              refTogglePlayPause: d,
              bRequestPause: f,
              fnComplete: p,
            },
            t,
          ),
        ],
      }),
    ],
  });
}
function Z(e) {
  let t = o(e),
    n = w(),
    { mutateAsync: r } = l(e, !t, n);
  return { bIsIgnored: t, fnUpdateIgnored: r };
}
function Ue(e) {
  let { appID: t } = e,
    n = U(),
    { bIsIgnored: r, fnUpdateIgnored: i } = Z(t);
  return (0, K.jsx)(`div`, {
    className: y(me, r && `cIdEvZnHFHs-`),
    children: (0, K.jsxs)(`div`, {
      className: y(he, r && `cIdEvZnHFHs-`),
      children: [
        (0, K.jsx)(`div`, {
          className: ge,
          children: x(`#SaleTrailerCarousel_Ignored`),
        }),
        (0, K.jsx)(`div`, {
          className: _e,
          children: x(`#SaleTrailerCarousel_IgnoredConfirmation`),
        }),
        (0, K.jsxs)(N, {
          className: y(ye, ve),
          onClick: i,
          children: [
            n && (0, K.jsx)(d, { button: f.X, type: c.Light, size: u.Medium }),
            x(`#SaleTrailerCarousel_Undo`),
          ],
        }),
      ],
    }),
  });
}
function Q(e) {
  let t = !!s(e),
    n = w(),
    { mutate: r } = a(e, !t, n);
  return { bIsWishlisted: t, fnUpdateWishlist: r };
}
function We(e) {
  let { data: t } = ce(),
    n = W.useMemo(
      () => new Map((t || []).map((e) => e.tagid).map((e, t) => [e, t])),
      [t],
    ),
    r = W.useMemo(() => new Map(e.map((e, t) => [e, t])), [e]);
  return W.useMemo(
    () =>
      e
        .slice()
        .sort((e, t) =>
          n.has(e) && !n.has(t)
            ? -1
            : !n.has(e) && n.has(t)
              ? 1
              : n.has(e)
                ? n.get(e) - (n.get(t) ?? 0)
                : r.get(e) - r.get(t),
        ),
    [r, n, e],
  );
}
var Ge = `f6ytvVy3zPE-`,
  Ke = `dR6nviGksys-`,
  qe = `cHqcdcYARwo-`,
  Je = `_17ZH-YderNw-`,
  Ye = `E5dDz0rMQn4-`,
  Xe = `zvXifbes22U-`,
  Ze = `vyD3DBFIFUc-`,
  Qe = `n0EVijwEHbs-`,
  $e = `nlcoKfY7CS8-`,
  et = `f4g-Ypg3PLw-`,
  tt = `bz0gWfRA4vo-`,
  nt = `_7Nd6h2zRP0s-`,
  rt = `fjYnq0ifPfE-`,
  it = `kivEfnxaaMw-`,
  at = `HX5vY-Q3jvw-`,
  ot = `_0363ELeIufA-`,
  st = `_-6qCNJHr4Z0-`,
  ct = `Q3mOh913Yuw-`,
  lt = `k5tHhP269dw-`,
  ut = `HZwPEaho3zY-`,
  dt = `QGtGxOFRQ-w-`,
  ft = `ncEgLH6OqGs-`,
  pt = `_830jPtjL2hI-`,
  mt = `mRIBvQf4dkQ-`,
  ht = `M9g7Z8vAw60-`,
  gt = `GzKtbjDNI6o-`,
  _t = `j-P2Mge5-9c-`,
  vt = `Gcft-8jrlN4-`,
  yt = `Ud5K2f6NQFA-`,
  bt = `sRPPHGX-rq4-`,
  xt = `BxLuFJsRaUQ-`,
  St = `kjR6Qum8rRo-`,
  Ct = `d6gjRWs-cbs-`,
  wt = `_3ZYr-Efwvg8-`,
  Tt = `_5o5y8Ev8dws-`,
  Et = `sX1tnSkZalw-`,
  Dt = `imhq51q87gg-`,
  Ot = `yuYfj9fDIGo-`,
  kt = `a-wHbIOxF8U-`,
  At = `-gCgopjBEis-`,
  jt = `HpPBskZI7NE-`,
  Mt = `cxmUHct4Mx8-`,
  Nt = `aEOWko6pl2Y-`,
  Pt = `qc--Gu1VOvc-`,
  Ft = `GX9fmB9rByo-`,
  It = `_622HuKrUbVg-`,
  Lt = `jddjtbg0dIU-`,
  Rt = `V-tCdhirF0E-`,
  zt = `fCsooya3i5U-`,
  Bt = `naQ5--hS5ms-`,
  Vt = `_9hedOZJts3E-`,
  Ht = `RJg7ZyjyMZk-`,
  Ut = `VE8INnFzaCw-`,
  Wt = `enD9-bmgGhA-`,
  Gt = `_5spq1pOe-Sg-`,
  Kt = `O4OwJvlcb2o-`,
  qt = `_4dyYanLcAPg-`,
  Jt = `_9fAelXUNIEs-`,
  Yt = `-MiAmOisc-Q-`,
  Xt = `d7rsPMqqO4s-`,
  Zt = `GQ2d2HGUoPA-`,
  Qt = `ASoaeJU9Iow-`,
  $t = `Hw5Md-rtn-k-`,
  en = `VxsjojbvAqk-`,
  $ = `_7qeKWap2Gvc-`,
  tn = `nd1w3QliCfE-`,
  nn = `wdv04oGNxck-`,
  rn = `Vw-KXTl20bw-`,
  an = `RM7VDI2ue3Q-`,
  on = `X17vOunFzrk-`,
  sn = `pSJl-iNXTZw-`,
  cn = `oge6UIoFqiQ-`,
  ln = `x7yACsfXkig-`,
  un = `Wp-fkK6n2-I-`,
  dn = `sRQkEW1Z3IU-`,
  fn = `NyKGuXbQchs-`,
  pn = `u6sC2PhNZss-`,
  mn = {
    include_assets: !0,
    include_trailers: !0,
    include_basic_info: !0,
    include_tag_count: 20,
    include_release: !0,
    include_platforms: !0,
    include_screenshots: !0,
    include_reviews: !0,
  };
export {
  _t as $,
  sn as A,
  Wt as B,
  un as C,
  kt as Ct,
  et as D,
  Z as Dt,
  qt as E,
  We as Et,
  Ct as F,
  Ut as G,
  tt as H,
  Dt as I,
  Kt as J,
  ln as K,
  Tt as L,
  It as M,
  Lt as N,
  it as O,
  Q as Ot,
  Ft as P,
  ht as Q,
  Et as R,
  Ye as S,
  Gt as St,
  $e as T,
  He as Tt,
  Yt as U,
  Bt as V,
  cn as W,
  vt as X,
  Zt as Y,
  gt as Z,
  nt as _,
  zt as _t,
  rn as a,
  ut as at,
  Ge as b,
  Ot as bt,
  lt as c,
  Ze as ct,
  Qt as d,
  Rt as dt,
  nn as et,
  mt as f,
  At as ft,
  Vt as g,
  Ke as gt,
  st as h,
  pt as ht,
  bt as i,
  Jt as it,
  Pt as j,
  tn as k,
  q as kt,
  ct as l,
  en as lt,
  St as m,
  jt as mt,
  wt as n,
  fn as nt,
  at as o,
  pn as ot,
  ft as p,
  Nt as pt,
  xt as q,
  yt as r,
  rt,
  ot as s,
  dn as st,
  mn as t,
  Xt as tt,
  dt as u,
  $ as ut,
  Ht as v,
  an as vt,
  Je as w,
  Mt as wt,
  Xe as x,
  $t as xt,
  qe as y,
  on as yt,
  Qe as z,
};
