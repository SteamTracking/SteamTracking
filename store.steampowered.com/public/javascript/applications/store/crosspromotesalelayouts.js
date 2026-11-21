/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { Lt as t, ft as n } from "./chunk~01cfc309bf.js";
import {
  U as r,
  Yt as i,
  i as a,
  mn as o,
  u as s,
} from "./chunk~6b8ddcaac8.js";
import { A as c, st as l } from "./chunk~f57d770d64.js";
import { n as u, r as d, s as f } from "./chunk~4eed35ad1f.js";
import { n as p, r as m } from "./chunk~b980924b6a.js";
import { c as h } from "./chunk~7b4b9eb713.js";
import { f as g } from "./chunk~618fb52a90.js";
import { n as _ } from "./chunk~e70aabe4d7.js";
import { n as ee } from "./chunk~710e3cfd2f.js";
import {
  $b as v,
  Bc as y,
  El as b,
  Fb as x,
  Kr as S,
  Nc as C,
  Xi as te,
  ax as w,
  ca as ne,
  nx as T,
  oa as re,
  rb as E,
  zc as ie,
} from "./main.js";
var D = e(t(), 1);
function O(e, t) {
  return !t || t.startsWith(`https://`) || t.startsWith(`http://`)
    ? t
    : `${T.CLAN_CDN_ASSET_URL}images/clan/${e}/${t}`;
}
var k = `poster`,
  A = `${k}.avif`,
  ae = /^([0-9a-f]{32})(?:_2x)?\.[a-z0-9.]+$/i;
function oe(e) {
  let t = e.video_webm_src || e.video_mp4_src;
  if (!t || e.image?.includes(`.${k}.`)) return e.image;
  let n = ae.exec(t);
  return n ? `${n[1]}.${A}` : e.image;
}
function se(e) {
  if (!e?.clan_accountid || !e.clan_event_gid) return null;
  let t = e.cross_promo;
  return {
    clanAccountID: e.clan_accountid,
    strEventGID: e.clan_event_gid,
    strName: e.event_name ?? ``,
    rtEndTime: e.rtime32_end_time || void 0,
    strSummary: e.summary || void 0,
    strCapsuleURL: ce(e),
    strSaleURL: e.store_path ? T.STORE_BASE_URL + e.store_path : void 0,
    strBackgroundURL: O(e.clan_accountid, t?.background_image),
    strScrimColor: t?.scrim_color || void 0,
    strLogoURL: M(e.clan_accountid, t?.logo?.image),
    eDesktopLayout: t?.desktop_layout === `logo_top` ? `logo_top` : void 0,
  };
}
function j(e, t) {
  let n = _(e ?? void 0, `capsule`, t);
  if (!e) return;
  let i = e.clanSteamID.GetAccountID();
  return {
    clanAccountID: i,
    strEventGID: e.GID ?? ``,
    strName: e.GetNameWithFallback(t) ?? ``,
    rtEndTime: e.endTime || void 0,
    strSummary: e.GetSummaryWithFallback(t) || void 0,
    strCapsuleURL: n,
    strSaleURL: h(e) ?? void 0,
    strBackgroundURL: O(
      i,
      e.jsondata.sale_cross_promo_carousel_background?.image,
    ),
    strScrimColor: e.jsondata.sale_cross_promo_scrim_color || void 0,
    strLogoURL: r(e, t),
    eDesktopLayout:
      e.jsondata.sale_cross_promo_desktop_layout === `logo_top`
        ? `logo_top`
        : void 0,
  };
}
function M(e, t) {
  if (t) return t.startsWith(`http`) ? t : l.GenerateURLFromHashAndExt(e, t);
}
function ce(e) {
  let t = e.capsule_image?.image;
  if (t && e.clan_accountid)
    return e.capsule_image?.from_body
      ? l.ReplacementTokenToClanImageURL(t)
      : M(e.clan_accountid, t);
}
function N(e) {
  return (e ?? []).slice(0, 48).map((e) => ({ appid: e }));
}
var P = `Es-UANTRhdg-`,
  F = `dv9UZEOxkuA-`,
  I = `KNEaTOnJJWw-`,
  L = `FsYxDNcAXaI-`,
  R = `cSFkUHyVW24-`,
  z = `oztjxXYIBAk-`,
  B = `yT92BfNEvpw-`,
  V = `_6jMisrq5Zfo-`,
  H = `XBv92QzB8Xc-`,
  U = `_6iUHDist0Jc-`,
  W = `gxh8RxFKhr8-`,
  G = `tYvCiFSJDdI-`,
  le = `AZSEWyNPfhc-`,
  ue = `gZNFN-cKUHw-`,
  de = `VCRuNjWNqVc-`,
  fe = `AmB85SkEC3Q-`,
  pe = `P5j4maR0i14-`,
  K = n(),
  me = D.createContext(!1),
  q = D.createContext(null);
function he(e, t, n) {
  let { bShowSeeMoreHint: r, panelProps: i } = d(n ? e : void 0, `X`),
    a = D.useContext(q),
    o = !!a && n && !!e;
  return (
    D.useEffect(() => {
      if (o && a) return (a({ strLabel: t, bShown: r }), () => a(null));
    }, [o, a, t, r]),
    { bShowSeeMoreHint: r, panelProps: i, bHintInHeading: o }
  );
}
function ge(e) {
  let {
      promotedSaleEvent: t,
      children: n,
      nItemsToFeature: r,
      bInGamepadUI: i,
      section: a,
    } = e,
    o = t?.eCreatorRole ? X(t.eCreatorRole) : $(a),
    {
      bShowSeeMoreHint: s,
      panelProps: c,
      bHintInHeading: l,
    } = he(t?.strSaleURL, o, i);
  return (0, K.jsx)(Q, {
    ...e,
    className: L,
    "flow-children": `row`,
    panelProps: { ...c, navEntryPreferPosition: b.PREFERRED_CHILD },
    children: (0, K.jsx)(J, {
      saleEvent: t,
      bShowExploreHint: s,
      bExploreHintInHeading: l,
      strExploreLabel: $(a),
      children: (0, K.jsx)(Z, {
        nItemsToFeature: r,
        eCreatorRole: t?.eCreatorRole,
        children: (0, K.jsx)(y, { preferredFocus: !0, children: n }),
      }),
    }),
  });
}
function _e(e) {
  let { event: t, language: n, strSaleURL: r } = e,
    i = j(t, n);
  if (!i) return null;
  let a = r ? { ...i, strSaleURL: r } : i;
  return a.strSaleURL
    ? (0, K.jsx)(y, {
        className: C(P, L, R),
        "flow-children": `row`,
        children: (0, K.jsx)(J, { saleEvent: a, bExploreButtonBelow: !0 }),
      })
    : null;
}
function J(e) {
  let {
      saleEvent: t,
      bExploreButtonBelow: n,
      bShowExploreHint: r,
      bExploreHintInHeading: i,
      children: o,
    } = e,
    s = t?.strSaleURL,
    c = t?.eCreatorRole,
    l = c || !e.strExploreLabel ? X(c) : e.strExploreLabel,
    d = t?.strCapsuleURL,
    f = t?.strSummary,
    p = ne(),
    m = v(),
    h = m && r !== void 0,
    g = t?.rtEndTime
      ? te(t.rtEndTime, {
          weekday: void 0,
          year: void 0,
          month: `short`,
          day: `numeric`,
          timeZone: p,
        })
      : void 0;
  return (0, K.jsxs)(K.Fragment, {
    children: [
      (0, K.jsxs)(`div`, {
        className: F,
        children: [
          d &&
            !c &&
            (0, K.jsx)(`div`, {
              className: `qbRGxo4aWcc-`,
              style: { backgroundImage: `url(${d})` },
            }),
          d &&
            (0, K.jsx)(`div`, {
              className: C(`HgvxVtFlDis-`, c && `Lp2CuPiW8Lo-`),
              style: { backgroundImage: `url(${d})` },
            }),
          c &&
            (0, K.jsx)(be, { rgAppIDs: t?.rgCreatorAppIDs, strAvatarURL: d }),
        ],
      }),
      (0, K.jsxs)(`div`, {
        className: C(B, c && `-NAWu4CYrl8-`),
        children: [
          c &&
            d &&
            (0, K.jsx)(a, {
              url: s,
              className: `X4LW9zxgdTo-`,
              bFocusable: !1,
              children: (0, K.jsx)(`img`, { src: d, alt: `` }),
            }),
          !c &&
            (0, K.jsxs)(`div`, {
              className: `_6jMisrq5Zfo-`,
              children: [
                (0, K.jsx)(`div`, {
                  className: `XBv92QzB8Xc-`,
                  children: (0, K.jsx)(a, {
                    url: s,
                    className: `NjUCqxvhkHk-`,
                    bFocusable: !1,
                    children: t?.strName,
                  }),
                }),
                g &&
                  (0, K.jsx)(`div`, {
                    className: `_6iUHDist0Jc-`,
                    children: E(`#Sale_CrossPromoSale_NowThrough`, g),
                  }),
              ],
            }),
          s &&
            !n &&
            !h &&
            !c &&
            (0, K.jsx)(a, {
              url: s,
              className: C(`_6O6T0vupYYc-`, `DuNM8zA4oz0-`),
              fnCanTakeFocus: S,
              children: l,
            }),
          s && h && !i && (0, K.jsx)(u, { label: l, shown: !!r, button: `X` }),
        ],
      }),
      (0, K.jsxs)(`div`, {
        className: C(W, c && `ZONqp3dzTMI-`),
        children: [
          d &&
            (0, K.jsxs)(a, {
              url: s,
              className: C(`oztjxXYIBAk-`, c && `CDF-2WDX3lg-`),
              bFocusable: !!m,
              children: [
                (0, K.jsx)(`img`, { src: d, alt: `` }),
                f &&
                  (0, K.jsx)(`div`, {
                    className: `_7CUHH8Trg28-`,
                    children: (0, K.jsx)(`div`, {
                      className: `ZMGnYjKDOEI-`,
                      children: f,
                    }),
                  }),
              ],
            }),
          o,
        ],
      }),
      s &&
        !h &&
        !c &&
        (0, K.jsx)(`div`, {
          className: C(`T1fHkhyvNkM-`, n && `SAqjQ-F71kA-`),
          children: (0, K.jsx)(a, {
            url: s,
            className: `_6O6T0vupYYc-`,
            fnCanTakeFocus: S,
            children: l,
          }),
        }),
    ],
  });
}
var ve = 60,
  ye = 4;
function be(e) {
  let { rgAppIDs: t, strAvatarURL: n } = e,
    r = D.useMemo(() => N(t), [t]),
    i = s(r, !1),
    a = D.useMemo(() => {
      let e = (i ?? []).slice(0, 24);
      return e.length < ye
        ? []
        : Array.from({ length: ve }, (t, n) => e[n % e.length]);
    }, [i]);
  return a.length
    ? (0, K.jsxs)(`div`, {
        className: le,
        "aria-hidden": !0,
        children: [
          n &&
            (0, K.jsx)(`div`, {
              className: `ODb7GVMZzG8-`,
              style: { backgroundImage: `url(${n})` },
            }),
          (0, K.jsx)(`div`, {
            className: ue,
            children: a.map((e, t) => (0, K.jsx)(xe, { id: e }, t)),
          }),
        ],
      })
    : null;
}
function xe(e) {
  let t = ie(e.id, `header`);
  return t
    ? (0, K.jsx)(`img`, { src: t, alt: ``, loading: `lazy` })
    : (0, K.jsx)(`div`, {});
}
function Se(e) {
  let { children: t, nItemsToFeature: n } = e;
  return (0, K.jsxs)(Q, {
    ...e,
    className: L,
    children: [
      (0, K.jsx)(p, {
        className: B,
        children: (0, K.jsxs)(`div`, {
          className: V,
          children: [
            (0, K.jsx)(`div`, { className: C(H, m), children: `\xA0` }),
            (0, K.jsx)(`div`, { className: C(U, m), children: `\xA0` }),
          ],
        }),
      }),
      (0, K.jsxs)(`div`, {
        className: W,
        children: [
          (0, K.jsx)(p, {
            className: z,
            children: (0, K.jsx)(`div`, { className: C(m, G) }),
          }),
          (0, K.jsx)(Z, { nItemsToFeature: n, children: t }),
        ],
      }),
    ],
  });
}
var Y = {
  strSignedIn: `#Sale_CrossPromoSale_RecommendedFromEvent`,
  strSignedOut: `#Sale_CrossPromoSale_RecommendedFromEvent_notloggedin`,
};
function X(e) {
  return E(
    e
      ? `#Sale_CrossPromoCreator_Visit_${e}`
      : `#Sale_CrossPromoSale_ExploreEvent`,
  );
}
function Z(e) {
  let {
      children: t,
      nItemsToFeature: n,
      strSaleURL: r,
      eCreatorRole: i,
      exploreHint: o,
    } = e,
    s = !!r && !o,
    c = D.useContext(me),
    l = !i && !c,
    d = i || !e.strExploreLabel ? X(i) : e.strExploreLabel,
    f = w.logged_in
      ? x.Localize(Y.strSignedIn)
      : x.LocalizePlural(Y.strSignedOut, n ?? 0);
  return (0, K.jsxs)(`div`, {
    className: I,
    children: [
      (l || s || (o && !o.bInHeading)) &&
        (0, K.jsxs)(`div`, {
          className: `ypQ9RrTsvmE-`,
          children: [
            l && (0, K.jsx)(`div`, { className: `aMHZOpwLiBw-`, children: f }),
            s &&
              (0, K.jsx)(a, {
                url: r,
                className: C(`_6O6T0vupYYc-`, `DuNM8zA4oz0-`),
                fnCanTakeFocus: S,
                children: d,
              }),
            o &&
              !o.bInHeading &&
              (0, K.jsx)(`div`, {
                className: `Ri7uYDYJ-bo-`,
                children: (0, K.jsx)(u, {
                  label: d,
                  shown: o.bShown,
                  button: `X`,
                }),
              }),
          ],
        }),
      t,
      s &&
        (0, K.jsx)(`div`, {
          className: `T1fHkhyvNkM-`,
          children: (0, K.jsx)(a, {
            url: r,
            className: `_6O6T0vupYYc-`,
            fnCanTakeFocus: S,
            children: d,
          }),
        }),
    ],
  });
}
function Q(e) {
  let {
    section: t,
    bInGamepadUI: n,
    placeholderHeight: r,
    className: a,
    "flow-children": s,
    panelProps: l,
    children: u,
  } = e;
  return (0, K.jsx)(ee, {
    placeholderHeight: r,
    className: C({
      [o]: !0,
      [i]: c(t),
      [g]: !0,
      SaleSectionForCustomCSS: !0,
      [P]: !0,
      [a]: !0,
    }),
    rootMargin: f,
    holdGamepadFocus: n,
    "flow-children": s,
    ...l,
    children: u,
  });
}
var Ce = [1e3, 500, 250, 100, 50, 20];
function $(e) {
  let t = e.sale_page_cross_promo_sales?.[0]?.total_items ?? 0,
    n = Ce.find((e) => t >= e);
  return n
    ? E(`#Sale_CrossPromoSale_ExploreItems`, re(n))
    : E(`#Sale_CrossPromoSale_ExploreEvent`);
}
export {
  fe as a,
  se as c,
  oe as d,
  Se as i,
  j as l,
  ge as n,
  de as o,
  _e as r,
  pe as s,
  q as t,
  O as u,
};
