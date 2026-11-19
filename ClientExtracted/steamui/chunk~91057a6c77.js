import { o as e } from "./chunk~f025431ab0.js?contenthash=C8f2gWku";
import {
  Bn as t,
  Ca as n,
  Ln as r,
  Ma as i,
  Na as a,
  Pn as o,
  Sa as s,
  Un as c,
  _t as l,
  ba as u,
  eo as d,
  ir as f,
  sn as p,
  tn as m,
  wa as h,
  wt as g,
  xa as _,
  xt as v,
  yt as y,
} from "./chunk~3126832f23.js?contenthash=Bx8rJGPC";
import {
  Au as b,
  Ds as x,
  M as S,
  Mu as C,
  Su as w,
  Vu as T,
  cu as E,
  hc as D,
  ku as O,
} from "./chunk~6780060d19.js?contenthash=qoFfnAP9";
import { t as k } from "./chunk~7f38fefeac.js?contenthash=B2NENpWg";
import { Dn as A, s as j } from "./chunk~1fa4b8f2ff.js?contenthash=DQ8gxgDF";
import {
  G as ee,
  a as M,
  f as N,
} from "./chunk~fac4c69429.js?contenthash=CKwkyCQ9";
import {
  $ as P,
  Ct as F,
  G as I,
  Ir as te,
  J as L,
  K as R,
  Lr as ne,
  M as re,
  Nr as ie,
  P as ae,
  Q as oe,
  Sn as se,
  Sr as ce,
  T as le,
  Tr as z,
  W as B,
  Xr as ue,
  _n as V,
  _r as de,
  bn as fe,
  cr as pe,
  d as H,
  dr as me,
  dt as he,
  ei as ge,
  et as _e,
  fr as U,
  gn as ve,
  gr as ye,
  ht as be,
  kr as xe,
  l as Se,
  mr as Ce,
  oi as we,
  pr as Te,
  tt as Ee,
  u as De,
  ur as Oe,
  yn as ke,
  yr as Ae,
  z as je,
} from "./chunk~6b8ddcaac8.js?contenthash=BqRs3VIz";
import { t as Me } from "./chunk~9302435e81.js?contenthash=DpC9ZrAj";
import {
  a as Ne,
  i as Pe,
  n as Fe,
  r as Ie,
  t as Le,
} from "./chunk~25756a3d72.js?contenthash=CyqjpKof";
import { t as Re } from "./chunk~25a6634263.js?contenthash=Cuq2ajP3";
import { t as W } from "./chunk~ede3e357a2.js?contenthash=DGMGRaFx";
import { C as ze, Q as Be, c as Ve } from "./library.js?contenthash=CVZWwsCP";
import { t as G } from "./chunk~103fa94b69.js?contenthash=BAq6YOYj";
import {
  a as He,
  i as Ue,
  o as We,
} from "./chunk~70c16cc80c.js?contenthash=NVzsXtAX";
import { t as K } from "./chunk~726542bc75.js?contenthash=CwUW-8V9";
import { s as q } from "./chunk~31ad425656.js?contenthash=hNwbTRKk";
import { t as Ge } from "./chunk~a7c5e71e12.js?contenthash=DtWBhhpP";
import { t as Ke } from "./chunk~92931c6310.js?contenthash=C5UJ3B2Y";
import { r as qe } from "./chunk~7b4b9eb713.js?contenthash=B8m-xg-T";
import {
  Ct as Je,
  Dt as Ye,
  Et as Xe,
  Ln as Ze,
  Mn as Qe,
  Pt as $e,
  St as et,
  Tt as J,
  cn as tt,
  fn as nt,
  gn as rt,
  hn as it,
  ln as at,
  mn as ot,
  pn as st,
  wt as ct,
  xt as lt,
  yn as ut,
} from "./chunk~5ad53110ba.js?contenthash=1ilwDMsN";
var dt = `rs5MCL6BI2A-`,
  ft = `iRWZX4LtE-Q-`,
  pt = `_5yccD-xlOTc-`,
  Y = e(d(), 1),
  X = Me();
function mt(e) {
  let { name: t, trailerCategory: n, trailerDisplay: r, mouseOver: i } = e,
    [a, o] = Y.useState(!1);
  if (
    (Y.useEffect(() => {
      r != 0 && o(!0);
    }, [r]),
    Y.useEffect(() => {
      if (i) {
        o(!0);
        return;
      }
      if (!a) return;
      let e = setTimeout(() => o(!1), 3e3);
      return () => clearTimeout(e);
    }, [a, i]),
    n == null || r == 0)
  )
    return;
  let s = r == 1 ? m.Localize(`#StoreTrailer_Title_TrailerPreview`) : Ie(n);
  return (0, X.jsx)(`div`, {
    className: k({ [dt]: !0, [pt]: a }),
    children: m.LocalizeReact(
      `#StoreTrailer_Title_Combiner`,
      (0, X.jsx)(`span`, { className: ft, children: s }),
      t,
    ),
  });
}
var ht = e(ze()),
  gt = `tYEw8zCMszM-`,
  _t = `NCpHzW0zAz4-`,
  vt = `_8LSrWZvsPDA-`,
  yt = `bUpZq7n9J9M-`,
  bt = `qXndu6aUanY-`;
function xt(e) {
  let {
    className: t,
    showPriorAsActive: n,
    count: r,
    selectedIndex: i,
    fnNavigate: a,
  } = e;
  return (0, X.jsx)(S, {
    "flow-children": `row`,
    className: k(gt, t),
    children: Array.from({ length: r }).map((e, t) =>
      (0, X.jsx)(
        `div`,
        {
          className: k({ [_t]: !0, [vt]: n && t < i, [yt]: t == i, [bt]: !!a }),
          onClick: a ? () => a(t) : void 0,
        },
        `dot_` + t,
      ),
    ),
  });
}
function St(e) {
  let { tagid: n, language: r = t.LANGUAGE } = e;
  return xe(n, r) || String(n);
}
function Ct(e, n = t.LANGUAGE) {
  let r = xe(e, n);
  return `${t.STORE_BASE_URL}tags/${p(n)}/${r}`;
}
function wt(e) {
  let { tagID: t, className: n } = e,
    r = U(Ct(t));
  return (0, X.jsx)(N, {
    className: n,
    href: r,
    role: `listitem`,
    children: (0, X.jsx)(St, { tagid: t }),
  });
}
async function Tt(e, t) {
  let n = ie(i.STORE_BASE_URL, t, a.country_code);
  return (await (await fetch(n)).json()).rgRecommendedTags || [];
}
function Et() {
  let e = Ve(),
    t = c.accountid;
  return W(Dt(e, t));
}
function Dt(e, t) {
  return {
    queryKey: Ot(t),
    queryFn: async () => (t ? await Tt(e, t) : []),
    staleTime: 6e5,
  };
}
function Ot(e) {
  return [`RecommendedTag`, e ?? 0];
}
var kt = `_1wbMyxGnGy8-`,
  At = `-D61WKs-ZxQ-`,
  jt = `XUHGRxAX2xY-`,
  Mt = `NH1MEWmeFeg-`,
  Nt = `Ef3pPDTc654-`,
  Pt = `URoGnzLvPas-`,
  Ft = `T-FsaU490gE-`,
  It = `rMfcun2JSm8-`,
  Lt = `YVFVQr81mPI-`,
  Rt = `atnaqSRaIew-`,
  zt = `LkfujtBIcfQ-`,
  Bt = `RmSUNTNiH6o-`,
  Vt = `nVMhmfpEhl0-`,
  Ht = `D-0yhpQ3YbY-`,
  Ut = `_2J2v30O7L10-`,
  Wt = `md8klOzvRXo-`,
  Gt = `G80uW2Mpt6o-`,
  Kt = `_4KA4WmZc39M-`,
  qt = `lnv5hodvZ5U-`;
function Jt(e, t) {
  Y.useEffect(() => {
    if (!t || !t.onended || !e) return;
    let n = t.onended,
      r = setTimeout(() => {
        n();
      }, 6e3);
    return () => clearTimeout(r);
  }, [e, t]);
}
function Yt(e, t) {
  Y.useEffect(() => {
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
function Xt(e, t, n, r) {
  return Y.useCallback(() => {
    e == 0
      ? t(!0)
      : e == 1 && n
        ? n.paused
          ? n.play()
          : n.pause()
        : e == 2 && r && (r.IsPaused() ? r.Play() : r.Pause());
  }, [e, n, r, t]);
}
function Zt(e, t, n, r, i, a) {
  let [o, s] = Y.useState(!1);
  Y.useEffect(() => {
    e && !o
      ? t == 1 && n && r
        ? (n.pause(), s(!0))
        : t == 2 && i && a && (i.Pause(), s(!0))
      : !e && o && (t == 1 && n ? n.play() : t == 2 && i && i.Play(), s(!1));
  }, [t, e, o, r, a, n, i]);
}
var Qt = new G(`TrailerAppVideo`),
  $t = `bGameHighlightAutoplayDisabled`;
function en(e) {
  let {
      id: t,
      bCurrentlyActive: n,
      autoPlayCookieName: r,
      trailerBaseID: i,
      showScreenshotInsteadOfMainCap: a,
      autoplayCheckboxPosition: o,
      refTogglePlayPause: s,
      bShowAOAutoPlayWarning: c,
      ...u
    } = e,
    [d, f] = Y.useState(!1),
    [p, h] = Y.useState(!1),
    g = te(),
    v = ce(t, i, !0, c),
    { data: y } = ge(t),
    { data: b } = ue(t),
    x = se(t),
    C = (c ?? !0) && v && !v.all_ages && g == `masked`,
    w = ne(),
    [T, E] = Y.useState(!1),
    [D, O] = Y.useState(0),
    [A, j] = (0, Y.useState)(null),
    [ee, M] = (0, Y.useState)(null),
    { bCookieLoaded: N } = nn(r, n, f),
    P = N;
  (Y.useEffect(() => {
    n && P && d && !C && h(!0);
  }, [d, P, n, C]),
    Y.useEffect(() => {
      C && p && d && w();
    }, [p, C, d, w]));
  let F = (e) => {
      (_(r ?? $t, String(!e), 3650), f(e), h(e));
    },
    I = Xt(D, h, ee, A);
  Y.useEffect(() => {
    s && (s.current = I);
  }, [I, s]);
  let L =
    a && x && x.length > 0
      ? fe(x[0], `600x338`)
      : b
        ? ke(b, `main_capsule`)
        : void 0;
  return (0, X.jsxs)(S, {
    className: Rt,
    onMouseEnter: () => E(!0),
    onMouseLeave: () => E(!1),
    children: [
      (0, X.jsx)(`button`, {
        onClick: I,
        "aria-label": m.Localize(`#SaleTrailerCarousel_PlayPause`),
        children: (0, X.jsx)(`img`, {
          className: k(Kt, D != 0 && void 0),
          src: L,
          alt: ``,
        }),
      }),
      y &&
        (0, X.jsx)(ln, {
          appID: y.appid,
          bAutoplayVideos: d,
          autoplayCheckboxPosition: o,
          fnSetAutoPlayVideos: F,
        }),
      (0, X.jsx)(mt, {
        name: y?.name ?? ``,
        trailerCategory: v?.trailer_category,
        trailerDisplay: D,
        mouseOver: T,
      }),
      (0, X.jsx)(rn, {
        eTrailerDisplay: D,
        setTrailerDisplay: O,
        featuredTrailer: v,
        fnSetMainTrailer: j,
        fnSetMicroTrailer: M,
        loadedAndActive: P && n,
        setVideoShouldStart: h,
        bMouseOverVideo: T,
        id: t,
        fnTogglePlayPause: I,
        bAutoplayVideos: d,
        bVideoShouldStart: p,
        ...u,
      }),
      C &&
        d &&
        (0, X.jsxs)(`div`, {
          className: `pTTlmyp5hVo-`,
          children: [
            (0, X.jsx)(`div`, {
              className: `ERlbHjA197s-`,
              children: l(`#StoreTrailer_AOWarning_1`),
            }),
            (0, X.jsx)(`div`, {
              className: `ERlbHjA197s-`,
              children: l(`#StoreTrailer_AOWarning_2`),
            }),
          ],
        }),
    ],
  });
}
function tn(e, t) {
  let [n, r] = Y.useState(!1);
  return (
    Y.useEffect(() => (e && (t(), r(!0)), () => r(!1)), [e, t]),
    { bCookieLoaded: n }
  );
}
function nn(e, t, n) {
  return tn(
    t,
    Y.useCallback(() => {
      let t = u(e ?? $t);
      n(!(t && t.toLowerCase() === `true`));
    }, [e, n]),
  );
}
function rn(e) {
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
      setVideoShouldStart: p,
      fnTogglePlayPause: m,
      bAutoplayVideos: h,
      bVideoShouldStart: g,
    } = e,
    [_, v] = Y.useState(!1),
    [y, b] = Y.useState(!1),
    [x, C] = Y.useState(!1),
    [T, E] = Y.useState(!1),
    [D, O] = (0, Y.useState)(null),
    [k, A] = (0, Y.useState)(null),
    { data: j } = ge(t),
    ee = !!n;
  (Y.useEffect(() => {
    let e = !1;
    (f && y && ee && (e = c === 0 || (c === 1 && !x) || (c === 2 && !T)),
      v(e),
      a?.(h && e));
  }, [a, c, T, x, f, h, y, ee]),
    Yt(k, C),
    Y.useEffect(() => {
      g ||
        (l(0),
        v(!1),
        b(!1),
        k && (k.pause(), (k.currentTime = 0)),
        D && (D.Pause(), D.SeekToStart()));
    }, [g, D, k, l]));
  let M = Y.useRef(!1);
  (Y.useEffect(() => {
    if (f && c === 0) {
      if ((b(!0), g)) {
        if (D) {
          (Qt.Debug(`Starting microtrailer`), l(1));
          let e = () => on(M, l, D);
          r || !k
            ? e()
            : (C(!0), (k.onended = e), sn(k, `microtrailer`, () => C(!1)));
        }
      } else Qt.Debug(`Showing image`);
    }
  }, [f, c, r, g, s, l, D, k]),
    Jt(x, k),
    Y.useEffect(() => {
      f || p(!1);
    }, [f, p]),
    Zt(!!o, c, k, x, D, T));
  let N = (0, Y.useCallback)((e) => {
    (d(e), A(e));
  }, []);
  return !j || !j.visible || !n
    ? null
    : (0, X.jsxs)(X.Fragment, {
        children: [
          _ &&
            (0, X.jsx)(S, {
              focusable: !0,
              onClick: m,
              className: `z39v7Mbdy8s-`,
              children: (0, X.jsx)(w, {}),
            }),
          n.microtrailer &&
            (0, X.jsx)(`video`, {
              className: cn(!0, c),
              ref: N,
              preload: `auto`,
              playsInline: !0,
              muted: !0,
              onClick: m,
              children: (0, X.jsx)(F, { trailer: n }),
            }),
          (0, X.jsx)(an, {
            trailer: n,
            onRefChange: (e) => {
              (O(e), u(e));
            },
            eTrailerDisplay: c,
            fadeRatio: i,
            onPlayPauseChange: E,
            onPlaybackEnd: s,
          }),
        ],
      });
}
function an(e) {
  let {
      trailer: t,
      eTrailerDisplay: n,
      fadeRatio: r,
      onPlayPauseChange: i,
      onPlaybackEnd: a,
      onRefChange: o,
    } = e,
    [s, c] = (0, Y.useState)(null);
  (0, Y.useEffect)(() => {
    if (r !== void 0 && s) {
      let e = s.GetVolume() * r;
      s.SetVolume(e, !0);
    }
  }, [r, s]);
  let l = n != 2,
    u = cn(!1, n),
    d = (0, Y.useMemo)(() => Ae(t), [t]),
    f = (0, Y.useCallback)((e) => {
      (c(e), o(e));
    }, []),
    p = (0, Y.useCallback)(() => {
      i(!0);
    }, [i]);
  return (0, X.jsx)(yn, {
    children: (0, X.jsx)(`div`, {
      className: u,
      children: (0, X.jsx)(Fe, {
        ref: f,
        dashManifests: d.rgDashTrailers,
        hlsManifest: d.rgHlsTrailers[0],
        captionManifest: de(t),
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
function on(e, t, n) {
  e.current ||
    ((e.current = !0), Qt.Debug(`Starting main trailer`), t(2), n.Play());
}
function sn(e, t, n) {
  e.play().catch((e) => {
    (n(), Qt.Warning(`Failed to play ${t}: `, e));
  });
}
function cn(e, t) {
  return k({
    [Bt]: !0,
    [Ht]: t == 2,
    [Ut]: t == 1,
    [Wt]: t == 0,
    [Vt]: e,
    [Gt]: !e,
  });
}
function ln(e) {
  let {
      appID: t,
      bAutoplayVideos: n,
      fnSetAutoPlayVideos: r,
      autoplayCheckboxPosition: i,
    } = e,
    a = { [i || `top`]: 0 };
  return (0, X.jsx)(X.Fragment, {
    children: (0, X.jsx)(`div`, {
      onClick: (e) => {
        (e.preventDefault(), e.stopPropagation());
      },
      className: qt,
      children: (0, X.jsx)(
        A,
        {
          controlled: !0,
          checked: n,
          className: zt,
          style: a,
          label: Pe.Localize(`#StoreTrailer_AutoPlayVideos`),
          onChange: r,
        },
        t,
      ),
    }),
  });
}
function un(e) {
  let {
      appID: t,
      trailerBaseID: n,
      focused: r,
      skipMicroTrailer: i,
      autoPlayCookieName: a,
      showAOAutoPlayWarning: o,
      showScreenshotInsteadOfMainCap: s,
      fadeRatio: c,
      fnPlayPause: u,
      refTogglePlayPause: d,
      bRequestPause: f,
      fnComplete: p,
    } = e,
    m = z(t),
    { data: h } = ge(m),
    { data: g } = we(m),
    { bIsIgnored: _ } = dn(t),
    { bIsWishlisted: v } = pn(t),
    { bIsWishlisted: y } = pn(h?.related_items?.parent_appid),
    [b, x] = be();
  return (0, X.jsxs)(S, {
    className: k(kt, `AppVideoCtn`),
    children: [
      (0, X.jsx)(`div`, {
        className: k(At, (v || y) && `cIdEvZnHFHs-`),
        children: l(`#Sale_OnWishlist`),
      }),
      b &&
        (0, X.jsx)(he, {
          eDisplay: x,
          className: `ojoUrkK-4ss-`,
          storeItemPlatform: g,
        }),
      (0, X.jsxs)(`div`, {
        className: jt,
        children: [
          (0, X.jsx)(fn, { appID: t }),
          (0, X.jsx)(
            en,
            {
              id: m,
              trailerBaseID: n,
              bCurrentlyActive: r && !_,
              autoplayCheckboxPosition: `top`,
              autoPlayCookieName: a,
              bShowAOAutoPlayWarning: o,
              bSkipMicroTrailer: i,
              nFadeRatio: c,
              showScreenshotInsteadOfMainCap: s,
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
function dn(e) {
  let t = De(e),
    n = Te(),
    { mutateAsync: r } = Se(e, !t, n);
  return { bIsIgnored: t, fnUpdateIgnored: r };
}
function fn(e) {
  let { appID: t } = e,
    n = o(),
    { bIsIgnored: r, fnUpdateIgnored: i } = dn(t);
  return (0, X.jsx)(`div`, {
    className: k(Mt, r && `cIdEvZnHFHs-`),
    children: (0, X.jsxs)(`div`, {
      className: k(Nt, r && `cIdEvZnHFHs-`),
      children: [
        (0, X.jsx)(`div`, {
          className: Pt,
          children: l(`#SaleTrailerCarousel_Ignored`),
        }),
        (0, X.jsx)(`div`, {
          className: Ft,
          children: l(`#SaleTrailerCarousel_IgnoredConfirmation`),
        }),
        (0, X.jsxs)(S, {
          className: k(Lt, It),
          onClick: i,
          children: [
            n && (0, X.jsx)(B, { button: L.X, type: R.Light, size: I.Medium }),
            l(`#SaleTrailerCarousel_Undo`),
          ],
        }),
      ],
    }),
  });
}
function pn(e) {
  let t = !!P(e),
    n = Te(),
    { mutate: r } = oe(e, !t, n);
  return { bIsWishlisted: t, fnUpdateWishlist: r };
}
function mn(e) {
  let { data: t } = Et(),
    n = Y.useMemo(
      () => new Map((t || []).map((e) => e.tagid).map((e, t) => [e, t])),
      [t],
    ),
    r = Y.useMemo(() => new Map(e.map((e, t) => [e, t])), [e]);
  return Y.useMemo(
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
var hn = {
    name: `trailerPrefs`,
    options: { path: `/`, secure: !0, maxAge: 2592e6 },
    preferenceControls: { isTechnicallyNecessary: !0 },
  },
  Z = { flVolume: 0.8, bMuted: !0 };
function gn(e) {
  return e.flVolume === Z.flVolume && e.bMuted === Z.bMuted;
}
function _n() {
  try {
    let e = He(hn);
    if (!e) return Z;
    let t = JSON.parse(e);
    return {
      flVolume: typeof t.flVolume == `number` ? t.flVolume : Z.flVolume,
      bMuted: typeof t.bMuted == `boolean` ? t.bMuted : Z.bMuted,
    };
  } catch {
    return Z;
  }
}
function vn(e) {
  gn(e) || Object.keys(e).length == 0 ? Ue(hn) : We(hn, JSON.stringify(e));
}
function yn(e) {
  let { children: t } = e,
    [n, r] = (0, Y.useState)(() => _n());
  return (
    (0, Y.useEffect)(() => {
      vn(n);
    }, [n]),
    (0, X.jsx)(Ne, {
      playerVolume: n.flVolume,
      setPlayerVolume: (e) => r((t) => ({ ...t, flVolume: e })),
      audioMuted: n.bMuted,
      setAudioMuted: (e) => r((t) => ({ ...t, bMuted: e })),
      children: t,
    })
  );
}
function bn(e) {
  return [`AppRelevanceStore`, `FriendsRecommended`, e];
}
function xn(e) {
  let t = Ve();
  return W({ ...Sn(t, e), enabled: c.logged_in });
}
function Sn(e, t) {
  return { queryKey: bn(t), queryFn: () => En(e, t) };
}
function Cn(e) {
  return W({
    queryKey: [`AppRelevanceStore`, `StoreRelevance`, e],
    queryFn: () => Dn(e),
    enabled: c.logged_in,
  });
}
function wn() {
  return et(`App Relevance Store Top Sellers`, {
    sort: 11,
    start: 0,
    count: 100,
  });
}
function Tn() {
  let { data: e } = wn();
  return e;
}
async function En(e, t) {
  let n = f.Init(tt);
  n.Body().set_appid(t);
  let r = await at.GetFriendsRecommendedApp(e, n),
    i = r.GetEResult();
  if (i == 1) return r.Body().toObject();
  throw `Error ${i} failed to call GetFriendsRecommendedApp ${t}`;
}
async function Dn(e) {
  let n = { appid: e },
    r = { arrSimilarPlayedApps: [], bRecommendedByIR: !1 },
    i = (
      await ht.default.get(
        `${t.STORE_BASE_URL}explore/ajaxgetstorerelevancedata`,
        { params: n, withCredentials: !0, timeout: 1e4 },
      )
    ).data;
  return (
    i &&
      i.success == 1 &&
      (i.results.similar_played_apps &&
        (r.arrSimilarPlayedApps = i.results.similar_played_apps.map((e) => ({
          appid: e.appid,
          playtimeForever: e.playtime_forever,
        }))),
      i.results.recommended_by_ir && (r.bRecommendedByIR = !0)),
    r
  );
}
var On = `f6ytvVy3zPE-`,
  kn = `dR6nviGksys-`,
  An = `cHqcdcYARwo-`,
  jn = `_17ZH-YderNw-`,
  Mn = `E5dDz0rMQn4-`,
  Nn = `zvXifbes22U-`,
  Pn = `vyD3DBFIFUc-`,
  Fn = `n0EVijwEHbs-`,
  In = `nlcoKfY7CS8-`,
  Ln = `f4g-Ypg3PLw-`,
  Rn = `bz0gWfRA4vo-`,
  zn = `_7Nd6h2zRP0s-`,
  Bn = `fjYnq0ifPfE-`,
  Vn = `kivEfnxaaMw-`,
  Hn = `HX5vY-Q3jvw-`,
  Un = `_0363ELeIufA-`,
  Wn = `HZwPEaho3zY-`,
  Gn = `QGtGxOFRQ-w-`,
  Kn = `ncEgLH6OqGs-`,
  qn = `_830jPtjL2hI-`,
  Jn = `mRIBvQf4dkQ-`,
  Yn = `GzKtbjDNI6o-`,
  Xn = `j-P2Mge5-9c-`,
  Zn = `Gcft-8jrlN4-`,
  Qn = `BxLuFJsRaUQ-`,
  $n = `d6gjRWs-cbs-`,
  er = `_5o5y8Ev8dws-`,
  tr = `sX1tnSkZalw-`,
  nr = `imhq51q87gg-`,
  rr = `yuYfj9fDIGo-`,
  ir = `-gCgopjBEis-`,
  ar = `HpPBskZI7NE-`,
  or = `cxmUHct4Mx8-`,
  sr = `aEOWko6pl2Y-`,
  cr = `qc--Gu1VOvc-`,
  lr = `GX9fmB9rByo-`,
  ur = `_622HuKrUbVg-`,
  dr = `jddjtbg0dIU-`,
  fr = `fCsooya3i5U-`,
  pr = `naQ5--hS5ms-`,
  mr = `_9hedOZJts3E-`,
  hr = `O4OwJvlcb2o-`,
  gr = `_9fAelXUNIEs-`,
  _r = `-MiAmOisc-Q-`,
  vr = `ASoaeJU9Iow-`,
  yr = `VxsjojbvAqk-`,
  br = `_7qeKWap2Gvc-`,
  xr = `wdv04oGNxck-`,
  Sr = `Vw-KXTl20bw-`,
  Cr = `pSJl-iNXTZw-`,
  wr = `oge6UIoFqiQ-`,
  Tr = `sRQkEW1Z3IU-`,
  Er = `NyKGuXbQchs-`,
  Dr = `u6sC2PhNZss-`,
  Or = new G(`AppRelevance`).Debug;
function kr(e, t) {
  let n = (0, Y.useMemo)(
    () => H.Get().GetRecommendingCuratorsForApp(e) || [],
    [e],
  );
  return W({
    queryKey: [`RecommendingCurators`, e],
    queryFn: () =>
      Promise.all(n?.map((e) => Je.LoadClanInfoForClanAccountID(e))),
    enabled: !!t && n && n.length > 0,
  });
}
function Ar(e) {
  let {
      appID: t,
      bShowAvatars: n,
      storeItem: r,
      bHideDescription: a,
      bShowCuratorInfo: o = !1,
      bShowCreatorInfo: s,
    } = e,
    c = nt(t),
    u = xn(t),
    d = Cn(t),
    f = Tn(),
    p = W({
      queryKey: [`SimilarPlayedAppsLoad`, t],
      queryFn: () =>
        Ce.Get().QueueMultipleAppRequests(
          d.data.arrSimilarPlayedApps?.map((e) => e.appid),
          { include_basic_info: !0, include_assets: !0 },
        ),
      enabled: d.isSuccess,
    }),
    m = kr(t, o),
    h = (0, Y.useMemo)(() => {
      let e = [];
      return (
        r &&
          ((e = e.concat(
            r
              .GetAllFranchiseCreatorClans()
              .map((e) => ({ nAccountID: e, type: `franchise` })),
          )),
          (e = e.concat(
            r
              .GetAllDeveloperCreatorClans()
              .map((e) => ({ nAccountID: e, type: `developer` })),
          )),
          (e = e.concat(
            r
              .GetAllPublisherCreatorClans()
              .map((e) => ({ nAccountID: e, type: `publisher` })),
          )),
          (e = e.filter((e) => H.Get().BIsFollowingCurator(e.nAccountID)))),
        e
      );
    }, [r]),
    g = W({
      queryKey: [`FollowedCreators`, t],
      queryFn: () =>
        Je.LoadClanInfoForClanAccountID(h[0].nAccountID).then((e) => ({
          clanInfo: e,
          type: h[0].type,
        })),
      enabled: !!s && h && h.length > 0,
    }),
    _ = W({
      queryKey: [`PlayerSummaries`, t, n],
      queryFn: async () => {
        let e = [],
          t = [],
          r = [],
          a = n ? 10 : 1;
        for (
          let t = 0;
          u.data.accountids_recommended &&
          t < u.data.accountids_recommended.length &&
          t < a;
          t++
        ) {
          let n = Re.InitFromAccountID(
            u.data.accountids_recommended[t],
            i.EUNIVERSE,
          );
          e.push(n.ConvertTo64BitString());
        }
        for (
          let e = 0;
          c.data.in_wishlist && e < c.data.in_wishlist.length && e < a;
          e++
        ) {
          let n = new Re(c.data.in_wishlist[e].steamid);
          t.push(n.ConvertTo64BitString());
        }
        for (let e = 0; c.data.owns && e < c.data.owns.length && e < a; e++) {
          let t = new Re(c.data.owns[e].steamid);
          r.push(t.ConvertTo64BitString());
        }
        return {
          rgRecommendedFriends: e,
          rgWishlistFriends: t,
          rgOwnedFriends: r,
        };
      },
      enabled: u.isSuccess && c.isSuccess,
    });
  if (
    !f ||
    p.isLoading ||
    d.isLoading ||
    u.isLoading ||
    c.isLoading ||
    m.isLoading ||
    g.isLoading ||
    _.isLoading
  )
    return (0, X.jsx)(Be, { size: `medium`, position: `center` });
  let y = [];
  d.isSuccess &&
    d.data.arrSimilarPlayedApps &&
    d.data.arrSimilarPlayedApps.slice(0, 2).forEach((e) => {
      let n = Ce.Get().GetApp(e.appid);
      n
        ? y.push(
            (0, X.jsx)(
              Nr,
              { lifetimePlaytime: e.playtimeForever, storeItem: n },
              e.appid,
            ),
          )
        : console.error(`Failed to load store data `, t);
    });
  let b = f.GetItemIDs().findIndex((e) => e.appid === t),
    x = d.data?.bRecommendedByIR,
    S = y.length > 0,
    C = c.data?.owns?.length,
    w = c.data?.in_wishlist?.length,
    T = u.data?.accountids_recommended?.length,
    E = 0;
  return (
    C > 0 && E++,
    w > 0 && E++,
    T > 0 && E++,
    x && E++,
    b >= 0 && E++,
    y.length > 0 && E++,
    o && m?.data?.length && E++,
    s && g.data && E++,
    Or(`FriendsOwned: `, C, ` FriendsWishlisted: `, w, `cRecommended: `, T),
    (0, X.jsxs)(X.Fragment, {
      children: [
        E > 0 &&
          (0, X.jsxs)(X.Fragment, {
            children: [
              (0, X.jsx)(`div`, {
                className: `Hw5Md-rtn-k-`,
                children: l(`#DiscoveryQueue_WhyRelevant`),
              }),
              (0, X.jsxs)(`div`, {
                role: `list`,
                className: `M9g7Z8vAw60-`,
                children: [
                  S &&
                    (0, X.jsx)(Q, {
                      header: l(`#DiscoveryQueue_SimilarGames`),
                      children: (0, X.jsx)(`div`, {
                        className: `d7rsPMqqO4s-`,
                        children: y,
                      }),
                    }),
                  o &&
                    !!m?.data?.length &&
                    (0, X.jsx)(Q, {
                      header: l(`#ContentHub_Recommendation_Curators`),
                      children: (0, X.jsx)(`div`, {
                        className: k(`d7rsPMqqO4s-`, `GQ2d2HGUoPA-`),
                        children: m.data
                          .filter(Boolean)
                          .map((e) =>
                            (0, X.jsx)(
                              Mr,
                              { curator: e },
                              `curator_` + e.clanAccountID,
                            ),
                          ),
                      }),
                    }),
                  s && !!g.data && (0, X.jsx)(jr, { creatorInfo: g.data }),
                  b >= 0 &&
                    (0, X.jsx)(Q, {
                      header: v(
                        `#DiscoveryQueue_TopSellers`,
                        K(b + 1),
                        (0, X.jsx)(`span`, { className: `wdv04oGNxck-` }),
                      ),
                    }),
                  x &&
                    !S &&
                    (0, X.jsx)(Q, {
                      header: l(`#DiscoveryQueue_RecommendedByIR`),
                    }),
                  (0, X.jsx)(Pr, {
                    bShowAvatars: n,
                    count: u.data?.accountids_recommended?.length,
                    locToken: `#DiscoveryQueue_FriendsRecommended`,
                    arrSteamIDs: _.data?.rgRecommendedFriends,
                  }),
                  (0, X.jsx)(Pr, {
                    bShowAvatars: n,
                    count: c.data?.owns?.length,
                    locToken: `#DiscoveryQueue_FriendsOwned`,
                    arrSteamIDs: _.data?.rgOwnedFriends,
                  }),
                  (0, X.jsx)(Pr, {
                    bShowAvatars: n,
                    count: c.data?.in_wishlist?.length,
                    locToken: `#DiscoveryQueue_FriendsWishlisted`,
                    arrSteamIDs: _.data?.rgWishlistFriends,
                  }),
                ],
              }),
            ],
          }),
        !a || E == 0
          ? (0, X.jsx)(`div`, {
              className: k(Sr, E && void 0),
              children: r.GetShortDescription(),
            })
          : (0, X.jsx)(`div`, { "aria-label": r.GetShortDescription() }),
      ],
    })
  );
}
function jr(e) {
  let { creatorInfo: t } = e;
  if (!t) return null;
  let n;
  switch (t.type) {
    case `publisher`:
      n = `#ContentHub_Recommendation_FollowedPublisher`;
      break;
    case `developer`:
      n = `#ContentHub_Recommendation_FollowedDeveloper`;
      break;
    case `franchise`:
      n = `#ContentHub_Recommendation_FollowedFranchise`;
  }
  return n
    ? (0, X.jsx)(Q, {
        header: g(
          n,
          (0, X.jsx)(`span`, {
            className: xr,
            children: t.clanInfo?.group_name,
          }),
        ),
      })
    : null;
}
function Mr(e) {
  let { curator: t } = e,
    { creatorHome: n } = qe(t?.clanAccountID);
  return !t || !n
    ? null
    : (0, X.jsx)(N, {
        href: n.GetCreatorHomeURL(null),
        children: (0, X.jsx)(`img`, { src: t.avatar_medium_url }),
      });
}
function Nr(e) {
  let { lifetimePlaytime: t, storeItem: n } = e,
    r = ye(n);
  return (0, X.jsx)(`div`, {
    className: yr,
    children: (0, X.jsx)(ae, {
      id: r,
      bHidePrice: !0,
      hoverProps: {
        direction: `overlay`,
        nBodyAlignment: 1,
        style: { minWidth: `320px`, zIndex: 5e3 },
      },
      children: (0, X.jsx)(`img`, {
        className: br,
        alt: n.GetName(),
        src: n.GetAssets().GetSmallCapsuleURL(),
      }),
    }),
  });
}
function Pr(e) {
  let { arrSteamIDs: t, count: n, locToken: r, bShowAvatars: i } = e;
  return n
    ? n == 1 && !i
      ? (0, X.jsx)(Q, {
          header: g(r + `_Single`, (0, X.jsx)(Fr, { steamid: t[0] })),
        })
      : (0, X.jsx)(Q, {
          header: v(r, n, (0, X.jsx)(`span`, { className: xr })),
          children:
            i &&
            t.length > 0 &&
            (0, X.jsx)(`div`, {
              className: `nd1w3QliCfE-`,
              children:
                n == 1
                  ? (0, X.jsx)(Lr, { steamid: t[0] })
                  : (0, X.jsx)(Ir, { arrSteamIDs: t }),
            }),
        })
    : null;
}
function Fr(e) {
  let { steamid: t } = e,
    { data: n } = ot(t);
  return !n || !n.m_bInitialized
    ? null
    : (0, X.jsx)(`span`, {
        "data-miniprofile": `s` + n.m_steamid.ConvertTo64BitString(),
        className: xr,
        children: n.m_strPlayerName,
      });
}
function Ir(e) {
  let { arrSteamIDs: t } = e,
    n = st(t);
  return (0, X.jsx)(X.Fragment, {
    children: n.map(
      ({ data: e }) =>
        e &&
        (0, X.jsx)(
          Ze,
          {
            "data-miniprofile": `s` + e.m_steamid.ConvertTo64BitString(),
            persona: e,
            size: `Small`,
            statusPosition: `right`,
          },
          e.m_steamid.ConvertTo64BitString(),
        ),
    ),
  });
}
function Lr(e) {
  let { steamid: t } = e,
    { data: n } = ot(t);
  return n
    ? (0, X.jsxs)(S, {
        className: Cr,
        "data-miniprofile": `s` + t,
        children: [
          (0, X.jsx)(Ze, {
            persona: n,
            size: `Small`,
            statusPosition: `right`,
          }),
          (0, X.jsx)(Qe, {
            className: wr,
            persona: n,
            eFriendRelationship: 3,
            bIsSelf: !1,
            strNickname: null,
            bParenthesizeNicknames: !1,
            bCompactView: !1,
            bNoMask: !0,
          }),
        ],
      })
    : null;
}
function Q(e) {
  let { children: t, header: n } = e;
  return (0, X.jsxs)(`div`, {
    className: Xn,
    children: [
      (0, X.jsx)(`div`, { className: Zn, children: (0, X.jsx)(x, {}) }),
      (0, X.jsxs)(`div`, {
        className: Yn,
        children: [(0, X.jsx)(`div`, { className: void 0, children: n }), t],
      }),
    ],
  });
}
var Rr = {
  include_assets: !0,
  include_trailers: !0,
  include_basic_info: !0,
  include_tag_count: 20,
  include_release: !0,
  include_platforms: !0,
  include_screenshots: !0,
  include_reviews: !0,
};
new G(`DiscoveryQueueApp`).Debug;
function zr(e) {
  let {
      appID: t,
      nItemHeight: n,
      nItemWidth: r,
      selected: i,
      fnFocused: a,
      eStoreDiscoveryQueueType: s,
      storePageFilter: c,
      bPreferDemoStorePage: u,
      elVideo: d,
      elDetails: f,
      appAriaIDs: p,
    } = e,
    [m] = Ge(t, Rr),
    h = o(),
    g = T()?.ownerWindow || window,
    _ = Br(m, s, c, u),
    { bIsIgnored: v, fnUpdateIgnored: y } = dn(t),
    { bIsWishlisted: b, fnUpdateWishlist: x } = pn(t),
    C = Y.useRef(null);
  if (
    (Y.useEffect(() => {
      i && C.current && C.current.focus({ preventScroll: !0 });
    }, [i]),
    !m)
  )
    return (console.warn(`Error: missing store item for appid `, t), null);
  let w = { width: r || void 0, height: n || void 0 };
  return (0, X.jsxs)(S, {
    "aria-labelledby": Le(
      p.nameId,
      p.tagsId,
      p.reviewId,
      p.relevanceId,
      p.buttonsId,
    ),
    ref: C,
    style: w,
    className: k(An, i && `vyD3DBFIFUc-`),
    onOptionsActionDescription: l(
      b
        ? `#DiscoveryQueue_RemoveFromWishlist`
        : `#DiscoveryQueue_AddToWishlist`,
    ),
    onOptionsButton: x,
    onOKActionDescription: l(`#DiscoveryQueue_ViewStorePage`),
    onOKButton: () => {
      g.location.href = _;
    },
    onSecondaryActionDescription: l(
      v ? `#DiscoveryQueue_Undo` : `#DiscoveryQueue_IgnoreLink`,
    ),
    onSecondaryButton: y,
    fnScrollIntoViewHandler: () => (a(), !0),
    children: [
      (0, X.jsx)(`div`, {
        className: k($n, v && `_3ZYr-Efwvg8-`),
        children: (0, X.jsxs)(`div`, {
          className: k(er, v && `_3ZYr-Efwvg8-`),
          children: [
            (0, X.jsx)(`div`, {
              className: tr,
              children: l(`#DiscoveryQueue_Ignored`),
            }),
            (0, X.jsx)(`div`, {
              className: nr,
              children: l(`#DiscoveryQueue_IgnoredConfirmation`),
            }),
            (0, X.jsxs)(S, {
              className: k(Qn, rr),
              onClick: y,
              children: [
                h &&
                  (0, X.jsx)(B, { button: L.X, type: R.Light, size: I.Medium }),
                l(`#DiscoveryQueue_Undo`),
              ],
            }),
          ],
        }),
      }),
      d,
      f,
    ],
  });
}
function Br(e, t, n, r) {
  let i = me();
  return Y.useMemo(() => {
    if (!e) return;
    let a = ct(n),
      o = t >= 0 ? `?inqueue=` + t + (n ? `_` + a : ``) : ``,
      s = pe(i, e.GetStorePageURL(r) + o);
    return q(s);
  }, [r, t, i, e, n]);
}
function Vr(e) {
  let {
      appID: t,
      bShowMinimizedDisplay: n,
      eStoreDiscoveryQueueType: r,
      storePageFilter: i,
      bPreferDemoStorePage: a,
      appAriaIDs: s,
    } = e,
    [c] = Ge(t, Rr),
    u = z(t),
    { bIsIgnored: d, fnUpdateIgnored: f } = dn(t),
    { bIsWishlisted: p, fnUpdateWishlist: m } = pn(t),
    h = Br(c, r, i, a),
    g = o(),
    _ = g;
  if (!c) return;
  let v = c.GetAssets().GetLibraryCapsuleURL(),
    y = c.GetAssets().GetHeaderURL();
  return (0, X.jsxs)(S, {
    className: Hn,
    children: [
      (0, X.jsxs)(`div`, {
        className: Un,
        children: [
          v &&
            (0, X.jsxs)(`a`, {
              className: k(`_-6qCNJHr4Z0-`),
              href: h,
              children: [
                (0, X.jsx)(`img`, { className: `Q3mOh913Yuw-`, src: v }),
                y && (0, X.jsx)(`img`, { className: `k5tHhP269dw-`, src: y }),
              ],
            }),
          (0, X.jsxs)(`div`, {
            id: s.nameId,
            className: Wn,
            children: [
              (0, X.jsx)(`a`, {
                className: k(Gn),
                href: h,
                children: c.GetName(),
              }),
              (0, X.jsx)(re, { bSingleLineMode: !0, id: u }),
            ],
          }),
          (0, X.jsx)(Hr, { rgTagIDs: c.GetTagIDs(), ariaLabelID: s.tagsId }),
          (0, X.jsx)(`div`, {
            className: Jn,
            id: s.reviewId,
            children: (0, X.jsx)(Ee, {
              bShowTooltip: !0,
              bTruncateTotalReviews: n,
              id: u,
            }),
          }),
          (0, X.jsx)(`div`, {
            id: s.relevanceId,
            className: vr,
            children: (0, X.jsx)(Ar, {
              bHideDescription: g,
              bShowAvatars: !n,
              storeItem: c,
              appID: t,
            }),
          }),
        ],
      }),
      !g &&
        (0, X.jsx)(`div`, {
          className: `Ud5K2f6NQFA-`,
          children: (0, X.jsx)(`div`, {
            id: s.buttonsId,
            className: `sRPPHGX-rq4-`,
            children: (0, X.jsxs)(`div`, {
              className: `kjR6Qum8rRo-`,
              children: [
                c.BHasDemo() &&
                  (0, X.jsx)(le, {
                    id: u,
                    className: k(
                      `BxLuFJsRaUQ-`,
                      `VE8INnFzaCw-`,
                      `enD9-bmgGhA-`,
                    ),
                  }),
                (0, X.jsxs)(`a`, {
                  className: k(`BxLuFJsRaUQ-`, `VE8INnFzaCw-`),
                  href: h,
                  children: [
                    _ &&
                      (0, X.jsx)(B, {
                        button: L.Y,
                        type: R.Light,
                        size: I.Medium,
                        additionalClassName: `a-wHbIOxF8U-`,
                      }),
                    ` `,
                    l(`#DiscoveryQueue_ViewStorePage`),
                  ],
                }),
                (0, X.jsx)(M, {
                  toolTipContent: l(
                    p ? `#RemoveFromWishlist_ttip` : `#AddToWishlist_ttip`,
                  ),
                  children: (0, X.jsxs)(S, {
                    "aria-label": l(
                      p ? `#Sale_RemoveFromWishlist` : `#Sale_AddToWishlist`,
                    ),
                    focusable: !0,
                    className: k(`BxLuFJsRaUQ-`, p && `_3ZYr-Efwvg8-`),
                    onClick: m,
                    children: [
                      _ &&
                        (0, X.jsx)(B, {
                          button: L.Y,
                          type: R.Light,
                          size: I.Medium,
                          additionalClassName: `a-wHbIOxF8U-`,
                        }),
                      p ? (0, X.jsx)(O, {}) : (0, X.jsx)(b, {}),
                    ],
                  }),
                }),
                (0, X.jsx)(M, {
                  toolTipContent: l(`#SaleTrailerCarousel_IgnoreLink_ttip`),
                  children: (0, X.jsx)(S, {
                    "aria-label": l(`#DiscoveryQueue_IgnoreLink`),
                    focusable: !0,
                    className: k(`BxLuFJsRaUQ-`, d && `_3ZYr-Efwvg8-`),
                    onClick: f,
                    children: (0, X.jsx)(D, {}),
                  }),
                }),
              ],
            }),
          }),
        }),
    ],
  });
}
function Hr(e) {
  let { rgTagIDs: t, ariaLabelID: n } = e,
    r = [...mn(t)].slice(0, 8);
  return (0, X.jsx)(`div`, {
    id: n,
    role: `list`,
    className: Kn,
    children: r.map((e) => (0, X.jsx)(wt, { className: qn, tagID: e }, e)),
  });
}
function Ur() {
  return {
    nameId: Y.useId(),
    tagsId: Y.useId(),
    reviewId: Y.useId(),
    relevanceId: Y.useId(),
    buttonsId: Y.useId(),
  };
}
var Wr = new G(`DiscoveryQueueWizard`).Debug,
  $ = 1,
  Gr = 1400,
  Kr = `discoveryqueue2022`;
async function qr(e, t, n, r) {
  let i = [],
    a = !1;
  try {
    let { appids: o, exhausted: s } = await J.Get().GetDiscoveryQueueAppsOfType(
      e,
      t,
      r,
    );
    ((i = [...o]),
      (a = s),
      n && i.findIndex((e) => e === n) === -1 && i.unshift(n),
      await Ce.Get().QueueMultipleAppRequests(i, { ...Rr, ...lt }));
  } catch (e) {
    console.error(`Failed getting discovery queue apps`, e);
  }
  return { appids: i, exhausted: a };
}
function Jr(e) {
  let [t, n] = Y.useState(!1),
    r = Ve();
  return (
    (0, Y.useEffect)(() => {
      (J.Init(r), n(!0));
    }, [r]),
    t ? (0, X.jsx)(Yr, { ...e }) : null
  );
}
function Yr(e) {
  let {
      eStoreDiscoveryQueueType: t,
      fnCloseModal: a,
      includeAppID: c,
      storePageFilter: u,
      bPreferDemoStorePage: d,
      bShowAOAutoPlayWarning: f,
    } = e,
    [p, m] = Y.useState(0),
    [g, _] = Y.useState(void 0),
    [v, b] = Y.useState(0),
    x = T()?.ownerWindow || window,
    w = Te(Kr),
    [D, O] = Y.useState(0),
    A = je();
  (V(`ArrowLeft`, () => F(!1), !0, !0),
    V(`Left`, () => F(!1), !0, !0),
    V(`ArrowRight`, () => F(!0), !0, !0),
    V(`Right`, () => F(!0), !0, !0),
    V(`Escape`, () => a?.(), !0, !0),
    V(`Esc`, () => a?.(), !0, !0));
  let j = Y.useMemo(() => x.innerWidth < Gr, [x]),
    { fnGetDiscoveryQueue: M, rgAppIDs: P } = $r(t, u, c);
  (Y.useEffect(() => {
    (M(!0), H.Get().HintLoad());
  }, []),
    Y.useEffect(() => {
      let e = P[p];
      e != g && (e && e != $ && A.AddImpression(e, w), _(e));
    }, [A, p, g, P, w]));
  let F = (e) => {
    let t = s(p + (e ? 1 : -1), 0, P.length - 1);
    t != p &&
      (m(t), Wr(`New selected index: `, t, ` Prev selected index: `, p));
  };
  (Y.useEffect(() => {
    P?.length &&
      P[p] !== $ &&
      (O((e) => e + 1),
      J.Get()
        .SkipDiscoveryQueueItem(P[p], t, u)
        .then(() => O((e) => e - 1)));
  }, [t, p, P, u]),
    Y.useEffect(() => {
      P.length != v && (b(P.length), P.length > v && P[p] == $ && m(p + 1));
    }, [v, p, P]));
  let [I] = Y.useState(new Map()),
    te = Xe(t, u),
    L = !ve() && p > 0,
    R = !ve() && p < P.length - 1,
    {
      refContainer: ne,
      bIsDragging: re,
      nDragOffset: ie,
      nDragSelectedOffsetIndex: ae,
      handleTouchStart: oe,
      handleTouchMove: se,
      handleTouchEnd: ce,
    } = Zr((e) => m(e), P.length),
    le = (e) => {
      e.target == e.currentTarget && (a?.(), e.stopPropagation());
    },
    z = (e) => n(p + e, P) && (h(e, -1, 1) || re),
    B = U(i.STORE_BASE_URL + `explore?dq=widget`),
    ue = !o() && !r() && t === 0,
    de = U(i.STORE_BASE_URL + `explore/next/0`),
    fe = P[p] !== $,
    { nQueueStart: pe, nCount: me } = Xr(p, P);
  return (0, X.jsx)(ut, {
    feature: Kr,
    children: (0, X.jsx)(S, {
      role: `dialog`,
      focusable: !1,
      "flow-children": `column`,
      className: On,
      navEntryPreferPosition: ee.LAST,
      onCancelButton: () => a?.(),
      onCancelActionDescription: l(`#Button_Close`),
      children: (0, X.jsxs)(`div`, {
        className: jn,
        onClick: le,
        children: [
          te.length > 0 &&
            (0, X.jsx)(S, {
              "flow-children": `row`,
              className: `Wp-fkK6n2-I-`,
              children: te,
            }),
          (0, X.jsxs)(S, {
            "flow-children": `row`,
            className: fr,
            children: [
              (0, X.jsx)(S, {
                className: void 0,
                children: y(
                  `#DiscoveryQueue_LearnMore_Default`,
                  (0, X.jsx)(N, { className: pr, href: q(B) }),
                ),
              }),
              ue &&
                (0, X.jsx)(S, {
                  className: void 0,
                  children: y(
                    `#DiscoveryQueue_ClassicQueue_Link`,
                    (0, X.jsx)(N, { className: `naQ5--hS5ms-`, href: q(de) }),
                  ),
                }),
              (0, X.jsx)(S, {
                className: mr,
                children: (0, X.jsx)(S, {
                  focusable: !0,
                  className: Qn,
                  onClick: a,
                  "aria-label": l(`#Button_Close`),
                  onActivate: () => a && a(),
                  children: (0, X.jsx)(C, {}),
                }),
              }),
            ],
          }),
          (0, X.jsx)(S, {
            role: `button`,
            "aria-label": l(`#Carousel_Next`),
            onClick: () => F(!1),
            className: k(hr, _r, L && `_4dyYanLcAPg-`),
            children: (0, X.jsx)(E, { angle: 180 }),
          }),
          (0, X.jsx)(S, {
            role: `button`,
            "aria-label": l(`#Carousel_Prev`),
            onClick: () => F(!0),
            className: k(hr, gr, R && `_4dyYanLcAPg-`),
            children: (0, X.jsx)(E, { angle: 0 }),
          }),
          (0, X.jsx)(S, {
            ref: ne,
            className: Mn,
            focusable: !1,
            onTouchStart: oe,
            onTouchMove: se,
            onTouchEnd: ce,
            children: [-2, -1, 0, 1, 2].map((e) =>
              (0, X.jsx)(
                `div`,
                {
                  className: k({
                    [Nn]: !0,
                    [In]: re,
                    [Fn]: z(e),
                    [Ln]: e == -2,
                    [Rn]: e == -1,
                    [zn]: e == 0,
                    [Bn]: e == 1,
                    [Vn]: e == 2,
                    [Pn]: e + ae == 0,
                  }),
                  style: { "--dragOffsetX": `${ie}px` },
                  children:
                    z(e) &&
                    (0, X.jsx)(Qr, {
                      eStoreDiscoveryQueueType: t,
                      storePageFilter: u,
                      rgAppIDs: P,
                      index: p + e,
                      bShowMinimizedDisplay: j,
                      selectedIndex: p,
                      bPreferDemoStorePage: !!d,
                      mapViewedAppCount: I,
                      fnCloseModal: a,
                      fnLoadNextQueue: () => M(!1),
                      fnAdvance: F,
                      bSkipAppRequestPending: D != 0,
                      showAOAutoPlayWarning: !!f,
                    }),
                },
                p + e,
              ),
            ),
          }),
          (0, X.jsx)(xt, {
            className: k(!fe && `x7yACsfXkig-`),
            showPriorAsActive: !0,
            count: me,
            selectedIndex: p - pe,
          }),
        ],
      }),
    }),
  });
}
function Xr(e, t) {
  let n = 0;
  for (let r = 0; r < e; r++) t[r] == $ && (n = r + 1);
  let r = 0;
  for (let n = e; n < t.length; n++)
    if (t[n] == $) {
      r = n;
      break;
    } else n == t.length - 1 && (r = t.length);
  let i = r - n;
  return { nQueueStart: n, nQueueEnd: r, nCount: i };
}
function Zr(e, t) {
  let n = Y.useRef(null),
    [r, i] = Y.useState(0),
    [a, o] = Y.useState(!1),
    [s, c] = Y.useState(0),
    l = Y.useRef(0);
  return {
    refContainer: n,
    bIsDragging: a,
    nDragOffset: r,
    nDragSelectedOffsetIndex: s,
    handleTouchStart: (e) => {
      (o(!0), (l.current = e.touches[0].clientX), i(0), c(0));
    },
    handleTouchMove: (e) => {
      if (!a) return;
      let t = e.touches[0].clientX - l.current;
      (i(t), c(r > 50 ? 1 : r < -50 ? -1 : 0));
    },
    handleTouchEnd: () => {
      a &&
        (o(!1),
        r > 50
          ? e((e) => Math.max(e - 1, 0))
          : r < -50 && e((e) => Math.min(e + 1, t - 1)),
        i(0),
        c(0));
    },
  };
}
function Qr(e) {
  let {
      eStoreDiscoveryQueueType: t,
      storePageFilter: n,
      rgAppIDs: r,
      index: i,
      bShowMinimizedDisplay: a,
      selectedIndex: o,
      bPreferDemoStorePage: s,
      mapViewedAppCount: c,
      fnCloseModal: l,
      fnLoadNextQueue: u,
      fnAdvance: d,
      bSkipAppRequestPending: f,
      showAOAutoPlayWarning: p,
    } = e,
    [m, h] = Y.useState(!1),
    g = Ur(),
    _ = () => {
      o != i && d(i > o);
    },
    v = o === i,
    y = Y.useRef(v);
  if (
    (Y.useEffect(() => {
      let e = y.current;
      if (((y.current = v), e && !v)) {
        h(!0);
        let e = setTimeout(() => h(!1), 500);
        return () => {
          clearTimeout(e);
        };
      }
    }, [v]),
    r[i] == $)
  ) {
    let a = 0;
    for (let e = i - 1; e >= 0; e--) r[e] == $ && (a += 1);
    let s = 0;
    for (let e = i - 1; e >= 0 && r[e] !== $; e--) s++;
    return (
      c.has(a) || c.set(a, J.Get().GetTotalSkippedAppsForDiscoveryQueue(t, n)),
      (0, Y.createElement)(ei, {
        ...e,
        key: o,
        selected: v,
        lastCard: o == r.length - 1,
        fnLoadNextQueue: u,
        fnCloseModal: l,
        summaryCardIndex: a,
        eStoreDiscoveryQueueType: t,
        viewedAppCount: (c.get(a) || 0) + s,
        fnFocused: _,
        fnAdvance: () => d(!0),
        bSkipAppRequestPending: f,
      })
    );
  }
  let b = v || y.current || m;
  return (0, X.jsx)(zr, {
    appAriaIDs: g,
    eStoreDiscoveryQueueType: t,
    storePageFilter: n,
    selected: v,
    appID: r[i],
    bPreferDemoStorePage: s,
    fnFocused: _,
    elVideo: (0, X.jsx)(un, {
      appID: r[i],
      focused: b,
      showAOAutoPlayWarning: p,
      fnComplete: void 0,
    }),
    elDetails: (0, X.jsx)(Vr, {
      appID: r[i],
      bShowMinimizedDisplay: a,
      eStoreDiscoveryQueueType: t,
      storePageFilter: n,
      bPreferDemoStorePage: s,
      appAriaIDs: g,
    }),
  });
}
function $r(e, t, n) {
  let [r, i] = Y.useState([]),
    a = Ke(`DiscoveryQueueWizard`);
  return {
    fnGetDiscoveryQueue: async (o) => {
      let { appids: s } = await qr(e, !o, o && n, t);
      if (o && !s.length) {
        let { appids: n } = await qr(e, !0, void 0, t);
        s = n;
      }
      if (!a?.token?.reason) {
        let e = [...(r ?? []), ...s, $];
        i(e);
      }
      Wr(`Loaded new discovery queue apps: `, s);
    },
    rgAppIDs: r,
  };
}
function ei(e) {
  let {
      eStoreDiscoveryQueueType: t,
      fnCloseModal: n,
      summaryCardIndex: r,
      lastCard: a,
      selected: s,
      fnLoadNextQueue: c,
      storePageFilter: u,
      fnDisplaySummaryReward: d,
      viewedAppCount: f,
      fnFocused: p,
      fnAdvance: m,
      bSkipAppRequestPending: h,
    } = e,
    [g, _] = Y.useState(!1),
    v = o(),
    y = rt(2, i.LANGUAGE, !1),
    [b, x] = Y.useState(0),
    [C, w] = Y.useState(0),
    { data: T } = _e();
  Y.useEffect(() => {
    s &&
      !g &&
      T &&
      H.Get()
        .HintLoad()
        .then(() => {
          J.Get()
            .LoadSkippedApps(t, u)
            .then((e) => {
              (x(e.reduce((e, t) => (T.has(t) ? e + 1 : e), 0)),
                w(
                  e.reduce(
                    (e, t) => (H.Get().BIsGameIgnored(t) ? e + 1 : e),
                    0,
                  ),
                ),
                _(!0));
            });
        });
  }, [g, t, s, u, T]);
  let [E, D] = Y.useState(!1),
    O = Ye(t, u),
    A = Ke(`DiscoveryQueueSummary`),
    j = async () => {
      a ? E || (D(!0), await c(), A?.token?.reason || D(!1)) : m();
    };
  return (0, X.jsxs)(ti, {
    selected: s,
    fnFocused: p,
    fnOnContinue: j,
    fnCloseModal: n,
    bLoaded: g,
    children: [
      (0, X.jsxs)(`div`, {
        className: ir,
        children: [
          (0, X.jsx)(`div`, {
            className: ar,
            children: l(`#DiscoveryQueue_SummaryTitle`),
          }),
          !O &&
            s &&
            y.data?.definition &&
            (0, X.jsx)(ri, { bSkipAppRequestPending: h, summaryCardIdx: r }),
          (0, X.jsx)(`div`, {
            className: or,
            children: l(`#DiscoveryQueue_YourStats`),
          }),
          (0, X.jsxs)(S, {
            "flow-children": `row`,
            className: sr,
            children: [
              (0, X.jsxs)(`div`, {
                className: cr,
                children: [
                  (0, X.jsx)(`div`, {
                    className: lr,
                    children: l(`#DiscoveryQueue_ViewedCaps`),
                  }),
                  (0, X.jsx)(`div`, { className: ur, children: K(f) }),
                  (0, X.jsx)(`div`, {
                    className: dr,
                    children: l(`#DiscoveryQueue_Titles`),
                  }),
                ],
              }),
              (0, X.jsxs)(`div`, {
                className: cr,
                children: [
                  (0, X.jsx)(`div`, {
                    className: lr,
                    children: l(`#DiscoveryQueue_WishlistedCaps`),
                  }),
                  (0, X.jsx)(`div`, { className: ur, children: K(b) }),
                  (0, X.jsx)(Oe, {
                    className: k(dr, kn),
                    href: q(i.STORE_BASE_URL + `wishlist`),
                    children: l(`#DiscoveryQueue_ViewWishlist`),
                  }),
                ],
              }),
              (0, X.jsxs)(`div`, {
                className: cr,
                children: [
                  (0, X.jsx)(`div`, {
                    className: lr,
                    children: l(`#DiscoveryQueue_IgnoredCaps`),
                  }),
                  (0, X.jsx)(`div`, { className: ur, children: K(C) }),
                  (0, X.jsx)(Oe, {
                    className: k(dr, kn),
                    href: q(i.STORE_BASE_URL + `account/notinterested`),
                    children: l(`#DiscoveryQueue_ViewIgnored`),
                  }),
                ],
              }),
            ],
          }),
          !v &&
            (0, X.jsxs)(S, {
              className: `V-tCdhirF0E-`,
              children: [
                (0, X.jsx)(S, {
                  className: k(`BxLuFJsRaUQ-`, `_5spq1pOe-Sg-`),
                  onClick: n,
                  children: l(`#ActionButtonLabelDone`),
                }),
                !O &&
                  (0, X.jsx)(S, {
                    className: k(
                      E && `RJg7ZyjyMZk-`,
                      `BxLuFJsRaUQ-`,
                      `VE8INnFzaCw-`,
                      `_5spq1pOe-Sg-`,
                    ),
                    onClick: j,
                    children: l(E ? `#Loading` : `#Button_Continue`),
                  }),
              ],
            }),
        ],
      }),
      !O && (0, X.jsx)(X.Fragment, { children: !!d && d?.(r + 1) }),
    ],
  });
}
function ti(e) {
  let {
      children: t,
      selected: n,
      fnOnContinue: r,
      fnCloseModal: a,
      fnFocused: o,
      bLoaded: s,
    } = e,
    c = U(i.STORE_BASE_URL + `wishlist`),
    u = T()?.ownerWindow || window,
    d = () => {
      u.location.href = q(c);
    },
    f = Y.useRef(null);
  return (
    Y.useEffect(() => {
      n && f.current && f.current.focus({ preventScroll: !0 });
    }, [n]),
    (0, X.jsx)(j, {
      ref: f,
      "aria-live": `polite`,
      className: k(void 0, An, n && `vyD3DBFIFUc-`),
      onOptionsActionDescription: l(`#DiscoveryQueue_ViewWishlist`),
      onOptionsButton: d,
      onOKActionDescription: l(`#Button_Continue`),
      onOKButton: () => {
        r();
      },
      onCancelActionDescription: l(`#ActionButtonLabelDone`),
      onCancelButton: () => a && a(),
      fnScrollIntoViewHandler: () => (o(), !0),
      children: s
        ? t
        : (0, X.jsx)(Be, {
            className: void 0,
            msDelayAppear: 200,
            size: `large`,
            position: `center`,
          }),
    })
  );
}
function ni() {
  return (0, X.jsx)(S, {
    className: Tr,
    children: (0, X.jsx)(Be, { size: `large`, position: `center` }),
  });
}
function ri(e) {
  let { bSkipAppRequestPending: t, summaryCardIdx: n } = e;
  return t ? (0, X.jsx)(ni, {}) : (0, X.jsx)(ii, { summaryCardIdx: n });
}
function ii(e) {
  let { summaryCardIdx: t } = e,
    n = it(2, i.LANGUAGE, !1, t.toString()),
    [r] = Ge(n?.data?.current_def?.appid, {}),
    a = o();
  if (!n?.data?.current_def || !r?.GetName().length) return (0, X.jsx)(ni, {});
  let s = n.data.num_items_earned,
    c = n.data.current_def.num_items_per_def,
    u = c - s,
    d = (s / c) * 100;
  return (0, X.jsxs)(S, {
    className: Tr,
    children: [
      (0, X.jsx)($e, { nPercent: d, size: 70, strokeWidth: 12 }),
      (0, X.jsxs)(S, {
        className: Er,
        children: [
          (0, X.jsx)(`div`, {
            className: Dr,
            children: l(
              `#DiscoveryQueue_SaleStatus_Title${u ? `` : `_Complete`}`,
              K(s),
              r.GetName(),
            ),
          }),
          u > 0 &&
            (0, X.jsx)(`div`, {
              className: `u6sC2PhNZss-`,
              children: l(`#DiscoveryQueue_SaleStatus_Desc`, K(u), r.GetName()),
            }),
          !a &&
            (0, X.jsx)(`a`, {
              href: q(i.COMMUNITY_BASE_URL + `my/itemcollection`),
              children: l(`#DiscoveryQueue_SaleStatus_Link`),
            }),
        ],
      }),
    ],
  });
}
export { Jr as default };
