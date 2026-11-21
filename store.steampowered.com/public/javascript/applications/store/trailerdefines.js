/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { Lt as t, Pt as n, ft as r, st as i } from "./chunk~01cfc309bf.js";
import {
  Is as a,
  Ta as o,
  ga as s,
  ha as c,
  ma as l,
} from "./chunk~6b8ddcaac8.js";
import { g as u, p as d, t as f } from "./chunk~4eed35ad1f.js";
import { r as p, t as m } from "./chunk~38061b7abb.js";
import { t as h } from "./chunk~4dd1695ad6.js";
import {
  $b as g,
  Bc as _,
  Dd as v,
  Fb as y,
  Fc as b,
  Ic as x,
  Nc as S,
  Od as C,
  Rc as w,
  Rv as T,
  Sc as E,
  Uv as D,
  _x as O,
  ax as k,
  bd as A,
  cu as j,
  dS as M,
  dx as N,
  fS as P,
  gS as F,
  hS as I,
  id as L,
  jl as R,
  kx as z,
  lS as B,
  mS as V,
  mn as H,
  mt as U,
  ou as ee,
  pS as W,
  pr as te,
  rb as G,
  rn as ne,
  ru as re,
  ty as ie,
  uS as K,
  un as ae,
  ux as oe,
  vy as se,
  yt as ce,
  yx as le,
} from "./main.js";
var q = e(t()),
  ue = `tYEw8zCMszM-`,
  de = `NCpHzW0zAz4-`,
  fe = `_8LSrWZvsPDA-`,
  pe = `bUpZq7n9J9M-`,
  me = `qXndu6aUanY-`,
  J = r();
function he(e) {
  let {
    className: t,
    showPriorAsActive: n,
    count: r,
    selectedIndex: i,
    fnNavigate: a,
  } = e;
  return (0, J.jsx)(_, {
    "flow-children": `row`,
    className: S(ue, t),
    children: Array.from({ length: r }).map((e, t) =>
      (0, J.jsx)(
        `div`,
        {
          className: S({ [de]: !0, [fe]: n && t < i, [pe]: t == i, [me]: !!a }),
          onClick: a ? () => a(t) : void 0,
        },
        `dot_` + t,
      ),
    ),
  });
}
async function ge(e, t) {
  let n = A(O.STORE_BASE_URL, t, le.country_code);
  return (await (await fetch(n)).json()).rgRecommendedTags || [];
}
function _e() {
  let e = se(),
    t = k.accountid;
  return i(Y(e, t));
}
function Y(e, t) {
  return {
    queryKey: ve(t),
    queryFn: async () => (t ? await ge(e, t) : []),
    staleTime: 6e5,
  };
}
function ve(e) {
  return [`RecommendedTag`, e ?? 0];
}
var ye = `_1wbMyxGnGy8-`,
  be = `-D61WKs-ZxQ-`,
  xe = `XUHGRxAX2xY-`,
  Se = `NH1MEWmeFeg-`,
  Ce = `Ef3pPDTc654-`,
  we = `URoGnzLvPas-`,
  Te = `T-FsaU490gE-`,
  Ee = `rMfcun2JSm8-`,
  De = `YVFVQr81mPI-`,
  Oe = `atnaqSRaIew-`,
  ke = `LkfujtBIcfQ-`,
  Ae = `RmSUNTNiH6o-`,
  je = `nVMhmfpEhl0-`,
  Me = `D-0yhpQ3YbY-`,
  Ne = `_2J2v30O7L10-`,
  Pe = `md8klOzvRXo-`,
  Fe = `G80uW2Mpt6o-`,
  Ie = `_4KA4WmZc39M-`,
  Le = `lnv5hodvZ5U-`;
function Re(e, t) {
  q.useEffect(() => {
    if (!t || !t.onended || !e) return;
    let n = t.onended,
      r = setTimeout(() => {
        n();
      }, 6e3);
    return () => clearTimeout(r);
  }, [e, t]);
}
function ze(e, t) {
  q.useEffect(() => {
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
function Be(e, t, n, r) {
  return q.useCallback(() => {
    e == 0
      ? t(!0)
      : e == 1 && n
        ? n.paused
          ? n.play()
          : n.pause()
        : e == 2 && r && (r.IsPaused() ? r.Play() : r.Pause());
  }, [e, n, r, t]);
}
function Ve(e, t, n, r, i, a) {
  let [o, s] = q.useState(!1);
  q.useEffect(() => {
    e && !o
      ? t == 1 && n && r
        ? (n.pause(), s(!0))
        : t == 2 && i && a && (i.Pause(), s(!0))
      : !e && o && (t == 1 && n ? n.play() : t == 2 && i && i.Play(), s(!1));
  }, [t, e, o, r, a, n, i]);
}
var X = new R(`TrailerAppVideo`),
  He = `bGameHighlightAutoplayDisabled`;
function Ue(e) {
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
    [u, d] = q.useState(!1),
    [f, p] = q.useState(!1),
    h = v(),
    g = j(t, i, !0, c),
    { data: E } = D(t),
    { data: O } = T(t),
    k = w(t),
    A = (c ?? !0) && g && !g.all_ages && h == `masked`,
    M = C(),
    [P, F] = q.useState(!1),
    [I, L] = q.useState(0),
    [R, z] = (0, q.useState)(null),
    [B, V] = (0, q.useState)(null),
    { bCookieLoaded: H } = Ge(r, n, d),
    U = H;
  (q.useEffect(() => {
    n && U && u && !A && p(!0);
  }, [u, U, n, A]),
    q.useEffect(() => {
      A && f && u && M();
    }, [f, A, u, M]));
  let ee = (e) => {
      (N(r ?? He, String(!e), 3650), d(e), p(e));
    },
    W = Be(I, p, B, R);
  q.useEffect(() => {
    s && (s.current = W);
  }, [W, s]);
  let te =
    a && k && k.length > 0
      ? x(k[0], `600x338`)
      : O
        ? b(O, `main_capsule`)
        : void 0;
  return (0, J.jsxs)(_, {
    className: Oe,
    onMouseEnter: () => F(!0),
    onMouseLeave: () => F(!1),
    children: [
      (0, J.jsx)(`button`, {
        onClick: W,
        "aria-label": y.Localize(`#SaleTrailerCarousel_PlayPause`),
        children: (0, J.jsx)(`img`, {
          className: S(Ie, I != 0 && void 0),
          src: te,
          alt: ``,
        }),
      }),
      E &&
        (0, J.jsx)(Ze, {
          appID: E.appid,
          bAutoplayVideos: u,
          autoplayCheckboxPosition: o,
          fnSetAutoPlayVideos: ee,
        }),
      (0, J.jsx)(m, {
        name: E?.name ?? ``,
        trailerCategory: g?.trailer_category,
        trailerDisplay: I,
        mouseOver: P,
      }),
      (0, J.jsx)(Ke, {
        eTrailerDisplay: I,
        setTrailerDisplay: L,
        featuredTrailer: g,
        fnSetMainTrailer: z,
        fnSetMicroTrailer: V,
        loadedAndActive: U && n,
        setVideoShouldStart: p,
        bMouseOverVideo: P,
        id: t,
        fnTogglePlayPause: W,
        bAutoplayVideos: u,
        bVideoShouldStart: f,
        ...l,
      }),
      A &&
        u &&
        (0, J.jsxs)(`div`, {
          className: `pTTlmyp5hVo-`,
          children: [
            (0, J.jsx)(`div`, {
              className: `ERlbHjA197s-`,
              children: G(`#StoreTrailer_AOWarning_1`),
            }),
            (0, J.jsx)(`div`, {
              className: `ERlbHjA197s-`,
              children: G(`#StoreTrailer_AOWarning_2`),
            }),
          ],
        }),
    ],
  });
}
function We(e, t) {
  let [n, r] = q.useState(!1);
  return (
    q.useEffect(() => (e && (t(), r(!0)), () => r(!1)), [e, t]),
    { bCookieLoaded: n }
  );
}
function Ge(e, t, n) {
  return We(
    t,
    q.useCallback(() => {
      let t = oe(e ?? He);
      n(!(t && t.toLowerCase() === `true`));
    }, [e, n]),
  );
}
function Ke(e) {
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
      fnSetMainTrailer: d,
      fnSetMicroTrailer: f,
      loadedAndActive: p,
      setVideoShouldStart: m,
      fnTogglePlayPause: h,
      bAutoplayVideos: g,
      bVideoShouldStart: v,
    } = e,
    [y, b] = q.useState(!1),
    [x, S] = q.useState(!1),
    [C, w] = q.useState(!1),
    [T, O] = q.useState(!1),
    [k, A] = (0, q.useState)(null),
    [j, M] = (0, q.useState)(null),
    { data: N } = D(t),
    P = !!n;
  (q.useEffect(() => {
    let e = !1;
    (p && x && P && (e = c === 0 || (c === 1 && !C) || (c === 2 && !T)),
      b(e),
      a?.(g && e));
  }, [a, c, T, C, p, g, x, P]),
    ze(j, w),
    q.useEffect(() => {
      v ||
        (l(0),
        b(!1),
        S(!1),
        j && (j.pause(), (j.currentTime = 0)),
        k && (k.Pause(), k.SeekToStart()));
    }, [v, k, j, l]));
  let F = q.useRef(!1);
  (q.useEffect(() => {
    if (p && c === 0) {
      if ((S(!0), v)) {
        if (k) {
          (X.Debug(`Starting microtrailer`), l(1));
          let e = () => Je(F, l, k);
          r || !j
            ? e()
            : (w(!0), (j.onended = e), Ye(j, `microtrailer`, () => w(!1)));
        }
      } else X.Debug(`Showing image`);
    }
  }, [p, c, r, v, s, l, k, j]),
    Re(C, j),
    q.useEffect(() => {
      p || m(!1);
    }, [p, m]),
    Ve(!!o, c, j, C, k, T));
  let I = (0, q.useCallback)((e) => {
    (f(e), M(e));
  }, []);
  return !N || !N.visible || !n
    ? null
    : (0, J.jsxs)(J.Fragment, {
        children: [
          y &&
            (0, J.jsx)(_, {
              focusable: !0,
              onClick: h,
              className: `z39v7Mbdy8s-`,
              children: (0, J.jsx)(E, {}),
            }),
          n.microtrailer &&
            (0, J.jsx)(`video`, {
              className: Xe(!0, c),
              ref: I,
              preload: `auto`,
              playsInline: !0,
              muted: !0,
              onClick: h,
              children: (0, J.jsx)(u, { trailer: n }),
            }),
          (0, J.jsx)(qe, {
            trailer: n,
            onRefChange: (e) => {
              (A(e), d(e));
            },
            eTrailerDisplay: c,
            fadeRatio: i,
            onPlayPauseChange: O,
            onPlaybackEnd: s,
          }),
        ],
      });
}
function qe(e) {
  let {
      trailer: t,
      eTrailerDisplay: n,
      fadeRatio: r,
      onPlayPauseChange: i,
      onPlaybackEnd: a,
      onRefChange: o,
    } = e,
    [s, c] = (0, q.useState)(null);
  (0, q.useEffect)(() => {
    if (r !== void 0 && s) {
      let e = s.GetVolume() * r;
      s.SetVolume(e, !0);
    }
  }, [r, s]);
  let l = n != 2,
    u = Xe(!1, n),
    d = (0, q.useMemo)(() => ee(t), [t]),
    f = (0, q.useCallback)((e) => {
      (c(e), o(e));
    }, []),
    m = (0, q.useCallback)(() => {
      i(!0);
    }, [i]);
  return (0, J.jsx)(h, {
    children: (0, J.jsx)(`div`, {
      className: u,
      children: (0, J.jsx)(p, {
        ref: f,
        dashManifests: d.rgDashTrailers,
        hlsManifest: d.rgHlsTrailers[0],
        captionManifest: re(t),
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
function Je(e, t, n) {
  e.current ||
    ((e.current = !0), X.Debug(`Starting main trailer`), t(2), n.Play());
}
function Ye(e, t, n) {
  e.play().catch((e) => {
    (n(), X.Warning(`Failed to play ${t}: `, e));
  });
}
function Xe(e, t) {
  return S({
    [Ae]: !0,
    [Me]: t == 2,
    [Ne]: t == 1,
    [Pe]: t == 0,
    [je]: e,
    [Fe]: !e,
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
  return (0, J.jsx)(J.Fragment, {
    children: (0, J.jsx)(`div`, {
      onClick: (e) => {
        (e.preventDefault(), e.stopPropagation());
      },
      className: Le,
      children: (0, J.jsx)(
        te,
        {
          controlled: !0,
          checked: n,
          className: ke,
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
    { data: h } = D(m),
    { data: g } = ie(m),
    { bIsIgnored: v } = Z(t),
    { bIsWishlisted: y } = Q(t),
    { bIsWishlisted: b } = Q(h?.related_items?.parent_appid),
    [x, C] = H();
  return (0, J.jsxs)(_, {
    className: S(ye, `AppVideoCtn`),
    children: [
      (0, J.jsx)(`div`, {
        className: S(be, (y || b) && `cIdEvZnHFHs-`),
        children: G(`#Sale_OnWishlist`),
      }),
      x &&
        (0, J.jsx)(ae, {
          eDisplay: C,
          className: `ojoUrkK-4ss-`,
          storeItemPlatform: g,
        }),
      (0, J.jsxs)(`div`, {
        className: xe,
        children: [
          (0, J.jsx)($e, { appID: t }),
          (0, J.jsx)(
            Ue,
            {
              id: m,
              trailerBaseID: n,
              bCurrentlyActive: r && !v,
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
function Z(e) {
  let t = U(e),
    n = L(),
    { mutateAsync: r } = f(e, !t, n);
  return { bIsIgnored: t, fnUpdateIgnored: r };
}
function $e(e) {
  let { appID: t } = e,
    n = g(),
    { bIsIgnored: r, fnUpdateIgnored: i } = Z(t);
  return (0, J.jsx)(`div`, {
    className: S(Se, r && `cIdEvZnHFHs-`),
    children: (0, J.jsxs)(`div`, {
      className: S(Ce, r && `cIdEvZnHFHs-`),
      children: [
        (0, J.jsx)(`div`, {
          className: we,
          children: G(`#SaleTrailerCarousel_Ignored`),
        }),
        (0, J.jsx)(`div`, {
          className: Te,
          children: G(`#SaleTrailerCarousel_IgnoredConfirmation`),
        }),
        (0, J.jsxs)(_, {
          className: S(De, Ee),
          onClick: i,
          children: [
            n && (0, J.jsx)(l, { button: o.X, type: s.Light, size: c.Medium }),
            G(`#SaleTrailerCarousel_Undo`),
          ],
        }),
      ],
    }),
  });
}
function Q(e) {
  let t = !!ne(e),
    n = L(),
    { mutate: r } = d(e, !t, n);
  return { bIsWishlisted: t, fnUpdateWishlist: r };
}
function et(e) {
  let { data: t } = _e(),
    n = q.useMemo(
      () => new Map((t || []).map((e) => e.tagid).map((e, t) => [e, t])),
      [t],
    ),
    r = q.useMemo(() => new Map(e.map((e, t) => [e, t])), [e]);
  return q.useMemo(
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
        e.prototype.recommendationid || B(e.M()),
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
              br: P.readUint64String,
              bw: F.writeUint64String,
            },
            review_text: { n: 2, br: P.readString, bw: F.writeString },
            voted_up: { n: 3, br: P.readBool, bw: F.writeBool },
            is_public: { n: 4, br: P.readBool, bw: F.writeBool },
            language: { n: 5, br: P.readString, bw: F.writeString },
            is_in_early_access: { n: 6, br: P.readBool, bw: F.writeBool },
            received_compensation: { n: 7, br: P.readBool, bw: F.writeBool },
            comments_disabled: { n: 8, br: P.readBool, bw: F.writeBool },
            hide_in_steam_china: { n: 9, br: P.readBool, bw: F.writeBool },
            saved_hardware_id: {
              n: 10,
              br: P.readUint64String,
              bw: F.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= W(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return K(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      V(e.M(), t, n);
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
        e.prototype.saved_hardware_id || B(e.M()),
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
              br: P.readUint64String,
              bw: F.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= W(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return K(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      V(e.M(), t, n);
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
        e.prototype.num_backfilled || B(e.M()),
        $.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            num_backfilled: { n: 1, br: P.readUint32, bw: F.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= W(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return K(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      V(e.M(), t, n);
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
        e.prototype.reaction_type || B(e.M()),
        $.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            reaction_type: { n: 1, br: P.readUint32, bw: F.writeUint32 },
            count: { n: 2, br: P.readUint32, bw: F.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= W(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return K(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      V(e.M(), t, n);
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
        e.prototype.id || B(e.M()),
        $.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            id: { n: 1, br: P.readEnum, bw: F.writeEnum },
            ranges: { n: 2, c: st, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= W(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return K(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      V(e.M(), t, n);
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
        e.prototype.start || B(e.M()),
        $.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            start: { n: 1, br: P.readUint32, bw: F.writeUint32 },
            end: { n: 2, br: P.readUint32, bw: F.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= W(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return K(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      V(e.M(), t, n);
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
        e.prototype.recommendationid || B(e.M()),
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
              br: P.readUint64String,
              bw: F.writeUint64String,
            },
            steamid: { n: 2, br: P.readUint64String, bw: F.writeUint64String },
            appid: { n: 3, br: P.readUint32, bw: F.writeUint32 },
            review: { n: 4, br: P.readString, bw: F.writeString },
            time_created: { n: 5, br: P.readUint32, bw: F.writeUint32 },
            time_updated: { n: 6, br: P.readUint32, bw: F.writeUint32 },
            votes_up: { n: 7, br: P.readUint32, bw: F.writeUint32 },
            votes_down: { n: 8, br: P.readUint32, bw: F.writeUint32 },
            vote_score: { n: 9, br: P.readFloat, bw: F.writeFloat },
            language: { n: 10, br: P.readString, bw: F.writeString },
            comment_count: { n: 11, br: P.readUint32, bw: F.writeUint32 },
            voted_up: { n: 12, br: P.readBool, bw: F.writeBool },
            is_public: { n: 13, br: P.readBool, bw: F.writeBool },
            moderator_hidden: { n: 14, br: P.readBool, bw: F.writeBool },
            flagged_by_developer: { n: 15, br: P.readEnum, bw: F.writeEnum },
            report_score: { n: 16, br: P.readUint32, bw: F.writeUint32 },
            steamid_moderator: {
              n: 17,
              br: P.readUint64String,
              bw: F.writeUint64String,
            },
            steamid_developer: {
              n: 18,
              br: P.readUint64String,
              bw: F.writeUint64String,
            },
            steamid_dev_responder: {
              n: 19,
              br: P.readUint64String,
              bw: F.writeUint64String,
            },
            developer_response: { n: 20, br: P.readString, bw: F.writeString },
            time_developer_responded: {
              n: 21,
              br: P.readUint32,
              bw: F.writeUint32,
            },
            developer_flag_cleared: { n: 22, br: P.readBool, bw: F.writeBool },
            written_during_early_access: {
              n: 23,
              br: P.readBool,
              bw: F.writeBool,
            },
            votes_funny: { n: 24, br: P.readUint32, bw: F.writeUint32 },
            received_compensation: { n: 25, br: P.readBool, bw: F.writeBool },
            unverified_purchase: { n: 26, br: P.readBool, bw: F.writeBool },
            review_qualities: {
              n: 27,
              r: !0,
              q: !0,
              br: P.readEnum,
              pbr: P.readPackedEnum,
              bw: F.writeRepeatedEnum,
            },
            weighted_vote_score: { n: 28, br: P.readFloat, bw: F.writeFloat },
            moderation_note: { n: 29, br: P.readString, bw: F.writeString },
            payment_method: { n: 30, br: P.readInt32, bw: F.writeInt32 },
            playtime_2weeks: { n: 31, br: P.readInt32, bw: F.writeInt32 },
            playtime_forever: { n: 32, br: P.readInt32, bw: F.writeInt32 },
            last_playtime: { n: 33, br: P.readInt32, bw: F.writeInt32 },
            comments_disabled: { n: 34, br: P.readBool, bw: F.writeBool },
            playtime_at_review: { n: 35, br: P.readInt32, bw: F.writeInt32 },
            approved_for_china: { n: 36, br: P.readBool, bw: F.writeBool },
            ban_check_result: { n: 37, br: P.readEnum, bw: F.writeEnum },
            refunded: { n: 38, br: P.readBool, bw: F.writeBool },
            account_score_spend: { n: 39, br: P.readInt32, bw: F.writeInt32 },
            reactions: { n: 40, c: at, r: !0, q: !0 },
            ipaddress: { n: 41, br: P.readString, bw: F.writeString },
            hidden_in_steam_china: { n: 42, br: P.readBool, bw: F.writeBool },
            steam_china_location: {
              n: 43,
              br: P.readString,
              bw: F.writeString,
            },
            category_ascii_pct: { n: 44, br: P.readUint32, bw: F.writeUint32 },
            category_meme_pct: { n: 45, br: P.readUint32, bw: F.writeUint32 },
            category_offtopic_pct: {
              n: 46,
              br: P.readUint32,
              bw: F.writeUint32,
            },
            category_uninformative_pct: {
              n: 47,
              br: P.readUint32,
              bw: F.writeUint32,
            },
            category_votefarming_pct: {
              n: 48,
              br: P.readUint32,
              bw: F.writeUint32,
            },
            deck_playtime_at_review: {
              n: 49,
              br: P.readInt32,
              bw: F.writeInt32,
            },
            is_bot_review_pct: { n: 50, br: P.readUint32, bw: F.writeUint32 },
            positivity_pct: { n: 51, br: P.readUint32, bw: F.writeUint32 },
            tags_with_ranges: { n: 54, c: ot, r: !0, q: !0 },
            saved_hardware_id: {
              n: 56,
              br: P.readUint64String,
              bw: F.writeUint64String,
            },
            hardware_cluster_id: {
              n: 57,
              br: P.readUint64String,
              bw: F.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= W(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return K(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      V(e.M(), t, n);
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
        e.prototype.appid || B(e.M()),
        $.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { appid: { n: 1, br: P.readUint32, bw: F.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= W(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return K(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      V(e.M(), t, n);
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
        e.prototype.accountids_recommended || B(e.M()),
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
              br: P.readUint32,
              pbr: P.readPackedUint32,
              bw: F.writeRepeatedUint32,
            },
            accountids_not_recommended: {
              n: 3,
              r: !0,
              q: !0,
              br: P.readUint32,
              pbr: P.readPackedUint32,
              bw: F.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= W(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return K(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      V(e.M(), t, n);
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
        e.prototype.requests || B(e.M()),
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
      return ((e.sm_mbf ||= W(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return K(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      V(e.M(), t, n);
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
        e.prototype.steamid || B(e.M()),
        $.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: { n: 1, br: P.readUint64String, bw: F.writeUint64String },
            appid: { n: 2, br: P.readUint32, bw: F.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= W(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return K(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      V(e.M(), t, n);
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
        e.prototype.recommendations || B(e.M()),
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
      return ((e.sm_mbf ||= W(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return K(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      V(e.M(), t, n);
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
    return e.SendMsg(`UserReviews.Update#1`, z(tt, t, n), nt, {
      ePrivilege: 3,
    });
  }
  e.Update = t;
  function n(e, t, n) {
    return e.SendMsg(`UserReviews.BackfillSavedHardware#1`, z(rt, t, n), it, {
      ePrivilege: 1,
    });
  }
  e.BackfillSavedHardware = n;
  function r(e, t, n) {
    return e.SendMsg(
      `UserReviews.GetFriendsRecommendedApp#1`,
      z(lt, t, n),
      ut,
      { bConstMethod: !0, ePrivilege: 1, rgBrowserAPISites: [`store`] },
    );
  }
  e.GetFriendsRecommendedApp = r;
  function i(e, t, n) {
    return e.SendMsg(
      `UserReviews.GetIndividualRecommendations#1`,
      z(dt, t, n),
      pt,
      {
        bConstMethod: !0,
        ePrivilege: 1,
        eWebAPIKeyRequirement: 2,
        rgBrowserAPISites: [`store`],
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
  he as Mt,
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
  Y as jt,
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
