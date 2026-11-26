/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { It as t, Nt as n, dt as r, ot as i } from "./chunk~01cfc309bf.js";
import { Ea as a, Fa as o, Ta as s, wa as c } from "./chunk~6b8ddcaac8.js";
import { g as l, k as u, t as d, y as f } from "./chunk~4eed35ad1f.js";
import { r as p, t as m } from "./chunk~38061b7abb.js";
import { t as h } from "./chunk~4dd1695ad6.js";
import {
  Ax as g,
  Cc as _,
  Ib as v,
  Ic as y,
  Lc as b,
  Ml as x,
  Od as S,
  Pc as C,
  Vc as w,
  Wv as T,
  _S as E,
  ad as D,
  bx as O,
  dS as k,
  dx as A,
  ex as j,
  fS as M,
  fx as N,
  gS as P,
  hS as F,
  ib as I,
  iu as L,
  kd as ee,
  lu as te,
  mS as R,
  mn as z,
  mt as B,
  ny as V,
  ox as H,
  pS as U,
  pr as ne,
  rn as re,
  su as ie,
  un as ae,
  vS as W,
  vx as oe,
  xd as se,
  yt as ce,
  yy as le,
  zc as ue,
  zv as de,
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
  return (0, K.jsx)(w, {
    "flow-children": `row`,
    className: C(fe, t),
    children: Array.from({ length: r }).map((e, t) =>
      (0, K.jsx)(
        `div`,
        {
          className: C({ [pe]: !0, [me]: n && t < i, [he]: t == i, [ge]: !!a }),
          onClick: a ? () => a(t) : void 0,
        },
        `dot_` + t,
      ),
    ),
  });
}
async function ve(e, t) {
  let n = se(oe.STORE_BASE_URL, t, O.country_code);
  return (await (await fetch(n)).json()).rgRecommendedTags || [];
}
function ye() {
  let e = le(),
    t = H.accountid;
  return i(q(e, t));
}
function q(e, t) {
  return {
    queryKey: be(t),
    queryFn: async () => (t ? await ve(e, t) : []),
    staleTime: 6e5,
  };
}
function be(e) {
  return [`RecommendedTag`, e ?? 0];
}
var xe = `_1wbMyxGnGy8-`,
  Se = `-D61WKs-ZxQ-`,
  Ce = `XUHGRxAX2xY-`,
  we = `NH1MEWmeFeg-`,
  Te = `Ef3pPDTc654-`,
  Ee = `URoGnzLvPas-`,
  De = `T-FsaU490gE-`,
  Oe = `rMfcun2JSm8-`,
  ke = `YVFVQr81mPI-`,
  Ae = `atnaqSRaIew-`,
  je = `LkfujtBIcfQ-`,
  Me = `RmSUNTNiH6o-`,
  Ne = `nVMhmfpEhl0-`,
  Pe = `D-0yhpQ3YbY-`,
  Fe = `_2J2v30O7L10-`,
  Ie = `md8klOzvRXo-`,
  Le = `G80uW2Mpt6o-`,
  Re = `_4KA4WmZc39M-`,
  ze = `lnv5hodvZ5U-`;
function Be(e, t) {
  G.useEffect(() => {
    if (!t || !t.onended || !e) return;
    let n = t.onended,
      r = setTimeout(() => {
        n();
      }, 6e3);
    return () => clearTimeout(r);
  }, [e, t]);
}
function Ve(e, t) {
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
function He(e, t, n, r) {
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
function Ue(e, t, n, r, i, a) {
  let [o, s] = G.useState(!1);
  G.useEffect(() => {
    e && !o
      ? t == 1 && n && r
        ? (n.pause(), s(!0))
        : t == 2 && i && a && (i.Pause(), s(!0))
      : !e && o && (t == 1 && n ? n.play() : t == 2 && i && i.Play(), s(!1));
  }, [t, e, o, r, a, n, i]);
}
var J = new x(`TrailerAppVideo`),
  Y = `bGameHighlightAutoplayDisabled`;
function We(e) {
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
    h = S(),
    g = te(t, i, !0, c),
    { data: _ } = T(t),
    { data: x } = de(t),
    E = ue(t),
    D = (c ?? !0) && g && !g.all_ages && h == `masked`,
    O = ee(),
    [k, A] = G.useState(!1),
    [j, M] = G.useState(0),
    [P, F] = (0, G.useState)(null),
    [L, R] = (0, G.useState)(null),
    { bCookieLoaded: z } = Ke(r, n, d),
    B = z;
  (G.useEffect(() => {
    n && B && u && !D && p(!0);
  }, [u, B, n, D]),
    G.useEffect(() => {
      D && f && u && O();
    }, [f, D, u, O]));
  let V = (e) => {
      (N(r ?? Y, String(!e), 3650), d(e), p(e));
    },
    H = He(j, p, L, P);
  G.useEffect(() => {
    s && (s.current = H);
  }, [H, s]);
  let U =
    a && E && E.length > 0
      ? b(E[0], `600x338`)
      : x
        ? y(x, `main_capsule`)
        : void 0;
  return (0, K.jsxs)(w, {
    className: Ae,
    onMouseEnter: () => A(!0),
    onMouseLeave: () => A(!1),
    children: [
      (0, K.jsx)(`button`, {
        onClick: H,
        "aria-label": v.Localize(`#SaleTrailerCarousel_PlayPause`),
        children: (0, K.jsx)(`img`, {
          className: C(Re, j != 0 && void 0),
          src: U,
          alt: ``,
        }),
      }),
      _ &&
        (0, K.jsx)(Ze, {
          appID: _.appid,
          bAutoplayVideos: u,
          autoplayCheckboxPosition: o,
          fnSetAutoPlayVideos: V,
        }),
      (0, K.jsx)(m, {
        name: _?.name ?? ``,
        trailerCategory: g?.trailer_category,
        trailerDisplay: j,
        mouseOver: k,
      }),
      (0, K.jsx)(qe, {
        eTrailerDisplay: j,
        setTrailerDisplay: M,
        featuredTrailer: g,
        fnSetMainTrailer: F,
        fnSetMicroTrailer: R,
        loadedAndActive: B && n,
        setVideoShouldStart: p,
        bMouseOverVideo: k,
        id: t,
        fnTogglePlayPause: H,
        bAutoplayVideos: u,
        bVideoShouldStart: f,
        ...l,
      }),
      D &&
        u &&
        (0, K.jsxs)(`div`, {
          className: `pTTlmyp5hVo-`,
          children: [
            (0, K.jsx)(`div`, {
              className: `ERlbHjA197s-`,
              children: I(`#StoreTrailer_AOWarning_1`),
            }),
            (0, K.jsx)(`div`, {
              className: `ERlbHjA197s-`,
              children: I(`#StoreTrailer_AOWarning_2`),
            }),
          ],
        }),
    ],
  });
}
function Ge(e, t) {
  let [n, r] = G.useState(!1);
  return (
    G.useEffect(() => (e && (t(), r(!0)), () => r(!1)), [e, t]),
    { bCookieLoaded: n }
  );
}
function Ke(e, t, n) {
  return Ge(
    t,
    G.useCallback(() => {
      let t = A(e ?? Y);
      n(!(t && t.toLowerCase() === `true`));
    }, [e, n]),
  );
}
function qe(e) {
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
      loadedAndActive: p,
      setVideoShouldStart: m,
      fnTogglePlayPause: h,
      bAutoplayVideos: g,
      bVideoShouldStart: v,
    } = e,
    [y, b] = G.useState(!1),
    [x, S] = G.useState(!1),
    [C, E] = G.useState(!1),
    [D, O] = G.useState(!1),
    [k, A] = (0, G.useState)(null),
    [j, M] = (0, G.useState)(null),
    { data: N } = T(t),
    P = !!n;
  (G.useEffect(() => {
    let e = !1;
    (p && x && P && (e = c === 0 || (c === 1 && !C) || (c === 2 && !D)),
      b(e),
      a?.(g && e));
  }, [a, c, D, C, p, g, x, P]),
    Ve(j, E),
    G.useEffect(() => {
      v ||
        (l(0),
        b(!1),
        S(!1),
        j && (j.pause(), (j.currentTime = 0)),
        k && (k.Pause(), k.SeekToStart()));
    }, [v, k, j, l]));
  let F = G.useRef(!1);
  (G.useEffect(() => {
    if (p && c === 0) {
      if ((S(!0), v)) {
        if (k) {
          (J.Debug(`Starting microtrailer`), l(1));
          let e = () => Ye(F, l, k);
          r || !j
            ? e()
            : (E(!0), (j.onended = e), Xe(j, `microtrailer`, () => E(!1)));
        }
      } else J.Debug(`Showing image`);
    }
  }, [p, c, r, v, s, l, k, j]),
    Be(C, j),
    G.useEffect(() => {
      p || m(!1);
    }, [p, m]),
    Ue(!!o, c, j, C, k, D));
  let I = (0, G.useCallback)((e) => {
    (d(e), M(e));
  }, []);
  return !N || !N.visible || !n
    ? null
    : (0, K.jsxs)(K.Fragment, {
        children: [
          y &&
            (0, K.jsx)(w, {
              focusable: !0,
              onClick: h,
              className: `z39v7Mbdy8s-`,
              children: (0, K.jsx)(_, {}),
            }),
          n.microtrailer &&
            (0, K.jsx)(`video`, {
              className: X(!0, c),
              ref: I,
              preload: `auto`,
              playsInline: !0,
              muted: !0,
              onClick: h,
              children: (0, K.jsx)(f, { trailer: n }),
            }),
          (0, K.jsx)(Je, {
            trailer: n,
            onRefChange: (e) => {
              (A(e), u(e));
            },
            eTrailerDisplay: c,
            fadeRatio: i,
            onPlayPauseChange: O,
            onPlaybackEnd: s,
          }),
        ],
      });
}
function Je(e) {
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
    d = (0, G.useMemo)(() => ie(t), [t]),
    f = (0, G.useCallback)((e) => {
      (c(e), o(e));
    }, []),
    m = (0, G.useCallback)(() => {
      i(!0);
    }, [i]);
  return (0, K.jsx)(h, {
    children: (0, K.jsx)(`div`, {
      className: u,
      children: (0, K.jsx)(p, {
        ref: f,
        dashManifests: d.rgDashTrailers,
        hlsManifest: d.rgHlsTrailers[0],
        captionManifest: L(t),
        screenshot: ``,
        altText: t.trailer_name,
        forcePause: l,
        muteWhenAutoplayBlocked: !0,
        onPlaybackEnd: a,
        onPlaybackStart: m,
        onPlayPauseChange: i,
      }),
    }),
  });
}
function Ye(e, t, n) {
  e.current ||
    ((e.current = !0), J.Debug(`Starting main trailer`), t(2), n.Play());
}
function Xe(e, t, n) {
  e.play().catch((e) => {
    (n(), J.Warning(`Failed to play ${t}: `, e));
  });
}
function X(e, t) {
  return C({
    [Me]: !0,
    [Pe]: t == 2,
    [Fe]: t == 1,
    [Ie]: t == 0,
    [Ne]: e,
    [Le]: !e,
  });
}
function Ze(e) {
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
      className: ze,
      children: (0, K.jsx)(
        ne,
        {
          controlled: !0,
          checked: n,
          className: je,
          style: a,
          label: ce.Localize(`#StoreTrailer_AutoPlayVideos`),
          onChange: r,
        },
        t,
      ),
    }),
  });
}
function Qe(e) {
  let {
      appID: t,
      trailerBaseID: n,
      focused: r,
      skipMicroTrailer: i,
      autoPlayCookieName: a,
      showAOAutoPlayWarning: o,
      showScreenshotInsteadOfMainCap: s,
      fadeRatio: c,
      fnPlayPause: l,
      refTogglePlayPause: d,
      bRequestPause: f,
      fnComplete: p,
    } = e,
    m = u(t),
    { data: h } = T(m),
    { data: g } = V(m),
    { bIsIgnored: _ } = Z(t),
    { bIsWishlisted: v } = Q(t),
    { bIsWishlisted: y } = Q(h?.related_items?.parent_appid),
    [b, x] = z();
  return (0, K.jsxs)(w, {
    className: C(xe, `AppVideoCtn`),
    children: [
      (0, K.jsx)(`div`, {
        className: C(Se, (v || y) && `cIdEvZnHFHs-`),
        children: I(`#Sale_OnWishlist`),
      }),
      b &&
        (0, K.jsx)(ae, {
          eDisplay: x,
          className: `ojoUrkK-4ss-`,
          storeItemPlatform: g,
        }),
      (0, K.jsxs)(`div`, {
        className: Ce,
        children: [
          (0, K.jsx)($e, { appID: t }),
          (0, K.jsx)(
            We,
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
              fnPlayPause: l,
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
  let t = B(e),
    n = D(),
    { mutateAsync: r } = d(e, !t, n);
  return { bIsIgnored: t, fnUpdateIgnored: r };
}
function $e(e) {
  let { appID: t } = e,
    n = j(),
    { bIsIgnored: r, fnUpdateIgnored: i } = Z(t);
  return (0, K.jsx)(`div`, {
    className: C(we, r && `cIdEvZnHFHs-`),
    children: (0, K.jsxs)(`div`, {
      className: C(Te, r && `cIdEvZnHFHs-`),
      children: [
        (0, K.jsx)(`div`, {
          className: Ee,
          children: I(`#SaleTrailerCarousel_Ignored`),
        }),
        (0, K.jsx)(`div`, {
          className: De,
          children: I(`#SaleTrailerCarousel_IgnoredConfirmation`),
        }),
        (0, K.jsxs)(w, {
          className: C(ke, Oe),
          onClick: i,
          children: [
            n && (0, K.jsx)(c, { button: o.X, type: a.Light, size: s.Medium }),
            I(`#SaleTrailerCarousel_Undo`),
          ],
        }),
      ],
    }),
  });
}
function Q(e) {
  let t = !!re(e),
    n = D(),
    { mutate: r } = l(e, !t, n);
  return { bIsWishlisted: t, fnUpdateWishlist: r };
}
function et(e) {
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
var $ = e(n(), 1),
  tt = class e extends $.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.recommendationid || k(e.M()),
        $.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: R.readUint64String,
              bw: W.writeUint64String,
            },
            review_text: { n: 2, br: R.readString, bw: W.writeString },
            voted_up: { n: 3, br: R.readBool, bw: W.writeBool },
            is_public: { n: 4, br: R.readBool, bw: W.writeBool },
            language: { n: 5, br: R.readString, bw: W.writeString },
            is_in_early_access: { n: 6, br: R.readBool, bw: W.writeBool },
            received_compensation: { n: 7, br: R.readBool, bw: W.writeBool },
            comments_disabled: { n: 8, br: R.readBool, bw: W.writeBool },
            hide_in_steam_china: { n: 9, br: R.readBool, bw: W.writeBool },
            saved_hardware_id: {
              n: 10,
              br: R.readUint64String,
              bw: W.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= F(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return E(e.M(), t, n);
    }
    static fromObject(t) {
      return U(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return M(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      P(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CUserReviews_Update_Request`;
    }
  },
  nt = class e extends $.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), $.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CUserReviews_Update_Response`;
    }
  },
  rt = class e extends $.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.saved_hardware_id || k(e.M()),
        $.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: R.readUint64String,
              bw: W.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= F(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return E(e.M(), t, n);
    }
    static fromObject(t) {
      return U(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return M(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      P(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CUserReviews_BackfillSavedHardware_Request`;
    }
  },
  it = class e extends $.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.num_backfilled || k(e.M()),
        $.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            num_backfilled: { n: 1, br: R.readUint32, bw: W.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= F(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return E(e.M(), t, n);
    }
    static fromObject(t) {
      return U(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return M(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      P(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CUserReviews_BackfillSavedHardware_Response`;
    }
  },
  at = class e extends $.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.reaction_type || k(e.M()),
        $.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            reaction_type: { n: 1, br: R.readUint32, bw: W.writeUint32 },
            count: { n: 2, br: R.readUint32, bw: W.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= F(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return E(e.M(), t, n);
    }
    static fromObject(t) {
      return U(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return M(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      P(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CUserReviews_Recommendation_LoyaltyReaction`;
    }
  },
  ot = class e extends $.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.id || k(e.M()),
        $.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            id: { n: 1, br: R.readEnum, bw: W.writeEnum },
            ranges: { n: 2, c: st, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= F(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return E(e.M(), t, n);
    }
    static fromObject(t) {
      return U(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return M(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      P(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CUserReviews_Recommendation_Tag`;
    }
  },
  st = class e extends $.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.start || k(e.M()),
        $.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            start: { n: 1, br: R.readUint32, bw: W.writeUint32 },
            end: { n: 2, br: R.readUint32, bw: W.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= F(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return E(e.M(), t, n);
    }
    static fromObject(t) {
      return U(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return M(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      P(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CUserReviews_Recommendation_Tag_Range`;
    }
  },
  ct = class e extends $.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.recommendationid || k(e.M()),
        $.Message.initialize(this, t, 0, -1, [27, 40, 54], null));
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
              br: R.readUint64String,
              bw: W.writeUint64String,
            },
            steamid: { n: 2, br: R.readUint64String, bw: W.writeUint64String },
            appid: { n: 3, br: R.readUint32, bw: W.writeUint32 },
            review: { n: 4, br: R.readString, bw: W.writeString },
            time_created: { n: 5, br: R.readUint32, bw: W.writeUint32 },
            time_updated: { n: 6, br: R.readUint32, bw: W.writeUint32 },
            votes_up: { n: 7, br: R.readUint32, bw: W.writeUint32 },
            votes_down: { n: 8, br: R.readUint32, bw: W.writeUint32 },
            vote_score: { n: 9, br: R.readFloat, bw: W.writeFloat },
            language: { n: 10, br: R.readString, bw: W.writeString },
            comment_count: { n: 11, br: R.readUint32, bw: W.writeUint32 },
            voted_up: { n: 12, br: R.readBool, bw: W.writeBool },
            is_public: { n: 13, br: R.readBool, bw: W.writeBool },
            moderator_hidden: { n: 14, br: R.readBool, bw: W.writeBool },
            flagged_by_developer: { n: 15, br: R.readEnum, bw: W.writeEnum },
            report_score: { n: 16, br: R.readUint32, bw: W.writeUint32 },
            steamid_moderator: {
              n: 17,
              br: R.readUint64String,
              bw: W.writeUint64String,
            },
            steamid_developer: {
              n: 18,
              br: R.readUint64String,
              bw: W.writeUint64String,
            },
            steamid_dev_responder: {
              n: 19,
              br: R.readUint64String,
              bw: W.writeUint64String,
            },
            developer_response: { n: 20, br: R.readString, bw: W.writeString },
            time_developer_responded: {
              n: 21,
              br: R.readUint32,
              bw: W.writeUint32,
            },
            developer_flag_cleared: { n: 22, br: R.readBool, bw: W.writeBool },
            written_during_early_access: {
              n: 23,
              br: R.readBool,
              bw: W.writeBool,
            },
            votes_funny: { n: 24, br: R.readUint32, bw: W.writeUint32 },
            received_compensation: { n: 25, br: R.readBool, bw: W.writeBool },
            unverified_purchase: { n: 26, br: R.readBool, bw: W.writeBool },
            review_qualities: {
              n: 27,
              r: !0,
              q: !0,
              br: R.readEnum,
              pbr: R.readPackedEnum,
              bw: W.writeRepeatedEnum,
            },
            weighted_vote_score: { n: 28, br: R.readFloat, bw: W.writeFloat },
            moderation_note: { n: 29, br: R.readString, bw: W.writeString },
            payment_method: { n: 30, br: R.readInt32, bw: W.writeInt32 },
            playtime_2weeks: { n: 31, br: R.readInt32, bw: W.writeInt32 },
            playtime_forever: { n: 32, br: R.readInt32, bw: W.writeInt32 },
            last_playtime: { n: 33, br: R.readInt32, bw: W.writeInt32 },
            comments_disabled: { n: 34, br: R.readBool, bw: W.writeBool },
            playtime_at_review: { n: 35, br: R.readInt32, bw: W.writeInt32 },
            approved_for_china: { n: 36, br: R.readBool, bw: W.writeBool },
            ban_check_result: { n: 37, br: R.readEnum, bw: W.writeEnum },
            refunded: { n: 38, br: R.readBool, bw: W.writeBool },
            account_score_spend: { n: 39, br: R.readInt32, bw: W.writeInt32 },
            reactions: { n: 40, c: at, r: !0, q: !0 },
            ipaddress: { n: 41, br: R.readString, bw: W.writeString },
            hidden_in_steam_china: { n: 42, br: R.readBool, bw: W.writeBool },
            steam_china_location: {
              n: 43,
              br: R.readString,
              bw: W.writeString,
            },
            category_ascii_pct: { n: 44, br: R.readUint32, bw: W.writeUint32 },
            category_meme_pct: { n: 45, br: R.readUint32, bw: W.writeUint32 },
            category_offtopic_pct: {
              n: 46,
              br: R.readUint32,
              bw: W.writeUint32,
            },
            category_uninformative_pct: {
              n: 47,
              br: R.readUint32,
              bw: W.writeUint32,
            },
            category_votefarming_pct: {
              n: 48,
              br: R.readUint32,
              bw: W.writeUint32,
            },
            deck_playtime_at_review: {
              n: 49,
              br: R.readInt32,
              bw: W.writeInt32,
            },
            is_bot_review_pct: { n: 50, br: R.readUint32, bw: W.writeUint32 },
            positivity_pct: { n: 51, br: R.readUint32, bw: W.writeUint32 },
            tags_with_ranges: { n: 54, c: ot, r: !0, q: !0 },
            saved_hardware_id: {
              n: 56,
              br: R.readUint64String,
              bw: W.writeUint64String,
            },
            hardware_cluster_id: {
              n: 57,
              br: R.readUint64String,
              bw: W.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= F(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return E(e.M(), t, n);
    }
    static fromObject(t) {
      return U(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return M(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      P(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `RecommendationDetails`;
    }
  },
  lt = class e extends $.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || k(e.M()),
        $.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { appid: { n: 1, br: R.readUint32, bw: W.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= F(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return E(e.M(), t, n);
    }
    static fromObject(t) {
      return U(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return M(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      P(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CUserReviews_GetFriendsRecommendedApp_Request`;
    }
  },
  ut = class e extends $.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.accountids_recommended || k(e.M()),
        $.Message.initialize(this, t, 0, -1, [1, 3], null));
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
              br: R.readUint32,
              pbr: R.readPackedUint32,
              bw: W.writeRepeatedUint32,
            },
            accountids_not_recommended: {
              n: 3,
              r: !0,
              q: !0,
              br: R.readUint32,
              pbr: R.readPackedUint32,
              bw: W.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= F(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return E(e.M(), t, n);
    }
    static fromObject(t) {
      return U(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return M(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      P(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CUserReviews_GetFriendsRecommendedApp_Response`;
    }
  },
  dt = class e extends $.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.requests || k(e.M()),
        $.Message.initialize(this, t, 0, -1, [1], null));
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
      return ((e.sm_mbf ||= F(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return E(e.M(), t, n);
    }
    static fromObject(t) {
      return U(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return M(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      P(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CUserReviews_GetIndividualRecommendations_Request`;
    }
  },
  ft = class e extends $.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || k(e.M()),
        $.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: { n: 1, br: R.readUint64String, bw: W.writeUint64String },
            appid: { n: 2, br: R.readUint32, bw: W.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= F(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return E(e.M(), t, n);
    }
    static fromObject(t) {
      return U(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return M(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      P(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CUserReviews_GetIndividualRecommendations_Request_RecommendationRequest`;
    }
  },
  pt = class e extends $.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.recommendations || k(e.M()),
        $.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { recommendations: { n: 1, c: ct, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= F(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return E(e.M(), t, n);
    }
    static fromObject(t) {
      return U(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return M(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      P(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CUserReviews_GetIndividualRecommendations_Response`;
    }
  },
  mt;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`UserReviews.Update#1`, g(tt, t, n), nt, {
      ePrivilege: 3,
    });
  }
  e.Update = t;
  function n(e, t, n) {
    return e.SendMsg(`UserReviews.BackfillSavedHardware#1`, g(rt, t, n), it, {
      ePrivilege: 1,
    });
  }
  e.BackfillSavedHardware = n;
  function r(e, t, n) {
    return e.SendMsg(
      `UserReviews.GetFriendsRecommendedApp#1`,
      g(lt, t, n),
      ut,
      { bConstMethod: !0, ePrivilege: 1, rgBrowserAPISites: [`store`] },
    );
  }
  e.GetFriendsRecommendedApp = r;
  function i(e, t, n) {
    return e.SendMsg(
      `UserReviews.GetIndividualRecommendations#1`,
      g(dt, t, n),
      pt,
      {
        bConstMethod: !0,
        ePrivilege: 1,
        eWebAPIKeyRequirement: 2,
        rgBrowserAPISites: [`all`],
      },
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
  Q as At,
  hn as B,
  Fn as C,
  $t as Ct,
  wt as D,
  Qe as Dt,
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
  _e as Mt,
  cn as N,
  Ot as O,
  et as Ot,
  on as P,
  zt as Q,
  Xt as R,
  yt as S,
  gn as St,
  Ct as T,
  lt as Tt,
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
  q as jt,
  Dn as k,
  Z as kt,
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
