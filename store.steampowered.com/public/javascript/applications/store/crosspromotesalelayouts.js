/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { It as t, ct as n, dt as r } from "./chunk~01cfc309bf.js";
import {
  $ as i,
  Dn as a,
  G as o,
  K as s,
  Ls as c,
  Rs as l,
  cn as u,
  cr as d,
  i as f,
  rt as p,
  u as m,
} from "./chunk~6b8ddcaac8.js";
import { A as h, st as g } from "./chunk~f57d770d64.js";
import { n as _, r as ee, s as te } from "./chunk~4eed35ad1f.js";
import { a as v, i as y } from "./chunk~f4c928a27a.js";
import { c as b } from "./chunk~7b4b9eb713.js";
import { f as ne } from "./chunk~618fb52a90.js";
import { r as re } from "./chunk~e70aabe4d7.js";
import { n as ie } from "./chunk~710e3cfd2f.js";
import {
  Bc as ae,
  Dl as oe,
  Ib as x,
  Kr as S,
  Pc as C,
  Tv as se,
  Vc as w,
  Zi as ce,
  bv as le,
  ex as ue,
  ib as T,
  la as de,
  ox as fe,
  rx as E,
  sa as pe,
} from "./main.js";
var D = e(t(), 1);
function O(e, t) {
  return !t || t.startsWith(`https://`) || t.startsWith(`http://`)
    ? t
    : `${E.CLAN_CDN_ASSET_URL}images/clan/${e}/${t}`;
}
var k = `poster`,
  me = `${k}.avif`,
  he = /^([0-9a-f]{32})(?:_2x)?\.[a-z0-9.]+$/i;
function ge(e) {
  let t = e.video_webm_src || e.video_mp4_src;
  if (!t || e.image?.includes(`.${k}.`)) return e.image;
  let n = he.exec(t);
  return n ? `${n[1]}.${me}` : e.image;
}
function _e(e, t) {
  return !e?.creator_clan_id || !e.appids
    ? null
    : {
        clanAccountID: e.creator_clan_id,
        strEventGID: ``,
        strName: e.name ?? ``,
        strCapsuleURL: e.avatar_url_full_size || void 0,
        strSaleURL: l(e, t === `creator` ? null : t),
        eCreatorRole: t,
        rgCreatorAppIDs: e.appids,
      };
}
function ve(e) {
  if (!e?.clan_accountid || !e.clan_event_gid) return null;
  let t = e.cross_promo;
  return {
    clanAccountID: e.clan_accountid,
    strEventGID: e.clan_event_gid,
    strName: e.event_name ?? ``,
    rtEndTime: e.rtime32_end_time || void 0,
    strSummary: e.summary || void 0,
    strCapsuleURL: M(e),
    strSaleURL: e.store_path ? E.STORE_BASE_URL + e.store_path : void 0,
    strBackgroundURL: O(e.clan_accountid, t?.background_image),
    strScrimColor: t?.scrim_color || void 0,
    strLogoURL: j(e.clan_accountid, t?.logo?.image),
    eDesktopLayout: t?.desktop_layout === `logo_top` ? `logo_top` : void 0,
  };
}
function A(e, t) {
  let n = re(e ?? void 0, `capsule`, t);
  if (!e) return;
  let r = e.clanSteamID.GetAccountID();
  return {
    clanAccountID: r,
    strEventGID: e.GID ?? ``,
    strName: e.GetNameWithFallback(t) ?? ``,
    rtEndTime: e.endTime || void 0,
    strSummary: e.GetSummaryWithFallback(t) || void 0,
    strCapsuleURL: n,
    strSaleURL: b(e) ?? void 0,
    strBackgroundURL: O(
      r,
      e.jsondata.sale_cross_promo_carousel_background?.image,
    ),
    strScrimColor: e.jsondata.sale_cross_promo_scrim_color || void 0,
    strLogoURL: i(e, t),
    eDesktopLayout:
      e.jsondata.sale_cross_promo_desktop_layout === `logo_top`
        ? `logo_top`
        : void 0,
  };
}
function j(e, t) {
  if (t) return t.startsWith(`http`) ? t : g.GenerateURLFromHashAndExt(e, t);
}
function M(e) {
  let t = e.capsule_image?.image;
  if (t && e.clan_accountid)
    return e.capsule_image?.from_body
      ? g.ReplacementTokenToClanImageURL(t)
      : j(e.clan_accountid, t);
}
function N(e) {
  return (e ?? []).slice(0, 48).map((e) => ({ appid: e }));
}
function P(e) {
  return o(e) ? (p(e)[0]?.capsules ?? []).flatMap((e) => d(e) ?? []) : [];
}
function F(e, t) {
  let r = le(),
    i = n({
      queries: e.map((e) => {
        let n = o(e),
          r = c(n);
        return t ? { ...r, enabled: !1 } : r;
      }),
    }),
    a = e.map(P),
    l = n({
      queries: a.flat().map((e) => {
        let n = se(r, e);
        return t ? { ...n, enabled: !1 } : n;
      }),
    }),
    u = 0;
  return e.map((e, t) => {
    let n = a[t].length,
      r = l.slice(u, u + n);
    u += n;
    let c = o(e);
    if (!c) return { data: void 0, bPending: !1 };
    let d = i[t];
    if (d.isPending || r.some((e) => e.isPending))
      return { data: void 0, bPending: !0 };
    let f = s(
      c,
      r.map((e) => e.data),
    );
    return { data: _e(d.data, f), bPending: !1 };
  });
}
var I = `Es-UANTRhdg-`,
  ye = `dv9UZEOxkuA-`,
  be = `DsfJ3U7A71o-`,
  xe = `CUTWfXkiCwY-`,
  Se = `KiJVH4vp4eM-`,
  Ce = `YJT5S54fzP0-`,
  we = `KNEaTOnJJWw-`,
  Te = `KoPPnD8UeHY-`,
  Ee = `P-rHowg9bhA-`,
  L = `FsYxDNcAXaI-`,
  De = `cSFkUHyVW24-`,
  Oe = `oztjxXYIBAk-`,
  R = `yT92BfNEvpw-`,
  ke = `_6jMisrq5Zfo-`,
  Ae = `XBv92QzB8Xc-`,
  je = `_6iUHDist0Jc-`,
  z = `gxh8RxFKhr8-`,
  Me = `tYvCiFSJDdI-`,
  Ne = `xKMeNFV4-6I-`,
  Pe = `AZSEWyNPfhc-`,
  Fe = `gZNFN-cKUHw-`,
  Ie = `VCRuNjWNqVc-`,
  Le = `AmB85SkEC3Q-`,
  Re = `P5j4maR0i14-`,
  ze = `onuExqD0nzM-`,
  Be = `LZEiK-08jms-`,
  Ve = `P1C9O-r-7FI-`,
  B = r(),
  V = D.createContext(!1),
  He = D.createContext(void 0),
  Ue = D.createContext(!1),
  H = D.createContext(null);
function U(e, t, n) {
  let { bShowSeeMoreHint: r, panelProps: i } = ee(n ? e : void 0, `X`),
    a = D.useContext(H),
    o = !!a && n && !!e;
  return (
    D.useEffect(() => {
      if (o && a) return (a({ strLabel: t, bShown: r }), () => a(null));
    }, [o, a, t, r]),
    { bShowSeeMoreHint: r, panelProps: i, bHintInHeading: o }
  );
}
var We = { logo_left: Ge, logo_top: Ke, event_capsule: W };
function Ge(e) {
  let {
      promotedSaleEvent: t,
      children: n,
      nItemsToFeature: r,
      section: i,
      bInGamepadUI: a,
    } = e,
    o = t?.strSaleURL,
    s = $(i),
    { bShowSeeMoreHint: c, panelProps: l, bHintInHeading: u } = U(o, s, a);
  return (0, B.jsxs)(X, {
    ...e,
    className: xe,
    panelProps: l,
    children: [
      (0, B.jsx)(Z, { promotedSaleEvent: t }),
      (0, B.jsxs)(`div`, {
        className: Te,
        children: [
          (0, B.jsx)(Q, { promotedSaleEvent: t }),
          (0, B.jsx)(Y, {
            nItemsToFeature: r,
            strSaleURL: o,
            strExploreLabel: s,
            exploreHint: a && o ? { bShown: c, bInHeading: u } : void 0,
            children: n,
          }),
        ],
      }),
    ],
  });
}
function Ke(e) {
  let {
      promotedSaleEvent: t,
      children: n,
      nItemsToFeature: r,
      section: i,
      bInGamepadUI: a,
    } = e,
    o = t?.strSaleURL,
    s = $(i),
    { bShowSeeMoreHint: c, panelProps: l, bHintInHeading: u } = U(o, s, a);
  return (0, B.jsxs)(X, {
    ...e,
    className: Se,
    panelProps: l,
    children: [
      (0, B.jsx)(Z, { promotedSaleEvent: t }),
      (0, B.jsxs)(`div`, {
        className: Ee,
        children: [
          (0, B.jsx)(Q, { promotedSaleEvent: t }),
          (0, B.jsx)(Y, {
            nItemsToFeature: r,
            strSaleURL: o,
            strExploreLabel: s,
            exploreHint: a && o ? { bShown: c, bInHeading: u } : void 0,
            children: n,
          }),
        ],
      }),
    ],
  });
}
function W(e) {
  let {
      promotedSaleEvent: t,
      children: n,
      nItemsToFeature: r,
      bInGamepadUI: i,
      section: a,
    } = e,
    o = t?.eCreatorRole ? J(t.eCreatorRole) : $(a),
    {
      bShowSeeMoreHint: s,
      panelProps: c,
      bHintInHeading: l,
    } = U(t?.strSaleURL, o, i);
  return (0, B.jsx)(X, {
    ...e,
    className: L,
    "flow-children": `row`,
    panelProps: { ...c, navEntryPreferPosition: oe.PREFERRED_CHILD },
    children: (0, B.jsx)(G, {
      saleEvent: t,
      bShowExploreHint: s,
      bExploreHintInHeading: l,
      strExploreLabel: $(a),
      children: (0, B.jsx)(Y, {
        nItemsToFeature: r,
        eCreatorRole: t?.eCreatorRole,
        children: (0, B.jsx)(w, { preferredFocus: !0, children: n }),
      }),
    }),
  });
}
function qe(e) {
  let { event: t, language: n, strSaleURL: r } = e,
    i = A(t, n);
  if (!i) return null;
  let a = r ? { ...i, strSaleURL: r } : i;
  return a.strSaleURL
    ? (0, B.jsx)(w, {
        className: C(I, L, De),
        "flow-children": `row`,
        children: (0, B.jsx)(G, { saleEvent: a, bExploreButtonBelow: !0 }),
      })
    : null;
}
function G(e) {
  let {
      saleEvent: t,
      bExploreButtonBelow: n,
      bShowExploreHint: r,
      bExploreHintInHeading: i,
      children: a,
    } = e,
    o = t?.strSaleURL,
    s = t?.eCreatorRole,
    c = s || !e.strExploreLabel ? J(s) : e.strExploreLabel,
    l = t?.strCapsuleURL,
    u = t?.strSummary,
    d = de(),
    p = ue(),
    m = p && r !== void 0,
    h = D.useContext(He),
    g = t?.rtEndTime
      ? ce(t.rtEndTime, {
          weekday: void 0,
          year: void 0,
          month: `short`,
          day: `numeric`,
          timeZone: d,
        })
      : void 0;
  return (0, B.jsxs)(B.Fragment, {
    children: [
      (0, B.jsxs)(`div`, {
        className: ye,
        children: [
          l &&
            !s &&
            (0, B.jsx)(`div`, {
              className: `qbRGxo4aWcc-`,
              style: { backgroundImage: `url(${l})` },
            }),
          l &&
            (0, B.jsx)(`div`, {
              className: C(`HgvxVtFlDis-`, s && `Lp2CuPiW8Lo-`),
              style: { backgroundImage: `url(${l})` },
            }),
          s &&
            (0, B.jsx)(Xe, { rgAppIDs: t?.rgCreatorAppIDs, strAvatarURL: l }),
        ],
      }),
      (0, B.jsxs)(`div`, {
        className: C(R, s && `-NAWu4CYrl8-`),
        children: [
          s &&
            l &&
            (0, B.jsx)(f, {
              url: o,
              className: `X4LW9zxgdTo-`,
              bFocusable: !1,
              children: (0, B.jsx)(`img`, { src: l, alt: `` }),
            }),
          !s &&
            (0, B.jsxs)(`div`, {
              className: `_6jMisrq5Zfo-`,
              children: [
                (0, B.jsx)(`div`, {
                  className: `XBv92QzB8Xc-`,
                  children: (0, B.jsx)(f, {
                    url: o,
                    className: `NjUCqxvhkHk-`,
                    bFocusable: !1,
                    children: t?.strName,
                  }),
                }),
                h === void 0
                  ? g &&
                    (0, B.jsx)(`div`, {
                      className: `_6iUHDist0Jc-`,
                      children: T(`#Sale_CrossPromoSale_NowThrough`, g),
                    })
                  : h &&
                    (0, B.jsx)(`div`, {
                      className: `_6iUHDist0Jc-`,
                      children: h,
                    }),
              ],
            }),
          o &&
            !n &&
            !m &&
            !s &&
            (0, B.jsx)(f, {
              url: o,
              className: C(`_6O6T0vupYYc-`, `DuNM8zA4oz0-`),
              fnCanTakeFocus: S,
              children: c,
            }),
          o && m && !i && (0, B.jsx)(_, { label: c, shown: !!r, button: `X` }),
        ],
      }),
      (0, B.jsxs)(`div`, {
        className: C(z, s && `ZONqp3dzTMI-`),
        children: [
          l &&
            (0, B.jsxs)(f, {
              url: o,
              className: C(`oztjxXYIBAk-`, s && `CDF-2WDX3lg-`),
              bFocusable: !!p,
              children: [
                (0, B.jsx)(`img`, { src: l, alt: `` }),
                u &&
                  (0, B.jsx)(`div`, {
                    className: `_7CUHH8Trg28-`,
                    children: (0, B.jsx)(`div`, {
                      className: `ZMGnYjKDOEI-`,
                      children: u,
                    }),
                  }),
              ],
            }),
          a,
        ],
      }),
      o &&
        !m &&
        !s &&
        (0, B.jsx)(`div`, {
          className: C(`T1fHkhyvNkM-`, n && `SAqjQ-F71kA-`),
          children: (0, B.jsx)(f, {
            url: o,
            className: `_6O6T0vupYYc-`,
            fnCanTakeFocus: S,
            children: c,
          }),
        }),
    ],
  });
}
var Je = 60,
  Ye = 4;
function Xe(e) {
  let { rgAppIDs: t, strAvatarURL: n } = e,
    r = D.useMemo(() => N(t), [t]),
    i = m(r, !1),
    a = D.useMemo(() => {
      let e = (i ?? []).slice(0, 24);
      return e.length < Ye
        ? []
        : Array.from({ length: Je }, (t, n) => e[n % e.length]);
    }, [i]);
  return a.length
    ? (0, B.jsxs)(`div`, {
        className: Pe,
        "aria-hidden": !0,
        children: [
          n &&
            (0, B.jsx)(`div`, {
              className: `ODb7GVMZzG8-`,
              style: { backgroundImage: `url(${n})` },
            }),
          (0, B.jsx)(`div`, {
            className: Fe,
            children: a.map((e, t) => (0, B.jsx)(Ze, { id: e }, t)),
          }),
        ],
      })
    : null;
}
function Ze(e) {
  let t = ae(e.id, `header`);
  return t
    ? (0, B.jsx)(`img`, { src: t, alt: ``, loading: `lazy` })
    : (0, B.jsx)(`div`, {});
}
function K(e) {
  let { children: t, nItemsToFeature: n } = e;
  return (0, B.jsxs)(X, {
    ...e,
    className: L,
    children: [
      (0, B.jsx)(y, {
        className: R,
        children: (0, B.jsxs)(`div`, {
          className: ke,
          children: [
            (0, B.jsx)(`div`, { className: C(Ae, v), children: `\xA0` }),
            (0, B.jsx)(`div`, { className: C(je, v), children: `\xA0` }),
          ],
        }),
      }),
      (0, B.jsxs)(`div`, {
        className: z,
        children: [
          (0, B.jsx)(y, {
            className: Oe,
            children: (0, B.jsx)(`div`, { className: C(v, Me) }),
          }),
          (0, B.jsx)(Y, { nItemsToFeature: n, children: t }),
        ],
      }),
    ],
  });
}
var q = {
  strSignedIn: `#Sale_CrossPromoSale_RecommendedFromEvent`,
  strSignedOut: `#Sale_CrossPromoSale_RecommendedFromEvent_notloggedin`,
};
function J(e) {
  return T(
    e
      ? `#Sale_CrossPromoCreator_Visit_${e}`
      : `#Sale_CrossPromoSale_ExploreEvent`,
  );
}
function Y(e) {
  let {
      children: t,
      nItemsToFeature: n,
      strSaleURL: r,
      eCreatorRole: i,
      exploreHint: a,
    } = e,
    o = !!r && !a,
    s = D.useContext(V),
    c = !i && !s,
    l = i || !e.strExploreLabel ? J(i) : e.strExploreLabel,
    u = fe.logged_in
      ? x.Localize(q.strSignedIn)
      : x.LocalizePlural(q.strSignedOut, n ?? 0);
  return (0, B.jsxs)(`div`, {
    className: we,
    children: [
      (c || o || (a && !a.bInHeading)) &&
        (0, B.jsxs)(`div`, {
          className: `ypQ9RrTsvmE-`,
          children: [
            c && (0, B.jsx)(`div`, { className: `aMHZOpwLiBw-`, children: u }),
            o &&
              (0, B.jsx)(f, {
                url: r,
                className: C(`_6O6T0vupYYc-`, `DuNM8zA4oz0-`),
                fnCanTakeFocus: S,
                children: l,
              }),
            a &&
              !a.bInHeading &&
              (0, B.jsx)(`div`, {
                className: `Ri7uYDYJ-bo-`,
                children: (0, B.jsx)(_, {
                  label: l,
                  shown: a.bShown,
                  button: `X`,
                }),
              }),
          ],
        }),
      t,
      o &&
        (0, B.jsx)(`div`, {
          className: `T1fHkhyvNkM-`,
          children: (0, B.jsx)(f, {
            url: r,
            className: `_6O6T0vupYYc-`,
            fnCanTakeFocus: S,
            children: l,
          }),
        }),
    ],
  });
}
function X(e) {
  let {
    section: t,
    bInGamepadUI: n,
    placeholderHeight: r,
    className: i,
    "flow-children": o,
    panelProps: s,
    children: c,
  } = e;
  return (0, B.jsx)(ie, {
    placeholderHeight: r,
    className: C({
      [a]: !0,
      [u]: h(t),
      [ne]: !0,
      SaleSectionForCustomCSS: !0,
      [I]: !0,
      [i]: !0,
    }),
    rootMargin: te,
    holdGamepadFocus: n,
    "flow-children": o,
    ...s,
    children: c,
  });
}
function Z(e) {
  let { promotedSaleEvent: t } = e;
  if (!t) return null;
  let { strBackgroundURL: n, strScrimColor: r } = t,
    i = n ? { backgroundImage: `url(${n})` } : void 0;
  return (0, B.jsxs)(`div`, {
    className: C(be, r && `Q2Etnziq-Ow-`),
    style: r ? { backgroundColor: r } : void 0,
    children: [
      i && (0, B.jsx)(`div`, { className: `hcF0Za7ucCA-`, style: i }),
      i && (0, B.jsx)(`div`, { className: `Rya5E4ml32o-`, style: i }),
    ],
  });
}
function Q(e) {
  let { promotedSaleEvent: t } = e;
  return t?.strLogoURL
    ? (0, B.jsx)(f, {
        url: t.strSaleURL,
        className: Ce,
        bFocusable: !1,
        children: (0, B.jsx)(`img`, { src: t.strLogoURL, alt: t.strName }),
      })
    : null;
}
var Qe = [1e3, 500, 250, 100, 50, 20];
function $(e) {
  let t = e.sale_page_cross_promo_sales?.[0]?.total_items ?? 0,
    n = Qe.find((e) => t >= e);
  return n
    ? T(`#Sale_CrossPromoSale_ExploreItems`, pe(n))
    : T(`#Sale_CrossPromoSale_ExploreEvent`);
}
export {
  A as _,
  qe as a,
  Ne as c,
  Ve as d,
  Ie as f,
  ve as g,
  F as h,
  W as i,
  Le as l,
  Re as m,
  V as n,
  K as o,
  ze as p,
  Ue as r,
  We as s,
  H as t,
  Be as u,
  O as v,
  ge as y,
};
