/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { Lt as t, ft as n, st as r } from "./libraries.js";
import { V as i } from "./storelink.js";
import {
  Ar as a,
  Er as o,
  M as s,
  Or as c,
  _r as l,
  gr as u,
  hr as d,
  j as f,
} from "./saletags.js";
import { r as p } from "./microtrailerdisplay.js";
import { r as m, t as h } from "./trailertitlebar.js";
import { t as g } from "./trailerstate.js";
import {
  Ac as _,
  Av as v,
  Bb as y,
  Cc as b,
  Ec as x,
  Gl as S,
  Gu as C,
  Hv as w,
  Jl as T,
  Kb as E,
  Oc as D,
  Qb as O,
  Sb as k,
  Tc as A,
  Tv as j,
  Wy as M,
  Xl as N,
  Zb as P,
  an as F,
  ay as I,
  fc as L,
  hd as ee,
  ir as R,
  ix as z,
  ln as B,
  md as te,
  ox as V,
  sd as H,
  vt as U,
  yl as W,
} from "./main.js";
var G = e(t()),
  K = `tYEw8zCMszM-`,
  ne = `NCpHzW0zAz4-`,
  re = `_8LSrWZvsPDA-`,
  ie = `bUpZq7n9J9M-`,
  ae = `qXndu6aUanY-`,
  q = n();
function oe(e) {
  let {
    className: t,
    showPriorAsActive: n,
    count: r,
    selectedIndex: i,
    fnNavigate: a,
  } = e;
  return (0, q.jsx)(_, {
    "flow-children": `row`,
    className: b(K, t),
    children: Array.from({ length: r }).map((e, t) =>
      (0, q.jsx)(
        `div`,
        {
          className: b({ [ne]: !0, [re]: n && t < i, [ie]: t == i, [ae]: !!a }),
          onClick: a ? () => a(t) : void 0,
        },
        `dot_` + t,
      ),
    ),
  });
}
async function se(e, t) {
  let n = H(z.STORE_BASE_URL, t, V.country_code);
  return (await (await fetch(n)).json()).rgRecommendedTags || [];
}
function ce() {
  let e = I(),
    t = E.accountid;
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
  G.useEffect(() => {
    if (!t || !t.onended || !e) return;
    let n = t.onended,
      r = setTimeout(() => {
        n();
      }, 6e3);
    return () => clearTimeout(r);
  }, [e, t]);
}
function je(e, t) {
  G.useEffect(() => {
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
  return G.useCallback(() => {
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
  let [o, s] = G.useState(!1);
  G.useEffect(() => {
    e && !o
      ? t == 1 && n && r
        ? (n.pause(), s(!0))
        : t == 2 && i && a && (i.Pause(), s(!0))
      : !e && o && (t == 1 && n ? n.play() : t == 2 && i && i.Play(), s(!1));
  }, [t, e, o, r, a, n, i]);
}
var J = new W(`TrailerAppVideo`),
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
    [u, d] = G.useState(!1),
    [f, p] = G.useState(!1),
    m = te(),
    g = N(t, i, !0, c),
    { data: y } = v(t),
    { data: S } = j(t),
    C = D(t),
    w = (c ?? !0) && g && !g.all_ages && m == `masked`,
    T = ee(),
    [E, P] = G.useState(!1),
    [F, I] = G.useState(0),
    [L, R] = (0, G.useState)(null),
    [z, B] = (0, G.useState)(null),
    { bCookieLoaded: V } = Ie(r, n, d),
    H = V;
  (G.useEffect(() => {
    n && H && u && !w && p(!0);
  }, [u, H, n, w]),
    G.useEffect(() => {
      w && f && u && T();
    }, [f, w, u, T]));
  let U = (e) => {
      (O(r ?? Y, String(!e), 3650), d(e), p(e));
    },
    W = Me(F, p, z, L);
  G.useEffect(() => {
    s && (s.current = W);
  }, [W, s]);
  let K =
    a && C && C.length > 0
      ? x(C[0], `600x338`)
      : S
        ? A(S, `main_capsule`)
        : void 0;
  return (0, q.jsxs)(_, {
    className: be,
    onMouseEnter: () => P(!0),
    onMouseLeave: () => P(!1),
    children: [
      (0, q.jsx)(`button`, {
        onClick: W,
        "aria-label": k.Localize(`#SaleTrailerCarousel_PlayPause`),
        children: (0, q.jsx)(`img`, {
          className: b(Oe, F != 0 && void 0),
          src: K,
          alt: ``,
        }),
      }),
      y &&
        (0, q.jsx)(Ve, {
          appID: y.appid,
          bAutoplayVideos: u,
          autoplayCheckboxPosition: o,
          fnSetAutoPlayVideos: U,
        }),
      (0, q.jsx)(h, {
        name: y?.name ?? ``,
        trailerCategory: g?.trailer_category,
        trailerDisplay: F,
        mouseOver: E,
      }),
      (0, q.jsx)(Le, {
        eTrailerDisplay: F,
        setTrailerDisplay: I,
        featuredTrailer: g,
        fnSetMainTrailer: R,
        fnSetMicroTrailer: B,
        loadedAndActive: H && n,
        setVideoShouldStart: p,
        bMouseOverVideo: E,
        id: t,
        fnTogglePlayPause: W,
        bAutoplayVideos: u,
        bVideoShouldStart: f,
        ...l,
      }),
      w &&
        u &&
        (0, q.jsxs)(`div`, {
          className: `pTTlmyp5hVo-`,
          children: [
            (0, q.jsx)(`div`, {
              className: `ERlbHjA197s-`,
              children: M(`#StoreTrailer_AOWarning_1`),
            }),
            (0, q.jsx)(`div`, {
              className: `ERlbHjA197s-`,
              children: M(`#StoreTrailer_AOWarning_2`),
            }),
          ],
        }),
    ],
  });
}
function Fe(e, t) {
  let [n, r] = G.useState(!1);
  return (
    G.useEffect(() => (e && (t(), r(!0)), () => r(!1)), [e, t]),
    { bCookieLoaded: n }
  );
}
function Ie(e, t, n) {
  return Fe(
    t,
    G.useCallback(() => {
      let t = P(e ?? Y);
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
      bVideoShouldStart: y,
    } = e,
    [b, x] = G.useState(!1),
    [S, C] = G.useState(!1),
    [w, T] = G.useState(!1),
    [E, D] = G.useState(!1),
    [O, k] = (0, G.useState)(null),
    [A, j] = (0, G.useState)(null),
    { data: M } = v(t),
    N = !!n;
  (G.useEffect(() => {
    let e = !1;
    (f && S && N && (e = c === 0 || (c === 1 && !w) || (c === 2 && !E)),
      x(e),
      a?.(g && e));
  }, [a, c, E, w, f, g, S, N]),
    je(A, T),
    G.useEffect(() => {
      y ||
        (l(0),
        x(!1),
        C(!1),
        A && (A.pause(), (A.currentTime = 0)),
        O && (O.Pause(), O.SeekToStart()));
    }, [y, O, A, l]));
  let P = G.useRef(!1);
  (G.useEffect(() => {
    if (f && c === 0) {
      if ((C(!0), y)) {
        if (O) {
          (J.Debug(`Starting microtrailer`), l(1));
          let e = () => ze(P, l, O);
          r || !A
            ? e()
            : (T(!0), (A.onended = e), Be(A, `microtrailer`, () => T(!1)));
        }
      } else J.Debug(`Showing image`);
    }
  }, [f, c, r, y, s, l, O, A]),
    Ae(w, A),
    G.useEffect(() => {
      f || m(!1);
    }, [f, m]),
    Ne(!!o, c, A, w, O, E));
  let F = (0, G.useCallback)((e) => {
    (d(e), j(e));
  }, []);
  return !M || !M.visible || !n
    ? null
    : (0, q.jsxs)(q.Fragment, {
        children: [
          b &&
            (0, q.jsx)(_, {
              focusable: !0,
              onClick: h,
              className: `z39v7Mbdy8s-`,
              children: (0, q.jsx)(L, {}),
            }),
          n.microtrailer &&
            (0, q.jsx)(`video`, {
              className: X(!0, c),
              ref: F,
              preload: `auto`,
              playsInline: !0,
              muted: !0,
              onClick: h,
              children: (0, q.jsx)(p, { trailer: n }),
            }),
          (0, q.jsx)(Re, {
            trailer: n,
            onRefChange: (e) => {
              (k(e), u(e));
            },
            eTrailerDisplay: c,
            fadeRatio: i,
            onPlayPauseChange: D,
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
    [s, c] = (0, G.useState)(null);
  (0, G.useEffect)(() => {
    if (r !== void 0 && s) {
      let e = s.GetVolume() * r;
      s.SetVolume(e, !0);
    }
  }, [r, s]);
  let l = n != 2,
    u = X(!1, n),
    d = (0, G.useMemo)(() => T(t), [t]),
    f = (0, G.useCallback)((e) => {
      (c(e), o(e));
    }, []),
    p = (0, G.useCallback)(() => {
      i(!0);
    }, [i]);
  return (0, q.jsx)(g, {
    children: (0, q.jsx)(`div`, {
      className: u,
      children: (0, q.jsx)(m, {
        ref: f,
        dashManifests: d.rgDashTrailers,
        hlsManifest: d.rgHlsTrailers[0],
        captionManifest: S(t),
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
  return b({
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
  return (0, q.jsx)(q.Fragment, {
    children: (0, q.jsx)(`div`, {
      onClick: (e) => {
        (e.preventDefault(), e.stopPropagation());
      },
      className: ke,
      children: (0, q.jsx)(
        R,
        {
          controlled: !0,
          checked: n,
          className: xe,
          style: a,
          label: U.Localize(`#StoreTrailer_AutoPlayVideos`),
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
    { data: h } = v(m),
    { data: g } = w(m),
    { bIsIgnored: y } = Z(t),
    { bIsWishlisted: x } = Q(t),
    { bIsWishlisted: S } = Q(h?.related_items?.parent_appid),
    [C, T] = B();
  return (0, q.jsxs)(_, {
    className: b(de, `AppVideoCtn`),
    children: [
      (0, q.jsx)(`div`, {
        className: b(fe, (x || S) && `cIdEvZnHFHs-`),
        children: M(`#Sale_OnWishlist`),
      }),
      C &&
        (0, q.jsx)(F, {
          eDisplay: T,
          className: `ojoUrkK-4ss-`,
          storeItemPlatform: g,
        }),
      (0, q.jsxs)(`div`, {
        className: pe,
        children: [
          (0, q.jsx)(Ue, { appID: t }),
          (0, q.jsx)(
            Pe,
            {
              id: m,
              trailerBaseID: n,
              bCurrentlyActive: r && !y,
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
  let t = s(e),
    n = C(),
    { mutateAsync: r } = f(e, !t, n);
  return { bIsIgnored: t, fnUpdateIgnored: r };
}
function Ue(e) {
  let { appID: t } = e,
    n = y(),
    { bIsIgnored: r, fnUpdateIgnored: i } = Z(t);
  return (0, q.jsx)(`div`, {
    className: b(me, r && `cIdEvZnHFHs-`),
    children: (0, q.jsxs)(`div`, {
      className: b(he, r && `cIdEvZnHFHs-`),
      children: [
        (0, q.jsx)(`div`, {
          className: ge,
          children: M(`#SaleTrailerCarousel_Ignored`),
        }),
        (0, q.jsx)(`div`, {
          className: _e,
          children: M(`#SaleTrailerCarousel_IgnoredConfirmation`),
        }),
        (0, q.jsxs)(_, {
          className: b(ye, ve),
          onClick: i,
          children: [
            n && (0, q.jsx)(d, { button: o.X, type: l.Light, size: u.Medium }),
            M(`#SaleTrailerCarousel_Undo`),
          ],
        }),
      ],
    }),
  });
}
function Q(e) {
  let t = !!a(e),
    n = C(),
    { mutate: r } = c(e, !t, n);
  return { bIsWishlisted: t, fnUpdateWishlist: r };
}
function We(e) {
  let { data: t } = ce(),
    n = G.useMemo(
      () => new Map((t || []).map((e) => e.tagid).map((e, t) => [e, t])),
      [t],
    ),
    r = G.useMemo(() => new Map(e.map((e, t) => [e, t])), [e]);
  return G.useMemo(
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
  oe as kt,
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
