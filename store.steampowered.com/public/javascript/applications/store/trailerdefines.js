/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { Lt as t, Pt as n, ft as r, st as i } from "./chunk~01cfc309bf.js";
import {
  Eo as a,
  N as o,
  P as s,
  _i as c,
  hi as l,
  ii as u,
  ni as d,
  pi as f,
  ri as p,
} from "./chunk~6b8ddcaac8.js";
import { r as m } from "./chunk~cd94ddba57.js";
import { r as h, t as g } from "./chunk~38061b7abb.js";
import { t as _ } from "./chunk~4dd1695ad6.js";
import {
  $l as v,
  Dc as y,
  Eb as b,
  Ec as x,
  Jl as S,
  Jy as C,
  Kv as w,
  Pv as T,
  Sl as E,
  Wb as D,
  Xb as O,
  Yu as k,
  Zl as A,
  aS as j,
  bx as M,
  cx as N,
  dd as P,
  eS as F,
  gt as I,
  iS as L,
  jc as R,
  kc as ee,
  kv as te,
  ly as ne,
  nS as z,
  nx as re,
  oS as B,
  or as ie,
  pc as ae,
  rS as V,
  rn as oe,
  sS as H,
  sn as se,
  tS as U,
  tx as ce,
  ux as le,
  vd as ue,
  wc as W,
  yd as de,
} from "./main.js";
var G = e(t()),
  fe = `tYEw8zCMszM-`,
  pe = `NCpHzW0zAz4-`,
  me = `_8LSrWZvsPDA-`,
  he = `bUpZq7n9J9M-`,
  ge = `qXndu6aUanY-`,
  K = r();
function _e(e) {
  let {
    className: t,
    showPriorAsActive: n,
    count: r,
    selectedIndex: i,
    fnNavigate: a,
  } = e;
  return (0, K.jsx)(R, {
    "flow-children": `row`,
    className: W(fe, t),
    children: Array.from({ length: r }).map((e, t) =>
      (0, K.jsx)(
        `div`,
        {
          className: W({ [pe]: !0, [me]: n && t < i, [he]: t == i, [ge]: !!a }),
          onClick: a ? () => a(t) : void 0,
        },
        `dot_` + t,
      ),
    ),
  });
}
async function ve(e, t) {
  let n = P(N.STORE_BASE_URL, t, le.country_code);
  return (await (await fetch(n)).json()).rgRecommendedTags || [];
}
function ye() {
  let e = ne(),
    t = O.accountid;
  return i(be(e, t));
}
function be(e, t) {
  return {
    queryKey: xe(t),
    queryFn: async () => (t ? await ve(e, t) : []),
    staleTime: 6e5,
  };
}
function xe(e) {
  return [`RecommendedTag`, e ?? 0];
}
var Se = `_1wbMyxGnGy8-`,
  Ce = `-D61WKs-ZxQ-`,
  we = `XUHGRxAX2xY-`,
  Te = `NH1MEWmeFeg-`,
  Ee = `Ef3pPDTc654-`,
  De = `URoGnzLvPas-`,
  Oe = `T-FsaU490gE-`,
  ke = `rMfcun2JSm8-`,
  Ae = `YVFVQr81mPI-`,
  je = `atnaqSRaIew-`,
  Me = `LkfujtBIcfQ-`,
  Ne = `RmSUNTNiH6o-`,
  Pe = `nVMhmfpEhl0-`,
  Fe = `D-0yhpQ3YbY-`,
  Ie = `_2J2v30O7L10-`,
  Le = `md8klOzvRXo-`,
  Re = `G80uW2Mpt6o-`,
  ze = `_4KA4WmZc39M-`,
  Be = `lnv5hodvZ5U-`;
function Ve(e, t) {
  G.useEffect(() => {
    if (!t || !t.onended || !e) return;
    let n = t.onended,
      r = setTimeout(() => {
        n();
      }, 6e3);
    return () => clearTimeout(r);
  }, [e, t]);
}
function He(e, t) {
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
function Ue(e, t, n, r) {
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
function We(e, t, n, r, i, a) {
  let [o, s] = G.useState(!1);
  G.useEffect(() => {
    e && !o
      ? t == 1 && n && r
        ? (n.pause(), s(!0))
        : t == 2 && i && a && (i.Pause(), s(!0))
      : !e && o && (t == 1 && n ? n.play() : t == 2 && i && i.Play(), s(!1));
  }, [t, e, o, r, a, n, i]);
}
var q = new E(`TrailerAppVideo`),
  J = `bGameHighlightAutoplayDisabled`;
function Ge(e) {
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
    m = ue(),
    h = v(t, i, !0, c),
    { data: _ } = T(t),
    { data: S } = te(t),
    w = ee(t),
    E = (c ?? !0) && h && !h.all_ages && m == `masked`,
    D = de(),
    [O, k] = G.useState(!1),
    [A, j] = G.useState(0),
    [M, N] = (0, G.useState)(null),
    [P, F] = (0, G.useState)(null),
    { bCookieLoaded: I } = qe(r, n, d),
    L = I;
  (G.useEffect(() => {
    n && L && u && !E && p(!0);
  }, [u, L, n, E]),
    G.useEffect(() => {
      E && f && u && D();
    }, [f, E, u, D]));
  let ne = (e) => {
      (re(r ?? J, String(!e), 3650), d(e), p(e));
    },
    z = Ue(A, p, P, M);
  G.useEffect(() => {
    s && (s.current = z);
  }, [z, s]);
  let B =
    a && w && w.length > 0
      ? y(w[0], `600x338`)
      : S
        ? x(S, `main_capsule`)
        : void 0;
  return (0, K.jsxs)(R, {
    className: je,
    onMouseEnter: () => k(!0),
    onMouseLeave: () => k(!1),
    children: [
      (0, K.jsx)(`button`, {
        onClick: z,
        "aria-label": b.Localize(`#SaleTrailerCarousel_PlayPause`),
        children: (0, K.jsx)(`img`, {
          className: W(ze, A != 0 && void 0),
          src: B,
          alt: ``,
        }),
      }),
      _ &&
        (0, K.jsx)(Qe, {
          appID: _.appid,
          bAutoplayVideos: u,
          autoplayCheckboxPosition: o,
          fnSetAutoPlayVideos: ne,
        }),
      (0, K.jsx)(g, {
        name: _?.name ?? ``,
        trailerCategory: h?.trailer_category,
        trailerDisplay: A,
        mouseOver: O,
      }),
      (0, K.jsx)(Je, {
        eTrailerDisplay: A,
        setTrailerDisplay: j,
        featuredTrailer: h,
        fnSetMainTrailer: N,
        fnSetMicroTrailer: F,
        loadedAndActive: L && n,
        setVideoShouldStart: p,
        bMouseOverVideo: O,
        id: t,
        fnTogglePlayPause: z,
        bAutoplayVideos: u,
        bVideoShouldStart: f,
        ...l,
      }),
      E &&
        u &&
        (0, K.jsxs)(`div`, {
          className: `pTTlmyp5hVo-`,
          children: [
            (0, K.jsx)(`div`, {
              className: `ERlbHjA197s-`,
              children: C(`#StoreTrailer_AOWarning_1`),
            }),
            (0, K.jsx)(`div`, {
              className: `ERlbHjA197s-`,
              children: C(`#StoreTrailer_AOWarning_2`),
            }),
          ],
        }),
    ],
  });
}
function Ke(e, t) {
  let [n, r] = G.useState(!1);
  return (
    G.useEffect(() => (e && (t(), r(!0)), () => r(!1)), [e, t]),
    { bCookieLoaded: n }
  );
}
function qe(e, t, n) {
  return Ke(
    t,
    G.useCallback(() => {
      let t = ce(e ?? J);
      n(!(t && t.toLowerCase() === `true`));
    }, [e, n]),
  );
}
function Je(e) {
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
      fnTogglePlayPause: h,
      bAutoplayVideos: g,
      bVideoShouldStart: _,
    } = e,
    [v, y] = G.useState(!1),
    [b, x] = G.useState(!1),
    [S, C] = G.useState(!1),
    [w, E] = G.useState(!1),
    [D, O] = (0, G.useState)(null),
    [k, A] = (0, G.useState)(null),
    { data: j } = T(t),
    M = !!n;
  (G.useEffect(() => {
    let e = !1;
    (f && b && M && (e = c === 0 || (c === 1 && !S) || (c === 2 && !w)),
      y(e),
      a?.(g && e));
  }, [a, c, w, S, f, g, b, M]),
    He(k, C),
    G.useEffect(() => {
      _ ||
        (l(0),
        y(!1),
        x(!1),
        k && (k.pause(), (k.currentTime = 0)),
        D && (D.Pause(), D.SeekToStart()));
    }, [_, D, k, l]));
  let N = G.useRef(!1);
  (G.useEffect(() => {
    if (f && c === 0) {
      if ((x(!0), _)) {
        if (D) {
          (q.Debug(`Starting microtrailer`), l(1));
          let e = () => Xe(N, l, D);
          r || !k
            ? e()
            : (C(!0), (k.onended = e), Ze(k, `microtrailer`, () => C(!1)));
        }
      } else q.Debug(`Showing image`);
    }
  }, [f, c, r, _, s, l, D, k]),
    Ve(S, k),
    G.useEffect(() => {
      f || p(!1);
    }, [f, p]),
    We(!!o, c, k, S, D, w));
  let P = (0, G.useCallback)((e) => {
    (d(e), A(e));
  }, []);
  return !j || !j.visible || !n
    ? null
    : (0, K.jsxs)(K.Fragment, {
        children: [
          v &&
            (0, K.jsx)(R, {
              focusable: !0,
              onClick: h,
              className: `z39v7Mbdy8s-`,
              children: (0, K.jsx)(ae, {}),
            }),
          n.microtrailer &&
            (0, K.jsx)(`video`, {
              className: Y(!0, c),
              ref: P,
              preload: `auto`,
              playsInline: !0,
              muted: !0,
              onClick: h,
              children: (0, K.jsx)(m, { trailer: n }),
            }),
          (0, K.jsx)(Ye, {
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
function Ye(e) {
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
    u = Y(!1, n),
    d = (0, G.useMemo)(() => A(t), [t]),
    f = (0, G.useCallback)((e) => {
      (c(e), o(e));
    }, []),
    p = (0, G.useCallback)(() => {
      i(!0);
    }, [i]);
  return (0, K.jsx)(_, {
    children: (0, K.jsx)(`div`, {
      className: u,
      children: (0, K.jsx)(h, {
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
function Xe(e, t, n) {
  e.current ||
    ((e.current = !0), q.Debug(`Starting main trailer`), t(2), n.Play());
}
function Ze(e, t, n) {
  e.play().catch((e) => {
    (n(), q.Warning(`Failed to play ${t}: `, e));
  });
}
function Y(e, t) {
  return W({
    [Ne]: !0,
    [Fe]: t == 2,
    [Ie]: t == 1,
    [Le]: t == 0,
    [Pe]: e,
    [Re]: !e,
  });
}
function Qe(e) {
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
      className: Be,
      children: (0, K.jsx)(
        ie,
        {
          controlled: !0,
          checked: n,
          className: Me,
          style: a,
          label: I.Localize(`#StoreTrailer_AutoPlayVideos`),
          onChange: r,
        },
        t,
      ),
    }),
  });
}
function $e(e) {
  let {
      appID: t,
      trailerBaseID: n,
      focused: r,
      skipMicroTrailer: i,
      autoPlayCookieName: o,
      showAOAutoPlayWarning: s,
      showScreenshotInsteadOfMainCap: c,
      fadeRatio: l,
      fnPlayPause: u,
      refTogglePlayPause: d,
      bRequestPause: f,
      fnComplete: p,
    } = e,
    m = a(t),
    { data: h } = T(m),
    { data: g } = w(m),
    { bIsIgnored: _ } = X(t),
    { bIsWishlisted: v } = Z(t),
    { bIsWishlisted: y } = Z(h?.related_items?.parent_appid),
    [b, x] = se();
  return (0, K.jsxs)(R, {
    className: W(Se, `AppVideoCtn`),
    children: [
      (0, K.jsx)(`div`, {
        className: W(Ce, (v || y) && `cIdEvZnHFHs-`),
        children: C(`#Sale_OnWishlist`),
      }),
      b &&
        (0, K.jsx)(oe, {
          eDisplay: x,
          className: `ojoUrkK-4ss-`,
          storeItemPlatform: g,
        }),
      (0, K.jsxs)(`div`, {
        className: we,
        children: [
          (0, K.jsx)(et, { appID: t }),
          (0, K.jsx)(
            Ge,
            {
              id: m,
              trailerBaseID: n,
              bCurrentlyActive: r && !_,
              autoplayCheckboxPosition: `top`,
              autoPlayCookieName: o,
              bShowAOAutoPlayWarning: s,
              bSkipMicroTrailer: i,
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
function X(e) {
  let t = s(e),
    n = k(),
    { mutateAsync: r } = o(e, !t, n);
  return { bIsIgnored: t, fnUpdateIgnored: r };
}
function et(e) {
  let { appID: t } = e,
    n = D(),
    { bIsIgnored: r, fnUpdateIgnored: i } = X(t);
  return (0, K.jsx)(`div`, {
    className: W(Te, r && `cIdEvZnHFHs-`),
    children: (0, K.jsxs)(`div`, {
      className: W(Ee, r && `cIdEvZnHFHs-`),
      children: [
        (0, K.jsx)(`div`, {
          className: De,
          children: C(`#SaleTrailerCarousel_Ignored`),
        }),
        (0, K.jsx)(`div`, {
          className: Oe,
          children: C(`#SaleTrailerCarousel_IgnoredConfirmation`),
        }),
        (0, K.jsxs)(R, {
          className: W(Ae, ke),
          onClick: i,
          children: [
            n && (0, K.jsx)(d, { button: f.X, type: u.Light, size: p.Medium }),
            C(`#SaleTrailerCarousel_Undo`),
          ],
        }),
      ],
    }),
  });
}
function Z(e) {
  let t = !!c(e),
    n = k(),
    { mutate: r } = l(e, !t, n);
  return { bIsWishlisted: t, fnUpdateWishlist: r };
}
function tt(e) {
  let { data: t } = ye(),
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
var Q = e(n(), 1),
  nt = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.recommendationid || F(e.M()),
        Q.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            recommendationid: {
              n: 1,
              br: V.readUint64String,
              bw: H.writeUint64String,
            },
            review_text: { n: 2, br: V.readString, bw: H.writeString },
            voted_up: { n: 3, br: V.readBool, bw: H.writeBool },
            is_public: { n: 4, br: V.readBool, bw: H.writeBool },
            language: { n: 5, br: V.readString, bw: H.writeString },
            is_in_early_access: { n: 6, br: V.readBool, bw: H.writeBool },
            received_compensation: { n: 7, br: V.readBool, bw: H.writeBool },
            comments_disabled: { n: 8, br: V.readBool, bw: H.writeBool },
            hide_in_steam_china: { n: 9, br: V.readBool, bw: H.writeBool },
            saved_hardware_id: {
              n: 10,
              br: V.readUint64String,
              bw: H.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= L(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return z(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return U(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CUserReviews_Update_Request`;
    }
  },
  rt = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), Q.Message.initialize(this, e, 0, -1, void 0, null));
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CUserReviews_Update_Response`;
    }
  },
  it = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.saved_hardware_id || F(e.M()),
        Q.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            saved_hardware_id: {
              n: 1,
              br: V.readUint64String,
              bw: H.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= L(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return z(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return U(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CUserReviews_BackfillSavedHardware_Request`;
    }
  },
  at = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.num_backfilled || F(e.M()),
        Q.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            num_backfilled: { n: 1, br: V.readUint32, bw: H.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= L(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return z(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return U(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CUserReviews_BackfillSavedHardware_Response`;
    }
  },
  ot = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.reaction_type || F(e.M()),
        Q.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            reaction_type: { n: 1, br: V.readUint32, bw: H.writeUint32 },
            count: { n: 2, br: V.readUint32, bw: H.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= L(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return z(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return U(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CUserReviews_Recommendation_LoyaltyReaction`;
    }
  },
  st = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.id || F(e.M()),
        Q.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            id: { n: 1, br: V.readEnum, bw: H.writeEnum },
            ranges: { n: 2, c: ct, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= L(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return z(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return U(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CUserReviews_Recommendation_Tag`;
    }
  },
  ct = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.start || F(e.M()),
        Q.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            start: { n: 1, br: V.readUint32, bw: H.writeUint32 },
            end: { n: 2, br: V.readUint32, bw: H.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= L(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return z(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return U(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CUserReviews_Recommendation_Tag_Range`;
    }
  },
  lt = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.recommendationid || F(e.M()),
        Q.Message.initialize(this, t, 0, -1, [27, 40, 54], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            recommendationid: {
              n: 1,
              br: V.readUint64String,
              bw: H.writeUint64String,
            },
            steamid: { n: 2, br: V.readUint64String, bw: H.writeUint64String },
            appid: { n: 3, br: V.readUint32, bw: H.writeUint32 },
            review: { n: 4, br: V.readString, bw: H.writeString },
            time_created: { n: 5, br: V.readUint32, bw: H.writeUint32 },
            time_updated: { n: 6, br: V.readUint32, bw: H.writeUint32 },
            votes_up: { n: 7, br: V.readUint32, bw: H.writeUint32 },
            votes_down: { n: 8, br: V.readUint32, bw: H.writeUint32 },
            vote_score: { n: 9, br: V.readFloat, bw: H.writeFloat },
            language: { n: 10, br: V.readString, bw: H.writeString },
            comment_count: { n: 11, br: V.readUint32, bw: H.writeUint32 },
            voted_up: { n: 12, br: V.readBool, bw: H.writeBool },
            is_public: { n: 13, br: V.readBool, bw: H.writeBool },
            moderator_hidden: { n: 14, br: V.readBool, bw: H.writeBool },
            flagged_by_developer: { n: 15, br: V.readEnum, bw: H.writeEnum },
            report_score: { n: 16, br: V.readUint32, bw: H.writeUint32 },
            steamid_moderator: {
              n: 17,
              br: V.readUint64String,
              bw: H.writeUint64String,
            },
            steamid_developer: {
              n: 18,
              br: V.readUint64String,
              bw: H.writeUint64String,
            },
            steamid_dev_responder: {
              n: 19,
              br: V.readUint64String,
              bw: H.writeUint64String,
            },
            developer_response: { n: 20, br: V.readString, bw: H.writeString },
            time_developer_responded: {
              n: 21,
              br: V.readUint32,
              bw: H.writeUint32,
            },
            developer_flag_cleared: { n: 22, br: V.readBool, bw: H.writeBool },
            written_during_early_access: {
              n: 23,
              br: V.readBool,
              bw: H.writeBool,
            },
            votes_funny: { n: 24, br: V.readUint32, bw: H.writeUint32 },
            received_compensation: { n: 25, br: V.readBool, bw: H.writeBool },
            unverified_purchase: { n: 26, br: V.readBool, bw: H.writeBool },
            review_qualities: {
              n: 27,
              r: !0,
              q: !0,
              br: V.readEnum,
              pbr: V.readPackedEnum,
              bw: H.writeRepeatedEnum,
            },
            weighted_vote_score: { n: 28, br: V.readFloat, bw: H.writeFloat },
            moderation_note: { n: 29, br: V.readString, bw: H.writeString },
            payment_method: { n: 30, br: V.readInt32, bw: H.writeInt32 },
            playtime_2weeks: { n: 31, br: V.readInt32, bw: H.writeInt32 },
            playtime_forever: { n: 32, br: V.readInt32, bw: H.writeInt32 },
            last_playtime: { n: 33, br: V.readInt32, bw: H.writeInt32 },
            comments_disabled: { n: 34, br: V.readBool, bw: H.writeBool },
            playtime_at_review: { n: 35, br: V.readInt32, bw: H.writeInt32 },
            approved_for_china: { n: 36, br: V.readBool, bw: H.writeBool },
            ban_check_result: { n: 37, br: V.readEnum, bw: H.writeEnum },
            refunded: { n: 38, br: V.readBool, bw: H.writeBool },
            account_score_spend: { n: 39, br: V.readInt32, bw: H.writeInt32 },
            reactions: { n: 40, c: ot, r: !0, q: !0 },
            ipaddress: { n: 41, br: V.readString, bw: H.writeString },
            hidden_in_steam_china: { n: 42, br: V.readBool, bw: H.writeBool },
            steam_china_location: {
              n: 43,
              br: V.readString,
              bw: H.writeString,
            },
            category_ascii_pct: { n: 44, br: V.readUint32, bw: H.writeUint32 },
            category_meme_pct: { n: 45, br: V.readUint32, bw: H.writeUint32 },
            category_offtopic_pct: {
              n: 46,
              br: V.readUint32,
              bw: H.writeUint32,
            },
            category_uninformative_pct: {
              n: 47,
              br: V.readUint32,
              bw: H.writeUint32,
            },
            category_votefarming_pct: {
              n: 48,
              br: V.readUint32,
              bw: H.writeUint32,
            },
            deck_playtime_at_review: {
              n: 49,
              br: V.readInt32,
              bw: H.writeInt32,
            },
            is_bot_review_pct: { n: 50, br: V.readUint32, bw: H.writeUint32 },
            positivity_pct: { n: 51, br: V.readUint32, bw: H.writeUint32 },
            tags_with_ranges: { n: 54, c: st, r: !0, q: !0 },
            saved_hardware_id: {
              n: 56,
              br: V.readUint64String,
              bw: H.writeUint64String,
            },
            hardware_cluster_id: {
              n: 57,
              br: V.readUint64String,
              bw: H.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= L(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return z(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return U(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `RecommendationDetails`;
    }
  },
  $ = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || F(e.M()),
        Q.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { appid: { n: 1, br: V.readUint32, bw: H.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= L(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return z(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return U(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CUserReviews_GetFriendsRecommendedApp_Request`;
    }
  },
  ut = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.accountids_recommended || F(e.M()),
        Q.Message.initialize(this, t, 0, -1, [1, 3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            accountids_recommended: {
              n: 1,
              r: !0,
              q: !0,
              br: V.readUint32,
              pbr: V.readPackedUint32,
              bw: H.writeRepeatedUint32,
            },
            accountids_not_recommended: {
              n: 3,
              r: !0,
              q: !0,
              br: V.readUint32,
              pbr: V.readPackedUint32,
              bw: H.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= L(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return z(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return U(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CUserReviews_GetFriendsRecommendedApp_Response`;
    }
  },
  dt = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.requests || F(e.M()),
        Q.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { requests: { n: 1, c: ft, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= L(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return z(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return U(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CUserReviews_GetIndividualRecommendations_Request`;
    }
  },
  ft = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || F(e.M()),
        Q.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: { n: 1, br: V.readUint64String, bw: H.writeUint64String },
            appid: { n: 2, br: V.readUint32, bw: H.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= L(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return z(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return U(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CUserReviews_GetIndividualRecommendations_Request_RecommendationRequest`;
    }
  },
  pt = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.recommendations || F(e.M()),
        Q.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { recommendations: { n: 1, c: lt, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= L(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return z(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return U(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CUserReviews_GetIndividualRecommendations_Response`;
    }
  },
  mt;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`UserReviews.Update#1`, M(nt, t, n), rt, {
      ePrivilege: 3,
    });
  }
  e.Update = t;
  function n(e, t, n) {
    return e.SendMsg(`UserReviews.BackfillSavedHardware#1`, M(it, t, n), at, {
      ePrivilege: 1,
    });
  }
  e.BackfillSavedHardware = n;
  function r(e, t, n) {
    return e.SendMsg(`UserReviews.GetFriendsRecommendedApp#1`, M($, t, n), ut, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.GetFriendsRecommendedApp = r;
  function i(e, t, n) {
    return e.SendMsg(
      `UserReviews.GetIndividualRecommendations#1`,
      M(dt, t, n),
      pt,
      { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
    );
  }
  e.GetIndividualRecommendations = i;
})((mt ||= {}));
var ht = `f6ytvVy3zPE-`,
  gt = `dR6nviGksys-`,
  _t = `cHqcdcYARwo-`,
  vt = `_17ZH-YderNw-`,
  yt = `E5dDz0rMQn4-`,
  bt = `zvXifbes22U-`,
  xt = `vyD3DBFIFUc-`,
  St = `n0EVijwEHbs-`,
  Ct = `nlcoKfY7CS8-`,
  wt = `f4g-Ypg3PLw-`,
  Tt = `bz0gWfRA4vo-`,
  Et = `_7Nd6h2zRP0s-`,
  Dt = `fjYnq0ifPfE-`,
  Ot = `kivEfnxaaMw-`,
  kt = `HX5vY-Q3jvw-`,
  At = `_0363ELeIufA-`,
  jt = `_-6qCNJHr4Z0-`,
  Mt = `Q3mOh913Yuw-`,
  Nt = `k5tHhP269dw-`,
  Pt = `HZwPEaho3zY-`,
  Ft = `QGtGxOFRQ-w-`,
  It = `ncEgLH6OqGs-`,
  Lt = `_830jPtjL2hI-`,
  Rt = `mRIBvQf4dkQ-`,
  zt = `M9g7Z8vAw60-`,
  Bt = `GzKtbjDNI6o-`,
  Vt = `j-P2Mge5-9c-`,
  Ht = `Gcft-8jrlN4-`,
  Ut = `Ud5K2f6NQFA-`,
  Wt = `sRPPHGX-rq4-`,
  Gt = `BxLuFJsRaUQ-`,
  Kt = `kjR6Qum8rRo-`,
  qt = `d6gjRWs-cbs-`,
  Jt = `_3ZYr-Efwvg8-`,
  Yt = `_5o5y8Ev8dws-`,
  Xt = `sX1tnSkZalw-`,
  Zt = `imhq51q87gg-`,
  Qt = `yuYfj9fDIGo-`,
  $t = `a-wHbIOxF8U-`,
  en = `-gCgopjBEis-`,
  tn = `HpPBskZI7NE-`,
  nn = `cxmUHct4Mx8-`,
  rn = `aEOWko6pl2Y-`,
  an = `qc--Gu1VOvc-`,
  on = `GX9fmB9rByo-`,
  sn = `_622HuKrUbVg-`,
  cn = `jddjtbg0dIU-`,
  ln = `V-tCdhirF0E-`,
  un = `fCsooya3i5U-`,
  dn = `naQ5--hS5ms-`,
  fn = `_9hedOZJts3E-`,
  pn = `RJg7ZyjyMZk-`,
  mn = `VE8INnFzaCw-`,
  hn = `enD9-bmgGhA-`,
  gn = `_5spq1pOe-Sg-`,
  _n = `O4OwJvlcb2o-`,
  vn = `_4dyYanLcAPg-`,
  yn = `_9fAelXUNIEs-`,
  bn = `-MiAmOisc-Q-`,
  xn = `d7rsPMqqO4s-`,
  Sn = `GQ2d2HGUoPA-`,
  Cn = `ASoaeJU9Iow-`,
  wn = `Hw5Md-rtn-k-`,
  Tn = `VxsjojbvAqk-`,
  En = `_7qeKWap2Gvc-`,
  Dn = `nd1w3QliCfE-`,
  On = `wdv04oGNxck-`,
  kn = `Vw-KXTl20bw-`,
  An = `RM7VDI2ue3Q-`,
  jn = `X17vOunFzrk-`,
  Mn = `pSJl-iNXTZw-`,
  Nn = `oge6UIoFqiQ-`,
  Pn = `x7yACsfXkig-`,
  Fn = `Wp-fkK6n2-I-`,
  In = `sRQkEW1Z3IU-`,
  Ln = `NyKGuXbQchs-`,
  Rn = `u6sC2PhNZss-`,
  zn = {
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
  Vt as $,
  Mn as A,
  Z as At,
  hn as B,
  Fn as C,
  $t as Ct,
  wt as D,
  $e as Dt,
  vn as E,
  mt as Et,
  qt as F,
  mn as G,
  Tt as H,
  Zt as I,
  _n as J,
  Pn as K,
  Yt as L,
  sn as M,
  cn as N,
  Ot as O,
  tt as Ot,
  on as P,
  zt as Q,
  Xt as R,
  yt as S,
  gn as St,
  Ct as T,
  $ as Tt,
  bn as U,
  dn as V,
  Nn as W,
  Ht as X,
  Sn as Y,
  Bt as Z,
  Et as _,
  un as _t,
  kn as a,
  Pt as at,
  ht as b,
  Qt as bt,
  Nt as c,
  xt as ct,
  Cn as d,
  ln as dt,
  On as et,
  Rt as f,
  en as ft,
  fn as g,
  gt,
  jt as h,
  Lt as ht,
  Wt as i,
  yn as it,
  an as j,
  _e as jt,
  Dn as k,
  X as kt,
  Mt as l,
  Tn as lt,
  Kt as m,
  tn as mt,
  Jt as n,
  Ln as nt,
  kt as o,
  Rn as ot,
  It as p,
  rn as pt,
  Gt as q,
  Ut as r,
  Dt as rt,
  At as s,
  In as st,
  zn as t,
  xn as tt,
  Ft as u,
  En as ut,
  pn as v,
  An as vt,
  vt as w,
  nn as wt,
  bt as x,
  wn as xt,
  _t as y,
  jn as yt,
  St as z,
};
